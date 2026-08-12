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
    const result = scoreTool(base({
      quality: item(8, "verified"),
      developerFit: item(8, "verified"),
      contextFiles: item(null, "not-applicable"),
      integrations: item(8, "verified"),
      speed: item(null, "not-verified"),
      privacy: item(null, "not-verified"),
    }), preset);
    expect(result.coverage.applicable).toBe(5);
  });
  it("withholds a score below minimum coverage", () => {
    const profile = base({
      quality: item(10, "verified"),
      developerFit: item(null, "not-verified"),
      contextFiles: item(null, "not-verified"),
    });
    const result = scoreTool(profile, { ...preset, weights: { quality: 20, developerFit: 20, contextFiles: 20 } });
    expect(result.score).toBeNull();
    expect(result.coverage).toEqual({ verified: 1, applicable: 3 });
  });

  it("excludes verified-but-unscoreable facts from the suitability denominator", () => {
    const profile = base({
      quality: item(8, "verified"),
      developerFit: { score: null, status: "verified", rationale: { en: "", ar: "" }, evidence: [] },
    });
    const result = scoreTool(profile, { ...preset, weights: { quality: 20, developerFit: 20 } });
    expect(result.coverage.applicable).toBe(1);
    expect(result.coverage.verified).toBe(1);
    expect(result.score).toBe(8);
  });

  it("withholds suitability when only unscoreable verified facts exist", () => {
    const profile = base({ quality: { score: null, status: "verified", rationale: { en: "", ar: "" }, evidence: [] } });
    const result = scoreTool(profile, { ...preset, weights: { quality: 20 } });
    expect(result.score).toBeNull();
    expect(result.coverage.verified).toBe(0);
    expect(result.confidence).toBe("insufficient");
  });
});
