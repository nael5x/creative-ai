import { describe, it, expect } from "vitest";
import { parseUrl, serializeUrl } from "./urlState";

describe("urlState view routing", () => {
  it("parses a view + id", () => {
    const state = parseUrl("?view=tool&id=chatgpt&compare=chatgpt,claude&mode=general");
    expect(state.view).toBe("tool");
    expect(state.viewId).toBe("chatgpt");
  });

  it("parses the editor view", () => {
    const state = parseUrl("?view=editor");
    expect(state.view).toBe("editor");
  });

  it("serializes view and id", () => {
    const url = serializeUrl({ left: "chatgpt", right: "claude", mode: "general", view: "component", viewId: "mcp" });
    expect(url).toContain("view=component");
    expect(url).toContain("id=mcp");
  });

  it("falls back to defaults for unknown view", () => {
    const state = parseUrl("?view=unknown&compare=chatgpt,claude&mode=general");
    expect(state.view).toBeUndefined();
  });
});
