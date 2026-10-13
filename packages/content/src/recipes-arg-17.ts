import type { Recipe } from "@comocomo/schemas";
import { arg as es } from "./fuentes";
import { I, S } from "./helpers";

/** Arguiñano, bloque 17: guisos de carne, conejo y pavo. */
export const recipesArg17: Recipe[] = [
  es({
    id: "carrilleras-ternera-pure-setas", title: "Carrilleras de ternera con puré de patatas, setas y ajetes",
    baseServings: 4, prepMin: 15, cookMin: 130, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("ternera", 900, "g"), I("puerro", 1, "unit"), I("cebolla", 1, "unit"), I("patata", 450, "g"), I("setas", 150, "g"), I("ajo", 8, "unit"), I("maicena", 8, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora la cebolla en dados y el puerro en cilindros, añade las carrilleras (de ternera) salpimentadas, cubre con agua, sala y cuece tapado 2 horas (40 minutos en olla rápida).", 110),
      S("Saca la carne. Cuece las patatas cascadas en la mitad del caldo 13 minutos y pásalas por el pasapurés.", 13),
      S("Reduce el resto del caldo y lígalo con la maicena. Saltea los ajos frescos en cilindros con las setas (el original usa perretxikos).", 6),
      S("Sirve las carrilleras con la salsa, el puré, las setas y perejil."),
    ],
  }),
  es({
    id: "carrilleras-ternera-polenta", title: "Carrilleras de ternera al vino con polenta y manzana",
    baseServings: 6, prepMin: 20, cookMin: 120, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 1000, "g"), I("polenta", 200, "g"), I("cebolla", 2, "unit"), I("zanahoria", 100, "g"), I("pimiento", 1, "unit"), I("manzana", 1, "unit"), I("vino-dulce", 250, "ml"), I("harina", 30, "g"), I("pimenton", 2, "g"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Limpia las carrilleras de ternera, salpimienta, enharina y dóralas. Córtalas en filetes.", 10),
      S("Pocha la cebolla y el pimiento verde en dados y la zanahoria rallada. Añade la carne, el pimentón, el vino (oporto) y 400 ml de agua y cuece tapado 100 minutos (40 en olla rápida).", 100),
      S("Saltea la manzana en trocitos. Cuece la polenta en el agua que indique el paquete con sal, mézclala con la manzana y perejil.", 8),
      S("Sirve las carrilleras con su salsa sobre la polenta."),
    ],
  }),
  es({
    id: "guiso-cordero-verduras", title: "Guiso de cordero con verduras y puré",
    baseServings: 6, prepMin: 20, cookMin: 70, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("cordero", 900, "g"), I("patata", 600, "g"), I("cebolla", 2, "unit"), I("ajo", 3, "unit"), I("pimiento", 2, "unit"), I("zanahoria", 300, "g"), I("guisantes", 100, "g"), I("habas", 100, "g"), I("vino-blanco", 400, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 30 minutos, pélalas y haz un puré con aceite y sal. Cuece las zanahorias torneadas 15 minutos.", 30),
      S("Salpimienta el cordero, dóralo y retíralo. Rehoga el ajo, la cebolla y los pimientos verdes picados.", 12),
      S("Añade el vino (txakoli en el original), un hervor, el cordero y agua hasta cubrir; cuece tapado 50 minutos (20 en olla rápida). Añade los guisantes, las habitas (habas) y las zanahorias los últimos 6 minutos.", 50),
      S("Sirve el guiso con el puré y perejil."),
    ],
  }),
  es({
    id: "conejo-patatas-panadera-naranja", title: "Muslos de conejo en caldo de naranja con patatas panadera",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["batidora", "olla", "sarten"],
    ingredients: [I("conejo", 800, "g"), I("patata", 500, "g"), I("cebolleta", 1, "unit"), I("ajo", 1, "unit"), I("naranja", 1, "unit"), I("caldo", 1000, "ml"), I("vino-blanco", 100, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Tritura el zumo de la naranja con el vino y el ajo y añádelo al caldo caliente.", 3),
      S("Salpimienta los muslos de conejo, dóralos y cuécelos en el caldo 10 minutos.", 16),
      S("Fríe la cebolleta en juliana y las patatas en rodajas 15 minutos y escúrrelas.", 15),
      S("Pon las patatas en una cazuela, el conejo encima con un poco de caldo y cuece 5 minutos más. Sirve con perejil.", 5),
    ],
  }),
  es({
    id: "rancho-aragones", title: "Rancho aragonés",
    origin: "España (Aragón)",
    baseServings: 6, prepMin: 15, cookMin: 60, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("costillas-cerdo", 500, "g"), I("conejo", 300, "g"), I("cordero", 400, "g"), I("chorizo", 200, "g"), I("patata", 600, "g"), I("ajo", 6, "unit"), I("arroz", 75, "g"), I("aceite", 40, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta el cuello de cordero y dóralo; retíralo. Dora 4 ajos enteros, añade la costilla y el conejo salpimentados y dóralos.", 12),
      S("Añade el chorizo en rodajas, el cordero y las patatas cascadas, cubre de agua, sala, tapa y cuece 30 minutos. Desgrasa.", 30),
      S("Añade el arroz y los otros 2 ajos majados con perejil y cuece 19 minutos más.", 19),
    ],
  }),
  es({
    id: "conejo-en-salsa", title: "Conejo en salsa con patatas",
    note: "El original liga la salsa con el hígado del conejo.",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("conejo", 1200, "g"), I("patata", 400, "g"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("ajo", 4, "unit"), I("brandy", 100, "ml"), I("harina", 30, "g"), I("laurel", 1, "unit"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Trocea el conejo, salpimienta, enharina y fríelo en la cazuela; retíralo.", 10),
      S("Pocha el ajo laminado, la cebolla y el pimiento verde en dados con la pimienta en grano y el laurel.", 12),
      S("Añade el conejo, flambea con el brandy, añade un poco de agua, tapa y guisa 20 minutos.", 20),
      S("Fríe las patatas en dados y añádelas al final. Sirve con perejil.", 8),
    ],
  }),
  es({
    id: "solomillo-cerdo-salsa-setas-cerveza", title: "Solomillo de cerdo en salsa de setas y cerveza con bolitas de calabacín",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "batidora", "horno"],
    ingredients: [I("solomillo-cerdo", 800, "g"), I("setas", 400, "g"), I("cebolla", 2, "unit"), I("ajo", 2, "unit"), I("calabacin", 400, "g"), I("cerveza", 300, "ml"), I("caldo", 200, "ml"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta los solomillos partidos por la mitad y dóralos; retíralos.", 8),
      S("Saca bolitas de calabacín y cuécelas al vapor 5 minutos.", 5),
      S("Pocha el ajo y la cebolla picados con la mitad de las setas picadas, añade la cerveza, el jugo de la carne y el caldo y reduce 15 minutos. Tritura.", 20),
      S("Pon la salsa en una fuente con los solomillos, las bolitas y el resto de setas y hornea a 180 °C 8 minutos. Sirve con perejil.", 8, 180),
    ],
  }),
  es({
    id: "albondigas-rellenas-queso-patatas-paja", title: "Albóndigas rellenas de queso con patatas paja",
    baseServings: 4, prepMin: 25, cookMin: 25, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 800, "g"), I("queso", 100, "g"), I("pimientos-piquillo", 40, "g"), I("cebolleta", 2, "unit"), I("huevo", 1, "unit"), I("patata", 400, "g"), I("pan", 60, "g"), I("leche", 100, "ml"), I("harina", 40, "g"), I("aceite", 300, "ml"), I("perejil", 5, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Rehoga las cebolletas y los piquillos picados.", 8),
      S("Mezcla la carne con el pan remojado en leche y escurrido, el huevo, el sofrito, sal, pimienta y perejil.", 5),
      S("Envuelve un dado de queso con cada porción de masa, pasa las albóndigas por harina y fríelas.", 10),
      S("Fríe las patatas cortadas en paja y sálalas. Sirve juntas.", 8),
    ],
  }),
  es({
    id: "hojas-col-rellenas", title: "Hojas de col rellenas de carne en salsa de tomate",
    baseServings: 4, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["olla", "sarten", "horno"],
    ingredients: [I("repollo", 0.5, "unit"), I("ternera-picada", 200, "g"), I("cerdo", 200, "g"), I("patata", 200, "g"), I("cebolleta", 1, "unit"), I("ajo", 3, "unit"), I("tomate-triturado", 400, "g"), I("cerveza", 100, "ml"), I("pasas", 30, "g"), I("nueces", 30, "g"), I("maicena", 8, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece la patata 30 minutos y pélala. Remoja las pasas.", 30),
      S("Mientras, escalda 8 hojas de col (repollo) 6 minutos y sécalas. Pocha el ajo y la cebolleta, añade la carne salpimentada, la cerveza, las pasas y 300 g de tomate y cuece 9 minutos."),
      S("Mezcla con la patata aplastada y las nueces picadas, rellena las hojas y ciérralas en paquetes.", 8),
      S("Ponlas en una fuente con el resto del tomate ligado con la maicena y hornéalas a 180 °C 10 minutos. Sirve con perejil.", 10, 180),
    ],
  }),
  es({
    id: "filetes-empanados-coles-bruselas", title: "Filetes empanados con coles de Bruselas y ensalada",
    baseServings: 4, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera", 600, "g"), I("lechuga", 1, "unit"), I("cebolleta", 1, "unit"), I("coles-bruselas", 500, "g"), I("ajo", 4, "unit"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("pimenton", 2, "g"), I("vinagre", 15, "ml"), I("aceite", 300, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Aplasta los filetes de redondo (ternera), salpimienta y pásalos por harina, huevo y pan rallado.", 8),
      S("Cocina las coles de Bruselas partidas en la sartén con aceite 12 minutos, con sal.", 12),
      S("Fríe los filetes con los ajos aplastados y espolvorea pimentón al servir.", 6),
      S("Acompaña con la lechuga y la cebolleta en juliana aliñadas con aceite, vinagre y sal."),
    ],
  }),
  es({
    id: "chuletas-cerdo-pure-manzana-setas", title: "Chuletas de cerdo con puré de manzana y saquitos de setas",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("cerdo", 900, "g"), I("pasta-brick", 3, "unit"), I("setas", 200, "g"), I("cebolleta", 1, "unit"), I("ajo", 2, "unit"), I("manzana", 4, "unit"), I("mostaza", 15, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cocina las manzanas peladas en trozos con sal en un bol tapado en el microondas 4 minutos y aplástalas.", 5),
      S("Rehoga el ajo y la cebolleta picados y las setas (boletus) picadas 5 minutos con sal. Escurre.", 8),
      S("Corta la pasta brick en 4, rellena con las setas formando paquetitos y fríelos.", 5),
      S("Salpimienta las chuletas de cerdo, úntalas de mostaza (antigua) y hazlas a la plancha. Sirve con el puré, los saquitos y perejil.", 8),
    ],
  }),
  es({
    id: "longaniza-pure-gratinado-salsa-picante", title: "Longaniza con puré gratinado y salsa de tomate picante",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("salchichas", 600, "g"), I("patata", 700, "g"), I("cebolleta", 1, "unit"), I("queso", 150, "g"), I("huevo", 1, "unit"), I("tomate-triturado", 300, "g"), I("chile", 1, "unit"), I("aceite", 30, "ml"), I("perejil", 3, "g"), I("sal", 5, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 30 minutos, pélalas y pásalas por el pasapurés. Mientras, rehoga la cebolleta en daditos.", 30),
      S("Mezcla el puré con la cebolleta, el queso (manchego) rallado, el huevo, sal, pimienta y perejil, repártelo en cazuelitas y gratínalo en el horno.", 6, 220),
      S("Calienta el tomate con la guindilla picada.", 4),
      S("Haz la longaniza (o salchichas) a la plancha y sírvela con el puré y la salsa.", 8),
    ],
  }),
  es({
    id: "conejo-salsa-almendras", title: "Conejo en salsa de almendras con setas, patatas y alcachofas",
    baseServings: 4, prepMin: 25, cookMin: 50, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("conejo", 1200, "g"), I("almendras", 50, "g"), I("pan", 60, "g"), I("cebolla", 3, "unit"), I("ajo", 3, "unit"), I("vino-blanco", 100, "ml"), I("caldo", 1000, "ml"), I("setas", 300, "g"), I("patata", 400, "g"), I("alcachofa", 2, "unit"), I("aceite", 250, "ml"), I("perejil", 5, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Fríe el pan en rebanadas. Salpimienta el conejo y dóralo en la misma cazuela; retíralo. Maja el ajo, las almendras (tostadas) y el pan frito hasta hacer una pasta.", 12),
      S("Dora las cebollas en daditos, añade el vino y deja evaporar, añade el conejo, el majado y el caldo y cuece a fuego lento 30 minutos.", 35),
      S("Fríe las patatas en dados y las alcachofas en láminas y saltea las setas con sal.", 12),
      S("Sirve el conejo con la guarnición y perejil."),
    ],
  }),
  es({
    id: "falda-ternera-patatas", title: "Falda de ternera guisada y dorada al horno con patatas",
    baseServings: 6, prepMin: 15, cookMin: 120, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("ternera", 1200, "g"), I("patata", 600, "g"), I("cebolleta", 2, "unit"), I("ajo", 4, "unit"), I("vino-blanco", 200, "ml"), I("maicena", 5, "g"), I("romero", 2, "g"), I("laurel", 1, "unit"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 8, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta la falda de ternera entera y dórala. Añade las cebolletas y los ajos troceados hasta que se doren.", 12),
      S("Moja con el vino, añade 500 ml de agua, el romero y el laurel, sala y cuece tapado 90 minutos (45 en olla rápida).", 90),
      S("Mientras, cuece las patatas en agua con sal 25 minutos."),
      S("Dora la carne en el horno a 250 °C 7 minutos. Pasa la salsa por el pasapurés y lígala con la maicena. Sirve con las patatas y perejil.", 7, 250),
    ],
  }),
  es({
    id: "guiso-ternera-patatas-champinones", title: "Guiso de ternera con patatas y champiñones",
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "easy", equipment: ["sarten", "olla", "batidora"],
    ingredients: [I("ternera", 800, "g"), I("patata", 400, "g"), I("champinones", 300, "g"), I("puerro", 2, "unit"), I("cebolleta", 1, "unit"), I("pimiento", 1, "unit"), I("tomate-triturado", 200, "g"), I("ajo", 2, "unit"), I("harina", 30, "g"), I("vino-blanco", 150, "ml"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta la aguja de ternera en trozos, salpimienta, enharina y fríela.", 10),
      S("Rehoga el ajo laminado, los puerros, el pimiento y la cebolleta picados; añade el vino, un hervor y el tomate 5 minutos. Tritura.", 15),
      S("Añade la carne y perejil y cuece tapado 45 minutos (18 en olla rápida).", 45),
      S("Añade los champiñones escaldados y las patatas en dados y cuece 15 minutos más.", 15),
    ],
  }),
  es({
    id: "cerdo-asado-salsa-jamon", title: "Cerdo ibérico asado al vino con salsa de jamón y puré de aceitunas",
    baseServings: 4, prepMin: 15, cookMin: 65, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("cerdo", 900, "g"), I("jamon", 100, "g"), I("patata", 500, "g"), I("aceitunas", 60, "g"), I("mostaza", 30, "g"), I("vino-dulce", 150, "ml"), I("maicena", 5, "g"), I("aceite", 40, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta la pieza de cerdo y hornéala a 180 °C 40 minutos; riégala con el vino (Jerez en el original) y ásala a 160 °C 20 minutos más.", 60, 180),
      S("Mientras, cuece las patatas cascadas 15 minutos, pásalas por el pasapurés y mézclalas con las aceitunas verdes en rodajas, la mostaza, aceite y perejil."),
      S("Rehoga el jamón en daditos, añade el jugo de la carne, da un hervor y liga con la maicena.", 4),
      S("Sirve la carne fileteada con la salsa y el puré."),
    ],
  }),
  es({
    id: "redondo-cerveza-negra-macarrones", title: "Redondo en salsa de cerveza negra con macarrones",
    baseServings: 8, prepMin: 15, cookMin: 60, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("ternera", 1200, "g"), I("pasta", 400, "g"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("manzana", 1, "unit"), I("calabaza", 200, "g"), I("cerveza", 500, "ml"), I("caldo", 200, "ml"), I("aceite", 50, "ml"), I("perejil", 3, "g"), I("sal", 9, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta el redondo, dóralo 10 minutos y cuécelo tapado a fuego medio 22 minutos.", 32),
      S("Mientras, pocha la cebolla y el pimiento verde en dados, añade la manzana y la calabaza en dados, la cerveza (negra) y el caldo y cuece 25 minutos. Tritura."),
      S("Cuece los macarrones según el paquete.", 11),
      S("Sirve el redondo fileteado con la salsa, los macarrones y perejil."),
    ],
  }),
  es({
    id: "cerdo-melon-salsa-tomate", title: "Tacos de cerdo con salsa de melón y pimiento",
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["batidora", "olla"],
    ingredients: [I("cerdo", 800, "g"), I("melon", 0.5, "unit"), I("pimiento", 1, "unit"), I("puerro", 1, "unit"), I("ajo", 3, "unit"), I("tomate-triturado", 200, "g"), I("caldo", 100, "ml"), I("vinagre", 15, "ml"), I("rucula", 50, "g"), I("aceite", 50, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Saca bolitas del melón y tritura el resto.", 6),
      S("Dora el ajo laminado, añade el cerdo (tapa o jamón fresco) en dados salpimentado, márcalo y retíralo.", 6),
      S("Saltea el puerro en rodajas y el pimiento rojo en juliana, añade el vinagre, el tomate, el caldo y el melón triturado y reduce 10 minutos.", 12),
      S("Añade la carne y las bolitas de melón y sirve con los canónigos (o rúcula).", 3),
    ],
  }),
  es({
    id: "pollo-asado-pisto-champinones-cuscus", title: "Pollo asado al romero con pisto de champiñones y cuscús",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["horno", "olla"],
    ingredients: [I("pollo", 1000, "g"), I("cuscus", 200, "g"), I("caldo", 200, "ml"), I("vinagre", 20, "ml"), I("romero", 2, "g"), I("ajo", 2, "unit"), I("cebolla", 1, "unit"), I("pimiento", 2, "unit"), I("calabacin", 250, "g"), I("tomate", 300, "g"), I("champinones", 200, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Salpimienta los muslos de pollo partidos, rocíalos con aceite y romero y ásalos en el horno a 220 °C 20 minutos. Riégalos con el vinagre y hornea 8 minutos más.", 28, 220),
      S("Mientras, dora el ajo laminado y pocha la cebolla, los pimientos y el calabacín en dados 15 minutos. Añade el tomate pelado y los champiñones laminados 10 minutos."),
      S("Vierte el caldo hirviendo sobre el cuscús, tápalo 5 minutos y suéltalo con un tenedor.", 5),
      S("Sirve el pollo con el pisto, el cuscús y perejil."),
    ],
  }),
  es({
    id: "albondigas-pavo-pure-limon", title: "Albóndigas de pavo y tomate seco con puré al limón",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["sarten", "olla", "batidora"],
    ingredients: [I("pavo", 600, "g"), I("tomates-secos", 30, "g"), I("pan", 60, "g"), I("leche", 200, "ml"), I("ajo", 2, "unit"), I("cebolla", 3, "unit"), I("huevo", 1, "unit"), I("vino-blanco", 200, "ml"), I("caldo", 200, "ml"), I("harina", 40, "g"), I("patata", 600, "g"), I("limon", 1, "unit"), I("aceite", 150, "ml"), I("perejil", 3, "g"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Mezcla el pavo picado salpimentado con el ajo y los tomates secos picados, el huevo y el pan remojado en leche y escurrido. Forma albóndigas, enharínalas y fríelas.", 15),
      S("Pocha las cebollas picadas, añade el vino y el caldo, reduce 10 minutos, tritura y cuece las albóndigas en la salsa 8 minutos.", 20),
      S("Mientras, cuece las patatas 20 minutos y haz un puré. Calienta aceite con trozos de piel de limón, añádelo al puré con el zumo del limón y sal."),
      S("Sirve las albóndigas con el puré y perejil."),
    ],
  }),
  es({
    id: "cerdo-asado-pure-boniato", title: "Aguja de cerdo asada a la miel y mostaza con puré de boniato",
    baseServings: 8, prepMin: 15, cookMin: 110, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("cerdo", 1600, "g"), I("boniato", 1000, "g"), I("miel", 40, "g"), I("mostaza", 15, "g"), I("salsa-inglesa", 15, "ml"), I("ajo", 3, "unit"), I("tomillo", 2, "g"), I("jengibre", 3, "g"), I("aceite", 60, "ml"), I("perejil", 3, "g"), I("sal", 10, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Maja el ajo con sal gruesa y pimienta en grano; añade el tomillo, la miel, la salsa inglesa (o de carne), la mostaza, el jengibre rallado y aceite. Unta la pieza de cabezada de cerdo.", 8),
      S("Ásala en el horno a 160 °C 1 hora; añade los boniatos con aceite y sal y ásalo todo 40 minutos más.", 100, 160),
      S("Pela los boniatos, hazlos puré y sirve con la carne fileteada, su jugo y perejil.", 5),
    ],
  }),
  es({
    id: "pinchos-cerdo-papas-alinadas", title: "Pinchitos de cerdo con papas aliñadas",
    origin: "España (Andalucía)",
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("cerdo", 600, "g"), I("pimenton", 3, "g"), I("comino", 1, "g"), I("patata", 500, "g"), I("cebolleta", 1, "unit"), I("huevo", 2, "unit"), I("aceitunas", 80, "g"), I("vinagre", 20, "ml"), I("aceite", 60, "ml"), I("perejil", 5, "g"), I("sal", 6, "g")],
    steps: [
      S("Cuece las patatas con piel y los huevos; saca los huevos a los 10 minutos y las patatas a los 30.", 30),
      S("Corta las patatas y los huevos en dados y mézclalos con las aceitunas (rellenas de anchoa) partidas, la cebolleta y perejil picados, aceite, vinagre y sal.", 6),
      S("Ensarta el cerdo en dados adobado con pimentón, comino y sal en pinchos pequeños y hazlos a la plancha por los dos lados.", 8),
    ],
  }),
  es({
    id: "alitas-asadas-fideos-verduras", title: "Alitas asadas con fideos y verduras",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("pollo", 1000, "g"), I("fideos-arroz", 150, "g"), I("cebolla", 1, "unit"), I("zanahoria", 200, "g"), I("puerro", 1, "unit"), I("pimiento", 1, "unit"), I("vinagre", 20, "ml"), I("aceite", 50, "ml"), I("perejil", 5, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Corta las puntas de las alitas de pollo y cuécelas con lo verde del puerro, sal y perejil 15 minutos. Cuela el caldo.", 15),
      S("Asa las alitas partidas, salpimentadas y con aceite en el horno a 180 °C 21 minutos; riégalas con vinagre y gratínalas 4 minutos.", 25, 180),
      S("Mientras, tuesta los fideos (cabello de ángel) y saltea la cebolla, la zanahoria, el puerro y el pimiento verde en juliana."),
      S("Añade los fideos y el caldo a las verduras y cuece 4 minutos. Sirve con las alitas y perejil.", 5),
    ],
  }),
  es({
    id: "pastelitos-pavo-brocoli", title: "Pastelitos de pavo y patata envueltos en beicon con brócoli",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["sarten", "horno", "olla"],
    ingredients: [I("pavo", 600, "g"), I("brocoli", 1, "unit"), I("patata", 400, "g"), I("cebolla", 1, "unit"), I("pimiento", 1, "unit"), I("ajo", 3, "unit"), I("tomates-secos", 40, "g"), I("aceitunas", 60, "g"), I("huevo", 1, "unit"), I("beicon", 200, "g"), I("aceite", 200, "ml"), I("perejil", 3, "g"), I("sal", 6, "g")],
    steps: [
      S("Dora el ajo laminado y fríe a fuego medio la cebolla en juliana, el pimiento en tiras y las patatas en rodajas. Escurre.", 15),
      S("Mezcla el pavo picado con las aceitunas y los tomates secos picados, el huevo, sal y perejil.", 5),
      S("Forra 4 moldes con lonchas de beicon cruzadas, rellena con capas de carne, patata y carne y cierra con el beicon. Hornea a 180 °C 20 minutos.", 20, 180),
      S("Cuece el brócoli en ramilletes 5 minutos y sírvelo con los pastelitos desmoldados.", 5),
    ],
  }),
  es({
    id: "albondigas-pavo-queso-frito", title: "Albóndigas de pavo en salsa con queso frito y canónigos",
    baseServings: 4, prepMin: 30, cookMin: 35, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("pavo", 500, "g"), I("queso", 200, "g"), I("cebolla", 1, "unit"), I("ajo", 1, "unit"), I("tomates-secos", 20, "g"), I("aceitunas", 30, "g"), I("huevo", 2, "unit"), I("pan", 60, "g"), I("leche", 100, "ml"), I("vino-blanco", 200, "ml"), I("tomate-triturado", 200, "g"), I("maicena", 8, "g"), I("harina", 50, "g"), I("pan-rallado", 80, "g"), I("rucula", 50, "g"), I("vinagre", 10, "ml"), I("aceite", 300, "ml"), I("perejil", 3, "g"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Dora el ajo laminado y pocha la cebolla picada. Mezcla el pavo picado a cuchillo y salpimentado con las aceitunas negras, los tomates secos y perejil picados, la cebolla, el pan remojado en leche, un huevo y una cucharada de pan rallado.", 14),
      S("Forma albóndigas, enharínalas, dóralas y cuécelas 10 minutos con el vino y el tomate; liga con la maicena.", 15),
      S("Pasa el queso (brie en el original) en porciones por harina, el otro huevo y pan rallado y fríelo.", 4),
      S("Sirve con los canónigos (o rúcula) aliñados con aceite y vinagre."),
    ],
  }),
];
