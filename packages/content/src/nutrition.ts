import type { Recipe } from "@comocomo/schemas";

/**
 * Composición orientativa por 100 g (o 100 ml) de parte comestible.
 * Fuente: valores medios de BEDCA (Base de Datos Española de Composición de Alimentos)
 * y USDA FoodData Central para lo que BEDCA no recoge. Son aproximaciones para orientar, no análisis.
 *
 * Orden: kcal, grasa saturada (g), colesterol (mg), fibra (g), hierro (mg), vit. C (mg),
 * vit. A (µg ER), vit. B12 (µg), folato (µg), calcio (mg), vit. D (µg), sodio (mg).
 */
type Row = [number, number, number, number, number, number, number, number, number, number, number, number];

const T: Record<string, Row> = {
  pollo: [150, 1.5, 85, 0, 0.9, 0, 15, 0.3, 6, 11, 0.2, 75],
  chorizo: [455, 12, 88, 0, 1.9, 0, 0, 1.5, 2, 10, 0.5, 1600],
  morcilla: [380, 14, 60, 0.5, 14, 0, 0, 1, 5, 30, 0.5, 700],
  panceta: [520, 18, 70, 0, 0.6, 0, 10, 0.6, 1, 5, 0.5, 700],
  merluza: [80, 0.3, 45, 0, 0.4, 0, 10, 1, 10, 30, 1, 100],
  gambas: [85, 0.2, 150, 0, 0.6, 0, 0, 1.1, 10, 70, 0, 600],
  huevo: [143, 3.1, 372, 0, 1.8, 0, 160, 0.9, 47, 56, 2, 140],
  leche: [62, 2, 10, 0, 0.05, 1, 45, 0.4, 5, 120, 0.1, 45],
  queso: [400, 21, 100, 0, 0.5, 0, 260, 1.5, 10, 800, 0.3, 700],
  mantequilla: [740, 51, 215, 0, 0, 0, 680, 0.2, 3, 20, 1, 15],
  yogur: [61, 1.8, 10, 0, 0.1, 1, 30, 0.4, 10, 140, 0.1, 50],
  patata: [80, 0, 0, 1.8, 0.6, 15, 0, 0, 15, 8, 0, 6],
  cebolla: [40, 0, 0, 1.7, 0.2, 7, 0, 0, 19, 23, 0, 4],
  ajo: [140, 0.1, 0, 2.1, 1.7, 31, 0, 0, 3, 180, 0, 17],
  tomate: [20, 0, 0, 1.2, 0.3, 14, 42, 0, 15, 10, 0, 5],
  pimiento: [25, 0, 0, 1.8, 0.4, 120, 80, 0, 20, 10, 0, 3],
  zanahoria: [41, 0, 0, 2.8, 0.3, 6, 835, 0, 19, 33, 0, 69],
  calabacin: [17, 0, 0, 1, 0.4, 18, 10, 0, 24, 16, 0, 8],
  espinacas: [23, 0, 0, 2.2, 2.7, 28, 469, 0, 194, 99, 0, 79],
  aguacate: [160, 2.1, 0, 6.7, 0.6, 10, 7, 0, 81, 12, 0, 7],
  limon: [29, 0, 0, 2.8, 0.6, 53, 1, 0, 11, 26, 0, 2],
  lima: [30, 0, 0, 2.8, 0.6, 29, 2, 0, 8, 33, 0, 2],
  chile: [40, 0, 0, 1.5, 1, 140, 48, 0, 23, 14, 0, 9],
  jengibre: [80, 0.2, 0, 2, 0.6, 5, 0, 0, 11, 16, 0, 13],
  cilantro: [23, 0, 0, 2.8, 1.8, 27, 337, 0, 62, 67, 0, 46],
  perejil: [36, 0.1, 0, 3.3, 6.2, 133, 421, 0, 152, 138, 0, 56],
  albahaca: [23, 0, 0, 1.6, 3.2, 18, 264, 0, 68, 177, 0, 4],
  arroz: [360, 0.2, 0, 1.3, 0.8, 0, 0, 0, 8, 10, 0, 5],
  "arroz-basmati": [360, 0.2, 0, 1.3, 0.8, 0, 0, 0, 8, 10, 0, 5],
  pasta: [360, 0.3, 0, 3, 1.3, 0, 0, 0, 18, 20, 0, 6],
  "laminas-lasana": [360, 0.3, 0, 3, 1.3, 0, 0, 0, 18, 20, 0, 6],
  harina: [364, 0.2, 0, 2.7, 1.2, 0, 0, 0, 26, 15, 0, 2],
  "pan-rallado": [395, 1, 0, 4.5, 4.8, 0, 0, 0, 100, 180, 0, 730],
  garbanzos: [364, 0.6, 0, 17, 6.2, 4, 3, 0, 557, 105, 0, 24],
  lentejas: [350, 0.2, 0, 11, 7.5, 4, 2, 0, 479, 56, 0, 6],
  fabes: [335, 0.2, 0, 16, 6.7, 0, 0, 0, 388, 140, 0, 16],
  "tomate-triturado": [32, 0, 0, 1.5, 1, 9, 30, 0, 10, 30, 0, 200],
  "leche-coco": [197, 18, 0, 0, 1.6, 1, 0, 0, 14, 18, 0, 13],
  caldo: [5, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 5, 0, 350],
  aceite: [884, 14, 0, 0, 0.6, 0, 0, 0, 0, 1, 0, 2],
  vinagre: [20, 0, 0, 0, 0.5, 0, 0, 0, 0, 6, 0, 5],
  "vino-blanco": [82, 0, 0, 0, 0.3, 0, 0, 0, 1, 9, 0, 5],
  "vino-tinto": [85, 0, 0, 0, 0.5, 0, 0, 0, 1, 8, 0, 4],
  "vino-dulce": [160, 0, 0, 0, 0.4, 0, 0, 0, 0, 8, 0, 9],
  cava: [76, 0, 0, 0, 0.3, 0, 0, 0, 0, 9, 0, 5],
  sidra: [45, 0, 0, 0, 0.2, 0, 0, 0, 0, 6, 0, 5],
  cerveza: [43, 0, 0, 0, 0, 0, 0, 0.02, 6, 4, 0, 4],
  brandy: [231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ron: [231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  soja: [53, 0, 0, 0.8, 1.5, 0, 0, 0, 14, 33, 0, 5500],
  azucar: [400, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  sal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 38700],
  pimenton: [282, 2, 0, 35, 21, 1, 2463, 0, 49, 229, 0, 68],
  comino: [375, 1.5, 0, 10.5, 66, 8, 64, 0, 10, 931, 0, 168],
  curry: [325, 2.2, 0, 53, 19, 1, 48, 0, 9, 525, 0, 52],
  pimienta: [251, 1.4, 0, 25, 9.7, 0, 27, 0, 17, 443, 0, 20],
  oregano: [265, 1.6, 0, 42, 37, 2, 85, 0, 237, 1597, 0, 25],
  canela: [247, 0.3, 0, 53, 8.3, 4, 15, 0, 6, 1002, 0, 10],
  laurel: [313, 2.3, 0, 26, 43, 47, 309, 0, 180, 834, 0, 23],
  tomillo: [276, 2.7, 0, 37, 124, 50, 190, 0, 274, 1890, 0, 55],
  romero: [331, 7.4, 0, 43, 30, 61, 156, 0, 307, 1280, 0, 50],
  "nuez-moscada": [525, 26, 0, 21, 3, 3, 5, 0, 76, 184, 0, 16],
  azafran: [310, 1.6, 0, 4, 11, 81, 27, 0, 93, 111, 0, 148],
  vainilla: [288, 0, 0, 0, 0.1, 0, 0, 0, 0, 11, 0, 9],
  "salsa-inglesa": [78, 0, 0, 0, 5.3, 13, 4, 0, 8, 107, 0, 980],
  mostaza: [66, 0.3, 0, 4, 1.6, 1, 5, 0, 7, 58, 0, 1100],
  miel: [304, 0, 0, 0.2, 0.4, 0.5, 0, 0, 2, 6, 0, 4],
  menta: [70, 0.2, 0, 8, 5, 32, 212, 0, 114, 243, 0, 31],
  pan: [260, 0.4, 0, 3, 1.2, 0, 0, 0, 30, 20, 0, 520],
  "tortilla-maiz": [218, 0.4, 0, 6.3, 1.2, 0, 0, 0, 5, 81, 0, 45],
  "tortilla-trigo": [300, 2, 0, 3, 3.4, 0, 0, 0, 100, 130, 0, 600],
  "pan-pita": [275, 0.2, 0, 2.2, 2.6, 0, 0, 0, 100, 86, 0, 535],
  "pan-hamburguesa": [280, 1, 0, 2.5, 3, 0, 0, 0, 100, 140, 0, 480],
  "obleas-empanadilla": [300, 4, 0, 2, 1.5, 0, 0, 0, 20, 15, 0, 600],
  "masa-hojaldre": [550, 20, 0, 1.5, 2, 0, 0, 0, 30, 15, 0, 450],
  "pasta-brick": [300, 0.5, 0, 2, 1.5, 0, 0, 0, 20, 15, 0, 500],
  "papel-arroz": [330, 0, 0, 1, 1, 0, 0, 0, 0, 20, 0, 300],
  calamares: [92, 0.4, 233, 0, 0.7, 5, 10, 1.3, 5, 32, 0, 44],
  chipirones: [92, 0.4, 233, 0, 0.7, 5, 10, 1.3, 5, 32, 0, 44],
  champinones: [22, 0, 0, 1, 0.5, 2, 0, 0.04, 17, 3, 0.2, 5],
  setas: [33, 0.1, 0, 2.3, 1.3, 0, 0, 0.04, 38, 3, 0.5, 18],
  pepino: [15, 0, 0, 0.5, 0.3, 3, 5, 0, 7, 16, 0, 2],
  feta: [264, 15, 89, 0, 0.6, 0, 125, 1.7, 32, 493, 0.4, 1100],
  aceitunas: [145, 2, 0, 3.3, 0.5, 0, 20, 0, 3, 52, 0, 1500],
  cuscus: [376, 0.1, 0, 5, 1.1, 0, 0, 0, 20, 24, 0, 10],
  bulgur: [342, 0.2, 0, 18, 2.5, 0, 0, 0, 27, 35, 0, 17],
  quinoa: [368, 0.7, 0, 7, 4.6, 0, 1, 0, 184, 47, 0, 5],
  "garbanzos-cocidos": [139, 0.3, 0, 6, 1.3, 0, 0, 0, 40, 40, 0, 240],
  sesamo: [573, 7, 0, 12, 14.6, 0, 0, 0, 97, 975, 0, 11],
  cacahuetes: [567, 7, 0, 8.5, 4.6, 0, 0, 0, 240, 92, 0, 18],
  "ternera-picada": [250, 8, 70, 0, 2.2, 0, 0, 2.6, 7, 15, 0.1, 70],
  ternera: [140, 2.5, 60, 0, 2.2, 0, 0, 2.2, 7, 10, 0.1, 60],
  cerdo: [180, 4, 70, 0, 0.9, 0, 2, 0.7, 3, 15, 0.5, 60],
  "solomillo-cerdo": [120, 1, 60, 0, 1, 0, 2, 0.5, 3, 6, 0.5, 55],
  "costillas-cerdo": [290, 9, 80, 0, 0.9, 0, 2, 0.6, 3, 25, 0.5, 80],
  cordero: [230, 8, 72, 0, 1.6, 0, 0, 2.3, 18, 15, 0.1, 65],
  conejo: [136, 1.7, 57, 0, 1.6, 0, 0, 7, 8, 13, 0, 45],
  pavo: [110, 0.5, 60, 0, 0.7, 0, 0, 0.6, 7, 10, 0.3, 60],
  higado: [119, 1.6, 345, 0, 9, 18, 3300, 17, 588, 8, 0, 71],
  jamon: [240, 5, 70, 0, 2.3, 0, 0, 1, 4, 10, 0.5, 2000],
  "jamon-cocido": [110, 1.2, 50, 0, 0.8, 0, 0, 0.5, 3, 10, 0.5, 1100],
  beicon: [458, 15, 66, 0, 0.6, 0, 10, 0.5, 1, 6, 0.5, 1700],
  txistorra: [400, 14, 80, 0, 1.5, 0, 0, 1, 2, 10, 0.5, 1500],
  salchichas: [300, 10, 70, 0, 1, 0, 0, 0.8, 3, 15, 0.4, 800],
  salmon: [200, 3, 55, 0, 0.3, 0, 15, 3.2, 25, 12, 11, 60],
  "salmon-ahumado": [117, 0.9, 23, 0, 0.9, 0, 26, 3.3, 2, 11, 17, 1800],
  trucha: [140, 1.2, 58, 0, 0.4, 3, 15, 4.5, 13, 40, 4, 52],
  caballa: [205, 3.3, 70, 0, 1.6, 0.4, 50, 8.7, 1, 12, 16, 90],
  sardinas: [208, 3, 140, 0, 2.5, 0, 30, 9, 10, 80, 5, 100],
  boquerones: [131, 1.3, 60, 0, 3.3, 0, 15, 0.6, 9, 147, 1.7, 104],
  anchoas: [210, 2.2, 85, 0, 4.6, 0, 15, 0.9, 12, 232, 1.7, 3700],
  bonito: [140, 1.3, 40, 0, 1, 0, 20, 9, 2, 15, 4, 40],
  "atun-lata": [190, 1.3, 30, 0, 1.3, 0, 20, 2.2, 4, 10, 2, 400],
  bacalao: [80, 0.2, 50, 0, 0.4, 0, 10, 1, 7, 20, 1, 400],
  rape: [76, 0.1, 25, 0, 0.3, 1, 15, 0.9, 7, 8, 0, 18],
  lubina: [97, 0.5, 41, 0, 0.3, 0, 30, 0.3, 6, 10, 0, 68],
  gallo: [80, 0.3, 50, 0, 0.4, 0, 10, 1, 10, 30, 0, 100],
  langostinos: [85, 0.2, 150, 0, 0.5, 0, 0, 1.1, 10, 70, 0, 400],
  mejillones: [86, 0.4, 28, 0, 4, 8, 48, 12, 42, 26, 0, 286],
  almejas: [74, 0.1, 34, 0, 14, 13, 90, 49, 16, 46, 0, 56],
  berberechos: [79, 0.2, 47, 0, 24, 0, 48, 47, 2, 128, 0, 300],
  pulpo: [82, 0.2, 48, 0, 5.3, 5, 45, 20, 16, 53, 0, 230],
  "tinta-calamar": [80, 0.2, 0, 0, 1, 0, 0, 0, 0, 10, 0, 500],
  nata: [340, 22, 110, 0, 0, 1, 400, 0.2, 4, 65, 0.6, 30],
  mozzarella: [280, 14, 80, 0, 0.4, 0, 180, 2.3, 7, 500, 0.4, 600],
  parmesano: [392, 19, 88, 0, 0.8, 0, 207, 1.2, 7, 1180, 0.5, 1600],
  mascarpone: [430, 30, 110, 0, 0.1, 0, 330, 0.3, 4, 140, 0.5, 40],
  "queso-crema": [342, 19, 110, 0, 0.1, 0, 310, 0.2, 9, 98, 0.2, 320],
  "queso-azul": [353, 19, 75, 0, 0.3, 0, 198, 1.2, 36, 528, 0.5, 1400],
  "queso-cabra": [364, 21, 79, 0, 1.6, 0, 407, 0.2, 12, 298, 0.5, 515],
  "queso-fresco": [180, 9, 40, 0, 0.2, 0, 150, 0.4, 15, 500, 0.2, 400],
  requeson: [98, 1.7, 17, 0, 0.1, 0, 37, 0.4, 12, 83, 0.1, 364],
  "leche-evaporada": [134, 4.6, 29, 0, 0.2, 2, 65, 0.2, 8, 261, 2, 106],
  "leche-condensada": [321, 5.5, 34, 0, 0.2, 3, 74, 0.4, 11, 284, 0.2, 127],
  "dulce-de-leche": [315, 4.5, 20, 0, 0.2, 2, 50, 0.3, 5, 250, 0, 130],
  "huevo-codorniz": [158, 3.6, 844, 0, 3.6, 0, 156, 1.6, 66, 64, 1.4, 141],
  tofu: [76, 0.7, 0, 0.3, 5.4, 0, 0, 0, 15, 350, 0, 7],
  "fideos-arroz": [364, 0.2, 0, 1.6, 0.7, 0, 0, 0, 3, 18, 0, 180],
  "fideos-ramen": [380, 1, 0, 2.5, 1.5, 0, 0, 0, 40, 20, 0, 600],
  levadura: [105, 0.1, 0, 8, 3.3, 0, 0, 0, 2340, 30, 0, 30],
  "levadura-quimica": [53, 0, 0, 0.2, 11, 0, 0, 0, 0, 5876, 0, 10600],
  berenjena: [25, 0, 0, 3, 0.2, 2, 1, 0, 22, 9, 0, 2],
  lechuga: [15, 0, 0, 1.3, 0.9, 9, 370, 0, 38, 36, 0, 28],
  cebolleta: [32, 0, 0, 2.6, 1.5, 19, 50, 0, 64, 72, 0, 16],
  chalota: [72, 0, 0, 3.2, 1.2, 8, 1, 0, 34, 37, 0, 12],
  "judias-verdes": [31, 0, 0, 2.7, 1, 12, 35, 0, 33, 37, 0, 6],
  "frijoles-negros": [341, 0.4, 0, 15, 5, 0, 1, 0, 444, 123, 0, 5],
  "alubias-blancas": [333, 0.2, 0, 15, 10, 0, 0, 0, 388, 240, 0, 16],
  tahini: [595, 7.5, 0, 9, 9, 0, 3, 0, 98, 426, 0, 115],
  pinones: [673, 5, 0, 3.7, 5.5, 1, 1, 0, 34, 16, 0, 2],
  nueces: [654, 6, 0, 6.7, 2.9, 1, 1, 0, 98, 98, 0, 2],
  almendras: [579, 3.8, 0, 12.5, 3.7, 0, 0, 0, 44, 269, 0, 1],
  avellanas: [628, 4.5, 0, 9.7, 4.7, 6, 1, 0, 113, 114, 0, 0],
  pistachos: [560, 5.9, 0, 10.6, 3.9, 5.6, 26, 0, 51, 105, 0, 1],
  boniato: [86, 0, 0, 3, 0.6, 2.4, 709, 0, 11, 30, 0, 55],
  calabaza: [26, 0, 0, 0.5, 0.8, 9, 426, 0, 16, 21, 0, 1],
  coliflor: [25, 0.1, 0, 2, 0.4, 48, 0, 0, 57, 22, 0, 30],
  brocoli: [34, 0, 0, 2.6, 0.7, 89, 31, 0, 63, 47, 0, 33],
  puerro: [61, 0, 0, 1.8, 2.1, 12, 83, 0, 64, 59, 0, 20],
  apio: [16, 0, 0, 1.6, 0.2, 3, 22, 0, 36, 40, 0, 80],
  guisantes: [81, 0.1, 0, 5, 1.5, 40, 38, 0, 65, 25, 0, 5],
  maiz: [86, 0.3, 0, 2, 0.5, 7, 9, 0, 42, 2, 0, 15],
  "harina-maiz": [370, 0.5, 0, 7, 2.4, 0, 11, 0, 25, 7, 0, 5],
  polenta: [370, 0.5, 0, 7, 2.4, 0, 11, 0, 25, 7, 0, 5],
  semola: [360, 0.2, 0, 3.9, 4.4, 0, 0, 0, 219, 17, 0, 1],
  maicena: [381, 0, 0, 0.9, 0.5, 0, 0, 0, 0, 2, 0, 9],
  "harina-garbanzo": [387, 0.7, 0, 11, 4.9, 0, 2, 0, 437, 45, 0, 64],
  avena: [389, 1.2, 0, 10, 4.7, 0, 0, 0, 56, 54, 0, 2],
  chocolate: [550, 19, 8, 7, 8, 0, 2, 0.2, 12, 60, 0, 20],
  cacao: [228, 8, 0, 33, 14, 0, 0, 0, 32, 128, 0, 21],
  cafe: [353, 0.2, 0, 0, 4.4, 0, 0, 0, 0, 141, 0, 37],
  bizcochos: [400, 3, 180, 1, 1.5, 0, 50, 0.3, 20, 40, 0.5, 250],
  galletas: [440, 5, 10, 2.5, 2, 0, 0, 0, 15, 50, 0, 400],
  gelatina: [335, 0, 0, 0, 1.2, 0, 0, 0, 30, 55, 0, 200],
  manzana: [52, 0, 0, 2.4, 0.1, 4.6, 3, 0, 3, 6, 0, 1],
  pera: [57, 0, 0, 3.1, 0.2, 4.3, 1, 0, 7, 9, 0, 1],
  platano: [89, 0.1, 0, 2.6, 0.3, 8.7, 3, 0, 20, 5, 0, 1],
  naranja: [47, 0, 0, 2.4, 0.1, 53, 11, 0, 30, 40, 0, 0],
  mango: [60, 0.1, 0, 1.6, 0.2, 36, 54, 0, 43, 11, 0, 1],
  fresas: [32, 0, 0, 2, 0.4, 59, 1, 0, 24, 16, 0, 1],
  kiwi: [61, 0, 0, 3, 0.3, 93, 4, 0, 25, 34, 0, 3],
  pina: [50, 0, 0, 1.4, 0.3, 48, 3, 0, 18, 13, 0, 1],
  "frutos-rojos": [45, 0, 0, 4, 0.7, 30, 2, 0, 20, 20, 0, 1],
  melocoton: [39, 0, 0, 1.5, 0.3, 7, 16, 0, 4, 6, 0, 0],
  sandia: [30, 0, 0, 0.4, 0.2, 8, 28, 0, 3, 7, 0, 1],
  melon: [34, 0, 0, 0.9, 0.2, 37, 169, 0, 21, 9, 0, 16],
  uvas: [69, 0.1, 0, 0.9, 0.4, 3, 3, 0, 2, 10, 0, 2],
  granada: [83, 0.1, 0, 4, 0.3, 10, 0, 0, 38, 10, 0, 3],
  higos: [249, 0.1, 0, 10, 2, 1, 0, 0, 9, 162, 0, 10],
  pasas: [299, 0.1, 0, 3.7, 1.9, 2, 0, 0, 5, 50, 0, 11],
  orejones: [241, 0, 0, 7.3, 2.7, 1, 180, 0, 10, 55, 0, 10],
  "coco-rallado": [660, 57, 0, 16, 3.3, 1.5, 0, 0, 9, 26, 0, 37],
  kimchi: [15, 0, 0, 1.6, 2.5, 18, 250, 0, 52, 33, 0, 500],
  "pasta-curry-verde": [120, 3, 0, 5, 3, 5, 100, 0, 20, 60, 0, 2500],
  "pasta-curry-rojo": [120, 3, 0, 5, 3, 5, 100, 0, 20, 60, 0, 2500],
  miso: [199, 1, 0, 5.4, 2.5, 0, 4, 0.1, 19, 57, 0, 3700],
  nori: [188, 0.2, 0, 36, 11, 39, 260, 0, 146, 70, 0, 48],
  repollo: [25, 0, 0, 2.5, 0.5, 36, 5, 0, 43, 40, 0, 18],
  "esparragos-verdes": [20, 0, 0, 2.1, 2.1, 6, 38, 0, 52, 24, 0, 2],
  "esparragos-blancos": [18, 0, 0, 1.5, 0.6, 8, 1, 0, 40, 20, 0, 4],
  alcachofa: [47, 0, 0, 5.4, 1.3, 12, 1, 0, 68, 44, 0, 94],
  acelgas: [19, 0, 0, 1.6, 1.8, 30, 306, 0, 14, 51, 0, 213],
  escarola: [17, 0, 0, 3.1, 0.8, 7, 108, 0, 142, 52, 0, 22],
  rucula: [25, 0.1, 0, 1.6, 1.5, 15, 119, 0, 97, 160, 0, 27],
  cebollino: [30, 0.1, 0, 2.5, 1.6, 58, 218, 0, 105, 92, 0, 3],
  "tomate-cherry": [20, 0, 0, 1.2, 0.3, 14, 42, 0, 15, 10, 0, 5],
  endibia: [17, 0, 0, 1, 0.2, 3, 1, 0, 37, 19, 0, 2],
  remolacha: [43, 0, 0, 2.8, 0.8, 5, 2, 0, 109, 16, 0, 78],
  nabo: [28, 0, 0, 1.8, 0.3, 21, 0, 0, 15, 30, 0, 67],
  hinojo: [31, 0, 0, 3.1, 0.7, 12, 7, 0, 27, 49, 0, 52],
  "coles-bruselas": [43, 0.1, 0, 3.8, 1.4, 85, 38, 0, 61, 42, 0, 25],
  habas: [88, 0.1, 0, 5.4, 1.9, 4, 17, 0, 96, 37, 0, 25],
  rabanitos: [16, 0, 0, 1.6, 0.3, 15, 0, 0, 25, 25, 0, 39],
  "pimientos-piquillo": [30, 0, 0, 2, 0.8, 60, 150, 0, 15, 10, 0, 300],
  alcaparras: [23, 0.2, 0, 3.2, 1.7, 4, 7, 0, 23, 40, 0, 2300],
  "tomates-secos": [258, 0.4, 0, 12, 9, 39, 44, 0, 68, 110, 0, 100],
};

/** Gramos de una pieza (parte comestible) para los ingredientes que se cuentan por unidades. */
const UNIT_G: Record<string, number> = {
  huevo: 55, yogur: 125, cebolla: 150, ajo: 5, pimiento: 150, aguacate: 140, limon: 100, lima: 45, chile: 15,
  "tortilla-maiz": 30, "pan-pita": 60, "obleas-empanadilla": 15, "pan-hamburguesa": 60, lechuga: 300, cebolleta: 80,
  coliflor: 600, brocoli: 400, puerro: 120, "papel-arroz": 10, manzana: 150, platano: 120, naranja: 150, mango: 250,
  repollo: 800, "tortilla-trigo": 40, gelatina: 2, nori: 3, pera: 150, chalota: 30, alcachofa: 50, escarola: 300,
  endibia: 120, hinojo: 200, granada: 200, kiwi: 75, pina: 900, melocoton: 130, melon: 1000, "pasta-brick": 15,
  laurel: 0.2, vainilla: 2, "huevo-codorniz": 9,
};

/** Parte comestible de lo que se compra entero (marisco con concha o cáscara). */
const EDIBLE: Record<string, number> = { almejas: 0.25, berberechos: 0.25, mejillones: 0.3, gambas: 0.5, langostinos: 0.5 };

export type Nutrients = {
  kcal: number; satFat: number; cholesterol: number; fiber: number; iron: number; vitC: number;
  vitA: number; b12: number; folate: number; calcium: number; vitD: number; sodium: number;
};

export const NUTRITION_IDS = new Set(Object.keys(T));

/** Gramos (o ml) de un ingrediente de receta. Se acepta ml ≈ g. */
function grams(ingredientId: string, qty: number, unit: string): number {
  switch (unit) {
    case "g": case "ml": return qty;
    case "kg": case "l": return qty * 1000;
    case "oz": return qty * 28.35;
    case "lb": return qty * 453.6;
    case "tsp": return qty * 5;
    case "tbsp": return qty * 15;
    case "cup": return qty * 240;
    case "unit": return qty * (UNIT_G[ingredientId] ?? 100);
    default: return 0;
  }
}

/**
 * Nutrientes por ración. Corrección de fritura: del aceite solo se cuenta lo que realmente
 * se come (lo que va al plato + un 15 % de lo que se usa para freír por encima de 60 ml).
 */
export function nutritionPerServing(recipe: Recipe): Nutrients {
  const sum: Nutrients = { kcal: 0, satFat: 0, cholesterol: 0, fiber: 0, iron: 0, vitC: 0, vitA: 0, b12: 0, folate: 0, calcium: 0, vitD: 0, sodium: 0 };
  for (const ri of recipe.ingredients) {
    const row = T[ri.ingredientId];
    if (!row || ri.optional) continue;
    let g = grams(ri.ingredientId, ri.qty, ri.unit) * (EDIBLE[ri.ingredientId] ?? 1);
    if (ri.ingredientId === "aceite" && g > 60) g = 60 + (g - 60) * 0.15;
    if (ri.ingredientId === "sal" && g > 1.5 * recipe.baseServings) g = 1.5 * recipe.baseServings; // la sal de cocer pasta o patatas se va con el agua
    const f = g / 100;
    sum.kcal += row[0] * f; sum.satFat += row[1] * f; sum.cholesterol += row[2] * f; sum.fiber += row[3] * f;
    sum.iron += row[4] * f; sum.vitC += row[5] * f; sum.vitA += row[6] * f; sum.b12 += row[7] * f;
    sum.folate += row[8] * f; sum.calcium += row[9] * f; sum.vitD += row[10] * f; sum.sodium += row[11] * f;
  }
  const n = recipe.baseServings || 1;
  for (const k of Object.keys(sum) as (keyof Nutrients)[]) sum[k] /= n;
  return sum;
}

/** Valores de referencia de nutrientes (VRN) del Reglamento UE 1169/2011. */
export const NRV = { iron: 14, vitC: 80, vitA: 800, b12: 2.5, folate: 200, calcium: 800, vitD: 5, fiber: 25 };

/** Embutidos y carnes procesadas: no entran en «colesterol» aunque la ración salga baja. */
const PROCESSED = new Set(["chorizo", "morcilla", "panceta", "beicon", "txistorra", "salchichas", "jamon", "jamon-cocido", "salmon-ahumado"]);

/** Pescado azul: su grasa (omega-3) es cardiosaludable, así que se mira menos la grasa total. */
const OILY_FISH = new Set(["salmon", "sardinas", "caballa", "boquerones", "trucha", "bonito"]);

export type HealthTag = "colesterol" | "hierro" | "vitamina-c" | "vitaminas" | "calcio" | "fibra";

export const HEALTH_LABEL: Record<HealthTag, string> = {
  colesterol: "Cuida el colesterol",
  hierro: "Rica en hierro",
  "vitamina-c": "Rica en vitamina C",
  vitaminas: "Rica en vitaminas",
  calcio: "Rica en calcio",
  fibra: "Rica en fibra",
};

/**
 * Etiquetas de salud, por ración. El Reglamento UE 1924/2006 llama «alto contenido» al 30 % del VRN
 * por 100 g; aquí se pide más (50 % del VRN en una ración) para que la etiqueta signifique algo:
 * - colesterol: ≤ 5 g de grasa saturada y ≤ 150 mg de colesterol (pescado azul: ≤ 7,5 g de saturada),
 *   ≤ 900 mg de sodio por ración,
 *   sin embutidos, sin frituras (más de 150 ml de aceite) y sin postres.
 * - hierro: ≥ 5,6 mg (40 % de 14 mg).
 * - vitamina C: ≥ 40 mg (50 % de 80 mg).
 * - vitaminas: al menos tres de A, C, B12, folato y D por encima del 30 % del VRN.
 * - calcio: ≥ 400 mg. Fibra: ≥ 8 g.
 */
export function healthTags(recipe: Recipe, isDessert: boolean): HealthTag[] {
  const n = nutritionPerServing(recipe);
  const tags: HealthTag[] = [];
  const processed = recipe.ingredients.some((i) => PROCESSED.has(i.ingredientId) && !i.optional);
  const fried = recipe.ingredients.some((i) => i.ingredientId === "aceite" && i.qty > 150);
  const oilyFish = recipe.ingredients.some((i) => OILY_FISH.has(i.ingredientId) && !i.optional);
  const heartOk = oilyFish ? n.satFat <= 7.5 : n.satFat <= 5 && n.cholesterol <= 150;
  if (!isDessert && !processed && !fried && heartOk && n.sodium <= 900) tags.push("colesterol");
  if (n.iron >= NRV.iron * 0.4) tags.push("hierro");
  if (n.vitC >= NRV.vitC * 0.5) tags.push("vitamina-c");
  const vits = [n.vitA >= NRV.vitA * 0.3, n.vitC >= NRV.vitC * 0.3, n.b12 >= NRV.b12 * 0.3, n.folate >= NRV.folate * 0.3, n.vitD >= NRV.vitD * 0.3];
  if (vits.filter(Boolean).length >= 3) tags.push("vitaminas");
  if (n.calcium >= NRV.calcium * 0.5) tags.push("calcio");
  if (n.fiber >= 8) tags.push("fibra");
  return tags;
}
