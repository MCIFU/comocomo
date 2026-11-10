import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «Postres esenciales (que siempre salen)» de Xavier Molina, primera tanda. Pasos escritos de nuevo para Cómocomo. */
const PE = "Receta del libro «Postres esenciales» de Xavier Molina, adaptada.";

export const recipesLibroPostres1: Recipe[] = [
  r({
    id: "flan-de-chocolate", title: "Flan de chocolate",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${PE} Es el flan de huevo de siempre con chocolate negro disuelto en la leche.`,
    baseServings: 6, prepMin: 15, cookMin: 45, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("leche", 500, "ml"), I("chocolate", 60, "g"), I("huevo", 4, "unit"), I("azucar", 150, "g")],
    steps: [
      S("Calienta la leche hasta que hierva, retírala del fuego y disuelve en ella el chocolate negro (70 % o más) troceado.", 6),
      S("Bate los huevos con el azúcar y añade poco a poco la leche con chocolate sin dejar de batir.", 4),
      S("Reparte en flaneras y cuécelas al baño maría en el horno a 170 °C 40 minutos, hasta que estén cuajadas.", 40, 170),
      S("Deja que se enfríen y mételas en la nevera al menos 3 horas antes de desmoldar."),
    ],
  }),
  r({
    id: "tarta-manzana-hojaldre-crema", title: "Tarta de manzana con hojaldre y crema pastelera",
    cuisine: "espanola", origin: "España (pastelería)", authenticity: "adapted", note: `${PE} La de las pastelerías: base de hojaldre, crema pastelera y manzana en láminas.`,
    baseServings: 8, prepMin: 30, cookMin: 45, difficulty: "medium", equipment: ["olla", "horno"],
    ingredients: [I("masa-hojaldre", 275, "g"), I("manzana", 4, "unit"), I("leche", 500, "ml"), I("huevo", 3, "unit"), I("azucar", 110, "g"), I("maicena", 25, "g"), I("canela", 2, "g"), I("limon", 1, "unit"), I("mantequilla", 20, "g")],
    steps: [
      S("Para la crema pastelera, calienta la leche con la canela en rama y la piel del limón. Bate las yemas con 80 g de azúcar y la maicena, añade la leche colada y cuece removiendo hasta que espese. Deja que se temple.", 15),
      S("Forra un molde con el hojaldre, pínchalo con un tenedor y extiende la crema por encima.", 6),
      S("Pela las manzanas (golden), córtalas en láminas finas y colócalas en abanico sobre la crema.", 10),
      S("Pinta con la mantequilla derretida, espolvorea el resto del azúcar y hornea a 190 °C 35-40 minutos, hasta que el hojaldre esté dorado.", 38, 190),
    ],
  }),
  r({
    id: "fresas-crema-inglesa", title: "Fresas con crema inglesa",
    cuisine: "francesa", origin: "Francia", authenticity: "traditional", note: PE,
    baseServings: 4, prepMin: 10, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("fresas", 500, "g"), I("leche", 500, "ml"), I("huevo", 4, "unit"), I("azucar", 125, "g"), I("vainilla", 1, "unit")],
    steps: [
      S("Lleva la leche a ebullición con la vainilla abierta y baja el fuego al mínimo.", 5),
      S("Bate las yemas con el azúcar, échalas en la leche y remueve sin parar 10 minutos sin que llegue a hervir, hasta que la crema napa la cuchara.", 10),
      S("Deja que se enfríe y métela en la nevera.", 2),
      S("Lava las fresas, pártelas si son grandes, ponlas en copas y báñalas con la crema justo antes de servir."),
    ],
  }),
  r({
    id: "isla-flotante", title: "Isla flotante",
    cuisine: "francesa", origin: "Francia (île flottante)", authenticity: "adapted", note: `${PE} Merengue cocido al baño maría sobre natillas ligeras.`,
    baseServings: 6, prepMin: 25, cookMin: 55, difficulty: "medium", equipment: ["olla", "horno", "batidora"],
    ingredients: [I("leche", 500, "ml"), I("huevo", 6, "unit"), I("azucar", 400, "g"), I("vainilla", 1, "unit"), I("sal", 1, "g")],
    steps: [
      S("Para la crema, calienta la leche con la vainilla. Bate las yemas con 100 g de azúcar, añade la leche y cuece removiendo 10 minutos sin que hierva. Enfría.", 14),
      S("Haz un caramelo con 150 g de azúcar y un poco de agua y cubre con él el fondo de una flanera.", 6),
      S("Monta las claras a punto de nieve con la sal y el resto del azúcar con la batidora y llénalas en la flanera, apretando para que no queden huecos.", 8),
      S("Hornea al baño maría a 180 °C 40-45 minutos, hasta que al tocarlo no se pegue. Desmolda, enfría y sirve trozos de merengue flotando sobre la crema.", 42, 180),
    ],
  }),
  r({
    id: "looqemat", title: "Luqaimat (buñuelos de yogur en almíbar)",
    cuisine: "oriente-medio", origin: "Oriente Medio", authenticity: "adapted", note: `${PE} La masa necesita reposar unas 5 horas. Se comen calientes.`,
    baseServings: 4, prepMin: 20, cookMin: 20, difficulty: "medium", equipment: ["sarten", "olla"],
    ingredients: [I("yogur", 1, "unit"), I("harina", 220, "g"), I("levadura-quimica", 8, "g"), I("azucar", 160, "g"), I("aceite", 500, "ml"), I("limon", 0.5, "unit"), I("sal", 1, "g")],
    steps: [
      S("Mezcla el yogur (mejor griego), la harina, la sal y 60 ml de agua tibia con fuerza. Tapa y deja reposar 5 horas a temperatura ambiente.", 10),
      S("Añade la levadura, media cucharadita de azúcar y otros 60 ml de agua y mezcla hasta tener una masa espesa y pegajosa.", 3),
      S("Para el almíbar, cuece el resto del azúcar con 120 ml de agua y el zumo del limón 8 minutos.", 8),
      S("Fríe cucharaditas de masa en el aceite caliente hasta que se doren e hinchen, escúrrelas y báñalas en el almíbar.", 12),
    ],
  }),
  r({
    id: "tufahija", title: "Tufahija (manzanas rellenas de nueces)",
    cuisine: "bosnia", origin: "Bosnia", authenticity: "traditional", note: PE,
    baseServings: 4, prepMin: 20, cookMin: 25, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("manzana", 4, "unit"), I("azucar", 200, "g"), I("nueces", 100, "g"), I("mantequilla", 20, "g"), I("nata", 200, "ml")],
    steps: [
      S("Lleva a ebullición en una olla agua suficiente para cubrir las manzanas con el azúcar.", 6),
      S("Pela las manzanas (golden o granny) y vacíales el corazón; cuécelas en el almíbar hasta que estén tiernas pero enteras, 8-10 minutos. Escúrrelas guardando el almíbar.", 12),
      S("Pica las nueces gruesas y saltéalas en la mantequilla con dos cucharadas del almíbar y la mitad de la nata hasta que espese.", 5),
      S("Rellena las manzanas con la mezcla, riégalas con un poco de almíbar y corónalas con el resto de la nata montada.", 4),
    ],
  }),
  r({
    id: "pastel-peras-almibar", title: "Pastel de bizcocho con nata y peras en almíbar",
    cuisine: "espanola", origin: "España", authenticity: "adapted", note: `${PE} Fácil y rápido con bizcochos comprados.`,
    baseServings: 6, prepMin: 25, cookMin: 25, difficulty: "easy", equipment: ["olla", "batidora"],
    ingredients: [I("pera", 5, "unit"), I("azucar", 180, "g"), I("brandy", 10, "ml"), I("bizcochos", 200, "g"), I("nata", 300, "ml")],
    steps: [
      S("Pon 600 ml de agua con 150 g de azúcar y el brandy en una olla y disuelve el azúcar.", 3),
      S("Pela las peras (blanquilla), pártelas en cuartos y cuécelas a fuego lento en el almíbar hasta que estén tiernas y algo traslúcidas, 20 minutos. Enfríalas.", 22),
      S("Monta la nata con la batidora y el resto del azúcar.", 4),
      S("Forma una capa de bizcochos en una fuente, mójalos con un poco de almíbar, cubre con la nata y coloca encima las peras escurridas. Enfría antes de servir.", 8),
    ],
  }),
  r({
    id: "kabak-tatlisi", title: "Kabak tatlısı (calabaza confitada con nueces)",
    cuisine: "turca", origin: "Turquía", authenticity: "traditional", note: `${PE} La calabaza reposa con el azúcar 24 horas antes de cocerla.`,
    baseServings: 4, prepMin: 15, cookMin: 60, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("calabaza", 1000, "g"), I("azucar", 150, "g"), I("nueces", 100, "g")],
    steps: [
      S("Pela la calabaza y córtala en cubos grandes y regulares. Ponlos en una cazuela ancha, cúbrelos con el azúcar y agua justa para cubrir, y déjalos 24 horas.", 10),
      S("Lleva la cazuela a ebullición a fuego vivo, baja el fuego y cuece 1 hora, hasta que la calabaza esté tierna y brillante.", 60),
      S("Deja que se enfríe y sirve con las nueces machacadas por encima.", 3),
    ],
  }),
  r({
    id: "greixonera-pan", title: "Greixonera de pan (pudin ibicenco)",
    cuisine: "espanola", origin: "España (Ibiza)", authenticity: "adapted", note: `${PE} La original se hace con ensaimadas duras; el libro da esta variante con pan del día anterior.`,
    baseServings: 4, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["olla", "horno"],
    ingredients: [I("pan", 200, "g"), I("leche", 500, "ml"), I("huevo", 4, "unit"), I("azucar", 150, "g"), I("limon", 1, "unit"), I("canela", 3, "g"), I("mantequilla", 15, "g")],
    steps: [
      S("Hierve la leche con una rama de canela y deja que se temple.", 8),
      S("Bate los huevos con el azúcar y la ralladura del limón, añade la leche y el pan troceado y deja que se empape 10 minutos, deshaciéndolo un poco.", 12),
      S("Vierte en una cazuela de barro untada de mantequilla y hornea a 180 °C 30 minutos.", 30, 180),
      S("Sírvela templada o fría, espolvoreada con canela en polvo."),
    ],
  }),
  r({
    id: "muhallebi", title: "Muhallebi (crema turca de arroz y leche)",
    cuisine: "turca", origin: "Turquía", authenticity: "adapted", note: `${PE} Se hace con harina de arroz; sin ella, vale maicena.`,
    baseServings: 6, prepMin: 5, cookMin: 15, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("leche", 1000, "ml"), I("azucar", 200, "g"), I("maicena", 90, "g"), I("vainilla", 1, "unit", true), I("canela", 1, "g"), I("pistachos", 20, "g", true)],
    steps: [
      S("Mezcla en un cazo el azúcar con la harina de arroz (o maicena) y añade la leche fría poco a poco, removiendo para que no queden grumos.", 4),
      S("Cuece a fuego medio sin dejar de remover hasta que espese, unos 12 minutos. Añade la vainilla si quieres.", 12),
      S("Reparte en cuencos y enfría en la nevera al menos 2 horas. Sirve con canela (o pistachos picados)."),
    ],
  }),
  r({
    id: "menjar-blanc", title: "Menjar blanc (crema de almendra)",
    cuisine: "espanola", origin: "España (Reus y Tortosa)", authenticity: "traditional", note: `${PE} Postre medieval de leche de almendras, sin lácteos.`,
    baseServings: 6, prepMin: 20, cookMin: 15, difficulty: "easy", equipment: ["batidora", "olla"],
    ingredients: [I("almendras", 200, "g"), I("azucar", 130, "g"), I("maicena", 70, "g"), I("limon", 1, "unit"), I("canela", 2, "g")],
    steps: [
      S("Tritura con la batidora las almendras crudas peladas con un litro de agua y cuela por un paño, apretando para sacar toda la leche de almendras.", 12),
      S("Disuelve la maicena en un poco de esa leche fría. Calienta el resto con el azúcar, la piel del limón y la canela en rama.", 5),
      S("Cuando hierva, retira el limón y la canela, añade la maicena y cuece removiendo hasta que espese, 5 minutos.", 6),
      S("Reparte en cuencos y deja que cuaje en la nevera. Sirve con canela en polvo."),
    ],
  }),
];
