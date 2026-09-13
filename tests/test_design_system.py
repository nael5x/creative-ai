import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]


class DeveloperStudioDesignTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.css = (ROOT / "styles" / "design-system.css").read_text(encoding="utf-8")

    def test_homepage_loads_shared_design_system(self):
        self.assertIn('href="styles/design-system.css"', self.html)

    def test_grid_background_is_subtle_and_developer_styled(self):
        self.assertIn("background-image:linear-gradient", self.css)
        self.assertIn("--mono:", self.css)
        self.assertIn(".editor{", self.css)

    def test_primary_accent_is_mint_not_old_ai_purple(self):
        self.assertIn("--accent:#67e8bd", self.css)
        self.assertNotIn("#8b5cf6", self.css.lower())
        self.assertNotIn("#a78bfa", self.css.lower())

    def test_homepage_exposes_real_product_paths(self):
        for path in ("recommend.html", "compare.html", "alternatives.html", "stack.html"):
            self.assertIn(path, self.html)
        self.assertIn("https://github.com/nael5x/creative-ai", self.html)

    def test_homepage_avoids_unverified_popularity_claims(self):
        lowered = self.html.lower()
        self.assertNotIn("popular ai tools", lowered)
        self.assertNotIn("loved by", lowered)
        self.assertNotIn("10,000", lowered)


if __name__ == "__main__":
    unittest.main()
