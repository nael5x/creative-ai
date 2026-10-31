var zo = { exports: {} }, en = {};
var um;
function sh() {
  if (um) return en;
  um = 1;
  var z = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.fragment");
  function p(h, tl, K) {
    var Ol = null;
    if (K !== void 0 && (Ol = "" + K), tl.key !== void 0 && (Ol = "" + tl.key), "key" in tl) {
      K = {};
      for (var Bl in tl)
        Bl !== "key" && (K[Bl] = tl[Bl]);
    } else K = tl;
    return tl = K.ref, {
      $$typeof: z,
      type: h,
      key: Ol,
      ref: tl !== void 0 ? tl : null,
      props: K
    };
  }
  return en.Fragment = A, en.jsx = p, en.jsxs = p, en;
}
var am;
function vh() {
  return am || (am = 1, zo.exports = sh()), zo.exports;
}
var O = vh(), Oo = { exports: {} }, Q = {};
var em;
function dh() {
  if (em) return Q;
  em = 1;
  var z = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), tl = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), Bl = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), vl = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), q = /* @__PURE__ */ Symbol.for("react.view_transition"), Cl = Symbol.iterator;
  function at(s) {
    return s === null || typeof s != "object" ? null : (s = Cl && s[Cl] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var $l = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, rl = Object.assign, St = {};
  function et(s, b, H) {
    this.props = s, this.context = b, this.refs = St, this.updater = H || $l;
  }
  et.prototype.isReactComponent = {}, et.prototype.setState = function(s, b) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, b, "setState");
  }, et.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Ju() {
  }
  Ju.prototype = et.prototype;
  function qt(s, b, H) {
    this.props = s, this.context = b, this.refs = St, this.updater = H || $l;
  }
  var xt = qt.prototype = new Ju();
  xt.constructor = qt, rl(xt, et.prototype), xt.isPureReactComponent = !0;
  var nt = Array.isArray;
  function J() {
  }
  var ul = { H: null, A: null, T: null, S: null }, Gt = Object.prototype.hasOwnProperty;
  function Tt(s, b, H) {
    var j = H.ref;
    return {
      $$typeof: z,
      type: s,
      key: b,
      ref: j !== void 0 ? j : null,
      props: H
    };
  }
  function Et(s, b) {
    return Tt(s.type, b, s.props);
  }
  function ft(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function hu(s) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(H) {
      return b[H];
    });
  }
  var wu = /\/+/g;
  function Rl(s, b) {
    return typeof s == "object" && s !== null && s.key != null ? hu("" + s.key) : b.toString(36);
  }
  function N(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(J, J) : (s.status = "pending", s.then(
          function(b) {
            s.status === "pending" && (s.status = "fulfilled", s.value = b);
          },
          function(b) {
            s.status === "pending" && (s.status = "rejected", s.reason = b);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function x(s, b, H, j, I) {
    var P = typeof s;
    (P === "undefined" || P === "boolean") && (s = null);
    var al = !1;
    if (s === null) al = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          al = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case A:
              al = !0;
              break;
            case R:
              return al = s._init, x(
                al(s._payload),
                b,
                H,
                j,
                I
              );
          }
      }
    if (al)
      return I = I(s), al = j === "" ? "." + Rl(s, 0) : j, nt(I) ? (H = "", al != null && (H = al.replace(wu, "$&/") + "/"), x(I, b, H, "", function(lu) {
        return lu;
      })) : I != null && (ft(I) && (I = Et(
        I,
        H + (I.key == null || s && s.key === I.key ? "" : ("" + I.key).replace(
          wu,
          "$&/"
        ) + "/") + al
      )), b.push(I)), 1;
    al = 0;
    var U = j === "" ? "." : j + ":";
    if (nt(s))
      for (var X = 0; X < s.length; X++)
        j = s[X], P = U + Rl(j, X), al += x(
          j,
          b,
          H,
          P,
          I
        );
    else if (X = at(s), typeof X == "function")
      for (s = X.call(s), X = 0; !(j = s.next()).done; )
        j = j.value, P = U + Rl(j, X++), al += x(
          j,
          b,
          H,
          P,
          I
        );
    else if (P === "object") {
      if (typeof s.then == "function")
        return x(
          N(s),
          b,
          H,
          j,
          I
        );
      throw b = String(s), Error(
        "Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return al;
  }
  function G(s, b, H) {
    if (s == null) return s;
    var j = [], I = 0;
    return x(s, j, "", "", function(P) {
      return b.call(H, P, I++);
    }), j;
  }
  function ml(s) {
    if (s._status === -1) {
      var b = s._result, H = b();
      H.then(
        function(j) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = j, H.status === void 0 && (H.status = "fulfilled", H.value = j));
        },
        function(j) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = j, H.status === void 0 && (H.status = "rejected", H.reason = j));
        }
      ), s._status === -1 && (s._status = 0, s._result = H);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var fl = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var b = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(b)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function Ct(s) {
    var b = ul.T, H = {};
    H.types = b !== null ? b.types : null, ul.T = H;
    try {
      var j = s(), I = ul.S;
      I !== null && I(H, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then(J, fl);
    } catch (P) {
      fl(P);
    } finally {
      b !== null && H.types !== null && (b.types = H.types), ul.T = b;
    }
  }
  function Pt(s) {
    var b = ul.T;
    if (b !== null) {
      var H = b.types;
      H === null ? b.types = [s] : H.indexOf(s) === -1 && H.push(s);
    } else Ct(Pt.bind(null, s));
  }
  var Fu = {
    map: G,
    forEach: function(s, b, H) {
      G(
        s,
        function() {
          b.apply(this, arguments);
        },
        H
      );
    },
    count: function(s) {
      var b = 0;
      return G(s, function() {
        b++;
      }), b;
    },
    toArray: function(s) {
      return G(s, function(b) {
        return b;
      }) || [];
    },
    only: function(s) {
      if (!ft(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return Q.Activity = T, Q.Children = Fu, Q.Component = et, Q.Fragment = p, Q.Profiler = tl, Q.PureComponent = qt, Q.StrictMode = h, Q.Suspense = B, Q.ViewTransition = q, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ul, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return ul.H.useMemoCache(s);
    }
  }, Q.addTransitionType = Pt, Q.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Q.cacheSignal = function() {
    return null;
  }, Q.cloneElement = function(s, b, H) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var j = rl({}, s.props), I = s.key;
    if (b != null)
      for (P in b.key !== void 0 && (I = "" + b.key), b)
        !Gt.call(b, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && b.ref === void 0 || (j[P] = b[P]);
    var P = arguments.length - 2;
    if (P === 1) j.children = H;
    else if (1 < P) {
      for (var al = Array(P), U = 0; U < P; U++)
        al[U] = arguments[U + 2];
      j.children = al;
    }
    return Tt(s.type, I, j);
  }, Q.createContext = function(s) {
    return s = {
      $$typeof: Ol,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: K,
      _context: s
    }, s;
  }, Q.createElement = function(s, b, H) {
    var j, I = {}, P = null;
    if (b != null)
      for (j in b.key !== void 0 && (P = "" + b.key), b)
        Gt.call(b, j) && j !== "key" && j !== "__self" && j !== "__source" && (I[j] = b[j]);
    var al = arguments.length - 2;
    if (al === 1) I.children = H;
    else if (1 < al) {
      for (var U = Array(al), X = 0; X < al; X++)
        U[X] = arguments[X + 2];
      I.children = U;
    }
    if (s && s.defaultProps)
      for (j in al = s.defaultProps, al)
        I[j] === void 0 && (I[j] = al[j]);
    return Tt(s, P, I);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(s) {
    return { $$typeof: Bl, render: s };
  }, Q.isValidElement = ft, Q.lazy = function(s) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: s },
      _init: ml
    };
  }, Q.memo = function(s, b) {
    return {
      $$typeof: vl,
      type: s,
      compare: b === void 0 ? null : b
    };
  }, Q.startTransition = Ct, Q.unstable_useCacheRefresh = function() {
    return ul.H.useCacheRefresh();
  }, Q.use = function(s) {
    return ul.H.use(s);
  }, Q.useActionState = function(s, b, H) {
    return ul.H.useActionState(s, b, H);
  }, Q.useCallback = function(s, b) {
    return ul.H.useCallback(s, b);
  }, Q.useContext = function(s) {
    return ul.H.useContext(s);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(s, b) {
    return ul.H.useDeferredValue(s, b);
  }, Q.useEffect = function(s, b) {
    return ul.H.useEffect(s, b);
  }, Q.useEffectEvent = function(s) {
    return ul.H.useEffectEvent(s);
  }, Q.useId = function() {
    return ul.H.useId();
  }, Q.useImperativeHandle = function(s, b, H) {
    return ul.H.useImperativeHandle(s, b, H);
  }, Q.useInsertionEffect = function(s, b) {
    return ul.H.useInsertionEffect(s, b);
  }, Q.useLayoutEffect = function(s, b) {
    return ul.H.useLayoutEffect(s, b);
  }, Q.useMemo = function(s, b) {
    return ul.H.useMemo(s, b);
  }, Q.useOptimistic = function(s, b) {
    return ul.H.useOptimistic(s, b);
  }, Q.useReducer = function(s, b, H) {
    return ul.H.useReducer(s, b, H);
  }, Q.useRef = function(s) {
    return ul.H.useRef(s);
  }, Q.useState = function(s) {
    return ul.H.useState(s);
  }, Q.useSyncExternalStore = function(s, b, H) {
    return ul.H.useSyncExternalStore(
      s,
      b,
      H
    );
  }, Q.useTransition = function() {
    return ul.H.useTransition();
  }, Q.version = "19.3.1", Q;
}
var nm;
function Ro() {
  return nm || (nm = 1, Oo.exports = dh()), Oo.exports;
}
var nl = Ro(), _o = { exports: {} }, nn = {}, Ao = { exports: {} }, No = {};
var fm;
function mh() {
  return fm || (fm = 1, (function(z) {
    function A(N, x) {
      var G = N.length;
      N.push(x);
      l: for (; 0 < G; ) {
        var ml = G - 1 >>> 1, fl = N[ml];
        if (0 < tl(fl, x))
          N[ml] = x, N[G] = fl, G = ml;
        else break l;
      }
    }
    function p(N) {
      return N.length === 0 ? null : N[0];
    }
    function h(N) {
      if (N.length === 0) return null;
      var x = N[0], G = N.pop();
      if (G !== x) {
        N[0] = G;
        l: for (var ml = 0, fl = N.length, Ct = fl >>> 1; ml < Ct; ) {
          var Pt = 2 * (ml + 1) - 1, Fu = N[Pt], s = Pt + 1, b = N[s];
          if (0 > tl(Fu, G))
            s < fl && 0 > tl(b, Fu) ? (N[ml] = b, N[s] = G, ml = s) : (N[ml] = Fu, N[Pt] = G, ml = Pt);
          else if (s < fl && 0 > tl(b, G))
            N[ml] = b, N[s] = G, ml = s;
          else break l;
        }
      }
      return x;
    }
    function tl(N, x) {
      var G = N.sortIndex - x.sortIndex;
      return G !== 0 ? G : N.id - x.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var K = performance;
      z.unstable_now = function() {
        return K.now();
      };
    } else {
      var Ol = Date, Bl = Ol.now();
      z.unstable_now = function() {
        return Ol.now() - Bl;
      };
    }
    var B = [], vl = [], R = 1, T = null, q = 3, Cl = !1, at = !1, $l = !1, rl = !1, St = typeof setTimeout == "function" ? setTimeout : null, et = typeof clearTimeout == "function" ? clearTimeout : null, Ju = typeof setImmediate < "u" ? setImmediate : null;
    function qt(N) {
      for (var x = p(vl); x !== null; ) {
        if (x.callback === null) h(vl);
        else if (x.startTime <= N)
          h(vl), x.sortIndex = x.expirationTime, A(B, x);
        else break;
        x = p(vl);
      }
    }
    function xt(N) {
      if ($l = !1, qt(N), !at)
        if (p(B) !== null)
          at = !0, nt || (nt = !0, ft());
        else {
          var x = p(vl);
          x !== null && Rl(xt, x.startTime - N);
        }
    }
    var nt = !1, J = -1, ul = 5, Gt = -1;
    function Tt() {
      return rl ? !0 : !(z.unstable_now() - Gt < ul);
    }
    function Et() {
      if (rl = !1, nt) {
        var N = z.unstable_now();
        Gt = N;
        var x = !0;
        try {
          l: {
            at = !1, $l && ($l = !1, et(J), J = -1), Cl = !0;
            var G = q;
            try {
              t: {
                for (qt(N), T = p(B); T !== null && !(T.expirationTime > N && Tt()); ) {
                  var ml = T.callback;
                  if (typeof ml == "function") {
                    T.callback = null, q = T.priorityLevel;
                    var fl = ml(
                      T.expirationTime <= N
                    );
                    if (N = z.unstable_now(), typeof fl == "function") {
                      T.callback = fl, qt(N), x = !0;
                      break t;
                    }
                    T === p(B) && h(B), qt(N);
                  } else h(B);
                  T = p(B);
                }
                if (T !== null) x = !0;
                else {
                  var Ct = p(vl);
                  Ct !== null && Rl(
                    xt,
                    Ct.startTime - N
                  ), x = !1;
                }
              }
              break l;
            } finally {
              T = null, q = G, Cl = !1;
            }
            x = void 0;
          }
        } finally {
          x ? ft() : nt = !1;
        }
      }
    }
    var ft;
    if (typeof Ju == "function")
      ft = function() {
        Ju(Et);
      };
    else if (typeof MessageChannel < "u") {
      var hu = new MessageChannel(), wu = hu.port2;
      hu.port1.onmessage = Et, ft = function() {
        wu.postMessage(null);
      };
    } else
      ft = function() {
        St(Et, 0);
      };
    function Rl(N, x) {
      J = St(function() {
        N(z.unstable_now());
      }, x);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, z.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ul = 0 < N ? Math.floor(1e3 / N) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, z.unstable_next = function(N) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = q;
      }
      var G = q;
      q = x;
      try {
        return N();
      } finally {
        q = G;
      }
    }, z.unstable_requestPaint = function() {
      rl = !0;
    }, z.unstable_runWithPriority = function(N, x) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var G = q;
      q = N;
      try {
        return x();
      } finally {
        q = G;
      }
    }, z.unstable_scheduleCallback = function(N, x, G) {
      var ml = z.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ml + G : ml) : G = ml, N) {
        case 1:
          var fl = -1;
          break;
        case 2:
          fl = 250;
          break;
        case 5:
          fl = 1073741823;
          break;
        case 4:
          fl = 1e4;
          break;
        default:
          fl = 5e3;
      }
      return fl = G + fl, N = {
        id: R++,
        callback: x,
        priorityLevel: N,
        startTime: G,
        expirationTime: fl,
        sortIndex: -1
      }, G > ml ? (N.sortIndex = G, A(vl, N), p(B) === null && N === p(vl) && ($l ? (et(J), J = -1) : $l = !0, Rl(xt, G - ml))) : (N.sortIndex = fl, A(B, N), at || Cl || (at = !0, nt || (nt = !0, ft()))), N;
    }, z.unstable_shouldYield = Tt, z.unstable_wrapCallback = function(N) {
      var x = q;
      return function() {
        var G = q;
        q = x;
        try {
          return N.apply(this, arguments);
        } finally {
          q = G;
        }
      };
    };
  })(No)), No;
}
var cm;
function yh() {
  return cm || (cm = 1, Ao.exports = mh()), Ao.exports;
}
var Mo = { exports: {} }, Ll = {};
var im;
function rh() {
  if (im) return Ll;
  im = 1;
  var z = Ro();
  function A(R) {
    var T = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        T += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + R + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p() {
  }
  var h = {
    d: {
      f: p,
      r: function() {
        throw Error(A(522));
      },
      D: p,
      C: p,
      L: p,
      m: p,
      X: p,
      S: p,
      M: p
    },
    p: 0,
    findDOMNode: null
  }, tl = /* @__PURE__ */ Symbol.for("react.portal"), K = /* @__PURE__ */ Symbol.for("react.recoverable"), Ol = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function Bl(R, T, q) {
    var Cl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: tl,
      key: Cl == null ? null : Cl === Ol ? Ol : "" + Cl,
      children: R,
      containerInfo: T,
      implementation: q
    };
  }
  var B = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function vl(R, T) {
    if (R === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return Ll.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Ll.browser = function(R) {
    return { $$typeof: K, _reason: R };
  }, Ll.createPortal = function(R, T) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(A(299));
    return Bl(R, T, null, q);
  }, Ll.flushSync = function(R) {
    var T = B.T, q = h.p;
    try {
      if (B.T = null, h.p = 2, R) return R();
    } finally {
      B.T = T, h.p = q, h.d.f();
    }
  }, Ll.preconnect = function(R, T) {
    typeof R == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, h.d.C(R, T));
  }, Ll.prefetchDNS = function(R) {
    typeof R == "string" && h.d.D(R);
  }, Ll.preinit = function(R, T) {
    if (typeof R == "string" && T && typeof T.as == "string") {
      var q = T.as, Cl = vl(q, T.crossOrigin), at = typeof T.integrity == "string" ? T.integrity : void 0, $l = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      q === "style" ? h.d.S(
        R,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: Cl,
          integrity: at,
          fetchPriority: $l
        }
      ) : q === "script" && h.d.X(R, {
        crossOrigin: Cl,
        integrity: at,
        fetchPriority: $l,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, Ll.preinitModule = function(R, T) {
    if (typeof R == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var q = vl(
            T.as,
            T.crossOrigin
          );
          h.d.M(R, {
            crossOrigin: q,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
          });
        }
      } else T == null && h.d.M(R);
  }, Ll.preload = function(R, T) {
    if (typeof R == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var q = T.as, Cl = vl(q, T.crossOrigin);
      h.d.L(R, q, {
        crossOrigin: Cl,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, Ll.preloadModule = function(R, T) {
    if (typeof R == "string")
      if (T) {
        var q = vl(T.as, T.crossOrigin);
        h.d.m(R, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: q,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
        });
      } else h.d.m(R);
  }, Ll.requestFormReset = function(R) {
    h.d.r(R);
  }, Ll.unstable_batchedUpdates = function(R, T) {
    return R(T);
  }, Ll.useFormState = function(R, T, q) {
    return B.H.useFormState(R, T, q);
  }, Ll.useFormStatus = function() {
    return B.H.useHostTransitionStatus();
  }, Ll.version = "19.3.1", Ll;
}
var om;
function hh() {
  if (om) return Mo.exports;
  om = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (A) {
        console.error(A);
      }
  }
  return z(), Mo.exports = rh(), Mo.exports;
}
var sm;
function gh() {
  if (sm) return nn;
  sm = 1;
  var z = yh(), A = Ro(), p = hh();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function tl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function K(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function Ol(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Bl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function B(l) {
    if (K(l) !== l)
      throw Error(h(188));
  }
  function vl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = K(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return B(e), l;
          if (n === a) return B(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function R(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = R(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function T(l, t, u, a, e, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, e, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && T(
        l.child,
        t,
        u,
        a,
        e,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function q(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Cl(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function at(l) {
    var t = [null, null], u = q(l);
    return u === null || $l(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function $l(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && $l(
        l,
        t,
        u.child,
        a
      ))
        return !0;
      u = u.sibling;
    }
    return !1;
  }
  function rl(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(h(559));
    }
  }
  var St = null, et = null;
  function Ju(l, t, u) {
    return l === u ? !0 : l === t ? (St = l, !0) : !1;
  }
  function qt(l, t, u) {
    return l === u ? (et = l, !1) : l === t ? (et !== null && (St = l), !0) : !1;
  }
  function xt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function nt(l, t, u) {
    for (var a = 0, e = l; e; e = u(e)) a++;
    e = 0;
    for (var n = t; n; n = u(n)) e++;
    for (; 0 < a - e; ) l = u(l), a--;
    for (; 0 < e - a; ) t = u(t), e--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var J = Object.assign, ul = /* @__PURE__ */ Symbol.for("react.element"), Gt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Tt = /* @__PURE__ */ Symbol.for("react.portal"), Et = /* @__PURE__ */ Symbol.for("react.fragment"), ft = /* @__PURE__ */ Symbol.for("react.strict_mode"), hu = /* @__PURE__ */ Symbol.for("react.profiler"), wu = /* @__PURE__ */ Symbol.for("react.consumer"), Rl = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), ml = /* @__PURE__ */ Symbol.for("react.memo"), fl = /* @__PURE__ */ Symbol.for("react.lazy"), Ct = /* @__PURE__ */ Symbol.for("react.activity"), Pt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Fu = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), s = /* @__PURE__ */ Symbol.for("react.view_transition"), b = /* @__PURE__ */ Symbol.for("react.recoverable"), H = Symbol.iterator;
  function j(l) {
    return l === null || typeof l != "object" ? null : (l = H && l[H] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var I = /* @__PURE__ */ Symbol.for("react.client.reference");
  function P(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === I ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Et:
        return "Fragment";
      case hu:
        return "Profiler";
      case ft:
        return "StrictMode";
      case x:
        return "Suspense";
      case G:
        return "SuspenseList";
      case Ct:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Tt:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case wu:
          return (l._context.displayName || "Context") + ".Consumer";
        case N:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ml:
          return t = l.displayName || null, t !== null ? t : P(l.type) || "Memo";
        case fl:
          t = l._payload, l = l._init;
          try {
            return P(l(t));
          } catch {
          }
      }
    return null;
  }
  var al = Array.isArray, U = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Xf = [], Sa = -1;
  function Xt(l) {
    return { current: l };
  }
  function ql(l) {
    0 > Sa || (l.current = Xf[Sa], Xf[Sa] = null, Sa--);
  }
  function hl(l, t) {
    Sa++, Xf[Sa] = l.current, l.current = t;
  }
  var Qt = Xt(null), se = Xt(null), gu = Xt(null), on = Xt(null);
  function sn(l, t) {
    switch (hl(gu, t), hl(se, l), hl(Qt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? vd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = vd(t), l = dd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    ql(Qt), hl(Qt, l);
  }
  function Ta() {
    ql(Qt), ql(se), ql(gu);
  }
  function Qf(l) {
    var t = l.memoizedState;
    t !== null && (fe._currentValue = t.memoizedState, hl(on, l)), t = Qt.current;
    var u = dd(t, l.type);
    t !== u && (hl(se, l), hl(Qt, u));
  }
  function vn(l) {
    se.current === l && (ql(Qt), ql(se)), on.current === l && (ql(on), fe._currentValue = lu);
  }
  var Zf, Ho;
  function Su(l) {
    if (Zf === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Zf = t && t[1] || "", Ho = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zf + l + Ho;
  }
  var Vf = !1;
  function Lf(l, t) {
    if (!l || Vf) return "";
    Vf = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (_) {
                  var v = _;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (_) {
                  v = _;
                }
                E = !1;
                try {
                  var r = Object.getOwnPropertyDescriptor(
                    l.prototype,
                    "props"
                  );
                  Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), E = !0, new l();
                } finally {
                  E && (r !== void 0 ? Object.defineProperty(l.prototype, "props", r) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                v = _;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (_) {
            if (_ && v && typeof _.stack == "string")
              return [_.stack, v.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), m = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === m.length)
          for (a = i.length - 1, e = m.length - 1; 1 <= a && 0 <= e && i[a] !== m[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== m[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== m[e]) {
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Vf = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Su(u) : "";
  }
  function ym(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Su(l.type);
      case 16:
        return Su("Lazy");
      case 13:
        return l.child !== t && t !== null ? Su("Suspense Fallback") : Su("Suspense");
      case 19:
        return Su("SuspenseList");
      case 0:
      case 15:
        return Lf(l.type, !1);
      case 11:
        return Lf(l.type.render, !1);
      case 1:
        return Lf(l.type, !0);
      case 31:
        return Su("Activity");
      case 30:
        return Su("ViewTransition");
      default:
        return "";
    }
  }
  function jo(l) {
    try {
      var t = "", u = null;
      do
        t += ym(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Kf = Object.prototype.hasOwnProperty, Jf = z.unstable_scheduleCallback, wf = z.unstable_cancelCallback, rm = z.unstable_shouldYield, hm = z.unstable_requestPaint, ct = z.unstable_now, gm = z.unstable_getCurrentPriorityLevel, po = z.unstable_ImmediatePriority, Yo = z.unstable_UserBlockingPriority, dn = z.unstable_NormalPriority, Sm = z.unstable_LowPriority, Bo = z.unstable_IdlePriority, Tm = z.log, Em = z.unstable_setDisableYieldValue, ve = null, it = null;
  function Tu(l) {
    if (typeof Tm == "function" && Em(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(ve, l);
      } catch {
      }
  }
  var ot = Math.clz32 ? Math.clz32 : Om, bm = Math.log, zm = Math.LN2;
  function Om(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (bm(l) / zm | 0) | 0;
  }
  var mn = 256, yn = 262144, rn = 4194304;
  function Wu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function hn(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = Wu(a) : (f &= c, f !== 0 ? e = Wu(f) : u || (u = c & ~l, u !== 0 && (e = Wu(u))))) : (c = a & ~n, c !== 0 ? e = Wu(c) : f !== 0 ? e = Wu(f) : u || (u = a & ~l, u !== 0 && (e = Wu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function de(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function qo(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var a = 31 - ot(u), e = 1 << a;
        t |= l[a], u &= ~e;
      }
    return t;
  }
  function _m(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xo() {
    var l = rn;
    return rn <<= 1, (rn & 62914560) === 0 && (rn = 4194304), l;
  }
  function Ff(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function me(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Am(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, m = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - ot(u), E = 1 << g;
      c[g] = 0, i[g] = -1;
      var v = m[g];
      if (v !== null)
        for (m[g] = null, g = 0; g < v.length; g++) {
          var r = v[g];
          r !== null && (r.lane &= -536870913);
        }
      u &= ~E;
    }
    a !== 0 && Go(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Go(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ot(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Xo(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ot(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Qo(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : Wf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function Wf(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $f(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zo() {
    var l = X.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Wd(l.type));
  }
  function Vo(l, t) {
    var u = X.p;
    try {
      return X.p = l, t();
    } finally {
      X.p = u;
    }
  }
  var tu = Math.random().toString(36).slice(2), xl = "__reactFiber$" + tu, kl = "__reactProps$" + tu, Ea = "__reactContainer$" + tu, Lo = "__reactEvents$" + tu, Nm = "__reactListeners$" + tu, Mm = "__reactHandles$" + tu, Ko = "__reactResources$" + tu, ye = "__reactMarker$" + tu, gn = "__reactLoad$" + tu;
  function Sn(l) {
    delete l[xl], delete l[kl], delete l[Nm], delete l[Mm];
  }
  function $u(l) {
    var t;
    if (t = l[xl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Ea] || u[xl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Ud(l); l !== null; ) {
            if (u = l[xl]) return u;
            l = Ud(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ba(l) {
    if (l = l[xl] || l[Ea]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function re(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function za(l) {
    var t = l[Ko];
    return t || (t = l[Ko] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[ye] = !0;
  }
  function Jo(l) {
    l[gn] = void 0;
  }
  var wo = /* @__PURE__ */ new Set(), Fo = {};
  function ku(l, t) {
    Oa(l, t), Oa(l + "Capture", t);
  }
  function Oa(l, t) {
    for (Fo[l] = t, l = 0; l < t.length; l++)
      wo.add(t[l]);
  }
  var Dm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Wo = {}, $o = {};
  function Um(l) {
    return Kf.call($o, l) ? !0 : Kf.call(Wo, l) ? !1 : Dm.test(l) ? $o[l] = !0 : (Wo[l] = !0, !1);
  }
  var ll = !1;
  function ko() {
    var l = ll;
    return ll = !1, l;
  }
  function Tn(l, t, u) {
    if (Um(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, u);
      }
  }
  function En(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function uu(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function st(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Io(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Cm(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function kf(l) {
    if (!l._valueTracker) {
      var t = Io(l) ? "checked" : "value";
      l._valueTracker = Cm(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Po(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Io(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  var Rm = /[\n"\\]/g;
  function bt(l) {
    return l.replace(
      Rm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function If(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? Pf(l, st(l.value)) : Pf(l, st(t)) : u != null ? Pf(l, st(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + st(c) : l.removeAttribute("name");
  }
  function l0(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        kf(l);
        return;
      }
      u = u != null ? "" + st(u) : "", t = t != null ? "" + st(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), kf(l);
  }
  function Pf(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function _a(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + st(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function t0(l, t, u) {
    if (t != null && (t = "" + st(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + st(u) : "";
  }
  function u0(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (al(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = st(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), kf(l);
  }
  function Aa(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Hm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function a0(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Hm.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function e0(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", ll = !0);
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && (a0(l, e, a), ll = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && a0(l, n, t[n]);
  }
  function lc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), pm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bn(l) {
    return pm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Zt() {
  }
  var tc = null;
  function uc(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Na = null, Ma = null;
  function n0(l) {
    var t = ba(l);
    if (t && (l = t.stateNode)) {
      var u = l[kl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (If(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + bt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[kl] || null;
                if (!e) throw Error(h(90));
                If(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Po(a);
          }
          break l;
        case "textarea":
          t0(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && _a(l, !!u.multiple, t, !1);
      }
    }
  }
  var ac = !1;
  function f0(l, t, u) {
    if (ac) return l(t, u);
    ac = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ac = !1, (Na !== null || Ma !== null) && (zf(), Na && (t = Na, l = Ma, Ma = Na = null, n0(t), l)))
        for (t = 0; t < l.length; t++) n0(l[t]);
    }
  }
  function he(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[kl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        h(231, t, typeof u)
      );
    return u;
  }
  var au = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ec = !1;
  if (au)
    try {
      var ge = {};
      Object.defineProperty(ge, "passive", {
        get: function() {
          ec = !0;
        }
      }), window.addEventListener("test", ge, ge), window.removeEventListener("test", ge, ge);
    } catch {
      ec = !1;
    }
  var Eu = null, nc = null, zn = null;
  function c0() {
    if (zn) return zn;
    var l, t = nc, u = t.length, a, e = "value" in Eu ? Eu.value : Eu.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return zn = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function On(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function _n() {
    return !0;
  }
  function i0() {
    return !1;
  }
  function Jl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? _n : i0, this.isPropagationStopped = i0, this;
    }
    return J(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = _n);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = _n);
      },
      persist: function() {
      },
      isPersistent: _n
    }), t;
  }
  var bu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, An = Jl(bu), Se = J({}, bu, { view: 0, detail: 0 }), Ym = Jl(Se), fc, cc, Te, Nn = J({}, Se, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Te && (Te && l.type === "mousemove" ? (fc = l.screenX - Te.screenX, cc = l.screenY - Te.screenY) : cc = fc = 0, Te = l), fc);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cc;
    }
  }), o0 = Jl(Nn), Bm = J({}, Nn, { dataTransfer: 0 }), qm = Jl(Bm), xm = J({}, Se, { relatedTarget: 0 }), ic = Jl(xm), Gm = J({}, bu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xm = Jl(Gm), Qm = J({}, bu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Zm = Jl(Qm), Vm = J({}, bu, { data: 0 }), s0 = Jl(Vm), Lm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Km = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Jm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Jm[l]) ? !!t[l] : !1;
  }
  function oc() {
    return wm;
  }
  var Fm = J({}, Se, {
    key: function(l) {
      if (l.key) {
        var t = Lm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = On(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Km[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oc,
    charCode: function(l) {
      return l.type === "keypress" ? On(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? On(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Wm = Jl(Fm), $m = J({}, Nn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), v0 = Jl($m), km = J({}, bu, { submitter: 0 }), Im = Jl(km), Pm = J({}, Se, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc
  }), ly = Jl(Pm), ty = J({}, bu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uy = Jl(ty), ay = J({}, Nn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ey = Jl(ay), ny = J({}, bu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), fy = Jl(ny), cy = [9, 13, 27, 32], sc = au && "CompositionEvent" in window, Ee = null;
  au && "documentMode" in document && (Ee = document.documentMode);
  var iy = au && "TextEvent" in window && !Ee, d0 = au && (!sc || Ee && 8 < Ee && 11 >= Ee), m0 = " ", y0 = !1;
  function r0(l, t) {
    switch (l) {
      case "keyup":
        return cy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function h0(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Da = !1;
  function oy(l, t) {
    switch (l) {
      case "compositionend":
        return h0(t);
      case "keypress":
        return t.which !== 32 ? null : (y0 = !0, m0);
      case "textInput":
        return l = t.data, l === m0 && y0 ? null : l;
      default:
        return null;
    }
  }
  function sy(l, t) {
    if (Da)
      return l === "compositionend" || !sc && r0(l, t) ? (l = c0(), zn = nc = Eu = null, Da = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return d0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function g0(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!vy[l.type] : t === "textarea";
  }
  function S0(l, t, u, a) {
    Na ? Ma ? Ma.push(a) : Ma = [a] : Na = a, t = Df(t, "onChange"), 0 < t.length && (u = new An(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var be = null, ze = null;
  function dy(l) {
    nd(l, 0);
  }
  function Mn(l) {
    var t = re(l);
    if (Po(t)) return l;
  }
  function T0(l, t) {
    if (l === "change") return t;
  }
  var E0 = !1;
  if (au) {
    var vc;
    if (au) {
      var dc = "oninput" in document;
      if (!dc) {
        var b0 = document.createElement("div");
        b0.setAttribute("oninput", "return;"), dc = typeof b0.oninput == "function";
      }
      vc = dc;
    } else vc = !1;
    E0 = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function z0() {
    be && (be.detachEvent("onpropertychange", O0), ze = be = null);
  }
  function O0(l) {
    if (l.propertyName === "value" && Mn(ze)) {
      var t = [];
      S0(
        t,
        ze,
        l,
        uc(l)
      ), f0(dy, t);
    }
  }
  function my(l, t, u) {
    l === "focusin" ? (z0(), be = t, ze = u, be.attachEvent("onpropertychange", O0)) : l === "focusout" && z0();
  }
  function yy(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Mn(ze);
  }
  function ry(l, t) {
    if (l === "click") return Mn(t);
  }
  function hy(l, t) {
    if (l === "input" || l === "change")
      return Mn(t);
  }
  function gy(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : gy;
  function Oe(l, t) {
    if (vt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Kf.call(t, e) || !vt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function mc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function _0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function A0(l, t) {
    var u = _0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = _0(u);
    }
  }
  function N0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? N0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function M0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = mc(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = mc(l.document);
    }
    return t;
  }
  function yc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Sy = au && "documentMode" in document && 11 >= document.documentMode, Ua = null, rc = null, _e = null, hc = !1;
  function D0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    hc || Ua == null || Ua !== mc(a) || (a = Ua, "selectionStart" in a && yc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), _e && Oe(_e, a) || (_e = a, a = Df(rc, "onSelect"), 0 < a.length && (t = new An(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ua)));
  }
  function Iu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ca = {
    animationend: Iu("Animation", "AnimationEnd"),
    animationiteration: Iu("Animation", "AnimationIteration"),
    animationstart: Iu("Animation", "AnimationStart"),
    transitionrun: Iu("Transition", "TransitionRun"),
    transitionstart: Iu("Transition", "TransitionStart"),
    transitioncancel: Iu("Transition", "TransitionCancel"),
    transitionend: Iu("Transition", "TransitionEnd")
  }, gc = {}, U0 = {};
  au && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ca.animationend.animation, delete Ca.animationiteration.animation, delete Ca.animationstart.animation), "TransitionEvent" in window || delete Ca.transitionend.transition);
  function Pu(l) {
    if (gc[l]) return gc[l];
    if (!Ca[l]) return l;
    var t = Ca[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in U0)
        return gc[l] = t[u];
    return l;
  }
  var C0 = Pu("animationend"), R0 = Pu("animationiteration"), H0 = Pu("animationstart"), Ty = Pu("transitionrun"), Ey = Pu("transitionstart"), by = Pu("transitioncancel"), j0 = Pu("transitionend"), p0 = /* @__PURE__ */ new Map(), Sc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Sc.push("scrollEnd");
  function Rt(l, t) {
    p0.set(l, t), ku(t, [l]);
  }
  var zy = 0;
  function eu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Yt.identifierPrefix;
    var u = zy++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function Y0(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = $a;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = l[u[a]];
        if (e != null) {
          if (e === "none") return "none";
          t = t == null ? e : t + (" " + e);
        }
      }
    return t ?? l.default;
  }
  function nu(l, t) {
    return l = Y0(l), t = Y0(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var Dn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, zt = [], Ra = 0, Tc = 0;
  function Un() {
    for (var l = Ra, t = Tc = Ra = 0; t < l; ) {
      var u = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var e = zt[t];
      zt[t++] = null;
      var n = zt[t];
      if (zt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && B0(u, e, n);
    }
  }
  function Cn(l, t, u, a) {
    zt[Ra++] = l, zt[Ra++] = t, zt[Ra++] = u, zt[Ra++] = a, Tc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ec(l, t, u, a) {
    return Cn(l, t, u, a), Rn(l);
  }
  function la(l, t) {
    return Cn(l, null, null, t), Rn(l);
  }
  function B0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ot(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Rn(l) {
    if (50 < Je)
      throw Je = 0, bf = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = {};
  function Oy(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Il(l, t, u, a) {
    return new Oy(l, t, u, a);
  }
  function bc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function fu(l, t) {
    var u = l.alternate;
    return u === null ? (u = Il(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function q0(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Hn(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof a == "function") bc(a) && (f = 1);
    else if (typeof a == "string")
      f = kr(
        l,
        u,
        Qt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (a) {
        case Ct:
          return l = Il(31, u, t, e), l.elementType = Ct, l.lanes = n, l;
        case Et:
          return ta(u.children, e, n, t);
        case ft:
          f = 8, e |= 24;
          break;
        case hu:
          return l = Il(12, u, t, e | 2), l.elementType = hu, l.lanes = n, l;
        case x:
          return l = Il(13, u, t, e), l.elementType = x, l.lanes = n, l;
        case G:
          return l = Il(19, u, t, e), l.elementType = G, l.lanes = n, l;
        case Pt:
        case s:
          return l = e | 32, l = Il(30, u, t, l), l.elementType = s, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Rl:
                f = 10;
                break l;
              case wu:
                f = 9;
                break l;
              case N:
                f = 11;
                break l;
              case ml:
                f = 14;
                break l;
              case fl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Il(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function ta(l, t, u, a) {
    return l = Il(7, l, a, t), l.lanes = u, l;
  }
  function zc(l, t, u) {
    return l = Il(6, l, null, t), l.lanes = u, l;
  }
  function x0(l) {
    var t = Il(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Oc(l, t, u) {
    return t = Il(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var G0 = /* @__PURE__ */ new WeakMap();
  function Ot(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = G0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: jo(t)
      }, G0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: jo(t)
    };
  }
  var ja = [], pa = 0, jn = null, Ae = 0, _t = [], At = 0, zu = null, Vt = 1, Lt = "";
  function cu(l, t) {
    ja[pa++] = Ae, ja[pa++] = jn, jn = l, Ae = t;
  }
  function X0(l, t, u) {
    _t[At++] = Vt, _t[At++] = Lt, _t[At++] = zu, zu = l;
    var a = Vt;
    l = Lt;
    var e = 32 - ot(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - ot(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Vt = 1 << 32 - ot(t) + e | u << e | a, Lt = n + l;
    } else
      Vt = 1 << n | u << e | a, Lt = l;
  }
  function pn(l) {
    l.return !== null && (cu(l, 1), X0(l, 1, 0));
  }
  function _c(l) {
    for (; l === jn; )
      jn = ja[--pa], ja[pa] = null, Ae = ja[--pa], ja[pa] = null;
    for (; l === zu; )
      zu = _t[--At], _t[At] = null, Lt = _t[--At], _t[At] = null, Vt = _t[--At], _t[At] = null;
  }
  function Q0(l, t) {
    _t[At++] = Vt, _t[At++] = Lt, _t[At++] = zu, Vt = t.id, Lt = t.overflow, zu = l;
  }
  var jl = null, gl = null, L = !1, Ou = null, Nt = !1, Ac = Error(h(519));
  function _u(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ne(Ot(t, l)), Ac;
  }
  function Z0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[xl] = l, t[kl] = a, u) {
      case "dialog":
        F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Fe.length; u++)
          F(Fe[u], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        F("invalid", t), l0(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        F("invalid", t);
        break;
      case "textarea":
        F("invalid", t), u0(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || od(t.textContent, u) ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)), a.onScroll != null && F("scroll", t), a.onScrollEnd != null && F("scrollend", t), a.onClick != null && (t.onclick = Zt), t = !0) : t = !1, t || _u(l, !0);
  }
  function Yn(l) {
    for (jl = l.return; jl; )
      switch (jl.tag) {
        case 5:
        case 31:
        case 13:
          Nt = !1;
          return;
        case 27:
        case 3:
          Nt = !0;
          return;
        default:
          jl = jl.return;
      }
  }
  function Ya(l) {
    if (l !== jl) return !1;
    if (!L) return Yn(l), L = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || to(l.type, l.memoizedProps)), u = !u), u && gl && _u(l), Yn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      gl = Dd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      gl = Dd(l);
    } else
      t === 27 ? (t = gl, Xu(l.type) ? (l = so, so = null, gl = l) : gl = t) : gl = jl ? Dt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    gl = jl = null, L = !1;
  }
  function Nc() {
    var l = Ou;
    return l !== null && (tt === null ? tt = l : tt.push.apply(
      tt,
      l
    ), Ou = null), l;
  }
  function Ne(l) {
    Ou === null ? Ou = [l] : Ou.push(l);
  }
  var Mc = Xt(null), aa = null, iu = null;
  function Au(l, t, u) {
    hl(Mc, t._currentValue), t._currentValue = u;
  }
  function ou(l) {
    l._currentValue = Mc.current, ql(Mc);
  }
  function Bn(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Dc(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Bn(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Bn(f, u, l), f = null;
      } else
        e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null ? (e.lanes |= u, f = e.alternate, f !== null && (f.lanes |= u), Bn(
          e.return,
          u,
          l
        ), f = e.child, f = f !== null ? f.sibling : null) : f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function ea(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          vt(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === on.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(fe) : l = [fe]);
      }
      e = e.return;
    }
    return l !== null && Dc(
      t,
      l,
      u,
      a
    ), t.flags |= 262144, l !== null;
  }
  function qn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!vt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function na(l) {
    aa = l, iu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Gl(l) {
    return V0(aa, l);
  }
  function xn(l, t) {
    return aa === null && na(l), V0(l, t);
  }
  function V0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, iu === null) {
      if (l === null) throw Error(h(308));
      iu = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else iu = iu.next = t;
    return u;
  }
  var _y = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Ay = z.unstable_scheduleCallback, Ny = z.unstable_NormalPriority, Al = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Uc() {
    return {
      controller: new _y(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Me(l) {
    l.refCount--, l.refCount === 0 && Ay(Ny, function() {
      l.controller.abort();
    });
  }
  function L0(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var De = null;
  function My(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Ue = null, Cc = 0, fa = 0, Ba = null;
  function Dy(l, t) {
    if (Ue === null) {
      var u = Ue = [];
      Cc = 0, fa = Ji(), Ba = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Cc++, t.then(K0, K0), t;
  }
  function K0() {
    if (--Cc === 0 && (De = null, Ue !== null)) {
      Ba !== null && (Ba.status = "fulfilled");
      var l = Ue;
      Ue = null, fa = 0, Ba = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Uy(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var J0 = U.S;
  U.S = function(l, t) {
    if (xv = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && Dy(l, t), De !== null)
      for (var u = le; u !== null; )
        L0(u, De), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = le; a !== null; )
        L0(a, u), a = a.next;
      if (fa !== 0) {
        a = De, a === null && (a = De = []);
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    J0 !== null && J0(l, t);
  };
  var ca = Xt(null);
  function Rc() {
    var l = ca.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Gn(l, t) {
    t === null ? hl(ca, ca.current) : hl(ca, t.pool);
  }
  function w0() {
    var l = Rc();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var qa = Error(h(460)), Hc = Error(h(474)), Xn = Error(h(542)), Qn = { then: function() {
  } };
  function F0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function W0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Zt, Zt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, k0(l), l === void 0 && !("reason" in t) ? Error(h(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, k0(l), l;
        }
        throw oa = t, qa;
    }
  }
  function ia(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (oa = u, qa) : u;
    }
  }
  var oa = null;
  function $0() {
    if (oa === null) throw Error(h(459));
    var l = oa;
    return oa = null, l;
  }
  function k0(l) {
    if (l === qa || l === Xn)
      throw Error(h(483));
  }
  var xa = null, Ce = 0;
  function Zn(l) {
    var t = Ce;
    return Ce += 1, xa === null && (xa = []), W0(xa, l, t);
  }
  function Nu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Vn(l, t) {
    throw t.$$typeof === ul ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function I0(l) {
    function t(d, o) {
      if (l) {
        var y = d.deletions;
        y === null ? (d.deletions = [o], d.flags |= 16) : y.push(o);
      }
    }
    function u(d, o) {
      if (!l) return null;
      for (; o !== null; )
        t(d, o), o = o.sibling;
      return null;
    }
    function a(d) {
      for (var o = /* @__PURE__ */ new Map(); d !== null; )
        d.key === null ? o.set(d.index, d) : o.set(d.key, d), d = d.sibling;
      return o;
    }
    function e(d, o) {
      return d = fu(d, o), d.index = 0, d.sibling = null, d;
    }
    function n(d, o, y) {
      return d.index = y, l ? (y = d.alternate, y !== null ? (y = y.index, y < o ? (d.flags |= 2, o) : y) : (d.flags |= 134217730, o)) : (d.flags |= 1048576, o);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 134217730), d;
    }
    function c(d, o, y, S) {
      return o === null || o.tag !== 6 ? (o = zc(y, d.mode, S), o.return = d, o) : (o = e(o, y), o.return = d, o);
    }
    function i(d, o, y, S) {
      var M = y.type;
      return M === Et ? (d = g(
        d,
        o,
        y.props.children,
        S,
        y.key
      ), Nu(d, y), d) : o !== null && (o.elementType === M || typeof M == "object" && M !== null && M.$$typeof === fl && ia(M) === o.type) ? (o = e(o, y.props), Nu(o, y), o.return = d, o) : (o = Hn(
        y.type,
        y.key,
        y.props,
        null,
        d.mode,
        S
      ), Nu(o, y), o.return = d, o);
    }
    function m(d, o, y, S) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== y.containerInfo || o.stateNode.implementation !== y.implementation ? (o = Oc(y, d.mode, S), o.return = d, o) : (o = e(o, y.children || []), o.return = d, o);
    }
    function g(d, o, y, S, M) {
      return o === null || o.tag !== 7 ? (o = ta(
        y,
        d.mode,
        S,
        M
      ), o.return = d, o) : (o = e(o, y), o.return = d, o);
    }
    function E(d, o, y) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = zc(
          "" + o,
          d.mode,
          y
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Gt:
            return y = Hn(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              y
            ), Nu(y, o), y.return = d, y;
          case Tt:
            return o = Oc(
              o,
              d.mode,
              y
            ), o.return = d, o;
          case fl:
            return o = ia(o), E(d, o, y);
        }
        if (al(o) || j(o))
          return o = ta(
            o,
            d.mode,
            y,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return E(d, Zn(o), y);
        if (o.$$typeof === Rl)
          return E(
            d,
            xn(d, o),
            y
          );
        Vn(d, o);
      }
      return null;
    }
    function v(d, o, y, S) {
      var M = o !== null ? o.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return M !== null ? null : c(d, o, "" + y, S);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Gt:
            return y.key === M ? i(d, o, y, S) : null;
          case Tt:
            return y.key === M ? m(d, o, y, S) : null;
          case fl:
            return y = ia(y), v(d, o, y, S);
        }
        if (al(y) || j(y))
          return M !== null ? null : g(d, o, y, S, null);
        if (typeof y.then == "function")
          return v(
            d,
            o,
            Zn(y),
            S
          );
        if (y.$$typeof === Rl)
          return v(
            d,
            o,
            xn(d, y),
            S
          );
        Vn(d, y);
      }
      return null;
    }
    function r(d, o, y, S, M) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return d = d.get(y) || null, c(o, d, "" + S, M);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Gt:
            return d = d.get(
              S.key === null ? y : S.key
            ) || null, i(o, d, S, M);
          case Tt:
            return d = d.get(
              S.key === null ? y : S.key
            ) || null, m(o, d, S, M);
          case fl:
            return S = ia(S), r(
              d,
              o,
              y,
              S,
              M
            );
        }
        if (al(S) || j(S))
          return d = d.get(y) || null, g(o, d, S, M, null);
        if (typeof S.then == "function")
          return r(
            d,
            o,
            y,
            Zn(S),
            M
          );
        if (S.$$typeof === Rl)
          return r(
            d,
            o,
            y,
            xn(o, S),
            M
          );
        Vn(o, S);
      }
      return null;
    }
    function _(d, o, y, S) {
      for (var M = null, $ = null, C = o, Y = o = 0, Dl = null; C !== null && Y < y.length; Y++) {
        C.index > Y ? (Dl = C, C = null) : Dl = C.sibling;
        var k = v(
          d,
          C,
          y[Y],
          S
        );
        if (k === null) {
          C === null && (C = Dl);
          break;
        }
        l && C && k.alternate === null && t(d, C), o = n(k, o, Y), $ === null ? M = k : $.sibling = k, $ = k, C = Dl;
      }
      if (Y === y.length)
        return u(d, C), L && cu(d, Y), M;
      if (C === null) {
        for (; Y < y.length; Y++)
          C = E(d, y[Y], S), C !== null && (o = n(
            C,
            o,
            Y
          ), $ === null ? M = C : $.sibling = C, $ = C);
        return L && cu(d, Y), M;
      }
      for (C = a(C); Y < y.length; Y++)
        Dl = r(
          C,
          d,
          Y,
          y[Y],
          S
        ), Dl !== null && (l && (k = Dl.alternate, k !== null && C.delete(k.key === null ? Y : k.key)), o = n(
          Dl,
          o,
          Y
        ), $ === null ? M = Dl : $.sibling = Dl, $ = Dl);
      return l && C.forEach(function(Ku) {
        return t(d, Ku);
      }), L && cu(d, Y), M;
    }
    function D(d, o, y, S) {
      if (y == null) throw Error(h(151));
      for (var M = null, $ = null, C = o, Y = o = 0, Dl = null, k = y.next(); C !== null && !k.done; Y++, k = y.next()) {
        C.index > Y ? (Dl = C, C = null) : Dl = C.sibling;
        var Ku = v(d, C, k.value, S);
        if (Ku === null) {
          C === null && (C = Dl);
          break;
        }
        l && C && Ku.alternate === null && t(d, C), o = n(Ku, o, Y), $ === null ? M = Ku : $.sibling = Ku, $ = Ku, C = Dl;
      }
      if (k.done)
        return u(d, C), L && cu(d, Y), M;
      if (C === null) {
        for (; !k.done; Y++, k = y.next())
          k = E(d, k.value, S), k !== null && (o = n(k, o, Y), $ === null ? M = k : $.sibling = k, $ = k);
        return L && cu(d, Y), M;
      }
      for (C = a(C); !k.done; Y++, k = y.next())
        k = r(C, d, Y, k.value, S), k !== null && (l && (Dl = k.alternate, Dl !== null && C.delete(
          Dl.key === null ? Y : Dl.key
        )), o = n(k, o, Y), $ === null ? M = k : $.sibling = k, $ = k);
      return l && C.forEach(function(oh) {
        return t(d, oh);
      }), L && cu(d, Y), M;
    }
    function V(d, o, y, S) {
      if (typeof y == "object" && y !== null && y.type === Et && y.key === null && y.props.ref === void 0 && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Gt:
            l: {
              for (var M = y.key; o !== null; ) {
                if (o.key === M) {
                  if (M = y.type, M === Et) {
                    if (o.tag === 7) {
                      u(
                        d,
                        o.sibling
                      ), S = e(
                        o,
                        y.props.children
                      ), Nu(S, y), S.return = d, d = S;
                      break l;
                    }
                  } else if (o.elementType === M || typeof M == "object" && M !== null && M.$$typeof === fl && ia(M) === o.type) {
                    u(
                      d,
                      o.sibling
                    ), S = e(o, y.props), Nu(S, y), S.return = d, d = S;
                    break l;
                  }
                  u(d, o);
                  break;
                } else t(d, o);
                o = o.sibling;
              }
              y.type === Et ? (S = ta(
                y.props.children,
                d.mode,
                S,
                y.key
              ), Nu(S, y), S.return = d, d = S) : (S = Hn(
                y.type,
                y.key,
                y.props,
                null,
                d.mode,
                S
              ), Nu(S, y), S.return = d, d = S);
            }
            return f(d);
          case Tt:
            l: {
              for (M = y.key; o !== null; ) {
                if (o.key === M)
                  if (o.tag === 4 && o.stateNode.containerInfo === y.containerInfo && o.stateNode.implementation === y.implementation) {
                    u(
                      d,
                      o.sibling
                    ), S = e(o, y.children || []), S.return = d, d = S;
                    break l;
                  } else {
                    u(d, o);
                    break;
                  }
                else t(d, o);
                o = o.sibling;
              }
              S = Oc(y, d.mode, S), S.return = d, d = S;
            }
            return f(d);
          case fl:
            return y = ia(y), V(
              d,
              o,
              y,
              S
            );
        }
        if (al(y))
          return _(
            d,
            o,
            y,
            S
          );
        if (j(y)) {
          if (M = j(y), typeof M != "function") throw Error(h(150));
          return y = M.call(y), D(
            d,
            o,
            y,
            S
          );
        }
        if (typeof y.then == "function")
          return V(
            d,
            o,
            Zn(y),
            S
          );
        if (y.$$typeof === Rl)
          return V(
            d,
            o,
            xn(d, y),
            S
          );
        Vn(d, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, o !== null && o.tag === 6 ? (u(d, o.sibling), S = e(o, y), S.return = d, d = S) : (u(d, o), S = zc(y, d.mode, S), S.return = d, d = S), f(d)) : u(d, o);
    }
    return function(d, o, y, S) {
      try {
        Ce = 0;
        var M = V(
          d,
          o,
          y,
          S
        );
        return xa = null, M;
      } catch (C) {
        if (C === qa || C === Xn) throw C;
        var $ = Il(29, C, null, d.mode);
        return $.lanes = S, $.return = d, $;
      }
    };
  }
  var sa = I0(!0), P0 = I0(!1), Mu = !1;
  function jc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function pc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Du(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Uu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (el & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Rn(l), B0(l, null, u), t;
    }
    return Cn(l, a, t, u), Rn(l);
  }
  function Re(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Xo(l, u);
    }
  }
  function Yc(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Bc = !1;
  function He() {
    if (Bc) {
      var l = Ba;
      if (l !== null) throw l;
    }
  }
  function je(l, t, u, a) {
    Bc = !1;
    var e = l.updateQueue;
    Mu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, m = i.next;
      i.next = null, f === null ? n = m : f.next = m, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = m : c.next = m, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var E = e.baseState;
      f = 0, g = m = i = null, c = n;
      do {
        var v = c.lane & -536870913, r = v !== c.lane;
        if (r ? (W & v) === v : (a & v) === v) {
          v !== 0 && v === fa && (Bc = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var _ = l, D = c;
            v = t;
            var V = u;
            switch (D.tag) {
              case 1:
                if (_ = D.payload, typeof _ == "function") {
                  E = _.call(V, E, v);
                  break l;
                }
                E = _;
                break l;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = D.payload, v = typeof _ == "function" ? _.call(V, E, v) : _, v == null) break l;
                E = J({}, E, v);
                break l;
              case 2:
                Mu = !0;
            }
          }
          v = c.callback, v !== null && (l.flags |= 64, r && (l.flags |= 8192), r = e.callbacks, r === null ? e.callbacks = [v] : r.push(v));
        } else
          r = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (m = g = r, i = E) : g = g.next = r, f |= v;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          r = c, c = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = E), e.baseState = i, e.firstBaseUpdate = m, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), Bu |= f, l.lanes = f, l.memoizedState = E;
    }
  }
  function ls(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function ts(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        ls(u[l], t);
  }
  var Cu = Xt(null), Ln = Xt(0);
  function us(l, t) {
    l = yu, hl(Ln, l), hl(Cu, t), yu = l | t.baseLanes;
  }
  function qc() {
    hl(Ln, yu), hl(Cu, Cu.current);
  }
  function xc() {
    yu = Ln.current, ql(Cu), ql(Ln);
  }
  var Xl = Xt(null), Kl = null;
  function Ru(l) {
    var t = l.alternate;
    hl(Ql, Ql.current & 1), hl(Xl, l), Kl === null && (t === null || Cu.current !== null || t.memoizedState !== null) && (Kl = l);
  }
  function Gc(l) {
    hl(Ql, Ql.current), hl(Xl, l), Kl === null && (Kl = l);
  }
  function as(l) {
    l.tag === 22 ? (hl(Ql, Ql.current), hl(Xl, l), Kl === null && (Kl = l)) : Hu();
  }
  function Hu() {
    hl(Ql, Ql.current), hl(Xl, Xl.current);
  }
  function dt(l) {
    ql(Xl), Kl === l && (Kl = null), ql(Ql);
  }
  var Ql = Xt(0);
  function pe(l, t) {
    hl(Xl, Xl.current), hl(Ql, t);
  }
  function Xc(l) {
    ql(Ql), ql(Xl), Kl === l && (Kl = null);
  }
  function Kn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || io(u) || oo(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var su = 0, Z = null, dl = null, Nl = null, Jn = !1, Ga = !1, va = !1, wn = 0, Ye = 0, Xa = null, Cy = 0;
  function bl() {
    throw Error(h(321));
  }
  function Qc(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!vt(l[u], t[u])) return !1;
    return !0;
  }
  function Zc(l, t, u, a, e, n) {
    return su = n, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = l === null || l.memoizedState === null ? Xs : Qs, va = !1, n = u(a, e), va = !1, Ga && (n = ns(
      t,
      u,
      a,
      e
    )), es(l), n;
  }
  function es(l) {
    U.H = lf;
    var t = dl !== null && dl.next !== null;
    if (su = 0, Nl = dl = Z = null, Jn = !1, Ye = 0, Xa = null, t) throw Error(h(300));
    l === null || Ml || (l = l.dependencies, l !== null && qn(l) && (Ml = !0));
  }
  function ns(l, t, u, a) {
    Z = l;
    var e = 0;
    do {
      if (Ga && (Xa = null), Ye = 0, Ga = !1, 25 <= e) throw Error(h(301));
      if (e += 1, Nl = dl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      U.H = xy, n = t(u, a);
    } while (Ga);
    return n;
  }
  function Ry() {
    var l = U.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Be(t) : t, l = l.useState()[0], (dl !== null ? dl.memoizedState : null) !== l && (Z.flags |= 1024), t;
  }
  function Vc() {
    var l = wn !== 0;
    return wn = 0, l;
  }
  function Lc(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Kc(l) {
    if (Jn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Jn = !1;
    }
    su = 0, Nl = dl = Z = null, Ga = !1, Ye = wn = 0, Xa = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nl === null ? Z.memoizedState = Nl = l : Nl = Nl.next = l, Nl;
  }
  function _l() {
    if (dl === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = Nl === null ? Z.memoizedState : Nl.next;
    if (t !== null)
      Nl = t, dl = l;
    else {
      if (l === null)
        throw Z.alternate === null ? Error(h(467)) : Error(h(310));
      dl = l, l = {
        memoizedState: dl.memoizedState,
        baseState: dl.baseState,
        baseQueue: dl.baseQueue,
        queue: dl.queue,
        next: null
      }, Nl === null ? Z.memoizedState = Nl = l : Nl = Nl.next = l;
    }
    return Nl;
  }
  function Fn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Be(l) {
    var t = Ye;
    return Ye += 1, Xa === null && (Xa = []), l = W0(Xa, l, t), t = Z, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Xs : Qs), l;
  }
  function Wn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Be(l);
      if (l.$$typeof === b) return;
      if (l.$$typeof === Rl) return Gl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Jc(l) {
    var t = null, u = Z.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Z.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Fn(), Z.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Fu;
    return t.index++, u;
  }
  function vu(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $n(l) {
    var t = _l();
    return wc(t, dl, l);
  }
  function wc(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, m = t, g = !1;
      do {
        var E = m.lane & -536870913;
        if (E !== m.lane ? (W & E) === E : (su & E) === E) {
          var v = m.revertLane;
          if (v === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), E === fa && (g = !0);
          else if ((su & v) === v) {
            m = m.next, v === fa && (g = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, i === null ? (c = i = E, f = n) : i = i.next = E, Z.lanes |= v, Bu |= v;
          E = m.action, va && u(n, E), n = m.hasEagerState ? m.eagerState : u(n, E);
        } else
          v = {
            lane: E,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, i === null ? (c = i = v, f = n) : i = i.next = v, Z.lanes |= E, Bu |= E;
        m = m.next;
      } while (m !== null && m !== t);
      if (i === null ? f = n : i.next = c, !vt(n, l.memoizedState) && (Ml = !0, g && (u = Ba, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Fc(l) {
    var t = _l(), u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      vt(n, t.memoizedState) || (Ml = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function fs(l, t, u) {
    var a = Z, e = _l(), n = L;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !vt(
      (dl || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Ml = !0), e = e.queue, kc(os.bind(null, a, e, l), [
      l
    ]), l = e.getSnapshot !== t || f || Nl !== null && (Nl.memoizedState.tag & 1) !== 0, Qa(
      l ? 9 : 8,
      { destroy: void 0 },
      is.bind(null, a, e, u, t),
      null
    ), l) {
      if (a.flags |= 2048, yl === null) throw Error(h(349));
      n || (su & 127) !== 0 || cs(a, t, u);
    }
    return u;
  }
  function cs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Z.updateQueue, t === null ? (t = Fn(), Z.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function is(l, t, u, a) {
    t.value = u, t.getSnapshot = a, ss(t) && vs(l);
  }
  function os(l, t, u) {
    return u(function() {
      ss(t) && vs(l);
    });
  }
  function ss(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !vt(l, u);
    } catch {
      return !0;
    }
  }
  function vs(l) {
    var t = la(l, 2);
    t !== null && ut(t, l, 2);
  }
  function Wc(l) {
    var t = wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), va) {
        Tu(!0);
        try {
          u();
        } finally {
          Tu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vu,
      lastRenderedState: l
    }, t;
  }
  function ds(l, t, u, a) {
    return l.baseState = u, wc(
      l,
      dl,
      typeof a == "function" ? a : vu
    );
  }
  function Hy(l, t, u, a, e) {
    if (Pn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      U.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, ms(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function ms(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = U.T, f = {};
      f.types = n !== null ? n.types : null, U.T = f;
      try {
        var c = u(e, a), i = U.S;
        i !== null && i(f, c), ys(l, t, c);
      } catch (m) {
        $c(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), U.T = n;
      }
    } else
      try {
        n = u(e, a), ys(l, t, n);
      } catch (m) {
        $c(l, t, m);
      }
  }
  function ys(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        rs(l, t, a);
      },
      function(a) {
        return $c(l, t, a);
      }
    ) : rs(l, t, u);
  }
  function rs(l, t, u) {
    t.status = "fulfilled", t.value = u, hs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, ms(l, u)));
  }
  function $c(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, hs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function hs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function gs(l, t) {
    return t;
  }
  function Ss(l, t) {
    if (L) {
      var u = yl.formState;
      if (u !== null) {
        l: {
          var a = Z;
          if (L) {
            if (gl) {
              t: {
                for (var e = gl, n = Nt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Dt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                gl = Dt(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            _u(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = wl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gs,
      lastRenderedState: t
    }, u.queue = a, u = qs.bind(
      null,
      Z,
      a
    ), a.dispatch = u, a = Wc(!1), n = ui.bind(
      null,
      Z,
      !1,
      a.queue
    ), a = wl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Hy.bind(
      null,
      Z,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Ts(l) {
    var t = _l();
    return Es(t, dl, l);
  }
  function Es(l, t, u) {
    if (t = wc(
      l,
      t,
      gs
    )[0], l = $n(vu)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Be(t);
      } catch (f) {
        throw f === qa ? Xn : f;
      }
    else a = t;
    t = _l();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Z.flags |= 2048, Qa(
      9,
      { destroy: void 0 },
      jy.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function jy(l, t) {
    l.action = t;
  }
  function bs(l) {
    var t = _l(), u = dl;
    if (u !== null)
      return Es(t, u, l);
    _l(), t = t.memoizedState, u = _l();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function Qa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Z.updateQueue, t === null && (t = Fn(), Z.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function zs() {
    return _l().memoizedState;
  }
  function kn(l, t, u, a) {
    var e = wl();
    Z.flags |= l, e.memoizedState = Qa(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function In(l, t, u, a) {
    var e = _l();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    dl !== null && a !== null && Qc(a, dl.memoizedState.deps) ? e.memoizedState = Qa(t, n, u, a) : (Z.flags |= l, e.memoizedState = Qa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Os(l, t) {
    kn(8390656, 8, l, t);
  }
  function kc(l, t) {
    In(2048, 8, l, t);
  }
  function py(l) {
    Z.flags |= 4;
    var t = Z.updateQueue;
    if (t === null)
      t = Fn(), Z.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function _s(l) {
    var t = _l().memoizedState;
    return py({ ref: t, nextImpl: l }), function() {
      if ((el & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function As(l, t) {
    return In(4, 2, l, t);
  }
  function Ns(l, t) {
    return In(4, 4, l, t);
  }
  function Ms(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Ds(l, t, u) {
    u = u != null ? u.concat([l]) : null, In(4, 4, Ms.bind(null, t, l), u);
  }
  function Ic() {
  }
  function Us(l, t) {
    var u = _l();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Qc(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Cs(l, t) {
    var u = _l();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Qc(t, a[1]))
      return a[0];
    if (a = l(), va) {
      Tu(!0);
      try {
        l();
      } finally {
        Tu(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Pc(l, t, u) {
    return u === void 0 || (su & 1073741824) !== 0 && (W & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = Xv(), Z.lanes |= l, Bu |= l, u);
  }
  function Rs(l, t, u, a) {
    return vt(u, t) ? u : Cu.current !== null ? (l = Pc(l, u, a), vt(l, t) || (Ml = !0), l) : (su & 106) === 0 || (su & 1073741824) !== 0 && (W & 261930) === 0 ? (Ml = !0, l.memoizedState = u) : (l = Xv(), Z.lanes |= l, Bu |= l, t);
  }
  function Hs(l, t, u, a, e) {
    var n = X.p;
    X.p = n !== 0 && 8 > n ? n : 8;
    var f = U.T, c = {};
    c.types = f !== null ? f.types : null, U.T = c, ui(l, !1, t, u);
    try {
      var i = e(), m = U.S;
      if (m !== null && m(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Uy(
          i,
          a
        );
        qe(
          l,
          t,
          g,
          ht(l)
        );
      } else
        qe(
          l,
          t,
          a,
          ht(l)
        );
    } catch (E) {
      qe(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        ht()
      );
    } finally {
      X.p = n, f !== null && c.types !== null && (f.types = c.types), U.T = f;
    }
  }
  function Yy() {
  }
  function li(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = js(l).queue;
    Hs(
      l,
      e,
      t,
      lu,
      u === null ? Yy : function() {
        return ps(l), u(a);
      }
    );
  }
  function js(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: lu,
      baseState: lu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vu,
        lastRenderedState: lu
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ps(l) {
    var t = js(l);
    t.next === null && (t = l.alternate.memoizedState), qe(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function ti() {
    return Gl(fe);
  }
  function Ys() {
    return _l().memoizedState;
  }
  function Bs() {
    return _l().memoizedState;
  }
  function By(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ht();
          l = Du(u);
          var a = Uu(t, l, u);
          a !== null && (ut(a, t, u), Re(a, t, u)), t = { cache: Uc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qy(l, t, u) {
    var a = ht();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pn(l) ? xs(t, u) : (u = Ec(l, t, u, a), u !== null && (ut(u, l, a), Gs(u, t, a)));
  }
  function qs(l, t, u) {
    var a = ht();
    qe(l, t, u, a);
  }
  function qe(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pn(l)) xs(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, vt(c, f))
            return Cn(l, t, e, 0), yl === null && Un(), !1;
        } catch {
        }
      if (u = Ec(l, t, e, a), u !== null)
        return ut(u, l, a), Gs(u, t, a), !0;
    }
    return !1;
  }
  function ui(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Ji(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pn(l)) {
      if (t) throw Error(h(479));
    } else
      t = Ec(
        l,
        u,
        a,
        2
      ), t !== null && ut(t, l, 2);
  }
  function Pn(l) {
    var t = l.alternate;
    return l === Z || t !== null && t === Z;
  }
  function xs(l, t) {
    Ga = Jn = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function Gs(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Xo(l, u);
    }
  }
  var lf = {
    readContext: Gl,
    use: Wn,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl,
    useEffectEvent: bl
  }, Xs = {
    readContext: Gl,
    use: Wn,
    useCallback: function(l, t) {
      return wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Gl,
    useEffect: Os,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, kn(
        4194308,
        4,
        Ms.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return kn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      kn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = wl();
      t = t === void 0 ? null : t;
      var a = l();
      if (va) {
        Tu(!0);
        try {
          l();
        } finally {
          Tu(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = wl();
      if (u !== void 0) {
        var e = u(t);
        if (va) {
          Tu(!0);
          try {
            u(t);
          } finally {
            Tu(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = qy.bind(
        null,
        Z,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Wc(l);
      var t = l.queue, u = qs.bind(null, Z, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Ic,
    useDeferredValue: function(l, t) {
      var u = wl();
      return Pc(u, l, t);
    },
    useTransition: function() {
      var l = Wc(!1);
      return l = Hs.bind(
        null,
        Z,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Z, e = wl();
      if (L) {
        if (u === void 0)
          throw Error(h(407));
        u = u();
      } else {
        if (u = t(), yl === null)
          throw Error(h(349));
        (W & 127) !== 0 || cs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Os(os.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Qa(
        9,
        { destroy: void 0 },
        is.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = wl(), t = yl.identifierPrefix;
      if (L) {
        var u = Lt, a = Vt;
        u = (a & ~(1 << 32 - ot(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = wn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Cy++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ti,
    useFormState: Ss,
    useActionState: Ss,
    useOptimistic: function(l) {
      var t = wl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ui.bind(
        null,
        Z,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Jc,
    useCacheRefresh: function() {
      return wl().memoizedState = By.bind(
        null,
        Z
      );
    },
    useEffectEvent: function(l) {
      var t = wl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((el & 2) !== 0)
          throw Error(h(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Qs = {
    readContext: Gl,
    use: Wn,
    useCallback: Us,
    useContext: Gl,
    useEffect: kc,
    useImperativeHandle: Ds,
    useInsertionEffect: As,
    useLayoutEffect: Ns,
    useMemo: Cs,
    useReducer: $n,
    useRef: zs,
    useState: function() {
      return $n(vu);
    },
    useDebugValue: Ic,
    useDeferredValue: function(l, t) {
      var u = _l();
      return Rs(
        u,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $n(vu)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : Be(l),
        t
      ];
    },
    useSyncExternalStore: fs,
    useId: Ys,
    useHostTransitionStatus: ti,
    useFormState: Ts,
    useActionState: Ts,
    useOptimistic: function(l, t) {
      var u = _l();
      return ds(u, dl, l, t);
    },
    useMemoCache: Jc,
    useCacheRefresh: Bs,
    useEffectEvent: _s
  }, xy = {
    readContext: Gl,
    use: Wn,
    useCallback: Us,
    useContext: Gl,
    useEffect: kc,
    useImperativeHandle: Ds,
    useInsertionEffect: As,
    useLayoutEffect: Ns,
    useMemo: Cs,
    useReducer: Fc,
    useRef: zs,
    useState: function() {
      return Fc(vu);
    },
    useDebugValue: Ic,
    useDeferredValue: function(l, t) {
      var u = _l();
      return dl === null ? Pc(u, l, t) : Rs(
        u,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Fc(vu)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : Be(l),
        t
      ];
    },
    useSyncExternalStore: fs,
    useId: Ys,
    useHostTransitionStatus: ti,
    useFormState: bs,
    useActionState: bs,
    useOptimistic: function(l, t) {
      var u = _l();
      return dl !== null ? ds(u, dl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Jc,
    useCacheRefresh: Bs,
    useEffectEvent: _s
  };
  function ai(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : J({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ei = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = ht(), e = Du(a);
      e.payload = t, u != null && (e.callback = u), t = Uu(l, e, a), t !== null && (ut(t, l, a), Re(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = ht(), e = Du(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Uu(l, e, a), t !== null && (ut(t, l, a), Re(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = ht(), a = Du(u);
      a.tag = 2, t != null && (a.callback = t), t = Uu(l, a, u), t !== null && (ut(t, l, u), Re(t, l, u));
    }
  };
  function Zs(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Oe(u, a) || !Oe(e, n) : !0;
  }
  function Vs(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && ei.enqueueReplaceState(t, t.state, null);
  }
  function da(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = J({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Ls(l) {
    Dn(l);
  }
  function Ks(l) {
    console.error(l);
  }
  function Js(l) {
    Dn(l);
  }
  function tf(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ws(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ni(l, t, u) {
    return u = Du(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      tf(l, t);
    }, u;
  }
  function Fs(l) {
    return l = Du(l), l.tag = 3, l;
  }
  function Ws(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        ws(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      ws(t, u, a), typeof e != "function" && (qu === null ? qu = /* @__PURE__ */ new Set([this]) : qu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Gy(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && ea(
        t,
        u,
        e,
        !0
      ), u = Xl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Kl === null ? Of() : u.alternate === null && zl === 0 && (zl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Qn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Vi(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Qn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Vi(l, a, e)), !1;
        }
        throw Error(h(435, u.tag));
      }
      return Vi(l, a, e), Of(), !1;
    }
    if (L)
      return t = Xl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Ac && (l = Error(h(422), { cause: a }), Ne(Ot(l, u)))) : (a !== Ac && (t = Error(h(423), {
        cause: a
      }), Ne(
        Ot(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = Ot(a, u), e = ni(
        l.stateNode,
        a,
        e
      ), Yc(l, e), zl !== 4 && (zl = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = Ot(n, u), Ke === null ? Ke = [n] : Ke.push(n), zl !== 4 && (zl = 2), t === null) return !0;
    a = Ot(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ni(u.stateNode, a, l), Yc(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (qu === null || !qu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = Fs(e), Ws(
              e,
              l,
              u,
              a
            ), Yc(u, e), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var fi = Error(h(461)), Ml = !1;
  function Ul(l, t, u, a) {
    t.child = l === null ? P0(t, null, u, a) : sa(
      t,
      l.child,
      u,
      a
    );
  }
  function $s(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return na(t), a = Zc(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Vc(), l !== null && !Ml ? (Lc(l, t, e), du(l, t, e)) : (L && c && pn(t), t.flags |= 1, Ul(l, t, a, e), t.child);
  }
  function ks(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !bc(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Is(
        l,
        t,
        n,
        a,
        e
      )) : (l = Hn(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !yi(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Oe, u(f, a) && l.ref === t.ref)
        return du(l, t, e);
    }
    return t.flags |= 1, l = fu(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Is(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Oe(n, a) && l.ref === t.ref)
        if (Ml = !1, t.pendingProps = a = n, yi(l, e))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else
          return t.lanes = l.lanes, du(l, t, e);
    }
    return ci(
      l,
      t,
      u,
      a,
      e
    );
  }
  function Ps(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return lv(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Gn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? us(t, n) : qc(), as(t);
      else
        return a = t.lanes = 536870912, lv(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Gn(t, n.cachePool), us(t, n), Hu(), t.memoizedState = null) : (l !== null && Gn(t, null), qc(), Hu());
    return Ul(l, t, e, u), t.child;
  }
  function xe(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function lv(l, t, u, a, e) {
    var n = Rc();
    return n = n === null ? null : { parent: Al._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Gn(t, null), qc(), as(t), l !== null && ea(l, t, a, !0), t.childLanes = e, null;
  }
  function uf(l, t) {
    return t = af(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function tv(l, t, u) {
    return sa(t, l.child, null, u), l = uf(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function Xy(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (L) {
        if (a.mode === "hidden")
          return l = uf(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, xe(null, l);
        if (Gc(t), (l = gl) ? (l = Md(
          l,
          Nt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = x0(l), u.return = t, t.child = u, jl = t, gl = null)) : l = null, l === null) throw _u(t);
        return t.lanes = 536870912, null;
      }
      return uf(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Gc(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = tv(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (Ml || ea(l, t, u, !1), e = (u & l.childLanes) !== 0, Ml || e) {
        if (Cu.current === null) {
          if (a = yl, a !== null && (f = Qo(a, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, la(l, f), ut(a, l, f), fi;
          Of();
        }
        t = tv(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, gl = Dt(f.nextSibling), jl = t, L = !0, Ou = null, Nt = !1, l !== null && Q0(t, l), t = uf(t, a), t.flags |= 134221824;
      return t;
    }
    return l = fu(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Za(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function ci(l, t, u, a, e) {
    return na(t), u = Zc(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Vc(), l !== null && !Ml ? (Lc(l, t, e), du(l, t, e)) : (L && a && pn(t), t.flags |= 1, Ul(l, t, u, e), t.child);
  }
  function uv(l, t, u, a, e, n) {
    return na(t), t.updateQueue = null, u = ns(
      t,
      a,
      u,
      e
    ), es(l), a = Vc(), l !== null && !Ml ? (Lc(l, t, n), du(l, t, n)) : (L && a && pn(t), t.flags |= 1, Ul(l, t, u, n), t.child);
  }
  function av(l, t, u, a, e) {
    if (na(t), t.stateNode === null) {
      var n = Ha, f = u.contextType;
      typeof f == "object" && f !== null && (n = Gl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ei, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, jc(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Gl(f) : Ha, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (ai(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && ei.enqueueReplaceState(n, n.state, null), je(t, a, n, e), He(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = da(u, c);
      n.props = i;
      var m = n.context, g = u.contextType;
      f = Ha, typeof g == "object" && g !== null && (f = Gl(g));
      var E = u.getDerivedStateFromProps;
      g = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== f) && Vs(
        t,
        n,
        a,
        f
      ), Mu = !1;
      var v = t.memoizedState;
      n.state = v, je(t, a, n, e), He(), m = t.memoizedState, c || v !== m || Mu ? (typeof E == "function" && (ai(
        t,
        u,
        E,
        a
      ), m = t.memoizedState), (i = Mu || Zs(
        t,
        u,
        i,
        a,
        v,
        m,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, pc(l, t), f = t.memoizedProps, g = da(u, f), n.props = g, E = t.pendingProps, v = n.context, m = u.contextType, i = Ha, typeof m == "object" && m !== null && (i = Gl(m)), c = u.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== E || v !== i) && Vs(
        t,
        n,
        a,
        i
      ), Mu = !1, v = t.memoizedState, n.state = v, je(t, a, n, e), He();
      var r = t.memoizedState;
      f !== E || v !== r || Mu || l !== null && l.dependencies !== null && qn(l.dependencies) ? (typeof c == "function" && (ai(
        t,
        u,
        c,
        a
      ), r = t.memoizedState), (g = Mu || Zs(
        t,
        u,
        g,
        a,
        v,
        r,
        i
      ) || l !== null && l.dependencies !== null && qn(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, r, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        r,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = r), n.props = a, n.state = r, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, Za(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = sa(
      t,
      l.child,
      null,
      e
    ), t.child = sa(
      t,
      null,
      u,
      e
    )) : Ul(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = du(
      l,
      t,
      e
    ), l;
  }
  function ev(l, t, u, a) {
    return ua(), t.flags |= 256, Ul(l, t, u, a), t.child;
  }
  var ii = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function oi(l) {
    return { baseLanes: l, cachePool: w0() };
  }
  function si(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= rt), l;
  }
  function nv(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Ql.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (L) {
        if (e ? Ru(t) : Hu(), (l = gl) ? (l = Md(
          l,
          Nt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = x0(l), u.return = t, t.child = u, jl = t, gl = null)) : l = null, l === null) throw _u(t);
        return oo(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e ? (Hu(), e = t.mode, n = af(
        { mode: "hidden", children: n },
        e
      ), a = ta(
        a,
        e,
        u,
        null
      ), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = oi(u), a.childLanes = si(
        l,
        f,
        u
      ), t.memoizedState = ii, xe(null, a)) : (Ru(t), vi(t, n));
    }
    var c = l.memoizedState;
    if (c !== null) {
      var i = c.dehydrated;
      if (i !== null)
        return Qy(
          l,
          t,
          n,
          f,
          a,
          i,
          c,
          u
        );
    }
    return e ? (Hu(), e = a.fallback, n = t.mode, c = l.child, i = c.sibling, a = fu(c, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = c.subtreeFlags & 1206910976, i !== null ? e = fu(i, e) : (e = ta(
      e,
      n,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, xe(null, a), a = t.child, e = l.child.memoizedState, e === null ? e = oi(u) : (n = e.cachePool, n !== null ? (c = Al._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = w0(), e = {
      baseLanes: e.baseLanes | u,
      cachePool: n
    }), a.memoizedState = e, a.childLanes = si(
      l,
      f,
      u
    ), t.memoizedState = ii, xe(l.child, a)) : (Ru(t), u = l.child, l = u.sibling, u = fu(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function vi(l, t) {
    return t = af(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function af(l, t) {
    return l = Il(22, l, null, t), l.lanes = 0, l;
  }
  function ef(l, t, u) {
    return sa(t, l.child, null, u), l = vi(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Qy(l, t, u, a, e, n, f, c) {
    if (u)
      return t.flags & 256 ? (Ru(t), t.flags &= -257, ef(
        l,
        t,
        c
      )) : t.memoizedState !== null ? (Hu(), t.child = l.child, t.flags |= 128, null) : (Hu(), n = e.fallback, f = t.mode, e = af(
        { mode: "visible", children: e.children },
        f
      ), n = ta(
        n,
        f,
        c,
        null
      ), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, sa(t, l.child, null, c), e = t.child, e.memoizedState = oi(c), e.childLanes = si(
        l,
        a,
        c
      ), t.memoizedState = ii, xe(null, e));
    if (Ru(t), oo(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var i = a.dgst;
      return a = i, a !== "" && (e = Error(h(419)), e.stack = "", e.digest = a, Ne({ value: e, source: null, stack: null })), ef(
        l,
        t,
        c
      );
    }
    if (Ml || ea(l, t, c, !1), a = (c & l.childLanes) !== 0, Ml || a) {
      if (Cu.current !== null)
        return ef(
          l,
          t,
          c
        );
      if (a = yl, a !== null && (e = Qo(
        a,
        c
      ), e !== 0 && e !== f.retryLane))
        throw f.retryLane = e, la(l, e), ut(a, l, e), fi;
      return io(n) || Of(), ef(
        l,
        t,
        c
      );
    }
    return io(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, gl = Dt(n.nextSibling), jl = t, L = !0, Ou = null, Nt = !1, l !== null && Q0(t, l), t = vi(
      t,
      e.children
    ), t.flags |= 134221824, t);
  }
  function fv(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Bn(l.return, t, u);
  }
  function cv(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && Kn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function nf(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function di(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function mi(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = Ql.current;
    if (t.flags & 128)
      return pe(t, f), null;
    var c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, pe(t, f), e === "backwards" && l !== null ? (di(l), Ul(l, t, a, u), di(l)) : Ul(l, t, a, u), a = L ? Ae : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && fv(l, u, t);
        else if (l.tag === 19)
          fv(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "backwards":
        u = cv(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null, di(t)), nf(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Kn(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        nf(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        nf(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = cv(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), nf(
          t,
          !1,
          e,
          u,
          n,
          a
        );
    }
    return t.child;
  }
  function iv(l, t, u) {
    var a = t.pendingProps;
    return Au(t, t.type, a.value), Ul(l, t, a.children, u), t.child;
  }
  function du(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), Bu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (ea(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, u = fu(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = fu(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function yi(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && qn(l)));
  }
  function Zy(l, t, u) {
    switch (t.tag) {
      case 3:
        sn(t, t.stateNode.containerInfo), Au(t, Al, l.memoizedState.cache), ua();
        break;
      case 27:
      case 5:
        Qf(t);
        break;
      case 4:
        sn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Au(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Gc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Ru(t), t.flags |= 128, null;
          a = ea(
            l,
            t,
            u,
            !1
          );
          var e = t.child.childLanes;
          return a || (u & e) !== 0 ? nv(l, t, u) : (Ru(t), l = du(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Ru(t);
        break;
      case 19:
        if (t.flags & 128)
          return mi(
            l,
            t,
            u
          );
        if (e = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (ea(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return mi(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), pe(t, Ql.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Ps(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        Au(t, Al, l.memoizedState.cache);
    }
    return du(l, t, u);
  }
  function ov(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ml = !0;
      else {
        if (!yi(l, u) && (t.flags & 128) === 0)
          return Ml = !1, Zy(
            l,
            t,
            u
          );
        Ml = (l.flags & 131072) !== 0;
      }
    else
      Ml = !1, L && (t.flags & 1048576) !== 0 && X0(t, Ae, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = ia(t.elementType), t.type = l, typeof l == "function")
            bc(l) ? (a = da(l, a), t.tag = 1, t = av(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = ci(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === N) {
                t.tag = 11, t = $s(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === ml) {
                t.tag = 14, t = ks(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === Rl) {
                t.tag = 10, t.type = l, t = iv(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = P(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return ci(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = da(
          a,
          t.pendingProps
        ), av(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (sn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, pc(l, t), je(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Au(t, Al, a), a !== n.cache && Dc(
            t,
            [Al],
            u,
            !0
          ), He(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = ev(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = Ot(
                Error(h(424)),
                t
              ), Ne(e), t = ev(
                l,
                t,
                a,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, gl = Dt(l.firstChild), jl = t, L = !0, Ou = null, Nt = !0, u = P0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
          else {
            if (ua(), a === e) {
              t = du(
                l,
                t,
                u
              );
              break l;
            }
            Ul(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Za(l, t), l === null ? (u = pd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : L || (t.stateNode = md(
          t.type,
          t.pendingProps,
          gu.current,
          t
        )) : t.memoizedState = pd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Qf(t), l === null && L && (a = t.stateNode = Cd(
          t.type,
          t.pendingProps,
          gu.current
        ), jl = t, Nt = !0, e = gl, Xu(t.type) ? (so = e, gl = Dt(a.firstChild)) : gl = e), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), Za(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && L && ((e = a = gl) && (a = Br(
          a,
          t.type,
          t.pendingProps,
          Nt
        ), a !== null ? (t.stateNode = a, jl = t, gl = Dt(a.firstChild), Nt = !1, e = !0) : e = !1), e || _u(t)), Qf(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, to(e, n) ? a = null : f !== null && to(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Zc(
          l,
          t,
          Ry,
          null,
          null,
          u
        ), fe._currentValue = e), Za(l, t), Ul(l, t, a, u), t.child;
      case 6:
        return l === null && L && ((l = u = gl) && (u = qr(
          u,
          t.pendingProps,
          Nt
        ), u !== null ? (t.stateNode = u, jl = t, gl = null, l = !0) : l = !1), l || _u(t)), null;
      case 13:
        return nv(l, t, u);
      case 4:
        return sn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = sa(
          t,
          null,
          a,
          u
        ) : Ul(l, t, a, u), t.child;
      case 11:
        return $s(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return a = t.pendingProps, Za(l, t), Ul(l, t, a, u), t.child;
      case 8:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return iv(l, t, u);
      case 9:
        return e = t.type._context, a = t.pendingProps.children, na(t), e = Gl(e), a = a(e), t.flags |= 1, Ul(l, t, a, u), t.child;
      case 14:
        return ks(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Is(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return mi(l, t, u);
      case 31:
        return Xy(l, t, u);
      case 22:
        return Ps(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return na(t), a = Gl(Al), l === null ? (e = Rc(), e === null && (e = yl, n = Uc(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, jc(t), Au(t, Al, e)) : ((l.lanes & u) !== 0 && (pc(l, t), je(t, null, null, u), He()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Au(t, Al, a)) : (a = n.cache, Au(t, Al, a), a !== e.cache && Dc(
          t,
          [Al],
          u,
          !0
        ))), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : L && pn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : Za(l, t), Ul(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function mu(l) {
    l.flags |= 4;
  }
  function ri(l, t, u, a, e) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? xd(t, a) : xd(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Lv()) l.flags |= 8192;
        else
          throw oa = Qn, Hc;
    } else l.flags &= -16777217;
  }
  function sv(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Gd(t))
      if (Lv()) l.flags |= 8192;
      else
        throw oa = Qn, Hc;
  }
  function ff(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? xo() : 536870912, l.lanes |= t, wa |= t);
  }
  function Ge(l, t) {
    if (!L)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var u = l.tail, a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = l.tail, u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
      }
  }
  function Sl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 1206910976, a |= e.flags & 1206910976, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Vy(l, t, u) {
    var a = t.pendingProps;
    switch (_c(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sl(t), null;
      case 1:
        return Sl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ou(Al), Ta(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ya(t) ? mu(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Nc())), Sl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (mu(t), n !== null ? (Sl(t), sv(t, n)) : (Sl(t), ri(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (mu(t), Sl(t), sv(t, n)) : (Sl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && mu(t), Sl(t), ri(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (vn(t), u = gu.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && mu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return Sl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Qt.current, Ya(t) ? Z0(t) : (l = Cd(e, a, u), t.stateNode = l, mu(t));
        }
        return Sl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (vn(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && mu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return Sl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Qt.current, Ya(t))
            Z0(t);
          else {
            var f = $e(
              gu.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[xl] = t, n[kl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Vl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && mu(t);
          }
        }
        return Sl(t), t.subtreeFlags &= -33554433, ri(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && mu(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = gu.current, Ya(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = jl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[xl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || od(l.nodeValue, u)), l || _u(t, !0);
          } else
            l = $e(l).createTextNode(
              a
            ), l[xl] = t, t.stateNode = l;
        }
        return Sl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Ya(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[xl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Sl(t), l = !1;
          } else
            u = Nc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return Sl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ya(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[xl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Sl(t), e = !1;
          } else
            e = Nc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), ff(t, t.updateQueue), Sl(t), null);
      case 4:
        return Ta(), l === null && $i(t.stateNode.containerInfo), t.flags |= 67108864, Sl(t), null;
      case 10:
        return ou(t.type), Sl(t), null;
      case 19:
        if (Xc(t), a = t.memoizedState, a === null) return Sl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) Ge(a, !1);
          else {
            if (zl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Kn(l), n !== null) {
                  for (t.flags |= 128, Ge(a, !1), l = n.updateQueue, t.updateQueue = l, ff(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    q0(u, l), u = u.sibling;
                  return pe(
                    t,
                    Ql.current & 1 | 2
                  ), L && cu(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ct() > Tf && (t.flags |= 128, e = !0, Ge(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Kn(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, ff(t, l), Ge(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !L)
                return Sl(t), null;
            } else
              2 * ct() - a.renderingStartTime > Tf && u !== 536870912 && (t.flags |= 128, e = !0, Ge(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (u = l; u !== null; ) {
              if (u.alternate !== null) {
                u = !1;
                break l;
              }
              u = u.sibling;
            }
            u = !0;
          }
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ct(), l.sibling = null, n = Ql.current, n = e ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || L ? pe(t, n) : (u = n, hl(Xl, t), hl(Ql, u), Kl === null && (Kl = t)), L && cu(t, a.treeForkCount), l;
        }
        return Sl(t), null;
      case 22:
      case 23:
        return dt(t), xc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (Sl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Sl(t), u = t.updateQueue, u !== null && ff(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && ql(ca), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), ou(Al), Sl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Sl(t), null;
    }
    throw Error(h(156, t.tag));
  }
  function Ly(l, t) {
    switch (_c(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return ou(Al), Ta(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return vn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dt(t), t.alternate === null)
            throw Error(h(340));
          ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Xc(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Ta(), null;
      case 10:
        return ou(t.type), null;
      case 22:
      case 23:
        return dt(t), xc(), l !== null && ql(ca), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return ou(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function vv(l, t) {
    switch (_c(t), t.tag) {
      case 3:
        ou(Al), Ta();
        break;
      case 26:
      case 27:
      case 5:
        vn(t);
        break;
      case 4:
        Ta();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        Xc(t);
        break;
      case 10:
        ou(t.type);
        break;
      case 22:
      case 23:
        dt(t), xc(), l !== null && ql(ca);
        break;
      case 24:
        ou(Al);
    }
  }
  function Xe(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      ol(t, t.return, c);
    }
  }
  function ju(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, m = c;
              try {
                m();
              } catch (g) {
                ol(
                  e,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      ol(t, t.return, g);
    }
  }
  function dv(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        ts(t, u);
      } catch (a) {
        ol(l, l.return, a);
      }
    }
  }
  function mv(l, t, u) {
    u.props = da(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      ol(l, t, a);
    }
  }
  function Kt(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var e = l.stateNode, n = eu(l.memoizedProps, e);
            (e.ref === null || e.ref.name !== n) && (e.ref = Ed(n)), a = e.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new gt(l);
              T(
                l.child,
                !1,
                pr,
                f,
                void 0,
                void 0
              ), l.stateNode = f;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (c) {
      ol(l, t, c);
    }
  }
  function Zl(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          ol(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          ol(l, t, e);
        }
      else u.current = null;
  }
  function cf(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Nd(
          l.stateNode,
          t[u]
        );
  }
  function yv(l) {
    for (var t = l.return; t !== null && (gi(t) && Nd(l.stateNode, t.stateNode), !hi(t)); )
      t = t.return;
  }
  function Qe(l) {
    for (var t = l.return; t !== null && (gi(t) && Yr(l.stateNode, t.stateNode), !hi(t)); )
      t = t.return;
  }
  function hi(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function gi(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function Si(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      ol(l, l.return, e);
    }
  }
  function Ti(l, t, u) {
    try {
      var a = l.stateNode;
      hr(a, l.type, u, t), a[kl] = t;
    } catch (e) {
      ol(l, l.return, e);
    }
  }
  function rv(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Xu(l.type) || l.tag === 4;
  }
  function Ei(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || rv(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Xu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bi(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Zt)), cf(l, a), ll = !0;
    else if (e !== 4 && (e === 27 && (cf(l, a), a = null, Xu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (bi(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        bi(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function of(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? u.insertBefore(e, t) : u.appendChild(e), cf(l, a), ll = !0;
    else if (e !== 4 && (e === 27 && (cf(l, a), a = null, Xu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (of(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        of(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function hv(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Vl(t, a, u), t[xl] = l, t[kl] = u;
    } catch (n) {
      ol(l, l.return, n);
    }
  }
  var sf = !1, mt = null;
  function gv(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (sf = !0);
  }
  var Jt = null;
  function Sv() {
    var l = Jt;
    return Jt = null, l;
  }
  var Pl = 0;
  function Va(l, t, u, a, e) {
    return Pl = 0, Tv(
      l.child,
      t,
      u,
      a,
      e
    );
  }
  function Tv(l, t, u, a, e) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var c = eo(f);
          a.push(c), c.view && (n = !0);
        } else
          n || eo(f).view && (n = !0);
        sf = !0, Sd(
          f,
          Pl === 0 ? t : t + "_" + Pl,
          u
        ), Pl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || Tv(
        l.child,
        t,
        u,
        a,
        e
      ) && (n = !0));
      l = l.sibling;
    }
    return n;
  }
  function wt(l, t) {
    for (; l !== null; )
      l.tag === 5 ? Td(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || wt(
        l.child,
        t
      )), l = l.sibling;
  }
  function vf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (vf(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(h(544));
          var u = t.name;
          t = nu(t.default, t.share), t !== "none" && (Va(
            l,
            u,
            t,
            null,
            !1
          ) || wt(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function zi(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e = eu(a, u), n = nu(
        a.default,
        u.paired ? a.share : a.enter
      );
      n !== "none" ? Va(l, e, n, null, !1) ? (vf(l), u.paired || t || ka(l, a.onEnter)) : wt(l.child, !1) : vf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        zi(l, t), l = l.sibling;
    else vf(l);
  }
  function Oi(l) {
    if (mt !== null && mt.size !== 0) {
      var t = mt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var u = l.memoizedProps, a = u.name;
              if (a != null && a !== "auto") {
                var e = t.get(a);
                if (e !== void 0) {
                  var n = nu(
                    u.default,
                    u.share
                  );
                  if (n !== "none" && (Va(
                    l,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, e.paired = n, n.paired = e, ka(l, u.onShare)) : wt(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Oi(l);
          }
          l = l.sibling;
        }
    }
  }
  function _i(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = eu(t, l.stateNode), a = mt !== null ? mt.get(u) : void 0, e = nu(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      e !== "none" && (Va(l, u, e, null, !1) ? a !== void 0 ? (e = l.stateNode, a.paired = e, e.paired = a, mt.delete(u), ka(l, t.onShare)) : ka(l, t.onExit) : wt(l.child, !1)), mt !== null && Oi(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        _i(l), l = l.sibling;
    else
      mt !== null && Oi(l);
  }
  function Ev(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = eu(t, l.stateNode);
        t = nu(t.default, t.update), l.flags &= -5, t !== "none" && Va(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && Ev(l);
      l = l.sibling;
    }
  }
  function Ai(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, wt(l.child, !1));
          }
          Ai(l);
        }
        l = l.sibling;
      }
  }
  function df(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, wt(l.child, !1), Ai(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        df(l), l = l.sibling;
    else Ai(l);
  }
  function bv(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? wt(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && bv(l), l = l.sibling;
  }
  function Ni(l, t, u, a, e, n, f) {
    for (var c = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (n !== null && Pl < n.length) {
          var m = n[Pl], g = eo(i);
          (m.view || g.view) && (c = !0);
          var E;
          if (E = (l.flags & 4) === 0)
            if (g.clip) E = !0;
            else {
              E = m.rect;
              var v = g.rect;
              E = E.y !== v.y || E.x !== v.x || E.height !== v.height || E.width !== v.width;
            }
          E && (l.flags |= 4), g.abs ? g = !m.abs : (m = m.rect, g = g.rect, g = m.height !== g.height || m.width !== g.width), g && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && Sd(
          i,
          Pl === 0 ? u : u + "_" + Pl,
          e
        ), c && (l.flags & 4) !== 0 || (Jt === null && (Jt = []), Jt.push(
          i,
          Pl === 0 ? a : a + "_" + Pl,
          t.memoizedProps
        )), Pl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Ni(
        l,
        t.child,
        u,
        a,
        e,
        n,
        f
      ) && (c = !0));
      t = t.sibling;
    }
    return c;
  }
  function zv(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e = eu(u, a), n = nu(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, a = l;
        var c = l.child;
        Pl = 0, e = Ni(
          a,
          c,
          e,
          e,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && e && ka(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && zv(l);
      l = l.sibling;
    }
  }
  var pl = !1, cl = !1, Ft = !1, Mi = !1, Ov = typeof WeakSet == "function" ? WeakSet : Set, Yl = null, Wt = !1, Ze = !1, mf = !1, Di = !1;
  function Ky(l, t, u) {
    if (l = l.containerInfo, Pi = ce, l = M0(l), yc(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var n = e.anchorOffset, f = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0, i = -1, m = -1, g = 0, E = 0, v = l, r = null;
            t: for (; ; ) {
              for (var _; v !== a || n !== 0 && v.nodeType !== 3 || (i = c + n), v !== f || e !== 0 && v.nodeType !== 3 || (m = c + e), v.nodeType === 3 && (c += v.nodeValue.length), (_ = v.firstChild) !== null; )
                r = v, v = _;
              for (; ; ) {
                if (v === l) break t;
                if (r === a && ++g === n && (i = c), r === f && ++E === e && (m = c), (_ = v.nextSibling) !== null) break;
                v = r, r = v.parentNode;
              }
              v = _;
            }
            a = i === -1 || m === -1 ? null : { start: i, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (lo = { focusedElem: l, selectionRange: a }, ce = !1, u = (u & 335544064) === u, Yl = t, t = u ? 9270 : 1024; Yl !== null; ) {
      if (l = Yl, u && (a = l.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          u && _i(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && gv(l), yf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && _i(a), yf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && gv(l), yf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, Yl = a) : (u && Ev(l), yf(u));
      }
    }
    mt = null;
  }
  function yf(l) {
    for (; Yl !== null; ) {
      var t = Yl, u = l, a = t.alternate, e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && a !== null) {
            u = void 0, e = a.memoizedProps, a = a.memoizedState;
            var n = t.stateNode;
            try {
              var f = da(
                t.type,
                e
              );
              u = n.getSnapshotBeforeUpdate(
                f,
                a
              ), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (c) {
              ol(t, t.return, c);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9)
              co(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  co(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          u && a !== null && (u = eu(
            a.memoizedProps,
            a.stateNode
          ), e = t.memoizedProps, e = nu(e.default, e.update), e !== "none" && Va(
            a,
            u,
            e,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((e & 1024) !== 0) throw Error(h(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, Yl = a;
        break;
      }
      Yl = t.return;
    }
  }
  function _v(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $t(l, u), a & 4 && Xe(5, u);
        break;
      case 1:
        if ($t(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              ol(u, u.return, f);
            }
          else {
            var e = da(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              ol(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && dv(u), a & 512 && Kt(u, u.return);
        break;
      case 3:
        if ($t(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            ts(l, t);
          } catch (f) {
            ol(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && hv(u);
      case 26:
      case 5:
        $t(l, u), t === null && a & 4 && Si(u), a & 512 && Kt(u, u.return);
        break;
      case 12:
        $t(l, u);
        break;
      case 31:
        $t(l, u), a & 4 && Dv(l, u);
        break;
      case 13:
        $t(l, u), a & 4 && Uv(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ar.bind(
          null,
          u
        ), xr(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || pl, !a) {
          var n = t !== null && t.memoizedState !== null || cl;
          t = pl, e = cl, pl = a, (cl = n) && !e ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), pt(
            l,
            u,
            a
          )) : $t(l, u), pl = t, cl = e;
        }
        break;
      case 30:
        $t(l, u), a & 512 && Kt(u, u.return);
        break;
      case 7:
        a & 512 && Kt(u, u.return);
      default:
        $t(l, u);
    }
  }
  function Ui(l, t) {
    for (l = l.child; l !== null; )
      Av(l, t), l = l.sibling;
  }
  function Av(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var e = l.stateNode, n = l.memoizedProps.style, f = n != null && n.hasOwnProperty("display") ? n.display : null;
            e.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (i) {
          ol(l, l.return, i);
        }
        Ci(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, ll = !0;
        } catch (i) {
          ol(l, l.return, i);
        }
        break;
      case 18:
        try {
          var c = l.stateNode;
          t ? gd(c, !0) : gd(l.stateNode, !1);
        } catch (i) {
          ol(l, l.return, i);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Ui(l, t);
        break;
      default:
        Ui(l, t);
    }
  }
  function Ci(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, a = t;
          switch (u.tag) {
            case 4:
              Av(u, a);
              break l;
            case 22:
              u.memoizedState === null && Ci(u, a);
              break l;
            default:
              Ci(u, a);
          }
        }
        l = l.sibling;
      }
  }
  function Nv(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Nv(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Sn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Tl = null, lt = !1;
  function Ht(l, t, u) {
    for (u = u.child; u !== null; )
      Mv(l, t, u), u = u.sibling;
  }
  function Mv(l, t, u) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(ve, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        cl || Zl(u, t), Ht(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !cl && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        cl || Zl(u, t), Qe(u);
        var a = Tl, e = lt;
        Xu(u.type) && (Tl = u.stateNode, lt = !1), Ht(
          l,
          t,
          u
        ), Rd(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), Tl = a, lt = e;
        break;
      case 5:
        cl || Zl(u, t), Qe(u);
      case 6:
        if (u.tag === 6 && Qe(u), a = Tl, e = lt, Tl = null, Ht(
          l,
          t,
          u
        ), Tl = a, lt = e, Tl !== null)
          if (lt)
            try {
              (Tl.nodeType === 9 ? Tl.body : Tl.nodeName === "HTML" ? Tl.ownerDocument.body : Tl).removeChild(u.stateNode), ll = !0;
            } catch (n) {
              ol(
                u,
                t,
                n
              );
            }
          else
            try {
              Tl.removeChild(u.stateNode), ll = !0;
            } catch (n) {
              ol(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        Tl !== null && (lt ? (l = Tl, hd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ie(l)) : hd(Tl, u.stateNode));
        break;
      case 4:
        a = Tl, e = lt, Tl = u.stateNode.containerInfo, lt = !0, Ht(
          l,
          t,
          u
        ), Tl = a, lt = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ju(2, u, t), cl || ju(4, u, t), Ht(
          l,
          t,
          u
        );
        break;
      case 1:
        cl || (Zl(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && mv(
          u,
          t,
          a
        )), Ht(
          l,
          t,
          u
        );
        break;
      case 21:
        Ht(
          l,
          t,
          u
        );
        break;
      case 22:
        cl = (a = cl) || u.memoizedState !== null, Ht(
          l,
          t,
          u
        ), cl = a;
        break;
      case 30:
        Zl(u, t), Ht(
          l,
          t,
          u
        );
        break;
      case 7:
        cl || Zl(u, t), Ht(
          l,
          t,
          u
        );
        break;
      default:
        Ht(
          l,
          t,
          u
        );
    }
  }
  function Dv(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        ie(l);
      } catch (u) {
        ol(t, t.return, u);
      }
    }
  }
  function Uv(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ie(l);
      } catch (u) {
        ol(t, t.return, u);
      }
  }
  function Jy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ov()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Ov()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function rf(l, t) {
    var u = Jy(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = er.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Fl(l, t, u) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e], f = l, c = t, i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (Xu(i.type)) {
                Tl = i.stateNode, lt = !1;
                break l;
              }
              break;
            case 5:
              Tl = i.stateNode, lt = !1;
              break l;
            case 3:
            case 4:
              Tl = i.stateNode.containerInfo, lt = !0;
              break l;
          }
          i = i.return;
        }
        if (Tl === null) throw Error(h(160));
        Mv(f, c, n), Tl = null, lt = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Cv(t, l, u), t = t.sibling;
  }
  var jt = null;
  function Cv(l, t, u) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var n = 0; n < a.length; n++) {
            var f = a[n];
            f.ref.impl = f.nextImpl;
          }
        Fl(t, l, u), Wl(l), e & 4 && (ju(3, l, l.return), Xe(3, l), ju(5, l, l.return));
        break;
      case 1:
        Fl(t, l, u), Wl(l), e & 512 && (cl || a === null || Zl(a, a.return)), e & 64 && pl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = jt, Fl(t, l, u), Wl(l), e & 512 && (cl || a === null || Zl(a, a.return)), e & 4)
          if (e = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null)
                if (pl)
                  l.stateNode = md(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, u = l.memoizedProps, e = n.ownerDocument || n;
                    t: switch (t) {
                      case "title":
                        a = e.getElementsByTagName("title")[0], (!a || a[ye] || a[xl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = e.createElement(t), e.head.insertBefore(
                          a,
                          e.querySelector("head > title")
                        )), Vl(a, t, u), a[xl] = l, Hl(a), t = a;
                        break l;
                      case "link":
                        if (n = qd(
                          "link",
                          "href",
                          e
                        ).get(t + (u.href || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && a.getAttribute("rel") === (u.rel == null ? null : u.rel) && a.getAttribute("title") === (u.title == null ? null : u.title) && a.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), Vl(a, t, u), e.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = qd(
                          "meta",
                          "content",
                          e
                        ).get(t + (u.content || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("content") === (u.content == null ? null : "" + u.content) && a.getAttribute("name") === (u.name == null ? null : u.name) && a.getAttribute("property") === (u.property == null ? null : u.property) && a.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && a.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), Vl(a, t, u), e.head.appendChild(a);
                        break;
                      default:
                        throw Error(h(468, t));
                    }
                    a[xl] = l, Hl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                pl || ro(n, l.type, l.stateNode);
            else
              l.stateNode = Bd(
                n,
                u,
                l.memoizedProps
              );
          else
            e !== u ? (e === null ? (t = a.stateNode, t === null || cl || t.parentNode.removeChild(t)) : e.count--, u === null ? pl || ro(n, l.type, l.stateNode) : Bd(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && Ti(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Fl(t, l, u), Wl(l), e & 512 && (cl || a === null || Zl(a, a.return)), a !== null && e & 4 && Ti(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = Ft, Ft = !1, Fl(t, l, u), Ft = n, Wl(l), e & 512 && (cl || a === null || Zl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            Aa(t, ""), ll = !0;
          } catch (g) {
            ol(l, l.return, g);
          }
        }
        e & 4 && l.stateNode != null && (t = l.memoizedProps, Ti(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), e & 1024 && (Mi = !0);
        break;
      case 6:
        if (Fl(t, l, u), Wl(l), e & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, ll = !0;
          } catch (g) {
            ol(l, l.return, g);
          }
        }
        break;
      case 3:
        if (ll = !1, Cf = null, n = jt, jt = ke(t.containerInfo), Fl(t, l, u), jt = n, Wl(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ie(t.containerInfo);
          } catch (g) {
            ol(l, l.return, g);
          }
        Mi && (Mi = !1, Rv(l)), ll = !1;
        break;
      case 4:
        e = Ft, Ft = pl, a = ko(), n = jt, jt = ke(
          l.stateNode.containerInfo
        ), Fl(t, l, u), Wl(l), jt = n, ll && Ze && (mf = !0), ll = a, Ft = e;
        break;
      case 12:
        Fl(t, l, u), Wl(l);
        break;
      case 31:
        Fl(t, l, u), Wl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, rf(l, t)));
        break;
      case 13:
        Fl(t, l, u), Wl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Sf = ct()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, rf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var c = pl, i = cl, m = Ft;
        pl = c || n, Ft = m || n, cl = i || f, Fl(t, l, u), cl = i, Ft = m, pl = c, Wl(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || pl || cl || (t = f || cl, u = pl, a = cl, pl = n || pl, cl = t, pu(l, 2), pl = u, cl = a), !n && Ft || Ui(l, n)), e & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, rf(l, u))));
        break;
      case 19:
        Fl(t, l, u), Wl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, rf(l, t)));
        break;
      case 30:
        e & 512 && (cl || a === null || Zl(a, a.return)), e = ko(), n = Ze, f = (u & 335544064) === u, c = l.memoizedProps, Ze = f && nu(
          c.default,
          c.update
        ) !== "none", Fl(t, l, u), Wl(l), f && a !== null && ll && (l.flags |= 4), Ze = n, ll = e;
        break;
      case 21:
        break;
      case 7:
        e & 512 && (cl || a === null || Zl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        Fl(t, l, u), Wl(l);
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (rv(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null; ) {
          if (gi(e)) {
            var n = e.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (hi(e)) break;
          e = e.return;
        }
        var f = a;
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var c = u.stateNode, i = Ei(l);
            of(
              l,
              i,
              c,
              f
            );
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Aa(m, ""), u.flags &= -33);
            var g = Ei(l);
            of(
              l,
              g,
              m,
              f
            );
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, v = Ei(l);
            bi(
              l,
              v,
              E,
              f
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (r) {
        ol(l, l.return, r);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Rv(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Rv(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, ce = !0, t.reset(), ce = !1), l = l.sibling;
      }
  }
  function La(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Hv(t, l), t = t.sibling;
    else zv(t);
  }
  function Hv(l, t) {
    var u = l.alternate;
    if (u === null) zi(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Di = Wt = !1, Sv(), La(t, l), !Wt && !mf) {
            if (l = Jt, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var e = l[a + 1];
                Td(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + e + ")"
                  }
                );
              }
            l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), l.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Di = !0;
          }
          Jt = null;
          break;
        case 5:
          La(t, l);
          break;
        case 4:
          a = Wt, Wt = !1, La(t, l), Wt && (mf = !0), Wt = a;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? zi(l, !1) : La(t, l));
          break;
        case 30:
          a = Wt, e = Sv(), Wt = !1, La(t, l), Wt && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = eu(n, f), f = eu(u.memoizedProps, f);
          var c = nu(n.default, n.update);
          c === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, Pl = 0, t = Ni(
            l,
            u,
            t,
            f,
            c,
            n,
            !0
          ), Pl !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (ka(
            l,
            l.memoizedProps.onUpdate
          ), Jt = e) : e !== null && (e.push.apply(e, Jt), Jt = e), Wt = (l.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          La(t, l);
      }
  }
  function $t(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        _v(l, t.alternate, t), t = t.sibling;
  }
  function pu(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ju(4, u, u.return), pu(
            u,
            a
          );
          break;
        case 1:
          Zl(u, u.return);
          var e = u.stateNode;
          typeof e.componentWillUnmount == "function" && mv(
            u,
            u.return,
            e
          ), pu(
            u,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Rd(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Zl(u, u.return), u.tag !== 5 && u.tag !== 27 || Qe(u), pu(
            u,
            a
          );
          break;
        case 6:
          Qe(u);
          break;
        case 26:
          Zl(u, u.return), e = u.stateNode, u.memoizedState !== null || e === null || cl || e.parentNode.removeChild(e), pu(
            u,
            a
          );
          break;
        case 22:
          u.memoizedState === null && pu(
            u,
            a
          );
          break;
        case 30:
          Zl(u, u.return), pu(
            u,
            a
          );
          break;
        case 7:
          Zl(u, u.return);
        default:
          pu(
            u,
            a
          );
      }
      l = l.sibling;
    }
  }
  function pt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags, c = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          pt(
            e,
            n,
            u
          ), Xe(4, n);
          break;
        case 1:
          if (pt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (g) {
              ol(a, a.return, g);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var i = a.stateNode;
            try {
              var m = e.shared.hiddenCallbacks;
              if (m !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < m.length; e++)
                  ls(m[e], i);
            } catch (g) {
              ol(a, a.return, g);
            }
          }
          c && f & 64 && dv(n), Kt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && hv(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || yv(n), pt(
            e,
            n,
            u
          ), c && a === null && f & 4 && Si(n), Kt(n, n.return);
          break;
        case 6:
          yv(n);
          break;
        case 26:
          i = n.stateNode, n.memoizedState !== null || i === null || pl || ro(
            ke(i.ownerDocument),
            n.type,
            i
          ), pt(
            e,
            n,
            u
          ), c && a === null && f & 4 && Si(n), Kt(n, n.return);
          break;
        case 12:
          pt(
            e,
            n,
            u
          );
          break;
        case 31:
          pt(
            e,
            n,
            u
          ), c && f & 4 && Dv(e, n);
          break;
        case 13:
          pt(
            e,
            n,
            u
          ), c && f & 4 && Uv(e, n);
          break;
        case 22:
          n.memoizedState === null && pt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 30:
          pt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 7:
          Kt(n, n.return);
        default:
          pt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Ri(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Me(u));
  }
  function Hi(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Me(l));
  }
  function Mt(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256))
      for (t = t.child; t !== null; )
        jv(
          l,
          t,
          u,
          a
        ), t = t.sibling;
    else e && bv(t);
  }
  function jv(l, t, u, a) {
    var e = (u & 335544064) === u;
    e && t.alternate === null && t.return !== null && t.return.alternate !== null && df(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(
          l,
          t,
          u,
          a
        ), n & 2048 && Xe(9, t);
        break;
      case 1:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Mt(
          l,
          t,
          u,
          a
        ), e && Di && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Me(n)));
        break;
      case 12:
        if (n & 2048) {
          Mt(
            l,
            t,
            u,
            a
          ), n = t.stateNode;
          try {
            var f = t.memoizedProps, c = f.id, i = f.onPostCommit;
            typeof i == "function" && i(
              c,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (m) {
            ol(t, t.return, m);
          }
        } else
          Mt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, c = t.alternate, t.memoizedState !== null ? (e && c !== null && c.memoizedState === null && df(c), f._visibility & 2 ? Mt(
          l,
          t,
          u,
          a
        ) : Ve(
          l,
          t
        )) : (e && c !== null && c.memoizedState !== null && df(t), f._visibility & 2 ? Mt(
          l,
          t,
          u,
          a
        ) : (f._visibility |= 2, Ka(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && Ri(c, t);
        break;
      case 24:
        Mt(
          l,
          t,
          u,
          a
        ), n & 2048 && Hi(t.alternate, t);
        break;
      case 30:
        e && (n = t.alternate, n !== null && (wt(n.child, !0), wt(t.child, !0))), Mt(
          l,
          t,
          u,
          a
        );
        break;
      default:
        Mt(
          l,
          t,
          u,
          a
        );
    }
  }
  function Ka(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ka(
            n,
            f,
            c,
            i,
            e
          ), Xe(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? Ka(
            n,
            f,
            c,
            i,
            e
          ) : Ve(
            n,
            f
          ) : (g._visibility |= 2, Ka(
            n,
            f,
            c,
            i,
            e
          )), e && m & 2048 && Ri(
            f.alternate,
            f
          );
          break;
        case 24:
          Ka(
            n,
            f,
            c,
            i,
            e
          ), e && m & 2048 && Hi(f.alternate, f);
          break;
        default:
          Ka(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Ve(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Ve(u, a), e & 2048 && Ri(
              a.alternate,
              a
            );
            break;
          case 24:
            Ve(u, a), e & 2048 && Hi(a.alternate, a);
            break;
          default:
            Ve(u, a);
        }
        t = t.sibling;
      }
  }
  var ma = 8192;
  function ya(l, t, u) {
    if (l.subtreeFlags & ma)
      for (l = l.child; l !== null; )
        pv(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function pv(l, t, u) {
    switch (l.tag) {
      case 26:
        ya(
          l,
          t,
          u
        ), l.flags & ma && (l.memoizedState !== null ? Ir(
          u,
          jt,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Qd(u, l)));
        break;
      case 5:
        ya(
          l,
          t,
          u
        ), l.flags & ma && (l = l.stateNode, (t & 335544128) === t && Qd(u, l));
        break;
      case 3:
      case 4:
        var a = jt;
        jt = ke(l.stateNode.containerInfo), ya(
          l,
          t,
          u
        ), jt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ma, ma = 16777216, ya(
          l,
          t,
          u
        ), ma = a) : ya(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & ma) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var e = l.stateNode;
          e.paired = null, mt === null && (mt = /* @__PURE__ */ new Map()), mt.set(a, e);
        }
        ya(
          l,
          t,
          u
        );
        break;
      default:
        ya(
          l,
          t,
          u
        );
    }
  }
  function Yv(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Le(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Yl = a, qv(
            a,
            l
          );
        }
      Yv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Bv(l), l = l.sibling;
  }
  function Bv(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Le(l), l.flags & 2048 && ju(9, l, l.return);
        break;
      case 3:
        Le(l);
        break;
      case 12:
        Le(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hf(l)) : Le(l);
        break;
      default:
        Le(l);
    }
  }
  function hf(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Yl = a, qv(
            a,
            l
          );
        }
      Yv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ju(8, t, t.return), hf(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, hf(t));
          break;
        default:
          hf(t);
      }
      l = l.sibling;
    }
  }
  function qv(l, t) {
    for (; Yl !== null; ) {
      var u = Yl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ju(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Me(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Yl = a;
      else
        l: for (u = l; Yl !== null; ) {
          a = Yl;
          var e = a.sibling, n = a.return;
          if (Nv(a), a === u) {
            Yl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Yl = e;
            break l;
          }
          Yl = n;
        }
    }
  }
  var wy = {
    getCacheForType: function(l) {
      var t = Gl(Al), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Gl(Al).controller.signal;
    }
  }, Fy = typeof WeakMap == "function" ? WeakMap : Map, el = 0, yl = null, w = null, W = 0, il = 0, yt = null, Yu = !1, Ja = !1, ji = !1, yu = 0, zl = 0, Bu = 0, ra = 0, gf = 0, rt = 0, wa = 0, Ke = null, tt = null, pi = !1, Sf = 0, xv = 0, Tf = 1 / 0, Ef = null, qu = null, El = 0, Yt = null, ha = null, kt = 0, Yi = 0, Bi = null, Gv = null, Fa = null, Wa = null, $a = null, Je = 0, bf = null;
  function ht() {
    return (el & 2) !== 0 && W !== 0 ? W & -W : U.T !== null ? Ji() : Zo();
  }
  function Xv() {
    if (rt === 0)
      if ((W & 536870912) === 0 || L) {
        var l = yn;
        yn <<= 1, (yn & 3932160) === 0 && (yn = 262144), rt = l;
      } else rt = 536870912;
    return l = Xl.current, l !== null && (l.flags |= 32), rt;
  }
  function ka(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = Ed(
        eu(l.memoizedProps, u)
      )), Wa === null && (Wa = []), Wa.push(t.bind(null, a));
    }
  }
  function ut(l, t, u) {
    (l === yl && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (Ia(l, 0), xu(
      l,
      W,
      rt,
      !1
    )), me(l, u), ((el & 2) === 0 || l !== yl) && (l === yl && ((el & 2) === 0 && (ra |= u), zl === 4 && xu(
      l,
      W,
      rt,
      !1
    )), It(l));
  }
  function Qv(l, t, u) {
    if ((el & 6) !== 0) throw Error(h(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || de(l, t), e = a ? ky(l, t) : xi(l, t, !0), n = a;
    do {
      if (e === 0) {
        Ja && !a && xu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Wy(u)) {
          e = xi(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = Ke;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (Ia(c, f).flags |= 256), f = xi(
                c,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (ji && !i) {
                  c.errorRecoveryDisabledLanes |= n, ra |= n, e = 4;
                  break l;
                }
                n = tt, tt = e, n !== null && (tt === null ? tt = n : tt.push.apply(
                  tt,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          Ia(l, 0), xu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              xu(
                a,
                t,
                rt,
                !Yu
              );
              break l;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = Sf + 300 - ct(), 10 < e)) {
            if (xu(
              a,
              t,
              rt,
              !Yu
            ), hn(a, 0, !0) !== 0) break l;
            kt = t, a.timeoutHandle = ao(
              Zv.bind(
                null,
                a,
                u,
                tt,
                Ef,
                pi,
                t,
                rt,
                ra,
                wa,
                Yu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          Zv(
            a,
            u,
            tt,
            Ef,
            pi,
            t,
            rt,
            ra,
            wa,
            Yu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    It(l);
  }
  function Zv(l, t, u, a, e, n, f, c, i, m, g, E, v, r) {
    l.timeoutHandle = -1;
    var _ = t.subtreeFlags, D = (n & 335544064) === n;
    if (E = null, (D || _ & 8192 || (_ & 16785408) === 16785408) && (E = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Zt
    }, mt = null, pv(
      t,
      n,
      E
    ), D && (_ = E, D = l.containerInfo, D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition, D != null && (_.count++, _.waitingForViewTransition = !0, _ = ln.bind(_), D.finished.then(_, _))), _ = (n & 62914560) === n ? Sf - ct() : (n & 4194048) === n ? xv - ct() : 0, _ = Pr(
      E,
      _
    ), _ !== null)) {
      kt = n, l.cancelPendingCommit = _(
        $v.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          m,
          g,
          E,
          null,
          v,
          r
        )
      ), xu(l, n, f, !m);
      return;
    }
    $v(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i,
      m,
      g,
      E
    );
  }
  function Wy(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!vt(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function xu(l, t, u, a) {
    t = qo(l, t), t &= ~gf, t &= ~ra, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ot(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && Go(l, u, t);
  }
  function zf() {
    return (el & 6) === 0 ? (we(0), !1) : !0;
  }
  function qi() {
    if (w !== null) {
      if (il === 0)
        var l = w.return;
      else
        l = w, iu = aa = null, Kc(l), xa = null, Ce = 0, l = w;
      for (; l !== null; )
        vv(l.alternate, l), l = l.return;
      w = null;
    }
  }
  function Ia(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Tr(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), kt = 0, qi(), yl = l, w = u = fu(l.current, null), W = t, il = 0, yt = null, Yu = !1, Ja = de(l, t), ji = !1, wa = rt = gf = ra = Bu = zl = 0, tt = Ke = null, pi = !1, yu = qo(l, t), Un(), u;
  }
  function Vv(l, t) {
    Z = null, U.H = lf, t === qa || t === Xn ? (t = $0(), il = 3) : t === Hc ? (t = $0(), il = 4) : il = t === fi ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yt = t, w === null && (zl = 1, tf(
      l,
      Ot(t, l.current)
    ));
  }
  function Lv() {
    var l = Xl.current;
    return l === null ? !0 : (W & 4194048) === W ? Kl === null : (W & 62914560) === W || (W & 536870912) !== 0 ? l === Kl : !1;
  }
  function Kv() {
    var l = U.H;
    return U.H = lf, l === null ? lf : l;
  }
  function Jv() {
    var l = U.A;
    return U.A = wy, l;
  }
  function Of() {
    zl = 4, Yu || (W & 4194048) !== W && Xl.current !== null || (Ja = !0), (Bu & 134217727) === 0 && (ra & 134217727) === 0 || yl === null || xu(
      yl,
      W,
      rt,
      !1
    );
  }
  function xi(l, t, u) {
    var a = el;
    el |= 2;
    var e = Kv(), n = Jv();
    (yl !== l || W !== t) && (Ef = null, Ia(l, t)), t = !1;
    var f = zl;
    l: do
      try {
        if (il !== 0 && w !== null) {
          var c = w, i = yt;
          switch (il) {
            case 8:
              qi(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Xl.current === null && (t = !0);
              var m = il;
              if (il = 0, yt = null, Pa(l, c, i, m), u && Ja) {
                f = 0;
                break l;
              }
              break;
            default:
              m = il, il = 0, yt = null, Pa(l, c, i, m);
          }
        }
        $y(), f = zl;
        break;
      } catch (g) {
        Vv(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, iu = aa = null, el = a, U.H = e, U.A = n, w === null && (yl = null, W = 0, Un()), f;
  }
  function $y() {
    for (; w !== null; ) wv(w);
  }
  function ky(l, t) {
    var u = el;
    el |= 2;
    var a = Kv(), e = Jv();
    yl !== l || W !== t ? (Ef = null, Tf = ct() + 500, Ia(l, t)) : Ja = de(
      l,
      t
    );
    l: do
      try {
        if (il !== 0 && w !== null) {
          t = w;
          var n = yt;
          t: switch (il) {
            case 1:
              il = 0, yt = null, Pa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (F0(n)) {
                il = 0, yt = null, Fv(t);
                break;
              }
              t = function() {
                il !== 2 && il !== 9 || yl !== l || (il = 7), It(l);
              }, n.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              F0(n) ? (il = 0, yt = null, Fv(t)) : (il = 0, yt = null, Pa(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (w.tag) {
                case 26:
                  f = w.memoizedState;
                case 5:
                case 27:
                  var c = w;
                  if (f ? Gd(f) : c.stateNode.complete) {
                    il = 0, yt = null;
                    var i = c.sibling;
                    if (i !== null) w = i;
                    else {
                      var m = c.return;
                      m !== null ? (w = m, _f(m)) : w = null;
                    }
                    break t;
                  }
              }
              il = 0, yt = null, Pa(l, t, n, 5);
              break;
            case 6:
              il = 0, yt = null, Pa(l, t, n, 6);
              break;
            case 8:
              qi(), zl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        Iy();
        break;
      } catch (g) {
        Vv(l, g);
      }
    while (!0);
    return iu = aa = null, U.H = a, U.A = e, el = u, w !== null ? 0 : (yl = null, W = 0, Un(), zl);
  }
  function Iy() {
    for (; w !== null && !rm(); )
      wv(w);
  }
  function wv(l) {
    var t = ov(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, t === null ? _f(l) : w = t;
  }
  function Fv(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = uv(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          W
        );
        break;
      case 11:
        t = uv(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          W
        );
        break;
      case 5:
        Kc(t);
        var a = t;
        a === jl && (L ? (Yn(a), a.tag === 5 && a.stateNode != null && (gl = a.stateNode)) : (Yn(a), L = !0));
      default:
        vv(u, t), t = w = q0(t, yu), t = ov(u, t, yu);
    }
    l.memoizedProps = l.pendingProps, t === null ? _f(l) : w = t;
  }
  function Pa(l, t, u, a) {
    iu = aa = null, Kc(t), xa = null, Ce = 0;
    var e = t.return;
    try {
      if (Gy(
        l,
        e,
        t,
        u,
        W
      )) {
        zl = 1, tf(
          l,
          Ot(u, l.current)
        ), w = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw w = e, n;
      zl = 1, tf(
        l,
        Ot(u, l.current)
      ), w = null;
      return;
    }
    t.flags & 32768 ? (L || a === 1 ? l = !0 : Ja || (W & 536870912) !== 0 ? l = !1 : (Yu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Xl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Wv(t, l)) : _f(t);
  }
  function _f(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Wv(
          t,
          Yu
        );
        return;
      }
      l = t.return;
      var u = Vy(
        t.alternate,
        t,
        yu
      );
      if (u !== null) {
        w = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    zl === 0 && (zl = 5);
  }
  function Wv(l, t) {
    do {
      var u = Ly(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, w = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        w = l;
        return;
      }
      w = l = u;
    } while (l !== null);
    zl = 6, w = null;
  }
  function $v(l, t, u, a, e, n, f, c, i, m, g, E) {
    l.cancelPendingCommit = null;
    do
      Af();
    while (El !== 0);
    if ((el & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      l === yl && (w = yl = null, W = 0), ha = t, Yt = l, kt = u, Bi = e, Gv = a, Py(
        l,
        t,
        u,
        f,
        c,
        i,
        E
      );
    }
  }
  function Py(l, t, u, a, e, n, f) {
    var c = t.lanes | t.childLanes;
    if (Yi = c, c |= Tc, Am(
      l,
      u,
      c,
      a,
      e,
      n
    ), Wa = null, (u & 335544064) === u ? ($a = My(l), a = 10262) : ($a = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, nr(dn, function() {
      return Zi(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), sf = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = U.T, U.T = null, e = X.p, X.p = 2, n = el, el |= 4;
      try {
        Ky(l, t, u);
      } finally {
        el = n, X.p = e, U.T = a;
      }
    }
    El = 1, sf ? Fa = Ar(
      f,
      l.containerInfo,
      $a,
      Gi,
      Xi,
      tr,
      Qi,
      Zi,
      lr
    ) : (Gi(), Xi(), Qi());
  }
  function lr(l) {
    if (El !== 0) {
      var t = Yt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function tr() {
    El === 3 && (El = 0, Hv(ha, Yt), El = 4);
  }
  function Gi() {
    if (El === 1) {
      El = 0;
      var l = Yt, t = ha, u = kt, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var e = X.p;
        X.p = 2;
        var n = el;
        el |= 4;
        try {
          Ze = mf = !1, Cv(t, l, u), u = lo;
          var f = M0(l.containerInfo), c = u.focusedElem, i = u.selectionRange;
          if (f !== c && c && c.ownerDocument && N0(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && yc(c)) {
              var m = i.start, g = i.end;
              if (g === void 0 && (g = m), "selectionStart" in c)
                c.selectionStart = m, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var E = c.ownerDocument || document, v = E && E.defaultView || window;
                if (v.getSelection) {
                  var r = v.getSelection(), _ = c.textContent.length, D = Math.min(i.start, _), V = i.end === void 0 ? D : Math.min(i.end, _);
                  !r.extend && D > V && (f = V, V = D, D = f);
                  var d = A0(
                    c,
                    D
                  ), o = A0(
                    c,
                    V
                  );
                  if (d && o && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== o.node || r.focusOffset !== o.offset)) {
                    var y = E.createRange();
                    y.setStart(d.node, d.offset), r.removeAllRanges(), D > V ? (r.addRange(y), r.extend(o.node, o.offset)) : (y.setEnd(o.node, o.offset), r.addRange(y));
                  }
                }
              }
            }
            for (E = [], r = c; r = r.parentNode; )
              r.nodeType === 1 && E.push({
                element: r,
                left: r.scrollLeft,
                top: r.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
              var S = E[c];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          ce = !!Pi, lo = Pi = null;
        } finally {
          el = n, X.p = e, U.T = a;
        }
      }
      l.current = t, El = 2;
    }
  }
  function Xi() {
    if (El === 2) {
      El = 0;
      var l = Yt, t = ha, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = U.T, U.T = null;
        var a = X.p;
        X.p = 2;
        var e = el;
        el |= 4;
        try {
          _v(l, t.alternate, t);
        } finally {
          el = e, X.p = a, U.T = u;
        }
      }
      El = 3;
    }
  }
  function Qi() {
    if (El === 4 || El === 3) {
      El = 0;
      var l = Fa;
      Fa = null, hm();
      var t = Yt, u = ha, a = kt, e = Gv, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? El = 5 : (El = 0, ha = Yt = null, kv(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (qu = null), $f(a), u = u.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            ve,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        u = U.T, n = X.p, X.p = 2, U.T = null;
        try {
          for (var f = t.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            f(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          U.T = u, X.p = n;
        }
      }
      if (e = Wa, f = $a, $a = null, e !== null && (Wa = null, f === null && (f = []), l !== null))
        for (i = 0; i < e.length; i++)
          u = (0, e[i])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (kt & 3) !== 0 && Af(), It(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === bf ? Je++ : (Je = 0, bf = t) : (Je = 0, bf = null), we(0);
    }
  }
  function kv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Me(t)));
  }
  function Af() {
    return Fa !== null && (Fa.skipTransition(), Fa = null), Gi(), Xi(), Qi(), Zi();
  }
  function Zi() {
    if (El !== 5) return !1;
    var l = Yt, t = Yi;
    Yi = 0;
    var u = $f(kt), a = U.T, e = X.p;
    try {
      X.p = 32 > u ? 32 : u, U.T = null, u = Bi, Bi = null;
      var n = Yt, f = kt;
      if (El = 0, ha = Yt = null, kt = 0, (el & 6) !== 0) throw Error(h(331));
      var c = el;
      if (el |= 4, Bv(n.current), jv(
        n,
        n.current,
        f,
        u
      ), el = c, we(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(ve, n);
        } catch {
        }
      return !0;
    } finally {
      X.p = e, U.T = a, kv(l, t);
    }
  }
  function Iv(l, t, u) {
    t = Ot(u, t), t = ni(l.stateNode, t, 2), l = Uu(l, t, 2), l !== null && (me(l, 2), It(l));
  }
  function ol(l, t, u) {
    if (l.tag === 3)
      Iv(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Iv(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (qu === null || !qu.has(a))) {
            l = Ot(u, l), u = Fs(2), a = Uu(t, u, 2), a !== null && (Ws(
              u,
              a,
              t,
              l
            ), me(a, 2), It(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vi(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Fy();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (ji = !0, e.add(u), l = ur.bind(null, l, t, u), t.then(l, l));
  }
  function ur(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, yl === l && (W & u) === u && ((zl === 4 || zl === 3 && (W & 62914560) === W && 300 > ct() - Sf) && (el & 2) === 0 ? Ia(l, 0) : gf |= u, wa === W && (wa = 0)), It(l);
  }
  function Pv(l, t) {
    t === 0 && (t = xo()), l = la(l, t), l !== null && (me(l, t), It(l));
  }
  function ar(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), Pv(l, u);
  }
  function er(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), Pv(l, u);
  }
  function nr(l, t) {
    return Jf(l, t);
  }
  var le = null, te = null, Li = !1, Nf = !1, Ki = !1, Gu = 0;
  function It(l) {
    l !== te && l.next === null && (te === null ? le = te = l : te = te.next = l), Nf = !0, Li || (Li = !0, cr());
  }
  function we(l, t) {
    if (!Ki && Nf) {
      Ki = !0;
      do
        for (var u = !1, a = le; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - ot(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, ad(a, n));
          } else
            n = W, n = hn(
              a,
              a === yl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || de(a, n) || (u = !0, ad(a, n));
          a = a.next;
        }
      while (u);
      Ki = !1;
    }
  }
  function fr() {
    ld();
  }
  function ld() {
    Nf = Li = !1;
    var l = 0;
    Gu !== 0 && Sr() && (l = Gu);
    for (var t = ct(), u = null, a = le; a !== null; ) {
      var e = a.next, n = td(a, t);
      n === 0 ? (a.next = null, u === null ? le = e : u.next = e, e === null && (te = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Nf = !0)), a = e;
    }
    El !== 0 && El !== 5 || we(l), Gu !== 0 && (Gu = 0);
  }
  function td(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ot(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = _m(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = yl, u = W, u = hn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && wf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || de(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && wf(a), $f(u)) {
        case 2:
        case 8:
          u = Yo;
          break;
        case 32:
          u = dn;
          break;
        case 268435456:
          u = Bo;
          break;
        default:
          u = dn;
      }
      return a = ud.bind(null, l), u = Jf(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && wf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ud(l, t) {
    if (El !== 0 && El !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Af() && l.callbackNode !== u)
      return null;
    var a = W;
    return a = hn(
      l,
      l === yl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Qv(l, a, t), td(l, ct()), l.callbackNode != null && l.callbackNode === u ? ud.bind(null, l) : null);
  }
  function ad(l, t) {
    if (Af()) return null;
    Qv(l, t, !0);
  }
  function cr() {
    Er(function() {
      (el & 6) !== 0 ? Jf(
        po,
        fr
      ) : ld();
    });
  }
  function Ji() {
    if (Gu === 0) {
      var l = fa;
      l === 0 && (l = mn, mn <<= 1, (mn & 261888) === 0 && (mn = 256)), Gu = l;
    }
    return Gu;
  }
  function ed(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : bn(l);
  }
  function ir(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = ed(
        (e[kl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[kl] || null) ? ed(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new An(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Gu !== 0) {
                  var i = new FormData(e, f);
                  li(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = new FormData(e, f), li(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var wi = 0; wi < Sc.length; wi++) {
    var Fi = Sc[wi], or = Fi.toLowerCase(), sr = Fi[0].toUpperCase() + Fi.slice(1);
    Rt(
      or,
      "on" + sr
    );
  }
  Rt(C0, "onAnimationEnd"), Rt(R0, "onAnimationIteration"), Rt(H0, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(Ty, "onTransitionRun"), Rt(Ey, "onTransitionStart"), Rt(by, "onTransitionCancel"), Rt(j0, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), ku(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ku(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ku("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ku(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ku(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ku(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vr = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fe)
  );
  function nd(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, m = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              Dn(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, m = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              Dn(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function F(l, t) {
    var u = t[Lo];
    u === void 0 && (u = t[Lo] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (fd(t, l, 2, !1), u.add(a));
  }
  function Wi(l, t, u) {
    var a = 0;
    t && (a |= 4), fd(
      u,
      l,
      a,
      t
    );
  }
  var Mf = "_reactListening" + Math.random().toString(36).slice(2);
  function $i(l) {
    if (!l[Mf]) {
      l[Mf] = !0, wo.forEach(function(u) {
        u !== "selectionchange" && (vr.has(u) || Wi(u, !1, l), Wi(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Mf] || (t[Mf] = !0, Wi("selectionchange", !1, t));
    }
  }
  function fd(l, t, u, a) {
    switch (Wd(t)) {
      case 2:
        var e = ah;
        break;
      case 8:
        e = eh;
        break;
      default:
        e = go;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ec || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function ki(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = $u(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    f0(function() {
      var m = n, g = uc(u), E = [];
      l: {
        var v = p0.get(l);
        if (v !== void 0) {
          var r = An, _ = l;
          switch (l) {
            case "keypress":
              if (On(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = Wm;
              break;
            case "focusin":
              _ = "focus", r = ic;
              break;
            case "focusout":
              _ = "blur", r = ic;
              break;
            case "beforeblur":
            case "afterblur":
              r = ic;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = o0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = qm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = ly;
              break;
            case C0:
            case R0:
            case H0:
              r = Xm;
              break;
            case j0:
              r = uy;
              break;
            case "scroll":
            case "scrollend":
              r = Ym;
              break;
            case "wheel":
              r = ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Zm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = v0;
              break;
            case "submit":
              r = Im;
              break;
            case "toggle":
            case "beforetoggle":
              r = fy;
          }
          var D = (t & 4) !== 0, V = !D && (l === "scroll" || l === "scrollend"), d = D ? v !== null ? v + "Capture" : null : v;
          D = [];
          for (var o = m, y; o !== null; ) {
            var S = o;
            if (y = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || y === null || d === null || (S = he(o, d), S != null && D.push(
              We(o, S, y)
            )), V) break;
            o = o.return;
          }
          0 < D.length && (v = new r(
            v,
            _,
            null,
            u,
            g
          ), E.push({ event: v, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (r = l === "mouseover" || l === "pointerover", v = l === "mouseout" || l === "pointerout", r && u !== tc && (_ = u.relatedTarget || u.fromElement) && ($u(_) || _[Ea]))
            break l;
          (v || r) && (_ = g.window === g ? g : (r = g.ownerDocument) ? r.defaultView || r.parentWindow : window, v ? (r = u.relatedTarget || u.toElement, v = m, r = r ? $u(r) : null, r !== null && (V = K(r), D = r.tag, r !== V || D !== 5 && D !== 27 && D !== 6) && (r = null)) : (v = null, r = m), v !== r && (D = o0, S = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (D = v0, S = "onPointerLeave", d = "onPointerEnter", o = "pointer"), V = v == null ? _ : re(v), y = r == null ? _ : re(r), _ = new D(
            S,
            o + "leave",
            v,
            u,
            g
          ), _.target = V, _.relatedTarget = y, S = null, $u(g) === m && (D = new D(
            d,
            o + "enter",
            r,
            u,
            g
          ), D.target = y, D.relatedTarget = V, S = D), V = S, D = v && r ? nt(
            v,
            r,
            dr
          ) : null, v !== null && cd(
            E,
            _,
            v,
            D,
            !1
          ), r !== null && V !== null && cd(
            E,
            V,
            r,
            D,
            !0
          )));
        }
        l: {
          if (v = m ? re(m) : window, r = v.nodeName && v.nodeName.toLowerCase(), r === "select" || r === "input" && v.type === "file")
            var M = T0;
          else if (g0(v))
            if (E0)
              M = hy;
            else {
              M = yy;
              var $ = my;
            }
          else
            r = v.nodeName, !r || r.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && lc(m.elementType) && (M = T0) : M = ry;
          if (M && (M = M(l, m))) {
            S0(
              E,
              M,
              u,
              g
            );
            break l;
          }
          $ && $(l, v, m);
        }
        switch ($ = m ? re(m) : window, l) {
          case "focusin":
            (g0($) || $.contentEditable === "true") && (Ua = $, rc = m, _e = null);
            break;
          case "focusout":
            _e = rc = Ua = null;
            break;
          case "mousedown":
            hc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hc = !1, D0(E, u, g);
            break;
          case "selectionchange":
            if (Sy) break;
          case "keydown":
          case "keyup":
            D0(E, u, g);
        }
        var C;
        if (sc)
          l: {
            switch (l) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break l;
              case "compositionend":
                Y = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break l;
            }
            Y = void 0;
          }
        else
          Da ? r0(l, u) && (Y = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Y = "onCompositionStart");
        Y && (d0 && u.locale !== "ko" && (Da || Y !== "onCompositionStart" ? Y === "onCompositionEnd" && Da && (C = c0()) : (Eu = g, nc = "value" in Eu ? Eu.value : Eu.textContent, Da = !0)), $ = Df(m, Y), 0 < $.length && (Y = new s0(
          Y,
          l,
          null,
          u,
          g
        ), E.push({ event: Y, listeners: $ }), C ? Y.data = C : (C = h0(u), C !== null && (Y.data = C)))), (C = iy ? oy(l, u) : sy(l, u)) && (Y = Df(m, "onBeforeInput"), 0 < Y.length && ($ = new s0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), E.push({
          event: $,
          listeners: Y
        }), $.data = C)), ir(
          E,
          l,
          m,
          u,
          g
        );
      }
      nd(E, t);
    });
  }
  function We(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Df(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = he(l, u), e != null && a.unshift(
        We(l, e, n)
      ), e = he(l, t), e != null && a.push(
        We(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function dr(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function cd(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, m = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || m === null || (i = m, e ? (m = he(u, n), m != null && f.unshift(
        We(u, m, i)
      )) : e || (m = he(u, n), m != null && f.push(
        We(u, m, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var mr = /\r\n?/g, yr = /\u0000|\uFFFD/g;
  function id(l) {
    return (typeof l == "string" ? l : "" + l).replace(mr, `
`).replace(yr, "");
  }
  function od(l, t) {
    return t = id(t), id(l) === t;
  }
  function sl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Aa(l, "" + a);
        else return;
        break;
      case "className":
        En(l, "class", a);
        break;
      case "tabIndex":
        En(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        En(l, u, a);
        break;
      case "style":
        e0(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          En(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = bn(a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && sl(l, t, "name", e.name, e, null), sl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), sl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), sl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (sl(l, t, "encType", e.encType, e, null), sl(l, t, "method", e.method, e, null), sl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = bn(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
        return;
      case "onScroll":
        a != null && F("scroll", l);
        return;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = bn(a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        F("beforetoggle", l), F("toggle", l), Tn(l, "popover", a);
        break;
      case "xlinkActuate":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Tn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = jm.get(u) || u, Tn(l, u, a);
        else return;
    }
    ll = !0;
  }
  function Ii(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        e0(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Aa(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && F("scroll", l);
        return;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = Zt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Fo.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), n = u.slice(2, e ? u.length - 7 : void 0), t = l[kl] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof a == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e);
              break l;
            }
            ll = !0, u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Tn(l, u, a);
          }
        return;
    }
    ll = !0;
  }
  function Vl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        F("error", l), F("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  sl(l, t, n, f, u, null);
              }
          }
        e && sl(l, t, "srcSet", u.srcSet, u, null), a && sl(l, t, "src", u.src, u, null);
        return;
      case "input":
        F("invalid", l);
        var c = n = f = e = null, i = null, m = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  m = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(h(137, t));
                  break;
                default:
                  sl(l, t, a, g, u, null);
              }
          }
        l0(
          l,
          n,
          c,
          i,
          m,
          f,
          e,
          !1
        );
        return;
      case "select":
        F("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                sl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? _a(l, !!a, t, !1) : u != null && _a(l, !!a, u, !0);
        return;
      case "textarea":
        F("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                sl(l, t, f, c, u, null);
            }
        u0(l, a, e, n);
        return;
      case "option":
        for (i in u)
          u.hasOwnProperty(i) && (a = u[i], a != null) && (i === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : sl(l, t, i, a, u, null));
        return;
      case "dialog":
        F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Fe.length; a++)
          F(Fe[a], l);
        break;
      case "image":
        F("error", l), F("load", l);
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", l), F("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in u)
          if (u.hasOwnProperty(m) && (a = u[m], a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                sl(l, t, m, a, u, null);
            }
        return;
      default:
        if (lc(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && Ii(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && sl(l, t, c, a, u, null));
  }
  var rr = {};
  function hr(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, m = null, g = null;
        for (r in u) {
          var E = u[r];
          if (u.hasOwnProperty(r) && E != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = E;
              default:
                a.hasOwnProperty(r) || sl(l, t, r, null, a, E);
            }
        }
        for (var v in a) {
          var r = a[v];
          if (E = u[v], a.hasOwnProperty(v) && (r != null || E != null))
            switch (v) {
              case "type":
                r !== E && (ll = !0), n = r;
                break;
              case "name":
                r !== E && (ll = !0), e = r;
                break;
              case "checked":
                r !== E && (ll = !0), m = r;
                break;
              case "defaultChecked":
                r !== E && (ll = !0), g = r;
                break;
              case "value":
                r !== E && (ll = !0), f = r;
                break;
              case "defaultValue":
                r !== E && (ll = !0), c = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(h(137, t));
                break;
              default:
                r !== E && sl(
                  l,
                  t,
                  v,
                  r,
                  a,
                  E
                );
            }
        }
        If(
          l,
          f,
          c,
          i,
          m,
          g,
          n,
          e
        );
        return;
      case "select":
        r = f = c = v = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = i;
              default:
                a.hasOwnProperty(n) || sl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                n !== i && (ll = !0), v = n;
                break;
              case "defaultValue":
                n !== i && (ll = !0), c = n;
                break;
              case "multiple":
                n !== i && (ll = !0), f = n;
              default:
                n !== i && sl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = r, v != null ? _a(l, !!u, v, !1) : !!a != !!u && (t != null ? _a(l, !!u, t, !0) : _a(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        r = v = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                sl(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                e !== n && (ll = !0), v = e;
                break;
              case "defaultValue":
                e !== n && (ll = !0), r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && sl(l, t, f, e, a, n);
            }
        t0(l, v, r);
        return;
      case "option":
        for (var _ in u)
          v = u[_], u.hasOwnProperty(_) && v != null && !a.hasOwnProperty(_) && (_ === "selected" ? l.selected = !1 : sl(
            l,
            t,
            _,
            null,
            a,
            v
          ));
        for (i in a)
          v = a[i], r = u[i], a.hasOwnProperty(i) && v !== r && (v != null || r != null) && (i === "selected" ? (v !== r && (ll = !0), l.selected = v && typeof v != "function" && typeof v != "symbol") : sl(
            l,
            t,
            i,
            v,
            a,
            r
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var D in u)
          v = u[D], u.hasOwnProperty(D) && v != null && !a.hasOwnProperty(D) && sl(l, t, D, null, a, v);
        for (m in a)
          if (v = a[m], r = u[m], a.hasOwnProperty(m) && v !== r && (v != null || r != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(h(137, t));
                break;
              default:
                sl(
                  l,
                  t,
                  m,
                  v,
                  a,
                  r
                );
            }
        return;
      default:
        if (lc(t)) {
          for (var V in u)
            v = u[V], u.hasOwnProperty(V) && v !== void 0 && !a.hasOwnProperty(V) && Ii(
              l,
              t,
              V,
              void 0,
              a,
              v
            );
          for (g in a)
            v = a[g], r = u[g], !a.hasOwnProperty(g) || v === r || v === void 0 && r === void 0 || Ii(
              l,
              t,
              g,
              v,
              a,
              r
            );
          return;
        }
    }
    for (var d in u)
      v = u[d], u.hasOwnProperty(d) && v != null && !a.hasOwnProperty(d) && sl(l, t, d, null, a, v);
    for (E in a)
      v = a[E], r = u[E], !a.hasOwnProperty(E) || v === r || v == null && r == null || sl(l, t, E, v, a, r);
  }
  function sd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function gr() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && sd(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], m = i.startTime;
            if (m > c) break;
            var g = i.transferSize, E = i.initiatorType;
            g && sd(E) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - m) / (i - m)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Pi = null, lo = null;
  function $e(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function vd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function md(l, t, u, a) {
    return u = $e(
      u
    ).createElement(l), u[xl] = a, u[kl] = t, Vl(u, l, t), Hl(u), u;
  }
  function to(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var uo = null;
  function Sr() {
    var l = window.event;
    return l && l.type === "popstate" ? l === uo ? !1 : (uo = l, !0) : (uo = null, !1);
  }
  var ao = typeof setTimeout == "function" ? setTimeout : void 0, Tr = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, rd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : ao, Er = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(l) {
    return yd.resolve(null).then(l).catch(br);
  } : ao;
  function br(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Xu(l) {
    return l === "head";
  }
  function hd(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), ie(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          vo(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, vo(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[ye] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && vo(l.ownerDocument.body);
      u = e;
    } while (u);
    ie(t);
  }
  function gd(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function Sd(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else
        for (var e = a = 0; e < t.length; e++) {
          var n = t[e];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function Td(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function zr(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function eo(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return zr(t, u, l);
  }
  function Or(l) {
    return l.documentElement.clientHeight;
  }
  function _r(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Ar(l, t, u, a, e, n, f, c, i) {
    var m = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = m.startViewTransition({
        update: function() {
          var v = m.defaultView, r = v.navigation && v.navigation.transition, _ = m.fonts.status;
          a();
          var D = [];
          if (_ === "loaded" && (Or(m), m.fonts.status === "loading" && D.push(m.fonts.ready)), _ = D.length, l !== null)
            for (var V = l.suspenseyImages, d = 0, o = 0; o < V.length; o++) {
              var y = V[o];
              if (!y.complete) {
                var S = y.getBoundingClientRect();
                if (0 < S.bottom && 0 < S.right && S.top < v.innerHeight && S.left < v.innerWidth) {
                  if (d += Xd(y), d > Rf) {
                    D.length = _;
                    break;
                  }
                  y = new Promise(
                    _r.bind(y)
                  ), D.push(y);
                }
              }
            }
          if (0 < D.length)
            return v = Promise.race([
              Promise.all(D),
              new Promise(function(M) {
                return setTimeout(M, 500);
              })
            ]).then(e, e), (r ? Promise.allSettled([r.finished, v]) : v).then(n, n);
          if (e(), r)
            return r.finished.then(
              n,
              n
            );
          n();
        },
        types: u
      });
      m.__reactViewTransition = g;
      var E = [];
      return g.ready.then(
        function() {
          for (var v = m.documentElement.getAnimations({
            subtree: !0
          }), r = 0; r < v.length; r++) {
            var _ = v[r], D = _.effect, V = D.pseudoElement;
            if (V != null && V.startsWith("::view-transition")) {
              E.push(_), _ = D.getKeyframes();
              for (var d = V = void 0, o = !0, y = 0; y < _.length; y++) {
                var S = _[y], M = S.width;
                if (V === void 0) V = M;
                else if (V !== M) {
                  o = !1;
                  break;
                }
                if (M = S.height, d === void 0) d = M;
                else if (d !== M) {
                  o = !1;
                  break;
                }
                delete S.width, delete S.height, S.transform === "none" && delete S.transform;
              }
              o && V !== void 0 && d !== void 0 && (D.setKeyframes(_), o = getComputedStyle(
                D.target,
                D.pseudoElement
              ), o.width !== V || o.height !== d) && (o = _[0], o.width = V, o.height = d, o = _[_.length - 1], o.width = V, o.height = d, D.setKeyframes(_));
            }
          }
          f();
        },
        function(v) {
          m.__reactViewTransition === g && (m.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && i(v);
          } finally {
            a(), e(), f();
          }
        }
      ), g.finished.finally(function() {
        for (var v = 0; v < E.length; v++)
          E[v].cancel();
        m.__reactViewTransition === g && (m.__reactViewTransition = null), c();
      }), g;
    } catch {
      return a(), e(), f(), null;
    }
  }
  function ga(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  ga.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : J({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, ga.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), a = [], e = 0; e < u.length; e++) {
      var n = u[e].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
    }
    return a;
  }, ga.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ed(l) {
    return {
      name: l,
      group: new ga("group", l),
      imagePair: new ga("image-pair", l),
      old: new ga("old", l),
      new: new ga("new", l)
    };
  }
  function gt(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  gt.prototype.addEventListener = function(l, t, u) {
    var a = null, e = null;
    if (!(u != null && typeof u != "boolean" && (a = u.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (zd(n, l, t, u) === -1) {
        var f = this, c = t;
        u != null && typeof u != "boolean" && u.once === !0 && (c = function(i) {
          f.removeEventListener(
            l,
            t,
            u
          ), typeof t == "function" ? t.call(this, i) : t.handleEvent(i);
        }), a !== null && (e = f.removeEventListener.bind(
          f,
          l,
          t,
          u
        ), a.addEventListener("abort", e, { once: !0 }), e = a.removeEventListener.bind(a, "abort", e)), a = ue(u), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: c,
          cleanup: e
        }), T(
          this._fragmentFiber.child,
          !1,
          Nr,
          l,
          c,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function Nr(l, t, u, a) {
    return rl(l).addEventListener(
      t,
      u,
      a
    ), !1;
  }
  gt.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = zd(
      a,
      l,
      t,
      u
    ), t !== -1)) {
      var e = a[t];
      u = e.attachedListener;
      var n = e.cleanup;
      e = ue(e.optionsOrUseCapture), T(
        this._fragmentFiber.child,
        !1,
        Mr,
        l,
        u,
        e
      ), a.splice(t, 1), n !== null && n();
    }
  };
  function Mr(l, t, u, a) {
    return rl(l).removeEventListener(
      t,
      u,
      a
    ), !1;
  }
  function ue(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function bd(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function zd(l, t, u, a) {
    if (l.length === 0) return -1;
    a = bd(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && bd(n.optionsOrUseCapture) === a)
        return e;
    }
    return -1;
  }
  gt.prototype.dispatchEvent = function(l) {
    var t = q(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = rl(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.addEventListener(
            n.type,
            n.attachedListener,
            ue(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), l = a.dispatchEvent(l), u)
        for (e = 0; e < u.length; e++)
          n = u[e], a.removeEventListener(
            n.type,
            n.attachedListener,
            ue(n.optionsOrUseCapture)
          );
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, gt.prototype.focus = function(l) {
    T(
      this._fragmentFiber.child,
      !0,
      Od,
      l,
      void 0,
      void 0
    );
  };
  function Od(l, t) {
    return l.tag === 6 ? !1 : (l = rl(l), Gr(l, t));
  }
  gt.prototype.focusLast = function(l) {
    var t = [];
    T(
      this._fragmentFiber.child,
      !0,
      no,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !Od(t[u], l); u--) ;
  };
  function no(l, t) {
    return t.push(l), !1;
  }
  gt.prototype.blur = function() {
    var l = q(
      this._fragmentFiber
    );
    l !== null && (l = rl(l), l = $e(l).activeElement, l !== null && T(
      this._fragmentFiber.child,
      !1,
      Dr,
      l,
      void 0,
      void 0
    ));
  };
  function Dr(l, t) {
    return l.tag === 6 ? !1 : (l = rl(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  gt.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), T(
      this._fragmentFiber.child,
      !1,
      Ur,
      l,
      void 0,
      void 0
    );
  };
  function Ur(l, t) {
    return l.tag === 6 || (l = rl(l), t.observe(l)), !1;
  }
  gt.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), T(
        this._fragmentFiber.child,
        !1,
        Cr,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < Bt.length; u++) {
        var a = Bt[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : Bt[t++] = a;
      }
      Bt.length = t;
    }
  };
  function Cr(l, t) {
    return l.tag === 6 || (l = rl(l), t.unobserve(l)), !1;
  }
  var Bt = [], fo = !1;
  function Rr(l, t, u) {
    Bt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), fo || (fo = !0, Xr(function() {
      fo = !1;
      var a = Bt;
      Bt = [];
      for (var e = 0; e < a.length; e++) {
        var n = a[e];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  gt.prototype.getClientRects = function() {
    var l = [];
    return T(
      this._fragmentFiber.child,
      !1,
      Hr,
      l,
      void 0,
      void 0
    ), l;
  };
  function Hr(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = rl(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  gt.prototype.getRootNode = function(l) {
    var t = q(
      this._fragmentFiber
    );
    return t === null ? this : rl(t).getRootNode(l);
  }, gt.prototype.compareDocumentPosition = function(l) {
    var t = q(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    T(
      this._fragmentFiber.child,
      !1,
      no,
      u,
      void 0,
      void 0
    );
    var a = rl(t);
    if (u.length === 0) {
      if (u = a, Cl(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (u = t);
      }
      t = this._fragmentFiber;
      var e = a = u.compareDocumentPosition(l);
      return u === l ? e = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = at(t)[1], u === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = rl(u).compareDocumentPosition(
        l
      ), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = rl(u[0]), e = rl(u[u.length - 1]);
    var n = Cl(this._fragmentFiber) ? t.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), c = e.compareDocumentPosition(l), i = f & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e === l || i || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || jr(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function jr(l, t, u, a, e) {
    var n = $u(e);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (u = !!n)
        l: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              u = !0;
              break l;
            }
            n = n.return;
          }
          u = !1;
        }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = e.ownerDocument, e === n || e === n.documentElement || e === n.body;
      l: {
        for (n = t, t = q(t); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
            n = !0;
            break l;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = nt(
      u,
      n,
      xt
    ), t === null ? t = !1 : (T(
      t,
      !0,
      Ju,
      n,
      u
    ), n = St, St = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = nt(
      a,
      n,
      xt
    ), t === null ? t = !1 : (T(
      t,
      !0,
      qt,
      n,
      a
    ), n = St, et = St = null, t = n !== null)), t) : !1;
  }
  function _d(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  gt.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(h(566));
    var t = [];
    T(
      this._fragmentFiber.child,
      !1,
      no,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var a = at(
        this._fragmentFiber
      );
      if (a = u ? a[1] || a[0] || q(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = rl(a), _d(l, u);
        return;
      }
      if (a = rl(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e = t[a];
      e.tag === 6 ? (e = rl(e), _d(e, u)) : rl(e).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function pr(l, t) {
    return l = rl(l), Ad(l, t), !1;
  }
  function Ad(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function Nd(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.addEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, c = 0; c < Bt.length; c++) {
        var i = Bt[c];
        (i.fragmentInstance !== t || i.observer !== n || i.instance !== l) && (Bt[f++] = i);
      }
      Bt.length = f, n.observe(l);
    }), Ad(l, t));
  }
  function Yr(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.removeEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? Rr(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function co(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          co(u), Sn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Br(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[ye])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Dt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function qr(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Md(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function io(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function oo(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function xr(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Dt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var so = null;
  function Dd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return Dt(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ud(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Gr(l, t) {
    function u() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      l.ownerDocument.addEventListener("focus", u, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, !0);
    }
    return a;
  }
  function Xr(l) {
    rd(function() {
      rd(function(t) {
        return l(t);
      });
    });
  }
  function Cd(l, t, u) {
    switch (t = $e(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function Rd(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && sl(l, t, a, null, rr, e);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Zt && (l.onclick = null), Sn(l);
  }
  function vo(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Sn(l);
  }
  var Ut = /* @__PURE__ */ new Map(), Hd = /* @__PURE__ */ new Set();
  function ke(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ru = X.d;
  X.d = {
    f: Qr,
    r: Zr,
    D: Vr,
    C: Lr,
    L: Kr,
    m: Jr,
    X: Fr,
    S: wr,
    M: Wr
  };
  function Qr() {
    var l = ru.f(), t = zf();
    return l || t;
  }
  function Zr(l) {
    var t = ba(l);
    t !== null && t.tag === 5 && t.type === "form" ? ps(t) : ru.r(l);
  }
  var ae = typeof document > "u" ? null : document;
  function jd(l, t, u) {
    var a = ae;
    if (a && typeof t == "string" && t) {
      var e = bt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Hd.has(e) || (Hd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Vl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function Vr(l) {
    ru.D(l), jd("dns-prefetch", l, null);
  }
  function Lr(l, t) {
    ru.C(l, t), jd("preconnect", l, t);
  }
  function Kr(l, t, u) {
    ru.L(l, t, u);
    var a = ae;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + bt(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + bt(
        u.imageSizes
      ) + '"]')) : e += '[href="' + bt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ee(l);
          break;
        case "script":
          n = ne(l);
      }
      if (!(Ut.has(n) || (l = J(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Ut.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(Ie(n)) || t === "script" && a.querySelector(Pe(n))))) {
        var f = a.createElement("link");
        Vl(f, "link", l), t === "style" && (f[gn] = !0, f.onload = f.onerror = function() {
          Jo(f);
        }), Hl(f), a.head.appendChild(f);
      }
    }
  }
  function Jr(l, t) {
    ru.m(l, t);
    var u = ae;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + bt(a) + '"][href="' + bt(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ne(l);
      }
      if (!Ut.has(n) && (l = J({ rel: "modulepreload", href: l }, t), Ut.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Pe(n)))
              return;
        }
        a = u.createElement("link"), Vl(a, "link", l), Hl(a), u.head.appendChild(a);
      }
    }
  }
  function wr(l, t, u) {
    ru.S(l, t, u);
    var a = ae;
    if (a && l) {
      var e = za(a).hoistableStyles, n = ee(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          Ie(n)
        ))
          c.loading = 5;
        else {
          l = J(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Ut.get(n)) && mo(l, u);
          var i = f = a.createElement("link");
          Hl(i), Vl(i, "link", l), i._p = new Promise(function(m, g) {
            i.onload = m, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Uf(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function Fr(l, t) {
    ru.X(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(Pe(e)), n || (l = J({ src: l, async: !0 }, t), (t = Ut.get(e)) && yo(l, t), n = u.createElement("script"), Hl(n), Vl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Wr(l, t) {
    ru.M(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(Pe(e)), n || (l = J({ src: l, async: !0, type: "module" }, t), (t = Ut.get(e)) && yo(l, t), n = u.createElement("script"), Hl(n), Vl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function pd(l, t, u, a) {
    var e = (e = gu.current) ? ke(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = ee(u.href), t = za(
          e
        ).hoistableStyles, a = t.get(u), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ee(u.href);
          var n = za(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            Ie(l)
          )) ? n._p || (f.instance = n, f.state.loading = 5) : (n = Ut.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ut.set(l, n)), $r(
            e,
            l,
            n,
            f.state
          ))), t && a === null)
            throw Error(h(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = ne(u), t = za(
          e
        ).hoistableScripts, a = t.get(u), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function ee(l) {
    return 'href="' + bt(l) + '"';
  }
  function Ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Yd(l) {
    return J({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function $r(l, t, u, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[gn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[gn] = !0, t.onload = t.onerror = Jo.bind(null, t), Vl(t, "link", u), Hl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function ne(l) {
    return '[src="' + bt(l) + '"]';
  }
  function Pe(l) {
    return "script[async]" + l;
  }
  function Bd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + bt(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Hl(a), a;
          var e = J({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(a), Vl(a, "style", e), Uf(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ee(u.href);
          var n = l.querySelector(
            Ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          a = Yd(u), (e = Ut.get(e)) && mo(a, e), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Vl(n, "link", a), t.state.loading |= 4, Uf(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ne(u.src), (e = l.querySelector(
            Pe(n)
          )) ? (t.instance = e, Hl(e), e) : (a = u, (e = Ut.get(n)) && (a = J({}, u), yo(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Hl(e), Vl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Uf(a, u.precedence, l));
    return t.instance;
  }
  function Uf(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function mo(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function yo(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Cf = null;
  function qd(l, t, u) {
    if (Cf === null) {
      var a = /* @__PURE__ */ new Map(), e = Cf = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Cf, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[ye] || n[xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function ro(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function kr(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function xd(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Gd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Xd(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Qd(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Xd(t), l.suspenseyImages.push(t)), l = lh.bind(l), t.decode().then(l, l));
  }
  function Ir(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = ee(a.href), n = t.querySelector(
          Ie(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = ln.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, a = Yd(a), (e = Ut.get(e)) && mo(a, e), n = n.createElement("link"), Hl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Vl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = ln.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Rf = 0;
  function Pr(l, t) {
    return l.stylesheets && l.count === 0 && jf(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && jf(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Rf === 0 && (Rf = 62500 * gr());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && jf(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Rf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Zd(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) jf(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function ln() {
    this.count--, Zd(this);
  }
  function lh() {
    this.imgCount--, Zd(this);
  }
  var Hf = null;
  function jf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hf = /* @__PURE__ */ new Map(), t.forEach(th, l), Hf = null, ln.call(l));
  }
  function th(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Hf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Hf.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = ln.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var fe = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: lu,
    _currentValue2: lu,
    _threadCount: 0
  };
  function uh(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ff(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ff(0), this.hiddenUpdates = Ff(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Vd(l, t, u, a, e, n, f, c, i, m, g, E) {
    return l = new uh(
      l,
      t,
      u,
      f,
      i,
      m,
      g,
      E,
      c
    ), t = 1, n === !0 && (t |= 24), n = Il(3, null, null, t), l.current = n, n.stateNode = l, t = Uc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, jc(n), l;
  }
  function Ld(l) {
    return l ? (l = Ha, l) : Ha;
  }
  function Kd(l, t, u, a, e, n) {
    e = Ld(e), a.context === null ? a.context = e : a.pendingContext = e, a = Du(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Uu(l, a, t), u !== null && (ut(u, l, t), Re(u, l, t));
  }
  function Jd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function ho(l, t) {
    Jd(l, t), (l = l.alternate) && Jd(l, t);
  }
  function wd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = la(l, 67108864);
      t !== null && ut(t, l, 67108864), ho(l, 67108864);
    }
  }
  function Fd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = Wf(t);
      var u = la(l, t);
      u !== null && ut(u, l, t), ho(l, t);
    }
  }
  var ce = !0;
  function ah(l, t, u, a) {
    var e = U.T;
    U.T = null;
    var n = X.p;
    try {
      X.p = 2, go(l, t, u, a);
    } finally {
      X.p = n, U.T = e;
    }
  }
  function eh(l, t, u, a) {
    var e = U.T;
    U.T = null;
    var n = X.p;
    try {
      X.p = 8, go(l, t, u, a);
    } finally {
      X.p = n, U.T = e;
    }
  }
  function go(l, t, u, a) {
    if (ce) {
      var e = So(a);
      if (e === null)
        ki(
          l,
          t,
          a,
          pf,
          u
        ), $d(l, a);
      else if (fh(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if ($d(l, a), t & 4 && -1 < nh.indexOf(l)) {
        for (; e !== null; ) {
          var n = ba(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Wu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - ot(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    It(n), (el & 6) === 0 && (Tf = ct() + 500, we(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = la(n, 2), c !== null && ut(c, n, 2), zf(), ho(n, 2);
            }
          if (n = So(a), n === null && ki(
            l,
            t,
            a,
            pf,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        ki(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function So(l) {
    return l = uc(l), To(l);
  }
  var pf = null;
  function To(l) {
    if (pf = null, l = $u(l), l !== null) {
      var t = K(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Ol(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Bl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return pf = l, null;
  }
  function Wd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (gm()) {
          case po:
            return 2;
          case Yo:
            return 8;
          case dn:
          case Sm:
            return 32;
          case Bo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Eo = !1, Qu = null, Zu = null, Vu = null, tn = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), Lu = [], nh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function $d(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Qu = null;
        break;
      case "dragenter":
      case "dragleave":
        Zu = null;
        break;
      case "mouseover":
      case "mouseout":
        Vu = null;
        break;
      case "pointerover":
      case "pointerout":
        tn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        un.delete(t.pointerId);
    }
  }
  function an(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = ba(t), t !== null && wd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function fh(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return Qu = an(
          Qu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Zu = an(
          Zu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return Vu = an(
          Vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return tn.set(
          n,
          an(
            tn.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, un.set(
          n,
          an(
            un.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function kd(l) {
    var t = $u(l.target);
    if (t !== null) {
      var u = K(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Ol(u), t !== null) {
            l.blockedOn = t, Vo(l.priority, function() {
              Fd(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Bl(u), t !== null) {
            l.blockedOn = t, Vo(l.priority, function() {
              Fd(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yf(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = So(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        tc = a, u.target.dispatchEvent(a), tc = null;
      } else
        return t = ba(u), t !== null && wd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Id(l, t, u) {
    Yf(l) && u.delete(t);
  }
  function ch() {
    Eo = !1, Qu !== null && Yf(Qu) && (Qu = null), Zu !== null && Yf(Zu) && (Zu = null), Vu !== null && Yf(Vu) && (Vu = null), tn.forEach(Id), un.forEach(Id);
  }
  function Bf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Eo || (Eo = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      ch
    )));
  }
  var qf = null;
  function Pd(l) {
    qf !== l && (qf = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        qf === l && (qf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (To(a || u) === null)
              continue;
            break;
          }
          var n = ba(u);
          n !== null && (l.splice(t, 3), t -= 3, li(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function ie(l) {
    function t(i) {
      return Bf(i, l);
    }
    Qu !== null && Bf(Qu, l), Zu !== null && Bf(Zu, l), Vu !== null && Bf(Vu, l), tn.forEach(t), un.forEach(t);
    for (var u = 0; u < Lu.length; u++) {
      var a = Lu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Lu.length && (u = Lu[0], u.blockedOn === null); )
      kd(u), u.blockedOn === null && Lu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[kl] || null;
        if (typeof n == "function")
          f || Pd(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[kl] || null)
              c = f.formAction;
            else if (To(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Pd(u);
        }
      }
  }
  function lm() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function bo(l) {
    this._internalRoot = l;
  }
  xf.prototype.render = bo.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var u = t.current, a = ht();
    Kd(u, a, l, t, null, null);
  }, xf.prototype.unmount = bo.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Kd(l.current, 2, null, l, null, null), zf(), t[Ea] = null;
    }
  };
  function xf(l) {
    this._internalRoot = l;
  }
  xf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Zo();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Lu.length && t !== 0 && t < Lu[u].priority; u++) ;
      Lu.splice(u, 0, l), u === 0 && kd(l);
    }
  };
  var tm = A.version;
  if (tm !== "19.3.1")
    throw Error(
      h(
        527,
        tm,
        "19.3.1"
      )
    );
  X.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = vl(t), l = l !== null ? R(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var ih = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gf.isDisabled && Gf.supportsFiber)
      try {
        ve = Gf.inject(
          ih
        ), it = Gf;
      } catch {
      }
  }
  return nn.createRoot = function(l, t) {
    if (!tl(l)) throw Error(h(299));
    var u = !1, a = "", e = Ls, n = Ks, f = Js;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Vd(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      lm
    ), l[Ea] = t.current, $i(l), new bo(t);
  }, nn.hydrateRoot = function(l, t, u) {
    if (!tl(l)) throw Error(h(299));
    var a = !1, e = "", n = Ls, f = Ks, c = Js, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = Vd(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      i,
      n,
      f,
      c,
      lm
    ), t.context = Ld(null), u = t.current, a = ht(), a = Wf(a), e = Du(a), e.callback = null, Uu(u, e, a), u = a, t.current.lanes = u, me(t, u), It(t), l[Ea] = t.current, $i(l), new xf(t);
  }, nn.version = "19.3.1", nn;
}
var vm;
function Sh() {
  if (vm) return _o.exports;
  vm = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (A) {
        console.error(A);
      }
  }
  return z(), _o.exports = gh(), _o.exports;
}
var Th = Sh();
const Eh = nl.lazy(() => import("./SideRays-DGsk5zvs.js")), bh = nl.lazy(() => import("./Antigravity-BM28ipi4.js")), zh = nl.lazy(() => import("./MagicBento-CPEKeu2l.js")), Oh = nl.lazy(() => import("./GradientText-CI8smNh8.js")), _h = nl.lazy(() => import("./SpotlightCard-BS5r9q_h.js")), Ah = nl.lazy(() => import("./LogoLoop-CYizLo38.js")), Nh = nl.lazy(() => import("./AnimatedContent-Cv6eiNgC.js")), Mh = nl.lazy(() => import("./PillNav-VzBvjm3L.js")), Dh = nl.lazy(() => import("./ChromaGrid-EPaci1qL.js")), Do = nl.lazy(() => import("./CountUp-De30yOHn.js")), Co = ["#b99aff", "#8b5cf6", "#6d5dfc", "#d5c3ff"], Uo = (z) => {
  try {
    return new URL("/favicon.ico", new URL(z).origin).href;
  } catch {
    return "";
  }
}, mm = (z) => Array.isArray(z) && z.length === 6 && z.every((A) => typeof A == "string" && A.trim()) && /^https?:\/\//.test(z[5]);
function fn({ children: z, fallback: A = null }) {
  const p = nl.useRef(null), [h, tl] = nl.useState(!1);
  return nl.useEffect(() => {
    const K = p.current;
    if (!K || h) return;
    if (!("IntersectionObserver" in window)) {
      tl(!0);
      return;
    }
    const Ol = new IntersectionObserver((Bl) => {
      Bl.some((B) => B.isIntersecting) && (tl(!0), Ol.disconnect());
    }, { rootMargin: "260px 0px", threshold: 0.01 });
    return Ol.observe(K), () => Ol.disconnect();
  }, [h]), /* @__PURE__ */ O.jsx("div", { ref: p, children: h ? /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: A, children: z }) : A });
}
function cn() {
  const [z, A] = nl.useState(document.documentElement.lang === "ar" || new URLSearchParams(location.search).get("lang") === "ar" ? "ar" : "en");
  return nl.useEffect(() => {
    const p = () => A(document.documentElement.lang === "ar" ? "ar" : "en");
    return window.addEventListener("creative-ai-language-change", p), () => window.removeEventListener("creative-ai-language-change", p);
  }, []), z;
}
function Uh() {
  const z = cn(), A = z === "ar" ? [{ label: "الأدوات", href: "tools.html?lang=ar" }, { label: "التصنيفات", href: "categories.html?lang=ar" }, { label: "الجديد", href: "new.html?lang=ar" }, { label: "التحديثات", href: "updates.html?lang=ar" }, { label: "المقارنة", href: "compare.html?lang=ar" }] : [{ label: "Tools", href: "tools.html" }, { label: "Categories", href: "categories.html" }, { label: "New", href: "new.html" }, { label: "Updates", href: "updates.html" }, { label: "Compare", href: "compare.html?lang=en" }];
  return /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: /* @__PURE__ */ O.jsx("nav", { className: "nav ca-nav-fallback", children: A.map((p) => /* @__PURE__ */ O.jsx("a", { href: p.href, children: p.label }, p.href)) }), children: /* @__PURE__ */ O.jsx(Mh, { logo: /* @__PURE__ */ O.jsx("span", { className: "ca-nav-mark", children: "</>" }), logoAlt: "Creative AI", logoHref: "./", items: A, activeHref: location.pathname.split("/").pop() === "index.html" ? "./" : location.pathname.split("/").pop(), theme: "dark", layout: "split", size: "md", surface: "glass", hoverEffect: "glide", indicator: "pill", highlightColor: "#a98aff", highlightTextColor: "#100b20", collapse: "auto", ariaLabel: z === "ar" ? "التنقل الرئيسي" : "Primary navigation" }) });
}
function Ch({ tools: z, categories: A, sources: p, lang: h }) {
  const tl = h === "ar" ? ["أداة تتم صيانتها", "تصنيفاً", "مصدراً تتم متابعته"] : ["Maintained tools", "Categories", "Monitored sources"];
  return /* @__PURE__ */ O.jsxs("div", { className: "ca-metrics", "aria-label": h === "ar" ? "إحصائيات الدليل" : "Verified catalog metrics", children: [
    /* @__PURE__ */ O.jsxs("div", { children: [
      /* @__PURE__ */ O.jsx("strong", { "data-countup": "tools", children: /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: z.toLocaleString(), children: /* @__PURE__ */ O.jsx(Do, { to: z, duration: 1.35, trigger: "view", separator: "," }) }) }),
      /* @__PURE__ */ O.jsx("span", { children: tl[0] })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { children: [
      /* @__PURE__ */ O.jsx("strong", { "data-countup": "categories", children: /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: A, children: /* @__PURE__ */ O.jsx(Do, { to: A, duration: 1.2, trigger: "view" }) }) }),
      /* @__PURE__ */ O.jsx("span", { children: tl[1] })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { children: [
      /* @__PURE__ */ O.jsx("strong", { "data-countup": "sources", children: /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: p, children: /* @__PURE__ */ O.jsx(Do, { to: p, duration: 1.1, trigger: "view" }) }) }),
      /* @__PURE__ */ O.jsx("span", { children: tl[2] })
    ] })
  ] });
}
function Rh() {
  return /* @__PURE__ */ O.jsxs("div", { className: "ca-hero-effects", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("div", { className: "ca-side-rays", children: /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: null, children: /* @__PURE__ */ O.jsx(Eh, { rayColor1: "#8b5cf6", rayColor2: "#c4b5fd", blend: 0.62, origin: "top-right", speed: 0.55, intensity: 1.15, spread: 1.65, density: 4, sharpness: 0.34, tilt: -4, falloff: 1.9, glow: 0.7, saturation: 0.82, dust: 0.04, followMouse: !1, intro: !0, opacity: 0.58, maxDevicePixelRatio: 1.25 }) }) }),
    /* @__PURE__ */ O.jsx("div", { className: "ca-antigravity", children: /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: null, children: /* @__PURE__ */ O.jsx(bh, { count: 105, magnetRadius: 5, ringRadius: 6.5, waveSpeed: 0.25, waveAmplitude: 0.42, particleSize: 0.72, lerpSpeed: 0.035, colors: ["#8b5cf6", "#b99aff", "#6d5dfc"], colorMode: "conic", autoAnimate: !0, particleVariance: 0.7, rotationSpeed: 0.018, depthFactor: 0.7, pulseSpeed: 2.2, particleShape: "sphere", fieldStrength: 8, ambient: 0.18, interactive: !1, clickBurst: !1, intro: !0, opacity: 0.58, maxDevicePixelRatio: 1.2 }) }) })
  ] });
}
function Hh() {
  const z = cn(), A = z === "ar" ? "اكتشف · قارن · ابنِ" : "DISCOVER · COMPARE · BUILD";
  return /* @__PURE__ */ O.jsx("div", { className: "ca-gradient-kicker", dir: z === "ar" ? "rtl" : "ltr", children: /* @__PURE__ */ O.jsx(nl.Suspense, { fallback: /* @__PURE__ */ O.jsx("span", { children: A }), children: /* @__PURE__ */ O.jsx(Oh, { colors: Co, animationSpeed: 12, variant: "flow", scale: 2, glow: 0.18, pauseOnHover: !0, children: A }) }) });
}
function jh() {
  const z = cn(), [A, p] = nl.useState([]), [h, tl] = nl.useState(0);
  return nl.useEffect(() => {
    fetch("data/tools.json").then((K) => K.ok ? K.json() : []).then((K) => p(K.filter(mm))).catch(() => {
    }), fetch("data/updates.json").then((K) => K.ok ? K.json() : null).then((K) => tl(Array.isArray(K?.sources) ? K.sources.length : 0)).catch(() => {
    });
  }, []), /* @__PURE__ */ O.jsx(Ch, { tools: A.length, categories: new Set(A.map((K) => K[1])).size, sources: h, lang: z });
}
function ph() {
  const A = cn() === "ar", [p, h] = nl.useState([]), [tl, K] = nl.useState(0);
  nl.useEffect(() => {
    fetch("data/tools.json").then((B) => B.ok ? B.json() : []).then((B) => h(B.filter(mm))).catch(() => {
    }), fetch("data/updates.json").then((B) => B.ok ? B.json() : null).then((B) => {
      const vl = Array.isArray(B?.sources) ? B.sources : [];
      K(vl.length);
    }).catch(() => {
    });
  }, []);
  const Ol = nl.useMemo(() => {
    const B = /* @__PURE__ */ new Map();
    return p.forEach((vl) => {
      const R = B.get(vl[1]) || { count: 0, image: Uo(vl[5]), title: vl[1], subtitle: A ? "استكشف الأدوات المُحدّثة" : "Explore maintained tools", accent: Co[B.size % Co.length], url: "category.html?category=" + encodeURIComponent(vl[1]) };
      R.count += 1, R.image || (R.image = Uo(vl[5])), B.set(vl[1], R);
    }), [...B.values()].sort((vl, R) => R.count - vl.count).slice(0, 8);
  }, [p]), Bl = nl.useMemo(() => p.slice(0, 12).map((B) => ({ src: Uo(B[5]), alt: B[0], title: B[0], href: B[5] })).filter((B) => B.src), [p]);
  return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    /* @__PURE__ */ O.jsxs("section", { className: "ca-bento-section", dir: A ? "rtl" : "ltr", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ca-section-heading", children: [
        /* @__PURE__ */ O.jsx("span", { children: A ? "ما يميز كرييتف إيه آي" : "THE CREATIVE AI ADVANTAGE" }),
        /* @__PURE__ */ O.jsx("h2", { children: A ? "من الاكتشاف إلى القرار الصحيح." : "From discovery to the right decision." }),
        /* @__PURE__ */ O.jsx("p", { children: A ? "دليل واحد مُحدّث. طرق عملية للعثور على الأدوات ومقارنتها واختيارها." : "One maintained catalog. Practical ways to find, compare and choose." })
      ] }),
      /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder" }), children: /* @__PURE__ */ O.jsx(zh, { columns: 3, rowHeight: 174, gap: 14, radius: 20, theme: "dark", glowColor: "132, 91, 235", textAutoHide: !1, enableBorderGlow: !0, enableSpotlight: !0, enableStars: !1, particleCount: 0, enableTilt: !1, enableMagnetism: !1, clickEffect: !0, intro: !0, items: [
        { title: A ? "اعثر على الأداة المناسبة" : "Find the right tool", description: A ? "ابدأ بالمهمة والقيود والميزانية." : "Start with your task, constraints and budget.", visual: "analytics" },
        { title: A ? "قارن الإمكانات" : "Compare capabilities", description: A ? "افهم الفروقات العملية قبل الاختيار." : "Understand practical differences before choosing.", visual: "dashboard" },
        { title: A ? "استكشف التصنيفات" : "Explore categories", description: A ? "تصفح الأدوات حسب العمل الذي تريد إنجازه." : "Browse tools by the work you need to do.", visual: "collaboration", colSpan: 1, rowSpan: 1 },
        { title: A ? "تابع التحديثات الرسمية" : "Track official updates", description: A ? "تابع تغييرات الإصدارات من المصادر المراقبة." : "Follow release changes from monitored sources.", visual: "automation", colSpan: 1, rowSpan: 1 },
        { title: A ? "ابنِ مجموعة أدواتك" : "Build your AI stack", description: A ? "نظّم الأدوات التي تناسب سير عملك." : "Organize tools that fit your actual workflow.", visual: "integration", colSpan: 1, rowSpan: 1 },
        { title: A ? "اعتمد التفاصيل الموثوقة" : "Use verified details", description: A ? "قدّم المعلومات المُحدّثة على الادعاءات التسويقية." : "Prioritize maintained facts over marketing claims.", visual: "security", colSpan: 1, rowSpan: 1 }
      ] }) })
    ] }),
    /* @__PURE__ */ O.jsxs("section", { className: "ca-logo-section", dir: A ? "rtl" : "ltr", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ca-section-heading compact", children: [
        /* @__PURE__ */ O.jsx("span", { children: A ? "أدوات في الدليل" : "TOOLS IN THE CATALOG" }),
        /* @__PURE__ */ O.jsx("p", { children: A ? "شعارات وأسماء حقيقية لأدوات موجودة في الدليل." : "Real tool identities from the maintained catalog." })
      ] }),
      Bl.length > 0 && /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder ca-logo-placeholder" }), children: /* @__PURE__ */ O.jsx(Ah, { logos: Bl, speed: 34, direction: "left", logoHeight: 30, gap: 36, pauseOnHover: !0, fadeOut: !0, scaleOnHover: !0, layout: "line", muted: 0.08, labels: "hover", draggable: !1, intro: !0, ariaLabel: "AI tools in the Creative AI catalog" }) })
    ] }),
    /* @__PURE__ */ O.jsxs("section", { className: "ca-chroma-section", dir: A ? "rtl" : "ltr", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ca-section-heading", children: [
        /* @__PURE__ */ O.jsx("span", { children: A ? "استكشف المجال" : "EXPLORE THE LANDSCAPE" }),
        /* @__PURE__ */ O.jsx("h2", { children: A ? "تصفح حسب التصنيف." : "Browse by category." }),
        /* @__PURE__ */ O.jsx("p", { children: A ? "بطاقات التصنيفات مبنية على بيانات الأدوات الموجودة فعلياً." : "Category cards are generated from real catalog entries." })
      ] }),
      Ol.length > 0 && /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder ca-grid-placeholder" }), children: /* @__PURE__ */ O.jsx(Dh, { items: Ol.map((B) => ({ ...B, subtitle: A ? B.count + " أداة مُحدّثة" : B.count + " maintained tools" })), columns: 4, gap: 14, radius: 230, softness: 0.68, damping: 0.48, fadeOut: 0.55, grayscale: 1, dim: 0.12, glow: 0.42, borderGlow: 0.75, reveal: "spotlight", aspectRatio: "4 / 3", cardRadius: 18, showInfo: !0, theme: "dark" }) })
    ] }),
    /* @__PURE__ */ O.jsx("section", { className: "ca-featured-section", dir: A ? "rtl" : "ltr", children: /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder ca-featured-placeholder" }), children: /* @__PURE__ */ O.jsxs(_h, { className: "ca-featured-card", spotlightColor: "rgba(157, 116, 255, 0.2)", intensity: 0.18, spotlightSize: 300, softness: 0.72, borderGlow: 0.8, ambient: !0, theme: "dark", children: [
      /* @__PURE__ */ O.jsx("span", { className: "ca-featured-label", children: A ? "طريقة أفضل للاختيار" : "A BETTER WAY TO CHOOSE" }),
      /* @__PURE__ */ O.jsx("h2", { children: A ? "تصفح أقل. قرارات أفضل." : "Less scrolling. Better decisions." }),
      /* @__PURE__ */ O.jsx("p", { children: A ? "ابحث وقارن وراجع البدائل وابنِ مجموعة أدوات ذكاء اصطناعي مفيدة بالاعتماد على مصدر واحد مُحدّث." : "Search, compare, review alternatives and build a useful AI stack using one maintained source of truth." }),
      /* @__PURE__ */ O.jsxs("a", { href: A ? "recommend.html?lang=ar" : "recommend.html?lang=en", children: [
        A ? "اعثر على الأداة المناسبة" : "Find the right tool",
        " ",
        /* @__PURE__ */ O.jsx("span", { "aria-hidden": "true", children: "↗" })
      ] })
    ] }) }) })
  ] });
}
function Yh() {
  const A = cn() === "ar";
  return /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-animated-placeholder" }), children: /* @__PURE__ */ O.jsx(Nh, { direction: "vertical", distance: 24, duration: 0.7, ease: "power2.out", initialOpacity: 0, blur: 2, trigger: "scroll", once: !0, className: "ca-animated-intro", children: /* @__PURE__ */ O.jsxs("div", { dir: A ? "rtl" : "ltr", children: [
    /* @__PURE__ */ O.jsx("span", { children: A ? "مصمم لسير العمل الحقيقي" : "CURATED FOR REAL WORKFLOWS" }),
    /* @__PURE__ */ O.jsx("h2", { children: A ? "استكشف الدليل بوضوح." : "Explore the catalog with clarity." }),
    /* @__PURE__ */ O.jsx("p", { children: A ? "انتقل من تحديد المهمة إلى قائمة مختصرة، ثم قارن ما يهمك." : "Move from a task to a shortlist, then compare what matters." })
  ] }) }) });
}
function oe(z, A) {
  const p = document.getElementById(z);
  !p || p.dataset.reactMounted || (p.dataset.reactMounted = "true", Th.createRoot(p).render(A));
}
function dm() {
  document.body.classList.add("ca-components-ready"), oe("creativeAiNavMount", /* @__PURE__ */ O.jsx(Uh, {})), oe("creativeAiHeroEffectsMount", /* @__PURE__ */ O.jsx(Rh, {})), oe("creativeAiHeroAccentMount", /* @__PURE__ */ O.jsx(Hh, {})), oe("creativeAiMetricsMount", /* @__PURE__ */ O.jsx(jh, {})), oe("creativeAiComponentsMount", /* @__PURE__ */ O.jsx(ph, {})), oe("creativeAiAnimatedMount", /* @__PURE__ */ O.jsx(Yh, {}));
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", dm, { once: !0 }) : dm();
export {
  O as j,
  nl as r
};
