import { useState } from "react";
import { criterionLabels, presets } from "../data/presets";
import { profiles, unverifiedAssessment } from "../data/profiles";
import { toolMap } from "../data/tools";
import { compareTools } from "../lib/scoring";
import { documentedFit } from "../lib/fit";
import type { Copy } from "../i18n";
import type { ComparisonCriterion, CriterionAssessment, Language } from "../types";
import { ToolSelector } from "./ToolSelector";

type Props = { language: Language; copy: Copy; leftId: string; rightId: string; mode: string; onState: (next: { left?: string; right?: string; mode?: string }) => void; onAsk: () => void };

const criterionOrder: ComparisonCriterion[] = ["quality", "easeOfUse", "freeValue", "paidValue", "speed", "contextFiles", "integrations", "privacy", "collaboration", "developerFit", "sourceTransparency", "platformAvailability"];

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="metric"><span>{label}</span><strong>{value}</strong></div>;
}

function criterionLabel(item: CriterionAssessment, copy: Copy): string {
  if (item.status === "not-applicable") return copy.notApplicable;
  if (item.status === "verified") return item.score !== null ? `${item.score} / 10` : copy.verified;
  return copy.notVerified;
}

export function ComparisonWorkspace({ language, copy, leftId, rightId, mode, onState, onAsk }: Props) {
  const [copied, setCopied] = useState(false);
  const leftTool = toolMap.get(leftId)!;
  const rightTool = toolMap.get(rightId)!;
  const preset = presets.find((item) => item.id === mode) ?? presets[0];
  const result = compareTools(leftTool, rightTool, profiles[leftId], profiles[rightId], preset);
  const fit = documentedFit(profiles[leftId], profiles[rightId], preset);
  const visibleCriteria = criterionOrder.filter((criterion) => preset.weights[criterion] !== undefined);

  const winnerTool = fit.outcome === "left" ? leftTool : fit.outcome === "right" ? rightTool : null;
  const docFitTitle = fit.outcome === "left" || fit.outcome === "right"
    ? `${copy.docFitWinner} ${winnerTool!.name[language]}`
    : fit.outcome === "inconclusive"
    ? copy.docFitInconclusive
    : fit.outcome === "similar"
    ? copy.docFitSimilar
    : copy.docFitInsufficient;

  const docFitReason = (() => {
    if (fit.outcome === "left") {
      const caps = fit.decisiveCriteriaLeft.map((c) => criterionLabels[c][language]);
      return `${leftTool.name[language]} ${copy.docFitReasonWinner} ${caps.join(" · ")}; ${rightTool.name[language]} ${copy.docFitReasonLoserUnsupported}.`;
    }
    if (fit.outcome === "right") {
      const caps = fit.decisiveCriteriaRight.map((c) => criterionLabels[c][language]);
      return `${rightTool.name[language]} ${copy.docFitReasonWinner} ${caps.join(" · ")}; ${leftTool.name[language]} ${copy.docFitReasonLoserUnsupported}.`;
    }
    if (fit.outcome === "inconclusive") {
      return fit.asymmetry.map((entry) => {
        const knownTool = entry.knownSide === "left" ? leftTool : rightTool;
        const unknownTool = entry.knownSide === "left" ? rightTool : leftTool;
        const knownPhrase = entry.knownState === "supported" ? copy.docFitReasonAsym : copy.docFitReasonAsymUnsupported;
        return `${knownTool.name[language]} ${knownPhrase} ${criterionLabels[entry.criterion][language]}; ${unknownTool.name[language]} ${copy.docFitReasonUnknown}.`;
      }).join(" ");
    }
    return copy.docFitReasonSimilar;
  })();

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return <main id="compare" className="workspace page-width">
    <section className="intro">
      <h1>{copy.headline}</h1>
      <p>{copy.subhead}</p>
    </section>
    <section className="selection" aria-label={copy.primaryTools}>
      <div className="selector-pair">
        <ToolSelector value={leftId} disabledId={rightId} language={language} label={`${copy.primaryTools}: 1`} onChange={(left) => onState({ left })} />
        <button className="secondary swap" onClick={() => onState({ left: rightId, right: leftId })} aria-label={copy.swap}>⇄ <span>{copy.swap}</span></button>
        <ToolSelector value={rightId} disabledId={leftId} language={language} label={`${copy.primaryTools}: 2`} onChange={(right) => onState({ right })} />
      </div>
      <label className="preset"><span>{copy.useCase}</span><select value={mode} onChange={(event) => onState({ mode: event.target.value })}>{presets.map((item) => <option key={item.id} value={item.id}>{item.label[language]}</option>)}</select></label>
      <div className="selection-actions"><button className="secondary" onClick={copyLink}>{copied ? `✓ ${copy.copied}` : `↗ ${copy.copy}`}</button><button className="primary" onClick={onAsk}>{copy.ask}</button></div>
    </section>

    {result.crossCategory ? <aside className="warning"><strong>{copy.crossCategory}</strong><span>{copy.crossCategoryText}</span></aside> : null}

    <section className="identity comparison-grid">
      <div className="identity-labels" aria-hidden="true"><span>{copy.suitability}</span><span>{copy.confidence}</span><span>{copy.coverage}</span><span>{copy.bestFor}</span></div>
      {[leftTool, rightTool].map((tool, index) => {
        const summary = index === 0 ? result.left : result.right;
        return <article key={tool.id} className="tool-identity">
          <div className="identity-heading"><span className="monogram">{tool.name.en[0]}</span><div><h2>{tool.name[language]}</h2><p>{tool.category[language]}</p></div></div>
          <a href={tool.officialUrl} target="_blank" rel="noreferrer">{copy.official} ↗</a>
          <small>{copy.verified}: <time dateTime={tool.lastVerifiedAt}>{tool.lastVerifiedAt}</time></small>
          <Metric label={copy.suitability} value={summary.score === null ? copy.notVerified : `${summary.score} / 10`} />
          <Metric label={copy.confidence} value={summary.confidence} />
          <Metric label={copy.coverage} value={`${summary.coverage.verified} / ${summary.coverage.applicable}`} />
          <div className="best-for"><span>{copy.bestFor}</span><strong>{tool.bestFor.map((item) => item[language]).join(" · ")}</strong></div>
        </article>;
      })}
    </section>

    <section className="criteria" aria-label={copy.compare}>
      {visibleCriteria.map((criterion) => {
        const left = profiles[leftId]?.assessments[criterion] ?? unverifiedAssessment;
        const right = profiles[rightId]?.assessments[criterion] ?? unverifiedAssessment;
        const weight = preset.weights[criterion] ?? 0;
        return <details className="criterion" key={criterion}>
          <summary><span className="criterion-name">{criterionLabels[criterion][language]} <small>{weight}%</small></span><span>{criterionLabel(left, copy)}</span><span>{criterionLabel(right, copy)}</span></summary>
          <div className="evidence-grid">
            {[left, right].map((item, index) => <div key={index}><strong>{index === 0 ? leftTool.name[language] : rightTool.name[language]}</strong><p>{item.rationale[language]}</p>{item.evidence.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a>)}</div>)}
          </div>
        </details>;
      })}
    </section>

    <section className="conclusion">
      <h2>{docFitTitle}</h2>
      <p className="fit-lead">{docFitReason}</p>
      <div className="conclusion-tools">{[leftTool, rightTool].map((tool, index) => {
        const f = index === 0 ? fit.left : fit.right;
        return <div key={tool.id}><strong><span className="monogram">{tool.name.en[0]}</span>{tool.name[language]}</strong><span>{copy.docFit}: {f.supported.length} / {f.relevant}</span></div>;
      })}</div>
      <div className="conclusion-tools">{[leftTool, rightTool].map((tool) => <div key={tool.id}><strong><span className="monogram">{tool.name.en[0]}</span>{tool.name[language]}</strong><span>{copy.chooseWhen}</span><p>{tool.bestFor.map((item) => item[language]).join("; ")}.</p></div>)}</div>
      <p className="neutral">{copy.neutral}</p>
    </section>

    <details className="disclosure">
      <summary>{copy.docFitWhy}</summary>
      <p>{copy.docFitReq}: {fit.requirements.required.map((c) => criterionLabels[c][language]).join(", ")}.</p>
      <p>{copy.docFitPref}: {fit.requirements.preferred.map((c) => criterionLabels[c][language]).join(", ") || copy.docFitNone}.</p>
      <p><strong>{leftTool.name[language]}</strong> — {copy.docFitMatched}: {fit.left.supported.map((c) => criterionLabels[c][language]).join(", ") || copy.docFitNone}; {copy.docFitUnknown}: {fit.left.unknown.map((c) => criterionLabels[c][language]).join(", ") || copy.docFitNone}; {copy.docFitUnsupported}: {fit.left.notSupported.map((c) => criterionLabels[c][language]).join(", ") || copy.docFitNone}.</p>
      <p><strong>{rightTool.name[language]}</strong> — {copy.docFitMatched}: {fit.right.supported.map((c) => criterionLabels[c][language]).join(", ") || copy.docFitNone}; {copy.docFitUnknown}: {fit.right.unknown.map((c) => criterionLabels[c][language]).join(", ") || copy.docFitNone}; {copy.docFitUnsupported}: {fit.right.notSupported.map((c) => criterionLabels[c][language]).join(", ") || copy.docFitNone}.</p>
      <p>{copy.docFitCoverage}: {leftTool.name[language]} {fit.left.supported.length + fit.left.notSupported.length}/{fit.left.relevant}, {rightTool.name[language]} {fit.right.supported.length + fit.right.notSupported.length}/{fit.right.relevant}. {copy.docFitNote}</p>
    </details>

    <details className="disclosure">
      <summary>{copy.whyResult}</summary>
      <p>{copy.whyResultBody}</p>
    </details>
  </main>;
}
