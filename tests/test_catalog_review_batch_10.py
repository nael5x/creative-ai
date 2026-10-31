import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchTenTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.lifecycle = json.loads((ROOT / "data" / "tool-lifecycle.json").read_text(encoding="utf-8"))["tools"]
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.reviews = {row["name"]: row for row in self.quality["tools"]}
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round11.json").read_text(encoding="utf-8"))

    def test_current_tools_are_reviewed_and_have_official_sources(self):
        accepted = (
            "Artbreeder", "Augment Code", "Auphonic", "AutoGPT",
            "AUTOMATIC1111 Stable Diffusion WebUI", "B12", "Base44",
            "BentoML", "Bito", "Boomy", "Botpress", "Braintrust",
            "Brisk Teaching",
        )
        for name in accepted:
            with self.subTest(name=name):
                self.assertIn(name, self.rows)
                review = self.reviews[name]
                self.assertEqual(review["decision"], "accepted")
                self.assertEqual(review["officialUrl"], self.rows[name][5])
                self.assertTrue(review["evidenceUrls"])
                self.assertTrue(review["userValue"])

    def test_non_tool_or_untrusted_destinations_are_removed(self):
        for name in ("AskCodi", "Beatoven.ai"):
            with self.subTest(name=name):
                self.assertNotIn(name, self.rows)
                self.assertNotIn(name, self.lifecycle)
                self.assertEqual(self.reviews[name]["decision"], "rejected")
                self.assertTrue(self.reviews[name]["reason"])

    def test_license_and_availability_labels_are_precise(self):
        expected = {
            "AutoGPT": "Free self-host / Paid hosted",
            "Auphonic": "2h free monthly / Paid",
            "Augment Code": "Paid",
            "B12": "Free tier / Paid",
            "BentoML": "Open source / Paid platform",
            "Bito": "Free trial / Paid",
            "Boomy": "Free creation / Paid commercial downloads",
        }
        for name, availability in expected.items():
            with self.subTest(name=name):
                self.assertEqual(self.rows[name][4], availability)

    def test_catalog_and_lifecycle_remain_consistent_without_a_count_floor(self):
        self.assertTrue(self.catalog)
        self.assertEqual(len(self.catalog), len(self.rows))
        self.assertEqual(len(self.catalog), len(self.lifecycle))
        self.assertEqual(set(self.rows), set(self.lifecycle))
        self.assertTrue(all(len(row) == 6 and all(isinstance(v, str) for v in row) for row in self.catalog))

    def test_audit_round_eleven_is_complete_and_matches_reviews(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-10")
        self.assertEqual(len(self.audit["accepted"]), 13)
        self.assertEqual(len(self.audit["rejected"]), 2)
        self.assertEqual(self.audit["unresolved"], [])
        self.assertEqual(self.audit["rejected"][1]["name"], "Beatoven.ai")


if __name__ == "__main__":
    unittest.main()
