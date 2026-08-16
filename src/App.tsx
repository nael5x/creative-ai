import { useEffect, useState } from "react";
import { Advisor } from "./components/Advisor";
import { ComparisonWorkspace } from "./components/ComparisonWorkspace";
import { Directory } from "./components/Directory";
import { DomainPage } from "./components/DomainPage";
import { ToolPage } from "./components/ToolPage";
import { ComponentPage } from "./components/ComponentPage";
import { GuidePage } from "./components/GuidePage";
import { GuidesPage } from "./components/GuidesPage";
import { FitPage } from "./components/FitPage";
import { MatrixPage } from "./components/MatrixPage";
import { WatchlistPage } from "./components/WatchlistPage";
import { DealsPage } from "./components/DealsPage";
import { AskPanel } from "./components/AskPanel";
import { WizardShell } from "./components/WizardShell";
import { decodeWatchlist } from "./lib/watchlist";
import { Updates } from "./components/Updates";
import { EditorialDashboard } from "./components/EditorialDashboard";
import { domains } from "./data/domains";
import { presets } from "./data/presets";
import { ui } from "./i18n";
import { parseUrl, serializeUrl, type UrlState } from "./lib/urlState";
import type { Language } from "./types";

export function App() {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem("creative-ai-language") === "ar" ? "ar" : "en");
  const [state, setState] = useState<UrlState>(() => parseUrl(window.location.search));
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [askOpen, setAskOpen] = useState(false);
  const copy = ui[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("creative-ai-language", language);
  }, [language]);

  useEffect(() => {
    const sync = () => setState(parseUrl(window.location.search));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  function update(next: Partial<UrlState>) {
    const value = { ...state, ...next };
    if (value.left && value.right && value.left === value.right) return;
    window.history.pushState({}, "", serializeUrl(value));
    setState(value);
    const recent = JSON.parse(localStorage.getItem("creative-ai-recent-v1") ?? "[]") as string[];
    localStorage.setItem("creative-ai-recent-v1", JSON.stringify([`${value.left},${value.right},${value.mode}`, ...recent.filter((item) => !item.startsWith(`${value.left},${value.right},`))].slice(0, 5)));
  }

  const showPage = !!state.view;

  function renderView() {
    switch (state.view) {
      case "domain": return <DomainPage language={language} copy={copy} viewId={state.viewId!} onState={update} />;
      case "tool": return <ToolPage language={language} copy={copy} viewId={state.viewId!} onState={update} />;
      case "component": return <ComponentPage language={language} copy={copy} viewId={state.viewId!} onState={update} />;
      case "guide": return <GuidePage language={language} copy={copy} viewId={state.viewId!} />;
      case "guides": return <GuidesPage language={language} copy={copy} />;
      case "fit": return <FitPage language={language} copy={copy} fitTool={state.fitTool ?? state.left} fitDomain={state.fitDomain ?? "research"} onState={update} />;
      case "matrix": return <MatrixPage language={language} copy={copy} domainId={state.fitDomain} onState={update} />;
      case "watchlist": return <WatchlistPage language={language} copy={copy} shared={state.shared ? decodeWatchlist(state.shared) : undefined} onState={update} />;
      case "deals": return <DealsPage language={language} copy={copy} onState={update} />;
      case "wizard": return <WizardShell language={language} copy={copy} state={state} onState={update} onCompare={(left, right, mode) => { update({ view: undefined, viewId: undefined, left, right, mode }); requestAnimationFrame(() => document.getElementById("compare")?.scrollIntoView()); }} />;
      case "editor": return <EditorialDashboard language={language} copy={copy} />;
      default: return <main className="page-width"><p>{language === "ar" ? "غير معروف" : "Unknown view"}</p></main>;
    }
  }

  return <>
    <header className="site-header"><div className="page-width header-inner"><a className="brand" href="#top" aria-label="Creative AI">CREATIVE <span>AI</span></a><nav aria-label="Primary"><a href="#top">{copy.domains}</a><a href="#compare">{copy.compare}</a><a href="#directory">{copy.directory}</a><a href={import.meta.env.BASE_URL + "?view=guides"}>{copy.guides}</a><a href={import.meta.env.BASE_URL + "?view=matrix"}>{copy.matrix}</a><a href={import.meta.env.BASE_URL + "?view=watchlist"}>{copy.watchlist}</a><a href={import.meta.env.BASE_URL + "?view=deals"}>{copy.deals}</a><a href={import.meta.env.BASE_URL + "?view=wizard"}>{copy.wizard}</a><a href="#updates">{copy.updates}</a><a href="#methodology">{copy.methodology}</a></nav><button className="language" onClick={() => setAskOpen(true)}>❓ {copy.ask}</button><button className="language" onClick={() => setLanguage((value) => value === "en" ? "ar" : "en")}>◎ {language === "en" ? "العربية" : "English"}</button></div></header>

    {showPage ? renderView() : (
      <>
        <section id="top" className="domain-hero page-width">
          <div className="hero-intro"><h1>{copy.domainHero}</h1><p>{copy.domainHeroSub}</p><button className="primary wizard-hero-cta" data-testid="launch-wizard" onClick={() => update({ view: "wizard", wizardStep: 1 })}>✦ {copy.wizardTitle} →</button></div>
          <div className="domain-grid">
            {domains.map((d) => <button key={d.id} className="domain-card" onClick={() => update({ view: "domain", viewId: d.id })}><strong>{d.name[language]}</strong><span>{d.description[language]}</span></button>)}
          </div>
        </section>
        <ComparisonWorkspace language={language} copy={copy} leftId={state.left} rightId={state.right} mode={state.mode} onState={update} onAsk={() => setAdvisorOpen(true)} />
        <section id="methodology" className="method page-width"><div><h2>{copy.how}</h2><p>{copy.howText}</p><a href="#method-details">{copy.openMethod} ↓</a></div><dl><div><dt>12</dt><dd>{copy.published}</dd></div><div><dt>50%</dt><dd>{language === "ar" ? "حد التغطية الأدنى" : "minimum score coverage"}</dd></div><div><dt>0–10</dt><dd>{language === "ar" ? "مقياس تحريري" : "editorial scale"}</dd></div></dl></section>
        <Directory language={language} copy={copy} onCompare={(right) => { const left = right === state.left ? state.right : state.left; update({ left, right }); document.getElementById("compare")?.scrollIntoView(); }} onState={update} />
        <Updates copy={copy} onState={update} />
        <section id="method-details" className="method-details page-width"><div className="section-heading"><div><h2>{copy.methodology}</h2><p>{copy.disclosure}</p></div></div><div className="method-columns"><article><h3>{language === "ar" ? "هرمية المصادر" : "Source hierarchy"}</h3><p>{language === "ar" ? "الوثائق والصفحات الرسمية ومستودعات GitHub الرسمية أولًا. مواقع الاكتشاف إشارات فقط ولا تثبت الادعاء." : "Official documentation, product pages and official GitHub repositories first. Discovery sites are signals only and do not prove a claim."}</p></article><article><h3>{copy.weights}</h3><p>{presets.map((preset) => `${preset.label[language]}: ${Object.values(preset.weights).reduce((a, b) => a + b, 0)}%`).join(" · ")}</p></article><article><h3>{language === "ar" ? "سلم التقييم" : "Scoring rubric"}</h3><p>{language === "ar" ? "0–2 غائب أو شديد المحدودية؛ 3–4 محدود؛ 5–6 أساسي؛ 7–8 قوي وموثق؛ 9–10 واسع وناضج وموثق. جودة المخرجات لا تُقيّم دون اختبار موثق قابل للتكرار." : "0–2 absent or severely limited; 3–4 limited; 5–6 basic; 7–8 strong and documented; 9–10 broad, mature and documented. Output quality is withheld without a reproducible documented test."}</p></article><article><h3>{language === "ar" ? "البيانات الناقصة" : "Missing data"}</h3><p>{language === "ar" ? "غير موثق لا يساوي صفرًا، ولا ينطبق يُستبعد من الحساب. لا تظهر نتيجة إذا كانت التغطية أقل من 50%." : "Not verified never equals zero; not applicable is excluded. No score is shown below 50% coverage."}</p></article><article><h3>{language === "ar" ? "التصحيحات" : "Corrections"}</h3><p><a href="https://github.com/nael5x/creative-ai/issues/new" target="_blank" rel="noreferrer">{copy.report} ↗</a></p></article></div></section>
      </>
    )}

    <footer><div className="page-width"><strong>CREATIVE <span>AI</span></strong><p>{copy.disclosure}</p><button className="link-name" onClick={() => update({ view: "editor", viewId: undefined, left: state.left, right: state.right, mode: state.mode })}>{copy.editorial}</button></div></footer>
    {advisorOpen ? <Advisor language={language} copy={copy} onClose={() => setAdvisorOpen(false)} onChoose={(left, right, mode) => { update({ left, right, mode }); setAdvisorOpen(false); }} onState={update} /> : null}
    {askOpen ? <AskPanel language={language} copy={copy} onClose={() => setAskOpen(false)} /> : null}
  </>;
}
