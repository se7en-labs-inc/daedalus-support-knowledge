# Version and date conventions

Versions are strings preserving the publisher's spelling. Do not coerce prereleases or invent semantic ranges. A `specific` scope needs explicit `versions`; a `range` needs at least one bound; `before` uses `max`; `after` uses `min`; `unknown` has no asserted boundary. Bounds are inclusive.

`introduced_in` is a feature/defect introduction claim. `first_known_affected` and `last_known_affected` are observations, not proof that every intervening release is affected. `fixed_in` requires evidence of a fix. Each statement must be source-backed.

Dates use ISO `YYYY-MM-DD`. `last_verified` is `null` unless behavior or an authoritative current statement was checked; reviewing prose alone updates `last_reviewed`, not verification.

Applicability itself is an attributed claim: `applicability.source_ids` must point to evidence that states the version, OS, network, or hardware scope. A filing or publication date is never converted into a product version. A fix may set `fixed_in` only when the cited release or maintainer evidence identifies that outcome.

Environment applicability uses the same no-inference rule as versions. `all` requires evidence of platform independence; `specific` enumerates evidenced values; `unknown` means the source does not establish the dimension; and `not_applicable` means the dimension cannot affect the claim. Consumers must not equate `unknown` with `all`.

## Locales, revisions and translations

Knowledge entries and FAQ items are English unless they say otherwise. The optional `locale` field is `en` or `ja`; an item without `locale` is English. A Japanese item is a separate record with its own ID, written from one English record.

Translations need their own counter, so each entry and FAQ item carries `revision`, a positive integer that defaults to 1 when absent. It moves only when an editor raises it, so the validator can compare a translation with its source.

Raise `revision` whenever a change would alter what a translator has to say: the meaning of a claim, an added or removed step, a changed source. Leave it alone for typo fixes, `last_reviewed` or `last_verified` updates and source re-captures that do not change a claim.

A Japanese item sets `translates`:

```json
{
  "locale": "ja",
  "revision": 1,
  "translates": { "id": "FAQ-101", "revision": 2 }
}
```

`translates.id` names the English item of the same kind (`FAQ-NNN` in the FAQ catalog, `DAE-NNNN` among knowledge entries) and `translates.revision` records the English revision the translation was written from. The Japanese item's own `revision` counts edits to the Japanese text. An English item cannot set `translates`, and a Japanese item must.

`tools/validate.py` fails when:

- `translates.id` names no item, or an item that is not English;
- `translates.revision` is lower than the English item's current revision, which means the translation is stale;
- `translates.revision` is higher than the English item's current revision, which means it names a revision that does not exist.

A Japanese item keeps the same source IDs as its English original, so a translated claim stays tied to the same evidence. The generated `faq/README.md` lists English items first and Japanese items in a separate section.
