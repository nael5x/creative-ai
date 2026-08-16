import type { CapabilityAssessment, CapabilityId } from "../types";
import { capabilities } from "../data/capabilities";
import { domainMap } from "../data/domains";
import { presets } from "../data/presets";
import { documentedFit, type DocumentedFit, type FitState } from "./fit";
import {
  focusOptionsForDomain,
  QUALIFYING_LOCAL_CAPS,
  type WizardSelection,
} from "../data/wizard";

// Internal ranking weights. These are USER-PREFERENCE points used only to order
// candidates for the user's selected priorities. They are NEVER surfaced as a
// Creative AI editorial/suitability score (see Editorial-vs-user-preference rule).
const FOCUS_POINTS = 2;
const PRIVACY_PREFERENCE_POINTS = 2;
// Two candidates whose scores differ by less than this are considered a close
// race (candidate for a tradeoff). Scores move in steps of FOCUS_POINTS.
const CLOSE_GAP = FOCUS_POINTS;

function capState(
  caps: Partial<Record<CapabilityId, CapabilityAssessment>> | undefined,
  id: CapabilityId,
): FitState {
  const item = caps?.[id];
  if (!item) return "unknown"; // missing evidence is UNKNOWN, never "not supported"
  return item.state === "not-supported" ? "not-supported" : "supported";
}

export type WizardCandidate = {
  toolId: string;
  score: number; // internal user-preference points — NOT an editorial score
  matchedFocus: CapabilityId[]; // verified-supported focus capabilities
  unknownFocus: CapabilityId[]; // focus capabilities with no evidence (unknown)
  localSupport: CapabilityId[]; // verified qualifying local/self-host capabilities
  freeTier: FitState;
  paidPlan: FitState;
};

export type WizardResultState = "recommendation" | "tradeoff" | "insufficient";
export type WizardResultReason = "ok" | "no-eligible" | "no-evidence";

export type WizardResult = {
  state: WizardResultState;
  reason: WizardResultReason;
  candidates: WizardCandidate[]; // eligible candidates, deterministically ranked
  best?: WizardCandidate;
  alternative?: WizardCandidate;
  fit?: DocumentedFit; // Phase B: existing documented-fit between best & alternative
  focus: CapabilityId[]; // effective focus capabilities used for ranking
};

// Hard constraints. A hard constraint is satisfied ONLY by verified evidence;
// unknown never qualifies (and is never converted into "not supported").
export function passesHardConstraints(toolId: string, selection: WizardSelection): boolean {
  const caps = capabilities[toolId];
  if (selection.budget === "free" && capState(caps, "freeTier") !== "supported") return false;
  if (selection.privacy === "strict-local") {
    const localOk = QUALIFYING_LOCAL_CAPS.some((c) => capState(caps, c) === "supported");
    if (!localOk) return false;
  }
  return true;
}

function evaluateCandidate(
  toolId: string,
  selection: WizardSelection,
  focus: CapabilityId[],
): WizardCandidate {
  const caps = capabilities[toolId];
  const matchedFocus: CapabilityId[] = [];
  const unknownFocus: CapabilityId[] = [];
  for (const f of focus) {
    const st = capState(caps, f);
    if (st === "supported") matchedFocus.push(f);
    else if (st === "unknown") unknownFocus.push(f);
    // "not-supported": counts as neither a match nor unknown (no penalty applied).
  }
  const localSupport = QUALIFYING_LOCAL_CAPS.filter((c) => capState(caps, c) === "supported");
  let score = matchedFocus.length * FOCUS_POINTS;
  if (selection.privacy === "prefer-local" && localSupport.length > 0) {
    score += PRIVACY_PREFERENCE_POINTS; // preference bonus, never an exclusion
  }
  return {
    toolId,
    score,
    matchedFocus,
    unknownFocus,
    localSupport,
    freeTier: capState(caps, "freeTier"),
    paidPlan: capState(caps, "paidPlan"),
  };
}

// The effective focus set: the user's valid selections, or (if none selected)
// all focus options for the domain so a result can still be evaluated.
export function effectiveFocus(selection: WizardSelection): CapabilityId[] {
  const options = focusOptionsForDomain(selection.domain);
  const selected = selection.focus.filter((f) => options.includes(f));
  return selected.length ? selected : options;
}

// Phase A — deterministic candidate ranking over an explicit tool-id list.
// Output is INDEPENDENT of the input array order: candidates are sorted by score
// (desc) with tool id (asc) as a stable, source-order-independent tiebreak.
export function rankCandidates(toolIds: string[], selection: WizardSelection): WizardCandidate[] {
  const focus = effectiveFocus(selection);
  const candidates = toolIds
    .filter((id) => passesHardConstraints(id, selection))
    .map((id) => evaluateCandidate(id, selection, focus));
  return candidates.sort(
    (a, b) => b.score - a.score || (a.toolId < b.toolId ? -1 : a.toolId > b.toolId ? 1 : 0),
  );
}

// Classify the ranked candidates into one of the three legitimate result states.
export function decideResult(
  candidates: WizardCandidate[],
  fit?: DocumentedFit,
): { state: WizardResultState; reason: WizardResultReason } {
  if (candidates.length === 0) return { state: "insufficient", reason: "no-eligible" };
  const best = candidates[0];
  const alternative = candidates[1];

  // No verified evidence supports any of the user's priorities: we cannot back a
  // recommendation. State insufficient and let the UI show what IS available.
  if (best.score === 0) return { state: "insufficient", reason: "no-evidence" };

  if (alternative && alternative.score > 0) {
    const close = Math.abs(best.score - alternative.score) < CLOSE_GAP;
    const bestOnly = best.matchedFocus.filter((c) => !alternative.matchedFocus.includes(c));
    const altOnly = alternative.matchedFocus.filter((c) => !best.matchedFocus.includes(c));
    const distinctAdvantages = bestOnly.length > 0 && altOnly.length > 0;
    if (close && (distinctAdvantages || fit?.outcome === "tradeoff")) {
      return { state: "tradeoff", reason: "ok" };
    }
  }
  return { state: "recommendation", reason: "ok" };
}

// Phase A + Phase B for a full wizard selection over a domain's own tool set.
export function evaluateWizard(selection: WizardSelection): WizardResult {
  const focus = effectiveFocus(selection);
  const domain = domainMap.get(selection.domain);
  if (!domain) return { state: "insufficient", reason: "no-eligible", candidates: [], focus };

  const candidates = rankCandidates(domain.toolIds, selection);
  const best = candidates[0];
  const alternative = candidates[1];

  // Phase B: reuse the existing documented-fit methodology to explain the final
  // head-to-head, using the domain's own preset (unchanged editorial logic).
  const preset = presets.find((p) => p.id === domain.relatedPreset) ?? presets[0];
  const fit =
    best && alternative
      ? documentedFit(capabilities[best.toolId], capabilities[alternative.toolId], preset)
      : undefined;

  const { state, reason } = decideResult(candidates, fit);
  return { state, reason, candidates, best, alternative, fit, focus };
}
