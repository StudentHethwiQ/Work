(() => {
    "use strict";
    var e,
      r,
      t,
      o,
      n,
      a = {},
      i = {};
    function s(e) {
      var r = i[e];
      if (void 0 !== r) return r.exports;
      var t = (i[e] = { id: e, loaded: !1, exports: {} });
      return a[e].call(t.exports, t, t.exports, s), (t.loaded = !0), t.exports;
    }
    (s.m = a),
      (e = []),
      (s.O = (r, t, o, n) => {
        if (!t) {
          var a = 1 / 0;
          for (u = 0; u < e.length; u++) {
            for (var [t, o, n] = e[u], i = !0, l = 0; l < t.length; l++)
              (!1 & n || a >= n) && Object.keys(s.O).every((e) => s.O[e](t[l]))
                ? t.splice(l--, 1)
                : ((i = !1), n < a && (a = n));
            if (i) {
              e.splice(u--, 1);
              var d = o();
              void 0 !== d && (r = d);
            }
          }
          return r;
        }
        n = n || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
        e[u] = [t, o, n];
      }),
      (s.n = (e) => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return s.d(r, { a: r }), r;
      }),
      (t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__),
      (s.t = function (e, o) {
        if ((1 & o && (e = this(e)), 8 & o)) return e;
        if ("object" == typeof e && e) {
          if (4 & o && e.__esModule) return e;
          if (16 & o && "function" == typeof e.then) return e;
        }
        var n = Object.create(null);
        s.r(n);
        var a = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & o && e; "object" == typeof i && !~r.indexOf(i); i = t(i))
          Object.getOwnPropertyNames(i).forEach((r) => (a[r] = () => e[r]));
        return (a.default = () => e), s.d(n, a), n;
      }),
      (s.d = (e, r) => {
        for (var t in r)
          s.o(r, t) &&
            !s.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
      }),
      (s.f = {}),
      (s.e = (e) =>
        Promise.all(Object.keys(s.f).reduce((r, t) => (s.f[t](e, r), r), []))),
      (s.u = (e) =>
        e +
        "." +
        { 1322: "29658676", 2138: "626456c3", 4291: "7b91af3c" }[e] +
        ".js"),
      (s.miniCssF = (e) => {}),
      (s.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (s.hmd = (e) => (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      )),
      (s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (o = {}),
      (n = "awwwards-new:"),
      /*
      (s.l = (e, r, t, a) => {-------------
        if (o[e]) o[e].push(r);
        else {
          var i, l;
          if (void 0 !== t)
            for (
              var d = document.getElementsByTagName("script"), u = 0;
              u < d.length;
              u++
            ) {
              var c = d[u];
              if (
                c.getAttribute("src") == e ||
                c.getAttribute("data-webpack") == n + t
              ) {
                i = c;
                break;
              }
            }
          i ||
            ((l = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            s.nc && i.setAttribute("nonce", s.nc),
            i.setAttribute("data-webpack", n + t),
            (i.src = e)),
            (o[e] = [r]);
          var f = (r, t) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var n = o[e];
              if (
                (delete o[e],
                i.parentNode && i.parentNode.removeChild(i),
                n && n.forEach((e) => e(t)),
                r)
              )
                return r(t);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = f.bind(null, i.onerror)),
            (i.onload = f.bind(null, i.onload)),
            l && document.head.appendChild(i);
        }
      }),---------*/
      (s.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (s.p = "https://assets.awwwards.com/dist/js/"),
      (() => {
        var e = { 3666: 0 };
        (s.f.j = (r, t) => {
          var o = s.o(e, r) ? e[r] : void 0;
          if (0 !== o)
            if (o) t.push(o[2]);
            else if (3666 != r) {
              var n = new Promise((t, n) => (o = e[r] = [t, n]));
              t.push((o[2] = n));
              var a = s.p + s.u(r),
                i = new Error();
              s.l(
                a,
                (t) => {
                  if (s.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                    var n = t && ("load" === t.type ? "missing" : t.type),
                      a = t && t.target && t.target.src;
                    (i.message =
                      "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")"),
                      (i.name = "ChunkLoadError"),
                      (i.type = n),
                      (i.request = a),
                      o[1](i);
                  }
                },
                "chunk-" + r,
                r
              );
            } else e[r] = 0;
        }),
          (s.O.j = (r) => 0 === e[r]);
        var r = (r, t) => {
            var o,
              n,
              [a, i, l] = t,
              d = 0;
            if (a.some((r) => 0 !== e[r])) {
              for (o in i) s.o(i, o) && (s.m[o] = i[o]);
              if (l) var u = l(s);
            }
            for (r && r(t); d < a.length; d++)
              (n = a[d]), s.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
            return s.O(u);
          },
          t = (self.webpackChunkawwwards_new =
            self.webpackChunkawwwards_new || []);
        t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
      })();
  })();
  