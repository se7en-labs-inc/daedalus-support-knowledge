# Canonical knowledge consolidation (2026-09-22)

`se7en-labs-inc/daedalus-support-knowledge` is the sole editable source for shared
Daedalus knowledge. Its existing branch convention is `main`; the original archive
tooling at `310bae1423cb84a5efdbdec502a116a27798008a` is retained.

The imported material came from `Liberty-Chris/ariadne-knowledge-pool` revision
`91332970d3b34af13a99a0f95bfe7ab97e8ba622` (merged there in PR #2). The original dump
revision is `619c5792eb57022b55b03fe94c4acf56de84b8ed`. This attribution is historical,
not an ongoing dependency. The personal checkout is preserved unchanged.

`sources/migration.json` inventories all 258 source files with source/destination
paths, original SHA-256 and byte size. The former README is preserved as
`docs/legacy-pool-readme.md`, historical documentation only. Four groups of exact
file duplicates retain their original names so existing references remain valid.
There were no path collisions or competing curated records in the destination.
Documentation, CI, ignores, a test fixture's copy exclusions and the normalizer's
description are adapted; content records, review hashes, schemas, source snapshots
and all raw source bytes retain their meaning and identity.

Coverage generation moved from Ariadne's compiler to `tools/build_coverage.py`.
It independently reproduces the inventory using the canonical normalizer and
records a deterministic input digest, not its own changing Git HEAD. It accepts
only the byte-verified preserved archive listed in the migration inventory; new
raw material requires an explicit acquisition, privacy and safety review before
updating that inventory. It is not a general wallet-secret scanner. Ariadne still
screens normalized input and the public projection in its application security
boundary before snapshot output. No private support intake, data directory,
credentials or customer conversations were migration inputs.

The original export has 121 full articles: 108 need review, nine are historical,
four are excluded (three templates and one event). All 139 release titles remain
title-only, excluded from public answers. There are 187 image files, 209 image
occurrences / 208 distinct references and 22 missing occurrences / 21 distinct
missing references. The source export's zero downloads, nine failures and 38
external-image counters disagree with those files; coverage retains both facts.
Nine reviewed current guides and one historical guide are publication-approved
among 16 curated entries, 22 sources and 11 catalog FAQs. Import is not review.

No normalized article-body duplicates or same-ID/title conflicts were found.
This is a lexical comparison, not proof that historical guidance is compatible.
Differing versions remain separate evidence; no semantic conflicts are resolved
by choosing whichever file was copied last. Raw images are historical reference,
not approved Help Centre assets; no screenshots are silently modernized or OCR'd
into authoritative instructions. Existing missing-image fallbacks remain textual.

The generic `research/queue.json` topics contain no private evidence. Private
customer summaries remain outside published repositories and all public indexes.
The old personal repository must not receive further shared-content edits.

Before adopting a snapshot: run both sets of repository checks, merge the canonical
content PR to `main`, check out the snapshot's full canonical revision, then run
Ariadne's prepare/check integration. Do not edit the bundled snapshot directly.
Page requests and application builds require neither this checkout nor GitHub.
