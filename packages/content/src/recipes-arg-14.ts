import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 14: huevos y primeras carnes. */
export const recipesArg14: Recipe[] = [
  es({
    id: "huevo-flor-setas-escabeche", title: "Huevo flor con setas en escabeche",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("huevo", 4, "unit"), I("setas", 800, "g"), I("cebolleta", 2, "unit"), I("ajo", 4, "unit"), I("vinagre", 150, "ml"), I("laurel", 1, "unit"), I("pimenton", 2, "g"), I("aceite", 200, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Rehoga los ajos enteros y la cebolleta en cilindros en abundante aceite con el laurel hasta que tomen color.", 8),
      S("Añade el vinagre (mejor de Jerez), las setas troceadas, la pimienta en grano, el pimentón y sal y cocina 7 minutos. Espolvorea perejil.", 7),
      S("Forra 4 tazas con film untado de aceite, casca un huevo en cada una con sal, ciérralo y cuécelo en agua hirviendo 4-5 minutos.", 5),
      S("Sirve el huevo sobre las setas en escabeche."),
    ],
  }),
  es({
    id: "habitas-morcilla-huevo-palitos", title: "Habitas con morcilla y huevo flor con palitos de pimentón",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["horno", "sarten", "olla"],
    ingredients: [I("habas", 1000, "g"), I("morcilla", 250, "g"), I("huevo", 8, "unit"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("pinones", 40, "g"), I("harina", 100, "g"), I("pimenton", 3, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Mezcla la harina con 100 ml de agua, sal y el pimentón, forma tiras con una manga sobre papel y hornéalas a 200 °C 10 minutos.", 10, 200),
      S("Pocha la cebolleta y el puerro picados 6 minutos. Cuece las habas peladas 5 minutos y añádelas. Tuesta los piñones.", 8),
      S("Saltea la morcilla (mejor de arroz) en rodajas. Cuece los huevos envueltos en film untado de aceite (dos por paquete) en agua hirviendo 5 minutos.", 5),
      S("Sirve las habitas con la morcilla, los huevos, los piñones, los palitos y perejil."),
    ],
  }),
  es({
    id: "revuelto-setas-ensalada", title: "Revuelto de setas con ensalada",
    note: "El original usa perretxikos (setas de primavera).",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 8, "unit"), I("setas", 500, "g"), I("lechuga", 1, "unit"), I("tomate", 150, "g"), I("cebolleta", 1, "unit"), I("aceite", 50, "ml"), I("vinagre", 15, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Prepara la lechuga troceada con el tomate pelado y la cebolleta en juliana; alíñala al servir con aceite, vinagre y sal.", 5),
      S("Saltea las setas troceadas a mano en aceite muy caliente con sal.", 4),
      S("Añade los huevos batidos con perejil y remueve a fuego suave hasta que cuajen jugosos.", 3),
    ],
  }),
  es({
    id: "crepes-txistorra-huevo-cebolla", title: "Crepes de txistorra con huevo frito y aros de cebolla",
    baseServings: 6, prepMin: 15, cookMin: 30, difficulty: "medium", equipment: ["batidora", "sarten"],
    ingredients: [I("txistorra", 50, "g"), I("huevo", 8, "unit"), I("harina", 200, "g"), I("leche", 165, "ml"), I("cebolla", 1, "unit"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saltea la txistorra desmenuzada y pícala. Tritura 2 huevos con 100 g de harina, la leche, una cucharada de aceite y sal; añade la txistorra.", 5),
      S("Haz 6 crepes en una sartén untada, 30 segundos por el segundo lado.", 10),
      S("Pasa la cebolla en aros por el resto de harina y fríela.", 6),
      S("Fríe los 6 huevos, salpimienta y sirve cada uno sobre un crepe con los aros de cebolla y perejil.", 6),
    ],
  }),
  es({
    id: "tortilla-merluza-salsa-pimiento", title: "Tortilla de merluza y ajetes con salsa de pimiento verde",
    note: "El original usa pescadilla.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("huevo", 8, "unit"), I("merluza", 250, "g"), I("ajo", 8, "unit"), I("pimiento", 2, "unit"), I("cebolleta", 1, "unit"), I("vino-blanco", 100, "ml"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha la cebolleta y los pimientos verdes picados, añade el vino, un chorrito de agua y sal y cuece 17 minutos. Tritura.", 20),
      S("Saltea los ajos frescos (ajetes) en cilindros y añade la merluza sin piel en dados con sal.", 4),
      S("Bate los huevos con perejil y sal, mezcla con el pescado y cuaja la tortilla por los dos lados. Sírvela con la salsa.", 5),
    ],
  }),
  es({
    id: "jamon-relleno-tortilla-queso", title: "Rollitos de jamón cocido con tortilla y queso sobre tomate asado",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("huevo", 6, "unit"), I("jamon-cocido", 150, "g"), I("queso", 120, "g"), I("tomate", 1000, "g"), I("oregano", 2, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Escalda los tomates 1-2 minutos, pélalos y córtalos en dados. Extiéndelos en una fuente, sala, espolvorea orégano, riega con aceite y ásalos en el horno a 200 °C 20 minutos.", 22, 200),
      S("Haz 6 tortillas finas de un huevo cada una con sal y perejil.", 10),
      S("Cubre cada loncha de jamón con una tortilla y una loncha de queso, enróllala y caliéntala 2 minutos en la sartén. Sírvelas sobre el tomate.", 3),
    ],
  }),
  es({
    id: "huevos-rotos-esparragos-habitas", title: "Huevos rotos con patatas, espárragos verdes, habitas y crema de piquillos",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("huevo", 4, "unit"), I("patata", 500, "g"), I("esparragos-verdes", 250, "g"), I("habas", 200, "g"), I("pimientos-piquillo", 200, "g"), I("ajo", 4, "unit"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece las habitas (habas) 10 minutos. Cocina los piquillos con aceite y sal 5 minutos y tritúralos con su aceite.", 12),
      S("Fríe las patatas en bastones y sálalas. Haz los espárragos a la plancha 7 minutos.", 10),
      S("Dora el ajo laminado y fríe los huevos de uno en uno.", 5),
      S("Monta las patatas con las verduras, los huevos rotos encima, la crema de piquillos y perejil."),
    ],
  }),
  es({
    id: "cazuelitas-huevos-escondidos", title: "Cazuelitas de huevos escondidos",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "medium", equipment: ["olla", "horno"],
    ingredients: [I("huevo", 4, "unit"), I("jamon-cocido", 100, "g"), I("queso", 120, "g"), I("patata", 700, "g"), I("pimiento", 1, "unit"), I("vinagre", 20, "ml"), I("aceite", 50, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece las patatas con piel en agua con sal 35 minutos; pélalas y haz un puré con aceite y sal. A la vez, asa el pimiento rojo con aceite y sal en el horno a 190 °C 35 minutos, pélalo y córtalo en tiras.", 35, 190),
      S("Pon una capa de puré en 4 cazuelitas y el jamón cocido en juliana alrededor.", 3),
      S("Escalfa los huevos en agua con vinagre 3 minutos y ponlos en el centro.", 3),
      S("Tápalos con el pimiento y una loncha de queso graso y gratina en el horno 3 minutos.", 3, 220),
    ],
  }),
  es({
    id: "huevos-a-la-cazuela", title: "Huevos a la cazuela con chorizo, panceta y queso",
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("huevo", 8, "unit"), I("panceta", 150, "g"), I("chorizo", 150, "g"), I("queso", 80, "g"), I("tomate-triturado", 500, "g"), I("pan", 60, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g")],
    steps: [
      S("Fríe el pan de molde en triángulos.", 3),
      S("Fríe la panceta y el chorizo picados, retira parte de la grasa y añade el tomate 5 minutos.", 8),
      S("Reparte en 4 cazuelitas, casca 2 huevos en cada una, cubre con queso y hornea a 190 °C 3-4 minutos. Sirve con el pan y perejil.", 4, 190),
    ],
  }),
  es({
    id: "huevo-flor-esparragos-guisantes", title: "Huevo flor con guisantes y tiras de espárrago",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 4, "unit"), I("esparragos-blancos", 400, "g"), I("guisantes", 300, "g"), I("cebolleta", 1, "unit"), I("maicena", 8, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Rehoga la cebolleta picada, añade los guisantes y un poco de agua con sal y cuece 10 minutos. Liga con la maicena disuelta.", 12),
      S("Cuece los huevos envueltos en film untado de aceite con sal en agua hirviendo 3-4 minutos.", 4),
      S("Pela los espárragos, saca tiras finas con el pelador y saltéalas en la sartén 1 minuto.", 2),
      S("Sirve los guisantes con el huevo, las tiras de espárrago y perejil."),
    ],
  }),
  es({
    id: "huevos-gambas-ajetes-patatas-paja", title: "Huevos con gambas, ajetes y patatas paja",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("huevo", 8, "unit"), I("gambas", 400, "g"), I("ajo", 8, "unit"), I("patata", 400, "g"), I("aceite", 300, "ml"), I("sal", 5, "g")],
    steps: [
      S("Corta las patatas en bastones muy finos, lávalas, sécalas y fríelas. Sala.", 10),
      S("Saltea los ajos frescos (ajetes) en cilindros y las gambas peladas y troceadas.", 3),
      S("Cuece los huevos (dos por paquete) envueltos en film untado de aceite con sal 5-6 minutos en agua hirviendo.", 6),
      S("Sirve los huevos sobre las patatas con las gambas."),
    ],
  }),
  es({
    id: "huevos-al-nido", title: "Huevos al nido",
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("huevo", 4, "unit"), I("pan", 240, "g"), I("queso", 50, "g"), I("tomate-triturado", 300, "g"), I("cebolla", 1, "unit"), I("aceite", 30, "ml"), I("perejil", 3, "g")],
    steps: [
      S("Corta la tapa de 4 bollos de pan (brioche o de leche) y vacíalos sin romperlos.", 3),
      S("Dora la cebolla en daditos, añade la mitad del tomate, el queso rallado y la miga, y rellena los bollos.", 7),
      S("Casca un huevo en cada uno y hornéalos a 190 °C 3-4 minutos. Sírvelos con el resto del tomate caliente y perejil.", 4, 190),
    ],
  }),
  es({
    id: "huevos-salsa-bretona", title: "Huevos al horno con salsa bretona",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("huevo", 4, "unit"), I("cebolla", 0.5, "unit"), I("puerro", 1, "unit"), I("panceta", 100, "g"), I("champinones", 100, "g"), I("vino-blanco", 125, "ml"), I("caldo", 375, "ml"), I("maicena", 8, "g"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Rehoga la cebolla y el puerro en juliana, añade la panceta en dados y los champiñones laminados.", 10),
      S("Añade el vino, da un hervor, vierte el caldo (de carne) y liga con la maicena disuelta.", 6),
      S("Pasa a una cazuela de barro, casca los huevos encima y gratínalos en el horno vigilando que no se pasen. Sirve con perejil.", 5, 220),
    ],
  }),
  es({
    id: "huevos-escalfados-guisantes", title: "Huevos escalfados con guisantes y pan frito",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 4, "unit"), I("guisantes", 600, "g"), I("cebolleta", 3, "unit"), I("pan", 40, "g"), I("mantequilla", 10, "g"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Pocha las cebolletas picadas, añade los guisantes, medio vaso de agua y sal, tapa y cuece 9 minutos.", 14),
      S("Escalfa los huevos 2 minutos en agua hirviendo.", 2),
      S("Fríe el pan de molde en triángulos, unta una punta con mantequilla y pásala por perejil picado. Sirve los guisantes con el huevo y el pan.", 3),
    ],
  }),
  es({
    id: "huevos-florentina", title: "Huevos escalfados a la florentina",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("huevo", 4, "unit"), I("espinacas", 800, "g"), I("queso", 100, "g"), I("leche", 300, "ml"), I("harina", 30, "g"), I("vinagre", 20, "ml"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece las espinacas en agua con sal, escúrrelas bien y pícalas.", 5),
      S("Haz una bechamel: rehoga la harina en el aceite, añade la leche poco a poco y cuece 8 minutos con sal y perejil.", 10),
      S("Escalfa los huevos en agua con vinagre 2-3 minutos.", 3),
      S("Forma 4 nidos de espinacas en una fuente, pon un huevo en cada uno, cubre con la bechamel y el queso (manchego tierno) y gratina en el horno.", 4, 220),
    ],
  }),
  es({
    id: "tostas-tortilla-pavo-pisto", title: "Tostas de tortilla de pavo con pisto",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("huevo", 8, "unit"), I("pavo", 80, "g"), I("pan", 200, "g"), I("tomate", 300, "g"), I("pimiento", 1, "unit"), I("calabacin", 250, "g"), I("cebolleta", 1, "unit"), I("patata", 250, "g"), I("ajo", 2, "unit"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Tuesta 4 rebanadas de pan en el horno.", 5, 200),
      S("Fríe la cebolleta, el pimiento verde y el calabacín en daditos; fríe aparte la patata en daditos y mézclalo todo. Cocina el ajo picado con el tomate pelado 10 minutos.", 15),
      S("Haz 4 tortillas de 2 huevos con sal y un cuarto del pavo (el original usa jamón de pavo) en dados.", 10),
      S("Monta las tostas con el tomate, la tortilla y el pisto, con perejil."),
    ],
  }),
  es({
    id: "milhojas-tortilla", title: "Milhojas de tortillas de champiñón, ajetes y gambas",
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("huevo", 10, "unit"), I("gambas", 400, "g"), I("ajo", 10, "unit"), I("champinones", 150, "g"), I("cebolleta", 2, "unit"), I("tomate-triturado", 50, "g"), I("pimientos-piquillo", 100, "g"), I("azucar", 2, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Abre los piquillos y hornéalos con aceite, sal y una pizca de azúcar a 170 °C 10 minutos.", 10, 170),
      S("Pocha las cebolletas con los champiñones laminados y cuaja una tortilla con 3 huevos.", 10),
      S("Dora 8 ajos frescos picados y cuaja otra tortilla con 3 huevos. Saltea las gambas peladas con 2 ajos picados y cuaja una tercera con 4 huevos.", 12),
      S("Apila las tortillas alternando con el tomate y los piquillos y sirve en porciones con perejil.", 2),
    ],
  }),
  es({
    id: "revuelto-esparragos-beicon", title: "Revuelto de espárragos verdes y beicon",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 6, "unit"), I("beicon", 200, "g"), I("esparragos-verdes", 250, "g"), I("champinones", 100, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece los espárragos en agua con sal 15 minutos y córtalos en trozos de 3 cm.", 15),
      S("Rehoga la cebolleta en dados y el ajo laminado, añade los champiñones laminados y el beicon en dados.", 7),
      S("Incorpora los espárragos y los huevos, sala y remueve hasta que cuajen. Sirve con perejil.", 3),
    ],
  }),
  es({
    id: "huevos-al-horno-tomate-esparragos", title: "Huevos al horno con tomate, espárragos y jamón",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("huevo", 8, "unit"), I("jamon", 60, "g"), I("esparragos-verdes", 250, "g"), I("tomate-cherry", 150, "g"), I("champinones", 120, "g"), I("tomate-triturado", 800, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha el ajo y la cebolleta picados, añade el tomate triturado y cocina 17 minutos. Repártelo en 4 cazuelitas de horno.", 20),
      S("Haz los espárragos a la plancha 7 minutos y saltea los champiñones 5 minutos.", 7),
      S("Casca 2 huevos en cada cazuelita, rodéalos con las verduras y los tomates cherry escaldados y pelados, salpimienta y hornea a 190 °C 5 minutos.", 5, 190),
      S("Sirve con el jamón en lonchas y perejil."),
    ],
  }),
  es({
    id: "revuelto-patatas-pimientos-jamon", title: "Revuelto de patatas, pimientos y jamón con pan con tomate",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("huevo", 6, "unit"), I("patata", 500, "g"), I("pimiento", 2, "unit"), I("cebolleta", 2, "unit"), I("jamon", 100, "g"), I("tomate", 120, "g"), I("ajo", 1, "unit"), I("pan", 125, "g"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Tuesta el pan en rodajas en el horno.", 5, 200),
      S("Fríe las patatas en rodajas finas con sal, las cebolletas y los pimientos verdes en juliana 18 minutos. Retira el aceite.", 18),
      S("Añade el jamón troceado, casca los huevos, rómpelos, sala y cuaja con perejil.", 3),
      S("Sirve con el pan untado de ajo y tomate."),
    ],
  }),
  es({
    id: "tortilla-caballa-tostas", title: "Tortilla de caballa con puerros y pan con tomate",
    note: "El original usa verdel, que es la caballa en el Cantábrico.",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("huevo", 8, "unit"), I("pan", 250, "g"), I("caballa", 600, "g"), I("puerro", 2, "unit"), I("cebolleta", 2, "unit"), I("tomate", 120, "g"), I("ajo", 1, "unit"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Tuesta rebanadas de pan en el horno.", 5, 200),
      S("Saca los lomos de la caballa, quita las espinas centrales, trocéalos y sálalos.", 6),
      S("Pocha las cebolletas en dados y los puerros en cuartos de luna, añade el pescado y saltéalo.", 10),
      S("Bate los huevos con perejil y sal, mezcla y cuaja la tortilla. Sirve con el pan untado de ajo y tomate.", 5),
    ],
  }),
  es({
    id: "revuelto-verduras-alcachofas", title: "Revuelto de verduras con alcachofas fritas",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 6, "unit"), I("cebolleta", 2, "unit"), I("puerro", 2, "unit"), I("pimiento", 1, "unit"), I("alcachofa", 2, "unit"), I("guisantes", 100, "g"), I("aceite", 150, "ml"), I("sal", 5, "g")],
    steps: [
      S("Pocha los puerros, el pimiento rojo pelado y las cebolletas en juliana fina.", 12),
      S("Añade los guisantes cocidos y los huevos, sala y remueve hasta que cuajen.", 3),
      S("Fríe las alcachofas limpias en láminas y sírvelas sobre el revuelto.", 5),
    ],
  }),
  es({
    id: "alcachofas-huevo-parmentier-jamon", title: "Alcachofas con huevo escalfado y parmentier de jamón",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 4, "unit"), I("alcachofa", 12, "unit"), I("ajo", 3, "unit"), I("patata", 600, "g"), I("jamon-cocido", 175, "g"), I("leche", 100, "ml"), I("romero", 1, "g"), I("vinagre", 20, "ml"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Limpia las alcachofas y cuécelas con perejil 20 minutos. Escúrrelas y pártelas por la mitad. A la vez, cuece las patatas con el romero y sal 25 minutos.", 25),
      S("Fríe el jamón cocido en dados con los ajos partidos; retira los ajos.", 4),
      S("Aplasta las patatas con la leche y un chorro de aceite y mezcla con el jamón.", 3),
      S("Escalfa los huevos en agua con vinagre 3 minutos y sírvelos sobre el puré con las alcachofas.", 3),
    ],
  }),
  es({
    id: "tortilla-ropa-vieja", title: "Tortilla de ropa vieja",
    baseServings: 4, prepMin: 15, cookMin: 70, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 6, "unit"), I("ternera", 400, "g"), I("tomate", 300, "g"), I("cebolleta", 4, "unit"), I("puerro", 1, "unit"), I("zanahoria", 100, "g"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("pimientos-piquillo", 60, "g"), I("vinagre", 10, "ml"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece la ternera (zancarrón) con el puerro, la zanahoria, una cebolleta, perejil y sal 60 minutos (20 en olla rápida). Pica la carne.", 50),
      S("Dora el ajo laminado y pocha las otras cebolletas y el pimiento verde en juliana. Añade los piquillos en tiras y la carne y rehoga 5 minutos.", 12),
      S("Bate los huevos con sal y perejil, mezcla y cuaja la tortilla. Sírvela con el tomate en rodajas aliñado con aceite, vinagre (de Módena) y sal.", 6),
    ],
  }),
  es({
    id: "huevo-frito-quinoa-verduras", title: "Huevo frito con quinoa, setas y verduras",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("quinoa", 250, "g"), I("huevo", 4, "unit"), I("setas", 300, "g"), I("ajo", 2, "unit"), I("puerro", 1, "unit"), I("calabaza", 150, "g"), I("pimiento", 1, "unit"), I("nueces", 40, "g"), I("aceite", 80, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Lava la quinoa, rehógala 1 minuto, cubre con el doble de agua, sala y cuece tapada 15 minutos. Reposa 5.", 20),
      S("Saltea en la sartén la calabaza y el pimiento rojo en dados y el puerro en cilindros, con sal.", 6),
      S("Dora el ajo laminado y saltea las setas (shiitake) fileteadas. Mezcla con la quinoa, las verduras y las nueces.", 4),
      S("Fríe los huevos y sírvelos encima con perejil.", 4),
    ],
  }),
  es({
    id: "bollos-revuelto-jamon-queso", title: "Bollos rellenos de queso fundido y revuelto de jamón",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("huevo", 4, "unit"), I("jamon-cocido", 250, "g"), I("pan", 300, "g"), I("vino-blanco", 50, "ml"), I("queso", 150, "g"), I("ajo", 1, "unit"), I("aceite", 130, "ml"), I("perejil", 30, "g"), I("sal", 3, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta la tapa de 4 bollos de pan redondos, vacíalos y tuesta las tapas en la sartén.", 4),
      S("Hierve el vino, baja el fuego y funde en él el queso en dados (gruyer y emmental) removiendo. Repártelo en los bollos.", 5),
      S("Bate los huevos con el jamón cocido en daditos, perejil, sal y pimienta y cuaja un revuelto jugoso. Rellena los bollos.", 4),
      S("Tritura el ajo con el resto de perejil y 125 ml de aceite y sirve un hilo por encima."),
    ],
  }),
  es({
    id: "chuletas-rellenas-mermelada-cebolla", title: "Chuletas de ternera rellenas con mermelada de cebolla",
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("ternera", 1000, "g"), I("champinones", 200, "g"), I("panceta", 50, "g"), I("tomate-cherry", 250, "g"), I("cebolla", 6, "unit"), I("mantequilla", 15, "g"), I("azucar", 100, "g"), I("vino-blanco", 200, "ml"), I("vinagre", 100, "ml"), I("tomillo", 1, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha la cebolla en juliana fina con sal; añade la mantequilla, el tomillo, el vino, el vinagre y el azúcar y cuece hasta que se evapore el líquido.", 45),
      S("Mientras, dora la panceta picada y añade los champiñones laminados con sal. Escurre."),
      S("Abre las chuletas de ternera en libro, salpimienta, rellénalas, ciérralas con un palillo y hazlas en la sartén 4 minutos por lado.", 8),
      S("Asa los tomates cherry en el horno a 200 °C 8 minutos y sirve las chuletas con la mermelada, los tomates y perejil.", 8, 200),
    ],
  }),
  es({
    id: "costilla-ternera-uva", title: "Costilla de ternera asada con zumo de uva",
    baseServings: 4, prepMin: 15, cookMin: 100, difficulty: "easy", equipment: ["batidora", "horno", "sarten"],
    ingredients: [I("ternera", 1200, "g"), I("uvas", 750, "g"), I("pimientos-piquillo", 150, "g"), I("rucula", 50, "g"), I("azucar", 5, "g"), I("vinagre", 10, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Tritura las uvas blancas desgranadas y cuela el zumo.", 4),
      S("Asa la costilla de ternera con sal en el horno a 180 °C 90 minutos, regándola cada 15 minutos con zumo de uva.", 90, 180),
      S("Corta la carne en raciones y reduce el jugo de la bandeja en una sartén a fuego fuerte.", 5),
      S("Confita los piquillos con aceite, sal y azúcar y sírvelos con la carne, la salsa, la rúcula aliñada con aceite y vinagre, y perejil.", 5),
    ],
  }),
  es({
    id: "noquis-jamon-salsa-queso-azul", title: "Ñoquis de patata con jamón cocido en salsa de queso azul",
    baseServings: 4, prepMin: 40, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("patata", 1000, "g"), I("harina", 250, "g"), I("huevo", 2, "unit"), I("jamon-cocido", 200, "g"), I("queso-azul", 100, "g"), I("nata", 200, "ml"), I("vino-blanco", 100, "ml"), I("nuez-moscada", 1, "g"), I("aceite", 20, "ml"), I("perejil", 3, "g"), I("sal", 8, "g")],
    steps: [
      S("Hierve la nata con el vino y el queso azul (el original usa roquefort) y deja reducir un poco.", 6),
      S("Cuece las patatas con piel 25 minutos (12 en olla rápida), pélalas y pásalas por el pasapurés. Mezcla con las 2 yemas, nuez moscada y la harina hasta tener una masa.", 25),
      S("Corta trocitos de masa y cuécelos en agua hirviendo con sal hasta que floten.", 4),
      S("Saltea el jamón cocido en dados, añade los ñoquis y la salsa y sirve con perejil.", 3),
    ],
  }),
  es({
    id: "bocados-reina-patatas-romero", title: "Solomillo de ternera con patatas al romero y salsa de vino dulce",
    note: "El original usa bocado de la reina, un corte de ternera.",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("ternera", 700, "g"), I("patata", 800, "g"), I("romero", 2, "g"), I("azucar", 40, "g"), I("caldo", 200, "ml"), I("vino-tinto", 200, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pon las patatas en trozos grandes con sal, aceite y el romero en una bandeja, tapa con aluminio y hornea a 200 °C 20 minutos; destapa y hornea 12 minutos más.", 32, 200),
      S("Salpimienta la carne, séllala en la sartén muy caliente, ponla sobre las patatas y hornea todo a 200 °C 9 minutos.", 11, 200),
      S("Carameliza el azúcar, añade el caldo y el vino y reduce a la mitad. Sirve la carne con la salsa y perejil.", 10),
    ],
  }),
  es({
    id: "cerdo-relleno-tortilla-pina", title: "Babilla de cerdo rellena de tortilla con salsa de cebolla y piña asada",
    baseServings: 4, prepMin: 25, cookMin: 60, difficulty: "medium", equipment: ["sarten", "horno", "batidora"],
    ingredients: [I("cerdo", 1000, "g"), I("pina", 0.5, "unit"), I("cebolla", 3, "unit"), I("ajo", 2, "unit"), I("pimientos-piquillo", 100, "g"), I("huevo", 2, "unit"), I("vino-blanco", 200, "ml"), I("caldo", 200, "ml"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuaja una tortilla con los huevos batidos, perejil y sal.", 4),
      S("Abre la carne en tríptico, salpimienta, mete la tortilla en un corte y los piquillos en el otro, átala y hornéala a 220 °C 20 minutos.", 20, 220),
      S("Dora el ajo laminado y pocha la cebolla en juliana. Añade el vino y el caldo, ponlo alrededor de la carne y hornea a 180 °C 30 minutos más. Tritura la salsa.", 30, 180),
      S("Haz la piña en rodajas a la plancha y sírvela con la carne fileteada y la salsa.", 5),
    ],
  }),
];
