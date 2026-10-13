import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 12: cremas y sopas. */
export const recipesArg12: Recipe[] = [
  es({
    id: "crema-acelgas-croquetas-quinoa", title: "Crema de acelgas con croquetas de quinoa al curry",
    note: "El original usa mijo.",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("acelgas", 400, "g"), I("patata", 450, "g"), I("zanahoria", 300, "g"), I("quinoa", 100, "g"), I("cebolleta", 1, "unit"), I("ajo", 1, "unit"), I("curry", 3, "g"), I("cilantro", 5, "g"), I("harina", 20, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece la quinoa en el doble de agua con sal 15 minutos y escúrrela.", 15),
      S("Cuece las zanahorias, las acelgas (pencas en dados y hojas en juliana) y las patatas cascadas en agua con sal 16 minutos. Retira parte del caldo y tritura.", 16),
      S("Mezcla la quinoa con la cebolleta, el ajo y el cilantro picados, el curry y la harina. Forma bolitas y fríelas en aceite caliente.", 8),
      S("Sirve la crema con las croquetas y perejil."),
    ],
  }),
  es({
    id: "crema-mejillones-hojaldre", title: "Crema de mejillones con hojaldre",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["olla", "horno", "batidora"],
    ingredients: [I("mejillones", 2000, "g"), I("masa-hojaldre", 275, "g"), I("cebolla", 1, "unit"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("tomate-triturado", 200, "g"), I("pan", 60, "g"), I("vino-blanco", 200, "ml"), I("brandy", 50, "ml"), I("huevo", 1, "unit"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Abre los mejillones con el vino y 400 ml de agua, tapados. Saca la carne y cuela el caldo. Tuesta el pan en rebanadas en el horno.", 8, 200),
      S("Pocha la cebolla, la zanahoria y el puerro picados, añade el pan troceado, el tomate, el brandy, el caldo y dos tercios de los mejillones. Cuece 15 minutos y tritura.", 20),
      S("Reparte la crema y el resto de mejillones en cuencos aptos para horno, tápalos con hojaldre y píntalo con huevo batido.", 5),
      S("Hornea a 200 °C 12 minutos, hasta que suba el hojaldre. Sirve con perejil.", 12, 200),
    ],
  }),
  es({
    id: "sopa-verduras-fideos-panceta", title: "Sopa de verduras y fideos con panceta y tortitas de espinacas",
    baseServings: 6, prepMin: 25, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("fideos-arroz", 50, "g"), I("panceta", 120, "g"), I("espinacas", 500, "g"), I("tomate", 150, "g"), I("cebolleta", 1, "unit"), I("puerro", 2, "unit"), I("alcachofa", 2, "unit"), I("coliflor", 0.25, "unit"), I("patata", 200, "g"), I("ajo", 2, "unit"), I("pimenton", 4, "g"), I("tomillo", 1, "g"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Rehoga la panceta picada, añade el ajo, la cebolleta y los puerros picados y después el tomate picado.", 8),
      S("Saltea la alcachofa y la patata en daditos con la coliflor, el tomillo y el pimentón, pásalo a la cazuela, cubre con agua y cuece 15 minutos. Añade los fideos (el original usa fideos de trigo) 5 minutos.", 20),
      S("Escalda las espinacas 1 minuto, escúrrelas, pícalas y forma tortitas; pásalas por harina y huevo batido y fríelas.", 8),
      S("Sirve la sopa con las tortitas y perejil."),
    ],
  }),
  es({
    id: "sopa-conejo", title: "Sopa de conejo",
    baseServings: 6, prepMin: 25, cookMin: 55, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("conejo", 1200, "g"), I("cebolla", 1, "unit"), I("zanahoria", 300, "g"), I("puerro", 3, "unit"), I("apio", 60, "g"), I("tomate", 150, "g"), I("pasta", 125, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saca la carne de los lomos y muslos del conejo y pícala. Rehoga 1 zanahoria, la cebolla, 1 puerro y el apio en dados, añade el resto del conejo, cubre con 2 litros de agua y cuece 30 minutos. Desespuma y cuela.", 35),
      S("Pocha las otras zanahorias y puerros picados con el tomate picado, añade la carne picada salpimentada y rehoga.", 8),
      S("Vierte el caldo y, al hervir, añade los fideos (pasta de sopa) 8 minutos. Sirve con perejil.", 10),
    ],
  }),
  es({
    id: "crema-champinones-bunuelos", title: "Crema de champiñones y calabaza con buñuelos de viento",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("champinones", 700, "g"), I("cebolla", 1, "unit"), I("ajo", 4, "unit"), I("arroz", 40, "g"), I("calabaza", 200, "g"), I("caldo", 1500, "ml"), I("harina", 75, "g"), I("huevo", 2, "unit"), I("mantequilla", 45, "g"), I("azucar", 2, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Dora el ajo laminado, añade la cebolla picada, los champiñones troceados, la calabaza en dados y el arroz. Vierte el caldo y cuece 15 minutos. Tritura.", 22),
      S("Hierve 125 ml de agua con la mantequilla, añade la harina, el azúcar y sal de golpe y remueve hasta que la masa se despegue. Templada, incorpora los huevos uno a uno.", 6),
      S("Fríe bolitas de masa en aceite no muy caliente hasta que se hinchen y doren.", 8),
      S("Sirve la crema con los buñuelos y perejil."),
    ],
  }),
  es({
    id: "sopa-marinera-rape-almejas", title: "Sopa marinera de rape y almejas",
    note: "El original usa berberechos y espesa con tapioca.",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("rape", 600, "g"), I("almejas", 500, "g"), I("zanahoria", 200, "g"), I("puerro", 1, "unit"), I("pimiento", 1, "unit"), I("vino-blanco", 200, "ml"), I("azafran", 0.1, "g"), I("arroz", 50, "g"), I("aceite", 30, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Abre las almejas con el vino, tapadas. Saca la carne y cuela el caldo.", 4),
      S("Saca los lomos del rape. Cuece la cabeza y la espina con la parte verde del puerro y perejil en 1,5 litros de agua con sal 20 minutos y cuela el fumet.", 20),
      S("Rehoga la zanahoria, el pimiento verde y el puerro picados con el azafrán, añade el fumet, el caldo de las almejas y el arroz y cuece 15 minutos.", 18),
      S("Añade el rape en dados 3 minutos y las almejas al final. Sirve con perejil.", 3),
    ],
  }),
  es({
    id: "sopa-japonesa-pollo-fideos", title: "Sopa japonesa de pollo y fideos",
    cuisine: "japonesa", origin: "Japón (versión de Arguiñano)", authenticity: "adapted",
    note: "El original usa fideos udon y dashi en polvo.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pollo", 400, "g"), I("fideos-ramen", 250, "g"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("cebolleta", 1, "unit"), I("soja", 100, "ml"), I("miso", 20, "g"), I("cebollino", 5, "g"), I("sal", 3, "g")],
    steps: [
      S("Cuece los puerros y las zanahorias picados en 1,5 litros de agua con un poco de sal 6 minutos.", 6),
      S("Añade el pollo sin piel ni hueso en trozos y la soja; desespuma. Añade la cebolleta en juliana y cuece a fuego suave 15 minutos. Fuera del fuego, disuelve el miso.", 15),
      S("Mientras, cuece los fideos aparte según el paquete y escúrrelos."),
      S("Reparte los fideos en cuencos, cubre con la sopa y espolvorea cebollino picado."),
    ],
  }),
  es({
    id: "sopa-pollo-pesto", title: "Sopa de pollo con verduras y pesto",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("pollo", 500, "g"), I("pasta", 100, "g"), I("pan", 80, "g"), I("zanahoria", 100, "g"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("ajo", 2, "unit"), I("queso", 20, "g"), I("albahaca", 40, "g"), I("pinones", 25, "g"), I("aceite", 80, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Tritura el queso, los piñones y la albahaca con un chorro de aceite para el pesto.", 2),
      S("Cuece la pechuga de pollo con el ajo, la cebolleta, el puerro, la zanahoria y perejil en 1,5 litros de agua con sal 20 minutos (8 en olla rápida). Saca el pollo y pícalo; tritura y cuela el caldo.", 20),
      S("Hierve el caldo, añade la pasta de sopa 5 minutos y después el pollo.", 6),
      S("Tuesta el pan de molde en tiras en la sartén con aceite y sirve la sopa con pesto y los picatostes.", 3),
    ],
  }),
  es({
    id: "cremas-frias-tomate-champinon", title: "Dos cremas frías: tomate y champiñón, con huevo y jamón crujiente",
    baseServings: 4, prepMin: 140, cookMin: 30, difficulty: "easy", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("huevo", 2, "unit"), I("jamon", 60, "g"), I("champinones", 600, "g"), I("patata", 200, "g"), I("leche", 500, "ml"), I("tomate", 1000, "g"), I("pepino", 100, "g"), I("pimiento", 0.25, "unit"), I("ajo", 1, "unit"), I("pan", 40, "g"), I("aceite", 120, "ml"), I("vinagre", 10, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Hornea las lonchas de jamón entre dos papeles a 190 °C 10 minutos. Cuece los huevos 10 minutos y pícalos.", 10, 190),
      S("Saltea los champiñones picados, añade la patata troceada, la leche y 300 ml de agua, salpimienta y cuece 15 minutos. Tritura, cuela y enfría.", 18),
      S("Tritura el tomate, el pepino, el pimiento verde, el ajo, el pan remojado, aceite, vinagre y sal; cuela. Enfría las dos cremas 2 horas.", 120),
      S("Sirve las dos cremas a la vez en el plato con el huevo, el jamón desmenuzado y perejil."),
    ],
  }),
  es({
    id: "crema-coliflor-bunuelos-manzana", title: "Crema de coliflor con buñuelos de puerro y manzana y vinagreta de miel",
    baseServings: 6, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("coliflor", 1, "unit"), I("leche", 1000, "ml"), I("comino", 1, "g"), I("puerro", 1, "unit"), I("manzana", 1, "unit"), I("harina", 50, "g"), I("levadura-quimica", 8, "g"), I("huevo", 2, "unit"), I("miel", 120, "g"), I("vinagre", 50, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Rehoga los ramilletes de coliflor con aceite y el comino, cubre con la leche, sazona y cuece 22 minutos. Tritura.", 25),
      S("Pocha el puerro picado, añade la manzana en dados y dórala. Mézclalo con la harina, la levadura y los huevos batidos, con sal.", 8),
      S("Fríe cucharadas de masa en aceite caliente y escúrrelas.", 6),
      S("Mezcla la miel con el vinagre y un chorro de aceite. Sirve la crema con los buñuelos, la vinagreta y perejil."),
    ],
  }),
  es({
    id: "crema-lentejas-tempura", title: "Crema de lentejas con tempura de zanahoria y ajetes",
    baseServings: 6, prepMin: 15, cookMin: 40, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("lentejas", 400, "g"), I("pollo", 200, "g"), I("zanahoria", 300, "g"), I("puerro", 1, "unit"), I("cebolleta", 1, "unit"), I("tomate", 150, "g"), I("ajo", 6, "unit"), I("harina", 100, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 7, "g")],
    steps: [
      S("Rehoga la cebolleta, el puerro y 2 ajos picados, añade el tomate picado, el muslo de pollo sin piel y las lentejas. Cubre con agua, sala y cuece 30 minutos (6 en olla rápida).", 30),
      S("Deshuesa el pollo, devuelve la carne y tritura la crema.", 3),
      S("Mezcla la harina (mejor de tempura) con agua muy fría. Pasa por ella la zanahoria en bastones y el resto de ajos frescos (ajetes) en tiras y fríelos.", 6),
      S("Sirve la crema con la tempura y perejil."),
    ],
  }),
  es({
    id: "crema-calabacin-higos-sesamo", title: "Crema de calabacín con higos salteados y palitos de sésamo",
    note: "El original añade un poco de bacalao ahumado a la crema.",
    baseServings: 6, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "horno", "sarten"],
    ingredients: [I("calabacin", 600, "g"), I("puerro", 4, "unit"), I("cebolleta", 1, "unit"), I("patata", 200, "g"), I("higos", 60, "g"), I("harina", 100, "g"), I("sesamo", 15, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Rehoga la cebolleta y los puerros picados, añade el calabacín (reserva la piel de uno) y la patata cascada, cubre con agua, sala y cuece 20 minutos. Tritura.", 22),
      S("Mezcla la harina con 50 ml de agua, sal y el sésamo; forma tiras finas sobre papel y hornea a 180 °C 10 minutos.", 10, 180),
      S("Mientras, escalda la piel del calabacín en tiras 1 minuto y saltea los higos secos picados."),
      S("Sirve la crema con los fideos de calabacín, los higos y los palitos de sésamo."),
    ],
  }),
  es({
    id: "crema-calabaza-langostinos-beicon", title: "Crema de calabaza con langostinos envueltos en beicon",
    note: "El original usa cigalitas y boletus.",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("langostinos", 300, "g"), I("beicon", 150, "g"), I("setas", 150, "g"), I("calabaza", 600, "g"), I("patata", 200, "g"), I("zanahoria", 100, "g"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Pocha el puerro, la cebolleta, la patata, la zanahoria y la calabaza picados, cubre con agua, sala y cuece 20 minutos. Tritura.", 22),
      S("Pela los langostinos, envuelve cada uno con media loncha de beicon, sujétalos con un palillo y fríelos hasta que el beicon quede tostado.", 5),
      S("Saltea las setas en daditos con sal y perejil.", 3),
      S("Sirve la crema con los langostinos y las setas por encima."),
    ],
  }),
  es({
    id: "crema-remolacha-rulos-jamon", title: "Crema de remolacha y manzana con rulos crujientes de jamón",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("remolacha", 600, "g"), I("leche-evaporada", 250, "ml"), I("manzana", 1, "unit"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("pasta-brick", 3, "unit"), I("jamon", 90, "g"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Rehoga los puerros y la zanahoria picados, añade la manzana y la remolacha peladas y troceadas, cubre con agua, sala y cuece 20 minutos. Tritura con la leche evaporada.", 25),
      S("Cubre la pasta brick con el jamón, enróllala, pega el borde con agua y corta cilindros de 2-3 cm.", 5),
      S("Hornea los rulos a 180 °C 8 minutos y sírvelos con la crema y perejil.", 8, 180),
    ],
  }),
  es({
    id: "crema-tomate-aguacate-gambas", title: "Crema fría de tomate y aguacate con gambas crujientes",
    baseServings: 4, prepMin: 80, cookMin: 10, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("tomate", 1000, "g"), I("aguacate", 1, "unit"), I("ajo", 1, "unit"), I("gambas", 300, "g"), I("pasta-brick", 1, "unit"), I("albahaca", 25, "g"), I("aceite", 200, "ml"), I("sal", 4, "g")],
    steps: [
      S("Escalda los tomates 1 minuto, pélalos y tritúralos con la carne del aguacate y el ajo; cuela, sala y enfría 1 hora.", 65),
      S("Tritura la albahaca con aceite.", 2),
      S("Corta la pasta brick en 12 triángulos, envuelve las gambas peladas y sazonadas y fríelas.", 5),
      S("Sirve la crema con las gambas y el aceite de albahaca."),
    ],
  }),
  es({
    id: "crema-calabaza-puerros-bacalao", title: "Crema de calabaza con puerros a la plancha y bacalao frito",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("calabaza", 600, "g"), I("puerro", 6, "unit"), I("bacalao", 150, "g"), I("patata", 200, "g"), I("ajo", 3, "unit"), I("pan", 80, "g"), I("harina", 30, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece la patata cascada y la calabaza en dados en agua con sal 15 minutos. Escúrrelas y tritúralas con el ajo laminado frito en 6 cucharadas de aceite.", 18),
      S("Haz los puerros (finos) enteros a la plancha 8-10 minutos con sal.", 9),
      S("Fríe el pan en dados. Pasa el bacalao desalado en tacos por harina y fríelo.", 6),
      S("Sirve la crema con los puerros, los picatostes, el bacalao y perejil."),
    ],
  }),
  es({
    id: "crema-alubias-rejilla-patatas", title: "Crema de alubias gratinada con patatas y cebolla",
    baseServings: 6, prepMin: 15, cookMin: 60, difficulty: "easy", equipment: ["olla", "batidora", "sarten", "horno"],
    ingredients: [I("alubias-blancas", 400, "g"), I("zanahoria", 100, "g"), I("tomate", 150, "g"), I("pimiento", 0.5, "unit"), I("cebolla", 2, "unit"), I("patata", 400, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Pon las alubias a remojo la víspera. Rehoga la zanahoria, una cebolla, el pimiento rojo y el tomate picados, añade las alubias escurridas, cubre con agua y cuece 60 minutos (20 en olla rápida). Tritura y cuela.", 60),
      S("Mientras, pocha la otra cebolla en juliana, añade las patatas en láminas finas, sala, cubre con agua y cuece 15 minutos."),
      S("Reparte la crema en cuencos de horno, cubre con las patatas escurridas y gratina en el horno 5 minutos. Sirve con perejil.", 5, 220),
    ],
  }),
  es({
    id: "sopa-patata-beicon", title: "Sopa de patata con beicon",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("patata", 450, "g"), I("zanahoria", 200, "g"), I("apio", 60, "g"), I("puerro", 1, "unit"), I("cebolleta", 1, "unit"), I("ajo", 4, "unit"), I("beicon", 80, "g"), I("leche-evaporada", 200, "ml"), I("aceite", 20, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece los ajos sin pelar, el puerro, lo verde de la cebolleta y perejil en 1,5 litros de agua con sal 18 minutos y cuela el caldo.", 18),
      S("Dora el beicon en tiras y retíralo. En la misma grasa, rehoga la cebolleta, el apio y las zanahorias picados.", 6),
      S("Añade las patatas en dados, el caldo y la leche evaporada y cuece 12 minutos. Reserva un par de cazos de verdura y tritura el resto.", 12),
      S("Devuelve las verduras enteras y sirve con el beicon y perejil."),
    ],
  }),
  es({
    id: "sopa-arroz-verduras-gambas", title: "Sopa de arroz con verduras y gambas al ajillo",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("arroz", 100, "g"), I("gambas", 500, "g"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("calabacin", 250, "g"), I("ajo", 2, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pela las gambas y cuece las cabezas y cáscaras con lo verde de los puerros en 1,5 litros de agua con sal 12 minutos. Cuela el fumet.", 12),
      S("Rehoga los puerros en cilindros y la zanahoria y el calabacín en cuartos de luna, añade el arroz, vierte el fumet y cuece 20 minutos.", 22),
      S("Saltea el ajo picado con las gambas salpimentadas 1 minuto, añade perejil y sírvelas sobre la sopa.", 2),
    ],
  }),
  es({
    id: "sopa-tomate-huevo-escalfado", title: "Sopa de tomate con huevo escalfado y patatas fritas",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("tomate", 600, "g"), I("huevo", 4, "unit"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("calabacin", 250, "g"), I("patata", 200, "g"), I("laurel", 1, "unit"), I("cilantro", 5, "g"), I("vinagre", 20, "ml"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Rehoga la cebolla, los tomates y la zanahoria pelados y picados con el calabacín 10 minutos. Cubre con agua, añade el laurel y cuece 15 minutos. Retira el laurel, añade el cilantro y tritura.", 25),
      S("Fríe la patata en daditos y escúrrela.", 6),
      S("Escalfa los huevos en agua hirviendo con sal y vinagre 2-3 minutos.", 3),
      S("Sirve la sopa con un huevo, las patatas y perejil."),
    ],
  }),
  es({
    id: "gazpacho-habas", title: "Gazpacho de habas con jamón, manzana y pasas",
    baseServings: 4, prepMin: 80, cookMin: 8, difficulty: "easy", equipment: ["batidora", "sarten"],
    ingredients: [I("habas", 400, "g"), I("jamon", 150, "g"), I("pimiento", 0.5, "unit"), I("hinojo", 0.25, "unit"), I("ajo", 1, "unit"), I("cebolleta", 2, "unit"), I("manzana", 1, "unit"), I("almendras", 40, "g"), I("pasas", 40, "g"), I("vinagre", 45, "ml"), I("aceite", 120, "ml"), I("perejil", 3, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Reserva un puñado de habas pequeñas. Tritura el resto con el hinojo, el pimiento verde, una cebolleta, el ajo, 500 ml de agua, el vinagre, casi todo el aceite, sal y pimienta. Cuela y enfría 1 hora.", 65),
      S("Rehoga la otra cebolleta picada, añade la manzana en daditos, las pasas, las almendras fileteadas y las habas reservadas.", 6),
      S("Sirve el gazpacho con el salteado, el jamón en tiras y perejil."),
    ],
  }),
  es({
    id: "crema-fria-remolacha", title: "Crema fría de remolacha con huevo, aceitunas y jamón crujiente",
    baseServings: 4, prepMin: 80, cookMin: 30, difficulty: "easy", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("remolacha", 200, "g"), I("tomate", 300, "g"), I("huevo", 2, "unit"), I("patata", 200, "g"), I("cebolleta", 1, "unit"), I("aceitunas", 60, "g"), I("jamon", 60, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Hornea el jamón sobre papel a 200 °C 12 minutos y pícalo.", 12, 200),
      S("Cuece la patata 25 minutos y los huevos 10 minutos en agua con sal.", 25),
      S("Tritura la patata con la remolacha cocida y los tomates pelados, sal, aceite y 400 ml de agua. Cuela y enfría 1 hora.", 60),
      S("Sirve con la cebolleta, el huevo y las aceitunas (verdes y negras) picados, el jamón y perejil."),
    ],
  }),
  es({
    id: "sopa-brocoli-almejas", title: "Sopa de brócoli con almejas",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("brocoli", 1, "unit"), I("patata", 200, "g"), I("almejas", 500, "g"), I("ajo", 4, "unit"), I("vino-blanco", 100, "ml"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Rehoga la patata en daditos y los ramilletes de brócoli, cubre con agua, sala y cuece 15 minutos a fuego suave.", 17),
      S("Rehoga el ajo picado, añade las almejas y el vino (el original usa txakoli) y cocínalas hasta que se abran.", 4),
      S("Incorpora las almejas a la sopa con perejil picado y ajusta de sal."),
    ],
  }),
  es({
    id: "crema-lentejas-rojas-gambas", title: "Crema de lentejas rojas y calabaza con gambas crujientes",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("lentejas", 400, "g"), I("calabaza", 300, "g"), I("puerro", 3, "unit"), I("gambas", 300, "g"), I("pasta-brick", 2, "unit"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga los puerros en medias lunas y la calabaza en dados, añade las lentejas (mejor rojas), 1,5 litros de agua y sal y cuece 20 minutos (6-8 en olla rápida). Tritura y cuela.", 22),
      S("Enrolla la pasta brick, córtala en tiras de 2 cm y envuelve con ellas las gambas peladas y salpimentadas.", 5),
      S("Fríe las gambas y sírvelas sobre la crema con perejil.", 4),
    ],
  }),
  es({
    id: "crema-patata-pimenton-costillas", title: "Crema de patata al pimentón con costillas asadas",
    baseServings: 4, prepMin: 40, cookMin: 45, difficulty: "easy", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("costillas-cerdo", 800, "g"), I("miel", 40, "g"), I("salsa-inglesa", 60, "ml"), I("patata", 600, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("pimenton", 3, "g"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Separa las costillas y salpiméntalas. Mezcla la miel con la salsa inglesa templada, vierte por encima y deja macerar 30 minutos.", 30),
      S("Asa las costillas con la marinada en el horno a 160 °C 40 minutos.", 40, 160),
      S("Mientras, pocha el ajo y la cebolleta picados, añade las patatas cascadas y el pimentón, cubre con agua, sala y cuece 22 minutos. Añade perejil y tritura."),
      S("Sirve la crema con las costillas encima."),
    ],
  }),
  es({
    id: "crema-esparragos-triangulos", title: "Crema de espárragos con triángulos de jamón y queso",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("esparragos-verdes", 500, "g"), I("pasta-brick", 4, "unit"), I("jamon-cocido", 175, "g"), I("queso-crema", 125, "g"), I("puerro", 2, "unit"), I("cebolleta", 1, "unit"), I("arroz", 60, "g"), I("aceite", 200, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece la parte dura de los espárragos y lo verde de puerros y cebolleta en agua 15 minutos y cuela.", 15),
      S("Pocha el puerro, la cebolleta y los espárragos picados (reserva las puntas), añade el arroz y el caldo, salpimienta y cuece 16 minutos. Tritura.", 22),
      S("Mezcla el jamón cocido picado con el queso, rellena tiras de pasta brick plegándolas en triángulos y fríelas con las puntas de espárrago.", 6),
      S("Sirve la crema con los triángulos y las puntas."),
    ],
  }),
  es({
    id: "crema-garbanzos-pollo-palitos", title: "Crema de garbanzos y pollo con palitos de garbanzo y lombarda",
    baseServings: 4, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["olla", "batidora", "horno", "sarten"],
    ingredients: [I("garbanzos", 300, "g"), I("pollo", 225, "g"), I("puerro", 1, "unit"), I("zanahoria", 100, "g"), I("repollo", 0.25, "unit"), I("ajo", 2, "unit"), I("harina-garbanzo", 190, "g"), I("harina-maiz", 30, "g"), I("sesamo", 30, "g"), I("levadura-quimica", 4, "g"), I("aceite", 80, "ml"), I("perejil", 3, "g"), I("sal", 7, "g")],
    steps: [
      S("Pon los garbanzos a remojo la víspera y cuécelos con la pechuga de pollo, la zanahoria y el puerro picados en agua con sal 90 minutos (25 en olla rápida). Tritura.", 40),
      S("Amasa la harina de garbanzo y la de maíz con el sésamo, la levadura, sal, 40 ml de aceite y 90 ml de agua. Forma bastoncitos y hornéalos a 180 °C 10 minutos.", 10, 180),
      S("Saltea la lombarda (repollo morado) en juliana con el ajo laminado.", 6),
      S("Sirve la crema con la lombarda, los palitos y perejil."),
    ],
  }),
  es({
    id: "sopa-bacalao", title: "Sopa de bacalao",
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("bacalao", 600, "g"), I("cebolla", 2, "unit"), I("zanahoria", 400, "g"), I("puerro", 2, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 100, "g"), I("pan", 50, "g"), I("vino-blanco", 100, "ml"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga 2 zanahorias, una cebolla, un puerro y el ajo en dados, añade las espinas y pieles del bacalao (si las tienes), cubre con agua, sala y cuece 30 minutos. Cuela el fumet.", 30),
      S("Pocha la otra cebolla, zanahorias y puerro picados, añade el vino, el tomate y el fumet y cuece 15 minutos.", 15),
      S("Añade el pan muy picado y cuece 10 minutos más.", 10),
      S("Saltea el bacalao en dados salpimentado y añádelo a la sopa con perejil.", 3),
    ],
  }),
  es({
    id: "sopa-verduras-arroz-chorizo", title: "Sopa de verduras y arroz con chorizo, jamón y huevo",
    baseServings: 6, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("acelgas", 250, "g"), I("cebolleta", 1, "unit"), I("zanahoria", 100, "g"), I("patata", 200, "g"), I("arroz", 100, "g"), I("chorizo", 75, "g"), I("jamon", 75, "g"), I("huevo", 2, "unit"), I("tomate", 300, "g"), I("chile", 2, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Rehoga la cebolleta, la zanahoria y las acelgas en dados, añade el jamón y el chorizo en dados, la patata y el arroz. Cubre con agua, sala y cuece 20 minutos.", 25),
      S("Cocina el tomate pelado en dados con los chiles (el original usa alegrías riojanas) picados 5 minutos.", 5),
      S("Al servir, bate los huevos con perejil y añádelos a la sopa removiendo. Sirve con el tomate picante."),
    ],
  }),
];
