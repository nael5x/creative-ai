import { useState } from "react";
import type { Copy } from "../i18n";
import type { Language } from "../types";
import { domains, domainMap } from "../data/domains";
import { tools } from "../data/tools";
import { profiles } from "../data/profiles";
import type { UrlState } from "../lib/urlState";

type Budget = "free" | "paid" | "any";

export function Advisor({ language, copy, onClose, onChoose, onState }: { language: Language; copy: Copy; onClose: () => void; onChoose: (left: string, right: string, mode: string) => void; onState?: (next: Partial<UrlState>) => void }) {
  const [domainId, setDomainId] = useState<string | null>(null);
  const [budget, setBudget] = useState<Budget | null>(null);
  const domain = domainId ? domainMap.get(domainId) : undefined;
  const step = domainId ? (budget ? "results" : "budget") : "domain";

  function toolsFor() {
    if (!domain) return [];
    let ids = domain.toolIds;
    if (budget === "free") {
      ids = ids.filter((id) => {
        const tool = tools.find((t) => t.id === id);
        const text = tool ? `${tool.pricing.en} ${tool.pricing.ar}`.toLocaleLowerCase() : "";
        return text.includes("free") || text.includes("مجاني");
      });
    }
    return ids.map((id) => tools.find((t) => t.id === id)!).filter(Boolean);
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.currentTarget === e.target) onClose(); }}>
      <section className="advisor" role="dialog" aria-modal="true" aria-labelledby="advisor-title">
        <button className="modal-close" onClick={onClose} aria-label={copy.close}>×</button>
        {step === "domain" && <>
          <h2 id="advisor-title">{copy.advisorPickDomain}</h2>
          <div className="goal-grid domain-goals">
            {domains.map((d) => <button key={d.id} className="domain-card" onClick={() => setDomainId(d.id)}><strong>{d.name[language]}</strong><span>{d.description[language]}</span></button>)}
          </div>
        </>}
        {step === "budget" && domain && <>
          <button className="link-back" onClick={() => setDomainId(null)}>← {copy.back}</button>
          <h2 id="advisor-title">{domain.name[language]} · {copy.advisorBudget}</h2>
          <div className="goal-grid">
            <button onClick={() => setBudget("free")}>{copy.budgetFree}</button>
            <button onClick={() => setBudget("paid")}>{copy.budgetPaid}</button>
            <button onClick={() => setBudget("any")}>{copy.budgetAny}</button>
          </div>
        </>}
        {step === "results" && domain && <>
          <button className="link-back" onClick={() => setBudget(null)}>← {copy.back}</button>
          <h2 id="advisor-title">{copy.advisorResults}</h2>
          <p className="orientation-card" style={{ display: "block" }}>{copy.orientation}: {domain.orientation[language]}</p>
          <div className="card-grid">
            {toolsFor().map((tool) => (
              <div key={tool.id} className="entity-card">
                <span className="monogram">{tool.name.en[0]}</span>
                <div>
                  <h3>{tool.name[language]}</h3>
                  <p>{tool.pricing[language]}</p>
                  {profiles[tool.id] ? <span className="status-badge status-verified">{copy.verified}</span> : null}
                  <div className="advisor-card-actions">
                    <button className="secondary" onClick={() => { onState?.({ view: "tool", viewId: tool.id }); onClose(); }}>{copy.openTool}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {toolsFor().length >= 2
            ? <button className="primary full" onClick={() => onChoose(toolsFor()[0].id, toolsFor()[1].id, domain.relatedPreset)}>{copy.compareTop}</button>
            : <p className="neutral">{copy.insufficient}</p>}
        </>}
      </section>
    </div>
  );
}
