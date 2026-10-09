import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Lote 7: cocina de diario (España sobre todo) y algunos clásicos del mundo. Recetas escritas para COMOCOMO. */
export const recipesCasa2: Recipe[] = [
  // ——— Guisos y cuchara ———
  r({
    id: "alubias-con-chorizo", title: "Alubias blancas con chorizo", cuisine: "espanola", authenticity: "adapted",
    origin: "España", note: "Versión rápida con alubia cocida de bote; con alubia seca, remójala la noche antes y cuécela 1 hora y media.",
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("alubias-blancas", 800, "g"), I("chorizo", 200, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 150, "g"), I("pimenton", 5, "g"), I("caldo", 500, "ml"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Sofríe la cebolla, el pimiento y el ajo picados en el aceite 10 minutos. Añade el chorizo en rodajas y rehoga 3 minutos.", 13),
      S("Añade el pimentón fuera del fuego, luego el tomate y cocina 5 minutos.", 5),
      S("Incorpora las alubias escurridas y el caldo y cuece a fuego suave 12 minutos. Chafa unas cuantas alubias para espesar y ajusta de sal.", 12),
    ],
  }),
  r({
    id: "sopa-de-picadillo", title: "Sopa de picadillo", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Andalucía)", note: "Caldo con fideo, huevo duro y jamón: la sopa de los días de frío.",
    baseServings: 4, prepMin: 5, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("caldo", 1500, "ml"), I("pasta", 100, "g"), I("huevo", 2, "unit"), I("jamon", 80, "g"), I("perejil", 5, "g", true)],
    steps: [
      S("Cuece los huevos 10 minutos, enfríalos y pícalos.", 10),
      S("Calienta el caldo y, cuando hierva, añade la pasta (fideo fino) y cuece 4 minutos.", 5),
      S("Sirve con el huevo y el jamón picados (y perejil) por encima."),
    ],
  }),
  r({
    id: "menestra-verduras", title: "Menestra de verduras", cuisine: "espanola", authenticity: "adapted",
    origin: "España (Navarra y La Rioja)", note: "La de Tudela lleva alcachofas y espárragos frescos; esta usa verduras de todo el año.",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("judias-verdes", 300, "g"), I("zanahoria", 200, "g"), I("guisantes", 200, "g"), I("coliflor", 0.5, "unit"), I("patata", 300, "g"), I("jamon", 80, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("harina", 10, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece en agua con sal cada verdura por separado y escúrrela, guardando el agua: la patata y la zanahoria 12 minutos, las judías y la coliflor 8, los guisantes 3.", 20),
      S("Sofríe la cebolla y el ajo picados en el aceite 6 minutos y añade el jamón en tacos 1 minuto. Espolvorea la harina y remueve.", 7),
      S("Añade un vaso del agua de cocción, mezcla con las verduras y cuece 3 minutos para que se impregnen.", 3),
    ],
  }),
  r({
    id: "patatas-con-costillas", title: "Patatas guisadas con costillas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "«Chasca» las patatas (romperlas en vez de cortarlas): sueltan almidón y el caldo espesa.",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("costillas-cerdo", 700, "g"), I("patata", 1000, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 3, "unit"), I("tomate-triturado", 150, "g"), I("pimenton", 6, "g"), I("vino-blanco", 100, "ml"), I("aceite", 30, "ml"), I("sal", 9, "g")],
    steps: [
      S("Sala las costillas troceadas y dóralas en el aceite 8 minutos. Añade la cebolla, el pimiento y el ajo picados y sofríe 8 minutos.", 16),
      S("Agrega el pimentón y el tomate 3 minutos, luego el vino 2 minutos. Cubre con agua y cuece 20 minutos.", 25),
      S("Añade las patatas chascadas y cuece 20 minutos más, hasta que estén tiernas y el caldo espeso.", 20),
    ],
  }),
  r({
    id: "estofado-ternera", title: "Estofado de ternera con patatas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 15, cookMin: 110, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("ternera", 800, "g"), I("patata", 600, "g"), I("zanahoria", 200, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("vino-tinto", 200, "ml"), I("tomate-triturado", 150, "g"), I("harina", 15, "g"), I("caldo", 600, "ml"), I("aceite", 40, "ml"), I("sal", 9, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Corta la ternera (morcillo o aguja) en dados, salpimiéntala, pásala por la harina y dórala en tandas en el aceite 8 minutos.", 8),
      S("Sofríe la cebolla, la zanahoria en rodajas y el ajo 8 minutos. Añade el tomate 3 minutos y el vino 3 minutos.", 14),
      S("Devuelve la carne, cubre con el caldo, tapa y cuece a fuego suave 1 hora y cuarto.", 75),
      S("Añade las patatas en trozos y cuece 20 minutos más.", 20),
    ],
  }),
  r({
    id: "crema-de-verduras", title: "Crema de verduras", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Aprovecha lo que haya en la nevera; la patata le da cuerpo sin nata.",
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("puerro", 2, "unit"), I("zanahoria", 300, "g"), I("calabacin", 300, "g"), I("patata", 250, "g"), I("cebolla", 1, "unit"), I("caldo", 1000, "ml"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Rehoga el puerro y la cebolla en el aceite 8 minutos.", 8),
      S("Añade la zanahoria, el calabacín y la patata en trozos y el caldo. Cuece 20 minutos.", 20),
      S("Tritura hasta que esté fina y ajusta de sal. Sirve con un hilo de aceite.", 2),
    ],
  }),
  r({
    id: "crema-de-champinones", title: "Crema de champiñones", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia (velouté de champignons)", baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("champinones", 500, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("patata", 150, "g"), I("caldo", 800, "ml"), I("nata", 100, "ml"), I("mantequilla", 30, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha la cebolla y el ajo en la mantequilla 6 minutos. Añade los champiñones laminados y saltéalos a fuego fuerte 6 minutos.", 12),
      S("Añade la patata en dados y el caldo y cuece 15 minutos.", 15),
      S("Tritura con la nata, salpimienta y sirve con unas láminas de champiñón salteado reservadas."),
    ],
  }),
  // ——— Verduras ———
  r({
    id: "coliflor-gratinada", title: "Coliflor gratinada con bechamel", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 35, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("coliflor", 1, "unit"), I("leche", 500, "ml"), I("mantequilla", 40, "g"), I("harina", 40, "g"), I("queso", 80, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece los ramilletes de coliflor en agua con sal 8 minutos y escúrrelos bien.", 8),
      S("Para la bechamel, tuesta la harina en la mantequilla 2 minutos y añade la leche caliente poco a poco, removiendo, 8 minutos hasta que espese. Salpimienta.", 10),
      S("Pon la coliflor en una fuente, cubre con la bechamel y el queso rallado y gratina en el horno a 220 °C 15 minutos.", 15, 220),
    ],
  }),
  r({
    id: "pimientos-rellenos", title: "Pimientos rellenos de carne", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("pimiento", 4, "unit"), I("ternera-picada", 400, "g"), I("arroz", 80, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 300, "g"), I("queso", 60, "g"), I("aceite", 30, "ml"), I("sal", 7, "g")],
    steps: [
      S("Corta la tapa de los pimientos y vacíalos. Cuece el arroz 8 minutos y escúrrelo.", 8),
      S("Sofríe la cebolla y el ajo en el aceite 6 minutos, añade la carne 6 minutos y la mitad del tomate 4 minutos. Mezcla con el arroz y sala.", 16),
      S("Rellena los pimientos, ponlos de pie en una fuente con el resto del tomate y un vaso de agua, tápalos y hornea a 190 °C 30 minutos.", 30, 190),
      S("Pon el queso encima y gratina 5 minutos más.", 5, 190),
    ],
  }),
  r({
    id: "berenjenas-rellenas", title: "Berenjenas rellenas de carne", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Mallorca y Andalucía)", baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("berenjena", 800, "g"), I("ternera-picada", 300, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 200, "g"), I("leche", 300, "ml"), I("harina", 25, "g"), I("mantequilla", 25, "g"), I("queso", 80, "g"), I("aceite", 30, "ml"), I("sal", 7, "g")],
    steps: [
      S("Parte las berenjenas por la mitad, hazles cortes en la carne, sala y hornea a 200 °C 25 minutos. Vacíalas dejando 1 cm.", 25, 200),
      S("Sofríe la cebolla y el ajo en el aceite 6 minutos, añade la carne 6 minutos, la pulpa picada y el tomate y cocina 6 minutos.", 18),
      S("Haz una bechamel rápida con la mantequilla, la harina y la leche, 6 minutos.", 6),
      S("Rellena las berenjenas, cubre con bechamel y queso y gratina 12 minutos.", 12, 200),
    ],
  }),
  r({
    id: "calabacines-rellenos", title: "Calabacines rellenos de atún", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("calabacin", 800, "g"), I("atun-lata", 240, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 200, "g"), I("huevo", 2, "unit"), I("queso", 80, "g"), I("aceite", 20, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece los huevos 10 minutos. Parte los calabacines a lo largo, vacíalos con una cuchara y hornéalos a 200 °C 12 minutos.", 12, 200),
      S("Sofríe la cebolla en el aceite 6 minutos con la pulpa picada, añade el tomate 5 minutos y mezcla con el atún escurrido y el huevo picado.", 11),
      S("Rellena los calabacines, cubre con el queso y hornea 15 minutos hasta que gratinen.", 15, 200),
    ],
  }),
  r({
    id: "espinacas-catalana", title: "Espinacas a la catalana", cuisine: "espanola", authenticity: "adapted",
    origin: "España (Cataluña)", note: "Llevan pasas además de piñones; si tienes, añade un puñado.",
    baseServings: 2, prepMin: 5, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("espinacas", 400, "g"), I("pinones", 30, "g"), I("ajo", 2, "unit"), I("jamon", 50, "g", true), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Tuesta los piñones en el aceite con el ajo laminado 2 minutos, sin que se quemen.", 2),
      S("Añade las espinacas a puñados y saltéalas 4 minutos hasta que se reduzcan y el agua se evapore.", 4),
      S("Sala y, si quieres, añade el jamón en tiras al final.", 1),
    ],
  }),
  // ——— Pasta y arroz ———
  r({
    id: "canelones", title: "Canelones de carne", cuisine: "espanola", authenticity: "adapted",
    origin: "España (Cataluña, por Sant Esteve)", note: "Se usan láminas de lasaña enrolladas; el relleno tradicional aprovecha la carne del cocido.",
    baseServings: 4, prepMin: 30, cookMin: 50, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("laminas-lasana", 250, "g"), I("ternera-picada", 300, "g"), I("pollo", 200, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 150, "g"), I("leche", 700, "ml"), I("harina", 55, "g"), I("mantequilla", 50, "g"), I("queso", 80, "g"), I("aceite", 30, "ml"), I("sal", 8, "g")],
    steps: [
      S("Sofríe la cebolla en el aceite 10 minutos, añade la carne picada y el pollo picado fino 10 minutos y el tomate 5. Sala.", 25),
      S("Haz la bechamel: tuesta la harina en la mantequilla 2 minutos, añade la leche y cuece 8 minutos. Mezcla un tercio con la carne.", 10),
      S("Cuece las láminas según el paquete, enrolla el relleno en cada una y colócalas en una fuente.", 10),
      S("Cubre con bechamel y queso y hornea a 200 °C 15 minutos hasta que gratine.", 15, 200),
    ],
  }),
  r({
    id: "macarrones-chorizo", title: "Macarrones con chorizo", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "El plato de comedor escolar por excelencia.",
    baseServings: 4, prepMin: 5, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("pasta", 400, "g"), I("chorizo", 150, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 400, "g"), I("queso", 80, "g"), I("aceite", 20, "ml"), I("azucar", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece los macarrones en agua con sal según el paquete y escúrrelos.", 11),
      S("Sofríe la cebolla en el aceite 8 minutos, añade el chorizo en dados 3 minutos y el tomate con el azúcar 8 minutos.", 19),
      S("Mezcla la pasta con la salsa, cubre con queso y gratina en el horno a 220 °C 6 minutos.", 6, 220),
    ],
  }),
  r({
    id: "pasta-atun-tomate", title: "Pasta con atún y tomate", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (pasta al tonno)", baseServings: 4, prepMin: 5, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 400, "g"), I("atun-lata", 240, "g"), I("tomate-triturado", 400, "g"), I("ajo", 2, "unit"), I("aceitunas", 50, "g", true), I("oregano", 2, "g"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece la pasta en agua con sal según el paquete.", 11),
      S("Mientras, dora el ajo laminado en el aceite 1 minuto, añade el tomate y el orégano y cocina 10 minutos.", 11),
      S("Añade el atún escurrido (y las aceitunas) 1 minuto y mezcla con la pasta escurrida.", 1),
    ],
  }),
  r({
    id: "risotto-calabaza", title: "Risotto de calabaza", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (Lombardía)", note: "Mejor con arroz carnaroli o arborio; el redondo de aquí también funciona.",
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("arroz", 320, "g"), I("calabaza", 500, "g"), I("cebolla", 1, "unit"), I("vino-blanco", 100, "ml"), I("caldo", 1200, "ml"), I("parmesano", 60, "g"), I("mantequilla", 40, "g"), I("aceite", 20, "ml"), I("sal", 5, "g")],
    steps: [
      S("Pocha la cebolla en el aceite 6 minutos y añade la calabaza en dados pequeños 5 minutos.", 11),
      S("Añade el arroz y nácaralo 2 minutos. Moja con el vino hasta que se evapore.", 3),
      S("Ve añadiendo el caldo caliente cazo a cazo, removiendo, durante 18 minutos, hasta que el arroz esté al dente y cremoso.", 18),
      S("Fuera del fuego, añade la mantequilla fría y el parmesano y remueve con fuerza. Reposa 2 minutos tapado.", 2),
    ],
  }),
  r({
    id: "arroz-con-pollo", title: "Arroz con pollo y verduras", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("arroz", 320, "g"), I("pollo", 600, "g"), I("pimiento", 1, "unit"), I("judias-verdes", 150, "g"), I("tomate-triturado", 150, "g"), I("ajo", 2, "unit"), I("pimenton", 4, "g"), I("caldo", 1000, "ml"), I("aceite", 50, "ml"), I("sal", 8, "g")],
    steps: [
      S("Dora el pollo troceado y salado en el aceite de una paella o sartén ancha 10 minutos.", 10),
      S("Añade el pimiento y las judías en trozos 5 minutos, luego el ajo, el pimentón y el tomate 3 minutos.", 8),
      S("Agrega el arroz, remueve 1 minuto y vierte el caldo caliente. Cuece 18 minutos sin remover: 8 a fuego fuerte y 10 a fuego medio.", 19),
      S("Reposa 5 minutos tapado con un paño.", 5),
    ],
  }),
  // ——— Carne y pollo ———
  r({
    id: "pollo-asado", title: "Pollo asado con patatas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Seca bien la piel y no lo tapes: así queda crujiente.",
    baseServings: 4, prepMin: 15, cookMin: 75, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pollo", 1800, "g"), I("patata", 800, "g"), I("cebolla", 1, "unit"), I("limon", 1, "unit"), I("ajo", 4, "unit"), I("vino-blanco", 150, "ml"), I("aceite", 50, "ml"), I("oregano", 2, "g"), I("sal", 12, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Seca el pollo entero, úntalo con aceite, sal y orégano y mete dentro el limón partido y los ajos.", 10, 200),
      S("Pon en la bandeja las patatas en rodajas gruesas y la cebolla en aros, con sal y aceite, y el pollo encima.", 2),
      S("Hornea 1 hora y cuarto. A mitad, riega con el vino. Está hecho cuando, al pinchar el muslo, el jugo sale transparente.", 75, 200),
      S("Deja reposar 10 minutos antes de trinchar."),
    ],
  }),
  r({
    id: "san-jacobos", title: "San Jacobos caseros", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("cerdo", 500, "g"), I("jamon", 100, "g"), I("queso", 120, "g"), I("huevo", 2, "unit"), I("harina", 50, "g"), I("pan-rallado", 100, "g"), I("aceite", 300, "ml"), I("sal", 4, "g")],
    steps: [
      S("Pide filetes de lomo de cerdo muy finos. Sálalos y haz sándwiches de dos filetes con una loncha de jamón y otra de queso dentro."),
      S("Pásalos por harina, huevo batido y pan rallado, apretando los bordes para que no se salga el queso."),
      S("Fríelos en el aceite a 170 °C 3 minutos por lado, hasta que estén dorados. Escúrrelos.", 12, 170),
    ],
  }),
  r({
    id: "flamenquines", title: "Flamenquines", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Córdoba)", baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("cerdo", 500, "g"), I("jamon", 150, "g"), I("huevo", 2, "unit"), I("harina", 50, "g"), I("pan-rallado", 100, "g"), I("aceite", 400, "ml"), I("patata", 600, "g"), I("sal", 6, "g")],
    steps: [
      S("Aplana los filetes de lomo de cerdo con un rodillo entre papel film. Cubre cada uno con jamón y enróllalos bien apretados."),
      S("Pásalos por harina, huevo y pan rallado y deja 10 minutos en la nevera para que el rebozado se asiente.", 10),
      S("Fríelos en el aceite a 170 °C 6 minutos, girándolos, y fríe después las patatas en bastones 8 minutos para acompañar.", 14, 170),
    ],
  }),
  r({
    id: "pechugas-villaroy", title: "Pechugas Villaroy", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "La bechamel debe quedar espesa para que se pegue a la pechuga.",
    baseServings: 4, prepMin: 140, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 600, "g"), I("leche", 500, "ml"), I("harina", 120, "g"), I("mantequilla", 60, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("aceite", 400, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las pechugas fileteadas en agua con sal 8 minutos y sécalas.", 8),
      S("Haz una bechamel espesa: tuesta 70 g de harina en la mantequilla 2 minutos y añade la leche, cociendo 10 minutos. Salpimienta.", 12),
      S("Baña las pechugas en la bechamel por las dos caras y déjalas en una bandeja en la nevera 2 horas.", 120),
      S("Pásalas por la harina restante, el huevo y el pan rallado y fríelas a 175 °C 3 minutos por lado.", 10, 175),
    ],
  }),
  r({
    id: "pollo-salsa-almendras", title: "Pollo en salsa de almendras", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pollo", 1000, "g"), I("almendras", 60, "g"), I("pan", 40, "g"), I("ajo", 3, "unit"), I("cebolla", 1, "unit"), I("vino-blanco", 150, "ml"), I("caldo", 400, "ml"), I("aceite", 50, "ml"), I("sal", 9, "g")],
    steps: [
      S("Fríe en el aceite las almendras, los ajos y la rebanada de pan 3 minutos hasta que se doren. Resérvalos.", 3),
      S("Dora el pollo troceado y salado en el mismo aceite 10 minutos. Añade la cebolla picada y rehoga 8 minutos.", 18),
      S("Tritura las almendras, el ajo y el pan con el vino y añádelo a la olla con el caldo.", 2),
      S("Cuece tapado 25 minutos, hasta que el pollo esté tierno y la salsa espesa.", 25),
    ],
  }),
  r({
    id: "empanada-gallega", title: "Empanada gallega de atún", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Galicia)", baseServings: 8, prepMin: 90, cookMin: 50, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("harina", 500, "g"), I("levadura", 7, "g"), I("vino-blanco", 50, "ml"), I("aceite", 150, "ml"), I("atun-lata", 400, "g"), I("cebolla", 3, "unit"), I("pimiento", 2, "unit"), I("tomate-triturado", 200, "g"), I("pimenton", 4, "g"), I("huevo", 2, "unit"), I("sal", 9, "g")],
    steps: [
      S("Pocha la cebolla y el pimiento en tiras en 100 ml de aceite 25 minutos. Añade el pimentón y el tomate 5 minutos. Escurre el aceite y resérvalo.", 30),
      S("Amasa la harina con la levadura, la sal, el vino, el aceite del sofrito y 200 ml de agua templada. Deja levar 45 minutos.", 45),
      S("Mezcla el sofrito con el atún y un huevo duro picado (cocido 10 minutos).", 10),
      S("Estira dos láminas finas, rellena, cierra los bordes y pinta con huevo. Hornea a 190 °C 40 minutos.", 40, 190),
    ],
  }),
  // ——— Pescado ———
  r({
    id: "bacalao-vizcaina", title: "Bacalao a la vizcaína", cuisine: "espanola", authenticity: "adapted",
    origin: "España (País Vasco)", note: "La salsa auténtica se hace con pimiento choricero; el pimentón dulce con pimiento asado es un atajo.",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "medium", equipment: ["olla", "batidora"],
    ingredients: [I("bacalao", 600, "g"), I("cebolla", 2, "unit"), I("pimiento", 2, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 200, "g"), I("pimenton", 8, "g"), I("pan", 30, "g"), I("aceite", 60, "ml"), I("sal", 3, "g")],
    steps: [
      S("Usa bacalao desalado. Pocha la cebolla, el pimiento rojo y el ajo en el aceite a fuego lento 25 minutos con el pan.", 25),
      S("Añade el pimentón, el tomate y un vaso de agua y cuece 10 minutos. Tritura la salsa y pásala por un colador.", 12),
      S("Pon el bacalao en la salsa con la piel hacia arriba y cuece a fuego suave 6 minutos.", 6),
    ],
  }),
  r({
    id: "merluza-romana", title: "Merluza a la romana", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("merluza", 700, "g"), I("harina", 80, "g"), I("huevo", 2, "unit"), I("limon", 1, "unit"), I("lechuga", 1, "unit"), I("aceite", 400, "ml"), I("sal", 6, "g")],
    steps: [
      S("Corta la merluza en trozos, sécala y sálala."),
      S("Pásala por harina y luego por huevo batido y fríela en el aceite a 175 °C 3 minutos por lado, en tandas.", 12, 175),
      S("Escúrrela y sirve con limón y una ensalada de lechuga."),
    ],
  }),
  r({
    id: "salmon-papillote", title: "Salmón en papillote con verduras", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia", note: "Cerrado en papel, el pescado se cuece en su propio vapor y no se seca.",
    baseServings: 2, prepMin: 10, cookMin: 18, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("salmon", 350, "g"), I("calabacin", 150, "g"), I("zanahoria", 100, "g"), I("puerro", 1, "unit"), I("limon", 1, "unit"), I("vino-blanco", 40, "ml"), I("aceite", 15, "ml"), I("sal", 3, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Corta el calabacín, la zanahoria y el puerro en tiras finas.", 10, 200),
      S("Sobre papel de horno, pon las verduras, encima el salmón con sal, rodajas de limón, el vino y el aceite. Cierra el paquete doblando bien los bordes."),
      S("Hornea 15-18 minutos y abre el paquete en la mesa.", 17, 200),
    ],
  }),
  r({
    id: "bocadillo-calamares", title: "Bocadillo de calamares", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Madrid)", baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calamares", 500, "g"), I("harina", 100, "g"), I("pan", 500, "g"), I("limon", 1, "unit"), I("aceite", 500, "ml"), I("sal", 5, "g")],
    steps: [
      S("Corta los calamares en anillas, sécalos muy bien y sálalos."),
      S("Enharínalos, sacude el exceso y fríelos en el aceite a 180 °C 2 minutos por tanda, hasta que estén dorados.", 10, 180),
      S("Rellena las barras de pan abiertas con los calamares recién fritos y un chorrito de limón."),
    ],
  }),
  // ——— Ensaladas y cenas ligeras ———
  r({
    id: "ensalada-pasta", title: "Ensalada de pasta", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (insalata di pasta)", baseServings: 4, prepMin: 15, cookMin: 12, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pasta", 300, "g"), I("atun-lata", 160, "g"), I("tomate", 300, "g"), I("maiz", 140, "g"), I("aceitunas", 60, "g"), I("mozzarella", 125, "g"), I("aceite", 40, "ml"), I("vinagre", 15, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece la pasta corta en agua con sal según el paquete, escúrrela y enfríala bajo el grifo.", 11),
      S("Mezcla con el tomate en dados, el maíz, el atún, las aceitunas y la mozzarella en dados."),
      S("Aliña con el aceite, el vinagre y sal y deja en la nevera 15 minutos antes de servir."),
    ],
  }),
  r({
    id: "ensalada-garbanzos", title: "Ensalada de garbanzos", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 3, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("garbanzos-cocidos", 400, "g"), I("tomate", 250, "g"), I("pimiento", 1, "unit"), I("cebolla", 0.5, "unit"), I("pepino", 150, "g"), I("huevo", 2, "unit"), I("atun-lata", 120, "g", true), I("aceite", 40, "ml"), I("vinagre", 15, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece los huevos 10 minutos. Enjuaga y escurre los garbanzos.", 10),
      S("Pica el tomate, el pimiento, la cebolla y el pepino en dados pequeños y mézclalos con los garbanzos."),
      S("Aliña con el aceite, el vinagre y la sal y termina con el huevo en gajos (y el atún)."),
    ],
  }),
  r({
    id: "ensalada-lentejas", title: "Ensalada de lentejas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 3, prepMin: 15, cookMin: 0, difficulty: "easy",
    ingredients: [I("lentejas", 400, "g"), I("tomate", 200, "g"), I("pimiento", 1, "unit"), I("cebolleta", 1, "unit"), I("feta", 100, "g", true), I("aceite", 40, "ml"), I("vinagre", 15, "ml"), I("mostaza", 5, "g"), I("sal", 3, "g")],
    steps: [
      S("Usa lentejas cocidas, bien escurridas y enjuagadas."),
      S("Pica el tomate, el pimiento y la cebolleta y mézclalos con las lentejas."),
      S("Bate el aceite con el vinagre, la mostaza y la sal y aliña. Desmenuza el feta por encima si quieres."),
    ],
  }),
  r({
    id: "tosta-aguacate-huevo", title: "Tostada de aguacate y huevo", cuisine: "estadounidense", authenticity: "traditional",
    origin: "EE. UU. y Australia (brunch)", baseServings: 2, prepMin: 5, cookMin: 6, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pan", 120, "g"), I("aguacate", 1, "unit"), I("huevo", 2, "unit"), I("limon", 0.5, "unit"), I("chile", 0.5, "unit", true), I("aceite", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Tuesta el pan. Chafa el aguacate con el zumo de limón y la sal."),
      S("Fríe o escalfa los huevos 3 minutos para que la yema quede líquida.", 3),
      S("Unta el aguacate en las tostadas, pon el huevo encima, un hilo de aceite y chile picado si te gusta."),
    ],
  }),
  r({
    id: "wrap-pollo", title: "Wraps de pollo y verduras", cuisine: "estadounidense", authenticity: "adapted",
    origin: "EE. UU.", baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("tortilla-trigo", 4, "unit"), I("pollo", 400, "g"), I("lechuga", 1, "unit"), I("tomate", 200, "g"), I("queso", 80, "g"), I("yogur", 1, "unit"), I("limon", 0.5, "unit"), I("pimenton", 3, "g"), I("aceite", 15, "ml"), I("sal", 4, "g")],
    steps: [
      S("Corta el pollo en tiras, sazónalo con el pimentón y sal y saltéalo en el aceite 6 minutos.", 6),
      S("Mezcla el yogur con el zumo de limón y una pizca de sal para la salsa."),
      S("Calienta las tortillas 20 segundos en la sartén. Rellena con lechuga, tomate, pollo, queso y salsa, dobla los lados y enrolla.", 2),
    ],
  }),
  // ——— Mundo ———
  r({
    id: "cazuela-chilena", title: "Cazuela chilena de pollo", cuisine: "chilena", authenticity: "adapted",
    origin: "Chile", note: "Cada plato lleva una presa de carne, una patata, un trozo de zapallo y de choclo.",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pollo", 800, "g"), I("patata", 700, "g"), I("calabaza", 400, "g"), I("maiz", 285, "g"), I("judias-verdes", 150, "g"), I("arroz", 60, "g"), I("cebolla", 1, "unit"), I("zanahoria", 150, "g"), I("ajo", 2, "unit"), I("oregano", 2, "g"), I("aceite", 20, "ml"), I("sal", 10, "g")],
    steps: [
      S("Dora el pollo en presas en el aceite 6 minutos con la cebolla, la zanahoria y el ajo. Cubre con 2 litros de agua, sala y cuece 20 minutos.", 26),
      S("Añade las patatas peladas (4 medianas, enteras), la calabaza en trozos grandes y el orégano y cuece 12 minutos.", 12),
      S("Agrega el arroz, las judías verdes y el maíz y cuece 8 minutos más. Sirve una pieza de cada en cada plato.", 8),
    ],
  }),
  r({
    id: "arroz-pollo-peruano", title: "Arroz con pollo peruano", cuisine: "peruana", authenticity: "adapted",
    origin: "Perú", note: "Su color verde viene del culantro (cilantro) triturado; lleva también ají amarillo.",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "medium", equipment: ["olla", "batidora"],
    ingredients: [I("pollo", 900, "g"), I("arroz", 320, "g"), I("cilantro", 60, "g"), I("espinacas", 50, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("pimiento", 1, "unit"), I("guisantes", 150, "g"), I("zanahoria", 100, "g"), I("caldo", 700, "ml"), I("aceite", 40, "ml"), I("sal", 9, "g")],
    steps: [
      S("Dora el pollo en presas, salado, en el aceite 10 minutos. Resérvalo.", 10),
      S("Tritura el cilantro y las espinacas con un poco de caldo. Sofríe la cebolla, el ajo y el pimiento 8 minutos y añade el triturado 3 minutos.", 11),
      S("Devuelve el pollo con el resto del caldo y cuece 15 minutos.", 15),
      S("Añade el arroz, la zanahoria en dados y los guisantes, y cuece tapado a fuego bajo 18 minutos.", 18),
    ],
  }),
  r({
    id: "pastitsio", title: "Pastitsio (lasaña griega de macarrones)", cuisine: "griega", authenticity: "adapted",
    origin: "Grecia", note: "La carne se perfuma con canela, como en la moussaka.",
    baseServings: 6, prepMin: 25, cookMin: 70, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("pasta", 400, "g"), I("ternera-picada", 500, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 400, "g"), I("canela", 2, "g"), I("vino-tinto", 100, "ml"), I("leche", 800, "ml"), I("harina", 70, "g"), I("mantequilla", 70, "g"), I("huevo", 2, "unit"), I("queso", 100, "g"), I("aceite", 20, "ml"), I("sal", 9, "g")],
    steps: [
      S("Sofríe la cebolla en el aceite 6 minutos, añade la carne 8 minutos, el vino 3 y el tomate con la canela 15 minutos.", 32),
      S("Cuece la pasta (macarrones largos o penne) 2 minutos menos de lo indicado.", 9),
      S("Haz la bechamel con la mantequilla, la harina y la leche, 10 minutos. Fuera del fuego añade los huevos y la mitad del queso.", 10),
      S("En una fuente, pon pasta, carne y pasta; cubre con la bechamel y el resto del queso. Hornea a 180 °C 40 minutos y deja reposar 15.", 40, 180),
    ],
  }),
  r({
    id: "sopa-tomate", title: "Sopa de tomate asado", cuisine: "estadounidense", authenticity: "adapted",
    origin: "EE. UU. y Reino Unido", note: "Clásico acompañado de un sándwich de queso a la plancha.",
    baseServings: 4, prepMin: 10, cookMin: 50, difficulty: "easy", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("tomate", 1200, "g"), I("cebolla", 1, "unit"), I("ajo", 4, "unit"), I("caldo", 500, "ml"), I("albahaca", 10, "g"), I("nata", 50, "ml", true), I("azucar", 5, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Precalienta el horno a 210 °C. Pon los tomates partidos, la cebolla en gajos y los ajos con piel en una bandeja con aceite, sal y azúcar.", 10, 210),
      S("Ásalos 35 minutos, hasta que estén tostados en los bordes.", 35, 210),
      S("Pela los ajos y pásalo todo a una olla con el caldo. Cuece 8 minutos y tritura con la albahaca (y la nata).", 10),
    ],
  }),
];
