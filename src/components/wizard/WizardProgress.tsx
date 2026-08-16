import type { Copy } from "../../i18n";

type Props = { copy: Copy; current: number; maxReachable: number; onGo: (step: number) => void };

export function WizardProgress({ copy, current, maxReachable, onGo }: Props) {
  const labels = [copy.wStepDomainLabel, copy.wStepBudgetLabel, copy.wStepPrivacyLabel, copy.wStepFocusLabel, copy.wStepResultsLabel];
  return (
    <nav className="wizard-progress" aria-label={copy.wizard} data-testid="wizard-progress">
      <ol>
        {labels.map((label, index) => {
          const step = index + 1;
          const reachable = step <= maxReachable;
          const status = step === current ? "current" : step < current ? "done" : "upcoming";
          return (
            <li key={label} className={`wizard-progress-item ${status}`}>
              <button
                type="button"
                className="wizard-progress-btn"
                aria-current={step === current ? "step" : undefined}
                disabled={!reachable}
                onClick={() => reachable && onGo(step)}
                data-testid={`wizard-progress-step-${step}`}
              >
                <span className="wizard-progress-num">{step}</span>
                <span className="wizard-progress-label">{label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
