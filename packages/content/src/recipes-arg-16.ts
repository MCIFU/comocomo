import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 16: carnes y guisos. */
export const recipesArg16: Recipe[] = [
  es({
    id: "hamburguesa-hojaldre", title: "Hamburguesa en pan de hojaldre con semillas",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("ternera-picada", 600, "g"), I("masa-hojaldre", 550, "g"), I("queso-crema", 80, "g"), I("aceitunas", 20, "g"), I("tomate", 300, "g"), I("calabacin", 250, "g"), I("huevo", 1, "unit"), I("sesamo", 30, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta 8 círculos de hojaldre del tamaño de las hamburguesas. Pinta 4 con la yema mezclada con aceite, espolvorea los otros 4 con sésamo (y amapola) tras pintarlos, y hornéalos entre dos bandejas con papel a 180 °C 20 minutos.", 20, 180),
      S("Mezcla el queso crema con las aceitunas negras muy picadas (tapenade).", 2),
      S("Haz a la plancha los tomates partidos y el calabacín en rodajas, con sal.", 6),
      S("Forma 4 hamburguesas con la carne salpimentada, hazlas a la plancha y móntalas entre dos discos de hojaldre con la crema, las verduras y perejil.", 6),
    ],
  }),
  es({
    id: "lomo-canela-polenta-manzana", title: "Lomo a la canela con polenta de manzana y ciruelas",
    baseServings: 6, prepMin: 25, cookMin: 70, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("cerdo", 1000, "g"), I("cebolleta", 2, "unit"), I("polenta", 150, "g"), I("leche-evaporada", 250, "ml"), I("manzana", 1, "unit"), I("pasas", 60, "g"), I("vino-blanco", 500, "ml"), I("maicena", 8, "g"), I("canela", 2, "g"), I("laurel", 2, "unit"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saltea la manzana en daditos con las ciruelas pasas picadas (o pasas).", 4),
      S("Hierve la leche evaporada con 375 ml de agua, sal y pimienta, añade la polenta y cuece 3 minutos removiendo. Mezcla con la manzana, reparte en moldes y deja enfriar.", 5),
      S("Ata el lomo, salpiméntalo y dóralo con las cebolletas picadas. Añade el vino (el original usa fino de Montilla), la canela (en rama) y el laurel, tapa y cuece 50 minutos dándole la vuelta.", 55),
      S("Saca el lomo, cuela la salsa y lígala con la maicena. Sirve el lomo fileteado con la salsa, la polenta desmoldada y perejil.", 5),
    ],
  }),
  es({
    id: "albondigas-rellenas-cherry", title: "Albóndigas rellenas de tomate cherry en salsa de cebolleta",
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "medium", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("ternera-picada", 800, "g"), I("tomate-cherry", 200, "g"), I("pinones", 25, "g"), I("aceitunas", 25, "g"), I("harina", 40, "g"), I("cebolleta", 4, "unit"), I("ajo", 4, "unit"), I("vino-tinto", 300, "ml"), I("aceite", 150, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Tuesta los piñones. Pocha las cebolletas y los ajos picados con sal y reserva una cuarta parte. Al resto añade el vino, un hervor y 300 ml de agua; cuece 20 minutos y tritura.", 25),
      S("Mezcla la carne con el pochado reservado, las aceitunas verdes picadas, los piñones, perejil, sal y pimienta.", 5),
      S("Escalda y pela los tomates cherry. Envuelve cada uno con carne formando una albóndiga, pásalas por harina y fríelas.", 10),
      S("Calienta las albóndigas en la salsa 3 minutos y sirve.", 3),
    ],
  }),
  es({
    id: "pinchos-cerdo-arroz-nueces", title: "Pinchos de cerdo a la miel y romero con arroz, nueces y pimientos fritos",
    baseServings: 4, prepMin: 40, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("cerdo", 600, "g"), I("arroz-basmati", 200, "g"), I("pimiento", 6, "unit"), I("calabacin", 250, "g"), I("ajo", 1, "unit"), I("manzana", 1, "unit"), I("nueces", 50, "g"), I("miel", 40, "g"), I("romero", 2, "g"), I("aceite", 80, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Ensarta el cerdo en dados en 8 pinchos y macéralos 30 minutos con la miel templada, el romero picado y 2 cucharadas de aceite.", 30),
      S("Mientras, rehoga el ajo con pimienta en grano y el arroz, añade agua según el paquete y sal y cuece 15 minutos. Mézclalo con las nueces picadas, el calabacín salteado en cuartos de luna y la manzana en daditos."),
      S("Fríe los pimientos verdes (de Gernika o pequeños) con sal.", 5),
      S("Haz los pinchos en la sartén 8 minutos dándoles la vuelta y sírvelos con el arroz, los pimientos y perejil.", 8),
    ],
  }),
  es({
    id: "hamburguesa-rebozada-cebolletas-puerros", title: "Hamburguesas rebozadas con cebolletas, puerros a la plancha y salsa de vino",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("ternera-picada", 600, "g"), I("cebolleta", 6, "unit"), I("puerro", 6, "unit"), I("ajo", 3, "unit"), I("harina", 50, "g"), I("huevo", 2, "unit"), I("vino-tinto", 150, "ml"), I("romero", 1, "g"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha el ajo y 2 cebolletas picados, añade el romero y una cucharada de harina, el vino y un vaso de agua y reduce. Retira el romero, tritura y añade perejil.", 15),
      S("Haz a la plancha el resto de cebolletas partidas y la parte blanca de los puerros, con sal.", 10),
      S("Forma 4 hamburguesas con la carne salada, pásalas por harina y huevo batido y fríelas por los dos lados.", 6),
      S("Sírvelas con las verduras y la salsa."),
    ],
  }),
  es({
    id: "aleta-rellena-jamon-pera", title: "Aleta de ternera rellena de jamón y pera con setas",
    baseServings: 6, prepMin: 25, cookMin: 55, difficulty: "medium", equipment: ["sarten", "horno", "olla"],
    ingredients: [I("ternera", 1000, "g"), I("jamon", 80, "g"), I("setas", 500, "g"), I("pera", 1, "unit"), I("ajo", 2, "unit"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("vino-blanco", 150, "ml"), I("maicena", 8, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saltea la pera en gajos y, aparte, la cebolla en dados y la zanahoria en medias lunas.", 8),
      S("Extiende la aleta abierta, salpimienta y rellena con el jamón, la pera y las hortalizas. Enróllala, átala y dórala 4 minutos.", 8),
      S("Ponla en una bandeja con el vino y la misma cantidad de agua y hornéala a 200 °C 42 minutos. Cuela el jugo y lígalo con la maicena.", 45, 200),
      S("Saltea el ajo picado con las setas (el original usa boletus) y sirve la carne fileteada con la salsa, las setas y perejil.", 5),
    ],
  }),
  es({
    id: "pollo-bodas-camacho", title: "Pollo de las bodas de Camacho con croquetas de pan",
    origin: "España (La Mancha)", note: "Guiso inspirado en el banquete del Quijote.",
    baseServings: 4, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("pollo", 1000, "g"), I("cebolla", 1, "unit"), I("pimiento", 2, "unit"), I("ajo", 4, "unit"), I("almendras", 40, "g"), I("vino-blanco", 250, "ml"), I("caldo", 250, "ml"), I("laurel", 2, "unit"), I("pan", 100, "g"), I("huevo", 1, "unit"), I("jamon", 40, "g"), I("aceite", 200, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Trocea el pollo, sálalo y fríelo hasta dorar. Retíralo.", 10),
      S("Fríe 2 ajos picados, la cebolla y los pimientos (rojo y verde) pelados en juliana. Añade el pollo, la pimienta en grano, el laurel y el vino, da un hervor, vierte el caldo, tapa y cuece 30 minutos.", 35),
      S("Remoja la miga de pan, escúrrela y mézclala con el huevo, el jamón picado y los otros ajos majados con perejil. Forma croquetas y fríelas.", 8),
      S("Sirve el pollo con las croquetas y las almendras laminadas tostadas."),
    ],
  }),
  es({
    id: "tournedos-cordero-boniato", title: "Lomo de cordero con puré de boniato y salsa de ciruelas y pistachos",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("cordero", 700, "g"), I("boniato", 600, "g"), I("patata", 500, "g"), I("pasas", 40, "g"), I("vino-blanco", 150, "ml"), I("chalota", 2, "unit"), I("salsa-inglesa", 30, "ml"), I("pistachos", 20, "g"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Asa los boniatos con aceite en el horno a 180 °C 20 minutos (más si son grandes), pélalos y hazlos puré. Cuece la mitad de las patatas 25 minutos y haz otro puré con aceite y sal (el original usa patata azul).", 25, 180),
      S("Rehoga las chalotas picadas, añade las ciruelas pasas (o pasas), la salsa inglesa, el vino y un poco de agua, salpimienta y reduce. Añade los pistachos picados.", 10),
      S("Corta el resto de patatas en paja, lávalas, sécalas y fríelas.", 6),
      S("Salpimienta el cordero (tournedos) y hazlo a la plancha a tu gusto. Sirve con los purés, la salsa, la patata paja y perejil.", 6),
    ],
  }),
  es({
    id: "hamburguesa-champinones-guacamole", title: "Hamburguesa con champiñones en salsa y guacamole",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("ternera-picada", 600, "g"), I("pan-hamburguesa", 4, "unit"), I("champinones", 500, "g"), I("aguacate", 2, "unit"), I("tomate", 120, "g"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("vino-blanco", 150, "ml"), I("harina", 8, "g"), I("chile", 1, "unit"), I("cilantro", 5, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Pocha una cebolleta y el ajo picados, añade la harina, la guindilla y el vino y, tras un hervor, los champiñones partidos con sal. Cuece 17 minutos y añade perejil.", 20),
      S("Mezcla los aguacates aplastados con el tomate pelado y la otra cebolleta picados, cilantro y sal.", 5),
      S("Tuesta el pan con aceite en la plancha y haz las hamburguesas (de carne salada) a tu gusto.", 6),
      S("Monta el pan con guacamole, la hamburguesa y los champiñones."),
    ],
  }),
  es({
    id: "hojaldre-conejo-champinones", title: "Hojaldre de conejo, champiñones y sobrasada",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("conejo", 600, "g"), I("champinones", 300, "g"), I("ajo", 2, "unit"), I("cebolleta", 1, "unit"), I("chorizo", 100, "g"), I("rucula", 50, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pincha el hojaldre con un tenedor y hornéalo a 180 °C 10 minutos.", 10, 180),
      S("Pocha la cebolleta, añade los champiñones picados 7 minutos con sal y después la sobrasada (o chorizo blando); extiéndelo sobre el hojaldre.", 10),
      S("Deshuesa el conejo, córtalo en dados, salpimienta y saltéalo con el ajo picado y perejil. Ponlo encima.", 5),
      S("Hornea a 180 °C 5 minutos y sirve con la rúcula.", 5, 180),
    ],
  }),
  es({
    id: "espaldilla-asada-pimientos", title: "Espaldilla de ternera asada con pimientos y cebolleta",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["horno", "olla", "sarten"],
    ingredients: [I("ternera", 1000, "g"), I("pimiento", 2, "unit"), I("cebolleta", 1, "unit"), I("beicon", 60, "g"), I("maicena", 8, "g"), I("vino-blanco", 100, "ml"), I("oregano", 2, "g"), I("tomillo", 2, "g"), I("romero", 1, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta la espaldilla, hazle 3 cortes y mete el beicon y el romero. Átala, rocía con aceite, el vino (Jerez en el original) y un poco de agua, espolvorea tomillo y orégano y hornéala a 200 °C 30 minutos.", 30, 200),
      S("Hierve el jugo de la bandeja y lígalo con la maicena. Añade perejil.", 4),
      S("Saltea los pimientos rojos pelados en trozos con la cebolleta en juliana gruesa y sal.", 8),
      S("Sirve la carne fileteada con la salsa y los pimientos."),
    ],
  }),
  es({
    id: "osobuco-cerdo-salsa", title: "Osobuco de cerdo en salsa con champiñones",
    baseServings: 4, prepMin: 15, cookMin: 90, difficulty: "easy", equipment: ["sarten", "batidora", "olla"],
    ingredients: [I("cerdo", 1200, "g"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("ajo", 5, "unit"), I("champinones", 300, "g"), I("vino-blanco", 200, "ml"), I("harina", 30, "g"), I("caldo", 500, "ml"), I("chile", 1, "unit"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta las rodajas de osobuco de cerdo, enharínalas y fríelas por los dos lados.", 8),
      S("Dora 3 ajos, la cebolla y el pimiento verde picados, añade la mitad del vino, tritura y viértelo sobre la carne con el caldo. Tapa y cuece 75 minutos a fuego suave, dándole la vuelta a mitad.", 80),
      S("Saltea los otros ajos picados con la guindilla y los champiñones partidos, añade el resto del vino y agrégalo al guiso. Sirve con perejil.", 6),
    ],
  }),
  es({
    id: "carne-picada-berenjena-bechamel", title: "Carne picada con berenjena y bechamel gratinada",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("ternera-picada", 800, "g"), I("berenjena", 600, "g"), I("ajo", 6, "unit"), I("cebolleta", 1, "unit"), I("zanahoria", 100, "g"), I("apio", 40, "g"), I("aceitunas", 40, "g"), I("tomate-triturado", 150, "g"), I("vino-tinto", 50, "ml"), I("leche", 600, "ml"), I("harina", 40, "g"), I("queso", 70, "g"), I("nuez-moscada", 1, "g"), I("aceite", 80, "ml"), I("perejil", 3, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Asa las berenjenas en láminas con sal y aceite en el horno a 180 °C 15 minutos.", 15, 180),
      S("Pocha la cebolleta, los ajos (frescos), el apio y la zanahoria picados 10 minutos, añade la carne salpimentada, las aceitunas en aros, el vino y el tomate y cuece 6 minutos.", 18),
      S("Haz una bechamel con aceite, la harina y la leche, con sal y nuez moscada, 8 minutos.", 8),
      S("Alterna en una fuente berenjena y carne, cubre con la bechamel y el queso rallado y gratina en el horno. Sirve con perejil.", 6, 220),
    ],
  }),
  es({
    id: "pierna-cordero-miel", title: "Cordero a la miel con almendras y cuscús",
    baseServings: 4, prepMin: 15, cookMin: 60, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("cordero", 700, "g"), I("cuscus", 150, "g"), I("pimiento", 1, "unit"), I("cebolla", 2, "unit"), I("almendras", 40, "g"), I("miel", 50, "g"), I("caldo", 500, "ml"), I("vino-blanco", 130, "ml"), I("vinagre", 20, "ml"), I("romero", 1, "g"), I("pimenton", 4, "g"), I("canela", 1, "g"), I("azafran", 0.1, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora las almendras y májalas. Salpimienta las piernas de cordero y séllalas; retíralas.", 8),
      S("Fríe la cebolla y el pimiento verde picados, devuelve la carne y añade el azafrán, el pimentón, el romero, la canela, el vino, el caldo y las almendras. Tapa y cuece 40 minutos.", 45),
      S("Añade la miel y el vinagre y cuece 10 minutos más.", 10),
      S("Hidrata el cuscús con 150 ml de agua hirviendo con sal, tapado. Sirve el cordero con el cuscús y perejil.", 5),
    ],
  }),
  es({
    id: "redondo-cerveza-peras", title: "Redondo de ternera a la cerveza con salsa de pera",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("ternera", 900, "g"), I("panceta", 80, "g"), I("pera", 2, "unit"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("cerveza", 500, "ml"), I("patata", 600, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas pequeñas con piel en agua con sal 25 minutos.", 25),
      S("Mecha el redondo con tiras de panceta (tocino), salpimiéntalo, séllalo a fuego fuerte y cuécelo tapado 25 minutos dándole vueltas.", 28),
      S("Mientras, pocha la cebolleta y el puerro, añade las peras peladas en trozos y la cerveza y cuece 20 minutos. Tritura y añade perejil."),
      S("Sirve la carne en filetes finos con la salsa y las patatas."),
    ],
  }),
  es({
    id: "conejo-al-limon", title: "Conejo al limón con aceitunas, hinojo y cuscús",
    cuisine: "marroqui", origin: "Marruecos (versión de Arguiñano)", authenticity: "adapted",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("conejo", 1200, "g"), I("cuscus", 150, "g"), I("cebolla", 2, "unit"), I("ajo", 4, "unit"), I("hinojo", 1, "unit"), I("limon", 1, "unit"), I("aceitunas", 60, "g"), I("caldo", 500, "ml"), I("azafran", 0.1, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta los muslos y paletillas de conejo y dóralos; retíralos.", 8),
      S("Rehoga la cebolla, el ajo y el hinojo en daditos hasta dorar. Añade el azafrán, el limón en trozos, las aceitunas verdes, el conejo y el caldo. Tapa y cuece 27 minutos.", 35),
      S("Vierte 200 ml de agua hirviendo con sal sobre el cuscús, tápalo y deja que la absorba. Sirve con perejil.", 5),
    ],
  }),
  es({
    id: "carne-guisada-patatas", title: "Carne guisada con patatas",
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 700, "g"), I("patata", 400, "g"), I("cebolla", 1, "unit"), I("zanahoria", 400, "g"), I("pimiento", 1, "unit"), I("ajo", 4, "unit"), I("vino-tinto", 100, "ml"), I("caldo", 300, "ml"), I("aceite", 200, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta la ternera en dados grandes, salpimienta y dórala; retírala.", 8),
      S("Pocha el ajo, la cebolla, 2 zanahorias y el pimiento verde en daditos. Añade la carne y el vino, da un hervor, vierte el caldo, tapa y cuece 40 minutos.", 45),
      S("Mientras, cuece el resto de zanahorias en rodajas y fríe las patatas en dados."),
      S("Añade las zanahorias y las patatas al guiso, dale un hervor y sirve con perejil.", 3),
    ],
  }),
  es({
    id: "cuscus-conejo-naranja", title: "Cuscús con conejo y naranja",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("conejo", 800, "g"), I("cuscus", 250, "g"), I("puerro", 1, "unit"), I("ajo", 4, "unit"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("naranja", 1, "unit"), I("romero", 1, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Deshuesa los muslos de conejo y pica la carne. Rehoga los huesos con el puerro y lo verde de la cebolleta, cubre con agua, sala, añade perejil y cuece 15 minutos. Cuela.", 18),
      S("Fríe el conejo salpimentado con el romero.", 6),
      S("Rehoga 2 ajos y la cebolleta picados con el pimiento verde en dados, añade el conejo, el cuscús y el mismo volumen de caldo caliente; tapa y deja reposar 5 minutos.", 8),
      S("Sirve con la naranja pelada en gajos, los otros ajos laminados y fritos y perejil.", 2),
    ],
  }),
  es({
    id: "costilla-cerdo-champinones-mostaza", title: "Costilla de cerdo a la mostaza con champiñones al tomillo",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("costillas-cerdo", 1000, "g"), I("champinones", 400, "g"), I("mostaza", 75, "g"), I("ajo", 2, "unit"), I("tomillo", 2, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Macera los sombreros de champiñón con el ajo picado, el tomillo, sal y aceite 10 minutos.", 10),
      S("Cuece la costilla en 4 trozos cubierta de agua con sal y perejil 35 minutos (10 en olla rápida). Escúrrela.", 35),
      S("Úntala con la mostaza (antigua) y ásala en el horno a 220 °C 5 minutos por lado.", 10, 220),
      S("Haz los champiñones con su marinada en la sartén tapada 3 minutos por lado y sirve.", 6),
    ],
  }),
  es({
    id: "carrilleras-cerdo-vino-tinto", title: "Carrilleras de cerdo al vino tinto con puré y chalotas confitadas",
    baseServings: 4, prepMin: 25, cookMin: 120, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("cerdo", 1000, "g"), I("patata", 1000, "g"), I("chalota", 12, "unit"), I("zanahoria", 100, "g"), I("cebolla", 1, "unit"), I("berenjena", 300, "g"), I("pasas", 40, "g"), I("ajo", 3, "unit"), I("caldo", 500, "ml"), I("vino-tinto", 250, "ml"), I("maicena", 30, "g"), I("aceite", 250, "ml"), I("perejil", 3, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Limpia las carrilleras de cerdo, salpimienta, pásalas por maicena y fríelas.", 10),
      S("Rehoga el ajo, la cebolla, la zanahoria y la berenjena picados con las ciruelas (o pasas), añade las carrilleras, el vino y el caldo y cuece tapado 90 minutos (35 en olla rápida). Saca la carne y tritura la salsa.", 95),
      S("Mientras, cuece las patatas 30 minutos, pásalas por el pasapurés con aceite, sal y perejil. Confita las chalotas en aceite a fuego suave 20 minutos (el original añade castañas)."),
      S("Sirve las carrilleras con la salsa, el puré y las chalotas.", 3),
    ],
  }),
  es({
    id: "villeroy-redondo-pavo-queso", title: "Filetes Villeroy de ternera, pavo y queso",
    baseServings: 8, prepMin: 120, cookMin: 35, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 800, "g"), I("pavo", 200, "g"), I("queso", 200, "g"), I("leche", 1300, "ml"), I("harina", 180, "g"), I("tomate-triturado", 300, "g"), I("huevo", 3, "unit"), I("pan-rallado", 200, "g"), I("aceite", 500, "ml"), I("perejil", 3, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta los filetes finos de redondo y fríelos un momento a fuego fuerte. Escúrrelos.", 6),
      S("Haz una bechamel espesa con 130 ml de aceite, 130 g de harina y la leche, con sal, 10 minutos.", 12),
      S("Cubre cada filete con una loncha de queso y pavo, nápalo por los dos lados con bechamel sobre una bandeja untada y deja enfriar 2 horas en la nevera.", 120),
      S("Pásalos por harina, huevo y pan rallado, fríelos y sírvelos con la salsa de tomate caliente y perejil.", 12),
    ],
  }),
  es({
    id: "espaldilla-salsa-espanola-patatas", title: "Filetes de ternera empanados con salsa española y patatas",
    baseServings: 4, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 800, "g"), I("patata", 400, "g"), I("ajo", 4, "unit"), I("pan-rallado", 100, "g"), I("cebolla", 2, "unit"), I("zanahoria", 100, "g"), I("pimiento", 1, "unit"), I("tomate-triturado", 100, "g"), I("vino-blanco", 100, "ml"), I("caldo", 500, "ml"), I("harina", 8, "g"), I("aceite", 300, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha 2 ajos, las cebollas, la zanahoria y el pimiento verde picados, añade 200 g de la ternera en trocitos y la harina, el tomate, el vino y el caldo y reduce 22 minutos. Pasa por el pasapurés.", 30),
      S("Fríe las patatas en dados, sálalas y espolvorea perejil.", 8),
      S("Salpimienta el resto de la ternera en filetes (espaldilla), pásalos por pan rallado mezclado con los otros ajos y perejil picados, y fríelos.", 6),
      S("Sirve con la salsa española y las patatas."),
    ],
  }),
  es({
    id: "albondigas-pure-patata", title: "Albóndigas en salsa de cebolla con puré de patata",
    baseServings: 6, prepMin: 20, cookMin: 45, difficulty: "easy", equipment: ["olla", "batidora", "sarten"],
    ingredients: [I("ternera-picada", 400, "g"), I("cerdo", 400, "g"), I("patata", 600, "g"), I("pan", 40, "g"), I("huevo", 1, "unit"), I("ajo", 4, "unit"), I("cebolla", 3, "unit"), I("leche", 100, "ml"), I("caldo", 200, "ml"), I("vino-blanco", 150, "ml"), I("harina", 40, "g"), I("aceite", 150, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 30 minutos, pélalas, pásalas por el pasapurés con aceite, sal y perejil.", 30),
      S("Mientras, dora las cebollas y 3 ajos picados, añade una cucharada de harina, el caldo y el vino y reduce 10 minutos. Tritura."),
      S("Mezcla la carne picada (ternera y cerdo) con el pan remojado en leche, el huevo, el otro ajo picado, perejil, sal y pimienta. Forma albóndigas, enharínalas y fríelas.", 12),
      S("Cuécelas en la salsa 8 minutos y sírvelas con el puré.", 8),
    ],
  }),
  es({
    id: "brochetas-solomillo-melon", title: "Brochetas de solomillo de cerdo y melón con ensalada de rúcula",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("solomillo-cerdo", 800, "g"), I("melon", 0.5, "unit"), I("rucula", 100, "g"), I("setas", 50, "g"), I("vino-dulce", 200, "ml"), I("vinagre", 70, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Reduce el vino (Pedro Ximénez) con 50 ml de vinagre hasta que espese.", 12),
      S("Salpimienta los solomillos y dóralos 4 minutos en la plancha. Corta cada uno en 6 trozos. Dora el melón en rajas 2 minutos y pártelas.", 8),
      S("Monta las brochetas alternando carne y melón y hornéalas a 200 °C 5 minutos.", 5, 200),
      S("Sirve con la rúcula aliñada con aceite, vinagre y sal, las setas en láminas finas, la reducción y perejil."),
    ],
  }),
];
