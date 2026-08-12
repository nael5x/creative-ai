import { useState } from "react";
import type { Copy } from "../i18n";

const goals = { research: ["perplexity", "chatgpt", "research"], coding: ["cursor", "github-copilot", "coding"], creative: ["midjourney", "adobe-firefly", "image"], private: ["ollama", "hugging-face", "local"] } as const;

export function Advisor({ copy, onClose, onChoose }: { copy: Copy; onClose: () => void; onChoose: (left: string, right: string, mode: string) => void }) {
  const [goal, setGoal] = useState<keyof typeof goals>("research");
  const selected = goals[goal];
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.currentTarget === e.target) onClose(); }}><section className="advisor" role="dialog" aria-modal="true" aria-labelledby="advisor-title"><button className="modal-close" onClick={onClose} aria-label={copy.close}>×</button><h2 id="advisor-title">{copy.advisorTitle}</h2><p>{copy.advisorText}</p><div className="goal-grid">{Object.entries({ research: copy.goalResearch, coding: copy.goalCoding, creative: copy.goalCreative, private: copy.goalPrivate }).map(([id, label]) => <button key={id} className={goal === id ? "selected" : ""} onClick={() => setGoal(id as keyof typeof goals)}>{label}</button>)}</div><button className="primary full" onClick={() => onChoose(selected[0], selected[1], selected[2])}>{copy.continue}</button></section></div>;
}
