import type { Copy } from "../i18n";
import type { Language } from "../types";
import { domains, domainMap } from "../data/domains";
import { tools } from "../data/tools";
import { components } from "../data/components";
import { guidesForDomain } from "../data/guides";
import { StatusBadge } from "./StatusBadge";

type Props = { language: Language; copy: Copy; viewId: string; onState: (next: { view?: "domain" | "tool" | "component" | "guide"; viewId?: string; left?: string; right?: string; mode?: string }) => void };

export function DomainPage({ language, copy, viewId, onState }: Props) {
  const domain = domainMap.get(viewId);
  if (!domain) return <main className="page-width"><p>{language === "ar" ? "المجال غير موجود" : "Domain not found"}</p></main>;
  const domainTools = domain.toolIds.map((id) => tools.find((t) => t.id === id)!).filter(Boolean);
  const domainComponents = components.filter((c) => c.domainIds.includes(domain.id));
  const domainGuides = guidesForDomain(domain.id);
  const compareLeft = domain.toolIds[0];
  const compareRight = domain.toolIds.find((id) => id !== compareLeft) ?? domain.toolIds[1] ?? fallbackTool(compareLeft);
  return (
    <main id="domain" className="page-width workspace">
      <button className="link-back" onClick={() => onState({ view: undefined, viewId: undefined })}>← {copy.back}</button>
      <section className="intro">
        <h1>{domain.name[language]}</h1>
        <p>{domain.description[language]}</p>
      </section>
      <section className="orientation-card">
        <h2>{copy.orientation}</h2>
        <p>{domain.orientation[language]}</p>
        <button className="primary" onClick={() => onState({ view: undefined, viewId: undefined, left: compareLeft, right: compareRight, mode: domain.relatedPreset })}>{copy.compareThese}</button>
      </section>
      <section className="section-heading"><div><h2>{copy.topTools}</h2></div></section>
      <div className="card-grid">
        {domainTools.map((tool) => (
          <button key={tool.id} className="entity-card" onClick={() => onState({ view: "tool", viewId: tool.id })}>
            <span className="monogram">{tool.name.en[0]}</span>
            <div><h3>{tool.name[language]}</h3><p>{tool.category[language]}</p></div>
          </button>
        ))}
      </div>
      <section className="section-heading"><div><h2>{copy.topComponents}</h2></div></section>
      <div className="card-grid">
        {domainComponents.map((c) => (
          <button key={c.id} className="entity-card" onClick={() => onState({ view: "component", viewId: c.id })}>
            <span className="monogram">{c.name.en[0]}</span>
            <div><h3>{c.name[language]}</h3><p>{c.description[language]}</p><StatusBadge status={c.status} copy={copy} /></div>
          </button>
        ))}
      </div>
      {domainGuides.length > 0 && (
        <>
          <section className="section-heading"><div><h2>{copy.guides}</h2></div></section>
          <div className="card-grid">
            {domainGuides.map((g) => (
              <button key={g.id} className="entity-card" onClick={() => onState({ view: "guide", viewId: g.id })}>
                <span className="monogram">{g.title.en[0]}</span>
                <div><h3>{g.title[language]}</h3><p>{g.summary[language]}</p></div>
              </button>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

function fallbackTool(exclude: string): string {
  return tools.find((t) => t.id !== exclude)?.id ?? "chatgpt";
}
