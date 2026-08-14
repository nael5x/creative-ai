import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MatrixPage } from "./MatrixPage";
import { ui } from "../i18n";

describe("MatrixPage", () => {
  it("renders the matrix heading and a domain toggle", () => {
    render(<MatrixPage language="en" copy={ui.en} onState={() => {}} />);
    expect(screen.getByText(ui.en.matrixFor)).toBeDefined();
    expect(screen.getByText("ChatGPT")).toBeDefined();
  });

  it("shows supported marks for components linked to tools", () => {
    render(<MatrixPage language="en" copy={ui.en} domainId="coding" onState={() => {}} />);
    expect(screen.getByText("Cursor")).toBeDefined();
    expect(screen.getByText(/Cursor-skills|Claude skills/i)).toBeDefined();
  });
});
