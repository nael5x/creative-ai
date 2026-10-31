import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch16Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round16.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 398)
        self.assertEqual(rejected, 29)
        self.assertEqual(len(self.catalog) - accepted, 205)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch16_acceptances_have_first_party_evidence(self):
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

    def test_dubverse_continues_after_exotel_team_acquisition(self):
        item = next(x for x in self.audit["accepted"] if x["name"] == "Dubverse")
        self.assertIn("dubverse-joins-exotel", " ".join(item["evidenceUrls"]))
        self.assertIn("continues to operate independently", " ".join(self.audit["notes"]))

    def test_documind_is_document_workflow_not_general_chat_listing(self):
        row = self.rows["Documind"]
        self.assertIn("multiple PDFs", row[2])
        self.assertIn("source citations", row[2])
        self.assertIn("embeddable knowledge chatbots", row[2])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["superseded"], [])
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
