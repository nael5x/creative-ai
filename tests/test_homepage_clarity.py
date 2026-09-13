import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HOME = (ROOT / "index.html").read_text(encoding="utf-8")


class HomepageClarityTests(unittest.TestCase):
    def test_primary_action_is_single_clear_finder_cta(self):
        self.assertEqual(HOME.count('class="btn primary"'), 1)
        self.assertIn('id="heroFinder"', HOME)
        self.assertNotIn('finder-card', HOME)
        self.assertNotIn('class="stats"', HOME)

    def test_four_core_product_paths_are_visible(self):
        for target in (
            "recommend.html",
            "compare.html",
            "alternatives.html",
            "stack.html",
        ):
            self.assertIn(target, HOME)
        for choice in (
            'id="choiceFind"',
            'id="choiceCompare"',
            'id="choiceAlternatives"',
            'id="choiceStack"',
        ):
            self.assertIn(choice, HOME)

    def test_homepage_reduces_feed_density(self):
        self.assertIn(".slice(0,6)", HOME)
        self.assertIn("matches.slice(0,12)", HOME)
        self.assertIn('id="showMore"', HOME)

    def test_bilingual_copy_and_rtl_remain_supported(self):
        self.assertIn('document.documentElement.dir=language==="ar"?"rtl":"ltr"', HOME)
        self.assertIn("اختر مسارك", HOME)
        self.assertIn("Choose your path", HOME)


if __name__ == "__main__":
    unittest.main()
