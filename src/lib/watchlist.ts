export type WatchKind = "tool" | "component" | "domain";
export type WatchItem = { kind: WatchKind; id: string };

const KEY = "creative-ai-watchlist-v1";

export function getWatchlist(): WatchItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as WatchItem[]) : [];
  } catch {
    return [];
  }
}

export function setWatchlist(items: WatchItem[]): void {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function isWatched(item: WatchItem): boolean {
  return getWatchlist().some((i) => i.kind === item.kind && i.id === item.id);
}

export function toggleWatch(item: WatchItem): WatchItem[] {
  const current = getWatchlist();
  const exists = current.some((i) => i.kind === item.kind && i.id === item.id);
  const next = exists ? current.filter((i) => !(i.kind === item.kind && i.id === item.id)) : [...current, item];
  setWatchlist(next);
  return next;
}

export function encodeWatchlist(items: WatchItem[]): string {
  return encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(items)))));
}

export function decodeWatchlist(param: string): WatchItem[] {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(param))))) as WatchItem[];
  } catch {
    return [];
  }
}
