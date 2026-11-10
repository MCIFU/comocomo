import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «101 Recetas Orientales», primera tanda. Pasos escritos de nuevo para Cómocomo, con cantidades y tiempos completados. */
const RO = "Receta del recetario «101 Recetas Orientales», adaptada.";

export const recipesLibroOriental1: Recipe[] = [
  r({
    id: "pollo-amira", title: "Pollo Amira con almendras, aceitunas y ciruelas",
    cuisine: "marroqui", origin: "Norte de África", authenticity: "adapted", note: `${RO} Guiso especiado de pollo con frutos secos; se sirve con cuscús o arroz.`,
    baseServings: 4, prepMin: 15, cookMin: 55, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pollo", 1200, "g"), I("cebolla", 2, "unit"), I("tomate", 150, "g"), I("comino", 4, "g"), I("jengibre", 5, "g"), I("canela", 1, "g"), I("curry", 1, "g"), I("almendras", 50, "g"), I("aceitunas", 80, "g"), I("pasas", 40, "g"), I("cilantro", 5, "g"), I("aceite", 40, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha las cebollas picadas en la olla con el aceite hasta que estén doradas, 12 minutos; añade el tomate pelado y picado y rehoga 3 minutos.", 15),
      S("Incorpora el pollo troceado y dóralo, removiendo, 8 minutos.", 8),
      S("Añade el comino, el jengibre rallado, la canela, el curry (en lugar de cúrcuma), la pimienta y la sal; da un par de vueltas y echa un vaso de agua. Tapa y cuece a fuego suave 35 minutos.", 36),
      S("Agrega las almendras tostadas, las aceitunas (verdes y negras) y las pasas, da un hervor de 3 minutos y sirve con cilantro picado.", 3),
    ],
  }),
  r({
    id: "pollo-szechuan", title: "Pollo estilo Szechuan con verduras",
    cuisine: "china", origin: "China (Sichuan)", authenticity: "adapted", note: `${RO} Picante: ajusta la guindilla al gusto.`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 700, "g"), I("huevo", 2, "unit"), I("maicena", 30, "g"), I("zanahoria", 250, "g"), I("cebolleta", 3, "unit"), I("pimiento", 1, "unit"), I("aceite", 300, "ml"), I("vino-blanco", 30, "ml"), I("soja", 20, "ml"), I("azucar", 25, "g"), I("chile", 2, "unit"), I("jengibre", 15, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz y resérvalo.", 16),
      S("Mezcla para la salsa el vino (mejor jerez), la soja, el azúcar, la guindilla (chile) picada y el jengibre machacado.", 4),
      S("Corta la pechuga de pollo en tiras y rebózala en las claras de huevo batidas con la maicena. Fríela en el aceite caliente hasta que esté blanca y escúrrela.", 8),
      S("En otra sartén con 2 cucharadas de ese aceite saltea 1 minuto la zanahoria, la cebolleta y el pimiento en tiras; añade la salsa y, cuando hierva, el pollo. Cuece todo junto 2 minutos y sirve con el arroz.", 4),
    ],
  }),
  r({
    id: "chop-suey-ternera", title: "Chop suey de ternera y verduras",
    cuisine: "china", origin: "China (versión occidental)", authenticity: "adapted", note: `${RO} El libro usa brotes de soja; aquí lleva apio y coliflor, también del original.`,
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera", 300, "g"), I("apio", 200, "g"), I("coliflor", 0.5, "unit"), I("brocoli", 1, "unit"), I("zanahoria", 150, "g"), I("pimiento", 1, "unit"), I("jengibre", 10, "g"), I("soja", 40, "ml"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta las verduras en tiras en diagonal: el apio, la zanahoria y el pimiento (rojo); separa en ramitos pequeños la coliflor y el brócoli.", 15),
      S("Corta la ternera en cuadrados de unos 3 cm.", 4),
      S("Saltea cada verdura por separado en la sartén caliente con un poco de aceite y sal, 2-3 minutos, que quede crujiente. Resérvalas.", 10),
      S("Saltea la carne con el resto del aceite y el jengibre rallado, añade la soja, junta con las verduras y sirve.", 4),
    ],
  }),
  r({
    id: "cerdo-asado-cantonesa", title: "Cerdo asado a la cantonesa (char siu)",
    cuisine: "china", origin: "China (Cantón)", authenticity: "adapted", note: `${RO} Necesita 4 horas de adobo. Sin salsa hoisin, la miel, la soja y el tomate dan un resultado parecido.`,
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("cerdo", 900, "g"), I("miel", 40, "g"), I("soja", 60, "ml"), I("azucar", 50, "g"), I("tomate-triturado", 30, "g"), I("vino-blanco", 15, "ml"), I("ajo", 2, "unit"), I("arroz", 280, "g"), I("sal", 4, "g")],
    steps: [
      S("Corta el cerdo (con algo de grasa, mejor aguja o presa) en tiras gruesas y hazles cortes en diagonal sin llegar al fondo.", 8),
      S("Mezcla la soja, el azúcar, el tomate triturado, el vino, el ajo machacado y la sal; adoba el cerdo 4 horas, girándolo de vez en cuando.", 10),
      S("Asa las tiras sobre una rejilla en el horno a 190 °C 35 minutos, pintándolas con el adobo a mitad.", 35, 190),
      S("Píntalas con la miel y hornea 8 minutos más hasta que brillen. Córtalas en lonchas y sirve con arroz.", 8, 190),
    ],
  }),
  r({
    id: "espinacas-sesamo", title: "Espinacas con salsa de sésamo",
    cuisine: "japonesa", origin: "Japón (goma-ae)", authenticity: "traditional", note: RO,
    baseServings: 4, prepMin: 10, cookMin: 5, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("espinacas", 500, "g"), I("sesamo", 50, "g"), I("azucar", 10, "g"), I("soja", 25, "ml"), I("sal", 3, "g")],
    steps: [
      S("Cuece las espinacas en agua con sal 1 minuto, escúrrelas guardando un poco del agua y apriétalas para quitarles el líquido.", 4),
      S("Tuesta el sésamo en una sartén seca y machácalo en un mortero hasta tener una pasta.", 5),
      S("Mézclalo con el azúcar, la soja y una cucharada del agua de cocción, y alíña las espinacas.", 2),
    ],
  }),
  r({
    id: "judias-verdes-sesamo", title: "Judías verdes con salsa de sésamo",
    cuisine: "japonesa", origin: "Japón", authenticity: "adapted", note: `${RO} El mirin se puede cambiar por vino blanco con un poco de azúcar.`,
    baseServings: 4, prepMin: 10, cookMin: 5, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("judias-verdes", 500, "g"), I("sesamo", 25, "g"), I("jengibre", 5, "g"), I("soja", 15, "ml"), I("vino-blanco", 15, "ml"), I("azucar", 15, "g"), I("sal", 3, "g")],
    steps: [
      S("Cuece las judías verdes en agua hirviendo con sal 2-3 minutos, pásalas a agua muy fría y escúrrelas.", 5),
      S("Tuesta el sésamo, guarda una cucharadita y machaca el resto en un mortero.", 4),
      S("Mezcla la pasta con la soja, el vino, el azúcar y el jengibre rallado; alíña las judías y espolvorea el sésamo reservado.", 2),
    ],
  }),
  r({
    id: "foo-yung-gambas", title: "Foo yung de gambas (tortilla china)",
    cuisine: "china", origin: "China (versión cantonesa)", authenticity: "adapted", note: RO,
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 6, "unit"), I("gambas", 200, "g"), I("champinones", 100, "g"), I("cebolla", 1, "unit"), I("soja", 45, "ml"), I("caldo", 60, "ml"), I("maicena", 8, "g"), I("azucar", 2, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Pica las gambas peladas, la cebolla y los champiñones (mejor shiitake) en tiras finas.", 8),
      S("Bate los huevos con dos cucharadas de soja y mezcla con las gambas y las verduras.", 3),
      S("Cuaja la mezcla en la sartén con el aceite como una tortilla plana, por los dos lados.", 8),
      S("Para la salsa, cuece el resto de soja con el caldo, la maicena y el azúcar removiendo hasta que espese, y viértela sobre la tortilla.", 3),
    ],
  }),
  r({
    id: "pescado-vapor-jengibre", title: "Pescado al vapor con jengibre y cebolleta",
    cuisine: "china", origin: "China (Cantón)", authenticity: "traditional", note: `${RO} El libro usa besugo; vale lubina o dorada.`,
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("lubina", 1000, "g"), I("jengibre", 20, "g"), I("vino-blanco", 15, "ml"), I("soja", 30, "ml"), I("aceite", 40, "ml"), I("cebolleta", 2, "unit"), I("pinones", 15, "g"), I("beicon", 30, "g", true)],
    steps: [
      S("Pon el pescado limpio en un plato que resista el calor, rocíalo con el jengibre rallado, el vino (mejor jerez) y la soja, y déjalo 30 minutos en la nevera.", 30),
      S("Coloca el plato sobre una rejilla en la olla con agua hirviendo, tapa y cuece al vapor 10-12 minutos, hasta que la carne se separe.", 12),
      S("Calienta el aceite en una sartén pequeña hasta que esté muy caliente.", 2),
      S("Esparce la cebolleta en tiras finas sobre el pescado, vierte encima el aceite caliente y adorna con los piñones tostados (y el beicon frito).", 2),
    ],
  }),
  r({
    id: "sopa-gotas-huevo", title: "Sopa china con hilos de huevo",
    cuisine: "china", origin: "China", authenticity: "adapted", note: `${RO} Sin glutamato; con jengibre y cebolleta para dar sabor.`,
    baseServings: 4, prepMin: 5, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("caldo", 1000, "ml"), I("huevo", 3, "unit"), I("maicena", 10, "g"), I("jengibre", 5, "g"), I("cebolleta", 1, "unit"), I("soja", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Lleva a ebullición el caldo (de pollo) con el jengibre rallado y la soja; liga con la maicena disuelta en un poco de agua.", 6),
      S("Bate los huevos con una pizca de sal y viértelos en hilo sobre el caldo hirviendo, removiendo despacio, para que formen hebras.", 2),
      S("Retira del fuego y sirve con cebolleta picada."),
    ],
  }),
  r({
    id: "berenjena-ajo-china", title: "Berenjenas salteadas con ajo a la china",
    cuisine: "china", origin: "China", authenticity: "adapted", note: RO,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("berenjena", 800, "g"), I("aceite", 70, "ml"), I("ajo", 3, "unit"), I("vino-blanco", 15, "ml"), I("vinagre", 30, "ml"), I("azucar", 25, "g"), I("soja", 30, "ml"), I("cebolleta", 1, "unit", true)],
    steps: [
      S("Corta las berenjenas por la mitad a lo largo y luego en cuñas.", 5),
      S("Saltéalas en dos tandas en la sartén caliente con 3 cucharadas de aceite cada vez, 5 minutos por tanda. Resérvalas.", 10),
      S("Dora el ajo picado en el aceite restante a fuego suave, añade la soja, el vinagre, el azúcar y el vino y deja que hierva.", 2),
      S("Vuelve a echar las berenjenas y rehoga para que absorban la salsa. Sirve con cebolleta si quieres.", 2),
    ],
  }),
  r({
    id: "pimientos-rellenos-gambas-cerdo", title: "Pimientos rellenos de gambas y cerdo a la china",
    cuisine: "china", origin: "China", authenticity: "adapted", note: RO,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pimiento", 3, "unit"), I("gambas", 300, "g"), I("cerdo", 300, "g"), I("cebolleta", 3, "unit"), I("soja", 45, "ml"), I("vino-blanco", 15, "ml"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta los pimientos por la mitad a lo largo y cada mitad en tres trozos; límpialos.", 6),
      S("Pica las gambas peladas y mézclalas con la carne de cerdo picada, la cebolleta picada fina, la soja, el vino (mejor jerez) y sal.", 8),
      S("Rellena cada trozo de pimiento con la mezcla, apretando.", 6),
      S("Fríelos en tandas en la sartén con el aceite a fuego medio, 4 minutos por cada lado, empezando por el relleno.", 16),
    ],
  }),
];
