import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch26Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round26.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_meshy_is_current_and_accepted(self):
        row = self.rows["Meshy"]
        review = self.reviews["Meshy"]
        self.assertEqual(row[5], "https://www.meshy.ai/")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("texturing", row[2])
        self.assertIn("rigging", row[2])
        self.assertIn("CAD-precision", row[3])
        self.assertTrue(any("meshy.ai/features" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Meshy"]["event"], "added")

    def test_round26_records_only_the_single_meshy_review(self):
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Meshy")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(self.audit["batch"], "catalog-review-batch-26")


if __name__ == "__main__":
    unittest.main()
