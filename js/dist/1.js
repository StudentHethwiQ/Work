"use strict";
(self.webpackChunkawwwards_new = self.webpackChunkawwwards_new || []).push([
  [5716],
  {
    5317: (t, e, r) => {
      function i(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function n(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      r.d(e, {
        $i: () => at,
        DY: () => ct,
        EA: () => Or,
        Fc: () => T,
        Fo: () => cr,
        GN: () => be,
        JV: () => lr,
        Ks: () => ar,
        Ok: () => pt,
        Pr: () => dt,
        S5: () => ir,
        SI: () => N,
        UI: () => fe,
        Wy: () => Jt,
        bQ: () => V,
        cy: () => gt,
        d4: () => X,
        fS: () => _t,
        if: () => je,
        kr: () => Me,
        l1: () => Ye,
        lC: () => H,
        m2: () => F,
        p8: () => Mr,
        r9: () => D,
        xr: () => Oe,
      });
      var s,
        a,
        o,
        u,
        h,
        f,
        l,
        c,
        p,
        _,
        d,
        m,
        g,
        v,
        y,
        T = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        x = { duration: 0.5, overwrite: !1, delay: 0 },
        w = 1e8,
        b = 1e-8,
        k = 2 * Math.PI,
        M = k / 4,
        O = 0,
        P = Math.sqrt,
        A = Math.cos,
        C = Math.sin,
        D = function (t) {
          return "string" == typeof t;
        },
        S = function (t) {
          return "function" == typeof t;
        },
        E = function (t) {
          return "number" == typeof t;
        },
        F = function (t) {
          return void 0 === t;
        },
        R = function (t) {
          return "object" == typeof t;
        },
        z = function (t) {
          return !1 !== t;
        },
        B = function () {
          return "undefined" != typeof window;
        },
        I = function (t) {
          return S(t) || D(t);
        },
        L =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        Y = Array.isArray,
        U = /(?:-?\.?\d|\.)+/gi,
        N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        X = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        V = /[+-]=-?[.\d]+/,
        W = /[^,'"\[\]\s]+/gi,
        j = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        G = {},
        Q = {},
        $ = function (t) {
          return (Q = kt(t, G)) && Mr;
        },
        H = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        Z = function (t, e) {
          return !e && console.warn(t);
        },
        J = function (t, e) {
          return (t && (G[t] = e) && Q && (Q[t] = e)) || G;
        },
        K = function () {
          return 0;
        },
        tt = { suppressEvents: !0, isStart: !0, kill: !1 },
        et = { suppressEvents: !0, kill: !1 },
        rt = { suppressEvents: !0 },
        it = {},
        nt = [],
        st = {},
        at = {},
        ot = {},
        ut = 30,
        ht = [],
        ft = "",
        lt = function (t) {
          var e,
            r,
            i = t[0];
          if ((R(i) || S(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (r = ht.length; r-- && !ht[r].targetTest(i); );
            e = ht[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new Ye(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        ct = function (t) {
          return t._gsap || lt(re(t))[0]._gsap;
        },
        pt = function (t, e, r) {
          return (r = t[e]) && S(r)
            ? t[e]()
            : (F(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        _t = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        dt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        mt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        gt = function (t, e) {
          var r = e.charAt(0),
            i = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
          );
        },
        vt = function (t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
          return i < r;
        },
        yt = function () {
          var t,
            e,
            r = nt.length,
            i = nt.slice(0);
          for (st = {}, nt.length = 0, t = 0; t < r; t++)
            (e = i[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Tt = function (t, e, r, i) {
          nt.length && !a && yt(),
            t.render(e, r, i || (a && e < 0 && (t._initted || t._startAt))),
            nt.length && !a && yt();
        },
        xt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(W).length < 2
            ? e
            : D(t)
            ? t.trim()
            : t;
        },
        wt = function (t) {
          return t;
        },
        bt = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        kt = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        Mt = function t(e, r) {
          for (var i in r)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (e[i] = R(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e;
        },
        Ot = function (t, e) {
          var r,
            i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i;
        },
        Pt = function (t) {
          var e,
            r = t.parent || u,
            i = t.keyframes
              ? ((e = Y(t.keyframes)),
                function (t, r) {
                  for (var i in r)
                    i in t ||
                      ("duration" === i && e) ||
                      "ease" === i ||
                      (t[i] = r[i]);
                })
              : bt;
          if (z(t.inherit))
            for (; r; ) i(t, r.vars.defaults), (r = r.parent || r._dp);
          return t;
        },
        At = function (t, e, r, i, n) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var s,
            a = t[i];
          if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[i] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          );
        },
        Ct = function (t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? (n._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = n) : t[i] === e && (t[i] = n),
            (e._next = e._prev = e.parent = null);
        },
        Dt = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        St = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        Et = function (t, e, r, i) {
          return (
            t._startAt &&
            (a
              ? t._startAt.revert(et)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, i))
          );
        },
        Ft = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        Rt = function (t) {
          return t._repeat
            ? zt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        zt = function (t, e) {
          var r = Math.floor((t /= e));
          return t && r === t ? r - 1 : r;
        },
        Bt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        It = function (t) {
          return (t._end = mt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || b) || 0)
          ));
        },
        Lt = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = mt(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              It(t),
              r._dirty || St(r, t)),
            t
          );
        },
        Yt = function (t, e) {
          var r;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((r = Bt(t.rawTime(), e)),
              (!e._dur || Zt(0, e.totalDuration(), r) - e._tTime > b) &&
                e.render(r, !0)),
            St(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
          }
        },
        Ut = function (t, e, r, i) {
          return (
            e.parent && Dt(e),
            (e._start = mt(
              (E(r) ? r : r || t !== u ? Qt(t, r, e) : t._time) + e._delay
            )),
            (e._end = mt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            At(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Vt(e) || (t._recent = e),
            i || Yt(t, e),
            t._ts < 0 && Lt(t, t._tTime),
            t
          );
        },
        Nt = function (t, e) {
          return (
            (G.ScrollTrigger || H("scrollTrigger", e)) &&
            G.ScrollTrigger.create(e, t)
          );
        },
        Xt = function (t, e, r, i, n) {
          return (
            Ge(t, e, n),
            t._initted
              ? !r &&
                t._pt &&
                !a &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                p !== Oe.frame
                ? (nt.push(t), (t._lazy = [n, i]), 1)
                : void 0
              : 1
          );
        },
        qt = function t(e) {
          var r = e.parent;
          return (
            r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
          );
        },
        Vt = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        Wt = function (t, e, r, i) {
          var n = t._repeat,
            s = mt(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !i && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = n
              ? n < 0
                ? 1e10
                : mt(s * (n + 1) + t._rDelay * n)
              : s),
            a > 0 && !i && Lt(t, (t._tTime = t._tDur * a)),
            t.parent && It(t),
            r || St(t.parent, t),
            t
          );
        },
        jt = function (t) {
          return t instanceof Ne ? St(t) : Wt(t, t._dur);
        },
        Gt = { _start: 0, endTime: K, totalDuration: K },
        Qt = function t(e, r, i) {
          var n,
            s,
            a,
            o = e.labels,
            u = e._recent || Gt,
            h = e.duration() >= w ? u.endTime(!1) : e._dur;
          return D(r) && (isNaN(r) || r in o)
            ? ((s = r.charAt(0)),
              (a = "%" === r.substr(-1)),
              (n = r.indexOf("=")),
              "<" === s || ">" === s
                ? (n >= 0 && (r = r.replace(/=/, "")),
                  ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(r.substr(1)) || 0) *
                      (a ? (n < 0 ? u : i).totalDuration() / 100 : 1))
                : n < 0
                ? (r in o || (o[r] = h), o[r])
                : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
                  a && i && (s = (s / 100) * (Y(i) ? i[0] : i).totalDuration()),
                  n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s))
            : null == r
            ? h
            : +r;
        },
        $t = function (t, e, r) {
          var i,
            n,
            s = E(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if ((s && (o.duration = e[1]), (o.parent = r), t)) {
            for (i = o, n = r; n && !("immediateRender" in i); )
              (i = n.vars.defaults || {}), (n = z(n.vars.inherit) && n.parent);
            (o.immediateRender = z(i.immediateRender)),
              t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
          }
          return new Je(e[0], o, e[a + 1]);
        },
        Ht = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        Zt = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        Jt = function (t, e) {
          return D(t) && (e = j.exec(t)) ? e[1] : "";
        },
        Kt = [].slice,
        te = function (t, e) {
          return (
            t &&
            R(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && R(t[0]))) &&
            !t.nodeType &&
            t !== h
          );
        },
        ee = function (t, e, r) {
          return (
            void 0 === r && (r = []),
            t.forEach(function (t) {
              var i;
              return (D(t) && !e) || te(t, 1)
                ? (i = r).push.apply(i, re(t))
                : r.push(t);
            }) || r
          );
        },
        re = function (t, e, r) {
          return o && !e && o.selector
            ? o.selector(t)
            : !D(t) || r || (!f && Pe())
            ? Y(t)
              ? ee(t, r)
              : te(t)
              ? Kt.call(t, 0)
              : t
              ? [t]
              : []
            : Kt.call((e || l).querySelectorAll(t), 0);
        },
        ie = function (t) {
          return (
            (t = re(t)[0] || Z("Invalid scope") || {}),
            function (e) {
              var r = t.current || t.nativeElement || t;
              return re(
                e,
                r.querySelectorAll
                  ? r
                  : r === t
                  ? Z("Invalid scope") || l.createElement("div")
                  : t
              );
            }
          );
        },
        ne = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        se = function (t) {
          if (S(t)) return t;
          var e = R(t) ? t : { each: t },
            r = Re(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            o = isNaN(i) || a,
            u = e.axis,
            h = i,
            f = i;
          return (
            D(i)
              ? (h = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !a && o && ((h = i[0]), (f = i[1])),
            function (t, a, l) {
              var c,
                p,
                _,
                d,
                m,
                g,
                v,
                y,
                T,
                x = (l || e).length,
                b = s[x];
              if (!b) {
                if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, w])[1])) {
                  for (
                    v = -w;
                    v < (v = l[T++].getBoundingClientRect().left) && T < x;

                  );
                  T--;
                }
                for (
                  b = s[x] = [],
                    c = o ? Math.min(T, x) * h - 0.5 : i % T,
                    p = T === w ? 0 : o ? (x * f) / T - 0.5 : (i / T) | 0,
                    v = 0,
                    y = w,
                    g = 0;
                  g < x;
                  g++
                )
                  (_ = (g % T) - c),
                    (d = p - ((g / T) | 0)),
                    (b[g] = m =
                      u ? Math.abs("y" === u ? d : _) : P(_ * _ + d * d)),
                    m > v && (v = m),
                    m < y && (y = m);
                "random" === i && ne(b),
                  (b.max = v - y),
                  (b.min = y),
                  (b.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (T > x
                          ? x - 1
                          : u
                          ? "y" === u
                            ? x / T
                            : T
                          : Math.max(T, x / T)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (b.b = x < 0 ? n - x : n),
                  (b.u = Jt(e.amount || e.each) || 0),
                  (r = r && x < 0 ? Ee(r) : r);
              }
              return (
                (x = (b[t] - b.min) / b.max || 0),
                mt(b.b + (r ? r(x) : x) * b.v) + b.u
              );
            }
          );
        },
        ae = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var i = mt(Math.round(parseFloat(r) / t) * t * e);
            return (i - (i % 1)) / e + (E(r) ? 0 : Jt(r));
          };
        },
        oe = function (t, e) {
          var r,
            i,
            n = Y(t);
          return (
            !n &&
              R(t) &&
              ((r = n = t.radius || w),
              t.values
                ? ((t = re(t.values)), (i = !E(t[0])) && (r *= r))
                : (t = ae(t.increment))),
            Ht(
              e,
              n
                ? S(t)
                  ? function (e) {
                      return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                    }
                  : function (e) {
                      for (
                        var n,
                          s,
                          a = parseFloat(i ? e.x : e),
                          o = parseFloat(i ? e.y : 0),
                          u = w,
                          h = 0,
                          f = t.length;
                        f--;

                      )
                        (n = i
                          ? (n = t[f].x - a) * n + (s = t[f].y - o) * s
                          : Math.abs(t[f] - a)) < u && ((u = n), (h = f));
                      return (
                        (h = !r || u <= r ? t[h] : e),
                        i || h === e || E(e) ? h : h + Jt(e)
                      );
                    }
                : ae(t)
            )
          );
        },
        ue = function (t, e, r, i) {
          return Ht(Y(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
            return Y(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      i
                  ) / i;
          });
        },
        he = function (t, e, r) {
          return Ht(r, function (r) {
            return t[~~e(r)];
          });
        },
        fe = function (t) {
          for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            (i = t.indexOf(")", e)),
              (n = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, i - e - 7).match(n ? W : U)),
              (a +=
                t.substr(s, e - s) +
                ue(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
              (s = i + 1);
          return a + t.substr(s, t.length - s);
        },
        le = function (t, e, r, i, n) {
          var s = e - t,
            a = i - r;
          return Ht(n, function (e) {
            return r + (((e - t) / s) * a || 0);
          });
        },
        ce = function (t, e, r) {
          var i,
            n,
            s,
            a = t.labels,
            o = w;
          for (i in a)
            (n = a[i] - e) < 0 == !!r &&
              n &&
              o > (n = Math.abs(n)) &&
              ((s = i), (o = n));
          return s;
        },
        pe = function (t, e, r) {
          var i,
            n,
            s,
            a = t.vars,
            u = a[e],
            h = o,
            f = t._ctx;
          if (u)
            return (
              (i = a[e + "Params"]),
              (n = a.callbackScope || t),
              r && nt.length && yt(),
              f && (o = f),
              (s = i ? u.apply(n, i) : u.call(n)),
              (o = h),
              s
            );
        },
        _e = function (t) {
          return (
            Dt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!a),
            t.progress() < 1 && pe(t, "onInterrupt"),
            t
          );
        },
        de = [],
        me = function (t) {
          if (B() && t) {
            var e = (t = (!t.name && t.default) || t).name,
              r = S(t),
              i =
                e && !r && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              n = {
                init: K,
                render: or,
                add: We,
                kill: hr,
                modifier: ur,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: ir,
                aliases: {},
                register: 0,
              };
            if ((Pe(), t !== i)) {
              if (at[e]) return;
              bt(i, bt(Ot(t, n), s)),
                kt(i.prototype, kt(n, Ot(t, s))),
                (at[(i.prop = e)] = i),
                t.targetTest && (ht.push(i), (it[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            J(e, i), t.register && t.register(Mr, i, cr);
          } else t && de.push(t);
        },
        ge = 255,
        ve = {
          aqua: [0, ge, ge],
          lime: [0, ge, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ge],
          navy: [0, 0, 128],
          white: [ge, ge, ge],
          olive: [128, 128, 0],
          yellow: [ge, ge, 0],
          orange: [ge, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ge, 0, 0],
          pink: [ge, 192, 203],
          cyan: [0, ge, ge],
          transparent: [ge, ge, ge, 0],
        },
        ye = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              ge +
              0.5) |
            0
          );
        },
        Te = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            f,
            l,
            c,
            p = t ? (E(t) ? [t >> 16, (t >> 8) & ge, t & ge] : 0) : ve.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ve[t])
            )
              p = ve[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((i = t.charAt(1)),
                  (n = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t =
                    "#" +
                    i +
                    i +
                    n +
                    n +
                    s +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & ge,
                  p & ge,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & ge,
                t & ge,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((p = c = t.match(U)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(N)), r && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (o = +p[1] / 100),
                  (i =
                    2 * (u = +p[2] / 100) -
                    (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = ye(a + 1 / 3, i, n)),
                  (p[1] = ye(a, i, n)),
                  (p[2] = ye(a - 1 / 3, i, n));
            else p = t.match(U) || ve.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !c &&
              ((i = p[0] / ge),
              (n = p[1] / ge),
              (s = p[2] / ge),
              (u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2),
              h === f
                ? (a = o = 0)
                : ((l = h - f),
                  (o = u > 0.5 ? l / (2 - h - f) : l / (h + f)),
                  (a =
                    h === i
                      ? (n - s) / l + (n < s ? 6 : 0)
                      : h === n
                      ? (s - i) / l + 2
                      : (i - n) / l + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * o + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          );
        },
        xe = function (t) {
          var e = [],
            r = [],
            i = -1;
          return (
            t.split(be).forEach(function (t) {
              var n = t.match(X) || [];
              e.push.apply(e, n), r.push((i += n.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        we = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o = "",
            u = (t + o).match(be),
            h = e ? "hsla(" : "rgba(",
            f = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = Te(t, e, 1)) &&
                h +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = xe(t)), (i = r.c).join(o) !== s.c.join(o)))
          )
            for (a = (n = t.replace(be, "1").split(X)).length - 1; f < a; f++)
              o +=
                n[f] +
                (~i.indexOf(f)
                  ? u.shift() || h + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : r).shift());
          if (!n)
            for (a = (n = t.split(be)).length - 1; f < a; f++) o += n[f] + u[f];
          return o + n[a];
        },
        be = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ve) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        ke = /hsl[a]?\(/,
        Me = function (t) {
          var e,
            r = t.join(" ");
          if (((be.lastIndex = 0), be.test(r)))
            return (
              (e = ke.test(r)),
              (t[1] = we(t[1], e)),
              (t[0] = we(t[0], e, xe(t[1]))),
              !0
            );
        },
        Oe = (function () {
          var t,
            e,
            r,
            i,
            n,
            s,
            a = Date.now,
            o = 500,
            u = 33,
            p = a(),
            _ = p,
            m = 1e3 / 240,
            g = m,
            v = [],
            y = function r(h) {
              var f,
                l,
                c,
                d,
                y = a() - _,
                T = !0 === h;
              if (
                (y > o && (p += y - u),
                ((f = (c = (_ += y) - p) - g) > 0 || T) &&
                  ((d = ++i.frame),
                  (n = c - 1e3 * i.time),
                  (i.time = c /= 1e3),
                  (g += f + (f >= m ? 4 : m - f)),
                  (l = 1)),
                T || (t = e(r)),
                l)
              )
                for (s = 0; s < v.length; s++) v[s](c, n, d, h);
            };
          return (i = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0);
            },
            deltaRatio: function (t) {
              return n / (1e3 / (t || 60));
            },
            wake: function () {
              c &&
                (!f &&
                  B() &&
                  ((h = f = window),
                  (l = h.document || {}),
                  (G.gsap = Mr),
                  (h.gsapVersions || (h.gsapVersions = [])).push(Mr.version),
                  $(Q || h.GreenSockGlobals || (!h.gsap && h) || {}),
                  (r = h.requestAnimationFrame),
                  de.forEach(me)),
                t && i.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (g - 1e3 * i.time + 1) | 0);
                  }),
                (d = 1),
                y(2));
            },
            sleep: function () {
              (r ? h.cancelAnimationFrame : clearTimeout)(t), (d = 0), (e = K);
            },
            lagSmoothing: function (t, e) {
              (o = t || 1 / 0), (u = Math.min(e || 33, o));
            },
            fps: function (t) {
              (m = 1e3 / (t || 240)), (g = 1e3 * i.time + m);
            },
            add: function (t, e, r) {
              var n = e
                ? function (e, r, s, a) {
                    t(e, r, s, a), i.remove(n);
                  }
                : t;
              return i.remove(t), v[r ? "unshift" : "push"](n), Pe(), n;
            },
            remove: function (t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--;
            },
            _listeners: v,
          });
        })(),
        Pe = function () {
          return !d && Oe.wake();
        },
        Ae = {},
        Ce = /^[\d.\-M][\d.\-,\s]/,
        De = /["']/g,
        Se = function (t) {
          for (
            var e,
              r,
              i,
              n = {},
              s = t.substr(1, t.length - 3).split(":"),
              a = s[0],
              o = 1,
              u = s.length;
            o < u;
            o++
          )
            (r = s[o]),
              (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
              (i = r.substr(0, e)),
              (n[a] = isNaN(i) ? i.replace(De, "").trim() : +i),
              (a = r.substr(e + 1).trim());
          return n;
        },
        Ee = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Fe = function t(e, r) {
          for (var i, n = e._first; n; )
            n instanceof Ne
              ? t(n, r)
              : !n.vars.yoyoEase ||
                (n._yoyo && n._repeat) ||
                n._yoyo === r ||
                (n.timeline
                  ? t(n.timeline, r)
                  : ((i = n._ease),
                    (n._ease = n._yEase),
                    (n._yEase = i),
                    (n._yoyo = r))),
              (n = n._next);
        },
        Re = function (t, e) {
          return (
            (t &&
              (S(t)
                ? t
                : Ae[t] ||
                  (function (t) {
                    var e,
                      r,
                      i,
                      n,
                      s = (t + "").split("("),
                      a = Ae[s[0]];
                    return a && s.length > 1 && a.config
                      ? a.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [Se(s[1])]
                            : ((e = t),
                              (r = e.indexOf("(") + 1),
                              (i = e.indexOf(")")),
                              (n = e.indexOf("(", r)),
                              e.substring(
                                r,
                                ~n && n < i ? e.indexOf(")", i + 1) : i
                              ))
                                .split(",")
                                .map(xt)
                        )
                      : Ae._CE && Ce.test(t)
                      ? Ae._CE("", t)
                      : a;
                  })(t))) ||
            e
          );
        },
        ze = function (t, e, r, i) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === i &&
              (i = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var n,
            s = { easeIn: e, easeOut: r, easeInOut: i };
          return (
            _t(t, function (t) {
              for (var e in ((Ae[t] = G[t] = s),
              (Ae[(n = t.toLowerCase())] = r),
              s))
                Ae[
                  n +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = Ae[t + "." + e] = s[e];
            }),
            s
          );
        },
        Be = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        Ie = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (s / k) * (Math.asin(1 / n) || 0),
            o = function (t) {
              return 1 === t
                ? 1
                : n * Math.pow(2, -10 * t) * C((t - a) * s) + 1;
            },
            u =
              "out" === e
                ? o
                : "in" === e
                ? function (t) {
                    return 1 - o(1 - t);
                  }
                : Be(o);
          return (
            (s = k / s),
            (u.config = function (r, i) {
              return t(e, r, i);
            }),
            u
          );
        },
        Le = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            n =
              "out" === e
                ? i
                : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : Be(i);
          return (
            (n.config = function (r) {
              return t(e, r);
            }),
            n
          );
        };
      _t("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        ze(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2;
          }
        );
      }),
        (Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn),
        ze("Elastic", Ie("in"), Ie("out"), Ie()),
        (m = 7.5625),
        (v = 1 / (g = 2.75)),
        ze(
          "Bounce",
          function (t) {
            return 1 - y(1 - t);
          },
          (y = function (t) {
            return t < v
              ? m * t * t
              : t < 0.7272727272727273
              ? m * Math.pow(t - 1.5 / g, 2) + 0.75
              : t < 0.9090909090909092
              ? m * (t -= 2.25 / g) * t + 0.9375
              : m * Math.pow(t - 2.625 / g, 2) + 0.984375;
          })
        ),
        ze("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        ze("Circ", function (t) {
          return -(P(1 - t * t) - 1);
        }),
        ze("Sine", function (t) {
          return 1 === t ? 1 : 1 - A(t * M);
        }),
        ze("Back", Le("in"), Le("out"), Le()),
        (Ae.SteppedEase =
          Ae.steps =
          G.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  i = t + (e ? 0 : 1),
                  n = e ? 1 : 0;
                return function (t) {
                  return (((i * Zt(0, 0.99999999, t)) | 0) + n) * r;
                };
              },
            }),
        (x.ease = Ae["quad.out"]),
        _t(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ft += t + "," + t + "Params,");
          }
        );
      var Ye = function (t, e) {
          (this.id = O++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : pt),
            (this.set = e ? e.getSetter : ir);
        },
        Ue = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Wt(this, +t.duration, 1, 1),
              (this.data = t.data),
              o && ((this._ctx = o), o.data.push(this)),
              d || Oe.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Wt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((Pe(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  Lt(this, t), !r._dp || r.parent || Yt(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Ut(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === b) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Tt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Rt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Rt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? zt(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? Bt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(Zt(-Math.abs(this._delay), this._tDur, e), !0),
                It(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Pe(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== b &&
                            (this._tTime -= b)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Ut(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (z(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Bt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = rt);
              var e = a;
              return (
                (a = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (a = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return !this.parent && this._sat
                ? this._sat.vars.immediateRender
                  ? -1 / 0
                  : this._sat.globalTime(t)
                : r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), jt(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), jt(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Qt(this, t), z(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, z(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - b
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      r && (i[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var i = S(t) ? t : wt,
                  n = function () {
                    var t = e.then;
                    (e.then = null),
                      S(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      r(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? n()
                  : (e._prom = n);
              });
            }),
            (e.kill = function () {
              _e(this);
            }),
            t
          );
        })();
      bt(Ue.prototype, {
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
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Ne = (function (t) {
        function e(e, r) {
          var n;
          return (
            void 0 === e && (e = {}),
            ((n = t.call(this, e) || this).labels = {}),
            (n.smoothChildTiming = !!e.smoothChildTiming),
            (n.autoRemoveChildren = !!e.autoRemoveChildren),
            (n._sort = z(e.sortChildren)),
            u && Ut(e.parent || u, i(n), r),
            e.reversed && n.reverse(),
            e.paused && n.paused(!0),
            e.scrollTrigger && Nt(i(n), e.scrollTrigger),
            n
          );
        }
        n(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return $t(0, arguments, this), this;
          }),
          (r.from = function (t, e, r) {
            return $t(1, arguments, this), this;
          }),
          (r.fromTo = function (t, e, r, i) {
            return $t(2, arguments, this), this;
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Pt(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Je(t, e, Qt(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return Ut(this, Je.delayedCall(0, t, e), r);
          }),
          (r.staggerTo = function (t, e, r, i, n, s, a) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || i),
              (r.onComplete = s),
              (r.onCompleteParams = a),
              (r.parent = this),
              new Je(t, r, Qt(this, n)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, i, n, s, a) {
            return (
              (r.runBackwards = 1),
              (Pt(r).immediateRender = z(r.immediateRender)),
              this.staggerTo(t, e, r, i, n, s, a)
            );
          }),
          (r.staggerFromTo = function (t, e, r, i, n, s, a, o) {
            return (
              (i.startAt = r),
              (Pt(i).immediateRender = z(i.immediateRender)),
              this.staggerTo(t, e, i, n, s, a, o)
            );
          }),
          (r.render = function (t, e, r) {
            var i,
              n,
              s,
              o,
              h,
              f,
              l,
              c,
              p,
              _,
              d,
              m,
              g = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              T = t <= 0 ? 0 : mt(t),
              x = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (
              (this !== u && T > v && t >= 0 && (T = v),
              T !== this._tTime || r || x)
            ) {
              if (
                (g !== this._time &&
                  y &&
                  ((T += this._time - g), (t += this._time - g)),
                (i = T),
                (p = this._start),
                (f = !(c = this._ts)),
                x && (y || (g = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((d = this._yoyo),
                  (h = y + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * h + t, e, r);
                if (
                  ((i = mt(T % h)),
                  T === v
                    ? ((o = this._repeat), (i = y))
                    : ((o = ~~(T / h)) && o === T / h && ((i = y), o--),
                      i > y && (i = y)),
                  (_ = zt(this._tTime, h)),
                  !g &&
                    this._tTime &&
                    _ !== o &&
                    this._tTime - _ * h - this._dur <= 0 &&
                    (_ = o),
                  d && 1 & o && ((i = y - i), (m = 1)),
                  o !== _ && !this._lock)
                ) {
                  var w = d && 1 & _,
                    k = w === (d && 1 & o);
                  if (
                    (o < _ && (w = !w),
                    (g = w ? 0 : T % y ? y : T),
                    (this._lock = 1),
                    (this.render(g || (m ? 0 : mt(o * h)), e, !y)._lock = 0),
                    (this._tTime = T),
                    !e && this.parent && pe(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    (g && g !== this._time) ||
                      f !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((y = this._dur),
                    (v = this._tDur),
                    k &&
                      ((this._lock = 2),
                      (g = w ? y : -1e-4),
                      this.render(g, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !f)
                  )
                    return this;
                  Fe(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((l = (function (t, e, r) {
                    var i;
                    if (r > e)
                      for (i = t._first; i && i._start <= r; ) {
                        if ("isPause" === i.data && i._start > e) return i;
                        i = i._next;
                      }
                    else
                      for (i = t._last; i && i._start >= r; ) {
                        if ("isPause" === i.data && i._start < e) return i;
                        i = i._prev;
                      }
                  })(this, mt(g), mt(i))),
                  l && (T -= i - (i = l._start))),
                (this._tTime = T),
                (this._time = i),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (g = 0)),
                !g && i && !e && !o && (pe(this, "onStart"), this._tTime !== T))
              )
                return this;
              if (i >= g && t >= 0)
                for (n = this._first; n; ) {
                  if (
                    ((s = n._next),
                    (n._act || i >= n._start) && n._ts && l !== n)
                  ) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (
                      (n.render(
                        n._ts > 0
                          ? (i - n._start) * n._ts
                          : (n._dirty ? n.totalDuration() : n._tDur) +
                              (i - n._start) * n._ts,
                        e,
                        r
                      ),
                      i !== this._time || (!this._ts && !f))
                    ) {
                      (l = 0), s && (T += this._zTime = -1e-8);
                      break;
                    }
                  }
                  n = s;
                }
              else {
                n = this._last;
                for (var M = t < 0 ? t : i; n; ) {
                  if (
                    ((s = n._prev), (n._act || M <= n._end) && n._ts && l !== n)
                  ) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (
                      (n.render(
                        n._ts > 0
                          ? (M - n._start) * n._ts
                          : (n._dirty ? n.totalDuration() : n._tDur) +
                              (M - n._start) * n._ts,
                        e,
                        r || (a && (n._initted || n._startAt))
                      ),
                      i !== this._time || (!this._ts && !f))
                    ) {
                      (l = 0), s && (T += this._zTime = M ? -1e-8 : b);
                      break;
                    }
                  }
                  n = s;
                }
              }
              if (
                l &&
                !e &&
                (this.pause(),
                (l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
                this._ts)
              )
                return (this._start = p), It(this), this.render(t, e, r);
              this._onUpdate && !e && pe(this, "onUpdate", !0),
                ((T === v && this._tTime >= this.totalDuration()) ||
                  (!T && g)) &&
                  ((p !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !y) &&
                      ((T === v && this._ts > 0) || (!T && this._ts < 0)) &&
                      Dt(this, 1),
                    e ||
                      (t < 0 && !g) ||
                      (!T && !g && v) ||
                      (pe(
                        this,
                        T === v && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(T < v && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((E(e) || (e = Qt(this, e, t)), !(t instanceof Ue))) {
              if (Y(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (D(t)) return this.addLabel(t, e);
              if (!S(t)) return this;
              t = Je.delayedCall(0, t);
            }
            return this !== t ? Ut(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, i) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === i && (i = -w);
            for (var n = [], s = this._first; s; )
              s._start >= i &&
                (s instanceof Je
                  ? e && n.push(s)
                  : (r && n.push(s),
                    t && n.push.apply(n, s.getChildren(!0, e, r)))),
                (s = s._next);
            return n;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return D(t)
              ? this.removeLabel(t)
              : S(t)
              ? this.killTweensOf(t)
              : (Ct(this, t),
                t === this._recent && (this._recent = this._last),
                St(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = mt(
                    Oe.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = Qt(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var i = Je.delayedCall(0, e || K, r);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              Ut(this, i, Qt(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = Qt(this, t); e; )
              e._start === t && "isPause" === e.data && Dt(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
              Xe !== i[n] && i[n].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, i = [], n = re(t), s = this._first, a = E(e); s; )
              s instanceof Je
                ? vt(s._targets, n) &&
                  (a
                    ? (!Xe || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  i.push(s)
                : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                (s = s._next);
            return i;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
              i = this,
              n = Qt(i, t),
              s = e,
              a = s.startAt,
              o = s.onStart,
              u = s.onStartParams,
              h = s.immediateRender,
              f = Je.to(
                i,
                bt(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      ) ||
                      b,
                    onStart: function () {
                      if ((i.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (n - (a && "time" in a ? a.time : i._time)) /
                              i.timeScale()
                          );
                        f._dur !== t && Wt(f, t, 0, 1).render(f._time, !0, !0),
                          (r = 1);
                      }
                      o && o.apply(f, u || []);
                    },
                  },
                  e
                )
              );
            return h ? f.render(0) : f;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, bt({ startAt: { time: Qt(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ce(this, Qt(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ce(this, Qt(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + b);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n; )
              n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
            if (e) for (i in s) s[i] >= r && (s[i] += t);
            return St(this);
          }),
          (r.invalidate = function (e) {
            var r = this._first;
            for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              St(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              i,
              n = 0,
              s = this,
              a = s._last,
              o = w;
            if (arguments.length)
              return s.timeScale(
                (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                  (s.reversed() ? -t : t)
              );
            if (s._dirty) {
              for (i = s.parent; a; )
                (e = a._prev),
                  a._dirty && a.totalDuration(),
                  (r = a._start) > o && s._sort && a._ts && !s._lock
                    ? ((s._lock = 1), (Ut(s, a, r - a._delay, 1)._lock = 0))
                    : (o = r),
                  r < 0 &&
                    a._ts &&
                    ((n -= r),
                    ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                      ((s._start += r / s._ts),
                      (s._time -= r),
                      (s._tTime -= r)),
                    s.shiftChildren(-r, !1, -Infinity),
                    (o = 0)),
                  a._end > n && a._ts && (n = a._end),
                  (a = e);
              Wt(s, s === u && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
            }
            return s._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((u._ts && (Tt(u, Bt(t, u)), (p = Oe.frame)), Oe.frame >= ut)) {
              ut += T.autoSleep || 120;
              var e = u._first;
              if ((!e || !e._ts) && T.autoSleep && Oe._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Oe.sleep();
              }
            }
          }),
          e
        );
      })(Ue);
      bt(Ne.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Xe,
        qe,
        Ve = function (t, e, r, i, n, s, a) {
          var o,
            u,
            h,
            f,
            l,
            c,
            p,
            _,
            d = new cr(this._pt, t, e, 0, 1, ar, null, n),
            m = 0,
            g = 0;
          for (
            d.b = r,
              d.e = i,
              r += "",
              (p = ~(i += "").indexOf("random(")) && (i = fe(i)),
              s && (s((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
              u = r.match(q) || [];
            (o = q.exec(i));

          )
            (f = o[0]),
              (l = i.substring(m, o.index)),
              h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
              f !== u[g++] &&
                ((c = parseFloat(u[g - 1]) || 0),
                (d._pt = {
                  _next: d._pt,
                  p: l || 1 === g ? l : ",",
                  s: c,
                  c: "=" === f.charAt(1) ? gt(c, f) - c : parseFloat(f) - c,
                  m: h && h < 4 ? Math.round : 0,
                }),
                (m = q.lastIndex));
          return (
            (d.c = m < i.length ? i.substring(m, i.length) : ""),
            (d.fp = a),
            (V.test(i) || p) && (d.e = 0),
            (this._pt = d),
            d
          );
        },
        We = function (t, e, r, i, n, s, a, o, u, h) {
          S(i) && (i = i(n || 0, t, s));
          var f,
            l = t[e],
            c =
              "get" !== r
                ? r
                : S(l)
                ? u
                  ? t[
                      e.indexOf("set") || !S(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : l,
            p = S(l) ? (u ? er : tr) : Ke;
          if (
            (D(i) &&
              (~i.indexOf("random(") && (i = fe(i)),
              "=" === i.charAt(1) &&
                ((f = gt(c, i) + (Jt(c) || 0)) || 0 === f) &&
                (i = f)),
            !h || c !== i || qe)
          )
            return isNaN(c * i) || "" === i
              ? (!l && !(e in t) && H(e, i),
                Ve.call(this, t, e, c, i, p, o || T.stringFilter, u))
              : ((f = new cr(
                  this._pt,
                  t,
                  e,
                  +c || 0,
                  i - (c || 0),
                  "boolean" == typeof l ? sr : nr,
                  0,
                  p
                )),
                u && (f.fp = u),
                a && f.modifier(a, this, t),
                (this._pt = f));
        },
        je = function (t, e, r, i, n, s) {
          var a, o, u, h;
          if (
            at[t] &&
            !1 !==
              (a = new at[t]()).init(
                n,
                a.rawVars
                  ? e[t]
                  : (function (t, e, r, i, n) {
                      if (
                        (S(t) && (t = $e(t, n, e, r, i)),
                        !R(t) || (t.style && t.nodeType) || Y(t) || L(t))
                      )
                        return D(t) ? $e(t, n, e, r, i) : t;
                      var s,
                        a = {};
                      for (s in t) a[s] = $e(t[s], n, e, r, i);
                      return a;
                    })(e[t], i, n, s, r),
                r,
                i,
                s
              ) &&
            ((r._pt = o =
              new cr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
            r !== _)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length;
              h--;

            )
              u[a._props[h]] = o;
          return a;
        },
        Ge = function t(e, r, i) {
          var n,
            o,
            h,
            f,
            l,
            c,
            p,
            _,
            d,
            m,
            g,
            v,
            y,
            T = e.vars,
            k = T.ease,
            M = T.startAt,
            O = T.immediateRender,
            P = T.lazy,
            A = T.onUpdate,
            C = T.onUpdateParams,
            D = T.callbackScope,
            S = T.runBackwards,
            E = T.yoyoEase,
            F = T.keyframes,
            R = T.autoRevert,
            B = e._dur,
            I = e._startAt,
            L = e._targets,
            Y = e.parent,
            U = Y && "nested" === Y.data ? Y.vars.targets : L,
            N = "auto" === e._overwrite && !s,
            X = e.timeline;
          if (
            (X && (!F || !k) && (k = "none"),
            (e._ease = Re(k, x.ease)),
            (e._yEase = E ? Ee(Re(!0 === E ? k : E, x.ease)) : 0),
            E &&
              e._yoyo &&
              !e._repeat &&
              ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
            (e._from = !X && !!T.runBackwards),
            !X || (F && !T.stagger))
          ) {
            if (
              ((v = (_ = L[0] ? ct(L[0]).harness : 0) && T[_.prop]),
              (n = Ot(T, it)),
              I &&
                (I._zTime < 0 && I.progress(1),
                r < 0 && S && O && !R
                  ? I.render(-1, !0)
                  : I.revert(S && B ? et : tt),
                (I._lazy = 0)),
              M)
            ) {
              if (
                (Dt(
                  (e._startAt = Je.set(
                    L,
                    bt(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: Y,
                        immediateRender: !0,
                        lazy: !I && z(P),
                        startAt: null,
                        delay: 0,
                        onUpdate: A,
                        onUpdateParams: C,
                        callbackScope: D,
                        stagger: 0,
                      },
                      M
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (a || (!O && !R)) && e._startAt.revert(et),
                O && B && r <= 0 && i <= 0)
              )
                return void (r && (e._zTime = r));
            } else if (S && B && !I)
              if (
                (r && (O = !1),
                (h = bt(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: O && !I && z(P),
                    immediateRender: O,
                    stagger: 0,
                    parent: Y,
                  },
                  n
                )),
                v && (h[_.prop] = v),
                Dt((e._startAt = Je.set(L, h))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 &&
                  (a ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                O)
              ) {
                if (!r) return;
              } else t(e._startAt, b, b);
            for (
              e._pt = e._ptCache = 0, P = (B && z(P)) || (P && !B), o = 0;
              o < L.length;
              o++
            ) {
              if (
                ((p = (l = L[o])._gsap || lt(L)[o]._gsap),
                (e._ptLookup[o] = m = {}),
                st[p.id] && nt.length && yt(),
                (g = U === L ? o : U.indexOf(l)),
                _ &&
                  !1 !== (d = new _()).init(l, v || n, e, g, U) &&
                  ((e._pt = f =
                    new cr(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority)),
                  d._props.forEach(function (t) {
                    m[t] = f;
                  }),
                  d.priority && (c = 1)),
                !_ || v)
              )
                for (h in n)
                  at[h] && (d = je(h, n, e, g, l, U))
                    ? d.priority && (c = 1)
                    : (m[h] = f =
                        We.call(e, l, h, "get", n[h], g, U, 0, T.stringFilter));
              e._op && e._op[o] && e.kill(l, e._op[o]),
                N &&
                  e._pt &&
                  ((Xe = e),
                  u.killTweensOf(l, m, e.globalTime(r)),
                  (y = !e.parent),
                  (Xe = 0)),
                e._pt && P && (st[p.id] = 1);
            }
            c && lr(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = A),
            (e._initted = (!e._op || e._pt) && !y),
            F && r <= 0 && X.render(w, !0, !0);
        },
        Qe = function (t, e, r, i) {
          var n,
            s,
            a = e.ease || i || "power1.inOut";
          if (Y(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (n in e)
              (s = r[n] || (r[n] = [])),
                "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: a });
        },
        $e = function (t, e, r, i, n) {
          return S(t)
            ? t.call(e, r, i, n)
            : D(t) && ~t.indexOf("random(")
            ? fe(t)
            : t;
        },
        He = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ze = {};
      _t(He + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (Ze[t] = 1);
      });
      var Je = (function (t) {
        function e(e, r, n, a) {
          var o;
          "number" == typeof r && ((n.duration = r), (r = n), (n = null));
          var h,
            f,
            l,
            c,
            p,
            _,
            d,
            m,
            g = (o = t.call(this, a ? r : Pt(r)) || this).vars,
            v = g.duration,
            y = g.delay,
            x = g.immediateRender,
            w = g.stagger,
            b = g.overwrite,
            k = g.keyframes,
            M = g.defaults,
            O = g.scrollTrigger,
            P = g.yoyoEase,
            A = r.parent || u,
            C = (Y(e) || L(e) ? E(e[0]) : "length" in r) ? [e] : re(e);
          if (
            ((o._targets = C.length
              ? lt(C)
              : Z(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !T.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = b),
            k || w || I(v) || I(y))
          ) {
            if (
              ((r = o.vars),
              (h = o.timeline =
                new Ne({
                  data: "nested",
                  defaults: M || {},
                  targets: A && "nested" === A.data ? A.vars.targets : C,
                })).kill(),
              (h.parent = h._dp = i(o)),
              (h._start = 0),
              w || I(v) || I(y))
            ) {
              if (((c = C.length), (d = w && se(w)), R(w)))
                for (p in w) ~He.indexOf(p) && (m || (m = {}), (m[p] = w[p]));
              for (f = 0; f < c; f++)
                ((l = Ot(r, Ze)).stagger = 0),
                  P && (l.yoyoEase = P),
                  m && kt(l, m),
                  (_ = C[f]),
                  (l.duration = +$e(v, i(o), f, _, C)),
                  (l.delay = (+$e(y, i(o), f, _, C) || 0) - o._delay),
                  !w &&
                    1 === c &&
                    l.delay &&
                    ((o._delay = y = l.delay), (o._start += y), (l.delay = 0)),
                  h.to(_, l, d ? d(f, _, C) : 0),
                  (h._ease = Ae.none);
              h.duration() ? (v = y = 0) : (o.timeline = 0);
            } else if (k) {
              Pt(bt(h.vars.defaults, { ease: "none" })),
                (h._ease = Re(k.ease || r.ease || "none"));
              var D,
                S,
                F,
                B = 0;
              if (Y(k))
                k.forEach(function (t) {
                  return h.to(C, t, ">");
                }),
                  h.duration();
              else {
                for (p in ((l = {}), k))
                  "ease" === p ||
                    "easeEach" === p ||
                    Qe(p, k[p], l, k.easeEach);
                for (p in l)
                  for (
                    D = l[p].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      B = 0,
                      f = 0;
                    f < D.length;
                    f++
                  )
                    ((F = {
                      ease: (S = D[f]).e,
                      duration: ((S.t - (f ? D[f - 1].t : 0)) / 100) * v,
                    })[p] = S.v),
                      h.to(C, F, B),
                      (B += F.duration);
                h.duration() < v && h.to({}, { duration: v - h.duration() });
              }
            }
            v || o.duration((v = h.duration()));
          } else o.timeline = 0;
          return (
            !0 !== b || s || ((Xe = i(o)), u.killTweensOf(C), (Xe = 0)),
            Ut(A, i(o), n),
            r.reversed && o.reverse(),
            r.paused && o.paused(!0),
            (x ||
              (!v &&
                !k &&
                o._start === mt(A._time) &&
                z(x) &&
                Ft(i(o)) &&
                "nested" !== A.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -y) || 0)),
            O && Nt(i(o), O),
            o
          );
        }
        n(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var i,
              n,
              s,
              o,
              u,
              h,
              f,
              l,
              c,
              p = this._time,
              _ = this._tDur,
              d = this._dur,
              m = t < 0,
              g = t > _ - b && !m ? _ : t < b ? 0 : t;
            if (d) {
              if (
                g !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((i = g), (l = this.timeline), this._repeat)) {
                  if (((o = d + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * o + t, e, r);
                  if (
                    ((i = mt(g % o)),
                    g === _
                      ? ((s = this._repeat), (i = d))
                      : ((s = ~~(g / o)) && s === g / o && ((i = d), s--),
                        i > d && (i = d)),
                    (h = this._yoyo && 1 & s) &&
                      ((c = this._yEase), (i = d - i)),
                    (u = zt(this._tTime, o)),
                    i === p && !r && this._initted)
                  )
                    return (this._tTime = g), this;
                  s !== u &&
                    (l && this._yEase && Fe(l, h),
                    !this.vars.repeatRefresh ||
                      h ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(mt(o * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Xt(this, m ? t : i, r, e, g))
                    return (this._tTime = 0), this;
                  if (p !== this._time) return this;
                  if (d !== this._dur) return this.render(t, e, r);
                }
                if (
                  ((this._tTime = g),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = f = (c || this._ease)(i / d)),
                  this._from && (this.ratio = f = 1 - f),
                  i &&
                    !p &&
                    !e &&
                    !s &&
                    (pe(this, "onStart"), this._tTime !== g))
                )
                  return this;
                for (n = this._pt; n; ) n.r(f, n.d), (n = n._next);
                (l &&
                  l.render(
                    t < 0
                      ? t
                      : !i && h
                      ? -1e-8
                      : l._dur * l._ease(i / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && Et(this, t, 0, r), pe(this, "onUpdate")),
                  this._repeat &&
                    s !== u &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    pe(this, "onRepeat"),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (m && !this._onUpdate && Et(this, t, 0, !0),
                    (t || !d) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      Dt(this, 1),
                    e ||
                      (m && !p) ||
                      !(g || p || h) ||
                      (pe(
                        this,
                        g === _ ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < _ && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, r, i) {
                var n,
                  s,
                  o,
                  u = t.ratio,
                  h =
                    e < 0 ||
                    (!e &&
                      ((!t._start && qt(t) && (t._initted || !Vt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Vt(t))))
                      ? 0
                      : 1,
                  f = t._rDelay,
                  l = 0;
                if (
                  (f &&
                    t._repeat &&
                    ((l = Zt(0, t._tDur, e)),
                    (s = zt(l, f)),
                    t._yoyo && 1 & s && (h = 1 - h),
                    s !== zt(t._tTime, f) &&
                      ((u = 1 - h),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  h !== u || a || i || t._zTime === b || (!e && t._zTime))
                ) {
                  if (!t._initted && Xt(t, e, i, r, l)) return;
                  for (
                    o = t._zTime,
                      t._zTime = e || (r ? b : 0),
                      r || (r = e && !o),
                      t.ratio = h,
                      t._from && (h = 1 - h),
                      t._time = 0,
                      t._tTime = l,
                      n = t._pt;
                    n;

                  )
                    n.r(h, n.d), (n = n._next);
                  e < 0 && Et(t, e, 0, !0),
                    t._onUpdate && !r && pe(t, "onUpdate"),
                    l && t._repeat && !r && t.parent && pe(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === h &&
                      (h && Dt(t, 1),
                      r ||
                        a ||
                        (pe(t, h ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (r.resetTo = function (t, e, r, i) {
            d || Oe.wake(), this._ts || this.play();
            var n = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || Ge(this, n),
              (function (t, e, r, i, n, s, a) {
                var o,
                  u,
                  h,
                  f,
                  l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!l)
                  for (
                    l = t._ptCache[e] = [],
                      h = t._ptLookup,
                      f = t._targets.length;
                    f--;

                  ) {
                    if ((o = h[f][e]) && o.d && o.d._pt)
                      for (o = o.d._pt; o && o.p !== e && o.fp !== e; )
                        o = o._next;
                    if (!o)
                      return (
                        (qe = 1), (t.vars[e] = "+=0"), Ge(t, a), (qe = 0), 1
                      );
                    l.push(o);
                  }
                for (f = l.length; f--; )
                  ((o = (u = l[f])._pt || u).s =
                    (!i && 0 !== i) || n ? o.s + (i || 0) + s * o.c : i),
                    (o.c = r - o.s),
                    u.e && (u.e = dt(r) + Jt(u.e)),
                    u.b && (u.b = o.s + Jt(u.b));
              })(this, t, e, r, i, this._ease(n / this._dur), n)
                ? this.resetTo(t, e, r, i)
                : (Lt(this, 0),
                  this.parent ||
                    At(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? _e(this) : this;
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)
                  ._first || _e(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  Wt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f = this._targets,
              l = t ? re(t) : f,
              c = this._ptLookup,
              p = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var r = t.length, i = r === e.length;
                  i && r-- && t[r] === e[r];

                );
                return r < 0;
              })(f, l)
            )
              return "all" === e && (this._pt = 0), _e(this);
            for (
              i = this._op = this._op || [],
                "all" !== e &&
                  (D(e) &&
                    ((o = {}),
                    _t(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = (function (t, e) {
                    var r,
                      i,
                      n,
                      s,
                      a = t[0] ? ct(t[0]).harness : 0,
                      o = a && a.aliases;
                    if (!o) return e;
                    for (i in ((r = kt({}, e)), o))
                      if ((i in r))
                        for (n = (s = o[i].split(",")).length; n--; )
                          r[s[n]] = r[i];
                    return r;
                  })(f, e))),
                h = f.length;
              h--;

            )
              if (~l.indexOf(f[h]))
                for (o in ((n = c[h]),
                "all" === e
                  ? ((i[h] = e), (a = n), (s = {}))
                  : ((s = i[h] = i[h] || {}), (a = e)),
                a))
                  (u = n && n[o]) &&
                    (("kill" in u.d && !0 !== u.d.kill(o)) ||
                      Ct(this, u, "_pt"),
                    delete n[o]),
                    "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && p && _e(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, e) {
            return $t(1, arguments);
          }),
          (e.delayedCall = function (t, r, i, n) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: n,
            });
          }),
          (e.fromTo = function (t, e, r) {
            return $t(2, arguments);
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return u.killTweensOf(t, e, r);
          }),
          e
        );
      })(Ue);
      bt(Je.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        _t("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Je[t] = function () {
            var e = new Ne(),
              r = Kt.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var Ke = function (t, e, r) {
          return (t[e] = r);
        },
        tr = function (t, e, r) {
          return t[e](r);
        },
        er = function (t, e, r, i) {
          return t[e](i.fp, r);
        },
        rr = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        ir = function (t, e) {
          return S(t[e]) ? tr : F(t[e]) && t.setAttribute ? rr : Ke;
        },
        nr = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        sr = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        ar = function (t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r; )
              (i =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                i),
                (r = r._next);
            i += e.c;
          }
          e.set(e.t, e.p, i, e);
        },
        or = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        ur = function (t, e, r, i) {
          for (var n, s = this._pt; s; )
            (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
        },
        hr = function (t) {
          for (var e, r, i = this._pt; i; )
            (r = i._next),
              (i.p === t && !i.op) || i.op === t
                ? Ct(this, i, "_pt")
                : i.dep || (e = 1),
              (i = r);
          return !e;
        },
        fr = function (t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
        },
        lr = function (t) {
          for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
              (s._next = r) ? (r._prev = s) : (n = s),
              (s = e);
          }
          t._pt = i;
        },
        cr = (function () {
          function t(t, e, r, i, n, s, a, o, u) {
            (this.t = e),
              (this.s = i),
              (this.c = n),
              (this.p = r),
              (this.r = s || nr),
              (this.d = a || this),
              (this.set = o || Ke),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = fr),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      _t(
        ft +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (it[t] = 1);
        }
      ),
        (G.TweenMax = G.TweenLite = Je),
        (G.TimelineLite = G.TimelineMax = Ne),
        (u = new Ne({
          sortChildren: !1,
          defaults: x,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (T.stringFilter = Me);
      var pr = [],
        _r = {},
        dr = [],
        mr = 0,
        gr = 0,
        vr = function (t) {
          return (_r[t] || dr).map(function (t) {
            return t();
          });
        },
        yr = function () {
          var t = Date.now(),
            e = [];
          t - mr > 2 &&
            (vr("matchMediaInit"),
            pr.forEach(function (t) {
              var r,
                i,
                n,
                s,
                a = t.queries,
                o = t.conditions;
              for (i in a)
                (r = h.matchMedia(a[i]).matches) && (n = 1),
                  r !== o[i] && ((o[i] = r), (s = 1));
              s && (t.revert(), n && e.push(t));
            }),
            vr("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t);
            }),
            (mr = t),
            vr("matchMedia"));
        },
        Tr = (function () {
          function t(t, e) {
            (this.selector = e && ie(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = gr++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              S(t) && ((r = e), (e = t), (t = S));
              var i = this,
                n = function () {
                  var t,
                    n = o,
                    s = i.selector;
                  return (
                    n && n !== i && n.data.push(i),
                    r && (i.selector = ie(r)),
                    (o = i),
                    (t = e.apply(i, arguments)),
                    S(t) && i._r.push(t),
                    (o = n),
                    (i.selector = s),
                    (i.isReverted = !1),
                    t
                  );
                };
              return (i.last = n), t === S ? n(i) : t ? (i[t] = n) : n;
            }),
            (e.ignore = function (t) {
              var e = o;
              (o = null), t(this), (o = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof Je &&
                        !(r.parent && "nested" === r.parent.data) &&
                        e.push(r);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var r = this;
              if (t) {
                var i = this.getTweens();
                this.data.forEach(function (t) {
                  "isFlip" === t.data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return i.splice(i.indexOf(t), 1);
                    }));
                }),
                  i
                    .map(function (t) {
                      return { g: t.globalTime(0), t };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1 / 0;
                    })
                    .forEach(function (e) {
                      return e.t.revert(t);
                    }),
                  this.data.forEach(function (e) {
                    return !(e instanceof Je) && e.revert && e.revert(t);
                  }),
                  this._r.forEach(function (e) {
                    return e(t, r);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (t) {
                  return t.kill && t.kill();
                });
              if ((this.clear(), e))
                for (var n = pr.length; n--; )
                  pr[n].id === this.id && pr.splice(n, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        xr = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              R(t) || (t = { matches: t });
              var i,
                n,
                s,
                a = new Tr(0, r || this.scope),
                u = (a.conditions = {});
              for (n in (o && !a.selector && (a.selector = o.selector),
              this.contexts.push(a),
              (e = a.add("onMatch", e)),
              (a.queries = t),
              t))
                "all" === n
                  ? (s = 1)
                  : (i = h.matchMedia(t[n])) &&
                    (pr.indexOf(a) < 0 && pr.push(a),
                    (u[n] = i.matches) && (s = 1),
                    i.addListener
                      ? i.addListener(yr)
                      : i.addEventListener("change", yr));
              return s && e(a), this;
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        wr = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            e.forEach(function (t) {
              return me(t);
            });
          },
          timeline: function (t) {
            return new Ne(t);
          },
          getTweensOf: function (t, e) {
            return u.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, i) {
            D(t) && (t = re(t)[0]);
            var n = ct(t || {}).get,
              s = r ? wt : xt;
            return (
              "native" === r && (r = ""),
              t
                ? e
                  ? s(((at[e] && at[e].get) || n)(t, e, r, i))
                  : function (e, r, i) {
                      return s(((at[e] && at[e].get) || n)(t, e, r, i));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = re(t)).length > 1) {
              var i = t.map(function (t) {
                  return Mr.quickSetter(t, e, r);
                }),
                n = i.length;
              return function (t) {
                for (var e = n; e--; ) i[e](t);
              };
            }
            t = t[0] || {};
            var s = at[e],
              a = ct(t),
              o = (a.harness && (a.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var i = new s();
                    (_._pt = 0),
                      i.init(t, r ? e + r : e, _, 0, [t]),
                      i.render(1, i),
                      _._pt && or(1, _);
                  }
                : a.set(t, o);
            return s
              ? u
              : function (e) {
                  return u(t, o, r ? e + r : e, a, 1);
                };
          },
          quickTo: function (t, e, r) {
            var i,
              n = Mr.to(
                t,
                kt((((i = {})[e] = "+=0.1"), (i.paused = !0), i), r || {})
              ),
              s = function (t, r, i) {
                return n.resetTo(e, t, r, i);
              };
            return (s.tween = n), s;
          },
          isTweening: function (t) {
            return u.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Re(t.ease, x.ease)), Mt(x, t || {});
          },
          config: function (t) {
            return Mt(T, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
            (i || "").split(",").forEach(function (t) {
              return (
                t &&
                !at[t] &&
                !G[t] &&
                Z(e + " effect requires " + t + " plugin.")
              );
            }),
              (ot[e] = function (t, e, i) {
                return r(re(t), bt(e || {}, n), i);
              }),
              s &&
                (Ne.prototype[e] = function (t, r, i) {
                  return this.add(ot[e](t, R(r) ? r : (i = r) && {}, this), i);
                });
          },
          registerEase: function (t, e) {
            Ae[t] = Re(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Re(t, e) : Ae;
          },
          getById: function (t) {
            return u.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r,
              i,
              n = new Ne(t);
            for (
              n.smoothChildTiming = z(t.smoothChildTiming),
                u.remove(n),
                n._dp = 0,
                n._time = n._tTime = u._time,
                r = u._first;
              r;

            )
              (i = r._next),
                (!e &&
                  !r._dur &&
                  r instanceof Je &&
                  r.vars.onComplete === r._targets[0]) ||
                  Ut(n, r, r._start - r._delay),
                (r = i);
            return Ut(u, n, 0), n;
          },
          context: function (t, e) {
            return t ? new Tr(t, e) : o;
          },
          matchMedia: function (t) {
            return new xr(t);
          },
          matchMediaRefresh: function () {
            return (
              pr.forEach(function (t) {
                var e,
                  r,
                  i = t.conditions;
                for (r in i) i[r] && ((i[r] = !1), (e = 1));
                e && t.revert();
              }) || yr()
            );
          },
          addEventListener: function (t, e) {
            var r = _r[t] || (_r[t] = []);
            ~r.indexOf(e) || r.push(e);
          },
          removeEventListener: function (t, e) {
            var r = _r[t],
              i = r && r.indexOf(e);
            i >= 0 && r.splice(i, 1);
          },
          utils: {
            wrap: function t(e, r, i) {
              var n = r - e;
              return Y(e)
                ? he(e, t(0, e.length), r)
                : Ht(i, function (t) {
                    return ((n + ((t - e) % n)) % n) + e;
                  });
            },
            wrapYoyo: function t(e, r, i) {
              var n = r - e,
                s = 2 * n;
              return Y(e)
                ? he(e, t(0, e.length - 1), r)
                : Ht(i, function (t) {
                    return (
                      e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t)
                    );
                  });
            },
            distribute: se,
            random: ue,
            snap: oe,
            normalize: function (t, e, r) {
              return le(t, e, 0, 1, r);
            },
            getUnit: Jt,
            clamp: function (t, e, r) {
              return Ht(r, function (r) {
                return Zt(t, e, r);
              });
            },
            splitColor: Te,
            toArray: re,
            selector: ie,
            mapRange: le,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || Jt(r));
              };
            },
            interpolate: function t(e, r, i, n) {
              var s = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r;
                  };
              if (!s) {
                var a,
                  o,
                  u,
                  h,
                  f,
                  l = D(e),
                  c = {};
                if ((!0 === i && (n = 1) && (i = null), l))
                  (e = { p: e }), (r = { p: r });
                else if (Y(e) && !Y(r)) {
                  for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++)
                    u.push(t(e[o - 1], e[o]));
                  h--,
                    (s = function (t) {
                      t *= h;
                      var e = Math.min(f, ~~t);
                      return u[e](t - e);
                    }),
                    (i = r);
                } else n || (e = kt(Y(e) ? [] : {}, e));
                if (!u) {
                  for (a in r) We.call(c, e, a, "get", r[a]);
                  s = function (t) {
                    return or(t, c) || (l ? e.p : e);
                  };
                }
              }
              return Ht(i, s);
            },
            shuffle: ne,
          },
          install: $,
          effects: ot,
          ticker: Oe,
          updateRoot: Ne.updateRoot,
          plugins: at,
          globalTimeline: u,
          core: {
            PropTween: cr,
            globals: J,
            Tween: Je,
            Timeline: Ne,
            Animation: Ue,
            getCache: ct,
            _removeLinkedListItem: Ct,
            reverting: function () {
              return a;
            },
            context: function (t) {
              return t && o && (o.data.push(t), (t._ctx = o)), o;
            },
            suppressOverwrites: function (t) {
              return (s = t);
            },
          },
        };
      _t("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (wr[t] = Je[t]);
      }),
        Oe.add(Ne.updateRoot),
        (_ = wr.to({}, { duration: 0 }));
      var br = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        kr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, i) {
              i._onInit = function (t) {
                var i, n;
                if (
                  (D(r) &&
                    ((i = {}),
                    _t(r, function (t) {
                      return (i[t] = 1);
                    }),
                    (r = i)),
                  e)
                ) {
                  for (n in ((i = {}), r)) i[n] = e(r[n]);
                  r = i;
                }
                !(function (t, e) {
                  var r,
                    i,
                    n,
                    s = t._targets;
                  for (r in e)
                    for (i = s.length; i--; )
                      (n = t._ptLookup[i][r]) &&
                        (n = n.d) &&
                        (n._pt && (n = br(n, r)),
                        n && n.modifier && n.modifier(e[r], t, s[i], r));
                })(t, r);
              };
            },
          };
        },
        Mr =
          wr.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, i, n) {
                var s, a, o;
                for (s in ((this.tween = r), e))
                  (o = t.getAttribute(s) || ""),
                    ((a = this.add(
                      t,
                      "setAttribute",
                      (o || 0) + "",
                      e[s],
                      i,
                      n,
                      0,
                      0,
                      s
                    )).op = s),
                    (a.b = o),
                    this._props.push(s);
              },
              render: function (t, e) {
                for (var r = e._pt; r; )
                  a ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; )
                  this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
              },
            },
            kr("roundProps", ae),
            kr("modifiers"),
            kr("snap", oe)
          ) || wr;
      (Je.version = Ne.version = Mr.version = "3.12.2"), (c = 1), B() && Pe();
      Ae.Power0;
      var Or = Ae.Power1;
      Ae.Power2,
        Ae.Power3,
        Ae.Power4,
        Ae.Linear,
        Ae.Quad,
        Ae.Cubic,
        Ae.Quart,
        Ae.Quint,
        Ae.Strong,
        Ae.Elastic,
        Ae.Back,
        Ae.SteppedEase,
        Ae.Bounce,
        Ae.Sine,
        Ae.Expo,
        Ae.Circ;
    },
    5716: (t, e, r) => {
      r.d(e, { p8: () => Mt });
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        f,
        l = r(5317),
        c = {},
        p = 180 / Math.PI,
        _ = Math.PI / 180,
        d = Math.atan2,
        m = /([A-Z])/g,
        g = /(left|right|width|margin|padding|x)/i,
        v = /[\s,\(]\S/,
        y = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        T = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        x = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        w = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        b = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        k = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        M = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        O = function (t, e, r) {
          return (t.style[e] = r);
        },
        P = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        A = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        C = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        D = function (t, e, r, i, n) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
        },
        S = function (t, e, r, i, n) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(n, s);
        },
        E = "transform",
        F = E + "Origin",
        R = function t(e, r) {
          var i = this,
            n = this.target,
            s = n.style;
          if (e in c && s) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return y.transform.split(",").forEach(function (e) {
                return t.call(i, e, r);
              });
            if (
              (~(e = y[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (i.tfm[t] = J(n, t));
                  })
                : (this.tfm[e] = n._gsap.x ? n._gsap[e] : J(n, e)),
              this.props.indexOf(E) >= 0)
            )
              return;
            n._gsap.svg &&
              ((this.svgo = n.getAttribute("data-svg-origin")),
              this.props.push(F, r, "")),
              (e = E);
          }
          (s || r) && this.props.push(e, r, s[e]);
        },
        z = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        B = function () {
          var t,
            e,
            r = this.props,
            i = this.target,
            n = i.style,
            s = i._gsap;
          for (t = 0; t < r.length; t += 3)
            r[t + 1]
              ? (i[r[t]] = r[t + 2])
              : r[t + 2]
              ? (n[r[t]] = r[t + 2])
              : n.removeProperty(
                  "--" === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(m, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg &&
              (s.renderTransform(),
              i.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = h()) && t.isStart) || n[E] || (z(n), (s.uncache = 1));
          }
        },
        I = function (t, e) {
          var r = { target: t, props: [], revert: B, save: R };
          return (
            t._gsap || l.p8.core.getCache(t),
            e &&
              e.split(",").forEach(function (t) {
                return r.save(t);
              }),
            r
          );
        },
        L = function (t, e) {
          var r = n.createElementNS
            ? n.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : n.createElement(t);
          return r.style ? r : n.createElement(t);
        },
        Y = function t(e, r, i) {
          var n = getComputedStyle(e);
          return (
            n[r] ||
            n.getPropertyValue(r.replace(m, "-$1").toLowerCase()) ||
            n.getPropertyValue(r) ||
            (!i && t(e, N(r) || r, 1)) ||
            ""
          );
        },
        U = "O,Moz,ms,Ms,Webkit".split(","),
        N = function (t, e, r) {
          var i = (e || o).style,
            n = 5;
          if (t in i && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            n-- && !(U[n] + t in i);

          );
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? U[n] : "") + t;
        },
        X = function () {
          "undefined" != typeof window &&
            window.document &&
            ((i = window),
            (n = i.document),
            (s = n.documentElement),
            (o = L("div") || { style: {} }),
            L("div"),
            (E = N(E)),
            (F = E + "Origin"),
            (o.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (f = !!N("perspective")),
            (h = l.p8.core.reverting),
            (a = 1));
        },
        q = function t(e) {
          var r,
            i = L(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            n = this.parentNode,
            a = this.nextSibling,
            o = this.style.cssText;
          if (
            (s.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            n && (a ? n.insertBefore(this, a) : n.appendChild(this)),
            s.removeChild(i),
            (this.style.cssText = o),
            r
          );
        },
        V = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        W = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = q.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === q ||
              (e = q.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +V(t, ["x", "cx", "x1"]) || 0,
                  y: +V(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        j = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !W(t));
        },
        G = function (t, e) {
          if (e) {
            var r = t.style;
            e in c && e !== F && (e = E),
              r.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(e.replace(m, "-$1").toLowerCase()))
                : r.removeAttribute(e);
          }
        },
        Q = function (t, e, r, i, n, s) {
          var a = new l.Fo(t._pt, e, r, 0, 1, s ? M : k);
          return (t._pt = a), (a.b = i), (a.e = n), t._props.push(r), a;
        },
        $ = { deg: 1, rad: 1, turn: 1 },
        H = { grid: 1, flex: 1 },
        Z = function t(e, r, i, s) {
          var a,
            u,
            h,
            f,
            p = parseFloat(i) || 0,
            _ = (i + "").trim().substr((p + "").length) || "px",
            d = o.style,
            m = g.test(r),
            v = "svg" === e.tagName.toLowerCase(),
            y = (v ? "client" : "offset") + (m ? "Width" : "Height"),
            T = 100,
            x = "px" === s,
            w = "%" === s;
          return s === _ || !p || $[s] || $[_]
            ? p
            : ("px" !== _ && !x && (p = t(e, r, i, "px")),
              (f = e.getCTM && j(e)),
              (!w && "%" !== _) || (!c[r] && !~r.indexOf("adius"))
                ? ((d[m ? "width" : "height"] = T + (x ? _ : s)),
                  (u =
                    ~r.indexOf("adius") || ("em" === s && e.appendChild && !v)
                      ? e
                      : e.parentNode),
                  f && (u = (e.ownerSVGElement || {}).parentNode),
                  (u && u !== n && u.appendChild) || (u = n.body),
                  (h = u._gsap) &&
                  w &&
                  h.width &&
                  m &&
                  h.time === l.xr.time &&
                  !h.uncache
                    ? (0, l.Pr)((p / h.width) * T)
                    : ((w || "%" === _) &&
                        !H[Y(u, "display")] &&
                        (d.position = Y(e, "position")),
                      u === e && (d.position = "static"),
                      u.appendChild(o),
                      (a = o[y]),
                      u.removeChild(o),
                      (d.position = "absolute"),
                      m &&
                        w &&
                        (((h = (0, l.DY)(u)).time = l.xr.time),
                        (h.width = u[y])),
                      (0, l.Pr)(x ? (a * p) / T : a && p ? (T / a) * p : 0)))
                : ((a = f ? e.getBBox()[m ? "width" : "height"] : e[y]),
                  (0, l.Pr)(w ? (p / a) * T : (p / 100) * a)));
        },
        J = function (t, e, r, i) {
          var n;
          return (
            a || X(),
            e in y &&
              "transform" !== e &&
              ~(e = y[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            c[e] && "transform" !== e
              ? ((n = ht(t, i)),
                (n =
                  "transformOrigin" !== e
                    ? n[e]
                    : n.svg
                    ? n.origin
                    : ft(Y(t, F)) + " " + n.zOrigin + "px"))
              : (!(n = t.style[e]) ||
                  "auto" === n ||
                  i ||
                  ~(n + "").indexOf("calc(")) &&
                (n =
                  (rt[e] && rt[e](t, e, r)) ||
                  Y(t, e) ||
                  (0, l.Ok)(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(n + "").trim().indexOf(" ") ? Z(t, e, n, r) + r : n
          );
        },
        K = function (t, e, r, i) {
          if (!r || "none" === r) {
            var n = N(e, t, 1),
              s = n && Y(t, n, 1);
            s && s !== r
              ? ((e = n), (r = s))
              : "borderColor" === e && (r = Y(t, "borderTopColor"));
          }
          var a,
            o,
            u,
            h,
            f,
            c,
            p,
            _,
            d,
            m,
            g,
            v = new l.Fo(this._pt, t.style, e, 0, 1, l.Ks),
            y = 0,
            T = 0;
          if (
            ((v.b = r),
            (v.e = i),
            (r += ""),
            "auto" === (i += "") &&
              ((t.style[e] = i), (i = Y(t, e) || i), (t.style[e] = r)),
            (a = [r, i]),
            (0, l.kr)(a),
            (i = a[1]),
            (u = (r = a[0]).match(l.d4) || []),
            (i.match(l.d4) || []).length)
          ) {
            for (; (o = l.d4.exec(i)); )
              (p = o[0]),
                (d = i.substring(y, o.index)),
                f
                  ? (f = (f + 1) % 5)
                  : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                    (f = 1),
                p !== (c = u[T++] || "") &&
                  ((h = parseFloat(c) || 0),
                  (g = c.substr((h + "").length)),
                  "=" === p.charAt(1) && (p = (0, l.cy)(h, p) + g),
                  (_ = parseFloat(p)),
                  (m = p.substr((_ + "").length)),
                  (y = l.d4.lastIndex - m.length),
                  m ||
                    ((m = m || l.Fc.units[e] || g),
                    y === i.length && ((i += m), (v.e += m))),
                  g !== m && (h = Z(t, e, c, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: d || 1 === T ? d : ",",
                    s: h,
                    c: _ - h,
                    m: (f && f < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            v.c = y < i.length ? i.substring(y, i.length) : "";
          } else v.r = "display" === e && "none" === i ? M : k;
          return l.bQ.test(i) && (v.e = 0), (this._pt = v), v;
        },
        tt = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        et = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              i,
              n,
              s = e.t,
              a = s.style,
              o = e.u,
              u = s._gsap;
            if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
            else
              for (n = (o = o.split(",")).length; --n > -1; )
                (r = o[n]),
                  c[r] && ((i = 1), (r = "transformOrigin" === r ? F : E)),
                  G(s, r);
            i &&
              (G(s, E),
              u &&
                (u.svg && s.removeAttribute("transform"),
                ht(s, 1),
                (u.uncache = 1),
                z(a)));
          }
        },
        rt = {
          clearProps: function (t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
              var s = (t._pt = new l.Fo(t._pt, e, r, 0, 0, et));
              return (
                (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1
              );
            }
          },
        },
        it = [1, 0, 0, 1, 0, 0],
        nt = {},
        st = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        at = function (t) {
          var e = Y(t, E);
          return st(e) ? it : e.substr(7).match(l.SI).map(l.Pr);
        },
        ot = function (t, e) {
          var r,
            i,
            n,
            a,
            o = t._gsap || (0, l.DY)(t),
            u = t.style,
            h = at(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (h = [
                (n = t.transform.baseVal.consolidate().matrix).a,
                n.b,
                n.c,
                n.d,
                n.e,
                n.f,
              ]).join(",")
              ? it
              : h
            : (h !== it ||
                t.offsetParent ||
                t === s ||
                o.svg ||
                ((n = u.display),
                (u.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((a = 1), (i = t.nextElementSibling), s.appendChild(t)),
                (h = at(t)),
                n ? (u.display = n) : G(t, "display"),
                a &&
                  (i
                    ? r.insertBefore(t, i)
                    : r
                    ? r.appendChild(t)
                    : s.removeChild(t))),
              e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h);
        },
        ut = function (t, e, r, i, n, s) {
          var a,
            o,
            u,
            h = t._gsap,
            f = n || ot(t, !0),
            l = h.xOrigin || 0,
            c = h.yOrigin || 0,
            p = h.xOffset || 0,
            _ = h.yOffset || 0,
            d = f[0],
            m = f[1],
            g = f[2],
            v = f[3],
            y = f[4],
            T = f[5],
            x = e.split(" "),
            w = parseFloat(x[0]) || 0,
            b = parseFloat(x[1]) || 0;
          r
            ? f !== it &&
              (o = d * v - m * g) &&
              ((u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o),
              (w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o),
              (b = u))
            : ((w =
                (a = W(t)).x + (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
              (b =
                a.y +
                (~(x[1] || x[0]).indexOf("%") ? (b / 100) * a.height : b))),
            i || (!1 !== i && h.smooth)
              ? ((y = w - l),
                (T = b - c),
                (h.xOffset = p + (y * d + T * g) - y),
                (h.yOffset = _ + (y * m + T * v) - T))
              : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = w),
            (h.yOrigin = b),
            (h.smooth = !!i),
            (h.origin = e),
            (h.originIsAbsolute = !!r),
            (t.style[F] = "0px 0px"),
            s &&
              (Q(s, h, "xOrigin", l, w),
              Q(s, h, "yOrigin", c, b),
              Q(s, h, "xOffset", p, h.xOffset),
              Q(s, h, "yOffset", _, h.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + b);
        },
        ht = function (t, e) {
          var r = t._gsap || new l.l1(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            c,
            m,
            g,
            v,
            y,
            T,
            x,
            w,
            b,
            k,
            M,
            O,
            P,
            A,
            C,
            D,
            S,
            R,
            z,
            B,
            I,
            L,
            U,
            N,
            X,
            q = t.style,
            V = r.scaleX < 0,
            W = "px",
            G = "deg",
            Q = getComputedStyle(t),
            $ = Y(t, F) || "0";
          return (
            (i = n = s = u = h = c = m = g = v = 0),
            (a = o = 1),
            (r.svg = !(!t.getCTM || !j(t))),
            Q.translate &&
              (("none" === Q.translate &&
                "none" === Q.scale &&
                "none" === Q.rotate) ||
                (q[E] =
                  ("none" !== Q.translate
                    ? "translate3d(" +
                      (Q.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== Q.rotate ? "rotate(" + Q.rotate + ") " : "") +
                  ("none" !== Q.scale
                    ? "scale(" + Q.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== Q[E] ? Q[E] : "")),
              (q.scale = q.rotate = q.translate = "none")),
            (x = ot(t, r.svg)),
            r.svg &&
              (r.uncache
                ? ((R = t.getBBox()),
                  ($ = r.xOrigin - R.x + "px " + (r.yOrigin - R.y) + "px"),
                  (S = ""))
                : (S = !e && t.getAttribute("data-svg-origin")),
              ut(t, S || $, !!S || r.originIsAbsolute, !1 !== r.smooth, x)),
            (y = r.xOrigin || 0),
            (T = r.yOrigin || 0),
            x !== it &&
              ((M = x[0]),
              (O = x[1]),
              (P = x[2]),
              (A = x[3]),
              (i = C = x[4]),
              (n = D = x[5]),
              6 === x.length
                ? ((a = Math.sqrt(M * M + O * O)),
                  (o = Math.sqrt(A * A + P * P)),
                  (u = M || O ? d(O, M) * p : 0),
                  (m = P || A ? d(P, A) * p + u : 0) &&
                    (o *= Math.abs(Math.cos(m * _))),
                  r.svg &&
                    ((i -= y - (y * M + T * P)), (n -= T - (y * O + T * A))))
                : ((X = x[6]),
                  (U = x[7]),
                  (B = x[8]),
                  (I = x[9]),
                  (L = x[10]),
                  (N = x[11]),
                  (i = x[12]),
                  (n = x[13]),
                  (s = x[14]),
                  (h = (w = d(X, L)) * p),
                  w &&
                    ((S = C * (b = Math.cos(-w)) + B * (k = Math.sin(-w))),
                    (R = D * b + I * k),
                    (z = X * b + L * k),
                    (B = C * -k + B * b),
                    (I = D * -k + I * b),
                    (L = X * -k + L * b),
                    (N = U * -k + N * b),
                    (C = S),
                    (D = R),
                    (X = z)),
                  (c = (w = d(-P, L)) * p),
                  w &&
                    ((b = Math.cos(-w)),
                    (N = A * (k = Math.sin(-w)) + N * b),
                    (M = S = M * b - B * k),
                    (O = R = O * b - I * k),
                    (P = z = P * b - L * k)),
                  (u = (w = d(O, M)) * p),
                  w &&
                    ((S = M * (b = Math.cos(w)) + O * (k = Math.sin(w))),
                    (R = C * b + D * k),
                    (O = O * b - M * k),
                    (D = D * b - C * k),
                    (M = S),
                    (C = R)),
                  h &&
                    Math.abs(h) + Math.abs(u) > 359.9 &&
                    ((h = u = 0), (c = 180 - c)),
                  (a = (0, l.Pr)(Math.sqrt(M * M + O * O + P * P))),
                  (o = (0, l.Pr)(Math.sqrt(D * D + X * X))),
                  (w = d(C, D)),
                  (m = Math.abs(w) > 2e-4 ? w * p : 0),
                  (v = N ? 1 / (N < 0 ? -N : N) : 0)),
              r.svg &&
                ((S = t.getAttribute("transform")),
                (r.forceCSS = t.setAttribute("transform", "") || !st(Y(t, E))),
                S && t.setAttribute("transform", S))),
            Math.abs(m) > 90 &&
              Math.abs(m) < 270 &&
              (V
                ? ((a *= -1),
                  (m += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((o *= -1), (m += m <= 0 ? 180 : -180))),
            (e = e || r.uncache),
            (r.x =
              i -
              ((r.xPercent =
                i &&
                ((!e && r.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              W),
            (r.y =
              n -
              ((r.yPercent =
                n &&
                ((!e && r.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-n)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              W),
            (r.z = s + W),
            (r.scaleX = (0, l.Pr)(a)),
            (r.scaleY = (0, l.Pr)(o)),
            (r.rotation = (0, l.Pr)(u) + G),
            (r.rotationX = (0, l.Pr)(h) + G),
            (r.rotationY = (0, l.Pr)(c) + G),
            (r.skewX = m + G),
            (r.skewY = g + G),
            (r.transformPerspective = v + W),
            (r.zOrigin = parseFloat($.split(" ")[2]) || 0) && (q[F] = ft($)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = l.Fc.force3D),
            (r.renderTransform = r.svg ? gt : f ? mt : ct),
            (r.uncache = 0),
            r
          );
        },
        ft = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        lt = function (t, e, r) {
          var i = (0, l.Wy)(e);
          return (
            (0, l.Pr)(parseFloat(e) + parseFloat(Z(t, "x", r + "px", i))) + i
          );
        },
        ct = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            mt(t, e);
        },
        pt = "0deg",
        _t = "0px",
        dt = ") ",
        mt = function (t, e) {
          var r = e || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            a = r.y,
            o = r.z,
            u = r.rotation,
            h = r.rotationY,
            f = r.rotationX,
            l = r.skewX,
            c = r.skewY,
            p = r.scaleX,
            d = r.scaleY,
            m = r.transformPerspective,
            g = r.force3D,
            v = r.target,
            y = r.zOrigin,
            T = "",
            x = ("auto" === g && t && 1 !== t) || !0 === g;
          if (y && (f !== pt || h !== pt)) {
            var w,
              b = parseFloat(h) * _,
              k = Math.sin(b),
              M = Math.cos(b);
            (b = parseFloat(f) * _),
              (w = Math.cos(b)),
              (s = lt(v, s, k * w * -y)),
              (a = lt(v, a, -Math.sin(b) * -y)),
              (o = lt(v, o, M * w * -y + y));
          }
          m !== _t && (T += "perspective(" + m + dt),
            (i || n) && (T += "translate(" + i + "%, " + n + "%) "),
            (x || s !== _t || a !== _t || o !== _t) &&
              (T +=
                o !== _t || x
                  ? "translate3d(" + s + ", " + a + ", " + o + ") "
                  : "translate(" + s + ", " + a + dt),
            u !== pt && (T += "rotate(" + u + dt),
            h !== pt && (T += "rotateY(" + h + dt),
            f !== pt && (T += "rotateX(" + f + dt),
            (l === pt && c === pt) || (T += "skew(" + l + ", " + c + dt),
            (1 === p && 1 === d) || (T += "scale(" + p + ", " + d + dt),
            (v.style[E] = T || "translate(0, 0)");
        },
        gt = function (t, e) {
          var r,
            i,
            n,
            s,
            a,
            o = e || this,
            u = o.xPercent,
            h = o.yPercent,
            f = o.x,
            c = o.y,
            p = o.rotation,
            d = o.skewX,
            m = o.skewY,
            g = o.scaleX,
            v = o.scaleY,
            y = o.target,
            T = o.xOrigin,
            x = o.yOrigin,
            w = o.xOffset,
            b = o.yOffset,
            k = o.forceCSS,
            M = parseFloat(f),
            O = parseFloat(c);
          (p = parseFloat(p)),
            (d = parseFloat(d)),
            (m = parseFloat(m)) && ((d += m = parseFloat(m)), (p += m)),
            p || d
              ? ((p *= _),
                (d *= _),
                (r = Math.cos(p) * g),
                (i = Math.sin(p) * g),
                (n = Math.sin(p - d) * -v),
                (s = Math.cos(p - d) * v),
                d &&
                  ((m *= _),
                  (a = Math.tan(d - m)),
                  (n *= a = Math.sqrt(1 + a * a)),
                  (s *= a),
                  m &&
                    ((a = Math.tan(m)),
                    (r *= a = Math.sqrt(1 + a * a)),
                    (i *= a))),
                (r = (0, l.Pr)(r)),
                (i = (0, l.Pr)(i)),
                (n = (0, l.Pr)(n)),
                (s = (0, l.Pr)(s)))
              : ((r = g), (s = v), (i = n = 0)),
            ((M && !~(f + "").indexOf("px")) ||
              (O && !~(c + "").indexOf("px"))) &&
              ((M = Z(y, "x", f, "px")), (O = Z(y, "y", c, "px"))),
            (T || x || w || b) &&
              ((M = (0, l.Pr)(M + T - (T * r + x * n) + w)),
              (O = (0, l.Pr)(O + x - (T * i + x * s) + b))),
            (u || h) &&
              ((a = y.getBBox()),
              (M = (0, l.Pr)(M + (u / 100) * a.width)),
              (O = (0, l.Pr)(O + (h / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              i +
              "," +
              n +
              "," +
              s +
              "," +
              M +
              "," +
              O +
              ")"),
            y.setAttribute("transform", a),
            k && (y.style[E] = a);
        },
        vt = function (t, e, r, i, n) {
          var s,
            a,
            o = 360,
            u = (0, l.r9)(n),
            h = parseFloat(n) * (u && ~n.indexOf("rad") ? p : 1) - i,
            f = i + h + "deg";
          return (
            u &&
              ("short" === (s = n.split("_")[1]) &&
                (h %= o) !== h % 180 &&
                (h += h < 0 ? o : -360),
              "cw" === s && h < 0
                ? (h = ((h + 36e9) % o) - ~~(h / o) * o)
                : "ccw" === s &&
                  h > 0 &&
                  (h = ((h - 36e9) % o) - ~~(h / o) * o)),
            (t._pt = a = new l.Fo(t._pt, e, r, i, h, x)),
            (a.e = f),
            (a.u = "deg"),
            t._props.push(r),
            a
          );
        },
        yt = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        Tt = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            f = yt({}, r._gsap),
            p = r.style;
          for (n in (f.svg
            ? ((s = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (p[E] = e),
              (i = ht(r, 1)),
              G(r, E),
              r.setAttribute("transform", s))
            : ((s = getComputedStyle(r)[E]),
              (p[E] = e),
              (i = ht(r, 1)),
              (p[E] = s)),
          c))
            (s = f[n]) !== (a = i[n]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
              ((o =
                (0, l.Wy)(s) !== (h = (0, l.Wy)(a))
                  ? Z(r, n, s, h)
                  : parseFloat(s)),
              (u = parseFloat(a)),
              (t._pt = new l.Fo(t._pt, i, n, o, u - o, T)),
              (t._pt.u = h || 0),
              t._props.push(n));
          yt(i, f);
        };
      (0, l.fS)("padding,margin,Width,Radius", function (t, e) {
        var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(
            function (r) {
              return e < 2 ? t + r : "border" + r + t;
            }
          );
        rt[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
          var s, o;
          if (arguments.length < 4)
            return (
              (s = a.map(function (e) {
                return J(t, e, r);
              })),
              5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
            );
          (s = (i + "").split(" ")),
            (o = {}),
            a.forEach(function (t, e) {
              return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
            }),
            t.init(e, o, n);
        };
      });
      var xt,
        wt,
        bt,
        kt = {
          name: "css",
          register: X,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, i, n) {
            var s,
              o,
              u,
              h,
              f,
              p,
              _,
              d,
              m,
              g,
              x,
              k,
              M,
              O,
              P,
              A,
              C,
              D,
              S,
              R,
              z = this._props,
              B = t.style,
              L = r.vars.startAt;
            for (_ in (a || X(),
            (this.styles = this.styles || I(t)),
            (A = this.styles.props),
            (this.tween = r),
            e))
              if (
                "autoRound" !== _ &&
                ((o = e[_]), !l.$i[_] || !(0, l.if)(_, e, r, i, t, n))
              )
                if (
                  ((f = typeof o),
                  (p = rt[_]),
                  "function" === f && (f = typeof (o = o.call(r, i, t, n))),
                  "string" === f && ~o.indexOf("random(") && (o = (0, l.UI)(o)),
                  p)
                )
                  p(this, t, _, o, r) && (P = 1);
                else if ("--" === _.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(_) + "").trim()),
                    (o += ""),
                    (l.GN.lastIndex = 0),
                    l.GN.test(s) || ((d = (0, l.Wy)(s)), (m = (0, l.Wy)(o))),
                    m ? d !== m && (s = Z(t, _, s, m) + m) : d && (o += d),
                    this.add(B, "setProperty", s, o, i, n, 0, 0, _),
                    z.push(_),
                    A.push(_, 0, B[_]);
                else if ("undefined" !== f) {
                  if (
                    (L && _ in L
                      ? ((s =
                          "function" == typeof L[_]
                            ? L[_].call(r, i, t, n)
                            : L[_]),
                        (0, l.r9)(s) &&
                          ~s.indexOf("random(") &&
                          (s = (0, l.UI)(s)),
                        (0, l.Wy)(s + "") ||
                          (s += l.Fc.units[_] || (0, l.Wy)(J(t, _)) || ""),
                        "=" === (s + "").charAt(1) && (s = J(t, _)))
                      : (s = J(t, _)),
                    (h = parseFloat(s)),
                    (g =
                      "string" === f &&
                      "=" === o.charAt(1) &&
                      o.substr(0, 2)) && (o = o.substr(2)),
                    (u = parseFloat(o)),
                    _ in y &&
                      ("autoAlpha" === _ &&
                        (1 === h &&
                          "hidden" === J(t, "visibility") &&
                          u &&
                          (h = 0),
                        A.push("visibility", 0, B.visibility),
                        Q(
                          this,
                          B,
                          "visibility",
                          h ? "inherit" : "hidden",
                          u ? "inherit" : "hidden",
                          !u
                        )),
                      "scale" !== _ &&
                        "transform" !== _ &&
                        ~(_ = y[_]).indexOf(",") &&
                        (_ = _.split(",")[0])),
                    (x = _ in c))
                  )
                    if (
                      (this.styles.save(_),
                      k ||
                        (((M = t._gsap).renderTransform && !e.parseTransform) ||
                          ht(t, e.parseTransform),
                        (O = !1 !== e.smoothOrigin && M.smooth),
                        ((k = this._pt =
                          new l.Fo(
                            this._pt,
                            B,
                            E,
                            0,
                            1,
                            M.renderTransform,
                            M,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === _)
                    )
                      (this._pt = new l.Fo(
                        this._pt,
                        M,
                        "scaleY",
                        M.scaleY,
                        (g ? (0, l.cy)(M.scaleY, g + u) : u) - M.scaleY || 0,
                        T
                      )),
                        (this._pt.u = 0),
                        z.push("scaleY", _),
                        (_ += "X");
                    else {
                      if ("transformOrigin" === _) {
                        A.push(F, 0, B[F]),
                          (D = void 0),
                          (S = void 0),
                          (R = void 0),
                          (D = (C = o).split(" ")),
                          (S = D[0]),
                          (R = D[1] || "50%"),
                          ("top" !== S &&
                            "bottom" !== S &&
                            "left" !== R &&
                            "right" !== R) ||
                            ((C = S), (S = R), (R = C)),
                          (D[0] = tt[S] || S),
                          (D[1] = tt[R] || R),
                          (o = D.join(" ")),
                          M.svg
                            ? ut(t, o, 0, O, 0, this)
                            : ((m = parseFloat(o.split(" ")[2]) || 0) !==
                                M.zOrigin &&
                                Q(this, M, "zOrigin", M.zOrigin, m),
                              Q(this, B, _, ft(s), ft(o)));
                        continue;
                      }
                      if ("svgOrigin" === _) {
                        ut(t, o, 1, O, 0, this);
                        continue;
                      }
                      if (_ in nt) {
                        vt(this, M, _, h, g ? (0, l.cy)(h, g + o) : o);
                        continue;
                      }
                      if ("smoothOrigin" === _) {
                        Q(this, M, "smooth", M.smooth, o);
                        continue;
                      }
                      if ("force3D" === _) {
                        M[_] = o;
                        continue;
                      }
                      if ("transform" === _) {
                        Tt(this, o, t);
                        continue;
                      }
                    }
                  else _ in B || (_ = N(_) || _);
                  if (
                    x ||
                    ((u || 0 === u) && (h || 0 === h) && !v.test(o) && _ in B)
                  )
                    u || (u = 0),
                      (d = (s + "").substr((h + "").length)) !==
                        (m =
                          (0, l.Wy)(o) ||
                          (_ in l.Fc.units ? l.Fc.units[_] : d)) &&
                        (h = Z(t, _, s, m)),
                      (this._pt = new l.Fo(
                        this._pt,
                        x ? M : B,
                        _,
                        h,
                        (g ? (0, l.cy)(h, g + u) : u) - h,
                        x ||
                        ("px" !== m && "zIndex" !== _) ||
                        !1 === e.autoRound
                          ? T
                          : b
                      )),
                      (this._pt.u = m || 0),
                      d !== m &&
                        "%" !== m &&
                        ((this._pt.b = s), (this._pt.r = w));
                  else if (_ in B) K.call(this, t, _, s, g ? g + o : o);
                  else if (_ in t)
                    this.add(t, _, s || t[_], g ? g + o : o, i, n);
                  else if ("parseTransform" !== _) {
                    (0, l.lC)(_, o);
                    continue;
                  }
                  x || (_ in B ? A.push(_, 0, B[_]) : A.push(_, 1, s || t[_])),
                    z.push(_);
                }
            P && (0, l.JV)(this);
          },
          render: function (t, e) {
            if (e.tween._time || !h())
              for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
            else e.styles.revert();
          },
          get: J,
          aliases: y,
          getSetter: function (t, e, r) {
            var i = y[e];
            return (
              i && i.indexOf(",") < 0 && (e = i),
              e in c && e !== F && (t._gsap.x || J(t, "x"))
                ? r && u === r
                  ? "scale" === e
                    ? C
                    : A
                  : (u = r || {}) && ("scale" === e ? D : S)
                : t.style && !(0, l.m2)(t.style[e])
                ? O
                : ~e.indexOf("-")
                ? P
                : (0, l.S5)(t, e)
            );
          },
          core: { _removeProperty: G, _getMatrix: ot },
        };
      (l.p8.utils.checkPrefix = N),
        (l.p8.core.getStyleSaver = I),
        (xt = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (wt = "rotation,rotationX,rotationY,skewX,skewY"),
        (bt = (0, l.fS)(
          xt +
            "," +
            wt +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            c[t] = 1;
          }
        )),
        (0, l.fS)(wt, function (t) {
          (l.Fc.units[t] = "deg"), (nt[t] = 1);
        }),
        (y[bt[13]] = xt + "," + wt),
        (0, l.fS)(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            y[e[1]] = bt[e[0]];
          }
        ),
        (0, l.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            l.Fc.units[t] = "px";
          }
        ),
        l.p8.registerPlugin(kt);
      var Mt = l.p8.registerPlugin(kt) || l.p8;
      Mt.core.Tween;
    },
  },
]);
