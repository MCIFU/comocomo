# Copia y reduce las fotos propias (720 px, calidad 80) y añade las entradas a photos.ts.
import json, sys, os
from PIL import Image
sp = sys.argv[1]
plan = json.load(open("scripts/photo-plan-4.json", encoding="utf8"))
for id, p in plan.items():
    if "copy" in p:
        im = Image.open(os.path.join(sp, p["copy"])).convert("RGB")
        im.thumbnail((720, 720))
        im.save(f"apps/app/assets/photos/{id}.jpg", quality=80, optimize=True)
ts = open("apps/app/src/lib/photos.ts", encoding="utf8").read()
lines = []
for id, p in plan.items():
    f = f"{id}.jpg" if "copy" in p else p["file"]
    lines.append(f'  {json.dumps(id)}: {{ src: require("../../assets/photos/{f}"), author: {json.dumps(p["author"], ensure_ascii=False)}, license: {json.dumps(p["license"], ensure_ascii=False)}, url: {json.dumps(p["url"], ensure_ascii=False)} }},')
i = ts.rindex("};")
ts = ts[:i] + "\n".join(lines) + "\n" + ts[i:]
open("apps/app/src/lib/photos.ts", "w", encoding="utf8").write(ts)
print(len(lines))
