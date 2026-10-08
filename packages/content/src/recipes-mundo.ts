import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/**
 * Corpus semilla (lote 2): cocina internacional. Recetas escritas para COMOCOMO;
 * los rankings de TasteAtlas se usaron solo como guía de qué platos incluir.
 * Las adaptaciones indican en `note` qué se ha cambiado respecto a la versión tradicional.
 */
export const recipesMundo: Recipe[] = [
  r({
    id: "choripan-chimichurri", title: "Choripán con chimichurri", cuisine: "argentina", authenticity: "traditional",
    origin: "Argentina", note: "Usa chorizo fresco (de parrilla), no curado. El chimichurri mejora si reposa una hora.",
    baseServings: 2, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("chorizo", 300, "g"), I("pan", 200, "g"), I("perejil", 20, "g"), I("ajo", 3, "unit"), I("oregano", 3, "g"), I("vinagre", 30, "ml"), I("aceite", 80, "ml"), I("chile", 1, "unit", true), I("sal", 3, "g")],
    steps: [
      S("Para el chimichurri, pica muy fino el perejil y el ajo (a cuchillo, no en batidora). Mézclalos con el orégano, el chile picado, la sal, el vinagre y el aceite. Déjalo reposar mientras cocinas."),
      S("Abre los chorizos por la mitad a lo largo, sin separarlos del todo (mariposa)."),
      S("Cocina los chorizos en una sartén o plancha a fuego medio 8 minutos por el lado de la piel y 4 por el lado abierto, hasta que estén dorados y bien hechos por dentro.", 12),
      S("Parte el pan en dos y tuéstalo 1 minuto en la misma sartén para que se empape de la grasa.", 1),
      S("Monta el choripán con el chorizo dentro del pan y abundante chimichurri por encima."),
    ],
  }),
  r({
    id: "calamares-fritos-yogur", title: "Calamares fritos con salsa de yogur", cuisine: "turca", authenticity: "adapted",
    origin: "Turquía (adaptado)", note: "Inspirado en el kalamar tava turco, que se sirve con salsa fría. Remojar en leche ablanda y suaviza el sabor.",
    baseServings: 2, prepMin: 40, cookMin: 10, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("calamares", 400, "g"), I("leche", 200, "ml"), I("harina", 80, "g"), I("aceite", 300, "ml"), I("yogur", 1, "unit"), I("ajo", 1, "unit"), I("limon", 1, "unit"), I("sal", 4, "g")],
    steps: [
      S("Corta los calamares limpios en anillas de 1 cm. Ponlos en leche 30 minutos en la nevera.", 30),
      S("Mientras, mezcla el yogur con el ajo muy picado, una pizca de sal y unas gotas de limón. Resérvalo en frío."),
      S("Calienta el aceite en una sartén honda a 180 °C (un trocito de pan debe freírse en 20 segundos).", 5, 180),
      S("Escurre bien las anillas, pásalas por la harina mezclada con sal y sacude el exceso."),
      S("Fríe en tandas pequeñas 2 minutos, hasta que estén ligeramente doradas. Si se fríen más tiempo quedan duras. Escurre sobre papel de cocina.", 2, 180),
      S("Sirve enseguida con la salsa de yogur y gajos de limón."),
    ],
  }),
  r({
    id: "panang-pollo", title: "Curry panang de pollo con cacahuete", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia (adaptado)", note: "Se sustituye la salsa de pescado por soja y no se usan hojas de lima kaffir. Las pastas de curry suelen llevar pasta de gamba: revisa la etiqueta.",
    baseServings: 3, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 500, "g"), I("pasta-curry-rojo", 30, "g"), I("leche-coco", 400, "ml"), I("cacahuetes", 40, "g"), I("soja", 20, "ml"), I("azucar", 8, "g"), I("lima", 1, "unit"), I("arroz", 240, "g"), I("aceite", 15, "ml")],
    steps: [
      S("Tuesta los cacahuetes en seco en una sartén 3 minutos y májalos groseramente. Corta el pollo en tiras finas.", 3),
      S("Cuece el arroz 12 minutos en agua con sal y escúrrelo.", 12),
      S("En una sartén amplia con el aceite, fríe la pasta de curry 1 minuto a fuego medio hasta que huela intensamente.", 1),
      S("Añade la mitad de la leche de coco y cocina 3 minutos removiendo hasta que la salsa se separe y brille.", 3),
      S("Incorpora el pollo y cocina 4 minutos. Añade el resto de la leche de coco, la soja, el azúcar y la mitad de los cacahuetes. Cocina a fuego suave 10 minutos hasta que espese.", 14),
      S("Termina con el zumo de lima y los cacahuetes restantes. Sirve sobre el arroz."),
    ],
  }),
  r({
    id: "tallarines-verdes", title: "Tallarines verdes", cuisine: "peruana", authenticity: "adapted",
    origin: "Perú (adaptado)", note: "La versión peruana lleva albahaca y espinacas con queso fresco y leche evaporada; aquí se usan queso curado y leche normal.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pasta", 200, "g"), I("espinacas", 150, "g"), I("albahaca", 25, "g"), I("queso", 50, "g"), I("leche", 100, "ml"), I("ajo", 2, "unit"), I("cebolla", 0.5, "unit"), I("aceite", 30, "ml"), I("sal", 12, "g")],
    steps: [
      S("Hierve 2 litros de agua con 12 g de sal. Cuece la pasta al dente (9-10 minutos) y reserva medio vaso del agua.", 10),
      S("Rehoga la cebolla muy picada y el ajo con la mitad del aceite 4 minutos a fuego medio, hasta que estén transparentes.", 4),
      S("Añade las espinacas y cocina 1 minuto hasta que se reduzcan.", 1),
      S("Tritura las espinacas con la albahaca, la leche, el queso y el aceite restante hasta obtener una salsa verde y lisa. Si queda espesa, añade un poco del agua de la pasta."),
      S("Calienta la salsa 1 minuto en la sartén (sin hervir fuerte para que conserve el color), mezcla con la pasta y sirve.", 1),
    ],
  }),
  r({
    id: "ensalada-griega", title: "Ensalada griega", cuisine: "griega", authenticity: "traditional",
    origin: "Grecia", note: "En la versión tradicional no lleva lechuga y el queso va en una loncha entera encima.",
    baseServings: 2, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("tomate", 400, "g"), I("pepino", 200, "g"), I("cebolla", 0.5, "unit"), I("pimiento", 1, "unit"), I("feta", 100, "g"), I("aceitunas", 50, "g"), I("oregano", 2, "g"), I("aceite", 30, "ml"), I("vinagre", 10, "ml", true), I("sal", 3, "g")],
    steps: [
      S("Corta el tomate en gajos gruesos, el pepino en medias lunas y el pimiento en aros. Corta la cebolla en láminas finas."),
      S("Mezcla las verduras con las aceitunas en una ensaladera y sala ligeramente (la feta ya es salada)."),
      S("Coloca la feta entera o en lonchas encima. Aliña con el aceite, el vinagre y el orégano espolvoreado."),
      S("Sirve sin remover demasiado, con pan para mojar en el jugo."),
    ],
  }),
  r({
    id: "souvlaki-pollo-tzatziki", title: "Souvlaki de pollo con tzatziki", cuisine: "griega", authenticity: "adapted",
    origin: "Grecia (adaptado)", note: "Servido en pita con tzatziki casero; la versión de calle suele llevar patatas fritas dentro.",
    baseServings: 3, prepMin: 25, cookMin: 12, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 500, "g"), I("limon", 1, "unit"), I("oregano", 3, "g"), I("ajo", 3, "unit"), I("aceite", 40, "ml"), I("pan-pita", 3, "unit"), I("yogur", 2, "unit"), I("pepino", 100, "g"), I("tomate", 150, "g", true), I("sal", 5, "g")],
    steps: [
      S("Corta el pollo en dados de 3 cm. Mézclalo con el zumo de medio limón, el orégano, 2 ajos picados, la mitad del aceite y 3 g de sal. Marina 15 minutos (mejor 1 hora).", 15),
      S("Para el tzatziki, ralla el pepino, exprímelo bien y mézclalo con el yogur, 1 ajo picado, un chorrito de aceite, sal y unas gotas de limón. Resérvalo en frío."),
      S("Calienta una sartén a fuego fuerte con un poco de aceite. Cocina el pollo 8-10 minutos, dándole la vuelta cada 2 minutos, hasta que esté dorado y blanco por dentro.", 9),
      S("Calienta las pitas 30 segundos por lado en una sartén seca.", 2),
      S("Monta: pita, pollo, tzatziki y tomate en rodajas. Dobla y come con la mano."),
    ],
  }),
  r({
    id: "bibimbap-casero", title: "Bibimbap casero", cuisine: "coreana", authenticity: "adapted",
    origin: "Corea (adaptado)", note: "Sin gochujang ni verduras fermentadas: es una versión suave con ingredientes de supermercado. Añade chile para dar picante.",
    baseServings: 2, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("arroz", 200, "g"), I("zanahoria", 150, "g"), I("espinacas", 200, "g"), I("huevo", 2, "unit"), I("soja", 30, "ml"), I("sesamo", 5, "g"), I("ajo", 1, "unit"), I("aceite", 30, "ml"), I("chile", 1, "unit", true)],
    steps: [
      S("Cuece el arroz 15 minutos y mantenlo tapado y caliente.", 15),
      S("Corta la zanahoria en tiras finas (juliana) y saltéala 3 minutos con una cucharada de aceite a fuego medio-alto. Sazona con unas gotas de soja y reserva.", 3),
      S("En la misma sartén, saltea las espinacas con el ajo picado 2 minutos hasta que se reduzcan. Sazona con soja y reserva.", 2),
      S("Fríe los huevos en el aceite restante 2 minutos: clara cuajada y yema líquida."),
      S("Sirve el arroz en dos cuencos con las verduras en sectores y el huevo en el centro. Espolvorea sésamo y la soja restante."),
      S("Mezcla todo bien con una cuchara antes de comer: de eso trata el plato (bibim significa mezclar)."),
    ],
  }),
  r({
    id: "chana-masala", title: "Chana masala (garbanzos especiados)", cuisine: "india", authenticity: "adapted",
    origin: "India (adaptado)", note: "Con garbanzos de bote para tardar 30 minutos; el curry en polvo sustituye a la mezcla de especias completa.",
    baseServings: 3, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("garbanzos-cocidos", 500, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("tomate-triturado", 300, "g"), I("curry", 8, "g"), I("comino", 3, "g"), I("limon", 0.5, "unit"), I("arroz", 210, "g"), I("aceite", 30, "ml"), I("sal", 5, "g")],
    steps: [
      S("Escurre y enjuaga los garbanzos. Pica la cebolla y el ajo y ralla el jengibre."),
      S("Sofríe la cebolla en el aceite a fuego medio 8 minutos hasta que esté dorada. Añade ajo y jengibre 1 minuto.", 9),
      S("Añade el curry y el comino y remueve 30 segundos. Incorpora el tomate y cocina 5 minutos, hasta que el aceite se separe.", 6),
      S("Agrega los garbanzos, la sal y un vaso de agua. Cocina a fuego suave 10 minutos, aplastando algunos con el tenedor para espesar.", 10),
      S("Cuece el arroz 12 minutos en agua con sal y escúrrelo. Termina el guiso con el zumo de limón y sirve con el arroz.", 12),
    ],
  }),
  r({
    id: "tajin-pollo-limon", title: "Tajín de pollo con limón y aceitunas", cuisine: "marroqui", authenticity: "adapted",
    origin: "Marruecos (adaptado)", note: "Hecho en olla normal en vez de tajín de barro, y sin limón en conserva (se usa limón fresco).",
    baseServings: 3, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pollo", 700, "g"), I("cebolla", 2, "unit"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("comino", 3, "g"), I("pimenton", 4, "g"), I("limon", 1, "unit"), I("aceitunas", 60, "g"), I("aceite", 30, "ml"), I("cuscus", 200, "g"), I("sal", 6, "g")],
    steps: [
      S("Pica las cebollas en juliana, el ajo fino y ralla el jengibre. Corta el limón en gajos finos."),
      S("En una olla ancha con el aceite, dora el pollo salado 3-4 minutos por lado y retíralo.", 8),
      S("En la misma olla, rehoga cebolla, ajo y jengibre 6 minutos a fuego medio. Añade comino y pimentón 30 segundos.", 7),
      S("Devuelve el pollo, añade un vaso de agua y el limón. Tapa y cocina a fuego suave 35 minutos, hasta que el pollo esté tierno y la cebolla casi deshecha.", 35),
      S("Añade las aceitunas los últimos 5 minutos. Prueba y rectifica de sal.", 5),
      S("Prepara el cuscús: cúbrelo con la misma cantidad de agua hirviendo con sal, tapa 5 minutos y suéltalo con un tenedor. Sirve el pollo sobre el cuscús.", 5),
    ],
  }),
  r({
    id: "risotto-champinones", title: "Risotto de champiñones", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (adaptado)", note: "Se usa arroz redondo genérico en lugar de arborio o carnaroli; queda algo menos cremoso.",
    baseServings: 2, prepMin: 10, cookMin: 30, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("arroz", 180, "g"), I("champinones", 250, "g"), I("cebolla", 0.5, "unit"), I("ajo", 1, "unit"), I("vino-blanco", 80, "ml"), I("caldo", 700, "ml"), I("mantequilla", 20, "g"), I("queso", 40, "g"), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Calienta el caldo en un cazo y mantenlo a fuego mínimo. Lamina los champiñones, pica la cebolla y el ajo."),
      S("Saltea los champiñones en una sartén amplia con la mitad del aceite a fuego fuerte 4 minutos, hasta que se doren. Retíralos.", 4),
      S("En la misma sartén, rehoga la cebolla y el ajo con el aceite restante 3 minutos. Añade el arroz y tuéstalo 1 minuto removiendo.", 4),
      S("Vierte el vino y deja que se evapore por completo (1-2 minutos).", 2),
      S("Añade el caldo caliente, un cucharón cada vez, removiendo con frecuencia. Espera a que se absorba antes de añadir el siguiente. Tarda unos 18 minutos; el arroz debe quedar al dente y cremoso.", 18),
      S("Fuera del fuego, añade los champiñones, la mantequilla y el queso rallado. Remueve enérgicamente 1 minuto y deja reposar 2 minutos.", 3),
    ],
  }),
  r({
    id: "pasta-aglio-olio", title: "Pasta aglio e olio", cuisine: "italiana", authenticity: "traditional",
    origin: "Italia", note: "Receta minimalista: la calidad del aceite y el punto de la pasta lo son todo.",
    baseServings: 2, prepMin: 5, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 200, "g"), I("ajo", 4, "unit"), I("aceite", 50, "ml"), I("chile", 1, "unit", true), I("perejil", 10, "g", true), I("sal", 12, "g")],
    steps: [
      S("Hierve 2 litros de agua con 12 g de sal. Lamina los ajos finos (no los piques)."),
      S("Cuece la pasta al dente, unos 9 minutos. Reserva un vaso del agua antes de escurrir.", 9),
      S("Mientras, calienta el aceite en una sartén a fuego bajo con el ajo y el chile. Cocina 3-4 minutos hasta que el ajo esté dorado pálido: si se oscurece, amarga.", 4),
      S("Añade la pasta a la sartén con un cucharón del agua reservada. Mezcla a fuego medio 1 minuto hasta que el aceite y el agua formen una salsa ligera que cubra la pasta.", 1),
      S("Espolvorea perejil y sirve inmediatamente."),
    ],
  }),
  r({
    id: "shakshuka", title: "Shakshuka (huevos en salsa de tomate)", cuisine: "oriente-medio", authenticity: "adapted",
    origin: "Norte de África y Oriente Medio", note: "Plato compartido en sartén; se mojan trozos de pan en la salsa. Se ajusta el picante con chile.",
    baseServings: 3, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("tomate-triturado", 400, "g"), I("pimiento", 1, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("comino", 3, "g"), I("pimenton", 4, "g"), I("huevo", 4, "unit"), I("aceite", 30, "ml"), I("pan", 120, "g"), I("sal", 4, "g")],
    steps: [
      S("Pica la cebolla y el pimiento en dados pequeños y el ajo fino."),
      S("Sofríe cebolla y pimiento en el aceite a fuego medio 10 minutos, hasta que estén blandos. Añade el ajo 1 minuto.", 11),
      S("Añade comino y pimentón, remueve 30 segundos y vierte el tomate con la sal. Cocina a fuego suave 10 minutos, hasta que espese.", 10),
      S("Haz 4 huecos en la salsa con una cuchara y casca un huevo en cada uno. Tapa y cocina a fuego bajo 5-6 minutos: las claras cuajadas y las yemas aún blandas.", 6),
      S("Sirve directamente en la sartén, con el pan para mojar."),
    ],
  }),
];
