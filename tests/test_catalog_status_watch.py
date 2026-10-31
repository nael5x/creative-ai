import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


class CatalogStatusWatchTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_json("data/tools.json")
        cls.catalog_names = {row[0] for row in cls.catalog}
        cls.manifest = load_json("data/catalog-quality.json")
        cls.quality_names = {row["name"] for row in cls.manifest["tools"]}
        cls.status_watch = cls.manifest["statusWatch"]

    def test_status_watch_counts_are_reconciled(self):
        self.assertEqual(len(self.status_watch), 7)
        self.assertEqual(sum(item["status"] == "unresolved" for item in self.status_watch), 5)
        self.assertEqual(sum(item["status"] == "sunsetting" for item in self.status_watch), 1)
        self.assertEqual(sum(item["status"] == "maintenance-unclear" for item in self.status_watch), 1)

    def test_status_watch_candidates_are_not_active_or_quality_decisions(self):
        for item in self.status_watch:
            self.assertNotIn(item["name"], self.catalog_names)
            self.assertNotIn(item["name"], self.quality_names)

    def test_unresolved_cases_do_not_claim_shutdown(self):
        by_name = {item["name"]: item for item in self.status_watch}
        for name in ("Coral AI", "CSM AI", "Hour One", "Beatoven.ai", "Character.AI"):
            self.assertEqual(by_name[name]["status"], "unresolved")
            reason = by_name[name]["reason"].lower()
            self.assertTrue("not" in reason and ("discontinued" in reason or "shutdown" in reason or "shut down" in reason))
            self.assertTrue(by_name[name]["nextAction"])

    def test_automatic1111_maintenance_status_is_not_shutdown(self):
        item = next(item for item in self.status_watch if item["name"] == "AUTOMATIC1111 Stable Diffusion WebUI")
        self.assertEqual(item["status"], "maintenance-unclear")
        self.assertIn("2024-05-17", item["reason"])
        self.assertIn("not proof of shutdown", item["reason"].lower())

    def test_firebase_studio_is_marked_sunsetting_with_exact_date(self):
        firebase = next(item for item in self.status_watch if item["name"] == "Firebase Studio")
        self.assertEqual(firebase["status"], "sunsetting")
        self.assertEqual(firebase["sunsetDate"], "2027-03-22")
        self.assertIn("2026-06-22", firebase["reason"])
        self.assertIn("existing workspaces", firebase["reason"].lower())
        self.assertIn("https://firebase.google.com/docs/studio/migrating-project", firebase["evidenceUrls"])

    def test_status_watch_records_have_auditable_urls_and_dates(self):
        for item in self.status_watch:
            self.assertTrue(item["officialUrl"].startswith(("https://", "http://")))
            self.assertTrue(item["checkedUrls"])
            self.assertTrue(all(url.startswith(("https://", "http://")) for url in item["checkedUrls"]))
            self.assertTrue(all(url.startswith(("https://", "http://")) for url in item["evidenceUrls"]))
            self.assertRegex(item["lastCheckedAt"], r"^\d{4}-\d{2}-\d{2}$")
            self.assertTrue(item["reason"].strip())
            self.assertTrue(item["nextAction"].strip())

    def test_quality_page_exposes_status_watch_in_english_and_arabic(self):
        page = (ROOT / "quality.html").read_text(encoding="utf-8")
        self.assertIn('id="statusWatchGrid"', page)
        self.assertIn("Unresolved, sunsetting and maintenance-unclear candidates", page)
        self.assertIn("غير محسوم", page)
        self.assertIn("statusWatch=manifest.statusWatch||[]", page)

    def test_policy_prevents_access_failures_being_treated_as_shutdown(self):
        policy = (ROOT / "docs" / "CATALOG_QUALITY_POLICY.md").read_text(encoding="utf-8")
        self.assertIn("HTTP 403/429", policy)
        self.assertIn("not a claim", policy)
        self.assertIn("statusWatch", policy)


if __name__ == "__main__":
    unittest.main()
