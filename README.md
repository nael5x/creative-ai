# Creative AI

Creative AI is a bilingual AI update monitor and practical directory for tools, releases, open-source projects, and verified discovery signals.

The public site combines a curated tool directory with an automated source monitor that refreshes `data/updates.json` every six hours through GitHub Actions.

## What the project does

- Explains practical AI tools in English and Arabic.
- Groups tools by purpose so users can search by task instead of brand name alone.
- Monitors selected upstream release feeds and discovery sources.
- Publishes fresh update data automatically through GitHub Actions.
- Records a health result for every monitored source on each collection run.
- Links users back to original tools and sources rather than republishing full external content.

## Live architecture

```text
index.html
  ├─ loads data/tools.json
  └─ loads data/updates.json

data/tools.json
  └─ curated tool catalog used by the directory UI

scripts/collect_updates.py
  └─ reads upstream Atom/RSS feeds
      └─ writes items + sourceHealth to data/updates.json

.github/workflows/source-monitor.yml
  └─ runs the collector every six hours

scripts/validate_tools.py
  └─ validates tool catalog structure and URLs

.github/workflows/validate-tools.yml
  └─ validates catalog and quality provenance changes on pull requests

.github/workflows/catalog-link-audit.yml
  └─ runs the canonical-link audit weekly and on relevant pull requests

tests/test_collect_updates.py
  └─ regression tests for parsing, partial success and source health

.github/workflows/test-feed-parsers.yml
  └─ runs the complete pytest regression suite on catalog, validator and collector changes
```

## Monitored sources

The current monitor includes official or project release feeds for tools such as Ollama, LangChain, Hugging Face Transformers, ComfyUI, Open WebUI, Langflow, n8n, and LlamaIndex. Product Hunt is included as a discovery-only source and should not be treated as an official release feed.

## Source health reporting

Every collection run records an explicit result for each configured source in `data/updates.json` under `sourceHealth`.

```json
{
  "sourceHealth": {
    "total": 9,
    "ok": 9,
    "failed": 0,
    "sources": [
      {
        "source": "Example Source",
        "url": "https://example.com/feed",
        "status": "ok",
        "items": 4
      }
    ]
  }
}
```

If a source fails, its status becomes `error` with a concise single-line error summary. The collector continues processing the remaining sources, keeps successful items, writes the health summary, and prints the unhealthy source names in the workflow log. One upstream failure therefore does not discard a successful partial update.

## Run locally

No build step is required for the public site. Serve the repository with any local static server so the browser can load the JSON files.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

To refresh the monitored data manually:

```bash
python scripts/collect_updates.py
```

To validate the curated tool catalog:

```bash
python scripts/validate_tools.py
```

To run the complete regression suite (including function-based tests):

```bash
python -m pip install pytest
python -m pytest -q
```

The suite includes catalog, quality-provenance, UI and collector checks. CI runs the complete pytest suite so both unittest classes and function-based tests are exercised. Collector tests use local XML fixtures and injected fetch behavior.

## Project structure

```text
.github/
  ISSUE_TEMPLATE/
  workflows/
    source-monitor.yml
    test-feed-parsers.yml
    catalog-link-audit.yml
    validate-tools.yml
  PULL_REQUEST_TEMPLATE.md

data/
  tools.json
  TOOLS_FORMAT.md
  updates.json

scripts/
  collect_updates.py
  validate_tools.py

tests/
  test_collect_updates.py
  test_catalog_review_batch_8.py
  test_catalog_review_batch_9.py

index.html
CONTRIBUTING.md
LICENSE
README.md
```

## Contributing

Contributions are welcome. Good contribution areas include:

- correcting inaccurate tool descriptions;
- adding or improving curated AI tools in `data/tools.json`;
- adding reliable upstream release sources;
- improving Arabic or English copy;
- parser fixes and regression tests;
- accessibility and UI improvements;
- source-health and monitoring improvements.

Before opening a pull request, read [`CONTRIBUTING.md`](CONTRIBUTING.md). For tool catalog changes, also read [`data/TOOLS_FORMAT.md`](data/TOOLS_FORMAT.md) and run `python scripts/validate_tools.py`. For collector changes, run `python -m pytest -q`.

## Maintenance approach

Creative AI favors small, reviewable changes. Source additions should be verifiable, tool links should point to official destinations, and automated collection changes should preserve partial success when one upstream feed fails.

## Project status

The project is actively maintained. The current focus is making the repository easier for outside contributors to understand, test, and extend while keeping the public experience lightweight.

## Maintainer

Primary maintainer: [@nael5x](https://github.com/nael5x)

## License

Creative AI is available under the MIT License. See [`LICENSE`](LICENSE).
