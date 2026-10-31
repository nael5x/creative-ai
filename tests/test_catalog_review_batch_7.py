import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchSevenTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.audit = json.loads((ROOT / "data" / "catalog-audit-round8.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_fifteen_tools_have_first_party_review_records(self):
        names = (
            "Decagon", "DeepL", "Elicit", "Glean", "Groq", "Harvey",
            "LlamaIndex", "OpenRouter", "Pinecone", "Poe", "Replicate",
            "Suno", "Synthesia", "Together AI", "Weights & Biases",
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

    def test_elicit_description_reflects_the_current_research_agent(self):
        description = self.rows["Elicit"][2].lower()
        self.assertIn("research agent", description)
        self.assertIn("systematic-review", self.reviews["Elicit"]["userValue"].lower())

    def test_suno_commercial_rights_caveat_is_preserved(self):
        self.assertIn("commercial-use rights", self.reviews["Suno"]["userValue"])
        self.assertIn("plans distinguish", self.reviews["Suno"]["userValue"])

    def test_llamaindex_includes_open_source_and_hosted_offerings(self):
        self.assertEqual(self.rows["LlamaIndex"][4], "Open source / Paid")
        self.assertIn("hosted document platform", self.rows["LlamaIndex"][2].lower())

    def test_batch_audit_log_matches_review_manifest(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-7")
        self.assertEqual(len(self.audit["accepted"]), 15)
        for entry in self.audit["accepted"]:
            review = self.reviews[entry["name"]]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], entry["officialUrl"])


if __name__ == "__main__":
    unittest.main()
