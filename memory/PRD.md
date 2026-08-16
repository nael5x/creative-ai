# Creative AI — PRD & Working Notes

## Project
Creative AI — bilingual (EN/AR, RTL), evidence-based AI-tool discovery/comparison platform.
Stack: React + TypeScript + Vite (static-friendly, GitHub Pages). No backend, no auth, no DB, no LLM calls.

- Repo: `nael5x/creative-ai`  ·  Branch: `codex-creative-ai-v1`  ·  Baseline HEAD: `a40678e`
- Toolchain: Node ≥ 22.19 (repo `engines`). Node 22.19.0 installed in this env (Node 20 breaks jsdom/undici).
- Scripts: `npm test` (vitest), `npm run build` (tsc -b + vite build + static prerender), `npm run lint` (eslint), `npm run dev`.

## Core principles (must never regress)
- Neutral, evidence-based, transparent. Never fabricate a universal winner.
- Missing evidence = UNKNOWN, never "not supported" and never a negative.
- Protected methodology files (do NOT change core logic): `src/lib/scoring.ts`, `src/lib/fit.ts`,
  `src/data/capabilities.ts`, `src/data/profiles.ts`, `src/data/presets.ts`.

## Stage 1 — Evidence-Based Decision Wizard MVP (DONE, 2026-06)
Flow: Domain → Budget → Privacy → Workflow Focus → Results. Client-only, URL-shareable.

Two-phase deterministic engine (`src/lib/wizard.ts`):
- Phase A `rankCandidates(toolIds, selection)`: hard constraints (Free-only ⇒ verified `freeTier`;
  Strict-local ⇒ verified `localExecution`/`selfHosting`; unknown never qualifies). User-preference points
  from selected focus caps (+ Prefer-local bonus). Sort by score desc, then toolId asc ⇒ order-independent.
  Points are user-preference only, never shown as an editorial score.
- Phase B: reuse existing `documentedFit` (unchanged) to explain the head-to-head.
- Result states: `recommendation` | `tradeoff` | `insufficient` (no-eligible / no-evidence).

URL state (extended `src/lib/urlState.ts`): `?view=wizard&step=&domain=&budget=&privacy=&focus=` with
safe validation (invalid values → undefined; malformed URLs never crash).

### Prerequisites fixed
- P0-A: added `eslint.config.js` (ESLint v9 flat, typescript-eslint + react-hooks/react-refresh). `npm run lint` passes.
- P0-B: HTML escaping in `src/static/prerender.tsx` (`escapeHtml`) for title/description/nav/footer/alt links.
  JSON-LD (`ld()`) and CSS intentionally NOT HTML-escaped. Regression tests added.
- P0-C: prerender test timeout was environment-dependent (Node 20). On Node 22 it runs ~0.6s;
  added targeted 20s per-test timeout on the heavy `buildStatic` integration test (no global inflation).
- NotebookLM URL corrected to `https://notebooklm.google.com/` (only change in `src/data/tools.ts`).

### Files created
- `src/data/wizard.ts`, `src/lib/wizard.ts`
- `src/components/WizardShell.tsx`, `src/components/wizard/{WizardProgress,WizardStepDomain,WizardStepBudget,WizardStepPrivacy,WizardStepFocus,WizardResults}.tsx`
- Tests: `src/lib/wizard.test.ts`, `src/data/wizard.test.ts`, `src/components/WizardShell.test.tsx`, `src/i18n.wizard.test.ts`
- `eslint.config.js`

### Files modified
`src/App.tsx` (nav link + hero CTA + wizard view + Compare-top handler), `src/i18n.ts` (EN/AR wizard strings),
`src/lib/urlState.ts` (+wizard state), `src/styles.css` (wizard styles), `src/static/prerender.tsx` (+ test),
`src/data/tools.ts` (NotebookLM URL). Trivial dead-import removals to satisfy lint:
`WatchlistPage.tsx`, `DomainPage.tsx`, `ComponentPage.tsx`, `EditorialDashboard.tsx(+.test)`, `ToolPage.tsx`, `profiles.test.ts`.

### Verification (2026-06)
npm test 130 pass · npm run build ok (614 pages) · npm run lint 0 errors (1 pre-existing warning) ·
tsc -b clean · git diff --check clean · npm audit 0 vulns. Protected files unchanged.

### Transparency note / known behavior
With the current (deliberately symmetric) verified evidence, no full-domain wizard selection naturally
produces the `tradeoff` state — real domain data yields recommendation / insufficient. The tradeoff engine
is fully implemented and unit-tested (`rankCandidates` + `decideResult`) and the UI renders it; it will
activate automatically if/when asymmetric per-capability evidence is added. This is correct evidence-based
behavior, not a gap.

## Backlog / out of scope (do NOT start without approval)
Stage 2 features: Living Comparison, custom comparison weights, Evidence Explorer, Timeline,
My Stack Builder, semantic search, PWA, backend/auth/DB, AI APIs, analytics, global redesign/perf.
Do not deploy. Do not merge to main. Do not push unless explicitly requested.
