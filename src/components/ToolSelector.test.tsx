import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ToolSelector } from "./ToolSelector";

describe("ToolSelector", () => {
  it("supports Arabic names and excludes the opposite tool", async () => {
    const onChange = vi.fn();
    render(<ToolSelector value="chatgpt" disabledId="claude" language="ar" label="الأداة" onChange={onChange} />);
    const input = screen.getByRole("combobox", { name: "الأداة" });
    await userEvent.clear(input);
    await userEvent.type(input, "جيميني");
    expect(onChange).toHaveBeenCalledWith("gemini");
    expect(screen.queryByRole("option", { name: /كلود/ })).not.toBeInTheDocument();
  });
});
