(()=>{var e={};e.id=506,e.ids=[506],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},69393:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>i}),s(72473),s(19967),s(35866),s(32029);var l=s(23191),a=s(88716),r=s(37922),n=s.n(r),d=s(95231),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);s.d(t,o);let i=["",{children:["(dashboard)",{children:["list",{children:["teachers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,72473)),"D:\\vscode\\next-dashboard-ui-completed\\src\\app\\(dashboard)\\list\\teachers\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,19967)),"D:\\vscode\\next-dashboard-ui-completed\\src\\app\\(dashboard)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32029)),"D:\\vscode\\next-dashboard-ui-completed\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\vscode\\next-dashboard-ui-completed\\src\\app\\(dashboard)\\list\\teachers\\page.tsx"],u="/(dashboard)/list/teachers/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(dashboard)/list/teachers/page",pathname:"/list/teachers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},25308:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,92481,23)),Promise.resolve().then(s.t.bind(s,79404,23)),Promise.resolve().then(s.bind(s,5863))},46226:(e,t,s)=>{"use strict";s.d(t,{default:()=>a.a});var l=s(69029),a=s.n(l)},43353:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let l=s(91174);s(10326),s(17577);let a=l._(s(77028));function r(e,t){var s;let l={loading:e=>{let{error:t,isLoading:s,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let r={...l,...t};return(0,a.default)({...r,modules:null==(s=r.loadableGenerated)?void 0:s.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69029:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},getImageProps:function(){return d}});let l=s(91174),a=s(23078),r=s(92481),n=l._(s(86820));function d(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let o=r.Image},933:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let l=s(94129);function a(e){let{reason:t,children:s}=e;throw new l.BailoutToCSRError(t)}},77028:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let l=s(10326),a=s(17577),r=s(933),n=s(46618);function d(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(d(()=>null)),loading:null,ssr:!0},i=function(e){let t={...o,...e},s=(0,a.lazy)(()=>t.loader().then(d)),i=t.loading;function c(e){let d=i?(0,l.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,o=t.ssr?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.PreloadCss,{moduleIds:t.modules}),(0,l.jsx)(s,{...e})]}):(0,l.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(s,{...e})});return(0,l.jsx)(a.Suspense,{fallback:d,children:o})}return c.displayName="LoadableComponent",c}},46618:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let l=s(10326),a=s(55403);function r(e){let{moduleIds:t}=e,s=(0,a.getExpectedRequestStore)("next/dynamic css"),r=[];if(s.reactLoadableManifest&&t){let e=s.reactLoadableManifest;for(let s of t){if(!e[s])continue;let t=e[s].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,l.jsx)(l.Fragment,{children:r.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:s.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},5863:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var l=s(10326),a=s(43353),r=s.n(a),n=s(46226),d=s(17577);let o=r()(()=>Promise.all([s.e(686),s.e(568)]).then(s.bind(s,98307)),{loadableGenerated:{modules:["components\\FormModal.tsx -> ./forms/TeacherForm"]},loading:()=>l.jsx("h1",{children:"Loading..."})}),i=r()(()=>Promise.all([s.e(686),s.e(558)]).then(s.bind(s,85558)),{loadableGenerated:{modules:["components\\FormModal.tsx -> ./forms/StudentForm"]},loading:()=>l.jsx("h1",{children:"Loading..."})}),c={teacher:(e,t)=>l.jsx(o,{type:e,data:t}),student:(e,t)=>l.jsx(i,{type:e,data:t})},u=({table:e,type:t,data:s,id:a})=>{let r="create"===t?"w-8 h-8":"w-7 h-7",o="create"===t?"bg-lamaYellow":"update"===t?"bg-lamaSky":"bg-lamaPurple",[i,u]=(0,d.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[l.jsx("button",{className:`${r} flex items-center justify-center rounded-full ${o}`,onClick:()=>u(!0),children:l.jsx(n.default,{src:`/${t}.png`,alt:`${t} icon`,width:16,height:16})}),i&&l.jsx("div",{className:"w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",onClick:()=>u(!1),children:(0,l.jsxs)("div",{className:"bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",onClick:e=>e.stopPropagation(),children:[l.jsx(()=>"delete"===t&&a?(0,l.jsxs)("form",{className:"p-4 flex flex-col gap-4",children:[(0,l.jsxs)("span",{className:"text-center font-medium",children:["All data will be lost. Are you sure you want to delete this ",e,"?"]}),l.jsx("button",{className:"bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",children:"Delete"})]}):"create"===t||"update"===t?c[e]?c[e](t,s):(0,l.jsxs)("div",{children:["Form not found for ",e,"!"]}):l.jsx("div",{children:"Form type not supported!"}),{}),l.jsx("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:()=>u(!1),children:l.jsx(n.default,{src:"/close.png",alt:"close",width:14,height:14})})]})})]})}},72473:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var l=s(19510),a=s(26609),r=s(40914),n=s(23553),d=s(81857),o=s(6961),i=s(17710),c=s(57371);let u=[{header:"Info",accessor:"info"},{header:"Teacher ID",accessor:"teacherId",className:"hidden md:table-cell"},{header:"Subjects",accessor:"subjects",className:"hidden md:table-cell"},{header:"Classes",accessor:"classes",className:"hidden md:table-cell"},{header:"Phone",accessor:"phone",className:"hidden lg:table-cell"},{header:"Address",accessor:"address",className:"hidden lg:table-cell"},{header:"Actions",accessor:"action"}],m=()=>(0,l.jsxs)("div",{className:"bg-white p-4 rounded-md flex-1 m-4 mt-0",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[l.jsx("h1",{className:"hidden md:block text-lg font-semibold",children:"All Teachers"}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-4 w-full md:w-auto",children:[l.jsx(d.Z,{}),(0,l.jsxs)("div",{className:"flex items-center gap-4 self-end",children:[l.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:l.jsx(i.default,{src:"/filter.png",alt:"",width:14,height:14})}),l.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:l.jsx(i.default,{src:"/sort.png",alt:"",width:14,height:14})}),"admin"===o.rH&&l.jsx(a.ZP,{table:"teacher",type:"create"})]})]})]}),l.jsx(n.Z,{columns:u,renderRow:e=>(0,l.jsxs)("tr",{className:"border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight",children:[(0,l.jsxs)("td",{className:"flex items-center gap-4 p-4",children:[l.jsx(i.default,{src:e.photo,alt:"",width:40,height:40,className:"md:hidden xl:block w-10 h-10 rounded-full object-cover"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx("h3",{className:"font-semibold",children:e.name}),l.jsx("p",{className:"text-xs text-gray-500",children:e?.email})]})]}),l.jsx("td",{className:"hidden md:table-cell",children:e.teacherId}),l.jsx("td",{className:"hidden md:table-cell",children:e.subjects.join(",")}),l.jsx("td",{className:"hidden md:table-cell",children:e.classes.join(",")}),l.jsx("td",{className:"hidden md:table-cell",children:e.phone}),l.jsx("td",{className:"hidden md:table-cell",children:e.address}),l.jsx("td",{children:(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[l.jsx(c.default,{href:`/list/teachers/${e.id}`,children:l.jsx("button",{className:"w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky",children:l.jsx(i.default,{src:"/view.png",alt:"",width:16,height:16})})}),"admin"===o.rH&&l.jsx(a.ZP,{table:"teacher",type:"delete",id:e.id})]})})]},e.id),data:o.kq}),l.jsx(r.Z,{})]})},26609:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>d});var l=s(68570);let a=(0,l.createProxy)(String.raw`D:\vscode\next-dashboard-ui-completed\src\components\FormModal.tsx`),{__esModule:r,$$typeof:n}=a;a.default;let d=(0,l.createProxy)(String.raw`D:\vscode\next-dashboard-ui-completed\src\components\FormModal.tsx#default`)},40914:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s(19510);let a=()=>(0,l.jsxs)("div",{className:"p-4 flex items-center justify-between text-gray-500",children:[l.jsx("button",{disabled:!0,className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",children:"Prev"}),(0,l.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[l.jsx("button",{className:"px-2 rounded-sm bg-lamaSky",children:"1"}),l.jsx("button",{className:"px-2 rounded-sm ",children:"2"}),l.jsx("button",{className:"px-2 rounded-sm ",children:"3"}),"...",l.jsx("button",{className:"px-2 rounded-sm ",children:"10"})]}),l.jsx("button",{className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]})},23553:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s(19510);let a=({columns:e,renderRow:t,data:s})=>(0,l.jsxs)("table",{className:"w-full mt-4",children:[l.jsx("thead",{children:l.jsx("tr",{className:"text-left text-gray-500 text-sm",children:e.map(e=>l.jsx("th",{className:e.className,children:e.header},e.accessor))})}),l.jsx("tbody",{children:s.map(e=>t(e))})]})},81857:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var l=s(19510),a=s(17710);let r=()=>(0,l.jsxs)("div",{className:"w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2",children:[l.jsx(a.default,{src:"/search.png",alt:"",width:14,height:14}),l.jsx("input",{type:"text",placeholder:"Search...",className:"w-[200px] p-2 bg-transparent outline-none"})]})}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[948,349,621,802,807],()=>s(69393));module.exports=l})();