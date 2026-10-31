# Catalog lifecycle tracking

Creative AI keeps discovery dates honest.

`data/tool-lifecycle.json` records when a tool first became verifiably present in the maintained `data/tools.json` catalog. These dates are **catalog dates**, not claims about when a product launched publicly.

The current baseline is anchored to Git commit `cdfeddc3253e2e521dc278c39166c0f76c672b06`, the commit that moved the curated directory into `data/tools.json` on 2026-09-12T22:54:28Z.

Tools present at that point use `event: "baseline_import"`. Tools added later use `event: "added"` with the real UTC timestamp of the catalog addition. When a product is renamed, keep its original `firstTrackedAt` and add `previousName` to its lifecycle record. The former name must have a rejected quality record whose `supersededBy` points to the current name. This preserves the original tracking date without pretending the renamed product is a new addition. The validator enforces this relationship.

This powers `new.html` without fabricated product launch dates, popularity scores, or fake recency.
