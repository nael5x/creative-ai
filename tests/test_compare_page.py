import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COMPARE_PATH = ROOT / "compare.html"


class ComparePageContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = COMPARE_PATH.read_text(encoding="utf-8")

    def test_compare_page_loads_project_maintained_data(self):
        self.assertIn('fetch("data/tools.json"', self.html)
        self.assertIn('fetch("data/recommender.json"', self.html)
        self.assertIn('fetch("data/recommender-fit.json"', self.html)

    def test_compare_page_keeps_shareable_url_state(self):
        for key in ('q.set("a"', 'q.set("b"', 'q.set("lang"'):
            self.assertIn(key, self.html)
        self.assertIn('q.set("c"', self.html)
        self.assertIn("history.replaceState", self.html)

    def test_compare_page_supports_two_or_three_distinct_tools(self):
        self.assertIn('id="toolA"', self.html)
        self.assertIn('id="toolB"', self.html)
        self.assertIn('id="toolC"', self.html)
        self.assertIn("disabled=selected.has(name)", self.html)
        self.assertIn('value=""', self.html)

    def test_compare_page_is_bilingual_and_explains_method_limits(self):
        self.assertIn('lang==="ar"', self.html)
        self.assertIn("مقارنة مباشرة", self.html)
        self.assertIn("does not claim objective benchmark superiority", self.html)
        self.assertIn("without inventing a winner", self.html)


if __name__ == "__main__":
    unittest.main()
