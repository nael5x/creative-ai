import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch29Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round29.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_security_copilot_is_current_and_accepted(self):
        row = self.rows["Microsoft Security Copilot"]
        review = self.reviews["Microsoft Security Copilot"]
        self.assertEqual(row[5], "https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot")
        self.assertEqual(row[4], "Included with eligible Microsoft 365 E5/E7 / Paid SCU")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("triage alerts", row[2])
        self.assertIn("KQL queries", row[2])
        self.assertIn("$4 per provisioned SCU-hour", row[3])
        self.assertIn("$6 per overage SCU", row[3])
        self.assertIn("Turkish is not among the currently listed model languages", row[3])
        self.assertTrue(any("faq-security-copilot" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("security-copilot-inclusion" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Microsoft Security Copilot"]["event"], "added")

    def test_round29_records_only_the_single_security_copilot_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-29")
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Microsoft Security Copilot")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])


if __name__ == "__main__":
    unittest.main()
