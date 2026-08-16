import type { Copy } from "../../i18n";
import type { CapabilityId, Language } from "../../types";
import { capabilities, capabilityLabels } from "../../data/capabilities";
import { toolMap } from "../../data/tools";
import { domainMap } from "../../data/domains";
import type { WizardCandidate, WizardResult } from "../../lib/wizard";
import type { WizardSelection } from "../../data/wizard";

type Props = {
  language: Language;
  copy: Copy;
  result: WizardResult;
  selection: WizardSelection;
  onBack: () => void;
  onRestart: () => void;
  onCompare: (leftId: string, rightId: string, mode: string) => void;
};

function CapChips({ language, caps, toolId }: { language: Language; caps: CapabilityId[]; toolId: string }) {
  return (
    <div className="wizard-cap-chips">
      {caps.map((c) => {
        const evidence = capabilities[toolId]?.[c]?.evidence;
        return (
          <span key={c} className="wizard-cap-chip" data-testid={`wizard-cap-${toolId}-${c}`}>
            {capabilityLabels[c][language]}
            {evidence ? (
              <a href={evidence.url} target="_blank" rel="noreferrer" data-testid="wizard-evidence-link">
                {evidence.title} ↗
              </a>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

function constraintNotes(candidate: WizardCandidate, selection: WizardSelection, copy: Copy): string[] {
  const notes: string[] = [];
  if (selection.budget === "free" && candidate.freeTier === "supported") notes.push(copy.wConstraintFree);
  if ((selection.privacy === "strict-local" || selection.privacy === "prefer-local") && candidate.localSupport.length > 0) {
    notes.push(copy.wConstraintLocal);
  }
  return notes;
}

function CandidateEvidence({ language, copy, candidate, selection, heading }: { language: Language; copy: Copy; candidate: WizardCandidate; selection: WizardSelection; heading?: string }) {
  const tool = toolMap.get(candidate.toolId)!;
  const notes = constraintNotes(candidate, selection, copy);
  return (
    <div className="wizard-evidence-block">
      {heading ? <h4 className="wizard-evidence-heading">{heading}</h4> : null}
      {notes.map((n) => <p key={n} className="wizard-constraint-note">✓ {n}</p>)}
      {candidate.matchedFocus.length > 0 ? (
        <>
          <p className="wizard-evidence-label">{copy.wEvidenceShows} · {copy.wDecisiveCaps}</p>
          <CapChips language={language} caps={candidate.matchedFocus} toolId={candidate.toolId} />
        </>
      ) : null}
      {tool.limitations.length > 0 ? (
        <>
          <p className="wizard-evidence-label">{copy.wRelevantLimits}</p>
          <ul className="wizard-limits">{tool.limitations.map((l) => <li key={l.en}>{l[language]}</li>)}</ul>
        </>
      ) : null}
    </div>
  );
}

function ToolHeading({ language, candidate, tag }: { language: Language; candidate: WizardCandidate; tag: string }) {
  const tool = toolMap.get(candidate.toolId)!;
  return (
    <div className="wizard-tool-heading">
      <span className="monogram">{tool.name.en[0]}</span>
      <div>
        <span className="wizard-tag">{tag}</span>
        <h3>{tool.name[language]}</h3>
        <p>{tool.category[language]}</p>
      </div>
    </div>
  );
}

export function WizardResults({ language, copy, result, selection, onBack, onRestart, onCompare }: Props) {
  const best = result.best;
  const alternative = result.alternative;

  const compareBtn = best && alternative ? (
    <button
      type="button"
      className="primary wizard-compare"
      data-testid="wizard-compare-top"
      onClick={() => onCompare(best.toolId, alternative.toolId, domainPreset(selection.domain))}
    >
      {copy.wCompareTop} →
    </button>
  ) : null;

  return (
    <section className="wizard-step wizard-results" data-testid="wizard-results" data-state={result.state}>
      <p className="wizard-based-on">{copy.wBasedOnPriorities}</p>

      {result.state === "recommendation" && best ? (
        <div className="wizard-result-card recommendation" data-testid="wizard-result-recommendation">
          <span className="wizard-result-kind">{copy.wRecommendation}</span>
          <ToolHeading language={language} candidate={best} tag={copy.wBestMatch} />
          <a className="wizard-tool-link" href={toolMap.get(best.toolId)!.officialUrl} target="_blank" rel="noreferrer" data-testid="wizard-open-tool">{copy.wOpenTool} ↗</a>
          <div className="wizard-why">
            <h4>{copy.wWhyFits}</h4>
            <CandidateEvidence language={language} copy={copy} candidate={best} selection={selection} />
          </div>
          {alternative ? (
            <div className="wizard-alt" data-testid="wizard-alternative">
              <ToolHeading language={language} candidate={alternative} tag={copy.wAlternative} />
              <CandidateEvidence language={language} copy={copy} candidate={alternative} selection={selection} />
            </div>
          ) : null}
          {compareBtn}
        </div>
      ) : null}

      {result.state === "tradeoff" && best && alternative ? (
        <div className="wizard-result-card tradeoff" data-testid="wizard-result-tradeoff">
          <span className="wizard-result-kind">{copy.wTradeoffTitle}</span>
          <p className="wizard-tradeoff-lead">{copy.wTradeoffLead}</p>
          <div className="wizard-tradeoff-grid">
            <div>
              <ToolHeading language={language} candidate={best} tag={copy.wBetterFor} />
              <CandidateEvidence language={language} copy={copy} candidate={best} selection={selection} />
            </div>
            <div>
              <ToolHeading language={language} candidate={alternative} tag={copy.wBetterFor} />
              <CandidateEvidence language={language} copy={copy} candidate={alternative} selection={selection} />
            </div>
          </div>
          {compareBtn}
        </div>
      ) : null}

      {result.state === "insufficient" ? (
        <div className="wizard-result-card insufficient" data-testid="wizard-result-insufficient">
          <span className="wizard-result-kind">{copy.wInsufficientTitle}</span>
          <p className="wizard-insufficient-body">
            {result.reason === "no-eligible" ? copy.wInsufficientNoEligible : copy.wInsufficientNoEvidence}
          </p>
          {result.candidates.length > 0 ? (
            <div className="wizard-available">
              <h4>{copy.wAvailableEvidence}</h4>
              {result.candidates.slice(0, 4).map((c) => {
                const tool = toolMap.get(c.toolId)!;
                const known = [...c.matchedFocus];
                return (
                  <div key={c.toolId} className="wizard-available-row" data-testid={`wizard-available-${c.toolId}`}>
                    <strong>{tool.name[language]}</strong>
                    {known.length > 0
                      ? <CapChips language={language} caps={known} toolId={c.toolId} />
                      : <span className="wizard-hint">{copy.wUnknownNote}</span>}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="wizard-hint">{copy.wNoCandidates}</p>
          )}
        </div>
      ) : null}

      <p className="wizard-pref-note neutral">{copy.wUserPrefNote}</p>
      <div className="wizard-nav">
        <button type="button" className="secondary" onClick={onBack} data-testid="wizard-back">← {copy.wBackStep}</button>
        <button type="button" className="secondary" onClick={onRestart} data-testid="wizard-restart">{copy.wRestart}</button>
      </div>
    </section>
  );
}

// The domain's own preset, used to open the existing comparison at the same
// use-case.
function domainPreset(domainId: string): string {
  return domainMap.get(domainId)?.relatedPreset ?? "general";
}
