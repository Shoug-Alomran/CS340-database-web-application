"""Check generated local navigation and footer destinations without network access."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

root = Path(sys.argv[1] if len(sys.argv) > 1 else 'site').resolve()
class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.footer = False
        self.footer_links = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'footer': self.footer = True
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
            if self.footer: self.footer_links.append(attrs['href'])
    def handle_endtag(self, tag):
        if tag == 'footer': self.footer = False

errors = []
checked = footer_count = pages = 0
for page in root.rglob('*.html'):
    parser = Links()
    parser.feed(page.read_text())
    if not parser.footer_links: continue # Standalone reports have their own presentation layouts.
    pages += 1
    footer_count += sum(not urlsplit(h).scheme and not urlsplit(h).netloc and bool(urlsplit(h).path) for h in parser.footer_links)
    for href in parser.links:
        url = urlsplit(href)
        if url.scheme or url.netloc or not url.path: continue
        target = (root / unquote(url.path).lstrip('/') if url.path.startswith('/') else page.parent / unquote(url.path)).resolve()
        if target.is_dir(): target /= 'index.html'
        checked += 1
        if not target.is_file(): errors.append(f'{page.relative_to(root)} → {href}')
print(f'Checked {checked} internal links ({footer_count} footer links) across {pages} pages.')
if errors:
    print('\n'.join(sorted(set(errors))))
    sys.exit(1)
print('All destinations exist.')
