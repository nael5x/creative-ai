import { chromium } from 'playwright';
import { spawn } from 'node:child_process';

const server = spawn('python3', ['-m', 'http.server', '4179', '--bind', '127.0.0.1'], { stdio: 'ignore' });
const errors = [];
let browser;
try {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Static server did not start')), 10000);
    const probe = async () => {
      try {
        const response = await fetch('http://127.0.0.1:4179/');
        if (response.ok) { clearTimeout(timeout); resolve(); }
        else setTimeout(probe, 200);
      } catch { setTimeout(probe, 200); }
    };
    probe();
  });
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', request => errors.push('Request failed: ' + request.url()));
  const response = await page.goto('http://127.0.0.1:4179/', { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error('Homepage did not load');
  // The workflow stages the freshly built Vite bundle before this browser test.
  try {
    await page.waitForFunction(() => document.body.classList.contains('ca-components-ready'), { timeout: 15000 });
  } catch {
    throw new Error('React component entry did not boot. Browser diagnostics: ' + errors.slice(0, 10).join(' | '));
  }
  for (const id of ['creativeAiNavMount','creativeAiHeroEffectsMount','creativeAiHeroAccentMount','creativeAiMetricsMount','creativeAiComponentsMount','creativeAiAnimatedMount']) {
    if (!(await page.locator('#' + id).count())) throw new Error('Missing mount: ' + id);
  }
  await page.waitForSelector('.gradient-text__inner', { timeout: 15000 });
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < pageHeight; y += 650) {
    await page.evaluate(position => window.scrollTo(0, position), y);
    await page.waitForTimeout(180);
  }
  await page.waitForTimeout(2500);
  const visible = await page.evaluate(() => ({
    nav: !!document.querySelector('#creativeAiNavMount a, #creativeAiNavMount button'),
    rays: !!document.querySelector('.side-rays__canvas'),
    antigravity: !!document.querySelector('.antigravity__canvas'),
    bento: !!document.querySelector('.magic-bento'),
    logoLoop: !!document.querySelector('.logoloop'),
    chromaGrid: !!document.querySelector('.chroma-grid'),
    spotlight: !!document.querySelector('.spotlight-card'),
    animated: !!document.querySelector('.ca-animated-intro'),
    metrics: !!document.querySelector('.ca-metrics strong')
  }));
  const missing = Object.entries(visible).filter(([, value]) => !value).map(([key]) => key);
  if (missing.length) throw new Error('Components not mounted: ' + missing.join(', '));
  if (errors.length) throw new Error('Browser errors: ' + errors.slice(0, 8).join(' | '));
  console.log('Creative AI component smoke test passed', JSON.stringify(visible));
} finally {
  if (browser) await browser.close();
  server.kill('SIGTERM');
}
