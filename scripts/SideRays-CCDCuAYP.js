import { r as S, j as oe } from "./components-entry-CxyGrPME.js";
const Re = 24e5, Y = Math.PI * 2, ne = {
  "top-right": { flipX: 0, flipY: 0, side: 0 },
  "top-left": { flipX: 1, flipY: 0, side: 0 },
  "bottom-right": { flipX: 0, flipY: 1, side: 0 },
  "bottom-left": { flipX: 1, flipY: 1, side: 0 },
  right: { flipX: 0, flipY: 0, side: 1 },
  left: { flipX: 1, flipY: 0, side: 1 }
}, Me = `#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`, be = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uBlend;
uniform float uIntensity;
uniform float uSpread;
uniform float uDensity;
uniform float uSharpness;
uniform float uFalloff;
uniform float uGlow;
uniform float uSaturation;
uniform float uDust;
uniform float uOpacity;
uniform float uReveal;
uniform float uLight;
uniform vec3 uFrame;
uniform float uAim;
uniform vec3 uFocus;
uniform float uSway;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}

float shafts(float u, float t, float seed, float aa) {
  float sway = (0.4 * sin(t * 0.31 + seed) + 0.24 * sin(t * 0.17 + seed * 2.3)) * uSway;
  float n = 0.7 * noise(vec2(u + sway + seed, t * 0.3)) + 0.3 * noise(vec2(u * 2.4 + sway * 1.5 + seed * 1.7, t * 0.45 + 3.0));
  float width = mix(0.5, 0.1, uSharpness);
  float s = mix(smoothstep(0.5 - width, 0.5 + width, n), 0.5, aa);
  return mix(0.05, 1.0, s);
}

float motes(vec2 p, float cell, float t, float seed) {
  p += vec2(t * 0.021, -t * 0.013) + seed * 7.31;
  vec2 grid = p / cell;
  vec2 id = floor(grid);
  vec2 f = grid - id;
  float h = hash(id + seed);
  if (h > 0.5) return 0.0;
  vec2 center = 0.25 + 0.5 * vec2(hash(id + 1.7 + seed), hash(id + 3.1 + seed));
  center += 0.1 * vec2(sin(t * 0.7 + h * 31.0), cos(t * 0.6 + h * 23.0));
  float size = mix(0.035, 0.09, hash(id + 5.3 + seed));
  float edge = length(fwidth(grid)) * 0.7;
  float twinkle = 0.55 + 0.45 * sin(t * 1.9 + h * 41.0);
  return (1.0 - smoothstep(size - edge, size + edge, length(f - center))) * twinkle;
}

void main() {
  float aspect = uResolution.x / uResolution.y;
  vec2 q = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  if (uFrame.x > 0.5) q.x = -q.x;
  if (uFrame.y > 0.5) q.y = -q.y;
  vec2 source = uFrame.z > 0.5 ? vec2(aspect * 0.5 + 0.42, 0.3) : vec2(aspect * 0.5 + 0.1, 0.62);
  float heading = (uFrame.z > 0.5 ? 3.42 : -2.48) + uAim + 0.035 * sin(uTime * 0.21) * uSway;
  vec2 v = q - source;
  float r = length(v);
  float angle = mod(atan(v.y, v.x) - heading + 3.14159265, 6.28318531) - 3.14159265;
  float t = uTime;
  float u = angle * uDensity;
  float aa = smoothstep(0.12, 0.45, fwidth(u));
  float offset = uSpread * 0.22;
  float fanA = exp(-pow((angle + offset) / uSpread, 2.0) * 1.4);
  float fanB = exp(-pow((angle - offset) / (uSpread * 1.15), 2.0) * 1.4);
  float focus = 1.0 + uFocus.z * exp(-pow((angle - uFocus.x) / uFocus.y, 2.0));
  float lightA = fanA * shafts(u, t, 0.0, aa) * focus;
  float lightB = fanB * shafts(u * 0.83, t * 0.6, 17.0, aa) * focus;
  float reach = 1.0 / (1.0 + pow(r / 0.4, uFalloff));
  vec3 glowColor = mix(uColorA, uColorB, uBlend);
  vec3 light = (uColorA * lightA * (1.0 - uBlend) + uColorB * lightB * uBlend) * 2.0 * reach;
  light += glowColor * uGlow * exp(-pow(r / 0.4, 2.0));
  if (uDust > 0.0) {
    float sparkle = motes(q, 0.06, t, 0.0) + 0.7 * motes(q, 0.038, t * 0.8, 9.0);
    light += mix(glowColor, vec3(1.0), 0.6) * sparkle * (lightA + lightB) * reach * uDust * 2.5;
  }
  light *= uIntensity * (1.0 - smoothstep(uReveal * 2.6 - 0.45, uReveal * 2.6, r)) * smoothstep(0.0, 0.35, uReveal);
  float gray = dot(light, vec3(0.2126, 0.7152, 0.0722));
  light = max(mix(vec3(gray), light, uSaturation), 0.0);
  float peak = max(light.r, max(light.g, light.b));
  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  if (uLight > 0.5) {
    vec3 ink = pow(light / max(peak, 1e-4), vec3(2.0)) * 0.75;
    float alpha = clamp(pow(1.0 - exp(-peak * 2.6), 2.5) * 0.9 * uOpacity + grain, 0.0, 1.0);
    fragColor = vec4(pow(ink, vec3(1.0 / 2.2)) * alpha, alpha);
    return;
  }
  float mapped = 1.0 - exp(-peak);
  vec3 tone = light * (mapped / max(peak, 1e-4));
  tone = mix(tone, vec3(mapped), smoothstep(0.7, 1.0, mapped) * 0.55);
  vec3 shown = clamp(tone * uOpacity, 0.0, 1.0);
  float alpha = max(shown.r, max(shown.g, shown.b));
  vec3 color = clamp(shown * alpha + grain, 0.0, 1.0);
  fragColor = vec4(min(color, vec3(alpha)), alpha);
}`, c = (t, i, s) => Math.min(s, Math.max(i, t)), Ee = (t) => ((t + Math.PI) % Y + Y) % Y - Math.PI, ae = (t) => {
  const i = String(t || "").trim(), s = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (s) {
    const d = s[1].length === 3 ? s[1].replace(/./g, (h) => h + h) : s[1];
    return [0, 2, 4].map((h) => parseInt(d.slice(h, h + 2), 16) / 255);
  }
  const n = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(i);
  return n ? [n[1], n[2], n[3]].map((d) => c(parseFloat(d) / 255, 0, 1)) : [1, 1, 1];
}, Fe = (t, i) => ({
  source: t.side ? [i * 0.5 + 0.42, 0.3] : [i * 0.5 + 0.1, 0.62],
  heading: t.side ? 3.42 : -2.48
}), re = (t, i, s) => {
  const n = t.createShader(i);
  return n ? (t.shaderSource(n, s), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (console.error(t.getShaderInfoLog(n)), t.deleteShader(n), null)) : null;
}, Le = (t) => {
  const i = re(t, t.VERTEX_SHADER, Me), s = re(t, t.FRAGMENT_SHADER, be), n = i && s ? t.createProgram() : null;
  if (!i || !s || !n)
    return i && t.deleteShader(i), s && t.deleteShader(s), null;
  if (t.attachShader(n, i), t.attachShader(n, s), t.linkProgram(n), t.deleteShader(i), t.deleteShader(s), !t.getProgramParameter(n, t.LINK_STATUS))
    return console.error(t.getProgramInfoLog(n)), t.deleteProgram(n), null;
  const d = {}, h = t.getProgramParameter(n, t.ACTIVE_UNIFORMS);
  for (let A = 0; A < h; A++) {
    const R = t.getActiveUniform(n, A);
    R && (d[R.name] = t.getUniformLocation(n, R.name));
  }
  return { program: n, uniforms: d };
}, Be = ({
  rayColor1: t = "#FFC46B",
  rayColor2: i = "#96c8ff",
  blend: s = 0.6,
  origin: n = "top-right",
  speed: d = 2.5,
  intensity: h = 2,
  spread: A = 2,
  density: R = 5,
  sharpness: ie = 0.5,
  tilt: se = 0,
  falloff: le = 1.6,
  glow: ce = 1,
  saturation: fe = 1,
  dust: ue = 0,
  followMouse: he = !0,
  mouseInfluence: me = 0.5,
  intro: de = !0,
  lightMode: pe = !1,
  opacity: ve = 1,
  maxDevicePixelRatio: ge = 2,
  className: z = "",
  style: we
}) => {
  const O = S.useRef(null), G = S.useRef(null), T = S.useRef(null), [V, xe] = S.useState(0), U = {
    colorA: ae(t),
    colorB: ae(i),
    blend: c(s, 0, 1),
    frame: ne[n] ?? ne["top-right"],
    speed: Math.max(0, d) * 0.4,
    intensity: Math.max(0, h) * 0.75,
    spread: c(A, 0.1, 8) * 0.225,
    density: c(R, 1, 40),
    sharpness: c(ie, 0, 1),
    tilt: c(se, -180, 180) * Math.PI / 180,
    falloff: c(le, 0.2, 6),
    glow: Math.max(0, ce) * 1.2,
    saturation: Math.max(0, fe),
    dust: c(ue, 0, 1),
    followMouse: he,
    mouseInfluence: c(me, 0, 1),
    intro: de,
    light: pe,
    opacity: c(ve, 0, 1),
    maxRatio: c(ge, 0.5, 3)
  }, C = S.useRef(U);
  return C.current = U, S.useEffect(() => {
    T.current?.();
  }), S.useEffect(() => {
    const M = O.current, l = G.current;
    if (!M || !l) return;
    const o = l.getContext("webgl2", {
      alpha: !0,
      premultipliedAlpha: !0,
      antialias: !1,
      depth: !1,
      stencil: !1,
      powerPreference: "high-performance"
    }), I = o ? Le(o) : null;
    if (!o || !I) return;
    const b = window.matchMedia("(prefers-reduced-motion: reduce)").matches, N = o.createVertexArray(), p = { width: 1, height: 1 }, v = { x: 0, y: 0, inside: !1 }, m = { value: 0, velocity: 0 }, g = { angle: 0, strength: 0 };
    let j = Math.random() * 100, E = C.current.intro && !b && V === 0 ? 0 : 1, w = 0, B = 0, k = !0, X = document.visibilityState !== "hidden", q = !1;
    const D = () => {
      const a = C.current, e = M.getBoundingClientRect(), f = Math.max(1, e.width), u = Math.max(1, e.height), y = Math.min(
        window.devicePixelRatio || 1,
        a.maxRatio,
        Math.sqrt(Re / (f * u))
      ), F = Math.max(1, Math.round(f * y)), L = Math.max(1, Math.round(u * y));
      (l.width !== F || l.height !== L) && (l.width = F, l.height = L), p.width = f, p.height = u;
    }, ye = (a) => {
      let e = (v.x - p.width / 2) / p.height, f = (p.height / 2 - v.y) / p.height;
      a.frame.flipX && (e = -e), a.frame.flipY && (f = -f);
      const { source: u, heading: y } = Fe(a.frame, p.width / p.height);
      return Ee(Math.atan2(f - u[1], e - u[0]) - y - a.tilt);
    }, H = (a) => {
      if (w = 0, q) return;
      const e = C.current, f = c((a - B) / 1e3 || 0, 0, 0.05);
      B = Math.max(B, a), j += f * e.speed * (b ? 0.3 : 1), E < 1 && (E = Math.min(1, E + f / 1.6));
      const u = e.followMouse && v.inside && !b, y = u ? ye(e) : 0, F = u ? c(y, -e.spread, e.spread) * e.mouseInfluence : 0, L = u ? e.mouseInfluence : 0, ee = 1 - Math.exp(-f * 6);
      u && (g.angle += (c(y - m.value, -e.spread * 1.5, e.spread * 1.5) - g.angle) * ee), g.strength += (L - g.strength) * ee;
      const te = 18, Se = 2 * Math.sqrt(te);
      m.velocity += ((F - m.value) * te - m.velocity * Se) * f, m.value += m.velocity * f, o.viewport(0, 0, l.width, l.height), o.useProgram(I.program), o.bindVertexArray(N);
      const r = I.uniforms;
      o.uniform2f(r.uResolution, l.width, l.height), o.uniform1f(r.uTime, j), o.uniform3f(r.uColorA, e.colorA[0], e.colorA[1], e.colorA[2]), o.uniform3f(r.uColorB, e.colorB[0], e.colorB[1], e.colorB[2]), o.uniform1f(r.uBlend, e.blend), o.uniform1f(r.uIntensity, e.intensity), o.uniform1f(r.uSpread, e.spread), o.uniform1f(r.uDensity, e.density), o.uniform1f(r.uSharpness, e.sharpness), o.uniform1f(r.uFalloff, e.falloff), o.uniform1f(r.uGlow, e.glow), o.uniform1f(r.uSaturation, e.saturation), o.uniform1f(r.uDust, e.dust), o.uniform1f(r.uOpacity, e.opacity), o.uniform1f(r.uReveal, 1 - Math.pow(1 - E, 3)), o.uniform1f(r.uLight, e.light ? 1 : 0), o.uniform3f(r.uFrame, e.frame.flipX, e.frame.flipY, e.frame.side), o.uniform1f(r.uAim, e.tilt + m.value), o.uniform3f(r.uFocus, g.angle, Math.max(0.06, e.spread * 0.25), g.strength * 1.4), o.uniform1f(r.uSway, b ? 0 : 1), o.drawArrays(o.TRIANGLES, 0, 3);
      const Ae = Math.abs(F - m.value) > 1e-4 || Math.abs(m.velocity) > 1e-4 || Math.abs(L - g.strength) > 1e-3;
      (e.speed > 0 && !b || E < 1 || Ae) && k && X && (w = requestAnimationFrame(H));
    }, x = () => {
      w || q || !k || !X || (B = performance.now(), w = requestAnimationFrame(H));
    };
    T.current = () => {
      D(), x();
    };
    const $ = (a) => {
      const e = M.getBoundingClientRect();
      v.x = a.clientX - e.left, v.y = a.clientY - e.top, v.inside = a.clientX >= e.left && a.clientX <= e.right && a.clientY >= e.top && a.clientY <= e.bottom, x();
    }, _ = () => {
      v.inside = !1, x();
    }, P = (a) => {
      a.pointerType !== "mouse" && _();
    };
    window.addEventListener("pointermove", $, { passive: !0 }), window.addEventListener("pointerup", P, { passive: !0 }), window.addEventListener("pointercancel", P, { passive: !0 }), document.documentElement.addEventListener("pointerleave", _);
    const K = (a) => {
      a.preventDefault(), q = !0, cancelAnimationFrame(w), w = 0;
    }, W = () => xe((a) => a + 1);
    l.addEventListener("webglcontextlost", K), l.addEventListener("webglcontextrestored", W);
    const J = new ResizeObserver(() => {
      D(), x();
    });
    J.observe(M);
    const Q = new IntersectionObserver((a) => {
      k = a.some((e) => e.isIntersecting), x();
    });
    Q.observe(M);
    const Z = () => {
      X = document.visibilityState !== "hidden", x();
    };
    return document.addEventListener("visibilitychange", Z), D(), x(), () => {
      cancelAnimationFrame(w), T.current = null, J.disconnect(), Q.disconnect(), window.removeEventListener("pointermove", $), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), document.documentElement.removeEventListener("pointerleave", _), document.removeEventListener("visibilitychange", Z), l.removeEventListener("webglcontextlost", K), l.removeEventListener("webglcontextrestored", W), o.isContextLost() || (o.deleteVertexArray(N), o.deleteProgram(I.program));
    };
  }, [V]), /* @__PURE__ */ oe.jsx("div", { ref: O, className: `side-rays${z ? ` ${z}` : ""}`, style: we, children: /* @__PURE__ */ oe.jsx("canvas", { ref: G, className: "side-rays__canvas", "aria-hidden": "true" }) });
};
export {
  Be as default
};
