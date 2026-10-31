import { r as a, j as s } from "./components-entry-CxyGrPME.js";
const De = {
  dark: {
    "--pn-surface": "rgba(38, 35, 46, 0.66)",
    "--pn-solid": "#26232e",
    "--pn-edge": "rgba(255, 255, 255, 0.08)",
    "--pn-rim": "rgba(255, 255, 255, 0.07)",
    "--pn-shadow": "0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)",
    "--pn-text": "rgba(244, 244, 245, 0.64)",
    "--pn-strong": "#f4f4f5",
    "--pn-pill": "linear-gradient(180deg, #ffffff 0%, #ebebf0 100%)",
    "--pn-pill-ink": "#121016",
    "--pn-pill-shadow": "inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 16px -6px rgba(0, 0, 0, 0.6)",
    "--pn-dot": "#f4f4f5",
    "--pn-ring": "rgba(244, 244, 245, 0.55)",
    "--pn-row-hover": "rgba(255, 255, 255, 0.06)",
    "--pn-tile": "linear-gradient(180deg, #3a3644 0%, #27242f 100%)",
    "--pn-tile-rim": "inset 0 0 0 1px rgba(255, 255, 255, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 4px 10px -4px rgba(0, 0, 0, 0.7)"
  },
  light: {
    "--pn-surface": "rgba(240, 240, 243, 0.8)",
    "--pn-solid": "#f0f0f3",
    "--pn-edge": "rgba(24, 24, 27, 0.07)",
    "--pn-rim": "rgba(255, 255, 255, 0.95)",
    "--pn-shadow": "0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)",
    "--pn-text": "rgba(24, 24, 27, 0.6)",
    "--pn-strong": "#18181b",
    "--pn-pill": "linear-gradient(180deg, #2c2c31 0%, #18181b 100%)",
    "--pn-pill-ink": "#ffffff",
    "--pn-pill-shadow": "inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 6px 14px -6px rgba(24, 24, 27, 0.45)",
    "--pn-dot": "#18181b",
    "--pn-ring": "rgba(24, 24, 27, 0.45)",
    "--pn-row-hover": "rgba(24, 24, 27, 0.05)",
    "--pn-tile": "linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)",
    "--pn-tile-rim": "inset 0 0 0 1px rgba(24, 24, 27, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1), 0 4px 10px -5px rgba(24, 24, 27, 0.25)"
  }
}, Ke = {
  sm: {
    "--pn-h": "36px",
    "--pn-pad": "3px",
    "--pn-inner": "30px",
    "--pn-x": "12px",
    "--pn-font": "13px",
    "--pn-gap": "6px",
    "--pn-mark": "18px"
  },
  md: {
    "--pn-h": "44px",
    "--pn-pad": "4px",
    "--pn-inner": "36px",
    "--pn-x": "16px",
    "--pn-font": "14px",
    "--pn-gap": "8px",
    "--pn-mark": "22px"
  },
  lg: {
    "--pn-h": "52px",
    "--pn-pad": "5px",
    "--pn-inner": "42px",
    "--pn-x": "20px",
    "--pn-font": "15px",
    "--pn-gap": "10px",
    "--pn-mark": "26px"
  }
}, it = "pill-nav", D = "pill-nav__surface", se = "pill-nav__rim", ct = "pill-nav__rim pill-nav__rim--root", pt = "pill-nav__logo", ft = "pill-nav__logo-link", dt = "pill-nav__mark", ut = "pill-nav__bar", ht = "pill-nav__track", Ue = "pill-nav__list", xt = "pill-nav__slot", gt = "pill-nav__item", mt = "pill-nav__face", vt = "pill-nav__face-alt", bt = "pill-nav__fill", _t = "pill-nav__glide", wt = "pill-nav__ink", Ce = "pill-nav__ink-item", yt = "pill-nav__dot", Et = "pill-nav__toggle", Rt = "pill-nav__toggle--bare", Mt = "pill-nav__burger", jt = "pill-nav__line pill-nav__line--top", kt = "pill-nav__line pill-nav__line--bottom", Nt = "pill-nav__panel", $t = "pill-nav__menu", At = "pill-nav__row", Lt = "pill-nav__measure", It = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
], ae = "cubic-bezier(0.22, 1, 0.36, 1)", re = (b, w, F) => Math.min(F, Math.max(w, b)), Ot = (b) => {
  const w = String(b || "").trim().replace("#", "");
  if (!/^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(w)) return null;
  const F = w.length === 3 ? w.split("").map((A) => A + A).join("") : w, y = (A) => {
    const W = parseInt(F.slice(A, A + 2), 16) / 255;
    return W <= 0.04045 ? W / 12.92 : ((W + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * y(0) + 0.7152 * y(2) + 0.0722 * y(4) > 0.36 ? "#121016" : "#ffffff";
}, oe = (b, w) => parseFloat(getComputedStyle(b).getPropertyValue(w)) || 0, St = ({
  logo: b,
  logoAlt: w = "Logo",
  logoHref: F = "#",
  items: y = It,
  activeHref: le,
  defaultActiveIndex: A = 0,
  onItemClick: W,
  linkComponent: _e = "a",
  theme: Ye = "dark",
  layout: we = "split",
  size: ye = "md",
  surface: ie = "glass",
  itemStyle: Ze = "pill",
  hoverEffect: ce = "fill",
  indicator: K = "dot",
  highlightColor: U,
  highlightTextColor: pe,
  barColor: fe,
  textColor: de,
  bounce: Je = 0.3,
  stretch: Qe = 0.5,
  intro: et = !0,
  collapse: X = "auto",
  onMenuToggle: Ee,
  ariaLabel: tt = "Main",
  className: nt = "",
  style: st
}) => {
  const Re = a.useId(), O = a.useRef(null), Me = a.useRef(null), C = a.useRef(null), je = a.useRef(null), ke = a.useRef(null), Ne = a.useRef(null), $e = a.useRef(null), Ae = a.useRef(null), Y = a.useRef(null), Le = a.useRef(null), Ie = a.useRef(null), Oe = a.useRef(null), Z = a.useRef([]), N = a.useRef(null), ue = a.useRef(et), he = a.useRef(!1), J = a.useRef(null), [at, rt] = a.useState(A), [m, Te] = a.useState(X === "always"), [_, B] = a.useState(!1), [xe, ge] = a.useState(!1), Se = le !== void 0, Q = Se ? y.findIndex((t) => t.href === le) : at, d = we === "joined", me = !!b, ee = ce === "fill", Pe = !ee && (ce === "glide" || K === "pill"), Ve = {
    hoverEffect: ce,
    indicator: K,
    activeIndex: Q,
    bounce: re(Je, 0, 1),
    stretch: re(Qe, 0, 1)
  }, te = a.useRef(Ve);
  te.current = Ve;
  const ve = De[Ye] ?? De.dark, c = { ...ve, ...Ke[ye] ?? Ke.md };
  ie === "glass" && (c["--pn-blur"] = "blur(20px) saturate(1.6)"), ie === "solid" && (c["--pn-surface"] = ve["--pn-solid"], c["--pn-blur"] = "none"), ie === "none" && (c["--pn-surface"] = "transparent", c["--pn-shadow"] = "none", c["--pn-blur"] = "none", c["--pn-edge"] = "transparent", c["--pn-rim"] = "transparent"), fe && (c["--pn-surface"] = fe, c["--pn-solid"] = fe), de && (c["--pn-strong"] = de, c["--pn-text"] = `color-mix(in srgb, ${de} 64%, transparent)`), U ? (c["--pn-pill"] = U, c["--pn-dot"] = U, c["--pn-pill-shadow"] = "inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 6px 16px -6px rgba(0, 0, 0, 0.45)", c["--pn-pill-ink"] = pe || Ot(U) || ve["--pn-pill-ink"]) : pe && (c["--pn-pill-ink"] = pe), a.useEffect(() => {
    const t = O.current;
    if (!t) return;
    const n = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, e = {
      x0: 0,
      x1: 0,
      v0: 0,
      v1: 0,
      alpha: 0,
      pop: 1,
      press: 1,
      pressVelocity: 0,
      dotX: 0,
      dotVelocity: 0,
      dotAlpha: 0,
      hover: -1,
      focus: !1,
      sliding: !1,
      pressing: !1,
      waiting: he.current && !n
    };
    he.current = !1;
    const l = [];
    let u = 0, p = 0, E = 0, R = 0;
    const $ = () => {
      const r = C.current;
      r && (u = r.offsetWidth, p = r.offsetHeight, Z.current.forEach((o, i) => {
        if (!o) return;
        l[i] = { left: o.offsetLeft, width: o.offsetWidth };
        const x = Math.ceil(2 * Math.sqrt((o.offsetWidth / 2) ** 2 + o.offsetHeight ** 2)) + 2;
        o.style.setProperty("--pn-fill", `${x}px`);
      }));
    }, v = () => {
      const r = te.current;
      return r.hoverEffect === "fill" ? -1 : r.hoverEffect === "glide" && e.hover >= 0 ? e.hover : r.indicator === "pill" ? r.activeIndex : -1;
    }, f = () => {
      const r = te.current;
      Z.current.forEach((o, i) => {
        if (!o) return;
        const x = e.hover === i;
        o.toggleAttribute("data-lit", x), o.toggleAttribute("data-hover", x && r.hoverEffect === "fill");
      }), t.toggleAttribute("data-focus", e.focus && e.hover >= 0), t.toggleAttribute(
        "data-dot-lit",
        r.hoverEffect === "fill" && e.hover >= 0 && e.hover === r.activeIndex
      );
    }, j = () => {
      const r = je.current, o = ke.current, i = Ne.current, x = Math.max(0, e.x1 - e.x0), k = e.press * e.pop, G = l[v()], L = G ? 1 - re((x / Math.max(G.width, 1) - 1) * 0.3, 0, 0.14) : 1;
      if (r && (r.style.width = `${x}px`, r.style.transform = `translate3d(${e.x0}px, 0, 0) scale(${k}, ${k * L})`, r.style.opacity = `${e.alpha}`), o) {
        const g = x * k / 2, S = (e.x0 + e.x1) / 2, P = p * (1 - k * L) / 2;
        o.style.clipPath = `inset(${P}px ${u - S - g}px ${P}px ${S - g}px round ${p / 2}px)`, o.style.opacity = `${e.alpha}`;
      }
      if (i) {
        const g = re(Math.abs(e.dotVelocity) / 700, 0, 2.2);
        i.style.transform = `translate3d(${e.dotX}px, 0, 0) scaleX(${1 + g})`, i.style.opacity = `${e.dotAlpha}`;
      }
    }, be = (r) => {
      E = 0;
      const o = te.current, i = R ? Math.min(0.05, (r - R) / 1e3) : 1 / 60;
      R = r;
      const x = v(), k = l[x], G = 1 - 0.55 * o.bounce, L = 520;
      let g = !1;
      if (k && !e.waiting) {
        const M = k.left, V = k.left + k.width;
        if (e.alpha < 0.02 && !e.sliding && (e.x0 = M, e.x1 = V, e.v0 = 0, e.v1 = 0, e.pop = 0.9), n)
          e.x0 = M, e.x1 = V, e.v0 = 0, e.v1 = 0;
        else {
          const I = Math.sign((M + V) / 2 - (e.x0 + e.x1) / 2), H = L * (1 + 0.9 * o.stretch), z = L * (1 - 0.5 * o.stretch), qe = I < 0 ? H : I > 0 ? z : L, Ge = I > 0 ? H : I < 0 ? z : L, He = Math.ceil(i / (1 / 240)), ne = i / He;
          for (let ze = 0; ze < He; ze++)
            e.v0 += (-qe * (e.x0 - M) - 2 * G * Math.sqrt(qe) * e.v0) * ne, e.x0 += e.v0 * ne, e.v1 += (-Ge * (e.x1 - V) - 2 * G * Math.sqrt(Ge) * e.v1) * ne, e.x1 += e.v1 * ne;
        }
        e.alpha += (1 - e.alpha) * (n ? 1 : 1 - Math.exp(-i / 0.06)), g = Math.abs(e.x0 - M) > 0.05 || Math.abs(e.x1 - V) > 0.05 || Math.abs(e.v0) > 0.5 || Math.abs(e.v1) > 0.5 || e.alpha < 0.999, g || (e.sliding = !1);
      } else
        e.alpha += (0 - e.alpha) * (n ? 1 : 1 - Math.exp(-i / 0.07)), e.alpha > 2e-3 ? g = !0 : e.alpha = 0;
      e.pop += (1 - e.pop) * (n ? 1 : 1 - Math.exp(-i / 0.09)), Math.abs(1 - e.pop) > 1e-3 && (g = !0);
      const S = e.pressing ? 0.95 : 1;
      n ? (e.press = S, e.pressVelocity = 0) : (e.pressVelocity += (-700 * (e.press - S) - 30 * e.pressVelocity) * i, e.press += e.pressVelocity * i), (Math.abs(e.press - S) > 5e-4 || Math.abs(e.pressVelocity) > 0.01) && (g = !0);
      const P = o.indicator === "dot" ? l[o.activeIndex] : null;
      if (P && !e.waiting) {
        const M = P.left + P.width / 2;
        if (e.dotAlpha < 0.02 && (e.dotX = M, e.dotVelocity = 0), n)
          e.dotX = M, e.dotVelocity = 0;
        else {
          const I = Math.ceil(i / 0.004166666666666667), H = i / I;
          for (let z = 0; z < I; z++)
            e.dotVelocity += (-360 * (e.dotX - M) - 2 * (1 - 0.5 * o.bounce) * Math.sqrt(360) * e.dotVelocity) * H, e.dotX += e.dotVelocity * H;
        }
        e.dotAlpha += (1 - e.dotAlpha) * (n ? 1 : 1 - Math.exp(-i / 0.1)), (Math.abs(e.dotX - M) > 0.05 || Math.abs(e.dotVelocity) > 0.5 || e.dotAlpha < 0.999) && (g = !0);
      } else
        e.dotAlpha += (0 - e.dotAlpha) * (n ? 1 : 1 - Math.exp(-i / 0.1)), e.dotAlpha > 2e-3 ? g = !0 : e.dotAlpha = 0;
      j(), g && (E = requestAnimationFrame(be));
    }, h = () => {
      E || (R = 0, E = requestAnimationFrame(be));
    }, T = {
      enter: (r, o) => {
        o?.pointerType !== "touch" && (e.hover = r, e.focus = !1, f(), h());
      },
      leave: () => {
        e.focus || (e.hover = -1, f(), h());
      },
      focus: (r, o) => {
        const i = o?.target, x = i instanceof Element && i.matches(":focus-visible");
        e.focus = x, e.hover = x ? r : e.hover, f(), h();
      },
      blur: () => {
        e.focus && (e.focus = !1, e.hover = -1, f(), h());
      },
      press: (r) => {
        r && r.button > 0 || (e.pressing = !0, h());
      },
      release: () => {
        e.pressing && (e.pressing = !1, h());
      },
      refresh: () => {
        $(), f(), h();
      }
    };
    N.current = T, $(), f(), j(), h();
    let Xe = 0;
    e.waiting && (e.x0 = 0, e.x1 = 0, Xe = window.setTimeout(() => {
      e.waiting = !1, v() >= 0 && (e.alpha = 1, e.sliding = !0), h();
    }, 420));
    const Be = new ResizeObserver(() => {
      $(), j(), h();
    });
    return C.current && Be.observe(C.current), document.fonts?.ready?.then(() => T.refresh()).catch(() => {
    }), window.addEventListener("pointerup", T.release), window.addEventListener("pointercancel", T.release), () => {
      cancelAnimationFrame(E), window.clearTimeout(Xe), Be.disconnect(), window.removeEventListener("pointerup", T.release), window.removeEventListener("pointercancel", T.release), N.current = null;
    };
  }, [m, y.length]), a.useEffect(() => {
    N.current?.refresh();
  }), a.useLayoutEffect(() => {
    const t = O.current, n = Ie.current;
    if (!t || !n) return;
    const e = () => {
      if (X === "always" || X === "never") {
        Te(X === "always");
        return;
      }
      const u = t.parentElement;
      if (!u) return;
      const p = getComputedStyle(u), E = u.clientWidth - (parseFloat(p.paddingLeft) || 0) - (parseFloat(p.paddingRight) || 0), R = Oe.current?.offsetWidth ?? 0, $ = oe(t, "--pn-h"), v = oe(t, "--pn-pad"), f = oe(t, "--pn-gap"), j = oe(t, "--pn-inner"), h = (d ? v * 2 + (me ? j + 2 : 0) + R : (me ? $ + f : 0) + R + v * 2) > E + 0.5;
      ue.current && h !== m && (J.current = h), Te(h);
    };
    e();
    const l = new ResizeObserver(e);
    return t.parentElement && l.observe(t.parentElement), l.observe(n), () => l.disconnect();
  }, [X, m, d, me, ye]), a.useLayoutEffect(() => {
    const t = O.current;
    if (!t || !ue.current || J.current !== null && J.current !== m || (J.current = null, ue.current = !1, window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)) return;
    const n = (l, u) => l?.animate(
      [
        { opacity: 0, transform: "scale(0.6)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      { duration: 700, delay: u, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)", fill: "backwards" }
    ), e = (l) => {
      if (!l) return;
      const u = l.offsetWidth, p = l.offsetHeight;
      l.animate(
        [
          { clipPath: `inset(0px ${Math.max(0, u - p)}px 0px 0px round ${p / 2}px)` },
          { clipPath: `inset(0px 0px 0px 0px round ${p / 2}px)` }
        ],
        { duration: 760, delay: 90, easing: ae, fill: "backwards" }
      );
    };
    if (n($e.current, 0), m) {
      n(Y.current, 120);
      return;
    }
    he.current = !0, e(d ? t : Me.current), Z.current.forEach((l, u) => {
      l?.animate(
        [
          { opacity: 0, transform: "translateX(-10px)" },
          { opacity: 1, transform: "translateX(0)" }
        ],
        { duration: 560, delay: 200 + u * 50, easing: ae, fill: "backwards" }
      );
    });
  }, [m, d]), a.useEffect(() => {
    !m && _ && B(!1);
  }, [m, _]), a.useLayoutEffect(() => {
    const t = Le.current, n = O.current;
    if (!t || !n) return;
    const e = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, l = t.offsetWidth, u = t.offsetHeight, p = d ? n.offsetHeight : Y.current?.offsetHeight ?? 44, E = d ? `inset(0px 0px ${Math.max(0, u - p)}px 0px round ${p / 2}px)` : `inset(0px 0px ${Math.max(0, u - p)}px ${Math.max(0, l - p)}px round ${p / 2}px)`, R = "inset(0px 0px 0px 0px round 24px)", $ = t.querySelectorAll("li"), v = [];
    if (_) {
      if (e) return;
      v.push(t.animate([{ clipPath: E }, { clipPath: R }], { duration: 560, easing: ae })), $.forEach((f, j) => {
        v.push(
          f.animate(
            [
              { opacity: 0, transform: "translateY(-8px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 420, delay: 90 + j * 40, easing: ae, fill: "backwards" }
          )
        );
      });
    } else {
      if (e) {
        ge(!1);
        return;
      }
      const f = t.animate([{ clipPath: R }, { clipPath: E }], {
        duration: 380,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        fill: "forwards"
      });
      f.onfinish = () => ge(!1), v.push(f), $.forEach((j) => {
        v.push(j.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: "forwards" }));
      });
    }
    return () => {
      v.forEach((f) => {
        f.onfinish = null, f.cancel();
      });
    };
  }, [_, xe, d]), a.useEffect(() => {
    if (!_) return;
    const t = (e) => {
      const l = e.target;
      l instanceof Node && O.current?.contains(l) || B(!1);
    }, n = (e) => {
      e.key === "Escape" && (B(!1), Y.current?.focus());
    };
    return document.addEventListener("pointerdown", t), document.addEventListener("keydown", n), () => {
      document.removeEventListener("pointerdown", t), document.removeEventListener("keydown", n);
    };
  }, [_]);
  const ot = (t) => {
    const n = Ae.current;
    !n || t.pointerType === "touch" || n.getAnimations().length || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || n.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
      duration: 900,
      easing: "cubic-bezier(0.65, 0, 0.25, 1)"
    });
  }, Fe = (t, n, e) => {
    W?.(t, n, e), Se || rt(n);
  }, lt = () => {
    const t = !_;
    t && ge(!0), B(t), Ee?.(t);
  }, We = (t, n, e) => t.href ? /* @__PURE__ */ s.jsx(_e, { href: t.href, ...n, children: e }) : /* @__PURE__ */ s.jsx("button", { type: "button", ...n, children: e }), q = (t) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    t.icon,
    t.label
  ] });
  return /* @__PURE__ */ s.jsxs(
    "nav",
    {
      ref: O,
      className: [it, d ? D : "", nt].filter(Boolean).join(" "),
      "data-layout": we,
      "data-items": Ze,
      "data-collapsed": m ? "" : void 0,
      "data-open": _ ? "" : void 0,
      "data-panel": xe ? "" : void 0,
      style: { ...c, ...st },
      "aria-label": tt,
      children: [
        b && /* @__PURE__ */ s.jsxs("span", { ref: $e, className: [pt, d ? "" : D].filter(Boolean).join(" "), children: [
          /* @__PURE__ */ s.jsx(_e, { href: F, className: ft, "aria-label": w, onPointerEnter: ot, children: /* @__PURE__ */ s.jsx("span", { ref: Ae, className: dt, children: typeof b == "string" ? /* @__PURE__ */ s.jsx("img", { src: b, alt: "", draggable: !1 }) : b }) }),
          !d && /* @__PURE__ */ s.jsx("span", { className: se })
        ] }),
        !m && /* @__PURE__ */ s.jsxs("div", { ref: Me, className: [ut, d ? "" : D].filter(Boolean).join(" "), children: [
          /* @__PURE__ */ s.jsxs("div", { ref: C, className: ht, onPointerLeave: () => N.current?.leave(), children: [
            /* @__PURE__ */ s.jsx("ul", { className: Ue, children: y.map((t, n) => /* @__PURE__ */ s.jsx(
              "li",
              {
                ref: (e) => {
                  Z.current[n] = e;
                },
                className: xt,
                "data-on": ee && K === "pill" && n === Q ? "" : void 0,
                onPointerEnter: (e) => N.current?.enter(n, e),
                onPointerDown: (e) => N.current?.press(e),
                onFocus: (e) => N.current?.focus(n, e),
                onBlur: () => N.current?.blur(),
                children: We(
                  t,
                  {
                    className: gt,
                    "aria-current": n === Q ? "page" : void 0,
                    "aria-label": t.ariaLabel,
                    onClick: (e) => Fe(t, n, e)
                  },
                  /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                    ee && /* @__PURE__ */ s.jsx("span", { className: bt, "aria-hidden": "true" }),
                    /* @__PURE__ */ s.jsx("span", { className: mt, children: q(t) }),
                    ee && /* @__PURE__ */ s.jsx("span", { className: vt, "aria-hidden": "true", children: q(t) })
                  ] })
                )
              },
              `${t.label}-${n}`
            )) }),
            Pe && /* @__PURE__ */ s.jsx("span", { ref: je, className: _t, "aria-hidden": "true" }),
            Pe && /* @__PURE__ */ s.jsx("div", { ref: ke, className: wt, "aria-hidden": "true", children: y.map((t, n) => /* @__PURE__ */ s.jsx("span", { className: Ce, children: q(t) }, `${t.label}-${n}`)) }),
            K === "dot" && /* @__PURE__ */ s.jsx("span", { ref: Ne, className: yt, "aria-hidden": "true" })
          ] }),
          !d && /* @__PURE__ */ s.jsx("span", { className: se })
        ] }),
        m && /* @__PURE__ */ s.jsxs(
          "button",
          {
            ref: Y,
            type: "button",
            className: [Et, d ? Rt : D].join(" "),
            "aria-expanded": _,
            "aria-controls": Re,
            "aria-label": _ ? "Close menu" : "Open menu",
            onClick: lt,
            children: [
              /* @__PURE__ */ s.jsxs("span", { className: Mt, "aria-hidden": "true", children: [
                /* @__PURE__ */ s.jsx("span", { className: jt }),
                /* @__PURE__ */ s.jsx("span", { className: kt })
              ] }),
              !d && /* @__PURE__ */ s.jsx("span", { className: se })
            ]
          }
        ),
        m && xe && /* @__PURE__ */ s.jsxs("div", { ref: Le, id: Re, className: [Nt, D].join(" "), children: [
          /* @__PURE__ */ s.jsx("ul", { className: $t, children: y.map((t, n) => /* @__PURE__ */ s.jsx("li", { children: We(
            t,
            {
              className: At,
              "aria-current": n === Q ? "page" : void 0,
              tabIndex: _ ? void 0 : -1,
              onClick: (e) => {
                Fe(t, n, e), B(!1), Ee?.(!1);
              }
            },
            q(t)
          ) }, `${t.label}-${n}`)) }),
          /* @__PURE__ */ s.jsx("span", { className: se })
        ] }),
        /* @__PURE__ */ s.jsx("div", { ref: Ie, className: Lt, "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("div", { ref: Oe, className: Ue, children: y.map((t, n) => /* @__PURE__ */ s.jsx("span", { className: Ce, children: q(t) }, `${t.label}-${n}`)) }) }),
        d && /* @__PURE__ */ s.jsx("span", { className: ct })
      ]
    }
  );
};
export {
  St as default
};
