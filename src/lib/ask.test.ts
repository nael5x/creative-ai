import { describe, it, expect } from "vitest";
import { citeAnswer } from "./ask";

describe("citeAnswer (source-only retrieval)", () => {
  it("returns a neutral message for an empty query", () => {
    const res = citeAnswer("", "en");
    expect(res.citations.length).toBe(0);
    expect(res.answer.length).toBeGreaterThan(0);
  });

  it("retrieves research-related entities for a research query", () => {
    const res = citeAnswer("research tool with cited sources", "en");
    expect(res.citations.length).toBeGreaterThan(0);
    const labels = res.citations.map((c) => c.label);
    expect(labels.join(" ")).toMatch(/Perplexity|NotebookLM|ChatGPT|Claude/i);
  });

  it("returns citations with entity links and sources", () => {
    const res = citeAnswer("coding assistant", "en");
    expect(res.citations[0].href).toMatch(/^\/\?view=/);
    expect(res.citations[0].source).toMatch(/^https?:\/\//);
  });

  it("returns no match message for out-of-scope query", () => {
    const res = citeAnswer("xyzzy qwerty banana", "en");
    expect(res.citations.length).toBe(0);
  });
});
