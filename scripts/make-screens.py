# Uygulama ekran görüntülerini web için hazırlar (durum/hareket çubuklarını kırpar, 360w ve 720w WebP üretir).
# Kullanım: python scripts/make-screens.py <kaynak_klasör>   (kaynakta tr/ ve en/ altında 01.png … 07.png)
import sys
from pathlib import Path
from PIL import Image

SRC = Path(sys.argv[1])
OUT = Path(__file__).resolve().parent.parent / 'src' / 'screens'
TOP, BOTTOM = 110, 60
WIDTHS = (360, 720)

# Dil başına kullanılan görüntüler: kaynak dosya -> çıktı adı
SETS = {
    'tr': {'01': 'herd', '02': 'animal', '03': 'calendar', '04': 'tasks', '05': 'feed', '07': 'paddocks'},
    'en': {'02': 'animal', '03': 'calendar', '04': 'tasks', '05': 'health', '06': 'milk', '07': 'finance'},
}

for lang, files in SETS.items():
    (OUT / lang).mkdir(parents=True, exist_ok=True)
    for src, name in files.items():
        im = Image.open(SRC / lang / f'{src}.png').convert('RGB')
        im = im.crop((0, TOP, im.width, im.height - BOTTOM))
        for w in WIDTHS:
            h = round(im.height * w / im.width)
            dst = OUT / lang / f'{name}-{w}.webp'
            im.resize((w, h), Image.LANCZOS).save(dst, 'WEBP', quality=82, method=6)
            print(dst.relative_to(OUT.parent.parent), f'{w}x{h}', dst.stat().st_size // 1024, 'KB')
