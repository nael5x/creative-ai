# UX and visual research for Creative AI

Reviewed: 2026-10-31

## Product direction

Creative AI should feel like a calm, useful decision tool—not a noisy leaderboard. The primary journey is: describe the task or search by name; narrow by category, access model and evidence-backed capabilities; open a useful profile, compare options or explore alternatives; then save a personal stack without an account.

Keep the existing graphite-and-mint identity. Improve hierarchy, spacing, readability, navigation and consistent tool icons rather than rewriting the stack or chasing visual trends.

## What we learned from other directories

- **FutureTools** — https://futuretools.io/tools  
  Its dedicated database puts search and category discovery first and separates new/removed states from the main catalog. Borrow a clear database entry point, category discovery and explicit lifecycle states. Do not copy its branding, text or exact layout.

- **Futurepedia** — https://www.futurepedia.io/ai-tools  
  Broad category coverage and editorial context help users explore a large ecosystem. Borrow understandable category paths and contextual explanations; avoid overwhelming the first screen with a wall of categories.

- **What's That AI** — https://whatsthatai.com/  
  Starts with a task-oriented question and offers paths for tools, open-source projects, models and companies. Borrow task-first discovery, while keeping Creative AI's scope and claims distinct.

- **Toolveyor** — https://toolveyor.com/  
  Uses example searches, task-led categories, plain-language descriptions and a stated official-source methodology. Borrow example queries and visible sourcing. Keep pricing/access labels conservative and grounded in first-party evidence.

- **AIxploria** — https://www.aixploria.com/en/  
  Shows the utility of category, pricing and verification filters at scale. Its huge catalog also illustrates the risk of volume and featured placement dominating quality. Borrow useful filters, not fake ranks or unverified "best" labels.

- **TOOOLS.design** — https://www.toools.design/  
  Its stated curation model emphasizes review rather than accepting every submission. Borrow the principle that admission is earned and quality policy should be visible; do not copy its editorial voice or brand.

## UI foundations

- **shadcn/ui** — https://ui.shadcn.com/docs  
  Its principles emphasize composable components, accessible behavior, customization and consistent defaults. Creative AI is static HTML/CSS/JS, so borrow those principles without migrating to React or adding a large dependency.

- **Lucide** — https://lucide.dev/  
  A consistent, lightweight SVG icon style fits search and action controls. Prefer a few inline SVG/CSS glyphs over loading an entire runtime icon library.

- **Simple Icons** — https://github.com/simple-icons/simple-icons  
  Offers thousands of brand SVGs and explicitly asks users to read its legal disclaimer. Use brand marks only when correctly mapped and never imply endorsement. For broad catalog coverage, prefer each product's own icon/favicon endpoints first, then readable initials if no first-party icon loads.

## Decisions being implemented

- Keep graphite / restrained mint; avoid default neon purple-blue AI gradients.
- Keep the finder as the main primary action, while making database search and categories easy to reach.
- Do not hide all primary navigation links on mobile; show a compact horizontally scrollable second row.
- Use one shared icon resolver on every page that presents tool entries: official favicon and common official icon paths first, then readable initials. Do not proxy icons through third-party services.
- Lazy-load icons, set intrinsic dimensions, use no-referrer requests, and handle broken icons without empty image boxes.
- Keep "reviewed" labels evidence-based; do not imply every catalog entry has been audited.
- Derive counts from maintained data rather than inventing metrics.

## Next steps

1. Continue the separate trust audit in issue #58; the quality manifest is a subset, not proof that the whole catalog is audited.
2. Review open tool submissions against the official-source acceptance gate before merging.
3. Improve category taxonomy and task-based search relevance.
4. Expand verified profile facts only when first-party evidence supports them.
5. Then expand rich detail content across the reviewed catalog, leaving unknowns unknown.
