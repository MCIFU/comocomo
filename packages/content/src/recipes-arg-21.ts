import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 21: pescados, chipirones, calamares y langostinos. */
export const recipesArg21: Recipe[] = [
  es({
    id: "langostinos-salsa-alcachofas-esparragos", title: "Langostinos en salsa con alcachofas y espárragos rebozados",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("langostinos", 400, "g"), I("esparragos-blancos", 400, "g"), I("alcachofa", 8, "unit"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("ajo", 2, "unit"), I("vino-blanco", 50, "ml"), I("harina", 60, "g"), I("huevo", 2, "unit"), I("aceite", 300, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece los espárragos pelados 15 minutos (guarda el agua) y las alcachofas limpias otros 15. Parte las alcachofas por la mitad.", 30),
      S("Pasa las verduras por harina y huevo batido y fríelas.", 8),
      S("Pocha el ajo, la cebolleta y el puerro en daditos, añade una cucharada de harina, el vino y un vaso del agua de los espárragos y cuece 5 minutos.", 10),
      S("Añade los langostinos pelados y salados 2 minutos y sirve con las verduras y perejil.", 2),
    ],
  }),
  es({
    id: "tiras-calamar-setas-azafran", title: "Tiras de calamar empanadas con setas al azafrán y mayonesa negra",
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "medium", equipment: ["sarten", "batidora"],
    ingredients: [I("calamares", 800, "g"), I("setas", 400, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("limon", 0.5, "unit"), I("huevo", 3, "unit"), I("pan-rallado", 150, "g"), I("azafran", 0.1, "g"), I("tinta-calamar", 8, "g"), I("vinagre", 5, "ml"), I("aceite", 500, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Sofríe la cebolleta en juliana y el ajo picado, añade las setas en juliana 5 minutos, el zumo de limón, el azafrán y sal. (El original añade estragón.)", 8),
      S("Limpia los calamares, córtalos en tiras, sécalos, sálalos y pásalos por pan rallado, 2 huevos batidos y otra vez pan rallado.", 10),
      S("Fríelos en aceite abundante hasta dorar.", 5),
      S("Monta el otro huevo con 200 ml de aceite, vinagre, sal y la tinta y sirve con las setas y perejil.", 2),
    ],
  }),
  es({
    id: "chipirones-rellenos-carne", title: "Chipirones rellenos de carne con sofrito y picada",
    origin: "España (Cataluña)",
    baseServings: 4, prepMin: 40, cookMin: 35, difficulty: "hard", equipment: ["olla", "sarten"],
    ingredients: [I("chipirones", 500, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("pan", 30, "g"), I("ternera-picada", 150, "g"), I("cerdo", 150, "g"), I("huevo", 1, "unit"), I("pinones", 40, "g"), I("cebolla", 1, "unit"), I("tomate", 150, "g"), I("vino-blanco", 50, "ml"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha la cebolla picada, añade el tomate rallado y el vino (rancio en el original) y cocina 9 minutos.", 15),
      S("Limpia los chipirones y pica las aletas y patas. Cuece el huevo 10 minutos y pícalo.", 12),
      S("Rehoga la cebolleta y un ajo picados con las patas picadas, añade la carne picada salpimentada, el pan remojado y escurrido, el huevo, 25 g de piñones y perejil. Rellena los chipirones y ciérralos con un palillo.", 10),
      S("Dóralos, añádelos al sofrito con la picada del resto de piñones y el otro ajo majados y un poco de agua, y cuece 15 minutos.", 15),
    ],
  }),
  es({
    id: "gallo-jengibre-cuscus", title: "Gallo al limón y jengibre con cuscús",
    baseServings: 4, prepMin: 30, cookMin: 10, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("gallo", 800, "g"), I("cuscus", 150, "g"), I("tomate-cherry", 200, "g"), I("pinones", 30, "g"), I("ajo", 2, "unit"), I("limon", 1, "unit"), I("jengibre", 10, "g"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Marina los filetes de gallo 15 minutos con el zumo de limón, el ajo picado, jengibre rallado y aceite.", 15),
      S("Tuesta los piñones. Escalda y pela los tomates cherry.", 4),
      S("Hierve 150 ml de agua con sal y un trozo de cáscara de limón, viértela sobre el cuscús, tapa 5 minutos y mézclalo con los piñones y perejil.", 5),
      S("Salpimienta el gallo, hazlo a la plancha 1 minuto por lado y sirve con el cuscús y los tomates.", 3),
    ],
  }),
  es({
    id: "trucha-jamon-crujiente-tomate-seco", title: "Trucha con rulos crujientes de jamón y salsa de tomate seco",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "medium", equipment: ["batidora", "horno", "sarten"],
    ingredients: [I("trucha", 1000, "g"), I("jamon", 60, "g"), I("pasta-brick", 4, "unit"), I("tomates-secos", 60, "g"), I("harina-garbanzo", 60, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Tritura los tomates secos con un buen chorro de aceite.", 2),
      S("Envuelve cada loncha de jamón en una hoja de brick, píntala con aceite y hornéala sobre papel a 190 °C 12 minutos.", 12, 190),
      S("Saca los lomos de las truchas sin espinas, salpimiéntalos, pásalos por la harina de garbanzo y fríelos.", 6),
      S("Sirve con la salsa, el jamón crujiente y perejil."),
    ],
  }),
  es({
    id: "soldaditos-de-pavia", title: "Soldaditos de Pavía",
    origin: "España (Andalucía y Madrid)",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("bacalao", 600, "g"), I("pimiento", 1, "unit"), I("brandy", 30, "ml"), I("huevo", 1, "unit"), I("harina", 150, "g"), I("azafran", 0.1, "g"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Asa el pimiento rojo con aceite y sal en el horno a 180 °C 35 minutos, pélalo y córtalo en tiras.", 35, 180),
      S("Mezcla la harina tamizada con una cucharada de aceite, el azafrán, el aguardiente (o brandy), sal y 200 ml de agua fría. Monta la clara a punto de nieve e incorpórala.", 5),
      S("Corta el bacalao desalado en tiras, pásalas por la masa y fríelas en aceite abundante.", 8),
      S("Sirve con las tiras de pimiento y perejil."),
    ],
  }),
  es({
    id: "bacalao-viana-do-castelo", title: "Bacalao confitado con cebolla, col y patatas al estilo de Viana do Castelo",
    cuisine: "portuguesa", origin: "Portugal",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("bacalao", 600, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("patata", 400, "g"), I("repollo", 0.5, "unit"), I("pan", 100, "g"), I("aceitunas", 50, "g"), I("pimenton", 3, "g"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Confita la cebolla en aros en abundante aceite, añade el bacalao desalado en lomos y el pimentón y confita 10 minutos.", 15),
      S("Cuece las patatas en rodajas 15 minutos y escúrrelas.", 15),
      S("Dora el ajo laminado y saltea la col (repollo) en juliana fina con sal.", 5),
      S("Tuesta en el horno rebanadas finas de pan (de maíz en el original) y sirve todo con las aceitunas negras, el aceite del confitado y perejil.", 4, 200),
    ],
  }),
  es({
    id: "bonito-rebozado-piperrada", title: "Bonito rebozado con piperrada",
    origin: "España (País Vasco)",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("bonito", 600, "g"), I("cebolleta", 3, "unit"), I("tomate", 600, "g"), I("pimiento", 2, "unit"), I("ajo", 4, "unit"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Fríe el ajo laminado, añade las cebolletas y los pimientos verdes en dados y pocha bien. Añade los tomates pelados y troceados con sal y cocina hasta que se deshagan.", 22),
      S("Corta el bonito sin piel ni espina en 8 filetes, salpimienta, pasa por harina y huevo batido y fríelo brevemente.", 5),
      S("Sirve sobre la piperrada con perejil."),
    ],
  }),
  es({
    id: "sardinas-rellenas-verduras-azafran", title: "Sardinas rellenas de tomate seco con verduras al azafrán",
    baseServings: 4, prepMin: 30, cookMin: 30, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("sardinas", 800, "g"), I("tomates-secos", 60, "g"), I("pimiento", 3, "unit"), I("cebolleta", 2, "unit"), I("berenjena", 300, "g"), I("vino-blanco", 50, "ml"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("azafran", 0.1, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha los pimientos (rojo pelado y verdes), las cebolletas y la berenjena en tiras con sal. Añade el azafrán y el vino y cocina hasta que estén tiernas.", 20),
      S("Limpia las sardinas sin cabeza ni espina, sálalas, pon medio tomate seco sobre la mitad y tapa con las otras.", 10),
      S("Pásalas por harina y huevo batido y fríelas.", 6),
      S("Sirve sobre las verduras con perejil."),
    ],
  }),
  es({
    id: "salmon-alioli-gratinado-verduras", title: "Salmón gratinado con alioli, patatas y pimientos",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora", "horno", "sarten"],
    ingredients: [I("salmon", 600, "g"), I("ajo", 5, "unit"), I("tomate-cherry", 200, "g"), I("pimiento", 2, "unit"), I("patata", 500, "g"), I("huevo", 1, "unit"), I("limon", 0.5, "unit"), I("oregano", 1, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas con piel 27 minutos y córtalas en dados. Escalda y pela los tomates cherry.", 28),
      S("Tritura un ajo pequeño con zumo de limón, sal, el huevo y 150 ml de aceite hasta tener alioli.", 2),
      S("Salpimienta las rodajas de salmón, cúbrelas de alioli y hornéalas a 200 °C 5 minutos; gratina 2 minutos.", 7, 200),
      S("Saltea los pimientos verdes en dados con los otros ajos, las patatas, los tomates y orégano, y sirve con perejil.", 6),
    ],
  }),
  es({
    id: "chipirones-rellenos-gambas-salsa", title: "Chipirones rellenos de gambas en salsa de tomate",
    baseServings: 4, prepMin: 30, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("chipirones", 800, "g"), I("gambas", 200, "g"), I("arroz", 25, "g"), I("ajo", 2, "unit"), I("cebolleta", 2, "unit"), I("chalota", 4, "unit"), I("zanahoria", 100, "g"), I("vino-blanco", 150, "ml"), I("tomate", 600, "g"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga el ajo, las cebolletas, las chalotas y la zanahoria picados, añade el vino (txakoli), un hervor y los tomates pera picados; cuece 20 minutos y pasa por el pasapurés.", 25),
      S("Limpia los chipirones. Saltea las gambas troceadas y salpimentadas con los tentáculos y aletas picados, añade el arroz y perejil.", 5),
      S("Rellena los chipirones, ciérralos con un palillo y dóralos.", 5),
      S("Cuécelos en la salsa 10 minutos y sirve.", 10),
    ],
  }),
  es({
    id: "lubina-plancha-tartara-escarola", title: "Lubina a la plancha con salsa tártara y ensalada de escarola",
    note: "El original usa dorada.",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("lubina", 1200, "g"), I("escarola", 1, "unit"), I("rabanitos", 80, "g"), I("ajo", 1, "unit"), I("aceitunas", 30, "g"), I("huevo", 2, "unit"), I("limon", 0.5, "unit"), I("alcaparras", 15, "g"), I("vinagre", 15, "ml"), I("aceite", 260, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece un huevo 10 minutos y pícalo. Monta el otro con zumo de limón, sal y 200 ml de aceite; añade el huevo picado, las alcaparras picadas (y pepinillos) y perejil.", 12),
      S("Prepara la escarola con los rabanitos en gajos, el ajo y las aceitunas negras picados y aliña con aceite, vinagre y sal.", 6),
      S("Saca los lomos de las lubinas, salpimiéntalos y hazlos a la plancha por la piel 3 minutos y 1 por el otro lado.", 4),
      S("Sirve con la salsa tártara y la ensalada."),
    ],
  }),
  es({
    id: "gallo-papillote-champinones-chalotas", title: "Gallo en papillote con ajetes, champiñones y chalotas",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("gallo", 800, "g"), I("champinones", 300, "g"), I("chalota", 12, "unit"), I("ajo", 13, "unit"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Confita las chalotas peladas en aceite con sal 15 minutos.", 15),
      S("Mientras, pon en 4 hojas de aluminio un chorrito de aceite, 3 ajos frescos y 2 filetes de gallo salpimentados, cierra los paquetes y hornéalos a 200 °C 15 minutos."),
      S("Saltea los champiñones laminados con un ajo picado y perejil.", 5),
      S("Sirve el gallo con los champiñones y las chalotas."),
    ],
  }),
  es({
    id: "cazuela-pulpo-patatas", title: "Cazuela de pulpo con patatas",
    note: "El original añade alga espagueti de mar.",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pulpo", 600, "g"), I("patata", 800, "g"), I("ajo", 3, "unit"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("vino-blanco", 100, "ml"), I("laurel", 2, "unit"), I("pimenton", 3, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga el ajo picado, la cebolla y el pimiento verde en dados con sal.", 8),
      S("Añade el pulpo troceado salpimentado, el pimentón, el laurel, el vino y agua hasta cubrir y cuece 25 minutos.", 25),
      S("Añade las patatas partidas por la mitad y cuece 20 minutos más. Sirve con perejil.", 20),
    ],
  }),
  es({
    id: "salmon-encebollado-tomate", title: "Salmón con cebolla caramelizada, tomate y espinacas crujientes",
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("salmon", 700, "g"), I("cebolla", 3, "unit"), I("tomate", 300, "g"), I("espinacas", 40, "g"), I("vino-dulce", 50, "ml"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha las cebollas en juliana fina con sal hasta caramelizar.", 25),
      S("Mientras, fríe las hojas de espinaca en aceite templado hasta que estén crujientes y sálalas."),
      S("Saltea los tomates pelados en daditos a fuego fuerte, sala, añade el vino y reduce.", 4),
      S("Salpimienta el salmón y hazlo a la plancha 2 minutos por lado. Sirve con perejil.", 4),
    ],
  }),
  es({
    id: "merluza-koxkera", title: "Merluza a la koxkera",
    origin: "España (País Vasco)",
    baseServings: 6, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("merluza", 1000, "g"), I("huevo", 2, "unit"), I("almejas", 400, "g"), I("cebolleta", 1, "unit"), I("ajo", 4, "unit"), I("guisantes", 100, "g"), I("esparragos-blancos", 200, "g"), I("harina", 20, "g"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 7, "g")],
    steps: [
      S("Cuece la cabeza y la cola de la merluza con perejil y sal 15 minutos y cuela el fumet. Cuece los huevos 10 minutos.", 15),
      S("Abre las almejas con un poco de aceite y fumet.", 4),
      S("Dora el ajo laminado, pocha la cebolleta picada, añade la harina, 300 ml de fumet y el jugo de las almejas y cuece 5 minutos.", 10),
      S("Añade las rodajas de merluza saladas 5-6 minutos moviendo la cazuela, y al final las almejas, los guisantes, las puntas de espárrago, el huevo en cuartos y perejil.", 6),
    ],
  }),
  es({
    id: "hamburguesas-bacalao-mermelada-calabaza", title: "Hamburguesas de bacalao y patata con mermelada de calabaza",
    baseServings: 4, prepMin: 25, cookMin: 70, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("bacalao", 400, "g"), I("patata", 500, "g"), I("huevo", 1, "unit"), I("ajo", 6, "unit"), I("calabaza", 400, "g"), I("cebolla", 2, "unit"), I("azucar", 60, "g"), I("vino-dulce", 50, "ml"), I("harina", 30, "g"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Escalda las cebollas picadas, añade la calabaza en daditos, el vino y el azúcar y cuece a fuego suave 1 hora. Pasa por el pasapurés.", 60),
      S("Mientras, cuece las patatas 30 minutos y pásalas por el pasapurés. Saltea los ajos frescos en rodajitas con el bacalao desalado desmigado y escúrrelo."),
      S("Mezcla el puré con el bacalao, el huevo y perejil, forma hamburguesas, enharínalas y dóralas por los dos lados.", 8),
      S("Sirve con la mermelada de calabaza."),
    ],
  }),
  es({
    id: "boquerones-cazuela-pan", title: "Boquerones a la cazuela con verduras y pan tostado",
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("boquerones", 1000, "g"), I("pan", 200, "g"), I("ajo", 3, "unit"), I("cebolleta", 4, "unit"), I("pimiento", 1, "unit"), I("vino-blanco", 100, "ml"), I("chile", 1, "unit"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Tuesta 4 rebanadas de pan (hogaza) en el horno.", 6, 200),
      S("Pocha el ajo laminado, las cebolletas y el pimiento verde en dados con la guindilla en aros y sal. Añade el vino (txakoli) y da un hervor.", 12),
      S("Limpia los boquerones sin cabeza ni espina, colócalos sobre las verduras, sala, tapa y cocina 3-4 minutos.", 4),
      S("Sirve sobre el pan con perejil."),
    ],
  }),
  es({
    id: "calamares-patatas-guisantes", title: "Calamares guisados con patatas y guisantes",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("calamares", 900, "g"), I("patata", 500, "g"), I("guisantes", 150, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("brandy", 50, "ml"), I("laurel", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Dora el ajo y la cebolla picados.", 6),
      S("Añade las patatas en rodajas gruesas, los calamares en trozos, el laurel, el brandy, un poco de agua y sal, tapa y cuece 25 minutos (8 en olla rápida).", 25),
      S("Añade los guisantes y cuece 10 minutos más. Sirve con perejil.", 10),
    ],
  }),
  es({
    id: "boquerones-rebozados-piquillos", title: "Boquerones rebozados con piquillos confitados",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("boquerones", 600, "g"), I("pimientos-piquillo", 250, "g"), I("pan", 120, "g"), I("chile", 1, "unit"), I("ajo", 4, "unit"), I("harina", 50, "g"), I("huevo", 3, "unit"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Rehoga 3 ajos laminados, añade los piquillos y la guindilla (alegría riojana) picada, sala y confita 15 minutos a fuego suave.", 15),
      S("Limpia los boquerones abriéndolos sin espina, sálalos y pásalos por harina y huevo batido.", 8),
      S("Fríelos con el otro ajo aplastado, vuelta y vuelta.", 5),
      S("Sirve con los piquillos, pan y perejil."),
    ],
  }),
  es({
    id: "trucha-jamon-judias-verdes", title: "Trucha con jamón al horno y judías verdes salteadas",
    origin: "España (Navarra)",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("trucha", 1000, "g"), I("jamon", 80, "g"), I("judias-verdes", 400, "g"), I("ajo", 2, "unit"), I("chile", 1, "unit"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Abre las truchas, quita la espina central, mete una loncha de jamón en cada una, salpimienta, riega con aceite y hornea a 220 °C 10 minutos.", 10, 220),
      S("Saltea las judías verdes cortadas con la cayena (chile) 5 minutos, añade el ajo picado y saltea 8 minutos más.", 13),
      S("Sirve con perejil."),
    ],
  }),
  es({
    id: "langostinos-al-whisky", title: "Langostinos al whisky",
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("langostinos", 500, "g"), I("ajo", 2, "unit"), I("brandy", 60, "ml"), I("limon", 1.5, "unit"), I("mantequilla", 50, "g"), I("cebollino", 5, "g"), I("aceite", 20, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    note: "El original flambea con whisky; vale cualquier licor seco.",
    steps: [
      S("Sala los langostinos, saltéalos a fuego fuerte y ponlos en una fuente de horno.", 3),
      S("Funde la mantequilla con el ajo laminado, flambea con el licor (whisky o brandy), añade el zumo de un limón y sal.", 3),
      S("Riega los langostinos, espolvorea cebollino y hornéalos a 200 °C 3 minutos. Sirve con medio limón y perejil.", 3, 200),
    ],
  }),
];
