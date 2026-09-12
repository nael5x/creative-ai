from __future__ import annotations

import json
from pathlib import Path
from urllib.parse import urlparse

CATALOG_PATH = Path("data/tools.json")
EXPECTED_FIELDS = 6


def valid_url(value: str) -> bool:
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def main() -> None:
    rows = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    if not isinstance(rows, list):
        raise SystemExit("data/tools.json must contain a top-level JSON array")

    errors: list[str] = []
    seen_names: set[str] = set()

    for index, row in enumerate(rows, start=1):
        if not isinstance(row, list) or len(row) != EXPECTED_FIELDS:
            errors.append(f"row {index}: expected an array with {EXPECTED_FIELDS} fields")
            continue
        if not all(isinstance(value, str) and value.strip() for value in row):
            errors.append(f"row {index}: every field must be a non-empty string")
            continue
        name, _, _, _, _, url = row
        normalized_name = name.casefold()
        if normalized_name in seen_names:
            errors.append(f"row {index}: duplicate tool name: {name}")
        seen_names.add(normalized_name)
        if not valid_url(url):
            errors.append(f"row {index}: invalid URL: {url}")

    if errors:
        raise SystemExit("Tool catalog validation failed:\n- " + "\n- ".join(errors))

    print(f"Validated {len(rows)} tool records")


if __name__ == "__main__":
    main()
