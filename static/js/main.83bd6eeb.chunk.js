(this.webpackJsonpchess = this.webpackJsonpchess || []).push([[0], { 13: function (e, s, r) { }, 14: function (e, s, r) { "use strict"; r.r(s); var t = r(0), n = r(1), i = r.n(n), h = r(6), a = r.n(h), u = (r(13), r(7)), c = r(5), o = function (e) { var s = e.split("_"); return e.length > 2 ? { W: { K: "/chessboard/public/ChessPieces/WhiteKing.png", Q: "/chessboard/public/ChessPieces/WhiteQueen.png", B: "/chessboard/public/ChessPieces/WhiteBishop.png", N: "/chessboard/public/ChessPieces/WhiteKnight.png", R: "/chessboard/public/ChessPieces/WhiteRook.png", P: "/chessboard/public/ChessPieces/WhitePawn.png" }, B: { K: "/chessboard/public/ChessPieces/BlackKing.png", Q: "/chessboard/public/ChessPieces/BlackQueen.png", B: "/chessboard/public/ChessPieces/BlackBishop.png", N: "/chessboard/public/ChessPieces/BlackKnight.png", R: "/chessboard/public/ChessPieces/BlackRook.png", P: "/chessboard/public/ChessPieces/BlackPawn.png" } }[s[0]][s[1]] : "/chessboard/public/ChessPieces/Blank.png" }, p = function (e) { var s = e.board, r = e.piece, n = e.index, i = e.move, h = e.turn, a = e.setTurn, u = (n + Math.floor(n / 8)) % 2 === 0 ? "white" : "grey", c = function (e) { return "".concat({ 0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h" }[e % 8]).concat(Math.floor((64 - e) / 8) + 1) }; return Object(t.jsx)("div", { id: "boardSpot".concat(n), style: { width: "12.5%", textAlign: "center", margin: "0px", backgroundColor: u }, children: Object(t.jsx)("img", { width: "100%", height: "100%", src: o(r), onClick: function () { if (h === r[0]) { var e = function (e, r) { var t = [], n = e[0], i = "W" === n ? "B" : "W"; switch (e[2]) { case "P": if ("W" === n ? r > 15 : r < 47) { var h = "W" === n ? r - 16 : r + 16; " " === s[h][0] && t.push(h) } var a = "W" === n ? r - 8 : r + 8; " " === s[a][0] && t.push(a); var u = "W" === n ? r - 9 : r + 9; s[u][0] === i && t.push(u); var c = "W" === n ? r - 7 : r + 7; s[c][0] === i && t.push(c); break; case "R": for (var o = r; o < 56 && s[o + 8][0] !== n;) { if (s[o + 8][0] === i) { t.push(o + 8); break } t.push(o + 8), o += 8 } for (o = r; o > 7 && s[o - 8][0] !== n;) { if (s[o - 8][0] === i) { t.push(o - 8); break } t.push(o - 8), o -= 8 } for (o = r; o % 8 !== 0 && o < 64 && s[o - 1][0] !== n;) { if (s[o - 1][0] === i) { t.push(o - 1); break } t.push(o - 1), o -= 1 } for (o = r; o % 8 !== 7 && o >= 0 && s[o + 1][0] !== n;) { if (s[o + 1][0] === i) { t.push(o + 1); break } t.push(o + 1), o += 1 } break; case "B": for (var p = r; p % 8 !== 7 && p < 56 && s[p + 9][0] !== n;) { if (s[p + 9][0] === i) { t.push(p + 9); break } t.push(p + 9), p += 9 } for (p = r; p % 8 !== 0 && p < 56 && s[p + 7][0] !== n;) { if (s[p + 7][0] === i) { t.push(p + 7); break } t.push(p + 7), p += 7 } for (p = r; p % 8 !== 7 && p > 7 && s[p - 7][0] !== n;) { if (s[p - 7][0] === i) { t.push(p - 7); break } t.push(p - 7), p -= 7 } for (p = r; p % 8 !== 0 && p > 7 && s[p - 9][0] !== n;) { if (s[p - 9][0] === i) { t.push(p - 9); break } t.push(p - 9), p -= 9 } break; case "N": var f = r < 48, l = r > 15, b = r % 8 !== 0 && r % 8 !== 1, g = r % 8 !== 6 && r % 8 !== 7, W = r < 56, B = r > 7, P = r % 8 !== 0, k = r % 8 !== 7; f && k && s[r + 17][0] !== n && t.push(r + 17), f && P && s[r + 15][0] !== n && t.push(r + 15), W & b && s[r + 6][0] !== n && t.push(r + 6), W && g && s[r + 10][0] !== n && t.push(r + 10), l && k && s[r - 15][0] !== n && t.push(r - 15), l && P && s[r - 17][0] !== n && t.push(r - 17), B && b && s[r - 10][0] !== n && t.push(r - 10), B && g && s[r - 6][0] !== n && t.push(r - 6); break; case "Q": for (var d = r; d < 56 && s[d + 8][0] !== n;) { if (s[d + 8][0] === i) { t.push(d + 8); break } t.push(d + 8), d += 8 } for (d = r; d > 7 && s[d - 8][0] !== n;) { if (s[d - 8][0] === i) { t.push(d - 8); break } t.push(d - 8), d -= 8 } for (d = r; d % 8 !== 0 && d < 64 && s[d - 1][0] !== n;) { if (s[d - 1][0] === i) { t.push(d - 1); break } t.push(d - 1), d -= 1 } for (d = r; d % 8 !== 7 && d >= 0 && s[d + 1][0] !== n;) { if (s[d + 1][0] === i) { t.push(d + 1); break } t.push(d + 1), d += 1 } for (d = r; d % 8 !== 7 && d < 56 && s[d + 9][0] !== n;) { if (s[d + 9][0] === i) { t.push(d + 9); break } t.push(d + 9), d += 9 } for (d = r; d % 8 !== 0 && d < 56 && s[d + 7][0] !== n;) { if (s[d + 7][0] === i) { t.push(d + 7); break } t.push(d + 7), d += 7 } for (d = r; d % 8 !== 7 && d > 7 && s[d - 7][0] !== n;) { if (s[d - 7][0] === i) { t.push(d - 7); break } t.push(d - 7), d -= 7 } for (d = r; d % 8 !== 0 && d > 7 && s[d - 9][0] !== n;) { if (s[d - 9][0] === i) { t.push(d - 9); break } t.push(d - 9), d -= 9 } break; case "K": r > 7 && s[r - 8][0] !== n && t.push(r - 8), r > 7 && r % 8 !== 7 && s[r - 7][0] !== n && t.push(r - 7), r % 8 !== 7 && s[r + 1][0] !== n && t.push(r + 1), r < 56 && r % 8 !== 7 && s[r + 9][0] !== n && t.push(r + 9), r < 56 && s[r + 8][0] !== n && t.push(r + 8), r < 56 && r % 8 !== 0 && s[r + 7][0] !== n && t.push(r + 7), r % 8 !== 0 && s[r - 1][0] !== n && t.push(r - 1), r > 7 && r % 8 !== 0 && s[r - 9][0] !== n && t.push(r - 9); break; default: alert("RED ALERT") }return t }(r, n); if (0 === e.length) return void alert("Cannot move that piece"); console.log(e); var t = prompt("Valid Moves: " + e.map(c)); if (t = function (e) { try { return 8 * (e[1] - 1) + Number({ a: 7, b: 6, c: 5, d: 4, e: 3, f: 2, g: 1, h: 0 }[e[0]]) } catch (s) { return console.error(s), "" } }(t), !e.includes(t)) return void alert("Invalid Choice"); i(n, t), a("W" === h ? "B" : "W") } else " " === r[0] ? alert("Cannot Move Nothing") : alert("Not your turn!") } }) }) }, f = function () { var e = Object(n.useState)(function () { var e = Array(64).fill(" "); return e[0] = "B_R", e[1] = "B_N", e[2] = "B_B", e[3] = "B_Q", e[4] = "B_K", e[5] = "B_B", e[6] = "B_N", e[7] = "B_R", e[8] = "B_P", e[9] = "B_P", e[10] = "B_P", e[11] = "B_P", e[12] = "B_P", e[13] = "B_P", e[14] = "B_P", e[15] = "B_P", e[48] = "W_P", e[49] = "W_P", e[50] = "W_P", e[51] = "W_P", e[52] = "W_P", e[53] = "W_P", e[54] = "W_P", e[55] = "W_P", e[56] = "W_R", e[57] = "W_N", e[58] = "W_B", e[59] = "W_Q", e[60] = "W_K", e[61] = "W_B", e[62] = "W_N", e[63] = "W_R", e }()), s = Object(c.a)(e, 2), r = s[0], i = s[1], h = Object(n.useState)("W"), a = Object(c.a)(h, 2), o = a[0], f = a[1], l = function (e, s) { var t = Object(u.a)(r); s > 55 && "P" === t[e][2] && alert("CHANGE OUT PAWN"), "K" === r[s][2] && alert("Game Over! " + r[s][0] === "W" ? "White Wins!" : "Black Wins!"), t[s] = t[e], t[e] = " ", i(t) }; return Object(t.jsx)("div", { style: { display: "flex", flexDirection: "row", flexWrap: "wrap", width: "70%", margin: "0 auto" }, children: r.map((function (e, s) { return Object(t.jsx)(p, { board: r, turn: o, setTurn: f, move: l, piece: e, index: s }, "boardSpot" + s) })) }) }, l = function () { return Object(t.jsxs)(t.Fragment, { children: [Object(t.jsx)("h1", { style: { textAlign: "center" }, children: "Chess" }), Object(t.jsx)(f, {}), Object(t.jsx)("p", { children: "Notes: Very basic prototype currently. Not at all good" })] }) }, b = function (e) { e && e instanceof Function && r.e(3).then(r.bind(null, 15)).then((function (s) { var r = s.getCLS, t = s.getFID, n = s.getFCP, i = s.getLCP, h = s.getTTFB; r(e), t(e), n(e), i(e), h(e) })) }; a.a.render(Object(t.jsx)(i.a.StrictMode, { children: Object(t.jsx)(l, {}) }), document.getElementById("root")), b() } }, [[14, 1, 2]]]);
//# sourceMappingURL=main.83bd6eeb.chunk.js.map