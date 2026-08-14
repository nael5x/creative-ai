import { describe, expect, it } from "vitest";
import { domains, domainMap } from "./domains";
import { components, componentMap } from "./components";
import { toolMap } from "./tools";

describe("Domain data integrity", () => {
  it("every domain toolId exists in the tool catalog", () => {
    for (const d of domains) {
      expect(d.toolIds.length).toBeGreaterThan(0);
      for (const id of d.toolIds) expect(toolMap.has(id), `domain ${d.id} -> ${id}`).toBe(true);
    }
  });

  it("domain ids are unique", () => {
    expect(domainMap.size).toBe(domains.length);
  });
});

describe("Component data integrity", () => {
  it("component ids are unique", () => {
    expect(componentMap.size).toBe(components.length);
  });

  it("every component references real tools and real domains", () => {
    for (const c of components) {
      expect(c.toolIds.length).toBeGreaterThan(0);
      for (const id of c.toolIds) expect(toolMap.has(id), `component ${c.id} -> ${id}`).toBe(true);
      for (const id of c.domainIds) expect(domainMap.has(id), `component ${c.id} -> ${id}`).toBe(true);
    }
  });

  it("verified components carry explicit evidence; listed/community do not need it", () => {
    for (const c of components) {
      if (c.status === "verified") {
        expect(c.evidence?.url.length).toBeGreaterThan(0);
        expect(c.evidence?.verifiedAt).toBeTruthy();
      }
    }
  });

  it("shared vs private is derivable from toolIds length", () => {
    const shared = components.filter((c) => c.toolIds.length > 1).map((c) => c.id);
    const privateOnly = components.filter((c) => c.toolIds.length === 1).map((c) => c.id);
    expect(shared).toContain("mcp"); // works across claude, cursor, github-copilot
    expect(privateOnly).toContain("cursor-skills"); // cursor only
  });
});
