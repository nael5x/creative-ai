# Creative AI

Creative AI is a bilingual directory and automated update monitor for AI tools, open-source projects, releases, and verified discovery signals.

The project combines a lightweight static website with a scheduled GitHub Actions workflow that refreshes `data/updates.json` every six hours from trusted sources.

## Features

- English and Arabic interface
- Curated AI tools grouped by practical use case
- Search and category filters
- Automated release monitoring
- Source-linked update feed
- Static-site architecture with no backend required
- GitHub Actions refresh every six hours

## How it works

1. `scripts/collect_updates.py` fetches release feeds and discovery sources.
2. Entries are normalized and deduplicated.
3. The script writes the latest signals to `data/updates.json`.
4. `.github/workflows/source-monitor.yml` runs the collector on a schedule and commits fresh data.
5. `index.html` renders the public bilingual directory and update feed.

## Monitored sources

The current collector includes sources such as:

- Ollama
- LangChain
- Hugging Face Transformers
- ComfyUI
- Open WebUI
- Flowise
- Langflow
- n8n
- LlamaIndex
- Product Hunt (discovery only)

Important claims should always be checked against the original source linked by the project.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── source-monitor.yml
├── data/
│   └── updates.json
├── scripts/
│   └── collect_updates.py
├── index.html
├── CONTRIBUTING.md
└── README.md
```

## Run locally

You can serve the repository with any simple static HTTP server.

For example, with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Refresh update data manually

Requires Python 3.12+.

```bash
python scripts/collect_updates.py
```

The command updates:

```text
data/updates.json
```

## Contributing

Contributions are welcome. Useful contributions include:

- adding or correcting AI tool information
- suggesting reliable monitored sources
- improving Arabic or English copy
- fixing accessibility or responsive-layout issues
- improving collector reliability
- adding tests and validation

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Maintainer

Primary maintainer: [@nael5x](https://github.com/nael5x)

## Project status

Creative AI is under active development. The public directory is usable today, while the open-source maintenance workflow, contribution process, testing, and release process are being expanded.

## License

A project license has not been selected yet. Until a license is added, the repository should not be assumed to grant reuse or redistribution rights beyond GitHub's platform terms.
