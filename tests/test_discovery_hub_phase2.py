import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = (ROOT / "categories.html").read_text(encoding="utf-8")
UPDATES = (ROOT / "updates.html").read_text(encoding="utf-8")
SUBMIT = (ROOT / "submit.html").read_text(encoding="utf-8")
TOOLS = (ROOT / "tools.html").read_text(encoding="utf-8")
TEMPLATE = (ROOT / ".github" / "ISSUE_TEMPLATE" / "tool_submission.md").read_text(encoding="utf-8")


class DiscoveryHubPhaseTwoTests(unittest.TestCase):
    def test_categories_are_generated_from_maintained_catalog(self):
        self.assertIn('fetch("data/tools.json"', CATEGORIES)
        self.assertIn("category-grid", CATEGORIES)
        self.assertIn("encodeURIComponent(cat)", CATEGORIES)
        self.assertNotIn("futuretools.io/api", CATEGORIES.lower())

    def test_tools_database_accepts_category_deep_links(self):
        self.assertIn('params.get("category")||"all"', TOOLS)
        self.assertIn('p.set("category",category)', TOOLS)
        self.assertIn('id="navCategories"', TOOLS)
        self.assertIn('id="navUpdates"', TOOLS)
        self.assertIn('id="navSubmit"', TOOLS)

    def test_updates_use_existing_monitored_source_data(self):
        self.assertIn('fetch("data/updates.json"', UPDATES)
        self.assertIn("official-source", UPDATES.lower())
        self.assertNotIn("community picks", UPDATES.lower())
        self.assertNotIn("most popular", UPDATES.lower())

    def test_submission_opens_transparent_github_issue(self):
        self.assertIn("github.com/nael5x/creative-ai/issues/new", SUBMIT)
        self.assertIn("submission does not guarantee inclusion", TEMPLATE.lower())
        self.assertIn("official or clearly verifiable source", TEMPLATE)

    def test_new_pages_keep_bilingual_rtl_behavior(self):
        for page in (CATEGORIES, UPDATES, SUBMIT):
            self.assertIn('document.documentElement.dir=lang==="ar"?"rtl":"ltr"', page)
            self.assertIn("العربية", page)
            self.assertIn("styles/design-system.css", page)


if __name__ == "__main__":
    unittest.main()
