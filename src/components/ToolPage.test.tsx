import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolPage } from "./ToolPage";
import { ui } from "../i18n";

beforeEach(() => { vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ json: async () => ({ items: [] }) })); });
afterEach(() => vi.unstubAllGlobals());

describe("ToolPage", () => {
  it("renders tool overview, capabilities and components", () => {
    const onState = vi.fn();
    render(<ToolPage language="en" copy={ui.en} viewId="chatgpt" onState={onState} />);
    expect(screen.getByText("ChatGPT")).toBeTruthy();
    expect(screen.getByText(ui.en.capabilitiesLabel)).toBeTruthy();
    expect(screen.getByText(ui.en.relatedComponents)).toBeTruthy();
  });

  it("navigates to a component when a component card is clicked", () => {
    const onState = vi.fn();
    render(<ToolPage language="en" copy={ui.en} viewId="chatgpt" onState={onState} />);
    const card = screen.getByText(/ChatGPT GPTs/);
    (card.closest("button") as HTMLButtonElement).click();
    expect(onState).toHaveBeenCalledWith(expect.objectContaining({ view: "component", viewId: "chatgpt-gpts" }));
  });
});
