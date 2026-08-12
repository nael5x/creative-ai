import { describe, expect, it } from "vitest";
import { profiles } from "./profiles";
import type { ComparisonCriterion } from "../types";

const SUBJECTIVE: ComparisonCriterion[] = [
  "quality", "easeOfUse", "speed", "freeValue", "paidValue",
  "privacy", "collaboration", "developerFit",
];

describe("profiles trust classification", () => {
  it("marks every subjective criterion as not-verified with a null score", () => {
    for (const toolId of Object.keys(profiles)) {
      for (const criterion of SUBJECTIVE) {
        const item = profiles[toolId].assessments[criterion];
        if (!item || item.status === "not-applicable") continue;
        expect(item.status, `${toolId}.${criterion}`).toBe("not-verified");
        expect(item.score, `${toolId}.${criterion} score`).toBeNull();
      }
    }
  });

  it("never turns a not-verified criterion into a fabricated score", () => {
    const item = profiles.chatgpt.assessments.easeOfUse!;
    expect(item.status).toBe("not-verified");
    expect(item.score).toBeNull();
    expect(item.evidence).toHaveLength(0);
  });

  it("keeps a factual criterion verified with claim-specific evidence", () => {
    const item = profiles.chatgpt.assessments.platformAvailability!;
    expect(item.status).toBe("verified");
    expect(item.score).not.toBeNull();
    expect(item.evidence.length).toBeGreaterThan(0);
    expect(item.evidence[0].url).toContain("http");
  });

  it("verifies source transparency only for documented open-source tools", () => {
    expect(profiles.ollama.assessments.sourceTransparency!.status).toBe("verified");
    expect(profiles.n8n.assessments.sourceTransparency!.status).toBe("verified");
    expect(profiles.chatgpt.assessments.sourceTransparency!.status).toBe("not-verified");
  });

  it("excludes not-applicable criteria from the scoring input", () => {
    const item = profiles.midjourney.assessments.contextFiles!;
    expect(item.status).toBe("not-applicable");
    expect(item.score).toBeNull();
  });
});
