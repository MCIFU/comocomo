// Cuentas de Cómocomo: usuario + contraseña, y los datos de cada cuenta (favoritos, lista de la compra…).
// Se guardan en un archivo JSON fuera del repositorio (COMOCOMO_DATA o ~/.comocomo/cuentas.json),
// así sobreviven a cada despliegue. Las contraseñas nunca se guardan: solo su hash scrypt con sal.
import { randomBytes, scryptSync, timingSafeEqual, createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

const FILE = process.env.COMOCOMO_DATA ? join(process.env.COMOCOMO_DATA, "cuentas.json") : join(homedir(), ".comocomo", "cuentas.json");
const SESSION_DAYS = 90;
const MAX_DATA = 200_000; // bytes de datos por cuenta

/** @type {{ users: Record<string, { name: string, salt: string, hash: string, data: object, sessions: Record<string, number> }> }} */
let db = { users: {} };
if (existsSync(FILE)) {
  try { db = JSON.parse(readFileSync(FILE, "utf8")); } catch { console.error("No se pudo leer", FILE); }
}

function save() {
  mkdirSync(dirname(FILE), { recursive: true });
  writeFileSync(FILE + ".tmp", JSON.stringify(db));
  renameSync(FILE + ".tmp", FILE);
}

const key = (name) => name.trim().toLowerCase();
const hashPw = (pw, salt) => scryptSync(pw, salt, 64).toString("hex");
const hashToken = (t) => createHash("sha256").update(t).digest("hex");

function newSession(u) {
  const token = randomBytes(32).toString("hex");
  const now = Date.now();
  for (const [h, exp] of Object.entries(u.sessions)) if (exp < now) delete u.sessions[h];
  u.sessions[hashToken(token)] = now + SESSION_DAYS * 864e5;
  save();
  return token;
}

export function register(name, password) {
  name = String(name ?? "").trim();
  password = String(password ?? "");
  if (!/^[\p{L}\p{N}_.-]{3,30}$/u.test(name)) return { error: "El usuario debe tener entre 3 y 30 letras o números." };
  if (password.length < 6) return { error: "La contraseña debe tener al menos 6 caracteres." };
  if (db.users[key(name)]) return { error: "Ese usuario ya existe." };
  const salt = randomBytes(16).toString("hex");
  const u = (db.users[key(name)] = { name, salt, hash: hashPw(password, salt), data: {}, sessions: {} });
  return { user: u.name, token: newSession(u), data: u.data };
}

export function login(name, password) {
  const u = db.users[key(String(name ?? ""))];
  const ok = u && timingSafeEqual(Buffer.from(hashPw(String(password ?? ""), u.salt), "hex"), Buffer.from(u.hash, "hex"));
  if (!ok) return { error: "Usuario o contraseña incorrectos." };
  return { user: u.name, token: newSession(u), data: u.data };
}

function bySession(token) {
  if (!token) return null;
  const h = hashToken(token);
  for (const u of Object.values(db.users)) if ((u.sessions[h] ?? 0) > Date.now()) return { u, h };
  return null;
}

/** Atiende /api/*. Devuelve true si la petición era de la API. */
export async function handleApi(req, res, url) {
  if (!url.startsWith("/api/")) return false;
  const send = (status, body) => {
    res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
    res.end(JSON.stringify(body));
  };
  let body = {};
  if (req.method === "POST" || req.method === "PUT") {
    let raw = "";
    for await (const chunk of req) {
      raw += chunk;
      if (raw.length > MAX_DATA + 10_000) return send(413, { error: "Demasiados datos." }), true;
    }
    try { body = raw ? JSON.parse(raw) : {}; } catch { return send(400, { error: "Petición no válida." }), true; }
  }
  const token = (req.headers.authorization ?? "").replace(/^Bearer\s+/i, "");
  const route = `${req.method} ${url}`;

  if (route === "POST /api/register") { const r = register(body.user, body.password); return send(r.error ? 400 : 200, r), true; }
  if (route === "POST /api/login") { const r = login(body.user, body.password); return send(r.error ? 401 : 200, r), true; }

  const s = bySession(token);
  if (!s) return send(401, { error: "Sesión caducada. Vuelve a entrar." }), true;
  if (route === "GET /api/me") return send(200, { user: s.u.name, data: s.u.data }), true;
  if (route === "PUT /api/data") {
    if (JSON.stringify(body).length > MAX_DATA) return send(413, { error: "Demasiados datos." }), true;
    s.u.data = body;
    save();
    return send(200, { ok: true }), true;
  }
  if (route === "POST /api/logout") { delete s.u.sessions[s.h]; save(); return send(200, { ok: true }), true; }
  return send(404, { error: "No existe." }), true;
}
