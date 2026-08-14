import { useState } from "react";
import type { Language } from "../types";
import type { Copy } from "../i18n";
import { citeAnswer } from "../lib/ask";

export function AskPanel({ language, copy, onClose }: { language: Language; copy: Copy; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{ answer: string; citations: { label: string; href: string; source: string }[] } | null>(null);

  function submit() {
    setResult(citeAnswer(query, language));
  }

  return (
    <div className="ask-overlay" role="dialog" aria-label={copy.ask} onClick={onClose}>
      <div className="ask-card" onClick={(e) => e.stopPropagation()}>
        <button className="ask-close" onClick={onClose} aria-label={copy.close}>×</button>
        <h2>{copy.ask}</h2>
        <p className="ask-note">{language === "ar" ? "إجابات مبنية فقط على بياناتنا الموثّقة — مع مصادر." : "Answers are built only from our documented data — with sources."}</p>
        <textarea
          className="ask-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={language === "ar" ? "مثال: أداة بحث موثّقة المصادر" : "e.g. a research tool with cited sources"}
          rows={3}
        />
        <button className="primary" onClick={submit}>{copy.continue}</button>

        {result && (
          <div className="ask-result" data-testid="ask-result">
            <p className="ask-answer">{result.answer}</p>
            <ul className="ask-citations">
              {result.citations.map((c, i) => (
                <li key={i}>
                  <a href={c.href}>{c.label}</a>
                  {c.source !== "#" && <a className="ask-source" href={c.source} target="_blank" rel="noopener noreferrer"> ↗ {copy.official}</a>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
