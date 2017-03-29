window.Modernizr = function (e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function o(e, t) {
        return r(S.join(e + ";") + (t || ""))
    }

    function a(e, t) {
        return typeof e === t
    }

    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!i(o, "-") && b[o] !== n)return "pfx" == t ? o : !0
        }
        return !1
    }

    function s(e, t, r) {
        for (var o in e) {
            var i = t[e[o]];
            if (i !== n)return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i
        }
        return !1
    }

    function u(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + k.join(r + " ") + r).split(" ");
        return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
    }

    function l() {
        p.input = function (n) {
            for (var r = 0, o = n.length; o > r; r++)j[n[r]] = !!(n[r] in E);
            return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), j
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (e) {
            for (var r, o, a, i = 0, c = e.length; c > i; i++)E.setAttribute("type", o = e[i]), r = "text" !== E.type, r && (E.value = x, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), a = t.defaultView, r = a.getComputedStyle && "textfield" !== a.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), P[e[i]] = !!r;
            return P
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var d, f, m = "2.8.3", p = {}, h = !0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, E = t.createElement("input"), x = ":)", w = {}.toString, S = " -webkit- -moz- -o- -ms- ".split(" "), C = "Webkit Moz O ms", k = C.split(" "), T = C.toLowerCase().split(" "), N = {svg: "http://www.w3.org/2000/svg"}, M = {}, P = {}, j = {}, $ = [], D = $.slice, F = function (e, n, r, o) {
        var a, i, c, s, u = t.createElement("div"), l = t.body, d = l || t.createElement("body");
        if (parseInt(r, 10))for (; r--;)c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
        return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = s), !!i
    }, z = function (t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)return n(t) && n(t).matches || !1;
        var r;
        return F("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
            r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }), r
    }, A = function () {
        function e(e, o) {
            o = o || t.createElement(r[e] || "div"), e = "on" + e;
            var i = e in o;
            return i || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), i = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, i
        }

        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), L = {}.hasOwnProperty;
    f = a(L, "undefined") || a(L.call, "undefined") ? function (e, t) {
        return t in e && a(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return L.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t)throw new TypeError;
        var n = D.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var o = function () {
                };
                o.prototype = t.prototype;
                var a = new o, i = t.apply(a, n.concat(D.call(arguments)));
                return Object(i) === i ? i : a
            }
            return t.apply(e, n.concat(D.call(arguments)))
        };
        return r
    }), M.flexbox = function () {
        return u("flexWrap")
    }, M.flexboxlegacy = function () {
        return u("boxDirection")
    }, M.canvas = function () {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, M.canvastext = function () {
        return !(!p.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, M.webgl = function () {
        return !!e.WebGLRenderingContext
    }, M.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, M.geolocation = function () {
        return "geolocation" in navigator
    }, M.postmessage = function () {
        return !!e.postMessage
    }, M.websqldatabase = function () {
        return !!e.openDatabase
    }, M.indexedDB = function () {
        return !!u("indexedDB", e)
    }, M.hashchange = function () {
        return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, M.history = function () {
        return !(!e.history || !history.pushState)
    }, M.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, M.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, M.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), i(b.backgroundColor, "rgba")
    }, M.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla")
    }, M.multiplebgs = function () {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, M.backgroundsize = function () {
        return u("backgroundSize")
    }, M.borderimage = function () {
        return u("borderImage")
    }, M.borderradius = function () {
        return u("borderRadius")
    }, M.boxshadow = function () {
        return u("boxShadow")
    }, M.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, M.opacity = function () {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, M.cssanimations = function () {
        return u("animationName")
    }, M.csscolumns = function () {
        return u("columnCount")
    }, M.cssgradients = function () {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), i(b.backgroundImage, "gradient")
    }, M.cssreflections = function () {
        return u("boxReflect")
    }, M.csstransforms = function () {
        return !!u("transform")
    }, M.csstransforms3d = function () {
        var e = !!u("perspective");
        return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, M.csstransitions = function () {
        return u("transition")
    }, M.fontface = function () {
        var e;
        return F('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
            var o = t.getElementById("smodernizr"), a = o.sheet || o.styleSheet, i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
            e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
        }), e
    }, M.generatedcontent = function () {
        var e;
        return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, M.video = function () {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, M.audio = function () {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, M.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, M.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, M.webworkers = function () {
        return !!e.Worker
    }, M.applicationcache = function () {
        return !!e.applicationCache
    }, M.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
    }, M.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }, M.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
    }, M.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var H in M)f(M, H) && (d = H.toLowerCase(), p[d] = M[H](), $.push((p[d] ? "" : "no-") + d));
    return p.input || l(), p.addTest = function (e, t) {
        if ("object" == typeof e)for (var r in e)f(e, r) && p.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), p[e] !== n)return p;
            t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t
        }
        return p
    }, r(""), y = E = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e) {
            var t = v[e[h]];
            return t || (t = {}, g++, e[h] = g, v[g] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), l)return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function i(e, n) {
            if (e || (e = t), l)return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++)a.createElement(c[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return y.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
        }

        function s(e) {
            e || (e = t);
            var r = o(e);
            return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || c(e, r), e
        }

        var u, l, d = "3.7.0", f = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", g = 0, v = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
            } catch (n) {
                u = !0, l = !0
            }
        }();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: l,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: s,
            createElement: a,
            createDocumentFragment: i
        };
        e.html5 = y, s(t)
    }(this, t), p._version = m, p._prefixes = S, p._domPrefixes = T, p._cssomPrefixes = k, p.mq = z, p.hasEvent = A, p.testProp = function (e) {
        return c([e])
    }, p.testAllProps = u, p.testStyles = F, p.prefixed = function (e, t, n) {
        return t ? u(e, t, n) : u(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""), p
}(this, this.document);
!function (e) {
    "use strict";
    e.matchMedia = e.matchMedia || function (e) {
            var t, n = e.documentElement, a = n.firstElementChild || n.firstChild, r = e.createElement("body"), s = e.createElement("div");
            console.log("11111111", t);
            return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(s), function (e) {
                return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(r, a), t = 42 === s.offsetWidth, n.removeChild(r), {
                    matches: t,
                    media: e
                }
            }
        }(e.document)
}(this), function (e) {
    "use strict";
    function t() {
        w(!0)
    }

    var n = {};
    e.respond = n, n.update = function () {
    };
    var a = [], r = function () {
        var t = !1;
        try {
            t = new e.XMLHttpRequest
        } catch (n) {
            t = new e.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function () {
            return t
        }
    }(), s = function (e, t) {
        var n = r();
        n && (n.open("GET", e, !0), n.onreadystatechange = function () {
            4 !== n.readyState || 200 !== n.status && 304 !== n.status || t(n.responseText)
        }, 4 !== n.readyState && n.send(null))
    }, i = function (e) {
        return e.replace(n.regex.minmaxwh, "").match(n.regex.other)
    };
    if (n.ajax = s, n.queue = a, n.unsupportedmq = i, n.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
            comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
            maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
            minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
            other: /\([^\)]*\)/g
        }, n.mediaQueriesSupported = e.matchMedia && null !== e.matchMedia("only all") && e.matchMedia("only all").matches, !n.mediaQueriesSupported) {
        var o, l, m, d = e.document, h = d.documentElement, u = [], c = [], f = [], p = {}, g = 30, y = d.getElementsByTagName("head")[0] || h, x = d.getElementsByTagName("base")[0], v = y.getElementsByTagName("link"), E = function () {
            var e, t = d.createElement("div"), n = d.body, a = h.style.fontSize, r = n && n.style.fontSize, s = !1;
            return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = s = d.createElement("body"), n.style.background = "none"), h.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), s && h.insertBefore(n, h.firstChild), e = t.offsetWidth, s ? h.removeChild(n) : n.removeChild(t), h.style.fontSize = a, r && (n.style.fontSize = r), e = m = parseFloat(e)
        }, w = function (t) {
            var n = "clientWidth", a = h[n], r = "CSS1Compat" === d.compatMode && a || d.body[n] || a, s = {}, i = v[v.length - 1], p = (new Date).getTime();
            if (t && o && g > p - o)return e.clearTimeout(l), void(l = e.setTimeout(w, g));
            o = p;
            for (var x in u)if (u.hasOwnProperty(x)) {
                var S = u[x], T = S.minw, C = S.maxw, b = null === T, $ = null === C, z = "em";
                T && (T = parseFloat(T) * (T.indexOf(z) > -1 ? m || E() : 1)), C && (C = parseFloat(C) * (C.indexOf(z) > -1 ? m || E() : 1)), S.hasquery && (b && $ || !(b || r >= T) || !($ || C >= r)) || (s[S.media] || (s[S.media] = []), s[S.media].push(c[S.rules]))
            }
            for (var M in f)f.hasOwnProperty(M) && f[M] && f[M].parentNode === y && y.removeChild(f[M]);
            f.length = 0;
            for (var R in s)if (s.hasOwnProperty(R)) {
                var O = d.createElement("style"), k = s[R].join("\n");
                O.type = "text/css", O.media = R, y.insertBefore(O, i.nextSibling), O.styleSheet ? O.styleSheet.cssText = k : O.appendChild(d.createTextNode(k)), f.push(O)
            }
        }, S = function (e, t, a) {
            var r = e.replace(n.regex.comments, "").replace(n.regex.keyframes, "").match(n.regex.media), s = r && r.length || 0;
            t = t.substring(0, t.lastIndexOf("/"));
            var o = function (e) {
                return e.replace(n.regex.urls, "$1" + t + "$2$3")
            }, l = !s && a;
            t.length && (t += "/"), l && (s = 1);
            for (var m = 0; s > m; m++) {
                var d, h, f, p;
                l ? (d = a, c.push(o(e))) : (d = r[m].match(n.regex.findStyles) && RegExp.$1, c.push(RegExp.$2 && o(RegExp.$2))), f = d.split(","), p = f.length;
                for (var g = 0; p > g; g++)h = f[g], i(h) || u.push({
                    media: h.split("(")[0].match(n.regex.only) && RegExp.$2 || "all",
                    rules: c.length - 1,
                    hasquery: h.indexOf("(") > -1,
                    minw: h.match(n.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: h.match(n.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                })
            }
            w()
        }, T = function () {
            if (a.length) {
                var t = a.shift();
                s(t.href, function (n) {
                    S(n, t.href, t.media), p[t.href] = !0, e.setTimeout(function () {
                        T()
                    }, 0)
                })
            }
        }, C = function () {
            for (var t = 0; t < v.length; t++) {
                var n = v[t], r = n.href, s = n.media, i = n.rel && "stylesheet" === n.rel.toLowerCase();
                r && i && !p[r] && (n.styleSheet && n.styleSheet.rawCssText ? (S(n.styleSheet.rawCssText, r, s), p[r] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(r) && !x || r.replace(RegExp.$1, "").split("/")[0] === e.location.host) && ("//" === r.substring(0, 2) && (r = e.location.protocol + r), a.push({
                    href: r,
                    media: s
                })))
            }
            T()
        };
        C(), n.update = C, n.getEmValue = E, e.addEventListener ? e.addEventListener("resize", t, !1) : e.attachEvent && e.attachEvent("onresize", t)
    }
}(this);
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length, n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Z.isFunction(t))return Z.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t))return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n
            } catch (i) {
            }
            ye.set(e, t, n)
        } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {
        }
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++)ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)for (n = 0, r = l[i].length; r > n; n++)Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = J, n = $e[e];
        return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Be.test(s) && Ie.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e)return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)if (t = Ge[i] + n, t in e)return t;
        return r
    }

    function N(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = _e(e), s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Be.test(i))return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++)r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function D(e, t, n, r, i) {
        return new D.prototype.init(e, t, n, r, i)
    }

    function j() {
        return setTimeout(function () {
            Qe = void 0
        }), Qe = Z.now()
    }

    function A(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Te[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Ce(e), g = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Ke.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r])continue;
                h = !0
            }
            p[r] = g && g[r] || Z.style(e, r)
        } else l = void 0;
        if (Z.isEmptyObject(p))"inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l); else {
            g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function () {
                Z(e).hide()
            }), f.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in p)Z.style(e, t, p[t])
            });
            for (r in p)s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0, s = tt.length, a = Z.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var t = Qe || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || j(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)if (r = tt[o].call(l, e, c, l.opts))return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, s = e === xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function M(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (i in a)if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n)o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])for (s in e.converters)l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)for (i in l)if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && e["throws"])t = s(t); else try {
                t = s(t)
            } catch (f) {
                return {state: "parsererror", error: s ? f : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t))Z.each(t, function (t, i) {
            n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== Z.type(t))r(e, t); else for (i in t)$(e + "[" + i + "]", t[i], n, r)
    }

    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var B = [], _ = B.slice, z = B.concat, X = B.push, U = B.indexOf, V = {}, Y = V.toString, G = V.hasOwnProperty, Q = {}, J = e.document, K = "2.1.4", Z = function (e, t) {
        return new Z.fn.init(e, t)
    }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function (e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
            return _.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        }, pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return Z.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(_.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: X, sort: B.sort, splice: B.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Z.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isPlainObject: function (e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, re)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e);
            if (r) {
                if (a)for (; s > o && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
            } else if (a)for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        }, inArray: function (e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e), u = [];
            if (a)for (; s > o; o++)i = t(e[o], o, r), null != i && u.push(i); else for (o in e)i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        }, now: Date.now, support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)return n;
            if (!r && O) {
                if (11 !== a && (i = ye.exec(e)))if (s = i[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode)return n;
                        if (o.id === s)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s)return n.push(o), n
                } else {
                    if (i[2])return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = i[3]) && w.getElementsByClassName)return K.apply(n, t.getElementsByClassName(s)), n
                }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;)l[u] = d + p(l[u]);
                        h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g)try {
                        return K.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;)T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;)n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l = [I, o];
                if (s) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, s))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i) {
                    if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === I && a[1] === o)return l[2] = a[2];
                    if (u[r] = l, l[2] = e(t, n, s))return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function (r, s, a, u) {
                var l, c, f, p = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function (e) {
                return e === t
            }, s, !0), l = d(function (e) {
                return ee(t, e) > -1
            }, s, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i
            }]; i > a; a++)if (n = T.relative[e[a].type])c = [d(h(c), n)]; else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                    for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                    return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function x(e, n) {

            var i = n.length > 0, o = e.length > 0, s = function (r, s, a, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = D, x = r || o && T.find.TAG("*", l), b = I += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0; p = e[f++];)if (p(c, s, a)) {
                            u.push(c);
                            break
                        }
                        l && (I = b)
                    }
                    i && ((c = !p && c) && d--, r && g.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];)p(g, v, s, a);
                    if (r) {
                        if (d > 0)for (; h--;)g[h] || v[h] || (v[h] = Q.call(u));
                        v = m(v)
                    }
                    K.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (I = b, D = y), g
            };
            return i ? r(s) : s
        }

        var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date, $ = e.document, I = 0, B = 0, _ = n(), z = n(), X = n(), U = function (e, t) {
            return e === t && (A = !0), 0
        }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, ee = function (e, t) {
            for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(se), de = new RegExp("^" + ie + "$"), he = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Te = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Ce = function () {
            L()
        };
        try {
            K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (Ne) {
            K = {
                apply: G.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), O = !N(r), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function (e) {
                return H.appendChild(e).id = W, !r.getElementsByName || !r.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                    return O ? t.getElementsByClassName(e) : void 0
                }, P = [], F = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function (e) {
                H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
            }), i(function (e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = ve.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", se)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), M = t || ve.test(H.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t)return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return A = !0, 0;
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (!o || !a)return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (o === a)return s(e, t);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (; u[i] === l[i];)i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, r) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n)))try {
                var r = R.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (i) {
            }
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && L(e), M(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()], r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r++];)n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
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
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [I, d, p];
                                    break
                                }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I)p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;)r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = E(e.replace(ue, "$1"));
                    return i[W] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(we, Te), function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function (t) {
                        var n;
                        do if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return me.test(e.nodeName)
                }, input: function (e) {
                    return ge.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[b] = a(b);
        for (b in{submit: !0, reset: !0})T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in T.filter)!(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r)break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function (e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;)o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t)return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e)return K.apply(n, r), n;
                    break
                }
            }
            return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++)if (Z.contains(i[t], this))return !0
            }));
            for (t = 0; n > t; t++)Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = Z.fn.init = function (e, t) {
        var n, r;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))for (n in t)Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ce.prototype = Z.fn, ue = Z(J);
    var fe = /^(?:parents|prev(?:Until|All))/, pe = {children: !0, contents: !0, next: !0, prev: !0};
    Z.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (i && Z(e).is(n))break;
                r.push(e)
            }
            return r
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)if (Z.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Z.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Z.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var de = /\S+/g, he = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [], l = !e.once && [], c = function (o) {
            for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function () {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        Z.each(t, function (t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), r ? s = u.length : t && (i = n, c(t))
                }
                return this
            }, remove: function () {
                return u && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1;)u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                }), this
            }, has: function (e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], s = 0, this
            }, disable: function () {
                return u = l = t = void 0, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return l = void 0, t || f.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, t) {
                return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return f
    }, Z.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return Z.Deferred(function (n) {
                        Z.each(t, function (t, o) {
                            var s = Z.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? Z.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, Z.each(t, function (e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = _.call(arguments), s = o.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(), l = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++)o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, Z.ready.promise();
    var me = Z.access = function (e, t, n, r, i, o, s) {
        var a = 0, u = e.length, l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n)Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(Z(e), n)
            })), t))for (; u > a; a++)t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e))return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)o[t] = n; else if (Z.isEmptyObject(o))Z.extend(this.cache[i], t); else for (r in t)o[r] = t[r];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (void 0 === t)this.cache[o] = {}; else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
                for (; n--;)delete s[r[n]]
            }
        }, hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a, ye = new a, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        }, data: function (e, t, n) {
            return ye.access(e, t, n)
        }, removeData: function (e, t) {
            ye.remove(e, t)
        }, _data: function (e, t, n) {
            return ve.access(e, t, n)
        }, _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                ye.set(this, e)
            }) : me(this, function (t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n)return n;
                    if (n = ye.get(o, r), void 0 !== n)return n;
                    if (n = u(o, r, void 0), void 0 !== n)return n
                } else this.each(function () {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), r = n.length, i = n.shift(), o = Z._queueHooks(e, t), s = function () {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function () {
                        ve.remove(e, [t + "queue", n])
                    })
                })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Te = ["Top", "Right", "Bottom", "Left"], Ce = function (e, t) {
        return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }, Ne = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/, Se = /^(?:mouse|pointer|contextmenu)|click/, De = /^(?:focusinfocus|focusoutblur)$/, je = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(de) || [""], l = t.length; l--;)a = je.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && Z.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--;)if (a = je.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u)Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J], d = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, De.test(u + d) || (s = s.parentNode); s; s = s.parentNode)p.push(s), a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [], a = _.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))for (; u !== this; u = u.parentNode || this)if (u.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && s.push({elem: u, handlers: r})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando])return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e)this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)r = c; else if (!r)return this;
            return 1 === i && (o = r, r = function (e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Le = /<([\w:]+)/, qe = /<|&#?\w+;/, He = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^$|\/(?:java|ecma)script/i, Pe = /^true\/(.*)/, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, Z.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++)y(o[r], s[r]);
            if (t)if (n)for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++)m(o[r], s[r]); else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)if (i = e[p], i || 0 === i)if ("object" === Z.type(i))Z.merge(f, i.nodeType ? [i] : i); else if (qe.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Me[s] || Me._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;)o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))for (l = 0; i = o[l++];)Fe.test(i.type || "") && n.push(i);
            return c
        }, cleanData: function (e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events)for (r in t.events)o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return me(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        }, html: function (e) {
            return me(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Me[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p))return this.each(function (n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++)s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++)s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Re, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++)n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, $e = {}, Ie = /^margin/, Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), _e = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }

        var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == r && t(), r
            }, reliableMarginRight: function () {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
            }
        }))
    }(), Z.swap = function (e, t, n, r) {
        var i, o, s = {};
        for (o in t)s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = s[o];
        return i
    };
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = new RegExp("^(" + we + ")(.*)$", "i"), Ue = new RegExp("^([+-])=(" + we + ")", "i"), Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ye = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = w(e, "opacity");
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
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function () {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            }, set: function (e, n, r) {
                var i = r && _e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
    }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ie.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function (e, t) {
            return me(this, function (e, t, n) {
                var r, i, o = {}, s = 0;
                if (Z.isArray(t)) {
                    for (r = _e(e), i = t.length; i > s; s++)o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return S(this, !0)
        }, hide: function () {
            return S(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [q], nt = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Ze.exec(t), o = i && i[3] || (Z.cssNumber[e] ? "" : "px"), s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)), a = 1, u = 20;
            if (s && s[3] !== o) {
                o = o || s[3], i = i || [], s = +r || 1;
                do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
            }
            return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };
    Z.Animation = Z.extend(O, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), Z.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Ce).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = Z.isEmptyObject(e), o = Z.speed(t, n, r), s = function () {
                var t = O(this, Z.extend({}, e), o);
                (i || ve.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = Z.timers, s = ve.get(this);
                if (i)s[i] && s[i].stop && r(s[i]); else for (i in s)s[i] && s[i].stop && et.test(i) && r(s[i]);
                for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ve.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, s = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, e, []),
                     i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
        }
    }), Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Z.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var e, t = 0, n = Z.timers;
        for (Qe = Z.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Qe = void 0
    }, Z.fx.timer = function (e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Je), Je = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
        e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
    }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(de);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function (e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var r, i, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(de) || []; l > u; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = Z.trim(r), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(de) || []; l > u; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), o)return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;)r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now(), ct = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e)return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ft = /#.*$/, pt = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm, ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, xt = {}, bt = "*/".concat("*"), wt = e.location.href, Tt = vt.exec(wt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt,
            type: "GET",
            isLocal: ht.test(Tt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(yt),
        ajaxTransport: F(xt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = M(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!s)for (s = {}; t = dt.exec(o);)s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (f.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > x)for (t in e)m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || b;
                    return r && r.abort(t), n(0, t), this
                }
            };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, Tt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(yt, f, t, w), 2 === x)return w;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x))return w.abort();
            b = "abort";
            for (c in{success: 1, error: 1, complete: 1})w[c](f[c]);
            if (r = P(xt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > x))throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Ct = /%20/g, Nt = /\[\]$/, kt = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i, St = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e))Z.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)$(n, e[n], t, i);
        return r.join("&").replace(Ct, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {name: t.name, value: e.replace(kt, "\r\n")}
                }) : {name: t.name, value: n.replace(kt, "\r\n")}
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var Dt = 0, jt = {}, At = {0: 200, 1223: 204}, Lt = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in jt)jt[e]()
    }), Q.cors = !!Lt && "withCredentials" in Lt, Q.ajax = Lt = !!Lt, Z.ajaxTransport(function (e) {
        var t;
        return Q.cors || Lt && !e.crossDomain ? {
            send: function (n, r) {
                var i, o = e.xhr(), s = ++Dt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)o.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete jt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = jt[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t)throw a
                }
            }, abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var qt = [], Ht = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = qt.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = se.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Ot = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ot)return Ot.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
                s.each(n, o || [e.responseText, t, e])
            }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Ft = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = I(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Ft; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");)e = e.offsetParent;
                return e || Ft
            })
        }
    }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function (i) {
            return me(this, function (t, i, o) {
                var s = I(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function (e, n) {
            return n ? (n = w(e, t), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height", Width: "width"}, function (e, t) {
        Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            Z.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function (t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var Pt = e.jQuery, Rt = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Pt), Z
    }, typeof t === ke && (e.jQuery = e.$ = Z), Z
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var s = t || window.event, a = h.call(arguments, 1), r = 0, f = 0, d = 0, c = 0, m = 0, g = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (f = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (f = -1 * d, d = 0), r = 0 === d ? f : d, "deltaY" in s && (d = -1 * s.deltaY, r = d), "deltaX" in s && (f = s.deltaX, 0 === d && (r = -1 * f)), 0 !== d || 0 !== f) {
            if (1 === s.deltaMode) {
                var w = e.data(this, "mousewheel-line-height");
                r *= w, d *= w, f *= w
            } else if (2 === s.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                r *= v, d *= v, f *= v
            }
            if (c = Math.max(Math.abs(d), Math.abs(f)), (!l || l > c) && (l = c, i(s, c) && (l /= 40)), i(s, c) && (r /= 40, f /= 40, d /= 40), r = Math[r >= 1 ? "floor" : "ceil"](r / l), f = Math[f >= 1 ? "floor" : "ceil"](f / l), d = Math[d >= 1 ? "floor" : "ceil"](d / l), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var p = this.getBoundingClientRect();
                m = t.clientX - p.left, g = t.clientY - p.top
            }
            return t.deltaX = f, t.deltaY = d, t.deltaFactor = l, t.offsetX = m, t.offsetY = g, t.deltaMode = 0, a.unshift(t, r, f, d), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        l = null
    }

    function i(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }

    var o, l, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], h = Array.prototype.slice;
    if (e.event.fixHooks)for (var r = s.length; r;)e.event.fixHooks[s[--r]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener)for (var n = a.length; n;)this.addEventListener(a[--n], t, !1); else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)for (var n = a.length; n;)this.removeEventListener(a[--n], t, !1); else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (t) {
            var n = e(t), i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        }, getPageHeight: function (t) {
            return e(t).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
});
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e)if (void 0 !== t.style[i])return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
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
            var i = t(this), n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', o = function (e) {
        t(e).on("click", i, this.close)
    };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var n = t(this), s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.button"), s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }

    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", o = this.$element, n = o.is("input") ? "val" : "html", s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.carousel"), s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e), a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
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
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e), o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap)return e;
        var n = "prev" == t ? -1 : 1, s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"), s = o || this.getItemForDirection(e, n), a = this.interval, r = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active"))return this.sliding = !1;
        var h = s[0], d = t.Event("slide.bs.carousel", {relatedTarget: h, direction: r});
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {relatedTarget: h, direction: r});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this), s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()), r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.collapse"), s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }

    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 350, o.DEFAULTS = {toggle: !0}, o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n), a = s.data("bs.collapse"), r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function () {
            var o = t(this), n = e(o), s = {relatedTarget: this};
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function o(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }

    var n = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.5", a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n), a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {relatedTarget: this};
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented())return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, a.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o), a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which)return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a", l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, o) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.modal"), a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this, n = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this), n = o.attr("href"), s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), a = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tooltip"), s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
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
    }, i.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState)if (this.inState[t])return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o)return;
            var n = this, s = this.tip(), a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(), p = s[0].offsetWidth, c = s[0].offsetHeight;
            if (h) {
                var f = r, u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var m = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(), n = o[0].offsetWidth, s = o[0].offsetHeight, a = parseInt(o.css("margin-top"), 10), r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth, h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i), c = p ? 2 * d.left - n + l : 2 * d.top - s + h, f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }

        var n = this, s = t(this.$tip), a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], o = "BODY" == i.tagName, n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {width: n.right - n.left, height: n.bottom - n.top}));
        var s = o ? {
            top: 0,
            left: 0
        } : e.offset(), a = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, r = o ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, n, a, r, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {top: 0, left: 0};
        if (!this.$viewport)return n;
        var s = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll, l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s, d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function () {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.popover"), s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.scrollspy"), s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }

    e.VERSION = "3.3.5", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), n = e.data("target") || e.attr("href"), s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets, a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o)return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0])return this.activeTarget = null, this.clear();
        for (t = n.length; t--;)a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")),
            o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: n[0]});
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }

        var a = o.find("> .active"), r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.affix"), s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(), s = this.$element.offset(), a = this.$target.height();
        if (null != i && "top" == this.affixed)return i > n ? "top" : !1;
        if ("bottom" == this.affixed)return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed, l = r ? n : s.top, h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), o = this.options.offset, n = o.top, s = o.bottom, a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented())return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({top: a - e - s})
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery);
!function (t, e, i) {
    var n = t.L, o = {};
    o.version = "0.7.5", "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define && define.amd && define(o), o.noConflict = function () {
        return t.L = n, this
    }, t.L = o, o.Util = {
        extend: function (t) {
            var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
            for (i = 0, n = s.length; n > i; i++) {
                o = s[i] || {};
                for (e in o)o.hasOwnProperty(e) && (t[e] = o[e])
            }
            return t
        }, bind: function (t, e) {
            var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
            return function () {
                return t.apply(e, i || arguments)
            }
        }, stamp: function () {
            var t = 0, e = "_leaflet_id";
            return function (i) {
                return i[e] = i[e] || ++t, i[e]
            }
        }(), invokeEach: function (t, e, i) {
            var n, o;
            if ("object" == typeof t) {
                o = Array.prototype.slice.call(arguments, 3);
                for (n in t)e.apply(i, [n, t[n]].concat(o));
                return !0
            }
            return !1
        }, limitExecByInterval: function (t, e, i) {
            var n, o;
            return function s() {
                var a = arguments;
                return n ? void(o = !0) : (n = !0, setTimeout(function () {
                    n = !1, o && (s.apply(i, a), o = !1)
                }, e), void t.apply(i, a))
            }
        }, falseFn: function () {
            return !1
        }, formatNum: function (t, e) {
            var i = Math.pow(10, e || 5);
            return Math.round(t * i) / i
        }, trim: function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }, splitWords: function (t) {
            return o.Util.trim(t).split(/\s+/)
        }, setOptions: function (t, e) {
            return t.options = o.extend({}, t.options, e), t.options
        }, getParamString: function (t, e, i) {
            var n = [];
            for (var o in t)n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
        }, template: function (t, e) {
            return t.replace(/\{ *([\w_]+) *\}/g, function (t, n) {
                var o = e[n];
                if (o === i)throw new Error("No value provided for variable " + t);
                return "function" == typeof o && (o = o(e)), o
            })
        }, isArray: Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    }, function () {
        function e(e) {
            var i, n, o = ["webkit", "moz", "o", "ms"];
            for (i = 0; i < o.length && !n; i++)n = t[o[i] + e];
            return n
        }

        function i(e) {
            var i = +new Date, o = Math.max(0, 16 - (i - n));
            return n = i + o, t.setTimeout(e, o)
        }

        var n = 0, s = t.requestAnimationFrame || e("RequestAnimationFrame") || i, a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
                t.clearTimeout(e)
            };
        o.Util.requestAnimFrame = function (e, n, a, r) {
            return e = o.bind(e, n), a && s === i ? void e() : s.call(t, e, r)
        }, o.Util.cancelAnimFrame = function (e) {
            e && a.call(t, e)
        }
    }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {
    }, o.Class.extend = function (t) {
        var e = function () {
            this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
        }, i = function () {
        };
        i.prototype = this.prototype;
        var n = new i;
        n.constructor = e, e.prototype = n;
        for (var s in this)this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
        t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = o.extend({}, n.options, t.options)), o.extend(n, t), n._initHooks = [];
        var a = this;
        return e.__super__ = a.prototype, n.callInitHooks = function () {
            if (!this._initHooksCalled) {
                a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = n._initHooks.length; e > t; t++)n._initHooks[t].call(this)
            }
        }, e
    }, o.Class.include = function (t) {
        o.extend(this.prototype, t)
    }, o.Class.mergeOptions = function (t) {
        o.extend(this.prototype.options, t)
    }, o.Class.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1), i = "function" == typeof t ? t : function () {
            this[t].apply(this, e)
        };
        this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
    };
    var s = "_leaflet_events";
    o.Mixin = {}, o.Mixin.Events = {
        addEventListener: function (t, e, i) {
            if (o.Util.invokeEach(t, this.addEventListener, this, e, i))return this;
            var n, a, r, h, l, u, c, d = this[s] = this[s] || {}, p = i && i !== this && o.stamp(i);
            for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++)r = {
                action: e,
                context: i || this
            }, h = t[n], p ? (l = h + "_idx", u = l + "_len", c = d[l] = d[l] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(r)) : (d[h] = d[h] || [], d[h].push(r));
            return this
        }, hasEventListeners: function (t) {
            var e = this[s];
            return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
        }, removeEventListener: function (t, e, i) {
            if (!this[s])return this;
            if (!t)return this.clearAllEventListeners();
            if (o.Util.invokeEach(t, this.removeEventListener, this, e, i))return this;
            var n, a, r, h, l, u, c, d, p, _ = this[s], m = i && i !== this && o.stamp(i);
            for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++)if (r = t[n], u = r + "_idx", c = u + "_len", d = _[u], e) {
                if (h = m && d ? d[m] : _[r]) {
                    for (l = h.length - 1; l >= 0; l--)h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1), p[0].action = o.Util.falseFn);
                    i && d && 0 === h.length && (delete d[m], _[c]--)
                }
            } else delete _[r], delete _[u], delete _[c];
            return this
        }, clearAllEventListeners: function () {
            return delete this[s], this
        }, fireEvent: function (t, e) {
            if (!this.hasEventListeners(t))return this;
            var i, n, a, r, h, l = o.Util.extend({}, e, {type: t, target: this}), u = this[s];
            if (u[t])for (i = u[t].slice(), n = 0, a = i.length; a > n; n++)i[n].action.call(i[n].context, l);
            r = u[t + "_idx"];
            for (h in r)if (i = r[h].slice())for (n = 0, a = i.length; a > n; n++)i[n].action.call(i[n].context, l);
            return this
        }, addOneTimeEventListener: function (t, e, i) {
            if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i))return this;
            var n = o.bind(function () {
                this.removeEventListener(t, e, i).removeEventListener(t, n, i)
            }, this);
            return this.addEventListener(t, e, i).addEventListener(t, n, i)
        }
    }, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent, function () {
        var n = "ActiveXObject" in t, s = n && !e.addEventListener, a = navigator.userAgent.toLowerCase(), r = -1 !== a.indexOf("webkit"), h = -1 !== a.indexOf("chrome"), l = -1 !== a.indexOf("phantom"), u = -1 !== a.indexOf("android"), c = -1 !== a.search("android [23]"), d = -1 !== a.indexOf("gecko"), p = typeof orientation != i + "", _ = !t.PointerEvent && t.MSPointerEvent, m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || _, f = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches, g = e.documentElement, v = n && "transition" in g.style, y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !c, P = "MozPerspective" in g.style, L = "OTransition" in g.style, x = !t.L_DISABLE_3D && (v || y || P || L) && !l, w = !t.L_NO_TOUCH && !l && (m || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch);
        o.Browser = {
            ie: n,
            ielt9: s,
            webkit: r,
            gecko: d && !r && !t.opera && !n,
            android: u,
            android23: c,
            chrome: h,
            ie3d: v,
            webkit3d: y,
            gecko3d: P,
            opera3d: L,
            any3d: x,
            mobile: p,
            mobileWebkit: p && r,
            mobileWebkit3d: p && y,
            mobileOpera: p && t.opera,
            touch: w,
            msPointer: _,
            pointer: m,
            retina: f
        }
    }(), o.Point = function (t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
    }, o.Point.prototype = {
        clone: function () {
            return new o.Point(this.x, this.y)
        }, add: function (t) {
            return this.clone()._add(o.point(t))
        }, _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        }, subtract: function (t) {
            return this.clone()._subtract(o.point(t))
        }, _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        }, divideBy: function (t) {
            return this.clone()._divideBy(t)
        }, _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        }, multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        }, _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        }, round: function () {
            return this.clone()._round()
        }, _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, floor: function () {
            return this.clone()._floor()
        }, _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, distanceTo: function (t) {
            t = o.point(t);
            var e = t.x - this.x, i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        }, equals: function (t) {
            return t = o.point(t), t.x === this.x && t.y === this.y
        }, contains: function (t) {
            return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        }, toString: function () {
            return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
        }
    }, o.point = function (t, e, n) {
        return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : new o.Point(t, e, n)
    }, o.Bounds = function (t, e) {
        if (t)for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)this.extend(i[n])
    }, o.Bounds.prototype = {
        extend: function (t) {
            return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        }, getCenter: function (t) {
            return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        }, getBottomLeft: function () {
            return new o.Point(this.min.x, this.max.y)
        }, getTopRight: function () {
            return new o.Point(this.max.x, this.min.y)
        }, getSize: function () {
            return this.max.subtract(this.min)
        }, contains: function (t) {
            var e, i;
            return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        }, intersects: function (t) {
            t = o.bounds(t);
            var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x >= e.x && n.x <= i.x, r = s.y >= e.y && n.y <= i.y;
            return a && r
        }, isValid: function () {
            return !(!this.min || !this.max)
        }
    }, o.bounds = function (t, e) {
        return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
    }, o.Transformation = function (t, e, i, n) {
        this._a = t, this._b = e, this._c = i, this._d = n
    }, o.Transformation.prototype = {
        transform: function (t, e) {
            return this._transform(t.clone(), e)
        }, _transform: function (t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        }, untransform: function (t, e) {
            return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    }, o.DomUtil = {
        get: function (t) {
            return "string" == typeof t ? e.getElementById(t) : t
        }, getStyle: function (t, i) {
            var n = t.style[i];
            if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
                var o = e.defaultView.getComputedStyle(t, null);
                n = o ? o[i] : null
            }
            return "auto" === n ? null : n
        }, getViewportOffset: function (t) {
            var i, n = 0, s = 0, a = t, r = e.body, h = e.documentElement;
            do {
                if (n += a.offsetTop || 0, s += a.offsetLeft || 0, n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = o.DomUtil.getStyle(a, "position"), a.offsetParent === r && "absolute" === i)break;
                if ("fixed" === i) {
                    n += r.scrollTop || h.scrollTop || 0, s += r.scrollLeft || h.scrollLeft || 0;
                    break
                }
                if ("relative" === i && !a.offsetLeft) {
                    var l = o.DomUtil.getStyle(a, "width"), u = o.DomUtil.getStyle(a, "max-width"), c = a.getBoundingClientRect();
                    ("none" !== l || "none" !== u) && (s += c.left + a.clientLeft), n += c.top + (r.scrollTop || h.scrollTop || 0);
                    break
                }
                a = a.offsetParent
            } while (a);
            a = t;
            do {
                if (a === r)break;
                n -= a.scrollTop || 0, s -= a.scrollLeft || 0, a = a.parentNode
            } while (a);
            return new o.Point(s, n)
        }, documentIsLtr: function () {
            return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr
        }, create: function (t, i, n) {
            var o = e.createElement(t);
            return o.className = i, n && n.appendChild(o), o
        }, hasClass: function (t, e) {
            if (t.classList !== i)return t.classList.contains(e);
            var n = o.DomUtil._getClass(t);
            return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
        }, addClass: function (t, e) {
            if (t.classList !== i)for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++)t.classList.add(n[s]); else if (!o.DomUtil.hasClass(t, e)) {
                var r = o.DomUtil._getClass(t);
                o.DomUtil._setClass(t, (r ? r + " " : "") + e)
            }
        }, removeClass: function (t, e) {
            t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
        }, _setClass: function (t, e) {
            t.className.baseVal === i ? t.className = e : t.className.baseVal = e
        }, _getClass: function (t) {
            return t.className.baseVal === i ? t.className : t.className.baseVal
        }, setOpacity: function (t, e) {
            if ("opacity" in t.style)t.style.opacity = e; else if ("filter" in t.style) {
                var i = !1, n = "DXImageTransform.Microsoft.Alpha";
                try {
                    i = t.filters.item(n)
                } catch (o) {
                    if (1 === e)return
                }
                e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
            }
        }, testProp: function (t) {
            for (var i = e.documentElement.style, n = 0; n < t.length; n++)if (t[n] in i)return t[n];
            return !1
        }, getTranslateString: function (t) {
            var e = o.Browser.webkit3d, i = "translate" + (e ? "3d" : "") + "(", n = (e ? ",0" : "") + ")";
            return i + t.x + "px," + t.y + "px" + n
        }, getScaleString: function (t, e) {
            var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))), n = " scale(" + t + ") ";
            return i + n
        }, setPosition: function (t, e, i) {
            t._leaflet_pos = e, !i && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
        }, getPosition: function (t) {
            return t._leaflet_pos
        }
    }, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend", function () {
        if ("onselectstart" in e)o.extend(o.DomUtil, {
            disableTextSelection: function () {
                o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
            }, enableTextSelection: function () {
                o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
            }
        }); else {
            var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            o.extend(o.DomUtil, {
                disableTextSelection: function () {
                    if (i) {
                        var t = e.documentElement.style;
                        this._userSelect = t[i], t[i] = "none"
                    }
                }, enableTextSelection: function () {
                    i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect)
                }
            })
        }
        o.extend(o.DomUtil, {
            disableImageDrag: function () {
                o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
            }, enableImageDrag: function () {
                o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
            }
        })
    }(), o.LatLng = function (t, e, n) {
        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e))throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n))
    }, o.extend(o.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1e-9
    }), o.LatLng.prototype = {
        equals: function (t) {
            if (!t)return !1;
            t = o.latLng(t);
            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return e <= o.LatLng.MAX_MARGIN
        }, toString: function (t) {
            return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
        }, distanceTo: function (t) {
            t = o.latLng(t);
            var e = 6378137, i = o.LatLng.DEG_TO_RAD, n = (t.lat - this.lat) * i, s = (t.lng - this.lng) * i, a = this.lat * i, r = t.lat * i, h = Math.sin(n / 2), l = Math.sin(s / 2), u = h * h + l * l * Math.cos(a) * Math.cos(r);
            return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
        }, wrap: function (t, e) {
            var i = this.lng;
            return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new o.LatLng(this.lat, i)
        }
    }, o.latLng = function (t, e) {
        return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t, e)
    }, o.LatLngBounds = function (t, e) {
        if (t)for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)this.extend(i[n])
    }, o.LatLngBounds.prototype = {
        extend: function (t) {
            if (!t)return this;
            var e = o.latLng(t);
            return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
        }, pad: function (t) {
            var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, s = Math.abs(e.lng - i.lng) * t;
            return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s))
        }, getCenter: function () {
            return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        }, getSouthWest: function () {
            return this._southWest
        }, getNorthEast: function () {
            return this._northEast
        }, getNorthWest: function () {
            return new o.LatLng(this.getNorth(), this.getWest())
        }, getSouthEast: function () {
            return new o.LatLng(this.getSouth(), this.getEast())
        }, getWest: function () {
            return this._southWest.lng
        }, getSouth: function () {
            return this._southWest.lat
        }, getEast: function () {
            return this._northEast.lng
        }, getNorth: function () {
            return this._northEast.lat
        }, contains: function (t) {
            t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
            var e, i, n = this._southWest, s = this._northEast;
            return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng
        }, intersects: function (t) {
            t = o.latLngBounds(t);
            var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat >= e.lat && n.lat <= i.lat, r = s.lng >= e.lng && n.lng <= i.lng;
            return a && r
        }, toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        }, equals: function (t) {
            return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
        }, isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    }, o.latLngBounds = function (t, e) {
        return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
    }, o.Projection = {}, o.Projection.SphericalMercator = {
        MAX_LATITUDE: 85.0511287798, project: function (t) {
            var e = o.LatLng.DEG_TO_RAD, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = t.lng * e, a = n * e;
            return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(s, a)
        }, unproject: function (t) {
            var e = o.LatLng.RAD_TO_DEG, i = t.x * e, n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
            return new o.LatLng(n, i)
        }
    }, o.Projection.LonLat = {
        project: function (t) {
            return new o.Point(t.lng, t.lat)
        }, unproject: function (t) {
            return new o.LatLng(t.y, t.x)
        }
    }, o.CRS = {
        latLngToPoint: function (t, e) {
            var i = this.projection.project(t), n = this.scale(e);
            return this.transformation._transform(i, n)
        }, pointToLatLng: function (t, e) {
            var i = this.scale(e), n = this.transformation.untransform(t, i);
            return this.projection.unproject(n)
        }, project: function (t) {
            return this.projection.project(t)
        }, scale: function (t) {
            return 256 * Math.pow(2, t)
        }, getSize: function (t) {
            var e = this.scale(t);
            return o.point(e, e)
        }
    }, o.CRS.Simple = o.extend({}, o.CRS, {
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1, 0, -1, 0),
        scale: function (t) {
            return Math.pow(2, t)
        }
    }), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
        code: "EPSG:3857",
        projection: o.Projection.SphericalMercator,
        transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
        project: function (t) {
            var e = this.projection.project(t), i = 6378137;
            return e.multiplyBy(i)
        }
    }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {code: "EPSG:900913"}), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
        code: "EPSG:4326",
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
    }), o.Map = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            crs: o.CRS.EPSG3857,
            fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
            trackResize: !0,
            markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
        },
        initialize: function (t, e) {
            e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {reset: !0}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
        },
        setView: function (t, e) {
            return e = e === i ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this
        },
        setZoom: function (t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {zoom: e}) : (this._zoom = this._limitZoom(t), this)
        },
        zoomIn: function (t, e) {
            return this.setZoom(this._zoom + (t || 1), e)
        },
        zoomOut: function (t, e) {
            return this.setZoom(this._zoom - (t || 1), e)
        },
        setZoomAround: function (t, e, i) {
            var n = this.getZoomScale(e), s = this.getSize().divideBy(2), a = t instanceof o.Point ? t : this.latLngToContainerPoint(t), r = a.subtract(s).multiplyBy(1 - 1 / n), h = this.containerPointToLatLng(s.add(r));
            return this.setView(h, e, {zoom: i})
        },
        fitBounds: function (t, e) {
            e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
            var i = o.point(e.paddingTopLeft || e.padding || [0, 0]), n = o.point(e.paddingBottomRight || e.padding || [0, 0]), s = this.getBoundsZoom(t, !1, i.add(n));
            s = e.maxZoom ? Math.min(e.maxZoom, s) : s;
            var a = n.subtract(i).divideBy(2), r = this.project(t.getSouthWest(), s), h = this.project(t.getNorthEast(), s), l = this.unproject(r.add(h).divideBy(2).add(a), s);
            return this.setView(l, s, e)
        },
        fitWorld: function (t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function (t, e) {
            return this.setView(t, this._zoom, {pan: e})
        },
        panBy: function (t) {
            return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend")
        },
        setMaxBounds: function (t) {
            return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
        },
        panInsideBounds: function (t, e) {
            var i = this.getCenter(), n = this._limitCenter(i, this._zoom, t);
            return i.equals(n) ? this : this.panTo(n, e)
        },
        addLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
        },
        removeLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {layer: t}), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
        },
        hasLayer: function (t) {
            return t ? o.stamp(t) in this._layers : !1
        },
        eachLayer: function (t, e) {
            for (var i in this._layers)t.call(e, this._layers[i]);
            return this
        },
        invalidateSize: function (t) {
            if (!this._loaded)return this;
            t = o.extend({animate: !1, pan: !0}, t === !0 ? {animate: !0} : t);
            var e = this.getSize();
            this._sizeChanged = !0, this._initialCenter = null;
            var i = this.getSize(), n = e.divideBy(2).round(), s = i.divideBy(2).round(), a = n.subtract(s);
            return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        addHandler: function (t, e) {
            if (!e)return this;
            var i = this[t] = new e(this);
            return this._handlers.push(i), this.options[t] && i.enable(), this
        },
        remove: function () {
            this._loaded && this.fire("unload"), this._initEvents("off");
            try {
                delete this._container._leaflet
            } catch (t) {
                this._container._leaflet = i
            }
            return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
        },
        getCenter: function () {
            return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function () {
            return this._zoom
        },
        getBounds: function () {
            var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
            return new o.LatLngBounds(e, i)
        },
        getMinZoom: function () {
            return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom
        },
        getMaxZoom: function () {
            return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function (t, e, i) {
            t = o.latLngBounds(t);
            var n, s = this.getMinZoom() - (e ? 1 : 0), a = this.getMaxZoom(), r = this.getSize(), h = t.getNorthWest(), l = t.getSouthEast(), u = !0;
            i = o.point(i || [0, 0]);
            do s++, n = this.project(l, s).subtract(this.project(h, s)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(n); while (u && a >= s);
            return u && e ? null : e ? s : s - 1
        },
        getSize: function () {
            return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
        },
        getPixelBounds: function () {
            var t = this._getTopLeftPoint();
            return new o.Bounds(t, t.add(this.getSize()))
        },
        getPixelOrigin: function () {
            return this._checkIfLoaded(), this._initialTopLeftPoint
        },
        getPanes: function () {
            return this._panes
        },
        getContainer: function () {
            return this._container
        },
        getZoomScale: function (t) {
            var e = this.options.crs;
            return e.scale(t) / e.scale(this._zoom)
        },
        getScaleZoom: function (t) {
            return this._zoom + Math.log(t) / Math.LN2
        },
        project: function (t, e) {
            return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
        },
        unproject: function (t, e) {
            return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
        },
        layerPointToLatLng: function (t) {
            var e = o.point(t).add(this.getPixelOrigin());
            return this.unproject(e)
        },
        latLngToLayerPoint: function (t) {
            var e = this.project(o.latLng(t))._round();
            return e._subtract(this.getPixelOrigin())
        },
        containerPointToLayerPoint: function (t) {
            return o.point(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function (t) {
            return o.point(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function (t) {
            var e = this.containerPointToLayerPoint(o.point(t));
            return this.layerPointToLatLng(e)
        },
        latLngToContainerPoint: function (t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
        },
        mouseEventToContainerPoint: function (t) {
            return o.DomEvent.getMousePosition(t, this._container)
        },
        mouseEventToLayerPoint: function (t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function (t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function (t) {
            var e = this._container = o.DomUtil.get(t);
            if (!e)throw new Error("Map container not found.");
            if (e._leaflet)throw new Error("Map container is already initialized.");
            e._leaflet = !0
        },
        _initLayout: function () {
            var t = this._container;
            o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
            var e = o.DomUtil.getStyle(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
        },
        _initPanes: function () {
            var t = this._panes = {};
            this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
            var e = " leaflet-zoom-hide";
            this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e))
        },
        _createPane: function (t, e) {
            return o.DomUtil.create("div", t, e || this._panes.objectsPane)
        },
        _clearPanes: function () {
            this._container.removeChild(this._mapPane)
        },
        _addLayers: function (t) {
            t = t ? o.Util.isArray(t) ? t : [t] : [];
            for (var e = 0, i = t.length; i > e; e++)this.addLayer(t[e])
        },
        _resetView: function (t, e, i, n) {
            var s = this._zoom !== e;
            n || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
            var a = !this._loaded;
            this._loaded = !0, this.fire("viewreset", {hard: !i}), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (s || n) && this.fire("zoomend"), this.fire("moveend", {hard: !i})
        },
        _rawPanBy: function (t) {
            o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function () {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _updateZoomLevels: function () {
            var t, e = 1 / 0, n = -(1 / 0), o = this._getZoomSpan();
            for (t in this._zoomBoundLayers) {
                var s = this._zoomBoundLayers[t];
                isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (n = Math.max(n, s.options.maxZoom))
            }
            t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange")
        },
        _panInsideMaxBounds: function () {
            this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function () {
            if (!this._loaded)throw new Error("Set map center and zoom first.")
        },
        _initEvents: function (e) {
            if (o.DomEvent) {
                e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
                var i, n, s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                for (i = 0, n = s.length; n > i; i++)o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
                this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
            }
        },
        _onResize: function () {
            o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
                this.invalidateSize({debounceMoveend: !0})
            }, this, !1, this._container)
        },
        _onMouseClick: function (t) {
            !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
        },
        _fireMouseEvent: function (t) {
            if (this._loaded && !o.DomEvent._skipped(t)) {
                var e = t.type;
                if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
                    "contextmenu" === e && o.DomEvent.preventDefault(t);
                    var i = this.mouseEventToContainerPoint(t), n = this.containerPointToLayerPoint(i), s = this.layerPointToLatLng(n);
                    this.fire(e, {latlng: s, layerPoint: n, containerPoint: i, originalEvent: t})
                }
            }
        },
        _onTileLayerLoad: function () {
            this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
        },
        _clearHandlers: function () {
            for (var t = 0, e = this._handlers.length; e > t; t++)this._handlers[t].disable()
        },
        whenReady: function (t, e) {
            return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
        },
        _layerAdd: function (t) {
            t.onAdd(this), this.fire("layeradd", {layer: t})
        },
        _getMapPanePos: function () {
            return o.DomUtil.getPosition(this._mapPane)
        },
        _moved: function () {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function () {
            return this.getPixelOrigin().subtract(this._getMapPanePos())
        },
        _getNewTopLeftPoint: function (t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._round()
        },
        _latLngToNewLayerPoint: function (t, e, i) {
            var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
            return this.project(t, e)._subtract(n)
        },
        _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function (t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function (t, e, i) {
            if (!i)return t;
            var n = this.project(t, e), s = this.getSize().divideBy(2), a = new o.Bounds(n.subtract(s), n.add(s)), r = this._getBoundsOffset(a, i, e);
            return this.unproject(n.add(r), e)
        },
        _limitOffset: function (t, e) {
            if (!e)return t;
            var i = this.getPixelBounds(), n = new o.Bounds(i.min.add(t), i.max.add(t));
            return t.add(this._getBoundsOffset(n, e))
        },
        _getBoundsOffset: function (t, e, i) {
            var n = this.project(e.getNorthWest(), i).subtract(t.min), s = this.project(e.getSouthEast(), i).subtract(t.max), a = this._rebound(n.x, -s.x), r = this._rebound(n.y, -s.y);
            return new o.Point(a, r)
        },
        _rebound: function (t, e) {
            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function (t) {
            var e = this.getMinZoom(), i = this.getMaxZoom();
            return Math.max(e, Math.min(i, t))
        }
    }), o.map = function (t, e) {
        return new o.Map(t, e)
    }, o.Projection.Mercator = {
        MAX_LATITUDE: 85.0840591556,
        R_MINOR: 6356752.314245179,
        R_MAJOR: 6378137,
        project: function (t) {
            var e = o.LatLng.DEG_TO_RAD, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = this.R_MAJOR, a = this.R_MINOR, r = t.lng * e * s, h = n * e, l = a / s, u = Math.sqrt(1 - l * l), c = u * Math.sin(h);
            c = Math.pow((1 - c) / (1 + c), .5 * u);
            var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;
            return h = -s * Math.log(d), new o.Point(r, h)
        },
        unproject: function (t) {
            for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(_) > d && --p > 0;)e = h * Math.sin(u), _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 * h)) - u, u += _;
            return new o.LatLng(u * i, a)
        }
    }, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
        code: "EPSG:3395",
        projection: o.Projection.Mercator, transformation: function () {
            var t = o.Projection.Mercator, e = t.R_MAJOR, i = .5 / (Math.PI * e);
            return new o.Transformation(i, .5, -i, .5)
        }()
    }), o.TileLayer = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: "abc",
            errorTileUrl: "",
            attribution: "",
            zoomOffset: 0,
            opacity: 1,
            unloadInvisibleTiles: o.Browser.mobile,
            updateWhenIdle: o.Browser.mobile
        },
        initialize: function (t, e) {
            e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;
            var i = this.options.subdomains;
            "string" == typeof i && (this.options.subdomains = i.split(""))
        },
        onAdd: function (t) {
            this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
                viewreset: this._reset,
                moveend: this._update
            }, this), this._animated && t.on({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        onRemove: function (t) {
            this._container.parentNode.removeChild(this._container), t.off({
                viewreset: this._reset,
                moveend: this._update
            }, this), this._animated && t.off({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
        },
        bringToFront: function () {
            var t = this._map._panes.tilePane;
            return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
        },
        bringToBack: function () {
            var t = this._map._panes.tilePane;
            return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        getContainer: function () {
            return this._container
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        },
        setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        setUrl: function (t, e) {
            return this._url = t, e || this.redraw(), this
        },
        redraw: function () {
            return this._map && (this._reset({hard: !0}), this._update()), this
        },
        _updateZIndex: function () {
            this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function (t, e) {
            var i, n, o, s = t.children, a = -e(1 / 0, -(1 / 0));
            for (n = 0, o = s.length; o > n; n++)s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
            this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
        },
        _updateOpacity: function () {
            var t, e = this._tiles;
            if (o.Browser.ielt9)for (t in e)o.DomUtil.setOpacity(e[t], this.options.opacity); else o.DomUtil.setOpacity(this._container, this.options.opacity)
        },
        _initContainer: function () {
            var t = this._map._panes.tilePane;
            if (!this._container) {
                if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                    var e = "leaflet-tile-container";
                    this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container)
                } else this._tileContainer = this._container;
                t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
            }
        },
        _reset: function (t) {
            for (var e in this._tiles)this.fire("tileunload", {tile: this._tiles[e]});
            this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
        },
        _getTileSize: function () {
            var t = this._map, e = t.getZoom() + this.options.zoomOffset, i = this.options.maxNativeZoom, n = this.options.tileSize;
            return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
        },
        _update: function () {
            if (this._map) {
                var t = this._map, e = t.getPixelBounds(), i = t.getZoom(), n = this._getTileSize();
                if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                    var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                    this._addTilesFromCenterOut(s), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(s)
                }
            }
        },
        _addTilesFromCenterOut: function (t) {
            var i, n, s, a = [], r = t.getCenter();
            for (i = t.min.y; i <= t.max.y; i++)for (n = t.min.x; n <= t.max.x; n++)s = new o.Point(n, i), this._tileShouldBeLoaded(s) && a.push(s);
            var h = a.length;
            if (0 !== h) {
                a.sort(function (t, e) {
                    return t.distanceTo(r) - e.distanceTo(r)
                });
                var l = e.createDocumentFragment();
                for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += h, n = 0; h > n; n++)this._addTile(a[n], l);
                this._tileContainer.appendChild(l)
            }
        },
        _tileShouldBeLoaded: function (t) {
            if (t.x + ":" + t.y in this._tiles)return !1;
            var e = this.options;
            if (!e.continuousWorld) {
                var i = this._getWrapTileNum();
                if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y)return !1
            }
            if (e.bounds) {
                var n = this._getTileSize(), o = t.multiplyBy(n), s = o.add([n, n]), a = this._map.unproject(o), r = this._map.unproject(s);
                if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r]))return !1
            }
            return !0
        },
        _removeOtherTiles: function (t) {
            var e, i, n, o;
            for (o in this._tiles)e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
        },
        _removeTile: function (t) {
            var e = this._tiles[t];
            this.fire("tileunload", {
                tile: e,
                url: e.src
            }), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t]
        },
        _addTile: function (t, e) {
            var i = this._getTilePos(t), n = this._getTile();
            o.DomUtil.setPosition(n, i, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
        },
        _getZoomForUrl: function () {
            var t = this.options, e = this._map.getZoom();
            return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
        },
        _getTilePos: function (t) {
            var e = this._map.getPixelOrigin(), i = this._getTileSize();
            return t.multiplyBy(i).subtract(e)
        },
        getTileUrl: function (t) {
            return o.Util.template(this._url, o.extend({
                s: this._getSubdomain(t),
                z: t.z,
                x: t.x,
                y: t.y
            }, this.options))
        },
        _getWrapTileNum: function () {
            var t = this._map.options.crs, e = t.getSize(this._map.getZoom());
            return e.divideBy(this._getTileSize())._floor()
        },
        _adjustTilePoint: function (t) {
            var e = this._getWrapTileNum();
            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
        },
        _getSubdomain: function (t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
        },
        _getTile: function () {
            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                var t = this._unusedTiles.pop();
                return this._resetTile(t), t
            }
            return this._createTile()
        },
        _resetTile: function () {
        },
        _createTile: function () {
            var t = o.DomUtil.create("img", "leaflet-tile");
            return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
        },
        _loadTile: function (t, e) {
            t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
                tile: t,
                url: t.src
            })
        },
        _tileLoaded: function () {
            this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
        },
        _tileOnLoad: function () {
            var t = this._layer;
            this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                tile: this,
                url: this.src
            })), t._tileLoaded()
        },
        _tileOnError: function () {
            var t = this._layer;
            t.fire("tileerror", {tile: this, url: this.src});
            var e = t.options.errorTileUrl;
            e && (this.src = e), t._tileLoaded()
        }
    }), o.tileLayer = function (t, e) {
        return new o.TileLayer(t, e)
    }, o.TileLayer.WMS = o.TileLayer.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            version: "1.1.1",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1
        }, initialize: function (t, e) {
            this._url = t;
            var i = o.extend({}, this.defaultWmsParams), n = e.tileSize || this.options.tileSize;
            e.detectRetina && o.Browser.retina ? i.width = i.height = 2 * n : i.width = i.height = n;
            for (var s in e)this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
            this.wmsParams = i, o.setOptions(this, e)
        }, onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t)
        }, getTileUrl: function (t) {
            var e = this._map, i = this.options.tileSize, n = t.multiplyBy(i), s = n.add([i, i]), a = this._crs.project(e.unproject(n, t.z)), r = this._crs.project(e.unproject(s, t.z)), h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x, a.y].join(","), l = o.Util.template(this._url, {s: this._getSubdomain(t)});
            return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h
        }, setParams: function (t, e) {
            return o.extend(this.wmsParams, t), e || this.redraw(), this
        }
    }), o.tileLayer.wms = function (t, e) {
        return new o.TileLayer.WMS(t, e)
    }, o.TileLayer.Canvas = o.TileLayer.extend({
        options: {async: !1}, initialize: function (t) {
            o.setOptions(this, t)
        }, redraw: function () {
            this._map && (this._reset({hard: !0}), this._update());
            for (var t in this._tiles)this._redrawTile(this._tiles[t]);
            return this
        }, _redrawTile: function (t) {
            this.drawTile(t, t._tilePoint, this._map._zoom)
        }, _createTile: function () {
            var t = o.DomUtil.create("canvas", "leaflet-tile");
            return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t
        }, _loadTile: function (t, e) {
            t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
        }, drawTile: function () {
        }, tileDrawn: function (t) {
            this._tileOnLoad.call(t)
        }
    }), o.tileLayer.canvas = function (t) {
        return new o.TileLayer.Canvas(t)
    }, o.ImageOverlay = o.Class.extend({
        includes: o.Mixin.Events,
        options: {opacity: 1},
        initialize: function (t, e, i) {
            this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i)
        },
        onAdd: function (t) {
            this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
        },
        onRemove: function (t) {
            t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._updateOpacity(), this
        },
        bringToFront: function () {
            return this._image && this._map._panes.overlayPane.appendChild(this._image), this
        },
        bringToBack: function () {
            var t = this._map._panes.overlayPane;
            return this._image && t.insertBefore(this._image, t.firstChild), this
        },
        setUrl: function (t) {
            this._url = t, this._image.src = this._url
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _initImage: function () {
            this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, {
                galleryimg: "no",
                onselectstart: o.Util.falseFn,
                onmousemove: o.Util.falseFn,
                onload: o.bind(this._onImageLoad, this),
                src: this._url
            })
        },
        _animateZoom: function (t) {
            var e = this._map, i = this._image, n = e.getZoomScale(t.zoom), s = this._bounds.getNorthWest(), a = this._bounds.getSouthEast(), r = e._latLngToNewLayerPoint(s, t.zoom, t.center), h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r), l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));
            i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") "
        },
        _reset: function () {
            var t = this._image, e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()), i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
            o.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
        },
        _onImageLoad: function () {
            this.fire("load")
        },
        _updateOpacity: function () {
            o.DomUtil.setOpacity(this._image, this.options.opacity)
        }
    }), o.imageOverlay = function (t, e, i) {
        return new o.ImageOverlay(t, e, i)
    }, o.Icon = o.Class.extend({
        options: {className: ""}, initialize: function (t) {
            o.setOptions(this, t)
        }, createIcon: function (t) {
            return this._createIcon("icon", t)
        }, createShadow: function (t) {
            return this._createIcon("shadow", t)
        }, _createIcon: function (t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t)throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n;
            return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
        }, _setIconStyles: function (t, e) {
            var i, n = this.options, s = o.point(n[e + "Size"]);
            i = "shadow" === e ? o.point(n.shadowAnchor || n.iconAnchor) : o.point(n.iconAnchor), !i && s && (i = s.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
        }, _createImg: function (t, i) {
            return i = i || e.createElement("img"), i.src = t, i
        }, _getIconUrl: function (t) {
            return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
        }
    }), o.icon = function (t) {
        return new o.Icon(t)
    }, o.Icon.Default = o.Icon.extend({
        options: {
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        }, _getIconUrl: function (t) {
            var e = t + "Url";
            if (this.options[e])return this.options[e];
            o.Browser.retina && "icon" === t && (t += "-2x");
            var i = o.Icon.Default.imagePath;
            if (!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
            return i + "/marker-" + t + ".png"
        }
    }), o.Icon.Default.imagePath = function () {
        var t, i, n, o, s, a = e.getElementsByTagName("script"), r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
        for (t = 0, i = a.length; i > t; t++)if (n = a[t].src, o = n.match(r))return s = n.split(r)[0], (s ? s + "/" : "") + "images"
    }(), o.Marker = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            icon: new o.Icon.Default,
            title: "",
            alt: "",
            clickable: !0,
            draggable: !1,
            keyboard: !0,
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250
        },
        initialize: function (t, e) {
            o.setOptions(this, e), this._latlng = o.latLng(t)
        },
        onAdd: function (t) {
            this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        onRemove: function (t) {
            this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
                viewreset: this.update,
                zoomanim: this._animateZoom
            }, this), this._map = null
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t), this.update(), this.fire("move", {latlng: this._latlng})
        },
        setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t, this.update(), this
        },
        setIcon: function (t) {
            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
        },
        update: function () {
            return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng).round()), this
        },
        _initIcon: function () {
            var t = this.options, e = this._map, i = e.options.zoomAnimation && e.options.markerZoomAnimation, n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide", s = t.icon.createIcon(this._icon), a = !1;
            s !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (s.title = t.title), t.alt && (s.alt = t.alt)), o.DomUtil.addClass(s, n), t.keyboard && (s.tabIndex = "0"), this._icon = s, this._initInteraction(), t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex, this);
            var r = t.icon.createShadow(this._shadow), h = !1;
            r !== this._shadow && (this._removeShadow(), h = !0), r && o.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();
            var l = this._map._panes;
            a && l.markerPane.appendChild(this._icon), r && h && l.shadowPane.appendChild(this._shadow)
        },
        _removeIcon: function () {
            this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
        },
        _removeShadow: function () {
            this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
        },
        _setPos: function (t) {
            o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
        },
        _updateZIndex: function (t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e)
        },
        _initInteraction: function () {
            if (this.options.clickable) {
                var t = this._icon, e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(t, "keypress", this._onKeyPress, this);
                for (var i = 0; i < e.length; i++)o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
            }
        },
        _onMouseClick: function (t) {
            var e = this.dragging && this.dragging.moved();
            (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            })
        },
        _onKeyPress: function (t) {
            13 === t.keyCode && this.fire("click", {originalEvent: t, latlng: this._latlng})
        },
        _fireMouseEvent: function (t) {
            this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        },
        _updateOpacity: function () {
            o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
        },
        _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function () {
            this._updateZIndex(0)
        }
    }), o.marker = function (t, e) {
        return new o.Marker(t, e)
    }, o.DivIcon = o.Icon.extend({
        options: {iconSize: [12, 12], className: "leaflet-div-icon", html: !1},
        createIcon: function (t) {
            var i = t && "DIV" === t.tagName ? t : e.createElement("div"), n = this.options;
            return n.html !== !1 ? i.innerHTML = n.html : i.innerHTML = "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
        },
        createShadow: function () {
            return null
        }
    }), o.divIcon = function (t) {
        return new o.DivIcon(t)
    }, o.Map.mergeOptions({closePopupOnClick: !0}), o.Popup = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minWidth: 50,
            maxWidth: 300,
            autoPan: !0,
            closeButton: !0,
            offset: [0, 7],
            autoPanPadding: [5, 5],
            keepInView: !1,
            className: "",
            zoomAnimation: !0
        },
        initialize: function (t, e) {
            o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
        },
        onAdd: function (t) {
            this._map = t, this._container || this._initLayout();
            var e = t.options.fadeAnimation;
            e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {popup: this}), this._source && this._source.fire("popupopen", {popup: this})
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        openOn: function (t) {
            return t.openPopup(this), this
        },
        onRemove: function (t) {
            t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {popup: this}), this._source && this._source.fire("popupclose", {popup: this})
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
        },
        getContent: function () {
            return this._content
        },
        setContent: function (t) {
            return this._content = t, this.update(), this
        },
        update: function () {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        },
        _getEvents: function () {
            var t = {viewreset: this._updatePosition};
            return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
        },
        _close: function () {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function () {
            var t, e = "leaflet-popup", i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"), n = this._container = o.DomUtil.create("div", i);
            this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
            var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);
            o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent.disableScrollPropagation(this._contentNode), o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer)
        },
        _updateContent: function () {
            if (this._content) {
                if ("string" == typeof this._content)this._contentNode.innerHTML = this._content; else {
                    for (; this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);
                    this._contentNode.appendChild(this._content)
                }
                this.fire("contentupdate")
            }
        },
        _updateLayout: function () {
            var t = this._contentNode, e = t.style;
            e.width = "", e.whiteSpace = "nowrap";
            var i = t.offsetWidth;
            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
            var n = t.offsetHeight, s = this.options.maxHeight, a = "leaflet-popup-scrolled";
            s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth
        },
        _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng), e = this._animated, i = o.point(this.options.offset);
                e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
            }
        },
        _zoomAnimation: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            o.DomUtil.setPosition(this._container, e)
        },
        _adjustPan: function () {
            if (this.options.autoPan) {
                var t = this._map, e = this._container.offsetHeight, i = this._containerWidth, n = new o.Point(this._containerLeft, -e - this._containerBottom);
                this._animated && n._add(o.DomUtil.getPosition(this._container));
                var s = t.layerPointToContainerPoint(n), a = o.point(this.options.autoPanPadding), r = o.point(this.options.autoPanPaddingTopLeft || a), h = o.point(this.options.autoPanPaddingBottomRight || a), l = t.getSize(), u = 0, c = 0;
                s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
            }
        },
        _onCloseButtonClick: function (t) {
            this._close(), o.DomEvent.stop(t)
        }
    }), o.popup = function (t, e) {
        return new o.Popup(t, e)
    }, o.Map.include({
        openPopup: function (t, e, i) {
            if (this.closePopup(), !(t instanceof o.Popup)) {
                var n = t;
                t = new o.Popup(i).setLatLng(e).setContent(n)
            }
            return t._isOpen = !0, this._popup = t, this.addLayer(t)
        }, closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
        }
    }), o.Marker.include({
        openPopup: function () {
            return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
        }, closePopup: function () {
            return this._popup && this._popup._close(), this
        }, togglePopup: function () {
            return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
        }, bindPopup: function (t, e) {
            var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);
            return i = i.add(o.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = o.extend({offset: i}, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t, t._source = this) : this._popup = new o.Popup(e, this).setContent(t), this
        }, setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        }, unbindPopup: function () {
            return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
        }, getPopup: function () {
            return this._popup
        }, _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        }
    }), o.LayerGroup = o.Class.extend({
        initialize: function (t) {
            this._layers = {};
            var e, i;
            if (t)for (e = 0, i = t.length; i > e; e++)this.addLayer(t[e])
        }, addLayer: function (t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t, this._map && this._map.addLayer(t), this
        }, removeLayer: function (t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
        }, hasLayer: function (t) {
            return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
        }, clearLayers: function () {
            return this.eachLayer(this.removeLayer, this), this
        }, invoke: function (t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)i = this._layers[e], i[t] && i[t].apply(i, n);
            return this
        }, onAdd: function (t) {
            this._map = t, this.eachLayer(t.addLayer, t)
        }, onRemove: function (t) {
            this.eachLayer(t.removeLayer, t), this._map = null
        }, addTo: function (t) {
            return t.addLayer(this), this
        }, eachLayer: function (t, e) {
            for (var i in this._layers)t.call(e, this._layers[i]);
            return this
        }, getLayer: function (t) {
            return this._layers[t]
        }, getLayers: function () {
            var t = [];
            for (var e in this._layers)t.push(this._layers[e]);
            return t
        }, setZIndex: function (t) {
            return this.invoke("setZIndex", t)
        }, getLayerId: function (t) {
            return o.stamp(t)
        }
    }), o.layerGroup = function (t) {
        return new o.LayerGroup(t)
    }, o.FeatureGroup = o.LayerGroup.extend({
        includes: o.Mixin.Events,
        statics: {EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},
        addLayer: function (t) {
            return this.hasLayer(t) ? this : ("on" in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {layer: t}))
        },
        removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {layer: t})) : this
        },
        bindPopup: function (t, e) {
            return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
        },
        openPopup: function (t) {
            for (var e in this._layers) {
                this._layers[e].openPopup(t);
                break
            }
            return this
        },
        setStyle: function (t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function () {
            return this.invoke("bringToFront")
        },
        bringToBack: function () {
            return this.invoke("bringToBack")
        },
        getBounds: function () {
            var t = new o.LatLngBounds;
            return this.eachLayer(function (e) {
                t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
            }), t
        },
        _propagateEvent: function (t) {
            t = o.extend({layer: t.target, target: this}, t), this.fire(t.type, t)
        }
    }), o.featureGroup = function (t) {
        return new o.FeatureGroup(t)
    }, o.Path = o.Class.extend({
        includes: [o.Mixin.Events],
        statics: {
            CLIP_PADDING: function () {
                var e = o.Browser.mobile ? 1280 : 2e3, i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
                return Math.max(0, Math.min(.5, i))
            }()
        },
        options: {
            stroke: !0,
            color: "#0033ff",
            dashArray: null,
            lineCap: null,
            lineJoin: null,
            weight: 5,
            opacity: .5,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        onAdd: function (t) {
            this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        onRemove: function (t) {
            t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        projectLatlngs: function () {
        },
        setStyle: function (t) {
            return o.setOptions(this, t), this._container && this._updateStyle(), this
        },
        redraw: function () {
            return this._map && (this.projectLatlngs(), this._updatePath()), this
        }
    }), o.Map.include({
        _updatePathViewport: function () {
            var t = o.Path.CLIP_PADDING, e = this.getSize(), i = o.DomUtil.getPosition(this._mapPane), n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()), s = n.add(e.multiplyBy(1 + 2 * t)._round());
            this._pathViewport = new o.Bounds(n, s)
        }
    }), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
        statics: {SVG: o.Browser.svg},
        bringToFront: function () {
            var t = this._map._pathRoot, e = this._container;
            return e && t.lastChild !== e && t.appendChild(e), this
        },
        bringToBack: function () {
            var t = this._map._pathRoot, e = this._container, i = t.firstChild;
            return e && i !== e && t.insertBefore(e, i), this
        },
        getPathString: function () {
        },
        _createElement: function (t) {
            return e.createElementNS(o.Path.SVG_NS, t)
        },
        _initElements: function () {
            this._map._initPathRoot(), this._initPath(), this._initStyle()
        },
        _initPath: function () {
            this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
        },
        _initStyle: function () {
            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
        },
        _updateStyle: function () {
            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
        },
        _updatePath: function () {
            var t = this.getPathString();
            t || (t = "M0 0"), this._path.setAttribute("d", t)
        },
        _initEvents: function () {
            if (this.options.clickable) {
                (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);
                for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++)o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function (t) {
            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
        },
        _fireMouseEvent: function (t) {
            if (this.hasEventListeners(t.type)) {
                var e = this._map, i = e.mouseEventToContainerPoint(t), n = e.containerPointToLayerPoint(i), s = e.layerPointToLatLng(n);
                this.fire(t.type, {
                    latlng: s,
                    layerPoint: n,
                    containerPoint: i,
                    originalEvent: t
                }), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t)
            }
        }
    }), o.Map.include({
        _initPathRoot: function () {
            this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"),
                this.on({
                    zoomanim: this._animatePathZoom,
                    zoomend: this._endPathZoom
                })) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
        }, _animatePathZoom: function (t) {
            var e = this.getZoomScale(t.zoom), i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
            this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
        }, _endPathZoom: function () {
            this._pathZooming = !1
        }, _updateSvgViewport: function () {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport, e = t.min, i = t.max, n = i.x - e.x, s = i.y - e.y, a = this._pathRoot, r = this._panes.overlayPane;
                o.Browser.mobileWebkit && r.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute("height", s), a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")), o.Browser.mobileWebkit && r.appendChild(a)
            }
        }
    }), o.Path.include({
        bindPopup: function (t, e) {
            return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
        }, unbindPopup: function () {
            return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
        }, openPopup: function (t) {
            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({latlng: t})), this
        }, closePopup: function () {
            return this._popup && this._popup._close(), this
        }, _openPopup: function (t) {
            this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
        }
    }), o.Browser.vml = !o.Browser.svg && function () {
            try {
                var t = e.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (n) {
                return !1
            }
        }(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
        statics: {VML: !0, CLIP_PADDING: .02},
        _createElement: function () {
            try {
                return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
                    return e.createElement("<lvml:" + t + ' class="lvml">')
                }
            } catch (t) {
                return function (t) {
                    return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        _initPath: function () {
            var t = this._container = this._createElement("shape");
            o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
        },
        _initStyle: function () {
            this._updateStyle()
        },
        _updateStyle: function () {
            var t = this._stroke, e = this._fill, i = this.options, n = this._container;
            n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, i.dashArray ? t.dashStyle = o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : t.dashStyle = "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
        },
        _updatePath: function () {
            var t = this._container.style;
            t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
        }
    }), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
        _initPathRoot: function () {
            if (!this._pathRoot) {
                var t = this._pathRoot = e.createElement("div");
                t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
            }
        }
    }), o.Browser.canvas = function () {
        return !!e.createElement("canvas").getContext
    }(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
        statics: {
            CANVAS: !0,
            SVG: !1
        }, redraw: function () {
            return this._map && (this.projectLatlngs(), this._requestUpdate()), this
        }, setStyle: function (t) {
            return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
        }, onRemove: function (t) {
            t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
        }, _requestUpdate: function () {
            this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
        }, _fireMapMoveEnd: function () {
            o.Path._updateRequest = null, this.fire("moveend")
        }, _initElements: function () {
            this._map._initPathRoot(), this._ctx = this._map._canvasCtx
        }, _updateStyle: function () {
            var t = this.options;
            t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color), t.lineCap && (this._ctx.lineCap = t.lineCap), t.lineJoin && (this._ctx.lineJoin = t.lineJoin)
        }, _drawPath: function () {
            var t, e, i, n, s, a;
            for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
                for (e = 0, n = this._parts[t].length; n > e; e++)s = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](s.x, s.y);
                this instanceof o.Polygon && this._ctx.closePath()
            }
        }, _checkIfEmpty: function () {
            return !this._parts.length
        }, _updatePath: function () {
            if (!this._checkIfEmpty()) {
                var t = this._ctx, e = this.options;
                this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule || "evenodd")), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
            }
        }, _initEvents: function () {
            this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click dblclick contextmenu", this._fireMouseEvent, this))
        }, _fireMouseEvent: function (t) {
            this._containsPoint(t.layerPoint) && this.fire(t.type, t)
        }, _onMouseMove: function (t) {
            this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
        }
    }), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
        _initPathRoot: function () {
            var t, i = this._pathRoot;
            i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
        }, _updateCanvasViewport: function () {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport, e = t.min, i = t.max.subtract(e), n = this._pathRoot;
                o.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
            }
        }
    }), o.LineUtil = {
        simplify: function (t, e) {
            if (!e || !t.length)return t.slice();
            var i = e * e;
            return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
        }, pointToSegmentDistance: function (t, e, i) {
            return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
        }, closestPointOnSegment: function (t, e, i) {
            return this._sqClosestPointOnSegment(t, e, i)
        }, _simplifyDP: function (t, e) {
            var n = t.length, o = typeof Uint8Array != i + "" ? Uint8Array : Array, s = new o(n);
            s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
            var a, r = [];
            for (a = 0; n > a; a++)s[a] && r.push(t[a]);
            return r
        }, _simplifyDPStep: function (t, e, i, n, o) {
            var s, a, r, h = 0;
            for (a = n + 1; o - 1 >= a; a++)r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a, h = r);
            h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
        }, _reducePoints: function (t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++)this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
            return s - 1 > o && i.push(t[s - 1]), i
        }, clipSegment: function (t, e, i, n) {
            var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i), h = this._getBitCode(e, i);
            for (this._lastCode = h; ;) {
                if (!(r | h))return [t, e];
                if (r & h)return !1;
                o = r || h, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, h = a)
            }
        }, _getEdgeIntersection: function (t, e, i, n) {
            var s = e.x - t.x, a = e.y - t.y, r = n.min, h = n.max;
            return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a, r.y) : 2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x, t.y + a * (r.x - t.x) / s) : void 0
        }, _getBitCode: function (t, e) {
            var i = 0;
            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
        }, _sqDist: function (t, e) {
            var i = e.x - t.x, n = e.y - t.y;
            return i * i + n * n
        }, _sqClosestPointOnSegment: function (t, e, i, n) {
            var s, a = e.x, r = e.y, h = i.x - a, l = i.y - r, u = h * h + l * l;
            return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s, r += l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r)
        }
    }, o.Polyline = o.Path.extend({
        initialize: function (t, e) {
            o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
        }, options: {smoothFactor: 1, noClip: !1}, projectLatlngs: function () {
            this._originalPoints = [];
            for (var t = 0, e = this._latlngs.length; e > t; t++)this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
        }, getPathString: function () {
            for (var t = 0, e = this._parts.length, i = ""; e > t; t++)i += this._getPathPartStr(this._parts[t]);
            return i
        }, getLatLngs: function () {
            return this._latlngs
        }, setLatLngs: function (t) {
            return this._latlngs = this._convertLatLngs(t), this.redraw()
        }, addLatLng: function (t) {
            return this._latlngs.push(o.latLng(t)), this.redraw()
        }, spliceLatLngs: function () {
            var t = [].splice.apply(this._latlngs, arguments);
            return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
        }, closestLayerPoint: function (t) {
            for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++)for (var l = s[r], u = 1, c = l.length; c > u; u++) {
                e = l[u - 1], i = l[u];
                var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                n > d && (n = d, a = o.LineUtil._sqClosestPointOnSegment(t, e, i))
            }
            return a && (a.distance = Math.sqrt(n)), a
        }, getBounds: function () {
            return new o.LatLngBounds(this.getLatLngs())
        }, _convertLatLngs: function (t, e) {
            var i, n, s = e ? t : [];
            for (i = 0, n = t.length; n > i; i++) {
                if (o.Util.isArray(t[i]) && "number" != typeof t[i][0])return;
                s[i] = o.latLng(t[i])
            }
            return s
        }, _initEvents: function () {
            o.Path.prototype._initEvents.call(this)
        }, _getPathPartStr: function (t) {
            for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++)e = t[n], i && e._round(), a += (n ? "L" : "M") + e.x + " " + e.y;
            return a
        }, _clipPoints: function () {
            var t, e, i, n = this._originalPoints, s = n.length;
            if (this.options.noClip)return void(this._parts = [n]);
            this._parts = [];
            var a = this._parts, r = this._map._pathViewport, h = o.LineUtil;
            for (t = 0, e = 0; s - 1 > t; t++)i = h.clipSegment(n[t], n[t + 1], r, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++))
        }, _simplifyPoints: function () {
            for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++)t[i] = e.simplify(t[i], this.options.smoothFactor)
        }, _updatePath: function () {
            this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
        }
    }), o.polyline = function (t, e) {
        return new o.Polyline(t, e)
    }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e) {
        var i, n, s, a, r, h, l, u, c, d = [1, 4, 2, 8], p = o.LineUtil;
        for (n = 0, l = t.length; l > n; n++)t[n]._code = p._getBitCode(t[n], e);
        for (a = 0; 4 > a; a++) {
            for (u = d[a], i = [], n = 0, l = t.length, s = l - 1; l > n; s = n++)r = t[n], h = t[s], r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
            t = i
        }
        return t
    }, o.Polygon = o.Polyline.extend({
        options: {fill: !0}, initialize: function (t, e) {
            o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
        }, _initWithHoles: function (t) {
            var e, i, n;
            if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++)n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
            t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
        }, projectLatlngs: function () {
            if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                var t, e, i, n;
                for (t = 0, i = this._holes.length; i > t; t++)for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++)this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
            }
        }, setLatLngs: function (t) {
            return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t)
        }, _clipPoints: function () {
            var t = this._originalPoints, e = [];
            if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                for (var i = 0, n = this._parts.length; n > i; i++) {
                    var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                    s.length && e.push(s)
                }
                this._parts = e
            }
        }, _getPathPartStr: function (t) {
            var e = o.Polyline.prototype._getPathPartStr.call(this, t);
            return e + (o.Browser.svg ? "z" : "x")
        }
    }), o.polygon = function (t, e) {
        return new o.Polygon(t, e)
    }, function () {
        function t(t) {
            return o.FeatureGroup.extend({
                initialize: function (t, e) {
                    this._layers = {}, this._options = e, this.setLatLngs(t)
                }, setLatLngs: function (e) {
                    var i = 0, n = e.length;
                    for (this.eachLayer(function (t) {
                        n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                    }, this); n > i;)this.addLayer(new t(e[i++], this._options));
                    return this
                }, getLatLngs: function () {
                    var t = [];
                    return this.eachLayer(function (e) {
                        t.push(e.getLatLngs())
                    }), t
                }
            })
        }

        o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function (t, e) {
            return new o.MultiPolyline(t, e)
        }, o.multiPolygon = function (t, e) {
            return new o.MultiPolygon(t, e)
        }
    }(), o.Rectangle = o.Polygon.extend({
        initialize: function (t, e) {
            o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        }, setBounds: function (t) {
            this.setLatLngs(this._boundsToLatLngs(t))
        }, _boundsToLatLngs: function (t) {
            return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    }), o.rectangle = function (t, e) {
        return new o.Rectangle(t, e)
    }, o.Circle = o.Path.extend({
        initialize: function (t, e, i) {
            o.Path.prototype.initialize.call(this, i), this._latlng = o.latLng(t), this._mRadius = e
        }, options: {fill: !0}, setLatLng: function (t) {
            return this._latlng = o.latLng(t), this.redraw()
        }, setRadius: function (t) {
            return this._mRadius = t, this.redraw()
        }, projectLatlngs: function () {
            var t = this._getLngRadius(), e = this._latlng, i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
            this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
        }, getBounds: function () {
            var t = this._getLngRadius(), e = this._mRadius / 40075017 * 360, i = this._latlng;
            return new o.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
        }, getLatLng: function () {
            return this._latlng
        }, getPathString: function () {
            var t = this._point, e = this._radius;
            return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
        }, getRadius: function () {
            return this._mRadius
        }, _getLatRadius: function () {
            return this._mRadius / 40075017 * 360
        }, _getLngRadius: function () {
            return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
        }, _checkIfEmpty: function () {
            if (!this._map)return !1;
            var t = this._map._pathViewport, e = this._radius, i = this._point;
            return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
        }
    }), o.circle = function (t, e, i) {
        return new o.Circle(t, e, i)
    }, o.CircleMarker = o.Circle.extend({
        options: {radius: 10, weight: 2}, initialize: function (t, e) {
            o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
        }, projectLatlngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng)
        }, _updateStyle: function () {
            o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
        }, setLatLng: function (t) {
            return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
        }, setRadius: function (t) {
            return this.options.radius = this._radius = t, this.redraw()
        }, getRadius: function () {
            return this._radius
        }
    }), o.circleMarker = function (t, e) {
        return new o.CircleMarker(t, e)
    }, o.Polyline.include(o.Path.CANVAS ? {
        _containsPoint: function (t, e) {
            var i, n, s, a, r, h, l, u = this.options.weight / 2;
            for (o.Browser.touch && (u += 10), i = 0, a = this._parts.length; a > i; i++)for (l = this._parts[i], n = 0, r = l.length, s = r - 1; r > n; s = n++)if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]), u >= h))return !0;
            return !1
        }
    } : {}), o.Polygon.include(o.Path.CANVAS ? {
        _containsPoint: function (t) {
            var e, i, n, s, a, r, h, l, u = !1;
            if (o.Polyline.prototype._containsPoint.call(this, t, !0))return !0;
            for (s = 0, h = this._parts.length; h > s; s++)for (e = this._parts[s], a = 0, l = e.length, r = l - 1; l > a; r = a++)i = e[a], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
            return u
        }
    } : {}), o.Circle.include(o.Path.CANVAS ? {
        _drawPath: function () {
            var t = this._point;
            this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
        }, _containsPoint: function (t) {
            var e = this._point, i = this.options.stroke ? this.options.weight / 2 : 0;
            return t.distanceTo(e) <= this._radius + i
        }
    } : {}), o.CircleMarker.include(o.Path.CANVAS ? {
        _updateStyle: function () {
            o.Path.prototype._updateStyle.call(this)
        }
    } : {}), o.GeoJSON = o.FeatureGroup.extend({
        initialize: function (t, e) {
            o.setOptions(this, e), this._layers = {}, t && this.addData(t)
        }, addData: function (t) {
            var e, i, n, s = o.Util.isArray(t) ? t : t.features;
            if (s) {
                for (e = 0, i = s.length; i > e; e++)n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(s[e]);
                return this
            }
            var a = this.options;
            if (!a.filter || a.filter(t)) {
                var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
                return r.feature = o.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), a.onEachFeature && a.onEachFeature(t, r), this.addLayer(r)
            }
        }, resetStyle: function (t) {
            var e = this.options.style;
            e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
        }, setStyle: function (t) {
            this.eachLayer(function (e) {
                this._setLayerStyle(e, t)
            }, this)
        }, _setLayerStyle: function (t, e) {
            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
        }
    }), o.extend(o.GeoJSON, {
        geometryToLayer: function (t, e, i, n) {
            var s, a, r, h, l = "Feature" === t.type ? t.geometry : t, u = l.coordinates, c = [];
            switch (i = i || this.coordsToLatLng, l.type) {
                case"Point":
                    return s = i(u), e ? e(t, s) : new o.Marker(s);
                case"MultiPoint":
                    for (r = 0, h = u.length; h > r; r++)s = i(u[r]), c.push(e ? e(t, s) : new o.Marker(s));
                    return new o.FeatureGroup(c);
                case"LineString":
                    return a = this.coordsToLatLngs(u, 0, i), new o.Polyline(a, n);
                case"Polygon":
                    if (2 === u.length && !u[1].length)throw new Error("Invalid GeoJSON object.");
                    return a = this.coordsToLatLngs(u, 1, i), new o.Polygon(a, n);
                case"MultiLineString":
                    return a = this.coordsToLatLngs(u, 1, i), new o.MultiPolyline(a, n);
                case"MultiPolygon":
                    return a = this.coordsToLatLngs(u, 2, i), new o.MultiPolygon(a, n);
                case"GeometryCollection":
                    for (r = 0, h = l.geometries.length; h > r; r++)c.push(this.geometryToLayer({
                        geometry: l.geometries[r],
                        type: "Feature",
                        properties: t.properties
                    }, e, i, n));
                    return new o.FeatureGroup(c);
                default:
                    throw new Error("Invalid GeoJSON object.")
            }
        }, coordsToLatLng: function (t) {
            return new o.LatLng(t[1], t[0], t[2])
        }, coordsToLatLngs: function (t, e, i) {
            var n, o, s, a = [];
            for (o = 0, s = t.length; s > o; o++)n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
            return a
        }, latLngToCoords: function (t) {
            var e = [t.lng, t.lat];
            return t.alt !== i && e.push(t.alt), e
        }, latLngsToCoords: function (t) {
            for (var e = [], i = 0, n = t.length; n > i; i++)e.push(o.GeoJSON.latLngToCoords(t[i]));
            return e
        }, getFeature: function (t, e) {
            return t.feature ? o.extend({}, t.feature, {geometry: e}) : o.GeoJSON.asFeature(e)
        }, asFeature: function (t) {
            return "Feature" === t.type ? t : {type: "Feature", properties: {}, geometry: t}
        }
    });
    var a = {
        toGeoJSON: function () {
            return o.GeoJSON.getFeature(this, {type: "Point", coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())})
        }
    };
    o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({
        toGeoJSON: function () {
            return o.GeoJSON.getFeature(this, {
                type: "LineString",
                coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
            })
        }
    }), o.Polygon.include({
        toGeoJSON: function () {
            var t, e, i, n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
            if (n[0].push(n[0][0]), this._holes)for (t = 0, e = this._holes.length; e > t; t++)i = o.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
            return o.GeoJSON.getFeature(this, {type: "Polygon", coordinates: n})
        }
    }), function () {
        function t(t) {
            return function () {
                var e = [];
                return this.eachLayer(function (t) {
                    e.push(t.toGeoJSON().geometry.coordinates)
                }), o.GeoJSON.getFeature(this, {type: t, coordinates: e})
            }
        }

        o.MultiPolyline.include({toGeoJSON: t("MultiLineString")}), o.MultiPolygon.include({toGeoJSON: t("MultiPolygon")}), o.LayerGroup.include({
            toGeoJSON: function () {
                var e, i = this.feature && this.feature.geometry, n = [];
                if (i && "MultiPoint" === i.type)return t("MultiPoint").call(this);
                var s = i && "GeometryCollection" === i.type;
                return this.eachLayer(function (t) {
                    t.toGeoJSON && (e = t.toGeoJSON(), n.push(s ? e.geometry : o.GeoJSON.asFeature(e)))
                }), s ? o.GeoJSON.getFeature(this, {
                    geometries: n,
                    type: "GeometryCollection"
                }) : {type: "FeatureCollection", features: n}
            }
        })
    }(), o.geoJson = function (t, e) {
        return new o.GeoJSON(t, e)
    }, o.DomEvent = {
        addListener: function (t, e, i, n) {
            var s, a, r, h = o.stamp(i), l = "_leaflet_" + e + h;
            return t[l] ? this : (s = function (e) {
                return i.call(n || t, e || o.DomEvent._getEvent())
            }, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s, r = "mouseenter" === e ? "mouseover" : "mouseout", s = function (e) {
                return o.DomEvent._checkMouse(t, e) ? a(e) : void 0
            }, t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s, s = function (t) {
                return o.DomEvent._filterClick(t, a)
            }, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent" in t && t.attachEvent("on" + e, s), t[l] = s, this))
        }, removeListener: function (t, e, i) {
            var n = o.stamp(i), s = "_leaflet_" + e + n, a = t[s];
            return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[s] = null, this) : this
        }, stopPropagation: function (t) {
            return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this
        }, disableScrollPropagation: function (t) {
            var e = o.DomEvent.stopPropagation;
            return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
        }, disableClickPropagation: function (t) {
            for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--)o.DomEvent.on(t, o.Draggable.START[i], e);
            return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e)
        }, preventDefault: function (t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        }, stop: function (t) {
            return o.DomEvent.preventDefault(t).stopPropagation(t)
        }, getMousePosition: function (t, e) {
            if (!e)return new o.Point(t.clientX, t.clientY);
            var i = e.getBoundingClientRect();
            return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
        }, getWheelDelta: function (t) {
            var e = 0;
            return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
        }, _skipEvents: {}, _fakeStop: function (t) {
            o.DomEvent._skipEvents[t.type] = !0
        }, _skipped: function (t) {
            var e = this._skipEvents[t.type];
            return this._skipEvents[t.type] = !1, e
        }, _checkMouse: function (t, e) {
            var i = e.relatedTarget;
            if (!i)return !0;
            try {
                for (; i && i !== t;)i = i.parentNode
            } catch (n) {
                return !1
            }
            return i !== t
        }, _getEvent: function () {
            var e = t.event;
            if (!e)for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);)i = i.caller;
            return e
        }, _filterClick: function (t, e) {
            var i = t.timeStamp || t.originalEvent.timeStamp, n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
            return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, e(t))
        }
    }, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
        includes: o.Mixin.Events,
        statics: {
            START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
            END: {mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend"},
            MOVE: {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            }
        },
        initialize: function (t, e) {
            this._element = t, this._dragStartTarget = e || t
        },
        enable: function () {
            if (!this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--)o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !0
            }
        },
        disable: function () {
            if (this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--)o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !1, this._moved = !1
            }
        },
        _onDown: function (t) {
            if (this._moved = !1, !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.DomEvent.stopPropagation(t), o.Draggable._disabled || (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
                var i = t.touches ? t.touches[0] : t;
                this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this)
            }
        },
        _onMove: function (t) {
            if (t.touches && t.touches.length > 1)return void(this._moved = !0);
            var i = t.touches && 1 === t.touches.length ? t.touches[0] : t, n = new o.Point(i.clientX, i.clientY), s = n.subtract(this._startPoint);
            (s.x || s.y) && (o.Browser.touch && Math.abs(s.x) + Math.abs(s.y) < 3 || (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
        },
        _updatePosition: function () {
            this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
        },
        _onUp: function () {
            o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
            for (var t in o.Draggable.MOVE)o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove).off(e, o.Draggable.END[t], this._onUp);
            o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {distance: this._newPos.distanceTo(this._startPos)})), this._moving = !1
        }
    }), o.Handler = o.Class.extend({
        initialize: function (t) {
            this._map = t
        }, enable: function () {
            this._enabled || (this._enabled = !0, this.addHooks())
        }, disable: function () {
            this._enabled && (this._enabled = !1, this.removeHooks())
        }, enabled: function () {
            return !!this._enabled
        }
    }), o.Map.mergeOptions({
        dragging: !0,
        inertia: !o.Browser.android23,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        inertiaThreshold: o.Browser.touch ? 32 : 18,
        easeLinearity: .25,
        worldCopyJump: !1
    }), o.Map.Drag = o.Handler.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
            }
            this._draggable.enable()
        }, removeHooks: function () {
            this._draggable.disable()
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, _onDragStart: function () {
            var t = this._map;
            t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        }, _onDrag: function () {
            if (this._map.options.inertia) {
                var t = this._lastTime = +new Date, e = this._lastPos = this._draggable._newPos;
                this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
            }
            this._map.fire("move").fire("drag")
        }, _onViewReset: function () {
            var t = this._map.getSize()._divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
        }, _onPreDrag: function () {
            var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i, a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._newPos.x = a
        }, _onDragEnd: function (t) {
            var e = this._map, i = e.options, n = +new Date - this._lastTime, s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
            if (e.fire("dragend", t), s)e.fire("moveend"); else {
                var a = this._lastPos.subtract(this._positions[0]), r = (this._lastTime + n - this._times[0]) / 1e3, h = i.easeLinearity, l = a.multiplyBy(h / r), u = l.distanceTo([0, 0]), c = Math.min(i.inertiaMaxSpeed, u), d = l.multiplyBy(c / u), p = c / (i.inertiaDeceleration * h), _ = d.multiplyBy(-p / 2).round();
                _.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function () {
                    e.panBy(_, {duration: p, easeLinearity: h, noMoveStart: !0})
                })) : e.fire("moveend")
            }
        }
    }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({doubleClickZoom: !0}), o.Map.DoubleClickZoom = o.Handler.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        }, removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        }, _onDoubleClick: function (t) {
            var e = this._map, i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
        }
    }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({scrollWheelZoom: !0}), o.Map.ScrollWheelZoom = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0
        }, removeHooks: function () {
            o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault)
        }, _onWheelScroll: function (t) {
            var e = o.DomEvent.getWheelDelta(t);
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var i = Math.max(40 - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), i), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t)
        }, _performZoom: function () {
            var t = this._map, e = this._delta, i = t.getZoom();
            e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
        }
    }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
        _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
        _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
        addDoubleTapListener: function (t, i, n) {
            function s(t) {
                var e;
                if (o.Browser.pointer ? (_.push(t.pointerId), e = _.length) : e = t.touches.length, !(e > 1)) {
                    var i = Date.now(), n = i - (r || i);
                    h = t.touches ? t.touches[0] : t, l = n > 0 && u >= n, r = i
                }
            }

            function a(t) {
                if (o.Browser.pointer) {
                    var e = _.indexOf(t.pointerId);
                    if (-1 === e)return;
                    _.splice(e, 1)
                }
                if (l) {
                    if (o.Browser.pointer) {
                        var n, s = {};
                        for (var a in h)n = h[a], "function" == typeof n ? s[a] = n.bind(h) : s[a] = n;
                        h = s
                    }
                    h.type = "dblclick", i(h), r = null
                }
            }

            var r, h, l = !1, u = 250, c = "_leaflet_", d = this._touchstart, p = this._touchend, _ = [];
            t[c + d + n] = s, t[c + p + n] = a;
            var m = o.Browser.pointer ? e.documentElement : t;
            return t.addEventListener(d, s, !1), m.addEventListener(p, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1), this
        },
        removeDoubleTapListener: function (t, i) {
            var n = "_leaflet_";
            return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this
        }
    }), o.extend(o.DomEvent, {
        POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
        POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
        POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
        POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
        _pointers: [],
        _pointerDocumentListener: !1,
        addPointerListener: function (t, e, i, n) {
            switch (e) {
                case"touchstart":
                    return this.addPointerListenerStart(t, e, i, n);
                case"touchend":
                    return this.addPointerListenerEnd(t, e, i, n);
                case"touchmove":
                    return this.addPointerListenerMove(t, e, i, n);
                default:
                    throw"Unknown touch event type"
            }
        },
        addPointerListenerStart: function (t, i, n, s) {
            var a = "_leaflet_", r = this._pointers, h = function (t) {
                o.DomEvent.preventDefault(t);
                for (var e = !1, i = 0; i < r.length; i++)if (r[i].pointerId === t.pointerId) {
                    e = !0;
                    break
                }
                e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], n(t)
            };
            if (t[a + "touchstart" + s] = h, t.addEventListener(this.POINTER_DOWN, h, !1), !this._pointerDocumentListener) {
                var l = function (t) {
                    for (var e = 0; e < r.length; e++)if (r[e].pointerId === t.pointerId) {
                        r.splice(e, 1);
                        break
                    }
                };
                e.documentElement.addEventListener(this.POINTER_UP, l, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, l, !1), this._pointerDocumentListener = !0
            }
            return this
        },
        addPointerListenerMove: function (t, e, i, n) {
            function o(t) {
                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                    for (var e = 0; e < a.length; e++)if (a[e].pointerId === t.pointerId) {
                        a[e] = t;
                        break
                    }
                    t.touches = a.slice(), t.changedTouches = [t], i(t)
                }
            }

            var s = "_leaflet_", a = this._pointers;
            return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
        },
        addPointerListenerEnd: function (t, e, i, n) {
            var o = "_leaflet_", s = this._pointers, a = function (t) {
                for (var e = 0; e < s.length; e++)if (s[e].pointerId === t.pointerId) {
                    s.splice(e, 1);
                    break
                }
                t.touches = s.slice(), t.changedTouches = [t], i(t)
            };
            return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
        },
        removePointerListener: function (t, e, i) {
            var n = "_leaflet_", o = t[n + e + i];
            switch (e) {
                case"touchstart":
                    t.removeEventListener(this.POINTER_DOWN, o, !1);
                    break;
                case"touchmove":
                    t.removeEventListener(this.POINTER_MOVE, o, !1);
                    break;
                case"touchend":
                    t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
            }
            return this
        }
    }), o.Map.mergeOptions({
        touchZoom: o.Browser.touch && !o.Browser.android23,
        bounceAtZoomLimits: !0
    }), o.Map.TouchZoom = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
        }, removeHooks: function () {
            o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
        }, _onTouchStart: function (t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var n = i.mouseEventToLayerPoint(t.touches[0]), s = i.mouseEventToLayerPoint(t.touches[1]), a = i._getCenterLayerPoint();
                this._startCenter = n.add(s)._divideBy(2), this._startDist = n.distanceTo(s), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t)
            }
        }, _onTouchMove: function (t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = e.mouseEventToLayerPoint(t.touches[0]), n = e.mouseEventToLayerPoint(t.touches[1]);
                this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t))
            }
        }, _updateOnMove: function () {
            var t = this._map, e = this._getScaleOrigin(), i = t.layerPointToLatLng(e), n = t.getScaleZoom(this._scale);
            t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
        }, _onTouchEnd: function () {
            if (!this._moved || !this._zooming)return void(this._zooming = !1);
            var t = this._map;
            this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
            var i = this._getScaleOrigin(), n = t.layerPointToLatLng(i), s = t.getZoom(), a = t.getScaleZoom(this._scale) - s, r = a > 0 ? Math.ceil(a) : Math.floor(a), h = t._limitZoom(s + r), l = t.getZoomScale(h) / this._scale;
            t._animateZoom(n, h, i, l)
        }, _getScaleOrigin: function () {
            var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
            return this._startCenter.add(t)
        }
    }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
        tap: !0,
        tapTolerance: 15
    }), o.Map.Tap = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
        }, removeHooks: function () {
            o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
        }, _onDown: function (t) {
            if (t.touches) {
                if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1)return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0], n = i.target;
                this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
            }
        }, _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0], n = i.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", i)
            }
        }, _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        }, _onMove: function (t) {
            var e = t.touches[0];
            this._newPos = new o.Point(e.clientX, e.clientY)
        }, _simulateEvent: function (i, n) {
            var o = e.createEvent("MouseEvents");
            o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o)
        }
    }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({boxZoom: !0}), o.Map.BoxZoom = o.Handler.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
        }, addHooks: function () {
            o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
        }, removeHooks: function () {
            o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
        }, moved: function () {
            return this._moved
        }, _onMouseDown: function (t) {
            return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this))
        }, _onMouseMove: function (t) {
            this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
            var e = this._startLayerPoint, i = this._box, n = this._map.mouseEventToLayerPoint(t), s = n.subtract(e), a = new o.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
            o.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(s.y) - 4) + "px"
        }, _finish: function () {
            this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
        }, _onMouseUp: function (t) {
            this._finish();
            var e = this._map, i = e.mouseEventToLayerPoint(t);
            if (!this._startLayerPoint.equals(i)) {
                var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                e.fitBounds(n), e.fire("boxzoomend", {boxZoomBounds: n})
            }
        }, _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
        keyboard: !0,
        keyboardPanOffset: 80,
        keyboardZoomOffset: 1
    }), o.Map.Keyboard = o.Handler.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 173]
        }, initialize: function (t) {
            this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
        }, addHooks: function () {
            var t = this._map._container;
            -1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
        }, removeHooks: function () {
            this._removeHooks();
            var t = this._map._container;
            o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
        }, _onMouseDown: function () {
            if (!this._focused) {
                var i = e.body, n = e.documentElement, o = i.scrollTop || n.scrollTop, s = i.scrollLeft || n.scrollLeft;
                this._map._container.focus(), t.scrollTo(s, o)
            }
        }, _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        }, _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        }, _setPanOffset: function (t) {
            var e, i, n = this._panKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.left.length; i > e; e++)n[o.left[e]] = [-1 * t, 0];
            for (e = 0, i = o.right.length; i > e; e++)n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; i > e; e++)n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; i > e; e++)n[o.up[e]] = [0, -1 * t]
        }, _setZoomOffset: function (t) {
            var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; i > e; e++)n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; i > e; e++)n[o.zoomOut[e]] = -t
        }, _addHooks: function () {
            o.DomEvent.on(e, "keydown", this._onKeyDown, this)
        }, _removeHooks: function () {
            o.DomEvent.off(e, "keydown", this._onKeyDown, this)
        }, _onKeyDown: function (t) {
            var e = t.keyCode, i = this._map;
            if (e in this._panKeys) {
                if (i._panAnim && i._panAnim._inProgress)return;
                i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
            } else {
                if (!(e in this._zoomKeys))return;
                i.setZoom(i.getZoom() + this._zoomKeys[e])
            }
            o.DomEvent.stop(t)
        }
    }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
        initialize: function (t) {
            this._marker = t
        }, addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
        }, removeHooks: function () {
            this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, _onDragStart: function () {
            this._marker.closePopup().fire("movestart").fire("dragstart")
        }, _onDrag: function () {
            var t = this._marker, e = t._shadow, i = o.DomUtil.getPosition(t._icon), n = t._map.layerPointToLatLng(i);
            e && o.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {latlng: n}).fire("drag")
        }, _onDragEnd: function (t) {
            this._marker.fire("moveend").fire("dragend", t)
        }
    }), o.Control = o.Class.extend({
        options: {position: "topright"}, initialize: function (t) {
            o.setOptions(this, t)
        }, getPosition: function () {
            return this.options.position
        }, setPosition: function (t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
        }, getContainer: function () {
            return this._container
        }, addTo: function (t) {
            this._map = t;
            var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
            return o.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
        }, removeFrom: function (t) {
            var e = this.getPosition(), i = t._controlCorners[e];
            return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
        }, _refocusOnMap: function () {
            this._map && this._map.getContainer().focus()
        }
    }), o.control = function (t) {
        return new o.Control(t)
    }, o.Map.include({
        addControl: function (t) {
            return t.addTo(this), this
        }, removeControl: function (t) {
            return t.removeFrom(this), this
        }, _initControlPos: function () {
            function t(t, s) {
                var a = i + t + " " + i + s;
                e[t + s] = o.DomUtil.create("div", a, n)
            }

            var e = this._controlCorners = {}, i = "leaflet-", n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        }, _clearControlPos: function () {
            this._container.removeChild(this._controlContainer)
        }
    }), o.Control.Zoom = o.Control.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "-",
            zoomOutTitle: "Zoom out"
        }, onAdd: function (t) {
            var e = "leaflet-control-zoom", i = o.DomUtil.create("div", e + " leaflet-bar");
            return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
        }, onRemove: function (t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        }, _zoomIn: function (t) {
            this._map.zoomIn(t.shiftKey ? 3 : 1)
        }, _zoomOut: function (t) {
            this._map.zoomOut(t.shiftKey ? 3 : 1)
        }, _createButton: function (t, e, i, n, s, a) {
            var r = o.DomUtil.create("a", i, n);
            r.innerHTML = t, r.href = "#", r.title = e;
            var h = o.DomEvent.stopPropagation;
            return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault).on(r, "click", s, a).on(r, "click", this._refocusOnMap, a), r
        }, _updateDisabled: function () {
            var t = this._map, e = "leaflet-disabled";
            o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
        }
    }), o.Map.mergeOptions({zoomControl: !0}), o.Map.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
    }), o.control.zoom = function (t) {
        return new o.Control.Zoom(t)
    }, o.Control.Attribution = o.Control.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        }, initialize: function (t) {
            o.setOptions(this, t), this._attributions = {}
        }, onAdd: function (t) {
            this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container);
            for (var e in t._layers)t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
        }, onRemove: function (t) {
            t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
        }, setPrefix: function (t) {
            return this.options.prefix = t, this._update(), this
        }, addAttribution: function (t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
        }, removeAttribution: function (t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
        }, _update: function () {
            if (this._map) {
                var t = [];
                for (var e in this._attributions)this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
            }
        }, _onLayerAdd: function (t) {
            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
        }, _onLayerRemove: function (t) {
            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
        }
    }), o.Map.mergeOptions({attributionControl: !0}), o.Map.addInitHook(function () {
        this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
    }), o.control.attribution = function (t) {
        return new o.Control.Attribution(t)
    }, o.Control.Scale = o.Control.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0,
            updateWhenIdle: !1
        }, onAdd: function (t) {
            this._map = t;
            var e = "leaflet-control-scale", i = o.DomUtil.create("div", e), n = this.options;
            return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
        }, onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        }, _addScales: function (t, e, i) {
            t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", i))
        }, _update: function () {
            var t = this._map.getBounds(), e = t.getCenter().lat, i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180), n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180, o = this._map.getSize(), s = this.options, a = 0;
            o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a)
        }, _updateScales: function (t, e) {
            t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
        }, _updateMetric: function (t) {
            var e = this._getRoundNum(t);
            this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
        }, _updateImperial: function (t) {
            var e, i, n, o = 3.2808399 * t, s = this._iScale;
            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
        }, _getScaleWidth: function (t) {
            return Math.round(this.options.maxWidth * t) - 10
        }, _getRoundNum: function (t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
            return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
        }
    }), o.control.scale = function (t) {
        return new o.Control.Scale(t)
    }, o.Control.Layers = o.Control.extend({
        options: {collapsed: !0, position: "topright", autoZIndex: !0},
        initialize: function (t, e, i) {
            o.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
            for (var n in t)this._addLayer(t[n], n);
            for (n in e)this._addLayer(e[n], n, !0)
        },
        onAdd: function (t) {
            return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
        },
        onRemove: function (t) {
            t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
        },
        addBaseLayer: function (t, e) {
            return this._addLayer(t, e), this._update(), this
        },
        addOverlay: function (t, e) {
            return this._addLayer(t, e, !0), this._update(), this
        },
        removeLayer: function (t) {
            var e = o.stamp(t);
            return delete this._layers[e], this._update(), this
        },
        _initLayout: function () {
            var t = "leaflet-control-layers", e = this._container = o.DomUtil.create("div", t);
            e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
            var i = this._form = o.DomUtil.create("form", t + "-list");
            if (this.options.collapsed) {
                o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
                n.href = "#", n.title = "Layers", o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click", this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this), o.DomEvent.on(i, "click", function () {
                    setTimeout(o.bind(this._onInputClick, this), 0)
                }, this), this._map.on("click", this._collapse, this)
            } else this._expand();
            this._baseLayersList = o.DomUtil.create("div", t + "-base", i), this._separator = o.DomUtil.create("div", t + "-separator", i), this._overlaysList = o.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
        },
        _addLayer: function (t, e, i) {
            var n = o.stamp(t);
            this._layers[n] = {
                layer: t,
                name: e,
                overlay: i
            }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
        },
        _update: function () {
            if (this._container) {
                this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                var t, e, i = !1, n = !1;
                for (t in this._layers)e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
                this._separator.style.display = n && i ? "" : "none"
            }
        },
        _onLayerChange: function (t) {
            var e = this._layers[o.stamp(t.layer)];
            if (e) {
                this._handlingClick || this._update();
                var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                i && this._map.fire(i, e)
            }
        },
        _createRadioElement: function (t, i) {
            var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
            i && (n += ' checked="checked"'), n += "/>";
            var o = e.createElement("div");
            return o.innerHTML = n, o.firstChild
        },
        _addItem: function (t) {
            var i, n = e.createElement("label"), s = this._map.hasLayer(t.layer);
            t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);
            var a = e.createElement("span");
            a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);
            var r = t.overlay ? this._overlaysList : this._baseLayersList;
            return r.appendChild(n), n
        },
        _onInputClick: function () {
            var t, e, i, n = this._form.getElementsByTagName("input"), o = n.length;
            for (this._handlingClick = !0, t = 0; o > t; t++)e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
            this._handlingClick = !1, this._refocusOnMap()
        },
        _expand: function () {
            o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
        },
        _collapse: function () {
            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
        }
    }), o.control.layers = function (t, e, i) {
        return new o.Control.Layers(t, e, i)
    }, o.PosAnimation = o.Class.extend({
        includes: o.Mixin.Events, run: function (t, e, i, n) {
            this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
        }, stop: function () {
            this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth))
        }, _onStep: function () {
            var t = this._getPos();
            return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
        }, _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/, _getPos: function () {
            var e, i, n, s = this._el, a = t.getComputedStyle(s);
            if (o.Browser.any3d) {
                if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe), !n)return;
                e = parseFloat(n[1]), i = parseFloat(n[2])
            } else e = parseFloat(a.left), i = parseFloat(a.top);
            return new o.Point(e, i, !0)
        }, _onTransitionEnd: function () {
            o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
        }
    }), o.Map.include({
        setView: function (t, e, n) {
            if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
                n.animate !== i && (n.zoom = o.extend({animate: n.animate}, n.zoom), n.pan = o.extend({animate: n.animate}, n.pan));
                var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
                if (s)return clearTimeout(this._sizeTimer), this
            }
            return this._resetView(t, e), this
        }, panBy: function (t, e) {
            if (t = o.point(t).round(), e = e || {}, !t.x && !t.y)return this;
            if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t);
                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else this._rawPanBy(t), this.fire("move").fire("moveend");
            return this
        }, _onPanTransitionStep: function () {
            this.fire("move")
        }, _onPanTransitionEnd: function () {
            o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
        }, _tryAnimatedPan: function (t, e) {
            var i = this._getCenterOffset(t)._floor();
            return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
        }
    }), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
        run: function (t, e, i, n) {
            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
        }, stop: function () {
            this._inProgress && (this._step(), this._complete())
        }, _animate: function () {
            this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
        }, _step: function () {
            var t = +new Date - this._startTime, e = 1e3 * this._duration;
            e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
        }, _runFrame: function (t) {
            var e = this._startPos.add(this._offset.multiplyBy(t));
            o.DomUtil.setPosition(this._el, e), this.fire("step")
        }, _complete: function () {
            o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
        }, _easeOut: function (t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }), o.Map.mergeOptions({
        zoomAnimation: !0,
        zoomAnimationThreshold: 4
    }), o.DomUtil.TRANSITION && o.Map.addInitHook(function () {
        this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
    }), o.Map.include(o.DomUtil.TRANSITION ? {
        _catchTransitionEnd: function (t) {
            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
        }, _nothingToAnimate: function () {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        }, _tryAnimatedZoom: function (t, e, i) {
            if (this._animatingZoom)return !0;
            if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)return !1;
            var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n), s = this._getCenterLayerPoint()._add(o);
            return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1
        }, _animateZoom: function (t, e, i, n, s, a, r) {
            r || (this._animatingZoom = !0), o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), o.Util.requestAnimFrame(function () {
                this.fire("zoomanim", {
                    center: t,
                    zoom: e,
                    origin: i,
                    scale: n,
                    delta: s,
                    backwards: a
                }), setTimeout(o.bind(this._onZoomTransitionEnd, this), 250)
            }, this)
        }, _onZoomTransitionEnd: function () {
            this._animatingZoom && (this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !1))
        }
    } : {}), o.TileLayer.include({
        _animateZoom: function (t) {
            this._animating || (this._animating = !0, this._prepareBgBuffer());
            var e = this._bgBuffer, i = o.DomUtil.TRANSFORM, n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i], s = o.DomUtil.getScaleString(t.scale, t.origin);
            e.style[i] = t.backwards ? s + " " + n : n + " " + s
        }, _endZoomAnim: function () {
            var t = this._tileContainer, e = this._bgBuffer;
            t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth);
            var i = this._map.getZoom();
            (i > this.options.maxZoom || i < this.options.minZoom) && this._clearBgBuffer(), this._animating = !1
        }, _clearBgBuffer: function () {
            var t = this._map;
            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "")
        }, _prepareBgBuffer: function () {
            var t = this._tileContainer, e = this._bgBuffer, i = this._getLoadedTilesPercentage(e), n = this._getLoadedTilesPercentage(t);
            return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
        }, _getLoadedTilesPercentage: function (t) {
            var e, i, n = t.getElementsByTagName("img"), o = 0;
            for (e = 0, i = n.length; i > e; e++)n[e].complete && o++;
            return o / i
        }, _stopLoadingImages: function (t) {
            var e, i, n, s = Array.prototype.slice.call(t.getElementsByTagName("img"));
            for (e = 0, i = s.length; i > e; e++)n = s[e], n.complete || (n.onload = o.Util.falseFn, n.onerror = o.Util.falseFn, n.src = o.Util.emptyImageUrl, n.parentNode.removeChild(n))
        }
    }), o.Map.include({
        _defaultLocateOptions: {
            watch: !1,
            setView: !1,
            maxZoom: 1 / 0,
            timeout: 1e4,
            maximumAge: 0,
            enableHighAccuracy: !1
        }, locate: function (t) {
            if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation)return this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }), this;
            var e = o.bind(this._handleGeolocationResponse, this), i = o.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
        }, stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
        }, _handleGeolocationError: function (t) {
            var e = t.code, i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
            })
        }, _handleGeolocationResponse: function (t) {
            var e = t.coords.latitude, i = t.coords.longitude, n = new o.LatLng(e, i), s = 180 * t.coords.accuracy / 40075017, a = s / Math.cos(o.LatLng.DEG_TO_RAD * e), r = o.latLngBounds([e - s, i - a], [e + s, i + a]), h = this._locateOptions;
            if (h.setView) {
                var l = Math.min(this.getBoundsZoom(r), h.maxZoom);
                this.setView(n, l)
            }
            var u = {latlng: n, bounds: r, timestamp: t.timestamp};
            for (var c in t.coords)"number" == typeof t.coords[c] && (u[c] = t.coords[c]);
            this.fire("locationfound", u)
        }
    })
}(window, document);
L.TileLayer.Grayscale = L.TileLayer.extend({
    options: {enableCanvas: !0}, initialize: function (t, e) {
        var a = document.createElement("canvas");
        a.getContext && a.getContext("2d") || (e.enableCanvas = !1), L.TileLayer.prototype.initialize.call(this, t, e)
    }, _loadTile: function (t, e) {
        t.setAttribute("crossorigin", "anonymous"), L.TileLayer.prototype._loadTile.call(this, t, e)
    }, _tileOnLoad: function () {
        if (this._layer.options.enableCanvas && !this.canvasContext) {
            var t = document.createElement("canvas");
            t.width = t.height = this._layer.options.tileSize, this.canvasContext = t.getContext("2d")
        }
        var e = this.canvasContext;
        if (e) {
            this.onload = null, e.drawImage(this, 0, 0);
            for (var a = e.getImageData(0, 0, this._layer.options.tileSize, this._layer.options.tileSize), i = a.data, n = 0, o = i.length; o > n; n += 4)i[n] = i[n + 1] = i[n + 2] = (3 * i[n] + 4 * i[n + 1] + i[n + 2]) / 8;
            e.putImageData(a, 0, 0), this.removeAttribute("crossorigin"), this.src = e.canvas.toDataURL()
        }
        L.TileLayer.prototype._tileOnLoad.call(this)
    }
}), L.tileLayer.grayscale = function (t, e) {
    return new L.TileLayer.Grayscale(t, e)
};
!function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return e(t, n)
    }) : "object" == typeof exports ? e(t, require("jquery")) : e(t, t.jQuery)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function n(t, e) {
        for (var n = t.length; --n;)if (+t[n] !== +e[n])return !1;
        return !0
    }

    function i(t) {
        var n = {range: !0, animate: !0};
        return "boolean" == typeof t ? n.animate = t : e.extend(n, t), n
    }

    function s(t, n, i, s, o, a, r, h, c) {
        this.elements = "array" === e.type(t) ? [+t[0], +t[2], +t[4], +t[1], +t[3], +t[5], 0, 0, 1] : [t, n, i, s, o, a, r || 0, h || 0, c || 1]
    }

    function o(t, e, n) {
        this.elements = [t, e, n]
    }

    function a(t, n) {
        if (!(this instanceof a))return new a(t, n);
        1 !== t.nodeType && e.error("Panzoom called on non-Element node"), e.contains(u, t) || e.error("Panzoom element must be attached to the document");
        var i = e.data(t, m);
        if (i)return i;
        this.options = n = e.extend({}, a.defaults, n), this.elem = t;
        var s = this.$elem = e(t);
        this.$set = n.$set && n.$set.length ? n.$set : s, this.$doc = e(t.ownerDocument || u), this.$parent = s.parent(), this.isSVG = v.test(t.namespaceURI) && "svg" !== t.nodeName.toLowerCase(), this.panning = !1, this._buildTransform(), this._transform = !this.isSVG && e.cssProps.transform.replace(g, "-$1").toLowerCase(), this._buildTransition(), this.resetDimensions();
        var o = e(), r = this;
        e.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function (t, e) {
            r[e] = n[e] || o
        }), this.enable(), e.data(t, m, this)
    }

    var r = "over out down up move enter leave cancel".split(" "), h = e.extend({}, e.event.mouseHooks), c = {};
    if (t.PointerEvent)e.each(r, function (t, n) {
        e.event.fixHooks[c[n] = "pointer" + n] = h
    }); else {
        var l = h.props;
        h.props = l.concat(["touches", "changedTouches", "targetTouches", "altKey", "ctrlKey", "metaKey", "shiftKey"]), h.filter = function (t, e) {
            var n, i = l.length;
            if (!e.pageX && e.touches && (n = e.touches[0]))for (; i--;)t[l[i]] = n[l[i]];
            return t
        }, e.each(r, function (t, n) {
            if (2 > t)c[n] = "mouse" + n; else {
                var i = "touch" + ("down" === n ? "start" : "up" === n ? "end" : n);
                e.event.fixHooks[i] = h, c[n] = i + " mouse" + n
            }
        })
    }
    e.pointertouch = c;
    var u = t.document, m = "__pz__", f = Array.prototype.slice, p = !!t.PointerEvent, d = function () {
        var t = u.createElement("input");
        return t.setAttribute("oninput", "return"), "function" == typeof t.oninput
    }(), g = /([A-Z])/g, v = /^http:[\w\.\/]+svg$/, b = /^inline/, _ = "(\\-?[\\d\\.e]+)", y = "\\,?\\s*", $ = new RegExp("^matrix\\(" + _ + y + _ + y + _ + y + _ + y + _ + y + _ + "\\)$");
    return s.prototype = {
        x: function (t) {
            var e = t instanceof o, n = this.elements, i = t.elements;
            return e && 3 === i.length ? new o(n[0] * i[0] + n[1] * i[1] + n[2] * i[2], n[3] * i[0] + n[4] * i[1] + n[5] * i[2], n[6] * i[0] + n[7] * i[1] + n[8] * i[2]) : i.length === n.length ? new s(n[0] * i[0] + n[1] * i[3] + n[2] * i[6], n[0] * i[1] + n[1] * i[4] + n[2] * i[7], n[0] * i[2] + n[1] * i[5] + n[2] * i[8], n[3] * i[0] + n[4] * i[3] + n[5] * i[6], n[3] * i[1] + n[4] * i[4] + n[5] * i[7], n[3] * i[2] + n[4] * i[5] + n[5] * i[8], n[6] * i[0] + n[7] * i[3] + n[8] * i[6], n[6] * i[1] + n[7] * i[4] + n[8] * i[7], n[6] * i[2] + n[7] * i[5] + n[8] * i[8]) : !1
        }, inverse: function () {
            var t = 1 / this.determinant(), e = this.elements;
            return new s(t * (e[8] * e[4] - e[7] * e[5]), t * -(e[8] * e[1] - e[7] * e[2]), t * (e[5] * e[1] - e[4] * e[2]), t * -(e[8] * e[3] - e[6] * e[5]), t * (e[8] * e[0] - e[6] * e[2]), t * -(e[5] * e[0] - e[3] * e[2]), t * (e[7] * e[3] - e[6] * e[4]), t * -(e[7] * e[0] - e[6] * e[1]), t * (e[4] * e[0] - e[3] * e[1]))
        }, determinant: function () {
            var t = this.elements;
            return t[0] * (t[8] * t[4] - t[7] * t[5]) - t[3] * (t[8] * t[1] - t[7] * t[2]) + t[6] * (t[5] * t[1] - t[4] * t[2])
        }
    }, o.prototype.e = s.prototype.e = function (t) {
        return this.elements[t]
    }, a.rmatrix = $, a.events = e.pointertouch, a.defaults = {
        eventNamespace: ".panzoom",
        transition: !0,
        cursor: "move",
        disablePan: !1,
        disableZoom: !1,
        increment: .3,
        minScale: .4,
        maxScale: 5,
        rangeStep: .05,
        duration: 200,
        easing: "ease-in-out",
        contain: !1
    }, a.prototype = {
        constructor: a, instance: function () {
            return this
        }, enable: function () {
            this._initStyle(), this._bind(), this.disabled = !1
        }, disable: function () {
            this.disabled = !0, this._resetStyle(), this._unbind()
        }, isDisabled: function () {
            return this.disabled
        }, destroy: function () {
            this.disable(), e.removeData(this.elem, m)
        }, resetDimensions: function () {
            var t = this.$parent;
            this.container = {width: t.innerWidth(), height: t.innerHeight()};
            var n, i = t.offset(), s = this.elem, o = this.$elem;
            this.isSVG ? (n = s.getBoundingClientRect(), n = {
                left: n.left - i.left,
                top: n.top - i.top,
                width: n.width,
                height: n.height,
                margin: {left: 0, top: 0}
            }) : n = {
                left: e.css(s, "left", !0) || 0,
                top: e.css(s, "top", !0) || 0,
                width: o.innerWidth(),
                height: o.innerHeight(),
                margin: {top: e.css(s, "marginTop", !0) || 0, left: e.css(s, "marginLeft", !0) || 0}
            }, n.widthBorder = e.css(s, "borderLeftWidth", !0) + e.css(s, "borderRightWidth", !0) || 0, n.heightBorder = e.css(s, "borderTopWidth", !0) + e.css(s, "borderBottomWidth", !0) || 0, this.dimensions = n
        }, reset: function (t) {
            t = i(t);
            var e = this.setMatrix(this._origTransform, t);
            t.silent || this._trigger("reset", e)
        }, resetZoom: function (t) {
            t = i(t);
            var e = this.getMatrix(this._origTransform);
            t.dValue = e[3], this.zoom(e[0], t)
        }, resetPan: function (t) {
            var e = this.getMatrix(this._origTransform);
            this.pan(e[4], e[5], i(t))
        }, setTransform: function (t) {
            for (var n = this.isSVG ? "attr" : "style", i = this.$set, s = i.length; s--;)e[n](i[s], "transform", t)
        }, getTransform: function (t) {
            var n = this.$set, i = n[0];
            return t ? this.setTransform(t) : t = e[this.isSVG ? "attr" : "style"](i, "transform"), "none" === t || $.test(t) || this.setTransform(t = e.css(i, "transform")), t || "none"
        }, getMatrix: function (t) {
            var e = $.exec(t || this.getTransform());
            return e && e.shift(), e || [1, 0, 0, 1, 0, 0]
        }, setMatrix: function (t, n) {
            if (!this.disabled) {
                n || (n = {}), "string" == typeof t && (t = this.getMatrix(t));
                var i, s, o, a, r, h, c, l, u, m, f = +t[0], p = this.$parent, d = "undefined" != typeof n.contain ? n.contain : this.options.contain;
                return d && (i = this._checkDims(), s = this.container, u = i.width + i.widthBorder, m = i.height + i.heightBorder, o = (u * Math.abs(f) - s.width) / 2, a = (m * Math.abs(f) - s.height) / 2, c = i.left + i.margin.left, l = i.top + i.margin.top, "invert" === d ? (r = u > s.width ? u - s.width : 0, h = m > s.height ? m - s.height : 0, o += (s.width - u) / 2, a += (s.height - m) / 2, t[4] = Math.max(Math.min(t[4], o - c), -o - c - r), t[5] = Math.max(Math.min(t[5], a - l), -a - l - h + i.heightBorder)) : (a += i.heightBorder / 2, r = s.width > u ? s.width - u : 0, h = s.height > m ? s.height - m : 0, "center" === p.css("textAlign") && b.test(e.css(this.elem, "display")) ? r = 0 : o = a = 0, t[4] = Math.min(Math.max(t[4], o - c), -o - c + r), t[5] = Math.min(Math.max(t[5], a - l), -a - l + h))), "skip" !== n.animate && this.transition(!n.animate), n.range && this.$zoomRange.val(f), this.setTransform("matrix(" + t.join(",") + ")"), n.silent || this._trigger("change", t), t
            }
        }, isPanning: function () {
            return this.panning
        }, transition: function (t) {
            if (this._transition)for (var n = t || !this.options.transition ? "none" : this._transition, i = this.$set, s = i.length; s--;)e.style(i[s], "transition") !== n && e.style(i[s], "transition", n)
        }, pan: function (t, e, n) {
            if (!this.options.disablePan) {
                n || (n = {});
                var i = n.matrix;
                i || (i = this.getMatrix()), n.relative && (t += +i[4], e += +i[5]), i[4] = t, i[5] = e, this.setMatrix(i, n), n.silent || this._trigger("pan", i[4], i[5])
            }
        }, zoom: function (t, n) {
            "object" == typeof t ? (n = t, t = null) : n || (n = {});
            var i = e.extend({}, this.options, n);
            if (!i.disableZoom) {
                var a = !1, r = i.matrix || this.getMatrix();
                "number" != typeof t && (t = +r[0] + i.increment * (t ? -1 : 1), a = !0), t > i.maxScale ? t = i.maxScale : t < i.minScale && (t = i.minScale);
                var h = i.focal;
                if (h && !i.disablePan) {
                    var c = this._checkDims(), l = h.clientX, u = h.clientY;
                    this.isSVG || (l -= (c.width + c.widthBorder) / 2, u -= (c.height + c.heightBorder) / 2);
                    var m = new o(l, u, 1), f = new s(r), p = this.parentOffset || this.$parent.offset(), d = new s(1, 0, p.left - this.$doc.scrollLeft(), 0, 1, p.top - this.$doc.scrollTop()), g = f.inverse().x(d.inverse().x(m)), v = t / r[0];
                    f = f.x(new s([v, 0, 0, v, 0, 0])), m = d.x(f.x(g)), r[4] = +r[4] + (l - m.e(0)), r[5] = +r[5] + (u - m.e(1))
                }
                r[0] = t, r[3] = "number" == typeof i.dValue ? i.dValue : t, this.setMatrix(r, {
                    animate: "boolean" == typeof i.animate ? i.animate : a,
                    range: !i.noSetRange
                }), i.silent || this._trigger("zoom", r[0], i)
            }
        }, option: function (t, n) {
            var i;
            if (!t)return e.extend({}, this.options);
            if ("string" == typeof t) {
                if (1 === arguments.length)return void 0 !== this.options[t] ? this.options[t] : null;
                i = {}, i[t] = n
            } else i = t;
            this._setOptions(i)
        }, _setOptions: function (t) {
            e.each(t, e.proxy(function (t, n) {
                switch (t) {
                    case"disablePan":
                        this._resetStyle();
                    case"$zoomIn":
                    case"$zoomOut":
                    case"$zoomRange":
                    case"$reset":
                    case"disableZoom":
                    case"onStart":
                    case"onChange":
                    case"onZoom":
                    case"onPan":
                    case"onEnd":
                    case"onReset":
                    case"eventNamespace":
                        this._unbind()
                }
                switch (this.options[t] = n, t) {
                    case"disablePan":
                        this._initStyle();
                    case"$zoomIn":
                    case"$zoomOut":
                    case"$zoomRange":
                    case"$reset":
                        this[t] = n;
                    case"disableZoom":
                    case"onStart":
                    case"onChange":
                    case"onZoom":
                    case"onPan":
                    case"onEnd":
                    case"onReset":
                    case"eventNamespace":
                        this._bind();
                        break;
                    case"cursor":
                        e.style(this.elem, "cursor", n);
                        break;
                    case"minScale":
                        this.$zoomRange.attr("min", n);
                        break;
                    case"maxScale":
                        this.$zoomRange.attr("max", n);
                        break;
                    case"rangeStep":
                        this.$zoomRange.attr("step", n);
                        break;
                    case"startTransform":
                        this._buildTransform();
                        break;
                    case"duration":
                    case"easing":
                        this._buildTransition();
                    case"transition":
                        this.transition();
                        break;
                    case"$set":
                        n instanceof e && n.length && (this.$set = n, this._initStyle(), this._buildTransform())
                }
            }, this))
        }, _initStyle: function () {
            var t = {"backface-visibility": "hidden", "transform-origin": this.isSVG ? "0 0" : "50% 50%"};
            this.options.disablePan || (t.cursor = this.options.cursor), this.$set.css(t);
            var n = this.$parent;
            n.length && !e.nodeName(n[0], "body") && (t = {overflow: "hidden"}, "static" === n.css("position") && (t.position = "relative"), n.css(t))
        }, _resetStyle: function () {
            this.$elem.css({cursor: "", transition: ""}), this.$parent.css({overflow: "", position: ""})
        }, _bind: function () {
            var t = this, n = this.options, i = n.eventNamespace, s = p ? "pointerdown" + i : "touchstart" + i + " mousedown" + i, o = p ? "pointerup" + i : "touchend" + i + " click" + i, r = {}, h = this.$reset, c = this.$zoomRange;
            if (e.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"], function () {
                    var t = n["on" + this];
                    e.isFunction(t) && (r["panzoom" + this.toLowerCase() + i] = t)
                }), n.disablePan && n.disableZoom || (r[s] = function (e) {
                    var i;
                    ("touchstart" === e.type ? !(i = e.touches) || (1 !== i.length || n.disablePan) && 2 !== i.length : n.disablePan || 1 !== e.which) || (e.preventDefault(), e.stopPropagation(), t._startMove(e, i))
                }), this.$elem.on(r), h.length && h.on(o, function (e) {
                    e.preventDefault(), t.reset()
                }), c.length && c.attr({
                    step: n.rangeStep === a.defaults.rangeStep && c.attr("step") || n.rangeStep,
                    min: n.minScale,
                    max: n.maxScale
                }).prop({value: this.getMatrix()[0]}), !n.disableZoom) {
                var l = this.$zoomIn, u = this.$zoomOut;
                l.length && u.length && (l.on(o, function (e) {
                    e.preventDefault(), t.zoom()
                }), u.on(o, function (e) {
                    e.preventDefault(), t.zoom(!0)
                })), c.length && (r = {}, r[(p ? "pointerdown" : "mousedown") + i] = function () {
                    t.transition(!0)
                }, r[(d ? "input" : "change") + i] = function () {
                    t.zoom(+this.value, {noSetRange: !0})
                }, c.on(r))
            }
        }, _unbind: function () {
            this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
        }, _buildTransform: function () {
            return this._origTransform = this.getTransform(this.options.startTransform)
        }, _buildTransition: function () {
            if (this._transform) {
                var t = this.options;
                this._transition = this._transform + " " + t.duration + "ms " + t.easing
            }
        }, _checkDims: function () {
            var t = this.dimensions;
            return t.width && t.height || this.resetDimensions(), this.dimensions
        }, _getDistance: function (t) {
            var e = t[0], n = t[1];
            return Math.sqrt(Math.pow(Math.abs(n.clientX - e.clientX), 2) + Math.pow(Math.abs(n.clientY - e.clientY), 2))
        }, _getMiddle: function (t) {
            var e = t[0], n = t[1];
            return {clientX: (n.clientX - e.clientX) / 2 + e.clientX, clientY: (n.clientY - e.clientY) / 2 + e.clientY}
        }, _trigger: function (t) {
            "string" == typeof t && (t = "panzoom" + t), this.$elem.triggerHandler(t, [this].concat(f.call(arguments, 1)))
        }, _startMove: function (t, i) {
            var s, o, a, r, h, c, l, m, f = this, d = this.options, g = d.eventNamespace, v = this.getMatrix(), b = v.slice(0), _ = +b[4], y = +b[5], $ = {
                matrix: v,
                animate: "skip"
            };
            p ? (o = "pointermove", a = "pointerup") : "touchstart" === t.type ? (o = "touchmove", a = "touchend") : (o = "mousemove", a = "mouseup"), o += g, a += g, this.transition(!0), this.panning = !0, this._trigger("start", t, i), i && 2 === i.length ? (r = this._getDistance(i), h = +v[0], c = this._getMiddle(i), s = function (t) {
                t.preventDefault();
                var e = f._getMiddle(i = t.touches), n = f._getDistance(i) - r;
                f.zoom(n * (d.increment / 100) + h, {
                    focal: e,
                    matrix: v,
                    animate: !1
                }), f.pan(+v[4] + e.clientX - c.clientX, +v[5] + e.clientY - c.clientY, $), c = e
            }) : (l = t.pageX, m = t.pageY, s = function (t) {
                t.preventDefault(), f.pan(_ + t.pageX - l, y + t.pageY - m, $)
            }), e(u).off(g).on(o, s).on(a, function (t) {
                t.preventDefault(), e(this).off(g), f.panning = !1, t.type = "panzoomend", f._trigger(t, v, !n(v, b))
            })
        }
    }, e.Panzoom = a, e.fn.panzoom = function (t) {
        var n, i, s, o;
        return "string" == typeof t ? (o = [], i = f.call(arguments, 1), this.each(function () {
            n = e.data(this, m), n ? "_" !== t.charAt(0) && "function" == typeof(s = n[t]) && void 0 !== (s = s.apply(n, i)) && o.push(s) : o.push(void 0)
        }), o.length ? 1 === o.length ? o[0] : o : this) : this.each(function () {
            new a(this, t)
        })
    }, a
});
!function (e, t, r) {
    "use strict";
    function n(r) {
        if (o = t.documentElement, a = t.body, K(), ie = this, r = r || {}, ue = r.constants || {}, r.easing)for (var n in r.easing)U[n] = r.easing[n];
        ye = r.edgeStrategy || "set", ce = {
            beforerender: r.beforerender,
            render: r.render,
            keyframe: r.keyframe
        }, fe = r.forceHeight !== !1, fe && (Ve = r.scale || 1), me = r.mobileDeceleration || x, de = r.smoothScrolling !== !1, ge = r.smoothScrollingDuration || E, ve = {targetTop: ie.getScrollTop()}, Ge = (r.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), Ge ? (se = t.getElementById("skrollr-body"), se && ae(), X(), De(o, [y, S], [T])) : De(o, [y, b], [T]), ie.refresh(), Se(e, "resize orientationchange", function () {
            var e = o.clientWidth, t = o.clientHeight;
            (t !== $e || e !== Me) && ($e = t, Me = e, _e = !0)
        });
        var i = Y();
        return function l() {
            Z(), be = i(l)
        }(), ie
    }

    var o, a, i = {
        get: function () {
            return ie
        }, init: function (e) {
            return ie || new n(e)
        }, VERSION: "0.6.26"
    }, l = Object.prototype.hasOwnProperty, s = e.Math, c = e.getComputedStyle, f = "touchstart", u = "touchmove", m = "touchcancel", p = "touchend", d = "skrollable", g = d + "-before", v = d + "-between", h = d + "-after", y = "skrollr", T = "no-" + y, b = y + "-desktop", S = y + "-mobile", k = "linear", w = 1e3, x = .004, E = 200, A = "start", F = "end", C = "center", D = "bottom", H = "___skrollable_id", I = /^(?:input|textarea|button|select)$/i, P = /^\s+|\s+$/g, N = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, O = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, V = /^(@?[a-z\-]+)\[(\w+)\]$/, z = /-([a-z0-9_])/g, q = function (e, t) {
        return t.toUpperCase()
    }, L = /[\-+]?[\d]*\.?[\d]+/g, M = /\{\?\}/g, $ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, _ = /[a-z\-]+-gradient/g, B = "", G = "", K = function () {
        var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (c) {
            var t = c(a, null);
            for (var n in t)if (B = n.match(e) || +n == n && t[n].match(e))break;
            if (!B)return B = G = "", r;
            B = B[0], "-" === B.slice(0, 1) ? (G = B, B = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            }[B]) : G = "-" + B.toLowerCase() + "-"
        }
    }, Y = function () {
        var t = e.requestAnimationFrame || e[B.toLowerCase() + "RequestAnimationFrame"], r = Pe();
        return (Ge || !t) && (t = function (t) {
            var n = Pe() - r, o = s.max(0, 1e3 / 60 - n);
            return e.setTimeout(function () {
                r = Pe(), t()
            }, o)
        }), t
    }, R = function () {
        var t = e.cancelAnimationFrame || e[B.toLowerCase() + "CancelAnimationFrame"];
        return (Ge || !t) && (t = function (t) {
            return e.clearTimeout(t)
        }), t
    }, U = {
        begin: function () {
            return 0
        }, end: function () {
            return 1
        }, linear: function (e) {
            return e
        }, quadratic: function (e) {
            return e * e
        }, cubic: function (e) {
            return e * e * e
        }, swing: function (e) {
            return -s.cos(e * s.PI) / 2 + .5
        }, sqrt: function (e) {
            return s.sqrt(e)
        }, outCubic: function (e) {
            return s.pow(e - 1, 3) + 1
        }, bounce: function (e) {
            var t;
            if (.5083 >= e)t = 3; else if (.8489 >= e)t = 9; else if (.96208 >= e)t = 27; else {
                if (!(.99981 >= e))return 1;
                t = 91
            }
            return 1 - s.abs(3 * s.cos(1.028 * e * t) / t)
        }
    };
    n.prototype.refresh = function (e) {
        var n, o, a = !1;
        for (e === r ? (a = !0, le = [], Be = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, o = e.length; o > n; n++) {
            var i = e[n], l = i, s = [], c = de, f = ye, u = !1;
            if (a && H in i && delete i[H], i.attributes) {
                for (var m = 0, p = i.attributes.length; p > m; m++) {
                    var g = i.attributes[m];
                    if ("data-anchor-target" !== g.name)if ("data-smooth-scrolling" !== g.name)if ("data-edge-strategy" !== g.name)if ("data-emit-events" !== g.name) {
                        var v = g.name.match(N);
                        if (null !== v) {
                            var h = {props: g.value, element: i, eventType: g.name.replace(z, q)};
                            s.push(h);
                            var y = v[1];
                            y && (h.constant = y.substr(1));
                            var T = v[2];
                            /p$/.test(T) ? (h.isPercentage = !0, h.offset = (0 | T.slice(0, -1)) / 100) : h.offset = 0 | T;
                            var b = v[3], S = v[4] || b;
                            b && b !== A && b !== F ? (h.mode = "relative", h.anchors = [b, S]) : (h.mode = "absolute", b === F ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * Ve))
                        }
                    } else u = !0; else f = g.value; else c = "off" !== g.value; else if (l = t.querySelector(g.value), null === l)throw'Unable to find anchor target "' + g.value + '"'
                }
                if (s.length) {
                    var k, w, x;
                    !a && H in i ? (x = i[H], k = le[x].styleAttr, w = le[x].classAttr) : (x = i[H] = Be++, k = i.style.cssText, w = Ce(i)), le[x] = {
                        element: i,
                        styleAttr: k,
                        classAttr: w,
                        anchorTarget: l,
                        keyFrames: s,
                        smoothScrolling: c,
                        edgeStrategy: f,
                        emitEvents: u,
                        lastFrameIndex: -1
                    }, De(i, [d], [])
                }
            }
        }
        for (Ee(), n = 0, o = e.length; o > n; n++) {
            var E = le[e[n][H]];
            E !== r && (J(E), ee(E))
        }
        return ie
    }, n.prototype.relativeToAbsolute = function (e, t, r) {
        var n = o.clientHeight, a = e.getBoundingClientRect(), i = a.top, l = a.bottom - a.top;
        return t === D ? i -= n : t === C && (i -= n / 2), r === D ? i += l : r === C && (i += l / 2), i += ie.getScrollTop(), 0 | i + .5
    }, n.prototype.animateTo = function (e, t) {
        t = t || {};
        var n = Pe(), o = ie.getScrollTop();
        return pe = {
            startTop: o,
            topDiff: e - o,
            targetTop: e,
            duration: t.duration || w,
            startTime: n,
            endTime: n + (t.duration || w),
            easing: U[t.easing || k],
            done: t.done
        }, pe.topDiff || (pe.done && pe.done.call(ie, !1), pe = r), ie
    }, n.prototype.stopAnimateTo = function () {
        pe && pe.done && pe.done.call(ie, !0), pe = r
    }, n.prototype.isAnimatingTo = function () {
        return !!pe
    }, n.prototype.isMobile = function () {
        return Ge
    }, n.prototype.setScrollTop = function (t, r) {
        return he = r === !0, Ge ? Ke = s.min(s.max(t, 0), Oe) : e.scrollTo(0, t), ie
    }, n.prototype.getScrollTop = function () {
        return Ge ? Ke : e.pageYOffset || o.scrollTop || a.scrollTop || 0
    }, n.prototype.getMaxScrollTop = function () {
        return Oe
    }, n.prototype.on = function (e, t) {
        return ce[e] = t, ie
    }, n.prototype.off = function (e) {
        return delete ce[e], ie
    }, n.prototype.destroy = function () {
        var e = R();
        e(be), we(), De(o, [T], [y, b, S]);
        for (var t = 0, n = le.length; n > t; t++)oe(le[t].element);
        o.style.overflow = a.style.overflow = "", o.style.height = a.style.height = "", se && i.setStyle(se, "transform", "none"), ie = r, se = r, ce = r, fe = r, Oe = 0, Ve = 1, ue = r, me = r, ze = "down", qe = -1, Me = 0, $e = 0, _e = !1, pe = r, de = r, ge = r, ve = r, he = r, Be = 0, ye = r, Ge = !1, Ke = 0, Te = r
    };
    var X = function () {
        var n, i, l, c, d, g, v, h, y, T, b, S;
        Se(o, [f, u, m, p].join(" "), function (e) {
            var o = e.changedTouches[0];
            for (c = e.target; 3 === c.nodeType;)c = c.parentNode;
            switch (d = o.clientY, g = o.clientX, T = e.timeStamp, I.test(c.tagName) || e.preventDefault(), e.type) {
                case f:
                    n && n.blur(), ie.stopAnimateTo(), n = c, i = v = d, l = g, y = T;
                    break;
                case u:
                    I.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = d - v, S = T - b, ie.setScrollTop(Ke - h, !0), v = d, b = T;
                    break;
                default:
                case m:
                case p:
                    var a = i - d, k = l - g, w = k * k + a * a;
                    if (49 > w) {
                        if (!I.test(n.tagName)) {
                            n.focus();
                            var x = t.createEvent("MouseEvents");
                            x.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x)
                        }
                        return
                    }
                    n = r;
                    var E = h / S;
                    E = s.max(s.min(E, 3), -3);
                    var A = s.abs(E / me), F = E * A + .5 * me * A * A, C = ie.getScrollTop() - F, D = 0;
                    C > Oe ? (D = (Oe - C) / F, C = Oe) : 0 > C && (D = -C / F, C = 0), A *= 1 - D, ie.animateTo(0 | C + .5, {
                        easing: "outCubic",
                        duration: A
                    })
            }
        }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden"
    }, j = function () {
        var e, t, r, n, a, i, l, c, f, u, m, p = o.clientHeight, d = Ae();
        for (c = 0, f = le.length; f > c; c++)for (e = le[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++)l = n[a], u = l.offset, m = d[l.constant] || 0, l.frame = u, l.isPercentage && (u *= p, l.frame = u), "relative" === l.mode && (oe(t), l.frame = ie.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, oe(t, !0)), l.frame += m, fe && !l.isEnd && l.frame > Oe && (Oe = l.frame);
        for (Oe = s.max(Oe, Fe()), c = 0, f = le.length; f > c; c++) {
            for (e = le[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++)l = n[a], m = d[l.constant] || 0, l.isEnd && (l.frame = Oe - l.offset + m);
            e.keyFrames.sort(Ne)
        }
    }, W = function (e, t) {
        for (var r = 0, n = le.length; n > r; r++) {
            var o, a, s = le[r], c = s.element, f = s.smoothScrolling ? e : t, u = s.keyFrames, m = u.length, p = u[0], y = u[u.length - 1], T = p.frame > f, b = f > y.frame, S = T ? p : y, k = s.emitEvents, w = s.lastFrameIndex;
            if (T || b) {
                if (T && -1 === s.edge || b && 1 === s.edge)continue;
                switch (T ? (De(c, [g], [h, v]), k && w > -1 && (xe(c, p.eventType, ze), s.lastFrameIndex = -1)) : (De(c, [h], [g, v]), k && m > w && (xe(c, y.eventType, ze), s.lastFrameIndex = m)), s.edge = T ? -1 : 1, s.edgeStrategy) {
                    case"reset":
                        oe(c);
                        continue;
                    case"ease":
                        f = S.frame;
                        break;
                    default:
                    case"set":
                        var x = S.props;
                        for (o in x)l.call(x, o) && (a = ne(x[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
                        continue
                }
            } else 0 !== s.edge && (De(c, [d, v], [g, h]), s.edge = 0);
            for (var E = 0; m - 1 > E; E++)if (f >= u[E].frame && u[E + 1].frame >= f) {
                var A = u[E], F = u[E + 1];
                for (o in A.props)if (l.call(A.props, o)) {
                    var C = (f - A.frame) / (F.frame - A.frame);
                    C = A.props[o].easing(C), a = re(A.props[o].value, F.props[o].value, C), a = ne(a), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a)
                }
                k && w !== E && ("down" === ze ? xe(c, A.eventType, ze) : xe(c, F.eventType, ze), s.lastFrameIndex = E);
                break
            }
        }
    }, Z = function () {
        _e && (_e = !1, Ee());
        var e, t, n = ie.getScrollTop(), o = Pe();
        if (pe)o >= pe.endTime ? (n = pe.targetTop, e = pe.done, pe = r) : (t = pe.easing((o - pe.startTime) / pe.duration), n = 0 | pe.startTop + t * pe.topDiff), ie.setScrollTop(n, !0); else if (!he) {
            var a = ve.targetTop - n;
            a && (ve = {
                startTop: qe,
                topDiff: n - qe,
                targetTop: n,
                startTime: Le,
                endTime: Le + ge
            }), ve.endTime >= o && (t = U.sqrt((o - ve.startTime) / ge), n = 0 | ve.startTop + t * ve.topDiff)
        }
        if (Ge && se && i.setStyle(se, "transform", "translate(0, " + -Ke + "px) " + Te), he || qe !== n) {
            ze = n > qe ? "down" : qe > n ? "up" : ze, he = !1;
            var l = {
                curTop: n,
                lastTop: qe,
                maxTop: Oe,
                direction: ze
            }, s = ce.beforerender && ce.beforerender.call(ie, l);
            s !== !1 && (W(n, ie.getScrollTop()), qe = n, ce.render && ce.render.call(ie, l)), e && e.call(ie, !1)
        }
        Le = o
    }, J = function (e) {
        for (var t = 0, r = e.keyFrames.length; r > t; t++) {
            for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = O.exec(l.props));)a = i[1], o = i[2], n = a.match(V), null !== n ? (a = n[1], n = n[2]) : n = k, o = o.indexOf("!") ? Q(o) : [o.slice(1)], s[a] = {
                value: o,
                easing: U[n]
            };
            l.props = s
        }
    }, Q = function (e) {
        var t = [];
        return $.lastIndex = 0, e = e.replace($, function (e) {
            return e.replace(L, function (e) {
                return 100 * (e / 255) + "%"
            })
        }), G && (_.lastIndex = 0, e = e.replace(_, function (e) {
            return G + e
        })), e = e.replace(L, function (e) {
            return t.push(+e), "{?}"
        }), t.unshift(e), t
    }, ee = function (e) {
        var t, r, n = {};
        for (t = 0, r = e.keyFrames.length; r > t; t++)te(e.keyFrames[t], n);
        for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--)te(e.keyFrames[t], n)
    }, te = function (e, t) {
        var r;
        for (r in t)l.call(e.props, r) || (e.props[r] = t[r]);
        for (r in e.props)t[r] = e.props[r]
    }, re = function (e, t, r) {
        var n, o = e.length;
        if (o !== t.length)throw"Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var a = [e[0]];
        for (n = 1; o > n; n++)a[n] = e[n] + (t[n] - e[n]) * r;
        return a
    }, ne = function (e) {
        var t = 1;
        return M.lastIndex = 0, e[0].replace(M, function () {
            return e[t++]
        })
    }, oe = function (e, t) {
        e = [].concat(e);
        for (var r, n, o = 0, a = e.length; a > o; o++)n = e[o], r = le[n[H]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, De(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ce(n), n.style.cssText = r.styleAttr, De(n, r.classAttr)))
    }, ae = function () {
        Te = "translateZ(0)", i.setStyle(se, "transform", Te);
        var e = c(se), t = e.getPropertyValue("transform"), r = e.getPropertyValue(G + "transform"), n = t && "none" !== t || r && "none" !== r;
        n || (Te = "")
    };
    i.setStyle = function (e, t, r) {
        var n = e.style;
        if (t = t.replace(z, q).replace("-", ""), "zIndex" === t)n[t] = isNaN(r) ? r : "" + (0 | r); else if ("float" === t)n.styleFloat = n.cssFloat = r; else try {
            B && (n[B + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r
        } catch (o) {
        }
    };
    var ie, le, se, ce, fe, ue, me, pe, de, ge, ve, he, ye, Te, be, Se = i.addEvent = function (t, r, n) {
        var o = function (t) {
            return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () {
                t.returnValue = !1, t.defaultPrevented = !0
            }), n.call(this, t)
        };
        r = r.split(" ");
        for (var a, i = 0, l = r.length; l > i; i++)a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Ye.push({
            element: t,
            name: a,
            listener: n
        })
    }, ke = i.removeEvent = function (e, t, r) {
        t = t.split(" ");
        for (var n = 0, o = t.length; o > n; n++)e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
    }, we = function () {
        for (var e, t = 0, r = Ye.length; r > t; t++)e = Ye[t], ke(e.element, e.name, e.listener);
        Ye = []
    }, xe = function (e, t, r) {
        ce.keyframe && ce.keyframe.call(ie, e, t, r)
    }, Ee = function () {
        var e = ie.getScrollTop();
        Oe = 0, fe && !Ge && (a.style.height = ""), j(), fe && !Ge && (a.style.height = Oe + o.clientHeight + "px"), Ge ? ie.setScrollTop(s.min(ie.getScrollTop(), Oe)) : ie.setScrollTop(e, !0), he = !0
    }, Ae = function () {
        var e, t, r = o.clientHeight, n = {};
        for (e in ue)t = ue[e], "function" == typeof t ? t = t.call(ie) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
        return n
    }, Fe = function () {
        var e = se && se.offsetHeight || 0, t = s.max(e, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight);
        return t - o.clientHeight
    }, Ce = function (t) {
        var r = "className";
        return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r]
    }, De = function (t, n, o) {
        var a = "className";
        if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r)return t[a] = n, r;
        for (var i = t[a], l = 0, s = o.length; s > l; l++)i = Ie(i).replace(Ie(o[l]), " ");
        i = He(i);
        for (var c = 0, f = n.length; f > c; c++)-1 === Ie(i).indexOf(Ie(n[c])) && (i += " " + n[c]);
        t[a] = He(i)
    }, He = function (e) {
        return e.replace(P, "")
    }, Ie = function (e) {
        return " " + e + " "
    }, Pe = Date.now || function () {
            return +new Date
        }, Ne = function (e, t) {
        return e.frame - t.frame
    }, Oe = 0, Ve = 1, ze = "down", qe = -1, Le = Pe(), Me = 0, $e = 0, _e = !1, Be = 0, Ge = !1, Ke = 0, Ye = [];
    "function" == typeof define && define.amd ? define("skrollr", function () {
        return i
    }) : "undefined" != typeof module && module.exports ? module.exports = i : e.skrollr = i
}(window, document);
!function (t, e, i, s) {
    function o(e, i) {
        this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = n, this.init()
    }

    var n = "stellar", r = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function (t) {
            t.hide()
        },
        showElement: function (t) {
            t.show()
        }
    }, a = {
        scroll: {
            getLeft: function (t) {
                return t.scrollLeft()
            }, setLeft: function (t, e) {
                t.scrollLeft(e)
            }, getTop: function (t) {
                return t.scrollTop()
            }, setTop: function (t, e) {
                t.scrollTop(e)
            }
        }, position: {
            getLeft: function (t) {
                return -1 * parseInt(t.css("left"), 10)
            }, getTop: function (t) {
                return -1 * parseInt(t.css("top"), 10)
            }
        }, margin: {
            getLeft: function (t) {
                return -1 * parseInt(t.css("margin-left"), 10)
            }, getTop: function (t) {
                return -1 * parseInt(t.css("margin-top"), 10)
            }
        }, transform: {
            getLeft: function (t) {
                var e = getComputedStyle(t[0])[c];
                return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
            }, getTop: function (t) {
                var e = getComputedStyle(t[0])[c];
                return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
            }
        }
    }, l = {
        position: {
            setLeft: function (t, e) {
                t.css("left", e)
            }, setTop: function (t, e) {
                t.css("top", e)
            }
        }, transform: {
            setPosition: function (t, e, i, s, o) {
                t[0].style[c] = "translate3d(" + (e - i) + "px, " + (s - o) + "px, 0)"
            }
        }
    }, f = function () {
        var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, s = t("script")[0].style, o = "";
        for (e in s)if (i.test(e)) {
            o = e.match(i)[0];
            break
        }
        return "WebkitOpacity" in s && (o = "Webkit"), "KhtmlOpacity" in s && (o = "Khtml"), function (t) {
            return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
        }
    }(), c = f("transform"), h = t("<div />", {style: "background:#fff"}).css("background-position-x") !== s, p = h ? function (t, e, i) {
        t.css({"background-position-x": e, "background-position-y": i})
    } : function (t, e, i) {
        t.css("background-position", e + " " + i)
    }, d = h ? function (t) {
        return [t.css("background-position-x"), t.css("background-position-y")]
    } : function (t) {
        return t.css("background-position").split(" ")
    }, u = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
            setTimeout(t, 1e3 / 60)
        };
    o.prototype = {
        init: function () {
            this.options.name = n + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements: function () {
            this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== s ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters: function () {
            var t = this, e = a[t.options.scrollProperty];
            this._getScrollLeft = function () {
                return e.getLeft(t.$scrollElement)
            }, this._getScrollTop = function () {
                return e.getTop(t.$scrollElement)
            }
        }, _defineSetters: function () {
            var e = this, i = a[e.options.scrollProperty], s = l[e.options.positionProperty], o = i.setLeft, n = i.setTop;
            this._setScrollLeft = "function" == typeof o ? function (t) {
                o(e.$scrollElement, t)
            } : t.noop, this._setScrollTop = "function" == typeof n ? function (t) {
                n(e.$scrollElement, t)
            } : t.noop, this._setPosition = s.setPosition || function (t, i, o, n, r) {
                    e.options.horizontalScrolling && s.setLeft(t, i, o), e.options.verticalScrolling && s.setTop(t, n, r)
                }
        }, _handleWindowLoadAndResize: function () {
            var i = this, s = t(e);
            i.options.responsive && s.bind("load." + this.name, function () {
                i.refresh()
            }), s.bind("resize." + this.name, function () {
                i._detectViewport(), i.options.responsive && i.refresh()
            })
        }, refresh: function (i) {
            var s = this, o = s._getScrollLeft(), n = s._getScrollTop();
            i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function () {
                var t = s._getScrollLeft(), e = s._getScrollTop();
                s._setScrollLeft(t + 1), s._setScrollTop(e + 1), s._setScrollLeft(t), s._setScrollTop(e)
            }), this._setScrollLeft(o), this._setScrollTop(n)
        }, _detectViewport: function () {
            var t = this.$viewportElement.offset(), e = null !== t && t !== s;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        }, _findParticles: function () {
            var e = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== s)for (var i = this.particles.length - 1; i >= 0; i--)this.particles[i].$element.data("stellar-elementIsActive", s);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                var i, o, n, r, a, l, f, c, h, p = t(this), d = 0, u = 0, g = 0, m = 0;
                if (p.data("stellar-elementIsActive")) {
                    if (p.data("stellar-elementIsActive") !== this)return
                } else p.data("stellar-elementIsActive", this);
                e.options.showElement(p), p.data("stellar-startingLeft") ? (p.css("left", p.data("stellar-startingLeft")), p.css("top", p.data("stellar-startingTop"))) : (p.data("stellar-startingLeft", p.css("left")), p.data("stellar-startingTop", p.css("top"))), n = p.position().left, r = p.position().top, a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), c = p.offset().left - a, h = p.offset().top - l, p.parents().each(function () {
                    var e = t(this);
                    return e.data("stellar-offset-parent") === !0 ? (d = g, u = m, f = e, !1) : (g += e.position().left, void(m += e.position().top))
                }), i = p.data("stellar-horizontal-offset") !== s ? p.data("stellar-horizontal-offset") : f !== s && f.data("stellar-horizontal-offset") !== s ? f.data("stellar-horizontal-offset") : e.horizontalOffset, o = p.data("stellar-vertical-offset") !== s ? p.data("stellar-vertical-offset") : f !== s && f.data("stellar-vertical-offset") !== s ? f.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                    $element: p,
                    $offsetParent: f,
                    isFixed: "fixed" === p.css("position"),
                    horizontalOffset: i,
                    verticalOffset: o,
                    startingPositionLeft: n,
                    startingPositionTop: r,
                    startingOffsetLeft: c,
                    startingOffsetTop: h,
                    parentOffsetLeft: d,
                    parentOffsetTop: u,
                    stellarRatio: p.data("stellar-ratio") !== s ? p.data("stellar-ratio") : 1,
                    width: p.outerWidth(!0),
                    height: p.outerHeight(!0),
                    isHidden: !1
                })
            })
        }, _findBackgrounds: function () {
            var e, i = this, o = this._getScrollLeft(), n = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function () {
                var e, r, a, l, f, c, h, u = t(this), g = d(u), m = 0, v = 0, L = 0, _ = 0;
                if (u.data("stellar-backgroundIsActive")) {
                    if (u.data("stellar-backgroundIsActive") !== this)return
                } else u.data("stellar-backgroundIsActive", this);
                u.data("stellar-backgroundStartingLeft") ? p(u, u.data("stellar-backgroundStartingLeft"), u.data("stellar-backgroundStartingTop")) : (u.data("stellar-backgroundStartingLeft", g[0]), u.data("stellar-backgroundStartingTop", g[1])), a = "auto" === u.css("margin-left") ? 0 : parseInt(u.css("margin-left"), 10), l = "auto" === u.css("margin-top") ? 0 : parseInt(u.css("margin-top"), 10), f = u.offset().left - a - o, c = u.offset().top - l - n, u.parents().each(function () {
                    var e = t(this);
                    return e.data("stellar-offset-parent") === !0 ? (m = L, v = _, h = e, !1) : (L += e.position().left, void(_ += e.position().top))
                }), e = u.data("stellar-horizontal-offset") !== s ? u.data("stellar-horizontal-offset") : h !== s && h.data("stellar-horizontal-offset") !== s ? h.data("stellar-horizontal-offset") : i.horizontalOffset, r = u.data("stellar-vertical-offset") !== s ? u.data("stellar-vertical-offset") : h !== s && h.data("stellar-vertical-offset") !== s ? h.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                    $element: u,
                    $offsetParent: h,
                    isFixed: "fixed" === u.css("background-attachment"),
                    horizontalOffset: e,
                    verticalOffset: r,
                    startingValueLeft: g[0],
                    startingValueTop: g[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                    startingPositionLeft: u.position().left,
                    startingPositionTop: u.position().top,
                    startingOffsetLeft: f,
                    startingOffsetTop: c,
                    parentOffsetLeft: m,
                    parentOffsetTop: v,
                    stellarRatio: u.data("stellar-background-ratio") === s ? 1 : u.data("stellar-background-ratio")
                })
            }))
        }, _reset: function () {
            var t, e, i, s, o;
            for (o = this.particles.length - 1; o >= 0; o--)t = this.particles[o], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; o >= 0; o--)s = this.backgrounds[o], s.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), p(s.$element, s.startingValueLeft, s.startingValueTop)
        }, destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets: function () {
            var i = this, s = t(e);
            s.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), s.bind("resize.horizontal-" + this.name, function () {
                i.horizontalOffset = i.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), s.bind("resize.vertical-" + this.name, function () {
                i.verticalOffset = i.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements: function () {
            var t, e, i, s, o, n, r, a, l, f, c = this._getScrollLeft(), h = this._getScrollTop(), d = !0, u = !0;
            if (this.currentScrollLeft !== c || this.currentScrollTop !== h || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = c, this.currentScrollTop = h, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, f = this.particles.length - 1; f >= 0; f--)t = this.particles[f], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (n = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = n - t.startingPositionLeft + t.startingOffsetLeft) : (n = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (h + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (u = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, d = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : h) && l < (t.isFixed ? 0 : h) + this.viewportHeight + this.viewportOffsetTop), u && d ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, n, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                for (f = this.backgrounds.length - 1; f >= 0; f--)i = this.backgrounds[f], e = i.isFixed ? 0 : 1, s = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (h + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, p(i.$element, s, o)
            }
        }, _handleScrollEvent: function () {
            var t = this, e = !1, i = function () {
                t._repositionElements(), e = !1
            }, s = function () {
                e || (u(i), e = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, s), s()
        }, _startAnimationLoop: function () {
            var t = this;
            this._animationLoop = function () {
                u(t._animationLoop), t._repositionElements()
            }, this._animationLoop()
        }
    }, t.fn[n] = function (e) {
        var i = arguments;
        return e === s || "object" == typeof e ? this.each(function () {
            t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new o(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
            var s = t.data(this, "plugin_" + n);
            s instanceof o && "function" == typeof s[e] && s[e].apply(s, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + n, null)
        }) : void 0
    }, t[n] = function () {
        var i = t(e);
        return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
    }, t[n].scrollProperty = a, t[n].positionProperty = l, e.Stellar = o
}(jQuery, this, document);
!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    e = function () {
        function e(e, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(e),
                appendDots: i(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (i, e) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, s, o), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
        }

        var t = 0;
        return e
    }(), e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t)o = t, t = null; else if (0 > t || t >= s.slideCount)return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({height: e}, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {}, s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), o[s.animType] = s.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.asNavFor = function (e) {
        var t = this, o = t.options.asNavFor;
        o && null !== o && (o = i(o).not(t.$slider)), null !== o && "object" == typeof o && o.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer), i.slideCount > i.options.slidesToShow && i.paused !== !0 && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this;
        i.options.infinite === !1 ? 1 === i.direction ? (i.currentSlide + 1 === i.slideCount - 1 && (i.direction = 0), i.slideHandler(i.currentSlide + i.options.slidesToScroll)) : (0 === i.currentSlide - 1 && (i.direction = 1), i.slideHandler(i.currentSlide - i.options.slidesToScroll)) : i.slideHandler(i.currentSlide + i.options.slidesToScroll)
    }, e.prototype.buildArrows = function () {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
            for (t = '<ul class="' + o.options.dotsClass + '">', e = 0; e <= o.getDotCount(); e += 1)t += "<li>" + o.options.customPaging.call(this, o, e) + "</li>";
            t += "</ul>", o.$dots = i(t).appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; s > i; i++) {
                var a = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var d = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    a.appendChild(d)
                }
                o.appendChild(a)
            }
            l.$slider.html(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this, l = !1, a = r.$slider.width(), d = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = a : "min" === r.respondTo && (n = Math.min(d, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this, l = i(e.target);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = 0 !== r.slideCount % r.options.slidesToScroll, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case"index":
                var a = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(a), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t, o = this;
        if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1])i = e[e.length - 1]; else for (var s in e) {
            if (i < e[s]) {
                i = t;
                break
            }
            t = e[s]
        }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide), e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && i("li", e.$dots).off("mouseenter.slick", i.proxy(e.setPaused, e, !0)).off("mouseleave.slick", i.proxy(e.setPaused, e, !1))), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", i.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.html(i))
    }, e.prototype.clickHandler = function (i) {
        var e = this;
        e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.options.arrows === !0 && (t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove())), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        var i = this;
        return i.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this, e = 0, t = 0, o = 0;
        if (i.options.infinite === !0)for (; e < i.slideCount;)++o, e = t + i.options.slidesToShow, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (i.options.centerMode === !0)o = i.slideCount; else for (; e < i.slideCount;)++o, e = t + i.options.slidesToShow, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s = this, n = 0;
        return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = -1 * s.slideWidth * s.options.slidesToShow, n = -1 * t * s.options.slidesToShow), 0 !== s.slideCount % s.options.slidesToScroll && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = -1 * (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth, n = -1 * (s.options.slidesToShow - (i - s.slideCount)) * t) : (s.slideOffset = -1 * s.slideCount % s.options.slidesToScroll * s.slideWidth, n = -1 * s.slideCount % s.options.slidesToScroll * t))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (i + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? -1 * i * s.slideWidth + s.slideOffset : -1 * i * t + n, s.options.variableWidth === !0 && (o = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), e = o[0] ? -1 * o[0].offsetLeft : 0, s.options.centerMode === !0 && (o = s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), e = o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        var e = this;
        return e.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this, t = 0, o = 0, s = [];
        for (e.options.infinite === !1 ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); i > t;)s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o, s = this;
        return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function (e, n) {
            return n.offsetLeft - o + i(n).outerWidth() / 2 > -1 * s.swipeLeft ? (t = n, !1) : void 0
        }), e = Math.abs(i(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        var t = this;
        t.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.on("click.slick", {message: "next"}, i.changeSlide))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.setPaused, e, !0)).on("mouseleave.slick", i.proxy(e.setPaused, e, !1))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", i.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show(), i.options.autoplay === !0 && i.autoPlay()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({data: {message: "previous"}}) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({data: {message: "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this), t = i(this).attr("data-lazy"), o = document.createElement("img");
                o.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, o.src = t
            })
        }

        var t, o, s, n, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = s + r.options.slidesToShow, r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(o))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        var i = this;
        i.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.paused = !1, i.autoPlay()
    }, e.prototype.postSlide = function (i) {
        var e = this;
        e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA()
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        var i = this;
        i.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function () {
        var e, t, o = this;
        e = i("img[data-lazy]", o.$slider).length, e > 0 && (t = i("img[data-lazy]", o.$slider).first(), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function () {
            t.removeAttr("data-lazy"), o.progressiveLazyLoad(), o.options.adaptiveHeight === !0 && o.setPosition()
        }).error(function () {
            t.removeAttr("data-lazy"), o.progressiveLazyLoad()
        }))
    }, e.prototype.refresh = function (e) {
        var t = this, o = t.currentSlide;
        t.destroy(!0), i.extend(t, t.initials, {currentSlide: o}), t.init(), e || t.changeSlide({
            data: {
                message: "index",
                index: o
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)if (o = s.breakpoints.length - 1, t = n[e].breakpoint, n.hasOwnProperty(e)) {
                for (; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
            }
            s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), e.options.autoplay === !0 && e.focusHandler()
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, o.slideCount < 1 || 0 > i || i > o.slideCount - 1 ? !1 : (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this, s = {};
        o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = -1 * t.slideWidth * o, t.options.rtl === !0 ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function (e, t, o) {
        var s, n, r = this;
        if ("responsive" === e && "array" === i.type(t))for (n in t)if ("array" !== i.type(r.options.responsive))r.options.responsive = [t[n]]; else {
            for (s = r.options.responsive.length - 1; s >= 0;)r.options.responsive[s].breakpoint === t[n].breakpoint && r.options.responsive.splice(s, 1), s--;
            r.options.responsive.push(t[n])
        } else r.options[e] = t;
        o === !0 && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this, e = document.body.style;
        i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = null !== i.animType && i.animType !== !1
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0 ? (e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; o > e; e += 1)t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.setPaused = function (i) {
        var e = this;
        e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = i, i ? e.autoPlayClear() : e.autoPlay())
    }, e.prototype.selectHandler = function (e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(s), void t.asNavFor(s)) : void t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l = null, a = this;
        return e = e || !1, a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i || a.slideCount <= a.options.slidesToShow ? void 0 : (e === !1 && a.asNavFor(i), o = i, l = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (0 > i || i > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (0 > i || i > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o))) : (a.options.autoplay === !0 && clearInterval(a.autoPlayTimer), s = 0 > o ? 0 !== a.slideCount % a.options.slidesToScroll ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? 0 !== a.slideCount % a.options.slidesToScroll ? 0 : o - a.slideCount : o,
            a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
            a.postSlide(s)
        })) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 ? a.animateSlide(l, function () {
            a.postSlide(s)
        }) : a.postSlide(s))))
    }, e.prototype.startLoad = function () {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "left" : "right" : "vertical"
    }, e.prototype.swipeEnd = function () {
        var i, e = this;
        if (e.dragging = !1, e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0, void 0 === e.touchObject.curX)return !1;
        if (e.touchObject.edgeHit === !0 && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe)switch (e.swipeDirection()) {
            case"left":
                i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(i), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
                break;
            case"right":
                i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(i), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
        } else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== i.type.indexOf("mouse")))switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case"start":
                e.swipeStart(i);
                break;
            case"move":
                e.swipeMove(i);
                break;
            case"end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !r.dragging || n && 1 !== n.length ? !1 : (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), t = r.swipeDirection(), "vertical" !== t ? (void 0 !== i.originalEvent && r.touchObject.swipeLength > 4 && i.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? e + o * s : e + o * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = e + o * s), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i, e = this;
        i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function () {
        var i = this;
        document[i.hidden] ? (i.paused = !0, i.autoPlayClear()) : i.options.autoplay === !0 && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            i(this).attr({role: "option", "aria-describedby": "slick-slide" + e.instanceUid + t})
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (t) {
            i(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + t,
                id: "slick-slide" + e.instanceUid + t
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.activateADA = function () {
        var i = this, e = i.$slider.find("*").is(":focus");
        i.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false",
            tabindex: "0"
        }).find("a, input, button, select").attr({tabindex: "0"}), e && i.$slideTrack.find(".slick-active").focus()
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.isPlay && (o.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
            }, 0)
        })
    }, i.fn.slick = function () {
        var i, t = this, o = arguments[0], s = Array.prototype.slice.call(arguments, 1), n = t.length, r = 0;
        for (r; n > r; r++)if ("object" == typeof o || "undefined" == typeof o ? t[r].slick = new e(t[r], o) : i = t[r].slick[o].apply(t[r].slick, s), "undefined" != typeof i)return i;
        return t
    }
});
!function (e) {
    var t = e(window);
    e.fn.viewportOffset = function () {
        var o = e(this).offset();
        return {left: o.left - t.scrollLeft(), top: o.top - t.scrollTop()}
    }
}(jQuery), function (e) {
    if (Modernizr.cssanimations || (e(".fade").addClass("fade-ie"), e(".thin-line div, .thin-line span, .lines, .icons").addClass("anim-ie")), Modernizr.touch || (e("#introduction").addClass("desktop"), e.stellar({horizontalScrolling: !1}), window.onresize = function () {
            window.location.href = window.location.href
        }), e(window).width() < 768)e(".the-views").prependTo("#views .row:last-of-type"); else if (e(window).width() < 992)e(".the-views").prependTo("#views .row:first-of-type"); else if (!/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({forceHeight: !1, smoothScrolling: !1})
    }
    if (e(window).width() < 768) {
        e(".first-img").insertBefore(".second-img"), e(".third-img").insertAfter(".second-img"), e(".fourth-img").insertAfter(".third-img"), e(".the-building-title").insertAfter(".fourth-img"), e("#layers").appendTo("#map"), e(".tcr").text("Tottenham CR"), e(".eal").text("Ealing B"), e(".tow").text("Tower G"), e(".table .td").each(function () {
            e(this).attr("data-mobile") && e(this).text(e(this).data("mobile"))
        }), e(".mobile-plans").slick({infinite: !1});
        var t = e(".subheader.text-center").position().top;
        e(".mobile-plans button").css({top: t + 15}), setTimeout(function () {
            var t = e(".floor-box");
            t.slideUp(10)
        }, 500)
    }
    e(window).resize(function () {
        if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) || location.reload(), e(window).width() < 768)e(".the-views").prependTo("#views .row:last-of-type"); else if (e(window).width() < 992)e(".the-views").prependTo("#views .row:first-of-type"); else if (!/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
            skrollr.init({forceHeight: !1, smoothScrolling: !1})
        }
        if (e(window).width() < 768) {
            e(".first-img").insertBefore(".second-img"), e(".third-img").insertAfter(".second-img"), e(".fourth-img").insertAfter(".third-img"), e(".the-building-title").insertAfter(".fourth-img"), e("#layers").appendTo("#map"), e(".tcr").text("Tottenham CR"), e(".eal").text("Ealing B"), e(".tow").text("Tower G"), e(".table .td").each(function () {
                e(this).attr("data-mobile") && e(this).text(e(this).data("mobile"))
            }), e(".mobile-plans").slick({infinite: !1});
            var t = e(".subheader.text-center").position().top;
            e(".mobile-plans button").css({top: t + 15}), setTimeout(function () {
                var t = e(".floor-box");
                t.slideUp(10)
            }, 500)
        }
        var t = e(".subheader.text-center").position().top;
        e(".mobile-plans button").css({top: t + 15})
    }), e("body").fadeTo(300, 1), e(document).on("click", "#menu-btn", function () {
        e("nav").slideToggle()
    });
    var o = function () {
        e(window).width() < 768 && e("#specifications h4").click(function () {
            e(this).find("span").text(function (e, t) {
                return "More" === t ? "Close" : "More"
            }), e(this).next("p").slideToggle()
        })
    };
    if (o(), !Modernizr.svg)for (var i = document.getElementsByTagName("img"), r = /.*\.svg$/, a = i.length, n = 0; a > n; n++)i[n].src.match(r) && (i[n].src = i[n].src.slice(0, -3) + "png", console.log(i[n].src));
    if (e("body").scrollspy({target: "#navbar", offset: 85}), e(".logo").click(function () {
            e("html, body").animate({scrollTop: 0}, 500)
        }), e("nav li").click(function (t) {
            if(location.pathname =="/" && $(this).find("a").text()!="Blog")
                t.preventDefault(), e("nav li").removeClass("active"), e(this).addClass("active"), e("html, body").animate({scrollTop: e(e(this).find("a").attr("href")).offset().top - e("#navigation").outerHeight()}, 500)
            else{
                window.location.href="http://"+ window.location.hostname;
            }
        }), e(".level, .available").mouseover(function (t) {
            e(this).hasClass("active") || e(this).stop(!0, !0).css({backgroundColor: "#6c89a9"}), t.preventDefault()
        }), e('.level, .available:not(".active")').mouseout(function (t) {
            e(this).hasClass("active") || e(this).stop(!0, !0).css({backgroundColor: "#89a1ba"}), t.preventDefault()
        }), e(".available").hover(function (t) {
            var o = e(this).data("bg");
            e("#" + o).mouseenter()
        }, function (t) {
            var o = e(this).data("bg");
            e("#" + o).mouseleave()
        }), e(".level").hover(function (t) {
            var o = e(this).data("floor");
            e("." + o).mouseenter()
        }, function (t) {
            var o = e(this).data("floor");
            e("." + o).mouseleave()
        }), e(".level").click(function (t) {
            var o = e(this).data("floor");
            e("." + o).trigger("click")
        }), e(".available").click(function () {
            var t = e(this).data("floor"), o = e(this).data("bg");
            e(".available").not(e(this)).removeClass("active").css({backgroundColor: "#89a1ba"}), e(".level").not("#" + o).removeClass("active").css({backgroundColor: "#89a1ba"}), e("#schedule, #plus-mobile").toggleClass("active"), e(".floor-box").not("." + t).slideUp(), e(".floor-box .container").toggleClass("active"), e(this).hasClass("active") ? (e(this).removeClass("active"), e("#" + o).removeClass("active"), e("." + t + " .container").removeClass("active")) : (e(this).addClass("active"), e("#" + o).addClass("active"), e("." + t + " .container").addClass("active")), e("." + t).slideToggle(400, function () {
                e("html, body").animate({scrollTop: e(this).offset().top - e("#navigation").outerHeight() - 35}, 500)
            })
        }), e(".close-btn").click(function () {
            e(".available, .level").removeClass("active").css({backgroundColor: "#89a1ba"}), e(".floor-box .container").removeClass("active"), e(".floor-box").slideUp(), e("html, body").animate({scrollTop: e("#schedule").offset().top - e("#navigation").outerHeight()}, 500)
        }), e(window).width() < 768)var s = L.map("map", {
        center: [51.503754, -.014841],
        zoom: 17
    }); else var s = L.map("map", {center: [51.501617, -.018582], zoom: 17});
    L.tileLayer.grayscale("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        maxZoom: 18,
        id: "jeffceriello.nd7obhnh",
        accessToken: "pk.eyJ1IjoiamVmZmNlcmllbGxvIiwiYSI6Ikhrakxrd00ifQ.SlVngzIXeS5UPC8UGmy1OA"
    }).addTo(s), s.scrollWheelZoom.disable();
    var l = L.icon({
        iconUrl: "http://rav.25churchillplace.codevery.com/wp-content/themes/churchillplace/images/pin.png",
        shadowUrl: "",
        iconSize: [43, 64],
        shadowSize: [0, 0],
        iconAnchor: [21, 64],
        shadowAnchor: [0, 0],
        popupAnchor: [0, 0]
    });
    L.marker([51.503754, -.014841], {icon: l}).addTo(s);
    var p = {
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.014782, 51.504711]},
            properties: {title: "Barclays Bank", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.014618, 51.504648]},
            properties: {title: "Idea Store", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.014532, 51.504556]},
            properties: {title: "James Shoe Care", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.014495, 51.504474]},
            properties: {title: "The Post Office", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.0145, 51.504394]},
            properties: {title: "Runners Need", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018368, 51.504586]},
            properties: {title: "The Kooples", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018271, 51.504521]},
            properties: {title: "Gant", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.017796, 51.504734]},
            properties: {title: "Mango", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018349, 51.50488]},
            properties: {title: "Watches of Switzerland", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.017823, 51.504906]},
            properties: {title: "Levi's", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.01892, 51.503716]},
            properties: {title: "T.M.Lewin", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018193, 51.503671]},
            properties: {title: "COS", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.017839, 51.503572]},
            properties: {title: "Oliver Bonas", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.017668, 51.503275]},
            properties: {title: "Molton Brown", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.017719, 51.503058]},
            properties: {title: "Whistles", markerColor: "#6D8AAA"}
        }]
    };
    shopping = L.geoJson(p, {
        style: function (e) {
            return {color: e.properties.markerColor}
        }, pointToLayer: function (e, t) {
            return new L.CircleMarker(t, {radius: 8, fillOpacity: 1, stroke: !1})
        }, onEachFeature: function (e, t) {
            t.bindPopup(e.properties.title)
        }
    }), s.addLayer(shopping);
    var c = {
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.014546, 51.504319]},
            properties: {title: "Birleys", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.014623, 51.504249]},
            properties: {title: "Jamie's Italian", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.01476, 51.504194]},
            properties: {title: "Rocket Restaurant & Bar", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.014921, 51.504172]},
            properties: {title: "Starbucks", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.017654, 51.504456]},
            properties: {title: "Bene Bene", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018695, 51.504787]},
            properties: {title: "Chop’d", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.017542, 51.504713]},
            properties: {title: "Plateau Bar, Restaurant & Grill", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018657, 51.504907]},
            properties: {title: "Waitrose Food", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018164, 51.50289]},
            properties: {title: "Gourmet Burger Kitchen", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.018529, 51.503067]},
            properties: {title: "Obicà Mozzarella Bar", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.019172, 51.503]},
            properties: {title: "Paul", markerColor: "#6D8AAA"}
        }, {
            type: "Feature",
            geometry: {type: "Point", coordinates: [-.019526, 51.503147]},
            properties: {title: "Wildwood", markerColor: "#6D8AAA"}
        }]
    };
    food = L.geoJson(c, {
        style: function (e) {
            return {color: e.properties.markerColor}
        }, pointToLayer: function (e, t) {
            return new L.CircleMarker(t, {radius: 8, fillOpacity: 1, stroke: !1})
        }, onEachFeature: function (e, t) {
            t.bindPopup(e.properties.title)
        }
    });
    var d = {Shopping: shopping, "Food & Drink": food}, m = L.control.layers(d, null, {collapsed: !1});
    m.addTo(s), m._container.remove(), document.getElementById("layers").appendChild(m.onAdd(s)), e("#layers label").wrap('<div class="col-xs-6"/>'), e("#layers label").first().addClass("active"), e("#layers label").click(function () {
        e("#location label").removeClass("active"), e(this).addClass("active")
    }), e(".plan-btn").click(function () {
        e(".list-plans li").removeClass("active"), e(this).addClass("active");
        var t = e(this).data("type");
        e(".floor-plan, .info-box").hide(), e(".plan-" + t).fadeIn(), e("." + t + "-info").fadeIn(), e(".floor-box .subheader span").html(e(this).text())
    }), e(window).scroll(function () {
        var t = e(".fade");
        t.each(function () {
            e(this).viewportOffset().top + 100 > e(window).height() ? e(this).removeClass("fade-in") : e(this).addClass("fade-in")
        });
        var o = e(".transport ul li div div"), i = e(".transport ul li div span");
        o.each(function () {
            e(this).viewportOffset().top > e(window).height() ? e(this).removeClass("anim") : e(this).addClass("anim")
        }), i.each(function () {
            e(this).viewportOffset().top > e(window).height() ? e(this).removeClass("anim") : e(this).addClass("anim")
        })
    });
    var u = e(".zoom-element").panzoom({minScale: 1});
    u.parent().on("mousewheel.focal", function (e) {
        e.preventDefault();
        var t = e.delta || e.originalEvent.wheelDelta, o = t ? 0 > t : e.originalEvent.deltaY > 0;
        u.panzoom("zoom", o, {increment: .1, animate: !1, focal: e})
    }), e(".overlay").on("touchstart mousedown", function () {
        e(this).fadeOut()
    }), e(".leaflet-control-layers-base label").on("click", function (e) {
    })
}(jQuery);
!function (t, e) {
    "use strict";
    var n = 500, a = "sqrt", o = 1, r = "data-menu-top", i = "data-menu-offset", u = "data-menu-duration", c = "data-menu-ignore", l = e.skrollr, s = e.history, f = !!s.pushState, h = function (e) {
        return e !== t && e ? "A" === e.tagName.toUpperCase() ? e : h(e.parentNode) : !1
    }, p = function (t) {
        if (1 === t.which || 0 === t.button) {
            var e = h(t.target);
            e && m(e) && t.preventDefault()
        }
    }, m = function (n, a) {
        var o;
        if (y) {
            if (n.hostname !== e.location.hostname)return !1;
            if (n.pathname !== t.location.pathname)return !1;
            o = n.hash
        } else o = n.getAttribute("href");
        if (!/^#/.test(o))return !1;
        if (!a && null !== n.getAttribute(c))return !1;
        var l, h;
        if (h = T ? T(n) : n.getAttribute(r), null !== h)l = /p$/.test(h) ? h.slice(0, -1) / 100 * t.documentElement.clientHeight : +h * k; else {
            var p = t.getElementById(o.substr(1));
            if (!p)return !1;
            l = v.relativeToAbsolute(p, "top", "top");
            var m = p.getAttribute(i);
            null !== m && (l += +m)
        }
        f && N && !a && s.pushState({top: l}, "", o);
        var d = parseInt(n.getAttribute(u), 10), q = A(v.getScrollTop(), l);
        return isNaN(d) || (q = d), E && E(o, l), S && !a ? v.animateTo(l, {duration: q, easing: b}) : g(function () {
            v.setScrollTop(l)
        }), !0
    }, d = function () {
        if (e.location.hash && t.querySelector) {
            var n = t.querySelector('a[href="' + e.location.hash + '"]');
            n || (n = t.createElement("a"), n.href = e.location.hash), m(n, !0)
        }
    }, g = function (t) {
        e.setTimeout(t, 1)
    };
    l.menu = {}, l.menu.init = function (r, i) {
        v = r, i = i || {}, b = i.easing || a, S = i.animate !== !1, A = i.duration || n, T = i.handleLink, k = i.scale || o, y = i.complexLinks === !0, E = i.change, N = i.updateUrl !== !1, "number" == typeof A && (A = function (t) {
            return function () {
                return t
            }
        }(A)), l.addEvent(t, "click", p), f && l.addEvent(e, "popstate", function (t) {
            var e = t.state || {}, n = e.top || 0;
            g(function () {
                v.setScrollTop(n)
            })
        }, !1), d()
    }, l.menu.click = function (t) {
        m(t)
    };
    var v, b, A, S, T, k, y, E, N;
    g(function () {
        e.location.hash && e.scrollTo(0, 0)
    })
}(document, window);