/// <reference types="node" />
import { readFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test, expect } from "vitest";
import { ld, buildStatic } from "./prerender";

test("ld serializes to JSON-LD and escapes unsafe characters", () => {
  const s = ld({ a: "</script>" });
  expect(s).toContain('type="application/ld+json"');
  expect(s).toContain("\\u003c/script>");
  expect(s.indexOf("</script>")).toBe(s.lastIndexOf("</script>"));
});

test("buildStatic emits JSON-LD and component pages", () => {
  const dir = mkdtempSync(join(tmpdir(), "pre-"));
  const files = buildStatic(dir, "https://example.com");
  const comparison = files.find((f) => f.startsWith("compare") && !f.endsWith(".ar.html"));
  expect(comparison).toBeDefined();
  const html = readFileSync(join(dir, comparison!), "utf8");
  expect(html).toContain("application/ld+json");
  expect(html).toContain("BreadcrumbList");
  expect(files.some((f) => f.startsWith("c/"))).toBe(true);
});
