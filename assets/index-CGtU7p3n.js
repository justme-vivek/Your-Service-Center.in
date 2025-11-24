var Od = (e) => {
  throw TypeError(e);
};
var oa = (e, t, n) => t.has(e) || Od("Cannot " + n);
var P = (e, t, n) => (
    oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  re = (e, t, n) =>
    t.has(e)
      ? Od("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  G = (e, t, n, r) => (
    oa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Le = (e, t, n) => (oa(e, t, "access private method"), n);
var Qi = (e, t, n, r) => ({
  set _(o) {
    G(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function C0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Vp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Hp = { exports: {} },
  ml = {},
  Qp = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mi = Symbol.for("react.element"),
  E0 = Symbol.for("react.portal"),
  b0 = Symbol.for("react.fragment"),
  N0 = Symbol.for("react.strict_mode"),
  k0 = Symbol.for("react.profiler"),
  P0 = Symbol.for("react.provider"),
  j0 = Symbol.for("react.context"),
  T0 = Symbol.for("react.forward_ref"),
  R0 = Symbol.for("react.suspense"),
  O0 = Symbol.for("react.memo"),
  _0 = Symbol.for("react.lazy"),
  _d = Symbol.iterator;
function A0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_d && e[_d]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Kp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gp = Object.assign,
  Yp = {};
function Eo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yp),
    (this.updater = n || Kp);
}
Eo.prototype.isReactComponent = {};
Eo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Eo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qp() {}
qp.prototype = Eo.prototype;
function iu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yp),
    (this.updater = n || Kp);
}
var su = (iu.prototype = new qp());
su.constructor = iu;
Gp(su, Eo.prototype);
su.isPureReactComponent = !0;
var Ad = Array.isArray,
  Xp = Object.prototype.hasOwnProperty,
  lu = { current: null },
  Zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Xp.call(t, r) && !Zp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Mi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: lu.current,
  };
}
function M0(e, t) {
  return {
    $$typeof: Mi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mi;
}
function I0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Md = /\/+/g;
function ia(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? I0("" + e.key)
    : t.toString(36);
}
function xs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Mi:
          case E0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + ia(s, 0) : r),
      Ad(o)
        ? ((n = ""),
          e != null && (n = e.replace(Md, "$&/") + "/"),
          xs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (au(o) &&
            (o = M0(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Md, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ad(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + ia(i, l);
      s += xs(i, t, n, a, o);
    }
  else if (((a = A0(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + ia(i, l++)), (s += xs(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ki(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    xs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function D0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ke = { current: null },
  ws = { transition: null },
  L0 = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: ws,
    ReactCurrentOwner: lu,
  };
function eh() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
  map: Ki,
  forEach: function (e, t, n) {
    Ki(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ki(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ki(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!au(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = Eo;
Z.Fragment = b0;
Z.Profiler = k0;
Z.PureComponent = iu;
Z.StrictMode = N0;
Z.Suspense = R0;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L0;
Z.act = eh;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gp({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = lu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Xp.call(t, a) &&
        !Zp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Mi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: j0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: P0, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = Jp;
Z.createFactory = function (e) {
  var t = Jp.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: T0, render: e };
};
Z.isValidElement = au;
Z.lazy = function (e) {
  return { $$typeof: _0, _payload: { _status: -1, _result: e }, _init: D0 };
};
Z.memo = function (e, t) {
  return { $$typeof: O0, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = ws.transition;
  ws.transition = {};
  try {
    e();
  } finally {
    ws.transition = t;
  }
};
Z.unstable_act = eh;
Z.useCallback = function (e, t) {
  return Ke.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return Ke.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return Ke.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return Ke.current.useEffect(e, t);
};
Z.useId = function () {
  return Ke.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return Ke.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return Ke.current.useRef(e);
};
Z.useState = function (e) {
  return Ke.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return Ke.current.useTransition();
};
Z.version = "18.3.1";
Qp.exports = Z;
var f = Qp.exports;
const A = Vp(f),
  cu = C0({ __proto__: null, default: A }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F0 = f,
  z0 = Symbol.for("react.element"),
  $0 = Symbol.for("react.fragment"),
  B0 = Object.prototype.hasOwnProperty,
  U0 = F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  W0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function th(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) B0.call(t, r) && !W0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: z0,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: U0.current,
  };
}
ml.Fragment = $0;
ml.jsx = th;
ml.jsxs = th;
Hp.exports = ml;
var c = Hp.exports,
  nh = { exports: {} },
  lt = {},
  rh = { exports: {} },
  oh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, j) {
    var D = k.length;
    k.push(j);
    e: for (; 0 < D; ) {
      var V = (D - 1) >>> 1,
        B = k[V];
      if (0 < o(B, j)) (k[V] = j), (k[D] = B), (D = V);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var j = k[0],
      D = k.pop();
    if (D !== j) {
      k[0] = D;
      e: for (var V = 0, B = k.length, Y = B >>> 1; V < Y; ) {
        var Q = 2 * (V + 1) - 1,
          ue = k[Q],
          we = Q + 1,
          L = k[we];
        if (0 > o(ue, D))
          we < B && 0 > o(L, ue)
            ? ((k[V] = L), (k[we] = D), (V = we))
            : ((k[V] = ue), (k[Q] = D), (V = Q));
        else if (we < B && 0 > o(L, D)) (k[V] = L), (k[we] = D), (V = we);
        else break e;
      }
    }
    return j;
  }
  function o(k, j) {
    var D = k.sortIndex - j.sortIndex;
    return D !== 0 ? D : k.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    g = 3,
    m = !1,
    S = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(k) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= k)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function C(k) {
    if (((v = !1), x(k), !S))
      if (n(a) !== null) (S = !0), z(E);
      else {
        var j = n(u);
        j !== null && U(C, j.startTime - k);
      }
  }
  function E(k, j) {
    (S = !1), v && ((v = !1), y(T), (T = -1)), (m = !0);
    var D = g;
    try {
      for (
        x(j), p = n(a);
        p !== null && (!(p.expirationTime > j) || (k && !$()));

      ) {
        var V = p.callback;
        if (typeof V == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var B = V(p.expirationTime <= j);
          (j = e.unstable_now()),
            typeof B == "function" ? (p.callback = B) : p === n(a) && r(a),
            x(j);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Y = !0;
      else {
        var Q = n(u);
        Q !== null && U(C, Q.startTime - j), (Y = !1);
      }
      return Y;
    } finally {
      (p = null), (g = D), (m = !1);
    }
  }
  var N = !1,
    b = null,
    T = -1,
    O = 5,
    _ = -1;
  function $() {
    return !(e.unstable_now() - _ < O);
  }
  function I() {
    if (b !== null) {
      var k = e.unstable_now();
      _ = k;
      var j = !0;
      try {
        j = b(!0, k);
      } finally {
        j ? W() : ((N = !1), (b = null));
      }
    } else N = !1;
  }
  var W;
  if (typeof h == "function")
    W = function () {
      h(I);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      H = M.port2;
    (M.port1.onmessage = I),
      (W = function () {
        H.postMessage(null);
      });
  } else
    W = function () {
      w(I, 0);
    };
  function z(k) {
    (b = k), N || ((N = !0), W());
  }
  function U(k, j) {
    T = w(function () {
      k(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || m || ((S = !0), z(E));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (k) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = g;
      }
      var D = g;
      g = j;
      try {
        return k();
      } finally {
        g = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, j) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var D = g;
      g = k;
      try {
        return j();
      } finally {
        g = D;
      }
    }),
    (e.unstable_scheduleCallback = function (k, j, D) {
      var V = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? V + D : V))
          : (D = V),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = D + B),
        (k = {
          id: d++,
          callback: j,
          priorityLevel: k,
          startTime: D,
          expirationTime: B,
          sortIndex: -1,
        }),
        D > V
          ? ((k.sortIndex = D),
            t(u, k),
            n(a) === null &&
              k === n(u) &&
              (v ? (y(T), (T = -1)) : (v = !0), U(C, D - V)))
          : ((k.sortIndex = B), t(a, k), S || m || ((S = !0), z(E))),
        k
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (k) {
      var j = g;
      return function () {
        var D = g;
        g = j;
        try {
          return k.apply(this, arguments);
        } finally {
          g = D;
        }
      };
    });
})(oh);
rh.exports = oh;
var V0 = rh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H0 = f,
  st = V0;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ih = new Set(),
  ci = {};
function Nr(e, t) {
  po(e, t), po(e + "Capture", t);
}
function po(e, t) {
  for (ci[e] = t, e = 0; e < t.length; e++) ih.add(t[e]);
}
var sn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qa = Object.prototype.hasOwnProperty,
  Q0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Id = {},
  Dd = {};
function K0(e) {
  return Qa.call(Dd, e)
    ? !0
    : Qa.call(Id, e)
    ? !1
    : Q0.test(e)
    ? (Dd[e] = !0)
    : ((Id[e] = !0), !1);
}
function G0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Y0(e, t, n, r) {
  if (t === null || typeof t > "u" || G0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ge(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uu = /[\-:]([a-z])/g;
function du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uu, du);
    Ae[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uu, du);
    Ae[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(uu, du);
  Ae[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fu(e, t, n, r) {
  var o = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Y0(t, n, o, r) && (n = null),
    r || o === null
      ? K0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fn = H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gi = Symbol.for("react.element"),
  Dr = Symbol.for("react.portal"),
  Lr = Symbol.for("react.fragment"),
  pu = Symbol.for("react.strict_mode"),
  Ka = Symbol.for("react.profiler"),
  sh = Symbol.for("react.provider"),
  lh = Symbol.for("react.context"),
  hu = Symbol.for("react.forward_ref"),
  Ga = Symbol.for("react.suspense"),
  Ya = Symbol.for("react.suspense_list"),
  mu = Symbol.for("react.memo"),
  Cn = Symbol.for("react.lazy"),
  ah = Symbol.for("react.offscreen"),
  Ld = Symbol.iterator;
function Lo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ld && e[Ld]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  sa;
function Ko(e) {
  if (sa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sa = (t && t[1]) || "";
    }
  return (
    `
` +
    sa +
    e
  );
}
var la = !1;
function aa(e, t) {
  if (!e || la) return "";
  la = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (la = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ko(e) : "";
}
function q0(e) {
  switch (e.tag) {
    case 5:
      return Ko(e.type);
    case 16:
      return Ko("Lazy");
    case 13:
      return Ko("Suspense");
    case 19:
      return Ko("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = aa(e.type, !1)), e;
    case 11:
      return (e = aa(e.type.render, !1)), e;
    case 1:
      return (e = aa(e.type, !0)), e;
    default:
      return "";
  }
}
function qa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lr:
      return "Fragment";
    case Dr:
      return "Portal";
    case Ka:
      return "Profiler";
    case pu:
      return "StrictMode";
    case Ga:
      return "Suspense";
    case Ya:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lh:
        return (e.displayName || "Context") + ".Consumer";
      case sh:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mu:
        return (
          (t = e.displayName || null), t !== null ? t : qa(e.type) || "Memo"
        );
      case Cn:
        (t = e._payload), (e = e._init);
        try {
          return qa(e(t));
        } catch {}
    }
  return null;
}
function X0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return qa(t);
    case 8:
      return t === pu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ch(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Z0(e) {
  var t = ch(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Yi(e) {
  e._valueTracker || (e._valueTracker = Z0(e));
}
function uh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ch(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ds(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xa(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Fd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function dh(e, t) {
  (t = t.checked), t != null && fu(e, "checked", t, !1);
}
function Za(e, t) {
  dh(e, t);
  var n = Un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ja(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ja(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ja(e, t, n) {
  (t !== "number" || Ds(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Go = Array.isArray;
function Gr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ec(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $d(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Go(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Un(n) };
}
function fh(e, t) {
  var n = Un(t.value),
    r = Un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ph(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ph(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var qi,
  hh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        qi = qi || document.createElement("div"),
          qi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = qi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ui(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  J0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jo).forEach(function (e) {
  J0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jo[t] = Jo[e]);
  });
});
function mh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jo.hasOwnProperty(e) && Jo[e])
    ? ("" + t).trim()
    : t + "px";
}
function vh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = mh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ex = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function nc(e, t) {
  if (t) {
    if (ex[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function rc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var oc = null;
function vu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ic = null,
  Yr = null,
  qr = null;
function Ud(e) {
  if ((e = Li(e))) {
    if (typeof ic != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = wl(t)), ic(e.stateNode, e.type, t));
  }
}
function gh(e) {
  Yr ? (qr ? qr.push(e) : (qr = [e])) : (Yr = e);
}
function yh() {
  if (Yr) {
    var e = Yr,
      t = qr;
    if (((qr = Yr = null), Ud(e), t)) for (e = 0; e < t.length; e++) Ud(t[e]);
  }
}
function xh(e, t) {
  return e(t);
}
function wh() {}
var ca = !1;
function Sh(e, t, n) {
  if (ca) return e(t, n);
  ca = !0;
  try {
    return xh(e, t, n);
  } finally {
    (ca = !1), (Yr !== null || qr !== null) && (wh(), yh());
  }
}
function di(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var sc = !1;
if (sn)
  try {
    var Fo = {};
    Object.defineProperty(Fo, "passive", {
      get: function () {
        sc = !0;
      },
    }),
      window.addEventListener("test", Fo, Fo),
      window.removeEventListener("test", Fo, Fo);
  } catch {
    sc = !1;
  }
function tx(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ei = !1,
  Ls = null,
  Fs = !1,
  lc = null,
  nx = {
    onError: function (e) {
      (ei = !0), (Ls = e);
    },
  };
function rx(e, t, n, r, o, i, s, l, a) {
  (ei = !1), (Ls = null), tx.apply(nx, arguments);
}
function ox(e, t, n, r, o, i, s, l, a) {
  if ((rx.apply(this, arguments), ei)) {
    if (ei) {
      var u = Ls;
      (ei = !1), (Ls = null);
    } else throw Error(R(198));
    Fs || ((Fs = !0), (lc = u));
  }
}
function kr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ch(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wd(e) {
  if (kr(e) !== e) throw Error(R(188));
}
function ix(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kr(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Wd(o), e;
        if (i === r) return Wd(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Eh(e) {
  return (e = ix(e)), e !== null ? bh(e) : null;
}
function bh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nh = st.unstable_scheduleCallback,
  Vd = st.unstable_cancelCallback,
  sx = st.unstable_shouldYield,
  lx = st.unstable_requestPaint,
  be = st.unstable_now,
  ax = st.unstable_getCurrentPriorityLevel,
  gu = st.unstable_ImmediatePriority,
  kh = st.unstable_UserBlockingPriority,
  zs = st.unstable_NormalPriority,
  cx = st.unstable_LowPriority,
  Ph = st.unstable_IdlePriority,
  vl = null,
  Qt = null;
function ux(e) {
  if (Qt && typeof Qt.onCommitFiberRoot == "function")
    try {
      Qt.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : px,
  dx = Math.log,
  fx = Math.LN2;
function px(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((dx(e) / fx) | 0)) | 0;
}
var Xi = 64,
  Zi = 4194304;
function Yo(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $s(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Yo(l)) : ((i &= s), i !== 0 && (r = Yo(i)));
  } else (s = n & ~o), s !== 0 ? (r = Yo(s)) : i !== 0 && (r = Yo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Rt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function hx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function mx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Rt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = hx(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function ac(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jh() {
  var e = Xi;
  return (Xi <<= 1), !(Xi & 4194240) && (Xi = 64), e;
}
function ua(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Rt(t)),
    (e[t] = n);
}
function vx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Rt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function yu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Rt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var se = 0;
function Th(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rh,
  xu,
  Oh,
  _h,
  Ah,
  cc = !1,
  Ji = [],
  Mn = null,
  In = null,
  Dn = null,
  fi = new Map(),
  pi = new Map(),
  bn = [],
  gx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Hd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mn = null;
      break;
    case "dragenter":
    case "dragleave":
      In = null;
      break;
    case "mouseover":
    case "mouseout":
      Dn = null;
      break;
    case "pointerover":
    case "pointerout":
      fi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pi.delete(t.pointerId);
  }
}
function zo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Li(t)), t !== null && xu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function yx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Mn = zo(Mn, e, t, n, r, o)), !0;
    case "dragenter":
      return (In = zo(In, e, t, n, r, o)), !0;
    case "mouseover":
      return (Dn = zo(Dn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return fi.set(i, zo(fi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), pi.set(i, zo(pi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Mh(e) {
  var t = or(e.target);
  if (t !== null) {
    var n = kr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ch(n)), t !== null)) {
          (e.blockedOn = t),
            Ah(e.priority, function () {
              Oh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ss(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oc = r), n.target.dispatchEvent(r), (oc = null);
    } else return (t = Li(n)), t !== null && xu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qd(e, t, n) {
  Ss(e) && n.delete(t);
}
function xx() {
  (cc = !1),
    Mn !== null && Ss(Mn) && (Mn = null),
    In !== null && Ss(In) && (In = null),
    Dn !== null && Ss(Dn) && (Dn = null),
    fi.forEach(Qd),
    pi.forEach(Qd);
}
function $o(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cc ||
      ((cc = !0),
      st.unstable_scheduleCallback(st.unstable_NormalPriority, xx)));
}
function hi(e) {
  function t(o) {
    return $o(o, e);
  }
  if (0 < Ji.length) {
    $o(Ji[0], e);
    for (var n = 1; n < Ji.length; n++) {
      var r = Ji[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mn !== null && $o(Mn, e),
      In !== null && $o(In, e),
      Dn !== null && $o(Dn, e),
      fi.forEach(t),
      pi.forEach(t),
      n = 0;
    n < bn.length;
    n++
  )
    (r = bn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bn.length && ((n = bn[0]), n.blockedOn === null); )
    Mh(n), n.blockedOn === null && bn.shift();
}
var Xr = fn.ReactCurrentBatchConfig,
  Bs = !0;
function wx(e, t, n, r) {
  var o = se,
    i = Xr.transition;
  Xr.transition = null;
  try {
    (se = 1), wu(e, t, n, r);
  } finally {
    (se = o), (Xr.transition = i);
  }
}
function Sx(e, t, n, r) {
  var o = se,
    i = Xr.transition;
  Xr.transition = null;
  try {
    (se = 4), wu(e, t, n, r);
  } finally {
    (se = o), (Xr.transition = i);
  }
}
function wu(e, t, n, r) {
  if (Bs) {
    var o = uc(e, t, n, r);
    if (o === null) wa(e, t, r, Us, n), Hd(e, r);
    else if (yx(o, e, t, n, r)) r.stopPropagation();
    else if ((Hd(e, r), t & 4 && -1 < gx.indexOf(e))) {
      for (; o !== null; ) {
        var i = Li(o);
        if (
          (i !== null && Rh(i),
          (i = uc(e, t, n, r)),
          i === null && wa(e, t, r, Us, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else wa(e, t, r, null, n);
  }
}
var Us = null;
function uc(e, t, n, r) {
  if (((Us = null), (e = vu(r)), (e = or(e)), e !== null))
    if (((t = kr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ch(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Us = e), null;
}
function Ih(e) {
  switch (e) {
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
    case "resize":
    case "seeked":
    case "submit":
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
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
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
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ax()) {
        case gu:
          return 1;
        case kh:
          return 4;
        case zs:
        case cx:
          return 16;
        case Ph:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var On = null,
  Su = null,
  Cs = null;
function Dh() {
  if (Cs) return Cs;
  var e,
    t = Su,
    n = t.length,
    r,
    o = "value" in On ? On.value : On.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Cs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Es(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function es() {
  return !0;
}
function Kd() {
  return !1;
}
function at(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? es
        : Kd),
      (this.isPropagationStopped = Kd),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = es));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = es));
      },
      persist: function () {},
      isPersistent: es,
    }),
    t
  );
}
var bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cu = at(bo),
  Di = xe({}, bo, { view: 0, detail: 0 }),
  Cx = at(Di),
  da,
  fa,
  Bo,
  gl = xe({}, Di, {
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
    getModifierState: Eu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bo &&
            (Bo && e.type === "mousemove"
              ? ((da = e.screenX - Bo.screenX), (fa = e.screenY - Bo.screenY))
              : (fa = da = 0),
            (Bo = e)),
          da);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fa;
    },
  }),
  Gd = at(gl),
  Ex = xe({}, gl, { dataTransfer: 0 }),
  bx = at(Ex),
  Nx = xe({}, Di, { relatedTarget: 0 }),
  pa = at(Nx),
  kx = xe({}, bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Px = at(kx),
  jx = xe({}, bo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tx = at(jx),
  Rx = xe({}, bo, { data: 0 }),
  Yd = at(Rx),
  Ox = {
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
    MozPrintableKey: "Unidentified",
  },
  _x = {
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
    224: "Meta",
  },
  Ax = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ax[e]) ? !!t[e] : !1;
}
function Eu() {
  return Mx;
}
var Ix = xe({}, Di, {
    key: function (e) {
      if (e.key) {
        var t = Ox[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Es(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _x[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Eu,
    charCode: function (e) {
      return e.type === "keypress" ? Es(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Es(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Dx = at(Ix),
  Lx = xe({}, gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qd = at(Lx),
  Fx = xe({}, Di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eu,
  }),
  zx = at(Fx),
  $x = xe({}, bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bx = at($x),
  Ux = xe({}, gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wx = at(Ux),
  Vx = [9, 13, 27, 32],
  bu = sn && "CompositionEvent" in window,
  ti = null;
sn && "documentMode" in document && (ti = document.documentMode);
var Hx = sn && "TextEvent" in window && !ti,
  Lh = sn && (!bu || (ti && 8 < ti && 11 >= ti)),
  Xd = " ",
  Zd = !1;
function Fh(e, t) {
  switch (e) {
    case "keyup":
      return Vx.indexOf(t.keyCode) !== -1;
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
function zh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fr = !1;
function Qx(e, t) {
  switch (e) {
    case "compositionend":
      return zh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zd = !0), Xd);
    case "textInput":
      return (e = t.data), e === Xd && Zd ? null : e;
    default:
      return null;
  }
}
function Kx(e, t) {
  if (Fr)
    return e === "compositionend" || (!bu && Fh(e, t))
      ? ((e = Dh()), (Cs = Su = On = null), (Fr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gx = {
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
  week: !0,
};
function Jd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gx[e.type] : t === "textarea";
}
function $h(e, t, n, r) {
  gh(r),
    (t = Ws(t, "onChange")),
    0 < t.length &&
      ((n = new Cu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ni = null,
  mi = null;
function Yx(e) {
  Xh(e, 0);
}
function yl(e) {
  var t = Br(e);
  if (uh(t)) return e;
}
function qx(e, t) {
  if (e === "change") return t;
}
var Bh = !1;
if (sn) {
  var ha;
  if (sn) {
    var ma = "oninput" in document;
    if (!ma) {
      var ef = document.createElement("div");
      ef.setAttribute("oninput", "return;"),
        (ma = typeof ef.oninput == "function");
    }
    ha = ma;
  } else ha = !1;
  Bh = ha && (!document.documentMode || 9 < document.documentMode);
}
function tf() {
  ni && (ni.detachEvent("onpropertychange", Uh), (mi = ni = null));
}
function Uh(e) {
  if (e.propertyName === "value" && yl(mi)) {
    var t = [];
    $h(t, mi, e, vu(e)), Sh(Yx, t);
  }
}
function Xx(e, t, n) {
  e === "focusin"
    ? (tf(), (ni = t), (mi = n), ni.attachEvent("onpropertychange", Uh))
    : e === "focusout" && tf();
}
function Zx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yl(mi);
}
function Jx(e, t) {
  if (e === "click") return yl(t);
}
function ew(e, t) {
  if (e === "input" || e === "change") return yl(t);
}
function tw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var At = typeof Object.is == "function" ? Object.is : tw;
function vi(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Qa.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function nf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rf(e, t) {
  var n = nf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = nf(n);
  }
}
function Wh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vh() {
  for (var e = window, t = Ds(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ds(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function nw(e) {
  var t = Vh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Nu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = rf(n, i));
        var s = rf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var rw = sn && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  dc = null,
  ri = null,
  fc = !1;
function of(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fc ||
    zr == null ||
    zr !== Ds(r) ||
    ((r = zr),
    "selectionStart" in r && Nu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ri && vi(ri, r)) ||
      ((ri = r),
      (r = Ws(dc, "onSelect")),
      0 < r.length &&
        ((t = new Cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zr))));
}
function ts(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $r = {
    animationend: ts("Animation", "AnimationEnd"),
    animationiteration: ts("Animation", "AnimationIteration"),
    animationstart: ts("Animation", "AnimationStart"),
    transitionend: ts("Transition", "TransitionEnd"),
  },
  va = {},
  Hh = {};
sn &&
  ((Hh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $r.animationend.animation,
    delete $r.animationiteration.animation,
    delete $r.animationstart.animation),
  "TransitionEvent" in window || delete $r.transitionend.transition);
function xl(e) {
  if (va[e]) return va[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hh) return (va[e] = t[n]);
  return e;
}
var Qh = xl("animationend"),
  Kh = xl("animationiteration"),
  Gh = xl("animationstart"),
  Yh = xl("transitionend"),
  qh = new Map(),
  sf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qn(e, t) {
  qh.set(e, t), Nr(t, [e]);
}
for (var ga = 0; ga < sf.length; ga++) {
  var ya = sf[ga],
    ow = ya.toLowerCase(),
    iw = ya[0].toUpperCase() + ya.slice(1);
  Qn(ow, "on" + iw);
}
Qn(Qh, "onAnimationEnd");
Qn(Kh, "onAnimationIteration");
Qn(Gh, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(Yh, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
Nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sw = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));
function lf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ox(r, t, void 0, e), (e.currentTarget = null);
}
function Xh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          lf(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          lf(o, l, u), (i = a);
        }
    }
  }
  if (Fs) throw ((e = lc), (Fs = !1), (lc = null), e);
}
function fe(e, t) {
  var n = t[gc];
  n === void 0 && (n = t[gc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zh(t, e, 2, !1), n.add(r));
}
function xa(e, t, n) {
  var r = 0;
  t && (r |= 4), Zh(n, e, r, t);
}
var ns = "_reactListening" + Math.random().toString(36).slice(2);
function gi(e) {
  if (!e[ns]) {
    (e[ns] = !0),
      ih.forEach(function (n) {
        n !== "selectionchange" && (sw.has(n) || xa(n, !1, e), xa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ns] || ((t[ns] = !0), xa("selectionchange", !1, t));
  }
}
function Zh(e, t, n, r) {
  switch (Ih(t)) {
    case 1:
      var o = wx;
      break;
    case 4:
      o = Sx;
      break;
    default:
      o = wu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !sc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function wa(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = or(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Sh(function () {
    var u = i,
      d = vu(n),
      p = [];
    e: {
      var g = qh.get(e);
      if (g !== void 0) {
        var m = Cu,
          S = e;
        switch (e) {
          case "keypress":
            if (Es(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Dx;
            break;
          case "focusin":
            (S = "focus"), (m = pa);
            break;
          case "focusout":
            (S = "blur"), (m = pa);
            break;
          case "beforeblur":
          case "afterblur":
            m = pa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Gd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = bx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = zx;
            break;
          case Qh:
          case Kh:
          case Gh:
            m = Px;
            break;
          case Yh:
            m = Bx;
            break;
          case "scroll":
            m = Cx;
            break;
          case "wheel":
            m = Wx;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Tx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = qd;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          y = v ? (g !== null ? g + "Capture" : null) : g;
        v = [];
        for (var h = u, x; h !== null; ) {
          x = h;
          var C = x.stateNode;
          if (
            (x.tag === 5 &&
              C !== null &&
              ((x = C),
              y !== null && ((C = di(h, y)), C != null && v.push(yi(h, C, x)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((g = new m(g, S, null, n, d)), p.push({ event: g, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          g &&
            n !== oc &&
            (S = n.relatedTarget || n.fromElement) &&
            (or(S) || S[ln]))
        )
          break e;
        if (
          (m || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          m
            ? ((S = n.relatedTarget || n.toElement),
              (m = u),
              (S = S ? or(S) : null),
              S !== null &&
                ((w = kr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((m = null), (S = u)),
          m !== S)
        ) {
          if (
            ((v = Gd),
            (C = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = qd),
              (C = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (w = m == null ? g : Br(m)),
            (x = S == null ? g : Br(S)),
            (g = new v(C, h + "leave", m, n, d)),
            (g.target = w),
            (g.relatedTarget = x),
            (C = null),
            or(d) === u &&
              ((v = new v(y, h + "enter", S, n, d)),
              (v.target = x),
              (v.relatedTarget = w),
              (C = v)),
            (w = C),
            m && S)
          )
            t: {
              for (v = m, y = S, h = 0, x = v; x; x = _r(x)) h++;
              for (x = 0, C = y; C; C = _r(C)) x++;
              for (; 0 < h - x; ) (v = _r(v)), h--;
              for (; 0 < x - h; ) (y = _r(y)), x--;
              for (; h--; ) {
                if (v === y || (y !== null && v === y.alternate)) break t;
                (v = _r(v)), (y = _r(y));
              }
              v = null;
            }
          else v = null;
          m !== null && af(p, g, m, v, !1),
            S !== null && w !== null && af(p, w, S, v, !0);
        }
      }
      e: {
        if (
          ((g = u ? Br(u) : window),
          (m = g.nodeName && g.nodeName.toLowerCase()),
          m === "select" || (m === "input" && g.type === "file"))
        )
          var E = qx;
        else if (Jd(g))
          if (Bh) E = ew;
          else {
            E = Zx;
            var N = Xx;
          }
        else
          (m = g.nodeName) &&
            m.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (E = Jx);
        if (E && (E = E(e, u))) {
          $h(p, E, n, d);
          break e;
        }
        N && N(e, g, u),
          e === "focusout" &&
            (N = g._wrapperState) &&
            N.controlled &&
            g.type === "number" &&
            Ja(g, "number", g.value);
      }
      switch (((N = u ? Br(u) : window), e)) {
        case "focusin":
          (Jd(N) || N.contentEditable === "true") &&
            ((zr = N), (dc = u), (ri = null));
          break;
        case "focusout":
          ri = dc = zr = null;
          break;
        case "mousedown":
          fc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fc = !1), of(p, n, d);
          break;
        case "selectionchange":
          if (rw) break;
        case "keydown":
        case "keyup":
          of(p, n, d);
      }
      var b;
      if (bu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Fr
          ? Fh(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Lh &&
          n.locale !== "ko" &&
          (Fr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Fr && (b = Dh())
            : ((On = d),
              (Su = "value" in On ? On.value : On.textContent),
              (Fr = !0))),
        (N = Ws(u, T)),
        0 < N.length &&
          ((T = new Yd(T, e, null, n, d)),
          p.push({ event: T, listeners: N }),
          b ? (T.data = b) : ((b = zh(n)), b !== null && (T.data = b)))),
        (b = Hx ? Qx(e, n) : Kx(e, n)) &&
          ((u = Ws(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Yd("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = b)));
    }
    Xh(p, t);
  });
}
function yi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ws(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = di(e, n)),
      i != null && r.unshift(yi(e, i, o)),
      (i = di(e, t)),
      i != null && r.push(yi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function _r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function af(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = di(n, i)), a != null && s.unshift(yi(n, a, l)))
        : o || ((a = di(n, i)), a != null && s.push(yi(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var lw = /\r\n?/g,
  aw = /\u0000|\uFFFD/g;
function cf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lw,
      `
`
    )
    .replace(aw, "");
}
function rs(e, t, n) {
  if (((t = cf(t)), cf(e) !== t && n)) throw Error(R(425));
}
function Vs() {}
var pc = null,
  hc = null;
function mc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vc = typeof setTimeout == "function" ? setTimeout : void 0,
  cw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  uf = typeof Promise == "function" ? Promise : void 0,
  uw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof uf < "u"
      ? function (e) {
          return uf.resolve(null).then(e).catch(dw);
        }
      : vc;
function dw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Sa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), hi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  hi(t);
}
function Ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function df(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var No = Math.random().toString(36).slice(2),
  Wt = "__reactFiber$" + No,
  xi = "__reactProps$" + No,
  ln = "__reactContainer$" + No,
  gc = "__reactEvents$" + No,
  fw = "__reactListeners$" + No,
  pw = "__reactHandles$" + No;
function or(e) {
  var t = e[Wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ln] || n[Wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = df(e); e !== null; ) {
          if ((n = e[Wt])) return n;
          e = df(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Li(e) {
  return (
    (e = e[Wt] || e[ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function wl(e) {
  return e[xi] || null;
}
var yc = [],
  Ur = -1;
function Kn(e) {
  return { current: e };
}
function pe(e) {
  0 > Ur || ((e.current = yc[Ur]), (yc[Ur] = null), Ur--);
}
function ce(e, t) {
  Ur++, (yc[Ur] = e.current), (e.current = t);
}
var Wn = {},
  Ue = Kn(Wn),
  Ze = Kn(!1),
  vr = Wn;
function ho(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Je(e) {
  return (e = e.childContextTypes), e != null;
}
function Hs() {
  pe(Ze), pe(Ue);
}
function ff(e, t, n) {
  if (Ue.current !== Wn) throw Error(R(168));
  ce(Ue, t), ce(Ze, n);
}
function Jh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, X0(e) || "Unknown", o));
  return xe({}, n, r);
}
function Qs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wn),
    (vr = Ue.current),
    ce(Ue, e),
    ce(Ze, Ze.current),
    !0
  );
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Jh(e, t, vr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(Ze),
      pe(Ue),
      ce(Ue, e))
    : pe(Ze),
    ce(Ze, n);
}
var en = null,
  Sl = !1,
  Ca = !1;
function em(e) {
  en === null ? (en = [e]) : en.push(e);
}
function hw(e) {
  (Sl = !0), em(e);
}
function Gn() {
  if (!Ca && en !== null) {
    Ca = !0;
    var e = 0,
      t = se;
    try {
      var n = en;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (en = null), (Sl = !1);
    } catch (o) {
      throw (en !== null && (en = en.slice(e + 1)), Nh(gu, Gn), o);
    } finally {
      (se = t), (Ca = !1);
    }
  }
  return null;
}
var Wr = [],
  Vr = 0,
  Ks = null,
  Gs = 0,
  ft = [],
  pt = 0,
  gr = null,
  nn = 1,
  rn = "";
function tr(e, t) {
  (Wr[Vr++] = Gs), (Wr[Vr++] = Ks), (Ks = e), (Gs = t);
}
function tm(e, t, n) {
  (ft[pt++] = nn), (ft[pt++] = rn), (ft[pt++] = gr), (gr = e);
  var r = nn;
  e = rn;
  var o = 32 - Rt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Rt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (nn = (1 << (32 - Rt(t) + o)) | (n << o) | r),
      (rn = i + e);
  } else (nn = (1 << i) | (n << o) | r), (rn = e);
}
function ku(e) {
  e.return !== null && (tr(e, 1), tm(e, 1, 0));
}
function Pu(e) {
  for (; e === Ks; )
    (Ks = Wr[--Vr]), (Wr[Vr] = null), (Gs = Wr[--Vr]), (Wr[Vr] = null);
  for (; e === gr; )
    (gr = ft[--pt]),
      (ft[pt] = null),
      (rn = ft[--pt]),
      (ft[pt] = null),
      (nn = ft[--pt]),
      (ft[pt] = null);
}
var ot = null,
  rt = null,
  ve = !1,
  Tt = null;
function nm(e, t) {
  var n = ht(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ot = e), (rt = Ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ot = e), (rt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gr !== null ? { id: nn, overflow: rn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ht(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ot = e),
            (rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wc(e) {
  if (ve) {
    var t = rt;
    if (t) {
      var n = t;
      if (!hf(e, t)) {
        if (xc(e)) throw Error(R(418));
        t = Ln(n.nextSibling);
        var r = ot;
        t && hf(e, t)
          ? nm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (ot = e));
      }
    } else {
      if (xc(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (ot = e);
    }
  }
}
function mf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ot = e;
}
function os(e) {
  if (e !== ot) return !1;
  if (!ve) return mf(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !mc(e.type, e.memoizedProps))),
    t && (t = rt))
  ) {
    if (xc(e)) throw (rm(), Error(R(418)));
    for (; t; ) nm(e, t), (t = Ln(t.nextSibling));
  }
  if ((mf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = ot ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function rm() {
  for (var e = rt; e; ) e = Ln(e.nextSibling);
}
function mo() {
  (rt = ot = null), (ve = !1);
}
function ju(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
var mw = fn.ReactCurrentBatchConfig;
function Uo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function is(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function vf(e) {
  var t = e._init;
  return t(e._payload);
}
function om(e) {
  function t(y, h) {
    if (e) {
      var x = y.deletions;
      x === null ? ((y.deletions = [h]), (y.flags |= 16)) : x.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function o(y, h) {
    return (y = Bn(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, h, x) {
    return (
      (y.index = x),
      e
        ? ((x = y.alternate),
          x !== null
            ? ((x = x.index), x < h ? ((y.flags |= 2), h) : x)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, h, x, C) {
    return h === null || h.tag !== 6
      ? ((h = Ta(x, y.mode, C)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h);
  }
  function a(y, h, x, C) {
    var E = x.type;
    return E === Lr
      ? d(y, h, x.props.children, C, x.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Cn &&
            vf(E) === h.type))
      ? ((C = o(h, x.props)), (C.ref = Uo(y, h, x)), (C.return = y), C)
      : ((C = Rs(x.type, x.key, x.props, null, y.mode, C)),
        (C.ref = Uo(y, h, x)),
        (C.return = y),
        C);
  }
  function u(y, h, x, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== x.containerInfo ||
      h.stateNode.implementation !== x.implementation
      ? ((h = Ra(x, y.mode, C)), (h.return = y), h)
      : ((h = o(h, x.children || [])), (h.return = y), h);
  }
  function d(y, h, x, C, E) {
    return h === null || h.tag !== 7
      ? ((h = hr(x, y.mode, C, E)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h);
  }
  function p(y, h, x) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ta("" + h, y.mode, x)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Gi:
          return (
            (x = Rs(h.type, h.key, h.props, null, y.mode, x)),
            (x.ref = Uo(y, null, h)),
            (x.return = y),
            x
          );
        case Dr:
          return (h = Ra(h, y.mode, x)), (h.return = y), h;
        case Cn:
          var C = h._init;
          return p(y, C(h._payload), x);
      }
      if (Go(h) || Lo(h))
        return (h = hr(h, y.mode, x, null)), (h.return = y), h;
      is(y, h);
    }
    return null;
  }
  function g(y, h, x, C) {
    var E = h !== null ? h.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return E !== null ? null : l(y, h, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Gi:
          return x.key === E ? a(y, h, x, C) : null;
        case Dr:
          return x.key === E ? u(y, h, x, C) : null;
        case Cn:
          return (E = x._init), g(y, h, E(x._payload), C);
      }
      if (Go(x) || Lo(x)) return E !== null ? null : d(y, h, x, C, null);
      is(y, x);
    }
    return null;
  }
  function m(y, h, x, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (y = y.get(x) || null), l(h, y, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Gi:
          return (y = y.get(C.key === null ? x : C.key) || null), a(h, y, C, E);
        case Dr:
          return (y = y.get(C.key === null ? x : C.key) || null), u(h, y, C, E);
        case Cn:
          var N = C._init;
          return m(y, h, x, N(C._payload), E);
      }
      if (Go(C) || Lo(C)) return (y = y.get(x) || null), d(h, y, C, E, null);
      is(h, C);
    }
    return null;
  }
  function S(y, h, x, C) {
    for (
      var E = null, N = null, b = h, T = (h = 0), O = null;
      b !== null && T < x.length;
      T++
    ) {
      b.index > T ? ((O = b), (b = null)) : (O = b.sibling);
      var _ = g(y, b, x[T], C);
      if (_ === null) {
        b === null && (b = O);
        break;
      }
      e && b && _.alternate === null && t(y, b),
        (h = i(_, h, T)),
        N === null ? (E = _) : (N.sibling = _),
        (N = _),
        (b = O);
    }
    if (T === x.length) return n(y, b), ve && tr(y, T), E;
    if (b === null) {
      for (; T < x.length; T++)
        (b = p(y, x[T], C)),
          b !== null &&
            ((h = i(b, h, T)), N === null ? (E = b) : (N.sibling = b), (N = b));
      return ve && tr(y, T), E;
    }
    for (b = r(y, b); T < x.length; T++)
      (O = m(b, y, T, x[T], C)),
        O !== null &&
          (e && O.alternate !== null && b.delete(O.key === null ? T : O.key),
          (h = i(O, h, T)),
          N === null ? (E = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        b.forEach(function ($) {
          return t(y, $);
        }),
      ve && tr(y, T),
      E
    );
  }
  function v(y, h, x, C) {
    var E = Lo(x);
    if (typeof E != "function") throw Error(R(150));
    if (((x = E.call(x)), x == null)) throw Error(R(151));
    for (
      var N = (E = null), b = h, T = (h = 0), O = null, _ = x.next();
      b !== null && !_.done;
      T++, _ = x.next()
    ) {
      b.index > T ? ((O = b), (b = null)) : (O = b.sibling);
      var $ = g(y, b, _.value, C);
      if ($ === null) {
        b === null && (b = O);
        break;
      }
      e && b && $.alternate === null && t(y, b),
        (h = i($, h, T)),
        N === null ? (E = $) : (N.sibling = $),
        (N = $),
        (b = O);
    }
    if (_.done) return n(y, b), ve && tr(y, T), E;
    if (b === null) {
      for (; !_.done; T++, _ = x.next())
        (_ = p(y, _.value, C)),
          _ !== null &&
            ((h = i(_, h, T)), N === null ? (E = _) : (N.sibling = _), (N = _));
      return ve && tr(y, T), E;
    }
    for (b = r(y, b); !_.done; T++, _ = x.next())
      (_ = m(b, y, T, _.value, C)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? T : _.key),
          (h = i(_, h, T)),
          N === null ? (E = _) : (N.sibling = _),
          (N = _));
    return (
      e &&
        b.forEach(function (I) {
          return t(y, I);
        }),
      ve && tr(y, T),
      E
    );
  }
  function w(y, h, x, C) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Lr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Gi:
          e: {
            for (var E = x.key, N = h; N !== null; ) {
              if (N.key === E) {
                if (((E = x.type), E === Lr)) {
                  if (N.tag === 7) {
                    n(y, N.sibling),
                      (h = o(N, x.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Cn &&
                    vf(E) === N.type)
                ) {
                  n(y, N.sibling),
                    (h = o(N, x.props)),
                    (h.ref = Uo(y, N, x)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, N);
                break;
              } else t(y, N);
              N = N.sibling;
            }
            x.type === Lr
              ? ((h = hr(x.props.children, y.mode, C, x.key)),
                (h.return = y),
                (y = h))
              : ((C = Rs(x.type, x.key, x.props, null, y.mode, C)),
                (C.ref = Uo(y, h, x)),
                (C.return = y),
                (y = C));
          }
          return s(y);
        case Dr:
          e: {
            for (N = x.key; h !== null; ) {
              if (h.key === N)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === x.containerInfo &&
                  h.stateNode.implementation === x.implementation
                ) {
                  n(y, h.sibling),
                    (h = o(h, x.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = Ra(x, y.mode, C)), (h.return = y), (y = h);
          }
          return s(y);
        case Cn:
          return (N = x._init), w(y, h, N(x._payload), C);
      }
      if (Go(x)) return S(y, h, x, C);
      if (Lo(x)) return v(y, h, x, C);
      is(y, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = o(h, x)), (h.return = y), (y = h))
          : (n(y, h), (h = Ta(x, y.mode, C)), (h.return = y), (y = h)),
        s(y))
      : n(y, h);
  }
  return w;
}
var vo = om(!0),
  im = om(!1),
  Ys = Kn(null),
  qs = null,
  Hr = null,
  Tu = null;
function Ru() {
  Tu = Hr = qs = null;
}
function Ou(e) {
  var t = Ys.current;
  pe(Ys), (e._currentValue = t);
}
function Sc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zr(e, t) {
  (qs = e),
    (Tu = Hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function vt(e) {
  var t = e._currentValue;
  if (Tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hr === null)) {
      if (qs === null) throw Error(R(308));
      (Hr = e), (qs.dependencies = { lanes: 0, firstContext: e });
    } else Hr = Hr.next = e;
  return t;
}
var ir = null;
function _u(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function sm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _u(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    an(e, r)
  );
}
function an(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var En = !1;
function Au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function on(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      an(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _u(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    an(e, n)
  );
}
function bs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
function gf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Xs(e, t, n, r) {
  var o = e.updateQueue;
  En = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (d = u = a = null), (l = i);
    do {
      var g = l.lane,
        m = l.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            v = l;
          switch (((g = t), (m = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                p = S.call(m, p, g);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (g = typeof S == "function" ? S.call(m, p, g) : S),
                g == null)
              )
                break e;
              p = xe({}, p, g);
              break e;
            case 2:
              En = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [l]) : g.push(l));
      } else
        (m = {
          eventTime: m,
          lane: g,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = m), (a = p)) : (d = d.next = m),
          (s |= g);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (g = l),
          (l = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (xr |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function yf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Fi = {},
  Kt = Kn(Fi),
  wi = Kn(Fi),
  Si = Kn(Fi);
function sr(e) {
  if (e === Fi) throw Error(R(174));
  return e;
}
function Mu(e, t) {
  switch ((ce(Si, t), ce(wi, e), ce(Kt, Fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = tc(t, e));
  }
  pe(Kt), ce(Kt, t);
}
function go() {
  pe(Kt), pe(wi), pe(Si);
}
function am(e) {
  sr(Si.current);
  var t = sr(Kt.current),
    n = tc(t, e.type);
  t !== n && (ce(wi, e), ce(Kt, n));
}
function Iu(e) {
  wi.current === e && (pe(Kt), pe(wi));
}
var ge = Kn(0);
function Zs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ea = [];
function Du() {
  for (var e = 0; e < Ea.length; e++)
    Ea[e]._workInProgressVersionPrimary = null;
  Ea.length = 0;
}
var Ns = fn.ReactCurrentDispatcher,
  ba = fn.ReactCurrentBatchConfig,
  yr = 0,
  ye = null,
  ke = null,
  Te = null,
  Js = !1,
  oi = !1,
  Ci = 0,
  vw = 0;
function Fe() {
  throw Error(R(321));
}
function Lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!At(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, o, i) {
  if (
    ((yr = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ns.current = e === null || e.memoizedState === null ? ww : Sw),
    (e = n(r, o)),
    oi)
  ) {
    i = 0;
    do {
      if (((oi = !1), (Ci = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (Te = ke = null),
        (t.updateQueue = null),
        (Ns.current = Cw),
        (e = n(r, o));
    } while (oi);
  }
  if (
    ((Ns.current = el),
    (t = ke !== null && ke.next !== null),
    (yr = 0),
    (Te = ke = ye = null),
    (Js = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function zu() {
  var e = Ci !== 0;
  return (Ci = 0), e;
}
function zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function gt() {
  if (ke === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Te === null ? ye.memoizedState : Te.next;
  if (t !== null) (Te = t), (ke = e);
  else {
    if (e === null) throw Error(R(310));
    (ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function Ei(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Na(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ke,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((yr & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (ye.lanes |= d),
          (xr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      At(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (xr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ka(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    At(i, t.memoizedState) || (Xe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function cm() {}
function um(e, t) {
  var n = ye,
    r = gt(),
    o = t(),
    i = !At(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Xe = !0)),
    (r = r.queue),
    $u(pm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      bi(9, fm.bind(null, n, r, o, t), void 0, null),
      Re === null)
    )
      throw Error(R(349));
    yr & 30 || dm(n, t, o);
  }
  return o;
}
function dm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hm(t) && mm(e);
}
function pm(e, t, n) {
  return n(function () {
    hm(t) && mm(e);
  });
}
function hm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function mm(e) {
  var t = an(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function xf(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ei,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xw.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function bi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vm() {
  return gt().memoizedState;
}
function ks(e, t, n, r) {
  var o = zt();
  (ye.flags |= e),
    (o.memoizedState = bi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cl(e, t, n, r) {
  var o = gt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var s = ke.memoizedState;
    if (((i = s.destroy), r !== null && Lu(r, s.deps))) {
      o.memoizedState = bi(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = bi(1 | t, n, i, r));
}
function wf(e, t) {
  return ks(8390656, 8, e, t);
}
function $u(e, t) {
  return Cl(2048, 8, e, t);
}
function gm(e, t) {
  return Cl(4, 2, e, t);
}
function ym(e, t) {
  return Cl(4, 4, e, t);
}
function xm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cl(4, 4, xm.bind(null, t, e), n)
  );
}
function Bu() {}
function Sm(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Cm(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Em(e, t, n) {
  return yr & 21
    ? (At(n, t) || ((n = jh()), (ye.lanes |= n), (xr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function gw(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ba.transition;
  ba.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (ba.transition = r);
  }
}
function bm() {
  return gt().memoizedState;
}
function yw(e, t, n) {
  var r = $n(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Nm(e))
  )
    km(t, n);
  else if (((n = sm(e, t, n, r)), n !== null)) {
    var o = Qe();
    Ot(n, e, r, o), Pm(n, t, r);
  }
}
function xw(e, t, n) {
  var r = $n(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nm(e)) km(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), At(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), _u(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = sm(e, t, o, r)),
      n !== null && ((o = Qe()), Ot(n, e, r, o), Pm(n, t, r));
  }
}
function Nm(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function km(e, t) {
  oi = Js = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Pm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
var el = {
    readContext: vt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  ww = {
    readContext: vt,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: vt,
    useEffect: wf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ks(4194308, 4, xm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ks(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ks(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = yw.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xf,
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = xf(!1),
        t = e[0];
      return (e = gw.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = zt();
      if (ve) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(R(349));
        yr & 30 || dm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        wf(pm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        bi(9, fm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = Re.identifierPrefix;
      if (ve) {
        var n = rn,
          r = nn;
        (n = (r & ~(1 << (32 - Rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ci++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = vw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sw = {
    readContext: vt,
    useCallback: Sm,
    useContext: vt,
    useEffect: $u,
    useImperativeHandle: wm,
    useInsertionEffect: gm,
    useLayoutEffect: ym,
    useMemo: Cm,
    useReducer: Na,
    useRef: vm,
    useState: function () {
      return Na(Ei);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = gt();
      return Em(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Na(Ei)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: cm,
    useSyncExternalStore: um,
    useId: bm,
    unstable_isNewReconciler: !1,
  },
  Cw = {
    readContext: vt,
    useCallback: Sm,
    useContext: vt,
    useEffect: $u,
    useImperativeHandle: wm,
    useInsertionEffect: gm,
    useLayoutEffect: ym,
    useMemo: Cm,
    useReducer: ka,
    useRef: vm,
    useState: function () {
      return ka(Ei);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = gt();
      return ke === null ? (t.memoizedState = e) : Em(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = ka(Ei)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: cm,
    useSyncExternalStore: um,
    useId: bm,
    unstable_isNewReconciler: !1,
  };
function bt(e, t) {
  if (e && e.defaultProps) {
    (t = xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Cc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = $n(e),
      i = on(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Fn(e, i, o)),
      t !== null && (Ot(t, e, o, r), bs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = $n(e),
      i = on(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Fn(e, i, o)),
      t !== null && (Ot(t, e, o, r), bs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qe(),
      r = $n(e),
      o = on(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Fn(e, o, r)),
      t !== null && (Ot(t, e, r, n), bs(t, e, r));
  },
};
function Sf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !vi(n, r) || !vi(o, i)
      : !0
  );
}
function jm(e, t, n) {
  var r = !1,
    o = Wn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = vt(i))
      : ((o = Je(t) ? vr : Ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ho(e, o) : Wn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Cf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Ec(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Au(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = vt(i))
    : ((i = Je(t) ? vr : Ue.current), (o.context = ho(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Cc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && El.enqueueReplaceState(o, o.state, null),
      Xs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += q0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Pa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ew = typeof WeakMap == "function" ? WeakMap : Map;
function Tm(e, t, n) {
  (n = on(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Mc = r)), bc(e, t);
    }),
    n
  );
}
function Rm(e, t, n) {
  (n = on(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        bc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        bc(e, t),
          typeof r != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Ef(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ew();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Lw.bind(null, e, t, n)), t.then(e, e));
}
function bf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = on(-1, 1)), (t.tag = 2), Fn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bw = fn.ReactCurrentOwner,
  Xe = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? im(t, null, n, r) : vo(t, e.child, n, r);
}
function kf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Zr(t, o),
    (r = Fu(e, t, n, r, i, o)),
    (n = zu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (ve && n && ku(t), (t.flags |= 1), Ve(e, t, r, o), t.child)
  );
}
function Pf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Yu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Om(e, t, i, r, o))
      : ((e = Rs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : vi), n(s, r) && e.ref === t.ref)
    )
      return cn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Bn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Om(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (vi(i, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), cn(e, t, o);
  }
  return Nc(e, t, n, r, o);
}
function _m(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(Kr, tt),
        (tt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(Kr, tt),
          (tt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ce(Kr, tt),
        (tt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(Kr, tt),
      (tt |= r);
  return Ve(e, t, o, n), t.child;
}
function Am(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nc(e, t, n, r, o) {
  var i = Je(n) ? vr : Ue.current;
  return (
    (i = ho(t, i)),
    Zr(t, o),
    (n = Fu(e, t, n, r, i, o)),
    (r = zu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (ve && r && ku(t), (t.flags |= 1), Ve(e, t, n, o), t.child)
  );
}
function jf(e, t, n, r, o) {
  if (Je(n)) {
    var i = !0;
    Qs(t);
  } else i = !1;
  if ((Zr(t, o), t.stateNode === null))
    Ps(e, t), jm(t, n, r), Ec(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = vt(u))
      : ((u = Je(n) ? vr : Ue.current), (u = ho(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Cf(t, s, r, u)),
      (En = !1);
    var g = t.memoizedState;
    (s.state = g),
      Xs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || g !== a || Ze.current || En
        ? (typeof d == "function" && (Cc(t, n, d, r), (a = t.memoizedState)),
          (l = En || Sf(t, n, l, r, g, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      lm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : bt(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (g = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = vt(a))
        : ((a = Je(n) ? vr : Ue.current), (a = ho(t, a)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || g !== a) && Cf(t, s, r, a)),
      (En = !1),
      (g = t.memoizedState),
      (s.state = g),
      Xs(t, r, s, o);
    var S = t.memoizedState;
    l !== p || g !== S || Ze.current || En
      ? (typeof m == "function" && (Cc(t, n, m, r), (S = t.memoizedState)),
        (u = En || Sf(t, n, u, r, g, S, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return kc(e, t, n, r, i, o);
}
function kc(e, t, n, r, o, i) {
  Am(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && pf(t, n, !1), cn(e, t, i);
  (r = t.stateNode), (bw.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = vo(t, e.child, null, i)), (t.child = vo(t, null, l, i)))
      : Ve(e, t, l, i),
    (t.memoizedState = r.state),
    o && pf(t, n, !0),
    t.child
  );
}
function Mm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ff(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ff(e, t.context, !1),
    Mu(e, t.containerInfo);
}
function Tf(e, t, n, r, o) {
  return mo(), ju(o), (t.flags |= 256), Ve(e, t, n, r), t.child;
}
var Pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function jc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Im(e, t, n) {
  var r = t.pendingProps,
    o = ge.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ce(ge, o & 1),
    e === null)
  )
    return (
      wc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = kl(s, r, 0, null)),
              (e = hr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = jc(n)),
              (t.memoizedState = Pc),
              e)
            : Uu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Nw(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Bn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Bn(l, i)) : ((i = hr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? jc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Bn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uu(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ss(e, t, n, r) {
  return (
    r !== null && ju(r),
    vo(t, e.child, null, n),
    (e = Uu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Nw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Pa(Error(R(422)))), ss(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = kl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = hr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && vo(t, e.child, null, s),
        (t.child.memoizedState = jc(s)),
        (t.memoizedState = Pc),
        i);
  if (!(t.mode & 1)) return ss(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(R(419))), (r = Pa(i, r, void 0)), ss(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Xe || l)) {
    if (((r = Re), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), an(e, o), Ot(r, e, o, -1));
    }
    return Gu(), (r = Pa(Error(R(421)))), ss(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (rt = Ln(o.nextSibling)),
      (ot = t),
      (ve = !0),
      (Tt = null),
      e !== null &&
        ((ft[pt++] = nn),
        (ft[pt++] = rn),
        (ft[pt++] = gr),
        (nn = e.id),
        (rn = e.overflow),
        (gr = t)),
      (t = Uu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sc(e.return, t, n);
}
function ja(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Dm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ve(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rf(e, n, t);
        else if (e.tag === 19) Rf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ce(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Zs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ja(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Zs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ja(t, !0, n, null, i);
        break;
      case "together":
        ja(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ps(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Bn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function kw(e, t, n) {
  switch (t.tag) {
    case 3:
      Mm(t), mo();
      break;
    case 5:
      am(t);
      break;
    case 1:
      Je(t.type) && Qs(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ce(Ys, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Im(e, t, n)
          : (ce(ge, ge.current & 1),
            (e = cn(e, t, n)),
            e !== null ? e.sibling : null);
      ce(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ce(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _m(e, t, n);
  }
  return cn(e, t, n);
}
var Lm, Tc, Fm, zm;
Lm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Tc = function () {};
Fm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), sr(Kt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Xa(e, o)), (r = Xa(e, r)), (i = []);
        break;
      case "select":
        (o = xe({}, o, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ec(e, o)), (r = ec(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vs);
    }
    nc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ci.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ci.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && fe("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
zm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wo(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Pw(e, t, n) {
  var r = t.pendingProps;
  switch ((Pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(t), null;
    case 1:
      return Je(t.type) && Hs(), ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        go(),
        pe(Ze),
        pe(Ue),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (os(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tt !== null && (Lc(Tt), (Tt = null)))),
        Tc(e, t),
        ze(t),
        null
      );
    case 5:
      Iu(t);
      var o = sr(Si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return ze(t), null;
        }
        if (((e = sr(Kt.current)), os(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Wt] = t), (r[xi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qo.length; o++) fe(qo[o], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              Fd(r, i), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              $d(r, i), fe("invalid", r);
          }
          nc(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      rs(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      rs(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ci.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Yi(r), zd(r, i, !0);
              break;
            case "textarea":
              Yi(r), Bd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ph(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Wt] = t),
            (e[xi] = r),
            Lm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = rc(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < qo.length; o++) fe(qo[o], e);
                o = r;
                break;
              case "source":
                fe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (o = r);
                break;
              case "details":
                fe("toggle", e), (o = r);
                break;
              case "input":
                Fd(e, r), (o = Xa(e, r)), fe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = xe({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                $d(e, r), (o = ec(e, r)), fe("invalid", e);
                break;
              default:
                o = r;
            }
            nc(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? vh(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && hh(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ui(e, a)
                    : typeof a == "number" && ui(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ci.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && fe("scroll", e)
                      : a != null && fu(e, i, a, s));
              }
            switch (n) {
              case "input":
                Yi(e), zd(e, r, !1);
                break;
              case "textarea":
                Yi(e), Bd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Gr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Gr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Vs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) zm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = sr(Si.current)), sr(Kt.current), os(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Wt] = t),
            (i = r.nodeValue !== n) && ((e = ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                rs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  rs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Wt] = t),
            (t.stateNode = r);
      }
      return ze(t), null;
    case 13:
      if (
        (pe(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && rt !== null && t.mode & 1 && !(t.flags & 128))
          rm(), mo(), (t.flags |= 98560), (i = !1);
        else if (((i = os(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[Wt] = t;
          } else
            mo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (i = !1);
        } else Tt !== null && (Lc(Tt), (Tt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Pe === 0 && (Pe = 3) : Gu())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        go(), Tc(e, t), e === null && gi(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return Ou(t.type._context), ze(t), null;
    case 17:
      return Je(t.type) && Hs(), ze(t), null;
    case 19:
      if ((pe(ge), (i = t.memoizedState), i === null)) return ze(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Wo(i, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Zs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Wo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            be() > xo &&
            ((t.flags |= 128), (r = !0), Wo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ve)
            )
              return ze(t), null;
          } else
            2 * be() - i.renderingStartTime > xo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = be()),
          (t.sibling = null),
          (n = ge.current),
          ce(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        Ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? tt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function jw(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && Hs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        go(),
        pe(Ze),
        pe(Ue),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Iu(t), null;
    case 13:
      if (
        (pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        mo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(ge), null;
    case 4:
      return go(), null;
    case 10:
      return Ou(t.type._context), null;
    case 22:
    case 23:
      return Ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ls = !1,
  Be = !1,
  Tw = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Qr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Rc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Of = !1;
function Rw(e, t) {
  if (((pc = Bs), (e = Vh()), Nu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var m;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (m = p.firstChild) !== null;

            )
              (g = p), (p = m);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++u === o && (l = s),
                g === i && ++d === r && (a = s),
                (m = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hc = { focusedElem: e, selectionRange: n }, Bs = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    w = S.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : bt(t.type, v),
                      w
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          Ee(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (S = Of), (Of = !1), S;
}
function ii(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Rc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $m(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $m(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Wt], delete t[xi], delete t[gc], delete t[fw], delete t[pw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _f(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _c(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_c(e, t, n), e = e.sibling; e !== null; ) _c(e, t, n), (e = e.sibling);
}
function Ac(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ac(e, t, n), e = e.sibling; e !== null; ) Ac(e, t, n), (e = e.sibling);
}
var Oe = null,
  jt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) Um(e, t, n), (n = n.sibling);
}
function Um(e, t, n) {
  if (Qt && typeof Qt.onCommitFiberUnmount == "function")
    try {
      Qt.onCommitFiberUnmount(vl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || Qr(n, t);
    case 6:
      var r = Oe,
        o = jt;
      (Oe = null),
        gn(e, t, n),
        (Oe = r),
        (jt = o),
        Oe !== null &&
          (jt
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null &&
        (jt
          ? ((e = Oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Sa(e.parentNode, n)
              : e.nodeType === 1 && Sa(e, n),
            hi(e))
          : Sa(Oe, n.stateNode));
      break;
    case 4:
      (r = Oe),
        (o = jt),
        (Oe = n.stateNode.containerInfo),
        (jt = !0),
        gn(e, t, n),
        (Oe = r),
        (jt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Rc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      gn(e, t, n);
      break;
    case 1:
      if (
        !Be &&
        (Qr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ee(n, t, l);
        }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), gn(e, t, n), (Be = r))
        : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function Af(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tw()),
      t.forEach(function (r) {
        var o = zw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Oe = l.stateNode), (jt = !1);
              break e;
            case 3:
              (Oe = l.stateNode.containerInfo), (jt = !0);
              break e;
            case 4:
              (Oe = l.stateNode.containerInfo), (jt = !0);
              break e;
          }
          l = l.return;
        }
        if (Oe === null) throw Error(R(160));
        Um(i, s, o), (Oe = null), (jt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ee(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wm(t, e), (t = t.sibling);
}
function Wm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), Ft(e), r & 4)) {
        try {
          ii(3, e, e.return), bl(3, e);
        } catch (v) {
          Ee(e, e.return, v);
        }
        try {
          ii(5, e, e.return);
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      break;
    case 1:
      St(t, e), Ft(e), r & 512 && n !== null && Qr(n, n.return);
      break;
    case 5:
      if (
        (St(t, e),
        Ft(e),
        r & 512 && n !== null && Qr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ui(o, "");
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && dh(o, i),
              rc(l, s);
            var u = rc(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                p = a[s + 1];
              d === "style"
                ? vh(o, p)
                : d === "dangerouslySetInnerHTML"
                ? hh(o, p)
                : d === "children"
                ? ui(o, p)
                : fu(o, d, p, u);
            }
            switch (l) {
              case "input":
                Za(o, i);
                break;
              case "textarea":
                fh(o, i);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Gr(o, !!i.multiple, m, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Gr(o, !!i.multiple, i.defaultValue, !0)
                      : Gr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[xi] = i;
          } catch (v) {
            Ee(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((St(t, e), Ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (St(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hi(t.containerInfo);
        } catch (v) {
          Ee(e, e.return, v);
        }
      break;
    case 4:
      St(t, e), Ft(e);
      break;
    case 13:
      St(t, e),
        Ft(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Hu = be())),
        r & 4 && Af(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (u = Be) || d), St(t, e), (Be = u)) : St(t, e),
        Ft(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (p = F = d; F !== null; ) {
              switch (((g = F), (m = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ii(4, g, g.return);
                  break;
                case 1:
                  Qr(g, g.return);
                  var S = g.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      Ee(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Qr(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    If(p);
                    continue;
                  }
              }
              m !== null ? ((m.return = g), (F = m)) : If(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = mh("display", s)));
              } catch (v) {
                Ee(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (v) {
                Ee(e, e.return, v);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      St(t, e), Ft(e), r & 4 && Af(e);
      break;
    case 21:
      break;
    default:
      St(t, e), Ft(e);
  }
}
function Ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ui(o, ""), (r.flags &= -33));
          var i = _f(e);
          Ac(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = _f(e);
          _c(e, l, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      Ee(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ow(e, t, n) {
  (F = e), Vm(e);
}
function Vm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ls;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Be;
        l = ls;
        var u = Be;
        if (((ls = s), (Be = a) && !u))
          for (F = o; F !== null; )
            (s = F),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Df(o)
                : a !== null
                ? ((a.return = s), (F = a))
                : Df(o);
        for (; i !== null; ) (F = i), Vm(i), (i = i.sibling);
        (F = o), (ls = l), (Be = u);
      }
      Mf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : Mf(e);
  }
}
function Mf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && yf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && hi(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Be || (t.flags & 512 && Oc(t));
      } catch (g) {
        Ee(t, t.return, g);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function If(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Df(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bl(4, t);
          } catch (a) {
            Ee(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ee(t, o, a);
            }
          }
          var i = t.return;
          try {
            Oc(t);
          } catch (a) {
            Ee(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Oc(t);
          } catch (a) {
            Ee(t, s, a);
          }
      }
    } catch (a) {
      Ee(t, t.return, a);
    }
    if (t === e) {
      F = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (F = l);
      break;
    }
    F = t.return;
  }
}
var _w = Math.ceil,
  tl = fn.ReactCurrentDispatcher,
  Wu = fn.ReactCurrentOwner,
  mt = fn.ReactCurrentBatchConfig,
  te = 0,
  Re = null,
  Ne = null,
  _e = 0,
  tt = 0,
  Kr = Kn(0),
  Pe = 0,
  Ni = null,
  xr = 0,
  Nl = 0,
  Vu = 0,
  si = null,
  qe = null,
  Hu = 0,
  xo = 1 / 0,
  Jt = null,
  nl = !1,
  Mc = null,
  zn = null,
  as = !1,
  _n = null,
  rl = 0,
  li = 0,
  Ic = null,
  js = -1,
  Ts = 0;
function Qe() {
  return te & 6 ? be() : js !== -1 ? js : (js = be());
}
function $n(e) {
  return e.mode & 1
    ? te & 2 && _e !== 0
      ? _e & -_e
      : mw.transition !== null
      ? (Ts === 0 && (Ts = jh()), Ts)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ih(e.type))),
        e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < li) throw ((li = 0), (Ic = null), Error(R(185)));
  Ii(e, n, r),
    (!(te & 2) || e !== Re) &&
      (e === Re && (!(te & 2) && (Nl |= n), Pe === 4 && Nn(e, _e)),
      et(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((xo = be() + 500), Sl && Gn()));
}
function et(e, t) {
  var n = e.callbackNode;
  mx(e, t);
  var r = $s(e, e === Re ? _e : 0);
  if (r === 0)
    n !== null && Vd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vd(n), t === 1))
      e.tag === 0 ? hw(Lf.bind(null, e)) : em(Lf.bind(null, e)),
        uw(function () {
          !(te & 6) && Gn();
        }),
        (n = null);
    else {
      switch (Th(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = kh;
          break;
        case 16:
          n = zs;
          break;
        case 536870912:
          n = Ph;
          break;
        default:
          n = zs;
      }
      n = Zm(n, Hm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hm(e, t) {
  if (((js = -1), (Ts = 0), te & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Jr() && e.callbackNode !== n) return null;
  var r = $s(e, e === Re ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = Km();
    (Re !== e || _e !== t) && ((Jt = null), (xo = be() + 500), pr(e, t));
    do
      try {
        Iw();
        break;
      } catch (l) {
        Qm(e, l);
      }
    while (!0);
    Ru(),
      (tl.current = i),
      (te = o),
      Ne !== null ? (t = 0) : ((Re = null), (_e = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ac(e)), o !== 0 && ((r = o), (t = Dc(e, o)))), t === 1)
    )
      throw ((n = Ni), pr(e, 0), Nn(e, r), et(e, be()), n);
    if (t === 6) Nn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Aw(o) &&
          ((t = ol(e, r)),
          t === 2 && ((i = ac(e)), i !== 0 && ((r = i), (t = Dc(e, i)))),
          t === 1))
      )
        throw ((n = Ni), pr(e, 0), Nn(e, r), et(e, be()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          nr(e, qe, Jt);
          break;
        case 3:
          if (
            (Nn(e, r), (r & 130023424) === r && ((t = Hu + 500 - be()), 10 < t))
          ) {
            if ($s(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = vc(nr.bind(null, e, qe, Jt), t);
            break;
          }
          nr(e, qe, Jt);
          break;
        case 4:
          if ((Nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Rt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = be() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * _w(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vc(nr.bind(null, e, qe, Jt), r);
            break;
          }
          nr(e, qe, Jt);
          break;
        case 5:
          nr(e, qe, Jt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return et(e, be()), e.callbackNode === n ? Hm.bind(null, e) : null;
}
function Dc(e, t) {
  var n = si;
  return (
    e.current.memoizedState.isDehydrated && (pr(e, t).flags |= 256),
    (e = ol(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && Lc(t)),
    e
  );
}
function Lc(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function Aw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!At(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Nn(e, t) {
  for (
    t &= ~Vu,
      t &= ~Nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Lf(e) {
  if (te & 6) throw Error(R(327));
  Jr();
  var t = $s(e, 0);
  if (!(t & 1)) return et(e, be()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ac(e);
    r !== 0 && ((t = r), (n = Dc(e, r)));
  }
  if (n === 1) throw ((n = Ni), pr(e, 0), Nn(e, t), et(e, be()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nr(e, qe, Jt),
    et(e, be()),
    null
  );
}
function Qu(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((xo = be() + 500), Sl && Gn());
  }
}
function wr(e) {
  _n !== null && _n.tag === 0 && !(te & 6) && Jr();
  var t = te;
  te |= 1;
  var n = mt.transition,
    r = se;
  try {
    if (((mt.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (mt.transition = n), (te = t), !(te & 6) && Gn();
  }
}
function Ku() {
  (tt = Kr.current), pe(Kr);
}
function pr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cw(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((Pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hs();
          break;
        case 3:
          go(), pe(Ze), pe(Ue), Du();
          break;
        case 5:
          Iu(r);
          break;
        case 4:
          go();
          break;
        case 13:
          pe(ge);
          break;
        case 19:
          pe(ge);
          break;
        case 10:
          Ou(r.type._context);
          break;
        case 22:
        case 23:
          Ku();
      }
      n = n.return;
    }
  if (
    ((Re = e),
    (Ne = e = Bn(e.current, null)),
    (_e = tt = t),
    (Pe = 0),
    (Ni = null),
    (Vu = Nl = xr = 0),
    (qe = si = null),
    ir !== null)
  ) {
    for (t = 0; t < ir.length; t++)
      if (((n = ir[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    ir = null;
  }
  return e;
}
function Qm(e, t) {
  do {
    var n = Ne;
    try {
      if ((Ru(), (Ns.current = el), Js)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Js = !1;
      }
      if (
        ((yr = 0),
        (Te = ke = ye = null),
        (oi = !1),
        (Ci = 0),
        (Wu.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (Ni = t), (Ne = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = _e),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = bf(s);
          if (m !== null) {
            (m.flags &= -257),
              Nf(m, s, l, i, t),
              m.mode & 1 && Ef(i, u, t),
              (t = m),
              (a = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ef(i, u, t), Gu();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ve && l.mode & 1) {
          var w = bf(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Nf(w, s, l, i, t),
              ju(yo(a, l));
            break e;
          }
        }
        (i = a = yo(a, l)),
          Pe !== 4 && (Pe = 2),
          si === null ? (si = [i]) : si.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = Tm(i, a, t);
              gf(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (zn === null || !zn.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = Rm(i, l, t);
                gf(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ym(n);
    } catch (E) {
      (t = E), Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Km() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function Gu() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Re === null || (!(xr & 268435455) && !(Nl & 268435455)) || Nn(Re, _e);
}
function ol(e, t) {
  var n = te;
  te |= 2;
  var r = Km();
  (Re !== e || _e !== t) && ((Jt = null), pr(e, t));
  do
    try {
      Mw();
      break;
    } catch (o) {
      Qm(e, o);
    }
  while (!0);
  if ((Ru(), (te = n), (tl.current = r), Ne !== null)) throw Error(R(261));
  return (Re = null), (_e = 0), Pe;
}
function Mw() {
  for (; Ne !== null; ) Gm(Ne);
}
function Iw() {
  for (; Ne !== null && !sx(); ) Gm(Ne);
}
function Gm(e) {
  var t = Xm(e.alternate, e, tt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ym(e) : (Ne = t),
    (Wu.current = null);
}
function Ym(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = jw(n, t)), n !== null)) {
        (n.flags &= 32767), (Ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (Ne = null);
        return;
      }
    } else if (((n = Pw(n, t, tt)), n !== null)) {
      Ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function nr(e, t, n) {
  var r = se,
    o = mt.transition;
  try {
    (mt.transition = null), (se = 1), Dw(e, t, n, r);
  } finally {
    (mt.transition = o), (se = r);
  }
  return null;
}
function Dw(e, t, n, r) {
  do Jr();
  while (_n !== null);
  if (te & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (vx(e, i),
    e === Re && ((Ne = Re = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      as ||
      ((as = !0),
      Zm(zs, function () {
        return Jr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = mt.transition), (mt.transition = null);
    var s = se;
    se = 1;
    var l = te;
    (te |= 4),
      (Wu.current = null),
      Rw(e, n),
      Wm(n, e),
      nw(hc),
      (Bs = !!pc),
      (hc = pc = null),
      (e.current = n),
      Ow(n),
      lx(),
      (te = l),
      (se = s),
      (mt.transition = i);
  } else e.current = n;
  if (
    (as && ((as = !1), (_n = e), (rl = o)),
    (i = e.pendingLanes),
    i === 0 && (zn = null),
    ux(n.stateNode),
    et(e, be()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (nl) throw ((nl = !1), (e = Mc), (Mc = null), e);
  return (
    rl & 1 && e.tag !== 0 && Jr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ic ? li++ : ((li = 0), (Ic = e))) : (li = 0),
    Gn(),
    null
  );
}
function Jr() {
  if (_n !== null) {
    var e = Th(rl),
      t = mt.transition,
      n = se;
    try {
      if (((mt.transition = null), (se = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (rl = 0), te & 6)) throw Error(R(331));
        var o = te;
        for (te |= 4, F = e.current; F !== null; ) {
          var i = F,
            s = i.child;
          if (F.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (F = u; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (F = p);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var g = d.sibling,
                        m = d.return;
                      if (($m(d), d === u)) {
                        F = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = m), (F = g);
                        break;
                      }
                      F = m;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (F = s);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ii(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (F = y);
                break e;
              }
              F = i.return;
            }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          s = F;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (F = x);
          else
            e: for (s = h; F !== null; ) {
              if (((l = F), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bl(9, l);
                  }
                } catch (E) {
                  Ee(l, l.return, E);
                }
              if (l === s) {
                F = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (F = C);
                break e;
              }
              F = l.return;
            }
        }
        if (
          ((te = o), Gn(), Qt && typeof Qt.onPostCommitFiberRoot == "function")
        )
          try {
            Qt.onPostCommitFiberRoot(vl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (mt.transition = t);
    }
  }
  return !1;
}
function Ff(e, t, n) {
  (t = yo(n, t)),
    (t = Tm(e, t, 1)),
    (e = Fn(e, t, 1)),
    (t = Qe()),
    e !== null && (Ii(e, 1, t), et(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Ff(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ff(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zn === null || !zn.has(r)))
        ) {
          (e = yo(n, e)),
            (e = Rm(t, e, 1)),
            (t = Fn(t, e, 1)),
            (e = Qe()),
            t !== null && (Ii(t, 1, e), et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Re === e &&
      (_e & n) === n &&
      (Pe === 4 || (Pe === 3 && (_e & 130023424) === _e && 500 > be() - Hu)
        ? pr(e, 0)
        : (Vu |= n)),
    et(e, t);
}
function qm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Zi), (Zi <<= 1), !(Zi & 130023424) && (Zi = 4194304))
      : (t = 1));
  var n = Qe();
  (e = an(e, t)), e !== null && (Ii(e, t, n), et(e, n));
}
function Fw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qm(e, n);
}
function zw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), qm(e, n);
}
var Xm;
Xm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), kw(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), ve && t.flags & 1048576 && tm(t, Gs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ps(e, t), (e = t.pendingProps);
      var o = ho(t, Ue.current);
      Zr(t, n), (o = Fu(null, t, r, e, o, n));
      var i = zu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(r) ? ((i = !0), Qs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Au(t),
            (o.updater = El),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ec(t, r, e, n),
            (t = kc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ve && i && ku(t), Ve(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ps(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Bw(r)),
          (e = bt(r, e)),
          o)
        ) {
          case 0:
            t = Nc(null, t, r, e, n);
            break e;
          case 1:
            t = jf(null, t, r, e, n);
            break e;
          case 11:
            t = kf(null, t, r, e, n);
            break e;
          case 14:
            t = Pf(null, t, r, bt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        Nc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        jf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Mm(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          lm(e, t),
          Xs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = yo(Error(R(423)), t)), (t = Tf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = yo(Error(R(424)), t)), (t = Tf(e, t, r, n, o));
            break e;
          } else
            for (
              rt = Ln(t.stateNode.containerInfo.firstChild),
                ot = t,
                ve = !0,
                Tt = null,
                n = im(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mo(), r === o)) {
            t = cn(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        am(t),
        e === null && wc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        mc(r, o) ? (s = null) : i !== null && mc(r, i) && (t.flags |= 32),
        Am(e, t),
        Ve(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && wc(t), null;
    case 13:
      return Im(e, t, n);
    case 4:
      return (
        Mu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vo(t, null, r, n)) : Ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        kf(e, t, r, o, n)
      );
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ce(Ys, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (At(i.value, s)) {
            if (i.children === o.children && !Ze.current) {
              t = cn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = on(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Sc(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Sc(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ve(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zr(t, n),
        (o = vt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = bt(r, t.pendingProps)),
        (o = bt(r.type, o)),
        Pf(e, t, r, o, n)
      );
    case 15:
      return Om(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        Ps(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), Qs(t)) : (e = !1),
        Zr(t, n),
        jm(t, r, o),
        Ec(t, r, o, n),
        kc(null, t, r, !0, e, n)
      );
    case 19:
      return Dm(e, t, n);
    case 22:
      return _m(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Zm(e, t) {
  return Nh(e, t);
}
function $w(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ht(e, t, n, r) {
  return new $w(e, t, n, r);
}
function Yu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bw(e) {
  if (typeof e == "function") return Yu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hu)) return 11;
    if (e === mu) return 14;
  }
  return 2;
}
function Bn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ht(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Rs(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Yu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Lr:
        return hr(n.children, o, i, t);
      case pu:
        (s = 8), (o |= 8);
        break;
      case Ka:
        return (
          (e = ht(12, n, t, o | 2)), (e.elementType = Ka), (e.lanes = i), e
        );
      case Ga:
        return (e = ht(13, n, t, o)), (e.elementType = Ga), (e.lanes = i), e;
      case Ya:
        return (e = ht(19, n, t, o)), (e.elementType = Ya), (e.lanes = i), e;
      case ah:
        return kl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sh:
              s = 10;
              break e;
            case lh:
              s = 9;
              break e;
            case hu:
              s = 11;
              break e;
            case mu:
              s = 14;
              break e;
            case Cn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ht(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function hr(e, t, n, r) {
  return (e = ht(7, e, r, t)), (e.lanes = n), e;
}
function kl(e, t, n, r) {
  return (
    (e = ht(22, e, r, t)),
    (e.elementType = ah),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ta(e, t, n) {
  return (e = ht(6, e, null, t)), (e.lanes = n), e;
}
function Ra(e, t, n) {
  return (
    (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ua(0)),
    (this.expirationTimes = ua(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ua(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function qu(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Uw(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ht(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Au(i),
    e
  );
}
function Ww(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jm(e) {
  if (!e) return Wn;
  e = e._reactInternals;
  e: {
    if (kr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Jh(e, n, t);
  }
  return t;
}
function ev(e, t, n, r, o, i, s, l, a) {
  return (
    (e = qu(n, r, !0, e, o, i, s, l, a)),
    (e.context = Jm(null)),
    (n = e.current),
    (r = Qe()),
    (o = $n(n)),
    (i = on(r, o)),
    (i.callback = t ?? null),
    Fn(n, i, o),
    (e.current.lanes = o),
    Ii(e, o, r),
    et(e, r),
    e
  );
}
function Pl(e, t, n, r) {
  var o = t.current,
    i = Qe(),
    s = $n(o);
  return (
    (n = Jm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = on(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Fn(o, t, s)),
    e !== null && (Ot(e, o, s, i), bs(e, o, s)),
    s
  );
}
function il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  zf(e, t), (e = e.alternate) && zf(e, t);
}
function Vw() {
  return null;
}
var tv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zu(e) {
  this._internalRoot = e;
}
jl.prototype.render = Zu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Pl(e, t, null, null);
};
jl.prototype.unmount = Zu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wr(function () {
      Pl(null, e, null, null);
    }),
      (t[ln] = null);
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _h();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++);
    bn.splice(n, 0, e), n === 0 && Mh(e);
  }
};
function Ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $f() {}
function Hw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = il(s);
        i.call(u);
      };
    }
    var s = ev(t, r, e, 0, null, !1, !1, "", $f);
    return (
      (e._reactRootContainer = s),
      (e[ln] = s.current),
      gi(e.nodeType === 8 ? e.parentNode : e),
      wr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = il(a);
      l.call(u);
    };
  }
  var a = qu(e, 0, !1, null, null, !1, !1, "", $f);
  return (
    (e._reactRootContainer = a),
    (e[ln] = a.current),
    gi(e.nodeType === 8 ? e.parentNode : e),
    wr(function () {
      Pl(t, a, n, r);
    }),
    a
  );
}
function Rl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = il(s);
        l.call(a);
      };
    }
    Pl(t, s, e, o);
  } else s = Hw(n, t, e, o, r);
  return il(s);
}
Rh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yo(t.pendingLanes);
        n !== 0 &&
          (yu(t, n | 1), et(t, be()), !(te & 6) && ((xo = be() + 500), Gn()));
      }
      break;
    case 13:
      wr(function () {
        var r = an(e, 1);
        if (r !== null) {
          var o = Qe();
          Ot(r, e, 1, o);
        }
      }),
        Xu(e, 1);
  }
};
xu = function (e) {
  if (e.tag === 13) {
    var t = an(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Ot(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
Oh = function (e) {
  if (e.tag === 13) {
    var t = $n(e),
      n = an(e, t);
    if (n !== null) {
      var r = Qe();
      Ot(n, e, t, r);
    }
    Xu(e, t);
  }
};
_h = function () {
  return se;
};
Ah = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
ic = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Za(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = wl(r);
            if (!o) throw Error(R(90));
            uh(r), Za(r, o);
          }
        }
      }
      break;
    case "textarea":
      fh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gr(e, !!n.multiple, t, !1);
  }
};
xh = Qu;
wh = wr;
var Qw = { usingClientEntryPoint: !1, Events: [Li, Br, wl, gh, yh, Qu] },
  Vo = {
    findFiberByHostInstance: or,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Kw = {
    bundleType: Vo.bundleType,
    version: Vo.version,
    rendererPackageName: Vo.rendererPackageName,
    rendererConfig: Vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Eh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vo.findFiberByHostInstance || Vw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cs.isDisabled && cs.supportsFiber)
    try {
      (vl = cs.inject(Kw)), (Qt = cs);
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qw;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(R(200));
  return Ww(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!Ju(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = tv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = qu(e, 1, !1, null, null, n, !1, r, o)),
    (e[ln] = t.current),
    gi(e.nodeType === 8 ? e.parentNode : e),
    new Zu(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Eh(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
  return wr(e);
};
lt.hydrate = function (e, t, n) {
  if (!Tl(t)) throw Error(R(200));
  return Rl(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!Ju(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = tv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = ev(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[ln] = t.current),
    gi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new jl(t);
};
lt.render = function (e, t, n) {
  if (!Tl(t)) throw Error(R(200));
  return Rl(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!Tl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (wr(function () {
        Rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ln] = null);
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = Qu;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Tl(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Rl(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function nv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv);
    } catch (e) {
      console.error(e);
    }
}
nv(), (nh.exports = lt);
var Pr = nh.exports;
const rv = Vp(Pr);
var ov,
  Bf = Pr;
(ov = Bf.createRoot), Bf.hydrateRoot;
const Gw = 1,
  Yw = 1e6;
let Oa = 0;
function qw() {
  return (Oa = (Oa + 1) % Number.MAX_SAFE_INTEGER), Oa.toString();
}
const _a = new Map(),
  Uf = (e) => {
    if (_a.has(e)) return;
    const t = setTimeout(() => {
      _a.delete(e), ai({ type: "REMOVE_TOAST", toastId: e });
    }, Yw);
    _a.set(e, t);
  },
  Xw = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Gw) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Uf(n)
            : e.toasts.forEach((r) => {
                Uf(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Os = [];
let _s = { toasts: [] };
function ai(e) {
  (_s = Xw(_s, e)),
    Os.forEach((t) => {
      t(_s);
    });
}
function Zw({ ...e }) {
  const t = qw(),
    n = (o) => ai({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => ai({ type: "DISMISS_TOAST", toastId: t });
  return (
    ai({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Jw() {
  const [e, t] = f.useState(_s);
  return (
    f.useEffect(
      () => (
        Os.push(t),
        () => {
          const n = Os.indexOf(t);
          n > -1 && Os.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: Zw,
      dismiss: (n) => ai({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Wf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function iv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Wf(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Wf(e[o], null);
        }
      };
  };
}
function he(...e) {
  return f.useCallback(iv(...e), e);
}
function e1(e, t) {
  const n = f.createContext(t),
    r = (i) => {
      const { children: s, ...l } = i,
        a = f.useMemo(() => l, Object.values(l));
      return c.jsx(n.Provider, { value: a, children: s });
    };
  r.displayName = e + "Provider";
  function o(i) {
    const s = f.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function ko(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = f.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (p) => {
      var y;
      const { scope: g, children: m, ...S } = p,
        v = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[a]) || l,
        w = f.useMemo(() => S, Object.values(S));
      return c.jsx(v.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function d(p, g) {
      var v;
      const m = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[a]) || l,
        S = f.useContext(m);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => f.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return f.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, t1(o, ...t)];
}
function t1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(i)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function wo(e) {
  const t = r1(e),
    n = f.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = f.Children.toArray(i),
        a = l.find(i1);
      if (a) {
        const u = a.props.children,
          d = l.map((p) =>
            p === a
              ? f.Children.count(u) > 1
                ? f.Children.only(null)
                : f.isValidElement(u)
                ? u.props.children
                : null
              : p
          );
        return c.jsx(t, {
          ...s,
          ref: o,
          children: f.isValidElement(u) ? f.cloneElement(u, void 0, d) : null,
        });
      }
      return c.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var n1 = wo("Slot");
function r1(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = l1(o),
        l = s1(i, o.props);
      return (
        o.type !== f.Fragment && (l.ref = r ? iv(r, s) : s),
        f.cloneElement(o, l)
      );
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var sv = Symbol("radix.slottable");
function o1(e) {
  const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = sv), t;
}
function i1(e) {
  return (
    f.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === sv
  );
}
function s1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            const a = i(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function l1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function lv(e) {
  const t = e + "CollectionProvider",
    [n, r] = ko(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: w, children: y } = v,
        h = A.useRef(null),
        x = A.useRef(new Map()).current;
      return c.jsx(o, { scope: w, itemMap: x, collectionRef: h, children: y });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = wo(l),
    u = A.forwardRef((v, w) => {
      const { scope: y, children: h } = v,
        x = i(l, y),
        C = he(w, x.collectionRef);
      return c.jsx(a, { ref: C, children: h });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    g = wo(d),
    m = A.forwardRef((v, w) => {
      const { scope: y, children: h, ...x } = v,
        C = A.useRef(null),
        E = he(w, C),
        N = i(d, y);
      return (
        A.useEffect(
          () => (
            N.itemMap.set(C, { ref: C, ...x }), () => void N.itemMap.delete(C)
          )
        ),
        c.jsx(g, { [p]: "", ref: E, children: h })
      );
    });
  m.displayName = d;
  function S(v) {
    const w = i(e + "CollectionConsumer", v);
    return A.useCallback(() => {
      const h = w.collectionRef.current;
      if (!h) return [];
      const x = Array.from(h.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (N, b) => x.indexOf(N.ref.current) - x.indexOf(b.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: m }, S, r];
}
var a1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ee = a1.reduce((e, t) => {
    const n = wo(`Primitive.${t}`),
      r = f.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function av(e, t) {
  e && Pr.flushSync(() => e.dispatchEvent(t));
}
function Mt(e) {
  const t = f.useRef(e);
  return (
    f.useEffect(() => {
      t.current = e;
    }),
    f.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function c1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var u1 = "DismissableLayer",
  Fc = "dismissableLayer.update",
  d1 = "dismissableLayer.pointerDownOutside",
  f1 = "dismissableLayer.focusOutside",
  Vf,
  cv = f.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  zi = f.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = f.useContext(cv),
      [d, p] = f.useState(null),
      g =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = f.useState({}),
      S = he(t, (b) => p(b)),
      v = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = v.indexOf(w),
      h = d ? v.indexOf(d) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = h >= y,
      E = h1((b) => {
        const T = b.target,
          O = [...u.branches].some((_) => _.contains(T));
        !C ||
          O ||
          (o == null || o(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, g),
      N = m1((b) => {
        const T = b.target;
        [...u.branches].some((_) => _.contains(T)) ||
          (i == null || i(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, g);
    return (
      c1((b) => {
        h === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && l && (b.preventDefault(), l()));
      }, g),
      f.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Vf = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Hf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = Vf);
            }
          );
      }, [d, g, n, u]),
      f.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Hf());
        },
        [d, u]
      ),
      f.useEffect(() => {
        const b = () => m({});
        return (
          document.addEventListener(Fc, b),
          () => document.removeEventListener(Fc, b)
        );
      }, []),
      c.jsx(ee.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: x ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: X(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: X(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
zi.displayName = u1;
var p1 = "DismissableLayerBranch",
  uv = f.forwardRef((e, t) => {
    const n = f.useContext(cv),
      r = f.useRef(null),
      o = he(t, r);
    return (
      f.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      c.jsx(ee.div, { ...e, ref: o })
    );
  });
uv.displayName = p1;
function h1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e),
    r = f.useRef(!1),
    o = f.useRef(() => {});
  return (
    f.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              dv(d1, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function m1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e),
    r = f.useRef(!1);
  return (
    f.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          dv(f1, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Hf() {
  const e = new CustomEvent(Fc);
  document.dispatchEvent(e);
}
function dv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? av(o, i) : o.dispatchEvent(i);
}
var v1 = zi,
  g1 = uv,
  Me = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {},
  y1 = "Portal",
  Ol = f.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = f.useState(!1);
    Me(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? rv.createPortal(c.jsx(ee.div, { ...r, ref: t }), s) : null;
  });
Ol.displayName = y1;
function x1(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var Po = (e) => {
  const { present: t, children: n } = e,
    r = w1(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n),
    i = he(r.ref, S1(o));
  return typeof n == "function" || r.isPresent
    ? f.cloneElement(o, { ref: i })
    : null;
};
Po.displayName = "Presence";
function w1(e) {
  const [t, n] = f.useState(),
    r = f.useRef(null),
    o = f.useRef(e),
    i = f.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = x1(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    f.useEffect(() => {
      const u = us(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    Me(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const g = i.current,
          m = us(u);
        e
          ? a("MOUNT")
          : m === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(d && g !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Me(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          p = (m) => {
            const v = us(r.current).includes(m.animationName);
            if (m.target === t && v && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          g = (m) => {
            m.target === t && (i.current = us(r.current));
          };
        return (
          t.addEventListener("animationstart", g),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", g),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: f.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function us(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function S1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var C1 = cu[" useInsertionEffect ".trim().toString()] || Me;
function sl({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = E1({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const d = f.useRef(e !== void 0);
    f.useEffect(() => {
      const p = d.current;
      p !== l &&
        console.warn(
          `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (d.current = l);
    }, [l, r]);
  }
  const u = f.useCallback(
    (d) => {
      var p;
      if (l) {
        const g = b1(d) ? d(e) : d;
        g !== e && ((p = s.current) == null || p.call(s, g));
      } else i(d);
    },
    [l, e, i, s]
  );
  return [a, u];
}
function E1({ defaultProp: e, onChange: t }) {
  const [n, r] = f.useState(e),
    o = f.useRef(n),
    i = f.useRef(t);
  return (
    C1(() => {
      i.current = t;
    }, [t]),
    f.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function b1(e) {
  return typeof e == "function";
}
var fv = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  N1 = "VisuallyHidden",
  _l = f.forwardRef((e, t) =>
    c.jsx(ee.span, { ...e, ref: t, style: { ...fv, ...e.style } })
  );
_l.displayName = N1;
var k1 = _l,
  ed = "ToastProvider",
  [td, P1, j1] = lv("Toast"),
  [pv, z2] = ko("Toast", [j1]),
  [T1, Al] = pv(ed),
  hv = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = f.useState(null),
      [u, d] = f.useState(0),
      p = f.useRef(!1),
      g = f.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${ed}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(td.Provider, {
        scope: t,
        children: c.jsx(T1, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: f.useCallback(() => d((m) => m + 1), []),
          onToastRemove: f.useCallback(() => d((m) => m - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: g,
          children: s,
        }),
      })
    );
  };
hv.displayName = ed;
var mv = "ToastViewport",
  R1 = ["F8"],
  zc = "toast.viewportPause",
  $c = "toast.viewportResume",
  vv = f.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = R1,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Al(mv, n),
      l = P1(n),
      a = f.useRef(null),
      u = f.useRef(null),
      d = f.useRef(null),
      p = f.useRef(null),
      g = he(t, p, s.onViewportChange),
      m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = s.toastCount > 0;
    f.useEffect(() => {
      const w = (y) => {
        var x;
        r.length !== 0 &&
          r.every((C) => y[C] || y.code === C) &&
          ((x = p.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      f.useEffect(() => {
        const w = a.current,
          y = p.current;
        if (S && w && y) {
          const h = () => {
              if (!s.isClosePausedRef.current) {
                const N = new CustomEvent(zc);
                y.dispatchEvent(N), (s.isClosePausedRef.current = !0);
              }
            },
            x = () => {
              if (s.isClosePausedRef.current) {
                const N = new CustomEvent($c);
                y.dispatchEvent(N), (s.isClosePausedRef.current = !1);
              }
            },
            C = (N) => {
              !w.contains(N.relatedTarget) && x();
            },
            E = () => {
              w.contains(document.activeElement) || x();
            };
          return (
            w.addEventListener("focusin", h),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
              w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x);
            }
          );
        }
      }, [S, s.isClosePausedRef]);
    const v = f.useCallback(
      ({ tabbingDirection: w }) => {
        const h = l().map((x) => {
          const C = x.ref.current,
            E = [C, ...W1(C)];
          return w === "forwards" ? E : E.reverse();
        });
        return (w === "forwards" ? h.reverse() : h).flat();
      },
      [l]
    );
    return (
      f.useEffect(() => {
        const w = p.current;
        if (w) {
          const y = (h) => {
            var E, N, b;
            const x = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !x) {
              const T = document.activeElement,
                O = h.shiftKey;
              if (h.target === w && O) {
                (E = u.current) == null || E.focus();
                return;
              }
              const I = v({ tabbingDirection: O ? "backwards" : "forwards" }),
                W = I.findIndex((M) => M === T);
              Aa(I.slice(W + 1))
                ? h.preventDefault()
                : O
                ? (N = u.current) == null || N.focus()
                : (b = d.current) == null || b.focus();
            }
          };
          return (
            w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
          );
        }
      }, [l, v]),
      c.jsxs(g1, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            c.jsx(Bc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "forwards" });
                Aa(w);
              },
            }),
          c.jsx(td.Slot, {
            scope: n,
            children: c.jsx(ee.ol, { tabIndex: -1, ...i, ref: g }),
          }),
          S &&
            c.jsx(Bc, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "backwards" });
                Aa(w);
              },
            }),
        ],
      })
    );
  });
vv.displayName = mv;
var gv = "ToastFocusProxy",
  Bc = f.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Al(gv, n);
    return c.jsx(_l, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Bc.displayName = gv;
var $i = "Toast",
  O1 = "toast.swipeStart",
  _1 = "toast.swipeMove",
  A1 = "toast.swipeCancel",
  M1 = "toast.swipeEnd",
  yv = f.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l, a] = sl({ prop: r, defaultProp: o ?? !0, onChange: i, caller: $i });
    return c.jsx(Po, {
      present: n || l,
      children: c.jsx(L1, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: Mt(e.onPause),
        onResume: Mt(e.onResume),
        onSwipeStart: X(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: X(e.onSwipeMove, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`
            );
        }),
        onSwipeCancel: X(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: X(e.onSwipeEnd, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`
            ),
            a(!1);
        }),
      }),
    });
  });
yv.displayName = $i;
var [I1, D1] = pv($i, { onClose() {} }),
  L1 = f.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: g,
        onSwipeEnd: m,
        ...S
      } = e,
      v = Al($i, n),
      [w, y] = f.useState(null),
      h = he(t, (M) => y(M)),
      x = f.useRef(null),
      C = f.useRef(null),
      E = o || v.duration,
      N = f.useRef(0),
      b = f.useRef(E),
      T = f.useRef(0),
      { onToastAdd: O, onToastRemove: _ } = v,
      $ = Mt(() => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((H = v.viewport) == null || H.focus()),
          s();
      }),
      I = f.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(T.current),
            (N.current = new Date().getTime()),
            (T.current = window.setTimeout($, M)));
        },
        [$]
      );
    f.useEffect(() => {
      const M = v.viewport;
      if (M) {
        const H = () => {
            I(b.current), u == null || u();
          },
          z = () => {
            const U = new Date().getTime() - N.current;
            (b.current = b.current - U),
              window.clearTimeout(T.current),
              a == null || a();
          };
        return (
          M.addEventListener(zc, z),
          M.addEventListener($c, H),
          () => {
            M.removeEventListener(zc, z), M.removeEventListener($c, H);
          }
        );
      }
    }, [v.viewport, E, a, u, I]),
      f.useEffect(() => {
        i && !v.isClosePausedRef.current && I(E);
      }, [i, E, v.isClosePausedRef, I]),
      f.useEffect(() => (O(), () => _()), [O, _]);
    const W = f.useMemo(() => (w ? Nv(w) : null), [w]);
    return v.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            W &&
              c.jsx(F1, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: W,
              }),
            c.jsx(I1, {
              scope: n,
              onClose: $,
              children: Pr.createPortal(
                c.jsx(td.ItemSlot, {
                  scope: n,
                  children: c.jsx(v1, {
                    asChild: !0,
                    onEscapeKeyDown: X(l, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || $(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(ee.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...S,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: X(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            $()));
                      }),
                      onPointerDown: X(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (x.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: X(e.onPointerMove, (M) => {
                        if (!x.current) return;
                        const H = M.clientX - x.current.x,
                          z = M.clientY - x.current.y,
                          U = !!C.current,
                          k = ["left", "right"].includes(v.swipeDirection),
                          j = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          D = k ? j(0, H) : 0,
                          V = k ? 0 : j(0, z),
                          B = M.pointerType === "touch" ? 10 : 2,
                          Y = { x: D, y: V },
                          Q = { originalEvent: M, delta: Y };
                        U
                          ? ((C.current = Y), ds(_1, p, Q, { discrete: !1 }))
                          : Qf(Y, v.swipeDirection, B)
                          ? ((C.current = Y),
                            ds(O1, d, Q, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(H) > B || Math.abs(z) > B) &&
                            (x.current = null);
                      }),
                      onPointerUp: X(e.onPointerUp, (M) => {
                        const H = C.current,
                          z = M.target;
                        if (
                          (z.hasPointerCapture(M.pointerId) &&
                            z.releasePointerCapture(M.pointerId),
                          (C.current = null),
                          (x.current = null),
                          H)
                        ) {
                          const U = M.currentTarget,
                            k = { originalEvent: M, delta: H };
                          Qf(H, v.swipeDirection, v.swipeThreshold)
                            ? ds(M1, m, k, { discrete: !0 })
                            : ds(A1, g, k, { discrete: !0 }),
                            U.addEventListener(
                              "click",
                              (j) => j.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  F1 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Al($i, t),
      [i, s] = f.useState(!1),
      [l, a] = f.useState(!1);
    return (
      B1(() => s(!0)),
      f.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : c.jsx(Ol, {
            asChild: !0,
            children: c.jsx(_l, {
              ...r,
              children:
                i && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  z1 = "ToastTitle",
  xv = f.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(ee.div, { ...r, ref: t });
  });
xv.displayName = z1;
var $1 = "ToastDescription",
  wv = f.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(ee.div, { ...r, ref: t });
  });
wv.displayName = $1;
var Sv = "ToastAction",
  Cv = f.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(bv, {
          altText: n,
          asChild: !0,
          children: c.jsx(nd, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Sv}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Cv.displayName = Sv;
var Ev = "ToastClose",
  nd = f.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = D1(Ev, n);
    return c.jsx(bv, {
      asChild: !0,
      children: c.jsx(ee.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, o.onClose),
      }),
    });
  });
nd.displayName = Ev;
var bv = f.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return c.jsx(ee.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Nv(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        U1(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Nv(r));
      }
    }),
    t
  );
}
function ds(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? av(o, i) : o.dispatchEvent(i);
}
var Qf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function B1(e = () => {}) {
  const t = Mt(e);
  Me(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function U1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function W1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Aa(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var V1 = hv,
  kv = vv,
  Pv = yv,
  jv = xv,
  Tv = wv,
  Rv = Cv,
  Ov = nd;
function _v(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = _v(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Av() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = _v(e)) && (r && (r += " "), (r += t));
  return r;
}
const Kf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Gf = Av,
  Ml = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Gf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          p = i == null ? void 0 : i[u];
        if (d === null) return null;
        const g = Kf(d) || Kf(p);
        return o[u][g];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [p, g] = d;
          return g === void 0 || (u[p] = g), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: p, className: g, ...m } = d;
              return Object.entries(m).every((S) => {
                let [v, w] = S;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[v])
                  : { ...i, ...l }[v] === w;
              })
                ? [...u, p, g]
                : u;
            }, []);
    return Gf(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Mv = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Q1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = f.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    f.createElement(
      "svg",
      {
        ref: a,
        ...Q1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Mv("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, d]) => f.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ie = (e, t) => {
  const n = f.forwardRef(({ className: r, ...o }, i) =>
    f.createElement(K1, {
      ref: i,
      iconNode: t,
      className: Mv(`lucide-${H1(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = Ie("AirVent", [
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2",
    },
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  [
    "path",
    {
      d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",
      key: "1bo8pg",
    },
  ],
  ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5", key: "t9h90c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Il = Ie("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = Ie("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = Ie("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iv = Ie("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = Ie("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = Ie("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = Ie("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eS = Ie("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tS = Ie("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nS = Ie("Microwave", [
  [
    "rect",
    { width: "20", height: "15", x: "2", y: "4", rx: "2", key: "2no95f" },
  ],
  ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" }],
  ["path", { d: "M18 8v7", key: "o5zi4n" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 19v2", key: "1dawf0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bi = Ie("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rS = Ie("Refrigerator", [
  [
    "path",
    {
      d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
      key: "fpq118",
    },
  ],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M15 7v6", key: "1nx30x" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dv = Ie("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oS = Ie("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iS = Ie("WashingMachine", [
  ["path", { d: "M3 6h3", key: "155dbl" }],
  ["path", { d: "M17 6h.01", key: "e2y6kg" }],
  [
    "rect",
    { width: "18", height: "20", x: "3", y: "2", rx: "2", key: "od3kk9" },
  ],
  ["circle", { cx: "12", cy: "13", r: "5", key: "nlbqau" }],
  ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5", key: "17lach" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = Ie("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  od = "-",
  sS = (e) => {
    const t = aS(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(od);
        return l[0] === "" && l.length !== 1 && l.shift(), Lv(l, t) || lS(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  Lv = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Lv(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(od);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Yf = /^\[(.+)\]$/,
  lS = (e) => {
    if (Yf.test(e)) {
      const t = Yf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  aS = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      uS(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Uc(s, r, i, t);
      }),
      r
    );
  },
  Uc = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : qf(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (cS(o)) {
          Uc(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Uc(s, qf(t, i), n, r);
      });
    });
  },
  qf = (e, t) => {
    let n = e;
    return (
      t.split(od).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  cS = (e) => e.isThemeGetter,
  uS = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  dS = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Fv = "!",
  fS = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          d = 0,
          p;
        for (let w = 0; w < l.length; w++) {
          let y = l[w];
          if (u === 0) {
            if (y === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(d, w)), (d = w + i);
              continue;
            }
            if (y === "/") {
              p = w;
              continue;
            }
          }
          y === "[" ? u++ : y === "]" && u--;
        }
        const g = a.length === 0 ? l : l.substring(d),
          m = g.startsWith(Fv),
          S = m ? g.substring(1) : g,
          v = p && p > d ? p - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: m,
          baseClassName: S,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  pS = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  hS = (e) => ({ cache: dS(e.cacheSize), parseClassName: fS(e), ...sS(e) }),
  mS = /\s+/,
  vS = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(mS);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: g,
          maybePostfixModifierPosition: m,
        } = n(u);
      let S = !!m,
        v = r(S ? g.substring(0, m) : g);
      if (!v) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((v = r(g)), !v)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const w = pS(d).join(":"),
        y = p ? w + Fv : w,
        h = y + v;
      if (i.includes(h)) continue;
      i.push(h);
      const x = o(v, S);
      for (let C = 0; C < x.length; ++C) {
        const E = x[C];
        i.push(y + E);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function gS() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = zv(t)) && (r && (r += " "), (r += n));
  return r;
}
const zv = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = zv(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function yS(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((d, p) => p(d), e());
    return (n = hS(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = vS(a, n);
    return o(a, d), d;
  }
  return function () {
    return i(gS.apply(null, arguments));
  };
}
const de = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  $v = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  xS = /^\d+\/\d+$/,
  wS = new Set(["px", "full", "screen"]),
  SS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  CS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ES = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  bS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  NS =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Xt = (e) => eo(e) || wS.has(e) || xS.test(e),
  yn = (e) => jo(e, "length", AS),
  eo = (e) => !!e && !Number.isNaN(Number(e)),
  Ma = (e) => jo(e, "number", eo),
  Ho = (e) => !!e && Number.isInteger(Number(e)),
  kS = (e) => e.endsWith("%") && eo(e.slice(0, -1)),
  q = (e) => $v.test(e),
  xn = (e) => SS.test(e),
  PS = new Set(["length", "size", "percentage"]),
  jS = (e) => jo(e, PS, Bv),
  TS = (e) => jo(e, "position", Bv),
  RS = new Set(["image", "url"]),
  OS = (e) => jo(e, RS, IS),
  _S = (e) => jo(e, "", MS),
  Qo = () => !0,
  jo = (e, t, n) => {
    const r = $v.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  AS = (e) => CS.test(e) && !ES.test(e),
  Bv = () => !1,
  MS = (e) => bS.test(e),
  IS = (e) => NS.test(e),
  DS = () => {
    const e = de("colors"),
      t = de("spacing"),
      n = de("blur"),
      r = de("brightness"),
      o = de("borderColor"),
      i = de("borderRadius"),
      s = de("borderSpacing"),
      l = de("borderWidth"),
      a = de("contrast"),
      u = de("grayscale"),
      d = de("hueRotate"),
      p = de("invert"),
      g = de("gap"),
      m = de("gradientColorStops"),
      S = de("gradientColorStopPositions"),
      v = de("inset"),
      w = de("margin"),
      y = de("opacity"),
      h = de("padding"),
      x = de("saturate"),
      C = de("scale"),
      E = de("sepia"),
      N = de("skew"),
      b = de("space"),
      T = de("translate"),
      O = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", q, t],
      I = () => [q, t],
      W = () => ["", Xt, yn],
      M = () => ["auto", eo, q],
      H = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      U = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      j = () => ["", "0", q],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [eo, q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Qo],
        spacing: [Xt, yn],
        blur: ["none", "", xn, q],
        brightness: V(),
        borderColor: [e],
        borderRadius: ["none", "", "full", xn, q],
        borderSpacing: I(),
        borderWidth: W(),
        contrast: V(),
        grayscale: j(),
        hueRotate: V(),
        invert: j(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [kS, yn],
        inset: $(),
        margin: $(),
        opacity: V(),
        padding: I(),
        saturate: V(),
        scale: V(),
        sepia: j(),
        skew: V(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", q] }],
        container: ["container"],
        columns: [{ columns: [xn] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...H(), q] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Ho, q] }],
        basis: [{ basis: $() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", q] }],
        grow: [{ grow: j() }],
        shrink: [{ shrink: j() }],
        order: [{ order: ["first", "last", "none", Ho, q] }],
        "grid-cols": [{ "grid-cols": [Qo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Ho, q] }, q] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Qo] }],
        "row-start-end": [{ row: ["auto", { span: [Ho, q] }, q] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", q] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [b] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [b] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t] }],
        "min-w": [{ "min-w": [q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [xn] },
              xn,
            ],
          },
        ],
        h: [{ h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", xn, yn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ma,
            ],
          },
        ],
        "font-family": [{ font: [Qo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", eo, Ma] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Xt,
              q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [y] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Xt, yn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Xt, q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [y] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), TS] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", jS] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              OS,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [y] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [y] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [Xt, q] }],
        "outline-w": [{ outline: [Xt, yn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: W() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [y] }],
        "ring-offset-w": [{ "ring-offset": [Xt, yn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", xn, _S] }],
        "shadow-color": [{ shadow: [Qo] }],
        opacity: [{ opacity: [y] }],
        "mix-blend": [{ "mix-blend": [...U(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": U() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", xn, q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              q,
            ],
          },
        ],
        duration: [{ duration: V() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", q] }],
        delay: [{ delay: V() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [Ho, q] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Xt, yn, Ma] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  LS = yS(DS);
function ae(...e) {
  return LS(Av(e));
}
const FS = V1,
  Uv = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(kv, {
      ref: n,
      className: ae(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Uv.displayName = kv.displayName;
const zS = Ml(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Wv = f.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(Pv, { ref: r, className: ae(zS({ variant: t }), e), ...n })
  );
Wv.displayName = Pv.displayName;
const $S = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Rv, {
    ref: n,
    className: ae(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
$S.displayName = Rv.displayName;
const Vv = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ov, {
    ref: n,
    className: ae(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(rd, { className: "h-4 w-4" }),
  })
);
Vv.displayName = Ov.displayName;
const Hv = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(jv, { ref: n, className: ae("text-sm font-semibold", e), ...t })
);
Hv.displayName = jv.displayName;
const Qv = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Tv, { ref: n, className: ae("text-sm opacity-90", e), ...t })
);
Qv.displayName = Tv.displayName;
function BS() {
  const { toasts: e } = Jw();
  return c.jsxs(FS, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return c.jsxs(
          Wv,
          {
            ...i,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx(Hv, { children: n }),
                  r && c.jsx(Qv, { children: r }),
                ],
              }),
              o,
              c.jsx(Vv, {}),
            ],
          },
          t
        );
      }),
      c.jsx(Uv, {}),
    ],
  });
}
var Xf = ["light", "dark"],
  US = "(prefers-color-scheme: dark)",
  WS = f.createContext(void 0),
  VS = { setTheme: (e) => {}, themes: [] },
  HS = () => {
    var e;
    return (e = f.useContext(WS)) != null ? e : VS;
  };
f.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((S) => `'${S}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      p = o
        ? Xf.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      g = (S, v = !1, w = !0) => {
        let y = s ? s[S] : S,
          h = v ? S + "|| ''" : `'${y}'`,
          x = "";
        return (
          o &&
            w &&
            !v &&
            Xf.includes(S) &&
            (x += `d.style.colorScheme = '${S}';`),
          n === "class"
            ? v || y
              ? (x += `c.add(${h})`)
              : (x += "null")
            : y && (x += `d[s](n,${h})`),
          x
        );
      },
      m = e
        ? `!function(){${d}${g(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${US}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g(
            "dark"
          )}}else{${g("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${g(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + g(i, !1, !1) + "}"
          }${p}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${g(s ? "x[e]" : "e", !0)}}else{${g(
            i,
            !1,
            !1
          )};}${p}}catch(t){}}();`;
    return f.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: m },
    });
  }
);
var QS = (e) => {
    switch (e) {
      case "success":
        return YS;
      case "info":
        return XS;
      case "warning":
        return qS;
      case "error":
        return ZS;
      default:
        return null;
    }
  },
  KS = Array(12).fill(0),
  GS = ({ visible: e, className: t }) =>
    A.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      A.createElement(
        "div",
        { className: "sonner-spinner" },
        KS.map((n, r) =>
          A.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  YS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  qS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  XS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  ZS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  JS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    A.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  eC = () => {
    let [e, t] = A.useState(document.hidden);
    return (
      A.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Wc = 1,
  tC = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Wc++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (a) => {
                if (((i = ["resolve", a]), A.isValidElement(a)))
                  (o = !1), this.create({ id: n, type: "default", message: a });
                else if (rC(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: d,
                  });
                }
              })
              .catch(async (a) => {
                if (((i = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var a;
                o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            l = () =>
              new Promise((a, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : a(i[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Wc++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Ye = new tC(),
  nC = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Wc++;
    return Ye.addToast({ title: e, ...t, id: n }), n;
  },
  rC = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  oC = nC,
  iC = () => Ye.toasts,
  sC = () => Ye.getActiveToasts();
Object.assign(
  oC,
  {
    success: Ye.success,
    info: Ye.info,
    warning: Ye.warning,
    error: Ye.error,
    custom: Ye.custom,
    message: Ye.message,
    promise: Ye.promise,
    dismiss: Ye.dismiss,
    loading: Ye.loading,
  },
  { getHistory: iC, getToasts: sC }
);
function lC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
lC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function fs(e) {
  return e.label !== void 0;
}
var aC = 3,
  cC = "32px",
  uC = "16px",
  Zf = 4e3,
  dC = 356,
  fC = 14,
  pC = 20,
  hC = 200;
function Ct(...e) {
  return e.filter(Boolean).join(" ");
}
function mC(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var vC = (e) => {
  var t, n, r, o, i, s, l, a, u, d, p;
  let {
      invert: g,
      toast: m,
      unstyled: S,
      interacting: v,
      setHeights: w,
      visibleToasts: y,
      heights: h,
      index: x,
      toasts: C,
      expanded: E,
      removeToast: N,
      defaultRichColors: b,
      closeButton: T,
      style: O,
      cancelButtonStyle: _,
      actionButtonStyle: $,
      className: I = "",
      descriptionClassName: W = "",
      duration: M,
      position: H,
      gap: z,
      loadingIcon: U,
      expandByDefault: k,
      classNames: j,
      icons: D,
      closeButtonAriaLabel: V = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Y, Q] = A.useState(null),
    [ue, we] = A.useState(null),
    [L, ie] = A.useState(!1),
    [Se, oe] = A.useState(!1),
    [J, ne] = A.useState(!1),
    [De, ct] = A.useState(!1),
    [Xn, pn] = A.useState(!1),
    [Zn, Io] = A.useState(0),
    [jr, Nd] = A.useState(0),
    Do = A.useRef(m.duration || M || Zf),
    kd = A.useRef(null),
    Jn = A.useRef(null),
    p0 = x === 0,
    h0 = x + 1 <= y,
    ut = m.type,
    Tr = m.dismissible !== !1,
    m0 = m.className || "",
    v0 = m.descriptionClassName || "",
    Hi = A.useMemo(
      () => h.findIndex((K) => K.toastId === m.id) || 0,
      [h, m.id]
    ),
    g0 = A.useMemo(() => {
      var K;
      return (K = m.closeButton) != null ? K : T;
    }, [m.closeButton, T]),
    Pd = A.useMemo(() => m.duration || M || Zf, [m.duration, M]),
    na = A.useRef(0),
    Rr = A.useRef(0),
    jd = A.useRef(0),
    Or = A.useRef(null),
    [y0, x0] = H.split("-"),
    Td = A.useMemo(
      () => h.reduce((K, le, me) => (me >= Hi ? K : K + le.height), 0),
      [h, Hi]
    ),
    Rd = eC(),
    w0 = m.invert || g,
    ra = ut === "loading";
  (Rr.current = A.useMemo(() => Hi * z + Td, [Hi, Td])),
    A.useEffect(() => {
      Do.current = Pd;
    }, [Pd]),
    A.useEffect(() => {
      ie(!0);
    }, []),
    A.useEffect(() => {
      let K = Jn.current;
      if (K) {
        let le = K.getBoundingClientRect().height;
        return (
          Nd(le),
          w((me) => [
            { toastId: m.id, height: le, position: m.position },
            ...me,
          ]),
          () => w((me) => me.filter((yt) => yt.toastId !== m.id))
        );
      }
    }, [w, m.id]),
    A.useLayoutEffect(() => {
      if (!L) return;
      let K = Jn.current,
        le = K.style.height;
      K.style.height = "auto";
      let me = K.getBoundingClientRect().height;
      (K.style.height = le),
        Nd(me),
        w((yt) =>
          yt.find((xt) => xt.toastId === m.id)
            ? yt.map((xt) => (xt.toastId === m.id ? { ...xt, height: me } : xt))
            : [{ toastId: m.id, height: me, position: m.position }, ...yt]
        );
    }, [L, m.title, m.description, w, m.id]);
  let hn = A.useCallback(() => {
    oe(!0),
      Io(Rr.current),
      w((K) => K.filter((le) => le.toastId !== m.id)),
      setTimeout(() => {
        N(m);
      }, hC);
  }, [m, N, w, Rr]);
  A.useEffect(() => {
    if (
      (m.promise && ut === "loading") ||
      m.duration === 1 / 0 ||
      m.type === "loading"
    )
      return;
    let K;
    return (
      E || v || (B && Rd)
        ? (() => {
            if (jd.current < na.current) {
              let le = new Date().getTime() - na.current;
              Do.current = Do.current - le;
            }
            jd.current = new Date().getTime();
          })()
        : Do.current !== 1 / 0 &&
          ((na.current = new Date().getTime()),
          (K = setTimeout(() => {
            var le;
            (le = m.onAutoClose) == null || le.call(m, m), hn();
          }, Do.current))),
      () => clearTimeout(K)
    );
  }, [E, v, m, ut, B, Rd, hn]),
    A.useEffect(() => {
      m.delete && hn();
    }, [hn, m.delete]);
  function S0() {
    var K, le, me;
    return D != null && D.loading
      ? A.createElement(
          "div",
          {
            className: Ct(
              j == null ? void 0 : j.loader,
              (K = m == null ? void 0 : m.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader"
            ),
            "data-visible": ut === "loading",
          },
          D.loading
        )
      : U
      ? A.createElement(
          "div",
          {
            className: Ct(
              j == null ? void 0 : j.loader,
              (le = m == null ? void 0 : m.classNames) == null
                ? void 0
                : le.loader,
              "sonner-loader"
            ),
            "data-visible": ut === "loading",
          },
          U
        )
      : A.createElement(GS, {
          className: Ct(
            j == null ? void 0 : j.loader,
            (me = m == null ? void 0 : m.classNames) == null
              ? void 0
              : me.loader
          ),
          visible: ut === "loading",
        });
  }
  return A.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Jn,
      className: Ct(
        I,
        m0,
        j == null ? void 0 : j.toast,
        (t = m == null ? void 0 : m.classNames) == null ? void 0 : t.toast,
        j == null ? void 0 : j.default,
        j == null ? void 0 : j[ut],
        (n = m == null ? void 0 : m.classNames) == null ? void 0 : n[ut]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = m.richColors) != null ? r : b,
      "data-styled": !(m.jsx || m.unstyled || S),
      "data-mounted": L,
      "data-promise": !!m.promise,
      "data-swiped": Xn,
      "data-removed": Se,
      "data-visible": h0,
      "data-y-position": y0,
      "data-x-position": x0,
      "data-index": x,
      "data-front": p0,
      "data-swiping": J,
      "data-dismissible": Tr,
      "data-type": ut,
      "data-invert": w0,
      "data-swipe-out": De,
      "data-swipe-direction": ue,
      "data-expanded": !!(E || (k && L)),
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": C.length - x,
        "--offset": `${Se ? Zn : Rr.current}px`,
        "--initial-height": k ? "auto" : `${jr}px`,
        ...O,
        ...m.style,
      },
      onDragEnd: () => {
        ne(!1), Q(null), (Or.current = null);
      },
      onPointerDown: (K) => {
        ra ||
          !Tr ||
          ((kd.current = new Date()),
          Io(Rr.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            (ne(!0), (Or.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, le, me, yt;
        if (De || !Tr) return;
        Or.current = null;
        let xt = Number(
            ((K = Jn.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          mn = Number(
            ((le = Jn.current) == null
              ? void 0
              : le.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          er =
            new Date().getTime() -
            ((me = kd.current) == null ? void 0 : me.getTime()),
          wt = Y === "x" ? xt : mn,
          vn = Math.abs(wt) / er;
        if (Math.abs(wt) >= pC || vn > 0.11) {
          Io(Rr.current),
            (yt = m.onDismiss) == null || yt.call(m, m),
            we(
              Y === "x" ? (xt > 0 ? "right" : "left") : mn > 0 ? "down" : "up"
            ),
            hn(),
            ct(!0),
            pn(!1);
          return;
        }
        ne(!1), Q(null);
      },
      onPointerMove: (K) => {
        var le, me, yt, xt;
        if (
          !Or.current ||
          !Tr ||
          ((le = window.getSelection()) == null
            ? void 0
            : le.toString().length) > 0
        )
          return;
        let mn = K.clientY - Or.current.y,
          er = K.clientX - Or.current.x,
          wt = (me = e.swipeDirections) != null ? me : mC(H);
        !Y &&
          (Math.abs(er) > 1 || Math.abs(mn) > 1) &&
          Q(Math.abs(er) > Math.abs(mn) ? "x" : "y");
        let vn = { x: 0, y: 0 };
        Y === "y"
          ? (wt.includes("top") || wt.includes("bottom")) &&
            ((wt.includes("top") && mn < 0) ||
              (wt.includes("bottom") && mn > 0)) &&
            (vn.y = mn)
          : Y === "x" &&
            (wt.includes("left") || wt.includes("right")) &&
            ((wt.includes("left") && er < 0) ||
              (wt.includes("right") && er > 0)) &&
            (vn.x = er),
          (Math.abs(vn.x) > 0 || Math.abs(vn.y) > 0) && pn(!0),
          (yt = Jn.current) == null ||
            yt.style.setProperty("--swipe-amount-x", `${vn.x}px`),
          (xt = Jn.current) == null ||
            xt.style.setProperty("--swipe-amount-y", `${vn.y}px`);
      },
    },
    g0 && !m.jsx
      ? A.createElement(
          "button",
          {
            "aria-label": V,
            "data-disabled": ra,
            "data-close-button": !0,
            onClick:
              ra || !Tr
                ? () => {}
                : () => {
                    var K;
                    hn(), (K = m.onDismiss) == null || K.call(m, m);
                  },
            className: Ct(
              j == null ? void 0 : j.closeButton,
              (o = m == null ? void 0 : m.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (i = D == null ? void 0 : D.close) != null ? i : JS
        )
      : null,
    m.jsx || f.isValidElement(m.title)
      ? m.jsx
        ? m.jsx
        : typeof m.title == "function"
        ? m.title()
        : m.title
      : A.createElement(
          A.Fragment,
          null,
          ut || m.icon || m.promise
            ? A.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Ct(
                    j == null ? void 0 : j.icon,
                    (s = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                m.promise || (m.type === "loading" && !m.icon)
                  ? m.icon || S0()
                  : null,
                m.type !== "loading"
                  ? m.icon || (D == null ? void 0 : D[ut]) || QS(ut)
                  : null
              )
            : null,
          A.createElement(
            "div",
            {
              "data-content": "",
              className: Ct(
                j == null ? void 0 : j.content,
                (l = m == null ? void 0 : m.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            A.createElement(
              "div",
              {
                "data-title": "",
                className: Ct(
                  j == null ? void 0 : j.title,
                  (a = m == null ? void 0 : m.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              typeof m.title == "function" ? m.title() : m.title
            ),
            m.description
              ? A.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Ct(
                      W,
                      v0,
                      j == null ? void 0 : j.description,
                      (u = m == null ? void 0 : m.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof m.description == "function"
                    ? m.description()
                    : m.description
                )
              : null
          ),
          f.isValidElement(m.cancel)
            ? m.cancel
            : m.cancel && fs(m.cancel)
            ? A.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: m.cancelButtonStyle || _,
                  onClick: (K) => {
                    var le, me;
                    fs(m.cancel) &&
                      Tr &&
                      ((me = (le = m.cancel).onClick) == null || me.call(le, K),
                      hn());
                  },
                  className: Ct(
                    j == null ? void 0 : j.cancelButton,
                    (d = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : d.cancelButton
                  ),
                },
                m.cancel.label
              )
            : null,
          f.isValidElement(m.action)
            ? m.action
            : m.action && fs(m.action)
            ? A.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: m.actionButtonStyle || $,
                  onClick: (K) => {
                    var le, me;
                    fs(m.action) &&
                      ((me = (le = m.action).onClick) == null || me.call(le, K),
                      !K.defaultPrevented && hn());
                  },
                  className: Ct(
                    j == null ? void 0 : j.actionButton,
                    (p = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : p.actionButton
                  ),
                },
                m.action.label
              )
            : null
        )
  );
};
function Jf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function gC(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        l = i ? uC : cC;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = l)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : a(l);
    }),
    n
  );
}
var yC = f.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: d = "light",
      richColors: p,
      duration: g,
      style: m,
      visibleToasts: S = aC,
      toastOptions: v,
      dir: w = Jf(),
      gap: y = fC,
      loadingIcon: h,
      icons: x,
      containerAriaLabel: C = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [N, b] = A.useState([]),
    T = A.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(N.filter((B) => B.position).map((B) => B.position))
          )
        ),
      [N, r]
    ),
    [O, _] = A.useState([]),
    [$, I] = A.useState(!1),
    [W, M] = A.useState(!1),
    [H, z] = A.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    U = A.useRef(null),
    k = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    j = A.useRef(null),
    D = A.useRef(!1),
    V = A.useCallback((B) => {
      b((Y) => {
        var Q;
        return (
          ((Q = Y.find((ue) => ue.id === B.id)) != null && Q.delete) ||
            Ye.dismiss(B.id),
          Y.filter(({ id: ue }) => ue !== B.id)
        );
      });
    }, []);
  return (
    A.useEffect(
      () =>
        Ye.subscribe((B) => {
          if (B.dismiss) {
            b((Y) => Y.map((Q) => (Q.id === B.id ? { ...Q, delete: !0 } : Q)));
            return;
          }
          setTimeout(() => {
            rv.flushSync(() => {
              b((Y) => {
                let Q = Y.findIndex((ue) => ue.id === B.id);
                return Q !== -1
                  ? [...Y.slice(0, Q), { ...Y[Q], ...B }, ...Y.slice(Q + 1)]
                  : [B, ...Y];
              });
            });
          });
        }),
      []
    ),
    A.useEffect(() => {
      if (d !== "system") {
        z(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? z("dark")
            : z("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Y }) => {
          z(Y ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: Q }) => {
          try {
            z(Q ? "dark" : "light");
          } catch (ue) {
            console.error(ue);
          }
        });
      }
    }, [d]),
    A.useEffect(() => {
      N.length <= 1 && I(!1);
    }, [N]),
    A.useEffect(() => {
      let B = (Y) => {
        var Q, ue;
        o.every((we) => Y[we] || Y.code === we) &&
          (I(!0), (Q = U.current) == null || Q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === U.current ||
              ((ue = U.current) != null &&
                ue.contains(document.activeElement))) &&
            I(!1);
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [o]),
    A.useEffect(() => {
      if (U.current)
        return () => {
          j.current &&
            (j.current.focus({ preventScroll: !0 }),
            (j.current = null),
            (D.current = !1));
        };
    }, [U.current]),
    A.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${C} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      T.map((B, Y) => {
        var Q;
        let [ue, we] = B.split("-");
        return N.length
          ? A.createElement(
              "ol",
              {
                key: B,
                dir: w === "auto" ? Jf() : w,
                tabIndex: -1,
                ref: U,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": H,
                "data-y-position": ue,
                "data-lifted": $ && N.length > 1 && !i,
                "data-x-position": we,
                style: {
                  "--front-toast-height": `${
                    ((Q = O[0]) == null ? void 0 : Q.height) || 0
                  }px`,
                  "--width": `${dC}px`,
                  "--gap": `${y}px`,
                  ...m,
                  ...gC(a, u),
                },
                onBlur: (L) => {
                  D.current &&
                    !L.currentTarget.contains(L.relatedTarget) &&
                    ((D.current = !1),
                    j.current &&
                      (j.current.focus({ preventScroll: !0 }),
                      (j.current = null)));
                },
                onFocus: (L) => {
                  (L.target instanceof HTMLElement &&
                    L.target.dataset.dismissible === "false") ||
                    D.current ||
                    ((D.current = !0), (j.current = L.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  W || I(!1);
                },
                onDragEnd: () => I(!1),
                onPointerDown: (L) => {
                  (L.target instanceof HTMLElement &&
                    L.target.dataset.dismissible === "false") ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              N.filter((L) => (!L.position && Y === 0) || L.position === B).map(
                (L, ie) => {
                  var Se, oe;
                  return A.createElement(vC, {
                    key: L.id,
                    icons: x,
                    index: ie,
                    toast: L,
                    defaultRichColors: p,
                    duration:
                      (Se = v == null ? void 0 : v.duration) != null ? Se : g,
                    className: v == null ? void 0 : v.className,
                    descriptionClassName:
                      v == null ? void 0 : v.descriptionClassName,
                    invert: n,
                    visibleToasts: S,
                    closeButton:
                      (oe = v == null ? void 0 : v.closeButton) != null
                        ? oe
                        : s,
                    interacting: W,
                    position: B,
                    style: v == null ? void 0 : v.style,
                    unstyled: v == null ? void 0 : v.unstyled,
                    classNames: v == null ? void 0 : v.classNames,
                    cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                    removeToast: V,
                    toasts: N.filter((J) => J.position == L.position),
                    heights: O.filter((J) => J.position == L.position),
                    setHeights: _,
                    expandByDefault: i,
                    gap: y,
                    loadingIcon: h,
                    expanded: $,
                    pauseWhenPageIsHidden: E,
                    swipeDirections: e.swipeDirections,
                  });
                }
              )
            )
          : null;
      })
    )
  );
});
const xC = ({ ...e }) => {
  const { theme: t = "system" } = HS();
  return c.jsx(yC, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var wC = cu[" useId ".trim().toString()] || (() => {}),
  SC = 0;
function to(e) {
  const [t, n] = f.useState(wC());
  return (
    Me(() => {
      n((r) => r ?? String(SC++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const CC = ["top", "right", "bottom", "left"],
  Vn = Math.min,
  nt = Math.max,
  ll = Math.round,
  ps = Math.floor,
  Gt = (e) => ({ x: e, y: e }),
  EC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  bC = { start: "end", end: "start" };
function Vc(e, t, n) {
  return nt(e, Vn(t, n));
}
function un(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dn(e) {
  return e.split("-")[0];
}
function To(e) {
  return e.split("-")[1];
}
function id(e) {
  return e === "x" ? "y" : "x";
}
function sd(e) {
  return e === "y" ? "height" : "width";
}
const NC = new Set(["top", "bottom"]);
function Ht(e) {
  return NC.has(dn(e)) ? "y" : "x";
}
function ld(e) {
  return id(Ht(e));
}
function kC(e, t, n) {
  n === void 0 && (n = !1);
  const r = To(e),
    o = ld(e),
    i = sd(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = al(s)), [s, al(s)];
}
function PC(e) {
  const t = al(e);
  return [Hc(e), t, Hc(t)];
}
function Hc(e) {
  return e.replace(/start|end/g, (t) => bC[t]);
}
const ep = ["left", "right"],
  tp = ["right", "left"],
  jC = ["top", "bottom"],
  TC = ["bottom", "top"];
function RC(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? tp : ep) : t ? ep : tp;
    case "left":
    case "right":
      return t ? jC : TC;
    default:
      return [];
  }
}
function OC(e, t, n, r) {
  const o = To(e);
  let i = RC(dn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Hc)))), i
  );
}
function al(e) {
  return e.replace(/left|right|bottom|top/g, (t) => EC[t]);
}
function _C(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Kv(e) {
  return typeof e != "number"
    ? _C(e)
    : { top: e, right: e, bottom: e, left: e };
}
function cl(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function np(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Ht(t),
    s = ld(t),
    l = sd(s),
    a = dn(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    g = r[l] / 2 - o[l] / 2;
  let m;
  switch (a) {
    case "top":
      m = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: d, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: p };
      break;
    case "left":
      m = { x: r.x - o.width, y: p };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (To(t)) {
    case "start":
      m[s] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += g * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const AC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: p } = np(u, r, a),
    g = r,
    m = {},
    S = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: w, fn: y } = l[v],
      {
        x: h,
        y: x,
        data: C,
        reset: E,
      } = await y({
        x: d,
        y: p,
        initialPlacement: r,
        placement: g,
        strategy: o,
        middlewareData: m,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = h ?? d),
      (p = x ?? p),
      (m = { ...m, [w]: { ...m[w], ...C } }),
      E &&
        S <= 50 &&
        (S++,
        typeof E == "object" &&
          (E.placement && (g = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: p } = np(u, g, a))),
        (v = -1));
  }
  return { x: d, y: p, placement: g, strategy: o, middlewareData: m };
};
async function ki(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: p = "floating",
      altBoundary: g = !1,
      padding: m = 0,
    } = un(t, e),
    S = Kv(m),
    w = l[g ? (p === "floating" ? "reference" : "floating") : p],
    y = cl(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      })
    ),
    h =
      p === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    x = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = cl(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: h,
            offsetParent: x,
            strategy: a,
          })
        : h
    );
  return {
    top: (y.top - E.top + S.top) / C.y,
    bottom: (E.bottom - y.bottom + S.bottom) / C.y,
    left: (y.left - E.left + S.left) / C.x,
    right: (E.right - y.right + S.right) / C.x,
  };
}
const MC = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = un(e, t) || {};
      if (u == null) return {};
      const p = Kv(d),
        g = { x: n, y: r },
        m = ld(o),
        S = sd(m),
        v = await s.getDimensions(u),
        w = m === "y",
        y = w ? "top" : "left",
        h = w ? "bottom" : "right",
        x = w ? "clientHeight" : "clientWidth",
        C = i.reference[S] + i.reference[m] - g[m] - i.floating[S],
        E = g[m] - i.reference[m],
        N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let b = N ? N[x] : 0;
      (!b || !(await (s.isElement == null ? void 0 : s.isElement(N)))) &&
        (b = l.floating[x] || i.floating[S]);
      const T = C / 2 - E / 2,
        O = b / 2 - v[S] / 2 - 1,
        _ = Vn(p[y], O),
        $ = Vn(p[h], O),
        I = _,
        W = b - v[S] - $,
        M = b / 2 - v[S] / 2 + T,
        H = Vc(I, M, W),
        z =
          !a.arrow &&
          To(o) != null &&
          M !== H &&
          i.reference[S] / 2 - (M < I ? _ : $) - v[S] / 2 < 0,
        U = z ? (M < I ? M - I : M - W) : 0;
      return {
        [m]: g[m] + U,
        data: {
          [m]: H,
          centerOffset: M - H - U,
          ...(z && { alignmentOffset: U }),
        },
        reset: z,
      };
    },
  }),
  IC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: g,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: v = !0,
              ...w
            } = un(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const y = dn(o),
            h = Ht(l),
            x = dn(l) === l,
            C = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            E = g || (x || !v ? [al(l)] : PC(l)),
            N = S !== "none";
          !g && N && E.push(...OC(l, v, S, C));
          const b = [l, ...E],
            T = await ki(t, w),
            O = [];
          let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && O.push(T[y]), p)) {
            const M = kC(o, s, C);
            O.push(T[M[0]], T[M[1]]);
          }
          if (
            ((_ = [..._, { placement: o, overflows: O }]),
            !O.every((M) => M <= 0))
          ) {
            var $, I;
            const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
              H = b[M];
            if (
              H &&
              (!(p === "alignment" ? h !== Ht(H) : !1) ||
                _.every((k) => k.overflows[0] > 0 && Ht(k.placement) === h))
            )
              return {
                data: { index: M, overflows: _ },
                reset: { placement: H },
              };
            let z =
              (I = _.filter((U) => U.overflows[0] <= 0).sort(
                (U, k) => U.overflows[1] - k.overflows[1]
              )[0]) == null
                ? void 0
                : I.placement;
            if (!z)
              switch (m) {
                case "bestFit": {
                  var W;
                  const U =
                    (W = _.filter((k) => {
                      if (N) {
                        const j = Ht(k.placement);
                        return j === h || j === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((j) => j > 0)
                          .reduce((j, D) => j + D, 0),
                      ])
                      .sort((k, j) => k[1] - j[1])[0]) == null
                      ? void 0
                      : W[0];
                  U && (z = U);
                  break;
                }
                case "initialPlacement":
                  z = l;
                  break;
              }
            if (o !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function rp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function op(e) {
  return CC.some((t) => e[t] >= 0);
}
const DC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = un(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await ki(t, { ...o, elementContext: "reference" }),
                s = rp(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: op(s) },
              };
            }
            case "escaped": {
              const i = await ki(t, { ...o, altBoundary: !0 }),
                s = rp(i, n.floating);
              return { data: { escapedOffsets: s, escaped: op(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Gv = new Set(["left", "top"]);
async function LC(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = dn(n),
    l = To(n),
    a = Ht(n) === "y",
    u = Gv.has(s) ? -1 : 1,
    d = i && a ? -1 : 1,
    p = un(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: S,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (m = l === "end" ? S * -1 : S),
    a ? { x: m * d, y: g * u } : { x: g * u, y: m * d }
  );
}
const FC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await LC(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  zC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: y, y: h } = w;
                  return { x: y, y: h };
                },
              },
              ...a
            } = un(e, t),
            u = { x: n, y: r },
            d = await ki(t, a),
            p = Ht(dn(o)),
            g = id(p);
          let m = u[g],
            S = u[p];
          if (i) {
            const w = g === "y" ? "top" : "left",
              y = g === "y" ? "bottom" : "right",
              h = m + d[w],
              x = m - d[y];
            m = Vc(h, m, x);
          }
          if (s) {
            const w = p === "y" ? "top" : "left",
              y = p === "y" ? "bottom" : "right",
              h = S + d[w],
              x = S - d[y];
            S = Vc(h, S, x);
          }
          const v = l.fn({ ...t, [g]: m, [p]: S });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [g]: i, [p]: s } },
          };
        },
      }
    );
  },
  $C = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = un(e, t),
            d = { x: n, y: r },
            p = Ht(o),
            g = id(p);
          let m = d[g],
            S = d[p];
          const v = un(l, t),
            w =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            const x = g === "y" ? "height" : "width",
              C = i.reference[g] - i.floating[x] + w.mainAxis,
              E = i.reference[g] + i.reference[x] - w.mainAxis;
            m < C ? (m = C) : m > E && (m = E);
          }
          if (u) {
            var y, h;
            const x = g === "y" ? "width" : "height",
              C = Gv.has(dn(o)),
              E =
                i.reference[p] -
                i.floating[x] +
                ((C && ((y = s.offset) == null ? void 0 : y[p])) || 0) +
                (C ? 0 : w.crossAxis),
              N =
                i.reference[p] +
                i.reference[x] +
                (C ? 0 : ((h = s.offset) == null ? void 0 : h[p]) || 0) -
                (C ? w.crossAxis : 0);
            S < E ? (S = E) : S > N && (S = N);
          }
          return { [g]: m, [p]: S };
        },
      }
    );
  },
  BC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = un(e, t),
            d = await ki(t, u),
            p = dn(o),
            g = To(o),
            m = Ht(o) === "y",
            { width: S, height: v } = i.floating;
          let w, y;
          p === "top" || p === "bottom"
            ? ((w = p),
              (y =
                g ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = p), (w = g === "end" ? "top" : "bottom"));
          const h = v - d.top - d.bottom,
            x = S - d.left - d.right,
            C = Vn(v - d[w], h),
            E = Vn(S - d[y], x),
            N = !t.middlewareData.shift;
          let b = C,
            T = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = h),
            N && !g)
          ) {
            const _ = nt(d.left, 0),
              $ = nt(d.right, 0),
              I = nt(d.top, 0),
              W = nt(d.bottom, 0);
            m
              ? (T = S - 2 * (_ !== 0 || $ !== 0 ? _ + $ : nt(d.left, d.right)))
              : (b =
                  v - 2 * (I !== 0 || W !== 0 ? I + W : nt(d.top, d.bottom)));
          }
          await a({ ...t, availableWidth: T, availableHeight: b });
          const O = await s.getDimensions(l.floating);
          return S !== O.width || v !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Dl() {
  return typeof window < "u";
}
function Ro(e) {
  return Yv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function it(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function qt(e) {
  var t;
  return (t = (Yv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Yv(e) {
  return Dl() ? e instanceof Node || e instanceof it(e).Node : !1;
}
function It(e) {
  return Dl() ? e instanceof Element || e instanceof it(e).Element : !1;
}
function Yt(e) {
  return Dl() ? e instanceof HTMLElement || e instanceof it(e).HTMLElement : !1;
}
function ip(e) {
  return !Dl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof it(e).ShadowRoot;
}
const UC = new Set(["inline", "contents"]);
function Ui(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !UC.has(o);
}
const WC = new Set(["table", "td", "th"]);
function VC(e) {
  return WC.has(Ro(e));
}
const HC = [":popover-open", ":modal"];
function Ll(e) {
  return HC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const QC = ["transform", "translate", "scale", "rotate", "perspective"],
  KC = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  GC = ["paint", "layout", "strict", "content"];
function ad(e) {
  const t = cd(),
    n = It(e) ? Dt(e) : e;
  return (
    QC.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    KC.some((r) => (n.willChange || "").includes(r)) ||
    GC.some((r) => (n.contain || "").includes(r))
  );
}
function YC(e) {
  let t = Hn(e);
  for (; Yt(t) && !So(t); ) {
    if (ad(t)) return t;
    if (Ll(t)) return null;
    t = Hn(t);
  }
  return null;
}
function cd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const qC = new Set(["html", "body", "#document"]);
function So(e) {
  return qC.has(Ro(e));
}
function Dt(e) {
  return it(e).getComputedStyle(e);
}
function Fl(e) {
  return It(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Hn(e) {
  if (Ro(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (ip(e) && e.host) || qt(e);
  return ip(t) ? t.host : t;
}
function qv(e) {
  const t = Hn(e);
  return So(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Yt(t) && Ui(t)
    ? t
    : qv(t);
}
function Pi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = qv(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = it(o);
  if (i) {
    const l = Qc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Ui(o) ? o : [],
      l && n ? Pi(l) : []
    );
  }
  return t.concat(o, Pi(o, [], n));
}
function Qc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xv(e) {
  const t = Dt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Yt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = ll(n) !== i || ll(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function ud(e) {
  return It(e) ? e : e.contextElement;
}
function no(e) {
  const t = ud(e);
  if (!Yt(t)) return Gt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Xv(t);
  let s = (i ? ll(n.width) : n.width) / r,
    l = (i ? ll(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const XC = Gt(0);
function Zv(e) {
  const t = it(e);
  return !cd() || !t.visualViewport
    ? XC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ZC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== it(e)) ? !1 : t;
}
function Sr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = ud(e);
  let s = Gt(1);
  t && (r ? It(r) && (s = no(r)) : (s = no(e)));
  const l = ZC(i, n, r) ? Zv(i) : Gt(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    d = o.width / s.x,
    p = o.height / s.y;
  if (i) {
    const g = it(i),
      m = r && It(r) ? it(r) : r;
    let S = g,
      v = Qc(S);
    for (; v && r && m !== S; ) {
      const w = no(v),
        y = v.getBoundingClientRect(),
        h = Dt(v),
        x = y.left + (v.clientLeft + parseFloat(h.paddingLeft)) * w.x,
        C = y.top + (v.clientTop + parseFloat(h.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (d *= w.x),
        (p *= w.y),
        (a += x),
        (u += C),
        (S = it(v)),
        (v = Qc(S));
    }
  }
  return cl({ width: d, height: p, x: a, y: u });
}
function dd(e, t) {
  const n = Fl(e).scrollLeft;
  return t ? t.left + n : Sr(qt(e)).left + n;
}
function Jv(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : dd(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function JC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = qt(r),
    l = t ? Ll(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Gt(1);
  const d = Gt(0),
    p = Yt(r);
  if (
    (p || (!p && !i)) &&
    ((Ro(r) !== "body" || Ui(s)) && (a = Fl(r)), Yt(r))
  ) {
    const m = Sr(r);
    (u = no(r)), (d.x = m.x + r.clientLeft), (d.y = m.y + r.clientTop);
  }
  const g = s && !p && !i ? Jv(s, a, !0) : Gt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x + g.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y + g.y,
  };
}
function eE(e) {
  return Array.from(e.getClientRects());
}
function tE(e) {
  const t = qt(e),
    n = Fl(e),
    r = e.ownerDocument.body,
    o = nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + dd(e);
  const l = -n.scrollTop;
  return (
    Dt(r).direction === "rtl" && (s += nt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function nE(e, t) {
  const n = it(e),
    r = qt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = cd();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
const rE = new Set(["absolute", "fixed"]);
function oE(e, t) {
  const n = Sr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Yt(e) ? no(e) : Gt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function sp(e, t, n) {
  let r;
  if (t === "viewport") r = nE(e, n);
  else if (t === "document") r = tE(qt(e));
  else if (It(t)) r = oE(t, n);
  else {
    const o = Zv(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return cl(r);
}
function eg(e, t) {
  const n = Hn(e);
  return n === t || !It(n) || So(n)
    ? !1
    : Dt(n).position === "fixed" || eg(n, t);
}
function iE(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Pi(e, [], !1).filter((l) => It(l) && Ro(l) !== "body"),
    o = null;
  const i = Dt(e).position === "fixed";
  let s = i ? Hn(e) : e;
  for (; It(s) && !So(s); ) {
    const l = Dt(s),
      a = ad(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && l.position === "static" && !!o && rE.has(o.position)) ||
            (Ui(s) && !a && eg(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = l),
      (s = Hn(s));
  }
  return t.set(e, r), r;
}
function sE(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Ll(t)
          ? []
          : iE(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, d) => {
      const p = sp(t, d, o);
      return (
        (u.top = nt(p.top, u.top)),
        (u.right = Vn(p.right, u.right)),
        (u.bottom = Vn(p.bottom, u.bottom)),
        (u.left = nt(p.left, u.left)),
        u
      );
    }, sp(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function lE(e) {
  const { width: t, height: n } = Xv(e);
  return { width: t, height: n };
}
function aE(e, t, n) {
  const r = Yt(t),
    o = qt(t),
    i = n === "fixed",
    s = Sr(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Gt(0);
  function u() {
    a.x = dd(o);
  }
  if (r || (!r && !i))
    if (((Ro(t) !== "body" || Ui(o)) && (l = Fl(t)), r)) {
      const m = Sr(t, !0, i, t);
      (a.x = m.x + t.clientLeft), (a.y = m.y + t.clientTop);
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Jv(o, l) : Gt(0),
    p = s.left + l.scrollLeft - a.x - d.x,
    g = s.top + l.scrollTop - a.y - d.y;
  return { x: p, y: g, width: s.width, height: s.height };
}
function Ia(e) {
  return Dt(e).position === "static";
}
function lp(e, t) {
  if (!Yt(e) || Dt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return qt(e) === n && (n = n.ownerDocument.body), n;
}
function tg(e, t) {
  const n = it(e);
  if (Ll(e)) return n;
  if (!Yt(e)) {
    let o = Hn(e);
    for (; o && !So(o); ) {
      if (It(o) && !Ia(o)) return o;
      o = Hn(o);
    }
    return n;
  }
  let r = lp(e, t);
  for (; r && VC(r) && Ia(r); ) r = lp(r, t);
  return r && So(r) && Ia(r) && !ad(r) ? n : r || YC(e) || n;
}
const cE = async function (e) {
  const t = this.getOffsetParent || tg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: aE(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function uE(e) {
  return Dt(e).direction === "rtl";
}
const dE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: JC,
  getDocumentElement: qt,
  getClippingRect: sE,
  getOffsetParent: tg,
  getElementRects: cE,
  getClientRects: eE,
  getDimensions: lE,
  getScale: no,
  isElement: It,
  isRTL: uE,
};
function ng(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function fE(e, t) {
  let n = null,
    r;
  const o = qt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: d, top: p, width: g, height: m } = u;
    if ((l || t(), !g || !m)) return;
    const S = ps(p),
      v = ps(o.clientWidth - (d + g)),
      w = ps(o.clientHeight - (p + m)),
      y = ps(d),
      x = {
        rootMargin: -S + "px " + -v + "px " + -w + "px " + -y + "px",
        threshold: nt(0, Vn(1, a)) || 1,
      };
    let C = !0;
    function E(N) {
      const b = N[0].intersectionRatio;
      if (b !== a) {
        if (!C) return s();
        b
          ? s(!1, b)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      b === 1 && !ng(u, e.getBoundingClientRect()) && s(), (C = !1);
    }
    try {
      n = new IntersectionObserver(E, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, x);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function pE(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = ud(e),
    d = o || i ? [...(u ? Pi(u) : []), ...Pi(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, { passive: !0 }),
      i && y.addEventListener("resize", n);
  });
  const p = u && l ? fE(u, n) : null;
  let g = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((y) => {
      let [h] = y;
      h &&
        h.target === u &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var x;
          (x = m) == null || x.observe(t);
        }))),
        n();
    })),
    u && !a && m.observe(u),
    m.observe(t));
  let S,
    v = a ? Sr(e) : null;
  a && w();
  function w() {
    const y = Sr(e);
    v && !ng(v, y) && n(), (v = y), (S = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var y;
      d.forEach((h) => {
        o && h.removeEventListener("scroll", n),
          i && h.removeEventListener("resize", n);
      }),
        p == null || p(),
        (y = m) == null || y.disconnect(),
        (m = null),
        a && cancelAnimationFrame(S);
    }
  );
}
const hE = FC,
  mE = zC,
  vE = IC,
  gE = BC,
  yE = DC,
  ap = MC,
  xE = $C,
  wE = (e, t, n) => {
    const r = new Map(),
      o = { platform: dE, ...n },
      i = { ...o.platform, _c: r };
    return AC(e, t, { ...o, platform: i });
  };
var SE = typeof document < "u",
  CE = function () {},
  As = SE ? f.useLayoutEffect : CE;
function ul(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ul(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !ul(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function rg(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cp(e, t) {
  const n = rg(e);
  return Math.round(t * n) / n;
}
function Da(e) {
  const t = f.useRef(e);
  return (
    As(() => {
      t.current = e;
    }),
    t
  );
}
function EE(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, p] = f.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, m] = f.useState(r);
  ul(g, r) || m(r);
  const [S, v] = f.useState(null),
    [w, y] = f.useState(null),
    h = f.useCallback((k) => {
      k !== N.current && ((N.current = k), v(k));
    }, []),
    x = f.useCallback((k) => {
      k !== b.current && ((b.current = k), y(k));
    }, []),
    C = i || S,
    E = s || w,
    N = f.useRef(null),
    b = f.useRef(null),
    T = f.useRef(d),
    O = a != null,
    _ = Da(a),
    $ = Da(o),
    I = Da(u),
    W = f.useCallback(() => {
      if (!N.current || !b.current) return;
      const k = { placement: t, strategy: n, middleware: g };
      $.current && (k.platform = $.current),
        wE(N.current, b.current, k).then((j) => {
          const D = { ...j, isPositioned: I.current !== !1 };
          M.current &&
            !ul(T.current, D) &&
            ((T.current = D),
            Pr.flushSync(() => {
              p(D);
            }));
        });
    }, [g, t, n, $, I]);
  As(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), p((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const M = f.useRef(!1);
  As(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    As(() => {
      if ((C && (N.current = C), E && (b.current = E), C && E)) {
        if (_.current) return _.current(C, E, W);
        W();
      }
    }, [C, E, W, _, O]);
  const H = f.useMemo(
      () => ({ reference: N, floating: b, setReference: h, setFloating: x }),
      [h, x]
    ),
    z = f.useMemo(() => ({ reference: C, floating: E }), [C, E]),
    U = f.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!z.floating) return k;
      const j = cp(z.floating, d.x),
        D = cp(z.floating, d.y);
      return l
        ? {
            ...k,
            transform: "translate(" + j + "px, " + D + "px)",
            ...(rg(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: j, top: D };
    }, [n, l, z.floating, d.x, d.y]);
  return f.useMemo(
    () => ({ ...d, update: W, refs: H, elements: z, floatingStyles: U }),
    [d, W, H, z, U]
  );
}
const bE = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ap({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? ap({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  NE = (e, t) => ({ ...hE(e), options: [e, t] }),
  kE = (e, t) => ({ ...mE(e), options: [e, t] }),
  PE = (e, t) => ({ ...xE(e), options: [e, t] }),
  jE = (e, t) => ({ ...vE(e), options: [e, t] }),
  TE = (e, t) => ({ ...gE(e), options: [e, t] }),
  RE = (e, t) => ({ ...yE(e), options: [e, t] }),
  OE = (e, t) => ({ ...bE(e), options: [e, t] });
var _E = "Arrow",
  og = f.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return c.jsx(ee.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
og.displayName = _E;
var AE = og;
function ME(e) {
  const [t, n] = f.useState(void 0);
  return (
    Me(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var fd = "Popper",
  [ig, zl] = ko(fd),
  [IE, sg] = ig(fd),
  lg = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = f.useState(null);
    return c.jsx(IE, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
lg.displayName = fd;
var ag = "PopperAnchor",
  cg = f.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = sg(ag, n),
      s = f.useRef(null),
      l = he(t, s);
    return (
      f.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : c.jsx(ee.div, { ...o, ref: l })
    );
  });
cg.displayName = ag;
var pd = "PopperContent",
  [DE, LE] = ig(pd),
  ug = f.forwardRef((e, t) => {
    var L, ie, Se, oe, J, ne;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: p = "partial",
        hideWhenDetached: g = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: S,
        ...v
      } = e,
      w = sg(pd, n),
      [y, h] = f.useState(null),
      x = he(t, (De) => h(De)),
      [C, E] = f.useState(null),
      N = ME(C),
      b = (N == null ? void 0 : N.width) ?? 0,
      T = (N == null ? void 0 : N.height) ?? 0,
      O = r + (i !== "center" ? "-" + i : ""),
      _ =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      $ = Array.isArray(u) ? u : [u],
      I = $.length > 0,
      W = { padding: _, boundary: $.filter(zE), altBoundary: I },
      {
        refs: M,
        floatingStyles: H,
        placement: z,
        isPositioned: U,
        middlewareData: k,
      } = EE({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...De) =>
          pE(...De, { animationFrame: m === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          NE({ mainAxis: o + T, alignmentAxis: s }),
          a &&
            kE({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? PE() : void 0,
              ...W,
            }),
          a && jE({ ...W }),
          TE({
            ...W,
            apply: ({
              elements: De,
              rects: ct,
              availableWidth: Xn,
              availableHeight: pn,
            }) => {
              const { width: Zn, height: Io } = ct.reference,
                jr = De.floating.style;
              jr.setProperty("--radix-popper-available-width", `${Xn}px`),
                jr.setProperty("--radix-popper-available-height", `${pn}px`),
                jr.setProperty("--radix-popper-anchor-width", `${Zn}px`),
                jr.setProperty("--radix-popper-anchor-height", `${Io}px`);
            },
          }),
          C && OE({ element: C, padding: l }),
          $E({ arrowWidth: b, arrowHeight: T }),
          g && RE({ strategy: "referenceHidden", ...W }),
        ],
      }),
      [j, D] = pg(z),
      V = Mt(S);
    Me(() => {
      U && (V == null || V());
    }, [U, V]);
    const B = (L = k.arrow) == null ? void 0 : L.x,
      Y = (ie = k.arrow) == null ? void 0 : ie.y,
      Q = ((Se = k.arrow) == null ? void 0 : Se.centerOffset) !== 0,
      [ue, we] = f.useState();
    return (
      Me(() => {
        y && we(window.getComputedStyle(y).zIndex);
      }, [y]),
      c.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: U ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ue,
          "--radix-popper-transform-origin": [
            (oe = k.transformOrigin) == null ? void 0 : oe.x,
            (J = k.transformOrigin) == null ? void 0 : J.y,
          ].join(" "),
          ...(((ne = k.hide) == null ? void 0 : ne.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(DE, {
          scope: n,
          placedSide: j,
          onArrowChange: E,
          arrowX: B,
          arrowY: Y,
          shouldHideArrow: Q,
          children: c.jsx(ee.div, {
            "data-side": j,
            "data-align": D,
            ...v,
            ref: x,
            style: { ...v.style, animation: U ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ug.displayName = pd;
var dg = "PopperArrow",
  FE = { top: "bottom", right: "left", bottom: "top", left: "right" },
  fg = f.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = LE(dg, r),
      s = FE[i.placedSide];
    return c.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(AE, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
fg.displayName = dg;
function zE(e) {
  return e !== null;
}
var $E = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, y, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, d] = pg(n),
      p = { start: "0%", center: "50%", end: "100%" }[d],
      g = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + l / 2,
      m = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
    let S = "",
      v = "";
    return (
      u === "bottom"
        ? ((S = s ? p : `${g}px`), (v = `${-a}px`))
        : u === "top"
        ? ((S = s ? p : `${g}px`), (v = `${r.floating.height + a}px`))
        : u === "right"
        ? ((S = `${-a}px`), (v = s ? p : `${m}px`))
        : u === "left" &&
          ((S = `${r.floating.width + a}px`), (v = s ? p : `${m}px`)),
      { data: { x: S, y: v } }
    );
  },
});
function pg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var BE = lg,
  hg = cg,
  mg = ug,
  vg = fg,
  [$l, $2] = ko("Tooltip", [zl]),
  hd = zl(),
  gg = "TooltipProvider",
  UE = 700,
  up = "tooltip.open",
  [WE, yg] = $l(gg),
  xg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = UE,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = f.useRef(!0),
      l = f.useRef(!1),
      a = f.useRef(0);
    return (
      f.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      c.jsx(WE, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: f.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: f.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: f.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
xg.displayName = gg;
var wg = "Tooltip",
  [B2, Bl] = $l(wg),
  Kc = "TooltipTrigger",
  VE = f.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Bl(Kc, n),
      i = yg(Kc, n),
      s = hd(n),
      l = f.useRef(null),
      a = he(t, l, o.onTriggerChange),
      u = f.useRef(!1),
      d = f.useRef(!1),
      p = f.useCallback(() => (u.current = !1), []);
    return (
      f.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      c.jsx(hg, {
        asChild: !0,
        ...s,
        children: c.jsx(ee.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: X(e.onPointerMove, (g) => {
            g.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: X(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: X(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 });
          }),
          onFocus: X(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: X(e.onBlur, o.onClose),
          onClick: X(e.onClick, o.onClose),
        }),
      })
    );
  });
VE.displayName = Kc;
var HE = "TooltipPortal",
  [U2, QE] = $l(HE, { forceMount: void 0 }),
  Co = "TooltipContent",
  Sg = f.forwardRef((e, t) => {
    const n = QE(Co, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Bl(Co, e.__scopeTooltip);
    return c.jsx(Po, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? c.jsx(Cg, { side: o, ...i, ref: t })
        : c.jsx(KE, { side: o, ...i, ref: t }),
    });
  }),
  KE = f.forwardRef((e, t) => {
    const n = Bl(Co, e.__scopeTooltip),
      r = yg(Co, e.__scopeTooltip),
      o = f.useRef(null),
      i = he(t, o),
      [s, l] = f.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: p } = r,
      g = f.useCallback(() => {
        l(null), p(!1);
      }, [p]),
      m = f.useCallback(
        (S, v) => {
          const w = S.currentTarget,
            y = { x: S.clientX, y: S.clientY },
            h = ZE(y, w.getBoundingClientRect()),
            x = JE(y, h),
            C = eb(v.getBoundingClientRect()),
            E = nb([...x, ...C]);
          l(E), p(!0);
        },
        [p]
      );
    return (
      f.useEffect(() => () => g(), [g]),
      f.useEffect(() => {
        if (a && d) {
          const S = (w) => m(w, d),
            v = (w) => m(w, a);
          return (
            a.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", v),
            () => {
              a.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", v);
            }
          );
        }
      }, [a, d, m, g]),
      f.useEffect(() => {
        if (s) {
          const S = (v) => {
            const w = v.target,
              y = { x: v.clientX, y: v.clientY },
              h =
                (a == null ? void 0 : a.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              x = !tb(y, s);
            h ? g() : x && (g(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [a, d, s, u, g]),
      c.jsx(Cg, { ...e, ref: i })
    );
  }),
  [GE, YE] = $l(wg, { isInside: !1 }),
  qE = o1("TooltipContent"),
  Cg = f.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = Bl(Co, n),
      u = hd(n),
      { onClose: d } = a;
    return (
      f.useEffect(
        () => (
          document.addEventListener(up, d),
          () => document.removeEventListener(up, d)
        ),
        [d]
      ),
      f.useEffect(() => {
        if (a.trigger) {
          const p = (g) => {
            const m = g.target;
            m != null && m.contains(a.trigger) && d();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [a.trigger, d]),
      c.jsx(zi, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: c.jsxs(mg, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(qE, { children: r }),
            c.jsx(GE, {
              scope: n,
              isInside: !0,
              children: c.jsx(k1, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Sg.displayName = Co;
var Eg = "TooltipArrow",
  XE = f.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = hd(n);
    return YE(Eg, n).isInside ? null : c.jsx(vg, { ...o, ...r, ref: t });
  });
XE.displayName = Eg;
function ZE(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function JE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function eb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function tb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i],
      a = t[s],
      u = l.x,
      d = l.y,
      p = a.x,
      g = a.y;
    d > r != g > r && n < ((p - u) * (r - d)) / (g - d) + u && (o = !o);
  }
  return o;
}
function nb(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    rb(t)
  );
}
function rb(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var ob = xg,
  bg = Sg;
const ib = ob,
  sb = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(bg, {
      ref: r,
      sideOffset: t,
      className: ae(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
sb.displayName = bg.displayName;
var Ul = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Wl = typeof window > "u" || "Deno" in globalThis;
function Nt() {}
function lb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ab(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function cb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Gc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ub(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== md(s, t.options)) return !1;
    } else if (!Ti(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function fp(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ji(t.options.mutationKey) !== ji(i)) return !1;
    } else if (!Ti(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function md(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ji)(e);
}
function ji(e) {
  return JSON.stringify(e, (t, n) =>
    Yc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Ti(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => Ti(e[n], t[n]))
    : !1;
}
function Ng(e, t) {
  if (e === t) return e;
  const n = pp(e) && pp(t);
  if (n || (Yc(e) && Yc(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let d = 0; d < s; d++) {
      const p = n ? d : i[d];
      ((!n && a.has(p)) || n) && e[p] === void 0 && t[p] === void 0
        ? ((l[p] = void 0), u++)
        : ((l[p] = Ng(e[p], t[p])), l[p] === e[p] && e[p] !== void 0 && u++);
    }
    return o === s && u === o ? e : l;
  }
  return t;
}
function pp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Yc(e) {
  if (!hp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !hp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function hp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function db(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function fb(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Ng(e, t)
    : t;
}
function pb(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function hb(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var vd = Symbol();
function kg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === vd
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var lr,
  kn,
  oo,
  Dp,
  mb =
    ((Dp = class extends Ul {
      constructor() {
        super();
        re(this, lr);
        re(this, kn);
        re(this, oo);
        G(this, oo, (t) => {
          if (!Wl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, kn) || this.setEventListener(P(this, oo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, kn)) == null || t.call(this), G(this, kn, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, oo, t),
          (n = P(this, kn)) == null || n.call(this),
          G(
            this,
            kn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, lr) !== t && (G(this, lr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, lr) == "boolean"
          ? P(this, lr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (lr = new WeakMap()),
    (kn = new WeakMap()),
    (oo = new WeakMap()),
    Dp),
  Pg = new mb(),
  io,
  Pn,
  so,
  Lp,
  vb =
    ((Lp = class extends Ul {
      constructor() {
        super();
        re(this, io, !0);
        re(this, Pn);
        re(this, so);
        G(this, so, (t) => {
          if (!Wl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Pn) || this.setEventListener(P(this, so));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Pn)) == null || t.call(this), G(this, Pn, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, so, t),
          (n = P(this, Pn)) == null || n.call(this),
          G(this, Pn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, io) !== t &&
          (G(this, io, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, io);
      }
    }),
    (io = new WeakMap()),
    (Pn = new WeakMap()),
    (so = new WeakMap()),
    Lp),
  dl = new vb();
function gb() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function yb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function jg(e) {
  return (e ?? "online") === "online" ? dl.isOnline() : !0;
}
var Tg = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function La(e) {
  return e instanceof Tg;
}
function Rg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = gb(),
    s = (v) => {
      var w;
      r || (g(new Tg(v)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Pg.isFocused() &&
      (e.networkMode === "always" || dl.isOnline()) &&
      e.canRun(),
    d = () => jg(e.networkMode) && e.canRun(),
    p = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    g = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    m = () =>
      new Promise((v) => {
        var w;
        (o = (y) => {
          (r || u()) && v(y);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (o = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    S = () => {
      if (r) return;
      let v;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        v = w ?? e.fn();
      } catch (y) {
        v = Promise.reject(y);
      }
      Promise.resolve(v)
        .then(p)
        .catch((y) => {
          var N;
          if (r) return;
          const h = e.retry ?? (Wl ? 0 : 3),
            x = e.retryDelay ?? yb,
            C = typeof x == "function" ? x(n, y) : x,
            E =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, y));
          if (t || !E) {
            g(y);
            return;
          }
          n++,
            (N = e.onFail) == null || N.call(e, n, y),
            db(C)
              .then(() => (u() ? void 0 : m()))
              .then(() => {
                t ? g(y) : S();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: d,
    start: () => (d() ? S() : m().then(S), i),
  };
}
var xb = (e) => setTimeout(e, 0);
function wb() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = xb;
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var He = wb(),
  ar,
  Fp,
  Og =
    ((Fp = class {
      constructor() {
        re(this, ar);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          ab(this.gcTime) &&
            G(
              this,
              ar,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Wl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        P(this, ar) && (clearTimeout(P(this, ar)), G(this, ar, void 0));
      }
    }),
    (ar = new WeakMap()),
    Fp),
  lo,
  cr,
  dt,
  ur,
  $e,
  _i,
  dr,
  kt,
  Zt,
  zp,
  Sb =
    ((zp = class extends Og {
      constructor(t) {
        super();
        re(this, kt);
        re(this, lo);
        re(this, cr);
        re(this, dt);
        re(this, ur);
        re(this, $e);
        re(this, _i);
        re(this, dr);
        G(this, dr, !1),
          G(this, _i, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          G(this, ur, t.client),
          G(this, dt, P(this, ur).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          G(this, lo, Eb(this.options)),
          (this.state = t.state ?? P(this, lo)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, $e)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...P(this, _i), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, dt).remove(this);
      }
      setData(t, n) {
        const r = fb(this.state.data, t, this.options);
        return (
          Le(this, kt, Zt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Le(this, kt, Zt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, $e)) == null ? void 0 : r.promise;
        return (
          (o = P(this, $e)) == null || o.cancel(t),
          n ? n.then(Nt).catch(Nt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, lo));
      }
      isActive() {
        return this.observers.some((t) => ub(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === vd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Gc(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !cb(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, $e)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, $e)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, dt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, $e) &&
              (P(this, dr)
                ? P(this, $e).cancel({ revert: !0 })
                : P(this, $e).cancelRetry()),
            this.scheduleGc()),
          P(this, dt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Le(this, kt, Zt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, d, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, $e))
            return P(this, $e).continueRetry(), P(this, $e).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const g = this.observers.find((m) => m.options.queryFn);
          g && this.setOptions(g.options);
        }
        const r = new AbortController(),
          o = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (G(this, dr, !0), r.signal),
            });
          },
          i = () => {
            const g = kg(this.options, n),
              S = (() => {
                const v = {
                  client: P(this, ur),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(v), v;
              })();
            return (
              G(this, dr, !1),
              this.options.persister ? this.options.persister(g, S, this) : g(S)
            );
          },
          l = (() => {
            const g = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, ur),
              state: this.state,
              fetchFn: i,
            };
            return o(g), g;
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this),
          G(this, cr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
            Le(this, kt, Zt).call(this, {
              type: "fetch",
              meta: (p = l.fetchOptions) == null ? void 0 : p.meta,
            });
        const a = (g) => {
          var m, S, v, w;
          (La(g) && g.silent) ||
            Le(this, kt, Zt).call(this, { type: "error", error: g }),
            La(g) ||
              ((S = (m = P(this, dt).config).onError) == null ||
                S.call(m, g, this),
              (w = (v = P(this, dt).config).onSettled) == null ||
                w.call(v, this.state.data, g, this)),
            this.scheduleGc();
        };
        return (
          G(
            this,
            $e,
            Rg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (g) => {
                var m, S, v, w;
                if (g === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(g);
                } catch (y) {
                  a(y);
                  return;
                }
                (S = (m = P(this, dt).config).onSuccess) == null ||
                  S.call(m, g, this),
                  (w = (v = P(this, dt).config).onSettled) == null ||
                    w.call(v, g, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (g, m) => {
                Le(this, kt, Zt).call(this, {
                  type: "failed",
                  failureCount: g,
                  error: m,
                });
              },
              onPause: () => {
                Le(this, kt, Zt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Le(this, kt, Zt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            })
          ),
          P(this, $e).start()
        );
      }
    }),
    (lo = new WeakMap()),
    (cr = new WeakMap()),
    (dt = new WeakMap()),
    (ur = new WeakMap()),
    ($e = new WeakMap()),
    (_i = new WeakMap()),
    (dr = new WeakMap()),
    (kt = new WeakSet()),
    (Zt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Cb(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              G(this, cr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return La(o) && o.revert && P(this, cr)
              ? { ...P(this, cr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        He.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, dt).notify({ query: this, type: "updated", action: t });
        });
    }),
    zp);
function Cb(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: jg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Eb(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var $t,
  $p,
  bb =
    (($p = class extends Ul {
      constructor(t = {}) {
        super();
        re(this, $t);
        (this.config = t), G(this, $t, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? md(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new Sb({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        P(this, $t).has(t.queryHash) ||
          (P(this, $t).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, $t).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, $t).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, $t).get(t);
      }
      getAll() {
        return [...P(this, $t).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => dp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => dp(t, r)) : n;
      }
      notify(t) {
        He.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    ($t = new WeakMap()),
    $p),
  Bt,
  We,
  fr,
  Ut,
  wn,
  Bp,
  Nb =
    ((Bp = class extends Og {
      constructor(t) {
        super();
        re(this, Ut);
        re(this, Bt);
        re(this, We);
        re(this, fr);
        (this.mutationId = t.mutationId),
          G(this, We, t.mutationCache),
          G(this, Bt, []),
          (this.state = t.state || kb()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, Bt).includes(t) ||
          (P(this, Bt).push(t),
          this.clearGcTimeout(),
          P(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        G(
          this,
          Bt,
          P(this, Bt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        P(this, Bt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, We).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, fr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, l, a, u, d, p, g, m, S, v, w, y, h, x, C, E, N, b, T;
        const n = () => {
          Le(this, Ut, wn).call(this, { type: "continue" });
        };
        G(
          this,
          fr,
          Rg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, _) => {
              Le(this, Ut, wn).call(this, {
                type: "failed",
                failureCount: O,
                error: _,
              });
            },
            onPause: () => {
              Le(this, Ut, wn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, We).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !P(this, fr).canStart();
        try {
          if (r) n();
          else {
            Le(this, Ut, wn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = P(this, We).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const _ = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            _ !== this.state.context &&
              Le(this, Ut, wn).call(this, {
                type: "pending",
                context: _,
                variables: t,
                isPaused: o,
              });
          }
          const O = await P(this, fr).start();
          return (
            await ((d = (u = P(this, We).config).onSuccess) == null
              ? void 0
              : d.call(u, O, t, this.state.context, this)),
            await ((g = (p = this.options).onSuccess) == null
              ? void 0
              : g.call(p, O, t, this.state.context)),
            await ((S = (m = P(this, We).config).onSettled) == null
              ? void 0
              : S.call(
                  m,
                  O,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (v = this.options).onSettled) == null
              ? void 0
              : w.call(v, O, null, t, this.state.context)),
            Le(this, Ut, wn).call(this, { type: "success", data: O }),
            O
          );
        } catch (O) {
          try {
            throw (
              (await ((h = (y = P(this, We).config).onError) == null
                ? void 0
                : h.call(y, O, t, this.state.context, this)),
              await ((C = (x = this.options).onError) == null
                ? void 0
                : C.call(x, O, t, this.state.context)),
              await ((N = (E = P(this, We).config).onSettled) == null
                ? void 0
                : N.call(
                    E,
                    void 0,
                    O,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((T = (b = this.options).onSettled) == null
                ? void 0
                : T.call(b, void 0, O, t, this.state.context)),
              O)
            );
          } finally {
            Le(this, Ut, wn).call(this, { type: "error", error: O });
          }
        } finally {
          P(this, We).runNext(this);
        }
      }
    }),
    (Bt = new WeakMap()),
    (We = new WeakMap()),
    (fr = new WeakMap()),
    (Ut = new WeakSet()),
    (wn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        He.batch(() => {
          P(this, Bt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, We).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Bp);
function kb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var tn,
  Pt,
  Ai,
  Up,
  Pb =
    ((Up = class extends Ul {
      constructor(t = {}) {
        super();
        re(this, tn);
        re(this, Pt);
        re(this, Ai);
        (this.config = t),
          G(this, tn, new Set()),
          G(this, Pt, new Map()),
          G(this, Ai, 0);
      }
      build(t, n, r) {
        const o = new Nb({
          mutationCache: this,
          mutationId: ++Qi(this, Ai)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        P(this, tn).add(t);
        const n = hs(t);
        if (typeof n == "string") {
          const r = P(this, Pt).get(n);
          r ? r.push(t) : P(this, Pt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, tn).delete(t)) {
          const n = hs(t);
          if (typeof n == "string") {
            const r = P(this, Pt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, Pt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = hs(t);
        if (typeof n == "string") {
          const r = P(this, Pt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = hs(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, Pt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        He.batch(() => {
          P(this, tn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, tn).clear(),
            P(this, Pt).clear();
        });
      }
      getAll() {
        return Array.from(P(this, tn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => fp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => fp(t, n));
      }
      notify(t) {
        He.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return He.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Nt)))
        );
      }
    }),
    (tn = new WeakMap()),
    (Pt = new WeakMap()),
    (Ai = new WeakMap()),
    Up);
function hs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function mp(e) {
  return {
    onFetch: (t, n) => {
      var d, p, g, m, S;
      const r = t.options,
        o =
          (g =
            (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : g.direction,
        i = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let v = !1;
        const w = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          y = kg(t.options, t.fetchOptions),
          h = async (x, C, E) => {
            if (v) return Promise.reject();
            if (C == null && x.pages.length) return Promise.resolve(x);
            const b = (() => {
                const $ = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: C,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w($), $;
              })(),
              T = await y(b),
              { maxPages: O } = t.options,
              _ = E ? hb : pb;
            return {
              pages: _(x.pages, T, O),
              pageParams: _(x.pageParams, C, O),
            };
          };
        if (o && i.length) {
          const x = o === "backward",
            C = x ? jb : vp,
            E = { pages: i, pageParams: s },
            N = C(r, E);
          l = await h(E, N, x);
        } else {
          const x = e ?? i.length;
          do {
            const C = a === 0 ? s[0] ?? r.initialPageParam : vp(r, l);
            if (a > 0 && C == null) break;
            (l = await h(l, C)), a++;
          } while (a < x);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, w;
            return (w = (v = t.options).persister) == null
              ? void 0
              : w.call(
                  v,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function vp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function jb(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Ce,
  jn,
  Tn,
  ao,
  co,
  Rn,
  uo,
  fo,
  Wp,
  Tb =
    ((Wp = class {
      constructor(e = {}) {
        re(this, Ce);
        re(this, jn);
        re(this, Tn);
        re(this, ao);
        re(this, co);
        re(this, Rn);
        re(this, uo);
        re(this, fo);
        G(this, Ce, e.queryCache || new bb()),
          G(this, jn, e.mutationCache || new Pb()),
          G(this, Tn, e.defaultOptions || {}),
          G(this, ao, new Map()),
          G(this, co, new Map()),
          G(this, Rn, 0);
      }
      mount() {
        Qi(this, Rn)._++,
          P(this, Rn) === 1 &&
            (G(
              this,
              uo,
              Pg.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Ce).onFocus());
              })
            ),
            G(
              this,
              fo,
              dl.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Ce).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Qi(this, Rn)._--,
          P(this, Rn) === 0 &&
            ((e = P(this, uo)) == null || e.call(this),
            G(this, uo, void 0),
            (t = P(this, fo)) == null || t.call(this),
            G(this, fo, void 0));
      }
      isFetching(e) {
        return P(this, Ce).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, jn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Ce).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, Ce).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Gc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, Ce)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, Ce).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = lb(t, i);
        if (s !== void 0)
          return P(this, Ce)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return He.batch(() =>
          P(this, Ce)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Ce).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, Ce);
        He.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, Ce);
        return He.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = He.batch(() =>
            P(this, Ce)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(Nt).catch(Nt);
      }
      invalidateQueries(e, t = {}) {
        return He.batch(
          () => (
            P(this, Ce)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = He.batch(() =>
            P(this, Ce)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Nt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(Nt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, Ce).build(this, t);
        return n.isStaleByTime(Gc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = mp(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = mp(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return dl.isOnline()
          ? P(this, jn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, Ce);
      }
      getMutationCache() {
        return P(this, jn);
      }
      getDefaultOptions() {
        return P(this, Tn);
      }
      setDefaultOptions(e) {
        G(this, Tn, e);
      }
      setQueryDefaults(e, t) {
        P(this, ao).set(ji(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, ao).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ti(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, co).set(ji(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, co).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ti(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, Tn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = md(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === vd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, Tn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, Ce).clear(), P(this, jn).clear();
      }
    }),
    (Ce = new WeakMap()),
    (jn = new WeakMap()),
    (Tn = new WeakMap()),
    (ao = new WeakMap()),
    (co = new WeakMap()),
    (Rn = new WeakMap()),
    (uo = new WeakMap()),
    (fo = new WeakMap()),
    Wp),
  Rb = f.createContext(void 0),
  Ob = ({ client: e, children: t }) => (
    f.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    c.jsx(Rb.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ri.apply(this, arguments)
  );
}
var An;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(An || (An = {}));
const gp = "popstate";
function _b(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return qc(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Ag(o);
  }
  return Mb(t, n, null, e);
}
function je(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function _g(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ab() {
  return Math.random().toString(36).substr(2, 8);
}
function yp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function qc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ri(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Oo(t) : t,
      { state: n, key: (t && t.key) || r || Ab() }
    )
  );
}
function Ag(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Oo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Mb(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = An.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), s.replaceState(Ri({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    l = An.Pop;
    let w = d(),
      y = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: v.location, delta: y });
  }
  function g(w, y) {
    l = An.Push;
    let h = qc(v.location, w, y);
    u = d() + 1;
    let x = yp(h, u),
      C = v.createHref(h);
    try {
      s.pushState(x, "", C);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(C);
    }
    i && a && a({ action: l, location: v.location, delta: 1 });
  }
  function m(w, y) {
    l = An.Replace;
    let h = qc(v.location, w, y);
    u = d();
    let x = yp(h, u),
      C = v.createHref(h);
    s.replaceState(x, "", C),
      i && a && a({ action: l, location: v.location, delta: 0 });
  }
  function S(w) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof w == "string" ? w : Ag(w);
    return (
      (h = h.replace(/ $/, "%20")),
      je(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, y)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(gp, p),
        (a = w),
        () => {
          o.removeEventListener(gp, p), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: S,
    encodeLocation(w) {
      let y = S(w);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: g,
    replace: m,
    go(w) {
      return s.go(w);
    },
  };
  return v;
}
var xp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xp || (xp = {}));
function Ib(e, t, n) {
  return n === void 0 && (n = "/"), Db(e, t, n, !1);
}
function Db(e, t, n, r) {
  let o = typeof t == "string" ? Oo(t) : t,
    i = Dg(o.pathname || "/", n);
  if (i == null) return null;
  let s = Mg(e);
  Lb(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = Gb(i);
    l = Qb(s[a], u, r);
  }
  return l;
}
function Mg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (je(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = mr([r, a.relativePath]),
      d = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (je(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Mg(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Vb(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of Ig(i.path)) o(i, s, a);
    }),
    t
  );
}
function Ig(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Ig(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Lb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Hb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Fb = /^:[\w-]+$/,
  zb = 3,
  $b = 2,
  Bb = 1,
  Ub = 10,
  Wb = -2,
  wp = (e) => e === "*";
function Vb(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(wp) && (r += Wb),
    t && (r += $b),
    n
      .filter((o) => !wp(o))
      .reduce((o, i) => o + (Fb.test(i) ? zb : i === "" ? Bb : Ub), r)
  );
}
function Hb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Qb(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      p = Sp(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      g = a.route;
    if (
      (!p &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Sp(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d
        )),
      !p)
    )
      return null;
    Object.assign(o, p.params),
      s.push({
        params: o,
        pathname: mr([i, p.pathname]),
        pathnameBase: eN(mr([i, p.pathnameBase])),
        route: g,
      }),
      p.pathnameBase !== "/" && (i = mr([i, p.pathnameBase]));
  }
  return s;
}
function Sp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Kb(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      let { paramName: g, isOptional: m } = d;
      if (g === "*") {
        let v = l[p] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const S = l[p];
      return (
        m && !S ? (u[g] = void 0) : (u[g] = (S || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function Kb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    _g(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Gb(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      _g(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Dg(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Oo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : qb(n, t)) : t,
    search: tN(r),
    hash: nN(o),
  };
}
function qb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Fa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Xb(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Zb(e, t) {
  let n = Xb(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Jb(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Oo(e))
    : ((o = Ri({}, e)),
      je(
        !o.pathname || !o.pathname.includes("?"),
        Fa("?", "pathname", "search", o)
      ),
      je(
        !o.pathname || !o.pathname.includes("#"),
        Fa("#", "pathname", "hash", o)
      ),
      je(!o.search || !o.search.includes("#"), Fa("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let p = t.length - 1;
    if (!r && s.startsWith("..")) {
      let g = s.split("/");
      for (; g[0] === ".."; ) g.shift(), (p -= 1);
      o.pathname = g.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let a = Yb(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const mr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  eN = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  tN = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  nN = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function rN(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Lg = ["post", "put", "patch", "delete"];
new Set(Lg);
const oN = ["get", ...Lg];
new Set(oN);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oi() {
  return (
    (Oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oi.apply(this, arguments)
  );
}
const gd = f.createContext(null),
  iN = f.createContext(null),
  Vl = f.createContext(null),
  Hl = f.createContext(null),
  _o = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fg = f.createContext(null);
function Ql() {
  return f.useContext(Hl) != null;
}
function yd() {
  return Ql() || je(!1), f.useContext(Hl).location;
}
function zg(e) {
  f.useContext(Vl).static || f.useLayoutEffect(e);
}
function Wi() {
  let { isDataRoute: e } = f.useContext(_o);
  return e ? yN() : sN();
}
function sN() {
  Ql() || je(!1);
  let e = f.useContext(gd),
    { basename: t, future: n, navigator: r } = f.useContext(Vl),
    { matches: o } = f.useContext(_o),
    { pathname: i } = yd(),
    s = JSON.stringify(Zb(o, n.v7_relativeSplatPath)),
    l = f.useRef(!1);
  return (
    zg(() => {
      l.current = !0;
    }),
    f.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let p = Jb(u, JSON.parse(s), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : mr([t, p.pathname])),
          (d.replace ? r.replace : r.push)(p, d.state, d);
      },
      [t, r, s, i, e]
    )
  );
}
function lN(e, t) {
  return aN(e, t);
}
function aN(e, t, n, r) {
  Ql() || je(!1);
  let { navigator: o } = f.useContext(Vl),
    { matches: i } = f.useContext(_o),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = yd(),
    d;
  if (t) {
    var p;
    let w = typeof t == "string" ? Oo(t) : t;
    a === "/" || ((p = w.pathname) != null && p.startsWith(a)) || je(!1),
      (d = w);
  } else d = u;
  let g = d.pathname || "/",
    m = g;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    m = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let S = Ib(e, { pathname: m }),
    v = pN(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: mr([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : mr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? f.createElement(
        Hl.Provider,
        {
          value: {
            location: Oi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: An.Pop,
          },
        },
        v
      )
    : v;
}
function cN() {
  let e = gN(),
    t = rN(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return f.createElement(
    f.Fragment,
    null,
    f.createElement("h2", null, "Unexpected Application Error!"),
    f.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? f.createElement("pre", { style: o }, n) : null,
    null
  );
}
const uN = f.createElement(cN, null);
class dN extends f.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? f.createElement(
          _o.Provider,
          { value: this.props.routeContext },
          f.createElement(Fg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function fN(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = f.useContext(gd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    f.createElement(_o.Provider, { value: t }, r)
  );
}
function pN(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = s.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0
    );
    d >= 0 || je(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let p = s[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d),
        p.route.id)
      ) {
        let { loaderData: g, errors: m } = n,
          S =
            p.route.loader &&
            g[p.route.id] === void 0 &&
            (!m || m[p.route.id] === void 0);
        if (p.route.lazy || S) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, p, g) => {
    let m,
      S = !1,
      v = null,
      w = null;
    n &&
      ((m = l && p.route.id ? l[p.route.id] : void 0),
      (v = p.route.errorElement || uN),
      a &&
        (u < 0 && g === 0
          ? ((S = !0), (w = null))
          : u === g &&
            ((S = !0), (w = p.route.hydrateFallbackElement || null))));
    let y = t.concat(s.slice(0, g + 1)),
      h = () => {
        let x;
        return (
          m
            ? (x = v)
            : S
            ? (x = w)
            : p.route.Component
            ? (x = f.createElement(p.route.Component, null))
            : p.route.element
            ? (x = p.route.element)
            : (x = d),
          f.createElement(fN, {
            match: p,
            routeContext: { outlet: d, matches: y, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || g === 0)
      ? f.createElement(dN, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: m,
          children: h(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var $g = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })($g || {}),
  fl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(fl || {});
function hN(e) {
  let t = f.useContext(gd);
  return t || je(!1), t;
}
function mN(e) {
  let t = f.useContext(iN);
  return t || je(!1), t;
}
function vN(e) {
  let t = f.useContext(_o);
  return t || je(!1), t;
}
function Bg(e) {
  let t = vN(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || je(!1), n.route.id;
}
function gN() {
  var e;
  let t = f.useContext(Fg),
    n = mN(fl.UseRouteError),
    r = Bg(fl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function yN() {
  let { router: e } = hN($g.UseNavigateStable),
    t = Bg(fl.UseNavigateStable),
    n = f.useRef(!1);
  return (
    zg(() => {
      n.current = !0;
    }),
    f.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Oi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function xN(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function rr(e) {
  je(!1);
}
function wN(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = An.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  Ql() && je(!1);
  let a = t.replace(/^\/*/, "/"),
    u = f.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: Oi({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = Oo(r));
  let {
      pathname: d = "/",
      search: p = "",
      hash: g = "",
      state: m = null,
      key: S = "default",
    } = r,
    v = f.useMemo(() => {
      let w = Dg(d, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: g, state: m, key: S },
            navigationType: o,
          };
    }, [a, d, p, g, m, S, o]);
  return v == null
    ? null
    : f.createElement(
        Vl.Provider,
        { value: u },
        f.createElement(Hl.Provider, { children: n, value: v })
      );
}
function SN(e) {
  let { children: t, location: n } = e;
  return lN(Xc(t), n);
}
new Promise(() => {});
function Xc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    f.Children.forEach(e, (r, o) => {
      if (!f.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === f.Fragment) {
        n.push.apply(n, Xc(r.props.children, i));
        return;
      }
      r.type !== rr && je(!1), !r.props.index || !r.props.children || je(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Xc(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const CN = "6";
try {
  window.__reactRouterVersion = CN;
} catch {}
const EN = "startTransition",
  Cp = cu[EN];
function bN(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = f.useRef();
  i.current == null && (i.current = _b({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = f.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = f.useCallback(
      (p) => {
        u && Cp ? Cp(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    f.useLayoutEffect(() => s.listen(d), [s, d]),
    f.useEffect(() => xN(r), [r]),
    f.createElement(wN, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
var Ep;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ep || (Ep = {}));
var bp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(bp || (bp = {}));
const NN = Ml(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
          hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105",
          accent:
            "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border-2 border-input bg-card hover:bg-secondary/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-12 px-6 py-3",
          sm: "h-10 rounded-lg px-4",
          lg: "h-14 rounded-lg px-10 text-base",
          xl: "h-16 rounded-lg px-12 text-lg",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  _t = f.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? n1 : "button";
      return c.jsx(s, {
        className: ae(NN({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
_t.displayName = "Button";
var za = "focusScope.autoFocusOnMount",
  $a = "focusScope.autoFocusOnUnmount",
  Np = { bubbles: !1, cancelable: !0 },
  kN = "FocusScope",
  xd = f.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [l, a] = f.useState(null),
      u = Mt(o),
      d = Mt(i),
      p = f.useRef(null),
      g = he(t, (v) => a(v)),
      m = f.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    f.useEffect(() => {
      if (r) {
        let v = function (x) {
            if (m.paused || !l) return;
            const C = x.target;
            l.contains(C) ? (p.current = C) : Sn(p.current, { select: !0 });
          },
          w = function (x) {
            if (m.paused || !l) return;
            const C = x.relatedTarget;
            C !== null && (l.contains(C) || Sn(p.current, { select: !0 }));
          },
          y = function (x) {
            if (document.activeElement === document.body)
              for (const E of x) E.removedNodes.length > 0 && Sn(l);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", w);
        const h = new MutationObserver(y);
        return (
          l && h.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", w),
              h.disconnect();
          }
        );
      }
    }, [r, l, m.paused]),
      f.useEffect(() => {
        if (l) {
          Pp.add(m);
          const v = document.activeElement;
          if (!l.contains(v)) {
            const y = new CustomEvent(za, Np);
            l.addEventListener(za, u),
              l.dispatchEvent(y),
              y.defaultPrevented ||
                (PN(_N(Ug(l)), { select: !0 }),
                document.activeElement === v && Sn(l));
          }
          return () => {
            l.removeEventListener(za, u),
              setTimeout(() => {
                const y = new CustomEvent($a, Np);
                l.addEventListener($a, d),
                  l.dispatchEvent(y),
                  y.defaultPrevented || Sn(v ?? document.body, { select: !0 }),
                  l.removeEventListener($a, d),
                  Pp.remove(m);
              }, 0);
          };
        }
      }, [l, u, d, m]);
    const S = f.useCallback(
      (v) => {
        if ((!n && !r) || m.paused) return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          y = document.activeElement;
        if (w && y) {
          const h = v.currentTarget,
            [x, C] = jN(h);
          x && C
            ? !v.shiftKey && y === C
              ? (v.preventDefault(), n && Sn(x, { select: !0 }))
              : v.shiftKey &&
                y === x &&
                (v.preventDefault(), n && Sn(C, { select: !0 }))
            : y === h && v.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return c.jsx(ee.div, { tabIndex: -1, ...s, ref: g, onKeyDown: S });
  });
xd.displayName = kN;
function PN(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Sn(r, { select: t }), document.activeElement !== n)) return;
}
function jN(e) {
  const t = Ug(e),
    n = kp(t, e),
    r = kp(t.reverse(), e);
  return [n, r];
}
function Ug(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function kp(e, t) {
  for (const n of e) if (!TN(n, { upTo: t })) return n;
}
function TN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function RN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && RN(e) && t && e.select();
  }
}
var Pp = ON();
function ON() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = jp(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = jp(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function jp(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function _N(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ba = 0;
function Wg() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Tp()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Tp()),
      Ba++,
      () => {
        Ba === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Ba--;
      }
    );
  }, []);
}
function Tp() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Vt = function () {
  return (
    (Vt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Vt.apply(this, arguments)
  );
};
function Vg(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function AN(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ms = "right-scroll-bar-position",
  Is = "width-before-scroll-bar",
  MN = "with-scroll-bars-hidden",
  IN = "--removed-body-scroll-bar-size";
function Ua(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function DN(e, t) {
  var n = f.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var LN = typeof window < "u" ? f.useLayoutEffect : f.useEffect,
  Rp = new WeakMap();
function FN(e, t) {
  var n = DN(null, function (r) {
    return e.forEach(function (o) {
      return Ua(o, r);
    });
  });
  return (
    LN(
      function () {
        var r = Rp.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (l) {
            i.has(l) || Ua(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || Ua(l, s);
            });
        }
        Rp.set(n, e);
      },
      [e]
    ),
    n
  );
}
function zN(e) {
  return e;
}
function $N(e, t) {
  t === void 0 && (t = zN);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (l) {
              return l !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (s = n);
        }
        var a = function () {
            var d = s;
            (s = []), d.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (d) {
              s.push(d), u();
            },
            filter: function (d) {
              return (s = s.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function BN(e) {
  e === void 0 && (e = {});
  var t = $N(null);
  return (t.options = Vt({ async: !0, ssr: !1 }, e)), t;
}
var Hg = function (e) {
  var t = e.sideCar,
    n = Vg(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return f.createElement(r, Vt({}, n));
};
Hg.isSideCarExport = !0;
function UN(e, t) {
  return e.useMedium(t), Hg;
}
var Qg = BN(),
  Wa = function () {},
  Kl = f.forwardRef(function (e, t) {
    var n = f.useRef(null),
      r = f.useState({
        onScrollCapture: Wa,
        onWheelCapture: Wa,
        onTouchMoveCapture: Wa,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      p = e.shards,
      g = e.sideCar,
      m = e.noRelative,
      S = e.noIsolation,
      v = e.inert,
      w = e.allowPinchZoom,
      y = e.as,
      h = y === void 0 ? "div" : y,
      x = e.gapMode,
      C = Vg(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      E = g,
      N = FN([n, t]),
      b = Vt(Vt({}, C), o);
    return f.createElement(
      f.Fragment,
      null,
      d &&
        f.createElement(E, {
          sideCar: Qg,
          removeScrollBar: u,
          shards: p,
          noRelative: m,
          noIsolation: S,
          inert: v,
          setCallbacks: i,
          allowPinchZoom: !!w,
          lockRef: n,
          gapMode: x,
        }),
      s
        ? f.cloneElement(f.Children.only(l), Vt(Vt({}, b), { ref: N }))
        : f.createElement(h, Vt({}, b, { className: a, ref: N }), l)
    );
  });
Kl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Kl.classNames = { fullWidth: Is, zeroRight: Ms };
var WN = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function VN() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = WN();
  return t && e.setAttribute("nonce", t), e;
}
function HN(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function QN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var KN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = VN()) && (HN(t, n), QN(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  GN = function () {
    var e = KN();
    return function (t, n) {
      f.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Kg = function () {
    var e = GN(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  YN = { left: 0, top: 0, right: 0, gap: 0 },
  Va = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  qN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Va(n), Va(r), Va(o)];
  },
  XN = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return YN;
    var t = qN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  ZN = Kg(),
  ro = "data-scroll-locked",
  JN = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          MN,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          ro,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Ms,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Is,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ms, " .")
        .concat(
          Ms,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Is, " .")
        .concat(
          Is,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          ro,
          `] {
    `
        )
        .concat(IN, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Op = function () {
    var e = parseInt(document.body.getAttribute(ro) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ek = function () {
    f.useEffect(function () {
      return (
        document.body.setAttribute(ro, (Op() + 1).toString()),
        function () {
          var e = Op() - 1;
          e <= 0
            ? document.body.removeAttribute(ro)
            : document.body.setAttribute(ro, e.toString());
        }
      );
    }, []);
  },
  tk = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    ek();
    var i = f.useMemo(
      function () {
        return XN(o);
      },
      [o]
    );
    return f.createElement(ZN, { styles: JN(i, !t, o, n ? "" : "!important") });
  },
  Zc = !1;
if (typeof window < "u")
  try {
    var ms = Object.defineProperty({}, "passive", {
      get: function () {
        return (Zc = !0), !0;
      },
    });
    window.addEventListener("test", ms, ms),
      window.removeEventListener("test", ms, ms);
  } catch {
    Zc = !1;
  }
var Ar = Zc ? { passive: !1 } : !1,
  nk = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Gg = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !nk(e) && n[t] === "visible")
    );
  },
  rk = function (e) {
    return Gg(e, "overflowY");
  },
  ok = function (e) {
    return Gg(e, "overflowX");
  },
  _p = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Yg(e, r);
      if (o) {
        var i = qg(e, r),
          s = i[1],
          l = i[2];
        if (s > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  ik = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  sk = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Yg = function (e, t) {
    return e === "v" ? rk(t) : ok(t);
  },
  qg = function (e, t) {
    return e === "v" ? ik(t) : sk(t);
  },
  lk = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ak = function (e, t, n, r, o) {
    var i = lk(e, window.getComputedStyle(t).direction),
      s = i * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      d = s > 0,
      p = 0,
      g = 0;
    do {
      if (!l) break;
      var m = qg(e, l),
        S = m[0],
        v = m[1],
        w = m[2],
        y = v - w - i * S;
      (S || y) && Yg(e, l) && ((p += y), (g += S));
      var h = l.parentNode;
      l = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((d && (Math.abs(p) < 1 || !o)) || (!d && (Math.abs(g) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  vs = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Ap = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Mp = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ck = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  uk = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  dk = 0,
  Mr = [];
function fk(e) {
  var t = f.useRef([]),
    n = f.useRef([0, 0]),
    r = f.useRef(),
    o = f.useState(dk++)[0],
    i = f.useState(Kg)[0],
    s = f.useRef(e);
  f.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    f.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = AN([e.lockRef.current], (e.shards || []).map(Mp), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = f.useCallback(function (v, w) {
      if (
        ("touches" in v && v.touches.length === 2) ||
        (v.type === "wheel" && v.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var y = vs(v),
        h = n.current,
        x = "deltaX" in v ? v.deltaX : h[0] - y[0],
        C = "deltaY" in v ? v.deltaY : h[1] - y[1],
        E,
        N = v.target,
        b = Math.abs(x) > Math.abs(C) ? "h" : "v";
      if ("touches" in v && b === "h" && N.type === "range") return !1;
      var T = _p(b, N);
      if (!T) return !0;
      if ((T ? (E = b) : ((E = b === "v" ? "h" : "v"), (T = _p(b, N))), !T))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (x || C) && (r.current = E), !E)
      )
        return !0;
      var O = r.current || E;
      return ak(O, w, v, O === "h" ? x : C, !0);
    }, []),
    a = f.useCallback(function (v) {
      var w = v;
      if (!(!Mr.length || Mr[Mr.length - 1] !== i)) {
        var y = "deltaY" in w ? Ap(w) : vs(w),
          h = t.current.filter(function (E) {
            return (
              E.name === w.type &&
              (E.target === w.target || w.target === E.shadowParent) &&
              ck(E.delta, y)
            );
          })[0];
        if (h && h.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!h) {
          var x = (s.current.shards || [])
              .map(Mp)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(w.target);
              }),
            C = x.length > 0 ? l(w, x[0]) : !s.current.noIsolation;
          C && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = f.useCallback(function (v, w, y, h) {
      var x = { name: v, delta: w, target: y, should: h, shadowParent: pk(y) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== x;
          });
        }, 1);
    }, []),
    d = f.useCallback(function (v) {
      (n.current = vs(v)), (r.current = void 0);
    }, []),
    p = f.useCallback(function (v) {
      u(v.type, Ap(v), v.target, l(v, e.lockRef.current));
    }, []),
    g = f.useCallback(function (v) {
      u(v.type, vs(v), v.target, l(v, e.lockRef.current));
    }, []);
  f.useEffect(function () {
    return (
      Mr.push(i),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", a, Ar),
      document.addEventListener("touchmove", a, Ar),
      document.addEventListener("touchstart", d, Ar),
      function () {
        (Mr = Mr.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", a, Ar),
          document.removeEventListener("touchmove", a, Ar),
          document.removeEventListener("touchstart", d, Ar);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    S = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    S ? f.createElement(i, { styles: uk(o) }) : null,
    m
      ? f.createElement(tk, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function pk(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const hk = UN(Qg, fk);
var wd = f.forwardRef(function (e, t) {
  return f.createElement(Kl, Vt({}, e, { ref: t, sideCar: hk }));
});
wd.classNames = Kl.classNames;
var mk = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Ir = new WeakMap(),
  gs = new WeakMap(),
  ys = {},
  Ha = 0,
  Xg = function (e) {
    return e && (e.host || Xg(e.parentNode));
  },
  vk = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Xg(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  gk = function (e, t, n, r) {
    var o = vk(t, Array.isArray(e) ? e : [e]);
    ys[n] || (ys[n] = new WeakMap());
    var i = ys[n],
      s = [],
      l = new Set(),
      a = new Set(o),
      u = function (p) {
        !p || l.has(p) || (l.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var d = function (p) {
      !p ||
        a.has(p) ||
        Array.prototype.forEach.call(p.children, function (g) {
          if (l.has(g)) d(g);
          else
            try {
              var m = g.getAttribute(r),
                S = m !== null && m !== "false",
                v = (Ir.get(g) || 0) + 1,
                w = (i.get(g) || 0) + 1;
              Ir.set(g, v),
                i.set(g, w),
                s.push(g),
                v === 1 && S && gs.set(g, !0),
                w === 1 && g.setAttribute(n, "true"),
                S || g.setAttribute(r, "true");
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", g, y);
            }
        });
    };
    return (
      d(t),
      l.clear(),
      Ha++,
      function () {
        s.forEach(function (p) {
          var g = Ir.get(p) - 1,
            m = i.get(p) - 1;
          Ir.set(p, g),
            i.set(p, m),
            g || (gs.has(p) || p.removeAttribute(r), gs.delete(p)),
            m || p.removeAttribute(n);
        }),
          Ha--,
          Ha ||
            ((Ir = new WeakMap()),
            (Ir = new WeakMap()),
            (gs = new WeakMap()),
            (ys = {}));
      }
    );
  },
  Zg = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = mk(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        gk(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Gl = "Dialog",
  [Jg, W2] = ko(Gl),
  [yk, Lt] = Jg(Gl),
  ey = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      l = f.useRef(null),
      a = f.useRef(null),
      [u, d] = sl({ prop: r, defaultProp: o ?? !1, onChange: i, caller: Gl });
    return c.jsx(yk, {
      scope: t,
      triggerRef: l,
      contentRef: a,
      contentId: to(),
      titleId: to(),
      descriptionId: to(),
      open: u,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: n,
    });
  };
ey.displayName = Gl;
var ty = "DialogTrigger",
  ny = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(ty, n),
      i = he(t, o.triggerRef);
    return c.jsx(ee.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Ed(o.open),
      ...r,
      ref: i,
      onClick: X(e.onClick, o.onOpenToggle),
    });
  });
ny.displayName = ty;
var Sd = "DialogPortal",
  [xk, ry] = Jg(Sd, { forceMount: void 0 }),
  oy = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = Lt(Sd, t);
    return c.jsx(xk, {
      scope: t,
      forceMount: n,
      children: f.Children.map(r, (s) =>
        c.jsx(Po, {
          present: n || i.open,
          children: c.jsx(Ol, { asChild: !0, container: o, children: s }),
        })
      ),
    });
  };
oy.displayName = Sd;
var pl = "DialogOverlay",
  iy = f.forwardRef((e, t) => {
    const n = ry(pl, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Lt(pl, e.__scopeDialog);
    return i.modal
      ? c.jsx(Po, {
          present: r || i.open,
          children: c.jsx(Sk, { ...o, ref: t }),
        })
      : null;
  });
iy.displayName = pl;
var wk = wo("DialogOverlay.RemoveScroll"),
  Sk = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(pl, n);
    return c.jsx(wd, {
      as: wk,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: c.jsx(ee.div, {
        "data-state": Ed(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Cr = "DialogContent",
  sy = f.forwardRef((e, t) => {
    const n = ry(Cr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Lt(Cr, e.__scopeDialog);
    return c.jsx(Po, {
      present: r || i.open,
      children: i.modal
        ? c.jsx(Ck, { ...o, ref: t })
        : c.jsx(Ek, { ...o, ref: t }),
    });
  });
sy.displayName = Cr;
var Ck = f.forwardRef((e, t) => {
    const n = Lt(Cr, e.__scopeDialog),
      r = f.useRef(null),
      o = he(t, n.contentRef, r);
    return (
      f.useEffect(() => {
        const i = r.current;
        if (i) return Zg(i);
      }, []),
      c.jsx(ly, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent,
            l = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: X(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  Ek = f.forwardRef((e, t) => {
    const n = Lt(Cr, e.__scopeDialog),
      r = f.useRef(!1),
      o = f.useRef(!1);
    return c.jsx(ly, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var s, l;
        (s = e.onCloseAutoFocus) == null || s.call(e, i),
          i.defaultPrevented ||
            (r.current || (l = n.triggerRef.current) == null || l.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var a, u;
        (a = e.onInteractOutside) == null || a.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  ly = f.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      l = Lt(Cr, n),
      a = f.useRef(null),
      u = he(t, a);
    return (
      Wg(),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(xd, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: c.jsx(zi, {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Ed(l.open),
              ...s,
              ref: u,
              onDismiss: () => l.onOpenChange(!1),
            }),
          }),
          c.jsxs(c.Fragment, {
            children: [
              c.jsx(bk, { titleId: l.titleId }),
              c.jsx(kk, { contentRef: a, descriptionId: l.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Cd = "DialogTitle",
  ay = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(Cd, n);
    return c.jsx(ee.h2, { id: o.titleId, ...r, ref: t });
  });
ay.displayName = Cd;
var cy = "DialogDescription",
  uy = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(cy, n);
    return c.jsx(ee.p, { id: o.descriptionId, ...r, ref: t });
  });
uy.displayName = cy;
var dy = "DialogClose",
  fy = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(dy, n);
    return c.jsx(ee.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: X(e.onClick, () => o.onOpenChange(!1)),
    });
  });
fy.displayName = dy;
function Ed(e) {
  return e ? "open" : "closed";
}
var py = "DialogTitleWarning",
  [V2, hy] = e1(py, { contentName: Cr, titleName: Cd, docsSlug: "dialog" }),
  bk = ({ titleId: e }) => {
    const t = hy(py),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      f.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Nk = "DialogDescriptionWarning",
  kk = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      hy(Nk).contentName
    }}.`;
    return (
      f.useEffect(() => {
        var i;
        const o =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  my = ey,
  Pk = ny,
  vy = oy,
  Yl = iy,
  ql = sy,
  Xl = ay,
  Zl = uy,
  gy = fy;
const jk = my,
  Tk = Pk,
  Rk = vy,
  yy = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Yl, {
      className: ae(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
yy.displayName = Yl.displayName;
const Ok = Ml(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  xy = f.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, o) =>
      c.jsxs(Rk, {
        children: [
          c.jsx(yy, {}),
          c.jsxs(ql, {
            ref: o,
            className: ae(Ok({ side: e }), t),
            ...r,
            children: [
              n,
              c.jsxs(gy, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                children: [
                  c.jsx(rd, { className: "h-4 w-4" }),
                  c.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
            ],
          }),
        ],
      })
  );
xy.displayName = ql.displayName;
const _k = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Xl, {
    ref: n,
    className: ae("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
_k.displayName = Xl.displayName;
const Ak = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Zl, { ref: n, className: ae("text-sm text-muted-foreground", e), ...t })
);
Ak.displayName = Zl.displayName;
const Mk = my,
  Ik = vy,
  wy = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Yl, {
      ref: n,
      className: ae(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
wy.displayName = Yl.displayName;
const Sy = f.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(Ik, {
    children: [
      c.jsx(wy, {}),
      c.jsxs(ql, {
        ref: r,
        className: ae(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          c.jsxs(gy, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [
              c.jsx(rd, { className: "h-4 w-4" }),
              c.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
Sy.displayName = ql.displayName;
const Cy = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: ae("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
Cy.displayName = "DialogHeader";
const Ey = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Xl, {
    ref: n,
    className: ae("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Ey.displayName = Xl.displayName;
const Dk = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Zl, { ref: n, className: ae("text-sm text-muted-foreground", e), ...t })
);
Dk.displayName = Zl.displayName;
const Jc = f.forwardRef(({ className: e, type: t, ...n }, r) =>
  c.jsx("input", {
    type: t,
    className: ae(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...n,
  })
);
Jc.displayName = "Input";
var Lk = "Label",
  by = f.forwardRef((e, t) =>
    c.jsx(ee.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
by.displayName = Lk;
var Ny = by;
const Fk = Ml(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Xo = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Ny, { ref: n, className: ae(Fk(), e), ...t })
  );
Xo.displayName = Ny.displayName;
function Ip(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var zk = f.createContext(void 0);
function $k(e) {
  const t = f.useContext(zk);
  return e || t || "ltr";
}
function Bk(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var Uk = [" ", "Enter", "ArrowUp", "ArrowDown"],
  Wk = [" ", "Enter"],
  Er = "Select",
  [Jl, ea, Vk] = lv(Er),
  [Ao, H2] = ko(Er, [Vk, zl]),
  ta = zl(),
  [Hk, Yn] = Ao(Er),
  [Qk, Kk] = Ao(Er),
  ky = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: s,
        defaultValue: l,
        onValueChange: a,
        dir: u,
        name: d,
        autoComplete: p,
        disabled: g,
        required: m,
        form: S,
      } = e,
      v = ta(t),
      [w, y] = f.useState(null),
      [h, x] = f.useState(null),
      [C, E] = f.useState(!1),
      N = $k(u),
      [b, T] = sl({ prop: r, defaultProp: o ?? !1, onChange: i, caller: Er }),
      [O, _] = sl({ prop: s, defaultProp: l, onChange: a, caller: Er }),
      $ = f.useRef(null),
      I = w ? S || !!w.closest("form") : !0,
      [W, M] = f.useState(new Set()),
      H = Array.from(W)
        .map((z) => z.props.value)
        .join(";");
    return c.jsx(BE, {
      ...v,
      children: c.jsxs(Hk, {
        required: m,
        scope: t,
        trigger: w,
        onTriggerChange: y,
        valueNode: h,
        onValueNodeChange: x,
        valueNodeHasChildren: C,
        onValueNodeHasChildrenChange: E,
        contentId: to(),
        value: O,
        onValueChange: _,
        open: b,
        onOpenChange: T,
        dir: N,
        triggerPointerDownPosRef: $,
        disabled: g,
        children: [
          c.jsx(Jl.Provider, {
            scope: t,
            children: c.jsx(Qk, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: f.useCallback((z) => {
                M((U) => new Set(U).add(z));
              }, []),
              onNativeOptionRemove: f.useCallback((z) => {
                M((U) => {
                  const k = new Set(U);
                  return k.delete(z), k;
                });
              }, []),
              children: n,
            }),
          }),
          I
            ? c.jsxs(
                qy,
                {
                  "aria-hidden": !0,
                  required: m,
                  tabIndex: -1,
                  name: d,
                  autoComplete: p,
                  value: O,
                  onChange: (z) => _(z.target.value),
                  disabled: g,
                  form: S,
                  children: [
                    O === void 0 ? c.jsx("option", { value: "" }) : null,
                    Array.from(W),
                  ],
                },
                H
              )
            : null,
        ],
      }),
    });
  };
ky.displayName = Er;
var Py = "SelectTrigger",
  jy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      i = ta(n),
      s = Yn(Py, n),
      l = s.disabled || r,
      a = he(t, s.onTriggerChange),
      u = ea(n),
      d = f.useRef("touch"),
      [p, g, m] = Zy((v) => {
        const w = u().filter((x) => !x.disabled),
          y = w.find((x) => x.value === s.value),
          h = Jy(w, v, y);
        h !== void 0 && s.onValueChange(h.value);
      }),
      S = (v) => {
        l || (s.onOpenChange(!0), m()),
          v &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(v.pageX),
              y: Math.round(v.pageY),
            });
      };
    return c.jsx(hg, {
      asChild: !0,
      ...i,
      children: c.jsx(ee.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": Xy(s.value) ? "" : void 0,
        ...o,
        ref: a,
        onClick: X(o.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && S(v);
        }),
        onPointerDown: X(o.onPointerDown, (v) => {
          d.current = v.pointerType;
          const w = v.target;
          w.hasPointerCapture(v.pointerId) &&
            w.releasePointerCapture(v.pointerId),
            v.button === 0 &&
              v.ctrlKey === !1 &&
              v.pointerType === "mouse" &&
              (S(v), v.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (v) => {
          const w = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) &&
            v.key.length === 1 &&
            g(v.key),
            !(w && v.key === " ") &&
              Uk.includes(v.key) &&
              (S(), v.preventDefault());
        }),
      }),
    });
  });
jy.displayName = Py;
var Ty = "SelectValue",
  Ry = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: i,
        placeholder: s = "",
        ...l
      } = e,
      a = Yn(Ty, n),
      { onValueNodeHasChildrenChange: u } = a,
      d = i !== void 0,
      p = he(t, a.onValueNodeChange);
    return (
      Me(() => {
        u(d);
      }, [u, d]),
      c.jsx(ee.span, {
        ...l,
        ref: p,
        style: { pointerEvents: "none" },
        children: Xy(a.value) ? c.jsx(c.Fragment, { children: s }) : i,
      })
    );
  });
Ry.displayName = Ty;
var Gk = "SelectIcon",
  Oy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return c.jsx(ee.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
Oy.displayName = Gk;
var Yk = "SelectPortal",
  _y = (e) => c.jsx(Ol, { asChild: !0, ...e });
_y.displayName = Yk;
var br = "SelectContent",
  Ay = f.forwardRef((e, t) => {
    const n = Yn(br, e.__scopeSelect),
      [r, o] = f.useState();
    if (
      (Me(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const i = r;
      return i
        ? Pr.createPortal(
            c.jsx(My, {
              scope: e.__scopeSelect,
              children: c.jsx(Jl.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", { children: e.children }),
              }),
            }),
            i
          )
        : null;
    }
    return c.jsx(Iy, { ...e, ref: t });
  });
Ay.displayName = br;
var Et = 10,
  [My, qn] = Ao(br),
  qk = "SelectContentImpl",
  Xk = wo("SelectContent.RemoveScroll"),
  Iy = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        side: l,
        sideOffset: a,
        align: u,
        alignOffset: d,
        arrowPadding: p,
        collisionBoundary: g,
        collisionPadding: m,
        sticky: S,
        hideWhenDetached: v,
        avoidCollisions: w,
        ...y
      } = e,
      h = Yn(br, n),
      [x, C] = f.useState(null),
      [E, N] = f.useState(null),
      b = he(t, (L) => C(L)),
      [T, O] = f.useState(null),
      [_, $] = f.useState(null),
      I = ea(n),
      [W, M] = f.useState(!1),
      H = f.useRef(!1);
    f.useEffect(() => {
      if (x) return Zg(x);
    }, [x]),
      Wg();
    const z = f.useCallback(
        (L) => {
          const [ie, ...Se] = I().map((ne) => ne.ref.current),
            [oe] = Se.slice(-1),
            J = document.activeElement;
          for (const ne of L)
            if (
              ne === J ||
              (ne == null || ne.scrollIntoView({ block: "nearest" }),
              ne === ie && E && (E.scrollTop = 0),
              ne === oe && E && (E.scrollTop = E.scrollHeight),
              ne == null || ne.focus(),
              document.activeElement !== J)
            )
              return;
        },
        [I, E]
      ),
      U = f.useCallback(() => z([T, x]), [z, T, x]);
    f.useEffect(() => {
      W && U();
    }, [W, U]);
    const { onOpenChange: k, triggerPointerDownPosRef: j } = h;
    f.useEffect(() => {
      if (x) {
        let L = { x: 0, y: 0 };
        const ie = (oe) => {
            var J, ne;
            L = {
              x: Math.abs(
                Math.round(oe.pageX) -
                  (((J = j.current) == null ? void 0 : J.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(oe.pageY) -
                  (((ne = j.current) == null ? void 0 : ne.y) ?? 0)
              ),
            };
          },
          Se = (oe) => {
            L.x <= 10 && L.y <= 10
              ? oe.preventDefault()
              : x.contains(oe.target) || k(!1),
              document.removeEventListener("pointermove", ie),
              (j.current = null);
          };
        return (
          j.current !== null &&
            (document.addEventListener("pointermove", ie),
            document.addEventListener("pointerup", Se, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", ie),
              document.removeEventListener("pointerup", Se, { capture: !0 });
          }
        );
      }
    }, [x, k, j]),
      f.useEffect(() => {
        const L = () => k(!1);
        return (
          window.addEventListener("blur", L),
          window.addEventListener("resize", L),
          () => {
            window.removeEventListener("blur", L),
              window.removeEventListener("resize", L);
          }
        );
      }, [k]);
    const [D, V] = Zy((L) => {
        const ie = I().filter((J) => !J.disabled),
          Se = ie.find((J) => J.ref.current === document.activeElement),
          oe = Jy(ie, L, Se);
        oe && setTimeout(() => oe.ref.current.focus());
      }),
      B = f.useCallback(
        (L, ie, Se) => {
          const oe = !H.current && !Se;
          ((h.value !== void 0 && h.value === ie) || oe) &&
            (O(L), oe && (H.current = !0));
        },
        [h.value]
      ),
      Y = f.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      Q = f.useCallback(
        (L, ie, Se) => {
          const oe = !H.current && !Se;
          ((h.value !== void 0 && h.value === ie) || oe) && $(L);
        },
        [h.value]
      ),
      ue = r === "popper" ? eu : Dy,
      we =
        ue === eu
          ? {
              side: l,
              sideOffset: a,
              align: u,
              alignOffset: d,
              arrowPadding: p,
              collisionBoundary: g,
              collisionPadding: m,
              sticky: S,
              hideWhenDetached: v,
              avoidCollisions: w,
            }
          : {};
    return c.jsx(My, {
      scope: n,
      content: x,
      viewport: E,
      onViewportChange: N,
      itemRefCallback: B,
      selectedItem: T,
      onItemLeave: Y,
      itemTextRefCallback: Q,
      focusSelectedItem: U,
      selectedItemText: _,
      position: r,
      isPositioned: W,
      searchRef: D,
      children: c.jsx(wd, {
        as: Xk,
        allowPinchZoom: !0,
        children: c.jsx(xd, {
          asChild: !0,
          trapped: h.open,
          onMountAutoFocus: (L) => {
            L.preventDefault();
          },
          onUnmountAutoFocus: X(o, (L) => {
            var ie;
            (ie = h.trigger) == null || ie.focus({ preventScroll: !0 }),
              L.preventDefault();
          }),
          children: c.jsx(zi, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: (L) => L.preventDefault(),
            onDismiss: () => h.onOpenChange(!1),
            children: c.jsx(ue, {
              role: "listbox",
              id: h.contentId,
              "data-state": h.open ? "open" : "closed",
              dir: h.dir,
              onContextMenu: (L) => L.preventDefault(),
              ...y,
              ...we,
              onPlaced: () => M(!0),
              ref: b,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: X(y.onKeyDown, (L) => {
                const ie = L.ctrlKey || L.altKey || L.metaKey;
                if (
                  (L.key === "Tab" && L.preventDefault(),
                  !ie && L.key.length === 1 && V(L.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key))
                ) {
                  let oe = I()
                    .filter((J) => !J.disabled)
                    .map((J) => J.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(L.key) &&
                      (oe = oe.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(L.key))
                  ) {
                    const J = L.target,
                      ne = oe.indexOf(J);
                    oe = oe.slice(ne + 1);
                  }
                  setTimeout(() => z(oe)), L.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Iy.displayName = qk;
var Zk = "SelectItemAlignedPosition",
  Dy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      i = Yn(br, n),
      s = qn(br, n),
      [l, a] = f.useState(null),
      [u, d] = f.useState(null),
      p = he(t, (b) => d(b)),
      g = ea(n),
      m = f.useRef(!1),
      S = f.useRef(!0),
      {
        viewport: v,
        selectedItem: w,
        selectedItemText: y,
        focusSelectedItem: h,
      } = s,
      x = f.useCallback(() => {
        if (i.trigger && i.valueNode && l && u && v && w && y) {
          const b = i.trigger.getBoundingClientRect(),
            T = u.getBoundingClientRect(),
            O = i.valueNode.getBoundingClientRect(),
            _ = y.getBoundingClientRect();
          if (i.dir !== "rtl") {
            const J = _.left - T.left,
              ne = O.left - J,
              De = b.left - ne,
              ct = b.width + De,
              Xn = Math.max(ct, T.width),
              pn = window.innerWidth - Et,
              Zn = Ip(ne, [Et, Math.max(Et, pn - Xn)]);
            (l.style.minWidth = ct + "px"), (l.style.left = Zn + "px");
          } else {
            const J = T.right - _.right,
              ne = window.innerWidth - O.right - J,
              De = window.innerWidth - b.right - ne,
              ct = b.width + De,
              Xn = Math.max(ct, T.width),
              pn = window.innerWidth - Et,
              Zn = Ip(ne, [Et, Math.max(Et, pn - Xn)]);
            (l.style.minWidth = ct + "px"), (l.style.right = Zn + "px");
          }
          const $ = g(),
            I = window.innerHeight - Et * 2,
            W = v.scrollHeight,
            M = window.getComputedStyle(u),
            H = parseInt(M.borderTopWidth, 10),
            z = parseInt(M.paddingTop, 10),
            U = parseInt(M.borderBottomWidth, 10),
            k = parseInt(M.paddingBottom, 10),
            j = H + z + W + k + U,
            D = Math.min(w.offsetHeight * 5, j),
            V = window.getComputedStyle(v),
            B = parseInt(V.paddingTop, 10),
            Y = parseInt(V.paddingBottom, 10),
            Q = b.top + b.height / 2 - Et,
            ue = I - Q,
            we = w.offsetHeight / 2,
            L = w.offsetTop + we,
            ie = H + z + L,
            Se = j - ie;
          if (ie <= Q) {
            const J = $.length > 0 && w === $[$.length - 1].ref.current;
            l.style.bottom = "0px";
            const ne = u.clientHeight - v.offsetTop - v.offsetHeight,
              De = Math.max(ue, we + (J ? Y : 0) + ne + U),
              ct = ie + De;
            l.style.height = ct + "px";
          } else {
            const J = $.length > 0 && w === $[0].ref.current;
            l.style.top = "0px";
            const De = Math.max(Q, H + v.offsetTop + (J ? B : 0) + we) + Se;
            (l.style.height = De + "px"), (v.scrollTop = ie - Q + v.offsetTop);
          }
          (l.style.margin = `${Et}px 0`),
            (l.style.minHeight = D + "px"),
            (l.style.maxHeight = I + "px"),
            r == null || r(),
            requestAnimationFrame(() => (m.current = !0));
        }
      }, [g, i.trigger, i.valueNode, l, u, v, w, y, i.dir, r]);
    Me(() => x(), [x]);
    const [C, E] = f.useState();
    Me(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const N = f.useCallback(
      (b) => {
        b && S.current === !0 && (x(), h == null || h(), (S.current = !1));
      },
      [x, h]
    );
    return c.jsx(e2, {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: N,
      children: c.jsx("div", {
        ref: a,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: c.jsx(ee.div, {
          ...o,
          ref: p,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
Dy.displayName = Zk;
var Jk = "SelectPopperPosition",
  eu = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Et,
        ...i
      } = e,
      s = ta(n);
    return c.jsx(mg, {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
eu.displayName = Jk;
var [e2, bd] = Ao(br, {}),
  tu = "SelectViewport",
  Ly = f.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      i = qn(tu, n),
      s = bd(tu, n),
      l = he(t, i.onViewportChange),
      a = f.useRef(0);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        c.jsx(Jl.Slot, {
          scope: n,
          children: c.jsx(ee.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: l,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: X(o.onScroll, (u) => {
              const d = u.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: g } = s;
              if (g != null && g.current && p) {
                const m = Math.abs(a.current - d.scrollTop);
                if (m > 0) {
                  const S = window.innerHeight - Et * 2,
                    v = parseFloat(p.style.minHeight),
                    w = parseFloat(p.style.height),
                    y = Math.max(v, w);
                  if (y < S) {
                    const h = y + m,
                      x = Math.min(S, h),
                      C = h - x;
                    (p.style.height = x + "px"),
                      p.style.bottom === "0px" &&
                        ((d.scrollTop = C > 0 ? C : 0),
                        (p.style.justifyContent = "flex-end"));
                  }
                }
              }
              a.current = d.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Ly.displayName = tu;
var Fy = "SelectGroup",
  [t2, n2] = Ao(Fy),
  r2 = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = to();
    return c.jsx(t2, {
      scope: n,
      id: o,
      children: c.jsx(ee.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
r2.displayName = Fy;
var zy = "SelectLabel",
  $y = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = n2(zy, n);
    return c.jsx(ee.div, { id: o.id, ...r, ref: t });
  });
$y.displayName = zy;
var hl = "SelectItem",
  [o2, By] = Ao(hl),
  Uy = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: i,
        ...s
      } = e,
      l = Yn(hl, n),
      a = qn(hl, n),
      u = l.value === r,
      [d, p] = f.useState(i ?? ""),
      [g, m] = f.useState(!1),
      S = he(t, (h) => {
        var x;
        return (x = a.itemRefCallback) == null ? void 0 : x.call(a, h, r, o);
      }),
      v = to(),
      w = f.useRef("touch"),
      y = () => {
        o || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return c.jsx(o2, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: u,
      onItemTextChange: f.useCallback((h) => {
        p((x) => x || ((h == null ? void 0 : h.textContent) ?? "").trim());
      }, []),
      children: c.jsx(Jl.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: d,
        children: c.jsx(ee.div, {
          role: "option",
          "aria-labelledby": v,
          "data-highlighted": g ? "" : void 0,
          "aria-selected": u && g,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...s,
          ref: S,
          onFocus: X(s.onFocus, () => m(!0)),
          onBlur: X(s.onBlur, () => m(!1)),
          onClick: X(s.onClick, () => {
            w.current !== "mouse" && y();
          }),
          onPointerUp: X(s.onPointerUp, () => {
            w.current === "mouse" && y();
          }),
          onPointerDown: X(s.onPointerDown, (h) => {
            w.current = h.pointerType;
          }),
          onPointerMove: X(s.onPointerMove, (h) => {
            var x;
            (w.current = h.pointerType),
              o
                ? (x = a.onItemLeave) == null || x.call(a)
                : w.current === "mouse" &&
                  h.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: X(s.onPointerLeave, (h) => {
            var x;
            h.currentTarget === document.activeElement &&
              ((x = a.onItemLeave) == null || x.call(a));
          }),
          onKeyDown: X(s.onKeyDown, (h) => {
            var C;
            (((C = a.searchRef) == null ? void 0 : C.current) !== "" &&
              h.key === " ") ||
              (Wk.includes(h.key) && y(), h.key === " " && h.preventDefault());
          }),
        }),
      }),
    });
  });
Uy.displayName = hl;
var Zo = "SelectItemText",
  Wy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e,
      s = Yn(Zo, n),
      l = qn(Zo, n),
      a = By(Zo, n),
      u = Kk(Zo, n),
      [d, p] = f.useState(null),
      g = he(
        t,
        (y) => p(y),
        a.onItemTextChange,
        (y) => {
          var h;
          return (h = l.itemTextRefCallback) == null
            ? void 0
            : h.call(l, y, a.value, a.disabled);
        }
      ),
      m = d == null ? void 0 : d.textContent,
      S = f.useMemo(
        () =>
          c.jsx(
            "option",
            { value: a.value, disabled: a.disabled, children: m },
            a.value
          ),
        [a.disabled, a.value, m]
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: w } = u;
    return (
      Me(() => (v(S), () => w(S)), [v, w, S]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(ee.span, { id: a.textId, ...i, ref: g }),
          a.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? Pr.createPortal(i.children, s.valueNode)
            : null,
        ],
      })
    );
  });
Wy.displayName = Zo;
var Vy = "SelectItemIndicator",
  Hy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return By(Vy, n).isSelected
      ? c.jsx(ee.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
Hy.displayName = Vy;
var nu = "SelectScrollUpButton",
  Qy = f.forwardRef((e, t) => {
    const n = qn(nu, e.__scopeSelect),
      r = bd(nu, e.__scopeSelect),
      [o, i] = f.useState(!1),
      s = he(t, r.onScrollButtonChange);
    return (
      Me(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollTop > 0;
            i(u);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener("scroll", l),
            () => a.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(Gy, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop - a.offsetHeight);
            },
          })
        : null
    );
  });
Qy.displayName = nu;
var ru = "SelectScrollDownButton",
  Ky = f.forwardRef((e, t) => {
    const n = qn(ru, e.__scopeSelect),
      r = bd(ru, e.__scopeSelect),
      [o, i] = f.useState(!1),
      s = he(t, r.onScrollButtonChange);
    return (
      Me(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollHeight - a.clientHeight,
              d = Math.ceil(a.scrollTop) < u;
            i(d);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener("scroll", l),
            () => a.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(Gy, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop + a.offsetHeight);
            },
          })
        : null
    );
  });
Ky.displayName = ru;
var Gy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      i = qn("SelectScrollButton", n),
      s = f.useRef(null),
      l = ea(n),
      a = f.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      f.useEffect(() => () => a(), [a]),
      Me(() => {
        var d;
        const u = l().find((p) => p.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null ||
          d.scrollIntoView({ block: "nearest" });
      }, [l]),
      c.jsx(ee.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: X(o.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerMove: X(o.onPointerMove, () => {
          var u;
          (u = i.onItemLeave) == null || u.call(i),
            s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerLeave: X(o.onPointerLeave, () => {
          a();
        }),
      })
    );
  }),
  i2 = "SelectSeparator",
  Yy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return c.jsx(ee.div, { "aria-hidden": !0, ...r, ref: t });
  });
Yy.displayName = i2;
var ou = "SelectArrow",
  s2 = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = ta(n),
      i = Yn(ou, n),
      s = qn(ou, n);
    return i.open && s.position === "popper"
      ? c.jsx(vg, { ...o, ...r, ref: t })
      : null;
  });
s2.displayName = ou;
var l2 = "SelectBubbleInput",
  qy = f.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = f.useRef(null),
      i = he(r, o),
      s = Bk(t);
    return (
      f.useEffect(() => {
        const l = o.current;
        if (!l) return;
        const a = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(a, "value").set;
        if (s !== t && d) {
          const p = new Event("change", { bubbles: !0 });
          d.call(l, t), l.dispatchEvent(p);
        }
      }, [s, t]),
      c.jsx(ee.select, {
        ...n,
        style: { ...fv, ...n.style },
        ref: i,
        defaultValue: t,
      })
    );
  });
qy.displayName = l2;
function Xy(e) {
  return e === "" || e === void 0;
}
function Zy(e) {
  const t = Mt(e),
    n = f.useRef(""),
    r = f.useRef(0),
    o = f.useCallback(
      (s) => {
        const l = n.current + s;
        t(l),
          (function a(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => a(""), 1e3));
          })(l);
      },
      [t]
    ),
    i = f.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Jy(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = a2(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const a = s.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function a2(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var c2 = ky,
  e0 = jy,
  u2 = Ry,
  d2 = Oy,
  f2 = _y,
  t0 = Ay,
  p2 = Ly,
  n0 = $y,
  r0 = Uy,
  h2 = Wy,
  m2 = Hy,
  o0 = Qy,
  i0 = Ky,
  s0 = Yy;
const v2 = c2,
  g2 = u2,
  l0 = f.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(e0, {
      ref: r,
      className: ae(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        c.jsx(d2, {
          asChild: !0,
          children: c.jsx(Iv, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
l0.displayName = e0.displayName;
const a0 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(o0, {
    ref: n,
    className: ae("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(X1, { className: "h-4 w-4" }),
  })
);
a0.displayName = o0.displayName;
const c0 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(i0, {
    ref: n,
    className: ae("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Iv, { className: "h-4 w-4" }),
  })
);
c0.displayName = i0.displayName;
const u0 = f.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    c.jsx(f2, {
      children: c.jsxs(t0, {
        ref: o,
        className: ae(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          c.jsx(a0, {}),
          c.jsx(p2, {
            className: ae(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          c.jsx(c0, {}),
        ],
      }),
    })
);
u0.displayName = t0.displayName;
const y2 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(n0, {
    ref: n,
    className: ae("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  })
);
y2.displayName = n0.displayName;
const d0 = f.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(r0, {
    ref: r,
    className: ae(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      c.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(m2, { children: c.jsx(q1, { className: "h-4 w-4" }) }),
      }),
      c.jsx(h2, { children: t }),
    ],
  })
);
d0.displayName = r0.displayName;
const x2 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(s0, { ref: n, className: ae("-mx-1 my-1 h-px bg-muted", e), ...t })
);
x2.displayName = s0.displayName;
const f0 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("textarea", {
    className: ae(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
f0.displayName = "Textarea";
const w2 = [
    "Washing Machine Repair",
    "Washing Machine Maintenance",
    "Microwave Oven Repair",
    "Microwave Oven Maintenance",
    "Refrigerator Repair",
    "Refrigerator Maintenance",
    "AC Deep Cleaning",
    "AC Maintenance",
    "AC Repair",
    "AC Installation",
  ],
  Mo = ({ open: e, onOpenChange: t, defaultService: n }) => {
    const [r, o] = f.useState({
        name: "",
        phone: "",
        service: n || "",
        address: "",
      }),
      i = (s) => {
        s.preventDefault();
        try {
          if (typeof window !== "undefined" && window.sendBookingToWhatsApp) {
            window.sendBookingToWhatsApp(r, "919241928068");
          } else {
            const l = `*New Service Booking Request*\n\nName: ${r.name}\nPhone: ${r.phone}\nService: ${r.service}\nAddress: ${r.address}`,
              a = `https://wa.me/919241928068?text=${encodeURIComponent(l)}`;
            window.open(a, "_blank");
          }
        } catch (e) {
          console.error(e);
        }
        o({ name: "", phone: "", service: n || "", address: "" }), t(!1);
      };
    return c.jsx(Mk, {
      open: e,
      onOpenChange: t,
      children: c.jsxs(Sy, {
        className: "sm:max-w-[500px]",
        children: [
          c.jsx(Cy, {
            children: c.jsx(Ey, {
              className: "text-2xl",
              children: "Book a Service",
            }),
          }),
          c.jsxs("form", {
            onSubmit: i,
            className: "space-y-4 mt-4",
            children: [
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Xo, { htmlFor: "name", children: "Name *" }),
                  c.jsx(Jc, {
                    id: "name",
                    placeholder: "Your Name",
                    value: r.name,
                    onChange: (s) => o({ ...r, name: s.target.value }),
                    required: !0,
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Xo, { htmlFor: "phone", children: "Phone Number *" }),
                  c.jsx(Jc, {
                    id: "phone",
                    type: "tel",
                    placeholder: "Phone Number",
                    value: r.phone,
                    onChange: (s) => o({ ...r, phone: s.target.value }),
                    required: !0,
                    pattern: "[0-9]{10}",
                    title: "Please enter a valid 10-digit phone number",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Xo, { htmlFor: "service", children: "Service *" }),
                  c.jsxs(v2, {
                    value: r.service,
                    onValueChange: (s) => o({ ...r, service: s }),
                    required: !0,
                    children: [
                      c.jsx(l0, {
                        children: c.jsx(g2, { placeholder: "Select Service" }),
                      }),
                      c.jsx(u0, {
                        children: w2.map((s) =>
                          c.jsx(d0, { value: s, children: s }, s)
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Xo, {
                    htmlFor: "address",
                    children: "Service Address *",
                  }),
                  c.jsx(f0, {
                    id: "address",
                    placeholder: "Service Address",
                    value: r.address,
                    onChange: (s) => o({ ...r, address: s.target.value }),
                    required: !0,
                    rows: 3,
                  }),
                ],
              }),
              c.jsx(_t, {
                type: "submit",
                className:
                  "w-full bg-primary hover:bg-primary/90 text-white font-normal",
                children: "Submit Booking",
              }),
            ],
          }),
        ],
      }),
    });
  },
  S2 = ["Washing Machine", "Microwave Oven", "Refrigerator", "Air Conditioner"],
  Vi = () => {
    const [e, t] = f.useState(!1),
      [n, r] = f.useState(!1),
      o = (i) => {
        const s = document.getElementById(i);
        s && s.scrollIntoView({ behavior: "smooth" }), t(!1);
      };
    return c.jsxs("nav", {
      className: "bg-white border-b border-border shadow-sm",
      children: [
        c.jsx("div", {
          className: "container mx-auto px-4 py-3",
          children: c.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              c.jsx("div", {
                className: "text-2xl text-primary",
                children: "Your Service Center.in",
              }),
              c.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [
                  c.jsx("button", {
                    onClick: () => o("services"),
                    className:
                      "text-foreground hover:text-primary transition-colors",
                    children: "Services",
                  }),
                  c.jsx("button", {
                    onClick: () => o("about"),
                    className:
                      "text-foreground hover:text-primary transition-colors",
                    children: "About",
                  }),
                  c.jsx("button", {
                    onClick: () => o("contact"),
                    className:
                      "text-foreground hover:text-primary transition-colors",
                    children: "Contact",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  c.jsx(_t, {
                    className:
                      "hidden sm:flex rounded-full px-4 py-1 h-8 bg-primary hover:bg-primary/90 text-white text-sm font-normal",
                    onClick: () => r(!0),
                    children: "Book a Service",
                  }),
                  c.jsxs(jk, {
                    open: e,
                    onOpenChange: t,
                    children: [
                      c.jsx(Tk, {
                        asChild: !0,
                        children: c.jsx(_t, {
                          variant: "ghost",
                          size: "icon",
                          className: "md:hidden",
                          children: c.jsx(tS, { className: "h-6 w-6" }),
                        }),
                      }),
                      c.jsx(xy, {
                        side: "right",
                        className: "w-[300px]",
                        children: c.jsxs("div", {
                          className: "flex flex-col gap-6 mt-8",
                          children: [
                            c.jsxs("div", {
                              className: "flex flex-col gap-4",
                              children: [
                                c.jsx("button", {
                                  onClick: () => o("services"),
                                  className:
                                    "text-left text-lg text-foreground hover:text-primary transition-colors",
                                  children: "Services",
                                }),
                                c.jsx("button", {
                                  onClick: () => o("about"),
                                  className:
                                    "text-left text-lg text-foreground hover:text-primary transition-colors",
                                  children: "About",
                                }),
                                c.jsx("button", {
                                  onClick: () => o("contact"),
                                  className:
                                    "text-left text-lg text-foreground hover:text-primary transition-colors",
                                  children: "Contact",
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "border-t pt-4",
                              children: [
                                c.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground mb-3",
                                  children: "Our Services",
                                }),
                                c.jsx("div", {
                                  className: "flex flex-col gap-2",
                                  children: S2.map((i, s) =>
                                    c.jsx(
                                      "div",
                                      {
                                        className: "text-sm text-foreground",
                                        children: i,
                                      },
                                      s
                                    )
                                  ),
                                }),
                              ],
                            }),
                            c.jsx(_t, {
                              className:
                                "rounded-full px-4 py-2 bg-primary hover:bg-primary/90 text-white w-full font-normal",
                              onClick: () => {
                                t(!1), r(!0);
                              },
                              children: "Book a Service",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx(Mo, { open: n, onOpenChange: r }),
      ],
    });
  },
  C2 = "/assets/hero-interior-8KqSRS9u.jpg",
  E2 = () => {
    const [e, t] = f.useState(!1);
    return c.jsxs("section", {
      className:
        "relative min-h-[85vh] flex items-center justify-center overflow-hidden",
      children: [
        c.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [
            c.jsx("img", {
              src: C2,
              alt: "Modern comfortable home interior with AC",
              className: "w-full h-full object-cover",
            }),
            c.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40",
            }),
          ],
        }),
        c.jsx("div", {
          className: "container relative z-10 px-4 md:px-8",
          children: c.jsx("div", {
            className: "max-w-6xl mx-auto",
            children: c.jsxs("div", {
              className: "text-center text-white mb-8",
              children: [
                c.jsxs("h1", {
                  className:
                    "text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight",
                  children: [
                    "Expert Appliance Repair",
                    c.jsx("br", {}),
                    c.jsx("span", {
                      className: "text-primary",
                      children: "At Your Doorstep",
                    }),
                  ],
                }),
                c.jsx("p", {
                  className:
                    "text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto",
                  children:
                    "Professional repair and maintenance for washing machines, refrigerators, microwaves, and air conditioners. Same-day service with 90-day warranty.",
                }),
                c.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row gap-4 justify-center items-center",
                  children: [
                    c.jsx(_t, {
                      onClick: () => t(!0),
                      className:
                        "bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full font-normal",
                      size: "lg",
                      children: "Book a Service",
                    }),
                    c.jsx("a", {
                      href: "tel:+919241928068",
                      children: c.jsx(_t, {
                        variant: "outline",
                        className:
                          "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full font-normal",
                        size: "lg",
                        children: "Call Now",
                      }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "flex flex-wrap justify-center gap-6 mt-12 text-white/90",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsx(Dv, { className: "w-5 h-5 text-primary" }),
                        c.jsx("span", {
                          className: "text-sm",
                          children: "90-Day Warranty",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsx(Z1, { className: "w-5 h-5 text-primary" }),
                        c.jsx("span", {
                          className: "text-sm",
                          children: "Same-Day Service",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsx(oS, { className: "w-5 h-5 text-primary" }),
                        c.jsx("span", {
                          className: "text-sm",
                          children: "5L+ Happy Customers",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        c.jsx(Mo, { open: e, onOpenChange: t }),
      ],
    });
  },
  b2 = [
    {
      icon: iS,
      title: "Washing Machine",
      description: "Expert repair & maintenance",
      path: "/washing-machine",
    },
    {
      icon: nS,
      title: "Microwave Oven",
      description: "Quick fixes & servicing",
      path: "/microwave-oven",
    },
    {
      icon: rS,
      title: "Refrigerator",
      description: "Cooling solutions & repairs",
      path: "/refrigerator",
    },
    {
      icon: G1,
      title: "Air Conditioner",
      description: "Complete AC care",
      path: "/air-conditioner",
    },
  ],
  N2 = () => {
    const e = Wi();
    return c.jsx("section", {
      id: "services",
      className: "py-16 md:py-24 bg-background",
      children: c.jsxs("div", {
        className: "container px-4 md:px-8",
        children: [
          c.jsxs("div", {
            className: "text-center mb-12",
            children: [
              c.jsx("h2", {
                className: "text-3xl md:text-4xl mb-4",
                children: "Our Services",
              }),
              c.jsx("p", {
                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Professional repair and maintenance for all your home appliances",
              }),
            ],
          }),
          c.jsx("div", {
            className:
              "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto",
            children: b2.map((t, n) => {
              const r = t.icon;
              return c.jsxs(
                "div",
                {
                  onClick: () => e(t.path),
                  className:
                    "bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer",
                  children: [
                    c.jsx("div", {
                      className:
                        "bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
                      children: c.jsx(r, { className: "w-8 h-8 text-primary" }),
                    }),
                    c.jsx("h3", {
                      className: "text-sm mb-1",
                      children: t.title,
                    }),
                    c.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: t.description,
                    }),
                  ],
                },
                n
              );
            }),
          }),
        ],
      }),
    });
  },
  k2 = [
    {
      icon: J1,
      title: "Flat Rate Pricing",
      description:
        "No hidden fees or surprise charges. Crystal clear pricing upfront, every time.",
    },
    {
      icon: Dv,
      title: "90-Day Guarantee",
      description:
        "Complete confidence with our industry-leading warranty on all repairs and installations.",
    },
    {
      icon: Y1,
      title: "Vetted & Certified",
      description:
        "Only licensed technicians with verified credentials and years of experience.",
    },
  ],
  P2 = () =>
    c.jsx("section", {
      id: "about",
      className: "py-16 md:py-24 bg-card",
      children: c.jsx("div", {
        className: "container px-4 md:px-8",
        children: c.jsx("div", {
          className: "max-w-6xl mx-auto",
          children: c.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
              c.jsx("div", {
                className: "text-center md:text-left",
                children: c.jsxs("div", {
                  className: "inline-block bg-accent rounded-2xl p-8 md:p-12",
                  children: [
                    c.jsx("div", {
                      className:
                        "text-6xl md:text-8xl text-accent-foreground mb-2",
                      children: "5L+",
                    }),
                    c.jsx("div", {
                      className:
                        "text-xl md:text-2xl text-accent-foreground/90",
                      children: "Happy Customers",
                    }),
                    c.jsx("div", {
                      className: "text-accent-foreground/70 mt-2",
                      children: "Trusted across India",
                    }),
                  ],
                }),
              }),
              c.jsxs("div", {
                className: "space-y-6",
                children: [
                  c.jsx("h2", {
                    className: "text-3xl md:text-4xl mb-8",
                    children: "Why Choose Us?",
                  }),
                  k2.map((e, t) => {
                    const n = e.icon;
                    return c.jsxs(
                      "div",
                      {
                        className: "flex gap-4",
                        children: [
                          c.jsx("div", {
                            className: "flex-shrink-0",
                            children: c.jsx("div", {
                              className:
                                "bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center",
                              children: c.jsx(n, {
                                className: "w-7 h-7 text-primary",
                              }),
                            }),
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("h3", {
                                className: "text-xl mb-2",
                                children: e.title,
                              }),
                              c.jsx("p", {
                                className:
                                  "text-muted-foreground leading-relaxed",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    );
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  j2 = () =>
    c.jsx("section", {
      id: "contact",
      className: "py-16 md:py-24 bg-secondary",
      children: c.jsx("div", {
        className: "container px-4 md:px-8",
        children: c.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            c.jsxs("div", {
              className: "text-center mb-12",
              children: [
                c.jsx("h2", {
                  className: "text-3xl md:text-4xl mb-4",
                  children: "Contact Us",
                }),
                c.jsx("p", {
                  className: "text-lg text-muted-foreground",
                  children:
                    "Get in touch with us for quick and reliable service",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid md:grid-cols-2 gap-6",
              children: [
                c.jsx("a", {
                  href: "tel:+919241928068",
                  className:
                    "bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer group",
                  children: c.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [
                      c.jsx("div", {
                        className:
                          "bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",
                        children: c.jsx(Bi, {
                          className: "w-8 h-8 text-primary",
                        }),
                      }),
                      c.jsx("h3", {
                        className: "text-xl mb-2 text-foreground",
                        children: "Call Us",
                      }),
                      c.jsx("p", {
                        className: "text-2xl text-primary",
                        children: "+91 92419 28068",
                      }),
                      c.jsx("p", {
                        className: "text-sm text-muted-foreground mt-2",
                        children: "Available 24/7",
                      }),
                    ],
                  }),
                }),
                c.jsx("a", {
                  href: "mailto:yourservicecenter.in",
                  className:
                    "bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer group",
                  children: c.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [
                      c.jsx("div", {
                        className:
                          "bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",
                        children: c.jsx(eS, {
                          className: "w-8 h-8 text-primary",
                        }),
                      }),
                      c.jsx("h3", {
                        className: "text-xl mb-2 text-foreground",
                        children: "Email Us",
                      }),
                      c.jsx("p", {
                        className: "text-lg text-primary break-all",
                        children: "yourservicecentre247@gmail.com",
                      }),
                      c.jsx("p", {
                        className: "text-sm text-muted-foreground mt-2",
                        children: "Quick response guaranteed",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  T2 = () =>
    c.jsxs("div", {
      className: "min-h-screen",
      children: [
        c.jsx(Vi, {}),
        c.jsx(E2, {}),
        c.jsx(N2, {}),
        c.jsx(P2, {}),
        c.jsx(j2, {}),
      ],
    }),
  R2 = () => {
    const e = yd();
    return (
      f.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            c.jsx("p", {
              className: "mb-4 text-xl text-gray-600",
              children: "Oops! Page not found",
            }),
            c.jsx("a", {
              href: "/",
              className: "text-blue-500 underline hover:text-blue-700",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  O2 = () => {
    const e = Wi(),
      [t, n] = f.useState(!1);
    return c.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        c.jsx(Vi, {}),
        c.jsxs("div", {
          className: "container px-4 md:px-8 py-12",
          children: [
            c.jsxs("button", {
              onClick: () => e("/"),
              className:
                "flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors",
              children: [c.jsx(Il, { className: "w-5 h-5" }), "Back to Home"],
            }),
            c.jsx("div", {
              className: "max-w-6xl mx-auto",
              children: c.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                  c.jsxs("div", {
                    className: "lg:col-span-2 space-y-6",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-full h-[400px] rounded-3xl overflow-hidden bg-secondary",
                        children: c.jsx("img", {
                          src: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80",
                          alt: "Washing Machine Repair",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h1", {
                            className: "text-4xl text-foreground",
                            children: "Washing Machine Repair & Service",
                          }),
                          c.jsxs("div", {
                            className: "space-y-3 text-muted-foreground",
                            children: [
                              c.jsx("p", {
                                children:
                                  "Expert washing machine repair services for all brands and models. Our certified technicians handle everything from drum replacements to motor repairs.",
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "What We Fix:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children: "Not starting or powering on",
                                      }),
                                      c.jsx("li", {
                                        children: "Water leakage issues",
                                      }),
                                      c.jsx("li", {
                                        children: "Drum not spinning properly",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Excessive noise or vibration",
                                      }),
                                      c.jsx("li", {
                                        children: "Water not draining",
                                      }),
                                      c.jsx("li", {
                                        children: "Door lock problems",
                                      }),
                                      c.jsx("li", {
                                        children: "Control panel errors",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "Our Services Include:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children:
                                          "Complete diagnosis and repair",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Regular maintenance and cleaning",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Genuine spare parts replacement",
                                      }),
                                      c.jsx("li", {
                                        children: "Installation and setup",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Annual maintenance contracts",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsx("div", {
                                className: "bg-primary/5 rounded-2xl p-4 mt-6",
                                children: c.jsxs("p", {
                                  className: "text-sm",
                                  children: [
                                    c.jsx("strong", {
                                      className: "text-foreground",
                                      children: "Service Guarantee:",
                                    }),
                                    " All repairs come with a 90-day warranty. Same-day service available for urgent repairs.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "lg:col-span-1",
                    children: c.jsx("div", {
                      className:
                        "sticky top-4 bg-white rounded-3xl shadow-lg p-6 border border-border",
                      children: c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl text-foreground",
                            children: "Book This Service",
                          }),
                          c.jsxs("div", {
                            className:
                              "space-y-2 text-sm text-muted-foreground",
                            children: [
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Response Time:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "Same Day",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", {
                                    children: "Service Warranty:",
                                  }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "90 Days",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Available:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "24/7",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "border-t pt-4",
                            children: c.jsxs(_t, {
                              onClick: () => n(!0),
                              className:
                                "w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-normal",
                              children: [
                                c.jsx(Bi, { className: "w-5 h-5 mr-2" }),
                                "Book Service Now",
                              ],
                            }),
                          }),
                          c.jsx("div", {
                            className: "text-center pt-2",
                            children: c.jsx("a", {
                              href: "tel:+919241928068",
                              className:
                                "text-sm text-primary hover:text-primary/80",
                              children: "or call +91 92419 28068",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsx(Mo, {
          open: t,
          onOpenChange: n,
          defaultService: "Washing Machine Repair",
        }),
      ],
    });
  },
  _2 = () => {
    const e = Wi(),
      [t, n] = f.useState(!1);
    return c.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        c.jsx(Vi, {}),
        c.jsxs("div", {
          className: "container px-4 md:px-8 py-12",
          children: [
            c.jsxs("button", {
              onClick: () => e("/"),
              className:
                "flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors",
              children: [c.jsx(Il, { className: "w-5 h-5" }), "Back to Home"],
            }),
            c.jsx("div", {
              className: "max-w-6xl mx-auto",
              children: c.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                  c.jsxs("div", {
                    className: "lg:col-span-2 space-y-6",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-full h-[400px] rounded-3xl overflow-hidden bg-secondary",
                        children: c.jsx("img", {
                          src: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800&q=80",
                          alt: "Microwave Oven Repair",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h1", {
                            className: "text-4xl text-foreground",
                            children: "Microwave Oven Repair & Service",
                          }),
                          c.jsxs("div", {
                            className: "space-y-3 text-muted-foreground",
                            children: [
                              c.jsx("p", {
                                children:
                                  "Professional microwave oven repair and maintenance for all major brands. Our skilled technicians ensure your microwave operates safely and efficiently.",
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "Common Issues We Fix:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children: "Not heating or cooking food",
                                      }),
                                      c.jsx("li", {
                                        children: "Turntable not rotating",
                                      }),
                                      c.jsx("li", {
                                        children: "Sparking or arcing inside",
                                      }),
                                      c.jsx("li", {
                                        children: "Door not closing properly",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Display or control panel issues",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Strange noises during operation",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Blown fuse or tripped breaker",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "Our Services Include:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children: "Magnetron replacement",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Door switch and latch repair",
                                      }),
                                      c.jsx("li", {
                                        children: "Turntable motor replacement",
                                      }),
                                      c.jsx("li", {
                                        children: "Control board repair",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Deep cleaning and maintenance",
                                      }),
                                      c.jsx("li", {
                                        children: "Safety inspection",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsx("div", {
                                className: "bg-primary/5 rounded-2xl p-4 mt-6",
                                children: c.jsxs("p", {
                                  className: "text-sm",
                                  children: [
                                    c.jsx("strong", {
                                      className: "text-foreground",
                                      children: "Safety First:",
                                    }),
                                    " We conduct thorough safety checks on all microwave repairs to ensure proper radiation shielding and safe operation.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "lg:col-span-1",
                    children: c.jsx("div", {
                      className:
                        "sticky top-4 bg-white rounded-3xl shadow-lg p-6 border border-border",
                      children: c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl text-foreground",
                            children: "Book This Service",
                          }),
                          c.jsxs("div", {
                            className:
                              "space-y-2 text-sm text-muted-foreground",
                            children: [
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Response Time:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "Same Day",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", {
                                    children: "Service Warranty:",
                                  }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "90 Days",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Available:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "24/7",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "border-t pt-4",
                            children: c.jsxs(_t, {
                              onClick: () => n(!0),
                              className:
                                "w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-normal",
                              children: [
                                c.jsx(Bi, { className: "w-5 h-5 mr-2" }),
                                "Book Service Now",
                              ],
                            }),
                          }),
                          c.jsx("div", {
                            className: "text-center pt-2",
                            children: c.jsx("a", {
                              href: "tel:+919241928068",
                              className:
                                "text-sm text-primary hover:text-primary/80",
                              children: "or call +91 92419 28068",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsx(Mo, {
          open: t,
          onOpenChange: n,
          defaultService: "Microwave Oven Repair",
        }),
      ],
    });
  },
  A2 = () => {
    const e = Wi(),
      [t, n] = f.useState(!1);
    return c.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        c.jsx(Vi, {}),
        c.jsxs("div", {
          className: "container px-4 md:px-8 py-12",
          children: [
            c.jsxs("button", {
              onClick: () => e("/"),
              className:
                "flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors",
              children: [c.jsx(Il, { className: "w-5 h-5" }), "Back to Home"],
            }),
            c.jsx("div", {
              className: "max-w-6xl mx-auto",
              children: c.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                  c.jsxs("div", {
                    className: "lg:col-span-2 space-y-6",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-full h-[400px] rounded-3xl overflow-hidden bg-secondary",
                        children: c.jsx("img", {
                          src: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80",
                          alt: "Refrigerator Repair",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h1", {
                            className: "text-4xl text-foreground",
                            children: "Refrigerator Repair & Service",
                          }),
                          c.jsxs("div", {
                            className: "space-y-3 text-muted-foreground",
                            children: [
                              c.jsx("p", {
                                children:
                                  "Complete refrigerator repair and maintenance services for all brands including single door, double door, and side-by-side models. Keep your food fresh with our expert service.",
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "Problems We Solve:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children: "Not cooling properly",
                                      }),
                                      c.jsx("li", {
                                        children: "Freezer not freezing",
                                      }),
                                      c.jsx("li", {
                                        children: "Water leakage issues",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Excessive noise or vibration",
                                      }),
                                      c.jsx("li", {
                                        children: "Ice maker problems",
                                      }),
                                      c.jsx("li", {
                                        children: "Door seal replacement",
                                      }),
                                      c.jsx("li", {
                                        children: "Temperature fluctuations",
                                      }),
                                      c.jsx("li", {
                                        children: "Compressor issues",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "Our Services Include:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children:
                                          "Gas refilling and leak detection",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Compressor repair/replacement",
                                      }),
                                      c.jsx("li", {
                                        children: "Thermostat calibration",
                                      }),
                                      c.jsx("li", {
                                        children: "Condenser coil cleaning",
                                      }),
                                      c.jsx("li", {
                                        children: "Defrost system repair",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Complete electrical diagnostics",
                                      }),
                                      c.jsx("li", {
                                        children: "Regular maintenance service",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsx("div", {
                                className: "bg-primary/5 rounded-2xl p-4 mt-6",
                                children: c.jsxs("p", {
                                  className: "text-sm",
                                  children: [
                                    c.jsx("strong", {
                                      className: "text-foreground",
                                      children: "Expert Care:",
                                    }),
                                    " We use genuine parts and eco-friendly refrigerants. All major brands covered with warranty on repairs.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "lg:col-span-1",
                    children: c.jsx("div", {
                      className:
                        "sticky top-4 bg-white rounded-3xl shadow-lg p-6 border border-border",
                      children: c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl text-foreground",
                            children: "Book This Service",
                          }),
                          c.jsxs("div", {
                            className:
                              "space-y-2 text-sm text-muted-foreground",
                            children: [
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Response Time:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "Same Day",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", {
                                    children: "Service Warranty:",
                                  }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "90 Days",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Available:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "24/7",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "border-t pt-4",
                            children: c.jsxs(_t, {
                              onClick: () => n(!0),
                              className:
                                "w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-normal",
                              children: [
                                c.jsx(Bi, { className: "w-5 h-5 mr-2" }),
                                "Book Service Now",
                              ],
                            }),
                          }),
                          c.jsx("div", {
                            className: "text-center pt-2",
                            children: c.jsx("a", {
                              href: "tel:+919241928068",
                              className:
                                "text-sm text-primary hover:text-primary/80",
                              children: "or call +91 92419 28068",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsx(Mo, {
          open: t,
          onOpenChange: n,
          defaultService: "Refrigerator Repair",
        }),
      ],
    });
  },
  M2 = "/assets/ac-BCcIqrC9.jpg",
  I2 = () => {
    const e = Wi(),
      [t, n] = f.useState(!1);
    return c.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        c.jsx(Vi, {}),
        c.jsxs("div", {
          className: "container px-4 md:px-8 py-12",
          children: [
            c.jsxs("button", {
              onClick: () => e("/"),
              className:
                "flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors",
              children: [c.jsx(Il, { className: "w-5 h-5" }), "Back to Home"],
            }),
            c.jsx("div", {
              className: "max-w-6xl mx-auto",
              children: c.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                  c.jsxs("div", {
                    className: "lg:col-span-2 space-y-6",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-full h-[400px] rounded-3xl overflow-hidden bg-secondary",
                        children: c.jsx("img", {
                          src: M2,
                          alt: "Air Conditioner Repair",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h1", {
                            className: "text-4xl text-foreground",
                            children: "Air Conditioner Repair & Service",
                          }),
                          c.jsxs("div", {
                            className: "space-y-3 text-muted-foreground",
                            children: [
                              c.jsx("p", {
                                children:
                                  "Comprehensive AC repair, installation, and maintenance services for all types - split, window, cassette, and central AC systems. Stay cool with our expert technicians.",
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "Common AC Issues We Fix:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children: "AC not cooling effectively",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Water leakage from indoor unit",
                                      }),
                                      c.jsx("li", {
                                        children: "Strange noises or odors",
                                      }),
                                      c.jsx("li", {
                                        children: "AC not turning on",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Frequent tripping of circuit",
                                      }),
                                      c.jsx("li", {
                                        children: "Remote control issues",
                                      }),
                                      c.jsx("li", {
                                        children: "Ice formation on coils",
                                      }),
                                      c.jsx("li", {
                                        children: "High electricity bills",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("h3", {
                                    className: "text-xl text-foreground",
                                    children: "Our AC Services Include:",
                                  }),
                                  c.jsxs("ul", {
                                    className:
                                      "list-disc list-inside space-y-1 ml-2",
                                    children: [
                                      c.jsx("li", {
                                        children:
                                          "Gas charging and leak repair",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Deep cleaning and sanitization",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Installation and uninstallation",
                                      }),
                                      c.jsx("li", {
                                        children: "Compressor replacement",
                                      }),
                                      c.jsx("li", {
                                        children: "PCB and sensor repair",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Filter cleaning and replacement",
                                      }),
                                      c.jsx("li", {
                                        children:
                                          "Annual maintenance contracts",
                                      }),
                                      c.jsx("li", {
                                        children: "Emergency 24/7 service",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsx("div", {
                                className: "bg-primary/5 rounded-2xl p-4 mt-6",
                                children: c.jsxs("p", {
                                  className: "text-sm",
                                  children: [
                                    c.jsx("strong", {
                                      className: "text-foreground",
                                      children: "Premium Service:",
                                    }),
                                    " Trained technicians, genuine spare parts, and eco-friendly refrigerants. All services backed by 90-day warranty.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "lg:col-span-1",
                    children: c.jsx("div", {
                      className:
                        "sticky top-4 bg-white rounded-3xl shadow-lg p-6 border border-border",
                      children: c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl text-foreground",
                            children: "Book This Service",
                          }),
                          c.jsxs("div", {
                            className:
                              "space-y-2 text-sm text-muted-foreground",
                            children: [
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Response Time:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "Same Day",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", {
                                    children: "Service Warranty:",
                                  }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "90 Days",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("span", { children: "Available:" }),
                                  c.jsx("span", {
                                    className: "text-foreground",
                                    children: "24/7",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "border-t pt-4",
                            children: c.jsxs(_t, {
                              onClick: () => n(!0),
                              className:
                                "w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-normal",
                              children: [
                                c.jsx(Bi, { className: "w-5 h-5 mr-2" }),
                                "Book Service Now",
                              ],
                            }),
                          }),
                          c.jsx("div", {
                            className: "text-center pt-2",
                            children: c.jsx("a", {
                              href: "tel:+919241928068",
                              className:
                                "text-sm text-primary hover:text-primary/80",
                              children: "or call +91 92419 28068",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsx(Mo, { open: t, onOpenChange: n, defaultService: "AC Repair" }),
      ],
    });
  },
  D2 = new Tb(),
  L2 = () =>
    c.jsx(Ob, {
      client: D2,
      children: c.jsxs(ib, {
        children: [
          c.jsx(BS, {}),
          c.jsx(xC, {}),
          c.jsx(bN, {
            children: c.jsxs(SN, {
              children: [
                c.jsx(rr, { path: "/", element: c.jsx(T2, {}) }),
                c.jsx(rr, { path: "/washing-machine", element: c.jsx(O2, {}) }),
                c.jsx(rr, { path: "/microwave-oven", element: c.jsx(_2, {}) }),
                c.jsx(rr, { path: "/refrigerator", element: c.jsx(A2, {}) }),
                c.jsx(rr, { path: "/air-conditioner", element: c.jsx(I2, {}) }),
                c.jsx(rr, { path: "*", element: c.jsx(R2, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
ov(document.getElementById("root")).render(c.jsx(L2, {}));
