import type { Recipe } from "@comocomo/schemas";
import { I, r, S } from "./helpers";

/** Libro «Postres esenciales (que siempre salen)» de Xavier Molina, segunda y última tanda. Pasos escritos de nuevo para Cómocomo. */
const PE = "Receta del libro «Postres esenciales» de Xavier Molina, adaptada.";

export const recipesLibroPostres2: Recipe[] = [
  r({
    id: "brocheta-pina-crema-catalana", title: "Brochetas de piña con crema catalana quemada",
    cuisine: "espanola", origin: "España (Cataluña)", authenticity: "adapted", note: PE,
    baseServings: 6, prepMin: 20, cookMin: 40, difficulty: "medium", equipment: ["olla", "horno", "sarten"],
    ingredients: [I("leche", 750, "ml"), I("huevo", 4, "unit"), I("azucar", 200, "g"), I("canela", 3, "g"), I("limon", 1, "unit"), I("pina", 1, "unit")],
    steps: [
      S("Calienta la leche con la canela en rama y la piel del limón. Bate las yemas con 150 g de azúcar y añade la leche colada.", 10),
      S("Cuece la crema en una fuente al baño maría en el horno a 180 °C unos 30 minutos, hasta que espese sin llegar a cuajar como un flan.", 30, 180),
      S("Pela la piña, córtala en tacos y ensártalos en brochetas.", 10),
      S("Napa las brochetas con la crema todavía caliente, espolvorea el resto del azúcar y quémalo con una cuchara de metal muy caliente o en la sartén. Sirve con más crema al lado.", 5),
    ],
  }),
  r({
    id: "torta-de-platanos", title: "Tortitas fritas de plátano",
    cuisine: "espanola", origin: "España (Canarias)", authenticity: "traditional", note: `${PE} Se hacen en diez minutos.`,
    baseServings: 4, prepMin: 10, cookMin: 10, difficulty: "easy", equipment: ["olla", "sarten"],
    ingredients: [I("platano", 4, "unit"), I("azucar", 25, "g"), I("huevo", 2, "unit"), I("harina", 25, "g"), I("canela", 2, "g"), I("aceite", 200, "ml")],
    steps: [
      S("Pela los plátanos y escáldalos 5 minutos en agua hirviendo. Escúrrelos.", 6),
      S("Aplástalos con un tenedor junto con el azúcar, los huevos, la harina y la canela.", 3),
      S("Fríe la masa a cucharadas en el aceite caliente, formando tortitas, hasta que estén doradas por los dos lados. Escúrrelas.", 8),
    ],
  }),
  r({
    id: "arnadi", title: "Arnadí (dulce de calabaza y almendra)",
    cuisine: "espanola", origin: "España (Xàtiva)", authenticity: "traditional", note: `${PE} Postre de Semana Santa de origen andalusí.`,
    baseServings: 6, prepMin: 20, cookMin: 75, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("calabaza", 1200, "g"), I("huevo", 4, "unit"), I("miel", 120, "g"), I("azucar", 80, "g"), I("almendras", 150, "g"), I("pinones", 50, "g"), I("canela", 3, "g"), I("limon", 1, "unit")],
    steps: [
      S("Asa la calabaza troceada en el horno a 210 °C 45 minutos, saca la pulpa y escúrrela bien.", 45, 210),
      S("Mézclala con 100 g de almendra molida, la miel, el azúcar, la canela, la ralladura del limón y las yemas.", 8),
      S("Monta las claras a punto de nieve e incorpóralas con cuidado. Pásalo a una cazuela de barro y dale forma de cúpula.", 8),
      S("Decora con las almendras enteras y los piñones clavados y hornea a 180 °C 25 minutos, hasta que se dore.", 25, 180),
    ],
  }),
  r({
    id: "babka-avena-manzana", title: "Pastel de copos de avena y manzana (babka sencilla)",
    cuisine: "polaca", origin: "Europa del Este", authenticity: "adapted", note: `${PE} La versión fácil del libro, sin levadura, a base de copos de avena.`,
    baseServings: 6, prepMin: 15, cookMin: 35, difficulty: "easy", equipment: ["horno"],
    ingredients: [I("avena", 200, "g"), I("leche", 250, "ml"), I("huevo", 2, "unit"), I("mantequilla", 50, "g"), I("azucar", 60, "g"), I("manzana", 1, "unit"), I("canela", 2, "g"), I("pasas", 30, "g", true)],
    steps: [
      S("Remoja los copos de avena en la leche 10 minutos.", 10),
      S("Añade los huevos batidos, la mantequilla derretida, el azúcar, la canela y la manzana en dados pequeños (y las pasas). Mezcla bien.", 6),
      S("Vierte en un molde engrasado y hornea a 180 °C 35 minutos, hasta que esté dorado y firme.", 35, 180),
      S("Deja que se temple antes de cortar."),
    ],
  }),
  r({
    id: "flao-ibicenco", title: "Flaó ibicenco (tarta de queso con hierbabuena)",
    cuisine: "espanola", origin: "España (Ibiza)", authenticity: "adapted", note: `${PE} El original lleva anís dulce; aquí, vino dulce y un poco de anís en grano.`,
    baseServings: 8, prepMin: 30, cookMin: 50, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("harina", 250, "g"), I("aceite", 60, "ml"), I("vino-dulce", 60, "ml"), I("queso-fresco", 400, "g"), I("huevo", 4, "unit"), I("azucar", 200, "g"), I("menta", 4, "g"), I("mantequilla", 10, "g"), I("sal", 1, "g")],
    steps: [
      S("Mezcla la harina con el aceite, el vino dulce, 60 ml de agua y la sal hasta tener una masa fina y elástica.", 10),
      S("Unta de mantequilla un molde redondo y forra el fondo y las paredes con la masa estirada fina.", 10),
      S("Bate los huevos con el azúcar, añade el queso fresco desmenuzado y la hierbabuena (menta) picada, y vierte sobre la masa.", 8),
      S("Hornea a 180 °C 45-50 minutos, hasta que el relleno esté cuajado y dorado. Enfría y espolvorea azúcar glas.", 48, 180),
    ],
  }),
  r({
    id: "dulce-de-leche-casero", title: "Dulce de leche casero",
    cuisine: "argentina", origin: "Argentina", authenticity: "traditional", note: `${PE} Sirve para untar, para crepes o para rellenar alfajores.`,
    baseServings: 6, prepMin: 5, cookMin: 70, difficulty: "easy", equipment: ["olla"],
    ingredients: [I("leche", 1000, "ml"), I("azucar", 250, "g"), I("levadura-quimica", 2, "g"), I("vainilla", 1, "unit", true)],
    steps: [
      S("Pon la leche con el azúcar en un cazo de fondo grueso a fuego lento y remueve hasta que se disuelva.", 5),
      S("Añade una pizca de bicarbonato (o levadura química) disuelta en un poco de agua y sigue cociendo a fuego lento, removiendo a menudo, 60 minutos.", 60),
      S("Cuando tome color tostado y al pasar la cuchara se vea el fondo del cazo, retíralo (añade la vainilla si quieres) y deja que se enfríe.", 8),
    ],
  }),
  r({
    id: "mamul-nueces", title: "Ma'mul (pastas de sémola rellenas de nueces)",
    cuisine: "oriente-medio", origin: "Oriente Medio", authenticity: "adapted", note: `${PE} El agua de azahar se puede cambiar por ralladura de limón.`,
    baseServings: 8, prepMin: 50, cookMin: 20, difficulty: "medium", equipment: ["horno"],
    ingredients: [I("semola", 300, "g"), I("harina", 120, "g"), I("mantequilla", 150, "g"), I("leche", 120, "ml"), I("nueces", 150, "g"), I("azucar", 100, "g"), I("limon", 1, "unit"), I("canela", 2, "g")],
    steps: [
      S("Mezcla la sémola y la harina con la mantequilla derretida y frótalas con las manos; deja reposar tapado 30 minutos.", 35),
      S("Añade la leche tibia y amasa lo justo para formar una masa suave.", 5),
      S("Para el relleno, pica las nueces y mézclalas con 60 g de azúcar, la canela y la ralladura del limón.", 5),
      S("Haz bolitas, ahuécalas, rellénalas y ciérralas; marca la superficie con un tenedor. Hornea a 180 °C 18-20 minutos sin que se doren mucho y espolvorea el resto del azúcar.", 20, 180),
    ],
  }),
  r({
    id: "sacher-torte", title: "Tarta Sacher",
    cuisine: "austriaca", origin: "Austria (Viena)", authenticity: "adapted", note: `${PE} Bizcocho de chocolate sin levadura con mermelada de albaricoque y glaseado. Aquí la mermelada se hace con orejones.`,
    baseServings: 8, prepMin: 40, cookMin: 50, difficulty: "hard", equipment: ["horno", "batidora", "olla"],
    ingredients: [I("huevo", 6, "unit"), I("azucar", 300, "g"), I("harina", 150, "g"), I("cacao", 50, "g"), I("mantequilla", 90, "g"), I("chocolate", 200, "g"), I("orejones", 150, "g"), I("nata", 200, "ml", true)],
    steps: [
      S("Bate con la batidora los huevos con 150 g de azúcar al menos 10 minutos, hasta que doblen su volumen.", 12),
      S("Incorpora con cuidado la harina tamizada con el cacao y 40 g de mantequilla derretida; vierte en un molde y hornea a 175 °C 35 minutos. Deja que se enfríe.", 38, 175),
      S("Cuece los orejones troceados con 50 g de azúcar y un vaso de agua 15 minutos y tritúralos hasta tener una mermelada. Corta el bizcocho en dos capas y rellénalo con ella.", 18),
      S("Funde el chocolate con el resto de mantequilla y azúcar y 3 cucharadas de agua, cubre la tarta y deja que el glaseado se endurezca. Sirve con nata montada si quieres.", 10),
    ],
  }),
];
