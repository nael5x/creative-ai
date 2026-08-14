import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AskPanel } from "./AskPanel";
import { ui } from "../i18n";

describe("AskPanel", () => {
  it("renders the ask input and shows cited results on submit", () => {
    render(<AskPanel language="en" copy={ui.en} onClose={() => {}} />);
    expect(screen.getByText(ui.en.ask)).toBeDefined();
    const input = screen.getByPlaceholderText(/research tool/i) as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: "research tool with cited sources" } });
    fireEvent.click(screen.getByText(ui.en.continue));
    expect(screen.getByTestId("ask-result")).toBeDefined();
    expect(screen.getAllByRole("link", { name: /Perplexity|NotebookLM|ChatGPT|Claude/i }).length).toBeGreaterThan(0);
  });
});
