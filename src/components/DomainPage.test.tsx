import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { DomainPage } from "./DomainPage";
import { ui } from "../i18n";

beforeEach(() => { vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ json: async () => ({ items: [] }) })); });
afterEach(() => vi.unstubAllGlobals());

describe("DomainPage", () => {
  it("renders the domain name and links to its tools", () => {
    render(<DomainPage language="en" copy={ui.en} viewId="coding" onState={vi.fn()} />);
    expect(screen.getByRole("heading", { level: 1, name: /Coding/ })).toBeTruthy();
    expect(screen.getByText(ui.en.topTools)).toBeTruthy();
  });

  it("shows all domains as hero cards", () => {
    render(<DomainPage language="ar" copy={ui.ar} viewId="research" onState={vi.fn()} />);
    expect(screen.getByText("البحث")).toBeTruthy();
  });
});
