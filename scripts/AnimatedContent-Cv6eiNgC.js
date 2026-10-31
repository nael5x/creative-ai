import { r as En, j as fu } from "./components-entry-DM4gR148.js";
function rr(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Uo(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e;
}
var St = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ki = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, As, Ue, fe, Rt = 1e8, oe = 1 / Rt, ls = Math.PI * 2, cu = ls / 4, hu = 0, Wo = Math.sqrt, _u = Math.cos, du = Math.sin, Le = function(e) {
  return typeof e == "string";
}, xe = function(e) {
  return typeof e == "function";
}, ur = function(e) {
  return typeof e == "number";
}, zs = function(e) {
  return typeof e > "u";
}, Qt = function(e) {
  return typeof e == "object";
}, ut = function(e) {
  return e !== !1;
}, Fs = function() {
  return typeof window < "u";
}, fn = function(e) {
  return xe(e) || Le(e);
}, $o = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ze = Array.isArray, pu = /random\([^)]+\)/g, gu = /,\s*/g, oo = /(?:-?\.?\d|\.)+/gi, Go = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ai = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Kn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ho = /[+-]=-?[.\d]+/, mu = /[^,'"\[\]\s]+/gi, vu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _e, Wt, fs, Is, Ct = {}, An = {}, qo, Ko = function(e) {
  return (An = mi(e, Ct)) && ht;
}, Ls = function(e, r) {
  return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()");
}, Qi = function(e, r) {
  return !r && console.warn(e);
}, Qo = function(e, r) {
  return e && (Ct[e] = r) && An && (An[e] = r) || Ct;
}, Zi = function() {
  return 0;
}, yu = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, bn = {
  suppressEvents: !0,
  kill: !1
}, xu = {
  suppressEvents: !0
}, Ns = {}, wr = [], cs = {}, Zo, vt = {}, Qn = {}, ao = 30, Sn = [], Bs = "", Ys = function(e) {
  var r = e[0], t, i;
  if (Qt(r) || xe(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
    for (i = Sn.length; i-- && !Sn[i].targetTest(r); )
      ;
    t = Sn[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new ya(e[i], t))) || e.splice(i, 1);
  return e;
}, Xr = function(e) {
  return e._gsap || Ys(Et(e))[0]._gsap;
}, jo = function(e, r, t) {
  return (t = e[r]) && xe(t) ? e[r]() : zs(t) && e.getAttribute && e.getAttribute(r) || t;
}, lt = function(e, r) {
  return (e = e.split(",")).forEach(r) || e;
}, Se = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, he = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, fi = function(e, r) {
  var t = r.charAt(0), i = parseFloat(r.substr(2));
  return e = parseFloat(e), t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i;
}, wu = function(e, r) {
  for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t; )
    ;
  return i < t;
}, zn = function() {
  var e = wr.length, r = wr.slice(0), t, i;
  for (cs = {}, wr.length = 0, t = 0; t < e; t++)
    i = r[t], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Xs = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Jo = function(e, r, t, i) {
  wr.length && !Ue && zn(), e.render(r, t, !!(Ue && r < 0 && Xs(e))), wr.length && !Ue && zn();
}, ea = function(e) {
  var r = parseFloat(e);
  return (r || r === 0) && (e + "").match(mu).length < 2 ? r : Le(e) ? e.trim() : e;
}, ta = function(e) {
  return e;
}, kt = function(e, r) {
  for (var t in r)
    t in e || (e[t] = r[t]);
  return e;
}, Tu = function(e) {
  return function(r, t) {
    for (var i in t)
      i in r || i === "duration" && e || i === "ease" || (r[i] = t[i]);
  };
}, mi = function(e, r) {
  for (var t in r)
    e[t] = r[t];
  return e;
}, uo = function a(e, r) {
  for (var t in r)
    t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = Qt(r[t]) ? a(e[t] || (e[t] = {}), r[t]) : r[t]);
  return e;
}, Fn = function(e, r) {
  var t = {}, i;
  for (i in e)
    i in r || (t[i] = e[i]);
  return t;
}, Li = function(e) {
  var r = e.parent || _e, t = e.keyframes ? Tu(Ze(e.keyframes)) : kt;
  if (ut(e.inherit))
    for (; r; )
      t(e, r.vars.defaults), r = r.parent || r._dp;
  return e;
}, bu = function(e, r) {
  for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t]; )
    ;
  return t < 0;
}, ra = function(e, r, t, i, n) {
  var s = e[i], o;
  if (n)
    for (o = r[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (r._next = s._next, s._next = r) : (r._next = e[t], e[t] = r), r._next ? r._next._prev = r : e[i] = r, r._prev = s, r.parent = r._dp = e, r;
}, Wn = function(e, r, t, i) {
  t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
  var n = r._prev, s = r._next;
  n ? n._next = s : e[t] === r && (e[t] = s), s ? s._prev = n : e[i] === r && (e[i] = n), r._next = r._prev = r.parent = null;
}, Sr = function(e, r) {
  e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Vr = function(e, r) {
  if (e && (!r || r._end > e._dur || r._start < 0))
    for (var t = e; t; )
      t._dirty = 1, t = t.parent;
  return e;
}, Su = function(e) {
  for (var r = e.parent; r && r.parent; )
    r._dirty = 1, r.totalDuration(), r = r.parent;
  return e;
}, hs = function(e, r, t, i) {
  return e._startAt && (Ue ? e._startAt.revert(bn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, i));
}, Cu = function a(e) {
  return !e || e._ts && a(e.parent);
}, lo = function(e) {
  return e._repeat ? vi(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, vi = function(e, r) {
  var t = Math.floor(e = he(e / r));
  return e && t === e ? t - 1 : t;
}, In = function(e, r) {
  return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur);
}, $n = function(e) {
  return e._end = he(e._start + (e._tDur / Math.abs(e._ts || e._rts || oe) || 0));
}, Gn = function(e, r) {
  var t = e._dp;
  return t && t.smoothChildTiming && e._ts && (e._start = he(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), $n(e), t._dirty || Vr(t, e)), e;
}, ia = function(e, r) {
  var t;
  if ((r._time || !r._dur && r._initted || r._start < e._time && (r._dur || !r.add)) && (t = In(e.rawTime(), r), (!r._dur || on(0, r.totalDuration(), t) - r._tTime > oe) && r.render(t, !0)), Vr(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (t = e; t._dp; )
        t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
    e._zTime = -oe;
  }
}, Gt = function(e, r, t, i) {
  return r.parent && Sr(r), r._start = he((ur(t) ? t : t || e !== _e ? Mt(e, t, r) : e._time) + r._delay), r._end = he(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), ra(e, r, "_first", "_last", e._sort ? "_start" : 0), _s(r) || (e._recent = r), i || ia(e, r), e._ts < 0 && Gn(e, e._tTime), e;
}, na = function(e, r) {
  return (Ct.ScrollTrigger || Ls("scrollTrigger", r)) && Ct.ScrollTrigger.create(r, e);
}, sa = function(e, r, t, i, n) {
  if (Us(e, r, n), !e._initted)
    return 1;
  if (!t && e._pt && !Ue && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Zo !== xt.frame)
    return wr.push(e), e._lazy = [n, i], 1;
}, ku = function a(e) {
  var r = e.parent;
  return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r));
}, _s = function(e) {
  var r = e.data;
  return r === "isFromStart" || r === "isStart";
}, Pu = function(e, r, t, i) {
  var n = e.ratio, s = r < 0 || !r && (!e._start && ku(e) && !(!e._initted && _s(e)) || (e._ts < 0 || e._dp._ts < 0) && !_s(e)) ? 0 : 1, o = e._rDelay, u = 0, l, f, _;
  if (o && e._repeat && (u = on(0, e._tDur, r), f = vi(u, o), e._yoyo && f & 1 && (s = 1 - s), f !== vi(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Ue || i || e._zTime === oe || !r && e._zTime) {
    if (!e._initted && sa(e, r, i, t, u))
      return;
    for (_ = e._zTime, e._zTime = r || (t ? oe : 0), t || (t = r && !_), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = u, l = e._pt; l; )
      l.r(s, l.d), l = l._next;
    r < 0 && hs(e, r, t, !0), e._onUpdate && !t && Tt(e, "onUpdate"), u && e._repeat && !t && e.parent && Tt(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === s && (s && Sr(e, 1), !t && !Ue && (Tt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = r);
}, Mu = function(e, r, t) {
  var i;
  if (t > r)
    for (i = e._first; i && i._start <= t; ) {
      if (i.data === "isPause" && i._start > r)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= t; ) {
      if (i.data === "isPause" && i._start < r)
        return i;
      i = i._prev;
    }
}, yi = function(e, r, t, i) {
  var n = e._repeat, s = he(r) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : he(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && Gn(e, e._tTime = e._tDur * o), e.parent && $n(e), t || Vr(e.parent, e), e;
}, fo = function(e) {
  return e instanceof at ? Vr(e) : yi(e, e._dur);
}, Ou = {
  _start: 0,
  endTime: Zi,
  totalDuration: Zi
}, Mt = function a(e, r, t) {
  var i = e.labels, n = e._recent || Ou, s = e.duration() >= Rt ? n.endTime(!1) : e._dur, o, u, l;
  return Le(r) && (isNaN(r) || r in i) ? (u = r.charAt(0), l = r.substr(-1) === "%", o = r.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (r = r.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (l ? (o < 0 ? n : t).totalDuration() / 100 : 1)) : o < 0 ? (r in i || (i[r] = s), i[r]) : (u = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), l && t && (u = u / 100 * (Ze(t) ? t[0] : t).totalDuration()), o > 1 ? a(e, r.substr(0, o - 1), t) + u : s + u)) : r == null ? s : +r;
}, Ni = function(e, r, t) {
  var i = ur(r[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = r[n], o, u;
  if (i && (s.duration = r[1]), s.parent = t, e) {
    for (o = s, u = t; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = ut(u.vars.inherit) && u.parent;
    s.immediateRender = ut(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = r[n - 1];
  }
  return new Me(r[0], s, r[n + 1]);
}, Mr = function(e, r) {
  return e || e === 0 ? r(e) : r;
}, on = function(e, r, t) {
  return t < e ? e : t > r ? r : t;
}, Ke = function(e, r) {
  return !Le(e) || !(r = vu.exec(e)) ? "" : r[1];
}, Du = function(e, r, t) {
  return Mr(t, function(i) {
    return on(e, r, i);
  });
}, ds = [].slice, oa = function(e, r) {
  return e && Qt(e) && "length" in e && (!r && !e.length || e.length - 1 in e && Qt(e[0])) && !e.nodeType && e !== Wt;
}, Ru = function(e, r, t) {
  return t === void 0 && (t = []), e.forEach(function(i) {
    var n;
    return Le(i) && !r || oa(i, 1) ? (n = t).push.apply(n, Et(i)) : t.push(i);
  }) || t;
}, Et = function(e, r, t) {
  return fe && !r && fe.selector ? fe.selector(e) : Le(e) && !t && (fs || !xi()) ? ds.call((r || Is).querySelectorAll(e), 0) : Ze(e) ? Ru(e, t) : oa(e) ? ds.call(e, 0) : e ? [e] : [];
}, ps = function(e) {
  return e = Et(e)[0] || Qi("Invalid scope") || {}, function(r) {
    var t = e.current || e.nativeElement || e;
    return Et(r, t.querySelectorAll ? t : t === e ? Qi("Invalid scope") || Is.createElement("div") : e);
  };
}, aa = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, ua = function(e) {
  if (xe(e))
    return e;
  var r = Qt(e) ? e : {
    each: e
  }, t = Ur(r.ease), i = r.from || 0, n = parseFloat(r.base) || 0, s = {}, o = i > 0 && i < 1, u = isNaN(i) || o, l = r.axis, f = i, _ = i;
  return Le(i) ? f = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && u && (f = i[0], _ = i[1]), function(d, c, p) {
    var h = (p || r).length, m = s[h], T, w, S, y, b, M, x, P, k;
    if (!m) {
      if (k = r.grid === "auto" ? 0 : (r.grid || [1, Rt])[1], !k) {
        for (x = -Rt; x < (x = p[k++].getBoundingClientRect().left) && k < h; )
          ;
        k < h && k--;
      }
      for (m = s[h] = [], T = u ? Math.min(k, h) * f - 0.5 : i % k, w = k === Rt ? 0 : u ? h * _ / k - 0.5 : i / k | 0, x = 0, P = Rt, M = 0; M < h; M++)
        S = M % k - T, y = w - (M / k | 0), m[M] = b = l ? Math.abs(l === "y" ? y : S) : Wo(S * S + y * y), b > x && (x = b), b < P && (P = b);
      i === "random" && aa(m), m.max = x - P, m.min = P, m.v = h = (parseFloat(r.amount) || parseFloat(r.each) * (k > h ? h - 1 : l ? l === "y" ? h / k : k : Math.max(k, h / k)) || 0) * (i === "edges" ? -1 : 1), m.b = h < 0 ? n - h : n, m.u = Ke(r.amount || r.each) || 0, t = t && h < 0 ? Wu(t) : t;
    }
    return h = (m[d] - m.min) / m.max || 0, he(m.b + (t ? t(h) : h) * m.v) + m.u;
  };
}, gs = function(e) {
  var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(t) {
    var i = he(Math.round(parseFloat(t) / e) * e * r);
    return (i - i % 1) / r + (ur(t) ? 0 : Ke(t));
  };
}, la = function(e, r) {
  var t = Ze(e), i, n;
  return !t && Qt(e) && (i = t = e.radius || Rt, e.values ? (e = Et(e.values), (n = !ur(e[0])) && (i *= i)) : e = gs(e.increment)), Mr(r, t ? xe(e) ? function(s) {
    return n = e(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = Rt, f = 0, _ = e.length, d, c; _--; )
      n ? (d = e[_].x - o, c = e[_].y - u, d = d * d + c * c) : d = Math.abs(e[_] - o), d < l && (l = d, f = _);
    return f = !i || l <= i ? e[f] : s, n || f === s || ur(s) ? f : f + Ke(s);
  } : gs(e));
}, fa = function(e, r, t, i) {
  return Mr(Ze(e) ? !r : t === !0 ? !!(t = 0) : !i, function() {
    return Ze(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * 0.99)) / t) * t * i) / i;
  });
}, Eu = function() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(i) {
    return r.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, Au = function(e, r) {
  return function(t) {
    return e(parseFloat(t)) + (r || Ke(t));
  };
}, zu = function(e, r, t) {
  return ha(e, r, 0, 1, t);
}, ca = function(e, r, t) {
  return Mr(t, function(i) {
    return e[~~r(i)];
  });
}, Fu = function a(e, r, t) {
  var i = r - e;
  return Ze(e) ? ca(e, a(0, e.length), r) : Mr(t, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, Iu = function a(e, r, t) {
  var i = r - e, n = i * 2;
  return Ze(e) ? ca(e, a(0, e.length - 1), r) : Mr(t, function(s) {
    return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s);
  });
}, ji = function(e) {
  return e.replace(pu, function(r) {
    var t = r.indexOf("[") + 1, i = r.substring(t || 7, t ? r.indexOf("]") : r.length - 1).split(gu);
    return fa(t ? i : +i[0], t ? 0 : +i[1], +i[2] || 1e-5);
  });
}, ha = function(e, r, t, i, n) {
  var s = r - e, o = i - t;
  return Mr(n, function(u) {
    return t + ((u - e) / s * o || 0);
  });
}, Lu = function a(e, r, t, i) {
  var n = isNaN(e + r) ? 0 : function(c) {
    return (1 - c) * e + c * r;
  };
  if (!n) {
    var s = Le(e), o = {}, u, l, f, _, d;
    if (t === !0 && (i = 1) && (t = null), s)
      e = {
        p: e
      }, r = {
        p: r
      };
    else if (Ze(e) && !Ze(r)) {
      for (f = [], _ = e.length, d = _ - 2, l = 1; l < _; l++)
        f.push(a(e[l - 1], e[l]));
      _--, n = function(p) {
        p *= _;
        var h = Math.min(d, ~~p);
        return f[h](p - h);
      }, t = r;
    } else i || (e = mi(Ze(e) ? [] : {}, e));
    if (!f) {
      for (u in r)
        Vs.call(o, e, u, "get", r[u]);
      n = function(p) {
        return Gs(p, o) || (s ? e.p : e);
      };
    }
  }
  return Mr(t, n);
}, co = function(e, r, t) {
  var i = e.labels, n = Rt, s, o, u;
  for (s in i)
    o = i[s] - r, o < 0 == !!t && o && n > (o = Math.abs(o)) && (u = s, n = o);
  return u;
}, Tt = function(e, r, t) {
  var i = e.vars, n = i[r], s = fe, o = e._ctx, u, l, f;
  if (n)
    return u = i[r + "Params"], l = i.callbackScope || e, t && wr.length && zn(), o && (fe = o), f = u ? n.apply(l, u) : n.call(l), fe = s, f;
}, Di = function(e) {
  return Sr(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ue), e.progress() < 1 && Tt(e, "onInterrupt"), e;
}, ui, _a = [], da = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Fs() || e.headless) {
      var r = e.name, t = xe(e), i = r && !t && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Zi,
        render: Gs,
        add: Vs,
        kill: el,
        modifier: Ju,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: $s,
        aliases: {},
        register: 0
      };
      if (xi(), e !== i) {
        if (vt[r])
          return;
        kt(i, kt(Fn(e, n), s)), mi(i.prototype, mi(n, Fn(e, s))), vt[i.prop = r] = i, e.targetTest && (Sn.push(i), Ns[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin";
      }
      Qo(r, i), e.register && e.register(ht, i, ft);
    } else
      _a.push(e);
}, se = 255, Ri = {
  aqua: [0, se, se],
  lime: [0, se, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, se],
  navy: [0, 0, 128],
  white: [se, se, se],
  olive: [128, 128, 0],
  yellow: [se, se, 0],
  orange: [se, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [se, 0, 0],
  pink: [se, 192, 203],
  cyan: [0, se, se],
  transparent: [se, se, se, 0]
}, Zn = function(e, r, t) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (t - r) * e * 6 : e < 0.5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * se + 0.5 | 0;
}, pa = function(e, r, t) {
  var i = e ? ur(e) ? [e >> 16, e >> 8 & se, e & se] : 0 : Ri.black, n, s, o, u, l, f, _, d, c, p;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ri[e])
      i = Ri[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & se, i & se, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & se, e & se];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = p = e.match(oo), !r)
        u = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, s = f <= 0.5 ? f * (l + 1) : f + l - f * l, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Zn(u + 1 / 3, n, s), i[1] = Zn(u, n, s), i[2] = Zn(u - 1 / 3, n, s);
      else if (~e.indexOf("="))
        return i = e.match(Go), t && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(oo) || Ri.transparent;
    i = i.map(Number);
  }
  return r && !p && (n = i[0] / se, s = i[1] / se, o = i[2] / se, _ = Math.max(n, s, o), d = Math.min(n, s, o), f = (_ + d) / 2, _ === d ? u = l = 0 : (c = _ - d, l = f > 0.5 ? c / (2 - _ - d) : c / (_ + d), u = _ === n ? (s - o) / c + (s < o ? 6 : 0) : _ === s ? (o - n) / c + 2 : (n - s) / c + 4, u *= 60), i[0] = ~~(u + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), t && i.length < 4 && (i[3] = 1), i;
}, ga = function(e) {
  var r = [], t = [], i = -1;
  return e.split(Tr).forEach(function(n) {
    var s = n.match(ai) || [];
    r.push.apply(r, s), t.push(i += s.length + 1);
  }), r.c = t, r;
}, ho = function(e, r, t) {
  var i = "", n = (e + i).match(Tr), s = r ? "hsla(" : "rgba(", o = 0, u, l, f, _;
  if (!n)
    return e;
  if (n = n.map(function(d) {
    return (d = pa(d, r, 1)) && s + (r ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), t && (f = ga(e), u = t.c, u.join(i) !== f.c.join(i)))
    for (l = e.replace(Tr, "1").split(ai), _ = l.length - 1; o < _; o++)
      i += l[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
  if (!l)
    for (l = e.split(Tr), _ = l.length - 1; o < _; o++)
      i += l[o] + n[o];
  return i + l[_];
}, Tr = (function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Ri)
    a += "|" + e + "\\b";
  return new RegExp(a + ")", "gi");
})(), Nu = /hsl[a]?\(/, ma = function(e) {
  var r = e.join(" "), t;
  if (Tr.lastIndex = 0, Tr.test(r))
    return t = Nu.test(r), e[1] = ho(e[1], t), e[0] = ho(e[0], t, ga(e[1])), !0;
}, Ji, xt = (function() {
  var a = Date.now, e = 500, r = 33, t = a(), i = t, n = 1e3 / 240, s = n, o = [], u, l, f, _, d, c, p = function h(m) {
    var T = a() - i, w = m === !0, S, y, b, M;
    if ((T > e || T < 0) && (t += T - r), i += T, b = i - t, S = b - s, (S > 0 || w) && (M = ++_.frame, d = b - _.time * 1e3, _.time = b = b / 1e3, s += S + (S >= n ? 4 : n - S), y = 1), w || (u = l(h)), y)
      for (c = 0; c < o.length; c++)
        o[c](b, d, M, m);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return d / (1e3 / (m || 60));
    },
    wake: function() {
      qo && (!fs && Fs() && (Wt = fs = window, Is = Wt.document || {}, Ct.gsap = ht, (Wt.gsapVersions || (Wt.gsapVersions = [])).push(ht.version), Ko(An || Wt.GreenSockGlobals || !Wt.gsap && Wt || {}), _a.forEach(da)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && _.sleep(), l = f || function(m) {
        return setTimeout(m, s - _.time * 1e3 + 1 | 0);
      }, Ji = 1, p(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(u), Ji = 0, l = Zi;
    },
    lagSmoothing: function(m, T) {
      e = m || 1 / 0, r = Math.min(T || 33, e);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = _.time * 1e3 + n;
    },
    add: function(m, T, w) {
      var S = T ? function(y, b, M, x) {
        m(y, b, M, x), _.remove(S);
      } : m;
      return _.remove(m), o[w ? "unshift" : "push"](S), xi(), S;
    },
    remove: function(m, T) {
      ~(T = o.indexOf(m)) && o.splice(T, 1) && c >= T && c--;
    },
    _listeners: o
  }, _;
})(), xi = function() {
  return !Ji && xt.wake();
}, Q = {}, Bu = /^[\d.\-M][\d.\-,\s]/, Yu = /["']/g, Xu = function(e) {
  for (var r = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, s = t.length, o, u, l; n < s; n++)
    u = t[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, o), r[i] = isNaN(l) ? l.replace(Yu, "").trim() : +l, i = u.substr(o + 1).trim();
  return r;
}, Vu = function(e) {
  var r = e.indexOf("(") + 1, t = e.indexOf(")"), i = e.indexOf("(", r);
  return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t);
}, Uu = function(e) {
  var r = (e + "").split("("), t = Q[r[0]];
  return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Xu(r[1])] : Vu(e).split(",").map(ea)) : Q._CE && Bu.test(e) ? Q._CE("", e) : t;
}, Wu = function(e) {
  return function(r) {
    return 1 - e(1 - r);
  };
}, Ur = function(e, r) {
  return e && (xe(e) ? e : Q[e] || Uu(e)) || r;
}, Zr = function(e, r, t, i) {
  t === void 0 && (t = function(u) {
    return 1 - r(1 - u);
  }), i === void 0 && (i = function(u) {
    return u < 0.5 ? r(u * 2) / 2 : 1 - r((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: r,
    easeOut: t,
    easeInOut: i
  }, s;
  return lt(e, function(o) {
    Q[o] = Ct[o] = n, Q[s = o.toLowerCase()] = t;
    for (var u in n)
      Q[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = Q[o + "." + u] = n[u];
  }), n;
}, va = function(e) {
  return function(r) {
    return r < 0.5 ? (1 - e(1 - r * 2)) / 2 : 0.5 + e((r - 0.5) * 2) / 2;
  };
}, jn = function a(e, r, t) {
  var i = r >= 1 ? r : 1, n = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1), s = n / ls * (Math.asin(1 / i) || 0), o = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * du((f - s) * n) + 1;
  }, u = e === "out" ? o : e === "in" ? function(l) {
    return 1 - o(1 - l);
  } : va(o);
  return n = ls / n, u.config = function(l, f) {
    return a(e, l, f);
  }, u;
}, Jn = function a(e, r) {
  r === void 0 && (r = 1.70158);
  var t = function(s) {
    return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
  }, i = e === "out" ? t : e === "in" ? function(n) {
    return 1 - t(1 - n);
  } : va(t);
  return i.config = function(n) {
    return a(e, n);
  }, i;
};
lt("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, e) {
  var r = e < 5 ? e + 1 : e;
  Zr(a + ",Power" + (r - 1), e ? function(t) {
    return Math.pow(t, r);
  } : function(t) {
    return t;
  }, function(t) {
    return 1 - Math.pow(1 - t, r);
  }, function(t) {
    return t < 0.5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2;
  });
});
Q.Linear.easeNone = Q.none = Q.Linear.easeIn;
Zr("Elastic", jn("in"), jn("out"), jn());
(function(a, e) {
  var r = 1 / e, t = 2 * r, i = 2.5 * r, n = function(o) {
    return o < r ? a * o * o : o < t ? a * Math.pow(o - 1.5 / e, 2) + 0.75 : o < i ? a * (o -= 2.25 / e) * o + 0.9375 : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  Zr("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Zr("Expo", function(a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
Zr("Circ", function(a) {
  return -(Wo(1 - a * a) - 1);
});
Zr("Sine", function(a) {
  return a === 1 ? 1 : -_u(a * cu) + 1;
});
Zr("Back", Jn("in"), Jn("out"), Jn());
Q.SteppedEase = Q.steps = Ct.SteppedEase = {
  config: function(e, r) {
    e === void 0 && (e = 1);
    var t = 1 / e, i = e + (r ? 0 : 1), n = r ? 1 : 0, s = 1 - oe;
    return function(o) {
      return ((i * on(0, s, o) | 0) + n) * t;
    };
  }
};
Ki.ease = Q["quad.out"];
lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return Bs += a + "," + a + "Params,";
});
var ya = function(e, r) {
  this.id = hu++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : jo, this.set = r ? r.getSetter : $s;
}, en = /* @__PURE__ */ (function() {
  function a(r) {
    this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, yi(this, +r.duration, 1, 1), this.data = r.data, fe && (this._ctx = fe, fe.data.push(this)), Ji || xt.wake();
  }
  var e = a.prototype;
  return e.delay = function(t) {
    return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, e.duration = function(t) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(t) {
    return arguments.length ? (this._dirty = 0, yi(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(t, i) {
    if (xi(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Gn(this, t), !n._dp || n.parent || ia(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Gt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === oe || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Jo(this, t, i)), this;
  }, e.time = function(t, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + lo(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(t, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(t, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + lo(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(t, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? vi(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(t, i) {
    if (!arguments.length)
      return this._rts === -oe ? 0 : this._rts;
    if (this._rts === t)
      return this;
    var n = this.parent && this._ts ? In(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -oe ? 0 : this._rts, this.totalTime(on(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), $n(this), Su(this);
  }, e.paused = function(t) {
    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== oe && (this._tTime -= oe)))), this) : this._ps;
  }, e.startTime = function(t) {
    if (arguments.length) {
      this._start = he(t);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Gt(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(t) {
    return this._start + (ut(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(t) {
    var i = this.parent || this._dp;
    return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? In(i.rawTime(t), this) : this._tTime : this._tTime;
  }, e.revert = function(t) {
    t === void 0 && (t = xu);
    var i = Ue;
    return Ue = t, Xs(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), this.data !== "nested" && t.kill !== !1 && this.kill(), Ue = i, this;
  }, e.globalTime = function(t) {
    for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(t) : n;
  }, e.repeat = function(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, fo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(t) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = t, fo(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, e.seek = function(t, i) {
    return this.totalTime(Mt(this, t), ut(i));
  }, e.restart = function(t, i) {
    return this.play().totalTime(t ? -this._delay : 0, ut(i)), this._dur || (this._zTime = -oe), this;
  }, e.play = function(t, i) {
    return t != null && this.seek(t, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(t, i) {
    return t != null && this.seek(t || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(t, i) {
    return t != null && this.seek(t, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -oe : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -oe, this;
  }, e.isActive = function() {
    var t = this.parent || this._dp, i = this._start, n;
    return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - oe);
  }, e.eventCallback = function(t, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[t] = i, n && (s[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = i)) : delete s[t], this) : s[t];
  }, e.then = function(t) {
    var i = this, n = i._prom;
    return new Promise(function(s) {
      var o = xe(t) ? t : ta, u = function() {
        var f = i.then;
        i.then = null, n && n(), xe(o) && (o = o(i)) && (o.then || o === i) && (i.then = f), s(o), i.then = f;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? u() : i._prom = u;
    });
  }, e.kill = function() {
    Di(this);
  }, a;
})();
kt(en.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -oe,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var at = /* @__PURE__ */ (function(a) {
  Uo(e, a);
  function e(t, i) {
    var n;
    return t === void 0 && (t = {}), n = a.call(this, t) || this, n.labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = ut(t.sortChildren), _e && Gt(t.parent || _e, rr(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && na(rr(n), t.scrollTrigger), n;
  }
  var r = e.prototype;
  return r.to = function(i, n, s) {
    return Ni(0, arguments, this), this;
  }, r.from = function(i, n, s) {
    return Ni(1, arguments, this), this;
  }, r.fromTo = function(i, n, s, o) {
    return Ni(2, arguments, this), this;
  }, r.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, Li(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Me(i, n, Mt(this, s), 1), this;
  }, r.call = function(i, n, s) {
    return Gt(this, Me.delayedCall(0, i, n), s);
  }, r.staggerTo = function(i, n, s, o, u, l, f) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = f, s.parent = this, new Me(i, s, Mt(this, u)), this;
  }, r.staggerFrom = function(i, n, s, o, u, l, f) {
    return s.runBackwards = 1, Li(s).immediateRender = ut(s.immediateRender), this.staggerTo(i, n, s, o, u, l, f);
  }, r.staggerFromTo = function(i, n, s, o, u, l, f, _) {
    return o.startAt = s, Li(o).immediateRender = ut(o.immediateRender), this.staggerTo(i, n, o, u, l, f, _);
  }, r.render = function(i, n, s) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = i <= 0 ? 0 : he(i), _ = this._zTime < 0 != i < 0 && (this._initted || !l), d, c, p, h, m, T, w, S, y, b, M, x;
    if (this !== _e && f > u && i >= 0 && (f = u), f !== this._tTime || s || _) {
      if (o !== this._time && l && (f += this._time - o, i += this._time - o), d = f, y = this._start, S = this._ts, T = !S, _ && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (M = this._yoyo, m = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, s);
        if (d = he(f % m), f === u ? (h = this._repeat, d = l) : (b = he(f / m), h = ~~b, h && h === b && (d = l, h--), d > l && (d = l)), b = vi(this._tTime, m), !o && this._tTime && b !== h && this._tTime - b * m - this._dur <= 0 && (b = h), M && h & 1 && (d = l - d, x = 1), h !== b && !this._lock) {
          var P = M && b & 1, k = P === (M && h & 1);
          if (h < b && (P = !P), o = P ? 0 : f % l ? l : f, this._lock = 1, this.render(o || (x ? 0 : he(h * m)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && Tt(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1, b = h), o && o !== this._time || T !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, k && (this._lock = 2, o = P ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !T)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = Mu(this, he(o), he(d)), w && (f -= d - (d = w._start))), this._tTime = f, this._time = d, this._act = !!S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && f && l && !n && !b && (Tt(this, "onStart"), this._tTime !== f))
        return this;
      if (d >= o && i >= 0)
        for (c = this._first; c; ) {
          if (p = c._next, (c._act || d >= c._start) && c._ts && w !== c) {
            if (c.parent !== this)
              return this.render(i, n, s);
            if (c.render(c._ts > 0 ? (d - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (d - c._start) * c._ts, n, s), d !== this._time || !this._ts && !T) {
              w = 0, p && (f += this._zTime = -oe);
              break;
            }
          }
          c = p;
        }
      else {
        c = this._last;
        for (var C = i < 0 ? i : d; c; ) {
          if (p = c._prev, (c._act || C <= c._end) && c._ts && w !== c) {
            if (c.parent !== this)
              return this.render(i, n, s);
            if (c.render(c._ts > 0 ? (C - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (C - c._start) * c._ts, n, s || Ue && Xs(c)), d !== this._time || !this._ts && !T) {
              w = 0, p && (f += this._zTime = C ? -oe : oe);
              break;
            }
          }
          c = p;
        }
      }
      if (w && !n && (this.pause(), w.render(d >= o ? 0 : -oe)._zTime = d >= o ? 1 : -1, this._ts))
        return this._start = y, $n(this), this.render(i, n, s);
      this._onUpdate && !n && Tt(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && o) && (y === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && Sr(this, 1), !n && !(i < 0 && !o) && (f || o || !u) && (Tt(this, f === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, r.add = function(i, n) {
    var s = this;
    if (ur(n) || (n = Mt(this, n, i)), !(i instanceof en)) {
      if (Ze(i))
        return i.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (Le(i))
        return this.addLabel(i, n);
      if (xe(i))
        i = Me.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Gt(this, i, n) : this;
  }, r.getChildren = function(i, n, s, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -Rt);
    for (var u = [], l = this._first; l; )
      l._start >= o && (l instanceof Me ? n && u.push(l) : (s && u.push(l), i && u.push.apply(u, l.getChildren(!0, n, s)))), l = l._next;
    return u;
  }, r.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, r.remove = function(i) {
    return Le(i) ? this.removeLabel(i) : xe(i) ? this.killTweensOf(i) : (i.parent === this && Wn(this, i), i === this._recent && (this._recent = this._last), Vr(this));
  }, r.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = he(xt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, r.addLabel = function(i, n) {
    return this.labels[i] = Mt(this, n), this;
  }, r.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, r.addPause = function(i, n, s) {
    var o = Me.delayedCall(0, n || Zi, s);
    return o.data = "isPause", this._hasPause = 1, Gt(this, o, Mt(this, i));
  }, r.removePause = function(i) {
    var n = this._first;
    for (i = Mt(this, i); n; )
      n._start === i && n.data === "isPause" && Sr(n), n = n._next;
  }, r.killTweensOf = function(i, n, s) {
    for (var o = this.getTweensOf(i, s), u = o.length; u--; )
      gr !== o[u] && o[u].kill(i, n);
    return this;
  }, r.getTweensOf = function(i, n) {
    for (var s = [], o = Et(i), u = this._first, l = ur(n), f; u; )
      u instanceof Me ? wu(u._targets, o) && (l ? (!gr || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (f = u.getTweensOf(o, n)).length && s.push.apply(s, f), u = u._next;
    return s;
  }, r.tweenTo = function(i, n) {
    n = n || {};
    var s = this, o = Mt(s, i), u = n, l = u.startAt, f = u.onStart, _ = u.onStartParams, d = u.immediateRender, c, p = Me.to(s, kt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || oe,
      onStart: function() {
        if (s.pause(), !c) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
          p._dur !== m && yi(p, m, 0, 1).render(p._time, !0, !0), c = 1;
        }
        f && f.apply(p, _ || []);
      }
    }, n));
    return d ? p.render(0) : p;
  }, r.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, kt({
      startAt: {
        time: Mt(this, i)
      }
    }, s));
  }, r.recent = function() {
    return this._recent;
  }, r.nextLabel = function(i) {
    return i === void 0 && (i = this._time), co(this, Mt(this, i));
  }, r.previousLabel = function(i) {
    return i === void 0 && (i = this._time), co(this, Mt(this, i), 1);
  }, r.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + oe);
  }, r.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    var o = this._first, u = this.labels, l;
    for (i = he(i); o; )
      o._start >= s && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (l in u)
        u[l] >= s && (u[l] += i);
    return Vr(this);
  }, r.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return a.prototype.invalidate.call(this, i);
  }, r.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Vr(this);
  }, r.totalDuration = function(i) {
    var n = 0, s = this, o = s._last, u = Rt, l, f, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), f = o._start, f > u && s._sort && o._ts && !s._lock ? (s._lock = 1, Gt(s, o, f - o._delay, 1)._lock = 0) : u = f, f < 0 && o._ts && (n -= f, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += he(f / s._ts), s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = l;
      yi(s, s === _e && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(i) {
    if (_e._ts && (Jo(_e, In(i, _e)), Zo = xt.frame), xt.frame >= ao) {
      ao += St.autoSleep || 120;
      var n = _e._first;
      if ((!n || !n._ts) && St.autoSleep && xt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || xt.sleep();
      }
    }
  }, e;
})(en);
kt(at.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var $u = function(e, r, t, i, n, s, o) {
  var u = new ft(this._pt, e, r, 0, 1, Ca, null, n), l = 0, f = 0, _, d, c, p, h, m, T, w;
  for (u.b = t, u.e = i, t += "", i += "", (T = ~i.indexOf("random(")) && (i = ji(i)), s && (w = [t, i], s(w, e, r), t = w[0], i = w[1]), d = t.match(Kn) || []; _ = Kn.exec(i); )
    p = _[0], h = i.substring(l, _.index), c ? c = (c + 1) % 5 : h.substr(-5) === "rgba(" && (c = 1), p !== d[f++] && (m = parseFloat(d[f - 1]) || 0, u._pt = {
      _next: u._pt,
      p: h || f === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? fi(m, p) - m : parseFloat(p) - m,
      m: c && c < 4 ? Math.round : 0
    }, l = Kn.lastIndex);
  return u.c = l < i.length ? i.substring(l, i.length) : "", u.fp = o, (Ho.test(i) || T) && (u.e = 0), this._pt = u, u;
}, Vs = function(e, r, t, i, n, s, o, u, l, f) {
  xe(i) && (i = i(n || 0, e, s));
  var _ = e[r], d = t !== "get" ? t : xe(_) ? l ? e[r.indexOf("set") || !xe(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](l) : e[r]() : _, c = xe(_) ? l ? Qu : ba : Ws, p;
  if (Le(i) && (~i.indexOf("random(") && (i = ji(i)), i.charAt(1) === "=" && (p = fi(d, i) + (Ke(d) || 0), (p || p === 0) && (i = p))), !f || d !== i || ms)
    return !isNaN(d * i) && i !== "" ? (p = new ft(this._pt, e, r, +d || 0, i - (d || 0), typeof _ == "boolean" ? ju : Sa, 0, c), l && (p.fp = l), o && p.modifier(o, this, e), this._pt = p) : (!_ && !(r in e) && Ls(r, i), $u.call(this, e, r, d, i, c, u || St.stringFilter, l));
}, Gu = function(e, r, t, i, n) {
  if (xe(e) && (e = Bi(e, n, r, t, i)), !Qt(e) || e.style && e.nodeType || Ze(e) || $o(e))
    return Le(e) ? Bi(e, n, r, t, i) : e;
  var s = {}, o;
  for (o in e)
    s[o] = Bi(e[o], n, r, t, i);
  return s;
}, xa = function(e, r, t, i, n, s) {
  var o, u, l, f;
  if (vt[e] && (o = new vt[e]()).init(n, o.rawVars ? r[e] : Gu(r[e], i, n, s, t), t, i, s) !== !1 && (t._pt = u = new ft(t._pt, n, e, 0, 1, o.render, o, 0, o.priority), t !== ui))
    for (l = t._ptLookup[t._targets.indexOf(n)], f = o._props.length; f--; )
      l[o._props[f]] = u;
  return o;
}, gr, ms, Us = function a(e, r, t) {
  var i = e.vars, n = i.ease, s = i.startAt, o = i.immediateRender, u = i.lazy, l = i.onUpdate, f = i.runBackwards, _ = i.yoyoEase, d = i.keyframes, c = i.autoRevert, p = e._dur, h = e._startAt, m = e._targets, T = e.parent, w = T && T.data === "nested" ? T.vars.targets : m, S = e._overwrite === "auto" && !As, y = e.timeline, b = i.easeReverse || _, M, x, P, k, C, B, D, H, F, X, I, E, q;
  if (y && (!d || !n) && (n = "none"), e._ease = Ur(n, Ki.ease), e._rEase = b && (Ur(b) || e._ease), e._from = !y && !!i.runBackwards, e._from && (e.ratio = 1), !y || d && !i.stagger) {
    if (H = m[0] ? Xr(m[0]).harness : 0, E = H && i[H.prop], M = Fn(i, Ns), h && (h._zTime < 0 && h.progress(1), r < 0 && f && o && !c ? h.render(-1, !0) : h.revert(f && p ? bn : yu), h._lazy = 0), s) {
      if (Sr(e._startAt = Me.set(m, kt({
        data: "isStart",
        overwrite: !1,
        parent: T,
        immediateRender: !0,
        lazy: !h && ut(u),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Tt(e, "onUpdate");
        },
        stagger: 0
      }, s))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Ue || !o && !c) && e._startAt.revert(bn), o && p && r <= 0 && t <= 0) {
        r && (e._zTime = r);
        return;
      }
    } else if (f && p && !h) {
      if (r && (o = !1), P = kt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !h && ut(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: T
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, M), E && (P[H.prop] = E), Sr(e._startAt = Me.set(m, P)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Ue ? e._startAt.revert(bn) : e._startAt.render(-1, !0)), e._zTime = r, !o)
        a(e._startAt, oe, oe);
      else if (!r)
        return;
    }
    for (e._pt = e._ptCache = 0, u = p && ut(u) || u && !p, x = 0; x < m.length; x++) {
      if (C = m[x], D = C._gsap || Ys(m)[x]._gsap, e._ptLookup[x] = X = {}, cs[D.id] && wr.length && zn(), I = w === m ? x : w.indexOf(C), H && (F = new H()).init(C, E || M, e, I, w) !== !1 && (e._pt = k = new ft(e._pt, C, F.name, 0, 1, F.render, F, 0, F.priority), F._props.forEach(function(te) {
        X[te] = k;
      }), F.priority && (B = 1)), !H || E)
        for (P in M)
          vt[P] && (F = xa(P, M, e, I, C, w)) ? F.priority && (B = 1) : X[P] = k = Vs.call(e, C, P, "get", M[P], I, w, 0, i.stringFilter);
      e._op && e._op[x] && e.kill(C, e._op[x]), S && e._pt && (gr = e, _e.killTweensOf(C, X, e.globalTime(r)), q = !e.parent, gr = 0), e._pt && u && (cs[D.id] = 1);
    }
    B && ka(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = l, e._initted = (!e._op || e._pt) && !q, d && r <= 0 && y.render(Rt, !0, !0);
}, Hu = function(e, r, t, i, n, s, o, u) {
  var l = (e._pt && e._ptCache || (e._ptCache = {}))[r], f, _, d, c;
  if (!l)
    for (l = e._ptCache[r] = [], d = e._ptLookup, c = e._targets.length; c--; ) {
      if (f = d[c][r], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== r && f.fp !== r; )
          f = f._next;
      if (!f)
        return ms = 1, e.vars[r] = "+=0", Us(e, o), ms = 0, u ? Qi(r + " not eligible for reset. Try splitting into individual properties") : 1;
      l.push(f);
    }
  for (c = l.length; c--; )
    _ = l[c], f = _._pt || _, f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c, f.c = t - f.s, _.e && (_.e = Se(t) + Ke(_.e)), _.b && (_.b = f.s + Ke(_.b));
}, qu = function(e, r) {
  var t = e[0] ? Xr(e[0]).harness : 0, i = t && t.aliases, n, s, o, u;
  if (!i)
    return r;
  n = mi({}, r);
  for (s in i)
    if (s in n)
      for (u = i[s].split(","), o = u.length; o--; )
        n[u[o]] = n[s];
  return n;
}, Ku = function(e, r, t, i) {
  var n = r.ease || i || "power1.inOut", s, o;
  if (Ze(r))
    o = t[e] || (t[e] = []), r.forEach(function(u, l) {
      return o.push({
        t: l / (r.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (s in r)
      o = t[s] || (t[s] = []), s === "ease" || o.push({
        t: parseFloat(e),
        v: r[s],
        e: n
      });
}, Bi = function(e, r, t, i, n) {
  return xe(e) ? e.call(r, t, i, n) : Le(e) && ~e.indexOf("random(") ? ji(e) : e;
}, wa = Bs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Ta = {};
lt(wa + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return Ta[a] = 1;
});
var Me = /* @__PURE__ */ (function(a) {
  Uo(e, a);
  function e(t, i, n, s) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : Li(i)) || this;
    var u = o.vars, l = u.duration, f = u.delay, _ = u.immediateRender, d = u.stagger, c = u.overwrite, p = u.keyframes, h = u.defaults, m = u.scrollTrigger, T = i.parent || _e, w = (Ze(t) || $o(t) ? ur(t[0]) : "length" in i) ? [t] : Et(t), S, y, b, M, x, P, k, C;
    if (o._targets = w.length ? Ys(w) : Qi("GSAP target " + t + " not found. https://gsap.com", !St.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = c, p || d || fn(l) || fn(f)) {
      i = o.vars;
      var B = i.easeReverse || i.yoyoEase;
      if (S = o.timeline = new at({
        data: "nested",
        defaults: h || {},
        targets: T && T.data === "nested" ? T.vars.targets : w
      }), S.kill(), S.parent = S._dp = rr(o), S._start = 0, d || fn(l) || fn(f)) {
        if (M = w.length, k = d && ua(d), Qt(d))
          for (x in d)
            ~wa.indexOf(x) && (C || (C = {}), C[x] = d[x]);
        for (y = 0; y < M; y++)
          b = Fn(i, Ta), b.stagger = 0, B && (b.easeReverse = B), C && mi(b, C), P = w[y], b.duration = +Bi(l, rr(o), y, P, w), b.delay = (+Bi(f, rr(o), y, P, w) || 0) - o._delay, !d && M === 1 && b.delay && (o._delay = f = b.delay, o._start += f, b.delay = 0), S.to(P, b, k ? k(y, P, w) : 0), S._ease = Q.none;
        S.duration() ? l = f = 0 : o.timeline = 0;
      } else if (p) {
        Li(kt(S.vars.defaults, {
          ease: "none"
        })), S._ease = Ur(p.ease || i.ease || "none");
        var D = 0, H, F, X;
        if (Ze(p))
          p.forEach(function(I) {
            return S.to(w, I, ">");
          }), S.duration();
        else {
          b = {};
          for (x in p)
            x === "ease" || x === "easeEach" || Ku(x, p[x], b, p.easeEach);
          for (x in b)
            for (H = b[x].sort(function(I, E) {
              return I.t - E.t;
            }), D = 0, y = 0; y < H.length; y++)
              F = H[y], X = {
                ease: F.e,
                duration: (F.t - (y ? H[y - 1].t : 0)) / 100 * l
              }, X[x] = F.v, S.to(w, X, D), D += X.duration;
          S.duration() < l && S.to({}, {
            duration: l - S.duration()
          });
        }
      }
      l || o.duration(l = S.duration());
    } else
      o.timeline = 0;
    return c === !0 && !As && (gr = rr(o), _e.killTweensOf(w), gr = 0), Gt(T, rr(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (_ || !l && !p && o._start === he(T._time) && ut(_) && Cu(rr(o)) && T.data !== "nested") && (o._tTime = -oe, o.render(Math.max(0, -f) || 0)), m && na(rr(o), m), o;
  }
  var r = e.prototype;
  return r.render = function(i, n, s) {
    var o = this._time, u = this._tDur, l = this._dur, f = i < 0, _ = i > u - oe && !f ? u : i < oe ? 0 : i, d, c, p, h, m, T, w, S;
    if (!l)
      Pu(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (d = _, S = this.timeline, this._repeat) {
        if (h = l + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(h * 100 + i, n, s);
        if (d = he(_ % h), _ === u ? (p = this._repeat, d = l) : (m = he(_ / h), p = ~~m, p && p === m ? (d = l, p--) : d > l && (d = l)), T = this._yoyo && p & 1, T && (d = l - d), m = vi(this._tTime, h), d === o && !s && this._initted && p === m)
          return this._tTime = _, this;
        p !== m && this.vars.repeatRefresh && !T && !this._lock && d !== h && this._initted && (this._lock = s = 1, this.render(he(h * p), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (sa(this, f ? i : d, s, n, _))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (l !== this._dur)
          return this.render(i, n, s);
      }
      if (this._rEase) {
        var y = d < o;
        if (y !== this._inv) {
          var b = y ? o : l - o;
          this._inv = y, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = o, this._invRecip = b ? (y ? -1 : 1) / b : 0, this._invScale = y ? -this.ratio : 1 - this.ratio, this._invEase = y ? this._rEase : this._ease;
        }
        this.ratio = w = this._invRatio + this._invScale * this._invEase((d - this._invTime) * this._invRecip);
      } else
        this.ratio = w = this._ease(d / l);
      if (this._from && (this.ratio = w = 1 - w), this._tTime = _, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), !o && _ && !n && !m && (Tt(this, "onStart"), this._tTime !== _))
        return this;
      for (c = this._pt; c; )
        c.r(w, c.d), c = c._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(d / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && hs(this, i, n, s), Tt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && Tt(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && hs(this, i, !0, !0), (i || !l) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Sr(this, 1), !n && !(f && !o) && (_ || o || T) && (Tt(this, _ === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, r.targets = function() {
    return this._targets;
  }, r.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, r.resetTo = function(i, n, s, o, u) {
    Ji || xt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Us(this, l), f = this._ease(l / this._dur), Hu(this, i, n, s, o, f, l, u) ? this.resetTo(i, n, s, o, 1) : (Gn(this, 0), this.parent || ra(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, r.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Di(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ue), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, gr && gr.vars.overwrite !== !0)._first || Di(this), this.parent && s !== this.timeline.totalDuration() && yi(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, u = i ? Et(i) : o, l = this._ptLookup, f = this._pt, _, d, c, p, h, m, T;
    if ((!n || n === "all") && bu(o, u))
      return n === "all" && (this._pt = 0), Di(this);
    for (_ = this._op = this._op || [], n !== "all" && (Le(n) && (h = {}, lt(n, function(w) {
      return h[w] = 1;
    }), n = h), n = qu(o, n)), T = o.length; T--; )
      if (~u.indexOf(o[T])) {
        d = l[T], n === "all" ? (_[T] = n, p = d, c = {}) : (c = _[T] = _[T] || {}, p = n);
        for (h in p)
          m = d && d[h], m && ((!("kill" in m.d) || m.d.kill(h) === !0) && Wn(this, m, "_pt"), delete d[h]), c !== "all" && (c[h] = 1);
      }
    return this._initted && !this._pt && f && Di(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return Ni(1, arguments);
  }, e.delayedCall = function(i, n, s, o) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, e.fromTo = function(i, n, s) {
    return Ni(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, s) {
    return _e.killTweensOf(i, n, s);
  }, e;
})(en);
kt(Me.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
lt("staggerTo,staggerFrom,staggerFromTo", function(a) {
  Me[a] = function() {
    var e = new at(), r = ds.call(arguments, 0);
    return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, r);
  };
});
var Ws = function(e, r, t) {
  return e[r] = t;
}, ba = function(e, r, t) {
  return e[r](t);
}, Qu = function(e, r, t, i) {
  return e[r](i.fp, t);
}, Zu = function(e, r, t) {
  return e.setAttribute(r, t);
}, $s = function(e, r) {
  return xe(e[r]) ? ba : zs(e[r]) && e.setAttribute ? Zu : Ws;
}, Sa = function(e, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r);
}, ju = function(e, r) {
  return r.set(r.t, r.p, !!(r.s + r.c * e), r);
}, Ca = function(e, r) {
  var t = r._pt, i = "";
  if (!e && r.b)
    i = r.b;
  else if (e === 1 && r.e)
    i = r.e;
  else {
    for (; t; )
      i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i, t = t._next;
    i += r.c;
  }
  r.set(r.t, r.p, i, r);
}, Gs = function(e, r) {
  for (var t = r._pt; t; )
    t.r(e, t.d), t = t._next;
}, Ju = function(e, r, t, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(e, r, t), n = s;
}, el = function(e) {
  for (var r = this._pt, t, i; r; )
    i = r._next, r.p === e && !r.op || r.op === e ? Wn(this, r, "_pt") : r.dep || (t = 1), r = i;
  return !t;
}, tl = function(e, r, t, i) {
  i.mSet(e, r, i.m.call(i.tween, t, i.mt), i);
}, ka = function(e) {
  for (var r = e._pt, t, i, n, s; r; ) {
    for (t = r._next, i = n; i && i.pr > r.pr; )
      i = i._next;
    (r._prev = i ? i._prev : s) ? r._prev._next = r : n = r, (r._next = i) ? i._prev = r : s = r, r = t;
  }
  e._pt = n;
}, ft = /* @__PURE__ */ (function() {
  function a(r, t, i, n, s, o, u, l, f) {
    this.t = t, this.s = n, this.c = s, this.p = i, this.r = o || Sa, this.d = u || this, this.set = l || Ws, this.pr = f || 0, this._next = r, r && (r._prev = this);
  }
  var e = a.prototype;
  return e.modifier = function(t, i, n) {
    this.mSet = this.mSet || this.set, this.set = tl, this.m = t, this.mt = n, this.tween = i;
  }, a;
})();
lt(Bs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(a) {
  return Ns[a] = 1;
});
Ct.TweenMax = Ct.TweenLite = Me;
Ct.TimelineLite = Ct.TimelineMax = at;
_e = new at({
  sortChildren: !1,
  defaults: Ki,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
St.stringFilter = ma;
var Wr = [], Cn = {}, rl = [], _o = 0, il = 0, es = function(e) {
  return (Cn[e] || rl).map(function(r) {
    return r();
  });
}, vs = function() {
  var e = Date.now(), r = [];
  e - _o > 2 && (es("matchMediaInit"), Wr.forEach(function(t) {
    var i = t.queries, n = t.conditions, s, o, u, l;
    for (o in i)
      s = Wt.matchMedia(i[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, l = 1);
    l && (t.revert(), u && r.push(t));
  }), es("matchMediaRevert"), r.forEach(function(t) {
    return t.onMatch(t, function(i) {
      return t.add(null, i);
    });
  }), _o = e, es("matchMedia"));
}, Pa = /* @__PURE__ */ (function() {
  function a(r, t) {
    this.selector = t && ps(t), this.data = [], this._r = [], this.isReverted = !1, this.id = il++, r && this.add(r);
  }
  var e = a.prototype;
  return e.add = function(t, i, n) {
    xe(t) && (n = i, i = t, t = xe);
    var s = this, o = function() {
      var l = fe, f = s.selector, _;
      return l && l !== s && l.data.push(s), n && (s.selector = ps(n)), fe = s, _ = i.apply(s, arguments), xe(_) && s._r.push(_), fe = l, s.selector = f, s.isReverted = !1, _;
    };
    return s.last = o, t === xe ? o(s, function(u) {
      return s.add(null, u);
    }) : t ? s[t] = o : o;
  }, e.ignore = function(t) {
    var i = fe;
    fe = null, t(this), fe = i;
  }, e.getTweens = function() {
    var t = [];
    return this.data.forEach(function(i) {
      return i instanceof a ? t.push.apply(t, i.getTweens()) : i instanceof Me && !(i.parent && i.parent.data === "nested") && t.push(i);
    }), t;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(t, i) {
    var n = this;
    if (t ? (function() {
      for (var o = n.getTweens(), u = n.data.length, l; u--; )
        l = n.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(f) {
          return o.splice(o.indexOf(f), 1);
        }));
      for (o.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, _) {
        return _.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(t);
      }), u = n.data.length; u--; )
        l = n.data[u], l instanceof at ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Me) && l.revert && l.revert(t);
      n._r.forEach(function(f) {
        return f(t, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var s = Wr.length; s--; )
        Wr[s].id === this.id && Wr.splice(s, 1);
  }, e.revert = function(t) {
    this.kill(t || {});
  }, a;
})(), nl = /* @__PURE__ */ (function() {
  function a(r) {
    this.contexts = [], this.scope = r, fe && fe.data.push(this);
  }
  var e = a.prototype;
  return e.add = function(t, i, n) {
    Qt(t) || (t = {
      matches: t
    });
    var s = new Pa(0, n || this.scope), o = s.conditions = {}, u, l, f;
    fe && !s.selector && (s.selector = fe.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = t;
    for (l in t)
      l === "all" ? f = 1 : (u = Wt.matchMedia(t[l]), u && (Wr.indexOf(s) < 0 && Wr.push(s), (o[l] = u.matches) && (f = 1), u.addListener ? u.addListener(vs) : u.addEventListener("change", vs)));
    return f && i(s, function(_) {
      return s.add(null, _);
    }), this;
  }, e.revert = function(t) {
    this.kill(t || {});
  }, e.kill = function(t) {
    this.contexts.forEach(function(i) {
      return i.kill(t, !0);
    });
  }, a;
})(), Ln = {
  registerPlugin: function() {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
      r[t] = arguments[t];
    r.forEach(function(i) {
      return da(i);
    });
  },
  timeline: function(e) {
    return new at(e);
  },
  getTweensOf: function(e, r) {
    return _e.getTweensOf(e, r);
  },
  getProperty: function(e, r, t, i) {
    Le(e) && (e = Et(e)[0]);
    var n = Xr(e || {}).get, s = t ? ta : ea;
    return t === "native" && (t = ""), e && (r ? s((vt[r] && vt[r].get || n)(e, r, t, i)) : function(o, u, l) {
      return s((vt[o] && vt[o].get || n)(e, o, u, l));
    });
  },
  quickSetter: function(e, r, t) {
    if (e = Et(e), e.length > 1) {
      var i = e.map(function(f) {
        return ht.quickSetter(f, r, t);
      }), n = i.length;
      return function(f) {
        for (var _ = n; _--; )
          i[_](f);
      };
    }
    e = e[0] || {};
    var s = vt[r], o = Xr(e), u = o.harness && (o.harness.aliases || {})[r] || r, l = s ? function(f) {
      var _ = new s();
      ui._pt = 0, _.init(e, t ? f + t : f, ui, 0, [e]), _.render(1, _), ui._pt && Gs(1, ui);
    } : o.set(e, u);
    return s ? l : function(f) {
      return l(e, u, t ? f + t : f, o, 1);
    };
  },
  quickTo: function(e, r, t) {
    var i, n = ht.to(e, kt((i = {}, i[r] = "+=0.1", i.paused = !0, i.stagger = 0, i), t || {})), s = function(u, l, f) {
      return n.resetTo(r, u, l, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(e) {
    return _e.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Ur(e.ease, Ki.ease)), uo(Ki, e || {});
  },
  config: function(e) {
    return uo(St, e || {});
  },
  registerEffect: function(e) {
    var r = e.name, t = e.effect, i = e.plugins, n = e.defaults, s = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !vt[o] && !Ct[o] && Qi(r + " effect requires " + o + " plugin.");
    }), Qn[r] = function(o, u, l) {
      return t(Et(o), kt(u || {}, n), l);
    }, s && (at.prototype[r] = function(o, u, l) {
      return this.add(Qn[r](o, Qt(u) ? u : (l = u) && {}, this), l);
    });
  },
  registerEase: function(e, r) {
    Q[e] = Ur(r);
  },
  parseEase: function(e, r) {
    return arguments.length ? Ur(e, r) : Q;
  },
  getById: function(e) {
    return _e.getById(e);
  },
  exportRoot: function(e, r) {
    e === void 0 && (e = {});
    var t = new at(e), i, n;
    for (t.smoothChildTiming = ut(e.smoothChildTiming), _e.remove(t), t._dp = 0, t._time = t._tTime = _e._time, i = _e._first; i; )
      n = i._next, (r || !(!i._dur && i instanceof Me && i.vars.onComplete === i._targets[0])) && Gt(t, i, i._start - i._delay), i = n;
    return Gt(_e, t, 0), t;
  },
  context: function(e, r) {
    return e ? new Pa(e, r) : fe;
  },
  matchMedia: function(e) {
    return new nl(e);
  },
  matchMediaRefresh: function() {
    return Wr.forEach(function(e) {
      var r = e.conditions, t, i;
      for (i in r)
        r[i] && (r[i] = !1, t = 1);
      t && e.revert();
    }) || vs();
  },
  addEventListener: function(e, r) {
    var t = Cn[e] || (Cn[e] = []);
    ~t.indexOf(r) || t.push(r);
  },
  removeEventListener: function(e, r) {
    var t = Cn[e], i = t && t.indexOf(r);
    i >= 0 && t.splice(i, 1);
  },
  utils: {
    wrap: Fu,
    wrapYoyo: Iu,
    distribute: ua,
    random: fa,
    snap: la,
    normalize: zu,
    getUnit: Ke,
    clamp: Du,
    splitColor: pa,
    toArray: Et,
    selector: ps,
    mapRange: ha,
    pipe: Eu,
    unitize: Au,
    interpolate: Lu,
    shuffle: aa
  },
  install: Ko,
  effects: Qn,
  ticker: xt,
  updateRoot: at.updateRoot,
  plugins: vt,
  globalTimeline: _e,
  core: {
    PropTween: ft,
    globals: Qo,
    Tween: Me,
    Timeline: at,
    Animation: en,
    getCache: Xr,
    _removeLinkedListItem: Wn,
    reverting: function() {
      return Ue;
    },
    context: function(e) {
      return e && fe && (fe.data.push(e), e._ctx = fe), fe;
    },
    suppressOverwrites: function(e) {
      return As = e;
    }
  }
};
lt("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return Ln[a] = Me[a];
});
xt.add(at.updateRoot);
ui = Ln.to({}, {
  duration: 0
});
var sl = function(e, r) {
  for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
    t = t._next;
  return t;
}, ol = function(e, r) {
  var t = e._targets, i, n, s;
  for (i in r)
    for (n = t.length; n--; )
      s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = sl(s, i)), s && s.modifier && s.modifier(r[i], e, t[n], i));
}, ts = function(e, r) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(o) {
        var u, l;
        if (Le(n) && (u = {}, lt(n, function(f) {
          return u[f] = 1;
        }), n = u), r) {
          u = {};
          for (l in n)
            u[l] = r(n[l]);
          n = u;
        }
        ol(o, n);
      };
    }
  };
}, ht = Ln.registerPlugin({
  name: "attr",
  init: function(e, r, t, i, n) {
    var s, o, u;
    this.tween = t;
    for (s in r)
      u = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (u || 0) + "", r[s], i, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s);
  },
  render: function(e, r) {
    for (var t = r._pt; t; )
      Ue ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, r) {
    for (var t = r.length; t--; )
      this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1);
  }
}, ts("roundProps", gs), ts("modifiers"), ts("snap", la)) || Ln;
Me.version = at.version = ht.version = "3.15.0";
qo = 1;
Fs() && xi();
Q.Power0;
Q.Power1;
Q.Power2;
Q.Power3;
Q.Power4;
Q.Linear;
Q.Quad;
Q.Cubic;
Q.Quart;
Q.Quint;
Q.Strong;
Q.Elastic;
Q.Back;
Q.SteppedEase;
Q.Bounce;
Q.Sine;
Q.Expo;
Q.Circ;
var po, mr, ci, Hs, Br, go, qs, al = function() {
  return typeof window < "u";
}, lr = {}, Ir = 180 / Math.PI, hi = Math.PI / 180, ti = Math.atan2, mo = 1e8, Ks = /([A-Z])/g, ul = /(left|right|width|margin|padding|x)/i, ll = /[\s,\(]\S/, Ht = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ys = function(e, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
}, fl = function(e, r) {
  return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
}, cl = function(e, r) {
  return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r);
}, hl = function(e, r) {
  return r.set(r.t, r.p, e === 1 ? r.e : e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r);
}, _l = function(e, r) {
  var t = r.s + r.c * e;
  r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r);
}, Ma = function(e, r) {
  return r.set(r.t, r.p, e ? r.e : r.b, r);
}, Oa = function(e, r) {
  return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r);
}, dl = function(e, r, t) {
  return e.style[r] = t;
}, pl = function(e, r, t) {
  return e.style.setProperty(r, t);
}, gl = function(e, r, t) {
  return e._gsap[r] = t;
}, ml = function(e, r, t) {
  return e._gsap.scaleX = e._gsap.scaleY = t;
}, vl = function(e, r, t, i, n) {
  var s = e._gsap;
  s.scaleX = s.scaleY = t, s.renderTransform(n, s);
}, yl = function(e, r, t, i, n) {
  var s = e._gsap;
  s[r] = t, s.renderTransform(n, s);
}, de = "transform", ct = de + "Origin", xl = function a(e, r) {
  var t = this, i = this.target, n = i.style, s = i._gsap;
  if (e in lr && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ht[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return t.tfm[o] = nr(i, o);
      }) : this.tfm[e] = s.x ? s[e] : nr(i, e), e === ct && (this.tfm.zOrigin = s.zOrigin);
    else
      return Ht.transform.split(",").forEach(function(o) {
        return a.call(t, o, r);
      });
    if (this.props.indexOf(de) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ct, r, "")), e = de;
  }
  (n || r) && this.props.push(e, r, n[e]);
}, Da = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, wl = function() {
  var e = this.props, r = this.target, t = r.style, i = r._gsap, n, s;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? r[e[n]](e[n + 2]) : r[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Ks, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), n = qs(), (!n || !n.isStart) && !t[de] && (Da(t), i.zOrigin && t[ct] && (t[ct] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Ra = function(e, r) {
  var t = {
    target: e,
    props: [],
    revert: wl,
    save: xl
  };
  return e._gsap || ht.core.getCache(e), r && e.style && e.nodeType && r.split(",").forEach(function(i) {
    return t.save(i);
  }), t;
}, Ea, xs = function(e, r) {
  var t = mr.createElementNS ? mr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : mr.createElement(e);
  return t && t.style ? t : mr.createElement(e);
}, bt = function a(e, r, t) {
  var i = getComputedStyle(e);
  return i[r] || i.getPropertyValue(r.replace(Ks, "-$1").toLowerCase()) || i.getPropertyValue(r) || !t && a(e, wi(r) || r, 1) || "";
}, vo = "O,Moz,ms,Ms,Webkit".split(","), wi = function(e, r, t) {
  var i = r || Br, n = i.style, s = 5;
  if (e in n && !t)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(vo[s] + e in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? vo[s] : "") + e;
}, ws = function() {
  al() && window.document && (po = window, mr = po.document, ci = mr.documentElement, Br = xs("div") || {
    style: {}
  }, xs("div"), de = wi(de), ct = de + "Origin", Br.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ea = !!wi("perspective"), qs = ht.core.reverting, Hs = 1);
}, yo = function(e) {
  var r = e.ownerSVGElement, t = xs("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", t.appendChild(i), ci.appendChild(t);
  try {
    n = i.getBBox();
  } catch {
  }
  return t.removeChild(i), ci.removeChild(t), n;
}, xo = function(e, r) {
  for (var t = r.length; t--; )
    if (e.hasAttribute(r[t]))
      return e.getAttribute(r[t]);
}, Aa = function(e) {
  var r, t;
  try {
    r = e.getBBox();
  } catch {
    r = yo(e), t = 1;
  }
  return r && (r.width || r.height) || t || (r = yo(e)), r && !r.width && !r.x && !r.y ? {
    x: +xo(e, ["x", "cx", "x1"]) || 0,
    y: +xo(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : r;
}, za = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Aa(e));
}, Cr = function(e, r) {
  if (r) {
    var t = e.style, i;
    r in lr && r !== ct && (r = de), t.removeProperty ? (i = r.substr(0, 2), (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), t.removeProperty(i === "--" ? r : r.replace(Ks, "-$1").toLowerCase())) : t.removeAttribute(r);
  }
}, vr = function(e, r, t, i, n, s) {
  var o = new ft(e._pt, r, t, 0, 1, s ? Oa : Ma);
  return e._pt = o, o.b = i, o.e = n, e._props.push(t), o;
}, wo = {
  deg: 1,
  rad: 1,
  turn: 1
}, Tl = {
  grid: 1,
  flex: 1
}, kr = function a(e, r, t, i) {
  var n = parseFloat(t) || 0, s = (t + "").trim().substr((n + "").length) || "px", o = Br.style, u = ul.test(r), l = e.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (u ? "Width" : "Height"), _ = 100, d = i === "px", c = i === "%", p, h, m, T;
  if (i === s || !n || wo[i] || wo[s])
    return n;
  if (s !== "px" && !d && (n = a(e, r, t, "px")), T = e.getCTM && za(e), (c || s === "%") && (lr[r] || ~r.indexOf("adius")))
    return p = T ? e.getBBox()[u ? "width" : "height"] : e[f], Se(c ? n / p * _ : n / 100 * p);
  if (o[u ? "width" : "height"] = _ + (d ? s : i), h = i !== "rem" && ~r.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, T && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === mr || !h.appendChild) && (h = mr.body), m = h._gsap, m && c && m.width && u && m.time === xt.time && !m.uncache)
    return Se(n / m.width * _);
  if (c && (r === "height" || r === "width")) {
    var w = e.style[r];
    e.style[r] = _ + i, p = e[f], w ? e.style[r] = w : Cr(e, r);
  } else
    (c || s === "%") && !Tl[bt(h, "display")] && (o.position = bt(e, "position")), h === e && (o.position = "static"), h.appendChild(Br), p = Br[f], h.removeChild(Br), o.position = "absolute";
  return u && c && (m = Xr(h), m.time = xt.time, m.width = h[f]), Se(d ? p * n / _ : p && n ? _ / p * n : 0);
}, nr = function(e, r, t, i) {
  var n;
  return Hs || ws(), r in Ht && r !== "transform" && (r = Ht[r], ~r.indexOf(",") && (r = r.split(",")[0])), lr[r] && r !== "transform" ? (n = rn(e, i), n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : Bn(bt(e, ct)) + " " + n.zOrigin + "px") : (n = e.style[r], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Nn[r] && Nn[r](e, r, t) || bt(e, r) || jo(e, r) || (r === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? kr(e, r, n, t) + t : n;
}, bl = function(e, r, t, i) {
  if (!t || t === "none") {
    var n = wi(r, e, 1), s = n && bt(e, n, 1);
    s && s !== t ? (r = n, t = s) : r === "borderColor" && (t = bt(e, "borderTopColor"));
  }
  var o = new ft(this._pt, e.style, r, 0, 1, Ca), u = 0, l = 0, f, _, d, c, p, h, m, T, w, S, y, b;
  if (o.b = t, o.e = i, t += "", i += "", i.substring(0, 6) === "var(--" && (i = bt(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[r], e.style[r] = i, i = bt(e, r) || i, h ? e.style[r] = h : Cr(e, r)), f = [t, i], ma(f), t = f[0], i = f[1], d = t.match(ai) || [], b = i.match(ai) || [], b.length) {
    for (; _ = ai.exec(i); )
      m = _[0], w = i.substring(u, _.index), p ? p = (p + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (p = 1), m !== (h = d[l++] || "") && (c = parseFloat(h) || 0, y = h.substr((c + "").length), m.charAt(1) === "=" && (m = fi(c, m) + y), T = parseFloat(m), S = m.substr((T + "").length), u = ai.lastIndex - S.length, S || (S = S || St.units[r] || y, u === i.length && (i += S, o.e += S)), y !== S && (c = kr(e, r, h, S) || 0), o._pt = {
        _next: o._pt,
        p: w || l === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: c,
        c: T - c,
        m: p && p < 4 || r === "zIndex" ? Math.round : 0
      });
    o.c = u < i.length ? i.substring(u, i.length) : "";
  } else
    o.r = r === "display" && i === "none" ? Oa : Ma;
  return Ho.test(i) && (o.e = 0), this._pt = o, o;
}, To = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Sl = function(e) {
  var r = e.split(" "), t = r[0], i = r[1] || "50%";
  return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t, t = i, i = e), r[0] = To[t] || t, r[1] = To[i] || i, r.join(" ");
}, Cl = function(e, r) {
  if (r.tween && r.tween._time === r.tween._dur) {
    var t = r.t, i = t.style, n = r.u, s = t._gsap, o, u, l;
    if (n === "all" || n === !0)
      i.cssText = "", u = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], lr[o] && (u = 1, o = o === "transformOrigin" ? ct : de), Cr(t, o);
    u && (Cr(t, de), s && (s.svg && t.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", rn(t, 1), s.uncache = 1, Da(i)));
  }
}, Nn = {
  clearProps: function(e, r, t, i, n) {
    if (n.data !== "isFromStart") {
      var s = e._pt = new ft(e._pt, r, t, 0, 0, Cl);
      return s.u = i, s.pr = -10, s.tween = n, e._props.push(t), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, tn = [1, 0, 0, 1, 0, 0], Fa = {}, Ia = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, bo = function(e) {
  var r = bt(e, de);
  return Ia(r) ? tn : r.substr(7).match(Go).map(Se);
}, Qs = function(e, r) {
  var t = e._gsap || Xr(e), i = e.style, n = bo(e), s, o, u, l;
  return t.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? tn : n) : (n === tn && !e.offsetParent && e !== ci && !t.svg && (u = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (l = 1, o = e.nextElementSibling, ci.appendChild(e)), n = bo(e), u ? i.display = u : Cr(e, "display"), l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : ci.removeChild(e))), r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ts = function(e, r, t, i, n, s) {
  var o = e._gsap, u = n || Qs(e, !0), l = o.xOrigin || 0, f = o.yOrigin || 0, _ = o.xOffset || 0, d = o.yOffset || 0, c = u[0], p = u[1], h = u[2], m = u[3], T = u[4], w = u[5], S = r.split(" "), y = parseFloat(S[0]) || 0, b = parseFloat(S[1]) || 0, M, x, P, k;
  t ? u !== tn && (x = c * m - p * h) && (P = y * (m / x) + b * (-h / x) + (h * w - m * T) / x, k = y * (-p / x) + b * (c / x) - (c * w - p * T) / x, y = P, b = k) : (M = Aa(e), y = M.x + (~S[0].indexOf("%") ? y / 100 * M.width : y), b = M.y + (~(S[1] || S[0]).indexOf("%") ? b / 100 * M.height : b)), i || i !== !1 && o.smooth ? (T = y - l, w = b - f, o.xOffset = _ + (T * c + w * h) - T, o.yOffset = d + (T * p + w * m) - w) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = b, o.smooth = !!i, o.origin = r, o.originIsAbsolute = !!t, e.style[ct] = "0px 0px", s && (vr(s, o, "xOrigin", l, y), vr(s, o, "yOrigin", f, b), vr(s, o, "xOffset", _, o.xOffset), vr(s, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + b);
}, rn = function(e, r) {
  var t = e._gsap || new ya(e);
  if ("x" in t && !r && !t.uncache)
    return t;
  var i = e.style, n = t.scaleX < 0, s = "px", o = "deg", u = getComputedStyle(e), l = bt(e, ct) || "0", f, _, d, c, p, h, m, T, w, S, y, b, M, x, P, k, C, B, D, H, F, X, I, E, q, te, g, re, Oe, Ne, J, ae;
  return f = _ = d = h = m = T = w = S = y = 0, c = p = 1, t.svg = !!(e.getCTM && za(e)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[de] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[de] !== "none" ? u[de] : "")), i.scale = i.rotate = i.translate = "none"), x = Qs(e, t.svg), t.svg && (t.uncache ? (q = e.getBBox(), l = t.xOrigin - q.x + "px " + (t.yOrigin - q.y) + "px", E = "") : E = !r && e.getAttribute("data-svg-origin"), Ts(e, E || l, !!E || t.originIsAbsolute, t.smooth !== !1, x)), b = t.xOrigin || 0, M = t.yOrigin || 0, x !== tn && (B = x[0], D = x[1], H = x[2], F = x[3], f = X = x[4], _ = I = x[5], x.length === 6 ? (c = Math.sqrt(B * B + D * D), p = Math.sqrt(F * F + H * H), h = B || D ? ti(D, B) * Ir : 0, w = H || F ? ti(H, F) * Ir + h : 0, w && (p *= Math.abs(Math.cos(w * hi))), t.svg && (f -= b - (b * B + M * H), _ -= M - (b * D + M * F))) : (ae = x[6], Ne = x[7], g = x[8], re = x[9], Oe = x[10], J = x[11], f = x[12], _ = x[13], d = x[14], P = ti(ae, Oe), m = P * Ir, P && (k = Math.cos(-P), C = Math.sin(-P), E = X * k + g * C, q = I * k + re * C, te = ae * k + Oe * C, g = X * -C + g * k, re = I * -C + re * k, Oe = ae * -C + Oe * k, J = Ne * -C + J * k, X = E, I = q, ae = te), P = ti(-H, Oe), T = P * Ir, P && (k = Math.cos(-P), C = Math.sin(-P), E = B * k - g * C, q = D * k - re * C, te = H * k - Oe * C, J = F * C + J * k, B = E, D = q, H = te), P = ti(D, B), h = P * Ir, P && (k = Math.cos(P), C = Math.sin(P), E = B * k + D * C, q = X * k + I * C, D = D * k - B * C, I = I * k - X * C, B = E, X = q), m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0, T = 180 - T), c = Se(Math.sqrt(B * B + D * D + H * H)), p = Se(Math.sqrt(I * I + ae * ae)), P = ti(X, I), w = Math.abs(P) > 2e-4 ? P * Ir : 0, y = J ? 1 / (J < 0 ? -J : J) : 0), t.svg && (E = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !Ia(bt(e, de)), E && e.setAttribute("transform", E))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (c *= -1, w += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (p *= -1, w += w <= 0 ? 180 : -180)), r = r || t.uncache, t.x = f - ((t.xPercent = f && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s, t.y = _ - ((t.yPercent = _ && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s, t.z = d + s, t.scaleX = Se(c), t.scaleY = Se(p), t.rotation = Se(h) + o, t.rotationX = Se(m) + o, t.rotationY = Se(T) + o, t.skewX = w + o, t.skewY = S + o, t.transformPerspective = y + s, (t.zOrigin = parseFloat(l.split(" ")[2]) || !r && t.zOrigin || 0) && (i[ct] = Bn(l)), t.xOffset = t.yOffset = 0, t.force3D = St.force3D, t.renderTransform = t.svg ? Pl : Ea ? La : kl, t.uncache = 0, t;
}, Bn = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, rs = function(e, r, t) {
  var i = Ke(r);
  return Se(parseFloat(r) + parseFloat(kr(e, "x", t + "px", i))) + i;
}, kl = function(e, r) {
  r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, La(e, r);
}, zr = "0deg", Pi = "0px", Fr = ") ", La = function(e, r) {
  var t = r || this, i = t.xPercent, n = t.yPercent, s = t.x, o = t.y, u = t.z, l = t.rotation, f = t.rotationY, _ = t.rotationX, d = t.skewX, c = t.skewY, p = t.scaleX, h = t.scaleY, m = t.transformPerspective, T = t.force3D, w = t.target, S = t.zOrigin, y = "", b = T === "auto" && e && e !== 1 || T === !0;
  if (S && (_ !== zr || f !== zr)) {
    var M = parseFloat(f) * hi, x = Math.sin(M), P = Math.cos(M), k;
    M = parseFloat(_) * hi, k = Math.cos(M), s = rs(w, s, x * k * -S), o = rs(w, o, -Math.sin(M) * -S), u = rs(w, u, P * k * -S + S);
  }
  m !== Pi && (y += "perspective(" + m + Fr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (b || s !== Pi || o !== Pi || u !== Pi) && (y += u !== Pi || b ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + Fr), l !== zr && (y += "rotate(" + l + Fr), f !== zr && (y += "rotateY(" + f + Fr), _ !== zr && (y += "rotateX(" + _ + Fr), (d !== zr || c !== zr) && (y += "skew(" + d + ", " + c + Fr), (p !== 1 || h !== 1) && (y += "scale(" + p + ", " + h + Fr), w.style[de] = y || "translate(0, 0)";
}, Pl = function(e, r) {
  var t = r || this, i = t.xPercent, n = t.yPercent, s = t.x, o = t.y, u = t.rotation, l = t.skewX, f = t.skewY, _ = t.scaleX, d = t.scaleY, c = t.target, p = t.xOrigin, h = t.yOrigin, m = t.xOffset, T = t.yOffset, w = t.forceCSS, S = parseFloat(s), y = parseFloat(o), b, M, x, P, k;
  u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= hi, l *= hi, b = Math.cos(u) * _, M = Math.sin(u) * _, x = Math.sin(u - l) * -d, P = Math.cos(u - l) * d, l && (f *= hi, k = Math.tan(l - f), k = Math.sqrt(1 + k * k), x *= k, P *= k, f && (k = Math.tan(f), k = Math.sqrt(1 + k * k), b *= k, M *= k)), b = Se(b), M = Se(M), x = Se(x), P = Se(P)) : (b = _, P = d, M = x = 0), (S && !~(s + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (S = kr(c, "x", s, "px"), y = kr(c, "y", o, "px")), (p || h || m || T) && (S = Se(S + p - (p * b + h * x) + m), y = Se(y + h - (p * M + h * P) + T)), (i || n) && (k = c.getBBox(), S = Se(S + i / 100 * k.width), y = Se(y + n / 100 * k.height)), k = "matrix(" + b + "," + M + "," + x + "," + P + "," + S + "," + y + ")", c.setAttribute("transform", k), w && (c.style[de] = k);
}, Ml = function(e, r, t, i, n) {
  var s = 360, o = Le(n), u = parseFloat(n) * (o && ~n.indexOf("rad") ? Ir : 1), l = u - i, f = i + l + "deg", _, d;
  return o && (_ = n.split("_")[1], _ === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), _ === "cw" && l < 0 ? l = (l + s * mo) % s - ~~(l / s) * s : _ === "ccw" && l > 0 && (l = (l - s * mo) % s - ~~(l / s) * s)), e._pt = d = new ft(e._pt, r, t, i, l, fl), d.e = f, d.u = "deg", e._props.push(t), d;
}, So = function(e, r) {
  for (var t in r)
    e[t] = r[t];
  return e;
}, Ol = function(e, r, t) {
  var i = So({}, t._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = t.style, o, u, l, f, _, d, c, p;
  i.svg ? (l = t.getAttribute("transform"), t.setAttribute("transform", ""), s[de] = r, o = rn(t, 1), Cr(t, de), t.setAttribute("transform", l)) : (l = getComputedStyle(t)[de], s[de] = r, o = rn(t, 1), s[de] = l);
  for (u in lr)
    l = i[u], f = o[u], l !== f && n.indexOf(u) < 0 && (c = Ke(l), p = Ke(f), _ = c !== p ? kr(t, u, l, p) : parseFloat(l), d = parseFloat(f), e._pt = new ft(e._pt, o, u, _, d - _, ys), e._pt.u = p || 0, e._props.push(u));
  So(o, i);
};
lt("padding,margin,Width,Radius", function(a, e) {
  var r = "Top", t = "Right", i = "Bottom", n = "Left", s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function(o) {
    return e < 2 ? a + o : "border" + o + a;
  });
  Nn[e > 1 ? "border" + a : a] = function(o, u, l, f, _) {
    var d, c;
    if (arguments.length < 4)
      return d = s.map(function(p) {
        return nr(o, p, l);
      }), c = d.join(" "), c.split(d[0]).length === 5 ? d[0] : c;
    d = (f + "").split(" "), c = {}, s.forEach(function(p, h) {
      return c[p] = d[h] = d[h] || d[(h - 1) / 2 | 0];
    }), o.init(u, c, _);
  };
});
var Na = {
  name: "css",
  register: ws,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, r, t, i, n) {
    var s = this._props, o = e.style, u = t.vars.startAt, l, f, _, d, c, p, h, m, T, w, S, y, b, M, x, P, k;
    Hs || ws(), this.styles = this.styles || Ra(e), P = this.styles.props, this.tween = t;
    for (h in r)
      if (h !== "autoRound" && (f = r[h], !(vt[h] && xa(h, r, t, i, e, n)))) {
        if (c = typeof f, p = Nn[h], c === "function" && (f = f.call(t, i, e, n), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = ji(f)), p)
          p(this, e, h, f, t) && (x = 1);
        else if (h.substr(0, 2) === "--")
          l = (getComputedStyle(e).getPropertyValue(h) + "").trim(), f += "", Tr.lastIndex = 0, Tr.test(l) || (m = Ke(l), T = Ke(f), T ? m !== T && (l = kr(e, h, l, T) + T) : m && (f += m)), this.add(o, "setProperty", l, f, i, n, 0, 0, h), s.push(h), P.push(h, 0, o[h]);
        else if (c !== "undefined") {
          if (u && h in u ? (l = typeof u[h] == "function" ? u[h].call(t, i, e, n) : u[h], Le(l) && ~l.indexOf("random(") && (l = ji(l)), Ke(l + "") || l === "auto" || (l += St.units[h] || Ke(nr(e, h)) || ""), (l + "").charAt(1) === "=" && (l = nr(e, h))) : l = nr(e, h), d = parseFloat(l), w = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), w && (f = f.substr(2)), _ = parseFloat(f), h in Ht && (h === "autoAlpha" && (d === 1 && nr(e, "visibility") === "hidden" && _ && (d = 0), P.push("visibility", 0, o.visibility), vr(this, o, "visibility", d ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), h !== "scale" && h !== "transform" && (h = Ht[h], ~h.indexOf(",") && (h = h.split(",")[0]))), S = h in lr, S) {
            if (this.styles.save(h), k = f, c === "string" && f.substring(0, 6) === "var(--") {
              if (f = bt(e, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var C = e.style.perspective;
                e.style.perspective = f, f = bt(e, "perspective"), C ? e.style.perspective = C : Cr(e, "perspective");
              }
              _ = parseFloat(f);
            }
            if (y || (b = e._gsap, b.renderTransform && !r.parseTransform || rn(e, r.parseTransform), M = r.smoothOrigin !== !1 && b.smooth, y = this._pt = new ft(this._pt, o, de, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), h === "scale")
              this._pt = new ft(this._pt, b, "scaleY", b.scaleY, (w ? fi(b.scaleY, w + _) : _) - b.scaleY || 0, ys), this._pt.u = 0, s.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              P.push(ct, 0, o[ct]), f = Sl(f), b.svg ? Ts(e, f, 0, M, 0, this) : (T = parseFloat(f.split(" ")[2]) || 0, T !== b.zOrigin && vr(this, b, "zOrigin", b.zOrigin, T), vr(this, o, h, Bn(l), Bn(f)));
              continue;
            } else if (h === "svgOrigin") {
              Ts(e, f, 1, M, 0, this);
              continue;
            } else if (h in Fa) {
              Ml(this, b, h, d, w ? fi(d, w + f) : f);
              continue;
            } else if (h === "smoothOrigin") {
              vr(this, b, "smooth", b.smooth, f);
              continue;
            } else if (h === "force3D") {
              b[h] = f;
              continue;
            } else if (h === "transform") {
              Ol(this, f, e);
              continue;
            }
          } else h in o || (h = wi(h) || h);
          if (S || (_ || _ === 0) && (d || d === 0) && !ll.test(f) && h in o)
            m = (l + "").substr((d + "").length), _ || (_ = 0), T = Ke(f) || (h in St.units ? St.units[h] : m), m !== T && (d = kr(e, h, l, T)), this._pt = new ft(this._pt, S ? b : o, h, d, (w ? fi(d, w + _) : _) - d, !S && (T === "px" || h === "zIndex") && r.autoRound !== !1 ? _l : ys), this._pt.u = T || 0, S && k !== f ? (this._pt.b = l, this._pt.e = k, this._pt.r = hl) : m !== T && T !== "%" && (this._pt.b = l, this._pt.r = cl);
          else if (h in o)
            bl.call(this, e, h, l, w ? w + f : f);
          else if (h in e)
            this.add(e, h, l || e[h], w ? w + f : f, i, n);
          else if (h !== "parseTransform") {
            Ls(h, f);
            continue;
          }
          S || (h in o ? P.push(h, 0, o[h]) : typeof e[h] == "function" ? P.push(h, 2, e[h]()) : P.push(h, 1, l || e[h])), s.push(h);
        }
      }
    x && ka(this);
  },
  render: function(e, r) {
    if (r.tween._time || !qs())
      for (var t = r._pt; t; )
        t.r(e, t.d), t = t._next;
    else
      r.styles.revert();
  },
  get: nr,
  aliases: Ht,
  getSetter: function(e, r, t) {
    var i = Ht[r];
    return i && i.indexOf(",") < 0 && (r = i), r in lr && r !== ct && (e._gsap.x || nr(e, "x")) ? t && go === t ? r === "scale" ? ml : gl : (go = t || {}) && (r === "scale" ? vl : yl) : e.style && !zs(e.style[r]) ? dl : ~r.indexOf("-") ? pl : $s(e, r);
  },
  core: {
    _removeProperty: Cr,
    _getMatrix: Qs
  }
};
ht.utils.checkPrefix = wi;
ht.core.getStyleSaver = Ra;
(function(a, e, r, t) {
  var i = lt(a + "," + e + "," + r, function(n) {
    lr[n] = 1;
  });
  lt(e, function(n) {
    St.units[n] = "deg", Fa[n] = 1;
  }), Ht[i[13]] = a + "," + e, lt(t, function(n) {
    var s = n.split(":");
    Ht[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  St.units[a] = "px";
});
ht.registerPlugin(Na);
var ir = ht.registerPlugin(Na) || ht;
ir.core.Tween;
function Dl(a, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t);
  }
}
function Rl(a, e, r) {
  return e && Dl(a.prototype, e), a;
}
var Ve, kn, wt, yr, xr, _i, Ba, Lr, di, Ya, or, Yt, Xa, Va = function() {
  return Ve || typeof window < "u" && (Ve = window.gsap) && Ve.registerPlugin && Ve;
}, Ua = 1, li = [], $ = [], Kt = [], Yi = Date.now, bs = function(e, r) {
  return r;
}, El = function() {
  var e = di.core, r = e.bridge || {}, t = e._scrollers, i = e._proxies;
  t.push.apply(t, $), i.push.apply(i, Kt), $ = t, Kt = i, bs = function(s, o) {
    return r[s](o);
  };
}, br = function(e, r) {
  return ~Kt.indexOf(e) && Kt[Kt.indexOf(e) + 1][r];
}, Xi = function(e) {
  return !!~Ya.indexOf(e);
}, et = function(e, r, t, i, n) {
  return e.addEventListener(r, t, {
    passive: i !== !1,
    capture: !!n
  });
}, Je = function(e, r, t, i) {
  return e.removeEventListener(r, t, !!i);
}, cn = "scrollLeft", hn = "scrollTop", Ss = function() {
  return or && or.isPressed || $.cache++;
}, Yn = function(e, r) {
  var t = function i(n) {
    if (n || n === 0) {
      Ua && (wt.history.scrollRestoration = "manual");
      var s = or && or.isPressed;
      n = i.v = Math.round(n) || (or && or.iOS ? 1 : 0), e(n), i.cacheID = $.cache, s && bs("ss", n);
    } else (r || $.cache !== i.cacheID || bs("ref")) && (i.cacheID = $.cache, i.v = e());
    return i.v + i.offset;
  };
  return t.offset = 0, e && t;
}, nt = {
  s: cn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Yn(function(a) {
    return arguments.length ? wt.scrollTo(a, Ee.sc()) : wt.pageXOffset || yr[cn] || xr[cn] || _i[cn] || 0;
  })
}, Ee = {
  s: hn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: nt,
  sc: Yn(function(a) {
    return arguments.length ? wt.scrollTo(nt.sc(), a) : wt.pageYOffset || yr[hn] || xr[hn] || _i[hn] || 0;
  })
}, ot = function(e, r) {
  return (r && r._ctx && r._ctx.selector || Ve.utils.toArray)(e)[0] || (typeof e == "string" && Ve.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Al = function(e, r) {
  for (var t = r.length; t--; )
    if (r[t] === e || r[t].contains(e))
      return !0;
  return !1;
}, Pr = function(e, r) {
  var t = r.s, i = r.sc;
  Xi(e) && (e = yr.scrollingElement || xr);
  var n = $.indexOf(e), s = i === Ee.sc ? 1 : 2;
  !~n && (n = $.push(e) - 1), $[n + s] || et(e, "scroll", Ss);
  var o = $[n + s], u = o || ($[n + s] = Yn(br(e, t), !0) || (Xi(e) ? i : Yn(function(l) {
    return arguments.length ? e[t] = l : e[t];
  })));
  return u.target = e, o || (u.smooth = Ve.getProperty(e, "scrollBehavior") === "smooth"), u;
}, Cs = function(e, r, t) {
  var i = e, n = e, s = Yi(), o = s, u = r || 50, l = Math.max(500, u * 3), f = function(p, h) {
    var m = Yi();
    h || m - s > u ? (n = i, i = p, o = s, s = m) : t ? i += p : i = n + (p - n) / (m - o) * (s - o);
  }, _ = function() {
    n = i = t ? 0 : i, o = s = 0;
  }, d = function(p) {
    var h = o, m = n, T = Yi();
    return (p || p === 0) && p !== i && f(p), s === o || T - o > l ? 0 : (i + (t ? m : -m)) / ((t ? T : s) - h) * 1e3;
  };
  return {
    update: f,
    reset: _,
    getVelocity: d
  };
}, Mi = function(e, r) {
  return r && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Co = function(e) {
  var r = Math.max.apply(Math, e), t = Math.min.apply(Math, e);
  return Math.abs(r) >= Math.abs(t) ? r : t;
}, Wa = function() {
  di = Ve.core.globals().ScrollTrigger, di && di.core && El();
}, $a = function(e) {
  return Ve = e || Va(), !kn && Ve && typeof document < "u" && document.body && (wt = window, yr = document, xr = yr.documentElement, _i = yr.body, Ya = [wt, yr, xr, _i], Ve.utils.clamp, Xa = Ve.core.context || function() {
  }, Lr = "onpointerenter" in _i ? "pointer" : "mouse", Ba = Ce.isTouch = wt.matchMedia && wt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in wt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Yt = Ce.eventTypes = ("ontouchstart" in xr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in xr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Ua = 0;
  }, 500), kn = 1), di || Wa(), kn;
};
nt.op = Ee;
$.cache = 0;
var Ce = /* @__PURE__ */ (function() {
  function a(r) {
    this.init(r);
  }
  var e = a.prototype;
  return e.init = function(t) {
    kn || $a(Ve) || console.warn("Please gsap.registerPlugin(Observer)"), di || Wa();
    var i = t.tolerance, n = t.dragMinimum, s = t.type, o = t.target, u = t.lineHeight, l = t.debounce, f = t.preventDefault, _ = t.onStop, d = t.onStopDelay, c = t.ignore, p = t.wheelSpeed, h = t.event, m = t.onDragStart, T = t.onDragEnd, w = t.onDrag, S = t.onPress, y = t.onRelease, b = t.onRight, M = t.onLeft, x = t.onUp, P = t.onDown, k = t.onChangeX, C = t.onChangeY, B = t.onChange, D = t.onToggleX, H = t.onToggleY, F = t.onHover, X = t.onHoverEnd, I = t.onMove, E = t.ignoreCheck, q = t.isNormalizer, te = t.onGestureStart, g = t.onGestureEnd, re = t.onWheel, Oe = t.onEnable, Ne = t.onDisable, J = t.onClick, ae = t.scrollSpeed, ue = t.capture, pe = t.allowClicks, Be = t.lockAxis, ge = t.onLockAxis;
    this.target = o = ot(o) || xr, this.vars = t, c && (c = Ve.utils.toArray(c)), i = i || 1e-9, n = n || 0, p = p || 1, ae = ae || 1, s = s || "wheel,touch,pointer", l = l !== !1, u || (u = parseFloat(wt.getComputedStyle(_i).lineHeight) || 22);
    var zt, me, je, Z, we, st, _t, v = this, dt = 0, Zt = 0, fr = t.passive || !f && t.passive !== !1, ve = Pr(o, nt), jt = Pr(o, Ee), cr = ve(), Or = jt(), Ae = ~s.indexOf("touch") && !~s.indexOf("pointer") && Yt[0] === "pointerdown", hr = Xi(o), Te = o.ownerDocument || yr, Ft = [0, 0, 0], Pt = [0, 0, 0], Jt = 0, bi = function() {
      return Jt = Yi();
    }, ke = function(z, j) {
      return (v.event = z) && c && Al(z.target, c) || j && Ae && z.pointerType !== "touch" || E && E(z, j);
    }, an = function() {
      v._vx.reset(), v._vy.reset(), me.pause(), _ && _(v);
    }, er = function() {
      var z = v.deltaX = Co(Ft), j = v.deltaY = Co(Pt), O = Math.abs(z) >= i, L = Math.abs(j) >= i;
      B && (O || L) && B(v, z, j, Ft, Pt), O && (b && v.deltaX > 0 && b(v), M && v.deltaX < 0 && M(v), k && k(v), D && v.deltaX < 0 != dt < 0 && D(v), dt = v.deltaX, Ft[0] = Ft[1] = Ft[2] = 0), L && (P && v.deltaY > 0 && P(v), x && v.deltaY < 0 && x(v), C && C(v), H && v.deltaY < 0 != Zt < 0 && H(v), Zt = v.deltaY, Pt[0] = Pt[1] = Pt[2] = 0), (Z || je) && (I && I(v), je && (m && je === 1 && m(v), w && w(v), je = 0), Z = !1), st && !(st = !1) && ge && ge(v), we && (re(v), we = !1), zt = 0;
    }, jr = function(z, j, O) {
      Ft[O] += z, Pt[O] += j, v._vx.update(z), v._vy.update(j), l ? zt || (zt = requestAnimationFrame(er)) : er();
    }, Jr = function(z, j) {
      Be && !_t && (v.axis = _t = Math.abs(z) > Math.abs(j) ? "x" : "y", st = !0), _t !== "y" && (Ft[2] += z, v._vx.update(z, !0)), _t !== "x" && (Pt[2] += j, v._vy.update(j, !0)), l ? zt || (zt = requestAnimationFrame(er)) : er();
    }, _r = function(z) {
      if (!ke(z, 1)) {
        z = Mi(z, f);
        var j = z.clientX, O = z.clientY, L = j - v.x, A = O - v.y, N = v.isDragging;
        v.x = j, v.y = O, (N || (L || A) && (Math.abs(v.startX - j) >= n || Math.abs(v.startY - O) >= n)) && (je || (je = N ? 2 : 1), N || (v.isDragging = !0), Jr(L, A));
      }
    }, Dr = v.onPress = function(Y) {
      ke(Y, 1) || Y && Y.button || (v.axis = _t = null, me.pause(), v.isPressed = !0, Y = Mi(Y), dt = Zt = 0, v.startX = v.x = Y.clientX, v.startY = v.y = Y.clientY, v._vx.reset(), v._vy.reset(), et(q ? o : Te, Yt[1], _r, fr, !0), v.deltaX = v.deltaY = 0, S && S(v));
    }, G = v.onRelease = function(Y) {
      if (!ke(Y, 1)) {
        Je(q ? o : Te, Yt[1], _r, !0);
        var z = !isNaN(v.y - v.startY), j = v.isDragging, O = j && (Math.abs(v.x - v.startX) > 3 || Math.abs(v.y - v.startY) > 3), L = Mi(Y);
        !O && z && (v._vx.reset(), v._vy.reset(), f && pe && Ve.delayedCall(0.08, function() {
          if (Yi() - Jt > 300 && !Y.defaultPrevented) {
            if (Y.target.click)
              Y.target.click();
            else if (Te.createEvent) {
              var A = Te.createEvent("MouseEvents");
              A.initMouseEvent("click", !0, !0, wt, 1, L.screenX, L.screenY, L.clientX, L.clientY, !1, !1, !1, !1, 0, null), Y.target.dispatchEvent(A);
            }
          }
        })), v.isDragging = v.isGesturing = v.isPressed = !1, _ && j && !q && me.restart(!0), je && er(), T && j && T(v), y && y(v, O);
      }
    }, Rr = function(z) {
      return z.touches && z.touches.length > 1 && (v.isGesturing = !0) && te(z, v.isDragging);
    }, It = function() {
      return (v.isGesturing = !1) || g(v);
    }, Lt = function(z) {
      if (!ke(z)) {
        var j = ve(), O = jt();
        jr((j - cr) * ae, (O - Or) * ae, 1), cr = j, Or = O, _ && me.restart(!0);
      }
    }, Nt = function(z) {
      if (!ke(z)) {
        z = Mi(z, f), re && (we = !0);
        var j = (z.deltaMode === 1 ? u : z.deltaMode === 2 ? wt.innerHeight : 1) * p;
        jr(z.deltaX * j, z.deltaY * j, 0), _ && !q && me.restart(!0);
      }
    }, Er = function(z) {
      if (!ke(z)) {
        var j = z.clientX, O = z.clientY, L = j - v.x, A = O - v.y;
        v.x = j, v.y = O, Z = !0, _ && me.restart(!0), (L || A) && Jr(L, A);
      }
    }, ei = function(z) {
      v.event = z, F(v);
    }, tr = function(z) {
      v.event = z, X(v);
    }, Si = function(z) {
      return ke(z) || Mi(z, f) && J(v);
    };
    me = v._dc = Ve.delayedCall(d || 0.25, an).pause(), v.deltaX = v.deltaY = 0, v._vx = Cs(0, 50, !0), v._vy = Cs(0, 50, !0), v.scrollX = ve, v.scrollY = jt, v.isDragging = v.isGesturing = v.isPressed = !1, Xa(this), v.enable = function(Y) {
      return v.isEnabled || (et(hr ? Te : o, "scroll", Ss), s.indexOf("scroll") >= 0 && et(hr ? Te : o, "scroll", Lt, fr, ue), s.indexOf("wheel") >= 0 && et(o, "wheel", Nt, fr, ue), (s.indexOf("touch") >= 0 && Ba || s.indexOf("pointer") >= 0) && (et(o, Yt[0], Dr, fr, ue), et(Te, Yt[2], G), et(Te, Yt[3], G), pe && et(o, "click", bi, !0, !0), J && et(o, "click", Si), te && et(Te, "gesturestart", Rr), g && et(Te, "gestureend", It), F && et(o, Lr + "enter", ei), X && et(o, Lr + "leave", tr), I && et(o, Lr + "move", Er)), v.isEnabled = !0, v.isDragging = v.isGesturing = v.isPressed = Z = je = !1, v._vx.reset(), v._vy.reset(), cr = ve(), Or = jt(), Y && Y.type && Dr(Y), Oe && Oe(v)), v;
    }, v.disable = function() {
      v.isEnabled && (li.filter(function(Y) {
        return Y !== v && Xi(Y.target);
      }).length || Je(hr ? Te : o, "scroll", Ss), v.isPressed && (v._vx.reset(), v._vy.reset(), Je(q ? o : Te, Yt[1], _r, !0)), Je(hr ? Te : o, "scroll", Lt, ue), Je(o, "wheel", Nt, ue), Je(o, Yt[0], Dr, ue), Je(Te, Yt[2], G), Je(Te, Yt[3], G), Je(o, "click", bi, !0), Je(o, "click", Si), Je(Te, "gesturestart", Rr), Je(Te, "gestureend", It), Je(o, Lr + "enter", ei), Je(o, Lr + "leave", tr), Je(o, Lr + "move", Er), v.isEnabled = v.isPressed = v.isDragging = !1, Ne && Ne(v));
    }, v.kill = v.revert = function() {
      v.disable();
      var Y = li.indexOf(v);
      Y >= 0 && li.splice(Y, 1), or === v && (or = 0);
    }, li.push(v), q && Xi(o) && (or = v), v.enable(h);
  }, Rl(a, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), a;
})();
Ce.version = "3.15.0";
Ce.create = function(a) {
  return new Ce(a);
};
Ce.register = $a;
Ce.getAll = function() {
  return li.slice();
};
Ce.getById = function(a) {
  return li.filter(function(e) {
    return e.vars.id === a;
  })[0];
};
Va() && Ve.registerPlugin(Ce);
var R, si, W, ie, yt, ee, Zs, Xn, nn, Vi, Ei, _n, He, Hn, ks, rt, ko, Po, oi, Ga, is, Ha, tt, Ps, qa, Ka, pr, Ms, js, pi, Js, Ui, Os, ns, dn = 1, qe = Date.now, ss = qe(), At = 0, Ai = 0, Mo = function(e, r, t) {
  var i = mt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return t["_" + r + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
}, Oo = function(e, r) {
  return r && (!mt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, zl = function a() {
  return Ai && requestAnimationFrame(a);
}, Do = function() {
  return Hn = 1;
}, Ro = function() {
  return Hn = 0;
}, $t = function(e) {
  return e;
}, zi = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Qa = function() {
  return typeof window < "u";
}, Za = function() {
  return R || Qa() && (R = window.gsap) && R.registerPlugin && R;
}, qr = function(e) {
  return !!~Zs.indexOf(e);
}, ja = function(e) {
  return (e === "Height" ? Js : W["inner" + e]) || yt["client" + e] || ee["client" + e];
}, Ja = function(e) {
  return br(e, "getBoundingClientRect") || (qr(e) ? function() {
    return Rn.width = W.innerWidth, Rn.height = Js, Rn;
  } : function() {
    return sr(e);
  });
}, Fl = function(e, r, t) {
  var i = t.d, n = t.d2, s = t.a;
  return (s = br(e, "getBoundingClientRect")) ? function() {
    return s()[i];
  } : function() {
    return (r ? ja(n) : e["client" + n]) || 0;
  };
}, Il = function(e, r) {
  return !r || ~Kt.indexOf(e) ? Ja(e) : function() {
    return Rn;
  };
}, qt = function(e, r) {
  var t = r.s, i = r.d2, n = r.d, s = r.a;
  return Math.max(0, (t = "scroll" + i) && (s = br(e, t)) ? s() - Ja(e)()[n] : qr(e) ? (yt[t] || ee[t]) - ja(i) : e[t] - e["offset" + i]);
}, pn = function(e, r) {
  for (var t = 0; t < oi.length; t += 3)
    (!r || ~r.indexOf(oi[t + 1])) && e(oi[t], oi[t + 1], oi[t + 2]);
}, mt = function(e) {
  return typeof e == "string";
}, Qe = function(e) {
  return typeof e == "function";
}, Fi = function(e) {
  return typeof e == "number";
}, Nr = function(e) {
  return typeof e == "object";
}, Oi = function(e, r, t) {
  return e && e.progress(r ? 0 : 1) && t && e.pause();
}, ri = function(e, r, t) {
  if (e.enabled) {
    var i = e._ctx ? e._ctx.add(function() {
      return r(e, t);
    }) : r(e, t);
    i && i.totalTime && (e.callbackAnimation = i);
  }
}, ii = Math.abs, eu = "left", tu = "top", eo = "right", to = "bottom", $r = "width", Gr = "height", Wi = "Right", $i = "Left", Gi = "Top", Hi = "Bottom", Pe = "padding", Ot = "margin", Ti = "Width", ro = "Height", Re = "px", Dt = function(e) {
  return W.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Ll = function(e) {
  var r = Dt(e).position;
  e.style.position = r === "absolute" || r === "fixed" ? r : "relative";
}, Eo = function(e, r) {
  for (var t in r)
    t in e || (e[t] = r[t]);
  return e;
}, sr = function(e, r) {
  var t = r && Dt(e)[ks] !== "matrix(1, 0, 0, 1, 0, 0)" && R.to(e, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), i = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
  return t && t.progress(0).kill(), i;
}, Vn = function(e, r) {
  var t = r.d2;
  return e["offset" + t] || e["client" + t] || 0;
}, ru = function(e) {
  var r = [], t = e.labels, i = e.duration(), n;
  for (n in t)
    r.push(t[n] / i);
  return r;
}, Nl = function(e) {
  return function(r) {
    return R.utils.snap(ru(e), r);
  };
}, io = function(e) {
  var r = R.utils.snap(e), t = Array.isArray(e) && e.slice(0).sort(function(i, n) {
    return i - n;
  });
  return t ? function(i, n, s) {
    s === void 0 && (s = 1e-3);
    var o;
    if (!n)
      return r(i);
    if (n > 0) {
      for (i -= s, o = 0; o < t.length; o++)
        if (t[o] >= i)
          return t[o];
      return t[o - 1];
    } else
      for (o = t.length, i += s; o--; )
        if (t[o] <= i)
          return t[o];
    return t[0];
  } : function(i, n, s) {
    s === void 0 && (s = 1e-3);
    var o = r(i);
    return !n || Math.abs(o - i) < s || o - i < 0 == n < 0 ? o : r(n < 0 ? i - e : i + e);
  };
}, Bl = function(e) {
  return function(r, t) {
    return io(ru(e))(r, t.direction);
  };
}, gn = function(e, r, t, i) {
  return t.split(",").forEach(function(n) {
    return e(r, n, i);
  });
}, Ie = function(e, r, t, i, n) {
  return e.addEventListener(r, t, {
    passive: !i,
    capture: !!n
  });
}, Fe = function(e, r, t, i) {
  return e.removeEventListener(r, t, !!i);
}, mn = function(e, r, t) {
  t = t && t.wheelHandler, t && (e(r, "wheel", t), e(r, "touchmove", t));
}, Ao = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, vn = {
  toggleActions: "play",
  anticipatePin: 0
}, Un = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Pn = function(e, r) {
  if (mt(e)) {
    var t = e.indexOf("="), i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
    ~t && (e.indexOf("%") > t && (i *= r / 100), e = e.substr(0, t - 1)), e = i + (e in Un ? Un[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0);
  }
  return e;
}, yn = function(e, r, t, i, n, s, o, u) {
  var l = n.startColor, f = n.endColor, _ = n.fontSize, d = n.indent, c = n.fontWeight, p = ie.createElement("div"), h = qr(t) || br(t, "pinType") === "fixed", m = e.indexOf("scroller") !== -1, T = h ? ee : t.tagName === "IFRAME" ? t.contentDocument.body : t, w = e.indexOf("start") !== -1, S = w ? l : f, y = "border-color:" + S + ";font-size:" + _ + ";color:" + S + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return y += "position:" + ((m || u) && h ? "fixed;" : "absolute;"), (m || u || !h) && (y += (i === Ee ? eo : to) + ":" + (s + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = w, p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), p.style.cssText = y, p.innerText = r || r === 0 ? e + "-" + r : e, T.children[0] ? T.insertBefore(p, T.children[0]) : T.appendChild(p), p._offset = p["offset" + i.op.d2], Mn(p, 0, i, w), p;
}, Mn = function(e, r, t, i) {
  var n = {
    display: "block"
  }, s = t[i ? "os2" : "p2"], o = t[i ? "p2" : "os2"];
  e._isFlipped = i, n[t.a + "Percent"] = i ? -100 : 0, n[t.a] = i ? "1px" : 0, n["border" + s + Ti] = 1, n["border" + o + Ti] = 0, n[t.p] = r + "px", R.set(e, n);
}, V = [], Ds = {}, sn, zo = function() {
  return qe() - At > 34 && (sn || (sn = requestAnimationFrame(ar)));
}, ni = function() {
  (!tt || !tt.isPressed || tt.startX > ee.clientWidth) && ($.cache++, tt ? sn || (sn = requestAnimationFrame(ar)) : ar(), At || Qr("scrollStart"), At = qe());
}, os = function() {
  Ka = W.innerWidth, qa = W.innerHeight;
}, Ii = function(e) {
  $.cache++, (e === !0 || !He && !Ha && !ie.fullscreenElement && !ie.webkitFullscreenElement && (!Ps || Ka !== W.innerWidth || Math.abs(W.innerHeight - qa) > W.innerHeight * 0.25)) && Xn.restart(!0);
}, Kr = {}, Yl = [], iu = function a() {
  return Fe(U, "scrollEnd", a) || Yr(!0);
}, Qr = function(e) {
  return Kr[e] && Kr[e].map(function(r) {
    return r();
  }) || Yl;
}, gt = [], nu = function(e) {
  for (var r = 0; r < gt.length; r += 5)
    (!e || gt[r + 4] && gt[r + 4].query === e) && (gt[r].style.cssText = gt[r + 1], gt[r].getBBox && gt[r].setAttribute("transform", gt[r + 2] || ""), gt[r + 3].uncache = 1);
}, su = function() {
  return $.forEach(function(e) {
    return Qe(e) && ++e.cacheID && (e.rec = e());
  });
}, no = function(e, r) {
  var t;
  for (rt = 0; rt < V.length; rt++)
    t = V[rt], t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
  Ui = !0, r && nu(r), r || Qr("revert");
}, ou = function(e, r) {
  $.cache++, (r || !it) && $.forEach(function(t) {
    return Qe(t) && t.cacheID++ && (t.rec = 0);
  }), mt(e) && (W.history.scrollRestoration = js = e);
}, it, Hr = 0, Fo, Xl = function() {
  if (Fo !== Hr) {
    var e = Fo = Hr;
    requestAnimationFrame(function() {
      return e === Hr && Yr(!0);
    });
  }
}, au = function() {
  ee.appendChild(pi), Js = !tt && pi.offsetHeight || W.innerHeight, ee.removeChild(pi);
}, Io = function(e) {
  return nn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r) {
    return r.style.display = e ? "none" : "block";
  });
}, Yr = function(e, r) {
  if (yt = ie.documentElement, ee = ie.body, Zs = [W, ie, yt, ee], At && !e && !Ui) {
    Ie(U, "scrollEnd", iu);
    return;
  }
  au(), it = U.isRefreshing = !0, Ui || su();
  var t = Qr("refreshInit");
  Ga && U.sort(), r || no(), $.forEach(function(i) {
    Qe(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), V.slice(0).forEach(function(i) {
    return i.refresh();
  }), Ui = !1, V.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight", s = i.pin[n];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh();
    }
  }), Os = 1, Io(!0), V.forEach(function(i) {
    var n = qt(i.scroller, i._dir), s = i.vars.end === "max" || i._endClamp && i.end > n, o = i._startClamp && i.start >= n;
    (s || o) && i.setPositions(o ? n - 1 : i.start, s ? Math.max(o ? n : i.start + 1, n) : i.end, !0);
  }), Io(!1), Os = 0, t.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), $.forEach(function(i) {
    Qe(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), ou(js, 1), Xn.pause(), Hr++, it = 2, ar(2), V.forEach(function(i) {
    return Qe(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), it = U.isRefreshing = !1, Qr("refresh");
}, Rs = 0, On = 1, qi, ar = function(e) {
  if (e === 2 || !it && !Ui) {
    U.isUpdating = !0, qi && qi.update(0);
    var r = V.length, t = qe(), i = t - ss >= 50, n = r && V[0].scroll();
    if (On = Rs > n ? -1 : 1, it || (Rs = n), i && (At && !Hn && t - At > 200 && (At = 0, Qr("scrollEnd")), Ei = ss, ss = t), On < 0) {
      for (rt = r; rt-- > 0; )
        V[rt] && V[rt].update(0, i);
      On = 1;
    } else
      for (rt = 0; rt < r; rt++)
        V[rt] && V[rt].update(0, i);
    U.isUpdating = !1;
  }
  sn = 0;
}, Es = [eu, tu, to, eo, Ot + Hi, Ot + Wi, Ot + Gi, Ot + $i, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Dn = Es.concat([$r, Gr, "boxSizing", "max" + Ti, "max" + ro, "position", Ot, Pe, Pe + Gi, Pe + Wi, Pe + Hi, Pe + $i]), Vl = function(e, r, t) {
  gi(t);
  var i = e._gsap;
  if (i.spacerIsNative)
    gi(i.spacerState);
  else if (e._gsap.swappedIn) {
    var n = r.parentNode;
    n && (n.insertBefore(e, r), n.removeChild(r));
  }
  e._gsap.swappedIn = !1;
}, as = function(e, r, t, i) {
  if (!e._gsap.swappedIn) {
    for (var n = Es.length, s = r.style, o = e.style, u; n--; )
      u = Es[n], s[u] = t[u];
    s.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (s.display = "inline-block"), o[to] = o[eo] = "auto", s.flexBasis = t.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[$r] = Vn(e, nt) + Re, s[Gr] = Vn(e, Ee) + Re, s[Pe] = o[Ot] = o[tu] = o[eu] = "0", gi(i), o[$r] = o["max" + Ti] = t[$r], o[Gr] = o["max" + ro] = t[Gr], o[Pe] = t[Pe], e.parentNode !== r && (e.parentNode.insertBefore(r, e), r.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, Ul = /([A-Z])/g, gi = function(e) {
  if (e) {
    var r = e.t.style, t = e.length, i = 0, n, s;
    for ((e.t._gsap || R.core.getCache(e.t)).uncache = 1; i < t; i += 2)
      s = e[i + 1], n = e[i], s ? r[n] = s : r[n] && r.removeProperty(n.replace(Ul, "-$1").toLowerCase());
  }
}, xn = function(e) {
  for (var r = Dn.length, t = e.style, i = [], n = 0; n < r; n++)
    i.push(Dn[n], t[Dn[n]]);
  return i.t = e, i;
}, Wl = function(e, r, t) {
  for (var i = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2)
    o = e[s], i.push(o, o in r ? r[o] : e[s + 1]);
  return i.t = e.t, i;
}, Rn = {
  left: 0,
  top: 0
}, Lo = function(e, r, t, i, n, s, o, u, l, f, _, d, c, p) {
  Qe(e) && (e = e(u)), mt(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Pn("0" + e.substr(3), t) : 0));
  var h = c ? c.time() : 0, m, T, w;
  if (c && c.seek(0), isNaN(e) || (e = +e), Fi(e))
    c && (e = R.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, d, e)), o && Mn(o, t, i, !0);
  else {
    Qe(r) && (r = r(u));
    var S = (e || "0").split(" "), y, b, M, x;
    w = ot(r, u) || ee, y = sr(w) || {}, (!y || !y.left && !y.top) && Dt(w).display === "none" && (x = w.style.display, w.style.display = "block", y = sr(w), x ? w.style.display = x : w.style.removeProperty("display")), b = Pn(S[0], y[i.d]), M = Pn(S[1] || "0", t), e = y[i.p] - l[i.p] - f + b + n - M, o && Mn(o, M, i, t - M < 20 || o._isStart && M > 20), t -= t - M;
  }
  if (p && (u[p] = e || -1e-3, e < 0 && (e = 0)), s) {
    var P = e + t, k = s._isStart;
    m = "scroll" + i.d2, Mn(s, P, i, k && P > 20 || !k && (_ ? Math.max(ee[m], yt[m]) : s.parentNode[m]) <= P + 1), _ && (l = sr(o), _ && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Re));
  }
  return c && w && (m = sr(w), c.seek(d), T = sr(w), c._caScrollDist = m[i.p] - T[i.p], e = e / c._caScrollDist * d), c && c.seek(h), c ? e : Math.round(e);
}, $l = /(webkit|moz|length|cssText|inset)/i, No = function(e, r, t, i) {
  if (e.parentNode !== r) {
    var n = e.style, s, o;
    if (r === ee) {
      e._stOrig = n.cssText, o = Dt(e);
      for (s in o)
        !+s && !$l.test(s) && o[s] && typeof n[s] == "string" && s !== "0" && (n[s] = o[s]);
      n.top = t, n.left = i;
    } else
      n.cssText = e._stOrig;
    R.core.getCache(e).uncache = 1, r.appendChild(e);
  }
}, uu = function(e, r, t) {
  var i = r, n = i;
  return function(s) {
    var o = Math.round(e());
    return o !== i && o !== n && Math.abs(o - i) > 3 && Math.abs(o - n) > 3 && (s = o, t && t()), n = i, i = Math.round(s), i;
  };
}, wn = function(e, r, t) {
  var i = {};
  i[r.p] = "+=" + t, R.set(e, i);
}, Bo = function(e, r) {
  var t = Pr(e, r), i = "_scroll" + r.p2, n = function s(o, u, l, f, _) {
    var d = s.tween, c = u.onComplete, p = {};
    l = l || t();
    var h = uu(t, l, function() {
      d.kill(), s.tween = 0;
    });
    return _ = f && _ || 0, f = f || o - l, d && d.kill(), u[i] = o, u.inherit = !1, u.modifiers = p, p[i] = function() {
      return h(l + f * d.ratio + _ * d.ratio * d.ratio);
    }, u.onUpdate = function() {
      $.cache++, s.tween && ar();
    }, u.onComplete = function() {
      s.tween = 0, c && c.call(d);
    }, d = s.tween = R.to(e, u), d;
  };
  return e[i] = t, t.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Ie(e, "wheel", t.wheelHandler), U.isTouch && Ie(e, "touchmove", t.wheelHandler), n;
}, U = /* @__PURE__ */ (function() {
  function a(r, t) {
    si || a.register(R) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ms(this), this.init(r, t);
  }
  var e = a.prototype;
  return e.init = function(t, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ai) {
      this.update = this.refresh = this.kill = $t;
      return;
    }
    t = Eo(mt(t) || Fi(t) || t.nodeType ? {
      trigger: t
    } : t, vn);
    var n = t, s = n.onUpdate, o = n.toggleClass, u = n.id, l = n.onToggle, f = n.onRefresh, _ = n.scrub, d = n.trigger, c = n.pin, p = n.pinSpacing, h = n.invalidateOnRefresh, m = n.anticipatePin, T = n.onScrubComplete, w = n.onSnapComplete, S = n.once, y = n.snap, b = n.pinReparent, M = n.pinSpacer, x = n.containerAnimation, P = n.fastScrollEnd, k = n.preventOverlaps, C = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? nt : Ee, B = !_ && _ !== 0, D = ot(t.scroller || W), H = R.core.getCache(D), F = qr(D), X = ("pinType" in t ? t.pinType : br(D, "pinType") || F && "fixed") === "fixed", I = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], E = B && t.toggleActions.split(" "), q = "markers" in t ? t.markers : vn.markers, te = F ? 0 : parseFloat(Dt(D)["border" + C.p2 + Ti]) || 0, g = this, re = t.onRefreshInit && function() {
      return t.onRefreshInit(g);
    }, Oe = Fl(D, F, C), Ne = Il(D, F), J = 0, ae = 0, ue = 0, pe = Pr(D, C), Be, ge, zt, me, je, Z, we, st, _t, v, dt, Zt, fr, ve, jt, cr, Or, Ae, hr, Te, Ft, Pt, Jt, bi, ke, an, er, jr, Jr, _r, Dr, G, Rr, It, Lt, Nt, Er, ei, tr;
    if (g._startClamp = g._endClamp = !1, g._dir = C, m *= 45, g.scroller = D, g.scroll = x ? x.time.bind(x) : pe, me = pe(), g.vars = t, i = i || t.animation, "refreshPriority" in t && (Ga = 1, t.refreshPriority === -9999 && (qi = g)), H.tweenScroll = H.tweenScroll || {
      top: Bo(D, Ee),
      left: Bo(D, nt)
    }, g.tweenTo = Be = H.tweenScroll[C.p], g.scrubDuration = function(O) {
      Rr = Fi(O) && O, Rr ? G ? G.duration(O) : G = R.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Rr,
        paused: !0,
        onComplete: function() {
          return T && T(g);
        }
      }) : (G && G.progress(1).kill(), G = 0);
    }, i && (i.vars.lazy = !1, i._initted && !g.isReverted || i.vars.immediateRender !== !1 && t.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(_), _r = 0, u || (u = i.vars.id)), y && ((!Nr(y) || y.push) && (y = {
      snapTo: y
    }), "scrollBehavior" in ee.style && R.set(F ? [ee, yt] : D, {
      scrollBehavior: "auto"
    }), $.forEach(function(O) {
      return Qe(O) && O.target === (F ? ie.scrollingElement || yt : D) && (O.smooth = !1);
    }), zt = Qe(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? Nl(i) : y.snapTo === "labelsDirectional" ? Bl(i) : y.directional !== !1 ? function(O, L) {
      return io(y.snapTo)(O, qe() - ae < 500 ? 0 : L.direction);
    } : R.utils.snap(y.snapTo), It = y.duration || {
      min: 0.1,
      max: 2
    }, It = Nr(It) ? Vi(It.min, It.max) : Vi(It, It), Lt = R.delayedCall(y.delay || Rr / 2 || 0.1, function() {
      var O = pe(), L = qe() - ae < 500, A = Be.tween;
      if ((L || Math.abs(g.getVelocity()) < 10) && !A && !Hn && J !== O) {
        var N = (O - Z) / ve, ze = i && !B ? i.totalProgress() : N, K = L ? 0 : (ze - Dr) / (qe() - Ei) * 1e3 || 0, be = R.utils.clamp(-N, 1 - N, ii(K / 2) * K / 0.185), We = N + (y.inertia === !1 ? 0 : be), ye, le, ne = y, Bt = ne.onStart, ce = ne.onInterrupt, pt = ne.onComplete;
        if (ye = zt(We, g), Fi(ye) || (ye = We), le = Math.max(0, Math.round(Z + ye * ve)), O <= we && O >= Z && le !== O) {
          if (A && !A._initted && A.data <= ii(le - O))
            return;
          y.inertia === !1 && (be = ye - N), Be(le, {
            duration: It(ii(Math.max(ii(We - ze), ii(ye - ze)) * 0.185 / K / 0.05 || 0)),
            ease: y.ease || "power3",
            data: ii(le - O),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Lt.restart(!0) && ce && ri(g, ce);
            },
            onComplete: function() {
              g.update(), J = pe(), i && !B && (G ? G.resetTo("totalProgress", ye, i._tTime / i._tDur) : i.progress(ye)), _r = Dr = i && !B ? i.totalProgress() : g.progress, w && w(g), pt && ri(g, pt);
            }
          }, O, be * ve, le - O - be * ve), Bt && ri(g, Bt, Be.tween);
        }
      } else g.isActive && J !== O && Lt.restart(!0);
    }).pause()), u && (Ds[u] = g), d = g.trigger = ot(d || c !== !0 && c), tr = d && d._gsap && d._gsap.stRevert, tr && (tr = tr(g)), c = c === !0 ? d : ot(c), mt(o) && (o = {
      targets: d,
      className: o
    }), c && (p === !1 || p === Ot || (p = !p && c.parentNode && c.parentNode.style && Dt(c.parentNode).display === "flex" ? !1 : Pe), g.pin = c, ge = R.core.getCache(c), ge.spacer ? jt = ge.pinState : (M && (M = ot(M), M && !M.nodeType && (M = M.current || M.nativeElement), ge.spacerIsNative = !!M, M && (ge.spacerState = xn(M))), ge.spacer = Ae = M || ie.createElement("div"), Ae.classList.add("pin-spacer"), u && Ae.classList.add("pin-spacer-" + u), ge.pinState = jt = xn(c)), t.force3D !== !1 && R.set(c, {
      force3D: !0
    }), g.spacer = Ae = ge.spacer, Jr = Dt(c), bi = Jr[p + C.os2], Te = R.getProperty(c), Ft = R.quickSetter(c, C.a, Re), as(c, Ae, Jr), Or = xn(c)), q) {
      Zt = Nr(q) ? Eo(q, Ao) : Ao, v = yn("scroller-start", u, D, C, Zt, 0), dt = yn("scroller-end", u, D, C, Zt, 0, v), hr = v["offset" + C.op.d2];
      var Si = ot(br(D, "content") || D);
      st = this.markerStart = yn("start", u, Si, C, Zt, hr, 0, x), _t = this.markerEnd = yn("end", u, Si, C, Zt, hr, 0, x), x && (ei = R.quickSetter([st, _t], C.a, Re)), !X && !(Kt.length && br(D, "fixedMarkers") === !0) && (Ll(F ? ee : D), R.set([v, dt], {
        force3D: !0
      }), an = R.quickSetter(v, C.a, Re), jr = R.quickSetter(dt, C.a, Re));
    }
    if (x) {
      var Y = x.vars.onUpdate, z = x.vars.onUpdateParams;
      x.eventCallback("onUpdate", function() {
        g.update(0, 0, 1), Y && Y.apply(x, z || []);
      });
    }
    if (g.previous = function() {
      return V[V.indexOf(g) - 1];
    }, g.next = function() {
      return V[V.indexOf(g) + 1];
    }, g.revert = function(O, L) {
      if (!L)
        return g.kill(!0);
      var A = O !== !1 || !g.enabled, N = He;
      A !== g.isReverted && (A && (Nt = Math.max(pe(), g.scroll.rec || 0), ue = g.progress, Er = i && i.progress()), st && [st, _t, v, dt].forEach(function(ze) {
        return ze.style.display = A ? "none" : "block";
      }), A && (He = g, g.update(A)), c && (!b || !g.isActive) && (A ? Vl(c, Ae, jt) : as(c, Ae, Dt(c), ke)), A || g.update(A), He = N, g.isReverted = A);
    }, g.refresh = function(O, L, A, N) {
      if (!((He || !g.enabled) && !L)) {
        if (c && O && At) {
          Ie(a, "scrollEnd", iu);
          return;
        }
        !it && re && re(g), He = g, Be.tween && !A && (Be.tween.kill(), Be.tween = 0), G && G.pause(), h && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(dr) {
          return dr.vars.immediateRender && dr.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
        var ze = Oe(), K = Ne(), be = x ? x.duration() : qt(D, C), We = ve <= 0.01 || !ve, ye = 0, le = N || 0, ne = Nr(A) ? A.end : t.end, Bt = t.endTrigger || d, ce = Nr(A) ? A.start : t.start || (t.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"), pt = g.pinnedContainer = t.pinnedContainer && ot(t.pinnedContainer, g), Xt = d && Math.max(0, V.indexOf(g)) || 0, Ye = Xt, Xe, $e, Ar, un, Ge, De, Vt, qn, so, Ci, Ut, ki, ln;
        for (q && Nr(A) && (ki = R.getProperty(v, C.p), ln = R.getProperty(dt, C.p)); Ye-- > 0; )
          De = V[Ye], De.end || De.refresh(0, 1) || (He = g), Vt = De.pin, Vt && (Vt === d || Vt === c || Vt === pt) && !De.isReverted && (Ci || (Ci = []), Ci.unshift(De), De.revert(!0, !0)), De !== V[Ye] && (Xt--, Ye--);
        for (Qe(ce) && (ce = ce(g)), ce = Mo(ce, "start", g), Z = Lo(ce, d, ze, C, pe(), st, v, g, K, te, X, be, x, g._startClamp && "_startClamp") || (c ? -1e-3 : 0), Qe(ne) && (ne = ne(g)), mt(ne) && !ne.indexOf("+=") && (~ne.indexOf(" ") ? ne = (mt(ce) ? ce.split(" ")[0] : "") + ne : (ye = Pn(ne.substr(2), ze), ne = mt(ce) ? ce : (x ? R.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, Z) : Z) + ye, Bt = d)), ne = Mo(ne, "end", g), we = Math.max(Z, Lo(ne || (Bt ? "100% 0" : be), Bt, ze, C, pe() + ye, _t, dt, g, K, te, X, be, x, g._endClamp && "_endClamp")) || -1e-3, ye = 0, Ye = Xt; Ye--; )
          De = V[Ye] || {}, Vt = De.pin, Vt && De.start - De._pinPush <= Z && !x && De.end > 0 && (Xe = De.end - (g._startClamp ? Math.max(0, De.start) : De.start), (Vt === d && De.start - De._pinPush < Z || Vt === pt) && isNaN(ce) && (ye += Xe * (1 - De.progress)), Vt === c && (le += Xe));
        if (Z += ye, we += ye, g._startClamp && (g._startClamp += ye), g._endClamp && !it && (g._endClamp = we || -1e-3, we = Math.min(we, qt(D, C))), ve = we - Z || (Z -= 0.01) && 1e-3, We && (ue = R.utils.clamp(0, 1, R.utils.normalize(Z, we, Nt))), g._pinPush = le, st && ye && (Xe = {}, Xe[C.a] = "+=" + ye, pt && (Xe[C.p] = "-=" + pe()), R.set([st, _t], Xe)), c && !(Os && g.end >= qt(D, C)))
          Xe = Dt(c), un = C === Ee, Ar = pe(), Pt = parseFloat(Te(C.a)) + le, !be && we > 1 && (Ut = (F ? ie.scrollingElement || yt : D).style, Ut = {
            style: Ut,
            value: Ut["overflow" + C.a.toUpperCase()]
          }, F && Dt(ee)["overflow" + C.a.toUpperCase()] !== "scroll" && (Ut.style["overflow" + C.a.toUpperCase()] = "scroll")), as(c, Ae, Xe), Or = xn(c), $e = sr(c, !0), qn = X && Pr(D, un ? nt : Ee)(), p ? (ke = [p + C.os2, ve + le + Re], ke.t = Ae, Ye = p === Pe ? Vn(c, C) + ve + le : 0, Ye && (ke.push(C.d, Ye + Re), Ae.style.flexBasis !== "auto" && (Ae.style.flexBasis = Ye + Re)), gi(ke), pt && V.forEach(function(dr) {
            dr.pin === pt && dr.vars.pinSpacing !== !1 && (dr._subPinOffset = !0);
          }), X && pe(Nt)) : (Ye = Vn(c, C), Ye && Ae.style.flexBasis !== "auto" && (Ae.style.flexBasis = Ye + Re)), X && (Ge = {
            top: $e.top + (un ? Ar - Z : qn) + Re,
            left: $e.left + (un ? qn : Ar - Z) + Re,
            boxSizing: "border-box",
            position: "fixed"
          }, Ge[$r] = Ge["max" + Ti] = Math.ceil($e.width) + Re, Ge[Gr] = Ge["max" + ro] = Math.ceil($e.height) + Re, Ge[Ot] = Ge[Ot + Gi] = Ge[Ot + Wi] = Ge[Ot + Hi] = Ge[Ot + $i] = "0", Ge[Pe] = Xe[Pe], Ge[Pe + Gi] = Xe[Pe + Gi], Ge[Pe + Wi] = Xe[Pe + Wi], Ge[Pe + Hi] = Xe[Pe + Hi], Ge[Pe + $i] = Xe[Pe + $i], cr = Wl(jt, Ge, b), it && pe(0)), i ? (so = i._initted, is(1), i.render(i.duration(), !0, !0), Jt = Te(C.a) - Pt + ve + le, er = Math.abs(ve - Jt) > 1, X && er && cr.splice(cr.length - 2, 2), i.render(0, !0, !0), so || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), is(0)) : Jt = ve, Ut && (Ut.value ? Ut.style["overflow" + C.a.toUpperCase()] = Ut.value : Ut.style.removeProperty("overflow-" + C.a));
        else if (d && pe() && !x)
          for ($e = d.parentNode; $e && $e !== ee; )
            $e._pinOffset && (Z -= $e._pinOffset, we -= $e._pinOffset), $e = $e.parentNode;
        Ci && Ci.forEach(function(dr) {
          return dr.revert(!1, !0);
        }), g.start = Z, g.end = we, me = je = it ? Nt : pe(), !x && !it && (me < Nt && pe(Nt), g.scroll.rec = 0), g.revert(!1, !0), ae = qe(), Lt && (J = -1, Lt.restart(!0)), He = 0, i && B && (i._initted || Er) && i.progress() !== Er && i.progress(Er || 0, !0).render(i.time(), !0, !0), (We || ue !== g.progress || x || h || i && !i._initted) && (i && !B && (i._initted || ue || i.vars.immediateRender !== !1) && i.totalProgress(x && Z < -1e-3 && !ue ? R.utils.normalize(Z, we, 0) : ue, !0), g.progress = We || (me - Z) / ve === ue ? 0 : ue), c && p && (Ae._pinOffset = Math.round(g.progress * Jt)), G && G.invalidate(), isNaN(ki) || (ki -= R.getProperty(v, C.p), ln -= R.getProperty(dt, C.p), wn(v, C, ki), wn(st, C, ki - (N || 0)), wn(dt, C, ln), wn(_t, C, ln - (N || 0))), We && !it && g.update(), f && !it && !fr && (fr = !0, f(g), fr = !1);
      }
    }, g.getVelocity = function() {
      return (pe() - je) / (qe() - Ei) * 1e3 || 0;
    }, g.endAnimation = function() {
      Oi(g.callbackAnimation), i && (G ? G.progress(1) : i.paused() ? B || Oi(i, g.direction < 0, 1) : Oi(i, i.reversed()));
    }, g.labelToScroll = function(O) {
      return i && i.labels && (Z || g.refresh() || Z) + i.labels[O] / i.duration() * ve || 0;
    }, g.getTrailing = function(O) {
      var L = V.indexOf(g), A = g.direction > 0 ? V.slice(0, L).reverse() : V.slice(L + 1);
      return (mt(O) ? A.filter(function(N) {
        return N.vars.preventOverlaps === O;
      }) : A).filter(function(N) {
        return g.direction > 0 ? N.end <= Z : N.start >= we;
      });
    }, g.update = function(O, L, A) {
      if (!(x && !A && !O)) {
        var N = it === !0 ? Nt : g.scroll(), ze = O ? 0 : (N - Z) / ve, K = ze < 0 ? 0 : ze > 1 ? 1 : ze || 0, be = g.progress, We, ye, le, ne, Bt, ce, pt, Xt;
        if (L && (je = me, me = x ? pe() : N, y && (Dr = _r, _r = i && !B ? i.totalProgress() : K)), m && c && !He && !dn && At && (!K && Z < N + (N - je) / (qe() - Ei) * m ? K = 1e-4 : K === 1 && we > N + (N - je) / (qe() - Ei) * m && (K = 0.9999)), K !== be && g.enabled) {
          if (We = g.isActive = !!K && K < 1, ye = !!be && be < 1, ce = We !== ye, Bt = ce || !!K != !!be, g.direction = K > be ? 1 : -1, g.progress = K, Bt && !He && (le = K && !be ? 0 : K === 1 ? 1 : be === 1 ? 2 : 3, B && (ne = !ce && E[le + 1] !== "none" && E[le + 1] || E[le], Xt = i && (ne === "complete" || ne === "reset" || ne in i))), k && (ce || Xt) && (Xt || _ || !i) && (Qe(k) ? k(g) : g.getTrailing(k).forEach(function(Ar) {
            return Ar.endAnimation();
          })), B || (G && !He && !dn ? (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start), G.resetTo ? G.resetTo("totalProgress", K, i._tTime / i._tDur) : (G.vars.totalProgress = K, G.invalidate().restart())) : i && i.totalProgress(K, !!(He && (ae || O)))), c) {
            if (O && p && (Ae.style[p + C.os2] = bi), !X)
              Ft(zi(Pt + Jt * K));
            else if (Bt) {
              if (pt = !O && K > be && we + 1 > N && N + 1 >= qt(D, C), b)
                if (!O && (We || pt)) {
                  var Ye = sr(c, !0), Xe = N - Z;
                  No(c, ee, Ye.top + (C === Ee ? Xe : 0) + Re, Ye.left + (C === Ee ? 0 : Xe) + Re);
                } else
                  No(c, Ae);
              gi(We || pt ? cr : Or), er && K < 1 && We || Ft(Pt + (K === 1 && !pt ? Jt : 0));
            }
          }
          y && !Be.tween && !He && !dn && Lt.restart(!0), o && (ce || S && K && (K < 1 || !ns)) && nn(o.targets).forEach(function(Ar) {
            return Ar.classList[We || S ? "add" : "remove"](o.className);
          }), s && !B && !O && s(g), Bt && !He ? (B && (Xt && (ne === "complete" ? i.pause().totalProgress(1) : ne === "reset" ? i.restart(!0).pause() : ne === "restart" ? i.restart(!0) : i[ne]()), s && s(g)), (ce || !ns) && (l && ce && ri(g, l), I[le] && ri(g, I[le]), S && (K === 1 ? g.kill(!1, 1) : I[le] = 0), ce || (le = K === 1 ? 1 : 3, I[le] && ri(g, I[le]))), P && !We && Math.abs(g.getVelocity()) > (Fi(P) ? P : 2500) && (Oi(g.callbackAnimation), G ? G.progress(1) : Oi(i, ne === "reverse" ? 1 : !K, 1))) : B && s && !He && s(g);
        }
        if (jr) {
          var $e = x ? N / x.duration() * (x._caScrollDist || 0) : N;
          an($e + (v._isFlipped ? 1 : 0)), jr($e);
        }
        ei && ei(-N / x.duration() * (x._caScrollDist || 0));
      }
    }, g.enable = function(O, L) {
      g.enabled || (g.enabled = !0, Ie(D, "resize", Ii), F || Ie(D, "scroll", ni), re && Ie(a, "refreshInit", re), O !== !1 && (g.progress = ue = 0, me = je = J = pe()), L !== !1 && g.refresh());
    }, g.getTween = function(O) {
      return O && Be ? Be.tween : G;
    }, g.setPositions = function(O, L, A, N) {
      if (x) {
        var ze = x.scrollTrigger, K = x.duration(), be = ze.end - ze.start;
        O = ze.start + be * O / K, L = ze.start + be * L / K;
      }
      g.refresh(!1, !1, {
        start: Oo(O, A && !!g._startClamp),
        end: Oo(L, A && !!g._endClamp)
      }, N), g.update();
    }, g.adjustPinSpacing = function(O) {
      if (ke && O) {
        var L = ke.indexOf(C.d) + 1;
        ke[L] = parseFloat(ke[L]) + O + Re, ke[1] = parseFloat(ke[1]) + O + Re, gi(ke);
      }
    }, g.disable = function(O, L) {
      if (O !== !1 && g.revert(!0, !0), g.enabled && (g.enabled = g.isActive = !1, L || G && G.pause(), Nt = 0, ge && (ge.uncache = 1), re && Fe(a, "refreshInit", re), Lt && (Lt.pause(), Be.tween && Be.tween.kill() && (Be.tween = 0)), !F)) {
        for (var A = V.length; A--; )
          if (V[A].scroller === D && V[A] !== g)
            return;
        Fe(D, "resize", Ii), F || Fe(D, "scroll", ni);
      }
    }, g.kill = function(O, L) {
      g.disable(O, L), G && !L && G.kill(), u && delete Ds[u];
      var A = V.indexOf(g);
      A >= 0 && V.splice(A, 1), A === rt && On > 0 && rt--, A = 0, V.forEach(function(N) {
        return N.scroller === g.scroller && (A = 1);
      }), A || it || (g.scroll.rec = 0), i && (i.scrollTrigger = null, O && i.revert({
        kill: !1
      }), L || i.kill()), st && [st, _t, v, dt].forEach(function(N) {
        return N.parentNode && N.parentNode.removeChild(N);
      }), qi === g && (qi = 0), c && (ge && (ge.uncache = 1), A = 0, V.forEach(function(N) {
        return N.pin === c && A++;
      }), A || (ge.spacer = 0)), t.onKill && t.onKill(g);
    }, V.push(g), g.enable(!1, !1), tr && tr(g), i && i.add && !ve) {
      var j = g.update;
      g.update = function() {
        g.update = j, $.cache++, Z || we || g.refresh();
      }, R.delayedCall(0.01, g.update), ve = 0.01, Z = we = 0;
    } else
      g.refresh();
    c && Xl();
  }, a.register = function(t) {
    return si || (R = t || Za(), Qa() && window.document && a.enable(), si = Ai), si;
  }, a.defaults = function(t) {
    if (t)
      for (var i in t)
        vn[i] = t[i];
    return vn;
  }, a.disable = function(t, i) {
    Ai = 0, V.forEach(function(s) {
      return s[i ? "kill" : "disable"](t);
    }), Fe(W, "wheel", ni), Fe(ie, "scroll", ni), clearInterval(_n), Fe(ie, "touchcancel", $t), Fe(ee, "touchstart", $t), gn(Fe, ie, "pointerdown,touchstart,mousedown", Do), gn(Fe, ie, "pointerup,touchend,mouseup", Ro), Xn.kill(), pn(Fe);
    for (var n = 0; n < $.length; n += 3)
      mn(Fe, $[n], $[n + 1]), mn(Fe, $[n], $[n + 2]);
  }, a.enable = function() {
    if (W = window, ie = document, yt = ie.documentElement, ee = ie.body, R) {
      if (nn = R.utils.toArray, Vi = R.utils.clamp, Ms = R.core.context || $t, is = R.core.suppressOverwrites || $t, js = W.history.scrollRestoration || "auto", Rs = W.pageYOffset || 0, R.core.globals("ScrollTrigger", a), ee) {
        Ai = 1, pi = document.createElement("div"), pi.style.height = "100vh", pi.style.position = "absolute", au(), zl(), Ce.register(R), a.isTouch = Ce.isTouch, pr = Ce.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ps = Ce.isTouch === 1, Ie(W, "wheel", ni), Zs = [W, ie, yt, ee], R.matchMedia ? (a.matchMedia = function(f) {
          var _ = R.matchMedia(), d;
          for (d in f)
            _.add(d, f[d]);
          return _;
        }, R.addEventListener("matchMediaInit", function() {
          su(), no();
        }), R.addEventListener("matchMediaRevert", function() {
          return nu();
        }), R.addEventListener("matchMedia", function() {
          Yr(0, 1), Qr("matchMedia");
        }), R.matchMedia().add("(orientation: portrait)", function() {
          return os(), os;
        })) : console.warn("Requires GSAP 3.11.0 or later"), os(), Ie(ie, "scroll", ni);
        var t = ee.hasAttribute("style"), i = ee.style, n = i.borderTopStyle, s = R.core.Animation.prototype, o, u;
        for (s.revert || Object.defineProperty(s, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), i.borderTopStyle = "solid", o = sr(ee), Ee.m = Math.round(o.top + Ee.sc()) || 0, nt.m = Math.round(o.left + nt.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), t || (ee.setAttribute("style", ""), ee.removeAttribute("style")), _n = setInterval(zo, 250), R.delayedCall(0.5, function() {
          return dn = 0;
        }), Ie(ie, "touchcancel", $t), Ie(ee, "touchstart", $t), gn(Ie, ie, "pointerdown,touchstart,mousedown", Do), gn(Ie, ie, "pointerup,touchend,mouseup", Ro), ks = R.utils.checkPrefix("transform"), Dn.push(ks), si = qe(), Xn = R.delayedCall(0.2, Yr).pause(), oi = [ie, "visibilitychange", function() {
          var f = W.innerWidth, _ = W.innerHeight;
          ie.hidden ? (ko = f, Po = _) : (ko !== f || Po !== _) && Ii();
        }, ie, "DOMContentLoaded", Yr, W, "load", Yr, W, "resize", Ii], pn(Ie), V.forEach(function(f) {
          return f.enable(0, 1);
        }), u = 0; u < $.length; u += 3)
          mn(Fe, $[u], $[u + 1]), mn(Fe, $[u], $[u + 2]);
      } else if (ie) {
        var l = function f() {
          a.enable(), ie.removeEventListener("DOMContentLoaded", f);
        };
        ie.addEventListener("DOMContentLoaded", l);
      }
    }
  }, a.config = function(t) {
    "limitCallbacks" in t && (ns = !!t.limitCallbacks);
    var i = t.syncInterval;
    i && clearInterval(_n) || (_n = i) && setInterval(zo, i), "ignoreMobileResize" in t && (Ps = a.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (pn(Fe) || pn(Ie, t.autoRefreshEvents || "none"), Ha = (t.autoRefreshEvents + "").indexOf("resize") === -1);
  }, a.scrollerProxy = function(t, i) {
    var n = ot(t), s = $.indexOf(n), o = qr(n);
    ~s && $.splice(s, o ? 6 : 2), i && (o ? Kt.unshift(W, i, ee, i, yt, i) : Kt.unshift(n, i));
  }, a.clearMatchMedia = function(t) {
    V.forEach(function(i) {
      return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0);
    });
  }, a.isInViewport = function(t, i, n) {
    var s = (mt(t) ? ot(t) : t).getBoundingClientRect(), o = s[n ? $r : Gr] * i || 0;
    return n ? s.right - o > 0 && s.left + o < W.innerWidth : s.bottom - o > 0 && s.top + o < W.innerHeight;
  }, a.positionInViewport = function(t, i, n) {
    mt(t) && (t = ot(t));
    var s = t.getBoundingClientRect(), o = s[n ? $r : Gr], u = i == null ? o / 2 : i in Un ? Un[i] * o : ~i.indexOf("%") ? parseFloat(i) * o / 100 : parseFloat(i) || 0;
    return n ? (s.left + u) / W.innerWidth : (s.top + u) / W.innerHeight;
  }, a.killAll = function(t) {
    if (V.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), t !== !0) {
      var i = Kr.killAll || [];
      Kr = {}, i.forEach(function(n) {
        return n();
      });
    }
  }, a;
})();
U.version = "3.15.0";
U.saveStyles = function(a) {
  return a ? nn(a).forEach(function(e) {
    if (e && e.style) {
      var r = gt.indexOf(e);
      r >= 0 && gt.splice(r, 5), gt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), R.core.getCache(e), Ms());
    }
  }) : gt;
};
U.revert = function(a, e) {
  return no(!a, e);
};
U.create = function(a, e) {
  return new U(a, e);
};
U.refresh = function(a) {
  return a ? Ii(!0) : (si || U.register()) && Yr(!0);
};
U.update = function(a) {
  return ++$.cache && ar(a === !0 ? 2 : 0);
};
U.clearScrollMemory = ou;
U.maxScroll = function(a, e) {
  return qt(a, e ? nt : Ee);
};
U.getScrollFunc = function(a, e) {
  return Pr(ot(a), e ? nt : Ee);
};
U.getById = function(a) {
  return Ds[a];
};
U.getAll = function() {
  return V.filter(function(a) {
    return a.vars.id !== "ScrollSmoother";
  });
};
U.isScrolling = function() {
  return !!At;
};
U.snapDirectional = io;
U.addEventListener = function(a, e) {
  var r = Kr[a] || (Kr[a] = []);
  ~r.indexOf(e) || r.push(e);
};
U.removeEventListener = function(a, e) {
  var r = Kr[a], t = r && r.indexOf(e);
  t >= 0 && r.splice(t, 1);
};
U.batch = function(a, e) {
  var r = [], t = {}, i = e.interval || 0.016, n = e.batchMax || 1e9, s = function(l, f) {
    var _ = [], d = [], c = R.delayedCall(i, function() {
      f(_, d), _ = [], d = [];
    }).pause();
    return function(p) {
      _.length || c.restart(!0), _.push(p.trigger), d.push(p), n <= _.length && c.progress(1);
    };
  }, o;
  for (o in e)
    t[o] = o.substr(0, 2) === "on" && Qe(e[o]) && o !== "onRefreshInit" ? s(o, e[o]) : e[o];
  return Qe(n) && (n = n(), Ie(U, "refresh", function() {
    return n = e.batchMax();
  })), nn(a).forEach(function(u) {
    var l = {};
    for (o in t)
      l[o] = t[o];
    l.trigger = u, r.push(U.create(l));
  }), r;
};
var Yo = function(e, r, t, i) {
  return r > i ? e(i) : r < 0 && e(0), t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1;
}, us = function a(e, r) {
  r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (Ce.isTouch ? " pinch-zoom" : "") : "none", e === yt && a(ee, r);
}, Tn = {
  auto: 1,
  scroll: 1
}, Gl = function(e) {
  var r = e.event, t = e.target, i = e.axis, n = (r.changedTouches ? r.changedTouches[0] : r).target, s = n._gsap || R.core.getCache(n), o = qe(), u;
  if (!s._isScrollT || o - s._isScrollT > 2e3) {
    for (; n && n !== ee && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Tn[(u = Dt(n)).overflowY] || Tn[u.overflowX])); )
      n = n.parentNode;
    s._isScroll = n && n !== t && !qr(n) && (Tn[(u = Dt(n)).overflowY] || Tn[u.overflowX]), s._isScrollT = o;
  }
  (s._isScroll || i === "x") && (r.stopPropagation(), r._gsapAllow = !0);
}, lu = function(e, r, t, i) {
  return Ce.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: r,
    onWheel: i = i && Gl,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return t && Ie(ie, Ce.eventTypes[0], Vo, !1, !0);
    },
    onDisable: function() {
      return Fe(ie, Ce.eventTypes[0], Vo, !0);
    }
  });
}, Hl = /(input|label|select|textarea)/i, Xo, Vo = function(e) {
  var r = Hl.test(e.target.tagName);
  (r || Xo) && (e._gsapAllow = !0, Xo = r);
}, ql = function(e) {
  Nr(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var r = e, t = r.normalizeScrollX, i = r.momentum, n = r.allowNestedScroll, s = r.onRelease, o, u, l = ot(e.target) || yt, f = R.core.globals().ScrollSmoother, _ = f && f.get(), d = pr && (e.content && ot(e.content) || _ && e.content !== !1 && !_.smooth() && _.content()), c = Pr(l, Ee), p = Pr(l, nt), h = 1, m = (Ce.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth, T = 0, w = Qe(i) ? function() {
    return i(o);
  } : function() {
    return i || 2.8;
  }, S, y, b = lu(l, e.type, !0, n), M = function() {
    return y = !1;
  }, x = $t, P = $t, k = function() {
    u = qt(l, Ee), P = Vi(pr ? 1 : 0, u), t && (x = Vi(0, qt(l, nt))), S = Hr;
  }, C = function() {
    d._gsap.y = zi(parseFloat(d._gsap.y) + c.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0;
  }, B = function() {
    if (y) {
      requestAnimationFrame(M);
      var q = zi(o.deltaY / 2), te = P(c.v - q);
      if (d && te !== c.v + c.offset) {
        c.offset = te - c.v;
        var g = zi((parseFloat(d && d._gsap.y) || 0) - c.offset);
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)", d._gsap.y = g + "px", c.cacheID = $.cache, ar();
      }
      return !0;
    }
    c.offset && C(), y = !0;
  }, D, H, F, X, I = function() {
    k(), D.isActive() && D.vars.scrollY > u && (c() > u ? D.progress(1) && c(u) : D.resetTo("scrollY", u));
  };
  return d && R.set(d, {
    y: "+=0"
  }), e.ignoreCheck = function(E) {
    return pr && E.type === "touchmove" && B() || h > 1.05 && E.type !== "touchstart" || o.isGesturing || E.touches && E.touches.length > 1;
  }, e.onPress = function() {
    y = !1;
    var E = h;
    h = zi((W.visualViewport && W.visualViewport.scale || 1) / m), D.pause(), E !== h && us(l, h > 1.01 ? !0 : t ? !1 : "x"), H = p(), F = c(), k(), S = Hr;
  }, e.onRelease = e.onGestureStart = function(E, q) {
    if (c.offset && C(), !q)
      X.restart(!0);
    else {
      $.cache++;
      var te = w(), g, re;
      t && (g = p(), re = g + te * 0.05 * -E.velocityX / 0.227, te *= Yo(p, g, re, qt(l, nt)), D.vars.scrollX = x(re)), g = c(), re = g + te * 0.05 * -E.velocityY / 0.227, te *= Yo(c, g, re, qt(l, Ee)), D.vars.scrollY = P(re), D.invalidate().duration(te).play(0.01), (pr && D.vars.scrollY >= u || g >= u - 1) && R.to({}, {
        onUpdate: I,
        duration: te
      });
    }
    s && s(E);
  }, e.onWheel = function() {
    D._ts && D.pause(), qe() - T > 1e3 && (S = 0, T = qe());
  }, e.onChange = function(E, q, te, g, re) {
    if (Hr !== S && k(), q && t && p(x(g[2] === q ? H + (E.startX - E.x) : p() + q - g[1])), te) {
      c.offset && C();
      var Oe = re[2] === te, Ne = Oe ? F + E.startY - E.y : c() + te - re[1], J = P(Ne);
      Oe && Ne !== J && (F += J - Ne), c(J);
    }
    (te || q) && ar();
  }, e.onEnable = function() {
    us(l, t ? !1 : "x"), U.addEventListener("refresh", I), Ie(W, "resize", I), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = p.smooth = !1), b.enable();
  }, e.onDisable = function() {
    us(l, !0), Fe(W, "resize", I), U.removeEventListener("refresh", I), b.kill();
  }, e.lockAxis = e.lockAxis !== !1, o = new Ce(e), o.iOS = pr, pr && !c() && c(1), pr && R.ticker.add($t), X = o._dc, D = R.to(o, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: t ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: uu(c, c(), function() {
        return D.pause();
      })
    },
    onUpdate: ar,
    onComplete: X.vars.onComplete
  }), o;
};
U.sort = function(a) {
  if (Qe(a))
    return V.sort(a);
  var e = W.pageYOffset || 0;
  return U.getAll().forEach(function(r) {
    return r._sortY = r.trigger ? e + r.trigger.getBoundingClientRect().top : r.start + W.innerHeight;
  }), V.sort(a || function(r, t) {
    return (r.vars.refreshPriority || 0) * -1e6 + (r.vars.containerAnimation ? 1e6 : r._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
  });
};
U.observe = function(a) {
  return new Ce(a);
};
U.normalizeScroll = function(a) {
  if (typeof a > "u")
    return tt;
  if (a === !0 && tt)
    return tt.enable();
  if (a === !1) {
    tt && tt.kill(), tt = a;
    return;
  }
  var e = a instanceof Ce ? a : ql(a);
  return tt && tt.target === e.target && tt.kill(), qr(e.target) && (tt = e), e;
};
U.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Cs,
  _inputObserver: lu,
  _scrollers: $,
  _proxies: Kt,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      At || Qr("scrollStart"), At = qe();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return He;
    }
  }
};
Za() && R.registerPlugin(U);
ir.registerPlugin(U);
const Kl = typeof window < "u" ? En.useLayoutEffect : En.useEffect, Ql = {
  up: "linear-gradient(to top, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",
  down: "linear-gradient(to bottom, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",
  left: "linear-gradient(to left, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",
  right: "linear-gradient(to right, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",
  center: "radial-gradient(farthest-corner at 50% 50%, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))"
}, jl = ({
  children: a,
  container: e,
  distance: r = 100,
  direction: t = "vertical",
  reverse: i = !1,
  duration: n = 0.8,
  ease: s = "power3.out",
  initialOpacity: o = 0,
  animateOpacity: u = !0,
  scale: l = 1,
  blur: f = 0,
  rotate: _ = 0,
  tilt: d = 0,
  wipe: c = "none",
  threshold: p = 0.1,
  delay: h = 0,
  stagger: m = 0,
  staggerFrom: T = "start",
  trigger: w = "scroll",
  once: S = !0,
  scrub: y = !1,
  disappearAfter: b = 0,
  disappearDuration: M = 0.5,
  disappearEase: x = "power3.in",
  onStart: P,
  onComplete: k,
  onDisappearanceComplete: C,
  className: B = "",
  style: D,
  ...H
}) => {
  const F = En.useRef(null), X = En.useRef({ onStart: P, onComplete: k, onDisappearanceComplete: C });
  return X.current = { onStart: P, onComplete: k, onDisappearanceComplete: C }, Kl(() => {
    const I = F.current;
    if (!I) return;
    let E = e || document.getElementById("snap-main-container") || null;
    typeof E == "string" && (E = document.querySelector(E));
    const q = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, te = ir.context(() => {
      const g = m > 0 && I.children.length ? Array.from(I.children) : [I], re = t === "horizontal", Oe = re ? "x" : "y", Ne = i ? -1 : 1, J = Ql[c];
      if (ir.set(I, { visibility: "visible" }), q) {
        X.current.onComplete?.();
        return;
      }
      const ae = {
        [Oe]: r * Ne,
        scale: l,
        opacity: u ? o : 1
      }, ue = {
        [Oe]: 0,
        scale: 1,
        opacity: 1,
        duration: n,
        ease: s
      };
      if (f > 0 && (ae.filter = `blur(${f}px)`, ue.filter = "blur(0px)"), _ && (ae.rotation = _ * Ne, ue.rotation = 0), d) {
        const me = re ? "rotationY" : "rotationX";
        ae[me] = re ? -d * Ne : d * Ne, ue[me] = 0, ae.transformPerspective = 900, ue.transformPerspective = 900;
      }
      J && (ir.set(g, { maskImage: J, webkitMaskImage: J }), ae["--ac-wipe"] = 0, ue["--ac-wipe"] = 1), m > 0 && (ue.stagger = { each: m, from: T });
      const pe = () => {
        y || ir.set(g, { clearProps: J ? "filter,transform,maskImage,webkitMaskImage" : "filter,transform" });
      }, Be = () => {
        if (b <= 0) return;
        const me = {
          [Oe]: -r * Ne,
          scale: 0.8,
          opacity: u ? o : 0,
          delay: b,
          duration: M,
          ease: x,
          onComplete: () => X.current.onDisappearanceComplete?.()
        };
        f > 0 && (me.filter = `blur(${f}px)`), m > 0 && (me.stagger = { each: m, from: T }), ir.to(g, me);
      }, ge = ir.timeline({
        paused: !0,
        onStart: () => X.current.onStart?.(),
        onComplete: () => {
          X.current.onComplete?.(), pe(), S && !y && Be();
        }
      });
      if (ge.fromTo(g, ae, ue, y ? 0 : Math.max(h, 0)), w === "mount") {
        ge.play();
        return;
      }
      const zt = `top ${(1 - p) * 100}%`;
      if (y) {
        U.create({
          trigger: I,
          scroller: E,
          start: zt,
          end: `top ${Math.max((1 - p) * 100 - 45, 5)}%`,
          scrub: y === !0 ? !0 : Math.max(Number(y) || 0, 0.01),
          animation: ge
        });
        return;
      }
      U.create({
        trigger: I,
        scroller: E,
        start: zt,
        once: S,
        onEnter: () => ge.play(),
        onLeaveBack: S ? void 0 : () => {
          J && ir.set(g, { maskImage: J, webkitMaskImage: J }), ge.reverse();
        }
      });
    }, I);
    return () => te.revert();
  }, [
    e,
    r,
    t,
    i,
    n,
    s,
    o,
    u,
    l,
    f,
    _,
    d,
    c,
    p,
    h,
    m,
    T,
    w,
    S,
    y,
    b,
    M,
    x
  ]), /* @__PURE__ */ fu.jsx("div", { ref: F, className: B, style: { visibility: "hidden", ...D }, ...H, children: a });
};
export {
  jl as default
};
