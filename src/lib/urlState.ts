import { presets } from "../data/presets";
import { toolMap } from "../data/tools";

export type UrlState = { left: string; right: string; mode: string };
const fallback: UrlState = { left: "chatgpt", right: "claude", mode: "general" };

export function parseUrl(search: string): UrlState {
  const params = new URLSearchParams(search);
  const ids = (params.get("compare") ?? "").split(",");
  const left = toolMap.has(ids[0]) ? ids[0] : fallback.left;
  let right = toolMap.has(ids[1]) ? ids[1] : fallback.right;
  if (right === left) right = left === fallback.right ? fallback.left : fallback.right;
  const requestedMode = params.get("mode") ?? fallback.mode;
  const mode = presets.some((preset) => preset.id === requestedMode) ? requestedMode : fallback.mode;
  return { left, right, mode };
}

export function serializeUrl(state: UrlState): string {
  const params = new URLSearchParams({ compare: `${state.left},${state.right}`, mode: state.mode });
  return `?${params.toString()}`;
}
