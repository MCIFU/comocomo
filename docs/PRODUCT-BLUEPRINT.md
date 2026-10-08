# COMOCOMO — Product Blueprint

> **Tu cocina, tus ingredientes, tu presupuesto.**

Versión 0.1 · Documento vivo. Es la primera entrega, previa al código.

---

## 1. Visión

COMOCOMO es el asistente que responde a **"¿qué cocino hoy?"** a partir de la situación real de la persona: cuántos son, cuánto quiere gastar, qué tiene en casa, qué no le gusta, cuánto tiempo y qué herramientas tiene.

No es un catálogo de recetas. Es un **motor de decisión**: convierte restricciones en una respuesta concreta, con coste, lista de la compra y pasos claros.

**Métrica norte:** comidas cocinadas por usuario activo por semana (no recetas vistas).

## 2. Propuesta de valor

Para quien no sabe qué cocinar con lo que tiene y un presupuesto, COMOCOMO da 3–5 opciones compatibles en segundos, con coste y qué falta comprar. A diferencia de las apps de recetas, que parten de "elige una receta".

Tres pilares, por orden de importancia:
1. **Decisión** — resultados compatibles con tu realidad (ingredientes + presupuesto + tiempo + equipo).
2. **Coste honesto** — estimaciones marcadas como tales, nunca falsa precisión.
3. **Acción** — de la decisión a la compra y a los fogones sin salir de la app.

## 3. Usuarios

| Perfil | Necesidad dominante | Función clave |
|---|---|---|
| Principiante | Instrucciones inequívocas | Pasos con señales visuales, modo cocinar |
| Vive solo | Barato, cero desperdicio | Aprovechar lo que tengo, caducidades |
| Pareja | Planificar y comprar | Menú semanal + lista compartida |
| Familia | Cantidades y presupuesto | Escalado de raciones, coste/persona |
| Deportista | Preferencias nutricionales | Filtros y datos nutricionales opcionales |
| Explorador | Descubrir | Sorpréndeme, Descubre Japón |
| Poco tiempo | Rapidez | Filtro de tiempo, recetas ≤20 min |

El **flujo base es universal**; los perfiles se resuelven con filtros y personalización progresiva, no con modos separados.

## 4. Problemas detectados en la idea original (y propuestas)

- **Los precios son el mayor riesgo.** Sin fuente real, cualquier cifra es inventada. → Precios por *ingrediente × país* con **rango y nivel de confianza** (`estimated` / `reference` / `real`). La UI muestra "≈" y rango. Ver §13.
- **Demasiado alcance simultáneo.** → V1 recortada al bucle núcleo (§5).
- **Escáner de nevera y de códigos en V1 sería humo.** → Se difieren a V3, pero la despensa se modela ya con `source` (manual/foto/barcode).
- **Chat como interfaz principal.** → El chat es un *atajo de entrada* (texto libre → filtros estructurados), no un sustituto. Una sola caja de entrada libre en el inicio cubre la mayor parte del valor del "asistente".
- **Seguridad alimentaria.** Alergias = restricción dura, filtrada **en código determinista**, nunca delegada a la IA. Aviso de que no sustituye consejo médico.
- **Mantenimiento de contenido.** Las recetas son el activo más caro. → Corpus curado y validado (esquema estricto + revisión); la IA genera *borradores* que pasan validación; lo generado al vuelo se marca como tal.
- **Sobra en V1:** valoraciones con estrellas (basta favorito + "ya la cociné").
- **Falta:** *"Ya la cociné"* → descuenta de la despensa, alimenta el aprendizaje y el historial. Es el evento más valioso del producto.

## 5. Alcance por versiones

### V1 — "Dime qué tengo y te digo qué cocinar"
- Cuenta: registro, login (email + Google), perfil básico.
- Onboarding mínimo: país/región (opcional), alergias, no-me-gusta. **Todo omitible.**
- Pantalla "¿Qué cocinamos?": texto libre + chips de ingredientes; personas, presupuesto, tiempo y equipo como refinamientos progresivos.
- Resultados comparables con coste, ya-tienes/falta y razón de la recomendación.
- Receta completa con pasos, escalado de personas, sustituciones simples.
- Favoritos. Lista de la compra (agrupada por pasillo, fusión de duplicados, total estimado).
- Android + Web con cuenta y datos sincronizados.

### V2 — "Vive en tu semana"
Modo cocinar + temporizadores · Mi cocina (despensa) · Menú semanal → lista · Sustituciones con IA · Historial y "ya la cociné" · Para ti · Valoraciones.

### V3 — "Se anticipa"
Foto de la nevera · Código de barras · Caducidades + "úsalo pronto" · Precios reales / supermercados / ofertas · Notificaciones proactivas (con tope) · Descubrimiento avanzado.

## 6. Navegación

Móvil: barra inferior con 4 destinos.

```
[ Cocinar ]  [ Descubrir ]  [ Compra ]  [ Yo ]
```

- **Cocinar** (home): el motor de decisión. Es la pantalla a la que se vuelve.
- **Descubrir**: Sorpréndeme, por cocina/país, para ti.
- **Compra**: lista actual.
- **Yo**: perfil, favoritos, historial, preferencias, mi cocina (V2).

Escritorio: raíl lateral con los mismos destinos; resultados y receta en vista de dos paneles.

## 7. Pantallas (V1)

1. Bienvenida (un único mensaje + "Empezar")
2. Onboarding (3 pasos máx., todos omitibles): ubicación · no-gustos/alergias · equipo
3. **Cocinar** (home) — entrada libre + refinamientos
4. **Resultados** — comparables
5. **Receta** — detalle con escalado
6. **Lista de la compra**
7. **Favoritos**
8. **Perfil / Preferencias**
9. Auth (login / registro / recuperar)

## 8. Flujo principal — decisión de UX

| Opción | Pros | Contras |
|---|---|---|
| A. Formulario completo | Explícito | Fricción alta; viola "no obligar a rellenar" |
| B. Chat puro | Natural | Lento, impreciso, poco escaneable, coste de IA |
| C. **Entrada libre + resumen editable en chips** | Cero fricción, preciso, refinable | Requiere parseo fiable |
| D. Wizard por pasos | Guiado | Pasos obligatorios |

**Decisión: C.** Una caja: *"Tengo pollo, arroz y 8 €, somos 3"*. El texto se interpreta en chips editables (`3 personas · 8 € · pollo · arroz`) y los resultados aparecen **ya**. Debajo, refinadores opcionales (tiempo, equipo, no quiero). El perfil aporta valores por defecto, sobrescribibles por sesión. Los resultados se recalculan en vivo al tocar un chip.

Principios: resultados antes que preguntas · valores por defecto razonables · cada refinamiento reordena o reduce los resultados de forma visible.

## 9. Arquitectura

### Decisión de stack

| Capa | Elección | Descartado y motivo |
|---|---|---|
| App cliente | **Expo (React Native) + Expo Router + react-native-web**, TypeScript | *Flutter*: buen rendimiento, pero web de calidad media y no comparte lógica con el backend TS. *Next.js + RN separados*: dos UIs que mantener. *WebView/PWA*: descartado por requisito de Android real. |
| Backend | **Supabase** (Postgres, Auth, Storage, Edge Functions, RLS) | *Firebase*: Firestore encaja mal con datos relacionales (recetas↔ingredientes↔precios). *Backend propio*: más control, más coste operativo en V1. |
| IA | **Claude API** desde Edge Functions | Clave solo en servidor; salidas con esquema validado. |
| Dominio | Paquete TS puro (`packages/core`) | Escalado, matching, precios y lista: testeable e idéntico en Android/Web/servidor. |
| Imágenes | Supabase Storage + CDN, `expo-image` | Lazy-load, blurhash. |
| Monorepo | npm workspaces | Sin herramientas extra instaladas; migrable a pnpm/Turbo si hace falta. |

**Trade-off:** Expo-web no es lo mejor para SEO de recetas. Si el SEO público se vuelve estratégico, se añade un sitio de recetas con Next.js reutilizando `core` y `design-tokens`; la app autenticada sigue siendo Expo. No se construye ahora.

### Motor determinista + IA acotada
- **Determinista (código):** filtrar por alergias/dieta, puntuar compatibilidad, calcular coste, escalar, fusionar lista.
- **IA:** interpretar texto libre, sustituciones, borradores/menús, explicar la recomendación. La IA nunca decide una restricción de seguridad.

### Sincronización
Supabase como fuente de verdad; React Query con caché persistente (lectura offline de lista y favoritos); mutaciones optimistas; Realtime solo para la lista de la compra. Conflictos: last-write-wins por ítem.

### Seguridad
RLS en todas las tablas de usuario · `service_role` solo en Edge Functions · secretos en variables de entorno · validación con Zod en los bordes · fotos privadas (URLs firmadas) · rate-limit en funciones de IA.

## 10. Estructura del proyecto

```
comocomo/
├─ apps/
│  └─ app/                 # Expo universal (Android + Web)
│     ├─ app/              # rutas (Expo Router)
│     └─ src/{features,components,lib}
├─ packages/
│  ├─ core/                # dominio puro: escalado, matching, precios, lista
│  ├─ design-tokens/       # color, tipografía, espaciado, motion
│  └─ schemas/             # Zod: receta, ingrediente, perfil (contrato único)
├─ supabase/
│  ├─ migrations/
│  ├─ functions/           # parse-query, suggest, substitute (IA)
│  └─ seed/                # recetas, ingredientes, precios de referencia
├─ docs/
└─ .github/workflows/      # CI: lint, typecheck, test
```

## 11. Modelo de datos (núcleo)

```
profiles(id→auth.users, country, region, city, locale, currency, units,
         household_size, budget_default, time_default, spice_level, difficulty_pref)
user_restrictions(user_id, kind[allergy|intolerance|diet|dislike],
                  ingredient_id|tag, severity[hard|soft])
user_equipment(user_id, equipment_id)

ingredients(id, slug, name_i18n, aisle, default_unit, density_g_ml, allergens[], tags[])
ingredient_aliases(ingredient_id, alias, locale)       -- "pechuga" → pollo
ingredient_substitutions(ingredient_id, substitute_id, ratio, note, quality)
units(id, kind[mass|volume|count], to_base_factor)

cuisines(id, slug, name_i18n, country_code)
equipment(id, slug, name_i18n)
recipes(id, slug, title_i18n, description, cuisine_id,
        authenticity[traditional|adapted], origin_note, base_servings,
        prep_min, cook_min, difficulty, status[draft|published],
        source[curated|ai_draft], image_id, nutrition jsonb?)
recipe_ingredients(recipe_id, ingredient_id, qty, unit_id, optional, group, note)
recipe_steps(recipe_id, position, text, duration_s?, temp_c?, equipment_id?, cue)
recipe_equipment(recipe_id, equipment_id, required)
recipe_tags(recipe_id, tag)

prices(id, ingredient_id, country_code, region?, unit_id, amount_min, amount_max,
       currency, source_id, confidence[estimated|reference|real], observed_at)
price_sources(id, kind[manual|dataset|api|store], name, meta)
products(id, barcode?, ingredient_id?, name, brand, size)            -- V3

pantry_items(id, user_id, ingredient_id, qty, unit_id,
             location[fridge|pantry|freezer], expires_on?, source[manual|photo|barcode])
shopping_lists(id, user_id, name, status)
shopping_items(list_id, ingredient_id, qty, unit_id, checked, recipe_ids[],
               est_price_min, est_price_max, real_price?)
meal_plans(id, user_id, start, servings, budget)
meal_plan_entries(plan_id, date, slot, recipe_id, servings)
favorites(user_id, recipe_id)
cook_history(id, user_id, recipe_id, servings, cooked_at, rating?)
images(id, owner, storage_path, kind, blurhash, alt)
```

Claves: cantidades en unidad base + unidad de presentación según localización · alias multilingües de ingredientes · precios versionados con confianza (la tabla ya admite precio real) · textos en `jsonb` i18n.

## 12. Estrategia de IA

| Caso | Enfoque | Versión |
|---|---|---|
| Texto libre → filtros | LLM con salida estructurada; fallback a parser por reglas | V1 |
| "Por qué esta receta" | Plantilla determinista con datos reales (ingredientes que ya tienes, coste, equipo) | V1 |
| Sustituciones | Tabla curada primero; LLM para lo no cubierto | V1/V2 |
| Menú semanal | Optimización determinista (presupuesto, repetición, reutilización) + LLM para candidatos | V2 |
| Adaptar a equipo/tiempo | LLM → borrador → validación de esquema y sanidad | V2 |
| Foto de nevera | Visión → lista de ingredientes **confirmable por el usuario** | V3 |

Reglas: salida siempre validada con Zod · temperatura baja · alergias filtradas post-hoc en código · caché de peticiones repetidas · presupuesto de coste por usuario · transparencia ("generada por IA") en borradores.

## 13. Precios

- Precio de ingrediente = **rango + confianza + fecha**, por país/región.
- Coste de receta = suma de la parte *proporcional* usada; opción "coste de compra" (paquete completo) para lo que falta comprar.
- V1: dataset de referencia curado con `confidence = estimated`; la UI muestra "≈ 8–9 €".
- Futuro: adaptadores `PriceProvider` por supermercado/API escriben en la misma tabla con `confidence = real`; la UI ya soporta "estimado vs real".

## 14. Identidad visual

**Personalidad:** editorial cálida, directa, con humor sutil. Cocina de casa, no de restaurante. Tipografía con carácter, mucho espacio, color con función.

**Concepto de logo.** El nombre es CO-MO-CO-MO y el juego *como / cómo* (verbo / pregunta) es la idea central. Isotipo propuesto: **dos "o" enlazadas** — una plato visto desde arriba, otra el mismo plato ya servido — los dos estados de una transformación (ingredientes → comida). El acento de *cómo* se usa como recurso de marca (el acento = la pregunta). Funciona como wordmark en minúsculas, isotipo (doble o), icono Android adaptive (doble o sobre color sólido) y favicon (una sola o).

Evitado: gorro, cubiertos, hojas, cucharas.

**Color (semántico, no decorativo)**

| Token | Uso | Valor inicial |
|---|---|---|
| `paper` | fondo | `#FBF6EE` |
| `ink` | texto | `#1F1A17` |
| `tomato` | acción primaria | `#D8432B` |
| `olive` | "ya lo tienes" / éxito | `#4F6B3A` |
| `saffron` | "falta" / precio / atención | `#E3A32B` |
| `plum` | acento secundario / descubrir | `#5B2E4A` |
| `crust` | superficies elevadas | `#F1E6D4` |

Modo oscuro desde el inicio. Contraste AA verificado por token antes de fijarlos (los valores son un punto de partida).

**Tipografía:** serif display con carácter (p. ej. *Fraunces*) para títulos y platos · sans humanista legible (p. ej. *Instrument Sans*) para UI · cifras tabulares para precios y tiempos. Escala modular de pocos tamaños.

**Forma:** radios 6/10/16, bordes finos en vez de sombras pesadas, controles de 48 px, iconografía de trazo propio y coherente.

**Fotografía:** luz natural lateral, plano cenital o 3/4, fondo mate neutro, vajilla sencilla, sin manos ni texto; 4:5 en filas/tarjetas y 16:9 en hero; tratamiento de color unificado. Placeholders tipográficos hasta tener imagen real.

**Motion:** 120–200 ms funcional, una curva única, `prefers-reduced-motion` respetado. Momentos con propósito: ingrediente que salta a la lista, paso completado, temporizador, transición resultados → receta.

## 15. Sistema de diseño

`design-tokens` (TS) es la única fuente: color, tipografía, espaciado (base 4), radios, elevación, motion. Componentes V1: Button, Input/TextArea, Chip, IngredientRow (tengo/falta con icono + color), RecipeResultRow, Stepper de personas, Sheet, Toast, EmptyState, Skeleton, ErrorState, Tabs/BottomNav. *Tengo/falta* nunca depende solo del color: icono + texto.

Los resultados se presentan como **filas editoriales densas y comparables**, no una cuadrícula de tarjetas idénticas.

## 16. Estrategia Android + Web

Una base de código Expo con divergencias deliberadas:
- **Android:** gestos, hápticos, notificaciones locales para temporizadores, cámara (V3), pantalla activa en modo cocinar, gesto atrás.
- **Web:** dos paneles ≥1024 px, atajos de teclado, foco visible, enlaces compartibles, `max-width` controlado.
- Mismos contratos (`schemas`), misma lógica (`core`), misma cuenta.
- Breakpoints: 0–599 móvil · 600–1023 tablet · ≥1024 escritorio.

## 17. Calidad y pruebas

- Unitarias (Vitest) en `core`: escalado, unidades, coste, fusión de lista, filtros, restricciones (**cobertura especial en alergias**).
- Todo el corpus de recetas validado en CI (cantidades coherentes, tiempos, pasos).
- Edge Functions: tests de contrato.
- Componentes clave: Testing Library.
- E2E de flujos críticos: registro → buscar → receta → lista.
- QA visual por breakpoint + accesibilidad (teclado, contraste, lector de pantalla) tras cada hito.

## 18. Plan de implementación

| Hito | Contenido | Salida verificable |
|---|---|---|
| **M0** | Monorepo, CI, tokens, esquemas, proyecto Supabase | `npm test` verde |
| **M1** | `core` + tests (escalado, unidades, coste, matching, lista) | Dominio cubierto |
| **M2** | Corpus semilla: ~60 recetas / ~200 ingredientes / precios de referencia | Validación en CI |
| **M3** | Auth + perfil + onboarding | Login en Android y Web |
| **M4** | Cocinar + Resultados | Flujo núcleo con datos reales |
| **M5** | Receta + escalado + favoritos | Detalle completo |
| **M6** | Lista de la compra + sync multi-dispositivo | Crear en web → ver en Android |
| **M7** | Pasada de diseño, a11y y responsive + identidad (logo, assets) | Checklist de calidad |
| **M8** | Beta cerrada | APK interno + web desplegada |

Después, V2 en este orden: modo cocinar/temporizadores → despensa → menú semanal → sustituciones con IA.

## 19. Herramientas creativas

- **Blender:** solo para el isotipo/ilustración 3D de marca si aporta al lenguaje visual (M7).
- **Three.js:** posible momento de marca en la bienvenida; fuera del flujo núcleo.
- **Unity:** no se usa.

## 20. Decisiones abiertas

1. **Idioma de lanzamiento:** propuesta ES primero, con i18n desde el día 1.
2. **Origen del corpus:** curado propio (más lento, sin problemas de licencia) vs. licenciar/importar. Propuesta: curado propio + IA como borrador revisado.
3. **Monetización:** freemium (límites de IA/menús) vs. afiliación con supermercados cuando haya precios reales. No condiciona V1.

