import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Lote de postres. Recetas escritas para COMOCOMO. */
export const recipesPostres: Recipe[] = [
  // ——— España ———
  r({
    id: "tarta-de-santiago", title: "Tarta de Santiago", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Galicia)", note: "Sin harina: solo almendra, azúcar y huevo. Se decora con la cruz de Santiago en azúcar glas.",
    baseServings: 8, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["horno", "batidora"],
    ingredients: [I("almendras", 250, "g"), I("azucar", 250, "g"), I("huevo", 5, "unit"), I("limon", 1, "unit"), I("canela", 1, "g"), I("mantequilla", 10, "g")],
    steps: [
      S("Precalienta el horno a 180 °C y engrasa un molde de 24 cm con la mantequilla.", 10, 180),
      S("Tritura las almendras hasta tener una harina fina, sin que llegue a soltar aceite.", 2),
      S("Bate los huevos con el azúcar 3 minutos hasta que blanqueen. Añade la almendra, la ralladura de limón y la canela y mezcla con espátula.", 3),
      S("Hornea 30-35 minutos, hasta que esté dorada y un palillo salga limpio. Deja enfriar y espolvorea azúcar glas.", 33, 180),
    ],
  }),
  r({
    id: "churros-con-chocolate", title: "Churros con chocolate", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Sin churrera, una manga con boquilla rizada grande funciona. El aceite tiene que estar caliente pero no humeante.",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("harina", 250, "g"), I("sal", 3, "g"), I("aceite", 600, "ml"), I("chocolate", 200, "g"), I("leche", 500, "ml"), I("azucar", 50, "g")],
    steps: [
      S("Hierve 300 ml de agua con la sal. Fuera del fuego, añade la harina de golpe y remueve con fuerza hasta tener una masa lisa. Deja templar 10 minutos.", 12),
      S("Para el chocolate, calienta la leche con el azúcar, añade el chocolate troceado y cuece a fuego bajo 6 minutos removiendo, hasta que espese.", 6),
      S("Mete la masa en la manga y fríe tiras de 12 cm en el aceite a 180 °C, 2-3 minutos por tanda, hasta que estén doradas.", 10, 180),
      S("Escurre, espolvorea con azúcar si quieres y sirve con el chocolate caliente."),
    ],
  }),
  r({
    id: "magdalenas", title: "Magdalenas caseras", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "El truco del copete: dejar la masa reposar en la nevera y hornear fuerte los primeros minutos.",
    baseServings: 12, prepMin: 70, cookMin: 20, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("huevo", 3, "unit"), I("azucar", 150, "g"), I("aceite", 150, "ml"), I("leche", 60, "ml"), I("harina", 200, "g"), I("levadura-quimica", 8, "g"), I("limon", 1, "unit")],
    steps: [
      S("Bate los huevos con el azúcar 5 minutos hasta que doblen su volumen. Añade el aceite suave, la leche y la ralladura de limón.", 5),
      S("Incorpora la harina y la levadura tamizadas con movimientos suaves. Tapa y deja la masa 1 hora en la nevera.", 60),
      S("Precalienta el horno a 220 °C. Llena las cápsulas hasta tres cuartos y espolvorea un poco de azúcar por encima.", 10, 220),
      S("Hornea 5 minutos a 220 °C y baja a 190 °C otros 12 minutos, hasta que estén doradas.", 17, 190),
    ],
  }),
  r({
    id: "tarta-de-la-abuela", title: "Tarta de la abuela (galletas y chocolate)", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Capas de galleta mojada en leche, crema y chocolate. Mejor de un día para otro.",
    baseServings: 8, prepMin: 260, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("galletas", 300, "g"), I("leche", 800, "ml"), I("huevo", 3, "unit"), I("azucar", 120, "g"), I("harina", 40, "g"), I("chocolate", 150, "g"), I("mantequilla", 40, "g"), I("canela", 1, "g")],
    steps: [
      S("Para la crema, calienta 500 ml de leche con la canela. Bate las yemas con 100 g de azúcar y la harina, añade la leche caliente y cuece removiendo 5 minutos hasta que espese.", 7),
      S("Funde el chocolate con la mantequilla y 50 ml de leche a fuego muy suave, 3 minutos.", 3),
      S("Moja las galletas una a una en el resto de la leche con el azúcar restante y cubre el fondo de una fuente. Alterna capas de crema y galleta."),
      S("Termina con el chocolate y deja en la nevera al menos 4 horas.", 240),
    ],
  }),
  r({
    id: "peras-al-vino", title: "Peras al vino tinto", cuisine: "espanola", authenticity: "traditional",
    origin: "España (La Rioja)", note: "Elige peras firmes (conferencia): si están muy maduras se deshacen.",
    baseServings: 4, prepMin: 10, cookMin: 40, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pera", 4, "unit"), I("vino-tinto", 750, "ml"), I("azucar", 120, "g"), I("canela", 2, "g"), I("naranja", 1, "unit")],
    steps: [
      S("Pela las peras dejando el rabo y corta la base para que se sostengan de pie.", 5),
      S("Hierve el vino con el azúcar, la canela en rama y la piel de naranja. Mete las peras de pie, tapa y cuece a fuego suave 25 minutos, girándolas.", 25),
      S("Saca las peras y reduce el vino a fuego fuerte 12 minutos hasta que quede como un almíbar.", 12),
      S("Sirve las peras templadas o frías bañadas con la salsa."),
    ],
  }),
  r({
    id: "tocino-de-cielo", title: "Tocino de cielo", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Jerez de la Frontera)", note: "Nació para aprovechar las yemas que sobraban al clarificar el vino con claras.",
    baseServings: 6, prepMin: 135, cookMin: 40, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("huevo", 12, "unit"), I("azucar", 350, "g"), I("limon", 1, "unit")],
    steps: [
      S("Haz un caramelo con 100 g de azúcar y un chorrito de agua, 6 minutos hasta que esté dorado, y cubre el fondo de un molde.", 6),
      S("Cuece el resto del azúcar con 250 ml de agua y la piel de limón 5 minutos hasta tener almíbar ligero. Deja templar 10 minutos.", 15),
      S("Precalienta el horno a 170 °C. Mezcla las 12 yemas con el almíbar templado sin batir, para que no haga espuma, y cuela sobre el molde.", 10, 170),
      S("Tapa con papel de aluminio y hornea al baño maría 30 minutos, hasta que cuaje. Enfría 2 horas antes de desmoldar.", 30, 170),
    ],
  }),
  r({
    id: "brazo-gitano", title: "Brazo de gitano de nata", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Enrolla el bizcocho en caliente con un paño para que no se agriete.",
    baseServings: 8, prepMin: 30, cookMin: 10, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("huevo", 4, "unit"), I("azucar", 140, "g"), I("harina", 100, "g"), I("nata", 400, "ml"), I("cacao", 10, "g", true)],
    steps: [
      S("Precalienta el horno a 200 °C. Bate los huevos con 100 g de azúcar 8 minutos hasta que estén muy espumosos. Incorpora la harina tamizada con espátula.", 10, 200),
      S("Extiende la masa en una bandeja con papel, de 1 cm de grosor, y hornea 8 minutos.", 8, 200),
      S("Vuélcala sobre un paño húmedo espolvoreado con azúcar, retira el papel y enróllala con el paño. Deja enfriar.", 15),
      S("Monta la nata muy fría con el resto del azúcar. Desenrolla, cubre con nata, enrolla de nuevo y espolvorea cacao."),
    ],
  }),
  r({
    id: "bunuelos-de-viento", title: "Buñuelos de viento", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Típicos de Todos los Santos; se pueden rellenar de crema o nata.",
    baseServings: 6, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("leche", 125, "ml"), I("mantequilla", 50, "g"), I("harina", 125, "g"), I("huevo", 3, "unit"), I("limon", 1, "unit"), I("azucar", 60, "g"), I("aceite", 600, "ml"), I("sal", 1, "g")],
    steps: [
      S("Hierve la leche con 125 ml de agua, la mantequilla, la sal y la ralladura de limón. Añade la harina de golpe y remueve 2 minutos hasta que la masa se despegue.", 4),
      S("Deja templar 5 minutos y añade los huevos uno a uno, batiendo hasta que la masa brille.", 5),
      S("Fríe bolitas de masa con dos cucharas en el aceite a 170 °C, unos 5 minutos por tanda: se dan la vuelta solas y se inflan.", 15, 170),
      S("Escúrrelos y rebózalos en el azúcar."),
    ],
  }),
  r({
    id: "mousse-de-limon", title: "Mousse de limón", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Sin huevo y sin cocción: el ácido del limón espesa la leche condensada.",
    baseServings: 6, prepMin: 135, cookMin: 0, difficulty: "easy",
    ingredients: [I("leche-condensada", 370, "g"), I("nata", 400, "ml"), I("limon", 3, "unit")],
    steps: [
      S("Monta la nata muy fría hasta que forme picos suaves.", 5),
      S("Mezcla la leche condensada con el zumo de los limones y la ralladura de uno: verás que espesa al momento."),
      S("Incorpora la nata con movimientos envolventes, reparte en vasos y enfría 2 horas.", 120),
    ],
  }),
  r({
    id: "fresas-con-nata", title: "Fresas con nata", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 25, cookMin: 0, difficulty: "easy",
    ingredients: [I("fresas", 500, "g"), I("nata", 250, "ml"), I("azucar", 40, "g"), I("naranja", 1, "unit", true)],
    steps: [
      S("Lava las fresas, quítales el rabito y córtalas por la mitad. Mézclalas con la mitad del azúcar (y el zumo de naranja) y deja 20 minutos para que suelten jugo.", 20),
      S("Monta la nata muy fría con el resto del azúcar.", 4),
      S("Sirve las fresas con su jugo y la nata por encima."),
    ],
  }),
  r({
    id: "rosquillas", title: "Rosquillas fritas", cuisine: "espanola", authenticity: "adapted",
    origin: "España", note: "Muchas recetas llevan anís; aquí se aromatizan con limón.",
    baseServings: 8, prepMin: 50, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("huevo", 2, "unit"), I("azucar", 150, "g"), I("leche", 60, "ml"), I("aceite", 650, "ml"), I("harina", 400, "g"), I("levadura-quimica", 10, "g"), I("limon", 1, "unit")],
    steps: [
      S("Bate los huevos con 100 g de azúcar, la leche, 50 ml de aceite y la ralladura de limón.", 3),
      S("Añade la harina con la levadura poco a poco hasta tener una masa blanda que no se pegue. Reposa 30 minutos.", 30),
      S("Haz bolas, aplánalas y hazles un agujero en el centro con el dedo."),
      S("Fríelas en el aceite a 170 °C, 2 minutos por lado, en tandas. Escurre y reboza en el resto del azúcar.", 16, 170),
    ],
  }),
  r({
    id: "macedonia", title: "Macedonia de frutas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 45, cookMin: 0, difficulty: "easy",
    ingredients: [I("naranja", 3, "unit"), I("manzana", 1, "unit"), I("platano", 2, "unit"), I("mango", 1, "unit"), I("fresas", 250, "g"), I("limon", 0.5, "unit"), I("azucar", 20, "g")],
    steps: [
      S("Exprime 2 naranjas y mezcla el zumo con el de limón y el azúcar."),
      S("Pela y corta en dados la otra naranja, la manzana, el mango y las fresas; añade el plátano en rodajas al final para que no se oscurezca.", 10),
      S("Mézclalo todo con el zumo y enfría 30 minutos antes de servir.", 30),
    ],
  }),
  r({
    id: "leche-merengada", title: "Leche merengada", cuisine: "espanola", authenticity: "traditional",
    origin: "España", note: "Granizado de leche con canela; se remueve cada hora mientras se congela.",
    baseServings: 6, prepMin: 250, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("leche", 1000, "ml"), I("azucar", 150, "g"), I("limon", 1, "unit"), I("canela", 3, "g"), I("huevo", 2, "unit")],
    steps: [
      S("Hierve la leche con el azúcar, la piel de limón y la canela en rama 5 minutos. Deja enfriar e infusionar.", 5),
      S("Cuela la leche y congélala en un recipiente 3 horas, rascando con un tenedor cada hora.", 180),
      S("Monta las claras a punto de nieve e incorpóralas a la leche semicongelada. Sirve con canela molida."),
    ],
  }),
  r({
    id: "manzanas-asadas", title: "Manzanas asadas", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 10, cookMin: 40, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("manzana", 4, "unit"), I("azucar", 40, "g"), I("mantequilla", 30, "g"), I("canela", 2, "g"), I("vino-blanco", 100, "ml")],
    steps: [
      S("Precalienta el horno a 190 °C. Quita el corazón de las manzanas (reineta) sin atravesarlas y hazles un corte alrededor para que no revienten.", 10, 190),
      S("Rellena el hueco con el azúcar, la canela y la mantequilla. Ponlas en una fuente con el vino.", 2),
      S("Hornea 35-40 minutos, regándolas con el jugo, hasta que estén blandas y caramelizadas.", 38, 190),
    ],
  }),
  // ——— Europa ———
  r({
    id: "coulant-chocolate", title: "Coulant de chocolate", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia", note: "El tiempo de horno es la clave: el centro tiene que quedar líquido.",
    baseServings: 4, prepMin: 40, cookMin: 10, difficulty: "medium", equipment: ["horno", "microondas"],
    ingredients: [I("chocolate", 150, "g"), I("mantequilla", 100, "g"), I("huevo", 3, "unit"), I("azucar", 70, "g"), I("harina", 30, "g"), I("cacao", 10, "g")],
    steps: [
      S("Funde el chocolate con la mantequilla en el microondas en tandas de 30 segundos, removiendo.", 2),
      S("Bate los huevos con el azúcar hasta que blanqueen, añade el chocolate y la harina tamizada.", 3),
      S("Engrasa 4 flaneras y espolvoréalas con cacao. Rellénalas y enfría 30 minutos en la nevera.", 30),
      S("Precalienta el horno a 220 °C y hornea 8-9 minutos: los bordes cuajados y el centro tembloroso. Desmolda al momento.", 9, 220),
    ],
  }),
  r({
    id: "clafoutis-peras", title: "Clafoutis de pera", cuisine: "francesa", authenticity: "adapted",
    origin: "Francia (Lemosín)", note: "El clásico es de cerezas con hueso; con pera queda igual de bueno todo el año.",
    baseServings: 6, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pera", 3, "unit"), I("huevo", 3, "unit"), I("leche", 300, "ml"), I("harina", 70, "g"), I("azucar", 80, "g"), I("mantequilla", 20, "g")],
    steps: [
      S("Precalienta el horno a 180 °C y engrasa una fuente con la mantequilla. Coloca la pera pelada en gajos.", 10, 180),
      S("Bate los huevos con el azúcar, añade la harina y luego la leche hasta tener una masa como de crepes."),
      S("Vierte sobre la fruta y hornea 35-40 minutos, hasta que esté inflado y dorado. Sírvelo templado.", 38, 180),
    ],
  }),
  r({
    id: "trufas-chocolate", title: "Trufas de chocolate", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia (Chambéry)", baseServings: 6, prepMin: 140, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("chocolate", 200, "g"), I("nata", 125, "ml"), I("mantequilla", 20, "g"), I("cacao", 25, "g")],
    steps: [
      S("Calienta la nata hasta que empiece a hervir y viértela sobre el chocolate troceado. Espera 2 minutos y remueve hasta que esté liso. Añade la mantequilla.", 4),
      S("Enfría la ganache en la nevera 2 horas, hasta que se pueda moldear.", 120),
      S("Forma bolitas con una cucharilla y las manos frías y rebózalas en el cacao. Guárdalas en la nevera."),
    ],
  }),
  r({
    id: "tarta-zanahoria", title: "Tarta de zanahoria (carrot cake)", cuisine: "britanica", authenticity: "traditional",
    origin: "Reino Unido y EE. UU.", baseServings: 10, prepMin: 25, cookMin: 45, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("zanahoria", 300, "g"), I("harina", 250, "g"), I("azucar", 200, "g"), I("aceite", 200, "ml"), I("huevo", 3, "unit"), I("levadura-quimica", 10, "g"), I("canela", 4, "g"), I("nueces", 80, "g"), I("queso-crema", 300, "g"), I("mantequilla", 60, "g"), I("sal", 1, "g")],
    steps: [
      S("Precalienta el horno a 175 °C. Bate los huevos con 150 g de azúcar y el aceite. Añade la zanahoria rallada fina.", 10, 175),
      S("Incorpora la harina, la levadura, la canela, la sal y las nueces picadas. Vierte en un molde engrasado de 22 cm."),
      S("Hornea 45 minutos, hasta que un palillo salga limpio. Deja enfriar del todo.", 45, 175),
      S("Para la cobertura, bate el queso crema frío con la mantequilla blanda y el resto del azúcar (mejor glas). Cubre la tarta."),
    ],
  }),
  r({
    id: "banoffee", title: "Banoffee pie", cuisine: "britanica", authenticity: "traditional",
    origin: "Reino Unido (East Sussex, 1972)", note: "Banana + toffee: base de galleta, dulce de leche, plátano y nata.",
    baseServings: 8, prepMin: 80, cookMin: 0, difficulty: "easy", equipment: ["microondas"],
    ingredients: [I("galletas", 250, "g"), I("mantequilla", 110, "g"), I("dulce-de-leche", 400, "g"), I("platano", 3, "unit"), I("nata", 300, "ml"), I("cacao", 5, "g")],
    steps: [
      S("Machaca las galletas a mano en una bolsa y mézclalas con la mantequilla derretida en el microondas. Presiona en un molde y enfría 20 minutos.", 20),
      S("Extiende el dulce de leche sobre la base y cubre con el plátano en rodajas."),
      S("Monta la nata y cubre la tarta. Espolvorea cacao y enfría 1 hora antes de cortar.", 60),
    ],
  }),
  r({
    id: "shortbread", title: "Galletas de mantequilla (shortbread)", cuisine: "britanica", authenticity: "traditional",
    origin: "Escocia", note: "Solo tres ingredientes en proporción 1-2-3: azúcar, mantequilla y harina.",
    baseServings: 8, prepMin: 45, cookMin: 25, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("mantequilla", 200, "g"), I("azucar", 100, "g"), I("harina", 300, "g"), I("sal", 1, "g")],
    steps: [
      S("Bate la mantequilla blanda con el azúcar hasta que esté cremosa. Añade la harina y la sal y amasa lo justo.", 5),
      S("Estira la masa en un rectángulo de 1 cm, pínchala con un tenedor, córtala en barritas y enfría 30 minutos.", 30),
      S("Hornea a 160 °C 25 minutos: deben quedar pálidas, apenas doradas en los bordes.", 25, 160),
    ],
  }),
  r({
    id: "pudin-de-pan", title: "Pudin de pan y mantequilla", cuisine: "britanica", authenticity: "traditional",
    origin: "Reino Unido", note: "El pan del día anterior es mejor: absorbe la crema sin deshacerse.",
    baseServings: 6, prepMin: 40, cookMin: 40, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pan", 300, "g"), I("mantequilla", 50, "g"), I("leche", 400, "ml"), I("nata", 150, "ml"), I("huevo", 3, "unit"), I("azucar", 80, "g"), I("canela", 2, "g")],
    steps: [
      S("Corta el pan en rebanadas, úntalas con la mantequilla y colócalas solapadas en una fuente."),
      S("Bate los huevos con la leche, la nata, el azúcar y la canela. Viértelo sobre el pan y deja que empape 30 minutos.", 30),
      S("Hornea a 175 °C 40 minutos, hasta que la superficie esté dorada y crujiente y el centro cuajado.", 40, 175),
    ],
  }),
  r({
    id: "tarta-queso-fria", title: "Tarta de queso fría con fresas", cuisine: "estadounidense", authenticity: "adapted",
    origin: "EE. UU. (no-bake cheesecake)", baseServings: 8, prepMin: 260, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("galletas", 200, "g"), I("mantequilla", 90, "g"), I("queso-crema", 300, "g"), I("nata", 300, "ml"), I("azucar", 100, "g"), I("gelatina", 6, "unit"), I("fresas", 300, "g")],
    steps: [
      S("Machaca las galletas a mano y mézclalas con la mantequilla derretida. Presiona en un molde desmontable y enfría.", 10),
      S("Hidrata la gelatina en agua fría 5 minutos. Calienta 100 ml de nata con el azúcar, disuelve en ella la gelatina escurrida.", 5),
      S("Bate el queso crema con el resto de la nata y la mezcla caliente. Vierte sobre la base y enfría al menos 4 horas.", 240),
      S("Cubre con fresas en láminas justo antes de servir."),
    ],
  }),
  // ——— América ———
  r({
    id: "apple-pie", title: "Tarta de manzana americana (apple pie)", cuisine: "estadounidense", authenticity: "traditional",
    origin: "EE. UU.", baseServings: 8, prepMin: 60, cookMin: 50, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("harina", 330, "g"), I("mantequilla", 200, "g"), I("sal", 3, "g"), I("manzana", 6, "unit"), I("azucar", 120, "g"), I("canela", 4, "g"), I("limon", 1, "unit"), I("huevo", 1, "unit")],
    steps: [
      S("Para la masa, arena la harina con la mantequilla fría en dados y la sal, añade 90 ml de agua helada y junta sin amasar. Divide en dos y enfría 30 minutos.", 30),
      S("Pela las manzanas, córtalas en láminas y mézclalas con el azúcar, la canela, el zumo de limón y una cucharada de harina."),
      S("Precalienta el horno a 200 °C. Forra un molde con una masa, rellena y tapa con la otra. Sella los bordes, haz cortes y pinta con huevo.", 15, 200),
      S("Hornea 50 minutos, hasta que esté dorada y el jugo burbujee por los cortes. Deja enfriar 2 horas para que cuaje.", 50, 200),
    ],
  }),
  r({
    id: "key-lime-pie", title: "Tarta de lima (key lime pie)", cuisine: "estadounidense", authenticity: "traditional",
    origin: "EE. UU. (Cayos de Florida)", baseServings: 8, prepMin: 140, cookMin: 25, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("galletas", 200, "g"), I("mantequilla", 90, "g"), I("leche-condensada", 370, "g"), I("huevo", 3, "unit"), I("lima", 4, "unit"), I("nata", 200, "ml")],
    steps: [
      S("Precalienta el horno a 175 °C. Mezcla las galletas trituradas a mano con la mantequilla derretida, presiona en un molde y hornea 8 minutos.", 18, 175),
      S("Bate las 3 yemas con la leche condensada, el zumo de las limas y la ralladura de una."),
      S("Vierte sobre la base y hornea 15 minutos, hasta que cuaje. Enfría 2 horas en la nevera.", 15, 175),
      S("Sirve con nata montada."),
    ],
  }),
  r({
    id: "pumpkin-pie", title: "Tarta de calabaza (pumpkin pie)", cuisine: "estadounidense", authenticity: "traditional",
    origin: "EE. UU. (Acción de Gracias)", baseServings: 8, prepMin: 45, cookMin: 75, difficulty: "medium", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("calabaza", 600, "g"), I("leche-condensada", 370, "g"), I("huevo", 2, "unit"), I("canela", 4, "g"), I("jengibre", 5, "g"), I("harina", 200, "g"), I("mantequilla", 110, "g"), I("sal", 2, "g")],
    steps: [
      S("Cuece la calabaza en dados al vapor o en agua 15 minutos, escúrrela muy bien y tritúrala hasta tener un puré liso.", 15),
      S("Para la masa, arena la harina con la mantequilla fría y la sal, añade 50 ml de agua helada, junta y enfría 30 minutos. Estírala y forra un molde.", 30),
      S("Precalienta el horno a 210 °C. Mezcla 450 g de puré con la leche condensada, los huevos, la canela y el jengibre rallado.", 10, 210),
      S("Rellena y hornea 15 minutos a 210 °C y 40 minutos más a 175 °C, hasta que el centro apenas tiemble. Deja enfriar.", 55, 175),
    ],
  }),
  r({
    id: "mug-cake", title: "Bizcocho en taza al microondas (mug cake)", cuisine: "estadounidense", authenticity: "traditional",
    origin: "EE. UU.", note: "Un capricho en 5 minutos. Los microondas varían: empieza por 70 segundos.",
    baseServings: 1, prepMin: 3, cookMin: 2, difficulty: "easy", equipment: ["microondas"],
    ingredients: [I("harina", 40, "g"), I("cacao", 10, "g"), I("azucar", 30, "g"), I("levadura-quimica", 2, "g"), I("huevo", 1, "unit"), I("leche", 40, "ml"), I("aceite", 25, "ml"), I("chocolate", 15, "g", true)],
    steps: [
      S("En una taza grande, mezcla la harina, el cacao, el azúcar y la levadura con un tenedor."),
      S("Añade el huevo, la leche y el aceite y bate hasta que no queden grumos. Mete unas onzas de chocolate en el centro."),
      S("Cocina en el microondas a máxima potencia 70-90 segundos: debe subir y quedar algo húmedo arriba.", 2),
    ],
  }),
  r({
    id: "tres-leches", title: "Pastel de tres leches", cuisine: "mexicana", authenticity: "traditional",
    origin: "México y Centroamérica", baseServings: 10, prepMin: 200, cookMin: 30, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("huevo", 5, "unit"), I("azucar", 180, "g"), I("harina", 150, "g"), I("levadura-quimica", 6, "g"), I("leche", 350, "ml"), I("leche-condensada", 370, "g"), I("nata", 450, "ml"), I("canela", 2, "g")],
    steps: [
      S("Precalienta el horno a 180 °C. Bate los huevos con 150 g de azúcar hasta que tripliquen su volumen. Incorpora la harina con la levadura con espátula.", 15, 180),
      S("Hornea en una fuente engrasada 25-30 minutos. Deja templar y pincha toda la superficie con un tenedor.", 28, 180),
      S("Mezcla la leche, la leche condensada y 200 ml de nata y vierte sobre el bizcocho poco a poco. Enfría 3 horas.", 180),
      S("Cubre con el resto de la nata montada con el resto del azúcar y espolvorea canela."),
    ],
  }),
  r({
    id: "alfajores-maicena", title: "Alfajores de dulce de leche", cuisine: "argentina", authenticity: "adapted",
    origin: "Argentina y Uruguay", note: "Los de maicena llevan almidón de maíz; con harina normal quedan algo menos arenosos.",
    baseServings: 12, prepMin: 45, cookMin: 12, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("mantequilla", 100, "g"), I("azucar", 80, "g"), I("huevo", 3, "unit"), I("harina", 250, "g"), I("levadura-quimica", 6, "g"), I("limon", 1, "unit"), I("dulce-de-leche", 350, "g"), I("coco-rallado", 40, "g")],
    steps: [
      S("Bate la mantequilla con el azúcar, añade las 3 yemas y la ralladura de limón. Incorpora la harina con la levadura y junta la masa. Enfría 20 minutos.", 20),
      S("Precalienta el horno a 175 °C. Estira la masa a medio centímetro y corta discos de 5 cm.", 10, 175),
      S("Hornea 10-12 minutos: deben quedar blancos, sin dorarse. Deja enfriar.", 11, 175),
      S("Une los discos de dos en dos con dulce de leche y pasa el borde por el coco rallado."),
    ],
  }),
  r({
    id: "quesillo", title: "Quesillo venezolano", cuisine: "venezolana", authenticity: "traditional",
    origin: "Venezuela", note: "Primo del flan, con leche condensada y huevo entero: sale con agujeritos, como un queso.",
    baseServings: 8, prepMin: 135, cookMin: 60, difficulty: "easy", equipment: ["horno", "olla", "batidora"],
    ingredients: [I("huevo", 5, "unit"), I("leche-condensada", 370, "g"), I("leche", 370, "ml"), I("azucar", 120, "g")],
    steps: [
      S("Haz un caramelo con el azúcar y 2 cucharadas de agua, 7 minutos, y cubre el molde.", 7),
      S("Tritura los huevos con la leche condensada y la leche 1 minuto. Vierte sobre el caramelo.", 1),
      S("Tapa con papel de aluminio y hornea al baño maría a 180 °C 50 minutos, hasta que un palillo salga limpio.", 50, 180),
      S("Deja enfriar y luego 2 horas en la nevera. Desmolda pasando un cuchillo por el borde.", 120),
    ],
  }),
  // ——— Asia y Oceanía ———
  r({
    id: "kheer", title: "Kheer (arroz con leche indio)", cuisine: "india", authenticity: "adapted",
    origin: "India", note: "Se perfuma con cardamomo y azafrán; aquí con canela y almendras.",
    baseServings: 4, prepMin: 5, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("arroz-basmati", 80, "g"), I("leche", 1000, "ml"), I("azucar", 80, "g"), I("almendras", 30, "g"), I("canela", 1, "g")],
    steps: [
      S("Lava el arroz basmati y remójalo 20 minutos mientras hierves la leche con la canela.", 5),
      S("Añade el arroz escurrido y cuece a fuego muy bajo 35 minutos, removiendo a menudo para que no se pegue, hasta que espese.", 35),
      S("Añade el azúcar y las almendras laminadas y cuece 5 minutos más. Sirve templado o frío.", 5),
    ],
  }),
  r({
    id: "dorayaki", title: "Dorayaki", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "El relleno tradicional es anko (pasta de judía roja); aquí, dulce de leche.",
    baseServings: 6, prepMin: 40, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 2, "unit"), I("azucar", 70, "g"), I("miel", 20, "g"), I("harina", 130, "g"), I("levadura-quimica", 4, "g"), I("leche", 40, "ml"), I("aceite", 5, "ml"), I("dulce-de-leche", 250, "g")],
    steps: [
      S("Bate los huevos con el azúcar y la miel. Añade la harina con la levadura y la leche hasta tener una masa espesa. Reposa 30 minutos.", 30),
      S("Unta la sartén con aceite y retira el exceso con papel. A fuego medio-bajo, pon una cucharada de masa y cuece hasta que salgan burbujas, unos 2 minutos. Da la vuelta y 1 minuto más.", 18),
      S("Une las tortitas de dos en dos con dulce de leche en el centro."),
    ],
  }),
  r({
    id: "pavlova", title: "Pavlova con frutas", cuisine: "australiana", authenticity: "traditional",
    origin: "Australia y Nueva Zelanda", note: "Merengue crujiente por fuera y como malvavisco por dentro. Se enfría dentro del horno apagado.",
    baseServings: 8, prepMin: 140, cookMin: 60, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("huevo", 4, "unit"), I("azucar", 220, "g"), I("vinagre", 5, "ml"), I("harina", 8, "g"), I("nata", 300, "ml"), I("fresas", 250, "g"), I("mango", 1, "unit")],
    steps: [
      S("Precalienta el horno a 140 °C. Monta las 4 claras y añade 200 g de azúcar cucharada a cucharada hasta tener un merengue brillante. Añade el vinagre y la harina.", 15, 140),
      S("Forma un disco de 20 cm con borde alto sobre papel de horno.", 3),
      S("Hornea 60 minutos y apaga el horno: deja la pavlova dentro, con la puerta entreabierta, 2 horas.", 60, 140),
      S("Justo antes de servir, cubre con la nata montada con el resto del azúcar, las fresas y el mango en dados."),
    ],
  }),
  r({
    id: "yogur-miel-nueces", title: "Yogur griego con miel y nueces", cuisine: "griega", authenticity: "traditional",
    origin: "Grecia", baseServings: 2, prepMin: 5, cookMin: 2, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("yogur", 3, "unit"), I("miel", 40, "g"), I("nueces", 40, "g")],
    steps: [
      S("Tuesta las nueces en una sartén seca 2 minutos y pícalas gruesas.", 2),
      S("Reparte el yogur griego en cuencos, riega con la miel y termina con las nueces."),
    ],
  }),
  r({
    id: "helado-platano", title: "Helado de plátano y cacao (nice cream)", cuisine: "estadounidense", authenticity: "traditional",
    origin: "EE. UU.", note: "Un solo ingrediente de base: plátano maduro congelado.",
    baseServings: 2, prepMin: 245, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("platano", 4, "unit"), I("cacao", 10, "g"), I("leche", 40, "ml")],
    steps: [
      S("Pela los plátanos muy maduros, córtalos en rodajas y congélalos al menos 4 horas.", 240),
      S("Tritúralos con el cacao y un chorrito de leche, parando a rascar las paredes, hasta tener una crema lisa.", 3),
      S("Sírvelo al momento o congélalo 1 hora más si lo quieres más firme."),
    ],
  }),
];
