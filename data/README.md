# Data files

- `tools.json` contains the curated directory entries shown on the public site.
- `TOOLS_FORMAT.md` documents the six-field tool record format.
- `updates.json` is generated automatically by `scripts/collect_updates.py` and should not be hand-edited for normal source updates.

For curated tool changes, run:

```bash
python scripts/validate_tools.py
```
