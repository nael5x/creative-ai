import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Advisor } from "./Advisor";
import { ui } from "../i18n";

describe("Advisor guided flow", () => {
  it("moves domain -> budget -> results without free-text inference", () => {
    const onChoose = vi.fn();
    const onState = vi.fn();
    const onClose = vi.fn();
    render(<Advisor language="en" copy={ui.en} onClose={onClose} onChoose={onChoose} onState={onState} />);
    expect(screen.getByText(ui.en.advisorPickDomain)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Coding/ }));
    expect(screen.getByText(/What is your budget/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: ui.en.budgetAny }));
    expect(screen.getByText(ui.en.advisorResults)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: ui.en.compareTop }));
    expect(onChoose).toHaveBeenCalled();
  });
});
