import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchNineTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.lifecycle = json.loads((ROOT / "data" / "tool-lifecycle.json").read_text(encoding="utf-8"))["tools"]
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round10.json").read_text(encoding="utf-8"))
        self.recommender = json.loads((ROOT / "data" / "recommender.json").read_text(encoding="utf-8"))["profiles"]
        self.fit = json.loads((ROOT / "data" / "recommender-fit.json").read_text(encoding="utf-8"))
        self.updates = json.loads((ROOT / "data" / "updates.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_superseded_and_retired_names_are_not_active(self):
        old_names = (
            "AutoGen", "Semantic Kernel", "Clio Duo", "ContentShake AI",
            "Flowise", "Freepik AI", "GitHub Spark", "Hostinger Horizons",
            "Lakera", "Le Chat", "Lexis+ AI", "Luma Dream Machine",
            "Sora", "Superhuman", "Topaz Video AI", "Devika",
        )
        for name in old_names:
            with self.subTest(name=name):
                self.assertNotIn(name, self.rows)
                self.assertNotIn(name, self.lifecycle)
                self.assertEqual(self.reviews[name]["decision"], "rejected")
                self.assertTrue(self.reviews[name]["reason"])

    def test_current_successors_are_active_and_reviewed(self):
        names = (
            "Microsoft Agent Framework", "Manage AI", "Content Toolkit",
            "Hostinger AI Builder", "Check Point AI Security", "Vibe",
            "Lexis+ with Protégé", "Luma App", "Superhuman Mail", "Topaz Video",
        )
        for name in names:
            with self.subTest(name=name):
                self.assertIn(name, self.rows)
                self.assertEqual(self.reviews[name]["decision"], "accepted")
                self.assertEqual(self.reviews[name]["officialUrl"], self.rows[name][5])
                self.assertTrue(self.reviews[name]["evidenceUrls"])

    def test_freepik_ai_is_merged_into_magnific_and_accurately_labeled(self):
        self.assertNotIn("Freepik AI", self.rows)
        self.assertIn("Magnific", self.rows)
        self.assertEqual(self.rows["Magnific"][4], "Free tier / Paid")
        self.assertEqual(self.rows["Magnific"][5], "https://www.magnific.com/")
        self.assertEqual(self.reviews["Freepik AI"]["supersededBy"], "Magnific")

    def test_recommender_and_update_monitor_drop_retired_products(self):
        self.assertNotIn("Flowise", self.recommender)
        self.assertNotIn("Flowise", self.fit)
        self.assertNotIn("Luma Dream Machine", self.recommender)
        self.assertIn("Luma App", self.recommender)
        self.assertIn("Microsoft Agent Framework", self.recommender)
        self.assertIn("Vibe", self.recommender)
        self.assertIn("Manage AI", self.recommender)
        self.assertIn("Manage AI", self.fit)
        self.assertNotIn("Flowise", self.updates["sources"])
        self.assertFalse(any(item["source"] == "Flowise" for item in self.updates["items"]))
        self.assertEqual(self.updates["sourceHealth"]["total"], 9)

    def test_quality_first_does_not_enforce_a_minimum_catalog_count(self):
        self.assertTrue(self.catalog)
        self.assertEqual(len(self.catalog), len(self.rows))
        self.assertEqual(len(self.catalog), len(self.lifecycle))
        self.assertTrue(all(len(row) == 6 for row in self.catalog))

    def test_audit_batch_matches_recorded_successors_and_retirements(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-9")
        self.assertEqual(len(self.audit["accepted"]), 10)
        self.assertEqual(len(self.audit["superseded"]), 12)
        self.assertEqual(len(self.audit["retired"]), 4)
        self.assertEqual(len(self.audit["mergedIntoExisting"]), 1)
        self.assertEqual(self.audit["mergedIntoExisting"][0]["newName"], "Magnific")


if __name__ == "__main__":
    unittest.main()
