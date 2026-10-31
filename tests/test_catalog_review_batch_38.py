import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch38Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round38.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_mubert_is_current_and_accepted(self):
        row = self.rows["Mubert"]
        review = self.reviews["Mubert"]
        self.assertEqual(row[5], "https://mubert.com/")
        self.assertEqual(row[4], "Free tier / Paid")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("chat- and image-to-music", row[2])
        self.assertIn("podcast editor", row[2])
        self.assertIn("music-generation and streaming API", row[2])
        self.assertIn("25 tracks/month and 5 downloads", row[3])
        self.assertIn("$11.69/month billed annually", row[3])
        self.assertIn("$32.49/month annually", row[3])
        self.assertIn("non-commercial restrictions", row[3])
        self.assertIn("cannot be redistributed as standalone music", row[3])
        self.assertTrue(any("render/pricing" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("api/plans" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("mubert_render_license.pdf" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Mubert"]["event"], "added")

    def test_round38_records_only_the_single_mubert_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-38")
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Mubert")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])


if __name__ == "__main__":
    unittest.main()
