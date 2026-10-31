import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch14Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round14.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 604)
        self.assertEqual(accepted, 368)
        self.assertEqual(rejected, 26)
        self.assertEqual(len(self.catalog) - accepted, 236)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch14_accepted_entries_have_first_party_evidence(self):
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

    def test_cocounsel_alias_is_renamed_without_resetting_tracking_date(self):
        self.assertNotIn("CoCounsel", self.rows)
        self.assertIn("CoCounsel Legal", self.rows)
        lifecycle = self.lifecycle["CoCounsel Legal"]
        self.assertEqual(lifecycle["event"], "added")
        self.assertEqual(lifecycle["previousName"], "CoCounsel")
        self.assertEqual(lifecycle["firstTrackedAt"], "2026-09-13T15:31:18Z")
        old_review = self.reviews["CoCounsel"]
        self.assertEqual(old_review["decision"], "rejected")
        self.assertEqual(old_review["supersededBy"], "CoCounsel Legal")

    def test_connected_papers_is_rejected_as_non_ai_research_graph(self):
        self.assertNotIn("Connected Papers", self.rows)
        self.assertNotIn("Connected Papers", self.lifecycle)
        review = self.reviews["Connected Papers"]
        self.assertEqual(review["decision"], "rejected")
        self.assertIn("co-citation", review["reason"])
        self.assertIn("bibliographic coupling", review["reason"])
        self.assertIn("AI/ML or generative-AI functionality", review["reason"])

    def test_current_batch_metadata(self):
        self.assertEqual(len(self.audit["superseded"]), 1)
        self.assertEqual(len(self.audit["rejected"]), 1)
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-22")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 15)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["rejected"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["superseded"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 0)
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
