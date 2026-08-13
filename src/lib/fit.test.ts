import { describe, expect, it } from "vitest";
import { documentedFit, WORKFLOW_REQUIREMENTS } from "./fit";
import { profiles } from "../data/profiles";
import { presets } from "../data/presets";
import type { ComparisonCriterion, CriterionAssessment, ToolComparisonProfile } from "../types";

const preset = (id: string) => presets.find((p) => p.id === id)!;
const prof = (assessments: ToolComparisonProfile["assessments"]): ToolComparisonProfile => ({ toolId: "t", lastVerifiedAt: "2026-08-13", changelog: [], assessments });
const supported = (): CriterionAssessment => ({ score: 9, status: "verified", capability: "supported", rationale: { en: "", ar: "" }, evidence: [] });
const unsupported = (): CriterionAssessment => ({ score: null, status: "verified", capability: "not-supported", rationale: { en: "", ar: "" }, evidence: [] });
const unverified = (): CriterionAssessment => ({ score: null, status: "not-verified", rationale: { en: "", ar: "" }, evidence: [] });
const verifiedNoPolarity = (): CriterionAssessment => ({ score: null, status: "verified", rationale: { en: "", ar: "" }, evidence: [] });
const na = (): CriterionAssessment => ({ score: null, status: "not-applicable", rationale: { en: "", ar: "" }, evidence: [] });

// A complete profile defines every criterion (matching real data), defaulting
// unlisted criteria to unknown so they count as applicable/unknown rather than
// collapsing the joint-applicable set.
const ALL_CRITERIA: ComparisonCriterion[] = [
  "quality", "easeOfUse", "freeValue", "paidValue", "speed", "contextFiles",
  "integrations", "privacy", "collaboration", "developerFit", "sourceTransparency", "platformAvailability",
];
const fullProf = (overrides: Partial<Record<ComparisonCriterion, CriterionAssessment>>): ToolComparisonProfile =>
  prof(Object.fromEntries(ALL_CRITERIA.map((c) => [c, overrides[c] ?? unverified()])));

describe("fail-safe capability polarity", () => {
  it("verified + capability supported => supported", () => {
    const r = documentedFit(fullProf({ sourceTransparency: supported() }), fullProf({ sourceTransparency: supported() }), preset("research"));
    expect(r.left.supported).toContain("sourceTransparency");
    expect(r.left.unknown).not.toContain("sourceTransparency");
  });

  it("verified + capability not-supported => not-supported (never a match)", () => {
    const r = documentedFit(fullProf({ sourceTransparency: supported() }), fullProf({ sourceTransparency: unsupported() }), preset("research"));
    expect(r.left.supported).toContain("sourceTransparency");
    expect(r.right.notSupported).toContain("sourceTransparency");
    expect(r.right.supported).not.toContain("sourceTransparency");
  });

  it("verified + NO capability polarity => unknown (fails safe), never a match", () => {
    const a = fullProf({ sourceTransparency: verifiedNoPolarity(), contextFiles: supported() });
    const b = fullProf({ sourceTransparency: supported(), contextFiles: supported() });
    const r = documentedFit(a, b, preset("research"));
    expect(r.left.supported).not.toContain("sourceTransparency");
    expect(r.left.unknown).toContain("sourceTransparency");
    // Missing polarity can never create a documented-fit advantage for b.
    expect(r.outcome).toBe("inconclusive");
    expect(r.decisiveCriteriaLeft).toHaveLength(0);
    expect(r.decisiveCriteriaRight).toHaveLength(0);
  });

  it("missing polarity can never accidentally create a documented-fit match", () => {
    const r = documentedFit(fullProf({ sourceTransparency: verifiedNoPolarity() }), fullProf({ sourceTransparency: verifiedNoPolarity() }), preset("research"));
    expect(r.left.unknown).toContain("sourceTransparency");
    expect(r.left.supported).not.toContain("sourceTransparency");
  });
});

describe("capability state — supported vs unknown", () => {
  it("supported vs unknown resolves to INCONCLUSIVE, not a winner", () => {
    const result = documentedFit(
      fullProf({ sourceTransparency: supported(), contextFiles: supported() }),
      fullProf({ sourceTransparency: unverified(), contextFiles: supported() }),
      preset("research"),
    );
    expect(result.outcome).toBe("inconclusive");
    expect(result.decisiveCriteriaLeft).toHaveLength(0);
    expect(result.asymmetry.some((a) => a.criterion === "sourceTransparency" && a.knownSide === "left" && a.knownState === "supported")).toBe(true);
  });

  it("not-supported vs unknown resolves to INCONCLUSIVE (unknown is not a failure)", () => {
    const result = documentedFit(
      fullProf({ sourceTransparency: unsupported(), contextFiles: supported() }),
      fullProf({ sourceTransparency: unverified(), contextFiles: supported() }),
      preset("research"),
    );
    expect(result.outcome).toBe("inconclusive");
    expect(result.left.unknown).not.toContain("sourceTransparency");
    expect(result.left.notSupported).toContain("sourceTransparency");
    expect(result.right.unknown).toContain("sourceTransparency");
  });
});

describe("capability state — supported vs not-supported", () => {
  it("supported vs not-supported MAY produce a winner", () => {
    const result = documentedFit(
      fullProf({ sourceTransparency: supported(), contextFiles: supported() }),
      fullProf({ sourceTransparency: unsupported(), contextFiles: supported() }),
      preset("research"),
    );
    expect(result.outcome).toBe("left");
    expect(result.decisiveCriteriaLeft).toContain("sourceTransparency");
    expect(result.asymmetry).toHaveLength(0);
  });
});

describe("evidence coverage is separate from documented fit", () => {
  it("more known evidence does not imply a fit advantage when the gap is unknown", () => {
    const a = fullProf({ platformAvailability: supported(), integrations: supported(), freeValue: supported(), contextFiles: supported(), paidValue: supported() });
    const b = fullProf({ platformAvailability: supported(), integrations: supported(), freeValue: supported(), contextFiles: supported(), paidValue: unverified() });
    const result = documentedFit(a, b, preset("general"));
    expect(result.outcome).toBe("similar");
    const knownA = result.left.supported.length + result.left.notSupported.length;
    const knownB = result.right.supported.length + result.right.notSupported.length;
    expect(knownA).toBeGreaterThan(knownB); // coverage differs
  });
});

describe("not-applicable behavior", () => {
  it("excludes not-applicable criteria from the relevant requirement count", () => {
    const result = documentedFit(profiles.midjourney, profiles.chatgpt, preset("coding"));
    expect(result.left.notApplicable).toContain("contextFiles");
    expect(result.jointApplicable).not.toContain("contextFiles");
  });
});

describe("documented fit — decision outcomes", () => {
  it("declares a similar fit when both tools support the same requirements", () => {
    const a = fullProf({ integrations: supported(), contextFiles: supported(), platformAvailability: supported(), freeValue: supported(), paidValue: supported() });
    const b = fullProf({ integrations: supported(), contextFiles: supported(), platformAvailability: supported(), freeValue: supported(), paidValue: supported() });
    expect(documentedFit(a, b, preset("general")).outcome).toBe("similar");
  });

  it("never produces a universal-winner outcome — equal points stay similar", () => {
    const a = fullProf({ integrations: supported(), contextFiles: supported() });
    const b = fullProf({ integrations: supported(), contextFiles: supported() });
    const result = documentedFit(a, b, preset("coding"));
    expect(result.leftPoints).toBe(result.rightPoints);
    expect(result.outcome).toBe("similar");
  });

  it("withholds a conclusion when too few requirements apply to both tools", () => {
    const result = documentedFit(prof({}), prof({}), { id: "no-such-preset", label: { en: "", ar: "" }, explanation: { en: "", ar: "" }, weights: {} });
    expect(result.outcome).toBe("insufficient");
  });

  it("swap symmetry holds (decisive and similar both invert/survive on swap)", () => {
    const a = fullProf({ sourceTransparency: unsupported(), contextFiles: supported() });
    const b = fullProf({ sourceTransparency: supported(), contextFiles: supported() });
    expect(documentedFit(a, b, preset("research")).outcome).toBe("right");
    expect(documentedFit(b, a, preset("research")).outcome).toBe("left");
    const s1 = documentedFit(fullProf({ sourceTransparency: supported(), contextFiles: supported() }), fullProf({ sourceTransparency: supported(), contextFiles: supported() }), preset("research"));
    const s2 = documentedFit(fullProf({ sourceTransparency: supported(), contextFiles: supported() }), fullProf({ sourceTransparency: supported(), contextFiles: supported() }), preset("research"));
    expect(s1.outcome).toBe("similar");
    expect(s2.outcome).toBe("similar");
  });
});

describe("documented fit — independence from numeric suitability", () => {
  it("ignores score values and depends only on verification status/polarity", () => {
    const high = fullProf({ sourceTransparency: { score: 10, status: "verified", capability: "supported", rationale: { en: "", ar: "" }, evidence: [] }, contextFiles: supported() });
    const low = fullProf({ sourceTransparency: { score: 1, status: "verified", capability: "supported", rationale: { en: "", ar: "" }, evidence: [] }, contextFiles: supported() });
    const result = documentedFit(high, low, preset("research"));
    expect(result.outcome).toBe("similar");
    expect(result.leftPoints).toBe(result.rightPoints);
  });

  it("every requirement is a factual (non-subjective) criterion", () => {
    const SUBJECTIVE = new Set<ComparisonCriterion>(["quality", "easeOfUse", "speed", "collaboration", "developerFit"]);
    for (const req of Object.values(WORKFLOW_REQUIREMENTS)) {
      for (const c of [...req.required, ...req.preferred]) {
        expect(SUBJECTIVE.has(c)).toBe(false);
      }
    }
  });
});

describe("documented fit — six priority comparisons", () => {
  const cases: Array<[string, string, string, "similar" | "inconclusive"]> = [
    ["chatgpt", "claude", "coding", "similar"],
    ["chatgpt", "gemini", "general", "similar"],
    ["perplexity", "chatgpt", "research", "inconclusive"],
    ["cursor", "github-copilot", "coding", "similar"],
    ["ollama", "hugging-face", "local", "similar"],
    ["ollama", "hugging-face", "development", "similar"],
  ];
  for (const [left, right, mode, expected] of cases) {
    it(`${left} vs ${right} (${mode}) -> ${expected}`, () => {
      const result = documentedFit(profiles[left], profiles[right], preset(mode));
      expect(result.outcome).toBe(expected);
    });
  }

  it("Perplexity vs ChatGPT (Research) is INCONCLUSIVE — evidence asymmetric, not a Perplexity win", () => {
    const result = documentedFit(profiles.perplexity, profiles.chatgpt, preset("research"));
    expect(result.outcome).toBe("inconclusive");
    expect(result.decisiveCriteriaLeft).toHaveLength(0);
    expect(result.decisiveCriteriaRight).toHaveLength(0);
    // Evidence asymmetry: Perplexity documents source transparency; ChatGPT is unknown.
    expect(result.asymmetry.some((a) => a.criterion === "sourceTransparency" && a.knownSide === "left" && a.knownState === "supported")).toBe(true);
    expect(result.left.supported).toContain("sourceTransparency");
    expect(result.right.unknown).toContain("sourceTransparency");
  });
});
