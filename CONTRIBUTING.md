# Contributing to Creative AI

Thanks for your interest in improving Creative AI.

The project aims to stay practical, verifiable, bilingual, and easy to maintain. Small focused pull requests are preferred over large unrelated changes.

## Good contribution ideas

- Correct inaccurate tool descriptions or broken links
- Add a useful AI tool that fits the directory
- Suggest a trustworthy release or project source
- Improve English or Arabic wording
- Fix accessibility or responsive-layout problems
- Improve the update collector
- Add validation or automated tests

## Before you start

For anything larger than a small correction, open an issue first and explain what you want to change and why.

Please avoid:

- bulk low-value typo changes
- adding promotional links without clear user value
- copying marketing claims without verification
- unrelated refactors mixed into feature changes
- AI-generated changes that have not been reviewed and tested

## Development setup

Clone your fork, then serve the repository locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

To refresh the monitored data manually:

```bash
python scripts/collect_updates.py
```

## Pull request workflow

1. Fork the repository.
2. Create a focused branch.
3. Make one coherent change.
4. Test it locally.
5. Open a pull request with a clear explanation.

A useful pull request description should include:

```text
## What
What changed?

## Why
What problem does this solve?

## How
How did you implement and test it?

## Checklist
- [ ] Tested locally
- [ ] Links point to appropriate original sources
- [ ] No duplicate tool/source was added
- [ ] English/Arabic copy was checked when relevant
```

## Adding a monitored source

When proposing a source for `scripts/collect_updates.py`:

- Prefer an official release feed or first-party source.
- Explain why the source is useful to Creative AI users.
- Avoid sources that primarily republish unverified claims.
- Confirm the feed can be parsed reliably.
- Keep source descriptions factual and concise.

## Adding or correcting a tool

When changing the public directory:

- Prefer the product's official URL.
- Describe what the tool is useful for, not just its marketing slogan.
- Avoid unverifiable superlatives.
- Check that the category and pricing label are reasonable at the time of the change.
- Keep English and Arabic user experience in mind.

## Reviews

Maintainer feedback may ask for smaller scope, stronger sourcing, clearer wording, or tests. Please keep discussion focused on the proposed change.
