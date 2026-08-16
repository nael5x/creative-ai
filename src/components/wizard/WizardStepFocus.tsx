import type { Copy } from "../../i18n";
import type { CapabilityId, Language } from "../../types";
import { capabilityLabels } from "../../data/capabilities";
import { focusOptionsForDomain } from "../../data/wizard";

type Props = {
  language: Language;
  copy: Copy;
  domainId: string;
  selected: CapabilityId[];
  onToggle: (cap: CapabilityId) => void;
  onBack: () => void;
  onNext: () => void;
};

export function WizardStepFocus({ language, copy, domainId, selected, onToggle, onBack, onNext }: Props) {
  const options = focusOptionsForDomain(domainId);
  return (
    <section className="wizard-step" data-testid="wizard-step-focus">
      <fieldset className="wizard-fieldset">
        <legend>{copy.wFocusTitle} <span className="wizard-optional">({copy.wOptional})</span></legend>
        <p className="wizard-hint">{copy.wFocusHint}</p>
        {options.length === 0 ? (
          <p className="wizard-hint" data-testid="wizard-focus-empty">{copy.wFocusNone}</p>
        ) : (
          <div className="wizard-choice-grid wizard-focus-grid">
            {options.map((cap) => {
              const isOn = selected.includes(cap);
              return (
                <button
                  key={cap}
                  type="button"
                  className={`wizard-option wizard-focus-option ${isOn ? "is-selected" : ""}`}
                  aria-pressed={isOn}
                  onClick={() => onToggle(cap)}
                  data-testid={`wizard-focus-${cap}`}
                >
                  <span className="wizard-focus-check" aria-hidden="true">{isOn ? "✓" : "+"}</span>
                  <strong>{capabilityLabels[cap][language]}</strong>
                </button>
              );
            })}
          </div>
        )}
      </fieldset>
      <div className="wizard-nav">
        <button type="button" className="secondary" onClick={onBack} data-testid="wizard-back">← {copy.wBackStep}</button>
        <button type="button" className="primary" onClick={onNext} data-testid="wizard-see-results">{copy.wSeeResults} →</button>
      </div>
    </section>
  );
}
