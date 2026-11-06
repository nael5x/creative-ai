import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch33Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round33.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_mixo_is_current_and_accepted(self):
        row = self.rows["Mixo"]
        review = self.reviews["Mixo"]
        self.assertEqual(row[5], "https://www.mixo.io/")
        self.assertEqual(row[4], "Free tier / Paid")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("contact forms", row[2])
        self.assertIn("enquiry tracking", row[2])
        self.assertIn("not a custom web application", row[3])
        self.assertIn("one page on a Mixo subdomain", row[3])
        self.assertIn("$9/month Basic", row[3])
        self.assertIn("$19 Growth", row[3])
        self.assertIn("$39 Premium", row[3])
        self.assertIn("20% annual-billing discount", row[3])
        self.assertTrue(any("features" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("does-mixo-have-a-free-plan" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("donde-esta-el-precio" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Mixo"]["event"], "added")

    def test_round33_records_only_the_single_mixo_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-33")
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Mixo")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])


if __name__ == "__main__":
    unittest.main()
