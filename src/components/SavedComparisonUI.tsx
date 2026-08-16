import type { Copy } from "../i18n";
import type { Language } from "../types";
import { saveComparison, deleteComparison, renameComparison, getSavedComparisons, serializeComparisonForUrl } from "../lib/comparisons";

interface SavedComparisonUIProps {
  language: Language;
  copy: Copy;
  currentState: { left: string; right: string; mode: string };
  onState: (next: { left?: string; right?: string; mode?: string; view?: string; viewId?: string }) => void;
  onCompare?: (left: string, right: string, mode: string) => void;
}

export function SavedComparisonUI({ language, copy, currentState, onState, onCompare }: SavedComparisonUIProps) {
  function handleLoad(comparison: { left: string; right: string; mode: string }) {
    onState({ left: comparison.left, right: comparison.right, mode: comparison.mode, view: undefined });
    if (onCompare) {
      onCompare(comparison.left, comparison.right, comparison.mode);
    }
  }

  function handleDelete(id: string) {
    if (!confirm(copy.confirmDelete)) return;
    deleteComparison(id);
    window.dispatchEvent(new Event("storage"));
  }

  function handleShare(comparison: { left: string; right: string; mode: string; name: string }) {
    const url = window.location.origin + window.location.pathname + serializeComparisonForUrl(
      { left: comparison.left, right: comparison.right, mode: comparison.mode },
      comparison.name
    );
    navigator.clipboard.writeText(url);
    alert(copy.linkCopied);
  }

  function handleSave() {
    const name = prompt("Enter a name for this comparison:");
    if (name && name.trim()) {
      try {
        saveComparison(name.trim(), {
          left: currentState.left,
          right: currentState.right,
          mode: currentState.mode,
        });
        window.dispatchEvent(new Event("storage"));
      } catch (e) {
        if (e instanceof Error && e.message === "comparisonNameExists") {
          alert(copy.comparisonNameExists);
        } else if (e instanceof Error && e.message === "maxComparisonsReached") {
          alert(copy.maxComparisonsReached);
        }
      }
    }
  }

  function handleRename(comparison: { id: string; name: string }) {
    const newName = prompt(copy.rename + ":", comparison.name);
    if (newName && newName.trim() && newName.trim() !== comparison.name) {
      try {
        renameComparison(comparison.id, newName.trim());
        window.dispatchEvent(new Event("storage"));
      } catch (e) {
        if (e instanceof Error && e.message === "comparisonNameExists") {
          alert(copy.comparisonNameExists);
        }
      }
    }
  }

  const savedComparisons = getSavedComparisons();

  if (!savedComparisons.length) return null;

  return (
    <details className="saved-comparisons" style={{ marginTop: "16px" }}>
      <summary style={{ cursor: "pointer", fontWeight: 600, color: "var(--text)", padding: "8px 0" }}>
        {copy.savedComparisonsLabel} ({getSavedComparisons().length}/20)
      </summary>
      <div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {getSavedComparisons().map((cmp) => (
          <div
            key={cmp.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 12px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "8px",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
              <button
                className="secondary"
                onClick={() => handleLoad(cmp)}
                style={{ padding: "6px 12px", fontSize: "13px" }}
              >
                {copy.loadComparison}
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "200px" }}>{cmp.name}</strong>
                <span style={{ fontSize: "11px", color: "var(--muted)", whiteSpace: "nowrap" }}>
                  {new Date(cmp.updatedAt).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US", { year: "numeric", month: "short", day: "numeric" })}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              <button
                className="secondary"
                onClick={() => handleShare(cmp)}
                style={{ padding: "4px 10px", fontSize: "12px" }}
                aria-label={copy.shareComparison}
              >
                {copy.share}
              </button>
              <button
                className="secondary"
                onClick={() => handleRename(cmp)}
                style={{ padding: "4px 10px", fontSize: "12px" }}
                aria-label={copy.rename}
              >
                {copy.rename}
              </button>
              <button
                className="secondary"
                onClick={() => {
                  if (confirm("Delete this comparison?")) {
                    handleDelete(cmp.id);
                  }
                }}
                style={{ padding: "4px 10px", fontSize: "12px", color: "#e89b9b", borderColor: "#e89b9b" }}
                aria-label="Delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button
          className="primary"
          onClick={handleSave}
          style={{ width: "fit-content", marginTop: "8px" }}
        >
          + {copy.saveComparison}
        </button>
      </div>
    </details>
  );
}