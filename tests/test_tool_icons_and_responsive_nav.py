import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SURFACE_PAGES = (
    "index.html", "tools.html", "category.html", "quality.html", "new.html",
    "tool.html", "recommend.html", "compare.html", "alternatives.html", "stack.html",
)


class ToolIconAndResponsiveNavigationTests(unittest.TestCase):
    def test_shared_icon_resolver_uses_official_sources_then_fallbacks(self):
        helper = (ROOT / "scripts" / "tool-icons.js").read_text(encoding="utf-8")
        for token in (
            "/favicon.ico", "/favicon.svg", "/apple-touch-icon.png",
            "google.com/s2/favicons", "CreativeAIIcons.next",
            'loading="lazy"', 'decoding="async"', 'referrerpolicy="no-referrer"',
            "tool-logo-fallback",
        ):
            self.assertIn(token, helper)

    def test_all_tool_surfaces_load_the_shared_icon_resolver(self):
        for name in SURFACE_PAGES:
            page = (ROOT / name).read_text(encoding="utf-8")
            self.assertIn('src="scripts/tool-icons.js"', page, name)

    def test_tool_lists_use_catalog_official_urls_for_icon_resolution(self):
        expectations = {
            "index.html": 'CreativeAIIcons.markup(x[0],x[5])',
            "tools.html": 'CreativeAIIcons.markup(row[0],row[5])',
            "category.html": 'CreativeAIIcons.markup(row[0],row[5])',
            "quality.html": 'CreativeAIIcons.markup(item.name,row[5])',
            "new.html": 'CreativeAIIcons.markup(row[0],row[5])',
            "recommend.html": 'CreativeAIIcons.markup(name,url)',
            "compare.html": 'CreativeAIIcons.markup(name,tool[5])',
            "alternatives.html": 'CreativeAIIcons.markup(item.name,row[5])',
            "stack.html": 'CreativeAIIcons.markup(name,row[5])',
            "tool.html": 'CreativeAIIcons.markup(selected[0],selected[5],"large")',
        }
        for name, token in expectations.items():
            self.assertIn(token, (ROOT / name).read_text(encoding="utf-8"), name)

    def test_tool_detail_and_related_cards_have_identity_icons(self):
        detail = (ROOT / "tool.html").read_text(encoding="utf-8")
        self.assertIn('id="toolIcon"', detail)
        self.assertIn('CreativeAIIcons.markup(row[0],row[5])', detail)

    def test_mobile_navigation_remains_visible_and_scrollable(self):
        for name in ("styles/design-system.css", "styles/product-pages.css"):
            css = (ROOT / name).read_text(encoding="utf-8")
            self.assertIn("display:flex!important", css, name)
            self.assertIn("overflow-x:auto", css, name)

    def test_shared_logo_styles_prevent_blank_or_unstable_icon_slots(self):
        css = (ROOT / "styles" / "design-system.css").read_text(encoding="utf-8")
        self.assertIn(".tool-logo", css)
        self.assertIn(".tool-logo-large", css)
        self.assertIn("width:44px", css)
        self.assertIn("height:44px", css)

    def test_competitor_research_is_documented_without_copying_assets(self):
        doc = (ROOT / "docs" / "UX_RESEARCH.md").read_text(encoding="utf-8")
        self.assertIn("FutureTools", doc)
        self.assertIn("TOOOLS.design", doc)
        self.assertIn("shadcn/ui", doc)
        self.assertIn("Lucide", doc)
        self.assertIn("do not copy", doc.lower())


if __name__ == "__main__":
    unittest.main()
