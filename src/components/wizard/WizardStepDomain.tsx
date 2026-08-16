import type { Copy } from "../../i18n";
import type { Language } from "../../types";
import { domains } from "../../data/domains";

type Props = { language: Language; copy: Copy; selected?: string; onSelect: (domainId: string) => void };

export function WizardStepDomain({ language, copy, selected, onSelect }: Props) {
  return (
    <section className="wizard-step" data-testid="wizard-step-domain">
      <h2>{copy.wDomainTitle}</h2>
      <p className="wizard-hint">{copy.wDomainHint}</p>
      <div className="wizard-domain-grid" role="list">
        {domains.map((d) => (
          <button
            key={d.id}
            type="button"
            role="listitem"
            className={`wizard-option domain-option ${selected === d.id ? "is-selected" : ""}`}
            aria-pressed={selected === d.id}
            onClick={() => onSelect(d.id)}
            data-testid={`wizard-domain-${d.id}`}
          >
            <strong>{d.name[language]}</strong>
            <span>{d.description[language]}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
