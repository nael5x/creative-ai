import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class CatalogLinkFindingsBatchTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
        self.lifecycle = json.loads((ROOT / "data" / "tool-lifecycle.json").read_text(encoding="utf-8"))
        self.quality = json.loads((ROOT / "data" / "catalog-quality.json").read_text(encoding="utf-8"))
        self.rows = {row[0]: row for row in self.catalog}
        self.reviews = {row["name"]: row for row in self.quality["tools"]}

    def test_removed_or_renamed_names_are_not_left_as_active_entries(self):
        self.assertNotIn("Tabnine", self.rows)
        self.assertNotIn("Tezi", self.rows)
        self.assertNotIn("Clari", self.rows)
        self.assertNotIn("NotebookLM", self.rows)
        self.assertNotIn("ViSenze", self.rows)
        self.assertIn("Salesloft (formerly Clari)", self.rows)
        self.assertIn("Rezolve AI Visual Search (formerly ViSenze)", self.rows)
        self.assertIn("Gemini Notebook (formerly NotebookLM)", self.rows)

    def test_lifecycle_coverage_tracks_current_catalog_exactly(self):
        lifecycle_names = set(self.lifecycle["tools"])
        self.assertEqual(lifecycle_names, set(self.rows))
        self.assertNotIn("Tabnine", lifecycle_names)
        self.assertNotIn("Tezi", lifecycle_names)

    def test_canonical_urls_and_current_product_status_are_reflected(self):
        expected = {
            "Factory": "https://factory.com/",
            "Freshworks Freddy AI": "https://www.freshworks.com/freshservice/ai-itsm/",
            "Gemini Code Assist": "https://developers.google.com/gemini-code-assist/docs/overview",
            "Microsoft Copilot": "https://copilot.com/",
            "Outranking": "https://outranking.io/seo-ai/",
            "Surfer": "https://surfer.ai/",
            "Salesloft (formerly Clari)": "https://www.salesloft.com/",
            "Rezolve AI Visual Search (formerly ViSenze)": "https://rezolve.com/",
            "Gemini Notebook (formerly NotebookLM)": "https://notebook.google.com/",
        }
        for name, url in expected.items():
            with self.subTest(name=name):
                self.assertEqual(self.rows[name][5], url)
                self.assertEqual(self.reviews[name]["officialUrl"], url)
                self.assertEqual(self.reviews[name]["decision"], "accepted")
                self.assertTrue(self.reviews[name]["evidenceUrls"])

    def test_access_changes_and_rebrand_are_not_misrepresented(self):
        gemini = self.rows["Gemini Code Assist"]
        self.assertIn("deprecated in June 2026", gemini[2])
        self.assertIn("Enterprise", gemini[4])
        surfer = self.rows["Surfer"]
        self.assertIn("AI visibility", surfer[2])
        invoke_names = [row[0] for row in self.catalog]
        self.assertIn("Invoke", invoke_names)

    def test_removed_products_have_rejection_reasons_and_evidence(self):
        for name in ("Tabnine", "Tezi"):
            with self.subTest(name=name):
                review = self.reviews[name]
                self.assertEqual(review["decision"], "rejected")
                self.assertEqual(review["reviewedAt"], "2026-10-31")
                self.assertTrue(review["reason"])
                self.assertTrue(review["evidenceUrls"])

    def test_audit_log_captures_the_baseline_and_each_change(self):
        audit = json.loads((ROOT / "data" / "catalog-audit-round3.json").read_text(encoding="utf-8"))
        self.assertEqual(audit["sourceAudit"]["catalogCount"], 616)
        self.assertEqual(audit["sourceAudit"]["summary"]["broken"], 1)
        self.assertEqual(len(audit["removed"]), 2)
        self.assertEqual(len(audit["renamed"]), 3)
        self.assertEqual(len(audit["updatedUrls"]), 7)
        self.assertFalse(self.quality.get("unresolvedAuditMappings", []))


if __name__ == "__main__":
    unittest.main()
