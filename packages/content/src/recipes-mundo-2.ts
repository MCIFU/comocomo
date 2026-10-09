import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/**
 * Corpus (lote 3): platos populares de todo el mundo. La selección se ha guiado por los
 * rankings de TasteAtlas (solo qué platos incluir); las recetas están escritas para COMOCOMO.
 * Las adaptaciones explican en `note` qué cambia respecto a la versión tradicional.
 */
export const recipesMundo2: Recipe[] = [
  // ——— España ———
  r({
    id: "paella-valenciana", title: "Paella de pollo y verduras", cuisine: "espanola", authenticity: "adapted",
    origin: "España (Valencia)", note: "La valenciana tradicional lleva pollo, conejo, garrofón y azafrán, y se hace con agua. Esta versión simplificada usa solo pollo y caldo.",
    baseServings: 4, prepMin: 15, cookMin: 50, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("arroz", 320, "g"), I("pollo", 600, "g"), I("judias-verdes", 200, "g"), I("tomate", 150, "g"), I("pimenton", 4, "g"), I("caldo", 900, "ml"), I("aceite", 60, "ml"), I("sal", 8, "g")],
    steps: [
      S("Trocea el pollo en piezas pequeñas y sálalo. Calienta el aceite en una paellera o sartén ancha a fuego medio-alto y dora el pollo 12 minutos, hasta que esté dorado por todos lados.", 12),
      S("Añade las judías verdes troceadas y rehoga 5 minutos.", 5),
      S("Haz un hueco en el centro, añade el tomate rallado y cocina 4 minutos. Añade el pimentón, remueve 20 segundos y vierte enseguida el caldo caliente.", 4),
      S("Deja hervir 10 minutos para que el caldo coja sabor. Prueba y ajusta de sal: debe quedar algo salado.", 10),
      S("Reparte el arroz en forma de cruz y extiéndelo con la cuchara. A partir de aquí no se remueve. Cocina 8 minutos a fuego fuerte.", 8),
      S("Baja a fuego suave y cocina 9 minutos más, hasta que el arroz haya absorbido el caldo. Si escuchas un ligero crepitar, se está formando el socarrat.", 9),
      S("Apaga, tapa con un paño limpio y deja reposar 5 minutos antes de servir.", 5),
    ],
  }),
  r({
    id: "gazpacho", title: "Gazpacho andaluz", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Andalucía)", note: "Se toma muy frío. Cuanto más maduro el tomate, mejor queda.",
    baseServings: 4, prepMin: 15, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("tomate", 1000, "g"), I("pimiento", 1, "unit"), I("pepino", 150, "g"), I("ajo", 1, "unit"), I("pan", 50, "g"), I("aceite", 60, "ml"), I("vinagre", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Trocea los tomates, el pimiento (sin semillas) y el pepino pelado. Remoja el pan en un poco de agua."),
      S("Tritura las verduras con el ajo, el pan escurrido, el vinagre y la sal durante 2 minutos, hasta que quede muy fino.", 2),
      S("Con la batidora en marcha, añade el aceite en un hilo fino: el gazpacho se volverá más claro y cremoso."),
      S("Pruébalo y ajusta de sal y vinagre. Si quieres una textura muy fina, cuélalo."),
      S("Enfríalo en la nevera al menos 1 hora. Sirve con dados de pepino o pimiento por encima."),
    ],
  }),
  r({
    id: "patatas-bravas", title: "Patatas bravas", cuisine: "espanola", authenticity: "adapted",
    origin: "España (Madrid)", note: "Cada bar tiene su salsa brava. Esta es la clásica madrileña de pimentón, sin tomate.",
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("patata", 800, "g"), I("aceite", 400, "ml"), I("pimenton", 10, "g"), I("harina", 15, "g"), I("caldo", 250, "ml"), I("ajo", 1, "unit"), I("sal", 5, "g")],
    steps: [
      S("Pela las patatas y córtalas en dados irregulares de unos 3 cm. Sécalas bien con un paño."),
      S("Calienta el aceite a fuego medio (160 °C) y fríe las patatas 12 minutos, hasta que estén tiernas pero sin dorar. Sácalas.", 12, 160),
      S("Para la salsa, pon 2 cucharadas de ese aceite en un cazo con el ajo picado 1 minuto. Añade la harina y tuéstala 1 minuto removiendo.", 2),
      S("Aparta del fuego, añade el pimentón y remueve 20 segundos. Vierte el caldo y cocina 5 minutos removiendo, hasta que espese y napee la cuchara.", 5),
      S("Sube el aceite a 190 °C y fríe de nuevo las patatas 3 minutos, hasta que estén doradas y crujientes. Escúrrelas, sala y sirve con la salsa por encima.", 3, 190),
    ],
  }),
  r({
    id: "albondigas-en-salsa", title: "Albóndigas en salsa", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 4, prepMin: 25, cookMin: 35, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 500, "g"), I("huevo", 1, "unit"), I("pan-rallado", 40, "g"), I("ajo", 2, "unit"), I("perejil", 10, "g"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("vino-blanco", 100, "ml"), I("caldo", 300, "ml"), I("harina", 40, "g"), I("aceite", 60, "ml"), I("sal", 6, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Mezcla la carne con el huevo, el pan rallado, un ajo y el perejil picados, sal y pimienta. Forma bolas del tamaño de una nuez (unas 24) y pásalas por harina."),
      S("Dóralas en el aceite a fuego medio-alto 5 minutos, girándolas para que se doren por todos lados. Sácalas: aún no están hechas por dentro.", 5),
      S("En el mismo aceite, pocha la cebolla, la zanahoria y el otro ajo picados 10 minutos a fuego medio.", 10),
      S("Añade 1 cucharada de la harina sobrante y remueve 1 minuto. Vierte el vino y deja que hierva 2 minutos.", 3),
      S("Añade el caldo, tritura la salsa si la quieres fina y vuelve a ponerla en la sartén. Mete las albóndigas y cocina tapado a fuego suave 15 minutos.", 15),
    ],
  }),
  r({
    id: "cachopo", title: "Cachopo asturiano", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Asturias)", note: "Un cachopo da para dos. El relleno clásico es jamón serrano y queso; en Asturias se ven mil variantes.",
    baseServings: 2, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("ternera", 300, "g"), I("jamon", 60, "g"), I("queso", 80, "g"), I("harina", 40, "g"), I("huevo", 2, "unit"), I("pan-rallado", 80, "g"), I("patata", 400, "g"), I("aceite", 400, "ml"), I("sal", 4, "g")],
    steps: [
      S("Pide dos filetes grandes y finos. Si son gruesos, aplánalos entre dos hojas de papel de horno con un rodillo hasta dejarlos de medio centímetro. Sálalos."),
      S("Coloca el jamón y el queso sobre un filete, sin llegar a los bordes, y tápalo con el otro. Presiona los bordes con los dedos para cerrarlo."),
      S("Pásalo por harina, luego por huevo batido y por último por pan rallado, apretando bien para que se adhiera."),
      S("Corta las patatas en bastones y fríelas a 170 °C unos 10 minutos hasta que estén doradas. Escúrrelas y sálalas.", 10, 170),
      S("En el mismo aceite a 175 °C, fríe el cachopo 4 minutos por cada lado hasta que esté bien dorado y el queso fundido. Escúrrelo sobre papel 2 minutos antes de cortarlo.", 8, 175),
    ],
  }),
  r({
    id: "arroz-con-leche", title: "Arroz con leche", cuisine: "espanola", authenticity: "traditional",
    origin: "España (Asturias)", note: "En Asturias se sirve con el azúcar de encima quemado (requemado).",
    baseServings: 4, prepMin: 5, cookMin: 50, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("arroz", 150, "g"), I("leche", 1000, "ml"), I("azucar", 100, "g"), I("canela", 5, "g"), I("limon", 1, "unit"), I("mantequilla", 15, "g", true)],
    steps: [
      S("Pon la leche con la canela en rama y la piel del limón (solo la parte amarilla) en una olla a fuego medio. Cuando hierva, baja el fuego y cocina 5 minutos.", 5),
      S("Añade el arroz y cocina a fuego suave 35 minutos, removiendo cada 3 o 4 minutos para que no se pegue. El arroz debe quedar muy tierno y la leche espesa.", 35),
      S("Añade el azúcar y la mantequilla y cocina 5 minutos más removiendo.", 5),
      S("Retira la canela y la piel de limón. Reparte en cuencos y deja enfriar. Espolvorea azúcar o canela molida antes de servir."),
    ],
  }),
  r({
    id: "flan-de-huevo", title: "Flan de huevo", cuisine: "espanola", authenticity: "traditional",
    origin: "España", baseServings: 6, prepMin: 15, cookMin: 60, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("huevo", 5, "unit"), I("leche", 500, "ml"), I("azucar", 150, "g"), I("limon", 1, "unit", true)],
    steps: [
      S("Precalienta el horno a 160 °C. Pon 100 g de azúcar con 2 cucharadas de agua en un cazo a fuego medio, sin remover, 7 minutos hasta que tenga color ámbar. Viértelo en la flanera.", 7, 160),
      S("Calienta la leche con la piel de limón hasta que humee, sin hervir. Retira la piel.", 3),
      S("Bate los huevos con el resto del azúcar sin hacer espuma. Añade la leche poco a poco y cuela la mezcla sobre la flanera."),
      S("Coloca la flanera en una bandeja con agua caliente (baño maría) y hornea 50 minutos. Está hecho cuando al pinchar el centro con un palillo sale limpio.", 50, 160),
      S("Deja enfriar y luego mételo en la nevera al menos 4 horas. Para desmoldar, pasa un cuchillo por el borde y dale la vuelta sobre un plato."),
    ],
  }),
  // ——— Italia ———
  r({
    id: "espaguetis-bolonesa", title: "Espaguetis a la boloñesa", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (Bolonia)", note: "En Bolonia el ragù se sirve con tagliatelle y cuece varias horas; esta versión de diario cuece 45 minutos.",
    baseServings: 4, prepMin: 15, cookMin: 60, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("pasta", 400, "g"), I("ternera-picada", 400, "g"), I("cebolla", 1, "unit"), I("zanahoria", 100, "g"), I("tomate-triturado", 400, "g"), I("vino-blanco", 100, "ml"), I("ajo", 1, "unit"), I("aceite", 30, "ml"), I("queso", 40, "g", true), I("sal", 14, "g")],
    steps: [
      S("Pica muy fino la cebolla, la zanahoria y el ajo. Pocha en el aceite a fuego medio 10 minutos.", 10),
      S("Sube el fuego, añade la carne y cocina 8 minutos, deshaciéndola con la cuchara, hasta que pierda el color rosado.", 8),
      S("Vierte el vino y deja que se evapore 2 minutos. Añade el tomate y 4 g de sal.", 2),
      S("Cocina tapado a fuego muy suave 45 minutos, removiendo de vez en cuando. Si se seca, añade un poco de agua.", 45),
      S("Cuece la pasta en agua con sal según el paquete, escúrrela y mézclala con la salsa. Sirve con queso rallado.", 10),
    ],
  }),
  r({
    id: "pizza-margarita", title: "Pizza margarita casera", cuisine: "italiana", authenticity: "adapted",
    origin: "Italia (Nápoles)", note: "La napolitana se hace en horno de leña a más de 400 °C. En casa, con el horno al máximo, queda más crujiente y menos esponjosa.",
    baseServings: 2, prepMin: 25, cookMin: 15, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("harina", 300, "g"), I("levadura", 4, "g"), I("aceite", 15, "ml"), I("sal", 6, "g"), I("tomate-triturado", 200, "g"), I("mozzarella", 250, "g"), I("albahaca", 10, "g"), I("oregano", 1, "g", true)],
    steps: [
      S("Mezcla la harina, la levadura, la sal, el aceite y 190 ml de agua templada. Amasa 10 minutos hasta que la masa esté lisa y elástica.", 10),
      S("Divide en dos bolas, tápalas y déjalas reposar 1 hora en un sitio templado, hasta que doblen su volumen."),
      S("Precalienta el horno a 250 °C (o al máximo) con la bandeja dentro durante 20 minutos.", 20, 250),
      S("Estira cada bola con las manos hasta formar un disco fino. Extiende el tomate salado y reparte la mozzarella escurrida y troceada."),
      S("Hornea cada pizza 10 minutos sobre la bandeja caliente, hasta que los bordes estén dorados y el queso burbujee. Termina con albahaca fresca y, si te gusta, una pizca de orégano.", 10, 250),
    ],
  }),
  r({
    id: "pasta-al-pesto", title: "Pasta al pesto", cuisine: "italiana", authenticity: "traditional",
    origin: "Italia (Liguria)", baseServings: 2, prepMin: 10, cookMin: 12, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pasta", 200, "g"), I("albahaca", 40, "g"), I("pinones", 20, "g"), I("queso", 40, "g"), I("ajo", 1, "unit"), I("aceite", 60, "ml"), I("sal", 12, "g")],
    steps: [
      S("Pon a hervir 2 litros de agua con 12 g de sal."),
      S("Tritura las hojas de albahaca con los piñones, el ajo, el queso rallado y el aceite a golpes cortos, sin calentar la mezcla: debe quedar una pasta verde con algo de textura."),
      S("Cuece la pasta al dente, unos 10 minutos. Reserva medio vaso del agua de cocción.", 10),
      S("Mezcla la pasta con el pesto fuera del fuego, añadiendo un poco del agua reservada para que quede cremoso. Nunca cocines el pesto: se oscurece y amarga."),
    ],
  }),
  // ——— México ———
  r({
    id: "enchiladas-rojas", title: "Enchiladas rojas de pollo", cuisine: "mexicana", authenticity: "adapted",
    origin: "México", note: "Se usa queso para fundir y nata en lugar de queso fresco y crema mexicana.",
    baseServings: 3, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["horno", "batidora", "sarten"],
    ingredients: [I("tortilla-maiz", 9, "unit"), I("pollo", 400, "g"), I("tomate", 400, "g"), I("chile", 2, "unit"), I("ajo", 1, "unit"), I("cebolla", 1, "unit"), I("queso", 120, "g"), I("nata", 100, "ml"), I("aceite", 30, "ml"), I("sal", 5, "g")],
    steps: [
      S("Cuece el pollo en agua con sal 20 minutos. Escúrrelo y deshiláchalo con dos tenedores.", 20),
      S("Hierve el tomate, los chiles, el ajo y media cebolla 10 minutos. Tritura con un poco del agua y sala.", 10),
      S("Fríe la salsa en una sartén con una cucharada de aceite 5 minutos, hasta que oscurezca un poco.", 5),
      S("Pasa cada tortilla 5 segundos por aceite caliente y luego por la salsa. Rellénala de pollo, enróllala y colócala en una fuente."),
      S("Cubre con el resto de salsa y el queso. Hornea a 200 °C 10 minutos. Sirve con un chorrito de nata y cebolla en aros finos.", 10, 200),
    ],
  }),
  r({
    id: "huevos-rancheros", title: "Huevos rancheros", cuisine: "mexicana", authenticity: "traditional",
    origin: "México", baseServings: 2, prepMin: 10, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("tortilla-maiz", 4, "unit"), I("huevo", 4, "unit"), I("tomate", 300, "g"), I("chile", 1, "unit"), I("cebolla", 0.5, "unit"), I("ajo", 1, "unit"), I("frijoles-negros", 200, "g"), I("aguacate", 1, "unit", true), I("cilantro", 5, "g", true), I("aceite", 30, "ml"), I("sal", 4, "g")],
    steps: [
      S("Pica la cebolla, el ajo, el chile y el tomate. Sofríelos en una cucharada de aceite 10 minutos hasta formar una salsa espesa. Sala.", 10),
      S("Calienta los frijoles con un poco de su líquido en un cazo y aplástalos un poco con un tenedor.", 4),
      S("Calienta las tortillas en una sartén seca 30 segundos por lado.", 2),
      S("Fríe los huevos en el resto del aceite 2-3 minutos, con la yema líquida.", 3),
      S("Monta: tortilla, frijoles, huevo y salsa ranchera por encima. Acompaña con aguacate y cilantro."),
    ],
  }),
  // ——— Japón ———
  r({
    id: "ramen-shoyu", title: "Ramen shoyu casero", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón (adaptado)", note: "Un ramen de restaurante lleva caldo de muchas horas. Esta versión rápida usa caldo comprado reforzado con jengibre, ajo y soja.",
    baseServings: 2, prepMin: 15, cookMin: 25, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("fideos-ramen", 200, "g"), I("caldo", 1000, "ml"), I("soja", 60, "ml"), I("cerdo", 250, "g"), I("huevo", 2, "unit"), I("cebolleta", 2, "unit"), I("jengibre", 10, "g"), I("ajo", 2, "unit"), I("sesamo", 5, "g", true), I("aceite", 15, "ml")],
    steps: [
      S("Cuece los huevos en agua hirviendo 6 minutos y medio. Pásalos a agua con hielo, pélalos y córtalos por la mitad: la yema queda melosa.", 7),
      S("Calienta el caldo con el jengibre en láminas y los ajos aplastados 10 minutos a fuego suave. Añade la soja y retira el jengibre y el ajo.", 10),
      S("Corta el cerdo en filetes finos y dóralos en el aceite a fuego fuerte 3 minutos por lado.", 6),
      S("Cuece los fideos según el paquete (unos 3 minutos) y escúrrelos.", 3),
      S("Reparte los fideos en cuencos, cubre con el caldo caliente y coloca encima el cerdo, el huevo y la cebolleta picada. Espolvorea sésamo."),
    ],
  }),
  r({
    id: "pollo-teriyaki", title: "Pollo teriyaki con arroz", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón (adaptado)", note: "La salsa tradicional lleva sake y mirin; aquí se sustituyen por vino blanco y azúcar.",
    baseServings: 2, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 400, "g"), I("soja", 45, "ml"), I("azucar", 20, "g"), I("vino-blanco", 30, "ml"), I("jengibre", 5, "g"), I("arroz", 160, "g"), I("sesamo", 3, "g", true), I("cebolleta", 1, "unit", true), I("aceite", 10, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos en agua con sal y mantenlo tapado.", 15),
      S("Mezcla la soja, el azúcar, el vino y el jengibre rallado.", 1),
      S("Dora el pollo (mejor muslo deshuesado) con la piel hacia abajo en el aceite, a fuego medio, 7 minutos. Dale la vuelta y cocina 5 minutos más.", 12),
      S("Vierte la salsa y cocina 3 minutos dando la vuelta al pollo, hasta que la salsa espese y lo deje brillante.", 3),
      S("Corta el pollo en tiras y sírvelo sobre el arroz con la salsa, sésamo y cebolleta picada."),
    ],
  }),
  r({
    id: "gyudon", title: "Gyudon (ternera sobre arroz)", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "Se sustituyen el dashi y el mirin por caldo y azúcar.",
    baseServings: 2, prepMin: 10, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 250, "g"), I("cebolla", 1, "unit"), I("soja", 40, "ml"), I("azucar", 15, "g"), I("caldo", 150, "ml"), I("jengibre", 5, "g"), I("arroz", 180, "g"), I("huevo", 2, "unit", true)],
    steps: [
      S("Cuece el arroz 15 minutos y mantenlo tapado. Corta la ternera en lonchas muy finas (más fácil si está medio congelada) y la cebolla en plumas.", 15),
      S("Lleva a ebullición el caldo con la soja, el azúcar y el jengibre rallado. Añade la cebolla y cocina 5 minutos hasta que se ablande.", 5),
      S("Añade la ternera y cocina 2 minutos, solo hasta que cambie de color. Si se pasa, queda dura.", 2),
      S("Sirve sobre el arroz con un poco del caldo. Si quieres, corónalo con una yema de huevo cruda o un huevo escalfado."),
    ],
  }),
  // ——— China ———
  r({
    id: "pollo-kung-pao", title: "Pollo kung pao", cuisine: "china", authenticity: "adapted",
    origin: "China (Sichuan)", note: "Sin pimienta de Sichuan ni vinagre de Chinkiang: se usan chile y vinagre normal.",
    baseServings: 2, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 350, "g"), I("cacahuetes", 50, "g"), I("chile", 3, "unit"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("cebolleta", 2, "unit"), I("soja", 30, "ml"), I("vinagre", 15, "ml"), I("azucar", 10, "g"), I("harina", 10, "g"), I("arroz", 160, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos y mantenlo tapado. Corta el pollo en dados de 2 cm y mézclalo con la harina y la mitad de la soja.", 15),
      S("Mezcla en un vaso el resto de la soja, el vinagre, el azúcar y 3 cucharadas de agua."),
      S("Calienta el aceite a fuego muy fuerte. Saltea los chiles partidos 20 segundos y añade el pollo; cocina 4 minutos hasta que se dore.", 4),
      S("Añade el ajo, el jengibre y la parte blanca de la cebolleta, 1 minuto. Vierte la salsa y cocina 1 minuto hasta que espese.", 2),
      S("Apaga, añade los cacahuetes y la parte verde de la cebolleta. Sirve con el arroz."),
    ],
  }),
  r({
    id: "cerdo-agridulce", title: "Cerdo agridulce", cuisine: "china", authenticity: "adapted",
    origin: "China (Cantón)", note: "Versión casera con tomate en lugar de ketchup y sin piña.",
    baseServings: 3, prepMin: 20, cookMin: 30, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("cerdo", 450, "g"), I("pimiento", 1, "unit"), I("cebolla", 1, "unit"), I("tomate-triturado", 100, "g"), I("vinagre", 40, "ml"), I("azucar", 40, "g"), I("soja", 30, "ml"), I("harina", 60, "g"), I("huevo", 1, "unit"), I("arroz", 240, "g"), I("aceite", 300, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Corta el cerdo en dados de 2 cm, mézclalo con el huevo batido y luego rebózalo en la harina.", 15),
      S("Fríe el cerdo en el aceite a 175 °C en tandas, 4 minutos, hasta que esté dorado. Escúrrelo.", 4, 175),
      S("Mezcla el tomate, el vinagre, el azúcar, la soja y 4 cucharadas de agua.", 1),
      S("En una sartén con una cucharada de aceite, saltea el pimiento y la cebolla en trozos 3 minutos a fuego fuerte. Añade la salsa y cocina 2 minutos hasta que espese.", 5),
      S("Incorpora el cerdo, mezcla 30 segundos para que se cubra de salsa sin perder lo crujiente y sirve con el arroz.", 1),
    ],
  }),
  // ——— India ———
  r({
    id: "butter-chicken", title: "Butter chicken (pollo a la mantequilla)", cuisine: "india", authenticity: "adapted",
    origin: "India (Delhi)", note: "El original se hace con pollo asado en tandoor. Se usa curry en polvo en lugar de garam masala y kasuri methi.",
    baseServings: 4, prepMin: 20, cookMin: 45, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 700, "g"), I("yogur", 1, "unit"), I("curry", 15, "g"), I("ajo", 4, "unit"), I("jengibre", 15, "g"), I("tomate-triturado", 400, "g"), I("mantequilla", 40, "g"), I("nata", 200, "ml"), I("azucar", 5, "g"), I("arroz", 320, "g"), I("cilantro", 5, "g", true), I("sal", 7, "g")],
    steps: [
      S("Corta el pollo en trozos y mézclalo con el yogur, la mitad del curry, la mitad del ajo y el jengibre rallados y sal. Marina al menos 20 minutos (mejor 2 horas en la nevera).", 20),
      S("Dora el pollo en una sartén muy caliente con la mitad de la mantequilla, 6 minutos, hasta que tenga zonas tostadas. Resérvalo.", 6),
      S("En la misma sartén, el resto de mantequilla, ajo, jengibre y curry 1 minuto. Añade el tomate y el azúcar y cocina 10 minutos.", 11),
      S("Tritura la salsa si la quieres lisa. Añade la nata y el pollo y cocina a fuego suave 10 minutos.", 10),
      S("Cuece el arroz 12 minutos en agua con sal. Sirve el pollo con su salsa sobre el arroz y cilantro picado.", 12),
    ],
  }),
  // ——— Tailandia ———
  r({
    id: "pad-thai", title: "Pad thai de gambas", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia", note: "Sin tamarindo ni salsa de pescado: se sustituyen por vinagre, azúcar y soja. Sin brotes de soja.",
    baseServings: 2, prepMin: 20, cookMin: 12, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("fideos-arroz", 200, "g"), I("gambas", 200, "g"), I("huevo", 2, "unit"), I("cacahuetes", 40, "g"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("lima", 1, "unit"), I("soja", 30, "ml"), I("azucar", 15, "g"), I("vinagre", 15, "ml"), I("chile", 1, "unit", true), I("aceite", 30, "ml")],
    steps: [
      S("Remoja los fideos en agua caliente (no hirviendo) 10 minutos, hasta que estén flexibles pero firmes. Escúrrelos.", 10),
      S("Mezcla la soja, el azúcar, el vinagre y el zumo de media lima. Pica los cacahuetes y la cebolleta."),
      S("En una sartén muy caliente con el aceite, saltea el ajo 20 segundos y las gambas 2 minutos. Apártalas a un lado y cuaja los huevos revueltos 1 minuto.", 3),
      S("Añade los fideos y la salsa y saltea 3 minutos sin parar, hasta que los fideos absorban la salsa.", 3),
      S("Mezcla con la cebolleta y la mitad de los cacahuetes. Sirve con el resto de cacahuetes, chile y gajos de lima."),
    ],
  }),
  r({
    id: "tom-kha-gai", title: "Tom kha gai (sopa de pollo y coco)", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia", note: "Lleva jengibre en lugar de galanga y no lleva hojas de lima kaffir ni hierba limón.",
    baseServings: 3, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pollo", 400, "g"), I("leche-coco", 400, "ml"), I("caldo", 500, "ml"), I("champinones", 150, "g"), I("jengibre", 20, "g"), I("lima", 2, "unit"), I("chile", 2, "unit"), I("soja", 20, "ml"), I("cilantro", 10, "g")],
    steps: [
      S("Calienta el caldo con el jengibre en láminas finas y los chiles aplastados 5 minutos.", 5),
      S("Añade la leche de coco y el pollo en tiras finas. Cocina a fuego suave, sin que hierva fuerte, 8 minutos.", 8),
      S("Incorpora los champiñones laminados y cocina 4 minutos más.", 4),
      S("Apaga el fuego y añade el zumo de las limas y la soja. Prueba: debe ser ácida, salada y algo picante. Sirve con cilantro."),
    ],
  }),
  // ——— Vietnam ———
  r({
    id: "banh-mi-cerdo", title: "Banh mi de cerdo", cuisine: "vietnamita", authenticity: "adapted",
    origin: "Vietnam", note: "El pan vietnamita es más ligero que la barra española; también lleva paté y mayonesa, que aquí se omiten.",
    baseServings: 2, prepMin: 25, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pan", 250, "g"), I("cerdo", 250, "g"), I("zanahoria", 100, "g"), I("pepino", 100, "g"), I("vinagre", 50, "ml"), I("azucar", 15, "g"), I("soja", 20, "ml"), I("ajo", 1, "unit"), I("cilantro", 10, "g"), I("chile", 1, "unit", true), I("aceite", 15, "ml")],
    steps: [
      S("Corta la zanahoria en tiras finas y mézclala con el vinagre, 10 g de azúcar y una pizca de sal. Deja 15 minutos: es el encurtido rápido.", 15),
      S("Corta el cerdo en filetes finos y mézclalo con la soja, el ajo rallado y el resto del azúcar."),
      S("Dora el cerdo en la sartén muy caliente con el aceite, 2 minutos por lado.", 4),
      S("Abre el pan y caliéntalo 2 minutos en el horno o la sartén para que cruja.", 2),
      S("Rellena con el cerdo, la zanahoria escurrida, láminas de pepino, mucho cilantro y chile."),
    ],
  }),
  // ——— Corea ———
  r({
    id: "bulgogi", title: "Bulgogi de ternera", cuisine: "coreana", authenticity: "adapted",
    origin: "Corea", note: "La marinada tradicional lleva pera asiática para ablandar la carne; aquí se compensa cortándola muy fina.",
    baseServings: 3, prepMin: 45, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 450, "g"), I("soja", 60, "ml"), I("azucar", 25, "g"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("cebolla", 1, "unit"), I("cebolleta", 2, "unit"), I("sesamo", 5, "g"), I("arroz", 240, "g"), I("aceite", 15, "ml")],
    steps: [
      S("Corta la ternera en lonchas muy finas. Mézclala con la soja, el azúcar, el ajo y el jengibre rallados y la cebolla en tiras. Marina 30 minutos.", 30),
      S("Cuece el arroz 15 minutos y mantenlo tapado.", 15),
      S("Calienta una sartén grande a fuego muy fuerte con el aceite. Saltea la carne en tandas, 2-3 minutos cada una, para que se dore y no cueza.", 6),
      S("Sirve sobre el arroz con cebolleta picada y sésamo tostado."),
    ],
  }),
  // ——— Perú ———
  r({
    id: "ceviche", title: "Ceviche de pescado", cuisine: "peruana", authenticity: "adapted",
    origin: "Perú", note: "Usa pescado blanco muy fresco o, mejor, congelado previamente 5 días (a -18 °C) para evitar el anisakis. En Perú se usa corvina o lenguado y se acompaña de boniato y maíz.",
    baseServings: 3, prepMin: 25, cookMin: 0, difficulty: "medium",
    ingredients: [I("merluza", 400, "g"), I("lima", 6, "unit"), I("cebolla", 1, "unit"), I("chile", 1, "unit"), I("cilantro", 10, "g"), I("ajo", 1, "unit"), I("sal", 5, "g")],
    steps: [
      S("Corta el pescado sin piel ni espinas en dados de 2 cm y guárdalo en la nevera mientras preparas lo demás."),
      S("Corta la cebolla en pluma muy fina y déjala en agua con hielo 10 minutos para suavizarla. Pica el chile sin semillas y el cilantro.", 10),
      S("Exprime las limas justo antes de usarlas (si se exprimen con fuerza amargan)."),
      S("Mezcla el pescado con la sal y el ajo rallado. Añade el zumo de lima, el chile y la mitad del cilantro. Deja 3-5 minutos: el pescado se volverá blanco por fuera y seguirá jugoso por dentro.", 5),
      S("Sirve enseguida con la cebolla escurrida y el resto del cilantro."),
    ],
  }),
  r({
    id: "lomo-saltado", title: "Lomo saltado", cuisine: "peruana", authenticity: "traditional",
    origin: "Perú", note: "Plato de la cocina chifa (chino-peruana): salteado al wok con patatas fritas y arroz.",
    baseServings: 3, prepMin: 20, cookMin: 25, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("ternera", 450, "g"), I("tomate", 300, "g"), I("cebolla", 1, "unit"), I("chile", 1, "unit"), I("ajo", 2, "unit"), I("soja", 40, "ml"), I("vinagre", 20, "ml"), I("patata", 500, "g"), I("arroz", 240, "g"), I("cilantro", 10, "g", true), I("aceite", 400, "ml")],
    steps: [
      S("Cuece el arroz 15 minutos. Corta las patatas en bastones y fríelas a 170 °C 10 minutos hasta que estén doradas. Escúrrelas.", 15),
      S("Corta la ternera en tiras gruesas, la cebolla en gajos y el tomate en gajos sin semillas."),
      S("En una sartén muy caliente con 2 cucharadas de aceite, dora la carne en tandas 2 minutos. Resérvala.", 4),
      S("Saltea la cebolla y el chile 2 minutos a fuego fuerte; deben quedar algo crujientes. Añade el ajo, el tomate, la carne, la soja y el vinagre y saltea 1 minuto.", 3),
      S("Mezcla con las patatas fritas en el último momento y sirve con el arroz y cilantro."),
    ],
  }),
  // ——— Argentina ———
  r({
    id: "empanadas-carne", title: "Empanadas de carne", cuisine: "argentina", authenticity: "adapted",
    origin: "Argentina", note: "Con obleas compradas para simplificar. El relleno es el clásico de Buenos Aires con huevo y aceituna.",
    baseServings: 4, prepMin: 30, cookMin: 35, difficulty: "medium", equipment: ["horno", "sarten"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("ternera-picada", 400, "g"), I("cebolla", 2, "unit"), I("huevo", 2, "unit"), I("aceitunas", 60, "g"), I("comino", 3, "g"), I("pimenton", 5, "g"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Cuece un huevo 10 minutos, enfríalo y pícalo. Pica las cebollas.", 10),
      S("Pocha la cebolla en el aceite 10 minutos. Añade la carne, el comino, el pimentón y la sal y cocina 8 minutos. Deja enfriar el relleno.", 18),
      S("Precalienta el horno a 200 °C. Pon una cucharada de relleno en cada oblea con un trozo de huevo y de aceituna."),
      S("Moja el borde con agua, cierra y haz el repulgo pellizcando el borde. Pinta con el otro huevo batido."),
      S("Hornea 15 minutos hasta que estén doradas.", 15, 200),
    ],
  }),
  r({
    id: "milanesa", title: "Milanesa de ternera", cuisine: "argentina", authenticity: "traditional",
    origin: "Argentina", baseServings: 2, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera", 300, "g"), I("huevo", 2, "unit"), I("pan-rallado", 100, "g"), I("ajo", 1, "unit"), I("perejil", 5, "g"), I("limon", 1, "unit"), I("aceite", 250, "ml"), I("sal", 3, "g")],
    steps: [
      S("Aplana los filetes hasta medio centímetro. Bate los huevos con el ajo y el perejil muy picados y la sal."),
      S("Pasa los filetes por el huevo y después por el pan rallado, presionando con la palma para que quede bien adherido."),
      S("Fríe en el aceite a 175 °C, 2-3 minutos por lado, hasta que estén doradas.", 6, 175),
      S("Escúrrelas sobre papel y sírvelas con gajos de limón."),
    ],
  }),
  // ——— Grecia ———
  r({
    id: "moussaka", title: "Moussaka", cuisine: "griega", authenticity: "adapted",
    origin: "Grecia", note: "Las berenjenas se asan en el horno en lugar de freírse, para que quede menos pesada.",
    baseServings: 6, prepMin: 40, cookMin: 75, difficulty: "hard", equipment: ["horno", "sarten"],
    ingredients: [I("berenjena", 1000, "g"), I("ternera-picada", 600, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("tomate-triturado", 400, "g"), I("canela", 2, "g"), I("vino-blanco", 100, "ml"), I("leche", 600, "ml"), I("mantequilla", 60, "g"), I("harina", 60, "g"), I("huevo", 1, "unit"), I("queso", 80, "g"), I("aceite", 60, "ml"), I("sal", 10, "g")],
    steps: [
      S("Precalienta el horno a 200 °C. Corta las berenjenas en rodajas de 1 cm, pinta con aceite, sala y hornea 25 minutos dándoles la vuelta a mitad.", 25, 200),
      S("Mientras, pocha la cebolla y el ajo 8 minutos. Añade la carne y dórala 8 minutos. Agrega el vino, el tomate y la canela y cocina 15 minutos.", 31),
      S("Para la bechamel, funde la mantequilla, tuesta la harina 2 minutos y añade la leche poco a poco, removiendo 8 minutos hasta que espese. Fuera del fuego, añade el huevo y la mitad del queso.", 10),
      S("En una fuente, alterna capas de berenjena y carne. Cubre con la bechamel y el resto del queso."),
      S("Hornea a 180 °C 40 minutos hasta que esté dorada. Deja reposar 15 minutos antes de cortar.", 40, 180),
    ],
  }),
  // ——— Turquía ———
  r({
    id: "menemen", title: "Menemen", cuisine: "turca", authenticity: "traditional",
    origin: "Turquía", note: "Desayuno turco clásico. Se discute si lleva cebolla: aquí es opcional.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 4, "unit"), I("tomate", 400, "g"), I("pimiento", 2, "unit"), I("cebolla", 0.5, "unit", true), I("chile", 1, "unit", true), I("aceite", 30, "ml"), I("pan", 120, "g"), I("sal", 3, "g")],
    steps: [
      S("Pica el pimiento (mejor verde italiano) y la cebolla, y ralla o pica el tomate."),
      S("Sofríe el pimiento y la cebolla en el aceite a fuego medio 5 minutos.", 5),
      S("Añade el tomate y la sal y cocina 6 minutos hasta que se evapore casi todo el líquido.", 6),
      S("Añade los huevos batidos y remueve suavemente 2 minutos: deben quedar cremosos, no secos.", 2),
      S("Sirve en la misma sartén con pan para mojar y chile por encima."),
    ],
  }),
  r({
    id: "kofte-yogur", title: "Köfte con yogur", cuisine: "turca", authenticity: "adapted",
    origin: "Turquía", note: "Suelen ser de cordero o mezcla; aquí, de ternera.",
    baseServings: 4, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 500, "g"), I("cebolla", 1, "unit"), I("ajo", 2, "unit"), I("perejil", 15, "g"), I("comino", 4, "g"), I("pimenton", 3, "g"), I("pan-rallado", 30, "g"), I("yogur", 2, "unit"), I("pan-pita", 4, "unit"), I("tomate", 200, "g", true), I("aceite", 20, "ml"), I("sal", 6, "g")],
    steps: [
      S("Ralla la cebolla y exprime el líquido. Mézclala con la carne, un ajo y el perejil picados, el comino, el pimentón, el pan rallado y la sal. Amasa 2 minutos.", 2),
      S("Forma cilindros alargados de unos 8 cm y aplánalos ligeramente."),
      S("Cocínalos en una sartén o plancha muy caliente con el aceite, 4 minutos por lado, hasta que estén dorados.", 8),
      S("Mezcla el yogur con el otro ajo rallado y una pizca de sal. Calienta las pitas.", 2),
      S("Sirve las köfte con el yogur, las pitas y tomate en rodajas."),
    ],
  }),
  // ——— Marruecos ———
  r({
    id: "harira", title: "Harira", cuisine: "marroqui", authenticity: "adapted",
    origin: "Marruecos", note: "Sopa que rompe el ayuno en Ramadán. La tradicional suele llevar algo de carne; esta versión es vegetal.",
    baseServings: 4, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("lentejas", 150, "g"), I("garbanzos-cocidos", 400, "g"), I("tomate-triturado", 400, "g"), I("cebolla", 1, "unit"), I("cilantro", 15, "g"), I("perejil", 15, "g"), I("jengibre", 10, "g"), I("canela", 2, "g"), I("comino", 3, "g"), I("harina", 20, "g"), I("limon", 1, "unit"), I("caldo", 1000, "ml"), I("aceite", 30, "ml"), I("sal", 6, "g")],
    steps: [
      S("Pica la cebolla y la mitad de las hierbas. Sofríelas en el aceite 6 minutos con el jengibre rallado, la canela y el comino.", 6),
      S("Añade el tomate y cocina 5 minutos. Agrega el caldo y las lentejas lavadas.", 5),
      S("Cocina tapado a fuego suave 25 minutos, hasta que las lentejas estén tiernas.", 25),
      S("Añade los garbanzos escurridos. Disuelve la harina en un vaso de agua fría y viértela removiendo; cocina 5 minutos hasta que la sopa espese.", 5),
      S("Termina con el resto de hierbas picadas y sirve con gajos de limón."),
    ],
  }),
  // ——— Oriente Medio ———
  r({
    id: "hummus", title: "Hummus", cuisine: "oriente-medio", authenticity: "traditional",
    origin: "Oriente Medio", baseServings: 4, prepMin: 10, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("garbanzos-cocidos", 400, "g"), I("tahini", 60, "g"), I("limon", 1, "unit"), I("ajo", 1, "unit"), I("aceite", 40, "ml"), I("comino", 1, "g"), I("pimenton", 1, "g"), I("sal", 3, "g")],
    steps: [
      S("Escurre los garbanzos y guarda el líquido del bote. Si tienes paciencia, quítales la piel: el hummus queda mucho más fino."),
      S("Tritura los garbanzos con el tahini, el zumo de limón, el ajo, el comino y la sal 3 minutos, añadiendo líquido del bote hasta que quede una crema suave.", 3),
      S("Prueba y ajusta de limón y sal."),
      S("Sirve en un plato haciendo un surco con la cuchara, con un chorro de aceite y pimentón por encima."),
    ],
  }),
  r({
    id: "falafel", title: "Falafel con pita", cuisine: "oriente-medio", authenticity: "traditional",
    origin: "Oriente Medio", note: "Se hacen con garbanzos secos remojados, nunca cocidos: si los cueces, se deshacen al freír.",
    baseServings: 4, prepMin: 30, cookMin: 15, difficulty: "medium", equipment: ["batidora", "sarten"],
    ingredients: [I("garbanzos", 250, "g"), I("cebolla", 1, "unit"), I("ajo", 3, "unit"), I("perejil", 20, "g"), I("cilantro", 20, "g"), I("comino", 5, "g"), I("harina", 15, "g"), I("aceite", 400, "ml"), I("pan-pita", 4, "unit"), I("tahini", 40, "g"), I("limon", 1, "unit"), I("sal", 6, "g")],
    steps: [
      S("La víspera, pon los garbanzos secos en remojo en abundante agua fría durante 12 horas. Escúrrelos y sécalos bien."),
      S("Tritura los garbanzos con la cebolla, el ajo, las hierbas, el comino y la sal a golpes, hasta una textura de arena húmeda (no de puré). Añade la harina y deja reposar 15 minutos en la nevera.", 15),
      S("Forma bolas algo aplastadas del tamaño de una nuez, apretando bien."),
      S("Fríe en el aceite a 175 °C, en tandas, 4 minutos, hasta que estén muy doradas. Escúrrelas.", 4, 175),
      S("Mezcla el tahini con el zumo de limón y agua hasta que quede una salsa fluida. Sirve los falafel en pita con la salsa."),
    ],
  }),
  // ——— Francia ———
  r({
    id: "crepes", title: "Crêpes", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia (Bretaña)", note: "Salen unas 12. Dulces con azúcar y limón o chocolate, o saladas con jamón y queso.",
    baseServings: 4, prepMin: 40, cookMin: 25, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("harina", 125, "g"), I("huevo", 2, "unit"), I("leche", 300, "ml"), I("mantequilla", 30, "g"), I("azucar", 10, "g"), I("sal", 1, "g")],
    steps: [
      S("Tritura la harina, los huevos, la leche, el azúcar, la sal y la mantequilla derretida 1 minuto, hasta una masa líquida y sin grumos.", 1),
      S("Deja reposar la masa 30 minutos en la nevera: así las crêpes no se rompen.", 30),
      S("Calienta una sartén antiadherente a fuego medio y úntala con unas gotas de mantequilla."),
      S("Vierte un cazo pequeño de masa y gira la sartén para cubrir el fondo con una capa fina. Cocina 1 minuto, hasta que los bordes se despeguen; dale la vuelta y cocina 30 segundos más.", 2),
      S("Repite con el resto de la masa, apilando las crêpes en un plato. Rellena al gusto."),
    ],
  }),
  r({
    id: "ratatouille", title: "Ratatouille", cuisine: "francesa", authenticity: "traditional",
    origin: "Francia (Provenza)", note: "Cada verdura se cocina por separado para que conserve su textura.",
    baseServings: 4, prepMin: 20, cookMin: 50, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("berenjena", 400, "g"), I("calabacin", 400, "g"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("tomate", 600, "g"), I("ajo", 3, "unit"), I("albahaca", 10, "g", true), I("oregano", 1, "g"), I("aceite", 60, "ml"), I("sal", 8, "g")],
    steps: [
      S("Corta la berenjena, el calabacín y los pimientos en dados de 2 cm. Pica la cebolla y el ajo, y trocea el tomate."),
      S("Saltea la berenjena en una sartén con un tercio del aceite 8 minutos, hasta que se dore. Sácala y haz lo mismo con el calabacín (6 minutos) y con el pimiento (6 minutos).", 20),
      S("En una olla, pocha la cebolla y el ajo 8 minutos. Añade el tomate y el orégano y cocina 10 minutos.", 18),
      S("Añade todas las verduras, sala y cocina tapado a fuego suave 15 minutos, removiendo con cuidado para no romperlas.", 15),
      S("Termina con albahaca fresca. Está aún mejor al día siguiente."),
    ],
  }),
  // ——— Estados Unidos ———
  r({
    id: "hamburguesa-casera", title: "Hamburguesa casera", cuisine: "estadounidense", authenticity: "traditional",
    origin: "Estados Unidos", baseServings: 4, prepMin: 15, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("ternera-picada", 600, "g"), I("pan-hamburguesa", 4, "unit"), I("queso", 100, "g"), I("tomate", 150, "g"), I("lechuga", 1, "unit"), I("cebolla", 1, "unit"), I("aceite", 10, "ml"), I("sal", 6, "g"), I("pimienta", 2, "g")],
    steps: [
      S("Divide la carne en 4 bolas de 150 g y aplánalas hasta 1,5 cm, un poco más anchas que el pan. Haz un hoyuelo en el centro con el pulgar: así no se abomban. Sala justo antes de cocinar."),
      S("Calienta una sartén o plancha a fuego fuerte con unas gotas de aceite. Cocina las hamburguesas 3 minutos sin moverlas.", 3),
      S("Dales la vuelta, coloca el queso encima y cocina 2-3 minutos más para que quede jugosa (4 si la quieres muy hecha).", 3),
      S("Tuesta el pan por la cara del corte 1 minuto en la misma sartén.", 1),
      S("Monta con lechuga, tomate y cebolla en aros, y la salsa que te guste."),
    ],
  }),
  r({
    id: "mac-and-cheese", title: "Macarrones con queso (mac and cheese)", cuisine: "estadounidense", authenticity: "traditional",
    origin: "Estados Unidos", baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("pasta", 400, "g"), I("queso", 250, "g"), I("leche", 600, "ml"), I("mantequilla", 50, "g"), I("harina", 40, "g"), I("pan-rallado", 40, "g", true), I("sal", 14, "g"), I("pimienta", 1, "g")],
    steps: [
      S("Cuece los macarrones 2 minutos menos de lo que indica el paquete. Escúrrelos.", 8),
      S("Funde la mantequilla, añade la harina y tuéstala 2 minutos. Añade la leche poco a poco y remueve 6 minutos hasta que espese.", 8),
      S("Fuera del fuego, añade el queso rallado (mejor cheddar o un queso curado) y remueve hasta que se funda. Salpimienta."),
      S("Mezcla la pasta con la salsa, pásala a una fuente y cubre con pan rallado.", 1),
      S("Gratina en el horno a 200 °C 10 minutos hasta que esté dorado por encima.", 10, 200),
    ],
  }),
  // ——— Brasil ———
  r({
    id: "moqueca", title: "Moqueca de pescado", cuisine: "brasilena", authenticity: "adapted",
    origin: "Brasil (Bahía)", note: "La bahiana lleva aceite de dendê (de palma roja); aquí se sustituye por aceite de oliva y pimentón.",
    baseServings: 4, prepMin: 20, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("merluza", 600, "g"), I("leche-coco", 400, "ml"), I("pimiento", 2, "unit"), I("cebolla", 1, "unit"), I("tomate", 400, "g"), I("ajo", 3, "unit"), I("lima", 2, "unit"), I("cilantro", 15, "g"), I("pimenton", 5, "g"), I("arroz", 320, "g"), I("aceite", 30, "ml"), I("sal", 7, "g")],
    steps: [
      S("Corta el pescado en trozos grandes y marínalo con el zumo de las limas, el ajo rallado y sal 15 minutos.", 15),
      S("Cuece el arroz 12 minutos en agua con sal.", 12),
      S("En una olla ancha, coloca en capas la cebolla, los pimientos y el tomate en rodajas, con el aceite y el pimentón. Pon el pescado encima."),
      S("Vierte la leche de coco, tapa y cocina a fuego medio 15 minutos sin remover, hasta que el pescado se separe en lascas.", 15),
      S("Termina con cilantro picado y sirve con el arroz."),
    ],
  }),
];
