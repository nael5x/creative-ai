import { r as X, j as st } from "./components-entry-DM4gR148.js";
const Tt = 24e5, Pe = 31.5, H = 256, ct = ["#5227FF", "#FF9FFC", "#B497CF"], lt = { capsule: 0, sphere: 1, box: 2, tetrahedron: 3 }, ut = { conic: 0, radial: 1, random: 2 }, Pt = `#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aParticle;
layout(location = 2) in vec4 aSeed;
uniform vec2 uSize;
uniform float uPixel;
uniform vec2 uCursor;
uniform float uRing;
uniform float uBand;
uniform float uParticle;
uniform float uAmbient;
uniform float uTime;
uniform float uPulse;
uniform float uVariance;
uniform float uDepth;
uniform float uShape;
uniform float uColorMode;
uniform float uStops;
uniform float uHue;
uniform float uReveal;
uniform float uStreak;
uniform float uCharge;
out vec2 vLocal;
out vec2 vBounds;
out float vU;
out float vAlpha;
out float vSoft;

void main() {
  vec2 rel = aParticle.xy - uCursor;
  float dist = length(rel);
  vec2 radial = dist > 1e-3 ? rel / dist : vec2(1.0, 0.0);
  vec2 dir = radial;
  float speed = length(aParticle.zw);
  float streak = clamp(speed / uStreak, 0.0, 2.5);
  if (speed > 1e-3) {
    vec2 heading = aParticle.zw / speed * sign(dot(aParticle.zw, radial) + 1e-4);
    dir = normalize(mix(radial, heading, smoothstep(0.0, 1.0, streak)));
  }
  float ring = exp(-pow((dist - uRing) / uBand, 2.0));
  float z = aSeed.x;
  float depth = 1.0 + z * 0.32 * uDepth;
  float pulse = 1.0 + sin(uTime * uPulse + aSeed.y) * 0.22 * uVariance;
  float grow = uAmbient + (1.0 - uAmbient) * ring;
  float size = uParticle * depth * pulse * (0.85 + 0.3 * aSeed.w) * (1.0 + uCharge * 0.25 * ring);
  vec2 bounds;
  if (uShape < 0.5) {
    float width = size * 0.17 * mix(0.55, 1.0, ring);
    bounds = vec2(max(width, size * 0.5 * grow) * (1.0 + streak * 1.2), width);
  } else if (uShape < 1.5) {
    bounds = vec2(size * 0.22 * mix(0.45, 1.0, grow));
  } else {
    bounds = vec2(size * 0.26 * mix(0.45, 1.0, grow));
  }
  float soft = 1.0 + max(-z, 0.0) * 1.6 * uDepth;
  vec2 local = aCorner * (bounds + soft * 1.5 / uPixel);
  vec2 world = aParticle.xy + dir * local.x + vec2(-dir.y, dir.x) * local.y;
  gl_Position = vec4(world.x / uSize.x * 2.0 - 1.0, 1.0 - world.y / uSize.y * 2.0, 0.0, 1.0);
  vLocal = local * uPixel;
  vBounds = bounds * uPixel;
  vSoft = soft;
  if (uColorMode < 0.5) {
    vU = atan(radial.y, radial.x) / 6.28318530718 + uHue + (aSeed.z - 0.5) * 0.06;
  } else if (uColorMode < 1.5) {
    vU = clamp(dist / (uRing * 2.4), 0.0, 1.0) + (aSeed.z - 0.5) * 0.06;
  } else {
    vU = floor(aSeed.z * uStops) / max(uStops - 1.0, 1.0);
  }
  float fog = 1.0 - max(-z, 0.0) * 0.35 * uDepth;
  vAlpha = mix(uAmbient, 1.0, ring) * fog * uReveal;
}`, Ft = `#version 300 es
precision highp float;
uniform sampler2D uPalette;
uniform float uShape;
uniform float uColorMode;
uniform float uOpacity;
in vec2 vLocal;
in vec2 vBounds;
in float vU;
in float vAlpha;
in float vSoft;
out vec4 fragColor;

void main() {
  vec2 p = vLocal;
  float d;
  if (uShape < 0.5) {
    float r = vBounds.y;
    d = length(vec2(max(abs(p.x) - max(vBounds.x - r, 0.0), 0.0), p.y)) - r;
  } else if (uShape < 1.5) {
    d = length(p) - vBounds.x;
  } else if (uShape < 2.5) {
    float r = vBounds.x * 0.28;
    vec2 q = abs(p) - (vBounds - r);
    d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  } else {
    float r = vBounds.x * 1.15;
    vec2 q = vec2(r * 0.5774 - p.x, abs(p.y));
    d = max(dot(q, vec2(0.5, 0.8660254)) - r * 0.5, -q.x - r * 0.5) * 1.2;
  }
  float alpha = clamp(0.5 - d / vSoft, 0.0, 1.0) * vAlpha * uOpacity;
  if (alpha < 0.002) discard;
  vec3 color = texture(uPalette, vec2(uColorMode < 0.5 ? fract(vU) : vU, uColorMode < 0.5 ? 0.25 : 0.75)).rgb;
  fragColor = vec4(color * alpha, alpha);
}`, T = (n, c, s) => Math.min(s, Math.max(c, n)), _t = (n) => {
  const c = String(n || "").trim(), s = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(c);
  if (s) {
    const A = s[1].length === 3 ? s[1].replace(/./g, (h) => h + h) : s[1];
    return [0, 2, 4].map((h) => parseInt(A.slice(h, h + 2), 16) / 255);
  }
  const a = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(c);
  return a ? [a[1], a[2], a[3]].map((A) => T(parseFloat(A) / 255, 0, 1)) : null;
}, Bt = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), Lt = (n) => n <= 31308e-7 ? n * 12.92 : 1.055 * Math.pow(Math.max(n, 0), 1 / 2.4) - 0.055, ft = (n) => {
  const [c, s, a] = n.map(Bt), A = Math.cbrt(0.4122214708 * c + 0.5363325363 * s + 0.0514459929 * a), h = Math.cbrt(0.2119034982 * c + 0.6806995451 * s + 0.1073969566 * a), y = Math.cbrt(0.0883024619 * c + 0.2817188376 * s + 0.6299787005 * a);
  return [
    0.2104542553 * A + 0.793617785 * h - 0.0040720468 * y,
    1.9779984951 * A - 2.428592205 * h + 0.4505937099 * y,
    0.0259040371 * A + 0.7827717662 * h - 0.808675766 * y
  ];
}, Ut = ([n, c, s]) => {
  const a = Math.pow(n + 0.3963377774 * c + 0.2158037573 * s, 3), A = Math.pow(n - 0.1055613458 * c - 0.0638541728 * s, 3), h = Math.pow(n - 0.0894841775 * c - 1.291485548 * s, 3);
  return [
    4.0767416621 * a - 3.3077115913 * A + 0.2309699292 * h,
    -1.2684380046 * a + 2.6097574011 * A - 0.3413193965 * h,
    -0.0041960863 * a - 0.7034186147 * A + 1.707614701 * h
  ].map((y) => T(Lt(y), 0, 1));
}, Ct = (n, c) => {
  const s = [];
  n.forEach((h) => {
    const y = _t(h);
    if (!y) return;
    const x = ft(y), C = Math.atan2(x[2], x[1]) * 180 / Math.PI, S = T(1 - Math.abs(C - 85) / 40, 0, 1), _ = 0.62 + 0.14 * S * S * (3 - 2 * S);
    if (c && x[0] > _) {
      const P = 1 + (x[0] - _) * 1.6;
      s.push([_, x[1] * P, x[2] * P]);
    } else
      s.push(x);
  }), s.length || s.push(ft(c ? [0.1, 0.1, 0.12] : [1, 1, 1]));
  const a = new Uint8Array(H * 2 * 4);
  return [[...s, s[0]], s.length > 1 ? s : [s[0], s[0]]].forEach((h, y) => {
    for (let x = 0; x < H; x++) {
      const C = x / (H - (y === 0 ? 0 : 1)) * (h.length - 1), S = Math.min(Math.floor(C), h.length - 2), _ = C - S, P = _ * _ * (3 - 2 * _), F = h[S], D = h[S + 1], he = Math.hypot(F[1], F[2]) * (1 - P) + Math.hypot(D[1], D[2]) * P, J = F[1] + (D[1] - F[1]) * P, Q = F[2] + (D[2] - F[2]) * P, ee = Math.hypot(J, Q), te = ee > 1e-4 ? he / ee : 0, me = Ut([F[0] + (D[0] - F[0]) * P, J * te, Q * te]);
      for (let Y = 0; Y < 3; Y++)
        a[(y * H + x) * 4 + Y] = Math.round(me[Y] * 255);
      a[(y * H + x) * 4 + 3] = 255;
    }
  }), a;
}, Dt = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let c = Math.imul(n ^ n >>> 15, 1 | n);
  return c = c + Math.imul(c ^ c >>> 7, 61 | c) ^ c, ((c ^ c >>> 14) >>> 0) / 4294967296;
}, dt = (n, c, s) => {
  const a = n.createShader(c);
  return a ? (n.shaderSource(a, s), n.compileShader(a), n.getShaderParameter(a, n.COMPILE_STATUS) ? a : (console.error(n.getShaderInfoLog(a)), n.deleteShader(a), null)) : null;
}, It = (n) => {
  const c = dt(n, n.VERTEX_SHADER, Pt), s = dt(n, n.FRAGMENT_SHADER, Ft), a = c && s ? n.createProgram() : null;
  if (!c || !s || !a)
    return c && n.deleteShader(c), s && n.deleteShader(s), null;
  if (n.attachShader(a, c), n.attachShader(a, s), n.linkProgram(a), n.deleteShader(c), n.deleteShader(s), !n.getProgramParameter(a, n.LINK_STATUS))
    return console.error(n.getProgramInfoLog(a)), n.deleteProgram(a), null;
  const A = {}, h = n.getProgramParameter(a, n.ACTIVE_UNIFORMS);
  for (let y = 0; y < h; y++) {
    const x = n.getActiveUniform(a, y);
    x && (A[x.name] = n.getUniformLocation(a, x.name));
  }
  return { program: a, uniforms: A };
}, Ot = ({
  count: n = 1500,
  magnetRadius: c = 9,
  ringRadius: s = 7,
  waveSpeed: a = 0.4,
  waveAmplitude: A = 1,
  waveCount: h = 3,
  particleSize: y = 0.9,
  lerpSpeed: x = 0.05,
  color: C,
  colors: S = ct,
  colorMode: _ = "conic",
  colorSpeed: P = 0.05,
  autoAnimate: F = !0,
  particleVariance: D = 1,
  rotationSpeed: he = 0,
  depthFactor: J = 1,
  pulseSpeed: Q = 3,
  particleShape: ee = "capsule",
  fieldStrength: te = 10,
  ambient: me = 0.25,
  interactive: Y = !0,
  clickBurst: ht = !0,
  intro: mt = !0,
  lightMode: Fe = !1,
  opacity: pt = 1,
  maxDevicePixelRatio: vt = 2,
  className: _e = "",
  style: xt
}) => {
  const Be = X.useRef(null), Le = X.useRef(null), pe = X.useRef(null), [Ue, yt] = X.useState(0), Ce = C ? [C] : Array.isArray(S) && S.length ? S : ct, De = {
    count: T(Math.round(n), 1, 2e4),
    magnet: Math.max(0, c),
    ring: Math.max(0, s),
    waveSpeed: a,
    waveAmplitude: Math.max(0, A),
    waveCount: Math.max(0, Math.round(h)),
    size: Math.max(0, y),
    follow: T(x, 1e-3, 1),
    palette: Ce,
    paletteKey: `${Ce.join(",")}|${Fe}`,
    colorMode: ut[_] ?? ut.conic,
    colorSpeed: P,
    autoAnimate: F,
    variance: Math.max(0, D),
    rotation: he,
    depth: Math.max(0, J),
    pulse: Q,
    shape: lt[ee] ?? lt.capsule,
    tightness: Math.max(0, te),
    ambient: T(me, 0, 1),
    interactive: Y,
    clickBurst: ht,
    intro: mt,
    light: Fe,
    opacity: T(pt, 0, 1),
    maxRatio: T(vt, 0.5, 3)
  }, k = X.useRef(De);
  return k.current = De, X.useEffect(() => {
    pe.current?.();
  }), X.useEffect(() => {
    const W = Be.current, b = Le.current;
    if (!W || !b) return;
    const e = b.getContext("webgl2", {
      alpha: !0,
      premultipliedAlpha: !0,
      antialias: !1,
      depth: !1,
      stencil: !1,
      powerPreference: "high-performance"
    }), ne = e ? It(e) : null;
    if (!e || !ne) return;
    const j = window.matchMedia("(prefers-reduced-motion: reduce)").matches, ve = e.createVertexArray();
    e.bindVertexArray(ve);
    const Ie = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, Ie), e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), e.STATIC_DRAW), e.enableVertexAttribArray(0), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, 0);
    const oe = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, oe), e.enableVertexAttribArray(1), e.vertexAttribPointer(1, 4, e.FLOAT, !1, 0, 0), e.vertexAttribDivisor(1, 1);
    const xe = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, xe), e.enableVertexAttribArray(2), e.vertexAttribPointer(2, 4, e.FLOAT, !1, 0, 0), e.vertexAttribDivisor(2, 1);
    const re = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, re), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
    const M = { width: 1, height: 1, ratio: 1 }, f = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, ready: !1 }, p = { x: 0, y: 0, inside: !1, down: !1, moved: -1 / 0 };
    let R = null, ze = "", I = 0, Oe = 0, L = 0, N = k.current.intro && !j && Ue === 0 ? 0 : 1 / 0, z = 0, ae = 0, ye = !0, Ae = document.visibilityState !== "hidden", ge = !1;
    const At = (t) => {
      t.paletteKey !== ze && (ze = t.paletteKey, e.bindTexture(e.TEXTURE_2D, re), e.texImage2D(
        e.TEXTURE_2D,
        0,
        e.RGBA8,
        H,
        2,
        0,
        e.RGBA,
        e.UNSIGNED_BYTE,
        Ct(t.palette, t.light)
      ));
    }, gt = (t, o, i, m) => {
      const v = Dt(1337), g = 0.06, l = o * (1 + g * 2), V = i * (1 + g * 2), B = Math.max(1, Math.ceil(Math.sqrt(t * l / V))), O = Math.max(1, Math.ceil(t / B)), w = Array.from({ length: B * O }, (r, E) => E);
      for (let r = w.length - 1; r > 0; r--) {
        const E = Math.floor(v() * (r + 1));
        [w[r], w[E]] = [w[E], w[r]];
      }
      const U = Array.from({ length: t }, () => v() * 2 - 1).sort((r, E) => r - E), d = {
        total: t,
        width: o,
        height: i,
        homeX: new Float32Array(t),
        homeY: new Float32Array(t),
        band: new Float32Array(t),
        phase: new Float32Array(t),
        agility: new Float32Array(t),
        delay: new Float32Array(t),
        orbit: new Float32Array(t),
        x: new Float32Array(t),
        y: new Float32Array(t),
        vx: new Float32Array(t),
        vy: new Float32Array(t),
        particles: new Float32Array(t * 4),
        seeds: new Float32Array(t * 4)
      };
      for (let r = 0; r < t; r++) {
        const E = w[r], $ = -o * g + (E % B + 0.5 + (v() - 0.5) * 0.85) / B * l, Z = -i * g + (Math.floor(E / B) + 0.5 + (v() - 0.5) * 0.85) / O * V;
        d.homeX[r] = $, d.homeY[r] = Z, d.band[r] = v() * 2 - 1, d.phase[r] = v() * Math.PI * 2, d.agility[r] = 0.75 + v() * 0.5, d.delay[r] = v(), m && r < m.total ? (d.x[r] = m.x[r] / m.width * o, d.y[r] = m.y[r] / m.height * i, d.vx[r] = m.vx[r], d.vy[r] = m.vy[r], d.orbit[r] = m.orbit[r]) : (d.x[r] = $, d.y[r] = N === 0 ? Z + i * (0.45 + d.delay[r] * 0.4) : Z), d.seeds[r * 4] = U[r], d.seeds[r * 4 + 1] = d.phase[r], d.seeds[r * 4 + 2] = v(), d.seeds[r * 4 + 3] = v();
      }
      return e.bindBuffer(e.ARRAY_BUFFER, xe), e.bufferData(e.ARRAY_BUFFER, d.seeds, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, oe), e.bufferData(e.ARRAY_BUFFER, d.particles.byteLength, e.DYNAMIC_DRAW), d;
    }, we = () => {
      const t = k.current, o = W.getBoundingClientRect(), i = Math.max(1, o.width), m = Math.max(1, o.height), v = Math.min(
        window.devicePixelRatio || 1,
        t.maxRatio,
        Math.sqrt(Tt / (i * m))
      ), g = Math.max(1, Math.round(i * v)), l = Math.max(1, Math.round(m * v));
      (b.width !== g || b.height !== l) && (b.width = g, b.height = l), M.width = i, M.height = m, M.ratio = g / i, f.ready || (f.x = f.tx = i / 2, f.y = f.ty = m / 2, f.ready = !0), (!R || R.total !== t.count || Math.abs(R.width - i) > 0.5 || Math.abs(R.height - m) > 0.5) && (R = gt(t.count, i, m, R));
    }, wt = (t, o) => {
      if (!R) return;
      const i = M.height / Pe, m = t.ring * i * (1 - 0.38 * L), v = Math.max(t.magnet * i, 1), g = 5 / (t.tightness + 0.1) * i, l = t.waveAmplitude * i * 0.5, V = 2.2 + t.follow * 80, B = (t.rotation + L * 3) * (j ? 0.3 : 1), O = M.width / 2, w = M.height / 2, U = v * 0.18, { homeX: d, homeY: r, band: E, phase: $, agility: Z, delay: Et, orbit: Ke, x: Me, y: Ee, vx: se, vy: ce, particles: le, seeds: Rt, total: bt } = R;
      for (let u = 0; u < bt; u++) {
        const $e = 1 - Rt[u * 4] * 0.12 * t.depth, Ze = O + (f.x - O) * $e, Je = w + (f.y - w) * $e, Qe = d[u], et = r[u] + Math.sin(I * 0.7 + $[u]) * i * 0.12 * t.waveAmplitude, Re = Qe - Ze, be = et - Je, Se = Math.sqrt(Re * Re + be * be), Te = 1 - T((Se - (v - U)) / (U * 2), 0, 1), ue = Te * Te * (3 - 2 * Te);
        let q = Ke[u] + B * ue * o;
        q -= Math.atan2(Math.sin(q), Math.cos(q)) * (1 - ue) * Math.min(1, o * 2.5), Ke[u] = q;
        let tt = Qe, nt = et;
        if (ue > 0 || Math.abs(q) > 1e-4) {
          const G = Math.atan2(be, Re) + q, St = l * (0.6 * Math.sin(G * t.waveCount - I * t.waveSpeed * 2) + 0.4 * Math.sin($[u] + I * t.waveSpeed * 1.3)), it = Se + (m + St + E[u] * g - Se) * ue;
          tt = Ze + Math.cos(G) * it, nt = Je + Math.sin(G) * it;
        }
        const fe = N < Et[u] * 0.9 ? 0 : V * Z[u], ot = 1.64 * fe, rt = fe * fe, at = Math.min(4, Math.max(1, Math.ceil(fe * o * 2))), de = o / at;
        for (let G = 0; G < at; G++)
          se[u] += ((tt - Me[u]) * rt - se[u] * ot) * de, ce[u] += ((nt - Ee[u]) * rt - ce[u] * ot) * de, Me[u] += se[u] * de, Ee[u] += ce[u] * de;
        le[u * 4] = Me[u], le[u * 4 + 1] = Ee[u], le[u * 4 + 2] = se[u], le[u * 4 + 3] = ce[u];
      }
    }, Mt = (t, o) => {
      if (!R) return;
      const i = M.height / Pe, m = Math.max(t.magnet, t.ring) * i * 1.8, { x: v, y: g, vx: l, vy: V, agility: B, total: O } = R;
      for (let w = 0; w < O; w++) {
        const U = v[w] - f.x, d = g[w] - f.y, r = Math.sqrt(U * U + d * d) + 1e-3, E = i * 110 * o * Math.exp(-Math.pow(r / m, 2)) * B[w];
        l[w] += U / r * E, V[w] += d / r * E;
      }
    }, Xe = (t) => {
      if (z = 0, ge || !R) return;
      const o = k.current;
      At(o);
      const i = T((t - ae) / 1e3 || 0, 0, 1 / 30);
      ae = Math.max(ae, t);
      const m = j ? 0.3 : 1;
      I += i * m, Oe += i * o.colorSpeed * m, N < 3 && (N += i), L = p.down ? Math.min(1, L + i / 0.9) : Math.max(0, L - i * 4);
      const v = performance.now() - p.moved > 2e3 || !p.inside;
      o.autoAnimate && !j && (v || !o.interactive) ? (f.tx = M.width / 2 + Math.sin(I * 0.5) * (M.width / 4), f.ty = M.height / 2 + Math.cos(I) * (M.height / 4)) : o.interactive && p.inside && (f.tx = p.x, f.ty = p.y), f.vx += ((f.tx - f.x) * 49 - f.vx * 14) * i, f.vy += ((f.ty - f.y) * 49 - f.vy * 14) * i, f.x += f.vx * i, f.y += f.vy * i, wt(o, i);
      const g = M.height / Pe;
      e.viewport(0, 0, b.width, b.height), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.useProgram(ne.program), e.bindVertexArray(ve), e.bindBuffer(e.ARRAY_BUFFER, oe), e.bufferSubData(e.ARRAY_BUFFER, 0, R.particles);
      const l = ne.uniforms;
      e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, re), e.uniform1i(l.uPalette, 0), e.uniform2f(l.uSize, M.width, M.height), e.uniform1f(l.uPixel, M.ratio), e.uniform2f(l.uCursor, f.x, f.y), e.uniform1f(l.uRing, o.ring * g * (1 - 0.38 * L)), e.uniform1f(l.uBand, Math.max(g * 6, 1)), e.uniform1f(l.uParticle, o.size * g * 0.6), e.uniform1f(l.uAmbient, o.ambient), e.uniform1f(l.uTime, I), e.uniform1f(l.uPulse, o.pulse), e.uniform1f(l.uVariance, o.variance), e.uniform1f(l.uDepth, o.depth), e.uniform1f(l.uShape, o.shape), e.uniform1f(l.uColorMode, o.colorMode), e.uniform1f(l.uStops, o.palette.length), e.uniform1f(l.uHue, Oe), e.uniform1f(l.uReveal, N < 3 ? T(N / 0.6, 0, 1) : 1), e.uniform1f(l.uStreak, g * 30), e.uniform1f(l.uCharge, L), e.uniform1f(l.uOpacity, o.opacity), e.drawArraysInstanced(e.TRIANGLE_STRIP, 0, 4, R.total), ye && Ae && (z = requestAnimationFrame(Xe));
    }, K = () => {
      z || ge || !ye || !Ae || (ae = performance.now(), z = requestAnimationFrame(Xe));
    };
    pe.current = () => {
      we(), K();
    };
    const Ye = (t) => {
      const o = W.getBoundingClientRect();
      return {
        x: t.clientX - o.left,
        y: t.clientY - o.top,
        inside: t.clientX >= o.left && t.clientX <= o.right && t.clientY >= o.top && t.clientY <= o.bottom
      };
    }, ke = (t) => {
      const o = Ye(t);
      p.inside = o.inside, o.inside && (p.x = o.x, p.y = o.y, p.moved = performance.now());
    }, Ne = (t) => {
      const o = k.current, i = Ye(t);
      !i.inside || !o.interactive || (p.x = i.x, p.y = i.y, p.inside = !0, p.moved = performance.now(), o.clickBurst && !j && (p.down = !0));
    }, ie = (t) => {
      p.down && Mt(k.current, 0.45 + L), p.down = !1, t.pointerType !== "mouse" && (p.inside = !1);
    }, Ve = () => {
      p.inside = !1, p.down = !1;
    };
    window.addEventListener("pointermove", ke, { passive: !0 }), window.addEventListener("pointerdown", Ne, { passive: !0 }), window.addEventListener("pointerup", ie, { passive: !0 }), window.addEventListener("pointercancel", ie, { passive: !0 }), document.documentElement.addEventListener("pointerleave", Ve);
    const qe = (t) => {
      t.preventDefault(), ge = !0, cancelAnimationFrame(z), z = 0;
    }, Ge = () => yt((t) => t + 1);
    b.addEventListener("webglcontextlost", qe), b.addEventListener("webglcontextrestored", Ge);
    const He = new ResizeObserver(() => {
      we(), K();
    });
    He.observe(W);
    const We = new IntersectionObserver((t) => {
      ye = t.some((o) => o.isIntersecting), K();
    });
    We.observe(W);
    const je = () => {
      Ae = document.visibilityState !== "hidden", K();
    };
    return document.addEventListener("visibilitychange", je), we(), K(), () => {
      cancelAnimationFrame(z), pe.current = null, He.disconnect(), We.disconnect(), window.removeEventListener("pointermove", ke), window.removeEventListener("pointerdown", Ne), window.removeEventListener("pointerup", ie), window.removeEventListener("pointercancel", ie), document.documentElement.removeEventListener("pointerleave", Ve), document.removeEventListener("visibilitychange", je), b.removeEventListener("webglcontextlost", qe), b.removeEventListener("webglcontextrestored", Ge), e.isContextLost() || (e.deleteBuffer(Ie), e.deleteBuffer(oe), e.deleteBuffer(xe), e.deleteTexture(re), e.deleteVertexArray(ve), e.deleteProgram(ne.program));
    };
  }, [Ue]), /* @__PURE__ */ st.jsx("div", { ref: Be, className: `antigravity${_e ? ` ${_e}` : ""}`, style: xt, children: /* @__PURE__ */ st.jsx("canvas", { ref: Le, className: "antigravity__canvas", "aria-hidden": "true" }) });
};
export {
  Ot as default
};
