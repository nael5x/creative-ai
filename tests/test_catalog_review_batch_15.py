import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch15Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round15.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 606)
        self.assertEqual(accepted, 265)
        self.assertEqual(rejected, 26)
        self.assertEqual(len(self.catalog) - accepted, 341)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch15_accepted_entries_have_first_party_evidence(self):
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

    def test_creatomate_is_rejected_for_lack_of_native_ai(self):
        self.assertNotIn("Creatomate", self.rows)
        self.assertNotIn("Creatomate", self.lifecycle)
        review = self.reviews["Creatomate"]
        self.assertEqual(review["decision"], "rejected")
        self.assertIn("external AI assistant", review["reason"])
        self.assertIn("first-party AI function", review["reason"])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["rejected"][0]["name"], "Creatomate")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-15")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 14)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["rejected"], 1)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["superseded"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 0)
        self.assertEqual(len(self.quality["statusWatch"]), 7)


if __name__ == "__main__":
    unittest.main()
