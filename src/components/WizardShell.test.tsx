import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WizardShell } from "./WizardShell";
import { WizardResults } from "./wizard/WizardResults";
import { ui } from "../i18n";
import type { UrlState } from "../lib/urlState";
import type { WizardResult } from "../lib/wizard";
import type { WizardSelection } from "../data/wizard";

// Stateful harness: mirrors App's URL-state update behaviour so we can drive the
// full multi-step flow purely through the component's own onState callback.
function Harness({ onCompare = vi.fn() }: { onCompare?: (l: string, r: string, m: string) => void }) {
  const [state, setState] = useState<UrlState>({ left: "chatgpt", right: "claude", mode: "general", view: "wizard", wizardStep: 1 });
  return <WizardShell language="en" copy={ui.en} state={state} onState={(next) => setState((s) => ({ ...s, ...next }))} onCompare={onCompare} />;
}

describe("WizardShell flow", () => {
  it("renders every step and reaches an evidence-backed recommendation", () => {
    const onCompare = vi.fn();
    render(<Harness onCompare={onCompare} />);

    // Step 1 — domain
    expect(screen.getByTestId("wizard-step-domain")).toBeTruthy();
    fireEvent.click(screen.getByTestId("wizard-domain-coding"));

    // Step 2 — budget
    expect(screen.getByTestId("wizard-step-budget")).toBeTruthy();
    fireEvent.click(screen.getByTestId("wizard-budget-any"));

    // Step 3 — privacy
    expect(screen.getByTestId("wizard-step-privacy")).toBeTruthy();
    fireEvent.click(screen.getByTestId("wizard-privacy-cloud"));

    // Step 4 — focus (pick two verified priorities so an evidence-backed alternative exists)
    expect(screen.getByTestId("wizard-step-focus")).toBeTruthy();
    fireEvent.click(screen.getByTestId("wizard-focus-ideIntegration"));
    fireEvent.click(screen.getByTestId("wizard-focus-fileContext"));
    fireEvent.click(screen.getByTestId("wizard-see-results"));

    // Step 5 — results: recommendation for GitHub Copilot (verified IDE integration)
    const rec = screen.getByTestId("wizard-result-recommendation");
    expect(rec).toBeTruthy();
    expect(screen.getByText("GitHub Copilot")).toBeTruthy();
    // Evidence-backed rationale must link to a real source.
    const evidence = screen.getAllByTestId("wizard-evidence-link");
    expect(evidence.length).toBeGreaterThan(0);
    expect((evidence[0] as HTMLAnchorElement).getAttribute("href")).toMatch(/^https?:\/\//);
    // Editorial vs user-preference distinction is present.
    expect(screen.getByText(ui.en.wBasedOnPriorities)).toBeTruthy();
    expect(screen.getByText(ui.en.wUserPrefNote)).toBeTruthy();

    // Compare top matches opens the existing comparison experience.
    fireEvent.click(screen.getByTestId("wizard-compare-top"));
    expect(onCompare).toHaveBeenCalledWith("github-copilot", expect.any(String), "coding");
  });

  it("clamps a step-5 deep link with no selections back to step 1 (fail safe)", () => {
    render(
      <WizardShell language="en" copy={ui.en} state={{ left: "chatgpt", right: "claude", mode: "general", view: "wizard", wizardStep: 5 }} onState={vi.fn()} onCompare={vi.fn()} />,
    );
    expect(screen.getByTestId("wizard-step-domain")).toBeTruthy();
    expect(screen.queryByTestId("wizard-results")).toBeNull();
  });
});

describe("WizardResults states", () => {
  const selection: WizardSelection = { domain: "coding", budget: "any", privacy: "cloud", focus: ["ideIntegration", "sourceCitations"] };

  it("renders the tradeoff state without forcing a winner", () => {
    const result: WizardResult = {
      state: "tradeoff",
      reason: "ok",
      focus: ["ideIntegration", "sourceCitations"],
      candidates: [],
      best: { toolId: "claude", score: 2, matchedFocus: ["sourceCitations"], unknownFocus: [], localSupport: [], freeTier: "supported", paidPlan: "supported" },
      alternative: { toolId: "github-copilot", score: 2, matchedFocus: ["ideIntegration"], unknownFocus: [], localSupport: [], freeTier: "supported", paidPlan: "supported" },
    };
    render(<WizardResults language="en" copy={ui.en} result={result} selection={selection} onBack={vi.fn()} onRestart={vi.fn()} onCompare={vi.fn()} />);
    expect(screen.getByTestId("wizard-result-tradeoff")).toBeTruthy();
    expect(screen.getByText("Claude")).toBeTruthy();
    expect(screen.getByText("GitHub Copilot")).toBeTruthy();
    expect(screen.getByTestId("wizard-compare-top")).toBeTruthy();
  });

  it("renders the insufficient-evidence state and what evidence is available", () => {
    const result: WizardResult = {
      state: "insufficient",
      reason: "no-evidence",
      focus: ["webAccess"],
      candidates: [{ toolId: "elevenlabs", score: 0, matchedFocus: [], unknownFocus: ["webAccess"], localSupport: [], freeTier: "unknown", paidPlan: "unknown" }],
      best: { toolId: "elevenlabs", score: 0, matchedFocus: [], unknownFocus: ["webAccess"], localSupport: [], freeTier: "unknown", paidPlan: "unknown" },
    };
    render(<WizardResults language="en" copy={ui.en} result={result} selection={{ domain: "audio", budget: "paid", privacy: "cloud", focus: [] }} onBack={vi.fn()} onRestart={vi.fn()} onCompare={vi.fn()} />);
    expect(screen.getByTestId("wizard-result-insufficient")).toBeTruthy();
    expect(screen.getByText(ui.en.wInsufficientNoEvidence)).toBeTruthy();
    expect(screen.getByTestId("wizard-available-elevenlabs")).toBeTruthy();
  });

  it("does not present a zero-evidence second candidate as an alternative or comparison", () => {
    const best: WizardResult["best"] = { toolId: "github-copilot", score: 2, matchedFocus: ["ideIntegration"], unknownFocus: [], localSupport: [], freeTier: "supported", paidPlan: "supported" };
    const zeroAlt: WizardResult["alternative"] = { toolId: "windsurf", score: 0, matchedFocus: [], unknownFocus: ["ideIntegration"], localSupport: [], freeTier: "unknown", paidPlan: "unknown" };
    const result: WizardResult = { state: "recommendation", reason: "ok", focus: ["ideIntegration"], candidates: [best!, zeroAlt!], best, alternative: zeroAlt };
    render(<WizardResults language="en" copy={ui.en} result={result} selection={{ domain: "coding", budget: "any", privacy: "cloud", focus: ["ideIntegration"] }} onBack={vi.fn()} onRestart={vi.fn()} onCompare={vi.fn()} />);
    expect(screen.getByTestId("wizard-result-recommendation")).toBeTruthy();
    expect(screen.getByText("GitHub Copilot")).toBeTruthy();
    expect(screen.queryByTestId("wizard-alternative")).toBeNull();
    expect(screen.queryByTestId("wizard-compare-top")).toBeNull();
  });
});
