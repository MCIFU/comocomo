import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Tu cocina, tus ingredientes, tu presupuesto." />
        <meta name="theme-color" content="#FBF6EE" />
        <title>Cómocomo · Tu cocina, tus ingredientes, tu presupuesto</title>
        {/* Iconos generados por scripts/icons.mjs a partir del logotipo «etiqueta». */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Cómocomo" />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: "body{background:#FBF6EE}@media (prefers-color-scheme: dark){body{background:#171311}}" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
