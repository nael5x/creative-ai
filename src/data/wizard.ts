import type { CapabilityId } from "../types";
import { domainMap } from "./domains";
import { WORKFLOW_REQUIREMENTS } from "../lib/fit";

// Stage 1 Wizard option domains. These are the ONLY axes the current verified
// evidence model can evaluate safely (see problem constraints). No pricing, no
// team-size, no compliance — only capabilities we can prove from evidence.
export type WizardBudget = "free" | "paid" | "any";
export type WizardPrivacy = "cloud" | "prefer-local" | "strict-local";

export const BUDGET_OPTIONS: WizardBudget[] = ["free", "paid", "any"];
export const PRIVACY_OPTIONS: WizardPrivacy[] = ["cloud", "prefer-local", "strict-local"];

// Ordered step ids. URL step numbers are 1-based index into this array.
export const WIZARD_STEPS = ["domain", "budget", "privacy", "focus", "results"] as const;
export type WizardStepId = (typeof WIZARD_STEPS)[number];
export const WIZARD_STEP_COUNT = WIZARD_STEPS.length;

// Capabilities already owned by the Budget and Privacy steps. They are excluded
// from the Focus step so Focus exposes only distinct, separately-evaluable
// workflow priorities (no double-counting a single capability across steps).
const BUDGET_CAPS: CapabilityId[] = ["freeTier", "paidPlan"];
const PRIVACY_CAPS: CapabilityId[] = ["localExecution", "selfHosting", "openSource"];

// Verified capabilities that satisfy a local/self-hosted privacy requirement.
export const QUALIFYING_LOCAL_CAPS: CapabilityId[] = ["localExecution", "selfHosting"];

export type WizardSelection = {
  domain: string;
  budget: WizardBudget;
  privacy: WizardPrivacy;
  focus: CapabilityId[];
};

// Focus options for a domain are derived from the domain's existing workflow
// requirements (required first, then preferred), minus the budget/privacy caps.
// Deterministic order, de-duplicated. Returns [] for an unknown domain.
export function focusOptionsForDomain(domainId: string | undefined): CapabilityId[] {
  if (!domainId) return [];
  const domain = domainMap.get(domainId);
  if (!domain) return [];
  const req = WORKFLOW_REQUIREMENTS[domain.relatedPreset] ?? WORKFLOW_REQUIREMENTS.general;
  const excluded = new Set<CapabilityId>([...BUDGET_CAPS, ...PRIVACY_CAPS]);
  const out: CapabilityId[] = [];
  for (const c of [...req.required, ...req.preferred]) {
    if (excluded.has(c)) continue;
    if (!out.includes(c)) out.push(c);
  }
  return out;
}
