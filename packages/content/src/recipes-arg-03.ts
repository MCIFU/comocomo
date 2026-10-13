import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 3: últimas ensaladas y verduras. */
export const recipesArg03: Recipe[] = [
  es({
    id: "aguacates-rellenos-pavo-gambas", title: "Aguacates rellenos de arroz, pavo, piña y gambas",
    baseServings: 4, prepMin: 20, cookMin: 18, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("aguacate", 4, "unit"), I("pavo", 175, "g"), I("arroz-basmati", 75, "g"), I("pina", 0.25, "unit"), I("gambas", 300, "g"), I("perejil", 5, "g"), I("aceite", 40, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz en agua con sal según el paquete (unos 12 minutos), refréscalo y escúrrelo.", 12),
      S("Parte los aguacates a lo largo, vacíalos y corta la pulpa de dos en dados. Mézclala con el arroz, la piña en daditos y el pavo en dados, y rellena las 8 mitades."),
      S("Pela las gambas. Sofríe las cabezas y cáscaras en el aceite 2 minutos y cuela ese aceite con perejil picado.", 2),
      S("Saltea las gambas salpimentadas 2 minutos, ponlas sobre los aguacates y riega con el aceite de gambas.", 2),
    ],
  }),
  es({
    id: "ensaladilla-bacalao", title: "Ensaladilla de bacalao confitado",
    authenticity: "adapted", note: "El original añade kokotxas y huevas de trucha.",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("bacalao", 350, "g"), I("patata", 400, "g"), I("zanahoria", 200, "g"), I("guisantes", 100, "g"), I("ajo", 3, "unit"), I("huevo", 1, "unit"), I("aceite", 200, "ml"), I("vinagre", 10, "ml"), I("cebollino", 5, "g"), I("pan", 250, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece la patata y la zanahoria en dados con los guisantes en agua con sal 11 minutos y escúrrelos.", 11),
      S("Dora los ajos laminados en el aceite a fuego suave y confita en él el bacalao desalado 9 minutos sin que hierva. Desmígalo y cuela el aceite; déjalo enfriar.", 10),
      S("Haz una mayonesa con el huevo, la sal, el vinagre y ese aceite templado, triturando con la batidora.", 2),
      S("Mezcla las verduras con la mayonesa y el bacalao, espolvorea cebollino y sirve con rebanadas de pan."),
    ],
  }),
  es({
    id: "ensalada-arroz-pavo-setas", title: "Ensalada de arroz con pavo, setas y vinagreta de mostaza",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("arroz", 300, "g"), I("pavo", 175, "g"), I("setas", 300, "g"), I("tomate", 150, "g"), I("pasas", 20, "g"), I("ajo", 2, "unit"), I("almendras", 30, "g"), I("aceitunas", 60, "g"), I("mostaza", 5, "g"), I("cebollino", 5, "g"), I("aceite", 60, "ml"), I("vinagre", 15, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece el arroz 18 minutos, refréscalo y escúrrelo. Remoja las pasas en agua.", 18),
      S("Saltea las setas en juliana con el ajo picado en un chorrito de aceite 5 minutos y tuesta las almendras laminadas en seco 2 minutos.", 7),
      S("Mete una pasa dentro de cada aceituna negra sin hueso."),
      S("Mezcla el arroz con las setas, las aceitunas, el pavo y el tomate en dados y las almendras, y aliña con la mostaza, el cebollino, el resto del aceite, el vinagre y la sal."),
    ],
  }),
  es({
    id: "ensalada-espinacas-melocoton", title: "Ensalada de espinacas y melocotón con vinagreta de miel",
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("espinacas", 150, "g"), I("melocoton", 1, "unit"), I("cebolleta", 1, "unit"), I("miel", 15, "g"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Pon las espinacas tiernas en un bol con la cebolleta en aros finos (el original usa ajos tiernos)."),
      S("Añade el melocotón pelado en dados y sala."),
      S("Templa la miel para que se funda, mézclala con el aceite y el vinagre y aliña."),
    ],
  }),
  es({
    id: "ensalada-endibias-manzana-arandanos", title: "Ensalada de endibias, manzana y queso con vinagreta de arándanos",
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("endibia", 4, "unit"), I("manzana", 1, "unit"), I("queso-fresco", 100, "g"), I("frutos-rojos", 20, "g"), I("aceite", 40, "ml"), I("sal", 2, "g")],
    steps: [
      S("Trocea las endibias y mézclalas con la manzana pelada en dados y el queso fresco en taquitos. Sala."),
      S("Maja los arándanos en el mortero, añade el aceite y cuélalo."),
      S("Aliña la ensalada con esa vinagreta."),
    ],
  }),
  es({
    id: "ensalada-beicon-cabra", title: "Ensalada de beicon, queso de cabra y huevos de codorniz",
    baseServings: 4, prepMin: 10, cookMin: 8, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("lechuga", 1, "unit"), I("beicon", 100, "g"), I("queso-cabra", 160, "g"), I("huevo-codorniz", 8, "unit"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Cuece los huevos de codorniz 5 minutos, pélalos y pártelos por la mitad.", 5),
      S("Fríe el beicon en dados con unas gotas de aceite 3 minutos y escúrrelo.", 3),
      S("Monta la lechuga troceada con los huevos, el beicon y las rodajas de queso de cabra, y aliña con aceite, vinagre y sal."),
    ],
  }),
  es({
    id: "ensalada-garbanzos-rucula-especias", title: "Ensalada de garbanzos especiados con rúcula y vinagreta de rabanito",
    baseServings: 4, prepMin: 20, cookMin: 2, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("garbanzos-cocidos", 600, "g"), I("rucula", 100, "g"), I("queso-fresco", 150, "g"), I("aceitunas", 80, "g"), I("sesamo", 30, "g"), I("comino", 2, "g"), I("pimenton", 2, "g"), I("rabanitos", 50, "g"), I("tomate", 100, "g"), I("aceite", 60, "ml"), I("vinagre", 10, "ml"), I("sal", 4, "g")],
    steps: [
      S("Mezcla los garbanzos escurridos con el pimentón, el comino, un chorrito de aceite, sal, las aceitunas negras y el queso fresco en dados. Reposa 10 minutos.", 10),
      S("Para la vinagreta, pica los rabanitos y el tomate pelado en daditos y alíñalos con aceite, vinagre y sal."),
      S("Tuesta el sésamo en seco 2 minutos. Sirve los garbanzos sobre la rúcula con la vinagreta alrededor y el sésamo por encima.", 2),
    ],
  }),
  es({
    id: "coctel-gambas", title: "Cóctel de gambas con aguacate y aliño de naranja",
    baseServings: 4, prepMin: 15, cookMin: 3, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("gambas", 400, "g"), I("lechuga", 1, "unit"), I("aguacate", 1, "unit"), I("naranja", 1, "unit"), I("cebollino", 5, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece las gambas en agua hirviendo con sal 2 minutos, enfríalas y pélalas.", 2),
      S("Reparte en copas la lechuga en juliana fina, el aguacate en dados y las gambas."),
      S("Mezcla el aceite con 50 ml de zumo de naranja, sal y cebollino picado, y aliña."),
    ],
  }),
  es({
    id: "ensalada-arroz-pavo-cacahuetes", title: "Ensalada de arroz con pavo, cacahuetes y verduras",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("arroz-basmati", 300, "g"), I("pavo", 175, "g"), I("cacahuetes", 100, "g"), I("zanahoria", 200, "g"), I("rabanitos", 120, "g"), I("esparragos-verdes", 250, "g"), I("habas", 200, "g"), I("lima", 1, "unit"), I("mostaza", 10, "g"), I("cebollino", 5, "g"), I("aceite", 70, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece el arroz basmati según el paquete (unos 12 minutos), refréscalo y enfríalo.", 12),
      S("Saltea los espárragos en cilindros con las habas en un chorrito de aceite 4 minutos.", 4),
      S("Bate el zumo de lima con el resto del aceite, la mostaza, la sal y el perejil."),
      S("Mezcla el arroz con la zanahoria rallada, los rabanitos laminados, los cacahuetes, el pavo en dados, los espárragos, las habas y el cebollino, y aliña."),
    ],
  }),
  es({
    id: "ensalada-champinones-naranja", title: "Ensalada de champiñones salteados y naranja",
    baseServings: 4, prepMin: 10, cookMin: 5, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("lechuga", 1, "unit"), I("champinones", 200, "g"), I("naranja", 2, "unit"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Trocea la lechuga (mejor lollo rojo) en un bol y saca los gajos de naranja."),
      S("Saltea los champiñones laminados en un chorrito de aceite 4 minutos.", 4),
      S("Mezcla todo y aliña con el resto del aceite, el vinagre y la sal."),
    ],
  }),
  // ——— Verduras ———
  es({
    id: "coles-bruselas-vizcaina", title: "Coles de Bruselas en salsa vizcaína",
    authenticity: "adapted", note: "La vizcaína se hace con pimiento choricero; aquí, pimentón y piquillos. El original añade bacalao ahumado.",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("coles-bruselas", 800, "g"), I("ajo", 2, "unit"), I("cebolla", 2, "unit"), I("pan", 20, "g"), I("pimenton", 6, "g"), I("pimientos-piquillo", 100, "g"), I("caldo", 400, "ml"), I("vino-blanco", 100, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Dora el ajo laminado en el aceite, añade la cebolla (mejor roja) en juliana, sala y pocha 15 minutos.", 15),
      S("Añade la miga de pan, el pimentón, los piquillos, el vino y el caldo y cuece 15 minutos. Tritura la salsa.", 17),
      S("Cuece las coles de Bruselas sin las hojas externas en agua con sal 13 minutos.", 13),
      S("Sirve las coles sobre la salsa con perejil."),
    ],
  }),
  es({
    id: "tostas-esparragos-veloute", title: "Tostas gratinadas de espárragos y cebolleta",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("esparragos-verdes", 400, "g"), I("cebolleta", 4, "unit"), I("pan", 200, "g"), I("caldo", 750, "ml"), I("ajo", 3, "unit"), I("pimientos-piquillo", 60, "g"), I("harina", 30, "g"), I("tomate-triturado", 50, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece los espárragos 7 minutos, que queden al dente. Haz las cebolletas partidas a lo largo a la plancha con aceite 8 minutos.", 15),
      S("Para la velouté, dora el ajo picado, añade los piquillos picados y la harina, rehoga, añade el tomate y luego el caldo poco a poco. Cuece 8 minutos hasta que espese.", 10),
      S("Tuesta las rebanadas de pan en el horno a 220 °C 3 minutos.", 3, 220),
      S("Pon sobre cada tosta 4 espárragos y 2 mitades de cebolleta, cubre con la velouté, espolvorea perejil picado y gratina en el horno 4 minutos.", 4, 220),
    ],
  }),
  es({
    id: "tartaletas-coles-bruselas", title: "Tartaletas de hojaldre con coles de Bruselas gratinadas",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["olla", "horno"],
    ingredients: [I("coles-bruselas", 500, "g"), I("masa-hojaldre", 275, "g"), I("zanahoria", 80, "g"), I("ajo", 1, "unit"), I("queso", 50, "g"), I("harina", 30, "g"), I("leche", 500, "ml"), I("huevo", 1, "unit"), I("nuez-moscada", 1, "g"), I("aceite", 20, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece las coles en agua con sal 15 minutos y escúrrelas. Parte la mitad.", 15),
      S("Corta 4 círculos de hojaldre y 4 aros iguales, pega cada aro sobre un círculo con huevo batido, pinta y hornea a 180 °C 20 minutos. Quita la tapa central.", 20, 180),
      S("Para la bechamel, dora el ajo y la zanahoria picados en el aceite, añade la harina y la leche poco a poco y cuece 7 minutos con nuez moscada y sal.", 9),
      S("Rellena con las coles partidas, bechamel, 3 coles enteras, más bechamel y queso rallado, y gratina 3 minutos.", 3, 220),
    ],
  }),
  es({
    id: "alcachofas-patatas-almejas", title: "Alcachofas con patatas y almejas en salsa",
    note: "El original usa berberechos frescos; las almejas funcionan igual.",
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("alcachofa", 12, "unit"), I("patata", 400, "g"), I("almejas", 600, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("vino-blanco", 100, "ml"), I("harina", 20, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Limpia las alcachofas y cuécelas en agua con sal y perejil 20 minutos; pártelas. Cuece las patatas en rodajas gruesas 15 minutos.", 20),
      S("Abre las almejas en una cazuela tapada con el vino, 3 minutos. Cuela el caldo y saca la carne de casi todas.", 3),
      S("Dora el ajo laminado, añade la cebolla picada y pocha 8 minutos. Rehoga la harina 1 minuto y añade el caldo de las almejas.", 9),
      S("Añade las alcachofas y las patatas y cocina 5 minutos. Sirve con las almejas y perejil.", 5),
    ],
  }),
  es({
    id: "brocoli-bechamel-queso", title: "Brócoli gratinado con bechamel de queso sobre tomate asado",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("brocoli", 2, "unit"), I("queso", 125, "g"), I("harina", 50, "g"), I("mantequilla", 50, "g"), I("leche", 500, "ml"), I("tomate", 700, "g"), I("cebolla", 1, "unit"), I("ajo", 4, "unit"), I("nuez-moscada", 1, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Asa los tomates partidos, la cebolla y el ajo con sal y aceite en el horno a 210 °C 28 minutos y pásalos por el pasapurés.", 28, 210),
      S("Cuece el brócoli en agua con sal 8 minutos y sepáralo en ramilletes.", 8),
      S("Para la bechamel, tuesta la harina en la mantequilla 2 minutos, añade la leche caliente poco a poco, el queso (mejor emmental), nuez moscada y sal, y cuece 6 minutos.", 8),
      S("Pon el tomate en una fuente, el brócoli encima, cubre con la bechamel y gratina 5 minutos.", 5, 220),
    ],
  }),
  es({
    id: "endibias-guisadas-jamon", title: "Endibias guisadas con tomate y jamón cocido",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("endibia", 8, "unit"), I("jamon-cocido", 250, "g"), I("cebolleta", 1, "unit"), I("tomate", 300, "g"), I("tomates-secos", 30, "g"), I("caldo", 200, "ml"), I("oregano", 1, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las endibias en agua con sal 4 minutos, escúrrelas y dóralas en una sartén con aceite a fuego medio 5 minutos.", 9),
      S("Pocha la cebolleta picada 6 minutos, añade el tomate pelado en dados, los tomates secos en tiras y el orégano y rehoga 10 minutos.", 16),
      S("Añade las endibias y el caldo, salpimienta y guisa 6 minutos. Incorpora el jamón cocido en dados 2 minutos y sirve con perejil.", 8),
    ],
  }),
  es({
    id: "alcachofas-rebozadas-crema-maiz", title: "Alcachofas rebozadas con crema de maíz",
    authenticity: "adapted", note: "El original las reboza en palomitas trituradas; con pan rallado quedan muy crujientes.",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("alcachofa", 12, "unit"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("maiz", 200, "g"), I("nata", 200, "ml"), I("leche", 200, "ml"), I("perejil", 5, "g"), I("aceite", 400, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el maíz con la nata, la leche, sal y pimienta 12 minutos, tritura y cuela.", 13),
      S("Limpia las alcachofas, cuécelas en agua con sal y perejil 20 minutos y pártelas por la mitad.", 20),
      S("Pásalas por el huevo batido y el pan rallado y fríelas a 180 °C 2 minutos.", 6, 180),
      S("Sírvelas sobre la crema de maíz."),
    ],
  }),
  es({
    id: "cebollas-rellenas-espinacas", title: "Cebollas rellenas de espinacas y queso",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["microondas", "sarten", "horno", "batidora"],
    ingredients: [I("cebolla", 4, "unit"), I("espinacas", 300, "g"), I("queso-crema", 200, "g"), I("ajo", 1, "unit"), I("pistachos", 30, "g"), I("tomates-secos", 50, "g"), I("aceite", 130, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Tritura los tomates secos con 100 ml de agua y 100 ml de aceite y cuela la salsa.", 1),
      S("Parte las cebollas (mejor rojas) por la mitad y cuécelas en el microondas 2 minutos por cebolla. Vacíalas.", 8),
      S("Pocha el interior picado con el ajo en el resto del aceite 6 minutos, añade las espinacas 3 minutos, sala y mezcla fuera del fuego con el queso crema.", 9),
      S("Rellena las cebollas, espolvorea los pistachos machacados y gratina en el horno 4 minutos. Sírvelas sobre la salsa con perejil.", 4, 220),
    ],
  }),
  es({
    id: "alcachofas-chorizo-bechamel", title: "Alcachofas gratinadas con chorizo y bechamel",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "easy", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("alcachofa", 12, "unit"), I("chorizo", 150, "g"), I("harina", 50, "g"), I("leche", 500, "ml"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Limpia las alcachofas y cuécelas en agua con sal y perejil 20 minutos. Córtalas en cuartos.", 20),
      S("Saltea el chorizo sin piel muy picado en un chorrito de aceite 3 minutos, añade las alcachofas 1 minuto y reparte en cazuelitas.", 4),
      S("Haz una bechamel rehogando la harina en el resto del aceite y añadiendo la leche poco a poco; sala y cuece 7 minutos.", 8),
      S("Cubre las alcachofas y gratina en el horno a 220 °C 6 minutos.", 6, 220),
    ],
  }),
  es({
    id: "quinoa-verduras-alioli-tomate", title: "Quinoa con verduras y mayonesa de ajo asado",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "easy", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("quinoa", 250, "g"), I("tomate", 150, "g"), I("ajo", 10, "unit"), I("puerro", 1, "unit"), I("zanahoria", 150, "g"), I("calabacin", 250, "g"), I("pimiento", 1, "unit"), I("huevo", 1, "unit"), I("aceite", 230, "ml"), I("vinagre", 5, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Asa en el horno el tomate y una cabeza de ajos con un poco de aceite y sal a 200 °C 20 minutos. Pélalos y tritúralos.", 20, 200),
      S("Haz una mayonesa con el huevo, sal, el vinagre y 200 ml de aceite y mézclala con el puré de ajo y tomate y perejil.", 2),
      S("Rehoga el puerro, el pimiento, la zanahoria y el calabacín en dados con el resto del aceite 7 minutos.", 7),
      S("Añade la quinoa lavada y 500 ml de agua, sala y cuece 15 minutos. Sirve con la mayonesa.", 15),
    ],
  }),
  es({
    id: "acelgas-rellenas-arroz", title: "Hojas de acelga rellenas de arroz con salsa de yogur",
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("acelgas", 400, "g"), I("arroz", 225, "g"), I("cebolla", 2, "unit"), I("pasas", 50, "g"), I("pinones", 50, "g"), I("limon", 0.5, "unit"), I("cebollino", 5, "g"), I("yogur", 2, "unit"), I("menta", 5, "g"), I("aceite", 60, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Escalda las hojas de acelga (sin pencas) 40 segundos. Mezcla los yogures con la menta picada, un chorrito de aceite, sal y pimienta.", 1),
      S("Cuece el arroz 16 minutos y escúrrelo. Pocha la cebolla picada 12 minutos y mézclala con el arroz, las pasas, los piñones y el cebollino.", 16),
      S("Rellena las hojas formando paquetitos y colócalos apretados en una sartén con un chorrito de aceite."),
      S("Riega con el zumo de limón y 150 ml de agua, pon un plato encima y cuece 10 minutos. Sírvelos con la salsa de yogur.", 10),
    ],
  }),
  es({
    id: "tortas-verduras-aguacate", title: "Tortas crujientes de verduras con aguacate y queso",
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("patata", 400, "g"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("ajo", 4, "unit"), I("maicena", 5, "g"), I("aguacate", 2, "unit"), I("queso", 200, "g"), I("limon", 0.5, "unit"), I("pistachos", 50, "g"), I("tomate", 100, "g"), I("aceite", 120, "ml"), I("vinagre", 10, "ml"), I("sal", 5, "g")],
    steps: [
      S("Corta la patata, la zanahoria, el puerro y el ajo en juliana muy fina, alíñalos con un chorro de aceite y sal y espolvorea la maicena con un colador."),
      S("Forma 4 tortas y fríelas en aceite a fuego medio 5 minutos por lado, hasta que estén crujientes.", 20),
      S("Mezcla el aguacate picado con el queso (mejor manchego) en dados y el zumo de limón. Haz una vinagreta con el tomate muy picado, aceite, vinagre y sal."),
      S("Pon la mezcla de aguacate sobre cada torta, riega con la vinagreta y espolvorea pistachos picados."),
    ],
  }),
  es({
    id: "puerros-vinagreta-calabaza", title: "Puerros cocidos con vinagreta de calabaza y lima",
    baseServings: 4, prepMin: 15, cookMin: 22, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("puerro", 8, "unit"), I("calabaza", 100, "g"), I("lima", 1, "unit"), I("huevo", 2, "unit"), I("pinones", 70, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Limpia los puerros y cuécelos en agua con sal 20 minutos. Cuece los huevos 10 minutos.", 20),
      S("Pica la calabaza muy fina y mézclala con el aceite, el zumo de lima y sal; deja macerar."),
      S("Tuesta los piñones en seco 2 minutos.", 2),
      S("Sirve los puerros troceados con la vinagreta, el huevo rallado, los piñones y perejil."),
    ],
  }),
  es({
    id: "acelgas-almejas-salsa-verde", title: "Pencas de acelga con almejas en salsa verde y tortilla de hojas",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("acelgas", 1000, "g"), I("almejas", 400, "g"), I("huevo", 4, "unit"), I("ajo", 2, "unit"), I("harina", 10, "g"), I("vino-blanco", 100, "ml"), I("aceite", 50, "ml"), I("perejil", 10, "g"), I("sal", 6, "g")],
    steps: [
      S("Separa las pencas de las hojas de las acelgas. Cuece las pencas en bastones 9 minutos y las hojas en juliana 3 minutos, en agua con sal.", 12),
      S("Dora el ajo laminado en aceite, rehoga la harina, añade el vino, 100 ml de agua y perejil picado, y cuece las almejas con las pencas, tapado, hasta que se abran (3-4 minutos).", 5),
      S("Bate cada huevo con sal y una cuarta parte de las hojas y cuaja 4 tortillas finas en una sartén con unas gotas de aceite.", 8),
      S("Sirve cada tortilla con las pencas y las almejas encima."),
    ],
  }),
  es({
    id: "calabacines-rellenos-carne", title: "Calabacines rellenos de carne con salsa de tomate y alcaparras",
    baseServings: 6, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("calabacin", 1200, "g"), I("ternera-picada", 400, "g"), I("cebolleta", 2, "unit"), I("tomate", 300, "g"), I("alcaparras", 10, "g"), I("tomillo", 1, "g"), I("perejil", 5, "g"), I("aceite", 60, "ml"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta la tapa de los calabacines (mejor redondos), vacíalos y cuécelos en agua hirviendo 5 minutos. Pica la pulpa.", 5),
      S("Pela los tomates y quítales las pepitas; mezcla las pepitas con las alcaparras picadas, aceite y sal para la salsa."),
      S("Pocha la cebolleta 6 minutos, añade la pulpa de tomate y de calabacín 10 minutos y luego la carne con tomillo, perejil, sal y pimienta 6 minutos.", 22),
      S("Rellena los calabacines y gratínalos a 200 °C 5 minutos. Sírvelos con la salsa.", 5, 200),
    ],
  }),
  es({
    id: "albondigas-pollo-acelga-pera", title: "Albóndigas de pollo y acelga con salsa de pera",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("acelgas", 300, "g"), I("pollo", 400, "g"), I("ajo", 1, "unit"), I("huevo", 1, "unit"), I("harina", 40, "g"), I("cebolleta", 2, "unit"), I("pera", 2, "unit"), I("vino-dulce", 150, "ml"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha las cebolletas picadas 8 minutos, añade las peras troceadas 2 minutos, el vino dulce y 150 ml de agua, salpimienta y cuece 15 minutos. Tritura.", 25),
      S("Cuece las hojas de acelga 15 minutos, escúrrelas muy bien y pícalas.", 15),
      S("Mezcla las acelgas con el pollo picado, la yema, el ajo picado, sal y pimienta y forma albóndigas con dos cucharas."),
      S("Pásalas por harina, fríelas a 175 °C 4 minutos y caliéntalas en la salsa 3 minutos. Sirve con perejil.", 7, 175),
    ],
  }),
  es({
    id: "coliflor-naranja-cava", title: "Coliflor al horno con salsa de naranja y cava",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("coliflor", 1, "unit"), I("jamon", 100, "g"), I("ajo", 3, "unit"), I("naranja", 2, "unit"), I("maicena", 5, "g"), I("cava", 200, "ml"), I("vinagre", 15, "ml"), I("azafran", 0.1, "g"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Hornea las lonchas de jamón entre dos papeles a 180 °C 15 minutos para que queden crujientes. Pica algunas.", 15, 180),
      S("Maja el ajo con el azafrán y sal, añade el cava, el zumo de las naranjas y el vinagre y reduce a la mitad 10 minutos. Cuela.", 10),
      S("Cuece la coliflor en ramilletes 13 minutos, escúrrela, riégala con la reducción y hornea a 180 °C 15 minutos.", 28, 180),
      S("Liga el jugo que suelte con la maicena disuelta en agua fría. Sirve con el jamón crujiente y perejil.", 2),
    ],
  }),
  es({
    id: "verduras-salsa-holandesa", title: "Alcachofas, espárragos y judías verdes con salsa holandesa",
    authenticity: "adapted", note: "El original usa borraja, típica de Navarra y Aragón; las judías verdes la sustituyen.",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "hard", equipment: ["olla", "horno"],
    ingredients: [I("alcachofa", 6, "unit"), I("judias-verdes", 500, "g"), I("esparragos-blancos", 250, "g"), I("huevo", 3, "unit"), I("mantequilla", 200, "g"), I("vino-blanco", 15, "ml"), I("sal", 6, "g")],
    steps: [
      S("Limpia las alcachofas y cuécelas en agua con sal 20 minutos; pártelas. Cuece las judías verdes en trozos 7 minutos.", 20),
      S("Funde la mantequilla y quítale la espuma.", 2),
      S("Para la holandesa, bate las 3 yemas al baño maría hasta que espesen y añade la mantequilla en hilo sin dejar de batir. Sala y añade el vino.", 6),
      S("Reparte en fuentes las judías, los espárragos blancos y las alcachofas, cubre con la holandesa y gratina 3 minutos.", 3, 220),
    ],
  }),
];
