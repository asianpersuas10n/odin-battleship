(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>p});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n:root{\n  font-size: 16px;\n}\n\nbody {\n  background-color: #908B85;\n  color: white;\n}\n\n#placementGrid {\n  background-color: #A3CFA7;\n  width: 25rem;\n  height: 25rem;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.container {\n  border: 1px solid #FFF1DE;\n}\n\n.draggable {\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  cursor: move;\n  height: 36px;\n  width: 36px;\n}\n\n.draggable .dragging {\n  opacity: .9;\n}\n\n#span1 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 36px;\n  top: 10px;\n  left: 30px\n}\n\n#span2 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 76px;\n  top: 10px;\n  left: 30px;\n}\n\n#span3 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 76px;\n  top: 10px;\n  left: 30px;\n}\n\n#span4 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 116px;\n  top: 10px;\n  left: 30px;\n}\n\n#span5 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 156px;\n  top: 10px;\n  left: 30px;\n}",""]);const p=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var p=0;p<this.length;p++){var s=this[p][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],p=0;p<n.length;p++){var s=n[p],c=r.base?s[0]+r.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var u=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var g=o(f,r);r.byIndex=p,t.splice(p,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var p=e(a[i]);t[p].references--}for(var s=r(n,o),c=0;c<a.length;c++){var d=e(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),i=e.n(a),p=e(565),s=e.n(p),c=e(216),d=e.n(c),l=e(589),u=e.n(l),f=e(426),g={};function h(n){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(n)}function x(n){return function(n){if(Array.isArray(n))return m(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,function(){var n,t,e,r,o=document.querySelectorAll(".draggable"),a=document.querySelectorAll(".row"),i=document.getElementById("span1"),p=document.getElementById("span2"),s=document.getElementById("span3"),c=document.getElementById("span4"),d=document.getElementById("span5"),l="padding-top: 10px;padding-right: 76px;top: 10px;left: 30px;",u="padding-top: 50px;padding-right: 36px;top: -30px;left: -9px;",f=[],g=[],m=[],v=[],y=[],b=[];function w(n,t,e,r,o){var a;if(a="shipone"===n?2:"shiptwo"===n||"shipthree"===n?3:"shipfour"===n?4:5,"r"===r){for(var i=function(n){if(o.some((function(r){return r[0]===t+n&&r[1]===e})))return console.log(4),{v:!1}},p=0;p<a;p++){var s=i(p);if("object"===h(s))return s.v}return console.log(1),a+Number(t)<11}for(var c=function(n){if(o.some((function(r){return r[0]===t&&r[1]===e-n})))return console.log(5),{v:!1}},d=0;d<a;d++){var l=c(d);if("object"===h(l))return l.v}return console.log(2),Number(e)-a>-2}o.forEach((function(o){o.dataset.alignment="r",o.addEventListener("dblclick",(function(){n=o.id;var a;a="r"===t?"c":"r",b="shipone"===n?[].concat(x(g),x(m),x(v),x(y)):"shiptwo"===n?[].concat(x(f),x(m),x(v),x(y)):"shipthree"===n?[].concat(x(f),x(g),x(v),x(y)):[].concat(x(f),x(g),x(m),x("shipfour"===n?y:v)),console.log(n,e,r,a,b),console.log(w(n,e,r,a,b)),!1!==w(n,e,r,a,b)?"r"===t?(o.dataset.alignment="c",t="c","shipone"===n?i.style.cssText="top: -30px;left: -9px;":"shiptwo"===n?p.style.cssText=u:"shipthree"===n?s.style.cssText=u:"shipfour"===n?c.style.cssText="padding-top: 90px;padding-right: 36px;top: -30px;left: -9px;":d.style.cssText="padding-top: 130px;padding-right: 36px;top: -30px;left: -9px;"):(o.dataset.alignment="r",t="r","shipone"===n?i.style.cssText="top: 10px;left: 30px;":"shiptwo"===n?p.style.cssText=l:"shipthree"===n?s.style.cssText=l:"shipfour"===n?c.style.cssText="padding-top: 10px;padding-right: 116px;top: 10px;left: 30px;":d.style.cssText="padding-top: 10px;padding-right: 156px;top: 10px;left: 30px;"):console.log(3)})),o.addEventListener("dragstart",(function(){o.classList.add("dragging"),n=o.id,t=o.dataset.alignment})),o.addEventListener("dragend",(function(){o.classList.remove("dragging")}))})),a.forEach((function(o,a){o.querySelectorAll(".container").forEach((function(o,i){o.dataset.y=a,o.dataset.x=i,o.addEventListener("click",(function(){e=o.dataset.x,r=o.dataset.y})),o.addEventListener("dragover",(function(a){if(a.preventDefault(),e=Number(o.dataset.x),r=Number(o.dataset.y),b="shipone"===n?[].concat(x(g),x(m),x(v),x(y)):"shiptwo"===n?[].concat(x(f),x(m),x(v),x(y)):"shipthree"===n?[].concat(x(f),x(g),x(v),x(y)):[].concat(x(f),x(g),x(m),x("shipfour"===n?y:v)),!o.firstChild&&w(n,e,r,t,b)){"r"===t?"shipone"===n?f=[[e,r],[e+1,r]]:"shiptwo"===n?g=[[e,r],[e+1,r],[e+2,r]]:"shipthree"===n?m=[[e,r],[e+1,r],[e+2,r]]:"shipfour"===n?v=[[e,r],[e+1,r],[e+2,r],[e+3,r]]:y=[[e,r],[e+1,r],[e+2,r],[e+3,r],[e+4,r]]:"shipone"===n?f=[[e,r],[e,r-1]]:"shiptwo"===n?g=[[e,r],[e,r-1],[e,r-2]]:"shipthree"===n?m=[[e,r],[e,r-1],[e,r-2]]:"shipfour"===n?v=[[e,r],[e,r-1],[e,r-2],[e,r-3]]:y=[[e,r],[e,r-1],[e,r-2],[e,r-3],[e,r-4]];var i=document.querySelector(".dragging");o.appendChild(i)}}))}))}))}()})()})();