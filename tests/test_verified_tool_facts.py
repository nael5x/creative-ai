import json
import unittest
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
CATALOG = json.loads((ROOT / "data" / "tools.json").read_text(encoding="utf-8"))
FACTS = json.loads((ROOT / "data" / "verified-facts.json").read_text(encoding="utf-8"))
DETAIL = (ROOT / "tool.html").read_text(encoding="utf-8")
VALIDATOR = (ROOT / "scripts" / "validate_tools.py").read_text(encoding="utf-8")


class VerifiedToolFactsTests(unittest.TestCase):
    def test_verified_facts_only_reference_catalog_tools(self):
        catalog_names = {row[0] for row in CATALOG}
        self.assertLessEqual(set(FACTS["tools"]), catalog_names)

    def test_every_verified_fact_has_official_source_and_date(self):
        count = 0
        for tool, facts in FACTS["tools"].items():
            for fact in facts:
                count += 1
                parsed = urlparse(fact["sourceUrl"])
                self.assertEqual(parsed.scheme, "https", tool)
                self.assertTrue(parsed.netloc, tool)
                self.assertNotIn("futuretools.io", parsed.netloc, tool)
                date.fromisoformat(fact["verifiedAt"])
                self.assertEqual(fact["value"], "available")
                self.assertTrue(fact["label"]["en"].strip())
                self.assertTrue(fact["label"]["ar"].strip())
        self.assertGreaterEqual(count, 7)

    def test_detail_page_keeps_unknown_facts_unknown(self):
        self.assertIn("missing facts stay unknown instead of being guessed", DETAIL)
        self.assertIn("No additional official facts have been checked", DETAIL)
        self.assertNotIn("API unavailable", DETAIL)
        self.assertNotIn("No API", DETAIL)

    def test_detail_page_loads_lifecycle_and_verified_facts(self):
        self.assertIn('fetch("data/tool-lifecycle.json"', DETAIL)
        self.assertIn('fetch("data/verified-facts.json"', DETAIL)
        self.assertIn('id="verifiedFacts"', DETAIL)
        self.assertIn('id="facts"', DETAIL)
        self.assertIn("Suggest a correction", DETAIL)

    def test_validator_enforces_fact_provenance(self):
        for token in ("VERIFIED_FACTS_PATH", "sourceUrl", "verifiedAt", "verified facts reference unknown catalog tool"):
            self.assertIn(token, VALIDATOR)


if __name__ == "__main__":
    unittest.main()
