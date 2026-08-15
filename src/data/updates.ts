import { tools } from "./tools";
import { components } from "./components";
import { domains } from "./domains";

export interface UnifiedUpdate {
  id: string;
  entityType: "tool" | "component";
  entityId: string;
  entityName: string;
  title: string;
  url: string;
  publishedAt: string;
  source: string;
  status: "listed" | "verified";
  note?: string;
}

const sourceToToolId = new Map<string, string>();
for (const tool of tools) {
  sourceToToolId.set(tool.name.en.toLocaleLowerCase(), tool.id);
  sourceToToolId.set(tool.name.ar.toLocaleLowerCase(), tool.id);
}

const componentUpdates: UnifiedUpdate[] = components
  .filter((c) => c.status === "verified" && c.evidence)
  .map((c) => ({
    id: `component-${c.id}`,
    entityType: "component" as const,
    entityId: c.id,
    entityName: c.name.en,
    title: `Evidence verified: ${c.name.en}`,
    url: c.evidence!.url,
    publishedAt: c.evidence!.verifiedAt,
    source: new URL(c.evidence!.url).hostname,
    status: "verified" as const,
    note: c.evidence!.title,
  }));

export async function fetchUpdates(): Promise<UnifiedUpdate[]> {
  const toolFeed: UnifiedUpdate[] = [];
  try {
    const res = await fetch(import.meta.env.BASE_URL + "data/updates.json");
    const data = (await res.json()) as { items: { id: string; title: string; url: string; publishedAt: string; source: string }[] };
    for (const item of data.items.slice(0, 40)) {
      const entityId = sourceToToolId.get(item.source.toLocaleLowerCase()) ?? "";
      toolFeed.push({ id: item.id, entityType: "tool", entityId, entityName: item.source, title: item.title, url: item.url, publishedAt: item.publishedAt, source: item.source, status: entityId ? "verified" : "listed" });
    }
  } catch {
    // offline / missing feed — component seed updates still surface
  }
  const all = [...toolFeed, ...componentUpdates].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return all;
}

export function updatesFor(items: UnifiedUpdate[], entityType: "tool" | "component", entityId: string): UnifiedUpdate[] {
  return items.filter((u) => u.entityType === entityType && u.entityId === entityId);
}

export const domainCount = domains.length;
