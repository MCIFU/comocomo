import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Platos de la «Dieta para el colesterol alto» de la Fundación Española del Corazón y la Sociedad Española de Cardiología
 *  (menú de dos semanas). El folleto solo da el nombre del plato: cantidades y pasos son nuestros, con poca sal y aceite de oliva. */
const FEC = "Plato del menú para el colesterol alto de la Fundación Española del Corazón.";

export const recipesColesterolFec: Recipe[] = [
  r({
    id: "pollo-mostaza-arroz", title: "Pechuga de pollo a la mostaza con arroz",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Salsa de mostaza aligerada con leche desnatada en lugar de nata.`,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 600, "g"), I("arroz", 240, "g"), I("mostaza", 30, "g"), I("leche", 200, "ml"), I("cebolla", 1, "unit"), I("aceite", 25, "ml"), I("perejil", 5, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz en agua con sal, escúrrelo y resérvalo.", 16),
      S("Salpimienta la pechuga de pollo en filetes y dórala en la sartén con el aceite. Resérvala.", 6),
      S("En la misma sartén pocha la cebolla picada, añade la mostaza y la leche (desnatada) y deja que espese 4 minutos.", 8),
      S("Vuelve a meter el pollo en la salsa 2 minutos y sirve con el arroz y perejil.", 2),
    ],
  }),
  r({
    id: "salmon-horno-limon", title: "Salmón al horno con limón y hierbas",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Pescado azul, rico en omega-3.`,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("salmon", 600, "g"), I("limon", 1, "unit"), I("ajo", 1, "unit"), I("perejil", 10, "g"), I("tomillo", 1, "g"), I("aceite", 15, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Coloca los lomos de salmón en una fuente, salpimiéntalos y ponles encima rodajas de limón.", 4),
      S("Mezcla el ajo y el perejil picados con el tomillo y el aceite y repártelo por encima.", 3),
      S("Hornea a 200 °C 12-14 minutos, hasta que el centro siga jugoso.", 13, 200),
    ],
  }),
  r({
    id: "salteado-calabacin-berenjena-pimiento", title: "Salteado de calabacín, berenjena y pimiento",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 12, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calabacin", 400, "g"), I("berenjena", 400, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("oregano", 1, "g"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta el calabacín, la berenjena, los pimientos y la cebolla en dados medianos.", 8),
      S("Saltea primero la cebolla y los pimientos con el aceite 4 minutos a fuego vivo; añade la berenjena y el calabacín con el ajo picado y saltea 7-8 minutos más.", 12),
      S("Sala y termina con orégano."),
    ],
  }),
  r({
    id: "bacalao-guisado-patatas", title: "Bacalao guisado con patatas",
    cuisine: "espanola", origin: "España", authenticity: "traditional", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("bacalao", 500, "g"), I("patata", 700, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 200, "g"), I("pimenton", 3, "g"), I("laurel", 1, "unit"), I("aceite", 30, "ml")],
    steps: [
      S("Pocha la cebolla, el pimiento y el ajo picados con el aceite 10 minutos. Añade el pimentón y el tomate triturado y cocina 5 minutos.", 15),
      S("Agrega las patatas chascadas, el laurel y agua hasta cubrir y cuece 15 minutos (sin sal: la pone el bacalao).", 15),
      S("Incorpora el bacalao desalado en trozos y cuece 5 minutos más.", 5),
    ],
  }),
  r({
    id: "boquerones-plancha-tomate", title: "Boquerones a la plancha con tomate aliñado",
    cuisine: "espanola", origin: "España (Andalucía)", authenticity: "adapted", note: `${FEC} A la plancha en lugar de fritos.`,
    baseServings: 4, prepMin: 15, cookMin: 6, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("boquerones", 600, "g"), I("tomate", 500, "g"), I("ajo", 1, "unit"), I("perejil", 10, "g"), I("limon", 1, "unit"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta el tomate en rodajas y alíñalo con la mitad del aceite, sal y el ajo picado.", 5),
      S("Limpia los boquerones (abiertos, sin espina) y sálalos.", 8),
      S("Hazlos a la plancha muy caliente con el resto del aceite, 1 minuto por lado, y sírvelos con el tomate, perejil picado y limón.", 4),
    ],
  }),
  r({
    id: "arroz-alcachofas", title: "Arroz con alcachofas",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Sin jamón, para no sumar embutido.`,
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("arroz", 320, "g"), I("alcachofa", 8, "unit"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 150, "g"), I("azafran", 0.2, "g"), I("caldo", 400, "ml"), I("aceite", 35, "ml"), I("sal", 2, "g")],
    steps: [
      S("Limpia las alcachofas y córtalas en octavos.", 10),
      S("Sofríe en una sartén ancha la cebolla, el pimiento y el ajo picados con el aceite; añade las alcachofas y el tomate triturado y cocina 6 minutos.", 10),
      S("Agrega el arroz, rehoga 1 minuto, y moja con el caldo (de verduras) más 700 ml de agua con el azafrán. Sala con cuidado.", 2),
      S("Cuece 17-18 minutos sin remover y deja reposar 5 minutos.", 18),
    ],
  }),
  r({
    id: "revuelto-trigueros-cebolleta", title: "Revuelto de espárragos trigueros y cebolleta",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Con poco huevo y mucha verdura (en el menú, «revuelto de ajetes y trigueros»).`,
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("esparragos-verdes", 400, "g"), I("cebolleta", 3, "unit"), I("champinones", 200, "g"), I("huevo", 2, "unit"), I("aceite", 25, "ml"), I("sal", 3, "g")],
    steps: [
      S("Trocea los espárragos, la cebolleta (también lo verde) y los champiñones.", 6),
      S("Saltéalos con el aceite a fuego medio 7 minutos, hasta que estén tiernos.", 7),
      S("Añade los huevos batidos con sal y remueve a fuego bajo hasta que cuajen, jugosos.", 2),
    ],
  }),
  r({
    id: "pavo-asado-patatas", title: "Pavo asado con patatas y cebolla",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 40, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pavo", 600, "g"), I("patata", 700, "g"), I("cebolla", 2, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 100, "ml"), I("romero", 1, "g"), I("aceite", 30, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta las patatas en rodajas y la cebolla en juliana, colócalas en una fuente con el ajo, la mitad del aceite y sal, y hornea a 200 °C 20 minutos.", 20, 200),
      S("Salpimienta la pechuga de pavo en filetes gruesos, úntala con el resto del aceite y el romero y ponla encima.", 3),
      S("Riega con el vino y hornea 18-20 minutos más, dándole la vuelta a mitad.", 19, 200),
    ],
  }),
  r({
    id: "lasana-atun-verduras", title: "Lasaña de atún y verduras con bechamel ligera",
    cuisine: "italiana", origin: "Italia (versión casera española)", authenticity: "adapted", note: `${FEC} Bechamel con leche desnatada y aceite, sin mantequilla.`,
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["horno", "sarten", "olla"],
    ingredients: [I("laminas-lasana", 200, "g"), I("atun-lata", 240, "g"), I("cebolla", 1, "unit"), I("calabacin", 300, "g"), I("tomate-triturado", 400, "g"), I("leche", 400, "ml"), I("harina", 30, "g"), I("queso", 20, "g", true), I("aceite", 40, "ml"), I("nuez-moscada", 0.5, "g"), I("sal", 3, "g")],
    steps: [
      S("Cuece las láminas de lasaña en la olla según el paquete y extiéndelas sobre un paño.", 10),
      S("Pocha la cebolla y el calabacín picados con la mitad del aceite, añade el tomate triturado y cocina 10 minutos. Mezcla con el atún escurrido.", 15),
      S("Para la bechamel, tuesta la harina con el resto del aceite, añade la leche (desnatada) poco a poco con sal y nuez moscada y cocina 6 minutos removiendo.", 8),
      S("Monta capas de láminas y relleno en una fuente, cubre con la bechamel y, si quieres, un poco de queso rallado; hornea a 200 °C 20 minutos.", 20, 200),
    ],
  }),
  r({
    id: "alubias-blancas-verduras", title: "Judías blancas estofadas con verduras",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Legumbre sin chorizo ni tocino.`,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("alubias-blancas", 800, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("zanahoria", 150, "g"), I("puerro", 1, "unit"), I("tomate-triturado", 200, "g"), I("ajo", 2, "unit"), I("pimenton", 3, "g"), I("laurel", 1, "unit"), I("aceite", 30, "ml"), I("sal", 2, "g")],
    steps: [
      S("Sofríe la cebolla, el puerro, el pimiento, la zanahoria y el ajo picados con el aceite 10 minutos.", 10),
      S("Añade el pimentón y el tomate triturado y cocina 5 minutos.", 5),
      S("Incorpora las alubias blancas cocidas y escurridas, el laurel y medio litro de agua; cuece 12 minutos y ajusta de sal.", 12),
    ],
  }),
  r({
    id: "patatas-puerros-ligeras", title: "Patatas con puerros en salsa ligera",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} En el menú, «a la crema»: aquí la crema es leche desnatada y la propia patata.`,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("patata", 800, "g"), I("puerro", 3, "unit"), I("leche", 250, "ml"), I("caldo", 300, "ml"), I("aceite", 25, "ml"), I("nuez-moscada", 0.5, "g"), I("perejil", 5, "g"), I("sal", 2, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha los puerros en rodajas con el aceite 8 minutos sin que se doren.", 8),
      S("Añade las patatas en rodajas gruesas, el caldo (de verduras) y la leche (desnatada) y cuece tapado 20 minutos, hasta que la patata esté tierna.", 20),
      S("Aplasta un par de rodajas para espesar la salsa, salpimienta, añade la nuez moscada y sirve con perejil."),
    ],
  }),
  r({
    id: "pollo-naranja", title: "Pollo a la naranja",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 700, "g"), I("naranja", 4, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("miel", 15, "g"), I("tomillo", 1, "g"), I("aceite", 25, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta el pollo (pechuga o contramuslo sin piel) en trozos y dóralo con el aceite. Resérvalo.", 8),
      S("Pocha la cebolla y el ajo picados en la misma sartén 6 minutos.", 6),
      S("Añade el zumo de tres naranjas, la miel y el tomillo, devuelve el pollo y cuece tapado 15 minutos.", 15),
      S("Destapa, deja reducir la salsa y sirve con la última naranja en gajos.", 3),
    ],
  }),
  r({
    id: "guisantes-estofados", title: "Guisantes estofados con zanahoria y patata",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("guisantes", 600, "g"), I("patata", 300, "g"), I("zanahoria", 150, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 150, "g"), I("pimenton", 2, "g"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Rehoga la cebolla, el ajo y la zanahoria picados con el aceite 8 minutos; añade el pimentón y el tomate triturado.", 10),
      S("Incorpora la patata en dados, los guisantes, sal y agua justa para cubrir.", 3),
      S("Cuece a fuego suave 15 minutos.", 15),
    ],
  }),
  r({
    id: "merluza-esparragos-salsa-verde", title: "Merluza con espárragos en salsa verde",
    cuisine: "espanola", origin: "España (País Vasco)", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("merluza", 650, "g"), I("esparragos-verdes", 250, "g"), I("ajo", 3, "unit"), I("perejil", 20, "g"), I("harina", 10, "g"), I("vino-blanco", 100, "ml"), I("aceite", 35, "ml"), I("sal", 3, "g")],
    steps: [
      S("Dora el ajo picado en una cazuela ancha con el aceite, añade la harina y rehoga 1 minuto.", 3),
      S("Agrega el vino y 200 ml de agua sin dejar de mover la cazuela, hasta tener una salsa ligera.", 3),
      S("Coloca la merluza salada y los espárragos trigueros troceados, tapa y cocina 6-7 minutos moviendo la cazuela.", 7),
      S("Espolvorea mucho perejil picado y sirve.", 1),
    ],
  }),
  r({
    id: "ensalada-lentejas-arroz", title: "Ensalada de lentejas con arroz y verduras",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("lentejas", 200, "g"), I("arroz", 100, "g"), I("tomate", 250, "g"), I("pimiento", 1, "unit"), I("cebolla", 0.5, "unit"), I("pepino", 150, "g"), I("perejil", 10, "g"), I("vinagre", 20, "ml"), I("aceite", 35, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece las lentejas (pardinas) 25 minutos y, aparte, el arroz 15 minutos, ambos en agua con sal. Escúrrelos y deja que se enfríen.", 25),
      S("Pica el tomate, el pimiento, la cebolla, el pepino y el perejil.", 8),
      S("Mezcla todo y aliña con aceite, vinagre y sal."),
    ],
  }),
  r({
    id: "albondigas-pavo-tomate", title: "Albóndigas de pavo en salsa de tomate",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Carne de pavo, magra, y al horno en lugar de fritas.`,
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("pavo", 600, "g"), I("pan-rallado", 40, "g"), I("leche", 60, "ml"), I("ajo", 2, "unit"), I("perejil", 10, "g"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("tomate-triturado", 500, "g"), I("aceite", 30, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Mezcla el pavo picado con el pan rallado mojado en la leche, el ajo y el perejil picados, sal y pimienta. Forma albóndigas.", 12),
      S("Ásalas en el horno a 200 °C 12 minutos, sobre una bandeja untada con un poco de aceite.", 12, 200),
      S("Mientras, pocha la cebolla y la zanahoria picadas con el resto del aceite, añade el tomate triturado y cuece 15 minutos.", 15),
      S("Pasa las albóndigas a la salsa y cuece todo junto 5 minutos.", 5),
    ],
  }),
  r({
    id: "arroz-con-setas", title: "Arroz con setas",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("arroz", 320, "g"), I("setas", 400, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 100, "g"), I("tomillo", 1, "g"), I("caldo", 400, "ml"), I("aceite", 35, "ml"), I("perejil", 5, "g"), I("sal", 2, "g")],
    steps: [
      S("Saltea las setas troceadas con la mitad del aceite a fuego fuerte y resérvalas.", 6),
      S("Sofríe la cebolla y el ajo picados con el resto del aceite, añade el tomate triturado y el tomillo y cocina 5 minutos.", 8),
      S("Añade el arroz y las setas, moja con el caldo (de verduras) y 700 ml de agua, sala con cuidado y cuece 18 minutos.", 18),
      S("Reposa 5 minutos y sirve con perejil.", 5),
    ],
  }),
  r({
    id: "conejo-ajillo-pimientos-asados", title: "Conejo al ajillo con pimientos asados",
    cuisine: "espanola", origin: "España", authenticity: "traditional", note: FEC,
    baseServings: 4, prepMin: 15, cookMin: 65, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("conejo", 800, "g"), I("pimiento", 3, "unit"), I("ajo", 8, "unit"), I("vino-blanco", 150, "ml"), I("tomillo", 1, "g"), I("laurel", 1, "unit"), I("perejil", 10, "g"), I("aceite", 40, "ml"), I("sal", 4, "g")],
    steps: [
      S("Asa los pimientos (rojos) enteros en el horno a 200 °C 40 minutos. Pélalos y córtalos en tiras.", 40, 200),
      S("Mientras, sala el conejo troceado y dóralo en la sartén con el aceite y los ajos enteros chafados.", 12),
      S("Añade el vino, el tomillo y el laurel, tapa y cocina a fuego suave 25 minutos.", 25),
      S("Sirve con los pimientos asados y perejil picado.", 1),
    ],
  }),
  r({
    id: "canelones-atun", title: "Canelones de atún con bechamel ligera",
    cuisine: "italiana", origin: "Italia (versión casera española)", authenticity: "adapted", note: `${FEC} Bechamel con leche desnatada y aceite de oliva.`,
    baseServings: 4, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["horno", "sarten", "olla"],
    ingredients: [I("laminas-lasana", 180, "g"), I("atun-lata", 240, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("tomate-triturado", 300, "g"), I("huevo", 1, "unit"), I("leche", 400, "ml"), I("harina", 30, "g"), I("queso", 20, "g", true), I("aceite", 40, "ml"), I("sal", 3, "g")],
    steps: [
      S("Cuece las láminas (placas de canelón) en la olla según el paquete y extiéndelas sobre un paño.", 10),
      S("Cuece el huevo 10 minutos. Pocha la cebolla y el pimiento picados con la mitad del aceite, añade la mitad del tomate triturado, el atún y el huevo picado.", 15),
      S("Rellena y enrolla los canelones y colócalos sobre el resto del tomate en una fuente.", 8),
      S("Haz una bechamel con el resto del aceite, la harina, la leche (desnatada) y sal; cúbrelos, espolvorea, si quieres, un poco de queso y hornea a 200 °C 15 minutos.", 15, 200),
    ],
  }),
  r({
    id: "tortilla-cebolla-champinones", title: "Tortilla de cebolla y champiñones",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Tres huevos para cinco raciones, con mucha verdura.`,
    baseServings: 5, prepMin: 10, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("cebolla", 2, "unit"), I("champinones", 300, "g"), I("huevo", 3, "unit"), I("patata", 200, "g"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Pocha la cebolla en juliana y la patata en láminas finas con el aceite a fuego medio 12 minutos.", 12),
      S("Añade los champiñones laminados y saltea 5 minutos hasta que se evapore el agua.", 5),
      S("Mezcla con los huevos batidos con sal y cuaja la tortilla por ambos lados.", 5),
    ],
  }),
  r({
    id: "sopa-fideos-verduras", title: "Sopa de fideos con verduras",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pasta", 120, "g"), I("zanahoria", 150, "g"), I("puerro", 1, "unit"), I("apio", 80, "g"), I("pollo", 200, "g"), I("caldo", 500, "ml"), I("perejil", 5, "g"), I("aceite", 15, "ml"), I("sal", 2, "g")],
    steps: [
      S("Rehoga el puerro, la zanahoria y el apio picados con el aceite 5 minutos.", 5),
      S("Añade la pechuga de pollo en trozos, el caldo (bajo en sal) y 800 ml de agua y cuece 15 minutos. Saca el pollo, desmígalo y vuelve a meterlo.", 15),
      S("Agrega los fideos (pasta fina) y cuece 4 minutos. Ajusta de sal y sirve con perejil.", 4),
    ],
  }),
  r({
    id: "brochetas-pollo-champinones-cebolla", title: "Brochetas de pollo, champiñones y cebolla",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 20, cookMin: 12, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 600, "g"), I("champinones", 300, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("perejil", 5, "g"), I("limon", 1, "unit"), I("aceite", 25, "ml"), I("sal", 4, "g")],
    steps: [
      S("Adoba la pechuga de pollo en dados con el zumo de limón, el ajo y el perejil picados, la mitad del aceite y sal, 10 minutos.", 10),
      S("Monta las brochetas alternando pollo, champiñones enteros y trozos de cebolla.", 8),
      S("Hazlas a la plancha con el resto del aceite, dándoles la vuelta, 10-12 minutos.", 12),
    ],
  }),
  r({
    id: "espinacas-con-setas", title: "Espinacas salteadas con setas",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("espinacas", 600, "g"), I("setas", 300, "g"), I("ajo", 2, "unit"), I("aceite", 30, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saltea las setas troceadas con el aceite y el ajo laminado a fuego fuerte 5 minutos.", 5),
      S("Añade las espinacas, salpimienta y saltea hasta que pierdan volumen.", 4),
    ],
  }),
  r({
    id: "pechuga-pavo-hierbas", title: "Pechuga de pavo a las hierbas con verduras",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} En el menú va al estragón; vale cualquier hierba seca.`,
    baseServings: 4, prepMin: 10, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pavo", 600, "g"), I("calabacin", 300, "g"), I("zanahoria", 150, "g"), I("cebolla", 1, "unit"), I("tomillo", 1, "g"), I("romero", 1, "g"), I("vino-blanco", 80, "ml"), I("aceite", 30, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta los filetes de pechuga de pavo, frótalos con el tomillo y el romero y hazlos a la plancha con la mitad del aceite, 3 minutos por lado. Resérvalos.", 7),
      S("Saltea en la misma sartén la cebolla, la zanahoria y el calabacín en bastones con el resto del aceite 8 minutos.", 8),
      S("Moja con el vino, deja que se evapore y sirve el pavo sobre la verdura.", 3),
    ],
  }),
  r({
    id: "brocoli-almendras", title: "Brócoli con almendras y ajo",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: FEC,
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("brocoli", 2, "unit"), I("almendras", 40, "g"), I("ajo", 2, "unit"), I("limon", 0.5, "unit"), I("aceite", 25, "ml"), I("sal", 3, "g")],
    steps: [
      S("Cuece el brócoli en ramitos en agua con sal 4 minutos, que quede firme. Escúrrelo.", 5),
      S("Dora el ajo laminado y las almendras (laminadas) con el aceite, añade el brócoli y saltea 2 minutos.", 4),
      S("Termina con unas gotas de limón."),
    ],
  }),
  r({
    id: "brochetas-salmon-tomate", title: "Brochetas de salmón y tomate cherry",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${FEC} Pescado azul a la plancha.`,
    baseServings: 4, prepMin: 15, cookMin: 8, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("salmon", 600, "g"), I("tomate-cherry", 250, "g"), I("cebolla", 0.5, "unit"), I("limon", 1, "unit"), I("oregano", 1, "g"), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta el salmón sin piel en dados grandes y adóbalo con el zumo del limón, el orégano, sal y el aceite 10 minutos.", 10),
      S("Monta las brochetas alternando salmón, tomates cherry y trozos de cebolla.", 6),
      S("Hazlas a la plancha 2 minutos por cada lado.", 8),
    ],
  }),
];
