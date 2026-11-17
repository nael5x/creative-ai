import { useEffect, useState } from 'react'
import { ArrowUpRight, Bookmark, CircleHelp, Moon, Search, Sun } from 'lucide-react'
import openAiLogo from '@lobehub/icons-static-svg/icons/openai.svg?url'
import Antigravity from '@/components/Antigravity'
import BorderGlow from '@/components/BorderGlow'
import { Button } from '@/components/ui/button'
import { FooterNav } from '@/components/ui/footer-nav'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Timeline } from '@/components/ui/timeline'

const timelineData = [
  {
    title: 'Compatibility bench',
    content: <p>One isolated React island, mounted beside the existing static site rather than replacing it.</p>,
  },
  {
    title: 'Original components',
    content: <p>Public React Bits, Aceternity UI and MiniDev source is copied from each publisher’s registry.</p>,
  },
  {
    title: 'Existing data contract',
    content: <p>Stack storage and Compare / Recommend query strings stay owned by the current HTML pages.</p>,
  },
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [webgl2, setWebgl2] = useState<'checking' | 'available' | 'unavailable'>('checking')
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2')
    setWebgl2(gl ? 'available' : 'unavailable')
    gl?.getExtension('WEBGL_lose_context')?.loseContext()
  }, [])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  return (
    <main className="bench-shell">
      <header className="bench-header">
        <a className="wordmark" href="#top" aria-label="Creative AI compatibility bench">
          <span>creative ai <small>COMPATIBILITY BENCH</small></span>
        </a>
        <div className="header-actions">
          <span className={`status-pill ${webgl2}`}><i /> WebGL2 {webgl2}</span>
          <Button variant="outline" size="icon" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true">
          {!reducedMotion && <Antigravity count={700} particleSize={1.1} ringRadius={7.2} maxDevicePixelRatio={1.5} />}
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> COMPATIBILITY STUDY · ISOLATED</p>
          <h1>Find the signal<br /><em>in the noise.</em></h1>
          <p className="hero-summary">A small technical bench for checking original React components against Creative AI’s existing static product.</p>
          <div className="search-shell"><Search size={17} /><span>Search tools, tasks or ideas</span><kbd>/</kbd></div>
          <div className="hero-meta"><span><i className="dot-green" /> React 19</span><span>Vite 7</span><span>Tailwind 4</span></div>
        </div>
        <div className="hero-brand-proof" aria-label="Official ChatGPT product logo from Lobe Icons">
          <img src={openAiLogo} width="22" height="22" alt="OpenAI logo" />
          <span>Brand asset<br /><strong>via Lobe Icons</strong></span>
        </div>
      </section>

      <section className="section-block" aria-labelledby="glow-title">
        <div className="section-heading"><div><p className="eyebrow">02 / SURFACE & MOTION</p><h2 id="glow-title">A living edge,<br /><em>held in restraint.</em></h2></div><p>React Bits BorderGlow<br />Original component source</p></div>
        <BorderGlow className="glow-demo" glowColor="270 90 70" backgroundColor="var(--panel)" borderRadius={22} glowRadius={26}>
          <div className="glow-card-content"><span className="card-index">COMPONENT 01</span><Bookmark size={19} /><h3>Tool discovery,<br />with a point of view.</h3><p>A focused surface for product cards and meaningful actions.</p><Button variant="secondary">Explore tools <ArrowUpRight /></Button></div>
        </BorderGlow>
      </section>

      <section className="section-block" aria-labelledby="bento-title">
        <div className="section-heading"><div><p className="eyebrow">03 / INFORMATION LAYOUT</p><h2 id="bento-title">Make complexity<br /><em>feel navigable.</em></h2></div><p>Aceternity UI<br />Bento Grid + Timeline</p></div>
        <BentoGrid className="bench-grid">
          <BentoGridItem className="bench-grid-large" title="Signals, not spectacle" description="A clear hierarchy keeps the tool catalog useful before it becomes decorative." header={<div className="bento-visual"><div className="signal-lines"><span /><span /><span /><span /></div><div className="signal-orb" /></div>} />
          <BentoGridItem title="Light & dark" description="Semantic tokens switch without changing component structure." header={<div className="theme-swatch"><span /><span /><span /></div>} />
          <BentoGridItem title="Reduced motion" description="The background component checks the system preference." header={<div className="motion-swatch"><span /><span /><span /></div>} />
        </BentoGrid>
        <div className="timeline-wrap"><Timeline data={timelineData} /></div>
      </section>

      <section className="blocked-note" aria-labelledby="blocked-title">
        <CircleHelp size={18} />
        <div><h2 id="blocked-title">BeamSearch source needs access</h2><p>Spectrum UI’s official Code tab asks for an account. This bench leaves it out; no lookalike is used.</p></div>
      </section>

      <FooterNav brand="Creative AI" links={[{ label: 'Current static site', href: 'https://github.com/nael5x/creative-ai' }, { label: 'PoC notes', href: '#top' }]} />
    </main>
  )
}

export default App
