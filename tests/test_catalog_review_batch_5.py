import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchFiveTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round6.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_fifteen_tools_have_first_party_review_records(self):
        names = (
            "Abnormal AI", "Ada", "Adobe Podcast", "AgentOps", "AgentQL", "Agno",
            "Ahrefs AI Content Helper", "Aider", "Aidoc", "AIVA", "AI Studios",
            "Alli AI", "Ambience Healthcare", "Anyword", "Anyscale",
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

    def test_ahrefs_free_tier_is_supported_by_official_information(self):
        row = self.rows["Ahrefs AI Content Helper"]
        self.assertEqual(row[4], "Free tier / Paid")
        review = self.reviews["Ahrefs AI Content Helper"]
        self.assertTrue(any("help.ahrefs.com" in url for url in review["evidenceUrls"]))

    def test_anystale_identity_and_customer_continuity_are_not_overstated(self):
        review = self.reviews["Anyscale"]
        self.assertIn("continues under the Anyscale brand", review["userValue"])
        self.assertTrue(any("/press/" in url for url in review["evidenceUrls"]))

    def test_audit_log_matches_the_review_manifest(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-5")
        self.assertEqual(len(self.audit["accepted"]), 15)
        for entry in self.audit["accepted"]:
            review = self.reviews[entry["name"]]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], entry["officialUrl"])


if __name__ == "__main__":
    unittest.main()
