import { useState } from "react";
import type { Language } from "../types";
import type { Copy } from "../i18n";
import type { UrlState } from "../lib/urlState";
import { domains, domainMap } from "../data/domains";
import { toolMap } from "../data/tools";
import { components } from "../data/components";

export function MatrixPage({ language, copy, domainId, onState }: { language: Language; copy: Copy; domainId?: string; onState: (next: Partial<UrlState>) => void }) {
  const [selected, setSelected] = useState(domainId && domainMap.has(domainId) ? domainId : domains[0].id);
  const domain = domainMap.get(selected)!;
  const toolsInDomain = domain.toolIds.map((id) => toolMap.get(id)!).filter(Boolean);
  const comps = components.filter((c) => c.domainIds.includes(selected));

  return (
    <main className="page-width matrix-page">
      <section className="intro">
        <h1>{copy.matrixFor}</h1>
      </section>
      <div className="tag-row">
        {domains.map((d) => (
          <button key={d.id} className={`tag${d.id === selected ? " tag-active" : ""}`} onClick={() => setSelected(d.id)}>{d.name[language]}</button>
        ))}
      </div>

      {comps.length === 0 ? (
        <p className="matrix-empty">{language === "ar" ? "لا مكوّنات لهذا المجال بعد." : "No components for this domain yet."}</p>
      ) : (
        <div className="matrix-scroll">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>{copy.toolPage}</th>
                {comps.map((c) => (
                  <th key={c.id}><button className="matrix-head" onClick={() => onState({ view: "component", viewId: c.id })}>{c.name[language]}</button></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {toolsInDomain.map((t) => (
                <tr key={t.id}>
                  <th className="matrix-rowhead"><button className="matrix-head" onClick={() => onState({ view: "tool", viewId: t.id })}>{t.name[language]}</button></th>
                  {comps.map((c) => {
                    const supported = c.toolIds.includes(t.id);
                    return (
                      <td key={c.id} className={supported ? `cell-yes status-${c.status}` : "cell-no"} title={supported ? `${c.name[language]} · ${c.status}` : ""}>
                        {supported ? "●" : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="matrix-legend">{copy.supported}: <span className="cell-yes">●</span></p>
    </main>
  );
}
