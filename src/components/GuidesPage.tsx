import type { Language } from "../types";
import type { Copy } from "../i18n";
import { guides } from "../data/guides";

export function GuidesPage({ language, copy }: { language: Language; copy: Copy }) {
  return (
    <main className="page-width guides-page">
      <h1>{copy.guides}</h1>
      <p className="guide-summary">{copy.guideSummary}</p>
      <ul className="guides-list">
        {guides.map((g) => (
          <li key={g.id}>
            <a href={`/?view=guide&id=${g.id}`}>{g.title[language]}</a>
            <p>{g.summary[language]}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
