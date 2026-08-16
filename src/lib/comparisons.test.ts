import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  getSavedComparisons,
  setSavedComparisons,
  saveComparison,
  deleteComparison,
  renameComparison,
  getComparison,
  serializeComparisonForUrl,
  parseComparisonUrl,
  getComparisonNameFromUrl,
} from "./comparisons";

const STORAGE_KEY = "creative-ai-saved-comparisons-v1";

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-08-16T12:00:00Z"));
});

afterEach(() => {
  vi.useRealTimers();
});

describe("Saved Comparisons Storage", () => {
  it("returns empty array when no data", () => {
    expect(getSavedComparisons()).toEqual([]);
  });

  it("saves and retrieves comparisons", () => {
    const comparison = {
      id: "test-1",
      name: "Test Comparison",
      left: "chatgpt",
      right: "claude",
      mode: "general",
      createdAt: "2026-08-16T12:00:00.000Z",
      updatedAt: "2026-08-16T12:00:00.000Z",
      version: 1,
    };
    setSavedComparisons([comparison]);
    expect(getSavedComparisons()).toEqual([comparison]);
  });

  it("handles malformed JSON gracefully", () => {
    localStorage.setItem("creative-ai-saved-comparisons-v1", "not valid json");
    expect(getSavedComparisons()).toEqual([]);
  });

  it("handles non-array data gracefully", () => {
    localStorage.setItem("creative-ai-saved-comparisons-v1", '{"not": "array"}');
    expect(getSavedComparisons()).toEqual([]);
  });

  it("filters out invalid comparison objects", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([
        { id: "1", name: "Valid", left: "a", right: "b", mode: "general", createdAt: "2026-08-16T12:00:00.000Z", updatedAt: "2026-08-16T12:00:00.000Z", version: 1 },
        { invalid: "object" },
        null,
        { id: "2", name: "Also Valid", left: "c", right: "d", mode: "general", createdAt: "2026-08-16T12:00:00.000Z", updatedAt: "2026-08-16T12:00:00.000Z", version: 1 },
      ])
    );
    const saved = getSavedComparisons();
    expect(saved.length).toBe(2);
    expect(saved[0].name).toBe("Valid");
    expect(saved[1].name).toBe("Also Valid");
  });
});

describe("saveComparison", () => {
  it("saves a new comparison", () => {
    const result = saveComparison("My Comparison", { left: "chatgpt", right: "claude", mode: "general" });
    expect(result.name).toBe("My Comparison");
    expect(result.left).toBe("chatgpt");
    expect(result.right).toBe("claude");
    expect(result.mode).toBe("general");
    expect(result.id).toMatch(/^cmp_\d+_[a-z0-9]+$/);
    expect(result.version).toBe(1);
    expect(result.createdAt).toBe("2026-08-16T12:00:00.000Z");
    expect(result.updatedAt).toBe("2026-08-16T12:00:00.000Z");
  });

  it("updates an existing comparison", () => {
    const existing = saveComparison("Original", { left: "chatgpt", right: "claude", mode: "general" });
    vi.advanceTimersByTime(1000);
    const updated = saveComparison("Updated Name", { left: "gemini", right: "perplexity", mode: "research" }, existing);
    expect(updated.id).toBe(existing.id);
    expect(updated.name).toBe("Updated Name");
    expect(updated.left).toBe("gemini");
    expect(updated.right).toBe("perplexity");
    expect(updated.mode).toBe("research");
    expect(updated.updatedAt).not.toBe(existing.updatedAt);
    expect(updated.createdAt).toBe(existing.createdAt);
  });

  it("throws on duplicate name", () => {
    saveComparison("My Comparison", { left: "chatgpt", right: "claude", mode: "general" });
    expect(() => saveComparison("My Comparison", { left: "gemini", right: "perplexity", mode: "research" })).toThrow("comparisonNameExists");
  });

  it("throws when max comparisons reached", () => {
    for (let i = 0; i < 20; i++) {
      saveComparison(`Comparison ${i}`, { left: "chatgpt", right: "claude", mode: "general" });
    }
    expect(() => saveComparison("One More", { left: "chatgpt", right: "claude", mode: "general" })).toThrow("maxComparisonsReached");
  });

  it("enforces max 20 by removing oldest when adding new (if not at limit)", () => {
    for (let i = 0; i < 19; i++) {
      saveComparison(`Comparison ${i}`, { left: "chatgpt", right: "claude", mode: "general" });
    }
    const result = saveComparison("Comparison 19", { left: "chatgpt", right: "claude", mode: "general" });
    expect(result.name).toBe("Comparison 19");
    expect(getSavedComparisons().length).toBe(20);
  });
});

describe("deleteComparison", () => {
  it("deletes a comparison by id", () => {
    const c = saveComparison("To Delete", { left: "chatgpt", right: "claude", mode: "general" });
    deleteComparison(c.id);
    expect(getSavedComparisons()).toHaveLength(0);
  });

  it("does nothing for non-existent id", () => {
    saveComparison("Keep", { left: "chatgpt", right: "claude", mode: "general" });
    deleteComparison("non-existent");
    expect(getSavedComparisons()).toHaveLength(1);
  });
});

describe("renameComparison", () => {
  it("renames a comparison", () => {
    const c = saveComparison("Old Name", { left: "chatgpt", right: "claude", mode: "general" });
    vi.advanceTimersByTime(1000);
    const renamed = renameComparison(c.id, "New Name");
    expect(renamed).not.toBeNull();
    expect(renamed!.name).toBe("New Name");
    expect(renamed!.updatedAt).not.toBe(c.updatedAt);
  });

  it("returns null for non-existent id", () => {
    expect(renameComparison("non-existent", "New Name")).toBeNull();
  });

  it("throws on duplicate name", () => {
    saveComparison("Name 1", { left: "chatgpt", right: "claude", mode: "general" });
    const c2 = saveComparison("Name 2", { left: "gemini", right: "perplexity", mode: "research" });
    expect(() => renameComparison(c2.id, "Name 1")).toThrow("comparisonNameExists");
  });
});

describe("getComparison", () => {
  it("returns comparison by id", () => {
    const c = saveComparison("Test", { left: "chatgpt", right: "claude", mode: "general" });
    const found = getComparison(c.id);
    expect(found).toEqual(c);
  });

  it("returns undefined for non-existent id", () => {
    expect(getComparison("non-existent")).toBeUndefined();
  });
});

describe("serializeComparisonForUrl", () => {
  it("serializes basic comparison state", () => {
    const url = serializeComparisonForUrl({ left: "chatgpt", right: "claude", mode: "general" });
    expect(url).toBe("?compare=chatgpt%2Cclaude&mode=general");
  });

  it("includes name when provided", () => {
    const url = serializeComparisonForUrl({ left: "chatgpt", right: "claude", mode: "general" }, "My Comparison");
    expect(url).toBe("?compare=chatgpt%2Cclaude&mode=general&cmpName=My+Comparison");
  });
});

describe("parseComparisonUrl", () => {
  it("parses valid comparison URL", () => {
    const result = parseComparisonUrl("?compare=chatgpt,claude&mode=general");
    expect(result).toEqual({ left: "chatgpt", right: "claude", mode: "general" });
  });

  it("defaults mode to general", () => {
    const result = parseComparisonUrl("?compare=chatgpt,claude");
    expect(result).toEqual({ left: "chatgpt", right: "claude", mode: "general" });
  });

  it("returns null for invalid URL", () => {
    expect(parseComparisonUrl("?compare=chatgpt")).toBeNull();
    expect(parseComparisonUrl("?compare=chatgpt,")).toBeNull();
    expect(parseComparisonUrl("?compare=")).toBeNull();
    expect(parseComparisonUrl("?mode=general")).toBeNull();
  });

  it("handles extra parameters", () => {
    const result = parseComparisonUrl("?compare=chatgpt,claude&mode=research&other=value");
    expect(result).toEqual({ left: "chatgpt", right: "claude", mode: "research" });
  });
});

describe("getComparisonNameFromUrl", () => {
  it("extracts name from URL", () => {
    expect(getComparisonNameFromUrl("?compare=chatgpt,claude&cmpName=My%20Comparison")).toBe("My Comparison");
  });

  it("returns undefined when not present", () => {
    expect(getComparisonNameFromUrl("?compare=chatgpt,claude")).toBeUndefined();
  });
});