import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch25Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round25.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 398)
        self.assertEqual(rejected, 29)
        self.assertEqual(len(self.catalog) - accepted, 205)
        self.assertEqual(len(self.quality["tools"]), 427)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_merlin_is_current_and_accepted(self):
        row = self.rows["Merlin"]
        review = self.reviews["Merlin"]
        self.assertEqual(row[5], "https://www.getmerlin.in/")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertTrue(any("chromewebstore.google.com" in url for url in review["evidenceUrls"]))
        self.assertIn("page-aware Q&A", row[2])
        self.assertIn("YouTube videos", row[2])
        self.assertIn("Projects", row[2])
        self.assertEqual(self.lifecycle["Merlin"]["event"], "added")

    def test_round25_records_only_the_single_merlin_review(self):
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Merlin")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-25")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 1)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["updatedExisting"], 1)


if __name__ == "__main__":
    unittest.main()
