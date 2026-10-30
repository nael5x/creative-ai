from pathlib import Path
import unittest
from unittest.mock import MagicMock, patch
from urllib.error import URLError

from scripts import audit_catalog_links

SCRIPT = Path("scripts/audit_catalog_links.py").read_text(encoding="utf-8")
FIXER = Path("scripts/apply_catalog_audit_fixes.py").read_text(encoding="utf-8")
METHOD = Path("docs/CATALOG_AUDIT_METHOD.md").read_text(encoding="utf-8")


class CatalogLinkAuditTests(unittest.TestCase):
    def test_audit_flags_parked_and_explicit_shutdown_pages(self):
        self.assertIn("parked-domain", SCRIPT)
        self.assertIn("domain (?:is )?for sale", SCRIPT)
        self.assertIn("shutdown", SCRIPT)
        self.assertIn("discontinued", SCRIPT)
        self.assertIn("no longer (?:available|accessible)", SCRIPT)
        self.assertNotIn("|farewell", SCRIPT)

    def test_audit_flags_cross_domain_redirects(self):
        self.assertIn("cross-domain-redirect", SCRIPT)
        self.assertIn("registrable_hint(url) != registrable_hint(final_url)", SCRIPT)

    def test_client_errors_are_not_all_treated_as_dead(self):
        self.assertIn("exc.code in {404, 410}", SCRIPT)
        self.assertNotIn("400 <= exc.code < 500", SCRIPT)

    def test_network_failures_are_review_signals_not_dead_products(self):
        self.assertIn("transient-network-error", SCRIPT)
        self.assertIn("transient_failure = True", SCRIPT)
        self.assertIn("ok = transient_failure or", SCRIPT)
        self.assertIn("DNS, TLS and timeout failures", SCRIPT)

    def test_transient_network_errors_are_retried_before_manual_review(self):
        row = ["Retry example", "Coding", "description", "why", "Free tier", "https://example.com/"]
        response = MagicMock()
        response.__enter__.return_value.status = 200
        response.__enter__.return_value.geturl.return_value = row[5]
        response.__enter__.return_value.read.return_value = b"<html>ok</html>"
        with patch("scripts.audit_catalog_links.urlopen", side_effect=[URLError("temporary TLS failure"), response]) as opened, patch("scripts.audit_catalog_links.time.sleep"):
            result = audit_catalog_links.fetch_one(row, timeout=1)
        self.assertEqual(opened.call_count, 2)
        self.assertTrue(result.ok)
        self.assertFalse(result.transient_failure)
        self.assertIsNone(result.error)

    def test_unresolved_manual_mappings_are_never_applied(self):
        self.assertIn('item.get("status") == "unresolved"', FIXER)
        self.assertIn('item.get("userValue") == "PLACEHOLDER"', FIXER)
        self.assertIn("UNRESOLVED audit mapping left unchanged", FIXER)

    def test_audit_is_reporting_first_not_a_popularity_score(self):
        self.assertIn("A live URL is **not** proof that a tool is good", METHOD)
        self.assertIn("does **not** import third-party popularity numbers", METHOD)
        self.assertIn("Third-party directories are discovery inputs only", METHOD)


if __name__ == "__main__":
    unittest.main()
