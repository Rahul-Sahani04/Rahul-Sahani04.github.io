(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{3632:function(e,t,r){Promise.resolve().then(r.bind(r,6369)),Promise.resolve().then(r.t.bind(r,1031,23)),Promise.resolve().then(r.bind(r,4899)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.t.bind(r,4080,23))},6369:function(e,t,r){"use strict";r.d(t,{Header:function(){return d}});var n=r(7437),i=r(8030);/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i.Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),l=(0,i.Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),o=(0,i.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);var s=r(5137),c=r(7138),u=r(2265);let d=e=>{let{project:t,views:r}=e,i=(0,u.useRef)(null),[d,f]=(0,u.useState)(!0),h=[];return t.repository&&h.push({label:"GitHub",href:"https://github.com/".concat(t.repository)}),t.url&&h.push({label:"Website",href:t.url}),(0,u.useEffect)(()=>{if(!i.current)return;let e=new IntersectionObserver(e=>{let[t]=e;return f(t.isIntersecting)});return e.observe(i.current),()=>e.disconnect()},[]),(0,n.jsxs)("header",{ref:i,className:"relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black",children:[(0,n.jsx)("div",{className:"fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ".concat(d?"bg-zinc-900/0 border-transparent":"bg-white/10  border-zinc-200 lg:border-transparent"),children:(0,n.jsxs)("div",{className:"container flex flex-row-reverse items-center justify-between p-6 mx-auto",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-8",children:[(0,n.jsxs)("span",{title:"View counter for this page",className:"duration-200 hover:font-medium flex items-center gap-1 ".concat(d?" text-zinc-400 hover:text-zinc-100":"text-zinc-600 hover:text-zinc-900"," "),children:[(0,n.jsx)(a,{className:"w-5 h-5"})," ",Intl.NumberFormat("en-US",{notation:"compact"}).format(r)]}),(0,n.jsx)(c.default,{target:"_blank",href:"https://twitter.com/PoetOfHerAlgos",children:(0,n.jsx)(l,{className:"w-6 h-6 duration-200 hover:font-medium ".concat(d?" text-zinc-400 hover:text-zinc-100":"text-zinc-600 hover:text-zinc-900"," ")})}),(0,n.jsx)(c.default,{target:"_blank",href:"https://github.com/rahul-sahani04",children:(0,n.jsx)(o,{className:"w-6 h-6 duration-200 hover:font-medium ".concat(d?" text-zinc-400 hover:text-zinc-100":"text-zinc-600 hover:text-zinc-900"," ")})})]}),(0,n.jsx)(c.default,{href:"/projects",className:"duration-200 hover:font-medium ".concat(d?" text-zinc-400 hover:text-zinc-100":"text-zinc-600 hover:text-zinc-900"," "),children:(0,n.jsx)(s.Z,{className:"w-6 h-6 "})})]})}),(0,n.jsx)("div",{className:"container mx-auto relative isolate overflow-hidden  py-24 sm:py-32",children:(0,n.jsxs)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center",children:[(0,n.jsxs)("div",{className:"mx-auto max-w-2xl lg:mx-0",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold tracking-tight text-white sm:text-6xl font-display",children:t.title}),(0,n.jsx)("p",{className:"mt-6 text-lg leading-8 text-zinc-300",children:t.description})]}),(0,n.jsx)("div",{className:"mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none",children:(0,n.jsx)("div",{className:"grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10",children:h.map(e=>(0,n.jsxs)(c.default,{target:"_blank",href:e.href,children:[e.label," ",(0,n.jsx)("span",{"aria-hidden":"true",children:"→"})]},e.label))})})]})})]})}},4899:function(e,t,r){"use strict";r.d(t,{ReportView:function(){return i}});var n=r(2265);let i=e=>{let{slug:t}=e;return(0,n.useEffect)(()=>{fetch("/api/incr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t})})},[t]),null}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265);/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:u,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...l,width:i,height:i,stroke:r,strokeWidth:s?24*Number(o)/Number(i):o,className:a("lucide",c),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,l)=>{let{className:s,...c}=r;return(0,n.createElement)(o,{ref:l,iconNode:t,className:a("lucide-".concat(i(e)),s),...c})});return r.displayName="".concat(e),r}},5137:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},905:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return l},isEqualNode:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function i(e){let{type:t,props:r}=e,i=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let a=n[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?i[a]=!!r[e]:i.setAttribute(a,r[e])}let{children:a,dangerouslySetInnerHTML:l}=r;return l?i.innerHTML=l.__html||"":a&&(i.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),i}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,i="";if(n){let{children:e}=n.props;i="string"==typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),l=Number(n.content),o=[];for(let t=0,r=n.previousElementSibling;t<l;t++,r=(null==r?void 0:r.previousElementSibling)||null){var s;(null==r?void 0:null==(s=r.tagName)?void 0:s.toLowerCase())===e&&o.push(r)}let c=t.map(i).filter(e=>{for(let t=0,r=o.length;t<r;t++)if(a(o[t],e))return o.splice(t,1),!1;return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>r.insertBefore(e,n)),n.content=(l-o.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return x},initScriptLoader:function(){return y}});let n=r(7657),i=r(9803),a=r(7437),l=n._(r(4887)),o=i._(r(2265)),s=r(6590),c=r(905),u=r(9189),d=new Map,f=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},m=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:i=null,dangerouslySetInnerHTML:a,children:l="",strategy:o="afterInteractive",onError:s,stylesheets:u}=e,m=r||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(n,s);return}let x=()=>{i&&i(),f.add(m)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),n&&n.call(this,t),x()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[r,n]of(a?(y.innerHTML=a.__html||"",x()):l?(y.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",x()):t&&(y.src=t,d.set(t,b)),Object.entries(e))){if(void 0===n||h.includes(r))continue;let e=c.DOMAttributeNames[r]||r.toLowerCase();y.setAttribute(e,n)}"worker"===o&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",o),u&&p(u),document.body.appendChild(y)};function x(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}):m(e)}function y(e){e.forEach(x),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:i=null,strategy:c="afterInteractive",onError:d,stylesheets:h,...p}=e,{updateScripts:x,scripts:y,getIsSsr:b,appDir:v,nonce:g}=(0,o.useContext)(s.HeadManagerContext),w=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||r;w.current||(i&&e&&f.has(e)&&i(),w.current=!0)},[i,t,r]);let _=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!_.current&&("afterInteractive"===c?m(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))})),_.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(x?(y[c]=(y[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:i,onError:d,...p}]),x(y)):b&&b()?f.add(t||r):b&&!b()&&m(e)),v){if(h&&h.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(l.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:g}:{as:"script",nonce:g}),(0,a.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===c&&r&&l.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:g}:{as:"script",nonce:g})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1031:function(){}},function(e){e.O(0,[530,138,173,971,23,744],function(){return e(e.s=3632)}),_N_E=e.O()}]);