import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Lote 4C: Asia (India, Tailandia, Vietnam, China, Japón, Corea, Indonesia, Filipinas). Recetas escritas para COMOCOMO. */
export const recipesAsia: Recipe[] = [
  // ——— India ———
  r({
    id: "tikka-masala", title: "Pollo tikka masala", cuisine: "india", authenticity: "adapted",
    origin: "India y Reino Unido", note: "Nació en restaurantes indios del Reino Unido. Curry en polvo en lugar de garam masala.",
    baseServings: 4, prepMin: 30, cookMin: 35, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 700, "g"), I("yogur", 1, "unit"), I("curry", 15, "g"), I("pimenton", 5, "g"), I("ajo", 4, "unit"), I("jengibre", 15, "g"), I("cebolla", 1, "unit"), I("tomate-triturado", 400, "g"), I("nata", 150, "ml"), I("arroz-basmati", 300, "g"), I("aceite", 30, "ml"), I("sal", 7, "g"), I("cilantro", 5, "g", true)],
    steps: [
      S("Corta el pollo en dados y marínalo con el yogur, la mitad del curry, el pimentón, la mitad del ajo y el jengibre rallados y sal 20 minutos.", 20),
      S("Dora el pollo en una sartén muy caliente con la mitad del aceite 6 minutos, hasta que tenga zonas tostadas. Resérvalo.", 6),
      S("Sofríe la cebolla picada en el resto del aceite 8 minutos. Añade el ajo, el jengibre y el curry restantes 1 minuto, y luego el tomate; cocina 10 minutos.", 19),
      S("Añade la nata y el pollo y cocina 8 minutos a fuego suave.", 8),
      S("Cuece el basmati 10 minutos en agua con sal. Sirve con cilantro.", 10),
    ],
  }),
  r({
    id: "aloo-gobi", title: "Aloo gobi (patata y coliflor especiadas)", cuisine: "india", authenticity: "adapted",
    origin: "India (Punyab)", note: "Se usa curry en polvo en lugar de cúrcuma, comino en grano y garam masala por separado.",
    baseServings: 4, prepMin: 15, cookMin: 30, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("patata", 500, "g"), I("coliflor", 1, "unit"), I("cebolla", 1, "unit"), I("tomate", 200, "g"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("curry", 10, "g"), I("comino", 3, "g"), I("aceite", 50, "ml"), I("cilantro", 10, "g"), I("sal", 6, "g")],
    steps: [
      S("Corta la patata en dados de 2 cm y la coliflor en ramilletes pequeños."),
      S("En una sartén amplia, tuesta el comino en el aceite 30 segundos y sofríe la cebolla 6 minutos. Añade ajo, jengibre y curry 1 minuto.", 8),
      S("Añade la patata y la coliflor con la sal, mezcla bien, tapa y cocina a fuego medio-bajo 15 minutos, removiendo de vez en cuando.", 15),
      S("Añade el tomate picado y cocina destapado 6 minutos más, hasta que las verduras estén tiernas y doradas. Termina con cilantro.", 6),
    ],
  }),
  r({
    id: "korma-pollo", title: "Korma de pollo", cuisine: "india", authenticity: "adapted",
    origin: "India (cocina mogol)", note: "Curry suave y cremoso, ideal para quien no tolera el picante.",
    baseServings: 4, prepMin: 15, cookMin: 40, difficulty: "easy", equipment: ["sarten", "olla", "batidora"],
    ingredients: [I("pollo", 700, "g"), I("cebolla", 2, "unit"), I("almendras", 60, "g"), I("yogur", 1, "unit"), I("nata", 150, "ml"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("curry", 10, "g"), I("canela", 2, "g"), I("arroz-basmati", 300, "g"), I("aceite", 30, "ml"), I("sal", 7, "g")],
    steps: [
      S("Pocha las cebollas en el aceite 12 minutos hasta que estén doradas. Tritúralas con las almendras y un poco de agua hasta tener una pasta.", 12),
      S("En la misma sartén, rehoga el ajo y el jengibre rallados con el curry y la canela 1 minuto.", 1),
      S("Añade el pollo en trozos y dóralo 5 minutos. Incorpora la pasta de cebolla, el yogur y la sal y cocina tapado 15 minutos.", 20),
      S("Añade la nata y cocina 5 minutos. Sirve con el basmati cocido 10 minutos.", 10),
    ],
  }),
  r({
    id: "biryani-pollo", title: "Biryani de pollo", cuisine: "india", authenticity: "adapted",
    origin: "India (Hyderabad)", note: "Versión de una olla. El biryani tradicional se cocina en capas y lleva azafrán.",
    baseServings: 4, prepMin: 25, cookMin: 40, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("arroz-basmati", 350, "g"), I("pollo", 600, "g"), I("yogur", 1, "unit"), I("cebolla", 2, "unit"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("curry", 15, "g"), I("canela", 3, "g"), I("menta", 10, "g"), I("cilantro", 10, "g"), I("caldo", 650, "ml"), I("aceite", 40, "ml"), I("sal", 8, "g")],
    steps: [
      S("Lava el arroz hasta que el agua salga clara y déjalo en remojo 20 minutos. Marina el pollo con el yogur, el curry y la sal.", 20),
      S("Fríe las cebollas en juliana en el aceite 12 minutos hasta que estén muy doradas. Reserva la mitad para decorar.", 12),
      S("Añade a la olla el ajo, el jengibre y la canela 1 minuto, y el pollo marinado 6 minutos.", 7),
      S("Añade el arroz escurrido y el caldo caliente con la mitad de las hierbas. Tapa y cocina a fuego muy bajo 15 minutos, sin remover.", 15),
      S("Deja reposar 5 minutos, suelta el arroz con un tenedor y sirve con la cebolla frita y el resto de hierbas.", 5),
    ],
  }),
  r({
    id: "lassi-mango", title: "Lassi de mango", cuisine: "india", authenticity: "traditional",
    origin: "India", baseServings: 2, prepMin: 5, cookMin: 0, difficulty: "easy", equipment: ["batidora"],
    ingredients: [I("mango", 1, "unit"), I("yogur", 2, "unit"), I("leche", 150, "ml"), I("azucar", 15, "g")],
    steps: [
      S("Pela el mango y corta la pulpa."),
      S("Tritura el mango con el yogur, la leche, el azúcar y unos cubitos de hielo 1 minuto, hasta que quede espumoso.", 1),
      S("Sirve muy frío. Si te gusta, espolvorea un poco de canela o cardamomo."),
    ],
  }),
  // ——— Tailandia ———
  r({
    id: "curry-verde-pollo", title: "Curry verde de pollo", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia", note: "Sin berenjena tailandesa ni hojas de lima kaffir. La pasta de curry suele llevar gamba.",
    baseServings: 3, prepMin: 15, cookMin: 25, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 450, "g"), I("pasta-curry-verde", 40, "g"), I("leche-coco", 400, "ml"), I("calabacin", 200, "g"), I("albahaca", 10, "g"), I("lima", 1, "unit"), I("soja", 15, "ml"), I("azucar", 8, "g"), I("arroz", 240, "g"), I("aceite", 15, "ml")],
    steps: [
      S("Cuece el arroz 12 minutos y mantenlo tapado.", 12),
      S("Fríe la pasta de curry en el aceite 1 minuto. Añade la mitad de la leche de coco y cocina 3 minutos hasta que brille.", 4),
      S("Añade el pollo en tiras y cocina 4 minutos. Incorpora el resto de la leche de coco, el calabacín en medias lunas, la soja y el azúcar.", 4),
      S("Cocina a fuego suave 8 minutos. Apaga y añade la albahaca y el zumo de lima. Sirve con el arroz.", 8),
    ],
  }),
  r({
    id: "tom-yum-gambas", title: "Tom yum de gambas", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia", note: "Sin hierba limón, galanga ni hojas de lima kaffir: el jengibre y la lima aportan el frescor.",
    baseServings: 3, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("gambas", 300, "g"), I("caldo", 1000, "ml"), I("champinones", 200, "g"), I("tomate", 150, "g"), I("jengibre", 20, "g"), I("chile", 3, "unit"), I("lima", 2, "unit"), I("soja", 30, "ml"), I("azucar", 5, "g"), I("cilantro", 10, "g")],
    steps: [
      S("Calienta el caldo con el jengibre en láminas y los chiles aplastados 6 minutos.", 6),
      S("Añade los champiñones laminados y el tomate en gajos y cocina 4 minutos.", 4),
      S("Incorpora las gambas peladas y cocina 2 minutos, solo hasta que se pongan rosadas.", 2),
      S("Apaga el fuego y añade la soja, el azúcar y el zumo de lima. Debe ser ácido, picante y salado. Sirve con cilantro."),
    ],
  }),
  r({
    id: "arroz-mango-coco", title: "Arroz con mango y coco (mango sticky rice)", cuisine: "tailandesa", authenticity: "adapted",
    origin: "Tailandia", note: "Se hace con arroz glutinoso al vapor; con arroz redondo normal queda cremoso pero no tan pegajoso.",
    baseServings: 4, prepMin: 10, cookMin: 30, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("arroz", 250, "g"), I("leche-coco", 400, "ml"), I("azucar", 60, "g"), I("mango", 2, "unit"), I("sesamo", 5, "g", true), I("sal", 2, "g")],
    steps: [
      S("Cuece el arroz en 400 ml de agua a fuego bajo, tapado, 18 minutos hasta que absorba el agua.", 18),
      S("Calienta 300 ml de leche de coco con el azúcar y la sal sin que hierva 3 minutos.", 3),
      S("Mezcla el arroz caliente con la leche de coco dulce y deja reposar tapado 15 minutos: la absorberá.", 15),
      S("Sirve con el mango en láminas, el resto de la leche de coco por encima y sésamo tostado."),
    ],
  }),
  // ——— Vietnam ———
  r({
    id: "pho-bo", title: "Pho de ternera", cuisine: "vietnamita", authenticity: "adapted",
    origin: "Vietnam (Hanói)", note: "El caldo de verdad cuece huesos durante horas con anís estrellado. Esta versión rápida aromatiza caldo comprado.",
    baseServings: 3, prepMin: 15, cookMin: 35, difficulty: "medium", equipment: ["olla", "sarten"],
    ingredients: [I("fideos-arroz", 250, "g"), I("ternera", 300, "g"), I("caldo", 1500, "ml"), I("cebolla", 1, "unit"), I("jengibre", 30, "g"), I("canela", 4, "g"), I("soja", 40, "ml"), I("azucar", 8, "g"), I("lima", 2, "unit"), I("cilantro", 15, "g"), I("cebolleta", 2, "unit"), I("chile", 1, "unit", true)],
    steps: [
      S("Tuesta la cebolla partida y el jengibre en láminas en una sartén seca 6 minutos, hasta que se tiznen. Así el caldo coge sabor ahumado.", 6),
      S("Ponlos en el caldo con la canela, la soja y el azúcar. Cocina a fuego suave 25 minutos y cuela.", 25),
      S("Remoja los fideos en agua caliente 8 minutos y repártelos en cuencos. Corta la ternera cruda en lonchas finísimas.", 8),
      S("Coloca la ternera cruda sobre los fideos y vierte encima el caldo hirviendo: se cocinará al momento.", 1),
      S("Sirve con cilantro, cebolleta, chile y gajos de lima para que cada uno ajuste."),
    ],
  }),
  r({
    id: "rollitos-vietnamitas", title: "Rollitos vietnamitas de gambas (gỏi cuốn)", cuisine: "vietnamita", authenticity: "adapted",
    origin: "Vietnam", note: "Se mojan en salsa hoisin con cacahuete; aquí una salsa sencilla de cacahuete, soja y lima.",
    baseServings: 3, prepMin: 30, cookMin: 10, difficulty: "medium", equipment: ["olla"],
    ingredients: [I("papel-arroz", 12, "unit"), I("gambas", 250, "g"), I("fideos-arroz", 80, "g"), I("lechuga", 1, "unit"), I("zanahoria", 100, "g"), I("pepino", 100, "g"), I("menta", 10, "g"), I("cilantro", 10, "g"), I("cacahuetes", 60, "g"), I("soja", 30, "ml"), I("lima", 1, "unit"), I("azucar", 10, "g")],
    steps: [
      S("Cuece las gambas 2 minutos y pártelas a lo largo. Remoja los fideos en agua caliente 6 minutos y escúrrelos.", 8),
      S("Corta la zanahoria y el pepino en tiras finas. Separa las hojas de lechuga y de hierbas."),
      S("Moja una oblea en agua tibia 3 segundos y ponla en un paño. Coloca lechuga, fideos, verduras, hierbas y 3 mitades de gamba con el lado rosa hacia abajo."),
      S("Dobla los lados y enrolla apretando. Repite con el resto."),
      S("Para la salsa, tritura o machaca los cacahuetes con la soja, el zumo de lima, el azúcar y un poco de agua."),
    ],
  }),
  // ——— China ———
  r({
    id: "chow-mein", title: "Chow mein de pollo", cuisine: "china", authenticity: "adapted",
    origin: "China (Cantón)", note: "Sin salsa de ostras: soja y un poco de azúcar.",
    baseServings: 2, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("fideos-ramen", 200, "g"), I("pollo", 250, "g"), I("zanahoria", 100, "g"), I("repollo", 0.25, "unit"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("soja", 40, "ml"), I("azucar", 5, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece los fideos 1 minuto menos de lo que indica el paquete, escúrrelos y mézclalos con una cucharada de aceite.", 3),
      S("Saltea el pollo en tiras en el aceite a fuego muy fuerte 4 minutos. Resérvalo.", 4),
      S("Saltea el ajo, el jengibre, la zanahoria en juliana y el repollo en tiras 3 minutos.", 3),
      S("Añade los fideos, el pollo, la soja y el azúcar y saltea 2 minutos sin parar. Termina con cebolleta.", 2),
    ],
  }),
  r({
    id: "mapo-tofu", title: "Mapo tofu", cuisine: "china", authenticity: "adapted",
    origin: "China (Sichuan)", note: "Sin doubanjiang ni pimienta de Sichuan: pimentón picante y chile.",
    baseServings: 3, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("tofu", 400, "g"), I("ternera-picada", 150, "g"), I("chile", 2, "unit"), I("pimenton", 5, "g"), I("ajo", 3, "unit"), I("jengibre", 10, "g"), I("soja", 30, "ml"), I("harina", 10, "g"), I("caldo", 250, "ml"), I("cebolleta", 2, "unit"), I("arroz", 240, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 12 minutos. Corta el tofu en dados de 2 cm y escáldalo 2 minutos en agua con sal para que no se rompa.", 14),
      S("Dora la carne en el aceite 4 minutos. Añade el ajo, el jengibre, el chile y el pimentón 1 minuto.", 5),
      S("Añade el caldo y la soja y lleva a ebullición. Incorpora el tofu con cuidado y cocina 4 minutos.", 4),
      S("Disuelve la harina en un poco de agua fría, añádela y cocina 1 minuto hasta que espese. Sirve con cebolleta y arroz.", 1),
    ],
  }),
  r({
    id: "tomate-con-huevo", title: "Huevo revuelto con tomate (fanqie chao dan)", cuisine: "china", authenticity: "traditional",
    origin: "China", note: "Uno de los platos caseros más populares de China. Lleva un punto dulce.",
    baseServings: 2, prepMin: 5, cookMin: 10, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("huevo", 4, "unit"), I("tomate", 400, "g"), I("azucar", 8, "g"), I("cebolleta", 1, "unit"), I("aceite", 30, "ml"), I("sal", 3, "g")],
    steps: [
      S("Bate los huevos con una pizca de sal. Corta los tomates en gajos."),
      S("Cuaja los huevos en la mitad del aceite a fuego fuerte 1 minuto, en trozos grandes y aún jugosos. Retíralos.", 1),
      S("Saltea el tomate en el resto del aceite 4 minutos con el azúcar y la sal, hasta que suelte su jugo.", 4),
      S("Devuelve el huevo, mezcla 30 segundos y sirve con cebolleta. Va muy bien con arroz blanco.", 1),
    ],
  }),
  r({
    id: "pollo-almendras", title: "Pollo con almendras", cuisine: "china", authenticity: "adapted",
    origin: "China (versión de restaurante chino en España)", note: "Un clásico de los restaurantes chinos en España más que de China.",
    baseServings: 3, prepMin: 15, cookMin: 20, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("pollo", 450, "g"), I("almendras", 60, "g"), I("zanahoria", 100, "g"), I("calabacin", 150, "g"), I("cebolla", 0.5, "unit"), I("soja", 40, "ml"), I("harina", 10, "g"), I("azucar", 5, "g"), I("arroz", 240, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Cuece el arroz 12 minutos. Corta el pollo en dados y mézclalo con la harina y la mitad de la soja.", 12),
      S("Tuesta las almendras en una sartén seca 3 minutos y resérvalas.", 3),
      S("Saltea el pollo en el aceite a fuego fuerte 5 minutos. Añade la zanahoria, el calabacín y la cebolla en dados pequeños y saltea 4 minutos: deben quedar algo crujientes.", 9),
      S("Añade el resto de la soja, el azúcar y 4 cucharadas de agua; cocina 1 minuto hasta que se forme la salsa. Termina con las almendras.", 1),
    ],
  }),
  // ——— Japón ———
  r({
    id: "okonomiyaki", title: "Okonomiyaki", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón (Osaka)", note: "Sin dashi, ñame ni salsa okonomiyaki: se termina con una salsa casera de soja y tomate, y mayonesa.",
    baseServings: 2, prepMin: 15, cookMin: 20, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("harina", 120, "g"), I("huevo", 2, "unit"), I("repollo", 0.25, "unit"), I("panceta", 100, "g"), I("cebolleta", 2, "unit"), I("soja", 20, "ml"), I("tomate-triturado", 40, "g"), I("azucar", 5, "g"), I("aceite", 20, "ml")],
    steps: [
      S("Mezcla la harina con los huevos y 120 ml de agua. Añade el repollo cortado muy fino y la cebolleta: debe haber más repollo que masa."),
      S("Calienta el aceite a fuego medio, vierte la mitad de la masa formando una torta de 2 cm y coloca tiras de panceta encima.", 1),
      S("Cocina 5 minutos, dale la vuelta (panceta abajo) y cocina 5 minutos más, hasta que esté dorada y hecha por dentro. Repite con la otra mitad.", 20),
      S("Mezcla la soja, el tomate y el azúcar para la salsa. Píntala por encima y sirve, con mayonesa en zigzag si tienes."),
    ],
  }),
  r({
    id: "yakisoba", title: "Yakisoba de cerdo", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "La salsa yakisoba se imita con soja, tomate y azúcar.",
    baseServings: 2, prepMin: 15, cookMin: 15, difficulty: "easy", equipment: ["sarten", "olla"],
    ingredients: [I("fideos-ramen", 200, "g"), I("cerdo", 200, "g"), I("repollo", 0.25, "unit"), I("zanahoria", 80, "g"), I("cebolla", 0.5, "unit"), I("soja", 30, "ml"), I("tomate-triturado", 30, "g"), I("azucar", 8, "g"), I("aceite", 20, "ml")],
    steps: [
      S("Cuece los fideos 2 minutos, escúrrelos y pásalos por agua fría.", 2),
      S("Saltea el cerdo en tiras finas en el aceite a fuego fuerte 3 minutos.", 3),
      S("Añade la cebolla, la zanahoria y el repollo cortados finos y saltea 4 minutos.", 4),
      S("Incorpora los fideos y la salsa (soja, tomate y azúcar) y saltea 2 minutos hasta que todo esté brillante.", 2),
    ],
  }),
  r({
    id: "katsu-curry", title: "Katsu curry", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "El curry japonés suele hacerse con pastillas de roux; aquí se espesa con harina y curry en polvo.",
    baseServings: 3, prepMin: 20, cookMin: 35, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("cerdo", 400, "g"), I("harina", 60, "g"), I("huevo", 1, "unit"), I("pan-rallado", 80, "g"), I("cebolla", 1, "unit"), I("zanahoria", 150, "g"), I("patata", 250, "g"), I("curry", 15, "g"), I("caldo", 600, "ml"), I("mantequilla", 30, "g"), I("arroz", 240, "g"), I("aceite", 300, "ml"), I("sal", 4, "g")],
    steps: [
      S("Para el curry, pocha la cebolla en la mantequilla 6 minutos, añade 25 g de harina y el curry y remueve 1 minuto. Agrega el caldo, la zanahoria y la patata en dados y cocina 20 minutos.", 27),
      S("Cuece el arroz 12 minutos.", 12),
      S("Aplana los filetes de cerdo, sálalos y pásalos por el resto de harina, huevo y pan rallado.", 3),
      S("Fríe a 175 °C 3 minutos por lado hasta que estén dorados. Escurre y corta en tiras.", 6, 175),
      S("Sirve el arroz, el curry al lado y el cerdo crujiente encima."),
    ],
  }),
  r({
    id: "tamagoyaki", title: "Tamagoyaki (tortilla japonesa enrollada)", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "Se hace en sartén rectangular; en una redonda también sale, recortando los bordes.",
    baseServings: 2, prepMin: 5, cookMin: 10, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("huevo", 4, "unit"), I("azucar", 10, "g"), I("soja", 10, "ml"), I("aceite", 10, "ml"), I("sal", 1, "g")],
    steps: [
      S("Bate los huevos con el azúcar, la soja, la sal y 2 cucharadas de agua, sin hacer espuma."),
      S("Unta la sartén con aceite a fuego medio-bajo y vierte una capa fina de huevo. Cuando esté casi cuajada, enróllala hacia un lado.", 2),
      S("Vuelve a untar, vierte otra capa levantando el rollo para que el huevo pase por debajo y enrolla de nuevo. Repite hasta terminar.", 6),
      S("Deja reposar 2 minutos y corta en rodajas gruesas.", 2),
    ],
  }),
  r({
    id: "gyoza", title: "Gyozas a la plancha", cuisine: "japonesa", authenticity: "adapted",
    origin: "Japón", note: "Se usan obleas de empanadilla en lugar de obleas de gyoza, y carne de ternera en lugar de cerdo picado.",
    baseServings: 4, prepMin: 40, cookMin: 15, difficulty: "medium", equipment: ["sarten"],
    ingredients: [I("obleas-empanadilla", 16, "unit"), I("ternera-picada", 250, "g"), I("repollo", 0.25, "unit"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("jengibre", 10, "g"), I("soja", 40, "ml"), I("vinagre", 20, "ml"), I("aceite", 20, "ml"), I("sal", 3, "g")],
    steps: [
      S("Pica el repollo muy fino, sálalo y estrújalo para quitarle el agua. Mézclalo con la carne, la cebolleta, el ajo y el jengibre rallados y la mitad de la soja."),
      S("Pon una cucharadita de relleno en cada oblea, moja el borde y ciérrala haciendo pliegues por un lado."),
      S("Dóralas en el aceite por la base 3 minutos a fuego medio.", 3),
      S("Añade 100 ml de agua, tapa y cocina al vapor 5 minutos. Destapa y deja que se evapore el agua y la base vuelva a crujir, 2 minutos.", 7),
      S("Sirve con una salsa de soja y vinagre a partes iguales."),
    ],
  }),
  // ——— Corea ———
  r({
    id: "japchae", title: "Japchae (fideos salteados coreanos)", cuisine: "coreana", authenticity: "adapted",
    origin: "Corea", note: "Se hace con fideos de boniato (dangmyeon); con fideos de arroz queda más suave.",
    baseServings: 3, prepMin: 25, cookMin: 15, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("fideos-arroz", 200, "g"), I("ternera", 200, "g"), I("espinacas", 150, "g"), I("zanahoria", 100, "g"), I("champinones", 150, "g"), I("cebolla", 0.5, "unit"), I("ajo", 2, "unit"), I("soja", 50, "ml"), I("azucar", 15, "g"), I("sesamo", 8, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Remoja los fideos en agua caliente 8 minutos, escúrrelos y córtalos con tijeras para que no sean tan largos.", 8),
      S("Mezcla la soja, el azúcar y el ajo rallado. Marina la ternera en tiras con 2 cucharadas de esa salsa.", 1),
      S("Saltea por separado y a fuego fuerte la cebolla, la zanahoria y los champiñones (2 minutos cada uno) y las espinacas (1 minuto). Luego la ternera 3 minutos.", 10),
      S("Junta todo con los fideos y el resto de la salsa y saltea 2 minutos. Termina con sésamo.", 2),
    ],
  }),
  r({
    id: "kimchi-bokkeumbap", title: "Arroz frito con kimchi", cuisine: "coreana", authenticity: "traditional",
    origin: "Corea", note: "El kimchi suele llevar salsa de pescado o gamba: revisa la etiqueta si tienes alergia.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("arroz", 180, "g"), I("kimchi", 200, "g"), I("panceta", 100, "g"), I("huevo", 2, "unit"), I("cebolleta", 1, "unit"), I("soja", 10, "ml"), I("sesamo", 3, "g"), I("aceite", 20, "ml")],
    steps: [
      S("Usa arroz cocido del día anterior (o cuécelo y deja que se enfríe extendido)."),
      S("Dora la panceta en tiras en el aceite 3 minutos. Añade el kimchi picado y saltea 3 minutos.", 6),
      S("Añade el arroz y un poco del jugo del kimchi y saltea a fuego fuerte 4 minutos. Ajusta con la soja.", 4),
      S("Fríe los huevos con la yema líquida y colócalos encima. Termina con cebolleta y sésamo.", 2),
    ],
  }),
  r({
    id: "dakgalbi", title: "Dakgalbi (pollo picante salteado)", cuisine: "coreana", authenticity: "adapted",
    origin: "Corea (Chuncheon)", note: "Sin gochujang: se imita su picante dulce con pimentón, chile, soja y miel.",
    baseServings: 3, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("pollo", 500, "g"), I("boniato", 250, "g"), I("repollo", 0.25, "unit"), I("cebolla", 1, "unit"), I("cebolleta", 2, "unit"), I("pimenton", 8, "g"), I("chile", 2, "unit"), I("soja", 40, "ml"), I("miel", 20, "g"), I("ajo", 3, "unit"), I("sesamo", 5, "g"), I("aceite", 20, "ml")],
    steps: [
      S("Mezcla el pimentón, el chile picado, la soja, la miel y el ajo rallado. Marina el pollo en trozos 15 minutos.", 15),
      S("Calienta el aceite en una sartén grande y saltea el boniato en bastones 5 minutos.", 5),
      S("Añade el pollo con su marinada, el repollo y la cebolla y cocina 12 minutos removiendo, hasta que el pollo esté hecho y el boniato tierno.", 12),
      S("Termina con cebolleta y sésamo. En Corea, al final se saltea arroz en la misma sartén con el jugo que queda."),
    ],
  }),
  // ——— Indonesia ———
  r({
    id: "nasi-goreng", title: "Nasi goreng", cuisine: "indonesia", authenticity: "adapted",
    origin: "Indonesia", note: "La salsa kecap manis se imita con soja y azúcar moreno.",
    baseServings: 2, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["sarten"],
    ingredients: [I("arroz", 180, "g"), I("pollo", 200, "g"), I("huevo", 2, "unit"), I("cebolleta", 2, "unit"), I("ajo", 2, "unit"), I("chile", 1, "unit"), I("soja", 30, "ml"), I("azucar", 10, "g"), I("pepino", 100, "g"), I("aceite", 30, "ml")],
    steps: [
      S("Usa arroz cocido y frío (del día anterior es ideal)."),
      S("Saltea el ajo, la cebolleta y el chile picados en el aceite 1 minuto. Añade el pollo en dados y saltea 4 minutos.", 5),
      S("Añade el arroz, la soja y el azúcar y saltea a fuego fuerte 4 minutos, hasta que el arroz esté caramelizado.", 4),
      S("Sirve con un huevo frito encima y rodajas de pepino.", 2),
    ],
  }),
  r({
    id: "satay-pollo", title: "Satay de pollo con salsa de cacahuete", cuisine: "indonesia", authenticity: "adapted",
    origin: "Indonesia y Malasia", baseServings: 3, prepMin: 40, cookMin: 15, difficulty: "easy", equipment: ["sarten", "batidora"],
    ingredients: [I("pollo", 500, "g"), I("cacahuetes", 100, "g"), I("leche-coco", 200, "ml"), I("soja", 40, "ml"), I("curry", 5, "g"), I("azucar", 15, "g"), I("ajo", 2, "unit"), I("lima", 1, "unit"), I("aceite", 15, "ml")],
    steps: [
      S("Corta el pollo en tiras y marínalo con la mitad de la soja, el curry, la mitad del azúcar y el ajo rallado 30 minutos. Ensártalo en brochetas.", 30),
      S("Tritura los cacahuetes tostados con la leche de coco, el resto de la soja y del azúcar y el zumo de lima. Calienta la salsa 3 minutos.", 3),
      S("Cocina las brochetas en una plancha o sartén muy caliente con el aceite 4 minutos por lado, hasta que estén doradas.", 8),
      S("Sirve con la salsa de cacahuete para mojar."),
    ],
  }),
  r({
    id: "gado-gado", title: "Gado-gado (ensalada con salsa de cacahuete)", cuisine: "indonesia", authenticity: "adapted",
    origin: "Indonesia (Yakarta)", baseServings: 3, prepMin: 20, cookMin: 20, difficulty: "easy", equipment: ["olla", "sarten", "batidora"],
    ingredients: [I("patata", 300, "g"), I("judias-verdes", 200, "g"), I("huevo", 3, "unit"), I("tofu", 200, "g"), I("pepino", 150, "g"), I("lechuga", 1, "unit"), I("cacahuetes", 100, "g"), I("soja", 30, "ml"), I("azucar", 10, "g"), I("lima", 1, "unit"), I("chile", 1, "unit", true), I("aceite", 20, "ml")],
    steps: [
      S("Cuece la patata en dados 12 minutos y las judías verdes 5 minutos. Cuece los huevos 10 minutos.", 12),
      S("Dora el tofu en dados en el aceite 6 minutos.", 6),
      S("Tritura los cacahuetes con la soja, el azúcar, el zumo de lima, el chile y agua caliente hasta una salsa espesa.", 2),
      S("Monta un plato con lechuga, pepino, patata, judías, tofu y huevo en cuartos, y cubre con la salsa."),
    ],
  }),
  // ——— Filipinas ———
  r({
    id: "adobo-pollo", title: "Adobo de pollo filipino", cuisine: "filipina", authenticity: "traditional",
    origin: "Filipinas", note: "Considerado el plato nacional filipino: pollo guisado en vinagre y soja.",
    baseServings: 4, prepMin: 10, cookMin: 45, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("pollo", 1000, "g"), I("vinagre", 100, "ml"), I("soja", 80, "ml"), I("ajo", 8, "unit"), I("pimienta", 3, "g"), I("azucar", 10, "g"), I("arroz", 320, "g"), I("aceite", 20, "ml")],
    steps: [
      S("Pon el pollo troceado en una olla con el vinagre, la soja, los ajos aplastados, la pimienta y 150 ml de agua. Marina 10 minutos si tienes tiempo.", 10),
      S("Lleva a ebullición sin remover (para que el vinagre pierda acidez) y cocina tapado a fuego suave 25 minutos.", 25),
      S("Saca el pollo y dóralo en el aceite en una sartén 5 minutos. Mientras, reduce la salsa con el azúcar 5 minutos.", 5),
      S("Devuelve el pollo a la salsa y sirve con arroz blanco cocido 12 minutos.", 12),
    ],
  }),
];
