import type { Copy } from "../../i18n";
import type { WizardBudget } from "../../data/wizard";

type Props = { copy: Copy; selected?: WizardBudget; onSelect: (budget: WizardBudget) => void; onBack: () => void };

export function WizardStepBudget({ copy, selected, onSelect, onBack }: Props) {
  const options: { id: WizardBudget; label: string; hint: string }[] = [
    { id: "free", label: copy.wBudgetFree, hint: copy.wBudgetFreeHint },
    { id: "paid", label: copy.wBudgetPaid, hint: copy.wBudgetPaidHint },
    { id: "any", label: copy.wBudgetAny, hint: copy.wBudgetAnyHint },
  ];
  return (
    <section className="wizard-step" data-testid="wizard-step-budget">
      <fieldset className="wizard-fieldset">
        <legend>{copy.wBudgetTitle}</legend>
        <div className="wizard-choice-grid">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              className={`wizard-option ${selected === o.id ? "is-selected" : ""}`}
              aria-pressed={selected === o.id}
              onClick={() => onSelect(o.id)}
              data-testid={`wizard-budget-${o.id}`}
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
