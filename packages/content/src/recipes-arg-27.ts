import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 27: últimos postres. */
export const recipesArg27: Recipe[] = [
  es({
    id: "dulce-de-coco", title: "Crema de coco con melocotón y caramelo",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("leche", 650, "ml"), I("canela", 2, "g"), I("coco-rallado", 100, "g"), I("huevo", 4, "unit"), I("melocoton", 1, "unit"), I("maicena", 25, "g"), I("azucar", 50, "g"), I("menta", 2, "g")],
    steps: [
      S("Carameliza el azúcar con una gota de agua y repártelo en 4 moldes. Pon encima el melocotón pelado en daditos.", 6),
      S("Mezcla 75 ml de leche con la maicena y las 4 yemas. Hierve el resto de la leche con el coco y la canela (en rama), cuélalo sobre las yemas y cuécelo removiendo hasta que espese.", 10),
      S("Reparte en los moldes, deja templar y sirve con canela en polvo y menta."),
    ],
  }),
  es({
    id: "berlinesas-nata", title: "Berlinesas rellenas de nata",
    baseServings: 8, prepMin: 160, cookMin: 15, difficulty: "hard", equipment: ["sarten"],
    ingredients: [I("leche", 250, "ml"), I("harina", 500, "g"), I("levadura", 7, "g"), I("azucar", 125, "g"), I("mantequilla", 75, "g"), I("vainilla", 0.5, "unit"), I("huevo", 2, "unit"), I("canela", 2, "g"), I("nata", 300, "ml"), I("aceite", 600, "ml"), I("sal", 2, "g"), I("menta", 2, "g")],
    steps: [
      S("Disuelve la levadura (de panadero) y 75 g de azúcar en la leche tibia con la vainilla. Añade los huevos y la harina (mejor de fuerza) con la sal, amasa e incorpora la mantequilla blanda.", 15),
      S("Deja que la masa doble su volumen, al menos 2 horas.", 120),
      S("Estírala a 2 cm, corta círculos y fríelos en aceite no muy caliente por los dos lados. Escúrrelos y rebózalos en el resto del azúcar con canela.", 15),
      S("Ábrelas por un lado, rellénalas con la nata montada y decora con menta.", 8),
    ],
  }),
  es({
    id: "helado-fresa-platano", title: "Helado casero de fresa y plátano",
    baseServings: 8, prepMin: 2900, cookMin: 3, difficulty: "easy", equipment: ["batidora", "olla"],
    ingredients: [I("platano", 4, "unit"), I("fresas", 250, "g"), I("nata", 100, "ml"), I("leche-condensada", 300, "g"), I("vainilla", 0.5, "unit"), I("chocolate", 100, "g"), I("menta", 2, "g")],
    steps: [
      S("Congela los plátanos y las fresas troceados 24 horas.", 1440),
      S("Tritúralos congelados y mézclalos con la nata, la leche condensada y la vainilla. Pásalo a un molde, tapa y congela 24 horas más.", 1440),
      S("Pásalo a la nevera media hora antes de servir y acompáñalo con el chocolate fundido y menta.", 3),
    ],
  }),
  es({
    id: "flan-de-pera", title: "Flan de pera a la canela",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("leche", 400, "ml"), I("pera", 1, "unit"), I("azucar", 200, "g"), I("huevo", 4, "unit"), I("canela", 2, "g"), I("mantequilla", 20, "g"), I("menta", 2, "g")],
    steps: [
      S("Carameliza 75 g de azúcar y repártelo en 4 moldes. Calienta la leche con la canela (en rama) y deja enfriar.", 8),
      S("Bate los huevos con el resto del azúcar y añade la leche poco a poco. Saltea la pera en daditos con la mantequilla y repártela en los moldes.", 6),
      S("Vierte la mezcla y cuece al baño maría en el horno a 170 °C 20 minutos. Deja enfriar, desmolda y decora con menta.", 20, 170),
    ],
  }),
  es({
    id: "clafoutis-uvas", title: "Clafoutis de uvas negras",
    cuisine: "francesa", origin: "Francia (versión de Arguiñano)",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("uvas", 200, "g"), I("huevo", 1, "unit"), I("azucar", 15, "g"), I("leche", 100, "ml"), I("harina", 12, "g"), I("maicena", 12, "g"), I("nata", 15, "ml"), I("vainilla", 0.25, "unit"), I("mantequilla", 10, "g"), I("menta", 2, "g")],
    steps: [
      S("Unta 4 moldes con mantequilla y reparte las uvas partidas y sin pepitas.", 6),
      S("Mezcla las harinas con el azúcar, añade la leche y la nata poco a poco, el huevo y la vainilla.", 4),
      S("Vierte sobre las uvas y hornea a 220 °C 10 minutos. Sirve templado con menta.", 10, 220),
    ],
  }),
  es({
    id: "sorbete-pina-sirope-granada", title: "Sorbete de piña con sirope de granada",
    baseServings: 8, prepMin: 200, cookMin: 15, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pina", 1, "unit"), I("granada", 2, "unit"), I("cava", 250, "ml", true), I("azucar", 100, "g"), I("menta", 3, "g")],
    steps: [
      S("Exprime las granadas y reduce el zumo con 50 g de azúcar hasta tener un sirope.", 10),
      S("Disuelve el resto del azúcar en 100 ml de agua caliente y deja enfriar. Tritura la piña pelada con este almíbar.", 6),
      S("Congela el puré en un recipiente amplio, rascándolo con un tenedor cada 30 minutos durante 3 horas.", 180),
      S("Sirve en copas con el sirope, un chorrito de cava si quieres y menta."),
    ],
  }),
  es({
    id: "bunuelos-crema-lima", title: "Buñuelos de viento rellenos de crema de lima",
    baseServings: 4, prepMin: 40, cookMin: 20, difficulty: "hard", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 4, "unit"), I("harina", 40, "g"), I("mantequilla", 165, "g"), I("azucar", 200, "g"), I("lima", 4, "unit"), I("aceite", 400, "ml"), I("sal", 2, "g"), I("menta", 2, "g")],
    steps: [
      S("Bate 2 huevos con 175 g de azúcar, añade el zumo de las limas y cuece removiendo hasta que cuaje. Fuera del fuego, añade 125 g de mantequilla y la ralladura de 2 limas. Deja reposar 15 minutos.", 20),
      S("Hierve 65 ml de agua con 40 g de mantequilla y sal, añade la harina de golpe y remueve. Fuera del fuego, incorpora los otros 2 huevos de uno en uno.", 8),
      S("Fríe cucharaditas de masa en aceite no muy caliente hasta que se inflen y doren.", 10),
      S("Rellénalos con la crema de lima con una manga, espolvorea el resto del azúcar y decora con menta.", 6),
    ],
  }),
  es({
    id: "bizcochitos-manzana-jengibre", title: "Bizcochitos de manzana y jengibre",
    baseServings: 8, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("harina", 225, "g"), I("mantequilla", 150, "g"), I("leche", 160, "ml"), I("azucar", 110, "g"), I("huevo", 2, "unit"), I("levadura-quimica", 16, "g"), I("miel", 40, "g"), I("jengibre", 20, "g"), I("manzana", 1, "unit"), I("menta", 2, "g")],
    steps: [
      S("Mezcla la harina, la levadura y 100 g de azúcar; añade la mantequilla fundida, la leche, el jengibre (fresco rallado o confitado picado), la miel y los huevos.", 8),
      S("Pon la manzana pelada en daditos en 20 moldes de magdalena y llénalos hasta la mitad con la masa.", 6),
      S("Hornea a 200 °C 15 minutos, deja enfriar y espolvorea el resto del azúcar (glas). Decora con menta.", 15, 200),
    ],
  }),
  es({
    id: "cremoso-limon-queso", title: "Cremoso de limón y queso con frambuesas",
    baseServings: 6, prepMin: 140, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("nata", 220, "ml"), I("leche", 60, "ml"), I("azucar", 50, "g"), I("limon", 2, "unit"), I("gelatina", 2, "unit"), I("queso-crema", 150, "g"), I("frutos-rojos", 150, "g"), I("galletas", 100, "g"), I("menta", 2, "g")],
    steps: [
      S("Remoja la gelatina en agua fría. Hierve la nata con la leche, el azúcar y la ralladura de los limones, disuelve la gelatina y vierte sobre el queso; mezcla y añade el zumo de los limones.", 8),
      S("Tapa y enfría 2 horas en la nevera.", 120),
      S("Sirve con una manga sobre las galletas (tartaletas en el original) con las frambuesas (frutos rojos) y menta.", 8),
    ],
  }),
  es({
    id: "tarta-almendra-arandanos", title: "Tarta de almendra y arándanos",
    baseServings: 6, prepMin: 20, cookMin: 45, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("huevo", 5, "unit"), I("azucar", 280, "g"), I("almendras", 275, "g"), I("frutos-rojos", 275, "g"), I("canela", 2, "g"), I("aceite", 10, "ml"), I("limon", 1, "unit"), I("maicena", 15, "g"), I("menta", 2, "g")],
    steps: [
      S("Mezcla 250 g de azúcar con la canela y 250 g de almendra molida. Unta un molde con aceite, fórralo con tiras de papel y espolvorea el resto de la almendra.", 6),
      S("Bate los huevos, añade la ralladura de limón y la mezcla de almendra; incorpora 150 g de arándanos (frutos rojos) aplastados con 10 g de azúcar, mezclando poco.", 6),
      S("Hornea a 180 °C 40 minutos, deja enfriar y desmolda.", 40, 180),
      S("Cuece el resto de los arándanos con el azúcar que queda, 75 ml de agua y la maicena hasta que ligue y riega la tarta. Decora con menta.", 4),
    ],
  }),
  es({
    id: "galletas-nata-chocolate", title: "Galletas de nata bañadas en chocolate",
    baseServings: 8, prepMin: 50, cookMin: 15, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("harina", 250, "g"), I("nata", 200, "ml"), I("azucar", 200, "g"), I("chocolate", 120, "g"), I("sal", 1, "g")],
    steps: [
      S("Mezcla 200 g de harina con 150 g de azúcar y sal y añade la nata poco a poco hasta tener una masa. Envuélvela y deja reposar 30 minutos en la nevera.", 35),
      S("Estírala con el resto de harina y corta las galletas. Espolvorea algunas con el azúcar que queda.", 8),
      S("Hornea a 200 °C 12 minutos y deja enfriar.", 12, 200),
      S("Baña el resto en el chocolate (blanco y negro) fundido.", 5),
    ],
  }),
  es({
    id: "crumble-pera-fresa", title: "Crumble de pera y fresa con avellanas",
    cuisine: "britanica", origin: "Reino Unido (versión de Arguiñano)",
    baseServings: 4, prepMin: 20, cookMin: 28, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("fresas", 200, "g"), I("pera", 2, "unit"), I("harina", 70, "g"), I("mantequilla", 60, "g"), I("azucar", 85, "g"), I("vainilla", 0.25, "unit"), I("avellanas", 60, "g"), I("canela", 2, "g"), I("sal", 1, "g"), I("menta", 2, "g")],
    steps: [
      S("Reparte las peras peladas en trocitos en 4 cuencos y hornéalas a 180 °C 10 minutos.", 10, 180),
      S("Macera las fresas en cuartos con 25 g de azúcar (glas), la vainilla y la canela 10 minutos.", 10),
      S("Mezcla con los dedos la harina, el resto del azúcar (moscabado), sal, las avellanas picadas y la mantequilla en pomada hasta tener migas.", 5),
      S("Añade las fresas a las peras, cubre con las migas y hornea a 180 °C 18 minutos. Decora con menta.", 18, 180),
    ],
  }),
  es({
    id: "barritas-energeticas", title: "Barritas energéticas de higos, nueces y avena",
    baseServings: 8, prepMin: 45, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("higos", 100, "g"), I("orejones", 100, "g"), I("nueces", 125, "g"), I("avena", 50, "g"), I("chocolate", 50, "g")],
    steps: [
      S("Tritura los higos secos y los orejones (ciruelas pasas en el original) picados con la avena y las nueces 3 minutos.", 6),
      S("Ralla el chocolate encima y amasa hasta que se integre.", 4),
      S("Estírala entre dos papeles a 3 cm de grosor, enfría 30 minutos y corta en barritas.", 32),
    ],
  }),
  es({
    id: "crema-cuajada-horno-limon", title: "Pastel de crema al limón con canela",
    baseServings: 6, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("huevo", 2, "unit"), I("azucar", 110, "g"), I("yogur", 1, "unit"), I("mantequilla", 60, "g"), I("leche", 500, "ml"), I("limon", 1, "unit"), I("harina", 160, "g"), I("canela", 3, "g"), I("frutos-rojos", 100, "g"), I("menta", 2, "g")],
    steps: [
      S("Bate los huevos con 90 g de azúcar y 50 g de mantequilla fundida; añade el yogur, la ralladura de limón, la leche poco a poco y el zumo de medio limón.", 6),
      S("Incorpora 150 g de harina tamizada hasta tener una masa ligera.", 3),
      S("Vierte en un molde untado con el resto de la mantequilla y enharinado, espolvorea el resto del azúcar mezclado con la canela y hornea a 180 °C 35 minutos.", 35, 180),
      S("Desmolda templado y sirve con los frutos rojos y menta."),
    ],
  }),
  es({
    id: "compota-kiwi-naranja-horno", title: "Kiwi y naranja asados con especias y bollo tostado",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("kiwi", 8, "unit"), I("naranja", 2, "unit"), I("canela", 2, "g"), I("azucar", 50, "g"), I("vino-dulce", 150, "ml"), I("pasas", 30, "g"), I("orejones", 30, "g"), I("pan", 80, "g"), I("mantequilla", 25, "g"), I("menta", 2, "g")],
    steps: [
      S("Pon en una fuente el kiwi pelado en gajos, los gajos de naranja, los orejones, las ciruelas pasas (o pasas), la canela (en rama), el azúcar (moscabado) y el vino (vermut en el original). Hornea a 200 °C 30 minutos.", 30, 200),
      S("Mientras, tuesta rebanadas de bollo de pan (suizo) en la sartén con la mantequilla."),
      S("Sirve la fruta con su jugo y el pan tostado, con menta."),
    ],
  }),
  es({
    id: "sopa-fresa-kiwi-hojaldre", title: "Sopa de fresa y kiwi con espirales de hojaldre",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "horno", "batidora"],
    ingredients: [I("fresas", 500, "g"), I("kiwi", 6, "unit"), I("azucar", 200, "g"), I("masa-hojaldre", 140, "g"), I("huevo", 1, "unit"), I("sesamo", 10, "g"), I("menta", 2, "g")],
    steps: [
      S("Hierve el azúcar con 100 ml de agua 10 minutos hasta tener un almíbar espeso y deja enfriar.", 10),
      S("Pinta media lámina de hojaldre con huevo, espolvorea sésamo en la mitad, dóblala, aplana, corta 6 tiras y gíralas en espiral. Hornéalas a 180 °C 20 minutos.", 20, 180),
      S("Tritura las fresas con la mitad del almíbar y, aparte, los kiwis pelados con el resto.", 5),
      S("Sirve las dos sopas juntas en el plato con las espirales y menta."),
    ],
  }),
  es({
    id: "tortitas-manzana-horno", title: "Tortitas de manzana gratinadas con albaricoque",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["olla", "batidora", "sarten", "horno"],
    ingredients: [I("manzana", 4, "unit"), I("huevo", 2, "unit"), I("leche", 200, "ml"), I("yogur", 1, "unit"), I("harina", 100, "g"), I("azucar", 50, "g"), I("mantequilla", 45, "g"), I("vainilla", 1, "unit"), I("orejones", 60, "g"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Cuece la manzana sin pelar en láminas con un vaso de agua, la vainilla y 2 cucharadas de azúcar, tapada, 2-3 minutos. Escurre y guarda el jugo.", 6),
      S("Tritura un huevo y una yema con la leche, la harina, una cucharada de azúcar, 30 g de mantequilla fundida y sal, y cuaja 4 tortitas en la sartén untada.", 10),
      S("Ponlas en una bandeja con mantequilla, cúbrelas con la manzana, espolvorea azúcar y hornea a 220 °C 8 minutos.", 8, 220),
      S("Reduce el jugo con los orejones picados (mermelada de albaricoque en el original), riega las tortitas y sirve con el yogur y menta.", 4),
    ],
  }),
  es({
    id: "merengues-lima", title: "Merengues secos a la lima",
    baseServings: 8, prepMin: 15, cookMin: 150, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("azucar", 250, "g"), I("huevo", 3, "unit"), I("lima", 1, "unit"), I("chocolate", 15, "g")],
    steps: [
      S("Monta las 3 claras hasta que espumen y añade el azúcar poco a poco hasta tener un merengue muy firme. Añade la ralladura de lima.", 10),
      S("Forma los merengues con una manga rizada sobre papel y sécalos en el horno a 140 °C con la puerta entreabierta (90 °C en el original) unas 2 horas y media, sin que se doren.", 150, 140),
      S("Ralla el chocolate por encima de algunos."),
    ],
  }),
  es({
    id: "gelatina-chocolate-fresas", title: "Crema cuajada de chocolate con fresas al ron",
    baseServings: 4, prepMin: 140, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("chocolate", 180, "g"), I("leche", 400, "ml"), I("azucar", 50, "g"), I("mantequilla", 80, "g"), I("gelatina", 4, "unit"), I("fresas", 80, "g"), I("ron", 50, "ml"), I("menta", 2, "g")],
    steps: [
      S("Macera las fresas en daditos con el ron y 25 g de azúcar.", 5),
      S("Remoja la gelatina. Calienta la leche con el resto del azúcar y la mantequilla hasta hervir, disuelve la gelatina escurrida y viértelo sobre el chocolate picado; remueve hasta fundir.", 6),
      S("Reparte en copas y deja cuajar 2 horas en la nevera.", 120),
      S("Sirve con las fresas y menta."),
    ],
  }),
  es({
    id: "salchichon-chocolate-galleta", title: "Salchichón de chocolate, galleta y plátano",
    baseServings: 6, prepMin: 220, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("galletas", 175, "g"), I("platano", 1, "unit"), I("chocolate", 150, "g"), I("mantequilla", 80, "g"), I("avena", 30, "g"), I("menta", 2, "g")],
    steps: [
      S("Machaca las galletas (tipo María) casi hasta el polvo y aplasta el plátano.", 6),
      S("Funde el chocolate con la mantequilla al baño maría y mezcla con las galletas, el plátano y la avena (arroz inflado en el original).", 6),
      S("Forma dos rulos con film y enfríalos 3-4 horas en la nevera. Córtalos en rodajas y decora con menta.", 210),
    ],
  }),
  es({
    id: "goxua", title: "Goxua",
    origin: "España (País Vasco)",
    baseServings: 8, prepMin: 120, cookMin: 15, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("leche", 600, "ml"), I("nata", 600, "ml"), I("azucar", 200, "g"), I("maicena", 70, "g"), I("huevo", 5, "unit"), I("vainilla", 0.5, "unit"), I("melocoton", 2, "unit"), I("bizcochos", 50, "g"), I("ron", 50, "ml"), I("menta", 2, "g")],
    steps: [
      S("Haz un almíbar con 100 g de azúcar y 150 ml de agua, mézclalo con el ron y empapa los bizcochos de soletilla partidos en 8 copas.", 8),
      S("Disuelve la maicena con 60 g de azúcar en 100 ml de leche fría, añade el huevo y 4 yemas. Hierve 400 ml de nata con el resto de la leche y la vainilla, vierte la mezcla y remueve hasta que vuelva a hervir. Enfría.", 15),
      S("Mezcla la crema con 200 ml de nata montada y el melocotón en trocitos y repártela sobre los bizcochos. Enfría 1 hora.", 65),
      S("Espolvorea el resto del azúcar y quémalo con un soplete o una pala caliente. Decora con menta.", 4),
    ],
  }),
  es({
    id: "mousse-mango", title: "Mousse de mango y lima",
    baseServings: 6, prepMin: 80, cookMin: 3, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("mango", 2, "unit"), I("gelatina", 2, "unit"), I("lima", 1, "unit"), I("huevo", 3, "unit"), I("azucar", 25, "g"), I("almendras", 20, "g"), I("menta", 2, "g")],
    steps: [
      S("Remoja la gelatina y disuélvela en un chorrito de agua caliente.", 4),
      S("Tritura los mangos con ralladura y zumo de lima, el azúcar y la gelatina.", 4),
      S("Monta las 3 claras y mezcla con el puré con movimientos envolventes. Reparte en copas y enfría 1 hora.", 65),
      S("Tuesta la almendra fileteada y repártela por encima con menta.", 3),
    ],
  }),
];
