import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch30Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round30.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_mindgard_is_current_and_accepted(self):
        row = self.rows["Mindgard"]
        review = self.reviews["Mindgard"]
        self.assertEqual(row[5], "https://mindgard.ai/")
        self.assertEqual(row[4], "Paid / Contact sales")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("agentic reconnaissance", row[2])
        self.assertIn("adaptive red teaming", row[2])
        self.assertIn("MCP/A2A", row[2])
        self.assertIn("prompt injection", row[3])
        self.assertIn("no public platform price found", row[3])
        self.assertIn("complements rather than replaces", row[3])
        self.assertTrue(any("ai-security-platform" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("ai-red-teaming" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Mindgard"]["event"], "added")

    def test_round30_records_only_the_single_mindgard_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-30")
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Mindgard")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])


if __name__ == "__main__":
    unittest.main()
