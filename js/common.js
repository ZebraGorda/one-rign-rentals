/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    } if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                } return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                } k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                } return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
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
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    } return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            } j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});


/**
 * Check if browser is a mobile device
 */
(function() {
    (jQuery.browser = jQuery.browser || {}).mobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
}(navigator.userAgent || navigator.vendor || window.opera));

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
        c = function(c) {
            a(c).on("click", b, this.close)
        };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, b.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function(b) {
        var c = this,
            d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                i.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this),
            e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            f = a.extend({}, e.data(), d.data()),
            g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : d.data(),
            i = d.attr("data-parent"),
            j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        a(d).remove(), a(e).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop",
        e = "[data-toggle=dropdown]",
        f = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                    g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = " li:not(.divider):visible a",
                    i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this,
                d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(),
                i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(),
                    l = e,
                    m = document.documentElement.scrollTop || document.body.scrollTop,
                    n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
                    o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
                    p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    }, b.prototype.applyPlacement = function(b, c) {
        var d, e = this.tip(),
            f = e[0].offsetWidth,
            g = e[0].offsetHeight,
            h = parseInt(e.css("margin-top"), 10),
            i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth,
            k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function() {
        return this.getTitle()
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function() {
        this.enabled = !0
    }, b.prototype.disable = function() {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        {
            var c = this;
            this.$body.find(this.selector).map(function() {
                var d = a(this),
                    e = d.data("target") || d.attr("href"),
                    f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [
                    [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
                ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        }
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            d = c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - a
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }))
            }
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
                c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery);


/**
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 *
 * A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * License: MIT
 *
 * http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
(function(e, t, n) {
    var r = e();
    e.fn.dropdownHover = function(n) {
        if ("ontouchstart" in document) return this;
        r = r.add(this.parent());
        return this.each(function() {
            function h() {
                r.find(":focus").blur();
                l.instantlyCloseOthers === !0 && r.removeClass("open");
                t.clearTimeout(c);
                s.addClass("open");
                i.trigger(a)
            }
            var i = e(this),
                s = i.parent(),
                o = {
                    delay: 0,
                    instantlyCloseOthers: !0
                },
                u = {
                    delay: e(this).data("delay"),
                    instantlyCloseOthers: e(this).data("close-others")
                },
                a = "show.bs.dropdown",
                f = "hide.bs.dropdown",
                l = e.extend(!0, {}, o, n, u),
                c;
            s.hover(function(e) {
                if (!s.hasClass("open") && !i.is(e.target)) return !0;
                h()
            }, function() {
                c = t.setTimeout(function() {
                    s.removeClass("open");
                    i.trigger(f)
                }, l.delay)
            });
            i.hover(function(event) {
                if (!s.hasClass("open") && !s.is(event.target)) return !0;
                h()
            });
            s.find(".dropdown-submenu").each(function() {
                var n = e(this),
                    r;
                n.hover(function() {
                    t.clearTimeout(r);
                    n.children(".dropdown-menu").show();
                    n.siblings().children(".dropdown-menu").hide()
                }, function() {
                    var e = n.children(".dropdown-menu");
                    r = t.setTimeout(function() {
                        e.hide()
                    }, l.delay)
                })
            })
        })
    };
    e(document).ready(function() {
        e('[data-hover="dropdown"]').dropdownHover()
    })
})(jQuery, this);


// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(window, function(n, r) {
        var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
        i = n(r);
        a = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        c = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[u] = this.id;
                c[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || a)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete c[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = this.element[w]) != null ? o : [];
                i.push(this.id);
                this.element[w] = i
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = t[w];
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                e = n.extend({}, n.fn[g].defaults, e);
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = c[i[0][u]];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke.call(this, "disable")
            },
            enable: function() {
                return d._invoke.call(this, "enable")
            },
            destroy: function() {
                return d._invoke.call(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t) {
                this.each(function() {
                    var e;
                    e = l.getWaypointsByElement(this);
                    return n.each(e, function(e, n) {
                        n[t]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(c, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = c[n(t)[0][u]];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.on("load.waypoints", function() {
            return n[m]("refresh")
        })
    })
}).call(this);


// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    (function(t, n) {
        if (typeof define === "function" && define.amd) {
            return define(["jquery", "waypoints"], n)
        } else {
            return n(t.jQuery)
        }
    })(window, function(t) {
        var n, i;
        n = {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: "stuck",
            direction: "down right"
        };
        i = function(t, n) {
            var i;
            t.wrap(n.wrapper);
            i = t.parent();
            return i.data("isWaypointStickyWrapper", true)
        };
        t.waypoints("extendFn", "sticky", function(r) {
            var e, a, s;
            a = t.extend({}, t.fn.waypoint.defaults, n, r);
            e = i(this, a);
            s = a.handler;
            a.handler = function(n) {
                var i, r;
                i = t(this).children(":first");
                r = a.direction.indexOf(n) !== -1;
                i.toggleClass(a.stuckClass, r);
                e.height(r ? i.outerHeight() : "");
                if (s != null) {
                    return s.call(this, n)
                }
            };
            e.waypoint(a);
            return this.data("stuckClass", a.stuckClass)
        });
        return t.waypoints("extendFn", "unsticky", function() {
            var t;
            t = this.parent();
            if (!t.data("isWaypointStickyWrapper")) {
                return this
            }
            t.waypoint("destroy");
            this.unwrap();
            return this.removeClass(this.data("stuckClass"))
        })
    })
}).call(this);


/*! http://mths.be/placeholder v2.0.7 by @mathias */
;
(function(f, h, $) {
    var a = 'placeholder' in h.createElement('input'),
        d = 'placeholder' in h.createElement('textarea'),
        i = $.fn,
        c = $.valHooks,
        k, j;
    if (a && d) {
        j = i.placeholder = function() {
            return this
        };
        j.input = j.textarea = true
    } else {
        j = i.placeholder = function() {
            var l = this;
            l.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
                'focus.placeholder': b,
                'blur.placeholder': e
            }).data('placeholder-enabled', true).trigger('blur.placeholder');
            return l
        };
        j.input = a;
        j.textarea = d;
        k = {
            get: function(m) {
                var l = $(m);
                return l.data('placeholder-enabled') && l.hasClass('placeholder') ? '' : m.value
            },
            set: function(m, n) {
                var l = $(m);
                if (!l.data('placeholder-enabled')) {
                    return m.value = n
                }
                if (n == '') {
                    m.value = n;
                    if (m != h.activeElement) {
                        e.call(m)
                    }
                } else {
                    if (l.hasClass('placeholder')) {
                        b.call(m, true, n) || (m.value = n)
                    } else {
                        m.value = n
                    }
                }
                return l
            }
        };
        a || (c.input = k);
        d || (c.textarea = k);
        $(function() {
            $(h).delegate('form', 'submit.placeholder', function() {
                var l = $('.placeholder', this).each(b);
                setTimeout(function() {
                    l.each(e)
                }, 10)
            })
        });
        $(f).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = ''
            })
        })
    }

    function g(m) {
        var l = {},
            n = /^jQuery\d+$/;
        $.each(m.attributes, function(p, o) {
            if (o.specified && !n.test(o.name)) {
                l[o.name] = o.value
            }
        });
        return l
    }

    function b(m, n) {
        var l = this,
            o = $(l);
        if (l.value == o.attr('placeholder') && o.hasClass('placeholder')) {
            if (o.data('placeholder-password')) {
                o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id'));
                if (m === true) {
                    return o[0].value = n
                }
                o.focus()
            } else {
                l.value = '';
                o.removeClass('placeholder');
                l == h.activeElement && l.select()
            }
        }
    }

    function e() {
        var q, l = this,
            p = $(l),
            m = p,
            o = this.id;
        if (l.value == '') {
            if (l.type == 'password') {
                if (!p.data('placeholder-textinput')) {
                    try {
                        q = p.clone().attr({
                            type: 'text'
                        })
                    } catch (n) {
                        q = $('<input>').attr($.extend(g(this), {
                            type: 'text'
                        }))
                    }
                    q.removeAttr('name').data({
                        'placeholder-password': true,
                        'placeholder-id': o
                    }).bind('focus.placeholder', b);
                    p.data({
                        'placeholder-textinput': q,
                        'placeholder-id': o
                    }).before(q)
                }
                p = p.removeAttr('id').hide().prev().attr('id', o).show()
            }
            p.addClass('placeholder');
            p[0].value = p.attr('placeholder')
        } else {
            p.removeClass('placeholder')
        }
    }
}(this, document, jQuery));


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
! function(s) {
    "use strict";

    function e(s) {
        return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
    }

    function n(s, e) {
        var n = a(s, e) ? c : t;
        n(s, e)
    }
    var a, t, c;
    "classList" in document.documentElement ? (a = function(s, e) {
        return s.classList.contains(e)
    }, t = function(s, e) {
        s.classList.add(e)
    }, c = function(s, e) {
        s.classList.remove(e)
    }) : (a = function(s, n) {
        return e(n).test(s.className)
    }, t = function(s, e) {
        a(s, e) || (s.className = s.className + " " + e)
    }, c = function(s, n) {
        s.className = s.className.replace(e(n), " ")
    });
    var i = {
        hasClass: a,
        addClass: t,
        removeClass: c,
        toggleClass: n,
        has: a,
        add: t,
        remove: c,
        toggle: n
    };
    "function" == typeof define && define.amd ? define(i) : s.classie = i
}(window);


/**
 * uisearch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
! function(t) {
    "use strict";

    function e() {
        var e = !1;
        return function(t) {
            (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
        }(navigator.userAgent || navigator.vendor || t.opera), e
    }

    function n(t) {
        this.el = t, this.inputEl = t.querySelector("form > input.sb-search-input"), this._initEvents()
    }!t.addEventListener && t.Element && function() {
        function t(t, e) {
            Window.prototype[t] = HTMLDocument.prototype[t] = Element.prototype[t] = e
        }
        var e = [];
        t("addEventListener", function(t, n) {
            var i = this;
            e.unshift({
                __listener: function(t) {
                    t.currentTarget = i, t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop, t.preventDefault = function() {
                        t.returnValue = !1
                    }, t.relatedTarget = t.fromElement || null, t.stopPropagation = function() {
                        t.cancelBubble = !0
                    }, t.relatedTarget = t.fromElement || null, t.target = t.srcElement || i, t.timeStamp = +new Date, n.call(i, t)
                },
                listener: n,
                target: i,
                type: t
            }), this.attachEvent("on" + t, e[0].__listener)
        }), t("removeEventListener", function(t, n) {
            for (var i = 0, o = e.length; o > i; ++i)
                if (e[i].target == this && e[i].type == t && e[i].listener == n) return this.detachEvent("on" + t, e.splice(i, 1)[0].__listener)
        }), t("dispatchEvent", function(t) {
            try {
                return this.fireEvent("on" + t.type, t)
            } catch (n) {
                for (var i = 0, o = e.length; o > i; ++i) e[i].target == this && e[i].type == t.type && e[i].call(this, t)
            }
        })
    }(), !String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }), n.prototype = {
        _initEvents: function() {
            var t = this,
                e = function(e) {
                    e.stopPropagation(), t.inputEl.value = t.inputEl.value.trim(), classie.has(t.el, "sb-search-open") ? classie.has(t.el, "sb-search-open") && /^\s*$/.test(t.inputEl.value) && (e.preventDefault(), t.close()) : (e.preventDefault(), t.open())
                };
            this.el.addEventListener("click", e), this.el.addEventListener("touchstart", e), this.inputEl.addEventListener("click", function(t) {
                t.stopPropagation()
            }), this.inputEl.addEventListener("touchstart", function(t) {
                t.stopPropagation()
            })
        },
        open: function() {
            var t = this;
            classie.add(this.el, "sb-search-open"), e() || this.inputEl.focus();
            var n = function() {
                t.close(), this.removeEventListener("click", n), this.removeEventListener("touchstart", n)
            };
            document.addEventListener("click", n), document.addEventListener("touchstart", n)
        },
        close: function() {
            this.inputEl.blur(), classie.remove(this.el, "sb-search-open")
        }
    }, t.UISearch = n
}(window);

(function($) {
    $(document).ready(function() {
        if ($("#sb-search").length) {
            new UISearch(document.getElementById('sb-search'));
        }
    });
}(jQuery));


/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function(a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }
    var f = "stellar",
        g = {
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
            hideElement: function(a) {
                a.hide()
            },
            showElement: function(a) {
                a.show()
            }
        },
        h = {
            scroll: {
                getLeft: function(a) {
                    return a.scrollLeft()
                },
                setLeft: function(a, b) {
                    a.scrollLeft(b)
                },
                getTop: function(a) {
                    return a.scrollTop()
                },
                setTop: function(a, b) {
                    a.scrollTop(b)
                }
            },
            position: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("margin-left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        i = {
            position: {
                setLeft: function(a, b) {
                    a.css("left", b)
                },
                setTop: function(a, b) {
                    a.css("top", b)
                }
            },
            transform: {
                setPosition: function(a, b, c, d, e) {
                    a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
                }
            }
        },
        j = function() {
            var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                d = a("script")[0].style,
                e = "";
            for (b in d)
                if (c.test(b)) {
                    e = b.match(c)[0];
                    break
                } return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
                function(a) {
                    return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
                }
        }(),
        k = j("transform"),
        l = a("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== d,
        m = l ? function(a, b, c) {
            a.css({
                "background-position-x": b,
                "background-position-y": c
            })
        } : function(a, b, c) {
            a.css("background-position", b + " " + c)
        },
        n = l ? function(a) {
            return [a.css("background-position-x"), a.css("background-position-y")]
        } : function(a) {
            return a.css("background-position").split(" ")
        },
        o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
            setTimeout(a, 1e3 / 60)
        };
    e.prototype = {
        init: function() {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var a = this,
                b = h[a.options.scrollProperty];
            this._getScrollLeft = function() {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function() {
                return b.getTop(a.$scrollElement)
            }
        },
        _defineSetters: function() {
            var b = this,
                c = h[b.options.scrollProperty],
                d = i[b.options.positionProperty],
                e = c.setLeft,
                f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function(a) {
                e(b.$scrollElement, a)
            } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) {
                f(b.$scrollElement, a)
            } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) {
                b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
            }
        },
        _handleWindowLoadAndResize: function() {
            var c = this,
                d = a(b);
            c.options.responsive && d.bind("load." + this.name, function() {
                c.refresh()
            }), d.bind("resize." + this.name, function() {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        },
        refresh: function(c) {
            var d = this,
                e = d._getScrollLeft(),
                f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() {
                var a = d._getScrollLeft(),
                    b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        },
        _detectViewport: function() {
            var a = this.$viewportElement.offset(),
                b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        },
        _findParticles: function() {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== d)
                for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var c, e, f, g, h, i, j, k, l, m = a(this),
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0;
                if (m.data("stellar-elementIsActive")) {
                    if (m.data("stellar-elementIsActive") !== this) return
                } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
                }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element: m,
                    $offsetParent: j,
                    isFixed: "fixed" === m.css("position"),
                    horizontalOffset: c,
                    verticalOffset: e,
                    startingPositionLeft: f,
                    startingPositionTop: g,
                    startingOffsetLeft: k,
                    startingOffsetTop: l,
                    parentOffsetLeft: n,
                    parentOffsetTop: o,
                    stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                    width: m.outerWidth(!0),
                    height: m.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var b, c = this,
                e = this._getScrollLeft(),
                f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() {
                var b, g, h, i, j, k, l, o = a(this),
                    p = n(o),
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this) return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element: o,
                    $offsetParent: l,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: b,
                    verticalOffset: g,
                    startingValueLeft: p[0],
                    startingValueTop: p[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: j,
                    startingOffsetTop: k,
                    parentOffsetLeft: q,
                    parentOffsetTop: r,
                    stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var c = this,
                d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() {
                c.horizontalOffset = c.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() {
                c.verticalOffset = c.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
                l = this._getScrollTop(),
                n = !0,
                o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
            }
        },
        _handleScrollEvent: function() {
            var a = this,
                b = !1,
                c = function() {
                    a._repositionElements(), b = !1
                },
                d = function() {
                    b || (o(c), b = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        },
        _startAnimationLoop: function() {
            var a = this;
            this._animationLoop = function() {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function(b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function() {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);


/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
(function() {
    function a() {}

    function b(a) {
        return f.retinaImageSuffix + a;
    }

    function c(a, c) {
        if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1;
        else {
            if (void 0 !== document.createElement) {
                var d = document.createElement("a");
                d.href = this.path;
                d.pathname = d.pathname.replace(g, b);
                this.at_2x_path = d.href;
            } else {
                var e = this.path.split("?");
                e[0] = e[0].replace(g, b);
                this.at_2x_path = e.join("?");
            }
            this.perform_check = true;
        }
    }

    function d(a) {
        this.el = a;
        this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var b = this;
        this.path.check_2x_variant(function(a) {
            a && b.swap();
        });
    }
    var e = "undefined" == typeof exports ? window : exports,
        f = {
            retinaImageSuffix: "@2x",
            check_mime_type: true,
            force_original_dimensions: true
        };
    e.Retina = a;
    a.configure = function(a) {
        if (null === a) a = {};
        for (var b in a) {
            if (a.hasOwnProperty(b)) {
                f[b] = a[b];
            }
        }
    };
    a.init = function(a) {
        if (null === a) a = e;
        var b = a.onload || function() {};
        a.onload = function() {
            var a, c, e = document.getElementsByTagName("img"),
                f = [];
            for (a = 0; a < e.length; a += 1) {
                c = e[a];
                if (!c.getAttributeNode("data-no-retina")) {
                    f.push(new d(c));
                }
            }
            b();
        };
    };
    a.isRetina = function() {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return e.devicePixelRatio > 1 ? true : e.matchMedia && e.matchMedia(a).matches ? true : false;
    };
    var g = /\.\w+$/;
    e.RetinaImagePath = c;
    c.confirmed_paths = [];
    c.prototype.is_external = function() {
        return !( !this.path.match(/^https?\:/i) || this.path.match("//" + document.domain));
    };
    c.prototype.check_2x_variant = function(a) {
        var b, d = this;
        if (this.is_external()) {
            a(false);
        } else if (this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path) {
            if (this.at_2x_path in c.confirmed_paths) {
                a(true);
            } else {
                b = new XMLHttpRequest;
                b.open("HEAD", this.at_2x_path);
                b.onreadystatechange = function() {
                    if (4 !== b.readyState) return a(false);
                    if (b.status >= 200 && b.status <= 399) {
                        if (f.check_mime_type) {
                            var e = b.getResponseHeader("Content-Type");
                            if (null === e || !e.match(/^image/i)) return a(false);
                        }
                        c.confirmed_paths.push(d.at_2x_path);
                        a(true);
                    }
                    return a(false);
                };
                b.send();
            }
        } else {
            a(true);
        }
    };
    e.RetinaImage = d;
    d.prototype.swap = function(a) {
        function b() {
            if (c.el.complete) {
                if (f.force_original_dimensions) {
                    c.el.setAttribute("width", c.el.offsetWidth);
                    c.el.setAttribute("height", c.el.offsetHeight);
                }
                c.el.setAttribute("src", a);
            } else {
                setTimeout(b, 5);
            }
        }
        if (typeof a === "undefined") {
            a = this.path.at_2x_path;
        }
        var c = this;
        b();
    };
    if (a.isRetina()) {
        a.init(e);
    }
})();



/* jquery.nicescroll
-- version 3.5.0 BETA5
-- copyright 2011-12-13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/
(function(e) {
    function f() {
        var e = document.getElementsByTagName("script");
        var t = e[e.length - 1].src.split("?")[0];
        return t.split("/").length > 0 ? t.split("/").slice(0, -1).join("/") + "/" : ""
    }

    function N(e, t, n) {
        for (var r = 0; r < t.length; r++) n(e, t[r])
    }
    var t = false;
    var n = false;
    var r = false;
    var i = 5e3;
    var s = 2e3;
    var o = 0;
    var u = e;
    var l = f();
    var c = ["ms", "moz", "webkit", "o"];
    var h = window.requestAnimationFrame || false;
    var p = window.cancelAnimationFrame || false;
    if (!h) {
        for (var d in c) {
            var v = c[d];
            if (!h) h = window[v + "RequestAnimationFrame"];
            if (!p) p = window[v + "CancelAnimationFrame"] || window[v + "CancelRequestAnimationFrame"]
        }
    }
    var m = window.MutationObserver || window.WebKitMutationObserver || false;
    var g = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 8 * 3,
        touchbehavior: false,
        hwacceleration: true,
        usetransition: true,
        boxzoom: false,
        dblclickzoom: true,
        gesturezoom: true,
        grabcursorenabled: true,
        autohidemode: true,
        background: "",
        iframeautoresize: true,
        cursorminheight: 32,
        preservenativescrolling: true,
        railoffset: false,
        bouncescroll: true,
        spacebarenabled: true,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: true,
        horizrailenabled: true,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: true,
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
        sensitiverail: true,
        enablemouselockapi: true,
        cursorfixedheight: false,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: true,
        enablescrollonselection: true,
        overflowx: true,
        overflowy: true,
        cursordragspeed: .3,
        rtlmode: false,
        cursordragontouch: false,
        oneaxismousemode: "auto"
    };
    var y = false;
    var b = function() {
        function o() {
            var n = ["-moz-grab", "-webkit-grab", "grab"];
            if (t.ischrome && !t.ischrome22 || t.isie) n = [];
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                e.style["cursor"] = i;
                if (e.style["cursor"] == i) return i
            }
            return "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
        }
        if (y) return y;
        var e = document.createElement("DIV");
        var t = {};
        t.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
        t.isopera = "opera" in window;
        t.isopera12 = t.isopera && "getUserMedia" in navigator;
        t.isoperamini = Object.prototype.toString.call(window.operamini) === "[object OperaMini]";
        t.isie = "all" in document && "attachEvent" in e && !t.isopera;
        t.isieold = t.isie && !("msInterpolationMode" in e.style);
        t.isie7 = t.isie && !t.isieold && (!("documentMode" in document) || document.documentMode == 7);
        t.isie8 = t.isie && "documentMode" in document && document.documentMode == 8;
        t.isie9 = t.isie && "performance" in window && document.documentMode >= 9;
        t.isie10 = t.isie && "performance" in window && document.documentMode >= 10;
        t.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
        if (t.isie9mobile) t.isie9 = false;
        t.isie7mobile = !t.isie9mobile && t.isie7 && /iemobile/i.test(navigator.userAgent);
        t.ismozilla = "MozAppearance" in e.style;
        t.iswebkit = "WebkitAppearance" in e.style;
        t.ischrome = "chrome" in window;
        t.ischrome22 = t.ischrome && t.haspointerlock;
        t.ischrome26 = t.ischrome && "transition" in e.style;
        t.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
        t.hasmstouch = window.navigator.msPointerEnabled || false;
        t.ismac = /^mac$/i.test(navigator.platform);
        t.isios = t.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
        t.isios4 = t.isios && !("seal" in Object);
        t.isandroid = /android/i.test(navigator.userAgent);
        t.trstyle = false;
        t.hastransform = false;
        t.hastranslate3d = false;
        t.transitionstyle = false;
        t.hastransition = false;
        t.transitionend = false;
        var n = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
        for (var r = 0; r < n.length; r++) {
            if (typeof e.style[n[r]] != "undefined") {
                t.trstyle = n[r];
                break
            }
        }
        t.hastransform = t.trstyle != false;
        if (t.hastransform) {
            e.style[t.trstyle] = "translate3d(1px,2px,3px)";
            t.hastranslate3d = /translate3d/.test(e.style[t.trstyle])
        }
        t.transitionstyle = false;
        t.prefixstyle = "";
        t.transitionend = false;
        var n = ["transition", "webkitTransition", "MozTransition", "OTransition", "OTransition", "msTransition", "KhtmlTransition"];
        var i = ["", "-webkit-", "-moz-", "-o-", "-o", "-ms-", "-khtml-"];
        var s = ["transitionend", "webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "msTransitionEnd", "KhtmlTransitionEnd"];
        for (var r = 0; r < n.length; r++) {
            if (n[r] in e.style) {
                t.transitionstyle = n[r];
                t.prefixstyle = i[r];
                t.transitionend = s[r];
                break
            }
        }
        if (t.ischrome26) {
            t.prefixstyle = i[1]
        }
        t.hastransition = t.transitionstyle;
        t.cursorgrabvalue = o();
        t.hasmousecapture = "setCapture" in e;
        t.hasMutationObserver = m !== false;
        e = null;
        y = t;
        return t
    };
    var w = function(e, r) {
        function v() {
            var e = a.win;
            if ("zIndex" in e) return e.zIndex();
            while (e.length > 0) {
                if (e[0].nodeType == 9) return false;
                var t = e.css("zIndex");
                if (!isNaN(t) && t != 0) return parseInt(t);
                e = e.parent()
            }
            return false
        }

        function w(e, t, n) {
            var r = e.css(t);
            var i = parseFloat(r);
            if (isNaN(i)) {
                i = y[r] || 0;
                var s = i == 3 ? n ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1;
                if (a.isie8 && i) i += 1;
                return s ? i : 0
            }
            return i
        }

        function S(e, t, n, r) {
            a._bind(e, t, function(r) {
                var r = r ? r : window.event;
                var i = {
                    original: r,
                    target: r.target || r.srcElement,
                    type: "wheel",
                    deltaMode: r.type == "MozMousePixelScroll" ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        r.preventDefault ? r.preventDefault() : r.returnValue = false;
                        return false
                    },
                    stopImmediatePropagation: function() {
                        r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = true
                    }
                };
                if (t == "mousewheel") {
                    i.deltaY = -1 / 40 * r.wheelDelta;
                    r.wheelDeltaX && (i.deltaX = -1 / 40 * r.wheelDeltaX)
                } else {
                    i.deltaY = r.detail
                }
                return n.call(e, i)
            }, r)
        }

        function x(e, t, n) {
            var r, i;
            var s = 1;
            if (e.deltaMode == 0) {
                r = -Math.floor(e.deltaX * (a.opt.mousescrollstep / (18 * 3)));
                i = -Math.floor(e.deltaY * (a.opt.mousescrollstep / (18 * 3)))
            } else if (e.deltaMode == 1) {
                r = -Math.floor(e.deltaX * a.opt.mousescrollstep);
                i = -Math.floor(e.deltaY * a.opt.mousescrollstep)
            }
            if (t && a.opt.oneaxismousemode && r == 0 && i) {
                r = i;
                i = 0
            }
            if (r) {
                if (a.scrollmom) {
                    a.scrollmom.stop()
                }
                a.lastdeltax += r;
                a.debounced("mousewheelx", function() {
                    var e = a.lastdeltax;
                    a.lastdeltax = 0;
                    if (!a.rail.drag) {
                        a.doScrollLeftBy(e)
                    }
                }, 120)
            }
            if (i) {
                if (a.opt.nativeparentscrolling && n && !a.ispage && !a.zoomactive) {
                    if (i < 0) {
                        if (a.getScrollTop() >= a.page.maxh) return true
                    } else {
                        if (a.getScrollTop() <= 0) return true
                    }
                }
                if (a.scrollmom) {
                    a.scrollmom.stop()
                }
                a.lastdeltay += i;
                a.debounced("mousewheely", function() {
                    var e = a.lastdeltay;
                    a.lastdeltay = 0;
                    if (!a.rail.drag) {
                        a.doScrollBy(e)
                    }
                }, 120)
            }
            e.stopImmediatePropagation();
            return e.preventDefault()
        }
        var a = this;
        this.version = "3.5.0 BETA5";
        this.name = "nicescroll";
        this.me = r;
        this.opt = {
            doc: u("body"),
            win: false
        };
        u.extend(this.opt, g);
        this.opt.snapbackspeed = 80;
        if (e || false) {
            for (var f in a.opt) {
                if (typeof e[f] != "undefined") a.opt[f] = e[f]
            }
        }
        this.doc = a.opt.doc;
        this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "";
        this.ispage = /BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
        this.haswrapper = a.opt.win !== false;
        this.win = a.opt.win || (this.ispage ? u(window) : this.doc);
        this.docscroll = this.ispage && !this.haswrapper ? u(window) : this.win;
        this.body = u("body");
        this.viewport = false;
        this.isfixed = false;
        this.iframe = false;
        this.isiframe = this.doc[0].nodeName == "IFRAME" && this.win[0].nodeName == "IFRAME";
        this.istextarea = this.win[0].nodeName == "TEXTAREA";
        this.forcescreen = false;
        this.canshowonmouseevent = a.opt.autohidemode != "scroll";
        this.onmousedown = false;
        this.onmouseup = false;
        this.onmousemove = false;
        this.onmousewheel = false;
        this.onkeypress = false;
        this.ongesturezoom = false;
        this.onclick = false;
        this.onscrollstart = false;
        this.onscrollend = false;
        this.onscrollcancel = false;
        this.onzoomin = false;
        this.onzoomout = false;
        this.view = false;
        this.page = false;
        this.scroll = {
            x: 0,
            y: 0
        };
        this.scrollratio = {
            x: 0,
            y: 0
        };
        this.cursorheight = 20;
        this.scrollvaluemax = 0;
        this.checkrtlmode = false;
        this.scrollrunning = false;
        this.scrollmom = false;
        this.observer = false;
        this.observerremover = false;
        do {
            this.id = "ascrail" + s++
        } while (document.getElementById(this.id));
        this.rail = false;
        this.cursor = false;
        this.cursorfreezed = false;
        this.selectiondrag = false;
        this.zoom = false;
        this.zoomactive = false;
        this.hasfocus = false;
        this.hasmousefocus = false;
        this.visibility = true;
        this.locked = false;
        this.hidden = false;
        this.cursoractive = true;
        this.overflowx = a.opt.overflowx;
        this.overflowy = a.opt.overflowy;
        this.nativescrollingarea = false;
        this.checkarea = 0;
        this.events = [];
        this.saved = {};
        this.delaylist = {};
        this.synclist = {};
        this.lastdeltax = 0;
        this.lastdeltay = 0;
        this.detected = b();
        var c = u.extend({}, this.detected);
        this.canhwscroll = c.hastransform && a.opt.hwacceleration;
        this.ishwscroll = this.canhwscroll && a.haswrapper;
        this.istouchcapable = false;
        if (c.cantouch && c.ischrome && !c.isios && !c.isandroid) {
            this.istouchcapable = true;
            c.cantouch = false
        }
        if (c.cantouch && c.ismozilla && !c.isios && !c.isandroid) {
            this.istouchcapable = true;
            c.cantouch = false
        }
        if (!a.opt.enablemouselockapi) {
            c.hasmousecapture = false;
            c.haspointerlock = false
        }
        this.delayed = function(e, t, n, r) {
            var i = a.delaylist[e];
            var s = (new Date).getTime();
            if (!r && i && i.tt) return false;
            if (i && i.tt) clearTimeout(i.tt);
            if (i && i.last + n > s && !i.tt) {
                a.delaylist[e] = {
                    last: s + n,
                    tt: setTimeout(function() {
                        a.delaylist[e].tt = 0;
                        t.call()
                    }, n)
                }
            } else if (!i || !i.tt) {
                a.delaylist[e] = {
                    last: s,
                    tt: 0
                };
                setTimeout(function() {
                    t.call()
                }, 0)
            }
        };
        this.debounced = function(e, t, n) {
            var r = a.delaylist[e];
            var i = (new Date).getTime();
            a.delaylist[e] = t;
            if (!r) {
                setTimeout(function() {
                    var t = a.delaylist[e];
                    a.delaylist[e] = false;
                    t.call()
                }, n)
            }
        };
        this.synched = function(e, t) {
            function n() {
                if (a.onsync) return;
                h(function() {
                    a.onsync = false;
                    for (e in a.synclist) {
                        var t = a.synclist[e];
                        if (t) t.call(a);
                        a.synclist[e] = false
                    }
                });
                a.onsync = true
            }
            a.synclist[e] = t;
            n();
            return e
        };
        this.unsynched = function(e) {
            if (a.synclist[e]) a.synclist[e] = false
        };
        this.css = function(e, t) {
            for (var n in t) {
                a.saved.css.push([e, n, e.css(n)]);
                e.css(n, t[n])
            }
        };
        this.scrollTop = function(e) {
            return typeof e == "undefined" ? a.getScrollTop() : a.setScrollTop(e)
        };
        this.scrollLeft = function(e) {
            return typeof e == "undefined" ? a.getScrollLeft() : a.setScrollLeft(e)
        };
        BezierClass = function(e, t, n, r, i, s, o) {
            this.st = e;
            this.ed = t;
            this.spd = n;
            this.p1 = r || 0;
            this.p2 = i || 1;
            this.p3 = s || 0;
            this.p4 = o || 1;
            this.ts = (new Date).getTime();
            this.df = this.ed - this.st
        };
        BezierClass.prototype = {
            B2: function(e) {
                return 3 * e * e * (1 - e)
            },
            B3: function(e) {
                return 3 * e * (1 - e) * (1 - e)
            },
            B4: function(e) {
                return (1 - e) * (1 - e) * (1 - e)
            },
            getNow: function() {
                var e = (new Date).getTime();
                var t = 1 - (e - this.ts) / this.spd;
                var n = this.B2(t) + this.B3(t) + this.B4(t);
                return t < 0 ? this.ed : this.st + Math.round(this.df * n)
            },
            update: function(e, t) {
                this.st = this.getNow();
                this.ed = e;
                this.spd = t;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st;
                return this
            }
        };
        if (this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            };
            if (c.hastranslate3d && c.isios) this.doc.css("-webkit-backface-visibility", "hidden");

            function d() {
                var e = a.doc.css(c.trstyle);
                if (e && e.substr(0, 6) == "matrix") {
                    return e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
                }
                return false
            }
            this.getScrollTop = function(e) {
                if (!e) {
                    var t = d();
                    if (t) return t.length == 16 ? -t[13] : -t[5];
                    if (a.timerscroll && a.timerscroll.bz) return a.timerscroll.bz.getNow()
                }
                return a.doc.translate.y
            };
            this.getScrollLeft = function(e) {
                if (!e) {
                    var t = d();
                    if (t) return t.length == 16 ? -t[12] : -t[4];
                    if (a.timerscroll && a.timerscroll.bh) return a.timerscroll.bh.getNow()
                }
                return a.doc.translate.x
            };
            if (document.createEvent) {
                this.notifyScrollEvent = function(e) {
                    var t = document.createEvent("UIEvents");
                    t.initUIEvent("scroll", false, true, window, 1);
                    e.dispatchEvent(t)
                }
            } else if (document.fireEvent) {
                this.notifyScrollEvent = function(e) {
                    var t = document.createEventObject();
                    e.fireEvent("onscroll");
                    t.cancelBubble = true
                }
            } else {
                this.notifyScrollEvent = function(e, t) {}
            }
            if (c.hastranslate3d && a.opt.enabletranslate3d) {
                this.setScrollTop = function(e, t) {
                    a.doc.translate.y = e;
                    a.doc.translate.ty = e * -1 + "px";
                    a.doc.css(c.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                    if (!t) a.notifyScrollEvent(a.win[0])
                };
                this.setScrollLeft = function(e, t) {
                    a.doc.translate.x = e;
                    a.doc.translate.tx = e * -1 + "px";
                    a.doc.css(c.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                    if (!t) a.notifyScrollEvent(a.win[0])
                }
            } else {
                this.setScrollTop = function(e, t) {
                    a.doc.translate.y = e;
                    a.doc.translate.ty = e * -1 + "px";
                    a.doc.css(c.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                    if (!t) a.notifyScrollEvent(a.win[0])
                };
                this.setScrollLeft = function(e, t) {
                    a.doc.translate.x = e;
                    a.doc.translate.tx = e * -1 + "px";
                    a.doc.css(c.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                    if (!t) a.notifyScrollEvent(a.win[0])
                }
            }
        } else {
            this.getScrollTop = function() {
                return a.docscroll.scrollTop()
            };
            this.setScrollTop = function(e) {
                return a.docscroll.scrollTop(e)
            };
            this.getScrollLeft = function() {
                return a.docscroll.scrollLeft()
            };
            this.setScrollLeft = function(e) {
                return a.docscroll.scrollLeft(e)
            }
        }
        this.getTarget = function(e) {
            if (!e) return false;
            if (e.target) return e.target;
            if (e.srcElement) return e.srcElement;
            return false
        };
        this.hasParent = function(e, t) {
            if (!e) return false;
            var n = e.target || e.srcElement || e || false;
            while (n && n.id != t) {
                n = n.parentNode || false
            }
            return n !== false
        };
        var y = {
            thin: 1,
            medium: 3,
            thick: 5
        };
        this.getOffset = function() {
            if (a.isfixed) return {
                top: parseFloat(a.win.css("top")),
                left: parseFloat(a.win.css("left"))
            };
            if (!a.viewport) return a.win.offset();
            var e = a.win.offset();
            var t = a.viewport.offset();
            return {
                top: e.top - t.top + a.viewport.scrollTop(),
                left: e.left - t.left + a.viewport.scrollLeft()
            }
        };
        this.updateScrollBar = function(e) {
            if (a.ishwscroll) {
                a.rail.css({
                    height: a.win.innerHeight()
                });
                if (a.railh) a.railh.css({
                    width: a.win.innerWidth()
                })
            } else {
                var t = a.getOffset();
                var n = {
                    top: t.top,
                    left: t.left
                };
                n.top += w(a.win, "border-top-width", true);
                var r = (a.win.outerWidth() - a.win.innerWidth()) / 2;
                n.left += a.rail.align ? a.win.outerWidth() - w(a.win, "border-right-width") - a.rail.width : w(a.win, "border-left-width");
                var i = a.opt.railoffset;
                if (i) {
                    if (i.top) n.top += i.top;
                    if (a.rail.align && i.left) n.left += i.left
                }
                if (!a.locked) a.rail.css({
                    top: n.top,
                    left: n.left,
                    height: e ? e.h : a.win.innerHeight()
                });
                if (a.zoom) {
                    a.zoom.css({
                        top: n.top + 1,
                        left: a.rail.align == 1 ? n.left - 20 : n.left + a.rail.width + 4
                    })
                }
                if (a.railh && !a.locked) {
                    var n = {
                        top: t.top,
                        left: t.left
                    };
                    var s = a.railh.align ? n.top + w(a.win, "border-top-width", true) + a.win.innerHeight() - a.railh.height : n.top + w(a.win, "border-top-width", true);
                    var o = n.left + w(a.win, "border-left-width");
                    a.railh.css({
                        top: s,
                        left: o,
                        width: a.railh.width
                    })
                }
            }
        };
        this.doRailClick = function(e, t, n) {
            var r, i, s, o;
            if (a.locked) return;
            a.cancelEvent(e);
            if (t) {
                r = n ? a.doScrollLeft : a.doScrollTop;
                s = n ? (e.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (e.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y;
                r(s)
            } else {
                r = n ? a.doScrollLeftBy : a.doScrollBy;
                s = n ? a.scroll.x : a.scroll.y;
                o = n ? e.pageX - a.railh.offset().left : e.pageY - a.rail.offset().top;
                i = n ? a.view.w : a.view.h;
                s >= o ? r(i) : r(-i)
            }
        };
        a.hasanimationframe = h;
        a.hascancelanimationframe = p;
        if (!a.hasanimationframe) {
            h = function(e) {
                return setTimeout(e, 15 - Math.floor(+(new Date) / 1e3) % 16)
            };
            p = clearInterval
        } else if (!a.hascancelanimationframe) p = function() {
            a.cancelAnimationFrame = true
        };
        this.init = function() {
            a.saved.css = [];
            if (c.isie7mobile) return true;
            if (c.isoperamini) return true;
            if (c.hasmstouch) a.css(a.ispage ? u("html") : a.win, {
                "-ms-touch-action": "none"
            });
            a.zindex = "auto";
            if (!a.ispage && a.opt.zindex == "auto") {
                a.zindex = v() || "auto"
            } else {
                a.zindex = a.opt.zindex
            }
            if (!a.ispage && a.zindex != "auto") {
                if (a.zindex > o) o = a.zindex
            }
            if (a.isie && a.zindex == 0 && a.opt.zindex == "auto") {
                a.zindex = "auto"
            }
            if (!a.ispage || !c.cantouch && !c.isieold && !c.isie9mobile) {
                var e = a.docscroll;
                if (a.ispage) e = a.haswrapper ? a.win : a.doc;
                if (!c.isie9mobile) a.css(e, {
                    "overflow-y": "hidden"
                });
                if (a.ispage && c.isie7) {
                    if (a.doc[0].nodeName == "BODY") a.css(u("html"), {
                        "overflow-y": "hidden"
                    });
                    else if (a.doc[0].nodeName == "HTML") a.css(u("body"), {
                        "overflow-y": "hidden"
                    })
                }
                if (c.isios && !a.ispage && !a.haswrapper) a.css(u("body"), {
                    "-webkit-overflow-scrolling": "touch"
                });
                var r = u(document.createElement("div"));
                r.css({
                    position: "relative",
                    top: 0,
                    "float": "right",
                    width: a.opt.cursorwidth,
                    height: "0px",
                    "background-color": a.opt.cursorcolor,
                    border: a.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": a.opt.cursorborderradius,
                    "-moz-border-radius": a.opt.cursorborderradius,
                    "border-radius": a.opt.cursorborderradius
                });
                r.hborder = parseFloat(r.outerHeight() - r.innerHeight());
                a.cursor = r;
                var s = u(document.createElement("div"));
                s.attr("id", a.id);
                s.addClass("nicescroll-rails");
                var f, h, p = ["left", "right"];
                for (var d in p) {
                    h = p[d];
                    f = a.opt.railpadding[h];
                    f ? s.css("padding-" + h, f + "px") : a.opt.railpadding[h] = 0
                }
                s.append(r);
                s.width = Math.max(parseFloat(a.opt.cursorwidth), r.outerWidth()) + a.opt.railpadding["left"] + a.opt.railpadding["right"];
                s.css({
                    width: s.width + "px",
                    zIndex: a.zindex,
                    background: a.opt.background,
                    cursor: "default"
                });
                s.visibility = true;
                s.scrollable = true;
                s.align = a.opt.railalign == "left" ? 0 : 1;
                a.rail = s;
                a.rail.drag = false;
                var g = false;
                if (a.opt.boxzoom && !a.ispage && !c.isieold) {
                    g = document.createElement("div");
                    a.bind(g, "click", a.doZoom);
                    a.zoom = u(g);
                    a.zoom.css({
                        cursor: "pointer",
                        "z-index": a.zindex,
                        backgroundImage: "url(" + l + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    });
                    if (a.opt.dblclickzoom) a.bind(a.win, "dblclick", a.doZoom);
                    if (c.cantouch && a.opt.gesturezoom) {
                        a.ongesturezoom = function(e) {
                            if (e.scale > 1.5) a.doZoomIn(e);
                            if (e.scale < .8) a.doZoomOut(e);
                            return a.cancelEvent(e)
                        };
                        a.bind(a.win, "gestureend", a.ongesturezoom)
                    }
                }
                a.railh = false;
                if (a.opt.horizrailenabled) {
                    a.css(e, {
                        "overflow-x": "hidden"
                    });
                    var r = u(document.createElement("div"));
                    r.css({
                        position: "relative",
                        top: 0,
                        height: a.opt.cursorwidth,
                        width: "0px",
                        "background-color": a.opt.cursorcolor,
                        border: a.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": a.opt.cursorborderradius,
                        "-moz-border-radius": a.opt.cursorborderradius,
                        "border-radius": a.opt.cursorborderradius
                    });
                    r.wborder = parseFloat(r.outerWidth() - r.innerWidth());
                    a.cursorh = r;
                    var y = u(document.createElement("div"));
                    y.attr("id", a.id + "-hr");
                    y.addClass("nicescroll-rails");
                    y.height = Math.max(parseFloat(a.opt.cursorwidth), r.outerHeight());
                    y.css({
                        height: y.height + "px",
                        zIndex: a.zindex,
                        background: a.opt.background
                    });
                    y.append(r);
                    y.visibility = true;
                    y.scrollable = true;
                    y.align = a.opt.railvalign == "top" ? 0 : 1;
                    a.railh = y;
                    a.railh.drag = false
                }
                if (a.ispage) {
                    s.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    });
                    s.align ? s.css({
                        right: "0px"
                    }) : s.css({
                        left: "0px"
                    });
                    a.body.append(s);
                    if (a.railh) {
                        y.css({
                            position: "fixed",
                            left: "0px",
                            width: "100%"
                        });
                        y.align ? y.css({
                            bottom: "0px"
                        }) : y.css({
                            top: "0px"
                        });
                        a.body.append(y)
                    }
                } else {
                    if (a.ishwscroll) {
                        if (a.win.css("position") == "static") a.css(a.win, {
                            position: "relative"
                        });
                        var b = a.win[0].nodeName == "HTML" ? a.body : a.win;
                        if (a.zoom) {
                            a.zoom.css({
                                position: "absolute",
                                top: 1,
                                right: 0,
                                "margin-right": s.width + 4
                            });
                            b.append(a.zoom)
                        }
                        s.css({
                            position: "absolute",
                            top: 0
                        });
                        s.align ? s.css({
                            right: 0
                        }) : s.css({
                            left: 0
                        });
                        b.append(s);
                        if (y) {
                            y.css({
                                position: "absolute",
                                left: 0,
                                bottom: 0
                            });
                            y.align ? y.css({
                                bottom: 0
                            }) : y.css({
                                top: 0
                            });
                            b.append(y)
                        }
                    } else {
                        a.isfixed = a.win.css("position") == "fixed";
                        var w = a.isfixed ? "fixed" : "absolute";
                        if (!a.isfixed) a.viewport = a.getViewport(a.win[0]);
                        if (a.viewport) {
                            a.body = a.viewport;
                            if (/relative|absolute/.test(a.viewport.css("position")) == false) a.css(a.viewport, {
                                position: "relative"
                            })
                        }
                        s.css({
                            position: w
                        });
                        if (a.zoom) a.zoom.css({
                            position: w
                        });
                        a.updateScrollBar();
                        a.body.append(s);
                        if (a.zoom) a.body.append(a.zoom);
                        if (a.railh) {
                            y.css({
                                position: w
                            });
                            a.body.append(y)
                        }
                    }
                    if (c.isios) a.css(a.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    });
                    if (c.isie && a.opt.disableoutline) a.win.attr("hideFocus", "true");
                    if (c.iswebkit && a.opt.disableoutline) a.win.css({
                        outline: "none"
                    })
                }
                if (a.opt.autohidemode === false) {
                    a.autohidedom = false;
                    a.rail.css({
                        opacity: a.opt.cursoropacitymax
                    });
                    if (a.railh) a.railh.css({
                        opacity: a.opt.cursoropacitymax
                    })
                } else if (a.opt.autohidemode === true) {
                    a.autohidedom = u().add(a.rail);
                    if (c.isie8) a.autohidedom = a.autohidedom.add(a.cursor);
                    if (a.railh) a.autohidedom = a.autohidedom.add(a.railh);
                    if (a.railh && c.isie8) a.autohidedom = a.autohidedom.add(a.cursorh)
                } else if (a.opt.autohidemode == "scroll") {
                    a.autohidedom = u().add(a.rail);
                    if (a.railh) a.autohidedom = a.autohidedom.add(a.railh)
                } else if (a.opt.autohidemode == "cursor") {
                    a.autohidedom = u().add(a.cursor);
                    if (a.railh) a.autohidedom = a.autohidedom.add(a.cursorh)
                } else if (a.opt.autohidemode == "hidden") {
                    a.autohidedom = false;
                    a.hide();
                    a.locked = false
                }
                if (c.isie9mobile) {
                    a.scrollmom = new E(a);
                    a.onmangotouch = function(e) {
                        var t = a.getScrollTop();
                        var n = a.getScrollLeft();
                        if (t == a.scrollmom.lastscrolly && n == a.scrollmom.lastscrollx) return true;
                        var r = t - a.mangotouch.sy;
                        var i = n - a.mangotouch.sx;
                        var s = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2)));
                        if (s == 0) return;
                        var o = r < 0 ? -1 : 1;
                        var u = i < 0 ? -1 : 1;
                        var f = +(new Date);
                        if (a.mangotouch.lazy) clearTimeout(a.mangotouch.lazy);
                        if (f - a.mangotouch.tm > 80 || a.mangotouch.dry != o || a.mangotouch.drx != u) {
                            a.scrollmom.stop();
                            a.scrollmom.reset(n, t);
                            a.mangotouch.sy = t;
                            a.mangotouch.ly = t;
                            a.mangotouch.sx = n;
                            a.mangotouch.lx = n;
                            a.mangotouch.dry = o;
                            a.mangotouch.drx = u;
                            a.mangotouch.tm = f
                        } else {
                            a.scrollmom.stop();
                            a.scrollmom.update(a.mangotouch.sx - i, a.mangotouch.sy - r);
                            var l = f - a.mangotouch.tm;
                            a.mangotouch.tm = f;
                            var c = Math.max(Math.abs(a.mangotouch.ly - t), Math.abs(a.mangotouch.lx - n));
                            a.mangotouch.ly = t;
                            a.mangotouch.lx = n;
                            if (c > 2) {
                                a.mangotouch.lazy = setTimeout(function() {
                                    a.mangotouch.lazy = false;
                                    a.mangotouch.dry = 0;
                                    a.mangotouch.drx = 0;
                                    a.mangotouch.tm = 0;
                                    a.scrollmom.doMomentum(30)
                                }, 100)
                            }
                        }
                    };
                    var S = a.getScrollTop();
                    var x = a.getScrollLeft();
                    a.mangotouch = {
                        sy: S,
                        ly: S,
                        dry: 0,
                        sx: x,
                        lx: x,
                        drx: 0,
                        lazy: false,
                        tm: 0
                    };
                    a.bind(a.docscroll, "scroll", a.onmangotouch)
                } else {
                    if (c.cantouch || a.istouchcapable || a.opt.touchbehavior || c.hasmstouch) {
                        a.scrollmom = new E(a);
                        a.ontouchstart = function(e) {
                            if (e.pointerType && e.pointerType != 2) return false;
                            if (!a.locked) {
                                if (c.hasmstouch) {
                                    var t = e.target ? e.target : false;
                                    while (t) {
                                        var n = u(t).getNiceScroll();
                                        if (n.length > 0 && n[0].me == a.me) break;
                                        if (n.length > 0) return false;
                                        if (t.nodeName == "DIV" && t.id == a.id) break;
                                        t = t.parentNode ? t.parentNode : false
                                    }
                                }
                                a.cancelScroll();
                                var t = a.getTarget(e);
                                if (t) {
                                    var r = /INPUT/i.test(t.nodeName) && /range/i.test(t.type);
                                    if (r) return a.stopPropagation(e)
                                }
                                if (!("clientX" in e) && "changedTouches" in e) {
                                    e.clientX = e.changedTouches[0].clientX;
                                    e.clientY = e.changedTouches[0].clientY
                                }
                                if (a.forcescreen) {
                                    var i = e;
                                    var e = {
                                        original: e.original ? e.original : e
                                    };
                                    e.clientX = i.screenX;
                                    e.clientY = i.screenY
                                }
                                a.rail.drag = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    sx: a.scroll.x,
                                    sy: a.scroll.y,
                                    st: a.getScrollTop(),
                                    sl: a.getScrollLeft(),
                                    pt: 2,
                                    dl: false
                                };
                                if (a.ispage || !a.opt.directionlockdeadzone) {
                                    a.rail.drag.dl = "f"
                                } else {
                                    var s = {
                                        w: u(window).width(),
                                        h: u(window).height()
                                    };
                                    var o = {
                                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                    };
                                    var f = Math.max(0, o.h - s.h);
                                    var l = Math.max(0, o.w - s.w);
                                    if (!a.rail.scrollable && a.railh.scrollable) a.rail.drag.ck = f > 0 ? "v" : false;
                                    else if (a.rail.scrollable && !a.railh.scrollable) a.rail.drag.ck = l > 0 ? "h" : false;
                                    else a.rail.drag.ck = false;
                                    if (!a.rail.drag.ck) a.rail.drag.dl = "f"
                                }
                                if (a.opt.touchbehavior && a.isiframe && c.isie) {
                                    var h = a.win.position();
                                    a.rail.drag.x += h.left;
                                    a.rail.drag.y += h.top
                                }
                                a.hasmoving = false;
                                a.lastmouseup = false;
                                a.scrollmom.reset(e.clientX, e.clientY);
                                if (!c.cantouch && !this.istouchcapable && !c.hasmstouch) {
                                    var p = t ? /INPUT|SELECT|TEXTAREA/i.test(t.nodeName) : false;
                                    if (!p) {
                                        if (!a.ispage && c.hasmousecapture) t.setCapture();
                                        return a.opt.touchbehavior ? a.cancelEvent(e) : a.stopPropagation(e)
                                    }
                                    if (/SUBMIT|CANCEL|BUTTON/i.test(u(t).attr("type"))) {
                                        pc = {
                                            tg: t,
                                            click: false
                                        };
                                        a.preventclick = pc
                                    }
                                }
                            }
                        };
                        a.ontouchend = function(e) {
                            if (e.pointerType && e.pointerType != 2) return false;
                            if (a.rail.drag && a.rail.drag.pt == 2) {
                                a.scrollmom.doMomentum();
                                a.rail.drag = false;
                                if (a.hasmoving) {
                                    a.hasmoving = false;
                                    a.lastmouseup = true;
                                    a.hideCursor();
                                    if (c.hasmousecapture) document.releaseCapture();
                                    if (!c.cantouch) return a.cancelEvent(e)
                                }
                            }
                        };
                        var T = a.opt.touchbehavior && a.isiframe && !c.hasmousecapture;
                        a.ontouchmove = function(e, t) {
                            if (e.pointerType && e.pointerType != 2) return false;
                            if (a.rail.drag && a.rail.drag.pt == 2) {
                                if (c.cantouch && typeof e.original == "undefined") return true;
                                a.hasmoving = true;
                                if (a.preventclick && !a.preventclick.click) {
                                    a.preventclick.click = a.preventclick.tg.onclick || false;
                                    a.preventclick.tg.onclick = a.onpreventclick
                                }
                                var n = u.extend({
                                    original: e
                                }, e);
                                e = n;
                                if ("changedTouches" in e) {
                                    e.clientX = e.changedTouches[0].clientX;
                                    e.clientY = e.changedTouches[0].clientY
                                }
                                if (a.forcescreen) {
                                    var r = e;
                                    var e = {
                                        original: e.original ? e.original : e
                                    };
                                    e.clientX = r.screenX;
                                    e.clientY = r.screenY
                                }
                                var i = ofy = 0;
                                if (T && !t) {
                                    var s = a.win.position();
                                    i = -s.left;
                                    ofy = -s.top
                                }
                                var o = e.clientY + ofy;
                                var f = o - a.rail.drag.y;
                                var l = e.clientX + i;
                                var h = l - a.rail.drag.x;
                                var p = a.rail.drag.st - f;
                                if (a.ishwscroll && a.opt.bouncescroll) {
                                    if (p < 0) {
                                        p = Math.round(p / 2)
                                    } else if (p > a.page.maxh) {
                                        p = a.page.maxh + Math.round((p - a.page.maxh) / 2)
                                    }
                                } else {
                                    if (p < 0) {
                                        p = 0;
                                        o = 0
                                    }
                                    if (p > a.page.maxh) {
                                        p = a.page.maxh;
                                        o = 0
                                    }
                                }
                                if (a.railh && a.railh.scrollable) {
                                    var d = a.rail.drag.sl - h;
                                    if (a.ishwscroll && a.opt.bouncescroll) {
                                        if (d < 0) {
                                            d = Math.round(d / 2)
                                        } else if (d > a.page.maxw) {
                                            d = a.page.maxw + Math.round((d - a.page.maxw) / 2)
                                        }
                                    } else {
                                        if (d < 0) {
                                            d = 0;
                                            l = 0
                                        }
                                        if (d > a.page.maxw) {
                                            d = a.page.maxw;
                                            l = 0
                                        }
                                    }
                                }
                                var v = false;
                                if (a.rail.drag.dl) {
                                    v = true;
                                    if (a.rail.drag.dl == "v") d = a.rail.drag.sl;
                                    else if (a.rail.drag.dl == "h") p = a.rail.drag.st
                                } else {
                                    var m = Math.abs(f);
                                    var g = Math.abs(h);
                                    var y = a.opt.directionlockdeadzone;
                                    if (a.rail.drag.ck == "v") {
                                        if (m > y && g <= m * .3) {
                                            a.rail.drag = false;
                                            return true
                                        } else if (g > y) {
                                            a.rail.drag.dl = "f";
                                            u("body").scrollTop(u("body").scrollTop())
                                        }
                                    } else if (a.rail.drag.ck == "h") {
                                        if (g > y && m <= g * .3) {
                                            a.rail.drag = false;
                                            return true
                                        } else if (m > y) {
                                            a.rail.drag.dl = "f";
                                            u("body").scrollLeft(u("body").scrollLeft())
                                        }
                                    }
                                }
                                a.synched("touchmove", function() {
                                    if (a.rail.drag && a.rail.drag.pt == 2) {
                                        if (a.prepareTransition) a.prepareTransition(0);
                                        if (a.rail.scrollable) a.setScrollTop(p);
                                        a.scrollmom.update(l, o);
                                        if (a.railh && a.railh.scrollable) {
                                            a.setScrollLeft(d);
                                            a.showCursor(p, d)
                                        } else {
                                            a.showCursor(p)
                                        }
                                        if (c.isie10) document.selection.clear()
                                    }
                                });
                                if (c.ischrome && a.istouchcapable) v = false;
                                if (v) return a.cancelEvent(e)
                            }
                        }
                    }
                    a.onmousedown = function(e, t) {
                        if (a.rail.drag && a.rail.drag.pt != 1) return;
                        if (a.locked) return a.cancelEvent(e);
                        a.cancelScroll();
                        a.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: a.scroll.x,
                            sy: a.scroll.y,
                            pt: 1,
                            hr: !!t
                        };
                        var n = a.getTarget(e);
                        if (!a.ispage && c.hasmousecapture) n.setCapture();
                        if (a.isiframe && !c.hasmousecapture) {
                            a.saved["csspointerevents"] = a.doc.css("pointer-events");
                            a.css(a.doc, {
                                "pointer-events": "none"
                            })
                        }
                        return a.cancelEvent(e)
                    };
                    a.onmouseup = function(e) {
                        if (a.rail.drag) {
                            if (c.hasmousecapture) document.releaseCapture();
                            if (a.isiframe && !c.hasmousecapture) a.doc.css("pointer-events", a.saved["csspointerevents"]);
                            if (a.rail.drag.pt != 1) return;
                            a.rail.drag = false;
                            return a.cancelEvent(e)
                        }
                    };
                    a.onmousemove = function(e) {
                        if (a.rail.drag) {
                            if (a.rail.drag.pt != 1) return;
                            if (c.ischrome && e.which == 0) return a.onmouseup(e);
                            a.cursorfreezed = true;
                            if (a.rail.drag.hr) {
                                a.scroll.x = a.rail.drag.sx + (e.clientX - a.rail.drag.x);
                                if (a.scroll.x < 0) a.scroll.x = 0;
                                var t = a.scrollvaluemaxw;
                                if (a.scroll.x > t) a.scroll.x = t
                            } else {
                                a.scroll.y = a.rail.drag.sy + (e.clientY - a.rail.drag.y);
                                if (a.scroll.y < 0) a.scroll.y = 0;
                                var n = a.scrollvaluemax;
                                if (a.scroll.y > n) a.scroll.y = n
                            }
                            a.synched("mousemove", function() {
                                if (a.rail.drag && a.rail.drag.pt == 1) {
                                    a.showCursor();
                                    if (a.rail.drag.hr) a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed);
                                    else a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed)
                                }
                            });
                            return a.cancelEvent(e)
                        }
                    };
                    if (c.cantouch || a.opt.touchbehavior) {
                        a.onpreventclick = function(e) {
                            if (a.preventclick) {
                                a.preventclick.tg.onclick = a.preventclick.click;
                                a.preventclick = false;
                                return a.cancelEvent(e)
                            }
                        };
                        a.bind(a.win, "mousedown", a.ontouchstart);
                        a.onclick = c.isios ? false : function(e) {
                            if (a.lastmouseup) {
                                a.lastmouseup = false;
                                return a.cancelEvent(e)
                            } else {
                                return true
                            }
                        };
                        if (a.opt.grabcursorenabled && c.cursorgrabvalue) {
                            a.css(a.ispage ? a.doc : a.win, {
                                cursor: c.cursorgrabvalue
                            });
                            a.css(a.rail, {
                                cursor: c.cursorgrabvalue
                            })
                        }
                    } else {
                        function N(e) {
                            if (!a.selectiondrag) return;
                            if (e) {
                                var t = a.win.outerHeight();
                                var n = e.pageY - a.selectiondrag.top;
                                if (n > 0 && n < t) n = 0;
                                if (n >= t) n -= t;
                                a.selectiondrag.df = n
                            }
                            if (a.selectiondrag.df == 0) return;
                            var r = -Math.floor(a.selectiondrag.df / 6) * 2;
                            a.doScrollBy(r);
                            a.debounced("doselectionscroll", function() {
                                N()
                            }, 50)
                        }
                        if ("getSelection" in document) {
                            a.hasTextSelected = function() {
                                return document.getSelection().rangeCount > 0
                            }
                        } else if ("selection" in document) {
                            a.hasTextSelected = function() {
                                return document.selection.type != "None"
                            }
                        } else {
                            a.hasTextSelected = function() {
                                return false
                            }
                        }
                        a.onselectionstart = function(e) {
                            if (a.ispage) return;
                            a.selectiondrag = a.win.offset()
                        };
                        a.onselectionend = function(e) {
                            a.selectiondrag = false
                        };
                        a.onselectiondrag = function(e) {
                            if (!a.selectiondrag) return;
                            if (a.hasTextSelected()) a.debounced("selectionscroll", function() {
                                N(e)
                            }, 250)
                        }
                    }
                    if (c.hasmstouch) {
                        a.css(a.rail, {
                            "-ms-touch-action": "none"
                        });
                        a.css(a.cursor, {
                            "-ms-touch-action": "none"
                        });
                        a.bind(a.win, "MSPointerDown", a.ontouchstart);
                        a.bind(document, "MSPointerUp", a.ontouchend);
                        a.bind(document, "MSPointerMove", a.ontouchmove);
                        a.bind(a.cursor, "MSGestureHold", function(e) {
                            e.preventDefault()
                        });
                        a.bind(a.cursor, "contextmenu", function(e) {
                            e.preventDefault()
                        })
                    }
                    if (this.istouchcapable) {
                        a.bind(a.win, "touchstart", a.ontouchstart);
                        a.bind(document, "touchend", a.ontouchend);
                        a.bind(document, "touchcancel", a.ontouchend);
                        a.bind(document, "touchmove", a.ontouchmove)
                    }
                    a.bind(a.cursor, "mousedown", a.onmousedown);
                    a.bind(a.cursor, "mouseup", a.onmouseup);
                    if (a.railh) {
                        a.bind(a.cursorh, "mousedown", function(e) {
                            a.onmousedown(e, true)
                        });
                        a.bind(a.cursorh, "mouseup", function(e) {
                            if (a.rail.drag && a.rail.drag.pt == 2) return;
                            a.rail.drag = false;
                            a.hasmoving = false;
                            a.hideCursor();
                            if (c.hasmousecapture) document.releaseCapture();
                            return a.cancelEvent(e)
                        })
                    }
                    if (a.opt.cursordragontouch || !c.cantouch && !a.opt.touchbehavior) {
                        a.rail.css({
                            cursor: "default"
                        });
                        a.railh && a.railh.css({
                            cursor: "default"
                        });
                        a.jqbind(a.rail, "mouseenter", function() {
                            if (a.canshowonmouseevent) a.showCursor();
                            a.rail.active = true
                        });
                        a.jqbind(a.rail, "mouseleave", function() {
                            a.rail.active = false;
                            if (!a.rail.drag) a.hideCursor()
                        });
                        if (a.opt.sensitiverail) {
                            a.bind(a.rail, "click", function(e) {
                                a.doRailClick(e, false, false)
                            });
                            a.bind(a.rail, "dblclick", function(e) {
                                a.doRailClick(e, true, false)
                            });
                            a.bind(a.cursor, "click", function(e) {
                                a.cancelEvent(e)
                            });
                            a.bind(a.cursor, "dblclick", function(e) {
                                a.cancelEvent(e)
                            })
                        }
                        if (a.railh) {
                            a.jqbind(a.railh, "mouseenter", function() {
                                if (a.canshowonmouseevent) a.showCursor();
                                a.rail.active = true
                            });
                            a.jqbind(a.railh, "mouseleave", function() {
                                a.rail.active = false;
                                if (!a.rail.drag) a.hideCursor()
                            });
                            if (a.opt.sensitiverail) {
                                a.bind(a.railh, "click", function(e) {
                                    a.doRailClick(e, false, true)
                                });
                                a.bind(a.railh, "dblclick", function(e) {
                                    a.doRailClick(e, true, true)
                                });
                                a.bind(a.cursorh, "click", function(e) {
                                    a.cancelEvent(e)
                                });
                                a.bind(a.cursorh, "dblclick", function(e) {
                                    a.cancelEvent(e)
                                })
                            }
                        }
                    }
                    if (!c.cantouch && !a.opt.touchbehavior) {
                        a.bind(c.hasmousecapture ? a.win : document, "mouseup", a.onmouseup);
                        a.bind(document, "mousemove", a.onmousemove);
                        if (a.onclick) a.bind(document, "click", a.onclick);
                        if (!a.ispage && a.opt.enablescrollonselection) {
                            a.bind(a.win[0], "mousedown", a.onselectionstart);
                            a.bind(document, "mouseup", a.onselectionend);
                            a.bind(a.cursor, "mouseup", a.onselectionend);
                            if (a.cursorh) a.bind(a.cursorh, "mouseup", a.onselectionend);
                            a.bind(document, "mousemove", a.onselectiondrag)
                        }
                        if (a.zoom) {
                            a.jqbind(a.zoom, "mouseenter", function() {
                                if (a.canshowonmouseevent) a.showCursor();
                                a.rail.active = true
                            });
                            a.jqbind(a.zoom, "mouseleave", function() {
                                a.rail.active = false;
                                if (!a.rail.drag) a.hideCursor()
                            })
                        }
                    } else {
                        a.bind(c.hasmousecapture ? a.win : document, "mouseup", a.ontouchend);
                        a.bind(document, "mousemove", a.ontouchmove);
                        if (a.onclick) a.bind(document, "click", a.onclick);
                        if (a.opt.cursordragontouch) {
                            a.bind(a.cursor, "mousedown", a.onmousedown);
                            a.bind(a.cursor, "mousemove", a.onmousemove);
                            a.cursorh && a.bind(a.cursorh, "mousedown", a.onmousedown);
                            a.cursorh && a.bind(a.cursorh, "mousemove", a.onmousemove)
                        }
                    }
                    if (a.opt.enablemousewheel) {
                        if (!a.isiframe) a.bind(c.isie && a.ispage ? document : a.win, "mousewheel", a.onmousewheel);
                        a.bind(a.rail, "mousewheel", a.onmousewheel);
                        if (a.railh) a.bind(a.railh, "mousewheel", a.onmousewheelhr)
                    }
                    if (!a.ispage && !c.cantouch && !/HTML|BODY/.test(a.win[0].nodeName)) {
                        if (!a.win.attr("tabindex")) a.win.attr({
                            tabindex: i++
                        });
                        a.jqbind(a.win, "focus", function(e) {
                            t = a.getTarget(e).id || true;
                            a.hasfocus = true;
                            if (a.canshowonmouseevent) a.noticeCursor()
                        });
                        a.jqbind(a.win, "blur", function(e) {
                            t = false;
                            a.hasfocus = false
                        });
                        a.jqbind(a.win, "mouseenter", function(e) {
                            n = a.getTarget(e).id || true;
                            a.hasmousefocus = true;
                            if (a.canshowonmouseevent) a.noticeCursor()
                        });
                        a.jqbind(a.win, "mouseleave", function() {
                            n = false;
                            a.hasmousefocus = false
                        })
                    }
                }
                a.onkeypress = function(e) {
                    if (a.locked && a.page.maxh == 0) return true;
                    e = e ? e : window.e;
                    var r = a.getTarget(e);
                    if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName)) {
                        var i = r.getAttribute("type") || r.type || false;
                        if (!i || !/submit|button|cancel/i.tp) return true
                    }
                    if (a.hasfocus || a.hasmousefocus && !t || a.ispage && !t && !n) {
                        var s = e.keyCode;
                        if (a.locked && s != 27) return a.cancelEvent(e);
                        var o = e.ctrlKey || false;
                        var u = e.shiftKey || false;
                        var f = false;
                        switch (s) {
                            case 38:
                            case 63233:
                                a.doScrollBy(24 * 3);
                                f = true;
                                break;
                            case 40:
                            case 63235:
                                a.doScrollBy(-24 * 3);
                                f = true;
                                break;
                            case 37:
                            case 63232:
                                if (a.railh) {
                                    o ? a.doScrollLeft(0) : a.doScrollLeftBy(24 * 3);
                                    f = true
                                }
                                break;
                            case 39:
                            case 63234:
                                if (a.railh) {
                                    o ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-24 * 3);
                                    f = true
                                }
                                break;
                            case 33:
                            case 63276:
                                a.doScrollBy(a.view.h);
                                f = true;
                                break;
                            case 34:
                            case 63277:
                                a.doScrollBy(-a.view.h);
                                f = true;
                                break;
                            case 36:
                            case 63273:
                                a.railh && o ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                                f = true;
                                break;
                            case 35:
                            case 63275:
                                a.railh && o ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
                                f = true;
                                break;
                            case 32:
                                if (a.opt.spacebarenabled) {
                                    u ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h);
                                    f = true
                                }
                                break;
                            case 27:
                                if (a.zoomactive) {
                                    a.doZoom();
                                    f = true
                                }
                                break
                        }
                        if (f) return a.cancelEvent(e)
                    }
                };
                if (a.opt.enablekeyboard) a.bind(document, c.isopera && !c.isopera12 ? "keypress" : "keydown", a.onkeypress);
                a.bind(window, "resize", a.lazyResize);
                a.bind(window, "orientationchange", a.lazyResize);
                a.bind(window, "load", a.lazyResize);
                if (c.ischrome && !a.ispage && !a.haswrapper) {
                    var C = a.win.attr("style");
                    var k = parseFloat(a.win.css("width")) + 1;
                    a.win.css("width", k);
                    a.synched("chromefix", function() {
                        a.win.attr("style", C)
                    })
                }
                a.onAttributeChange = function(e) {
                    a.lazyResize(250)
                };
                if (!a.ispage && !a.haswrapper) {
                    if (m !== false) {
                        a.observer = new m(function(e) {
                            e.forEach(a.onAttributeChange)
                        });
                        a.observer.observe(a.win[0], {
                            childList: true,
                            characterData: false,
                            attributes: true,
                            subtree: false
                        });
                        a.observerremover = new m(function(e) {
                            e.forEach(function(e) {
                                if (e.removedNodes.length > 0) {
                                    for (var t in e.removedNodes) {
                                        if (e.removedNodes[t] == a.win[0]) return a.remove()
                                    }
                                }
                            })
                        });
                        a.observerremover.observe(a.win[0].parentNode, {
                            childList: true,
                            characterData: false,
                            attributes: false,
                            subtree: false
                        })
                    } else {
                        a.bind(a.win, c.isie && !c.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange);
                        if (c.isie9) a.win[0].attachEvent("onpropertychange", a.onAttributeChange);
                        a.bind(a.win, "DOMNodeRemoved", function(e) {
                            if (e.target == a.win[0]) a.remove()
                        })
                    }
                }
                if (!a.ispage && a.opt.boxzoom) a.bind(window, "resize", a.resizeZoom);
                if (a.istextarea) a.bind(a.win, "mouseup", a.lazyResize);
                a.checkrtlmode = true;
                a.lazyResize(30)
            }
            if (this.doc[0].nodeName == "IFRAME") {
                function L(e) {
                    a.iframexd = false;
                    try {
                        var t = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
                        var n = t.domain
                    } catch (e) {
                        a.iframexd = true;
                        t = false
                    }
                    if (a.iframexd) {
                        if ("console" in window) console.log("NiceScroll error: policy restriced iframe");
                        return true
                    }
                    a.forcescreen = true;
                    if (a.isiframe) {
                        a.iframe = {
                            doc: u(t),
                            html: a.doc.contents().find("html")[0],
                            body: a.doc.contents().find("body")[0]
                        };
                        a.getContentSize = function() {
                            return {
                                w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth),
                                h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)
                            }
                        };
                        a.docscroll = u(a.iframe.body)
                    }
                    if (!c.isios && a.opt.iframeautoresize && !a.isiframe) {
                        a.win.scrollTop(0);
                        a.doc.height("");
                        var r = Math.max(t.getElementsByTagName("html")[0].scrollHeight, t.body.scrollHeight);
                        a.doc.height(r)
                    }
                    a.lazyResize(30);
                    if (c.isie7) a.css(u(a.iframe.html), {
                        "overflow-y": "hidden"
                    });
                    a.css(u(a.iframe.body), {
                        "overflow-y": "hidden"
                    });
                    if (c.isios && a.haswrapper) {
                        a.css(u(t.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        });
                        console.log(1)
                    }
                    if ("contentWindow" in this) {
                        a.bind(this.contentWindow, "scroll", a.onscroll)
                    } else {
                        a.bind(t, "scroll", a.onscroll)
                    }
                    if (a.opt.enablemousewheel) {
                        a.bind(t, "mousewheel", a.onmousewheel)
                    }
                    if (a.opt.enablekeyboard) a.bind(t, c.isopera ? "keypress" : "keydown", a.onkeypress);
                    if (c.cantouch || a.opt.touchbehavior) {
                        a.bind(t, "mousedown", a.ontouchstart);
                        a.bind(t, "mousemove", function(e) {
                            a.ontouchmove(e, true)
                        });
                        if (a.opt.grabcursorenabled && c.cursorgrabvalue) a.css(u(t.body), {
                            cursor: c.cursorgrabvalue
                        })
                    }
                    a.bind(t, "mouseup", a.ontouchend);
                    if (a.zoom) {
                        if (a.opt.dblclickzoom) a.bind(t, "dblclick", a.doZoom);
                        if (a.ongesturezoom) a.bind(t, "gestureend", a.ongesturezoom)
                    }
                }
                if (this.doc[0].readyState && this.doc[0].readyState == "complete") {
                    setTimeout(function() {
                        L.call(a.doc[0], false)
                    }, 500)
                }
                a.bind(this.doc, "load", L)
            }
        };
        this.showCursor = function(e, t) {
            if (a.cursortimeout) {
                clearTimeout(a.cursortimeout);
                a.cursortimeout = 0
            }
            if (!a.rail) return;
            if (a.autohidedom) {
                a.autohidedom.stop().css({
                    opacity: a.opt.cursoropacitymax
                });
                a.cursoractive = true
            }
            if (!a.rail.drag || a.rail.drag.pt != 1) {
                if (typeof e != "undefined" && e !== false) {
                    a.scroll.y = Math.round(e * 1 / a.scrollratio.y)
                }
                if (typeof t != "undefined") {
                    a.scroll.x = Math.round(t * 1 / a.scrollratio.x)
                }
            }
            a.cursor.css({
                height: a.cursorheight,
                top: a.scroll.y
            });
            if (a.cursorh) {
                !a.rail.align && a.rail.visibility ? a.cursorh.css({
                    width: a.cursorwidth,
                    left: a.scroll.x + a.rail.width
                }) : a.cursorh.css({
                    width: a.cursorwidth,
                    left: a.scroll.x
                });
                a.cursoractive = true
            }
            if (a.zoom) a.zoom.stop().css({
                opacity: a.opt.cursoropacitymax
            })
        };
        this.hideCursor = function(e) {
            if (a.cursortimeout) return;
            if (!a.rail) return;
            if (!a.autohidedom) return;
            a.cursortimeout = setTimeout(function() {
                if (!a.rail.active || !a.showonmouseevent) {
                    a.autohidedom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    });
                    if (a.zoom) a.zoom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    });
                    a.cursoractive = false
                }
                a.cursortimeout = 0
            }, e || a.opt.hidecursordelay)
        };
        this.noticeCursor = function(e, t, n) {
            a.showCursor(t, n);
            if (!a.rail.active) a.hideCursor(e)
        };
        this.getContentSize = a.ispage ? function() {
            return {
                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        } : a.haswrapper ? function() {
            return {
                w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")),
                h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
            }
        } : function() {
            return {
                w: a.docscroll[0].scrollWidth,
                h: a.docscroll[0].scrollHeight
            }
        };
        this.onResize = function(e, t) {
            if (!a.win) return false;
            if (!a.haswrapper && !a.ispage) {
                if (a.win.css("display") == "none") {
                    if (a.visibility) a.hideRail().hideRailHr();
                    return false
                } else {
                    if (!a.hidden && !a.visibility) a.showRail().showRailHr()
                }
            }
            var n = a.page.maxh;
            var r = a.page.maxw;
            var i = {
                h: a.view.h,
                w: a.view.w
            };
            a.view = {
                w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
                h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
            };
            a.page = t ? t : a.getContentSize();
            a.page.maxh = Math.max(0, a.page.h - a.view.h);
            a.page.maxw = Math.max(0, a.page.w - a.view.w);
            if (a.page.maxh == n && a.page.maxw == r && a.view.w == i.w) {
                if (!a.ispage) {
                    var s = a.win.offset();
                    if (a.lastposition) {
                        var o = a.lastposition;
                        if (o.top == s.top && o.left == s.left) return a
                    }
                    a.lastposition = s
                } else {
                    return a
                }
            }
            if (a.page.maxh == 0) {
                a.hideRail();
                a.scrollvaluemax = 0;
                a.scroll.y = 0;
                a.scrollratio.y = 0;
                a.cursorheight = 0;
                a.setScrollTop(0);
                a.rail.scrollable = false
            } else {
                a.rail.scrollable = true
            }
            if (a.page.maxw == 0) {
                a.hideRailHr();
                a.scrollvaluemaxw = 0;
                a.scroll.x = 0;
                a.scrollratio.x = 0;
                a.cursorwidth = 0;
                a.setScrollLeft(0);
                a.railh.scrollable = false
            } else {
                a.railh.scrollable = true
            }
            a.locked = a.page.maxh == 0 && a.page.maxw == 0;
            if (a.locked) {
                if (!a.ispage) a.updateScrollBar(a.view);
                return false
            }
            if (!a.hidden && !a.visibility) {
                a.showRail().showRailHr()
            } else if (!a.hidden && !a.railh.visibility) a.showRailHr();
            if (a.istextarea && a.win.css("resize") && a.win.css("resize") != "none") a.view.h -= 20;
            a.cursorheight = Math.min(a.view.h, Math.round(a.view.h * (a.view.h / a.page.h)));
            a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
            a.cursorwidth = Math.min(a.view.w, Math.round(a.view.w * (a.view.w / a.page.w)));
            a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
            a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder;
            if (a.railh) {
                a.railh.width = a.page.maxh > 0 ? a.view.w - a.rail.width : a.view.w;
                a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder
            }
            if (a.checkrtlmode && a.railh) {
                a.checkrtlmode = false;
                if (a.opt.rtlmode && a.scroll.x == 0) a.setScrollLeft(a.page.maxw)
            }
            if (!a.ispage) a.updateScrollBar(a.view);
            a.scrollratio = {
                x: a.page.maxw / a.scrollvaluemaxw,
                y: a.page.maxh / a.scrollvaluemax
            };
            var u = a.getScrollTop();
            if (u > a.page.maxh) {
                a.doScrollTop(a.page.maxh)
            } else {
                a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x));
                if (a.cursoractive) a.noticeCursor()
            }
            if (a.scroll.y && a.getScrollTop() == 0) a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
            return a
        };
        this.resize = a.onResize;
        this.lazyResize = function(e) {
            e = isNaN(e) ? 30 : e;
            a.delayed("resize", a.resize, e);
            return a
        };
        this._bind = function(e, t, n, r) {
            a.events.push({
                e: e,
                n: t,
                f: n,
                b: r,
                q: false
            });
            if (e.addEventListener) {
                e.addEventListener(t, n, r || false)
            } else if (e.attachEvent) {
                e.attachEvent("on" + t, n)
            } else {
                e["on" + t] = n
            }
        };
        this.jqbind = function(e, t, n) {
            a.events.push({
                e: e,
                n: t,
                f: n,
                q: true
            });
            u(e).bind(t, n)
        };
        this.bind = function(e, t, n, r) {
            var i = "jquery" in e ? e[0] : e;
            if (t == "mousewheel") {
                if ("onwheel" in a.win) {
                    a._bind(i, "wheel", n, r || false)
                } else {
                    var s = typeof document.onmousewheel != "undefined" ? "mousewheel" : "DOMMouseScroll";
                    S(i, s, n, r || false);
                    if (s == "DOMMouseScroll") S(i, "MozMousePixelScroll", n, r || false)
                }
            } else if (i.addEventListener) {
                if (c.cantouch && /mouseup|mousedown|mousemove/.test(t)) {
                    var o = t == "mousedown" ? "touchstart" : t == "mouseup" ? "touchend" : "touchmove";
                    a._bind(i, o, function(e) {
                        if (e.touches) {
                            if (e.touches.length < 2) {
                                var t = e.touches.length ? e.touches[0] : e;
                                t.original = e;
                                n.call(this, t)
                            }
                        } else if (e.changedTouches) {
                            var t = e.changedTouches[0];
                            t.original = e;
                            n.call(this, t)
                        }
                    }, r || false)
                }
                a._bind(i, t, n, r || false);
                if (c.cantouch && t == "mouseup") a._bind(i, "touchcancel", n, r || false)
            } else {
                a._bind(i, t, function(e) {
                    e = e || window.event || false;
                    if (e) {
                        if (e.srcElement) e.target = e.srcElement
                    }
                    if (!("pageY" in e)) {
                        e.pageX = e.clientX + document.documentElement.scrollLeft;
                        e.pageY = e.clientY + document.documentElement.scrollTop
                    }
                    return n.call(i, e) === false || r === false ? a.cancelEvent(e) : true
                })
            }
        };
        this._unbind = function(e, t, n, r) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n, r)
            } else if (e.detachEvent) {
                e.detachEvent("on" + t, n)
            } else {
                e["on" + t] = false
            }
        };
        this.unbindAll = function() {
            for (var e = 0; e < a.events.length; e++) {
                var t = a.events[e];
                t.q ? t.e.unbind(t.n, t.f) : a._unbind(t.e, t.n, t.f, t.b)
            }
        };
        this.cancelEvent = function(e) {
            var e = e.original ? e.original : e ? e : window.event || false;
            if (!e) return false;
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventManipulation) e.preventManipulation();
            e.cancelBubble = true;
            e.cancel = true;
            e.returnValue = false;
            return false
        };
        this.stopPropagation = function(e) {
            var e = e.original ? e.original : e ? e : window.event || false;
            if (!e) return false;
            if (e.stopPropagation) return e.stopPropagation();
            if (e.cancelBubble) e.cancelBubble = true;
            return false
        };
        this.showRail = function() {
            if (a.page.maxh != 0 && (a.ispage || a.win.css("display") != "none")) {
                a.visibility = true;
                a.rail.visibility = true;
                a.rail.css("display", "block")
            }
            return a
        };
        this.showRailHr = function() {
            if (!a.railh) return a;
            if (a.page.maxw != 0 && (a.ispage || a.win.css("display") != "none")) {
                a.railh.visibility = true;
                a.railh.css("display", "block")
            }
            return a
        };
        this.hideRail = function() {
            a.visibility = false;
            a.rail.visibility = false;
            a.rail.css("display", "none");
            return a
        };
        this.hideRailHr = function() {
            if (!a.railh) return a;
            a.railh.visibility = false;
            a.railh.css("display", "none");
            return a
        };
        this.show = function() {
            a.hidden = false;
            a.locked = false;
            return a.showRail().showRailHr()
        };
        this.hide = function() {
            a.hidden = true;
            a.locked = true;
            return a.hideRail().hideRailHr()
        };
        this.toggle = function() {
            return a.hidden ? a.show() : a.hide()
        };
        this.remove = function() {
            a.stop();
            if (a.cursortimeout) clearTimeout(a.cursortimeout);
            a.doZoomOut();
            a.unbindAll();
            if (c.isie9) a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
            if (a.observer !== false) a.observer.disconnect();
            if (a.observerremover !== false) a.observerremover.disconnect();
            a.events = null;
            if (a.cursor) {
                a.cursor.remove()
            }
            if (a.cursorh) {
                a.cursorh.remove()
            }
            if (a.rail) {
                a.rail.remove()
            }
            if (a.railh) {
                a.railh.remove()
            }
            if (a.zoom) {
                a.zoom.remove()
            }
            for (var e = 0; e < a.saved.css.length; e++) {
                var t = a.saved.css[e];
                t[0].css(t[1], typeof t[2] == "undefined" ? "" : t[2])
            }
            a.saved = false;
            a.me.data("__nicescroll", "");
            var n = u.nicescroll;
            n.each(function(e) {
                if (!this) return;
                if (this.id === a.id) {
                    delete n[e];
                    for (var t = ++e; t < n.length; t++, e++) n[e] = n[t];
                    n.length--;
                    if (n.length) delete n[n.length]
                }
            });
            for (var r in a) {
                a[r] = null;
                delete a[r]
            }
            a = null
        };
        this.scrollstart = function(e) {
            this.onscrollstart = e;
            return a
        };
        this.scrollend = function(e) {
            this.onscrollend = e;
            return a
        };
        this.scrollcancel = function(e) {
            this.onscrollcancel = e;
            return a
        };
        this.zoomin = function(e) {
            this.onzoomin = e;
            return a
        };
        this.zoomout = function(e) {
            this.onzoomout = e;
            return a
        };
        this.isScrollable = function(e) {
            var t = e.target ? e.target : e;
            if (t.nodeName == "OPTION") return true;
            while (t && t.nodeType == 1 && !/BODY|HTML/.test(t.nodeName)) {
                var n = u(t);
                var r = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                if (/scroll|auto/.test(r)) return t.clientHeight != t.scrollHeight;
                t = t.parentNode ? t.parentNode : false
            }
            return false
        };
        this.getViewport = function(e) {
            var t = e && e.parentNode ? e.parentNode : false;
            while (t && t.nodeType == 1 && !/BODY|HTML/.test(t.nodeName)) {
                var n = u(t);
                var r = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                if (/scroll|auto/.test(r) && t.clientHeight != t.scrollHeight) return n;
                if (n.getNiceScroll().length > 0) return n;
                t = t.parentNode ? t.parentNode : false
            }
            return false
        };
        this.onmousewheel = function(e) {
            if (a.locked) {
                a.debounced("checkunlock", a.resize, 250);
                return true
            }
            if (a.rail.drag) return a.cancelEvent(e);
            if (a.opt.oneaxismousemode == "auto" && e.deltaX != 0) a.opt.oneaxismousemode = false;
            if (a.opt.oneaxismousemode && e.deltaX == 0) {
                if (!a.rail.scrollable) {
                    if (a.railh && a.railh.scrollable) {
                        return a.onmousewheelhr(e)
                    } else {
                        return true
                    }
                }
            }
            var t = +(new Date);
            var n = false;
            if (a.opt.preservenativescrolling && a.checkarea + 600 < t) {
                a.nativescrollingarea = a.isScrollable(e);
                n = true
            }
            a.checkarea = t;
            if (a.nativescrollingarea) return true;
            var r = x(e, false, n);
            if (r) a.checkarea = 0;
            return r
        };
        this.onmousewheelhr = function(e) {
            if (a.locked || !a.railh.scrollable) return true;
            if (a.rail.drag) return a.cancelEvent(e);
            var t = +(new Date);
            var n = false;
            if (a.opt.preservenativescrolling && a.checkarea + 600 < t) {
                a.nativescrollingarea = a.isScrollable(e);
                n = true
            }
            a.checkarea = t;
            if (a.nativescrollingarea) return true;
            if (a.locked) return a.cancelEvent(e);
            return x(e, true, n)
        };
        this.stop = function() {
            a.cancelScroll();
            if (a.scrollmon) a.scrollmon.stop();
            a.cursorfreezed = false;
            a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
            a.noticeCursor();
            return a
        };
        this.getTransitionSpeed = function(e) {
            var t = Math.round(a.opt.scrollspeed * 10);
            var n = Math.min(t, Math.round(e / 20 * a.opt.scrollspeed));
            return n > 20 ? n : 0
        };
        if (!a.opt.smoothscroll) {
            this.doScrollLeft = function(e, t) {
                var n = a.getScrollTop();
                a.doScrollPos(e, n, t)
            };
            this.doScrollTop = function(e, t) {
                var n = a.getScrollLeft();
                a.doScrollPos(n, e, t)
            };
            this.doScrollPos = function(e, t, n) {
                var r = e > a.page.maxw ? a.page.maxw : e;
                if (r < 0) r = 0;
                var i = t > a.page.maxh ? a.page.maxh : t;
                if (i < 0) i = 0;
                a.synched("scroll", function() {
                    a.setScrollTop(i);
                    a.setScrollLeft(r)
                })
            };
            this.cancelScroll = function() {}
        } else if (a.ishwscroll && c.hastransition && a.opt.usetransition) {
            this.prepareTransition = function(e, t) {
                var n = t ? e > 20 ? e : 0 : a.getTransitionSpeed(e);
                var r = n ? c.prefixstyle + "transform " + n + "ms ease-out" : "";
                if (!a.lasttransitionstyle || a.lasttransitionstyle != r) {
                    a.lasttransitionstyle = r;
                    a.doc.css(c.transitionstyle, r)
                }
                return n
            };
            this.doScrollLeft = function(e, t) {
                var n = a.scrollrunning ? a.newscrolly : a.getScrollTop();
                a.doScrollPos(e, n, t)
            };
            this.doScrollTop = function(e, t) {
                var n = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
                a.doScrollPos(n, e, t)
            };
            this.doScrollPos = function(e, t, n) {
                var r = a.getScrollTop();
                var i = a.getScrollLeft();
                if ((a.newscrolly - r) * (t - r) < 0 || (a.newscrollx - i) * (e - i) < 0) a.cancelScroll();
                if (a.opt.bouncescroll == false) {
                    if (t < 0) t = 0;
                    else if (t > a.page.maxh) t = a.page.maxh;
                    if (e < 0) e = 0;
                    else if (e > a.page.maxw) e = a.page.maxw
                }
                if (a.scrollrunning && e == a.newscrollx && t == a.newscrolly) return false;
                a.newscrolly = t;
                a.newscrollx = e;
                a.newscrollspeed = n || false;
                if (a.timer) return false;
                a.timer = setTimeout(function() {
                    var n = a.getScrollTop();
                    var r = a.getScrollLeft();
                    var i = {};
                    i.x = e - r;
                    i.y = t - n;
                    i.px = r;
                    i.py = n;
                    var s = Math.round(Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2)));
                    var o = a.newscrollspeed && a.newscrollspeed > 1 ? a.newscrollspeed : a.getTransitionSpeed(s);
                    if (a.newscrollspeed && a.newscrollspeed <= 1) o *= a.newscrollspeed;
                    a.prepareTransition(o, true);
                    if (a.timerscroll && a.timerscroll.tm) clearInterval(a.timerscroll.tm);
                    if (o > 0) {
                        if (!a.scrollrunning && a.onscrollstart) {
                            var u = {
                                type: "scrollstart",
                                current: {
                                    x: r,
                                    y: n
                                },
                                request: {
                                    x: e,
                                    y: t
                                },
                                end: {
                                    x: a.newscrollx,
                                    y: a.newscrolly
                                },
                                speed: o
                            };
                            a.onscrollstart.call(a, u)
                        }
                        if (c.transitionend) {
                            if (!a.scrollendtrapped) {
                                a.scrollendtrapped = true;
                                a.bind(a.doc, c.transitionend, a.onScrollEnd, false)
                            }
                        } else {
                            if (a.scrollendtrapped) clearTimeout(a.scrollendtrapped);
                            a.scrollendtrapped = setTimeout(a.onScrollEnd, o)
                        }
                        var f = n;
                        var l = r;
                        a.timerscroll = {
                            bz: new BezierClass(f, a.newscrolly, o, 0, 0, .58, 1),
                            bh: new BezierClass(l, a.newscrollx, o, 0, 0, .58, 1)
                        };
                        if (!a.cursorfreezed) a.timerscroll.tm = setInterval(function() {
                            a.showCursor(a.getScrollTop(), a.getScrollLeft())
                        }, 60)
                    }
                    a.synched("doScroll-set", function() {
                        a.timer = 0;
                        if (a.scrollendtrapped) a.scrollrunning = true;
                        a.setScrollTop(a.newscrolly);
                        a.setScrollLeft(a.newscrollx);
                        if (!a.scrollendtrapped) a.onScrollEnd()
                    })
                }, 50)
            };
            this.cancelScroll = function() {
                if (!a.scrollendtrapped) return true;
                var e = a.getScrollTop();
                var t = a.getScrollLeft();
                a.scrollrunning = false;
                if (!c.transitionend) clearTimeout(c.transitionend);
                a.scrollendtrapped = false;
                a._unbind(a.doc, c.transitionend, a.onScrollEnd);
                a.prepareTransition(0);
                a.setScrollTop(e);
                if (a.railh) a.setScrollLeft(t);
                if (a.timerscroll && a.timerscroll.tm) clearInterval(a.timerscroll.tm);
                a.timerscroll = false;
                a.cursorfreezed = false;
                a.showCursor(e, t);
                return a
            };
            this.onScrollEnd = function() {
                if (a.scrollendtrapped) a._unbind(a.doc, c.transitionend, a.onScrollEnd);
                a.scrollendtrapped = false;
                a.prepareTransition(0);
                if (a.timerscroll && a.timerscroll.tm) clearInterval(a.timerscroll.tm);
                a.timerscroll = false;
                var e = a.getScrollTop();
                var t = a.getScrollLeft();
                a.setScrollTop(e);
                if (a.railh) a.setScrollLeft(t);
                a.noticeCursor(false, e, t);
                a.cursorfreezed = false;
                if (e < 0) e = 0;
                else if (e > a.page.maxh) e = a.page.maxh;
                if (t < 0) t = 0;
                else if (t > a.page.maxw) t = a.page.maxw;
                if (e != a.newscrolly || t != a.newscrollx) return a.doScrollPos(t, e, a.opt.snapbackspeed);
                if (a.onscrollend && a.scrollrunning) {
                    var n = {
                        type: "scrollend",
                        current: {
                            x: t,
                            y: e
                        },
                        end: {
                            x: a.newscrollx,
                            y: a.newscrolly
                        }
                    };
                    a.onscrollend.call(a, n)
                }
                a.scrollrunning = false
            }
        } else {
            this.doScrollLeft = function(e, t) {
                var n = a.scrollrunning ? a.newscrolly : a.getScrollTop();
                a.doScrollPos(e, n, t)
            };
            this.doScrollTop = function(e, t) {
                var n = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
                a.doScrollPos(n, e, t)
            };
            this.doScrollPos = function(e, t, n) {
                function c() {
                    if (a.cancelAnimationFrame) return true;
                    a.scrollrunning = true;
                    l = 1 - l;
                    if (l) return a.timer = h(c) || 1;
                    var e = 0;
                    var t = sy = a.getScrollTop();
                    if (a.dst.ay) {
                        t = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly;
                        var n = t - sy;
                        if (n < 0 && t < a.newscrolly || n > 0 && t > a.newscrolly) t = a.newscrolly;
                        a.setScrollTop(t);
                        if (t == a.newscrolly) e = 1
                    } else {
                        e = 1
                    }
                    var r = sx = a.getScrollLeft();
                    if (a.dst.ax) {
                        r = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
                        var n = r - sx;
                        if (n < 0 && r < a.newscrollx || n > 0 && r > a.newscrollx) r = a.newscrollx;
                        a.setScrollLeft(r);
                        if (r == a.newscrollx) e += 1
                    } else {
                        e += 1
                    }
                    if (e == 2) {
                        a.timer = 0;
                        a.cursorfreezed = false;
                        a.bzscroll = false;
                        a.scrollrunning = false;
                        if (t < 0) t = 0;
                        else if (t > a.page.maxh) t = a.page.maxh;
                        if (r < 0) r = 0;
                        else if (r > a.page.maxw) r = a.page.maxw;
                        if (r != a.newscrollx || t != a.newscrolly) a.doScrollPos(r, t);
                        else {
                            if (a.onscrollend) {
                                var i = {
                                    type: "scrollend",
                                    current: {
                                        x: sx,
                                        y: sy
                                    },
                                    end: {
                                        x: a.newscrollx,
                                        y: a.newscrolly
                                    }
                                };
                                a.onscrollend.call(a, i)
                            }
                        }
                    } else {
                        a.timer = h(c) || 1
                    }
                }
                var t = typeof t == "undefined" || t === false ? a.getScrollTop(true) : t;
                if (a.timer && a.newscrolly == t && a.newscrollx == e) return true;
                if (a.timer) p(a.timer);
                a.timer = 0;
                var r = a.getScrollTop();
                var i = a.getScrollLeft();
                if ((a.newscrolly - r) * (t - r) < 0 || (a.newscrollx - i) * (e - i) < 0) a.cancelScroll();
                a.newscrolly = t;
                a.newscrollx = e;
                if (!a.bouncescroll || !a.rail.visibility) {
                    if (a.newscrolly < 0) {
                        a.newscrolly = 0
                    } else if (a.newscrolly > a.page.maxh) {
                        a.newscrolly = a.page.maxh
                    }
                }
                if (!a.bouncescroll || !a.railh.visibility) {
                    if (a.newscrollx < 0) {
                        a.newscrollx = 0
                    } else if (a.newscrollx > a.page.maxw) {
                        a.newscrollx = a.page.maxw
                    }
                }
                a.dst = {};
                a.dst.x = e - i;
                a.dst.y = t - r;
                a.dst.px = i;
                a.dst.py = r;
                var s = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
                a.dst.ax = a.dst.x / s;
                a.dst.ay = a.dst.y / s;
                var o = 0;
                var u = s;
                if (a.dst.x == 0) {
                    o = r;
                    u = t;
                    a.dst.ay = 1;
                    a.dst.py = 0
                } else if (a.dst.y == 0) {
                    o = i;
                    u = e;
                    a.dst.ax = 1;
                    a.dst.px = 0
                }
                var f = a.getTransitionSpeed(s);
                if (n && n <= 1) f *= n;
                if (f > 0) {
                    a.bzscroll = a.bzscroll ? a.bzscroll.update(u, f) : new BezierClass(o, u, f, 0, 1, 0, 1)
                } else {
                    a.bzscroll = false
                }
                if (a.timer) return;
                if (r == a.page.maxh && t >= a.page.maxh || i == a.page.maxw && e >= a.page.maxw) a.checkContentSize();
                var l = 1;
                a.cancelAnimationFrame = false;
                a.timer = 1;
                if (a.onscrollstart && !a.scrollrunning) {
                    var d = {
                        type: "scrollstart",
                        current: {
                            x: i,
                            y: r
                        },
                        request: {
                            x: e,
                            y: t
                        },
                        end: {
                            x: a.newscrollx,
                            y: a.newscrolly
                        },
                        speed: f
                    };
                    a.onscrollstart.call(a, d)
                }
                c();
                if (r == a.page.maxh && t >= r || i == a.page.maxw && e >= i) a.checkContentSize();
                a.noticeCursor()
            };
            this.cancelScroll = function() {
                if (a.timer) p(a.timer);
                a.timer = 0;
                a.bzscroll = false;
                a.scrollrunning = false;
                return a
            }
        }
        this.doScrollBy = function(e, t) {
            var n = 0;
            if (t) {
                n = Math.floor((a.scroll.y - e) * a.scrollratio.y)
            } else {
                var r = a.timer ? a.newscrolly : a.getScrollTop(true);
                n = r - e
            }
            if (a.bouncescroll) {
                var i = Math.round(a.view.h / 2);
                if (n < -i) n = -i;
                else if (n > a.page.maxh + i) n = a.page.maxh + i
            }
            a.cursorfreezed = false;
            py = a.getScrollTop(true);
            if (n < 0 && py <= 0) return a.noticeCursor();
            else if (n > a.page.maxh && py >= a.page.maxh) {
                a.checkContentSize();
                return a.noticeCursor()
            }
            a.doScrollTop(n)
        };
        this.doScrollLeftBy = function(e, t) {
            var n = 0;
            if (t) {
                n = Math.floor((a.scroll.x - e) * a.scrollratio.x)
            } else {
                var r = a.timer ? a.newscrollx : a.getScrollLeft(true);
                n = r - e
            }
            if (a.bouncescroll) {
                var i = Math.round(a.view.w / 2);
                if (n < -i) n = -i;
                else if (n > a.page.maxw + i) n = a.page.maxw + i
            }
            a.cursorfreezed = false;
            px = a.getScrollLeft(true);
            if (n < 0 && px <= 0) return a.noticeCursor();
            else if (n > a.page.maxw && px >= a.page.maxw) return a.noticeCursor();
            a.doScrollLeft(n)
        };
        this.doScrollTo = function(e, t) {
            var n = t ? Math.round(e * a.scrollratio.y) : e;
            if (n < 0) n = 0;
            else if (n > a.page.maxh) n = a.page.maxh;
            a.cursorfreezed = false;
            a.doScrollTop(e)
        };
        this.checkContentSize = function() {
            var e = a.getContentSize();
            if (e.h != a.page.h || e.w != a.page.w) a.resize(false, e)
        };
        a.onscroll = function(e) {
            if (a.rail.drag) return;
            if (!a.cursorfreezed) {
                a.synched("scroll", function() {
                    a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                    if (a.railh) a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x));
                    a.noticeCursor()
                })
            }
        };
        a.bind(a.docscroll, "scroll", a.onscroll);
        this.doZoomIn = function(e) {
            if (a.zoomactive) return;
            a.zoomactive = true;
            a.zoomrestore = {
                style: {}
            };
            var t = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"];
            var n = a.win[0].style;
            for (var r in t) {
                var i = t[r];
                a.zoomrestore.style[i] = typeof n[i] != "undefined" ? n[i] : ""
            }
            a.zoomrestore.style.width = a.win.css("width");
            a.zoomrestore.style.height = a.win.css("height");
            a.zoomrestore.padding = {
                w: a.win.outerWidth() - a.win.width(),
                h: a.win.outerHeight() - a.win.height()
            };
            if (c.isios4) {
                a.zoomrestore.scrollTop = u(window).scrollTop();
                u(window).scrollTop(0)
            }
            a.win.css({
                position: c.isios4 ? "absolute" : "fixed",
                top: 0,
                left: 0,
                "z-index": o + 100,
                margin: "0px"
            });
            var s = a.win.css("backgroundColor");
            if (s == "" || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)) a.win.css("backgroundColor", "#fff");
            a.rail.css({
                "z-index": o + 101
            });
            a.zoom.css({
                "z-index": o + 102
            });
            a.zoom.css("backgroundPosition", "0px -18px");
            a.resizeZoom();
            if (a.onzoomin) a.onzoomin.call(a);
            return a.cancelEvent(e)
        };
        this.doZoomOut = function(e) {
            if (!a.zoomactive) return;
            a.zoomactive = false;
            a.win.css("margin", "");
            a.win.css(a.zoomrestore.style);
            if (c.isios4) {
                u(window).scrollTop(a.zoomrestore.scrollTop)
            }
            a.rail.css({
                "z-index": a.zindex
            });
            a.zoom.css({
                "z-index": a.zindex
            });
            a.zoomrestore = false;
            a.zoom.css("backgroundPosition", "0px 0px");
            a.onResize();
            if (a.onzoomout) a.onzoomout.call(a);
            return a.cancelEvent(e)
        };
        this.doZoom = function(e) {
            return a.zoomactive ? a.doZoomOut(e) : a.doZoomIn(e)
        };
        this.resizeZoom = function() {
            if (!a.zoomactive) return;
            var e = a.getScrollTop();
            a.win.css({
                width: u(window).width() - a.zoomrestore.padding.w + "px",
                height: u(window).height() - a.zoomrestore.padding.h + "px"
            });
            a.onResize();
            a.setScrollTop(Math.min(a.page.maxh, e))
        };
        this.init();
        u.nicescroll.push(this)
    };
    var E = function(e) {
        var t = this;
        this.nc = e;
        this.lastx = 0;
        this.lasty = 0;
        this.speedx = 0;
        this.speedy = 0;
        this.lasttime = 0;
        this.steptime = 0;
        this.snapx = false;
        this.snapy = false;
        this.demulx = 0;
        this.demuly = 0;
        this.lastscrollx = -1;
        this.lastscrolly = -1;
        this.chkx = 0;
        this.chky = 0;
        this.timer = 0;
        this.time = function() {
            return +(new Date)
        };
        this.reset = function(e, n) {
            t.stop();
            var r = t.time();
            t.steptime = 0;
            t.lasttime = r;
            t.speedx = 0;
            t.speedy = 0;
            t.lastx = e;
            t.lasty = n;
            t.lastscrollx = -1;
            t.lastscrolly = -1
        };
        this.update = function(e, n) {
            var r = t.time();
            t.steptime = r - t.lasttime;
            t.lasttime = r;
            var i = n - t.lasty;
            var s = e - t.lastx;
            var o = t.nc.getScrollTop();
            var u = t.nc.getScrollLeft();
            var a = o + i;
            var f = u + s;
            t.snapx = f < 0 || f > t.nc.page.maxw;
            t.snapy = a < 0 || a > t.nc.page.maxh;
            t.speedx = s;
            t.speedy = i;
            t.lastx = e;
            t.lasty = n
        };
        this.stop = function() {
            t.nc.unsynched("domomentum2d");
            if (t.timer) clearTimeout(t.timer);
            t.timer = 0;
            t.lastscrollx = -1;
            t.lastscrolly = -1
        };
        this.doSnapy = function(e, n) {
            var r = false;
            if (n < 0) {
                n = 0;
                r = true
            } else if (n > t.nc.page.maxh) {
                n = t.nc.page.maxh;
                r = true
            }
            if (e < 0) {
                e = 0;
                r = true
            } else if (e > t.nc.page.maxw) {
                e = t.nc.page.maxw;
                r = true
            }
            if (r) t.nc.doScrollPos(e, n, t.nc.opt.snapbackspeed)
        };
        this.doMomentum = function(e) {
            var n = t.time();
            var r = e ? n + e : t.lasttime;
            var i = t.nc.getScrollLeft();
            var s = t.nc.getScrollTop();
            var o = t.nc.page.maxh;
            var u = t.nc.page.maxw;
            t.speedx = u > 0 ? Math.min(60, t.speedx) : 0;
            t.speedy = o > 0 ? Math.min(60, t.speedy) : 0;
            var a = r && n - r <= 60;
            if (s < 0 || s > o || i < 0 || i > u) a = false;
            var f = t.speedy && a ? t.speedy : false;
            var l = t.speedx && a ? t.speedx : false;
            if (f || l) {
                var c = Math.max(16, t.steptime);
                if (c > 50) {
                    var h = c / 50;
                    t.speedx *= h;
                    t.speedy *= h;
                    c = 50
                }
                t.demulxy = 0;
                t.lastscrollx = t.nc.getScrollLeft();
                t.chkx = t.lastscrollx;
                t.lastscrolly = t.nc.getScrollTop();
                t.chky = t.lastscrolly;
                var p = t.lastscrollx;
                var d = t.lastscrolly;
                var v = function() {
                    var e = t.time() - n > 600 ? .04 : .02;
                    if (t.speedx) {
                        p = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy));
                        t.lastscrollx = p;
                        if (p < 0 || p > u) e = .1
                    }
                    if (t.speedy) {
                        d = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy));
                        t.lastscrolly = d;
                        if (d < 0 || d > o) e = .1
                    }
                    t.demulxy = Math.min(1, t.demulxy + e);
                    t.nc.synched("domomentum2d", function() {
                        if (t.speedx) {
                            var e = t.nc.getScrollLeft();
                            if (e != t.chkx) t.stop();
                            t.chkx = p;
                            t.nc.setScrollLeft(p)
                        }
                        if (t.speedy) {
                            var n = t.nc.getScrollTop();
                            if (n != t.chky) t.stop();
                            t.chky = d;
                            t.nc.setScrollTop(d)
                        }
                        if (!t.timer) {
                            t.nc.hideCursor();
                            t.doSnapy(p, d)
                        }
                    });
                    if (t.demulxy < 1) {
                        t.timer = setTimeout(v, c)
                    } else {
                        t.stop();
                        t.nc.hideCursor();
                        t.doSnapy(p, d)
                    }
                };
                v()
            } else {
                t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop())
            }
        }
    };
    var S = e.fn.scrollTop;
    e.cssHooks["pageYOffset"] = {
        get: function(e, t, n) {
            var r = u.data(e, "__nicescroll") || false;
            return r && r.ishwscroll ? r.getScrollTop() : S.call(e)
        },
        set: function(e, t) {
            var n = u.data(e, "__nicescroll") || false;
            n && n.ishwscroll ? n.setScrollTop(parseInt(t)) : S.call(e, t);
            return this
        }
    };
    e.fn.scrollTop = function(e) {
        if (typeof e == "undefined") {
            var t = this[0] ? u.data(this[0], "__nicescroll") || false : false;
            return t && t.ishwscroll ? t.getScrollTop() : S.call(this)
        } else {
            return this.each(function() {
                var t = u.data(this, "__nicescroll") || false;
                t && t.ishwscroll ? t.setScrollTop(parseInt(e)) : S.call(u(this), e)
            })
        }
    };
    var x = e.fn.scrollLeft;
    u.cssHooks.pageXOffset = {
        get: function(e, t, n) {
            var r = u.data(e, "__nicescroll") || false;
            return r && r.ishwscroll ? r.getScrollLeft() : x.call(e)
        },
        set: function(e, t) {
            var n = u.data(e, "__nicescroll") || false;
            n && n.ishwscroll ? n.setScrollLeft(parseInt(t)) : x.call(e, t);
            return this
        }
    };
    e.fn.scrollLeft = function(e) {
        if (typeof e == "undefined") {
            var t = this[0] ? u.data(this[0], "__nicescroll") || false : false;
            return t && t.ishwscroll ? t.getScrollLeft() : x.call(this)
        } else {
            return this.each(function() {
                var t = u.data(this, "__nicescroll") || false;
                t && t.ishwscroll ? t.setScrollLeft(parseInt(e)) : x.call(u(this), e)
            })
        }
    };
    var T = function(e) {
        var t = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function(e) {
            for (var n = 0, r = 0; n < t.length; n++) e.call(t[n], r++);
            return t
        };
        this.push = function(e) {
            t[t.length] = e;
            t.length++
        };
        this.eq = function(e) {
            return t[e]
        };
        if (e) {
            for (a = 0; a < e.length; a++) {
                var n = u.data(e[a], "__nicescroll") || false;
                if (n) {
                    this[this.length] = n;
                    this.length++
                }
            }
        }
        return this
    };
    N(T.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, t) {
        e[t] = function() {
            var e = arguments;
            return this.each(function() {
                this[t].apply(this, e)
            })
        }
    });
    e.fn.getNiceScroll = function(e) {
        if (typeof e == "undefined") {
            return new T(this)
        } else {
            var t = this[e] && u.data(this[e], "__nicescroll") || false;
            return t
        }
    };
    e.extend(e.expr[":"], {
        nicescroll: function(e) {
            return u.data(e, "__nicescroll") ? true : false
        }
    });
    u.fn.niceScroll = function(e, t) {
        if (typeof t == "undefined") {
            if (typeof e == "object" && !("jquery" in e)) {
                t = e;
                e = false
            }
        }
        var n = new T;
        if (typeof t == "undefined") t = {};
        if (e || false) {
            t.doc = u(e);
            t.win = u(this)
        }
        var r = !("doc" in t);
        if (!r && !("win" in t)) t.win = u(this);
        this.each(function() {
            var e = u(this).data("__nicescroll") || false;
            if (!e) {
                t.doc = r ? u(this) : t.doc;
                e = new w(t, u(this));
                u(this).data("__nicescroll", e)
            }
            n.push(e)
        });
        return n.length == 1 ? n[0] : n
    };
    window.NiceScroll = {
        getjQuery: function() {
            return e
        }
    };
    if (!u.nicescroll) {
        u.nicescroll = new T;
        u.nicescroll.options = g
    }
})(jQuery);