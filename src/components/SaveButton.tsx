import { useState } from "react";
import type { Copy } from "../i18n";
import { isWatched, toggleWatch, type WatchItem } from "../lib/watchlist";

export function SaveButton({ item, copy }: { item: WatchItem; copy: Copy }) {
  const [saved, setSaved] = useState(() => isWatched(item));
  return (
    <button
      className={saved ? "saved" : "secondary"}
      onClick={() => setSaved(toggleWatch(item).some((i) => i.kind === item.kind && i.id === item.id))}
    >
      {saved ? `★ ${copy.saved}` : `☆ ${copy.save}`}
    </button>
  );
}
