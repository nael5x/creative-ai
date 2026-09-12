# Architecture

Creative AI intentionally keeps a small static architecture:

- `index.html` renders the bilingual directory and update feed.
- `data/tools.json` contains the human-curated tool directory.
- `data/updates.json` contains automatically collected update records.
- `scripts/collect_updates.py` fetches and normalizes upstream feeds.
- GitHub Actions refreshes generated update data and validates contributor-edited catalog data.

The separation between curated and generated data is deliberate: contributors can update tool records without editing UI code, while monitored releases remain reproducible through the collector.
