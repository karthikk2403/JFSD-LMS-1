(()=>{var e={};e.id=151,e.ids=[151],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},46441:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>i}),s(1745),s(19967),s(35866),s(32029);var a=s(23191),r=s(88716),l=s(37922),n=s.n(l),d=s(95231),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);s.d(t,o);let i=["",{children:["(dashboard)",{children:["list",{children:["exams",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1745)),"D:\\vscode\\next-dashboard-ui-completed\\src\\app\\(dashboard)\\list\\exams\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,19967)),"D:\\vscode\\next-dashboard-ui-completed\\src\\app\\(dashboard)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32029)),"D:\\vscode\\next-dashboard-ui-completed\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\vscode\\next-dashboard-ui-completed\\src\\app\\(dashboard)\\list\\exams\\page.tsx"],u="/(dashboard)/list/exams/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(dashboard)/list/exams/page",pathname:"/list/exams",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},87847:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,92481,23)),Promise.resolve().then(s.bind(s,5863))},46226:(e,t,s)=>{"use strict";s.d(t,{default:()=>r.a});var a=s(69029),r=s.n(a)},43353:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let a=s(91174);s(10326),s(17577);let r=a._(s(77028));function l(e,t){var s;let a={loading:e=>{let{error:t,isLoading:s,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e);let l={...a,...t};return(0,r.default)({...l,modules:null==(s=l.loadableGenerated)?void 0:s.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69029:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},getImageProps:function(){return d}});let a=s(91174),r=s(23078),l=s(92481),n=a._(s(86820));function d(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let o=l.Image},933:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let a=s(94129);function r(e){let{reason:t,children:s}=e;throw new a.BailoutToCSRError(t)}},77028:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=s(10326),r=s(17577),l=s(933),n=s(46618);function d(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(d(()=>null)),loading:null,ssr:!0},i=function(e){let t={...o,...e},s=(0,r.lazy)(()=>t.loader().then(d)),i=t.loading;function c(e){let d=i?(0,a.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,o=t.ssr?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.PreloadCss,{moduleIds:t.modules}),(0,a.jsx)(s,{...e})]}):(0,a.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(s,{...e})});return(0,a.jsx)(r.Suspense,{fallback:d,children:o})}return c.displayName="LoadableComponent",c}},46618:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let a=s(10326),r=s(55403);function l(e){let{moduleIds:t}=e,s=(0,r.getExpectedRequestStore)("next/dynamic css"),l=[];if(s.reactLoadableManifest&&t){let e=s.reactLoadableManifest;for(let s of t){if(!e[s])continue;let t=e[s].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,a.jsx)(a.Fragment,{children:l.map(e=>(0,a.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:s.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},5863:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var a=s(10326),r=s(43353),l=s.n(r),n=s(46226),d=s(17577);let o=l()(()=>Promise.all([s.e(686),s.e(568)]).then(s.bind(s,98307)),{loadableGenerated:{modules:["components\\FormModal.tsx -> ./forms/TeacherForm"]},loading:()=>a.jsx("h1",{children:"Loading..."})}),i=l()(()=>Promise.all([s.e(686),s.e(558)]).then(s.bind(s,85558)),{loadableGenerated:{modules:["components\\FormModal.tsx -> ./forms/StudentForm"]},loading:()=>a.jsx("h1",{children:"Loading..."})}),c={teacher:(e,t)=>a.jsx(o,{type:e,data:t}),student:(e,t)=>a.jsx(i,{type:e,data:t})},u=({table:e,type:t,data:s,id:r})=>{let l="create"===t?"w-8 h-8":"w-7 h-7",o="create"===t?"bg-lamaYellow":"update"===t?"bg-lamaSky":"bg-lamaPurple",[i,u]=(0,d.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[a.jsx("button",{className:`${l} flex items-center justify-center rounded-full ${o}`,onClick:()=>u(!0),children:a.jsx(n.default,{src:`/${t}.png`,alt:`${t} icon`,width:16,height:16})}),i&&a.jsx("div",{className:"w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",onClick:()=>u(!1),children:(0,a.jsxs)("div",{className:"bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",onClick:e=>e.stopPropagation(),children:[a.jsx(()=>"delete"===t&&r?(0,a.jsxs)("form",{className:"p-4 flex flex-col gap-4",children:[(0,a.jsxs)("span",{className:"text-center font-medium",children:["All data will be lost. Are you sure you want to delete this ",e,"?"]}),a.jsx("button",{className:"bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",children:"Delete"})]}):"create"===t||"update"===t?c[e]?c[e](t,s):(0,a.jsxs)("div",{children:["Form not found for ",e,"!"]}):a.jsx("div",{children:"Form type not supported!"}),{}),a.jsx("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:()=>u(!1),children:a.jsx(n.default,{src:"/close.png",alt:"close",width:14,height:14})})]})})]})}},1745:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var a=s(19510),r=s(26609),l=s(40914),n=s(23553),d=s(81857),o=s(6961),i=s(17710);let c=[{header:"Subject Name",accessor:"name"},{header:"Class",accessor:"class"},{header:"Teacher",accessor:"teacher",className:"hidden md:table-cell"},{header:"Date",accessor:"date",className:"hidden md:table-cell"},{header:"Actions",accessor:"action"}],u=()=>(0,a.jsxs)("div",{className:"bg-white p-4 rounded-md flex-1 m-4 mt-0",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx("h1",{className:"hidden md:block text-lg font-semibold",children:"All Exams"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-4 w-full md:w-auto",children:[a.jsx(d.Z,{}),(0,a.jsxs)("div",{className:"flex items-center gap-4 self-end",children:[a.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:a.jsx(i.default,{src:"/filter.png",alt:"",width:14,height:14})}),a.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:a.jsx(i.default,{src:"/sort.png",alt:"",width:14,height:14})}),"admin"===o.rH||"teacher"===o.rH&&a.jsx(r.ZP,{table:"exam",type:"create"})]})]})]}),a.jsx(n.Z,{columns:c,renderRow:e=>(0,a.jsxs)("tr",{className:"border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight",children:[a.jsx("td",{className:"flex items-center gap-4 p-4",children:e.subject}),a.jsx("td",{children:e.class}),a.jsx("td",{className:"hidden md:table-cell",children:e.teacher}),a.jsx("td",{className:"hidden md:table-cell",children:e.date}),a.jsx("td",{children:a.jsx("div",{className:"flex items-center gap-2",children:"admin"===o.rH||"teacher"===o.rH&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(r.ZP,{table:"exam",type:"update",data:e}),a.jsx(r.ZP,{table:"exam",type:"delete",id:e.id})]})})})]},e.id),data:o.q7}),a.jsx(l.Z,{})]})},26609:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>d});var a=s(68570);let r=(0,a.createProxy)(String.raw`D:\vscode\next-dashboard-ui-completed\src\components\FormModal.tsx`),{__esModule:l,$$typeof:n}=r;r.default;let d=(0,a.createProxy)(String.raw`D:\vscode\next-dashboard-ui-completed\src\components\FormModal.tsx#default`)},40914:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(19510);let r=()=>(0,a.jsxs)("div",{className:"p-4 flex items-center justify-between text-gray-500",children:[a.jsx("button",{disabled:!0,className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",children:"Prev"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[a.jsx("button",{className:"px-2 rounded-sm bg-lamaSky",children:"1"}),a.jsx("button",{className:"px-2 rounded-sm ",children:"2"}),a.jsx("button",{className:"px-2 rounded-sm ",children:"3"}),"...",a.jsx("button",{className:"px-2 rounded-sm ",children:"10"})]}),a.jsx("button",{className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]})},23553:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(19510);let r=({columns:e,renderRow:t,data:s})=>(0,a.jsxs)("table",{className:"w-full mt-4",children:[a.jsx("thead",{children:a.jsx("tr",{className:"text-left text-gray-500 text-sm",children:e.map(e=>a.jsx("th",{className:e.className,children:e.header},e.accessor))})}),a.jsx("tbody",{children:s.map(e=>t(e))})]})},81857:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(19510),r=s(17710);let l=()=>(0,a.jsxs)("div",{className:"w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2",children:[a.jsx(r.default,{src:"/search.png",alt:"",width:14,height:14}),a.jsx("input",{type:"text",placeholder:"Search...",className:"w-[200px] p-2 bg-transparent outline-none"})]})}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,349,621,802,807],()=>s(46441));module.exports=a})();