import { describe, expect, it } from "vitest";
import { presets } from "../data/presets";
import type { ToolComparisonProfile } from "../types";
import { scoreTool } from "./scoring";

const preset = presets.find((item) => item.id === "coding")!;
const base = (assessments: ToolComparisonProfile["assessments"]): ToolComparisonProfile => ({ toolId: "test", lastVerifiedAt: "2026-08-12", changelog: [], assessments });
const item = (score: number | null, status: "verified" | "not-verified" | "not-applicable") => ({ score, status, rationale: { en: "", ar: "" }, evidence: [] });

describe("scoreTool", () => {
  it("does not turn missing evidence into zero", () => {
    const focusedPreset = { ...preset, weights: { quality: 30, developerFit: 25, contextFiles: 20 } };
    const result = scoreTool(base({ quality: item(8, "verified"), developerFit: item(10, "verified"), contextFiles: item(null, "not-verified") }), focusedPreset);
    expect(result.score).toBe(8.9);
    expect(result.coverage.verified).toBe(2);
  });
  it("excludes not-applicable criteria", () => {
    const result = scoreTool(base({ quality: item(8, "verified"), developerFit: item(8, "verified"), contextFiles: item(null, "not-applicable"), integrations: item(8, "verified") }), preset);
    expect(result.coverage.applicable).toBe(5);
  });
  it("withholds a score below minimum coverage", () => {
    expect(scoreTool(base({ quality: item(10, "verified") }), preset).score).toBeNull();
  });
});
