import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

// Isotipo como favicon (SVG): dos "o" solapadas.
const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32"><circle cx="32" cy="16" r="12" fill="#C23A24"/><circle cx="16" cy="16" r="12" fill="none" stroke="#1F1A17" stroke-width="3"/></svg>',
  );

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Tu cocina, tus ingredientes, tu presupuesto." />
        <meta name="theme-color" content="#FBF6EE" />
        <title>COMOCOMO · Tu cocina, tus ingredientes, tu presupuesto</title>
        <link rel="icon" type="image/svg+xml" href={FAVICON} />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: "body{background:#FBF6EE}@media (prefers-color-scheme: dark){body{background:#171311}}" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
