# Creative AI

An evidence-led bilingual directory and comparison workspace for AI tools. It separates editorial suitability scores from evidence confidence, never treats missing data as zero, and avoids universal-winner claims.

## Development

```sh
npm install
npm run dev
npm test
npm run build
```

The static Vite build is written to `dist/`. The existing GitHub Actions source monitor still refreshes `data/updates.json` every six hours, but collected items are marked `needs-review`; discovery sources never become published claims automatically.
