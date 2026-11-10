import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Sushi casero, a partir de los recetarios de sushi de la carpeta (Thermomix Lleida, Universidad Nacional de Salta,
 *  Amparo Muñoz y Ayuntamiento de Requena). Pasos escritos de nuevo para Cómocomo. */
const SU = "Receta basada en los recetarios de sushi casero (Thermomix Lleida, U. N. de Salta, Amparo Muñoz y Ayto. de Requena), adaptada.";
const CRUDO = "El pescado crudo debe haberse congelado antes al menos 5 días a −20 °C (o comprarse ya congelado para sushi) por el anisakis.";

/** Arroz de sushi para 4: 300 g de arroz, 45 ml de vinagre, 20 g de azúcar y 5 g de sal. */
const ARROZ = [I("arroz", 300, "g"), I("vinagre", 45, "ml"), I("azucar", 20, "g"), I("sal", 5, "g")];
const PASO_ARROZ = S("Lava el arroz (mejor de sushi o redondo) hasta que el agua salga clara, cuécelo tapado con 400 ml de agua 12 minutos a fuego mínimo y deja reposar 10 minutos. Mézclalo con el vinagre (de arroz), el azúcar y la sal disueltos y abanícalo hasta que se temple.", 30);

export const recipesLibroSushi: Recipe[] = [
  r({
    id: "nigiri-salmon", title: "Nigiri de salmón",
    cuisine: "japonesa", origin: "Japón", authenticity: "traditional", note: `${SU} ${CRUDO}`,
    baseServings: 4, prepMin: 45, cookMin: 15, difficulty: "medium", equipment: ["olla"],
    ingredients: [...ARROZ, I("salmon", 300, "g"), I("soja", 40, "ml"), I("jengibre", 10, "g", true)],
    steps: [
      PASO_ARROZ,
      S("Corta el salmón (previamente congelado) en láminas de unos 3 × 7 cm y medio centímetro de grosor, en diagonal a la fibra.", 10),
      S("Con las manos mojadas, forma bolitas alargadas de arroz de unos 25 g, apretando lo justo.", 12),
      S("Pon una lámina de salmón sobre cada bolita y presiona suavemente para que se adapte. Sirve con soja y jengibre en láminas si quieres.", 5),
    ],
  }),
  r({
    id: "nigiri-langostino", title: "Nigiri de langostino cocido",
    cuisine: "japonesa", origin: "Japón", authenticity: "adapted", note: `${SU} Sin pescado crudo.`,
    baseServings: 4, prepMin: 30, cookMin: 18, difficulty: "medium", equipment: ["olla"],
    ingredients: [...ARROZ, I("langostinos", 300, "g"), I("soja", 40, "ml")],
    steps: [
      PASO_ARROZ,
      S("Cuece los langostinos 2 minutos en agua hirviendo con sal, enfríalos en agua con hielo y pélalos dejando la cola. Ábrelos por la tripa en mariposa.", 8),
      S("Con las manos mojadas, forma bolitas alargadas de arroz de unos 25 g.", 12),
      S("Coloca un langostino abierto sobre cada bolita y presiona un poco. Sirve con soja.", 4),
    ],
  }),
  r({
    id: "hosomaki-pepino", title: "Hosomaki de pepino (kappamaki)",
    cuisine: "japonesa", origin: "Japón", authenticity: "traditional", note: `${SU} Vegetariano.`,
    baseServings: 4, prepMin: 45, cookMin: 15, difficulty: "medium", equipment: ["olla"],
    ingredients: [...ARROZ, I("nori", 3, "unit"), I("pepino", 250, "g"), I("sesamo", 10, "g"), I("soja", 40, "ml")],
    steps: [
      PASO_ARROZ,
      S("Corta el pepino a lo largo en bastones finos y quítale las semillas. Parte las hojas de nori por la mitad.", 6),
      S("Sobre la esterilla, extiende una capa fina de arroz en media hoja de nori, dejando 1,5 cm libre arriba; pon una tira de pepino y espolvorea sésamo.", 12),
      S("Enrolla apretando con la esterilla, moja el borde para cerrar y corta cada rollo en 6 piezas con un cuchillo mojado. Sirve con soja.", 10),
    ],
  }),
  r({
    id: "uramaki-california", title: "Uramaki California con langostinos, aguacate y pepino",
    cuisine: "japonesa", origin: "Estados Unidos (sushi californiano)", authenticity: "adapted", note: `${SU} El original lleva cangrejo o surimi; aquí, langostinos cocidos.`,
    baseServings: 4, prepMin: 40, cookMin: 18, difficulty: "medium", equipment: ["olla"],
    ingredients: [...ARROZ, I("nori", 3, "unit"), I("langostinos", 250, "g"), I("aguacate", 1, "unit"), I("pepino", 150, "g"), I("sesamo", 25, "g"), I("soja", 40, "ml")],
    steps: [
      PASO_ARROZ,
      S("Cuece los langostinos 2 minutos, pélalos y pártelos a lo largo. Corta el aguacate y el pepino en tiras.", 10),
      S("Cubre la esterilla con film, pon media hoja de nori, extiende arroz por encima y dale la vuelta, de modo que el arroz quede abajo.", 10),
      S("Coloca los langostinos, el aguacate y el pepino en fila sobre el nori, enrolla apretando y reboza el rollo en sésamo tostado. Corta en 8 piezas y sirve con soja.", 12),
    ],
  }),
  r({
    id: "temaki-salmon-aguacate", title: "Temaki (cono) de salmón y aguacate",
    cuisine: "japonesa", origin: "Japón", authenticity: "traditional", note: `${SU} ${CRUDO}`,
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [...ARROZ, I("nori", 4, "unit"), I("salmon", 250, "g"), I("aguacate", 1, "unit"), I("pepino", 100, "g"), I("sesamo", 10, "g"), I("soja", 40, "ml")],
    steps: [
      PASO_ARROZ,
      S("Corta el salmón (previamente congelado), el aguacate y el pepino en bastones.", 8),
      S("Parte las hojas de nori por la mitad. Pon una cucharada de arroz en la parte izquierda de cada media hoja y, encima, en diagonal, el salmón, el aguacate y el pepino.", 8),
      S("Enrolla en forma de cono desde la esquina, pega el borde con un grano de arroz y espolvorea sésamo. Cómelos al momento con soja.", 6),
    ],
  }),
  r({
    id: "chirashi-salmon", title: "Chirashi (cuenco de arroz de sushi con salmón y verduras)",
    cuisine: "japonesa", origin: "Japón", authenticity: "adapted", note: `${SU} El sushi más fácil: todo «esparcido» sobre el arroz. ${CRUDO}`,
    baseServings: 4, prepMin: 35, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [...ARROZ, I("salmon", 300, "g"), I("huevo", 2, "unit"), I("aguacate", 1, "unit"), I("pepino", 150, "g"), I("zanahoria", 100, "g"), I("nori", 1, "unit"), I("sesamo", 10, "g"), I("soja", 40, "ml"), I("aceite", 5, "ml")],
    steps: [
      PASO_ARROZ,
      S("Bate los huevos con una pizca de azúcar y haz una tortilla fina en la sartén con el aceite; córtala en tiras.", 5),
      S("Corta el salmón (previamente congelado) en dados, el aguacate en láminas, el pepino en medias lunas y ralla la zanahoria.", 10),
      S("Reparte el arroz en cuencos y esparce encima el salmón, la tortilla y las verduras. Termina con nori en tiras, sésamo y soja.", 5),
    ],
  }),
  r({
    id: "futomaki-tortilla-verduras", title: "Futomaki de tortilla y verduras",
    cuisine: "japonesa", origin: "Japón", authenticity: "adapted", note: `${SU} Rollo grueso, sin pescado crudo.`,
    baseServings: 4, prepMin: 40, cookMin: 20, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [...ARROZ, I("nori", 3, "unit"), I("huevo", 3, "unit"), I("zanahoria", 150, "g"), I("espinacas", 120, "g"), I("pepino", 120, "g"), I("aguacate", 1, "unit"), I("soja", 50, "ml"), I("aceite", 10, "ml")],
    steps: [
      PASO_ARROZ,
      S("Bate los huevos con una cucharada de soja y una pizca de azúcar y haz una tortilla gruesa en la sartén con el aceite; córtala en bastones.", 6),
      S("Corta la zanahoria en bastones y escáldala 2 minutos junto con las espinacas; escúrrelas bien. Corta el pepino y el aguacate en tiras.", 8),
      S("Extiende arroz sobre hojas enteras de nori, coloca una fila de cada relleno, enrolla apretando con la esterilla y corta cada rollo en 8 piezas.", 15),
    ],
  }),
  r({
    id: "sushi-de-frutas", title: "Sushi dulce de frutas con arroz con leche de coco",
    cuisine: "japonesa", origin: "Versión casera", authenticity: "adapted", note: `${SU} Postre: «sushi» de arroz dulce con fruta y coulis de fresa.`,
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("arroz", 200, "g"), I("leche-coco", 400, "ml"), I("leche", 100, "ml"), I("limon", 1, "unit"), I("azucar", 60, "g"), I("vainilla", 1, "unit", true), I("kiwi", 1, "unit"), I("fresas", 200, "g"), I("mango", 1, "unit"), I("coco-rallado", 15, "g")],
    steps: [
      S("Lleva a ebullición la leche de coco y la leche con la ralladura del limón (y la vainilla), añade el arroz y cuece a fuego suave 15-18 minutos, removiendo, hasta que esté tierno y espeso.", 18),
      S("Añade 40 g de azúcar, mezcla y deja que se enfríe del todo.", 5),
      S("Con las manos mojadas, forma bolitas alargadas de arroz y cubre cada una con una lámina de kiwi, mango o fresa. Espolvorea coco rallado.", 15),
      S("Para el coulis, tritura con la batidora la mitad de las fresas con el resto del azúcar y sírvelo al lado.", 3),
    ],
  }),
];
