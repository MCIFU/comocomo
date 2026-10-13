import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 1: entrantes y primeras ensaladas. */
export const recipesArg01: Recipe[] = [
  // ——— Entrantes ———
  es({
    id: "tostas-calabacin-pavo-pesto", title: "Tostas de calabacín y pavo al pesto",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("pan", 300, "g"), I("pavo", 175, "g"), I("calabacin", 250, "g"), I("tomate-triturado", 300, "g"), I("ajo", 4, "unit"), I("pinones", 40, "g"), I("parmesano", 50, "g"), I("albahaca", 15, "g"), I("aceite", 50, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta 4 rebanadas grandes de pan y tuéstalas en el horno a 180 °C 7 minutos.", 7, 180),
      S("Corta el calabacín en lonchas al bies y hazlas a la plancha con unas gotas de aceite 2 minutos por lado. Sala.", 6),
      S("Dora el ajo laminado en una sartén con aceite y añade el tomate (mejor tomate pera en trozos) 3 minutos.", 4),
      S("Para el pesto, pica la albahaca, los piñones y el pavo, ralla el parmesano encima y liga con un buen chorro de aceite."),
      S("Cubre las tostas con el calabacín, el tomate y el pesto y gratínalas 3 minutos con el grill.", 3, 220),
    ],
  }),
  es({
    id: "tostas-queso-tapenade", title: "Tostas de queso fresco con tapenade",
    baseServings: 4, prepMin: 15, cookMin: 3, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("pan", 200, "g"), I("queso-fresco", 120, "g"), I("aceitunas", 100, "g"), I("alcaparras", 8, "g"), I("anchoas", 10, "g"), I("pinones", 8, "g"), I("ajo", 0.5, "unit"), I("naranja", 0.5, "unit"), I("perejil", 3, "g", true)],
    steps: [
      S("Tuesta 8 rebanadas de pan.", 3),
      S("Para la tapenade, tritura las aceitunas negras sin hueso con las alcaparras, las anchoas, los piñones, el ajo y el zumo de la naranja hasta tener una pasta.", 2),
      S("Unta las tostadas con la tapenade y pon encima una loncha de queso fresco. Decora con perejil."),
    ],
  }),
  es({
    id: "tostas-pavo-aguacate-cabra", title: "Tostas de pavo, aguacate y queso de cabra",
    baseServings: 4, prepMin: 15, cookMin: 8, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pan", 300, "g"), I("pavo", 175, "g"), I("aguacate", 2, "unit"), I("queso-cabra", 200, "g"), I("rucula", 50, "g"), I("pinones", 25, "g"), I("aceitunas", 40, "g"), I("ajo", 1, "unit"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Tuesta 4 rebanadas grandes de pan en el horno a 200 °C 4 minutos.", 4, 200),
      S("Maja el ajo con las aceitunas negras picadas y un chorrito de aceite y unta las tostas."),
      S("Cubre con el queso de cabra en rodajas y los piñones y vuelve a hornear 4 minutos, hasta que el queso se ablande.", 4, 200),
      S("Pon encima el pavo en lonchas y el aguacate laminado. Sirve con la rúcula aliñada con aceite, vinagre y sal."),
    ],
  }),
  es({
    id: "croquetas-gambas-brick", title: "Croquetas de gambas en pasta brick",
    authenticity: "adapted", note: "El original lleva ajetes tiernos y una salsa de las cabezas de las gambas; aquí, ajo y cebolleta.",
    baseServings: 4, prepMin: 140, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("pasta-brick", 6, "unit"), I("gambas", 400, "g"), I("ajo", 3, "unit"), I("cebolleta", 2, "unit"), I("leche", 500, "ml"), I("harina", 50, "g"), I("perejil", 10, "g"), I("aceite", 400, "ml"), I("sal", 4, "g")],
    steps: [
      S("Pela las gambas y trocea las colas. Rehoga el ajo y la cebolleta picados en un chorrito de aceite 5 minutos y saltea las gambas 1 minuto.", 6),
      S("Añade la harina, rehoga 2 minutos y vierte la leche poco a poco, sin dejar de remover. Cocina 7 minutos, sala y añade el perejil picado.", 9),
      S("Extiende la masa en una fuente, tápala con film a piel y enfríala al menos 2 horas.", 120),
      S("Corta cada hoja de pasta brick por la mitad, pon una porción de masa y envuélvela en paquetito. Fríelos en el aceite a 175 °C 2 minutos, hasta que se doren.", 10, 175),
    ],
  }),
  es({
    id: "baguettes-ensaladilla", title: "Baguettes rellenas de ensaladilla",
    note: "Si tienes pepinillos en vinagre, pica 4 y añádelos: le dan el punto ácido del original.",
    baseServings: 4, prepMin: 45, cookMin: 25, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pan", 500, "g"), I("patata", 250, "g"), I("zanahoria", 100, "g"), I("huevo", 2, "unit"), I("aguacate", 1, "unit"), I("aceitunas", 40, "g"), I("atun-lata", 100, "g"), I("aceite", 180, "ml"), I("vinagre", 10, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece la patata y la zanahoria en agua con sal 25 minutos, y uno de los huevos los primeros 10. Pela y corta todo en dados pequeños.", 25),
      S("Haz una mayonesa con el otro huevo, el vinagre, la sal y el aceite: tritura con la batidora sin moverla del fondo hasta que emulsione.", 2),
      S("Mezcla la patata, la zanahoria, el huevo, el aguacate chafado, las aceitunas picadas y el atún desmenuzado con la mayonesa."),
      S("Corta las puntas del pan (6 baguettes pequeñas), vacíalas de miga y rellénalas con la ensaladilla. Envuélvelas en film y enfría 20 minutos antes de cortarlas en trozos.", 20),
    ],
  }),
  es({
    id: "bocados-queso-azul-nueces", title: "Bocados fritos de queso azul y nueces",
    note: "Como unas croquetas cuadradas de queso: la masa necesita varias horas de nevera.",
    baseServings: 4, prepMin: 220, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("leche", 500, "ml"), I("queso-azul", 100, "g"), I("nueces", 40, "g"), I("cebolleta", 1, "unit"), I("zanahoria", 80, "g"), I("ajo", 2, "unit"), I("harina", 100, "g"), I("mantequilla", 20, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("aceite", 400, "ml"), I("sal", 3, "g")],
    steps: [
      S("Pocha el ajo, la cebolleta y la zanahoria picados en un chorrito de aceite 8 minutos.", 8),
      S("Añade las nueces picadas y el queso azul, luego 50 g de harina, y rehoga 2 minutos. Vierte la leche poco a poco y cocina 7 minutos sin dejar de remover. Sala.", 9),
      S("Pasa la masa a una fuente untada con la mantequilla, cúbrela con film y enfría 3-4 horas.", 210),
      S("Córtala en cuadrados, pásalos por el resto de la harina, el huevo batido y el pan rallado y fríelos a 175 °C hasta que se doren.", 8, 175),
    ],
  }),
  es({
    id: "saquitos-acelgas-puerro", title: "Saquitos de acelgas y puerro con salsa de cebolla",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("pasta-brick", 4, "unit"), I("cebolla", 2, "unit"), I("acelgas", 700, "g"), I("puerro", 2, "unit"), I("anchoas", 20, "g"), I("leche-evaporada", 250, "ml"), I("aceite", 40, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Para la salsa, rehoga la cebolla en juliana en la mitad del aceite 15 minutos. Añade la leche evaporada, salpimienta y cocina 6 minutos.", 21),
      S("Pocha el puerro picado en el resto del aceite 5 minutos, añade las acelgas picadas y rehógalas 5 minutos. Mezcla con las anchoas picadas y deja templar.", 10),
      S("Rellena las hojas de pasta brick, ciérralas en forma de saquito y átalas con hilo de cocina."),
      S("Hornéalos en una bandeja aceitada a 200 °C 5 minutos y sírvelos sobre la salsa.", 5, 200),
    ],
  }),
  es({
    id: "puerros-romesco", title: "Puerros con salsa romesco",
    authenticity: "adapted", note: "El romesco lleva ñoras; aquí se sustituyen por pimentón y pimiento asado.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("puerro", 8, "unit"), I("tomate", 250, "g"), I("pan", 90, "g"), I("ajo", 3, "unit"), I("pimientos-piquillo", 60, "g"), I("almendras", 30, "g"), I("pimenton", 5, "g"), I("chile", 0.25, "unit"), I("aceite", 80, "ml"), I("sal", 5, "g")],
    steps: [
      S("Limpia los puerros quitando las raíces y casi todo lo verde. Cuécelos en agua con sal 18 minutos, según su grosor.", 18),
      S("Remoja la miga de pan en agua y escúrrela. Asa el tomate y los ajos en una sartén 8 minutos, hasta que se tuesten.", 8),
      S("Tritura el tomate, los ajos, el pan, los piquillos, las almendras, el pimentón, el chile, el aceite y la sal hasta tener una salsa espesa.", 2),
      S("Sirve los puerros templados con el romesco por encima."),
    ],
  }),
  es({
    id: "brochetas-queso-kiwi", title: "Brochetas de queso fresco y kiwi con vinagreta de tomate",
    baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy",
    ingredients: [I("queso-fresco", 200, "g"), I("kiwi", 3, "unit"), I("tomate", 150, "g"), I("lechuga", 1, "unit"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Corta el queso fresco y los kiwis pelados en dados de bocado y ensártalos alternos en palillos."),
      S("Ralla el tomate y mézclalo con el aceite, el vinagre y la sal."),
      S("Sirve las brochetas sobre la lechuga y riégalas con la vinagreta de tomate."),
    ],
  }),
  es({
    id: "puerros-vinagreta", title: "Puerros en vinagreta",
    baseServings: 4, prepMin: 15, cookMin: 18, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("puerro", 8, "unit"), I("tomate", 100, "g"), I("huevo", 1, "unit"), I("cebolleta", 1, "unit"), I("pepino", 150, "g"), I("aceite", 60, "ml"), I("vinagre", 20, "ml"), I("sal", 4, "g")],
    steps: [
      S("Limpia los puerros (sin raíces ni parte verde) y cuécelos en agua con sal 15 minutos. Cuece el huevo 10 minutos aparte.", 15),
      S("Para la vinagreta, pica el tomate sin pepitas, el huevo y la cebolleta y mézclalos con el aceite, el vinagre y la sal. Deja reposar 5 minutos."),
      S("Sirve los puerros escurridos con la vinagreta por encima y rodajas finas de pepino alrededor."),
    ],
  }),
  es({
    id: "setas-gratinadas", title: "Setas gratinadas con bechamel",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("setas", 1000, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("leche", 600, "ml"), I("harina", 60, "g"), I("mantequilla", 40, "g"), I("aceite", 30, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha el ajo y la cebolleta picados en el aceite 5 minutos. Añade las setas troceadas, sala y cocina 10 minutos a fuego suave.", 15),
      S("Espolvorea perejil picado, escurre el líquido y reparte las setas en una fuente."),
      S("Haz una bechamel: tuesta la harina en la mantequilla 2 minutos, añade la leche poco a poco y cuece 8 minutos removiendo. Sala.", 10),
      S("Cubre las setas con la bechamel y gratina en el horno a 220 °C 8 minutos, hasta que se dore.", 8, 220),
    ],
  }),
  es({
    id: "tostas-aguacate-anchoas", title: "Tostas de aguacate y anchoas",
    baseServings: 4, prepMin: 10, cookMin: 3, difficulty: "easy",
    ingredients: [I("pan", 200, "g"), I("aguacate", 2, "unit"), I("anchoas", 30, "g"), I("cebollino", 5, "g"), I("aceite", 15, "ml")],
    steps: [
      S("Tuesta 4 rebanadas de pan.", 3),
      S("Cúbrelas con el aguacate en láminas finas y coloca encima 2 anchoas por tosta."),
      S("Termina con cebollino picado y un hilo de aceite."),
    ],
  }),
  es({
    id: "albondigas-patata", title: "Albóndigas de patata y jamón",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("patata", 500, "g"), I("jamon", 150, "g"), I("huevo", 3, "unit"), I("queso", 30, "g"), I("harina", 40, "g"), I("pan-rallado", 80, "g"), I("tomate-triturado", 200, "g"), I("nuez-moscada", 1, "g"), I("aceite", 400, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas con piel en agua con sal 25 minutos. Pélalas y pásalas por el pasapurés.", 25),
      S("Mezcla el puré con el jamón muy picado, 2 yemas, el queso rallado, la nuez moscada, sal y pimienta. Forma bolitas."),
      S("Pásalas por harina, el huevo batido (con las claras) y el pan rallado y fríelas a 175 °C 3 minutos.", 6, 175),
      S("Sírvelas con el tomate calentado 3 minutos aparte.", 3),
    ],
  }),
  es({
    id: "champinones-gambas-plancha", title: "Champiñones a la plancha con gambas",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("champinones", 400, "g"), I("gambas", 300, "g"), I("ajo", 4, "unit"), I("chile", 0.5, "unit"), I("perejil", 10, "g"), I("aceite", 60, "ml"), I("sal", 4, "g")],
    steps: [
      S("Maja el ajo con el chile y una pizca de sal y mézclalo con el aceite y el perejil picado."),
      S("Quita el pie a los champiñones y hazlos en la plancha con el hueco hacia abajo, untados con el majado, 3 minutos por lado.", 6),
      S("Pela las gambas, sálalas y hazlas en la plancha 1 minuto por lado.", 2),
      S("Ensarta en palillos un champiñón y dos gambas y riega con el resto del majado."),
    ],
  }),
  es({
    id: "croquetas-bonito", title: "Croquetas de bonito",
    baseServings: 6, prepMin: 140, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("bonito", 250, "g"), I("leche", 750, "ml"), I("puerro", 1, "unit"), I("zanahoria", 80, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("harina", 125, "g"), I("tomate-triturado", 100, "g"), I("huevo", 2, "unit"), I("pan-rallado", 120, "g"), I("aceite", 500, "ml"), I("sal", 5, "g")],
    steps: [
      S("Infusiona la leche con el puerro picado a fuego suave 7 minutos y cuélala.", 7),
      S("Pocha el ajo, la cebolleta y la zanahoria rallada en un chorrito de aceite 8 minutos. Añade el bonito en dados 2 minutos y 75 g de harina 2 minutos.", 12),
      S("Vierte la leche poco a poco y cocina 7 minutos. Añade el tomate, sala, extiende en una fuente y enfría 2 horas.", 7),
      S("Corta la masa, pásala por el resto de harina, huevo batido y pan rallado y fríe a 175 °C hasta que se dore.", 8, 175),
    ],
  }),
  es({
    id: "aguacates-rellenos-salmon", title: "Aguacates rellenos de salmón ahumado",
    baseServings: 4, prepMin: 20, cookMin: 2, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("aguacate", 4, "unit"), I("salmon-ahumado", 150, "g"), I("escarola", 0.5, "unit"), I("huevo", 1, "unit"), I("aceite", 150, "ml"), I("vinagre", 10, "ml"), I("perejil", 3, "g"), I("sal", 2, "g")],
    steps: [
      S("Haz una mayonesa: tritura el huevo, el vinagre, la sal y el aceite con la batidora sin moverla hasta que emulsione.", 2),
      S("Parte los aguacates, vacíalos con una cuchara y pica la pulpa junto con el salmón ahumado."),
      S("Mézclalos con la mayonesa y rellena las mitades de aguacate. Sírvelos sobre la escarola troceada, con perejil."),
    ],
  }),
  es({
    id: "mejillones-tomate-picante", title: "Mejillones en salsa de tomate picante",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("mejillones", 1000, "g"), I("vino-blanco", 100, "ml"), I("tomate", 600, "g"), I("puerro", 1, "unit"), I("cebolla", 1, "unit"), I("pimientos-piquillo", 60, "g"), I("chile", 0.5, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 3, "g")],
    steps: [
      S("Pocha el puerro y la cebolla picados en el aceite 10 minutos. Añade los piquillos, el tomate troceado y el chile y cocina 18 minutos.", 28),
      S("Mientras, limpia los mejillones y ábrelos en una cazuela tapada con el vino, 4 minutos. Quita una concha a cada uno.", 4),
      S("Tritura la salsa, sálala y cuélala si quieres. Baña los mejillones con ella y espolvorea perejil.", 2),
    ],
  }),
  es({
    id: "fritura-cerveza", title: "Fritura variada en masa de cerveza",
    authenticity: "adapted", note: "El original incluye chuletillas de cordero ya asadas; aquí, gambas, calamares y verduras.",
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("gambas", 300, "g"), I("calamares", 300, "g"), I("calabacin", 200, "g"), I("huevo", 2, "unit"), I("harina", 200, "g"), I("levadura-quimica", 6, "g"), I("cerveza", 330, "ml"), I("limon", 1, "unit"), I("aceite", 600, "ml"), I("sal", 5, "g")],
    steps: [
      S("Monta las claras a punto de nieve, añade la harina, las yemas, la levadura y la cerveza fría con una pizca de sal. Deja reposar la masa 30 minutos.", 30),
      S("Pela las gambas, corta los calamares en anillas y el calabacín en bastones. Sala."),
      S("Pásalo todo por la masa y fríe en tandas a 180 °C 2-3 minutos, hasta que esté dorado.", 12, 180),
      S("Escurre y sirve con limón."),
    ],
  }),
  es({
    id: "cestas-primavera", title: "Cestas de habas, guisantes y setas con salsa verde",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten", "horno", "batidora"],
    ingredients: [I("pasta-brick", 4, "unit"), I("habas", 200, "g"), I("guisantes", 450, "g"), I("setas", 200, "g"), I("jamon", 50, "g"), I("patata", 250, "g"), I("harina", 5, "g"), I("aceite", 30, "ml"), I("sal", 5, "g")],
    steps: [
      S("Para la salsa, cuece 250 g de guisantes con la patata en dados en 600 ml de agua con sal 15 minutos y tritura con un chorrito de aceite.", 15),
      S("Cuece las habas y el resto de guisantes 5 minutos. Saltea el jamón en taquitos con el resto del aceite, añade la harina y las setas troceadas y rehoga 5 minutos con las habas y los guisantes.", 10),
      S("Rellena las hojas de pasta brick, ciérralas como un saquito y hornéalas a 200 °C 6 minutos, hasta que se doren.", 6, 200),
      S("Sirve las cestas sobre la salsa de guisantes caliente."),
    ],
  }),
  es({
    id: "croquetas-pollo-jamon", title: "Croquetas de pollo y jamón",
    note: "La receta perfecta para aprovechar el pollo del cocido o de un asado.",
    baseServings: 6, prepMin: 140, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("jamon", 100, "g"), I("pollo", 200, "g"), I("leche", 1000, "ml"), I("mantequilla", 100, "g"), I("harina", 150, "g"), I("huevo", 3, "unit"), I("pan-rallado", 150, "g"), I("perejil", 5, "g"), I("aceite", 500, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece un huevo 10 minutos y pícalo. Usa pollo ya cocinado y pícalo junto al jamón.", 10),
      S("Funde la mantequilla, rehoga el jamón y el pollo, añade 100 g de harina y tuéstala 2 minutos. Vierte la leche poco a poco y cuece 9 minutos sin dejar de remover.", 11),
      S("Añade el huevo picado y el perejil, extiende en una fuente, tapa con film a piel y enfría 2 horas.", 120),
      S("Forma las croquetas, pásalas por harina, los otros 2 huevos batidos y pan rallado, y fríelas a 175 °C hasta que se doren.", 8, 175),
    ],
  }),
  es({
    id: "saquitos-morcilla-pera", title: "Saquitos de morcilla y pera con crema de col",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten", "horno", "batidora"],
    ingredients: [I("pasta-brick", 8, "unit"), I("morcilla", 350, "g"), I("pera", 1, "unit"), I("repollo", 0.25, "unit"), I("cebolleta", 2, "unit"), I("nata", 250, "ml"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Saltea la col (repollo) en juliana con un chorrito de aceite 5 minutos, añade la nata, sala y cocina 15 minutos. Tritura y reserva.", 20),
      S("Pocha la cebolleta picada 6 minutos y añade la pera en dados 2 minutos.", 8),
      S("Quita la piel a la morcilla, desmígala y mézclala con la cebolleta y la pera 3 minutos.", 3),
      S("Rellena las hojas de pasta brick, átalas como saquitos y hornéalas a 190 °C 9 minutos. Sírvelas sobre la crema de col.", 9, 190),
    ],
  }),
  es({
    id: "champinones-salsa-vino", title: "Champiñones guisados en salsa de vino",
    baseServings: 4, prepMin: 10, cookMin: 45, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("champinones", 800, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("harina", 15, "g"), I("chile", 0.25, "unit"), I("vino-blanco", 200, "ml"), I("pan", 120, "g"), I("aceite", 80, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Rehoga la cebolla y el ajo picados en la mitad del aceite 6 minutos.", 6),
      S("Añade los champiñones enteros y limpios, la harina y el chile; rehoga 2 minutos y vierte el vino. Sala, espolvorea perejil y cocina tapado a fuego lento 35 minutos.", 37),
      S("Fríe rebanadas de pan en el resto del aceite 2 minutos y sírvelas con los champiñones.", 2),
    ],
  }),
  es({
    id: "pimientos-adobados-champinones", title: "Pimientos asados en adobo con champiñones",
    note: "Mejor de un día para otro: el adobo necesita tiempo.",
    baseServings: 4, prepMin: 500, cookMin: 45, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("pimiento", 4, "unit"), I("champinones", 200, "g"), I("vinagre", 100, "ml"), I("azucar", 40, "g"), I("laurel", 2, "unit"), I("aceite", 40, "ml"), I("sal", 4, "g")],
    steps: [
      S("Asa los pimientos rojos untados de aceite y sal en el horno a 190 °C 40 minutos. Deja que se templen, pélalos y córtalos en tiras, guardando su jugo.", 40, 190),
      S("Saltea los champiñones laminados en el resto del aceite 4 minutos.", 4),
      S("Mezcla los pimientos, su jugo y los champiñones con el laurel, el azúcar (mejor moreno), la sal y el vinagre.", 1),
      S("Deja reposar en la nevera toda la noche.", 480),
    ],
  }),
  es({
    id: "croquetas-salmon", title: "Croquetas de salmón",
    baseServings: 6, prepMin: 140, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("salmon", 200, "g"), I("salmon-ahumado", 100, "g"), I("leche", 750, "ml"), I("harina", 140, "g"), I("huevo", 3, "unit"), I("pan-rallado", 120, "g"), I("aceite", 500, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Trocea el salmón fresco, salpimiéntalo y cocínalo en un chorrito de aceite 3 minutos. Desmenúzalo.", 3),
      S("En la misma cazuela, con un poco más de aceite, tuesta 90 g de harina 2 minutos y añade la leche poco a poco. Cuece 9 minutos removiendo.", 11),
      S("Añade los dos salmones (el ahumado picado) y, fuera del fuego, una yema. Extiende la masa y enfríala 2 horas.", 120),
      S("Forma las croquetas, pásalas por el resto de harina, huevo batido y pan rallado y fríelas a 175 °C hasta que se doren.", 8, 175),
    ],
  }),
  // ——— Ensaladas ———
  es({
    id: "ensaladilla-salmon-aguacate", title: "Ensaladilla de patata con salmón y aguacate",
    note: "El salmón fresco se «cocina» en zumo de limón; usa pescado congelado previamente para evitar el anisakis.",
    baseServings: 4, prepMin: 40, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("patata", 500, "g"), I("salmon", 200, "g"), I("salmon-ahumado", 150, "g"), I("aguacate", 1, "unit"), I("lechuga", 1, "unit"), I("cebolleta", 1, "unit"), I("huevo", 2, "unit"), I("limon", 1, "unit"), I("aceite", 50, "ml"), I("vinagre", 15, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece las patatas 25 minutos y los huevos 10. Enfría, pela y trocea.", 25),
      S("Corta el salmón fresco sin piel en dados y marínalo en el zumo de limón 25 minutos. Escúrrelo.", 25),
      S("Mezcla la patata, el huevo, los dos salmones (el ahumado picado), el aguacate y la cebolleta en dados. Aliña con aceite, vinagre y sal."),
      S("Sirve sobre la lechuga aliñada."),
    ],
  }),
  es({
    id: "ensalada-champinones-calabacin", title: "Ensalada de champiñones, calabacín y calamar con vinagreta de piñones",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "medium", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("calabacin", 400, "g"), I("champinones", 350, "g"), I("calamares", 250, "g"), I("ajo", 2, "unit"), I("tomate-cherry", 150, "g"), I("granada", 1, "unit"), I("limon", 1, "unit"), I("pinones", 25, "g"), I("tomillo", 1, "g"), I("aceite", 70, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Escalda los calamares en anillas 1 minuto en agua con sal y alíñalos con un ajo picado, perejil, aceite y unas gotas de limón.", 1),
      S("Hornea el calabacín en rodajas con aceite y sal a 210 °C 5 minutos. Saltea los champiñones laminados con el otro ajo 4 minutos.", 9, 210),
      S("Para la vinagreta, tuesta los piñones en seco 2 minutos, májalos y mézclalos con el tomillo, el zumo de medio limón, aceite y sal.", 2),
      S("Monta los platos con el calabacín, los champiñones, los cherry partidos, los calamares y los granos de granada, y aliña."),
    ],
  }),
  es({
    id: "ensalada-lentejas-langostinos", title: "Ensalada templada de lentejas y langostinos",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("lentejas", 200, "g"), I("langostinos", 300, "g"), I("esparragos-verdes", 250, "g"), I("zanahoria", 200, "g"), I("ajo", 2, "unit"), I("harina", 75, "g"), I("vinagre", 20, "ml"), I("aceite", 300, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece las lentejas en agua con sal a fuego suave 25 minutos, que queden enteras. Escúrrelas.", 25),
      S("Cuece los espárragos en trozos (reserva las puntas), la zanahoria en bastones y el ajo laminado 4 minutos. Mézclalos con las lentejas.", 4),
      S("Pela los langostinos. Saltea las cabezas y cáscaras en un poco de aceite 2 minutos, aplástalas en un colador y mezcla el jugo con 50 ml de aceite y el vinagre.", 2),
      S("Reboza los langostinos en la harina mezclada con agua fría y fríelos a 180 °C 2 minutos. Sirve las lentejas aliñadas con la vinagreta, los langostinos y las puntas.", 4, 180),
    ],
  }),
  es({
    id: "ensalada-otonal-alubias", title: "Ensalada otoñal de alubias, judías verdes y queso fresco",
    authenticity: "adapted", note: "El original usa pochas frescas; con alubias blancas cocidas es igual de buena.",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("alubias-blancas", 400, "g"), I("judias-verdes", 400, "g"), I("jamon-cocido", 100, "g"), I("tomate", 150, "g"), I("cebolleta", 1, "unit"), I("queso-fresco", 100, "g"), I("aceite", 50, "ml"), I("vinagre", 15, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece las judías verdes en trozos en agua hirviendo con sal 7 minutos, escúrrelas y alíñalas con parte del aceite, el vinagre y la sal.", 7),
      S("Mezcla las alubias escurridas con el jamón cocido en dados, el tomate pelado y picado, la cebolleta picada, el perejil y el resto del aliño."),
      S("Sirve las alubias a un lado y las judías al otro, con lonchas de queso fresco."),
    ],
  }),
  es({
    id: "ensalada-arroz-mayonesa-aguacate", title: "Ensalada de arroz y pollo con mayonesa de aguacate",
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("arroz", 200, "g"), I("pollo", 400, "g"), I("lechuga", 2, "unit"), I("maiz", 100, "g"), I("tomates-secos", 40, "g"), I("aguacate", 0.5, "unit"), I("huevo", 1, "unit"), I("limon", 0.5, "unit"), I("cilantro", 10, "g"), I("aceite", 200, "ml"), I("vinagre", 10, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece el arroz en agua con sal 18 minutos, refréscalo y escúrrelo. A la vez, cuece los muslos de pollo 20 minutos y desmígalos.", 20),
      S("Mezcla el arroz con el pollo, los tomates secos en dados, el maíz y el cilantro picado."),
      S("Para la mayonesa, tritura el huevo, el vinagre, la sal y el aceite hasta que emulsione y añade el aguacate.", 2),
      S("Liga la ensalada con la mayonesa y sírvela en hojas de cogollo (lechuga), con unas gotas de limón."),
    ],
  }),
  es({
    id: "ensalada-endibias-ahumado-naranja", title: "Ensalada de endibias, pescado ahumado y naranja",
    note: "El original usa trucha ahumada; con salmón ahumado queda igual.",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("endibia", 4, "unit"), I("salmon-ahumado", 100, "g"), I("patata", 500, "g"), I("huevo", 2, "unit"), I("zanahoria", 150, "g"), I("naranja", 2, "unit"), I("pan", 80, "g"), I("nueces", 40, "g"), I("aceite", 70, "ml"), I("vinagre", 15, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece las patatas 25 minutos y los huevos 10. Corta las patatas en rodajas y pica los huevos.", 25),
      S("Corta las endibias en juliana, ralla la zanahoria, saca los gajos de naranja y trocea el salmón ahumado."),
      S("Fríe el pan en dados y luego las nueces en un poco de aceite, 3 minutos. Mezcla ese aceite con el vinagre y la sal.", 3),
      S("Monta las rodajas de patata y, encima, la zanahoria, las endibias, el pescado, la naranja, las nueces, el huevo y los picatostes. Aliña."),
    ],
  }),
  es({
    id: "endibias-rellenas-salmon", title: "Endibias rellenas de salmón ahumado y manzana",
    baseServings: 4, prepMin: 20, cookMin: 12, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("endibia", 3, "unit"), I("salmon-ahumado", 250, "g"), I("huevo", 2, "unit"), I("cebolleta", 1, "unit"), I("manzana", 1, "unit"), I("sesamo", 10, "g"), I("mostaza", 10, "g"), I("limon", 0.5, "unit"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 2, "g")],
    steps: [
      S("Cuece los huevos 10 minutos, enfríalos y pícalos. Tuesta el sésamo en seco 2 minutos.", 12),
      S("Bate la mostaza con el zumo de limón, el aceite, el perejil picado y la sal."),
      S("Mezcla el salmón y la cebolleta picados, la manzana en dados y el huevo con la mitad de la vinagreta."),
      S("Rellena las hojas de endibia, riégalas con el resto y espolvorea el sésamo."),
    ],
  }),
  es({
    id: "ensalada-tomate-asado-salmon", title: "Ensalada de tomate asado, pimientos y salmón con aliño de yogur",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("tomate", 600, "g"), I("pimiento", 3, "unit"), I("acelgas", 200, "g"), I("salmon-ahumado", 200, "g"), I("albahaca", 5, "g"), I("ajo", 1, "unit"), I("mostaza", 10, "g"), I("yogur", 1, "unit"), I("vinagre", 15, "ml"), I("aceite", 60, "ml"), I("sal", 4, "g")],
    steps: [
      S("Corta los tomates en gajos, sálalos, riégalos con aceite y hornéalos a 200 °C 6 minutos.", 6, 200),
      S("Saltea los pimientos verdes en rodajas 4 minutos. Saltea las pencas de las acelgas en bastones 8 minutos y añade las hojas 3 minutos más.", 15),
      S("Para el aliño, bate la albahaca picada con el vinagre, la mitad del yogur, el ajo picado, una cucharada de agua, el aceite, la sal y la mostaza."),
      S("Monta las acelgas, el tomate, los pimientos y el salmón ahumado en tiras, y aliña."),
    ],
  }),
];
