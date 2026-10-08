// Busca fotos candidatas en Wikimedia Commons para cada receta (solo licencias libres).
// Uso: node scripts/photo-candidates.mjs > scripts/photo-candidates.json
const Q = {
  "tortilla-de-patatas": "tortilla de patatas", "pollo-al-ajillo": "pollo al ajillo", "lentejas-con-chorizo": "lentejas con chorizo",
  "garbanzos-con-espinacas": "espinacas con garbanzos", "pollo-al-horno-con-arroz": "arroz al horno pollo", "gambas-al-ajillo": "gambas al ajillo",
  "merluza-al-horno-con-patatas": "merluza al horno", "huevos-rotos": "huevos rotos", "sopa-de-ajo": "sopa de ajo castellana",
  "pisto-con-huevo": "pisto manchego", "fabada-asturiana": "fabada asturiana", "espaguetis-al-pomodoro": "spaghetti al pomodoro",
  "carbonara": "spaghetti alla carbonara", "arroz-frito-con-huevo": "egg fried rice", "chilaquiles-rojos": "chilaquiles rojos",
  "quesadillas": "quesadilla", "guacamole": "guacamole", "tacos-de-pollo": "chicken tacos", "pollo-al-curry": "chicken curry rice",
  "dal-de-lentejas": "dal lentils", "karaage": "karaage", "oyakodon": "oyakodon", "choripan-chimichurri": "choripán",
  "calamares-fritos-yogur": "kalamar tava", "panang-pollo": "panang curry", "tallarines-verdes": "tallarines verdes",
  "ensalada-griega": "greek salad horiatiki", "souvlaki-pollo-tzatziki": "souvlaki pita", "bibimbap-casero": "bibimbap",
  "chana-masala": "chana masala", "tajin-pollo-limon": "chicken tagine lemon olives", "risotto-champinones": "mushroom risotto",
  "pasta-aglio-olio": "aglio e olio", "shakshuka": "shakshuka",
};
// Uso: node scripts/photo-candidates.mjs [salida.json] — solo busca las recetas sin candidatas previas.
const NEW = {
  "paella-valenciana": "paella valenciana", gazpacho: "gazpacho", "patatas-bravas": "patatas bravas", "albondigas-en-salsa": "albóndigas en salsa",
  cachopo: "cachopo", "arroz-con-leche": "arroz con leche", "flan-de-huevo": "flan de huevo", "espaguetis-bolonesa": "spaghetti bolognese",
  "pizza-margarita": "pizza margherita", "pasta-al-pesto": "pasta al pesto genovese", "enchiladas-rojas": "enchiladas rojas", "huevos-rancheros": "huevos rancheros",
  "ramen-shoyu": "shoyu ramen", "pollo-teriyaki": "chicken teriyaki", gyudon: "gyudon", "pollo-kung-pao": "kung pao chicken", "cerdo-agridulce": "sweet and sour pork",
  "butter-chicken": "butter chicken", "pad-thai": "pad thai", "tom-kha-gai": "tom kha gai", "banh-mi-cerdo": "banh mi", bulgogi: "bulgogi", ceviche: "ceviche peruano",
  "lomo-saltado": "lomo saltado", "empanadas-carne": "empanadas argentinas", milanesa: "milanesa", moussaka: "moussaka", menemen: "menemen", "kofte-yogur": "köfte",
  harira: "harira", hummus: "hummus", falafel: "falafel", crepes: "crêpes", ratatouille: "ratatouille", "hamburguesa-casera": "hamburger cheeseburger",
  "mac-and-cheese": "macaroni and cheese", moqueca: "moqueca",
};
const FREE = /^(CC BY(-SA)? [\d.]+|CC0|Public domain|PD)/i;
const strip = (s = "") => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const out = {};
const ONLY = process.argv[2] ? NEW : Q;
for (const [id, q] of Object.entries(ONLY)) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  Object.entries({ action: "query", generator: "search", gsrsearch: `filetype:bitmap ${q}`, gsrnamespace: "6", gsrlimit: "10",
    prop: "imageinfo", iiprop: "url|extmetadata|size", iiurlwidth: "960", format: "json" }).forEach(([k, v]) => u.searchParams.set(k, v));
  const j = await (await fetch(u, { headers: { "User-Agent": "COMOCOMO/0.1 (contacto: mcifuentesramos@gmail.com)" } })).json();
  const pages = Object.values(j.query?.pages ?? {}).sort((a, b) => a.index - b.index);
  out[id] = pages.map((p) => {
    const i = p.imageinfo[0], m = i.extmetadata ?? {};
    return { title: p.title, page: i.descriptionurl, thumb: i.thumburl.split("?")[0], w: i.width, h: i.height,
      license: strip(m.LicenseShortName?.value), author: strip(m.Artist?.value).slice(0, 80) };
  }).filter((c) => FREE.test(c.license) && c.w >= 800 && c.h >= 600).slice(0, 4);
  await new Promise((r) => setTimeout(r, 250));
}
console.log(JSON.stringify(out, null, 1));
