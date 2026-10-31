import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchSixTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round7.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_fifteen_tools_have_first_party_review_records(self):
        names = (
            "AssemblyAI", "Avoma", "Baseten", "Blackbox AI", "Bolt.new",
            "CodeRabbit", "CrewAI", "Fireflies.ai", "Granola", "Gong",
            "Jasper", "Krisp", "Lindy", "Murf", "Otter.ai",
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

    def test_blackbox_is_categorized_by_its_current_platform_scope(self):
        self.assertEqual(self.rows["Blackbox AI"][1], "AI infrastructure")
        self.assertIn("inference", self.rows["Blackbox AI"][2].lower())
        self.assertIn("coding-agent", self.rows["Blackbox AI"][2].lower())

    def test_trial_labels_match_current_official_offers(self):
        self.assertEqual(self.rows["Avoma"][4], "Free trial / Paid")
        self.assertEqual(self.rows["Jasper"][4], "Free trial / Paid")
        self.assertEqual(self.rows["Lindy"][4], "Free trial / Paid")

    def test_batch_audit_log_matches_review_records(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-6")
        self.assertEqual(len(self.audit["accepted"]), 15)
        for entry in self.audit["accepted"]:
            review = self.reviews[entry["name"]]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], entry["officialUrl"])


if __name__ == "__main__":
    unittest.main()
