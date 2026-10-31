import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch19Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round19.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 382)
        self.assertEqual(rejected, 27)
        self.assertEqual(len(self.catalog) - accepted, 221)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch19_acceptances_have_first_party_evidence(self):
        self.assertEqual(len(self.audit["accepted"]), 14)
        for item in self.audit["accepted"]:
            name = item["name"]
            self.assertIn(name, self.rows)
            review = self.reviews[name]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], self.rows[name][5])
            self.assertTrue(review["evidenceUrls"])
            self.assertTrue(review["userValue"].strip())
            self.assertEqual(review["reviewedAt"], "2026-10-31")

    def test_helicone_is_unresolved_and_not_listed_as_active(self):
        self.assertNotIn("Helicone", self.rows)
        self.assertNotIn("Helicone", self.lifecycle)
        item = next(x for x in self.audit["statusWatch"] if x["name"] == "Helicone")
        self.assertEqual(item["status"], "unresolved")
        self.assertIn("new signups are disabled", item["reason"])
        self.assertIn("Helicone", [x["name"] for x in self.quality["statusWatch"]])

    def test_open_source_local_and_agent_platform_claims(self):
        self.assertIn("Open-source", self.rows["Goose"][2])
        self.assertIn("locally", self.rows["Goose"][2])
        self.assertIn("locally", self.rows["GPT4All"][2])
        self.assertIn("MCP", self.rows["Grain"][2])
        self.assertIn("Hex 4.0", self.rows["Hex"][2])

    def test_grok_and_gorgias_products_are_scoped_correctly(self):
        self.assertIn("Grok Bot is a separate agent product", self.rows["Grok"][2])
        self.assertIn("pre-purchase shopping assistant", self.rows["Gorgias AI"][2])

    def test_healthcare_listing_is_clinician_focused(self):
        self.assertIn("clinicians", self.rows["Heidi Health"][3])
        self.assertIn("clinicians", self.rows["Heidi Health"][2])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-23")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 14)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["rejected"], 1)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["superseded"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 0)
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
