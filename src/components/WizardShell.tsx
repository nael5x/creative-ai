import type { Copy } from "../i18n";
import type { CapabilityId, Language } from "../types";
import type { UrlState } from "../lib/urlState";
import type { WizardBudget, WizardPrivacy, WizardSelection } from "../data/wizard";
import { WizardProgress } from "./wizard/WizardProgress";
import { WizardStepDomain } from "./wizard/WizardStepDomain";
import { WizardStepBudget } from "./wizard/WizardStepBudget";
import { WizardStepPrivacy } from "./wizard/WizardStepPrivacy";
import { WizardStepFocus } from "./wizard/WizardStepFocus";
import { WizardResults } from "./wizard/WizardResults";
import { evaluateWizard } from "../lib/wizard";

type Props = {
  language: Language;
  copy: Copy;
  state: UrlState;
  onState: (next: Partial<UrlState>) => void;
  onCompare: (leftId: string, rightId: string, mode: string) => void;
};

export function WizardShell({ language, copy, state, onState, onCompare }: Props) {
  const domainId = state.wizardDomain;
  const budget = state.wizardBudget;
  const privacy = state.wizardPrivacy;
  const focus = state.wizardFocus ?? [];

  // Clamp the requested step to what the current selections allow. This makes
  // deep links fail safe: a step=5 URL without a domain lands on step 1.
  const maxReachable = !domainId ? 1 : !budget ? 2 : !privacy ? 3 : 5;
  const step = Math.min(state.wizardStep ?? 1, maxReachable);

  const goTo = (wizardStep: number, extra: Partial<UrlState> = {}) => onState({ view: "wizard", wizardStep, ...extra });
  const selectDomain = (id: string) => goTo(2, { wizardDomain: id, wizardFocus: undefined });
  const selectBudget = (b: WizardBudget) => goTo(3, { wizardBudget: b });
  const selectPrivacy = (p: WizardPrivacy) => goTo(4, { wizardPrivacy: p });
  const toggleFocus = (cap: CapabilityId) => {
    const next = focus.includes(cap) ? focus.filter((c) => c !== cap) : [...focus, cap];
    onState({ view: "wizard", wizardFocus: next.length ? next : undefined });
  };
  const restart = () => onState({ view: "wizard", wizardStep: 1, wizardDomain: undefined, wizardBudget: undefined, wizardPrivacy: undefined, wizardFocus: undefined });

  const selection: WizardSelection | null =
    domainId && budget && privacy ? { domain: domainId, budget, privacy, focus } : null;

  return (
    <main className="wizard page-width" data-testid="wizard-shell">
      <header className="wizard-head">
        <p className="wizard-eyebrow">{copy.wizard}</p>
        <h1>{copy.wizardTitle}</h1>
        <p className="wizard-sub">{copy.wizardSubtitle}</p>
      </header>

      <WizardProgress copy={copy} current={step} maxReachable={maxReachable} onGo={(s) => goTo(s)} />

      {step === 1 ? (
        <WizardStepDomain language={language} copy={copy} selected={domainId} onSelect={selectDomain} />
      ) : null}
      {step === 2 ? (
        <WizardStepBudget copy={copy} selected={budget} onSelect={selectBudget} onBack={() => goTo(1)} />
      ) : null}
      {step === 3 ? (
        <WizardStepPrivacy copy={copy} selected={privacy} onSelect={selectPrivacy} onBack={() => goTo(2)} />
      ) : null}
      {step === 4 && domainId ? (
        <WizardStepFocus language={language} copy={copy} domainId={domainId} selected={focus} onToggle={toggleFocus} onBack={() => goTo(3)} onNext={() => goTo(5)} />
      ) : null}
      {step === 5 && selection ? (
        <WizardResults language={language} copy={copy} result={evaluateWizard(selection)} selection={selection} onBack={() => goTo(4)} onRestart={restart} onCompare={onCompare} />
      ) : null}
    </main>
  );
}
