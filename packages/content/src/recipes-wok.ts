import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/**
 * Lote wok. Reglas que comparten: todo cortado antes de encender, fuego máximo,
 * poca cantidad cada vez (si se amontona, cuece en vez de saltear). Sin wok, la
 * sartén más grande que tengas.
 */
export const recipesWok: Recipe[] = [
  r({
    id: "wok-verduras-tofu", title: "Wok de verduras y tofu", cuisine: "china", authenticity: "adapted",
    origin: "China (estilo casero)", note: "Seca bien el tofu con papel: si está húmedo, no se dora.",
    baseServings: 2, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("tofu", 250, "g"), I("brocoli", 0.5, "unit"), I("zanahoria", 100, "g"), I("pimiento", 1, "unit"), I("champinones", 150, "g"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("soja", 40, "ml"), I("harina", 10, "g"), I("sesamo", 5, "g"), I("arroz", 160, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Corta el tofu en dados, sécalo y rebózalo ligeramente en la harina.", 15),
      S("Calienta el wok con la mitad del aceite hasta que humee y dora el tofu 5 minutos, girándolo. Resérvalo.", 5),
      S("Con el resto del aceite, saltea la zanahoria en tiras y el brócoli en ramilletes pequeños 3 minutos; añade el pimiento y los champiñones laminados 2 minutos.", 5),
      S("Añade el ajo y el jengibre picados 30 segundos, devuelve el tofu, riega con la soja y saltea 1 minuto. Sirve con el arroz y sésamo.", 2),
    ],
  }),
  r({
    id: "wok-ternera-pimientos", title: "Wok de ternera con pimientos", cuisine: "china", authenticity: "adapted",
    origin: "China (estilo cantonés)", note: "Corta la carne en contra de la fibra y en tiras finas para que quede tierna en 2 minutos.",
    baseServings: 2, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 300, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("soja", 40, "ml"), I("azucar", 5, "g"), I("harina", 8, "g"), I("arroz", 160, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Mezcla la ternera en tiras con 10 ml de soja y la harina.", 15),
      S("Saltea la carne en el wok muy caliente con la mitad del aceite 2 minutos, sin moverla al principio. Resérvala.", 2),
      S("Saltea la cebolla en gajos y los pimientos en tiras con el resto del aceite 3 minutos: deben quedar algo crujientes.", 3),
      S("Añade el ajo y el jengibre 30 segundos, la carne, el resto de la soja y el azúcar, y saltea 1 minuto hasta que brille.", 2),
    ],
  }),
  r({
    id: "wok-gambas-ajo", title: "Wok de gambas al ajo con judías verdes", cuisine: "china", authenticity: "adapted",
    origin: "China", baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("gambas", 300, "g"), I("judias-verdes", 200, "g"), I("ajo", 4, "unit"), I("chile", 1, "unit"), I("soja", 25, "ml"), I("lima", 1, "unit"), I("arroz", 160, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Escalda las judías verdes en trozos 3 minutos y escúrrelas bien.", 15),
      S("Saltea las judías en el wok muy caliente con la mitad del aceite 3 minutos, hasta que tengan puntos tostados. Resérvalas.", 3),
      S("Saltea las gambas peladas con el resto del aceite 1 minuto por lado. Añade el ajo laminado y el chile 30 segundos sin que se queme el ajo.", 3),
      S("Devuelve las judías, añade la soja y saltea 1 minuto. Termina con zumo de lima.", 1),
    ],
  }),
  r({
    id: "wok-pollo-anacardos", title: "Wok de pollo con cacahuetes y verduras", cuisine: "china", authenticity: "adapted",
    origin: "China (versión de restaurante)", note: "La versión clásica lleva anacardos; con cacahuetes tostados es más económica.",
    baseServings: 2, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 350, "g"), I("cacahuetes", 60, "g"), I("calabacin", 200, "g"), I("pimiento", 1, "unit"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("soja", 40, "ml"), I("miel", 15, "g"), I("vinagre", 10, "ml"), I("harina", 8, "g"), I("arroz", 160, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Tuesta los cacahuetes en el wok seco 2 minutos y resérvalos. Mezcla el pollo en dados con la harina y 10 ml de soja.", 15),
      S("Saltea el pollo con la mitad del aceite a fuego máximo 4 minutos, hasta que esté dorado. Resérvalo.", 4),
      S("Saltea el calabacín y el pimiento en dados con el resto del aceite 3 minutos y añade el ajo y la cebolleta 30 segundos.", 4),
      S("Devuelve el pollo, añade el resto de la soja, la miel y el vinagre y saltea 1 minuto. Termina con los cacahuetes.", 1),
    ],
  }),
  r({
    id: "wok-cerdo-agridulce", title: "Wok de cerdo agridulce", cuisine: "china", authenticity: "adapted",
    origin: "China (Cantón)", note: "La salsa agridulce casera se hace con tomate, vinagre y azúcar; muchas versiones llevan piña.",
    baseServings: 3, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("cerdo", 400, "g"), I("huevo", 1, "unit"), I("harina", 60, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("tomate-triturado", 100, "g"), I("vinagre", 40, "ml"), I("azucar", 40, "g"), I("soja", 20, "ml"), I("arroz", 240, "g"), I("aceite", 200, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Corta el cerdo en dados, pásalo por el huevo batido y luego por 50 g de harina.", 15),
      S("Fríe el cerdo en el aceite del wok a 175 °C en dos tandas, 4 minutos cada una, hasta que esté crujiente. Escúrrelo y retira casi todo el aceite.", 8, 175),
      S("Saltea el pimiento y la cebolla en trozos 3 minutos. Añade el tomate, el vinagre, el azúcar, la soja y el resto de la harina disuelta en 80 ml de agua; cuece 1 minuto hasta que espese.", 4),
      S("Incorpora el cerdo, mezcla rápido para que se impregne y sirve enseguida, para que no pierda el crujiente."),
    ],
  }),
  r({
    id: "wok-fideos-verduras", title: "Wok de fideos con verduras y huevo", cuisine: "china", authenticity: "adapted",
    origin: "China (lo mein casero)", note: "Los fideos se cuecen un minuto menos que el paquete: terminan en el wok.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("fideos-ramen", 200, "g"), I("huevo", 2, "unit"), I("repollo", 0.25, "unit"), I("zanahoria", 100, "g"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("soja", 40, "ml"), I("azucar", 5, "g"), I("sesamo", 5, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece los fideos 1 minuto menos de lo que indica el paquete, escúrrelos y pásalos por agua fría.", 4),
      S("Cuaja los huevos batidos en el wok con un poco de aceite 1 minuto, en tortilla fina, y córtala en tiras.", 1),
      S("Saltea el repollo y la zanahoria en tiras finas con el resto del aceite 3 minutos. Añade el ajo y la cebolleta 30 segundos.", 4),
      S("Añade los fideos, la soja y el azúcar y saltea 2 minutos levantando con pinzas. Termina con el huevo y el sésamo.", 2),
    ],
  }),
  r({
    id: "wok-pollo-teriyaki", title: "Wok de pollo teriyaki con brócoli", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón (estilo occidental)", note: "Sake y mirin sustituidos por vino blanco y azúcar.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 350, "g"), I("brocoli", 0.5, "unit"), I("soja", 45, "ml"), I("azucar", 20, "g"), I("vino-blanco", 30, "ml"), I("jengibre", 8, "g"), I("sesamo", 5, "g"), I("arroz", 160, "g"), I("aceite", 20, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Mezcla la soja, el azúcar, el vino y el jengibre rallado para la salsa teriyaki.", 15),
      S("Saltea el pollo (mejor muslo) en dados en el wok muy caliente con el aceite 5 minutos, hasta que se dore.", 5),
      S("Añade el brócoli en ramilletes pequeños y 3 cucharadas de agua; tapa 2 minutos para que se haga al vapor.", 2),
      S("Destapa, añade la salsa y saltea 2 minutos hasta que reduzca y glasee. Sirve sobre el arroz con sésamo.", 2),
    ],
  }),
  r({
    id: "wok-pad-krapow", title: "Wok de pollo a la albahaca (pad krapow)", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia", note: "Lleva albahaca sagrada tailandesa y salsa de pescado; aquí, albahaca común y soja. Se sirve con huevo frito crujiente.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 350, "g"), I("albahaca", 20, "g"), I("ajo", 4, "unit"), I("chile", 2, "unit"), I("judias-verdes", 100, "g"), I("soja", 30, "ml"), I("azucar", 8, "g"), I("huevo", 2, "unit"), I("arroz", 160, "g"), I("aceite", 40, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Pica el pollo a cuchillo y machaca el ajo con el chile.", 15),
      S("Saltea el ajo y el chile en el wok con la mitad del aceite 30 segundos. Añade el pollo y saltéalo a fuego máximo 4 minutos, deshaciéndolo.", 5),
      S("Añade las judías verdes en trocitos, la soja, el azúcar y un chorrito de agua y saltea 2 minutos. Fuera del fuego, mezcla la albahaca.", 2),
      S("Fríe los huevos en el resto del aceite muy caliente hasta que tengan los bordes crujientes, 2 minutos. Sirve sobre el arroz.", 2),
    ],
  }),
];
