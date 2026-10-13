import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 18: aves (pollo y pavo). */
export const recipesArg18: Recipe[] = [
  es({
    id: "higadillos-pollo-garbanzos", title: "Higadillos de pollo con garbanzos especiados",
    baseServings: 4, prepMin: 15, cookMin: 70, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("higado", 500, "g"), I("garbanzos", 300, "g"), I("puerro", 1, "unit"), I("pimiento", 1, "unit"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("chile", 0.5, "unit"), I("comino", 1, "g"), I("canela", 1, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pon los garbanzos a remojo la víspera y cuécelos con la cebolleta, el pimiento verde y el puerro en agua con sal 60 minutos (25 en olla rápida). Retira la verdura y escurre, guardando el caldo.", 60),
      S("Dora el ajo laminado con la guindilla y saltea los higadillos de pollo troceados y salpimentados.", 4),
      S("Añade el comino y la canela (el original usa ras el hanout), los garbanzos y un vaso de caldo y cuece 3 minutos. Sirve con perejil.", 3),
    ],
  }),
  es({
    id: "pollo-cava-frutas-pasas", title: "Pollo en salsa de cava con ciruelas, orejones y pasas",
    note: "El original usa picantones.",
    baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("pollo", 1200, "g"), I("cebolla", 1, "unit"), I("zanahoria", 200, "g"), I("ajo", 2, "unit"), I("orejones", 100, "g"), I("pasas", 60, "g"), I("panceta", 60, "g"), I("cava", 400, "ml"), I("harina", 30, "g"), I("laurel", 2, "unit"), I("tomillo", 1, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora el ajo laminado, pocha la cebolla y las zanahorias picadas con el laurel y el tomillo 15 minutos.", 15),
      S("Salpimienta el pollo en cuartos, enharínalo y dóralo. Añádelo a las verduras con el cava, tapa y cuece 25 minutos (4 en olla rápida).", 25),
      S("Retira el laurel, saca el pollo y tritura la salsa. Saltea la panceta en tiras con los orejones, las ciruelas pasas y las pasas.", 6),
      S("Junta el pollo con la salsa y las frutas, da un hervor y sirve con perejil.", 3),
    ],
  }),
  es({
    id: "rollitos-pavo-queso-esparragos", title: "Rollitos de pavo con queso fresco y espárragos sobre puré de calabaza",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("pavo", 600, "g"), I("jamon-cocido", 80, "g"), I("queso-fresco", 200, "g"), I("esparragos-verdes", 200, "g"), I("calabaza", 300, "g"), I("cebolla", 1, "unit"), I("patata", 200, "g"), I("ajo", 1, "unit"), I("pan-rallado", 30, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora la cebolla picada, añade la calabaza y la patata en trozos, cubre con agua, sala, cuece 15 minutos y tritura con poco caldo.", 18),
      S("Cuece los espárragos 3-4 minutos. Mezcla el pan rallado con el ajo y el perejil picados.", 4),
      S("Salpimienta 8 filetes de pavo, cubre con media loncha de jamón cocido, un espárrago y un bastón de queso fresco, enróllalos y sujétalos con un palillo.", 8),
      S("Espolvorea con el pan rallado, riega con aceite y hornea a 200 °C 12 minutos. Sirve sobre el puré.", 12, 200),
    ],
  }),
  es({
    id: "pollo-frutas-pasas-pasta", title: "Pollo con salsa de frutas pasas y pasta",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("pollo", 1000, "g"), I("pasta", 200, "g"), I("cebolla", 1, "unit"), I("zanahoria", 200, "g"), I("ajo", 2, "unit"), I("orejones", 100, "g"), I("pasas", 60, "g"), I("vino-blanco", 200, "ml"), I("harina", 30, "g"), I("laurel", 2, "unit"), I("tomillo", 1, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Pocha el ajo, la cebolla y las zanahorias picados con sal.", 10),
      S("Salpimienta los muslos de pollo partidos, enharínalos y dóralos. Añádelos con el tomillo, el laurel, la pimienta, el vino y medio vaso de agua; tapa y cuece 30 minutos (8 en olla rápida).", 30),
      S("Retira las hierbas, saca el pollo, tritura y cuela la salsa. Junta todo con los orejones, las ciruelas y las pasas y cuece 5 minutos.", 6),
      S("Mientras, cuece la pasta (fresca) y sírvela con el pollo y perejil."),
    ],
  }),
  es({
    id: "hamburguesas-pavo-rellenas-queso", title: "Hamburguesas de pavo rellenas de queso con ensalada de lombarda",
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pavo", 600, "g"), I("cebolla", 2, "unit"), I("ajo", 1, "unit"), I("huevo", 1, "unit"), I("queso", 80, "g"), I("pan-rallado", 50, "g"), I("repollo", 0.5, "unit"), I("maiz", 250, "g"), I("azucar", 12, "g"), I("vinagre", 20, "ml"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Mezcla la lombarda (repollo morado) en juliana con el maíz, aceite, vinagre, sal y el azúcar y deja macerar.", 5),
      S("Pocha las cebollas picadas con sal.", 10),
      S("Amasa el pavo picado con la cebolla, el ajo picado, perejil, el huevo, el pan rallado, sal y pimienta. Forma 8 discos y monta 4 hamburguesas con una loncha de queso dentro.", 8),
      S("Hazlas a la plancha 4 minutos por lado y sírvelas con la ensalada.", 8),
    ],
  }),
  es({
    id: "cilindros-pavo-guacamole-polenta", title: "Rollitos de pavo con guacamole y polenta frita",
    baseServings: 4, prepMin: 50, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pavo", 250, "g"), I("tomate-cherry", 120, "g"), I("polenta", 200, "g"), I("leche", 250, "ml"), I("nuez-moscada", 1, "g"), I("aguacate", 2, "unit"), I("tomate", 200, "g"), I("cebolleta", 1, "unit"), I("cilantro", 5, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Hierve la leche con 250 ml de agua, sal, pimienta y nuez moscada, añade la polenta y cuece 3-4 minutos removiendo. Extiéndela en 1 cm, tápala y deja enfriar 40 minutos.", 44),
      S("Aplasta los aguacates y mézclalos con los tomates pera en dados, la cebolleta y el cilantro picados y sal.", 5),
      S("Rellena las lonchas de pechuga de pavo con el guacamole y enróllalas.", 5),
      S("Corta la polenta en bastones, fríelos y sírvelos con los rollitos, los tomates cherry y perejil.", 6),
    ],
  }),
  es({
    id: "pavo-mostaza-guarnicion", title: "Pechuga de pavo curada y asada a la mostaza con repollo y tomates",
    baseServings: 4, prepMin: 135, cookMin: 30, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("pavo", 1000, "g"), I("mostaza", 30, "g"), I("repollo", 0.5, "unit"), I("ajo", 2, "unit"), I("tomate", 300, "g"), I("azucar", 175, "g"), I("vinagre", 20, "ml"), I("romero", 2, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 100, "g")],
    steps: [
      S("Mete el romero en la pechuga de pavo, úntala con la mitad de la mostaza y entiérrala en la mezcla de sal gruesa y azúcar moreno 2 horas.", 120),
      S("Lávala, sécala, dórala en la sartén, úntala con el resto de mostaza y hornéala a 200 °C 20 minutos, añadiendo un vaso de agua a los 10 minutos.", 22, 200),
      S("Saltea el repollo en juliana con el ajo laminado y sal. Corta los tomates en rodajas y alíñalos con aceite y vinagre (de Módena).", 8),
      S("Sirve el pavo fileteado con su jugo, el repollo, los tomates y perejil."),
    ],
  }),
  es({
    id: "alas-pollo-coditos", title: "Alitas de pollo fritas con ajetes y coditos con jamón y queso",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 1000, "g"), I("pasta", 250, "g"), I("jamon-cocido", 100, "g"), I("queso", 150, "g"), I("ajo", 10, "unit"), I("harina", 40, "g"), I("aceite", 300, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece los coditos (pasta) según el paquete, escúrrelos y refréscalos.", 11),
      S("Separa las alitas de pollo, salpimiéntalas, enharínalas y fríelas en abundante aceite. Añade perejil y los ajos frescos (ajetes) los últimos 3-4 minutos.", 15),
      S("Saltea el jamón cocido troceado con la pasta, añade el queso (emmental) rallado y sirve con las alitas.", 3),
    ],
  }),
  es({
    id: "muslos-pollo-rellenos-piquillos", title: "Muslos de pollo rellenos de piquillo y jamón con aros de cebolla",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("pollo", 1000, "g"), I("pimientos-piquillo", 100, "g"), I("jamon-cocido", 80, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 400, "g"), I("harina", 50, "g"), I("harina-garbanzo", 50, "g"), I("pan-rallado", 20, "g"), I("vino-blanco", 200, "ml"), I("pimenton", 3, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Deshuesa los muslos de pollo. Dora los huesos, añade el vino, un hervor y el tomate, sala y cuece 15 minutos. Cuela la salsa.", 18),
      S("Salpimienta los muslos, pon un piquillo abierto y una loncha de jamón cocido, enróllalos, átalos y hornéalos a 190 °C 32 minutos.", 32, 190),
      S("Mientras, mezcla las dos harinas con el pimentón, sal y agua con gas (tónica en el original) hasta tener una masa, pasa por ella la cebolla en aros, después por pan rallado (panko) y fríelos."),
      S("Sirve los muslos fileteados con la salsa, los aros y perejil."),
    ],
  }),
  es({
    id: "rollitos-pavo-champinones", title: "Rollitos de pavo y jamón con champiñones al ajillo y brócoli",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("pavo", 600, "g"), I("champinones", 300, "g"), I("jamon-cocido", 80, "g"), I("brocoli", 1, "unit"), I("ajo", 6, "unit"), I("vino-blanco", 200, "ml"), I("harina", 8, "g"), I("pan-rallado", 30, "g"), I("chile", 2, "unit"), I("aceite", 50, "ml"), I("perejil", 10, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora 4 ajos picados, añade los champiñones enteros, las guindillas, la harina, el vino, sal y perejil y cuece 20 minutos.", 22),
      S("Salpimienta 8 filetes de pavo, pon media loncha de jamón cocido encima, enróllalos con un palillo, riégalos con aceite y hornéalos a 200 °C 15 minutos; los últimos minutos espolvoréalos con pan rallado, 2 ajos y perejil picados.", 18, 200),
      S("Mientras, cuece el brócoli en ramilletes 5 minutos y sirve todo junto."),
    ],
  }),
  es({
    id: "muslos-pollo-jamon-queso-sidra", title: "Muslos de pollo rellenos de jamón y queso con salsa de manzana a la sidra",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["sarten", "batidora", "horno"],
    ingredients: [I("pollo", 1000, "g"), I("jamon-cocido", 80, "g"), I("queso", 80, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("manzana", 2, "unit"), I("sidra", 250, "ml"), I("esparragos-verdes", 250, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha la cebolleta y el ajo en dados, añade las manzanas en trozos, la sidra y un vaso de agua y cuece 15 minutos. Tritura.", 18),
      S("Deshuesa los muslos de pollo, salpimiéntalos, cubre con una loncha de queso y otra de jamón cocido, enróllalos y átalos.", 8),
      S("Dóralos en la sartén y ásalos en el horno a 200 °C 25 minutos.", 25, 200),
      S("Haz los espárragos a la plancha y sirve los muslos sin la cuerda con la salsa y perejil.", 6),
    ],
  }),
  es({
    id: "caracolas-pavo-patatas", title: "Caracolas de pavo rellenas con patatas fritas y vinagreta de mostaza",
    note: "El original las acompaña con yuca frita.",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("pavo", 700, "g"), I("patata", 600, "g"), I("jamon", 75, "g"), I("calabacin", 150, "g"), I("tomates-secos", 30, "g"), I("vinagre", 30, "ml"), I("vino-blanco", 30, "ml"), I("mostaza", 10, "g"), I("aceite", 400, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Reduce 150 ml de aceite con el vinagre, el vino, la mostaza y sal a fuego suave 10 minutos. Añade perejil.", 10),
      S("Escalda 5 láminas finas de calabacín 2 minutos.", 2),
      S("Abre la pechuga de pavo en libro, salpimienta y cubre con el jamón, el calabacín y los tomates secos. Enróllala, pínchala con 4 palillos, córtala en 4 caracolas y hazlas a la plancha.", 12),
      S("Fríe las patatas en bastones y sirve con la salsa.", 10),
    ],
  }),
  es({
    id: "pollo-relleno-jamon-queso-asado", title: "Atadito de pollo relleno asado con pera y chalotas",
    baseServings: 4, prepMin: 15, cookMin: 75, difficulty: "easy", equipment: ["sarten", "horno", "olla"],
    ingredients: [I("pollo", 1000, "g"), I("jamon-cocido", 80, "g"), I("queso", 80, "g"), I("chalota", 12, "unit"), I("pera", 2, "unit"), I("vino-dulce", 150, "ml"), I("maicena", 8, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Confita las chalotas peladas en aceite a fuego suave 15 minutos y saltea las peras en gajos con sal.", 15),
      S("Abre las pechugas de pollo, rellénalas de jamón cocido y queso, átalas, salpimienta y dóralas.", 10),
      S("Hornéalo con el vino (oporto) y un poco de agua a 180 °C 40 minutos; añade las peras y las chalotas y hornea a 160 °C 20 minutos más.", 60, 180),
      S("Liga el jugo con la maicena, añade perejil y sirve en rodajas.", 3),
    ],
  }),
  es({
    id: "filetes-pollo-villeroy-jamon-queso", title: "Filetes de pollo rellenos de jamón y queso en bechamel con setas",
    baseServings: 4, prepMin: 90, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 800, "g"), I("jamon-cocido", 80, "g"), I("queso", 80, "g"), I("calabacin", 250, "g"), I("setas", 300, "g"), I("ajo", 8, "unit"), I("leche", 500, "ml"), I("harina", 90, "g"), I("mantequilla", 40, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Haz una bechamel con 30 g de mantequilla, 50 g de harina y la leche, salpimienta y cuece 5 minutos.", 8),
      S("Monta 4 bocados de filete de pollo, jamón, queso y otro filete; báñalos en bechamel, ponlos en una fuente untada con mantequilla y deja enfriar 1 hora.", 65),
      S("Pásalos por harina, huevo y pan rallado y fríelos.", 8),
      S("Saltea los ajos frescos en trozos, el calabacín y las setas con sal y sirve con perejil.", 8),
    ],
  }),
  es({
    id: "cintas-pollo-panko-tomate", title: "Tiras de pollo crujientes con tomate agridulce y ensalada",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 800, "g"), I("chalota", 2, "unit"), I("tomate-triturado", 400, "g"), I("pan-rallado", 120, "g"), I("huevo", 1, "unit"), I("lechuga", 1, "unit"), I("azucar", 25, "g"), I("vinagre", 45, "ml"), I("oregano", 2, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha las chalotas picadas, añade el azúcar, 30 ml de vinagre (de Módena) y el tomate y reduce a la mitad.", 12),
      S("Salpimienta las tiras de pollo, espolvorea orégano, pásalas por huevo batido y pan rallado (panko) y fríelas.", 8),
      S("Sirve con las lechugas aliñadas con aceite, vinagre y sal, la salsa y perejil."),
    ],
  }),
  es({
    id: "pechugas-rebozadas-tomate-picante", title: "Pechugas de pollo rebozadas en tomate picante con pimiento",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 800, "g"), I("tomate", 1000, "g"), I("ajo", 4, "unit"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("vino-blanco", 100, "ml"), I("huevo", 2, "unit"), I("harina", 40, "g"), I("chile", 1, "unit"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha 2 ajos y la cebolla picados con la guindilla, añade los tomates troceados y el vino, sala y cuece 30 minutos. Pasa por el pasapurés.", 35),
      S("Mientras, dora los otros ajos laminados con el pimiento rojo pelado en tiras 15 minutos y añádelos a la salsa 5 minutos."),
      S("Salpimienta los filetes de pechuga, pásalos por harina y huevo y fríelos vuelta y vuelta.", 8),
      S("Calienta el pollo en la salsa 3 minutos y sirve con perejil.", 3),
    ],
  }),
  es({
    id: "pollo-asado-salteado-invierno", title: "Pollo asado con patatas y salteado de manzana, orejones y piñones",
    note: "El original usa pintada.",
    baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("pollo", 1500, "g"), I("patata", 500, "g"), I("manzana", 2, "unit"), I("ajo", 3, "unit"), I("chalota", 8, "unit"), I("orejones", 40, "g"), I("pasas", 25, "g"), I("pinones", 25, "g"), I("romero", 2, "g"), I("tomillo", 2, "g"), I("aceite", 50, "ml"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta el pollo por dentro y por fuera, átalo y ponlo en una fuente con las patatas en tacos, los ajos, las chalotas, el romero, el tomillo, un poco de agua y aceite. Ásalo en el horno a 190 °C 45 minutos.", 45, 190),
      S("Tuesta los piñones. Saltea las manzanas en trozos con las pasas remojadas y los orejones picados, con sal.", 6),
      S("Sirve el pollo con las patatas y el salteado con piñones."),
    ],
  }),
  es({
    id: "popietas-pavo-ciruelas-queso", title: "Popietas de pavo rellenas de ciruelas y queso con patatas fritas",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["sarten", "horno"],
    ingredients: [I("pavo", 700, "g"), I("patata", 600, "g"), I("chalota", 3, "unit"), I("ajo", 4, "unit"), I("pasas", 60, "g"), I("queso", 125, "g"), I("vino-blanco", 350, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga las chalotas picadas, añade el vino (txakoli en el original) y reduce hasta que espese.", 12),
      S("Salpimienta 4 filetes de pavo, cubre con una loncha de pavo cocido, pon 2 ciruelas pasas (o pasas) y un bastón de queso, enróllalos con un palillo, riégalos con aceite y hornéalos a 200 °C 15 minutos.", 15, 200),
      S("Mientras, fríe las patatas en bastones con los ajos aplastados y sálalas."),
      S("Sirve las popietas con la salsa, las patatas y perejil."),
    ],
  }),
  es({
    id: "rulos-pavo-boniato-avellanas", title: "Rulos de pavo rellenos de boniato, avellanas y queso con tomates cherry",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("pavo", 300, "g"), I("tomate-cherry", 450, "g"), I("boniato", 500, "g"), I("avellanas", 40, "g"), I("queso", 100, "g"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece los boniatos en agua con sal 20 minutos, pélalos y aplástalos con las avellanas picadas y el queso (gruyer) rallado.", 22),
      S("Rellena las lonchas de pechuga de pavo, enróllalas, pásalas por harina, huevo y pan rallado y fríelas.", 10),
      S("Sirve con los tomates cherry partidos, con sal, aceite y perejil."),
    ],
  }),
  es({
    id: "alitas-limon-pimenton-patatas-setas", title: "Alitas al limón y pimentón con patatas y setas",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("pollo", 1200, "g"), I("patata", 450, "g"), I("setas", 200, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("limon", 1, "unit"), I("pimenton", 4, "g"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta las alitas de pollo en 3 y desecha las puntas. Salpimiéntalas y macéralas 15 minutos con el zumo de limón, el pimentón y aceite.", 15),
      S("Ásalas en el horno a 200 °C 20 minutos.", 20, 200),
      S("Mientras, dora el ajo picado, añade las patatas en láminas finas, la cebolleta picada y las setas troceadas, sala y cocina 15 minutos."),
      S("Sirve con perejil."),
    ],
  }),
  es({
    id: "salteado-pollo-verduras-soja", title: "Salteado de pollo y verduras con soja",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 700, "g"), I("pan", 120, "g"), I("cebolleta", 2, "unit"), I("alcachofa", 2, "unit"), I("ajo", 2, "unit"), I("judias-verdes", 200, "g"), I("champinones", 200, "g"), I("pimiento", 1, "unit"), I("soja", 30, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta en juliana fina las cebolletas, el pimiento rojo, las judías verdes, las alcachofas limpias y los champiñones; alíñalos con aceite y sal y hazlos en la plancha.", 8),
      S("Deshuesa los muslos de pollo sin piel, córtalos en bocados, salpimiéntalos y saltéalos a fuego fuerte con los ajos con piel y perejil.", 5),
      S("Junta el pollo con las verduras, riega con la soja y sirve con rebanadas de pan.", 1),
    ],
  }),
  es({
    id: "pollo-rustido-ciruelas", title: "Pollo rustido con ciruelas y piñones",
    origin: "España (Cataluña)",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 1200, "g"), I("pasas", 80, "g"), I("tomate", 300, "g"), I("cebolla", 2, "unit"), I("ajo", 5, "unit"), I("pinones", 25, "g"), I("vino-blanco", 200, "ml"), I("brandy", 50, "ml"), I("laurel", 2, "unit"), I("canela", 1, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha la cebolla en juliana y el ajo laminado hasta dorar. Añade el tomate rallado y sofríe.", 15),
      S("Salpimienta el pollo troceado sin piel, dóralo y retíralo. En la misma sartén, rehoga las ciruelas pasas (o pasas) y los piñones, flambea con el brandy y añade el vino.", 8),
      S("Junta todo con el pollo, un poco de agua, la canela (en rama) y el laurel y cuece 30 minutos. Sirve con perejil.", 30),
    ],
  }),
  es({
    id: "pollo-guisado-jamon-patatas", title: "Pollo guisado con jamón y patatitas al romero",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("pollo", 1200, "g"), I("patata", 500, "g"), I("jamon", 100, "g"), I("zanahoria", 200, "g"), I("tomate", 300, "g"), I("pimiento", 1, "unit"), I("ajo", 4, "unit"), I("vino-blanco", 150, "ml"), I("caldo", 300, "ml"), I("romero", 2, "g"), I("aceite", 50, "ml"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Mezcla las patatitas con el romero, aceite y sal y ásalas en el horno a 180 °C 30 minutos.", 30, 180),
      S("Mientras, dora el jamón en taquitos y retíralo. Adoba el pollo con sal, pimienta y 2 ajos majados y fríelo en la misma cazuela."),
      S("Añade las zanahorias en rodajas, el pimiento verde, los otros ajos, el jamón y los tomates rallados, el vino y el caldo y cuece 25 minutos.", 25),
      S("Sirve el pollo con las patatas."),
    ],
  }),
];
