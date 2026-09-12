# Creative AI

Creative AI is a bilingual AI update monitor and practical directory for tools, releases, open-source projects, and verified discovery signals.

The public site combines a curated tool directory with an automated source monitor that refreshes `data/updates.json` every six hours through GitHub Actions.

## What the project does

- Explains practical AI tools in English and Arabic.
- Groups tools by purpose so users can search by task instead of brand name alone.
- Monitors selected upstream release feeds and discovery sources.
- Publishes fresh update data automatically through GitHub Actions.
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
      └─ writes data/updates.json

.github/workflows/source-monitor.yml
  └─ runs the collector every six hours

scripts/validate_tools.py
  └─ validates tool catalog structure and URLs

.github/workflows/validate-tools.yml
  └─ validates catalog changes on pull requests
```

## Monitored sources

The current monitor includes official or project release feeds for tools such as Ollama, LangChain, Hugging Face Transformers, ComfyUI, Open WebUI, Flowise, Langflow, n8n, and LlamaIndex. Product Hunt is included as a discovery-only source and should not be treated as an official release feed.

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

## Project structure

```text
.github/
  ISSUE_TEMPLATE/
  workflows/
    source-monitor.yml
    validate-tools.yml
  PULL_REQUEST_TEMPLATE.md

data/
  tools.json
  TOOLS_FORMAT.md
  updates.json

scripts/
  collect_updates.py
  validate_tools.py

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

Before opening a pull request, read [`CONTRIBUTING.md`](CONTRIBUTING.md). For tool catalog changes, also read [`data/TOOLS_FORMAT.md`](data/TOOLS_FORMAT.md) and run `python scripts/validate_tools.py`.

## Maintenance approach

Creative AI favors small, reviewable changes. Source additions should be verifiable, tool links should point to official destinations, and automated collection changes should preserve partial success when one upstream feed fails.

## Project status

The project is actively maintained. The current focus is making the repository easier for outside contributors to understand, test, and extend while keeping the public experience lightweight.

## Maintainer

Primary maintainer: [@nael5x](https://github.com/nael5x)

## License

Creative AI is available under the MIT License. See [`LICENSE`](LICENSE).
