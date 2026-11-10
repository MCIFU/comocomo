import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libros de hamburguesas: recetario de Nestlé y «Hamburguesas vegetales» de Virginia García (Creativegan).
 *  Pasos escritos de nuevo para Cómocomo; los sazonadores de marca y los ingredientes difíciles se cambian por básicos. */
const NE = "Receta del recetario de hamburguesas de Nestlé, adaptada sin sazonadores de marca.";
const VG = "Receta del libro «Hamburguesas vegetales» de Virginia García (Creativegan), adaptada.";

export const recipesLibroHamburguesas: Recipe[] = [
  r({
    id: "hamburguesa-pollo-pina", title: "Hamburguesa de pollo con piña, jamón y queso",
    cuisine: "estadounidense", origin: "Estados Unidos (estilo hawaiano)", authenticity: "adapted", note: NE,
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("pollo", 400, "g"), I("beicon", 80, "g"), I("pimenton", 2, "g"), I("ajo", 1, "unit"), I("pan-hamburguesa", 4, "unit"), I("lechuga", 1, "unit"), I("queso", 80, "g"), I("jamon-cocido", 100, "g"), I("pina", 0.5, "unit"), I("mostaza", 15, "g"), I("sal", 3, "g")],
    steps: [
      S("Pica la pechuga de pollo con la batidora (o compra pechuga picada) y mézclala con el beicon frito y picado, el pimentón, el ajo rallado y la sal. Forma 4 hamburguesas.", 10),
      S("Hazlas en la sartén sin aceite a fuego medio 6-7 minutos por cada lado, hasta que estén bien hechas.", 14),
      S("Dora en la misma sartén 4 rodajas de piña y las lonchas de jamón cocido.", 4),
      S("Unta los panes con mostaza (o mayonesa) y monta con lechuga, la hamburguesa, el queso, el jamón y la piña.", 3),
    ],
  }),
  r({
    id: "hamburguesa-mexicana", title: "Hamburguesa mexicana con guacamole y pico de gallo",
    cuisine: "mexicana", origin: "México", authenticity: "adapted", note: `${NE} El chicharrón se sustituye por beicon crujiente.`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 400, "g"), I("ajo", 1, "unit"), I("aguacate", 2, "unit"), I("cilantro", 10, "g"), I("lima", 1, "unit"), I("cebolla", 0.5, "unit"), I("tomate", 200, "g"), I("chile", 1, "unit"), I("frijoles-negros", 200, "g"), I("pan-hamburguesa", 4, "unit"), I("queso", 80, "g"), I("beicon", 60, "g"), I("sal", 5, "g")],
    steps: [
      S("Mezcla la carne picada con el ajo rallado y sal y forma 4 hamburguesas.", 5),
      S("Para el guacamole, aplasta el aguacate con el cilantro picado, el zumo de lima y sal. Para el pico de gallo, pica la cebolla (morada), el tomate y el chile y sálalo.", 10),
      S("Hazlas hamburguesas en la sartén a fuego medio 5-6 minutos por lado; dora también el beicon hasta que esté crujiente. Calienta los frijoles aplastados.", 12),
      S("Unta los panes con los frijoles y monta con la carne, el queso, el guacamole, el pico de gallo y el beicon.", 3),
    ],
  }),
  r({
    id: "hamburguesa-filete-parmesano", title: "Hamburguesa de filete al romero con crujiente de parmesano",
    cuisine: "mexicana", origin: "México (arrachera)", authenticity: "adapted", note: `${NE} La arrachera (falda de ternera) se cambia por filetes de ternera; necesita 4 horas de marinado.`,
    baseServings: 4, prepMin: 30, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 600, "g"), I("aceite", 40, "ml"), I("salsa-inglesa", 50, "ml"), I("soja", 30, "ml"), I("romero", 2, "g"), I("parmesano", 60, "g"), I("cebolleta", 3, "unit"), I("chile", 1, "unit"), I("azucar", 10, "g"), I("patata", 400, "g"), I("leche", 60, "ml"), I("puerro", 1, "unit"), I("pan-hamburguesa", 4, "unit"), I("sal", 5, "g")],
    steps: [
      S("Marina la ternera 4 horas en la nevera con la mitad del aceite, la salsa inglesa, la soja, el romero y la sal.", 5),
      S("Cuece las patatas y hazlas puré con la leche y sal. Haz 4 círculos de parmesano rallado en la sartén hasta que se fundan y queden crujientes. Fríe el puerro en tiras finas.", 25),
      S("Saltea la cebolleta y el chile en tiras con el resto del aceite y el azúcar hasta que caramelicen.", 6),
      S("Haz la ternera a la plancha muy caliente 3-4 minutos por lado, córtala y monta los panes con puré, carne, crujiente de parmesano, cebolleta y puerro frito.", 8),
    ],
  }),
  r({
    id: "hamburguesa-tofu-alubias-barbacoa", title: "Hamburguesa vegana de tofu y alubias rojas a la barbacoa",
    cuisine: "estadounidense", origin: "Cocina vegana", authenticity: "adapted", note: VG,
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("tofu", 250, "g"), I("alubias-rojas", 200, "g"), I("cebolla", 0.5, "unit"), I("ajo", 2, "unit"), I("comino", 1, "g"), I("tomillo", 1, "g"), I("vino-blanco", 30, "ml"), I("tomate-triturado", 120, "g"), I("soja", 45, "ml"), I("maicena", 15, "g"), I("harina-garbanzo", 20, "g"), I("aceite", 45, "ml"), I("pan-hamburguesa", 4, "unit")],
    steps: [
      S("Pocha la cebolla picada con el aceite, añade el ajo, el comino y el tomillo y dora 2 minutos. Riega con el vino, añade el tomate triturado y la soja.", 10),
      S("Agrega una cucharadita de maicena disuelta en agua y cuece removiendo hasta que quede melosa. Deja que se temple.", 5),
      S("Desmenuza el tofu (extra firme) y aplástalo con las alubias rojas; mezcla con la salsa, la harina de garbanzo y el resto de maicena hasta tener una masa firme.", 6),
      S("Forma 4 hamburguesas gruesas y hazlas en la sartén a fuego medio 6-7 minutos por lado. Sírvelas en pan.", 14),
    ],
  }),
  r({
    id: "hamburguesa-calabacin", title: "Hamburguesa vegetal de calabacín y avena",
    cuisine: "estadounidense", origin: "Cocina vegana", authenticity: "adapted", note: `${VG} El original lleva soja texturizada; aquí, pan rallado.`,
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calabacin", 500, "g"), I("avena", 50, "g"), I("pan-rallado", 50, "g"), I("harina", 80, "g"), I("tomate-triturado", 30, "g"), I("oregano", 1, "g"), I("perejil", 5, "g"), I("comino", 1, "g"), I("soja", 40, "ml"), I("vinagre", 10, "ml"), I("aceite", 30, "ml"), I("sal", 2, "g"), I("pan-hamburguesa", 4, "unit")],
    steps: [
      S("Ralla el calabacín grueso, mézclalo con la sal y déjalo 30 minutos; escúrrelo muy bien apretando.", 32),
      S("Mézclalo con la avena, el pan rallado, la mitad de la harina, el tomate, el orégano, el perejil, el comino, la soja y el vinagre hasta tener una masa consistente.", 5),
      S("Forma 4 hamburguesas gruesas y pásalas por el resto de harina.", 5),
      S("Hazlas en la sartén con el aceite, tapadas, a fuego medio 6-7 minutos por lado, hasta que estén firmes.", 14),
    ],
  }),
  r({
    id: "hamburguesa-judias-negras-champinones", title: "Hamburguesa de judías negras y champiñones",
    cuisine: "estadounidense", origin: "Cocina vegana", authenticity: "adapted", note: VG,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("frijoles-negros", 300, "g"), I("champinones", 120, "g"), I("cebolla", 0.5, "unit"), I("avena", 80, "g"), I("sesamo", 15, "g"), I("pimenton", 3, "g"), I("ajo", 1, "unit"), I("perejil", 5, "g"), I("aceite", 30, "ml"), I("sal", 2, "g"), I("pan-hamburguesa", 4, "unit")],
    steps: [
      S("Pocha la cebolla picada con una cucharada de aceite, añade los champiñones picados y saltéalos 5 minutos.", 8),
      S("Aplasta las judías negras con un tenedor y mezcla con la cebolla, los champiñones, la avena, el sésamo, el pimentón (de la Vera), el ajo picado, el perejil y la sal.", 6),
      S("Forma 4 hamburguesas no muy gruesas.", 4),
      S("Hazlas a la plancha con el resto del aceite, tapadas, a fuego medio 3-4 minutos por lado. Sírvelas en pan.", 8),
    ],
  }),
  r({
    id: "hamburguesa-judias-zanahoria-california", title: "Hamburguesa California de alubias rojas, zanahoria y nueces",
    cuisine: "estadounidense", origin: "Cocina vegana", authenticity: "adapted", note: VG,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("alubias-rojas", 300, "g"), I("zanahoria", 150, "g"), I("cebolla", 0.5, "unit"), I("ajo", 1, "unit"), I("sesamo", 5, "g"), I("vino-blanco", 50, "ml"), I("pimenton", 1, "g"), I("miel", 10, "g"), I("comino", 1, "g"), I("harina-garbanzo", 40, "g"), I("limon", 0.5, "unit"), I("aguacate", 0.25, "unit"), I("nueces", 30, "g"), I("aceite", 30, "ml"), I("sal", 2, "g"), I("pan-hamburguesa", 4, "unit")],
    steps: [
      S("Pocha la cebolla picada con la mitad del aceite, añade la zanahoria rallada y el ajo picado; agrega el sésamo, el vino, el pimentón, la miel, el comino y la sal y deja que se dore 2 minutos. Enfría.", 10),
      S("Aplasta las alubias rojas y mézclalas con el sofrito, la harina de garbanzo, el zumo de limón, el aguacate y las nueces machacadas.", 6),
      S("Forma 4 hamburguesas medianas.", 4),
      S("Hazlas a la plancha con el resto del aceite 4-5 minutos por lado, hasta que se doren. Sírvelas en pan.", 10),
    ],
  }),
  r({
    id: "hamburguesa-curry-champinones-guisantes", title: "Hamburguesa vegetal al curry con champiñones, guisantes y patata",
    cuisine: "india", origin: "Cocina vegana", authenticity: "adapted", note: VG,
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("champinones", 120, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("guisantes", 70, "g"), I("comino", 1, "g"), I("curry", 3, "g"), I("tomate-triturado", 120, "g"), I("harina-garbanzo", 40, "g"), I("limon", 0.5, "unit"), I("patata", 200, "g"), I("harina", 70, "g"), I("aceite", 40, "ml"), I("sal", 3, "g"), I("pan-hamburguesa", 4, "unit")],
    steps: [
      S("Cuece la patata con piel 20 minutos, pélala y aplástala.", 20),
      S("Saltea los champiñones picados con la mitad del aceite, añade la cebolleta picada y, cuando esté tierna, el ajo, los guisantes, la sal, el comino y el curry; dora 3 minutos.", 8),
      S("Añade la harina de garbanzo, el zumo de limón y el tomate triturado y cuece hasta que esté cremoso. Deja que se enfríe y mezcla con la patata y la harina.", 6),
      S("Forma 4 hamburguesas y hazlas a la plancha con el resto del aceite 6-7 minutos por lado. Sírvelas en pan.", 14),
    ],
  }),
  r({
    id: "hamburguesa-calabaza-garbanzos", title: "Hamburguesa de calabaza y garbanzos",
    cuisine: "estadounidense", origin: "Cocina vegana", authenticity: "adapted", note: `${VG} El gluten de trigo del original se sustituye por harina y pan rallado.`,
    baseServings: 4, prepMin: 45, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("calabaza", 400, "g"), I("garbanzos-cocidos", 250, "g"), I("ajo", 1, "unit"), I("oregano", 1, "g"), I("maicena", 20, "g"), I("harina", 50, "g"), I("pan-rallado", 30, "g"), I("aceite", 30, "ml"), I("sal", 3, "g"), I("pan-hamburguesa", 4, "unit")],
    steps: [
      S("Cuece la calabaza al vapor en la olla hasta que esté tierna, unos 12 minutos. Pélala y quítale las semillas.", 14),
      S("Aplasta la calabaza con los garbanzos escurridos y mezcla con el ajo picado, el orégano, la sal, la maicena, la harina y el pan rallado. Deja la masa en la nevera 30 minutos.", 35),
      S("Forma 4 hamburguesas un poco gruesas.", 4),
      S("Hazlas a la plancha con el aceite a fuego medio-bajo 6-8 minutos por lado, hasta que estén doradas y firmes.", 15),
    ],
  }),
];
