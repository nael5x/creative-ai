import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TOOLS_PATH = ROOT / "data" / "tools.json"
CONFIG_PATH = ROOT / "data" / "recommender.json"


class RecommenderConfigTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tools = json.loads(TOOLS_PATH.read_text(encoding="utf-8"))
        cls.config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
        cls.tool_by_name = {row[0]: row for row in cls.tools}

    def test_has_enough_task_choices_for_guided_finder(self):
        task_ids = [item["id"] for item in self.config["tasks"]]
        self.assertGreaterEqual(len(task_ids), 8)
        self.assertEqual(len(task_ids), len(set(task_ids)))
        for item in self.config["tasks"]:
            self.assertTrue(item["en"].strip())
            self.assertTrue(item["ar"].strip())

    def test_budget_and_priority_options_are_stable(self):
        self.assertEqual(
            {item["id"] for item in self.config["budgets"]},
            {"free", "any", "open-source"},
        )
        self.assertEqual(
            {item["id"] for item in self.config["priorities"]},
            {"easy", "privacy", "control"},
        )

    def test_profiles_reference_real_catalog_tools_and_known_tasks(self):
        known_tasks = {item["id"] for item in self.config["tasks"]}
        for name, profile in self.config["profiles"].items():
            self.assertIn(name, self.tool_by_name)
            self.assertTrue(profile["tasks"])
            self.assertTrue(set(profile["tasks"]).issubset(known_tasks))
            self.assertIsInstance(profile.get("traits", []), list)

    def test_open_source_trait_matches_catalog_availability(self):
        for name, profile in self.config["profiles"].items():
            if "open-source" in profile.get("traits", []):
                availability = self.tool_by_name[name][4].lower()
                self.assertIn("open source", availability)

    def test_each_task_has_a_useful_candidate_pool(self):
        counts = {item["id"]: 0 for item in self.config["tasks"]}
        for profile in self.config["profiles"].values():
            for task in profile["tasks"]:
                counts[task] += 1

        for task, count in counts.items():
            minimum = 2 if task == "audio" else 3
            self.assertGreaterEqual(count, minimum, f"{task} only has {count} candidates")


if __name__ == "__main__":
    unittest.main()
