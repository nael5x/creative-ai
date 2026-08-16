import type { UrlState } from "./urlState";

export interface SavedComparison {
  id: string;
  name: string;
  left: string;
  right: string;
  mode: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}

const STORAGE_KEY = "creative-ai-saved-comparisons-v1";

function generateId(): string {
  return `cmp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export function getSavedComparisons(): SavedComparison[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Validate each comparison has required fields
    return parsed.filter((c: unknown) => {
      if (typeof c !== "object" || c === null) return false;
      const cmp = c as Record<string, unknown>;
      return (
        typeof cmp.id === "string" &&
        typeof cmp.name === "string" &&
        typeof cmp.left === "string" &&
        typeof cmp.right === "string" &&
        typeof cmp.mode === "string" &&
        typeof cmp.createdAt === "string" &&
        typeof cmp.updatedAt === "string" &&
        typeof cmp.version === "number"
      );
    }) as SavedComparison[];
  } catch {
    return [];
  }
}

export function setSavedComparisons(comparisons: SavedComparison[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comparisons));
}

export function saveComparison(
  name: string,
  state: Pick<UrlState, "left" | "right" | "mode">,
  existing?: SavedComparison
): SavedComparison {
  const now = new Date().toISOString();
  const comparisons = getSavedComparisons();
  
  // Check for duplicate name (excluding the one being updated)
  const nameExists = comparisons.some(
    (c) => c.name.toLowerCase() === name.toLowerCase() && c.id !== existing?.id
  );
  if (nameExists) {
    throw new Error("comparisonNameExists");
  }
  
  // Enforce max limit
  if (!existing && comparisons.length >= 20) {
    throw new Error("maxComparisonsReached");
  }
  
  const comparison: SavedComparison = existing
    ? { ...existing, name, left: state.left, right: state.right, mode: state.mode, updatedAt: new Date().toISOString() }
    : {
        id: generateId(),
        name,
        left: state.left,
        right: state.right,
        mode: state.mode,
        createdAt: now,
        updatedAt: now,
        version: 1,
      };
  
  const updated = existing
    ? comparisons.map((c) => (c.id === existing.id ? comparison : c))
    : [comparison, ...comparisons].slice(0, 20);
  
  setSavedComparisons(updated);
  return comparison;
}

export function deleteComparison(id: string): void {
  const comparisons = getSavedComparisons().filter((c) => c.id !== id);
  setSavedComparisons(comparisons);
}

export function renameComparison(id: string, newName: string): SavedComparison | null {
  const comparisons = getSavedComparisons();
  const index = comparisons.findIndex((c) => c.id === id);
  if (index === -1) return null;
  
  // Check for duplicate name
  const nameExists = comparisons.some(
    (c) => c.name.toLowerCase() === newName.toLowerCase() && c.id !== id
  );
  if (nameExists) {
    throw new Error("comparisonNameExists");
  }
  
  const updated = [...comparisons];
  updated[index] = { ...updated[index], name: newName, updatedAt: new Date().toISOString() };
  setSavedComparisons(updated);
  return updated[index];
}

export function getComparison(id: string): SavedComparison | undefined {
  return getSavedComparisons().find((c) => c.id === id);
}

/**
 * Serialize a comparison state for URL sharing.
 * The URL contains all necessary state to reproduce the comparison without localStorage.
 */
export function serializeComparisonForUrl(state: Pick<UrlState, "left" | "right" | "mode">, name?: string): string {
  const params = new URLSearchParams({
    compare: `${state.left},${state.right}`,
    mode: state.mode,
  });
  if (name) {
    params.set("cmpName", name);
  }
  return `?${params.toString()}`;
}

/**
 * Parse a comparison URL to extract the comparison state.
 * Returns null if the URL doesn't contain valid comparison parameters.
 */
export function parseComparisonUrl(search: string): Pick<UrlState, "left" | "right" | "mode"> | null {
  const params = new URLSearchParams(search);
  const ids = (params.get("compare") ?? "").split(",");
  if (ids.length !== 2 || !ids[0] || !ids[1]) return null;
  
  const left = ids[0];
  const right = ids[1];
  const mode = params.get("mode") ?? "general";
  
  return { left, right, mode };
}

/**
 * Get the comparison name from URL if present.
 */
export function getComparisonNameFromUrl(search: string): string | undefined {
  const params = new URLSearchParams(search);
  return params.get("cmpName") ?? undefined;
}