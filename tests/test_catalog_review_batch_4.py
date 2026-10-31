import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchFourTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round5.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_fifteen_tools_have_current_first_party_review_records(self):
        names = (
            "Abridge", "AlphaSense", "Apify", "Apollo", "Asana AI", "Bardeen",
            "Beautiful.ai", "Clay", "Cline", "ClickUp Brain", "Darktrace",
            "DataRobot", "Deepgram", "Descript", "Docling",
        )
        for name in names:
            with self.subTest(name=name):
                self.assertIn(name, self.rows)
                review = self.reviews[name]
                self.assertEqual(review["decision"], "accepted")
                self.assertEqual(review["reviewedAt"], "2026-10-31")
                self.assertEqual(review["officialUrl"], self.rows[name][5])
                self.assertTrue(review["evidenceUrls"])
                self.assertTrue(review["userValue"].strip())

    def test_canonical_destinations_are_used(self):
        self.assertEqual(self.rows["ClickUp Brain"][5], "https://clickup.com/brain")
        self.assertEqual(self.rows["DataRobot"][5], "https://www.datarobot.com/product/agentic-ai/")

    def test_audit_log_matches_the_review_manifest(self):
        self.assertEqual(len(self.audit["accepted"]), 15)
        self.assertEqual(len(self.audit["canonicalUrlUpdates"]), 2)
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-4")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 15)


if __name__ == "__main__":
    unittest.main()
