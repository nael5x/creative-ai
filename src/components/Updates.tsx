import { useEffect, useState } from "react";
import type { Copy } from "../i18n";

type Update = { id: string; title: string; url: string; publishedAt: string; source: string; kind: string; editorialStatus?: string; sourceTier?: string };
type Feed = { updatedAt: string; items: Update[]; sources: string[] };

export function Updates({ copy }: { copy: Copy }) {
  const [feed, setFeed] = useState<Feed | null>(null);
  useEffect(() => { fetch("/data/updates.json").then((response) => response.json() as Promise<Feed>).then(setFeed).catch(() => setFeed({ updatedAt: "", items: [], sources: [] })); }, []);
  const items = feed?.items.slice(0, 6) ?? [];
  return <section id="updates" className="updates page-width"><div className="section-heading"><div><h2>{copy.recent}</h2><p>{feed ? `${feed.sources.length} monitored sources · ${feed.updatedAt.slice(0, 10)}` : "…"}</p></div></div><div className="update-list">{items.length ? items.map((item) => <a key={item.id} href={item.url} target="_blank" rel="noreferrer"><time dateTime={item.publishedAt}>{item.publishedAt.slice(0, 10)}</time><strong>{item.source}</strong><span>{item.title}</span><small>{item.editorialStatus === "published" ? "Published" : copy.discovery}</small></a>) : <p>{copy.noUpdates}</p>}</div></section>;
}
