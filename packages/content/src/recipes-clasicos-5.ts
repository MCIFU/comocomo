import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Quinta tanda de platos clásicos. Pasos escritos para Cómocomo a partir de la receta tradicional. */
export const recipesClasicos5: Recipe[] = [
  r({
    id: "merluza-a-la-vasca", title: "Merluza a la vasca",
    cuisine: "espanola", origin: "España (País Vasco)", authenticity: "traditional",
    note: "Merluza en salsa verde con almejas, espárragos blancos, guisantes y huevo cocido.",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("merluza", 700, "g"), I("almejas", 300, "g"), I("esparragos-blancos", 150, "g"), I("guisantes", 100, "g"), I("huevo", 2, "unit"), I("ajo", 3, "unit"), I("perejil", 20, "g"), I("harina", 10, "g"), I("vino-blanco", 100, "ml"), I("caldo", 250, "ml"), I("aceite", 50, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece los huevos 10 minutos, enfríalos y pártelos en cuartos.", 10),
      S("Dora el ajo picado en el aceite en una cazuela ancha, añade la harina y rehoga 1 minuto; vierte el vino y el caldo (de pescado) moviendo la cazuela.", 4),
      S("Coloca la merluza salada en rodajas, las almejas y los guisantes; tapa y cuece 6-7 minutos moviendo la cazuela para que ligue la salsa.", 7),
      S("Añade los espárragos y el huevo, espolvorea mucho perejil picado y cuece 1 minuto más.", 2),
    ],
  }),
  r({
    id: "rabas", title: "Rabas de calamar",
    cuisine: "espanola", origin: "España (Cantabria)", authenticity: "traditional",
    note: "Tiras de calamar rebozadas y fritas, la tapa más típica de Santander. Con limón.",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calamares", 700, "g"), I("harina", 150, "g"), I("aceite", 500, "ml"), I("limon", 1, "unit"), I("sal", 5, "g")],
    steps: [
      S("Limpia los calamares y córtalos en tiras de un dedo. Sécalos bien y sálalos.", 10),
      S("Pásalos por harina y sacude el exceso.", 3),
      S("Fríelos en tandas en el aceite muy caliente 1-2 minutos, hasta que estén dorados. Escúrrelos y sírvelos con limón.", 8),
    ],
  }),
  r({
    id: "tortilla-de-bacalao", title: "Tortilla de bacalao",
    cuisine: "espanola", origin: "España (País Vasco)", authenticity: "traditional",
    note: "Plato de sidrería: tortilla jugosa de bacalao desmigado con cebolla y pimiento verde.",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("bacalao", 300, "g"), I("huevo", 6, "unit"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("ajo", 1, "unit"), I("perejil", 5, "g"), I("aceite", 60, "ml")],
    steps: [
      S("Pocha la cebolla y el pimiento (verde) en juliana con el ajo y el aceite 15 minutos a fuego suave.", 15),
      S("Añade el bacalao desalado y desmigado y saltea 2 minutos.", 2),
      S("Bate los huevos (sin sal: la pone el bacalao), mezcla con la verdura y el perejil y cuaja la tortilla muy jugosa por los dos lados.", 4),
    ],
  }),
  r({
    id: "olla-podrida", title: "Olla podrida de Burgos",
    cuisine: "espanola", origin: "España (Burgos)", authenticity: "adapted",
    note: "Guiso de alubias rojas con carnes de cerdo. Con alubias ya cocidas se hace en una hora; la tradicional lleva morcilla de Burgos, oreja y costilla adobada.",
    baseServings: 4, prepMin: 15, cookMin: 75, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("alubias-rojas", 600, "g"), I("costillas-cerdo", 300, "g"), I("chorizo", 150, "g"), I("morcilla", 150, "g"), I("panceta", 100, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("pimenton", 4, "g"), I("laurel", 1, "unit"), I("aceite", 20, "ml"), I("sal", 4, "g")],
    steps: [
      S("Escurre y enjuaga las alubias rojas cocidas.", 5),
      S("Pon en la olla la costilla, la panceta, el chorizo, la cebolla entera y el laurel con un litro de agua y cuece 45 minutos. Añade las alubias y cuece 20 minutos más.", 65),
      S("Añade la morcilla los últimos 15 minutos.", 15),
      S("Dora el ajo laminado en el aceite, retira del fuego, añade el pimentón y échalo al guiso. Sala y cuece 5 minutos más.", 7),
    ],
  }),
  r({
    id: "sobaos-pasiegos", title: "Sobaos pasiegos",
    cuisine: "espanola", origin: "España (Cantabria)", authenticity: "adapted",
    note: "Bizcocho denso y jugoso de mantequilla. Se hornean en moldes de papel rectangulares.",
    baseServings: 8, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["horno", "batidora"],
    ingredients: [I("mantequilla", 200, "g"), I("azucar", 200, "g"), I("huevo", 4, "unit"), I("harina", 250, "g"), I("levadura-quimica", 8, "g"), I("limon", 1, "unit"), I("ron", 15, "ml", true), I("sal", 1, "g")],
    steps: [
      S("Bate con la batidora la mantequilla blanda con el azúcar hasta que esté cremosa.", 5),
      S("Añade los huevos de uno en uno, la ralladura de limón y el ron si quieres.", 4),
      S("Incorpora la harina tamizada con la levadura y la sal, sin batir de más.", 3),
      S("Reparte en moldes de papel, espolvorea un poco de azúcar y hornea a 190 °C 20-25 minutos.", 22, 190),
    ],
  }),
  r({
    id: "bienmesabe", title: "Bienmesabe (cazón en adobo)",
    cuisine: "espanola", origin: "España (Cádiz)", authenticity: "adapted",
    note: "Tacos de pescado adobados en vinagre, comino y pimentón, enharinados y fritos. El tradicional es de cazón; vale merluza o rape.",
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("merluza", 700, "g"), I("vinagre", 80, "ml"), I("ajo", 4, "unit"), I("comino", 3, "g"), I("pimenton", 4, "g"), I("oregano", 1, "g"), I("harina", 120, "g"), I("aceite", 500, "ml"), I("sal", 6, "g")],
    steps: [
      S("Corta el pescado en tacos y mézclalo con el vinagre, el ajo machacado, el comino, el pimentón, el orégano, la sal y un vaso de agua. Déjalo adobar en la nevera al menos 4 horas.", 15),
      S("Escúrrelo bien y pásalo por harina sacudiendo el exceso.", 5),
      S("Fríelo en tandas en el aceite muy caliente hasta que esté dorado y escúrrelo.", 10),
    ],
  }),
  r({
    id: "tamales-pollo", title: "Tamales de pollo en salsa verde",
    cuisine: "mexicana", origin: "México", authenticity: "adapted",
    note: "Masa de maíz rellena de pollo y cocida al vapor en hojas de maíz (o papel de horno si no las encuentras).",
    baseServings: 4, prepMin: 50, cookMin: 70, difficulty: "hard", equipment: ["olla", "batidora"],
    ingredients: [I("harina-maiz", 400, "g"), I("caldo", 500, "ml"), I("mantequilla", 120, "g"), I("levadura-quimica", 6, "g"), I("pollo", 400, "g"), I("tomate", 300, "g"), I("chile", 2, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("cilantro", 10, "g"), I("sal", 8, "g")],
    steps: [
      S("Cuece el pollo en agua con la mitad de la cebolla y sal 25 minutos y desmenúzalo.", 25),
      S("Tritura con la batidora el tomate (mejor tomatillo verde), los chiles, el resto de cebolla, el ajo y el cilantro; cuece la salsa 10 minutos y mézclala con el pollo.", 12),
      S("Bate la mantequilla hasta que esté esponjosa y añade la harina de maíz (masa harina), la levadura, sal y el caldo poco a poco hasta tener una masa suave.", 10),
      S("Extiende masa sobre hojas de maíz remojadas, pon relleno, ciérralas y cuécelas de pie al vapor en la olla tapada 60 minutos.", 65),
    ],
  }),
  r({
    id: "muffins-arandanos", title: "Muffins de frutos rojos",
    cuisine: "estadounidense", origin: "Estados Unidos", authenticity: "traditional",
    note: "Magdalenas grandes con trozos de fruta. El truco es mezclar poco la masa.",
    baseServings: 8, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("harina", 280, "g"), I("azucar", 150, "g"), I("levadura-quimica", 10, "g"), I("huevo", 2, "unit"), I("leche", 200, "ml"), I("aceite", 90, "ml"), I("frutos-rojos", 200, "g"), I("limon", 1, "unit"), I("sal", 1, "g")],
    steps: [
      S("Mezcla en un bol la harina, el azúcar, la levadura, la sal y la ralladura de limón.", 3),
      S("En otro bol bate los huevos con la leche y el aceite; échalo sobre los secos y mezcla con una espátula solo hasta que no quede harina seca.", 4),
      S("Añade los frutos rojos con dos movimientos y reparte en moldes de magdalena.", 5),
      S("Hornea a 200 °C 20-25 minutos, hasta que estén dorados.", 22, 200),
    ],
  }),
  r({
    id: "requeson-miel-nueces", title: "Requesón con miel y nueces",
    cuisine: "espanola", origin: "España", authenticity: "traditional",
    note: "El postre más rápido de la cocina tradicional: queso fresco con miel y frutos secos.",
    baseServings: 4, prepMin: 5, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("requeson", 400, "g"), I("miel", 80, "g"), I("nueces", 50, "g"), I("canela", 1, "g", true)],
    steps: [
      S("Reparte el requesón en cuencos.", 2),
      S("Riega con la miel, añade las nueces troceadas y, si quieres, una pizca de canela.", 2),
    ],
  }),
  r({
    id: "bunuelos-calabaza", title: "Buñuelos de calabaza",
    cuisine: "espanola", origin: "España (Valencia)", authenticity: "traditional",
    note: "Dulce de Fallas: masa de calabaza asada y levadura frita en aceite y rebozada en azúcar.",
    baseServings: 6, prepMin: 90, cookMin: 30, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("calabaza", 400, "g"), I("harina", 300, "g"), I("levadura", 10, "g"), I("azucar", 100, "g"), I("aceite", 500, "ml"), I("limon", 1, "unit")],
    steps: [
      S("Asa la calabaza en el horno a 200 °C 30 minutos, quítale la piel y aplástala. Deja que se temple.", 30, 200),
      S("Mezcla la calabaza con la levadura (de panadería), la ralladura de limón y la harina hasta tener una masa pegajosa. Deja que fermente tapada 1 hora.", 65),
      S("Con las manos mojadas, forma aros y fríelos en el aceite caliente hasta que estén dorados e hinchados.", 15),
      S("Escúrrelos y pásalos por el azúcar.", 3),
    ],
  }),
];
