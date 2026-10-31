import { r as g, j as y } from "./components-entry-DM4gR148.js";
const J = ["linear", "flow", "conic"], G = { horizontal: 90, vertical: 180, diagonal: 135 }, K = Math.PI * 2, $ = (v, d, M) => Math.min(M, Math.max(d, v));
function W({
  children: v,
  colors: d = ["#5227FF", "#FF9FFC", "#B497CF"],
  animationSpeed: M = 8,
  variant: A = "linear",
  angle: m = 90,
  direction: h,
  scale: O = 3,
  yoyo: S = !0,
  glow: I = 0,
  showBorder: z = !1,
  borderWidth: H = 1.5,
  pauseOnHover: U = !1,
  followPointer: V = !1,
  className: _ = "",
  style: X
}) {
  const N = g.useRef(null), F = g.useRef(null), b = g.useRef(null), w = d.length > 1 ? d : [d[0] ?? "#ffffff", d[0] ?? "#ffffff"];
  F.current = {
    colors: w,
    speed: Math.max(0.2, M),
    variant: J.includes(A) ? A : "linear",
    angle: h ? G[h] ?? m : m,
    scale: $(O, 1, 6),
    yoyo: S,
    pauseOnHover: U,
    followPointer: V
  }, g.useEffect(() => {
    b.current?.();
  }), g.useEffect(() => {
    const o = N.current;
    if (!o) return;
    const D = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, e = { time: 0, inside: !1, visible: !0, x: 0.5, y: 0.5, px: 0.5, py: 0.5, vx: 0, vy: 0, pull: 0 };
    let x = 0, E = 0, j = !0;
    const R = () => {
      const t = F.current, n = t.colors, a = e.time / t.speed;
      let c;
      if (t.variant === "flow")
        c = `${n.map((s, i) => {
          const u = a * K, r = 0.55 + i * 0.618 % 1 * 0.5;
          let p = 50 + 44 * Math.sin(u * r + i * 2.1), L = 50 + 40 * Math.sin(u * (r * 0.83 + 0.21) + i * 1.3);
          return i === 0 && (p += (e.px * 100 - p) * e.pull, L += (e.py * 100 - L) * e.pull), `radial-gradient(ellipse ${(22 + 12 * t.scale).toFixed(1)}% ${(60 + 30 * t.scale).toFixed(1)}% at ${p.toFixed(2)}% ${L.toFixed(2)}%, ${s} 0%, transparent 100%)`;
        }).join(", ")}, linear-gradient(${t.angle}deg, ${n.join(", ")})`;
      else if (t.variant === "conic") {
        const l = t.yoyo ? Math.sin(a * Math.PI) * 50 : a * 360, s = 50 + (e.px * 100 - 50) * e.pull, i = 260 + (e.py * 100 - 260) * e.pull;
        c = `repeating-conic-gradient(from ${(l - 30).toFixed(2)}deg at ${s.toFixed(2)}% ${i.toFixed(2)}%, ${[...n, n[0]].map((u, r) => `${u} ${(r / n.length * 60 * (3 / t.scale)).toFixed(2)}deg`).join(", ")})`;
      } else {
        const l = [...n, n[0]], s = 100 * t.scale;
        let i;
        if (t.yoyo) {
          const r = a % 2, p = r < 1 ? r : 2 - r;
          i = (0.5 - Math.cos(Math.PI * p) / 2) * (s - 100);
        } else
          i = a % 1 * s;
        i += (e.px - 0.5) * s * 0.5 * e.pull;
        const u = l.map((r, p) => `${r} ${(p / (l.length - 1) * s - i).toFixed(2)}%`);
        c = `repeating-linear-gradient(${t.angle}deg, ${u.join(", ")})`;
      }
      o.style.setProperty("--gt-gradient", c);
    }, P = (t) => {
      if (x = 0, !j) return;
      const n = F.current, a = Math.min(0.05, Math.max(0, (t - E) / 1e3));
      E = t;
      const c = D || n.pauseOnHover && e.inside;
      c || (e.time += a);
      const l = n.followPointer && e.inside ? 1 : 0;
      e.pull += (l - e.pull) * (1 - Math.exp(-a * 6));
      const s = 160;
      e.vx += ((e.x - e.px) * s - e.vx * 2 * Math.sqrt(s)) * a, e.vy += ((e.y - e.py) * s - e.vy * 2 * Math.sqrt(s)) * a, e.px += e.vx * a, e.py += e.vy * a, R();
      const i = Math.abs(e.pull - l) > 1e-3 || Math.abs(e.vx) + Math.abs(e.vy) > 1e-3;
      !e.visible || c && !i || (x = requestAnimationFrame(P));
    }, f = () => {
      x || !j || (E = performance.now(), x = requestAnimationFrame(P));
    };
    b.current = () => {
      R(), f();
    };
    const q = (t) => {
      const n = o.getBoundingClientRect();
      e.x = $((t.clientX - n.left) / n.width, 0, 1), e.y = $((t.clientY - n.top) / n.height, 0, 1);
    }, k = (t) => {
      q(t), e.inside || (e.px = e.x, e.py = e.y), e.inside = !0, f();
    }, C = (t) => {
      q(t), f();
    }, T = () => {
      e.inside = !1, f();
    }, B = new IntersectionObserver((t) => {
      e.visible = t.some((n) => n.isIntersecting), e.visible && f();
    });
    return B.observe(o), o.addEventListener("pointerenter", k), o.addEventListener("pointermove", C), o.addEventListener("pointerleave", T), R(), f(), () => {
      j = !1, cancelAnimationFrame(x), B.disconnect(), o.removeEventListener("pointerenter", k), o.removeEventListener("pointermove", C), o.removeEventListener("pointerleave", T), b.current = null;
    };
  }, []);
  const Y = [...w, w[0]];
  return /* @__PURE__ */ y.jsx(
    "span",
    {
      ref: N,
      className: `gradient-text${z ? " gradient-text--border" : ""}${_ ? ` ${_}` : ""}`,
      style: {
        "--gt-gradient": `linear-gradient(${h ? G[h] ?? m : m}deg, ${Y.join(", ")})`,
        "--gt-border": `${H}px`,
        "--gt-glow": $(I, 0, 1),
        ...X
      },
      children: /* @__PURE__ */ y.jsxs("span", { className: "gradient-text__inner", children: [
        /* @__PURE__ */ y.jsx("span", { className: "gradient-text__content", children: v }),
        I > 0 ? /* @__PURE__ */ y.jsx("span", { className: "gradient-text__glow", "aria-hidden": "true", children: v }) : null
      ] })
    }
  );
}
export {
  W as default
};
