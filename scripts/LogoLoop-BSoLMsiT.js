import { r as A, j as C } from "./components-entry-C10ZmzsQ.js";
const Re = typeof window > "u" ? A.useEffect : A.useLayoutEffect, Ce = 0.25, Ae = 0.8, je = 6, Ee = 4e3, Ie = 0.7, Se = 0.45, ke = Math.sqrt(Math.PI) / 2, w = (n, g, l) => Math.min(l, Math.max(g, n)), ye = (n) => typeof n == "number" ? `${n}px` : n ?? void 0, $e = (n) => {
  const g = Math.abs(n), l = 1 / (1 + 0.3275911 * g), b = 1 - ((((1.061405429 * l - 1.453152027) * l + 1.421413741) * l - 0.284496736) * l + 0.254829592) * l * Math.exp(-g * g);
  return n < 0 ? -b : b;
}, Fe = (n) => n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2, Ue = (n) => 1 - Math.pow(1 - n, 3), Pe = (n) => n * n * n * (n * (n * 6 - 15) + 10), Ne = (n, g) => {
  const l = w(n, 0, 0.5) * 100;
  if (l <= 0) return;
  const b = [];
  for (let u = 0; u <= 12; u++)
    b.push(`rgba(0,0,0,${Pe(u / 12).toFixed(4)}) ${(l * u / 12).toFixed(3)}%`);
  for (let u = 12; u >= 0; u--)
    b.push(`rgba(0,0,0,${Pe(u / 12).toFixed(4)}) ${(100 - l * u / 12).toFixed(3)}%`);
  return `linear-gradient(${g ? "to bottom" : "to right"}, ${b.join(", ")})`;
}, Oe = (n, g) => {
  const l = n * Math.PI / 180, b = g * Math.PI / 180, u = Math.cos(l), e = Math.sin(l), j = Math.cos(b), _ = Math.sin(b);
  return [j, 0, _, e * _, u, -e * j, -u * _, e, u * j];
}, be = (n, g, l, b) => {
  const u = n[8] * g - n[2] * l - n[5] * b;
  if (u <= 1e-6) return null;
  const e = n[8] * g / u;
  if (e <= 0) return null;
  const j = e * l, _ = e * b, X = g * (1 - e);
  return [n[0] * j + n[3] * _ + n[6] * X, n[1] * j + n[4] * _ + n[7] * X];
}, Te = (n, g, l, b) => {
  const u = g / (g - (n[6] * l + n[7] * b));
  return [(n[0] * l + n[1] * b) * u, (n[3] * l + n[4] * b) * u];
}, De = (n, g, l, b) => {
  const u = typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null, e = {
    offset: 0,
    velocity: 0,
    period: 0,
    length: 0,
    box: [0, 0],
    items: [],
    snaps: [],
    pitch: 0,
    crossMax: 0,
    sizeMax: 0,
    tipMax: 0,
    geo: null,
    layout: { copies: 2, primary: 0 },
    hovered: !1,
    focused: !1,
    pointer: null,
    pointerInside: !1,
    mag: 0,
    magU: 0,
    magReady: !1,
    drag: null,
    glide: !1,
    suppressUntil: 0,
    pressedAt: -1e9,
    move: null,
    hold: 0,
    seek: null,
    scrollVel: 0,
    scrollY: window.scrollY,
    scrollT: 0,
    visible: typeof IntersectionObserver > "u",
    introStart: -1,
    introDone: !l.current.intro,
    itemMode: !1,
    active: null,
    raf: 0,
    last: 0,
    reduced: !!u?.matches,
    destroyed: !1
  }, j = () => {
    const t = [];
    Array.from(g.children).forEach((o, s) => {
      Array.from(o.children).forEach((a, r) => {
        t.push({
          el: a,
          copy: s,
          index: r,
          content: a.children[0] || null,
          tip: a.children[1] || null,
          center: 0,
          size: 0,
          cross: 0,
          t: "",
          o: "",
          v: "",
          z: "",
          s: "",
          p: ""
        });
      });
    }), e.items = t, e.active = null;
  }, _ = () => {
    for (const t of e.items)
      t.el.style.transform = "", t.el.style.opacity = "", t.el.style.visibility = "", t.el.style.zIndex = "", t.content && (t.content.style.transform = ""), t.tip && (t.tip.style.transform = ""), t.t = t.o = t.v = t.z = t.s = t.p = "";
  }, X = () => {
    const t = l.current, o = e.length, s = e.period, a = e.crossMax, r = e.sizeMax, d = w(t.bend, -1, 1), i = {
      mode: t.layout,
      shift: 0,
      uMin: -o / 2 - r,
      uMax: o / 2 + r,
      lead: 0,
      focus: w(t.focus, 0, 1) * 0.9,
      focusSigma: Math.max(40, o * 0.18),
      magnify: w(t.magnify, 0, 1),
      magSigma: Math.max(a * 1.4, e.pitch * 1.1),
      amp: 0,
      k: 0,
      R: 0,
      sign: 1,
      limit: 0,
      C: 0,
      alpha: 0,
      depth: 0,
      pf: 1,
      tilted: !1,
      tiltX: 0,
      tiltY: 0,
      m: [1, 0, 0, 0, 1, 0, 0, 0, 1],
      persp: 0
    };
    let c = t.scaleOnHover ? a * 0.1 : 0;
    const m = (1 + i.focus) * (1 + i.magnify) - 1;
    if (i.mode === "wave")
      i.amp = d * (a * 0.6 + o * 0.035), i.k = 2 * Math.PI / Math.max(1, o / 1.25), c += Math.abs(i.amp) + m * a / 2 + a * 0.08;
    else if (i.mode === "arc" && Math.abs(d) > 5e-3) {
      const h = Math.abs(d) * (Math.PI / 4), T = o / 2 / Math.sin(h), E = T * (1 - Math.cos(h));
      i.R = T, i.sign = Math.sign(d), i.shift = E / 2, i.limit = Math.PI * 0.6;
      const p = T * Math.min(Math.PI / 2, Math.asin(Math.min(1, (o / 2 + r) / T))) + r;
      i.uMin = -p, i.uMax = p, c += E / 2 + r / 2 * Math.sin(h) + m * a / 2;
    } else if (i.mode === "orbit") {
      const h = Math.max(40, o * 0.43 - r * 0.2), T = Math.max(1, Math.round(2 * Math.PI * h / s)), E = Math.sign(d) * Math.atan2(Math.abs(d) * Math.max(a * 2, h * 0.36), h), p = h * 5, L = p / (p - h * Math.cos(E)), $ = p / (p + h * Math.cos(E)), I = h * Math.sin(E) * L, k = -h * Math.sin(E) * $, F = (1 + m) * (t.scaleOnHover ? 1.2 : 1), D = Math.min(I - a * L * F / 2, k - a * $ / 2), ae = Math.max(I + a * L * F / 2, k + a * $ / 2);
      i.R = h, i.C = T * s, i.alpha = E, i.depth = p, i.pf = L, i.shift = (D + ae) / 2, i.uMin = -i.C / 2, i.uMax = i.C / 2, c = Math.max(0, (ae - D) / 2 - a / 2);
    } else
      c += m * a / 2;
    t.labels === "hover" && (c += t.vertical ? e.tipMax : a * 0.2 + Math.max(11, a * 0.26) * 1.3);
    const f = w(t.tiltX, -60, 60), v = w(t.tiltY, -60, 60);
    if (Math.abs(f) > 0.01 || Math.abs(v) > 0.01) {
      i.tilted = !0, i.tiltX = f, i.tiltY = v, i.m = Oe(f, v), i.persp = Math.max(o, 480) * 1.3;
      const h = o / 2 + r, T = (I) => {
        const k = t.vertical ? be(i.m, i.persp, 0, I) : be(i.m, i.persp, I, 0);
        return k ? w(t.vertical ? k[1] : k[0], -o * 4, o * 4) : Math.sign(I) * o * 4;
      }, E = T(-h), p = T(h);
      i.uMin = Math.min(i.uMin, E, p) - r, i.uMax = Math.max(i.uMax, E, p) + r;
      const L = a / 2 + c;
      let $ = L;
      for (const I of [E, p, 0])
        for (const k of [-L, L]) {
          const F = t.vertical ? Te(i.m, i.persp, k, I) : Te(i.m, i.persp, I, k);
          $ = Math.max($, Math.abs(t.vertical ? F[0] : F[1]));
        }
      c = $ - a / 2;
    }
    const y = t.links ? 2 : 0;
    i.lead = (Math.max(0, Math.ceil((-i.uMin - o / 2) / s)) + y) * s;
    const z = Math.max(2, Math.ceil((i.uMax + o / 2 + i.lead) / s) + 2 + (y ? 1 : 0)), M = Math.min(z - 1, Math.floor((i.lead + o / 2) / s));
    e.geo = i, n.style.setProperty("--logoloop-pad", `${Math.ceil(c)}px`), n.style.perspective = i.tilted ? `${i.persp}px` : "", g.style.transformOrigin = i.tilted ? t.vertical ? `50% ${o / 2}px` : `${o / 2}px 50%` : "", (z !== e.layout.copies || M !== e.layout.primary) && (e.layout = { copies: z, primary: M }, b(e.layout));
  }, ie = () => {
    const t = l.current, o = g.children;
    if (!o.length || !e.items.length) {
      e.period = 0;
      return;
    }
    if (t.vertical) {
      const M = n.parentElement?.clientHeight ?? 0;
      M > 0 && n.style.height !== `${Math.ceil(M)}px` && (n.style.height = `${Math.ceil(M)}px`);
    } else n.style.height && (n.style.height = "");
    g.style.transform = "none", _();
    const s = n.getBoundingClientRect(), a = n.offsetWidth && s.width / n.offsetWidth || 1, r = g.getBoundingClientRect(), d = t.vertical ? r.top : r.left;
    let i = 0, c = 0, m = 0;
    for (const M of e.items) {
      const h = M.el.getBoundingClientRect();
      M.center = ((t.vertical ? h.top + h.height / 2 : h.left + h.width / 2) - d) / a, M.size = (t.vertical ? h.height : h.width) / a, M.cross = (t.vertical ? h.width : h.height) / a, i = Math.max(i, M.cross), c = Math.max(c, M.size), M.tip && M.copy === 0 && (m = Math.max(m, M.tip.offsetWidth));
    }
    const f = o[0].getBoundingClientRect(), v = o[1] ? o[1].getBoundingClientRect() : null;
    e.period = (v ? t.vertical ? v.top - f.top : v.left - f.left : t.vertical ? f.height : f.width) / a;
    const y = getComputedStyle(n);
    e.box = [n.offsetWidth, n.offsetHeight], e.length = t.vertical ? n.clientHeight - parseFloat(y.paddingTop) - parseFloat(y.paddingBottom) : n.clientWidth - parseFloat(y.paddingLeft) - parseFloat(y.paddingRight), e.crossMax = i, e.sizeMax = c, e.tipMax = m + i * 0.25;
    const z = e.items.filter((M) => M.copy === 0);
    e.pitch = z.length ? e.period / z.length : e.period, e.snaps = z.map((M) => M.center), e.itemMode = !1, !(e.period <= 0) && X();
  }, G = () => {
    const t = e.geo;
    if (!e.pointer || !t) return null;
    const o = l.current;
    let s = e.pointer[0] - e.box[0] / 2, a = e.pointer[1] - e.box[1] / 2;
    if (t.tilted) {
      const d = be(t.m, t.persp, s, a);
      if (!d) return null;
      s = d[0], a = d[1];
    }
    const r = o.vertical ? a : s;
    return t.mode === "arc" && t.R ? t.R * Math.asin(w(r / t.R, -1, 1)) : t.mode === "orbit" ? Math.asin(w(r / (t.R * t.pf), -1, 1)) : r;
  }, re = (t, o) => {
    const s = e.period, a = e.length / 2 + (e.geo?.lead ?? 0);
    let r = null;
    for (const d of e.snaps) {
      const i = d - a, c = o > 0 ? i + s * Math.ceil((t + 0.5 - i) / s) : i + s * Math.floor((t - 0.5 - i) / s);
      (r === null || (o > 0 ? c < r : c > r)) && (r = c);
    }
    return r ?? t;
  }, ce = (t) => {
    const o = e.period, s = e.length / 2 + (e.geo?.lead ?? 0);
    let a = t, r = 1 / 0;
    for (const d of e.snaps) {
      const i = d - s, c = i + o * Math.round((t - i) / o);
      Math.abs(c - t) < r && (r = Math.abs(c - t), a = c);
    }
    return a;
  }, K = (t, o) => {
    e.move = { from: e.offset, delta: t - e.offset, t: 0, dur: o };
  }, ee = (t) => {
    const o = e.pitch / Math.max(1, Math.abs(t)), s = w(o * 0.55, 0.35, 0.9);
    return { move: s, hold: Math.max(0.35, o - s) };
  }, U = (t, o, s, a, r) => {
    t[o] !== a && (t[o] = a, r.style[s] = a);
  }, te = (t) => {
    const o = l.current, s = e.geo, a = e.length, r = a / 2, d = -e.offset - s.lead, i = o.vertical ? `translate3d(0px, ${d.toFixed(2)}px, 0px)` : `translate3d(${d.toFixed(2)}px, 0px, 0px)`;
    g.style.transform = s.tilted ? `rotateX(${s.tiltX}deg) rotateY(${s.tiltY}deg) ${i}` : i;
    const c = e.introStart >= 0, m = c ? (t - e.introStart) / 1e3 : 0, f = s.mode === "orbit" ? w(o.focus, 0, 1) * 0.9 : s.focus, v = s.magnify * e.mag, y = v > 0 && e.mag > 0.5 && s.mode !== "orbit", z = o.focus > 0 || o.step || y, M = s.mode !== "line" || f > 0 || v > 5e-4 || c;
    if (!M && e.itemMode && _(), e.itemMode = M, !M && !z) {
      e.active && (e.active.el.removeAttribute("data-active"), e.active = null);
      return;
    }
    let h = null, T = 1 / 0;
    for (const p of e.items) {
      const L = d + p.center - r;
      let $ = L, I = 0, k = 0, F = 1, D = 1, ae = "", H = !1, Me = Math.abs(L);
      if (s.mode === "orbit")
        if (L < -s.C / 2 || L >= s.C / 2)
          H = !0;
        else {
          const x = 2 * Math.PI * L / s.C, W = s.R * Math.cos(x), S = s.depth / (s.depth - W * Math.cos(s.alpha));
          if ($ = s.R * Math.sin(x) * S, I = W * Math.sin(s.alpha) * S - s.shift, F = S, f > 0 && (F *= 1 + f * Math.exp(-((x / 0.55) ** 2))), v > 0) {
            const ze = s.magSigma * 2 * Math.PI / s.C;
            F *= 1 + v * Math.max(0, Math.cos(x)) * Math.exp(-(((x - e.magU) / ze) ** 2));
          }
          const xe = (Math.cos(x) + 1) / 2;
          D = 0.25 + 0.75 * xe * xe, ae = String(Math.round(xe * 1e3)), Me = Math.cos(x) > 0 ? Math.abs(x) * s.R : 1 / 0;
        }
      else {
        let x = L;
        if (f > 0) {
          const S = x / s.focusSigma;
          F *= 1 + f * Math.exp(-S * S), D *= 1 - 0.45 * f * (1 - Math.exp(-((L / (s.focusSigma * 1.8)) ** 2))), x += f * s.focusSigma * ke * $e(S);
        }
        const W = Math.abs(x - e.magU);
        if (v > 0) {
          const S = (x - e.magU) / s.magSigma;
          F *= 1 + v * Math.exp(-S * S), x += v * s.magSigma * ke * $e(S);
        }
        if ($ = x, s.mode === "wave")
          I = s.amp * Math.sin(s.k * x), k = Math.atan(s.amp * s.k * Math.cos(s.k * x)) * 90 / Math.PI;
        else if (s.mode === "arc" && s.R) {
          const S = x / s.R;
          Math.abs(S) > s.limit && (H = !0), $ = s.R * Math.sin(S), I = s.sign * (s.R * (1 - Math.cos(S)) - s.shift), k = s.sign * S * 180 / Math.PI;
        }
        Me = y ? W : Math.abs($);
      }
      if (c && !H) {
        const x = w(($ + r) / Math.max(1, a), 0, 1), W = Ue(w((m - x * Se) / Ie, 0, 1));
        D *= W, I += (1 - W) * 14;
      }
      if (z && !H && Me < T && (T = Me, h = p), !M) continue;
      const Le = $ - L, _e = H ? "" : `${o.vertical ? `translate3d(${I.toFixed(2)}px, ${Le.toFixed(2)}px, 0px)` : `translate3d(${Le.toFixed(2)}px, ${I.toFixed(2)}px, 0px)`}${k ? ` rotate(${(o.vertical ? -k : k).toFixed(2)}deg)` : ""}`;
      if (U(p, "t", "transform", _e, p.el), U(p, "o", "opacity", H ? "0" : D > 0.999 ? "" : D.toFixed(3), p.el), U(p, "v", "visibility", H ? "hidden" : "", p.el), U(p, "z", "zIndex", ae, p.el), p.content && U(p, "s", "transform", Math.abs(F - 1) < 5e-4 ? "" : `scale(${F.toFixed(4)})`, p.content), p.tip) {
        const x = (F - 1) * p.cross / 2;
        U(
          p,
          "p",
          "transform",
          Math.abs(x) < 0.05 ? "" : o.vertical ? `translateX(${x.toFixed(2)}px)` : `translateY(${x.toFixed(2)}px)`,
          p.tip
        );
      }
    }
    const E = h && T < Math.max(h.size, e.pitch) / 2 + 1 ? h : null;
    E !== e.active && (e.active?.el.removeAttribute("data-active"), E?.el.setAttribute("data-active", ""), e.active = E);
  }, se = (t) => {
    if (e.raf = 0, e.destroyed || !e.geo || e.period <= 0) return;
    const o = l.current, s = e.last ? w((t - e.last) / 1e3, 0, 0.1) : 0;
    e.last = t;
    const a = e.period;
    let r = !1;
    e.introStart === -1 && !e.introDone && e.visible && (o.intro && !e.reduced ? e.introStart = t : e.introDone = !0, n.removeAttribute("data-intro")), e.introStart >= 0 && ((t - e.introStart) / 1e3 >= Ie + Se ? (e.introStart = -2, e.introDone = !0) : r = !0);
    const d = Math.sign(o.speed) || 1, i = e.focused || e.hovered && o.hoverValue !== void 0, c = e.focused ? 0 : o.hoverValue ?? 0;
    let m = e.reduced ? 0 : i ? c * d * o.dirSign : o.speed * o.dirSign;
    if (o.scrollBoost > 0 && !e.reduced && (e.scrollVel *= Math.exp(-s / 0.18), Math.abs(e.scrollVel) > 1 && (r = !0), m += w(e.scrollVel * o.scrollBoost, -3e3, 3e3) * d * o.dirSign), e.drag?.active)
      r = !0;
    else if (e.seek)
      e.seek.t = Math.min(1, e.seek.t + s / e.seek.dur), e.offset = e.seek.from + e.seek.delta * Fe(e.seek.t), e.velocity = 0, e.seek.t >= 1 && (e.seek = null), r = !0;
    else if (e.move)
      e.move.t = Math.min(1, e.move.t + s / e.move.dur), e.offset = e.move.from + e.move.delta * Fe(e.move.t), e.velocity = 0, r = !0, e.move.t >= 1 && (e.move = null, e.hold = ee(i ? c : o.speed).hold);
    else if (o.step && !e.reduced) {
      const y = i ? c : o.speed;
      if (e.velocity = 0, y && (r = !0, e.hold -= s, e.hold <= 0)) {
        const z = Math.sign(y) * o.dirSign;
        K(re(e.offset, z), ee(y).move);
      }
    } else {
      const y = e.glide ? Ae : Ce;
      e.velocity += (m - e.velocity) * (1 - Math.exp(-s / y)), e.glide && Math.abs(e.velocity - m) < 2 && (e.glide = !1), Math.abs(e.velocity - m) < 0.01 && (e.velocity = m), e.offset += e.velocity * s, (e.velocity !== 0 || m !== 0) && (r = !0);
    }
    if (!e.focused && !e.seek && !e.drag?.active) {
      const y = (e.offset % a + a) % a;
      e.move && (e.move.from += y - e.offset), e.offset = y;
    }
    const f = o.magnify > 0 && e.pointerInside && !e.reduced ? 1 : 0;
    e.mag !== f && (e.mag += (f - e.mag) * (1 - Math.exp(-s / (f ? 0.12 : 0.25))), Math.abs(f - e.mag) < 2e-3 && (e.mag = f), r = !0);
    const v = e.mag > 0 ? G() : null;
    if (v !== null) {
      e.magReady || (e.magU = v, e.magReady = !0);
      const y = e.magU + (v - e.magU) * (1 - Math.exp(-s / 0.06));
      Math.abs(y - v) > 0.05 && (r = !0), e.magU = Math.abs(y - v) > 0.05 ? y : v;
    } else e.mag === 0 && (e.magReady = !1);
    te(t), r && e.visible && !e.destroyed && (e.raf = requestAnimationFrame(se));
  }, R = () => {
    e.raf || e.destroyed || !e.visible || (e.last = 0, e.raf = requestAnimationFrame(se));
  }, P = (t) => {
    const o = n.getBoundingClientRect(), s = n.offsetWidth && o.width / n.offsetWidth || 1;
    return [(t.clientX - o.left) / s, (t.clientY - o.top) / s];
  }, le = () => {
    const t = e.geo;
    if (!t) return 1;
    if (t.mode === "orbit") return t.C / (2 * Math.PI * t.R * t.pf);
    const o = G();
    if (o === null || t.focus <= 0) return 1;
    const s = o / t.focusSigma;
    return 1 / (1 + t.focus * Math.exp(-s * s));
  }, de = (t) => {
    e.hovered = !0, t.pointerType !== "touch" && (e.pointerInside = !0, e.pointer = P(t)), R();
  }, ne = () => {
    e.hovered = !1, e.pointerInside = !1, R();
  }, Q = (t) => {
    if (e.pressedAt = performance.now(), !l.current.draggable || t.pointerType === "mouse" && t.button !== 0) return;
    const [o, s] = P(t);
    t.pointerType !== "touch" && (e.pointer = [o, s]), e.drag = { id: t.pointerId, x: o, y: s, active: !1, samples: [], scale: le(), anchor: 0, offset: 0 };
  }, fe = (t) => {
    const o = l.current;
    t.pointerType !== "touch" && (e.pointer = P(t), e.pointerInside = !0);
    const s = e.drag;
    if (s && t.pointerId === s.id) {
      const [a, r] = P(t), d = o.vertical ? r - s.y : a - s.x, i = o.vertical ? a - s.x : r - s.y;
      if (!s.active) {
        if (Math.abs(d) < je) return R();
        if (Math.abs(i) > Math.abs(d))
          return e.drag = null, R();
        s.active = !0, s.anchor = d, s.offset = e.offset, e.move = null, e.seek = null, e.glide = !1, e.velocity = 0;
        try {
          n.setPointerCapture(t.pointerId);
        } catch {
        }
        n.setAttribute("data-dragging", "");
      }
      const c = s.offset - (d - s.anchor) * s.scale, m = e.period || 1;
      e.offset = (c % m + m) % m, s.offset += e.offset - c;
      const f = performance.now();
      for (s.samples.push([f, d]); s.samples.length > 2 && f - s.samples[0][0] > 100; ) s.samples.shift();
    }
    R();
  }, he = (t, o) => {
    const s = e.drag;
    if (!s || t.pointerId !== s.id || (e.drag = null, !s.active)) return;
    n.removeAttribute("data-dragging");
    try {
      n.releasePointerCapture(t.pointerId);
    } catch {
    }
    const a = l.current, r = performance.now();
    e.suppressUntil = r + 400;
    let d = 0;
    const i = s.samples;
    if (!o && i.length > 1) {
      const [c, m] = i[0], [f, v] = i[i.length - 1];
      f > c && r - f < 80 && (d = w(-(v - m) / (f - c) * 1e3 * s.scale, -Ee, Ee));
    }
    if (a.step && !e.reduced) {
      const c = ce(e.offset + d * 0.35);
      K(c, w(0.3 + Math.abs(c - e.offset) / 1800, 0.3, 0.8)), e.velocity = 0;
    } else
      e.velocity = d, e.glide = Math.abs(d) > 30;
    R();
  }, pe = (t) => he(t, !1), B = (t) => he(t, !0), oe = (t) => {
    performance.now() < e.suppressUntil && (t.preventDefault(), t.stopPropagation(), e.suppressUntil = 0);
  }, Y = (t) => {
    l.current.draggable && t.preventDefault();
  }, Z = (t) => {
    const o = t.target;
    if (performance.now() - e.pressedAt < 800) return;
    e.focused = !0;
    const s = e.items.find((a) => a.el.contains(o));
    if (s && e.geo) {
      const a = -e.offset - e.geo.lead + s.center - e.length / 2, r = e.geo.mode === "orbit" ? 1 : Math.max(0, e.length / 2 - s.size);
      Math.abs(a) > r && (e.move = null, e.seek = { from: e.offset, delta: a, t: 0, dur: w(0.35 + Math.abs(a) / 2e3, 0.35, 0.8) });
    }
    R();
  }, J = (t) => {
    n.contains(t.relatedTarget) || (e.focused = !1, R());
  }, ue = () => {
    (n.scrollLeft || n.scrollTop) && (n.scrollLeft = 0, n.scrollTop = 0);
  }, ge = () => {
    const t = performance.now(), o = window.scrollY;
    if (e.scrollT && t > e.scrollT) {
      const s = (o - e.scrollY) / (t - e.scrollT) * 1e3;
      e.scrollVel += (w(s, -6e3, 6e3) - e.scrollVel) * 0.5;
    }
    e.scrollY = o, e.scrollT = t, l.current.scrollBoost > 0 && R();
  }, N = () => {
    e.reduced = !!u?.matches, R();
  };
  n.addEventListener("pointerenter", de), n.addEventListener("pointerleave", ne), n.addEventListener("pointerdown", Q), n.addEventListener("pointermove", fe), n.addEventListener("pointerup", pe), n.addEventListener("pointercancel", B), n.addEventListener("lostpointercapture", B), n.addEventListener("click", oe, !0), n.addEventListener("dragstart", Y), n.addEventListener("focusin", Z), n.addEventListener("focusout", J), n.addEventListener("scroll", ue), window.addEventListener("scroll", ge, { passive: !0 }), u?.addEventListener?.("change", N);
  let V = null;
  const me = /* @__PURE__ */ new Set(), q = () => {
    if (j(), ie(), V) {
      const t = g.children[0];
      for (const o of [n, t])
        o && !me.has(o) && (V.observe(o), me.add(o));
    }
    e.last = 0, e.raf && cancelAnimationFrame(e.raf), e.raf = 0, e.geo && e.period > 0 && se(performance.now());
  };
  typeof ResizeObserver < "u" ? V = new ResizeObserver(() => {
    ie(), e.geo && e.period > 0 && te(performance.now()), R();
  }) : window.addEventListener("resize", q);
  let O = null;
  typeof IntersectionObserver < "u" && (O = new IntersectionObserver(
    (t) => {
      const o = t[t.length - 1];
      e.visible = o.isIntersecting, e.visible && R();
    },
    { threshold: 0.1 }
  ), O.observe(n));
  const ve = () => {
    document.hidden || R();
  };
  return document.addEventListener("visibilitychange", ve), { refresh: q, wake: R, destroy: () => {
    e.destroyed = !0, e.raf && cancelAnimationFrame(e.raf), n.removeEventListener("pointerenter", de), n.removeEventListener("pointerleave", ne), n.removeEventListener("pointerdown", Q), n.removeEventListener("pointermove", fe), n.removeEventListener("pointerup", pe), n.removeEventListener("pointercancel", B), n.removeEventListener("lostpointercapture", B), n.removeEventListener("click", oe, !0), n.removeEventListener("dragstart", Y), n.removeEventListener("focusin", Z), n.removeEventListener("focusout", J), n.removeEventListener("scroll", ue), window.removeEventListener("scroll", ge), window.removeEventListener("resize", q), document.removeEventListener("visibilitychange", ve), u?.removeEventListener?.("change", N), V?.disconnect(), O?.disconnect();
  }, state: e };
}, Be = A.memo(
  ({
    logos: n,
    speed: g = 120,
    direction: l = "left",
    width: b = "100%",
    logoHeight: u = 28,
    gap: e = 32,
    pauseOnHover: j,
    hoverSpeed: _,
    fadeOut: X = !0,
    fadeOutWidth: ie = 0.12,
    scaleOnHover: G = !1,
    layout: re = "line",
    bend: ce = 0.5,
    focus: K = 0,
    magnify: ee = 0,
    tiltX: U = 0,
    tiltY: te = 0,
    step: se = !1,
    muted: R = 0,
    labels: P = "none",
    draggable: le = !0,
    scrollBoost: de = 0,
    intro: ne = !0,
    renderItem: Q,
    ariaLabel: fe = "Partner logos",
    className: he,
    style: pe
  }) => {
    const B = A.useRef(null), oe = A.useRef(null), Y = A.useRef(null), [{ copies: Z, primary: J }, ue] = A.useState({ copies: 3, primary: 1 }), [ge] = A.useState(ne), N = l === "up" || l === "down", V = A.useRef(null);
    V.current = {
      speed: g,
      dirSign: (N ? l === "up" : l !== "right") ? 1 : -1,
      hoverValue: _ !== void 0 ? _ : j === !1 ? void 0 : 0,
      vertical: N,
      layout: re,
      bend: ce,
      focus: K,
      magnify: ee,
      tiltX: U,
      tiltY: te,
      step: se,
      draggable: le,
      scrollBoost: de,
      intro: ne,
      scaleOnHover: G,
      labels: P,
      links: n.some((t) => t.href)
    }, Re(() => {
      const t = De(B.current, oe.current, V, ue);
      return Y.current = t, () => {
        t.destroy(), Y.current = null;
      };
    }, []), Re(() => {
      Y.current?.refresh();
    }, [
      Z,
      J,
      n,
      N,
      u,
      e,
      P,
      re,
      ce,
      K,
      ee,
      U,
      te,
      G
    ]), A.useEffect(() => {
      Y.current?.wake();
    });
    const me = A.useMemo(
      () => Array.from({ length: Z }, (t, o) => {
        const s = o === J;
        return /* @__PURE__ */ C.jsx("ul", { className: "logoloop__list", role: "list", "aria-hidden": s ? void 0 : !0, children: n.map((a, r) => {
          const d = `${o}-${r}`, i = "node" in a, c = Q ? Q(a, d) : i ? /* @__PURE__ */ C.jsx("span", { className: "logoloop__node", "aria-hidden": !!a.href && !a.ariaLabel, children: a.node }) : /* @__PURE__ */ C.jsx(
            "img",
            {
              src: a.src,
              srcSet: a.srcSet,
              sizes: a.sizes,
              width: a.width,
              height: a.height,
              alt: a.alt ?? "",
              title: a.title,
              loading: "lazy",
              decoding: "async",
              draggable: !1
            }
          ), m = (P === "inline" || P === "below") && a.title ? a.title : null, f = /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
            c,
            m && /* @__PURE__ */ C.jsx("span", { className: "logoloop__label", "aria-hidden": !i && !!a.alt, children: m })
          ] }), v = i ? a.ariaLabel ?? a.title : a.alt ?? a.title;
          return /* @__PURE__ */ C.jsxs(
            "li",
            {
              className: "logoloop__item",
              role: "listitem",
              "data-color": a.hoverColor ? "" : void 0,
              style: a.hoverColor ? { "--logoloop-item-color": a.hoverColor } : void 0,
              children: [
                a.href ? /* @__PURE__ */ C.jsx(
                  "a",
                  {
                    className: "logoloop__content",
                    href: a.href,
                    "aria-label": v || "logo link",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    draggable: !1,
                    tabIndex: s ? void 0 : -1,
                    children: f
                  }
                ) : /* @__PURE__ */ C.jsx("div", { className: "logoloop__content", children: f }),
                P === "hover" && a.title && /* @__PURE__ */ C.jsx("span", { className: "logoloop__tip", "aria-hidden": "true", children: a.title })
              ]
            },
            d
          );
        }) }, o);
      }),
      [Z, J, n, Q, P]
    ), q = X ? Ne(ie, N) : void 0, O = w(R, 0, 1), ve = {
      width: N ? ye(b) === "100%" ? void 0 : ye(b) : ye(b) ?? "100%",
      "--logoloop-gap": `${e}px`,
      "--logoloop-logoHeight": `${u}px`,
      ...O > 0 && {
        "--logoloop-gray": Math.min(1, O * 2).toFixed(3),
        "--logoloop-dim": (1 - O * 0.6).toFixed(3)
      },
      ...q && { WebkitMaskImage: q, maskImage: q },
      ...pe
    }, we = [
      "logoloop",
      N ? "logoloop--vertical" : "logoloop--horizontal",
      G && "logoloop--scale-hover",
      he
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ C.jsx(
      "div",
      {
        ref: B,
        className: we,
        style: ve,
        role: "region",
        "aria-label": fe,
        "data-intro": ge ? "" : void 0,
        "data-draggable": le ? "" : void 0,
        "data-muted": O > 0 ? "" : void 0,
        "data-labels": P !== "none" ? P : void 0,
        children: /* @__PURE__ */ C.jsx("div", { className: "logoloop__track", ref: oe, children: me })
      }
    );
  }
);
Be.displayName = "LogoLoop";
export {
  Be as LogoLoop,
  Be as default
};
