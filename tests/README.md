# Tests

Feed parser regression coverage lives in `test_collect_updates.py`.

Run the suite from the repository root with:

```bash
python -m unittest discover -s tests -p "test_*.py" -v
```

The tests use local Atom and RSS fixtures and do not make network requests.
