import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


def test_catalog_has_valid_rows_without_a_hard_count_target():
    tools = load_json("data/tools.json")
    assert tools
    assert all(isinstance(row, list) and len(row) == 6 for row in tools)
    assert all(all(isinstance(value, str) and value.strip() for value in row) for row in tools)
    assert all(row[5].startswith(("http://", "https://")) for row in tools)


def test_catalog_has_no_duplicate_names_or_official_urls():
    tools = load_json("data/tools.json")
    names = [row[0].casefold() for row in tools]
    urls = [row[5].rstrip("/").casefold() for row in tools]
    assert len(names) == len(set(names))
    assert len(urls) == len(set(urls))


def test_lifecycle_covers_every_catalog_tool():
    tools = load_json("data/tools.json")
    lifecycle = load_json("data/tool-lifecycle.json")["tools"]
    names = {row[0] for row in tools}
    assert names == set(lifecycle)
    assert all(item["event"] in {"baseline_import", "added"} for item in lifecycle.values())
    assert all(item["firstTrackedAt"].endswith("Z") for item in lifecycle.values())


def test_catalog_batches_are_reviewable_six_field_rows():
    batch_dir = ROOT / "data" / "catalog-batches"
    batches = list(batch_dir.glob("*.json"))
    assert batches
    for batch_path in batches:
        rows = load_json(batch_path.relative_to(ROOT))
        assert rows
        assert all(isinstance(row, list) and len(row) == 6 for row in rows)
        assert all(all(isinstance(value, str) and value.strip() for value in row) for row in rows)
