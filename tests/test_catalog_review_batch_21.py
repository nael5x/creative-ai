import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch21Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round21.json")

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

    def test_batch21_acceptances_have_first_party_evidence(self):
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

    def test_ironclad_is_scoped_as_native_clm_ai(self):
        self.assertIn("within Ironclad's contract lifecycle management platform", self.rows["Ironclad AI"][2])
        self.assertIn("not a standalone", self.rows["Ironclad AI"][3])

    def test_jamie_is_the_bot_free_meeting_product(self):
        self.assertIn("without adding a meeting bot", self.rows["Jamie"][2])
        self.assertIn("meetjamie.ai", self.rows["Jamie"][5])

    def test_jetbrains_assistant_and_junie_are_distinct(self):
        self.assertIn("broader IDE AI layer", self.rows["JetBrains AI Assistant"][3])
        self.assertIn("autonomous coding agent", self.rows["JetBrains Junie"][2])
        self.assertNotEqual(self.rows["JetBrains AI Assistant"][5], self.rows["JetBrains Junie"][5])

    def test_k_health_and_kaedim_have_scoped_descriptions(self):
        self.assertIn("health systems", self.rows["K Health"][2].lower())
        self.assertIn("PatientGPT", self.rows["K Health"][2])
        self.assertIn("studio-oriented production service", self.rows["Kaedim"][3])

    def test_julius_and_kaiber_current_product_scope(self):
        self.assertIn("websites, images and video", self.rows["Julius AI"][2])
        self.assertIn("Canvas", self.rows["Kaiber"][2])
        self.assertIn("Beat Sync", self.rows["Kaiber"][2])
        self.assertIn("Editor", self.rows["Kaiber"][2])

    def test_khanmigo_access_restrictions_are_visible(self):
        self.assertIn("US accounts", self.rows["Khanmigo"][3])
        self.assertIn("school or district", self.rows["Khanmigo"][3])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-23")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 14)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["rejected"], 1)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["superseded"], 0)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 0)
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
