import { describe, it, expect } from "vitest";
import { focusOptionsForDomain, BUDGET_OPTIONS, PRIVACY_OPTIONS, WIZARD_STEP_COUNT } from "./wizard";

describe("wizard data / focus options", () => {
  it("exposes the expected fixed option sets", () => {
    expect(BUDGET_OPTIONS).toEqual(["free", "paid", "any"]);
    expect(PRIVACY_OPTIONS).toEqual(["cloud", "prefer-local", "strict-local"]);
    expect(WIZARD_STEP_COUNT).toBe(5);
  });

  it("derives focus options from the domain workflow requirements", () => {
    const coding = focusOptionsForDomain("coding");
    expect(coding).toContain("ideIntegration");
    expect(coding).toContain("fileContext");
  });

  it("excludes budget and privacy capabilities from focus options", () => {
    const local = focusOptionsForDomain("local");
    for (const excluded of ["freeTier", "paidPlan", "localExecution", "selfHosting", "openSource"]) {
      expect(local).not.toContain(excluded);
    }
    expect(local.length).toBeGreaterThan(0);
  });

  it("returns an empty list for an unknown or missing domain", () => {
    expect(focusOptionsForDomain("does-not-exist")).toEqual([]);
    expect(focusOptionsForDomain(undefined)).toEqual([]);
  });

  it("is deterministic and de-duplicated", () => {
    const a = focusOptionsForDomain("research");
    const b = focusOptionsForDomain("research");
    expect(a).toEqual(b);
    expect(new Set(a).size).toBe(a.length);
  });
});
