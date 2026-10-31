# Catalog audit method

This document explains how Creative AI audits the maintained tool catalog for trustworthiness and usefulness.

## Two complementary checks

The canonical-link audit runs automatically every Monday at 05:15 UTC through GitHub Actions, can be started manually, and also runs for pull requests that change the catalog or audit implementation.

### 1. Editorial acceptance
A tool must have a clear AI capability, an identifiable official first-party source, a concrete user workflow, and enough differentiation to be worth discovering. Third-party directories are discovery inputs only.

### 2. Live-source health
The catalog periodically checks canonical URLs for:
- unreachable or broken destinations;
- suspicious cross-domain redirects;
- domain-for-sale / parked pages;
- shutdown or farewell pages;
- stale product names after an official rebrand.

A live URL is **not** proof that a tool is good. It is only a health signal. Editorial acceptance still controls inclusion.

## Patterns adapted from other directories

Public AI directories were reviewed for product patterns, not copied assets or proprietary content:
- FutureTools: human curation, pricing filters, categories, recommendations, and explicit submission review.
- Futurepedia: editorial approval, update requests, category-led discovery and richer tool pages.
- TopAI.tools: deep task/category navigation plus explicit verified/API/open-source facets.
- Toolify: broad taxonomy and role/job discovery, while illustrating why raw listing count alone can overwhelm users.

Creative AI deliberately does **not** import third-party popularity numbers, votes, traffic estimates, paid-placement ranking, descriptions, or brand assets as truth.

## Current-snapshot completion rule

The legacy catalog can be marked fully audited only after:
1. the live-source scan finishes;
2. every suspicious redirect/shutdown/parked-domain finding is manually resolved;
3. dead or misleading entries are removed or renamed;
4. the validator and test suite pass;
5. the audit snapshot timestamp and source commit are recorded.

Future additions remain subject to the stricter per-tool quality gate.

### Transient retry policy

The link audit retries transient DNS, TLS, timeout, rate-limit and server-side failures twice before reporting a manual-review signal. Persistent network errors remain review signals and are never interpreted as proof that a product has shut down.


## Manual quality review batches

Each completed batch is preserved as a dated JSON audit artifact under `data/catalog-audit-roundN.json`. The artifact records the accepted active identities, official evidence URLs, concrete user-value rationale, and any superseded labels or removals. The quality manifest remains the source used by the site and validator; audit artifacts preserve the review trail.
