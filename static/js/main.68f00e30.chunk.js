(this.webpackJsonpfrets=this.webpackJsonpfrets||[]).push([[0],{16:function(n,e,t){n.exports=t(25)},21:function(n,e,t){},22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,a,o=t(0),i=t.n(o),c=t(8),l=t.n(c),u=(t(21),t(3)),s=t(1),f=(t(22),t(9)),d=t(10),m=t(15),b=t(14),p=t(2);(a=r||(r={})).A="A",a["A\u266f"]="A\u266f",a.B="B",a.C="C",a["C\u266f"]="C\u266f",a.D="D",a["D\u266f"]="D\u266f",a.E="E",a.F="F",a["F\u266f"]="F\u266f",a.G="G",a["G\u266f"]="G\u266f";var v=[r.A,r["A\u266f"],r.B,r.C,r["C\u266f"],r.D,r["D\u266f"],r.E,r.F,r["F\u266f"],r.G,r["G\u266f"]],h=[2,2,1,2,2,2,1],g=["ionian","dorian","phrygian","lydian","mixolydian","aeolian","locrian"];function x(n,e,t){for(var r=n.slice(t).concat(n.slice(0,t)),a=[],o=0;a.length<e;)a.push(r[o]),o=(o+1)%n.length;return a}var k=function(){return[r.E,r.A,r.D,r.G,r.B,r.E].map((function(n){return e=v.indexOf(n),x(v,22,e);var e}))},E=function(n,e){for(var t=n.reduce((function(n,e){return n+e}),0),r=x(v,t,v.indexOf(e)),a=[],o=0,i=0;i<n.length;i++)a.push(r[o]),o=n[i]+o;return a.push(r[0]),a},O=k(),j=function(n){return"".concat(n.fret,":").concat(n.string)};function w(){var n=Object(s.a)(["\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background-color: black;\n  border-radius: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 200ms ease-in-out;\n  z-index: 2;\n  ","\n  ","\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  display: inline-block;\n  height: 2px;\n  background-color: grey;\n  position: absolute;\n  top: 50%;\n  width: calc(100% + 1px);\n  left: -1px;\n  transform: translateY(-50%);\n  transition: transform 100ms ease-in-out;\n  z-index: 2;\n  ","\n"]);return y=function(){return n},n}function C(){var n=Object(s.a)(["\n  display: inline-block;\n  border-radius: 100%;\n  height: 15px;\n  width: 15px;\n  background-color: lightgrey;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 50%);\n  z-index: 2;\n"]);return C=function(){return n},n}function S(){var n=Object(s.a)(["\n  display: inline-block;\n  height: ","px;\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  border-left: ","\n  ","\n  &:hover {\n    background-color: #EEE;\n  }\n"]);return S=function(){return n},n}function F(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 0.5fr ",";\n  grid-template-rows: repeat(6, 1fr);\n  width: 100%;\n  box-shadow: 0px 00px 40px rgba(0, 0, 0, 0.15);\n  &:hover {\n    cursor: pointer;\n  }\n"]);return F=function(){return n},n}for(var D=[],A=5;A>=0;A--)for(var G=0;G<23;G++)D.push({string:A,fret:G});var B=new Array(22).fill(1).map((function(n,e){return n*(.05*e+1)})).map((function(n){return n.toString()+"fr"})).reverse().join(" "),z=new Set([3,5,7,9,12,15,17,19,21]),M=p.a.div(F(),B),N=p.a.div(S(),40,(function(n){var e=n.fret;return e>1?"1px solid lightgrey;":1===e?"4px solid black;":"none;"}),(function(n){return n.disabled&&"\n    background-color: #DDD;\n  "})),Y=p.a.div(C()),J=p.a.div(y(),(function(n){return n.hovered&&"\n    transform: translateY(-50%) scaleY(2);\n  "})),R=p.a.div(w(),(function(n){return n.active&&"\n    transform: translate(-50%, -50%) scale(1);\n  "}),(function(n){return n.hollow&&"\n    box-sizing: border-box;\n    background-color: white;\n    border: 2px solid black;\n  "})),W=function(n){Object(m.a)(t,n);var e=Object(b.a)(t);function t(){return Object(f.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(n){return this.props.marked!==n.marked||this.props.disabled!==n.disabled}},{key:"render",value:function(){var n=this.props,e=n.fret,t=n.string,r=n.onClickFret,a=n.marked,o=n.disabled;return i.a.createElement(N,{fret:e,string:t,onClick:function(){return r(e,t)},disabled:o},function(n,e){if(z.has(n))if(12!==n){if(3===e)return i.a.createElement(Y,null)}else if(1===e||5===e)return i.a.createElement(Y,null)}(e,t),i.a.createElement(J,{hovered:!1}),i.a.createElement(R,{active:a,hollow:0===e}))}}]),t}(i.a.Component),I=function(n){var e=n.onClickFret,t=void 0===e?function(){}:e,r=n.markers,a=void 0===r?new Set:r,o=n.activeRange,c=void 0===o?[0,23]:o;return i.a.createElement(M,null,D.map((function(n){var e=n.fret,r=n.string,o=j({fret:e,string:r});return i.a.createElement(W,{key:o,fret:e,string:r,onClickFret:t,marked:a.has(o),disabled:e>=c[1]||e<c[0]})})))};function U(){var n=Object(s.a)(["\n  border: none;\n  outline: none;\n  background-color: white;\n  margin: 10px;\n  padding: 10px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  min-height: 3em;\n  min-width: 3em;\n  &:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n  &:active {\n    transform: scale(0.9);\n    box-shadow: none;\n  }\n  transition: all 200ms ease-in-out;\n  ","\n"]);return U=function(){return n},n}var $=p.a.button(U(),(function(n){return n.selected&&"\n    box-shadow: none;\n    border: 2px solid darkgrey;\n  "}));function q(){var n=Object(s.a)(["\n  max-width: 400px;\n  margin: 20px;\n  text-transform: none;\n"]);return q=function(){return n},n}var H=p.a.p(q());function K(){var n=Object(s.a)(["\n  margin-bottom: 50px;\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return K=function(){return n},n}var L=p.a.div(K()),P=function(){var n=Object(o.useState)({fret:0,string:0}),e=Object(u.a)(n,2),t=e[0],a=e[1],c=Object(o.useState)(0),l=Object(u.a)(c,2),s=l[0],f=l[1],d=Object(o.useState)(r.E),m=Object(u.a)(d,2),b=m[0],p=m[1],k=new Set(function(n,e){var t=[],r=e?e.fret:O[0].indexOf(n[0]),a=e?e.string:0,o=r>0?3:4,i=r>0?1:0;t.push({fret:r,string:a});for(var c=a,l=1;l<n.length;l++){for(var u=r;c<6&&O[c][u]!==n[l];)++u-r>o&&(c++,u=r-i);t.push({fret:u,string:c})}return t.map(j)}(function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=x(h,7*t+1,e);return E(r,n)}(b,s),t));return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null,"Click a note name or fret and a mode to build a scale starting from that note."),i.a.createElement(L,null,i.a.createElement("div",null,v.map((function(n){return i.a.createElement($,{selected:b===n,onClick:function(){return p(n)}},n)}))),i.a.createElement("div",null,g.map((function(n,e){return i.a.createElement($,{selected:s===e,onClick:function(){return f(e)}},n)})))),i.a.createElement(I,{onClickFret:function(n,e){a({fret:n,string:e}),p(O[e][n])},markers:k}))};function Q(){var n=Object(s.a)(["\n  margin: 50px 0px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return Q=function(){return n},n}var T,V=p.a.div(Q()),X=function(){var n=k(),e=Object(o.useState)([0,4]),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(u.a)(r,2),l=c[0],s=c[1],f=Object(o.useState)(0),d=Object(u.a)(f,2),m=d[0],b=d[1],p=function(){var e=Math.floor(Math.random()*n.length),t=Math.floor(Math.random()*s);return j({string:e,fret:t})},h=Object(o.useState)(p()),g=Object(u.a)(h,2),x=g[0],E=g[1],w=function(n){(function(n){return O[n.string][n.fret]})(function(n){var e=n.split(":"),t=Object(u.a)(e,2),r=t[0],a=t[1];return{fret:Number(r),string:Number(a)}}(x))===n?(E(function n(){var e=p();return e===x?n():e}()),b(m+1)):b(0)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null,"Guess the note marked by the dot. Click on the fretboard to change the available range."),i.a.createElement(V,null,i.a.createElement("div",null,v.map((function(n){return i.a.createElement($,{key:n,selected:!1,onClick:function(){return w(n)}},n)})))),i.a.createElement("h2",null,"Streak: ",m),i.a.createElement(I,{onClickFret:function(n){a(n>l?[l,n]:[n,s])},markers:new Set([x]),activeRange:r}))};function Z(){var n=Object(s.a)(["\n  border: none;\n  border-bottom: 2px solid transparent;\n  outline: none;\n  padding: 5px;\n  margin: 5px;\n  transition: all 200ms ease-in-out;\n  font-weight: 400;\n  ","\n  &:hover {\n    cursor: pointer;\n  }\n"]);return Z=function(){return n},n}!function(n){n.notes="notes",n.scales="scales"}(T||(T={}));var _=p.a.button(Z(),(function(n){return n.active&&"\n    border-bottom: 2px solid black;\n  "}));var nn=function(){var n=Object(o.useState)(T.scales),e=Object(u.a)(n,2),t=e[0],r=e[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(_,{active:t===T.notes,onClick:function(){return r(T.notes)}},"Note Guesser"),i.a.createElement(_,{active:t===T.scales,onClick:function(){return r(T.scales)}},"Scale Builder")),i.a.createElement("div",{className:"App"},t===T.notes&&i.a.createElement(X,null),t===T.scales&&i.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(nn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.68f00e30.chunk.js.map