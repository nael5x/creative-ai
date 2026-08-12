import { useId } from "react";
import { tools } from "../data/tools";
import type { Language } from "../types";

type Props = { value: string; disabledId: string; language: Language; label: string; onChange: (id: string) => void };

export function ToolSelector({ value, disabledId, language, label, onChange }: Props) {
  const listId = useId();
  const selected = tools.find((tool) => tool.id === value)!;
  const options = tools.filter((tool) => tool.id !== disabledId);
  return (
    <label className="tool-selector">
      <span className="sr-only">{label}</span>
      <span className="monogram" aria-hidden="true">{selected.name.en[0]}</span>
      <input
        key={`${value}-${language}`}
        list={listId}
        defaultValue={selected.name[language]}
        aria-label={label}
        onChange={(event) => {
          const normalized = event.currentTarget.value.trim().toLocaleLowerCase();
          const match = options.find((tool) => [tool.name.en, tool.name.ar, tool.id].some((term) => term.toLocaleLowerCase() === normalized));
          if (match) onChange(match.id);
        }}
      />
      <datalist id={listId}>{options.map((tool) => <option key={tool.id} value={tool.name[language]}>{tool.category[language]}</option>)}</datalist>
      <span className="search-icon" aria-hidden="true">⌕</span>
    </label>
  );
}
