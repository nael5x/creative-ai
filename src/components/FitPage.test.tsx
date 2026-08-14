import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FitPage } from "./FitPage";
import { ui } from "../i18n";

describe("FitPage", () => {
  it("renders a tool framed within a domain", () => {
    render(<FitPage language="en" copy={ui.en} fitTool="chatgpt" fitDomain="research" onState={() => {}} />);
    expect(screen.getByText("ChatGPT")).toBeDefined();
    expect(screen.getByText(/for Research/i)).toBeDefined();
    expect(screen.getByText(ui.en.compareThese)).toBeDefined();
    expect(screen.getByText(ui.en.viewTool)).toBeDefined();
  });

  it("handles a missing tool", () => {
    render(<FitPage language="en" copy={ui.en} fitTool="nope" fitDomain="research" onState={() => {}} />);
    expect(screen.getByText(/Not found/i)).toBeDefined();
  });
});
