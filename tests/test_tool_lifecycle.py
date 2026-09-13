import json
import unittest
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
LIFECYCLE = json.loads((ROOT / "data" / "tool-lifecycle.json").read_text(encoding="utf-8"))
NEW_PAGE = (ROOT / "new.html").read_text(encoding="utf-8")
VALIDATOR = (ROOT / "scripts" / "validate_tools.py").read_text(encoding="utf-8")


class ToolLifecycleTests(unittest.TestCase):
    def test_lifecycle_exactly_covers_catalog(self):
        catalog_names = {row[0] for row in TOOLS}
        lifecycle_names = set(LIFECYCLE["tools"])
        self.assertEqual(catalog_names, lifecycle_names)

    def test_lifecycle_dates_are_real_iso_utc_values(self):
        for name, record in LIFECYCLE["tools"].items():
            value = record["firstTrackedAt"]
            self.assertTrue(value.endswith("Z"), name)
            datetime.fromisoformat(value[:-1] + "+00:00")
            self.assertIn(record["event"], {"baseline_import", "added"})

    def test_baseline_is_anchored_to_known_catalog_migration(self):
        self.assertEqual(LIFECYCLE["sourceCommit"], "cdfeddc3253e2e521dc278c39166c0f76c672b06")
        self.assertEqual(LIFECYCLE["trackingStartedAt"], "2026-09-12T22:54:28Z")

    def test_new_page_explains_catalog_dates_without_fake_launch_claims(self):
        self.assertIn('fetch("data/tool-lifecycle.json"', NEW_PAGE)
        self.assertIn("not the product's launch date", NEW_PAGE)
        self.assertIn("Baseline import", NEW_PAGE)
        self.assertIn("No post-baseline tools have been added yet", NEW_PAGE)
        self.assertNotIn("most popular", NEW_PAGE.lower())
        self.assertNotIn("community votes", NEW_PAGE.lower())

    def test_validator_enforces_lifecycle_coverage(self):
        self.assertIn("LIFECYCLE_PATH", VALIDATOR)
        self.assertIn("lifecycle missing catalog tool", VALIDATOR)
        self.assertIn("lifecycle references unknown catalog tool", VALIDATOR)


if __name__ == "__main__":
    unittest.main()
