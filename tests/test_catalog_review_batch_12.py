import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch12Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round12.json")

    def test_batch12_catalog_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 606)
        self.assertEqual(accepted, 324)
        self.assertEqual(rejected, 26)
        self.assertEqual(len(self.catalog) - accepted, 281)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch12_audit_counts_and_quality_evidence(self):
        self.assertEqual(len(self.audit["accepted"]), 13)
        self.assertEqual(len(self.audit["superseded"]), 1)
        self.assertEqual(len(self.audit["statusWatch"]), 2)
        for item in self.audit["accepted"]:
            self.assertEqual(self.reviews[item["name"]]["decision"], "accepted")
            self.assertEqual(self.rows[item["name"]][5], self.reviews[item["name"]]["officialUrl"])
            self.assertTrue(item["evidenceUrls"])
        self.assertEqual(self.quality["lastQualityReviewBatch"], "catalog-review-batch-19")

    def test_augment_identity_is_replaced_by_harness_cosmos(self):
        self.assertNotIn("Augment Code", self.rows)
        self.assertIn("Harness Cosmos Software Factory Agent", self.rows)
        self.assertEqual(self.reviews["Harness Cosmos Software Factory Agent"]["decision"], "accepted")
        self.assertEqual(self.lifecycle["Harness Cosmos Software Factory Agent"]["firstTrackedAt"], "2026-09-13T14:59:23Z")
        self.assertNotIn("Augment Code", self.lifecycle)
        rename = self.audit["superseded"][0]
        self.assertEqual(rename["oldName"], "Augment Code")
        self.assertEqual(rename["newName"], "Harness Cosmos Software Factory Agent")

    def test_verified_tools_are_current_first_party_products(self):
        names = [
            "Artbreeder", "AskCodi", "Auphonic", "AutoGPT", "B12", "Base44",
            "BentoML", "Bito", "Boomy", "Botpress", "Braintrust", "Brisk Teaching",
        ]
        for name in names:
            self.assertIn(name, self.rows)
            self.assertEqual(self.reviews[name]["decision"], "accepted")
            self.assertTrue(self.reviews[name]["evidenceUrls"])
            self.assertTrue(self.reviews[name]["userValue"].strip())

    def test_automatic1111_is_maintenance_unclear_not_discontinued(self):
        self.assertNotIn("AUTOMATIC1111 Stable Diffusion WebUI", self.rows)
        item = next(x for x in self.quality["statusWatch"] if x["name"] == "AUTOMATIC1111 Stable Diffusion WebUI")
        self.assertEqual(item["status"], "maintenance-unclear")
        self.assertIn("2024-05-17", item["reason"])
        self.assertIn("not proof of shutdown", item["reason"].lower())

    def test_beatoven_is_unresolved_due_to_site_integrity_not_shutdown(self):
        self.assertNotIn("Beatoven.ai", self.rows)
        item = next(x for x in self.quality["statusWatch"] if x["name"] == "Beatoven.ai")
        self.assertEqual(item["status"], "unresolved")
        self.assertIn("Futurense", item["reason"])
        self.assertIn("not a claim", item["reason"].lower())
        self.assertTrue(item["nextAction"])


if __name__ == "__main__":
    unittest.main()
