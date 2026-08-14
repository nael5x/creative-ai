/// <reference types="node" />
import { buildStatic } from "./prerender";

const outDir = "dist";
const origin = process.env.SITE_ORIGIN ?? "https://creative-ai.example.com";
const written = buildStatic(outDir, origin);
console.log(`[prerender] wrote ${written.length} static pages + sitemap.xml + robots.txt`);
