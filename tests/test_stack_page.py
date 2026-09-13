import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
STACK_PATH = ROOT / "stack.html"


class StackPageContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = STACK_PATH.read_text(encoding="utf-8")

    def test_stack_loads_only_project_maintained_data(self):
        self.assertIn('fetch("data/tools.json"', self.html)
        self.assertIn('fetch("data/recommender.json"', self.html)
        self.assertIn('fetch("data/recommender-fit.json"', self.html)

    def test_stack_uses_versioned_local_storage(self):
        self.assertIn('const STORAGE_KEY="creative-ai-stack-v1"', self.html)
        self.assertIn("localStorage.getItem(STORAGE_KEY)", self.html)
        self.assertIn("localStorage.setItem(STORAGE_KEY", self.html)

    def test_shared_stack_does_not_silently_overwrite_local_stack(self):
        self.assertIn("sharedMode=state.shared", self.html)
        self.assertIn("stack=sharedMode?validNames(state.names):readLocal()", self.html)
        self.assertIn("if(sharedMode)return", self.html)
        self.assertIn('id="saveShared"', self.html)

    def test_share_state_preserves_order_and_language(self):
        self.assertIn('q.set("tools",stack.join("|"))', self.html)
        self.assertIn('q.set("lang",lang)', self.html)
        self.assertIn('raw.split("|")', self.html)

    def test_page_supports_add_remove_and_reorder(self):
        self.assertIn('data-add=', self.html)
        self.assertIn('data-remove=', self.html)
        self.assertIn('data-up=', self.html)
        self.assertIn('data-down=', self.html)
        self.assertIn("[stack[from],stack[to]]=[stack[to],stack[from]]", self.html)

    def test_page_is_bilingual_and_account_free(self):
        self.assertIn('lang==="ar"', self.html)
        self.assertIn("بدون حساب", self.html)
        self.assertIn("No account", self.html)


if __name__ == "__main__":
    unittest.main()
