"""Read-only archive normalization. Output is transient, NOT approved content.

The Ariadne integration screens normalized text before public snapshot output.
Coverage accepts only the preserved acquisition inventory. This tool never writes
archive bodies or grants publication approval. Original files remain untouched.
"""
import json
import pathlib
import re
import sys
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit

BLOCKED = {'script', 'style', 'iframe', 'object', 'embed', 'noscript', 'svg', 'form', 'template'}

def safe_link(value):
    try:
        u = urlsplit(value)
        return (u.scheme == 'https' and bool(u.hostname) and not u.username
                and not u.password and not u.query and not u.fragment
                and not re.search(r'[\x00-\x20\\]', value))
    except ValueError:
        return False

class TextDocument(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.blocked = []
        self.text = []
        self.images = []
        self.links = []
        self.unsafe_links = 0
        self.article_id = None
        self.article_images = {}

    def handle_starttag(self, tag, attrs):
        if self.blocked:
            if tag in BLOCKED: self.blocked.append(tag)
            return
        if tag in BLOCKED:
            # embed is void; ignoring it must not swallow the rest of the article.
            if tag != 'embed': self.blocked.append(tag)
            return
        attrs = dict(attrs)
        if tag == 'h2' and re.fullmatch(r'a[0-9]+', attrs.get('id','')):
            self.article_id = attrs['id'][1:]
            self.article_images[self.article_id] = []
        if tag in {'p', 'div', 'li', 'br', 'h1', 'h2', 'h3', 'h4', 'tr'}: self.text.append('\n')
        if tag == 'img':
            image={'reference':attrs.get('src',''), 'alt':attrs.get('alt','')}
            self.images.append(image)
            if self.article_id: self.article_images[self.article_id].append(image)
        if tag == 'a' and attrs.get('href'):
            if safe_link(attrs['href']): self.links.append(attrs['href'])
            else: self.unsafe_links += 1

    def handle_endtag(self, tag):
        if self.blocked and tag == self.blocked[-1]: self.blocked.pop()
        elif not self.blocked and tag in {'p','div','li','h1','h2','h3','h4','tr'}: self.text.append('\n')

    def handle_data(self, text):
        if not self.blocked: self.text.append(text)

    def normalized_text(self):
        return '\n'.join(line for line in (re.sub(r'\s+', ' ', s).strip() for s in ''.join(self.text).splitlines()) if line)

def resolve_asset(reference, root):
    # Only basenames from the supplied local directory. No network, traversal,
    # symlink escape, query strings, remote requests or guessed replacement art.
    try:
        asset_path=unquote(urlsplit(reference).path)
        name = pathlib.PurePosixPath(asset_path).name
    except ValueError: return None
    if not name or name in {'.','..'} or '\\' in name: return None
    attachment=re.search(r'/article_attachments/(\d+)(?:/|$)',asset_path)
    attachment_id=attachment.group(1) if attachment else name if name.isdigit() else None
    candidates = sorted(p for p in root.iterdir() if p.is_file() and not p.is_symlink()
                        and p.suffix.lower() in {'.png','.jpg','.jpeg','.gif','.webp'}
                        and (p.name == name or (attachment_id and p.name.startswith(attachment_id+'_'))))
    return candidates[0].name if len(candidates) == 1 else None

def normalize(root):
    dumps=sorted(root.glob('zendesk_kb_daedalus_*.json'))
    if len(dumps)!=1: raise ValueError('Expected exactly one archive JSON')
    dump=json.loads(dumps[0].read_text(encoding='utf-8'))
    index=TextDocument();index.feed((root/'index.html').read_text(encoding='utf-8'))
    articles=[]
    for a in dump['substantive_articles']:
        parser=TextDocument();parser.feed(a.get('body',''));parser.close()
        indexed=index.article_images.get(str(a['id']),[])
        images=[]
        for n,i in enumerate(parser.images):
            local=resolve_asset(i['reference'],root)
            # The supplied HTML preserves article IDs and image order. Only use
            # its repaired reference when cardinality AND the alt text match.
            if not local and len(indexed)==len(parser.images) and indexed[n]['alt']==i['alt']:
                local=resolve_asset(indexed[n]['reference'],root)
            images.append({'localPath':local,'alt':i['alt'],
                           'fallback':'Historical screenshot unavailable or not reviewed; use source text and verified current interface guidance.'})
        articles.append({'id':'ZENDESK-'+str(a['id']),'title':a['title'],'text':parser.normalized_text(),
                         'sourceUrl':a['html_url'] if safe_link(a['html_url']) else None,
                         'createdAt':a.get('created_at'),'updatedAt':a.get('updated_at'),
                         'draft':bool(a.get('draft')), 'images':images,'safeLinks':sorted(set(parser.links)),
                         'unsafeLinkCount':parser.unsafe_links})
    refs=[i['reference'] for i in index.images]
    missing=sorted(set(r for r in refs if not resolve_asset(r,root)))
    # Report local names only; never serialize remote query tokens.
    missing_names=sorted(set(pathlib.PurePosixPath(urlsplit(r).path).name for r in missing))
    return {'sourceExportDate':dump.get('source_export_date'),'filteredAt':dump.get('filtered_at'),
            'reportedCounts':dump['counts'],'articles':articles,
            'releaseTitles':[{'id':'ZENDESK-'+str(a['id']),'title':a['title'],'updatedAt':a.get('updated_at')} for a in dump['release_notes_titles']],
            'assets':{'files':sum(1 for p in root.iterdir() if p.suffix.lower() in {'.png','.jpg','.jpeg','.gif','.webp'}),
                      'indexReferences':len(refs),'uniqueIndexReferences':len(set(refs)),
                      'missingOccurrences':sum(1 for r in refs if not resolve_asset(r,root)),
                      'missingLocalNames':missing_names,
                      'bodyReferences':sum(len(a['images']) for a in articles),
                      'bodyUnresolved':sum(i['localPath'] is None for a in articles for i in a['images'])}}

if __name__=='__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    print(json.dumps(normalize(pathlib.Path(sys.argv[1]).resolve()), ensure_ascii=False))
