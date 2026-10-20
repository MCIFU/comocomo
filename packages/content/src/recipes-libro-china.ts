import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «Recetas de China» (Kocinarte). Pasos escritos de nuevo para Cómocomo, con cantidades y tiempos completados. */
const KC = "Receta del recetario «Recetas de China» de Kocinarte, adaptada.";

export const recipesLibroChina: Recipe[] = [
  r({
    id: "almejas-guindilla-china", title: "Almejas salteadas con guindilla y jengibre",
    cuisine: "china", origin: "China", authenticity: "adapted", note: `${KC} El sake se puede cambiar por vino blanco.`,
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("almejas", 800, "g"), I("puerro", 0.5, "unit"), I("jengibre", 15, "g"), I("ajo", 1, "unit"), I("chile", 2, "unit"), I("soja", 30, "ml"), I("vinagre", 5, "ml"), I("azucar", 10, "g"), I("vino-blanco", 15, "ml"), I("maicena", 5, "g"), I("aceite", 30, "ml"), I("pimienta", 1, "g")],
    steps: [
      S("Deja las almejas en agua con sal 1 hora para que suelten la arena y escúrrelas.", 5),
      S("Pica el ajo, el jengibre, las guindillas (chile) y el puerro, y rehógalos en la sartén con el aceite 2 minutos.", 3),
      S("Añade 3 cucharadas de agua, el azúcar, la soja, el vinagre (mejor de arroz), el vino y pimienta; echa las almejas, tapa y cuece a fuego medio hasta que se abran, 5-7 minutos.", 7),
      S("Liga la salsa con la maicena disuelta en un poco de agua y remueve 1 minuto.", 1),
    ],
  }),
  r({
    id: "arroz-oriental-gambas-pepino", title: "Arroz oriental con gambas y pepino agridulce",
    cuisine: "china", origin: "China (versión casera española)", authenticity: "adapted", note: KC,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("arroz", 300, "g"), I("gambas", 250, "g"), I("pimiento", 2, "unit"), I("almendras", 30, "g"), I("mantequilla", 20, "g"), I("azafran", 0.1, "g"), I("pepino", 300, "g"), I("limon", 1, "unit"), I("azucar", 20, "g"), I("vinagre", 15, "ml"), I("chalota", 1, "unit"), I("aceite", 15, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz (largo) en abundante agua con sal y el azafrán 15 minutos; escúrrelo y aclara.", 16),
      S("Para el pepino, pélalo, quítale las semillas y córtalo en láminas finas; alíñalo con el zumo de limón, el azúcar, el vinagre, la chalota picada y pimienta.", 8),
      S("Pica muy fino uno de los pimientos (verdes) y corta el otro en tiras. Saltea las gambas peladas con el aceite, la mantequilla, el pimiento picado y las almendras laminadas hasta que estén calientes.", 5),
      S("Mezcla con el arroz, ajusta de sal y sirve con el pepino agridulce y las tiras de pimiento.", 2),
    ],
  }),
  r({
    id: "calamares-salsa-vinagre", title: "Calamares escaldados en salsa de vinagre y soja",
    cuisine: "china", origin: "China", authenticity: "adapted", note: `${KC} Se sirve caliente o frío.`,
    baseServings: 4, prepMin: 15, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("calamares", 600, "g"), I("jengibre", 10, "g"), I("aceite", 15, "ml"), I("vinagre", 30, "ml"), I("soja", 45, "ml"), I("azucar", 3, "g"), I("sesamo", 5, "g", true), I("cebolleta", 1, "unit", true)],
    steps: [
      S("Limpia los calamares y córtalos en trozos de unos 5 cm. Haz cortes en rejilla por la cara interior si quieres que se rizen.", 8),
      S("Mezcla en un cuenco el vinagre, la soja y el azúcar.", 2),
      S("Lleva a ebullición 2 litros de agua con el aceite y el jengibre en láminas; echa el calamar y cuécelo a fuego fuerte 2 minutos.", 4),
      S("Escúrrelo, ponlo en una fuente y riégalo con la salsa. Si quieres, añade sésamo y cebolleta picada.", 1),
    ],
  }),
  r({
    id: "empanadillas-gambas-vapor", title: "Empanadillas de gambas al vapor",
    cuisine: "china", origin: "China", authenticity: "adapted", note: `${KC} En el libro se llaman «ravioles con camarones»; se cuecen sobre hojas de col para que no se peguen.`,
    baseServings: 4, prepMin: 50, cookMin: 15, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("harina", 300, "g"), I("gambas", 400, "g"), I("ajo", 3, "unit"), I("curry", 2, "g"), I("vino-blanco", 20, "ml"), I("repollo", 0.25, "unit"), I("soja", 60, "ml"), I("sal", 5, "g")],
    steps: [
      S("Amasa la harina con 160 ml de agua templada y una pizca de sal hasta tener una masa lisa. Tápala y deja que repose 20 minutos.", 25),
      S("Pica las gambas peladas y mézclalas con el ajo picado, el curry, el vino (mejor jerez seco) y sal.", 8),
      S("Estira la masa muy fina, corta círculos del tamaño de un vaso, pon una cucharadita de relleno y ciérralos apretando el borde.", 15),
      S("Forra la rejilla de vapor con hojas de repollo, coloca encima las empanadillas y cuécelas tapadas 10 minutos. Sírvelas con la soja.", 10),
    ],
  }),
  r({
    id: "sopa-agripicante", title: "Sopa ácida china con cerdo, setas y tofu",
    cuisine: "china", origin: "China (Sichuan)", authenticity: "adapted", note: `${KC} El libro usa glutamato; aquí no hace falta.`,
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("cerdo", 150, "g"), I("setas", 100, "g"), I("tofu", 150, "g"), I("caldo", 900, "ml"), I("soja", 25, "ml"), I("vino-blanco", 30, "ml"), I("vinagre", 25, "ml"), I("maicena", 12, "g"), I("huevo", 1, "unit", true), I("cebolleta", 1, "unit"), I("pimienta", 1, "g"), I("sal", 2, "g")],
    steps: [
      S("Corta el cerdo, el tofu y las setas (mejor shiitake) en tiras finas y alargadas.", 8),
      S("Ponlos en la olla con el caldo (de pollo), lleva a ebullición y cuece a fuego suave 8 minutos.", 9),
      S("Añade la soja, el vino (mejor jerez), la pimienta, el vinagre y la maicena disuelta en un poco de agua, y cuece hasta que espese. Si quieres, echa el huevo batido en hilo removiendo.", 4),
      S("Ajusta de sal y sirve con cebolleta picada."),
    ],
  }),
  r({
    id: "ternera-china-manzana", title: "Ternera a la china con manzana, champiñones y arroz",
    cuisine: "china", origin: "China (versión casera española)", authenticity: "adapted", note: `${KC} Una versión casera, no tradicional china, que se sirve con salsa agridulce.`,
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 500, "g"), I("maicena", 15, "g"), I("champinones", 150, "g"), I("manzana", 2, "unit"), I("pimiento", 1, "unit"), I("arroz", 200, "g"), I("mantequilla", 30, "g"), I("soja", 30, "ml"), I("vinagre", 20, "ml"), I("azucar", 20, "g"), I("tomate-triturado", 60, "g"), I("aceite", 20, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz y escúrrelo.", 16),
      S("Corta la ternera en dados, salpimiéntala, pásala por la maicena y dórala con el aceite. Resérvala.", 8),
      S("Rehoga con la mantequilla el pimiento (rojo), los champiñones y las manzanas en tiras 6 minutos; vuelve a echar la carne, añade medio vaso de agua y cuece tapado 20 minutos.", 26),
      S("Mezcla la soja, el vinagre, el azúcar y el tomate triturado para la salsa agridulce, échala, incorpora el arroz y saltea 2 minutos.", 3),
    ],
  }),
];
