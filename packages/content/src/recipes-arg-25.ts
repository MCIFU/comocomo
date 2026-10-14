import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 25: postres. */
export const recipesArg25: Recipe[] = [
  es({
    id: "bollos-crema-azahar", title: "Bollos rellenos de crema pastelera al azahar",
    note: "El original usa bollos suizos y agua de azahar; puedes usar ralladura de naranja.",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("pan", 320, "g"), I("leche", 500, "ml"), I("vainilla", 1, "unit"), I("huevo", 4, "unit"), I("azucar", 225, "g"), I("maicena", 35, "g"), I("naranja", 1, "unit"), I("nata", 200, "ml"), I("frutos-rojos", 100, "g"), I("menta", 2, "g")],
    steps: [
      S("Disuelve 150 g de azúcar en 150 ml de agua caliente, deja enfriar y aromatiza con ralladura de naranja (o agua de azahar).", 5),
      S("Calienta 400 ml de leche con la vainilla abierta. Mezcla el resto del azúcar con la maicena, 100 ml de leche fría, 3 yemas y un huevo; añade la leche caliente y cuece a fuego suave removiendo hasta que espese. Enfría.", 12),
      S("Abre los bollos de pan (de leche o suizos), empápalos ligeramente con el almíbar y rellénalos con la crema.", 6),
      S("Monta la nata y sirve con los frutos rojos y menta.", 4),
    ],
  }),
  es({
    id: "frutas-sabayon-vino-dulce", title: "Frutas gratinadas con sabayón de vino dulce",
    baseServings: 4, prepMin: 15, cookMin: 5, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pina", 0.25, "unit"), I("naranja", 4, "unit"), I("frutos-rojos", 200, "g"), I("huevo", 4, "unit"), I("azucar", 125, "g"), I("vino-dulce", 100, "ml")],
    steps: [
      S("Monta las 4 yemas con el azúcar con las varillas y añade el vino dulce poco a poco sin dejar de batir.", 6),
      S("Pela las naranjas (el original añade mandarinas) en gajos y la piña en trozos, ponlas en una fuente con las frambuesas (frutos rojos) y cubre con el sabayón.", 6),
      S("Gratina en el horno 3-4 minutos.", 4, 220),
    ],
  }),
  es({
    id: "crepes-mousse-chocolate-cafe", title: "Crepes rellenos de mousse de chocolate y café",
    baseServings: 4, prepMin: 30, cookMin: 15, difficulty: "medium", equipment: ["batidora", "sarten", "olla"],
    ingredients: [I("huevo", 3, "unit"), I("harina", 150, "g"), I("mantequilla", 10, "g"), I("leche", 250, "ml"), I("aceite", 15, "ml"), I("leche-condensada", 150, "g"), I("nata", 300, "ml"), I("chocolate", 100, "g"), I("cafe", 3, "g"), I("cacao", 5, "g"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Tritura los huevos con la leche, la harina, el aceite y una pizca de sal y haz 8 crepes en la sartén con mantequilla.", 12),
      S("Funde el chocolate. Monta la nata y mézclala con el chocolate, el café soluble y 100 g de leche condensada. Enfría 15 minutos.", 18),
      S("Rellena los crepes, dóblalos y sírvelos con el resto de la leche condensada, cacao espolvoreado y menta."),
    ],
  }),
  es({
    id: "pastel-manzana-nueces", title: "Bizcocho de manzana y nueces",
    baseServings: 6, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("harina", 230, "g"), I("levadura-quimica", 10, "g"), I("azucar", 110, "g"), I("huevo", 3, "unit"), I("mantequilla", 130, "g"), I("manzana", 2, "unit"), I("nueces", 25, "g"), I("canela", 2, "g"), I("limon", 1, "unit"), I("frutos-rojos", 60, "g"), I("menta", 2, "g")],
    steps: [
      S("Unta un molde con mantequilla y enharínalo. Bate la harina con la levadura y 100 g de azúcar, añade los huevos y la mantequilla fundida.", 8),
      S("Incorpora las manzanas peladas y ralladas, las nueces picadas, la canela y la ralladura de limón.", 4),
      S("Hornea a 180 °C 25 minutos y deja enfriar antes de desmoldar.", 25, 180),
      S("Sirve espolvoreado con el resto del azúcar (glas), frutos rojos y menta."),
    ],
  }),
  es({
    id: "galletas-avena-pasas-compota", title: "Galletas de avena, pasas y nueces con compota de manzana",
    baseServings: 6, prepMin: 25, cookMin: 40, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("avena", 200, "g"), I("pasas", 80, "g"), I("nueces", 60, "g"), I("miel", 200, "g"), I("harina", 250, "g"), I("aceite", 150, "ml"), I("manzana", 2, "unit"), I("azucar", 15, "g"), I("canela", 1, "g"), I("menta", 2, "g")],
    steps: [
      S("Cuece las manzanas peladas en trozos con un vaso de agua, el azúcar y la canela tapadas 20 minutos y aplástalas.", 20),
      S("Mezcla el puré con las pasas, la avena, el aceite, la miel (el original usa melaza de arroz) y la harina (integral).", 5),
      S("Forma montoncitos sobre papel, pon nueces encima y hornea a 180 °C 20 minutos. Deja enfriar.", 20, 180),
      S("Sirve con azúcar glas y menta."),
    ],
  }),
  es({
    id: "vaso-mango-fresas-mascarpone", title: "Vasitos de mango, fresas y crema de mascarpone",
    baseServings: 4, prepMin: 25, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("fresas", 350, "g"), I("mango", 2, "unit"), I("azucar", 50, "g"), I("mascarpone", 250, "g"), I("queso-crema", 150, "g"), I("leche-condensada", 200, "g"), I("naranja", 0.5, "unit"), I("vainilla", 1, "unit"), I("menta", 2, "g")],
    steps: [
      S("Macera las fresas picadas con el azúcar.", 5),
      S("Tritura la mitad del mango con el zumo de media naranja (licor de naranja en el original) y mézclalo con el resto del mango en daditos.", 6),
      S("Bate el mascarpone y el queso crema con las semillas de la vainilla y la leche condensada.", 4),
      S("Monta los vasos con capas de fresas, crema y mango y decora con menta.", 5),
    ],
  }),
  es({
    id: "lenguas-gato-nata-frambuesa", title: "Lenguas de gato rellenas de nata y frambuesa",
    baseServings: 6, prepMin: 25, cookMin: 12, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("mantequilla", 125, "g"), I("azucar", 145, "g"), I("harina", 125, "g"), I("huevo", 1, "unit"), I("leche", 15, "ml"), I("canela", 3, "g"), I("frutos-rojos", 100, "g"), I("nata", 300, "ml"), I("menta", 2, "g")],
    steps: [
      S("Bate la mantequilla en pomada con 125 g de azúcar (glas), la leche, el huevo y la canela; añade la harina tamizada.", 8),
      S("Con una manga, forma tiras alargadas sobre papel y hornéalas a 200 °C 11 minutos.", 11, 200),
      S("Aplasta los frutos rojos (frambuesas) con el resto del azúcar y mézclalos con la nata montada.", 6),
      S("Une las lenguas de dos en dos con la nata y decora con menta."),
    ],
  }),
  es({
    id: "tartitas-verano-melocoton", title: "Tartitas de galleta y mascarpone con melocotón flambeado",
    baseServings: 4, prepMin: 15, cookMin: 8, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("galletas", 150, "g"), I("melocoton", 3, "unit"), I("mascarpone", 125, "g"), I("azucar", 15, "g"), I("ron", 50, "ml"), I("canela", 1, "g"), I("aceite", 10, "ml"), I("menta", 2, "g")],
    steps: [
      S("Machaca las galletas y mézclalas con el mascarpone y la canela. Extiende la mezcla en 4 moldes y gratínalos en el horno 3 minutos.", 6, 220),
      S("Saltea el melocotón pelado en gajos con un poco de aceite y el azúcar (moreno) y flambea con el ron (vodka en el original).", 4),
      S("Coloca el melocotón sobre las bases y decora con menta (el original añade una bola de helado)."),
    ],
  }),
  es({
    id: "brochetas-frutas-anis-menta", title: "Brochetas de fruta a la plancha con aceite de menta",
    baseServings: 4, prepMin: 15, cookMin: 5, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pina", 1, "unit"), I("kiwi", 2, "unit"), I("fresas", 250, "g"), I("canela", 1, "g"), I("aceite", 40, "ml"), I("menta", 5, "g")],
    steps: [
      S("Pela el kiwi y la piña y córtalos en trozos de bocado; ensártalos en palos de brocheta con las fresas.", 10),
      S("Mezcla la menta picada con la canela (anís en polvo en el original) y aceite.", 2),
      S("Haz las brochetas en la plancha o barbacoa, pintándolas con la mezcla, 3 minutos. (El original las sirve con helado de limón.)", 3),
    ],
  }),
  es({
    id: "brochetas-melon-salsa-caramelo", title: "Brochetas de melón con crema de caramelo y yogur",
    baseServings: 4, prepMin: 15, cookMin: 8, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("melon", 1, "unit"), I("azucar", 50, "g"), I("nata", 200, "ml"), I("yogur", 1, "unit"), I("menta", 2, "g")],
    steps: [
      S("Saca bolitas de melón (si puedes, de dos variedades) y ensártalas en brochetas.", 8),
      S("Carameliza el azúcar en un cazo, añade la nata y remueve hasta integrar. Deja templar.", 6),
      S("Mezcla el yogur con el caramelo, repártelo en platos y coloca encima las brochetas con menta."),
    ],
  }),
  es({
    id: "crepes-chocolate-platano", title: "Crepes de plátano caramelizado y chocolate",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["batidora", "sarten"],
    ingredients: [I("platano", 4, "unit"), I("huevo", 3, "unit"), I("harina", 150, "g"), I("leche", 250, "ml"), I("azucar", 15, "g"), I("aceite", 15, "ml"), I("vainilla", 0.5, "unit"), I("chocolate", 60, "g"), I("mantequilla", 25, "g"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Tritura los huevos con la harina, la leche, la mitad del azúcar, sal, el aceite y las semillas de vainilla. Haz los crepes en la sartén con mantequilla.", 12),
      S("Dora los plátanos en trozos con una cucharada de mantequilla y el resto del azúcar.", 5),
      S("Funde el chocolate (o usa sirope) y unta los crepes; rellénalos con el plátano, dóblalos y decora con menta.", 3),
    ],
  }),
  es({
    id: "manzanas-cocidas-yogur-miel", title: "Manzanas cocidas al ron con yogur, miel y chocolate",
    baseServings: 4, prepMin: 10, cookMin: 40, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("manzana", 4, "unit"), I("yogur", 2, "unit"), I("miel", 40, "g"), I("azucar", 30, "g"), I("almendras", 50, "g"), I("chocolate", 50, "g"), I("ron", 100, "ml"), I("azafran", 0.1, "g"), I("menta", 2, "g")],
    steps: [
      S("Pela las manzanas dejándoles el rabito y cuécelas tapadas con el ron, el azúcar, el azafrán y agua hasta la mitad, a fuego mínimo 35 minutos.", 35),
      S("Mezcla los yogures con la miel y el chocolate en virutas.", 3),
      S("Tuesta las almendras picadas. Sirve las manzanas sobre el yogur con las almendras y menta.", 3),
    ],
  }),
  es({
    id: "vasitos-yogur-mango-platano", title: "Vasitos de yogur con mango, plátano y piñones",
    baseServings: 6, prepMin: 20, cookMin: 3, difficulty: "easy", equipment: ["batidora", "sarten"],
    ingredients: [I("yogur", 4, "unit"), I("mango", 1, "unit"), I("platano", 1, "unit"), I("bizcochos", 60, "g"), I("miel", 40, "g"), I("pasas", 25, "g"), I("pinones", 30, "g"), I("lima", 1, "unit"), I("menta", 2, "g")],
    steps: [
      S("Hidrata las pasas en té o agua caliente y escúrrelas. Tuesta los piñones.", 5),
      S("Tritura los yogures con la miel, el plátano, la mitad del mango y la ralladura de lima.", 3),
      S("Mezcla el resto del mango y los bizcochos (o magdalenas) en taquitos con las pasas, repártelo en vasos y cubre con la crema. Termina con los piñones y menta.", 5),
    ],
  }),
  es({
    id: "galletas-cereales-pinones", title: "Galletas de copos de cereales y piñones",
    baseServings: 6, prepMin: 15, cookMin: 22, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("avena", 200, "g"), I("mantequilla", 125, "g"), I("azucar", 120, "g"), I("levadura-quimica", 11, "g"), I("pinones", 50, "g"), I("huevo", 1, "unit"), I("limon", 1, "unit")],
    steps: [
      S("Bate el huevo con el azúcar (moreno), la levadura, los copos de cereales (avena) y la ralladura de limón.", 5),
      S("Añade la mantequilla fundida y los piñones.", 3),
      S("Reparte en porciones pequeñas en moldes o sobre papel y hornea a 180 °C 22 minutos. Deja enfriar.", 22, 180),
    ],
  }),
  es({
    id: "carpaccio-naranja-fresa", title: "Carpaccio de naranja y fresas con vinagreta de canela",
    baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy", equipment: [],
    ingredients: [I("naranja", 2.5, "unit"), I("fresas", 120, "g"), I("vinagre", 5, "ml"), I("aceite", 20, "ml"), I("canela", 1, "g"), I("azucar", 10, "g"), I("menta", 2, "g")],
    steps: [
      S("Mezcla el azúcar (moreno) con el zumo de media naranja, unas gotas de vinagre, un chorro de aceite y canela.", 3),
      S("Pela las naranjas a vivo, córtalas en rodajas finas y extiéndelas dejando un hueco en el centro; pon allí las fresas laminadas.", 10),
      S("Riega con la salsa, espolvorea canela y decora con menta."),
    ],
  }),
  es({
    id: "tarta-avellana-chocolate", title: "Tarta de avellanas con pepitas de chocolate",
    baseServings: 6, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["batidora", "horno"],
    ingredients: [I("harina", 200, "g"), I("mantequilla", 150, "g"), I("azucar", 100, "g"), I("avellanas", 180, "g"), I("vino-blanco", 100, "ml"), I("chocolate", 50, "g"), I("sal", 1, "g")],
    steps: [
      S("Tritura 150 g de avellanas. Amasa la harina con ellas, el azúcar, 100 g de mantequilla blanda, el vino y una pizca de sal (el original añade aroma de anís).", 8),
      S("Añade el chocolate en pepitas o trocitos.", 2),
      S("Unta un molde con el resto de mantequilla, forma unas 18 bolas de masa y colócalas con una avellana entera entre cada una.", 6),
      S("Hornea a 180 °C 30 minutos.", 30, 180),
    ],
  }),
  es({
    id: "galletas-almendra-fresas", title: "Galletas finas de almendra con fresas asadas",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("fresas", 200, "g"), I("harina", 50, "g"), I("almendras", 50, "g"), I("azucar", 100, "g"), I("mantequilla", 100, "g"), I("huevo", 3, "unit"), I("menta", 2, "g")],
    steps: [
      S("Mezcla la harina con la almendra molida y el azúcar; añade la mantequilla derretida y las 3 claras.", 5),
      S("Extiende 4 discos de masa sobre papel y reparte encima las fresas partidas por la mitad.", 5),
      S("Hornea a 220 °C 9 minutos, deja enfriar y sirve con menta (el original añade helado de dulce de leche).", 9, 220),
    ],
  }),
  es({
    id: "pina-salteada-merengue-lima", title: "Piña salteada al ron con merengue de lima",
    baseServings: 6, prepMin: 25, cookMin: 10, difficulty: "medium", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("pina", 1, "unit"), I("huevo", 2, "unit"), I("ron", 100, "ml"), I("lima", 1, "unit"), I("azucar", 175, "g"), I("mantequilla", 20, "g")],
    steps: [
      S("Parte la piña por la mitad, vacíala, quita el centro duro y saltea los trozos con la mantequilla. Devuélvelos a la piña.", 8),
      S("Haz un almíbar con 50 g de azúcar y 50 ml de agua, enfríalo, añade el ron y riega la piña.", 6),
      S("Monta las 2 claras con la ralladura de lima, añadiendo poco a poco 100 g de azúcar, hasta que estén firmes.", 6),
      S("Cubre la piña con el merengue, espolvorea el resto del azúcar y dóralo con el gratinador del horno 2 minutos.", 2, 230),
    ],
  }),
  es({
    id: "semifrio-melon", title: "Semifrío de melón con sandía y almendra",
    baseServings: 6, prepMin: 200, cookMin: 5, difficulty: "easy", equipment: ["batidora", "olla"],
    ingredients: [I("melon", 0.5, "unit"), I("sandia", 100, "g"), I("nata", 300, "ml"), I("azucar", 25, "g"), I("gelatina", 2, "unit"), I("almendras", 20, "g"), I("menta", 2, "g")],
    steps: [
      S("Remoja la gelatina en agua fría. Tritura 400 g de melón con el azúcar; calienta una parte y disuelve en ella la gelatina escurrida. Júntalo todo.", 8),
      S("Monta la nata, mézclala con el melón y reparte en 6 vasos. Deja cuajar 3 horas en la nevera.", 180),
      S("Sirve con dados de sandía, almendra tostada picada y menta.", 3),
    ],
  }),
  es({
    id: "copa-casa-tejas-almendra", title: "Copa de frutas con crema de mascarpone y tejas de almendra",
    baseServings: 4, prepMin: 25, cookMin: 10, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("melocoton", 1, "unit"), I("sandia", 250, "g"), I("platano", 2, "unit"), I("nata", 175, "ml"), I("azucar", 85, "g"), I("mascarpone", 175, "g"), I("vainilla", 1, "unit"), I("almendras", 75, "g"), I("mantequilla", 15, "g"), I("huevo", 1, "unit"), I("harina", 15, "g"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Mezcla la harina, 60 g de azúcar (glas), la almendra molida y picada y una pizca de sal; añade la mantequilla en pomada y la clara. Extiende porciones finas sobre papel y hornea a 200 °C 10 minutos.", 14, 200),
      S("Trocea el melocotón, la sandía y los plátanos pelados.", 6),
      S("Monta un poco la nata con el resto del azúcar y las semillas de vainilla y mézclala con el mascarpone.", 5),
      S("Monta las copas con la fruta y la crema y sírvelas con las tejas y menta."),
    ],
  }),
  es({
    id: "bizcochitos-fritos-yogur", title: "Bizcochitos fritos de yogur con mermelada y coco",
    baseServings: 6, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("yogur", 1, "unit"), I("huevo", 2, "unit"), I("azucar", 210, "g"), I("harina", 200, "g"), I("levadura-quimica", 5, "g"), I("limon", 1, "unit"), I("naranja", 1, "unit"), I("coco-rallado", 30, "g"), I("aceite", 400, "ml"), I("menta", 2, "g"), I("sal", 1, "g")],
    steps: [
      S("Mezcla los huevos con 200 g de azúcar y el yogur, añade la harina tamizada con la levadura y una pizca de sal y deja reposar la masa 15 minutos.", 18),
      S("Haz una mermelada rápida con la naranja pelada y troceada y el resto del azúcar (o usa mermelada de naranja).", 8),
      S("Fríe trozos de cáscara de limón en abundante aceite, retíralos y fríe en él cucharadas de masa por los dos lados.", 8),
      S("Sirve los bizcochitos con la mermelada, el coco rallado y menta."),
    ],
  }),
  es({
    id: "compota-frutos-rojos-yogur-merengue", title: "Compota de moras y manzana con yogur y merengue",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("frutos-rojos", 250, "g"), I("manzana", 1, "unit"), I("limon", 0.5, "unit"), I("naranja", 1, "unit"), I("azucar", 40, "g"), I("gelatina", 2, "unit"), I("yogur", 2, "unit"), I("huevo", 2, "unit"), I("menta", 2, "g")],
    steps: [
      S("Cuece las moras (frutos rojos) con la manzana pelada en tiras, ralladura de limón, el zumo de la naranja y 15 g de azúcar, tapado, 15 minutos.", 15),
      S("Añade la gelatina remojada y escurrida y deja que se disuelva.", 2),
      S("Monta las 2 claras a punto de nieve con el resto del azúcar.", 5),
      S("Sirve el yogur batido con la compota, el merengue y menta."),
    ],
  }),
  es({
    id: "bizcochitos-leche-condensada-avellanas", title: "Bizcochitos de leche condensada, avellanas y pasas",
    baseServings: 6, prepMin: 15, cookMin: 18, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("leche-condensada", 370, "g"), I("huevo", 3, "unit"), I("mantequilla", 60, "g"), I("harina", 100, "g"), I("levadura-quimica", 8, "g"), I("avellanas", 20, "g"), I("pasas", 20, "g")],
    steps: [
      S("Unta 6 moldes con mantequilla y enharínalos. Bate un huevo con la leche condensada y añade los otros dos de uno en uno.", 5),
      S("Incorpora el resto de la mantequilla fundida y la harina tamizada con la levadura.", 4),
      S("Reparte en los moldes, pon encima las avellanas partidas y las pasas y hornea a 180 °C 18 minutos.", 18, 180),
    ],
  }),
  es({
    id: "vasitos-mango-galleta", title: "Vasitos de mousse de mango sobre galleta",
    baseServings: 6, prepMin: 20, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("galletas", 60, "g"), I("mantequilla", 30, "g"), I("mango", 2, "unit"), I("lima", 0.5, "unit"), I("huevo", 2, "unit"), I("azucar", 15, "g"), I("aceite", 15, "ml"), I("menta", 2, "g")],
    steps: [
      S("Machaca las galletas, mézclalas con la mantequilla fundida y reparte en vasos.", 5),
      S("Tritura los mangos pelados. Monta las 2 claras con el azúcar (glas) y la ralladura de lima e incorpóralas al puré poco a poco.", 10),
      S("Reparte la mousse sobre la galleta, riega con un hilo de aceite (el original lo mezcla con fruta de la pasión) y decora con menta."),
    ],
  }),
];
