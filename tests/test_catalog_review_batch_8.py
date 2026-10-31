import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchEightTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.lifecycle = json.loads((ROOT / "data" / "tool-lifecycle.json").read_text(encoding="utf-8"))
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round9.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_fifteen_active_tools_have_first_party_review_records(self):
        names = (
            "10Web", "11x", "Ada Health", "AdCreative.ai", "AI2sql",
            "Cato AI Security", "Airtable AI", "Akkio", "Alpha3D",
            "Altered Studio", "Amazon Q Developer", "Andi", "Arcads",
            "Arize Phoenix", "Artisan",
        )
        self.assertEqual(len(self.catalog), 614)
        for name in names:
            with self.subTest(name=name):
                self.assertIn(name, self.rows)
                review = self.reviews[name]
                self.assertEqual(review["decision"], "accepted")
                self.assertEqual(review["reviewedAt"], "2026-10-31")
                self.assertEqual(review["officialUrl"], self.rows[name][5])
                self.assertTrue(review["evidenceUrls"])
                self.assertTrue(review["userValue"].strip())
                self.assertTrue(all(url.startswith("https://") for url in review["evidenceUrls"]))

    def test_aim_security_identity_is_superseded_by_cato_without_losing_history(self):
        self.assertNotIn("Aim Security", self.rows)
        self.assertIn("Cato AI Security", self.rows)
        self.assertNotIn("Aim Security", self.lifecycle["tools"])
        self.assertEqual(
            self.lifecycle["tools"]["Cato AI Security"],
            {"firstTrackedAt": "2026-09-13T15:46:53Z", "event": "added"},
        )
        old_review = self.reviews["Aim Security"]
        self.assertEqual(old_review["decision"], "rejected")
        self.assertEqual(old_review["supersededBy"], "Cato AI Security")
        self.assertTrue(old_review["reason"])

    def test_current_product_scope_and_license_corrections_are_preserved(self):
        self.assertEqual(self.rows["10Web"][4], "Free to build / Paid to launch")
        self.assertEqual(self.rows["Ada Health"][4], "Free")
        self.assertEqual(self.rows["AdCreative.ai"][4], "Free trial / Paid")
        self.assertEqual(self.rows["Airtable AI"][4], "Free tier / Paid")
        self.assertEqual(self.rows["Airtable AI"][5], "https://www.airtable.com/platform/ai")
        self.assertEqual(self.rows["Akkio"][1], "Marketing")
        self.assertEqual(self.rows["Altered Studio"][1], "Voice & audio")
        self.assertEqual(self.rows["Altered Studio"][4], "Free tier / Paid")
        self.assertEqual(self.rows["Arize Phoenix"][4], "Free self-host / Elastic License 2.0")
        self.assertIn("read-only", self.rows["AI2sql"][2].lower())
        self.assertEqual(self.rows["Artisan"][4], "Free to start / Paid")

    def test_audit_artifact_matches_the_quality_manifest(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-8")
        self.assertEqual(len(self.audit["accepted"]), 15)
        self.assertEqual(len(self.audit["renamed"]), 1)
        self.assertEqual(self.audit["renamed"][0]["newName"], "Cato AI Security")
        for item in self.audit["accepted"]:
            review = self.reviews[item["name"]]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], item["officialUrl"])


if __name__ == "__main__":
    unittest.main()
