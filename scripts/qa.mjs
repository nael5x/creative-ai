import { chromium } from "playwright";

const BASE = process.env.QA_BASE || "http://localhost:5173";
const routes = [
  "/",
  "/?view=domain&id=coding",
  "/?view=tool&id=chatgpt",
  "/?view=component&id=mcp",
  "/?view=editor",
];

const errors = [];
const browser = await chromium.launch();
const page = await browser.newPage();
page.on("console", (msg) => { if (msg.type() === "error") errors.push(`[console] ${msg.text()}`); });
page.on("pageerror", (err) => errors.push(`[pageerror] ${err.message}`));

let failed = false;
for (const route of routes) {
  errors.length = 0;
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const hasMain = await page.locator("main").count();
  const status = errors.length === 0 && hasMain > 0 ? "OK" : "FAIL";
  if (status === "FAIL") failed = true;
  console.log(`${status} ${route} ${errors.length ? "-> " + errors.join("; ") : ""}`);
}

// Exercise the guided Advisor flow on the home page
errors.length = 0;
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: /Ask Creative AI/i }).click();
const advisor = page.locator(".advisor");
await advisor.getByRole("button", { name: /Coding/ }).click();
await advisor.getByRole("button", { name: /Doesn't matter|Paid|Free/i }).first().click();
const advisorOk = (await advisor.getByText(/Recommended starting points/i).count()) > 0;
if (!advisorOk) failed = true;
console.log(`${advisorOk && errors.length === 0 ? "OK" : "FAIL"} advisor-flow ${errors.length ? "-> " + errors.join("; ") : ""}`);

await browser.close();
console.log(failed ? "QA: FAILED" : "QA: PASSED");
process.exit(failed ? 1 : 0);
