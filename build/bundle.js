var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(o)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function a(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o,r,l,c){const i=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,l);if(i){const r=u(n,e,o,c);t.p(r,i)}}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function p(t){return null==t?"":t}const m="undefined"!=typeof window;let $=m?()=>window.performance.now():()=>Date.now(),h=m?t=>requestAnimationFrame(t):t;const y=new Set;function g(t){y.forEach((n=>{n.c(t)||(y.delete(n),n.f())})),0!==y.size&&h(g)}function v(t,n){t.appendChild(n)}function w(t,n,e){t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function C(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function O(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function k(){return _(" ")}function E(){return _("")}function z(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function L(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function P(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n){t.value=null==n?"":n}function I(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function A(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const F=new Set;let M,S=0;function H(t,n,e,o,r,l,c,i=0){const s=16.666/o;let a="{\n";for(let t=0;t<=1;t+=s){const o=n+(e-n)*l(t);a+=100*t+`%{${c(o,1-o)}}\n`}const u=a+`100% {${c(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${i}`,f=t.ownerDocument;F.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(x("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,S+=1,d}function N(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),S-=r,S||h((()=>{S||(F.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),F.clear())})))}function T(t){M=t}function q(){if(!M)throw new Error("Function called outside component initialization");return M}const R=[],V=[],D=[],G=[],U=Promise.resolve();let J=!1;function Q(t){D.push(t)}let W=!1;const X=new Set;function K(){if(!W){W=!0;do{for(let t=0;t<R.length;t+=1){const n=R[t];T(n),Y(n.$$)}for(T(null),R.length=0;V.length;)V.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];X.has(n)||(X.add(n),n())}D.length=0}while(R.length);for(;G.length;)G.pop()();J=!1,W=!1,X.clear()}}function Y(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}let Z;function tt(t,n,e){t.dispatchEvent(B(`${n?"intro":"outro"}${e}`))}const nt=new Set;let et;function ot(){et={r:0,c:[],p:et}}function rt(){et.r||l(et.c),et=et.p}function lt(t,n){t&&t.i&&(nt.delete(t),t.i(n))}function ct(t,n,e,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((()=>{nt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const it={duration:0};function st(e,o,r,i){let s=o(e,r),a=i?0:1,u=null,d=null,f=null;function p(){f&&N(e,f)}function m(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function v(o){const{delay:r=0,duration:c=300,easing:i=n,tick:v=t,css:w}=s||it,b={start:$()+r,b:o};o||(b.group=et,et.r+=1),u||d?d=b:(w&&(p(),f=H(e,a,o,c,r,i,w)),o&&v(0,1),u=m(b,c),Q((()=>tt(e,o,"start"))),function(t){let n;0===y.size&&h(g),new Promise((e=>{y.add(n={c:t,f:e})}))}((t=>{if(d&&t>d.start&&(u=m(d,c),d=null,tt(e,u.b,"start"),w&&(p(),f=H(e,a,u.b,u.duration,0,i,s.css))),u)if(t>=u.end)v(a=u.b,1-a),tt(e,u.b,"end"),d||(u.b?p():--u.group.r||l(u.group.c)),u=null;else if(t>=u.start){const n=t-u.start;a=u.a+u.d*i(n/u.duration),v(a,1-a)}return!(!u&&!d)})))}return{run(t){c(s)?(Z||(Z=Promise.resolve(),Z.then((()=>{Z=null}))),Z).then((()=>{s=s(),v(t)})):v(t)},end(){p(),u=d=null}}}function at(t){t&&t.c()}function ut(t,n,e,r){const{fragment:i,on_mount:s,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,e),r||Q((()=>{const n=s.map(o).filter(c);a?a.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(Q)}function dt(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(R.push(t),J||(J=!0,U.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function pt(n,e,o,c,i,s,a=[-1]){const u=M;T(n);const d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:e.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let f=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),f&&ft(n,t)),e})):[],d.update(),f=!0,l(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();e.intro&&lt(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),K()}T(u)}class mt{$destroy(){dt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const $t=[];const ht="https://api.binance.com/api/v1/ticker/24hr";let yt,gt=[];const vt=function(n,e=t){let o;const r=[];function l(t){if(i(n,t)&&(n=t,o)){const t=!$t.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),$t.push(e,n)}if(t){for(let t=0;t<$t.length;t+=2)$t[t][0]($t[t+1]);$t.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(c,i=t){const s=[c,i];return r.push(s),1===r.length&&(o=e(l)||t),c(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(gt,(async t=>{yt=await fetch(ht),gt=await yt.json(),t(gt)}));function wt(t){let n,e,o,r;const l=t[4].default,c=a(l,t,t[3],null);return{c(){n=x("span"),c&&c.c(),L(n,"class",e=p(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"),L(n,"style",o=t[2].style||""),A(n,"block",t[1])},m(t,e){w(t,n,e),c&&c.m(n,null),r=!0},p(t,[i]){c&&c.p&&(!r||8&i)&&d(c,l,t,t[3],i,null,null),(!r||5&i&&e!==(e=p(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"))&&L(n,"class",e),(!r||4&i&&o!==(o=t[2].style||""))&&L(n,"style",o),7&i&&A(n,"block",t[1])},i(t){r||(lt(c,t),r=!0)},o(t){ct(c,t),r=!1},d(t){t&&b(n),c&&c.d(t)}}}function bt(t,n,o){let{$$slots:r={},$$scope:l}=n,{type:c="body1"}=n,{block:i=!1}=n;return t.$$set=t=>{o(2,n=e(e({},n),f(t))),"type"in t&&o(0,c=t.type),"block"in t&&o(1,i=t.block),"$$scope"in t&&o(3,l=t.$$scope)},n=f(n),[c,i,n,l,r]}class Ct extends mt{constructor(t){super(),pt(this,t,bt,wt,i,{type:0,block:1})}}function xt(t){const n=t-1;return n*n*n+1}function Ot(t,{delay:e=0,duration:o=400,easing:r=n}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*l}}function _t(t,{delay:n=0,duration:e=400,easing:o=xt,x:r=0,y:l=0,opacity:c=0}={}){const i=getComputedStyle(t),s=+i.opacity,a="none"===i.transform?"":i.transform,u=s*(1-c);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*l}px);\n\t\t\topacity: ${s-u*n}`}}const kt=t=>({}),Et=t=>({}),zt=t=>({}),Lt=t=>({});function Pt(n){let e,o,r,c,i,s,u,f,m,$,h,y,g,C,O,_;const E=[It,jt],P=[];function j(t,n){return t[0]?0:1}c=j(n),i=P[c]=E[c](n),f=new Ct({props:{$$slots:{default:[Bt]},$$scope:{ctx:n}}});const I=n[8].footer,B=a(I,n,n[12],Et),F=B||function(n){let e;return{c(){e=x("div")},m(t,o){w(t,e,o),n[10](e)},p:t,d(t){t&&b(e),n[10](null)}}}(n);return{c(){e=x("div"),o=x("div"),r=x("div"),i.c(),s=k(),u=x("div"),at(f.$$.fragment),m=k(),$=x("div"),F&&F.c(),L(r,"class","svelte-1dhy857"),A(r,"header",n[0]||!Boolean(n[4])),L(u,"class","content svelte-1dhy857"),L($,"class","svelte-1dhy857"),A($,"footer",!Boolean(n[3])),L(o,"class","aa-popup svelte-1dhy857"),L(e,"class",y=p(`overlay ${n[6].class||""}`)+" svelte-1dhy857")},m(t,l){w(t,e,l),v(e,o),v(o,r),P[c].m(r,null),v(o,s),v(o,u),ut(f,u,null),v(o,m),v(o,$),F&&F.m($,null),C=!0,O||(_=[z(o,"click",Mt),z(e,"click",n[5])],O=!0)},p(t,n){let o=c;c=j(t),c===o?P[c].p(t,n):(ot(),ct(P[o],1,1,(()=>{P[o]=null})),rt(),i=P[c],i?i.p(t,n):(i=P[c]=E[c](t),i.c()),lt(i,1),i.m(r,null)),17&n&&A(r,"header",t[0]||!Boolean(t[4]));const l={};4096&n&&(l.$$scope={dirty:n,ctx:t}),f.$set(l),B?B.p&&(!C||4096&n)&&d(B,I,t,t[12],n,kt,Et):F&&F.p&&8&n&&F.p(t,n),8&n&&A($,"footer",!Boolean(t[3])),(!C||64&n&&y!==(y=p(`overlay ${t[6].class||""}`)+" svelte-1dhy857"))&&L(e,"class",y)},i(t){C||(lt(i),lt(f.$$.fragment,t),lt(F,t),t&&Q((()=>{h||(h=st(o,_t,{duration:300,y:-500,opacity:.9},!0)),h.run(1)})),t&&Q((()=>{g||(g=st(e,Ot,{},!0)),g.run(1)})),C=!0)},o(t){ct(i),ct(f.$$.fragment,t),ct(F,t),t&&(h||(h=st(o,_t,{duration:300,y:-500,opacity:.9},!1)),h.run(0)),t&&(g||(g=st(e,Ot,{},!1)),g.run(0)),C=!1},d(t){t&&b(e),P[c].d(),dt(f),F&&F.d(t),t&&h&&h.end(),t&&g&&g.end(),O=!1,l(_)}}}function jt(n){let e;const o=n[8].header,r=a(o,n,n[12],Lt),l=r||function(n){let e;return{c(){e=x("div")},m(t,o){w(t,e,o),n[9](e)},p:t,d(t){t&&b(e),n[9](null)}}}(n);return{c(){l&&l.c()},m(t,n){l&&l.m(t,n),e=!0},p(t,n){r?r.p&&(!e||4096&n)&&d(r,o,t,t[12],n,zt,Lt):l&&l.p&&16&n&&l.p(t,n)},i(t){e||(lt(l,t),e=!0)},o(t){ct(l,t),e=!1},d(t){l&&l.d(t)}}}function It(t){let n,e;return n=new Ct({props:{type:"headline",$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){at(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,e){const o={};4097&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(lt(n.$$.fragment,t),e=!0)},o(t){ct(n.$$.fragment,t),e=!1},d(t){dt(n,t)}}}function At(t){let n;return{c(){n=_(t[0])},m(t,e){w(t,n,e)},p(t,e){1&e&&P(n,t[0])},d(t){t&&b(n)}}}function Bt(t){let n;const e=t[8].default,o=a(e,t,t[12],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||4096&r)&&d(o,e,t,t[12],r,null,null)},i(t){n||(lt(o,t),n=!0)},o(t){ct(o,t),n=!1},d(t){o&&o.d(t)}}}function Ft(t){let n,e,o,r=t[1]&&Pt(t);return{c(){n=x("div"),e=x("div"),r&&r.c()},m(l,c){w(l,n,c),v(n,e),r&&r.m(e,null),t[11](e),o=!0},p(t,[n]){t[1]?r?(r.p(t,n),2&n&&lt(r,1)):(r=Pt(t),r.c(),lt(r,1),r.m(e,null)):r&&(ot(),ct(r,1,1,(()=>{r=null})),rt())},i(t){o||(lt(r),o=!0)},o(t){ct(r),o=!1},d(e){e&&b(n),r&&r.d(),t[11](null)}}}const Mt=t=>t.stopPropagation();function St(t,n,o){let r,{$$slots:l={},$$scope:c}=n,{header:i=""}=n,{isOpen:s=!1}=n,a=null,u=null,d="";const p=function(){const t=q();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=B(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}(),m=()=>{p("close","")},$=t=>{27===t.keyCode&&m()};var h;return h=()=>(window.addEventListener("keydown",$),document.body.appendChild(r),()=>{window.removeEventListener("keydown",$),document.body.removeChild(r)}),q().$$.on_mount.push(h),t.$$set=t=>{o(6,n=e(e({},n),f(t))),"header"in t&&o(0,i=t.header),"isOpen"in t&&o(1,s=t.isOpen),"$$scope"in t&&o(12,c=t.$$scope)},t.$$.update=()=>{130&t.$$.dirty&&"undefined"!=typeof window&&(s?(o(7,d=document.body.style.overflow),document.body.style.overflow="hidden"):document.body.style.overflow=d)},n=f(n),[i,s,r,a,u,m,n,d,l,function(t){V[t?"unshift":"push"]((()=>{u=t,o(4,u)}))},function(t){V[t?"unshift":"push"]((()=>{a=t,o(3,a)}))},function(t){V[t?"unshift":"push"]((()=>{r=t,o(2,r)}))},c]}class Ht extends mt{constructor(t){super(),pt(this,t,St,Ft,i,{header:0,isOpen:1})}}function Nt(t,n,e){const o=t.slice();return o[6]=n[e][0],o[8]=e,o}function Tt(t){let n,e,o,r,l,c,i,s,a,u=t[4][t[8]]+"",d=t[1][t[6]]+"",f=(t[8]+1)%2==0&&function(t){let n;return{c(){n=x("tr")},m(t,e){w(t,n,e)},d(t){t&&b(n)}}}();return{c(){n=x("td"),e=x("div"),o=_(u),r=_(":"),l=k(),c=x("div"),i=_(d),s=k(),f&&f.c(),a=E(),L(c,"class","popUpValue")},m(t,u){w(t,n,u),v(n,e),v(e,o),v(e,r),v(n,l),v(n,c),v(c,i),w(t,s,u),f&&f.m(t,u),w(t,a,u)},p(t,n){2&n&&d!==(d=t[1][t[6]]+"")&&P(i,d)},d(t){t&&b(n),t&&b(s),f&&f.d(t),t&&b(a)}}}function qt(t){let n,e=!t[3].includes(t[6]),o=e&&Tt(t);return{c(){o&&o.c(),n=E()},m(t,e){o&&o.m(t,e),w(t,n,e)},p(t,r){2&r&&(e=!t[3].includes(t[6])),e?o?o.p(t,r):(o=Tt(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&b(n)}}}function Rt(t){let n,e,o,r,l,c,i=Object.entries(t[1]),s=[];for(let n=0;n<i.length;n+=1)s[n]=qt(Nt(t,i,n));return{c(){n=x("span"),n.textContent="X",e=k(),o=x("table"),r=x("tbody");for(let t=0;t<s.length;t+=1)s[t].c();L(n,"class","closePopup"),L(o,"class","popupTable")},m(i,a){w(i,n,a),w(i,e,a),w(i,o,a),v(o,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null);l||(c=z(n,"click",t[2]),l=!0)},p(t,n){if(26&n){let e;for(i=Object.entries(t[1]),e=0;e<i.length;e+=1){const o=Nt(t,i,e);s[e]?s[e].p(o,n):(s[e]=qt(o),s[e].c(),s[e].m(r,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=i.length}},d(t){t&&b(n),t&&b(e),t&&b(o),C(s,t),l=!1,c()}}}function Vt(t){let n,e;return n=new Ht({props:{isOpen:t[0],$$slots:{default:[Rt]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){at(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.isOpen=t[0]),514&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(lt(n.$$.fragment,t),e=!0)},o(t){ct(n.$$.fragment,t),e=!1},d(t){dt(n,t)}}}function Dt(t,n,e){let{isOpen:o=!1}=n,{moneda:r=[]}=n;return t.$$set=t=>{"isOpen"in t&&e(0,o=t.isOpen),"moneda"in t&&e(1,r=t.moneda)},[o,r,()=>e(0,o=!1),["openTime","closeTime","firstId","lastId","count"],["Symbol","Price Change","Price change %","Weighted avg","Previous close","Last price","Last quantity","Bid price","Bid quantity","Ask Price","Ask quantity","Open price","High price","Low price","Volume","Quote volume"],function(){e(0,o=!0)}]}class Gt extends mt{constructor(t){super(),pt(this,t,Dt,Vt,i,{isOpen:0,moneda:1,open:5})}get open(){return this.$$.ctx[5]}}function Ut(n){let e;return{c(){e=x("div"),L(e,"class","circle svelte-1vclic6"),I(e,"--size",n[0]+n[1]),I(e,"--colorInner",n[4]),I(e,"--colorCenter",n[3]),I(e,"--colorOuter",n[2]),I(e,"--durationInner",n[6]),I(e,"--durationCenter",n[7]),I(e,"--durationOuter",n[5])},m(t,n){w(t,e,n)},p(t,[n]){3&n&&I(e,"--size",t[0]+t[1]),16&n&&I(e,"--colorInner",t[4]),8&n&&I(e,"--colorCenter",t[3]),4&n&&I(e,"--colorOuter",t[2]),64&n&&I(e,"--durationInner",t[6]),128&n&&I(e,"--durationCenter",t[7]),32&n&&I(e,"--durationOuter",t[5])},i:t,o:t,d(t){t&&b(e)}}}function Jt(t,n,e){let{size:o="60"}=n,{unit:r="px"}=n,{colorOuter:l="#FF3E00"}=n,{colorCenter:c="#40B3FF"}=n,{colorInner:i="#676778"}=n,{durationMultiplier:s=1}=n,{durationOuter:a=2*s+"s"}=n,{durationInner:u=1.5*s+"s"}=n,{durationCenter:d=3*s+"s"}=n;return t.$$set=t=>{"size"in t&&e(0,o=t.size),"unit"in t&&e(1,r=t.unit),"colorOuter"in t&&e(2,l=t.colorOuter),"colorCenter"in t&&e(3,c=t.colorCenter),"colorInner"in t&&e(4,i=t.colorInner),"durationMultiplier"in t&&e(8,s=t.durationMultiplier),"durationOuter"in t&&e(5,a=t.durationOuter),"durationInner"in t&&e(6,u=t.durationInner),"durationCenter"in t&&e(7,d=t.durationCenter)},[o,r,l,c,i,a,u,d,s]}class Qt extends mt{constructor(t){super(),pt(this,t,Jt,Ut,i,{size:0,unit:1,colorOuter:2,colorCenter:3,colorInner:4,durationMultiplier:8,durationOuter:5,durationInner:6,durationCenter:7})}}function Wt(t,n,e){const o=t.slice();return o[6]=n[e],o}function Xt(n){let e,o,r,l,c,i,s,a,u;return i=new Qt({props:{size:"100",unit:"px"}}),{c(){e=x("tr"),o=x("td"),r=k(),l=x("div"),c=x("div"),at(i.$$.fragment),s=k(),a=x("td"),L(c,"class","loadingLoad"),L(l,"class","loading")},m(t,n){w(t,e,n),v(e,o),v(e,r),v(e,l),v(l,c),ut(i,c,null),v(e,s),v(e,a),u=!0},p:t,i(t){u||(lt(i.$$.fragment,t),u=!0)},o(t){ct(i.$$.fragment,t),u=!1},d(t){t&&b(e),dt(i)}}}function Kt(t){let n,e,o,r,l,i,s,a,u,d,f,p,m,$=t[6][t[4][0]]+"",h=parseFloat(t[6][t[4][1]]).toFixed(2)+"",y=t[6][t[4][2]]+"";return{c(){n=x("tr"),e=x("td"),o=_($),r=k(),l=x("td"),i=_(h),a=k(),u=x("td"),d=_(y),L(e,"class","nomCella"),L(l,"class",s=t[6][t[4][1]]>=Zt?"major":"menor"),L(u,"class","percentatgeCella"),L(n,"class",f=t[6][t[4][1]]>=Zt?"majorHover":"menorHover")},m(s,f){var $;w(s,n,f),v(n,e),v(e,o),v(n,r),v(n,l),v(l,i),v(n,a),v(n,u),v(u,d),p||(m=z(n,"click",($=function(){c(t[0](t[6]))&&t[0](t[6]).apply(this,arguments)},function(t){return t.preventDefault(),$.call(this,t)})),p=!0)},p(e,r){t=e,8&r&&$!==($=t[6][t[4][0]]+"")&&P(o,$),8&r&&h!==(h=parseFloat(t[6][t[4][1]]).toFixed(2)+"")&&P(i,h),8&r&&s!==(s=t[6][t[4][1]]>=Zt?"major":"menor")&&L(l,"class",s),8&r&&y!==(y=t[6][t[4][2]]+"")&&P(d,y),8&r&&f!==(f=t[6][t[4][1]]>=Zt?"majorHover":"menorHover")&&L(n,"class",f)},d(t){t&&b(n),p=!1,m()}}}function Yt(t){let n,e,o,r,l,c,i,s,a,u=t[3],d=[];for(let n=0;n<u.length;n+=1)d[n]=Kt(Wt(t,u,n));let f=null;u.length||(f=Xt());var p=Gt;function m(t){return{props:{moneda:t[2]}}}return p&&(s=new p(m(t)),t[5](s)),{c(){n=x("table"),e=x("tbody"),o=x("td"),r=k();for(let t=0;t<d.length;t+=1)d[t].c();f&&f.c(),l=k(),c=x("td"),i=k(),s&&at(s.$$.fragment),L(o,"class","nomCella"),L(n,"class","taulaPrincipal")},m(t,u){w(t,n,u),v(n,e),v(e,o),v(e,r);for(let t=0;t<d.length;t+=1)d[t].m(e,null);f&&f.m(e,null),v(e,l),v(e,c),v(n,i),s&&ut(s,n,null),a=!0},p(t,[o]){if(25&o){let n;for(u=t[3],n=0;n<u.length;n+=1){const r=Wt(t,u,n);d[n]?d[n].p(r,o):(d[n]=Kt(r),d[n].c(),d[n].m(e,l))}for(;n<d.length;n+=1)d[n].d(1);d.length=u.length,!u.length&&f?f.p(t,o):u.length?f&&(ot(),ct(f,1,1,(()=>{f=null})),rt()):(f=Xt(),f.c(),lt(f,1),f.m(e,l))}const r={};if(4&o&&(r.moneda=t[2]),p!==(p=Gt)){if(s){ot();const t=s;ct(t.$$.fragment,1,0,(()=>{dt(t,1)})),rt()}p?(s=new p(m(t)),t[5](s),at(s.$$.fragment),lt(s.$$.fragment,1),ut(s,n,null)):s=null}else p&&s.$set(r)},i(t){a||(s&&lt(s.$$.fragment,t),a=!0)},o(t){s&&ct(s.$$.fragment,t),a=!1},d(e){e&&b(n),C(d,e),f&&f.d(),t[5](null),s&&dt(s)}}}const Zt=0;function tn(t,n,e){let o;s(t,vt,(t=>e(3,o=t)));let r,l,c=[];return r=function(t){e(2,c=t),l.open()},[r,l,c,o,["symbol","priceChangePercent","lastPrice"],function(t){V[t?"unshift":"push"]((()=>{l=t,e(1,l)}))}]}class nn extends mt{constructor(t){super(),pt(this,t,tn,Yt,i,{})}}function en(t){let n,e,o,r;function l(t,n){return"string"==typeof t[8][4]?rn:on}let c=l(t),i=c(t);return{c(){n=O("svg"),e=O("g"),o=O("g"),i.c(),L(o,"transform",t[10]),L(e,"transform","translate(256 256)"),L(n,"id",t[1]),L(n,"class",t[0]),L(n,"style",t[9]),L(n,"viewBox",r=`0 0 ${t[8][0]} ${t[8][1]}`),L(n,"aria-hidden","true"),L(n,"role","img"),L(n,"xmlns","http://www.w3.org/2000/svg")},m(t,r){w(t,n,r),v(n,e),v(e,o),i.m(o,null)},p(t,e){c===(c=l(t))&&i?i.p(t,e):(i.d(1),i=c(t),i&&(i.c(),i.m(o,null))),1024&e&&L(o,"transform",t[10]),2&e&&L(n,"id",t[1]),1&e&&L(n,"class",t[0]),512&e&&L(n,"style",t[9]),256&e&&r!==(r=`0 0 ${t[8][0]} ${t[8][1]}`)&&L(n,"viewBox",r)},d(t){t&&b(n),i.d()}}}function on(t){let n,e,o,r,l,c,i,s;return{c(){n=O("path"),l=O("path"),L(n,"d",e=t[8][4][0]),L(n,"fill",o=t[4]||t[2]||"currentColor"),L(n,"fill-opacity",r=0!=t[7]?t[5]:t[6]),L(n,"transform","translate(-256 -256)"),L(l,"d",c=t[8][4][1]),L(l,"fill",i=t[3]||t[2]||"currentColor"),L(l,"fill-opacity",s=0!=t[7]?t[6]:t[5]),L(l,"transform","translate(-256 -256)")},m(t,e){w(t,n,e),w(t,l,e)},p(t,a){256&a&&e!==(e=t[8][4][0])&&L(n,"d",e),20&a&&o!==(o=t[4]||t[2]||"currentColor")&&L(n,"fill",o),224&a&&r!==(r=0!=t[7]?t[5]:t[6])&&L(n,"fill-opacity",r),256&a&&c!==(c=t[8][4][1])&&L(l,"d",c),12&a&&i!==(i=t[3]||t[2]||"currentColor")&&L(l,"fill",i),224&a&&s!==(s=0!=t[7]?t[6]:t[5])&&L(l,"fill-opacity",s)},d(t){t&&b(n),t&&b(l)}}}function rn(t){let n,e,o;return{c(){n=O("path"),L(n,"d",e=t[8][4]),L(n,"fill",o=t[2]||t[3]||"currentColor"),L(n,"transform","translate(-256 -256)")},m(t,e){w(t,n,e)},p(t,r){256&r&&e!==(e=t[8][4])&&L(n,"d",e),12&r&&o!==(o=t[2]||t[3]||"currentColor")&&L(n,"fill",o)},d(t){t&&b(n)}}}function ln(n){let e,o=n[8][4]&&en(n);return{c(){o&&o.c(),e=E()},m(t,n){o&&o.m(t,n),w(t,e,n)},p(t,[n]){t[8][4]?o?o.p(t,n):(o=en(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&b(e)}}}function cn(t,n,e){let o,r,l,{class:c=""}=n,{id:i=""}=n,{style:s=""}=n,{icon:a}=n,{fw:u=!1}=n,{flip:d=!1}=n,{pull:f=!1}=n,{rotate:p=!1}=n,{size:m=!1}=n,{color:$=""}=n,{primaryColor:h=""}=n,{secondaryColor:y=""}=n,{primaryOpacity:g=1}=n,{secondaryOpacity:v=.4}=n,{swapOpacity:w=!1}=n;return t.$$set=t=>{"class"in t&&e(0,c=t.class),"id"in t&&e(1,i=t.id),"style"in t&&e(11,s=t.style),"icon"in t&&e(12,a=t.icon),"fw"in t&&e(13,u=t.fw),"flip"in t&&e(14,d=t.flip),"pull"in t&&e(15,f=t.pull),"rotate"in t&&e(16,p=t.rotate),"size"in t&&e(17,m=t.size),"color"in t&&e(2,$=t.color),"primaryColor"in t&&e(3,h=t.primaryColor),"secondaryColor"in t&&e(4,y=t.secondaryColor),"primaryOpacity"in t&&e(5,g=t.primaryOpacity),"secondaryOpacity"in t&&e(6,v=t.secondaryOpacity),"swapOpacity"in t&&e(7,w=t.swapOpacity)},t.$$.update=()=>{if(4096&t.$$.dirty&&e(8,o=a&&a.icon||[0,0,"",[],""]),174080&t.$$.dirty){let t,n;const o="1em";let l,c,i,a="-.125em";const d="visible";u&&(i="center",n="1.25em"),f&&(t=f),m&&("lg"==m?(c="1.33333em",l=".75em",a="-.225em"):c="xs"==m?".75em":"sm"==m?".875em":m.replace("x","em"));const p={float:t,width:n,height:o,"line-height":l,"font-size":c,"text-align":i,"vertical-align":a,overflow:d};let $="";for(const t in p)p[t]&&($+=`${t}:${p[t]};`);e(9,r=$+s)}if(81920&t.$$.dirty){let t="";if(d){let n=1,e=1;"horizontal"==d?n=-1:"vertical"==d?e=-1:n=e=-1,t+=` scale(${n} ${e})`}p&&(t+=` rotate(${p} 0 0)`),e(10,l=t)}},[c,i,$,h,y,g,v,w,o,r,l,s,a,u,d,f,p,m]}class sn extends mt{constructor(t){super(),pt(this,t,cn,ln,i,{class:0,id:1,style:11,icon:12,fw:13,flip:14,pull:15,rotate:16,size:17,color:2,primaryColor:3,secondaryColor:4,primaryOpacity:5,secondaryOpacity:6,swapOpacity:7})}}
/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var an={prefix:"fas",iconName:"sync",icon:[512,512,[],"f021","M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"]};const un=["symbol","lastPrice","priceChangePercent"];function dn(t,n,e){return n==un[0]?e?t.sort(((t,n)=>t[un[0]].toLowerCase().localeCompare(n[un[0]].toLowerCase()))):t.sort(((t,n)=>n[un[0]].toLowerCase().localeCompare(t[un[0]].toLowerCase()))):n==un[1]?e?t.sort(((t,n)=>t[un[1]]-n[un[1]])):t.sort(((t,n)=>n[un[1]]-t[un[1]])):n==un[2]&&(e?t.sort(((t,n)=>t[un[2]]-n[un[2]])):t.sort(((t,n)=>n[un[2]]-t[un[2]]))),t}function fn(t){let n,e,o,r,c,i,s,a,u,d,f,p,m,$,h,y,g,C,O,E,I,A;return s=new sn({props:{icon:an}}),{c(){n=x("div"),e=x("div"),o=_(t[0]),r=k(),c=x("div"),i=x("button"),at(s.$$.fragment),a=k(),u=x("input"),d=k(),f=x("div"),p=x("div"),m=x("span"),m.textContent=`${t[3][0]}`,$=k(),h=x("div"),y=x("span"),y.textContent=`${t[3][1]}`,g=k(),C=x("div"),O=x("span"),O.textContent=`${t[3][2]}`,L(e,"class","title"),L(u,"class","cercador"),L(u,"placeholder","Search..."),L(c,"class","cercar"),L(p,"class","nom"),L(h,"class","percentatge"),L(C,"class","preu"),L(f,"class","capcalera"),L(n,"class","container")},m(l,b){w(l,n,b),v(n,e),v(e,o),v(n,r),v(n,c),v(c,i),ut(s,i,null),v(c,a),v(c,u),j(u,t[2]),v(n,d),v(n,f),v(f,p),v(p,m),v(f,$),v(f,h),v(h,y),v(f,g),v(f,C),v(C,O),E=!0,I||(A=[z(i,"click",t[5]),z(u,"keyup",t[7]),z(u,"input",t[8]),z(p,"click",t[9]),z(h,"click",t[10]),z(C,"click",t[11])],I=!0)},p(t,[n]){(!E||1&n)&&P(o,t[0]),4&n&&u.value!==t[2]&&j(u,t[2])},i(t){E||(lt(s.$$.fragment,t),E=!0)},o(t){ct(s.$$.fragment,t),E=!1},d(t){t&&b(n),dt(s),I=!1,l(A)}}}function pn(t,n,e){let o;s(t,vt,(t=>e(17,o=t)));let r,l,c,i,a,{name:u}=n;const d=["symbol","priceChangePercent","lastPrice"];let f=!0;async function p(t){clearTimeout(c),c=setTimeout((()=>{vt.update((()=>gt.filter((n=>n.symbol.includes(t.toUpperCase())))))}),750)}function m(t){f?(vt.set(dn(Object.values(o),t,f)),f=!1):(vt.set(dn(Object.values(o),t,f)),f=!0)}return t.$$set=t=>{"name"in t&&e(0,u=t.name)},[u,p,i,["Nom","24h %","Last price"],d,async function(){r=await fetch(ht),l=await r.json(),""==i?vt.set(l):(vt.update((t=>(t.forEach((t=>{l.forEach((n=>{if(t.symbol==n.symbol)for(var e in t)t[e]=n[e]}))})),a=t,t))),vt.set(a))},m,({target:{value:t}})=>p(t),function(){i=this.value,e(2,i)},()=>m(d[0]),()=>m(d[1]),()=>m(d[2])]}class mn extends mt{constructor(t){super(),pt(this,t,pn,fn,i,{name:0,cercar:1})}get cercar(){return this.$$.ctx[1]}}function $n(n){let e;return{c(){e=x("footer"),e.innerHTML='<div><a href="https://www.twitter.com/realGoloSEO">Coin stats 〄 Jordi Gómez Lozano - ⅩⅩⅠ</a></div>'},m(t,n){w(t,e,n)},p:t,i:t,o:t,d(t){t&&b(e)}}}class hn extends mt{constructor(t){super(),pt(this,t,null,$n,i,{})}}function yn(n){let e,o,r,l,c,i,s;return o=new mn({props:{name:gn}}),l=new nn({}),i=new hn({}),{c(){e=x("main"),at(o.$$.fragment),r=k(),at(l.$$.fragment),c=k(),at(i.$$.fragment),L(e,"class","svelte-1hdcqpp")},m(t,n){w(t,e,n),ut(o,e,null),v(e,r),ut(l,e,null),v(e,c),ut(i,e,null),s=!0},p:t,i(t){s||(lt(o.$$.fragment,t),lt(l.$$.fragment,t),lt(i.$$.fragment,t),s=!0)},o(t){ct(o.$$.fragment,t),ct(l.$$.fragment,t),ct(i.$$.fragment,t),s=!1},d(t){t&&b(e),dt(o),dt(l),dt(i)}}}let gn="Coin stats";return new class extends mt{constructor(t){super(),pt(this,t,null,yn,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
