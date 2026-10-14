import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 24: últimos pescados y primeros postres. */
export const recipesArg24: Recipe[] = [
  es({
    id: "gallo-rebozado-rulos-calabacin", title: "Gallo rebozado en yema con rulos de calabacín rellenos",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("gallo", 800, "g"), I("calabacin", 250, "g"), I("huevo", 5, "unit"), I("ajo", 8, "unit"), I("queso-crema", 100, "g"), I("tomate", 100, "g"), I("albahaca", 4, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saca 8 tiras finas de calabacín con la mandolina y escáldalas 30 segundos en agua con sal. Sécalas.", 4),
      S("Mezcla el queso con el tomate pelado en daditos, la albahaca picada, sal y pimienta. Rellena las tiras de calabacín y enróllalas.", 8),
      S("Bate las 5 yemas con sal, pasa los filetes de gallo salados por ellas y fríelos por tandas con los ajos frescos (ajetes).", 8),
      S("Sirve con los rulos y perejil."),
    ],
  }),
  es({
    id: "rape-a-la-catalana", title: "Rape a la catalana con picada de almendras",
    origin: "España (Cataluña)",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("rape", 600, "g"), I("guisantes", 100, "g"), I("cebolleta", 2, "unit"), I("harina", 5, "g"), I("tomate-triturado", 120, "g"), I("caldo", 250, "ml"), I("laurel", 1, "unit"), I("ajo", 3, "unit"), I("almendras", 30, "g"), I("azafran", 0.1, "g"), I("aceite", 40, "ml"), I("sal", 5, "g")],
    steps: [
      S("Rehoga las cebolletas en dados, añade la harina, el laurel, el tomate y el caldo (de pescado) y reduce 5 minutos.", 12),
      S("Maja los ajos con las almendras tostadas y el azafrán y añádelo a la salsa.", 3),
      S("Añade los filetes de rape salados 2 minutos, dales la vuelta, agrega los guisantes cocidos y cuece 2 minutos más.", 4),
    ],
  }),
  es({
    id: "rape-vinagreta-pimenton", title: "Rape al pimentón en vinagreta de habas y pimientos",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("rape", 600, "g"), I("habas", 100, "g"), I("huevo", 1, "unit"), I("pimiento", 2, "unit"), I("cebolleta", 1, "unit"), I("esparragos-blancos", 150, "g"), I("pimenton", 8, "g"), I("vinagre", 30, "ml"), I("aceite", 90, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece las habas 10 minutos y el huevo 10 minutos; pica el huevo.", 10),
      S("Sala el lomo de rape, rebózalo en el pimentón, envuélvelo bien apretado en papel de aluminio y cuécelo en agua a fuego lento 6 minutos.", 8),
      S("Mezcla la cebolleta y los pimientos (verde y rojo pelado) en daditos con las habas, el huevo, aceite, vinagre y sal.", 5),
      S("Sirve el rape en rodajas con los espárragos y la vinagreta."),
    ],
  }),
  es({
    id: "bonito-mermelada-tomate", title: "Bonito a la plancha con mermelada de tomate y mayonesa de soja",
    note: "El original usa atún rojo.",
    baseServings: 4, prepMin: 15, cookMin: 65, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("bonito", 700, "g"), I("lechuga", 1, "unit"), I("tomate", 1000, "g"), I("azucar", 300, "g"), I("vainilla", 1, "unit"), I("huevo", 1, "unit"), I("soja", 15, "ml"), I("vinagre", 10, "ml"), I("aceite", 200, "ml"), I("sal", 4, "g")],
    steps: [
      S("Escalda los tomates 1 minuto, pélalos, pícalos y cuécelos con el azúcar y la vainilla a fuego suave 1 hora.", 62),
      S("Tritura el huevo con la soja y 150 ml de aceite hasta ligar.", 2),
      S("Sala el bonito en 4 trozos y dóralo en la sartén.", 4),
      S("Sirve con la lechuga aliñada con aceite, vinagre y sal, la mermelada y la mayonesa."),
    ],
  }),
  es({
    id: "salmon-esparragos-mayonesa-azafran", title: "Salmón a la plancha con espárragos y mayonesa de azafrán",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("salmon", 700, "g"), I("esparragos-blancos", 500, "g"), I("huevo", 1, "unit"), I("azafran", 0.1, "g"), I("vinagre", 5, "ml"), I("aceite", 220, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pela los espárragos y cuécelos en agua hirviendo con sal 10-15 minutos.", 14),
      S("Tuesta el azafrán sin aceite, májalo y tritúralo con el huevo, vinagre, sal y 200 ml de aceite.", 3),
      S("Salpimienta el salmón y hazlo brevemente a la plancha. Sirve con los espárragos, la mayonesa y perejil.", 4),
    ],
  }),
  es({
    id: "truchas-a-la-cazuela", title: "Truchas a la cazuela con patatas y azafrán",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("trucha", 1000, "g"), I("ajo", 3, "unit"), I("patata", 400, "g"), I("cebolla", 1, "unit"), I("vino-blanco", 200, "ml"), I("azafran", 0.1, "g"), I("laurel", 1, "unit"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Dora el ajo laminado y pásalo a una cazuela. Fríe en el mismo aceite las patatas en medias lunas y después la cebolla en dados, y añádelas a la cazuela con el azafrán y el laurel.", 20),
      S("Fríe las truchas en rodajas saladas y ponlas encima.", 5),
      S("Riega con el vino y cuece 5 minutos. Sirve con perejil.", 5),
    ],
  }),
  es({
    id: "caballa-asada-patatas", title: "Caballa asada sobre patatas con su salsa",
    note: "El original usa verdel.",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("caballa", 900, "g"), I("patata", 700, "g"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("caldo", 500, "ml"), I("maicena", 8, "g"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Pon las patatas en rodajas de medio centímetro en una fuente con la cebolleta, el pimiento verde y el ajo en juliana, sal, aceite y el caldo (de pescado). Hornea a 200 °C 35 minutos.", 35, 200),
      S("Saca el caldo, redúcelo y lígalo con la maicena.", 5),
      S("Pon los lomos de caballa salados sobre las patatas y hornea 6 minutos más. Sirve con la salsa y perejil.", 6, 200),
    ],
  }),
  es({
    id: "boquerones-en-vinagre", title: "Boquerones en vinagre con patatas chips",
    origin: "España",
    note: "Congela los boquerones limpios 48 horas antes de marinarlos (anisakis).",
    baseServings: 6, prepMin: 200, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("boquerones", 1000, "g"), I("patata", 400, "g"), I("aceitunas", 120, "g"), I("ajo", 3, "unit"), I("vinagre", 400, "ml"), I("aceite", 400, "ml"), I("perejil", 10, "g"), I("sal", 8, "g")],
    steps: [
      S("Limpia los boquerones en lomos y congélalos 48 horas. Descongélalos, sálalos y cúbrelos con el vinagre mezclado con 100 ml de agua 3 horas.", 180),
      S("Escúrrelos, cúbrelos con el ajo picado, aceite y perejil y deja macerar.", 10),
      S("Corta las patatas en láminas finas, lávalas, sécalas, fríelas y sálalas.", 10),
      S("Sirve con las aceitunas (rellenas) y las patatas."),
    ],
  }),
  es({
    id: "repapalos-bacalao", title: "Repápalos de bacalao en caldo especiado",
    origin: "España (Castilla-La Mancha)",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("bacalao", 260, "g"), I("huevo", 4, "unit"), I("cebolleta", 1, "unit"), I("ajo", 4, "unit"), I("pan-rallado", 130, "g"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("laurel", 2, "unit"), I("comino", 1, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 3, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Escalda las migas de bacalao desalado 1 minuto y guarda el agua.", 3),
      S("Pocha la cebolla, la zanahoria y 2 ajos picados con el laurel, añade el agua del bacalao, sal, el comino y la pimienta en grano.", 12),
      S("Bate los huevos con la cebolleta y los otros ajos picados, pimienta, el bacalao y el pan rallado. Forma bolitas con dos cucharas y fríelas.", 10),
      S("Cuécelas en el caldo 5 minutos y sirve con perejil.", 5),
    ],
  }),
  es({
    id: "poke-salmon", title: "Poke de salmón con arroz y verduras",
    cuisine: "estadounidense", origin: "Hawái (versión de Arguiñano)", authenticity: "adapted",
    note: "El original usa atún con huevas y alga wakame. Usa pescado que haya estado congelado al menos 5 días (anisakis).",
    baseServings: 4, prepMin: 40, cookMin: 18, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("salmon", 400, "g"), I("arroz", 300, "g"), I("cebolleta", 1, "unit"), I("rabanitos", 60, "g"), I("tomate-cherry", 150, "g"), I("pepino", 200, "g"), I("aguacate", 1, "unit"), I("soja", 60, "ml"), I("sesamo", 10, "g"), I("limon", 1, "unit"), I("vinagre", 60, "ml"), I("azucar", 25, "g"), I("cilantro", 5, "g"), I("aceite", 40, "ml"), I("sal", 3, "g")],
    steps: [
      S("Macera la cebolleta en rodajas con el zumo de limón 15 minutos. Macera los rabanitos en rodajas con el vinagre, el azúcar y sal 30 minutos.", 30),
      S("Mientras, marina el salmón en dados con la soja, aceite (mejor de sésamo) y la cebolleta. Cuece el arroz en agua con sal 18 minutos y escúrrelo."),
      S("Monta los cuencos con el arroz, el salmón, el pepino y el aguacate en láminas, los tomates partidos y los rabanitos.", 6),
      S("Espolvorea sésamo y cilantro."),
    ],
  }),
  es({
    id: "zarzuela-pescados-mariscos", title: "Zarzuela de pescados y mariscos",
    origin: "España (Cataluña)",
    baseServings: 4, prepMin: 25, cookMin: 20, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("rape", 300, "g"), I("merluza", 400, "g"), I("almejas", 250, "g"), I("langostinos", 200, "g"), I("calamares", 200, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("vino-blanco", 125, "ml"), I("tomate-triturado", 60, "g"), I("harina", 10, "g"), I("azafran", 0.1, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Rehoga el ajo y la cebolleta en daditos, añade el calamar en tiras y el rape en rodajas salados y saltéalos. Añade la harina.", 8),
      S("Incorpora los langostinos pelados, las almejas y la merluza en trozos salados. (El original añade salmonetes y carabineros.)", 3),
      S("Añade el tomate, el vino, 125 ml de agua, el azafrán y perejil y cocina 7 minutos moviendo la cazuela; añade agua si queda seco.", 8),
    ],
  }),
  es({
    id: "canutillos-hojaldre-yogur-frutas", title: "Canutillos de hojaldre con yogur y frutas",
    baseServings: 4, prepMin: 20, cookMin: 12, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("yogur", 2, "unit"), I("platano", 1, "unit"), I("kiwi", 1, "unit"), I("melocoton", 1, "unit"), I("huevo", 1, "unit"), I("azucar", 15, "g"), I("menta", 2, "g")],
    steps: [
      S("Corta el hojaldre en 8 tiras de 4-5 cm, enróllalas en moldes de canutillo (o conos de papel de aluminio), píntalas con huevo y espolvorea azúcar.", 8),
      S("Hornéalas a 200 °C 11 minutos y deja que se enfríen antes de desmoldar.", 11, 200),
      S("Rellena con el yogur y el plátano, el kiwi y el melocotón en daditos y decora con menta."),
    ],
  }),
  es({
    id: "saquitos-chocolate-frutos-secos", title: "Saquitos crujientes de chocolate, pistachos y dátiles",
    note: "Si no tienes dátiles, valen pasas u orejones.",
    baseServings: 4, prepMin: 15, cookMin: 8, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pasta-brick", 5, "unit"), I("chocolate", 140, "g"), I("pistachos", 50, "g"), I("pasas", 50, "g"), I("nata", 150, "ml"), I("aceite", 15, "ml"), I("menta", 2, "g")],
    steps: [
      S("Refuerza el centro de 4 hojas de brick con un triángulo de la quinta. Reparte el chocolate en trozos, los pistachos picados y las pasas (o dátiles) troceadas.", 8),
      S("Cierra los saquitos, átalos y hornéalos sobre la bandeja untada a 200 °C 8 minutos.", 8, 200),
      S("Sírvelos sobre la nata (el original usa helado de vainilla derretido) con chocolate rallado y menta."),
    ],
  }),
  es({
    id: "tarta-galletas-chocolate-blanco", title: "Tarta de galletas con mermelada y chocolate blanco",
    baseServings: 8, prepMin: 200, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("galletas", 300, "g"), I("leche", 150, "ml"), I("frutos-rojos", 200, "g"), I("azucar", 80, "g"), I("chocolate", 230, "g"), I("aceite", 15, "ml"), I("menta", 2, "g")],
    steps: [
      S("Cuece la mitad de los frutos rojos con el azúcar 10 minutos hasta tener una mermelada (o usa mermelada de fresa).", 10),
      S("Pon una capa de galletas en un molde, empápalas con leche y cubre con mermelada. Repite seis capas y termina con galletas.", 15),
      S("Funde 180 g de chocolate (blanco) al baño maría con el aceite y cubre la tarta. Enfría 3 horas.", 180),
      S("Desmolda, decora con hilos del resto del chocolate fundido, los frutos rojos y menta.", 3),
    ],
  }),
  es({
    id: "crepes-queso-naranja-nueces", title: "Crepes de queso fresco y naranja con miel y nueces",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["batidora", "sarten"],
    ingredients: [I("queso-fresco", 200, "g"), I("naranja", 1, "unit"), I("nueces", 40, "g"), I("harina", 150, "g"), I("huevo", 3, "unit"), I("leche", 250, "ml"), I("miel", 20, "g"), I("azucar", 5, "g"), I("mantequilla", 10, "g"), I("aceite", 60, "ml"), I("menta", 2, "g")],
    steps: [
      S("Tritura los huevos con la harina, una pizca de azúcar, la leche y un chorrito de aceite.", 3),
      S("Haz 8 crepes en una sartén con mantequilla.", 10),
      S("Rellena cada crepe con queso fresco y gajos de naranja, ciérralo y dóralo por los dos lados en la sartén con aceite.", 6),
      S("Sirve con la miel, las nueces picadas y menta."),
    ],
  }),
  es({
    id: "saquitos-peras-pasas", title: "Saquitos crujientes de pera y pasas",
    baseServings: 4, prepMin: 15, cookMin: 28, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("pera", 3, "unit"), I("pasta-brick", 4, "unit"), I("mantequilla", 20, "g"), I("pasas", 60, "g"), I("azucar", 10, "g"), I("frutos-rojos", 60, "g"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Cuece las peras peladas y troceadas sin agua con las pasas y una pizca de sal a fuego suave 18 minutos. Añade la mantequilla y deja enfriar.", 20),
      S("Reparte el relleno en el centro de las hojas de brick, ciérralas en saquitos y átalos.", 5),
      S("Hornéalos sobre papel a 190 °C 8 minutos, espolvorea azúcar (glas) y sirve con frutos rojos y menta.", 8, 190),
    ],
  }),
  es({
    id: "frutas-gratinadas-leche-condensada", title: "Frutas tropicales gratinadas con leche condensada",
    baseServings: 4, prepMin: 15, cookMin: 12, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("leche-condensada", 200, "g"), I("mango", 1, "unit"), I("pina", 0.5, "unit"), I("platano", 2, "unit"), I("kiwi", 2, "unit"), I("aceite", 15, "ml"), I("menta", 3, "g")],
    steps: [
      S("Pela el mango, la piña, los plátanos y los kiwis, córtalos en lonchas y hazlos a la plancha con un chorrito de aceite y una cucharadita de leche condensada.", 6),
      S("Extiéndelas en una fuente, cubre con el resto de la leche condensada y espolvorea menta picada.", 2),
      S("Gratina en el horno 4-5 minutos.", 5, 220),
    ],
  }),
];
