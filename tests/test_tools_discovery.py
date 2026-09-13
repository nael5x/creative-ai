import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOME = (ROOT / "index.html").read_text(encoding="utf-8")
TOOLS = (ROOT / "tools.html").read_text(encoding="utf-8")
DETAIL = (ROOT / "tool.html").read_text(encoding="utf-8")
CATALOG_CSS = (ROOT / "styles" / "catalog.css").read_text(encoding="utf-8")


class ToolsDiscoveryContractTests(unittest.TestCase):
    def test_homepage_links_to_dedicated_database(self):
        self.assertIn('id="navTools" href="tools.html"', HOME)
        self.assertIn('$("navTools").href="tools.html"+q', HOME)

    def test_database_uses_maintained_project_sources(self):
        for source in ("data/tools.json", "data/recommender.json", "data/recommender-fit.json"):
            self.assertIn(source, TOOLS)
        self.assertNotIn("futuretools.io/api", TOOLS.lower())

    def test_database_has_search_filters_categories_sort_and_pagination(self):
        for token in (
            'id="search"',
            'id="availabilityFilters"',
            'data-view="open"',
            'data-view="free"',
            'id="categories"',
            'id="sort"',
            'id="prev"',
            'id="next"',
        ):
            self.assertIn(token, TOOLS)

    def test_database_avoids_unverified_popularity_claims(self):
        self.assertIn("no vote or popularity ranking", TOOLS)
        self.assertNotIn("community picks", TOOLS.lower())
        self.assertNotIn("most popular", TOOLS.lower())

    def test_database_is_bilingual_and_rtl_safe(self):
        self.assertIn('document.documentElement.dir=lang==="ar"?"rtl":"ltr"', TOOLS)
        self.assertIn("قاعدة أدوات", TOOLS)
        self.assertIn("Explore tools", TOOLS)

    def test_tool_detail_uses_query_state_and_project_sources(self):
        self.assertIn('new URLSearchParams(location.search).get("tool")', DETAIL)
        for source in ("data/tools.json", "data/recommender.json", "data/recommender-fit.json"):
            self.assertIn(source, DETAIL)

    def test_tool_detail_connects_product_flows(self):
        self.assertIn("compare.html?a=", DETAIL)
        self.assertIn("alternatives.html?tool=", DETAIL)
        self.assertIn("creative-ai-stack-v1", DETAIL)
        self.assertIn("Add to My Stack", DETAIL)

    def test_discovery_pages_share_developer_studio_visual_language(self):
        self.assertIn("styles/design-system.css", TOOLS)
        self.assertIn("styles/catalog.css", TOOLS)
        self.assertIn("styles/design-system.css", DETAIL)
        self.assertIn("styles/catalog.css", DETAIL)
        self.assertIn("var(--accent)", CATALOG_CSS)
        self.assertNotIn("#8b5cf6", CATALOG_CSS.lower())


if __name__ == "__main__":
    unittest.main()
