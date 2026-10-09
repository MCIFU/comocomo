import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Lote 5A: más cocina española y asturiana, y básicos caseros de diario. Recetas escritas para COMOCOMO. */
export const recipesCasa: Recipe[] = [
  r({
    id: "huevos-a-la-flamenca", title: "Huevos a la flamenca", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Andalucía)", note: "Se hacen en cazuelitas individuales de barro.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("huevo", 8, "unit"), I("tomate-triturado", 400, "g"), I("guisantes", 150, "g"), I("chorizo", 100, "g"), I("jamon", 80, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("pimiento", 1, "unit"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Sofríe la cebolla, el ajo y el pimiento picados en el aceite 8 minutos.", 8, 200),
      S("Añade el chorizo en rodajas 2 minutos, luego el tomate y los guisantes con la sal y cocina 10 minutos.", 12),
      S("Reparte el sofrito en 4 cazuelitas. Casca 2 huevos en cada una y coloca el jamón alrededor."),
      S("Hornea 8-10 minutos, hasta que las claras estén cuajadas y las yemas sigan líquidas.", 9, 200),
    ],
  }),
  r({
    id: "calamares-encebollados", title: "Calamares encebollados", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calamares", 700, "g"), I("cebolla", 3, "unit"), I("ajo", 2, "unit"), I("vino-blanco", 150, "ml"), I("pimenton", 3, "g"), I("aceite", 60, "ml"), I("perejil", 10, "g"), I("sal", 5, "g")],
    steps: [
      S("Corta los calamares en anillas y las cebollas en juliana fina.", 5),
      S("Pocha la cebolla y el ajo en el aceite a fuego medio-bajo 20 minutos, hasta que estén muy blandos y dorados.", 20),
      S("Sube el fuego, añade los calamares y saltea 3 minutos. Añade el pimentón y el vino.", 3),
      S("Tapa y cocina a fuego suave 15 minutos, hasta que el calamar esté tierno. Termina con perejil.", 15),
    ],
  }),
  r({
    id: "lomo-con-pimientos", title: "Lomo con pimientos", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("cerdo", 600, "g"), I("pimiento", 4, "unit"), I("ajo", 3, "unit"), I("aceite", 60, "ml"), I("sal", 5, "g"), I("pan", 150, "g", true)],
    steps: [
      S("Corta los pimientos (mejor verdes italianos) en tiras y fríelos en el aceite a fuego medio-bajo 20 minutos, hasta que estén blandos. Añade el ajo laminado los últimos 3 minutos.", 20),
      S("Retira los pimientos y sube el fuego. Sala el lomo en filetes finos y hazlo en el mismo aceite 1-2 minutos por lado.", 4),
      S("Sirve el lomo con los pimientos por encima, solo o en bocadillo con pan."),
    ],
  }),
  r({
    id: "pollo-al-chilindron", title: "Pollo al chilindrón", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Aragón y Navarra)", baseServings: 4, prepMin: 15, cookMin: 55, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pollo", 1000, "g"), I("pimiento", 3, "unit"), I("tomate-triturado", 400, "g"), I("jamon", 80, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 100, "ml"), I("pimenton", 4, "g"), I("aceite", 50, "ml"), I("sal", 7, "g")],
    steps: [
      S("Sala el pollo troceado y dóralo en el aceite 10 minutos. Resérvalo.", 10),
      S("En la misma olla, sofríe la cebolla, el ajo y los pimientos en tiras 12 minutos. Añade el jamón en tacos 1 minuto.", 13),
      S("Añade el pimentón, el vino y el tomate. Devuelve el pollo y cocina tapado a fuego suave 30 minutos.", 30),
    ],
  }),
  r({
    id: "caldereta-cordero", title: "Caldereta de cordero", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Extremadura y La Mancha)", baseServings: 4, prepMin: 20, cookMin: 85, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("cordero", 1000, "g"), I("pimiento", 2, "unit"), I("tomate", 300, "g"), I("cebolla", 1, "unit"), I("ajo", 4, "unit"), I("vino-blanco", 200, "ml"), I("pimenton", 6, "g"), I("patata", 500, "g"), I("aceite", 50, "ml"), I("sal", 8, "g")],
    steps: [
      S("Sala el cordero troceado y dóralo en el aceite a fuego fuerte 10 minutos. Resérvalo.", 10),
      S("Sofríe la cebolla, los pimientos y el ajo 10 minutos. Añade el tomate picado y cocina 5 minutos más.", 15),
      S("Añade el pimentón y el vino, devuelve el cordero y cubre con agua. Cocina tapado a fuego suave 45 minutos.", 45),
      S("Añade las patatas en trozos y cocina 15 minutos más, hasta que estén tiernas.", 15),
    ],
  }),
  r({
    id: "cordero-asado", title: "Cordero asado con patatas", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Castilla)", note: "Mejor con paletilla de cordero lechal.",
    baseServings: 4, prepMin: 15, cookMin: 100, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("cordero", 1400, "g"), I("patata", 800, "g"), I("cebolla", 1, "unit"), I("ajo", 4, "unit"), I("vino-blanco", 150, "ml"), I("aceite", 60, "ml"), I("sal", 10, "g")],
    steps: [
      S("Precalienta el horno a 170 °C. Corta las patatas y la cebolla en rodajas y colócalas en una fuente con los ajos, aceite y sal.", 10, 170),
      S("Sala el cordero, colócalo sobre las patatas con la piel hacia abajo y vierte el vino y 100 ml de agua.", 2),
      S("Hornea 60 minutos, regando de vez en cuando con el jugo.", 60, 170),
      S("Dale la vuelta, sube el horno a 200 °C y hornea 30 minutos más, hasta que la piel esté dorada y crujiente.", 30, 200),
    ],
  }),
  r({
    id: "huevos-rellenos", title: "Huevos rellenos de atún", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 25, cookMin: 10, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("huevo", 7, "unit"), I("atun-lata", 160, "g"), I("tomate-triturado", 50, "g"), I("aceite", 150, "ml"), I("limon", 0.5, "unit"), I("aceitunas", 30, "g", true), I("sal", 3, "g")],
    steps: [
      S("Cuece 6 huevos 10 minutos, enfríalos en agua fría y pélalos.", 10),
      S("Para la mayonesa, bate el huevo crudo restante con el zumo de limón y la sal mientras añades el aceite en hilo, hasta que emulsione."),
      S("Parte los huevos por la mitad, saca las yemas y mézclalas con el atún, el tomate y la mitad de la mayonesa."),
      S("Rellena las claras, cubre con el resto de la mayonesa y decora con aceitunas. Sirve frío."),
    ],
  }),
  r({
    id: "tortilla-calabacin", title: "Tortilla de calabacín y cebolla", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calabacin", 500, "g"), I("cebolla", 1, "unit"), I("huevo", 6, "unit"), I("aceite", 40, "ml"), I("sal", 5, "g")],
    steps: [
      S("Corta el calabacín en dados pequeños y la cebolla en juliana. Pocha ambos en el aceite a fuego medio 15 minutos, hasta que estén tiernos.", 15),
      S("Escurre y mezcla con los huevos batidos y la sal.", 1),
      S("Cuaja en la sartén a fuego medio 4 minutos, dale la vuelta con un plato y cocina 3 minutos más.", 7),
    ],
  }),
  r({
    id: "revuelto-champinones-jamon", title: "Revuelto de champiñones y jamón", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 2, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 4, "unit"), I("champinones", 250, "g"), I("jamon", 60, "g"), I("ajo", 1, "unit"), I("aceite", 20, "ml"), I("perejil", 5, "g", true), I("sal", 2, "g")],
    steps: [
      S("Saltea los champiñones laminados con el ajo en el aceite a fuego fuerte 5 minutos, hasta que se doren.", 5),
      S("Añade el jamón en tiras 1 minuto.", 1),
      S("Baja el fuego, añade los huevos batidos con la sal y remueve suavemente 2 minutos: deben quedar jugosos. Termina con perejil.", 2),
    ],
  }),
  r({
    id: "mejillones-marinera", title: "Mejillones a la marinera", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Galicia)", baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("mejillones", 1500, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 200, "g"), I("vino-blanco", 150, "ml"), I("pimenton", 3, "g"), I("harina", 10, "g"), I("aceite", 40, "ml"), I("pan", 150, "g", true)],
    steps: [
      S("Limpia los mejillones quitando las barbas. Descarta los que estén abiertos y no se cierren al golpearlos."),
      S("Ábrelos en una olla tapada con el vino a fuego fuerte 4 minutos. Cuela y reserva el caldo.", 4),
      S("Sofríe la cebolla y el ajo picados en el aceite 8 minutos. Añade la harina y el pimentón 1 minuto, luego el tomate y el caldo colado, y cocina 5 minutos.", 14),
      S("Añade los mejillones, mezcla 1 minuto y sirve con pan para mojar.", 1),
    ],
  }),
  r({
    id: "almejas-marinera", title: "Almejas a la marinera", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("almejas", 750, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 150, "ml"), I("harina", 10, "g"), I("pimenton", 2, "g"), I("perejil", 15, "g"), I("aceite", 40, "ml"), I("chile", 1, "unit", true)],
    steps: [
      S("Pon las almejas en agua fría con sal 30 minutos para que suelten la arena.", 30),
      S("Pocha la cebolla y el ajo picados con el chile en el aceite 8 minutos. Añade la harina y el pimentón y remueve 1 minuto.", 9),
      S("Vierte el vino, añade las almejas y tapa. Cocina 4 minutos moviendo la sartén, hasta que se abran.", 4),
      S("Espolvorea perejil y sirve. Descarta las almejas que no se hayan abierto."),
    ],
  }),
  r({
    id: "pollo-al-limon", title: "Pollo al limón al horno", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 45, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pollo", 1000, "g"), I("limon", 2, "unit"), I("ajo", 4, "unit"), I("oregano", 2, "g"), I("vino-blanco", 100, "ml"), I("aceite", 40, "ml"), I("sal", 8, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Coloca el pollo troceado en una fuente con sal, orégano, los ajos aplastados y el zumo de un limón.", 10, 200),
      S("Corta el otro limón en rodajas y repártelo. Riega con el aceite y el vino.", 1),
      S("Hornea 45 minutos, dando la vuelta al pollo a mitad, hasta que la piel esté dorada y el jugo salga transparente.", 45, 200),
    ],
  }),
  r({
    id: "lentejas-con-verduras", title: "Lentejas con verduras", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Versión vegetal de las lentejas de siempre.",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("lentejas", 320, "g"), I("zanahoria", 150, "g"), I("pimiento", 1, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("patata", 250, "g"), I("calabacin", 200, "g"), I("pimenton", 4, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Pica la cebolla, el pimiento y el ajo y sofríelos en el aceite 8 minutos.", 8),
      S("Fuera del fuego, añade el pimentón y remueve 20 segundos. Añade las lentejas, la zanahoria en rodajas y 1,2 litros de agua.", 1),
      S("Cocina a fuego suave 25 minutos. Añade la patata y el calabacín en dados y cocina 12 minutos más. Sala al final.", 37),
    ],
  }),
  r({
    id: "patatas-a-lo-pobre", title: "Patatas a lo pobre", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Andalucía)", baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("patata", 1000, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("aceite", 200, "ml"), I("sal", 6, "g")],
    steps: [
      S("Corta las patatas en rodajas finas, la cebolla en juliana y el pimiento en tiras. Sala.", 5),
      S("Ponlo todo en una sartén con el aceite a fuego medio-bajo y cocina 25 minutos removiendo de vez en cuando: la patata debe quedar tierna, no frita.", 25),
      S("Añade el ajo picado los últimos 3 minutos. Escurre el aceite sobrante (sirve para otra vez)."),
    ],
  }),
  r({
    id: "judias-verdes-con-patatas", title: "Judías verdes con patatas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("judias-verdes", 600, "g"), I("patata", 500, "g"), I("ajo", 3, "unit"), I("pimenton", 3, "g"), I("aceite", 40, "ml"), I("sal", 8, "g")],
    steps: [
      S("Corta las judías en trozos y las patatas en dados. Cuécelas juntas en agua con sal 18 minutos.", 18),
      S("Escurre bien.", 1),
      S("En una sartén, dora el ajo laminado en el aceite 1 minuto, aparta del fuego, añade el pimentón y vierte sobre las verduras. Mezcla y sirve.", 2),
    ],
  }),
  r({
    id: "arroz-caldoso-marisco", title: "Arroz caldoso de marisco", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Mediterráneo)", note: "Debe quedar meloso con caldo; se sirve al momento para que el arroz no se pase.",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("arroz", 300, "g"), I("gambas", 300, "g"), I("almejas", 250, "g"), I("calamares", 300, "g"), I("tomate", 150, "g"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("pimenton", 4, "g"), I("caldo", 1500, "ml"), I("aceite", 50, "ml"), I("sal", 7, "g")],
    steps: [
      S("Dora las gambas en el aceite 1 minuto por lado y resérvalas. Rehoga los calamares troceados 4 minutos.", 6),
      S("Añade el pimiento y el ajo picados 4 minutos, el tomate rallado 3 minutos y el pimentón 20 segundos.", 7),
      S("Añade el arroz, remueve 1 minuto y vierte el caldo caliente con la sal. Cocina 15 minutos a fuego medio.", 16),
      S("Añade las almejas y las gambas y cocina 3 minutos más, hasta que se abran las almejas. Sirve enseguida.", 3),
    ],
  }),
  r({
    id: "fabes-con-almejas", title: "Fabes con almejas", cuisine: "asturiana", authenticity: "traditional",
    origin: "España (Asturias)", note: "Las fabes se cuecen suaves para que no pierdan la piel.",
    baseServings: 4, prepMin: 20, cookMin: 150, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("fabes", 400, "g"), I("almejas", 500, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 100, "ml"), I("pimenton", 3, "g"), I("perejil", 15, "g"), I("aceite", 50, "ml"), I("sal", 6, "g")],
    steps: [
      S("La víspera, pon las fabes en remojo 12 horas."),
      S("Cuécelas en agua fría con media cebolla y un chorro de aceite. Cuando hierva, asústalas con agua fría tres veces y cocina a fuego mínimo 2 horas, sin remover.", 120),
      S("Purga las almejas en agua con sal 30 minutos.", 30),
      S("Sofríe la otra media cebolla y el ajo en el resto del aceite 6 minutos. Añade el pimentón, el vino y las almejas; tapa 3 minutos hasta que se abran.", 9),
      S("Incorpora las almejas con su salsa a las fabes, sala y cocina 5 minutos. Termina con perejil.", 5),
    ],
  }),
  r({
    id: "arroz-con-pitu", title: "Arroz con pitu de caleya", cuisine: "asturiana", authenticity: "adapted",
    origin: "España (Asturias)", note: "El pitu de caleya es un pollo de corral criado al aire libre, de carne más firme. Con pollo normal se reduce el tiempo de guiso.",
    baseServings: 4, prepMin: 15, cookMin: 70, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("pollo", 1000, "g"), I("arroz", 320, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("tomate", 200, "g"), I("ajo", 3, "unit"), I("vino-blanco", 150, "ml"), I("caldo", 1300, "ml"), I("aceite", 50, "ml"), I("sal", 8, "g")],
    steps: [
      S("Sala el pollo troceado y dóralo en una cazuela con el aceite 10 minutos.", 10),
      S("Añade la cebolla, el pimiento y el ajo picados y sofríe 10 minutos. Agrega el tomate rallado 5 minutos.", 15),
      S("Vierte el vino y deja reducir 3 minutos. Añade 600 ml de caldo y guisa tapado 25 minutos.", 28),
      S("Añade el resto del caldo caliente y el arroz. Cocina 18 minutos: debe quedar meloso. Reposa 3 minutos.", 18),
    ],
  }),
  r({
    id: "escalopines-cabrales", title: "Escalopines al Cabrales", cuisine: "asturiana", authenticity: "traditional",
    origin: "España (Asturias)", note: "El Cabrales es un queso azul asturiano muy intenso; con otro queso azul la salsa es más suave.",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera", 600, "g"), I("queso-azul", 120, "g"), I("nata", 200, "ml"), I("harina", 40, "g"), I("patata", 600, "g"), I("aceite", 300, "ml"), I("sal", 5, "g")],
    steps: [
      S("Corta las patatas en bastones y fríelas a 170 °C 10 minutos. Escúrrelas y sálalas.", 10, 170),
      S("Aplana los filetes, sálalos y pásalos por harina. Fríelos en una sartén con un poco de aceite 1 minuto por lado. Resérvalos.", 4),
      S("En la misma sartén, a fuego suave, funde el queso con la nata 4 minutos, removiendo hasta tener una salsa lisa.", 4),
      S("Sirve la ternera con la salsa por encima y las patatas al lado."),
    ],
  }),
  r({
    id: "crema-de-calabacin", title: "Crema de calabacín", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("calabacin", 800, "g"), I("patata", 200, "g"), I("cebolla", 1, "unit"), I("caldo", 700, "ml"), I("queso", 60, "g", true), I("aceite", 30, "ml"), I("sal", 5, "g")],
    steps: [
      S("Pocha la cebolla en el aceite 6 minutos.", 6),
      S("Añade el calabacín con piel y la patata en trozos, el caldo y la sal. Cocina 18 minutos.", 18),
      S("Tritura hasta que esté muy fina. Si quieres, añade el queso mientras trituras para hacerla más cremosa.", 2),
    ],
  }),
  // ——— Básicos caseros ———
  r({
    id: "gachas-avena", title: "Gachas de avena con plátano", cuisine: "britanica", authenticity: "traditional",
    origin: "Reino Unido e Irlanda (porridge)", baseServings: 2, prepMin: 3, cookMin: 8, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("avena", 80, "g"), I("leche", 400, "ml"), I("platano", 1, "unit"), I("miel", 20, "g", true), I("canela", 1, "g", true), I("sal", 1, "g")],
    steps: [
      S("Pon la avena, la leche y la sal en un cazo a fuego medio.", 1),
      S("Cocina 6 minutos removiendo a menudo, hasta que espese y la avena esté tierna.", 6),
      S("Sirve con el plátano en rodajas, un hilo de miel y canela."),
    ],
  }),
  r({
    id: "huevos-revueltos", title: "Huevos revueltos cremosos", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia", note: "El secreto es el fuego bajo y retirarlos antes de que parezcan hechos.",
    baseServings: 2, prepMin: 2, cookMin: 6, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 4, "unit"), I("mantequilla", 20, "g"), I("sal", 2, "g"), I("pan", 100, "g", true)],
    steps: [
      S("Bate los huevos con la sal solo hasta mezclar."),
      S("Funde la mantequilla en una sartén a fuego bajo y añade los huevos.", 1),
      S("Remueve sin parar con una espátula, despegando del fondo, 4-5 minutos. Retira del fuego cuando aún estén algo líquidos: terminan de hacerse en el plato.", 5),
      S("Sirve enseguida con pan tostado."),
    ],
  }),
  r({
    id: "tortilla-francesa-queso", title: "Tortilla francesa con queso", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia", baseServings: 1, prepMin: 2, cookMin: 4, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 2, "unit"), I("queso", 30, "g"), I("mantequilla", 10, "g"), I("sal", 1, "g")],
    steps: [
      S("Bate los huevos con la sal."),
      S("Funde la mantequilla en una sartén pequeña a fuego medio y vierte el huevo. Mueve la sartén y remueve con un tenedor 1 minuto.", 1),
      S("Cuando esté casi cuajada, reparte el queso rallado en el centro y dobla la tortilla en tres.", 1),
      S("Deja 30 segundos más para que se funda el queso y sirve.", 1),
    ],
  }),
  r({
    id: "batido-platano", title: "Batido de plátano y avena", cuisine: "estadounidense", authenticity: "traditional",
    origin: "Internacional", baseServings: 2, prepMin: 5, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("platano", 2, "unit"), I("leche", 400, "ml"), I("avena", 30, "g"), I("miel", 15, "g", true), I("canela", 1, "g", true)],
    steps: [
      S("Pela los plátanos (mejor muy maduros o congelados) y trocéalos."),
      S("Tritura con la leche, la avena, la miel y la canela 1 minuto, hasta que quede cremoso. Sirve frío."),
    ],
  }),
  r({
    id: "bizcocho-de-yogur", title: "Bizcocho de yogur", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Se mide todo con el vaso del yogur: 1 yogur, 2 vasos de azúcar, 3 de harina y 1 de aceite.",
    baseServings: 8, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("yogur", 1, "unit"), I("huevo", 3, "unit"), I("azucar", 250, "g"), I("harina", 250, "g"), I("aceite", 120, "ml"), I("levadura-quimica", 16, "g"), I("limon", 1, "unit")],
    steps: [
      S("Precalienta el horno a 180 °C y engrasa un molde de 22 cm.", 10, 180),
      S("Bate los huevos con el azúcar hasta que blanqueen. Añade el yogur, el aceite y la ralladura de limón."),
      S("Incorpora la harina tamizada con la levadura, mezclando lo justo para que no queden grumos."),
      S("Hornea 35-40 minutos sin abrir el horno. Está hecho cuando un palillo sale limpio del centro.", 38, 180),
    ],
  }),
];
