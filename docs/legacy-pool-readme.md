# Ariadne Daedalus Knowledge Pool

A curated, version-aware and provenance-first support knowledge base for Daedalus. This repository is an independent content interface: human readers use the [FAQ](faq/README.md), while retrieval systems consume validated JSON entries and the generated [`indexes/manifest.json`](indexes/manifest.json).

## Quick start

```sh
python3 -m pip install -r requirements-dev.txt
python3 tools/validate.py
python3 -m unittest discover -s tests -v
python3 tools/build_index.py --check
python3 tools/build_faq.py --check
```

Start with [the architecture](docs/architecture.md), [contributing workflow](CONTRIBUTING.md), and [safety policy](docs/safety.md). Content is factual troubleshooting guidance, not a substitute for safeguarding recovery phrases. **No legitimate support agent needs a recovery phrase or spending password.**

## Layout

- `knowledge/` — one narrowly scoped JSON troubleshooting record per file
- `sources/registry.json` — normalized source provenance
- `faq/` — curated public FAQ and machine-readable FAQ map
- `schemas/` — JSON Schemas defining the stable interface
- `taxonomy/` — controlled issue categories
- `indexes/` — generated discovery manifest
- `docs/` — architecture, evidence, versions, and safety rules
- `research/` — non-published research queue
- `tools/` — dependency-free validation and index generation
