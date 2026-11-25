# Public Help Centre edition

This canonical repository owns curated entry, source, evidence, FAQ and publication
schemas. `publication.json` records every entry's disposition. A decision that
withholds an entry (`approved: false`) states its reason; an approval needs none.
A pull request that adds or changes an entry sets that entry's record (`status`,
`approved`); the owner's merge of the pull request approves the entry as written.
Importing or reformatting content never approves it. Local Help Centre testing
was approved on 2026-09-22, distinct from the 2026-09-21 source review and wallet
runtime testing.

Edit entries and source snapshots here, keep permanent DAE/SRC IDs and actual
applicability, and regenerate `indexes/manifest.json` and `faq/README.md` using the
Python tools. `python3 tools/build_coverage.py` generates editorial coverage and
`--check` rejects drift. It pins an input digest plus original acquisition
provenance, not the report's own commit. All 121 full articles and 139 title-only
records are accounted for; no raw article or image becomes approved by import.
See `docs/migration.md` for duplicate reconciliation and asset discrepancies.

The Ariadne application owns its public projection compiler, security scanner and
runtime integration. After editorial review, record the decision here, validate/generate
coverage and commit the content in the same pull request. Then prepare/check the
application snapshot from the clean canonical checkout. The snapshot records this
repository and full source revision and is never edited independently. No
personal-pool checkout is required.

To withdraw, set `approved: false` with a reason, fix related links, regenerate,
commit and rebuild consumers. Replacement guidance uses a new ID and explicit
supersession; original evidence remains. Guidance that is no longer valid for
the current release is deleted, not kept under a historical status. Rollback can restore withdrawn advice: inspect
the old snapshot before rolling back an application.

Keep private research/conversations outside the repository. Generic topic demand
is not confirmation of a cause or remedy. Raw originals are preserved here for
review, never copied wholesale to public Help routes or search indexes.
