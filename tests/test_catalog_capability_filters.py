import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS_PAGE = (ROOT / "tools.html").read_text(encoding="utf-8")
CATALOG_CSS = (ROOT / "styles" / "catalog.css").read_text(encoding="utf-8")
FACTS = json.loads((ROOT / "data" / "verified-facts.json").read_text(encoding="utf-8"))


class CatalogCapabilityFilterTests(unittest.TestCase):
    def test_page_loads_verified_facts_for_capability_filters(self):
        self.assertIn('fetch("data/verified-facts.json"', TOOLS_PAGE)
        self.assertIn('id="capabilityFilters"', TOOLS_PAGE)
        self.assertIn('data-capability=', TOOLS_PAGE)
        self.assertIn('hasApi(name)', TOOLS_PAGE)
        self.assertIn('hasSelfHost(name)', TOOLS_PAGE)

    def test_verified_filters_do_not_treat_missing_facts_as_negative(self):
        self.assertIn('facts(name)', TOOLS_PAGE)
        self.assertIn('f?.value==="available"', TOOLS_PAGE)
        self.assertNotIn('API unavailable', TOOLS_PAGE)
        self.assertNotIn('No API', TOOLS_PAGE)

    def test_local_filter_uses_maintained_recommender_metadata(self):
        self.assertIn('p.tasks?.includes("local")', TOOLS_PAGE)
        self.assertIn('p.traits?.includes("privacy")', TOOLS_PAGE)

    def test_tool_identity_uses_official_site_origin_with_fallback(self):
        icon_helper = (ROOT / "scripts" / "tool-icons.js").read_text(encoding="utf-8")
        self.assertIn('CreativeAIIcons.markup(row[0],row[5])', TOOLS_PAGE)
        self.assertIn('src="scripts/tool-icons.js"', TOOLS_PAGE)
        self.assertIn('new URL(officialUrl', icon_helper)
        self.assertIn('/favicon.ico', icon_helper)
        self.assertIn('tool-logo-fallback', icon_helper)
        self.assertNotIn('google.com/s2/favicons', icon_helper)
        self.assertNotIn('icons.duckduckgo.com', icon_helper)
        self.assertIn('.tool-logo{', CATALOG_CSS)

    def test_new_official_facts_are_present(self):
        ollama = {fact["id"] for fact in FACTS["tools"]["Ollama"]}
        open_webui = {fact["id"] for fact in FACTS["tools"]["Open WebUI"]}
        self.assertIn("developer-api", ollama)
        self.assertIn("local-runtime", ollama)
        self.assertIn("self-hosting", open_webui)


if __name__ == "__main__":
    unittest.main()
