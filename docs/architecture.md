# Architecture and design decisions

`se7en-labs-inc/daedalus-support-knowledge` is the canonical source for shared
Daedalus entries, FAQs, reviewed guides, source evidence and preserved archives.
The existing Node archive acquisition pipeline and the Python curated schema,
normalization, validation and coverage tools coexist here. Ariadne owns only
application code, its integration/compiler and a generated pinned public snapshot;
its own internal knowledge remains supported under its separate approval rules.
No consumer should edit a generated snapshot or depend on the former personal pool.

## Content format

Knowledge and provenance use formatted JSON rather than prose with front matter. JSON is unambiguous, dependency-free to parse, directly schemaable, diffable, and safe for generated consumers. Each file is one narrow retrieval unit; explanatory prose lives inside typed fields. JSON Schemas are the normative contract, while `tools/validate.py` enforces cross-file rules that schemas cannot.

Source records are normalized in one registry. Entries reference stable source IDs, preventing repeated or drifting citation metadata. The registry contains concise annotations, not copied articles.

## Version applicability

`applicability.daedalus.scope` is one of `universal`, `specific`, `range`, `before`, `after`, or `unknown`. Bounds are inclusive when present. `versions` enumerates only evidenced exact releases. Introduction, first/last observed affected, and fixed-in fields describe different claims and must not be inferred from one another. Unknown boundaries remain `null`; dates never stand in for guessed versions. Retrieval should rank an exact version, then an evidenced range, then universal knowledge, and use unknown-scope records only as cautious candidates.

## Time and provenance

Every entry has created, reviewed, and (where behavior was actually checked) verified dates. Every source has access and publication/update/problem/confirmation dates where obtainable; unavailable dates are explicit `null`. A substantive cause or step cites source IDs. Updating a source must not silently rewrite the meaning of an older claim.

## Evidence and confidence

Evidence classification describes _kind_, confidence describes _strength_. Official evidence remains official; community corroboration never becomes official. See [the evidence model](evidence-model.md). Conflicts are preserved explicitly. Confidence is editorial, not a numeric average: authority, independence, directness, version match, reproducibility, and recency must be weighed and explained.

## FAQ promotion

FAQ publication is an editorial decision, not a side effect of entry creation. Promotion requires real demand, material importance or confusion, a concise safe answer, and adequate evidence. Highly contextual, rare, unsafe, or unresolved records remain retrievable only. `faq/catalog.json` must agree with `faq.promoted` metadata.

## Lifecycle and supersession

Records are retained with statuses: active, historical, superseded, deprecated, unverified, unsafe, incorrect, or merged. Superseded/merged records point to another stable ID and explain why. Consumers should filter unsafe/incorrect records from suggested actions, but may retain them for warning and audit. Git history is not the lifecycle model.

## Ariadne consumption

The stable boundary is validated JSON plus `indexes/manifest.json`. Consumers should ingest each entry, index exact errors and user phrases, filter on safety/lifecycle, and rank on version/OS/network/hardware applicability and evidence. Entry bodies remain authoritative; the manifest is generated discovery metadata, never edited by hand. No application database, embedding model, or AI provider is assumed.

## Research, duplication, and conflict

Research begins as a generic public topic in `research/`; private evidence stays outside this repository. Guidance is published only after source inspection, claim/source mapping, safety review, and version/date annotation. Search IDs, titles, symptoms, errors, and aliases before adding a record. Merge duplicate symptoms into one record when applicability and remedy agree. If evidence disagrees, retain the disagreement in `evidence.conflicts`, narrow applicability, reduce confidence, and never select the preferred outcome without evidence.

## Claim-level attribution and source snapshots

Substantive entry text is stored as a claim object containing `text` and one or more `source_ids`. This applies to summaries, problem statements, symptoms, aliases, applicability, expected outcomes, causes, diagnostics, and resolutions. FAQ answer paragraphs use the same object. Cross-document validation rejects a claim whose source is absent from both the registry and its owning entry.

Every registry record identifies a retained sanitized snapshot by path, representation format, canonicalization method, and SHA-256 digest. Provider IDs, exact permalinks, authors, and publication/retrieval timestamps remain explicit. A materially changed source is captured as a new source revision rather than silently replacing prior evidence.

## Canonical FAQ

`faq/catalog.json` is the only editable FAQ representation. It contains questions, attributed answer paragraphs, lifecycle status, and linked knowledge IDs. `tools/build_faq.py` generates `faq/README.md`; CI rejects drift with `--check`. The FAQ schema and cross-reference checks run with the other executable schemas.

### Reproducible sanitized snapshot representation

Each `snapshot_path` points to retained structured JSON in `sources/snapshots/`. Its `statements` are normalized editorial summaries: faithful paraphrases written for clarity and safe reuse, not direct quotations, raw captures, or archival copies of the remote page. A snapshot hash proves only the integrity of this stored normalized record; it does not prove that the remote page remains unchanged or that the paraphrase is independently correct. Reviewers must compare each statement with its exact permalink.

The snapshot also contains provider and stable provider-object identifiers, exact permalink, author and association, source state, available update time, publication/retrieval timestamps, and required sanitation declarations. Attachments, diagnostic archives, wallet addresses, credentials, recovery material, unnecessary personal information, and lengthy copyrighted content are excluded.

The digest is reproducible: parse the stored normalized snapshot JSON, serialize it as UTF-8 JSON with keys sorted, no insignificant whitespace, Unicode preserved, and exactly one trailing LF (`utf8-json-sort-keys-compact-lf-v1`), then compute SHA-256 over those bytes. Validation recomputes every digest, compares identity fields with the registry, requires the editorial-summary and sanitation declarations, rejects missing snapshots, and rejects unregistered snapshot files.

### Explicit environment dimensions

Operating system, network, and hardware-wallet applicability are objects with a `scope` of `all`, `specific`, `unknown`, or `not_applicable` plus `values`. Only `specific` may contain values. In particular, an empty/unknown observation is never encoded as `all`; retrieval must filter or down-rank `unknown` rather than treating it as universally applicable.
