import type { Language } from "../types";
import type { Copy } from "../i18n";
import { guideMap } from "../data/guides";
import { toolMap } from "../data/tools";
import { componentMap } from "../data/components";
import { domainMap } from "../data/domains";

function refHref(kind: "tool" | "component" | "domain", id: string): string {
  if (kind === "tool") return `/?view=tool&id=${id}`;
  if (kind === "component") return `/?view=component&id=${id}`;
  return `/?view=domain&id=${id}`;
}

function refLabel(kind: "tool" | "component" | "domain", id: string, lang: Language): string {
  if (kind === "tool") return toolMap.get(id)?.name[lang] ?? id;
  if (kind === "component") return componentMap.get(id)?.name[lang] ?? id;
  return domainMap.get(id)?.name[lang] ?? id;
}

export function GuidePage({ language, copy, viewId }: { language: Language; copy: Copy; viewId: string }) {
  const guide = guideMap.get(viewId);

  if (!guide) {
    return (
      <main className="page-width">
        <p>{copy.guide} غير موجود.</p>
        <a className="back-link" href="/?view=guides">{copy.allGuides}</a>
      </main>
    );
  }

  return (
    <main className="page-width guide-page">
      <a className="back-link" href={`/?view=domain&id=${guide.domainId}`}>{copy.backToDomain}</a>
      <h1>{guide.title[language]}</h1>
      <p className="guide-summary">{guide.summary[language]}</p>

      {guide.sections.map((section, i) => (
        <section className="guide-section" key={i}>
          <h2>{section.heading[language]}</h2>
          <p>{section.body[language]}</p>
          {section.refs && section.refs.length > 0 && (
            <div className="ref-chips">
              {section.refs.map((r, j) => (
                <a key={j} className="chip" href={refHref(r.kind, r.id)}>{refLabel(r.kind, r.id, language)}</a>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="guide-related">
        <h3>{copy.relatedInGuide}</h3>
        <div className="ref-chips">
          {guide.relatedToolIds.map((id) => (
            <a key={id} className="chip" href={`/?view=tool&id=${id}`}>{toolMap.get(id)?.name[language] ?? id}</a>
          ))}
          {guide.relatedComponentIds.map((id) => (
            <a key={id} className="chip" href={`/?view=component&id=${id}`}>{componentMap.get(id)?.name[language] ?? id}</a>
          ))}
        </div>
      </section>

      <section className="guide-sources">
        <h3>{copy.guideSources}</h3>
        <ul>
          {guide.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
              {s.verifiedAt ? ` · ${copy.verified} ${s.verifiedAt.slice(0, 10)}` : ""}
            </li>
          ))}
        </ul>
        <p className="guide-updated">{copy.lastUpdated}: {guide.updatedAt.slice(0, 10)}</p>
      </section>
    </main>
  );
}
