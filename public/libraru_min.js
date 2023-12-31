!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports, require("react"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react"], n)
    : n(((e = e || self).ReactI18next = {}), e.React);
})(this, function (e, n) {
  "use strict";
  function t(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(e, n).enumerable;
        })),
        t.push.apply(t, r);
    }
    return t;
  }
  function r(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? t(Object(r), !0).forEach(function (n) {
            o(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : t(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function i(e) {
    return (i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function a(e, n) {
    for (var t = 0; t < n.length; t++) {
      var r = n[t];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function o(e, n, t) {
    return (
      n in e
        ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[n] = t),
      e
    );
  }
  function s(e, n) {
    if (null == e) return {};
    var t,
      r,
      i = (function (e, n) {
        if (null == e) return {};
        var t,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
        return i;
      })(e, n);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++)
        (t = a[r]),
          n.indexOf(t) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
  }
  function c(e, n) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, n) {
        var t =
          e &&
          (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"]);
        if (null == t) return;
        var r,
          i,
          a = [],
          o = !0,
          s = !1;
        try {
          for (
            t = t.call(e);
            !(o = (r = t.next()).done) &&
            (a.push(r.value), !n || a.length !== n);
            o = !0
          );
        } catch (e) {
          (s = !0), (i = e);
        } finally {
          try {
            o || null == t.return || t.return();
          } finally {
            if (s) throw i;
          }
        }
        return a;
      })(e, n) ||
      (function (e, n) {
        if (!e) return;
        if ("string" == typeof e) return u(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === t && e.constructor && (t = e.constructor.name);
        if ("Map" === t || "Set" === t) return Array.from(e);
        if (
          "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        )
          return u(e, n);
      })(e, n) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function u(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
    return r;
  }
  var l = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
    f = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
  function p(e) {
    var n = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] },
      t = e.match(/<\/?([^\s]+?)[/\s>]/);
    if (
      t &&
      ((n.name = t[1]),
      (l[t[1]] || "/" === e.charAt(e.length - 2)) && (n.voidElement = !0),
      n.name.startsWith("!--"))
    ) {
      var r = e.indexOf("--\x3e");
      return { type: "comment", comment: -1 !== r ? e.slice(4, r) : "" };
    }
    for (var i = new RegExp(f), a = null; null !== (a = i.exec(e)); )
      if (a[0].trim())
        if (a[1]) {
          var o = a[1].trim(),
            s = [o, ""];
          o.indexOf("=") > -1 && (s = o.split("=")),
            (n.attrs[s[0]] = s[1]),
            i.lastIndex--;
        } else
          a[2] && (n.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1));
    return n;
  }
  var d = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    g = /^\s*$/,
    m = Object.create(null);
  var h = function (e, n) {
    n || (n = {}), n.components || (n.components = m);
    var t,
      r = [],
      i = [],
      a = -1,
      o = !1;
    if (0 !== e.indexOf("<")) {
      var s = e.indexOf("<");
      r.push({ type: "text", content: -1 === s ? e : e.substring(0, s) });
    }
    return (
      e.replace(d, function (s, c) {
        if (o) {
          if (s !== "</" + t.name + ">") return;
          o = !1;
        }
        var u,
          l = "/" !== s.charAt(1),
          f = s.startsWith("\x3c!--"),
          d = c + s.length,
          m = e.charAt(d);
        if (f) {
          var h = p(s);
          return a < 0 ? (r.push(h), r) : ((u = i[a]).children.push(h), r);
        }
        if (
          (l &&
            (a++,
            "tag" === (t = p(s)).type &&
              n.components[t.name] &&
              ((t.type = "component"), (o = !0)),
            t.voidElement ||
              o ||
              !m ||
              "<" === m ||
              t.children.push({
                type: "text",
                content: e.slice(d, e.indexOf("<", d)),
              }),
            0 === a && r.push(t),
            (u = i[a - 1]) && u.children.push(t),
            (i[a] = t)),
          (!l || t.voidElement) &&
            (a > -1 &&
              (t.voidElement || t.name === s.slice(2, -1)) &&
              (a--, (t = -1 === a ? r : i[a])),
            !o && "<" !== m && m))
        ) {
          u = -1 === a ? r : i[a].children;
          var v = e.indexOf("<", d),
            y = e.slice(d, -1 === v ? void 0 : v);
          g.test(y) && (y = " "),
            ((v > -1 && a + u.length >= 0) || " " !== y) &&
              u.push({ type: "text", content: y });
        }
      }),
      r
    );
  };
  function v() {
    if (console && console.warn) {
      for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
        t[r] = arguments[r];
      "string" == typeof t[0] && (t[0] = "react-i18next:: ".concat(t[0])),
        (e = console).warn.apply(e, t);
    }
  }
  var y = {};
  function b() {
    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
      n[t] = arguments[t];
    ("string" == typeof n[0] && y[n[0]]) ||
      ("string" == typeof n[0] && (y[n[0]] = new Date()), v.apply(void 0, n));
  }
  function O(e, n, t) {
    e.loadNamespaces(n, function () {
      if (e.isInitialized) t();
      else {
        e.on("initialized", function n() {
          setTimeout(function () {
            e.off("initialized", n);
          }, 0),
            t();
        });
      }
    });
  }
  function x(e, n) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = n.languages[0],
      i = !!n.options && n.options.fallbackLng,
      a = n.languages[n.languages.length - 1];
    if ("cimode" === r.toLowerCase()) return !0;
    var o = function (e, t) {
      var r = n.services.backendConnector.state["".concat(e, "|").concat(t)];
      return -1 === r || 2 === r;
    };
    return (
      !(
        t.bindI18n &&
        t.bindI18n.indexOf("languageChanging") > -1 &&
        n.services.backendConnector.backend &&
        n.isLanguageChangingTo &&
        !o(n.isLanguageChangingTo, e)
      ) &&
      (!!n.hasResourceBundle(r, e) ||
        !(
          n.services.backendConnector.backend &&
          (!n.options.resources || n.options.partialBundledLanguages)
        ) ||
        !(!o(r, e) || (i && !o(a, e))))
    );
  }
  function w(e, n) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!n.languages || !n.languages.length)
      return b("i18n.languages were undefined or empty", n.languages), !0;
    var r = void 0 !== n.options.ignoreJSONStructure;
    return r
      ? n.hasLoadedNamespace(e, {
          precheck: function (n, r) {
            if (
              t.bindI18n &&
              t.bindI18n.indexOf("languageChanging") > -1 &&
              n.services.backendConnector.backend &&
              n.isLanguageChangingTo &&
              !r(n.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : x(e, n, t);
  }
  function S(e) {
    return (
      e.displayName ||
      e.name ||
      ("string" == typeof e && e.length > 0 ? e : "Unknown")
    );
  }
  var j,
    E =
      /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    N = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"',
      "&nbsp;": " ",
      "&#160;": " ",
      "&copy;": "©",
      "&#169;": "©",
      "&reg;": "®",
      "&#174;": "®",
      "&hellip;": "…",
      "&#8230;": "…",
      "&#x2F;": "/",
      "&#47;": "/",
    },
    k = function (e) {
      return N[e];
    },
    I = {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: !0,
      transWrapTextNodes: "",
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
      useSuspense: !0,
      unescape: function (e) {
        return e.replace(E, k);
      },
    };
  function P() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    I = r(r({}, I), e);
  }
  function R() {
    return I;
  }
  function C(e) {
    j = e;
  }
  function T() {
    return j;
  }
  var A = ["format"],
    L = [
      "children",
      "count",
      "parent",
      "i18nKey",
      "context",
      "tOptions",
      "values",
      "defaults",
      "components",
      "ns",
      "i18n",
      "t",
      "shouldUnescape",
    ];
  function U(e, n) {
    if (!e) return !1;
    var t = e.props ? e.props.children : e.children;
    return n ? t.length > 0 : !!t;
  }
  function z(e) {
    return e ? (e.props ? e.props.children : e.children) : [];
  }
  function B(e) {
    return Array.isArray(e) ? e : [e];
  }
  function K(e, t, a, o, s, c) {
    if ("" === t) return [];
    var u = o.transKeepBasicHtmlNodesFor || [],
      l = t && new RegExp(u.join("|")).test(t);
    if (!e && !l) return [t];
    var f = {};
    !(function e(t) {
      B(t).forEach(function (t) {
        "string" != typeof t &&
          (U(t)
            ? e(z(t))
            : "object" !== i(t) || n.isValidElement(t) || Object.assign(f, t));
      });
    })(e);
    var p = h("<0>".concat(t, "</0>")),
      d = r(r({}, f), s);
    function g(e, t, r) {
      var i = z(e),
        a = v(i, t.children, r);
      return (function (e) {
        return (
          "[object Array]" === Object.prototype.toString.call(e) &&
          e.every(function (e) {
            return n.isValidElement(e);
          })
        );
      })(i) && 0 === a.length
        ? i
        : a;
    }
    function m(e, t, i, a, o) {
      e.dummy && (e.children = t),
        i.push(
          n.cloneElement(e, r(r({}, e.props), {}, { key: a }), o ? void 0 : t)
        );
    }
    function v(t, s, f) {
      var p = B(t);
      return B(s).reduce(function (t, s, h) {
        var y,
          b,
          O,
          x =
            s.children &&
            s.children[0] &&
            s.children[0].content &&
            a.services.interpolator.interpolate(
              s.children[0].content,
              d,
              a.language
            );
        if ("tag" === s.type) {
          var w = p[parseInt(s.name, 10)];
          !w && 1 === f.length && f[0][s.name] && (w = f[0][s.name]),
            w || (w = {});
          var S =
              0 !== Object.keys(s.attrs).length
                ? ((y = { props: s.attrs }),
                  ((O = r({}, (b = w))).props = Object.assign(
                    y.props,
                    b.props
                  )),
                  O)
                : w,
            j = n.isValidElement(S),
            E = j && U(s, !0) && !s.voidElement,
            N = l && "object" === i(S) && S.dummy && !j,
            k =
              "object" === i(e) &&
              null !== e &&
              Object.hasOwnProperty.call(e, s.name);
          if ("string" == typeof S) {
            var I = a.services.interpolator.interpolate(S, d, a.language);
            t.push(I);
          } else if (U(S) || E) {
            m(S, g(S, s, f), t, h);
          } else if (N) {
            var P = v(p, s.children, f);
            t.push(n.cloneElement(S, r(r({}, S.props), {}, { key: h }), P));
          } else if (Number.isNaN(parseFloat(s.name))) {
            if (k) m(S, g(S, s, f), t, h, s.voidElement);
            else if (o.transSupportBasicHtmlNodes && u.indexOf(s.name) > -1)
              if (s.voidElement)
                t.push(
                  n.createElement(s.name, {
                    key: "".concat(s.name, "-").concat(h),
                  })
                );
              else {
                var R = v(p, s.children, f);
                t.push(
                  n.createElement(
                    s.name,
                    { key: "".concat(s.name, "-").concat(h) },
                    R
                  )
                );
              }
            else if (s.voidElement) t.push("<".concat(s.name, " />"));
            else {
              var C = v(p, s.children, f);
              t.push(
                "<".concat(s.name, ">").concat(C, "</").concat(s.name, ">")
              );
            }
          } else if ("object" !== i(S) || j)
            1 === s.children.length && x
              ? t.push(n.cloneElement(S, r(r({}, S.props), {}, { key: h }), x))
              : t.push(n.cloneElement(S, r(r({}, S.props), {}, { key: h })));
          else {
            var T = s.children[0] ? x : null;
            T && t.push(T);
          }
        } else if ("text" === s.type) {
          var A = o.transWrapTextNodes,
            L = c
              ? o.unescape(
                  a.services.interpolator.interpolate(s.content, d, a.language)
                )
              : a.services.interpolator.interpolate(s.content, d, a.language);
          A
            ? t.push(
                n.createElement(A, { key: "".concat(s.name, "-").concat(h) }, L)
              )
            : t.push(L);
        }
        return t;
      }, []);
    }
    return z(v([{ dummy: !0, children: e || [] }], p, B(e || []))[0]);
  }
  function D(e) {
    var t = e.children,
      a = e.count,
      o = e.parent,
      c = e.i18nKey,
      u = e.context,
      l = e.tOptions,
      f = void 0 === l ? {} : l,
      p = e.values,
      d = e.defaults,
      g = e.components,
      m = e.ns,
      h = e.i18n,
      y = e.t,
      O = e.shouldUnescape,
      x = s(e, L),
      w = h || T();
    if (!w)
      return (
        b(
          "You will need to pass in an i18next instance by using i18nextReactModule"
        ),
        t
      );
    var S =
      y ||
      w.t.bind(w) ||
      function (e) {
        return e;
      };
    u && (f.context = u);
    var j = r(r({}, R()), w.options && w.options.react),
      E = m || S.ns || (w.options && w.options.defaultNS);
    E = "string" == typeof E ? [E] : E || ["translation"];
    var N =
        d ||
        (function e(t, r) {
          if (!t) return "";
          var a = "",
            o = B(t),
            c =
              r.transSupportBasicHtmlNodes && r.transKeepBasicHtmlNodesFor
                ? r.transKeepBasicHtmlNodesFor
                : [];
          return (
            o.forEach(function (t, o) {
              if ("string" == typeof t) a += "".concat(t);
              else if (n.isValidElement(t)) {
                var u = Object.keys(t.props).length,
                  l = c.indexOf(t.type) > -1,
                  f = t.props.children;
                if (!f && l && 0 === u) a += "<".concat(t.type, "/>");
                else if (f || (l && 0 === u))
                  if (t.props.i18nIsDynamicList)
                    a += "<".concat(o, "></").concat(o, ">");
                  else if (l && 1 === u && "string" == typeof f)
                    a += "<"
                      .concat(t.type, ">")
                      .concat(f, "</")
                      .concat(t.type, ">");
                  else {
                    var p = e(f, r);
                    a += "<".concat(o, ">").concat(p, "</").concat(o, ">");
                  }
                else a += "<".concat(o, "></").concat(o, ">");
              } else if (null === t)
                v(
                  "Trans: the passed in value is invalid - seems you passed in a null child."
                );
              else if ("object" === i(t)) {
                var d = t.format,
                  g = s(t, A),
                  m = Object.keys(g);
                if (1 === m.length) {
                  var h = d ? "".concat(m[0], ", ").concat(d) : m[0];
                  a += "{{".concat(h, "}}");
                } else
                  v(
                    "react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",
                    t
                  );
              } else
                v(
                  "Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",
                  t
                );
            }),
            a
          );
        })(t, j) ||
        j.transEmptyNodeValue ||
        c,
      k = j.hashTransKey,
      I = c || (k ? k(N) : N),
      P = p
        ? f.interpolation
        : {
            interpolation: r(
              r({}, f.interpolation),
              {},
              { prefix: "#$?", suffix: "?$#" }
            ),
          },
      C = r(
        r(r(r({}, f), {}, { count: a }, p), P),
        {},
        { defaultValue: N, ns: E }
      ),
      U = K(g || t, I ? S(I, C) : N, w, j, C, O),
      z = void 0 !== o ? o : j.defaultTransParent;
    return z ? n.createElement(z, x, U) : U;
  }
  var F = {
      type: "3rdParty",
      init: function (e) {
        P(e.options.react), C(e);
      },
    },
    H = n.createContext(),
    V = (function () {
      function e() {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.usedNamespaces = {});
      }
      var n, t, r;
      return (
        (n = e),
        (t = [
          {
            key: "addUsedNamespaces",
            value: function (e) {
              var n = this;
              e.forEach(function (e) {
                n.usedNamespaces[e] || (n.usedNamespaces[e] = !0);
              });
            },
          },
          {
            key: "getUsedNamespaces",
            value: function () {
              return Object.keys(this.usedNamespaces);
            },
          },
        ]) && a(n.prototype, t),
        r && a(n, r),
        e
      );
    })();
  function W(e) {
    return function (n) {
      return new Promise(function (t) {
        var i = M();
        e.getInitialProps
          ? e.getInitialProps(n).then(function (e) {
              t(r(r({}, e), i));
            })
          : t(i);
      });
    };
  }
  function M() {
    var e = T(),
      n = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [],
      t = {},
      r = {};
    return (
      e.languages.forEach(function (t) {
        (r[t] = {}),
          n.forEach(function (n) {
            r[t][n] = e.getResourceBundle(t, n) || {};
          });
      }),
      (t.initialI18nStore = r),
      (t.initialLanguage = e.language),
      t
    );
  }
  var $ = [
    "children",
    "count",
    "parent",
    "i18nKey",
    "context",
    "tOptions",
    "values",
    "defaults",
    "components",
    "ns",
    "i18n",
    "t",
    "shouldUnescape",
  ];
  var q = function (e, t) {
    var r = n.useRef();
    return (
      n.useEffect(
        function () {
          r.current = t ? r.current : e;
        },
        [e, t]
      ),
      r.current
    );
  };
  function Y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = t.i18n,
      a = n.useContext(H) || {},
      o = a.i18n,
      s = a.defaultNS,
      u = i || o || T();
    if ((u && !u.reportNamespaces && (u.reportNamespaces = new V()), !u)) {
      b(
        "You will need to pass in an i18next instance by using initReactI18next"
      );
      var l = function (e) {
          return Array.isArray(e) ? e[e.length - 1] : e;
        },
        f = [l, {}, !1];
      return (f.t = l), (f.i18n = {}), (f.ready = !1), f;
    }
    u.options.react &&
      void 0 !== u.options.react.wait &&
      b(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    var p = r(r(r({}, R()), u.options.react), t),
      d = p.useSuspense,
      g = p.keyPrefix,
      m = e || s || (u.options && u.options.defaultNS);
    (m = "string" == typeof m ? [m] : m || ["translation"]),
      u.reportNamespaces.addUsedNamespaces &&
        u.reportNamespaces.addUsedNamespaces(m);
    var h =
      (u.isInitialized || u.initializedStoreOnce) &&
      m.every(function (e) {
        return w(e, u, p);
      });
    function v() {
      return u.getFixedT(null, "fallback" === p.nsMode ? m : m[0], g);
    }
    var y = n.useState(v),
      x = c(y, 2),
      S = x[0],
      j = x[1],
      E = m.join(),
      N = q(E),
      k = n.useRef(!0);
    n.useEffect(
      function () {
        var e = p.bindI18n,
          n = p.bindI18nStore;
        function t() {
          k.current && j(v);
        }
        return (
          (k.current = !0),
          h ||
            d ||
            O(u, m, function () {
              k.current && j(v);
            }),
          h && N && N !== E && k.current && j(v),
          e && u && u.on(e, t),
          n && u && u.store.on(n, t),
          function () {
            (k.current = !1),
              e &&
                u &&
                e.split(" ").forEach(function (e) {
                  return u.off(e, t);
                }),
              n &&
                u &&
                n.split(" ").forEach(function (e) {
                  return u.store.off(e, t);
                });
          }
        );
      },
      [u, E]
    );
    var I = n.useRef(!0);
    n.useEffect(
      function () {
        k.current && !I.current && j(v), (I.current = !1);
      },
      [u, g]
    );
    var P = [S, u, h];
    if (((P.t = S), (P.i18n = u), (P.ready = h), h)) return P;
    if (!h && !d) return P;
    throw new Promise(function (e) {
      O(u, m, function () {
        e();
      });
    });
  }
  var _ = ["forwardedRef"];
  var J = ["ns", "children"];
  function Z(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = r.i18n,
      a = n.useContext(H) || {},
      o = a.i18n,
      s = i || o || T();
    (s.options && s.options.isClone) ||
      (e &&
        !s.initializedStoreOnce &&
        ((s.services.resourceStore.data = e),
        (s.options.ns = Object.values(e).reduce(function (e, n) {
          return (
            Object.keys(n).forEach(function (n) {
              e.indexOf(n) < 0 && e.push(n);
            }),
            e
          );
        }, s.options.ns)),
        (s.initializedStoreOnce = !0),
        (s.isInitialized = !0)),
      t &&
        !s.initializedLanguageOnce &&
        (s.changeLanguage(t), (s.initializedLanguageOnce = !0)));
  }
  var G = ["initialI18nStore", "initialLanguage"];
  (e.I18nContext = H),
    (e.I18nextProvider = function (e) {
      var t = e.i18n,
        r = e.defaultNS,
        i = e.children,
        a = n.useMemo(
          function () {
            return { i18n: t, defaultNS: r };
          },
          [t, r]
        );
      return n.createElement(H.Provider, { value: a }, i);
    }),
    (e.Trans = function (e) {
      var t = e.children,
        i = e.count,
        a = e.parent,
        o = e.i18nKey,
        c = e.context,
        u = e.tOptions,
        l = void 0 === u ? {} : u,
        f = e.values,
        p = e.defaults,
        d = e.components,
        g = e.ns,
        m = e.i18n,
        h = e.t,
        v = e.shouldUnescape,
        y = s(e, $),
        b = n.useContext(H) || {},
        O = b.i18n,
        x = b.defaultNS,
        w = m || O || T(),
        S = h || (w && w.t.bind(w));
      return D(
        r(
          {
            children: t,
            count: i,
            parent: a,
            i18nKey: o,
            context: c,
            tOptions: l,
            values: f,
            defaults: p,
            components: d,
            ns:
              g || (S && S.ns) || x || (w && w.options && w.options.defaultNS),
            i18n: w,
            t: h,
            shouldUnescape: v,
          },
          y
        )
      );
    }),
    (e.TransWithoutContext = D),
    (e.Translation = function (e) {
      var n = e.ns,
        t = e.children,
        r = c(Y(n, s(e, J)), 3),
        i = r[0],
        a = r[1],
        o = r[2];
      return t(i, { i18n: a, lng: a.language }, o);
    }),
    (e.composeInitialProps = W),
    (e.date = function () {
      return "";
    }),
    (e.getDefaults = R),
    (e.getI18n = T),
    (e.getInitialProps = M),
    (e.initReactI18next = F),
    (e.number = function () {
      return "";
    }),
    (e.plural = function () {
      return "";
    }),
    (e.select = function () {
      return "";
    }),
    (e.selectOrdinal = function () {
      return "";
    }),
    (e.setDefaults = P),
    (e.setI18n = C),
    (e.time = function () {
      return "";
    }),
    (e.useSSR = Z),
    (e.useTranslation = Y),
    (e.withSSR = function () {
      return function (e) {
        function t(t) {
          var i = t.initialI18nStore,
            a = t.initialLanguage,
            o = s(t, G);
          return Z(i, a), n.createElement(e, r({}, o));
        }
        return (
          (t.getInitialProps = W(e)),
          (t.displayName = "withI18nextSSR(".concat(S(e), ")")),
          (t.WrappedComponent = e),
          t
        );
      };
    }),
    (e.withTranslation = function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (i) {
        function a(a) {
          var o = a.forwardedRef,
            u = s(a, _),
            l = c(Y(e, r(r({}, u), {}, { keyPrefix: t.keyPrefix })), 3),
            f = l[0],
            p = l[1],
            d = l[2],
            g = r(r({}, u), {}, { t: f, i18n: p, tReady: d });
          return (
            t.withRef && o
              ? (g.ref = o)
              : !t.withRef && o && (g.forwardedRef = o),
            n.createElement(i, g)
          );
        }
        (a.displayName = "withI18nextTranslation(".concat(S(i), ")")),
          (a.WrappedComponent = i);
        return t.withRef
          ? n.forwardRef(function (e, t) {
              return n.createElement(
                a,
                Object.assign({}, e, { forwardedRef: t })
              );
            })
          : a;
      };
    }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
