var bo = { exports: {} }, en = {};
var tm;
function oh() {
  if (tm) return en;
  tm = 1;
  var z = /* @__PURE__ */ Symbol.for("react.transitional.element"), $ = /* @__PURE__ */ Symbol.for("react.fragment");
  function X(h, Q, Sl) {
    var G = null;
    if (Sl !== void 0 && (G = "" + Sl), Q.key !== void 0 && (G = "" + Q.key), "key" in Q) {
      Sl = {};
      for (var Tl in Q)
        Tl !== "key" && (Sl[Tl] = Q[Tl]);
    } else Sl = Q;
    return Q = Sl.ref, {
      $$typeof: z,
      type: h,
      key: G,
      ref: Q !== void 0 ? Q : null,
      props: Sl
    };
  }
  return en.Fragment = $, en.jsx = X, en.jsxs = X, en;
}
var um;
function sh() {
  return um || (um = 1, bo.exports = oh()), bo.exports;
}
var O = sh(), zo = { exports: {} }, x = {};
var am;
function vh() {
  if (am) return x;
  am = 1;
  var z = /* @__PURE__ */ Symbol.for("react.transitional.element"), $ = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), Sl = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), Tl = /* @__PURE__ */ Symbol.for("react.forward_ref"), cl = /* @__PURE__ */ Symbol.for("react.suspense"), Yl = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), j = /* @__PURE__ */ Symbol.for("react.view_transition"), Cl = Symbol.iterator;
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
  }, yl = Object.assign, St = {};
  function et(s, b, C) {
    this.props = s, this.context = b, this.refs = St, this.updater = C || $l;
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
  function qt(s, b, C) {
    this.props = s, this.context = b, this.refs = St, this.updater = C || $l;
  }
  var xt = qt.prototype = new Ju();
  xt.constructor = qt, yl(xt, et.prototype), xt.isPureReactComponent = !0;
  var nt = Array.isArray;
  function K() {
  }
  var tl = { H: null, A: null, T: null, S: null }, Gt = Object.prototype.hasOwnProperty;
  function Tt(s, b, C) {
    var R = C.ref;
    return {
      $$typeof: z,
      type: s,
      key: b,
      ref: R !== void 0 ? R : null,
      props: C
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
    return "$" + s.replace(/[=:]/g, function(C) {
      return b[C];
    });
  }
  var wu = /\/+/g;
  function Rl(s, b) {
    return typeof s == "object" && s !== null && s.key != null ? hu("" + s.key) : b.toString(36);
  }
  function A(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(K, K) : (s.status = "pending", s.then(
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
  function B(s, b, C, R, I) {
    var P = typeof s;
    (P === "undefined" || P === "boolean") && (s = null);
    var ul = !1;
    if (s === null) ul = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          ul = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case $:
              ul = !0;
              break;
            case p:
              return ul = s._init, B(
                ul(s._payload),
                b,
                C,
                R,
                I
              );
          }
      }
    if (ul)
      return I = I(s), ul = R === "" ? "." + Rl(s, 0) : R, nt(I) ? (C = "", ul != null && (C = ul.replace(wu, "$&/") + "/"), B(I, b, C, "", function(lu) {
        return lu;
      })) : I != null && (ft(I) && (I = Et(
        I,
        C + (I.key == null || s && s.key === I.key ? "" : ("" + I.key).replace(
          wu,
          "$&/"
        ) + "/") + ul
      )), b.push(I)), 1;
    ul = 0;
    var D = R === "" ? "." : R + ":";
    if (nt(s))
      for (var q = 0; q < s.length; q++)
        R = s[q], P = D + Rl(R, q), ul += B(
          R,
          b,
          C,
          P,
          I
        );
    else if (q = at(s), typeof q == "function")
      for (s = q.call(s), q = 0; !(R = s.next()).done; )
        R = R.value, P = D + Rl(R, q++), ul += B(
          R,
          b,
          C,
          P,
          I
        );
    else if (P === "object") {
      if (typeof s.then == "function")
        return B(
          A(s),
          b,
          C,
          R,
          I
        );
      throw b = String(s), Error(
        "Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ul;
  }
  function Y(s, b, C) {
    if (s == null) return s;
    var R = [], I = 0;
    return B(s, R, "", "", function(P) {
      return b.call(C, P, I++);
    }), R;
  }
  function dl(s) {
    if (s._status === -1) {
      var b = s._result, C = b();
      C.then(
        function(R) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = R, C.status === void 0 && (C.status = "fulfilled", C.value = R));
        },
        function(R) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = R, C.status === void 0 && (C.status = "rejected", C.reason = R));
        }
      ), s._status === -1 && (s._status = 0, s._result = C);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var nl = typeof reportError == "function" ? reportError : function(s) {
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
    var b = tl.T, C = {};
    C.types = b !== null ? b.types : null, tl.T = C;
    try {
      var R = s(), I = tl.S;
      I !== null && I(C, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(K, nl);
    } catch (P) {
      nl(P);
    } finally {
      b !== null && C.types !== null && (b.types = C.types), tl.T = b;
    }
  }
  function Pt(s) {
    var b = tl.T;
    if (b !== null) {
      var C = b.types;
      C === null ? b.types = [s] : C.indexOf(s) === -1 && C.push(s);
    } else Ct(Pt.bind(null, s));
  }
  var Fu = {
    map: Y,
    forEach: function(s, b, C) {
      Y(
        s,
        function() {
          b.apply(this, arguments);
        },
        C
      );
    },
    count: function(s) {
      var b = 0;
      return Y(s, function() {
        b++;
      }), b;
    },
    toArray: function(s) {
      return Y(s, function(b) {
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
  return x.Activity = T, x.Children = Fu, x.Component = et, x.Fragment = X, x.Profiler = Q, x.PureComponent = qt, x.StrictMode = h, x.Suspense = cl, x.ViewTransition = j, x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tl, x.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return tl.H.useMemoCache(s);
    }
  }, x.addTransitionType = Pt, x.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, x.cacheSignal = function() {
    return null;
  }, x.cloneElement = function(s, b, C) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var R = yl({}, s.props), I = s.key;
    if (b != null)
      for (P in b.key !== void 0 && (I = "" + b.key), b)
        !Gt.call(b, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && b.ref === void 0 || (R[P] = b[P]);
    var P = arguments.length - 2;
    if (P === 1) R.children = C;
    else if (1 < P) {
      for (var ul = Array(P), D = 0; D < P; D++)
        ul[D] = arguments[D + 2];
      R.children = ul;
    }
    return Tt(s.type, I, R);
  }, x.createContext = function(s) {
    return s = {
      $$typeof: G,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: Sl,
      _context: s
    }, s;
  }, x.createElement = function(s, b, C) {
    var R, I = {}, P = null;
    if (b != null)
      for (R in b.key !== void 0 && (P = "" + b.key), b)
        Gt.call(b, R) && R !== "key" && R !== "__self" && R !== "__source" && (I[R] = b[R]);
    var ul = arguments.length - 2;
    if (ul === 1) I.children = C;
    else if (1 < ul) {
      for (var D = Array(ul), q = 0; q < ul; q++)
        D[q] = arguments[q + 2];
      I.children = D;
    }
    if (s && s.defaultProps)
      for (R in ul = s.defaultProps, ul)
        I[R] === void 0 && (I[R] = ul[R]);
    return Tt(s, P, I);
  }, x.createRef = function() {
    return { current: null };
  }, x.forwardRef = function(s) {
    return { $$typeof: Tl, render: s };
  }, x.isValidElement = ft, x.lazy = function(s) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: s },
      _init: dl
    };
  }, x.memo = function(s, b) {
    return {
      $$typeof: Yl,
      type: s,
      compare: b === void 0 ? null : b
    };
  }, x.startTransition = Ct, x.unstable_useCacheRefresh = function() {
    return tl.H.useCacheRefresh();
  }, x.use = function(s) {
    return tl.H.use(s);
  }, x.useActionState = function(s, b, C) {
    return tl.H.useActionState(s, b, C);
  }, x.useCallback = function(s, b) {
    return tl.H.useCallback(s, b);
  }, x.useContext = function(s) {
    return tl.H.useContext(s);
  }, x.useDebugValue = function() {
  }, x.useDeferredValue = function(s, b) {
    return tl.H.useDeferredValue(s, b);
  }, x.useEffect = function(s, b) {
    return tl.H.useEffect(s, b);
  }, x.useEffectEvent = function(s) {
    return tl.H.useEffectEvent(s);
  }, x.useId = function() {
    return tl.H.useId();
  }, x.useImperativeHandle = function(s, b, C) {
    return tl.H.useImperativeHandle(s, b, C);
  }, x.useInsertionEffect = function(s, b) {
    return tl.H.useInsertionEffect(s, b);
  }, x.useLayoutEffect = function(s, b) {
    return tl.H.useLayoutEffect(s, b);
  }, x.useMemo = function(s, b) {
    return tl.H.useMemo(s, b);
  }, x.useOptimistic = function(s, b) {
    return tl.H.useOptimistic(s, b);
  }, x.useReducer = function(s, b, C) {
    return tl.H.useReducer(s, b, C);
  }, x.useRef = function(s) {
    return tl.H.useRef(s);
  }, x.useState = function(s) {
    return tl.H.useState(s);
  }, x.useSyncExternalStore = function(s, b, C) {
    return tl.H.useSyncExternalStore(
      s,
      b,
      C
    );
  }, x.useTransition = function() {
    return tl.H.useTransition();
  }, x.version = "19.3.1", x;
}
var em;
function Co() {
  return em || (em = 1, zo.exports = vh()), zo.exports;
}
var el = Co(), Oo = { exports: {} }, nn = {}, _o = { exports: {} }, Ao = {};
var nm;
function dh() {
  return nm || (nm = 1, (function(z) {
    function $(A, B) {
      var Y = A.length;
      A.push(B);
      l: for (; 0 < Y; ) {
        var dl = Y - 1 >>> 1, nl = A[dl];
        if (0 < Q(nl, B))
          A[dl] = B, A[Y] = nl, Y = dl;
        else break l;
      }
    }
    function X(A) {
      return A.length === 0 ? null : A[0];
    }
    function h(A) {
      if (A.length === 0) return null;
      var B = A[0], Y = A.pop();
      if (Y !== B) {
        A[0] = Y;
        l: for (var dl = 0, nl = A.length, Ct = nl >>> 1; dl < Ct; ) {
          var Pt = 2 * (dl + 1) - 1, Fu = A[Pt], s = Pt + 1, b = A[s];
          if (0 > Q(Fu, Y))
            s < nl && 0 > Q(b, Fu) ? (A[dl] = b, A[s] = Y, dl = s) : (A[dl] = Fu, A[Pt] = Y, dl = Pt);
          else if (s < nl && 0 > Q(b, Y))
            A[dl] = b, A[s] = Y, dl = s;
          else break l;
        }
      }
      return B;
    }
    function Q(A, B) {
      var Y = A.sortIndex - B.sortIndex;
      return Y !== 0 ? Y : A.id - B.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Sl = performance;
      z.unstable_now = function() {
        return Sl.now();
      };
    } else {
      var G = Date, Tl = G.now();
      z.unstable_now = function() {
        return G.now() - Tl;
      };
    }
    var cl = [], Yl = [], p = 1, T = null, j = 3, Cl = !1, at = !1, $l = !1, yl = !1, St = typeof setTimeout == "function" ? setTimeout : null, et = typeof clearTimeout == "function" ? clearTimeout : null, Ju = typeof setImmediate < "u" ? setImmediate : null;
    function qt(A) {
      for (var B = X(Yl); B !== null; ) {
        if (B.callback === null) h(Yl);
        else if (B.startTime <= A)
          h(Yl), B.sortIndex = B.expirationTime, $(cl, B);
        else break;
        B = X(Yl);
      }
    }
    function xt(A) {
      if ($l = !1, qt(A), !at)
        if (X(cl) !== null)
          at = !0, nt || (nt = !0, ft());
        else {
          var B = X(Yl);
          B !== null && Rl(xt, B.startTime - A);
        }
    }
    var nt = !1, K = -1, tl = 5, Gt = -1;
    function Tt() {
      return yl ? !0 : !(z.unstable_now() - Gt < tl);
    }
    function Et() {
      if (yl = !1, nt) {
        var A = z.unstable_now();
        Gt = A;
        var B = !0;
        try {
          l: {
            at = !1, $l && ($l = !1, et(K), K = -1), Cl = !0;
            var Y = j;
            try {
              t: {
                for (qt(A), T = X(cl); T !== null && !(T.expirationTime > A && Tt()); ) {
                  var dl = T.callback;
                  if (typeof dl == "function") {
                    T.callback = null, j = T.priorityLevel;
                    var nl = dl(
                      T.expirationTime <= A
                    );
                    if (A = z.unstable_now(), typeof nl == "function") {
                      T.callback = nl, qt(A), B = !0;
                      break t;
                    }
                    T === X(cl) && h(cl), qt(A);
                  } else h(cl);
                  T = X(cl);
                }
                if (T !== null) B = !0;
                else {
                  var Ct = X(Yl);
                  Ct !== null && Rl(
                    xt,
                    Ct.startTime - A
                  ), B = !1;
                }
              }
              break l;
            } finally {
              T = null, j = Y, Cl = !1;
            }
            B = void 0;
          }
        } finally {
          B ? ft() : nt = !1;
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
    function Rl(A, B) {
      K = St(function() {
        A(z.unstable_now());
      }, B);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, z.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : tl = 0 < A ? Math.floor(1e3 / A) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, z.unstable_next = function(A) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = j;
      }
      var Y = j;
      j = B;
      try {
        return A();
      } finally {
        j = Y;
      }
    }, z.unstable_requestPaint = function() {
      yl = !0;
    }, z.unstable_runWithPriority = function(A, B) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Y = j;
      j = A;
      try {
        return B();
      } finally {
        j = Y;
      }
    }, z.unstable_scheduleCallback = function(A, B, Y) {
      var dl = z.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? dl + Y : dl) : Y = dl, A) {
        case 1:
          var nl = -1;
          break;
        case 2:
          nl = 250;
          break;
        case 5:
          nl = 1073741823;
          break;
        case 4:
          nl = 1e4;
          break;
        default:
          nl = 5e3;
      }
      return nl = Y + nl, A = {
        id: p++,
        callback: B,
        priorityLevel: A,
        startTime: Y,
        expirationTime: nl,
        sortIndex: -1
      }, Y > dl ? (A.sortIndex = Y, $(Yl, A), X(cl) === null && A === X(Yl) && ($l ? (et(K), K = -1) : $l = !0, Rl(xt, Y - dl))) : (A.sortIndex = nl, $(cl, A), at || Cl || (at = !0, nt || (nt = !0, ft()))), A;
    }, z.unstable_shouldYield = Tt, z.unstable_wrapCallback = function(A) {
      var B = j;
      return function() {
        var Y = j;
        j = B;
        try {
          return A.apply(this, arguments);
        } finally {
          j = Y;
        }
      };
    };
  })(Ao)), Ao;
}
var fm;
function mh() {
  return fm || (fm = 1, _o.exports = dh()), _o.exports;
}
var No = { exports: {} }, Ll = {};
var cm;
function yh() {
  if (cm) return Ll;
  cm = 1;
  var z = Co();
  function $(p) {
    var T = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        T += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + p + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function X() {
  }
  var h = {
    d: {
      f: X,
      r: function() {
        throw Error($(522));
      },
      D: X,
      C: X,
      L: X,
      m: X,
      X,
      S: X,
      M: X
    },
    p: 0,
    findDOMNode: null
  }, Q = /* @__PURE__ */ Symbol.for("react.portal"), Sl = /* @__PURE__ */ Symbol.for("react.recoverable"), G = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function Tl(p, T, j) {
    var Cl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: Cl == null ? null : Cl === G ? G : "" + Cl,
      children: p,
      containerInfo: T,
      implementation: j
    };
  }
  var cl = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Yl(p, T) {
    if (p === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return Ll.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Ll.browser = function(p) {
    return { $$typeof: Sl, _reason: p };
  }, Ll.createPortal = function(p, T) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error($(299));
    return Tl(p, T, null, j);
  }, Ll.flushSync = function(p) {
    var T = cl.T, j = h.p;
    try {
      if (cl.T = null, h.p = 2, p) return p();
    } finally {
      cl.T = T, h.p = j, h.d.f();
    }
  }, Ll.preconnect = function(p, T) {
    typeof p == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, h.d.C(p, T));
  }, Ll.prefetchDNS = function(p) {
    typeof p == "string" && h.d.D(p);
  }, Ll.preinit = function(p, T) {
    if (typeof p == "string" && T && typeof T.as == "string") {
      var j = T.as, Cl = Yl(j, T.crossOrigin), at = typeof T.integrity == "string" ? T.integrity : void 0, $l = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      j === "style" ? h.d.S(
        p,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: Cl,
          integrity: at,
          fetchPriority: $l
        }
      ) : j === "script" && h.d.X(p, {
        crossOrigin: Cl,
        integrity: at,
        fetchPriority: $l,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, Ll.preinitModule = function(p, T) {
    if (typeof p == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var j = Yl(
            T.as,
            T.crossOrigin
          );
          h.d.M(p, {
            crossOrigin: j,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
          });
        }
      } else T == null && h.d.M(p);
  }, Ll.preload = function(p, T) {
    if (typeof p == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var j = T.as, Cl = Yl(j, T.crossOrigin);
      h.d.L(p, j, {
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
  }, Ll.preloadModule = function(p, T) {
    if (typeof p == "string")
      if (T) {
        var j = Yl(T.as, T.crossOrigin);
        h.d.m(p, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: j,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
        });
      } else h.d.m(p);
  }, Ll.requestFormReset = function(p) {
    h.d.r(p);
  }, Ll.unstable_batchedUpdates = function(p, T) {
    return p(T);
  }, Ll.useFormState = function(p, T, j) {
    return cl.H.useFormState(p, T, j);
  }, Ll.useFormStatus = function() {
    return cl.H.useHostTransitionStatus();
  }, Ll.version = "19.3.1", Ll;
}
var im;
function rh() {
  if (im) return No.exports;
  im = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch ($) {
        console.error($);
      }
  }
  return z(), No.exports = yh(), No.exports;
}
var om;
function hh() {
  if (om) return nn;
  om = 1;
  var z = mh(), $ = Co(), X = rh();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Q(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Sl(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function G(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Tl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function cl(l) {
    if (Sl(l) !== l)
      throw Error(h(188));
  }
  function Yl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Sl(l), t === null) throw Error(h(188));
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
          if (n === u) return cl(e), l;
          if (n === a) return cl(e), t;
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
  function p(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = p(l), t !== null) return t;
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
  function j(l) {
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
    var t = [null, null], u = j(l);
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
  function yl(l) {
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
  var K = Object.assign, tl = /* @__PURE__ */ Symbol.for("react.element"), Gt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Tt = /* @__PURE__ */ Symbol.for("react.portal"), Et = /* @__PURE__ */ Symbol.for("react.fragment"), ft = /* @__PURE__ */ Symbol.for("react.strict_mode"), hu = /* @__PURE__ */ Symbol.for("react.profiler"), wu = /* @__PURE__ */ Symbol.for("react.consumer"), Rl = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), dl = /* @__PURE__ */ Symbol.for("react.memo"), nl = /* @__PURE__ */ Symbol.for("react.lazy"), Ct = /* @__PURE__ */ Symbol.for("react.activity"), Pt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Fu = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), s = /* @__PURE__ */ Symbol.for("react.view_transition"), b = /* @__PURE__ */ Symbol.for("react.recoverable"), C = Symbol.iterator;
  function R(l) {
    return l === null || typeof l != "object" ? null : (l = C && l[C] || l["@@iterator"], typeof l == "function" ? l : null);
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
      case B:
        return "Suspense";
      case Y:
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
        case A:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case dl:
          return t = l.displayName || null, t !== null ? t : P(l.type) || "Memo";
        case nl:
          t = l._payload, l = l._init;
          try {
            return P(l(t));
          } catch {
          }
      }
    return null;
  }
  var ul = Array.isArray, D = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Gf = [], Sa = -1;
  function Xt(l) {
    return { current: l };
  }
  function ql(l) {
    0 > Sa || (l.current = Gf[Sa], Gf[Sa] = null, Sa--);
  }
  function rl(l, t) {
    Sa++, Gf[Sa] = l.current, l.current = t;
  }
  var Qt = Xt(null), se = Xt(null), gu = Xt(null), cn = Xt(null);
  function on(l, t) {
    switch (rl(gu, t), rl(se, l), rl(Qt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? sd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = sd(t), l = vd(t, l);
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
    ql(Qt), rl(Qt, l);
  }
  function Ta() {
    ql(Qt), ql(se), ql(gu);
  }
  function Xf(l) {
    var t = l.memoizedState;
    t !== null && (fe._currentValue = t.memoizedState, rl(cn, l)), t = Qt.current;
    var u = vd(t, l.type);
    t !== u && (rl(se, l), rl(Qt, u));
  }
  function sn(l) {
    se.current === l && (ql(Qt), ql(se)), cn.current === l && (ql(cn), fe._currentValue = lu);
  }
  var Qf, Ro;
  function Su(l) {
    if (Qf === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Qf = t && t[1] || "", Ro = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qf + l + Ro;
  }
  var Vf = !1;
  function Zf(l, t) {
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
  function mm(l, t) {
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
        return Zf(l.type, !1);
      case 11:
        return Zf(l.type.render, !1);
      case 1:
        return Zf(l.type, !0);
      case 31:
        return Su("Activity");
      case 30:
        return Su("ViewTransition");
      default:
        return "";
    }
  }
  function Ho(l) {
    try {
      var t = "", u = null;
      do
        t += mm(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Lf = Object.prototype.hasOwnProperty, Kf = z.unstable_scheduleCallback, Jf = z.unstable_cancelCallback, ym = z.unstable_shouldYield, rm = z.unstable_requestPaint, ct = z.unstable_now, hm = z.unstable_getCurrentPriorityLevel, jo = z.unstable_ImmediatePriority, po = z.unstable_UserBlockingPriority, vn = z.unstable_NormalPriority, gm = z.unstable_LowPriority, Bo = z.unstable_IdlePriority, Sm = z.log, Tm = z.unstable_setDisableYieldValue, ve = null, it = null;
  function Tu(l) {
    if (typeof Sm == "function" && Tm(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(ve, l);
      } catch {
      }
  }
  var ot = Math.clz32 ? Math.clz32 : zm, Em = Math.log, bm = Math.LN2;
  function zm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Em(l) / bm | 0) | 0;
  }
  var dn = 256, mn = 262144, yn = 4194304;
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
  function rn(l, t, u) {
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
  function Yo(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var a = 31 - ot(u), e = 1 << a;
        t |= l[a], u &= ~e;
      }
    return t;
  }
  function Om(l, t) {
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
  function qo() {
    var l = yn;
    return yn <<= 1, (yn & 62914560) === 0 && (yn = 4194304), l;
  }
  function wf(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function me(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function _m(l, t, u, a, e, n) {
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
    a !== 0 && xo(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function xo(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ot(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Go(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ot(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Xo(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : Ff(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function Ff(l) {
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
  function Wf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qo() {
    var l = q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Fd(l.type));
  }
  function Vo(l, t) {
    var u = q.p;
    try {
      return q.p = l, t();
    } finally {
      q.p = u;
    }
  }
  var tu = Math.random().toString(36).slice(2), xl = "__reactFiber$" + tu, kl = "__reactProps$" + tu, Ea = "__reactContainer$" + tu, Zo = "__reactEvents$" + tu, Am = "__reactListeners$" + tu, Nm = "__reactHandles$" + tu, Lo = "__reactResources$" + tu, ye = "__reactMarker$" + tu, hn = "__reactLoad$" + tu;
  function gn(l) {
    delete l[xl], delete l[kl], delete l[Am], delete l[Nm];
  }
  function $u(l) {
    var t;
    if (t = l[xl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Ea] || u[xl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Dd(l); l !== null; ) {
            if (u = l[xl]) return u;
            l = Dd(l);
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
    var t = l[Lo];
    return t || (t = l[Lo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[ye] = !0;
  }
  function Ko(l) {
    l[hn] = void 0;
  }
  var Jo = /* @__PURE__ */ new Set(), wo = {};
  function ku(l, t) {
    Oa(l, t), Oa(l + "Capture", t);
  }
  function Oa(l, t) {
    for (wo[l] = t, l = 0; l < t.length; l++)
      Jo.add(t[l]);
  }
  var Mm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fo = {}, Wo = {};
  function Dm(l) {
    return Lf.call(Wo, l) ? !0 : Lf.call(Fo, l) ? !1 : Mm.test(l) ? Wo[l] = !0 : (Fo[l] = !0, !1);
  }
  var ll = !1;
  function $o() {
    var l = ll;
    return ll = !1, l;
  }
  function Sn(l, t, u) {
    if (Dm(t))
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
  function Tn(l, t, u) {
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
  function ko(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Um(l, t, u) {
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
  function $f(l) {
    if (!l._valueTracker) {
      var t = ko(l) ? "checked" : "value";
      l._valueTracker = Um(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Io(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = ko(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  var Cm = /[\n"\\]/g;
  function bt(l) {
    return l.replace(
      Cm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kf(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? If(l, st(l.value)) : If(l, st(t)) : u != null ? If(l, st(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + st(c) : l.removeAttribute("name");
  }
  function Po(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        $f(l);
        return;
      }
      u = u != null ? "" + st(u) : "", t = t != null ? "" + st(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), $f(l);
  }
  function If(l, t) {
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
  function l0(l, t, u) {
    if (t != null && (t = "" + st(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + st(u) : "";
  }
  function t0(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (ul(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = st(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), $f(l);
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
  var Rm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function u0(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Rm.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function a0(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", ll = !0);
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && (u0(l, e, a), ll = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && u0(l, n, t[n]);
  }
  function Pf(l) {
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
  var Hm = /* @__PURE__ */ new Map([
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
  ]), jm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function En(l) {
    return jm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Vt() {
  }
  var lc = null;
  function tc(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Na = null, Ma = null;
  function e0(l) {
    var t = ba(l);
    if (t && (l = t.stateNode)) {
      var u = l[kl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (kf(
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
                kf(
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
              a = u[t], a.form === l.form && Io(a);
          }
          break l;
        case "textarea":
          l0(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && _a(l, !!u.multiple, t, !1);
      }
    }
  }
  var uc = !1;
  function n0(l, t, u) {
    if (uc) return l(t, u);
    uc = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (uc = !1, (Na !== null || Ma !== null) && (bf(), Na && (t = Na, l = Ma, Ma = Na = null, e0(t), l)))
        for (t = 0; t < l.length; t++) e0(l[t]);
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
  var au = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ac = !1;
  if (au)
    try {
      var ge = {};
      Object.defineProperty(ge, "passive", {
        get: function() {
          ac = !0;
        }
      }), window.addEventListener("test", ge, ge), window.removeEventListener("test", ge, ge);
    } catch {
      ac = !1;
    }
  var Eu = null, ec = null, bn = null;
  function f0() {
    if (bn) return bn;
    var l, t = ec, u = t.length, a, e = "value" in Eu ? Eu.value : Eu.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return bn = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function zn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function On() {
    return !0;
  }
  function c0() {
    return !1;
  }
  function Jl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? On : c0, this.isPropagationStopped = c0, this;
    }
    return K(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = On);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = On);
      },
      persist: function() {
      },
      isPersistent: On
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
  }, _n = Jl(bu), Se = K({}, bu, { view: 0, detail: 0 }), pm = Jl(Se), nc, fc, Te, An = K({}, Se, {
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
    getModifierState: ic,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Te && (Te && l.type === "mousemove" ? (nc = l.screenX - Te.screenX, fc = l.screenY - Te.screenY) : fc = nc = 0, Te = l), nc);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : fc;
    }
  }), i0 = Jl(An), Bm = K({}, An, { dataTransfer: 0 }), Ym = Jl(Bm), qm = K({}, Se, { relatedTarget: 0 }), cc = Jl(qm), xm = K({}, bu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gm = Jl(xm), Xm = K({}, bu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Qm = Jl(Xm), Vm = K({}, bu, { data: 0 }), o0 = Jl(Vm), Zm = {
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
  }, Lm = {
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
  }, Km = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Jm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Km[l]) ? !!t[l] : !1;
  }
  function ic() {
    return Jm;
  }
  var wm = K({}, Se, {
    key: function(l) {
      if (l.key) {
        var t = Zm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = zn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Lm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ic,
    charCode: function(l) {
      return l.type === "keypress" ? zn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? zn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Fm = Jl(wm), Wm = K({}, An, {
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
  }), s0 = Jl(Wm), $m = K({}, bu, { submitter: 0 }), km = Jl($m), Im = K({}, Se, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ic
  }), Pm = Jl(Im), ly = K({}, bu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ty = Jl(ly), uy = K({}, An, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ay = Jl(uy), ey = K({}, bu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), ny = Jl(ey), fy = [9, 13, 27, 32], oc = au && "CompositionEvent" in window, Ee = null;
  au && "documentMode" in document && (Ee = document.documentMode);
  var cy = au && "TextEvent" in window && !Ee, v0 = au && (!oc || Ee && 8 < Ee && 11 >= Ee), d0 = " ", m0 = !1;
  function y0(l, t) {
    switch (l) {
      case "keyup":
        return fy.indexOf(t.keyCode) !== -1;
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
  function r0(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Da = !1;
  function iy(l, t) {
    switch (l) {
      case "compositionend":
        return r0(t);
      case "keypress":
        return t.which !== 32 ? null : (m0 = !0, d0);
      case "textInput":
        return l = t.data, l === d0 && m0 ? null : l;
      default:
        return null;
    }
  }
  function oy(l, t) {
    if (Da)
      return l === "compositionend" || !oc && y0(l, t) ? (l = f0(), bn = ec = Eu = null, Da = !1, l) : null;
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
        return v0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sy = {
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
  function h0(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!sy[l.type] : t === "textarea";
  }
  function g0(l, t, u, a) {
    Na ? Ma ? Ma.push(a) : Ma = [a] : Na = a, t = Mf(t, "onChange"), 0 < t.length && (u = new _n(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var be = null, ze = null;
  function vy(l) {
    ed(l, 0);
  }
  function Nn(l) {
    var t = re(l);
    if (Io(t)) return l;
  }
  function S0(l, t) {
    if (l === "change") return t;
  }
  var T0 = !1;
  if (au) {
    var sc;
    if (au) {
      var vc = "oninput" in document;
      if (!vc) {
        var E0 = document.createElement("div");
        E0.setAttribute("oninput", "return;"), vc = typeof E0.oninput == "function";
      }
      sc = vc;
    } else sc = !1;
    T0 = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function b0() {
    be && (be.detachEvent("onpropertychange", z0), ze = be = null);
  }
  function z0(l) {
    if (l.propertyName === "value" && Nn(ze)) {
      var t = [];
      g0(
        t,
        ze,
        l,
        tc(l)
      ), n0(vy, t);
    }
  }
  function dy(l, t, u) {
    l === "focusin" ? (b0(), be = t, ze = u, be.attachEvent("onpropertychange", z0)) : l === "focusout" && b0();
  }
  function my(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Nn(ze);
  }
  function yy(l, t) {
    if (l === "click") return Nn(t);
  }
  function ry(l, t) {
    if (l === "input" || l === "change")
      return Nn(t);
  }
  function hy(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : hy;
  function Oe(l, t) {
    if (vt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Lf.call(t, e) || !vt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function dc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function O0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function _0(l, t) {
    var u = O0(l);
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
      u = O0(u);
    }
  }
  function A0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? A0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function N0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = dc(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = dc(l.document);
    }
    return t;
  }
  function mc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var gy = au && "documentMode" in document && 11 >= document.documentMode, Ua = null, yc = null, _e = null, rc = !1;
  function M0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    rc || Ua == null || Ua !== dc(a) || (a = Ua, "selectionStart" in a && mc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), _e && Oe(_e, a) || (_e = a, a = Mf(yc, "onSelect"), 0 < a.length && (t = new _n(
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
  }, hc = {}, D0 = {};
  au && (D0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ca.animationend.animation, delete Ca.animationiteration.animation, delete Ca.animationstart.animation), "TransitionEvent" in window || delete Ca.transitionend.transition);
  function Pu(l) {
    if (hc[l]) return hc[l];
    if (!Ca[l]) return l;
    var t = Ca[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in D0)
        return hc[l] = t[u];
    return l;
  }
  var U0 = Pu("animationend"), C0 = Pu("animationiteration"), R0 = Pu("animationstart"), Sy = Pu("transitionrun"), Ty = Pu("transitionstart"), Ey = Pu("transitioncancel"), H0 = Pu("transitionend"), j0 = /* @__PURE__ */ new Map(), gc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gc.push("scrollEnd");
  function Rt(l, t) {
    j0.set(l, t), ku(t, [l]);
  }
  var by = 0;
  function eu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Bt.identifierPrefix;
    var u = by++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function p0(l) {
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
    return l = p0(l), t = p0(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var Mn = typeof reportError == "function" ? reportError : function(l) {
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
  }, zt = [], Ra = 0, Sc = 0;
  function Dn() {
    for (var l = Ra, t = Sc = Ra = 0; t < l; ) {
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
  function Un(l, t, u, a) {
    zt[Ra++] = l, zt[Ra++] = t, zt[Ra++] = u, zt[Ra++] = a, Sc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Tc(l, t, u, a) {
    return Un(l, t, u, a), Cn(l);
  }
  function la(l, t) {
    return Un(l, null, null, t), Cn(l);
  }
  function B0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ot(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Cn(l) {
    if (50 < Je)
      throw Je = 0, Ef = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = {};
  function zy(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Il(l, t, u, a) {
    return new zy(l, t, u, a);
  }
  function Ec(l) {
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
  function Y0(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Rn(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof a == "function") Ec(a) && (f = 1);
    else if (typeof a == "string")
      f = $r(
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
        case B:
          return l = Il(13, u, t, e), l.elementType = B, l.lanes = n, l;
        case Y:
          return l = Il(19, u, t, e), l.elementType = Y, l.lanes = n, l;
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
              case A:
                f = 11;
                break l;
              case dl:
                f = 14;
                break l;
              case nl:
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
  function bc(l, t, u) {
    return l = Il(6, l, null, t), l.lanes = u, l;
  }
  function q0(l) {
    var t = Il(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function zc(l, t, u) {
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
  var x0 = /* @__PURE__ */ new WeakMap();
  function Ot(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = x0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Ho(t)
      }, x0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Ho(t)
    };
  }
  var ja = [], pa = 0, Hn = null, Ae = 0, _t = [], At = 0, zu = null, Zt = 1, Lt = "";
  function cu(l, t) {
    ja[pa++] = Ae, ja[pa++] = Hn, Hn = l, Ae = t;
  }
  function G0(l, t, u) {
    _t[At++] = Zt, _t[At++] = Lt, _t[At++] = zu, zu = l;
    var a = Zt;
    l = Lt;
    var e = 32 - ot(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - ot(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Zt = 1 << 32 - ot(t) + e | u << e | a, Lt = n + l;
    } else
      Zt = 1 << n | u << e | a, Lt = l;
  }
  function jn(l) {
    l.return !== null && (cu(l, 1), G0(l, 1, 0));
  }
  function Oc(l) {
    for (; l === Hn; )
      Hn = ja[--pa], ja[pa] = null, Ae = ja[--pa], ja[pa] = null;
    for (; l === zu; )
      zu = _t[--At], _t[At] = null, Lt = _t[--At], _t[At] = null, Zt = _t[--At], _t[At] = null;
  }
  function X0(l, t) {
    _t[At++] = Zt, _t[At++] = Lt, _t[At++] = zu, Zt = t.id, Lt = t.overflow, zu = l;
  }
  var jl = null, hl = null, L = !1, Ou = null, Nt = !1, _c = Error(h(519));
  function _u(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ne(Ot(t, l)), _c;
  }
  function Q0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[xl] = l, t[kl] = a, u) {
      case "dialog":
        w("cancel", t), w("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Fe.length; u++)
          w(Fe[u], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        w("error", t), w("load", t);
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        w("invalid", t), Po(
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
        w("invalid", t);
        break;
      case "textarea":
        w("invalid", t), t0(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || id(t.textContent, u) ? (a.popover != null && (w("beforetoggle", t), w("toggle", t)), a.onScroll != null && w("scroll", t), a.onScrollEnd != null && w("scrollend", t), a.onClick != null && (t.onclick = Vt), t = !0) : t = !1, t || _u(l, !0);
  }
  function pn(l) {
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
  function Ba(l) {
    if (l !== jl) return !1;
    if (!L) return pn(l), L = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || lo(l.type, l.memoizedProps)), u = !u), u && hl && _u(l), pn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      hl = Md(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      hl = Md(l);
    } else
      t === 27 ? (t = hl, Xu(l.type) ? (l = oo, oo = null, hl = l) : hl = t) : hl = jl ? Dt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    hl = jl = null, L = !1;
  }
  function Ac() {
    var l = Ou;
    return l !== null && (tt === null ? tt = l : tt.push.apply(
      tt,
      l
    ), Ou = null), l;
  }
  function Ne(l) {
    Ou === null ? Ou = [l] : Ou.push(l);
  }
  var Nc = Xt(null), aa = null, iu = null;
  function Au(l, t, u) {
    rl(Nc, t._currentValue), t._currentValue = u;
  }
  function ou(l) {
    l._currentValue = Nc.current, ql(Nc);
  }
  function Bn(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Mc(l, t, u, a) {
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
      } else if (e === cn.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(fe) : l = [fe]);
      }
      e = e.return;
    }
    return l !== null && Mc(
      t,
      l,
      u,
      a
    ), t.flags |= 262144, l !== null;
  }
  function Yn(l) {
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
  function qn(l, t) {
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
  var Oy = typeof AbortController < "u" ? AbortController : function() {
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
  }, _y = z.unstable_scheduleCallback, Ay = z.unstable_NormalPriority, Al = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Dc() {
    return {
      controller: new Oy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Me(l) {
    l.refCount--, l.refCount === 0 && _y(Ay, function() {
      l.controller.abort();
    });
  }
  function Z0(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var De = null;
  function Ny(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Ue = null, Uc = 0, fa = 0, Ya = null;
  function My(l, t) {
    if (Ue === null) {
      var u = Ue = [];
      Uc = 0, fa = Ki(), Ya = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Uc++, t.then(L0, L0), t;
  }
  function L0() {
    if (--Uc === 0 && (De = null, Ue !== null)) {
      Ya !== null && (Ya.status = "fulfilled");
      var l = Ue;
      Ue = null, fa = 0, Ya = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Dy(l, t) {
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
  var K0 = D.S;
  D.S = function(l, t) {
    if (qv = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && My(l, t), De !== null)
      for (var u = le; u !== null; )
        Z0(u, De), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = le; a !== null; )
        Z0(a, u), a = a.next;
      if (fa !== 0) {
        a = De, a === null && (a = De = []);
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    K0 !== null && K0(l, t);
  };
  var ca = Xt(null);
  function Cc() {
    var l = ca.current;
    return l !== null ? l : ml.pooledCache;
  }
  function xn(l, t) {
    t === null ? rl(ca, ca.current) : rl(ca, t.pool);
  }
  function J0() {
    var l = Cc();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var qa = Error(h(460)), Rc = Error(h(474)), Gn = Error(h(542)), Xn = { then: function() {
  } };
  function w0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function F0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Vt, Vt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, $0(l), l === void 0 && !("reason" in t) ? Error(h(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Vt, Vt);
        else {
          if (l = ml, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = t.reason, $0(l), l;
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
  function W0() {
    if (oa === null) throw Error(h(459));
    var l = oa;
    return oa = null, l;
  }
  function $0(l) {
    if (l === qa || l === Gn)
      throw Error(h(483));
  }
  var xa = null, Ce = 0;
  function Qn(l) {
    var t = Ce;
    return Ce += 1, xa === null && (xa = []), F0(xa, l, t);
  }
  function Nu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Vn(l, t) {
    throw t.$$typeof === tl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function k0(l) {
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
      return o === null || o.tag !== 6 ? (o = bc(y, d.mode, S), o.return = d, o) : (o = e(o, y), o.return = d, o);
    }
    function i(d, o, y, S) {
      var N = y.type;
      return N === Et ? (d = g(
        d,
        o,
        y.props.children,
        S,
        y.key
      ), Nu(d, y), d) : o !== null && (o.elementType === N || typeof N == "object" && N !== null && N.$$typeof === nl && ia(N) === o.type) ? (o = e(o, y.props), Nu(o, y), o.return = d, o) : (o = Rn(
        y.type,
        y.key,
        y.props,
        null,
        d.mode,
        S
      ), Nu(o, y), o.return = d, o);
    }
    function m(d, o, y, S) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== y.containerInfo || o.stateNode.implementation !== y.implementation ? (o = zc(y, d.mode, S), o.return = d, o) : (o = e(o, y.children || []), o.return = d, o);
    }
    function g(d, o, y, S, N) {
      return o === null || o.tag !== 7 ? (o = ta(
        y,
        d.mode,
        S,
        N
      ), o.return = d, o) : (o = e(o, y), o.return = d, o);
    }
    function E(d, o, y) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = bc(
          "" + o,
          d.mode,
          y
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Gt:
            return y = Rn(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              y
            ), Nu(y, o), y.return = d, y;
          case Tt:
            return o = zc(
              o,
              d.mode,
              y
            ), o.return = d, o;
          case nl:
            return o = ia(o), E(d, o, y);
        }
        if (ul(o) || R(o))
          return o = ta(
            o,
            d.mode,
            y,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return E(d, Qn(o), y);
        if (o.$$typeof === Rl)
          return E(
            d,
            qn(d, o),
            y
          );
        Vn(d, o);
      }
      return null;
    }
    function v(d, o, y, S) {
      var N = o !== null ? o.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return N !== null ? null : c(d, o, "" + y, S);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Gt:
            return y.key === N ? i(d, o, y, S) : null;
          case Tt:
            return y.key === N ? m(d, o, y, S) : null;
          case nl:
            return y = ia(y), v(d, o, y, S);
        }
        if (ul(y) || R(y))
          return N !== null ? null : g(d, o, y, S, null);
        if (typeof y.then == "function")
          return v(
            d,
            o,
            Qn(y),
            S
          );
        if (y.$$typeof === Rl)
          return v(
            d,
            o,
            qn(d, y),
            S
          );
        Vn(d, y);
      }
      return null;
    }
    function r(d, o, y, S, N) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return d = d.get(y) || null, c(o, d, "" + S, N);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Gt:
            return d = d.get(
              S.key === null ? y : S.key
            ) || null, i(o, d, S, N);
          case Tt:
            return d = d.get(
              S.key === null ? y : S.key
            ) || null, m(o, d, S, N);
          case nl:
            return S = ia(S), r(
              d,
              o,
              y,
              S,
              N
            );
        }
        if (ul(S) || R(S))
          return d = d.get(y) || null, g(o, d, S, N, null);
        if (typeof S.then == "function")
          return r(
            d,
            o,
            y,
            Qn(S),
            N
          );
        if (S.$$typeof === Rl)
          return r(
            d,
            o,
            y,
            qn(o, S),
            N
          );
        Vn(o, S);
      }
      return null;
    }
    function _(d, o, y, S) {
      for (var N = null, W = null, U = o, H = o = 0, Dl = null; U !== null && H < y.length; H++) {
        U.index > H ? (Dl = U, U = null) : Dl = U.sibling;
        var k = v(
          d,
          U,
          y[H],
          S
        );
        if (k === null) {
          U === null && (U = Dl);
          break;
        }
        l && U && k.alternate === null && t(d, U), o = n(k, o, H), W === null ? N = k : W.sibling = k, W = k, U = Dl;
      }
      if (H === y.length)
        return u(d, U), L && cu(d, H), N;
      if (U === null) {
        for (; H < y.length; H++)
          U = E(d, y[H], S), U !== null && (o = n(
            U,
            o,
            H
          ), W === null ? N = U : W.sibling = U, W = U);
        return L && cu(d, H), N;
      }
      for (U = a(U); H < y.length; H++)
        Dl = r(
          U,
          d,
          H,
          y[H],
          S
        ), Dl !== null && (l && (k = Dl.alternate, k !== null && U.delete(k.key === null ? H : k.key)), o = n(
          Dl,
          o,
          H
        ), W === null ? N = Dl : W.sibling = Dl, W = Dl);
      return l && U.forEach(function(Ku) {
        return t(d, Ku);
      }), L && cu(d, H), N;
    }
    function M(d, o, y, S) {
      if (y == null) throw Error(h(151));
      for (var N = null, W = null, U = o, H = o = 0, Dl = null, k = y.next(); U !== null && !k.done; H++, k = y.next()) {
        U.index > H ? (Dl = U, U = null) : Dl = U.sibling;
        var Ku = v(d, U, k.value, S);
        if (Ku === null) {
          U === null && (U = Dl);
          break;
        }
        l && U && Ku.alternate === null && t(d, U), o = n(Ku, o, H), W === null ? N = Ku : W.sibling = Ku, W = Ku, U = Dl;
      }
      if (k.done)
        return u(d, U), L && cu(d, H), N;
      if (U === null) {
        for (; !k.done; H++, k = y.next())
          k = E(d, k.value, S), k !== null && (o = n(k, o, H), W === null ? N = k : W.sibling = k, W = k);
        return L && cu(d, H), N;
      }
      for (U = a(U); !k.done; H++, k = y.next())
        k = r(U, d, H, k.value, S), k !== null && (l && (Dl = k.alternate, Dl !== null && U.delete(
          Dl.key === null ? H : Dl.key
        )), o = n(k, o, H), W === null ? N = k : W.sibling = k, W = k);
      return l && U.forEach(function(ih) {
        return t(d, ih);
      }), L && cu(d, H), N;
    }
    function Z(d, o, y, S) {
      if (typeof y == "object" && y !== null && y.type === Et && y.key === null && y.props.ref === void 0 && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Gt:
            l: {
              for (var N = y.key; o !== null; ) {
                if (o.key === N) {
                  if (N = y.type, N === Et) {
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
                  } else if (o.elementType === N || typeof N == "object" && N !== null && N.$$typeof === nl && ia(N) === o.type) {
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
              ), Nu(S, y), S.return = d, d = S) : (S = Rn(
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
              for (N = y.key; o !== null; ) {
                if (o.key === N)
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
              S = zc(y, d.mode, S), S.return = d, d = S;
            }
            return f(d);
          case nl:
            return y = ia(y), Z(
              d,
              o,
              y,
              S
            );
        }
        if (ul(y))
          return _(
            d,
            o,
            y,
            S
          );
        if (R(y)) {
          if (N = R(y), typeof N != "function") throw Error(h(150));
          return y = N.call(y), M(
            d,
            o,
            y,
            S
          );
        }
        if (typeof y.then == "function")
          return Z(
            d,
            o,
            Qn(y),
            S
          );
        if (y.$$typeof === Rl)
          return Z(
            d,
            o,
            qn(d, y),
            S
          );
        Vn(d, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, o !== null && o.tag === 6 ? (u(d, o.sibling), S = e(o, y), S.return = d, d = S) : (u(d, o), S = bc(y, d.mode, S), S.return = d, d = S), f(d)) : u(d, o);
    }
    return function(d, o, y, S) {
      try {
        Ce = 0;
        var N = Z(
          d,
          o,
          y,
          S
        );
        return xa = null, N;
      } catch (U) {
        if (U === qa || U === Gn) throw U;
        var W = Il(29, U, null, d.mode);
        return W.lanes = S, W.return = d, W;
      }
    };
  }
  var sa = k0(!0), I0 = k0(!1), Mu = !1;
  function Hc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function jc(l, t) {
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
    if (a = a.shared, (al & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Cn(l), B0(l, null, u), t;
    }
    return Un(l, a, t, u), Cn(l);
  }
  function Re(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Go(l, u);
    }
  }
  function pc(l, t) {
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
      var l = Ya;
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
        if (r ? (F & v) === v : (a & v) === v) {
          v !== 0 && v === fa && (Bc = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var _ = l, M = c;
            v = t;
            var Z = u;
            switch (M.tag) {
              case 1:
                if (_ = M.payload, typeof _ == "function") {
                  E = _.call(Z, E, v);
                  break l;
                }
                E = _;
                break l;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = M.payload, v = typeof _ == "function" ? _.call(Z, E, v) : _, v == null) break l;
                E = K({}, E, v);
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
      g === null && (i = E), e.baseState = i, e.firstBaseUpdate = m, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), Yu |= f, l.lanes = f, l.memoizedState = E;
    }
  }
  function P0(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function ls(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        P0(u[l], t);
  }
  var Cu = Xt(null), Zn = Xt(0);
  function ts(l, t) {
    l = yu, rl(Zn, l), rl(Cu, t), yu = l | t.baseLanes;
  }
  function Yc() {
    rl(Zn, yu), rl(Cu, Cu.current);
  }
  function qc() {
    yu = Zn.current, ql(Cu), ql(Zn);
  }
  var Xl = Xt(null), Kl = null;
  function Ru(l) {
    var t = l.alternate;
    rl(Ql, Ql.current & 1), rl(Xl, l), Kl === null && (t === null || Cu.current !== null || t.memoizedState !== null) && (Kl = l);
  }
  function xc(l) {
    rl(Ql, Ql.current), rl(Xl, l), Kl === null && (Kl = l);
  }
  function us(l) {
    l.tag === 22 ? (rl(Ql, Ql.current), rl(Xl, l), Kl === null && (Kl = l)) : Hu();
  }
  function Hu() {
    rl(Ql, Ql.current), rl(Xl, Xl.current);
  }
  function dt(l) {
    ql(Xl), Kl === l && (Kl = null), ql(Ql);
  }
  var Ql = Xt(0);
  function pe(l, t) {
    rl(Xl, Xl.current), rl(Ql, t);
  }
  function Gc(l) {
    ql(Ql), ql(Xl), Kl === l && (Kl = null);
  }
  function Ln(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || co(u) || io(u)))
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
  var su = 0, V = null, vl = null, Nl = null, Kn = !1, Ga = !1, va = !1, Jn = 0, Be = 0, Xa = null, Uy = 0;
  function zl() {
    throw Error(h(321));
  }
  function Xc(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!vt(l[u], t[u])) return !1;
    return !0;
  }
  function Qc(l, t, u, a, e, n) {
    return su = n, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = l === null || l.memoizedState === null ? Gs : Xs, va = !1, n = u(a, e), va = !1, Ga && (n = es(
      t,
      u,
      a,
      e
    )), as(l), n;
  }
  function as(l) {
    D.H = Pn;
    var t = vl !== null && vl.next !== null;
    if (su = 0, Nl = vl = V = null, Kn = !1, Be = 0, Xa = null, t) throw Error(h(300));
    l === null || Ml || (l = l.dependencies, l !== null && Yn(l) && (Ml = !0));
  }
  function es(l, t, u, a) {
    V = l;
    var e = 0;
    do {
      if (Ga && (Xa = null), Be = 0, Ga = !1, 25 <= e) throw Error(h(301));
      if (e += 1, Nl = vl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      D.H = qy, n = t(u, a);
    } while (Ga);
    return n;
  }
  function Cy() {
    var l = D.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ye(t) : t, l = l.useState()[0], (vl !== null ? vl.memoizedState : null) !== l && (V.flags |= 1024), t;
  }
  function Vc() {
    var l = Jn !== 0;
    return Jn = 0, l;
  }
  function Zc(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Lc(l) {
    if (Kn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Kn = !1;
    }
    su = 0, Nl = vl = V = null, Ga = !1, Be = Jn = 0, Xa = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nl === null ? V.memoizedState = Nl = l : Nl = Nl.next = l, Nl;
  }
  function _l() {
    if (vl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = vl.next;
    var t = Nl === null ? V.memoizedState : Nl.next;
    if (t !== null)
      Nl = t, vl = l;
    else {
      if (l === null)
        throw V.alternate === null ? Error(h(467)) : Error(h(310));
      vl = l, l = {
        memoizedState: vl.memoizedState,
        baseState: vl.baseState,
        baseQueue: vl.baseQueue,
        queue: vl.queue,
        next: null
      }, Nl === null ? V.memoizedState = Nl = l : Nl = Nl.next = l;
    }
    return Nl;
  }
  function wn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ye(l) {
    var t = Be;
    return Be += 1, Xa === null && (Xa = []), l = F0(Xa, l, t), t = V, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Gs : Xs), l;
  }
  function Fn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ye(l);
      if (l.$$typeof === b) return;
      if (l.$$typeof === Rl) return Gl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Kc(l) {
    var t = null, u = V.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = V.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = wn(), V.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Fu;
    return t.index++, u;
  }
  function vu(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Wn(l) {
    var t = _l();
    return Jc(t, vl, l);
  }
  function Jc(l, t, u) {
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
        if (E !== m.lane ? (F & E) === E : (su & E) === E) {
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
            }, i === null ? (c = i = E, f = n) : i = i.next = E, V.lanes |= v, Yu |= v;
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
          }, i === null ? (c = i = v, f = n) : i = i.next = v, V.lanes |= E, Yu |= E;
        m = m.next;
      } while (m !== null && m !== t);
      if (i === null ? f = n : i.next = c, !vt(n, l.memoizedState) && (Ml = !0, g && (u = Ya, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function wc(l) {
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
  function ns(l, t, u) {
    var a = V, e = _l(), n = L;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !vt(
      (vl || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Ml = !0), e = e.queue, $c(is.bind(null, a, e, l), [
      l
    ]), l = e.getSnapshot !== t || f || Nl !== null && (Nl.memoizedState.tag & 1) !== 0, Qa(
      l ? 9 : 8,
      { destroy: void 0 },
      cs.bind(null, a, e, u, t),
      null
    ), l) {
      if (a.flags |= 2048, ml === null) throw Error(h(349));
      n || (su & 127) !== 0 || fs(a, t, u);
    }
    return u;
  }
  function fs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = V.updateQueue, t === null ? (t = wn(), V.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function cs(l, t, u, a) {
    t.value = u, t.getSnapshot = a, os(t) && ss(l);
  }
  function is(l, t, u) {
    return u(function() {
      os(t) && ss(l);
    });
  }
  function os(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !vt(l, u);
    } catch {
      return !0;
    }
  }
  function ss(l) {
    var t = la(l, 2);
    t !== null && ut(t, l, 2);
  }
  function Fc(l) {
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
  function vs(l, t, u, a) {
    return l.baseState = u, Jc(
      l,
      vl,
      typeof a == "function" ? a : vu
    );
  }
  function Ry(l, t, u, a, e) {
    if (In(l)) throw Error(h(485));
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
      D.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, ds(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function ds(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = D.T, f = {};
      f.types = n !== null ? n.types : null, D.T = f;
      try {
        var c = u(e, a), i = D.S;
        i !== null && i(f, c), ms(l, t, c);
      } catch (m) {
        Wc(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), D.T = n;
      }
    } else
      try {
        n = u(e, a), ms(l, t, n);
      } catch (m) {
        Wc(l, t, m);
      }
  }
  function ms(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        ys(l, t, a);
      },
      function(a) {
        return Wc(l, t, a);
      }
    ) : ys(l, t, u);
  }
  function ys(l, t, u) {
    t.status = "fulfilled", t.value = u, rs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, ds(l, u)));
  }
  function Wc(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, rs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function rs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function hs(l, t) {
    return t;
  }
  function gs(l, t) {
    if (L) {
      var u = ml.formState;
      if (u !== null) {
        l: {
          var a = V;
          if (L) {
            if (hl) {
              t: {
                for (var e = hl, n = Nt; e.nodeType !== 8; ) {
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
                hl = Dt(
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
      lastRenderedReducer: hs,
      lastRenderedState: t
    }, u.queue = a, u = Ys.bind(
      null,
      V,
      a
    ), a.dispatch = u, a = Fc(!1), n = ti.bind(
      null,
      V,
      !1,
      a.queue
    ), a = wl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Ry.bind(
      null,
      V,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Ss(l) {
    var t = _l();
    return Ts(t, vl, l);
  }
  function Ts(l, t, u) {
    if (t = Jc(
      l,
      t,
      hs
    )[0], l = Wn(vu)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ye(t);
      } catch (f) {
        throw f === qa ? Gn : f;
      }
    else a = t;
    t = _l();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (V.flags |= 2048, Qa(
      9,
      { destroy: void 0 },
      Hy.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Hy(l, t) {
    l.action = t;
  }
  function Es(l) {
    var t = _l(), u = vl;
    if (u !== null)
      return Ts(t, u, l);
    _l(), t = t.memoizedState, u = _l();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function Qa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = V.updateQueue, t === null && (t = wn(), V.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function bs() {
    return _l().memoizedState;
  }
  function $n(l, t, u, a) {
    var e = wl();
    V.flags |= l, e.memoizedState = Qa(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function kn(l, t, u, a) {
    var e = _l();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    vl !== null && a !== null && Xc(a, vl.memoizedState.deps) ? e.memoizedState = Qa(t, n, u, a) : (V.flags |= l, e.memoizedState = Qa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function zs(l, t) {
    $n(8390656, 8, l, t);
  }
  function $c(l, t) {
    kn(2048, 8, l, t);
  }
  function jy(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null)
      t = wn(), V.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function Os(l) {
    var t = _l().memoizedState;
    return jy({ ref: t, nextImpl: l }), function() {
      if ((al & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function _s(l, t) {
    return kn(4, 2, l, t);
  }
  function As(l, t) {
    return kn(4, 4, l, t);
  }
  function Ns(l, t) {
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
  function Ms(l, t, u) {
    u = u != null ? u.concat([l]) : null, kn(4, 4, Ns.bind(null, t, l), u);
  }
  function kc() {
  }
  function Ds(l, t) {
    var u = _l();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Xc(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Us(l, t) {
    var u = _l();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Xc(t, a[1]))
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
  function Ic(l, t, u) {
    return u === void 0 || (su & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = Gv(), V.lanes |= l, Yu |= l, u);
  }
  function Cs(l, t, u, a) {
    return vt(u, t) ? u : Cu.current !== null ? (l = Ic(l, u, a), vt(l, t) || (Ml = !0), l) : (su & 106) === 0 || (su & 1073741824) !== 0 && (F & 261930) === 0 ? (Ml = !0, l.memoizedState = u) : (l = Gv(), V.lanes |= l, Yu |= l, t);
  }
  function Rs(l, t, u, a, e) {
    var n = q.p;
    q.p = n !== 0 && 8 > n ? n : 8;
    var f = D.T, c = {};
    c.types = f !== null ? f.types : null, D.T = c, ti(l, !1, t, u);
    try {
      var i = e(), m = D.S;
      if (m !== null && m(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Dy(
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
      q.p = n, f !== null && c.types !== null && (f.types = c.types), D.T = f;
    }
  }
  function py() {
  }
  function Pc(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = Hs(l).queue;
    Rs(
      l,
      e,
      t,
      lu,
      u === null ? py : function() {
        return js(l), u(a);
      }
    );
  }
  function Hs(l) {
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
  function js(l) {
    var t = Hs(l);
    t.next === null && (t = l.alternate.memoizedState), qe(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function li() {
    return Gl(fe);
  }
  function ps() {
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
          a !== null && (ut(a, t, u), Re(a, t, u)), t = { cache: Dc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Yy(l, t, u) {
    var a = ht();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, In(l) ? qs(t, u) : (u = Tc(l, t, u, a), u !== null && (ut(u, l, a), xs(u, t, a)));
  }
  function Ys(l, t, u) {
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
    if (In(l)) qs(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, vt(c, f))
            return Un(l, t, e, 0), ml === null && Dn(), !1;
        } catch {
        }
      if (u = Tc(l, t, e, a), u !== null)
        return ut(u, l, a), xs(u, t, a), !0;
    }
    return !1;
  }
  function ti(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Ki(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, In(l)) {
      if (t) throw Error(h(479));
    } else
      t = Tc(
        l,
        u,
        a,
        2
      ), t !== null && ut(t, l, 2);
  }
  function In(l) {
    var t = l.alternate;
    return l === V || t !== null && t === V;
  }
  function qs(l, t) {
    Ga = Kn = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function xs(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Go(l, u);
    }
  }
  var Pn = {
    readContext: Gl,
    use: Fn,
    useCallback: zl,
    useContext: zl,
    useEffect: zl,
    useImperativeHandle: zl,
    useLayoutEffect: zl,
    useInsertionEffect: zl,
    useMemo: zl,
    useReducer: zl,
    useRef: zl,
    useState: zl,
    useDebugValue: zl,
    useDeferredValue: zl,
    useTransition: zl,
    useSyncExternalStore: zl,
    useId: zl,
    useHostTransitionStatus: zl,
    useFormState: zl,
    useActionState: zl,
    useOptimistic: zl,
    useMemoCache: zl,
    useCacheRefresh: zl,
    useEffectEvent: zl
  }, Gs = {
    readContext: Gl,
    use: Fn,
    useCallback: function(l, t) {
      return wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Gl,
    useEffect: zs,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, $n(
        4194308,
        4,
        Ns.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return $n(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      $n(4, 2, l, t);
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
      }, a.queue = l, l = l.dispatch = Yy.bind(
        null,
        V,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Fc(l);
      var t = l.queue, u = Ys.bind(null, V, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: kc,
    useDeferredValue: function(l, t) {
      var u = wl();
      return Ic(u, l, t);
    },
    useTransition: function() {
      var l = Fc(!1);
      return l = Rs.bind(
        null,
        V,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = V, e = wl();
      if (L) {
        if (u === void 0)
          throw Error(h(407));
        u = u();
      } else {
        if (u = t(), ml === null)
          throw Error(h(349));
        (F & 127) !== 0 || fs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, zs(is.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Qa(
        9,
        { destroy: void 0 },
        cs.bind(
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
      var l = wl(), t = ml.identifierPrefix;
      if (L) {
        var u = Lt, a = Zt;
        u = (a & ~(1 << 32 - ot(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Jn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Uy++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: li,
    useFormState: gs,
    useActionState: gs,
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
      return t.queue = u, t = ti.bind(
        null,
        V,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Kc,
    useCacheRefresh: function() {
      return wl().memoizedState = By.bind(
        null,
        V
      );
    },
    useEffectEvent: function(l) {
      var t = wl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((al & 2) !== 0)
          throw Error(h(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Xs = {
    readContext: Gl,
    use: Fn,
    useCallback: Ds,
    useContext: Gl,
    useEffect: $c,
    useImperativeHandle: Ms,
    useInsertionEffect: _s,
    useLayoutEffect: As,
    useMemo: Us,
    useReducer: Wn,
    useRef: bs,
    useState: function() {
      return Wn(vu);
    },
    useDebugValue: kc,
    useDeferredValue: function(l, t) {
      var u = _l();
      return Cs(
        u,
        vl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wn(vu)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : Ye(l),
        t
      ];
    },
    useSyncExternalStore: ns,
    useId: ps,
    useHostTransitionStatus: li,
    useFormState: Ss,
    useActionState: Ss,
    useOptimistic: function(l, t) {
      var u = _l();
      return vs(u, vl, l, t);
    },
    useMemoCache: Kc,
    useCacheRefresh: Bs,
    useEffectEvent: Os
  }, qy = {
    readContext: Gl,
    use: Fn,
    useCallback: Ds,
    useContext: Gl,
    useEffect: $c,
    useImperativeHandle: Ms,
    useInsertionEffect: _s,
    useLayoutEffect: As,
    useMemo: Us,
    useReducer: wc,
    useRef: bs,
    useState: function() {
      return wc(vu);
    },
    useDebugValue: kc,
    useDeferredValue: function(l, t) {
      var u = _l();
      return vl === null ? Ic(u, l, t) : Cs(
        u,
        vl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = wc(vu)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : Ye(l),
        t
      ];
    },
    useSyncExternalStore: ns,
    useId: ps,
    useHostTransitionStatus: li,
    useFormState: Es,
    useActionState: Es,
    useOptimistic: function(l, t) {
      var u = _l();
      return vl !== null ? vs(u, vl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Kc,
    useCacheRefresh: Bs,
    useEffectEvent: Os
  };
  function ui(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : K({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ai = {
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
  function Qs(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Oe(u, a) || !Oe(e, n) : !0;
  }
  function Vs(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && ai.enqueueReplaceState(t, t.state, null);
  }
  function da(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = K({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Zs(l) {
    Mn(l);
  }
  function Ls(l) {
    console.error(l);
  }
  function Ks(l) {
    Mn(l);
  }
  function lf(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Js(l, t, u) {
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
  function ei(l, t, u) {
    return u = Du(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      lf(l, t);
    }, u;
  }
  function ws(l) {
    return l = Du(l), l.tag = 3, l;
  }
  function Fs(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Js(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Js(t, u, a), typeof e != "function" && (qu === null ? qu = /* @__PURE__ */ new Set([this]) : qu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function xy(l, t, u, a, e) {
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
            return Kl === null ? zf() : u.alternate === null && Ol === 0 && (Ol = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Xn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Vi(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Xn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Vi(l, a, e)), !1;
        }
        throw Error(h(435, u.tag));
      }
      return Vi(l, a, e), zf(), !1;
    }
    if (L)
      return t = Xl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== _c && (l = Error(h(422), { cause: a }), Ne(Ot(l, u)))) : (a !== _c && (t = Error(h(423), {
        cause: a
      }), Ne(
        Ot(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = Ot(a, u), e = ei(
        l.stateNode,
        a,
        e
      ), pc(l, e), Ol !== 4 && (Ol = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = Ot(n, u), Ke === null ? Ke = [n] : Ke.push(n), Ol !== 4 && (Ol = 2), t === null) return !0;
    a = Ot(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ei(u.stateNode, a, l), pc(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (qu === null || !qu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = ws(e), Fs(
              e,
              l,
              u,
              a
            ), pc(u, e), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ni = Error(h(461)), Ml = !1;
  function Ul(l, t, u, a) {
    t.child = l === null ? I0(t, null, u, a) : sa(
      t,
      l.child,
      u,
      a
    );
  }
  function Ws(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return na(t), a = Qc(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Vc(), l !== null && !Ml ? (Zc(l, t, e), du(l, t, e)) : (L && c && jn(t), t.flags |= 1, Ul(l, t, a, e), t.child);
  }
  function $s(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Ec(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, ks(
        l,
        t,
        n,
        a,
        e
      )) : (l = Rn(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !mi(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Oe, u(f, a) && l.ref === t.ref)
        return du(l, t, e);
    }
    return t.flags |= 1, l = fu(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function ks(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Oe(n, a) && l.ref === t.ref)
        if (Ml = !1, t.pendingProps = a = n, mi(l, e))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else
          return t.lanes = l.lanes, du(l, t, e);
    }
    return fi(
      l,
      t,
      u,
      a,
      e
    );
  }
  function Is(l, t, u, a) {
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
        return Ps(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && xn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? ts(t, n) : Yc(), us(t);
      else
        return a = t.lanes = 536870912, Ps(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (xn(t, n.cachePool), ts(t, n), Hu(), t.memoizedState = null) : (l !== null && xn(t, null), Yc(), Hu());
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
  function Ps(l, t, u, a, e) {
    var n = Cc();
    return n = n === null ? null : { parent: Al._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && xn(t, null), Yc(), us(t), l !== null && ea(l, t, a, !0), t.childLanes = e, null;
  }
  function tf(l, t) {
    return t = uf(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function lv(l, t, u) {
    return sa(t, l.child, null, u), l = tf(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function Gy(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (L) {
        if (a.mode === "hidden")
          return l = tf(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, xe(null, l);
        if (xc(t), (l = hl) ? (l = Nd(
          l,
          Nt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Zt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = q0(l), u.return = t, t.child = u, jl = t, hl = null)) : l = null, l === null) throw _u(t);
        return t.lanes = 536870912, null;
      }
      return tf(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (xc(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = lv(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (Ml || ea(l, t, u, !1), e = (u & l.childLanes) !== 0, Ml || e) {
        if (Cu.current === null) {
          if (a = ml, a !== null && (f = Xo(a, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, la(l, f), ut(a, l, f), ni;
          zf();
        }
        t = lv(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, hl = Dt(f.nextSibling), jl = t, L = !0, Ou = null, Nt = !1, l !== null && X0(t, l), t = tf(t, a), t.flags |= 134221824;
      return t;
    }
    return l = fu(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Va(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function fi(l, t, u, a, e) {
    return na(t), u = Qc(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Vc(), l !== null && !Ml ? (Zc(l, t, e), du(l, t, e)) : (L && a && jn(t), t.flags |= 1, Ul(l, t, u, e), t.child);
  }
  function tv(l, t, u, a, e, n) {
    return na(t), t.updateQueue = null, u = es(
      t,
      a,
      u,
      e
    ), as(l), a = Vc(), l !== null && !Ml ? (Zc(l, t, n), du(l, t, n)) : (L && a && jn(t), t.flags |= 1, Ul(l, t, u, n), t.child);
  }
  function uv(l, t, u, a, e) {
    if (na(t), t.stateNode === null) {
      var n = Ha, f = u.contextType;
      typeof f == "object" && f !== null && (n = Gl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ai, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Hc(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Gl(f) : Ha, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (ui(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && ai.enqueueReplaceState(n, n.state, null), je(t, a, n, e), He(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
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
      n.state = v, je(t, a, n, e), He(), m = t.memoizedState, c || v !== m || Mu ? (typeof E == "function" && (ui(
        t,
        u,
        E,
        a
      ), m = t.memoizedState), (i = Mu || Qs(
        t,
        u,
        i,
        a,
        v,
        m,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, jc(l, t), f = t.memoizedProps, g = da(u, f), n.props = g, E = t.pendingProps, v = n.context, m = u.contextType, i = Ha, typeof m == "object" && m !== null && (i = Gl(m)), c = u.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== E || v !== i) && Vs(
        t,
        n,
        a,
        i
      ), Mu = !1, v = t.memoizedState, n.state = v, je(t, a, n, e), He();
      var r = t.memoizedState;
      f !== E || v !== r || Mu || l !== null && l.dependencies !== null && Yn(l.dependencies) ? (typeof c == "function" && (ui(
        t,
        u,
        c,
        a
      ), r = t.memoizedState), (g = Mu || Qs(
        t,
        u,
        g,
        a,
        v,
        r,
        i
      ) || l !== null && l.dependencies !== null && Yn(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, r, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        r,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = r), n.props = a, n.state = r, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, Va(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = sa(
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
  function av(l, t, u, a) {
    return ua(), t.flags |= 256, Ul(l, t, u, a), t.child;
  }
  var ci = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ii(l) {
    return { baseLanes: l, cachePool: J0() };
  }
  function oi(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= rt), l;
  }
  function ev(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Ql.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (L) {
        if (e ? Ru(t) : Hu(), (l = hl) ? (l = Nd(
          l,
          Nt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Zt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = q0(l), u.return = t, t.child = u, jl = t, hl = null)) : l = null, l === null) throw _u(t);
        return io(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e ? (Hu(), e = t.mode, n = uf(
        { mode: "hidden", children: n },
        e
      ), a = ta(
        a,
        e,
        u,
        null
      ), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = ii(u), a.childLanes = oi(
        l,
        f,
        u
      ), t.memoizedState = ci, xe(null, a)) : (Ru(t), si(t, n));
    }
    var c = l.memoizedState;
    if (c !== null) {
      var i = c.dehydrated;
      if (i !== null)
        return Xy(
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
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, xe(null, a), a = t.child, e = l.child.memoizedState, e === null ? e = ii(u) : (n = e.cachePool, n !== null ? (c = Al._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = J0(), e = {
      baseLanes: e.baseLanes | u,
      cachePool: n
    }), a.memoizedState = e, a.childLanes = oi(
      l,
      f,
      u
    ), t.memoizedState = ci, xe(l.child, a)) : (Ru(t), u = l.child, l = u.sibling, u = fu(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function si(l, t) {
    return t = uf(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function uf(l, t) {
    return l = Il(22, l, null, t), l.lanes = 0, l;
  }
  function af(l, t, u) {
    return sa(t, l.child, null, u), l = si(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Xy(l, t, u, a, e, n, f, c) {
    if (u)
      return t.flags & 256 ? (Ru(t), t.flags &= -257, af(
        l,
        t,
        c
      )) : t.memoizedState !== null ? (Hu(), t.child = l.child, t.flags |= 128, null) : (Hu(), n = e.fallback, f = t.mode, e = uf(
        { mode: "visible", children: e.children },
        f
      ), n = ta(
        n,
        f,
        c,
        null
      ), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, sa(t, l.child, null, c), e = t.child, e.memoizedState = ii(c), e.childLanes = oi(
        l,
        a,
        c
      ), t.memoizedState = ci, xe(null, e));
    if (Ru(t), io(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var i = a.dgst;
      return a = i, a !== "" && (e = Error(h(419)), e.stack = "", e.digest = a, Ne({ value: e, source: null, stack: null })), af(
        l,
        t,
        c
      );
    }
    if (Ml || ea(l, t, c, !1), a = (c & l.childLanes) !== 0, Ml || a) {
      if (Cu.current !== null)
        return af(
          l,
          t,
          c
        );
      if (a = ml, a !== null && (e = Xo(
        a,
        c
      ), e !== 0 && e !== f.retryLane))
        throw f.retryLane = e, la(l, e), ut(a, l, e), ni;
      return co(n) || zf(), af(
        l,
        t,
        c
      );
    }
    return co(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, hl = Dt(n.nextSibling), jl = t, L = !0, Ou = null, Nt = !1, l !== null && X0(t, l), t = si(
      t,
      e.children
    ), t.flags |= 134221824, t);
  }
  function nv(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Bn(l.return, t, u);
  }
  function fv(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && Ln(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function ef(l, t, u, a, e, n) {
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
  function vi(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function di(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = Ql.current;
    if (t.flags & 128)
      return pe(t, f), null;
    var c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, pe(t, f), e === "backwards" && l !== null ? (vi(l), Ul(l, t, a, u), vi(l)) : Ul(l, t, a, u), a = L ? Ae : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && nv(l, u, t);
        else if (l.tag === 19)
          nv(l, u, t);
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
        u = fv(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null, vi(t)), ef(
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
          if (l = e.alternate, l !== null && Ln(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        ef(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        ef(
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
        u = fv(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), ef(
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
  function cv(l, t, u) {
    var a = t.pendingProps;
    return Au(t, t.type, a.value), Ul(l, t, a.children, u), t.child;
  }
  function du(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), Yu |= t.lanes, (u & t.childLanes) === 0)
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
  function mi(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Yn(l)));
  }
  function Qy(l, t, u) {
    switch (t.tag) {
      case 3:
        on(t, t.stateNode.containerInfo), Au(t, Al, l.memoizedState.cache), ua();
        break;
      case 27:
      case 5:
        Xf(t);
        break;
      case 4:
        on(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, xc(t), null;
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
          return a || (u & e) !== 0 ? ev(l, t, u) : (Ru(t), l = du(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Ru(t);
        break;
      case 19:
        if (t.flags & 128)
          return di(
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
            return di(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), pe(t, Ql.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Is(
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
  function iv(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ml = !0;
      else {
        if (!mi(l, u) && (t.flags & 128) === 0)
          return Ml = !1, Qy(
            l,
            t,
            u
          );
        Ml = (l.flags & 131072) !== 0;
      }
    else
      Ml = !1, L && (t.flags & 1048576) !== 0 && G0(t, Ae, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = ia(t.elementType), t.type = l, typeof l == "function")
            Ec(l) ? (a = da(l, a), t.tag = 1, t = uv(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = fi(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === A) {
                t.tag = 11, t = Ws(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === dl) {
                t.tag = 14, t = $s(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === Rl) {
                t.tag = 10, t.type = l, t = cv(
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
        return fi(
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
        ), uv(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (on(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, jc(l, t), je(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Au(t, Al, a), a !== n.cache && Mc(
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
              t = av(
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
              ), Ne(e), t = av(
                l,
                t,
                a,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, hl = Dt(l.firstChild), jl = t, L = !0, Ou = null, Nt = !0, u = I0(
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
        return Va(l, t), l === null ? (u = jd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : L || (t.stateNode = dd(
          t.type,
          t.pendingProps,
          gu.current,
          t
        )) : t.memoizedState = jd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Xf(t), l === null && L && (a = t.stateNode = Ud(
          t.type,
          t.pendingProps,
          gu.current
        ), jl = t, Nt = !0, e = hl, Xu(t.type) ? (oo = e, hl = Dt(a.firstChild)) : hl = e), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), Va(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && L && ((e = a = hl) && (a = Br(
          a,
          t.type,
          t.pendingProps,
          Nt
        ), a !== null ? (t.stateNode = a, jl = t, hl = Dt(a.firstChild), Nt = !1, e = !0) : e = !1), e || _u(t)), Xf(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, lo(e, n) ? a = null : f !== null && lo(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Qc(
          l,
          t,
          Cy,
          null,
          null,
          u
        ), fe._currentValue = e), Va(l, t), Ul(l, t, a, u), t.child;
      case 6:
        return l === null && L && ((l = u = hl) && (u = Yr(
          u,
          t.pendingProps,
          Nt
        ), u !== null ? (t.stateNode = u, jl = t, hl = null, l = !0) : l = !1), l || _u(t)), null;
      case 13:
        return ev(l, t, u);
      case 4:
        return on(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = sa(
          t,
          null,
          a,
          u
        ) : Ul(l, t, a, u), t.child;
      case 11:
        return Ws(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return a = t.pendingProps, Va(l, t), Ul(l, t, a, u), t.child;
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
        return cv(l, t, u);
      case 9:
        return e = t.type._context, a = t.pendingProps.children, na(t), e = Gl(e), a = a(e), t.flags |= 1, Ul(l, t, a, u), t.child;
      case 14:
        return $s(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return ks(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return di(l, t, u);
      case 31:
        return Gy(l, t, u);
      case 22:
        return Is(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return na(t), a = Gl(Al), l === null ? (e = Cc(), e === null && (e = ml, n = Dc(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Hc(t), Au(t, Al, e)) : ((l.lanes & u) !== 0 && (jc(l, t), je(t, null, null, u), He()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Au(t, Al, a)) : (a = n.cache, Au(t, Al, a), a !== e.cache && Mc(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : L && jn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : Va(l, t), Ul(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function mu(l) {
    l.flags |= 4;
  }
  function yi(l, t, u, a, e) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? qd(t, a) : qd(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Zv()) l.flags |= 8192;
        else
          throw oa = Xn, Rc;
    } else l.flags &= -16777217;
  }
  function ov(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xd(t))
      if (Zv()) l.flags |= 8192;
      else
        throw oa = Xn, Rc;
  }
  function nf(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? qo() : 536870912, l.lanes |= t, wa |= t);
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
  function gl(l) {
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
    switch (Oc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return gl(t), null;
      case 1:
        return gl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ou(Al), Ta(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? mu(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ac())), gl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (mu(t), n !== null ? (gl(t), ov(t, n)) : (gl(t), yi(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (mu(t), gl(t), ov(t, n)) : (gl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && mu(t), gl(t), yi(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (sn(t), u = gu.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && mu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return gl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Qt.current, Ba(t) ? Q0(t) : (l = Ud(e, a, u), t.stateNode = l, mu(t));
        }
        return gl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (sn(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && mu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return gl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Qt.current, Ba(t))
            Q0(t);
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
            l: switch (Zl(n, e, a), e) {
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
        return gl(t), t.subtreeFlags &= -33554433, yi(
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
          if (l = gu.current, Ba(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = jl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[xl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || id(l.nodeValue, u)), l || _u(t, !0);
          } else
            l = $e(l).createTextNode(
              a
            ), l[xl] = t, t.stateNode = l;
        }
        return gl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Ba(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[xl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            gl(t), l = !1;
          } else
            u = Ac(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return gl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ba(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[xl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            gl(t), e = !1;
          } else
            e = Ac(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), nf(t, t.updateQueue), gl(t), null);
      case 4:
        return Ta(), l === null && Wi(t.stateNode.containerInfo), t.flags |= 67108864, gl(t), null;
      case 10:
        return ou(t.type), gl(t), null;
      case 19:
        if (Gc(t), a = t.memoizedState, a === null) return gl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) Ge(a, !1);
          else {
            if (Ol !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Ln(l), n !== null) {
                  for (t.flags |= 128, Ge(a, !1), l = n.updateQueue, t.updateQueue = l, nf(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Y0(u, l), u = u.sibling;
                  return pe(
                    t,
                    Ql.current & 1 | 2
                  ), L && cu(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ct() > Sf && (t.flags |= 128, e = !0, Ge(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Ln(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, nf(t, l), Ge(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !L)
                return gl(t), null;
            } else
              2 * ct() - a.renderingStartTime > Sf && u !== 536870912 && (t.flags |= 128, e = !0, Ge(a, !1), t.lanes = 4194304);
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
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ct(), l.sibling = null, n = Ql.current, n = e ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || L ? pe(t, n) : (u = n, rl(Xl, t), rl(Ql, u), Kl === null && (Kl = t)), L && cu(t, a.treeForkCount), l;
        }
        return gl(t), null;
      case 22:
      case 23:
        return dt(t), qc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gl(t), u = t.updateQueue, u !== null && nf(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && ql(ca), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), ou(Al), gl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, gl(t), null;
    }
    throw Error(h(156, t.tag));
  }
  function Zy(l, t) {
    switch (Oc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return ou(Al), Ta(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return sn(t), null;
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
        return Gc(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Ta(), null;
      case 10:
        return ou(t.type), null;
      case 22:
      case 23:
        return dt(t), qc(), l !== null && ql(ca), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return ou(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sv(l, t) {
    switch (Oc(t), t.tag) {
      case 3:
        ou(Al), Ta();
        break;
      case 26:
      case 27:
      case 5:
        sn(t);
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
        Gc(t);
        break;
      case 10:
        ou(t.type);
        break;
      case 22:
      case 23:
        dt(t), qc(), l !== null && ql(ca);
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
  function vv(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        ls(t, u);
      } catch (a) {
        ol(l, l.return, a);
      }
    }
  }
  function dv(l, t, u) {
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
            (e.ref === null || e.ref.name !== n) && (e.ref = Td(n)), a = e.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new gt(l);
              T(
                l.child,
                !1,
                jr,
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
  function Vl(l, t) {
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
  function ff(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Ad(
          l.stateNode,
          t[u]
        );
  }
  function mv(l) {
    for (var t = l.return; t !== null && (hi(t) && Ad(l.stateNode, t.stateNode), !ri(t)); )
      t = t.return;
  }
  function Qe(l) {
    for (var t = l.return; t !== null && (hi(t) && pr(l.stateNode, t.stateNode), !ri(t)); )
      t = t.return;
  }
  function ri(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function hi(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function gi(l) {
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
  function Si(l, t, u) {
    try {
      var a = l.stateNode;
      rr(a, l.type, u, t), a[kl] = t;
    } catch (e) {
      ol(l, l.return, e);
    }
  }
  function yv(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Xu(l.type) || l.tag === 4;
  }
  function Ti(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || yv(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Xu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ei(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Vt)), ff(l, a), ll = !0;
    else if (e !== 4 && (e === 27 && (ff(l, a), a = null, Xu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (Ei(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        Ei(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function cf(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? u.insertBefore(e, t) : u.appendChild(e), ff(l, a), ll = !0;
    else if (e !== 4 && (e === 27 && (ff(l, a), a = null, Xu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (cf(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        cf(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function rv(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Zl(t, a, u), t[xl] = l, t[kl] = u;
    } catch (n) {
      ol(l, l.return, n);
    }
  }
  var of = !1, mt = null;
  function hv(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (of = !0);
  }
  var Jt = null;
  function gv() {
    var l = Jt;
    return Jt = null, l;
  }
  var Pl = 0;
  function Za(l, t, u, a, e) {
    return Pl = 0, Sv(
      l.child,
      t,
      u,
      a,
      e
    );
  }
  function Sv(l, t, u, a, e) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var c = ao(f);
          a.push(c), c.view && (n = !0);
        } else
          n || ao(f).view && (n = !0);
        of = !0, gd(
          f,
          Pl === 0 ? t : t + "_" + Pl,
          u
        ), Pl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || Sv(
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
      l.tag === 5 ? Sd(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || wt(
        l.child,
        t
      )), l = l.sibling;
  }
  function sf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (sf(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(h(544));
          var u = t.name;
          t = nu(t.default, t.share), t !== "none" && (Za(
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
  function bi(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e = eu(a, u), n = nu(
        a.default,
        u.paired ? a.share : a.enter
      );
      n !== "none" ? Za(l, e, n, null, !1) ? (sf(l), u.paired || t || ka(l, a.onEnter)) : wt(l.child, !1) : sf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        bi(l, t), l = l.sibling;
    else sf(l);
  }
  function zi(l) {
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
                  if (n !== "none" && (Za(
                    l,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, e.paired = n, n.paired = e, ka(l, u.onShare)) : wt(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            zi(l);
          }
          l = l.sibling;
        }
    }
  }
  function Oi(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = eu(t, l.stateNode), a = mt !== null ? mt.get(u) : void 0, e = nu(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      e !== "none" && (Za(l, u, e, null, !1) ? a !== void 0 ? (e = l.stateNode, a.paired = e, e.paired = a, mt.delete(u), ka(l, t.onShare)) : ka(l, t.onExit) : wt(l.child, !1)), mt !== null && zi(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Oi(l), l = l.sibling;
    else
      mt !== null && zi(l);
  }
  function Tv(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = eu(t, l.stateNode);
        t = nu(t.default, t.update), l.flags &= -5, t !== "none" && Za(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && Tv(l);
      l = l.sibling;
    }
  }
  function _i(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, wt(l.child, !1));
          }
          _i(l);
        }
        l = l.sibling;
      }
  }
  function vf(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, wt(l.child, !1), _i(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        vf(l), l = l.sibling;
    else _i(l);
  }
  function Ev(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? wt(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && Ev(l), l = l.sibling;
  }
  function Ai(l, t, u, a, e, n, f) {
    for (var c = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (n !== null && Pl < n.length) {
          var m = n[Pl], g = ao(i);
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
        (l.flags & 4) !== 0 && gd(
          i,
          Pl === 0 ? u : u + "_" + Pl,
          e
        ), c && (l.flags & 4) !== 0 || (Jt === null && (Jt = []), Jt.push(
          i,
          Pl === 0 ? a : a + "_" + Pl,
          t.memoizedProps
        )), Pl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Ai(
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
  function bv(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e = eu(u, a), n = nu(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, a = l;
        var c = l.child;
        Pl = 0, e = Ai(
          a,
          c,
          e,
          e,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && e && ka(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && bv(l);
      l = l.sibling;
    }
  }
  var pl = !1, fl = !1, Ft = !1, Ni = !1, zv = typeof WeakSet == "function" ? WeakSet : Set, Bl = null, Wt = !1, Ve = !1, df = !1, Mi = !1;
  function Ly(l, t, u) {
    if (l = l.containerInfo, Ii = ce, l = N0(l), mc(l)) {
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
    for (Pi = { focusedElem: l, selectionRange: a }, ce = !1, u = (u & 335544064) === u, Bl = t, t = u ? 9270 : 1024; Bl !== null; ) {
      if (l = Bl, u && (a = l.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          u && Oi(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && hv(l), mf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && Oi(a), mf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && hv(l), mf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, Bl = a) : (u && Tv(l), mf(u));
      }
    }
    mt = null;
  }
  function mf(l) {
    for (; Bl !== null; ) {
      var t = Bl, u = l, a = t.alternate, e = t.flags;
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
              fo(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  fo(a);
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
          ), e = t.memoizedProps, e = nu(e.default, e.update), e !== "none" && Za(
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
        a.return = t.return, Bl = a;
        break;
      }
      Bl = t.return;
    }
  }
  function Ov(l, t, u) {
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
        a & 64 && vv(u), a & 512 && Kt(u, u.return);
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
            ls(l, t);
          } catch (f) {
            ol(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && rv(u);
      case 26:
      case 5:
        $t(l, u), t === null && a & 4 && gi(u), a & 512 && Kt(u, u.return);
        break;
      case 12:
        $t(l, u);
        break;
      case 31:
        $t(l, u), a & 4 && Mv(l, u);
        break;
      case 13:
        $t(l, u), a & 4 && Dv(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ur.bind(
          null,
          u
        ), qr(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || pl, !a) {
          var n = t !== null && t.memoizedState !== null || fl;
          t = pl, e = fl, pl = a, (fl = n) && !e ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), pt(
            l,
            u,
            a
          )) : $t(l, u), pl = t, fl = e;
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
  function Di(l, t) {
    for (l = l.child; l !== null; )
      _v(l, t), l = l.sibling;
  }
  function _v(l, t) {
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
        Ui(l, t);
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
          t ? hd(c, !0) : hd(l.stateNode, !1);
        } catch (i) {
          ol(l, l.return, i);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Di(l, t);
        break;
      default:
        Di(l, t);
    }
  }
  function Ui(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, a = t;
          switch (u.tag) {
            case 4:
              _v(u, a);
              break l;
            case 22:
              u.memoizedState === null && Ui(u, a);
              break l;
            default:
              Ui(u, a);
          }
        }
        l = l.sibling;
      }
  }
  function Av(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Av(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && gn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var El = null, lt = !1;
  function Ht(l, t, u) {
    for (u = u.child; u !== null; )
      Nv(l, t, u), u = u.sibling;
  }
  function Nv(l, t, u) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(ve, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        fl || Vl(u, t), Ht(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !fl && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        fl || Vl(u, t), Qe(u);
        var a = El, e = lt;
        Xu(u.type) && (El = u.stateNode, lt = !1), Ht(
          l,
          t,
          u
        ), Cd(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), El = a, lt = e;
        break;
      case 5:
        fl || Vl(u, t), Qe(u);
      case 6:
        if (u.tag === 6 && Qe(u), a = El, e = lt, El = null, Ht(
          l,
          t,
          u
        ), El = a, lt = e, El !== null)
          if (lt)
            try {
              (El.nodeType === 9 ? El.body : El.nodeName === "HTML" ? El.ownerDocument.body : El).removeChild(u.stateNode), ll = !0;
            } catch (n) {
              ol(
                u,
                t,
                n
              );
            }
          else
            try {
              El.removeChild(u.stateNode), ll = !0;
            } catch (n) {
              ol(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        El !== null && (lt ? (l = El, rd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ie(l)) : rd(El, u.stateNode));
        break;
      case 4:
        a = El, e = lt, El = u.stateNode.containerInfo, lt = !0, Ht(
          l,
          t,
          u
        ), El = a, lt = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ju(2, u, t), fl || ju(4, u, t), Ht(
          l,
          t,
          u
        );
        break;
      case 1:
        fl || (Vl(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && dv(
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
        fl = (a = fl) || u.memoizedState !== null, Ht(
          l,
          t,
          u
        ), fl = a;
        break;
      case 30:
        Vl(u, t), Ht(
          l,
          t,
          u
        );
        break;
      case 7:
        fl || Vl(u, t), Ht(
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
  function Mv(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        ie(l);
      } catch (u) {
        ol(t, t.return, u);
      }
    }
  }
  function Dv(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ie(l);
      } catch (u) {
        ol(t, t.return, u);
      }
  }
  function Ky(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new zv()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new zv()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function yf(l, t) {
    var u = Ky(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = ar.bind(null, l, a);
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
                El = i.stateNode, lt = !1;
                break l;
              }
              break;
            case 5:
              El = i.stateNode, lt = !1;
              break l;
            case 3:
            case 4:
              El = i.stateNode.containerInfo, lt = !0;
              break l;
          }
          i = i.return;
        }
        if (El === null) throw Error(h(160));
        Nv(f, c, n), El = null, lt = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Uv(t, l, u), t = t.sibling;
  }
  var jt = null;
  function Uv(l, t, u) {
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
        Fl(t, l, u), Wl(l), e & 512 && (fl || a === null || Vl(a, a.return)), e & 64 && pl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = jt, Fl(t, l, u), Wl(l), e & 512 && (fl || a === null || Vl(a, a.return)), e & 4)
          if (e = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null)
                if (pl)
                  l.stateNode = dd(
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
                        )), Zl(a, t, u), a[xl] = l, Hl(a), t = a;
                        break l;
                      case "link":
                        if (n = Yd(
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
                        a = e.createElement(t), Zl(a, t, u), e.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = Yd(
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
                        a = e.createElement(t), Zl(a, t, u), e.head.appendChild(a);
                        break;
                      default:
                        throw Error(h(468, t));
                    }
                    a[xl] = l, Hl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                pl || yo(n, l.type, l.stateNode);
            else
              l.stateNode = Bd(
                n,
                u,
                l.memoizedProps
              );
          else
            e !== u ? (e === null ? (t = a.stateNode, t === null || fl || t.parentNode.removeChild(t)) : e.count--, u === null ? pl || yo(n, l.type, l.stateNode) : Bd(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && Si(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Fl(t, l, u), Wl(l), e & 512 && (fl || a === null || Vl(a, a.return)), a !== null && e & 4 && Si(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = Ft, Ft = !1, Fl(t, l, u), Ft = n, Wl(l), e & 512 && (fl || a === null || Vl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            Aa(t, ""), ll = !0;
          } catch (g) {
            ol(l, l.return, g);
          }
        }
        e & 4 && l.stateNode != null && (t = l.memoizedProps, Si(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), e & 1024 && (Ni = !0);
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
        if (ll = !1, Uf = null, n = jt, jt = ke(t.containerInfo), Fl(t, l, u), jt = n, Wl(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ie(t.containerInfo);
          } catch (g) {
            ol(l, l.return, g);
          }
        Ni && (Ni = !1, Cv(l)), ll = !1;
        break;
      case 4:
        e = Ft, Ft = pl, a = $o(), n = jt, jt = ke(
          l.stateNode.containerInfo
        ), Fl(t, l, u), Wl(l), jt = n, ll && Ve && (df = !0), ll = a, Ft = e;
        break;
      case 12:
        Fl(t, l, u), Wl(l);
        break;
      case 31:
        Fl(t, l, u), Wl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, yf(l, t)));
        break;
      case 13:
        Fl(t, l, u), Wl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gf = ct()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, yf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var c = pl, i = fl, m = Ft;
        pl = c || n, Ft = m || n, fl = i || f, Fl(t, l, u), fl = i, Ft = m, pl = c, Wl(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || pl || fl || (t = f || fl, u = pl, a = fl, pl = n || pl, fl = t, pu(l, 2), pl = u, fl = a), !n && Ft || Di(l, n)), e & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, yf(l, u))));
        break;
      case 19:
        Fl(t, l, u), Wl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, yf(l, t)));
        break;
      case 30:
        e & 512 && (fl || a === null || Vl(a, a.return)), e = $o(), n = Ve, f = (u & 335544064) === u, c = l.memoizedProps, Ve = f && nu(
          c.default,
          c.update
        ) !== "none", Fl(t, l, u), Wl(l), f && a !== null && ll && (l.flags |= 4), Ve = n, ll = e;
        break;
      case 21:
        break;
      case 7:
        e & 512 && (fl || a === null || Vl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        Fl(t, l, u), Wl(l);
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (yv(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null; ) {
          if (hi(e)) {
            var n = e.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (ri(e)) break;
          e = e.return;
        }
        var f = a;
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var c = u.stateNode, i = Ti(l);
            cf(
              l,
              i,
              c,
              f
            );
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Aa(m, ""), u.flags &= -33);
            var g = Ti(l);
            cf(
              l,
              g,
              m,
              f
            );
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, v = Ti(l);
            Ei(
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
  function Cv(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Cv(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, ce = !0, t.reset(), ce = !1), l = l.sibling;
      }
  }
  function La(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Rv(t, l), t = t.sibling;
    else bv(t);
  }
  function Rv(l, t) {
    var u = l.alternate;
    if (u === null) bi(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Mi = Wt = !1, gv(), La(t, l), !Wt && !df) {
            if (l = Jt, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var e = l[a + 1];
                Sd(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
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
            )), Mi = !0;
          }
          Jt = null;
          break;
        case 5:
          La(t, l);
          break;
        case 4:
          a = Wt, Wt = !1, La(t, l), Wt && (df = !0), Wt = a;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? bi(l, !1) : La(t, l));
          break;
        case 30:
          a = Wt, e = gv(), Wt = !1, La(t, l), Wt && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = eu(n, f), f = eu(u.memoizedProps, f);
          var c = nu(n.default, n.update);
          c === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, Pl = 0, t = Ai(
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
        Ov(l, t.alternate, t), t = t.sibling;
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
          Vl(u, u.return);
          var e = u.stateNode;
          typeof e.componentWillUnmount == "function" && dv(
            u,
            u.return,
            e
          ), pu(
            u,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Cd(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Vl(u, u.return), u.tag !== 5 && u.tag !== 27 || Qe(u), pu(
            u,
            a
          );
          break;
        case 6:
          Qe(u);
          break;
        case 26:
          Vl(u, u.return), e = u.stateNode, u.memoizedState !== null || e === null || fl || e.parentNode.removeChild(e), pu(
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
          Vl(u, u.return), pu(
            u,
            a
          );
          break;
        case 7:
          Vl(u, u.return);
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
                  P0(m[e], i);
            } catch (g) {
              ol(a, a.return, g);
            }
          }
          c && f & 64 && vv(n), Kt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && rv(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || mv(n), pt(
            e,
            n,
            u
          ), c && a === null && f & 4 && gi(n), Kt(n, n.return);
          break;
        case 6:
          mv(n);
          break;
        case 26:
          i = n.stateNode, n.memoizedState !== null || i === null || pl || yo(
            ke(i.ownerDocument),
            n.type,
            i
          ), pt(
            e,
            n,
            u
          ), c && a === null && f & 4 && gi(n), Kt(n, n.return);
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
          ), c && f & 4 && Mv(e, n);
          break;
        case 13:
          pt(
            e,
            n,
            u
          ), c && f & 4 && Dv(e, n);
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
  function Ci(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Me(u));
  }
  function Ri(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Me(l));
  }
  function Mt(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Hv(
          l,
          t,
          u,
          a
        ), t = t.sibling;
    else e && Ev(t);
  }
  function Hv(l, t, u, a) {
    var e = (u & 335544064) === u;
    e && t.alternate === null && t.return !== null && t.return.alternate !== null && vf(t);
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
        ), e && Mi && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Me(n)));
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
        f = t.stateNode, c = t.alternate, t.memoizedState !== null ? (e && c !== null && c.memoizedState === null && vf(c), f._visibility & 2 ? Mt(
          l,
          t,
          u,
          a
        ) : Ze(
          l,
          t
        )) : (e && c !== null && c.memoizedState !== null && vf(t), f._visibility & 2 ? Mt(
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
        ))), n & 2048 && Ci(c, t);
        break;
      case 24:
        Mt(
          l,
          t,
          u,
          a
        ), n & 2048 && Ri(t.alternate, t);
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
          ) : Ze(
            n,
            f
          ) : (g._visibility |= 2, Ka(
            n,
            f,
            c,
            i,
            e
          )), e && m & 2048 && Ci(
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
          ), e && m & 2048 && Ri(f.alternate, f);
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
  function Ze(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Ze(u, a), e & 2048 && Ci(
              a.alternate,
              a
            );
            break;
          case 24:
            Ze(u, a), e & 2048 && Ri(a.alternate, a);
            break;
          default:
            Ze(u, a);
        }
        t = t.sibling;
      }
  }
  var ma = 8192;
  function ya(l, t, u) {
    if (l.subtreeFlags & ma)
      for (l = l.child; l !== null; )
        jv(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function jv(l, t, u) {
    switch (l.tag) {
      case 26:
        ya(
          l,
          t,
          u
        ), l.flags & ma && (l.memoizedState !== null ? kr(
          u,
          jt,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Xd(u, l)));
        break;
      case 5:
        ya(
          l,
          t,
          u
        ), l.flags & ma && (l = l.stateNode, (t & 335544128) === t && Xd(u, l));
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
  function pv(l) {
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
          Bl = a, Yv(
            a,
            l
          );
        }
      pv(l);
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
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, rf(l)) : Le(l);
        break;
      default:
        Le(l);
    }
  }
  function rf(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Bl = a, Yv(
            a,
            l
          );
        }
      pv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ju(8, t, t.return), rf(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, rf(t));
          break;
        default:
          rf(t);
      }
      l = l.sibling;
    }
  }
  function Yv(l, t) {
    for (; Bl !== null; ) {
      var u = Bl;
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
      if (a = u.child, a !== null) a.return = u, Bl = a;
      else
        l: for (u = l; Bl !== null; ) {
          a = Bl;
          var e = a.sibling, n = a.return;
          if (Av(a), a === u) {
            Bl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Bl = e;
            break l;
          }
          Bl = n;
        }
    }
  }
  var Jy = {
    getCacheForType: function(l) {
      var t = Gl(Al), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Gl(Al).controller.signal;
    }
  }, wy = typeof WeakMap == "function" ? WeakMap : Map, al = 0, ml = null, J = null, F = 0, il = 0, yt = null, Bu = !1, Ja = !1, Hi = !1, yu = 0, Ol = 0, Yu = 0, ra = 0, hf = 0, rt = 0, wa = 0, Ke = null, tt = null, ji = !1, gf = 0, qv = 0, Sf = 1 / 0, Tf = null, qu = null, bl = 0, Bt = null, ha = null, kt = 0, pi = 0, Bi = null, xv = null, Fa = null, Wa = null, $a = null, Je = 0, Ef = null;
  function ht() {
    return (al & 2) !== 0 && F !== 0 ? F & -F : D.T !== null ? Ki() : Qo();
  }
  function Gv() {
    if (rt === 0)
      if ((F & 536870912) === 0 || L) {
        var l = mn;
        mn <<= 1, (mn & 3932160) === 0 && (mn = 262144), rt = l;
      } else rt = 536870912;
    return l = Xl.current, l !== null && (l.flags |= 32), rt;
  }
  function ka(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = Td(
        eu(l.memoizedProps, u)
      )), Wa === null && (Wa = []), Wa.push(t.bind(null, a));
    }
  }
  function ut(l, t, u) {
    (l === ml && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (Ia(l, 0), xu(
      l,
      F,
      rt,
      !1
    )), me(l, u), ((al & 2) === 0 || l !== ml) && (l === ml && ((al & 2) === 0 && (ra |= u), Ol === 4 && xu(
      l,
      F,
      rt,
      !1
    )), It(l));
  }
  function Xv(l, t, u) {
    if ((al & 6) !== 0) throw Error(h(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || de(l, t), e = a ? $y(l, t) : qi(l, t, !0), n = a;
    do {
      if (e === 0) {
        Ja && !a && xu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Fy(u)) {
          e = qi(l, t, !1), n = !1;
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
              if (i && (Ia(c, f).flags |= 256), f = qi(
                c,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Hi && !i) {
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
                !Bu
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
          if ((t & 62914560) === t && (e = gf + 300 - ct(), 10 < e)) {
            if (xu(
              a,
              t,
              rt,
              !Bu
            ), rn(a, 0, !0) !== 0) break l;
            kt = t, a.timeoutHandle = uo(
              Qv.bind(
                null,
                a,
                u,
                tt,
                Tf,
                ji,
                t,
                rt,
                ra,
                wa,
                Bu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          Qv(
            a,
            u,
            tt,
            Tf,
            ji,
            t,
            rt,
            ra,
            wa,
            Bu,
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
  function Qv(l, t, u, a, e, n, f, c, i, m, g, E, v, r) {
    l.timeoutHandle = -1;
    var _ = t.subtreeFlags, M = (n & 335544064) === n;
    if (E = null, (M || _ & 8192 || (_ & 16785408) === 16785408) && (E = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Vt
    }, mt = null, jv(
      t,
      n,
      E
    ), M && (_ = E, M = l.containerInfo, M = (M.nodeType === 9 ? M : M.ownerDocument).__reactViewTransition, M != null && (_.count++, _.waitingForViewTransition = !0, _ = ln.bind(_), M.finished.then(_, _))), _ = (n & 62914560) === n ? gf - ct() : (n & 4194048) === n ? qv - ct() : 0, _ = Ir(
      E,
      _
    ), _ !== null)) {
      kt = n, l.cancelPendingCommit = _(
        Wv.bind(
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
    Wv(
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
  function Fy(l) {
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
    t = Yo(l, t), t &= ~hf, t &= ~ra, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ot(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && xo(l, u, t);
  }
  function bf() {
    return (al & 6) === 0 ? (we(0), !1) : !0;
  }
  function Yi() {
    if (J !== null) {
      if (il === 0)
        var l = J.return;
      else
        l = J, iu = aa = null, Lc(l), xa = null, Ce = 0, l = J;
      for (; l !== null; )
        sv(l.alternate, l), l = l.return;
      J = null;
    }
  }
  function Ia(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Sr(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), kt = 0, Yi(), ml = l, J = u = fu(l.current, null), F = t, il = 0, yt = null, Bu = !1, Ja = de(l, t), Hi = !1, wa = rt = hf = ra = Yu = Ol = 0, tt = Ke = null, ji = !1, yu = Yo(l, t), Dn(), u;
  }
  function Vv(l, t) {
    V = null, D.H = Pn, t === qa || t === Gn ? (t = W0(), il = 3) : t === Rc ? (t = W0(), il = 4) : il = t === ni ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yt = t, J === null && (Ol = 1, lf(
      l,
      Ot(t, l.current)
    ));
  }
  function Zv() {
    var l = Xl.current;
    return l === null ? !0 : (F & 4194048) === F ? Kl === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === Kl : !1;
  }
  function Lv() {
    var l = D.H;
    return D.H = Pn, l === null ? Pn : l;
  }
  function Kv() {
    var l = D.A;
    return D.A = Jy, l;
  }
  function zf() {
    Ol = 4, Bu || (F & 4194048) !== F && Xl.current !== null || (Ja = !0), (Yu & 134217727) === 0 && (ra & 134217727) === 0 || ml === null || xu(
      ml,
      F,
      rt,
      !1
    );
  }
  function qi(l, t, u) {
    var a = al;
    al |= 2;
    var e = Lv(), n = Kv();
    (ml !== l || F !== t) && (Tf = null, Ia(l, t)), t = !1;
    var f = Ol;
    l: do
      try {
        if (il !== 0 && J !== null) {
          var c = J, i = yt;
          switch (il) {
            case 8:
              Yi(), f = 6;
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
        Wy(), f = Ol;
        break;
      } catch (g) {
        Vv(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, iu = aa = null, al = a, D.H = e, D.A = n, J === null && (ml = null, F = 0, Dn()), f;
  }
  function Wy() {
    for (; J !== null; ) Jv(J);
  }
  function $y(l, t) {
    var u = al;
    al |= 2;
    var a = Lv(), e = Kv();
    ml !== l || F !== t ? (Tf = null, Sf = ct() + 500, Ia(l, t)) : Ja = de(
      l,
      t
    );
    l: do
      try {
        if (il !== 0 && J !== null) {
          t = J;
          var n = yt;
          t: switch (il) {
            case 1:
              il = 0, yt = null, Pa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (w0(n)) {
                il = 0, yt = null, wv(t);
                break;
              }
              t = function() {
                il !== 2 && il !== 9 || ml !== l || (il = 7), It(l);
              }, n.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              w0(n) ? (il = 0, yt = null, wv(t)) : (il = 0, yt = null, Pa(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (J.tag) {
                case 26:
                  f = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (f ? xd(f) : c.stateNode.complete) {
                    il = 0, yt = null;
                    var i = c.sibling;
                    if (i !== null) J = i;
                    else {
                      var m = c.return;
                      m !== null ? (J = m, Of(m)) : J = null;
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
              Yi(), Ol = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        ky();
        break;
      } catch (g) {
        Vv(l, g);
      }
    while (!0);
    return iu = aa = null, D.H = a, D.A = e, al = u, J !== null ? 0 : (ml = null, F = 0, Dn(), Ol);
  }
  function ky() {
    for (; J !== null && !ym(); )
      Jv(J);
  }
  function Jv(l) {
    var t = iv(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, t === null ? Of(l) : J = t;
  }
  function wv(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = tv(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          F
        );
        break;
      case 11:
        t = tv(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          F
        );
        break;
      case 5:
        Lc(t);
        var a = t;
        a === jl && (L ? (pn(a), a.tag === 5 && a.stateNode != null && (hl = a.stateNode)) : (pn(a), L = !0));
      default:
        sv(u, t), t = J = Y0(t, yu), t = iv(u, t, yu);
    }
    l.memoizedProps = l.pendingProps, t === null ? Of(l) : J = t;
  }
  function Pa(l, t, u, a) {
    iu = aa = null, Lc(t), xa = null, Ce = 0;
    var e = t.return;
    try {
      if (xy(
        l,
        e,
        t,
        u,
        F
      )) {
        Ol = 1, lf(
          l,
          Ot(u, l.current)
        ), J = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw J = e, n;
      Ol = 1, lf(
        l,
        Ot(u, l.current)
      ), J = null;
      return;
    }
    t.flags & 32768 ? (L || a === 1 ? l = !0 : Ja || (F & 536870912) !== 0 ? l = !1 : (Bu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Xl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Fv(t, l)) : Of(t);
  }
  function Of(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Fv(
          t,
          Bu
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
        J = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    Ol === 0 && (Ol = 5);
  }
  function Fv(l, t) {
    do {
      var u = Zy(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, J = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        J = l;
        return;
      }
      J = l = u;
    } while (l !== null);
    Ol = 6, J = null;
  }
  function Wv(l, t, u, a, e, n, f, c, i, m, g, E) {
    l.cancelPendingCommit = null;
    do
      _f();
    while (bl !== 0);
    if ((al & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      l === ml && (J = ml = null, F = 0), ha = t, Bt = l, kt = u, Bi = e, xv = a, Iy(
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
  function Iy(l, t, u, a, e, n, f) {
    var c = t.lanes | t.childLanes;
    if (pi = c, c |= Sc, _m(
      l,
      u,
      c,
      a,
      e,
      n
    ), Wa = null, (u & 335544064) === u ? ($a = Ny(l), a = 10262) : ($a = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, er(vn, function() {
      return Qi(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), of = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = D.T, D.T = null, e = q.p, q.p = 2, n = al, al |= 4;
      try {
        Ly(l, t, u);
      } finally {
        al = n, q.p = e, D.T = a;
      }
    }
    bl = 1, of ? Fa = _r(
      f,
      l.containerInfo,
      $a,
      xi,
      Gi,
      lr,
      Xi,
      Qi,
      Py
    ) : (xi(), Gi(), Xi());
  }
  function Py(l) {
    if (bl !== 0) {
      var t = Bt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function lr() {
    bl === 3 && (bl = 0, Rv(ha, Bt), bl = 4);
  }
  function xi() {
    if (bl === 1) {
      bl = 0;
      var l = Bt, t = ha, u = kt, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = D.T, D.T = null;
        var e = q.p;
        q.p = 2;
        var n = al;
        al |= 4;
        try {
          Ve = df = !1, Uv(t, l, u), u = Pi;
          var f = N0(l.containerInfo), c = u.focusedElem, i = u.selectionRange;
          if (f !== c && c && c.ownerDocument && A0(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && mc(c)) {
              var m = i.start, g = i.end;
              if (g === void 0 && (g = m), "selectionStart" in c)
                c.selectionStart = m, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var E = c.ownerDocument || document, v = E && E.defaultView || window;
                if (v.getSelection) {
                  var r = v.getSelection(), _ = c.textContent.length, M = Math.min(i.start, _), Z = i.end === void 0 ? M : Math.min(i.end, _);
                  !r.extend && M > Z && (f = Z, Z = M, M = f);
                  var d = _0(
                    c,
                    M
                  ), o = _0(
                    c,
                    Z
                  );
                  if (d && o && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== o.node || r.focusOffset !== o.offset)) {
                    var y = E.createRange();
                    y.setStart(d.node, d.offset), r.removeAllRanges(), M > Z ? (r.addRange(y), r.extend(o.node, o.offset)) : (y.setEnd(o.node, o.offset), r.addRange(y));
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
          ce = !!Ii, Pi = Ii = null;
        } finally {
          al = n, q.p = e, D.T = a;
        }
      }
      l.current = t, bl = 2;
    }
  }
  function Gi() {
    if (bl === 2) {
      bl = 0;
      var l = Bt, t = ha, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = D.T, D.T = null;
        var a = q.p;
        q.p = 2;
        var e = al;
        al |= 4;
        try {
          Ov(l, t.alternate, t);
        } finally {
          al = e, q.p = a, D.T = u;
        }
      }
      bl = 3;
    }
  }
  function Xi() {
    if (bl === 4 || bl === 3) {
      bl = 0;
      var l = Fa;
      Fa = null, rm();
      var t = Bt, u = ha, a = kt, e = xv, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? bl = 5 : (bl = 0, ha = Bt = null, $v(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (qu = null), Wf(a), u = u.stateNode, it && typeof it.onCommitFiberRoot == "function")
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
        u = D.T, n = q.p, q.p = 2, D.T = null;
        try {
          for (var f = t.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            f(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          D.T = u, q.p = n;
        }
      }
      if (e = Wa, f = $a, $a = null, e !== null && (Wa = null, f === null && (f = []), l !== null))
        for (i = 0; i < e.length; i++)
          u = (0, e[i])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (kt & 3) !== 0 && _f(), It(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Ef ? Je++ : (Je = 0, Ef = t) : (Je = 0, Ef = null), we(0);
    }
  }
  function $v(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Me(t)));
  }
  function _f() {
    return Fa !== null && (Fa.skipTransition(), Fa = null), xi(), Gi(), Xi(), Qi();
  }
  function Qi() {
    if (bl !== 5) return !1;
    var l = Bt, t = pi;
    pi = 0;
    var u = Wf(kt), a = D.T, e = q.p;
    try {
      q.p = 32 > u ? 32 : u, D.T = null, u = Bi, Bi = null;
      var n = Bt, f = kt;
      if (bl = 0, ha = Bt = null, kt = 0, (al & 6) !== 0) throw Error(h(331));
      var c = al;
      if (al |= 4, Bv(n.current), Hv(
        n,
        n.current,
        f,
        u
      ), al = c, we(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(ve, n);
        } catch {
        }
      return !0;
    } finally {
      q.p = e, D.T = a, $v(l, t);
    }
  }
  function kv(l, t, u) {
    t = Ot(u, t), t = ei(l.stateNode, t, 2), l = Uu(l, t, 2), l !== null && (me(l, 2), It(l));
  }
  function ol(l, t, u) {
    if (l.tag === 3)
      kv(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          kv(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (qu === null || !qu.has(a))) {
            l = Ot(u, l), u = ws(2), a = Uu(t, u, 2), a !== null && (Fs(
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
      a = l.pingCache = new wy();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Hi = !0, e.add(u), l = tr.bind(null, l, t, u), t.then(l, l));
  }
  function tr(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ml === l && (F & u) === u && ((Ol === 4 || Ol === 3 && (F & 62914560) === F && 300 > ct() - gf) && (al & 2) === 0 ? Ia(l, 0) : hf |= u, wa === F && (wa = 0)), It(l);
  }
  function Iv(l, t) {
    t === 0 && (t = qo()), l = la(l, t), l !== null && (me(l, t), It(l));
  }
  function ur(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), Iv(l, u);
  }
  function ar(l, t) {
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
    a !== null && a.delete(t), Iv(l, u);
  }
  function er(l, t) {
    return Kf(l, t);
  }
  var le = null, te = null, Zi = !1, Af = !1, Li = !1, Gu = 0;
  function It(l) {
    l !== te && l.next === null && (te === null ? le = te = l : te = te.next = l), Af = !0, Zi || (Zi = !0, fr());
  }
  function we(l, t) {
    if (!Li && Af) {
      Li = !0;
      do
        for (var u = !1, a = le; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - ot(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, ud(a, n));
          } else
            n = F, n = rn(
              a,
              a === ml ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || de(a, n) || (u = !0, ud(a, n));
          a = a.next;
        }
      while (u);
      Li = !1;
    }
  }
  function nr() {
    Pv();
  }
  function Pv() {
    Af = Zi = !1;
    var l = 0;
    Gu !== 0 && gr() && (l = Gu);
    for (var t = ct(), u = null, a = le; a !== null; ) {
      var e = a.next, n = ld(a, t);
      n === 0 ? (a.next = null, u === null ? le = e : u.next = e, e === null && (te = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Af = !0)), a = e;
    }
    bl !== 0 && bl !== 5 || we(l), Gu !== 0 && (Gu = 0);
  }
  function ld(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ot(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Om(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = ml, u = F, u = rn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Jf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || de(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Jf(a), Wf(u)) {
        case 2:
        case 8:
          u = po;
          break;
        case 32:
          u = vn;
          break;
        case 268435456:
          u = Bo;
          break;
        default:
          u = vn;
      }
      return a = td.bind(null, l), u = Kf(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Jf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function td(l, t) {
    if (bl !== 0 && bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (_f() && l.callbackNode !== u)
      return null;
    var a = F;
    return a = rn(
      l,
      l === ml ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Xv(l, a, t), ld(l, ct()), l.callbackNode != null && l.callbackNode === u ? td.bind(null, l) : null);
  }
  function ud(l, t) {
    if (_f()) return null;
    Xv(l, t, !0);
  }
  function fr() {
    Tr(function() {
      (al & 6) !== 0 ? Kf(
        jo,
        nr
      ) : Pv();
    });
  }
  function Ki() {
    if (Gu === 0) {
      var l = fa;
      l === 0 && (l = dn, dn <<= 1, (dn & 261888) === 0 && (dn = 256)), Gu = l;
    }
    return Gu;
  }
  function ad(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : En(l);
  }
  function cr(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = ad(
        (e[kl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[kl] || null) ? ad(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new _n(
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
                  Pc(
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
                typeof n == "function" && (c.preventDefault(), i = new FormData(e, f), Pc(
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
  for (var Ji = 0; Ji < gc.length; Ji++) {
    var wi = gc[Ji], ir = wi.toLowerCase(), or = wi[0].toUpperCase() + wi.slice(1);
    Rt(
      ir,
      "on" + or
    );
  }
  Rt(U0, "onAnimationEnd"), Rt(C0, "onAnimationIteration"), Rt(R0, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(Sy, "onTransitionRun"), Rt(Ty, "onTransitionStart"), Rt(Ey, "onTransitionCancel"), Rt(H0, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), ku(
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
  ), sr = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fe)
  );
  function ed(l, t) {
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
              Mn(g);
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
              Mn(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function w(l, t) {
    var u = t[Zo];
    u === void 0 && (u = t[Zo] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (nd(t, l, 2, !1), u.add(a));
  }
  function Fi(l, t, u) {
    var a = 0;
    t && (a |= 4), nd(
      u,
      l,
      a,
      t
    );
  }
  var Nf = "_reactListening" + Math.random().toString(36).slice(2);
  function Wi(l) {
    if (!l[Nf]) {
      l[Nf] = !0, Jo.forEach(function(u) {
        u !== "selectionchange" && (sr.has(u) || Fi(u, !1, l), Fi(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Nf] || (t[Nf] = !0, Fi("selectionchange", !1, t));
    }
  }
  function nd(l, t, u, a) {
    switch (Fd(t)) {
      case 2:
        var e = uh;
        break;
      case 8:
        e = ah;
        break;
      default:
        e = ho;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ac || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function $i(l, t, u, a, e) {
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
    n0(function() {
      var m = n, g = tc(u), E = [];
      l: {
        var v = j0.get(l);
        if (v !== void 0) {
          var r = _n, _ = l;
          switch (l) {
            case "keypress":
              if (zn(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = Fm;
              break;
            case "focusin":
              _ = "focus", r = cc;
              break;
            case "focusout":
              _ = "blur", r = cc;
              break;
            case "beforeblur":
            case "afterblur":
              r = cc;
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
              r = i0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = Ym;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = Pm;
              break;
            case U0:
            case C0:
            case R0:
              r = Gm;
              break;
            case H0:
              r = ty;
              break;
            case "scroll":
            case "scrollend":
              r = pm;
              break;
            case "wheel":
              r = ay;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Qm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = s0;
              break;
            case "submit":
              r = km;
              break;
            case "toggle":
            case "beforetoggle":
              r = ny;
          }
          var M = (t & 4) !== 0, Z = !M && (l === "scroll" || l === "scrollend"), d = M ? v !== null ? v + "Capture" : null : v;
          M = [];
          for (var o = m, y; o !== null; ) {
            var S = o;
            if (y = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || y === null || d === null || (S = he(o, d), S != null && M.push(
              We(o, S, y)
            )), Z) break;
            o = o.return;
          }
          0 < M.length && (v = new r(
            v,
            _,
            null,
            u,
            g
          ), E.push({ event: v, listeners: M }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (r = l === "mouseover" || l === "pointerover", v = l === "mouseout" || l === "pointerout", r && u !== lc && (_ = u.relatedTarget || u.fromElement) && ($u(_) || _[Ea]))
            break l;
          (v || r) && (_ = g.window === g ? g : (r = g.ownerDocument) ? r.defaultView || r.parentWindow : window, v ? (r = u.relatedTarget || u.toElement, v = m, r = r ? $u(r) : null, r !== null && (Z = Sl(r), M = r.tag, r !== Z || M !== 5 && M !== 27 && M !== 6) && (r = null)) : (v = null, r = m), v !== r && (M = i0, S = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (M = s0, S = "onPointerLeave", d = "onPointerEnter", o = "pointer"), Z = v == null ? _ : re(v), y = r == null ? _ : re(r), _ = new M(
            S,
            o + "leave",
            v,
            u,
            g
          ), _.target = Z, _.relatedTarget = y, S = null, $u(g) === m && (M = new M(
            d,
            o + "enter",
            r,
            u,
            g
          ), M.target = y, M.relatedTarget = Z, S = M), Z = S, M = v && r ? nt(
            v,
            r,
            vr
          ) : null, v !== null && fd(
            E,
            _,
            v,
            M,
            !1
          ), r !== null && Z !== null && fd(
            E,
            Z,
            r,
            M,
            !0
          )));
        }
        l: {
          if (v = m ? re(m) : window, r = v.nodeName && v.nodeName.toLowerCase(), r === "select" || r === "input" && v.type === "file")
            var N = S0;
          else if (h0(v))
            if (T0)
              N = ry;
            else {
              N = my;
              var W = dy;
            }
          else
            r = v.nodeName, !r || r.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && Pf(m.elementType) && (N = S0) : N = yy;
          if (N && (N = N(l, m))) {
            g0(
              E,
              N,
              u,
              g
            );
            break l;
          }
          W && W(l, v, m);
        }
        switch (W = m ? re(m) : window, l) {
          case "focusin":
            (h0(W) || W.contentEditable === "true") && (Ua = W, yc = m, _e = null);
            break;
          case "focusout":
            _e = yc = Ua = null;
            break;
          case "mousedown":
            rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rc = !1, M0(E, u, g);
            break;
          case "selectionchange":
            if (gy) break;
          case "keydown":
          case "keyup":
            M0(E, u, g);
        }
        var U;
        if (oc)
          l: {
            switch (l) {
              case "compositionstart":
                var H = "onCompositionStart";
                break l;
              case "compositionend":
                H = "onCompositionEnd";
                break l;
              case "compositionupdate":
                H = "onCompositionUpdate";
                break l;
            }
            H = void 0;
          }
        else
          Da ? y0(l, u) && (H = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (H = "onCompositionStart");
        H && (v0 && u.locale !== "ko" && (Da || H !== "onCompositionStart" ? H === "onCompositionEnd" && Da && (U = f0()) : (Eu = g, ec = "value" in Eu ? Eu.value : Eu.textContent, Da = !0)), W = Mf(m, H), 0 < W.length && (H = new o0(
          H,
          l,
          null,
          u,
          g
        ), E.push({ event: H, listeners: W }), U ? H.data = U : (U = r0(u), U !== null && (H.data = U)))), (U = cy ? iy(l, u) : oy(l, u)) && (H = Mf(m, "onBeforeInput"), 0 < H.length && (W = new o0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), E.push({
          event: W,
          listeners: H
        }), W.data = U)), cr(
          E,
          l,
          m,
          u,
          g
        );
      }
      ed(E, t);
    });
  }
  function We(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Mf(l, t) {
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
  function vr(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function fd(l, t, u, a, e) {
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
  var dr = /\r\n?/g, mr = /\u0000|\uFFFD/g;
  function cd(l) {
    return (typeof l == "string" ? l : "" + l).replace(dr, `
`).replace(mr, "");
  }
  function id(l, t) {
    return t = cd(t), cd(l) === t;
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
        Tn(l, "class", a);
        break;
      case "tabIndex":
        Tn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Tn(l, u, a);
        break;
      case "style":
        a0(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          Tn(l, "data", a);
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
        a = En(a), l.setAttribute(u, a);
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
        a = En(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Vt);
        return;
      case "onScroll":
        a != null && w("scroll", l);
        return;
      case "onScrollEnd":
        a != null && w("scrollend", l);
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
        u = En(a), l.setAttributeNS(
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
        w("beforetoggle", l), w("toggle", l), Sn(l, "popover", a);
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
        Sn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = Hm.get(u) || u, Sn(l, u, a);
        else return;
    }
    ll = !0;
  }
  function ki(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        a0(l, a, n);
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
        a != null && w("scroll", l);
        return;
      case "onScrollEnd":
        a != null && w("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = Vt);
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
        if (!wo.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), n = u.slice(2, e ? u.length - 7 : void 0), t = l[kl] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof a == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e);
              break l;
            }
            ll = !0, u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Sn(l, u, a);
          }
        return;
    }
    ll = !0;
  }
  function Zl(l, t, u) {
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
        w("error", l), w("load", l);
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
        w("invalid", l);
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
        Po(
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
        w("invalid", l), a = f = n = null;
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
        w("invalid", l), n = e = a = null;
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
        t0(l, a, e, n);
        return;
      case "option":
        for (i in u)
          u.hasOwnProperty(i) && (a = u[i], a != null) && (i === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : sl(l, t, i, a, u, null));
        return;
      case "dialog":
        w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l);
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Fe.length; a++)
          w(Fe[a], l);
        break;
      case "image":
        w("error", l), w("load", l);
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        w("error", l), w("load", l);
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
        if (Pf(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && ki(
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
  var yr = {};
  function rr(l, t, u, a) {
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
        kf(
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
        l0(l, v, r);
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
        for (var M in u)
          v = u[M], u.hasOwnProperty(M) && v != null && !a.hasOwnProperty(M) && sl(l, t, M, null, a, v);
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
        if (Pf(t)) {
          for (var Z in u)
            v = u[Z], u.hasOwnProperty(Z) && v !== void 0 && !a.hasOwnProperty(Z) && ki(
              l,
              t,
              Z,
              void 0,
              a,
              v
            );
          for (g in a)
            v = a[g], r = u[g], !a.hasOwnProperty(g) || v === r || v === void 0 && r === void 0 || ki(
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
  function od(l) {
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
  function hr() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && od(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], m = i.startTime;
            if (m > c) break;
            var g = i.transferSize, E = i.initiatorType;
            g && od(E) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - m) / (i - m)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Ii = null, Pi = null;
  function $e(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function sd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vd(l, t) {
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
  function dd(l, t, u, a) {
    return u = $e(
      u
    ).createElement(l), u[xl] = a, u[kl] = t, Zl(u, l, t), Hl(u), u;
  }
  function lo(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var to = null;
  function gr() {
    var l = window.event;
    return l && l.type === "popstate" ? l === to ? !1 : (to = l, !0) : (to = null, !1);
  }
  var uo = typeof setTimeout == "function" ? setTimeout : void 0, Sr = typeof clearTimeout == "function" ? clearTimeout : void 0, md = typeof Promise == "function" ? Promise : void 0, yd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : uo, Tr = typeof queueMicrotask == "function" ? queueMicrotask : typeof md < "u" ? function(l) {
    return md.resolve(null).then(l).catch(Er);
  } : uo;
  function Er(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Xu(l) {
    return l === "head";
  }
  function rd(l, t) {
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
          so(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, so(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[ye] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && so(l.ownerDocument.body);
      u = e;
    } while (u);
    ie(t);
  }
  function hd(l, t) {
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
  function gd(l, t, u) {
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
  function Sd(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function br(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function ao(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return br(t, u, l);
  }
  function zr(l) {
    return l.documentElement.clientHeight;
  }
  function Or(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function _r(l, t, u, a, e, n, f, c, i) {
    var m = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = m.startViewTransition({
        update: function() {
          var v = m.defaultView, r = v.navigation && v.navigation.transition, _ = m.fonts.status;
          a();
          var M = [];
          if (_ === "loaded" && (zr(m), m.fonts.status === "loading" && M.push(m.fonts.ready)), _ = M.length, l !== null)
            for (var Z = l.suspenseyImages, d = 0, o = 0; o < Z.length; o++) {
              var y = Z[o];
              if (!y.complete) {
                var S = y.getBoundingClientRect();
                if (0 < S.bottom && 0 < S.right && S.top < v.innerHeight && S.left < v.innerWidth) {
                  if (d += Gd(y), d > Cf) {
                    M.length = _;
                    break;
                  }
                  y = new Promise(
                    Or.bind(y)
                  ), M.push(y);
                }
              }
            }
          if (0 < M.length)
            return v = Promise.race([
              Promise.all(M),
              new Promise(function(N) {
                return setTimeout(N, 500);
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
            var _ = v[r], M = _.effect, Z = M.pseudoElement;
            if (Z != null && Z.startsWith("::view-transition")) {
              E.push(_), _ = M.getKeyframes();
              for (var d = Z = void 0, o = !0, y = 0; y < _.length; y++) {
                var S = _[y], N = S.width;
                if (Z === void 0) Z = N;
                else if (Z !== N) {
                  o = !1;
                  break;
                }
                if (N = S.height, d === void 0) d = N;
                else if (d !== N) {
                  o = !1;
                  break;
                }
                delete S.width, delete S.height, S.transform === "none" && delete S.transform;
              }
              o && Z !== void 0 && d !== void 0 && (M.setKeyframes(_), o = getComputedStyle(
                M.target,
                M.pseudoElement
              ), o.width !== Z || o.height !== d) && (o = _[0], o.width = Z, o.height = d, o = _[_.length - 1], o.width = Z, o.height = d, M.setKeyframes(_));
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
    return t = typeof t == "number" ? { duration: t } : K({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, ga.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), a = [], e = 0; e < u.length; e++) {
      var n = u[e].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
    }
    return a;
  }, ga.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Td(l) {
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
      if (bd(n, l, t, u) === -1) {
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
          Ar,
          l,
          c,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function Ar(l, t, u, a) {
    return yl(l).addEventListener(
      t,
      u,
      a
    ), !1;
  }
  gt.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = bd(
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
        Nr,
        l,
        u,
        e
      ), a.splice(t, 1), n !== null && n();
    }
  };
  function Nr(l, t, u, a) {
    return yl(l).removeEventListener(
      t,
      u,
      a
    ), !1;
  }
  function ue(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function Ed(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function bd(l, t, u, a) {
    if (l.length === 0) return -1;
    a = Ed(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && Ed(n.optionsOrUseCapture) === a)
        return e;
    }
    return -1;
  }
  gt.prototype.dispatchEvent = function(l) {
    var t = j(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = yl(t);
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
      zd,
      l,
      void 0,
      void 0
    );
  };
  function zd(l, t) {
    return l.tag === 6 ? !1 : (l = yl(l), xr(l, t));
  }
  gt.prototype.focusLast = function(l) {
    var t = [];
    T(
      this._fragmentFiber.child,
      !0,
      eo,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !zd(t[u], l); u--) ;
  };
  function eo(l, t) {
    return t.push(l), !1;
  }
  gt.prototype.blur = function() {
    var l = j(
      this._fragmentFiber
    );
    l !== null && (l = yl(l), l = $e(l).activeElement, l !== null && T(
      this._fragmentFiber.child,
      !1,
      Mr,
      l,
      void 0,
      void 0
    ));
  };
  function Mr(l, t) {
    return l.tag === 6 ? !1 : (l = yl(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  gt.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), T(
      this._fragmentFiber.child,
      !1,
      Dr,
      l,
      void 0,
      void 0
    );
  };
  function Dr(l, t) {
    return l.tag === 6 || (l = yl(l), t.observe(l)), !1;
  }
  gt.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), T(
        this._fragmentFiber.child,
        !1,
        Ur,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < Yt.length; u++) {
        var a = Yt[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : Yt[t++] = a;
      }
      Yt.length = t;
    }
  };
  function Ur(l, t) {
    return l.tag === 6 || (l = yl(l), t.unobserve(l)), !1;
  }
  var Yt = [], no = !1;
  function Cr(l, t, u) {
    Yt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), no || (no = !0, Gr(function() {
      no = !1;
      var a = Yt;
      Yt = [];
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
      Rr,
      l,
      void 0,
      void 0
    ), l;
  };
  function Rr(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = yl(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  gt.prototype.getRootNode = function(l) {
    var t = j(
      this._fragmentFiber
    );
    return t === null ? this : yl(t).getRootNode(l);
  }, gt.prototype.compareDocumentPosition = function(l) {
    var t = j(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    T(
      this._fragmentFiber.child,
      !1,
      eo,
      u,
      void 0,
      void 0
    );
    var a = yl(t);
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
      return u === l ? e = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = at(t)[1], u === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = yl(u).compareDocumentPosition(
        l
      ), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = yl(u[0]), e = yl(u[u.length - 1]);
    var n = Cl(this._fragmentFiber) ? t.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), c = e.compareDocumentPosition(l), i = f & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e === l || i || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Hr(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Hr(l, t, u, a, e) {
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
        for (n = t, t = j(t); n !== null; ) {
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
  function Od(l, t) {
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
      eo,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var a = at(
        this._fragmentFiber
      );
      if (a = u ? a[1] || a[0] || j(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = yl(a), Od(l, u);
        return;
      }
      if (a = yl(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e = t[a];
      e.tag === 6 ? (e = yl(e), Od(e, u)) : yl(e).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function jr(l, t) {
    return l = yl(l), _d(l, t), !1;
  }
  function _d(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function Ad(l, t) {
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
      for (var f = 0, c = 0; c < Yt.length; c++) {
        var i = Yt[c];
        (i.fragmentInstance !== t || i.observer !== n || i.instance !== l) && (Yt[f++] = i);
      }
      Yt.length = f, n.observe(l);
    }), _d(l, t));
  }
  function pr(l, t) {
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
      typeof n.rootMargin == "string" ? Cr(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function fo(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fo(u), gn(u);
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
  function Yr(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Nd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function co(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function io(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function qr(l, t) {
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
  var oo = null;
  function Md(l) {
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
  function Dd(l) {
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
  function xr(l, t) {
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
  function Gr(l) {
    yd(function() {
      yd(function(t) {
        return l(t);
      });
    });
  }
  function Ud(l, t, u) {
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
  function Cd(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && sl(l, t, a, null, yr, e);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Vt && (l.onclick = null), gn(l);
  }
  function so(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    gn(l);
  }
  var Ut = /* @__PURE__ */ new Map(), Rd = /* @__PURE__ */ new Set();
  function ke(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ru = q.d;
  q.d = {
    f: Xr,
    r: Qr,
    D: Vr,
    C: Zr,
    L: Lr,
    m: Kr,
    X: wr,
    S: Jr,
    M: Fr
  };
  function Xr() {
    var l = ru.f(), t = bf();
    return l || t;
  }
  function Qr(l) {
    var t = ba(l);
    t !== null && t.tag === 5 && t.type === "form" ? js(t) : ru.r(l);
  }
  var ae = typeof document > "u" ? null : document;
  function Hd(l, t, u) {
    var a = ae;
    if (a && typeof t == "string" && t) {
      var e = bt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Rd.has(e) || (Rd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Zl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function Vr(l) {
    ru.D(l), Hd("dns-prefetch", l, null);
  }
  function Zr(l, t) {
    ru.C(l, t), Hd("preconnect", l, t);
  }
  function Lr(l, t, u) {
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
      if (!(Ut.has(n) || (l = K(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Ut.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(Ie(n)) || t === "script" && a.querySelector(Pe(n))))) {
        var f = a.createElement("link");
        Zl(f, "link", l), t === "style" && (f[hn] = !0, f.onload = f.onerror = function() {
          Ko(f);
        }), Hl(f), a.head.appendChild(f);
      }
    }
  }
  function Kr(l, t) {
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
      if (!Ut.has(n) && (l = K({ rel: "modulepreload", href: l }, t), Ut.set(n, l), u.querySelector(e) === null)) {
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
        a = u.createElement("link"), Zl(a, "link", l), Hl(a), u.head.appendChild(a);
      }
    }
  }
  function Jr(l, t, u) {
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
          l = K(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Ut.get(n)) && vo(l, u);
          var i = f = a.createElement("link");
          Hl(i), Zl(i, "link", l), i._p = new Promise(function(m, g) {
            i.onload = m, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Df(f, t, a);
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
  function wr(l, t) {
    ru.X(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(Pe(e)), n || (l = K({ src: l, async: !0 }, t), (t = Ut.get(e)) && mo(l, t), n = u.createElement("script"), Hl(n), Zl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Fr(l, t) {
    ru.M(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(Pe(e)), n || (l = K({ src: l, async: !0, type: "module" }, t), (t = Ut.get(e)) && mo(l, t), n = u.createElement("script"), Hl(n), Zl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function jd(l, t, u, a) {
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
          }, Ut.set(l, n)), Wr(
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
  function pd(l) {
    return K({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Wr(l, t, u, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[hn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[hn] = !0, t.onload = t.onerror = Ko.bind(null, t), Zl(t, "link", u), Hl(t), l.head.appendChild(t);
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
          var e = K({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(a), Zl(a, "style", e), Df(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ee(u.href);
          var n = l.querySelector(
            Ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          a = pd(u), (e = Ut.get(e)) && vo(a, e), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Zl(n, "link", a), t.state.loading |= 4, Df(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ne(u.src), (e = l.querySelector(
            Pe(n)
          )) ? (t.instance = e, Hl(e), e) : (a = u, (e = Ut.get(n)) && (a = K({}, u), mo(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Hl(e), Zl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Df(a, u.precedence, l));
    return t.instance;
  }
  function Df(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function vo(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function mo(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Uf = null;
  function Yd(l, t, u) {
    if (Uf === null) {
      var a = /* @__PURE__ */ new Map(), e = Uf = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Uf, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
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
  function yo(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function $r(l, t, u) {
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
  function qd(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function xd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Gd(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Xd(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Gd(t), l.suspenseyImages.push(t)), l = Pr.bind(l), t.decode().then(l, l));
  }
  function kr(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = ee(a.href), n = t.querySelector(
          Ie(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = ln.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, a = pd(a), (e = Ut.get(e)) && vo(a, e), n = n.createElement("link"), Hl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Zl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = ln.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Cf = 0;
  function Ir(l, t) {
    return l.stylesheets && l.count === 0 && Hf(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Hf(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Cf === 0 && (Cf = 62500 * hr());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Hf(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Cf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Qd(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Hf(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function ln() {
    this.count--, Qd(this);
  }
  function Pr() {
    this.imgCount--, Qd(this);
  }
  var Rf = null;
  function Hf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Rf = /* @__PURE__ */ new Map(), t.forEach(lh, l), Rf = null, ln.call(l));
  }
  function lh(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Rf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Rf.set(l, u);
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
  function th(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wf(0), this.hiddenUpdates = wf(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Vd(l, t, u, a, e, n, f, c, i, m, g, E) {
    return l = new th(
      l,
      t,
      u,
      f,
      i,
      m,
      g,
      E,
      c
    ), t = 1, n === !0 && (t |= 24), n = Il(3, null, null, t), l.current = n, n.stateNode = l, t = Dc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Hc(n), l;
  }
  function Zd(l) {
    return l ? (l = Ha, l) : Ha;
  }
  function Ld(l, t, u, a, e, n) {
    e = Zd(e), a.context === null ? a.context = e : a.pendingContext = e, a = Du(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Uu(l, a, t), u !== null && (ut(u, l, t), Re(u, l, t));
  }
  function Kd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function ro(l, t) {
    Kd(l, t), (l = l.alternate) && Kd(l, t);
  }
  function Jd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = la(l, 67108864);
      t !== null && ut(t, l, 67108864), ro(l, 67108864);
    }
  }
  function wd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = Ff(t);
      var u = la(l, t);
      u !== null && ut(u, l, t), ro(l, t);
    }
  }
  var ce = !0;
  function uh(l, t, u, a) {
    var e = D.T;
    D.T = null;
    var n = q.p;
    try {
      q.p = 2, ho(l, t, u, a);
    } finally {
      q.p = n, D.T = e;
    }
  }
  function ah(l, t, u, a) {
    var e = D.T;
    D.T = null;
    var n = q.p;
    try {
      q.p = 8, ho(l, t, u, a);
    } finally {
      q.p = n, D.T = e;
    }
  }
  function ho(l, t, u, a) {
    if (ce) {
      var e = go(a);
      if (e === null)
        $i(
          l,
          t,
          a,
          jf,
          u
        ), Wd(l, a);
      else if (nh(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Wd(l, a), t & 4 && -1 < eh.indexOf(l)) {
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
                    It(n), (al & 6) === 0 && (Sf = ct() + 500, we(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = la(n, 2), c !== null && ut(c, n, 2), bf(), ro(n, 2);
            }
          if (n = go(a), n === null && $i(
            l,
            t,
            a,
            jf,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        $i(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function go(l) {
    return l = tc(l), So(l);
  }
  var jf = null;
  function So(l) {
    if (jf = null, l = $u(l), l !== null) {
      var t = Sl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = G(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Tl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return jf = l, null;
  }
  function Fd(l) {
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
        switch (hm()) {
          case jo:
            return 2;
          case po:
            return 8;
          case vn:
          case gm:
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
  var To = !1, Qu = null, Vu = null, Zu = null, tn = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), Lu = [], eh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Qu = null;
        break;
      case "dragenter":
      case "dragleave":
        Vu = null;
        break;
      case "mouseover":
      case "mouseout":
        Zu = null;
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
    }, t !== null && (t = ba(t), t !== null && Jd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function nh(l, t, u, a, e) {
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
        return Vu = an(
          Vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return Zu = an(
          Zu,
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
  function $d(l) {
    var t = $u(l.target);
    if (t !== null) {
      var u = Sl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = G(u), t !== null) {
            l.blockedOn = t, Vo(l.priority, function() {
              wd(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Tl(u), t !== null) {
            l.blockedOn = t, Vo(l.priority, function() {
              wd(u);
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
  function pf(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = go(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        lc = a, u.target.dispatchEvent(a), lc = null;
      } else
        return t = ba(u), t !== null && Jd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function kd(l, t, u) {
    pf(l) && u.delete(t);
  }
  function fh() {
    To = !1, Qu !== null && pf(Qu) && (Qu = null), Vu !== null && pf(Vu) && (Vu = null), Zu !== null && pf(Zu) && (Zu = null), tn.forEach(kd), un.forEach(kd);
  }
  function Bf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, To || (To = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      fh
    )));
  }
  var Yf = null;
  function Id(l) {
    Yf !== l && (Yf = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        Yf === l && (Yf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (So(a || u) === null)
              continue;
            break;
          }
          var n = ba(u);
          n !== null && (l.splice(t, 3), t -= 3, Pc(
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
    Qu !== null && Bf(Qu, l), Vu !== null && Bf(Vu, l), Zu !== null && Bf(Zu, l), tn.forEach(t), un.forEach(t);
    for (var u = 0; u < Lu.length; u++) {
      var a = Lu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Lu.length && (u = Lu[0], u.blockedOn === null); )
      $d(u), u.blockedOn === null && Lu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[kl] || null;
        if (typeof n == "function")
          f || Id(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[kl] || null)
              c = f.formAction;
            else if (So(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Id(u);
        }
      }
  }
  function Pd() {
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
  function Eo(l) {
    this._internalRoot = l;
  }
  qf.prototype.render = Eo.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var u = t.current, a = ht();
    Ld(u, a, l, t, null, null);
  }, qf.prototype.unmount = Eo.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Ld(l.current, 2, null, l, null, null), bf(), t[Ea] = null;
    }
  };
  function qf(l) {
    this._internalRoot = l;
  }
  qf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Qo();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Lu.length && t !== 0 && t < Lu[u].priority; u++) ;
      Lu.splice(u, 0, l), u === 0 && $d(l);
    }
  };
  var lm = $.version;
  if (lm !== "19.3.1")
    throw Error(
      h(
        527,
        lm,
        "19.3.1"
      )
    );
  q.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = Yl(t), l = l !== null ? p(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var ch = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xf.isDisabled && xf.supportsFiber)
      try {
        ve = xf.inject(
          ch
        ), it = xf;
      } catch {
      }
  }
  return nn.createRoot = function(l, t) {
    if (!Q(l)) throw Error(h(299));
    var u = !1, a = "", e = Zs, n = Ls, f = Ks;
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
      Pd
    ), l[Ea] = t.current, Wi(l), new Eo(t);
  }, nn.hydrateRoot = function(l, t, u) {
    if (!Q(l)) throw Error(h(299));
    var a = !1, e = "", n = Zs, f = Ls, c = Ks, i = null;
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
      Pd
    ), t.context = Zd(null), u = t.current, a = ht(), a = Ff(a), e = Du(a), e.callback = null, Uu(u, e, a), u = a, t.current.lanes = u, me(t, u), It(t), l[Ea] = t.current, Wi(l), new qf(t);
  }, nn.version = "19.3.1", nn;
}
var sm;
function gh() {
  if (sm) return Oo.exports;
  sm = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch ($) {
        console.error($);
      }
  }
  return z(), Oo.exports = hh(), Oo.exports;
}
var Sh = gh();
const Th = el.lazy(() => import("./SideRays-CEqZHgNt.js")), Eh = el.lazy(() => import("./Antigravity-GicgWIKJ.js")), bh = el.lazy(() => import("./MagicBento-oqaqvl5B.js")), zh = el.lazy(() => import("./GradientText-D8h4ZDml.js")), Oh = el.lazy(() => import("./SpotlightCard-BJbwg-rG.js")), _h = el.lazy(() => import("./LogoLoop-BSoLMsiT.js")), Ah = el.lazy(() => import("./AnimatedContent-xS_C9bUN.js")), Nh = el.lazy(() => import("./PillNav-BLEqSNT0.js")), Mh = el.lazy(() => import("./ChromaGrid-DrdelbJ0.js")), Mo = el.lazy(() => import("./CountUp-Bd4a-gaY.js")), Uo = ["#b99aff", "#8b5cf6", "#6d5dfc", "#d5c3ff"], Do = (z) => {
  try {
    return new URL("/favicon.ico", new URL(z).origin).href;
  } catch {
    return "";
  }
}, dm = (z) => Array.isArray(z) && z.length === 6 && z.every(($) => typeof $ == "string" && $.trim()) && /^https?:\/\//.test(z[5]);
function fn({ children: z, fallback: $ = null }) {
  const X = el.useRef(null), [h, Q] = el.useState(!1);
  return el.useEffect(() => {
    const Sl = X.current;
    if (!Sl || h) return;
    if (!("IntersectionObserver" in window)) {
      Q(!0);
      return;
    }
    const G = new IntersectionObserver((Tl) => {
      Tl.some((cl) => cl.isIntersecting) && (Q(!0), G.disconnect());
    }, { rootMargin: "260px 0px", threshold: 0.01 });
    return G.observe(Sl), () => G.disconnect();
  }, [h]), /* @__PURE__ */ O.jsx("div", { ref: X, children: h ? /* @__PURE__ */ O.jsx(el.Suspense, { fallback: $, children: z }) : $ });
}
function Dh() {
  const [z, $] = el.useState(new URLSearchParams(location.search).get("lang") === "ar" ? "ar" : "en");
  el.useEffect(() => {
    const h = document.getElementById("lang");
    if (!h) return;
    const Q = () => $(new URLSearchParams(location.search).get("lang") === "ar" ? "ar" : "en");
    return h.addEventListener("click", Q), () => h.removeEventListener("click", Q);
  }, []);
  const X = z === "ar" ? [{ label: "الأدوات", href: "tools.html?lang=ar" }, { label: "التصنيفات", href: "categories.html?lang=ar" }, { label: "الجديد", href: "new.html?lang=ar" }, { label: "التحديثات", href: "updates.html?lang=ar" }, { label: "المقارنة", href: "compare.html?lang=ar" }] : [{ label: "Tools", href: "tools.html" }, { label: "Categories", href: "categories.html" }, { label: "New", href: "new.html" }, { label: "Updates", href: "updates.html" }, { label: "Compare", href: "compare.html?lang=en" }];
  return /* @__PURE__ */ O.jsx(el.Suspense, { fallback: /* @__PURE__ */ O.jsx("nav", { className: "nav ca-nav-fallback", children: X.map((h) => /* @__PURE__ */ O.jsx("a", { href: h.href, children: h.label }, h.href)) }), children: /* @__PURE__ */ O.jsx(Nh, { logo: /* @__PURE__ */ O.jsx("span", { className: "ca-nav-mark", children: "</>" }), logoAlt: "Creative AI", logoHref: "./", items: X, activeHref: location.pathname.split("/").pop() === "index.html" ? "./" : location.pathname.split("/").pop(), theme: "dark", layout: "split", size: "md", surface: "glass", hoverEffect: "glide", indicator: "pill", highlightColor: "#a98aff", highlightTextColor: "#100b20", collapse: "auto", ariaLabel: z === "ar" ? "التنقل الرئيسي" : "Primary navigation" }) });
}
function Uh({ tools: z, categories: $, sources: X }) {
  return /* @__PURE__ */ O.jsxs("div", { className: "ca-metrics", "aria-label": "Verified catalog metrics", children: [
    /* @__PURE__ */ O.jsxs("div", { children: [
      /* @__PURE__ */ O.jsx("strong", { children: /* @__PURE__ */ O.jsx(el.Suspense, { fallback: z.toLocaleString(), children: /* @__PURE__ */ O.jsx(Mo, { to: z, duration: 1.35, trigger: "view", separator: "," }) }) }),
      /* @__PURE__ */ O.jsx("span", { children: "Maintained tools" })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { children: [
      /* @__PURE__ */ O.jsx("strong", { children: /* @__PURE__ */ O.jsx(el.Suspense, { fallback: $, children: /* @__PURE__ */ O.jsx(Mo, { to: $, duration: 1.2, trigger: "view" }) }) }),
      /* @__PURE__ */ O.jsx("span", { children: "Categories" })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { children: [
      /* @__PURE__ */ O.jsx("strong", { children: /* @__PURE__ */ O.jsx(el.Suspense, { fallback: X, children: /* @__PURE__ */ O.jsx(Mo, { to: X, duration: 1.1, trigger: "view" }) }) }),
      /* @__PURE__ */ O.jsx("span", { children: "Monitored sources" })
    ] })
  ] });
}
function Ch() {
  return /* @__PURE__ */ O.jsxs("div", { className: "ca-hero-effects", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("div", { className: "ca-side-rays", children: /* @__PURE__ */ O.jsx(el.Suspense, { fallback: null, children: /* @__PURE__ */ O.jsx(Th, { rayColor1: "#8b5cf6", rayColor2: "#c4b5fd", blend: 0.62, origin: "top-right", speed: 0.55, intensity: 1.15, spread: 1.65, density: 4, sharpness: 0.34, tilt: -4, falloff: 1.9, glow: 0.7, saturation: 0.82, dust: 0.04, followMouse: !1, intro: !0, opacity: 0.58, maxDevicePixelRatio: 1.25 }) }) }),
    /* @__PURE__ */ O.jsx("div", { className: "ca-antigravity", children: /* @__PURE__ */ O.jsx(el.Suspense, { fallback: null, children: /* @__PURE__ */ O.jsx(Eh, { count: 105, magnetRadius: 5, ringRadius: 6.5, waveSpeed: 0.25, waveAmplitude: 0.42, particleSize: 0.72, lerpSpeed: 0.035, colors: ["#8b5cf6", "#b99aff", "#6d5dfc"], colorMode: "conic", autoAnimate: !0, particleVariance: 0.7, rotationSpeed: 0.018, depthFactor: 0.7, pulseSpeed: 2.2, particleShape: "sphere", fieldStrength: 8, ambient: 0.18, interactive: !1, clickBurst: !1, intro: !0, opacity: 0.58, maxDevicePixelRatio: 1.2 }) }) })
  ] });
}
function Rh() {
  return /* @__PURE__ */ O.jsx("div", { className: "ca-gradient-kicker", children: /* @__PURE__ */ O.jsx(el.Suspense, { fallback: /* @__PURE__ */ O.jsx("span", { children: "DISCOVER · COMPARE · BUILD" }), children: /* @__PURE__ */ O.jsx(zh, { colors: Uo, animationSpeed: 12, variant: "flow", scale: 2, glow: 0.18, pauseOnHover: !0, children: "DISCOVER · COMPARE · BUILD" }) }) });
}
function Hh() {
  const [z, $] = el.useState([]), [X, h] = el.useState(0);
  return el.useEffect(() => {
    fetch("data/tools.json").then((Q) => Q.ok ? Q.json() : []).then((Q) => $(Q.filter(dm))).catch(() => {
    }), fetch("data/updates.json").then((Q) => Q.ok ? Q.json() : null).then((Q) => h(Array.isArray(Q?.sources) ? Q.sources.length : 0)).catch(() => {
    });
  }, []), /* @__PURE__ */ O.jsx(Uh, { tools: z.length, categories: new Set(z.map((Q) => Q[1])).size, sources: X });
}
function jh() {
  const [z, $] = el.useState([]), [X, h] = el.useState(0);
  el.useEffect(() => {
    fetch("data/tools.json").then((G) => G.ok ? G.json() : []).then((G) => $(G.filter(dm))).catch(() => {
    }), fetch("data/updates.json").then((G) => G.ok ? G.json() : null).then((G) => {
      const Tl = Array.isArray(G?.sources) ? G.sources : [];
      h(Tl.length);
    }).catch(() => {
    });
  }, []);
  const Q = el.useMemo(() => {
    const G = /* @__PURE__ */ new Map();
    return z.forEach((Tl) => {
      const cl = G.get(Tl[1]) || { count: 0, image: Do(Tl[5]), title: Tl[1], subtitle: "Explore maintained tools", accent: Uo[G.size % Uo.length], url: "category.html?category=" + encodeURIComponent(Tl[1]) };
      cl.count += 1, cl.image || (cl.image = Do(Tl[5])), G.set(Tl[1], cl);
    }), [...G.values()].sort((Tl, cl) => cl.count - Tl.count).slice(0, 8);
  }, [z]), Sl = el.useMemo(() => z.slice(0, 12).map((G) => ({ src: Do(G[5]), alt: G[0], title: G[0], href: G[5] })).filter((G) => G.src), [z]);
  return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    /* @__PURE__ */ O.jsxs("section", { className: "ca-bento-section", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ca-section-heading", children: [
        /* @__PURE__ */ O.jsx("span", { children: "THE CREATIVE AI ADVANTAGE" }),
        /* @__PURE__ */ O.jsx("h2", { children: "From discovery to the right decision." }),
        /* @__PURE__ */ O.jsx("p", { children: "One maintained catalog. Practical ways to find, compare and choose." })
      ] }),
      /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder" }), children: /* @__PURE__ */ O.jsx(bh, { columns: 3, rowHeight: 174, gap: 14, radius: 20, theme: "dark", glowColor: "132, 91, 235", textAutoHide: !1, enableBorderGlow: !0, enableSpotlight: !0, enableStars: !1, particleCount: 0, enableTilt: !1, enableMagnetism: !1, clickEffect: !0, intro: !0, items: [
        { title: "Find the right tool", description: "Start with your task, constraints and budget.", visual: "analytics" },
        { title: "Compare capabilities", description: "Understand practical differences before choosing.", visual: "dashboard" },
        { title: "Explore categories", description: "Browse tools by the work you need to do.", visual: "collaboration", colSpan: 1, rowSpan: 1 },
        { title: "Track official updates", description: "Follow release changes from monitored sources.", visual: "automation", colSpan: 1, rowSpan: 1 },
        { title: "Build your AI stack", description: "Organize tools that fit your actual workflow.", visual: "integration", colSpan: 1, rowSpan: 1 },
        { title: "Use verified details", description: "Prioritize maintained facts over marketing claims.", visual: "security", colSpan: 1, rowSpan: 1 }
      ] }) })
    ] }),
    /* @__PURE__ */ O.jsxs("section", { className: "ca-logo-section", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ca-section-heading compact", children: [
        /* @__PURE__ */ O.jsx("span", { children: "TOOLS IN THE CATALOG" }),
        /* @__PURE__ */ O.jsx("p", { children: "Real tool identities from the maintained catalog." })
      ] }),
      Sl.length > 0 && /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder ca-logo-placeholder" }), children: /* @__PURE__ */ O.jsx(_h, { logos: Sl, speed: 34, direction: "left", logoHeight: 30, gap: 36, pauseOnHover: !0, fadeOut: !0, scaleOnHover: !0, layout: "line", muted: 0.08, labels: "hover", draggable: !1, intro: !0, ariaLabel: "AI tools in the Creative AI catalog" }) })
    ] }),
    /* @__PURE__ */ O.jsxs("section", { className: "ca-chroma-section", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ca-section-heading", children: [
        /* @__PURE__ */ O.jsx("span", { children: "EXPLORE THE LANDSCAPE" }),
        /* @__PURE__ */ O.jsx("h2", { children: "Browse by category." }),
        /* @__PURE__ */ O.jsx("p", { children: "Category cards are generated from real catalog entries." })
      ] }),
      Q.length > 0 && /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder ca-grid-placeholder" }), children: /* @__PURE__ */ O.jsx(Mh, { items: Q.map((G) => ({ ...G, subtitle: G.count + " maintained tools" })), columns: 4, gap: 14, radius: 230, softness: 0.68, damping: 0.48, fadeOut: 0.55, grayscale: 1, dim: 0.12, glow: 0.42, borderGlow: 0.75, reveal: "spotlight", aspectRatio: "4 / 3", cardRadius: 18, showInfo: !0, theme: "dark" }) })
    ] }),
    /* @__PURE__ */ O.jsx("section", { className: "ca-featured-section", children: /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-component-placeholder ca-featured-placeholder" }), children: /* @__PURE__ */ O.jsxs(Oh, { className: "ca-featured-card", spotlightColor: "rgba(157, 116, 255, 0.2)", intensity: 0.18, spotlightSize: 300, softness: 0.72, borderGlow: 0.8, ambient: !0, theme: "dark", children: [
      /* @__PURE__ */ O.jsx("span", { className: "ca-featured-label", children: "A BETTER WAY TO CHOOSE" }),
      /* @__PURE__ */ O.jsx("h2", { children: "Less scrolling. Better decisions." }),
      /* @__PURE__ */ O.jsx("p", { children: "Search, compare, review alternatives and build a useful AI stack using one maintained source of truth." }),
      /* @__PURE__ */ O.jsxs("a", { href: "recommend.html?lang=en", children: [
        "Find the right tool ",
        /* @__PURE__ */ O.jsx("span", { "aria-hidden": "true", children: "↗" })
      ] })
    ] }) }) })
  ] });
}
function ph() {
  return /* @__PURE__ */ O.jsx(fn, { fallback: /* @__PURE__ */ O.jsx("div", { className: "ca-animated-placeholder" }), children: /* @__PURE__ */ O.jsxs(Ah, { direction: "vertical", distance: 24, duration: 0.7, ease: "power2.out", initialOpacity: 0, blur: 2, trigger: "scroll", once: !0, className: "ca-animated-intro", children: [
    /* @__PURE__ */ O.jsx("span", { children: "CURATED FOR REAL WORKFLOWS" }),
    /* @__PURE__ */ O.jsx("h2", { children: "Explore the catalog with clarity." }),
    /* @__PURE__ */ O.jsx("p", { children: "Move from a task to a shortlist, then compare what matters." })
  ] }) });
}
function oe(z, $) {
  const X = document.getElementById(z);
  !X || X.dataset.reactMounted || (X.dataset.reactMounted = "true", Sh.createRoot(X).render($));
}
function vm() {
  document.body.classList.add("ca-components-ready"), oe("creativeAiNavMount", /* @__PURE__ */ O.jsx(Dh, {})), oe("creativeAiHeroEffectsMount", /* @__PURE__ */ O.jsx(Ch, {})), oe("creativeAiHeroAccentMount", /* @__PURE__ */ O.jsx(Rh, {})), oe("creativeAiMetricsMount", /* @__PURE__ */ O.jsx(Hh, {})), oe("creativeAiComponentsMount", /* @__PURE__ */ O.jsx(jh, {})), oe("creativeAiAnimatedMount", /* @__PURE__ */ O.jsx(ph, {}));
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", vm, { once: !0 }) : vm();
export {
  O as j,
  el as r
};
