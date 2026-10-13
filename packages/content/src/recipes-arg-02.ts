import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 2: ensaladas. */
export const recipesArg02: Recipe[] = [
  es({
    id: "ensalada-remolacha-pesto-pistachos", title: "Ensalada de remolacha y queso con pesto de pistachos",
    baseServings: 4, prepMin: 20, cookMin: 6, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("remolacha", 500, "g"), I("judias-verdes", 300, "g"), I("queso-fresco", 100, "g"), I("pistachos", 50, "g"), I("ajo", 1, "unit"), I("albahaca", 20, "g"), I("aceite", 80, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta la remolacha cocida en láminas. Cuece las judías verdes en rombos en agua con sal 5 minutos y escúrrelas.", 5),
      S("Para el pesto, tritura casi toda la albahaca con el ajo, un trozo de queso, los pistachos, el aceite y la sal.", 1),
      S("Monta la remolacha, encima las judías y el resto del queso fresco en dados, y riega con el pesto. Decora con albahaca."),
    ],
  }),
  es({
    id: "ensalada-boniato-queso-granada", title: "Ensalada de invierno con boniato asado, queso fresco y granada",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("boniato", 600, "g"), I("escarola", 1, "unit"), I("lechuga", 1, "unit"), I("granada", 1, "unit"), I("queso-fresco", 200, "g"), I("huevo", 4, "unit"), I("aceitunas", 30, "g"), I("anchoas", 10, "g"), I("vinagre", 15, "ml"), I("aceite", 70, "ml"), I("sal", 4, "g")],
    steps: [
      S("Asa el boniato en dados con aceite y sal en el horno a 190 °C 20 minutos. Cuece los huevos 10 minutos y córtalos en cuartos.", 20, 190),
      S("Para la vinagreta, pica muy fino las aceitunas verdes y las anchoas y mézclalas con el vinagre y el aceite."),
      S("Trocea la escarola y la lechuga, saca los granos de la granada y corta el queso fresco en dados."),
      S("Monta la ensalada con todo, sala y aliña con la vinagreta."),
    ],
  }),
  es({
    id: "cogollos-rellenos-bonito", title: "Cogollos rellenos de bonito con tomate confitado",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("lechuga", 2, "unit"), I("tomate", 600, "g"), I("cebolleta", 1, "unit"), I("queso-cabra", 200, "g"), I("atun-lata", 200, "g"), I("huevo", 5, "unit"), I("vinagre", 60, "ml"), I("aceite", 200, "ml"), I("azucar", 5, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece 4 huevos 10 minutos, pélalos, guarda una yema y pica el resto.", 10),
      S("Escalda los tomates 1 minuto, pélalos, pícalos y confítalos a fuego suave con un poco de aceite, sal y el azúcar 15 minutos.", 16),
      S("Haz una mayonesa con el huevo crudo, un chorrito de vinagre, la sal y el resto del aceite, triturando con la batidora sin moverla hasta que ligue. Reduce el resto del vinagre a la mitad 5 minutos.", 6),
      S("Mezcla la cebolleta picada, el atún (mejor bonito en aceite) y el huevo con la mayonesa, rellena las hojas de los cogollos (lechuga) y pon encima una rodaja de queso de cabra. Sirve con el tomate, la yema rallada y unos hilos del vinagre reducido."),
    ],
  }),
  es({
    id: "ensalada-garbanzos-remolacha-mostaza", title: "Ensalada de garbanzos y remolacha con aliño de mostaza",
    baseServings: 4, prepMin: 10, cookMin: 2, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("lechuga", 1, "unit"), I("garbanzos-cocidos", 400, "g"), I("remolacha", 250, "g"), I("sesamo", 8, "g"), I("aceite", 45, "ml"), I("mostaza", 10, "g"), I("vinagre", 10, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta la lechuga en juliana fina y la remolacha en dados. Esparce los garbanzos enjuagados por encima."),
      S("Bate el aceite con la mostaza (mejor de Dijon), el vinagre y la sal."),
      S("Aliña y espolvorea el sésamo tostado en seco 2 minutos.", 2),
    ],
  }),
  es({
    id: "ensalada-habas-menta", title: "Ensalada de habas, naranja y beicon con aliño de menta",
    baseServings: 4, prepMin: 20, cookMin: 12, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("habas", 500, "g"), I("naranja", 2, "unit"), I("lechuga", 1, "unit"), I("huevo-codorniz", 12, "unit"), I("beicon", 200, "g"), I("pinones", 50, "g"), I("miel", 15, "g"), I("menta", 5, "g"), I("aceite", 100, "ml"), I("vinagre", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Cuece las habas en agua con sal 7 minutos y escúrrelas. Cuece los huevos de codorniz 5 minutos, pélalos y pártelos.", 7),
      S("Mezcla la miel, el vinagre, el aceite, la sal y la menta picada para la vinagreta."),
      S("Saca los gajos de naranja. Fríe el beicon en tiras en una sartén sin aceite 4 minutos y tuesta en ella los piñones.", 5),
      S("Monta la lechuga troceada con las habas, la naranja, los huevos, el beicon y los piñones y aliña."),
    ],
  }),
  es({
    id: "ensalada-escarola-marisco", title: "Ensalada de escarola con pescado rebozado, calamar y gambas",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("gallo", 300, "g"), I("calamares", 250, "g"), I("gambas", 250, "g"), I("escarola", 1, "unit"), I("zanahoria", 150, "g"), I("harina", 75, "g"), I("ajo", 2, "unit"), I("azafran", 0.1, "g"), I("vinagre", 15, "ml"), I("perejil", 5, "g"), I("aceite", 300, "ml"), I("sal", 5, "g")],
    steps: [
      S("Dora el ajo laminado en 60 ml de aceite, retira del fuego, añade el azafrán y cuela. Mezcla ese aceite con el vinagre, el perejil y la sal.", 3),
      S("Escalda los calamares en anillas 30 segundos y las gambas peladas 1 minuto en agua con sal. Déjalos macerar en la vinagreta.", 2),
      S("Corta los lomos de pescado (gallo o lenguado) en tiras, sálalos, pásalos por la harina mezclada con 150 ml de agua fría y fríelos a 180 °C 2 minutos.", 6, 180),
      S("Sirve la escarola con el pescado, la vinagreta con el marisco y tiras finas de zanahoria hechas con el pelador."),
    ],
  }),
  es({
    id: "ensalada-champinones-remolacha", title: "Ensalada de champiñones salteados y remolacha",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("champinones", 500, "g"), I("remolacha", 300, "g"), I("lechuga", 1, "unit"), I("huevo", 2, "unit"), I("maiz", 50, "g"), I("aceite", 60, "ml"), I("vinagre", 15, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece los huevos 10 minutos, enfríalos y pélalos.", 10),
      S("Saltea los champiñones laminados en un chorrito de aceite 5 minutos y sálalos.", 5),
      S("Para la vinagreta, machaca un poco el maíz y mézclalo con el resto del aceite, el vinagre y la sal."),
      S("Monta la lechuga, los champiñones y la remolacha en dados, aliña y ralla los huevos por encima."),
    ],
  }),
  es({
    id: "ensalada-bacalao-pilpil", title: "Ensalada de bacalao al pil-pil con escalivada",
    baseServings: 4, prepMin: 25, cookMin: 45, difficulty: "hard", equipment: ["horno", "sarten"],
    ingredients: [I("bacalao", 500, "g"), I("escarola", 1, "unit"), I("pimiento", 1, "unit"), I("berenjena", 300, "g"), I("ajo", 5, "unit"), I("chile", 0.5, "unit"), I("aceite", 250, "ml"), I("sal", 3, "g")],
    steps: [
      S("Asa la berenjena y el pimiento rojo con sal y aceite en el horno a 180 °C 35 minutos. Pélalos, córtalos en tiras y alíñalos.", 35, 180),
      S("Dora los ajos laminados y el chile en el resto del aceite a fuego suave y retíralos. Cocina en ese aceite el bacalao desalado, con la piel hacia arriba, 4 minutos por lado. Retíralo.", 9),
      S("Deja templar el aceite y lígalo en la sartén con la gelatina que suelte el bacalao, moviéndola en círculos (o con un colador) hasta que emulsione."),
      S("Frota la fuente con un ajo, pon la escarola y la escalivada, el bacalao en lascas y el pil-pil por encima."),
    ],
  }),
  es({
    id: "ensalada-alubias-bacalao", title: "Ensalada de alubias y bacalao con vinagreta de ajo",
    authenticity: "adapted", note: "El original usa pochas frescas.",
    baseServings: 4, prepMin: 15, cookMin: 5, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("alubias-blancas", 800, "g"), I("bacalao", 400, "g"), I("zanahoria", 150, "g"), I("cebollino", 5, "g"), I("ajo", 2, "unit"), I("perejil", 5, "g"), I("aceite", 80, "ml"), I("vinagre", 20, "ml"), I("sal", 2, "g")],
    steps: [
      S("Escalda el bacalao desalado en agua caliente 3 minutos, quítale la piel y sepáralo en lascas.", 3),
      S("Ponlo sobre las alubias escurridas, ralla la zanahoria por encima y espolvorea cebollino picado."),
      S("Tritura los ajos con el aceite, el vinagre (mejor de manzana), el perejil y la sal y riega la ensalada.", 1),
    ],
  }),
  es({
    id: "ensalada-pasta-gambas", title: "Ensalada de pasta con verduras crudas y gambas",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pasta", 300, "g"), I("gambas", 300, "g"), I("calabacin", 150, "g"), I("tomate", 150, "g"), I("aguacate", 1, "unit"), I("maiz", 100, "g"), I("huevo", 2, "unit"), I("ajo", 1, "unit"), I("cebollino", 5, "g"), I("albahaca", 5, "g"), I("aceite", 50, "ml"), I("vinagre", 15, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece la pasta corta según el paquete, refréscala y escúrrela. Cuece los huevos 10 minutos y las gambas peladas 1 minuto.", 12),
      S("Mezcla el calabacín en daditos, el tomate pelado en dados, el ajo, el cebollino y la albahaca picados y el maíz."),
      S("Añade la pasta, las gambas y, al final, el aguacate en dados. Aliña con aceite, vinagre y sal y ralla los huevos por encima."),
    ],
  }),
  es({
    id: "ensaladilla-langostinos-calabacin", title: "Ensaladilla de langostinos, calabacín y patata",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("langostinos", 250, "g"), I("calabacin", 400, "g"), I("patata", 300, "g"), I("huevo", 3, "unit"), I("aceitunas", 100, "g"), I("pan", 120, "g"), I("limon", 1, "unit"), I("aceite", 200, "ml"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece la patata 30 minutos y 2 huevos 10. Pela y corta en dados.", 30),
      S("Saltea los langostinos salpimentados 1 minuto, pélalos y córtalos. Aplasta las cabezas en un colador y guarda el jugo.", 2),
      S("Cuece el calabacín en dados al vapor 5 minutos. Mezcla todo con las aceitunas rellenas picadas.", 5),
      S("Haz una mayonesa con el otro huevo, zumo de limón, sal y el aceite, triturando con la batidora. Liga la ensaladilla, riégala con el jugo de los langostinos y sirve con el pan.", 2),
    ],
  }),
  es({
    id: "cogollos-jamon-remolacha-queso", title: "Cogollos rellenos de jamón, remolacha y requesón",
    baseServings: 4, prepMin: 50, cookMin: 2, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("lechuga", 4, "unit"), I("jamon-cocido", 175, "g"), I("remolacha", 250, "g"), I("requeson", 200, "g"), I("queso-crema", 200, "g"), I("pinones", 70, "g"), I("mostaza", 15, "g"), I("miel", 30, "g"), I("romero", 1, "g"), I("aceite", 30, "ml"), I("sal", 2, "g")],
    steps: [
      S("Mezcla el requesón, el queso crema, la remolacha y el jamón cocido en dados y los piñones tostados en seco 2 minutos.", 2),
      S("Rellena las hojas de los cogollos (lechuga), junta de 6 en 6 y envuélvelas en film como un caramelo. Reposa 30 minutos en la nevera y corta en rodajas.", 30),
      S("Mezcla la mostaza, la miel, el romero, el aceite y la sal y aliña."),
    ],
  }),
  es({
    id: "ensalada-lentejas-cherry", title: "Ensalada de lentejas con rúcula, cherry y huevo",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("lentejas", 250, "g"), I("rucula", 200, "g"), I("tomate-cherry", 250, "g"), I("huevo", 2, "unit"), I("cebolleta", 1, "unit"), I("albahaca", 5, "g"), I("perejil", 5, "g"), I("aceite", 60, "ml"), I("vinagre", 20, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece las lentejas (mejor negras o pardinas) con la parte verde de la cebolleta y el perejil 28 minutos. Escúrrelas y alíñalas con un chorrito de aceite.", 28),
      S("Cuece los huevos 10 minutos y escalda los cherry 1 minuto para pelarlos.", 11),
      S("Monta la rúcula con las lentejas, los huevos en cuartos y los cherry."),
      S("Aliña con la cebolleta y la albahaca picadas mezcladas con el resto del aceite, el vinagre y la sal."),
    ],
  }),
  es({
    id: "ensalada-arroz-pollo-mango", title: "Ensalada de arroz, pollo especiado y mango",
    authenticity: "adapted", note: "El original lleva jamón de pato y anacardos.",
    baseServings: 4, prepMin: 40, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("arroz", 300, "g"), I("pollo", 400, "g"), I("mango", 1, "unit"), I("almendras", 30, "g"), I("canela", 3, "g"), I("menta", 5, "g"), I("miel", 15, "g"), I("vinagre", 15, "ml"), I("perejil", 5, "g"), I("aceite", 60, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta la pechuga de pollo en dados y marínalos con sal, pimienta, la canela y un chorrito de aceite 30 minutos.", 30),
      S("Cuece el arroz 18 minutos, escúrrelo y enfríalo. Mézclalo con la menta picada, las almendras machacadas y el mango en dados.", 18),
      S("Saltea el pollo escurrido en una sartén 6 minutos.", 6),
      S("Sirve el arroz con el pollo encima y aliña con la miel, el vinagre, el perejil, el resto del aceite y sal."),
    ],
  }),
  es({
    id: "ensaladilla-esparragos-pavo", title: "Ensaladilla de espárragos, pavo y boniato",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pavo", 250, "g"), I("esparragos-blancos", 250, "g"), I("patata", 400, "g"), I("boniato", 300, "g"), I("huevo", 4, "unit"), I("anchoas", 30, "g"), I("aceitunas", 60, "g"), I("maiz", 100, "g"), I("aceite", 300, "ml"), I("vinagre", 10, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece la patata y el boniato 30 minutos y 2 huevos 10 minutos. Pela y corta en dados.", 30),
      S("Haz una mayonesa con los otros 2 huevos, el vinagre, la sal y el aceite, triturando con la batidora.", 2),
      S("Mezcla la patata, el boniato, los huevos, el pavo en dados, las aceitunas, las anchoas picadas y el maíz con la mayonesa."),
      S("Sirve con los espárragos blancos partidos por la mitad encima y perejil."),
    ],
  }),
  es({
    id: "ensalada-tomate-judias-bonito", title: "Ensalada de tomate, judías verdes y bonito",
    baseServings: 4, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("tomate", 450, "g"), I("judias-verdes", 400, "g"), I("huevo", 4, "unit"), I("atun-lata", 200, "g"), I("ajo", 1, "unit"), I("aceitunas", 30, "g"), I("mostaza", 15, "g"), I("aceite", 60, "ml"), I("sal", 4, "g")],
    steps: [
      S("Cuece los huevos 10 minutos y pícalos. Cuece las judías verdes en tiras al vapor 12 minutos.", 12),
      S("Pela los tomates, córtalos en rodajas finas, sálalos y cubre con las judías, el bonito (atún) desmigado y el huevo."),
      S("Aliña con el ajo y las aceitunas muy picados mezclados con la mostaza (mejor antigua) y el aceite."),
    ],
  }),
  es({
    id: "ensalada-salmon-marinado-habas", title: "Ensalada de salmón marinado con habas y rabanitos",
    note: "Congela el salmón al menos 5 días antes (o cómpralo ya congelado) para evitar el anisakis.",
    baseServings: 4, prepMin: 90, cookMin: 15, difficulty: "medium", equipment: ["olla", "horno"],
    ingredients: [I("salmon", 600, "g"), I("habas", 250, "g"), I("rabanitos", 150, "g"), I("sal", 300, "g"), I("azucar", 300, "g"), I("lechuga", 1, "unit"), I("frutos-rojos", 60, "g"), I("pan", 120, "g"), I("mostaza", 15, "g"), I("miel", 10, "g"), I("menta", 5, "g"), I("aceite", 80, "ml")],
    steps: [
      S("Mezcla la sal gruesa con el azúcar y cubre con ella el salmón por todos lados. Marina 1 hora en la nevera, enjuágalo, sécalo y córtalo en tiras.", 60),
      S("Tuesta el pan en dados con un poco de aceite en el horno a 200 °C 7 minutos. Cuece las habas 7 minutos.", 7, 200),
      S("Monta el salmón en media fuente y, en la otra, los brotes de lechuga, las habas, los rabanitos en láminas, los frutos rojos y los picatostes. Espolvorea la menta picada."),
      S("Agita la mostaza y la miel con el resto del aceite y aliña."),
    ],
  }),
  es({
    id: "ensalada-manzana-tomate-zanahoria", title: "Ensalada de manzana, tomate y zanahoria",
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("lechuga", 1, "unit"), I("tomate", 200, "g"), I("manzana", 1, "unit"), I("zanahoria", 100, "g"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Pon la lechuga en una fuente con el tomate pelado en dados."),
      S("Ralla por encima la manzana y la zanahoria peladas, justo antes de servir para que no se oscurezcan."),
      S("Agita el aceite con el vinagre y la sal en un bote y aliña."),
    ],
  }),
  es({
    id: "ensalada-remolacha-manzana-jamon", title: "Ensalada de remolacha, manzana y jamón cocido",
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("lechuga", 1, "unit"), I("remolacha", 200, "g"), I("manzana", 2, "unit"), I("jamon-cocido", 150, "g"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Corta la lechuga en juliana fina y ponla en una fuente."),
      S("Añade la remolacha rallada, la manzana y el jamón cocido en dados."),
      S("Sala y aliña con el aceite y el vinagre."),
    ],
  }),
  es({
    id: "ensalada-pollo-granada-aguacate", title: "Ensalada de tiras de pollo, aguacate y granada",
    baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 350, "g"), I("escarola", 1, "unit"), I("ajo", 2, "unit"), I("maiz", 40, "g"), I("aguacate", 1, "unit"), I("granada", 1, "unit"), I("mostaza", 15, "g"), I("soja", 15, "ml"), I("vinagre", 15, "ml"), I("miel", 15, "g"), I("vino-dulce", 30, "ml"), I("aceite", 60, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Reduce la soja, el vinagre, la miel y el vino dulce 4 minutos. Fríe el ajo laminado en el aceite, retíralo y mezcla ese aceite con la reducción.", 6),
      S("Salpimienta las tiras de pollo, úntalas con la mostaza y saltéalas 4 minutos.", 4),
      S("Monta la escarola con el aguacate, los granos de granada, el maíz machacado, el pollo y los ajos fritos y aliña."),
    ],
  }),
  es({
    id: "ensalada-garbanzos-judias-habas", title: "Ensalada de garbanzos al curry, judías verdes y habas",
    baseServings: 4, prepMin: 25, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("garbanzos-cocidos", 300, "g"), I("judias-verdes", 400, "g"), I("habas", 200, "g"), I("aceitunas", 50, "g"), I("queso-fresco", 125, "g"), I("ajo", 1, "unit"), I("curry", 2, "g"), I("cebollino", 5, "g"), I("aceite", 70, "ml"), I("vinagre", 15, "ml"), I("sal", 4, "g")],
    steps: [
      S("Macera los garbanzos con el ajo picado, el curry, sal y un chorro de aceite 15 minutos.", 15),
      S("Cuece las habas 8 minutos y las judías verdes en juliana al vapor 8 minutos.", 8),
      S("Pon los garbanzos en el centro y alrededor las judías, las habas, las aceitunas en rodajas y el queso fresco."),
      S("Aliña con el cebollino picado, el resto del aceite, el vinagre y sal."),
    ],
  }),
  es({
    id: "ensaladilla-lentejas-txistorra", title: "Ensaladilla de lentejas con hojaldritos de txistorra",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["horno", "olla", "sarten", "batidora"],
    ingredients: [I("masa-hojaldre", 140, "g"), I("txistorra", 200, "g"), I("lentejas", 400, "g"), I("patata", 500, "g"), I("calabacin", 250, "g"), I("huevo", 1, "unit"), I("aceite", 220, "ml"), I("vinagre", 10, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Corta la txistorra en 8 trozos, enrolla en cada uno una tira de hojaldre y hornéalos a 200 °C 15 minutos.", 15, 200),
      S("Cuece las lentejas en agua con sal 28 minutos y, aparte, las patatas con piel 30 minutos. Pela y corta en rodajas.", 30),
      S("Saltea el calabacín en dados con un poco de aceite 5 minutos y haz una mayonesa con el huevo, el vinagre, la sal y el resto del aceite, triturando con la batidora.", 7),
      S("Sirve en hileras las lentejas, el calabacín y la patata, con la mayonesa, los hojaldritos y perejil."),
    ],
  }),
  es({
    id: "ensalada-rucula-pera-queso", title: "Ensalada de rúcula, pera y queso fresco con nueces",
    authenticity: "adapted", note: "El aliño original lleva membrillo fundido; con miel queda parecido.",
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("rucula", 200, "g"), I("pera", 2, "unit"), I("queso-fresco", 200, "g"), I("nueces", 40, "g"), I("miel", 25, "g"), I("aceite", 50, "ml"), I("vinagre", 15, "ml"), I("sal", 2, "g")],
    steps: [
      S("Pon la rúcula en una fuente con la pera pelada en dados y el queso fresco en dados."),
      S("Esparce las nueces picadas."),
      S("Agita la miel con el aceite, el vinagre y la sal y aliña."),
    ],
  }),
  es({
    id: "ensalada-aguacate-remolacha", title: "Ensalada de aguacate y remolacha",
    baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy",
    ingredients: [I("lechuga", 1, "unit"), I("aguacate", 1, "unit"), I("remolacha", 200, "g"), I("ajo", 1, "unit"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 2, "g")],
    steps: [
      S("Trocea la lechuga (mejor hoja de roble) y ponla en una fuente."),
      S("Añade el aguacate en dados, el ajo muy picado y la remolacha rallada."),
      S("Aliña con aceite, vinagre y sal."),
    ],
  }),
  es({
    id: "ensalada-quinoa-rape", title: "Ensalada de quinoa con rape y granada",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("rape", 350, "g"), I("quinoa", 250, "g"), I("tomate", 250, "g"), I("granada", 1, "unit"), I("cebollino", 5, "g"), I("jengibre", 5, "g"), I("limon", 0.5, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Lava la quinoa y cuécela en el doble de agua con sal 13 minutos. Enfríala.", 13),
      S("Mézclala con los granos de granada, el cebollino picado, el zumo de limón, un chorrito de aceite, sal, pimienta y jengibre rallado."),
      S("Salpimienta el rape en filetes finos y hazlo a la plancha con una gota de aceite 2 minutos por lado.", 4),
      S("Sirve la quinoa con el tomate pelado en gajos y el rape encima, con perejil."),
    ],
  }),
  es({
    id: "ensalada-sandia-cuscus", title: "Ensalada de sandía, cuscús y rúcula",
    baseServings: 4, prepMin: 20, cookMin: 5, difficulty: "easy",
    ingredients: [I("sandia", 300, "g"), I("cuscus", 100, "g"), I("rucula", 100, "g"), I("pasas", 40, "g"), I("aceite", 40, "ml"), I("vinagre", 10, "ml"), I("sal", 3, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Remoja las pasas en agua 10 minutos.", 10),
      S("Vierte 100 ml de agua hirviendo con sal sobre el cuscús, tapa 5 minutos y suéltalo con un tenedor.", 5),
      S("Mezcla el cuscús con la sandía en dados, las pasas y la rúcula, y aliña con aceite, vinagre, sal y pimienta."),
    ],
  }),
];
