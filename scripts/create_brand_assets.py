"""Generate the site's vector brand mark and matching social preview assets."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

out = Path('docs/assets')
out.mkdir(exist_ok=True)
paper, ink, green, line = '#f8f9f5', '#202d29', '#23664e', '#dce3d9'
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="18" fill="#23664e"/><g fill="none" stroke="#f8f9f5" stroke-width="2.6"><ellipse cx="30" cy="20" rx="15" ry="6"/><path d="M15 20v23c0 8 30 8 30 0V20M15 31c0 8 30 8 30 0"/></g><circle cx="48" cy="47" r="7" fill="#c3dfb6" stroke="#23664e" stroke-width="3"/></svg>'''
(out/'database.svg').write_text(svg)
# High-resolution drawing also produces a widely supported PNG for social cards.
scale = 2
im = Image.new('RGB', (2400,1260), paper)
d = ImageDraw.Draw(im)
def rect(box, fill, outline=None, radius=0, width=1):
    d.rounded_rectangle(tuple(int(x*scale) for x in box), radius=int(radius*scale), fill=fill, outline=outline, width=width*scale)
def ln(points, fill=line, width=1): d.line([(int(x*scale),int(y*scale)) for x,y in points], fill=fill, width=width*scale)
fontdir=Path('/System/Library/Fonts/Supplemental')
def text(x,y,s,size=18,color=ink,font='Arial.ttf'):
    d.text((x*scale,y*scale),s,font=ImageFont.truetype(str(fontdir/font),size*scale),fill=color)
rect((0,0,1200,630),paper)
rect((48,42,91,85),green,radius=13)
for yy in [55,63,71]:
    d.arc((58*scale,(yy-3)*scale,80*scale,(yy+7)*scale),0,180,fill=paper,width=2*scale)
d.ellipse((58*scale,51*scale,80*scale,61*scale),outline=paper,width=2*scale)
ln([(58,56),(58,74)],paper,2); ln([(80,56),(80,74)],paper,2)
text(108,52,'CS340',23,font='Arial Bold.ttf');text(207,58,'/  DATA SYSTEMS',12,color=green)
ln([(48,112),(1152,112)])
text(50,158,'DATABASE ENGINEERING / DOCUMENTED',12,color=green)
text(46,214,'Every connection.',64,font='Arial Bold.ttf')
text(46,288,'A stronger',64,font='Arial Bold.ttf')
text(46,356,'foundation.',75,color=green,font='Georgia Italic.ttf')
text(51,465,'From the first relationship to the final query.',19,color='#69766e')
rect((770,151,1150,499),'#f0f3ed',line,18)
for x in range(790,1150,24): ln([(x,170),(x,479)],'#e1e7dd')
for y in range(170,490,24): ln([(787,y),(1133,y)],'#e1e7dd')
ln([(823,239),(953,239),(953,325),(1085,325),(1085,407)],green,2)
ln([(824,409),(907,409),(907,325),(953,325)],green,2)
for box,title,sub in [((788,198,941,260),'FAMILY MEMBER','PK  member_id'),((801,390,954,450),'RISK ALERT','FK  member_id'),((978,360,1131,422),'MEDICAL HISTORY','PK  history_id')]:
    rect(box,'#ffffff',line,8);text(box[0]+13,box[1]+12,title,10,color=green,font='Arial Bold.ttf');text(box[0]+13,box[1]+34,sub,10,color='#69766e')
rect((911,278,1004,367),green,radius=18)
for yy in [296,308,320]: d.arc((937*scale,yy*scale,977*scale,(yy+17)*scale),0,180,fill='#d8ead0',width=2*scale)
d.ellipse((937*scale,291*scale,977*scale,307*scale),outline='#d8ead0',width=2*scale)
ln([(937,299),(937,328)],'#d8ead0',2);ln([(977,299),(977,328)],'#d8ead0',2)
text(939,341,'Sillah',13,color=paper)
ln([(48,549),(1152,549)])
text(50,575,'06 PHASES    /    04 CONTRIBUTORS    /    01 CONNECTED SYSTEM',11,color=green)
text(907,575,'database.shoug-tech.com',14,color='#69766e')
im.resize((1200,630),Image.Resampling.LANCZOS).save(out/'social-banner.png',optimize=True)
# Touch icon and traditional .ico fallback.
icon=Image.new('RGB',(180,180),green); pen=ImageDraw.Draw(icon)
for y in [50,77,104]: pen.arc((43,y,126,y+35),0,180,fill=paper,width=6)
pen.ellipse((43,40,126,76),outline=paper,width=6);pen.line((43,57,43,122),fill=paper,width=6);pen.line((126,57,126,122),fill=paper,width=6)
pen.ellipse((123,122,161,160),fill='#c3dfb6',outline=green,width=6)
icon.save(out/'apple-touch-icon.png');icon.save(out/'favicon.ico',sizes=[(16,16),(32,32),(48,48)])
print('Created SVG favicon, ICO fallback, touch icon, and 1200 × 630 social banner.')
