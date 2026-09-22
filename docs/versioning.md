# Version and date conventions

Versions are strings preserving the publisher's spelling. Do not coerce prereleases or invent semantic ranges. A `specific` scope needs explicit `versions`; a `range` needs at least one bound; `before` uses `max`; `after` uses `min`; `unknown` has no asserted boundary. Bounds are inclusive.

`introduced_in` is a feature/defect introduction claim. `first_known_affected` and `last_known_affected` are observations, not proof that every intervening release is affected. `fixed_in` requires evidence of a fix. Each statement must be source-backed.

Dates use ISO `YYYY-MM-DD`. `last_verified` is `null` unless behavior or an authoritative current statement was checked; reviewing prose alone updates `last_reviewed`, not verification.

Applicability itself is an attributed claim: `applicability.source_ids` must point to evidence that states the version, OS, network, or hardware scope. A filing or publication date is never converted into a product version. A fix may set `fixed_in` only when the cited release or maintainer evidence identifies that outcome.

Environment applicability uses the same no-inference rule as versions. `all` requires evidence of platform independence; `specific` enumerates evidenced values; `unknown` means the source does not establish the dimension; and `not_applicable` means the dimension cannot affect the claim. Consumers must not equate `unknown` with `all`.
