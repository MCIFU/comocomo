// Lógica compartida por las tres maquetas: búsqueda, personas, receta abierta.
// Cada diseño define window.VIEW = { card(r, n), detail(r, n) } y los contenedores #grid y #detail.
(function () {
  const R = window.RECIPES;
  const state = { q: "", n: 4, open: R[0].id };
  const UNIT = { g: "g", kg: "kg", ml: "ml", l: "l", tsp: "cdta", tbsp: "cda", cup: "taza", unit: "" };

  window.fmtPrice = (r, n) => {
    const p = r.price[n] ?? r.price[4];
    return "≈ " + String(p).replace(".", ",") + " €";
  };
  window.fmtQty = (i, n) => {
    let q = i.qty * n;
    let u = i.unit;
    if (u === "g" && q >= 1000) { q /= 1000; u = "kg"; }
    if (u === "ml" && q >= 1000) { q /= 1000; u = "l"; }
    if (u === "unit") {
      const w = Math.floor(q), f = Math.round((q - w) * 4) / 4;
      const frac = { 0.25: "¼", 0.5: "½", 0.75: "¾" }[f] || "";
      return (w || "") + frac || "1";
    }
    q = q < 50 ? Math.round(q * 10) / 10 : Math.round(q / 5) * 5;
    return String(q).replace(".", ",") + " " + UNIT[u];
  };

  function render() {
    const nq = state.q.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const list = R.filter((r) => !nq || (r.title + " " + r.cuisine + " " + r.ingredients.map((i) => i.name).join(" ")).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").includes(nq));
    document.getElementById("grid").innerHTML = list.length ? list.map((r) => window.VIEW.card(r, state.n)).join("") : window.VIEW.empty(state.q);
    const r = R.find((x) => x.id === state.open);
    document.getElementById("detail").innerHTML = window.VIEW.detail(r, state.n);
    document.querySelectorAll("[data-n]").forEach((el) => (el.textContent = state.n));
  }

  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-search]")) { state.q = e.target.value; render(); }
  });
  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-open]");
    if (open) { state.open = open.dataset.open; render(); document.getElementById("detail").scrollIntoView({ behavior: "smooth", block: "start" }); }
    const step = e.target.closest("[data-step]");
    if (step) { const order = [1, 2, 3, 4, 5, 6, 8]; const i = order.indexOf(state.n) + Number(step.dataset.step); state.n = order[Math.max(0, Math.min(order.length - 1, i))]; render(); }
    const chip = e.target.closest("[data-q]");
    if (chip) { state.q = chip.dataset.q; document.querySelectorAll("[data-search]").forEach((i) => (i.value = state.q)); render(); }
  });
  document.addEventListener("DOMContentLoaded", render);
})();
