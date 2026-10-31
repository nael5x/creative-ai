import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import SideRays from '../vendor/react-bits/SideRays.jsx';
import Antigravity from '../vendor/react-bits/Antigravity.jsx';
import MagicBento from '../vendor/react-bits/MagicBento.jsx';
import GradientText from '../vendor/react-bits/GradientText.jsx';
import SpotlightCard from '../vendor/react-bits/SpotlightCard.jsx';
import LogoLoop from '../vendor/react-bits/LogoLoop.jsx';
import AnimatedContent from '../vendor/react-bits/AnimatedContent.jsx';
import PillNav from '../vendor/react-bits/PillNav.jsx';
import ChromaGrid from '../vendor/react-bits/ChromaGrid.jsx';
import CountUp from '../vendor/react-bits/CountUp.jsx';
import '../vendor/react-bits/SideRays.css';
import '../vendor/react-bits/Antigravity.css';
import '../vendor/react-bits/MagicBento.css';
import '../vendor/react-bits/GradientText.css';
import '../vendor/react-bits/SpotlightCard.css';
import '../vendor/react-bits/LogoLoop.css';
import '../vendor/react-bits/PillNav.css';
import '../vendor/react-bits/ChromaGrid.css';
import './creative-ai-components.css';

const PALETTE = ['#b99aff', '#8b5cf6', '#6d5dfc', '#d5c3ff'];
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const iconFor = url => { try { return new URL('/favicon.ico', new URL(url).origin).href; } catch { return ''; } };
const validTool = row => Array.isArray(row) && row.length === 6 && row.every(v => typeof v === 'string' && v.trim()) && /^https?:\/\//.test(row[5]);

function Navigation() {
  const [lang, setLang] = useState(new URLSearchParams(location.search).get('lang') === 'ar' ? 'ar' : 'en');
  useEffect(() => {
    const button = document.getElementById('lang');
    if (!button) return;
    const sync = () => setLang(new URLSearchParams(location.search).get('lang') === 'ar' ? 'ar' : 'en');
    button.addEventListener('click', sync);
    return () => button.removeEventListener('click', sync);
  }, []);
  const items = lang === 'ar'
    ? [{label:'الأدوات',href:'tools.html?lang=ar'},{label:'التصنيفات',href:'categories.html?lang=ar'},{label:'الجديد',href:'new.html?lang=ar'},{label:'التحديثات',href:'updates.html?lang=ar'},{label:'المقارنة',href:'compare.html?lang=ar'}]
    : [{label:'Tools',href:'tools.html'},{label:'Categories',href:'categories.html'},{label:'New',href:'new.html'},{label:'Updates',href:'updates.html'},{label:'Compare',href:'compare.html?lang=en'}];
  return <PillNav logo={<span className="ca-nav-mark">&lt;/&gt;</span>} logoAlt="Creative AI" logoHref="./" items={items} activeHref={location.pathname.split('/').pop() === 'index.html' ? './' : location.pathname.split('/').pop()} theme="dark" layout="split" size="md" surface="glass" hoverEffect="glide" indicator="pill" highlightColor="#a98aff" highlightTextColor="#100b20" collapse="auto" ariaLabel={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'} />;
}

function Metrics({ tools, categories, sources }) {
  return <div className="ca-metrics" aria-label="Verified catalog metrics">
    <div><strong><CountUp to={tools} duration={1.35} trigger="view" separator="," /></strong><span>Maintained tools</span></div>
    <div><strong><CountUp to={categories} duration={1.2} trigger="view" /></strong><span>Categories</span></div>
    <div><strong><CountUp to={sources} duration={1.1} trigger="view" /></strong><span>Monitored sources</span></div>
  </div>;
}

function HomeIslands() {
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
      const current = map.get(row[1]) || { count: 0, image: iconFor(row[5]), title: row[1], subtitle: 'Explore maintained tools', accent: PALETTE[map.size % PALETTE.length], url: 'category.html?category=' + encodeURIComponent(row[1]) };
      current.count += 1;
      if (!current.image) current.image = iconFor(row[5]);
      map.set(row[1], current);
    });
    return [...map.values()].sort((a,b) => b.count - a.count).slice(0, 8);
  }, [catalog]);
  const logos = useMemo(() => catalog.slice(0, 12).map(row => ({ src: iconFor(row[5]), alt: row[0], title: row[0], href: row[5] })).filter(item => item.src), [catalog]);

  return <>
    <div className="ca-hero-effects" aria-hidden="true">
      <div className="ca-side-rays"><SideRays rayColor1="#8b5cf6" rayColor2="#c4b5fd" blend={0.62} origin="top-right" speed={0.55} intensity={1.15} spread={1.65} density={4} sharpness={0.34} tilt={-4} falloff={1.9} glow={0.7} saturation={0.82} dust={0.04} followMouse={false} intro opacity={0.58} maxDevicePixelRatio={1.25} /></div>
      <div className="ca-antigravity"><Antigravity count={105} magnetRadius={5} ringRadius={6.5} waveSpeed={0.25} waveAmplitude={0.42} particleSize={0.72} lerpSpeed={0.035} colors={['#8b5cf6','#b99aff','#6d5dfc']} colorMode="conic" autoAnimate particleVariance={0.7} rotationSpeed={0.018} depthFactor={0.7} pulseSpeed={2.2} particleShape="sphere" fieldStrength={8} ambient={0.18} interactive={false} clickBurst={false} intro opacity={0.58} maxDevicePixelRatio={1.2} /></div>
    </div>
    <div className="ca-gradient-kicker"><GradientText colors={PALETTE} animationSpeed={12} variant="flow" scale={2} glow={0.18} pauseOnHover>DISCOVER · COMPARE · BUILD</GradientText></div>
    <div className="ca-metrics-mount"><Metrics tools={catalog.length} categories={categories.length ? new Set(catalog.map(row=>row[1])).size : 0} sources={sourceCount} /></div>
    <section className="ca-bento-section">
      <div className="ca-section-heading"><span>THE CREATIVE AI ADVANTAGE</span><h2>From discovery to the right decision.</h2><p>One maintained catalog. Practical ways to find, compare and choose.</p></div>
      <MagicBento columns={3} rowHeight={174} gap={14} radius={20} theme="dark" glowColor="132, 91, 235" textAutoHide={false} enableBorderGlow enableSpotlight enableStars={false} particleCount={0} enableTilt={false} enableMagnetism={false} clickEffect intro items={[
        {title:'Find the right tool',description:'Start with your task, constraints and budget.',visual:'analytics'},
        {title:'Compare capabilities',description:'Understand practical differences before choosing.',visual:'dashboard'},
        {title:'Explore categories',description:'Browse tools by the work you need to do.',visual:'collaboration',colSpan:1,rowSpan:1},
        {title:'Track official updates',description:'Follow release changes from monitored sources.',visual:'automation',colSpan:1,rowSpan:1},
        {title:'Build your AI stack',description:'Organize tools that fit your actual workflow.',visual:'integration',colSpan:1,rowSpan:1},
        {title:'Use verified details',description:'Prioritize maintained facts over marketing claims.',visual:'security',colSpan:1,rowSpan:1}
      ]} />
    </section>
    <section className="ca-logo-section"><div className="ca-section-heading compact"><span>TOOLS IN THE CATALOG</span><p>Real tool identities from the maintained catalog.</p></div>{logos.length > 0 && <LogoLoop logos={logos} speed={34} direction="left" logoHeight={30} gap={36} pauseOnHover fadeOut scaleOnHover layout="line" muted={0.08} labels="hover" draggable={false} intro ariaLabel="AI tools in the Creative AI catalog" />}</section>
    <section className="ca-chroma-section"><div className="ca-section-heading"><span>EXPLORE THE LANDSCAPE</span><h2>Browse by category.</h2><p>Category cards are generated from real catalog entries.</p></div>{categories.length > 0 && <ChromaGrid items={categories.map(item=>({...item,subtitle:item.count+' maintained tools'}))} columns={4} gap={14} radius={230} softness={0.68} damping={0.48} fadeOut={0.55} grayscale={1} dim={0.12} glow={0.42} borderGlow={0.75} reveal="spotlight" aspectRatio="4 / 3" cardRadius={18} showInfo theme="dark" />}</section>
    <section className="ca-featured-section"><SpotlightCard className="ca-featured-card" spotlightColor="rgba(157, 116, 255, 0.2)" intensity={0.18} spotlightSize={300} softness={0.72} borderGlow={0.8} ambient theme="dark"><span className="ca-featured-label">A BETTER WAY TO CHOOSE</span><h2>Less scrolling. Better decisions.</h2><p>Search, compare, review alternatives and build a useful AI stack using one maintained source of truth.</p><a href="recommend.html?lang=en">Find the right tool <span aria-hidden="true">↗</span></a></SpotlightCard></section>
  </>;
}

function AnimatedIntro() {
  return <AnimatedContent direction="vertical" distance={24} duration={0.7} ease="power2.out" initialOpacity={0} blur={2} trigger="scroll" once className="ca-animated-intro"><span>CURATED FOR REAL WORKFLOWS</span><h2>Explore the catalog with clarity.</h2><p>Move from a task to a shortlist, then compare what matters.</p></AnimatedContent>;
}

function mount(id, element) {
  const host = document.getElementById(id);
  if (!host || host.dataset.reactMounted) return;
  host.dataset.reactMounted = 'true';
  createRoot(host).render(element);
}

function boot() {
  mount('creativeAiNavMount', <Navigation />);
  mount('creativeAiComponentsMount', <HomeIslands />);
  mount('creativeAiAnimatedMount', <AnimatedIntro />);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true }); else boot();
