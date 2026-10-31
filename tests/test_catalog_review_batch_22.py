import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch22Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round22.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 399)
        self.assertEqual(rejected, 29)
        self.assertEqual(len(self.catalog) - accepted, 204)
        self.assertEqual(len(self.quality["tools"]), 428)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch22_acceptances_have_first_party_evidence(self):
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

    def test_kilo_and_kits_ai_are_current_ai_products(self):
        self.assertIn("acquired by Anaconda", self.rows["Kilo Code"][2])
        self.assertIn("https://github.com/Kilo-Org/kilocode", self.reviews["Kilo Code"]["evidenceUrls"])
        self.assertIn("voice conversion and cloning", self.rows["Kits AI"][2].lower())
        self.assertIn("vocal separation", self.rows["Kits AI"][2].lower())

    def test_klaviyo_ai_is_scoped_as_embedded_crm_layer(self):
        self.assertIn("intelligence layer built into Klaviyo", self.rows["Klaviyo AI"][2])
        self.assertIn("not a standalone", self.rows["Klaviyo AI"][3])
        self.assertIn("Composer", self.rows["Klaviyo AI"][2])
        self.assertIn("Customer Agent", self.rows["Klaviyo AI"][2])

    def test_knowt_and_koala_descriptions_reflect_current_suites(self):
        self.assertIn("Kai", self.rows["Knowt"][2])
        self.assertIn("practice tests", self.rows["Knowt"][2])
        self.assertIn("Brand DNA", self.rows["Koala AI"][2])
        self.assertIn("Search Console", self.rows["Koala AI"][2])

    def test_lancedb_is_open_source_multimodal_retrieval(self):
        self.assertIn("Open-source embedded retrieval library", self.rows["LanceDB"][2])
        self.assertIn("full-text and SQL search", self.rows["LanceDB"][2])
        self.assertIn("https://github.com/lancedb/lancedb", self.reviews["LanceDB"]["evidenceUrls"])

    def test_lang_tools_have_distinct_jobs(self):
        self.assertIn("visual framework", self.rows["Langflow"][2])
        self.assertIn("low-level orchestration framework", self.rows["LangGraph"][2])
        self.assertIn("MIT-licensed", self.rows["Langfuse"][2])
        self.assertIn("rather than hosting or orchestrating", self.rows["Langfuse"][3])
        self.assertIn("Framework-agnostic", self.rows["LangSmith"][2])
        self.assertIn("complements orchestration frameworks", self.rows["LangSmith"][3])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
