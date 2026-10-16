// Servidor estático mínimo para la versión web exportada (apps/app/dist), sin dependencias.
// Cualquier ruta que no sea un archivo devuelve index.html (la app decide qué pantalla mostrar).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const ROOT = fileURLToPath(new URL("../apps/app/dist/", import.meta.url));
const PORT = Number(process.env.PORT) || 3000;

// Si el hosting no ejecutó «npm run build», o la versión compilada es de otro commit, se compila aquí (uno o dos minutos).
const REPO = fileURLToPath(new URL("..", import.meta.url));
const commit = (() => { try { return execSync("git rev-parse HEAD", { cwd: REPO }).toString().trim(); } catch { return ""; } })();
const STAMP = join(ROOT, ".commit");
const built = existsSync(STAMP) ? readFileSync(STAMP, "utf8").trim() : "";
if (!existsSync(join(ROOT, "index.html")) || (commit && built !== commit)) {
  console.log("Compilando la versión web («npm run build»)…");
  execSync("npm run build:web", { stdio: "inherit", cwd: REPO, env: { ...process.env, CI: "1" } });
  if (commit) writeFileSync(STAMP, commit);
}
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
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" }).end("Falta la versión web: ejecuta «npm run build» antes de «npm start».");
  }
}).listen(PORT, () => console.log(`Cómocomo en http://localhost:${PORT}`));
