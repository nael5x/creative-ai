import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch35Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round35.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_moises_is_current_and_accepted(self):
        row = self.rows["Moises"]
        review = self.reviews["Moises"]
        self.assertEqual(row[5], "https://moises.ai/")
        self.assertEqual(row[4], "Free tier / Paid")
        self.assertEqual(review["officialUrl"], row[5])
        self.assertEqual(review["decision"], "accepted")
        self.assertEqual(review["reviewedAt"], "2026-10-31")
        self.assertIn("stem generation", row[2])
        self.assertIn("multitrack/MIDI sessions", row[2])
        self.assertIn("₺99.99/month", row[3])
        self.assertIn("₺4,999.99/year", row[3])
        self.assertIn("30-second blocks", row[3])
        self.assertIn("streaming subscription does not grant stem-extraction rights", row[3])
        self.assertTrue(any("moises-launches-studio" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("apps.apple.com/tr/" in url for url in review["evidenceUrls"]))
        self.assertTrue(any("streaming-services" in url for url in review["evidenceUrls"]))
        self.assertEqual(self.lifecycle["Moises"]["event"], "added")

    def test_round35_records_only_the_single_moises_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-35")
        self.assertEqual(len(self.audit["accepted"]), 1)
        self.assertEqual(self.audit["accepted"][0]["name"], "Moises")
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])


if __name__ == "__main__":
    unittest.main()
