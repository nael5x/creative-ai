import { useEffect, useState } from "react";
import type { Copy } from "../i18n";
import type { Language } from "../types";
import type { UrlState } from "../lib/urlState";
import { tools } from "../data/tools";
import { domains } from "../data/domains";
import { components } from "../data/components";
import { capabilities, capabilityLabels } from "../data/capabilities";
import { fetchUpdates, updatesFor, type UnifiedUpdate } from "../data/updates";
import { dealForTool } from "../data/deals";
import { StatusBadge } from "./StatusBadge";
import { CorrectionForm } from "./CorrectionForm";
import { SaveButton } from "./SaveButton";

type Props = { language: Language; copy: Copy; viewId: string; onState: (next: Partial<UrlState>) => void };

export function ToolPage({ language, copy, viewId, onState }: Props) {
  const tool = tools.find((t) => t.id === viewId);
  const [entityUpdates, setEntityUpdates] = useState<UnifiedUpdate[]>([]);
  const [correctionOpen, setCorrectionOpen] = useState(false);
  useEffect(() => { fetchUpdates().then((all) => setEntityUpdates(updatesFor(all, "tool", tool?.id ?? ""))).catch(() => setEntityUpdates([])); }, [tool?.id]);
  if (!tool) return <main className="page-width"><p>{language === "ar" ? "الأداة غير موجودة" : "Tool not found"}</p></main>;
  const relatedDomains = domains.filter((d) => d.toolIds.includes(tool.id));
  const toolComponents = components.filter((c) => c.toolIds.includes(tool.id));
  const shared = toolComponents.filter((c) => c.toolIds.length > 1);
  const priv = toolComponents.filter((c) => c.toolIds.length === 1);
  const caps = capabilities[tool.id] ?? {};
  const other = tools.find((t) => t.id !== tool.id)!;
  const deal = dealForTool(tool.id);

  return (
    <main id="tool" className="page-width workspace">
      <button className="link-back" onClick={() => onState({ view: undefined, viewId: undefined })}>← {copy.back}</button>
      <section className="intro">
        <h1>{tool.name[language]}</h1>
        <p>{tool.category[language]}</p>
        <p>{tool.description[language]}</p>
      </section>
      <section className="facts-row">
        <div><h3>{copy.pricing ?? "Pricing"}</h3><p>{tool.pricing[language]}</p></div>
        <div><h3>{copy.platforms ?? "Platforms"}</h3><p>{tool.platforms.map((p) => p[language]).join(", ")}</p></div>
        <div><h3>{copy.bestFor}</h3><p>{tool.bestFor.map((b) => b[language]).join(" · ")}</p></div>
        <div><h3>{copy.limitations}</h3><p>{tool.limitations.map((l) => l[language]).join(" · ")}</p></div>
      </section>
      <section className="section-heading"><div><h2>{copy.capabilitiesLabel}</h2></div></section>
      <ul className="cap-list">
        {Object.entries(caps).map(([id, a]) => (
          <li key={id} className={`cap-${a!.state}`}>
            <strong>{capabilityLabels[id as keyof typeof caps][language]}</strong>
            <span>{a!.rationale[language]}</span>
            {a!.evidence ? <a href={a!.evidence.url} target="_blank" rel="noreferrer">{a!.evidence.title} ↗</a> : null}
          </li>
        ))}
      </ul>
      <section className="section-heading"><div><h2>{copy.relatedComponents}</h2></div></section>
      {shared.length > 0 && <h3 className="sub">{copy.sharedLabel}</h3>}
      <div className="card-grid">
        {shared.map((c) => <ComponentCard key={c.id} id={c.id} language={language} copy={copy} onState={onState} />)}
      </div>
      {priv.length > 0 && <h3 className="sub">{copy.privateLabel}</h3>}
      <div className="card-grid">
        {priv.map((c) => <ComponentCard key={c.id} id={c.id} language={language} copy={copy} onState={onState} />)}
      </div>
      <section className="section-heading"><div><h2>{copy.domains}</h2></div></section>
      <div className="tag-row">
        {relatedDomains.map((d) => <button key={d.id} className="tag" onClick={() => onState({ view: "domain", viewId: d.id })}>{d.name[language]}</button>)}
      </div>
      {relatedDomains.length > 0 && (
        <>
          <section className="section-heading"><div><h2>{copy.fitByDomain}</h2></div></section>
          <div className="tag-row">
            {relatedDomains.map((d) => <button key={d.id} className="tag tag-fit" onClick={() => onState({ view: "fit", fitTool: tool.id, fitDomain: d.id })}>{tool.name[language]} → {d.name[language]}</button>)}
          </div>
        </>
      )}
      {deal && (
        <>
          <section className="section-heading"><div><h2>{copy.plansForTool}</h2></div></section>
          <div className="deal-inline">
            <p>{deal.detail[language]}</p>
            <a className="chip" href={deal.url} target="_blank" rel="noopener noreferrer sponsored">{copy.viewDeal} ↗</a>
            <p className="deals-disclosure">{copy.dealsDisclosure}</p>
          </div>
        </>
      )}
      <section className="section-heading"><div><h2>{copy.changelog}</h2></div></section>
      <div className="update-list">{entityUpdates.length ? entityUpdates.map((u) => <div key={u.id} className="update-row"><time dateTime={u.publishedAt}>{u.publishedAt.slice(0, 10)}</time><strong>{tool.name[language]}</strong><span>{u.title}</span><a href={u.url} target="_blank" rel="noreferrer">{copy.sources}</a></div>) : <p>{copy.noUpdates}</p>}</div>
      <div className="selection-actions">
        <button className="primary" onClick={() => onState({ view: undefined, viewId: undefined, left: tool.id, right: other.id, mode: relatedDomains[0]?.relatedPreset ?? "general" })}>{copy.compareThese}</button>
        <SaveButton item={{ kind: "tool", id: tool.id }} copy={copy} />
        <button className="secondary" onClick={() => setCorrectionOpen(true)}>{copy.reportCorrection}</button>
      </div>
      {correctionOpen ? <CorrectionForm copy={copy} entityType="tool" entityId={tool.id} entityName={tool.name[language]} onClose={() => setCorrectionOpen(false)} /> : null}
    </main>
  );
}

function ComponentCard({ id, language, copy, onState }: { id: string; language: Language; copy: Copy; onState: Props["onState"] }) {
  const c = components.find((x) => x.id === id)!;
  return (
    <button className="entity-card" onClick={() => onState({ view: "component", viewId: c.id })}>
      <span className="monogram">{c.name.en[0]}</span>
      <div><h3>{c.name[language]}</h3><p>{c.description[language]}</p><StatusBadge status={c.status} copy={copy} /></div>
    </button>
  );
}
