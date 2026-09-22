#!/usr/bin/env python3
"""Generate the human FAQ from faq/catalog.json, its canonical representation."""
from pathlib import Path
import argparse, json, sys
ROOT = Path(__file__).resolve().parents[1]
CATALOG, OUTPUT = ROOT / "faq/catalog.json", ROOT / "faq/README.md"

def render():
    catalog = json.loads(CATALOG.read_text())
    lines = ["# Daedalus support FAQ", "", "This file is generated from `faq/catalog.json`; do not edit it directly.", ""]
    for item in catalog["items"]:
        if item["status"] != "published":
            continue
        lines += [f"## {item['question']}", ""]
        lines += [claim["text"] for claim in item["answer"]]
        lines += ["", "Related knowledge: " + ", ".join(f"`{entry}`" for entry in item["knowledge_entries"]) + ".", ""]
    return "\n".join(lines)

def main():
    parser=argparse.ArgumentParser(); parser.add_argument("--check", action="store_true"); args=parser.parse_args(); content=render()
    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_text() != content:
            print("faq/README.md is stale; run tools/build_faq.py", file=sys.stderr); return 1
        print("FAQ is current."); return 0
    OUTPUT.write_text(content); print("Wrote faq/README.md."); return 0
if __name__ == "__main__": sys.exit(main())
