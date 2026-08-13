import type { ComparisonCriterion, CriterionAssessment, ToolComparisonProfile, UseCasePreset } from "../types";

export type RequirementTier = "required" | "preferred";

export type WorkflowRequirements = {
  required: ComparisonCriterion[];
  preferred: ComparisonCriterion[];
};

// Each use case declares the factual capabilities that matter for that workflow.
// Only VERIFIED claims can satisfy a requirement, and a verified claim must state
// whether it SUPPORTS or REFUTES the capability (capability polarity). A criterion
// whose evidence is missing is UNKNOWN, never "not supported". No subjective
// criterion is ever used as a requirement. These are workflow requirements, not a
// numeric score.
export const WORKFLOW_REQUIREMENTS: Record<string, WorkflowRequirements> = {
  general: { required: ["platformAvailability", "integrations", "freeValue", "contextFiles"], preferred: ["paidValue"] },
  writing: { required: ["contextFiles", "integrations"], preferred: ["platformAvailability", "freeValue"] },
  research: { required: ["sourceTransparency", "contextFiles"], preferred: ["integrations", "freeValue", "platformAvailability"] },
  coding: { required: ["integrations", "contextFiles"], preferred: ["platformAvailability", "freeValue", "paidValue", "sourceTransparency"] },
  image: { required: ["platformAvailability", "integrations"], preferred: ["freeValue", "paidValue"] },
  video: { required: ["platformAvailability", "integrations"], preferred: ["freeValue", "paidValue"] },
  audio: { required: ["platformAvailability", "integrations"], preferred: ["freeValue", "paidValue"] },
  automation: { required: ["integrations"], preferred: ["contextFiles", "privacy", "freeValue"] },
  local: { required: ["privacy", "sourceTransparency"], preferred: ["contextFiles", "integrations", "freeValue", "platformAvailability"] },
  development: { required: ["privacy", "sourceTransparency"], preferred: ["integrations", "contextFiles", "platformAvailability"] },
};

const REQUIRED_POINTS = 2;
const PREFERRED_POINTS = 1;
// A comparison needs at least this many requirements applicable to BOTH tools
// before a documented-fit conclusion can be drawn.
const MIN_JOINT_REQUIREMENTS = 2;

// The four capability states a requirement can take for a tool.
export type FitState = "supported" | "not-supported" | "unknown" | "not-applicable";

// Policy: explicit polarity only. A verified claim with NO explicit capability
// polarity fails safe to "unknown" — it may remain verified evidence, but it can
// never satisfy a workflow requirement unless its polarity is stated.
function stateOf(item: CriterionAssessment | undefined): FitState {
  if (!item || item.status === "not-applicable") return "not-applicable";
  if (item.status === "not-verified") return "unknown";
  if (item.capability === "not-supported") return "not-supported";
  if (item.capability === "supported") return "supported";
  return "unknown";
}

export type ToolFit = {
  supported: ComparisonCriterion[]; // verified claim confirms the capability
  unknown: ComparisonCriterion[]; // not-verified OR verified-without-polarity: missing evidence, NOT a failure
  notSupported: ComparisonCriterion[]; // verified claim confirms absence
  notApplicable: ComparisonCriterion[];
  points: number; // weighted supported points over this tool's own applicable requirements
  relevant: number; // applicable requirements count (supported + unknown + notSupported)
};

export type AsymmetryEntry = {
  criterion: ComparisonCriterion;
  knownSide: "left" | "right";
  knownState: "supported" | "not-supported";
};

export type DocumentedFit = {
  requirements: WorkflowRequirements;
  jointApplicable: ComparisonCriterion[]; // requirements applicable to BOTH tools
  left: ToolFit;
  right: ToolFit;
  leftPoints: number; // supported points over the joint-applicable set (fair comparison)
  rightPoints: number;
  maxPoints: number;
  // Decisive advantages require a SUPPORTED-vs-NOT_SUPPORTED contrast on a
  // required criterion. SUPPORTED/UNKNOWN or NOT_SUPPORTED/UNKNOWN is evidence
  // asymmetry, never a win.
  decisiveCriteriaLeft: ComparisonCriterion[];
  decisiveCriteriaRight: ComparisonCriterion[];
  // Evidence-asymmetry criteria (one side known, the other unknown) — the
  // comparison is inconclusive, not a tie.
  asymmetry: AsymmetryEntry[];
  outcome: "left" | "right" | "similar" | "inconclusive" | "insufficient";
};

function weightOf(requirements: WorkflowRequirements, criterion: ComparisonCriterion): number {
  if (requirements.required.includes(criterion)) return REQUIRED_POINTS;
  if (requirements.preferred.includes(criterion)) return PREFERRED_POINTS;
  return 0;
}

function toolFit(profile: ToolComparisonProfile | undefined, criteria: ComparisonCriterion[], requirements: WorkflowRequirements): ToolFit {
  const supported: ComparisonCriterion[] = [];
  const unknown: ComparisonCriterion[] = [];
  const notSupported: ComparisonCriterion[] = [];
  const notApplicable: ComparisonCriterion[] = [];
  let points = 0;
  let relevant = 0;
  const assessments = profile?.assessments;
  for (const criterion of criteria) {
    const st = stateOf(assessments?.[criterion]);
    if (st === "not-applicable") {
      notApplicable.push(criterion);
      continue;
    }
    relevant += 1;
    if (st === "supported") {
      supported.push(criterion);
      points += weightOf(requirements, criterion);
    } else if (st === "not-supported") {
      notSupported.push(criterion); // confirmed absent: not a match, and not a failure
    } else {
      unknown.push(criterion); // missing evidence / unannotated: unknown, never a failure
    }
  }
  return { supported, unknown, notSupported, notApplicable, points, relevant };
}

function pointsOver(profile: ToolComparisonProfile | undefined, criteria: ComparisonCriterion[], requirements: WorkflowRequirements): number {
  const assessments = profile?.assessments;
  let points = 0;
  for (const criterion of criteria) {
    if (stateOf(assessments?.[criterion]) === "supported") points += weightOf(requirements, criterion);
  }
  return points;
}

function isAsymmetric(a: FitState, b: FitState): boolean {
  const known = (s: FitState) => s === "supported" || s === "not-supported";
  return (a === "unknown" && known(b)) || (b === "unknown" && known(a));
}

export function documentedFit(
  leftProfile: ToolComparisonProfile | undefined,
  rightProfile: ToolComparisonProfile | undefined,
  preset: UseCasePreset,
): DocumentedFit {
  const requirements = WORKFLOW_REQUIREMENTS[preset.id] ?? { required: [], preferred: [] };
  const all = [...requirements.required, ...requirements.preferred];

  const left = toolFit(leftProfile, all, requirements);
  const right = toolFit(rightProfile, all, requirements);

  const leftNA = new Set(left.notApplicable);
  const rightNA = new Set(right.notApplicable);
  const jointApplicable = all.filter((c) => !leftNA.has(c) && !rightNA.has(c));
  const maxPoints = jointApplicable.reduce((sum, c) => sum + weightOf(requirements, c), 0);

  const leftPoints = pointsOver(leftProfile, jointApplicable, requirements);
  const rightPoints = pointsOver(rightProfile, jointApplicable, requirements);

  const jointRequired = jointApplicable.filter((c) => requirements.required.includes(c));

  const leftState = (c: ComparisonCriterion) => stateOf(leftProfile?.assessments[c]);
  const rightState = (c: ComparisonCriterion) => stateOf(rightProfile?.assessments[c]);

  // Decisive: one tool SUPPORTS a required capability the other is confirmed to
  // NOT support. This is genuine evidence of divergent fit, not a research gap.
  const decisiveCriteriaLeft = jointRequired.filter((c) => leftState(c) === "supported" && rightState(c) === "not-supported");
  const decisiveCriteriaRight = jointRequired.filter((c) => rightState(c) === "supported" && leftState(c) === "not-supported");

  // Evidence asymmetry: a required criterion where one side is known (supported or
  // not-supported) and the other is UNKNOWN. The comparison is inconclusive.
  const asymmetry: AsymmetryEntry[] = [];
  for (const c of jointRequired) {
    const l = leftState(c);
    const r = rightState(c);
    if (isAsymmetric(l, r)) {
      if (l === "unknown") asymmetry.push({ criterion: c, knownSide: "right", knownState: r === "supported" ? "supported" : "not-supported" });
      else asymmetry.push({ criterion: c, knownSide: "left", knownState: l === "supported" ? "supported" : "not-supported" });
    }
  }

  let outcome: DocumentedFit["outcome"];
  if (jointApplicable.length < MIN_JOINT_REQUIREMENTS || maxPoints === 0) {
    outcome = "insufficient";
  } else if (decisiveCriteriaLeft.length > 0) {
    outcome = "left";
  } else if (decisiveCriteriaRight.length > 0) {
    outcome = "right";
  } else if (asymmetry.length > 0) {
    outcome = "inconclusive";
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
    decisiveCriteriaLeft,
    decisiveCriteriaRight,
    asymmetry,
    outcome,
  };
}
