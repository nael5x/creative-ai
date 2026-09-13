# Verified tool facts

`data/verified-facts.json` is the optional provenance layer for product facts that go beyond the maintained catalog fields.

The rule is intentionally strict: a fact appears only after an official source has been checked. A missing fact means **unknown / not verified**, never `No`.

Each fact contains:

- `id`: stable fact identifier.
- `value`: currently `available`; negative claims are intentionally not inferred from absence.
- `label.en` and `label.ar`: user-facing bilingual label.
- `sourceUrl`: the checked official source.
- `verifiedAt`: the UTC calendar date the source was checked (`YYYY-MM-DD`).

Catalog-derived facts such as category, availability label and open-source status remain in `data/tools.json`. First-tracked dates remain in `data/tool-lifecycle.json`. Keeping these layers separate makes it clear which statements came from project-maintained catalog data and which were separately verified against an official source.

When adding a new verified fact, prefer product documentation, official developer documentation, an official pricing page, or an official project repository. Do not use directory sites, scraped summaries, community votes or another aggregator as the verification source.
