import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Lote 8: tapas y cocina vegetariana. Recetas escritas para COMOCOMO. */
export const recipesTapasVeg: Recipe[] = [
  // ——— Tapas ———
  r({
    id: "champinones-al-ajillo", title: "Champiñones al ajillo", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Fuego fuerte y sin amontonar: si no, sueltan agua y se cuecen en vez de dorarse.",
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("champinones", 500, "g"), I("ajo", 4, "unit"), I("chile", 0.5, "unit"), I("vino-blanco", 50, "ml"), I("perejil", 10, "g"), I("aceite", 40, "ml"), I("sal", 4, "g")],
    steps: [
      S("Limpia los champiñones con un papel húmedo (sin remojarlos) y córtalos en cuartos."),
      S("Saltéalos en el aceite muy caliente 6 minutos, en dos tandas, hasta que estén dorados. Sala al final.", 6),
      S("Añade el ajo laminado y el chile 1 minuto, riega con el vino y deja evaporar 2 minutos. Termina con perejil picado.", 3),
    ],
  }),
  r({
    id: "patatas-alioli", title: "Patatas alioli", cuisine: "espanola", authenticity: "adapted",
    origin: "España", note: "El allioli tradicional es solo ajo y aceite majados; esta versión lleva huevo, como se sirve en la mayoría de bares.",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("patata", 800, "g"), I("huevo", 1, "unit"), I("ajo", 2, "unit"), I("aceite", 200, "ml"), I("limon", 0.5, "unit"), I("perejil", 5, "g"), I("sal", 8, "g")],
    steps: [
      S("Cuece las patatas con piel en agua con sal 20 minutos, hasta que se pinchen sin resistencia. Pélalas y córtalas en dados cuando estén templadas.", 20),
      S("En el vaso de la batidora, pon el huevo, el ajo, el zumo de limón y sal. Tritura sin mover el brazo del fondo mientras añades el aceite en hilo, hasta que emulsione.", 2),
      S("Mezcla las patatas con el alioli y el perejil picado. Sirve frías o templadas."),
    ],
  }),
  r({
    id: "pincho-moruno", title: "Pinchos morunos", cuisine: "espanola", authenticity: "adapted",
    origin: "España (Andalucía, de origen magrebí)", note: "La mezcla de especias lleva comino, pimentón, cúrcuma y cilantro en grano; esta es una versión reducida.",
    baseServings: 4, prepMin: 130, cookMin: 12, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("cerdo", 600, "g"), I("pimenton", 8, "g"), I("comino", 4, "g"), I("curry", 3, "g"), I("oregano", 2, "g"), I("ajo", 2, "unit"), I("limon", 1, "unit"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Corta el cerdo (lomo o presa) en dados de 2,5 cm. Mézclalo con el pimentón, el comino, el curry, el orégano, el ajo machacado, el zumo de limón, el aceite y la sal.", 5),
      S("Deja marinar al menos 2 horas en la nevera.", 120),
      S("Ensarta en brochetas y hazlas en una plancha muy caliente 8-10 minutos, girándolas.", 10),
    ],
  }),
  r({
    id: "salpicon-marisco", title: "Salpicón de marisco", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 50, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("gambas", 300, "g"), I("mejillones", 500, "g"), I("pimiento", 1, "unit"), I("cebolla", 0.5, "unit"), I("tomate", 150, "g"), I("aceite", 60, "ml"), I("vinagre", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Cuece las gambas en agua hirviendo con sal 2 minutos y enfríalas en agua con hielo. Pélalas.", 3),
      S("Abre los mejillones en una olla tapada con un chorrito de agua, 4 minutos. Sácalos de la concha.", 4),
      S("Pica muy fino el pimiento (mejor uno rojo y uno verde), la cebolla y el tomate. Mezcla con el marisco."),
      S("Aliña con el aceite, el vinagre y la sal y deja en la nevera 30 minutos.", 30),
    ],
  }),
  r({
    id: "mejillones-tigre", title: "Mejillones tigre", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Bilbao)", note: "La bechamel debe quedar espesa para que no se escurra de la concha.",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("mejillones", 1000, "g"), I("cebolla", 0.5, "unit"), I("tomate-triturado", 50, "g"), I("leche", 300, "ml"), I("harina", 70, "g"), I("mantequilla", 30, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("aceite", 400, "ml"), I("sal", 3, "g")],
    steps: [
      S("Abre los mejillones al vapor 4 minutos. Guarda las mejores conchas y pica la carne.", 4),
      S("Pocha la cebolla en la mantequilla 6 minutos, añade el tomate 2 minutos y 40 g de harina. Agrega la leche y cuece 8 minutos hasta tener una bechamel espesa. Mezcla con los mejillones.", 16),
      S("Rellena las conchas, alisa y deja enfriar. Pasa la parte de la bechamel por el resto de harina, huevo y pan rallado."),
      S("Fríe en el aceite a 180 °C 1-2 minutos, con la concha hacia arriba, hasta que estén dorados.", 6, 180),
    ],
  }),
  r({
    id: "pimientos-asados", title: "Ensalada de pimientos asados", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 25, cookMin: 45, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pimiento", 4, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("aceite", 50, "ml"), I("vinagre", 10, "ml"), I("sal", 4, "g"), I("atun-lata", 120, "g", true)],
    steps: [
      S("Asa los pimientos rojos y la cebolla enteros, untados de aceite, en el horno a 200 °C 45 minutos, girándolos a mitad.", 45, 200),
      S("Tápalos 15 minutos para que suden y pélalos. Córtalos en tiras y guarda el jugo.", 15),
      S("Aliña con el jugo, el ajo laminado, el resto del aceite, el vinagre y la sal. Si quieres, añade atún. Mejor de un día para otro."),
    ],
  }),
  r({
    id: "aceitunas-alinadas", title: "Aceitunas aliñadas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 6, prepMin: 1450, cookMin: 0, difficulty: "easy",
    ingredients: [I("aceitunas", 400, "g"), I("ajo", 3, "unit"), I("limon", 0.5, "unit"), I("oregano", 2, "g"), I("pimiento", 0.5, "unit"), I("vinagre", 30, "ml"), I("aceite", 40, "ml")],
    steps: [
      S("Escurre las aceitunas y dales un golpe con el fondo de un vaso para que se abran un poco y absorban el aliño."),
      S("Mézclalas con el ajo machacado, rodajas de limón, el orégano, tiras de pimiento rojo, el vinagre y el aceite."),
      S("Guarda en un tarro cerrado y deja macerar al menos 24 horas en la nevera, removiendo de vez en cuando.", 1440),
    ],
  }),
  r({
    id: "bunuelos-bacalao", title: "Buñuelos de bacalao", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Cataluña y Levante)", baseServings: 4, prepMin: 45, cookMin: 15, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("bacalao", 250, "g"), I("harina", 150, "g"), I("levadura-quimica", 5, "g"), I("huevo", 2, "unit"), I("leche", 150, "ml"), I("ajo", 2, "unit"), I("perejil", 10, "g"), I("aceite", 500, "ml")],
    steps: [
      S("Usa bacalao desalado. Cuécelo en agua sin que llegue a hervir 3 minutos, escúrrelo y desmígalo sin piel ni espinas.", 3),
      S("Mezcla la harina con la levadura, los huevos y la leche hasta tener una masa espesa. Añade el bacalao, el ajo y el perejil picados. Reposa 30 minutos.", 30),
      S("Fríe cucharadas de masa en el aceite a 175 °C 3 minutos, en tandas, hasta que estén dorados e inflados.", 12, 175),
    ],
  }),
  r({
    id: "gambas-gabardina", title: "Gambas en gabardina", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "La cerveza da una masa más ligera; con agua con gas también funciona.",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("gambas", 400, "g"), I("harina", 120, "g"), I("levadura-quimica", 4, "g"), I("huevo", 1, "unit"), I("limon", 1, "unit"), I("aceite", 500, "ml"), I("sal", 3, "g")],
    steps: [
      S("Pela las gambas dejando la cola. Sécalas y sálalas."),
      S("Mezcla la harina, la levadura, el huevo y 150 ml de agua muy fría (o cerveza) hasta una masa como de yogur."),
      S("Coge cada gamba por la cola, pásala por la masa y fríela en el aceite a 180 °C 2 minutos hasta que esté dorada.", 8, 180),
      S("Escúrrelas y sírvelas con limón."),
    ],
  }),
  r({
    id: "calabacin-rebozado", title: "Calabacín rebozado", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calabacin", 500, "g"), I("harina", 80, "g"), I("huevo", 2, "unit"), I("aceite", 400, "ml"), I("sal", 5, "g"), I("miel", 20, "g", true)],
    steps: [
      S("Corta el calabacín en rodajas de medio centímetro, sálalo y déjalo 15 minutos sobre papel para que suelte agua. Sécalo.", 15),
      S("Pásalo por harina y huevo batido y fríelo en el aceite a 175 °C 2 minutos por lado, en tandas.", 12, 175),
      S("Escúrrelo y sírvelo al momento, con un hilo de miel si te gusta el contraste."),
    ],
  }),
  r({
    id: "champinones-rellenos", title: "Champiñones rellenos de jamón", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("champinones", 400, "g"), I("jamon", 80, "g"), I("ajo", 2, "unit"), I("queso", 60, "g"), I("pan-rallado", 20, "g"), I("perejil", 5, "g"), I("aceite", 30, "ml"), I("sal", 2, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Quita los pies a los champiñones grandes y pícalos.", 10, 200),
      S("Sofríe los pies picados con el ajo en la mitad del aceite 5 minutos; añade el jamón picado y el perejil.", 5),
      S("Rellena los sombreros, cubre con el queso rallado y el pan rallado, riega con el resto del aceite y hornea 15 minutos.", 15, 200),
    ],
  }),
  r({
    id: "morcilla-con-pimientos", title: "Morcilla con pimientos", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Castilla)", note: "La de Burgos lleva arroz y se fríe en rodajas; la de cebolla se deshace más.",
    baseServings: 4, prepMin: 5, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("morcilla", 400, "g"), I("pimiento", 2, "unit"), I("aceite", 30, "ml"), I("pan", 200, "g"), I("sal", 2, "g")],
    steps: [
      S("Fríe el pimiento rojo en tiras en el aceite a fuego medio 12 minutos, hasta que esté blando. Sala.", 12),
      S("Corta la morcilla en rodajas de 2 cm y dórala a fuego medio 2 minutos por lado sin pincharla.", 4),
      S("Sirve sobre rebanadas de pan con los pimientos encima."),
    ],
  }),
  r({
    id: "queso-frito-miel", title: "Queso frito con miel", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Usa queso semicurado o de cabra en rulo: los muy tiernos se salen del rebozado.",
    baseServings: 4, prepMin: 40, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("queso", 300, "g"), I("harina", 50, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("miel", 50, "g"), I("aceite", 400, "ml")],
    steps: [
      S("Corta el queso en bastones o triángulos de 1,5 cm."),
      S("Pásalos por harina, huevo, pan rallado, otra vez huevo y pan rallado. Enfríalos 30 minutos para que no se abran.", 30),
      S("Fríelos en el aceite a 180 °C 1 minuto, justo hasta que se doren. Sirve con la miel por encima.", 5, 180),
    ],
  }),
  r({
    id: "nachos", title: "Nachos con queso y frijoles", cuisine: "mexicana", authenticity: "adapted",
    origin: "México (Piedras Negras, 1943) y Tex-Mex", baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("tortilla-maiz", 10, "unit"), I("frijoles-negros", 400, "g"), I("queso", 200, "g"), I("tomate", 200, "g"), I("cebolla", 0.5, "unit"), I("chile", 1, "unit"), I("aguacate", 1, "unit"), I("lima", 1, "unit"), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Corta las tortillas en triángulos, úntalas de aceite y sal y hornéalas 8 minutos hasta que estén crujientes.", 8, 200),
      S("Cubre con los frijoles escurridos y el queso rallado y gratina 5 minutos.", 5, 200),
      S("Por encima, pon el tomate, la cebolla y el chile picados y el aguacate chafado con lima."),
    ],
  }),
  r({
    id: "alitas-miel-mostaza", title: "Alitas de pollo con miel y mostaza", cuisine: "estadounidense", authenticity: "adapted",
    origin: "EE. UU.", note: "Hornear en rejilla deja la piel crujiente sin freír.",
    baseServings: 4, prepMin: 10, cookMin: 45, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pollo", 1000, "g"), I("miel", 60, "g"), I("mostaza", 30, "g"), I("soja", 20, "ml"), I("ajo", 2, "unit"), I("pimenton", 4, "g"), I("aceite", 15, "ml"), I("sal", 6, "g")],
    steps: [
      S("Precalienta el horno a 220 °C. Seca las alitas de pollo, mézclalas con el aceite, la sal y el pimentón y colócalas en una rejilla sobre bandeja.", 10, 220),
      S("Hornea 35 minutos, dándoles la vuelta a mitad.", 35, 220),
      S("Mezcla la miel, la mostaza, la soja y el ajo rallado. Pinta las alitas y hornea 8 minutos más hasta que brillen.", 8, 220),
    ],
  }),
  // ——— Vegetarianas ———
  r({
    id: "curry-garbanzos-boniato", title: "Curry de garbanzos y boniato", cuisine: "india", authenticity: "adapted",
    origin: "India (versión casera)", baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("garbanzos-cocidos", 400, "g"), I("boniato", 500, "g"), I("leche-coco", 400, "ml"), I("tomate-triturado", 200, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("curry", 12, "g"), I("espinacas", 100, "g"), I("arroz-basmati", 250, "g"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Sofríe la cebolla en el aceite 6 minutos y añade el ajo, el jengibre y el curry 1 minuto.", 7),
      S("Agrega el boniato en dados de 2 cm, el tomate y la leche de coco y cuece tapado 15 minutos.", 15),
      S("Añade los garbanzos y las espinacas y cuece 5 minutos. Ajusta de sal.", 5),
      S("Sirve con el arroz basmati cocido 10 minutos aparte.", 10),
    ],
  }),
  r({
    id: "chili-sin-carne", title: "Chili sin carne", cuisine: "estadounidense", authenticity: "adapted",
    origin: "EE. UU. (versión vegetariana del chili con carne)", baseServings: 4, prepMin: 10, cookMin: 35, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("frijoles-negros", 800, "g"), I("maiz", 285, "g"), I("tomate-triturado", 400, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 3, "unit"), I("comino", 4, "g"), I("pimenton", 8, "g"), I("chile", 1, "unit"), I("cacao", 5, "g"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Sofríe la cebolla y el pimiento picados en el aceite 8 minutos. Añade el ajo, el chile, el comino y el pimentón 1 minuto.", 9),
      S("Agrega el tomate, los frijoles escurridos, el maíz, el cacao y un vaso de agua.", 1),
      S("Cuece a fuego suave 25 minutos, removiendo, hasta que espese. Ajusta de sal.", 25),
    ],
  }),
  r({
    id: "hamburguesa-lentejas", title: "Hamburguesas de lentejas", cuisine: "estadounidense", authenticity: "adapted",
    origin: "Cocina vegetariana", note: "Las lentejas deben estar muy bien escurridas y secas, o la masa no se sostiene.",
    baseServings: 4, prepMin: 45, cookMin: 15, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("lentejas", 400, "g"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("ajo", 1, "unit"), I("pan-rallado", 60, "g"), I("comino", 2, "g"), I("pimenton", 3, "g"), I("pan-hamburguesa", 4, "unit"), I("lechuga", 1, "unit"), I("tomate", 150, "g"), I("aceite", 40, "ml"), I("sal", 5, "g")],
    steps: [
      S("Sofríe la cebolla y la zanahoria rallada en la mitad del aceite 8 minutos con el ajo.", 8),
      S("Tritura la mitad de las lentejas cocidas y escurridas; mezcla con el resto enteras, el sofrito, el pan rallado, el comino, el pimentón y la sal.", 3),
      S("Forma 4 hamburguesas y enfríalas 30 minutos para que se asienten.", 30),
      S("Dóralas en el resto del aceite 4 minutos por lado sin moverlas. Sirve en los panes con lechuga y tomate.", 8),
    ],
  }),
  r({
    id: "lasana-verduras", title: "Lasaña de verduras", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia", baseServings: 6, prepMin: 25, cookMin: 60, difficulty: "medium", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("laminas-lasana", 250, "g"), I("calabacin", 400, "g"), I("berenjena", 400, "g"), I("pimiento", 1, "unit"), I("cebolla", 1, "unit"), I("tomate-triturado", 400, "g"), I("espinacas", 150, "g"), I("leche", 700, "ml"), I("harina", 55, "g"), I("mantequilla", 50, "g"), I("queso", 120, "g"), I("aceite", 40, "ml"), I("sal", 8, "g")],
    steps: [
      S("Sofríe la cebolla y el pimiento en el aceite 8 minutos. Añade el calabacín y la berenjena en dados pequeños y cocina 12 minutos. Agrega el tomate y las espinacas 5 minutos y sala.", 25),
      S("Haz la bechamel: tuesta la harina en la mantequilla 2 minutos, añade la leche y cuece 8 minutos removiendo.", 10),
      S("En una fuente, alterna láminas (precocidas según el paquete), verduras y bechamel, en 3 capas. Termina con bechamel y queso.", 5),
      S("Hornea a 190 °C 30 minutos y deja reposar 10 antes de cortar.", 30, 190),
    ],
  }),
  r({
    id: "buddha-bowl", title: "Bol de garbanzos crujientes y verduras asadas", cuisine: "estadounidense", authenticity: "adapted",
    origin: "Cocina vegetariana (buddha bowl)", baseServings: 2, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("garbanzos-cocidos", 400, "g"), I("boniato", 300, "g"), I("brocoli", 0.5, "unit"), I("arroz", 150, "g"), I("aguacate", 1, "unit"), I("tahini", 30, "g"), I("limon", 1, "unit"), I("pimenton", 4, "g"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Precalienta el horno a 210 °C. Mezcla los garbanzos secos y el boniato en dados con el aceite, el pimentón y la sal.", 10, 210),
      S("Hornea 15 minutos, añade el brócoli en ramilletes y hornea 15 minutos más.", 30, 210),
      S("Mientras, cuece el arroz 15 minutos. Bate el tahini con el zumo de limón y agua hasta tener una salsa fluida.", 15),
      S("Monta los boles con el arroz, las verduras, los garbanzos, el aguacate y la salsa."),
    ],
  }),
  r({
    id: "nasu-dengaku", title: "Berenjena glaseada con miso (nasu dengaku)", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "El glaseado lleva mirin y sake; aquí, azúcar y vino blanco.",
    baseServings: 2, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("berenjena", 500, "g"), I("miso", 40, "g"), I("azucar", 15, "g"), I("vino-blanco", 20, "ml"), I("sesamo", 4, "g"), I("cebolleta", 1, "unit"), I("aceite", 20, "ml"), I("arroz", 150, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Parte las berenjenas a lo largo, haz cortes en rombo en la carne y píntalas con el aceite.", 5, 200),
      S("Ásalas boca abajo 20 minutos, hasta que estén muy tiernas. Mientras, cuece el arroz.", 20, 200),
      S("Mezcla el miso con el azúcar y el vino, unta la carne de las berenjenas y hornea con el grill 6 minutos, hasta que burbujee.", 6, 220),
      S("Termina con sésamo y cebolleta picada."),
    ],
  }),
  r({
    id: "pasta-brocoli", title: "Pasta con brócoli, ajo y parmesano", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (Apulia, adaptación de las orecchiette con cime di rapa)", baseServings: 4, prepMin: 5, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 400, "g"), I("brocoli", 1, "unit"), I("ajo", 3, "unit"), I("chile", 1, "unit"), I("parmesano", 60, "g"), I("aceite", 50, "ml"), I("sal", 8, "g")],
    steps: [
      S("Cuece la pasta en agua con sal. A falta de 5 minutos, añade el brócoli en ramilletes pequeños a la misma olla.", 11),
      S("Mientras, dora el ajo laminado y el chile en el aceite 2 minutos a fuego bajo.", 2),
      S("Escurre guardando un vaso del agua. Saltea la pasta y el brócoli en el aceite con un chorrito de agua 1 minuto, aplastando algo de brócoli.", 1),
      S("Sirve con el parmesano rallado."),
    ],
  }),
  r({
    id: "paella-verduras", title: "Paella de verduras", cuisine: "espanola", authenticity: "adapted",
    origin: "España (Comunidad Valenciana)", baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("arroz", 320, "g"), I("judias-verdes", 200, "g"), I("pimiento", 1, "unit"), I("berenjena", 200, "g"), I("calabacin", 200, "g"), I("tomate-triturado", 150, "g"), I("ajo", 2, "unit"), I("pimenton", 4, "g"), I("caldo", 1000, "ml"), I("aceite", 50, "ml"), I("sal", 6, "g")],
    steps: [
      S("Sofríe las judías verdes y el pimiento en trozos en el aceite de la paella 6 minutos. Añade la berenjena y el calabacín en dados 5 minutos.", 11),
      S("Agrega el ajo, el pimentón y el tomate 3 minutos.", 3),
      S("Añade el arroz, remueve 1 minuto y vierte el caldo de verduras caliente con sal. Cuece 18 minutos sin remover: 8 a fuego fuerte y 10 a fuego medio.", 19),
      S("Reposa 5 minutos tapado con un paño.", 5),
    ],
  }),
  r({
    id: "patatas-rellenas-horno", title: "Patatas asadas rellenas", cuisine: "estadounidense", authenticity: "adapted",
    origin: "EE. UU. (baked potato)", baseServings: 4, prepMin: 10, cookMin: 70, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("patata", 1200, "g"), I("queso", 120, "g"), I("yogur", 2, "unit"), I("cebolleta", 2, "unit"), I("mantequilla", 30, "g"), I("aceite", 10, "ml"), I("sal", 6, "g")],
    steps: [
      S("Precalienta el horno a 210 °C. Lava 4 patatas grandes, pínchalas con un tenedor, úntalas con aceite y sal.", 10, 210),
      S("Ásalas directamente sobre la rejilla 60 minutos, hasta que un cuchillo entre sin resistencia.", 60, 210),
      S("Ábrelas en cruz, chafa la pulpa con la mantequilla, cubre con queso rallado y gratina 5 minutos.", 5, 210),
      S("Termina con el yogur y la cebolleta picada."),
    ],
  }),
  r({
    id: "tofu-crujiente-sesamo", title: "Tofu crujiente con salsa de sésamo", cuisine: "china", authenticity: "adapted",
    origin: "China (versión casera)", note: "Prensa el tofu 15 minutos entre papel con peso encima: quedará mucho más crujiente.",
    baseServings: 2, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("tofu", 400, "g"), I("harina", 30, "g"), I("soja", 30, "ml"), I("miel", 20, "g"), I("vinagre", 10, "ml"), I("ajo", 1, "unit"), I("sesamo", 8, "g"), I("cebolleta", 1, "unit"), I("arroz", 150, "g"), I("aceite", 40, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Corta el tofu prensado en dados y rebózalo en la harina.", 15),
      S("Dóralo en el aceite a fuego medio-alto 8 minutos, girándolo, hasta que esté crujiente por todas las caras.", 8),
      S("Mezcla la soja, la miel, el vinagre y el ajo rallado y viértelo en la sartén 1 minuto, hasta que glasee.", 1),
      S("Sirve sobre el arroz con sésamo tostado y cebolleta."),
    ],
  }),
  r({
    id: "crema-zanahoria-jengibre", title: "Crema de zanahoria y jengibre", cuisine: "francesa", authenticity: "adapted",
    origin: "Francia (potage Crécy)", baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("zanahoria", 700, "g"), I("cebolla", 1, "unit"), I("jengibre", 15, "g"), I("patata", 150, "g"), I("caldo", 1000, "ml"), I("naranja", 1, "unit"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Pocha la cebolla en el aceite 6 minutos con el jengibre rallado.", 6),
      S("Añade la zanahoria y la patata en rodajas y el caldo. Cuece 22 minutos, hasta que estén muy tiernas.", 22),
      S("Tritura con el zumo de la naranja hasta que esté fina y ajusta de sal.", 2),
    ],
  }),
  r({
    id: "pizza-verduras", title: "Pizza de verduras", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia", baseServings: 2, prepMin: 80, cookMin: 15, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("harina", 250, "g"), I("levadura", 4, "g"), I("tomate-triturado", 150, "g"), I("mozzarella", 200, "g"), I("calabacin", 150, "g"), I("pimiento", 1, "unit"), I("champinones", 120, "g"), I("cebolla", 0.5, "unit"), I("aceitunas", 40, "g"), I("oregano", 2, "g"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Amasa la harina con la levadura, la sal, la mitad del aceite y 160 ml de agua templada 8 minutos. Deja levar 1 hora.", 68),
      S("Precalienta el horno al máximo (250 °C) con la bandeja dentro. Corta las verduras en láminas finas.", 10, 250),
      S("Estira la masa, cúbrela con el tomate y el orégano, la mozzarella, el calabacín, el pimiento, los champiñones, la cebolla y las aceitunas.", 5),
      S("Hornea 10-12 minutos sobre la bandeja caliente, hasta que el borde esté dorado. Riega con el resto del aceite.", 11, 250),
    ],
  }),
  r({
    id: "huevos-espinacas-horno", title: "Huevos al horno con espinacas y tomate", cuisine: "espanola", authenticity: "adapted",
    origin: "Cocina casera", baseServings: 2, prepMin: 5, cookMin: 20, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("huevo", 4, "unit"), I("espinacas", 250, "g"), I("tomate-triturado", 200, "g"), I("ajo", 1, "unit"), I("queso", 40, "g"), I("pan", 120, "g"), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Sofríe el ajo en el aceite, añade las espinacas 3 minutos y el tomate 4 minutos. Sala.", 7, 200),
      S("Pásalo a cazuelitas, haz huecos y casca un huevo en cada uno. Cubre con el queso rallado.", 2),
      S("Hornea 10-12 minutos, hasta que la clara esté cuajada y la yema líquida. Sirve con el pan tostado.", 11, 200),
    ],
  }),
  r({
    id: "ensalada-boniato", title: "Ensalada templada de boniato y feta", cuisine: "griega", authenticity: "adapted",
    origin: "Cocina mediterránea", baseServings: 2, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("boniato", 400, "g"), I("espinacas", 100, "g"), I("feta", 100, "g"), I("nueces", 30, "g"), I("cebolla", 0.5, "unit"), I("miel", 10, "g"), I("vinagre", 15, "ml"), I("aceite", 40, "ml"), I("sal", 3, "g")],
    steps: [
      S("Precalienta el horno a 210 °C. Asa el boniato en dados con la mitad del aceite y la sal 25 minutos, hasta que tenga bordes tostados.", 25, 210),
      S("Bate el resto del aceite con la miel y el vinagre."),
      S("Mezcla las espinacas con la cebolla morada en juliana, el boniato templado, el feta desmigado y las nueces, y aliña."),
    ],
  }),
  r({
    id: "stroganoff-ternera", title: "Stroganoff de ternera", cuisine: "rusa", authenticity: "adapted",
    origin: "Rusia (siglo XIX)", note: "La smetana (crema agria) se sustituye por nata con limón.",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 500, "g"), I("champinones", 250, "g"), I("cebolla", 1, "unit"), I("mostaza", 10, "g"), I("nata", 200, "ml"), I("limon", 0.5, "unit"), I("pimenton", 3, "g"), I("arroz", 280, "g"), I("mantequilla", 30, "g"), I("aceite", 20, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece el arroz 15 minutos. Corta la ternera en tiras finas y dórala en tandas a fuego muy fuerte en el aceite, 2 minutos. Resérvala.", 15),
      S("Pocha la cebolla en la mantequilla 6 minutos y añade los champiñones laminados 5 minutos.", 11),
      S("Agrega el pimentón, la mostaza y la nata y cuece 3 minutos. Devuelve la carne 1 minuto y termina con zumo de limón y sal.", 4),
    ],
  }),
];
