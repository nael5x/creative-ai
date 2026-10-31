import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch39Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round39.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_mutiny_is_currently_a_gtm_agent_not_website_personalization(self):
        row = self.rows["Mutiny"]
        review = self.reviews["Mutiny"]
        self.assertEqual(row[1], "Sales")
        self.assertEqual(row[5], "https://www.mutinyhq.com/")
        self.assertEqual(row[4], "Free tier / Paid")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("Agentic go-to-market assistant", row[2])
        self.assertIn("deal rooms", row[2])
        self.assertIn("5 daily credits", row[3])
        self.assertIn("$50/month", row[3])
        self.assertIn("$40,000/year", row[3])
        self.assertIn("retired its earlier website-personalization", row[3])
        self.assertNotIn("website personalization platform", row[2].lower())
        self.assertTrue(any("/pricing" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("help.mutinyhq.com" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("ycombinator.com/launches" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Mutiny"]["event"], "added")

    def test_round39_records_only_the_single_mutiny_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-39")
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Mutiny")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])


if __name__ == "__main__":
    unittest.main()
