"""Catch sidebar and malformed card regressions in the generated pages."""
from pathlib import Path
from html.parser import HTMLParser

class Layout(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
        self.groups = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get('class','').split()
        if 'md-sidebar' in classes or 'chapter-index' in classes:
            self.errors.append('Obsolete sidebar or table of contents present')
        if self.stack and self.stack[-1][1] and tag != 'ul':
            self.errors.append('Content escaped a card list: ' + tag)
        grid = 'grid' in classes and 'cards' in classes
        if grid: self.groups += 1
        if tag not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:
            self.stack.append((tag,grid))
    def handle_endtag(self, tag):
        for i in range(len(self.stack)-1,-1,-1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

errors=[]
groups=0
for file in Path('site').rglob('*.html'):
    if 'assets' in file.parts: continue
    parser=Layout();parser.feed(file.read_text())
    groups += parser.groups
    errors.extend(f'{file}: {e}' for e in parser.errors)
if errors: raise SystemExit('\n'.join(errors))
print(f'Validated {groups} card groups; no sidebars or section indexes.')
