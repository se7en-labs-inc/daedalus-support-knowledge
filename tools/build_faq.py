#!/usr/bin/env python3
"""Generate the human FAQ from faq/catalog.json, its canonical representation."""
from pathlib import Path
import argparse, json, sys
ROOT = Path(__file__).resolve().parents[1]
CATALOG, OUTPUT = ROOT / "faq/catalog.json", ROOT / "faq/README.md"

HEADER = [
    "# Daedalus support FAQ",
    "",
    "This file is generated from `faq/catalog.json`; do not edit it directly.",
    "",
]

LOCALE_NOTES = [
    "## Locales and revisions",
    "",
    "Items in `faq/catalog.json` carry three optional fields.",
    "",
    "- `locale` is `en` or `ja`. An item without `locale` is English.",
    "- `revision` is a positive integer that defaults to 1. Raise it whenever the answer changes in a way a translator must follow.",
    '- `translates` is set only on a Japanese item, as `{"id": "<English FAQ id>", "revision": <revision>}`. It names the English item and the revision the translation was written from.',
    "",
    "Validation fails when the named English item is missing or is not English, and when the translation records a revision older than the English item's current one. Knowledge entries use the same three fields. See `docs/versioning.md`.",
    "",
]


def section(items):
    lines = []
    for item in items:
        lines += [f"## {item['question']}", ""]
        lines += [claim["text"] for claim in item["answer"]]
        lines += ["", "Related knowledge: " + ", ".join(f"`{entry}`" for entry in item["knowledge_entries"]) + ".", ""]
    return lines


def render():
    catalog = json.loads(CATALOG.read_text())
    published = [item for item in catalog["items"] if item["status"] == "published"]
    lines = list(HEADER)
    lines += section([item for item in published if item.get("locale", "en") == "en"])
    japanese = [item for item in published if item.get("locale", "en") == "ja"]
    if japanese:
        lines += ["# Japanese (ja)", ""] + section(japanese)
    lines += LOCALE_NOTES
    return "\n".join(lines)

def main():
    parser=argparse.ArgumentParser(); parser.add_argument("--check", action="store_true"); args=parser.parse_args(); content=render()
    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_text() != content:
            print("faq/README.md is stale; run tools/build_faq.py", file=sys.stderr); return 1
        print("FAQ is current."); return 0
    OUTPUT.write_text(content); print("Wrote faq/README.md."); return 0
if __name__ == "__main__": sys.exit(main())
