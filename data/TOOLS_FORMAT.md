# Tool catalog format

`data/tools.json` is the source of truth for the directory cards shown on the Creative AI site.

Each entry is a six-item JSON array in this order:

1. Tool name
2. Category
3. What the tool does
4. Why it may matter to the user
5. Availability label
6. Official URL

Example:

```json
[
  "Example Tool",
  "Coding",
  "Short description of what it does.",
  "Why someone may choose it.",
  "Free tier / Paid",
  "https://example.com/"
]
```

All six values must be non-empty strings and the final value must be an `http://` or `https://` URL. Invalid entries are ignored by the page instead of breaking the directory.
