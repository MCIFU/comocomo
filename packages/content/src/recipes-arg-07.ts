import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

const RAPIDA = "Versión rápida con legumbre cocida de bote; si la usas seca, ponla a remojo la víspera y cuécela antes.";

/** Arguiñano, bloque 7: legumbres. */
export const recipesArg07: Recipe[] = [
  es({
    id: "alubias-salchichas-calabaza", title: "Alubias blancas con salchichas y crema de calabaza",
    note: RAPIDA,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("alubias-blancas", 800, "g"), I("salchichas", 400, "g"), I("calabaza", 200, "g"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("ajo", 2, "unit"), I("aceite", 30, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Pocha el ajo, el puerro y la cebolleta picados con la calabaza en dados 8 minutos. Tritura con un poco de agua.", 9),
      S("Pon el puré en la olla con las alubias escurridas y agua hasta cubrir; sala y cuece a fuego suave 12 minutos.", 12),
      S("Dora las salchichas a la plancha 8 minutos, córtalas por la mitad y añádelas. Espolvorea perejil.", 8),
    ],
  }),
  es({
    id: "alubias-coles-gratinadas", title: "Alubias con patatas y coles de Bruselas gratinadas a la provenzal",
    note: RAPIDA,
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("alubias-blancas", 600, "g"), I("patata", 300, "g"), I("coles-bruselas", 250, "g"), I("cebolla", 1, "unit"), I("zanahoria", 200, "g"), I("ajo", 3, "unit"), I("pan-rallado", 40, "g"), I("pimenton", 3, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha la cebolla picada, añade el pimentón, las alubias escurridas y agua hasta cubrir y sala.", 8),
      S("Añade la zanahoria y las patatas en trozos y las coles de Bruselas limpias y cuece 15 minutos.", 15),
      S("Mezcla el pan rallado con el ajo y el perejil picados y una cucharada de aceite.", 1),
      S("Reparte el guiso en cazuelitas, cubre con la provenzal y gratina en el horno 5 minutos, hasta que se forme costra.", 5, 220),
    ],
  }),
  es({
    id: "alubias-bunuelos-calabacin", title: "Alubias con boniato y buñuelos de calabacín y espinacas",
    note: RAPIDA,
    baseServings: 4, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("alubias-blancas", 700, "g"), I("boniato", 300, "g"), I("calabaza", 200, "g"), I("cebolleta", 2, "unit"), I("calabacin", 250, "g"), I("espinacas", 30, "g"), I("ajo", 2, "unit"), I("harina", 200, "g"), I("huevo", 2, "unit"), I("leche", 150, "ml"), I("levadura-quimica", 10, "g"), I("pimenton", 3, "g"), I("aceite", 400, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha las cebolletas picadas, añade el boniato y la calabaza en dados, las alubias escurridas, el pimentón y agua hasta cubrir. Salpimienta y cuece 15 minutos.", 18),
      S("Ralla el calabacín, sálalo y escúrrelo bien. Mezcla los huevos, la leche, la levadura y la harina, y añade el ajo y las espinacas picados y el calabacín.", 5),
      S("Fríe cucharadas de masa en el aceite a 175 °C 3 minutos y escurre.", 10, 175),
      S("Sirve las alubias con perejil picado y los buñuelos."),
    ],
  }),
  es({
    id: "hamburguesas-garbanzo-polenta", title: "Hamburguesas de garbanzo y polenta con ensalada de escarola",
    baseServings: 4, prepMin: 70, cookMin: 15, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("garbanzos-cocidos", 400, "g"), I("polenta", 150, "g"), I("cebolleta", 1, "unit"), I("zanahoria", 100, "g"), I("escarola", 1, "unit"), I("sesamo", 15, "g"), I("aceite", 60, "ml"), I("vinagre", 15, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Pasa los garbanzos por el pasapurés.", 3),
      S("Hierve 300 ml de agua con sal, añade la polenta removiendo y, cuando espese, el puré, la zanahoria y la cebolleta ralladas. Cocina 4 minutos sin parar de remover.", 6),
      S("Extiende la masa en una bandeja, deja que endurezca 1 hora y corta 12 hamburguesas.", 60),
      S("Dóralas en una sartén con muy poco aceite y espolvoréalas con el sésamo tostado y perejil. Sírvelas con la escarola aliñada con aceite, vinagre y sal.", 8),
    ],
  }),
  es({
    id: "garbanzos-acelgas", title: "Garbanzos con acelgas y pimiento",
    note: RAPIDA,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("garbanzos-cocidos", 700, "g"), I("acelgas", 500, "g"), I("pimiento", 1, "unit"), I("cebolleta", 1, "unit"), I("ajo", 4, "unit"), I("caldo", 400, "ml"), I("laurel", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Rehoga la cebolleta y el ajo picados en el aceite 5 minutos. Añade el pimiento rojo en daditos y las acelgas picadas, sala y cocina 10 minutos.", 15),
      S("Añade los garbanzos escurridos, el laurel y el caldo y deja hervir 5 minutos.", 5),
      S("Sirve con perejil."),
    ],
  }),
  es({
    id: "lentejas-calabacin-morcilla", title: "Lentejas con calabacín a la plancha y morcilla",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("lentejas", 300, "g"), I("calabacin", 300, "g"), I("zanahoria", 200, "g"), I("puerro", 2, "unit"), I("morcilla", 250, "g"), I("ajo", 6, "unit"), I("laurel", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 7, "g")],
    steps: [
      S("Pon en la olla el puerro picado, la zanahoria en medias lunas, las lentejas, el laurel, una cabeza de ajos y un chorrito de aceite. Cubre con agua, sala y cuece 35 minutos (15 en olla rápida).", 35),
      S("Sala el calabacín en rodajas de 2 cm y déjalo reposar 15 minutos. Sécalo y dóralo a la plancha.", 8),
      S("Fríe la morcilla (mejor de arroz) sin piel en rodajas de 2 cm por los dos lados.", 4),
      S("Sirve las lentejas con el calabacín y la morcilla encima y perejil."),
    ],
  }),
  es({
    id: "alubias-calabaza-panceta", title: "Alubias blancas con calabaza, panceta y aceite de especias",
    note: RAPIDA,
    baseServings: 6, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("alubias-blancas", 800, "g"), I("calabaza", 300, "g"), I("panceta", 200, "g"), I("hinojo", 0.5, "unit"), I("cebolleta", 1, "unit"), I("zanahoria", 100, "g"), I("ajo", 2, "unit"), I("comino", 2, "g"), I("pimenton", 2, "g"), I("oregano", 2, "g"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece la cebolleta, el hinojo, la zanahoria y el ajo en agua con sal y un chorrito de aceite 15 minutos y tritúralos con un poco de caldo.", 15),
      S("Pon las alubias escurridas en una cazuela con la crema de verduras.", 1),
      S("Dora la panceta en dados, retira el exceso de grasa, saltea la calabaza en dados y añádelo a las alubias. Cuece 9 minutos con perejil picado.", 14),
      S("Mezcla el comino, el pimentón y el orégano con un chorro de aceite y riega cada plato."),
    ],
  }),
  es({
    id: "lentejas-churros-txistorra", title: "Lentejas caldosas con acelgas y churros de txistorra",
    baseServings: 6, prepMin: 20, cookMin: 50, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("lentejas", 400, "g"), I("acelgas", 300, "g"), I("puerro", 2, "unit"), I("calabaza", 150, "g"), I("txistorra", 200, "g"), I("harina", 100, "g"), I("laurel", 1, "unit"), I("aceite", 400, "ml"), I("sal", 8, "g")],
    steps: [
      S("Pocha el puerro picado, añade las pencas de acelga picadas y la calabaza en dados, luego las lentejas, el laurel y bastante agua. Sala y cuece 35 minutos (15 en olla rápida). Añade las hojas de acelga en juliana los últimos 3 minutos.", 38),
      S("Saltea la txistorra sin piel en trocitos, escurre la grasa y pícala fina.", 4),
      S("Hierve 250 ml de agua con sal, añade la harina de golpe y remueve hasta que la masa se despegue. Mezcla con la txistorra y mete en una manga.", 4),
      S("Fríe churros de masa en el aceite muy caliente y sírvelos con las lentejas.", 8),
    ],
  }),
  es({
    id: "salteado-alubias-modena", title: "Salteado de alubias blancas y negras con jamón y reducción de vinagre",
    note: RAPIDA,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("alubias-blancas", 400, "g"), I("frijoles-negros", 400, "g"), I("pimiento", 3, "unit"), I("ajo", 2, "unit"), I("jamon", 150, "g"), I("vinagre", 100, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Escurre y enjuaga las alubias blancas y las negras (frijoles) y ponlas en una fuente."),
      S("Saltea el jamón en dados y resérvalo. En esa sartén, dora el ajo picado y saltea los pimientos (uno rojo y dos verdes) en daditos 6 minutos. Sala, añade el jamón y ponlo sobre las alubias.", 8),
      S("Reduce el vinagre (mejor de Módena) a la mitad 5 minutos, mézclalo con un chorrito de aceite y riega. Decora con perejil.", 5),
    ],
  }),
  es({
    id: "timbal-lentejas-arroz-pimientos", title: "Timbal de lentejas, arroz y pimientos asados",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("lentejas", 250, "g"), I("arroz", 200, "g"), I("pimiento", 5, "unit"), I("tomate-triturado", 150, "g"), I("zanahoria", 100, "g"), I("ajo", 3, "unit"), I("aceite", 80, "ml"), I("perejil", 5, "g"), I("sal", 7, "g")],
    steps: [
      S("Asa los pimientos (rojos y amarillos) con aceite y sal en el horno a 190 °C 35 minutos; pélalos y córtalos en tiras.", 35, 190),
      S("Mientras, cuece las lentejas con la zanahoria picada en agua con sal unos 30 minutos y escúrrelas."),
      S("Dora 2 ajos en un cazo, añade el arroz, sala, cubre con agua con unas ramas de perejil y cuece 18 minutos. Escurre.", 18),
      S("Tritura el tomate con el otro ajo y un chorro de aceite. Monta timbales de arroz, lentejas y pimientos aliñados y salsea.", 1),
    ],
  }),
  es({
    id: "garbanzos-gambas", title: "Garbanzos con gambas en salsa de sus cabezas",
    note: RAPIDA,
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("garbanzos-cocidos", 700, "g"), I("gambas", 400, "g"), I("ajo", 4, "unit"), I("tomate", 400, "g"), I("pimiento", 1, "unit"), I("puerro", 1, "unit"), I("brandy", 100, "ml"), I("azafran", 0.1, "g"), I("laurel", 2, "unit"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Pela las gambas y guarda cabezas y cáscaras. Fríe el ajo laminado, añade el pimiento verde y el puerro en trozos, las cabezas y cáscaras y el laurel, y rehoga 5 minutos.", 7),
      S("Añade el brandy y deja que se evapore (o flambéalo con cuidado). Agrega el tomate troceado, el azafrán, sal y un vaso de agua y cocina 22 minutos.", 25),
      S("Tritura y cuela la salsa sobre una cazuela, añade los garbanzos escurridos y cuece 10 minutos.", 10),
      S("Saltea las gambas sazonadas 1 minuto, espolvoréalas con perejil y añádelas.", 1),
    ],
  }),
  es({
    id: "frijoles-puerros-tempura", title: "Alubias negras guisadas con chalotas confitadas y puerros en tempura",
    note: RAPIDA,
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "medium", equipment: ["sarten", "batidora", "olla"],
    ingredients: [I("frijoles-negros", 800, "g"), I("zanahoria", 100, "g"), I("pimiento", 1, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("chalota", 12, "unit"), I("puerro", 4, "unit"), I("harina", 75, "g"), I("aceite", 500, "ml"), I("sal", 6, "g")],
    steps: [
      S("Pocha el ajo, la cebolla, la zanahoria y el pimiento verde en daditos 15 minutos y tritúralos con un poco de agua.", 16),
      S("Añade el puré a las alubias negras escurridas, cubre con agua, sala y cuece a fuego suave 15 minutos.", 15),
      S("Confita las chalotas peladas en un buen chorro de aceite a fuego suave 15 minutos. Sala.", 15),
      S("Mezcla la harina con 100 ml de agua fría y sal, reboza el puerro en trozos de 5 cm y fríelo. Sirve las alubias con las chalotas y el puerro.", 6),
    ],
  }),
  es({
    id: "garbanzos-verduras-higadillos", title: "Garbanzos salteados con verduras e higadillos crujientes",
    note: RAPIDA,
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("garbanzos-cocidos", 700, "g"), I("higado", 100, "g"), I("calabacin", 250, "g"), I("pimiento", 1, "unit"), I("judias-verdes", 100, "g"), I("ajo", 2, "unit"), I("pan-rallado", 30, "g"), I("chile", 0.5, "unit"), I("aceite", 200, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saltea en un wok o sartén grande el pimiento rojo, las judías verdes en rombos y el calabacín en trozos con un chorrito de aceite 8 minutos. Sala.", 8),
      S("Añade los garbanzos escurridos y saltea 3 minutos.", 3),
      S("Trocea el hígado (mejor higadillos de pollo), salpimiéntalo, pásalo por pan rallado y fríelo hasta que se dore, 3 minutos.", 3),
      S("Dora el ajo picado con el chile en una tartera, añade los garbanzos con las verduras y sirve con los higadillos.", 2),
    ],
  }),
  es({
    id: "alubias-bunuelos-berza-cordero", title: "Alubias con cordero y buñuelos de berza",
    note: RAPIDA,
    baseServings: 4, prepMin: 25, cookMin: 75, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("alubias-blancas", 700, "g"), I("cordero", 600, "g"), I("repollo", 0.5, "unit"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("ajo", 2, "unit"), I("harina", 200, "g"), I("huevo", 2, "unit"), I("leche", 150, "ml"), I("levadura-quimica", 10, "g"), I("aceite", 400, "ml"), I("perejil", 5, "g"), I("sal", 8, "g")],
    steps: [
      S("Cuece el cordero (mejor cuello) con la cebolla y la zanahoria peladas en agua con sal 60 minutos (20 en olla rápida). Tritura la cebolla y la zanahoria con un poco de caldo.", 60),
      S("Añade las alubias escurridas y el puré al caldo y cuece 8 minutos. Desmenuza la carne: la mitad a las alubias.", 8),
      S("Saltea el ajo y la berza (repollo) picados a fuego fuerte 4 minutos, sala y mézclala con el resto de la carne. Bate los huevos con la leche, la harina y la levadura y añade la berza.", 6),
      S("Fríe cucharadas de masa y sirve los buñuelos con las alubias y perejil.", 8),
    ],
  }),
  es({
    id: "alubias-calamares-puerros", title: "Alubias blancas con calamares salteados y puerros",
    note: RAPIDA,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("alubias-blancas", 600, "g"), I("calamares", 400, "g"), I("puerro", 4, "unit"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("laurel", 1, "unit"), I("pimenton", 2, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Calienta las alubias escurridas con la cebolleta, el laurel y un poco de agua 10 minutos. Sala.", 10),
      S("Cuece los puerros partidos al vapor 6 minutos.", 6),
      S("Dora el ajo laminado y aros de tallo de cebolleta, añade los calamares en tiras finas y saltéalos a fuego fuerte 2 minutos con perejil.", 3),
      S("Sirve las alubias con los puerros, los calamares y una pizca de pimentón."),
    ],
  }),
  es({
    id: "lentejas-carrilleras", title: "Lentejas con carrilleras de cerdo al vino tinto",
    baseServings: 4, prepMin: 15, cookMin: 110, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("lentejas", 250, "g"), I("cerdo", 600, "g"), I("boniato", 300, "g"), I("cebolleta", 1, "unit"), I("tomate", 200, "g"), I("ajo", 2, "unit"), I("vino-tinto", 125, "ml"), I("romero", 1, "g"), I("laurel", 1, "unit"), I("tomillo", 1, "g"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Pocha la cebolleta y el ajo picados, añade el tomate pelado en dados, sala y rehoga 8 minutos.", 10),
      S("Cuece las carrilleras de cerdo limpias con agua, el vino, el romero, el laurel, el tomillo y pimienta en grano, con sal, 60 minutos (10 en olla rápida).", 60),
      S("Añade las lentejas y el sofrito y cuece 35 minutos más (15 en olla rápida).", 35),
      S("Cuece el boniato en trozos 10 minutos y sirve las lentejas con las carrilleras, el boniato y perejil.", 10),
    ],
  }),
  es({
    id: "garbanzos-repollo-morcilla", title: "Garbanzos salteados con repollo, morcilla y piñones",
    note: RAPIDA,
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("garbanzos-cocidos", 700, "g"), I("morcilla", 250, "g"), I("repollo", 0.25, "unit"), I("zanahoria", 200, "g"), I("ajo", 2, "unit"), I("pinones", 30, "g"), I("comino", 1, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece la morcilla con unas ramas de perejil a fuego muy suave 25 minutos.", 25),
      S("Tuesta los piñones en seco 2 minutos.", 2),
      S("Dora el ajo laminado, añade el repollo en juliana y la zanahoria rallada, sala y rehoga 10 minutos.", 10),
      S("Añade los garbanzos escurridos, el comino y perejil picado y saltea 3 minutos. Sirve con la morcilla en trozos y los piñones.", 3),
    ],
  }),
  es({
    id: "garbanzos-verduras-tomate", title: "Garbanzos con verduras y salsa de tomate",
    note: RAPIDA,
    baseServings: 4, prepMin: 10, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("garbanzos-cocidos", 600, "g"), I("berenjena", 300, "g"), I("calabacin", 250, "g"), I("pimiento", 1, "unit"), I("ajo", 3, "unit"), I("tomate-triturado", 250, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Dora el ajo laminado y añade la berenjena y el calabacín en cuartos de luna y el pimiento rojo pelado en dados. Sala y rehoga 12 minutos.", 14),
      S("Añade los garbanzos escurridos y el tomate y cocina 3 minutos.", 3),
      S("Ajusta de sal y sirve con perejil."),
    ],
  }),
  es({
    id: "alubias-negras-repollo", title: "Alubias negras con berza y refrito de ajos",
    note: RAPIDA,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("frijoles-negros", 800, "g"), I("repollo", 1, "unit"), I("cebolla", 1, "unit"), I("ajo", 4, "unit"), I("laurel", 1, "unit"), I("aceite", 50, "ml"), I("sal", 6, "g")],
    steps: [
      S("Pocha la cebolla y 2 ajos picados, añade las alubias negras escurridas, el laurel y agua hasta cubrir, sala y cuece a fuego suave 20 minutos.", 25),
      S("Cuece la berza (repollo) picada en agua con sal 15 minutos y escúrrela.", 15),
      S("Dora los otros 2 ajos laminados en el aceite y vierte el refrito sobre la berza. Sirve con las alubias.", 3),
    ],
  }),
  es({
    id: "olla-gitana", title: "Olla gitana",
    origin: "España (Murcia y Andalucía)", note: RAPIDA,
    baseServings: 6, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("garbanzos-cocidos", 800, "g"), I("patata", 400, "g"), I("judias-verdes", 250, "g"), I("calabaza", 500, "g"), I("tomate", 150, "g"), I("cebolla", 1, "unit"), I("caldo", 1000, "ml"), I("pimenton", 4, "g"), I("azafran", 0.1, "g"), I("menta", 3, "g"), I("aceite", 50, "ml"), I("sal", 7, "g")],
    steps: [
      S("Cuece las patatas chascadas, la calabaza en trozos y las judías verdes en el caldo 15 minutos.", 15),
      S("Sofríe la cebolla y el tomate picados 8 minutos, añade el pimentón, la menta (el original usa hierbabuena seca) y el azafrán.", 10),
      S("Añade el sofrito y los garbanzos escurridos a la olla y cuece a fuego suave 8 minutos. Ajusta de sal.", 8),
    ],
  }),
  es({
    id: "alubias-pimientos-asados", title: "Alubias blancas con pimientos verdes asados",
    note: RAPIDA,
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("alubias-blancas", 800, "g"), I("cebolla", 1, "unit"), I("puerro", 1, "unit"), I("zanahoria", 100, "g"), I("pimiento", 6, "unit"), I("ajo", 2, "unit"), I("pimenton", 3, "g"), I("aceite", 50, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece la cebolla, la zanahoria y el puerro en dados con un chorrito de aceite y sal en agua 15 minutos y añade las alubias escurridas.", 15),
      S("Asa los pimientos verdes con aceite y sal en el horno a 180 °C 22 minutos. Pélalos: uno en dados y el resto en tiras.", 22, 180),
      S("Añade a las alubias el pimentón y el pimiento en dados y cuece 5 minutos.", 5),
      S("Dora el ajo laminado y saltea las tiras de pimiento. Sírvelas con las alubias.", 3),
    ],
  }),
  es({
    id: "lentejas-morcilla", title: "Lentejas con morcilla",
    baseServings: 4, prepMin: 10, cookMin: 45, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("lentejas", 400, "g"), I("morcilla", 250, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("pimenton", 5, "g"), I("aceite", 40, "ml"), I("sal", 8, "g")],
    steps: [
      S("Cuece las lentejas en abundante agua con sal 38 minutos.", 38),
      S("Mientras, cuece la morcilla aparte a fuego muy suave unos 30 minutos y córtala en rodajas."),
      S("Pocha la cebolla y el ajo en daditos hasta que se doren, retira del fuego y añade el pimentón.", 8),
      S("Añade el sofrito y la morcilla a las lentejas, remueve y sirve.", 1),
    ],
  }),
  es({
    id: "alubias-conejo", title: "Alubias blancas con conejo",
    note: "El original usa pochas frescas; con alubias cocidas de bote se acorta mucho el tiempo.",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("conejo", 1000, "g"), I("alubias-blancas", 600, "g"), I("puerro", 1, "unit"), I("zanahoria", 100, "g"), I("cebolleta", 1, "unit"), I("tomate", 150, "g"), I("laurel", 1, "unit"), I("pimenton", 4, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Trocea el conejo, salpimiéntalo y dóralo en el aceite 8 minutos. Resérvalo.", 8),
      S("Pocha el puerro, la zanahoria, la cebolleta y el tomate en daditos con una pizca de sal 10 minutos.", 10),
      S("Añade el conejo, el pimentón y el laurel, cubre con agua y cuece tapado 25 minutos.", 25),
      S("Añade las alubias escurridas y cuece 5 minutos. Ajusta de sal y espolvorea perejil.", 5),
    ],
  }),
  es({
    id: "lentejas-boniato-arroz", title: "Lentejas con boniato y arroz de verduras",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("lentejas", 300, "g"), I("boniato", 300, "g"), I("cebolleta", 1, "unit"), I("arroz", 150, "g"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("ajo", 2, "unit"), I("tomate-cherry", 250, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 8, "g")],
    steps: [
      S("Cuece las lentejas con la cebolleta y el boniato en daditos, un chorrito de aceite, sal y agua 42 minutos.", 42),
      S("Dora el ajo picado, añade la zanahoria en daditos y el puerro picado, luego el arroz, el doble de agua y algo más, y sal. Cuece 18 minutos.", 20),
      S("Escalda los cherry 1 minuto y pélalos.", 1),
      S("Sirve las lentejas con el arroz en el centro, los tomates y perejil."),
    ],
  }),
  es({
    id: "garbanzos-pisto", title: "Garbanzos con pisto y panceta",
    note: RAPIDA,
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("garbanzos-cocidos", 600, "g"), I("panceta", 100, "g"), I("tomate", 300, "g"), I("berenjena", 500, "g"), I("calabacin", 250, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Calienta los garbanzos escurridos con la panceta picada en un poco de agua 10 minutos.", 10),
      S("Pocha la cebolla y el ajo en dados hasta que se doren, 8 minutos. Añade la berenjena pelada y el calabacín en dados y rehoga 10 minutos.", 18),
      S("Añade el tomate pelado en dados 5 minutos y luego los garbanzos escurridos con la panceta. Sala y espolvorea perejil.", 5),
    ],
  }),
  es({
    id: "garbanzos-alcachofas-huevo", title: "Garbanzos en salsa de almendra con alcachofas rebozadas y huevo",
    note: RAPIDA,
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("garbanzos-cocidos", 700, "g"), I("alcachofa", 4, "unit"), I("cebolleta", 1, "unit"), I("zanahoria", 100, "g"), I("ajo", 4, "unit"), I("almendras", 50, "g"), I("huevo", 4, "unit"), I("harina", 40, "g"), I("laurel", 1, "unit"), I("pimenton", 3, "g"), I("caldo", 500, "ml"), I("aceite", 300, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece 2 huevos 10 minutos y pícalos. Cuece la cebolleta, la zanahoria y un ajo en el caldo con el laurel 15 minutos y tritúralos.", 15),
      S("Rehoga los otros ajos picados con la almendra molida y el pimentón, añade el triturado y los garbanzos escurridos, sala y cuece 6 minutos con perejil.", 8),
      S("Cuece las alcachofas en cuartos 15 minutos, sécalas, pásalas por harina y los otros 2 huevos batidos y fríelas.", 18),
      S("Sirve los garbanzos con el huevo picado y las alcachofas."),
    ],
  }),
];
