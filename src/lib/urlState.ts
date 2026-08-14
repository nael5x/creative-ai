import { presets } from "../data/presets";
import { toolMap } from "../data/tools";

export type ViewKind = "domain" | "tool" | "component" | "editor";

export type UrlState = { left: string; right: string; mode: string; view?: ViewKind; viewId?: string };
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
  const view = viewParam === "domain" || viewParam === "tool" || viewParam === "component" || viewParam === "editor" ? viewParam : undefined;
  const viewId = params.get("id") ?? undefined;
  return { left, right, mode, view, viewId };
}

export function serializeUrl(state: UrlState): string {
  const params = new URLSearchParams({ compare: `${state.left},${state.right}`, mode: state.mode });
  if (state.view) params.set("view", state.view);
  if (state.viewId) params.set("id", state.viewId);
  return `?${params.toString()}`;
}
