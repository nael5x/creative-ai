import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentPage } from "./ComponentPage";
import { ui } from "../i18n";

beforeEach(() => { vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ json: async () => ({ items: [] }) })); });
afterEach(() => vi.unstubAllGlobals());

describe("ComponentPage", () => {
  it("renders component details and shared/private context", () => {
    const onState = vi.fn();
    render(<ComponentPage language="en" copy={ui.en} viewId="mcp" onState={onState} />);
    expect(screen.getByText(/Model Context Protocol/)).toBeTruthy();
    expect(screen.getByText(ui.en.whenToUse)).toBeTruthy();
    expect(screen.getByText(ui.en.install)).toBeTruthy();
    expect(screen.getByText(/Shared with/)).toBeTruthy();
  });

  it("renders a private component", () => {
    render(<ComponentPage language="ar" copy={ui.ar} viewId="cursor-skills" onState={vi.fn()} />);
    expect(screen.getByText("مهارات Cursor")).toBeTruthy();
  });
});
