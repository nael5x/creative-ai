import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch36Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round36.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_mokker_is_excluded_due_to_standalone_access_sunset(self):
        watch = {row["name"]: row for row in self.quality["statusWatch"]}
        self.assertNotIn("Mokker AI", self.rows)
        self.assertNotIn("Mokker AI", self.lifecycle)
        self.assertEqual(watch["Mokker AI"]["status"], "sunsetting")
        self.assertEqual(watch["Mokker AI"]["sunsetDate"], "2026-10-31")
        self.assertIn("Mokker access ends Saturday, October 31", watch["Mokker AI"]["reason"])
        self.assertIn("2026-10-31", watch["Mokker AI"]["reason"])
        self.assertIn("Soona", watch["Mokker AI"]["reason"])
        self.assertTrue(any("soona.co/mokker" in url for url in watch["Mokker AI"]["evidenceUrls"]))
        self.assertEqual(self.quality["lastStatusWatchReviewSummary"], {
            "unresolved": 6,
            "sunsetting": 3,
            "maintenanceUnclear": 2,
            "total": 11,
        })

    def test_round36_records_only_the_mokker_sunset_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-36")
        self.assertEqual(self.audit["accepted"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(len(self.audit["statusWatch"]), 1)
        self.assertEqual(self.audit["statusWatch"][0]["name"], "Mokker AI")
        self.assertEqual(self.audit["statusWatch"][0]["status"], "sunsetting")


if __name__ == "__main__":
    unittest.main()
