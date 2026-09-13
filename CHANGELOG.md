# Changelog

All notable changes to Creative AI are documented in this file.

## [0.1.0] - 2026-09-13

### Added
- MIT license and open-source contribution guidelines.
- Issue and pull request templates for maintainers and contributors.
- `data/tools.json` as the contributor-friendly source of truth for the curated AI tool catalog.
- Tool catalog validation through `scripts/validate_tools.py` and GitHub Actions.
- Automated Atom and RSS parser regression tests using local XML fixtures.
- GitHub Actions coverage for feed parser changes.
- Per-source health reporting for the update monitor, including healthy/failed counts and concise failure summaries.
- Partial-success behavior so healthy sources continue publishing even when another upstream feed fails.

### Changed
- The public directory now loads curated tools from `data/tools.json` instead of keeping the catalog embedded in `index.html`.
- Repository documentation now explains the project architecture, local development, validation, testing, and contribution workflow.

### Reliability
- Malformed or incomplete tool catalog records are rejected by validation.
- Incomplete Atom/RSS entries are skipped before reaching the public feed.
- Feed parser regressions are checked automatically in CI.
- Source failures are visible to maintainers without exposing noisy stack traces in generated output.

### Notes
This is the first documented open-source release milestone for Creative AI. The next focus is improving contributor onboarding, expanding test coverage, and attracting external contributors through small, well-scoped issues.
