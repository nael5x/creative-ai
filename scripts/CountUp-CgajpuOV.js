import { r as N, j as L } from "./components-entry-CxyGrPME.js";
function _s(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function kt(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const ce = (t, e, n) => n > e ? e : n < t ? t : n;
function dt(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Se = () => {
}, ie = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (Se = (t, e, n) => {
  !t && typeof console < "u" && console.warn(dt(e, n));
}, ie = (t, e, n) => {
  if (!t)
    throw new Error(dt(e, n));
});
const fe = {}, Fn = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Gs = (t) => typeof t == "object" && t !== null, Dn = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function Pn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const we = /* @__NO_SIDE_EFFECTS__ */ (t) => t, It = (...t) => t.reduce((e, n) => (s) => n(e(s))), Ot = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s ? (n - t) / s : 1;
};
class kn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return _s(this.subscriptions, e), () => kt(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let r = 0; r < i; r++) {
          const o = this.subscriptions[r];
          o && o(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Z = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, Q = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, In = /* @__NO_SIDE_EFFECTS__ */ (t, e) => e ? t * (1e3 / e) : 0, Qt = /* @__PURE__ */ new Set();
function On(t, e, n) {
  t || Qt.has(e) || (console.warn(dt(e, n)), Qt.add(e));
}
const Us = (t, e, n) => {
  const s = e - t;
  return ((n - t) % s + s) % s + t;
}, Bn = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, zs = 1e-7, Ys = 12;
function qs(t, e, n, s, i) {
  let r, o, a = 0;
  do
    o = e + (n - e) / 2, r = Bn(o, s, i) - t, r > 0 ? n = o : e = o;
  while (Math.abs(r) > zs && ++a < Ys);
  return o;
}
// @__NO_SIDE_EFFECTS__
function Ve(t, e, n, s) {
  if (t === e && n === s)
    return we;
  const i = (r) => qs(r, 0, 1, t, n);
  return (r) => r === 0 || r === 1 ? r : Bn(i(r), e, s);
}
const Nn = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Bt = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => 1 - t(1 - e), Kn = /* @__PURE__ */ Ve(0.33, 1.53, 0.69, 0.99), Nt = /* @__PURE__ */ Bt(Kn), $n = /* @__PURE__ */ Nn(Nt), Ln = (t) => t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * Nt(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Kt = (t) => 1 - Math.sin(Math.acos(t)), Xs = /* @__PURE__ */ Bt(Kt), jn = /* @__PURE__ */ Nn(Kt), Zs = /* @__PURE__ */ Ve(0.42, 0, 1, 1), Hs = /* @__PURE__ */ Ve(0, 0, 0.58, 1), Wn = /* @__PURE__ */ Ve(0.42, 0, 0.58, 1), _n = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] != "number";
// @__NO_SIDE_EFFECTS__
function Gn(t, e) {
  return /* @__PURE__ */ _n(t) ? t[Us(0, t.length, e)] : t;
}
const Un = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] == "number", en = {
  linear: we,
  easeIn: Zs,
  easeInOut: Wn,
  easeOut: Hs,
  circIn: Kt,
  circInOut: jn,
  circOut: Xs,
  backIn: Nt,
  backInOut: $n,
  backOut: Kn,
  anticipate: Ln
}, Js = (t) => typeof t == "string", tn = (t) => {
  if (/* @__PURE__ */ Un(t)) {
    ie(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, s, i] = t;
    return /* @__PURE__ */ Ve(e, n, s, i);
  } else if (Js(t))
    return ie(en[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), en[t];
  return t;
}, Ye = [
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
function Qs(t) {
  let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = !1, i = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    r.has(c) && (u.schedule(c), t()), c(o);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, l = !1, f = !1) => {
      const p = f && s ? e : n;
      return l && r.add(c), p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), r.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (o = c, s) {
        i = !0;
        return;
      }
      s = !0;
      const l = e;
      e = n, n = l, e.forEach(a), e.clear(), s = !1, i && (i = !1, u.process(c));
    }
  };
  return u;
}
const ei = 40;
function zn(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => n = !0, o = Ye.reduce((M, v) => (M[v] = Qs(r), M), {}), { setup: a, read: u, resolveKeyframes: c, preUpdate: l, update: f, preRender: h, render: p, postRender: g } = o, T = () => {
    const M = fe.useManualTiming, v = M ? i.timestamp : performance.now();
    n = !1, M || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(v - i.timestamp, ei), 1)), i.timestamp = v, i.isProcessing = !0, a.process(i), u.process(i), c.process(i), l.process(i), f.process(i), h.process(i), p.process(i), g.process(i), i.isProcessing = !1, n && e && (s = !1, t(T));
  }, y = () => {
    n = !0, s = !0, i.isProcessing || t(T);
  };
  return { schedule: Ye.reduce((M, v) => {
    const S = o[v];
    return M[v] = (F, D = !1, x = !1) => (n || y(), S.schedule(F, D, x)), M;
  }, {}), cancel: (M) => {
    for (let v = 0; v < Ye.length; v++)
      o[Ye[v]].cancel(M);
  }, state: i, steps: o };
}
const { schedule: ne, cancel: pt, state: He } = /* @__PURE__ */ zn(typeof requestAnimationFrame < "u" ? requestAnimationFrame : we, !0);
let Ze;
function ti() {
  Ze = void 0;
}
const X = {
  now: () => (Ze === void 0 && X.set(He.isProcessing || fe.useManualTiming ? He.timestamp : performance.now()), Ze),
  set: (t) => {
    Ze = t, queueMicrotask(ti);
  }
}, Yn = (t) => (e) => typeof e == "string" && e.startsWith(t), qn = /* @__PURE__ */ Yn("--"), ni = /* @__PURE__ */ Yn("var(--"), $t = (t) => ni(t) ? si.test(t.split("/*")[0].trim()) : !1, si = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function nn(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const Ae = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Be = {
  ...Ae,
  transform: (t) => ce(0, 1, t)
}, qe = {
  ...Ae,
  default: 1
}, Oe = (t) => Math.round(t * 1e5) / 1e5, Lt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ii(t) {
  return t == null;
}
const ri = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, jt = (t, e) => (n) => !!(typeof n == "string" && ri.test(n) && n.startsWith(t) || e && !ii(n) && Object.prototype.hasOwnProperty.call(n, e)), Xn = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, r, o, a] = s.match(Lt);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, oi = (t) => ce(0, 255, t), at = {
  ...Ae,
  transform: (t) => Math.round(oi(t))
}, pe = {
  test: /* @__PURE__ */ jt("rgb", "red"),
  parse: /* @__PURE__ */ Xn("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + at.transform(t) + ", " + at.transform(e) + ", " + at.transform(n) + ", " + Oe(Be.transform(s)) + ")"
};
function ai(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const mt = {
  test: /* @__PURE__ */ jt("#"),
  parse: ai,
  transform: pe.transform
}, $e = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), se = /* @__PURE__ */ $e("deg"), ve = /* @__PURE__ */ $e("%"), m = /* @__PURE__ */ $e("px"), li = /* @__PURE__ */ $e("vh"), ui = /* @__PURE__ */ $e("vw"), sn = {
  ...ve,
  parse: (t) => ve.parse(t) / 100,
  transform: (t) => ve.transform(t * 100)
}, ye = {
  test: /* @__PURE__ */ jt("hsl", "hue"),
  parse: /* @__PURE__ */ Xn("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + ve.transform(Oe(e)) + ", " + ve.transform(Oe(n)) + ", " + Oe(Be.transform(s)) + ")"
}, O = {
  test: (t) => pe.test(t) || mt.test(t) || ye.test(t),
  parse: (t) => pe.test(t) ? pe.parse(t) : ye.test(t) ? ye.parse(t) : mt.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? pe.transform(t) : ye.transform(t),
  getAnimatableNone: (t) => {
    const e = O.parse(t);
    return e.alpha = 0, O.transform(e);
  }
}, ci = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function fi(t) {
  return isNaN(t) && typeof t == "string" && (t.match(Lt)?.length || 0) + (t.match(ci)?.length || 0) > 0;
}
const Zn = "number", Hn = "color", hi = "var", di = "var(", rn = "${}", pi = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Me(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let r = 0;
  const a = e.replace(pi, (u) => (O.test(u) ? (s.color.push(r), i.push(Hn), n.push(O.parse(u))) : u.startsWith(di) ? (s.var.push(r), i.push(hi), n.push(u)) : (s.number.push(r), i.push(Zn), n.push(parseFloat(u))), ++r, rn)).split(rn);
  return { values: n, split: a, indexes: s, types: i };
}
function mi(t) {
  return Me(t).values;
}
function Jn({ split: t, types: e }) {
  const n = t.length;
  return (s) => {
    let i = "";
    for (let r = 0; r < n; r++)
      if (i += t[r], s[r] !== void 0) {
        const o = e[r];
        o === Zn ? i += Oe(s[r]) : o === Hn ? i += O.transform(s[r]) : i += s[r];
      }
    return i;
  };
}
function gi(t) {
  return Jn(Me(t));
}
const yi = (t) => typeof t == "number" ? 0 : O.test(t) ? O.getAnimatableNone(t) : t, bi = (t, e) => typeof t == "number" ? e?.trim().endsWith("/") ? t : 0 : yi(t);
function Ti(t) {
  const e = Me(t);
  return Jn(e)(e.values.map((s, i) => bi(s, e.split[i])));
}
const ee = {
  test: fi,
  parse: mi,
  createTransformer: gi,
  getAnimatableNone: Ti
};
function lt(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function vi({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, r = 0, o = 0;
  if (!e)
    i = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, u = 2 * n - a;
    i = lt(u, a, t + 1 / 3), r = lt(u, a, t), o = lt(u, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: s
  };
}
function Je(t, e) {
  return (n) => n > 0 ? e : t;
}
const Ce = (t, e, n) => t + (e - t) * n, ut = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, Mi = [mt, pe, ye], xi = (t) => Mi.find((e) => e.test(t));
function on(t) {
  const e = xi(t);
  if (Se(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === ye && (n = vi(n)), n;
}
const an = (t, e) => {
  const n = on(t), s = on(e);
  if (!n || !s)
    return Je(t, e);
  const i = { ...n };
  return (r) => (i.red = ut(n.red, s.red, r), i.green = ut(n.green, s.green, r), i.blue = ut(n.blue, s.blue, r), i.alpha = Ce(n.alpha, s.alpha, r), pe.transform(i));
}, gt = /* @__PURE__ */ new Set(["none", "hidden"]);
function Si(t, e) {
  return gt.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function wi(t, e) {
  return (n) => Ce(t, e, n);
}
function Wt(t) {
  return typeof t == "number" ? wi : typeof t == "string" ? $t(t) ? Je : O.test(t) ? an : Ci : Array.isArray(t) ? Qn : typeof t == "object" ? O.test(t) ? an : Vi : Je;
}
function Qn(t, e) {
  const n = [...t], s = n.length, i = t.map((r, o) => Wt(r)(r, e[o]));
  return (r) => {
    for (let o = 0; o < s; o++)
      n[o] = i[o](r);
    return n;
  };
}
function Vi(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = Wt(t[i])(t[i], e[i]));
  return (i) => {
    for (const r in s)
      n[r] = s[r](i);
    return n;
  };
}
function Ai(t, e) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const r = e.types[i], o = t.indexes[r][s[r]], a = t.values[o] ?? 0;
    n[i] = a, s[r]++;
  }
  return n;
}
const Ci = (t, e) => {
  const n = ee.createTransformer(e), s = Me(t), i = Me(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? gt.has(t) && !i.values.length || gt.has(e) && !s.values.length ? Si(t, e) : It(Qn(Ai(s, i), i.values), n) : (Se(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Je(t, e));
};
function es(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? Ce(t, e, n) : Wt(t)(t, e);
}
const Ri = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => ne.update(e, n),
    stop: () => pt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => He.isProcessing ? He.timestamp : X.now()
  };
}, ts = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let r = 0; r < i; r++)
    s += Math.round(t(r / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, Qe = 2e4;
function _t(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Qe; )
    e += n, s = t.next(e);
  return e >= Qe ? 1 / 0 : e;
}
function ns(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }), i = Math.min(_t(s), Qe);
  return {
    type: "keyframes",
    ease: (r) => s.next(i * r).value / e,
    duration: /* @__PURE__ */ Q(i)
  };
}
const k = {
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
function yt(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Ei = 12;
function Fi(t, e, n) {
  let s = n;
  for (let i = 1; i < Ei; i++)
    s = s - t(s) / e(s);
  return s;
}
const ct = 1e-3;
function Di({ duration: t = k.duration, bounce: e = k.bounce, velocity: n = k.velocity, mass: s = k.mass }) {
  let i, r;
  Se(t <= /* @__PURE__ */ Z(k.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let o = 1 - e;
  o = ce(k.minDamping, k.maxDamping, o), t = ce(k.minDuration, k.maxDuration, /* @__PURE__ */ Q(t)), o < 1 ? (i = (c) => {
    const l = c * o, f = l * t, h = l - n, p = yt(c, o), g = Math.exp(-f);
    return ct - h / p * g;
  }, r = (c) => {
    const f = c * o * t, h = f * n + n, p = Math.pow(o, 2) * Math.pow(c, 2) * t, g = Math.exp(-f), T = yt(Math.pow(c, 2), o);
    return (-i(c) + ct > 0 ? -1 : 1) * ((h - p) * g) / T;
  }) : (i = (c) => {
    const l = Math.exp(-c * t), f = (c - n) * t + 1;
    return -ct + l * f;
  }, r = (c) => {
    const l = Math.exp(-c * t), f = (n - c) * (t * t);
    return l * f;
  });
  const a = 5 / t, u = Fi(i, r, a);
  if (t = /* @__PURE__ */ Z(t), isNaN(u))
    return {
      stiffness: k.stiffness,
      damping: k.damping,
      duration: t
    };
  {
    const c = Math.pow(u, 2) * s;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(s * c),
      duration: t
    };
  }
}
const Pi = ["duration", "bounce"], ki = ["stiffness", "damping", "mass"];
function ln(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ii(t) {
  let e = {
    velocity: k.velocity,
    stiffness: k.stiffness,
    damping: k.damping,
    mass: k.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!ln(t, ki) && ln(t, Pi))
    if (e.velocity = 0, t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, r = 2 * ce(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: k.mass,
        stiffness: i,
        damping: r
      };
    } else {
      const n = Di({ ...t, velocity: 0 });
      e = {
        ...e,
        ...n,
        mass: k.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Ne(t = k.visualDuration, e = k.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const r = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: r }, { stiffness: u, damping: c, mass: l, duration: f, velocity: h, isResolvedFromDuration: p } = Ii({
    ...n,
    velocity: -/* @__PURE__ */ Q(n.velocity || 0)
  }), g = h || 0, T = c / (2 * Math.sqrt(u * l)), y = o - r, d = /* @__PURE__ */ Q(Math.sqrt(u / l)), C = Math.abs(y) < 5;
  s || (s = C ? k.restSpeed.granular : k.restSpeed.default), i || (i = C ? k.restDelta.granular : k.restDelta.default);
  let M, v, S, F, D, x;
  if (T < 1)
    S = yt(d, T), F = (g + T * d * y) / S, M = (b) => {
      const E = Math.exp(-T * d * b);
      return o - E * (F * Math.sin(S * b) + y * Math.cos(S * b));
    }, D = T * d * F + y * S, x = T * d * y - F * S, v = (b) => Math.exp(-T * d * b) * (D * Math.sin(S * b) + x * Math.cos(S * b));
  else if (T === 1) {
    M = (E) => o - Math.exp(-d * E) * (y + (g + d * y) * E);
    const b = g + d * y;
    v = (E) => Math.exp(-d * E) * (d * b * E - g);
  } else {
    const b = d * Math.sqrt(T * T - 1);
    M = (_) => {
      const J = Math.exp(-T * d * _), H = Math.min(b * _, 300);
      return o - J * ((g + T * d * y) * Math.sinh(H) + b * y * Math.cosh(H)) / b;
    };
    const E = (g + T * d * y) / b, K = T * d * E - y * b, R = T * d * y - E * b;
    v = (_) => {
      const J = Math.exp(-T * d * _), H = Math.min(b * _, 300);
      return J * (K * Math.sinh(H) + R * Math.cosh(H));
    };
  }
  const V = {
    calculatedDuration: p && f || null,
    velocity: (b) => /* @__PURE__ */ Z(v(b)),
    next: (b) => {
      if (!p && T < 1) {
        const K = Math.exp(-T * d * b), R = Math.sin(S * b), _ = Math.cos(S * b), J = o - K * (F * R + y * _), H = /* @__PURE__ */ Z(K * (D * R + x * _));
        return a.done = Math.abs(H) <= s && Math.abs(o - J) <= i, a.value = a.done ? o : J, a;
      }
      const E = M(b);
      if (p)
        a.done = b >= f;
      else {
        const K = /* @__PURE__ */ Z(v(b));
        a.done = Math.abs(K) <= s && Math.abs(o - E) <= i;
      }
      return a.value = a.done ? o : E, a;
    },
    toString: () => {
      const b = Math.min(_t(V), Qe), E = ts((K) => V.next(b * K).value, b, 30);
      return b + "ms " + E;
    },
    toTransition: () => {
    }
  };
  return V;
}
Ne.applyToOptions = (t) => {
  const e = ns(t, 100, Ne);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ Z(e.duration), t.type = "keyframes", t;
};
const Oi = 5;
function ss(t, e, n) {
  const s = Math.max(e - Oi, 0);
  return /* @__PURE__ */ In(n - t(s), e - s);
}
function bt({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: u, restDelta: c = 0.5, restSpeed: l }) {
  const f = t[0], h = {
    done: !1,
    value: f
  }, p = (x) => a !== void 0 && x < a || u !== void 0 && x > u, g = (x) => a === void 0 ? u : u === void 0 || Math.abs(a - x) < Math.abs(u - x) ? a : u;
  let T = n * e;
  const y = f + T, d = o === void 0 ? y : o(y);
  d !== y && (T = d - f);
  const C = (x) => -T * Math.exp(-x / s), M = (x) => d + C(x), v = (x) => {
    const V = C(x), b = M(x);
    h.done = Math.abs(V) <= c, h.value = h.done ? d : b;
  };
  let S, F;
  const D = (x) => {
    p(h.value) && (S = x, F = Ne({
      keyframes: [h.value, g(h.value)],
      velocity: ss(M, x, h.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: r,
      restDelta: c,
      restSpeed: l
    }));
  };
  return D(0), {
    calculatedDuration: null,
    next: (x) => {
      let V = !1;
      return !F && S === void 0 && (V = !0, v(x), D(x)), S !== void 0 && x >= S ? F.next(x - S) : (!V && v(x), h);
    }
  };
}
function Bi(t, e, n) {
  const s = [], i = n || fe.mix || es, r = t.length - 1;
  for (let o = 0; o < r; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const u = Array.isArray(e) ? e[o] || we : e;
      a = It(u, a);
    }
    s.push(a);
  }
  return s;
}
function Ni(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const r = t.length;
  if (ie(r === e.length, "Both input and output ranges must be the same length", "range-length"), r === 1)
    return () => e[0];
  if (r === 2 && e[0] === e[1])
    return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Bi(e, s, i), u = a.length, c = (l) => {
    if (o && l < t[0])
      return e[0];
    let f = 0;
    if (u > 1)
      for (; f < t.length - 2 && !(l < t[f + 1]); f++)
        ;
    const h = /* @__PURE__ */ Ot(t[f], t[f + 1], l);
    return a[f](h);
  };
  return n ? (l) => c(ce(t[0], t[r - 1], l)) : c;
}
function is(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ Ot(0, e, s);
    t.push(Ce(n, 1, i));
  }
}
function rs(t) {
  const e = [0];
  return is(e, t.length - 1), e;
}
function Ki(t, e) {
  return t.map((n) => n * e);
}
function $i(t, e) {
  return t.map(() => e || Wn).splice(0, t.length - 1);
}
function be({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = /* @__PURE__ */ _n(s) ? s.map(tn) : tn(s), r = {
    done: !1,
    value: e[0]
  }, o = Ki(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : rs(e),
    t
  ), a = Ni(o, e, {
    ease: Array.isArray(i) ? i : $i(e, i)
  });
  return {
    calculatedDuration: t,
    next: (u) => (r.value = a(u), r.done = u >= t, r)
  };
}
const Li = (t) => t !== null;
function st(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const r = t.filter(Li), a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return !a || s === void 0 ? r[a] : s;
}
const ji = {
  decay: bt,
  inertia: bt,
  tween: be,
  keyframes: be,
  spring: Ne
};
function os(t) {
  typeof t.type == "string" && (t.type = ji[t.type]);
}
class Gt {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
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
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const Wi = (t) => t / 100;
class et extends Gt {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== X.now() && this.tick(X.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    os(e);
    const { type: n = be, repeat: s = 0, repeatDelay: i = 0, repeatType: r, velocity: o = 0 } = e;
    let { keyframes: a } = e;
    const u = n || be;
    process.env.NODE_ENV !== "production" && u !== be && ie(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), u !== be && typeof a[0] != "number" && (this.mixKeyframes = It(Wi, es(a[0], a[1])), a = [0, 100]);
    const c = u({ ...e, keyframes: a });
    r === "mirror" && (this.mirroredGenerator = u({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -o
    })), c.calculatedDuration === null && (c.calculatedDuration = _t(c));
    const { calculatedDuration: l } = c;
    this.calculatedDuration = l, this.resolvedDuration = l + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = c;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: s, totalDuration: i, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: u } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: c = 0, keyframes: l, repeat: f, repeatType: h, repeatDelay: p, type: g, onUpdate: T, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const d = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), C = this.playbackSpeed >= 0 ? d < 0 : d > i;
    this.currentTime = Math.max(d, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let M = this.currentTime, v = s;
    if (f) {
      const x = Math.min(this.currentTime, i) / a;
      let V = Math.floor(x), b = x % 1;
      !b && x >= 1 && (b = 1), b === 1 && V--, V = Math.min(V, f + 1), V % 2 && (h === "reverse" ? (b = 1 - b, p && (b -= p / a)) : h === "mirror" && (v = o)), M = ce(0, 1, b) * a;
    }
    let S;
    C ? (this.delayState.value = l[0], S = this.delayState) : S = v.next(M), r && !C && (S.value = r(S.value));
    let { done: F } = S;
    !C && u !== null && (F = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && F);
    return D && g !== bt && (S.value = st(l, this.options, y, this.speed)), T && T(S.value), D && this.finish(), S;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ Q(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Q(e);
  }
  get time() {
    return /* @__PURE__ */ Q(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ Z(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return ss((s) => this.generator.next(s).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    n && this.driver && this.updateTime(X.now()), this.playbackSpeed = e, n && this.driver && (this.time = /* @__PURE__ */ Q(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = Ri, startTime: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(X.now()), this.holdTime = this.currentTime;
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
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function _i(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const me = (t) => t * 180 / Math.PI, Tt = (t) => {
  const e = me(Math.atan2(t[1], t[0]));
  return vt(e);
}, Gi = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Tt,
  rotateZ: Tt,
  skewX: (t) => me(Math.atan(t[1])),
  skewY: (t) => me(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, vt = (t) => (t = t % 360, t < 0 && (t += 360), t), un = Tt, cn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), fn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Ui = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: cn,
  scaleY: fn,
  scale: (t) => (cn(t) + fn(t)) / 2,
  rotateX: (t) => vt(me(Math.atan2(t[6], t[5]))),
  rotateY: (t) => vt(me(Math.atan2(-t[2], t[0]))),
  rotateZ: un,
  rotate: un,
  skewX: (t) => me(Math.atan(t[4])),
  skewY: (t) => me(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Mt(t) {
  return t.includes("scale") ? 1 : 0;
}
function xt(t, e) {
  if (!t || t === "none")
    return Mt(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n)
    s = Ui, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = Gi, i = a;
  }
  if (!i)
    return Mt(e);
  const r = s[e], o = i[1].split(",").map(Yi);
  return typeof r == "function" ? r(o) : o[r];
}
const zi = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return xt(n, e);
};
function Yi(t) {
  return parseFloat(t.trim());
}
const Re = [
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
], Ee = /* @__PURE__ */ new Set([...Re, "pathRotation"]), hn = (t) => t === Ae || t === m, qi = /* @__PURE__ */ new Set(["x", "y", "z"]), Xi = Re.filter((t) => !qi.has(t));
function Zi(t) {
  const e = [];
  return Xi.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const ue = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => xt(e, "x"),
  y: (t, { transform: e }) => xt(e, "y")
};
ue.translateX = ue.x;
ue.translateY = ue.y;
const ge = /* @__PURE__ */ new Set();
let St = !1, wt = !1, Vt = !1;
function as() {
  if (wt) {
    const t = Array.from(ge).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = Zi(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([r, o]) => {
        s.getValue(r)?.set(o);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  wt = !1, St = !1, ge.forEach((t) => t.complete(Vt)), ge.clear();
}
function ls() {
  ge.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (wt = !0);
  });
}
function Hi() {
  Vt = !0, ls(), as(), Vt = !1;
}
class Ut {
  constructor(e, n, s, i, r, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ge.add(this), St || (St = !0, ne.read(ls), ne.resolveKeyframes(as))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const r = i?.get(), o = e[e.length - 1];
      if (r !== void 0)
        e[0] = r;
      else if (s && n) {
        const a = s.readValue(n, o);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = o), i && r === void 0 && i.set(e[0]);
    }
    _i(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), ge.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ge.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Ji = (t) => t.startsWith("--");
function us(t, e, n) {
  Ji(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Qi = {};
function cs(t, e) {
  const n = /* @__PURE__ */ Pn(t);
  return () => Qi[e] ?? n();
}
const er = /* @__PURE__ */ cs(() => window.ScrollTimeline !== void 0, "scrollTimeline"), fs = /* @__PURE__ */ cs(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ie = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, dn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ie([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ie([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ie([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ie([0.33, 1.53, 0.69, 0.99])
};
function hs(t, e) {
  if (t)
    return typeof t == "function" ? fs() ? ts(t, e) : "ease-out" : /* @__PURE__ */ Un(t) ? Ie(t) : Array.isArray(t) ? t.map((n) => hs(n, e) || dn.easeOut) : dn[t];
}
function tr(t, e, n, { delay: s = 0, duration: i = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: u } = {}, c = void 0) {
  const l = {
    [e]: n
  };
  u && (l.offset = u);
  const f = hs(a, i);
  Array.isArray(f) && (l.easing = f);
  const h = {
    delay: s,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return c && (h.pseudoElement = c), t.animate(l, h);
}
function zt(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function nr({ type: t, ...e }) {
  return zt(t) && fs() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class ds extends Gt {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
      return;
    const { element: n, name: s, keyframes: i, pseudoElement: r, allowFlatten: o = !1, finalKeyframe: a, onComplete: u } = e;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = e, ie(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const c = nr(e);
    this.animation = tr(n, s, i, c, r), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const l = st(i, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(l), us(n, s, l), this.animation.cancel();
      }
      u?.(), this.notifyFinished();
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
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
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
    const e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Q(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Q(e);
  }
  get time() {
    return /* @__PURE__ */ Q(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Z(e), n && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: s, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && er() ? (this.animation.timeline = e, n && (this.animation.rangeStart = n), s && (this.animation.rangeEnd = s), we) : i(this);
  }
}
const ps = {
  anticipate: Ln,
  backInOut: $n,
  circInOut: jn
};
function sr(t) {
  return t in ps;
}
function ir(t) {
  typeof t.ease == "string" && sr(t.ease) && (t.ease = ps[t.ease]);
}
const ft = 10;
class rr extends ds {
  constructor(e) {
    ir(e), os(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: r, ...o } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new et({
      ...o,
      autoplay: !1
    }), u = Math.max(ft, X.now() - this.startTime), c = ce(0, ft, u - ft), l = a.sample(u).value, { name: f } = this.options;
    r && f && us(r, f, l), n.setWithVelocity(a.sample(Math.max(0, u - c)).value, l, c), a.stop();
  }
}
const pn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ee.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function or(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function ar(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const r = t[t.length - 1], o = pn(i, e), a = pn(r, e);
  return Se(o === a, `You are trying to animate ${e} from "${i}" to "${r}". "${o ? r : i}" is not an animatable value.`, "value-not-animatable"), !o || !a ? !1 : or(t) || (n === "spring" || zt(n)) && s;
}
function At(t) {
  t.duration = 0, t.type = "keyframes";
}
const ms = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), lr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ur(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && lr.test(t[e]))
      return !0;
  return !1;
}
const cr = /* @__PURE__ */ new Set([
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
]), fr = /* @__PURE__ */ Pn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function hr(t) {
  const { motionValue: e, name: n, repeatDelay: s, repeatType: i, damping: r, type: o, keyframes: a } = t, u = e?.owner?.current;
  if (!(u instanceof HTMLElement) && !(u instanceof SVGElement))
    return !1;
  const { onUpdate: c, transformTemplate: l } = e.owner.getProps();
  return fr() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (ms.has(n) || cr.has(n) && ur(a)) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !s && i !== "mirror" && r !== 0 && o !== "inertia";
}
const dr = 40;
class pr extends Gt {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: r = 0, repeatType: o = "loop", keyframes: a, name: u, motionValue: c, element: l, ...f }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = X.now();
    const h = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: r,
      repeatType: o,
      name: u,
      motionValue: c,
      element: l,
      ...f
    }, p = l?.KeyframeResolver || Ut;
    this.keyframeResolver = new p(a, (g, T, y) => this.onKeyframesResolved(g, T, h, !y), u, c, l), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: u, isHandoff: c, onUpdate: l } = s;
    this.resolvedAt = X.now();
    let f = !0;
    ar(e, r, o, a) || (f = !1, (fe.instantAnimations || !u) && l?.(st(e, s, n)), e[0] = e[e.length - 1], At(s), s.repeat = 0);
    const p = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > dr ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...s,
      keyframes: e
    }, g = f && !c && hr(p), T = p.motionValue?.owner?.current;
    let y;
    if (g)
      try {
        y = new rr({
          ...p,
          element: T
        });
      } catch {
        y = new et(p);
      }
    else
      y = new et(p);
    y.finished.then(() => {
      this.notifyFinished();
    }).catch(we), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Hi()), this._animation;
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
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
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
class mr {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((s) => s.attachTimeline(e));
    return () => {
      n.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return mn(this.animations, "duration");
  }
  get iterationDuration() {
    return mn(this.animations, "iterationDuration");
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
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
function mn(t, e) {
  let n = 0;
  for (let s = 0; s < t.length; s++) {
    const i = t[s][e];
    i !== null && i > n && (n = i);
  }
  return n;
}
class gr extends mr {
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
}
const gn = 30, yr = (t) => !isNaN(parseFloat(t));
class br {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      const i = X.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = X.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = yr(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
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
  onChange(e) {
    return process.env.NODE_ENV !== "production" && On(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new kn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), ne.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
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
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
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
    const e = X.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > gn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, gn);
    return /* @__PURE__ */ In(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
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
function xe(t, e) {
  return new br(t, e);
}
function gs(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...s } = t;
    return { ...e, ...s };
  }
  return t;
}
function ys(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? gs(n, t) : n;
}
const Tr = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, vr = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Mr = {
  type: "keyframes",
  duration: 0.8
}, xr = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Sr = (t, { keyframes: e }) => e.length > 2 ? Mr : Ee.has(t) ? t.startsWith("scale") ? vr(e[1]) : Tr : xr, wr = /* @__PURE__ */ new Set([
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
function Vr(t) {
  for (const e in t)
    if (!wr.has(e))
      return !0;
  return !1;
}
const bs = (t, e, n, s = {}, i, r) => (o) => {
  const a = ys(s, t) || {}, u = a.delay || s.delay || 0;
  let { elapsed: c = 0 } = s;
  c = c - /* @__PURE__ */ Z(u);
  const l = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (h) => {
      e.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: r ? void 0 : i
  };
  Vr(a) || Object.assign(l, Sr(t, l)), l.duration && (l.duration = /* @__PURE__ */ Z(l.duration)), l.repeatDelay && (l.repeatDelay = /* @__PURE__ */ Z(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let f = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (At(l), l.delay === 0 && (f = !0)), (fe.instantAnimations || fe.skipAnimations || i?.shouldSkipAnimations || a.skipAnimations) && (f = !0, At(l), l.delay = 0), l.allowFlatten = !a.type && !a.ease, f && !r && e.get() !== void 0) {
    const h = st(l.keyframes, a);
    if (h !== void 0) {
      ne.update(() => {
        l.onUpdate(h), l.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new et(l) : new pr(l);
}, Ar = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Cr(t) {
  const e = Ar.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
const Rr = 4;
function Ts(t, e, n = 1) {
  ie(n <= Rr, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [s, i] = Cr(t);
  if (!s)
    return;
  const r = window.getComputedStyle(e).getPropertyValue(s);
  if (r) {
    const o = r.trim();
    return Fn(o) ? parseFloat(o) : o;
  }
  return $t(i) ? Ts(i, e, n + 1) : i;
}
function yn(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function vs(t, e, n, s) {
  if (typeof e == "function") {
    const [i, r] = yn(s);
    e = e(n !== void 0 ? n : t.custom, i, r);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, r] = yn(s);
    e = e(n !== void 0 ? n : t.custom, i, r);
  }
  return e;
}
function Er(t, e, n) {
  const s = t.getProps();
  return vs(s, e, s.custom, t);
}
const Ms = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Re
]), Fr = (t) => Array.isArray(t);
function Dr(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, xe(n));
}
function Pr(t) {
  return Fr(t) ? t[t.length - 1] || 0 : t;
}
function kr(t, e) {
  const n = Er(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...r } = n || {};
  r = { ...r, ...s };
  for (const o in r) {
    const a = Pr(r[o]);
    Dr(t, o, a);
  }
}
const G = (t) => !!(t && t.getVelocity);
function Ir(t) {
  return !!(G(t) && t.add);
}
function Or(t, e) {
  const n = t.getValue("willChange");
  if (Ir(n))
    return n.add(e);
  if (!n && fe.WillChange) {
    const s = new fe.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
function Yt(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const Br = "framerAppearId", Nr = "data-" + Yt(Br);
function Kr(t) {
  return t.props[Nr];
}
function $r({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function Lr(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: r, transitionEnd: o, ...a } = e;
  const u = t.getDefaultTransition();
  r = r ? gs(r, u) : u;
  const c = r?.reduceMotion, l = r?.skipAnimations;
  s && (r = s);
  const f = [], h = i && t.animationState && t.animationState.getState()[i], p = r?.path;
  p && p.animateVisualElement(t, a, r, n, f);
  for (const g in a) {
    const T = t.getValue(g, t.latestValues[g] ?? null), y = a[g];
    if (y === void 0 || h && $r(h, g))
      continue;
    const d = {
      delay: n,
      ...ys(r || {}, g)
    };
    l && (d.skipAnimations = !0);
    const C = T.get();
    if (C !== void 0 && !T.isAnimating() && !Array.isArray(y) && y === C && !d.velocity) {
      ne.update(() => T.set(y));
      continue;
    }
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const F = Kr(t);
      if (F) {
        const D = window.MotionHandoffAnimation(F, g, ne);
        D !== null && (d.startTime = D, M = !0);
      }
    }
    Or(t, g);
    const v = c ?? t.shouldReduceMotion;
    T.start(bs(g, T, y, v && Ms.has(g) ? { type: !1 } : d, t, M));
    const S = T.animation;
    S && f.push(S);
  }
  if (o) {
    const g = () => ne.update(() => {
      o && kr(t, o);
    });
    f.length ? Promise.all(f).then(g) : g();
  }
  return f;
}
const jr = {
  test: (t) => t === "auto",
  parse: (t) => t
}, xs = (t) => (e) => e.test(t), Ss = [Ae, m, ve, se, ui, li, jr], bn = (t) => Ss.find(xs(t));
function Wr(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Dn(t) : !0;
}
const _r = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Gr(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(Lt) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let r = _r.has(e) ? 1 : 0;
  return s !== n && (r *= 100), e + "(" + r + i + ")";
}
const Ur = /\b([a-z-]*)\(.*?\)/gu, Ct = {
  ...ee,
  getAnimatableNone: (t) => {
    const e = t.match(Ur);
    return e ? e.map(Gr).join(" ") : t;
  }
}, Rt = {
  ...ee,
  getAnimatableNone: (t) => {
    const e = ee.parse(t);
    return ee.createTransformer(t)(e.map((s) => typeof s == "number" ? 0 : typeof s == "object" ? { ...s, alpha: 1 } : s));
  }
}, Tn = {
  ...Ae,
  transform: Math.round
}, zr = {
  rotate: se,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: se,
  rotateX: se,
  rotateY: se,
  rotateZ: se,
  scale: qe,
  scaleX: qe,
  scaleY: qe,
  scaleZ: qe,
  skew: se,
  skewX: se,
  skewY: se,
  distance: m,
  translateX: m,
  translateY: m,
  translateZ: m,
  x: m,
  y: m,
  z: m,
  perspective: m,
  transformPerspective: m,
  opacity: Be,
  originX: sn,
  originY: sn,
  originZ: m
}, tt = {
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
  ...zr,
  zIndex: Tn,
  // SVG
  fillOpacity: Be,
  strokeOpacity: Be,
  numOctaves: Tn
}, Yr = {
  ...tt,
  // Color props
  color: O,
  backgroundColor: O,
  outlineColor: O,
  fill: O,
  stroke: O,
  // Border props
  borderColor: O,
  borderTopColor: O,
  borderRightColor: O,
  borderBottomColor: O,
  borderLeftColor: O,
  filter: Ct,
  WebkitFilter: Ct,
  mask: Rt,
  WebkitMask: Rt
}, ws = (t) => Yr[t], qr = /* @__PURE__ */ new Set([Ct, Rt]);
function Vs(t, e) {
  let n = ws(t);
  return qr.has(n) || (n = ee), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Xr = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Zr(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const r = t[s];
    typeof r == "string" && !Xr.has(r) && Me(r).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const r of e)
      t[r] = Vs(n, i);
}
class Hr extends Ut {
  constructor(e, n, s, i, r) {
    super(e, n, s, i, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let f = e[l];
      if (typeof f == "string" && (f = f.trim(), $t(f))) {
        const h = Ts(f, n.current);
        h !== void 0 && (e[l] = h), l === e.length - 1 && (this.finalKeyframe = f);
      }
    }
    if (this.resolveNoneKeyframes(), !Ms.has(s) || e.length !== 2)
      return;
    const [i, r] = e, o = bn(i), a = bn(r), u = nn(i), c = nn(r);
    if (u !== c && ue[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (hn(o) && hn(a))
        for (let l = 0; l < e.length; l++) {
          const f = e[l];
          typeof f == "string" && (e[l] = parseFloat(f));
        }
      else ue[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      (e[i] === null || Wr(e[i])) && s.push(i);
    s.length && Zr(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ue[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current)
      return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const r = s.length - 1, o = s[r];
    s[r] = ue[n](e.measureViewportBox(), window.getComputedStyle(e.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([a, u]) => {
      e.getValue(a).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Jr = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function As(t, e, n) {
  if (t == null)
    return [];
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let s = document;
    e && (s = e.current);
    const i = n?.[t] ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t).filter((s) => s != null);
}
const Et = (t, e) => e && typeof t == "number" ? e.transform(t) : t, { schedule: Qr } = /* @__PURE__ */ zn(queueMicrotask, !1);
function Cs(t) {
  return Gs(t) && "ownerSVGElement" in t;
}
function eo(t) {
  return Cs(t) && t.tagName === "svg";
}
const to = [...Ss, O, ee], no = (t) => to.find(xs(t)), vn = () => ({ min: 0, max: 0 }), qt = () => ({
  x: vn(),
  y: vn()
}), Ke = /* @__PURE__ */ new WeakMap();
function so(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function io(t) {
  return typeof t == "string" || Array.isArray(t);
}
const ro = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], oo = ["initial", ...ro];
function Rs(t) {
  return so(t.animate) || oo.some((e) => io(t[e]));
}
function ao(t) {
  return !!(Rs(t) || t.variants);
}
function lo(t, e, n) {
  for (const s in e) {
    const i = e[s], r = n[s];
    if (G(i))
      t.addValue(s, i);
    else if (G(r))
      t.addValue(s, xe(i, { owner: t }));
    else if (r !== i)
      if (t.hasValue(s)) {
        const o = t.getValue(s);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = t.getStaticValue(s);
        t.addValue(s, xe(o !== void 0 ? o : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const Ft = { current: null }, Es = { current: !1 }, uo = typeof window < "u";
function co() {
  if (Es.current = !0, !!uo)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ft.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Ft.current = !1;
}
const Mn = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let xn = {};
class Fs {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, skipAnimations: r, blockInitialAnimation: o, visualState: a }, u = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ut, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = X.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, ne.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = r, this.options = u, this.blockInitialAnimation = !!o, this.isControllingVariants = Rs(n), this.isVariantNode = ao(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const g = h[p];
      c[p] !== void 0 && G(g) && g.set(c[p]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        this.values.get(n)?.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
    this.current = e, Ke.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Es.current || co(), this.shouldReduceMotion = Ft.current), process.env.NODE_ENV !== "production" && On(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), pt(this.notifyUpdate), pt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && ms.has(e) && this.current instanceof HTMLElement) {
      const { factory: o, keyframes: a, times: u, ease: c, duration: l } = n.accelerate, f = new ds({
        element: this.current,
        name: e,
        keyframes: a,
        times: u,
        ease: c,
        duration: /* @__PURE__ */ Z(l)
      }), h = o(f);
      this.valueSubscriptions.set(e, () => {
        h(), f.cancel();
      });
      return;
    }
    const s = Ee.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      this.latestValues[e] = o, this.props.onUpdate && ne.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let r;
    typeof window < "u" && window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), r && r();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in xn) {
      const n = xn[e];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const r = this.features[e];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : qt();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Mn.length; s++) {
      const i = Mn[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const r = "on" + i, o = e[r];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = lo(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
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
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = xe(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Fn(s) || Dn(s)) ? s = parseFloat(s) : !no(s) && ee.test(n) && (s = Vs(e, n)), this.setBaseTarget(e, G(s) ? s.get() : s)), G(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const r = vs(this.props, n, this.presenceContext?.custom);
      r && (s = r[e]);
    }
    if (n && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !G(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new kn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Qr.render(this.render);
  }
}
class Ds extends Fs {
  constructor() {
    super(...arguments), this.KeyframeResolver = Hr;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const s = e.style;
    return s ? s[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    G(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function fo({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function ho(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function po(t, e) {
  return fo(ho(t.getBoundingClientRect(), e));
}
const mo = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, go = Re.length;
function yo(t, e, n) {
  let s = "", i = !0;
  for (let o = 0; o < go; o++) {
    const a = Re[o], u = t[a];
    if (u === void 0)
      continue;
    let c = !0;
    if (typeof u == "number")
      c = u === (a.startsWith("scale") ? 1 : 0);
    else {
      const l = parseFloat(u);
      c = a.startsWith("scale") ? l === 1 : l === 0;
    }
    if (!c || n) {
      const l = Et(u, tt[a]);
      if (!c) {
        i = !1;
        const f = mo[a] || a;
        s += `${f}(${l}) `;
      }
      n && (e[a] = l);
    }
  }
  const r = t.pathRotation;
  return r && (i = !1, s += `rotate(${Et(r, tt.pathRotation)}) `), s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function Ps(t, e, n) {
  const { style: s, vars: i, transformOrigin: r } = t;
  let o = !1, a = !1;
  for (const u in e) {
    const c = e[u];
    if (Ee.has(u)) {
      o = !0;
      continue;
    } else if (qn(u)) {
      i[u] = c;
      continue;
    } else {
      const l = Et(c, tt[u]);
      u.startsWith("origin") ? (a = !0, r[u] = l) : s[u] = l;
    }
  }
  if (e.transform || (o || n ? s.transform = yo(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: u = "50%", originY: c = "50%", originZ: l = 0 } = r;
    s.transformOrigin = `${u} ${c} ${l}`;
  }
}
function ks(t, { style: e, vars: n }, s, i) {
  const r = t.style;
  let o;
  for (o in e)
    r[o] = e[o];
  i?.applyProjectionStyles(r, s);
  for (o in n)
    r.setProperty(o, n[o]);
}
function Sn(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Pe = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (m.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Sn(t, e.target.x), s = Sn(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, bo = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = ee.parse(t);
    if (i.length > 5)
      return s;
    const r = ee.createTransformer(t), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, u = n.y.scale * e.y;
    i[0 + o] /= a, i[1 + o] /= u;
    const c = Ce(a, u, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), r(i);
  }
}, To = {
  borderRadius: {
    ...Pe,
    applyTo: [...Jr]
  },
  borderTopLeftRadius: Pe,
  borderTopRightRadius: Pe,
  borderBottomLeftRadius: Pe,
  borderBottomRightRadius: Pe,
  boxShadow: bo
};
function vo(t, { layout: e, layoutId: n }) {
  return Ee.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!To[t] || t === "opacity");
}
function Is(t, e, n) {
  const s = t.style, i = e?.style, r = {};
  if (!s)
    return r;
  for (const o in s)
    (G(s[o]) || i && G(i[o]) || vo(o, t) || n?.getValue(o)?.liveStyle !== void 0) && (r[o] = s[o]);
  return r;
}
function Mo(t) {
  return window.getComputedStyle(t);
}
class xo extends Ds {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ks;
  }
  mount(e) {
    ie(!!e.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(e);
  }
  readValueFromInstance(e, n) {
    if (Ee.has(n))
      return this.projection?.isProjecting ? Mt(n) : zi(e, n);
    {
      const s = Mo(e), i = (qn(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return po(e, n);
  }
  build(e, n, s) {
    Ps(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Is(e, n, s);
  }
}
function So(t, e) {
  return t in e;
}
class wo extends Fs {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, n) {
    if (So(n, e)) {
      const s = e[n];
      if (typeof s == "string" || typeof s == "number")
        return s;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return qt();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const Vo = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Ao = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Co(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const r = i ? Vo : Ao;
  t[r.offset] = `${-s}`, t[r.array] = `${e} ${n}`;
}
const Ro = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Eo(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  pathLength: i,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, u, c, l) {
  if (Ps(t, a, c), u) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: f, style: h } = t;
  f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = l?.transformBox ?? "fill-box", delete f.transformBox);
  for (const p of Ro)
    f[p] !== void 0 && (h[p] = f[p], delete f[p]);
  e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), i !== void 0 && Co(f, i, r, o, !1);
}
const Os = /* @__PURE__ */ new Set([
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
]), Fo = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Do(t, e, n, s) {
  ks(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(Os.has(i) ? i : Yt(i), e.attrs[i]);
}
function Po(t, e, n) {
  const s = Is(t, e, n);
  for (const i in t)
    if (G(t[i]) || G(e[i])) {
      const r = Re.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[r] = t[i];
    }
  return s;
}
class ko extends Ds {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = qt;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Ee.has(n)) {
      const s = ws(n);
      return s && s.default || 0;
    }
    return n = Os.has(n) ? n : Yt(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Po(e, n, s);
  }
  build(e, n, s) {
    Eo(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    Do(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Fo(e.tagName), super.mount(e);
  }
}
function Io(t, e, n) {
  const s = G(t) ? t : xe(t);
  return s.start(bs("", s, e, n)), s.animation;
}
function Xt(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Bs(t, e, n, s) {
  return t == null ? [] : typeof t == "string" && Xt(e) ? As(t, n, s) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t.filter((i) => i != null) : [t];
}
function Oo(t, e, n) {
  return t * (e + 1) + n * e;
}
function wn(t, e, n, s) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : s.get(e) ?? t;
}
function Bo(t, e, n) {
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    i.at > e && i.at < n && (kt(t, i), s--);
  }
}
function No(t, e, n, s, i, r) {
  Bo(t, i, r);
  for (let o = 0; o < e.length; o++)
    t.push({
      value: e[o],
      at: Ce(i, r, s[o]),
      easing: /* @__PURE__ */ Gn(n, o)
    });
}
function Ko(t, e, n = 0) {
  const s = e + 1 + e * n;
  for (let i = 0; i < t.length; i++)
    t[i] = t[i] / s;
}
function $o(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const Lo = "easeInOut", ht = 20;
function jo(t, { defaultTransition: e = {}, ...n } = {}, s, i) {
  const r = e.duration || 0.3, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), u = {}, c = /* @__PURE__ */ new Map();
  let l = 0, f = 0, h = 0;
  for (let p = 0; p < t.length; p++) {
    const g = t[p];
    if (typeof g == "string") {
      c.set(g, f);
      continue;
    } else if (!Array.isArray(g)) {
      c.set(g.name, wn(f, g.at, l, c));
      continue;
    }
    let [T, y, d = {}] = g;
    d.at !== void 0 && (f = wn(f, d.at, l, c));
    let C = 0;
    const M = (v, S, F, D = 0, x = 0) => {
      const V = Wo(v), { delay: b = 0, times: E = rs(V), type: K = e.type || "keyframes", repeat: R, repeatType: _, repeatDelay: J = 0, ...H } = S;
      let { ease: U = e.ease || "easeOut", duration: j } = S;
      const re = typeof b == "function" ? b(D, x) : b, te = V.length, Le = zt(K) ? K : i?.[K || "keyframes"];
      if (te <= 2 && Le) {
        let A = 100;
        if (te === 2 && Uo(V)) {
          const Y = V[1] - V[0];
          A = Math.abs(Y);
        }
        const I = {
          ...e,
          ...H
        };
        j !== void 0 && (I.duration = /* @__PURE__ */ Z(j));
        const z = ns(I, A, Le);
        U = z.ease, j = z.duration;
      }
      j ?? (j = r);
      const oe = f + re;
      E.length === 1 && E[0] === 0 && (E[1] = 1);
      const je = E.length - V.length;
      if (je > 0 && is(E, je), V.length === 1 && V.unshift(null), R && Se(R < ht, `Sequence segments can't repeat ${R} times — ignoring repeat option. Use a value below ${ht} or apply repeat at the sequence level instead.`), R && R < ht) {
        const A = j > 0 ? J / j : 0;
        j = Oo(j, R, J);
        const I = [...V], z = [...E];
        U = Array.isArray(U) ? [...U] : [U];
        const Y = [...U], B = _ === "reverse" || _ === "mirror";
        let he = I, _e = Y;
        B && (he = [...I].reverse(), _ === "reverse" && (_e = [...Y].reverse().map(($) => typeof $ == "function" ? /* @__PURE__ */ Bt($) : $)));
        for (let $ = 0; $ < R; $++) {
          const de = B && $ % 2 === 0, Ge = de ? he : I, Ue = de ? _e : Y, Fe = ($ + 1) * (1 + A);
          A > 0 && (V.push(V[V.length - 1]), E.push(Fe), U.push("linear")), V.push(...Ge);
          for (let ae = 0; ae < Ge.length; ae++)
            E.push(z[ae] + Fe), U.push(ae === 0 ? "linear" : /* @__PURE__ */ Gn(Ue, ae - 1));
        }
        Ko(E, R, A);
      }
      const We = oe + j;
      No(F, V, U, E, oe, We), C = Math.max(re + j, C), h = Math.max(We, h);
    };
    if (G(T)) {
      const v = Vn(T, a);
      M(y, d, An("default", v));
    } else {
      const v = Bs(T, y, s, u), S = v.length;
      for (let F = 0; F < S; F++) {
        y = y, d = d;
        const D = v[F], x = Vn(D, a);
        for (const V in y)
          M(y[V], _o(d, V), An(V, x), F, S);
      }
    }
    l = f, f += C;
  }
  return a.forEach((p, g) => {
    for (const T in p) {
      const y = p[T];
      y.sort($o);
      const d = [], C = [], M = [];
      for (let D = 0; D < y.length; D++) {
        const { at: x, value: V, easing: b } = y[D];
        d.push(V), C.push(/* @__PURE__ */ Ot(0, h, x)), M.push(b || "easeOut");
      }
      C[0] !== 0 && (C.unshift(0), d.unshift(d[0]), M.unshift(Lo)), C[C.length - 1] !== 1 && (C.push(1), d.push(null)), o.has(g) || o.set(g, {
        keyframes: {},
        transition: {}
      });
      const v = o.get(g);
      v.keyframes[T] = d;
      const { type: S, ...F } = e;
      v.transition[T] = {
        ...F,
        duration: h,
        ease: M,
        times: C,
        ...n
      };
    }
  }), o;
}
function Vn(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function An(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Wo(t) {
  return Array.isArray(t) ? t : [t];
}
function _o(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Go = (t) => typeof t == "number", Uo = (t) => t.every(Go);
function zo(t) {
  const e = {
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
  }, n = Cs(t) && !eo(t) ? new ko(e) : new xo(e);
  n.mount(t), Ke.set(t, n);
}
function Yo(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, n = new wo(e);
  n.mount(t), Ke.set(t, n);
}
function qo(t, e) {
  return G(t) || typeof t == "number" || typeof t == "string" && !Xt(e);
}
function Ns(t, e, n, s) {
  const i = [];
  if (qo(t, e))
    i.push(Io(t, Xt(e) && e.default || e, n && (n.default || n)));
  else {
    if (t == null)
      return i;
    const r = Bs(t, e, s), o = r.length;
    ie(!!o, "No valid elements provided.", "no-valid-elements");
    for (let a = 0; a < o; a++) {
      const u = r[a], c = u instanceof Element ? zo : Yo;
      Ke.has(u) || c(u);
      const l = Ke.get(u), f = { ...n };
      "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, o)), i.push(...Lr(l, { ...e, transition: f }, {}));
    }
  }
  return i;
}
function Xo(t, e, n) {
  const s = [], i = t.map((o) => {
    if (Array.isArray(o) && typeof o[0] == "function") {
      const a = o[0], u = xe(0);
      return u.on("change", a), o.length === 1 ? [u, [0, 1]] : o.length === 2 ? [u, [0, 1], o[1]] : [u, o[1], o[2]];
    }
    return o;
  });
  return jo(i, e, n, { spring: Ne }).forEach(({ keyframes: o, transition: a }, u) => {
    s.push(...Ns(u, o, a));
  }), s;
}
function Zo(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Ho(t = {}) {
  const { scope: e, reduceMotion: n, skipAnimations: s } = t;
  function i(r, o, a) {
    let u = [], c;
    const l = {};
    if (n !== void 0 && (l.reduceMotion = n), s !== void 0 && (l.skipAnimations = s), Zo(r)) {
      const { onComplete: h, ...p } = o || {};
      typeof h == "function" && (c = h), u = Xo(r, { ...l, ...p }, e);
    } else {
      const { onComplete: h, ...p } = a || {};
      typeof h == "function" && (c = h), u = Ns(r, o, { ...l, ...p }, e);
    }
    const f = new gr(u);
    return c && f.finished.then(c), e && (e.animations.push(f), f.finished.then(() => {
      kt(e.animations, f);
    })), f;
  }
  return i;
}
const Jo = Ho(), Qo = {
  some: 0,
  all: 1
};
function ea(t, e, { root: n, margin: s, amount: i = "some" } = {}) {
  const r = As(t), o = /* @__PURE__ */ new WeakMap(), a = (c) => {
    c.forEach((l) => {
      const f = o.get(l.target);
      if (l.isIntersecting !== !!f)
        if (l.isIntersecting) {
          const h = e(l.target, l);
          typeof h == "function" ? o.set(l.target, h) : u.unobserve(l.target);
        } else typeof f == "function" && (f(l), o.delete(l.target));
    });
  }, u = new IntersectionObserver(a, {
    root: n,
    rootMargin: s,
    threshold: typeof i == "number" ? i : Qo[i]
  });
  return r.forEach((c) => u.observe(c)), () => u.disconnect();
}
function ta(t, { root: e, margin: n, amount: s, once: i = !1, initial: r = !1 } = {}) {
  const [o, a] = N.useState(r);
  return N.useEffect(() => {
    if (!t.current || i && o)
      return;
    const u = () => (a(!0), i ? void 0 : () => a(!1)), c = {
      root: e && e.current || void 0,
      margin: n,
      amount: s
    };
    return ea(t.current, u, c);
  }, [e, t, n, i, s]), o;
}
const Te = 1.2, na = 0.07, sa = [
  [1e12, "T"],
  [1e9, "B"],
  [1e6, "M"],
  [1e3, "K"]
], ke = { display: "inline-block", height: `${Te}em`, lineHeight: `${Te}em` }, ia = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0
}, Cn = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Dt = (t) => Math.min(1, Math.max(0, t)), Xe = (t, e, n) => {
  const s = Dt((n - t) / (e - t));
  return s * s * (3 - 2 * s);
}, nt = (t) => (t % 10 + 10) % 10, Ks = (t) => {
  const e = Math.log(Math.min(0.5, Math.max(1e-3, t))), n = -e / Math.sqrt(Math.PI * Math.PI + e * e), s = Math.PI / 0.52, i = s / Math.sqrt(1 - n * n), r = (a) => 1 - Math.exp(-n * i * a) * (Math.cos(s * a) + n * i / s * Math.sin(s * a)), o = 1 - r(1);
  return (a) => a >= 1 ? 1 : r(a) + o * a * a * a;
}, Rn = {
  linear: (t) => t,
  easeOut: /* @__PURE__ */ Ve(0.33, 1, 0.68, 1),
  expo: (t) => t >= 1 ? 1 : (1 - Math.pow(2, -10 * t)) / (1 - Math.pow(2, -10)),
  spring: Ks(0.06)
}, En = (t) => {
  const e = t.toString();
  if (e.includes(".")) {
    const n = e.split(".")[1];
    if (parseInt(n) !== 0)
      return n.length;
  }
  return 0;
}, ra = (t) => sa.find(([e]) => Math.abs(t) >= e * 0.9995) || [1, ""], $s = (t, e, n, s) => {
  if (!e) return { size: 1, label: "", digits: s };
  const [i, r] = ra(t), o = n ?? (r ? Math.abs(t) / i < 100 ? 1 : 0 : s);
  return { size: i, label: r, digits: o };
}, Pt = (t, e, n) => {
  const s = (Math.abs(t) / n).toFixed(e), [i, r = ""] = s.split(".");
  return { negative: t < 0 && Number(s) !== 0, int: i, frac: r };
}, oa = (t, e) => e ? t.replace(/\B(?=(\d{3})+(?!\d))/g, e) : t, aa = (t, e, n, { compact: s, decimals: i, places: r, separator: o }) => {
  const { size: a, label: u, digits: c } = $s(e, s, i, r), l = Pt(t, c, a), f = Pt(e, c, a), h = Math.max(l.int.length, f.int.length), p = [], g = [];
  (l.negative || f.negative) && p.push({ char: "-", enter: !l.negative, leave: !f.negative });
  const T = (d, C) => {
    if (C < 0) return Number(d.frac[-C - 1]);
    const M = d.int.length - 1 - C;
    return M >= 0 ? Number(d.int[M]) : null;
  };
  for (let d = h - 1; d >= -c; d--) {
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
  const y = n || e >= t;
  return g.forEach((d, C) => {
    const M = g.length - 1 - C, v = y ? nt(d.to - d.from) : -nt(d.from - d.to), S = n ? Math.max(1, 3 - M) : Math.min(Math.floor(Math.abs(e - t) / (a * 10 ** (d.place + 1))), Math.max(0, 3 - M));
    d.delta = v + (y ? 10 : -10) * S;
  }), { slots: p, columns: g, label: u };
};
function ua({
  to: t,
  from: e = 0,
  direction: n = "up",
  delay: s = 0,
  duration: i = 2,
  className: r = "",
  style: o,
  startWhen: a = !0,
  separator: u = "",
  prefix: c = "",
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
  const M = N.useRef(null), v = N.useRef(null), S = N.useRef([]), F = N.useRef([]), D = N.useId().replace(/[^\w-]/g, ""), x = n === "down" ? t : e, V = n === "down" ? e : t, b = N.useRef(x), E = N.useRef(!1), K = N.useRef(!1), [R, _] = N.useState(null), J = ta(M, { once: !0, margin: "0px" }), H = T === "load" || J, U = g === "compact", j = p ?? Math.max(En(e), En(t)), re = N.useCallback(
    (A) => {
      const { size: I, label: z, digits: Y } = $s(A, U, p, j), B = Pt(A, Y, I), he = `${B.negative ? "-" : ""}${oa(B.int, u)}${B.frac ? `.${B.frac}` : ""}`;
      return `${c}${he}${z}${l}`;
    },
    [U, p, j, u, c, l]
  ), te = N.useMemo(() => {
    if (f !== "roll") return null;
    const A = R ? R.from : x, I = R ? R.to : V;
    return aa(A, I, !!R?.spin, { compact: U, decimals: p, places: j, separator: u });
  }, [f, R, x, V, U, p, j, u]), [Le] = N.useState(() => re(x)), oe = N.useRef(null);
  Cn(() => {
    oe.current = {
      formatValue: re,
      onStart: d,
      onEnd: C,
      model: te,
      mode: f,
      easing: h,
      duration: Math.max(0, i),
      delay: s
    };
  }), Cn(() => {
    E.current || (b.current = x), f === "count" && !K.current && v.current && (v.current.textContent = re(b.current));
  }, [f, x, re]), N.useEffect(() => {
    !H || !a || (E.current = !0, _((A) => ({
      id: (A?.id || 0) + 1,
      from: b.current,
      to: V,
      spin: !1,
      wait: !0
    })));
  }, [H, a, V]), N.useEffect(() => {
    if (!R) return;
    const A = oe.current, I = Rn[A.easing] || Rn.easeOut, z = A.duration, Y = ($) => z > 0 ? Dt($ / z) : 1;
    let B;
    if (A.mode === "roll" && A.model && M.current) {
      const { columns: $, slots: de } = A.model, Ge = parseFloat(getComputedStyle(M.current).fontSize) || 16, Ue = Te * Ge, Fe = $.length > 1 ? Math.min(na, z * 0.4 / ($.length - 1)) : 0, ae = Math.max(1e-3, z - Fe * ($.length - 1)), Zt = $.map((P) => {
        const q = S.current[P.slot], w = q?.firstChild;
        return {
          ...P,
          box: q,
          strip: w,
          blur: F.current[P.index],
          cells: w ? Array.from(w.childNodes, (W) => W.firstChild) : [],
          width: q ? q.scrollWidth : 0,
          ease: A.easing === "spring" ? Ks(Math.min(0.12, Math.max(0.01, 0.35 / Math.max(1, Math.abs(P.delta))))) : I,
          base: Math.floor(P.from),
          sigma: 0,
          presence: P.enter ? 0 : 1
        };
      }), Ls = de.map((P, q) => ({ ...P, node: S.current[q] })).filter((P) => P.char !== void 0 && P.node && (P.enter || P.leave || P.follow !== void 0)).map((P) => ({ ...P, width: P.node.scrollWidth })), it = (P, q, w, W) => {
        P && (P.style.width = W ? "" : `${(w * q).toFixed(2)}px`, P.style.opacity = W ? "" : w.toFixed(3));
      };
      B = (P) => {
        Zt.forEach((w, W) => {
          if (!w.strip) return;
          const le = Dt((P - W * Fe) / ae), Ht = w.from + w.delta * w.ease(le), ze = Math.floor(Ht);
          ze !== w.base && (w.base = ze, w.cells.forEach((Jt, Ws) => {
            Jt && (Jt.nodeValue = String(nt(ze + Ws - 1)));
          })), w.strip.style.transform = `translateY(${(-(1 + Ht - ze) * Te).toFixed(4)}em)`;
          const rt = Math.max(0, le - 4e-3), ot = Math.min(1, le + 4e-3), js = ot > rt ? Math.abs(w.delta) * Math.abs(w.ease(ot) - w.ease(rt)) / (ot - rt) / ae : 0, De = le > 0 && le < 1 ? Math.min(Ue * 0.05, js * Ue / 600) : 0;
          (Math.abs(De - w.sigma) > 0.05 || De === 0 && w.sigma !== 0) && (w.sigma = De, De > 0.2 && w.blur ? (w.blur.setAttribute("stdDeviation", `0 ${De.toFixed(2)}`), w.strip.style.filter = `url(#${D}-${W})`) : w.strip.style.filter = ""), (w.enter || w.leave) && (w.presence = w.enter ? Xe(0, 0.45, le) : 1 - Xe(0.55, 1, le), it(w.box, w.width, w.presence, w.enter && le >= 1));
        });
        const q = Y(P);
        Ls.forEach((w) => {
          if (w.follow !== void 0) {
            const W = Zt[w.follow];
            W && (W.enter || W.leave) && it(w.node, w.width, W.presence, W.enter && W.presence >= 1);
          } else {
            const W = w.enter ? Xe(0, 0.3, q) : 1 - Xe(0.7, 1, q);
            it(w.node, w.width, W, !!w.enter && q >= 1);
          }
        }), b.current = R.from + (R.to - R.from) * I(q);
      };
    } else
      B = ($) => {
        const de = R.from + (R.to - R.from) * I(Y($));
        b.current = de, v.current && (v.current.textContent = oe.current.formatValue(de));
      };
    K.current = !0, typeof A.onStart == "function" && A.onStart();
    const he = () => {
      B(1 / 0), b.current = R.to, K.current = !1, typeof oe.current.onEnd == "function" && oe.current.onEnd();
    };
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      he();
      return;
    }
    const _e = Jo(0, z, {
      duration: z,
      delay: R.wait ? A.delay : 0,
      ease: "linear",
      onUpdate: B,
      onComplete: he
    });
    return () => {
      _e.stop(), K.current = !1;
    };
  }, [R, D]);
  const je = () => {
    !y || K.current || !E.current || _(
      (A) => f === "roll" ? { id: (A?.id || 0) + 1, from: b.current, to: b.current, spin: !0 } : { id: (A?.id || 0) + 1, from: x, to: V, spin: !1 }
    );
  }, We = re(R ? R.to : V);
  return /* @__PURE__ */ L.jsx(
    "span",
    {
      className: r,
      ref: M,
      style: { fontVariantNumeric: "tabular-nums", ...o },
      onPointerEnter: y ? je : void 0,
      children: te ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
        /* @__PURE__ */ L.jsxs(
          "span",
          {
            "aria-hidden": "true",
            style: { display: "inline-flex", whiteSpace: "pre", userSelect: "none" },
            children: [
              c && /* @__PURE__ */ L.jsx("span", { style: ke, children: c }),
              te.slots.map((A, I) => {
                const Y = (A.char !== void 0 ? A.enter || A.follow !== void 0 && te.columns[A.follow].enter : A.enter) ? { width: 0, opacity: 0 } : null;
                return A.char !== void 0 ? /* @__PURE__ */ L.jsx(
                  "span",
                  {
                    ref: (B) => {
                      S.current[I] = B;
                    },
                    style: { ...ke, overflow: "hidden", ...Y },
                    children: A.char
                  },
                  I
                ) : /* @__PURE__ */ L.jsx(
                  "span",
                  {
                    ref: (B) => {
                      S.current[I] = B;
                    },
                    style: { ...ke, position: "relative", overflow: "hidden", ...Y },
                    children: /* @__PURE__ */ L.jsx(
                      "span",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          transform: `translateY(${-Te}em)`
                        },
                        children: [-1, 0, 1, 2].map((B) => /* @__PURE__ */ L.jsx("span", { style: { height: `${Te}em` }, children: nt(A.from + B) }, B))
                      }
                    )
                  },
                  I
                );
              }),
              te.label && /* @__PURE__ */ L.jsx("span", { style: ke, children: te.label }),
              l && /* @__PURE__ */ L.jsx("span", { style: ke, children: l })
            ]
          },
          `roll-${R?.id || 0}`
        ),
        /* @__PURE__ */ L.jsx("span", { style: ia, children: We }),
        /* @__PURE__ */ L.jsx("svg", { "aria-hidden": "true", width: "0", height: "0", style: { position: "absolute" }, children: /* @__PURE__ */ L.jsx("defs", { children: te.columns.map((A) => /* @__PURE__ */ L.jsx(
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
                ref: (I) => {
                  F.current[A.index] = I;
                },
                stdDeviation: "0 0"
              }
            )
          },
          A.index
        )) }) })
      ] }) : /* @__PURE__ */ L.jsx("span", { ref: v, children: Le }, "count")
    }
  );
}
export {
  ua as default
};
