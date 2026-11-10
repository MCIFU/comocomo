import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «Cocina tailandesa» de Jacki Passmore (Könemann), segunda tanda. Pasos escritos de nuevo para Cómocomo. */
const KO = "Receta del libro «Cocina tailandesa» de Jacki Passmore (Könemann), adaptada.";
const PESCADO = "Si tienes salsa de pescado tailandesa (nam pla), úsala en lugar de parte de la soja.";

export const recipesLibroThai2: Recipe[] = [
  r({
    id: "ensalada-marisco-pepino-thai", title: "Ensalada tailandesa de marisco y pepino",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 25, cookMin: 8, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("calamares", 200, "g"), I("merluza", 200, "g"), I("gambas", 200, "g"), I("almejas", 300, "g"), I("pepino", 300, "g"), I("apio", 80, "g"), I("cebolla", 1, "unit"), I("chile", 1, "unit"), I("menta", 10, "g"), I("cebolleta", 1, "unit"), I("lima", 2, "unit"), I("soja", 30, "ml"), I("azucar", 5, "g"), I("ajo", 1, "unit"), I("lechuga", 1, "unit")],
    steps: [
      S("Escalda los calamares en anillas 30 segundos en agua con sal y zumo de lima; en la misma agua cuece el pescado blanco 2 minutos, las gambas 2 minutos y abre las almejas. Trocea el pescado y saca las almejas de la concha.", 8),
      S("Pela los pepinos, quítales las semillas y córtalos en tiras finas; corta el apio en diagonal.", 8),
      S("Mezcla el marisco con el pepino y el apio. Aparte, mezcla la cebolla, la guindilla (chile), la menta, la cebolleta y el ajo picados con el zumo de lima, la soja y el azúcar.", 6),
      S("Alíña la ensalada y sírvela sobre hojas de lechuga.", 2),
    ],
  }),
  r({
    id: "langostinos-ajo-salsa-picante", title: "Langostinos salteados con ajo y salsa picante",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("langostinos", 800, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("chile", 1, "unit"), I("aceite", 45, "ml"), I("tomate-triturado", 40, "g"), I("azucar", 10, "g"), I("soja", 30, "ml"), I("maicena", 5, "g"), I("albahaca", 5, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz. Pela los langostinos dejando la cola y quítales el intestino.", 16),
      S("Rehoga la cebolla en tiras, el ajo, el jengibre y la guindilla (chile) en el aceite hasta que se ablanden. Añade los langostinos y saltéalos hasta que cambien de color.", 5),
      S("Mezcla el tomate triturado con el azúcar, la soja, 3 cucharadas de agua y la maicena, viértelo en la sartén y remueva hasta que espese.", 2),
      S("Sirve con la albahaca y el arroz."),
    ],
  }),
  r({
    id: "curry-cremoso-langostinos", title: "Curry cremoso de langostinos con coco",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} El tamarindo se sustituye por zumo de lima. ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["batidora", "sarten", "olla"],
    ingredients: [I("langostinos", 800, "g"), I("cebolla", 1, "unit"), I("aceite", 30, "ml"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("chile", 1, "unit"), I("curry", 4, "g"), I("leche-coco", 400, "ml"), I("lima", 1, "unit"), I("soja", 20, "ml"), I("cilantro", 10, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz. Pela los langostinos dejando la cola, ábrelos por el lomo y quítales el intestino.", 16),
      S("Dora la cebolla picada en el aceite. Tritura con la batidora el ajo, el jengibre, la guindilla (chile), el curry y un poco de leche de coco hasta tener una pasta.", 8),
      S("Rehoga la pasta en la sartén 5 minutos, añade el resto de la leche de coco y el zumo de lima y cuece a fuego lento 5 minutos.", 10),
      S("Añade 50 ml de agua, los langostinos y la soja y cuece 3 minutos. Termina con cilantro y sirve con el arroz.", 4),
    ],
  }),
  r({
    id: "calamares-guindillas-thai", title: "Calamares salteados con guindillas",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 8, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("calamares", 600, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("chile", 3, "unit"), I("aceite", 45, "ml"), I("soja", 30, "ml"), I("vinagre", 15, "ml"), I("azucar", 15, "g"), I("maicena", 5, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz. Corta los calamares en cuadrados de 4 cm y hazles cortes en rejilla por dentro para que se rizen al cocinarlos.", 16),
      S("Sofríe la cebolla en tiras, el ajo y las guindillas (chile) sin semillas en el aceite hasta que estén tiernos.", 4),
      S("Añade los calamares y saltéalos a fuego fuerte hasta que se curven, 2 minutos.", 2),
      S("Mezcla la soja, el vinagre (mejor de arroz), el azúcar, 2 cucharadas de agua y la maicena, échalo y remueve hasta que espese. Sirve con arroz.", 2),
    ],
  }),
  r({
    id: "pescado-frito-salsa-jengibre", title: "Pescado entero frito con salsa de jengibre y setas",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} El libro usa dentón; vale dorada o lubina.`,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("lubina", 1000, "g"), I("harina", 40, "g"), I("maicena", 30, "g"), I("aceite", 400, "ml"), I("setas", 80, "g"), I("soja", 15, "ml"), I("azucar", 40, "g"), I("vinagre", 40, "ml"), I("jengibre", 30, "g"), I("chile", 1, "unit"), I("cebolleta", 1, "unit"), I("cilantro", 5, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz. Limpia el pescado y hazle cortes en cruz por ambos lados.", 16),
      S("Mezcla la harina con 20 g de maicena y agua fría hasta tener una pasta fina; cubre el pescado y fríelo en el aceite caliente, dándole la vuelta, hasta que se desmenuce con un tenedor.", 12),
      S("Para la salsa, cuece las setas en tiras finas con la soja, el azúcar, el vinagre, el jengibre en tiras y 60 ml de agua 4 minutos, y espesa con el resto de maicena disuelta en agua.", 6),
      S("Vierte la salsa sobre el pescado y adórnalo con la guindilla (chile), la cebolleta y el cilantro picados.", 2),
    ],
  }),
  r({
    id: "tallarines-tailandeses-gambas-pollo", title: "Tallarines de arroz tailandeses con gambas y pollo",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("fideos-arroz", 300, "g"), I("gambas", 200, "g"), I("pollo", 200, "g"), I("ajo", 2, "unit"), I("aceite", 45, "ml"), I("huevo", 2, "unit"), I("soja", 40, "ml"), I("tomate-triturado", 30, "g"), I("chile", 1, "unit"), I("azucar", 20, "g"), I("cebolleta", 2, "unit"), I("cacahuetes", 30, "g"), I("cilantro", 5, "g"), I("lima", 1, "unit")],
    steps: [
      S("Cuece los tallarines de arroz 5 minutos, escúrrelos y extiéndelos para que se sequen.", 8),
      S("Saltea las gambas, el pollo en dados y el ajo con la mitad del aceite hasta que el pollo esté blanco; retíralos. Haz una tortilla fina con el huevo, enróllala y córtala en tiras.", 8),
      S("Saltea los tallarines con el resto del aceite; añade las gambas y el pollo, la soja, el tomate, la guindilla (chile) y el azúcar y saltea hasta que esté todo caliente.", 5),
      S("Sirve con las tiras de tortilla, la cebolleta, los cacahuetes, el cilantro y gajos de lima.", 2),
    ],
  }),
  r({
    id: "curry-rojo-ternera-judias", title: "Curry rojo de ternera con judías verdes",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} Con pasta de curry rojo comprada se ahorra el majado. ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 600, "g"), I("pasta-curry-rojo", 50, "g"), I("leche-coco", 600, "ml"), I("aceite", 20, "ml"), I("chile", 1, "unit"), I("judias-verdes", 200, "g"), I("soja", 20, "ml"), I("cilantro", 5, "g"), I("pepino", 100, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz. Corta la ternera en tiras finas de unos 2 cm.", 16),
      S("Fríe la pasta de curry rojo en el aceite 3-4 minutos, añade la leche de coco y cuece a fuego moderado 20 minutos, hasta que el aceite suba a la superficie.", 24),
      S("Añade la ternera con la guindilla (chile) y las judías verdes troceadas y cuece a fuego lento hasta que estén tiernas, 8 minutos. Sazona con la soja.", 8),
      S("Sirve con el arroz, cilantro y pepino en tiras.", 2),
    ],
  }),
  r({
    id: "curry-pollo-cacahuete", title: "Curry de pollo con crema de cacahuete",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} ${PESCADO}`,
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 1400, "g"), I("leche-coco", 400, "ml"), I("chile", 2, "unit"), I("comino", 2, "g"), I("curry", 4, "g"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("azucar", 10, "g"), I("aceite", 30, "ml"), I("cacahuetes", 60, "g"), I("soja", 30, "ml"), I("lima", 2, "unit"), I("arroz", 280, "g")],
    steps: [
      S("Pon el pollo troceado en una cazuela con la leche de coco, 250 ml de agua y las guindillas (chile), lleva a ebullición, tapa y cuece a fuego lento 30 minutos.", 32),
      S("Tuesta el comino y el curry en una sartén seca y machácalos con el ajo, el azúcar y el jengibre hasta tener una pasta.", 6),
      S("Fríe la pasta en el aceite 2-3 minutos, añade el líquido del pollo y cuece hasta que se reduzca, 20 minutos. Añade los cacahuetes machacados (o crema de cacahuete) y el pollo y cuece 10 minutos más.", 30),
      S("Sazona con la soja y el zumo de lima y sirve con arroz.", 16),
    ],
  }),
  r({
    id: "ternera-ostras-setas-thai", title: "Ternera salteada con setas en salsa de soja",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} La salsa de ostras se sustituye por soja con un poco de azúcar. La carne se marina 1 hora.`,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 600, "g"), I("soja", 60, "ml"), I("azucar", 10, "g"), I("jengibre", 10, "g"), I("cebolla", 1, "unit"), I("aceite", 40, "ml"), I("setas", 200, "g"), I("caldo", 100, "ml"), I("maicena", 5, "g"), I("cebolleta", 2, "unit"), I("arroz", 280, "g")],
    steps: [
      S("Corta la ternera en tiras muy finas y marínala 1 hora con la mitad de la soja y el azúcar.", 8),
      S("Cuece el arroz. Fríe el jengibre picado y la cebolla en tiras en el aceite hasta que se ablanden; retíralos.", 16),
      S("Fríe la ternera por tandas a fuego vivo hasta que cambie de color; añade las setas laminadas y vuelve a echar la cebolla.", 5),
      S("Agrega el caldo con la maicena, el resto de la soja y la mitad de la cebolleta y deja que espese. Sirve con arroz y el resto de la cebolleta.", 3),
    ],
  }),
  r({
    id: "ternera-picante-maiz", title: "Ternera picante con mazorquitas de maíz",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} Las mazorquitas se sustituyen por maíz dulce. La carne se marina 1 hora.`,
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 500, "g"), I("azucar", 15, "g"), I("jengibre", 10, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("soja", 45, "ml"), I("aceite", 40, "ml"), I("cebolleta", 3, "unit"), I("maiz", 200, "g"), I("chile", 2, "unit"), I("maicena", 5, "g"), I("arroz", 280, "g")],
    steps: [
      S("Machaca el azúcar y mézclalo con la ternera en tiras finas, el jengibre, la cebolla y el ajo rallados y la mitad de la soja. Tapa y deja marinar 1 hora.", 8),
      S("Cuece el arroz. Saltea en el aceite las cebolletas en tiras, el maíz y las guindillas (chile) 1-2 minutos y retíralos.", 18),
      S("Fríe la ternera a fuego vivo hasta que se haga.", 4),
      S("Mezcla el resto de la soja con 100 ml de agua y la maicena, échalo con las verduras y cuece 1-2 minutos hasta que espese.", 2),
    ],
  }),
  r({
    id: "pollo-guindillas-albahaca", title: "Pollo frito con guindillas y albahaca",
    cuisine: "tailandesa", origin: "Tailandia", authenticity: "adapted", note: `${KO} Parecido al pad krapow, en dados. ${PESCADO}`,
    baseServings: 4, prepMin: 10, cookMin: 8, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 500, "g"), I("aceite", 30, "ml"), I("cebolleta", 2, "unit"), I("chile", 2, "unit"), I("soja", 45, "ml"), I("azucar", 20, "g"), I("albahaca", 20, "g"), I("arroz", 280, "g")],
    steps: [
      S("Cuece el arroz. Corta la pechuga de pollo en dados pequeños.", 16),
      S("Fríe el pollo en el aceite a fuego rápido hasta que se vuelva blanco.", 4),
      S("Añade las cebolletas y las guindillas (chile) picadas y saltea 1 minuto.", 1),
      S("Vierte la soja con el azúcar, remueve y añade la albahaca. Sirve con el arroz.", 2),
    ],
  }),
  r({
    id: "natillas-coco-thai", title: "Natillas de coco al horno",
    cuisine: "tailandesa", origin: "Tailandia (sangkhaya)", authenticity: "adapted", note: `${KO} Se sirven con mango y fruta tropical.`,
    baseServings: 6, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("azucar", 110, "g"), I("leche-coco", 400, "ml"), I("huevo", 6, "unit"), I("mantequilla", 30, "g"), I("mango", 2, "unit")],
    steps: [
      S("Disuelve el azúcar en la leche de coco al baño maría.", 5),
      S("Bate los huevos, pásalos por un colador y échalos en la leche de coco. Cuece removiendo a fuego suave hasta que la crema cubra el dorso de una cuchara, unos 8 minutos.", 10),
      S("Unta 6 moldes con la mantequilla derretida, reparte la crema y hornea al baño maría a 180 °C 30 minutos.", 30, 180),
      S("Gratínalas un momento para dorar la superficie y sírvelas con el mango en dados."),
    ],
  }),
];
