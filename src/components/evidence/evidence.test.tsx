import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { EvidenceStrengthMeter } from "./EvidenceStrengthMeter";
import { ui } from "../../i18n";

describe("ConfidenceBadge", () => {
  const baseProps = { language: "en" as const, copy: ui.en };

  it("renders correct label for each confidence level", () => {
    const { rerender } = render(<ConfidenceBadge confidence="high" {...baseProps} />);
    expect(screen.getByText("High")).toBeInTheDocument();

    rerender(<ConfidenceBadge confidence="medium" {...baseProps} />);
    expect(screen.getByText("Medium")).toBeInTheDocument();

    rerender(<ConfidenceBadge confidence="low" {...baseProps} />);
    expect(screen.getByText("Low")).toBeInTheDocument();

    rerender(<ConfidenceBadge confidence="insufficient" {...baseProps} />);
    expect(screen.getByText("Insufficient")).toBeInTheDocument();
  });

  it("shows coverage when provided", () => {
    render(<ConfidenceBadge confidence="high" coverage={{ verified: 3, applicable: 5 }} {...baseProps} />);
    expect(screen.getByText("3 / 5")).toBeInTheDocument();
  });

  it("does not show coverage when applicable is 0", () => {
    render(<ConfidenceBadge confidence="high" coverage={{ verified: 0, applicable: 0 }} {...baseProps} />);
    expect(screen.queryByText("0 / 0")).not.toBeInTheDocument();
  });

  it("has correct aria-label", () => {
    render(<ConfidenceBadge confidence="high" {...baseProps} />);
    expect(screen.getByLabelText("High confidence")).toBeInTheDocument();
  });

  it("applies correct color for each confidence level", () => {
    const { rerender } = render(<ConfidenceBadge confidence="high" {...baseProps} />);
    const badge = screen.getByLabelText("High confidence");
    expect(badge).toHaveStyle({ borderColor: expect.stringContaining("var(--accent)") });

    rerender(<ConfidenceBadge confidence="medium" {...baseProps} />);
    expect(screen.getByLabelText("Medium confidence")).toHaveStyle({ borderColor: expect.stringContaining("var(--warn)") });

    rerender(<ConfidenceBadge confidence="low" {...baseProps} />);
    expect(screen.getByLabelText("Low confidence")).toHaveStyle({ borderColor: expect.stringContaining("#e89b9b") });

    rerender(<ConfidenceBadge confidence="insufficient" {...baseProps} />);
    expect(screen.getByLabelText("Insufficient evidence")).toHaveStyle({ borderColor: expect.stringContaining("var(--muted)") });
  });

  it("supports different sizes", () => {
    const { rerender } = render(<ConfidenceBadge confidence="high" size="sm" {...baseProps} />);
    expect(screen.getByLabelText("High confidence")).toHaveStyle({ fontSize: "11px" });

    rerender(<ConfidenceBadge confidence="high" size="lg" {...baseProps} />);
    expect(screen.getByLabelText("High confidence")).toHaveStyle({ fontSize: "13px" });
  });

  it("renders Arabic labels correctly", () => {
    render(<ConfidenceBadge confidence="high" language="ar" copy={ui.ar} />);
    expect(screen.getByText("عالية")).toBeInTheDocument();
  });
});

describe("EvidenceStrengthMeter", () => {
  const baseProps = { language: "en" as const, copy: ui.en };

  it("renders correct segments for coverage", () => {
    render(<EvidenceStrengthMeter coverage={{ verified: 3, applicable: 5 }} confidence="high" {...baseProps} />);
    const meter = screen.getByLabelText("Evidence coverage: 60%");
    expect(meter).toBeInTheDocument();
    const segments = meter.querySelectorAll('[role="img"] > div');
    expect(segments.length).toBe(5);
  });

  it("shows correct percentage", () => {
    render(<EvidenceStrengthMeter coverage={{ verified: 2, applicable: 4 }} confidence="medium" {...baseProps} />);
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("2 / 4")).toBeInTheDocument();
  });

  it("handles zero applicable gracefully", () => {
    render(<EvidenceStrengthMeter coverage={{ verified: 0, applicable: 0 }} confidence="insufficient" {...baseProps} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
    expect(screen.getByText("0 / 0")).toBeInTheDocument();
  });

it("shows correct colors for different confidence levels", () => {
    const { rerender } = render(<EvidenceStrengthMeter coverage={{ verified: 3, applicable: 5 }} confidence="high" {...baseProps} />);
    const segments = screen.getByLabelText("Evidence coverage: 60%").querySelectorAll('[role="img"] > div');
    expect(segments.length).toBe(5);
    // First 3 segments should be filled (60% of 5 = 3)
    expect(segments[0]).toHaveStyle({ backgroundColor: expect.stringContaining("var(--accent)") });
    expect(segments[1]).toHaveStyle({ backgroundColor: expect.stringContaining("var(--accent)") });
    expect(segments[2]).toHaveStyle({ backgroundColor: expect.stringContaining("var(--accent)") });
    // Last 2 should be empty
    expect(segments[3]).toBeInTheDocument();
    expect(segments[4]).toBeInTheDocument();

    rerender(<EvidenceStrengthMeter coverage={{ verified: 3, applicable: 5 }} confidence="medium" {...baseProps} />);
    const segments2 = screen.getByLabelText("Evidence coverage: 60%").querySelectorAll('[role="img"] > div');
    expect(segments2[0]).toHaveStyle({ backgroundColor: expect.stringContaining("var(--warn)") });
  });

  it("handles full coverage", () => {
    render(<EvidenceStrengthMeter coverage={{ verified: 5, applicable: 5 }} confidence="high" {...baseProps} />);
    const segments = screen.getByLabelText("Evidence coverage: 100%").querySelectorAll('[role="img"] > div');
    expect(segments.length).toBe(5);
    segments.forEach((seg) => {
      expect(seg).toHaveStyle({ backgroundColor: expect.stringContaining("var(--accent)") });
    });
  });

  it("renders Arabic labels correctly", () => {
    render(<EvidenceStrengthMeter coverage={{ verified: 3, applicable: 5 }} confidence="high" language="ar" copy={ui.ar} />);
    expect(screen.getByLabelText("تغطية الأدلة: 60%")).toBeInTheDocument();
  });

  it("applies size variants correctly", () => {
    const { rerender } = render(<EvidenceStrengthMeter coverage={{ verified: 2, applicable: 4 }} confidence="high" size="sm" {...baseProps} />);
    const meter = screen.getByLabelText("Evidence coverage: 50%");
    expect(meter.querySelector("div > div")).toHaveStyle({ height: "4px" });

    rerender(<EvidenceStrengthMeter coverage={{ verified: 2, applicable: 4 }} confidence="high" size="lg" {...baseProps} />);
    const meter2 = screen.getByLabelText("Evidence coverage: 50%");
    expect(meter2.querySelector("div > div")).toHaveStyle({ height: "8px" });
  });
});