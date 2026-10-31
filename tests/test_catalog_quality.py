import json
import unittest
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogQualityTests(unittest.TestCase):
    def setUp(self):
        self.catalog = load_json("data/tools.json")
        self.quality = load_json("data/catalog-quality.json")
        self.by_name = {row[0]: row for row in self.catalog}

    def test_quality_manifest_has_first_party_evidence_and_consistent_decisions(self):
        self.assertEqual(self.quality["schemaVersion"], 1)
        self.assertEqual(self.quality["policy"], "docs/CATALOG_QUALITY_POLICY.md")
        reviews = self.quality["tools"]
        self.assertGreaterEqual(len(reviews), 25)
        seen = set()
        for review in reviews:
            with self.subTest(name=review.get("name")):
                name = review["name"]
                self.assertNotIn(name, seen)
                seen.add(name)
                self.assertIn(review["decision"], {"accepted", "rejected"})
                self.assertTrue(review["userValue"].strip())
                self.assertTrue(review["evidenceUrls"])
                self.assertTrue(all(url.startswith(("https://", "http://")) for url in review["evidenceUrls"]))
                date.fromisoformat(review["reviewedAt"])
                if review["decision"] == "accepted":
                    self.assertIn(name, self.by_name)
                    self.assertEqual(review["officialUrl"], self.by_name[name][5])
                else:
                    self.assertNotIn(name, self.by_name)
                    self.assertTrue(review.get("reason", "").strip())

    def test_quality_ui_has_reviewed_filter_and_transparent_pending_state(self):
        tools_html = (ROOT / "tools.html").read_text(encoding="utf-8")
        quality_html = (ROOT / "quality.html").read_text(encoding="utf-8")
        self.assertIn('data-view="reviewed"', tools_html)
        self.assertIn("catalog-quality.json", tools_html)
        self.assertIn("Official-source reviewed", tools_html)
        self.assertIn("no vote or popularity ranking", tools_html)
        self.assertTrue("Official-source reviewed" in quality_html or "OFFICIAL-SOURCE REVIEW" in quality_html)
        self.assertIn("Pending audit", quality_html)
        self.assertIn("not a popularity ranking or paid placement", quality_html)
        self.assertIn("catalog-quality.json", quality_html)

    def test_submission_requires_user_value_and_first_party_evidence(self):
        submit = (ROOT / "submit.html").read_text(encoding="utf-8")
        self.assertIn('id="userValue" required', submit)
        self.assertIn('id="evidence" required', submit)
        self.assertIn("first-party", submit)
        self.assertIn("Third-party directories", submit)


if __name__ == "__main__":
    unittest.main()
