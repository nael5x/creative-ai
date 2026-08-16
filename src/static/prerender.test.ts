/// <reference types="node" />
import { readFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test, expect } from "vitest";
import { ld, buildStatic, escapeHtml } from "./prerender";

test("ld serializes to JSON-LD and escapes unsafe characters", () => {
  const s = ld({ a: "</script>" });
  expect(s).toContain('type="application/ld+json"');
  expect(s).toContain("\\u003c/script>");
  expect(s.indexOf("</script>")).toBe(s.lastIndexOf("</script>"));
});

test("escapeHtml neutralizes all HTML-significant characters", () => {
  expect(escapeHtml("<")).toBe("&lt;");
  expect(escapeHtml(">")).toBe("&gt;");
  expect(escapeHtml("&")).toBe("&amp;");
  expect(escapeHtml('"')).toBe("&quot;");
  expect(escapeHtml("'")).toBe("&#39;");
});

test("escapeHtml prevents breaking out of a text context", () => {
  const escaped = escapeHtml('</title><script>alert(1)</script>');
  expect(escaped).not.toContain("<script>");
  expect(escaped).not.toContain("</title>");
  expect(escaped).toContain("&lt;script&gt;");
});

test("escapeHtml prevents breaking out of a double-quoted attribute", () => {
  const escaped = escapeHtml('" onload="alert(1)');
  expect(escaped).not.toContain('"');
  expect(escaped).toContain("&quot;");
});

test("escapeHtml escapes ampersand first and never double-encodes", () => {
  // A pre-existing entity-looking string must not be corrupted into a real entity.
  expect(escapeHtml("&lt;")).toBe("&amp;lt;");
});

test("escapeHtml keeps a valid URL usable (only & becomes &amp;)", () => {
  const url = "https://example.com/path?view=tool&id=chatgpt";
  const escaped = escapeHtml(url);
  expect(escaped).toBe("https://example.com/path?view=tool&amp;id=chatgpt");
  // The browser-decoded form must reproduce the original, valid URL.
  expect(escaped.replace(/&amp;/g, "&")).toBe(url);
});

// This is a heavy integration test: it renders 600+ static pages to a temp dir.
// The production build itself completes fine; the default 5s vitest timeout is
// simply too tight for the full static render on slower machines, so a targeted
// per-test timeout is used (no global timeout inflation, no logic change).
test("buildStatic emits JSON-LD and component pages", () => {
  const dir = mkdtempSync(join(tmpdir(), "pre-"));
  const files = buildStatic(dir, "https://example.com");
  const comparison = files.find((f) => f.startsWith("compare") && !f.endsWith(".ar.html"));
  expect(comparison).toBeDefined();
  const html = readFileSync(join(dir, comparison!), "utf8");
  expect(html).toContain("application/ld+json");
  expect(html).toContain("BreadcrumbList");
  expect(files.some((f) => f.startsWith("c/"))).toBe(true);
}, 20000);

test("buildStatic escapes dynamic title/description into head", () => {
  const dir = mkdtempSync(join(tmpdir(), "pre-esc-"));
  buildStatic(dir, "https://example.com");
  // The "Research & grounded answers" domain title must be entity-encoded in <title>.
  const html = readFileSync(join(dir, "d/research.html"), "utf8");
  const title = html.slice(html.indexOf("<title>") + 7, html.indexOf("</title>"));
  expect(title).toContain("Research &amp; grounded answers");
  expect(title).not.toContain("Research & grounded");
  // JSON-LD must keep the raw ampersand (JSON context, not HTML) and stay intact.
  expect(html).toContain('"name":"Research & grounded answers"');
}, 20000);
