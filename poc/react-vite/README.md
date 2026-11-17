# Creative AI React/Vite compatibility bench

This isolated bench checks whether original React components can run beside the existing static Creative AI site. It is not a redesign or a production deployment.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npx shadcn@latest add https://reactbits.dev/r/Antigravity-TS-TW.json --yes --overwrite
npx shadcn@latest add https://reactbits.dev/r/BorderGlow-TS-TW.json --yes --overwrite
npx shadcn@latest add https://ui.aceternity.com/registry/timeline.json --yes --overwrite
npx shadcn@latest add https://ui.aceternity.com/registry/bento-grid.json --yes --overwrite
npm run dev
```

The React Bits and Aceternity component source files are fetched locally from the publishers' registries and intentionally ignored by Git. Preserve each publisher's license when using them. In the Aceternity files, the `cn` utility import must resolve to `@/lib/utils` in this Vite alias setup.

MiniDev UI Footer Nav, its Link dependency, shadcn/ui Button, Lucide UI icons, and the Lobe Icons static OpenAI logo are included through their package or registry sources. Their official sources and license notes are listed in `THIRD-PARTY-NOTICES.md`.

## Build

After fetching the four ignored component files:

```sh
npm run build
```

See `POC-REPORT.md` for the tested commit, outcomes, blockers, and architecture recommendation.
