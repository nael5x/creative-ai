import { r as N, j as L } from "./components-entry-C10ZmzsQ.js";
function Ns(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ee(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const ct = (e, t, n) => n > t ? t : n < e ? e : n;
let ee = () => {
};
const ut = {}, wn = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Ks = (e) => typeof e == "object" && e !== null, An = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Mt = /* @__NO_SIDE_EFFECTS__ */ (e) => e, De = (...e) => e.reduce((t, n) => (s) => n(t(s))), Pe = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const s = t - e;
  return s ? (n - e) / s : 1;
};
class Rn {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ns(this.subscriptions, t), () => Ee(this.subscriptions, t);
  }
  notify(t, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, s);
      else
        for (let r = 0; r < i; r++) {
          const o = this.subscriptions[r];
          o && o(t, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const H = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Q = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Fn = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? e * (1e3 / t) : 0, $s = (e, t, n) => {
  const s = t - e;
  return ((n - e) % s + s) % s + e;
}, En = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ls = 1e-7, js = 12;
function Ws(e, t, n, s, i) {
  let r, o, a = 0;
  do
    o = t + (n - t) / 2, r = En(o, s, i) - e, r > 0 ? n = o : t = o;
  while (Math.abs(r) > Ls && ++a < js);
  return o;
}
// @__NO_SIDE_EFFECTS__
function xt(e, t, n, s) {
  if (e === t && n === s)
    return Mt;
  const i = (r) => Ws(r, 0, 1, e, n);
  return (r) => r === 0 || r === 1 ? r : En(i(r), t, s);
}
const Dn = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ie = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), Pn = /* @__PURE__ */ xt(0.33, 1.53, 0.69, 0.99), ke = /* @__PURE__ */ Ie(Pn), In = /* @__PURE__ */ Dn(ke), kn = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * ke(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Be = (e) => 1 - Math.sin(Math.acos(e)), Gs = /* @__PURE__ */ Ie(Be), Bn = /* @__PURE__ */ Dn(Be), _s = /* @__PURE__ */ xt(0.42, 0, 1, 1), Us = /* @__PURE__ */ xt(0, 0, 0.58, 1), On = /* @__PURE__ */ xt(0.42, 0, 0.58, 1), Nn = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number";
// @__NO_SIDE_EFFECTS__
function Kn(e, t) {
  return /* @__PURE__ */ Nn(e) ? e[$s(0, e.length, t)] : e;
}
const $n = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", zs = {
  linear: Mt,
  easeIn: _s,
  easeInOut: On,
  easeOut: Us,
  circIn: Be,
  circInOut: Bn,
  circOut: Gs,
  backIn: ke,
  backInOut: In,
  backOut: Pn,
  anticipate: kn
}, Ys = (e) => typeof e == "string", Ze = (e) => {
  if (/* @__PURE__ */ $n(e)) {
    ee(e.length === 4);
    const [t, n, s, i] = e;
    return /* @__PURE__ */ xt(t, n, s, i);
  } else if (Ys(e))
    return zs[e];
  return e;
}, Ut = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Xs(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = !1, i = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(u) {
    r.has(u) && (c.schedule(u), e()), u(o);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, l = !1, f = !1) => {
      const p = f && s ? t : n;
      return l && r.add(u), p.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), r.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (o = u, s) {
        i = !0;
        return;
      }
      s = !0;
      const l = t;
      t = n, n = l, t.forEach(a), t.clear(), s = !1, i && (i = !1, c.process(u));
    }
  };
  return c;
}
const qs = 40;
function Ln(e, t) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => n = !0, o = Ut.reduce((M, v) => (M[v] = Xs(r), M), {}), { setup: a, read: c, resolveKeyframes: u, preUpdate: l, update: f, preRender: h, render: p, postRender: g } = o, T = () => {
    const M = ut.useManualTiming, v = M ? i.timestamp : performance.now();
    n = !1, M || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(v - i.timestamp, qs), 1)), i.timestamp = v, i.isProcessing = !0, a.process(i), c.process(i), u.process(i), l.process(i), f.process(i), h.process(i), p.process(i), g.process(i), i.isProcessing = !1, n && t && (s = !1, e(T));
  }, y = () => {
    n = !0, s = !0, i.isProcessing || e(T);
  };
  return { schedule: Ut.reduce((M, v) => {
    const S = o[v];
    return M[v] = (E, D = !1, x = !1) => (n || y(), S.schedule(E, D, x)), M;
  }, {}), cancel: (M) => {
    for (let v = 0; v < Ut.length; v++)
      o[Ut[v]].cancel(M);
  }, state: i, steps: o };
}
const { schedule: nt, cancel: fe, state: qt } = /* @__PURE__ */ Ln(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Mt, !0);
let Xt;
function Zs() {
  Xt = void 0;
}
const q = {
  now: () => (Xt === void 0 && q.set(qt.isProcessing || ut.useManualTiming ? qt.timestamp : performance.now()), Xt),
  set: (e) => {
    Xt = e, queueMicrotask(Zs);
  }
}, jn = (e) => (t) => typeof t == "string" && t.startsWith(e), Wn = /* @__PURE__ */ jn("--"), Hs = /* @__PURE__ */ jn("var(--"), Oe = (e) => Hs(e) ? Js.test(e.split("/*")[0].trim()) : !1, Js = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function He(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const St = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, kt = {
  ...St,
  transform: (e) => ct(0, 1, e)
}, zt = {
  ...St,
  default: 1
}, Pt = (e) => Math.round(e * 1e5) / 1e5, Ne = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Qs(e) {
  return e == null;
}
const ti = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ke = (e, t) => (n) => !!(typeof n == "string" && ti.test(n) && n.startsWith(e) || t && !Qs(n) && Object.prototype.hasOwnProperty.call(n, t)), Gn = (e, t, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, r, o, a] = s.match(Ne);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, ei = (e) => ct(0, 255, e), oe = {
  ...St,
  transform: (e) => Math.round(ei(e))
}, dt = {
  test: /* @__PURE__ */ Ke("rgb", "red"),
  parse: /* @__PURE__ */ Gn("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) => "rgba(" + oe.transform(e) + ", " + oe.transform(t) + ", " + oe.transform(n) + ", " + Pt(kt.transform(s)) + ")"
};
function ni(e) {
  let t = "", n = "", s = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, s += s, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const he = {
  test: /* @__PURE__ */ Ke("#"),
  parse: ni,
  transform: dt.transform
}, Nt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), st = /* @__PURE__ */ Nt("deg"), bt = /* @__PURE__ */ Nt("%"), m = /* @__PURE__ */ Nt("px"), si = /* @__PURE__ */ Nt("vh"), ii = /* @__PURE__ */ Nt("vw"), Je = {
  ...bt,
  parse: (e) => bt.parse(e) / 100,
  transform: (e) => bt.transform(e * 100)
}, gt = {
  test: /* @__PURE__ */ Ke("hsl", "hue"),
  parse: /* @__PURE__ */ Gn("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + bt.transform(Pt(t)) + ", " + bt.transform(Pt(n)) + ", " + Pt(kt.transform(s)) + ")"
}, B = {
  test: (e) => dt.test(e) || he.test(e) || gt.test(e),
  parse: (e) => dt.test(e) ? dt.parse(e) : gt.test(e) ? gt.parse(e) : he.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? dt.transform(e) : gt.transform(e),
  getAnimatableNone: (e) => {
    const t = B.parse(e);
    return t.alpha = 0, B.transform(t);
  }
}, ri = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function oi(e) {
  return isNaN(e) && typeof e == "string" && (e.match(Ne)?.length || 0) + (e.match(ri)?.length || 0) > 0;
}
const _n = "number", Un = "color", ai = "var", li = "var(", Qe = "${}", ci = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Tt(e) {
  const t = e.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let r = 0;
  const a = t.replace(ci, (c) => (B.test(c) ? (s.color.push(r), i.push(Un), n.push(B.parse(c))) : c.startsWith(li) ? (s.var.push(r), i.push(ai), n.push(c)) : (s.number.push(r), i.push(_n), n.push(parseFloat(c))), ++r, Qe)).split(Qe);
  return { values: n, split: a, indexes: s, types: i };
}
function ui(e) {
  return Tt(e).values;
}
function zn({ split: e, types: t }) {
  const n = e.length;
  return (s) => {
    let i = "";
    for (let r = 0; r < n; r++)
      if (i += e[r], s[r] !== void 0) {
        const o = t[r];
        o === _n ? i += Pt(s[r]) : o === Un ? i += B.transform(s[r]) : i += s[r];
      }
    return i;
  };
}
function fi(e) {
  return zn(Tt(e));
}
const hi = (e) => typeof e == "number" ? 0 : B.test(e) ? B.getAnimatableNone(e) : e, di = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : hi(e);
function pi(e) {
  const t = Tt(e);
  return zn(t)(t.values.map((s, i) => di(s, t.split[i])));
}
const tt = {
  test: oi,
  parse: ui,
  createTransformer: fi,
  getAnimatableNone: pi
};
function ae(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function mi({ hue: e, saturation: t, lightness: n, alpha: s }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, r = 0, o = 0;
  if (!t)
    i = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    i = ae(c, a, e + 1 / 3), r = ae(c, a, e), o = ae(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: s
  };
}
function Zt(e, t) {
  return (n) => n > 0 ? t : e;
}
const Vt = (e, t, n) => e + (t - e) * n, le = (e, t, n) => {
  const s = e * e, i = n * (t * t - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, gi = [he, dt, gt], yi = (e) => gi.find((t) => t.test(e));
function tn(e) {
  const t = yi(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === gt && (n = mi(n)), n;
}
const en = (e, t) => {
  const n = tn(e), s = tn(t);
  if (!n || !s)
    return Zt(e, t);
  const i = { ...n };
  return (r) => (i.red = le(n.red, s.red, r), i.green = le(n.green, s.green, r), i.blue = le(n.blue, s.blue, r), i.alpha = Vt(n.alpha, s.alpha, r), dt.transform(i));
}, de = /* @__PURE__ */ new Set(["none", "hidden"]);
function bi(e, t) {
  return de.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Ti(e, t) {
  return (n) => Vt(e, t, n);
}
function $e(e) {
  return typeof e == "number" ? Ti : typeof e == "string" ? Oe(e) ? Zt : B.test(e) ? en : xi : Array.isArray(e) ? Yn : typeof e == "object" ? B.test(e) ? en : vi : Zt;
}
function Yn(e, t) {
  const n = [...e], s = n.length, i = e.map((r, o) => $e(r)(r, t[o]));
  return (r) => {
    for (let o = 0; o < s; o++)
      n[o] = i[o](r);
    return n;
  };
}
function vi(e, t) {
  const n = { ...e, ...t }, s = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (s[i] = $e(e[i])(e[i], t[i]));
  return (i) => {
    for (const r in s)
      n[r] = s[r](i);
    return n;
  };
}
function Mi(e, t) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const r = t.types[i], o = e.indexes[r][s[r]], a = e.values[o] ?? 0;
    n[i] = a, s[r]++;
  }
  return n;
}
const xi = (e, t) => {
  const n = tt.createTransformer(t), s = Tt(e), i = Tt(t);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? de.has(e) && !i.values.length || de.has(t) && !s.values.length ? bi(e, t) : De(Yn(Mi(s, i), i.values), n) : Zt(e, t);
};
function Xn(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Vt(e, t, n) : $e(e)(e, t);
}
const Si = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => nt.update(t, n),
    stop: () => fe(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => qt.isProcessing ? qt.timestamp : q.now()
  };
}, qn = (e, t, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let r = 0; r < i; r++)
    s += Math.round(e(r / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, Ht = 2e4;
function Le(e) {
  let t = 0;
  const n = 50;
  let s = e.next(t);
  for (; !s.done && t < Ht; )
    t += n, s = e.next(t);
  return t >= Ht ? 1 / 0 : t;
}
function Zn(e, t = 100, n) {
  const s = n({ ...e, keyframes: [0, t] }), i = Math.min(Le(s), Ht);
  return {
    type: "keyframes",
    ease: (r) => s.next(i * r).value / t,
    duration: /* @__PURE__ */ Q(i)
  };
}
const I = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function pe(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Vi = 12;
function wi(e, t, n) {
  let s = n;
  for (let i = 1; i < Vi; i++)
    s = s - e(s) / t(s);
  return s;
}
const ce = 1e-3;
function Ai({ duration: e = I.duration, bounce: t = I.bounce, velocity: n = I.velocity, mass: s = I.mass }) {
  let i, r, o = 1 - t;
  o = ct(I.minDamping, I.maxDamping, o), e = ct(I.minDuration, I.maxDuration, /* @__PURE__ */ Q(e)), o < 1 ? (i = (u) => {
    const l = u * o, f = l * e, h = l - n, p = pe(u, o), g = Math.exp(-f);
    return ce - h / p * g;
  }, r = (u) => {
    const f = u * o * e, h = f * n + n, p = Math.pow(o, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), T = pe(Math.pow(u, 2), o);
    return (-i(u) + ce > 0 ? -1 : 1) * ((h - p) * g) / T;
  }) : (i = (u) => {
    const l = Math.exp(-u * e), f = (u - n) * e + 1;
    return -ce + l * f;
  }, r = (u) => {
    const l = Math.exp(-u * e), f = (n - u) * (e * e);
    return l * f;
  });
  const a = 5 / e, c = wi(i, r, a);
  if (e = /* @__PURE__ */ H(e), isNaN(c))
    return {
      stiffness: I.stiffness,
      damping: I.damping,
      duration: e
    };
  {
    const u = Math.pow(c, 2) * s;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(s * u),
      duration: e
    };
  }
}
const Ci = ["duration", "bounce"], Ri = ["stiffness", "damping", "mass"];
function nn(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Fi(e) {
  let t = {
    velocity: I.velocity,
    stiffness: I.stiffness,
    damping: I.damping,
    mass: I.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!nn(e, Ri) && nn(e, Ci))
    if (t.velocity = 0, e.visualDuration) {
      const n = e.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, r = 2 * ct(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: I.mass,
        stiffness: i,
        damping: r
      };
    } else {
      const n = Ai({ ...e, velocity: 0 });
      t = {
        ...t,
        ...n,
        mass: I.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Bt(e = I.visualDuration, t = I.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: s, restDelta: i } = n;
  const r = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: r }, { stiffness: c, damping: u, mass: l, duration: f, velocity: h, isResolvedFromDuration: p } = Fi({
    ...n,
    velocity: -/* @__PURE__ */ Q(n.velocity || 0)
  }), g = h || 0, T = u / (2 * Math.sqrt(c * l)), y = o - r, d = /* @__PURE__ */ Q(Math.sqrt(c / l)), C = Math.abs(y) < 5;
  s || (s = C ? I.restSpeed.granular : I.restSpeed.default), i || (i = C ? I.restDelta.granular : I.restDelta.default);
  let M, v, S, E, D, x;
  if (T < 1)
    S = pe(d, T), E = (g + T * d * y) / S, M = (b) => {
      const R = Math.exp(-T * d * b);
      return o - R * (E * Math.sin(S * b) + y * Math.cos(S * b));
    }, D = T * d * E + y * S, x = T * d * y - E * S, v = (b) => Math.exp(-T * d * b) * (D * Math.sin(S * b) + x * Math.cos(S * b));
  else if (T === 1) {
    M = (R) => o - Math.exp(-d * R) * (y + (g + d * y) * R);
    const b = g + d * y;
    v = (R) => Math.exp(-d * R) * (d * b * R - g);
  } else {
    const b = d * Math.sqrt(T * T - 1);
    M = (G) => {
      const J = Math.exp(-T * d * G), Z = Math.min(b * G, 300);
      return o - J * ((g + T * d * y) * Math.sinh(Z) + b * y * Math.cosh(Z)) / b;
    };
    const R = (g + T * d * y) / b, K = T * d * R - y * b, F = T * d * y - R * b;
    v = (G) => {
      const J = Math.exp(-T * d * G), Z = Math.min(b * G, 300);
      return J * (K * Math.sinh(Z) + F * Math.cosh(Z));
    };
  }
  const w = {
    calculatedDuration: p && f || null,
    velocity: (b) => /* @__PURE__ */ H(v(b)),
    next: (b) => {
      if (!p && T < 1) {
        const K = Math.exp(-T * d * b), F = Math.sin(S * b), G = Math.cos(S * b), J = o - K * (E * F + y * G), Z = /* @__PURE__ */ H(K * (D * F + x * G));
        return a.done = Math.abs(Z) <= s && Math.abs(o - J) <= i, a.value = a.done ? o : J, a;
      }
      const R = M(b);
      if (p)
        a.done = b >= f;
      else {
        const K = /* @__PURE__ */ H(v(b));
        a.done = Math.abs(K) <= s && Math.abs(o - R) <= i;
      }
      return a.value = a.done ? o : R, a;
    },
    toString: () => {
      const b = Math.min(Le(w), Ht), R = qn((K) => w.next(b * K).value, b, 30);
      return b + "ms " + R;
    },
    toTransition: () => {
    }
  };
  return w;
}
Bt.applyToOptions = (e) => {
  const t = Zn(e, 100, Bt);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ H(t.duration), e.type = "keyframes", e;
};
const Ei = 5;
function Hn(e, t, n) {
  const s = Math.max(t - Ei, 0);
  return /* @__PURE__ */ Fn(n - e(s), t - s);
}
function me({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: c, restDelta: u = 0.5, restSpeed: l }) {
  const f = e[0], h = {
    done: !1,
    value: f
  }, p = (x) => a !== void 0 && x < a || c !== void 0 && x > c, g = (x) => a === void 0 ? c : c === void 0 || Math.abs(a - x) < Math.abs(c - x) ? a : c;
  let T = n * t;
  const y = f + T, d = o === void 0 ? y : o(y);
  d !== y && (T = d - f);
  const C = (x) => -T * Math.exp(-x / s), M = (x) => d + C(x), v = (x) => {
    const w = C(x), b = M(x);
    h.done = Math.abs(w) <= u, h.value = h.done ? d : b;
  };
  let S, E;
  const D = (x) => {
    p(h.value) && (S = x, E = Bt({
      keyframes: [h.value, g(h.value)],
      velocity: Hn(M, x, h.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: r,
      restDelta: u,
      restSpeed: l
    }));
  };
  return D(0), {
    calculatedDuration: null,
    next: (x) => {
      let w = !1;
      return !E && S === void 0 && (w = !0, v(x), D(x)), S !== void 0 && x >= S ? E.next(x - S) : (!w && v(x), h);
    }
  };
}
function Di(e, t, n) {
  const s = [], i = n || ut.mix || Xn, r = e.length - 1;
  for (let o = 0; o < r; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[o] || Mt : t;
      a = De(c, a);
    }
    s.push(a);
  }
  return s;
}
function Pi(e, t, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const r = e.length;
  if (ee(r === t.length), r === 1)
    return () => t[0];
  if (r === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[r - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Di(t, s, i), c = a.length, u = (l) => {
    if (o && l < e[0])
      return t[0];
    let f = 0;
    if (c > 1)
      for (; f < e.length - 2 && !(l < e[f + 1]); f++)
        ;
    const h = /* @__PURE__ */ Pe(e[f], e[f + 1], l);
    return a[f](h);
  };
  return n ? (l) => u(ct(e[0], e[r - 1], l)) : u;
}
function Jn(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const i = /* @__PURE__ */ Pe(0, t, s);
    e.push(Vt(n, 1, i));
  }
}
function Qn(e) {
  const t = [0];
  return Jn(t, e.length - 1), t;
}
function Ii(e, t) {
  return e.map((n) => n * t);
}
function ki(e, t) {
  return e.map(() => t || On).splice(0, e.length - 1);
}
function It({ duration: e = 300, keyframes: t, times: n, ease: s = "easeInOut" }) {
  const i = /* @__PURE__ */ Nn(s) ? s.map(Ze) : Ze(s), r = {
    done: !1,
    value: t[0]
  }, o = Ii(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Qn(t),
    e
  ), a = Pi(o, t, {
    ease: Array.isArray(i) ? i : ki(t, i)
  });
  return {
    calculatedDuration: e,
    next: (c) => (r.value = a(c), r.done = c >= e, r)
  };
}
const Bi = (e) => e !== null;
function ne(e, { repeat: t, repeatType: n = "loop" }, s, i = 1) {
  const r = e.filter(Bi), a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : r.length - 1;
  return !a || s === void 0 ? r[a] : s;
}
const Oi = {
  decay: me,
  inertia: me,
  tween: It,
  keyframes: It,
  spring: Bt
};
function ts(e) {
  typeof e.type == "string" && (e.type = Oi[e.type]);
}
class je {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Ni = (e) => e / 100;
class Jt extends je {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== q.now() && this.tick(q.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    ts(t);
    const { type: n = It, repeat: s = 0, repeatDelay: i = 0, repeatType: r, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const c = n || It;
    c !== It && typeof a[0] != "number" && (this.mixKeyframes = De(Ni, Xn(a[0], a[1])), a = [0, 100]);
    const u = c({ ...t, keyframes: a });
    r === "mirror" && (this.mirroredGenerator = c({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = Le(u));
    const { calculatedDuration: l } = u;
    this.calculatedDuration = l, this.resolvedDuration = l + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = u;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: s, totalDuration: i, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: c } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: u = 0, keyframes: l, repeat: f, repeatType: h, repeatDelay: p, type: g, onUpdate: T, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const d = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), C = this.playbackSpeed >= 0 ? d < 0 : d > i;
    this.currentTime = Math.max(d, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let M = this.currentTime, v = s;
    if (f) {
      const x = Math.min(this.currentTime, i) / a;
      let w = Math.floor(x), b = x % 1;
      !b && x >= 1 && (b = 1), b === 1 && w--, w = Math.min(w, f + 1), w % 2 && (h === "reverse" ? (b = 1 - b, p && (b -= p / a)) : h === "mirror" && (v = o)), M = ct(0, 1, b) * a;
    }
    let S;
    C ? (this.delayState.value = l[0], S = this.delayState) : S = v.next(M), r && !C && (S.value = r(S.value));
    let { done: E } = S;
    !C && c !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return D && g !== me && (S.value = ne(l, this.options, y, this.speed)), T && T(S.value), D && this.finish(), S;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ Q(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Q(t);
  }
  get time() {
    return /* @__PURE__ */ Q(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ H(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return Hn((s) => this.generator.next(s).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime(q.now()), this.playbackSpeed = t, n && this.driver && (this.time = /* @__PURE__ */ Q(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = Si, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(q.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function Ki(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const pt = (e) => e * 180 / Math.PI, ge = (e) => {
  const t = pt(Math.atan2(e[1], e[0]));
  return ye(t);
}, $i = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: ge,
  rotateZ: ge,
  skewX: (e) => pt(Math.atan(e[1])),
  skewY: (e) => pt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ye = (e) => (e = e % 360, e < 0 && (e += 360), e), sn = ge, rn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), on = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Li = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: rn,
  scaleY: on,
  scale: (e) => (rn(e) + on(e)) / 2,
  rotateX: (e) => ye(pt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => ye(pt(Math.atan2(-e[2], e[0]))),
  rotateZ: sn,
  rotate: sn,
  skewX: (e) => pt(Math.atan(e[4])),
  skewY: (e) => pt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function be(e) {
  return e.includes("scale") ? 1 : 0;
}
function Te(e, t) {
  if (!e || e === "none")
    return be(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n)
    s = Li, i = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = $i, i = a;
  }
  if (!i)
    return be(t);
  const r = s[t], o = i[1].split(",").map(Wi);
  return typeof r == "function" ? r(o) : o[r];
}
const ji = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Te(n, t);
};
function Wi(e) {
  return parseFloat(e.trim());
}
const wt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], At = /* @__PURE__ */ new Set([...wt, "pathRotation"]), an = (e) => e === St || e === m, Gi = /* @__PURE__ */ new Set(["x", "y", "z"]), _i = wt.filter((e) => !Gi.has(e));
function Ui(e) {
  const t = [];
  return _i.forEach((n) => {
    const s = e.getValue(n);
    s !== void 0 && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const lt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: s }) => {
    const i = e.max - e.min;
    return s === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: s }) => {
    const i = e.max - e.min;
    return s === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Te(t, "x"),
  y: (e, { transform: t }) => Te(t, "y")
};
lt.translateX = lt.x;
lt.translateY = lt.y;
const mt = /* @__PURE__ */ new Set();
let ve = !1, Me = !1, xe = !1;
function es() {
  if (Me) {
    const e = Array.from(mt).filter((s) => s.needsMeasurement), t = new Set(e.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    t.forEach((s) => {
      const i = Ui(s);
      i.length && (n.set(s, i), s.render());
    }), e.forEach((s) => s.measureInitialState()), t.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([r, o]) => {
        s.getValue(r)?.set(o);
      });
    }), e.forEach((s) => s.measureEndState()), e.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  Me = !1, ve = !1, mt.forEach((e) => e.complete(xe)), mt.clear();
}
function ns() {
  mt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Me = !0);
  });
}
function zi() {
  xe = !0, ns(), es(), xe = !1;
}
class We {
  constructor(t, n, s, i, r, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = s, this.motionValue = i, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (mt.add(this), ve || (ve = !0, nt.read(ns), nt.resolveKeyframes(es))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: s, motionValue: i } = this;
    if (t[0] === null) {
      const r = i?.get(), o = t[t.length - 1];
      if (r !== void 0)
        t[0] = r;
      else if (s && n) {
        const a = s.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), i && r === void 0 && i.set(t[0]);
    }
    Ki(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), mt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (mt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Yi = (e) => e.startsWith("--");
function ss(e, t, n) {
  Yi(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const Xi = {};
function is(e, t) {
  const n = /* @__PURE__ */ Cn(e);
  return () => Xi[t] ?? n();
}
const qi = /* @__PURE__ */ is(() => window.ScrollTimeline !== void 0, "scrollTimeline"), rs = /* @__PURE__ */ is(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Dt = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`, ln = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Dt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Dt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Dt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Dt([0.33, 1.53, 0.69, 0.99])
};
function os(e, t) {
  if (e)
    return typeof e == "function" ? rs() ? qn(e, t) : "ease-out" : /* @__PURE__ */ $n(e) ? Dt(e) : Array.isArray(e) ? e.map((n) => os(n, t) || ln.easeOut) : ln[e];
}
function Zi(e, t, n, { delay: s = 0, duration: i = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: c } = {}, u = void 0) {
  const l = {
    [t]: n
  };
  c && (l.offset = c);
  const f = os(a, i);
  Array.isArray(f) && (l.easing = f);
  const h = {
    delay: s,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return u && (h.pseudoElement = u), e.animate(l, h);
}
function Ge(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Hi({ type: e, ...t }) {
  return Ge(e) && rs() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class as extends je {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t)
      return;
    const { element: n, name: s, keyframes: i, pseudoElement: r, allowFlatten: o = !1, finalKeyframe: a, onComplete: c } = t;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = t, ee(typeof t.type != "string");
    const u = Hi(t);
    this.animation = Zi(n, s, i, u, r), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const l = ne(i, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(l), ss(n, s, l), this.animation.cancel();
      }
      c?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const t = this.options?.element;
    !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Q(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Q(t);
  }
  get time() {
    return /* @__PURE__ */ Q(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ H(t), n && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: s, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && qi() ? (this.animation.timeline = t, n && (this.animation.rangeStart = n), s && (this.animation.rangeEnd = s), Mt) : i(this);
  }
}
const ls = {
  anticipate: kn,
  backInOut: In,
  circInOut: Bn
};
function Ji(e) {
  return e in ls;
}
function Qi(e) {
  typeof e.ease == "string" && Ji(e.ease) && (e.ease = ls[e.ease]);
}
const ue = 10;
class tr extends as {
  constructor(t) {
    Qi(t), ts(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: r, ...o } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Jt({
      ...o,
      autoplay: !1
    }), c = Math.max(ue, q.now() - this.startTime), u = ct(0, ue, c - ue), l = a.sample(c).value, { name: f } = this.options;
    r && f && ss(r, f, l), n.setWithVelocity(a.sample(Math.max(0, c - u)).value, l, u), a.stop();
  }
}
const cn = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(tt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function er(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function nr(e, t, n, s) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const r = e[e.length - 1], o = cn(i, t), a = cn(r, t);
  return !o || !a ? !1 : er(e) || (n === "spring" || Ge(n)) && s;
}
function Se(e) {
  e.duration = 0, e.type = "keyframes";
}
const cs = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), sr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ir(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && sr.test(e[t]))
      return !0;
  return !1;
}
const rr = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), or = /* @__PURE__ */ Cn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ar(e) {
  const { motionValue: t, name: n, repeatDelay: s, repeatType: i, damping: r, type: o, keyframes: a } = e, c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement))
    return !1;
  const { onUpdate: u, transformTemplate: l } = t.owner.getProps();
  return or() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (cs.has(n) || rr.has(n) && ir(a)) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !u && !s && i !== "mirror" && r !== 0 && o !== "inertia";
}
const lr = 40;
class cr extends je {
  constructor({ autoplay: t = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: r = 0, repeatType: o = "loop", keyframes: a, name: c, motionValue: u, element: l, ...f }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = q.now();
    const h = {
      autoplay: t,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: r,
      repeatType: o,
      name: c,
      motionValue: u,
      element: l,
      ...f
    }, p = l?.KeyframeResolver || We;
    this.keyframeResolver = new p(a, (g, T, y) => this.onKeyframesResolved(g, T, h, !y), c, u, l), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: c, isHandoff: u, onUpdate: l } = s;
    this.resolvedAt = q.now();
    let f = !0;
    nr(t, r, o, a) || (f = !1, (ut.instantAnimations || !c) && l?.(ne(t, s, n)), t[0] = t[t.length - 1], Se(s), s.repeat = 0);
    const p = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > lr ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...s,
      keyframes: t
    }, g = f && !u && ar(p), T = p.motionValue?.owner?.current;
    let y;
    if (g)
      try {
        y = new tr({
          ...p,
          element: T
        });
      } catch {
        y = new Jt(p);
      }
    else
      y = new Jt(p);
    y.finished.then(() => {
      this.notifyFinished();
    }).catch(Mt), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), zi()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
class ur {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((s) => s.attachTimeline(t));
    return () => {
      n.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return un(this.animations, "duration");
  }
  get iterationDuration() {
    return un(this.animations, "iterationDuration");
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function un(e, t) {
  let n = 0;
  for (let s = 0; s < e.length; s++) {
    const i = e[s][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
class fr extends ur {
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
}
const fn = 30, hr = (e) => !isNaN(parseFloat(e));
class dr {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      const i = q.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = q.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = hr(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Rn());
    const s = this.events[t].add(n);
    return t === "change" ? () => {
      s(), nt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = q.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > fn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, fn);
    return /* @__PURE__ */ Fn(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function vt(e, t) {
  return new dr(e, t);
}
function us(e, t) {
  if (e?.inherit && t) {
    const { inherit: n, ...s } = e;
    return { ...t, ...s };
  }
  return e;
}
function fs(e, t) {
  const n = e?.[t] ?? e?.default ?? e;
  return n !== e ? us(n, e) : n;
}
const pr = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, mr = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), gr = {
  type: "keyframes",
  duration: 0.8
}, yr = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, br = (e, { keyframes: t }) => t.length > 2 ? gr : At.has(e) ? e.startsWith("scale") ? mr(t[1]) : pr : yr, Tr = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function vr(e) {
  for (const t in e)
    if (!Tr.has(t))
      return !0;
  return !1;
}
const hs = (e, t, n, s = {}, i, r) => (o) => {
  const a = fs(s, e) || {}, c = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - /* @__PURE__ */ H(c);
  const l = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (h) => {
      t.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: r ? void 0 : i
  };
  vr(a) || Object.assign(l, br(e, l)), l.duration && (l.duration = /* @__PURE__ */ H(l.duration)), l.repeatDelay && (l.repeatDelay = /* @__PURE__ */ H(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let f = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (Se(l), l.delay === 0 && (f = !0)), (ut.instantAnimations || ut.skipAnimations || i?.shouldSkipAnimations || a.skipAnimations) && (f = !0, Se(l), l.delay = 0), l.allowFlatten = !a.type && !a.ease, f && !r && t.get() !== void 0) {
    const h = ne(l.keyframes, a);
    if (h !== void 0) {
      nt.update(() => {
        l.onUpdate(h), l.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Jt(l) : new cr(l);
}, Mr = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function xr(e) {
  const t = Mr.exec(e);
  if (!t)
    return [,];
  const [, n, s, i] = t;
  return [`--${n ?? s}`, i];
}
function ds(e, t, n = 1) {
  const [s, i] = xr(e);
  if (!s)
    return;
  const r = window.getComputedStyle(t).getPropertyValue(s);
  if (r) {
    const o = r.trim();
    return wn(o) ? parseFloat(o) : o;
  }
  return Oe(i) ? ds(i, t, n + 1) : i;
}
function hn(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, s) => {
    t[0][s] = n.get(), t[1][s] = n.getVelocity();
  }), t;
}
function ps(e, t, n, s) {
  if (typeof t == "function") {
    const [i, r] = hn(s);
    t = t(n !== void 0 ? n : e.custom, i, r);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, r] = hn(s);
    t = t(n !== void 0 ? n : e.custom, i, r);
  }
  return t;
}
function Sr(e, t, n) {
  const s = e.getProps();
  return ps(s, t, s.custom, e);
}
const ms = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...wt
]), Vr = (e) => Array.isArray(e);
function wr(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, vt(n));
}
function Ar(e) {
  return Vr(e) ? e[e.length - 1] || 0 : e;
}
function Cr(e, t) {
  const n = Sr(e, t);
  let { transitionEnd: s = {}, transition: i = {}, ...r } = n || {};
  r = { ...r, ...s };
  for (const o in r) {
    const a = Ar(r[o]);
    wr(e, o, a);
  }
}
const _ = (e) => !!(e && e.getVelocity);
function Rr(e) {
  return !!(_(e) && e.add);
}
function Fr(e, t) {
  const n = e.getValue("willChange");
  if (Rr(n))
    return n.add(t);
  if (!n && ut.WillChange) {
    const s = new ut.WillChange("auto");
    e.addValue("willChange", s), s.add(t);
  }
}
function _e(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const Er = "framerAppearId", Dr = "data-" + _e(Er);
function Pr(e) {
  return e.props[Dr];
}
function Ir({ protectedKeys: e, needsAnimating: t }, n) {
  const s = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, s;
}
function kr(e, t, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: r, transitionEnd: o, ...a } = t;
  const c = e.getDefaultTransition();
  r = r ? us(r, c) : c;
  const u = r?.reduceMotion, l = r?.skipAnimations;
  s && (r = s);
  const f = [], h = i && e.animationState && e.animationState.getState()[i], p = r?.path;
  p && p.animateVisualElement(e, a, r, n, f);
  for (const g in a) {
    const T = e.getValue(g, e.latestValues[g] ?? null), y = a[g];
    if (y === void 0 || h && Ir(h, g))
      continue;
    const d = {
      delay: n,
      ...fs(r || {}, g)
    };
    l && (d.skipAnimations = !0);
    const C = T.get();
    if (C !== void 0 && !T.isAnimating() && !Array.isArray(y) && y === C && !d.velocity) {
      nt.update(() => T.set(y));
      continue;
    }
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const E = Pr(e);
      if (E) {
        const D = window.MotionHandoffAnimation(E, g, nt);
        D !== null && (d.startTime = D, M = !0);
      }
    }
    Fr(e, g);
    const v = u ?? e.shouldReduceMotion;
    T.start(hs(g, T, y, v && ms.has(g) ? { type: !1 } : d, e, M));
    const S = T.animation;
    S && f.push(S);
  }
  if (o) {
    const g = () => nt.update(() => {
      o && Cr(e, o);
    });
    f.length ? Promise.all(f).then(g) : g();
  }
  return f;
}
const Br = {
  test: (e) => e === "auto",
  parse: (e) => e
}, gs = (e) => (t) => t.test(e), ys = [St, m, bt, st, ii, si, Br], dn = (e) => ys.find(gs(e));
function Or(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || An(e) : !0;
}
const Nr = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Kr(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [s] = n.match(Ne) || [];
  if (!s)
    return e;
  const i = n.replace(s, "");
  let r = Nr.has(t) ? 1 : 0;
  return s !== n && (r *= 100), t + "(" + r + i + ")";
}
const $r = /\b([a-z-]*)\(.*?\)/gu, Ve = {
  ...tt,
  getAnimatableNone: (e) => {
    const t = e.match($r);
    return t ? t.map(Kr).join(" ") : e;
  }
}, we = {
  ...tt,
  getAnimatableNone: (e) => {
    const t = tt.parse(e);
    return tt.createTransformer(e)(t.map((s) => typeof s == "number" ? 0 : typeof s == "object" ? { ...s, alpha: 1 } : s));
  }
}, pn = {
  ...St,
  transform: Math.round
}, Lr = {
  rotate: st,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: st,
  rotateX: st,
  rotateY: st,
  rotateZ: st,
  scale: zt,
  scaleX: zt,
  scaleY: zt,
  scaleZ: zt,
  skew: st,
  skewX: st,
  skewY: st,
  distance: m,
  translateX: m,
  translateY: m,
  translateZ: m,
  x: m,
  y: m,
  z: m,
  perspective: m,
  transformPerspective: m,
  opacity: kt,
  originX: Je,
  originY: Je,
  originZ: m
}, Qt = {
  // Border props
  borderWidth: m,
  borderTopWidth: m,
  borderRightWidth: m,
  borderBottomWidth: m,
  borderLeftWidth: m,
  borderRadius: m,
  borderTopLeftRadius: m,
  borderTopRightRadius: m,
  borderBottomRightRadius: m,
  borderBottomLeftRadius: m,
  // Positioning props
  width: m,
  maxWidth: m,
  height: m,
  maxHeight: m,
  top: m,
  right: m,
  bottom: m,
  left: m,
  inset: m,
  insetBlock: m,
  insetBlockStart: m,
  insetBlockEnd: m,
  insetInline: m,
  insetInlineStart: m,
  insetInlineEnd: m,
  // Spacing props
  padding: m,
  paddingTop: m,
  paddingRight: m,
  paddingBottom: m,
  paddingLeft: m,
  paddingBlock: m,
  paddingBlockStart: m,
  paddingBlockEnd: m,
  paddingInline: m,
  paddingInlineStart: m,
  paddingInlineEnd: m,
  margin: m,
  marginTop: m,
  marginRight: m,
  marginBottom: m,
  marginLeft: m,
  marginBlock: m,
  marginBlockStart: m,
  marginBlockEnd: m,
  marginInline: m,
  marginInlineStart: m,
  marginInlineEnd: m,
  // Typography
  fontSize: m,
  // Misc
  backgroundPositionX: m,
  backgroundPositionY: m,
  ...Lr,
  zIndex: pn,
  // SVG
  fillOpacity: kt,
  strokeOpacity: kt,
  numOctaves: pn
}, jr = {
  ...Qt,
  // Color props
  color: B,
  backgroundColor: B,
  outlineColor: B,
  fill: B,
  stroke: B,
  // Border props
  borderColor: B,
  borderTopColor: B,
  borderRightColor: B,
  borderBottomColor: B,
  borderLeftColor: B,
  filter: Ve,
  WebkitFilter: Ve,
  mask: we,
  WebkitMask: we
}, bs = (e) => jr[e], Wr = /* @__PURE__ */ new Set([Ve, we]);
function Ts(e, t) {
  let n = bs(e);
  return Wr.has(n) || (n = tt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Gr = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function _r(e, t, n) {
  let s = 0, i;
  for (; s < e.length && !i; ) {
    const r = e[s];
    typeof r == "string" && !Gr.has(r) && Tt(r).values.length && (i = e[s]), s++;
  }
  if (i && n)
    for (const r of t)
      e[r] = Ts(n, i);
}
class Ur extends We {
  constructor(t, n, s, i, r) {
    super(t, n, s, i, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let f = t[l];
      if (typeof f == "string" && (f = f.trim(), Oe(f))) {
        const h = ds(f, n.current);
        h !== void 0 && (t[l] = h), l === t.length - 1 && (this.finalKeyframe = f);
      }
    }
    if (this.resolveNoneKeyframes(), !ms.has(s) || t.length !== 2)
      return;
    const [i, r] = t, o = dn(i), a = dn(r), c = He(i), u = He(r);
    if (c !== u && lt[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (an(o) && an(a))
        for (let l = 0; l < t.length; l++) {
          const f = t[l];
          typeof f == "string" && (t[l] = parseFloat(f));
        }
      else lt[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, s = [];
    for (let i = 0; i < t.length; i++)
      (t[i] === null || Or(t[i])) && s.push(i);
    s.length && _r(t, s, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: s } = this;
    if (!t || !t.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = lt[s](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: t, name: n, unresolvedKeyframes: s } = this;
    if (!t || !t.current)
      return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const r = s.length - 1, o = s[r];
    s[r] = lt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([a, c]) => {
      t.getValue(a).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const zr = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function vs(e, t, n) {
  if (e == null)
    return [];
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let s = document;
    t && (s = t.current);
    const i = n?.[e] ?? s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((s) => s != null);
}
const Ae = (e, t) => t && typeof e == "number" ? t.transform(e) : e, { schedule: Yr } = /* @__PURE__ */ Ln(queueMicrotask, !1);
function Ms(e) {
  return Ks(e) && "ownerSVGElement" in e;
}
function Xr(e) {
  return Ms(e) && e.tagName === "svg";
}
const qr = [...ys, B, tt], Zr = (e) => qr.find(gs(e)), mn = () => ({ min: 0, max: 0 }), Ue = () => ({
  x: mn(),
  y: mn()
}), Ot = /* @__PURE__ */ new WeakMap();
function Hr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Jr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Qr = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], to = ["initial", ...Qr];
function xs(e) {
  return Hr(e.animate) || to.some((t) => Jr(e[t]));
}
function eo(e) {
  return !!(xs(e) || e.variants);
}
function no(e, t, n) {
  for (const s in t) {
    const i = t[s], r = n[s];
    if (_(i))
      e.addValue(s, i);
    else if (_(r))
      e.addValue(s, vt(i, { owner: e }));
    else if (r !== i)
      if (e.hasValue(s)) {
        const o = e.getValue(s);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(s);
        e.addValue(s, vt(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const s in n)
    t[s] === void 0 && e.removeValue(s);
  return t;
}
const Ce = { current: null }, Ss = { current: !1 }, so = typeof window < "u";
function io() {
  if (Ss.current = !0, !!so)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ce.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Ce.current = !1;
}
const gn = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let yn = {};
class Vs {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, s) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: s, reducedMotionConfig: i, skipAnimations: r, blockInitialAnimation: o, visualState: a }, c = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = We, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = q.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, nt.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: l } = a;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = r, this.options = c, this.blockInitialAnimation = !!o, this.isControllingVariants = xs(n), this.isVariantNode = eo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const g = h[p];
      u[p] !== void 0 && _(g) && g.set(u[p]);
    }
  }
  mount(t) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        this.values.get(n)?.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
    this.current = t, Ot.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Ss.current || io(), this.shouldReduceMotion = Ce.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), fe(this.notifyUpdate), fe(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), n.accelerate && cs.has(t) && this.current instanceof HTMLElement) {
      const { factory: o, keyframes: a, times: c, ease: u, duration: l } = n.accelerate, f = new as({
        element: this.current,
        name: t,
        keyframes: a,
        times: c,
        ease: u,
        duration: /* @__PURE__ */ H(l)
      }), h = o(f);
      this.valueSubscriptions.set(t, () => {
        h(), f.cancel();
      });
      return;
    }
    const s = At.has(t);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && nt.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let r;
    typeof window < "u" && window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), r && r();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in yn) {
      const n = yn[t];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[t] && i && s(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const r = this.features[t];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ue();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < gn.length; s++) {
      const i = gn[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const r = "on" + i, o = t[r];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = no(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const s = this.values.get(t);
    n !== s && (s && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let s = this.values.get(t);
    return s === void 0 && n !== void 0 && (s = vt(n === null ? void 0 : n, { owner: this }), this.addValue(t, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (wn(s) || An(s)) ? s = parseFloat(s) : !Zr(s) && tt.test(n) && (s = Ts(t, n)), this.setBaseTarget(t, _(s) ? s.get() : s)), _(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const r = ps(this.props, n, this.presenceContext?.custom);
      r && (s = r[t]);
    }
    if (n && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !_(i) ? i : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Rn()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Yr.render(this.render);
  }
}
class ws extends Vs {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ur;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const s = t.style;
    return s ? s[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: s }) {
    delete n[t], delete s[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    _(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function ro({ top: e, left: t, right: n, bottom: s }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: s }
  };
}
function oo(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), s = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function ao(e, t) {
  return ro(oo(e.getBoundingClientRect(), t));
}
const lo = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, co = wt.length;
function uo(e, t, n) {
  let s = "", i = !0;
  for (let o = 0; o < co; o++) {
    const a = wt[o], c = e[a];
    if (c === void 0)
      continue;
    let u = !0;
    if (typeof c == "number")
      u = c === (a.startsWith("scale") ? 1 : 0);
    else {
      const l = parseFloat(c);
      u = a.startsWith("scale") ? l === 1 : l === 0;
    }
    if (!u || n) {
      const l = Ae(c, Qt[a]);
      if (!u) {
        i = !1;
        const f = lo[a] || a;
        s += `${f}(${l}) `;
      }
      n && (t[a] = l);
    }
  }
  const r = e.pathRotation;
  return r && (i = !1, s += `rotate(${Ae(r, Qt.pathRotation)}) `), s = s.trim(), n ? s = n(t, i ? "" : s) : i && (s = "none"), s;
}
function As(e, t, n) {
  const { style: s, vars: i, transformOrigin: r } = e;
  let o = !1, a = !1;
  for (const c in t) {
    const u = t[c];
    if (At.has(c)) {
      o = !0;
      continue;
    } else if (Wn(c)) {
      i[c] = u;
      continue;
    } else {
      const l = Ae(u, Qt[c]);
      c.startsWith("origin") ? (a = !0, r[c] = l) : s[c] = l;
    }
  }
  if (t.transform || (o || n ? s.transform = uo(t, e.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: c = "50%", originY: u = "50%", originZ: l = 0 } = r;
    s.transformOrigin = `${c} ${u} ${l}`;
  }
}
function Cs(e, { style: t, vars: n }, s, i) {
  const r = e.style;
  let o;
  for (o in t)
    r[o] = t[o];
  i?.applyProjectionStyles(r, s);
  for (o in n)
    r.setProperty(o, n[o]);
}
function bn(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ft = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (m.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = bn(e, t.target.x), s = bn(e, t.target.y);
    return `${n}% ${s}%`;
  }
}, fo = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const s = e, i = tt.parse(e);
    if (i.length > 5)
      return s;
    const r = tt.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, c = n.y.scale * t.y;
    i[0 + o] /= a, i[1 + o] /= c;
    const u = Vt(a, c, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), r(i);
  }
}, ho = {
  borderRadius: {
    ...Ft,
    applyTo: [...zr]
  },
  borderTopLeftRadius: Ft,
  borderTopRightRadius: Ft,
  borderBottomLeftRadius: Ft,
  borderBottomRightRadius: Ft,
  boxShadow: fo
};
function po(e, { layout: t, layoutId: n }) {
  return At.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ho[e] || e === "opacity");
}
function Rs(e, t, n) {
  const s = e.style, i = t?.style, r = {};
  if (!s)
    return r;
  for (const o in s)
    (_(s[o]) || i && _(i[o]) || po(o, e) || n?.getValue(o)?.liveStyle !== void 0) && (r[o] = s[o]);
  return r;
}
function mo(e) {
  return window.getComputedStyle(e);
}
class go extends ws {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Cs;
  }
  mount(t) {
    ee(!!t.style), super.mount(t);
  }
  readValueFromInstance(t, n) {
    if (At.has(n))
      return this.projection?.isProjecting ? be(n) : ji(t, n);
    {
      const s = mo(t), i = (Wn(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ao(t, n);
  }
  build(t, n, s) {
    As(t, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return Rs(t, n, s);
  }
}
function yo(e, t) {
  return e in t;
}
class bo extends Vs {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(t, n) {
    if (yo(n, t)) {
      const s = t[n];
      if (typeof s == "string" || typeof s == "number")
        return s;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(t, n) {
    delete n.output[t];
  }
  measureInstanceViewportBox() {
    return Ue();
  }
  build(t, n) {
    Object.assign(t.output, n);
  }
  renderInstance(t, { output: n }) {
    Object.assign(t, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const To = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, vo = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Mo(e, t, n = 1, s = 0, i = !0) {
  e.pathLength = 1;
  const r = i ? To : vo;
  e[r.offset] = `${-s}`, e[r.array] = `${t} ${n}`;
}
const xo = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function So(e, {
  attrX: t,
  attrY: n,
  attrScale: s,
  pathLength: i,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, c, u, l) {
  if (As(e, a, u), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h } = e;
  f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = l?.transformBox ?? "fill-box", delete f.transformBox);
  for (const p of xo)
    f[p] !== void 0 && (h[p] = f[p], delete f[p]);
  t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), i !== void 0 && Mo(f, i, r, o, !1);
}
const Fs = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), Vo = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function wo(e, t, n, s) {
  Cs(e, t, void 0, s);
  for (const i in t.attrs)
    e.setAttribute(Fs.has(i) ? i : _e(i), t.attrs[i]);
}
function Ao(e, t, n) {
  const s = Rs(e, t, n);
  for (const i in e)
    if (_(e[i]) || _(t[i])) {
      const r = wt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[r] = e[i];
    }
  return s;
}
class Co extends ws {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ue;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (At.has(n)) {
      const s = bs(n);
      return s && s.default || 0;
    }
    return n = Fs.has(n) ? n : _e(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return Ao(t, n, s);
  }
  build(t, n, s) {
    So(t, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(t, n, s, i) {
    wo(t, n, s, i);
  }
  mount(t) {
    this.isSVGTag = Vo(t.tagName), super.mount(t);
  }
}
function Ro(e, t, n) {
  const s = _(e) ? e : vt(e);
  return s.start(hs("", s, t, n)), s.animation;
}
function ze(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function Es(e, t, n, s) {
  return e == null ? [] : typeof e == "string" && ze(t) ? vs(e, n, s) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((i) => i != null) : [e];
}
function Fo(e, t, n) {
  return e * (t + 1) + n * t;
}
function Tn(e, t, n, s) {
  return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : s.get(t) ?? e;
}
function Eo(e, t, n) {
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    i.at > t && i.at < n && (Ee(e, i), s--);
  }
}
function Do(e, t, n, s, i, r) {
  Eo(e, i, r);
  for (let o = 0; o < t.length; o++)
    e.push({
      value: t[o],
      at: Vt(i, r, s[o]),
      easing: /* @__PURE__ */ Kn(n, o)
    });
}
function Po(e, t, n = 0) {
  const s = t + 1 + t * n;
  for (let i = 0; i < e.length; i++)
    e[i] = e[i] / s;
}
function Io(e, t) {
  return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
const ko = "easeInOut", Bo = 20;
function Oo(e, { defaultTransition: t = {}, ...n } = {}, s, i) {
  const r = t.duration || 0.3, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = {}, u = /* @__PURE__ */ new Map();
  let l = 0, f = 0, h = 0;
  for (let p = 0; p < e.length; p++) {
    const g = e[p];
    if (typeof g == "string") {
      u.set(g, f);
      continue;
    } else if (!Array.isArray(g)) {
      u.set(g.name, Tn(f, g.at, l, u));
      continue;
    }
    let [T, y, d = {}] = g;
    d.at !== void 0 && (f = Tn(f, d.at, l, u));
    let C = 0;
    const M = (v, S, E, D = 0, x = 0) => {
      const w = No(v), { delay: b = 0, times: R = Qn(w), type: K = t.type || "keyframes", repeat: F, repeatType: G, repeatDelay: J = 0, ...Z } = S;
      let { ease: U = t.ease || "easeOut", duration: j } = S;
      const it = typeof b == "function" ? b(D, x) : b, et = w.length, Kt = Ge(K) ? K : i?.[K || "keyframes"];
      if (et <= 2 && Kt) {
        let A = 100;
        if (et === 2 && Lo(w)) {
          const Y = w[1] - w[0];
          A = Math.abs(Y);
        }
        const k = {
          ...t,
          ...Z
        };
        j !== void 0 && (k.duration = /* @__PURE__ */ H(j));
        const z = Zn(k, A, Kt);
        U = z.ease, j = z.duration;
      }
      j ?? (j = r);
      const rt = f + it;
      R.length === 1 && R[0] === 0 && (R[1] = 1);
      const $t = R.length - w.length;
      if ($t > 0 && Jn(R, $t), w.length === 1 && w.unshift(null), F && F < Bo) {
        const A = j > 0 ? J / j : 0;
        j = Fo(j, F, J);
        const k = [...w], z = [...R];
        U = Array.isArray(U) ? [...U] : [U];
        const Y = [...U], O = G === "reverse" || G === "mirror";
        let ft = k, jt = Y;
        O && (ft = [...k].reverse(), G === "reverse" && (jt = [...Y].reverse().map(($) => typeof $ == "function" ? /* @__PURE__ */ Ie($) : $)));
        for (let $ = 0; $ < F; $++) {
          const ht = O && $ % 2 === 0, Wt = ht ? ft : k, Gt = ht ? jt : Y, Ct = ($ + 1) * (1 + A);
          A > 0 && (w.push(w[w.length - 1]), R.push(Ct), U.push("linear")), w.push(...Wt);
          for (let ot = 0; ot < Wt.length; ot++)
            R.push(z[ot] + Ct), U.push(ot === 0 ? "linear" : /* @__PURE__ */ Kn(Gt, ot - 1));
        }
        Po(R, F, A);
      }
      const Lt = rt + j;
      Do(E, w, U, R, rt, Lt), C = Math.max(it + j, C), h = Math.max(Lt, h);
    };
    if (_(T)) {
      const v = vn(T, a);
      M(y, d, Mn("default", v));
    } else {
      const v = Es(T, y, s, c), S = v.length;
      for (let E = 0; E < S; E++) {
        y = y, d = d;
        const D = v[E], x = vn(D, a);
        for (const w in y)
          M(y[w], Ko(d, w), Mn(w, x), E, S);
      }
    }
    l = f, f += C;
  }
  return a.forEach((p, g) => {
    for (const T in p) {
      const y = p[T];
      y.sort(Io);
      const d = [], C = [], M = [];
      for (let D = 0; D < y.length; D++) {
        const { at: x, value: w, easing: b } = y[D];
        d.push(w), C.push(/* @__PURE__ */ Pe(0, h, x)), M.push(b || "easeOut");
      }
      C[0] !== 0 && (C.unshift(0), d.unshift(d[0]), M.unshift(ko)), C[C.length - 1] !== 1 && (C.push(1), d.push(null)), o.has(g) || o.set(g, {
        keyframes: {},
        transition: {}
      });
      const v = o.get(g);
      v.keyframes[T] = d;
      const { type: S, ...E } = t;
      v.transition[T] = {
        ...E,
        duration: h,
        ease: M,
        times: C,
        ...n
      };
    }
  }), o;
}
function vn(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Mn(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function No(e) {
  return Array.isArray(e) ? e : [e];
}
function Ko(e, t) {
  return e && e[t] ? {
    ...e,
    ...e[t]
  } : { ...e };
}
const $o = (e) => typeof e == "number", Lo = (e) => e.every($o);
function jo(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, n = Ms(e) && !Xr(e) ? new Co(t) : new go(t);
  n.mount(e), Ot.set(e, n);
}
function Wo(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, n = new bo(t);
  n.mount(e), Ot.set(e, n);
}
function Go(e, t) {
  return _(e) || typeof e == "number" || typeof e == "string" && !ze(t);
}
function Ds(e, t, n, s) {
  const i = [];
  if (Go(e, t))
    i.push(Ro(e, ze(t) && t.default || t, n && (n.default || n)));
  else {
    if (e == null)
      return i;
    const r = Es(e, t, s), o = r.length;
    for (let a = 0; a < o; a++) {
      const c = r[a], u = c instanceof Element ? jo : Wo;
      Ot.has(c) || u(c);
      const l = Ot.get(c), f = { ...n };
      "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, o)), i.push(...kr(l, { ...t, transition: f }, {}));
    }
  }
  return i;
}
function _o(e, t, n) {
  const s = [], i = e.map((o) => {
    if (Array.isArray(o) && typeof o[0] == "function") {
      const a = o[0], c = vt(0);
      return c.on("change", a), o.length === 1 ? [c, [0, 1]] : o.length === 2 ? [c, [0, 1], o[1]] : [c, o[1], o[2]];
    }
    return o;
  });
  return Oo(i, t, n, { spring: Bt }).forEach(({ keyframes: o, transition: a }, c) => {
    s.push(...Ds(c, o, a));
  }), s;
}
function Uo(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function zo(e = {}) {
  const { scope: t, reduceMotion: n, skipAnimations: s } = e;
  function i(r, o, a) {
    let c = [], u;
    const l = {};
    if (n !== void 0 && (l.reduceMotion = n), s !== void 0 && (l.skipAnimations = s), Uo(r)) {
      const { onComplete: h, ...p } = o || {};
      typeof h == "function" && (u = h), c = _o(r, { ...l, ...p }, t);
    } else {
      const { onComplete: h, ...p } = a || {};
      typeof h == "function" && (u = h), c = Ds(r, o, { ...l, ...p }, t);
    }
    const f = new fr(c);
    return u && f.finished.then(u), t && (t.animations.push(f), f.finished.then(() => {
      Ee(t.animations, f);
    })), f;
  }
  return i;
}
const Yo = zo(), Xo = {
  some: 0,
  all: 1
};
function qo(e, t, { root: n, margin: s, amount: i = "some" } = {}) {
  const r = vs(e), o = /* @__PURE__ */ new WeakMap(), a = (u) => {
    u.forEach((l) => {
      const f = o.get(l.target);
      if (l.isIntersecting !== !!f)
        if (l.isIntersecting) {
          const h = t(l.target, l);
          typeof h == "function" ? o.set(l.target, h) : c.unobserve(l.target);
        } else typeof f == "function" && (f(l), o.delete(l.target));
    });
  }, c = new IntersectionObserver(a, {
    root: n,
    rootMargin: s,
    threshold: typeof i == "number" ? i : Xo[i]
  });
  return r.forEach((u) => c.observe(u)), () => c.disconnect();
}
function Zo(e, { root: t, margin: n, amount: s, once: i = !1, initial: r = !1 } = {}) {
  const [o, a] = N.useState(r);
  return N.useEffect(() => {
    if (!e.current || i && o)
      return;
    const c = () => (a(!0), i ? void 0 : () => a(!1)), u = {
      root: t && t.current || void 0,
      margin: n,
      amount: s
    };
    return qo(e.current, c, u);
  }, [t, e, n, i, s]), o;
}
const yt = 1.2, Ho = 0.07, Jo = [
  [1e12, "T"],
  [1e9, "B"],
  [1e6, "M"],
  [1e3, "K"]
], Et = { display: "inline-block", height: `${yt}em`, lineHeight: `${yt}em` }, Qo = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0
}, xn = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Re = (e) => Math.min(1, Math.max(0, e)), Yt = (e, t, n) => {
  const s = Re((n - e) / (t - e));
  return s * s * (3 - 2 * s);
}, te = (e) => (e % 10 + 10) % 10, Ps = (e) => {
  const t = Math.log(Math.min(0.5, Math.max(1e-3, e))), n = -t / Math.sqrt(Math.PI * Math.PI + t * t), s = Math.PI / 0.52, i = s / Math.sqrt(1 - n * n), r = (a) => 1 - Math.exp(-n * i * a) * (Math.cos(s * a) + n * i / s * Math.sin(s * a)), o = 1 - r(1);
  return (a) => a >= 1 ? 1 : r(a) + o * a * a * a;
}, Sn = {
  linear: (e) => e,
  easeOut: /* @__PURE__ */ xt(0.33, 1, 0.68, 1),
  expo: (e) => e >= 1 ? 1 : (1 - Math.pow(2, -10 * e)) / (1 - Math.pow(2, -10)),
  spring: Ps(0.06)
}, Vn = (e) => {
  const t = e.toString();
  if (t.includes(".")) {
    const n = t.split(".")[1];
    if (parseInt(n) !== 0)
      return n.length;
  }
  return 0;
}, ta = (e) => Jo.find(([t]) => Math.abs(e) >= t * 0.9995) || [1, ""], Is = (e, t, n, s) => {
  if (!t) return { size: 1, label: "", digits: s };
  const [i, r] = ta(e), o = n ?? (r ? Math.abs(e) / i < 100 ? 1 : 0 : s);
  return { size: i, label: r, digits: o };
}, Fe = (e, t, n) => {
  const s = (Math.abs(e) / n).toFixed(t), [i, r = ""] = s.split(".");
  return { negative: e < 0 && Number(s) !== 0, int: i, frac: r };
}, ea = (e, t) => t ? e.replace(/\B(?=(\d{3})+(?!\d))/g, t) : e, na = (e, t, n, { compact: s, decimals: i, places: r, separator: o }) => {
  const { size: a, label: c, digits: u } = Is(t, s, i, r), l = Fe(e, u, a), f = Fe(t, u, a), h = Math.max(l.int.length, f.int.length), p = [], g = [];
  (l.negative || f.negative) && p.push({ char: "-", enter: !l.negative, leave: !f.negative });
  const T = (d, C) => {
    if (C < 0) return Number(d.frac[-C - 1]);
    const M = d.int.length - 1 - C;
    return M >= 0 ? Number(d.int[M]) : null;
  };
  for (let d = h - 1; d >= -u; d--) {
    d === -1 && p.push({ char: "." });
    const C = T(l, d), M = T(f, d), v = {
      slot: p.length,
      index: g.length,
      place: d,
      from: C ?? 0,
      to: M ?? 0,
      enter: C === null,
      leave: M === null
    };
    p.push(v), g.push(v), o && d > 0 && d % 3 === 0 && p.push({ char: o, follow: v.index });
  }
  const y = n || t >= e;
  return g.forEach((d, C) => {
    const M = g.length - 1 - C, v = y ? te(d.to - d.from) : -te(d.from - d.to), S = n ? Math.max(1, 3 - M) : Math.min(Math.floor(Math.abs(t - e) / (a * 10 ** (d.place + 1))), Math.max(0, 3 - M));
    d.delta = v + (y ? 10 : -10) * S;
  }), { slots: p, columns: g, label: c };
};
function ia({
  to: e,
  from: t = 0,
  direction: n = "up",
  delay: s = 0,
  duration: i = 2,
  className: r = "",
  style: o,
  startWhen: a = !0,
  separator: c = "",
  prefix: u = "",
  suffix: l = "",
  mode: f = "count",
  easing: h = "easeOut",
  decimals: p,
  format: g = "standard",
  trigger: T = "view",
  replayOnHover: y = !1,
  onStart: d,
  onEnd: C
}) {
  const M = N.useRef(null), v = N.useRef(null), S = N.useRef([]), E = N.useRef([]), D = N.useId().replace(/[^\w-]/g, ""), x = n === "down" ? e : t, w = n === "down" ? t : e, b = N.useRef(x), R = N.useRef(!1), K = N.useRef(!1), [F, G] = N.useState(null), J = Zo(M, { once: !0, margin: "0px" }), Z = T === "load" || J, U = g === "compact", j = p ?? Math.max(Vn(t), Vn(e)), it = N.useCallback(
    (A) => {
      const { size: k, label: z, digits: Y } = Is(A, U, p, j), O = Fe(A, Y, k), ft = `${O.negative ? "-" : ""}${ea(O.int, c)}${O.frac ? `.${O.frac}` : ""}`;
      return `${u}${ft}${z}${l}`;
    },
    [U, p, j, c, u, l]
  ), et = N.useMemo(() => {
    if (f !== "roll") return null;
    const A = F ? F.from : x, k = F ? F.to : w;
    return na(A, k, !!F?.spin, { compact: U, decimals: p, places: j, separator: c });
  }, [f, F, x, w, U, p, j, c]), [Kt] = N.useState(() => it(x)), rt = N.useRef(null);
  xn(() => {
    rt.current = {
      formatValue: it,
      onStart: d,
      onEnd: C,
      model: et,
      mode: f,
      easing: h,
      duration: Math.max(0, i),
      delay: s
    };
  }), xn(() => {
    R.current || (b.current = x), f === "count" && !K.current && v.current && (v.current.textContent = it(b.current));
  }, [f, x, it]), N.useEffect(() => {
    !Z || !a || (R.current = !0, G((A) => ({
      id: (A?.id || 0) + 1,
      from: b.current,
      to: w,
      spin: !1,
      wait: !0
    })));
  }, [Z, a, w]), N.useEffect(() => {
    if (!F) return;
    const A = rt.current, k = Sn[A.easing] || Sn.easeOut, z = A.duration, Y = ($) => z > 0 ? Re($ / z) : 1;
    let O;
    if (A.mode === "roll" && A.model && M.current) {
      const { columns: $, slots: ht } = A.model, Wt = parseFloat(getComputedStyle(M.current).fontSize) || 16, Gt = yt * Wt, Ct = $.length > 1 ? Math.min(Ho, z * 0.4 / ($.length - 1)) : 0, ot = Math.max(1e-3, z - Ct * ($.length - 1)), Ye = $.map((P) => {
        const X = S.current[P.slot], V = X?.firstChild;
        return {
          ...P,
          box: X,
          strip: V,
          blur: E.current[P.index],
          cells: V ? Array.from(V.childNodes, (W) => W.firstChild) : [],
          width: X ? X.scrollWidth : 0,
          ease: A.easing === "spring" ? Ps(Math.min(0.12, Math.max(0.01, 0.35 / Math.max(1, Math.abs(P.delta))))) : k,
          base: Math.floor(P.from),
          sigma: 0,
          presence: P.enter ? 0 : 1
        };
      }), ks = ht.map((P, X) => ({ ...P, node: S.current[X] })).filter((P) => P.char !== void 0 && P.node && (P.enter || P.leave || P.follow !== void 0)).map((P) => ({ ...P, width: P.node.scrollWidth })), se = (P, X, V, W) => {
        P && (P.style.width = W ? "" : `${(V * X).toFixed(2)}px`, P.style.opacity = W ? "" : V.toFixed(3));
      };
      O = (P) => {
        Ye.forEach((V, W) => {
          if (!V.strip) return;
          const at = Re((P - W * Ct) / ot), Xe = V.from + V.delta * V.ease(at), _t = Math.floor(Xe);
          _t !== V.base && (V.base = _t, V.cells.forEach((qe, Os) => {
            qe && (qe.nodeValue = String(te(_t + Os - 1)));
          })), V.strip.style.transform = `translateY(${(-(1 + Xe - _t) * yt).toFixed(4)}em)`;
          const ie = Math.max(0, at - 4e-3), re = Math.min(1, at + 4e-3), Bs = re > ie ? Math.abs(V.delta) * Math.abs(V.ease(re) - V.ease(ie)) / (re - ie) / ot : 0, Rt = at > 0 && at < 1 ? Math.min(Gt * 0.05, Bs * Gt / 600) : 0;
          (Math.abs(Rt - V.sigma) > 0.05 || Rt === 0 && V.sigma !== 0) && (V.sigma = Rt, Rt > 0.2 && V.blur ? (V.blur.setAttribute("stdDeviation", `0 ${Rt.toFixed(2)}`), V.strip.style.filter = `url(#${D}-${W})`) : V.strip.style.filter = ""), (V.enter || V.leave) && (V.presence = V.enter ? Yt(0, 0.45, at) : 1 - Yt(0.55, 1, at), se(V.box, V.width, V.presence, V.enter && at >= 1));
        });
        const X = Y(P);
        ks.forEach((V) => {
          if (V.follow !== void 0) {
            const W = Ye[V.follow];
            W && (W.enter || W.leave) && se(V.node, V.width, W.presence, W.enter && W.presence >= 1);
          } else {
            const W = V.enter ? Yt(0, 0.3, X) : 1 - Yt(0.7, 1, X);
            se(V.node, V.width, W, !!V.enter && X >= 1);
          }
        }), b.current = F.from + (F.to - F.from) * k(X);
      };
    } else
      O = ($) => {
        const ht = F.from + (F.to - F.from) * k(Y($));
        b.current = ht, v.current && (v.current.textContent = rt.current.formatValue(ht));
      };
    K.current = !0, typeof A.onStart == "function" && A.onStart();
    const ft = () => {
      O(1 / 0), b.current = F.to, K.current = !1, typeof rt.current.onEnd == "function" && rt.current.onEnd();
    };
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      ft();
      return;
    }
    const jt = Yo(0, z, {
      duration: z,
      delay: F.wait ? A.delay : 0,
      ease: "linear",
      onUpdate: O,
      onComplete: ft
    });
    return () => {
      jt.stop(), K.current = !1;
    };
  }, [F, D]);
  const $t = () => {
    !y || K.current || !R.current || G(
      (A) => f === "roll" ? { id: (A?.id || 0) + 1, from: b.current, to: b.current, spin: !0 } : { id: (A?.id || 0) + 1, from: x, to: w, spin: !1 }
    );
  }, Lt = it(F ? F.to : w);
  return /* @__PURE__ */ L.jsx(
    "span",
    {
      className: r,
      ref: M,
      style: { fontVariantNumeric: "tabular-nums", ...o },
      onPointerEnter: y ? $t : void 0,
      children: et ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
        /* @__PURE__ */ L.jsxs(
          "span",
          {
            "aria-hidden": "true",
            style: { display: "inline-flex", whiteSpace: "pre", userSelect: "none" },
            children: [
              u && /* @__PURE__ */ L.jsx("span", { style: Et, children: u }),
              et.slots.map((A, k) => {
                const Y = (A.char !== void 0 ? A.enter || A.follow !== void 0 && et.columns[A.follow].enter : A.enter) ? { width: 0, opacity: 0 } : null;
                return A.char !== void 0 ? /* @__PURE__ */ L.jsx(
                  "span",
                  {
                    ref: (O) => {
                      S.current[k] = O;
                    },
                    style: { ...Et, overflow: "hidden", ...Y },
                    children: A.char
                  },
                  k
                ) : /* @__PURE__ */ L.jsx(
                  "span",
                  {
                    ref: (O) => {
                      S.current[k] = O;
                    },
                    style: { ...Et, position: "relative", overflow: "hidden", ...Y },
                    children: /* @__PURE__ */ L.jsx(
                      "span",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          transform: `translateY(${-yt}em)`
                        },
                        children: [-1, 0, 1, 2].map((O) => /* @__PURE__ */ L.jsx("span", { style: { height: `${yt}em` }, children: te(A.from + O) }, O))
                      }
                    )
                  },
                  k
                );
              }),
              et.label && /* @__PURE__ */ L.jsx("span", { style: Et, children: et.label }),
              l && /* @__PURE__ */ L.jsx("span", { style: Et, children: l })
            ]
          },
          `roll-${F?.id || 0}`
        ),
        /* @__PURE__ */ L.jsx("span", { style: Qo, children: Lt }),
        /* @__PURE__ */ L.jsx("svg", { "aria-hidden": "true", width: "0", height: "0", style: { position: "absolute" }, children: /* @__PURE__ */ L.jsx("defs", { children: et.columns.map((A) => /* @__PURE__ */ L.jsx(
          "filter",
          {
            id: `${D}-${A.index}`,
            x: "-20%",
            y: "-50%",
            width: "140%",
            height: "200%",
            colorInterpolationFilters: "sRGB",
            children: /* @__PURE__ */ L.jsx(
              "feGaussianBlur",
              {
                ref: (k) => {
                  E.current[A.index] = k;
                },
                stdDeviation: "0 0"
              }
            )
          },
          A.index
        )) }) })
      ] }) : /* @__PURE__ */ L.jsx("span", { ref: v, children: Kt }, "count")
    }
  );
}
export {
  ia as default
};
