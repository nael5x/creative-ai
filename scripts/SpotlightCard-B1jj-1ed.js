import { r as u, j as F } from "./components-entry-DeioXdAQ.js";
const ne = {
  dark: {
    surface: "#111111",
    border: "rgba(255, 255, 255, 0.08)",
    shadow: "0 24px 48px -24px rgba(0, 0, 0, 0.6)",
    light: "#ffffff",
    fill: 1,
    edge: 1
  },
  light: {
    surface: "#ffffff",
    border: "rgba(24, 24, 27, 0.1)",
    shadow: "0 1px 2px rgba(24, 24, 27, 0.04), 0 18px 40px -20px rgba(24, 24, 27, 0.16)",
    light: "#18181b",
    fill: 0.28,
    edge: 0.7
  }
}, fe = ["circle", "beam"], pe = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, $ = (y, m, x) => Math.min(x, Math.max(m, y)), re = (y, m) => {
  const x = $(m, 0, 1), v = (1 - x) ** 1.5 * 0.85, k = (g, h) => `color-mix(in srgb, ${y} ${(g * 100).toFixed(2)}%, transparent) ${(h * 100).toFixed(2)}%`, C = [k(1, 0)];
  for (let g = 0; g <= 14; g++) {
    const h = v + (1 - v) * g / 14, p = (h - v) / (1 - v), S = 1 - p * p * (3 - 2 * p), I = Math.exp(-4.6 * p * p) * (1 - p ** 6);
    C.push(k(S + (I - S) * x, h));
  }
  return C.join(", ");
}, xe = ({
  children: y,
  className: m = "",
  style: x,
  spotlightColor: v,
  intensity: k = 0.15,
  spotlightSize: C = 240,
  softness: g = 0.7,
  shape: h = "circle",
  borderGlow: p = 0.6,
  proximity: S = 80,
  smoothing: I = 0.3,
  ambient: se = !1,
  flare: ie = !0,
  grain: oe = 0,
  theme: ae = "dark",
  ...ce
}) => {
  const H = u.useRef(null), X = u.useRef(null), Y = u.useRef(null), D = u.useRef(null), T = u.useRef(null), w = ne[ae] ?? ne.dark, P = v ?? w.light, U = {
    shape: fe.includes(h) ? h : "circle",
    fill: re(P, g),
    edge: re(P, 1),
    size: Math.max(20, C),
    intensity: $(k, 0, 1) * w.fill,
    borderGlow: $(p, 0, 1) * w.edge,
    proximity: Math.max(0, S),
    smoothing: $(I, 0, 1),
    ambient: se,
    flare: ie,
    grain: $(oe, 0, 1)
  }, N = u.useRef(U);
  return N.current = U, u.useEffect(() => {
    T.current?.();
  }), u.useEffect(() => {
    const o = H.current, O = X.current, j = Y.current, A = D.current;
    if (!o || !O || !j || !A) return;
    const E = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, e = { x: 0, y: 0, presence: 0, flare: 0, time: Math.random() * 60, pressed: !1, visible: !0 }, a = { x: 0, y: 0, active: !1 }, b = { light: "", edge: "", noise: "" };
    let M = null, L = 0, q = 0, B = !0;
    const G = (t, n, d, i, r) => {
      if (t.shape === "beam") {
        const s = Math.max(n * 0.6, i + n * 0.55);
        return `radial-gradient(${(n * 0.55).toFixed(1)}px ${s.toFixed(1)}px at ${d.toFixed(1)}px 0px, ${r})`;
      }
      return `radial-gradient(circle ${n.toFixed(1)}px at ${d.toFixed(1)}px ${i.toFixed(1)}px, ${r})`;
    }, le = (t) => {
      const n = t.size * (1 + 0.2 * e.flare), d = 1 + 0.7 * e.flare, i = G(t, n, e.x, e.y, t.fill), r = G(t, n * 0.6, e.x, t.shape === "beam" ? 0 : e.y, t.edge);
      i !== b.light && (b.light = i, O.style.background = i), r !== b.edge && (b.edge = r, A.style.background = r), O.style.opacity = String(Math.min(1, e.presence * t.intensity * d)), A.style.opacity = String(Math.min(1, e.presence * t.borderGlow * d));
      const s = t.grain > 0 ? G(t, n, e.x, e.y, "#000 0%, transparent 100%") : "none";
      s !== b.noise && (b.noise = s, j.style.webkitMaskImage = s, j.style.maskImage = s), j.style.opacity = String(e.presence * t.grain);
    }, z = (t) => {
      if (L = 0, !B) return;
      const n = N.current, d = Math.min(0.05, Math.max(1e-3, (t - q) / 1e3));
      q = t;
      const i = o.getBoundingClientRect();
      let r = e.x, s = e.y, c = 0;
      if (M && o.contains(M)) {
        const f = M.getBoundingClientRect();
        r = f.left + f.width / 2 - i.left, s = f.top + f.height / 2 - i.top, c = 1;
      } else if (a.active) {
        r = a.x - i.left, s = a.y - i.top;
        const f = Math.hypot(Math.max(0, -r, r - i.width), Math.max(0, -s, s - i.height));
        f === 0 ? c = 1 : n.proximity > 0 && (c = Math.max(0, 1 - f / n.proximity) ** 2);
      }
      if (c < 0.6 && n.ambient && e.visible) {
        E || (e.time += d);
        const f = 0.6 - c;
        r += (i.width * (0.5 + 0.34 * Math.sin(e.time * 0.43)) - r) * (f / 0.6), s += (i.height * (0.5 + 0.3 * Math.sin(e.time * 0.61 + 1.3)) - s) * (f / 0.6), c = 0.6;
      }
      e.presence < 0.02 && c > 0 && !n.ambient && (e.x = r, e.y = s);
      const te = E || n.smoothing === 0 ? 1 : 1 - Math.exp(-d / (0.015 + n.smoothing * 0.22));
      e.x += (r - e.x) * te, e.y += (s - e.y) * te;
      const de = E ? 1 : 1 - Math.exp(-d / (c > e.presence ? 0.1 : 0.32));
      e.presence += (c - e.presence) * de, Math.abs(c - e.presence) < 2e-3 && (e.presence = c);
      const R = e.pressed && n.flare && !E ? 1 : 0;
      e.flare += (R - e.flare) * (1 - Math.exp(-d / (R ? 0.05 : 0.28))), Math.abs(R - e.flare) < 2e-3 && (e.flare = R), le(n), (!(!(Math.abs(r - e.x) > 0.1 || Math.abs(s - e.y) > 0.1) && e.presence === c && e.flare === R) || n.ambient && e.visible && !E) && (L = requestAnimationFrame(z));
    }, l = () => {
      L || !B || (q = performance.now(), L = requestAnimationFrame(z));
    };
    T.current = l;
    const J = (t) => {
      a.x = t.clientX, a.y = t.clientY, a.active = !0, (e.presence > 0 || N.current.proximity > 0 || o.contains(t.target)) && l();
    }, K = (t) => {
      t.relatedTarget || (a.active = !1, l());
    }, Q = (t) => {
      a.x = t.clientX, a.y = t.clientY, a.active = !0, e.pressed = !0, l();
    }, _ = (t) => {
      t.pointerType !== "mouse" && (a.active = !1), !(!e.pressed && t.pointerType === "mouse") && (e.pressed = !1, l());
    }, V = (t) => {
      !(t.target instanceof Element) || !t.target.matches(":focus-visible") || (M = t.target, l());
    }, W = (t) => {
      o.contains(t.relatedTarget) || (M = null, l());
    }, Z = () => {
      (a.active || e.presence > 0) && l();
    }, ee = new IntersectionObserver((t) => {
      e.visible = t.some((n) => n.isIntersecting), e.visible && l();
    });
    return ee.observe(o), window.addEventListener("pointermove", J), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", _), window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), document.addEventListener("pointerout", K), o.addEventListener("pointerdown", Q), o.addEventListener("focusin", V), o.addEventListener("focusout", W), l(), () => {
      B = !1, cancelAnimationFrame(L), ee.disconnect(), window.removeEventListener("pointermove", J), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), window.removeEventListener("scroll", Z, { capture: !0 }), document.removeEventListener("pointerout", K), o.removeEventListener("pointerdown", Q), o.removeEventListener("focusin", V), o.removeEventListener("focusout", W), T.current = null;
    };
  }, []), /* @__PURE__ */ F.jsxs(
    "div",
    {
      ref: H,
      className: `spotlight-card${m ? ` ${m}` : ""}`,
      style: {
        "--spotlight-card-surface": w.surface,
        "--spotlight-card-border": w.border,
        "--spotlight-card-shadow": w.shadow,
        ...x
      },
      ...ce,
      children: [
        /* @__PURE__ */ F.jsx("span", { ref: X, className: "spotlight-card__light", "aria-hidden": "true" }),
        /* @__PURE__ */ F.jsx("span", { ref: Y, className: "spotlight-card__grain", style: { backgroundImage: pe }, "aria-hidden": "true" }),
        y,
        /* @__PURE__ */ F.jsx("span", { className: "spotlight-card__border", "aria-hidden": "true" }),
        /* @__PURE__ */ F.jsx("span", { ref: D, className: "spotlight-card__edge", "aria-hidden": "true" })
      ]
    }
  );
};
export {
  xe as default
};
