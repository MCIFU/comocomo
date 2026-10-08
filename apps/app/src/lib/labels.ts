export const DIFFICULTY: Record<string, string> = { easy: "Fácil", medium: "Media", hard: "Difícil" };

/** Alergias/intolerancias que se pueden fijar desde la app. value = alérgeno del catálogo. */
export const ALLERGY_OPTIONS = [
  { value: "gluten", label: "Gluten" },
  { value: "lactose", label: "Lactosa" },
  { value: "egg", label: "Huevo" },
  { value: "shellfish", label: "Marisco" },
  { value: "fish", label: "Pescado" },
  { value: "nuts", label: "Frutos secos" },
  { value: "soy", label: "Soja" },
  { value: "peanut", label: "Cacahuete" },
  { value: "sesame", label: "Sésamo" },
  { value: "mollusc", label: "Moluscos" },
  { value: "sulfites", label: "Sulfitos" },
] as const;

export const EQUIPMENT_OPTIONS = [
  { value: "horno", label: "Horno" },
  { value: "airfryer", label: "Air fryer" },
  { value: "microondas", label: "Microondas" },
  { value: "batidora", label: "Batidora" },
] as const;

export const CUISINE_LABEL: Record<string, string> = {
  espanola: "Española", asturiana: "Asturiana", italiana: "Italiana", mexicana: "Mexicana", china: "China",
  india: "India", japonesa: "Japonesa", argentina: "Argentina", turca: "Turca", tailandesa: "Tailandesa",
  peruana: "Peruana", griega: "Griega", coreana: "Coreana", marroqui: "Marroquí", "oriente-medio": "De Oriente Medio",
};


/** Plural de un envase: "bote" → "botes", "media docena" → "medias docenas". */
export function pluralPack(label: string, n: number) {
  if (n === 1) return label;
  return label.split(" ").map((w) => (/[aeiouáéó]$/.test(w) ? w + "s" : w + "es")).join(" ");
}

/**
 * Secciones de la despensa, pensadas como se organiza una cocina (no como el súper):
 * lo de la nevera junto, lo seco junto, y los básicos y especias aparte.
 */
export const PANTRY_SECTIONS: { key: string; title: string; hint: string; ids: string[] }[] = [
  { key: "nevera", title: "Nevera: lácteos y huevos", hint: "Huevos, leche, quesos, yogur…", ids: ["huevo", "leche", "queso", "feta", "mantequilla", "yogur"] },
  { key: "carne", title: "Carne y embutidos", hint: "En la nevera o el congelador", ids: ["pollo", "chorizo", "morcilla", "panceta"] },
  { key: "pescado", title: "Pescado y marisco", hint: "Fresco o congelado", ids: ["merluza", "gambas", "calamares"] },
  { key: "verdura", title: "Fruta y verdura", hint: "", ids: ["patata", "cebolla", "ajo", "tomate", "pimiento", "zanahoria", "calabacin", "espinacas", "champinones", "pepino", "aguacate", "limon", "lima", "chile", "jengibre"] },
  { key: "hierbas", title: "Hierbas frescas", hint: "", ids: ["perejil", "cilantro", "albahaca"] },
  { key: "pan", title: "Pan y tortillas", hint: "", ids: ["pan", "pan-pita", "tortilla-maiz", "pan-rallado"] },
  { key: "seco", title: "Despensa: arroz, pasta y legumbres", hint: "", ids: ["arroz", "pasta", "cuscus", "harina", "lentejas", "garbanzos", "garbanzos-cocidos", "fabes"] },
  { key: "latas", title: "Latas, botes y salsas", hint: "", ids: ["tomate-triturado", "leche-coco", "caldo", "aceitunas", "soja", "pasta-curry-rojo", "vino-blanco", "cacahuetes", "sesamo"] },
  { key: "basicos", title: "Básicos y especias", hint: "Lo que casi siempre hay", ids: ["sal", "aceite", "vinagre", "azucar", "pimienta", "pimenton", "comino", "curry", "oregano"] },
];
