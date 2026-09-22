import copy
import importlib.util
import json
from pathlib import Path
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'tools'))
from build_coverage import build, classify, verify_archive


class CoverageTests(unittest.TestCase):
    def article(self):
        return {'id': 'ZENDESK-1', 'title': 'Procedure', 'text': 'Historical procedure.',
                'sourceUrl': 'https://example.org/article', 'createdAt': '2020-01-01',
                'updatedAt': '2020-01-02', 'draft': False, 'safeLinks': [],
                'images': [{'localPath': None, 'alt': 'Missing image', 'fallback': 'Use verified text.'}],
                'unsafeLinkCount': 1}

    def test_duplicates_conflicts_and_missing_images_are_distinct(self):
        a = self.article()
        result = classify([a, {**a, 'id': 'ZENDESK-2', 'title': 'Same procedure elsewhere'},
                           {**a, 'id': 'ZENDESK-3', 'text': 'Different incompatible procedure.'},
                           {**a, 'id': 'ZENDESK-4', 'title': 'Third identical source'}])
        self.assertEqual(result[0]['disposition'], 'needs-review')
        self.assertEqual(result[0]['missingImages'], 1)
        self.assertEqual(result[1]['duplicateOf'], a['id'])
        self.assertEqual(result[1]['disposition'], 'excluded')
        self.assertTrue(result[2]['conflict'])
        self.assertIsNone(result[2]['duplicateOf'])
        self.assertEqual(result[3]['duplicateOf'], a['id'])

    def test_complete_edition_is_reproducible_and_does_not_publish_archive(self):
        report = build()
        self.assertEqual(report, build())
        self.assertEqual(len(report['articles']), 121)
        self.assertEqual(len(report['releaseTitles']), 139)
        self.assertEqual(report['observed']['assets']['files'], 187)
        self.assertEqual(report['observed']['assets']['missingOccurrences'], 22)
        self.assertTrue(all(t['disposition'] == 'excluded' for t in report['releaseTitles']))
        self.assertTrue(all(a['disposition'] != 'current' for a in report['articles']))
        self.assertTrue(all('text' not in a for a in report['articles']))

    def test_changed_or_extra_archive_material_requires_acquisition_review(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / 'sources').mkdir()
            (root / 'help-center-dump').mkdir()
            migration = json.loads((ROOT / 'sources/migration.json').read_text(encoding='utf-8'))
            (root / 'sources/migration.json').write_text(json.dumps(migration), encoding='utf-8')
            (root / 'help-center-dump/unreviewed.txt').write_text('Unreviewed material')
            with self.assertRaisesRegex(ValueError, 'acquisition review'):
                verify_archive(root)


if __name__ == '__main__':
    unittest.main()
