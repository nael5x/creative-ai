import { useState } from "react";
import type { Copy } from "../i18n";
import type { Language } from "../types";
import { components } from "../data/components";
import { getCorrections, resolveCorrection, getVerifiedOverrides, setVerified, unsetVerified } from "../data/editorial";

export function EditorialDashboard({ language, copy }: { language: Language; copy: Copy }) {
  const [corrections, setCorrections] = useState(getCorrections());
  const [overrides, setOverrides] = useState(getVerifiedOverrides());

  function verify(id: string) {
    setVerified(id);
    setOverrides(getVerifiedOverrides());
  }
  function unverify(id: string) {
    unsetVerified(id);
    setOverrides(getVerifiedOverrides());
  }
  function resolve(id: string) {
    resolveCorrection(id);
    setCorrections(getCorrections());
  }

  const queue = components.filter((c) => (overrides[c.id] ? "verified" : c.status) !== "verified");

  return (
    <main className="page-width editorial workspace">
      <h1>{copy.editorialTitle}</h1>
      <p className="note">{copy.disclosure}</p>

      <section className="section-heading"><div><h2>{copy.componentQueue}</h2><p>{queue.length} {copy.pending}</p></div></section>
      <div className="queue-grid">
        {queue.map((c) => (
          <div key={c.id} className="queue-card">
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}><span className="monogram">{c.name.en[0]}</span><h3>{c.name[language]}</h3></div>
            <p>{c.description[language]}</p>
            <div className="advisor-card-actions">
              <button className="primary" onClick={() => verify(c.id)}>{copy.verifyAction}</button>
              {overrides[c.id] ? <button className="secondary" onClick={() => unverify(c.id)}>{copy.unverifyAction}</button> : null}
            </div>
          </div>
        ))}
      </div>

      <section className="section-heading"><div><h2>{copy.correctionsInbox}</h2><p>{corrections.filter((c) => c.status === "open").length} {copy.pending}</p></div></section>
      <div className="inbox">
        {corrections.length ? corrections.map((c) => (
          <div key={c.id} className="inbox-row">
            <div>
              <p><strong>{c.entityType === "tool" ? copy.entityTool : copy.entityComponent}: {c.entityId}</strong></p>
              <p>{c.message}</p>
              <p className="meta">{new Date(c.at).toLocaleString()} · {c.status}</p>
            </div>
            {c.status === "open" ? <button className="secondary" onClick={() => resolve(c.id)}>{copy.resolve}</button> : <span className="meta">{copy.resolve}</span>}
          </div>
        )) : <p>{copy.noCorrections}</p>}
      </div>
    </main>
  );
}
