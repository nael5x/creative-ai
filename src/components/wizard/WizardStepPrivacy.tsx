import type { Copy } from "../../i18n";
import type { WizardPrivacy } from "../../data/wizard";

type Props = { copy: Copy; selected?: WizardPrivacy; onSelect: (privacy: WizardPrivacy) => void; onBack: () => void };

export function WizardStepPrivacy({ copy, selected, onSelect, onBack }: Props) {
  const options: { id: WizardPrivacy; label: string; hint: string }[] = [
    { id: "cloud", label: copy.wPrivacyCloud, hint: copy.wPrivacyCloudHint },
    { id: "prefer-local", label: copy.wPrivacyPrefer, hint: copy.wPrivacyPreferHint },
    { id: "strict-local", label: copy.wPrivacyStrict, hint: copy.wPrivacyStrictHint },
  ];
  return (
    <section className="wizard-step" data-testid="wizard-step-privacy">
      <fieldset className="wizard-fieldset">
        <legend>{copy.wPrivacyTitle}</legend>
        <div className="wizard-choice-grid">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              className={`wizard-option ${selected === o.id ? "is-selected" : ""}`}
              aria-pressed={selected === o.id}
              onClick={() => onSelect(o.id)}
              data-testid={`wizard-privacy-${o.id}`}
            >
              <strong>{o.label}</strong>
              <span>{o.hint}</span>
            </button>
          ))}
        </div>
      </fieldset>
      <div className="wizard-nav">
        <button type="button" className="secondary" onClick={onBack} data-testid="wizard-back">← {copy.wBackStep}</button>
      </div>
    </section>
  );
}
