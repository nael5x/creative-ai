import { r as _, j as e } from "./components-entry-C10ZmzsQ.js";
const _t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, ce = _.forwardRef(({ color: s = "currentColor", size: i = 24, strokeWidth: l, absoluteStrokeWidth: w = !1, className: C = "", altIcon: k, showAlt: L = !1, icon: M, primaryColor: v, secondaryColor: f, disableSecondaryOpacity: W = !1, ...S }, H) => {
  const z = l !== void 0 ? w ? Number(l) * 24 / Number(i) : l : void 0, a = z !== void 0 ? {
    strokeWidth: z,
    stroke: "currentColor"
  } : {}, h = {
    ref: H,
    ..._t,
    width: i,
    height: i,
    color: v || s,
    className: C,
    ...a,
    ...S
  }, V = [...L && k ? k : M].sort(([, N], [, E]) => {
    const P = N.opacity !== void 0;
    return E.opacity !== void 0 ? 1 : P ? -1 : 0;
  }).map(([N, E]) => {
    const P = E.opacity !== void 0, I = P && !W ? E.opacity : void 0, $ = f ? {
      ...E.stroke !== void 0 ? {
        stroke: P ? f : v || s
      } : {
        fill: P ? f : v || s
      }
    } : {};
    return _.createElement(N, {
      ...E,
      ...a,
      ...$,
      opacity: I,
      key: E.key
    });
  });
  return _.createElement("svg", h, V);
});
ce.displayName = "HugeiconsIcon";
const wt = [["circle", { cx: "15", cy: "12", r: "3", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }], ["path", { d: "M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }], ["path", { d: "M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }], ["path", { d: "M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]], Ct = [["path", { d: "M7.42857 3.36201C11.3996 0.664089 17.136 2.12432 19.2301 6.41803M10.8571 21.9236C15.5839 22.5822 20 18.8952 20 14.2103V10.3333M7.42857 20.6058C5.35602 19.1977 4 16.8583 4 14.2103V9.75757C4 8.57285 4.27144 7.44988 4.75704 6.44444", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M16 13.8C16 16.1196 14.2091 18 12 18C9.79086 18 8 16.1196 8 13.8V10.2C8 9.55584 8.13811 8.94555 8.38493 8.4M12 6C14.2091 6 16 7.8804 16 10.2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }], ["path", { d: "M12 10.5L12 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]], Mt = [["path", { d: "M7 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13V10M19 10C19.7002 10 21.0085 11.9943 21.5 12.5M19 10C18.2998 10 16.9915 11.9943 16.5 12.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M5 7L5 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }], ["circle", { cx: "5", cy: "5", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "2" }], ["circle", { cx: "19", cy: "5", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "3" }], ["circle", { cx: "5", cy: "19", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "4" }]], vt = [["path", { d: "M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]], jt = [["path", { d: "M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M17.5 6.5L16.5 7.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]], Lt = [["path", { d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M8.42857 10L13.5196 16.3964C13.716 16.6432 13.9002 16.8767 14.2159 16.9639C14.3466 17 14.4882 17 14.7714 17C15.0515 17 15.1915 17 15.2984 16.9455C15.5894 16.7973 15.5714 16.4841 15.5714 16.2V13.4286M8.42857 10V7M8.42857 10V17M8.42857 7H9.53035C10.0067 7 10.2448 7 10.4514 7.10018C10.6581 7.20035 10.8056 7.38733 11.1006 7.76128L15.5714 13.4286M8.42857 7H7M8.42857 17H7M8.42857 17H10M15.5714 7V13.4286M15.5714 7H14M15.5714 7H17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]], Nt = [["path", { d: "M13 9.25V3.75C13 2.7835 13.7835 2 14.75 2C15.7165 2 16.5 2.7835 16.5 3.75V9.25C16.5 10.2165 15.7165 11 14.75 11C13.7835 11 13 10.2165 13 9.25Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M7.5 20.25V14.75C7.5 13.7835 8.2835 13 9.25 13C10.2165 13 11 13.7835 11 14.75V20.25C11 21.2165 10.2165 22 9.25 22C8.2835 22 7.5 21.2165 7.5 20.25Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }], ["path", { d: "M14.75 13L20.25 13C21.2165 13 22 13.7835 22 14.75C22 15.7165 21.2165 16.5 20.25 16.5L14.75 16.5C13.7835 16.5 13 15.7165 13 14.75C13 13.7835 13.7835 13 14.75 13Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }], ["path", { d: "M3.75 7.5L9.25 7.5C10.2165 7.5 11 8.2835 11 9.25C11 10.2165 10.2165 11 9.25 11L3.75 11C2.7835 11 2 10.2165 2 9.25C2 8.2835 2.7835 7.5 3.75 7.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }], ["path", { d: "M7 3.75C7 4.7165 7.7835 5.5 8.75 5.5H10.5V3.75C10.5 2.7835 9.7165 2 8.75 2C7.7835 2 7 2.7835 7 3.75Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }], ["path", { d: "M17 20.25C17 19.2835 16.2165 18.5 15.25 18.5H13.5V20.25C13.5 21.2165 14.2835 22 15.25 22C16.2165 22 17 21.2165 17 20.25Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }], ["path", { d: "M20.25 7C19.2835 7 18.5 7.7835 18.5 8.75L18.5 10.5H20.25C21.2165 10.5 22 9.7165 22 8.75C22 7.7835 21.2165 7 20.25 7Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "6" }], ["path", { d: "M3.75 17C4.7165 17 5.5 16.2165 5.5 15.25V13.5L3.75 13.5C2.7835 13.5 2 14.2835 2 15.25C2 16.2165 2.7835 17 3.75 17Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "7" }]], Et = [["path", { d: "M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }], ["path", { d: "M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]], $t = [["path", { d: "M5 14L8.5 17.5L19 6.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]], Se = typeof window > "u" ? _.useEffect : _.useLayoutEffect, Rt = {
  dark: {
    "--mb-surface": "linear-gradient(180deg, #1a1820 0%, #121116 100%)",
    "--mb-edge": "rgba(255, 255, 255, 0.07)",
    "--mb-highlight": "rgba(255, 255, 255, 0.06)",
    "--mb-shadow": "0 24px 48px -28px rgba(0, 0, 0, 0.85), 0 8px 18px -12px rgba(0, 0, 0, 0.6)",
    "--mb-tile": "linear-gradient(180deg, #3a3644 0%, #27242f 100%)",
    "--mb-tile-edge": "rgba(255, 255, 255, 0.07)",
    "--mb-tile-highlight": "rgba(255, 255, 255, 0.12)",
    "--mb-tile-shadow": "0 4px 10px -4px rgba(0, 0, 0, 0.7)",
    "--mb-well": "rgba(255, 255, 255, 0.03)",
    "--mb-well-edge": "rgba(255, 255, 255, 0.06)",
    "--mb-ink": "#f4f4f5",
    "--mb-muted": "rgba(244, 244, 245, 0.6)",
    "--mb-faint": "rgba(244, 244, 245, 0.3)",
    "--mb-line": "rgba(244, 244, 245, 0.1)",
    "--mb-secondary": "#a1a1aa",
    "--mb-secondary-ink": "#121016",
    "--mb-cursor-stroke": "rgba(18, 16, 22, 0.9)",
    "--mb-ring": "rgba(18, 16, 22, 0.85)",
    "--mb-focus": "rgba(244, 244, 245, 0.5)",
    "--mb-glow-alpha": 0.85,
    "--mb-spot-alpha": 0.07
  },
  light: {
    "--mb-surface": "linear-gradient(180deg, #ffffff 0%, #f7f7f9 100%)",
    "--mb-edge": "rgba(24, 24, 27, 0.08)",
    "--mb-highlight": "rgba(255, 255, 255, 1)",
    "--mb-shadow": "0 24px 48px -30px rgba(24, 24, 27, 0.28), 0 8px 18px -14px rgba(24, 24, 27, 0.16)",
    "--mb-tile": "linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)",
    "--mb-tile-edge": "rgba(24, 24, 27, 0.08)",
    "--mb-tile-highlight": "rgba(255, 255, 255, 1)",
    "--mb-tile-shadow": "0 4px 10px -5px rgba(24, 24, 27, 0.22)",
    "--mb-well": "rgba(24, 24, 27, 0.025)",
    "--mb-well-edge": "rgba(24, 24, 27, 0.06)",
    "--mb-ink": "#18181b",
    "--mb-muted": "rgba(24, 24, 27, 0.6)",
    "--mb-faint": "rgba(24, 24, 27, 0.3)",
    "--mb-line": "rgba(24, 24, 27, 0.08)",
    "--mb-secondary": "#71717a",
    "--mb-secondary-ink": "#ffffff",
    "--mb-cursor-stroke": "#ffffff",
    "--mb-ring": "#ffffff",
    "--mb-focus": "rgba(24, 24, 27, 0.4)",
    "--mb-glow-alpha": 0.5,
    "--mb-spot-alpha": 0.035
  }
}, rt = { dark: [244, 244, 245], light: [24, 24, 27] }, Ft = 150, Wt = 200, at = 80, it = 6, ct = 6, St = [
  { title: "Analytics", description: "Track user behavior", visual: "analytics" },
  { title: "Dashboard", description: "Centralized data view", visual: "dashboard" },
  {
    title: "Collaboration",
    description: "Work together seamlessly",
    visual: "collaboration",
    colSpan: 2,
    rowSpan: 2
  },
  { title: "Automation", description: "Streamline workflows", visual: "automation", colSpan: 2, rowSpan: 2 },
  { title: "Integration", description: "Connect favorite tools", visual: "integration" },
  { title: "Security", description: "Enterprise-grade protection", visual: "security" }
], te = (s, i, l) => Math.min(l, Math.max(i, s)), F = (s) => s, lt = (s) => {
  if (!s) return null;
  const i = String(s).trim(), l = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (l) {
    const C = l[1].length === 3 ? l[1].replace(/./g, (k) => k + k) : l[1];
    return [0, 2, 4].map((k) => parseInt(C.slice(k, k + 2), 16));
  }
  const w = i.match(/[\d.]+/g);
  return w && w.length >= 3 && /^(rgba?\(|[\d.\s,]+$)/i.test(i) ? w.slice(0, 3).map((C) => te(Math.round(parseFloat(C)), 0, 255)) : null;
}, Vt = (s) => {
  const [i, l, w] = s.map((C) => C / 255);
  return 0.2126 * i + 0.7152 * l + 0.0722 * w > 0.55 ? "#121016" : "#ffffff";
}, G = [3.1, 3.8, 3.5, 4.9, 4.4, 5.8, 5.3, 6.9, 6.5, 8.2, 9.4, 12.4], Tt = (s, i, l) => {
  const k = Math.min(...s) * 0.7, L = Math.max(...s), M = s.map((a, h) => [
    h / (s.length - 1) * i,
    6 + (1 - (a - k) / (L - k)) * (l - 6 - 2)
  ]), v = M.length, f = [];
  for (let a = 0; a < v - 1; a++)
    f.push((M[a + 1][1] - M[a][1]) / (M[a + 1][0] - M[a][0]));
  const W = M.map((a, h) => h === 0 ? f[0] : h === v - 1 ? f[v - 2] : f[h - 1] * f[h] > 0 ? (f[h - 1] + f[h]) / 2 : 0);
  for (let a = 0; a < v - 1; a++) {
    if (f[a] === 0) {
      W[a] = 0, W[a + 1] = 0;
      continue;
    }
    const h = W[a] / f[a], Z = W[a + 1] / f[a], V = h * h + Z * Z;
    if (V > 9) {
      const N = 3 / Math.sqrt(V);
      W[a] = N * h * f[a], W[a + 1] = N * Z * f[a];
    }
  }
  let S = `M${M[0][0].toFixed(2)},${M[0][1].toFixed(2)}`;
  const H = [];
  for (let a = 0; a < v - 1; a++) {
    const [h, Z] = M[a], [V, N] = M[a + 1], E = (V - h) / 3, P = [h + E, Z + W[a] * E], I = [V - E, N - W[a + 1] * E];
    S += ` C${P[0].toFixed(2)},${P[1].toFixed(2)} ${I[0].toFixed(2)},${I[1].toFixed(2)} ${V.toFixed(2)},${N.toFixed(2)}`;
    for (let $ = 0; $ < 12; $++) {
      const b = $ / 12, y = 1 - b;
      H.push([
        y * y * y * h + 3 * y * y * b * P[0] + 3 * y * b * b * I[0] + b * b * b * V,
        y * y * y * Z + 3 * y * y * b * P[1] + 3 * y * b * b * I[1] + b * b * b * N
      ]);
    }
  }
  H.push(M[v - 1]);
  const z = `${S} L${i.toFixed(2)},${l.toFixed(2)} L0,${l.toFixed(2)} Z`;
  return { line: S, area: z, samples: H };
}, At = (s, i) => {
  let l = 1;
  for (; l < s.length - 1 && s[l][0] < i; ) l++;
  const [w, C] = s[l - 1], [k, L] = s[l], M = k === w ? 0 : te((i - w) / (k - w), 0, 1);
  return C + (L - C) * M;
}, Pt = () => {
  const s = _.useRef(null), i = _.useRef(null), l = _.useRef(null), w = _.useRef(null), C = _.useRef(null), k = _.useRef(null), [L, M] = _.useState(null);
  Se(() => {
    const S = i.current;
    if (!S) return;
    const H = () => {
      const a = { width: S.clientWidth, height: S.clientHeight };
      M(
        (h) => h && h.width === a.width && h.height === a.height ? h : a
      );
    };
    H();
    const z = new ResizeObserver(H);
    return z.observe(S), () => z.disconnect();
  }, []);
  const v = _.useMemo(
    () => L && L.width > 4 && L.height > 4 ? Tt(G, L.width, L.height) : null,
    [L]
  ), f = (S) => {
    const H = i.current, z = s.current, a = l.current, h = w.current, Z = C.current, V = k.current;
    if (!v || !H || !z || !a || !h || !Z || !V) return;
    const N = H.getBoundingClientRect(), E = te(S.clientX - N.left, 0, N.width), P = At(v.samples, E), I = E / Math.max(1, N.width) * (G.length - 1), $ = Math.floor(I), b = Math.min(G.length - 1, $ + 1), y = G[$] + (G[b] - G[$]) * (I - $);
    z.dataset.scrub = "", a.style.transform = `translateX(${E.toFixed(1)}px)`, h.style.transform = `translateY(${P.toFixed(1)}px)`, Z.textContent = `${y.toFixed(1)}k`, V.textContent = `Oct ${Math.round(I) + 1}`;
  }, W = () => {
    s.current && delete s.current.dataset.scrub, C.current && (C.current.textContent = `${G[G.length - 1].toFixed(1)}k`), k.current && (k.current.textContent = "+18%");
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: s,
      className: "magic-bento__chart",
      onPointerMove: f,
      onPointerDown: f,
      onPointerLeave: W,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__figure", children: [
          /* @__PURE__ */ e.jsxs("span", { ref: C, className: "magic-bento__figure-value", children: [
            G[G.length - 1].toFixed(1),
            "k"
          ] }),
          /* @__PURE__ */ e.jsx("span", { ref: k, className: "magic-bento__figure-note", children: "+18%" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { ref: i, className: "magic-bento__plot", children: [
          v && L && /* @__PURE__ */ e.jsxs("svg", { viewBox: `0 0 ${L.width} ${L.height}`, "aria-hidden": "true", children: [
            /* @__PURE__ */ e.jsx("path", { className: "magic-bento__chart-area", d: v.area }),
            /* @__PURE__ */ e.jsx("path", { className: "magic-bento__chart-line", d: v.line, pathLength: "1" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { ref: l, className: "magic-bento__scrub", children: /* @__PURE__ */ e.jsx("span", { ref: w, className: "magic-bento__scrub-dot" }) })
        ] })
      ]
    }
  );
}, dt = [42, 58, 49, 71, 63, 88, 76], It = () => /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__bars", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__figure", children: [
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__figure-value", children: "$48.2k" }),
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__figure-note", children: "Weekly" })
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "magic-bento__bars-plot", children: dt.map((s, i) => /* @__PURE__ */ e.jsx(
    "span",
    {
      className: "magic-bento__bar",
      "data-peak": s === Math.max(...dt) ? "" : void 0,
      style: F({ "--h": s / 100, "--i": i })
    },
    i
  )) })
] }), mt = /* @__PURE__ */ e.jsx("svg", { width: "16", height: "18", viewBox: "0 0 16 18", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx(
  "path",
  {
    d: "M2.2 1.6 13.4 9.9c.5.4.3 1.2-.4 1.3l-4.6.6-2.2 4.2c-.3.6-1.2.5-1.4-.1L1.2 2.4c-.2-.6.5-1.1 1-.8Z",
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  }
) }), Ht = () => /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__collab magic-bento__well", children: [
  /* @__PURE__ */ e.jsx("span", { className: "magic-bento__doc-title", children: "Launch plan" }),
  /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__lines", children: [
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__line", style: F({ "--w": "92%" }) }),
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__line", style: F({ "--w": "78%" }) }),
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__line", style: F({ "--w": "86%" }) }),
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__line", style: F({ "--w": "44%" }) }),
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__line magic-bento__line--gap", style: F({ "--w": "88%" }) }),
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__line", style: F({ "--w": "70%" }), children: /* @__PURE__ */ e.jsx("span", { className: "magic-bento__selection", style: F({ "--from": "18%", "--span": "58%" }), children: /* @__PURE__ */ e.jsx("span", { className: "magic-bento__caret" }) }) }),
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__line", style: F({ "--w": "82%" }) })
  ] }),
  /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: "magic-bento__cursor magic-bento__cursor--primary",
      style: F({ "--x": "58%", "--y": "52%", "--i": 0, "--path": "magic-bento-path-a" }),
      children: [
        mt,
        /* @__PURE__ */ e.jsx("span", { className: "magic-bento__cursor-name", children: "Maya" })
      ]
    }
  ),
  /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: "magic-bento__cursor magic-bento__cursor--secondary",
      style: F({ "--x": "30%", "--y": "24%", "--i": 1, "--path": "magic-bento-path-b" }),
      children: [
        mt,
        /* @__PURE__ */ e.jsx("span", { className: "magic-bento__cursor-name", children: "Leo" })
      ]
    }
  )
] }), ht = [
  { label: "Install", time: "8s" },
  { label: "Build", time: "12s" },
  { label: "Test", time: "48s" },
  { label: "Deploy", time: "9s" }
], Zt = () => /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__flow", style: F({ "--n": ht.length }), children: [
  /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__flow-trigger magic-bento__tile", children: [
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__flow-glyph", children: /* @__PURE__ */ e.jsx(ce, { icon: Mt, size: 15, strokeWidth: 1.8 }) }),
    /* @__PURE__ */ e.jsxs("span", { className: "magic-bento__flow-copy", children: [
      /* @__PURE__ */ e.jsx("span", { className: "magic-bento__flow-name", children: "Push to main" }),
      /* @__PURE__ */ e.jsx("span", { className: "magic-bento__flow-meta magic-bento__flow-hash", children: "a1c9f3e" })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("ol", { className: "magic-bento__steps magic-bento__well", children: [
    /* @__PURE__ */ e.jsx("span", { className: "magic-bento__rail", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("span", { className: "magic-bento__rail-fill" }) }),
    ht.map((s, i) => /* @__PURE__ */ e.jsxs("li", { className: "magic-bento__step", style: F({ "--i": i }), children: [
      /* @__PURE__ */ e.jsxs("span", { className: "magic-bento__status", children: [
        /* @__PURE__ */ e.jsx("span", { className: "magic-bento__pending" }),
        /* @__PURE__ */ e.jsx("span", { className: "magic-bento__spinner" }),
        /* @__PURE__ */ e.jsx("span", { className: "magic-bento__done", children: /* @__PURE__ */ e.jsx(ce, { icon: $t, size: 11, strokeWidth: 2.6 }) })
      ] }),
      s.label,
      /* @__PURE__ */ e.jsx("span", { className: "magic-bento__step-time", children: s.time })
    ] }, s.label))
  ] })
] }), We = [
  { icon: Nt, x: "17%", y: "24%" },
  { icon: vt, x: "83%", y: "24%" },
  { icon: wt, x: "17%", y: "78%" },
  { icon: Lt, x: "83%", y: "78%" }
], Ot = () => /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__hub", children: [
  /* @__PURE__ */ e.jsx("svg", { className: "magic-bento__hub-links", viewBox: "0 0 100 100", preserveAspectRatio: "none", "aria-hidden": "true", children: We.map((s) => /* @__PURE__ */ e.jsx("line", { x1: parseFloat(s.x), y1: parseFloat(s.y), x2: "50", y2: "51", pathLength: "1" }, s.x + s.y)) }),
  We.map((s, i) => /* @__PURE__ */ e.jsx(
    "span",
    {
      className: "magic-bento__packet",
      style: F({ "--x": s.x, "--y": s.y, "--i": i })
    },
    `packet-${i}`
  )),
  We.map((s, i) => /* @__PURE__ */ e.jsx(
    "span",
    {
      className: "magic-bento__hub-node magic-bento__tile",
      style: F({ "--x": s.x, "--y": s.y, "--s": "26px", "--i": i + 1 }),
      children: /* @__PURE__ */ e.jsx(ce, { icon: s.icon, size: 14, strokeWidth: 1.8 })
    },
    s.x + s.y
  )),
  /* @__PURE__ */ e.jsx(
    "span",
    {
      className: "magic-bento__hub-node magic-bento__tile",
      style: F({ "--x": "50%", "--y": "51%", "--s": "34px", "--i": 0 }),
      children: /* @__PURE__ */ e.jsx(ce, { icon: Et, size: 17, strokeWidth: 1.8 })
    }
  )
] }), zt = [
  { icon: jt, label: "SSO" },
  { icon: Ct, label: "2FA" }
], Bt = () => /* @__PURE__ */ e.jsx("div", { className: "magic-bento__shield", children: zt.map((s, i) => /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__setting magic-bento__tile", children: [
  /* @__PURE__ */ e.jsx(ce, { icon: s.icon, size: 14, strokeWidth: 1.8 }),
  /* @__PURE__ */ e.jsx("span", { className: "magic-bento__setting-label", children: s.label }),
  /* @__PURE__ */ e.jsx("span", { className: "magic-bento__switch", style: F({ "--i": i }) })
] }, s.label)) }), Dt = {
  analytics: Pt,
  dashboard: It,
  collaboration: Ht,
  automation: Zt,
  integration: Ot,
  security: Bt
}, ut = /* @__PURE__ */ new Set([
  "magic-bento-draw",
  "magic-bento-fade",
  "magic-bento-grow",
  "magic-bento-pop",
  "magic-bento-select",
  "magic-bento-wait",
  "magic-bento-run",
  "magic-bento-check",
  "magic-bento-rail",
  "magic-bento-switch-track",
  "magic-bento-switch-knob"
]), Xt = /* @__PURE__ */ new Set([
  "magic-bento-wait",
  "magic-bento-run",
  "magic-bento-check",
  "magic-bento-rail",
  "magic-bento-fade"
]), pt = (s) => {
  const i = s.effect?.getTiming?.();
  return i ? i.iterations !== 1 / 0 : !1;
}, gt = (s) => s.animationName || "", qt = ({
  items: s = St,
  columns: i = 4,
  rowHeight: l = 200,
  gap: w = 12,
  radius: C = 20,
  theme: k = "dark",
  glowColor: L,
  textAutoHide: M = !0,
  enableBorderGlow: v = !0,
  enableSpotlight: f = !0,
  spotlightRadius: W = 300,
  enableStars: S = !1,
  particleCount: H = 24,
  enableTilt: z = !1,
  enableMagnetism: a = !1,
  clickEffect: h = !0,
  intro: Z = !0,
  disableAnimations: V = !1,
  onItemClick: N,
  className: E = "",
  style: P
}) => {
  const I = _.useRef(null), $ = _.useRef([]), b = _.useRef([]), y = _.useRef([]), ke = _.useRef(null), [Ve, ft] = _.useState(Math.max(1, Math.round(i))), ye = k === "light" ? "light" : "dark", Te = lt(L) ?? rt[ye], Ae = {
    items: s,
    columns: Math.max(1, Math.round(i)),
    gap: Math.max(0, w),
    enableBorderGlow: v,
    enableSpotlight: f,
    spotlightRadius: Math.max(40, W),
    enableStars: S,
    particleCount: te(Math.round(H), 0, 120),
    enableTilt: z,
    enableMagnetism: a,
    clickEffect: h,
    intro: Z,
    disableAnimations: V,
    onItemClick: N,
    glow: Te
  }, U = _.useRef(Ae);
  U.current = Ae, Se(() => {
    const R = I.current;
    if (!R) return;
    const ne = window.matchMedia("(prefers-reduced-motion: reduce)").matches, r = !U.current.disableAnimations && !ne, se = r && U.current.intro;
    r ? R.dataset.motion = "" : delete R.dataset.motion, se ? R.dataset.intro = "" : delete R.dataset.intro;
    const d = { x: -1e5, y: -1e5, inside: !1, down: -1 }, p = { x: -1e5, y: -1e5, near: 0, ready: !1 }, le = [], T = { x: 0, y: 0, t: -1, duration: 1.1, reach: 800 };
    let ae = [], u = null, J = !0, de = 0, Ce = 0, ge = !0, Me = !se, Ie = 0, He = 0;
    const ve = [], Ze = (t) => (le[t] || (le[t] = {
      hot: 0,
      rx: 0,
      ry: 0,
      tx: 0,
      ty: 0,
      vrx: 0,
      vry: 0,
      vtx: 0,
      vty: 0,
      press: 1,
      vpress: 0,
      stars: 0,
      particles: null,
      active: !1,
      written: {}
    }), le[t]), O = (t, n, c, m) => {
      n.written[c] !== m && (n.written[c] = m, t.style.setProperty(c, m));
    }, je = () => {
      J = !1, u = R.getBoundingClientRect(), ae = $.current.map((n) => n ? n.getBoundingClientRect() : null);
      const t = Math.min(window.devicePixelRatio || 1, 2);
      y.current.forEach((n, c) => {
        const m = ae[c];
        if (!n || !m) return;
        const j = Math.max(1, Math.round(m.width * t)), X = Math.max(1, Math.round(m.height * t));
        (n.width !== j || n.height !== X) && (n.width = j, n.height = X);
      });
    }, xt = (t, n) => {
      const c = U.current.particleCount, m = Ze(t);
      return m.particles && m.particles.length === c || (m.particles = Array.from({ length: c }, () => ({
        x: Math.random() * n.width,
        y: Math.random() * n.height,
        vx: (Math.random() - 0.5) * 6,
        vy: -4 - Math.random() * 10,
        size: 0.6 + Math.random() * 1.1,
        phase: Math.random() * Math.PI * 2,
        rate: 1.2 + Math.random() * 2.4
      }))), m.particles;
    }, Oe = (t, n, c, m, j, X, oe) => {
      const Q = y.current[t];
      if (!Q) return;
      const Y = Q.getContext("2d");
      if (!Y) return;
      const me = Q.width / Math.max(1, n.width);
      if (Y.setTransform(1, 0, 0, 1, 0, 0), Y.clearRect(0, 0, Q.width, Q.height), c.stars < 4e-3) return;
      const ie = U.current, g = xt(t, n), q = ie.spotlightRadius * 0.75, [A, o, he] = ie.glow;
      Y.setTransform(me, 0, 0, me, 0, 0);
      for (const x of g) {
        x.x += x.vx * X, x.y += x.vy * X, x.y < -4 && (x.y = n.height + 4, x.x = Math.random() * n.width), x.x < -4 && (x.x = n.width + 4), x.x > n.width + 4 && (x.x = -4);
        const ee = Math.hypot(x.x - m, x.y - j) / q;
        if (ee >= 1) continue;
        const ue = 1 - ee * ee * (3 - 2 * ee), K = 0.55 + 0.45 * Math.sin(oe * 1e-3 * x.rate + x.phase), re = c.stars * ue * K;
        re < 0.01 || (Y.fillStyle = `rgba(${A}, ${o}, ${he}, ${re.toFixed(3)})`, Y.beginPath(), Y.arc(x.x, x.y, x.size, 0, Math.PI * 2), Y.fill());
      }
    }, ze = (t, n) => {
      if (!(!r || !t.getAnimations))
        for (const c of t.getAnimations({ subtree: !0 })) {
          if (!n.has(gt(c)) || !pt(c)) continue;
          const m = c.effect instanceof KeyframeEffect ? c.effect.target : null;
          m instanceof Element && m.classList.contains("magic-bento__cursor") || (c.currentTime = 0, c.play());
        }
    }, Be = (t, n, c) => {
      !r || !u || (T.x = t, T.y = n, T.t = 0, T.duration = c, T.reach = Math.max(
        Math.hypot(t - u.left, n - u.top),
        Math.hypot(t - u.right, n - u.top),
        Math.hypot(t - u.left, n - u.bottom),
        Math.hypot(t - u.right, n - u.bottom)
      ) + 140);
    }, De = (t) => {
      de = 0;
      const n = Math.min(0.05, (t - Ce) / 1e3 || 0);
      Ce = t, J && je();
      const c = U.current, m = b.current;
      let j = !1;
      const X = c.spotlightRadius * 0.5, oe = d.inside && u && d.x > u.left - X && d.x < u.right + X && d.y > u.top - X && d.y < u.bottom + X ? 1 : 0;
      !p.ready && oe && (p.x = d.x, p.y = d.y, p.ready = !0);
      const Q = 1 - Math.exp(-n / 0.05);
      p.x += (d.x - p.x) * Q, p.y += (d.y - p.y) * Q;
      const Y = 1 - Math.exp(-n / (oe > p.near ? 0.12 : 0.4));
      p.near += (oe - p.near) * Y, Math.abs(oe - p.near) < 2e-3 ? p.near = oe : j = !0, Math.abs(d.x - p.x) + Math.abs(d.y - p.y) > 0.3 && (j = !0);
      let me = 0, ie = 0;
      if (T.t >= 0) {
        T.t += n;
        const g = Math.min(1, T.t / T.duration);
        me = T.reach * (1 - Math.pow(1 - g, 2.2)), ie = Math.pow(1 - g, 1.3), g >= 1 ? (T.t = -1, ie = 0) : j = !0;
      }
      m.forEach((g, q) => {
        const A = ae[q];
        if (!g || !A) return;
        const o = Ze(q), he = p.x - A.left, x = p.y - A.top, ee = d.x - A.left, ue = d.y - A.top, K = d.inside && Me && ee >= 0 && ue >= 0 && ee <= A.width && ue <= A.height;
        K !== o.active && (o.active = K, K ? (g.dataset.active = "", t - (ve[q] || -1e9) > 3200 && g.querySelector(".magic-bento__steps") && (ve[q] = t, ze(g, Xt))) : delete g.dataset.active);
        const re = K && c.enableSpotlight ? 1 : 0;
        o.hot += (re - o.hot) * (1 - Math.exp(-n / (re > o.hot ? 0.14 : 0.32))), Math.abs(re - o.hot) < 2e-3 ? o.hot = re : j = !0;
        const et = te(ee / Math.max(1, A.width), 0, 1) - 0.5, tt = te(ue / Math.max(1, A.height), 0, 1) - 0.5, nt = K && c.enableTilt && r, st = K && c.enableMagnetism && r, Ee = [
          nt ? -tt * 2 * it : 0,
          nt ? et * 2 * it : 0,
          st ? et * 2 * ct : 0,
          st ? tt * 2 * ct : 0
        ], yt = [
          ["rx", "vrx"],
          ["ry", "vry"],
          ["tx", "vtx"],
          ["ty", "vty"]
        ], $e = Math.max(1, Math.ceil(n / (1 / 240))), xe = n / $e;
        yt.forEach(([B, pe], Fe) => {
          for (let ot = 0; ot < $e; ot++)
            o[pe] += (170 * (Ee[Fe] - o[B]) - 20 * o[pe]) * xe, o[B] += o[pe] * xe;
          Math.abs(Ee[Fe] - o[B]) < 2e-3 && Math.abs(o[pe]) < 0.01 ? (o[B] = Ee[Fe], o[pe] = 0) : j = !0;
        });
        const Re = d.down === q && c.clickEffect && r ? 0.985 : 1;
        for (let B = 0; B < $e; B++)
          o.vpress += (420 * (Re - o.press) - 28 * o.vpress) * xe, o.press += o.vpress * xe;
        if (Math.abs(Re - o.press) < 2e-4 && Math.abs(o.vpress) < 1e-3 ? (o.press = Re, o.vpress = 0) : j = !0, O(g, o, "--mb-x", `${he.toFixed(1)}px`), O(g, o, "--mb-y", `${x.toFixed(1)}px`), O(g, o, "--mb-near", (c.enableBorderGlow ? p.near : 0).toFixed(3)), O(g, o, "--mb-hot", o.hot.toFixed(3)), O(g, o, "--mb-rx", `${o.rx.toFixed(3)}deg`), O(g, o, "--mb-ry", `${o.ry.toFixed(3)}deg`), O(g, o, "--mb-tx", `${o.tx.toFixed(2)}px`), O(g, o, "--mb-ty", `${o.ty.toFixed(2)}px`), O(g, o, "--mb-press", o.press.toFixed(4)), O(g, o, "--mb-wx", `${(T.x - A.left).toFixed(1)}px`), O(g, o, "--mb-wy", `${(T.y - A.top).toFixed(1)}px`), O(g, o, "--mb-wr", `${me.toFixed(1)}px`), O(g, o, "--mb-wa", ie.toFixed(3)), c.enableStars && y.current[q]) {
          const B = K && r ? 1 : 0;
          o.stars += (B - o.stars) * (1 - Math.exp(-n / (B ? 0.3 : 0.5))), o.stars < 4e-3 && !B && (o.stars = 0), o.stars > 0 || B ? (Oe(q, A, o, he, x, n, t), o.drawn = !0, j = !0) : o.drawn && (Oe(q, A, o, he, x, n, t), o.drawn = !1);
        }
      }), j && ge && (de = requestAnimationFrame(De));
    }, D = () => {
      de || !ge || (Ce = performance.now(), de = requestAnimationFrame(De));
    }, Le = (t) => {
      if (!(t instanceof Element)) return -1;
      const n = t.closest(".magic-bento__card");
      return n instanceof HTMLElement ? b.current.indexOf(n) : -1;
    }, Xe = (t) => {
      d.x = t.clientX, d.y = t.clientY, d.inside = !0, D();
    }, Ye = (t) => {
      t.relatedTarget || (d.inside = !1, d.down = -1, D());
    }, qe = (t) => {
      d.x = t.clientX, d.y = t.clientY, d.inside = !0, d.down = Le(t.target), D();
    }, fe = () => {
      d.down < 0 || (d.down = -1, D());
    }, Ge = (t, n, c) => {
      const m = U.current, j = b.current[t];
      j && (m.clickEffect && (J && je(), Be(n, c, 1.1), ze(j, ut), ve[t] = performance.now()), D());
    }, Ke = (t) => {
      const n = Le(t.target), c = b.current[n];
      if (c)
        if (t.detail === 0) {
          const m = c.getBoundingClientRect();
          Ge(n, m.left + m.width / 2, m.top + m.height / 2);
        } else Ge(n, t.clientX, t.clientY);
    }, Ue = (t) => {
      if (t.key !== "Enter" && t.key !== " ") return;
      const n = b.current[Le(t.target)];
      !n || t.target !== n || n.tagName === "A" || (t.preventDefault(), n.click());
    }, be = () => {
      J = !0, D();
    }, Je = new ResizeObserver(() => {
      const t = U.current, n = R.clientWidth, c = (j) => (n - t.gap * (j - 1)) / j, m = c(t.columns) >= Ft ? t.columns : t.columns >= 2 && c(2) >= Wt ? 2 : 1;
      ft(m), J = !0, D();
    });
    Je.observe(R);
    const kt = () => {
      Me = !0;
      let t = 0;
      $.current.forEach((n) => {
        n && (n.style.setProperty("--mb-delay", `${t++ * at}ms`), n.dataset.state = "in");
      }), J && je(), He = window.setTimeout(() => {
        u && Be(u.left, u.top, 1.7), D();
      }, 260), Ie = window.setTimeout(
        () => {
          $.current.forEach((n) => n?.style.setProperty("--mb-delay", "0ms"));
        },
        t * at + 2600
      ), D();
    };
    let Ne = null;
    if (se && typeof IntersectionObserver < "u")
      Ne = new IntersectionObserver(
        (t, n) => {
          t.some((c) => c.isIntersecting) && (n.disconnect(), kt());
        },
        { threshold: 0.15 }
      ), Ne.observe(R);
    else if ($.current.forEach((t) => {
      t && (t.style.setProperty("--mb-delay", "0ms"), t.dataset.state = "in");
    }), r)
      for (const t of R.getAnimations ? R.getAnimations({ subtree: !0 }) : [])
        ut.has(gt(t)) && pt(t) && t.finish();
    const Qe = new IntersectionObserver((t) => {
      ge = t.some((n) => n.isIntersecting), ge && (J = !0, D());
    });
    return Qe.observe(R), window.addEventListener("pointermove", Xe, { passive: !0 }), window.addEventListener("pointerdown", qe, { passive: !0 }), window.addEventListener("pointerup", fe, { passive: !0 }), window.addEventListener("pointercancel", fe, { passive: !0 }), window.addEventListener("scroll", be, { passive: !0, capture: !0 }), window.addEventListener("resize", be, { passive: !0 }), document.addEventListener("pointerout", Ye), R.addEventListener("click", Ke), R.addEventListener("keydown", Ue), ke.current = {
      sync: () => {
        $.current.forEach((t) => {
          !t || !Me && se || t.dataset.state !== "in" && (t.style.setProperty("--mb-delay", "0ms"), t.dataset.state = "in");
        }), J = !0, D();
      }
    }, () => {
      cancelAnimationFrame(de), window.clearTimeout(Ie), window.clearTimeout(He), Ne?.disconnect(), Qe.disconnect(), Je.disconnect(), window.removeEventListener("pointermove", Xe), window.removeEventListener("pointerdown", qe), window.removeEventListener("pointerup", fe), window.removeEventListener("pointercancel", fe), window.removeEventListener("scroll", be, { capture: !0 }), window.removeEventListener("resize", be), document.removeEventListener("pointerout", Ye), R.removeEventListener("click", Ke), R.removeEventListener("keydown", Ue), ke.current = null;
    };
  }, []), Se(() => {
    ke.current?.sync();
  }, [s, Ve, l, w, C, S, f, v]);
  const bt = rt[ye], Pe = lt(L) ?? bt, _e = Math.max(0, C), we = Math.max(1, Ve);
  return $.current.length = s.length, b.current.length = s.length, y.current.length = s.length, /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: I,
      className: `magic-bento ${E}`.trim(),
      "data-autohide": M ? "" : void 0,
      "data-motion": V ? void 0 : "",
      "data-intro": Z && !V ? "" : void 0,
      style: {
        ...F({
          ...Rt[ye],
          "--mb-glow-rgb": Te.join(", "),
          "--mb-accent-rgb": Pe.join(", "),
          "--mb-accent-ink": Vt(Pe),
          "--mb-radius": `${_e}px`,
          "--mb-inner-radius": `${Math.round(te(_e * 0.5, 6, 12))}px`,
          "--mb-pad": `${Math.round(te(_e * 0.85, 14, 20))}px`,
          "--mb-spot-size": `${Math.max(40, W)}px`,
          "--mb-border-size": `${Math.round(Math.max(40, W) * 0.75)}px`
        }),
        gridTemplateColumns: `repeat(${we}, minmax(0, 1fr))`,
        gridAutoRows: we === 1 ? `minmax(${l}px, auto)` : `${l}px`,
        gap: `${Math.max(0, w)}px`,
        ...P
      },
      children: s.map((R, ne) => {
        const r = R ?? {}, se = typeof r.visual == "string" ? Dt[r.visual] : null, d = se ? /* @__PURE__ */ e.jsx(se, {}) : typeof r.visual == "string" ? null : r.visual, p = !!(r.href || r.onClick || N), le = (u) => {
          r.onClick?.(u), N?.(r, ne);
        }, T = {
          ref: (u) => {
            b.current[ne] = u;
          },
          className: "magic-bento__card",
          "data-clickable": p ? "" : void 0,
          "data-image": r.image ? "" : void 0,
          onClick: p ? le : void 0
        }, ae = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          r.image && /* @__PURE__ */ e.jsx("img", { className: "magic-bento__image", src: r.image, alt: "", draggable: !1 }),
          r.image && /* @__PURE__ */ e.jsx("span", { className: "magic-bento__scrim" }),
          f && /* @__PURE__ */ e.jsx("span", { className: "magic-bento__light" }),
          S && /* @__PURE__ */ e.jsx(
            "canvas",
            {
              ref: (u) => {
                y.current[ne] = u;
              },
              className: "magic-bento__stars",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "magic-bento__content", children: r.content ?? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            (r.icon || r.label) && /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__header", children: [
              r.icon && /* @__PURE__ */ e.jsx("span", { className: "magic-bento__icon", children: r.icon }),
              r.label && /* @__PURE__ */ e.jsx("span", { className: "magic-bento__label", children: r.label })
            ] }),
            d && /* @__PURE__ */ e.jsx("div", { className: "magic-bento__visual", "aria-hidden": "true", children: d }),
            (r.title || r.description) && /* @__PURE__ */ e.jsxs("div", { className: "magic-bento__text", children: [
              r.title && /* @__PURE__ */ e.jsx("h3", { className: "magic-bento__title", children: r.title }),
              r.description && /* @__PURE__ */ e.jsx("p", { className: "magic-bento__description", children: r.description })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("span", { className: "magic-bento__rim" }),
          /* @__PURE__ */ e.jsx("span", { className: "magic-bento__border" })
        ] });
        return /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (u) => {
              $.current[ne] = u;
            },
            className: "magic-bento__cell",
            style: {
              gridColumn: `span ${Math.min(we, Math.max(1, Math.round(r.colSpan ?? 1)))}`,
              gridRow: `span ${Math.max(1, Math.round(r.rowSpan ?? 1))}`
            },
            children: r.href ? /* @__PURE__ */ e.jsx("a", { ...T, href: r.href, target: r.target, rel: r.rel, children: ae }) : /* @__PURE__ */ e.jsx(
              "div",
              {
                ...T,
                role: p ? "button" : void 0,
                tabIndex: p ? 0 : void 0,
                "aria-label": p ? r.title : void 0,
                children: ae
              }
            )
          },
          r.id ?? ne
        );
      })
    }
  );
};
export {
  qt as default
};
