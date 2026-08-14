import { useEffect, useState } from "react";
import type { Copy } from "../i18n";
import type { Language } from "../types";
import type { UrlState } from "../lib/urlState";
import { tools } from "../data/tools";
import { domains, domainMap } from "../data/domains";
import { components, componentMap } from "../data/components";
import { fetchUpdates, updatesFor, type UnifiedUpdate } from "../data/updates";
import { getVerifiedOverrides } from "../data/editorial";
import { StatusBadge } from "./StatusBadge";
import { CorrectionForm } from "./CorrectionForm";
import { SaveButton } from "./SaveButton";

const typeLabel: Record<string, { en: string; ar: string }> = {
  skill: { en: "Skill", ar: "مهارة" },
  plugin: { en: "Plugin", ar: "إضافة" },
  connector: { en: "Connector", ar: "كوننتور" },
};

type Props = { language: Language; copy: Copy; viewId: string; onState: (next: Partial<UrlState>) => void };

export function ComponentPage({ language, copy, viewId, onState }: Props) {
  const c = componentMap.get(viewId);
  const [entityUpdates, setEntityUpdates] = useState<UnifiedUpdate[]>([]);
  const [correctionOpen, setCorrectionOpen] = useState(false);
  useEffect(() => { if (c) fetchUpdates().then((all) => setEntityUpdates(updatesFor(all, "component", c.id))).catch(() => setEntityUpdates([])); }, [c?.id]);
  if (!c) return <main className="page-width"><p>{language === "ar" ? "المكوّن غير موجود" : "Component not found"}</p></main>;
  const overrides = getVerifiedOverrides();
  const effective = overrides[c.id] ? "verified" : c.status;
  const shared = c.toolIds.length > 1;
  const sourceLabel = language === "ar" ? "المصدر الرسمي" : "Official source";
  return (
    <main id="component" className="page-width workspace">
      <button className="link-back" onClick={() => onState({ view: undefined, viewId: undefined })}>← {copy.back}</button>
      <section className="intro">
        <h1>{c.name[language]}</h1>
        <p>{typeLabel[c.type][language]} · <StatusBadge status={effective ?? c.status} copy={copy} /></p>
        <p>{c.description[language]}</p>
      </section>
      <section className="facts-row">
        <div><h3>{copy.whenToUse}</h3><p>{c.whenToUse[language]}</p></div>
        <div><h3>{copy.install}</h3><p>{c.install[language]}</p></div>
      </section>
      <section className="section-heading"><div><h2>{copy.relatedTools}</h2></div></section>
      <p className={shared ? "" : "private-note"}>
        {shared ? `${copy.sharedWith}: ` : `${copy.privateTo}: `}
        {c.toolIds.map((id) => tools.find((t) => t.id === id)?.name[language]).filter(Boolean).join(", ")}
      </p>
      <section className="section-heading"><div><h2>{copy.domains}</h2></div></section>
      <div className="tag-row">
        {c.domainIds.map((id) => <button key={id} className="tag" onClick={() => onState({ view: "domain", viewId: id })}>{domainMap.get(id)?.name[language]}</button>)}
      </div>
      <section className="section-heading"><div><h2>{copy.changelog}</h2></div></section>
      <div className="update-list">{entityUpdates.length ? entityUpdates.map((u) => <div key={u.id} className="update-row"><time dateTime={u.publishedAt}>{u.publishedAt.slice(0, 10)}</time><strong>{c.name[language]}</strong><span>{u.title}</span><a href={u.url} target="_blank" rel="noreferrer">{copy.sources}</a></div>) : <p>{copy.noUpdates}</p>}</div>
      <div className="selection-actions">
        <a className="primary" href={c.officialUrl} target="_blank" rel="noreferrer">{sourceLabel}</a>
        <SaveButton item={{ kind: "component", id: c.id }} copy={copy} />
        <button className="secondary" onClick={() => setCorrectionOpen(true)}>{copy.reportCorrection}</button>
      </div>
      {correctionOpen ? <CorrectionForm copy={copy} entityType="component" entityId={c.id} entityName={c.name[language]} onClose={() => setCorrectionOpen(false)} /> : null}
    </main>
  );
}
