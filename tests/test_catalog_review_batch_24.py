import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch24Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round24.json")

    def test_catalog_quality_and_lifecycle_totals(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 399)
        self.assertEqual(rejected, 29)
        self.assertEqual(len(self.catalog) - accepted, 204)
        self.assertEqual(len(self.quality["tools"]), 427)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_batch24_has_15_current_acceptances_and_two_rebrands(self):
        self.assertEqual(len(self.audit["accepted"]), 15)
        self.assertEqual(len(self.audit["superseded"]), 2)
        for item in self.audit["accepted"]:
            name = item["name"]
            self.assertIn(name, self.rows)
            review = self.reviews[name]
            self.assertEqual(review["decision"], "accepted")
            self.assertEqual(review["officialUrl"], self.rows[name][5])
            self.assertTrue(review["evidenceUrls"])
            self.assertTrue(review["userValue"].strip())
            self.assertEqual(review["reviewedAt"], "2026-10-31")

    def test_marscode_is_superseded_by_trae_with_lineage(self):
        self.assertNotIn("MarsCode", self.rows)
        self.assertNotIn("MarsCode", self.lifecycle)
        self.assertIn("TRAE", self.rows)
        self.assertEqual(self.reviews["MarsCode"]["decision"], "rejected")
        self.assertEqual(self.reviews["MarsCode"]["supersededBy"], "TRAE")
        self.assertEqual(self.lifecycle["TRAE"]["previousName"], "MarsCode")
        self.assertIn("Agent mode", self.rows["TRAE"][2])
        self.assertIn("IDE mode", self.rows["TRAE"][2])

    def test_masterpiece_x_is_superseded_by_worldengen_with_lineage(self):
        self.assertNotIn("Masterpiece X", self.rows)
        self.assertNotIn("Masterpiece X", self.lifecycle)
        self.assertIn("WorldEngen", self.rows)
        self.assertEqual(self.reviews["Masterpiece X"]["decision"], "rejected")
        self.assertEqual(self.reviews["Masterpiece X"]["supersededBy"], "WorldEngen")
        self.assertEqual(self.lifecycle["WorldEngen"]["previousName"], "Masterpiece X")
        self.assertIn("Blender, Unity and Unreal", self.rows["WorldEngen"][2])
        self.assertIn("legacy", self.reviews["Masterpiece X"]["reason"].lower())

    def test_loudly_and_lovo_are_full_audio_production_suites(self):
        self.assertIn("SongDNA", self.rows["Loudly"][2])
        self.assertIn("rights-cleared", self.rows["Loudly"][2])
        self.assertIn("Genny by LOVO", self.rows["LOVO"][2])
        self.assertIn("voice cloning", self.rows["LOVO"][2])

    def test_magic_school_and_marketmuse_have_current_ai_scope(self):
        self.assertIn("80+ teacher tools", self.rows["MagicSchool AI"][2])
        self.assertIn("district controls", self.rows["MagicSchool AI"][2])
        self.assertIn("acquired by Siteimprove in 2024", self.rows["MarketMuse"][2])
        self.assertIn("AI content-strategy", self.rows["MarketMuse"][2])

    def test_mastra_license_scope_is_explicit(self):
        self.assertIn("Apache-2.0", self.rows["Mastra"][2])
        self.assertIn("Enterprise License", self.rows["Mastra"][2])

    def test_mem_is_current_ai_knowledge_workspace(self):
        self.assertIn("Mem Agent", self.rows["Mem"][2])
        self.assertIn("Heads Up", self.rows["Mem"][2])
        self.assertIn("MCP", self.rows["Mem"][2])

    def test_current_batch_metadata(self):
        self.assertEqual(self.audit["retired"], [])
        self.assertEqual(self.audit["rejected"], [])
        self.assertEqual(self.audit["statusWatch"], [])
        self.assertEqual(len(self.quality["statusWatch"]), 9)


if __name__ == "__main__":
    unittest.main()
