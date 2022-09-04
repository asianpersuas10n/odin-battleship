(()=>{"use strict";var n,e,t,r,o,a,i,d,c,p,s,l,u,g,f={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n:root{\n  font-size: 16px;\n}\n\nbody {\n  background-color: #908B85;\n  color: white;\n}\n\n#placementGrid {\n  background-color: #A3CFA7;\n  width: 25rem;\n  height: 25rem;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.container {\n  border: 1px solid #FFF1DE;\n}\n\n.draggable {\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  cursor: move;\n  height: 36px;\n  width: 36px;\n}\n\n.draggable .dragging {\n  opacity: .9;\n}\n\n#span1 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 36px;\n  top: 10px;\n  left: 30px;\n}\n\n#span2 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 76px;\n  top: 10px;\n  left: 30px;\n}\n\n#span3 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 76px;\n  top: 10px;\n  left: 30px;\n}\n\n#span4 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 116px;\n  top: 10px;\n  left: 30px;\n}\n\n#span5 {\n  position: relative;\n  border: 1px solid black;\n  background-color: rgba(49, 49, 49, 0.5);\n  padding-top: 10px;\n  padding-bottom: 9px;\n  padding-right: 156px;\n  top: 10px;\n  left: 30px;\n}",""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],p=r.base?c[0]+r.base:c[0],s=a[p]||0,l="".concat(p," ").concat(s);a[p]=s+1;var u=t(l),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=o(g,r);r.byIndex=d,e.splice(d,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=r(n,o),p=0;p<a.length;p++){var s=t(a[p]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function b(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return f[n](t,t.exports,b),t.exports}b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var t in e)b.o(e,t)&&!b.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),b.nc=void 0,n=b(379),e=b.n(n),t=b(795),r=b.n(t),o=b(569),a=b.n(o),i=b(565),d=b.n(i),c=b(216),p=b.n(c),s=b(589),l=b.n(s),u=b(426),(g={}).styleTagTransform=l(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),e()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals,function(){var n,e,t,r,o=document.querySelectorAll(".draggable"),a=document.querySelectorAll(".row");function i(n,e,t,r){var o;return o="shipone"===n?2:"shiptwo"===n||"shipthree"===n?3:"shipfour"===n?4:5,"r"===r?(console.log(1),o+Number(e)<11):(console.log(2),Number(t)-o>-2)}o.forEach((function(o){o.dataset.alignment="r",o.addEventListener("dblclick",(function(){i(n=o.id,t,r,"r"===e?"c":"r")?"r"===e?(o.dataset.alignment="c",e="c"):(o.dataset.alignment="r",e="r"):console.log(3)})),o.addEventListener("dragstart",(function(){o.classList.add("dragging"),n=o.id,e=o.dataset.alignment})),o.addEventListener("dragend",(function(){o.classList.remove("dragging")}))})),a.forEach((function(o,a){o.querySelectorAll(".container").forEach((function(o,d){o.dataset.y=a,o.dataset.x=d,o.addEventListener("click",(function(){t=o.dataset.x,r=o.dataset.y})),o.addEventListener("dragover",(function(a){if(a.preventDefault(),t=o.dataset.x,r=o.dataset.y,!o.firstChild&&i(n,t,r,e)){var d=document.querySelector(".dragging");o.appendChild(d)}}))}))}))}()})();