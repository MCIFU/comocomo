import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «84 recetas para preparar hamburguesas» de Mariano Orzola, segunda tanda. Pasos escritos de nuevo para Cómocomo. */
const MO = "Receta del libro «84 recetas para preparar hamburguesas» de Mariano Orzola, adaptada.";
const PAN = I("pan-hamburguesa", 4, "unit", true);

export const recipesLibroHamburguesas84b: Recipe[] = [
  r({
    id: "hamburguesa-salmon-bacalao-gambas", title: "Hamburguesas de salmón, bacalao y gambas",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: `${MO} Se congelan 30 minutos antes de cocinarlas para que no se rompan.`,
    baseServings: 4, prepMin: 30, cookMin: 10, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("salmon", 250, "g"), I("merluza", 250, "g"), I("gambas", 100, "g"), I("huevo", 1, "unit"), I("ajo", 1, "unit"), I("perejil", 5, "g"), I("sesamo", 5, "g"), I("pan-rallado", 15, "g"), I("aceite", 20, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Corta el salmón y el pescado blanco (bacalao fresco o merluza) en daditos y pela las gambas.", 10),
      S("Mezcla con el huevo, el ajo y el perejil picados, el sésamo, sal, pimienta y el pan rallado. Tapa y deja 1 hora en la nevera.", 5),
      S("Forma las hamburguesas sobre papel de horno y congélalas 30 minutos para que cojan consistencia.", 8),
      S("Hazlas en la sartén con el aceite a fuego medio hasta que se doren por los dos lados.", 8),
    ],
  }),
  r({
    id: "hamburguesa-merluza-patata", title: "Hamburguesas de merluza y puré de patata al horno",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("patata", 400, "g"), I("merluza", 300, "g"), I("perejil", 10, "g"), I("limon", 1, "unit"), I("huevo", 1, "unit"), I("harina", 40, "g"), I("avena", 60, "g"), I("aceite", 15, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas peladas 20 minutos y aplástalas en puré. Cuece la merluza 5 minutos en agua con sal y desmenúzala sin espinas.", 22),
      S("Mezcla el puré, el pescado, la ralladura de limón, el perejil picado, sal y pimienta.", 5),
      S("Forma hamburguesas y pásalas por harina, huevo batido y avena.", 10),
      S("Colócalas en una bandeja untada de aceite y hornéalas a 220 °C 12-15 minutos, hasta que se doren.", 14, 220),
    ],
  }),
  r({
    id: "hamburguesa-quinoa-pollo", title: "Hamburguesas de quinoa, pollo y pimientos",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("quinoa", 150, "g"), I("pollo", 250, "g"), I("pimiento", 2, "unit"), I("cebolla", 0.5, "unit"), I("parmesano", 30, "g"), I("huevo", 1, "unit"), I("pan-rallado", 40, "g"), I("comino", 1, "g"), I("aceite", 30, "ml"), I("sal", 4, "g"), PAN],
    steps: [
      S("Lava la quinoa y cuécela con el doble de agua y sal hasta que la absorba, 15 minutos. Deja que se enfríe.", 16),
      S("Pocha los pimientos (verde y rojo) y la cebolla en daditos con la mitad del aceite; añade el pollo en daditos y cocina 2 minutos. Enfría.", 10),
      S("Mezcla todo con el parmesano, el huevo, el comino y el pan rallado necesario para que se pueda moldear. Forma las hamburguesas.", 6),
      S("Hazlas en la sartén con el resto del aceite 4 minutos por lado.", 8),
    ],
  }),
  r({
    id: "hamburguesa-arroz-acelga", title: "Hamburguesas ligeras de arroz y acelgas",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("arroz", 80, "g"), I("acelgas", 200, "g"), I("cebolla", 0.5, "unit"), I("huevo", 2, "unit"), I("pan-rallado", 80, "g"), I("perejil", 5, "g"), I("oregano", 1, "g"), I("tomillo", 1, "g"), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece el arroz 15 minutos y, aparte, las hojas de acelga 5 minutos; escúrrelo todo bien.", 16),
      S("Tritura con la batidora el arroz, las acelgas, la cebolla, un huevo, el perejil, el orégano, el tomillo y la sal. Añade pan rallado hasta que se pueda moldear.", 5),
      S("Forma las hamburguesas y pásalas por el otro huevo batido y el resto del pan rallado.", 8),
      S("Hazlas en la sartén con el aceite 3-4 minutos por lado. Sírvelas con ensalada.", 8),
    ],
  }),
  r({
    id: "hamburguesa-pavo-tropical", title: "Hamburguesa tropical de pavo con salsa de piña y mango",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pina", 0.5, "unit"), I("mango", 1, "unit"), I("cebolla", 0.5, "unit"), I("cilantro", 10, "g"), I("limon", 0.5, "unit"), I("aceite", 15, "ml"), I("pavo", 500, "g"), I("manzana", 1, "unit"), I("pan-rallado", 25, "g"), I("queso", 60, "g"), I("pan-hamburguesa", 4, "unit"), I("lechuga", 1, "unit"), I("sal", 4, "g")],
    steps: [
      S("Para la salsa, pica la piña, el mango, la cebolla (morada) y el cilantro y mézclalos con el zumo de limón y el aceite.", 12),
      S("Mezcla el pavo picado con la manzana rallada, el pan rallado y la sal. Forma 4 hamburguesas de 1 cm y déjalas en la nevera 1 hora.", 8),
      S("Hazlas a la plancha a fuego medio-fuerte 8 minutos por cada lado, hasta que estén hechas, y pon el queso (cheddar) encima al final.", 16),
      S("Sírvelas en el pan con lechuga y la salsa tropical."),
    ],
  }),
  r({
    id: "hamburguesa-tres-carnes", title: "Hamburguesas de tres carnes al pimentón",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 250, "g"), I("solomillo-cerdo", 250, "g"), I("pollo", 250, "g"), I("ajo", 2, "unit"), I("perejil", 10, "g"), I("pimenton", 4, "g"), I("chile", 1, "unit", true), I("aceite", 15, "ml"), I("sal", 5, "g"), PAN],
    steps: [
      S("Pica el solomillo de cerdo y la pechuga de pollo a cuchillo, sin dejarlo muy fino, y mézclalos con la ternera picada.", 10),
      S("Añade el ajo y el perejil picados, el pimentón, la guindilla (chile) si te gusta y la sal, y amasa 5 minutos hasta que se una.", 6),
      S("Forma las hamburguesas y hazlas en la sartén antiadherente con el aceite 3-4 minutos por lado, hasta que estén bien hechas.", 8),
    ],
  }),
  r({
    id: "hamburguesa-pollo-calabacin", title: "Hamburguesas de pollo y calabacín al horno",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: `${MO} La mezcla reposa 2 horas en la nevera.`,
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["microondas", "horno"],
    ingredients: [I("calabacin", 400, "g"), I("pan", 30, "g"), I("huevo", 1, "unit"), I("sesamo", 5, "g"), I("pollo", 350, "g"), I("ajo", 2, "unit"), I("perejil", 5, "g"), I("oregano", 1, "g"), I("aceite", 10, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g"), PAN],
    steps: [
      S("Pica el calabacín con piel muy pequeño, sálalo y cuécelo en el microondas 8 minutos. Escúrrelo bien.", 10),
      S("Pica la pechuga de pollo y mézclala con la clara del huevo, el ajo y el perejil picados, el sésamo, el orégano, sal y pimienta; añade el calabacín y el pan desmigado.", 8),
      S("Tapa y guarda la mezcla 2 horas en la nevera. Forma 6 hamburguesas.", 5),
      S("Hornéalas en una bandeja untada de aceite a 180 °C 20 minutos, hasta que se doren.", 20, 180),
    ],
  }),
  r({
    id: "hamburguesa-lentejas-calabaza", title: "Hamburguesas de lentejas con calabaza y zanahoria",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("lentejas", 250, "g"), I("pan-rallado", 40, "g"), I("avena", 40, "g"), I("huevo", 1, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("zanahoria", 100, "g"), I("calabaza", 100, "g"), I("tomate", 150, "g"), I("pepino", 150, "g"), I("oregano", 1, "g"), I("aceite", 40, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las lentejas en agua con sal 25-30 minutos, escúrrelas y aplástalas en puré.", 28),
      S("Rehoga la cebolla y el ajo picados con la mitad del aceite, añade la zanahoria y la calabaza ralladas y cocina hasta que estén tiernas. Salpimienta con orégano.", 10),
      S("Mezcla con las lentejas, la avena, el huevo y el pan rallado necesario para que no se pegue. Forma las hamburguesas.", 6),
      S("Hazlas en la sartén con el resto del aceite por los dos lados y sírvelas con rodajas de tomate y pepino.", 8),
    ],
  }),
  r({
    id: "hamburguesa-garbanzos-jamon-queso", title: "Hamburguesas de garbanzos rellenas de jamón y queso con bechamel",
    cuisine: "espanola", origin: "Versión casera", authenticity: "adapted", note: MO,
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("garbanzos-cocidos", 500, "g"), I("cebolla", 2, "unit"), I("ajo", 2, "unit"), I("huevo", 2, "unit"), I("harina", 60, "g"), I("aceite", 200, "ml"), I("jamon-cocido", 80, "g"), I("queso", 80, "g"), I("leche", 250, "ml"), I("mantequilla", 20, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Sofríe la cebolla y el ajo picados con un poco de aceite y pásalos por el pasapurés junto con los garbanzos. Salpimienta y añade los huevos.", 12),
      S("Con las manos enharinadas forma 8 hamburguesas finas y fríelas en el aceite hasta que se doren. Escúrrelas.", 10),
      S("Para la bechamel, funde la mantequilla, tuesta 20 g de harina, añade la leche y cuece removiendo hasta que espese.", 6),
      S("Haz 4 «bocadillos» con dos hamburguesas y una loncha de jamón cocido y otra de queso en medio, cúbrelos con bechamel y gratina a 220 °C 8 minutos.", 8, 220),
    ],
  }),
  r({
    id: "hamburguesa-doble-salsa-especial", title: "Hamburguesa doble con salsa especial y pepinillo",
    cuisine: "estadounidense", origin: "Estados Unidos (al estilo de las de cadena)", authenticity: "adapted", note: `${MO} La salsa es casera, de yogur, tomate y mostaza.`,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pan-hamburguesa", 4, "unit"), I("ternera-picada", 600, "g"), I("lechuga", 0.25, "unit"), I("cebolla", 1, "unit"), I("queso", 80, "g"), I("pepino", 80, "g"), I("vinagre", 15, "ml"), I("yogur", 1, "unit"), I("tomate-triturado", 20, "g"), I("mostaza", 10, "g"), I("azucar", 3, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Para la salsa, mezcla el yogur, el tomate triturado, la mostaza, el azúcar, un poco de cebolla picada y un poco de pepino picado con el vinagre. Guárdala en la nevera.", 6),
      S("Corta la lechuga en juliana fina, pica el resto de la cebolla y corta el resto del pepino en rodajas finas aliñadas con vinagre, como un pepinillo rápido.", 6),
      S("Salpimienta la carne, forma 8 hamburguesas muy finas y hazlas en la sartén caliente 1-2 minutos por lado, poniendo el queso encima de la mitad al final.", 8),
      S("Monta cada pan con salsa, lechuga, cebolla, una hamburguesa con queso, pepinillo y otra hamburguesa.", 4),
    ],
  }),
  r({
    id: "hamburguesa-bacon-barbacoa", title: "Hamburguesa con beicon, queso y salsa barbacoa",
    cuisine: "estadounidense", origin: "Estados Unidos (estilo steakhouse)", authenticity: "adapted", note: `${MO} Salsa barbacoa casera rápida.`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pan-hamburguesa", 4, "unit"), I("ternera-picada", 600, "g"), I("queso", 80, "g"), I("beicon", 120, "g"), I("tomate", 200, "g"), I("cebolla", 1, "unit"), I("lechuga", 0.25, "unit"), I("tomate-triturado", 100, "g"), I("miel", 20, "g"), I("vinagre", 15, "ml"), I("salsa-inglesa", 10, "ml"), I("pimenton", 3, "g"), I("aceite", 20, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Para la salsa barbacoa, cuece el tomate triturado con la miel, el vinagre, la salsa inglesa y el pimentón 5 minutos hasta que espese.", 6),
      S("Dora el beicon a fuego suave hasta que esté crujiente. Fríe la cebolla en aros finos con el aceite hasta que esté dorada.", 10),
      S("Salpimienta la carne, forma 4 hamburguesas de 150 g y hazlas a la plancha hasta que estén bien hechas; pon el queso encima al final.", 10),
      S("Monta con salsa barbacoa, hamburguesa, beicon, cebolla frita, tomate y lechuga.", 3),
    ],
  }),
  r({
    id: "hamburguesa-pescado-empanado", title: "Hamburguesa de pescado empanado con salsa tártara",
    cuisine: "estadounidense", origin: "Estados Unidos (al estilo de las de cadena)", authenticity: "adapted", note: `${MO} La salsa tártara se hace con yogur, alcaparras y pepino.`,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("merluza", 500, "g"), I("harina", 60, "g"), I("huevo", 1, "unit"), I("pan-rallado", 80, "g"), I("aceite", 300, "ml"), I("pan-hamburguesa", 4, "unit"), I("queso", 60, "g"), I("yogur", 1, "unit"), I("alcaparras", 15, "g"), I("pepino", 50, "g"), I("limon", 0.5, "unit"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Para la salsa tártara, mezcla el yogur con las alcaparras y el pepino picados, unas gotas de limón y sal.", 5),
      S("Corta la merluza en 4 filetes cuadrados sin espinas, salpimiéntalos y pásalos por harina, huevo batido y pan rallado.", 8),
      S("Fríelos en el aceite a fuego moderado hasta que estén dorados, 3 minutos por lado. Escúrrelos.", 7),
      S("Monta cada pan con el pescado, media loncha de queso y la salsa tártara.", 3),
    ],
  }),
  r({
    id: "pan-hamburguesa-casero", title: "Panecillos de hamburguesa caseros",
    cuisine: "estadounidense", origin: "Versión casera", authenticity: "adapted", note: `${MO} Salen unos 12 panecillos; la masa puede levar toda la noche en la nevera.`,
    baseServings: 12, prepMin: 180, cookMin: 15, difficulty: "medium", equipment: ["horno", "batidora"],
    ingredients: [I("harina", 600, "g"), I("levadura", 10, "g"), I("azucar", 40, "g"), I("sal", 8, "g"), I("huevo", 2, "unit"), I("mantequilla", 40, "g"), I("leche", 300, "ml"), I("sesamo", 15, "g")],
    steps: [
      S("Disuelve la levadura (de panadería) en la leche tibia. Mezcla con la batidora el azúcar, la mantequilla blanda, la sal y un huevo; añade la leche y la harina y amasa a mano 10 minutos.", 15),
      S("Tapa la masa y deja que doble su volumen, 1 hora y media (o toda la noche en la nevera).", 90),
      S("Divide en 12 bolas, aplástalas un poco y colócalas en una bandeja. Deja que leven 1 hora más.", 65),
      S("Píntalas con el otro huevo batido, espolvorea el sésamo y hornea a 200 °C 12-15 minutos.", 14, 200),
    ],
  }),
];
