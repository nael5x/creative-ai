import type { Language } from "../types";
import type { Copy } from "../i18n";
import type { UrlState } from "../lib/urlState";
import { deals } from "../data/deals";
import { toolMap } from "../data/tools";

export function DealsPage({ language, copy, onState }: { language: Language; copy: Copy; onState: (next: Partial<UrlState>) => void }) {
  return (
    <main className="page-width deals-page">
      <section className="intro">
        <h1>{copy.deals}</h1>
      </section>
      <p className="deals-disclosure">{copy.dealsDisclosure}</p>
      <div className="card-grid">
        {deals.map((d) => {
          const tool = toolMap.get(d.toolId);
          return (
            <div key={d.id} className="entity-card deal-card">
              <div>
                <h3>{d.title[language]}</h3>
                <p>{d.detail[language]}</p>
                {tool && <button className="link-name" onClick={() => onState({ view: "tool", viewId: tool.id })}>{tool.name[language]}</button>}
              </div>
              <a className="chip" href={d.url} target="_blank" rel="noopener noreferrer sponsored">{copy.viewDeal} ↗</a>
            </div>
          );
        })}
      </div>
    </main>
  );
}
