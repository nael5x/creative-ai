import type { Copy } from "../../i18n";
import type { Language, ScoreSummary } from "../../types";

interface EvidenceStrengthMeterProps {
  coverage: ScoreSummary["coverage"];
  confidence: ScoreSummary["confidence"];
  language: Language;
  copy: Copy;
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
}

export function EvidenceStrengthMeter({
  coverage,
  confidence,
  copy,
  size = "md",
  showTooltip = true,
}: EvidenceStrengthMeterProps) {
  const { verified, applicable } = coverage;
  const percentage = applicable > 0 ? (verified / applicable) * 100 : 0;

  const sizes = {
    sm: { height: 4, fontSize: 10, gap: 4 },
    md: { height: 6, fontSize: 11, gap: 6 },
    lg: { height: 8, fontSize: 12, gap: 8 },
  };
  const s = sizes[size];

  const tooltipText = showTooltip
    ? `${copy.evidenceCoverageTooltip} ${copy.evidenceConfidenceTooltip}`
    : undefined;

  const getSegmentColor = (index: number, total: number) => {
    if (total === 0) return "var(--line)";
    const threshold = (index + 1) / total * 100;
    if (threshold <= percentage) {
      if (confidence === "high") return "var(--accent)";
      if (confidence === "medium") return "var(--warn)";
      if (confidence === "low") return "#e89b9b";
      return "var(--muted)";
    }
    return "var(--line)";
  };

  const segments = applicable > 0 ? applicable : 1;

  return (
    <div
      className="evidence-strength-meter"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: s.gap,
        minWidth: size === "sm" ? 80 : size === "md" ? 120 : 160,
      }}
      title={tooltipText}
      aria-label={`${copy.evidenceCoverage}: ${percentage.toFixed(0)}%`}
    >
      <div
        style={{
          display: "flex",
          gap: 2,
          height: s.height,
          borderRadius: "999px",
          overflow: "hidden",
          background: "var(--line)",
        }}
        role="img"
        aria-label={`${copy.evidenceCoverage}: ${coverage.verified} of ${coverage.applicable} criteria have verified evidence`}
      >
        {Array.from({ length: segments }, (_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: getSegmentColor(i, segments),
              transition: "background 0.2s ease",
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: s.fontSize,
          color: "var(--muted)",
        }}
      >
        <span>{coverage.verified} / {coverage.applicable}</span>
        <span>{percentage.toFixed(0)}%</span>
      </div>
    </div>
  );
}