# Public Help Centre edition

This canonical repository owns curated entry, source, evidence, FAQ and publication
schemas. `publication.json` records every entry's disposition and reason. Approval
binds entry, source records and associated FAQ with `reviewedContentHash`; importing
or reformatting content never verifies it. Local Help Centre testing was approved
on 2026-09-22, distinct from the 2026-09-21 source review and wallet runtime testing.

Edit entries and source snapshots here, keep permanent DAE/SRC IDs and actual
applicability, and regenerate `indexes/manifest.json` and `faq/README.md` using the
Python tools. `python3 tools/build_coverage.py` generates editorial coverage and
`--check` rejects drift. It pins an input digest plus original acquisition
provenance, not the report's own commit. All 121 full articles and 139 title-only
records are accounted for; no raw article or image becomes approved by import.
See `docs/migration.md` for duplicate reconciliation and asset discrepancies.

The Ariadne application owns its public projection compiler, security scanner and
runtime integration. From that checkout, `scripts/prepare-help-centre.ts --source
../daedalus-support-knowledge --review-hash DAE-xxxx` is a read-only review helper;
computing a fingerprint does not approve publication. After editorial review,
record the decision here, validate/generate coverage and commit the content. Then
prepare/check the application snapshot from the clean canonical checkout. The
snapshot records this repository and full source revision and is never edited
independently. No personal-pool checkout is required.

To withdraw, set `approved: false` with a reason, fix related links, regenerate,
commit and rebuild consumers. Replacement guidance uses a new ID and explicit
supersession; original evidence remains. Historical guidance is visibly separated
and excluded from current search. Rollback can restore withdrawn advice: inspect
the old snapshot before rolling back an application.

Keep private research/conversations outside the repository. Generic topic demand
is not confirmation of a cause or remedy. Raw originals are preserved here for
historical review, never copied wholesale to public Help routes or search indexes.
