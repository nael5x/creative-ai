# Tests

Feed parser regression coverage lives in `test_collect_updates.py`; the other modules cover catalog data, lifecycle rules, and public-page behavior.

Run the suite from the repository root with:

```bash
python -m pip install pytest
python -m pytest -q
```

The tests use local Atom and RSS fixtures and do not make network requests.

Use pytest for the full suite: unittest discovery alone skips function-based tests.
