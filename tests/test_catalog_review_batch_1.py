import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogReviewBatchOneTests(unittest.TestCase):
    def test_reviewed_batch_has_first_party_evidence_and_exact_urls(self):
        catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        catalog_by_name = {row[0]: row for row in catalog}
        reviews = {row["name"]: row for row in quality["tools"]}
        names = (
            "Bearly AI", "Sider", "Voila", "HARPA AI", "Monica", "TypingMind",
            "Raycast AI", "ChatPDF", "PDF.ai", "AskYourPDF", "Sharly AI",
            "Fooocus", "Invoke", "Kittl", "Microsoft Designer", "Adobe Express",
            "Designs.ai", "Pictory", "Pixelcut",
        )
        for name in names:
            with self.subTest(name=name):
                self.assertIn(name, catalog_by_name)
                self.assertIn(name, reviews)
                review = reviews[name]
                self.assertEqual(review["decision"], "accepted")
                self.assertEqual(review["reviewedAt"], "2026-10-31")
                self.assertEqual(review["officialUrl"], catalog_by_name[name][5])
                self.assertTrue(review["evidenceUrls"])
                self.assertTrue(review["userValue"].strip())

    def test_invoke_is_described_as_open_source_not_the_shutdown_hosted_service(self):
        catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        invoke = next(row for row in catalog if row[0] == "Invoke")
        self.assertEqual(invoke[4], "Open source")
        self.assertIn("hosted service has shut down", invoke[2])

    def test_fooocus_lifecycle_status_is_not_overstated(self):
        catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        fooocus = next(row for row in catalog if row[0] == "Fooocus")
        self.assertIn("limited long-term support", fooocus[2])

    def test_regard_mapping_is_corrected_and_no_unresolved_placeholder_remains(self):
        audit = json.loads((ROOT / "data" / "catalog-audit-fixes.json").read_text(encoding="utf-8"))
        quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        regard = next(row for row in audit["replace"] if row["oldName"] == "Regard")
        self.assertEqual(regard["url"], "https://regard.com/")
        self.assertNotIn("PLACEHOLDER", regard["userValue"])
        self.assertFalse(quality.get("unresolvedAuditMappings", []))


if __name__ == "__main__":
    unittest.main()
