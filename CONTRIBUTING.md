# Contributing

1. **Research:** add a dated candidate to `research/queue.json`; inspect the original source and search for independent/official corroboration.
2. **Scope claims:** separate symptoms, confirmed/suspected causes, workaround, and permanent fix. Record exact errors verbatim and a normalized retrieval form.
3. **Register sources:** add provenance to `sources/registry.json`, including unavailable dates as `null`, source role, trust, and mentioned versions. Paraphrase; do not copy posts.
4. **Create one focused entry:** copy `knowledge/_template.json.example`, use a permanent `DAE-NNNN` ID, controlled taxonomy pair, explicit applicability, source IDs on every cause/step, and safety metadata.
5. **Evaluate evidence:** apply `docs/evidence-model.md`; preserve conflicts and explain confidence. Never infer a version range from isolated reports.
6. **Review safety:** confirm no secrets are requested and destructive/network/security steps have prerequisites, consequences, and recovery notes.
7. **Consider FAQ promotion:** promote only if common/important/confusing, safely concise, and adequately evidenced. Add a catalog item and prose answer; otherwise explain non-promotion.
8. **Validate and generate:** run `python3 tools/validate.py` and `python3 tools/build_index.py`; commit the generated manifest with content.
9. **Peer review:** verify every claim against its linked source, test references, check duplicates, and set review/verification dates accurately.

IDs are never reused. Correct by lifecycle transition or a new superseding entry; do not erase historical behavior.

## Canonical repository and submissions

All shared Daedalus knowledge is maintained in
`se7en-labs-inc/daedalus-support-knowledge`. Submit feature branches as pull
requests to its existing `main` branch. There is no knowledge `staging` branch.
The personal pool is retained only as migration provenance, not a second source.

Run the Python validation and unit tests, normalizer tests, index/FAQ checks,
`python3 tools/build_coverage.py --check`, `npm test` and `npm run format:check`.
Do not reformat the preserved archive. See `docs/migration.md` for the inventory
and `help-centre/README.md` for publication decisions and generated outputs.
Keep private research and customer conversations outside this repository;
`research/queue.json` contains only generic public research topics.

## Executable contract

Install the pinned development dependency with `python3 -m pip install -r requirements-dev.txt`. `tools/validate.py` executes all three JSON Schemas with Draft 2020-12 format checking, then applies taxonomy, provenance, reference, version-scope, safety, FAQ, and lifecycle relationship rules. Run the rejection tests with `python3 -m unittest discover -s tests -v`.

Edit FAQ prose only in `faq/catalog.json`, retain source IDs on every answer paragraph, and regenerate `faq/README.md` with `python3 tools/build_faq.py`. Capture a SHA-256 source snapshot identity and retrieval timestamp when registering evidence; do not recalculate an old digest as though it were the original capture.

Source snapshots live at the registry's `snapshot_path`. Retain only a sanitized structured factual representation: provider object ID, exact permalink, source author, publication/retrieval timestamps, and the statements used as evidence. Material issue comments are separate sources from issue bodies and from other comments. Follow `utf8-json-sort-keys-compact-lf-v1` exactly and let validation recompute the recorded SHA-256 digest. Never retain attachments, diagnostic archives, wallet addresses, credentials, recovery material, or unnecessary personal information.

For operating systems, networks, and hardware wallets, select an explicit applicability scope: `all`, `specific`, `unknown`, or `not_applicable`. Only `specific` has values. Use `unknown`—never `all`—when the evidence does not mention that environment dimension.

Snapshot `statements` are faithful normalized editorial summaries, never direct quotations or archival copies. Their digest authenticates only the retained normalized JSON record. It does not authenticate the current remote page or replace editorial source review. Preserve the source's meaning, cite the exact issue body or individual comment, and do not combine later discussion into an issue-body source.
