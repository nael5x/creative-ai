import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { EditorialDashboard } from "./EditorialDashboard";
import { ui } from "../i18n";

describe("EditorialDashboard", () => {
  it("renders the internal queue and corrections inbox", () => {
    render(<EditorialDashboard language="en" copy={ui.en} />);
    expect(screen.getByText(ui.en.editorialTitle)).toBeTruthy();
    expect(screen.getByText(ui.en.componentQueue)).toBeTruthy();
    expect(screen.getByText(ui.en.correctionsInbox)).toBeTruthy();
  });
});
