# Tool catalog format

`data/tools.json` is the source of truth for the directory cards shown on the Creative AI site.

Each entry is a six-item JSON array in this order:

1. Tool name
2. Category
3. What the tool does
4. Why it may matter to the user
5. Availability label
6. Official URL

Example:

```json
[
  "Example Tool",
  "Coding",
  "Short description of what it does.",
  "Why someone may choose it.",
  "Free tier / Paid",
  "https://example.com/"
]
```

All six values must be non-empty strings and the final value must be an `http://` or `https://` URL. Invalid entries are ignored by the page instead of breaking the directory.

## Lifecycle metadata

Every catalog tool must also have an exact-name entry in `data/tool-lifecycle.json`.

`firstTrackedAt` is the first **verified catalog timestamp**, not the product's public launch date. The current baseline is anchored to commit `cdfeddc3253e2e521dc278c39166c0f76c672b06`, when the maintained catalog was moved into `data/tools.json` on 2026-09-12.

Lifecycle event values:

- `baseline_import` — the tool was already present when lifecycle tracking was established.
- `added` — the tool was added after lifecycle tracking began; use the real UTC catalog-addition timestamp.

Example for a future addition:

```json
"Example Tool": {
  "firstTrackedAt": "2026-09-20T14:30:00Z",
  "event": "added"
}
```

Do not backfill guessed launch dates or invented "new" dates. `scripts/validate_tools.py` requires lifecycle coverage for every tool so the Newly Tracked page cannot silently drift from the maintained catalog.
