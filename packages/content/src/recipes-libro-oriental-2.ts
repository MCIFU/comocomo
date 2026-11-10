import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «101 Recetas Orientales», segunda tanda. Pasos escritos de nuevo para Cómocomo, con cantidades y tiempos completados. */
const RO = "Receta del recetario «101 Recetas Orientales», adaptada.";

export const recipesLibroOriental2: Recipe[] = [
  r({
    id: "salata-asuad", title: "Salata asuad (crema de berenjena frita y verduras)",
    cuisine: "oriente-medio", origin: "Oriente Medio", authenticity: "adapted", note: `${RO} Se toma fría con pan de pita.`,
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("berenjena", 600, "g"), I("zanahoria", 100, "g"), I("tomate", 400, "g"), I("cebolla", 0.25, "unit"), I("ajo", 3, "unit"), I("pimiento", 1, "unit"), I("pepino", 150, "g"), I("limon", 1, "unit"), I("comino", 4, "g"), I("aceite", 150, "ml"), I("sal", 5, "g"), I("pan-pita", 4, "unit", true)],
    steps: [
      S("Corta las berenjenas en rodajas y fríelas en tandas en el aceite hasta que estén doradas. Escúrrelas sobre papel y deja que se enfríen.", 15),
      S("Trocea la zanahoria, los tomates, la cebolla, el ajo, el pimiento y el pepino.", 8),
      S("Tritura todo con la batidora junto a la berenjena, el zumo de limón, el comino y la sal hasta tener una crema.", 4),
      S("Enfríala en la nevera y sírvela con pan de pita."),
    ],
  }),
  r({
    id: "kofte-rellenos-huevo", title: "Köfte rellenos de huevo duro",
    cuisine: "turca", origin: "Turquía", authenticity: "adapted", note: `${RO} Albóndigas de ternera y queso con un trozo de huevo cocido dentro.`,
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("ternera-picada", 500, "g"), I("huevo", 4, "unit"), I("queso", 50, "g"), I("cebolla", 1, "unit"), I("pan", 40, "g"), I("leche", 50, "ml"), I("aceite", 300, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece los huevos 10 minutos, enfríalos, pélalos y córtalos en cuartos.", 12),
      S("Mezcla la carne picada con la cebolla picada fina, el pan mojado en la leche, el queso rallado (mejor gruyère), sal y pimienta. Amasa bien.", 8),
      S("Coge un poco de masa, pon dentro un trozo de huevo y forma una albóndiga cerrada. Repite con el resto.", 10),
      S("Fríelas en el aceite caliente hasta que estén doradas y hechas por dentro, 6-8 minutos. Sírvelas con patatas fritas o ensalada.", 8),
    ],
  }),
  r({
    id: "pollo-shanghai", title: "Pollo Shanghai con champiñones y guisantes",
    cuisine: "china", origin: "China (versión casera)", authenticity: "adapted", note: RO,
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pollo", 1000, "g"), I("soja", 30, "ml"), I("vino-blanco", 30, "ml"), I("azucar", 3, "g"), I("jengibre", 10, "g"), I("champinones", 500, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 400, "g"), I("guisantes", 150, "g"), I("aceite", 50, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Adoba los muslos de pollo con la soja, el vino (mejor jerez), el azúcar, el jengibre rallado, sal y pimienta 15 minutos.", 15),
      S("Saltea los champiñones partidos por la mitad y la cebolla picada con el aceite y sal, 8 minutos. Resérvalos.", 8),
      S("En el aceite que queda dora el pollo con su adobo 10 minutos a fuego fuerte; baja el fuego, tapa y cuece 10 minutos más.", 20),
      S("Añade los champiñones, el tomate triturado y los guisantes y cuece 5 minutos.", 5),
    ],
  }),
  r({
    id: "pollo-asado-limon-tailandes", title: "Pollo asado con ajo y cúrcuma a la tailandesa",
    cuisine: "tailandesa", origin: "Tailandia (gai yang)", authenticity: "adapted", note: `${RO} La hierba limón se sustituye por ralladura de lima y limón; necesita 4 horas de adobo.`,
    baseServings: 4, prepMin: 15, cookMin: 60, difficulty: "easy", equipment: ["horno", "batidora"],
    ingredients: [I("pollo", 1600, "g"), I("ajo", 10, "unit"), I("lima", 1, "unit"), I("limon", 1, "unit"), I("curry", 4, "g"), I("sal", 12, "g"), I("pimienta", 2, "g"), I("aceite", 20, "ml")],
    steps: [
      S("Tritura con la batidora el ajo, la ralladura de la lima y del limón, el curry (en lugar de cúrcuma), la sal, la pimienta y el aceite hasta tener una pasta.", 5),
      S("Abre el pollo por la espalda, sécalo y úntalo bien con la pasta por todos lados. Tápalo y déjalo en la nevera 4 horas o toda la noche.", 10),
      S("Ásalo en el horno a 200 °C 55-60 minutos, con la piel hacia arriba, hasta que esté dorado y suelte jugos claros.", 58, 200),
      S("Sírvelo con el zumo de la lima y del limón por encima.", 2),
    ],
  }),
  r({
    id: "fideos-chinos-gambas", title: "Fideos chinos salteados con gambas y verduras",
    cuisine: "china", origin: "China", authenticity: "adapted", note: RO,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("fideos-arroz", 250, "g"), I("gambas", 300, "g"), I("repollo", 0.25, "unit"), I("apio", 80, "g"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("setas", 100, "g"), I("huevo", 1, "unit"), I("vino-blanco", 30, "ml"), I("soja", 30, "ml"), I("sesamo", 10, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Hidrata los fideos según el paquete y escúrrelos.", 10),
      S("Pica el apio, el repollo, la cebolleta, el ajo y el jengibre.", 8),
      S("Saltéalos en la sartén con el aceite 3 minutos, añade el huevo batido, las setas y las gambas peladas y saltea 3 minutos más.", 6),
      S("Incorpora los fideos con el vino, la soja y el sésamo y saltea 2 minutos.", 2),
    ],
  }),
  r({
    id: "tallarines-chinos-pollo", title: "Tallarines chinos con pollo en caldo",
    cuisine: "china", origin: "China", authenticity: "adapted", note: `${RO} Sin salsa de ostras, un poco más de soja da un sabor parecido.`,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pasta", 250, "g"), I("pollo", 400, "g"), I("pimiento", 1, "unit"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("soja", 45, "ml"), I("caldo", 500, "ml"), I("jengibre", 5, "g"), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta en tiras finas la pechuga de pollo y sálala con el jengibre rallado.", 5),
      S("Saltea en la sartén grande con el aceite la cebolla, el pimiento y el ajo en tiras 3 minutos; añade el pollo y sofríe 4 minutos.", 7),
      S("Agrega la soja y el caldo (de pollo), lleva a ebullición y sumerge los tallarines (mejor de huevo, chinos).", 2),
      S("Tapa y cuece 5-6 minutos, hasta que los tallarines estén hechos y absorban casi todo el caldo.", 6),
    ],
  }),
  r({
    id: "ternera-setas-cerveza-china", title: "Ternera marinada en cerveza y soja con setas",
    cuisine: "china", origin: "China (versión casera)", authenticity: "adapted", note: `${RO} La carne se marina al menos 2 horas.`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 500, "g"), I("setas", 300, "g"), I("cebolla", 1, "unit"), I("cerveza", 330, "ml"), I("soja", 90, "ml"), I("jengibre", 10, "g"), I("ajo", 2, "unit"), I("apio", 50, "g"), I("aceite", 30, "ml"), I("arroz", 280, "g")],
    steps: [
      S("Corta la ternera en tiras finas siguiendo la fibra, la cebolla en juliana y las setas en láminas.", 10),
      S("Ponlo todo en un recipiente con la cerveza, la soja, el jengibre rallado, el apio y el ajo picados. Tapa y deja marinar en la nevera al menos 2 horas.", 10),
      S("Cuece el arroz.", 16),
      S("Escurre la carne y las verduras y saltéalas en la sartén con el aceite a fuego fuerte 6-8 minutos; añade un poco de la marinada al final para que haga salsa. Sirve con el arroz.", 8),
    ],
  }),
  r({
    id: "cerdo-curry-verde", title: "Cerdo al curry verde tailandés con judías",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${RO} El libro usa lomo; sin tamarindo, el zumo de lima aporta el toque ácido.`,
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("cerdo", 500, "g"), I("pasta-curry-verde", 40, "g"), I("leche-coco", 400, "ml"), I("cebolla", 1, "unit"), I("judias-verdes", 200, "g"), I("soja", 30, "ml"), I("azucar", 15, "g"), I("lima", 1, "unit"), I("cacahuetes", 30, "g"), I("aceite", 30, "ml"), I("maicena", 5, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz (mejor jazmín).", 16),
      S("Saltea el lomo de cerdo en tiras en la sartén muy caliente con el aceite 3 minutos; añade el curry verde y sofríe 1 minuto.", 4),
      S("Incorpora la cebolla en juliana y las judías verdes troceadas, vierte la leche de coco con el azúcar y la soja y cuece 8 minutos.", 10),
      S("Espesa con la maicena disuelta en agua, termina con el zumo de lima y los cacahuetes machacados y sirve con el arroz.", 2),
    ],
  }),
  r({
    id: "peras-rellenas-vino", title: "Peras rellenas de pasas y piñones al vino",
    cuisine: "china", origin: "China (versión occidental)", authenticity: "adapted", note: `${RO} En el libro se bañan con jalea de grosella; aquí con frutos rojos.`,
    baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("pera", 4, "unit"), I("pasas", 60, "g"), I("pinones", 50, "g"), I("miel", 40, "g"), I("vino-blanco", 200, "ml"), I("frutos-rojos", 150, "g"), I("azucar", 40, "g"), I("mantequilla", 10, "g"), I("nata", 200, "ml", true)],
    steps: [
      S("Pela las peras, corta una rodaja en la base para que se sostengan y una tapa arriba; vacíales el corazón.", 10),
      S("Pica las pasas y los piñones, mézclalos con la miel y rellena las peras. Pon la tapa.", 6),
      S("Colócalas en una fuente untada con mantequilla con el vino, tapa con papel de aluminio y hornea a 175 °C 45 minutos.", 45, 175),
      S("Cuece el líquido de la fuente con los frutos rojos y el azúcar 5 minutos y baña las peras. Sírvelas templadas (con nata montada si quieres).", 5),
    ],
  }),
  r({
    id: "sopa-miso-almejas", title: "Sopa de miso con almejas",
    cuisine: "japonesa", origin: "Japón", authenticity: "traditional", note: RO,
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("almejas", 400, "g"), I("miso", 80, "g"), I("puerro", 0.5, "unit"), I("tofu", 100, "g", true)],
    steps: [
      S("Deja las almejas en agua con sal 1 hora para que suelten la arena.", 5),
      S("Ponlas en la olla con un litro de agua fría y calienta hasta que se abran.", 6),
      S("Baja el fuego, disuelve el miso en el caldo pasándolo por un colador (no debe hervir) y añade el puerro picado fino (y el tofu en dados).", 3),
    ],
  }),
  r({
    id: "ensalada-pepino-gambas", title: "Ensalada japonesa de pepino y gambas",
    cuisine: "japonesa", origin: "Japón (sunomono)", authenticity: "traditional", note: RO,
    baseServings: 4, prepMin: 20, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("gambas", 400, "g"), I("pepino", 400, "g"), I("vinagre", 30, "ml"), I("azucar", 15, "g"), I("soja", 15, "ml"), I("jengibre", 5, "g"), I("sesamo", 10, "g"), I("sal", 6, "g")],
    steps: [
      S("Pela el pepino, quítale las semillas y córtalo en rodajas finas. Sálalo 5 minutos, enjuágalo y sécalo.", 8),
      S("Cuece las gambas en agua con sal 2 minutos, pásalas a agua fría y pélalas dejando la cola.", 6),
      S("Mezcla el vinagre (mejor de arroz), el azúcar, la soja y el jengibre rallado hasta disolver el azúcar.", 2),
      S("Alíña el pepino y las gambas, deja reposar 15 minutos en la nevera y sirve con el sésamo.", 2),
    ],
  }),
  r({
    id: "setas-alino-cebolleta", title: "Setas marinadas con cebolleta y jengibre",
    cuisine: "japonesa", origin: "Japón", authenticity: "adapted", note: `${RO} Se comen crudas, marinadas; usa champiñones muy frescos.`,
    baseServings: 4, prepMin: 25, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("champinones", 500, "g"), I("cebolleta", 3, "unit"), I("jengibre", 15, "g"), I("vinagre", 60, "ml"), I("soja", 60, "ml"), I("vino-blanco", 30, "ml"), I("azucar", 10, "g")],
    steps: [
      S("Corta el jengibre en láminas muy finas y déjalo en agua helada.", 3),
      S("Limpia los champiñones (pequeños), quítales el tallo y mézclalos con la cebolleta en láminas finas.", 8),
      S("Mezcla el vinagre (mejor de arroz), la soja, el vino y el azúcar, viértelo sobre las setas y deja marinar 15 minutos.", 15),
      S("Escúrrelas, ponlas en una fuente y adorna con el jengibre escurrido."),
    ],
  }),
];
