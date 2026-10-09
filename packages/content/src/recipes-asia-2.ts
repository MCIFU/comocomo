import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Lote 5C: más Asia y Oriente Medio. Recetas escritas para COMOCOMO. */
export const recipesAsia2: Recipe[] = [
  // ——— India ———
  r({
    id: "pollo-tandoori", title: "Pollo tandoori al horno", cuisine: "india", authenticity: "adapted",
    origin: "India (Punyab)", note: "Se hace en horno tandoor de barro a muy alta temperatura; el horno doméstico al máximo da un resultado parecido.",
    baseServings: 4, prepMin: 140, cookMin: 35, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pollo", 1000, "g"), I("yogur", 2, "unit"), I("curry", 12, "g"), I("pimenton", 10, "g"), I("ajo", 4, "unit"), I("jengibre", 15, "g"), I("limon", 1, "unit"), I("aceite", 20, "ml"), I("sal", 8, "g")],
    steps: [
      S("Haz cortes profundos en el pollo (muslos y contramuslos). Úntalo con el zumo de limón y la sal y deja 15 minutos.", 15),
      S("Mezcla el yogur con el curry, el pimentón, el ajo y el jengibre rallados y el aceite. Cubre el pollo y marina al menos 2 horas en la nevera.", 120),
      S("Precalienta el horno al máximo (240-250 °C) con la rejilla arriba. Coloca el pollo sobre una rejilla con bandeja debajo.", 10, 240),
      S("Hornea 30 minutos, dándole la vuelta a mitad, hasta que tenga bordes tostados. Sirve con limón y cebolla cruda.", 30, 240),
    ],
  }),
  r({
    id: "chana-saag", title: "Garbanzos con espinacas al curry (chana saag)", cuisine: "india", authenticity: "adapted",
    origin: "India", baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("garbanzos-cocidos", 400, "g"), I("espinacas", 300, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 200, "g"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("curry", 10, "g"), I("comino", 2, "g"), I("aceite", 30, "ml"), I("arroz-basmati", 250, "g"), I("sal", 6, "g")],
    steps: [
      S("Sofríe la cebolla en el aceite 7 minutos. Añade el ajo, el jengibre, el curry y el comino 1 minuto.", 8),
      S("Agrega el tomate y cocina 5 minutos. Añade los garbanzos escurridos y un vaso de agua y cocina 5 minutos.", 10),
      S("Incorpora las espinacas a puñados, removiendo, hasta que se reduzcan, unos 3 minutos. Ajusta de sal.", 3),
      S("Sirve con el arroz basmati cocido 10 minutos.", 10),
    ],
  }),
  r({
    id: "dal-makhani", title: "Dal makhani", cuisine: "india", authenticity: "adapted",
    origin: "India (Punyab)", note: "Se hace con lenteja negra urad que cuece durante horas; con frijol negro de bote se consigue una versión rápida muy cremosa.",
    baseServings: 4, prepMin: 10, cookMin: 35, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("frijoles-negros", 800, "g"), I("tomate-triturado", 300, "g"), I("mantequilla", 50, "g"), I("nata", 150, "ml"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("curry", 10, "g"), I("pimenton", 4, "g"), I("arroz-basmati", 250, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha la cebolla picada en la mitad de la mantequilla 8 minutos. Añade el ajo, el jengibre, el curry y el pimentón 1 minuto.", 9),
      S("Añade el tomate y cocina 6 minutos. Incorpora los frijoles con un poco de su líquido.", 6),
      S("Cocina a fuego suave 15 minutos, aplastando parte de los frijoles para que espese.", 15),
      S("Termina con la nata y el resto de la mantequilla. Sirve con basmati cocido 10 minutos.", 10),
    ],
  }),
  r({
    id: "raita", title: "Raita de pepino", cuisine: "india", authenticity: "traditional",
    origin: "India", note: "Salsa fresca para acompañar y suavizar los currys picantes.",
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("yogur", 3, "unit"), I("pepino", 200, "g"), I("comino", 2, "g"), I("menta", 5, "g"), I("sal", 2, "g")],
    steps: [
      S("Tuesta el comino en una sartén seca 30 segundos, hasta que huela."),
      S("Ralla el pepino y escúrrelo bien."),
      S("Mezcla el yogur con el pepino, el comino, la menta picada y la sal. Sirve frío."),
    ],
  }),
  r({
    id: "naan", title: "Pan naan", cuisine: "india", authenticity: "adapted",
    origin: "India", note: "Se cuece pegado a las paredes del tandoor; en sartén de hierro bien caliente salen muy parecidos.",
    baseServings: 6, prepMin: 80, cookMin: 15, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("harina", 350, "g"), I("levadura", 5, "g"), I("yogur", 1, "unit"), I("azucar", 5, "g"), I("mantequilla", 40, "g"), I("ajo", 2, "unit", true), I("sal", 6, "g")],
    steps: [
      S("Mezcla la harina, la levadura, el azúcar, la sal, el yogur y 150 ml de agua templada. Amasa 8 minutos y deja levar 1 hora.", 68),
      S("Divide en 6 bolas y estíralas en forma de lágrima de medio centímetro."),
      S("Cocina cada naan en una sartén muy caliente sin aceite 1-2 minutos por lado, hasta que se infle y tenga manchas tostadas.", 12),
      S("Píntalos al momento con mantequilla derretida (con ajo picado si quieres)."),
    ],
  }),
  r({
    id: "samosas", title: "Samosas de patata y guisantes", cuisine: "india", authenticity: "adapted",
    origin: "India", note: "Se usa masa de empanadilla en lugar de la masa de samosa casera, y se hornean.",
    baseServings: 4, prepMin: 30, cookMin: 35, difficulty: "medium", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("patata", 500, "g"), I("guisantes", 100, "g"), I("cebolla", 1, "unit"), I("jengibre", 10, "g"), I("curry", 8, "g"), I("comino", 2, "g"), I("cilantro", 10, "g"), I("aceite", 30, "ml"), I("huevo", 1, "unit"), I("sal", 5, "g")],
    steps: [
      S("Cuece las patatas en dados 12 minutos, añadiendo los guisantes los últimos 3. Escurre.", 12),
      S("Sofríe la cebolla en el aceite 6 minutos con el jengibre, el curry y el comino. Mezcla con la patata, chafando un poco, el cilantro y la sal.", 6),
      S("Precalienta el horno a 200 °C. Rellena cada oblea, dóblala en triángulo y sella los bordes con un tenedor.", 10, 200),
      S("Pinta con huevo batido y hornea 15 minutos hasta que estén doradas. Sirve con raita.", 15, 200),
    ],
  }),
  // ——— China ———
  r({
    id: "pollo-al-limon-chino", title: "Pollo al limón al estilo chino", cuisine: "china", authenticity: "adapted",
    origin: "China (versión de restaurante)", baseServings: 3, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 500, "g"), I("harina", 80, "g"), I("huevo", 1, "unit"), I("limon", 2, "unit"), I("azucar", 40, "g"), I("soja", 15, "ml"), I("arroz", 240, "g"), I("aceite", 300, "ml"), I("sal", 3, "g")],
    steps: [
      S("Cuece el arroz 12 minutos. Corta el pollo en tiras, sálalo, pásalo por huevo batido y luego por 60 g de harina.", 12),
      S("Fríelo a 175 °C en tandas 4 minutos, hasta que esté dorado. Escúrrelo.", 8, 175),
      S("Para la salsa, calienta el zumo de los limones, la ralladura de uno, el azúcar, la soja y 100 ml de agua. Espesa con el resto de la harina disuelta en agua fría, 2 minutos.", 3),
      S("Baña el pollo con la salsa justo antes de servir, para que siga crujiente."),
    ],
  }),
  r({
    id: "ternera-brocoli", title: "Ternera con brócoli", cuisine: "china", authenticity: "adapted",
    origin: "China (cantonesa y restaurantes de EE. UU.)", note: "Sin salsa de ostras: soja, azúcar y un poco de caldo.",
    baseServings: 3, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 400, "g"), I("brocoli", 1, "unit"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("soja", 45, "ml"), I("azucar", 10, "g"), I("harina", 10, "g"), I("caldo", 100, "ml"), I("arroz", 240, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 12 minutos. Corta la ternera en tiras finas y mézclala con la harina y 15 ml de soja.", 12),
      S("Escalda los ramilletes de brócoli 2 minutos en agua hirviendo y escúrrelos.", 2),
      S("Saltea la ternera en el aceite a fuego muy fuerte 2 minutos y resérvala. Saltea el ajo y el jengibre 30 segundos.", 3),
      S("Añade el brócoli, la ternera, el resto de la soja, el azúcar y el caldo, y saltea 2 minutos hasta que la salsa brille.", 2),
    ],
  }),
  r({
    id: "rollitos-primavera", title: "Rollitos de primavera", cuisine: "china", authenticity: "adapted",
    origin: "China", note: "Con obleas de papel de arroz se pueden freír; con obleas de empanadilla quedan más crujientes.",
    baseServings: 4, prepMin: 30, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("repollo", 0.25, "unit"), I("zanahoria", 150, "g"), I("cerdo", 200, "g"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("soja", 30, "ml"), I("aceite", 400, "ml")],
    steps: [
      S("Corta el cerdo, el repollo y la zanahoria en tiras finas. Saltéalos con el ajo y la cebolleta en una cucharada de aceite 5 minutos. Añade la soja y deja enfriar.", 5),
      S("Pon una cucharada de relleno en el borde de cada oblea, dobla los lados y enrolla apretando. Sella el borde con agua."),
      S("Fríe en el aceite a 175 °C 3 minutos, hasta que estén dorados y crujientes.", 12, 175),
      S("Escúrrelos y sírvelos con salsa de soja o agridulce."),
    ],
  }),
  r({
    id: "sopa-wonton", title: "Sopa wonton", cuisine: "china", authenticity: "adapted",
    origin: "China (Cantón)", note: "Se usan obleas de empanadilla cortadas y ternera en lugar de cerdo y gamba.",
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("ternera-picada", 250, "g"), I("cebolleta", 3, "unit"), I("jengibre", 15, "g"), I("ajo", 2, "unit"), I("soja", 40, "ml"), I("caldo", 1200, "ml"), I("espinacas", 100, "g")],
    steps: [
      S("Mezcla la carne con una cebolleta picada, la mitad del jengibre rallado, el ajo y 15 ml de soja."),
      S("Pon una cucharadita de relleno en el centro de cada oblea, moja los bordes y ciérrala juntando las puntas como una bolsita."),
      S("Calienta el caldo con el resto del jengibre y la soja 5 minutos.", 5),
      S("Cuece los wontons en el caldo 4 minutos, hasta que floten. Añade las espinacas el último minuto y sirve con cebolleta.", 5),
    ],
  }),
  // ——— Japón ———
  r({
    id: "sopa-miso", title: "Sopa de miso", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "Se hace con caldo dashi (de alga kombu y bonito); el caldo de verduras es una alternativa suave. El miso no debe hervir.",
    baseServings: 4, prepMin: 5, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("miso", 60, "g"), I("caldo", 1000, "ml"), I("tofu", 200, "g"), I("cebolleta", 2, "unit"), I("nori", 1, "unit", true)],
    steps: [
      S("Calienta el caldo hasta que esté a punto de hervir y añade el tofu en dados pequeños 3 minutos.", 6),
      S("Apaga el fuego. Disuelve el miso en un cazo de caldo y añádelo a la olla, removiendo.", 1),
      S("Sirve con cebolleta picada y tiras de alga nori. No vuelvas a hervirla: el miso pierde aroma."),
    ],
  }),
  r({
    id: "salmon-teriyaki", title: "Salmón teriyaki", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "Sake y mirin sustituidos por vino blanco y azúcar.",
    baseServings: 2, prepMin: 5, cookMin: 20, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("salmon", 350, "g"), I("soja", 40, "ml"), I("azucar", 20, "g"), I("vino-blanco", 30, "ml"), I("arroz", 160, "g"), I("sesamo", 3, "g", true), I("aceite", 10, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos y mantenlo tapado.", 15),
      S("Dora el salmón con la piel hacia abajo en el aceite a fuego medio 4 minutos. Dale la vuelta y cocina 2 minutos.", 6),
      S("Añade la soja, el azúcar y el vino y cocina 2 minutos, bañando el salmón con la salsa hasta que esté brillante.", 2),
      S("Sirve sobre el arroz con sésamo."),
    ],
  }),
  r({
    id: "yakitori", title: "Yakitori de pollo", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "Se hacen a la brasa de carbón; en sartén-grill o plancha quedan muy bien.",
    baseServings: 3, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 500, "g"), I("cebolleta", 3, "unit"), I("soja", 50, "ml"), I("azucar", 25, "g"), I("vino-blanco", 40, "ml"), I("aceite", 10, "ml")],
    steps: [
      S("Para la salsa tare, cuece la soja, el azúcar y el vino 5 minutos hasta que espese un poco.", 5),
      S("Corta el pollo (mejor muslo) en dados de 3 cm y la cebolleta en trozos. Ensártalos alternando en brochetas."),
      S("Hazlas en una plancha caliente con unas gotas de aceite 8 minutos, girándolas. Píntalas con la salsa los últimos 2 minutos varias veces.", 8),
    ],
  }),
  r({
    id: "onigiri-atun", title: "Onigiri de atún", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "Se hacen con arroz japonés de grano corto; el arroz redondo es la mejor alternativa.",
    baseServings: 3, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("arroz", 300, "g"), I("atun-lata", 160, "g"), I("soja", 10, "ml"), I("nori", 3, "unit"), I("sal", 4, "g")],
    steps: [
      S("Lava el arroz hasta que el agua salga clara. Cuécelo con 360 ml de agua, tapado y a fuego bajo, 15 minutos, y deja reposar 10 minutos.", 15),
      S("Mezcla el atún escurrido con la soja."),
      S("Mójate las manos con agua salada, toma un puñado de arroz, haz un hueco, pon atún y cierra formando un triángulo apretando."),
      S("Envuelve la base con una tira de alga nori justo antes de comer, para que cruja."),
    ],
  }),
  // ——— Corea ———
  r({
    id: "kimchi-jjigae", title: "Kimchi jjigae (guiso de kimchi)", cuisine: "coreana", authenticity: "traditional",
    origin: "Corea", note: "Sale mejor con kimchi muy fermentado (ácido).",
    baseServings: 3, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("kimchi", 300, "g"), I("panceta", 200, "g"), I("tofu", 300, "g"), I("cebolla", 0.5, "unit"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("pimenton", 5, "g"), I("caldo", 600, "ml"), I("arroz", 240, "g")],
    steps: [
      S("Dora la panceta en tiras en la olla 4 minutos. Añade el kimchi picado, la cebolla, el ajo y el pimentón y rehoga 5 minutos.", 9),
      S("Añade el caldo y un poco del jugo del kimchi y cocina 12 minutos.", 12),
      S("Incorpora el tofu en dados y la cebolleta y cocina 4 minutos más.", 4),
      S("Sirve muy caliente con arroz blanco (cocido 15 minutos aparte).", 15),
    ],
  }),
  r({
    id: "pajeon", title: "Pajeon (tortita coreana de cebolleta)", cuisine: "coreana", authenticity: "traditional",
    origin: "Corea", note: "Tradicional en días de lluvia, con makgeolli.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("harina", 120, "g"), I("huevo", 1, "unit"), I("cebolleta", 3, "unit"), I("gambas", 100, "g", true), I("soja", 30, "ml"), I("vinagre", 15, "ml"), I("aceite", 40, "ml"), I("sal", 2, "g")],
    steps: [
      S("Mezcla la harina con el huevo, la sal y 150 ml de agua fría hasta una masa fluida."),
      S("Corta la cebolleta en trozos largos. Calienta el aceite, coloca la cebolleta (y las gambas) en la sartén y cúbrela con la masa.", 1),
      S("Cocina a fuego medio 5 minutos, dale la vuelta y aplasta con la espátula; cocina 4 minutos hasta que esté crujiente.", 9),
      S("Sirve cortada en porciones con una salsa de soja y vinagre a partes iguales."),
    ],
  }),
  // ——— Tailandia ———
  r({
    id: "larb-pollo", title: "Larb de pollo", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia (Isan) y Laos", note: "Lleva arroz glutinoso tostado y molido y salsa de pescado; aquí, soja y sin el arroz tostado.",
    baseServings: 3, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 500, "g"), I("lima", 2, "unit"), I("cebolleta", 2, "unit"), I("menta", 10, "g"), I("cilantro", 10, "g"), I("chile", 2, "unit"), I("soja", 25, "ml"), I("azucar", 5, "g"), I("lechuga", 1, "unit")],
    steps: [
      S("Pica el pollo muy fino con un cuchillo (o usa pollo picado).", 3),
      S("Cocínalo en una sartén con 3 cucharadas de agua a fuego medio 6 minutos, deshaciéndolo, hasta que esté hecho.", 6),
      S("Fuera del fuego, añade el zumo de lima, la soja, el azúcar, el chile, la cebolleta y las hierbas picadas."),
      S("Sirve templado en hojas de lechuga para comerlo con la mano."),
    ],
  }),
  r({
    id: "khao-pad", title: "Arroz frito tailandés (khao pad)", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia", note: "Sin salsa de pescado: soja y lima.",
    baseServings: 2, prepMin: 10, cookMin: 12, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("arroz", 180, "g"), I("pollo", 200, "g"), I("huevo", 2, "unit"), I("tomate", 150, "g"), I("cebolla", 0.5, "unit"), I("ajo", 2, "unit"), I("soja", 30, "ml"), I("azucar", 5, "g"), I("lima", 1, "unit"), I("pepino", 100, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Usa arroz cocido y frío. Saltea el ajo y la cebolla en el aceite 1 minuto y el pollo en dados 4 minutos.", 5),
      S("Aparta a un lado, cuaja los huevos revueltos 1 minuto y mézclalo todo.", 1),
      S("Añade el arroz, el tomate en gajos, la soja y el azúcar y saltea 4 minutos a fuego fuerte.", 4),
      S("Sirve con gajos de lima y rodajas de pepino."),
    ],
  }),
  // ——— Vietnam y Malasia ———
  r({
    id: "bun-cha", title: "Bún chả (cerdo a la parrilla con fideos)", cuisine: "vietnamita", authenticity: "adapted",
    origin: "Vietnam (Hanói)", note: "Sin salsa de pescado: el caldo de mojar se hace con soja, lima y azúcar.",
    baseServings: 3, prepMin: 40, cookMin: 15, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("cerdo", 450, "g"), I("fideos-arroz", 250, "g"), I("ajo", 3, "unit"), I("azucar", 30, "g"), I("soja", 50, "ml"), I("lima", 2, "unit"), I("lechuga", 1, "unit"), I("menta", 10, "g"), I("cilantro", 10, "g"), I("chile", 1, "unit"), I("aceite", 15, "ml")],
    steps: [
      S("Corta el cerdo en lonchas finas y marínalo con 20 ml de soja, 10 g de azúcar y el ajo rallado 30 minutos.", 30),
      S("Prepara la salsa de mojar: el resto de la soja y el azúcar, el zumo de lima, el chile picado y 200 ml de agua.", 2),
      S("Remoja los fideos en agua caliente 8 minutos y escúrrelos.", 8),
      S("Haz el cerdo en una plancha muy caliente con el aceite 2 minutos por lado, hasta que se tueste.", 6),
      S("Sirve el cerdo en la salsa, con los fideos, la lechuga y las hierbas aparte para ir mojando."),
    ],
  }),
  r({
    id: "laksa", title: "Laksa de gambas", cuisine: "malaya", authenticity: "adapted",
    origin: "Malasia y Singapur", note: "La pasta de laksa lleva hierba limón, galanga y gamba seca; la pasta de curry rojo es el atajo más cercano.",
    baseServings: 3, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("fideos-arroz", 200, "g"), I("gambas", 300, "g"), I("pasta-curry-rojo", 50, "g"), I("leche-coco", 400, "ml"), I("caldo", 600, "ml"), I("tofu", 150, "g"), I("lima", 1, "unit"), I("cilantro", 10, "g"), I("azucar", 5, "g"), I("soja", 15, "ml"), I("aceite", 15, "ml")],
    steps: [
      S("Fríe la pasta de curry en el aceite 1 minuto. Añade el caldo, la leche de coco, la soja y el azúcar y cocina 10 minutos.", 11),
      S("Remoja los fideos en agua caliente 8 minutos y repártelos en cuencos.", 8),
      S("Añade al caldo el tofu en dados y las gambas y cocina 3 minutos.", 3),
      S("Vierte el caldo sobre los fideos y sirve con cilantro y lima."),
    ],
  }),
  // ——— Oriente Medio ———
  r({
    id: "manakish", title: "Manakish de za'atar", cuisine: "oriente-medio", authenticity: "adapted",
    origin: "Líbano", note: "El za'atar es una mezcla de tomillo, zumaque y sésamo; aquí se imita con orégano, sésamo y limón.",
    baseServings: 4, prepMin: 80, cookMin: 15, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("harina", 300, "g"), I("levadura", 4, "g"), I("aceite", 80, "ml"), I("oregano", 6, "g"), I("sesamo", 15, "g"), I("limon", 0.5, "unit"), I("sal", 6, "g")],
    steps: [
      S("Amasa la harina, la levadura, la sal, 20 ml de aceite y 180 ml de agua templada 8 minutos. Deja levar 1 hora.", 68),
      S("Mezcla el orégano, el sésamo tostado, la ralladura de limón y el resto del aceite."),
      S("Precalienta el horno a 240 °C. Divide la masa en 4, estírala en discos y cúbrela con la mezcla, hundiendo los dedos.", 10, 240),
      S("Hornea 8-10 minutos hasta que los bordes estén dorados.", 9, 240),
    ],
  }),
  r({
    id: "muhammara", title: "Muhammara (crema de pimiento y nueces)", cuisine: "oriente-medio", authenticity: "adapted",
    origin: "Siria (Alepo)", note: "Lleva melaza de granada; una cucharadita de miel con limón la sustituye.",
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["horno", "batidora"],
    ingredients: [I("pimiento", 3, "unit"), I("nueces", 80, "g"), I("pan-rallado", 30, "g"), I("pimenton", 4, "g"), I("ajo", 1, "unit"), I("limon", 0.5, "unit"), I("miel", 10, "g"), I("aceite", 40, "ml"), I("sal", 3, "g")],
    steps: [
      S("Asa los pimientos rojos en el horno a 220 °C 30 minutos, hasta que la piel se ennegrezca. Tápalos 10 minutos y pélalos.", 30, 220),
      S("Tritura los pimientos con las nueces, el pan rallado, el pimentón, el ajo, el zumo de limón, la miel y la sal, dejando algo de textura.", 2),
      S("Sirve con un chorro de aceite y pan de pita."),
    ],
  }),
  r({
    id: "kibbeh-horno", title: "Kibbeh al horno", cuisine: "oriente-medio", authenticity: "adapted",
    origin: "Líbano y Siria", note: "Se hace con cordero; con ternera queda más suave.",
    baseServings: 6, prepMin: 40, cookMin: 40, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("bulgur", 200, "g"), I("ternera-picada", 700, "g"), I("cebolla", 2, "unit"), I("pinones", 40, "g"), I("comino", 4, "g"), I("canela", 2, "g"), I("aceite", 60, "ml"), I("sal", 9, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Remoja el bulgur en agua fría 20 minutos y escúrrelo apretando.", 20),
      S("Mezcla el bulgur con 450 g de carne, una cebolla rallada y escurrida, el comino, la canela y sal. Amasa hasta tener una pasta fina.", 5),
      S("Para el relleno, sofríe la otra cebolla picada y el resto de carne 10 minutos con los piñones, sal y pimienta.", 10),
      S("Precalienta el horno a 190 °C. En una fuente aceitada, extiende la mitad de la pasta, cubre con el relleno y tapa con el resto. Marca rombos.", 10, 190),
      S("Riega con el aceite y hornea 35 minutos hasta que esté dorado.", 35, 190),
    ],
  }),
];
