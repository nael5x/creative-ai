import type { Language } from "../types";
import { tools, toolMap } from "../data/tools";
import { components, componentMap } from "../data/components";
import { domains, domainMap } from "../data/domains";
import { guides } from "../data/guides";

export type Citation = { label: string; href: string; source: string };

type Kind = "tool" | "component" | "domain" | "guide";
type Indexed = { id: string; kind: Kind; en: string; ar: string };

const STOP = new Set([
  "the", "and", "for", "with", "what", "which", "best", "how", "to", "of", "in", "on", "is", "are", "do", "i", "a", "an",
  "ما", "الذي", "التي", "كيف", "افضل", "هل", "ان", "من", "على", "مع", "لل", "في", "و", "أي", "هل", "عن",
]);

function tokenize(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9\sء-ي]/g, " ").split(/\s+/).filter((w) => w.length > 2);
}

function hrefFor(kind: Kind, id: string): string {
  if (kind === "tool") return `/?view=tool&id=${id}`;
  if (kind === "component") return `/?view=component&id=${id}`;
  if (kind === "domain") return `/?view=domain&id=${id}`;
  return `/?view=guide&id=${id}`;
}

function sourceFor(kind: Kind, id: string): string {
  if (kind === "tool") return toolMap.get(id)?.officialUrl ?? "#";
  if (kind === "component") return componentMap.get(id)?.officialUrl ?? "#";
  if (kind === "domain") return "#";
  return guides.find((g) => g.id === id)?.sources[0]?.url ?? "#";
}

function buildIndex(): Indexed[] {
  const items: Indexed[] = [];
  for (const t of tools) {
    items.push({ id: t.id, kind: "tool", en: `${t.name.en} ${t.category.en} ${t.description.en} ${t.bestFor.map((b) => b.en).join(" ")} ${t.limitations.map((l) => l.en).join(" ")}`, ar: `${t.name.ar} ${t.category.ar} ${t.description.ar}` });
  }
  for (const c of components) {
    items.push({ id: c.id, kind: "component", en: `${c.name.en} ${c.description.en} ${c.type}`, ar: `${c.name.ar} ${c.description.ar}` });
  }
  for (const d of domains) {
    items.push({ id: d.id, kind: "domain", en: `${d.name.en} ${d.description.en} ${d.orientation.en}`, ar: `${d.name.ar} ${d.description.ar} ${d.orientation.ar}` });
  }
  for (const g of guides) {
    items.push({ id: g.id, kind: "guide", en: `${g.title.en} ${g.summary.en} ${g.sections.map((s) => s.heading.en + " " + s.body.en).join(" ")}`, ar: `${g.title.ar} ${g.summary.ar}` });
  }
  return items;
}

export function citeAnswer(query: string, lang: Language): { answer: string; citations: Citation[] } {
  const q = query.trim();
  if (!q) {
    return { answer: lang === "ar" ? "اكتب سؤالك للبحث في بياناتنا المقارنة الموثّقة." : "Type your question to search our source-linked comparison data.", citations: [] };
  }
  const tokens = tokenize(q).filter((w) => !STOP.has(w));
  if (tokens.length === 0) {
    return { answer: lang === "ar" ? "لم نفهم السؤال. جرّب ذكر أداة أو مجال أو مكوّن." : "We didn’t catch that. Try naming a tool, domain or component.", citations: [] };
  }

  const index = buildIndex();
  const scored = index
    .map((it) => {
      const text = `${it.en} ${it.ar}`.toLowerCase();
      let score = 0;
      for (const t of tokens) if (text.includes(t)) score += 1;
      if (text.includes(q.toLowerCase())) score += 3;
      return { it, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (scored.length === 0) {
    return { answer: lang === "ar" ? "لم نجد تطابقًا في بياناتنا. تصفّح المجالات أو شغّل مقارنة مباشرة." : "No match in our data. Browse the domains or run a direct comparison.", citations: [] };
  }

  const citations: Citation[] = scored.map(({ it }) => ({
    label:
      it.kind === "tool" ? (toolMap.get(it.id)?.name[lang] ?? it.id)
      : it.kind === "component" ? (componentMap.get(it.id)?.name[lang] ?? it.id)
      : it.kind === "domain" ? (domainMap.get(it.id)?.name[lang] ?? it.id)
      : (guides.find((g) => g.id === it.id)?.title[lang] ?? it.id),
    href: hrefFor(it.kind, it.id),
    source: sourceFor(it.kind, it.id),
  }));

  const answer = lang === "ar"
    ? `من بياناتنا المقارنة المربوطة بمصادر، أكثر النتائج صلة بـ «${q}»:`
    : `From our source-linked comparison data, the most relevant results for “${q}” are:`;

  return { answer, citations };
}
