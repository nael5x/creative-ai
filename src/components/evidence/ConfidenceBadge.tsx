import type { Copy } from "../../i18n";
import type { Language, ScoreSummary } from "../../types";

interface ConfidenceBadgeProps {
  confidence: ScoreSummary["confidence"];
  coverage?: ScoreSummary["coverage"];
  language: Language;
  copy: Copy;
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
}

const confidenceLabels: Record<string, Record<Language, string>> = {
  high: { en: "High", ar: "عالية" },
  medium: { en: "Medium", ar: "متوسطة" },
  low: { en: "Low", ar: "منخفضة" },
  insufficient: { en: "Insufficient", ar: "غير كافية" },
};

const confidenceAriaLabels: Record<string, Record<Language, string>> = {
  high: { en: "High confidence", ar: "ثقة عالية" },
  medium: { en: "Medium confidence", ar: "ثقة متوسطة" },
  low: { en: "Low confidence", ar: "ثقة منخفضة" },
  insufficient: { en: "Insufficient evidence", ar: "أدلة غير كافية" },
};

const confidenceColors = {
  high: "var(--accent)",
  medium: "var(--warn)",
  low: "#e89b9b",
  insufficient: "var(--muted)",
};

export function ConfidenceBadge({
  confidence,
  coverage,
  language,
  copy,
  size = "md",
  showTooltip = true,
}: ConfidenceBadgeProps) {
  const label = confidenceLabels[confidence]?.[language] ?? confidence;
  const ariaLabel = confidenceAriaLabels[confidence]?.[language] ?? label;
  const color = confidenceColors[confidence] ?? "var(--muted)";
  const showCoverage = coverage && coverage.applicable > 0;

  const sizes = {
    sm: { padding: "2px 8px", fontSize: "11px", gap: "4px" },
    md: { padding: "3px 10px", fontSize: "12px", gap: "6px" },
    lg: { padding: "4px 12px", fontSize: "13px", gap: "8px" },
  };
  const s = sizes[size];

  const tooltipText = showTooltip
    ? `${copy.evidenceConfidenceTooltip} ${copy.evidenceCoverageTooltip}`
    : undefined;

  return (
    <span
      className="confidence-badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
        padding: s.padding,
        fontSize: s.fontSize,
        fontWeight: 700,
        borderRadius: "999px",
        border: `1px solid ${color}`,
        background: `${color}20`,
        color,
        cursor: showTooltip ? "help" : "default",
      }}
      aria-label={ariaLabel}
      title={tooltipText}
    >
      <span style={{ fontSize: "10px" }}>{label}</span>
      {showCoverage && coverage && (
        <span
          style={{
            fontSize: "10px",
            fontWeight: 500,
            opacity: 0.8,
          }}
        >
          {coverage.verified} / {coverage.applicable}
        </span>
      )}
    </span>
  );
}