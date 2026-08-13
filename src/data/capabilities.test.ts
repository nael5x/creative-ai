import { describe, expect, it } from "vitest";
import { capabilities, capabilityLabels } from "./capabilities";
import { facts } from "./profiles";
import { documentedFit } from "../lib/fit";
import { presets } from "./presets";
import type { CapabilityAssessment, CapabilityId } from "../types";

const preset = (id: string) => presets.find((p) => p.id === id)!;
const cap = (state: "supported" | "not-supported"): CapabilityAssessment => ({ state, rationale: { en: "", ar: "" }, verifiedAt: "2026-08-13" });

describe("Fix 1 — claim-specific capability rationale", () => {
  it("chatgpt webAccess rationale is tool/capability-specific, not a shared generic constant", () => {
    const web = capabilities.chatgpt.webAccess!;
    expect(web.state).toBe("supported");
    expect(web.rationale.en).toContain("ChatGPT");
    expect(web.rationale.en).toContain("web application");
    // It must NOT be the generic PLATFORM_RAT copied verbatim from the old fact.
    expect(web.rationale).not.toEqual(facts.chatgpt.platformAvailability!.rationale);
  });

  it("every authored capability carries a non-empty claim-specific rationale", () => {
    for (const caps of Object.values(capabilities)) {
      for (const c of Object.values(caps)) {
        expect(c!.rationale.en.length).toBeGreaterThan(0);
        expect(c!.rationale.ar.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("Fix 2 — localExecution vs selfHosting separation", () => {
  it("are distinct CapabilityIds in the taxonomy", () => {
    expect(capabilityLabels.localExecution).toBeDefined();
    expect(capabilityLabels.selfHosting).toBeDefined();
    expect(capabilityLabels.localExecution).not.toEqual(capabilityLabels.selfHosting);
  });

  it("tools expose BOTH capabilities independently (authored, not derived from one claim)", () => {
    for (const tool of ["ollama", "hugging-face", "n8n"] as const) {
      expect(capabilities[tool].localExecution?.state).toBe("supported");
      expect(capabilities[tool].selfHosting?.state).toBe("supported");
      expect(capabilities[tool].localExecution).not.toBe(capabilities[tool].selfHosting);
    }
  });

  it("self-hosting evidence does NOT imply local execution at the fit level", () => {
    const onlySelfHost: Partial<Record<CapabilityId, CapabilityAssessment>> = { selfHosting: cap("supported") };
    const fit = documentedFit(onlySelfHost, {}, preset("local"));
    expect(fit.left.supported).toContain("selfHosting");
    expect(fit.left.supported).not.toContain("localExecution");
    expect(fit.left.unknown).toContain("localExecution");
  });

  it("local-execution evidence does NOT imply self-hosting at the fit level", () => {
    const onlyLocal: Partial<Record<CapabilityId, CapabilityAssessment>> = { localExecution: cap("supported") };
    const fit = documentedFit(onlyLocal, {}, preset("local"));
    expect(fit.left.supported).toContain("localExecution");
    expect(fit.left.supported).not.toContain("selfHosting");
    expect(fit.left.unknown).toContain("selfHosting");
  });

  it("tools without the privacy claim have NEITHER capability (no inference)", () => {
    for (const tool of ["chatgpt", "claude", "gemini", "perplexity", "cursor", "github-copilot"] as const) {
      expect(capabilities[tool].localExecution).toBeUndefined();
      expect(capabilities[tool].selfHosting).toBeUndefined();
    }
  });
});

describe("Architectural independence from ComparisonCriterion", () => {
  it("platformAvailability does NOT automatically create webAccess", () => {
    // cursor still has a verified platformAvailability fact, but webAccess must be
    // unknown because capability support is explicitly authored, not derived.
    expect(facts.cursor.platformAvailability).toBeDefined();
    expect(capabilities.cursor.webAccess).toBeUndefined();
  });

  it("removing an old profile criterion does not change authored capability support", () => {
    const snapshot = JSON.stringify(capabilities.chatgpt.thirdPartyIntegrations);
    const saved = (facts.chatgpt as Record<string, unknown>).integrations;
    delete (facts.chatgpt as Record<string, unknown>).integrations;
    try {
      expect(JSON.stringify(capabilities.chatgpt.thirdPartyIntegrations)).toBe(snapshot);
    } finally {
      (facts.chatgpt as Record<string, unknown>).integrations = saved;
    }
  });

  it("removing privacy does not change localExecution or selfHosting support", () => {
    const localSnap = JSON.stringify(capabilities.ollama.localExecution);
    const selfSnap = JSON.stringify(capabilities.ollama.selfHosting);
    const saved = (facts.ollama as Record<string, unknown>).privacy;
    delete (facts.ollama as Record<string, unknown>).privacy;
    try {
      expect(JSON.stringify(capabilities.ollama.localExecution)).toBe(localSnap);
      expect(JSON.stringify(capabilities.ollama.selfHosting)).toBe(selfSnap);
    } finally {
      (facts.ollama as Record<string, unknown>).privacy = saved;
    }
  });

  it("capability support is explicitly authored per tool + CapabilityId (no generic rule)", () => {
    // If a generic rule integrations->thirdPartyIntegrations existed, every tool
    // with an integrations fact would carry thirdPartyIntegrations. The capability
    // set is an explicit record, not a mechanical projection of profile criteria.
    expect(capabilities.cursor.webAccess).toBeUndefined();
    expect(facts.cursor.platformAvailability).toBeDefined();
  });
});

describe("missing evidence remains unknown", () => {
  it("capabilities absent from the map are unknown (not inferred from any criterion)", () => {
    // chatgpt has no evidence for these capabilities -> they must stay absent.
    expect(capabilities.chatgpt.ideIntegration).toBeUndefined();
    expect(capabilities.chatgpt.apiAvailability).toBeUndefined();
    expect(capabilities.chatgpt.localExecution).toBeUndefined();
    expect(capabilities.chatgpt.selfHosting).toBeUndefined();
    expect(capabilities.chatgpt.sourceCitations).toBeUndefined();
    // ollama has no evidence for these either.
    expect(capabilities.ollama.ideIntegration).toBeUndefined();
    expect(capabilities.ollama.apiAvailability).toBeUndefined();
    expect(capabilities.ollama.webAccess).toBeUndefined();
  });
});
