import json
from pathlib import Path
import shutil
import tempfile
import unittest

from tools.validate import validate

ROOT = Path(__file__).resolve().parents[1]
ENTRY = Path("knowledge/installation/official-download.json")


class ValidationRejectionTests(unittest.TestCase):
    def setUp(self):
        self.tempdir = tempfile.TemporaryDirectory()
        self.root = Path(self.tempdir.name) / "repo"
        shutil.copytree(ROOT, self.root, ignore=shutil.ignore_patterns(".git", "__pycache__", "node_modules", ".venv", "help-center-dump"))

    def tearDown(self):
        self.tempdir.cleanup()

    def mutate_entry(self, mutation):
        path = self.root / ENTRY
        value = json.loads(path.read_text())
        mutation(value)
        path.write_text(json.dumps(value, indent=2) + "\n")

    def assert_rejected(self, fragment):
        errors, *_ = validate(self.root)
        self.assertTrue(errors, "mutated repository unexpectedly passed validation")
        self.assertTrue(any(fragment in error for error in errors), "expected error fragment %r in:\n%s" % (fragment, "\n".join(errors)))

    def test_valid_repository_is_accepted(self):
        errors, entries, sources, faqs = validate(self.root)
        self.assertEqual([], errors)
        self.assertEqual((16, 22, 11), (entries, sources, faqs))

    def test_public_approval_must_be_boolean_and_have_review_fingerprint(self):
        path = self.root / 'help-centre/publication.json'
        value = json.loads(path.read_text())
        value['articles'][0]['approved'] = 'false'
        path.write_text(json.dumps(value))
        self.assert_rejected("is not of type 'boolean'")
        value['articles'][0]['approved'] = True
        value['articles'][0].pop('reviewedContentHash')
        path.write_text(json.dumps(value))
        self.assert_rejected("'reviewedContentHash' is a required property")

    def test_missing_required_field_is_rejected_by_schema(self):
        self.mutate_entry(lambda value: value.pop("title"))
        self.assert_rejected("'title' is a required property")

    def test_invalid_type_is_rejected_by_schema(self):
        self.mutate_entry(lambda value: value.__setitem__("tags", "security"))
        self.assert_rejected("is not of type 'array'")

    def test_invalid_enum_is_rejected_by_schema(self):
        self.mutate_entry(lambda value: value["evidence"].__setitem__("confidence", "certain"))
        self.assert_rejected("is not one of")

    def test_unexpected_property_is_rejected_by_schema(self):
        self.mutate_entry(lambda value: value.__setitem__("unreviewed_note", True))
        self.assert_rejected("Additional properties are not allowed")

    def test_unknown_source_reference_is_rejected(self):
        self.mutate_entry(lambda value: value["summary"]["source_ids"].__setitem__(0, "SRC-9999"))
        self.assert_rejected("missing source SRC-9999")

    def test_unknown_related_entry_is_rejected(self):
        self.mutate_entry(lambda value: value["related_entries"].append("DAE-9999"))
        self.assert_rejected("missing related entry DAE-9999")

    def test_superseded_status_without_target_is_rejected(self):
        self.mutate_entry(lambda value: value["lifecycle"].__setitem__("status", "superseded"))
        self.assert_rejected("superseded entry needs superseded_by")

    def test_active_status_with_supersession_target_is_rejected(self):
        self.mutate_entry(lambda value: value["lifecycle"].__setitem__("superseded_by", "DAE-0006"))
        self.assert_rejected("only a superseded entry may set superseded_by")

    def test_self_referential_merge_is_rejected(self):
        def mutation(value):
            value["lifecycle"]["status"] = "merged"
            value["lifecycle"]["merged_into"] = value["id"]
            value["lifecycle"]["source_ids"] = value["sources"]
        self.mutate_entry(mutation)
        self.assert_rejected("merged_into cannot reference the entry itself")

    def test_faq_answer_unknown_source_is_rejected(self):
        path = self.root / "faq/catalog.json"
        value = json.loads(path.read_text())
        value["items"][0]["answer"][0]["source_ids"] = ["SRC-9999"]
        path.write_text(json.dumps(value, indent=2) + "\n")
        self.assert_rejected("answer[0]: missing source SRC-9999")

    def test_numeric_entry_id_is_rejected_by_schema(self):
        self.mutate_entry(lambda value: value.__setitem__("id", 1))
        self.assert_rejected("is not of type 'string'")

    def test_numeric_source_id_is_rejected_by_schema(self):
        path = self.root / "sources/registry.json"
        value = json.loads(path.read_text())
        value["sources"][0]["id"] = 1
        path.write_text(json.dumps(value, indent=2) + "\n")
        self.assert_rejected("is not of type 'string'")

    def test_numeric_faq_id_is_rejected_by_schema(self):
        path = self.root / "faq/catalog.json"
        value = json.loads(path.read_text())
        value["items"][0]["id"] = 1
        path.write_text(json.dumps(value, indent=2) + "\n")
        self.assert_rejected("is not of type 'string'")

    def test_numeric_source_url_is_rejected_by_schema(self):
        path = self.root / "sources/registry.json"
        value = json.loads(path.read_text())
        value["sources"][0]["url"] = 123
        path.write_text(json.dumps(value, indent=2) + "\n")
        self.assert_rejected("is not of type 'string'")

    def test_specific_applicability_without_values_is_rejected(self):
        def mutation(value):
            value["applicability"]["operating_systems"] = {"scope": "specific", "values": []}
        self.mutate_entry(mutation)
        self.assert_rejected("specific operating_systems applicability needs values")

    def test_unknown_applicability_with_values_is_rejected(self):
        def mutation(value):
            value["applicability"]["networks"] = {"scope": "unknown", "values": ["mainnet"]}
        self.mutate_entry(mutation)
        self.assert_rejected("unknown networks applicability cannot contain values")

    def test_changed_snapshot_content_is_rejected(self):
        path = self.root / "sources/snapshots/SRC-0001.json"
        value = json.loads(path.read_text())
        value["representation"]["statements"][0] += " changed"
        path.write_text(json.dumps(value, indent=2) + "\n")
        self.assert_rejected("snapshot SHA256 mismatch")

    def test_missing_snapshot_file_is_rejected(self):
        (self.root / "sources/snapshots/SRC-0001.json").unlink()
        self.assert_rejected("missing or invalid snapshot")

    def test_source_without_snapshot_is_rejected_by_schema(self):
        path = self.root / "sources/registry.json"
        value = json.loads(path.read_text())
        value["sources"][0].pop("snapshot")
        path.write_text(json.dumps(value, indent=2) + "\n")
        self.assert_rejected("'snapshot' is a required property")


if __name__ == "__main__":
    unittest.main()
