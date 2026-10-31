import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchThreeTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.lifecycle = json.loads((ROOT / "data" / "tool-lifecycle.json").read_text(encoding="utf-8"))
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round4.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_twelve_reviewed_tools_have_current_first_party_records(self):
        names = (
            "Kiro", "Letta", "Langroid", "MetaGPT", "smolagents",
            "Salesforce Agentforce", "Databricks Genie Agents", "Snowflake Cortex",
            "Tableau Pulse", "Qlik Answers", "Nanonets", "HubSpot Breeze",
        )
        for name in names:
            with self.subTest(name=name):
                self.assertIn(name, self.rows)
                self.assertIn(name, self.reviews)
                review = self.reviews[name]
                self.assertEqual(review["decision"], "accepted")
                self.assertEqual(review["reviewedAt"], "2026-10-31")
                self.assertEqual(review["officialUrl"], self.rows[name][5])
                self.assertTrue(review["evidenceUrls"])
                self.assertTrue(review["userValue"].strip())

    def test_databricks_identity_is_renamed_without_losing_lifecycle_history(self):
        self.assertNotIn("Databricks Genie", self.rows)
        self.assertIn("Databricks Genie Agents", self.rows)
        self.assertNotIn("Databricks Genie", self.lifecycle["tools"])
        self.assertEqual(
            self.lifecycle["tools"]["Databricks Genie Agents"],
            {"firstTrackedAt": "2026-09-14T00:53:43Z", "event": "added"},
        )
        old_review = self.reviews["Databricks Genie"]
        self.assertEqual(old_review["decision"], "rejected")
        self.assertEqual(old_review["supersededBy"], "Databricks Genie Agents")
        self.assertTrue(old_review["reason"])

    def test_batch_audit_log_matches_review_records(self):
        self.assertEqual(len(self.audit["accepted"]), 12)
        self.assertEqual(len(self.audit["renamed"]), 1)
        self.assertEqual(self.audit["renamed"][0]["newName"], "Databricks Genie Agents")
        self.assertEqual(self.audit["renamed"][0]["previousUrl"], "https://www.databricks.com/product/ai-bi/genie")
        self.assertEqual(self.audit["batch"], "catalog-review-batch-3")
        for entry in self.audit["accepted"]:
            review = self.reviews[entry["name"]]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], entry["officialUrl"])


if __name__ == "__main__":
    unittest.main()
