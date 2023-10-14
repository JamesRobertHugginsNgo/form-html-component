(()=>{"use strict";var e={77:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(81),o=i.n(n),r=i(645),a=i.n(r)()(o());a.push([e.id,".form{margin:1rem 0}.form .form-title{font-weight:500;margin:1rem 0}.section{border:1px solid #ccc;border-radius:.25rem;margin-bottom:1rem;overflow:hidden}.section .section-title{background-color:#eee;border-bottom:1px solid #ccc;color:#000;font-size:1rem;font-weight:500;margin:0;padding:.5rem .75rem}.section .section-body{padding:0 .75rem 1rem .75rem}.text{margin:1rem 0}.text label{display:block;margin-bottom:.25rem}.text input{background-color:rgba(0,0,0,0);border:1px solid #ddd;border-radius:.25rem;font-size:1rem;padding:.25rem .75rem}body{font-family:-apple-system,BlinkMacSystemFont,sans-serif}.container{margin:0 auto;max-width:960px}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),i&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=i):u[2]=i),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var r={},a=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var m=i(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,o){var r=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=i(r[a]);t[s].references--}for(var l=n(e,o),c=0;c<r.length;c++){var u=i(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,o&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0,(()=>{const e={};function t(t,i){e[t]=i}var n=i(379),o=i.n(n),r=i(795),a=i.n(r),s=i(569),l=i.n(s),c=i(565),u=i.n(c),d=i(216),m=i.n(d),p=i(589),f=i.n(p),h=i(77),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b={};function v(e=""){return b[e]||(b[e]=0),`${e}${b[e]++}`}const y={build:({id:e=v("section-"),title:t,fields:i=[]}={})=>({htmlStringDefinition:{name:"div",attributes:{class:"section",id:e},children:[t?{name:"h2",attributes:{class:"section-title",id:`${e}-heading`},children:[t]}:null,{name:"div",attributes:{class:"section-body"},children:[i]}]},initializer:{id:e}}),initialize(){}},x={build:({id:e=v("text-"),title:t}={})=>({htmlStringDefinition:{name:"div",attributes:{class:"text",id:`${e}-field`},children:[{name:"label",attributes:{for:e},children:[t||"Untitled"]},{name:"input",attributes:{id:e,name:e,type:"text"}}]},initializer:{id:e}}),initialize(){}};t("form",{build:({id:e=v("form-"),title:t,sections:i=[]}={})=>({htmlStringDefinition:{name:"form",attributes:{class:"form",id:e},children:[t?{name:"h1",attributes:{class:"form-title",id:`${e}-heading`},children:[t]}:null,i,{name:"div",children:[{name:"button",attributes:{type:"submit"},children:["Submit"]}]}]},initializer:{id:e}}),initialize(){}}),t("section",y),t("text",x);const S={name:"div",attributes:{class:"container"},children:{type:"form",title:"Form Title",sections:[{name:"p",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]},{type:"section",title:"Section Title",fields:[{type:"text",title:"Text Label"},{type:"text",title:"Text Label"},{type:"text",title:"Text Label"}]},{type:"section",title:"Section Title",fields:[{name:"p",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}]}]}};console.group("COMPONENT DEFINITION"),console.log(S),console.log(),console.groupEnd();const{htmlStringDefinition:T,initializers:I}=function t(i={}){if(Array.isArray(i)){const e=[],n=[],o=i.length;for(let r=0;r<o;r++){const{htmlStringDefinition:o,initializers:a}=t(i[r]);e.push(o),n.push(...a)}return{htmlStringDefinition:e,initializers:n}}if(i&&"object"==typeof i){const{type:n}=i;if(n){const{htmlStringDefinition:o,initializer:r={}}=e[n].build(i);Object.assign(i,r);const{htmlStringDefinition:a,initializers:s}=t(o);return{htmlStringDefinition:a,initializers:[...s,i]}}const{children:o}=i;if(o){const{htmlStringDefinition:e,initializers:n}=t(o);return{htmlStringDefinition:{...i,children:e},initializers:n}}}return{htmlStringDefinition:i,initializers:[]}}(S);console.group("HTML DEFINITION"),console.log(T),console.log(),console.groupEnd();const E=function e(t={}){if(Array.isArray(t)){const i=[],n=t.length;for(let o=0;o<n;o++){const n=e(t[o]);null!=n&&i.push(n)}return i.join("")}if(t&&"object"==typeof t){const{name:i="div",attributes:n,children:o}=t,r=["<"],a=[i];if(n)for(const e in n){const t=n[e];null!=t&&(""!==t?a.push(`${e}="${t}"`):a.push(e))}return r.push(a.join(" ")),r.push(">"),null!=o&&r.push(e(o)),(o||"div"===i)&&r.push("</",i,">"),r.join("")}return String(t)}(T);document.body.innerHTML=E,console.group("HTML STRING"),console.log(E),console.log(),console.groupEnd(),console.group("INITIALIZERS"),console.log(I),console.log(),console.groupEnd();const z={};console.group("INITIALIZE"),function(t=[],i={}){let n;const o=t.length;for(let r=0;r<o;r++){const o=t[r],{type:a}=o,s=e[a].initialize(o,i);s instanceof Promise&&!n&&(n=Promise.resolve()),n&&(n=n.then((()=>s)))}}(I,z),console.log(),console.groupEnd(),console.group("STATE"),console.log(z),console.log(),console.groupEnd()})()})();