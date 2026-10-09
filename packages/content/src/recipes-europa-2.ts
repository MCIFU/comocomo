import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Lote 5B: más Europa (Italia, Francia, centro y norte de Europa, Grecia y Turquía). Recetas escritas para COMOCOMO. */
export const recipesEuropa2: Recipe[] = [
  // ——— Italia ———
  r({
    id: "penne-arrabbiata", title: "Penne all'arrabbiata", cuisine: "italiana", authenticity: "traditional",
    origin: "Italia (Roma)", note: "«Arrabbiata» significa enfadada, por el picante.",
    baseServings: 2, prepMin: 5, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 200, "g"), I("tomate-triturado", 400, "g"), I("ajo", 3, "unit"), I("chile", 2, "unit"), I("aceite", 40, "ml"), I("perejil", 5, "g", true), I("sal", 12, "g")],
    steps: [
      S("Dora el ajo laminado y el chile picado en el aceite a fuego bajo 2 minutos.", 2),
      S("Añade el tomate y una pizca de sal y cocina 15 minutos a fuego medio, hasta que espese.", 15),
      S("Cuece la pasta al dente en agua con sal, unos 10 minutos.", 10),
      S("Mezcla la pasta con la salsa 1 minuto y termina con perejil.", 1),
    ],
  }),
  r({
    id: "pasta-alla-norma", title: "Pasta alla Norma", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (Catania, Sicilia)", note: "Se termina con ricotta salata; aquí, con queso curado rallado.",
    baseServings: 3, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 300, "g"), I("berenjena", 400, "g"), I("tomate-triturado", 400, "g"), I("ajo", 2, "unit"), I("albahaca", 10, "g"), I("queso", 60, "g"), I("aceite", 100, "ml"), I("sal", 14, "g")],
    steps: [
      S("Corta la berenjena en dados, sálala y fríela en la mayor parte del aceite 8 minutos hasta que esté dorada. Escúrrela.", 8),
      S("En otra sartén, dora el ajo en el resto del aceite 1 minuto y añade el tomate. Cocina 12 minutos.", 13),
      S("Cuece la pasta al dente, unos 10 minutos.", 10),
      S("Mezcla la pasta con la salsa y la berenjena, y sirve con albahaca y el queso rallado por encima.", 1),
    ],
  }),
  r({
    id: "berenjenas-parmesana", title: "Berenjenas a la parmesana", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (sur)", note: "Las berenjenas se asan en lugar de freírse para aligerar el plato.",
    baseServings: 4, prepMin: 20, cookMin: 60, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("berenjena", 1000, "g"), I("tomate-triturado", 600, "g"), I("mozzarella", 250, "g"), I("parmesano", 60, "g"), I("ajo", 2, "unit"), I("albahaca", 10, "g"), I("aceite", 60, "ml"), I("sal", 8, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Corta las berenjenas en láminas de 1 cm, pinta con aceite, sala y hornea 20 minutos.", 20, 200),
      S("Sofríe el ajo en un poco de aceite 1 minuto, añade el tomate y la sal y cocina 12 minutos.", 13),
      S("En una fuente, alterna capas de tomate, berenjena, mozzarella, albahaca y parmesano. Termina con tomate y parmesano."),
      S("Hornea a 190 °C 25 minutos hasta que burbujee y esté dorada. Reposa 10 minutos antes de servir.", 25, 190),
    ],
  }),
  r({
    id: "saltimbocca", title: "Saltimbocca a la romana", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (Roma)", note: "Lleva una hoja de salvia en cada filete; si no tienes, queda bien sin ella.",
    baseServings: 2, prepMin: 10, cookMin: 6, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera", 300, "g"), I("jamon", 60, "g"), I("harina", 20, "g"), I("mantequilla", 30, "g"), I("vino-blanco", 80, "ml"), I("sal", 2, "g")],
    steps: [
      S("Aplana los filetes de ternera muy finos y córtalos en trozos de la palma de la mano. Coloca una loncha de jamón encima y sujétala con un palillo."),
      S("Pasa por harina solo el lado sin jamón. Dóralos en la mantequilla a fuego fuerte 1 minuto por el lado de la carne y 30 segundos por el del jamón.", 2),
      S("Retíralos, vierte el vino en la sartén y deja reducir 2 minutos raspando el fondo. Sirve la salsa por encima.", 2),
    ],
  }),
  r({
    id: "panna-cotta", title: "Panna cotta", cuisine: "italiana", authenticity: "traditional",
    origin: "Italia (Piamonte)", note: "Necesita al menos 4 horas de nevera para cuajar.",
    baseServings: 4, prepMin: 10, cookMin: 5, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("nata", 400, "ml"), I("leche", 100, "ml"), I("azucar", 60, "g"), I("gelatina", 3, "unit"), I("limon", 0.5, "unit", true)],
    steps: [
      S("Hidrata las hojas de gelatina en agua fría 5 minutos.", 5),
      S("Calienta la nata con la leche, el azúcar y la piel de limón hasta que humee, sin hervir.", 4),
      S("Apaga, retira la piel, añade la gelatina escurrida y remueve hasta que se disuelva."),
      S("Reparte en vasos y deja cuajar en la nevera 4 horas. Sirve con mermelada o fruta."),
    ],
  }),
  r({
    id: "bruschetta", title: "Bruschetta de tomate", cuisine: "italiana", authenticity: "traditional",
    origin: "Italia (centro)", baseServings: 4, prepMin: 10, cookMin: 5, difficulty: "easy",
    ingredients: [I("pan", 250, "g"), I("tomate", 400, "g"), I("ajo", 1, "unit"), I("albahaca", 10, "g"), I("aceite", 40, "ml"), I("sal", 3, "g")],
    steps: [
      S("Corta el tomate en dados pequeños, mézclalo con la albahaca picada, sal y la mitad del aceite. Deja reposar 10 minutos."),
      S("Tuesta el pan en rebanadas 2 minutos por cada lado y frótalo con ajo.", 4),
      S("Pon el tomate encima justo antes de servir y riega con el resto del aceite."),
    ],
  }),
  r({
    id: "frittata", title: "Frittata de calabacín y queso", cuisine: "italiana", authenticity: "traditional",
    origin: "Italia", note: "A diferencia de la tortilla española, se termina en el horno o tapada, sin darle la vuelta.",
    baseServings: 4, prepMin: 10, cookMin: 20, difficulty: "easy", equipment: ["sarten", "horno"],
    ingredients: [I("huevo", 8, "unit"), I("calabacin", 300, "g"), I("cebolla", 0.5, "unit"), I("parmesano", 50, "g"), I("aceite", 20, "ml"), I("sal", 4, "g")],
    steps: [
      S("Precalienta el gratinador del horno. Saltea el calabacín en rodajas finas y la cebolla en una sartén apta para horno 6 minutos.", 6),
      S("Bate los huevos con el parmesano rallado y la sal y viértelos sobre las verduras.", 1),
      S("Cocina a fuego medio-bajo 6 minutos sin remover, hasta que los bordes cuajen.", 6),
      S("Termina 4 minutos bajo el gratinador del horno, hasta que la superficie esté dorada.", 4),
    ],
  }),
  r({
    id: "pasta-e-fagioli", title: "Pasta e fagioli", cuisine: "italiana", authenticity: "traditional",
    origin: "Italia", baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pasta", 200, "g"), I("alubias-blancas", 800, "g"), I("tomate-triturado", 200, "g"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("ajo", 2, "unit"), I("oregano", 1, "g"), I("caldo", 1000, "ml"), I("aceite", 40, "ml"), I("parmesano", 30, "g", true), I("sal", 5, "g")],
    steps: [
      S("Pocha la cebolla, la zanahoria y el ajo picados en el aceite 8 minutos.", 8),
      S("Añade el tomate, el orégano y la mitad de las alubias; cocina 3 minutos y aplasta un poco las alubias para espesar.", 3),
      S("Añade el caldo y el resto de alubias y cocina 8 minutos.", 8),
      S("Añade la pasta corta y cocina hasta que esté al dente, unos 10 minutos. Sirve con parmesano y un hilo de aceite.", 10),
    ],
  }),
  // ——— Francia ———
  r({
    id: "vichyssoise", title: "Vichyssoise", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia", note: "Crema de puerro y patata que se sirve fría (también está buena caliente).",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("puerro", 4, "unit"), I("patata", 400, "g"), I("cebolla", 1, "unit"), I("mantequilla", 40, "g"), I("caldo", 800, "ml"), I("nata", 150, "ml"), I("sal", 5, "g")],
    steps: [
      S("Corta la parte blanca de los puerros y la cebolla en rodajas. Pochalos en la mantequilla a fuego suave 10 minutos, sin que se doren.", 10),
      S("Añade la patata en trozos, el caldo y la sal y cocina 20 minutos.", 20),
      S("Tritura hasta que esté muy fina y añade la nata.", 2),
      S("Enfría en la nevera al menos 2 horas. Sirve con cebollino o un hilo de aceite."),
    ],
  }),
  r({
    id: "coq-au-vin", title: "Pollo al vino tinto (coq au vin)", cuisine: "francesa", authenticity: "adapted",
    origin: "Francia (Borgoña)", note: "Tradicionalmente se hace con gallo; con pollo el guiso es más corto.",
    baseServings: 4, prepMin: 20, cookMin: 75, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("pollo", 1200, "g"), I("vino-tinto", 500, "ml"), I("panceta", 150, "g"), I("champinones", 250, "g"), I("cebolla", 1, "unit"), I("zanahoria", 150, "g"), I("ajo", 3, "unit"), I("harina", 20, "g"), I("mantequilla", 30, "g"), I("caldo", 200, "ml"), I("sal", 8, "g")],
    steps: [
      S("Dora la panceta en tiras en la olla 5 minutos y retírala. Sala el pollo y dóralo en esa grasa 10 minutos.", 15),
      S("Rehoga la cebolla, la zanahoria y el ajo 6 minutos. Añade la harina y remueve 1 minuto.", 7),
      S("Vierte el vino y el caldo, devuelve el pollo y la panceta, tapa y cocina a fuego suave 45 minutos.", 45),
      S("Saltea los champiñones en la mantequilla 6 minutos y añádelos al guiso los últimos 5 minutos.", 11),
    ],
  }),
  r({
    id: "ensalada-nicoise", title: "Ensalada niçoise", cuisine: "francesa", authenticity: "adapted",
    origin: "Francia (Niza)", note: "En Niza discuten si lleva patata y judías verdes; esta es la versión más extendida.",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("patata", 400, "g"), I("judias-verdes", 200, "g"), I("huevo", 4, "unit"), I("atun-lata", 160, "g"), I("tomate", 300, "g"), I("aceitunas", 60, "g"), I("lechuga", 1, "unit"), I("mostaza", 10, "g"), I("vinagre", 20, "ml"), I("aceite", 60, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece las patatas en trozos 12 minutos, añadiendo las judías verdes los últimos 5. Cuece los huevos 9 minutos en otro cazo.", 12),
      S("Enfría todo en agua fría. Pela los huevos y córtalos en cuartos."),
      S("Bate la mostaza, el vinagre, el aceite y la sal para la vinagreta."),
      S("Monta una fuente con la lechuga, la patata, las judías, el tomate en gajos, el atún, las aceitunas y los huevos. Aliña al servir."),
    ],
  }),
  r({
    id: "creme-brulee", title: "Crème brûlée", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia", note: "Hermana francesa de la crema catalana: se cuaja en el horno y se carameliza con soplete.",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("nata", 500, "ml"), I("huevo", 5, "unit"), I("azucar", 110, "g"), I("limon", 0.5, "unit", true)],
    steps: [
      S("Precalienta el horno a 150 °C. Calienta la nata con la piel de limón hasta que humee y retira la piel.", 10, 150),
      S("Bate las 5 yemas con 70 g de azúcar sin hacer espuma y añade la nata caliente poco a poco."),
      S("Reparte en cazuelitas, colócalas en una bandeja con agua caliente y hornea 30 minutos: deben temblar un poco en el centro.", 30, 150),
      S("Enfría en la nevera al menos 3 horas. Antes de servir, cubre con el resto del azúcar y quémalo con un soplete."),
    ],
  }),
  r({
    id: "moules-marinieres", title: "Mejillones a la marinera francesa (moules marinières)", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia (Normandía y Bretaña)", note: "En Bélgica y el norte de Francia se sirven con patatas fritas (moules-frites).",
    baseServings: 2, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("mejillones", 1500, "g"), I("vino-blanco", 200, "ml"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("mantequilla", 30, "g"), I("nata", 100, "ml", true), I("perejil", 15, "g"), I("pan", 150, "g", true)],
    steps: [
      S("Limpia los mejillones y descarta los abiertos que no se cierren al golpearlos."),
      S("En una olla grande, pocha la cebolla y el ajo picados en la mantequilla 4 minutos.", 4),
      S("Añade el vino y los mejillones, tapa y cocina a fuego fuerte 4 minutos, moviendo la olla, hasta que se abran.", 4),
      S("Añade la nata y el perejil picado, mezcla y sirve en cuencos con el caldo y pan para mojar.", 1),
    ],
  }),
  r({
    id: "steak-frites", title: "Entrecot con patatas fritas (steak frites)", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia", baseServings: 2, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("ternera", 500, "g"), I("patata", 600, "g"), I("mantequilla", 30, "g"), I("ajo", 1, "unit"), I("aceite", 400, "ml"), I("sal", 6, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Saca la carne de la nevera 30 minutos antes. Corta las patatas en bastones y sécalas.", 5),
      S("Fríe las patatas a 150 °C 8 minutos, sácalas, y vuelve a freírlas a 190 °C 3 minutos hasta que estén crujientes. Sala.", 11, 150),
      S("Sala la carne y márcala en una sartén muy caliente con unas gotas de aceite: 3 minutos por lado para un punto medio.", 6),
      S("Añade la mantequilla y el ajo aplastado y riega la carne con la mantequilla 1 minuto. Deja reposar 3 minutos antes de cortar.", 4),
    ],
  }),
  // ——— Centro y norte de Europa ———
  r({
    id: "goulash", title: "Goulash húngaro", cuisine: "hungara", authenticity: "traditional",
    origin: "Hungría", note: "El auténtico es más una sopa espesa que un guiso. El pimentón dulce es el protagonista.",
    baseServings: 4, prepMin: 20, cookMin: 100, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("ternera", 800, "g"), I("cebolla", 2, "unit"), I("pimiento", 1, "unit"), I("tomate", 200, "g"), I("pimenton", 20, "g"), I("comino", 2, "g"), I("ajo", 2, "unit"), I("patata", 500, "g"), I("caldo", 1000, "ml"), I("aceite", 40, "ml"), I("sal", 8, "g")],
    steps: [
      S("Pocha las cebollas picadas en el aceite a fuego medio 10 minutos hasta que estén doradas.", 10),
      S("Añade la carne en dados y dórala 6 minutos. Aparta del fuego y añade el pimentón y el comino (en caliente se quemaría).", 6),
      S("Añade el ajo, el pimiento y el tomate picados y el caldo. Cocina tapado a fuego suave 60 minutos.", 60),
      S("Añade las patatas en dados y cocina 20 minutos más, hasta que estén tiernas.", 20),
    ],
  }),
  r({
    id: "kasespatzle", title: "Spätzle con queso (Käsespätzle)", cuisine: "alemana", authenticity: "adapted",
    origin: "Alemania (Suabia) y Austria", note: "Se hacen con un rallador de spätzle; con un colador de agujeros grandes también funciona.",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("harina", 400, "g"), I("huevo", 4, "unit"), I("leche", 150, "ml"), I("queso", 200, "g"), I("cebolla", 2, "unit"), I("mantequilla", 50, "g"), I("sal", 14, "g")],
    steps: [
      S("Bate la harina con los huevos, la leche y 4 g de sal hasta una masa espesa y elástica que haga burbujas. Deja reposar 10 minutos.", 10),
      S("Dora las cebollas en juliana en la mantequilla 15 minutos, hasta que estén muy doradas.", 15),
      S("Pasa la masa por un colador de agujeros grandes sobre agua hirviendo con sal. Cuando suban (1-2 minutos), sácalas con una espumadera.", 6),
      S("Alterna capas de spätzle y queso rallado en una fuente caliente y corona con la cebolla.", 1),
    ],
  }),
  r({
    id: "pierogi", title: "Pierogi de patata y queso", cuisine: "polaca", authenticity: "adapted",
    origin: "Polonia", note: "El relleno «ruskie» lleva queso fresco tipo twaróg; aquí, queso crema.",
    baseServings: 4, prepMin: 50, cookMin: 30, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("harina", 300, "g"), I("huevo", 1, "unit"), I("patata", 500, "g"), I("queso-crema", 150, "g"), I("cebolla", 2, "unit"), I("mantequilla", 40, "g"), I("sal", 10, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Amasa la harina con el huevo, una pizca de sal y 140 ml de agua templada 5 minutos. Deja reposar tapada 30 minutos.", 35),
      S("Cuece las patatas peladas 20 minutos y haz un puré con el queso, la mitad de una cebolla pochada, sal y pimienta.", 20),
      S("Estira la masa fina, corta círculos de 8 cm, pon una cucharada de relleno y ciérralos en media luna apretando los bordes."),
      S("Cuécelos en agua hirviendo con sal: cuando floten, 2 minutos más.", 4),
      S("Sírvelos con el resto de la cebolla dorada en la mantequilla 10 minutos.", 10),
    ],
  }),
  r({
    id: "irish-stew", title: "Estofado irlandés (Irish stew)", cuisine: "irlandesa", authenticity: "traditional",
    origin: "Irlanda", baseServings: 4, prepMin: 15, cookMin: 110, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("cordero", 900, "g"), I("patata", 800, "g"), I("zanahoria", 300, "g"), I("cebolla", 2, "unit"), I("caldo", 800, "ml"), I("perejil", 10, "g"), I("aceite", 30, "ml"), I("sal", 8, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Sala el cordero en trozos y dóralo en el aceite 8 minutos. Resérvalo.", 8),
      S("Rehoga las cebollas en gajos 5 minutos. Devuelve el cordero, añade el caldo y cocina tapado a fuego muy suave 60 minutos.", 65),
      S("Añade las patatas y las zanahorias en trozos grandes y cocina 35 minutos más: algunas patatas se desharán y espesarán el caldo.", 35),
      S("Termina con perejil picado y pimienta."),
    ],
  }),
  r({
    id: "scones", title: "Scones", cuisine: "britanica", authenticity: "traditional",
    origin: "Reino Unido", note: "Se toman con mermelada y nata espesa. Cuanto menos se amasen, más tiernos.",
    baseServings: 6, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("harina", 300, "g"), I("levadura-quimica", 15, "g"), I("mantequilla", 80, "g"), I("azucar", 40, "g"), I("leche", 150, "ml"), I("huevo", 1, "unit"), I("sal", 2, "g")],
    steps: [
      S("Precalienta el horno a 220 °C. Frota la harina, la levadura, el azúcar y la sal con la mantequilla fría hasta tener migas.", 10, 220),
      S("Añade la leche y la mitad del huevo batido y mezcla solo hasta unir. Aplana la masa a 3 cm con las manos."),
      S("Corta círculos de 6 cm sin girar el cortador, colócalos en la bandeja y píntalos con el resto del huevo."),
      S("Hornea 12-14 minutos hasta que hayan subido y estén dorados.", 13, 220),
    ],
  }),
  r({
    id: "albondigas-suecas", title: "Albóndigas suecas (köttbullar)", cuisine: "sueca", authenticity: "adapted",
    origin: "Suecia", note: "Se sirven con puré, salsa de nata y mermelada de arándano rojo.",
    baseServings: 4, prepMin: 25, cookMin: 30, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("ternera-picada", 500, "g"), I("pan-rallado", 40, "g"), I("leche", 100, "ml"), I("huevo", 1, "unit"), I("cebolla", 1, "unit"), I("nata", 200, "ml"), I("caldo", 200, "ml"), I("harina", 15, "g"), I("mantequilla", 30, "g"), I("patata", 800, "g"), I("sal", 9, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece las patatas 20 minutos y haz un puré con un poco de mantequilla y sal.", 20),
      S("Mezcla el pan rallado con la leche, añade la carne, el huevo, la cebolla rallada, sal y pimienta. Forma bolas pequeñas."),
      S("Dóralas en la mantequilla a fuego medio 8 minutos, girándolas. Resérvalas.", 8),
      S("Añade la harina a la sartén 1 minuto, luego el caldo y la nata, y cocina 3 minutos hasta que espese. Devuelve las albóndigas 2 minutos.", 6),
    ],
  }),
  r({
    id: "salmon-al-horno", title: "Salmón al horno con patatas", cuisine: "noruega", authenticity: "adapted",
    origin: "Noruega", note: "En Noruega se acompaña de eneldo; si lo tienes, añádelo al final.",
    baseServings: 4, prepMin: 10, cookMin: 40, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("salmon", 600, "g"), I("patata", 700, "g"), I("limon", 1, "unit"), I("mantequilla", 30, "g"), I("ajo", 2, "unit"), I("aceite", 30, "ml"), I("sal", 7, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Corta las patatas en gajos, mézclalas con aceite, ajo y sal y hornéalas 25 minutos.", 25, 200),
      S("Coloca el salmón salado entre las patatas, con rodajas de limón y trocitos de mantequilla encima.", 2),
      S("Hornea 12-14 minutos: el salmón está en su punto cuando se separa en lascas y el centro sigue jugoso.", 13, 200),
    ],
  }),
  // ——— Grecia y Turquía ———
  r({
    id: "pollo-griego-limon", title: "Pollo griego al limón con patatas", cuisine: "griega", authenticity: "traditional",
    origin: "Grecia", baseServings: 4, prepMin: 15, cookMin: 60, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("pollo", 1200, "g"), I("patata", 800, "g"), I("limon", 2, "unit"), I("ajo", 4, "unit"), I("oregano", 4, "g"), I("caldo", 200, "ml"), I("aceite", 60, "ml"), I("sal", 10, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Mezcla el zumo de los limones, el aceite, el ajo rallado, el orégano y la sal.", 10, 200),
      S("Coloca el pollo y las patatas en gajos en una fuente, báñalos con la mezcla y añade el caldo.", 2),
      S("Hornea 60 minutos, dando la vuelta a mitad, hasta que el pollo esté dorado y las patatas hayan absorbido el jugo.", 60, 200),
    ],
  }),
  r({
    id: "tzatziki", title: "Tzatziki", cuisine: "griega", authenticity: "traditional",
    origin: "Grecia", baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy",
    ingredients: [I("yogur", 4, "unit"), I("pepino", 250, "g"), I("ajo", 1, "unit"), I("aceite", 20, "ml"), I("menta", 5, "g", true), I("limon", 0.5, "unit"), I("sal", 3, "g")],
    steps: [
      S("Ralla el pepino, sálalo y estrújalo con las manos para quitarle el agua (si no, la salsa queda aguada)."),
      S("Mézclalo con el yogur (mejor griego), el ajo rallado, el zumo de limón y el aceite."),
      S("Añade menta picada si te gusta y deja reposar 30 minutos en la nevera antes de servir."),
    ],
  }),
  r({
    id: "baklava", title: "Baklava", cuisine: "turca", authenticity: "adapted",
    origin: "Turquía y Grecia", note: "Se hace con decenas de capas de masa filo; con hojaldre queda más grueso pero igual de rico.",
    baseServings: 8, prepMin: 30, cookMin: 45, difficulty: "medium", equipment: ["horno", "olla"],
    ingredients: [I("masa-hojaldre", 550, "g"), I("nueces", 200, "g"), I("almendras", 100, "g"), I("mantequilla", 100, "g"), I("azucar", 200, "g"), I("miel", 100, "g"), I("canela", 2, "g"), I("limon", 0.5, "unit")],
    steps: [
      S("Precalienta el horno a 180 °C. Pica las nueces y las almendras con la canela.", 10, 180),
      S("Pinta un molde con mantequilla derretida, pon una lámina de masa, reparte los frutos secos y cubre con la otra. Pinta con mantequilla.", 3),
      S("Corta en rombos antes de hornear y hornea 35 minutos hasta que esté muy dorada.", 35, 180),
      S("Mientras, cuece el azúcar con 150 ml de agua, la miel y el zumo de limón 8 minutos. Vierte el almíbar caliente sobre la baklava y deja que lo absorba varias horas.", 8),
    ],
  }),
];
