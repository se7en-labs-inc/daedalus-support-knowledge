#!/usr/bin/env python3
from pathlib import Path
import argparse,json,sys
ROOT=Path(__file__).resolve().parents[1]; out=ROOT/'indexes/manifest.json'
items=[]
for p in sorted((ROOT/'knowledge').rglob('*.json')):
 e=json.loads(p.read_text()); a=e['applicability']
 items.append({'id':e['id'],'path':p.relative_to(ROOT).as_posix(),'title':e['title'],'summary':e['summary']['text'],'category':e['classification']['category'],'subcategory':e['classification']['subcategory'],'daedalus':a['daedalus'],'operating_systems':a['operating_systems'],'networks':a['networks'],'hardware_wallets':a['hardware_wallets'],'evidence_classification':e['evidence']['classification'],'confidence':e['evidence']['confidence'],'status':e['lifecycle']['status'],'source_ids':e['sources'],'source_dates':[],'faq':e['faq'],'tags':e['tags']})
sources={s['id']:s for s in json.loads((ROOT/'sources/registry.json').read_text())['sources']}
for x in items:x['source_dates']=sorted({sources[s]['published_at'] for s in x['source_ids'] if sources[s]['published_at']})
data=json.dumps({'schema_version':1,'generated_from':'validated repository content','entries':items},indent=2)+'\n'
ap=argparse.ArgumentParser();ap.add_argument('--check',action='store_true');args=ap.parse_args()
if args.check:
 if not out.exists() or out.read_text()!=data:print('indexes/manifest.json is stale; run tools/build_index.py',file=sys.stderr);sys.exit(1)
 print(f'Index is current ({len(items)} entries).')
else:out.write_text(data);print(f'Wrote {out.relative_to(ROOT)} ({len(items)} entries).')
