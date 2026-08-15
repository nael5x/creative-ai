/// <reference types="node" />
import { writeFileSync } from "node:fs";
import { buildStatic } from "./prerender";

const outDir = "dist";
const origin = process.env.SITE_ORIGIN ?? "https://creative-ai.example.com";
const written = buildStatic(outDir, origin);
writeFileSync(outDir + "/.nojekyll", "");
console.log(`[prerender] wrote ${written.length} static pages + sitemap.xml + robots.txt`);
