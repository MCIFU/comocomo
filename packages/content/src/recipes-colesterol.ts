import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Recetas para cuidar el colesterol: grasa de oliva y pescado azul, legumbre, verdura y fibra; sin fritos ni embutidos.
 *  Ideas tomadas de Centro Julia Farré, Nutrición Vive, Danacol y Cookpad; los pasos están escritos de nuevo. */
const JF = "Idea del blog del Centro Julia Farré (recetas para el colesterol).";
const NV = "Idea del menú para bajar el colesterol de Nutrición Vive.";
const DA = "Idea del recetario de Danacol.";
const CP = "Idea de una receta de Cookpad.";

export const recipesColesterol: Recipe[] = [
  r({
    id: "cuscus-brocoli-habas-almendras", title: "Cuscús con brócoli, zanahoria, habas y almendras",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${JF} Verdura al vapor, legumbre y frutos secos.`,
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("cuscus", 250, "g"), I("brocoli", 1, "unit"), I("zanahoria", 200, "g"), I("habas", 200, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("almendras", 40, "g"), I("aceite", 30, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las habas en agua con sal 10 minutos y, en otra olla con rejilla, haz al vapor el brócoli en ramitos y la zanahoria en rodajas, 8 minutos.", 10),
      S("Pon el cuscús en un bol, cúbrelo con el mismo volumen de agua hirviendo con sal y un chorrito de aceite, tapa 5 minutos y suéltalo con un tenedor.", 5),
      S("Dora la cebolla en juliana en una sartén con el resto del aceite y, al final, el ajo y las almendras picados.", 8),
      S("Mezcla todo con el cuscús y salpimienta con pimienta al gusto."),
    ],
  }),
  r({
    id: "porridge-avena-granada-platano", title: "Porridge de avena con plátano, granada y chocolate negro",
    cuisine: "britanica", origin: "Reino Unido (versión casera española)", authenticity: "adapted", note: `${JF} La fibra de la avena ayuda a bajar el colesterol.`,
    baseServings: 4, prepMin: 5, cookMin: 8, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("avena", 200, "g"), I("leche", 600, "ml"), I("platano", 2, "unit"), I("granada", 1, "unit"), I("chocolate", 10, "g"), I("avellanas", 30, "g"), I("canela", 2, "g")],
    steps: [
      S("Cuece los copos de avena en la leche (mejor bebida de avena sin azúcar o leche desnatada), removiendo, hasta que esté cremosa.", 8),
      S("Desgrana la granada y corta el plátano en rodajas.", 4),
      S("Sirve en cuencos con la fruta, las avellanas troceadas, el chocolate negro (85 %) rallado y la canela."),
    ],
  }),
  r({
    id: "tortilla-alcachofas", title: "Tortilla de alcachofas y cebolla",
    cuisine: "espanola", origin: "España", authenticity: "traditional", note: `${JF} Con poco huevo, patata y y mucha verdura.`,
    baseServings: 5, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("alcachofa", 6, "unit"), I("cebolla", 1, "unit"), I("huevo", 3, "unit"), I("patata", 250, "g"), I("limon", 0.5, "unit"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Limpia las alcachofas hasta dejar el corazón, córtalas en láminas finas y frótalas con limón para que no se oscurezcan.", 10),
      S("Pocha la cebolla en juliana y la patata en láminas finas con el aceite a fuego medio y añade las alcachofas; saltea hasta que estén tiernas y doradas.", 14),
      S("Bate los huevos con sal, mézclalos con la verdura y cuaja la tortilla en la sartén a fuego suave por ambos lados.", 6),
    ],
  }),
  r({
    id: "arroz-integral-salteado-verduras", title: "Arroz salteado con calabaza, calabacín, pimiento y berenjena",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${JF} Mejor con arroz integral, que aporta más fibra.`,
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("arroz", 280, "g"), I("calabaza", 250, "g"), I("calabacin", 250, "g"), I("pimiento", 1, "unit"), I("berenjena", 250, "g"), I("ajo", 1, "unit"), I("soja", 15, "ml", true), I("aceite", 30, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz (mejor integral) en agua con sal el tiempo del paquete y escúrrelo.", 30),
      S("Corta en tiras la calabaza, el calabacín, el pimiento rojo y la berenjena.", 8),
      S("Saltea la verdura con el aceite y el ajo laminado a fuego fuerte en una sartén grande, 8 minutos, para que quede al dente.", 8),
      S("Añade el arroz, un chorrito de soja si quieres, salpimienta y saltea 2 minutos más.", 2),
    ],
  }),
  r({
    id: "caballa-horno-puerros-patata", title: "Caballa al horno con puerros, tomate y patata",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${JF} Pescado azul, rico en omega-3.`,
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("caballa", 700, "g"), I("patata", 600, "g"), I("puerro", 2, "unit"), I("tomate", 250, "g"), I("ajo", 2, "unit"), I("perejil", 10, "g"), I("aceite", 40, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta las patatas en rodajas finas, el puerro en aros y el tomate en gajos; alíñalo todo con la mitad del aceite y sal.", 10),
      S("Hornea la verdura en una fuente a 190 °C 25 minutos.", 25, 190),
      S("Salpimienta los lomos de caballa, colócalos encima y hornea 8 minutos más.", 8, 190),
      S("Mientras, dora en una sartén el ajo laminado con el resto del aceite, añade el perejil picado y riega el pescado al servir.", 2),
    ],
  }),
  r({
    id: "merluza-plancha-verduras", title: "Merluza a la plancha con verduras salteadas",
    cuisine: "espanola", origin: "España", authenticity: "traditional", note: `${DA} Pescado blanco, magro y sin fritura.`,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("merluza", 600, "g"), I("calabacin", 300, "g"), I("zanahoria", 150, "g"), I("pimiento", 1, "unit"), I("ajo", 1, "unit"), I("limon", 1, "unit"), I("perejil", 10, "g"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Corta el calabacín, la zanahoria y el pimiento en bastones y saltéalos con la mitad del aceite y sal, 8 minutos.", 8),
      S("Sala los lomos de merluza y hazlos a la plancha con el resto del aceite, 3 minutos por lado.", 6),
      S("Sirve con la verdura y un majado de ajo, perejil y zumo de limón."),
    ],
  }),
  r({
    id: "ensalada-aguacate-tomate", title: "Ensalada de aguacate, tomate y cebolla morada",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${DA} Grasa insaturada del aguacate y del aceite de oliva.`,
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("aguacate", 2, "unit"), I("tomate", 500, "g"), I("cebolla", 0.5, "unit"), I("lima", 1, "unit"), I("cilantro", 5, "g", true), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta el tomate en gajos, el aguacate en dados y la cebolla (morada) en juliana fina.", 8),
      S("Aliña con el zumo de la lima, el aceite y sal, y espolvorea cilantro picado si te gusta."),
    ],
  }),
  r({
    id: "bol-arroz-verduras-atun", title: "Bol de arroz con verduras, atún y aguacate",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: DA,
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("arroz", 250, "g"), I("atun-lata", 240, "g"), I("aguacate", 1, "unit"), I("zanahoria", 150, "g"), I("pepino", 200, "g"), I("maiz", 140, "g"), I("tomate-cherry", 200, "g"), I("soja", 20, "ml"), I("vinagre", 10, "ml"), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Cuece el arroz en agua con sal, escúrrelo y deja que se temple.", 15),
      S("Ralla la zanahoria, corta el pepino y el aguacate en dados y parte por la mitad los tomates cherry.", 8),
      S("Reparte el arroz en cuencos y coloca encima la verdura, el maíz y el atún escurrido.", 3),
      S("Aliña con una mezcla de soja, vinagre y aceite."),
    ],
  }),
  r({
    id: "alcachofas-al-ajillo", title: "Alcachofas al ajillo",
    cuisine: "espanola", origin: "España", authenticity: "traditional", note: NV,
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("alcachofa", 10, "unit"), I("ajo", 4, "unit"), I("limon", 1, "unit"), I("vino-blanco", 50, "ml"), I("perejil", 10, "g"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Limpia las alcachofas, pártelas en cuartos y cuécelas en agua con sal y el zumo del limón 12 minutos. Escúrrelas.", 12),
      S("Dora el ajo laminado en una sartén con el aceite, añade las alcachofas y saltéalas 3 minutos.", 4),
      S("Riega con el vino, deja que se evapore y termina con perejil picado.", 2),
    ],
  }),
  r({
    id: "brochetas-pollo-pimientos", title: "Brochetas de pollo con pimientos y cebolla",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${NV} Pechuga sin piel, a la plancha.`,
    baseServings: 4, prepMin: 20, cookMin: 12, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 600, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("limon", 1, "unit"), I("pimenton", 3, "g"), I("oregano", 1, "g"), I("aceite", 25, "ml"), I("sal", 4, "g")],
    steps: [
      S("Corta la pechuga de pollo en dados y adóbala con el zumo de limón, el pimentón, el orégano, la mitad del aceite y sal, 15 minutos.", 15),
      S("Corta los pimientos (rojo y verde) y la cebolla en cuadrados y monta las brochetas alternando con el pollo.", 8),
      S("Hazlas a la plancha con el resto del aceite, dándoles la vuelta, 10-12 minutos.", 12),
    ],
  }),
  r({
    id: "calabacin-relleno-atun-huevo", title: "Calabacines rellenos de atún y huevo al horno",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${NV} Sin bechamel: la pulpa del calabacín hace de salsa.`,
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["horno", "sarten", "olla"],
    ingredients: [I("calabacin", 1000, "g"), I("atun-lata", 240, "g"), I("huevo", 2, "unit"), I("cebolla", 1, "unit"), I("tomate-triturado", 200, "g"), I("queso", 30, "g"), I("aceite", 25, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece los huevos 10 minutos, enfríalos y pícalos.", 10),
      S("Parte los calabacines a lo largo, vacíalos con una cuchara y pica la pulpa.", 8),
      S("Pocha la cebolla con el aceite, añade la pulpa y el tomate triturado y cocina 8 minutos. Retira, mezcla con el atún y el huevo y salpimienta.", 12),
      S("Rellena los calabacines, espolvorea poco queso rallado y hornea a 190 °C 20 minutos.", 20, 190),
    ],
  }),
  r({
    id: "lombarda-ajoarriero", title: "Lombarda rehogada al ajoarriero con manzana",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: NV,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("repollo", 1, "unit"), I("manzana", 1, "unit"), I("ajo", 3, "unit"), I("pimenton", 3, "g"), I("vinagre", 15, "ml"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Corta la lombarda (repollo morado) en tiras finas y cuécela en agua con sal y un chorro de vinagre 20 minutos. Escúrrela.", 20),
      S("Dora el ajo laminado en una sartén con el aceite, retira del fuego y añade el pimentón.", 2),
      S("Saltea la lombarda en ese refrito con la manzana en dados, 5 minutos.", 5),
    ],
  }),
  r({
    id: "tofu-marinado-cebolla-pochada", title: "Tofu marinado a la plancha con cebolla pochada",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${NV} Proteína vegetal, sin colesterol.`,
    baseServings: 4, prepMin: 40, cookMin: 25, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("tofu", 500, "g"), I("soja", 40, "ml"), I("jengibre", 10, "g"), I("ajo", 1, "unit"), I("cebolla", 3, "unit"), I("pimiento", 1, "unit"), I("sesamo", 10, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Corta el tofu en filetes y márinalo 30 minutos en la soja con el jengibre rallado y el ajo picado.", 30),
      S("Pocha despacio la cebolla y el pimiento en juliana con la mitad del aceite hasta que estén dulces.", 20),
      S("Dora el tofu a la plancha con el resto del aceite, 3 minutos por lado, y añade al final el resto de la marinada.", 6),
      S("Sírvelo sobre la cebolla con el sésamo por encima."),
    ],
  }),
  r({
    id: "bacalao-con-pisto", title: "Bacalao con pisto",
    cuisine: "espanola", origin: "España (La Mancha)", authenticity: "traditional", note: NV,
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("bacalao", 600, "g"), I("calabacin", 300, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("tomate-triturado", 400, "g"), I("ajo", 2, "unit"), I("aceite", 40, "ml"), I("azucar", 3, "g")],
    steps: [
      S("Pocha la cebolla, el ajo y los pimientos picados con el aceite 12 minutos; añade el calabacín en dados y cocina 8 minutos más.", 20),
      S("Incorpora el tomate triturado con una pizca de azúcar (sin sal: el bacalao ya la aporta) y deja que se haga a fuego suave 15 minutos.", 15),
      S("Coloca encima los lomos de bacalao desalado, tapa y cocina 6-8 minutos.", 7),
    ],
  }),
  r({
    id: "pasta-champinones-atun", title: "Pasta integral con champiñones, atún y tomate",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${NV} Mejor con pasta integral.`,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 320, "g"), I("champinones", 300, "g"), I("atun-lata", 160, "g"), I("tomate-cherry", 250, "g"), I("ajo", 2, "unit"), I("perejil", 10, "g"), I("aceite", 30, "ml"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece la pasta (integral) en agua con sal el tiempo del paquete.", 11),
      S("Saltea el ajo y los champiñones laminados con el aceite 6 minutos; añade los tomates cherry partidos y cocina 3 minutos.", 9),
      S("Mezcla con la pasta escurrida y el atún, salpimienta y termina con perejil."),
    ],
  }),
  r({
    id: "garbanzos-estofados-espinacas", title: "Garbanzos estofados con espinacas y verduras",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${NV} Legumbre sin chorizo ni tocino.`,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("garbanzos-cocidos", 800, "g"), I("espinacas", 250, "g"), I("cebolla", 1, "unit"), I("zanahoria", 150, "g"), I("pimiento", 1, "unit"), I("tomate-triturado", 200, "g"), I("ajo", 2, "unit"), I("pimenton", 3, "g"), I("comino", 1, "g"), I("aceite", 30, "ml"), I("sal", 2, "g")],
    steps: [
      S("Sofríe la cebolla, el ajo, la zanahoria y el pimiento picados con el aceite 10 minutos.", 10),
      S("Añade el pimentón y el comino, el tomate triturado y cocina 5 minutos.", 5),
      S("Agrega los garbanzos escurridos y medio litro de agua y cuece 12 minutos a fuego suave.", 12),
      S("Incorpora las espinacas, deja que se ablanden 2 minutos y ajusta de sal.", 2),
    ],
  }),
  r({
    id: "sopa-repollo-apio", title: "Sopa de repollo, apio y perejil",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${CP} Ligera y con mucha verdura.`,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("repollo", 0.5, "unit"), I("apio", 150, "g"), I("zanahoria", 150, "g"), I("cebolla", 1, "unit"), I("tomate", 200, "g"), I("perejil", 15, "g"), I("caldo", 500, "ml"), I("aceite", 20, "ml"), I("sal", 2, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga la cebolla, el apio y la zanahoria picados con el aceite 6 minutos.", 6),
      S("Añade el repollo en tiras, el tomate en dados el caldo (de verduras, bajo en sal) y 700 ml de agua, y cuece 20 minutos.", 20),
      S("Salpimienta y sirve con el perejil picado."),
    ],
  }),
];
