import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGES = ["recommend.html", "compare.html", "alternatives.html", "stack.html"]


class ProductPageDesignTests(unittest.TestCase):
    def test_every_product_page_loads_shared_skin(self):
        for page in PAGES:
            html = (ROOT / page).read_text(encoding="utf-8")
            self.assertIn('styles/product-pages.css', html, page)

    def test_shared_skin_uses_developer_studio_tokens(self):
        css = (ROOT / "styles" / "product-pages.css").read_text(encoding="utf-8")
        self.assertIn('design-system.css', css)
        self.assertIn('--accent', (ROOT / "styles" / "design-system.css").read_text(encoding="utf-8"))
        self.assertIn('linear-gradient(rgba(120,148,156,.045)', css)
        self.assertNotIn('#8b5cf6', css.lower())
        self.assertNotIn('#ec4899', css.lower())

    def test_product_features_remain_present(self):
        expectations = {
            "recommend.html": ['id="task"', 'id="budget"', 'id="priority"'],
            "compare.html": ['id="toolA"', 'id="toolB"', 'id="toolC"'],
            "alternatives.html": ['id="toolSelect"', 'id="modeSelect"'],
            "stack.html": ['id="catalog"', 'id="stack"', 'localStorage'],
        }
        for page, needles in expectations.items():
            html = (ROOT / page).read_text(encoding="utf-8")
            for needle in needles:
                self.assertIn(needle, html, f"{page}: missing {needle}")


if __name__ == "__main__":
    unittest.main()
