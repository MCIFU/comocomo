import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Recetas añadidas a petición. */
export const recipesSalud: Recipe[] = [
  r({
    id: "pasta-alfredo", title: "Pasta Alfredo (fettuccine con mantequilla y parmesano)",
    cuisine: "italiana", origin: "Italia (Roma)", authenticity: "traditional",
    note: "La original romana solo lleva mantequilla, parmesano y el agua de cocer la pasta. La versión con nata es la popular en Estados Unidos: si la prefieres, añade los 200 ml de nata en el paso 3.",
    baseServings: 4, prepMin: 5, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 400, "g"), I("mantequilla", 80, "g"), I("parmesano", 120, "g"), I("nata", 200, "ml", true), I("ajo", 1, "unit", true), I("perejil", 5, "g"), I("sal", 10, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece la pasta (mejor fettuccine) en abundante agua con sal 1 minuto menos de lo que indique el paquete. Guarda un vaso del agua de cocción.", 11),
      S("Mientras, funde la mantequilla a fuego suave en una sartén grande; si quieres, dora en ella el ajo picado sin que se queme."),
      S("Escurre la pasta y pásala a la sartén con medio vaso del agua de cocción (y la nata, si la usas). Remueve a fuego bajo.", 2),
      S("Fuera del fuego, añade el parmesano rallado poco a poco removiendo hasta tener una salsa cremosa; aligera con más agua si hace falta. Sirve al momento con pimienta y perejil.", 2),
    ],
  }),
  r({
    id: "salmon-plancha-espinacas-naranja", title: "Salmón a la plancha con ensalada de espinacas, naranja y nueces",
    cuisine: "espanola", origin: "España", authenticity: "adapted",
    note: "Pensada para cuidar el colesterol: pescado azul (omega-3), verdura cruda, fruta y frutos secos, sin fritos.",
    baseServings: 4, prepMin: 15, cookMin: 8, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("salmon", 500, "g"), I("espinacas", 150, "g"), I("naranja", 2, "unit"), I("nueces", 40, "g"), I("cebolla", 0.5, "unit"), I("vinagre", 15, "ml"), I("aceite", 30, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pela las naranjas a vivo y córtalas en gajos, guardando el zumo que suelten.", 5),
      S("Mezcla las espinacas (mejor brotes) con la naranja, la cebolla (morada) en juliana fina y las nueces troceadas. Aliña con el zumo, el vinagre, una cucharada de aceite y sal.", 5),
      S("Salpimienta el salmón en 4 lomos y hazlo en la sartén con el resto del aceite, empezando por la piel, 3 minutos por lado.", 7),
      S("Sirve el salmón junto a la ensalada."),
    ],
  }),
  r({
    id: "sardinas-horno-pimientos-limon", title: "Sardinas al horno con pimientos, limón y perejil",
    cuisine: "espanola", origin: "España", authenticity: "adapted",
    note: "Pescado azul rico en omega-3, vitamina D y B12. Al horno en lugar de fritas.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("sardinas", 800, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("limon", 1, "unit"), I("perejil", 15, "g"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Corta los pimientos (rojo y verde) y la cebolla en tiras, ponlos en una fuente con un chorrito de aceite y sal y ásalos en el horno a 200 °C 18 minutos.", 18, 200),
      S("Limpia las sardinas (sin cabeza ni tripa), sálalas y colócalas sobre las verduras.", 6),
      S("Mezcla el ajo y el perejil picados con el zumo del limón y el resto del aceite y riega las sardinas.", 3),
      S("Hornea a 200 °C 8 minutos más.", 8, 200),
    ],
  }),
  r({
    id: "ensalada-lentejas-pimiento-naranja", title: "Ensalada de lentejas con pimiento, naranja y perejil",
    cuisine: "espanola", origin: "España", authenticity: "adapted",
    note: "Rica en hierro: la vitamina C del pimiento, la naranja y el perejil ayuda a absorber el hierro de las lentejas.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("lentejas", 250, "g"), I("pimiento", 2, "unit"), I("naranja", 2, "unit"), I("cebolla", 0.5, "unit"), I("perejil", 20, "g"), I("tomate", 200, "g"), I("vinagre", 20, "ml"), I("aceite", 40, "ml"), I("comino", 1, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece las lentejas (mejor pardinas) en agua con sal 25-30 minutos, escúrrelas y deja que se templen.", 28),
      S("Pica el pimiento rojo y el verde, la cebolla, el tomate y el perejil, y pela las naranjas en gajos.", 8),
      S("Mezcla todo con las lentejas y aliña con aceite, vinagre, el comino y sal."),
    ],
  }),
  r({
    id: "mejillones-vapor-limon-perejil", title: "Mejillones al vapor con limón y perejil",
    cuisine: "espanola", origin: "España (Galicia)", authenticity: "traditional",
    note: "De los alimentos más ricos en hierro y vitamina B12, y casi sin grasa.",
    baseServings: 4, prepMin: 10, cookMin: 8, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("mejillones", 2000, "g"), I("limon", 2, "unit"), I("perejil", 15, "g"), I("ajo", 1, "unit"), I("vino-blanco", 100, "ml"), I("laurel", 1, "unit"), I("aceite", 15, "ml")],
    steps: [
      S("Limpia los mejillones quitándoles las barbas.", 6),
      S("Ponlos en una olla con el vino, el laurel y medio limón en rodajas, tapa y cuece a fuego fuerte hasta que se abran, 4-5 minutos. Desecha los que no se abran.", 5),
      S("Mezcla el ajo y el perejil picados con el zumo de limón y el aceite y riega los mejillones al servir.", 2),
    ],
  }),
  r({
    id: "avena-frutos-rojos-nueces", title: "Avena cremosa con frutos rojos, nueces y canela",
    cuisine: "espanola", origin: "España", authenticity: "adapted",
    note: "Desayuno para cuidar el colesterol: la fibra de la avena (betaglucanos) ayuda a reducirlo.",
    baseServings: 4, prepMin: 5, cookMin: 8, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("avena", 200, "g"), I("leche", 600, "ml"), I("frutos-rojos", 250, "g"), I("nueces", 40, "g"), I("platano", 1, "unit"), I("canela", 2, "g"), I("miel", 20, "g")],
    steps: [
      S("Calienta la leche (mejor semidesnatada o bebida vegetal) con los copos de avena y la canela, removiendo, 6-8 minutos hasta que espese.", 8),
      S("Reparte en cuencos y cubre con los frutos rojos, el plátano en rodajas, las nueces picadas y un hilo de miel."),
    ],
  }),
  r({
    id: "tofu-salteado-brocoli-sesamo", title: "Tofu salteado con brócoli, pimiento y sésamo",
    cuisine: "china", origin: "China (versión casera)", authenticity: "adapted",
    note: "Vegetariana, rica en hierro y calcio (tofu, sésamo) y en vitamina C (brócoli, pimiento).",
    baseServings: 4, prepMin: 15, cookMin: 12, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("tofu", 400, "g"), I("brocoli", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("soja", 30, "ml"), I("sesamo", 20, "g"), I("arroz", 240, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz según el paquete.", 12),
      S("Mientras, corta el tofu escurrido en dados y dóralo en la sartén con la mitad del aceite. Retíralo."),
      S("Saltea a fuego fuerte el brócoli en ramilletes y el pimiento rojo en tiras con el ajo y el jengibre picados y el resto del aceite, 5 minutos."),
      S("Devuelve el tofu, añade la soja, espolvorea el sésamo tostado y sirve con el arroz.", 2),
    ],
  }),
  r({
    id: "ensalada-espinacas-fresas-garbanzos", title: "Ensalada de espinacas, fresas, garbanzos y almendras",
    cuisine: "espanola", origin: "España", authenticity: "adapted",
    note: "Rica en vitamina C, folato y hierro vegetal. La vitamina C de las fresas ayuda a absorber el hierro.",
    baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("espinacas", 200, "g"), I("fresas", 250, "g"), I("garbanzos-cocidos", 400, "g"), I("almendras", 40, "g"), I("cebolla", 0.5, "unit"), I("vinagre", 15, "ml"), I("aceite", 40, "ml"), I("mostaza", 5, "g"), I("sal", 3, "g")],
    steps: [
      S("Lava los brotes de espinaca y las fresas; corta las fresas en cuartos y la cebolla (morada) en juliana fina.", 8),
      S("Enjuaga y escurre los garbanzos cocidos.", 2),
      S("Mezcla el aceite, el vinagre (mejor de Módena), la mostaza y sal, y aliña la ensalada con las almendras tostadas por encima.", 4),
    ],
  }),
  r({
    id: "tabule-quinoa-perejil", title: "Tabulé de quinoa con mucho perejil y limón",
    cuisine: "oriente-medio", origin: "Líbano (versión con quinoa)", authenticity: "adapted",
    note: "El perejil fresco y el limón aportan mucha vitamina C y hierro.",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("quinoa", 200, "g"), I("perejil", 80, "g"), I("menta", 10, "g"), I("tomate", 300, "g"), I("pepino", 200, "g"), I("cebolleta", 1, "unit"), I("limon", 2, "unit"), I("aceite", 40, "ml"), I("sal", 4, "g")],
    steps: [
      S("Lava la quinoa y cuécela en el doble de agua con sal 15 minutos. Deja que se enfríe.", 15),
      S("Pica muy fino el perejil, la menta y la cebolleta, y en daditos el tomate y el pepino.", 10),
      S("Mezcla todo con la quinoa y aliña con el zumo de los limones, el aceite y sal."),
    ],
  }),
  r({
    id: "pollo-limon-brocoli-horno", title: "Pechuga de pollo al limón con brócoli y patata al horno",
    cuisine: "espanola", origin: "España", authenticity: "adapted",
    note: "Plato completo bajo en grasa saturada, con mucha vitamina C.",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pollo", 600, "g"), I("brocoli", 1, "unit"), I("patata", 500, "g"), I("limon", 2, "unit"), I("ajo", 3, "unit"), I("romero", 1, "g"), I("aceite", 30, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta las patatas en gajos, mézclalas con la mitad del aceite, sal y el romero y ásalas en el horno a 210 °C 15 minutos.", 15, 210),
      S("Marina las pechugas de pollo con el zumo de un limón, el ajo picado, sal y pimienta.", 5),
      S("Añade a la fuente el pollo, el brócoli en ramilletes con el resto del aceite y el otro limón en rodajas, y hornea 20 minutos más.", 20, 210),
    ],
  }),
  r({
    id: "crema-verduras-legumbres-sin-nata", title: "Crema de calabaza, verduras y garbanzos (sin nata)",
    cuisine: "espanola", origin: "España", authenticity: "adapted",
    note: "Cremosa gracias a la legumbre, sin nata ni mantequilla. Rica en fibra y vitamina A.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("garbanzos-cocidos", 200, "g"), I("calabaza", 400, "g"), I("zanahoria", 200, "g"), I("puerro", 2, "unit"), I("calabacin", 250, "g"), I("aceite", 20, "ml"), I("perejil", 5, "g"), I("sal", 3, "g")],
    steps: [
      S("Rehoga los puerros picados con el aceite 5 minutos.", 5),
      S("Añade la calabaza, la zanahoria y el calabacín troceados, cubre con agua (o caldo casero sin sal) y cuece 20 minutos.", 20),
      S("Añade los garbanzos cocidos (o alubias), tritura y sirve con perejil.", 4),
    ],
  }),
];
