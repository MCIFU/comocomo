import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 23: últimos pescados y mariscos. */
export const recipesArg23: Recipe[] = [
  es({
    id: "brochetas-rape-langostinos-crema-marisco", title: "Brochetas de rape y langostinos con crema de mejillones",
    baseServings: 4, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("rape", 500, "g"), I("langostinos", 300, "g"), I("mejillones", 600, "g"), I("esparragos-verdes", 200, "g"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("puerro", 1, "unit"), I("caldo", 1000, "ml"), I("aceite", 50, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Abre los mejillones al vapor y quítales la concha. Pocha la cebolla, la zanahoria y el puerro en dados, añade el caldo (de pescado) y la mitad de los mejillones, cuece 20 minutos, tritura y cuela.", 28),
      S("Saltea los espárragos en trozos de 4 cm con el resto de mejillones.", 4),
      S("Ensarta en 8 brochetas los langostinos pelados y el rape en dados, salpimiéntalas y hazlas a la plancha.", 5),
      S("Sirve las brochetas sobre la crema con los espárragos."),
    ],
  }),
  es({
    id: "chipirones-rellenos-brandy-gambas", title: "Chipirones en salsa al brandy con gambas y espárragos",
    baseServings: 4, prepMin: 25, cookMin: 45, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("chipirones", 500, "g"), I("gambas", 150, "g"), I("cebolla", 3, "unit"), I("esparragos-blancos", 150, "g"), I("ajo", 4, "unit"), I("brandy", 40, "ml"), I("caldo", 500, "ml"), I("harina", 10, "g"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha las cebollas en daditos hasta que estén bien doradas.", 15),
      S("Limpia los chipirones, rellénalos con sus patas, sálalos y fríelos brevemente con los ajos enteros. Pásalos a la cazuela, flambea con el brandy y añade la harina.", 8),
      S("Vierte el caldo (de pescado) y cuece a fuego suave 30 minutos.", 30),
      S("Añade las gambas peladas y las puntas de espárrago 2 minutos y sirve con perejil.", 2),
    ],
  }),
  es({
    id: "carpaccio-bonito-eneldo", title: "Carpaccio de bonito con limón y cebolleta",
    note: "El original usa atún fresco. Usa pescado que haya estado congelado al menos 5 días (anisakis).",
    baseServings: 4, prepMin: 25, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("bonito", 300, "g"), I("cebolleta", 1, "unit"), I("limon", 1, "unit"), I("cebollino", 5, "g"), I("aceite", 40, "ml"), I("sal", 2, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta el bonito en lonchas muy finas y extiéndelas en los platos. Salpimienta y riega con el aceite y el zumo de limón.", 10),
      S("Espolvorea el cebollino picado (eneldo en el original) y la cebolleta en juliana fina y deja macerar 15 minutos.", 15),
    ],
  }),
  es({
    id: "merluza-rellena-marisco", title: "Merluza rellena de marisco en salsa",
    baseServings: 4, prepMin: 30, cookMin: 40, difficulty: "hard", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("merluza", 900, "g"), I("mejillones", 300, "g"), I("gambas", 200, "g"), I("puerro", 2, "unit"), I("zanahoria", 100, "g"), I("ajo", 6, "unit"), I("cebolla", 3, "unit"), I("vino-blanco", 100, "ml"), I("harina", 15, "g"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saca los lomos de la merluza. Cuece la cabeza y espina con lo verde de los puerros, las cáscaras de las gambas y perejil 18 minutos y cuela. Abre los mejillones con el vino (txakoli) y añade su jugo al caldo.", 22),
      S("Pocha los puerros, los ajos frescos y la zanahoria muy picados, añade los mejillones y las gambas picados y salpimienta.", 10),
      S("Rellena un lomo con la mezcla, tapa con el otro, átalo y hornéalo a 200 °C 12 minutos.", 12, 200),
      S("Pocha las cebollas (rojas) picadas, añade la harina y el caldo y reduce 8 minutos. Sirve la merluza en rodajas con la salsa.", 10),
    ],
  }),
  es({
    id: "rape-asado-vinagre-brocoli", title: "Colas de rape asadas con ajada de vinagre y brócoli",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("rape", 800, "g"), I("brocoli", 1, "unit"), I("ajo", 3, "unit"), I("vinagre", 100, "ml"), I("pimenton", 2, "g"), I("aceite", 200, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Maja los ajos con sal y perejil, añade el vinagre, 200 ml de aceite y el pimentón.", 5),
      S("Sala las colas de rape con su espina, riégalas con el majado y ásalas en el horno a 180 °C 20 minutos, dándoles la vuelta cada 5 (añade agua si se secan).", 20, 180),
      S("Mientras, cuece el brócoli en ramilletes 11 minutos y sirve junto al rape con su salsa."),
    ],
  }),
  es({
    id: "rape-verduras-patatas-horno", title: "Rape al horno con verduras, patatas y costra de ajo y perejil",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("rape", 800, "g"), I("patata", 600, "g"), I("cebolleta", 2, "unit"), I("calabacin", 250, "g"), I("pimiento", 1, "unit"), I("ajo", 3, "unit"), I("pan-rallado", 40, "g"), I("vino-blanco", 100, "ml"), I("oregano", 1, "g"), I("tomillo", 1, "g"), I("romero", 1, "g"), I("pimenton", 2, "g"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Fríe las patatas en rodajas con sal, el orégano, el tomillo y el romero y escúrrelas en una fuente de horno.", 15),
      S("Rehoga las cebolletas, el calabacín y el pimiento rojo pelado en dados 10 minutos con sal, añade el pimentón y la mitad del vino y ponlo sobre las patatas.", 12),
      S("Haz un corte junto a la espina de las colas de rape, salpimiéntalas, colócalas encima, cúbrelas con el pan rallado mezclado con el ajo y perejil picados y riega con el resto del vino y aceite.", 5),
      S("Ásalo en el horno a 200 °C 15 minutos.", 15, 200),
    ],
  }),
  es({
    id: "rollitos-trucha-jamon-rucula", title: "Rollitos de trucha con jamón y espinacas al limón",
    note: "El original los acompaña con berros y reboza con arroz inflado.",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("trucha", 1000, "g"), I("espinacas", 300, "g"), I("jamon", 120, "g"), I("huevo", 3, "unit"), I("harina", 40, "g"), I("pan-rallado", 40, "g"), I("ajo", 1, "unit"), I("limon", 1, "unit"), I("aceite", 300, "ml"), I("sal", 5, "g")],
    steps: [
      S("Saca los lomos de las truchas, sálalos, pon encima una loncha de jamón, enróllalos y sujétalos con un palillo.", 10),
      S("Escalda las espinacas (o berros) 1-2 minutos y escúrrelas.", 3),
      S("Pasa los rollitos por harina y por los huevos batidos con el pan rallado y fríelos.", 6),
      S("Rehoga el ajo picado sin que se dore, añade el zumo de limón y las espinacas y sirve con la trucha.", 3),
    ],
  }),
  es({
    id: "frito-mixto-del-mar", title: "Fritura de pescado y chipirones con gambas al ajillo",
    origin: "España (Andalucía)",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("boquerones", 300, "g"), I("chipirones", 300, "g"), I("gambas", 250, "g"), I("ajo", 1, "unit"), I("harina", 100, "g"), I("limon", 1, "unit"), I("aceite", 500, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Limpia los boquerones y los chipirones; corta los cuerpos en anillas y los tentáculos por la mitad. Sala y enharina.", 12),
      S("Fríe por tandas en abundante aceite muy caliente y escurre.", 10),
      S("Dora el ajo laminado y saltea las gambas peladas y saladas.", 2),
      S("Sirve con limón y perejil."),
    ],
  }),
  es({
    id: "caballa-papillote-calabaza-soja", title: "Caballa en papillote con verduras y crema de calabaza a la soja",
    note: "El original usa sabirones.",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "medium", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("caballa", 800, "g"), I("esparragos-verdes", 150, "g"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("calabacin", 200, "g"), I("calabaza", 200, "g"), I("cebolleta", 1, "unit"), I("soja", 20, "ml"), I("aceite", 40, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora la cebolleta en dados, añade la calabaza picada, la soja y un vaso de agua y cuece 10 minutos. Tritura.", 15),
      S("Corta los espárragos y los puerros en juliana, la zanahoria en tiras con el pelador y el calabacín en rodajas.", 6),
      S("Reparte las verduras en 4 hojas de aluminio, pon encima los lomos de caballa salpimentados, riega con aceite, cierra y hornea a 200 °C 10 minutos.", 10, 200),
      S("Sirve con la crema de calabaza."),
    ],
  }),
  es({
    id: "caballa-cazuela-verduras", title: "Cazuela de caballa con verduras",
    note: "El original usa verdel y espesa con tapioca.",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("caballa", 800, "g"), I("arroz", 25, "g"), I("tomate", 150, "g"), I("calabacin", 250, "g"), I("puerro", 1, "unit"), I("cebolleta", 1, "unit"), I("ajo", 3, "unit"), I("laurel", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saca los lomos de las caballas. Cuece las cabezas y espinas con lo verde de la cebolleta y el puerro en 1,5 litros de agua con sal 10 minutos y cuela.", 12),
      S("Rehoga el puerro, el ajo y la cebolleta en daditos, añade el tomate rallado, el laurel y el calabacín en cuartos de luna.", 8),
      S("Añade el arroz, cubre con el caldo y cuece 10 minutos.", 10),
      S("Añade los lomos de caballa salpimentados, cuece 2 minutos y sirve con perejil.", 2),
    ],
  }),
  es({
    id: "bacalao-crujiente-verduras-plancha", title: "Bastones de bacalao crujiente con verduras a la plancha",
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("bacalao", 500, "g"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("pimiento", 2, "unit"), I("calabacin", 250, "g"), I("soja", 20, "ml"), I("harina", 120, "g"), I("levadura-quimica", 8, "g"), I("huevo", 2, "unit"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Mezcla la harina tamizada con la levadura, los huevos y 150 ml de agua y deja reposar 30 minutos.", 30),
      S("Corta los puerros y los pimientos verdes en tiras finas y el calabacín y las zanahorias en cintas con el pelador. Hazlos en la plancha con aceite y sal y riégalos con la soja.", 8),
      S("Corta el bacalao desalado y seco en bastones, pásalos por la masa y fríelos.", 6),
      S("Sirve con las verduras y perejil."),
    ],
  }),
  es({
    id: "merluza-crema-acelgas", title: "Merluza frita con crema de acelgas y pencas rebozadas",
    note: "El original usa maruca.",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("merluza", 800, "g"), I("acelgas", 500, "g"), I("ajo", 3, "unit"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Separa las pencas de las hojas de las acelgas. Cuece las hojas picadas con un chorrito de aceite y sal 15 minutos y tritúralas.", 17),
      S("Cuece las pencas sin hilos en trozos 15 minutos, pásalas por harina y huevo y fríelas.", 20),
      S("Salpimienta los filetes de merluza y fríelos con los ajos aplastados.", 6),
      S("Sirve el pescado sobre la crema con las pencas y perejil."),
    ],
  }),
  es({
    id: "calamar-plancha-salsa-negra-alioli", title: "Calamar a la plancha con salsa negra y mayonesa de ajo",
    note: "El original usa sepia.",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("calamares", 800, "g"), I("ajo", 3, "unit"), I("cebolleta", 2, "unit"), I("tomate-triturado", 250, "g"), I("vino-blanco", 50, "ml"), I("tinta-calamar", 8, "g"), I("huevo", 1, "unit"), I("limon", 0.5, "unit"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Rehoga 2 ajos y las cebolletas en dados, añade el vino, un hervor, el tomate y la tinta, reduce 15 minutos y pasa por el pasapurés.", 22),
      S("Tritura el huevo con sal, el zumo de limón, el otro ajo y 200 ml de aceite hasta ligar.", 2),
      S("Corta el calamar en tiras y hazlo en la plancha muy caliente 2 minutos. Sala y espolvorea perejil.", 3),
      S("Sirve con las dos salsas."),
    ],
  }),
  es({
    id: "merluza-horno-cebolla-queso", title: "Merluza al horno con cebolla y queso",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("merluza", 800, "g"), I("cebolla", 2, "unit"), I("queso", 60, "g"), I("mantequilla", 25, "g"), I("caldo", 250, "ml"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Pocha las cebollas en daditos hasta dorar, añade la mitad del caldo (de pescado) y sal y cuece 5 minutos.", 18),
      S("Unta una fuente con la mantequilla, pon las rodajas de merluza saladas sobre la cebolla, vierte el resto del caldo y espolvorea el queso rallado.", 3),
      S("Hornea a 200 °C 8 minutos y sirve con perejil.", 8, 200),
    ],
  }),
  es({
    id: "mejillones-rebozados-tomate", title: "Mejillones rebozados con tomate y patatas",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("mejillones", 1000, "g"), I("patata", 400, "g"), I("vino-blanco", 100, "ml"), I("tomate-triturado", 400, "g"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Abre los mejillones limpios con el vino, tapados, y quítales la concha.", 5),
      S("Pásalos por harina y huevo batido y fríelos.", 6),
      S("Fríe las patatas en dados y sálalas.", 8),
      S("Calienta el tomate y sirve los mejillones encima con las patatas y perejil.", 3),
    ],
  }),
  es({
    id: "merluza-rellena-salmon-espinacas", title: "Merluza rellena de salmón y espinacas sobre patatas panadera",
    baseServings: 6, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("merluza", 1200, "g"), I("salmon", 250, "g"), I("espinacas", 60, "g"), I("pimiento", 1, "unit"), I("cebolleta", 2, "unit"), I("patata", 500, "g"), I("ajo", 2, "unit"), I("vino-blanco", 200, "ml"), I("caldo", 250, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 7, "g")],
    steps: [
      S("Pon en una fuente el pimiento verde y las cebolletas en juliana, el ajo laminado y las patatas en rodajas finas; sala, añade el vino, aceite y el caldo y hornea a 180 °C 30 minutos.", 30, 180),
      S("Escalda las espinacas 30 segundos.", 2),
      S("Abre la merluza sin espina, sálala, cúbrela con las espinacas y el salmón en tiras, ciérrala y átala.", 8),
      S("Ponla sobre las patatas y hornea 18 minutos más. Sirve en rodajas con perejil.", 18, 180),
    ],
  }),
  es({
    id: "bacalao-fresco-pastelillos-espinacas", title: "Bacalao fresco con flanes de espinacas y gambas",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "batidora", "horno", "sarten"],
    ingredients: [I("bacalao", 800, "g"), I("espinacas", 300, "g"), I("gambas", 150, "g"), I("ajo", 9, "unit"), I("tomate", 150, "g"), I("huevo", 2, "unit"), I("leche", 125, "ml"), I("harina", 10, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Escalda las espinacas, escúrrelas bien y pícalas. Tritura un ajo con los huevos, la leche, sal y pimienta y mézclalo con las espinacas.", 8),
      S("Reparte en 4 moldes untados y enharinados, añade 3 gambas peladas a cada uno y hornéalos al baño maría a 180 °C 15 minutos.", 15, 180),
      S("Saltea los ajos frescos en trozos y el tomate en dados.", 5),
      S("Salpimienta el bacalao fresco y hazlo a la plancha. Sirve con los flanes desmoldados, el salteado y perejil.", 6),
    ],
  }),
  es({
    id: "merluza-marinera-mejillones", title: "Merluza a la marinera con mejillones",
    note: "El original usa mero.",
    baseServings: 4, prepMin: 10, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("merluza", 800, "g"), I("cebolleta", 1, "unit"), I("ajo", 3, "unit"), I("mejillones", 400, "g"), I("harina", 10, "g"), I("pimenton", 2, "g"), I("vino-blanco", 125, "ml"), I("caldo", 250, "ml"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga el ajo y la cebolleta picados, añade la harina, el pimentón, el vino y el caldo y cuece 5 minutos removiendo.", 10),
      S("Añade las rodajas de merluza salpimentadas y los mejillones limpios, tapa y cuece hasta que se abran y el pescado esté hecho.", 7),
      S("Sirve con perejil."),
    ],
  }),
  es({
    id: "merluza-panaderas-almejas", title: "Merluza con patatas panadera y almejas",
    note: "El original usa pescadilla.",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("merluza", 700, "g"), I("patata", 500, "g"), I("almejas", 300, "g"), I("ajo", 2, "unit"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("tomate", 300, "g"), I("vino-blanco", 100, "ml"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Sofríe el ajo picado con los tomates rallados y sal 7 minutos.", 8),
      S("Fríe la cebolleta en juliana gruesa, el pimiento verde y las patatas en medias lunas con sal 15 minutos. Retira el aceite.", 15),
      S("Añade el vino (txakoli), el tomate, las almejas y la merluza en raciones salpimentadas, tapa y cocina hasta que se abran las almejas.", 6),
      S("Sirve con perejil."),
    ],
  }),
];
