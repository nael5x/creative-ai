import React, { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
const SideRays = lazy(() => import('../vendor/react-bits/SideRays.jsx'));
const Antigravity = lazy(() => import('../vendor/react-bits/Antigravity.jsx'));
const MagicBento = lazy(() => import('../vendor/react-bits/MagicBento.jsx'));
const GradientText = lazy(() => import('../vendor/react-bits/GradientText.jsx'));
const SpotlightCard = lazy(() => import('../vendor/react-bits/SpotlightCard.jsx'));
const LogoLoop = lazy(() => import('../vendor/react-bits/LogoLoop.jsx'));
const AnimatedContent = lazy(() => import('../vendor/react-bits/AnimatedContent.jsx'));
const PillNav = lazy(() => import('../vendor/react-bits/PillNav.jsx'));
const ChromaGrid = lazy(() => import('../vendor/react-bits/ChromaGrid.jsx'));
const CountUp = lazy(() => import('../vendor/react-bits/CountUp.jsx'));
import '../vendor/react-bits/SideRays.css';
import '../vendor/react-bits/Antigravity.css';
import '../vendor/react-bits/MagicBento.css';
import '../vendor/react-bits/GradientText.css';
import '../vendor/react-bits/SpotlightCard.css';
import '../vendor/react-bits/LogoLoop.css';
import '../vendor/react-bits/PillNav.css';
import '../vendor/react-bits/ChromaGrid.css';
import './creative-ai-components.css';

// Component islands load their heavy visuals only when their section approaches the viewport.
// Keep the current hashed chunks beside the static component entrypoint.
const PALETTE = ['#b99aff', '#8b5cf6', '#6d5dfc', '#d5c3ff'];
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const iconFor = url => { try { return new URL('/favicon.ico', new URL(url).origin).href; } catch { return ''; } };
const validTool = row => Array.isArray(row) && row.length === 6 && row.every(v => typeof v === 'string' && v.trim()) && /^https?:\/\//.test(row[5]);

function Deferred({ children, fallback = null }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || ready) return undefined;
    if (!('IntersectionObserver' in window)) { setReady(true); return undefined; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '260px 0px', threshold: 0.01 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);
  return <div ref={ref}>{ready ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}</div>;
}

function useLanguage() {
  const [lang, setLang] = useState(document.documentElement.lang === 'ar' || new URLSearchParams(location.search).get('lang') === 'ar' ? 'ar' : 'en');
  useEffect(() => {
    const sync = () => setLang(document.documentElement.lang === 'ar' ? 'ar' : 'en');
    window.addEventListener('creative-ai-language-change', sync);
    return () => window.removeEventListener('creative-ai-language-change', sync);
  }, []);
  return lang;
}

function Navigation() {
  const lang = useLanguage();
  const items = lang === 'ar'
    ? [{label:'الأدوات',href:'tools.html?lang=ar'},{label:'التصنيفات',href:'categories.html?lang=ar'},{label:'الجديد',href:'new.html?lang=ar'},{label:'التحديثات',href:'updates.html?lang=ar'},{label:'المقارنة',href:'compare.html?lang=ar'}]
    : [{label:'Tools',href:'tools.html'},{label:'Categories',href:'categories.html'},{label:'New',href:'new.html'},{label:'Updates',href:'updates.html'},{label:'Compare',href:'compare.html?lang=en'}];
  return <Suspense fallback={<nav className="nav ca-nav-fallback">{items.map(item=><a href={item.href} key={item.href}>{item.label}</a>)}</nav>}><PillNav logo={<span className="ca-nav-mark">&lt;/&gt;</span>} logoAlt="Creative AI" logoHref="./" items={items} activeHref={location.pathname.split('/').pop() === 'index.html' ? './' : location.pathname.split('/').pop()} theme="dark" layout="split" size="md" surface="glass" hoverEffect="glide" indicator="pill" highlightColor="#a98aff" highlightTextColor="#100b20" collapse="auto" ariaLabel={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'} /></Suspense>;
}

function Metrics({ tools, categories, sources, lang }) {
  const labels = lang === 'ar' ? ['أداة تتم صيانتها','تصنيفاً','مصدراً تتم متابعته'] : ['Maintained tools','Categories','Monitored sources'];
  return <div className="ca-metrics" aria-label={lang === 'ar' ? 'إحصائيات الدليل' : 'Verified catalog metrics'}>
    <div><strong data-countup="tools"><Suspense fallback={tools.toLocaleString()}><CountUp to={tools} duration={1.35} trigger="view" separator="," /></Suspense></strong><span>{labels[0]}</span></div>
    <div><strong data-countup="categories"><Suspense fallback={categories}><CountUp to={categories} duration={1.2} trigger="view" /></Suspense></strong><span>{labels[1]}</span></div>
    <div><strong data-countup="sources"><Suspense fallback={sources}><CountUp to={sources} duration={1.1} trigger="view" /></Suspense></strong><span>{labels[2]}</span></div>
  </div>;
}

function HeroEffects() {
  return <div className="ca-hero-effects" aria-hidden="true"><div className="ca-side-rays"><Suspense fallback={null}><SideRays rayColor1="#8b5cf6" rayColor2="#c4b5fd" blend={0.62} origin="top-right" speed={0.55} intensity={1.15} spread={1.65} density={4} sharpness={0.34} tilt={-4} falloff={1.9} glow={0.7} saturation={0.82} dust={0.04} followMouse={false} intro opacity={0.58} maxDevicePixelRatio={1.25} /></Suspense></div><div className="ca-antigravity"><Suspense fallback={null}><Antigravity count={105} magnetRadius={5} ringRadius={6.5} waveSpeed={0.25} waveAmplitude={0.42} particleSize={0.72} lerpSpeed={0.035} colors={['#8b5cf6','#b99aff','#6d5dfc']} colorMode="conic" autoAnimate particleVariance={0.7} rotationSpeed={0.018} depthFactor={0.7} pulseSpeed={2.2} particleShape="sphere" fieldStrength={8} ambient={0.18} interactive={false} clickBurst={false} intro opacity={0.58} maxDevicePixelRatio={1.2} /></Suspense></div></div>;
}
function HeroAccent() {
  const lang = useLanguage();
  const label = lang === 'ar' ? 'اكتشف · قارن · ابنِ' : 'DISCOVER · COMPARE · BUILD';
  return <div className="ca-gradient-kicker" dir={lang === 'ar' ? 'rtl' : 'ltr'}><Suspense fallback={<span>{label}</span>}><GradientText colors={PALETTE} animationSpeed={12} variant="flow" scale={2} glow={0.18} pauseOnHover>{label}</GradientText></Suspense></div>;
}
function HeroMetrics() {
  const lang = useLanguage();
  const [catalog, setCatalog] = useState([]);
  const [sources, setSources] = useState(0);
  useEffect(() => {
    fetch('data/tools.json').then(r => r.ok ? r.json() : []).then(rows => setCatalog(rows.filter(validTool))).catch(() => {});
    fetch('data/updates.json').then(r => r.ok ? r.json() : null).then(data => setSources(Array.isArray(data?.sources) ? data.sources.length : 0)).catch(() => {});
  }, []);
  return <Metrics tools={catalog.length} categories={new Set(catalog.map(row => row[1])).size} sources={sources} lang={lang} />;
}

function HomeIslands() {
  const lang = useLanguage();
  const ar = lang === 'ar';
  const [catalog, setCatalog] = useState([]);
  const [sourceCount, setSourceCount] = useState(0);
  useEffect(() => {
    fetch('data/tools.json').then(r => r.ok ? r.json() : []).then(rows => setCatalog(rows.filter(validTool))).catch(() => {});
    fetch('data/updates.json').then(r => r.ok ? r.json() : null).then(data => {
      const sources = Array.isArray(data?.sources) ? data.sources : [];
      setSourceCount(sources.length);
    }).catch(() => {});
  }, []);
  const categories = useMemo(() => {
    const map = new Map();
    catalog.forEach(row => {
      const current = map.get(row[1]) || { count: 0, image: iconFor(row[5]), title: row[1], subtitle: ar ? 'استكشف الأدوات المُحدّثة' : 'Explore maintained tools', accent: PALETTE[map.size % PALETTE.length], url: 'category.html?category=' + encodeURIComponent(row[1]) };
      current.count += 1;
      if (!current.image) current.image = iconFor(row[5]);
      map.set(row[1], current);
    });
    return [...map.values()].sort((a,b) => b.count - a.count).slice(0, 8);
  }, [catalog]);
  const logos = useMemo(() => catalog.slice(0, 12).map(row => ({ src: iconFor(row[5]), alt: row[0], title: row[0], href: row[5] })).filter(item => item.src), [catalog]);

  return <>
    <section className="ca-bento-section" dir={ar ? 'rtl' : 'ltr'}>
      <div className="ca-section-heading"><span>{ar ? 'ما يميز كرييتف إيه آي' : 'THE CREATIVE AI ADVANTAGE'}</span><h2>{ar ? 'من الاكتشاف إلى القرار الصحيح.' : 'From discovery to the right decision.'}</h2><p>{ar ? 'دليل واحد مُحدّث. طرق عملية للعثور على الأدوات ومقارنتها واختيارها.' : 'One maintained catalog. Practical ways to find, compare and choose.'}</p></div>
      <Deferred fallback={<div className="ca-component-placeholder" /> }><MagicBento columns={3} rowHeight={174} gap={14} radius={20} theme="dark" glowColor="132, 91, 235" textAutoHide={false} enableBorderGlow enableSpotlight enableStars={false} particleCount={0} enableTilt={false} enableMagnetism={false} clickEffect intro items={[
        {title:ar?'اعثر على الأداة المناسبة':'Find the right tool',description:ar?'ابدأ بالمهمة والقيود والميزانية.':'Start with your task, constraints and budget.',visual:'analytics'},
        {title:ar?'قارن الإمكانات':'Compare capabilities',description:ar?'افهم الفروقات العملية قبل الاختيار.':'Understand practical differences before choosing.',visual:'dashboard'},
        {title:ar?'استكشف التصنيفات':'Explore categories',description:ar?'تصفح الأدوات حسب العمل الذي تريد إنجازه.':'Browse tools by the work you need to do.',visual:'collaboration',colSpan:1,rowSpan:1},
        {title:ar?'تابع التحديثات الرسمية':'Track official updates',description:ar?'تابع تغييرات الإصدارات من المصادر المراقبة.':'Follow release changes from monitored sources.',visual:'automation',colSpan:1,rowSpan:1},
        {title:ar?'ابنِ مجموعة أدواتك':'Build your AI stack',description:ar?'نظّم الأدوات التي تناسب سير عملك.':'Organize tools that fit your actual workflow.',visual:'integration',colSpan:1,rowSpan:1},
        {title:ar?'اعتمد التفاصيل الموثوقة':'Use verified details',description:ar?'قدّم المعلومات المُحدّثة على الادعاءات التسويقية.':'Prioritize maintained facts over marketing claims.',visual:'security',colSpan:1,rowSpan:1}
      ]} /></Deferred>
    </section>
    <section className="ca-logo-section" dir={ar ? 'rtl' : 'ltr'}><div className="ca-section-heading compact"><span>{ar?'أدوات في الدليل':'TOOLS IN THE CATALOG'}</span><p>{ar?'شعارات وأسماء حقيقية لأدوات موجودة في الدليل.':'Real tool identities from the maintained catalog.'}</p></div>{logos.length > 0 && <Deferred fallback={<div className="ca-component-placeholder ca-logo-placeholder" />}><LogoLoop logos={logos} speed={34} direction="left" logoHeight={30} gap={36} pauseOnHover fadeOut scaleOnHover layout="line" muted={0.08} labels="hover" draggable={false} intro ariaLabel="AI tools in the Creative AI catalog" /></Deferred>}</section>
    <section className="ca-chroma-section" dir={ar ? 'rtl' : 'ltr'}><div className="ca-section-heading"><span>{ar?'استكشف المجال':'EXPLORE THE LANDSCAPE'}</span><h2>{ar?'تصفح حسب التصنيف.':'Browse by category.'}</h2><p>{ar?'بطاقات التصنيفات مبنية على بيانات الأدوات الموجودة فعلياً.':'Category cards are generated from real catalog entries.'}</p></div>{categories.length > 0 && <Deferred fallback={<div className="ca-component-placeholder ca-grid-placeholder" />}><ChromaGrid items={categories.map(item=>({...item,subtitle:ar?item.count+' أداة مُحدّثة':item.count+' maintained tools'}))} columns={4} gap={14} radius={230} softness={0.68} damping={0.48} fadeOut={0.55} grayscale={1} dim={0.12} glow={0.42} borderGlow={0.75} reveal="spotlight" aspectRatio="4 / 3" cardRadius={18} showInfo theme="dark" /></Deferred>}</section>
    <section className="ca-featured-section" dir={ar ? 'rtl' : 'ltr'}><Deferred fallback={<div className="ca-component-placeholder ca-featured-placeholder" />}><SpotlightCard className="ca-featured-card" spotlightColor="rgba(157, 116, 255, 0.2)" intensity={0.18} spotlightSize={300} softness={0.72} borderGlow={0.8} ambient theme="dark"><span className="ca-featured-label">{ar?'طريقة أفضل للاختيار':'A BETTER WAY TO CHOOSE'}</span><h2>{ar?'تصفح أقل. قرارات أفضل.':'Less scrolling. Better decisions.'}</h2><p>{ar?'ابحث وقارن وراجع البدائل وابنِ مجموعة أدوات ذكاء اصطناعي مفيدة بالاعتماد على مصدر واحد مُحدّث.':'Search, compare, review alternatives and build a useful AI stack using one maintained source of truth.'}</p><a href={ar?'recommend.html?lang=ar':'recommend.html?lang=en'}>{ar?'اعثر على الأداة المناسبة':'Find the right tool'} <span aria-hidden="true">↗</span></a></SpotlightCard></Deferred></section>
  </>;
}

function AnimatedIntro() {
  const lang = useLanguage();
  const ar = lang === 'ar';
  return <Deferred fallback={<div className="ca-animated-placeholder" />}><AnimatedContent direction="vertical" distance={24} duration={0.7} ease="power2.out" initialOpacity={0} blur={2} trigger="scroll" once className="ca-animated-intro" ><div dir={ar?'rtl':'ltr'}><span>{ar?'مصمم لسير العمل الحقيقي':'CURATED FOR REAL WORKFLOWS'}</span><h2>{ar?'استكشف الدليل بوضوح.':'Explore the catalog with clarity.'}</h2><p>{ar?'انتقل من تحديد المهمة إلى قائمة مختصرة، ثم قارن ما يهمك.':'Move from a task to a shortlist, then compare what matters.'}</p></div></AnimatedContent></Deferred>;
}

function mount(id, element) {
  const host = document.getElementById(id);
  if (!host || host.dataset.reactMounted) return;
  host.dataset.reactMounted = 'true';
  createRoot(host).render(element);
}

function boot() {
  document.body.classList.add('ca-components-ready');
  mount('creativeAiNavMount', <Navigation />);
  mount('creativeAiHeroEffectsMount', <HeroEffects />);
  mount('creativeAiHeroAccentMount', <HeroAccent />);
  mount('creativeAiMetricsMount', <HeroMetrics />);
  mount('creativeAiComponentsMount', <HomeIslands />);
  mount('creativeAiAnimatedMount', <AnimatedIntro />);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true }); else boot();
