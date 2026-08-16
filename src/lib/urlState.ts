import { presets } from "../data/presets";
import { toolMap } from "../data/tools";
import { domainMap } from "../data/domains";
import { BUDGET_OPTIONS, PRIVACY_OPTIONS, WIZARD_STEP_COUNT, focusOptionsForDomain, type WizardBudget, type WizardPrivacy } from "../data/wizard";
import type { CapabilityId } from "../types";

export type ViewKind = "domain" | "tool" | "component" | "editor" | "guide" | "guides" | "fit" | "matrix" | "watchlist" | "deals" | "wizard";

export type UrlState = {
  left: string;
  right: string;
  mode: string;
  view?: ViewKind;
  viewId?: string;
  fitTool?: string;
  fitDomain?: string;
  shared?: string;
  // Wizard (Stage 1) state — shareable and reproducible from the URL.
  wizardStep?: number;
  wizardDomain?: string;
  wizardBudget?: WizardBudget;
  wizardPrivacy?: WizardPrivacy;
  wizardFocus?: CapabilityId[];
};
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
  const view = viewParam === "domain" || viewParam === "tool" || viewParam === "component" || viewParam === "editor" || viewParam === "guide" || viewParam === "guides" || viewParam === "fit" || viewParam === "matrix" || viewParam === "watchlist" || viewParam === "deals" || viewParam === "wizard" ? viewParam : undefined;
  const viewId = params.get("id") ?? undefined;
  const fitTool = params.get("tool") ?? undefined;
  const fitDomain = params.get("domain") ?? undefined;
  const shared = params.get("w") ?? undefined;

  // --- Wizard state (validated; invalid values fail safe to undefined) ---
  const stepRaw = params.get("step");
  const stepNum = stepRaw !== null ? Number(stepRaw) : NaN;
  const wizardStep = Number.isInteger(stepNum) && stepNum >= 1 && stepNum <= WIZARD_STEP_COUNT ? stepNum : undefined;
  const domainParam = params.get("domain") ?? "";
  const wizardDomain = domainMap.has(domainParam) ? domainParam : undefined;
  const budgetParam = params.get("budget") ?? "";
  const wizardBudget = (BUDGET_OPTIONS as string[]).includes(budgetParam) ? (budgetParam as WizardBudget) : undefined;
  const privacyParam = params.get("privacy") ?? "";
  const wizardPrivacy = (PRIVACY_OPTIONS as string[]).includes(privacyParam) ? (privacyParam as WizardPrivacy) : undefined;
  const focusOptions = focusOptionsForDomain(wizardDomain);
  const focusRaw = (params.get("focus") ?? "").split(",").filter(Boolean);
  const wizardFocusList = focusRaw.filter((f, i) => focusOptions.includes(f as CapabilityId) && focusRaw.indexOf(f) === i) as CapabilityId[];
  const wizardFocus = wizardFocusList.length ? wizardFocusList : undefined;

  return { left, right, mode, view, viewId, fitTool, fitDomain, shared, wizardStep, wizardDomain, wizardBudget, wizardPrivacy, wizardFocus };
}

export function serializeUrl(state: UrlState): string {
  const params = new URLSearchParams({ compare: `${state.left},${state.right}`, mode: state.mode });
  if (state.view) params.set("view", state.view);
  if (state.viewId) params.set("id", state.viewId);
  if (state.fitTool) params.set("tool", state.fitTool);
  if (state.view === "wizard") {
    if (state.wizardStep) params.set("step", String(state.wizardStep));
    if (state.wizardDomain) params.set("domain", state.wizardDomain);
    if (state.wizardBudget) params.set("budget", state.wizardBudget);
    if (state.wizardPrivacy) params.set("privacy", state.wizardPrivacy);
    if (state.wizardFocus && state.wizardFocus.length) params.set("focus", state.wizardFocus.join(","));
  } else if (state.fitDomain) {
    params.set("domain", state.fitDomain);
  }
  if (state.shared) params.set("w", state.shared);
  return `?${params.toString()}`;
}
