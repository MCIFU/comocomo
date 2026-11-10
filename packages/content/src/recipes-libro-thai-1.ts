import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libros de cocina tailandesa: «Todos pueden cocinar Thai» (Embajada de Tailandia en México) y «Cocina tailandesa» de Jacki Passmore (Könemann).
 *  Pasos escritos de nuevo para Cómocomo. La salsa de pescado se sustituye por soja con un poco de anchoa o limón cuando hace falta. */
const TT = "Receta del recetario «Todos pueden cocinar Thai» (Embajada de Tailandia), adaptada.";
const KO = "Receta del libro «Cocina tailandesa» de Jacki Passmore (Könemann), adaptada.";
const PESCADO = "Si tienes salsa de pescado tailandesa (nam pla), úsala en lugar de la soja.";

export const recipesLibroThai1: Recipe[] = [
  r({
    id: "yam-woon-sen", title: "Yam woon sen (ensalada de fideos con pollo y gambas)",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${TT} ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("fideos-arroz", 120, "g"), I("pollo", 250, "g"), I("gambas", 200, "g"), I("chile", 1, "unit"), I("lima", 2, "unit"), I("soja", 40, "ml"), I("azucar", 15, "g"), I("cebolla", 1, "unit"), I("cilantro", 10, "g"), I("lechuga", 1, "unit"), I("aceite", 15, "ml"), I("pimienta", 1, "g")],
    steps: [
      S("Remoja los fideos 15 minutos, cuécelos 3-5 minutos hasta que estén transparentes, enjuágalos en agua fría y córtalos en trozos.", 20),
      S("Saltea la pechuga de pollo picada con el aceite, la pimienta y un poco de soja hasta que esté hecha. Cuece las gambas 2 minutos y pélalas.", 8),
      S("Mezcla la guindilla (chile) picada con el zumo de lima, el resto de la soja, el azúcar, la cebolla (morada) en juliana y el cilantro.", 5),
      S("Alíña los fideos, añade el pollo y las gambas y sírvelo sobre hojas de lechuga.", 3),
    ],
  }),
  r({
    id: "arroz-frito-pina", title: "Arroz frito con piña, gambas y jamón (khao pad sapparot)",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${TT} Se puede servir dentro de la propia piña vaciada.`,
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("arroz", 300, "g"), I("gambas", 200, "g"), I("jamon-cocido", 100, "g"), I("pina", 0.5, "unit"), I("cebolla", 0.5, "unit"), I("zanahoria", 80, "g"), I("ajo", 3, "unit"), I("soja", 20, "ml"), I("azucar", 10, "g"), I("aceite", 40, "ml"), I("cebolleta", 1, "unit"), I("cacahuetes", 30, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece el arroz (mejor jazmín) el día antes o con tiempo para que se enfríe y quede suelto.", 18),
      S("Dora el ajo picado en el aceite, añade las gambas peladas y el jamón cocido en dados y saltéalos hasta que estén hechos.", 5),
      S("Agrega la cebolla y la zanahoria en daditos y la piña en trozos y saltea 3 minutos.", 4),
      S("Incorpora el arroz, sazona con la soja, el azúcar y pimienta y saltea a fuego fuerte 3 minutos. Sirve con cebolleta y cacahuetes (o anacardos).", 4),
    ],
  }),
  r({
    id: "platanos-leche-coco", title: "Plátanos en leche de coco (kluay buat chi)",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "traditional", note: TT,
    baseServings: 4, prepMin: 5, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("platano", 4, "unit"), I("leche-coco", 600, "ml"), I("azucar", 100, "g"), I("sal", 1, "g")],
    steps: [
      S("Cuece los plátanos (algo verdes) enteros, con piel, en agua con sal 5-6 minutos hasta que la piel empiece a abrirse.", 7),
      S("Pélalos y córtalos a lo largo y luego por la mitad.", 3),
      S("Calienta la leche de coco con el azúcar y la sal hasta que hierva, añade los plátanos y cuece 2 minutos más. Sírvelos templados.", 5),
    ],
  }),
  r({
    id: "tostadas-cerdo-gambas", title: "Tostadas fritas de cerdo y gambas",
    cuisine: "tailandesa", origin: "Tailandia (khanom pang na mu)", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "medium", equipment: ["batidora", "sarten"],
    ingredients: [I("gambas", 150, "g"), I("cerdo", 150, "g"), I("cilantro", 10, "g"), I("ajo", 2, "unit"), I("soja", 15, "ml"), I("huevo", 1, "unit"), I("pan", 180, "g"), I("aceite", 300, "ml"), I("pimienta", 1, "g")],
    steps: [
      S("Tritura con la batidora las gambas peladas, el cerdo picado, el cilantro, el ajo, la soja, el huevo y la pimienta hasta tener una pasta.", 6),
      S("Unta la mezcla sobre 6 rebanadas de pan (blanco, del día anterior), quita la corteza y córtalas en triángulos.", 8),
      S("Fríelas en tandas con la pasta hacia abajo hasta que se doren, dales la vuelta y dóralas por el otro lado.", 15),
      S("Escúrrelas sobre papel y sírvelas calientes con salsa agridulce."),
    ],
  }),
  r({
    id: "tortitas-pescado-thai", title: "Tortitas de pescado tailandesas (tod man pla)",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} Las hojas de lima kaffir se sustituyen por ralladura de lima. ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "medium", equipment: ["batidora", "sarten"],
    ingredients: [I("merluza", 500, "g"), I("cebolla", 0.5, "unit"), I("jengibre", 10, "g"), I("cilantro", 10, "g"), I("ajo", 1, "unit"), I("chile", 1, "unit"), I("huevo", 1, "unit"), I("soja", 20, "ml"), I("lima", 1, "unit"), I("judias-verdes", 60, "g"), I("aceite", 300, "ml"), I("pepino", 150, "g"), I("vinagre", 20, "ml"), I("azucar", 10, "g")],
    steps: [
      S("Tritura con la batidora la cebolla, el jengibre, el cilantro, el ajo y la guindilla (chile). Añade el pescado blanco en dados, el huevo y la soja y tritura hasta tener una pasta fina.", 8),
      S("Mézclala con la ralladura de la lima y las judías verdes cortadas muy finas.", 4),
      S("Fríe cucharadas de la mezcla, aplastándolas un poco, en el aceite caliente hasta que se doren por los dos lados. Escúrrelas.", 12),
      S("Sírvelas con gajos de lima y una salsa de pepino en daditos con el vinagre y el azúcar.", 3),
    ],
  }),
  r({
    id: "bolitas-cerdo-cacahuete", title: "Bolitas de cerdo con salsa de cacahuete",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("cerdo", 500, "g"), I("cilantro", 10, "g"), I("ajo", 2, "unit"), I("soja", 40, "ml"), I("aceite", 200, "ml"), I("chile", 1, "unit"), I("jengibre", 5, "g"), I("cacahuetes", 50, "g"), I("azucar", 10, "g"), I("leche-coco", 120, "ml"), I("albahaca", 5, "g")],
    steps: [
      S("Mezcla la carne de cerdo picada con la mitad del cilantro, la mitad del ajo y la mitad de la soja; amasa bien y forma bolitas con las manos húmedas.", 10),
      S("Fríelas en el aceite caliente hasta que se doren, unos 5 minutos. Escúrrelas.", 8),
      S("En dos cucharadas de ese aceite rehoga el resto del ajo, la guindilla (chile) y el jengibre 1 minuto; añade los cacahuetes machacados, el resto de la soja, el azúcar y la leche de coco y cuece hasta que espese.", 5),
      S("Sirve las bolitas con palillos y la salsa en un cuenco, con albahaca picada por encima.", 2),
    ],
  }),
  r({
    id: "mee-krob", title: "Mee krob (fideos de arroz crujientes con pollo, gambas y tofu)",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 30, cookMin: 20, difficulty: "hard", equipment: ["sarten"],
    ingredients: [I("aceite", 300, "ml"), I("tofu", 150, "g"), I("pollo", 100, "g"), I("fideos-arroz", 200, "g"), I("gambas", 100, "g"), I("cebolleta", 2, "unit"), I("ajo", 1, "unit"), I("huevo", 2, "unit"), I("azucar", 50, "g"), I("lima", 2, "unit"), I("vinagre", 10, "ml"), I("soja", 30, "ml"), I("chile", 1, "unit")],
    steps: [
      S("Corta el tofu en tiras y fríelo en el aceite hasta que esté crujiente; retíralo. Fríe el pollo en dados y retíralo.", 8),
      S("Fríe los fideos secos en tandas pequeñas unos segundos, hasta que se hinchen y queden blancos y crujientes. Escúrrelos.", 6),
      S("Deja solo 2 cucharadas de aceite y saltea las gambas, la cebolleta y el ajo 2 minutos. Echa el huevo batido y, cuando cuaje, rómpelo con la espátula.", 4),
      S("Añade el azúcar, el zumo de lima, el vinagre, la soja y la guindilla y cuece hasta que caramelice; incorpora el tofu, el pollo y los fideos y mezcla con cuidado 1 minuto.", 3),
    ],
  }),
  r({
    id: "sopa-langostinos-calamar-thai", title: "Sopa picante de langostinos y calamar con hierba limón",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} La hierba limón y la lima kaffir se sustituyen por piel de lima y limón. ${PESCADO}`,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("caldo", 1200, "ml"), I("limon", 1, "unit"), I("lima", 1, "unit"), I("chile", 1, "unit"), I("langostinos", 300, "g"), I("calamares", 200, "g"), I("soja", 30, "ml"), I("cebolleta", 1, "unit"), I("cilantro", 10, "g")],
    steps: [
      S("Hierve el caldo (de pescado) con tiras de piel de limón y de lima, la lima en rodajas y la guindilla (chile) a fuego lento 6-7 minutos. Cuélalo.", 8),
      S("Pela los langostinos dejando la cola y quítales el intestino. Corta los calamares en anillas.", 6),
      S("Cuece los langostinos y los calamares en el caldo con la soja 3-4 minutos a fuego lento.", 4),
      S("Sirve con cebolleta y cilantro picados.", 1),
    ],
  }),
  r({
    id: "ensalada-pollo-menta-thai", title: "Ensalada tailandesa de pollo y menta",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 15, cookMin: 8, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 400, "g"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("chile", 1, "unit"), I("menta", 15, "g"), I("soja", 30, "ml"), I("limon", 1, "unit"), I("ajo", 1, "unit"), I("jengibre", 5, "g"), I("azucar", 5, "g")],
    steps: [
      S("Corta la pechuga de pollo en dados y saltéala en una sartén antiadherente sin aceite hasta que esté blanca. Deja que se temple.", 8),
      S("Corta las cebollas (rojas) en tiras finas, el pimiento (verde) en tiras y la guindilla (chile) en rodajas.", 6),
      S("Mezcla el pollo con las verduras y dos tercios de las hojas de menta.", 2),
      S("Remueve la soja con el zumo de limón, el ajo y el jengibre picados y el azúcar, alíña la ensalada y sírvela con el resto de la menta.", 2),
    ],
  }),
  r({
    id: "ensalada-cerdo-asado-cacahuete", title: "Ensalada de cerdo asado con gambas y cacahuetes",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} También se puede hacer con pollo asado o calamar. ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("solomillo-cerdo", 350, "g"), I("cacahuetes", 40, "g"), I("gambas", 200, "g"), I("zanahoria", 150, "g"), I("cebolla", 1.5, "unit"), I("cebolleta", 1, "unit"), I("cilantro", 10, "g"), I("menta", 5, "g"), I("perejil", 5, "g"), I("chile", 1, "unit"), I("soja", 30, "ml"), I("lima", 1, "unit"), I("azucar", 5, "g"), I("ajo", 4, "unit"), I("aceite", 30, "ml")],
    steps: [
      S("Asa el solomillo de cerdo en el horno a 200 °C 20 minutos, deja que repose y córtalo en tiras finas. Cuece las gambas 2 minutos y pélalas.", 25, 200),
      S("Mezcla el cerdo, las gambas, la zanahoria cortada en tiras finas, la cebolla (roja) en juliana y la cebolleta.", 6),
      S("Añade los cacahuetes machacados, el cilantro, la menta, el perejil y la guindilla (chile) picados y alíña con la soja, el zumo de lima y el azúcar.", 4),
      S("Fríe la cebolla y el ajo laminado restantes en el aceite hasta que estén crujientes y espárcelos por encima.", 5),
    ],
  }),
];
