(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676,8,409,964,832,659,56,151,833],{56909:function(e,t,n){Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.bind(n,77275))},66648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var l=n(55601),r=n.n(l)},50551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(99920);n(57437),n(2265);let r=l._(n(40148));function o(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let o={...l,...t};return(0,r.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},55601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return i}});let l=n(99920),r=n(80497),o=n(38173),a=l._(n(21241));function i(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=o.Image},10912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(55592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},40148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=n(57437),r=n(2265),o=n(10912),a=n(61481);function i(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},u=function(e){let t={...s,...e},n=(0,r.lazy)(()=>t.loader().then(i)),u=t.loading;function d(e){let i=u?(0,l.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,s=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(r.Suspense,{fallback:i,children:s})}return d.displayName="LoadableComponent",d}},61481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let l=n(57437),r=n(58512);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},77275:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var l=n(57437),r=n(50551),o=n.n(r),a=n(66648),i=n(2265);let s=o()(()=>Promise.all([n.e(374),n.e(762)]).then(n.bind(n,74762)),{loadableGenerated:{webpack:()=>[74762]},loading:()=>(0,l.jsx)("h1",{children:"Loading..."})}),u=o()(()=>Promise.all([n.e(374),n.e(405)]).then(n.bind(n,82047)),{loadableGenerated:{webpack:()=>[82047]},loading:()=>(0,l.jsx)("h1",{children:"Loading..."})}),d={teacher:(e,t)=>(0,l.jsx)(s,{type:e,data:t}),student:(e,t)=>(0,l.jsx)(u,{type:e,data:t})};var c=e=>{let{table:t,type:n,data:r,id:o}=e,s="create"===n?"w-8 h-8":"w-7 h-7",u="create"===n?"bg-lamaYellow":"update"===n?"bg-lamaSky":"bg-lamaPurple",[c,f]=(0,i.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:`${s} flex items-center justify-center rounded-full ${u}`,onClick:()=>f(!0),children:(0,l.jsx)(a.default,{src:`/${n}.png`,alt:`${n} icon`,width:16,height:16})}),c&&(0,l.jsx)("div",{className:"w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",onClick:()=>f(!1),children:(0,l.jsxs)("div",{className:"bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",onClick:e=>e.stopPropagation(),children:[(0,l.jsx)(()=>"delete"===n&&o?(0,l.jsxs)("form",{className:"p-4 flex flex-col gap-4",children:[(0,l.jsxs)("span",{className:"text-center font-medium",children:["All data will be lost. Are you sure you want to delete this ",t,"?"]}),(0,l.jsx)("button",{className:"bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",children:"Delete"})]}):"create"===n||"update"===n?d[t]?d[t](n,r):(0,l.jsxs)("div",{children:["Form not found for ",t,"!"]}):(0,l.jsx)("div",{children:"Form type not supported!"}),{}),(0,l.jsx)("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:()=>f(!1),children:(0,l.jsx)(a.default,{src:"/close.png",alt:"close",width:14,height:14})})]})})]})}}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=56909)}),_N_E=e.O()}]);