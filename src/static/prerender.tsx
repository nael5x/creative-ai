/// <reference types="node" />
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";
import { ComparisonWorkspace } from "../components/ComparisonWorkspace";
import { DomainPage } from "../components/DomainPage";
import { ComponentPage } from "../components/ComponentPage";
import { GuidePage } from "../components/GuidePage";
import { GuidesPage } from "../components/GuidesPage";
import { FitPage } from "../components/FitPage";
import { MatrixPage } from "../components/MatrixPage";
import { guides as guideData, guideMap } from "../data/guides";
import { ui } from "../i18n";
import { domains } from "../data/domains";
import { components, componentMap } from "../data/components";
import { toolMap } from "../data/tools";
import type { Language } from "../types";

export interface ComparisonRoute { slug: string; left: string; right: string; mode: string }
export interface DomainRoute { slug: string }
export interface ComponentRoute { slug: string }

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

export function componentRoutes(): ComponentRoute[] {
  return components.map((c) => ({ slug: c.id }));
}

export function guideRoutes(): { slug: string }[] {
  return guideData.map((g) => ({ slug: g.id }));
}

export function ld(obj: unknown): string {
  const json = JSON.stringify(obj).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

function breadcrumbItem(position: number, name: string, item: string) {
  return { "@type": "ListItem", position, name, item };
}

function nav(lang: Language): string {
  const c = ui[lang];
  return `<header class="site-header"><div class="page-width header-inner"><a class="brand" href="/">CREATIVE <span>AI</span></a><nav aria-label="Primary"><a href="/#top">${c.domains}</a><a href="/#compare">${c.compare}</a><a href="/#directory">${c.directory}</a><a href="/#updates">${c.updates}</a><a href="/#methodology">${c.methodology}</a></nav></nav></div></header>`;
}

function footer(lang: Language): string {
  return `<footer><div class="page-width"><strong>CREATIVE <span>AI</span></strong><p>${ui[lang].disclosure}</p></div></footer>`;
}

function doc(opts: { lang: Language; title: string; description: string; body: string; css: string; alternates: { lang: string; href: string }[]; jsonLd?: string }): string {
  const alt = opts.alternates.map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`).join("\n");
  return `<!doctype html><html lang="${opts.lang}"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${opts.title}</title><meta name="description" content="${opts.description}"/>${alt}<style>${opts.css}</style>${opts.jsonLd ?? ""}</head><body>${opts.body}</body></html>`;
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
    const enHref = `${origin}/compare/${route.slug}.html`;
    const arHref = `${origin}/compare/${route.slug}.ar.html`;
    const app = (t: typeof left) => ({ "@type": "SoftwareApplication", name: t.name.en, applicationCategory: "AIApplication", operatingSystem: "Web", url: t.officialUrl });
    const comparisonLd = ld({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "BreadcrumbList", itemListElement: [breadcrumbItem(1, "Creative AI", `${origin}/`), breadcrumbItem(2, ui.en.compare, `${origin}/#compare`), breadcrumbItem(3, `${left.name.en} vs ${right.name.en}`, enHref)] },
        app(left),
        app(right),
      ],
    });
    for (const lang of ["en", "ar"] as Language[]) {
      const c = ui[lang];
      const title = `${left.name[lang]} vs ${right.name[lang]} — ${c.compare}`;
      const description = `${c.headline} ${left.name[lang]} vs ${right.name[lang]} (${c.useCase}: ${route.mode}).`;
      const bodyEl: ReactElement = <ComparisonWorkspace language={lang} copy={c} leftId={route.left} rightId={route.right} mode={route.mode} onState={() => {}} onAsk={() => {}} />;
      const body = nav(lang) + `<main class="page-width workspace">${renderToStaticMarkup(bodyEl)}</main>` + footer(lang);
      const file = `compare/${route.slug}${lang === "ar" ? ".ar" : ""}.html`;
      writeFileSync(join(outDir, file), doc({ lang, title, description, body, css, jsonLd: comparisonLd, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
      written.push(file);
    }
  }

  for (const d of domainRoutes()) {
    const domain = domains.find((x) => x.id === d.slug)!;
    const enHref = `${origin}/d/${d.slug}.html`;
    const arHref = `${origin}/d/${d.slug}.ar.html`;
    const domainLd = ld({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "BreadcrumbList", itemListElement: [breadcrumbItem(1, "Creative AI", `${origin}/`), breadcrumbItem(2, domain.name.en, enHref)] },
        { "@type": "ItemList", itemListElement: domain.toolIds.filter((id) => toolMap.has(id)).map((id, i) => ({ "@type": "ListItem", position: i + 1, name: toolMap.get(id)!.name.en, url: `${origin}/?view=tool&id=${id}` })) },
      ],
    });
    for (const lang of ["en", "ar"] as Language[]) {
      const c = ui[lang];
      const title = `${domain.name[lang]} — ${c.domains}`;
      const description = domain.description[lang];
      const bodyEl: ReactElement = <DomainPage language={lang} copy={c} viewId={d.slug} onState={() => {}} />;
      const body = nav(lang) + renderToStaticMarkup(bodyEl) + footer(lang);
      const file = `d/${d.slug}${lang === "ar" ? ".ar" : ""}.html`;
      writeFileSync(join(outDir, file), doc({ lang, title, description, body, css, jsonLd: domainLd, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
      written.push(file);
    }
  }

  mkdirSync(join(outDir, "c"), { recursive: true });
  for (const compRoute of componentRoutes()) {
    const comp = componentMap.get(compRoute.slug)!;
    const enHref = `${origin}/c/${compRoute.slug}.html`;
    const arHref = `${origin}/c/${compRoute.slug}.ar.html`;
    const componentLd = ld({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "BreadcrumbList", itemListElement: [breadcrumbItem(1, "Creative AI", `${origin}/`), breadcrumbItem(2, "Components", `${origin}/#components`), breadcrumbItem(3, comp.name.en, enHref)] },
        { "@type": "SoftwareApplication", name: comp.name.en, applicationCategory: "AIComponent", url: comp.officialUrl },
      ],
    });
    for (const lang of ["en", "ar"] as Language[]) {
      const c = ui[lang];
      const title = `${comp.name[lang]} — ${c.entityComponent}`;
      const description = comp.description[lang];
      const bodyEl: ReactElement = <ComponentPage language={lang} copy={c} viewId={compRoute.slug} onState={() => {}} />;
      const body = nav(lang) + renderToStaticMarkup(bodyEl) + footer(lang);
      const file = `c/${compRoute.slug}${lang === "ar" ? ".ar" : ""}.html`;
      writeFileSync(join(outDir, file), doc({ lang, title, description, body, css, jsonLd: componentLd, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
      written.push(file);
    }
  }

  mkdirSync(join(outDir, "g"), { recursive: true });
  const guidesEnHref = `${origin}/g/index.html`;
  const guidesArHref = `${origin}/g/index.ar.html`;
  const guidesLd = ld({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: guideData.map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.title.en, url: `${origin}/g/${g.id}.html` })),
  });
  for (const lang of ["en", "ar"] as Language[]) {
    const c = ui[lang];
    const idxBody = nav(lang) + renderToStaticMarkup(<GuidesPage language={lang} copy={c} />) + footer(lang);
    const idxFile = `g/index${lang === "ar" ? ".ar" : ""}.html`;
    writeFileSync(join(outDir, idxFile), doc({ lang, title: `${c.guides} — Creative AI`, description: c.guideSummary, body: idxBody, css, jsonLd: guidesLd, alternates: [{ lang: "en", href: guidesEnHref }, { lang: "ar", href: guidesArHref }, { lang: "x-default", href: guidesEnHref }] }), "utf8");
    written.push(idxFile);
  }

  for (const route of guideRoutes()) {
    const g = guideMap.get(route.slug)!;
    const enHref = `${origin}/g/${route.slug}.html`;
    const arHref = `${origin}/g/${route.slug}.ar.html`;
    const guideLd = ld({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title.en,
      inLanguage: "en",
      dateModified: g.updatedAt,
      author: { "@type": "Organization", name: "Creative AI" },
    });
    for (const lang of ["en", "ar"] as Language[]) {
      const c = ui[lang];
      const bodyEl: ReactElement = <GuidePage language={lang} copy={c} viewId={route.slug} />;
      const body = nav(lang) + renderToStaticMarkup(bodyEl) + footer(lang);
      const file = `g/${route.slug}${lang === "ar" ? ".ar" : ""}.html`;
      writeFileSync(join(outDir, file), doc({ lang, title: `${g.title[lang]} — ${c.guides}`, description: g.summary[lang], body, css, jsonLd: guideLd, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
      written.push(file);
    }
  }

  mkdirSync(join(outDir, "fit"), { recursive: true });
  for (const d of domains) {
    for (const toolId of d.toolIds) {
      if (!toolMap.has(toolId)) continue;
      const tool = toolMap.get(toolId)!;
      const slug = `${toolId}-${d.id}`;
      const enHref = `${origin}/fit/${slug}.html`;
      const arHref = `${origin}/fit/${slug}.ar.html`;
      const fitLd = ld({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `${tool.name.en} for ${d.name.en}`,
        inLanguage: "en",
        author: { "@type": "Organization", name: "Creative AI" },
      });
      for (const lang of ["en", "ar"] as Language[]) {
        const c = ui[lang];
        const bodyEl: ReactElement = <FitPage language={lang} copy={c} fitTool={toolId} fitDomain={d.id} onState={() => {}} />;
        const body = nav(lang) + renderToStaticMarkup(bodyEl) + footer(lang);
        const file = `fit/${slug}${lang === "ar" ? ".ar" : ""}.html`;
        writeFileSync(join(outDir, file), doc({ lang, title: `${tool.name[lang]} ${lang === "ar" ? "لـ" : "for"} ${d.name[lang]} — ${c.domains}`, description: d.description[lang], body, css, jsonLd: fitLd, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
        written.push(file);
      }
    }
  }

  mkdirSync(join(outDir, "matrix"), { recursive: true });
  for (const d of domains) {
    const enHref = `${origin}/matrix/${d.id}.html`;
    const arHref = `${origin}/matrix/${d.id}.ar.html`;
    const matrixLd = ld({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: components.filter((c) => c.domainIds.includes(d.id)).map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name.en, url: `${origin}/c/${c.id}.html` })),
    });
    for (const lang of ["en", "ar"] as Language[]) {
      const c = ui[lang];
      const bodyEl: ReactElement = <MatrixPage language={lang} copy={c} domainId={d.id} onState={() => {}} />;
      const body = nav(lang) + renderToStaticMarkup(bodyEl) + footer(lang);
      const file = `matrix/${d.id}${lang === "ar" ? ".ar" : ""}.html`;
      writeFileSync(join(outDir, file), doc({ lang, title: `${c.matrixFor} — ${d.name[lang]}`, description: c.matrixFor, body, css, jsonLd: matrixLd, alternates: [{ lang: "en", href: enHref }, { lang: "ar", href: arHref }, { lang: "x-default", href: enHref }] }), "utf8");
      written.push(file);
    }
  }

  const urls = [`${origin}/`, ...written.map((f) => `${origin}/${f}`)];
  writeFileSync(join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `\n<url><loc>${u}</loc></url>`).join("")}\n</urlset>\n`, "utf8");
  writeFileSync(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, "utf8");
  return written;
}
