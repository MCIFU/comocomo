// Servidor estático mínimo para la versión web exportada (apps/app/dist), sin dependencias.
// Cualquier ruta que no sea un archivo devuelve index.html (la app decide qué pantalla mostrar).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../apps/app/dist/", import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".webp": "image/webp", ".ttf": "font/ttf", ".woff": "font/woff", ".woff2": "font/woff2", ".webmanifest": "application/manifest+json",
};

async function file(path) {
  try { return (await stat(path)).isFile() ? path : null; } catch { return null; }
}

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url ?? "/").split("?")[0]);
  const safe = normalize(url).replace(/^(\.\.[/\\])+/, "");
  const path = (await file(join(ROOT, safe))) ?? (await file(join(ROOT, safe, "index.html"))) ?? join(ROOT, "index.html");
  try {
    const body = await readFile(path);
    const cache = /[/\\](_expo|assets)[/\\]/.test(path) ? "public, max-age=31536000, immutable" : "no-cache";
    res.writeHead(200, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream", "Cache-Control": cache });
    res.end(body);
  } catch {
    res.writeHead(500).end("Falta la versión web: ejecuta «npm run build» antes de «npm start».");
  }
}).listen(PORT, () => console.log(`Cómocomo en http://localhost:${PORT}`));
