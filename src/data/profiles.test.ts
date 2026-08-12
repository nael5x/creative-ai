import { describe, expect, it } from "vitest";
import { profiles } from "./profiles";
import { compareTools, scoreTool } from "../lib/scoring";
import { presets } from "./presets";
import { toolMap } from "./tools";
import type { ComparisonCriterion } from "../types";

// Subjective/editorial criteria that must never be verified from an overview page.
// (Privacy is now a factual criterion: verified only where local/self-hosted
// execution is documented, e.g. ollama/hugging-face/n8n.)
const SUBJECTIVE: ComparisonCriterion[] = [
  "quality", "easeOfUse", "speed", "collaboration", "developerFit",
];

const preset = (id: string) => presets.find((p) => p.id === id)!;

describe("profiles trust classification", () => {
  it("marks every subjective criterion as not-verified with a null score", () => {
    for (const toolId of Object.keys(profiles)) {
      for (const criterion of SUBJECTIVE) {
        const item = profiles[toolId].assessments[criteria(criterion)];
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

  it("keeps a factual criterion verified with evidence but NO arbitrary numeric score", () => {
    const item = profiles.chatgpt.assessments.platformAvailability!;
    expect(item.status).toBe("verified");
    expect(item.score).toBeNull();
    expect(item.evidence.length).toBeGreaterThan(0);
    expect(item.evidence[0].url).toContain("http");
  });

  it("verifies documented free-tier / pricing facts as evidence (not value scores)", () => {
    expect(profiles.chatgpt.assessments.freeValue!.status).toBe("verified");
    expect(profiles.chatgpt.assessments.freeValue!.score).toBeNull();
    expect(profiles.claude.assessments.paidValue!.status).toBe("verified");
    expect(profiles.claude.assessments.paidValue!.score).toBeNull();
  });

  it("verifies local/self-hosted privacy as a documented factual capability", () => {
    expect(profiles.ollama.assessments.privacy!.status).toBe("verified");
    expect(profiles.ollama.assessments.privacy!.score).toBeNull();
    expect(profiles["hugging-face"].assessments.privacy!.status).toBe("verified");
    // Cloud tools without documented local execution stay not-verified.
    expect(profiles.chatgpt.assessments.privacy!.status).toBe("not-verified");
  });

  it("verifies source transparency only for documented open/transparent tools", () => {
    expect(profiles.ollama.assessments.sourceTransparency!.status).toBe("verified");
    expect(profiles.n8n.assessments.sourceTransparency!.status).toBe("verified");
    expect(profiles["hugging-face"].assessments.sourceTransparency!.status).toBe("verified");
    expect(profiles.perplexity.assessments.sourceTransparency!.status).toBe("verified");
    expect(profiles.chatgpt.assessments.sourceTransparency!.status).toBe("not-verified");
  });

  it("excludes not-applicable criteria from the scoring input", () => {
    const item = profiles.midjourney.assessments.contextFiles!;
    expect(item.status).toBe("not-applicable");
    expect(item.score).toBeNull();
  });

  it("withholds factual criteria that lack claim-specific evidence", () => {
    expect(profiles.midjourney.assessments.paidValue!.status).toBe("not-verified");
    expect(profiles.midjourney.assessments.paidValue!.score).toBeNull();
  });
});

describe("numeric scoring integrity", () => {
  it("verified factual evidence can exist without an arbitrary suitability score", () => {
    const verifiedFacts = Object.values(profiles.chatgpt.assessments).filter((a) => a.status === "verified");
    expect(verifiedFacts.length).toBeGreaterThan(0);
    for (const fact of verifiedFacts) expect(fact.score).toBeNull();
  });

  it("priority comparisons withhold numeric suitability (no arbitrary scores)", () => {
    const cases: Array<[string, string, string]> = [
      ["chatgpt", "gemini", "general"],
      ["perplexity", "chatgpt", "research"],
      ["ollama", "hugging-face", "local"],
      ["ollama", "hugging-face", "development"],
    ];
    for (const [left, right, mode] of cases) {
      const result = compareTools(toolMap.get(left)!, toolMap.get(right)!, profiles[left], profiles[right], preset(mode));
      expect(result.left.score, `${left}.score`).toBeNull();
      expect(result.right.score, `${right}.score`).toBeNull();
      expect(result.outcome).toBe("insufficient");
    }
  });

  it("coding comparisons remain honestly insufficient (no fabricated winner)", () => {
    const chat = compareTools(toolMap.get("chatgpt")!, toolMap.get("claude")!, profiles.chatgpt, profiles.claude, preset("coding"));
    expect(chat.left.score).toBeNull();
    expect(chat.right.score).toBeNull();
    expect(chat.outcome).toBe("insufficient");

    const code = compareTools(toolMap.get("cursor")!, toolMap.get("github-copilot")!, profiles.cursor, profiles["github-copilot"], preset("coding"));
    expect(code.left.score).toBeNull();
    expect(code.right.score).toBeNull();
    expect(code.outcome).toBe("insufficient");
  });
});

function criteria(value: ComparisonCriterion) {
  return value;
}
