function Stimer() {
    function t(t) {
        var e = {};
        e.year = t[0] || new Date.getFullYear, e.month = t[1] - 1 || 0, e.day = t[2] || 0, e.hour = t[3] - 1 || 0, i = new Date(e.year, e.month, e.day, e.hour), r = i - o, s = Math.floor(r / 1e3), a = Math.floor(s / 60), l = Math.floor(a / 60), c = Math.floor(l / 24), u.sec = s % 60, u.min = a % 60, u.hour = l % 24, u.day = c
    }

    function e(t, e) {
        var n = document.querySelectorAll(t + " .sc-sec"), i = document.querySelectorAll(t + " .sc-min"), o = document.querySelectorAll(t + " .sc-hour"), r = document.querySelectorAll(t + " .sc-day"), s = setInterval(function () {
            u.sec -= 1;
            for (var t = 0; t < n.length; t++)n[t].innerHTML = u.addZero(u.sec);
            if (0 === u.sec && u.min > 0) {
                u.min -= 1;
                for (var a = 0; a < n.length; a++)i[a].innerHTML = u.addZero(u.min);
                if (u.sec = 60, 0 === u.min && u.hour > 0) {
                    u.hour -= 1;
                    for (var l = 0; l < n.length; l++)o[l].innerHTML = u.addZero(u.hour);
                    if (u.min = 60, 0 === u.hour && u.day > 0) {
                        u.day -= 1;
                        for (var c = 0; c < n.length; c++)r[c].innerHTML = u.addZero(u.day);
                        u.hour = 23
                    }
                }
            }
            if (u.day <= 0 && u.hour <= 0 && u.min <= 0 && u.sec <= 0) {
                clearInterval(s);
                for (var p = 0; p < n.length; p++)n[p].innerHTML = "00", i[p].innerHTML = "00", o[p].innerHTML = "00", r[p].innerHTML = "00";
                console.log("timer done"), e && "function" == typeof e && e()
            }
        }, 1e3)
    }

    function n(t) {
        for (var e = [], n = document.querySelectorAll(t), i = 0; i < n.length; i++) {
            var o = document.createElement("span"), r = document.createElement("span"), s = document.createElement("span"), a = document.createElement("span");
            e[i] = document.createDocumentFragment(), o.classList.add("sc-sec", "sc-time"), r.classList.add("sc-min", "sc-time"), s.classList.add("sc-hour", "sc-time"), a.classList.add("sc-day", "sc-time"), o.innerHTML = u.addZero(u.sec), r.innerHTML = u.addZero(u.min), s.innerHTML = u.addZero(u.hour), a.innerHTML = u.addZero(u.day), e[i].appendChild(a), e[i].appendChild(s), e[i].appendChild(r), e[i].appendChild(o), n[i].appendChild(e[i])
        }
    }

    var i, o = new Date, r = 0, s = 0, a = 0, l = 0, c = 0, u = this;
    this.addZero = function (t) {
        return 10 > t ? "0" + t : t
    }, this.init = function (i, o, r) {
        t(i), n(o), e(o, r)
    }
}
if (function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
                    if (!t.document)throw new Error("jQuery requires a window with a document");
                    return e(t)
                } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = t.length, n = J.type(t);
            return "function" === n || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (J.isFunction(e))return J.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType)return J.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (ae.test(e))return J.filter(e, t, n);
                e = J.filter(e, t)
            }
            return J.grep(t, function (t) {
                return V.call(e, t) >= 0 !== n
            })
        }

        function o(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r(t) {
            var e = he[t] = {};
            return J.each(t.match(fe) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            K.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), J.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            }), this.expando = J.expando + Math.random()
        }

        function l(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)if (i = "data-" + e.replace(xe, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? J.parseJSON(n) : n
                } catch (o) {
                }
                ye.set(t, e, n)
            } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function p() {
            try {
                return K.activeElement
            } catch (t) {
            }
        }

        function d(t, e) {
            return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function f(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function h(t) {
            var e = Me.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var n = 0, i = t.length; i > n; n++)ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
        }

        function m(t, e) {
            var n, i, o, r, s, a, l, c;
            if (1 === e.nodeType) {
                if (ve.hasData(t) && (r = ve.access(t), s = ve.set(e, r), c = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in c)for (n = 0, i = c[o].length; i > n; n++)J.event.add(e, o, c[o][n])
                }
                ye.hasData(t) && (a = ye.access(t), l = J.extend({}, a), ye.set(e, l))
            }
        }

        function v(t, e) {
            var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], n) : n
        }

        function y(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && ke.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }

        function b(e, n) {
            var i, o = J(n.createElement(e)).appendTo(n.body), r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : J.css(o[0], "display");
            return o.detach(), r
        }

        function x(t) {
            var e = K, n = Fe[t];
            return n || (n = b(t, e), "none" !== n && n || (Re = (Re || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Re[0].contentDocument, e.write(), e.close(), n = b(t, e), Re.detach()), Fe[t] = n), n
        }

        function w(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || Be(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)), _e.test(s) && Ie.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function C(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function T(t, e) {
            if (e in t)return e;
            for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Ze.length; o--;)if (e = Ze[o] + n, e in t)return e;
            return i
        }

        function k(t, e, n) {
            var i = Ue.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function E(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += J.css(t, n + Ce[r], !0, o)), i ? ("content" === n && (s -= J.css(t, "padding" + Ce[r], !0, o)), "margin" !== n && (s -= J.css(t, "border" + Ce[r] + "Width", !0, o))) : (s += J.css(t, "padding" + Ce[r], !0, o), "padding" !== n && (s += J.css(t, "border" + Ce[r] + "Width", !0, o)));
            return s
        }

        function S(t, e, n) {
            var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = Be(t), s = "border-box" === J.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = w(t, e, r), (0 > o || null == o) && (o = t.style[e]), _e.test(o))return o;
                i = s && (Y.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + E(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function $(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)i = t[s], i.style && (r[s] = ve.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (r[s] = ve.access(i, "olddisplay", x(i.nodeName)))) : (o = Te(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : J.css(i, "display"))));
            for (s = 0; a > s; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function D(t, e, n, i, o) {
            return new D.prototype.init(t, e, n, i, o)
        }

        function N() {
            return setTimeout(function () {
                Ye = void 0
            }), Ye = J.now()
        }

        function j(t, e) {
            var n, i = 0, o = {height: t};
            for (e = e ? 1 : 0; 4 > i; i += 2 - e)n = Ce[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function A(t, e, n) {
            for (var i, o = (nn[e] || []).concat(nn["*"]), r = 0, s = o.length; s > r; r++)if (i = o[r].call(n, e, t))return i
        }

        function L(t, e, n) {
            var i, o, r, s, a, l, c, u, p = this, d = {}, f = t.style, h = t.nodeType && Te(t), g = ve.get(t, "fxshow");
            n.queue || (a = J._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = J.css(t, "display"), u = "none" === c ? ve.get(t, "olddisplay") || x(t.nodeName) : c, "inline" === u && "none" === J.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)if (o = e[i], Ge.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i])continue;
                    h = !0
                }
                d[i] = g && g[i] || J.style(t, i)
            } else c = void 0;
            if (J.isEmptyObject(d)) "inline" === ("none" === c ? x(t.nodeName) : c) && (f.display = c); else {
                g ? "hidden" in g && (h = g.hidden) : g = ve.access(t, "fxshow", {}), r && (g.hidden = !h), h ? J(t).show() : p.done(function () {
                        J(t).hide()
                    }), p.done(function () {
                    var e;
                    ve.remove(t, "fxshow");
                    for (e in d)J.style(t, e, d[e])
                });
                for (i in d)s = A(h ? g[i] : 0, i, p), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function H(t, e) {
            var n, i, o, r, s;
            for (n in t)if (i = J.camelCase(n), o = e[i], r = t[n], J.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = J.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete t[i];
                for (n in r)n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
        }

        function O(t, e, n) {
            var i, o, r = 0, s = en.length, a = J.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var e = Ye || N(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++)c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ye || N(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = J.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; i > n; n++)c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (H(u, c.opts.specialEasing); s > r; r++)if (i = en[r].call(c, t, u, c.opts))return i;
            return J.map(u, A, c), J.isFunction(c.opts.start) && c.opts.start.call(t, c), J.fx.timer(J.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function P(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, r = e.toLowerCase().match(fe) || [];
                if (J.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function M(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, J.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            var r = {}, s = t === Cn;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function W(t, e) {
            var n, i, o = J.ajaxSettings.flatOptions || {};
            for (n in e)void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && J.extend(!0, t, i), t
        }

        function q(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)for (o in a)if (a[o] && a[o].test(i)) {
                l.unshift(o);
                break
            }
            if (l[0] in n) r = l[0]; else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function R(t, e, n, i) {
            var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
            if (u[1])for (s in t.converters)c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                if (s = c[l + " " + r] || c["* " + r], !s)for (o in c)if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                    break
                }
                if (s !== !0)if (s && t["throws"]) e = s(e); else try {
                    e = s(e)
                } catch (p) {
                    return {state: "parsererror", error: s ? p : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: e}
        }

        function F(t, e, n, i) {
            var o;
            if (J.isArray(e)) J.each(e, function (e, o) {
                n || Sn.test(t) ? i(t, o) : F(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== J.type(e)) i(t, e); else for (o in e)F(t + "[" + o + "]", e[o], n, i)
        }

        function I(t) {
            return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }

        var _ = [], B = _.slice, z = _.concat, U = _.push, V = _.indexOf, X = {}, Q = X.toString, Z = X.hasOwnProperty, Y = {}, K = t.document, G = "2.1.1", J = function (t, e) {
            return new J.fn.init(t, e)
        }, te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ee = /^-ms-/, ne = /-([\da-z])/gi, ie = function (t, e) {
            return e.toUpperCase()
        };
        J.fn = J.prototype = {
            jquery: G, constructor: J, selector: "", length: 0, toArray: function () {
                return B.call(this)
            }, get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
            }, pushStack: function (t) {
                var e = J.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return J.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(J.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(B.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: U, sort: _.sort, splice: _.splice
        }, J.extend = J.fn.extend = function () {
            var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (t = arguments[a]))for (e in t)n = s[e], i = t[e], s !== i && (c && i && (J.isPlainObject(i) || (o = J.isArray(i))) ? (o ? (o = !1, r = n && J.isArray(n) ? n : []) : r = n && J.isPlainObject(n) ? n : {}, s[e] = J.extend(c, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, J.extend({
            expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === J.type(t)
            }, isArray: Array.isArray, isWindow: function (t) {
                return null != t && t === t.window
            }, isNumeric: function (t) {
                return !J.isArray(t) && t - parseFloat(t) >= 0
            }, isPlainObject: function (t) {
                return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : t.constructor && !Z.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[Q.call(t)] || "object" : typeof t
            }, globalEval: function (t) {
                var e, n = eval;
                t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = K.createElement("script"), e.text = t, K.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            }, camelCase: function (t) {
                return t.replace(ee, "ms-").replace(ne, ie)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, i) {
                var o, r = 0, s = t.length, a = n(t);
                if (i) {
                    if (a)for (; s > r && (o = e.apply(t[r], i), o !== !1); r++); else for (r in t)if (o = e.apply(t[r], i), o === !1)break
                } else if (a)for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++); else for (r in t)if (o = e.call(t[r], r, t[r]), o === !1)break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(te, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? J.merge(i, "string" == typeof t ? [t] : t) : U.call(i, t)), i
            }, inArray: function (t, e, n) {
                return null == e ? -1 : V.call(e, t, n)
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i; i++)t[o++] = e[i];
                return t.length = o, t
            }, grep: function (t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            }, map: function (t, e, i) {
                var o, r = 0, s = t.length, a = n(t), l = [];
                if (a)for (; s > r; r++)o = e(t[r], r, i), null != o && l.push(o); else for (r in t)o = e(t[r], r, i), null != o && l.push(o);
                return z.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var n, i, o;
                return "string" == typeof e && (n = t[e], e = t, t = n), J.isFunction(t) ? (i = B.call(arguments, 2), o = function () {
                        return t.apply(e || this, i.concat(B.call(arguments)))
                    }, o.guid = t.guid = t.guid || J.guid++, o) : void 0
            }, now: Date.now, support: Y
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            X["[object " + e + "]"] = e.toLowerCase()
        });
        var oe = function (t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, p, f, h, g;
                if ((e ? e.ownerDocument || e : F) !== L && A(e), e = e || L, n = n || [], !t || "string" != typeof t)return n;
                if (1 !== (a = e.nodeType) && 9 !== a)return [];
                if (O && !i) {
                    if (o = ye.exec(t))if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode)return n;
                            if (r.id === s)return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && q(e, r) && r.id === s)return n.push(r), n
                    } else {
                        if (o[2])return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = o[3]) && w.getElementsByClassName && e.getElementsByClassName)return J.apply(n, e.getElementsByClassName(s)), n
                    }
                    if (w.qsa && (!P || !P.test(t))) {
                        if (f = p = R, h = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = E(t), (p = e.getAttribute("id")) ? f = p.replace(xe, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;)c[l] = f + d(c[l]);
                            h = be.test(t) && u(e.parentNode) || e, g = c.join(",")
                        }
                        if (g)try {
                            return J.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {
                        } finally {
                            p || e.removeAttribute("id")
                        }
                    }
                }
                return $(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[R] = !0, t
            }

            function o(t) {
                var e = L.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)C.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && typeof t.getElementsByTagName !== X && t
            }

            function p() {
            }

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, r = _++;
                return e.first ? function (e, n, r) {
                        for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, r)
                    } : function (e, n, s) {
                        var a, l, c = [I, r];
                        if (s) {
                            for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, s))return !0
                        } else for (; e = e[i];)if (1 === e.nodeType || o) {
                            if (l = e[R] || (e[R] = {}), (a = l[i]) && a[0] === I && a[1] === r)return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s))return !0
                        }
                    }
            }

            function h(t) {
                return t.length > 1 ? function (e, n, i) {
                        for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                        return !0
                    } : t[0]
            }

            function g(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++)e(t, n[o], i);
                return i
            }

            function m(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                return s
            }

            function v(t, e, n, o, r, s) {
                return o && !o[R] && (o = v(o)), r && !r[R] && (r = v(r, s)), i(function (i, s, a, l) {
                    var c, u, p, d = [], f = [], h = s.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : m(v, d, t, a, l), b = n ? r || (i ? t : h || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)for (c = m(b, f), o(c, [], a, l), u = c.length; u--;)(p = c[u]) && (b[f[u]] = !(y[f[u]] = p));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(p = b[u]) && c.push(y[u] = p);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(p = b[u]) && (c = r ? ee.call(i, p) : d[u]) > -1 && (i[c] = !(s[c] = p))
                        }
                    } else b = m(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = C.relative[t[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = f(function (t) {
                    return t === e
                }, s, !0), c = f(function (t) {
                    return ee.call(e, t) > -1
                }, s, !0), u = [function (t, n, i) {
                    return !r && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                }]; o > a; a++)if (n = C.relative[t[a].type]) u = [f(h(u), n)]; else {
                    if (n = C.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                        for (i = ++a; o > i && !C.relative[t[i].type]; i++);
                        return v(a > 1 && h(u), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && d(t))
                    }
                    u.push(n)
                }
                return h(u)
            }

            function b(t, n) {
                var o = n.length > 0, r = t.length > 0, s = function (i, s, a, l, c) {
                    var u, p, d, f = 0, h = "0", g = i && [], v = [], y = D, b = i || r && C.find.TAG("*", c), x = I += null == y ? 1 : Math.random() || .1, w = b.length;
                    for (c && (D = s !== L && s); h !== w && null != (u = b[h]); h++) {
                        if (r && u) {
                            for (p = 0; d = t[p++];)if (d(u, s, a)) {
                                l.push(u);
                                break
                            }
                            c && (I = x)
                        }
                        o && ((u = !d && u) && f--, i && g.push(u))
                    }
                    if (f += h, o && h !== f) {
                        for (p = 0; d = n[p++];)d(g, v, s, a);
                        if (i) {
                            if (f > 0)for (; h--;)g[h] || v[h] || (v[h] = K.call(l));
                            v = m(v)
                        }
                        J.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (I = x, D = y), g
                };
                return o ? i(s) : s
            }

            var x, w, C, T, k, E, S, $, D, N, j, A, L, H, O, P, M, W, q, R = "sizzle" + -new Date, F = t.document, I = 0, _ = 0, B = n(), z = n(), U = n(), V = function (t, e) {
                return t === e && (j = !0), 0
            }, X = "undefined", Q = 1 << 31, Z = {}.hasOwnProperty, Y = [], K = Y.pop, G = Y.push, J = Y.push, te = Y.slice, ee = Y.indexOf || function (t) {
                    for (var e = 0, n = this.length; n > e; e++)if (this[e] === t)return e;
                    return -1
                }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = oe.replace("w", "w#"), se = "\\[" + ie + "*(" + oe + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ie + "*\\]", ae = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), ce = new RegExp("^" + ie + "*," + ie + "*"), ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), pe = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), de = new RegExp(ae), fe = new RegExp("^" + re + "$"), he = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), Ce = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
            try {
                J.apply(Y = te.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
            } catch (Te) {
                J = {
                    apply: Y.length ? function (t, e) {
                            G.apply(t, te.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                }
            }
            w = e.support = {}, k = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, A = e.setDocument = function (t) {
                var e, n = t ? t.ownerDocument || t : F, i = n.defaultView;
                return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, H = n.documentElement, O = !k(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                            A()
                        }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                            A()
                        })), w.attributes = o(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = o(function (t) {
                        return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && o(function (t) {
                            return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                        }), w.getById = o(function (t) {
                        return H.appendChild(t).id = R, !n.getElementsByName || !n.getElementsByName(R).length
                    }), w.getById ? (C.find.ID = function (t, e) {
                            if (typeof e.getElementById !== X && O) {
                                var n = e.getElementById(t);
                                return n && n.parentNode ? [n] : []
                            }
                        }, C.filter.ID = function (t) {
                            var e = t.replace(we, Ce);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete C.find.ID, C.filter.ID = function (t) {
                            var e = t.replace(we, Ce);
                            return function (t) {
                                var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }), C.find.TAG = w.getElementsByTagName ? function (t, e) {
                            return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                        } : function (t, e) {
                            var n, i = [], o = 0, r = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = r[o++];)1 === n.nodeType && i.push(n);
                                return i
                            }
                            return r
                        }, C.find.CLASS = w.getElementsByClassName && function (t, e) {
                            return typeof e.getElementsByClassName !== X && O ? e.getElementsByClassName(t) : void 0
                        }, M = [], P = [], (w.qsa = ve.test(n.querySelectorAll)) && (o(function (t) {
                        t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && P.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || P.push(":checked")
                    }), o(function (t) {
                        var e = n.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (w.matchesSelector = ve.test(W = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function (t) {
                        w.disconnectedMatch = W.call(t, "div"), W.call(t, "[s!='']:x"), M.push("!=", ae)
                    }), P = P.length && new RegExp(P.join("|")), M = M.length && new RegExp(M.join("|")), e = ve.test(H.compareDocumentPosition), q = e || ve.test(H.contains) ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function (t, e) {
                            if (e)for (; e = e.parentNode;)if (e === t)return !0;
                            return !1
                        }, V = e ? function (t, e) {
                            if (t === e)return j = !0, 0;
                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && q(F, t) ? -1 : e === n || e.ownerDocument === F && q(F, e) ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0 : 4 & i ? -1 : 1)
                        } : function (t, e) {
                            if (t === e)return j = !0, 0;
                            var i, o = 0, r = t.parentNode, a = e.parentNode, l = [t], c = [e];
                            if (!r || !a)return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0;
                            if (r === a)return s(t, e);
                            for (i = t; i = i.parentNode;)l.unshift(i);
                            for (i = e; i = i.parentNode;)c.unshift(i);
                            for (; l[o] === c[o];)o++;
                            return o ? s(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
                        }, n) : L
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== L && A(t), n = n.replace(pe, "='$1']"), !(!w.matchesSelector || !O || M && M.test(n) || P && P.test(n)))try {
                    var i = W.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (o) {
                }
                return e(n, L, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== L && A(t), q(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== L && A(t);
                var n = C.attrHandle[e.toLowerCase()], i = n && Z.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
                return void 0 !== i ? i : w.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (j = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(V), j) {
                    for (; e = t[o++];)e === t[o] && (i = n.push(o));
                    for (; i--;)t.splice(n[i], 1)
                }
                return N = null, t
            }, T = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += T(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[i++];)n += T(e);
                return n
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(we, Ce), t[3] = (t[3] || t[4] || t[5] || "").replace(we, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return he.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(we, Ce).toLowerCase();
                        return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                    }, CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && B(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var c, u, p, d, f, h, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (p = e; p = p[g];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                            h = g = "only" === t && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (u = m[R] || (m[R] = {}), c = u[t] || [], f = c[0] === I && c[1], d = c[0] === I && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (d = f = 0) || h.pop();)if (1 === p.nodeType && ++d && p === e) {
                                            u[t] = [I, f, d];
                                            break
                                        }
                                    } else if (y && (c = (e[R] || (e[R] = {}))[t]) && c[0] === I) d = c[1]; else for (; (p = ++f && p && p[g] || (d = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[R] || (p[R] = {}))[t] = [I, d]), p !== e)););
                                    return d -= o, d === i || d % i === 0 && d / i >= 0
                                }
                            }
                    }, PSEUDO: function (t, n) {
                        var o, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[R] ? r(n) : r.length > 1 ? (o = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                        for (var i, o = r(t, n), s = o.length; s--;)i = ee.call(t, o[s]), t[i] = !(e[i] = o[s])
                                    }) : function (t) {
                                        return r(t, 0, o)
                                    }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = S(t.replace(le, "$1"));
                        return o[R] ? i(function (t, e, n, i) {
                                for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function (t, i, r) {
                                return e[0] = t, o(e, null, r, n), !n.pop()
                            }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, Ce).toLowerCase(), function (e) {
                            var n;
                            do if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === H
                    }, focus: function (t) {
                        return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !C.pseudos.empty(t)
                    }, header: function (t) {
                        return me.test(t.nodeName)
                    }, input: function (t) {
                        return ge.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2)t.push(n);
                        return t
                    }), odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2)t.push(n);
                        return t
                    }), lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[x] = a(x);
            for (x in{submit: !0, reset: !0})C.pseudos[x] = l(x);
            return p.prototype = C.filters = C.pseudos, C.setFilters = new p, E = e.tokenize = function (t, n) {
                var i, o, r, s, a, l, c, u = z[t + " "];
                if (u)return n ? 0 : u.slice(0);
                for (a = t, l = [], c = C.preFilter; a;) {
                    (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (s in C.filter)!(o = he[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, S = e.compile = function (t, e) {
                var n, i = [], o = [], r = U[t + " "];
                if (!r) {
                    for (e || (e = E(t)), n = e.length; n--;)r = y(e[n]), r[R] ? i.push(r) : o.push(r);
                    r = U(t, b(o, i)), r.selector = t
                }
                return r
            }, $ = e.select = function (t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t, p = !i && E(t = c.selector || t);
                if (n = n || [], 1 === p.length) {
                    if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && O && C.relative[r[1].type]) {
                        if (e = (C.find.ID(s.matches[0].replace(we, Ce), e) || [])[0], !e)return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)if ((l = C.find[a]) && (i = l(s.matches[0].replace(we, Ce), be.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && d(r), !t)return J.apply(n, i), n;
                        break
                    }
                }
                return (c || S(t, p))(i, e, !O, n, be.test(t) && u(e.parentNode) || e), n
            }, w.sortStable = R.split("").sort(V).join("") === R, w.detectDuplicates = !!j, A(), w.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(L.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(ne, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        J.find = oe, J.expr = oe.selectors, J.expr[":"] = J.expr.pseudos, J.unique = oe.uniqueSort, J.text = oe.getText, J.isXMLDoc = oe.isXML, J.contains = oe.contains;
        var re = J.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
        J.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? J.find.matchesSelector(i, t) ? [i] : [] : J.find.matches(t, J.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
        }, J.fn.extend({
            find: function (t) {
                var e, n = this.length, i = [], o = this;
                if ("string" != typeof t)return this.pushStack(J(t).filter(function () {
                    for (e = 0; n > e; e++)if (J.contains(o[e], this))return !0
                }));
                for (e = 0; n > e; e++)J.find(t, o[e], i);
                return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            }, filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            }, is: function (t) {
                return !!i(this, "string" == typeof t && re.test(t) ? J(t) : t || [], !1).length
            }
        });
        var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = J.fn.init = function (t, e) {
            var n, i;
            if (!t)return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : K, !0)), se.test(n[1]) && J.isPlainObject(e))for (n in e)J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        };
        ue.prototype = J.fn, le = J(K);
        var pe = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
        J.extend({
            dir: function (t, e, n) {
                for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                    if (o && J(t).is(n))break;
                    i.push(t)
                }
                return i
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), J.fn.extend({
            has: function (t) {
                var e = J(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; n > t; t++)if (J.contains(this, e[t]))return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, o = this.length, r = [], s = re.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, t))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? J.unique(r) : r)
            }, index: function (t) {
                return t ? "string" == typeof t ? V.call(J(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), J.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return J.dir(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return J.dir(t, "parentNode", n)
            }, next: function (t) {
                return o(t, "nextSibling")
            }, prev: function (t) {
                return o(t, "previousSibling")
            }, nextAll: function (t) {
                return J.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return J.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return J.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return J.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return J.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return J.sibling(t.firstChild)
            }, contents: function (t) {
                return t.contentDocument || J.merge([], t.childNodes)
            }
        }, function (t, e) {
            J.fn[t] = function (n, i) {
                var o = J.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = J.filter(i, o)), this.length > 1 && (de[t] || J.unique(o), pe.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var fe = /\S+/g, he = {};
        J.Callbacks = function (t) {
            t = "string" == typeof t ? he[t] || r(t) : J.extend({}, t);
            var e, n, i, o, s, a, l = [], c = !t.once && [], u = function (r) {
                for (e = t.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0; l && s > a; a++)if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                    e = !1;
                    break
                }
                i = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : p.disable())
            }, p = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        !function r(e) {
                            J.each(e, function (e, n) {
                                var i = J.type(n);
                                "function" === i ? t.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), i ? s = l.length : e && (o = n, u(e))
                    }
                    return this
                }, remove: function () {
                    return l && J.each(arguments, function (t, e) {
                        for (var n; (n = J.inArray(e, l, n)) > -1;)l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                }, has: function (t) {
                    return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], s = 0, this
                }, disable: function () {
                    return l = c = e = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, e || p.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, e) {
                    return !l || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : u(e)), this
                }, fire: function () {
                    return p.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return p
        }, J.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return J.Deferred(function (n) {
                            J.each(e, function (e, r) {
                                var s = J.isFunction(t[e]) && t[e];
                                o[r[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? J.extend(t, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, J.each(e, function (t, r) {
                    var s = r[2], a = r[3];
                    i[r[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e, n, i, o = 0, r = B.call(arguments), s = r.length, a = 1 !== s || t && J.isFunction(t.promise) ? s : 0, l = 1 === a ? t : J.Deferred(), c = function (t, n, i) {
                    return function (o) {
                        n[t] = this, i[t] = arguments.length > 1 ? B.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)r[o] && J.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var ge;
        J.fn.ready = function (t) {
            return J.ready.promise().done(t), this
        }, J.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? J.readyWait++ : J.ready(!0)
            }, ready: function (t) {
                (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (ge.resolveWith(K, [J]), J.fn.triggerHandler && (J(K).triggerHandler("ready"), J(K).off("ready"))))
            }
        }), J.ready.promise = function (e) {
            return ge || (ge = J.Deferred(), "complete" === K.readyState ? setTimeout(J.ready) : (K.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ge.promise(e)
        }, J.ready.promise();
        var me = J.access = function (t, e, n, i, o, r, s) {
            var a = 0, l = t.length, c = null == n;
            if ("object" === J.type(n)) {
                o = !0;
                for (a in n)J.access(t, e, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, J.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                        return c.call(J(t), n)
                    })), e))for (; l > a; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        };
        J.acceptData = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
            key: function (t) {
                if (!a.accepts(t))return 0;
                var e = {}, n = t[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        e[this.expando] = {value: n}, Object.defineProperties(t, e)
                    } catch (i) {
                        e[this.expando] = n, J.extend(t, e)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            }, set: function (t, e, n) {
                var i, o = this.key(t), r = this.cache[o];
                if ("string" == typeof e) r[e] = n; else if (J.isEmptyObject(r)) J.extend(this.cache[o], e); else for (i in e)r[i] = e[i];
                return r
            }, get: function (t, e) {
                var n = this.cache[this.key(t)];
                return void 0 === e ? n : n[e]
            }, access: function (t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, J.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, i, o, r = this.key(t), s = this.cache[r];
                if (void 0 === e) this.cache[r] = {}; else {
                    J.isArray(e) ? i = e.concat(e.map(J.camelCase)) : (o = J.camelCase(e), e in s ? i = [e, o] : (i = o, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
                    for (; n--;)delete s[i[n]]
                }
            }, hasData: function (t) {
                return !J.isEmptyObject(this.cache[t[this.expando]] || {})
            }, discard: function (t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var ve = new a, ye = new a, be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, xe = /([A-Z])/g;
        J.extend({
            hasData: function (t) {
                return ye.hasData(t) || ve.hasData(t)
            }, data: function (t, e, n) {
                return ye.access(t, e, n)
            }, removeData: function (t, e) {
                ye.remove(t, e)
            }, _data: function (t, e, n) {
                return ve.access(t, e, n)
            }, _removeData: function (t, e) {
                ve.remove(t, e)
            }
        }), J.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = ye.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(r, i, o[i])));
                        ve.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                        ye.set(this, t)
                    }) : me(this, function (e) {
                        var n, i = J.camelCase(t);
                        if (r && void 0 === e) {
                            if (n = ye.get(r, t), void 0 !== n)return n;
                            if (n = ye.get(r, i), void 0 !== n)return n;
                            if (n = l(r, i, void 0), void 0 !== n)return n
                        } else this.each(function () {
                            var n = ye.get(this, i);
                            ye.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    ye.remove(this, t)
                })
            }
        }), J.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || J.isArray(n) ? i = ve.access(t, e, J.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = J.queue(t, e), i = n.length, o = n.shift(), r = J._queueHooks(t, e), s = function () {
                    J.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ve.get(t, n) || ve.access(t, n, {
                        empty: J.Callbacks("once memory").add(function () {
                            ve.remove(t, [e + "queue", n])
                        })
                    })
            }
        }), J.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? J.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                            var n = J.queue(this, t, e);
                            J._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && J.dequeue(this, t)
                        })
            }, dequeue: function (t) {
                return this.each(function () {
                    J.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, o = J.Deferred(), r = this, s = this.length, a = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = ve.get(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ce = ["Top", "Right", "Bottom", "Left"], Te = function (t, e) {
            return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        }, ke = /^(?:checkbox|radio)$/i;
        !function () {
            var t = K.createDocumentFragment(), e = t.appendChild(K.createElement("div")), n = K.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ee = "undefined";
        Y.focusinBubbles = "onfocusin" in t;
        var Se = /^key/, $e = /^(?:mouse|pointer|contextmenu)|click/, De = /^(?:focusinfocus|focusoutblur)$/, Ne = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var r, s, a, l, c, u, p, d, f, h, g, m = ve.get(t);
                if (m)for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = J.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                    return typeof J !== Ee && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(fe) || [""], c = e.length; c--;)a = Ne.exec(e[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (p = J.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = J.event.special[f] || {}, u = J.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(t, i, h, s) !== !1 || t.addEventListener && t.addEventListener(f, s, !1)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), J.event.global[f] = !0)
            },
            remove: function (t, e, n, i, o) {
                var r, s, a, l, c, u, p, d, f, h, g, m = ve.hasData(t) && ve.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(fe) || [""], c = e.length; c--;)if (a = Ne.exec(e[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (p = J.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;)u = d[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(t, u));
                        s && !d.length && (p.teardown && p.teardown.call(t, h, m.handle) !== !1 || J.removeEvent(t, f, m.handle), delete l[f])
                    } else for (f in l)J.event.remove(t, f + e[c], n, i, !0);
                    J.isEmptyObject(l) && (delete m.handle, ve.remove(t, "events"))
                }
            },
            trigger: function (e, n, i, o) {
                var r, s, a, l, c, u, p, d = [i || K], f = Z.call(e, "type") ? e.type : e, h = Z.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : J.makeArray(n, [e]), p = J.event.special[f] || {}, o || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                    if (!o && !p.noBubble && !J.isWindow(i)) {
                        for (l = p.delegateType || f, De.test(l + f) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                        a === (i.ownerDocument || K) && d.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0; (s = d[r++]) && !e.isPropagationStopped();)e.type = r > 1 ? l : p.bindType || f, u = (ve.get(s, "events") || {})[e.type] && ve.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && J.acceptData(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                    return e.type = f, o || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !J.acceptData(i) || c && J.isFunction(i[f]) && !J.isWindow(i) && (a = i[c], a && (i[c] = null), J.event.triggered = f, i[f](), J.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            },
            dispatch: function (t) {
                t = J.event.fix(t);
                var e, n, i, o, r, s = [], a = B.call(arguments), l = (ve.get(this, "events") || {})[t.type] || [], c = J.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = J.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((J.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== t.type) {
                    for (i = [], n = 0; a > n; n++)r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [l]).length), i[o] && i.push(r);
                    i.length && s.push({elem: l, handlers: i})
                }
                return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, o, r = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || K, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            fix: function (t) {
                if (t[J.expando])return t;
                var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = $e.test(o) ? this.mouseHooks : Se.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(r), e = i.length; e--;)n = i[e], t[n] = r[n];
                return t.target || (t.target = K), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        return this !== p() && this.focus ? (this.focus(), !1) : void 0
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    }, _default: function (t) {
                        return J.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var o = J.extend(new J.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? J.event.trigger(o, null, e) : J.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, J.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        }, J.Event = function (t, e) {
            return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
        }, J.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            J.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return (!o || o !== i && !J.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), Y.focusinBubbles || J.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                J.event.simulate(e, t.target, J.event.fix(t), !0)
            };
            J.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = ve.access(i, e);
                    o || i.addEventListener(t, n, !0), ve.access(i, e, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = ve.access(i, e) - 1;
                    o ? ve.access(i, e, o) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
                }
            }
        }), J.fn.extend({
            on: function (t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (s in t)this.on(s, e, n, t[s], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = u; else if (!i)return this;
                return 1 === o && (r = i, i = function (t) {
                    return J().off(t), r.apply(this, arguments)
                }, i.guid = r.guid || (r.guid = J.guid++)), this.each(function () {
                    J.event.add(this, t, i, n, e)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj)return i = t.handleObj, J(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t)this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = u), this.each(function () {
                    J.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    J.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                return n ? J.event.trigger(t, e, n, !0) : void 0
            }
        });
        var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ae = /<([\w:]+)/, Le = /<|&#?\w+;/, He = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Pe = /^$|\/(?:java|ecma)script/i, Me = /^true\/(.*)/, We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, J.extend({
            clone: function (t, e, n) {
                var i, o, r, s, a = t.cloneNode(!0), l = J.contains(t.ownerDocument, t);
                if (!(Y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))for (s = v(a), r = v(t), i = 0, o = r.length; o > i; i++)y(r[i], s[i]);
                if (e)if (n)for (r = r || v(t), s = s || v(a), i = 0, o = r.length; o > i; i++)m(r[i], s[i]); else m(t, a);
                return s = v(a, "script"), s.length > 0 && g(s, !l && v(t, "script")), a
            }, buildFragment: function (t, e, n, i) {
                for (var o, r, s, a, l, c, u = e.createDocumentFragment(), p = [], d = 0, f = t.length; f > d; d++)if (o = t[d], o || 0 === o)if ("object" === J.type(o)) J.merge(p, o.nodeType ? [o] : o); else if (Le.test(o)) {
                    for (r = r || u.appendChild(e.createElement("div")), s = (Ae.exec(o) || ["", ""])[1].toLowerCase(), a = qe[s] || qe._default, r.innerHTML = a[1] + o.replace(je, "<$1></$2>") + a[2], c = a[0]; c--;)r = r.lastChild;
                    J.merge(p, r.childNodes), r = u.firstChild, r.textContent = ""
                } else p.push(e.createTextNode(o));
                for (u.textContent = "", d = 0; o = p[d++];)if ((!i || -1 === J.inArray(o, i)) && (l = J.contains(o.ownerDocument, o), r = v(u.appendChild(o), "script"), l && g(r), n))for (c = 0; o = r[c++];)Pe.test(o.type || "") && n.push(o);
                return u
            }, cleanData: function (t) {
                for (var e, n, i, o, r = J.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                    if (J.acceptData(n) && (o = n[ve.expando], o && (e = ve.cache[o]))) {
                        if (e.events)for (i in e.events)r[i] ? J.event.remove(n, i) : J.removeEvent(n, i, e.handle);
                        ve.cache[o] && delete ve.cache[o]
                    }
                    delete ye.cache[n[ye.expando]]
                }
            }
        }), J.fn.extend({
            text: function (t) {
                return me(this, function (t) {
                    return void 0 === t ? J.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                        })
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? J.filter(t, this) : this, o = 0; null != (n = i[o]); o++)e || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (e && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                    return J.clone(this, t, e)
                })
            }, html: function (t) {
                return me(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                    if ("string" == typeof t && !He.test(t) && !qe[(Ae.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(je, "<$1></$2>");
                        try {
                            for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = z.apply([], t);
                var n, i, o, r, s, a, l = 0, c = this.length, u = this, p = c - 1, d = t[0], g = J.isFunction(d);
                if (g || c > 1 && "string" == typeof d && !Y.checkClone && Oe.test(d))return this.each(function (n) {
                    var i = u.eq(n);
                    g && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (n = J.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (o = J.map(v(n, "script"), f), r = o.length; c > l; l++)s = n, l !== p && (s = J.clone(s, !0, !0), r && J.merge(o, v(s, "script"))), e.call(this[l], s, l);
                    if (r)for (a = o[o.length - 1].ownerDocument, J.map(o, h), l = 0; r > l; l++)s = o[l], Pe.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(We, "")))
                }
                return this
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            J.fn[t] = function (t) {
                for (var n, i = [], o = J(t), r = o.length - 1, s = 0; r >= s; s++)n = s === r ? this : this.clone(!0), J(o[s])[e](n), U.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Re, Fe = {}, Ie = /^margin/, _e = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), Be = function (t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        };
        !function () {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
                var e = t.getComputedStyle(s, null);
                n = "1%" !== e.top, i = "4px" === e.width, o.removeChild(r)
            }

            var n, i, o = K.documentElement, r = K.createElement("div"), s = K.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), t.getComputedStyle && J.extend(Y, {
                pixelPosition: function () {
                    return e(), n
                }, boxSizingReliable: function () {
                    return null == i && e(), i
                }, reliableMarginRight: function () {
                    var e, n = s.appendChild(K.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(r), e
                }
            }))
        }(), J.swap = function (t, e, n, i) {
            var o, r, s = {};
            for (r in e)s[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e)t.style[r] = s[r];
            return o
        };
        var ze = /^(none|table(?!-c[ea]).+)/, Ue = new RegExp("^(" + we + ")(.*)$", "i"), Ve = new RegExp("^([+-])=(" + we + ")", "i"), Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Qe = {letterSpacing: "0", fontWeight: "400"}, Ze = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = w(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": "cssFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = J.camelCase(e), l = t.style;
                    return e = J.cssProps[a] || (J.cssProps[a] = T(l, a)), s = J.cssHooks[e] || J.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = Ve.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(J.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || J.cssNumber[a] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n)), void 0)
                }
            },
            css: function (t, e, n, i) {
                var o, r, s, a = J.camelCase(e);
                return e = J.cssProps[a] || (J.cssProps[a] = T(t.style, a)), s = J.cssHooks[e] || J.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = w(t, e, i)), "normal" === o && e in Qe && (o = Qe[e]), "" === n || n ? (r = parseFloat(o), n === !0 || J.isNumeric(r) ? r || 0 : o) : o
            }
        }), J.each(["height", "width"], function (t, e) {
            J.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? ze.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Xe, function () {
                                return S(t, e, i)
                            }) : S(t, e, i) : void 0
                }, set: function (t, n, i) {
                    var o = i && Be(t);
                    return k(t, n, i ? E(t, e, i, "border-box" === J.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), J.cssHooks.marginRight = C(Y.reliableMarginRight, function (t, e) {
            return e ? J.swap(t, {display: "inline-block"}, w, [t, "marginRight"]) : void 0
        }), J.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            J.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[t + Ce[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Ie.test(t) || (J.cssHooks[t + e].set = k)
        }), J.fn.extend({
            css: function (t, e) {
                return me(this, function (t, e, n) {
                    var i, o, r = {}, s = 0;
                    if (J.isArray(e)) {
                        for (i = Be(t), o = e.length; o > s; s++)r[e[s]] = J.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? J.style(t, e, n) : J.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return $(this, !0)
            }, hide: function () {
                return $(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        Te(this) ? J(this).show() : J(this).hide()
                    })
            }
        }), J.Tween = D, D.prototype = {
            constructor: D, init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (J.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = D.propHooks[this.prop];
                return t && t.get ? t.get(this) : D.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = D.propHooks[this.prop];
                return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, J.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, J.fx = D.prototype.init, J.fx.step = {};
        var Ye, Ke, Ge = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), tn = /queueHooks$/, en = [L], nn = {
            "*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), o = Je.exec(e), r = o && o[3] || (J.cssNumber[t] ? "" : "px"), s = (J.cssNumber[t] || "px" !== r && +i) && Je.exec(J.css(n.elem, t)), a = 1, l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, J.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
        J.Animation = J.extend(O, {
            tweener: function (t, e) {
                J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++)n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? en.unshift(t) : en.push(t)
            }
        }), J.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? J.extend({}, t) : {
                    complete: n || !n && e || J.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !J.isFunction(e) && e
                };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Te).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = J.isEmptyObject(t), r = J.speed(e, n, i), s = function () {
                    var e = O(this, J.extend({}, t), r);
                    (o || ve.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, o = null != t && t + "queueHooks", r = J.timers, s = ve.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && tn.test(o) && i(s[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    (e || !n) && J.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = ve.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = J.timers, s = i ? i.length : 0;
                    for (n.finish = !0, J.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function (t, e) {
            var n = J.fn[e];
            J.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, o)
            }
        }), J.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            J.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), J.timers = [], J.fx.tick = function () {
            var t, e = 0, n = J.timers;
            for (Ye = J.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || J.fx.stop(), Ye = void 0
        }, J.fx.timer = function (t) {
            J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function () {
            Ke || (Ke = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function () {
            clearInterval(Ke), Ke = null
        }, J.fx.speeds = {slow: 600, fast: 200, _default: 400}, J.fn.delay = function (t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var t = K.createElement("input"), e = K.createElement("select"), n = e.appendChild(K.createElement("option"));
            t.type = "checkbox", Y.checkOn = "" !== t.value, Y.optSelected = n.selected, e.disabled = !0, Y.optDisabled = !n.disabled, t = K.createElement("input"), t.value = "t", t.type = "radio", Y.radioValue = "t" === t.value
        }();
        var on, rn, sn = J.expr.attrHandle;
        J.fn.extend({
            attr: function (t, e) {
                return me(this, J.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    J.removeAttr(this, t)
                })
            }
        }), J.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r)return typeof t.getAttribute === Ee ? J.prop(t, e, n) : (1 === r && J.isXMLDoc(t) || (e = e.toLowerCase(), i = J.attrHooks[e] || (J.expr.match.bool.test(e) ? rn : on)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = J.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void J.removeAttr(t, e))
            }, removeAttr: function (t, e) {
                var n, i, o = 0, r = e && e.match(fe);
                if (r && 1 === t.nodeType)for (; n = r[o++];)i = J.propFix[n] || n, J.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!Y.radioValue && "radio" === e && J.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), rn = {
            set: function (t, e, n) {
                return e === !1 ? J.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = sn[e] || J.find.attr;
            sn[e] = function (t, e, i) {
                var o, r;
                return i || (r = sn[e], sn[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, sn[e] = r), o
            }
        });
        var an = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({
            prop: function (t, e) {
                return me(this, J.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[J.propFix[t] || t]
                })
            }
        }), J.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                var i, o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s)return r = 1 !== s || !J.isXMLDoc(t), r && (e = J.propFix[e] || e, o = J.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (J.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            J.propFix[this.toLowerCase()] = this
        });
        var ln = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, s, a = "string" == typeof t && t, l = 0, c = this.length;
                if (J.isFunction(t))return this.each(function (e) {
                    J(this).addClass(t.call(this, e, this.className))
                });
                if (a)for (e = (t || "").match(fe) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                    for (r = 0; o = e[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    s = J.trim(i), n.className !== s && (n.className = s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, c = this.length;
                if (J.isFunction(t))return this.each(function (e) {
                    J(this).removeClass(t.call(this, e, this.className))
                });
                if (a)for (e = (t || "").match(fe) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                    for (r = 0; o = e[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    s = t ? J.trim(i) : "", n.className !== s && (n.className = s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function (n) {
                            J(this).toggleClass(t.call(this, n, this.className, e), e)
                        } : function () {
                            if ("string" === n)for (var e, i = 0, o = J(this), r = t.match(fe) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else(n === Ee || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
                        })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(e) >= 0)return !0;
                return !1
            }
        });
        var cn = /\r/g;
        J.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                {
                    if (arguments.length)return i = J.isFunction(t), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, J(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function (t) {
                                    return null == t ? "" : t + ""
                                })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o)return e = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)
                }
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = J.find.attr(t, "value");
                        return null != e ? e : J.trim(J.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== o || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (e = J(n).val(), r)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = J.makeArray(e), s = o.length; s--;)i = o[s], (i.selected = J.inArray(i.value, r) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function () {
            J.valHooks[this] = {
                set: function (t, e) {
                    return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
                }
            }, Y.checkOn || (J.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            J.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), J.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var un = J.now(), pn = /\?/;
        J.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, J.parseXML = function (t) {
            var e, n;
            if (!t || "string" != typeof t)return null;
            try {
                n = new DOMParser, e = n.parseFromString(t, "text/xml")
            } catch (i) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e
        };
        var dn, fn, hn = /#.*$/, gn = /([?&])_=[^&]*/, mn = /^(.*?):[ \t]*([^\r\n]*)$/gm, vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, yn = /^(?:GET|HEAD)$/, bn = /^\/\//, xn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, wn = {}, Cn = {}, Tn = "*/".concat("*");
        try {
            fn = location.href
        } catch (kn) {
            fn = K.createElement("a"), fn.href = "", fn = fn.href
        }
        dn = xn.exec(fn.toLowerCase()) || [], J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: fn,
                type: "GET",
                isLocal: vn.test(dn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Tn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? W(W(t, J.ajaxSettings), e) : W(J.ajaxSettings, t)
            },
            ajaxPrefilter: P(wn),
            ajaxTransport: P(Cn),
            ajax: function (t, e) {
                function n(t, e, n, s) {
                    var l, u, v, y, x, C = e;
                    2 !== b && (b = 2, a && clearTimeout(a), i = void 0, r = s || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = q(p, w, n)), y = R(p, y, w, l), l ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (J.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (J.etag[o] = x)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, l = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || C) + "", l ? h.resolveWith(d, [u, C, w]) : h.rejectWith(d, [w, C, v]), w.statusCode(m), m = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? u : v]), g.fireWith(d, [w, C]), c && (f.trigger("ajaxComplete", [w, p]), --J.active || J.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, s, a, l, c, u, p = J.ajaxSetup({}, e), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? J(d) : J.event, h = J.Deferred(), g = J.Callbacks("once memory"), m = p.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!s)for (s = {}; e = mn.exec(r);)s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (2 > b)for (e in t)m[e] = [m[e], t[e]]; else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || x;
                        return i && i.abort(e), n(0, e), this
                    }
                };
                if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || fn) + "").replace(hn, "").replace(bn, dn[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = J.trim(p.dataType || "*").toLowerCase().match(fe) || [""], null == p.crossDomain && (l = xn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === dn[1] && l[2] === dn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (dn[3] || ("http:" === dn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), M(wn, p, e, w), 2 === b)return w;
                c = p.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !yn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (pn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = gn.test(o) ? o.replace(gn, "$1_=" + un++) : o + (pn.test(o) ? "&" : "?") + "_=" + un++)), p.ifModified && (J.lastModified[o] && w.setRequestHeader("If-Modified-Since", J.lastModified[o]), J.etag[o] && w.setRequestHeader("If-None-Match", J.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Tn + "; q=0.01" : "") : p.accepts["*"]);
                for (u in p.headers)w.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === b))return w.abort();
                x = "abort";
                for (u in{success: 1, error: 1, complete: 1})w[u](p[u]);
                if (i = M(Cn, p, e, w)) {
                    w.readyState = 1, c && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (a = setTimeout(function () {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, i.send(v, n)
                    } catch (C) {
                        if (!(2 > b))throw C;
                        n(-1, C)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function (t, e, n) {
                return J.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return J.get(t, void 0, e, "script")
            }
        }), J.each(["get", "post"], function (t, e) {
            J[e] = function (t, n, i, o) {
                return J.isFunction(n) && (o = o || i, i = n, n = void 0), J.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            J.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), J._evalUrl = function (t) {
            return J.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, J.fn.extend({
            wrapAll: function (t) {
                var e;
                return J.isFunction(t) ? this.each(function (e) {
                        J(this).wrapAll(t.call(this, e))
                    }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                        return t
                    }).append(this)), this)
            }, wrapInner: function (t) {
                return this.each(J.isFunction(t) ? function (e) {
                        J(this).wrapInner(t.call(this, e))
                    } : function () {
                        var e = J(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
            }, wrap: function (t) {
                var e = J.isFunction(t);
                return this.each(function (n) {
                    J(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, J.expr.filters.visible = function (t) {
            return !J.expr.filters.hidden(t)
        };
        var En = /%20/g, Sn = /\[\]$/, $n = /\r?\n/g, Dn = /^(?:submit|button|image|reset|file)$/i, Nn = /^(?:input|select|textarea|keygen)/i;
        J.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t)F(n, t[n], e, o);
            return i.join("&").replace(En, "+")
        }, J.fn.extend({
            serialize: function () {
                return J.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = J.prop(this, "elements");
                    return t ? J.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !J(this).is(":disabled") && Nn.test(this.nodeName) && !Dn.test(t) && (this.checked || !ke.test(t))
                }).map(function (t, e) {
                    var n = J(this).val();
                    return null == n ? null : J.isArray(n) ? J.map(n, function (t) {
                                return {name: e.name, value: t.replace($n, "\r\n")}
                            }) : {name: e.name, value: n.replace($n, "\r\n")}
                }).get()
            }
        }), J.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (t) {
            }
        };
        var jn = 0, An = {}, Ln = {0: 200, 1223: 204}, Hn = J.ajaxSettings.xhr();
        t.ActiveXObject && J(t).on("unload", function () {
            for (var t in An)An[t]()
        }), Y.cors = !!Hn && "withCredentials" in Hn, Y.ajax = Hn = !!Hn, J.ajaxTransport(function (t) {
            var e;
            return Y.cors || Hn && !t.crossDomain ? {
                    send: function (n, i) {
                        var o, r = t.xhr(), s = ++jn;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n)r.setRequestHeader(o, n[o]);
                        e = function (t) {
                            return function () {
                                e && (delete An[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(Ln[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {text: r.responseText} : void 0, r.getAllResponseHeaders()))
                            }
                        }, r.onload = e(), r.onerror = e("error"), e = An[s] = e("abort");
                        try {
                            r.send(t.hasContent && t.data || null)
                        } catch (a) {
                            if (e)throw a
                        }
                    }, abort: function () {
                        e && e()
                    }
                } : void 0
        }), J.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return J.globalEval(t), t
                }
            }
        }), J.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), J.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, o) {
                        e = J("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), K.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var On = [], Pn = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = On.pop() || J.expando + "_" + un++;
                return this[t] = !0, t
            }
        }), J.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (Pn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pn.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Pn, "$1" + o) : e.jsonp !== !1 && (e.url += (pn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                    return s || J.error(o + " was not called"), s[0]
                }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
                    s = arguments
                }, i.always(function () {
                    t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, On.push(o)), s && J.isFunction(r) && r(s[0]), s = r = void 0
                }), "script") : void 0
        }), J.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || K;
            var i = se.exec(t), o = !n && [];
            return i ? [e.createElement(i[1])] : (i = J.buildFragment([t], e, o), o && o.length && J(o).remove(), J.merge([], i.childNodes))
        };
        var Mn = J.fn.load;
        J.fn.load = function (t, e, n) {
            if ("string" != typeof t && Mn)return Mn.apply(this, arguments);
            var i, o, r, s = this, a = t.indexOf(" ");
            return a >= 0 && (i = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && J.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function (t) {
                r = arguments, s.html(i ? J("<div>").append(J.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                    s.each(n, r || [t.responseText, e, t])
                }), this
        }, J.expr.filters.animated = function (t) {
            return J.grep(J.timers, function (e) {
                return t === e.elem
            }).length
        };
        var Wn = t.document.documentElement;
        J.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, s, a, l, c, u = J.css(t, "position"), p = J(t), d = {};
                "static" === u && (t.style.position = "relative"), a = p.offset(), r = J.css(t, "top"), l = J.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = p.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : p.css(d)
            }
        }, J.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                        J.offset.setOffset(this, t, e)
                    });
                var e, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
                if (r)return e = r.documentElement, J.contains(e, i) ? (typeof i.getBoundingClientRect !== Ee && (o = i.getBoundingClientRect()), n = I(r), {
                        top: o.top + n.pageYOffset - e.clientTop,
                        left: o.left + n.pageXOffset - e.clientLeft
                    }) : o
            }, position: function () {
                if (this[0]) {
                    var t, e, n = this[0], i = {top: 0, left: 0};
                    return "fixed" === J.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (i = t.offset()), i.top += J.css(t[0], "borderTopWidth", !0), i.left += J.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - J.css(n, "marginTop", !0),
                        left: e.left - i.left - J.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || Wn; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");)t = t.offsetParent;
                    return t || Wn
                })
            }
        }), J.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
            var i = "pageYOffset" === n;
            J.fn[e] = function (o) {
                return me(this, function (e, o, r) {
                    var s = I(e);
                    return void 0 === r ? s ? s[n] : e[o] : void(s ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset) : e[o] = r)
                }, e, o, arguments.length, null)
            }
        }), J.each(["top", "left"], function (t, e) {
            J.cssHooks[e] = C(Y.pixelPosition, function (t, n) {
                return n ? (n = w(t, e), _e.test(n) ? J(t).position()[e] + "px" : n) : void 0
            })
        }), J.each({Height: "height", Width: "width"}, function (t, e) {
            J.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                J.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return me(this, function (e, n, i) {
                        var o;
                        return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? J.css(e, n, s) : J.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), J.fn.size = function () {
            return this.length
        }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return J
        });
        var qn = t.jQuery, Rn = t.$;
        return J.noConflict = function (e) {
            return t.$ === J && (t.$ = Rn), e && t.jQuery === J && (t.jQuery = qn), J
        }, typeof e === Ee && (t.jQuery = t.$ = J), J
    }), function (t, e, n, i) {
        "use strict";
        var o = n("html"), r = n(t), s = n(e), a = n.fancybox = function () {
            a.open.apply(this, arguments)
        }, l = navigator.userAgent.match(/msie/i), c = null, u = e.createTouch !== i, p = function (t) {
            return t && t.hasOwnProperty && t instanceof n
        }, d = function (t) {
            return t && "string" === n.type(t)
        }, f = function (t) {
            return d(t) && t.indexOf("%") > 0
        }, h = function (t) {
            return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
        }, g = function (t, e) {
            var n = parseInt(t, 10) || 0;
            return e && f(t) && (n = a.getViewport()[e] / 100 * n), Math.ceil(n)
        }, m = function (t, e) {
            return g(t, e) + "px"
        };
        n.extend(a, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !u,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
                iframe: {scrolling: "auto", preload: !0},
                swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
                keys: {
                    next: {13: "left", 34: "up", 39: "left", 40: "up"},
                    prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {next: "left", prev: "right"},
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {overlay: !0, title: !0},
                onCancel: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeChange: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {timer: null, isActive: !1},
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function (t, e) {
                return t && (n.isPlainObject(e) || (e = {}), !1 !== a.close(!0)) ? (n.isArray(t) || (t = p(t) ? n(t).get() : [t]), n.each(t, function (o, r) {
                        var s, l, c, u, f, h, g, m = {};
                        "object" === n.type(r) && (r.nodeType && (r = n(r)), p(r) ? (m = {
                                href: r.data("fancybox-href") || r.attr("href"),
                                title: r.data("fancybox-title") || r.attr("title"),
                                isDom: !0,
                                element: r
                            }, n.metadata && n.extend(!0, m, r.metadata())) : m = r), s = e.href || m.href || (d(r) ? r : null), l = e.title !== i ? e.title : m.title || "", c = e.content || m.content, u = c ? "html" : e.type || m.type, !u && m.isDom && (u = r.data("fancybox-type"), u || (f = r.prop("class").match(/fancybox\.(\w+)/), u = f ? f[1] : null)), d(s) && (u || (a.isImage(s) ? u = "image" : a.isSWF(s) ? u = "swf" : "#" === s.charAt(0) ? u = "inline" : d(r) && (u = "html", c = r)), "ajax" === u && (h = s.split(/\s+/, 2), s = h.shift(), g = h.shift())), c || ("inline" === u ? s ? c = n(d(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : m.isDom && (c = r) : "html" === u ? c = s : u || s || !m.isDom || (u = "inline", c = r)), n.extend(m, {
                            href: s,
                            type: u,
                            content: c,
                            title: l,
                            selector: g
                        }), t[o] = m
                    }), a.opts = n.extend(!0, {}, a.defaults, e), e.keys !== i && (a.opts.keys = e.keys ? n.extend({}, a.defaults.keys, e.keys) : !1), a.group = t, a._start(a.opts.index)) : void 0
            },
            cancel: function () {
                var t = a.coming;
                t && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(t))
            },
            close: function (t) {
                a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && t !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
            },
            play: function (t) {
                var e = function () {
                    clearTimeout(a.player.timer)
                }, n = function () {
                    e(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                }, i = function () {
                    e(), s.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
                }, o = function () {
                    a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, s.bind({
                        "onCancel.player beforeClose.player": i,
                        "onUpdate.player": n,
                        "beforeLoad.player": e
                    }), n(), a.trigger("onPlayStart"))
                };
                t === !0 || !a.player.isActive && t !== !1 ? o() : i()
            },
            next: function (t) {
                var e = a.current;
                e && (d(t) || (t = e.direction.next), a.jumpto(e.index + 1, t, "next"))
            },
            prev: function (t) {
                var e = a.current;
                e && (d(t) || (t = e.direction.prev), a.jumpto(e.index - 1, t, "prev"))
            },
            jumpto: function (t, e, n) {
                var o = a.current;
                o && (t = g(t), a.direction = e || o.direction[t >= o.index ? "next" : "prev"], a.router = n || "jumpto", o.loop && (0 > t && (t = o.group.length + t % o.group.length), t %= o.group.length), o.group[t] !== i && (a.cancel(), a._start(t)))
            },
            reposition: function (t, e) {
                var i, o = a.current, r = o ? o.wrap : null;
                r && (i = a._getPosition(e), t && "scroll" === t.type ? (delete i.position, r.stop(!0, !0).animate(i, 200)) : (r.css(i), o.pos = n.extend({}, o.dim, i)))
            },
            update: function (t) {
                var e = t && t.type, n = !e || "orientationchange" === e;
                n && (clearTimeout(c), c = null), a.isOpen && !c && (c = setTimeout(function () {
                    var i = a.current;
                    i && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === e || "resize" === e && i.autoResize) && a._setDimension(), "scroll" === e && i.canShrink || a.reposition(t), a.trigger("onUpdate"), c = null)
                }, n && !u ? 0 : 300))
            },
            toggle: function (t) {
                a.isOpen && (a.current.fitToView = "boolean" === n.type(t) ? t : !a.current.fitToView, u && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
            },
            hideLoading: function () {
                s.unbind(".loading"), n("#fancybox-loading").remove()
            },
            showLoading: function () {
                var t, e;
                a.hideLoading(), t = n('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), s.bind("keydown.loading", function (t) {
                    27 === (t.which || t.keyCode) && (t.preventDefault(), a.cancel())
                }), a.defaults.fixed || (e = a.getViewport(), t.css({
                    position: "absolute",
                    top: .5 * e.h + e.y,
                    left: .5 * e.w + e.x
                }))
            },
            getViewport: function () {
                var e = a.current && a.current.locked || !1, n = {x: r.scrollLeft(), y: r.scrollTop()};
                return e ? (n.w = e[0].clientWidth, n.h = e[0].clientHeight) : (n.w = u && t.innerWidth ? t.innerWidth : r.width(), n.h = u && t.innerHeight ? t.innerHeight : r.height()), n
            },
            unbindEvents: function () {
                a.wrap && p(a.wrap) && a.wrap.unbind(".fb"), s.unbind(".fb"), r.unbind(".fb")
            },
            bindEvents: function () {
                var t, e = a.current;
                e && (r.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), a.update), t = e.keys, t && s.bind("keydown.fb", function (o) {
                    var r = o.which || o.keyCode, s = o.target || o.srcElement;
                    return 27 === r && a.coming ? !1 : void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || s && (s.type || n(s).is("[contenteditable]")) || n.each(t, function (t, s) {
                            return e.group.length > 1 && s[r] !== i ? (a[t](s[r]), o.preventDefault(), !1) : n.inArray(r, s) > -1 ? (a[t](), o.preventDefault(), !1) : void 0
                        }))
                }), n.fn.mousewheel && e.mouseWheel && a.wrap.bind("mousewheel.fb", function (t, i, o, r) {
                    for (var s = t.target || null, l = n(s), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));)c = h(l[0]), l = n(l).parent();
                    0 === i || c || a.group.length > 1 && !e.canShrink && (r > 0 || o > 0 ? a.prev(r > 0 ? "down" : "left") : (0 > r || 0 > o) && a.next(0 > r ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function (t, e) {
                var i, o = e || a.coming || a.current;
                if (o) {
                    if (n.isFunction(o[t]) && (i = o[t].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1)return !1;
                    o.helpers && n.each(o.helpers, function (e, i) {
                        i && a.helpers[e] && n.isFunction(a.helpers[e][t]) && a.helpers[e][t](n.extend(!0, {}, a.helpers[e].defaults, i), o)
                    }), s.trigger(t)
                }
            },
            isImage: function (t) {
                return d(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function (t) {
                return d(t) && t.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function (t) {
                var e, i, o, r, s, l = {};
                if (t = g(t), e = a.group[t] || null, !e)return !1;
                if (l = n.extend(!0, {}, a.opts, e), r = l.margin, s = l.padding, "number" === n.type(r) && (l.margin = [r, r, r, r]), "number" === n.type(s) && (l.padding = [s, s, s, s]), l.modal && n.extend(!0, l, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {overlay: {closeClick: !1}}
                    }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = t, a.coming = l, !1 === a.trigger("beforeLoad"))return void(a.coming = null);
                if (o = l.type, i = l.href, !o)return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = t, a[a.router](a.direction)) : !1;
                if (a.isActive = !0, ("image" === o || "swf" === o) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && u && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
                        skin: n(".fancybox-skin", l.wrap),
                        outer: n(".fancybox-outer", l.wrap),
                        inner: n(".fancybox-inner", l.wrap)
                    }), n.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
                        l.skin.css("padding" + e, m(l.padding[t]))
                    }), a.trigger("onReady"), "inline" === o || "html" === o) {
                    if (!l.content || !l.content.length)return a._error("content")
                } else if (!i)return a._error("href");
                "image" === o ? a._loadImage() : "ajax" === o ? a._loadAjax() : "iframe" === o ? a._loadIframe() : a._afterLoad()
            },
            _error: function (t) {
                n.extend(a.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: t,
                    content: a.coming.tpl.error
                }), a._afterLoad()
            },
            _loadImage: function () {
                var t = a.imgPreload = new Image;
                t.onload = function () {
                    this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
                }, t.onerror = function () {
                    this.onload = this.onerror = null, a._error("image")
                }, t.src = a.coming.href, t.complete !== !0 && a.showLoading()
            },
            _loadAjax: function () {
                var t = a.coming;
                a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, t.ajax, {
                    url: t.href, error: function (t, e) {
                        a.coming && "abort" !== e ? a._error("ajax", t) : a.hideLoading()
                    }, success: function (e, n) {
                        "success" === n && (t.content = e, a._afterLoad())
                    }
                }))
            },
            _loadIframe: function () {
                var t = a.coming, e = n(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : t.iframe.scrolling).attr("src", t.href);
                n(t.wrap).bind("onReset", function () {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (t) {
                    }
                }), t.iframe.preload && (a.showLoading(), e.one("load", function () {
                    n(this).data("ready", 1), u || n(this).bind("load.fb", a.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
                })), t.content = e.appendTo(t.inner), t.iframe.preload || a._afterLoad()
            },
            _preloadImages: function () {
                var t, e, n = a.group, i = a.current, o = n.length, r = i.preload ? Math.min(i.preload, o - 1) : 0;
                for (e = 1; r >= e; e += 1)t = n[(i.index + e) % o], "image" === t.type && t.href && ((new Image).src = t.href)
            },
            _afterLoad: function () {
                var t, e, i, o, r, s, l = a.coming, c = a.current, u = "fancybox-placeholder";
                if (a.hideLoading(), l && a.isActive !== !1) {
                    if (!1 === a.trigger("afterLoad", l, c))return l.wrap.stop(!0).trigger("onReset").remove(), void(a.coming = null);
                    switch (c && (a.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), t = l, e = l.content, i = l.type, o = l.scrolling, n.extend(a, {
                        wrap: t.wrap,
                        skin: t.skin,
                        outer: t.outer,
                        inner: t.inner,
                        current: t,
                        previous: c
                    }), r = t.href, i) {
                        case"inline":
                        case"ajax":
                        case"html":
                            t.selector ? e = n("<div>").html(e).find(t.selector) : p(e) && (e.data(u) || e.data(u, n('<div class="' + u + '"></div>').insertAfter(e).hide()), e = e.show().detach(), t.wrap.bind("onReset", function () {
                                    n(this).find(e).length && e.hide().replaceAll(e.data(u)).data(u, !1)
                                }));
                            break;
                        case"image":
                            e = t.tpl.image.replace("{href}", r);
                            break;
                        case"swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', s = "", n.each(t.swf, function (t, n) {
                                e += '<param name="' + t + '" value="' + n + '"></param>', s += " " + t + '="' + n + '"'
                            }), e += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
                    }
                    p(e) && e.parent().is(t.inner) || t.inner.append(e), a.trigger("beforeShow"), t.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? c.prevMethod && a.transitions[c.prevMethod]() : n(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? t.nextMethod : t.openMethod](), a._preloadImages()
                }
            },
            _setDimension: function () {
                var t, e, i, o, r, s, l, c, u, p, d, h, v, y, b, x = a.getViewport(), w = 0, C = !1, T = !1, k = a.wrap, E = a.skin, S = a.inner, $ = a.current, D = $.width, N = $.height, j = $.minWidth, A = $.minHeight, L = $.maxWidth, H = $.maxHeight, O = $.scrolling, P = $.scrollOutside ? $.scrollbarWidth : 0, M = $.margin, W = g(M[1] + M[3]), q = g(M[0] + M[2]);
                if (k.add(E).add(S).width("auto").height("auto").removeClass("fancybox-tmp"), t = g(E.outerWidth(!0) - E.width()), e = g(E.outerHeight(!0) - E.height()), i = W + t, o = q + e, r = f(D) ? (x.w - i) * g(D) / 100 : D, s = f(N) ? (x.h - o) * g(N) / 100 : N, "iframe" === $.type) {
                    if (y = $.content, $.autoHeight && 1 === y.data("ready"))try {
                        y[0].contentWindow.document.location && (S.width(r).height(9999), b = y.contents().find("body"), P && b.css("overflow-x", "hidden"), s = b.outerHeight(!0))
                    } catch (R) {
                    }
                } else($.autoWidth || $.autoHeight) && (S.addClass("fancybox-tmp"), $.autoWidth || S.width(r), $.autoHeight || S.height(s), $.autoWidth && (r = S.width()), $.autoHeight && (s = S.height()), S.removeClass("fancybox-tmp"));
                if (D = g(r), N = g(s), u = r / s, j = g(f(j) ? g(j, "w") - i : j), L = g(f(L) ? g(L, "w") - i : L), A = g(f(A) ? g(A, "h") - o : A), H = g(f(H) ? g(H, "h") - o : H), l = L, c = H, $.fitToView && (L = Math.min(x.w - i, L), H = Math.min(x.h - o, H)), h = x.w - W, v = x.h - q, $.aspectRatio ? (D > L && (D = L, N = g(D / u)), N > H && (N = H, D = g(N * u)), j > D && (D = j, N = g(D / u)), A > N && (N = A, D = g(N * u))) : (D = Math.max(j, Math.min(D, L)), $.autoHeight && "iframe" !== $.type && (S.width(D), N = S.height()), N = Math.max(A, Math.min(N, H))), $.fitToView)if (S.width(D).height(N), k.width(D + t), p = k.width(), d = k.height(), $.aspectRatio)for (; (p > h || d > v) && D > j && N > A && !(w++ > 19);)N = Math.max(A, Math.min(H, N - 10)), D = g(N * u), j > D && (D = j, N = g(D / u)), D > L && (D = L, N = g(D / u)), S.width(D).height(N), k.width(D + t), p = k.width(), d = k.height(); else D = Math.max(j, Math.min(D, D - (p - h))), N = Math.max(A, Math.min(N, N - (d - v)));
                P && "auto" === O && s > N && h > D + t + P && (D += P), S.width(D).height(N), k.width(D + t), p = k.width(), d = k.height(), C = (p > h || d > v) && D > j && N > A, T = $.aspectRatio ? l > D && c > N && r > D && s > N : (l > D || c > N) && (r > D || s > N), n.extend($, {
                    dim: {
                        width: m(p),
                        height: m(d)
                    },
                    origWidth: r,
                    origHeight: s,
                    canShrink: C,
                    canExpand: T,
                    wPadding: t,
                    hPadding: e,
                    wrapSpace: d - E.outerHeight(!0),
                    skinSpace: E.height() - N
                }), !y && $.autoHeight && N > A && H > N && !T && S.height("auto")
            },
            _getPosition: function (t) {
                var e = a.current, n = a.getViewport(), i = e.margin, o = a.wrap.width() + i[1] + i[3], r = a.wrap.height() + i[0] + i[2], s = {
                    position: "absolute",
                    top: i[0],
                    left: i[3]
                };
                return e.autoCenter && e.fixed && !t && r <= n.h && o <= n.w ? s.position = "fixed" : e.locked || (s.top += n.y, s.left += n.x), s.top = m(Math.max(s.top, s.top + (n.h - r) * e.topRatio)), s.left = m(Math.max(s.left, s.left + (n.w - o) * e.leftRatio)), s
            },
            _afterZoomIn: function () {
                var t = a.current;
                t && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (t.closeClick || t.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function (e) {
                    n(e.target).is("a") || n(e.target).parent().is("a") || (e.preventDefault(), a[t.closeClick ? "close" : "next"]())
                }), t.closeBtn && n(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function (t) {
                    t.preventDefault(), a.close()
                }), t.arrows && a.group.length > 1 && ((t.loop || t.index > 0) && n(t.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (t.loop || t.index < a.group.length - 1) && n(t.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
            },
            _afterZoomOut: function (t) {
                t = t || a.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(a, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), a.trigger("afterClose", t)
            }
        }), a.transitions = {
            getOrigPosition: function () {
                var t = a.current, e = t.element, n = t.orig, i = {}, o = 50, r = 50, s = t.hPadding, l = t.wPadding, c = a.getViewport();
                return !n && t.isDom && e.is(":visible") && (n = e.find("img:first"), n.length || (n = e)), p(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), r = n.outerHeight())) : (i.top = c.y + (c.h - r) * t.topRatio, i.left = c.x + (c.w - o) * t.leftRatio), ("fixed" === a.wrap.css("position") || t.locked) && (i.top -= c.y, i.left -= c.x), i = {
                    top: m(i.top - s * t.topRatio),
                    left: m(i.left - l * t.leftRatio),
                    width: m(o + l),
                    height: m(r + s)
                }
            }, step: function (t, e) {
                var n, i, o, r = e.prop, s = a.current, l = s.wrapSpace, c = s.skinSpace;
                ("width" === r || "height" === r) && (n = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), a.isClosing && (n = 1 - n), i = "width" === r ? s.wPadding : s.hPadding, o = t - i, a.skin[r](g("width" === r ? o : o - l * n)), a.inner[r](g("width" === r ? o : o - l * n - c * n)))
            }, zoomIn: function () {
                var t = a.current, e = t.pos, i = t.openEffect, o = "elastic" === i, r = n.extend({opacity: 1}, e);
                delete r.position, o ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), a.wrap.css(e).animate(r, {
                    duration: "none" === i ? 0 : t.openSpeed,
                    easing: t.openEasing,
                    step: o ? this.step : null,
                    complete: a._afterZoomIn
                })
            }, zoomOut: function () {
                var t = a.current, e = t.closeEffect, n = "elastic" === e, i = {opacity: .1};
                n && (i = this.getOrigPosition(), t.closeOpacity && (i.opacity = .1)), a.wrap.animate(i, {
                    duration: "none" === e ? 0 : t.closeSpeed,
                    easing: t.closeEasing,
                    step: n ? this.step : null,
                    complete: a._afterZoomOut
                })
            }, changeIn: function () {
                var t, e = a.current, n = e.nextEffect, i = e.pos, o = {opacity: 1}, r = a.direction, s = 200;
                i.opacity = .1, "elastic" === n && (t = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (i[t] = m(g(i[t]) - s), o[t] = "+=" + s + "px") : (i[t] = m(g(i[t]) + s), o[t] = "-=" + s + "px")), "none" === n ? a._afterZoomIn() : a.wrap.css(i).animate(o, {
                        duration: e.nextSpeed,
                        easing: e.nextEasing,
                        complete: a._afterZoomIn
                    })
            }, changeOut: function () {
                var t = a.previous, e = t.prevEffect, i = {opacity: .1}, o = a.direction, r = 200;
                "elastic" === e && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + r + "px"), t.wrap.animate(i, {
                    duration: "none" === e ? 0 : t.prevSpeed,
                    easing: t.prevEasing,
                    complete: function () {
                        n(this).trigger("onReset").remove()
                    }
                })
            }
        }, a.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !u,
                fixed: !0
            }, overlay: null, fixed: !1, el: n("html"), create: function (t) {
                t = n.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : t.parent), this.fixed = !1, t.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            }, open: function (t) {
                var e = this;
                t = n.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (r.bind("resize.overlay", n.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function (t) {
                    return n(t.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : e.close(), !1) : void 0
                }), this.overlay.css(t.css).show()
            }, close: function () {
                var t, e;
                r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), t = r.scrollTop(), e = r.scrollLeft(), this.el.removeClass("fancybox-lock"), r.scrollTop(t).scrollLeft(e)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            }, update: function () {
                var t, n = "100%";
                this.overlay.width(n).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), s.width() > t && (n = s.width())) : s.width() > r.width() && (n = s.width()), this.overlay.width(n).height(s.height())
            }, onReady: function (t, e) {
                var i = this.overlay;
                n(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (i || (this.margin = s.height() > r.height() ? n("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
            }, beforeShow: function (t, e) {
                var i, o;
                e.locked && (this.margin !== !1 && (n("*").filter(function () {
                    return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = r.scrollTop(), o = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(i).scrollLeft(o)), this.open(t)
            }, onUpdate: function () {
                this.fixed || this.update()
            }, afterClose: function (t) {
                this.overlay && !a.coming && this.overlay.fadeOut(t.speedOut, n.proxy(this.close, this))
            }
        }, a.helpers.title = {
            defaults: {type: "float", position: "bottom"}, beforeShow: function (t) {
                var e, i, o = a.current, r = o.title, s = t.type;
                if (n.isFunction(r) && (r = r.call(o.element, o)), d(r) && "" !== n.trim(r)) {
                    switch (e = n('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + r + "</div>"), s) {
                        case"inside":
                            i = a.skin;
                            break;
                        case"outside":
                            i = a.wrap;
                            break;
                        case"over":
                            i = a.inner;
                            break;
                        default:
                            i = a.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(g(e.css("margin-bottom")))
                    }
                    e["top" === t.position ? "prependTo" : "appendTo"](i)
                }
            }
        }, n.fn.fancybox = function (t) {
            var e, i = n(this), o = this.selector || "", r = function (r) {
                var s, l, c = n(this).blur(), u = e;
                r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || c.is(".fancybox-wrap") || (s = t.groupAttr || "data-fancybox-group", l = c.attr(s), l || (s = "rel", l = c.get(0)[s]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + s + '="' + l + '"]'), u = c.index(this)), t.index = u, a.open(c, t) !== !1 && r.preventDefault())
            };
            return t = t || {}, e = t.index || 0, o && t.live !== !1 ? s.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : i.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, s.ready(function () {
            var e, r;
            n.scrollbarWidth === i && (n.scrollbarWidth = function () {
                var t = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), e = t.children(), i = e.innerWidth() - e.height(99).innerWidth();
                return t.remove(), i
            }), n.support.fixedPosition === i && (n.support.fixedPosition = function () {
                var t = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"), e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                return t.remove(), e
            }()), n.extend(a.defaults, {
                scrollbarWidth: n.scrollbarWidth(),
                fixed: n.support.fixedPosition,
                parent: n("body")
            }), e = n(t).width(), o.addClass("fancybox-lock-test"), r = n(t).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (r - e) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery), function () {
        var t, e, n, i, o, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = [].indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
                return -1
            };
        e = function () {
            function t() {
            }

            return t.prototype.extend = function (t, e) {
                var n, i;
                for (n in e)i = e[n], null == t[n] && (t[n] = i);
                return t
            }, t.prototype.isMobile = function (t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.addEvent = function (t, e, n) {
                return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
            }, t.prototype.removeEvent = function (t, e, n) {
                return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
            }, t.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
                function t() {
                    this.keys = [], this.values = []
                }

                return t.prototype.get = function (t) {
                    var e, n, i, o, r;
                    for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i)if (n = r[e], n === t)return this.values[e]
                }, t.prototype.set = function (t, e) {
                    var n, i, o, r, s;
                    for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)if (i = s[n], i === t)return void(this.values[n] = e);
                    return this.keys.push(t), this.values.push(e)
                }, t
            }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
                function t() {
                    "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                }

                return t.notSupported = !0, t.prototype.observe = function () {
                }, t
            }()), i = this.getComputedStyle || function (t) {
                return this.getPropertyValue = function (e) {
                    var n;
                    return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function (t, e) {
                        return e.toUpperCase()
                    }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
                }, this
            }, o = /(\-([a-z]){1})/g, this.WOW = function () {
            function o(t) {
                null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n
            }

            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0
            }, o.prototype.init = function () {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function () {
                var e, n, i, o;
                if (this.stopped = !1, this.boxes = function () {
                        var t, n, i, o;
                        for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++)e = i[t], o.push(e);
                        return o
                    }.call(this), this.all = function () {
                        var t, n, i, o;
                        for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++)e = i[t], o.push(e);
                        return o
                    }.call(this), this.boxes.length)if (this.disabled()) this.resetStyle(); else {
                    for (o = this.boxes, n = 0, i = o.length; i > n; n++)e = o[n], this.applyStyle(e, !0);
                    this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)
                }
                return this.config.live ? new t(function (t) {
                        return function (e) {
                            var n, i, o, r, s;
                            for (s = [], o = 0, r = e.length; r > o; o++)i = e[o], s.push(function () {
                                var t, e, o, r;
                                for (o = i.addedNodes || [], r = [], t = 0, e = o.length; e > t; t++)n = o[t], r.push(this.doSync(n));
                                return r
                            }.call(t));
                            return s
                        }
                    }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
            }, o.prototype.stop = function () {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, o.prototype.sync = function () {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, o.prototype.doSync = function (t) {
                var e, n, i, o, r;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++)e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                    return r
                }
            }, o.prototype.show = function (t) {
                return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
            }, o.prototype.applyStyle = function (t, e) {
                var n, i, o;
                return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function (r) {
                    return function () {
                        return r.customStyle(t, e, i, n, o)
                    }
                }(this))
            }, o.prototype.animate = function () {
                return "requestAnimationFrame" in window ? function (t) {
                        return window.requestAnimationFrame(t)
                    } : function (t) {
                        return t()
                    }
            }(), o.prototype.resetStyle = function () {
                var t, e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(t.style.visibility = "visible");
                return o
            }, o.prototype.customStyle = function (t, e, n, i, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), o && this.vendorSet(t.style, {animationIterationCount: o}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function (t, e) {
                var n, i, o, r;
                r = [];
                for (n in e)i = e[n], t["" + n] = i, r.push(function () {
                    var e, r, s, a;
                    for (s = this.vendors, a = [], e = 0, r = s.length; r > e; e++)o = s[e], a.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = i);
                    return a
                }.call(this));
                return r
            }, o.prototype.vendorCSS = function (t, e) {
                var n, o, r, s, a, l;
                for (o = i(t), n = o.getPropertyCSSValue(e), l = this.vendors, s = 0, a = l.length; a > s; s++)r = l[s], n = n || o.getPropertyCSSValue("-" + r + "-" + e);
                return n
            }, o.prototype.animationName = function (t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (n) {
                    e = i(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, o.prototype.cacheAnimationName = function (t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, o.prototype.cachedAnimationName = function (t) {
                return this.animationNameCache.get(t)
            }, o.prototype.scrollHandler = function () {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function () {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                    var e, n, i, o;
                    for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, o.prototype.offsetTop = function (t) {
                for (var e; void 0 === t.offsetTop;)t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;)e += t.offsetTop;
                return e
            }, o.prototype.isVisible = function (t) {
                var e, n, i, o, r;
                return n = t.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
            }, o.prototype.util = function () {
                return null != this._util ? this._util : this._util = new e
            }, o.prototype.disabled = function () {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.2.0", i.prototype.close = function (e) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }

        var i = t(this), o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(o);
        e && e.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.button"), r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), i[o](null == r[e] ? this.options[e] : r[e]), setTimeout(t.proxy(function () {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.carousel"), r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, n.prototype.keydown = function (t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function (e) {
        var n = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    n.to(e)
                }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, n) {
        var i = this.$element.find(".item.active"), o = n || i[e](), r = this.interval, s = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this;
        if (!o.length) {
            if (!this.options.wrap)return;
            o = this.$element.find(".item")[a]()
        }
        if (o.hasClass("active"))return this.sliding = !1;
        var c = o[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: s});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(o)]);
                p && p.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {relatedTarget: c, direction: s});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                    o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(d)
                    }, 0)
                }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (n) {
        var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()), a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    }), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.collapse"), r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && r.toggle && "show" == e && (e = !e), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning)return;
                    e.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var s = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition)return s.call(this);
                var a = t.camelCase(["scroll", r].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[r](this.$element[0][a])
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var i, o = t(this), r = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""), s = t(r), a = s.data("bs.collapse"), l = a ? "toggle" : o.data(), c = o.attr("data-parent"), u = c && t(c);
        a && a.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + c + '"]').not(o).addClass("collapsed"), o[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(s, l)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(r).each(function () {
            var i = n(t(this)), o = {relatedTarget: this};
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.2.0", s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = n(o), s = r.hasClass("open");
            if (e(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {relatedTarget: this};
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                o.trigger("focus"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function (e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i), s = o.hasClass("open");
                if (!s || s && 27 == e.keyCode)return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.divider):visible a", l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var c = l.index(l.filter(":focus"));
                    38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var o = t(this), r = o.data("bs.modal"), s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var n = this, i = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                    n.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var n = this, i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r()
        } else e && e()
    }, n.prototype.checkScrollbar = function () {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), o = i.attr("href"), r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), s = r.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tooltip"), r = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n)return;
            var i = this, o = this.tip(), r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, a = /\s?auto?\s?/i, l = a.test(s);
            l && (s = s.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var c = this.getPosition(), u = o[0].offsetWidth, p = o[0].offsetHeight;
            if (l) {
                var d = s, f = this.$element.parent(), h = this.getPosition(f);
                s = "bottom" == s && c.top + c.height + p - h.scroll > h.height ? "top" : "top" == s && c.top - h.scroll - p < 0 ? "bottom" : "right" == s && c.right + u > h.width ? "left" : "left" == s && c.left - u < h.left ? "right" : s, o.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, u, p);
            this.applyPlacement(g, s);
            var m = function () {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(150) : m()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var p = u.left ? 2 * u.left - o + l : 2 * u.top - r + c, d = u.left ? "left" : "top", f = u.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][f], d)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function () {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }

        var n = this, i = this.tip(), o = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {top: 0, left: 0} : e.offset())
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                    top: e.top - i,
                    left: e.left + e.width / 2 - n / 2
                } : "left" == t ? {
                        top: e.top + e.height / 2 - i / 2,
                        left: e.left - n
                    } : {top: e.top + e.height / 2 - i / 2, left: e.left + e.width}
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)return o;
        var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll, l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r, u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.width && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.popover"), r = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover%20requires%20tooltip.html");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        var o = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }

    e.VERSION = "3.2.0", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = "offset", n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function () {
            var i = t(this), o = i.data("target") || i.attr("href"), r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[e]().top + n, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e <= o[0])return s != (t = r[0]) && this.activate(t);
        for (t = o.length; t--;)s != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.2.0", n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")[0], r = t.Event("show.bs.tab", {relatedTarget: o});
            if (e.trigger(r), !r.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
                    e.trigger({type: "shown.bs.tab", relatedTarget: o})
                })
            }
        }
    }, n.prototype.activate = function (e, n, i) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }

        var r = n.find("> .active"), s = i && t.support.transition && r.hasClass("fade");
        s ? r.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.affix"), r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = t(document).height(), i = this.$target.scrollTop(), o = this.$element.offset(), r = this.options.offset, s = r.top, a = r.bottom;
            "object" != typeof r && (a = s = r), "function" == typeof s && (s = r.top(this.$element)), "function" == typeof a && (a = r.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != a && o.top + this.$element.height() >= e - a ? "bottom" : null != s && s >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var c = "affix" + (l ? "-" + l : ""), u = t.Event(c + ".bs.affix");
                this.$element.trigger(u), u.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(c).trigger(t.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({top: e - this.$element.height() - a}))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), function () {
    window.onload = function () {
        function t(t) {
            var e, n = $(t);
            $(n).click(function (t) {
                t.preventDefault();
                var n = $(this);
                e = n.attr("href"), $("html, body").animate({scrollTop: $(e).offset().top - 50}, 1e3)
            })
        }

        console.log("load"), $(".navbar").show(), $(".loader").hide(), t(".navbar-nav li a"), (new WOW).init(), $(".carousel").carousel(), $(".fancybox").fancybox({
            openEffect: "none",
            closeEffect: "none"
        });
        var e = new Stimer;
        e.init(["2017", "12", "30"], ".scount", function () {
            alert("Акция закончилась!")
        })
    }
}();