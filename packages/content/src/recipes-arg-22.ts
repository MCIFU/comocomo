import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 22: pescados, mariscos y moluscos. */
export const recipesArg22: Recipe[] = [
  es({
    id: "merluza-horno-salsa-puerros", title: "Merluza al horno con langostinos, patatitas y salsa de puerros",
    baseServings: 6, prepMin: 25, cookMin: 45, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("merluza", 1200, "g"), I("langostinos", 300, "g"), I("patata", 700, "g"), I("puerro", 4, "unit"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("zanahoria", 100, "g"), I("tomate-triturado", 60, "g"), I("vinagre", 125, "ml"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga los puerros en medias lunas, el pimiento verde, la zanahoria y las cebollas picados con sal hasta que se pochen. Añade el tomate, el vinagre y un vaso de agua, reduce y pasa por el pasapurés.", 30),
      S("Mientras, cuece las patatitas 17 minutos, sécalas y saltéalas con sal y perejil."),
      S("Pon los lomos de merluza salpimentados y los langostinos pelados en una fuente con aceite y hornéalos a 200 °C 10 minutos.", 10, 200),
      S("Sirve con la salsa caliente y las patatas."),
    ],
  }),
  es({
    id: "ceviche-salmon-aguacate", title: "Ceviche de salmón con aguacate y totopos",
    cuisine: "peruana", origin: "Perú (versión de Arguiñano)", authenticity: "adapted",
    note: "Usa salmón que haya estado congelado al menos 5 días (anisakis).",
    baseServings: 4, prepMin: 35, cookMin: 5, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("salmon", 500, "g"), I("tortilla-maiz", 3, "unit"), I("cebolla", 0.5, "unit"), I("aguacate", 1, "unit"), I("limon", 1, "unit"), I("lima", 1, "unit"), I("chile", 1, "unit"), I("cilantro", 5, "g"), I("aceite", 150, "ml"), I("sal", 4, "g")],
    steps: [
      S("Corta el salmón sin piel ni espinas en dados de 1 cm y mézclalo con el cilantro, la cebolla (morada) en daditos, el zumo del limón y la lima, el chile picado y sal. Tápalo y deja que macere 20 minutos en la nevera.", 25),
      S("Corta las tortillas en 8 triángulos, fríelas y escúrrelas.", 5),
      S("Añade el aguacate en dados al ceviche y sirve con los totopos."),
    ],
  }),
  es({
    id: "merluza-rebozada-guisantes-esparragos", title: "Merluza rebozada en salsa con guisantes, espárragos y huevo",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("merluza", 700, "g"), I("guisantes", 100, "g"), I("esparragos-blancos", 300, "g"), I("huevo", 4, "unit"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("harina", 45, "g"), I("vino-blanco", 50, "ml"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece los espárragos pelados 15 minutos y los guisantes 10 (guarda su agua). Cuece 2 huevos 10 minutos y córtalos en gajos.", 15),
      S("Rehoga la cebolleta y el ajo en daditos, añade una cucharadita de harina, el vino (txakoli) y el caldo de los guisantes; añade perejil y sal.", 8),
      S("Sala la merluza en raciones, pásala por harina y los otros 2 huevos batidos y fríela.", 6),
      S("Pon la merluza en la salsa con los guisantes, los espárragos y el huevo y dale un hervor.", 3),
    ],
  }),
  es({
    id: "caballa-escabeche-limon", title: "Caballa rebozada en escabeche de limón",
    note: "El original usa verdel.",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("caballa", 800, "g"), I("pan", 200, "g", true), I("ajo", 4, "unit"), I("limon", 2, "unit"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("chile", 0.5, "unit"), I("aceite", 400, "ml"), I("perejil", 5, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saca los lomos de las caballas sin espinas y pártelos a lo largo. Salpimienta, pasa por harina y huevo batido y fríelos brevemente.", 10),
      S("Calienta el zumo de los limones con 250 ml de aceite, la guindilla y el ajo majado con perejil, y cuece 12 minutos a fuego suave.", 12),
      S("Pon el pescado en una fuente, cúbrelo con el escabeche y deja reposar. Sírvelo templado o frío con pan."),
    ],
  }),
  es({
    id: "boquerones-fritos-ensalada", title: "Boquerones fritos al ajillo con ensalada",
    baseServings: 4, prepMin: 20, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("boquerones", 800, "g"), I("lechuga", 1, "unit"), I("cebolleta", 1, "unit"), I("ajo", 4, "unit"), I("vinagre", 15, "ml"), I("chile", 1, "unit"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Disuelve sal en el vinagre y añade aceite. Prepara la lechuga con la cebolleta en juliana y alíñala al servir.", 5),
      S("Limpia los boquerones sin cabeza ni tripa y sécalos.", 8),
      S("Fríe en dos tandas: dora 2 ajos laminados con aros de guindilla, añade la mitad de los boquerones salados y fríelos por los dos lados. Repite.", 6),
      S("Sirve con la ensalada y perejil."),
    ],
  }),
  es({
    id: "ceviche-lubina-gambas-mango", title: "Ceviche de lubina y gambas con aguacate y mango",
    cuisine: "peruana", origin: "Perú (versión de Arguiñano)", authenticity: "adapted",
    note: "Usa pescado que haya estado congelado al menos 5 días (anisakis).",
    baseServings: 4, prepMin: 35, cookMin: 5, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("lubina", 800, "g"), I("gambas", 200, "g"), I("aguacate", 1, "unit"), I("mango", 0.5, "unit"), I("tortilla-maiz", 6, "unit"), I("cebolla", 0.5, "unit"), I("naranja", 1, "unit"), I("lima", 2, "unit"), I("vinagre", 150, "ml"), I("chile", 0.5, "unit"), I("cilantro", 5, "g"), I("aceite", 150, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Macera la cebolla morada en daditos con el vinagre 5 minutos y escúrrela.", 5),
      S("Mezcla la lubina sin piel y las gambas peladas en dados con sal, pimienta, el zumo de la naranja y las limas, el chile picado (o salsa picante), el cilantro y la cebolla. Reposa 12 minutos en la nevera.", 15),
      S("Añade el mango y el aguacate en daditos.", 4),
      S("Corta las tortillas en triángulos, fríelas y sírvelas con el ceviche.", 5),
    ],
  }),
  es({
    id: "merluza-papillote-verduras", title: "Merluza en papillote con verduras en juliana",
    note: "El original usa pescadilla.",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("merluza", 600, "g"), I("puerro", 2, "unit"), I("zanahoria", 200, "g"), I("ajo", 8, "unit"), I("calabacin", 200, "g"), I("vino-blanco", 50, "ml"), I("aceite", 40, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta en juliana fina el calabacín, los puerros, los ajos frescos y las zanahorias peladas.", 8),
      S("Reparte las verduras en 4 hojas de aluminio, salpimienta, pon encima los lomos de merluza salpimentados, riega con aceite y vino y cierra los paquetes.", 5),
      S("Hornéalos a 220 °C 10 minutos y ábrelos en la mesa con cuidado.", 10, 220),
    ],
  }),
  es({
    id: "ajoarriero-aragones", title: "Ajoarriero aragonés con patatas",
    origin: "España (Aragón)",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("bacalao", 600, "g"), I("patata", 600, "g"), I("cebolla", 1, "unit"), I("ajo", 6, "unit"), I("huevo", 4, "unit"), I("aceite", 300, "ml"), I("perejil", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Asa el bacalao desalado con un chorrito de aceite en el horno a 220 °C 7 minutos y desmígalo sin piel ni espinas.", 8, 220),
      S("Fríe la cebolla en daditos con las patatas en cuartos de luna finos y sal, como para tortilla.", 20),
      S("Rehoga el ajo en daditos sin que tome color, añade el bacalao y ve incorporando aceite moviendo la cazuela para que ligue.", 5),
      S("Mezcla con las patatas, añade las yemas fuera del fuego, remueve y sirve con perejil."),
    ],
  }),
  es({
    id: "salmon-crema-coliflor", title: "Salmón con crema de coliflor y vinagreta de eneldo",
    baseServings: 4, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("salmon", 600, "g"), I("coliflor", 1, "unit"), I("leche", 200, "ml"), I("vinagre", 30, "ml"), I("cebollino", 5, "g"), I("aceite", 150, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Mezcla 100 ml de aceite con el vinagre, el cebollino picado (eneldo en el original) y sal.", 3),
      S("Cuece los ramilletes de coliflor en la leche con un vaso de agua y sal 17 minutos, escúrrelos y tritúralos con un chorro de aceite.", 20),
      S("Salpimienta el salmón en tacos y hazlo a la plancha sin aceite. Sírvelo sobre la crema con la vinagreta.", 4),
    ],
  }),
  es({
    id: "pulpo-pure-aceitunas-vinagreta-kiwi", title: "Pulpo con puré de patata y aceitunas y vinagreta de kiwi",
    baseServings: 8, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pulpo", 1200, "g"), I("patata", 700, "g"), I("aceitunas", 80, "g"), I("cebolla", 1, "unit"), I("kiwi", 1, "unit"), I("vinagre", 15, "ml"), I("laurel", 1, "unit"), I("aceite", 120, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece las patatas cascadas con sal y laurel 13 minutos, pásalas por el pasapurés y mézclalas con las aceitunas (verdes y negras) picadas, aceite y sal.", 15),
      S("Cuece el pulpo con la cebolla, sin agua ni sal, en la olla rápida 10 minutos por kilo (o 40 minutos en olla normal con agua). Córtalo con tijeras.", 30),
      S("Tritura el kiwi pelado con el vinagre, un buen chorro de aceite y sal.", 2),
      S("Sirve el pulpo sobre el puré con la vinagreta y perejil."),
    ],
  }),
  es({
    id: "marmitako", title: "Marmitako de bonito",
    origin: "España (País Vasco)",
    baseServings: 8, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("bonito", 750, "g"), I("patata", 1000, "g"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("tomate", 150, "g"), I("tomates-secos", 20, "g"), I("puerro", 1, "unit"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("pimenton", 4, "g"), I("laurel", 1, "unit"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 10, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece la cabeza o espinas de pescado (si tienes) con perejil, la cebolla y el puerro troceados en abundante agua con sal 15 minutos y cuela. (El original añade pimiento choricero.)", 15),
      S("Dora el ajo picado, rehoga el pimiento verde y la cebolleta troceados con el laurel, añade el tomate pelado, los tomates secos picados y el pimentón y pocha.", 12),
      S("Añade las patatas cascadas, cubre con el caldo y cuece 20 minutos.", 20),
      S("Apaga el fuego, añade el bonito en dados salpimentado, tapa y deja que se haga con el calor 3 minutos. Sirve con perejil.", 3),
    ],
  }),
  es({
    id: "boquerones-al-limon", title: "Boquerones al limón con tostas de ajo",
    baseServings: 4, prepMin: 25, cookMin: 10, difficulty: "easy", equipment: ["horno", "sarten"],
    ingredients: [I("boquerones", 800, "g"), I("pan", 200, "g"), I("ajo", 1, "unit"), I("limon", 2, "unit"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Tuesta 12 rebanadas de pan en el horno y úntalas con el ajo.", 5, 200),
      S("Abre los boquerones en libro sin espina y ponlos en capas con la piel hacia arriba en una cazuela con un chorrito de aceite, salpimentando y con perejil en cada capa.", 12),
      S("Riega con el zumo de un limón y aceite, tapa y cocina a fuego suave 5-6 minutos.", 6),
      S("Sirve sobre las tostas con rodajas del otro limón."),
    ],
  }),
  es({
    id: "cazuela-pulpo-habitas", title: "Cazuela de pulpo con patatas y habitas",
    baseServings: 6, prepMin: 20, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pulpo", 700, "g"), I("patata", 750, "g"), I("habas", 200, "g"), I("cebolleta", 1, "unit"), I("ajo", 8, "unit"), I("tomate", 150, "g"), I("puerro", 2, "unit"), I("vino-blanco", 100, "ml"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 7, "g")],
    steps: [
      S("Cuece el pulpo con los puerros partidos 15 minutos en olla rápida (o 40 en olla normal). Guarda el agua.", 30),
      S("Pocha la cebolleta y los ajos frescos (ajetes) en cilindros 10 minutos, añade el tomate rallado, sal y el vino y da un hervor.", 12),
      S("Añade las patatas en cuartos y las habas, cubre con agua y un poco del agua del pulpo y cuece 19 minutos.", 19),
      S("Añade el pulpo troceado y sirve con perejil.", 2),
    ],
  }),
  es({
    id: "mejillones-escabeche-patatas-panadera", title: "Mejillones en escabeche con patatas panadera",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("mejillones", 1000, "g"), I("patata", 500, "g"), I("cebolleta", 2, "unit"), I("pimiento", 1, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 100, "ml"), I("vinagre", 100, "ml"), I("pimenton", 2, "g"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Hierve 200 ml de aceite con el vinagre, el vino (vermut en el original), pimienta y el pimentón; añade los mejillones limpios, tapa y deja que se abran. Quita las conchas y déjalos en el escabeche.", 8),
      S("Pocha el ajo laminado, las cebolletas en juliana y el pimiento en dados, añade las patatas en rodajas finas con sal y cocínalas hasta que estén tiernas.", 22),
      S("Sirve las patatas con los mejillones escabechados y perejil."),
    ],
  }),
  es({
    id: "bacalao-fresco-gratinado-veloute", title: "Bacalao fresco gratinado sobre tomate con espinacas",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("bacalao", 800, "g"), I("cebolleta", 2, "unit"), I("ajo", 3, "unit"), I("tomate", 450, "g"), I("espinacas", 200, "g"), I("harina", 40, "g"), I("caldo", 500, "ml"), I("aceite", 60, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha los ajos y las cebolletas picados, añade los tomates pelados y troceados y cuece 15 minutos a fuego lento. Reparte en 4 cazuelitas.", 22),
      S("Cuece las espinacas 3 minutos, escúrrelas y pícalas.", 4),
      S("Haz el bacalao salpimentado a la plancha 2 minutos por lado y ponlo sobre el sofrito.", 4),
      S("Rehoga la harina en 3 cucharadas de aceite, añade el caldo poco a poco y cuece 5 minutos; mézclalo con las espinacas, cubre el pescado y gratina en el horno.", 8, 220),
    ],
  }),
  es({
    id: "albondigas-caballa-salsa-verde", title: "Albóndigas de caballa en salsa verde",
    baseServings: 4, prepMin: 30, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("caballa", 800, "g"), I("huevo", 2, "unit"), I("ajo", 4, "unit"), I("pan-rallado", 25, "g"), I("harina", 50, "g"), I("cebolleta", 1, "unit"), I("aceite", 250, "ml"), I("perejil", 10, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Limpia las caballas, pica la carne y mézclala con los huevos, 2 ajos y perejil picados, el pan rallado, sal y pimienta. Forma bolitas, enharínalas y fríelas.", 15),
      S("Rehoga los otros 2 ajos y la cebolleta en daditos, añade una cucharada de harina, un vaso de agua y perejil y remueve hasta ligar.", 6),
      S("Cuece las albóndigas en la salsa a fuego suave 5 minutos.", 5),
    ],
  }),
  es({
    id: "boquerones-con-tomate", title: "Boquerones al horno con tomate y pimentón",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("boquerones", 600, "g"), I("tomate", 600, "g"), I("cebolla", 2, "unit"), I("pimenton", 5, "g"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha las cebollas en dados, añade los tomates pelados en dados con sal y cocina 30 minutos a fuego suave.", 35),
      S("Pon la mitad del sofrito en una fuente, coloca encima los boquerones limpios y salados, espolvorea pimentón y cubre con el resto.", 5),
      S("Espolvorea perejil y hornea a 180 °C 5 minutos.", 5, 180),
    ],
  }),
  es({
    id: "popietas-gallo-gambas-azafran", title: "Rollitos de gallo rellenos de gambas en salsa de azafrán",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("gallo", 800, "g"), I("patata", 600, "g"), I("gambas", 300, "g"), I("vino-blanco", 100, "ml"), I("nata", 100, "ml"), I("maicena", 5, "g"), I("azafran", 0.1, "g"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas pequeñas 20 minutos.", 20),
      S("Salpimienta los filetes de gallo, pon 3 gambas peladas en un extremo, enróllalos con la piel hacia dentro, riégalos con el vino (txakoli) y aceite y hornéalos a 200 °C 11 minutos.", 11, 200),
      S("Mientras, reduce la nata con 100 ml de agua, el azafrán y sal; añade el jugo del pescado y liga con la maicena."),
      S("Sirve los rollitos con la salsa, las patatas y perejil."),
    ],
  }),
  es({
    id: "bacalao-fresco-gratinado-pure-alioli", title: "Bacalao fresco gratinado con puré al alioli y pimientos fritos",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["horno", "sarten", "batidora", "olla"],
    ingredients: [I("bacalao", 700, "g"), I("patata", 300, "g"), I("pimiento", 3, "unit"), I("queso", 60, "g"), I("huevo", 1, "unit"), I("ajo", 1, "unit"), I("vinagre", 5, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 20 minutos y haz un puré.", 20),
      S("Salpimienta el bacalao, píntalo con aceite y hornéalo a 180 °C 10 minutos. Mientras, fríe los pimientos verdes en trozos 10 minutos.", 10, 180),
      S("Tritura el huevo con el ajo, vinagre, sal y 200 ml de aceite y mézclalo con el puré.", 3),
      S("Cubre el bacalao con el puré, espolvorea el queso y gratina en el horno. Sirve con los pimientos y perejil.", 4, 220),
    ],
  }),
  es({
    id: "bonito-encebollado", title: "Bonito encebollado con pimientos fritos",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("bonito", 600, "g"), I("cebolleta", 4, "unit"), I("ajo", 3, "unit"), I("pimiento", 2, "unit"), I("caldo", 100, "ml"), I("aceite", 80, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Fríe los pimientos verdes en tiras con aceite y sálalos.", 8),
      S("Pocha a fuego suave el ajo laminado y las cebolletas en juliana fina hasta dorar; añade el caldo (de pescado) y dale un hervor fuerte.", 18),
      S("Salpimienta el bonito en filetes de 2 cm y hazlo vuelta y vuelta. Sírvelo sobre la cebolla con los pimientos y perejil.", 3),
    ],
  }),
  es({
    id: "lubina-paquetes-calabacin-panaderas", title: "Lubina con paquetitos de calabacín rellenos de patatas panadera",
    baseServings: 4, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("lubina", 1200, "g"), I("calabacin", 500, "g"), I("patata", 400, "g"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("vinagre", 15, "ml"), I("chile", 1, "unit"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Fríe la cebolleta y el pimiento verde en dados con las patatas en cuartos de luna y sal.", 18),
      S("Saca 16 láminas largas de calabacín, escáldalas 1 minuto y cruza 2 en cada paquete con patatas en el centro; ciérralos y hornéalos con aceite a 230 °C 9 minutos.", 12, 230),
      S("Saca los lomos de las lubinas, salpimiéntalos y hazlos a la plancha por la piel.", 5),
      S("Dora el ajo laminado con la cayena (chile), añade el vinagre (de manzana) y riega el pescado. Sirve con los paquetes y perejil.", 2),
    ],
  }),
];
