import pathlib
import tempfile
import unittest
from normalize_help_dump import TextDocument, resolve_asset, safe_link

class NormalizationTests(unittest.TestCase):
    def test_active_html_is_removed_and_text_is_not_html(self):
        p=TextDocument();p.feed('<p>Hello &amp; help</p><script>private()</script><svg><text>bad</text></svg><img src="x" onerror="bad()"><a href="javascript:bad()">Readable</a>')
        self.assertEqual(p.normalized_text(),'Hello & help\nReadable')
        self.assertEqual(p.unsafe_links,1)
        self.assertEqual(p.links,[])

    def test_links_reject_credentials_protocols_and_queries(self):
        for link in ['javascript:alert(1)','http://example.org','https://user:pass@example.org','https://example.org/?token=private','//example.org','https://example.org\\evil']:
            self.assertFalse(safe_link(link))
        self.assertTrue(safe_link('https://daedaluswallet.io/'))

    def test_flat_assets_are_repaired_without_guessing(self):
        with tempfile.TemporaryDirectory() as d:
            root=pathlib.Path(d);(root/'123_screen.png').write_bytes(b'test')
            self.assertEqual(resolve_asset('zendesk_kb_daedalus_assets/123_screen.png',root),'123_screen.png')
            self.assertEqual(resolve_asset('https://example.org/article_attachments/123',root),'123_screen.png')
            self.assertEqual(resolve_asset('https://example.org/article_attachments/123/screen.png',root),'123_screen.png')
            self.assertIsNone(resolve_asset('missing.png',root))
            (root/'123_other.png').write_bytes(b'test')
            self.assertIsNone(resolve_asset('https://example.org/article_attachments/123',root))

if __name__=='__main__':unittest.main()
