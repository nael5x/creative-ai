import { describe, expect, it } from "vitest";
import { parseUrl, serializeUrl } from "./urlState";

describe("comparison URL state", () => {
  it("restores a valid comparison", () => expect(parseUrl("?compare=cursor,ollama&mode=coding")).toEqual({ left: "cursor", right: "ollama", mode: "coding" }));
  it("repairs duplicate and invalid selections", () => {
    expect(parseUrl("?compare=chatgpt,chatgpt&mode=nope")).toEqual({ left: "chatgpt", right: "claude", mode: "general" });
  });
  it("serializes deterministically", () => expect(serializeUrl({ left: "claude", right: "gemini", mode: "writing" })).toBe("?compare=claude%2Cgemini&mode=writing"));
});
