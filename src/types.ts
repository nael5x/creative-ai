export type Language = "en" | "ar";
export type Localized = { en: string; ar: string };
export type EditorialStatus = "draft" | "needs-review" | "published" | "expired" | "rejected";

export type ComparisonCriterion =
  | "quality" | "easeOfUse" | "freeValue" | "paidValue" | "speed" | "contextFiles"
  | "integrations" | "privacy" | "collaboration" | "developerFit" | "sourceTransparency"
  | "platformAvailability";

export type Evidence = {
  url: string;
  title: string;
  sourceType: "official" | "official-github" | "documented-test" | "trusted-discovery";
  verifiedAt: string;
  claims: string[];
};

export type CapabilityState = "supported" | "not-supported";

// Explicit, product-agnostic capability taxonomy. This is deliberately separate
// from ComparisonCriterion (the scoring facts). A capability is a factual,
// observable property of a tool; it carries polarity (supported / not-supported)
// but no numeric suitability score.
export type CapabilityId =
  | "webAccess" | "thirdPartyIntegrations" | "fileContext"
  | "freeTier" | "paidPlan" | "localExecution" | "selfHosting"
  | "openSource" | "sourceCitations" | "ideIntegration" | "apiAvailability";

export type CapabilityAssessment = {
  state: CapabilityState; // "supported" | "not-supported"
  evidence?: Evidence;
  rationale: Localized;
  verifiedAt: string;
};

export type CriterionAssessment = {
  score: number | null;
  status: "verified" | "not-verified" | "not-applicable";
  // Meaningful only when status === "verified". A verified claim may confirm the
  // capability exists ("supported") OR confirm it is absent ("not-supported").
  // It must never be inferred from status alone.
  capability?: CapabilityState;
  rationale: Localized;
  evidence: Evidence[];
};

export type Tool = {
  id: string;
  slug: string;
  name: Localized;
  category: Localized;
  description: Localized;
  bestFor: Localized[];
  limitations: Localized[];
  pricing: Localized;
  platforms: Localized[];
  officialUrl: string;
  searchTerms: string[];
  lastVerifiedAt: string;
};

export type ToolComparisonProfile = {
  toolId: string;
  assessments: Partial<Record<ComparisonCriterion, CriterionAssessment>>;
  lastVerifiedAt: string;
  changelog: { date: string; summary: Localized }[];
};

// A work domain / use case the product is organized around (the IA hero).
// Domains are data-driven (not a closed union) so the catalog can grow.
export type Domain = {
  id: string;
  name: Localized;
  description: Localized;
  // Default use-case preset used when comparing inside this domain.
  relatedPreset: string;
  // Curated tool ids that fit this domain (subset of the tool catalog).
  toolIds: string[];
  // Short orientation / starting-point text (roadmap seed; editor-expandable).
  orientation: Localized;
};

// Components extend the catalog beyond tools: skills, plugins and connectors.
export type ComponentType = "skill" | "plugin" | "connector";

// Evidence tier for components (tools stay fully verified). See blueprint §21.
// - verified: editor-reviewed (may carry the "trusted" badge)
// - listed: has an official source link only (auto-eligible, no editorial verdict)
// - community: user-submitted, editor-approved
export type ComponentStatus = "verified" | "listed" | "community";

export type Component = {
  id: string;
  type: ComponentType;
  name: Localized;
  description: Localized;
  domainIds: string[];
  // Tools this component works with. >1 => shared across tools; 1 => private to that tool.
  toolIds: string[];
  officialUrl: string;
  status: ComponentStatus;
  evidence?: Evidence; // required when status === "verified"
  install: Localized; // how to install / connect
  whenToUse: Localized; // when this component is appropriate
  lastVerifiedAt: string;
};

export type UseCasePreset = {
  id: string;
  label: Localized;
  explanation: Localized;
  weights: Partial<Record<ComparisonCriterion, number>>;
};

export type ScoreSummary = {
  score: number | null;
  confidence: "high" | "medium" | "low" | "insufficient";
  coverage: { verified: number; applicable: number };
};

export type ComparisonResult = {
  left: ScoreSummary;
  right: ScoreSummary;
  outcome: "left" | "right" | "tie" | "insufficient";
  crossCategory: boolean;
};
