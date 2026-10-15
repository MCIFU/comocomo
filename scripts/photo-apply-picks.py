# Uso: python photo-apply-picks.py <scratchpad> <carpeta> <json-candidatas> id=k id=k ...
# Reduce las fotos elegidas a 720 px y añade sus entradas a photos.ts.
import json, sys
from PIL import Image
sp, folder, cj = sys.argv[1:4]
c = json.load(open(cj, encoding="utf8"))
ts = open("apps/app/src/lib/photos.ts", encoding="utf8").read(); L = []
for a in sys.argv[4:]:
    id, k = a.split("="); k = int(k); x = c[id][k]
    im = Image.open(f"{sp}/{folder}/{id}__{k}.jpg").convert("RGB"); im.thumbnail((720, 720))
    im.save(f"apps/app/assets/photos/{id}.jpg", quality=80, optimize=True)
    L.append(f'  {json.dumps(id)}: {{ src: require("../../assets/photos/{id}.jpg"), author: {json.dumps(x["author"] or "Autor desconocido", ensure_ascii=False)}, license: {json.dumps(x["license"])}, url: {json.dumps(x["page"], ensure_ascii=False)} }},')
i = ts.rindex("};"); open("apps/app/src/lib/photos.ts", "w", encoding="utf8").write(ts[:i] + "\n".join(L) + "\n" + ts[i:])
print(len(L))
