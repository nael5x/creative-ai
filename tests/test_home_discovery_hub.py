import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOME = (ROOT / "index.html").read_text(encoding="utf-8")
CSS = (ROOT / "styles" / "home-hub.css").read_text(encoding="utf-8")


class HomeDiscoveryHubTests(unittest.TestCase):
    def test_home_links_to_deeper_discovery_pages(self):
        for path in ("tools.html", "categories.html", "new.html", "updates.html", "submit.html"):
            self.assertIn(path, HOME)

    def test_home_uses_maintained_data_for_counts_and_timeline(self):
        self.assertIn('fetch("data/tools.json"', HOME)
        self.assertIn('fetch("data/updates.json"', HOME)
        self.assertIn('fetch("data/tool-lifecycle.json"', HOME)
        self.assertIn('id="toolCount"', HOME)
        self.assertIn('id="categoryCount"', HOME)
        self.assertIn('id="sourceCount"', HOME)

    def test_home_explains_catalog_timeline_limit(self):
        self.assertIn("not product launch dates", HOME)
        self.assertIn("Baseline import", HOME)
        self.assertNotIn("most popular", HOME.lower())
        self.assertNotIn("community ranking", HOME.lower())

    def test_hub_stays_responsive_and_uses_existing_tokens(self):
        self.assertIn("var(--line)", CSS)
        self.assertIn("var(--accent)", CSS)
        self.assertIn("@media(max-width:620px)", CSS)


if __name__ == "__main__":
    unittest.main()
