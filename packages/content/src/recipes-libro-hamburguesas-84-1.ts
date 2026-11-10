import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «84 recetas para preparar hamburguesas» de Mariano Orzola, primera tanda. Pasos escritos de nuevo para Cómocomo. */
const MO = "Receta del libro «84 recetas para preparar hamburguesas» de Mariano Orzola, adaptada.";
const PAN = I("pan-hamburguesa", 4, "unit", true);

export const recipesLibroHamburguesas84a: Recipe[] = [
  r({
    id: "hamburguesa-cerdo-mostaza", title: "Hamburguesas de cerdo con mostaza y cebolleta",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("cerdo", 450, "g"), I("cebolleta", 2, "unit"), I("mostaza", 15, "g"), I("soja", 15, "ml"), I("pan-rallado", 25, "g"), I("ajo", 1, "unit"), I("aceite", 15, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Mezcla la carne de cerdo picada con la cebolleta picada fina, la mostaza, la soja, el pan rallado, el ajo rallado, sal y pimienta hasta tener una pasta homogénea.", 8),
      S("Forma 8 hamburguesas finas (o 4 gruesas).", 5),
      S("Hazlas en la sartén muy caliente con el aceite 3-4 minutos por lado, hasta que estén bien hechas. Sírvelas en pan o con puré de calabaza.", 8),
    ],
  }),
  r({
    id: "hamburguesa-ternera-cordero", title: "Hamburguesas de ternera y cordero con cilantro",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 350, "g"), I("cordero", 150, "g"), I("cebolla", 1, "unit"), I("cilantro", 10, "g"), I("aceite", 15, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Pica el cordero muy fino (o pide que te lo piquen) y mézclalo con la ternera picada.", 6),
      S("Añade la cebolla y el cilantro picados, sal y pimienta (mejor blanca) y amasa bien.", 4),
      S("Forma las hamburguesas y hazlas en la sartén caliente con el aceite 3-4 minutos por lado. Sírvelas con patatas o en pan.", 8),
    ],
  }),
  r({
    id: "hamburguesa-chorizo-tomate-seco", title: "Hamburguesas de chorizo y ternera con tomate seco",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("chorizo", 250, "g"), I("ternera-picada", 250, "g"), I("pimenton", 3, "g"), I("tomates-secos", 50, "g"), I("azucar", 15, "g"), I("vinagre", 20, "ml"), I("tomate-triturado", 25, "g"), I("miel", 15, "g"), I("oregano", 1, "g"), I("ajo", 1, "unit"), I("perejil", 5, "g"), I("aceite", 10, "ml"), PAN],
    steps: [
      S("Quita la piel al chorizo y desmenúzalo en un bol con la ternera picada.", 4),
      S("Añade el pimentón, los tomates secos picados, el azúcar (mejor moreno), el vinagre, el tomate triturado, la miel, el orégano, el ajo y el perejil picados, y amasa hasta que esté homogéneo.", 6),
      S("Forma las hamburguesas y hazlas a la plancha con el aceite por los dos lados hasta que estén bien hechas.", 9),
    ],
  }),
  r({
    id: "hamburguesa-garbanzos-arabe", title: "Hamburguesas de garbanzos al estilo árabe",
    cuisine: "oriente-medio", origin: "Oriente Medio", authenticity: "adapted", note: `${MO} Parecida al falafel; los garbanzos se ponen en remojo 24 horas.`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["batidora", "sarten"],
    ingredients: [I("garbanzos", 300, "g"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("perejil", 10, "g"), I("oregano", 1, "g"), I("pan-rallado", 50, "g"), I("aceite", 200, "ml"), I("sal", 5, "g"), PAN],
    steps: [
      S("Deja los garbanzos secos en remojo 24 horas, escúrrelos y tritúralos con la batidora.", 6),
      S("Pocha la cebolla y el pimiento picados con un poco de aceite y mézclalos con la pasta de garbanzo, el ajo, el perejil, el orégano y la sal.", 10),
      S("Añade pan rallado poco a poco hasta que la masa se pueda moldear y forma las hamburguesas.", 5),
      S("Fríelas en el resto del aceite hasta que estén doradas por los dos lados y escúrrelas.", 10),
    ],
  }),
  r({
    id: "hamburguesa-atun-verduras", title: "Hamburguesas de atún con zanahoria y pimiento",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("atun-lata", 240, "g"), I("zanahoria", 100, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("huevo", 2, "unit"), I("avena", 30, "g"), I("perejil", 5, "g"), I("aceite", 15, "ml"), PAN],
    steps: [
      S("Escurre el atún y pica muy fino la cebolla, el pimiento y el ajo; ralla la zanahoria.", 8),
      S("Mezcla todo con los huevos, la avena y el perejil y deja la masa 20 minutos en la nevera.", 5),
      S("Forma las hamburguesas y dóralas en la sartén antiadherente con el aceite, vuelta y vuelta.", 8),
    ],
  }),
  r({
    id: "hamburguesa-salmon-cilantro", title: "Hamburguesas de salmón con cebolla morada y cilantro",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("salmon", 500, "g"), I("cebolla", 0.5, "unit"), I("cilantro", 5, "g"), I("pan-rallado", 50, "g"), I("limon", 0.5, "unit"), I("sal", 3, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Pica el salmón sin piel muy fino a cuchillo.", 8),
      S("Mézclalo con la cebolla (morada) en daditos, el cilantro, el pan rallado, la ralladura del limón, sal y pimienta y forma las hamburguesas.", 6),
      S("Ásalas en el horno a 200 °C 12-15 minutos, hasta que estén doradas.", 13, 200),
    ],
  }),
  r({
    id: "hamburguesa-caballa", title: "Hamburguesas de caballa",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: `${MO} Pescado azul, rico en omega-3.`,
    baseServings: 4, prepMin: 15, cookMin: 12, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("caballa", 400, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("perejil", 10, "g"), I("huevo", 1, "unit"), I("avena", 40, "g"), I("aceite", 15, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Cuece los lomos de caballa 5 minutos en agua con sal (o usa caballa en conserva escurrida) y desmenúzalos sin espinas.", 8),
      S("Mezcla con la cebolla, el ajo y el perejil picados, el huevo, la avena, sal y pimienta y forma las hamburguesas.", 6),
      S("Hazlas en la sartén con el aceite 4-5 minutos por lado.", 9),
    ],
  }),
  r({
    id: "hamburguesa-merluza-gambas", title: "Hamburguesas de merluza y gambas",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: `${MO} La masa reposa hora y media en la nevera.`,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("merluza", 500, "g"), I("gambas", 100, "g"), I("huevo", 1, "unit"), I("ajo", 1, "unit"), I("perejil", 5, "g"), I("pan-rallado", 15, "g"), I("aceite", 20, "ml"), I("sal", 4, "g"), PAN],
    steps: [
      S("Quita la piel y las espinas a la merluza y pica el pescado y las gambas peladas, en crudo, en trocitos muy pequeños.", 10),
      S("Añade el huevo batido, el pan rallado, el ajo y el perejil picados y la sal. Deja la pasta tapada en la nevera hora y media.", 5),
      S("Forma las hamburguesas y hazlas a la plancha con el aceite hasta que se doren por los dos lados.", 8),
    ],
  }),
  r({
    id: "hamburguesa-pollo-aguacate", title: "Hamburguesas de pollo con aguacate al horno",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["batidora", "horno"],
    ingredients: [I("pollo", 500, "g"), I("aguacate", 0.5, "unit"), I("zanahoria", 150, "g"), I("ajo", 1, "unit"), I("limon", 0.5, "unit"), I("sal", 4, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Trocea la pechuga de pollo, salpimiéntala y tritúrala con la batidora junto con la pulpa del aguacate, el ajo y el zumo del limón.", 6),
      S("Mezcla con la zanahoria en daditos y forma 8 hamburguesas.", 6),
      S("Hornéalas sobre papel en una bandeja a 200 °C 15 minutos. Sírvelas con ensalada o en pan.", 15, 200),
    ],
  }),
  r({
    id: "hamburguesa-pollo-espinacas", title: "Hamburguesas empanadas de pollo y espinacas",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["batidora", "sarten"],
    ingredients: [I("pollo", 600, "g"), I("espinacas", 150, "g"), I("ajo", 3, "unit"), I("huevo", 1, "unit"), I("pan-rallado", 80, "g"), I("aceite", 40, "ml"), I("sal", 5, "g"), PAN],
    steps: [
      S("Tritura con la batidora la pechuga de pollo en dados con las espinacas picadas, el ajo y la sal hasta tener una masa homogénea.", 6),
      S("Forma las hamburguesas y pásalas por el huevo batido y el pan rallado.", 8),
      S("Hazlas en la sartén caliente con el aceite 3-4 minutos por lado, hasta que estén doradas y hechas.", 8),
    ],
  }),
  r({
    id: "hamburguesa-brocoli-arroz", title: "Hamburguesas de brócoli, arroz y avena",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("brocoli", 1, "unit"), I("arroz", 60, "g"), I("cebolla", 1, "unit"), I("cebolleta", 1, "unit"), I("avena", 100, "g"), I("huevo", 1, "unit"), I("ajo", 1, "unit"), I("aceite", 20, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Cuece el arroz 15 minutos y, aparte, el brócoli en ramitos 6 minutos; escúrrelos. Tritura el brócoli con la batidora.", 16),
      S("Dora la cebolla picada con la mitad del aceite y mézclala con el brócoli, el arroz, la cebolleta picada, la avena, el huevo, el ajo rallado, sal y pimienta.", 8),
      S("Forma 8 hamburguesas y ponlas en una bandeja untada con el resto del aceite.", 5),
      S("Hornéalas a 200 °C 8-10 minutos por cada lado, hasta que se doren.", 18, 200),
    ],
  }),
  r({
    id: "hamburguesa-remolacha", title: "Hamburguesas de remolacha y sésamo",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["batidora", "horno"],
    ingredients: [I("remolacha", 500, "g"), I("pan-rallado", 80, "g"), I("pimiento", 1, "unit"), I("cebolla", 1, "unit"), I("sesamo", 40, "g"), I("maicena", 15, "g"), I("aceite", 15, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Tritura la remolacha (cocida) con la batidora y escúrrela muy bien en un colador, apretando.", 8),
      S("Mézclala con el pimiento y la cebolla picados muy finos, el sésamo tostado, el pan rallado, la maicena, sal y pimienta.", 6),
      S("Forma las hamburguesas y colócalas en una bandeja untada con el aceite.", 5),
      S("Hornéalas a 200 °C 10 minutos por cada lado.", 20, 200),
    ],
  }),
  r({
    id: "hamburguesa-griega-feta", title: "Hamburguesa a la griega en pan de pita con feta y yogur",
    cuisine: "griega", origin: "Grecia (versión casera)", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("ternera-picada", 450, "g"), I("pan-pita", 4, "unit"), I("feta", 100, "g"), I("aceitunas", 40, "g"), I("limon", 0.5, "unit"), I("yogur", 1, "unit"), I("menta", 4, "g"), I("tomate", 200, "g"), I("oregano", 1, "g"), I("sal", 4, "g")],
    steps: [
      S("Mezcla la carne picada con el orégano y la sal, forma 4 hamburguesas y hazlas en la sartén 4 minutos por lado.", 10),
      S("Desmenuza el feta y mézclalo con las aceitunas (verdes) troceadas, el zumo de limón y el yogur.", 4),
      S("Abre los panes de pita, mete la hamburguesa, la mezcla de feta, una rodaja de tomate y hojas de menta.", 4),
      S("Caliéntalos en el horno a 180 °C 5 minutos y sirve.", 5, 180),
    ],
  }),
  r({
    id: "hamburguesa-mediterranea-rucula", title: "Hamburguesa mediterránea con tomate seco, rúcula y salsa fresca",
    cuisine: "italiana", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 500, "g"), I("pan-rallado", 25, "g"), I("ajo", 2, "unit"), I("tomates-secos", 40, "g"), I("cilantro", 10, "g"), I("pan-hamburguesa", 4, "unit"), I("rucula", 50, "g"), I("tomate", 250, "g"), I("pimiento", 1, "unit"), I("chile", 1, "unit"), I("vinagre", 10, "ml"), I("cebollino", 5, "g"), I("aceite", 15, "ml"), I("sal", 4, "g")],
    steps: [
      S("Para la salsa, mezcla el tomate, el pimiento (rojo) y el chile picados muy finos con el vinagre (mejor balsámico), el cebollino, la mitad del cilantro y sal.", 10),
      S("Mezcla la carne con el pan rallado, el ajo machacado, los tomates secos picados, el resto del cilantro y sal; forma 4 hamburguesas.", 6),
      S("Hazlas en la sartén con el aceite 4 minutos por lado.", 8),
      S("Sírvelas en el pan (con sésamo) con rúcula y la salsa fresca."),
    ],
  }),
];
