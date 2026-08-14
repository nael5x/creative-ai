export interface Correction { id: string; entityType: "tool" | "component"; entityId: string; message: string; at: string; status: "open" | "resolved" }

const CORRECTIONS_KEY = "creative-ai-corrections-v1";
const VERIFIED_KEY = "creative-ai-verified-v1";

export function getCorrections(): Correction[] {
  try { return JSON.parse(localStorage.getItem(CORRECTIONS_KEY) ?? "[]") as Correction[]; } catch { return []; }
}

export function addCorrection(entry: Omit<Correction, "id" | "at" | "status">): void {
  const list = getCorrections();
  list.unshift({ ...entry, id: `c-${Date.now()}`, at: new Date().toISOString(), status: "open" });
  localStorage.setItem(CORRECTIONS_KEY, JSON.stringify(list));
}

export function resolveCorrection(id: string): void {
  const list = getCorrections().map((c) => (c.id === id ? { ...c, status: "resolved" as const } : c));
  localStorage.setItem(CORRECTIONS_KEY, JSON.stringify(list));
}

export function getVerifiedOverrides(): Record<string, string> {
  try { return JSON.parse(localStorage.getItem(VERIFIED_KEY) ?? "{}") as Record<string, string>; } catch { return {}; }
}

export function setVerified(id: string): void {
  const map = getVerifiedOverrides();
  map[id] = new Date().toISOString();
  localStorage.setItem(VERIFIED_KEY, JSON.stringify(map));
}

export function unsetVerified(id: string): void {
  const map = getVerifiedOverrides();
  delete map[id];
  localStorage.setItem(VERIFIED_KEY, JSON.stringify(map));
}
