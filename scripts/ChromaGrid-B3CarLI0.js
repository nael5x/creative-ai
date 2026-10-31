import { r as g, j as t } from "./components-entry-DeioXdAQ.js";
const q = {
  dark: {
    "--chroma-frame": "rgba(38, 35, 46, 0.66)",
    "--chroma-frame-edge": "rgba(255, 255, 255, 0.08)",
    "--chroma-frame-highlight": "rgba(255, 255, 255, 0.07)",
    "--chroma-frame-shadow": "0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)",
    "--chroma-tile": "linear-gradient(180deg, #3a3644 0%, #27242f 100%)",
    "--chroma-tile-edge": "rgba(255, 255, 255, 0.07)",
    "--chroma-tile-highlight": "rgba(255, 255, 255, 0.12)",
    "--chroma-tile-shadow": "0 4px 10px -4px rgba(0, 0, 0, 0.7)",
    "--chroma-media-edge": "rgba(255, 255, 255, 0.06)",
    "--chroma-well": "rgba(255, 255, 255, 0.08)",
    "--chroma-ink": "#f4f4f5",
    "--chroma-muted": "rgba(244, 244, 245, 0.55)",
    "--chroma-hover": "brightness(1.12)",
    "--chroma-press": "brightness(0.85)"
  },
  light: {
    "--chroma-frame": "rgba(240, 240, 243, 0.8)",
    "--chroma-frame-edge": "rgba(24, 24, 27, 0.07)",
    "--chroma-frame-highlight": "rgba(255, 255, 255, 0.95)",
    "--chroma-frame-shadow": "0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)",
    "--chroma-tile": "linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)",
    "--chroma-tile-edge": "rgba(24, 24, 27, 0.08)",
    "--chroma-tile-highlight": "rgba(255, 255, 255, 1)",
    "--chroma-tile-shadow": "0 4px 10px -5px rgba(24, 24, 27, 0.25)",
    "--chroma-media-edge": "rgba(24, 24, 27, 0.06)",
    "--chroma-well": "rgba(24, 24, 27, 0.05)",
    "--chroma-ink": "#27272a",
    "--chroma-muted": "rgba(39, 39, 42, 0.55)",
    "--chroma-hover": "brightness(0.97)",
    "--chroma-press": "brightness(0.92)"
  }
}, _ = [
  {
    image: "https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?w=800&q=80&auto=format&fit=crop",
    title: "Golden Hour",
    subtitle: "Sky study",
    accent: "#ff8a4c"
  },
  {
    image: "https://images.unsplash.com/photo-1520930528075-4ea5ead759f5?w=800&q=80&auto=format&fit=crop",
    title: "Steel Arches",
    subtitle: "Sculpture",
    accent: "#ff5a36"
  },
  {
    image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=800&q=80&auto=format&fit=crop",
    title: "Black Beach",
    subtitle: "Landscape",
    accent: "#a98bff"
  },
  {
    image: "https://images.unsplash.com/photo-1524400968894-6e997a66e03f?w=800&q=80&auto=format&fit=crop",
    title: "Cloud Front",
    subtitle: "Weather",
    accent: "#ffb27a"
  },
  {
    image: "https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=800&q=80&auto=format&fit=crop",
    title: "Pink Drift",
    subtitle: "Sky study",
    accent: "#ff7eb6"
  },
  {
    image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800&q=80&auto=format&fit=crop",
    title: "Cumulus",
    subtitle: "Weather",
    accent: "#7cc4ff"
  }
], i = (h, m, l) => Math.min(l, Math.max(m, h)), I = (h) => {
  const m = i(1 - h, 0, 0.95), l = [];
  for (let p = 0; p <= 12; p++) {
    const u = p / 12, c = i((u - m) / Math.max(1e-4, 1 - m), 0, 1), w = 1 - c * c * c * (c * (c * 6 - 15) + 10);
    l.push(`rgba(0, 0, 0, ${w.toFixed(3)}) ${(u * 100).toFixed(1)}%`);
  }
  return l.join(", ");
}, Y = ({
  items: h,
  columns: m = 3,
  minCardWidth: l = 180,
  gap: p = 12,
  radius: u = 260,
  softness: c = 0.6,
  damping: w = 0.45,
  fadeOut: j = 0.6,
  grayscale: C = 1,
  dim: P = 0.12,
  glow: A = 0.5,
  borderGlow: B = 1,
  reveal: E = "spotlight",
  aspectRatio: z = "3 / 2",
  cardRadius: T = 22,
  showInfo: D = !0,
  frame: $ = !1,
  theme: G = "dark",
  className: N = ""
}) => {
  const k = g.useRef(null), v = g.useRef(null), M = g.useRef(null), H = h?.length ? h : _;
  v.current = { damping: w, fadeOut: j, spotlight: E !== "card" }, g.useEffect(() => {
    const a = k.current;
    if (!a) return;
    const x = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, e = { x: 0, y: 0, tx: 0, ty: 0, power: 0, target: 0, primed: !1 };
    let o = 0, n = 0;
    const d = () => {
      const s = a.getBoundingClientRect();
      a.querySelectorAll("[data-chroma-area]").forEach((r) => {
        const f = r.getBoundingClientRect();
        r.style.setProperty("--chroma-ox", `${f.left - s.left}px`), r.style.setProperty("--chroma-oy", `${f.top - s.top}px`);
      });
    };
    M.current = d;
    const F = (s) => {
      o = 0;
      const r = v.current;
      if (!r) return;
      const f = n ? Math.min(0.05, (s - n) / 1e3) : 1 / 60;
      n = s;
      const S = x ? 1 : 1 - Math.exp(-f / Math.max(0.01, r.damping * 0.32));
      e.x += (e.tx - e.x) * S, e.y += (e.ty - e.y) * S;
      const W = e.target > e.power ? 0.1 : Math.max(0.02, r.fadeOut * 0.35);
      e.power += (e.target - e.power) * (x ? 1 : 1 - Math.exp(-f / W)), a.style.setProperty("--chroma-x", `${e.x.toFixed(2)}px`), a.style.setProperty("--chroma-y", `${e.y.toFixed(2)}px`), a.style.setProperty("--chroma-power", e.power.toFixed(4)), Math.abs(e.tx - e.x) < 0.1 && Math.abs(e.ty - e.y) < 0.1 && Math.abs(e.target - e.power) < 2e-3 ? (e.power = e.target, a.style.setProperty("--chroma-power", e.power.toFixed(4)), n = 0) : o = requestAnimationFrame(F);
    }, L = () => {
      o || (o = requestAnimationFrame(F));
    }, b = (s) => {
      if (!v.current?.spotlight) return;
      const r = a.getBoundingClientRect();
      e.tx = s.clientX - r.left, e.ty = s.clientY - r.top, (!e.primed || e.power < 0.02) && (e.x = e.tx, e.y = e.ty, e.primed = !0), e.target = 1, L();
    }, y = () => {
      e.target = 0, L();
    }, R = new ResizeObserver(d);
    return R.observe(a), a.addEventListener("pointermove", b), a.addEventListener("pointerdown", b), a.addEventListener("pointerleave", y), a.addEventListener("pointercancel", y), d(), () => {
      cancelAnimationFrame(o), R.disconnect(), a.removeEventListener("pointermove", b), a.removeEventListener("pointerdown", b), a.removeEventListener("pointerleave", y), a.removeEventListener("pointercancel", y), M.current = null;
    };
  }, []), g.useLayoutEffect(() => {
    M.current?.();
  });
  const O = {
    ...q[G] ?? q.dark,
    "--chroma-cols": Math.max(1, Math.round(m)),
    "--chroma-min": `${Math.max(80, l)}px`,
    "--chroma-gap": `${Math.max(0, p)}px`,
    "--chroma-r": `${Math.max(20, u)}px`,
    "--chroma-stops": I(i(c, 0, 1)),
    "--chroma-gray": i(C, 0, 1),
    "--chroma-dim": i(P, 0, 0.9),
    "--chroma-glow": i(A, 0, 1),
    "--chroma-border": i(B, 0, 1),
    "--chroma-fade": `${Math.max(0, j)}s`,
    "--chroma-ratio": z,
    "--chroma-radius": `${Math.max(0, T)}px`
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: k,
      className: `chroma-grid${$ ? " has-frame" : ""}${N ? ` ${N}` : ""}`,
      "data-reveal": E === "card" ? "card" : "spotlight",
      style: O,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "chroma-grid-inner", children: H.map((a, x) => {
          const e = a.accent ?? a.borderColor ?? "#ffffff", o = `${a.title}-${x}`, n = { "--chroma-accent": e }, d = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx("span", { className: "chroma-wash", "aria-hidden": "true" }),
            /* @__PURE__ */ t.jsxs("div", { className: "chroma-media", "data-chroma-area": "", children: [
              /* @__PURE__ */ t.jsx("img", { className: "chroma-mono", src: a.image, alt: a.alt ?? a.title ?? "", loading: "lazy" }),
              /* @__PURE__ */ t.jsx("img", { className: "chroma-color", src: a.image, alt: "", "aria-hidden": "true", loading: "lazy" }),
              /* @__PURE__ */ t.jsx("span", { className: "chroma-media-rim", "aria-hidden": "true" })
            ] }),
            D && (a.title || a.subtitle) && /* @__PURE__ */ t.jsxs("div", { className: "chroma-info", children: [
              a.title && /* @__PURE__ */ t.jsx("span", { className: "chroma-title", children: a.title }),
              a.subtitle && /* @__PURE__ */ t.jsx("span", { className: "chroma-subtitle", children: a.subtitle })
            ] }),
            /* @__PURE__ */ t.jsx("span", { className: "chroma-card-rim", "aria-hidden": "true" }),
            /* @__PURE__ */ t.jsx("span", { className: "chroma-card-glow", "aria-hidden": "true" })
          ] });
          return a.url ? /* @__PURE__ */ t.jsx(
            "a",
            {
              className: "chroma-card",
              "data-chroma-area": "",
              style: n,
              href: a.url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: d
            },
            o
          ) : /* @__PURE__ */ t.jsx("article", { className: "chroma-card", "data-chroma-area": "", style: n, children: d }, o);
        }) }),
        $ && /* @__PURE__ */ t.jsx("span", { className: "chroma-frame-rim", "aria-hidden": "true" })
      ]
    }
  );
};
export {
  Y as ChromaGrid,
  Y as default
};
