import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 13: últimas sopas y primeros huevos. */
export const recipesArg13: Recipe[] = [
  es({
    id: "sopa-de-pescado", title: "Sopa de pescado y marisco con calabaza",
    baseServings: 8, prepMin: 25, cookMin: 55, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("langostinos", 300, "g"), I("almejas", 400, "g"), I("merluza", 600, "g"), I("pan", 30, "g"), I("puerro", 3, "unit"), I("cebolleta", 1, "unit"), I("calabaza", 400, "g"), I("ajo", 3, "unit"), I("pimiento", 1, "unit"), I("tomate", 150, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 10, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pela los langostinos y cuece las cabezas y cáscaras (y espinas de pescado si tienes) en 3 litros de agua con sal 22 minutos. Cuela el caldo.", 22),
      S("Pocha 2 ajos, los puerros, la cebolleta, el pimiento verde y la calabaza picados, añade el tomate pelado y picado y rehoga.", 10),
      S("Vierte el caldo y cuece 20 minutos a fuego suave. Añade la merluza en dados (el original añade cabracho) y los langostinos salpimentados.", 22),
      S("Abre las almejas en una sartén con el otro ajo y el pan picado, incorpóralas a la sopa y sirve con perejil.", 4),
    ],
  }),
  es({
    id: "crema-setas-bricks", title: "Crema de setas con saquitos crujientes de setas",
    note: "El original usa boletus.",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["olla", "batidora", "sarten", "horno"],
    ingredients: [I("setas", 1200, "g"), I("puerro", 2, "unit"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("nabo", 150, "g"), I("arroz", 25, "g"), I("pasta-brick", 2, "unit"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga una cebolleta, los puerros y el nabo picados, añade el arroz y 1 kg de setas picadas, 1,5 litros de agua, sal y pimienta y cuece 30 minutos. Tritura y cuela.", 35),
      S("Pocha la otra cebolleta y los ajos picados y saltea el resto de setas picadas. Deja enfriar.", 6),
      S("Corta la pasta brick en tiras, rellena con las setas formando triángulos, píntalos con aceite y hornéalos a 190 °C 6 minutos.", 6, 190),
      S("Sirve la crema con los triángulos y perejil."),
    ],
  }),
  es({
    id: "salmorejo-mango-rape-gambas", title: "Salmorejo de mango con rape y gambas",
    baseServings: 4, prepMin: 20, cookMin: 8, difficulty: "easy", equipment: ["batidora", "sarten"],
    ingredients: [I("rape", 200, "g"), I("gambas", 300, "g"), I("tomate", 500, "g"), I("mango", 2, "unit"), I("pan", 40, "g"), I("ajo", 1, "unit"), I("cebollino", 5, "g"), I("aceite", 120, "ml"), I("sal", 4, "g")],
    steps: [
      S("Tritura los tomates pelados con el mango pelado, sal y un buen chorro de aceite; aligera con agua si queda espeso. Enfría.", 4),
      S("Fríe el pan en daditos con el ajo aplastado.", 3),
      S("Saltea las gambas peladas y el rape en dados con sal 2 minutos y añade cebollino picado.", 2),
      S("Sirve el salmorejo con el marisco y los picatostes."),
    ],
  }),
  es({
    id: "crema-remolacha-zanahoria-almendra", title: "Crema de remolacha, zanahoria y almendra",
    baseServings: 6, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["sarten", "olla", "batidora"],
    ingredients: [I("remolacha", 800, "g"), I("cebolla", 2, "unit"), I("zanahoria", 400, "g"), I("almendras", 100, "g"), I("limon", 0.5, "unit"), I("yogur", 2, "unit"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Tuesta 25 g de almendras laminadas en una sartén sin aceite.", 3),
      S("Pocha la cebolla en dados, añade la remolacha y la zanahoria peladas y troceadas, el resto de almendras molidas y el zumo de limón. Cubre con agua, sala y cuece 30 minutos. Tritura.", 35),
      S("Sirve con una cucharada de yogur (el original usa crema agria) y las almendras tostadas."),
    ],
  }),
  es({
    id: "sopa-pollo-albondigas-garbanzos", title: "Sopa de pollo con garbanzos y albondiguillas",
    baseServings: 6, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["olla", "sarten"],
    note: "El original espesa el caldo con tapioca.",
    ingredients: [I("garbanzos", 200, "g"), I("pollo", 900, "g"), I("cebolla", 1, "unit"), I("zanahoria", 200, "g"), I("puerro", 2, "unit"), I("ajo", 1, "unit"), I("harina-maiz", 30, "g"), I("calabacin", 150, "g"), I("pasta", 50, "g"), I("aceite", 200, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pon los garbanzos a remojo la víspera. Cuécelos en una red con la carcasa o muslos de pollo (550 g), la cebolla, las zanahorias y los puerros en agua con sal 60 minutos (20 en olla rápida). Cuela el caldo.", 40),
      S("Mezcla 350 g de pollo picado con el ajo y perejil picados, sal y pimienta. Forma bolitas, pásalas por la harina de maíz y fríelas.", 8),
      S("Hierve el caldo con la pasta de sopa 6 minutos, añade el calabacín en daditos, los garbanzos y las albóndigas y cuece 3 minutos más.", 9),
    ],
  }),
  es({
    id: "sopa-vina-ab", title: "Sopa Viña AB (sopa de pescado con mayonesa)",
    origin: "España (Andalucía)",
    baseServings: 6, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["olla", "batidora"],
    ingredients: [I("merluza", 700, "g"), I("gambas", 250, "g"), I("almejas", 300, "g"), I("patata", 400, "g"), I("vino-dulce", 125, "ml"), I("huevo", 1, "unit"), I("limon", 1, "unit"), I("aceite", 180, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Abre las almejas con un chorrito de agua, tapadas. Saca los lomos de la pescadilla (merluza) y pela las gambas.", 5),
      S("Cuece la cabeza y espinas del pescado y las cáscaras de las gambas en 1,5 litros de agua con sal y perejil 12 minutos. Cuela y reserva un vaso para que se enfríe.", 12),
      S("Haz bolitas de patata y cuécelas en el caldo 10 minutos. Añade el vino (el original usa amontillado), el pescado en dados, las gambas y las almejas, 3 minutos.", 13),
      S("Monta una mayonesa con el huevo, el zumo de limón, sal y el aceite con la batidora; aclárala con el caldo frío y mézclala con la sopa fuera del fuego. Salpimienta y sirve con perejil."),
    ],
  }),
  es({
    id: "crema-tomate-asado-galletas", title: "Crema de tomate asado con galletas saladas de hierbas",
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "easy", equipment: ["olla", "horno", "batidora"],
    ingredients: [I("tomate", 1500, "g"), I("pimiento", 1, "unit"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("puerro", 1, "unit"), I("zanahoria", 100, "g"), I("albahaca", 10, "g"), I("harina", 250, "g"), I("levadura-quimica", 4, "g"), I("oregano", 2, "g"), I("aceite", 80, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece la zanahoria y el puerro con perejil en agua con sal 20 minutos y cuela el caldo.", 20),
      S("Asa los tomates, el pimiento rojo, los ajos con piel y la cebolleta con sal y aceite en el horno a 190 °C 40 minutos.", 40, 190),
      S("Mientras, mezcla la harina, la levadura, hierbas (orégano), sal, 2 cucharadas de aceite y 100 ml de agua; estira fino, corta las galletas y hornéalas a la vez a 190 °C unos 15 minutos."),
      S("Pela las verduras asadas, tritúralas con la albahaca y un vaso de caldo, cuela, salpimienta y sirve con las galletas.", 5),
    ],
  }),
  es({
    id: "crema-verduras-rollitos-pescado", title: "Crema de calabacín y puerro con rollitos de pescado y espinacas",
    note: "El original usa gallo.",
    baseServings: 4, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("calabacin", 500, "g"), I("puerro", 4, "unit"), I("patata", 400, "g"), I("gallo", 600, "g"), I("espinacas", 100, "g"), I("aceite", 40, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga los puerros picados, añade el calabacín pelado y la patata cascada, cubre con agua, sala y cuece 18 minutos. Tritura.", 20),
      S("Escalda las espinacas y escúrrelas.", 2),
      S("Cubre los filetes de gallo con las espinacas, enróllalos, sujétalos con un palillo, salpimienta, riega con aceite y ásalos en el horno a 200 °C 7 minutos.", 7, 200),
      S("Sirve los rollitos sobre la crema."),
    ],
  }),
  es({
    id: "crema-esparragos-huevo-flor", title: "Crema de espárragos blancos con huevo flor y guisantes",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora"],
    ingredients: [I("esparragos-blancos", 500, "g"), I("huevo", 4, "unit"), I("puerro", 2, "unit"), I("patata", 400, "g"), I("guisantes", 100, "g"), I("cacahuetes", 50, "g"), I("limon", 1, "unit"), I("soja", 30, "ml"), I("azucar", 5, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Rehoga los puerros picados, la patata cascada y los espárragos pelados en cilindros, cubre con agua, sala y cuece 20 minutos. Tritura.", 22),
      S("Cuece los guisantes 5 minutos.", 5),
      S("Forra 4 tazas con film untado de aceite, casca un huevo en cada una, sala, cierra el film y cuece los paquetes en agua hirviendo 4-5 minutos.", 5),
      S("Mezcla los cacahuetes picados con el zumo de limón, la soja, el azúcar y aceite. Sirve la crema con el huevo, los guisantes, la vinagreta y perejil."),
    ],
  }),
  es({
    id: "sopa-castellana", title: "Sopa castellana",
    origin: "España (Castilla)",
    baseServings: 4, prepMin: 10, cookMin: 35, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("huevo", 4, "unit"), I("pan", 250, "g"), I("jamon", 200, "g"), I("chorizo", 200, "g"), I("ajo", 8, "unit"), I("pimenton", 6, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Rehoga el ajo laminado, añade el chorizo y el jamón en dados y el pan del día anterior en rebanadas finas.", 5),
      S("Añade el pimentón, cubre con 2 litros de agua y cuece 20 minutos. Ajusta de sal.", 20),
      S("Reparte en cazuelitas de barro, casca un huevo en cada una y hornéalas a 180 °C 10 minutos, hasta que cuaje la clara. Sirve con perejil.", 10, 180),
    ],
  }),
  es({
    id: "crema-puerros-calabaza-romero", title: "Crema de puerros e hinojo con bolitas de calabaza al romero",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("puerro", 6, "unit"), I("patata", 400, "g"), I("hinojo", 0.5, "unit"), I("calabaza", 200, "g"), I("pan", 80, "g"), I("romero", 1, "g"), I("aceite", 100, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga los puerros picados, el hinojo troceado y las patatas cascadas 10 minutos. Cubre con agua, salpimienta y cuece 20 minutos. Tritura.", 30),
      S("Saca bolitas de calabaza y cuécelas 4-5 minutos en agua con el romero.", 5),
      S("Fríe el pan en daditos y sirve la crema con las bolitas, los picatostes y perejil.", 3),
    ],
  }),
  es({
    id: "sopa-calabaza-verduras-queso", title: "Sopa de calabaza con verduras y tostas gratinadas",
    baseServings: 6, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("calabaza", 500, "g"), I("cebolleta", 2, "unit"), I("patata", 200, "g"), I("calabacin", 250, "g"), I("nabo", 150, "g"), I("pan", 120, "g"), I("queso", 60, "g"), I("nuez-moscada", 1, "g"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Rehoga las cebolletas picadas y la calabaza, con sal y nuez moscada. Cubre con agua, cuece 20 minutos y tritura.", 22),
      S("Añade el calabacín, la patata y el nabo en daditos y cuece 10 minutos más.", 10),
      S("Cubre las rebanadas de pan con el queso rallado (el original usa emmental), gratínalas en el horno y sírvelas con la sopa.", 3, 220),
    ],
  }),
  es({
    id: "sopa-quinoa-verduras", title: "Sopa de quinoa con verduras y panceta",
    baseServings: 6, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("quinoa", 100, "g"), I("panceta", 100, "g"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("nabo", 150, "g"), I("calabaza", 250, "g"), I("repollo", 0.25, "unit"), I("espinacas", 100, "g"), I("ajo", 2, "unit"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Rehoga el ajo, el nabo, la cebolleta, la calabaza, el puerro, la col (repollo) y las espinacas picados con sal. Añade la panceta en daditos.", 8),
      S("Vierte 2 litros de agua. Lava la quinoa y tuéstala en una sartén sin aceite.", 3),
      S("Añade la quinoa a la sopa, tapa y cuece 20 minutos.", 20),
    ],
  }),
  es({
    id: "sopa-serrana", title: "Sopa serrana de tomate, almendra y jamón",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("tomate", 750, "g"), I("cebolla", 1, "unit"), I("ajo", 7, "unit"), I("almendras", 100, "g"), I("jamon", 200, "g"), I("pan", 160, "g"), I("huevo", 3, "unit"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece los huevos 10 minutos y pícalos.", 10),
      S("Fríe las almendras y el ajo laminado y tritúralos hasta tener una pasta. Escalda, pela y trocea los tomates.", 6),
      S("Dora la cebolla en daditos en la misma cazuela, añade el tomate, la pasta de almendras, el jamón picado y 1,5 litros de agua y cuece 15 minutos.", 18),
      S("Tuesta el pan (hogaza) y sirve la sopa sobre él con el huevo y perejil."),
    ],
  }),
  es({
    id: "sopa-arroz-pollo-maiz", title: "Sopa de arroz con pollo, calabaza y maíz",
    baseServings: 6, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pollo", 400, "g"), I("cebolleta", 1, "unit"), I("puerro", 2, "unit"), I("calabaza", 400, "g"), I("patata", 200, "g"), I("arroz", 75, "g"), I("maiz", 150, "g"), I("ajo", 1, "unit"), I("caldo", 500, "ml"), I("cilantro", 5, "g"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece los muslos de pollo con la cebolleta y el caldo más 1,5 litros de agua 30 minutos (10 en olla rápida). Saca el pollo, desmígalo y tritura el caldo.", 30),
      S("Rehoga los puerros, el ajo, la calabaza y la patata en daditos, añade el arroz y el maíz y vierte el caldo.", 5),
      S("Cuece 15 minutos, añade el pollo y sirve con cilantro.", 15),
    ],
  }),
  es({
    id: "sopa-verduras-lentejas-menta", title: "Sopa de verduras, lentejas rojas y champiñones con menta",
    note: "El original lleva trigo sarraceno.",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("cebolleta", 2, "unit"), I("zanahoria", 200, "g"), I("puerro", 2, "unit"), I("champinones", 100, "g"), I("quinoa", 100, "g"), I("lentejas", 30, "g"), I("menta", 5, "g"), I("aceite", 30, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece las partes verdes de cebolletas y puerros con perejil en agua con sal 15 minutos y cuela.", 15),
      S("Pocha las cebolletas, zanahorias y puerros picados y los champiñones laminados.", 6),
      S("Añade las lentejas (rojas) y la quinoa lavada, cubre con el caldo y cuece 20 minutos. Sirve con la menta picada.", 20),
    ],
  }),
  es({
    id: "crema-lentejas-cordero", title: "Crema de lentejas rojas con medallones de cordero",
    baseServings: 4, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("lentejas", 300, "g"), I("cordero", 700, "g"), I("arroz", 50, "g"), I("puerro", 1, "unit"), I("zanahoria", 100, "g"), I("tomate-triturado", 100, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("laurel", 1, "unit"), I("vino-dulce", 100, "ml"), I("maicena", 8, "g"), I("harina", 30, "g"), I("huevo", 1, "unit"), I("pan-rallado", 60, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora la cebolla y el ajo picados, añade el cuello de cordero en trozos salpimentado y el vino (oloroso), cubre con agua y cuece 40 minutos (10 en olla rápida). Saca el cordero, reduce el caldo y lígalo con la maicena.", 40),
      S("Mientras, rehoga el puerro y la zanahoria, añade el tomate, las lentejas, el arroz, el laurel y 1,5 litros de agua y cuece 20 minutos. Retira el laurel y tritura."),
      S("Deshuesa el cordero, forma medallones, pásalos por harina, huevo y pan rallado y fríelos.", 6),
      S("Sirve la crema con los medallones, la salsa y perejil."),
    ],
  }),
  es({
    id: "vichyssoise-guisantes", title: "Vichyssoise de guisantes con jamón crujiente y huevo",
    baseServings: 4, prepMin: 100, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "horno", "sarten"],
    ingredients: [I("guisantes", 500, "g"), I("cebolleta", 3, "unit"), I("puerro", 1, "unit"), I("patata", 400, "g"), I("jamon", 60, "g"), I("huevo", 2, "unit"), I("pan", 60, "g"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Rehoga 2 cebolletas y el puerro picados, añade una patata cascada y los guisantes, 1,5 litros de agua y sal y cuece 20 minutos. Tritura, cuela y enfría 1 hora y media.", 110),
      S("Mientras, hornea el jamón entre dos papeles a 180 °C 10 minutos y cuece los huevos 10 minutos y pícalos."),
      S("Fríe la otra patata en daditos y el pan en picatostes, y sirve la crema fría con todo, la otra cebolleta picada y perejil.", 8),
    ],
  }),
  es({
    id: "crema-champinones-pollo", title: "Crema de champiñones con pollo",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("champinones", 600, "g"), I("pollo", 250, "g"), I("cebolleta", 2, "unit"), I("puerro", 1, "unit"), I("ajo", 2, "unit"), I("zanahoria", 100, "g"), I("patata", 200, "g"), I("maiz", 25, "g"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el puerro, la zanahoria, lo verde de las cebolletas y el muslo de pollo en agua con sal 15 minutos. Cuela y desmiga el pollo.", 15),
      S("Rehoga el ajo y las cebolletas picados con la patata cascada 10 minutos.", 10),
      S("Añade los champiñones troceados y el caldo, salpimienta y cuece 20 minutos. Tritura.", 20),
      S("Sirve con el pollo, el maíz (frito o tostado) y perejil."),
    ],
  }),
  es({
    id: "sopa-fria-melon-jamon", title: "Sopa fría de melón con jamón crujiente y pistachos",
    baseServings: 4, prepMin: 80, cookMin: 15, difficulty: "easy", equipment: ["horno", "batidora", "sarten"],
    ingredients: [I("melon", 1.5, "unit"), I("jamon", 60, "g"), I("frutos-rojos", 125, "g"), I("pistachos", 40, "g"), I("cebollino", 5, "g"), I("aceite", 40, "ml"), I("sal", 2, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Hornea el jamón entre dos papeles a 180 °C 11 minutos.", 11, 180),
      S("Tritura un melón pelado con sal, pimienta y un chorro de aceite y enfría 1 hora.", 60),
      S("Saltea las frambuesas y aplástalas en un colador para sacar el jugo. Saca bolitas del otro medio melón.", 3),
      S("Sirve la sopa con las bolitas, el jugo de frambuesa, el jamón, los pistachos picados y cebollino."),
    ],
  }),
  es({
    id: "huevo-patata-morcilla", title: "Huevos fritos con patatas, morcilla y piquillos",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 4, "unit"), I("patata", 600, "g"), I("morcilla", 250, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("pimientos-piquillo", 100, "g"), I("ajo", 4, "unit"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora 2 ajos laminados en abundante aceite, añade la cebolla y el pimiento verde picados y las patatas en rodajas y fríe 18 minutos. Escurre y guarda el aceite.", 20),
      S("Dora los otros ajos picados, añade los piquillos troceados y confítalos a fuego suave. Incorpora la morcilla (mejor de arroz) sin piel y aplástala hasta que se deshaga.", 8),
      S("Fríe los huevos en el aceite reservado, salpimienta y sírvelos sobre las patatas con la morcilla y perejil.", 4),
    ],
  }),
  es({
    id: "huevos-rellenos-guacamole-langostinos", title: "Huevos con guacamole y langostinos",
    baseServings: 4, prepMin: 20, cookMin: 12, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("huevo", 6, "unit"), I("langostinos", 300, "g"), I("aguacate", 1, "unit"), I("tomate", 120, "g"), I("cebolleta", 1, "unit"), I("pimiento", 0.25, "unit"), I("limon", 0.5, "unit"), I("cilantro", 5, "g"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece los huevos 10 minutos, pélalos y pártelos por la mitad.", 10),
      S("Cuece los langostinos pelados (con la punta de la cola) 2 minutos en agua con mucha sal.", 2),
      S("Aplasta el aguacate y mézclalo con el pimiento verde, la cebolleta y el tomate pelado en daditos, el zumo de limón, cilantro picado y sal.", 5),
      S("Cubre los medios huevos con el guacamole y un langostino y sirve con perejil."),
    ],
  }),
  es({
    id: "rollitos-tortilla-jamon-queso", title: "Rollitos de tortilla con jamón y queso en salsa de piquillos",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("huevo", 8, "unit"), I("queso", 250, "g"), I("jamon-cocido", 160, "g"), I("pimientos-piquillo", 150, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("harina", 8, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Dora el ajo y la cebolla picados, añade la harina, los piquillos troceados y un vaso de agua y cuece 15 minutos. Tritura.", 18),
      S("Haz 8 tortillas finas como crepes, cada una con un huevo batido con sal y perejil.", 10),
      S("Cubre cada tortilla con una loncha de jamón y un bastón de queso y enróllala.", 3),
      S("Calienta los rollitos en la salsa 2 minutos para que se funda el queso y sirve.", 2),
    ],
  }),
  es({
    id: "cestos-pan-huevo-jamon", title: "Cestos de pan con huevo escalfado y jamón",
    note: "El original los acompaña con un sabayón de txakoli.",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["horno", "sarten", "olla"],
    ingredients: [I("pan", 400, "g"), I("huevo", 6, "unit"), I("jamon-cocido", 200, "g"), I("cebolla", 1, "unit"), I("limon", 0.5, "unit"), I("vino-blanco", 125, "ml"), I("vinagre", 20, "ml"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Corta la tapa de 4 bollos de pan, vacíalos y tuéstalos en el horno a 180 °C 11 minutos.", 11, 180),
      S("Pocha la cebolla picada y saltea el jamón en dados.", 8),
      S("Monta 2 yemas al baño maría con unas gotas de limón y añade el vino poco a poco hasta tener una crema (sabayón).", 5),
      S("Escalfa 4 huevos en agua con vinagre y sal 3 minutos. Rellena los panes con el jamón y el huevo, cubre con el sabayón y perejil.", 3),
    ],
  }),
  es({
    id: "huevos-rellenos-champinones-gambas", title: "Huevos rellenos de champiñones y gambas",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("huevo", 9, "unit"), I("champinones", 370, "g"), I("gambas", 200, "g"), I("cebolleta", 1, "unit"), I("ajo", 1, "unit"), I("aceite", 180, "ml"), I("vinagre", 5, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece 8 huevos 10 minutos, pélalos, pártelos a lo largo y separa las yemas.", 10),
      S("Pocha la cebolleta y el ajo picados, añade los champiñones picados y las gambas peladas y picadas y cocina 5 minutos. Tritura con la mitad de las yemas.", 7),
      S("Rellena las claras con la mezcla. Monta una mayonesa con el otro huevo, el vinagre, sal y el aceite con la batidora.", 3),
      S("Cubre los huevos con la mayonesa y el resto de yemas ralladas y perejil."),
    ],
  }),
  es({
    id: "huevo-flor-setas-hojaldre", title: "Huevo flor con setas y lazos de hojaldre",
    note: "El original usa perretxikos (setas de primavera).",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("huevo", 5, "unit"), I("setas", 300, "g"), I("masa-hojaldre", 275, "g"), I("ajo", 2, "unit"), I("sesamo", 10, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Corta el hojaldre en 12 tiras, píntalas con huevo batido, gíralas en tirabuzón, espolvorea sésamo y hornéalas a 190 °C 11 minutos.", 11, 190),
      S("Forra 4 tazas con film untado de aceite, casca un huevo en cada una con sal y perejil, ciérralo y cuécelo en agua hirviendo 4-5 minutos.", 5),
      S("Saltea el ajo laminado con las setas y sal 4 minutos.", 4),
      S("Sirve el huevo sobre las setas con los lazos de hojaldre."),
    ],
  }),
  es({
    id: "huevo-frito-polenta-champinones", title: "Huevo frito con polenta crujiente de champiñones al curry",
    baseServings: 4, prepMin: 60, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 4, "unit"), I("polenta", 125, "g"), I("champinones", 350, "g"), I("curry", 4, "g"), I("cebolleta", 1, "unit"), I("ajo", 7, "unit"), I("tomate", 150, "g"), I("pan-rallado", 150, "g"), I("sesamo", 20, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Pocha 2 ajos y la cebolleta picados, añade los champiñones picados y el curry.", 6),
      S("Hierve 500 ml de agua, echa la polenta en lluvia, añade los champiñones y perejil y cuece removiendo según el paquete. Extiéndela y deja enfriar 45 minutos.", 50),
      S("Corta la polenta en porciones, pásalas por pan rallado mezclado con sésamo y fríelas. Saltea el tomate en dados con el resto de ajos laminados.", 6),
      S("Fríe los huevos y sírvelos con la polenta y el tomate.", 4),
    ],
  }),
  es({
    id: "revuelto-berenjena-setas-polenta", title: "Revuelto de berenjena y setas con polenta",
    baseServings: 4, prepMin: 50, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("huevo", 8, "unit"), I("berenjena", 300, "g"), I("cebolleta", 1, "unit"), I("setas", 250, "g"), I("ajo", 6, "unit"), I("tomates-secos", 50, "g"), I("polenta", 150, "g"), I("sesamo", 5, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Hierve 600 ml de agua, añade la polenta y los tomates secos picados con sal y remueve 1 minuto hasta que espese. Extiéndela, espolvorea sésamo y deja enfriar 40 minutos.", 42),
      S("Pocha la cebolleta y los ajos (frescos) picados, añade las setas en tiras y la berenjena en trocitos con sal y cocina 10 minutos.", 12),
      S("Añade los huevos batidos con perejil y cuaja suavemente. Tuesta la polenta en porciones en la sartén y sirve.", 5),
    ],
  }),
  es({
    id: "tortilla-verduras-hogaza", title: "Tortilla de verduras en hogaza con guacamole",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("huevo", 4, "unit"), I("pan", 400, "g"), I("pimiento", 1, "unit"), I("cebolleta", 2, "unit"), I("aguacate", 1, "unit"), I("tomate", 100, "g"), I("limon", 0.5, "unit"), I("cilantro", 5, "g"), I("aceite", 40, "ml"), I("sal", 4, "g")],
    steps: [
      S("Pocha cebolleta y media y el pimiento rojo pelado en dados con sal.", 10),
      S("Mezcla el aguacate aplastado con el tomate y el resto de cebolleta en daditos, cilantro, zumo de limón y sal.", 4),
      S("Corta 4 rebanadas gruesas de pan de hogaza y sácales la miga entera. Pon las cortezas en la plancha, rellena con las verduras y un huevo batido y cuaja; dales la vuelta con cuidado.", 6),
      S("Sirve con el guacamole."),
    ],
  }),
];
