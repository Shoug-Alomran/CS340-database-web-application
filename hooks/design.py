"""Editorial metadata for the documentation shell (content stays in Markdown)."""
import math
import re

PHASES = [
    ('00', 'The proposal', 'Define the purpose.', 'phase-0/project-idea/'),
    ('01', 'The plan', 'Turn needs into a clear direction.', 'phase-1/application-concept/'),
    ('02', 'The model', 'Make every relationship intentional.', 'phase-2/eer-diagram/'),
    ('03', 'The schema', 'Give every piece of data a place.', 'phase-3/relational-schema/'),
    ('04', 'The implementation', 'Build integrity into the foundation.', 'phase-4/sql-ddl/'),
    ('05', 'The application', 'Bring the connections to life.', 'phase-5/overview/'),
]

def on_page_context(context, page, config, nav):
    match = re.match(r'phase-(\d)/', page.url)
    phase = PHASES[int(match[1])] if match else None
    text = re.sub('<[^>]+>', ' ', page.content)
    roots = list(page.toc)
    sections = roots[0].children if len(roots) == 1 and roots[0].level == 1 else roots
    def leaves(items):
        result = []
        for item in items:
            if item.is_page:
                result.append(item)
            elif item.children:
                result.extend(leaves(item.children))
        return result
    group = page.parent
    while group and group.parent:
        group = group.parent
    siblings = leaves(group.children) if group else []
    context['chapter'] = {
        'pages': siblings,
        'phase': phase, 'phases': PHASES,
        'label': phase[1] if phase else ('Project notes' if 'overview' in page.url else 'The field guide'),
        'number': phase[0] if phase else 'CS',
        'minutes': max(1, math.ceil(len(text.split()) / 220)),
        'sections': [s for s in sections if s.level == 2],
        'kind': 'Report reader' if page.url.endswith('/report/') else 'Engineering notebook',
    }
    return context
