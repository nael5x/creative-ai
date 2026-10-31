import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch31Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round31.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_mindgrasp_is_current_and_accepted(self):
        row = self.rows["Mindgrasp"]
        review = self.reviews["Mindgrasp"]
        self.assertEqual(row[5], "https://www.mindgrasp.ai/")
        self.assertEqual(row[4], "Free trial / Paid")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("flashcards", row[2])
        self.assertIn("practice tests", row[2])
        self.assertIn("live lecture recording", row[2])
        self.assertIn("35", row[3])
        self.assertIn("$9.99/month", row[3])
        self.assertIn("$5.99/month billed annually", row[3])
        self.assertIn("Verify AI-generated notes", row[3])
        self.assertTrue(any("ai-study-tools" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("pick-plan" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Mindgrasp"]["event"], "added")

    def test_round31_records_only_the_single_mindgrasp_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-31")
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Mindgrasp")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])


if __name__ == "__main__":
    unittest.main()
