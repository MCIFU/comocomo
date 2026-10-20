import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Clásicos que esperaban ingredientes nuevos en el catálogo. Pasos escritos para Cómocomo a partir de la receta tradicional. */
export const recipesClasicos6: Recipe[] = [
  r({
    id: "callos-a-la-madrilena", title: "Callos a la madrileña",
    cuisine: "espanola", origin: "España (Madrid)", authenticity: "traditional",
    note: "Callos de ternera guisados lentamente con chorizo, morcilla y pimentón. Mejor al día siguiente.",
    baseServings: 4, prepMin: 20, cookMin: 180, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("callos", 1000, "g"), I("chorizo", 150, "g"), I("morcilla", 150, "g"), I("jamon", 80, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("laurel", 2, "unit"), I("pimenton", 8, "g"), I("chile", 1, "unit"), I("harina", 10, "g"), I("aceite", 40, "ml"), I("sal", 6, "g")],
    steps: [
      S("Lava bien los callos (ya limpios), córtalos en trozos y escáldalos 5 minutos en agua hirviendo. Escúrrelos.", 10),
      S("Ponlos en la olla con agua limpia, media cebolla, un ajo, el laurel y sal, y cuece a fuego suave 2 horas y media, hasta que estén muy tiernos.", 150),
      S("Añade el chorizo y la morcilla en rodajas y el jamón en taquitos los últimos 20 minutos.", 20),
      S("Sofríe el resto de cebolla y ajo picados en el aceite, añade la harina, el pimentón y la guindilla (chile), y échalo a la olla. Cuece 10 minutos más hasta que la salsa espese.", 12),
    ],
  }),
  r({
    id: "rabo-de-toro", title: "Rabo de toro estofado",
    cuisine: "espanola", origin: "España (Córdoba)", authenticity: "traditional",
    note: "Guiso cordobés de rabo cocido muy despacio en vino tinto hasta que la carne se separa del hueso. Vale rabo de ternera.",
    baseServings: 4, prepMin: 20, cookMin: 200, difficulty: "medium", equipment: ["olla", "batidora"],
    ingredients: [I("rabo-toro", 1200, "g"), I("harina", 40, "g"), I("cebolla", 2, "unit"), I("zanahoria", 200, "g"), I("pimiento", 1, "unit"), I("ajo", 3, "unit"), I("tomate", 300, "g"), I("vino-tinto", 500, "ml"), I("laurel", 2, "unit"), I("caldo", 500, "ml"), I("aceite", 50, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta el rabo troceado, enharínalo y dóralo bien en la olla con el aceite. Resérvalo.", 15),
      S("Pocha la cebolla, la zanahoria, el pimiento y el ajo picados 10 minutos; añade el tomate troceado y cocina 5 minutos.", 15),
      S("Devuelve el rabo, riega con el vino tinto y deja que hierva 5 minutos; añade el caldo y el laurel, tapa y cuece a fuego muy suave 3 horas.", 185),
      S("Saca la carne, tritura la salsa con la batidora y vuelve a juntarlas. Sirve con patatas fritas o puré.", 5),
    ],
  }),
  r({
    id: "lacon-con-grelos", title: "Lacón con grelos",
    cuisine: "espanola", origin: "España (Galicia)", authenticity: "traditional",
    note: "Plato de Carnaval: lacón cocido con grelos, patatas y chorizo, aliñado con aceite y pimentón.",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("lacon", 800, "g"), I("grelos", 800, "g"), I("patata", 800, "g"), I("chorizo", 200, "g"), I("aceite", 40, "ml"), I("pimenton", 4, "g"), I("sal", 3, "g")],
    steps: [
      S("Pon el lacón (cocido o desalado) y el chorizo en la olla con agua y cuece 20 minutos.", 20),
      S("Añade las patatas peladas en trozos grandes y cuece 15 minutos.", 15),
      S("Incorpora los grelos lavados y troceados y cuece 10-12 minutos más. Prueba de sal.", 12),
      S("Escurre todo, corta el lacón en lonchas y sirve con un chorro de aceite y pimentón por encima.", 3),
    ],
  }),
  r({
    id: "pimientos-de-padron", title: "Pimientos de Padrón",
    cuisine: "espanola", origin: "España (Galicia)", authenticity: "traditional",
    note: "«Unos pican e outros non». Fritos enteros y con sal gruesa.",
    baseServings: 4, prepMin: 5, cookMin: 8, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pimientos-padron", 400, "g"), I("aceite", 60, "ml"), I("sal", 6, "g")],
    steps: [
      S("Lava los pimientos y sécalos muy bien.", 3),
      S("Fríelos enteros en el aceite caliente, moviéndolos, 4-5 minutos, hasta que la piel se ampolle.", 5),
      S("Escúrrelos y espolvorea la sal gruesa por encima.", 1),
    ],
  }),
  r({
    id: "pez-espada-plancha", title: "Pez espada a la plancha con ajo y perejil",
    cuisine: "espanola", origin: "España (Andalucía)", authenticity: "traditional",
    note: "En el sur lo llaman emperador. Rodajas a la plancha con un majado de ajo, perejil y limón.",
    baseServings: 4, prepMin: 10, cookMin: 8, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pez-espada", 700, "g"), I("ajo", 2, "unit"), I("perejil", 15, "g"), I("limon", 1, "unit"), I("aceite", 40, "ml"), I("sal", 4, "g"), I("tomate", 300, "g"), I("lechuga", 1, "unit")],
    steps: [
      S("Mezcla el ajo y el perejil picados con el zumo del limón y la mitad del aceite.", 4),
      S("Sala las rodajas de pez espada y hazlas a la plancha muy caliente con el resto del aceite, 2-3 minutos por lado, sin que se sequen.", 6),
      S("Sírvelas con el majado por encima y una ensalada de lechuga y tomate.", 3),
    ],
  }),
  r({
    id: "mero-en-salsa-verde", title: "Mero en salsa verde con almejas",
    cuisine: "espanola", origin: "España", authenticity: "traditional",
    note: "Lomos de mero en salsa de ajo, perejil y vino blanco, con almejas.",
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("mero", 600, "g"), I("almejas", 300, "g"), I("ajo", 3, "unit"), I("perejil", 20, "g"), I("harina", 10, "g"), I("vino-blanco", 100, "ml"), I("caldo", 200, "ml"), I("aceite", 50, "ml"), I("sal", 4, "g")],
    steps: [
      S("Dora el ajo picado en el aceite en una cazuela ancha, añade la harina y rehoga 1 minuto.", 3),
      S("Vierte el vino y el caldo (de pescado) moviendo la cazuela hasta tener una salsa ligera.", 3),
      S("Coloca los lomos de mero salados y las almejas, tapa y cuece 6-8 minutos moviendo la cazuela.", 8),
      S("Espolvorea mucho perejil picado y sirve.", 1),
    ],
  }),
  r({
    id: "dorada-a-la-sal", title: "Dorada a la sal",
    cuisine: "espanola", origin: "España (Murcia y Andalucía)", authenticity: "traditional",
    note: "Dorada entera horneada bajo una costra de sal: jugosa y nada salada. Con aceite, limón y patatas.",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("lubina", 1200, "g"), I("sal", 2000, "g"), I("limon", 1, "unit"), I("laurel", 2, "unit"), I("aceite", 30, "ml")],
    steps: [
      S("Pide las doradas limpias pero con escamas. Mete en la tripa rodajas de limón y el laurel.", 5),
      S("Humedece la sal gruesa con un poco de agua, haz una cama en la bandeja, pon el pescado y cúbrelo entero.", 5),
      S("Hornea a 220 °C unos 20-25 minutos.", 22, 220),
      S("Rompe la costra, quita la piel y sirve los lomos con aceite y limón.", 5),
    ],
  }),
];
