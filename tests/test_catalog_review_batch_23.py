import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch23Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round23.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 382)
        self.assertEqual(rejected, 27)
        self.assertEqual(len(self.catalog) - accepted, 221)
        self.assertEqual(len(self.quality["tools"]), 409)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch23_has_14_acceptances_and_one_evidence_based_rejection(self):
        self.assertEqual(len(self.audit["accepted"]), 14)
        self.assertEqual(len(self.audit["rejected"]), 1)
        for item in self.audit["accepted"]:
            name = item["name"]
            self.assertIn(name, self.rows)
            review = self.reviews[name]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], self.rows[name][5])
            self.assertTrue(review["evidenceUrls"])
            self.assertTrue(review["userValue"].strip())
            self.assertEqual(review["reviewedAt"], "2026-10-31")

    def test_litmaps_is_rejected_and_removed_from_active_catalog(self):
        self.assertNotIn("Litmaps", self.rows)
        self.assertNotIn("Litmaps", self.lifecycle)
        item = self.reviews["Litmaps"]
        self.assertEqual(item["decision"], "rejected")
        self.assertIn("do not document", item["reason"])
        self.assertIn("https://www.litmaps.com/features", item["evidenceUrls"])

    def test_later_ai_is_an_embedded_beta_feature_set(self):
        self.assertIn("built into Later", self.rows["Later AI"][2])
        self.assertIn("beta", self.rows["Later AI"][2])
        self.assertIn("English-only", self.rows["Later AI"][2])
        self.assertIn("not a standalone", self.rows["Later AI"][3])

    def test_legalon_keeps_attorney_review_in_the_loop(self):
        self.assertIn("attorney review", self.rows["LegalOn"][2])
        self.assertIn("does not replace attorneys", self.rows["LegalOn"][3])

    def test_lemlist_and_lavender_have_distinct_sales_jobs(self):
        self.assertIn("lemAgent", self.rows["lemlist"][2])
        self.assertIn("previously called AI Copilot", self.rows["lemlist"][2])
        self.assertIn("Ora", self.rows["Lavender"][2])
        self.assertIn("Email Coach", self.rows["Lavender"][2])

    def test_local_model_runtime_and_desktop_manager_are_distinct(self):
        self.assertIn("C/C++ inference engine", self.rows["llama.cpp"][2])
        self.assertIn("Desktop and developer environment", self.rows["LM Studio"][2])
        self.assertIn("llmster", self.rows["LM Studio"][2])

    def test_lily_and_lokalise_current_platform_scopes(self):
        self.assertIn("Lily Max", self.rows["Lily AI"][2])
        self.assertIn("agentic product-intelligence", self.rows["Lily AI"][2])
        self.assertIn("AI localization capabilities embedded in Lokalise", self.rows["Lokalise AI"][2])
        self.assertIn("not a separate translation chatbot", self.rows["Lokalise AI"][3])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-23")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 14)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["rejected"], 1)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["superseded"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 0)
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
