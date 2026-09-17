from __future__ import annotations

import json
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path("data")
PATHS = {
    "catalog": ROOT / "tools.json",
    "lifecycle": ROOT / "tool-lifecycle.json",
    "verified": ROOT / "verified-facts.json",
    "recommender": ROOT / "recommender.json",
    "fit": ROOT / "recommender-fit.json",
    "quality": ROOT / "catalog-quality.json",
    "batch": ROOT / "catalog-quality-review-batch.json",
}


def load(key: str):
    return json.loads(PATHS[key].read_text(encoding="utf-8"))


def dump(key: str, value) -> None:
    PATHS[key].write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def norm_url(value: str) -> str:
    return value.rstrip("/").casefold()


def valid_url(value: str) -> bool:
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def upsert_quality(records: list[dict], record: dict) -> None:
    for index, existing in enumerate(records):
        if existing.get("name") == record["name"]:
            records[index] = record
            return
    records.append(record)


def main() -> None:
    catalog = load("catalog")
    lifecycle = load("lifecycle")
    verified = load("verified")
    recommender = load("recommender")
    fit = load("fit")
    quality = load("quality")
    batch = load("batch")

    reviewed_at = batch["reviewedAt"]
    batch_id = batch["batchId"]
    records = quality.setdefault("tools", [])
    lifecycle_tools = lifecycle.setdefault("tools", {})

    def locate(name: str) -> int | None:
        for index, row in enumerate(catalog):
            if row[0] == name:
                return index
        return None

    def quality_record(name: str) -> dict | None:
        for record in records:
            if record.get("name") == name:
                return record
        return None

    def patch_row(index: int, item: dict, *, url_key: str = "url") -> None:
        row = list(catalog[index])
        if "category" in item:
            row[1] = item["category"]
        if "description" in item:
            row[2] = item["description"]
        if "useCase" in item:
            row[3] = item["useCase"]
        if "pricing" in item:
            row[4] = item["pricing"]
        if url_key in item:
            row[5] = item[url_key]
        catalog[index] = row

    accepted = updated = removed = already_removed = 0
    superseded = already_superseded = 0
    merged = already_merged = 0

    for item in batch.get("accept", []):
        name = item["name"]
        index = locate(name)
        if index is None:
            raise SystemExit(f"quality batch accepts unknown active tool: {name}")
        official_url = item["officialUrl"]
        if not valid_url(official_url):
            raise SystemExit(f"invalid official URL for {name}: {official_url}")
        if norm_url(catalog[index][5]) != norm_url(official_url):
            raise SystemExit(
                f"quality review URL mismatch for {name}: catalog={catalog[index][5]} review={official_url}"
            )
        if not item.get("evidenceUrls") or not item.get("userValue"):
            raise SystemExit(f"quality review lacks evidence/user value: {name}")
        patch_row(index, item, url_key="officialUrl")
        upsert_quality(
            records,
            {
                "name": name,
                "officialUrl": official_url,
                "evidenceUrls": item["evidenceUrls"],
                "reviewedAt": reviewed_at,
                "userValue": item["userValue"],
                "decision": "accepted",
            },
        )
        accepted += 1

    for item in batch.get("update", []):
        name = item["name"]
        index = locate(name)
        if index is None:
            raise SystemExit(f"quality batch updates unknown active tool: {name}")
        new_url = item["url"]
        if not valid_url(new_url):
            raise SystemExit(f"invalid updated URL for {name}: {new_url}")
        if not item.get("evidenceUrls") or not item.get("userValue"):
            raise SystemExit(f"quality update lacks evidence/user value: {name}")
        patch_row(index, item)
        upsert_quality(
            records,
            {
                "name": name,
                "officialUrl": new_url,
                "evidenceUrls": item["evidenceUrls"],
                "reviewedAt": reviewed_at,
                "userValue": item["userValue"],
                "decision": "accepted",
            },
        )
        updated += 1

    # Use supersede when a maintained catalog identity has an explicit first-party successor that
    # does not already exist as its own catalog row. The new product receives a truthful new
    # lifecycle timestamp; the old identity stays only in quality history as rejected/superseded.
    for item in batch.get("supersede", []):
        old_name = item["name"]
        new_name = item["newName"]
        old_index = locate(old_name)
        new_index = locate(new_name)

        if old_index is None:
            old_review = quality_record(old_name)
            new_review = quality_record(new_name)
            if (
                new_index is not None
                and old_review
                and old_review.get("decision") == "rejected"
                and new_review
                and new_review.get("decision") == "accepted"
            ):
                already_superseded += 1
                continue
            raise SystemExit(
                f"quality supersede source is absent without completed successor history: {old_name}"
            )

        if new_index is not None:
            raise SystemExit(f"quality supersede target already exists in active catalog: {new_name}")

        new_url = item["url"]
        if not valid_url(new_url):
            raise SystemExit(f"invalid successor URL for {new_name}: {new_url}")
        if not item.get("oldEvidenceUrls") or not item.get("newEvidenceUrls"):
            raise SystemExit(f"quality supersede lacks first-party evidence: {old_name} -> {new_name}")
        if not item.get("reason") or not item.get("userValue"):
            raise SystemExit(f"quality supersede lacks reason/user value: {old_name} -> {new_name}")
        first_tracked_at = item.get("firstTrackedAt")
        if not isinstance(first_tracked_at, str) or not first_tracked_at.endswith("Z"):
            raise SystemExit(f"quality supersede requires an ISO UTC firstTrackedAt: {new_name}")

        old_row = list(catalog[old_index])
        old_url = old_row[5]
        catalog[old_index] = [
            new_name,
            item.get("category", old_row[1]),
            item.get("description", old_row[2]),
            item.get("useCase", old_row[3]),
            item.get("pricing", old_row[4]),
            new_url,
        ]

        lifecycle_tools.pop(old_name, None)
        lifecycle_tools[new_name] = {
            "firstTrackedAt": first_tracked_at,
            "event": "added",
            "supersedes": old_name,
        }
        verified.get("tools", {}).pop(old_name, None)
        recommender.get("profiles", {}).pop(old_name, None)
        fit.pop(old_name, None)

        upsert_quality(
            records,
            {
                "name": old_name,
                "officialUrl": old_url,
                "evidenceUrls": item["oldEvidenceUrls"],
                "reviewedAt": reviewed_at,
                "userValue": item["reason"],
                "decision": "rejected",
                "reason": item["reason"],
                "supersededBy": new_name,
            },
        )
        upsert_quality(
            records,
            {
                "name": new_name,
                "officialUrl": new_url,
                "evidenceUrls": item["newEvidenceUrls"],
                "reviewedAt": reviewed_at,
                "userValue": item["userValue"],
                "decision": "accepted",
                "supersedes": old_name,
            },
        )
        superseded += 1

    # Use mergeInto when first-party evidence shows that an old catalog identity has become the
    # same product/company as another row that is already active. This removes the duplicate old
    # identity, preserves its rejected/superseded history, and refreshes the existing target row.
    for item in batch.get("mergeInto", []):
        old_name = item["name"]
        target_name = item["targetName"]
        old_index = locate(old_name)
        target_index = locate(target_name)

        if old_index is None:
            old_review = quality_record(old_name)
            target_review = quality_record(target_name)
            if (
                target_index is not None
                and old_review
                and old_review.get("decision") == "rejected"
                and old_review.get("supersededBy") == target_name
                and target_review
                and target_review.get("decision") == "accepted"
            ):
                already_merged += 1
                continue
            raise SystemExit(
                f"quality merge source is absent without completed merge history: {old_name} -> {target_name}"
            )
        if target_index is None:
            raise SystemExit(f"quality merge target is not active: {target_name}")
        if old_index == target_index:
            raise SystemExit(f"quality merge source and target are identical: {old_name}")

        target_url = item.get("targetUrl", catalog[target_index][5])
        if not valid_url(target_url):
            raise SystemExit(f"invalid merge target URL for {target_name}: {target_url}")
        if not item.get("oldEvidenceUrls") or not item.get("targetEvidenceUrls"):
            raise SystemExit(f"quality merge lacks first-party evidence: {old_name} -> {target_name}")
        if not item.get("reason") or not item.get("userValue"):
            raise SystemExit(f"quality merge lacks reason/user value: {old_name} -> {target_name}")

        old_row = catalog[old_index]
        old_url = old_row[5]
        catalog.pop(old_index)
        lifecycle_tools.pop(old_name, None)
        verified.get("tools", {}).pop(old_name, None)
        recommender.get("profiles", {}).pop(old_name, None)
        fit.pop(old_name, None)

        # The target index may shift when the old row appeared earlier in the list.
        target_index = locate(target_name)
        assert target_index is not None
        target_patch = dict(item)
        target_patch["url"] = target_url
        patch_row(target_index, target_patch)

        upsert_quality(
            records,
            {
                "name": old_name,
                "officialUrl": old_url,
                "evidenceUrls": item["oldEvidenceUrls"],
                "reviewedAt": reviewed_at,
                "userValue": item["reason"],
                "decision": "rejected",
                "reason": item["reason"],
                "supersededBy": target_name,
            },
        )
        upsert_quality(
            records,
            {
                "name": target_name,
                "officialUrl": target_url,
                "evidenceUrls": item["targetEvidenceUrls"],
                "reviewedAt": reviewed_at,
                "userValue": item["userValue"],
                "decision": "accepted",
                "supersedes": old_name,
            },
        )
        merged += 1

    for item in batch.get("remove", []):
        name = item["name"]
        index = locate(name)
        if index is None:
            existing = quality_record(name)
            if existing and existing.get("decision") == "rejected":
                already_removed += 1
                continue
            raise SystemExit(f"quality batch removal missing from catalog without rejected review: {name}")
        if not item.get("evidenceUrls") or not item.get("reason"):
            raise SystemExit(f"quality removal lacks evidence/reason: {name}")
        row = catalog.pop(index)
        lifecycle_tools.pop(name, None)
        verified.get("tools", {}).pop(name, None)
        recommender.get("profiles", {}).pop(name, None)
        fit.pop(name, None)
        upsert_quality(
            records,
            {
                "name": name,
                "officialUrl": row[5],
                "evidenceUrls": item["evidenceUrls"],
                "reviewedAt": reviewed_at,
                "userValue": item["reason"],
                "decision": "rejected",
                "reason": item["reason"],
            },
        )
        removed += 1

    names = [row[0] for row in catalog]
    urls = [norm_url(row[5]) for row in catalog]
    if len(names) != len(set(names)):
        raise SystemExit("quality batch produced duplicate tool names")
    if len(urls) != len(set(urls)):
        raise SystemExit("quality batch produced duplicate official URLs")

    records.sort(key=lambda item: (item.get("decision") != "accepted", item.get("name", "").casefold()))
    quality["lastQualityReviewBatchAt"] = reviewed_at
    quality["lastQualityReviewBatch"] = batch_id
    quality["lastQualityReviewBatchSummary"] = {
        "accepted": len(batch.get("accept", [])),
        "updated": len(batch.get("update", [])),
        "superseded": len(batch.get("supersede", [])),
        "merged": len(batch.get("mergeInto", [])),
        "removed": len(batch.get("remove", [])),
    }

    for key, value in (
        ("catalog", catalog),
        ("lifecycle", lifecycle),
        ("verified", verified),
        ("recommender", recommender),
        ("fit", fit),
        ("quality", quality),
    ):
        dump(key, value)

    print(
        f"Applied {batch_id}: accepted={accepted} updated={updated} "
        f"superseded={superseded} already_superseded={already_superseded} "
        f"merged={merged} already_merged={already_merged} "
        f"removed={removed} already_removed={already_removed}; active={len(catalog)}"
    )


if __name__ == "__main__":
    main()
