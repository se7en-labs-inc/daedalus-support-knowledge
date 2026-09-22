#!/usr/bin/env python3
"""JSON Schema and cross-document validation for the Ariadne knowledge contract."""
from pathlib import Path
import argparse, hashlib, json, re, sys
from jsonschema import Draft202012Validator, FormatChecker
ROOT = Path(__file__).resolve().parents[1]


def load(path, errors):
    try:
        return json.loads(path.read_text())
    except Exception as exc:
        errors.append(f"{path.relative_to(ROOT)}: invalid JSON: {exc}")
        return None


def schema_errors(instance, schema_path, label):
    schema = json.loads(schema_path.read_text())
    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    result = []
    for failure in sorted(validator.iter_errors(instance), key=lambda item: list(item.absolute_path)):
        location = ".".join(str(part) for part in failure.absolute_path) or "$"
        result.append(f"{label} [{location}]: {failure.message}")
    return result


def validate(root=ROOT):
    global ROOT
    ROOT = Path(root)
    errors = []
    taxonomy = load(ROOT / "taxonomy/taxonomy.json", errors) or {"categories": {}}
    registry = load(ROOT / "sources/registry.json", errors) or {"sources": []}
    faq = load(ROOT / "faq/catalog.json", errors) or {"items": []}
    errors += schema_errors(registry, ROOT / "schemas/source.schema.json", "sources/registry.json")
    errors += schema_errors(faq, ROOT / "schemas/faq.schema.json", "faq/catalog.json")
    publication_path = ROOT / "help-centre/publication.json"
    if publication_path.exists():
        publication = load(publication_path, errors)
        errors += schema_errors(publication, ROOT / "schemas/help-publication.schema.json", "help-centre/publication.json")

    source_ids, source_urls = set(), set()
    for index, source in enumerate(registry.get("sources", [])):
        where = f"sources/registry.json sources[{index}]"
        source_id, url = source.get("id"), source.get("url")
        if source_id in source_ids:
            errors.append(f"{where}: duplicate source ID {source_id}")
        source_ids.add(source_id)
        if url in source_urls:
            errors.append(f"{where}: duplicate source URL {url}")
        source_urls.add(url)
        snapshot_meta = source.get("snapshot", {})
        relative_path = snapshot_meta.get("snapshot_path")
        if isinstance(relative_path, str):
            snapshot_path = ROOT / relative_path
            try:
                snapshot = json.loads(snapshot_path.read_text())
            except Exception as exc:
                errors.append(f"{where}: missing or invalid snapshot {relative_path}: {exc}")
            else:
                canonical = (json.dumps(snapshot, sort_keys=True, separators=(",", ":"), ensure_ascii=False) + "\n").encode("utf-8")
                digest = hashlib.sha256(canonical).hexdigest()
                if digest != snapshot_meta.get("sha256"):
                    errors.append(f"{where}: snapshot SHA256 mismatch for {relative_path}")
                expected = {
                    "source_id": source_id,
                    "provider_id": source.get("provider_id"),
                    "permalink": url,
                    "author": source.get("author"),
                    "author_association": source.get("author_association"),
                    "published_at": source.get("published_at"),
                    "updated_at": source.get("updated_at"),
                    "retrieved_at": source.get("accessed_at"),
                    "source_state": source.get("source_state"),
                }
                for field, value in expected.items():
                    if snapshot.get(field) != value:
                        errors.append(f"{where}: snapshot {field} does not match registry")
                representation = snapshot.get("representation", {})
                if representation.get("format") != snapshot_meta.get("representation_format"):
                    errors.append(f"{where}: snapshot representation format mismatch")
                if representation.get("canonicalization") != snapshot_meta.get("canonicalization"):
                    errors.append(f"{where}: snapshot canonicalization mismatch")
                if representation.get("statement_kind") != "normalized_editorial_summary" or representation.get("not_verbatim") is not True:
                    errors.append(f"{where}: snapshot must identify statements as non-verbatim normalized editorial summaries")
                if not representation.get("statements") or not all(isinstance(item, str) and item.strip() for item in representation.get("statements", [])):
                    errors.append(f"{where}: snapshot needs non-empty normalized statements")
                sanitation = representation.get("sanitization", {})
                required_redactions = ("attachments_removed", "diagnostic_archives_removed", "wallet_addresses_removed", "credentials_and_recovery_material_removed", "personal_information_removed", "lengthy_copyrighted_content_removed")
                if not all(sanitation.get(flag) is True for flag in required_redactions):
                    errors.append(f"{where}: snapshot must declare every required sanitation control")

    snapshot_dir = ROOT / "sources/snapshots"
    registered_snapshots = {source.get("snapshot", {}).get("snapshot_path") for source in registry.get("sources", [])}
    for snapshot_path in snapshot_dir.glob("*.json") if snapshot_dir.exists() else []:
        relative = snapshot_path.relative_to(ROOT).as_posix()
        if relative not in registered_snapshots:
            errors.append(f"{relative}: orphan snapshot is not registered")

    entries, paths, normalized_titles = {}, {}, {}
    for path in sorted((ROOT / "knowledge").rglob("*.json")):
        entry = load(path, errors)
        if entry is None:
            continue
        label = str(path.relative_to(ROOT))
        errors += schema_errors(entry, ROOT / "schemas/knowledge-entry.schema.json", label)
        entry_id = entry.get("id")
        if entry_id in entries:
            errors.append(f"{label}: duplicate entry ID {entry_id}")
        entries[entry_id], paths[entry_id] = entry, label
        title = re.sub(r"\W+", " ", entry.get("title", "").lower()).strip()
        if title in normalized_titles:
            errors.append(f"{label}: duplicate normalized title also in {normalized_titles[title]}")
        normalized_titles[title] = label

    def check_source_refs(refs, where, allowed=None):
        if not refs:
            errors.append(f"{where}: at least one source reference is required")
        for source_id in refs:
            if source_id not in source_ids:
                errors.append(f"{where}: missing source {source_id}")
            if allowed is not None and source_id not in allowed:
                errors.append(f"{where}: source {source_id} is absent from the entry sources")

    for entry_id, entry in entries.items():
        where = paths[entry_id]
        classification = entry.get("classification", {})
        category, subcategory = classification.get("category"), classification.get("subcategory")
        if category not in taxonomy["categories"]:
            errors.append(f"{where}: unknown category {category}")
        elif subcategory not in taxonomy["categories"][category]:
            errors.append(f"{where}: unknown subcategory {category}/{subcategory}")
        entry_sources = set(entry.get("sources", []))
        check_source_refs(entry_sources, f"{where} sources")
        for field in ("summary", "problem", "expected_outcome"):
            check_source_refs(entry.get(field, {}).get("source_ids", []), f"{where} {field}", entry_sources)
        for field in ("symptoms", "user_phrases"):
            for index, claim in enumerate(entry.get(field, [])):
                check_source_refs(claim.get("source_ids", []), f"{where} {field}[{index}]", entry_sources)
        check_source_refs(entry.get("applicability", {}).get("source_ids", []), f"{where} applicability", entry_sources)
        for section in ("causes", "diagnostics", "resolutions"):
            for index, item in enumerate(entry.get(section, [])):
                check_source_refs(item.get("source_ids", []), f"{where} {section}[{index}]", entry_sources)

        version = entry.get("applicability", {}).get("daedalus", {})
        scope = version.get("scope")
        if scope == "specific" and not version.get("versions"):
            errors.append(f"{where}: specific scope needs versions")
        if scope == "range" and not (version.get("min") or version.get("max")):
            errors.append(f"{where}: range scope needs a bound")
        if scope == "before" and not version.get("max"):
            errors.append(f"{where}: before scope needs max")
        if scope == "after" and not version.get("min"):
            errors.append(f"{where}: after scope needs min")
        if scope in ("universal", "unknown") and any(version.get(key) for key in ("min", "max", "versions")):
            errors.append(f"{where}: {scope} scope cannot assert version bounds")
        for dimension in ("operating_systems", "networks", "hardware_wallets"):
            applicability = entry.get("applicability", {}).get(dimension, {})
            dimension_scope, values = applicability.get("scope"), applicability.get("values", [])
            if dimension_scope == "specific" and not values:
                errors.append(f"{where}: specific {dimension} applicability needs values")
            if dimension_scope != "specific" and values:
                errors.append(f"{where}: {dimension_scope} {dimension} applicability cannot contain values")

        safety = entry.get("safety", {})
        destructive = {"deletes-files", "resets-state", "reinstall", "moves-wallet-data", "wallet-recovery"}
        if set(safety.get("flags", [])) & destructive:
            for field in ("prerequisites", "consequences", "recovery"):
                if not safety.get(field):
                    errors.append(f"{where}: destructive/recovery entry needs safety.{field}")
        actions = " ".join(step.get("action", "") for step in entry.get("resolutions", [])).lower()
        if re.search(r"(send|share|upload|reveal).{0,30}(recovery phrase|seed words|spending password)", actions):
            errors.append(f"{where}: resolution appears to request a secret")

        lifecycle = entry.get("lifecycle", {})
        status, superseded, merged = lifecycle.get("status"), lifecycle.get("superseded_by"), lifecycle.get("merged_into")
        if status == "superseded" and not superseded:
            errors.append(f"{where}: superseded entry needs superseded_by")
        if status != "superseded" and superseded is not None:
            errors.append(f"{where}: only a superseded entry may set superseded_by")
        if status == "merged" and not merged:
            errors.append(f"{where}: merged entry needs merged_into")
        if status != "merged" and merged is not None:
            errors.append(f"{where}: only a merged entry may set merged_into")
        for field, target in (("superseded_by", superseded), ("merged_into", merged)):
            if target == entry_id:
                errors.append(f"{where}: {field} cannot reference the entry itself")
            elif target and target not in entries:
                errors.append(f"{where}: missing lifecycle target {target}")
        if superseded or merged:
            check_source_refs(lifecycle.get("source_ids", []), f"{where} lifecycle relationship", entry_sources)
        for target in entry.get("related_entries", []):
            if target not in entries:
                errors.append(f"{where}: missing related entry {target}")
            if target == entry_id:
                errors.append(f"{where}: related entry cannot reference itself")

    faq_ids, promoted = set(), set()
    for index, item in enumerate(faq.get("items", [])):
        where = f"faq/catalog.json items[{index}]"
        if item.get("id") in faq_ids:
            errors.append(f"{where}: duplicate FAQ ID {item.get('id')}")
        faq_ids.add(item.get("id"))
        allowed_sources = set()
        for entry_id in item.get("knowledge_entries", []):
            if entry_id not in entries:
                errors.append(f"{where}: missing knowledge entry {entry_id}")
            else:
                promoted.add(entry_id)
                allowed_sources.update(entries[entry_id].get("sources", []))
        for claim_index, claim in enumerate(item.get("answer", [])):
            check_source_refs(claim.get("source_ids", []), f"{where} answer[{claim_index}]", allowed_sources)
    for entry_id, entry in entries.items():
        if bool(entry.get("faq", {}).get("promoted")) != (entry_id in promoted):
            errors.append(f"{paths[entry_id]}: faq.promoted disagrees with FAQ catalog")
    return errors, len(entries), len(source_ids), len(faq_ids)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=ROOT, help="repository root (used by tests)")
    args = parser.parse_args()
    errors, entry_count, source_count, faq_count = validate(args.root)
    if errors:
        print("\n".join(f"ERROR {error}" for error in errors))
        print(f"Validation failed with {len(errors)} error(s).")
        return 1
    print(f"Validated {entry_count} knowledge entries, {source_count} sources, and {faq_count} FAQ items against all schemas.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
