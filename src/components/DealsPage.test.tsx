import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DealsPage } from "./DealsPage";
import { ui } from "../i18n";

describe("DealsPage", () => {
  it("renders deals with a disclosure", () => {
    render(<DealsPage language="en" copy={ui.en} onState={() => {}} />);
    expect(screen.getByText(ui.en.deals)).toBeDefined();
    expect(screen.getByText(ui.en.dealsDisclosure)).toBeDefined();
    expect(screen.getAllByText(/official plans/i).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Official plans/i }).length).toBeGreaterThan(0);
  });
});
