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

  it("parses fit tool/domain params", () => {
    const state = parseUrl("?view=fit&tool=chatgpt&domain=research");
    expect(state.view).toBe("fit");
    expect(state.fitTool).toBe("chatgpt");
    expect(state.fitDomain).toBe("research");
  });

  it("serializes fit tool/domain params", () => {
    const url = serializeUrl({ left: "chatgpt", right: "claude", mode: "general", view: "fit", fitTool: "chatgpt", fitDomain: "research" });
    expect(url).toContain("view=fit");
    expect(url).toContain("tool=chatgpt");
    expect(url).toContain("domain=research");
  });

  it("parses the watchlist shared param", () => {
    const state = parseUrl("?view=watchlist&w=abc");
    expect(state.view).toBe("watchlist");
    expect(state.shared).toBe("abc");
  });

  it("serializes the watchlist shared param", () => {
    const url = serializeUrl({ left: "chatgpt", right: "claude", mode: "general", view: "watchlist", shared: "abc" });
    expect(url).toContain("view=watchlist");
    expect(url).toContain("w=abc");
  });
});
