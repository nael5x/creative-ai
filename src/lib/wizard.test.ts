import { describe, it, expect } from "vitest";
import {
  evaluateWizard,
  rankCandidates,
  decideResult,
  passesHardConstraints,
  type WizardCandidate,
} from "./wizard";
import type { WizardSelection } from "../data/wizard";
import { domainMap } from "../data/domains";

const sel = (over: Partial<WizardSelection> = {}): WizardSelection => ({
  domain: "coding",
  budget: "any",
  privacy: "cloud",
  focus: [],
  ...over,
});

describe("wizard hard constraints", () => {
  it("Free only requires VERIFIED free-tier support (unknown does not qualify)", () => {
    expect(passesHardConstraints("chatgpt", sel({ budget: "free" }))).toBe(true); // freeTier verified
    expect(passesHardConstraints("midjourney", sel({ budget: "free" }))).toBe(false); // freeTier unknown
  });

  it("Strict Local requires VERIFIED qualifying local/self-hosting (unknown does not qualify)", () => {
    expect(passesHardConstraints("ollama", sel({ privacy: "strict-local" }))).toBe(true); // localExecution verified
    expect(passesHardConstraints("chatgpt", sel({ privacy: "strict-local" }))).toBe(false); // local unknown
  });

  it("Prefer Local is a preference, not a hard exclusion", () => {
    // A cloud-only tool remains eligible under Prefer Local.
    expect(passesHardConstraints("chatgpt", sel({ privacy: "prefer-local" }))).toBe(true);
    // ...and a verified-local tool receives a positive preference bonus.
    const preferred = rankCandidates(["ollama"], sel({ domain: "local", privacy: "prefer-local" }))[0];
    const neutral = rankCandidates(["ollama"], sel({ domain: "local", privacy: "cloud" }))[0];
    expect(preferred.score).toBeGreaterThan(neutral.score);
  });
});

describe("wizard scoring — unknown is never a negative", () => {
  it("unknown focus capabilities are recorded but do not reduce the score", () => {
    // cursor: fileContext verified, ideIntegration unknown.
    const [cursor] = rankCandidates(["cursor"], sel({ focus: ["ideIntegration", "fileContext"] }));
    expect(cursor.matchedFocus).toEqual(["fileContext"]);
    expect(cursor.unknownFocus).toContain("ideIntegration");
    // Score derives only from matched (1 match => 2 points), never penalized for the unknown.
    expect(cursor.score).toBe(2);
  });
});

describe("wizard determinism & order-independence", () => {
  it("produces identical output for identical input", () => {
    const a = evaluateWizard(sel({ focus: ["ideIntegration"] }));
    const b = evaluateWizard(sel({ focus: ["ideIntegration"] }));
    expect(a).toEqual(b);
  });

  it("ranking is independent of the source tool-array ordering", () => {
    const ids = domainMap.get("coding")!.toolIds;
    const forward = rankCandidates([...ids], sel({ focus: ["ideIntegration", "fileContext"] }));
    const reversed = rankCandidates([...ids].reverse(), sel({ focus: ["ideIntegration", "fileContext"] }));
    expect(reversed.map((c) => c.toolId)).toEqual(forward.map((c) => c.toolId));
    expect(reversed.map((c) => c.score)).toEqual(forward.map((c) => c.score));
  });

  it("workflow-focus preference changes candidate ordering deterministically", () => {
    // With IDE-integration focus, GitHub Copilot (verified ideIntegration) leads.
    const ranked = rankCandidates(domainMap.get("coding")!.toolIds, sel({ focus: ["ideIntegration"] }));
    expect(ranked[0].toolId).toBe("github-copilot");
    expect(ranked[0].score).toBeGreaterThan(ranked[1].score);
  });
});

describe("wizard result states", () => {
  it("RECOMMENDATION when evidence meaningfully supports one candidate", () => {
    const r = evaluateWizard(sel({ focus: ["ideIntegration"] }));
    expect(r.state).toBe("recommendation");
    expect(r.best?.toolId).toBe("github-copilot");
    expect(r.alternative).toBeDefined();
  });

  it("TRADEOFF when two candidates tie with distinct documented advantages", () => {
    const candidates = rankCandidates(
      ["github-copilot", "claude"],
      sel({ focus: ["ideIntegration", "sourceCitations"] }),
    );
    const { state } = decideResult(candidates);
    expect(state).toBe("tradeoff");
    // Each leads on a different verified capability.
    const byId = Object.fromEntries(candidates.map((c) => [c.toolId, c] as const));
    expect(byId["github-copilot"].matchedFocus).toEqual(["ideIntegration"]);
    expect(byId["claude"].matchedFocus).toEqual(["sourceCitations"]);
  });

  it("INSUFFICIENT (no-eligible) when a hard constraint eliminates every tool", () => {
    const r = evaluateWizard(sel({ domain: "research", budget: "free", privacy: "strict-local" }));
    expect(r.state).toBe("insufficient");
    expect(r.reason).toBe("no-eligible");
    expect(r.candidates).toHaveLength(0);
  });

  it("INSUFFICIENT (no-evidence) when eligible tools have no verified supporting evidence", () => {
    const r = evaluateWizard(sel({ domain: "audio", budget: "paid", privacy: "cloud" }));
    expect(r.state).toBe("insufficient");
    expect(r.reason).toBe("no-evidence");
    expect(r.candidates.length).toBeGreaterThan(0); // tools exist, but all focus caps are unknown
    expect(r.best?.score).toBe(0);
  });

  it("decideResult reports no-eligible for an empty candidate list", () => {
    const empty: WizardCandidate[] = [];
    expect(decideResult(empty)).toEqual({ state: "insufficient", reason: "no-eligible" });
  });
});
