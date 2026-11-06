import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch32Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round32.json")

    def test_catalog_quality_and_lifecycle_are_consistent(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(accepted + rejected, len(self.quality["tools"]))
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_mindmac_is_excluded_pending_maintenance_confirmation(self):
        watch = {row["name"]: row for row in self.quality["statusWatch"]}
        self.assertNotIn("MindMac", self.rows)
        self.assertNotIn("MindMac", self.lifecycle)
        self.assertEqual(watch["MindMac"]["status"], "maintenance-unclear")
        self.assertIn("2025-04-22", watch["MindMac"]["reason"])
        self.assertIn("no maintainer response", watch["MindMac"]["reason"])
        self.assertTrue(any("issues/15" in url for url in watch["MindMac"]["evidenceUrls"]))
        self.assertTrue(any("issues/14" in url for url in watch["MindMac"]["evidenceUrls"]))
        summary = self.quality["lastStatusWatchReviewSummary"]
        entries = self.quality["statusWatch"]
        self.assertEqual(summary["total"], len(entries))
        self.assertEqual(summary["unresolved"], sum(item["status"] == "unresolved" for item in entries))
        self.assertEqual(summary["sunsetting"], sum(item["status"] == "sunsetting" for item in entries))
        self.assertEqual(summary["maintenanceUnclear"], sum(item["status"] == "maintenance-unclear" for item in entries))

    def test_round32_records_only_the_mindmac_status_watch_review(self):
        self.assertEqual(self.audit["batch"], "catalog-review-batch-32")
        self.assertEqual(self.audit["accepted"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(len(self.audit["statusWatch"]), 1)
        self.assertEqual(self.audit["statusWatch"][0]["name"], "MindMac")
        self.assertEqual(self.audit["statusWatch"][0]["status"], "maintenance-unclear")


if __name__ == "__main__":
    unittest.main()
