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
            "10Web", "11x", "Ada Health", "AdCreative.ai", "AI2SQL",
            "Cato AI Security", "Airtable AI", "Akkio", "Alpha3D",
            "Altered Studio", "Amazon Q Developer", "Andi", "Arcads",
            "Arize Phoenix", "Artisan",
        )
        self.assertTrue(self.catalog)
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
        self.assertIn("read-only", self.rows["AI2SQL"][2].lower())
        self.assertIn("https://ai2sql.io/mcp/", self.reviews["AI2SQL"]["evidenceUrls"])
        self.assertIn("April 30, 2027", self.rows["Amazon Q Developer"][2])
        self.assertIn("IDE plugins", self.rows["Amazon Q Developer"][2])
        self.assertEqual(self.rows["Artisan"][4], "Paid")
        self.assertIn("https://www.artisan.co/pricing", self.reviews["Artisan"]["evidenceUrls"])

    def test_ci_runs_the_full_suite_and_schedules_link_audits(self):
        validate = (ROOT / ".github" / "workflows" / "validate-tools.yml").read_text(encoding="utf-8")
        tests = (ROOT / ".github" / "workflows" / "test-feed-parsers.yml").read_text(encoding="utf-8")
        links = (ROOT / ".github" / "workflows" / "catalog-link-audit.yml").read_text(encoding="utf-8")
        for path in ("data/catalog-quality.json", "data/tool-lifecycle.json", "data/verified-facts.json"):
            self.assertIn(path, validate)
        self.assertIn("python -m pytest -q", tests)
        self.assertIn("schedule:", links)
        self.assertIn('cron: "15 5 * * 1"', links)

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
