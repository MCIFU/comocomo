import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «101 Recetas Orientales», tercera y última tanda. Pasos escritos de nuevo para Cómocomo, con cantidades y tiempos completados. */
const RO = "Receta del recetario «101 Recetas Orientales», adaptada.";

export const recipesLibroOriental3: Recipe[] = [
  r({
    id: "arroz-pollo-setas-chino", title: "Arroz con pollo y setas a la china",
    cuisine: "china", origin: "China", authenticity: "adapted", note: `${RO} El pollo y las setas se cuecen al vapor encima del arroz.`,
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("arroz", 360, "g"), I("pollo", 400, "g"), I("setas", 150, "g"), I("jengibre", 10, "g"), I("maicena", 5, "g"), I("soja", 45, "ml"), I("aceite", 30, "ml"), I("azucar", 3, "g"), I("vino-blanco", 10, "ml"), I("cebolleta", 1, "unit", true), I("sal", 3, "g")],
    steps: [
      S("Corta la pechuga de pollo en trocitos y las setas (mejor shiitake) en cuartos. Mézclalos con el jengibre picado, la maicena, la soja, el aceite, el azúcar y el vino.", 10),
      S("Pon el arroz con 800 ml de agua y la sal en una olla y cuece destapado a fuego medio hasta que absorba casi toda el agua, 6-8 minutos.", 8),
      S("Reparte el pollo con su adobo por encima, tapa bien, baja el fuego al mínimo y cuece 20 minutos sin destapar.", 20),
      S("Mezcla con cuidado y sirve con cebolleta picada si quieres."),
    ],
  }),
  r({
    id: "ensalada-oriental-pollo", title: "Ensalada oriental de pollo con sésamo",
    cuisine: "china", origin: "China (versión occidental)", authenticity: "adapted", note: `${RO} El libro usa brotes de soja; aquí lleva col en tiras finas.`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 400, "g"), I("repollo", 0.25, "unit"), I("champinones", 125, "g"), I("pimiento", 1, "unit"), I("cebolleta", 3, "unit"), I("zanahoria", 200, "g"), I("soja", 30, "ml"), I("vinagre", 20, "ml"), I("miel", 15, "g"), I("jengibre", 5, "g"), I("aceite", 30, "ml"), I("sesamo", 15, "g"), I("rabanitos", 80, "g", true)],
    steps: [
      S("Cuece la pechuga de pollo en agua con sal 12 minutos, deja que se temple y desmenúzala.", 15),
      S("Corta la col en tiras muy finas, los champiñones en láminas, el pimiento (amarillo) en dados, la cebolleta picada y la zanahoria en bastones.", 12),
      S("Para el aliño, mezcla la soja, el vinagre, la miel, el jengibre rallado y el aceite.", 3),
      S("Mezcla el pollo con las verduras, alíña y espolvorea el sésamo tostado. Adorna con rabanitos si quieres."),
    ],
  }),
  r({
    id: "patatas-caramelizadas-naranja", title: "Patatas caramelizadas a la naranja",
    cuisine: "china", origin: "Versión casera", authenticity: "adapted", note: `${RO} Guarnición dulce para carnes asadas.`,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("patata", 800, "g"), I("azucar", 25, "g"), I("mantequilla", 60, "g"), I("naranja", 1, "unit"), I("perejil", 5, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas (mejor pequeñas) con piel en agua con sal hasta que estén tiernas, 15 minutos. Escúrrelas.", 16),
      S("Derrite el azúcar en una sartén a fuego lento sin dejar de remover; añade la mantequilla y una cucharada de zumo de naranja.", 4),
      S("Incorpora las patatas y dales vueltas hasta que queden cubiertas de caramelo, 5 minutos.", 5),
      S("Salpimienta, espolvorea perejil picado y la ralladura de la naranja, y sirve al momento."),
    ],
  }),
  r({
    id: "naranjas-almibar-canela", title: "Naranjas en almíbar de canela",
    cuisine: "china", origin: "Versión casera", authenticity: "adapted", note: `${RO} Versión rápida: el libro deja la piel 8 horas en remojo; aquí se usan gajos pelados.`,
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("naranja", 6, "unit"), I("azucar", 200, "g"), I("canela", 4, "g"), I("limon", 0.5, "unit")],
    steps: [
      S("Pela 4 naranjas a vivo y sepáralas en gajos. Exprime las otras 2.", 12),
      S("Cuece el zumo con 300 ml de agua, el azúcar, la canela en rama y el zumo del limón a fuego lento 25 minutos, hasta tener un almíbar espeso.", 25),
      S("Echa los gajos en el almíbar, da un hervor de 2 minutos y deja que se enfríen dentro. Sirve frío.", 3),
    ],
  }),
  r({
    id: "tiras-salmon-marinado-soja", title: "Tiras de salmón marinado en soja y jengibre",
    cuisine: "japonesa", origin: "Japón", authenticity: "adapted", note: `${RO} Se come crudo: usa salmón congelado al menos 5 días a −20 °C por el anisakis. El sake se puede cambiar por vino blanco.`,
    baseServings: 4, prepMin: 20, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("salmon", 500, "g"), I("cebolleta", 3, "unit"), I("jengibre", 15, "g"), I("ajo", 2, "unit"), I("azucar", 5, "g"), I("sal", 4, "g"), I("soja", 30, "ml"), I("vino-blanco", 60, "ml"), I("pepino", 150, "g"), I("vinagre", 20, "ml")],
    steps: [
      S("Corta el salmón (sin piel y previamente congelado) en tiras finas y colócalas en una fuente.", 8),
      S("Mezcla la cebolleta y el ajo picados, el jengibre rallado, el azúcar, la sal, la soja y el vino; viértelo sobre el salmón, tapa y deja 1 hora en la nevera.", 5),
      S("Corta el pepino en láminas finas y alíñalo con el vinagre.", 5),
      S("Sirve el salmón frío con el pepino."),
    ],
  }),
  r({
    id: "parrillada-carne-verduras-oriental", title: "Parrillada oriental de ternera y verduras",
    cuisine: "japonesa", origin: "Japón (yakiniku casero)", authenticity: "adapted", note: RO,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 400, "g"), I("berenjena", 400, "g"), I("setas", 150, "g"), I("judias-verdes", 150, "g"), I("calabacin", 300, "g"), I("pimiento", 1, "unit"), I("cebolleta", 4, "unit"), I("soja", 40, "ml"), I("jengibre", 10, "g"), I("aceite", 40, "ml"), I("arroz", 280, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz.", 16),
      S("Corta la ternera (mejor solomillo) en lonchas finas y sazona con pimienta. Corta la berenjena y el calabacín en láminas, el pimiento en tiras y las cebolletas por la mitad.", 12),
      S("Haz las verduras, las setas y las judías verdes en la plancha o sartén con el aceite, por tandas, hasta que estén tostadas.", 10),
      S("Haz la carne a la plancha 1 minuto por lado y sírvelo todo con una salsa de soja con jengibre rallado y el arroz.", 3),
    ],
  }),
  r({
    id: "albondigas-pescado-espinacas", title: "Albóndigas de pescado en caldo con espinacas",
    cuisine: "china", origin: "China (Shanghái)", authenticity: "adapted", note: `${RO} El libro usa esturión; vale merluza.`,
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "medium", equipment: ["olla", "batidora"],
    ingredients: [I("merluza", 400, "g"), I("huevo", 1, "unit"), I("maicena", 15, "g"), I("cebolleta", 2, "unit"), I("jengibre", 10, "g"), I("vino-blanco", 30, "ml"), I("caldo", 1000, "ml"), I("espinacas", 150, "g"), I("sal", 4, "g")],
    steps: [
      S("Machaca la cebolleta y el jengibre, ponlos en remojo en el vino con 3 cucharadas de agua 10 minutos y cuela.", 10),
      S("Tritura con la batidora la merluza sin piel ni espinas con la clara del huevo, la maicena, la sal y el líquido colado hasta tener una pasta fina.", 5),
      S("Lleva el caldo a un hervor suave y echa bolitas de pasta con dos cucharas mojadas; cuécelas 5 minutos, hasta que floten.", 8),
      S("Añade las espinacas, deja que se ablanden 1 minuto y sirve en cuencos.", 2),
    ],
  }),
  r({
    id: "albondigas-gambas-fritas", title: "Bolitas fritas de gambas con pan",
    cuisine: "china", origin: "China", authenticity: "adapted", note: RO,
    baseServings: 4, prepMin: 25, cookMin: 10, difficulty: "medium", equipment: ["sarten", "batidora"],
    ingredients: [I("gambas", 400, "g"), I("pan", 100, "g"), I("huevo", 1, "unit"), I("maicena", 10, "g"), I("jengibre", 5, "g"), I("vino-blanco", 10, "ml"), I("aceite", 500, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g"), I("soja", 30, "ml")],
    steps: [
      S("Quita la corteza al pan (de molde) y córtalo en dados de medio centímetro.", 5),
      S("Tritura con la batidora las gambas peladas con la clara del huevo, la maicena, el jengibre rallado, el vino, sal y pimienta hasta tener una pasta.", 6),
      S("Forma bolitas con las manos mojadas y rebózalas en los dados de pan, apretando.", 10),
      S("Fríelas en el aceite caliente a fuego medio hasta que estén doradas, 4-5 minutos. Sírvelas con la soja.", 8),
    ],
  }),
  r({
    id: "tortilla-jamon-pimiento-hierbas", title: "Tortilla de jamón, pimiento y tomate a las hierbas",
    cuisine: "china", origin: "Versión casera", authenticity: "adapted", note: `${RO} El libro lleva germinado de soja; se puede añadir si lo encuentras.`,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 6, "unit"), I("leche", 100, "ml"), I("jamon-cocido", 100, "g"), I("pimiento", 1, "unit"), I("tomate", 200, "g"), I("oregano", 1, "g"), I("perejil", 5, "g"), I("aceite", 20, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga en la sartén con el aceite el jamón cocido en tiras, el pimiento (rojo) en tiras y el tomate picado a fuego lento 8 minutos, hasta que estén tiernos.", 8),
      S("Bate los huevos con la leche, el orégano, el perejil picado, sal y pimienta.", 3),
      S("Viértelos sobre la verdura, tapa y cuece a fuego lento 3-4 minutos; dale la vuelta con un plato y cuece tapado 2 minutos más.", 6),
    ],
  }),
  r({
    id: "pimientos-estilo-chino", title: "Pimientos rojos al brandy y soja",
    cuisine: "china", origin: "Versión casera", authenticity: "adapted", note: `${RO} Guarnición para carnes y pescados.`,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pimiento", 3, "unit"), I("ajo", 2, "unit"), I("aceite", 50, "ml"), I("soja", 10, "ml"), I("azucar", 5, "g"), I("brandy", 40, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta los pimientos (rojos) en tiras.", 5),
      S("Sofríe el ajo laminado en el aceite, añade los pimientos con sal, tapa y cuece a fuego suave 20 minutos.", 20),
      S("Añade la soja, el azúcar y el brandy, tapa de nuevo y cuece 5 minutos más.", 5),
    ],
  }),
  r({
    id: "croquetas-lentejas", title: "Croquetas de lentejas",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: `${RO} Buena forma de aprovechar lentejas cocidas.`,
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("lentejas", 250, "g"), I("ajo", 1, "unit"), I("perejil", 10, "g"), I("oregano", 1, "g"), I("huevo", 2, "unit"), I("pan-rallado", 120, "g"), I("aceite", 400, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las lentejas 25 minutos (o usa lentejas ya cocidas), escúrrelas bien y aplástalas con un tenedor.", 25),
      S("Mézclalas con el ajo picado, el perejil, el orégano, sal, pimienta y el pan rallado necesario para tener una masa que se pueda moldear.", 6),
      S("Forma las croquetas, pásalas por huevo batido y pan rallado.", 10),
      S("Fríelas en el aceite caliente hasta que estén doradas y escúrrelas. Sírvelas con ensalada.", 8),
    ],
  }),
];
