import { useDeferredValue, useState } from "react";
import { tools } from "../data/tools";
import { profiles } from "../data/profiles";
import type { Copy } from "../i18n";
import type { Language } from "../types";
import type { UrlState } from "../lib/urlState";

export function Directory({ language, copy, onCompare, onState }: { language: Language; copy: Copy; onCompare: (id: string) => void; onState?: (next: Partial<UrlState>) => void }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query.trim().toLocaleLowerCase());
  const visible = deferred ? tools.filter((tool) => tool.searchTerms.some((term) => term.toLocaleLowerCase().includes(deferred)) || tool.description[language].toLocaleLowerCase().includes(deferred)) : tools;
  return <section id="directory" className="directory page-width">
    <div className="section-heading"><div><h2>{copy.explore}</h2><p>{tools.length} {language === "ar" ? "أداة مع روابطها الرسمية" : "tools with official links"}</p></div><label className="directory-search"><span className="sr-only">{copy.search}</span><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={copy.search} /></label></div>
    <div className="tool-list">{visible.map((tool) => <article key={tool.id} className="directory-row"><span className="monogram">{tool.name.en[0]}</span><div><button className="link-name" onClick={() => onState?.({ view: "tool", viewId: tool.id })}><h3>{tool.name[language]}</h3></button><p>{tool.description[language]}</p></div><span className="category">{tool.category[language]}</span><span className={profiles[tool.id] ? "coverage published" : "coverage"}>{profiles[tool.id] ? copy.published : copy.notVerified}</span><button className="secondary" onClick={() => onCompare(tool.id)}>{copy.compareWith}</button></article>)}</div>
  </section>;
}
