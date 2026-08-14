import { presets } from "../data/presets";
import { toolMap } from "../data/tools";

export type ViewKind = "domain" | "tool" | "component" | "editor" | "guide" | "guides" | "fit" | "matrix" | "watchlist" | "deals";

export type UrlState = { left: string; right: string; mode: string; view?: ViewKind; viewId?: string; fitTool?: string; fitDomain?: string; shared?: string };
const fallback: UrlState = { left: "chatgpt", right: "claude", mode: "general" };

export function parseUrl(search: string): UrlState {
  const params = new URLSearchParams(search);
  const ids = (params.get("compare") ?? "").split(",");
  const left = toolMap.has(ids[0]) ? ids[0] : fallback.left;
  let right = toolMap.has(ids[1]) ? ids[1] : fallback.right;
  if (right === left) right = left === fallback.right ? fallback.left : fallback.right;
  const requestedMode = params.get("mode") ?? fallback.mode;
  const mode = presets.some((preset) => preset.id === requestedMode) ? requestedMode : fallback.mode;
  const viewParam = (params.get("view") ?? "") as ViewKind;
  const view = viewParam === "domain" || viewParam === "tool" || viewParam === "component" || viewParam === "editor" || viewParam === "guide" || viewParam === "guides" || viewParam === "fit" || viewParam === "matrix" || viewParam === "watchlist" || viewParam === "deals" ? viewParam : undefined;
  const viewId = params.get("id") ?? undefined;
  const fitTool = params.get("tool") ?? undefined;
  const fitDomain = params.get("domain") ?? undefined;
  const shared = params.get("w") ?? undefined;
  return { left, right, mode, view, viewId, fitTool, fitDomain, shared };
}

export function serializeUrl(state: UrlState): string {
  const params = new URLSearchParams({ compare: `${state.left},${state.right}`, mode: state.mode });
  if (state.view) params.set("view", state.view);
  if (state.viewId) params.set("id", state.viewId);
  if (state.fitTool) params.set("tool", state.fitTool);
  if (state.fitDomain) params.set("domain", state.fitDomain);
  if (state.shared) params.set("w", state.shared);
  return `?${params.toString()}`;
}
