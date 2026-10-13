import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 15: carnes (cordero, cerdo, ternera, conejo). */
export const recipesArg15: Recipe[] = [
  es({
    id: "chuletillas-empanadas-pan-hierbas", title: "Chuletillas de cordero empanadas con rúcula y pan crujiente de hierbas",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["batidora", "horno", "sarten"],
    ingredients: [I("cordero", 1000, "g"), I("rucula", 100, "g"), I("pan", 200, "g"), I("ajo", 1, "unit"), I("huevo", 2, "unit"), I("harina", 40, "g"), I("pan-rallado", 100, "g"), I("vino-blanco", 300, "ml"), I("oregano", 2, "g"), I("tomillo", 2, "g"), I("romero", 2, "g"), I("laurel", 1, "unit"), I("vinagre", 15, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Tritura el vino con el ajo, el orégano, el romero, el tomillo y el laurel y cuela. Empapa en ello 4 rodajas de pan (hogaza), escúrrelas, estíralas con el rodillo entre dos papeles y hornéalas a 170 °C 30 minutos.", 32, 170),
      S("Mientras, limpia las chuletillas de cordero de grasa, salpimiéntalas y pásalas por harina, huevo batido y pan rallado, apretando bien."),
      S("Fríelas por los dos lados en aceite caliente y escúrrelas.", 8),
      S("Sirve con la rúcula aliñada con aceite, vinagre y sal, el pan crujiente y perejil."),
    ],
  }),
  es({
    id: "brocheta-presa-salsa-naranja", title: "Presa ibérica con tomates cherry, brócoli y salsa de naranja",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("cerdo", 800, "g"), I("tomate-cherry", 400, "g"), I("brocoli", 1, "unit"), I("naranja", 2, "unit"), I("cebolla", 1, "unit"), I("chalota", 4, "unit"), I("ajo", 2, "unit"), I("puerro", 1, "unit"), I("vino-blanco", 200, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora el ajo picado, pocha las chalotas, la cebolla y el puerro picados y los recortes de la presa. Añade el vino, deja evaporar, vierte el zumo de las naranjas y reduce a la mitad. Retira los recortes, tritura y cuela.", 22),
      S("Cuece el brócoli en ramilletes 5 minutos.", 5),
      S("Salpimienta la presa (cerdo ibérico), úntala de aceite y dórala en la plancha muy caliente 3-4 minutos por lado. Saltea los tomates cherry.", 8),
      S("Filetea la carne y sírvela con los tomates, el brócoli, la salsa y perejil."),
    ],
  }),
  es({
    id: "conejo-arroz-verde-cremoso", title: "Conejo guisado con arroz verde cremoso",
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "medium", equipment: ["olla", "batidora"],
    ingredients: [I("conejo", 1000, "g"), I("cebolla", 2, "unit"), I("zanahoria", 200, "g"), I("puerro", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 100, "g"), I("vino-tinto", 200, "ml"), I("caldo", 600, "ml"), I("harina", 30, "g"), I("menta", 2, "g"), I("arroz", 150, "g"), I("espinacas", 150, "g"), I("chalota", 2, "unit"), I("vino-blanco", 100, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Trocea el conejo, salpimienta, enharina y dóralo. Añade la cebolla (roja) y el ajo, la zanahoria, el puerro y el pimiento picados y rehoga. Moja con el vino tinto y deja evaporar.", 12),
      S("Añade 100 ml de caldo, el tomate y la menta y cuece tapado 40 minutos (8 en olla rápida). Saca la carne, tritura la salsa, cuélala y vuelve a juntarlos.", 40),
      S("Mientras, pocha las chalotas picadas, añade el arroz, moja con el vino blanco (el original usa Jerez) y ve añadiendo 500 ml de caldo caliente durante 17 minutos."),
      S("Tritura las espinacas con un poco de caldo, añádelas al arroz y sirve con el conejo y perejil.", 3),
    ],
  }),
  es({
    id: "filetes-rellenos-platano", title: "Rollitos de ternera rellenos de cerdo y plátano con crema de guisantes",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("ternera", 500, "g"), I("platano", 2, "unit"), I("cerdo", 300, "g"), I("cebolleta", 1, "unit"), I("guisantes", 200, "g"), I("arroz", 25, "g"), I("tomate", 300, "g"), I("ajo", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece los guisantes con el arroz y la cebolleta picada, cubiertos de agua con sal, 16 minutos. Tritura.", 16),
      S("Mezcla la carne picada de cerdo salpimentada con los plátanos picados. Reparte sobre los filetes de ternera, enróllalos y sujétalos con un palillo.", 8),
      S("Riégalos con aceite y hornéalos a 200 °C 16 minutos. Córtalos por la mitad.", 16, 200),
      S("Sirve con la crema y los tomates en gajos aliñados con el ajo picado, aceite, sal y perejil."),
    ],
  }),
  es({
    id: "conejo-garbanzos-acelgas", title: "Conejo con garbanzos y acelgas",
    baseServings: 4, prepMin: 20, cookMin: 80, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("conejo", 1000, "g"), I("garbanzos", 250, "g"), I("acelgas", 250, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("harina", 30, "g"), I("vino-blanco", 100, "ml"), I("laurel", 1, "unit"), I("romero", 1, "g"), I("aceite", 100, "ml"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pon los garbanzos a remojo la víspera. Trocea el conejo, salpimienta, enharina y fríe hasta dorar.", 10),
      S("Pocha la cebolla y el ajo picados, añade el vino (fino), el agua y, al hervir, los garbanzos con sal. Cuece 90 minutos (20 en olla rápida).", 55),
      S("Añade el conejo, las acelgas picadas, el laurel y el romero y cuece destapado 15 minutos a fuego suave.", 15),
    ],
  }),
  es({
    id: "solomillo-cerdo-beicon-champinones", title: "Medallones de solomillo de cerdo con beicon y champiñones en salsa",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("solomillo-cerdo", 800, "g"), I("champinones", 700, "g"), I("beicon", 150, "g"), I("vino-blanco", 100, "ml"), I("ajo", 4, "unit"), I("harina", 8, "g"), I("chile", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora el ajo picado con la guindilla (cayena), añade la harina, los champiñones partidos, sal y el vino (el original usa txakoli). Cuece 22 minutos, con un vaso de agua si se seca. Espolvorea perejil.", 24),
      S("Corta 12 medallones de solomillo, envuelve cada uno con una loncha de beicon sujeta con un palillo y salpimienta.", 4),
      S("Hazlos a la plancha 2 minutos por lado y sírvelos con los champiñones.", 4),
    ],
  }),
  es({
    id: "crepes-solomillo-queso-azul", title: "Crepes de solomillo de ternera y queso azul con salsa de vino dulce",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["batidora", "sarten"],
    ingredients: [I("ternera", 350, "g"), I("queso-azul", 100, "g"), I("cebolleta", 2, "unit"), I("maicena", 8, "g"), I("vino-dulce", 200, "ml"), I("huevo", 3, "unit"), I("harina", 150, "g"), I("mantequilla", 10, "g"), I("leche", 250, "ml"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Tritura los huevos con la harina, la leche, una cucharada de aceite, sal y perejil y haz 8 crepes en una sartén con mantequilla.", 15),
      S("Pocha las cebolletas picadas, añade el vino, deja evaporar el alcohol, agrega medio vaso de agua y liga con la maicena.", 8),
      S("Corta el solomillo de ternera en tiras, salpimienta y saltéalo muy rápido.", 3),
      S("Rellena los crepes con la carne y el queso azul (el original usa roquefort), dóblalos y sírvelos con la salsa.", 2),
    ],
  }),
  es({
    id: "brick-conejo-pisto-calabacin", title: "Saquitos crujientes de conejo y calabacín con salsa de curry",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("pasta-brick", 4, "unit"), I("conejo", 500, "g"), I("calabacin", 300, "g"), I("cebolleta", 2, "unit"), I("zanahoria", 100, "g"), I("maicena", 5, "g"), I("vino-blanco", 100, "ml"), I("curry", 3, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece los muslos de conejo con una cebolleta, la zanahoria y perejil, cubiertos de agua con sal, 30 minutos (10-12 en olla rápida). Cuela el caldo y desmiga la carne.", 30),
      S("Pocha el calabacín en daditos con sal y mezcla con la carne.", 8),
      S("Pocha la otra cebolleta picada con el curry, añade el vino y un vaso de caldo y liga con la maicena.", 8),
      S("Rellena las hojas de brick cerrándolas en saquitos, píntalas con aceite y hornéalas a 200 °C 6 minutos. Sirve con la salsa.", 6, 200),
    ],
  }),
  es({
    id: "conejo-salsa-agridulce-naranja", title: "Conejo en salsa agridulce de naranja con arroz basmati",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("conejo", 1200, "g"), I("arroz-basmati", 250, "g"), I("ajo", 5, "unit"), I("cebolleta", 1, "unit"), I("tomate", 150, "g"), I("naranja", 3, "unit"), I("azucar", 12, "g"), I("miel", 20, "g"), I("soja", 15, "ml"), I("vinagre", 45, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Trocea el conejo, salpimienta y dóralo en la cazuela. Retíralo.", 8),
      S("Pocha el ajo laminado y la cebolleta picada, añade el tomate pelado y picado 5 minutos, y después la soja, la miel, el vinagre y el azúcar (moreno).", 7),
      S("Devuelve el conejo, vierte el zumo de las naranjas, tapa y cuece 20 minutos.", 20),
      S("Mientras, cuece el arroz en agua con sal 11 minutos y escúrrelo. Sirve con perejil."),
    ],
  }),
  es({
    id: "tacos-ternera-verduras-queso", title: "Tacos de ternera, verduras y queso azul con salsa picante",
    cuisine: "mexicana", origin: "México (versión de Arguiñano)", authenticity: "adapted",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("tortilla-maiz", 8, "unit"), I("ternera", 200, "g"), I("queso-azul", 200, "g"), I("pimiento", 4, "unit"), I("ajo", 4, "unit"), I("cebolleta", 4, "unit"), I("tomate", 600, "g"), I("chile", 1, "unit"), I("cilantro", 5, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Escalda los tomates 20 segundos, pélalos y tritúralos. Dora 2 ajos laminados con la guindilla, añade el tomate, sala y cuece 9 minutos. Añade cilantro.", 12),
      S("Pocha los pimientos (rojos pelados y verdes) en tiras con 2 ajos laminados y las cebolletas en juliana.", 12),
      S("Saltea la ternera (espaldilla) en tiras salpimentada y mézclala con las verduras.", 4),
      S("Calienta las tortillas, unta el queso azul (en crema), rellena con la carne y sirve con la salsa y perejil.", 2),
    ],
  }),
  es({
    id: "terrina-carne-platano", title: "Pastel de carne picada y puré de plátano",
    note: "Recuerda al pastelón caribeño.",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("ternera-picada", 500, "g"), I("platano", 8, "unit"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 100, "g"), I("aceitunas", 40, "g"), I("pan-rallado", 20, "g"), I("cilantro", 5, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Asa 6 plátanos maduros con piel en el horno a 180 °C 20 minutos, pélalos y hazlos puré.", 20, 180),
      S("Dora el ajo picado, añade la cebolla y el pimiento verde picados, después la carne salpimentada, el cilantro, las aceitunas picadas y el tomate. Cocina 5 minutos.", 12),
      S("Reparte el puré en 4 moldes de horno, cubre con la carne, pon los otros plátanos en rodajas fritos y espolvorea pan rallado.", 5),
      S("Gratina en el horno 5 minutos y sirve con perejil.", 5, 220),
    ],
  }),
  es({
    id: "carpaccio-ternera-guarnicion", title: "Carpaccio de ternera con champiñones, pimientos asados y ensalada de melón",
    cuisine: "italiana", origin: "Italia (versión de Arguiñano)",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("ternera", 250, "g"), I("pimiento", 2, "unit"), I("champinones", 300, "g"), I("ajo", 2, "unit"), I("melon", 0.5, "unit"), I("jamon", 100, "g"), I("rucula", 125, "g"), I("parmesano", 30, "g"), I("oregano", 1, "g"), I("aceite", 100, "ml"), I("vinagre", 15, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Asa los pimientos rojos con aceite y sal en el horno a 180 °C 35 minutos. Pélalos, córtalos en tiras y alíñalos con su jugo y aceite.", 35, 180),
      S("Mezcla la rúcula con el jamón en taquitos y bolitas de melón; alíñala al servir con aceite, vinagre y sal.", 6),
      S("Dora el ajo picado y saltea brevemente los champiñones laminados finos con perejil.", 3),
      S("Extiende el carpaccio de ternera en los platos, salpimienta, riega con aceite de hierbas (orégano) y cubre con lascas de parmesano. Sirve con las guarniciones."),
    ],
  }),
  es({
    id: "solomillo-manzana-hojaldre", title: "Solomillo de cerdo con gajos de manzana en hojaldre",
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "medium", equipment: ["sarten", "olla", "batidora"],
    ingredients: [I("solomillo-cerdo", 1000, "g"), I("masa-hojaldre", 275, "g"), I("manzana", 2, "unit"), I("cebolleta", 1, "unit"), I("ajo", 10, "unit"), I("vino-dulce", 100, "ml"), I("menta", 3, "g"), I("oregano", 1, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Macera la manzana pelada en 12 gajos con hierbabuena (menta) y mejorana (u orégano) 10 minutos. Envuelve cada gajo en una tira de hojaldre y fríelos.", 15),
      S("Pon la cabeza de ajos y la cebolleta en cuartos con aceite y las puntas de los solomillos, rehoga, añade el vino (el original usa oporto) y un vaso de agua y cuece 15 minutos. Tritura y cuela.", 18),
      S("Salpimienta los filetes de solomillo y hazlos a la plancha 2 minutos por lado. Sírvelos con la salsa, la manzana y perejil.", 4),
    ],
  }),
  es({
    id: "redondo-rebozado-brocheta-platano", title: "Filetes de redondo rebozados con brocheta de plátano especiado",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera", 600, "g"), I("platano", 4, "unit"), I("limon", 1, "unit"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("azucar", 5, "g"), I("comino", 1, "g"), I("canela", 1, "g"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta los plátanos en trozos y macéralos 12 minutos con el zumo de limón, comino, canela (el original usa cardamomo), sal y azúcar (moreno).", 12),
      S("Ensártalos en brochetas y hazlas a la plancha.", 5),
      S("Salpimienta los filetes de redondo (ternera), pásalos por harina y huevo batido y fríelos.", 8),
      S("Sirve con perejil."),
    ],
  }),
  es({
    id: "solomillo-ternera-vino-chalotas", title: "Solomillo de ternera con salsa de vino tinto y chalotas confitadas",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("ternera", 700, "g"), I("chalota", 10, "unit"), I("vino-tinto", 500, "ml"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("ajo", 3, "unit"), I("maicena", 8, "g"), I("azucar", 3, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora 2 ajos picados, añade la cebolla y la zanahoria en dados, sal, azúcar y el vino y reduce 20 minutos. Cuela y liga con la maicena.", 25),
      S("Mientras, confita las chalotas peladas en aceite a fuego suave hasta que estén tiernas."),
      S("Salpimienta los bocados de ternera (solomillo), úntalos con aceite y el otro ajo picado y hazlos a la plancha a tu gusto.", 6),
      S("Sirve con la salsa, las chalotas y perejil."),
    ],
  }),
  es({
    id: "conejo-chuletillas-fideos-agridulce", title: "Chuletillas de conejo marinadas con fideos de arroz y salsa agridulce",
    baseServings: 4, prepMin: 75, cookMin: 20, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("conejo", 1200, "g"), I("fideos-arroz", 65, "g"), I("ajo", 4, "unit"), I("vinagre", 95, "ml"), I("romero", 1, "g"), I("pimiento", 0.25, "unit"), I("limon", 1, "unit"), I("vino-dulce", 30, "ml"), I("tomate-triturado", 30, "g"), I("soja", 15, "ml"), I("azucar", 25, "g"), I("maicena", 8, "g"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Corta el conejo en lonchas de 3 cm y sálalo. Maja el ajo con sal, el romero, 50 ml de vinagre, perejil y el aceite y deja macerar el conejo 1 hora.", 60),
      S("Calienta el zumo de limón, el resto del vinagre, el tomate, la soja, el vino (jerez) y el azúcar, añade el pimiento rojo picado 4 minutos y liga con la maicena disuelta.", 6),
      S("Hidrata los fideos de arroz según el paquete. Haz el conejo a la plancha 4 minutos por lado.", 8),
      S("Sirve el conejo con los fideos y la salsa agridulce."),
    ],
  }),
  es({
    id: "conejo-empanado-patatas-pimientos", title: "Conejo rebozado con ensalada de patatas y pimientos fritos",
    baseServings: 4, prepMin: 45, cookMin: 45, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("conejo", 1200, "g"), I("patata", 500, "g"), I("pimiento", 3, "unit"), I("ajo", 2, "unit"), I("pan-rallado", 80, "g"), I("harina-maiz", 40, "g"), I("tomillo", 1, "g"), I("vinagre", 20, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas con piel 30 minutos, pélalas, córtalas en dados y sálalas.", 30),
      S("Mientras, trocea el conejo, salpimienta y macéralo 30 minutos con el ajo majado con tomillo, vinagre y aceite."),
      S("Reboza los trozos en pan rallado mezclado con harina de maíz y fríelos.", 10),
      S("Fríe los pimientos verdes troceados y mézclalos con las patatas, un chorro de aceite y perejil. Sirve con el conejo.", 5),
    ],
  }),
  es({
    id: "albondigas-salsa-vino-tallarines", title: "Albóndigas en salsa de vino tinto con tallarines y setas",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["sarten", "batidora", "olla"],
    ingredients: [I("ternera-picada", 500, "g"), I("huevo", 1, "unit"), I("pan-rallado", 40, "g"), I("pasta", 200, "g"), I("setas", 150, "g"), I("cebolla", 2, "unit"), I("chalota", 2, "unit"), I("ajo", 3, "unit"), I("zanahoria", 200, "g"), I("vino-tinto", 200, "ml"), I("salsa-inglesa", 30, "ml"), I("harina", 30, "g"), I("aceite", 100, "ml"), I("perejil", 5, "g"), I("sal", 7, "g")],
    steps: [
      S("Mezcla la carne con el huevo, el pan rallado, perejil y sal y forma 24 albóndigas. Pásalas por harina y dóralas. Retíralas.", 12),
      S("Carameliza en la misma cazuela el ajo, la cebolla y la zanahoria picados, añade el vino, la salsa inglesa y un poco de agua y reduce 12 minutos. Tritura, añade las albóndigas y cuece 7 minutos.", 25),
      S("Mientras, cuece los tallarines y saltéalos con las chalotas picadas doradas y las setas (el original usa trompetas de la muerte)."),
      S("Sirve con perejil."),
    ],
  }),
  es({
    id: "chuletas-cerdo-naranja-orejones", title: "Chuletas de cerdo con salsa de naranja y orejones rellenos de queso",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["horno", "sarten", "batidora"],
    ingredients: [I("cerdo", 1000, "g"), I("orejones", 100, "g"), I("queso-crema", 150, "g"), I("queso-azul", 50, "g"), I("naranja", 3, "unit"), I("brandy", 20, "ml"), I("cebolleta", 2, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Remoja los orejones (mejor la víspera), escúrrelos y ásalos con aceite en el horno a 160 °C 12 minutos. Ábrelos y rellénalos con los dos quesos mezclados.", 12, 160),
      S("Pocha las cebolletas picadas, flambéalas con el licor (brandy o licor de naranja), añade el zumo de las naranjas y cuece 10 minutos. Tritura.", 14),
      S("Haz las chuletas (de Sajonia o de lomo) a la plancha por los dos lados.", 6),
      S("Sírvelas con la salsa, los orejones calientes y perejil."),
    ],
  }),
  es({
    id: "albondigas-salsa-manzana-arroz-integral", title: "Albóndigas en salsa de manzana con arroz integral",
    baseServings: 4, prepMin: 25, cookMin: 45, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("arroz", 200, "g"), I("ternera-picada", 400, "g"), I("cerdo", 100, "g"), I("pan", 50, "g"), I("leche", 200, "ml"), I("huevo", 1, "unit"), I("harina", 50, "g"), I("menta", 3, "g"), I("manzana", 3, "unit"), I("cebolla", 1, "unit"), I("caldo", 300, "ml"), I("vainilla", 0.25, "unit"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz (integral) en agua con sal 35-40 minutos y escúrrelo.", 38),
      S("Mientras, pocha la cebolla picada, añade las manzanas troceadas y la vainilla, una cucharada de harina y el caldo y cuece 17 minutos. Retira la vainilla y pasa la salsa por el pasapurés."),
      S("Mezcla la carne picada (ternera y cerdo) con el pan remojado en leche y escurrido, el huevo, menta picada, sal y pimienta. Forma albóndigas, enharínalas y fríelas.", 10),
      S("Cuécelas en la salsa 5 minutos y sírvelas con el arroz y perejil.", 5),
    ],
  }),
  es({
    id: "bocados-lomo-jamon-tomate", title: "Sanjacobos de lomo con jamón y tomate seco",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("cerdo", 600, "g"), I("jamon-cocido", 160, "g"), I("tomates-secos", 60, "g"), I("calabacin", 300, "g"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece los tomates secos en agua 11 minutos y sécalos.", 11),
      S("Salpimienta 16 filetes de lomo y monta 8 bocados: filete, media loncha de jamón cocido, tomates, otra media loncha y otro filete.", 6),
      S("Pásalos por harina, huevo batido con perejil y pan rallado y fríelos por los dos lados.", 8),
      S("Saltea el calabacín en dados con sal y sírvelo de guarnición.", 5),
    ],
  }),
  es({
    id: "cordero-cuscus", title: "Cordero salteado con cuscús al curry",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("cordero", 900, "g"), I("puerro", 1, "unit"), I("zanahoria", 200, "g"), I("ajo", 6, "unit"), I("pimiento", 1, "unit"), I("cuscus", 200, "g"), I("curry", 2, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Deshuesa la paletilla de cordero y corta la carne en bocados. Cuece los huesos con el puerro, las zanahorias y 2 ajos en agua con sal 30 minutos (15 en olla rápida). Cuela.", 20),
      S("Calienta 300 ml de caldo con el curry, viértelo sobre el cuscús, tapa y deja que lo absorba.", 5),
      S("Dora los otros ajos, saltea la carne salpimentada a fuego fuerte y añade el pimiento rojo pelado en daditos.", 8),
      S("Sirve el cordero sobre el cuscús con perejil."),
    ],
  }),
  es({
    id: "costilla-ternera-chalotas-cebolla", title: "Tiras de costilla de ternera con chalotas asadas y salsa de cebolla",
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("ternera", 800, "g"), I("chalota", 10, "unit"), I("ajo", 4, "unit"), I("pimiento", 4, "unit"), I("cebolla", 2, "unit"), I("vino-tinto", 150, "ml"), I("laurel", 1, "unit"), I("tomillo", 1, "g"), I("aceite", 80, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora 2 ajos laminados y la cebolla en dados, añade el laurel, el tomillo, el vino y 200 ml de agua y reduce a la mitad. Retira las hierbas y pasa por el pasapurés.", 20),
      S("Salpimienta la costilla de ternera en tiras finas y macérala 15 minutos con aceite y los otros ajos picados.", 15),
      S("Mientras, asa las chalotas con sal y aceite en el horno a 190 °C 20 minutos y fríe los pimientos verdes (el original usa guindillas verdes dulces)."),
      S("Haz la carne a la plancha 2 minutos por lado y sírvela con la salsa, las chalotas, los pimientos y perejil.", 4),
    ],
  }),
  es({
    id: "hamburguesas-rellenas-mozzarella", title: "Hamburguesas rellenas de mozzarella y tomate seco con salsa de tomate",
    baseServings: 4, prepMin: 75, cookMin: 40, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("ternera-picada", 800, "g"), I("tomates-secos", 20, "g"), I("chile", 2, "unit"), I("tomate", 1000, "g"), I("cebolleta", 1, "unit"), I("ajo", 4, "unit"), I("mozzarella", 150, "g"), I("aceitunas", 25, "g"), I("azucar", 3, "g"), I("oregano", 1, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Remoja los tomates secos 1 hora. Mientras, pocha el ajo y la cebolleta, añade los tomates en cuartos, sal, azúcar y orégano y cuece 30 minutos. Pasa por el pasapurés.", 60),
      S("Mezcla la carne con los tomates secos, la mozzarella, las aceitunas negras y las guindillas (en vinagre) en daditos, sal y pimienta. Forma hamburguesas.", 8),
      S("Hazlas en la sartén 3-4 minutos por lado y sírvelas con la salsa y perejil.", 8),
    ],
  }),
  es({
    id: "carrilleras-vino-blanco-guarnicion", title: "Carrilleras al vino blanco con verduras torneadas y guisantes",
    baseServings: 4, prepMin: 25, cookMin: 120, difficulty: "medium", equipment: ["sarten", "olla", "batidora"],
    ingredients: [I("ternera", 900, "g"), I("cebolla", 2, "unit"), I("patata", 600, "g"), I("chalota", 8, "unit"), I("zanahoria", 200, "g"), I("guisantes", 150, "g"), I("ajo", 2, "unit"), I("vino-blanco", 200, "ml"), I("harina", 30, "g"), I("maicena", 8, "g"), I("romero", 1, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta las carrilleras (de ternera), enharínalas y dóralas.", 10),
      S("Rehoga la cebolla y los ajos en trozos, añade las carrilleras, el romero, el vino (el original usa txakoli) y agua, y cuece tapado 2 horas (40 minutos en olla rápida).", 100),
      S("Mientras, cuece al vapor las patatas, las chalotas y las zanahorias torneadas 15 minutos."),
      S("Saca la carne, tritura la salsa, lígala con la maicena, añade los guisantes y las carrilleras en filetes y cuece 7 minutos. Sirve con la guarnición y perejil.", 8),
    ],
  }),
  es({
    id: "chuletillas-patatas-rejilla-piquillos", title: "Chuletillas de cordero con patatas rejilla y piquillos al ajo",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("cordero", 1200, "g"), I("patata", 400, "g"), I("pimientos-piquillo", 300, "g"), I("ajo", 1, "unit"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Fríe un poco los piquillos con sal. Tritura el ajo con 500 ml de agua, viértelo sobre ellos y cocina hasta que se evapore.", 15),
      S("Corta las patatas en rejilla con la mandolina, lávalas, sécalas, fríelas y sálalas.", 8),
      S("Salpimienta las chuletillas de cordero y hazlas a la plancha 2-3 minutos por lado. Sirve con perejil.", 6),
    ],
  }),
  es({
    id: "entrecot-verduras-tempura", title: "Entrecot con verduras en tempura",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera", 800, "g"), I("ajo", 4, "unit"), I("cebolleta", 1, "unit"), I("pimiento", 4, "unit"), I("calabacin", 300, "g"), I("harina", 150, "g"), I("romero", 2, "g"), I("aceite", 300, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta la cebolleta en 6 y los pimientos (verdes y amarillos) y el calabacín en bastones.", 5),
      S("Mezcla la harina con 200 ml de agua muy fría, pasa por ella las verduras, fríelas y sálalas.", 10),
      S("Haz los entrecots de ternera salpimentados en la plancha con los ajos aplastados y el romero, a tu gusto.", 6),
    ],
  }),
  es({
    id: "minihamburguesas-salsa-barbacoa", title: "Minihamburguesas con salsa barbacoa casera y pan de tres mojos",
    cuisine: "estadounidense", origin: "Estados Unidos (versión de Arguiñano)", authenticity: "adapted",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("ternera-picada", 600, "g"), I("pan-hamburguesa", 4, "unit"), I("patata", 400, "g"), I("queso-azul", 50, "g"), I("ajo", 2, "unit"), I("cebolleta", 0.5, "unit"), I("tomate-triturado", 125, "g"), I("salsa-inglesa", 5, "ml"), I("mostaza", 5, "g"), I("azucar", 8, "g"), I("vinagre", 15, "ml"), I("chile", 1, "unit"), I("pimenton", 3, "g"), I("comino", 1, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Prepara tres mojos: aceite con pimentón, queso azul con aceite y un ajo majado con perejil y aceite. Haz 3 cortes en cada pan, úntalos y hornéalos envueltos en papel a 180 °C 7 minutos.", 7, 180),
      S("Rehoga la cebolleta y el otro ajo picados, añade el tomate (kétchup en el original), la salsa inglesa, la mostaza, el azúcar, el vinagre, la guindilla, pimienta, pimentón, comino y sal y cuece 8 minutos.", 10),
      S("Fríe las patatas en bastones y forma 12 minihamburguesas con la carne salpimentada; hazlas a la plancha 2 minutos por lado.", 10),
      S("Mete las minihamburguesas en los cortes del pan y sirve con la salsa barbacoa y las patatas."),
    ],
  }),
  es({
    id: "conejo-parrilla-calabacines", title: "Conejo marinado a la parrilla con calabacines salteados",
    baseServings: 4, prepMin: 130, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("conejo", 1200, "g"), I("calabacin", 500, "g"), I("vino-blanco", 300, "ml"), I("cebolleta", 1, "unit"), I("ajo", 3, "unit"), I("tomate-triturado", 200, "g"), I("laurel", 2, "unit"), I("pimenton", 3, "g"), I("romero", 1, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta el conejo en 4, salpimienta y macéralo 2 horas con la cebolleta y los ajos picados, el laurel, el pimentón, la mitad del romero, el vino, el tomate y un chorro de aceite.", 120),
      S("Reduce la marinada en un cazo 10 minutos.", 10),
      S("Asa el conejo en la parrilla o plancha 7 minutos por lado.", 14),
      S("Mientras, saltea el calabacín en bastones con sal y el resto de romero 9 minutos. Sirve con la salsa y perejil."),
    ],
  }),
  es({
    id: "ternera-asada-lombarda-manzana", title: "Redondo de ternera asado a la mostaza con lombarda, manzana y beicon",
    baseServings: 4, prepMin: 15, cookMin: 75, difficulty: "medium", equipment: ["horno", "batidora", "sarten"],
    ingredients: [I("ternera", 900, "g"), I("repollo", 0.5, "unit"), I("manzana", 2, "unit"), I("beicon", 60, "g"), I("cebolla", 1, "unit"), I("mostaza", 15, "g"), I("vino-blanco", 150, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pon la cebolla en dados con aceite y el vino en una fuente, unta la ternera (atadito) con mostaza (antigua), salpimienta y ásala en el horno a 180 °C 40 minutos y a 160 °C 20 minutos más.", 60, 180),
      S("Tritura la cebolla con los jugos de la bandeja y añade perejil.", 3),
      S("Rehoga el beicon en dados, añade la lombarda (repollo morado) en juliana y la manzana pelada en dados y cocina 10 minutos con sal.", 10),
      S("Sirve la carne en rebanadas con la salsa y la lombarda."),
    ],
  }),
  es({
    id: "magras-con-tomate", title: "Magras con tomate y huevo frito",
    origin: "España (Aragón)",
    baseServings: 4, prepMin: 40, cookMin: 55, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("jamon", 300, "g"), I("tomate", 1000, "g"), I("ajo", 9, "unit"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("leche", 200, "ml"), I("huevo", 4, "unit"), I("tomillo", 1, "g"), I("laurel", 1, "unit"), I("azucar", 3, "g"), I("aceite", 100, "ml"), I("perejil", 5, "g"), I("sal", 3, "g")],
    steps: [
      S("Dora 5 ajos picados, la cebolleta y el pimiento verde picados. Añade los tomates troceados, un atadito de tomillo, laurel y perejil, sal y azúcar y cuece 40 minutos. Retira el atadito y pasa por el pasapurés.", 45),
      S("Mientras, remoja las lonchas gruesas de jamón en la leche 30 minutos, sécalas y fríelas brevemente. Añádelas al tomate."),
      S("Fríe los huevos con los otros ajos laminados y sírvelos sobre las magras.", 5),
    ],
  }),
];
