import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GuidePage } from "./GuidePage";
import { GuidesPage } from "./GuidesPage";
import { ui } from "../i18n";

describe("GuidePage", () => {
  it("renders guide content with source-linked refs in English", () => {
    render(<GuidePage language="en" copy={ui.en} viewId="research-stack" />);
    expect(screen.getByText(/Build a research stack/i)).toBeDefined();
    expect(screen.getAllByText("Perplexity").length).toBeGreaterThan(0);
    const link = screen.getAllByText("Perplexity")[0].closest("a");
    expect(link?.getAttribute("href")).toBe("/?view=tool&id=perplexity");
    expect(screen.getByText(/Last updated/i)).toBeDefined();
  });

  it("renders the Arabic title when language is ar", () => {
    render(<GuidePage language="ar" copy={ui.ar} viewId="coding-agent-stack" />);
    expect(screen.getByText(/ركّب ستاك وكلاء البرمجة/i)).toBeDefined();
  });

  it("handles a missing guide id", () => {
    render(<GuidePage language="en" copy={ui.en} viewId="does-not-exist" />);
    expect(screen.getByText(/غير موجود/)).toBeDefined();
  });
});

describe("GuidesPage", () => {
  it("lists all guides", () => {
    render(<GuidesPage language="en" copy={ui.en} />);
    expect(screen.getByText(/Build a research stack/i)).toBeDefined();
    expect(screen.getByText(/Assemble a coding-agent stack/i)).toBeDefined();
    expect(screen.getByText(/Run a local-first AI setup/i)).toBeDefined();
  });
});
