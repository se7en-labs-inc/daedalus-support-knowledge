# Daedalus Support Knowledge

This is the canonical repository for all shared Daedalus support knowledge:
curated entries, FAQs, guides, source records, archives and assets. Ariadne consumes
reviewed content from a pinned revision alongside its own internal knowledge.
The former personal pool is migration provenance only; no consumer needs it.

Start with [contributing](CONTRIBUTING.md), [architecture](docs/architecture.md),
[publication review](help-centre/README.md) and [migration coverage](docs/migration.md).
Changes use feature branches and pull requests to the existing `main` branch.
Archived content and generic research topics are evidence, not current guidance.

Original Input Output / IOHK / IOG support documentation and associated
media remain the property of their respective copyright holders.

SE7EN Labs does not claim copyright ownership of archived Input Output
materials and does not grant any additional license to those materials.

Original source URLs, article identifiers, retrieval dates, and attribution
are retained wherever available.

Material created independently by SE7EN Labs will be identified separately.

## Layout

```text
articles/                    normalized Markdown with provenance frontmatter
assets/<article-id>/         locally retained article images and attachments
raw/<article-id>.html        source HTML used for audit and reconstruction
manifest.json                deterministic article and asset inventory
discovered-articles.json     reviewable discovery result (generated)
archive-report.json          machine-readable archival result (generated)
help-center-dump/            preserved original public export and 187 local images
knowledge/                   16 stable curated entries (DAE identifiers)
sources/                     22 evidence records, snapshots and migration inventory
faq/                         canonical catalog and generated FAQ
schemas/, taxonomy/          validated shared content contracts
indexes/manifest.json         generated curated entry discovery metadata
help-centre/                 publication decisions and generated coverage
research/                    generic public topics only; never customer evidence
tools/                       acquisition, normalization, validation and generators
package.json                 standalone archive commands and dependencies
```

Archived content is separate from the implementation under `tools/`. The archive has no dependency on Ariadne application code and can run as a standalone Node.js project.

## Install and test

Node.js 20.9 or newer and Python 3 with the pinned development requirements are required for preparation. Consumers need only their bundled snapshot at runtime.

```sh
npm ci
python3 -m pip install -r requirements-dev.txt
python3 tools/validate.py
python3 -m unittest discover -s tests -v
python3 tools/test_normalize_help_dump.py
python3 tools/build_index.py --check
python3 tools/build_faq.py --check
python3 tools/build_coverage.py --check
npm test
npm run format:check
```

Tests use only local fixtures and never contact Zendesk.

## Inspect discovery

```sh
npm run archive:discover
```

Discovery reads public HTML under `https://iohk.zendesk.com/hc/en-us`. A candidate must occur within an explicitly established Daedalus hierarchy or Daedalus-labelled local link/navigation context. A mention elsewhere on a mixed page does not make unrelated links eligible. `discovered-articles.json` is deterministically ordered and records the selection reason and discovery page. Discovery does not alter archived content.

Inspect this file before fetching. `completed` is false if a configured discovery bound was reached; only a completed discovery may mark previously archived records absent from its result as unavailable.

## Archive reviewed candidates

```sh
npm run archive:fetch
```

Or run both phases with `npm run archive`. Fetching saves source HTML under `raw/`, faithful normalized Markdown under `articles/`, and referenced images/downloadable support attachments under the article's `assets/` directory.

Every Markdown file has machine-readable frontmatter recording its title, original immutable URL and article ID, IOHK/Zendesk/Input Output provenance, retrieval time, language, product, and archive status. Original publication/update timestamps are included only when the source HTML reliably exposes them. Asset manifest entries retain original URL, local path, content type, SHA-256 content hash, and retrieval time.

## Incremental preservation

Each run compares the title, normalized body, exposed source timestamps, asset references, and freshly fetched asset bytes. An article is `unchanged` only if none of that archived material changed. Changed files retain their stable Zendesk article ID. Existing records absent from a **completed** discovery remain on disk and are marked `source_status: "unavailable"`; an incomplete bounded discovery never makes that inference.

Writes use same-directory temporary files and atomic renames. A failed article fetch does not overwrite its existing archive. `archive-report.json` records discovered, archived, unchanged, updated, failed, assets downloaded, and assets failed; material failures produce a nonzero exit status.

## Network and filesystem safety

- Primary pages use HTTPS on `iohk.zendesk.com` and remain beneath `/hc/en-us` through every redirect.
- Article URLs must match `/hc/en-us/articles/<numeric-id>`.
- Asset hosts are considered only for HTTPS asset URLs directly referenced by an accepted article. Asset redirects may not jump to an unrelated host.
- URLs containing credentials, ports, unsupported protocols, literal IPs, localhost, or DNS results in private/loopback ranges are rejected.
- Page JavaScript and downloaded code are never executed; scripts, frames, and embeds are excluded from normalized content.
- Filenames are sanitized and reduced to a basename before joining beneath `assets/<article-id>/`.
- Concurrency is deliberately serial and requests use a descriptive user agent, delay, timeout, bounded transient retries, response size limits, discovery bounds, and a per-article asset count limit.

The original Node archiver's root `manifest.json` remains empty: it has not fetched
the imported collection. The separate `help-center-dump/` preservation contains
121 full articles and 139 title-only release records; `help-centre/coverage.json`
accounts for these without inventing bodies or promoting archive guidance.
Before any further acquisition, review discovery/extraction quality and safety.
No archive asset is automatically published by Ariadne.
