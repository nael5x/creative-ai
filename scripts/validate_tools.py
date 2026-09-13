from __future__ import annotations

import json
from datetime import date, datetime
from pathlib import Path
from urllib.parse import urlparse

CATALOG_PATH = Path("data/tools.json")
LIFECYCLE_PATH = Path("data/tool-lifecycle.json")
VERIFIED_FACTS_PATH = Path("data/verified-facts.json")
EXPECTED_FIELDS = 6
ALLOWED_LIFECYCLE_EVENTS = {"baseline_import", "added"}
ALLOWED_VERIFIED_VALUES = {"available"}


def valid_url(value: str) -> bool:
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def valid_iso_utc(value: str) -> bool:
    if not isinstance(value, str) or not value.endswith("Z"):
        return False
    try:
        datetime.fromisoformat(value[:-1] + "+00:00")
    except ValueError:
        return False
    return True


def valid_iso_date(value: str) -> bool:
    if not isinstance(value, str):
        return False
    try:
        date.fromisoformat(value)
    except ValueError:
        return False
    return True


def main() -> None:
    rows = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    if not isinstance(rows, list):
        raise SystemExit("data/tools.json must contain a top-level JSON array")

    errors: list[str] = []
    seen_names: set[str] = set()
    catalog_names: list[str] = []

    for index, row in enumerate(rows, start=1):
        if not isinstance(row, list) or len(row) != EXPECTED_FIELDS:
            errors.append(f"row {index}: expected an array with {EXPECTED_FIELDS} fields")
            continue
        if not all(isinstance(value, str) and value.strip() for value in row):
            errors.append(f"row {index}: every field must be a non-empty string")
            continue
        name, _, _, _, _, url = row
        catalog_names.append(name)
        normalized_name = name.casefold()
        if normalized_name in seen_names:
            errors.append(f"row {index}: duplicate tool name: {name}")
        seen_names.add(normalized_name)
        if not valid_url(url):
            errors.append(f"row {index}: invalid URL: {url}")

    catalog_set = set(catalog_names)

    if not LIFECYCLE_PATH.exists():
        errors.append("data/tool-lifecycle.json is required so catalog addition dates stay truthful")
    else:
        lifecycle = json.loads(LIFECYCLE_PATH.read_text(encoding="utf-8"))
        if lifecycle.get("schemaVersion") != 1:
            errors.append("data/tool-lifecycle.json: schemaVersion must be 1")
        tracking_started = lifecycle.get("trackingStartedAt")
        if not valid_iso_utc(tracking_started):
            errors.append("data/tool-lifecycle.json: trackingStartedAt must be an ISO UTC timestamp ending in Z")
        records = lifecycle.get("tools")
        if not isinstance(records, dict):
            errors.append("data/tool-lifecycle.json: tools must be an object keyed by exact catalog tool name")
            records = {}

        lifecycle_set = set(records)
        for missing in sorted(catalog_set - lifecycle_set):
            errors.append(f"lifecycle missing catalog tool: {missing}")
        for stale in sorted(lifecycle_set - catalog_set):
            errors.append(f"lifecycle references unknown catalog tool: {stale}")

        for name, record in records.items():
            if not isinstance(record, dict):
                errors.append(f"lifecycle {name}: record must be an object")
                continue
            timestamp = record.get("firstTrackedAt")
            event = record.get("event")
            if not valid_iso_utc(timestamp):
                errors.append(f"lifecycle {name}: firstTrackedAt must be an ISO UTC timestamp ending in Z")
            if event not in ALLOWED_LIFECYCLE_EVENTS:
                errors.append(f"lifecycle {name}: event must be one of {sorted(ALLOWED_LIFECYCLE_EVENTS)}")

    if not VERIFIED_FACTS_PATH.exists():
        errors.append("data/verified-facts.json is required for provenance-backed extra facts")
    else:
        verified = json.loads(VERIFIED_FACTS_PATH.read_text(encoding="utf-8"))
        if verified.get("schemaVersion") != 1:
            errors.append("data/verified-facts.json: schemaVersion must be 1")
        facts_by_tool = verified.get("tools")
        if not isinstance(facts_by_tool, dict):
            errors.append("data/verified-facts.json: tools must be an object")
            facts_by_tool = {}
        for unknown in sorted(set(facts_by_tool) - catalog_set):
            errors.append(f"verified facts reference unknown catalog tool: {unknown}")
        for tool_name, facts in facts_by_tool.items():
            if not isinstance(facts, list):
                errors.append(f"verified facts {tool_name}: expected an array")
                continue
            seen_fact_ids: set[str] = set()
            for fact_index, fact in enumerate(facts, start=1):
                prefix = f"verified facts {tool_name} #{fact_index}"
                if not isinstance(fact, dict):
                    errors.append(f"{prefix}: fact must be an object")
                    continue
                fact_id = fact.get("id")
                value = fact.get("value")
                source_url = fact.get("sourceUrl")
                verified_at = fact.get("verifiedAt")
                labels = fact.get("label")
                if not isinstance(fact_id, str) or not fact_id.strip():
                    errors.append(f"{prefix}: id must be a non-empty string")
                elif fact_id in seen_fact_ids:
                    errors.append(f"{prefix}: duplicate fact id {fact_id}")
                else:
                    seen_fact_ids.add(fact_id)
                if value not in ALLOWED_VERIFIED_VALUES:
                    errors.append(f"{prefix}: value must be one of {sorted(ALLOWED_VERIFIED_VALUES)}")
                if not isinstance(source_url, str) or not valid_url(source_url):
                    errors.append(f"{prefix}: sourceUrl must be a valid http(s) URL")
                if not valid_iso_date(verified_at):
                    errors.append(f"{prefix}: verifiedAt must be YYYY-MM-DD")
                if not isinstance(labels, dict) or not all(isinstance(labels.get(code), str) and labels[code].strip() for code in ("en", "ar")):
                    errors.append(f"{prefix}: label must contain non-empty en and ar strings")

    if errors:
        raise SystemExit("Tool catalog validation failed:\n- " + "\n- ".join(errors))

    print(f"Validated {len(rows)} tool records, lifecycle metadata, and verified facts")


if __name__ == "__main__":
    main()
