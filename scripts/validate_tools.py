from __future__ import annotations

import json
from datetime import date, datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

CATALOG_PATH = Path("data/tools.json")
LIFECYCLE_PATH = Path("data/tool-lifecycle.json")
VERIFIED_FACTS_PATH = Path("data/verified-facts.json")
QUALITY_PATH = Path("data/catalog-quality.json")
EXPECTED_FIELDS = 6
ALLOWED_LIFECYCLE_EVENTS = {"baseline_import", "added"}
ALLOWED_VERIFIED_VALUES = {"available"}
ALLOWED_QUALITY_DECISIONS = {"accepted", "rejected"}


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


def parse_iso_utc(value: str) -> datetime | None:
    if not valid_iso_utc(value):
        return None
    return datetime.fromisoformat(value[:-1] + "+00:00").astimezone(timezone.utc)


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
    seen_urls: set[str] = set()
    catalog_names: list[str] = []
    catalog_by_name: dict[str, list[str]] = {}

    for index, row in enumerate(rows, start=1):
        if not isinstance(row, list) or len(row) != EXPECTED_FIELDS:
            errors.append(f"row {index}: expected an array with {EXPECTED_FIELDS} fields")
            continue
        if not all(isinstance(value, str) and value.strip() for value in row):
            errors.append(f"row {index}: every field must be a non-empty string")
            continue
        name, _, _, _, _, url = row
        catalog_names.append(name)
        catalog_by_name[name] = row
        normalized_name = name.casefold()
        normalized_url = url.rstrip("/").casefold()
        if normalized_name in seen_names:
            errors.append(f"row {index}: duplicate tool name: {name}")
        seen_names.add(normalized_name)
        if normalized_url in seen_urls:
            errors.append(f"row {index}: duplicate official URL: {url}")
        seen_urls.add(normalized_url)
        if not valid_url(url):
            errors.append(f"row {index}: invalid URL: {url}")

    catalog_set = set(catalog_names)
    lifecycle_records: dict[str, dict] = {}

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
        lifecycle_records = records

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

    accepted_quality_names: set[str] = set()
    quality_review_count = 0
    enforcement_started: datetime | None = None

    if not QUALITY_PATH.exists():
        errors.append("data/catalog-quality.json is required for the trusted-tool acceptance gate")
    else:
        quality = json.loads(QUALITY_PATH.read_text(encoding="utf-8"))
        if quality.get("schemaVersion") != 1:
            errors.append("data/catalog-quality.json: schemaVersion must be 1")
        if quality.get("policy") != "docs/CATALOG_QUALITY_POLICY.md":
            errors.append("data/catalog-quality.json: policy must point to docs/CATALOG_QUALITY_POLICY.md")

        enforcement_value = quality.get("enforcedForAdditionsAtOrAfter")
        enforcement_started = parse_iso_utc(enforcement_value)
        if enforcement_started is None:
            errors.append("data/catalog-quality.json: enforcedForAdditionsAtOrAfter must be an ISO UTC timestamp ending in Z")

        reviews = quality.get("tools")
        if not isinstance(reviews, list):
            errors.append("data/catalog-quality.json: tools must be an array of review records")
            reviews = []
        quality_review_count = len(reviews)
        seen_quality_names: set[str] = set()

        for review_index, review in enumerate(reviews, start=1):
            prefix = f"quality review #{review_index}"
            if not isinstance(review, dict):
                errors.append(f"{prefix}: review must be an object")
                continue
            name = review.get("name")
            official_url = review.get("officialUrl")
            evidence_urls = review.get("evidenceUrls")
            reviewed_at = review.get("reviewedAt")
            user_value = review.get("userValue")
            decision = review.get("decision")

            if not isinstance(name, str) or not name.strip():
                errors.append(f"{prefix}: name must be a non-empty string")
                continue
            if name in seen_quality_names:
                errors.append(f"{prefix}: duplicate review for {name}")
            seen_quality_names.add(name)

            if decision not in ALLOWED_QUALITY_DECISIONS:
                errors.append(f"{prefix} {name}: decision must be one of {sorted(ALLOWED_QUALITY_DECISIONS)}")
            if not isinstance(user_value, str) or not user_value.strip():
                errors.append(f"{prefix} {name}: userValue must explain concrete value")
            if not valid_iso_date(reviewed_at):
                errors.append(f"{prefix} {name}: reviewedAt must be YYYY-MM-DD")
            if not isinstance(official_url, str) or not valid_url(official_url):
                errors.append(f"{prefix} {name}: officialUrl must be a valid http(s) URL")
            if not isinstance(evidence_urls, list) or not evidence_urls:
                errors.append(f"{prefix} {name}: evidenceUrls must contain at least one first-party evidence URL")
            elif not all(isinstance(url, str) and valid_url(url) for url in evidence_urls):
                errors.append(f"{prefix} {name}: every evidence URL must be valid http(s)")

            if decision == "accepted":
                accepted_quality_names.add(name)
                if name not in catalog_by_name:
                    errors.append(f"{prefix}: accepted review references unknown catalog tool: {name}")
                elif official_url != catalog_by_name[name][5]:
                    errors.append(
                        f"{prefix} {name}: officialUrl must exactly match catalog URL {catalog_by_name[name][5]!r}"
                    )
            elif decision == "rejected":
                if name in catalog_by_name:
                    errors.append(f"{prefix}: rejected tool must not remain in the active catalog: {name}")
                reason = review.get("reason")
                if not isinstance(reason, str) or not reason.strip():
                    errors.append(f"{prefix} {name}: rejected review must include a concrete reason")

    if enforcement_started is not None:
        for name, record in lifecycle_records.items():
            if not isinstance(record, dict) or record.get("event") != "added":
                continue
            added_at = parse_iso_utc(record.get("firstTrackedAt"))
            if added_at is None or added_at < enforcement_started:
                continue
            if name not in accepted_quality_names:
                errors.append(
                    f"quality gate missing accepted review for newly added tool: {name} "
                    f"(added {record.get('firstTrackedAt')})"
                )

    if errors:
        raise SystemExit("Tool catalog validation failed:\n- " + "\n- ".join(errors))

    print(
        f"Validated {len(rows)} tool records, lifecycle metadata, verified facts, "
        f"and {quality_review_count} quality reviews"
    )


if __name__ == "__main__":
    main()
