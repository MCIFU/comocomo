import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 4: verduras y hortalizas. */
export const recipesArg04: Recipe[] = [
  es({
    id: "pentagrama-primaveral", title: "Pentagrama de verduras con bonito y mayonesa",
    note: "Se sirve en filas: patata, zanahoria, judías, bonito y pan frito.",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla", "batidora"],
    ingredients: [I("patata", 600, "g"), I("zanahoria", 250, "g"), I("judias-verdes", 500, "g"), I("pan", 100, "g"), I("atun-lata", 300, "g"), I("cebolleta", 1, "unit"), I("huevo", 1, "unit"), I("vinagre", 10, "ml"), I("aceite", 500, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Fríe la patata en dados en aceite con unas ramas de perejil hasta que se dore, unos 10 minutos. Fríe después el pan en medias lunas 2 minutos.", 12),
      S("Cuece la zanahoria en dados en un poco de agua con sal y, encima, al vapor, las judías verdes en dados, 12 minutos.", 12),
      S("Haz una mayonesa con el huevo, el vinagre, la sal y 200 ml de aceite, triturando con la batidora. Mézclala con el bonito (atún) desmenuzado y la cebolleta picada.", 2),
      S("Sirve en filas la patata, la zanahoria, las judías, el bonito y el pan frito, con un hilo de aceite y sal gruesa."),
    ],
  }),
  es({
    id: "rollitos-calabacin-bonito", title: "Rollitos de calabacín rellenos de bonito con espárragos y alioli",
    baseServings: 4, prepMin: 30, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("calabacin", 400, "g"), I("patata", 400, "g"), I("esparragos-verdes", 300, "g"), I("bonito", 200, "g"), I("anchoas", 20, "g"), I("alcaparras", 10, "g"), I("huevo", 1, "unit"), I("ajo", 1, "unit"), I("aceite", 240, "ml"), I("vinagre", 20, "ml"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece las patatas 30 minutos, pélalas y aplástalas. Escalda el bonito en dados 1 minuto.", 30),
      S("Corta el calabacín con mandolina en 16 láminas a lo largo y escáldalas 30 segundos."),
      S("Mezcla el puré con el bonito, las anchoas y las alcaparras picados, sal y perejil. Enróllalo en las láminas de calabacín.", 1),
      S("Haz los espárragos a la plancha 7 minutos. Tritura el huevo, el ajo, vinagre, sal y 200 ml de aceite para el alioli. Riega los rollitos con aceite y vinagre y sirve con los espárragos y el alioli.", 7),
    ],
  }),
  es({
    id: "brochetas-coles-bruselas-curry", title: "Brochetas de coles de Bruselas y beicon con salsa de curry",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("coles-bruselas", 200, "g"), I("huevo-codorniz", 8, "unit"), I("tomate-cherry", 120, "g"), I("puerro", 2, "unit"), I("beicon", 300, "g"), I("cebolleta", 1, "unit"), I("nata", 150, "ml"), I("curry", 3, "g"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece las coles de Bruselas 9 minutos y los huevos de codorniz 5. Escalda y pela los cherry. Haz el beicon en tacos a la plancha 3 minutos.", 12),
      S("Fríe el puerro en juliana muy fina en el aceite a fuego suave 6 minutos, hasta que cruja.", 6),
      S("Ensarta en cada brocheta una col, un tomate, un taco de beicon y un huevo, y hornea a 200 °C 5 minutos.", 5, 200),
      S("Pocha la cebolleta picada 4 minutos, añade el curry y la nata, sala y reduce 4 minutos. Sirve las brochetas sobre la salsa con el puerro crujiente y perejil.", 8),
    ],
  }),
  es({
    id: "sanjacobos-setas", title: "San Jacobos de setas, jamón y queso con salsa de piquillos",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("setas", 400, "g"), I("jamon", 100, "g"), I("queso", 120, "g"), I("harina", 50, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("pimientos-piquillo", 200, "g"), I("ajo", 2, "unit"), I("azucar", 3, "g"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 4, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga el ajo en un chorrito de aceite, añade los piquillos, un chorrito de agua, sal y el azúcar y cuece 15 minutos. Tritura.", 16),
      S("Salpimienta 16 setas grandes (de cultivo, tipo portobello); pon sobre 8 una loncha de queso y otra de jamón y tápalas con las otras 8."),
      S("Pásalas por harina, huevo batido y pan rallado y fríelas a 175 °C 3 minutos, hasta que se doren.", 8, 175),
      S("Sírvelas con la salsa de piquillos y perejil."),
    ],
  }),
  es({
    id: "hojas-col-rellenas-jamon-queso", title: "Hojas de col rellenas de puré, jamón y queso con salsa de oporto",
    baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "medium", equipment: ["olla", "horno"],
    ingredients: [I("repollo", 0.5, "unit"), I("jamon-cocido", 160, "g"), I("queso", 160, "g"), I("patata", 600, "g"), I("chalota", 3, "unit"), I("vino-dulce", 200, "ml"), I("leche", 50, "ml"), I("maicena", 5, "g"), I("aceite", 30, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 28 minutos, pélalas y aplástalas con la leche, un chorrito de aceite, sal y pimienta.", 28),
      S("Cuece 8 hojas grandes de col (repollo) 5 minutos en agua con sal y sécalas.", 5),
      S("Unta cada hoja con puré, pon una loncha de jamón cocido y otra de queso, enróllala y hornéalas con un chorrito de aceite a 180 °C 15 minutos.", 15, 180),
      S("Cuece las chalotas picadas en el vino dulce hasta que reduzca, 10 minutos; cuela y liga con la maicena disuelta en agua. Salsea los rollos.", 10),
    ],
  }),
  es({
    id: "timbal-verduras-bacalao", title: "Timbal de patata, pimientos y bacalao en tempura",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("tomate", 300, "g"), I("patata", 400, "g"), I("pimiento", 4, "unit"), I("ajo", 2, "unit"), I("bacalao", 400, "g"), I("harina", 100, "g"), I("maicena", 50, "g"), I("aceite", 400, "ml"), I("vinagre", 15, "ml"), I("pimenton", 2, "g"), I("perejil", 5, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece las patatas 28 minutos, pélalas y córtalas en dados. Mezcla aceite, vinagre, sal y pimentón para la vinagreta.", 28),
      S("Saltea el tomate pelado en dados 3 minutos. En otra sartén, dora el ajo laminado y cocina los pimientos verdes en dados 8 minutos.", 8),
      S("Calienta el bacalao desalado en agua hasta que hierva, cuécelo 1 minuto y sepáralo en lascas. Mezcla la harina, la maicena y 150 ml de agua fría.", 2),
      S("Reboza las lascas en esa tempura y fríelas a 180 °C 2 minutos. Monta con un aro: patata con pimientos, tomate y bacalao; aliña y espolvorea perejil.", 6, 180),
    ],
  }),
  es({
    id: "piquillos-rellenos-pollo-huevo", title: "Pimientos del piquillo rellenos de pollo y huevo",
    baseServings: 4, prepMin: 120, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("pimientos-piquillo", 330, "g"), I("pollo", 200, "g"), I("huevo", 5, "unit"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("harina", 70, "g"), I("leche", 300, "ml"), I("tomate-triturado", 300, "g"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece 3 huevos 10 minutos y pícalos. Salpimienta la pechuga de pollo, hazla a la plancha 6 minutos y pícala fina.", 10),
      S("Rehoga el ajo y la cebolleta picados 5 minutos, añade 30 g de harina, la leche poco a poco, el huevo y el pollo, y cuece 5 minutos. Enfría la farsa 1 hora y media.", 90),
      S("Rellena los 16 pimientos del piquillo, pásalos por el resto de harina y los otros 2 huevos batidos y fríelos 1 minuto por lado.", 6),
      S("Calienta el tomate 5 minutos y sirve los pimientos encima con perejil.", 5),
    ],
  }),
  es({
    id: "coliflor-patatas-alioli", title: "Coliflor al vapor con patatitas y alioli",
    note: "El original usa romanesco; con coliflor o brócoli queda igual.",
    baseServings: 4, prepMin: 10, cookMin: 20, difficulty: "easy", equipment: ["olla", "microondas"],
    ingredients: [I("coliflor", 1, "unit"), I("patata", 600, "g"), I("huevo", 1, "unit"), I("ajo", 1, "unit"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Cuece la coliflor en ramilletes al vapor, con sal, 15 minutos.", 15),
      S("Pon las patatas pequeñas en un plato tapado con film agujereado y cocínalas en el microondas 16 minutos.", 16),
      S("Para el alioli, maja el ajo con sal, añade la yema y ve incorporando el aceite poco a poco, removiendo con el mazo, hasta que ligue."),
      S("Sirve el alioli en el fondo, las patatas partidas y la coliflor, con perejil."),
    ],
  }),
  es({
    id: "judias-verdes-mayonesa-azafran", title: "Judías verdes con picatostes y mayonesa de azafrán",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("judias-verdes", 700, "g"), I("pan", 100, "g"), I("ajo", 4, "unit"), I("huevo", 1, "unit"), I("azafran", 0.1, "g"), I("vinagre", 10, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece las judías verdes en trozos en agua con sal 18 minutos y escúrrelas.", 18),
      S("Dora el ajo laminado en aceite y retíralo; fríe en ese aceite el pan en dados 2 minutos.", 4),
      S("Tuesta el azafrán unos segundos y tritúralo con el huevo, el vinagre, sal y 200 ml de aceite hasta que emulsione.", 1),
      S("Sirve las judías con los picatostes, el ajo frito, la mayonesa y perejil."),
    ],
  }),
  es({
    id: "pencas-rellenas-bonito", title: "Pencas de acelga rellenas de bonito con salsa de tomate seco",
    baseServings: 4, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("acelgas", 600, "g"), I("cebolleta", 1, "unit"), I("tomates-secos", 50, "g"), I("atun-lata", 160, "g"), I("harina", 40, "g"), I("huevo", 3, "unit"), I("vinagre", 5, "ml"), I("aceite", 500, "ml"), I("sal", 4, "g")],
    steps: [
      S("Rehoga los tomates secos en dados en un chorro de aceite, añade un vaso de agua y sal y cuece 15 minutos. Tritura y cuela.", 15),
      S("Escalda las hojas de las acelgas 1 minuto. Cuece las pencas en trozos de 7 cm 10 minutos.", 11),
      S("Haz una mayonesa con un huevo, vinagre, sal y 200 ml de aceite (tritura con la batidora) y mézclala con la cebolleta picada y el bonito (atún).", 2),
      S("Haz sándwiches de penca con el relleno, envuélvelos en las hojas, pásalos por harina y los otros 2 huevos batidos y fríelos 2 minutos. Sírvelos con la salsa.", 6),
    ],
  }),
  es({
    id: "tomates-rellenos-ventresca", title: "Tomates en acordeón con ventresca y mayonesa de ajo y alcaparras",
    baseServings: 4, prepMin: 20, cookMin: 2, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("tomate", 600, "g"), I("lechuga", 1, "unit"), I("atun-lata", 200, "g"), I("huevo", 1, "unit"), I("ajo", 1, "unit"), I("anchoas", 15, "g"), I("alcaparras", 10, "g"), I("aceite", 240, "ml"), I("vinagre", 15, "ml"), I("sal", 3, "g")],
    steps: [
      S("Pela los tomates y hazles cortes de 1 cm sin llegar a la base. Mete en cada corte una lasca de ventresca (atún)."),
      S("Tritura el ajo, el huevo, vinagre, sal y 200 ml de aceite hasta que emulsione y añade las anchoas y las alcaparras picadas.", 2),
      S("Sirve cada tomate sobre la lechuga aliñada con aceite, vinagre y sal, y cúbrelo con la mayonesa."),
    ],
  }),
  es({
    id: "coles-bruselas-pure-mostaza", title: "Coles de Bruselas salteadas con puré de queso y salsa de mostaza",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("coles-bruselas", 600, "g"), I("patata", 600, "g"), I("queso", 60, "g"), I("mostaza", 30, "g"), I("vinagre", 15, "ml"), I("azucar", 10, "g"), I("aceite", 120, "ml"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 32 minutos, pélalas, pásalas por el pasapurés y mézclalas con el queso rallado, sal y un poco de aceite.", 32),
      S("Parte las coles por la mitad y hazlas en una sartén tapada con un chorrito de aceite y sal 11 minutos.", 11),
      S("Tritura la mostaza (mejor al estragón) con el vinagre, el azúcar, la pimienta, 90 ml de aceite y una pizca de sal.", 1),
      S("Sirve el puré con las coles encima y la salsa de mostaza."),
    ],
  }),
  es({
    id: "berenjenas-rellenas-cuscus-pavo", title: "Berenjenas rellenas de cuscús y pavo gratinadas",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("berenjena", 1000, "g"), I("cebolleta", 2, "unit"), I("pavo", 125, "g"), I("queso", 150, "g"), I("cuscus", 100, "g"), I("tomillo", 1, "g"), I("laurel", 1, "unit"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Parte las berenjenas a lo largo, vacíalas y pica la pulpa. Cuece las cáscaras en agua con sal y el laurel 5 minutos.", 5),
      S("Pocha la cebolleta 5 minutos, añade la pulpa, salpimienta y rehoga 15 minutos. Añade el pavo en trocitos 1 minuto.", 21),
      S("Vierte 200 ml de agua hirviendo con sal sobre el cuscús con el tomillo, tapa 5 minutos y mézclalo con el sofrito.", 5),
      S("Rellena las berenjenas, cubre con queso rallado y gratina en el horno 4 minutos. Sirve con perejil.", 4, 220),
    ],
  }),
  es({
    id: "judias-verdes-gallega", title: "Judías verdes a la gallega con patatas y ajada",
    baseServings: 4, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("judias-verdes", 800, "g"), I("patata", 600, "g"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("ajo", 4, "unit"), I("laurel", 2, "unit"), I("pimenton", 6, "g"), I("vinagre", 15, "ml"), I("aceite", 60, "ml"), I("sal", 8, "g")],
    steps: [
      S("Cuece la patata en rodajas gruesas con el laurel, la cebolleta y el puerro en juliana (en una red o colador) en agua con sal 7 minutos.", 7),
      S("Añade las judías verdes en trozos y cuece 12 minutos más. Escurre y retira el laurel, la cebolleta y el puerro.", 12),
      S("Para la ajada, dora el ajo laminado en el aceite, retira del fuego y añade el pimentón.", 3),
      S("Sirve las patatas con las judías, el vinagre y la ajada por encima."),
    ],
  }),
  es({
    id: "verduras-plancha-dos-salsas", title: "Verduras a la plancha con vinagreta de tomate y mayonesa",
    baseServings: 4, prepMin: 15, cookMin: 12, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("calabacin", 400, "g"), I("judias-verdes", 400, "g"), I("zanahoria", 300, "g"), I("tomate", 150, "g"), I("ajo", 1, "unit"), I("huevo", 1, "unit"), I("aceite", 260, "ml"), I("vinagre", 25, "ml"), I("sal", 5, "g")],
    steps: [
      S("Mezcla el tomate pelado en daditos y el ajo picado con aceite, vinagre y sal."),
      S("Haz una mayonesa triturando el huevo con sal, vinagre y 200 ml de aceite.", 2),
      S("Corta el calabacín, las zanahorias y las judías verdes en bastones. Haz a la plancha con un chorrito de aceite las judías y la zanahoria 5 minutos y añade el calabacín 4 minutos más. Sala.", 9),
      S("Sirve las verduras con las dos salsas."),
    ],
  }),
  es({
    id: "bocados-calabacin-jamon-queso", title: "Bocados fritos de calabacín, jamón y queso con salsa de pimiento",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["sarten", "batidora"],
    ingredients: [I("calabacin", 500, "g"), I("jamon-cocido", 175, "g"), I("queso", 120, "g"), I("pimiento", 1, "unit"), I("ajo", 2, "unit"), I("harina", 50, "g"), I("huevo", 2, "unit"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 4, "g")],
    steps: [
      S("Dora el ajo picado, añade el pimiento rojo picado, sala y cocina 10 minutos. Añade un poco de agua, reduce y tritura.", 12),
      S("Corta el calabacín en láminas oblicuas de medio centímetro. Haz montaditos con media loncha de jamón cocido y media de queso entre dos láminas."),
      S("Sálalos, pásalos por harina y huevo batido y fríelos a 175 °C 2 minutos por lado.", 10, 175),
      S("Sírvelos con la salsa de pimiento y perejil."),
    ],
  }),
  es({
    id: "brocoli-mejillones-salsa-verde", title: "Brócoli y mejillones en salsa verde",
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("brocoli", 2, "unit"), I("mejillones", 1000, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("vino-blanco", 150, "ml"), I("harina", 10, "g"), I("aceite", 40, "ml"), I("perejil", 10, "g"), I("sal", 4, "g")],
    steps: [
      S("Cuece el brócoli en ramilletes al vapor con sal 9 minutos.", 9),
      S("Abre los mejillones limpios en una cazuela tapada con un chorrito de agua y 50 ml de vino, 4 minutos. Quítales la concha y cuela el jugo.", 4),
      S("Dora el ajo picado, añade la cebolleta picada y cocina 5 minutos. Rehoga la harina y añade el jugo y el resto del vino; da un hervor con perejil picado.", 6),
      S("Añade el brócoli y los mejillones, calienta 2 minutos y sirve.", 2),
    ],
  }),
  es({
    id: "repollo-zanahoria-morcilla", title: "Repollo con zanahoria, refrito de ajos y morcilla",
    baseServings: 4, prepMin: 10, cookMin: 40, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("repollo", 1, "unit"), I("zanahoria", 250, "g"), I("morcilla", 350, "g"), I("ajo", 3, "unit"), I("chile", 0.5, "unit"), I("vinagre", 15, "ml"), I("aceite", 50, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece la morcilla a fuego muy suave, sin que hierva, 35 minutos.", 35),
      S("Cuece el repollo troceado con la zanahoria en rodajas en agua con sal 20 minutos y escurre.", 20),
      S("Dora el ajo laminado con el chile en el aceite, retira del fuego y añade el vinagre.", 3),
      S("Riega el repollo con el refrito y sírvelo con la morcilla en rodajas."),
    ],
  }),
  es({
    id: "coles-bruselas-bechamel-mostaza", title: "Coles de Bruselas con bechamel de mostaza en costra crujiente",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "medium", equipment: ["olla", "horno"],
    ingredients: [I("coles-bruselas", 800, "g"), I("pasta-brick", 4, "unit"), I("huevo", 1, "unit"), I("sesamo", 8, "g"), I("harina", 50, "g"), I("leche", 600, "ml"), I("mostaza", 20, "g"), I("nuez-moscada", 1, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece las coles de Bruselas en agua con sal 15 minutos y repártelas en 4 cazuelitas.", 15),
      S("Haz una bechamel con el aceite, la harina y la leche, 6 minutos; añade nuez moscada, sal y la mostaza (mejor antigua).", 8),
      S("Cubre las coles con la bechamel y tápalas con la pasta brick recortada y pintada con huevo; espolvorea sésamo.", 2),
      S("Hornea a 180 °C 15 minutos y sirve con perejil.", 15, 180),
    ],
  }),
  es({
    id: "piquillos-rellenos-morcilla", title: "Pimientos del piquillo rellenos de morcilla y manzana",
    baseServings: 4, prepMin: 90, cookMin: 35, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("pimientos-piquillo", 330, "g"), I("morcilla", 200, "g"), I("puerro", 1, "unit"), I("cebolleta", 1, "unit"), I("manzana", 1, "unit"), I("leche", 250, "ml"), I("harina", 30, "g"), I("tomate-triturado", 200, "g"), I("vino-dulce", 200, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Reduce el tomate con el vino dulce (mejor Oporto) a fuego medio 15 minutos.", 15),
      S("Pocha la cebolleta y el puerro picados 8 minutos, añade la manzana picada 3 minutos y el interior de la morcilla 2 minutos.", 13),
      S("Rehoga la harina, añade la leche poco a poco y cuece 5 minutos. Deja enfriar la farsa 1 hora.", 65),
      S("Rellena los 16 pimientos del piquillo y hornéalos a 190 °C 5 minutos. Píntalos con aceite y sírvelos con la salsa y perejil.", 5, 190),
    ],
  }),
  es({
    id: "rollitos-col-morcilla", title: "Rollitos de col rellenos de morcilla y verduras",
    baseServings: 6, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["sarten", "olla", "horno", "batidora"],
    ingredients: [I("repollo", 0.5, "unit"), I("morcilla", 400, "g"), I("puerro", 1, "unit"), I("calabacin", 250, "g"), I("tomate", 150, "g"), I("cebolleta", 1, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 50, "ml"), I("soja", 50, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 3, "g")],
    steps: [
      S("Saltea el ajo laminado y la cebolleta a fuego fuerte 4 minutos, añade el tomate 3 minutos, el vino, la soja y un vaso de agua y reduce 8 minutos. Tritura y cuela.", 15),
      S("Pocha el puerro y el calabacín en taquitos 10 minutos y añade el interior de la morcilla (mejor de arroz) 2 minutos.", 12),
      S("Escalda 6 hojas grandes de col (repollo), pártelas por la mitad, rellénalas y enróllalas.", 2),
      S("Hornéalas con un chorrito de aceite a 200 °C 7 minutos y sírvelas sobre la salsa con perejil.", 7, 200),
    ],
  }),
  es({
    id: "brocoli-patatas-queso", title: "Cazuelitas de brócoli sobre crema de patata, gratinadas",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["horno", "olla", "sarten", "batidora"],
    ingredients: [I("brocoli", 1, "unit"), I("patata", 600, "g"), I("queso", 100, "g"), I("jamon", 60, "g"), I("cebolleta", 1, "unit"), I("puerro", 1, "unit"), I("huevo", 2, "unit"), I("leche", 100, "ml"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Hornea el jamón entre dos papeles a 180 °C 13 minutos para que quede crujiente.", 13, 180),
      S("Cuece el brócoli en ramilletes al vapor con sal 12 minutos.", 12),
      S("Fríe la cebolleta, el puerro y la patata como para tortilla, a fuego medio, 18 minutos. Escurre y tritura con los huevos y la leche.", 18),
      S("Reparte la crema en cazuelitas, pon el brócoli encima, cubre con queso y gratina en el horno 5 minutos. Sirve con el jamón crujiente y perejil.", 5, 220),
    ],
  }),
  es({
    id: "piquillos-rellenos-tortilla", title: "Pimientos del piquillo rellenos de tortilla de patata y morcilla",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "medium", equipment: ["sarten", "olla", "horno", "batidora"],
    ingredients: [I("pimientos-piquillo", 440, "g"), I("patata", 500, "g"), I("huevo", 2, "unit"), I("cebolleta", 1, "unit"), I("morcilla", 200, "g"), I("ajo", 3, "unit"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 5, "g")],
    steps: [
      S("Fríe la patata en medias lunas con la cebolleta y el ajo picados a fuego medio 20 minutos. Saltea aparte el interior de la morcilla 3 minutos.", 20),
      S("Escurre las patatas, tritúralas con los huevos, añade la morcilla y sala. Rellena 16 pimientos del piquillo.", 2),
      S("Para la salsa, saltea otros 4 pimientos a fuego fuerte, añade un poco de agua y sal, reduce 10 minutos y tritura.", 10),
      S("Hornea los pimientos rellenos a 180 °C 10 minutos y sírvelos sobre la salsa, pintados con aceite y con perejil.", 10, 180),
    ],
  }),
  es({
    id: "gratinado-calabacin-romero", title: "Gratinado de calabacín al romero con bechamel de jamón",
    baseServings: 6, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["sarten", "olla", "horno"],
    ingredients: [I("calabacin", 1000, "g"), I("cebolleta", 2, "unit"), I("queso", 125, "g"), I("romero", 1, "g"), I("jamon", 60, "g"), I("harina", 50, "g"), I("leche", 500, "ml"), I("leche-evaporada", 250, "ml"), I("nuez-moscada", 1, "g"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Pocha la cebolleta en dados y el calabacín en cuartos de luna con sal y el romero 15 minutos. Escurre y pasa a una fuente.", 15),
      S("Rehoga el jamón en daditos, añade la harina y luego las dos leches; salpimienta, añade nuez moscada y perejil y cuece 6 minutos.", 8),
      S("Cubre el calabacín con la bechamel, ralla el queso (mejor Idiazábal) por encima y gratina en el horno 8 minutos.", 8, 220),
    ],
  }),
  es({
    id: "albondigas-espinacas-queso", title: "Albóndigas de espinacas, queso y piñones en salsa de tomate",
    authenticity: "adapted", note: "El original liga la masa con copos de puré de patata.",
    baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("espinacas", 1500, "g"), I("queso", 100, "g"), I("pinones", 40, "g"), I("tomate", 600, "g"), I("ajo", 5, "unit"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("pan-rallado", 40, "g"), I("aceite", 400, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Dora el ajo picado, añade el tomate pelado y troceado, sala y cocina a fuego suave 20 minutos.", 20),
      S("Cuece las espinacas con sal 5 minutos, escúrrelas muy bien apretando y pícalas.", 5),
      S("Mézclalas con el queso (mejor Idiazábal) rallado, los piñones y el pan rallado y forma bolitas."),
      S("Pásalas por harina y huevo batido, fríelas a 175 °C 3 minutos y sírvelas sobre la salsa con perejil.", 8, 175),
    ],
  }),
  es({
    id: "judias-verdes-pure-huevo-escalfado", title: "Judías verdes con puré de patata y jamón y huevo escalfado",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("judias-verdes", 500, "g"), I("patata", 700, "g"), I("jamon", 60, "g"), I("huevo", 4, "unit"), I("tomate", 150, "g"), I("zanahoria", 100, "g"), I("vinagre", 20, "ml"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 30 minutos y pásalas por el pasapurés. Mézclalas con el tomate picado y escurrido, el jamón picado, perejil, aceite, sal y pimienta.", 30),
      S("Cuece las judías verdes en tiras al vapor 15 minutos.", 15),
      S("Fríe la zanahoria en bastones finos en tandas hasta que cruja, 4 minutos.", 4),
      S("Escalfa los huevos en agua con el vinagre 3 minutos. Monta el puré, las judías y el huevo, con la zanahoria crujiente.", 3),
    ],
  }),
  es({
    id: "acelgas-higos-nueces", title: "Acelgas guisadas con higos y nueces sobre puré",
    baseServings: 4, prepMin: 20, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("acelgas", 1000, "g"), I("higos", 120, "g"), I("nueces", 40, "g"), I("patata", 600, "g"), I("ajo", 2, "unit"), I("cebolleta", 2, "unit"), I("tomate", 250, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 25 minutos y haz un puré con aceite, sal y pimienta.", 25),
      S("Cuece las acelgas (pencas en dados y hojas picadas) en agua con sal 10 minutos y escúrrelas.", 10),
      S("Pocha el ajo y la cebolleta picados 6 minutos, añade los higos picados (secos o frescos) y el tomate rallado y cocina 10 minutos. Añade las acelgas 3 minutos.", 19),
      S("Sirve el puré con las acelgas encima, las nueces tostadas en seco y perejil.", 2),
    ],
  }),
  es({
    id: "pastel-esparragos-setas-pavo", title: "Pastel de espárragos, setas y pavo",
    baseServings: 6, prepMin: 20, cookMin: 55, difficulty: "medium", equipment: ["horno", "sarten", "batidora"],
    ingredients: [I("esparragos-verdes", 300, "g"), I("pavo", 160, "g"), I("setas", 500, "g"), I("pan", 250, "g"), I("cebolleta", 4, "unit"), I("leche", 150, "ml"), I("nata", 150, "ml"), I("huevo", 4, "unit"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Forra un molde alargado con papel de horno aceitado. Pocha 2 cebolletas, los espárragos en rodajas y las setas en tiras 7 minutos.", 7),
      S("Bate los huevos con la leche y la nata, salpimienta y añade el pavo picado y las verduras.", 2),
      S("Vierte en el molde y hornea a 160 °C 40 minutos. Tuesta rebanadas de pan.", 40, 160),
      S("Pocha las otras 2 cebolletas hasta que se doren, añade un vaso de agua y sal, reduce 6 minutos y tritura. Sirve el pastel en porciones con la salsa, el pan y perejil.", 8),
    ],
  }),
  es({
    id: "coliflor-brocoli-escabeche", title: "Coliflor y brócoli en escabeche con puré",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("coliflor", 1, "unit"), I("brocoli", 1, "unit"), I("pan", 160, "g"), I("patata", 400, "g"), I("boniato", 300, "g"), I("vinagre", 150, "ml"), I("vino-blanco", 150, "ml"), I("aceite", 320, "ml"), I("ajo", 10, "unit"), I("laurel", 2, "unit"), I("romero", 1, "g"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Cuece la patata y el boniato 25 minutos y haz un puré con un chorrito de aceite, sal y pimienta.", 25),
      S("Cuece la coliflor y el brócoli en ramilletes 10 minutos.", 10),
      S("Para el escabeche, calienta el vinagre, el vino y 300 ml de aceite con el romero, el laurel, la pimienta en grano y los ajos sin pelar 10 minutos. Mete las verduras y cuece tapado 10 minutos más.", 20),
      S("Tuesta el pan en el horno y úntalo con los ajos del escabeche. Sirve las verduras sobre el puré, regadas con el escabeche y con perejil.", 5, 200),
    ],
  }),
  es({
    id: "pencas-rellenas-pavo-setas", title: "Pencas de acelga rellenas de setas y pavo en salsa verde",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("acelgas", 800, "g"), I("pavo", 80, "g"), I("setas", 200, "g"), I("ajo", 3, "unit"), I("harina", 50, "g"), I("huevo", 2, "unit"), I("aceite", 300, "ml"), I("perejil", 10, "g"), I("sal", 5, "g")],
    steps: [
      S("Separa las pencas de las hojas de las acelgas, córtalas en trozos y cuécelas 15 minutos.", 15),
      S("Haz las setas a la plancha y píntalas con un aceite de ajo picado.", 4),
      S("Haz sándwiches de penca con una seta y una loncha de pavo, pásalos por harina y huevo batido y fríelos 1 minuto por lado.", 6),
      S("Dora el resto del ajo laminado, rehoga una cucharada de harina, añade una hoja de acelga picada, agua y perejil, y cuece las pencas en la salsa 4 minutos.", 6),
    ],
  }),
];
