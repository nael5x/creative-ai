import type { Language } from "../types";
import type { Copy } from "../i18n";
import type { UrlState } from "../lib/urlState";
import { toolMap } from "../data/tools";
import { domainMap } from "../data/domains";
import { components } from "../data/components";

export function FitPage({ language, copy, fitTool, fitDomain, onState }: { language: Language; copy: Copy; fitTool: string; fitDomain: string; onState: (next: Partial<UrlState>) => void }) {
  const tool = toolMap.get(fitTool);
  const domain = domainMap.get(fitDomain);
  if (!tool || !domain) {
    return <main className="page-width"><p>{language === "ar" ? "غير موجود" : "Not found"}</p></main>;
  }
  const other = domain.toolIds.find((id) => id !== tool.id) ?? domain.toolIds[0];
  const relatedComponents = components.filter((c) => c.domainIds.includes(domain.id));

  return (
    <main className="page-width fit-page">
      <a className="back-link" href={`/?view=domain&id=${domain.id}`}>{copy.backToDomain}</a>
      <section className="intro">
        <h1>{tool.name[language]} <span className="for-domain"> {language === "ar" ? "لـ" : "for"} {domain.name[language]}</span></h1>
        <p>{domain.description[language]}</p>
      </section>

      <section className="orientation-card">
        <h2>{copy.orientation}</h2>
        <p>{domain.orientation[language]}</p>
        <div className="fit-cta">
          <button className="primary" onClick={() => onState({ view: undefined, left: tool.id, right: other, mode: domain.relatedPreset })}>{copy.compareThese}</button>
          <button className="secondary" onClick={() => onState({ view: "tool", viewId: tool.id })}>{copy.viewTool}</button>
        </div>
      </section>

      <section className="fit-meta">
        <h3>{copy.pricing}</h3>
        <p>{tool.pricing[language]}</p>
        <h3>{copy.platforms}</h3>
        <p>{tool.platforms.map((p) => p[language]).join(" · ")}</p>
        <p><a href={tool.officialUrl} target="_blank" rel="noopener noreferrer">{copy.official}</a></p>
      </section>

      {relatedComponents.length > 0 && (
        <>
          <section className="section-heading"><div><h2>{copy.topComponents}</h2></div></section>
          <div className="card-grid">
            {relatedComponents.map((c) => (
              <button key={c.id} className="entity-card" onClick={() => onState({ view: "component", viewId: c.id })}>
                <span className="monogram">{c.name.en[0]}</span>
                <div><h3>{c.name[language]}</h3><p>{c.description[language]}</p></div>
              </button>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
