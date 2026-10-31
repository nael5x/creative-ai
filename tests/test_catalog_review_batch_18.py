import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch18Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round18.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 606)
        self.assertEqual(accepted, 324)
        self.assertEqual(rejected, 26)
        self.assertEqual(len(self.catalog) - accepted, 281)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch18_acceptances_have_first_party_evidence(self):
        self.assertEqual(len(self.audit["accepted"]), 15)
        for item in self.audit["accepted"]:
            name = item["name"]
            self.assertIn(name, self.rows)
            review = self.reviews[name]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], self.rows[name][5])
            self.assertTrue(review["evidenceUrls"])
            self.assertTrue(review["userValue"].strip())
            self.assertEqual(review["reviewedAt"], "2026-10-31")

    def test_feature_level_entries_are_transparent(self):
        self.assertIn("integrated into the FlexClip editor", self.rows["FlexClip AI"][2])
        self.assertIn("inside Framer", self.rows["Framer AI"][2])

    def test_github_and_gitlab_products_are_distinguished(self):
        self.assertIn("Open-source AI agent", self.rows["Gemini CLI"][2])
        self.assertIn("GitLab Duo Agent Platform", self.rows["GitLab Duo"][2])

    def test_healthcare_descriptions_require_clinical_review(self):
        self.assertIn("clinician judgment", self.rows["Freed"][2])
        self.assertIn("qualified clinical review", self.rows["Glass Health"][2])

    def test_github_guardian_ai_claim_is_qualified(self):
        self.assertIn("AI supports parts of the workflow", self.rows["GitGuardian"][2])
        self.assertIn("dedicated detectors", self.rows["GitGuardian"][2])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-19")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 14)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["rejected"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["superseded"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 1)
        self.assertEqual(len(self.quality["statusWatch"]), 8)


if __name__ == "__main__":
    unittest.main()
