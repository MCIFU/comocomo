# COMOCOMO

**Tu cocina, tus ingredientes, tu presupuesto.**

Asistente de cocina para Android y Web: dime cuántos sois, cuánto quieres gastar y qué tienes en casa, y te digo qué cocinar.

## Estado

M0 y M1 completados: monorepo, CI, tokens de diseño (con test de contraste AA), esquemas y lógica de dominio (unidades, escalado, coste, lista de la compra, matching con restricciones de seguridad). App Expo (web + Android) con búsqueda en lenguaje natural, recetas, modo cocinar con temporizadores y lista de la compra. Datos locales; falta cuenta y sincronización (Supabase).

- [Product Blueprint](docs/PRODUCT-BLUEPRINT.md)

## Stack propuesto

Expo (React Native + web) · TypeScript · Supabase (Postgres, Auth, Storage, Edge Functions) · Claude API · npm workspaces.


## Desarrollo

```bash
npm install
npm run typecheck
npm test
```

