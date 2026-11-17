# Creative AI React/Vite PoC report

**Date:** 2026-11-17
**Repository:** `nael5x/creative-ai`
**Base:** `main` at `fdb3b5355a354c96f1f50e127899580cf97b2ccf`
**Isolated branch:** `poc/react-vite-compat-2026-11-17`

## Scope and protection checks

- **PASS** — GitHub confirmed `main` and `checkpoint/pre-redesign-2026-11-17` both pointed to `fdb3b5355a354c96f1f50e127899580cf97b2ccf` before work began.
- **PASS** — After pushing, GitHub still reported both protected references at the same SHA; the PoC branch points to its isolated commit.
- **PASS** — The PoC was created on a separate branch from that SHA. Existing static pages, catalog data, and GitHub Actions were not edited. No deployment or pull request was made.
- **PASS** — Work is confined to `poc/react-vite/`; the original site remains HTML, CSS, and JavaScript.

## Results

| Area | Result | Evidence |
|---|---|---|
| React + Vite + TypeScript + Tailwind CSS 4 | **PASS** | Final `npm run build` completed with strict TypeScript checking and Vite production bundling. JavaScript bundle: 444.46 kB minified / 146.90 kB gzip. |
| React Bits Antigravity | **PASS** | Loaded from the official registry. Browser reported WebGL2 available and rendered its canvas at desktop size. |
| React Bits BorderGlow | **PASS** | Loaded from the official registry and rendered inside the bench. |
| Aceternity Timeline and Bento Grid | **PASS** | Both official registry sources compiled and rendered. Demo copy was changed to Creative AI context. One unused import in the Timeline source was removed for strict TypeScript. |
| shadcn/ui Button | **PASS** | Official CLI component source compiled and its light/dark theme tokens resolved. |
| MiniDev UI Footer Nav | **PASS** | Official Footer Nav and Link sources rendered. Vite import paths and semantic CSS token mapping were adapted; component structure and interactions were retained. |
| Lucide UI icons | **PASS** | Search, theme, bookmark, arrow, and help icons rendered from `lucide-react`. No hand-drawn icons were added. |
| Lobe Icons product mark | **PASS** | The official OpenAI SVG from `@lobehub/icons-static-svg` rendered; the built asset was bundled locally. |
| Light and dark themes | **PASS** | Theme control changed the page background and foreground and kept shadcn controls legible. |
| Responsive widths | **PASS** | Playwright checked 320, 375, 768, and 1280 px; no horizontal overflow appeared. |
| Reduced motion | **PASS with wrapper** | With `prefers-reduced-motion: reduce`, the app unmounted the decorative WebGL canvas. This avoids the source component's remaining continuous, slowed particle movement. |
| Existing stack storage | **PASS** | Seeded `creative-ai-stack-v1` with `10Web` and `11x`; `stack.html` displayed both after reload and preserved the stored JSON. |
| Existing Compare URL state | **PASS** | `compare.html?a=ChatGPT&b=Claude&c=Gemini&lang=en` retained all three selected tools and the same query values. |
| Existing Recommend URL state | **PASS** | `recommend.html?task=coding&budget=free&priority=privacy&lang=en` retained all three values and returned results. |
| React Bits Navbar | **BLOCKED** | No reusable free Navbar source matching the selected component was available in the public React Bits component registry. The current Pro documentation lists navbar blocks, but no source was copied. No replacement was used. |
| Spectrum UI BeamSearch | **BLOCKED** | The official Code tab displayed “Login to view code” and required account access. It was not substituted. |

## Dependency and source notes

The PoC uses React 19, Vite 7, Tailwind CSS 4, Motion for the Aceternity Timeline, `radix-ui` and `class-variance-authority` for the shadcn Button, `lucide-react`, and the static Lobe Icons SVG package. An initial build exposed missing Node typings and an unused upstream Timeline import; both were corrected. A first Lobe React package attempt caused a peer warning and a 1.65 MB JavaScript bundle. Switching to Lobe's official static SVG reduced the final bundle to 444.46 kB and removed the peer warning.

The final install audit reported zero vulnerabilities. A later audit recheck was **BLOCKED** because the npm advisory endpoint could not resolve in the current network environment. React Bits' MIT + Commons Clause permits use as part of an application but prohibits redistribution of the components themselves, so those original source files are excluded from Git. Aceternity originals were also kept local in this PoC; the README gives commands to fetch all four sources from their official registries before building. See `THIRD-PARTY-NOTICES.md` for source and license notes.

## Remaining risks

- Antigravity requires WebGL2. The tested browser supported it; unsupported browsers need a non-animated fallback before any production use.
- React Bits' own reduced-motion handling only slows continuous movement. This PoC prevents that movement by unmounting the decorative component when reduced motion is requested.
- Navbar and BeamSearch remain untested because their exact original sources were not publicly accessible. They must not be replaced with lookalikes.
- The existing Compare page displayed correct selections, but its current external logo loader produced 404 responses for ChatGPT favicon variants during the browser check. That static-site behavior was left unchanged.
- The branch requires fetching the license-restricted component source locally before running the bench; those source files are intentionally absent from the public commit.

## Recommendation: Hybrid

Keep the current HTML/CSS/JS pages and data workflows in place, and use React islands for isolated interfaces that need these React-only motion components. The PoC demonstrates that the React stack can coexist without changing the current storage key or URL contracts. A full React migration would add routing and state migration risk without resolving the two blocked original components. Revisit that choice only after the Navbar and BeamSearch source questions are resolved and the key workflows are independently mapped.
