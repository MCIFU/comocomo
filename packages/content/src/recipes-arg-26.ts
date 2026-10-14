import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 26: postres. */
export const recipesArg26: Recipe[] = [
  es({
    id: "canutillos-higos-mascarpone", title: "Canutillos crujientes de higos, mascarpone y avellanas",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("pasta-brick", 2, "unit"), I("higos", 120, "g"), I("mascarpone", 100, "g"), I("avellanas", 25, "g"), I("frutos-rojos", 100, "g"), I("azucar", 25, "g"), I("aceite", 15, "ml"), I("menta", 2, "g")],
    steps: [
      S("Mezcla los higos picados (frescos o secos) con las avellanas picadas y el mascarpone.", 5),
      S("Corta las hojas de brick en 4 rectángulos, píntalos con aceite, rellénalos y enróllalos.", 5),
      S("Hornéalos sobre la bandeja untada a 200 °C 6 minutos.", 6, 200),
      S("Calienta las frambuesas (frutos rojos) con el azúcar hasta que se deshagan y sirve con los canutillos y menta.", 3),
    ],
  }),
  es({
    id: "tartitas-queso-yogur-nueces", title: "Flanes de queso y yogur con caramelo de nueces",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["sarten", "batidora", "horno"],
    ingredients: [I("queso-fresco", 200, "g"), I("yogur", 1, "unit"), I("huevo", 2, "unit"), I("maicena", 25, "g"), I("azucar", 60, "g"), I("nueces", 50, "g"), I("frutos-rojos", 150, "g"), I("naranja", 1, "unit"), I("menta", 2, "g")],
    steps: [
      S("Carameliza 40 g de azúcar en una sartén sin removerlo y repártelo en 4 flaneras. Espolvorea las nueces picadas.", 6),
      S("Tritura el queso (de Burgos), el yogur, la maicena, los huevos y el resto del azúcar y reparte en las flaneras.", 4),
      S("Hornea a 150 °C 18 minutos y deja reposar.", 18, 150),
      S("Desmolda y sirve con los frutos rojos, un poco de zumo de naranja (el original hace una crema de membrillo) y menta."),
    ],
  }),
  es({
    id: "tartitas-queso-lima-frutas", title: "Tartitas frías de queso y lima con frutas",
    baseServings: 4, prepMin: 200, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("galletas", 100, "g"), I("mantequilla", 40, "g"), I("gelatina", 3, "unit"), I("leche-condensada", 250, "g"), I("queso-fresco", 525, "g"), I("nata", 150, "ml"), I("lima", 2, "unit"), I("frutos-rojos", 150, "g"), I("nueces", 30, "g"), I("menta", 2, "g")],
    steps: [
      S("Machaca las galletas y mézclalas con la mantequilla fundida.", 4),
      S("Remoja la gelatina en agua fría y disuélvela en la nata caliente. Mezcla el queso (tipo quark) con la leche condensada, la nata y la ralladura de las limas.", 6),
      S("Reparte en 4 aros forrados con film por fuera y deja cuajar en la nevera 3 horas.", 180),
      S("Desmolda y sirve con las migas de galleta, los frutos rojos, las nueces y menta."),
    ],
  }),
  es({
    id: "crema-fria-mango", title: "Crema fría de mango con vinagreta de menta",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["batidora", "olla"],
    ingredients: [I("mango", 3, "unit"), I("huevo", 3, "unit"), I("leche", 250, "ml"), I("vainilla", 1, "unit"), I("azucar", 50, "g"), I("frutos-rojos", 60, "g"), I("aceite", 20, "ml"), I("menta", 4, "g"), I("sal", 1, "g")],
    steps: [
      S("Tritura dos mangos y medio con los huevos, el azúcar y las semillas de la vainilla.", 4),
      S("Calienta la leche, añade el puré y cuece a fuego medio removiendo hasta que empiece a espesar. Reparte en copas y deja enfriar.", 10),
      S("Pica el resto del mango y alíñalo con aceite, menta picada y una pizca de sal. Decora las copas con él y las grosellas (frutos rojos)."),
    ],
  }),
  es({
    id: "chupitos-kiwi-yogur-melocoton", title: "Vasitos de kiwi, yogur y melocotón",
    baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("yogur", 2, "unit"), I("melocoton", 1, "unit"), I("kiwi", 3, "unit"), I("azucar", 15, "g"), I("bizcochos", 30, "g"), I("menta", 2, "g")],
    steps: [
      S("Tritura los kiwis pelados. Mezcla los yogures con el azúcar.", 5),
      S("Pon medio bizcocho de soletilla en el fondo de cada vaso, cubre con puré de kiwi, yogur y el melocotón pelado en trocitos.", 8),
      S("Decora con menta."),
    ],
  }),
  es({
    id: "flan-melocoton", title: "Flan de melocotón",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["sarten", "batidora", "horno"],
    ingredients: [I("melocoton", 2, "unit"), I("leche-condensada", 370, "g"), I("leche", 200, "ml"), I("huevo", 3, "unit"), I("azucar", 100, "g"), I("limon", 0.5, "unit"), I("menta", 2, "g")],
    steps: [
      S("Funde el azúcar con unas gotas de zumo de limón hasta caramelo y repártelo en 4 moldes.", 6),
      S("Reparte la mitad del melocotón pelado en daditos sobre el caramelo. Tritura el resto con los huevos, la leche (de avena en el original) y la leche condensada.", 5),
      S("Vierte en los moldes y cuaja al baño maría en el horno a 180 °C 27 minutos. Deja enfriar y desmolda con menta.", 27, 180),
    ],
  }),
  es({
    id: "tartitas-manzana-lima", title: "Tartitas de manzana a la lima con miel",
    baseServings: 4, prepMin: 20, cookMin: 28, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("manzana", 3, "unit"), I("huevo", 2, "unit"), I("leche", 100, "ml"), I("harina", 70, "g"), I("azucar", 60, "g"), I("mantequilla", 30, "g"), I("levadura-quimica", 8, "g"), I("lima", 1, "unit"), I("miel", 40, "g"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Monta los huevos con 50 g de azúcar (moreno), añade 20 g de mantequilla fundida, la ralladura de lima y la leche.", 6),
      S("Incorpora la harina tamizada con la levadura y una pizca de sal, y las manzanas peladas en rodajas finas.", 5),
      S("Reparte en moldes untados con el resto de mantequilla y forrados con papel y hornea a 180 °C 28 minutos.", 28, 180),
      S("Desmolda templado y sirve con la miel, el resto del azúcar (glas) y menta."),
    ],
  }),
  es({
    id: "rollitos-filo-frutas-secas", title: "Rollo crujiente de manzana, higos y pasas al brandy",
    baseServings: 6, prepMin: 45, cookMin: 25, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("pasta-brick", 8, "unit"), I("mantequilla", 50, "g"), I("jengibre", 5, "g"), I("lima", 1, "unit"), I("canela", 3, "g"), I("azucar", 50, "g"), I("manzana", 1, "unit"), I("higos", 100, "g"), I("orejones", 60, "g"), I("pasas", 40, "g"), I("brandy", 150, "ml"), I("menta", 2, "g")],
    steps: [
      S("Macera las pasas, los higos y los orejones (ciruelas en el original) picados en el brandy 30 minutos.", 30),
      S("Mezcla el jengibre rallado con la ralladura de lima, la canela y el azúcar (moscabado). Monta las hojas de pasta brick (o filo) de dos en dos, escalonadas, pintándolas con mantequilla fundida y espolvoreando la mezcla.", 8),
      S("Cubre tres cuartos de la masa con la fruta escurrida y la manzana en dados, enrolla y pinta con mantequilla.", 5),
      S("Hornea a 190 °C 22 minutos y sirve en rodajas con menta.", 22, 190),
    ],
  }),
  es({
    id: "pastelitos-limon-leche-condensada", title: "Tartaletas de limón y leche condensada",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("leche-condensada", 300, "g"), I("limon", 2, "unit"), I("huevo", 3, "unit"), I("masa-hojaldre", 275, "g"), I("azucar", 25, "g"), I("frutos-rojos", 60, "g"), I("menta", 2, "g")],
    steps: [
      S("Forra moldes de tartaleta con la masa (quebrada), cubre con papel y legumbres secas y hornea a 180 °C 10 minutos. Retira el peso.", 12, 180),
      S("Mezcla la leche condensada con la ralladura de un limón, el zumo de los dos y 2 yemas. Monta una clara e incorpórala con movimientos envolventes.", 6),
      S("Rellena las bases y hornea a 180 °C 17 minutos.", 17, 180),
      S("Monta las otras 2 claras con el azúcar, cubre las tartaletas templadas y sirve con frutos rojos y menta.", 5),
    ],
  }),
  es({
    id: "flan-nata-galleta", title: "Tacos de flan de nata rebozados en galleta con fruta",
    baseServings: 6, prepMin: 90, cookMin: 60, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("nata", 500, "ml"), I("huevo", 4, "unit"), I("azucar", 75, "g"), I("galletas", 120, "g"), I("fresas", 80, "g"), I("platano", 1, "unit"), I("menta", 2, "g")],
    steps: [
      S("Bate los huevos con 60 g de azúcar y añade la nata. Cuece en una flanera rectangular al baño maría en el horno a 150 °C 50 minutos. Deja enfriar.", 75, 150),
      S("Machaca las galletas. Corta el flan en tacos y rebózalos en la galleta.", 8),
      S("Pica las fresas y el plátano con el resto del azúcar y sirve con los tacos y menta.", 4),
    ],
  }),
  es({
    id: "tartitas-chocolate-blanco-queso", title: "Tartitas de chocolate blanco y queso",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("huevo", 4, "unit"), I("chocolate", 180, "g"), I("queso-crema", 160, "g"), I("galletas", 30, "g"), I("frutos-rojos", 80, "g"), I("azucar", 10, "g"), I("menta", 2, "g")],
    steps: [
      S("Funde el chocolate (blanco) al baño maría y mézclalo con el queso a temperatura ambiente y las galletas (de avena) aplastadas.", 6),
      S("Monta los huevos con las varillas e incorpóralos a la crema en dos veces.", 6),
      S("Reparte en 4 moldes con papel y hornea a 220 °C 15 minutos.", 15, 220),
      S("Sirve con azúcar (glas), los frutos rojos y menta."),
    ],
  }),
  es({
    id: "hojaldres-pera-almendra", title: "Hojaldres de pera con almendra",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("almendras", 50, "g"), I("pera", 2, "unit"), I("azucar", 15, "g"), I("naranja", 0.5, "unit"), I("mantequilla", 20, "g"), I("menta", 2, "g")],
    steps: [
      S("Espolvorea el hojaldre con la almendra picada (crocanti en el original), estíralo entre dos papeles, córtalo en 4 y dobla los bordes formando cestitas.", 6),
      S("Cuece las pieles de las peras con un vaso de agua, el azúcar y un poco de zumo de naranja (agua de azahar en el original) hasta que reduzca y cuela.", 10),
      S("Cubre el hojaldre con las peras en láminas finas y trocitos de mantequilla y hornea a 180 °C 20 minutos.", 20, 180),
      S("Pinta con el almíbar y decora con menta."),
    ],
  }),
  es({
    id: "tarta-chocolate-platano", title: "Tarta de chocolate y plátano sobre galleta",
    baseServings: 6, prepMin: 200, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("nata", 300, "ml"), I("chocolate", 300, "g"), I("mantequilla", 90, "g"), I("azucar", 35, "g"), I("platano", 1, "unit"), I("galletas", 80, "g"), I("menta", 2, "g")],
    steps: [
      S("Machaca las galletas, mézclalas con 40 g de mantequilla fundida y aplástalas en el fondo de un molde. Enfría.", 10),
      S("Hierve la nata con el azúcar y viértela sobre el chocolate troceado; remueve hasta fundir y añade el resto de mantequilla.", 6),
      S("Pon el plátano en rodajas sobre la galleta, cubre con la crema y deja enfriar 3 horas.", 180),
      S("Desmolda y decora con menta."),
    ],
  }),
  es({
    id: "brazo-gitano-mermelada", title: "Brazo de gitano de mermelada y coco",
    baseServings: 8, prepMin: 25, cookMin: 10, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("huevo", 2, "unit"), I("azucar", 50, "g"), I("harina", 50, "g"), I("levadura-quimica", 8, "g"), I("vainilla", 0.5, "unit"), I("frutos-rojos", 350, "g"), I("coco-rallado", 20, "g"), I("chocolate", 40, "g"), I("menta", 2, "g")],
    note: "El original lo rellena de mermelada de tomate; vale cualquier mermelada.",
    steps: [
      S("Monta los huevos con el azúcar y las semillas de vainilla e incorpora la harina tamizada con la levadura con movimientos envolventes.", 8),
      S("Extiende la masa fina sobre papel y hornea a 200 °C 10 minutos.", 10, 200),
      S("Dale la vuelta sobre otro papel, úntala con mermelada (o los frutos rojos aplastados) y enróllala.", 5),
      S("Decora con coco rallado, hilos de chocolate fundido y menta.", 4),
    ],
  }),
  es({
    id: "tarta-higos-nata", title: "Tarta de higos y nata",
    baseServings: 6, prepMin: 20, cookMin: 45, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("higos", 150, "g"), I("nata", 250, "ml"), I("huevo", 2, "unit"), I("azucar", 30, "g"), I("vainilla", 0.5, "unit"), I("mantequilla", 10, "g"), I("menta", 2, "g")],
    steps: [
      S("Remoja los higos secos en té la víspera. Forra un molde untado de mantequilla con la masa (quebrada), cubre con papel y legumbres y hornea a 180 °C 15 minutos.", 15, 180),
      S("Cubre la base con los higos partidos por la mitad. Bate los huevos con la nata, el azúcar y la vainilla y vierte encima.", 6),
      S("Hornea a 180 °C 30 minutos y deja enfriar. Decora con menta.", 30, 180),
    ],
  }),
  es({
    id: "peras-vino-yogur-nueces", title: "Peras al vino con yogur y nueces caramelizadas",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pera", 2, "unit"), I("vino-dulce", 200, "ml"), I("yogur", 4, "unit"), I("nueces", 50, "g"), I("azucar", 50, "g"), I("miel", 50, "g"), I("canela", 1, "g"), I("menta", 2, "g")],
    steps: [
      S("Funde la miel con el azúcar, añade las nueces, carameliza y extiéndelas sobre papel para que se enfríen.", 6),
      S("Hierve el vino (oporto) con la canela (en rama), añade las peras peladas y troceadas y cuece a fuego suave 9 minutos.", 10),
      S("Reparte el yogur en cuencos y cubre con las peras y las nueces. Decora con menta."),
    ],
  }),
  es({
    id: "vasitos-crema-cafe", title: "Vasitos de crema de café con bizcocho",
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("leche", 500, "ml"), I("huevo", 3, "unit"), I("azucar", 50, "g"), I("maicena", 20, "g"), I("cafe", 6, "g"), I("bizcochos", 60, "g"), I("naranja", 1, "unit"), I("cacao", 20, "g"), I("pinones", 20, "g"), I("almendras", 20, "g"), I("menta", 2, "g")],
    steps: [
      S("Calienta 400 ml de leche. Empapa los bizcochos de soletilla en trozos con el zumo de la naranja y 70 ml de agua (licor de naranja en el original).", 5),
      S("Mezcla el café soluble, el azúcar y la maicena con 100 ml de leche fría y las 3 yemas; añade la leche caliente y cuece removiendo hasta que espese.", 8),
      S("Alterna en vasos capas de crema y bizcocho y termina con crema.", 5),
      S("Espolvorea cacao, los piñones y las almendras tostadas y decora con menta."),
    ],
  }),
  es({
    id: "granizado-sandia", title: "Granizado de sandía",
    baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("sandia", 1500, "g"), I("vino-dulce", 100, "ml"), I("azucar", 50, "g"), I("menta", 3, "g")],
    steps: [
      S("Corta una rodaja de sandía en daditos y macéralos con el vino dulce 12 minutos.", 12),
      S("Tritura el resto de la sandía con el azúcar (moreno) y 20 cubitos de hielo machacados.", 3),
      S("Sirve en copas con los dados de sandía y menta."),
    ],
  }),
  es({
    id: "limones-rellenos-helados", title: "Limones rellenos de crema helada de yogur",
    baseServings: 4, prepMin: 30, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("limon", 4, "unit"), I("yogur", 2, "unit"), I("huevo", 2, "unit"), I("fresas", 60, "g"), I("azucar", 75, "g"), I("menta", 2, "g")],
    steps: [
      S("Corta la base y la tapa de los limones para que se mantengan de pie. Exprime dos con cuidado y vacía los otros dos.", 10),
      S("Mezcla los yogures con el zumo (el original añade fruta de la pasión).", 3),
      S("Monta las 2 claras con el azúcar (glas) a punto de nieve, incorpóralas al yogur y rellena los limones.", 8),
      S("Congélalos y sírvelos con una fresa y menta. Deja que se templen un poco antes de comer."),
    ],
  }),
  es({
    id: "frutos-rojos-platano-boina", title: "Frutos rojos y plátano con costra de bizcocho",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("frutos-rojos", 500, "g"), I("platano", 1, "unit"), I("harina", 175, "g"), I("azucar", 110, "g"), I("mantequilla", 75, "g"), I("yogur", 1, "unit"), I("levadura-quimica", 16, "g"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Mezcla los frutos rojos (pueden ser congelados) con el plátano en medias lunas y repártelos en 4 cuencos de horno.", 5),
      S("Mezcla la harina con el azúcar, la levadura, una pizca de sal, el yogur y la mantequilla y reparte la masa sobre la fruta.", 6),
      S("Hornea a 210 °C 13 minutos, hasta que se tueste. Decora con menta.", 13, 210),
    ],
  }),
  es({
    id: "compota-pina-queso-fresco", title: "Compota de piña con pasas, queso fresco y galleta",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pina", 1, "unit"), I("azucar", 50, "g"), I("pasas", 50, "g"), I("canela", 1, "g"), I("lima", 2, "unit"), I("queso-fresco", 250, "g"), I("galletas", 45, "g")],
    steps: [
      S("Hierve medio litro de agua con el azúcar (moreno), la canela (cardamomo en el original), las pasas y el zumo de una lima hasta reducir a 8 cucharadas de almíbar.", 20),
      S("Baña la piña pelada en tacos con el almíbar caliente, tapa y enfría en la nevera.", 5),
      S("Sirve con el queso fresco en dados, las galletas machacadas y la ralladura de la otra lima."),
    ],
  }),
  es({
    id: "orejas-de-carnaval", title: "Orejas de carnaval",
    origin: "España (Galicia)",
    baseServings: 8, prepMin: 80, cookMin: 15, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("harina", 250, "g"), I("mantequilla", 50, "g"), I("brandy", 25, "ml"), I("azucar", 80, "g"), I("huevo", 1, "unit"), I("limon", 0.5, "unit"), I("aceite", 500, "ml"), I("sal", 1, "g")],
    steps: [
      S("Bate el huevo con 100 ml de agua tibia, el brandy (anís en el original), la mantequilla en pomada, 60 g de azúcar (glas), sal y la ralladura de limón. Añade la harina tamizada poco a poco.", 8),
      S("Tapa la masa y deja reposar 1 hora.", 60),
      S("Estira bolitas de masa muy finas, fríelas en aceite abundante y escúrrelas.", 15),
      S("Espolvorea con el resto del azúcar."),
    ],
  }),
  es({
    id: "copa-energetica-yogur", title: "Copa energética de yogur, avena, frutos secos y frambuesas",
    baseServings: 6, prepMin: 15, cookMin: 3, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pasas", 50, "g"), I("higos", 60, "g"), I("avellanas", 50, "g"), I("nueces", 50, "g"), I("avena", 50, "g"), I("miel", 60, "g"), I("frutos-rojos", 150, "g"), I("yogur", 3, "unit"), I("menta", 2, "g")],
    steps: [
      S("Hidrata las pasas en té o agua caliente y escúrrelas. Mezcla el yogur con una cucharada de miel.", 6),
      S("Mezcla los higos secos picados con la avena y las pasas. Tuesta las avellanas y las nueces picadas.", 4),
      S("Monta las copas con capas de avena, yogur, frambuesas (frutos rojos) y frutos secos; termina con hilos de miel y menta.", 5),
    ],
  }),
  es({
    id: "mousse-naranja", title: "Mousse de naranja",
    baseServings: 4, prepMin: 140, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("naranja", 1, "unit"), I("huevo", 3, "unit"), I("azucar", 60, "g"), I("maicena", 40, "g"), I("leche", 500, "ml"), I("menta", 2, "g")],
    steps: [
      S("Monta las 3 claras con un poco de ralladura de naranja, añadiendo 25 g de azúcar hasta que estén firmes.", 6),
      S("Calienta 150 ml de agua con tiras de piel de naranja. Mezcla la maicena con el resto del azúcar y la leche, viértelo en el cazo y cuece a fuego suave hasta que espese. Añade el zumo de la naranja y cuela.", 10),
      S("Enfría 2 horas e incorpora las claras con movimientos envolventes. Sirve con menta.", 120),
    ],
  }),
  es({
    id: "copas-melocoton-queso", title: "Copas de melocotón, queso y pistachos",
    baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("melocoton", 2, "unit"), I("queso-fresco", 200, "g"), I("mascarpone", 200, "g"), I("galletas", 30, "g"), I("pistachos", 25, "g"), I("frutos-rojos", 50, "g"), I("menta", 2, "g")],
    steps: [
      S("Tritura un melocotón y medio pelado y pica el resto.", 4),
      S("Mezcla el queso fresco (batido) con el mascarpone y el puré.", 3),
      S("Machaca las galletas con los pistachos y monta las copas alternando migas, crema y melocotón. Decora con grosellas (frutos rojos) y menta.", 6),
    ],
  }),
  es({
    id: "pina-salteada-yogur-frambuesas", title: "Piña caramelizada con yogur y frambuesas",
    baseServings: 4, prepMin: 15, cookMin: 12, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pina", 0.5, "unit"), I("azucar", 25, "g"), I("pinones", 50, "g"), I("frutos-rojos", 70, "g"), I("yogur", 2, "unit"), I("mantequilla", 50, "g"), I("canela", 1, "g"), I("aceite", 15, "ml"), I("menta", 2, "g")],
    steps: [
      S("Tuesta los piñones sin aceite.", 3),
      S("Dora la piña en tiras en dos tandas con aceite y mantequilla; junta todo, añade el azúcar (moreno) y la canela (anís en grano en el original) y saltea.", 8),
      S("Saltea las frambuesas (frutos rojos) en la misma sartén y mézclalas con el yogur.", 2),
      S("Sirve la piña con el yogur, los piñones y menta."),
    ],
  }),
  es({
    id: "estrella-hojaldre-chocolate", title: "Estrella de hojaldre y chocolate",
    baseServings: 8, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("chocolate", 125, "g"), I("masa-hojaldre", 550, "g"), I("huevo", 1, "unit"), I("azucar", 10, "g"), I("almendras", 20, "g")],
    steps: [
      S("Extiende una lámina de hojaldre sobre papel, cúbrela con el chocolate rallado sin llegar a los bordes, pinta los bordes con huevo y tapa con la otra.", 6),
      S("Pon un vaso boca abajo en el centro y haz 16 cortes desde el vaso hacia fuera. Gira cada triángulo sobre sí mismo. Quita el vaso y pinta con huevo.", 8),
      S("Hornea a 180 °C 25 minutos.", 25, 180),
      S("Espolvorea azúcar (glas) y la almendra tostada picada."),
    ],
  }),
  es({
    id: "gelatina-yogur-frutas", title: "Cremas cuajadas de yogur con fruta salteada y galleta",
    baseServings: 4, prepMin: 140, cookMin: 8, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("yogur", 2, "unit"), I("nata", 200, "ml"), I("gelatina", 2, "unit"), I("azucar", 20, "g"), I("platano", 1, "unit"), I("pasas", 40, "g"), I("frutos-rojos", 40, "g"), I("galletas", 25, "g"), I("aceite", 10, "ml"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Remoja la gelatina en agua fría y disuélvela en la nata hirviendo. Mézclala con los yogures, reparte en 4 vasos y deja cuajar 2 horas en la nevera.", 125),
      S("Saltea el plátano en trocitos con las pasas, los arándanos (frutos rojos), el azúcar y una pizca de sal. Deja enfriar.", 5),
      S("Mezcla la fruta con las galletas machacadas y ponla sobre las cremas con menta.", 3),
    ],
  }),
];
