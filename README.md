# COMOCOMO

**Tu cocina, tus ingredientes, tu presupuesto.**

Asistente de cocina para Android y Web: dime cuántos sois, cuánto quieres gastar y qué tienes en casa, y te digo qué cocinar.

## Estado

App Expo (web + Android) con diseño «Mercado»: buscas un plato y ves la receta paso a paso, los ingredientes para las personas que elijas y un ticket con lo que cuesta comprarlo (envases completos). Lista de la compra, guardadas y modo cocinar con temporizadores. Datos locales; falta cuenta y sincronización (Supabase).

- [Product Blueprint](docs/PRODUCT-BLUEPRINT.md)
- Maquetas de las tres direcciones de diseño: `docs/mockups/disenos/`

## Stack propuesto

Expo (React Native + web) · TypeScript · Supabase (Postgres, Auth, Storage, Edge Functions) · Claude API · npm workspaces.


## Desarrollo

```bash
npm install
npm run typecheck
npm test
```

