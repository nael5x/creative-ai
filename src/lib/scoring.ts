import type { ComparisonCriterion, ComparisonResult, ScoreSummary, Tool, ToolComparisonProfile, UseCasePreset } from "../types";

export const MIN_COVERAGE = 0.5;

export function scoreTool(profile: ToolComparisonProfile | undefined, preset: UseCasePreset): ScoreSummary {
  let weighted = 0;
  let usedWeight = 0;
  let applicable = 0;
  let verified = 0;
  for (const [criterion, weight] of Object.entries(preset.weights) as [ComparisonCriterion, number][]) {
    const item = profile?.assessments[criterion];
    if (item?.status === "not-applicable") continue;
    applicable += 1;
    if (item?.status === "verified" && item.score !== null) {
      verified += 1;
      weighted += item.score * weight;
      usedWeight += weight;
    }
  }
  const ratio = applicable ? verified / applicable : 0;
  const score = ratio >= MIN_COVERAGE && usedWeight ? Math.round((weighted / usedWeight) * 10) / 10 : null;
  const confidence: ScoreSummary["confidence"] = ratio >= .85 ? "high" : ratio >= .65 ? "medium" : ratio >= MIN_COVERAGE ? "low" : "insufficient";
  return { score, confidence, coverage: { verified, applicable } };
}

export function compareTools(leftTool: Tool, rightTool: Tool, leftProfile: ToolComparisonProfile | undefined, rightProfile: ToolComparisonProfile | undefined, preset: UseCasePreset): ComparisonResult {
  const left = scoreTool(leftProfile, preset);
  const right = scoreTool(rightProfile, preset);
  let outcome: ComparisonResult["outcome"] = "insufficient";
  if (left.score !== null && right.score !== null) {
    outcome = Math.abs(left.score - right.score) < 0.3 ? "tie" : left.score > right.score ? "left" : "right";
  }
  return { left, right, outcome, crossCategory: leftTool.category.en !== rightTool.category.en };
}
