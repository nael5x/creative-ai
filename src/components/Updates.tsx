import { useEffect, useState } from "react";
import type { Copy } from "../i18n";
import { fetchUpdates, type UnifiedUpdate } from "../data/updates";
import type { UrlState } from "../lib/urlState";

export function Updates({ copy, onState }: { copy: Copy; onState?: (next: Partial<UrlState>) => void }) {
  const [items, setItems] = useState<UnifiedUpdate[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { fetchUpdates().then(setItems).finally(() => setLoaded(true)); }, []);
  const shown = items.slice(0, 12);
  return <section id="updates" className="updates page-width">
    <div className="section-heading"><div><h2>{copy.recent}</h2><p>{loaded ? `${items.length} tracked updates across tools and components` : "…"}</p></div></div>
    <div className="update-list">
      {shown.length ? shown.map((item) => (
        <div key={item.id} className="update-row">
          <time dateTime={item.publishedAt}>{item.publishedAt.slice(0, 10)}</time>
          <strong>{item.entityName}</strong>
          <span>{item.title}</span>
          <small>{item.entityType === "tool" ? copy.entityTool : copy.entityComponent}{item.status === "verified" ? ` · ${copy.verified}` : ""}</small>
          <span className="update-links">
            <a href={item.url} target="_blank" rel="noreferrer">{copy.sources}</a>
            {item.entityId && onState ? <button className="link-name" onClick={() => onState({ view: item.entityType, viewId: item.entityId })}>{copy.viewEntity}</button> : null}
          </span>
        </div>
      )) : <p>{copy.noUpdates}</p>}
    </div>
  </section>;
}
