import { describe, expect, it } from "vitest";
import { documentedFit, WORKFLOW_REQUIREMENTS } from "./fit";
import { capabilities, capabilityLabels } from "../data/capabilities";
import { presets } from "../data/presets";
import type { CapabilityAssessment, CapabilityId } from "../types";

const preset = (id: string) => presets.find((p) => p.id === id)!;

// A capability assessment is either supported or not-supported. A capability that
// is absent from the map is treated as UNKNOWN by the engine (missing evidence).
const cap = (state: "supported" | "not-supported"): CapabilityAssessment => ({ state, rationale: { en: "", ar: "" }, verifiedAt: "2026-08-13" });
const capProf = (overrides: Partial<Record<CapabilityId, CapabilityAssessment>> = {}): Partial<Record<CapabilityId, CapabilityAssessment>> => overrides;

describe("capability state basics", () => {
  it("supported capability is reported as supported", () => {
    const r = documentedFit(capProf({ sourceCitations: cap("supported"), fileContext: cap("supported") }), capProf({ sourceCitations: cap("supported"), fileContext: cap("supported") }), preset("research"));
    expect(r.left.supported).toContain("sourceCitations");
    expect(r.left.unknown).not.toContain("sourceCitations");
  });

  it("not-supported capability is never a match", () => {
    const r = documentedFit(capProf({ sourceCitations: cap("supported") }), capProf({ sourceCitations: cap("not-supported") }), preset("research"));
    expect(r.left.supported).toContain("sourceCitations");
    expect(r.right.notSupported).toContain("sourceCitations");
    expect(r.right.supported).not.toContain("sourceCitations");
  });

  it("absent capability is UNKNOWN, never a match", () => {
    // Neither tool documents sourceCitations => both unknown.
    const r = documentedFit(capProf({ fileContext: cap("supported") }), capProf({ fileContext: cap("supported") }), preset("research"));
    expect(r.left.unknown).toContain("sourceCitations");
    expect(r.left.supported).not.toContain("sourceCitations");
    expect(r.right.unknown).toContain("sourceCitations");
  });
});

describe("Problem 2 — unknown vs unknown must NOT be 'similar'", () => {
  it("symmetric missing evidence on a required capability => INSUFFICIENT", () => {
    // coding requires ideIntegration + fileContext; neither is provided => unknown/unknown.
    const result = documentedFit(capProf({}), capProf({}), preset("coding"));
    expect(result.outcome).toBe("insufficient");
    expect(result.asymmetry).toHaveLength(0);
    expect(result.decisiveCapabilitiesLeft).toHaveLength(0);
    expect(result.decisiveCapabilitiesRight).toHaveLength(0);
  });

  it("supported vs unknown resolves to INCONCLUSIVE (asymmetry), not a winner", () => {
    const result = documentedFit(
      capProf({ sourceCitations: cap("supported"), fileContext: cap("supported") }),
      capProf({ fileContext: cap("supported") }),
      preset("research"),
    );
    expect(result.outcome).toBe("inconclusive");
    expect(result.decisiveCapabilitiesLeft).toHaveLength(0);
    expect(result.asymmetry.some((a) => a.capability === "sourceCitations" && a.knownSide === "left" && a.knownState === "supported")).toBe(true);
  });

  it("not-supported vs unknown resolves to INCONCLUSIVE (unknown is not a failure)", () => {
    const result = documentedFit(
      capProf({ sourceCitations: cap("not-supported"), fileContext: cap("supported") }),
      capProf({ fileContext: cap("supported") }),
      preset("research"),
    );
    expect(result.outcome).toBe("inconclusive");
    expect(result.left.unknown).not.toContain("sourceCitations");
    expect(result.left.notSupported).toContain("sourceCitations");
    expect(result.right.unknown).toContain("sourceCitations");
  });
});

describe("Problem 3 — conflicting decisive advantages => TRADEOFF", () => {
  it("each tool leads on a different required capability => tradeoff (no bias)", () => {
    // general requires webAccess, fileContext, freeTier.
    const a = capProf({ webAccess: cap("supported"), fileContext: cap("supported"), freeTier: cap("not-supported") });
    const b = capProf({ webAccess: cap("not-supported"), fileContext: cap("supported"), freeTier: cap("supported") });
    const result = documentedFit(a, b, preset("general"));
    expect(result.outcome).toBe("tradeoff");
    expect(result.decisiveCapabilitiesLeft).toContain("webAccess");
    expect(result.decisiveCapabilitiesRight).toContain("freeTier");
    expect(result.asymmetry).toHaveLength(0);
  });

  it("supported vs not-supported with a single decisive side => left/right", () => {
    const result = documentedFit(
      capProf({ sourceCitations: cap("supported"), fileContext: cap("supported") }),
      capProf({ sourceCitations: cap("not-supported"), fileContext: cap("supported") }),
      preset("research"),
    );
    expect(result.outcome).toBe("left");
    expect(result.decisiveCapabilitiesLeft).toContain("sourceCitations");
    expect(result.asymmetry).toHaveLength(0);
  });
});

describe("capability state — similar fit", () => {
  it("declares similar when both tools support the same known requirements (no unknown)", () => {
    const a = capProf({ webAccess: cap("supported"), fileContext: cap("supported"), freeTier: cap("supported"), paidPlan: cap("supported"), thirdPartyIntegrations: cap("supported") });
    const b = capProf({ webAccess: cap("supported"), fileContext: cap("supported"), freeTier: cap("supported"), paidPlan: cap("supported"), thirdPartyIntegrations: cap("supported") });
    expect(documentedFit(a, b, preset("general")).outcome).toBe("similar");
  });

  it("never produces a universal-winner outcome — equal points stay similar", () => {
    const a = capProf({ ideIntegration: cap("supported"), fileContext: cap("supported") });
    const b = capProf({ ideIntegration: cap("supported"), fileContext: cap("supported") });
    const result = documentedFit(a, b, preset("coding"));
    expect(result.leftPoints).toBe(result.rightPoints);
    expect(result.outcome).toBe("similar");
  });
});

describe("decision outcome guards", () => {
  it("withholds a conclusion when too few requirements apply to both tools", () => {
    const result = documentedFit(capProf({}), capProf({}), { id: "no-such-preset", label: { en: "", ar: "" }, explanation: { en: "", ar: "" }, weights: {} });
    expect(result.outcome).toBe("insufficient");
  });
});

describe("swap symmetry", () => {
  it("decisive inverts, tradeoff/similar/inconclusive survive on swap", () => {
    // decisive left -> wins as right after swap
    const a = capProf({ sourceCitations: cap("supported"), fileContext: cap("supported") });
    const b = capProf({ sourceCitations: cap("not-supported"), fileContext: cap("supported") });
    expect(documentedFit(a, b, preset("research")).outcome).toBe("left");
    expect(documentedFit(b, a, preset("research")).outcome).toBe("right");

    // tradeoff survives swap (still both decisive)
    const t1 = capProf({ webAccess: cap("supported"), fileContext: cap("supported"), freeTier: cap("not-supported") });
    const t2 = capProf({ webAccess: cap("not-supported"), fileContext: cap("supported"), freeTier: cap("supported") });
    expect(documentedFit(t1, t2, preset("general")).outcome).toBe("tradeoff");
    expect(documentedFit(t2, t1, preset("general")).outcome).toBe("tradeoff");

    // similar survives swap
    const s = capProf({ webAccess: cap("supported"), fileContext: cap("supported"), freeTier: cap("supported") });
    expect(documentedFit(s, s, preset("general")).outcome).toBe("similar");

    // inconclusive survives swap
    const i1 = capProf({ sourceCitations: cap("supported"), fileContext: cap("supported") });
    const i2 = capProf({ fileContext: cap("supported") });
    expect(documentedFit(i1, i2, preset("research")).outcome).toBe("inconclusive");
    expect(documentedFit(i2, i1, preset("research")).outcome).toBe("inconclusive");
  });
});

describe("documented fit — six priority comparisons", () => {
  const cases: Array<[string, string, string, "similar" | "inconclusive" | "insufficient"]> = [
    ["chatgpt", "claude", "coding", "insufficient"],
    ["chatgpt", "gemini", "general", "similar"],
    ["perplexity", "chatgpt", "research", "similar"],
    ["cursor", "github-copilot", "coding", "inconclusive"],
    ["ollama", "hugging-face", "local", "similar"],
    ["ollama", "hugging-face", "development", "similar"],
  ];
  for (const [left, right, mode, expected] of cases) {
    it(`${left} vs ${right} (${mode}) -> ${expected}`, () => {
      const result = documentedFit(capabilities[left], capabilities[right], preset(mode));
      expect(result.outcome).toBe(expected);
    });
  }

  it("Perplexity vs ChatGPT (Research) is SIMILAR after citation evidence expansion", () => {
    const result = documentedFit(capabilities.perplexity, capabilities.chatgpt, preset("research"));
    expect(result.outcome).toBe("similar");
    expect(result.decisiveCapabilitiesLeft).toHaveLength(0);
    expect(result.decisiveCapabilitiesRight).toHaveLength(0);
    // Both products now document source citations; the comparison is symmetric.
    expect(result.left.supported).toContain("sourceCitations");
    expect(result.right.supported).toContain("sourceCitations");
    expect(result.asymmetry).toHaveLength(0);
  });

  it("ChatGPT vs Claude (Coding) is INSUFFICIENT — IDE integration is unknown for both", () => {
    const result = documentedFit(capabilities.chatgpt, capabilities.claude, preset("coding"));
    expect(result.outcome).toBe("insufficient");
    expect(result.left.unknown).toContain("ideIntegration");
    expect(result.right.unknown).toContain("ideIntegration");
  });
});

describe("requirement integrity", () => {
  it("every requirement capability is defined in the capability taxonomy labels", () => {
    for (const req of Object.values(WORKFLOW_REQUIREMENTS)) {
      for (const c of [...req.required, ...req.preferred]) {
        expect(capabilityLabels[c]).toBeDefined();
      }
    }
  });
});
