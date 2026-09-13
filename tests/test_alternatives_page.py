import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "alternatives.html"


class AlternativesPageContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = PAGE.read_text(encoding="utf-8")

    def test_page_uses_only_project_maintained_sources(self):
        self.assertIn('fetch("data/tools.json"', self.html)
        self.assertIn('fetch("data/recommender.json"', self.html)
        self.assertIn('fetch("data/recommender-fit.json"', self.html)

    def test_selected_tool_cannot_be_its_own_alternative(self):
        self.assertIn('if(name===selectedName||!selectedProfile||!candidateProfile||!shared.length)return null', self.html)

    def test_candidates_must_share_a_maintained_task(self):
        self.assertIn('function sharedTasks(a,b)', self.html)
        self.assertIn('!shared.length', self.html)

    def test_modes_enforce_free_open_source_and_privacy_filters(self):
        self.assertIn('if(mode==="free"&&!freeFriendly(row))return null', self.html)
        self.assertIn('if(mode==="open-source"&&!isOpenSource(row))return null', self.html)
        self.assertIn('if(mode==="privacy"&&!privacyCapable(name))return null', self.html)
        self.assertIn('return row[4]==="Open source"', self.html)

    def test_results_explain_similarity_and_tradeoffs(self):
        self.assertIn('function similarity(item,selectedName)', self.html)
        self.assertIn('function tradeoff(item,selectedName)', self.html)
        self.assertIn('selectedProfile.tasks.filter', self.html)
        self.assertIn('availabilityChange', self.html)

    def test_share_state_preserves_tool_mode_and_language(self):
        self.assertIn('q.set("tool",toolSelect.value)', self.html)
        self.assertIn('q.set("mode",modeSelect.value)', self.html)
        self.assertIn('q.set("lang",lang)', self.html)

    def test_page_is_bilingual_and_links_to_compare(self):
        self.assertIn('lang==="ar"', self.html)
        self.assertIn('بدائل مفسّرة', self.html)
        self.assertIn('compare.html?a=', self.html)


if __name__ == "__main__":
    unittest.main()
