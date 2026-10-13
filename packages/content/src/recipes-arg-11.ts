import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 11: empanadas, quiches, crepes, panes salados y primeras sopas. */
export const recipesArg11: Recipe[] = [
  es({
    id: "empanadillas-setas-bacalao", title: "Empanadillas de setas y bacalao con salsa de puerro asado",
    note: "El original usa bacalao ahumado.",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["horno", "batidora", "sarten"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("setas", 500, "g"), I("bacalao", 125, "g"), I("puerro", 1, "unit"), I("pimiento", 1, "unit"), I("cebolleta", 1, "unit"), I("aceite", 450, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Asa el puerro y el pimiento rojo picados con aceite y sal en el horno a 190 °C 22 minutos. Tritura y cuela.", 22, 190),
      S("Pocha la cebolleta picada, añade las setas picadas y cocina 10 minutos. Fuera del fuego, añade el bacalao desalado y picado.", 13),
      S("Rellena las obleas, ciérralas con un tenedor y fríelas a fuego suave hasta que se doren.", 8),
      S("Sírvelas con la salsa y perejil."),
    ],
  }),
  es({
    id: "quiche-brocoli-almejas", title: "Quiche de brócoli y almejas",
    note: "El original usa berberechos.",
    baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "medium", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("brocoli", 1, "unit"), I("almejas", 300, "g"), I("vino-blanco", 50, "ml"), I("ajo", 2, "unit"), I("harina", 5, "g"), I("huevo", 4, "unit"), I("leche-evaporada", 100, "ml"), I("aceite", 20, "ml"), I("perejil", 5, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Forra un molde con la masa, cúbrela con papel y legumbres secas y hornea a 180 °C 15 minutos. Retira el peso.", 15, 180),
      S("Cuece el brócoli en ramilletes al vapor 10 minutos. Abre las almejas con el vino, quítales la concha y cuela el caldo.", 10),
      S("Rehoga el ajo picado, añade la harina y el caldo de las almejas. Bate los huevos con la leche evaporada, salpimienta y añade la salsa, el brócoli, las almejas y perejil.", 5),
      S("Vierte sobre la base y hornea a 180 °C 20 minutos, hasta que cuaje; gratina 2 minutos al final.", 22, 180),
    ],
  }),
  es({
    id: "pan-jamon-queso-aceitunas", title: "Pan salado de jamón, queso y tomates secos con aceitunas aliñadas",
    baseServings: 6, prepMin: 75, cookMin: 50, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("jamon-cocido", 175, "g"), I("queso", 250, "g"), I("harina", 225, "g"), I("levadura-quimica", 16, "g"), I("huevo", 3, "unit"), I("tomates-secos", 50, "g"), I("pinones", 25, "g"), I("ajo", 2, "unit"), I("tomillo", 1, "g"), I("aceitunas", 250, "g"), I("cebolla", 1, "unit"), I("vinagre", 15, "ml"), I("pimenton", 2, "g"), I("aceite", 170, "ml"), I("sal", 4, "g")],
    steps: [
      S("Aplasta un poco las aceitunas negras y alíñalas con aceite, el vinagre, el pimentón y la cebolla en trozos. Deja macerar al menos 1 hora.", 60),
      S("Calienta 125 ml de aceite con los ajos machacados y el tomillo a fuego suave 5 minutos y cuélalo.", 5),
      S("Bate los huevos con sal, el aceite aromatizado y 50 ml de agua; añade la harina con la levadura tamizadas, los tomates secos, el jamón cocido y el queso (el original usa camembert) en trozos y los piñones.", 5),
      S("Vierte en un molde untado y enharinado y hornea a 180 °C 45 minutos. Sírvelo en rebanadas con las aceitunas.", 45, 180),
    ],
  }),
  es({
    id: "crepes-jamon-queso-frambuesa", title: "Crepes de jamón y queso con vinagreta de frambuesas",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["sarten", "batidora"],
    ingredients: [I("jamon-cocido", 175, "g"), I("queso", 160, "g"), I("frutos-rojos", 200, "g"), I("cebolleta", 1, "unit"), I("ajo", 1, "unit"), I("vinagre", 15, "ml"), I("huevo", 3, "unit"), I("harina", 150, "g"), I("leche", 250, "ml"), I("nuez-moscada", 1, "g"), I("aceite", 70, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Pocha la cebolleta y el ajo picados con sal. Mézclalos con las frambuesas aplastadas, el vinagre y un buen chorro de aceite.", 8),
      S("Tritura los huevos con la harina, la leche, una cucharada de aceite, nuez moscada y sal; añade perejil picado.", 2),
      S("Haz los crepes en una sartén untada de aceite, dándoles la vuelta cuando cuajen.", 12),
      S("Rellena cada crepe con jamón cocido y queso, dóblalo, caliéntalo 1 minuto en la sartén para que se funda y sirve con la vinagreta.", 3),
    ],
  }),
  es({
    id: "empanada-bacalao", title: "Empanada de bacalao",
    note: "Con dos láminas de masa compradas.",
    baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("masa-hojaldre", 550, "g"), I("bacalao", 650, "g"), I("pimiento", 2, "unit"), I("cebolla", 2, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 100, "ml"), I("tomate-triturado", 200, "g"), I("huevo", 1, "unit"), I("pimenton", 4, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Pocha el ajo, la cebolla y los pimientos verdes en daditos 15 minutos.", 15),
      S("Añade el bacalao desalado y desmigado, el pimentón y el vino, da un hervor y añade el tomate 5 minutos. Escurre y deja templar.", 8),
      S("Extiende una masa sobre la bandeja con papel, rellena, tapa con la otra y cierra los bordes. Pinta con huevo batido.", 5),
      S("Hornea a 180 °C 30 minutos y sirve con perejil.", 30, 180),
    ],
  }),
  es({
    id: "empanadillas-morcilla-manzana-pure-berza", title: "Empanadillas de morcilla y manzana con puré de berza",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["olla", "batidora", "sarten", "horno"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("morcilla", 250, "g"), I("manzana", 1, "unit"), I("cebolleta", 1, "unit"), I("puerro", 2, "unit"), I("repollo", 0.5, "unit"), I("patata", 150, "g"), I("huevo", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece la berza (repollo) con la patata en trozos en agua con sal 15 minutos, tritura y añade un chorrito de aceite.", 15),
      S("Pocha la cebolleta y los puerros en daditos 8 minutos, añade la manzana pelada en dados 4 minutos y mézclalos con el interior de la morcilla.", 12),
      S("Rellena 8 obleas, tápalas con las otras 8 (forma de ovni), sella los bordes y píntalas con huevo.", 5),
      S("Hornea a 190 °C 12 minutos y sírvelas sobre el puré con perejil.", 12, 190),
    ],
  }),
  es({
    id: "canelones-frios-bonito", title: "Canelones fríos de bonito con vinagreta de pepinillo y aceituna",
    baseServings: 4, prepMin: 25, cookMin: 12, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("laminas-lasana", 200, "g"), I("atun-lata", 200, "g"), I("cebolleta", 1, "unit"), I("huevo", 1, "unit"), I("aceitunas", 40, "g"), I("tomate", 150, "g"), I("vinagre", 20, "ml"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece las láminas 11 minutos y escúrrelas sobre un paño.", 11),
      S("Haz una mayonesa con el huevo, sal, vinagre y 150 ml de aceite, triturando con la batidora, y mézclala con la cebolleta picada y el bonito (atún) desmigado.", 2),
      S("Rellena y enrolla los canelones."),
      S("Aliña con una vinagreta de tomate picado, aceitunas negras picadas (o tapenade), aceite, vinagre y sal, y perejil. (El original añade pepinillos.)"),
    ],
  }),
  es({
    id: "crepes-pavo-queso-salsa-lechuga", title: "Crepes de tomate con pavo y queso y salsa de lechuga",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("pavo", 160, "g"), I("queso", 160, "g"), I("cebolleta", 1, "unit"), I("aceitunas", 80, "g"), I("lechuga", 1, "unit"), I("huevo", 3, "unit"), I("harina", 150, "g"), I("leche", 250, "ml"), I("tomate-triturado", 20, "g"), I("mantequilla", 10, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Rehoga la cebolleta picada, añade las aceitunas verdes picadas y la lechuga en juliana, 150 ml de agua y cuece 9 minutos. Tritura y sala.", 12),
      S("Tritura los huevos con la harina, la leche, el tomate, el aceite y sal.", 2),
      S("Haz los crepes en una sartén con un poco de mantequilla, 30 segundos por el segundo lado.", 10),
      S("Rellena cada crepe con una loncha de pavo y otra de queso, enróllalo y sírvelo con la salsa y perejil."),
    ],
  }),
  es({
    id: "milhojas-champinones-filo", title: "Milhojas crujiente de champiñones con salsa de espárragos",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "sarten", "horno"],
    ingredients: [I("pasta-brick", 5, "unit"), I("champinones", 1000, "g"), I("esparragos-verdes", 300, "g"), I("patata", 150, "g"), I("cebolleta", 2, "unit"), I("ajo", 4, "unit"), I("chile", 0.25, "unit"), I("mantequilla", 30, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Rehoga los espárragos picados (reserva 8 puntas) y la patata en trozos, cubre con agua, sala y cuece 11 minutos. Tritura.", 13),
      S("Pocha la cebolleta y el ajo picados con el chile, añade los champiñones laminados, sala y cocina hasta que se evapore el agua. Retira el chile.", 12),
      S("Corta las hojas de pasta filo por la mitad, píntalas con mantequilla fundida y alterna 2 hojas y una capa de champiñones en una bandeja, terminando en masa.", 5),
      S("Hornea a 190 °C 10 minutos y sirve con la salsa y las puntas de espárrago a la plancha.", 10, 190),
    ],
  }),
  es({
    id: "quiche-puerros-gambas", title: "Tartaletas de puerros y gambas",
    baseServings: 4, prepMin: 80, cookMin: 50, difficulty: "medium", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("harina", 200, "g"), I("mantequilla", 100, "g"), I("huevo", 3, "unit"), I("puerro", 6, "unit"), I("gambas", 300, "g"), I("cebolla", 1, "unit"), I("nata", 200, "ml"), I("aceite", 20, "ml"), I("perejil", 3, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Amasa la harina con la mantequilla blanda, un huevo, 2 cucharadas de agua y sal. Reposa 1 hora en la nevera.", 60),
      S("Estira y forra 4 moldes, pon papel y legumbres secas encima y hornea a 180 °C 20 minutos. Retira el peso.", 20, 180),
      S("Cuece los puerros picados 8 minutos y escúrrelos. Pocha la cebolla picada y saltea las gambas peladas 1 minuto.", 10),
      S("Bate 2 huevos con la nata, salpimienta, añade el puerro, la cebolla y las gambas, rellena las bases y hornea a 180 °C 18 minutos. Sirve con perejil.", 18, 180),
    ],
  }),
  es({
    id: "brazo-gitano-salado-espinacas", title: "Brazo de gitano salado de espinacas relleno de pavo, setas y queso",
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "medium", equipment: ["batidora", "horno", "sarten"],
    ingredients: [I("espinacas", 150, "g"), I("harina", 100, "g"), I("levadura-quimica", 6, "g"), I("huevo", 3, "unit"), I("pavo", 120, "g"), I("setas", 300, "g"), I("queso-crema", 250, "g"), I("ajo", 2, "unit"), I("albahaca", 5, "g"), I("aceite", 200, "ml"), I("vinagre", 5, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Tritura las espinacas con 2 cucharadas de aceite y 2 yemas, añade la harina y la levadura y sal. Monta las 2 claras e incorpóralas con movimientos envolventes.", 8),
      S("Extiende la masa fina sobre papel en la bandeja y hornea a 180 °C 5 minutos. Tápala con un paño y deja enfriar.", 5, 180),
      S("Dora el ajo picado y saltea las setas picadas 5 minutos, con sal. Mézclalas con el queso crema y la albahaca en juliana. Haz una mayonesa con el otro huevo, vinagre, sal y el resto del aceite.", 8),
      S("Unta el bizcocho con una capa fina de mayonesa, cubre con el pavo y el relleno, enróllalo y enfríalo 20 minutos antes de cortarlo. Sirve con perejil.", 20),
    ],
  }),
  es({
    id: "empanadillas-huerta-salsa-queso", title: "Empanadillas de la huerta con salsa de queso azul",
    baseServings: 4, prepMin: 90, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("zanahoria", 100, "g"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("champinones", 150, "g"), I("harina", 25, "g"), I("leche", 450, "ml"), I("queso-azul", 75, "g"), I("aceite", 450, "ml"), I("perejil", 3, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha la zanahoria y la cebolleta en dados, el pimiento verde picado y los champiñones laminados 7 minutos. Salpimienta.", 7),
      S("Añade la harina y 250 ml de leche poco a poco y cocina 5 minutos removiendo. Enfría la masa 1 hora.", 65),
      S("Rellena las obleas, ciérralas con un tenedor y fríelas hasta que se doren.", 8),
      S("Calienta el resto de la leche con el queso azul (el original usa roquefort) hasta que se funda y sírvela con las empanadillas y perejil.", 5),
    ],
  }),
  es({
    id: "quiche-remolacha-esparragos", title: "Tarta salada de remolacha y espárragos verdes al curry",
    baseServings: 6, prepMin: 25, cookMin: 55, difficulty: "medium", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("remolacha", 400, "g"), I("esparragos-verdes", 250, "g"), I("puerro", 1, "unit"), I("huevo", 4, "unit"), I("escarola", 1, "unit"), I("ajo", 1, "unit"), I("jengibre", 3, "g"), I("curry", 2, "g"), I("aceite", 50, "ml"), I("vinagre", 15, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Forra un molde con la masa quebrada, cubre con papel y legumbres secas y hornea a 190 °C 15 minutos. Retira el peso.", 15, 190),
      S("Cuece la parte dura de los espárragos con el puerro en 500 ml de agua con sal hasta que queden 250 ml de caldo (unos 15 minutos). Cuélalo.", 15),
      S("Coloca la remolacha cocida en medias lunas sobre la base y los espárragos hechos a la plancha. Bate los huevos con el caldo, el jengibre, el curry, sal y pimienta y vierte.", 5),
      S("Hornea a 180 °C 25 minutos. Sirve con la escarola aliñada con el ajo picado, aceite, vinagre y sal.", 25, 180),
    ],
  }),
  es({
    id: "coques-calfo", title: "Coques a la calfó (cocas de escalivada, atún y huevo)",
    origin: "España (Cataluña)",
    baseServings: 4, prepMin: 25, cookMin: 45, difficulty: "medium", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("harina-maiz", 75, "g"), I("harina", 250, "g"), I("aceite", 100, "ml"), I("pimiento", 1, "unit"), I("huevo", 2, "unit"), I("tomate", 150, "g"), I("atun-lata", 300, "g"), I("anchoas", 40, "g"), I("ajo", 1, "unit"), I("sal", 5, "g")],
    steps: [
      S("Asa el pimiento rojo con aceite y sal en el horno a 180 °C 27 minutos, pélalo y córtalo en tiras. Cuece los huevos 10 minutos y pícalos.", 27, 180),
      S("Hierve 350 ml de agua con 60 ml de aceite y sal, añade de golpe las dos harinas (de maíz y de trigo) y remueve hasta tener una masa. Deja reposar, forma 10 bolas y aplánalas.", 8),
      S("Cocina las cocas en la sartén caliente por los dos lados hasta que se doren, 3 minutos por lado.", 12),
      S("Cúbrelas con el tomate rallado con ajo y sal, el pimiento, el atún, el huevo y las anchoas.", 2),
    ],
  }),
  es({
    id: "quiche-calabacin-beicon", title: "Quiche de calabacín, puerro y beicon con ensalada de melocotón",
    baseServings: 6, prepMin: 20, cookMin: 60, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("calabacin", 300, "g"), I("beicon", 120, "g"), I("puerro", 2, "unit"), I("huevo", 2, "unit"), I("leche-evaporada", 400, "ml"), I("nuez-moscada", 1, "g"), I("rucula", 100, "g"), I("melocoton", 1, "unit"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 5, "g")],
    steps: [
      S("Forra un molde con la masa (brisa), cubre con papel y legumbres secas y hornea a 180 °C 25 minutos. Retira el peso.", 25, 180),
      S("Rehoga el puerro y el calabacín picados con sal 8 minutos y añade el beicon picado 2 minutos.", 10),
      S("Bate los huevos con la leche evaporada, sal y nuez moscada, mezcla con las verduras, vierte en la base y hornea a 180 °C 25 minutos.", 25, 180),
      S("Sirve con la rúcula (el original usa berros) y el melocotón en dados aliñados con aceite, vinagre y sal."),
    ],
  }),
  es({
    id: "empanada-filo-morcilla-calabaza", title: "Empanada de pasta filo con morcilla, calabaza y manzana",
    baseServings: 4, prepMin: 25, cookMin: 45, difficulty: "medium", equipment: ["sarten", "batidora", "horno"],
    ingredients: [I("pasta-brick", 6, "unit"), I("morcilla", 250, "g"), I("calabaza", 200, "g"), I("manzana", 3, "unit"), I("ajo", 4, "unit"), I("pinones", 50, "g"), I("leche-evaporada", 250, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Pocha el ajo picado (el original usa ajetes) y la calabaza en dados 15 minutos. Tuesta los piñones.", 15),
      S("Saltea una manzana en dados con el interior de la morcilla 3 minutos y mézclalo todo.", 4),
      S("Cocina las otras 2 manzanas troceadas 8 minutos y tritúralas con la leche evaporada y sal para la salsa.", 9),
      S("Monta capas de pasta filo pintadas con aceite, rellena, cierra y hornea a 190 °C 15 minutos. Sirve con la salsa caliente y perejil.", 15, 190),
    ],
  }),
  es({
    id: "crepes-berenjena-queso-pavo", title: "Crepes rellenos de berenjena, queso y pavo",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["sarten", "batidora"],
    ingredients: [I("berenjena", 300, "g"), I("queso", 160, "g"), I("pavo", 160, "g"), I("tomate", 150, "g"), I("cebolleta", 1, "unit"), I("aceitunas", 30, "g"), I("huevo", 3, "unit"), I("harina", 150, "g"), I("leche", 250, "ml"), I("aceite", 80, "ml"), I("vinagre", 10, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Mezcla el tomate pelado, las aceitunas verdes y la cebolleta muy picados con aceite, vinagre y sal.", 3),
      S("Tritura los huevos con la harina, la leche, 2 cucharadas de aceite, sal y perejil picado y haz los crepes en una sartén untada.", 12),
      S("Corta la berenjena en lonchas de 1 cm, sálalas y hazlas a la plancha con aceite 3 minutos por lado.", 8),
      S("Rellena cada crepe con berenjena, una loncha de queso y otra de pavo, dóblalo, caliéntalo 1 minuto y sírvelo con la vinagreta.", 4),
    ],
  }),
  es({
    id: "tarta-almejas-calabaza", title: "Tarta salada de almejas y calabaza asada",
    baseServings: 6, prepMin: 25, cookMin: 65, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("almejas", 300, "g"), I("calabaza", 800, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("harina", 75, "g"), I("leche", 500, "ml"), I("huevo", 3, "unit"), I("jengibre", 5, "g"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Asa la calabaza en dados con jengibre rallado, sal y aceite en el horno a 190 °C 25 minutos. A la vez, hornea la masa (brisa) en un molde con papel y legumbres secas 25 minutos.", 25, 190),
      S("Abre las almejas al vapor, pica la carne y guarda el jugo.", 4),
      S("Pocha la cebolleta y el ajo picados, añade la harina, la leche y el jugo poco a poco y cuece 6 minutos. Fuera del fuego, añade las almejas, perejil y los huevos batidos.", 10),
      S("Pon la calabaza sobre la base, cubre con la crema y hornea a 180 °C 20 minutos.", 20, 180),
    ],
  }),
  es({
    id: "obleas-calabacin-langostinos", title: "Empanadillas al horno de calabacín y langostinos",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("calabacin", 300, "g"), I("langostinos", 300, "g"), I("cebolleta", 1, "unit"), I("ajo", 1, "unit"), I("huevo", 1, "unit"), I("sesamo", 15, "g"), I("lechuga", 1, "unit"), I("aceite", 60, "ml"), I("vinagre", 10, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Pocha la cebolleta y el calabacín en daditos 10 minutos con sal.", 10),
      S("Pela los langostinos y saltea las cabezas en aceite; aplástalas y cuela el aceite. Saltea las colas con el ajo picado 1 minuto.", 5),
      S("Pon farsa y 2 langostinos sobre 8 obleas, tapa con otras 8, sella, pinta con huevo y espolvorea sésamo. Hornea a 190 °C 10 minutos.", 10, 190),
      S("Sírvelas con la lechuga aliñada con el aceite de langostinos, vinagre y sal, y perejil."),
    ],
  }),
  es({
    id: "empanada-iscos-chorizo", title: "Empanada de chorizo y panceta (empanada de iscos)",
    origin: "España (Asturias)", note: "La masa se amasa con el aceite rojo del relleno, que le da color y sabor. El original lleva harina de centeno.",
    baseServings: 4, prepMin: 90, cookMin: 45, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("chorizo", 200, "g"), I("panceta", 100, "g"), I("cebolla", 2, "unit"), I("puerro", 1, "unit"), I("pimiento", 0.5, "unit"), I("pimenton", 4, "g"), I("harina", 650, "g"), I("levadura", 12, "g"), I("huevo", 1, "unit"), I("aceite", 300, "ml"), I("sal", 12, "g")],
    steps: [
      S("Pocha la cebolla, el puerro y el pimiento rojo en dados en abundante aceite hasta que estén transparentes, 15 minutos. Añade la panceta en tiras, el chorizo en rodajas y el pimentón 3 minutos. Cuela y guarda el aceite.", 18),
      S("Amasa la harina con la levadura desmenuzada, la sal, 150 ml del aceite reservado y 150 ml de agua templada. Deja levar 1 hora.", 70),
      S("Divide la masa en dos, estira una base, cubre con el relleno, tapa con la otra y cierra los bordes. Pinta con huevo batido.", 8),
      S("Hornea a 190 °C 30 minutos y píntala con un poco más del aceite rojo al salir.", 30, 190),
    ],
  }),
  es({
    id: "pan-calabacin-beicon", title: "Pan salado de calabacín y beicon con ensalada",
    baseServings: 6, prepMin: 20, cookMin: 45, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("calabacin", 500, "g"), I("ajo", 6, "unit"), I("beicon", 150, "g"), I("tomillo", 1, "g"), I("huevo", 3, "unit"), I("harina", 250, "g"), I("levadura-quimica", 16, "g"), I("pimenton", 3, "g"), I("lechuga", 1, "unit"), I("queso", 200, "g"), I("tomate-triturado", 150, "g"), I("vinagre", 15, "ml"), I("cebollino", 5, "g"), I("aceite", 170, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Saltea el ajo en trozos (el original usa ajetes) y el calabacín en daditos 6 minutos, añade el beicon y el tomillo.", 8),
      S("Bate los huevos con sal, 125 ml de aceite y 50 ml de agua; añade la levadura, el pimentón y 225 g de harina tamizados y el salteado.", 4),
      S("Vierte en un molde untado y enharinado y hornea a 180 °C 32 minutos.", 32, 180),
      S("Sirve con la lechuga aliñada con aceite, vinagre y cebollino, el queso en tacos y el tomate caliente, con perejil.", 3),
    ],
  }),
  es({
    id: "crepes-puerro-queso", title: "Crepes de puerro y queso con crema de calabaza",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "sarten", "horno"],
    ingredients: [I("puerro", 4, "unit"), I("queso", 100, "g"), I("calabaza", 250, "g"), I("patata", 150, "g"), I("leche", 500, "ml"), I("huevo", 2, "unit"), I("harina", 200, "g"), I("mantequilla", 10, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece la patata y la calabaza en poca agua con sal 15 minutos y tritura.", 15),
      S("Pocha los puerros en juliana con aceite 10 minutos.", 10),
      S("Tritura la leche, los huevos, la mantequilla, la harina, perejil y sal y haz los crepes en una sartén untada.", 12),
      S("Rellena con el puerro y el queso, dóblalos, gratínalos en el horno 3 minutos y sírvelos sobre la crema.", 3, 220),
    ],
  }),
  es({
    id: "tartaletas-avena-verduras", title: "Tartaletas de avena con verduras y queso",
    baseServings: 4, prepMin: 80, cookMin: 40, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("avena", 100, "g"), I("harina", 100, "g"), I("queso", 200, "g"), I("calabacin", 250, "g"), I("cebolla", 1, "unit"), I("pimiento", 2, "unit"), I("tomate", 150, "g"), I("ajo", 3, "unit"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Amasa los copos de avena con la harina, 2 cucharadas de aceite, 175 ml de agua y sal. Reposa 1 hora.", 60),
      S("Estira 4 bases, forra moldes de tartaleta, cubre con papel y legumbres secas y hornea a 180 °C 22 minutos.", 22, 180),
      S("Pocha el ajo, la cebolla, los pimientos (verde y rojo), el calabacín y el tomate en dados 12 minutos con sal.", 12),
      S("Rellena las tartaletas, cubre con el queso y gratina en el horno 4 minutos. Sirve con perejil.", 4, 220),
    ],
  }),
  es({
    id: "noquis-calabaza-ragu", title: "Ñoquis de calabaza con ragú de carne",
    cuisine: "italiana", origin: "Italia (versión de Arguiñano)",
    baseServings: 4, prepMin: 40, cookMin: 45, difficulty: "hard", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("calabaza", 300, "g"), I("harina", 350, "g"), I("huevo", 2, "unit"), I("ternera", 200, "g"), I("salchichas", 150, "g"), I("cebolleta", 2, "unit"), I("zanahoria", 200, "g"), I("apio", 60, "g"), I("champinones", 100, "g"), I("tomate-triturado", 400, "g"), I("caldo", 200, "ml"), I("oregano", 1, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 7, "g")],
    steps: [
      S("Pocha la cebolleta, la zanahoria y el apio en daditos con los champiñones laminados. Añade la carne de las salchichas y la ternera en dados, el orégano, el tomate y el caldo y cocina 18 minutos.", 25),
      S("Cuece la calabaza en agua con sal 15 minutos, escúrrela muy bien y tritúrala con las 2 claras. Añade la harina poco a poco hasta tener una masa que no se pegue.", 18),
      S("Forma rulos, córtalos en trocitos y márcalos con un tenedor.", 10),
      S("Cuécelos en agua hirviendo con sal hasta que floten, 2-3 minutos, y sírvelos con el ragú y perejil.", 3),
    ],
  }),
  es({
    id: "canelones-verano-esparragos-setas", title: "Canelones de verano con espárragos, setas y guisantes",
    baseServings: 6, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("laminas-lasana", 250, "g"), I("esparragos-blancos", 250, "g"), I("esparragos-verdes", 250, "g"), I("puerro", 1, "unit"), I("ajo", 4, "unit"), I("setas", 300, "g"), I("guisantes", 250, "g"), I("maicena", 8, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las láminas según el paquete y escúrrelas.", 11),
      S("Pocha los espárragos verdes en cilindros, los blancos picados y el puerro en daditos con sal. Saltea aparte el ajo en trozos con las setas troceadas.", 12),
      S("Cuece los guisantes 5 minutos en 400 ml de agua con sal y tritúralos; liga con la maicena disuelta para la salsa.", 6),
      S("Rellena los canelones con las verduras y las setas, salpimienta y sírvelos con la salsa de guisantes caliente y perejil."),
    ],
  }),
  es({
    id: "sopa-arroz-almejas", title: "Sopa de arroz con almejas",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("almejas", 400, "g"), I("arroz", 100, "g"), I("puerro", 1, "unit"), I("zanahoria", 200, "g"), I("caldo", 1500, "ml"), I("azafran", 0.1, "g"), I("aceite", 30, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Rehoga el puerro y la zanahoria picados con el aceite y sal 5 minutos. Añade el arroz y, cuando tome color, el azafrán.", 7),
      S("Añade el caldo (mejor de ave), tapa y cuece 15 minutos.", 15),
      S("Añade las almejas, deja hervir hasta que se abran y espolvorea perejil.", 3),
    ],
  }),
  es({
    id: "sopa-fria-pepino-sandia", title: "Sopas frías de pepino y de sandía con apio relleno",
    baseServings: 4, prepMin: 140, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("pepino", 400, "g"), I("sandia", 1000, "g"), I("apio", 120, "g"), I("queso-azul", 150, "g"), I("pan", 50, "g"), I("aceitunas", 30, "g"), I("caldo", 250, "ml"), I("aceite", 30, "ml"), I("vinagre", 10, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Tritura la sandía pelada y troceada y enfríala en la nevera.", 3),
      S("Remoja la miga de pan en el caldo (de verduras) y tritúrala con los pepinos (uno pelado y otro con piel), vinagre, sal y aceite. Enfría al menos 2 horas las dos sopas.", 120),
      S("Rellena trozos de apio con el queso azul (en crema) y pica las aceitunas negras.", 5),
      S("Sirve las dos sopas en el mismo plato, con las aceitunas, el apio relleno y perejil."),
    ],
  }),
];
