import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch13Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round13.json")

    def test_catalog_and_quality_totals_are_reconciled(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 605)
        self.assertEqual(accepted, 324)
        self.assertEqual(rejected, 26)
        self.assertEqual(len(self.catalog) - accepted, 281)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_all_batch13_acceptances_have_first_party_evidence(self):
        self.assertEqual(len(self.audit["accepted"]), 14)
        self.assertEqual(len(self.audit["statusWatch"]), 1)
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["superseded"], [])
        for item in self.audit["accepted"]:
            name = item["name"]
            self.assertIn(name, self.rows)
            review = self.reviews[name]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], self.rows[name][5])
            self.assertTrue(review["evidenceUrls"])
            self.assertTrue(review["userValue"].strip())
            self.assertEqual(review["reviewedAt"], "2026-10-31")

    def test_character_ai_is_unresolved_not_discontinued(self):
        self.assertNotIn("Character.AI", self.rows)
        self.assertNotIn("Character.AI", self.lifecycle)
        self.assertNotIn("Character.AI", self.reviews)
        item = next(x for x in self.quality["statusWatch"] if x["name"] == "Character.AI")
        self.assertEqual(item["status"], "unresolved")
        self.assertIn("remains up and running", item["reason"])
        self.assertIn("not evidence", item["reason"])
        self.assertIn("wound down", item["reason"].lower())
        self.assertIn("https://blog.character.ai/an-update-on-character-ai/", item["evidenceUrls"])

    def test_feature_level_entries_are_explicitly_described(self):
        self.assertIn("feature", self.rows["Buffer AI Assistant"][2].lower())
        self.assertIn("not a claim", self.rows["Buffer AI Assistant"][3].lower())
        self.assertIn("feature suite", self.rows["CapCut AI"][3].lower())
        self.assertIn("visual editor", self.rows["Bubble AI"][2].lower())
        self.assertIn("design-to-code", self.rows["Builder.io Visual Copilot"][2].lower())

    def test_current_batch_metadata_matches_audit_artifact(self):
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-19")
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["accepted"], 14)
        self.assertEqual(self.quality["lastQualityReviewBatchSummary"]["statusWatch"], 1)
        self.assertEqual(self.quality["lastStatusWatchReviewSummary"]["total"], 7)


if __name__ == "__main__":
    unittest.main()
