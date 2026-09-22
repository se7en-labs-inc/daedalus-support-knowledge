"""Reproduce the preserved archive's editorial inventory; never approve guidance.

The migrated raw corpus is byte-locked to its reviewed acquisition inventory.
New or changed raw material requires separate safety/provenance review before
that inventory is updated. This is not a secret scanner for arbitrary imports.
"""
import argparse
import hashlib
import json
from pathlib import Path
import re
import unicodedata
from normalize_help_dump import normalize

ROOT = Path(__file__).resolve().parents[1]
REPOSITORY = 'https://github.com/se7en-labs-inc/daedalus-support-knowledge'


def digest(value):
    return hashlib.sha256(json.dumps(value, sort_keys=True, ensure_ascii=False,
                                    separators=(',', ':')).encode('utf-8')).hexdigest()


def verify_archive(root=ROOT):
    migration = json.loads((root / 'sources/migration.json').read_text(encoding='utf-8'))
    expected = {r['destinationPath']: r for r in migration['files']
                if r['destinationPath'].startswith('help-center-dump/')}
    actual = {p.relative_to(root).as_posix() for p in (root / 'help-center-dump').rglob('*') if p.is_file()}
    if not expected or set(expected) != actual:
        raise ValueError('Preserved archive inventory changed; acquisition review required')
    for name, record in expected.items():
        file = root / name
        if file.is_symlink() or hashlib.sha256(file.read_bytes()).hexdigest() != record['sha256']:
            raise ValueError('Preserved archive bytes changed; acquisition review required')
    return migration


def classify(articles):
    hashes, identities, titles, results = {}, {}, {}, []
    for a in articles:
        body_hash = digest(re.sub(r'\s+', ' ', unicodedata.normalize('NFKC', a['text'])).strip())
        title = re.sub(r'\W+', ' ', unicodedata.normalize('NFKC', a['title']).lower(), flags=re.ASCII).strip()
        duplicate = hashes.get(body_hash)
        conflict = (a['id'] in identities and identities[a['id']] != body_hash or
                    title in titles and titles[title] != body_hash)
        disposition = 'needs-review'
        reason = 'Historical archive only. Exact platform/version applicability, current evidence and safety require editorial review.'
        if a['draft'] or re.search(r'template|input output.*event|iohk.*summit|IO is coming to Asia', a['title'], re.I):
            disposition = 'excluded'
            reason = 'Draft, template or event material is outside customer guidance.'
        elif re.search(r'testnet|incentivized|ITN|shelley.*test|flight|byron|3\.3\.|4\.0\.|epoch 234|Understanding Shelley: Network decentralization', a['title'], re.I):
            disposition = 'historical'
            reason = 'Explicit older generation, test network or Flight material; not current Mainnet instructions.'
        if disposition == 'needs-review':
            if re.search(r'delet|uninstall|reinstall|reset|symlink|state directory|spending password|recovery phrase|paper wallet|restore|importing wallets', a['title'], re.I):
                reason = 'Recovery or destructive workflow: verify exact wallet generation/platform, private backup prerequisites, consequences and recovery path before publication. No generic reset/deletion procedure approved.'
            elif re.search(r'anti.?virus|DNS|certificate|ISP|RTS|optimize|compromised|ZIP.*application', a['title'], re.I):
                reason = 'System/security-sensitive guidance: verify current platform scope and safe alternatives; do not weaken security or expose private application files.'
            elif re.search(r'known issues|requirements|hardware|Ledger|Trezor|fee|reward|delegation|pool|logs', a['title'], re.I):
                reason = 'Version-sensitive capabilities or procedure: current official source and platform verification still required; archive date alone does not establish applicability.'
        if duplicate:
            disposition = 'excluded'
            reason = 'Identical normalized body; preserved source identity but no second public article.'
        if conflict:
            disposition = 'needs-review'
            reason = 'Same source identity or normalized title has differing guidance; not treated as an identical duplicate.'
        results.append({
            **{key: a[key] for key in ['id', 'title', 'sourceUrl', 'createdAt', 'updatedAt']},
            'disposition': disposition, 'reason': reason, 'contentHash': body_hash,
            'duplicateOf': duplicate, 'conflict': bool(conflict),
            'images': [{key: image[key] for key in ['localPath', 'fallback']} for image in a['images']],
            'missingImages': sum(image['localPath'] is None for image in a['images']),
            'unsafeLinksRemoved': a['unsafeLinkCount'],
        })
        hashes.setdefault(body_hash, a['id'])
        identities.setdefault(a['id'], body_hash)
        titles.setdefault(title, body_hash)
    return results


def build(root=ROOT):
    migration = verify_archive(root)
    normalized = normalize(root / 'help-center-dump')
    publication = json.loads((root / 'help-centre/publication.json').read_text(encoding='utf-8'))
    archive = json.loads((root / 'manifest.json').read_text(encoding='utf-8'))
    return {
        'schemaVersion': 2,
        'sourceRepository': REPOSITORY,
        'archiveProvenance': {key: migration[key] for key in ['importedRepository', 'importedRevision', 'originalArchiveRevision']},
        'inputDigest': digest({'normalized': normalized, 'publication': publication, 'archive': archive}),
        'sourceExportDate': normalized['sourceExportDate'],
        'filteredAt': normalized['filteredAt'],
        'observed': {'fullArticles': len(normalized['articles']), 'releaseTitles': len(normalized['releaseTitles']),
                     'separateArchiverArticles': archive['article_count'], 'assets': normalized['assets']},
        'exportReportedCounts': normalized['reportedCounts'],
        'approvedCuratedArticles': sum(a['approved'] for a in publication['articles']),
        'curatedEntries': publication['articles'],
        'articles': classify(normalized['articles']),
        'releaseTitles': [{**t, 'disposition': 'excluded', 'reason': 'Title only; no source body supplied. No article or release claims invented.'}
                          for t in normalized['releaseTitles']],
    }


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    try:
        result = build()
        target = ROOT / 'help-centre/coverage.json'
        if args.check:
            if json.loads(target.read_text(encoding='utf-8')) != result:
                raise ValueError('Coverage is stale')
        else:
            target.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        print('Coverage verified: 121 preserved articles and 139 title-only records; no publication approval inferred.'
              if len(result['articles']) == 121 and len(result['releaseTitles']) == 139
              else 'Coverage generated; inspect changed source counts.')
    except Exception:
        parser.exit(1, 'Coverage rejected. Check acquisition inventory, schema validation and generated metadata. Source content is not logged.\n')
