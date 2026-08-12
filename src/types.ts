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

export type CriterionAssessment = {
  score: number | null;
  status: "verified" | "not-verified" | "not-applicable";
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
