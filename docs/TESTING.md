# Testing

Creative AI currently uses lightweight checks appropriate for its static architecture.

## Curated tool catalog

Run:

```bash
python scripts/validate_tools.py
```

This checks the top-level JSON structure, six required fields, non-empty strings, duplicate tool names, and valid HTTP(S) URLs.

## JSON parsing

Pull requests that change JSON data run a parse check through GitHub Actions.

## Public site

For UI changes, serve the repository locally with `python -m http.server 8000` and verify English/Arabic switching, search, filters, card links, update loading, and responsive behavior.

Parser-specific regression tests are tracked separately and will be added for RSS and Atom handling.
