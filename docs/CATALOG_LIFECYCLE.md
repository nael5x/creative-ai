# Catalog lifecycle tracking

Creative AI keeps discovery dates honest.

`data/tool-lifecycle.json` records when a tool first became verifiably present in the maintained `data/tools.json` catalog. These dates are **catalog dates**, not claims about when a product launched publicly.

The current baseline is anchored to Git commit `cdfeddc3253e2e521dc278c39166c0f76c672b06`, the commit that moved the curated directory into `data/tools.json` on 2026-09-12T22:54:28Z.

Tools present at that point use `event: "baseline_import"`. Tools added later must use `event: "added"` with the real UTC timestamp of the catalog addition. The validator requires lifecycle coverage for every catalog tool and rejects stale lifecycle entries.

This powers `new.html` without fabricated product launch dates, popularity scores, or fake recency.
