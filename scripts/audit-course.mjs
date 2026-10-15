import { courseOf } from "../apps/app/src/lib/menu.ts";
import { recipes } from "../packages/content/src/index.ts";
const g = { primero: [], segundo: [], postre: [], null: [] };
for (const r of recipes) g[String(courseOf(r))].push(r.title);
for (const [k, v] of Object.entries(g)) console.log(k, v.length);
console.log("\nFUERA DEL MENÚ:\n" + g.null.join("\n"));
console.log("\nPRIMEROS con carne/pescado en el título:\n" + g.primero.filter((t) => /pollo|ternera|cerdo|cordero|conejo|pavo|merluza|salm[oó]n|bacalao|rape|lubina|bonito|caballa|sardinas|boquerones|chuleta|solomillo|carrilleras|alb[oó]ndigas/i.test(t) && !/sopa|crema|ensalada|arroz|pasta|macarr|espagu|tallar|fideo|lenteja|garbanzo|alubia|lasa|canel/i.test(t)).join("\n"));
