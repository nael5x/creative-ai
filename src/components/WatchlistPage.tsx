import { useEffect, useState } from "react";
import type { Language } from "../types";
import type { Copy } from "../i18n";
import type { UrlState } from "../lib/urlState";
import { getWatchlist, encodeWatchlist, type WatchItem } from "../lib/watchlist";
import { toolMap } from "../data/tools";
import { componentMap } from "../data/components";
import { domainMap } from "../data/domains";
import { fetchUpdates, updatesFor, type UnifiedUpdate } from "../data/updates";

function label(item: WatchItem, lang: Language): string {
  if (item.kind === "tool") return toolMap.get(item.id)?.name[lang] ?? item.id;
  if (item.kind === "component") return componentMap.get(item.id)?.name[lang] ?? item.id;
  return domainMap.get(item.id)?.name[lang] ?? item.id;
}

function hrefFor(item: WatchItem): string {
  if (item.kind === "tool") return `/?view=tool&id=${item.id}`;
  if (item.kind === "component") return `/?view=component&id=${item.id}`;
  return `/?view=domain&id=${item.id}`;
}

export function WatchlistPage({ language, copy, shared, onState }: { language: Language; copy: Copy; shared?: WatchItem[]; onState: (next: Partial<UrlState>) => void }) {
  const [local, setLocal] = useState<WatchItem[]>([]);
  const [updates, setUpdates] = useState<UnifiedUpdate[]>([]);

  useEffect(() => { setLocal(getWatchlist()); }, []);
  useEffect(() => {
    const items = shared && shared.length ? shared : local;
    if (items.length === 0) { setUpdates([]); return; }
    fetchUpdates()
      .then((all) => {
        const merged = all.filter((u) => items.some((i) => i.kind === u.entityType && i.id === u.entityId));
        const ids = new Set(items.map((i) => `${i.kind}:${i.id}`));
        setUpdates(merged.length ? merged : all.filter((u) => ids.has(`${u.entityType}:${u.entityId}`)));
      })
      .catch(() => setUpdates([]));
  }, [local, shared]);

  const items = shared && shared.length ? shared : local;

  function share() {
    const url = `${window.location.origin}/?view=watchlist&w=${encodeWatchlist(local)}`;
    navigator.clipboard?.writeText(url).catch(() => {});
    onState({ view: "watchlist", shared: encodeWatchlist(local) });
  }

  function remove(item: WatchItem) {
    const next = getWatchlist().filter((i) => !(i.kind === item.kind && i.id === item.id));
    setLocal(next);
  }

  return (
    <main className="page-width watchlist-page">
      <section className="intro">
        <h1>{copy.watchlist}</h1>
        {!shared && <button className="secondary" onClick={share}>{copy.shareList}</button>}
      </section>

      {items.length === 0 ? (
        <p>{copy.watchlistEmpty}</p>
      ) : (
        <>
          <div className="card-grid">
            {items.map((item) => (
              <div key={`${item.kind}-${item.id}`} className="entity-card watch-card">
                <div><h3>{label(item, language)}</h3><span className="muted">{item.kind}</span></div>
                <div className="watch-actions">
                  <a className="chip" href={hrefFor(item)}>{copy.openTool}</a>
                  {!shared && <button className="link-name" onClick={() => remove(item)}>{copy.remove}</button>}
                </div>
              </div>
            ))}
          </div>

          <section className="section-heading"><div><h2>{copy.alertsForSaved}</h2></div></section>
          <div className="update-list">
            {updates.length ? updates.map((u) => (
              <div key={u.id} className="update-row">
                <time dateTime={u.publishedAt}>{u.publishedAt.slice(0, 10)}</time>
                <strong>{label({ kind: u.entityType, id: u.entityId }, language)}</strong>
                <span>{u.title}</span>
                <a href={u.url} target="_blank" rel="noreferrer">{copy.sources}</a>
              </div>
            )) : <p>{copy.noUpdates}</p>}
          </div>
        </>
      )}
    </main>
  );
}
