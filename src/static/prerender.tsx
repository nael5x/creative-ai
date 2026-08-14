/// <reference types="node" />
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";
import { ComparisonWorkspace } from "../components/ComparisonWorkspace";
import { DomainPage } from "../components/DomainPage";
import { ui } from "../i18n";
import { domains } from "../data/domains";
import { toolMap } from "../data/tools";
import type { Language } from "../types";

export interface ComparisonRoute { slug: string; left: string; right: string; mode: string }
export interface DomainRoute { slug: string }

export function canonicalComparisons(): ComparisonRoute[] {
  const out: ComparisonRoute[] = [];
  const seen = new Set<string>();
  for (const d of domains) {
    const ids = d.toolIds.filter((id) => toolMap.has(id));
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const slug = `${ids[i]}-vs-${ids[j]}-${d.relatedPreset}`;
        if (seen.has(slug)) continue;
        seen.add(slug);
        out.push({ slug, left: ids[i], right: ids[j], mode: d.relatedPreset });
      }
    }
  }
  return out;
}

export function domainRoutes(): DomainRoute[] {
  return domains.map((d) => ({ slug: d.id }));
}

function nav(lang: Language): string {
  const c = ui[lang];
  return `<header class="site-header"><div class="page-width header-inner"><a class="brand" href="/">CREATIVE <span>AI</span></a><nav aria-label="Primary"><a href="/#top">${c.domains}</a><a href="/#compare">${c.compare}</a><a href="/#directory">${c.directory}</a><a href="/#updates">${c.updates}</a><a href="/#methodology">${c.methodology}</a></nav></nav></div></header>`;
}

function footer(lang: Language): string {
  return `<footer><div class="page-width"><strong>CREATIVE <span>AI</span></strong><p>${ui[lang].disclosure}</p></div></footer>`;
}

function doc(opts: { lang: Language; title: string; description: string; body: string; css: string; alternates: { lang: string; href: string }[] }): string {
  const alt = opts.alternates.map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`).join("\n");
  return `<!doctype html><html lang="${opts.lang}"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${opts.title}</title><meta name="description" content="${opts.description}"/>${alt}<style>${opts.css}</style></head><body>${opts.body}</body></html>`;
}

export function buildStatic(outDir: string, origin: string): string[] {
  const assetsDir = join(outDir, "assets");
  const cssFile = existsSync(assetsDir) ? readdirSync(assetsDir).find((f) => f.endsWith(".css")) : undefined;
  const css = cssFile ? readFileSync(join(assetsDir, cssFile), "utf8") : "";
  const written: string[] = [];
  mkdirSync(join(outDir, "compare"), { recursive: true });
  mkdirSync(join(outDir, "d"), { recursive: true });

  const comparisons = canonicalComparisons();
  for (const route of comparisons) {
    const left = toolMap.get(route.left)!;
    const right = toolMap.get(route.right)!;
    for (const lang of ["en", "ar"] as Language[]) {
      const c = ui[lang];
      const title = `${left.name[lang]} vs ${right.name[lang]} — ${c.compare}`;
      const description = `${c.headline} ${left.name[lang]} vs ${right.name[lang]} (${c.useCase}: ${route.mode}).`;
      const bodyEl: ReactElement = <ComparisonWorkspace language={lang} copy={c} leftId={route.left} rightId={route.right} mode={route.mode} onState={() => {}} onAsk={() => {}} />;
      const body = nav(lang) + `<main class="page-width workspace">${renderToStaticMarkup(bodyEl)}</main>` + footer(lang);
      const file = `compare/${route.slug}${lang === "ar" ? ".ar" : ""}.html`;
      const enHref = `${origin}/compare/${route.slug}.html`;
      const arHref = `${origin}/compare/${route.slug}.ar.html`;
      writeFileSync(join(outDir, file), doc({ lang, title, description, body, css, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
      written.push(file);
    }
  }

  for (const d of domainRoutes()) {
    for (const lang of ["en", "ar"] as Language[]) {
      const c = ui[lang];
      const domain = domains.find((x) => x.id === d.slug)!;
      const title = `${domain.name[lang]} — ${c.domains}`;
      const description = domain.description[lang];
      const bodyEl: ReactElement = <DomainPage language={lang} copy={c} viewId={d.slug} onState={() => {}} />;
      const body = nav(lang) + renderToStaticMarkup(bodyEl) + footer(lang);
      const file = `d/${d.slug}${lang === "ar" ? ".ar" : ""}.html`;
      const enHref = `${origin}/d/${d.slug}.html`;
      const arHref = `${origin}/d/${d.slug}.ar.html`;
      writeFileSync(join(outDir, file), doc({ lang, title, description, body, css, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
      written.push(file);
    }
  }

  const urls = [`${origin}/`, ...written.map((f) => `${origin}/${f}`)];
  writeFileSync(join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `\n<url><loc>${u}</loc></url>`).join("")}\n</urlset>\n`, "utf8");
  writeFileSync(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, "utf8");
  return written;
}
