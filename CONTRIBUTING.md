# Contributing to Creative AI

Thanks for helping improve Creative AI. The project favors small, reviewable pull requests with verifiable sources.

## Good first contributions

- Correct a tool description or official link.
- Improve Arabic or English wording.
- Add a missing tool to `data/tools.json`.
- Report a broken monitored source.
- Improve accessibility or responsive behavior.
- Add focused tests for parser behavior.

## Before you start

1. Check existing issues and pull requests to avoid duplicate work.
2. For larger changes, open an issue first and explain the problem and proposed approach.
3. Keep one pull request focused on one problem.

## Local workflow

```bash
git clone https://github.com/nael5x/creative-ai.git
cd creative-ai
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

If your change touches monitored feeds, you can run:

```bash
python scripts/collect_updates.py
```

If your change touches the curated directory, read [`data/TOOLS_FORMAT.md`](data/TOOLS_FORMAT.md) and run:

```bash
python scripts/validate_tools.py
```

## Adding or editing a tool

Tool cards live in `data/tools.json`, not in `index.html`. Keep all six fields present, use the official destination URL, avoid marketing claims that cannot be verified, and run the catalog validator before opening a pull request.

## Pull request checklist

- Keep the diff as small as practical.
- Explain what changed and why.
- Link the relevant issue when one exists.
- Test the affected behavior locally.
- Use official sources for tool and release claims.
- Do not submit bulk typo/spam changes.
- Do not submit AI-generated changes that you have not personally reviewed and tested.

## Review and maintenance

The maintainer may ask for smaller scope, additional verification, or tests before merging. Review comments are part of the contribution process; update the same branch rather than opening duplicate pull requests.
