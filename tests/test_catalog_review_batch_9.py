import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogReviewBatch9Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.rows = {row[0]: row for row in cls.catalog}
        cls.quality = load_json("data/catalog-quality.json")
        cls.reviews = {row["name"]: row for row in cls.quality["tools"]}
        cls.lifecycle = load_json("data/tool-lifecycle.json")["tools"]
        cls.audit = load_json("data/catalog-audit-round10.json")
        cls.recommender = load_json("data/recommender.json")
        cls.fit = load_json("data/recommender-fit.json")

    def test_catalog_and_quality_counts_are_reconciled(self):
        accepted = sum(row["decision"] == "accepted" for row in self.quality["tools"])
        rejected = sum(row["decision"] == "rejected" for row in self.quality["tools"])
        self.assertEqual(len(self.catalog), 603)
        self.assertEqual(accepted, 399)
        self.assertEqual(rejected, 29)
        self.assertEqual(len(self.catalog) - accepted, 204)
        self.assertEqual(len(self.lifecycle), len(self.catalog))
        self.assertEqual(set(self.rows), set(self.lifecycle))

    def test_autogen_is_archived_but_semantic_kernel_remains_active(self):
        self.assertNotIn("AutoGen", self.rows)
        autogen = self.reviews["AutoGen"]
        self.assertEqual(autogen["decision"], "rejected")
        self.assertEqual(autogen["supersededBy"], "Microsoft Agent Framework")
        self.assertIn("archived", autogen["reason"].lower())
        self.assertIn("security fixes", autogen["reason"].lower())
        self.assertIn("Semantic Kernel", self.rows)
        self.assertEqual(self.reviews["Semantic Kernel"]["decision"], "accepted")
        self.assertIn("https://github.com/microsoft/semantic-kernel/releases", self.reviews["Semantic Kernel"]["evidenceUrls"])
        self.assertIn("Microsoft Agent Framework", self.rows)

    def test_superseded_and_retired_names_are_not_active(self):
        old_names = {row["oldName"] for row in self.audit["superseded"]}
        retired_names = {row["name"] for row in self.audit["retired"]}
        for name in old_names | retired_names:
            self.assertNotIn(name, self.rows)
        for record in self.audit["superseded"]:
            self.assertTrue(record["newName"])
            self.assertTrue(record["evidenceUrls"])
        for record in self.audit["retired"]:
            self.assertTrue(record["reason"])
            self.assertTrue(record["evidenceUrls"])
        self.assertEqual(len(self.audit["superseded"]), 11)
        self.assertEqual(len(self.audit["retired"]), 4)

    def test_successor_entries_and_magnific_identity(self):
        expected = [
            "Microsoft Agent Framework", "Manage AI", "Content Toolkit", "PlayHT", "Tabnine", "Harness Cosmos Software Factory Agent",
            "Hostinger AI Builder", "Check Point AI Security", "Vibe",
            "Lexis+ with Protégé", "Luma App", "Superhuman Mail", "Topaz Video",
        ]
        for name in expected:
            self.assertIn(name, self.rows)
            self.assertEqual(self.reviews[name]["decision"], "accepted")
        self.assertIn("formerly branded Freepik", self.reviews["Magnific"]["userValue"])
        self.assertEqual(self.rows["Magnific"][5], "https://www.magnific.com/ai")

    def test_pr92_accuracy_corrections_survive_reconciliation(self):
        self.assertIn("AI2SQL", self.rows)
        self.assertNotIn("AI2sql", self.rows)
        self.assertEqual(self.rows["Artisan"][4], "Paid")
        self.assertIn("https://www.artisan.co/pricing", self.reviews["Artisan"]["evidenceUrls"])
        self.assertIn("April 30, 2027", self.rows["Amazon Q Developer"][2])
        self.assertIn("IDE plugins", self.rows["Amazon Q Developer"][2])

    def test_all_accepted_quality_urls_match_catalog(self):
        for review in self.quality["tools"]:
            if review["decision"] != "accepted":
                continue
            self.assertEqual(self.rows[review["name"]][5], review["officialUrl"])
            self.assertTrue(review["evidenceUrls"])
            self.assertTrue(review["userValue"].strip())

    def test_recommender_profiles_and_fit_records_reference_active_tools(self):
        profiles = self.recommender["profiles"]
        self.assertIn("Manage AI", profiles)
        for name in profiles:
            self.assertIn(name, self.rows)
        for name in self.fit:
            self.assertIn(name, self.rows)

    def test_retired_flowise_is_removed_from_release_monitor(self):
        collector = (ROOT / "scripts" / "collect_updates.py").read_text(encoding="utf-8")
        updates = load_json("data/updates.json")
        self.assertNotIn('"Flowise"', collector)
        self.assertEqual(updates["sourceHealth"]["total"], 9)
        self.assertEqual(updates["sourceHealth"]["ok"], 9)
        self.assertFalse(any(item["source"] == "Flowise" for item in updates["items"]))

    def test_lifecycle_and_audit_summary_are_consistent(self):
        self.assertEqual(self.lifecycle["Microsoft Agent Framework"]["firstTrackedAt"], "2026-10-31T00:45:59Z")
        self.assertEqual(self.lifecycle["PlayHT"]["firstTrackedAt"], "2026-10-31T00:52:54Z")
        self.assertEqual(self.lifecycle["Tabnine"]["firstTrackedAt"], "2026-09-13T14:41:12Z")
        self.assertEqual(len(self.audit["accepted"]), 13)
        self.assertEqual(len(self.audit["rechecked"]), 2)


if __name__ == "__main__":
    unittest.main()
