import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch20Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round20.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 382)
        self.assertEqual(rejected, 27)
        self.assertEqual(len(self.catalog) - accepted, 221)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch20_acceptances_have_first_party_evidence(self):
        self.assertEqual(len(self.audit["accepted"]), 14)
        for item in self.audit["accepted"]:
            name = item["name"]
            self.assertIn(name, self.rows)
            review = self.reviews[name]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], self.rows[name][5])
            self.assertTrue(review["evidenceUrls"])
            self.assertTrue(review["userValue"].strip())
            self.assertEqual(review["reviewedAt"], "2026-10-31")

    def test_hume_is_scheduled_for_api_sunset_not_declared_shut_down(self):
        self.assertNotIn("Hume AI", self.rows)
        self.assertNotIn("Hume AI", self.lifecycle)
        item = next(x for x in self.audit["statusWatch"] if x["name"] == "Hume AI")
        self.assertEqual(item["status"], "sunsetting")
        self.assertEqual(item["sunsetDate"], "2026-11-13")
        self.assertIn("not an outage", item["reason"])
        self.assertIn("Hume AI", [x["name"] for x in self.quality["statusWatch"]])

    def test_healthcare_tools_keep_their_claims_scoped(self):
        self.assertIn("do not diagnose or prescribe", self.rows["Hippocratic AI"][2])
        self.assertIn("rather than replacing clinician assessment", self.rows["Infermedica"][2])

    def test_hirevue_ai_assessment_description_is_transparent(self):
        self.assertIn("rather than facial expressions", self.rows["HireVue"][2])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-23")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 14)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["rejected"], 1)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["superseded"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 0)
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
