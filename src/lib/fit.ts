import type { CapabilityAssessment, CapabilityId, UseCasePreset } from "../types";

export type RequirementTier = "required" | "preferred";

export type WorkflowRequirements = {
  required: CapabilityId[];
  preferred: CapabilityId[];
};

// Each use case declares the factual capabilities that matter for that workflow.
// Only DIRECT evidence can satisfy a requirement. A capability whose evidence is
// missing is UNKNOWN, never "not supported". No subjective criterion is ever used
// as a requirement. These are workflow requirements, not a numeric score.
export const WORKFLOW_REQUIREMENTS: Record<string, WorkflowRequirements> = {
  general: { required: ["webAccess", "fileContext", "freeTier"], preferred: ["paidPlan", "thirdPartyIntegrations"] },
  writing: { required: ["fileContext"], preferred: ["thirdPartyIntegrations", "webAccess", "freeTier"] },
  research: { required: ["sourceCitations", "fileContext"], preferred: ["thirdPartyIntegrations", "freeTier", "webAccess"] },
  coding: { required: ["ideIntegration", "fileContext"], preferred: ["webAccess", "freeTier", "paidPlan", "sourceCitations"] },
  image: { required: ["webAccess", "thirdPartyIntegrations"], preferred: ["freeTier", "paidPlan"] },
  video: { required: ["webAccess", "thirdPartyIntegrations"], preferred: ["freeTier", "paidPlan"] },
  audio: { required: ["webAccess", "thirdPartyIntegrations"], preferred: ["freeTier", "paidPlan"] },
  automation: { required: ["thirdPartyIntegrations"], preferred: ["fileContext", "localExecution", "selfHosting", "freeTier"] },
  local: { required: ["localExecution", "openSource"], preferred: ["fileContext", "thirdPartyIntegrations", "freeTier", "webAccess", "selfHosting"] },
  development: { required: ["openSource"], preferred: ["apiAvailability", "localExecution", "fileContext", "webAccess"] },
};

const REQUIRED_POINTS = 2;
const PREFERRED_POINTS = 1;
// A comparison needs at least this many requirements applicable to BOTH tools
// before a documented-fit conclusion can be drawn.
const MIN_JOINT_REQUIREMENTS = 2;

// The four capability states a requirement can take for a tool. A capability is
// absent from the map when no direct evidence was gathered — that is UNKNOWN,
// never a failure.
export type FitState = "supported" | "not-supported" | "unknown" | "not-applicable";

function capState(item: CapabilityAssessment | undefined): FitState {
  if (!item) return "unknown";
  if (item.state === "not-supported") return "not-supported";
  return "supported";
}

export type CapFit = {
  supported: CapabilityId[]; // direct evidence confirms the capability
  unknown: CapabilityId[]; // no direct evidence gathered: missing evidence, NOT a failure
  notSupported: CapabilityId[]; // direct evidence confirms absence
  points: number; // weighted supported points over this tool's own applicable requirements
  relevant: number; // applicable requirements count (supported + unknown + notSupported)
};

export type AsymmetryEntry = {
  capability: CapabilityId;
  knownSide: "left" | "right";
  knownState: "supported" | "not-supported";
};

export type DocumentedFit = {
  requirements: WorkflowRequirements;
  jointApplicable: CapabilityId[]; // requirements applicable to BOTH tools
  left: CapFit;
  right: CapFit;
  leftPoints: number; // supported points over the joint-applicable set (fair comparison)
  rightPoints: number;
  maxPoints: number;
  // Decisive advantages require a SUPPORTED-vs-NOT_SUPPORTED contrast on a
  // required capability. SUPPORTED/UNKNOWN or NOT_SUPPORTED/UNKNOWN is evidence
  // asymmetry, never a win.
  decisiveCapabilitiesLeft: CapabilityId[];
  decisiveCapabilitiesRight: CapabilityId[];
  // Evidence-asymmetry capabilities (one side known, the other unknown) — the
  // comparison is inconclusive, not a tie.
  asymmetry: AsymmetryEntry[];
  outcome: "left" | "right" | "similar" | "inconclusive" | "insufficient" | "tradeoff";
};

function weightOf(requirements: WorkflowRequirements, capability: CapabilityId): number {
  if (requirements.required.includes(capability)) return REQUIRED_POINTS;
  if (requirements.preferred.includes(capability)) return PREFERRED_POINTS;
  return 0;
}

function capFit(caps: Partial<Record<CapabilityId, CapabilityAssessment>> | undefined, all: CapabilityId[], requirements: WorkflowRequirements): CapFit {
  const supported: CapabilityId[] = [];
  const unknown: CapabilityId[] = [];
  const notSupported: CapabilityId[] = [];
  let points = 0;
  let relevant = 0;
  for (const capability of all) {
    const st = capState(caps?.[capability]);
    relevant += 1;
    if (st === "supported") {
      supported.push(capability);
      points += weightOf(requirements, capability);
    } else if (st === "not-supported") {
      notSupported.push(capability); // confirmed absent: not a match, and not a failure
    } else {
      unknown.push(capability); // missing evidence / unannotated: unknown, never a failure
    }
  }
  return { supported, unknown, notSupported, points, relevant };
}

function pointsOver(caps: Partial<Record<CapabilityId, CapabilityAssessment>> | undefined, all: CapabilityId[], requirements: WorkflowRequirements): number {
  let points = 0;
  for (const capability of all) {
    if (capState(caps?.[capability]) === "supported") points += weightOf(requirements, capability);
  }
  return points;
}

function isAsymmetric(a: FitState, b: FitState): boolean {
  const known = (s: FitState) => s === "supported" || s === "not-supported";
  return (a === "unknown" && known(b)) || (b === "unknown" && known(a));
}

export function documentedFit(
  leftCaps: Partial<Record<CapabilityId, CapabilityAssessment>> | undefined,
  rightCaps: Partial<Record<CapabilityId, CapabilityAssessment>> | undefined,
  preset: UseCasePreset,
): DocumentedFit {
  const requirements = WORKFLOW_REQUIREMENTS[preset.id] ?? { required: [], preferred: [] };
  const all = [...requirements.required, ...requirements.preferred];

  const left = capFit(leftCaps, all, requirements);
  const right = capFit(rightCaps, all, requirements);

  const jointApplicable = [...all];
  const maxPoints = jointApplicable.reduce((sum, c) => sum + weightOf(requirements, c), 0);

  const leftPoints = pointsOver(leftCaps, jointApplicable, requirements);
  const rightPoints = pointsOver(rightCaps, jointApplicable, requirements);

  const leftState = (c: CapabilityId) => capState(leftCaps?.[c]);
  const rightState = (c: CapabilityId) => capState(rightCaps?.[c]);

  // Decisive: one tool SUPPORTS a required capability the other is confirmed to
  // NOT support. This is genuine evidence of divergent fit, not a research gap.
  const decisiveCapabilitiesLeft = requirements.required.filter((c) => leftState(c) === "supported" && rightState(c) === "not-supported");
  const decisiveCapabilitiesRight = requirements.required.filter((c) => rightState(c) === "supported" && leftState(c) === "not-supported");

  // Evidence asymmetry: a required capability where one side is known (supported
  // or not-supported) and the other is UNKNOWN. The comparison is inconclusive.
  const asymmetry: AsymmetryEntry[] = [];
  for (const c of requirements.required) {
    const l = leftState(c);
    const r = rightState(c);
    if (isAsymmetric(l, r)) {
      if (l === "unknown") asymmetry.push({ capability: c, knownSide: "right", knownState: r === "supported" ? "supported" : "not-supported" });
      else asymmetry.push({ capability: c, knownSide: "left", knownState: l === "supported" ? "supported" : "not-supported" });
    }
  }

  const anyRequiredUnknown = requirements.required.some((c) => leftState(c) === "unknown" || rightState(c) === "unknown");

  let outcome: DocumentedFit["outcome"];
  if (jointApplicable.length < MIN_JOINT_REQUIREMENTS || maxPoints === 0) {
    outcome = "insufficient";
  } else if (decisiveCapabilitiesLeft.length > 0 && decisiveCapabilitiesRight.length > 0) {
    // Both tools have a decisive advantage on a different required capability:
    // no universal winner, no bias — this is a TRADEOFF.
    outcome = "tradeoff";
  } else if (decisiveCapabilitiesLeft.length > 0) {
    outcome = "left";
  } else if (decisiveCapabilitiesRight.length > 0) {
    outcome = "right";
  } else if (anyRequiredUnknown) {
    // Some required capability is missing evidence on at least one side.
    // If the gap is one-sided (known vs unknown) the comparison is inconclusive;
    // if BOTH sides lack evidence (unknown vs unknown) we cannot claim a similar
    // fit, so it is INSUFFICIENT. Unknown is never silently "similar".
    outcome = asymmetry.length > 0 ? "inconclusive" : "insufficient";
  } else {
    outcome = "similar";
  }

  return {
    requirements,
    jointApplicable,
    left,
    right,
    leftPoints,
    rightPoints,
    maxPoints,
    decisiveCapabilitiesLeft,
    decisiveCapabilitiesRight,
    asymmetry,
    outcome,
  };
}
