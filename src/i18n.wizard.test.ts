import { describe, it, expect } from "vitest";
import { ui } from "./i18n";

// The Arabic map only satisfies Record<string,string> structurally, so key parity
// with English is verified here at runtime for all user-facing Wizard strings.
const WIZARD_KEYS = [
  "wizard", "wizardTitle", "wizardSubtitle",
  "wStep", "wOf", "wNext", "wBackStep", "wRestart", "wSeeResults", "wSelected", "wOptional",
  "wStepDomainLabel", "wStepBudgetLabel", "wStepPrivacyLabel", "wStepFocusLabel", "wStepResultsLabel",
  "wDomainTitle", "wDomainHint",
  "wBudgetTitle", "wBudgetFree", "wBudgetFreeHint", "wBudgetPaid", "wBudgetPaidHint", "wBudgetAny", "wBudgetAnyHint",
  "wPrivacyTitle", "wPrivacyCloud", "wPrivacyCloudHint", "wPrivacyPrefer", "wPrivacyPreferHint", "wPrivacyStrict", "wPrivacyStrictHint",
  "wFocusTitle", "wFocusHint", "wFocusNone",
  "wResultsTitle", "wBasedOnPriorities", "wEvidenceShows", "wUserPrefNote",
  "wRecommendation", "wBestMatch", "wAlternative", "wWhyFits", "wDecisiveCaps", "wRelevantLimits", "wEvidenceLabel", "wCompareTop", "wOpenTool", "wVerified",
  "wConstraintFree", "wConstraintLocal",
  "wTradeoffTitle", "wTradeoffLead", "wBetterFor",
  "wInsufficientTitle", "wInsufficientNoEvidence", "wInsufficientNoEligible", "wAvailableEvidence", "wNoCandidates", "wUnknownNote",
] as const;

describe("wizard localization", () => {
  it("defines every Wizard string in both English and Arabic", () => {
    for (const key of WIZARD_KEYS) {
      const en = (ui.en as Record<string, string>)[key];
      const ar = (ui.ar as Record<string, string>)[key];
      expect(en, `missing en.${key}`).toBeTruthy();
      expect(ar, `missing ar.${key}`).toBeTruthy();
      expect(ar, `ar.${key} equals en (untranslated)`).not.toBe(en);
    }
  });
});
