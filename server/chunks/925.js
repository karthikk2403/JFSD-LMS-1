"use strict";exports.id=925,exports.ids=[925],exports.modules={61682:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{Head:function(){return y},Html:function(){return I},Main:function(){return T},NextScript:function(){return S},default:function(){return P}});let r=n(20997),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(void 0);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(16689)),o=n(45104),s=n(75778),a=n(79630),l=function(e){return e&&e.__esModule?e:{default:e}}(n(80676)),u=n(3112),c=n(8584);function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}let f=new Set;function d(e,t,n){let r=(0,s.getPageFiles)(e,"/_app"),i=n?[]:(0,s.getPageFiles)(e,t);return{sharedFiles:r,pageFiles:i,allFiles:[...new Set([...r,...i])]}}function h(e,t){let{assetPrefix:n,buildManifest:i,assetQueryString:o,disableOptimizedLoading:s,crossOrigin:a}=e;return i.polyfillFiles.filter(e=>e.endsWith(".js")&&!e.endsWith(".module.js")).map(e=>(0,r.jsx)("script",{defer:!s,nonce:t.nonce,crossOrigin:t.crossOrigin||a,noModule:!0,src:`${n}/_next/${(0,c.encodeURIPath)(e)}${o}`},e))}function m({styles:e}){if(!e)return null;let t=Array.isArray(e)?e:[];if(e.props&&Array.isArray(e.props.children)){let n=e=>{var t,n;return null==e?void 0:null==(n=e.props)?void 0:null==(t=n.dangerouslySetInnerHTML)?void 0:t.__html};e.props.children.forEach(e=>{Array.isArray(e)?e.forEach(e=>n(e)&&t.push(e)):n(e)&&t.push(e)})}return(0,r.jsx)("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:t.map(e=>e.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g,"").replace(/\/\*@ sourceURL=.*?\*\//g,"")}})}function _(e,t,n){let{dynamicImports:i,assetPrefix:o,isDevelopment:s,assetQueryString:a,disableOptimizedLoading:l,crossOrigin:u}=e;return i.map(e=>!e.endsWith(".js")||n.allFiles.includes(e)?null:(0,r.jsx)("script",{async:!s&&l,defer:!l,src:`${o}/_next/${(0,c.encodeURIPath)(e)}${a}`,nonce:t.nonce,crossOrigin:t.crossOrigin||u},e))}function g(e,t,n){var i;let{assetPrefix:o,buildManifest:s,isDevelopment:a,assetQueryString:l,disableOptimizedLoading:u,crossOrigin:p}=e;return[...n.allFiles.filter(e=>e.endsWith(".js")),...null==(i=s.lowPriorityFiles)?void 0:i.filter(e=>e.endsWith(".js"))].map(e=>(0,r.jsx)("script",{src:`${o}/_next/${(0,c.encodeURIPath)(e)}${l}`,nonce:t.nonce,async:!a&&u,defer:!u,crossOrigin:t.crossOrigin||p},e))}function E(e,t){let{scriptLoader:n,disableOptimizedLoading:o,crossOrigin:s}=e,a=function(e,t){let{assetPrefix:n,scriptLoader:o,crossOrigin:s,nextScriptWorkers:a}=e;if(!a)return null;try{let{partytownSnippet:e}=require("@builder.io/partytown/integration"),a=(Array.isArray(t.children)?t.children:[t.children]).find(e=>{var t,n;return!!e&&!!e.props&&(null==e?void 0:null==(n=e.props)?void 0:null==(t=n.dangerouslySetInnerHTML)?void 0:t.__html.length)&&"data-partytown-config"in e.props});return(0,r.jsxs)(r.Fragment,{children:[!a&&(0,r.jsx)("script",{"data-partytown-config":"",dangerouslySetInnerHTML:{__html:`
            partytown = {
              lib: "${n}/_next/static/~partytown/"
            };
          `}}),(0,r.jsx)("script",{"data-partytown":"",dangerouslySetInnerHTML:{__html:e()}}),(o.worker||[]).map((e,n)=>{let{strategy:r,src:o,children:a,dangerouslySetInnerHTML:l,...u}=e,c={};if(o)c.src=o;else if(l&&l.__html)c.dangerouslySetInnerHTML={__html:l.__html};else if(a)c.dangerouslySetInnerHTML={__html:"string"==typeof a?a:Array.isArray(a)?a.join(""):""};else throw Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");return(0,i.createElement)("script",{...c,...u,type:"text/partytown",key:o||n,nonce:t.nonce,"data-nscript":"worker",crossOrigin:t.crossOrigin||s})})]})}catch(e){return(0,l.default)(e)&&"MODULE_NOT_FOUND"!==e.code&&console.warn(`Warning: ${e.message}`),null}}(e,t),u=(n.beforeInteractive||[]).filter(e=>e.src).map((e,n)=>{let{strategy:r,...a}=e;return(0,i.createElement)("script",{...a,key:a.src||n,defer:a.defer??!o,nonce:t.nonce,"data-nscript":"beforeInteractive",crossOrigin:t.crossOrigin||s})});return(0,r.jsxs)(r.Fragment,{children:[a,u]})}class y extends i.default.Component{static #e=this.contextType=u.HtmlContext;getCssLinks(e){let{assetPrefix:t,assetQueryString:n,dynamicImports:i,crossOrigin:o,optimizeCss:s,optimizeFonts:a}=this.context,l=e.allFiles.filter(e=>e.endsWith(".css")),u=new Set(e.sharedFiles),p=new Set([]),f=Array.from(new Set(i.filter(e=>e.endsWith(".css"))));if(f.length){let e=new Set(l);p=new Set(f=f.filter(t=>!(e.has(t)||u.has(t)))),l.push(...f)}let d=[];return l.forEach(e=>{let i=u.has(e);s||d.push((0,r.jsx)("link",{nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${(0,c.encodeURIPath)(e)}${n}`,as:"style",crossOrigin:this.props.crossOrigin||o},`${e}-preload`));let a=p.has(e);d.push((0,r.jsx)("link",{nonce:this.props.nonce,rel:"stylesheet",href:`${t}/_next/${(0,c.encodeURIPath)(e)}${n}`,crossOrigin:this.props.crossOrigin||o,"data-n-g":a?void 0:i?"":void 0,"data-n-p":a?void 0:i?void 0:""},e))}),a&&(d=this.makeStylesheetInert(d)),0===d.length?null:d}getPreloadDynamicChunks(){let{dynamicImports:e,assetPrefix:t,assetQueryString:n,crossOrigin:i}=this.context;return e.map(e=>e.endsWith(".js")?(0,r.jsx)("link",{rel:"preload",href:`${t}/_next/${(0,c.encodeURIPath)(e)}${n}`,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||i},e):null).filter(Boolean)}getPreloadMainLinks(e){let{assetPrefix:t,assetQueryString:n,scriptLoader:i,crossOrigin:o}=this.context,s=e.allFiles.filter(e=>e.endsWith(".js"));return[...(i.beforeInteractive||[]).map(e=>(0,r.jsx)("link",{nonce:this.props.nonce,rel:"preload",href:e.src,as:"script",crossOrigin:this.props.crossOrigin||o},e.src)),...s.map(e=>(0,r.jsx)("link",{nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${(0,c.encodeURIPath)(e)}${n}`,as:"script",crossOrigin:this.props.crossOrigin||o},e))]}getBeforeInteractiveInlineScripts(){let{scriptLoader:e}=this.context,{nonce:t,crossOrigin:n}=this.props;return(e.beforeInteractive||[]).filter(e=>!e.src&&(e.dangerouslySetInnerHTML||e.children)).map((e,r)=>{let{strategy:o,children:s,dangerouslySetInnerHTML:a,src:l,...u}=e,c="";return a&&a.__html?c=a.__html:s&&(c="string"==typeof s?s:Array.isArray(s)?s.join(""):""),(0,i.createElement)("script",{...u,dangerouslySetInnerHTML:{__html:c},key:u.id||r,nonce:t,"data-nscript":"beforeInteractive",crossOrigin:n||void 0})})}getDynamicChunks(e){return _(this.context,this.props,e)}getPreNextScripts(){return E(this.context,this.props)}getScripts(e){return g(this.context,this.props,e)}getPolyfillScripts(){return h(this.context,this.props)}makeStylesheetInert(e){return i.default.Children.map(e,e=>{var t,n;if((null==e?void 0:e.type)==="link"&&(null==e?void 0:null==(t=e.props)?void 0:t.href)&&o.OPTIMIZED_FONT_PROVIDERS.some(({url:t})=>{var n,r;return null==e?void 0:null==(r=e.props)?void 0:null==(n=r.href)?void 0:n.startsWith(t)})){let t={...e.props||{},"data-href":e.props.href,href:void 0};return i.default.cloneElement(e,t)}if(null==e?void 0:null==(n=e.props)?void 0:n.children){let t={...e.props||{},children:this.makeStylesheetInert(e.props.children)};return i.default.cloneElement(e,t)}return e}).filter(Boolean)}render(){let{styles:e,ampPath:t,inAmpMode:o,hybridAmp:s,canonicalBase:a,__NEXT_DATA__:l,dangerousAsPath:u,headTags:p,unstable_runtimeJS:f,unstable_JsPreload:h,disableOptimizedLoading:_,optimizeCss:g,optimizeFonts:E,assetPrefix:y,nextFontManifest:S}=this.context,I=!1===f,T=!1===h||!_;this.context.docComponentsRendered.Head=!0;let{head:P}=this.context,O=[],x=[];P&&(P.forEach(e=>{let t;this.context.strictNextHead&&(t=i.default.createElement("meta",{name:"next-head",content:"1"})),e&&"link"===e.type&&"preload"===e.props.rel&&"style"===e.props.as?(t&&O.push(t),O.push(e)):e&&(t&&("meta"!==e.type||!e.props.charSet)&&x.push(t),x.push(e))}),P=O.concat(x));let v=i.default.Children.toArray(this.props.children).filter(Boolean);E&&!o&&(v=this.makeStylesheetInert(v));let N=!1,b=!1;P=i.default.Children.map(P||[],e=>{if(!e)return e;let{type:t,props:n}=e;if(o){let r="";if("meta"===t&&"viewport"===n.name?r='name="viewport"':"link"===t&&"canonical"===n.rel?b=!0:"script"===t&&(n.src&&-1>n.src.indexOf("ampproject")||n.dangerouslySetInnerHTML&&(!n.type||"text/javascript"===n.type))&&(r="<script",Object.keys(n).forEach(e=>{r+=` ${e}="${n[e]}"`}),r+="/>"),r)return console.warn(`Found conflicting amp tag "${e.type}" with conflicting prop ${r} in ${l.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`),null}else"link"===t&&"amphtml"===n.rel&&(N=!0);return e});let j=d(this.context.buildManifest,this.context.__NEXT_DATA__.page,o),R=function(e,t,n=""){if(!e)return{preconnect:null,preload:null};let i=e.pages["/_app"],o=e.pages[t],s=Array.from(new Set([...i??[],...o??[]]));return{preconnect:0===s.length&&(i||o)?(0,r.jsx)("link",{"data-next-font":e.pagesUsingSizeAdjust?"size-adjust":"",rel:"preconnect",href:"/",crossOrigin:"anonymous"}):null,preload:s?s.map(e=>{let t=/\.(woff|woff2|eot|ttf|otf)$/.exec(e)[1];return(0,r.jsx)("link",{rel:"preload",href:`${n}/_next/${(0,c.encodeURIPath)(e)}`,as:"font",type:`font/${t}`,crossOrigin:"anonymous","data-next-font":e.includes("-s")?"size-adjust":""},e)}):null}}(S,u,y);return(0,r.jsxs)("head",{...function(e){let{crossOrigin:t,nonce:n,...r}=e;return r}(this.props),children:[this.context.isDevelopment&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{"data-next-hide-fouc":!0,"data-ampdevmode":o?"true":void 0,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),(0,r.jsx)("noscript",{"data-next-hide-fouc":!0,"data-ampdevmode":o?"true":void 0,children:(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{display:block}"}})})]}),P,this.context.strictNextHead?null:(0,r.jsx)("meta",{name:"next-head-count",content:i.default.Children.count(P||[]).toString()}),v,E&&(0,r.jsx)("meta",{name:"next-font-preconnect"}),R.preconnect,R.preload,o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!b&&(0,r.jsx)("link",{rel:"canonical",href:a+n(50733).cleanAmpPath(u)}),(0,r.jsx)("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),(0,r.jsx)(m,{styles:e}),(0,r.jsx)("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),(0,r.jsx)("noscript",{children:(0,r.jsx)("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})}),(0,r.jsx)("script",{async:!0,src:"https://cdn.ampproject.org/v0.js"})]}),!o&&(0,r.jsxs)(r.Fragment,{children:[!N&&s&&(0,r.jsx)("link",{rel:"amphtml",href:a+(t||`${u}${u.includes("?")?"&":"?"}amp=1`)}),this.getBeforeInteractiveInlineScripts(),!g&&this.getCssLinks(j),!g&&(0,r.jsx)("noscript",{"data-n-css":this.props.nonce??""}),!I&&!T&&this.getPreloadDynamicChunks(),!I&&!T&&this.getPreloadMainLinks(j),!_&&!I&&this.getPolyfillScripts(),!_&&!I&&this.getPreNextScripts(),!_&&!I&&this.getDynamicChunks(j),!_&&!I&&this.getScripts(j),g&&this.getCssLinks(j),g&&(0,r.jsx)("noscript",{"data-n-css":this.props.nonce??""}),this.context.isDevelopment&&(0,r.jsx)("noscript",{id:"__next_css__DO_NOT_USE__"}),e||null]}),i.default.createElement(i.default.Fragment,{},...p||[])]})}}class S extends i.default.Component{static #e=this.contextType=u.HtmlContext;getDynamicChunks(e){return _(this.context,this.props,e)}getPreNextScripts(){return E(this.context,this.props)}getScripts(e){return g(this.context,this.props,e)}getPolyfillScripts(){return h(this.context,this.props)}static getInlineScriptSource(e){let{__NEXT_DATA__:t,largePageDataBytes:r}=e;try{let i=JSON.stringify(t);if(f.has(t.page))return(0,a.htmlEscapeJsonString)(i);let o=Buffer.from(i).byteLength,s=n(95955).Z;return r&&o>r&&(f.add(t.page),console.warn(`Warning: data for page "${t.page}"${t.page===e.dangerousAsPath?"":` (path "${e.dangerousAsPath}")`} is ${s(o)} which exceeds the threshold of ${s(r)}, this amount of data can reduce performance.
See more info here: https://nextjs.org/docs/messages/large-page-data`)),(0,a.htmlEscapeJsonString)(i)}catch(e){if((0,l.default)(e)&&-1!==e.message.indexOf("circular structure"))throw Error(`Circular structure in "getInitialProps" result of page "${t.page}". https://nextjs.org/docs/messages/circular-structure`);throw e}}render(){let{assetPrefix:e,inAmpMode:t,buildManifest:n,unstable_runtimeJS:i,docComponentsRendered:o,assetQueryString:s,disableOptimizedLoading:a,crossOrigin:l}=this.context,u=!1===i;if(o.NextScript=!0,t)return null;let p=d(this.context.buildManifest,this.context.__NEXT_DATA__.page,t);return(0,r.jsxs)(r.Fragment,{children:[!u&&n.devFiles?n.devFiles.map(t=>(0,r.jsx)("script",{src:`${e}/_next/${(0,c.encodeURIPath)(t)}${s}`,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||l},t)):null,u?null:(0,r.jsx)("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||l,dangerouslySetInnerHTML:{__html:S.getInlineScriptSource(this.context)}}),a&&!u&&this.getPolyfillScripts(),a&&!u&&this.getPreNextScripts(),a&&!u&&this.getDynamicChunks(p),a&&!u&&this.getScripts(p)]})}}function I(e){let{inAmpMode:t,docComponentsRendered:n,locale:o,scriptLoader:s,__NEXT_DATA__:a}=(0,u.useHtmlContext)();return n.Html=!0,function(e,t,n){var r,o,s,a;if(!n.children)return;let l=[],u=Array.isArray(n.children)?n.children:[n.children],c=null==(o=u.find(e=>e.type===y))?void 0:null==(r=o.props)?void 0:r.children,p=null==(a=u.find(e=>"body"===e.type))?void 0:null==(s=a.props)?void 0:s.children,f=[...Array.isArray(c)?c:[c],...Array.isArray(p)?p:[p]];i.default.Children.forEach(f,t=>{var n;if(t&&(null==(n=t.type)?void 0:n.__nextScript)){if("beforeInteractive"===t.props.strategy){e.beforeInteractive=(e.beforeInteractive||[]).concat([{...t.props}]);return}if(["lazyOnload","afterInteractive","worker"].includes(t.props.strategy)){l.push(t.props);return}}}),t.scriptLoader=l}(s,a,e),(0,r.jsx)("html",{...e,lang:e.lang||o||void 0,amp:t?"":void 0,"data-ampdevmode":void 0})}function T(){let{docComponentsRendered:e}=(0,u.useHtmlContext)();return e.Main=!0,(0,r.jsx)("next-js-internal-body-render-target",{})}class P extends i.default.Component{static getInitialProps(e){return e.defaultGetInitialProps(e)}render(){return(0,r.jsxs)(I,{children:[(0,r.jsx)(y,{}),(0,r.jsxs)("body",{children:[(0,r.jsx)(T,{}),(0,r.jsx)(S,{})]})]})}}P[o.NEXT_BUILTIN_DOCUMENT]=function(){return(0,r.jsxs)(I,{children:[(0,r.jsx)(y,{}),(0,r.jsxs)("body",{children:[(0,r.jsx)(T,{}),(0,r.jsx)(S,{})]})]})}},45104:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{APP_BUILD_MANIFEST:function(){return y},APP_CLIENT_INTERNALS:function(){return Z},APP_PATHS_MANIFEST:function(){return _},APP_PATH_ROUTES_MANIFEST:function(){return g},AUTOMATIC_FONT_OPTIMIZATION_MANIFEST:function(){return L},BARREL_OPTIMIZATION_PREFIX:function(){return W},BLOCKED_PAGES:function(){return D},BUILD_ID_FILE:function(){return F},BUILD_MANIFEST:function(){return E},CLIENT_PUBLIC_FILES_PATH:function(){return k},CLIENT_REFERENCE_MANIFEST:function(){return H},CLIENT_STATIC_FILES_PATH:function(){return U},CLIENT_STATIC_FILES_RUNTIME_AMP:function(){return J},CLIENT_STATIC_FILES_RUNTIME_MAIN:function(){return X},CLIENT_STATIC_FILES_RUNTIME_MAIN_APP:function(){return K},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS:function(){return ee},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL:function(){return et},CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH:function(){return q},CLIENT_STATIC_FILES_RUNTIME_WEBPACK:function(){return Q},COMPILER_INDEXES:function(){return s},COMPILER_NAMES:function(){return i},CONFIG_FILES:function(){return w},DEFAULT_RUNTIME_WEBPACK:function(){return en},DEFAULT_SANS_SERIF_FONT:function(){return eu},DEFAULT_SERIF_FONT:function(){return el},DEV_CLIENT_PAGES_MANIFEST:function(){return j},DEV_MIDDLEWARE_MANIFEST:function(){return A},EDGE_RUNTIME_WEBPACK:function(){return er},EDGE_UNSUPPORTED_NODE_APIS:function(){return eh},EXPORT_DETAIL:function(){return O},EXPORT_MARKER:function(){return P},FUNCTIONS_CONFIG_MANIFEST:function(){return S},GOOGLE_FONT_PROVIDER:function(){return es},IMAGES_MANIFEST:function(){return N},INTERCEPTION_ROUTE_REWRITE_MANIFEST:function(){return V},INTERNAL_HEADERS:function(){return o},MIDDLEWARE_BUILD_MANIFEST:function(){return z},MIDDLEWARE_MANIFEST:function(){return R},MIDDLEWARE_REACT_LOADABLE_MANIFEST:function(){return Y},MODERN_BROWSERSLIST_TARGET:function(){return r.default},NEXT_BUILTIN_DOCUMENT:function(){return B},NEXT_FONT_MANIFEST:function(){return T},OPTIMIZED_FONT_PROVIDERS:function(){return ea},PAGES_MANIFEST:function(){return m},PHASE_DEVELOPMENT_SERVER:function(){return f},PHASE_EXPORT:function(){return u},PHASE_INFO:function(){return h},PHASE_PRODUCTION_BUILD:function(){return c},PHASE_PRODUCTION_SERVER:function(){return p},PHASE_TEST:function(){return d},PRERENDER_MANIFEST:function(){return x},REACT_LOADABLE_MANIFEST:function(){return M},ROUTES_MANIFEST:function(){return v},RSC_MODULE_TYPES:function(){return ed},SERVER_DIRECTORY:function(){return C},SERVER_FILES_MANIFEST:function(){return b},SERVER_PROPS_ID:function(){return eo},SERVER_REFERENCE_MANIFEST:function(){return G},STATIC_PROPS_ID:function(){return ei},STATIC_STATUS_PAGES:function(){return ec},STRING_LITERAL_DROP_BUNDLE:function(){return $},SUBRESOURCE_INTEGRITY_MANIFEST:function(){return I},SYSTEM_ENTRYPOINTS:function(){return em},TRACE_OUTPUT_VERSION:function(){return ep},TURBO_TRACE_DEFAULT_MEMORY_LIMIT:function(){return ef},UNDERSCORE_NOT_FOUND_ROUTE:function(){return a},UNDERSCORE_NOT_FOUND_ROUTE_ENTRY:function(){return l}});let r=n(50167)._(n(60979)),i={client:"client",server:"server",edgeServer:"edge-server"},o=["x-invoke-error","x-invoke-output","x-invoke-path","x-invoke-query","x-invoke-status","x-middleware-invoke"],s={[i.client]:0,[i.server]:1,[i.edgeServer]:2},a="/_not-found",l=""+a+"/page",u="phase-export",c="phase-production-build",p="phase-production-server",f="phase-development-server",d="phase-test",h="phase-info",m="pages-manifest.json",_="app-paths-manifest.json",g="app-path-routes-manifest.json",E="build-manifest.json",y="app-build-manifest.json",S="functions-config-manifest.json",I="subresource-integrity-manifest",T="next-font-manifest",P="export-marker.json",O="export-detail.json",x="prerender-manifest.json",v="routes-manifest.json",N="images-manifest.json",b="required-server-files.json",j="_devPagesManifest.json",R="middleware-manifest.json",A="_devMiddlewareManifest.json",M="react-loadable-manifest.json",L="font-manifest.json",C="server",w=["next.config.js","next.config.mjs"],F="BUILD_ID",D=["/_document","/_app","/_error"],k="public",U="static",$="__NEXT_DROP_CLIENT_FILE__",B="__NEXT_BUILTIN_DOCUMENT__",W="__barrel_optimize__",H="client-reference-manifest",G="server-reference-manifest",z="middleware-build-manifest",Y="middleware-react-loadable-manifest",V="interception-route-rewrite-manifest",X="main",K=""+X+"-app",Z="app-pages-internals",q="react-refresh",J="amp",Q="webpack",ee="polyfills",et=Symbol(ee),en="webpack-runtime",er="edge-runtime-webpack",ei="__N_SSG",eo="__N_SSP",es="https://fonts.googleapis.com/",ea=[{url:es,preconnect:"https://fonts.gstatic.com"},{url:"https://use.typekit.net",preconnect:"https://use.typekit.net"}],el={name:"Times New Roman",xAvgCharWidth:821,azAvgWidth:854.3953488372093,unitsPerEm:2048},eu={name:"Arial",xAvgCharWidth:904,azAvgWidth:934.5116279069767,unitsPerEm:2048},ec=["/500"],ep=1,ef=6e3,ed={client:"client",server:"server"},eh=["clearImmediate","setImmediate","BroadcastChannel","ByteLengthQueuingStrategy","CompressionStream","CountQueuingStrategy","DecompressionStream","DomException","MessageChannel","MessageEvent","MessagePort","ReadableByteStreamController","ReadableStreamBYOBRequest","ReadableStreamDefaultController","TransformStreamDefaultController","WritableStreamDefaultController"],em=new Set([X,q,J,K]);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8584:(e,t)=>{function n(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return n}})},58299:(e,t)=>{function n(e){return Object.prototype.toString.call(e)}function r(e){if("[object Object]"!==n(e))return!1;let t=Object.getPrototypeOf(e);return null===t||t.hasOwnProperty("isPrototypeOf")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getObjectClassLabel:function(){return n},isPlainObject:function(){return r}})},60979:e=>{e.exports=["chrome 64","edge 79","firefox 67","opera 51","safari 12"]},75876:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"denormalizePagePath",{enumerable:!0,get:function(){return o}});let r=n(72189),i=n(24212);function o(e){let t=(0,i.normalizePathSep)(e);return t.startsWith("/index/")&&!(0,r.isDynamicRoute)(t)?t.slice(6):"/index"!==t?t:"/"}},75078:(e,t)=>{function n(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return n}})},49431:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePagePath",{enumerable:!0,get:function(){return s}});let r=n(75078),i=n(72189),o=n(45782);function s(e){let t=/^\/index(\/|$)/.test(e)&&!(0,i.isDynamicRoute)(e)?"/index"+e:"/"===e?"/index":(0,r.ensureLeadingSlash)(e);{let{posix:e}=n(71017),r=e.normalize(t);if(r!==t)throw new o.NormalizeError("Requested and resolved page mismatch: "+t+" "+r)}return t}},24212:(e,t)=>{function n(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return n}})},42340:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{normalizeAppPath:function(){return o},normalizeRscURL:function(){return s}});let r=n(75078),i=n(73737);function o(e){return(0,r.ensureLeadingSlash)(e.split("/").reduce((e,t,n,r)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&n===r.length-1?e:e+"/"+t,""))}function s(e){return e.replace(/\.rsc($|\?)/,"$1")}},72189:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return i.isDynamicRoute}});let r=n(317),i=n(31735)},31735:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return o}});let r=n(92407),i=/\/\[[^/]+?\](?=\/|$)/;function o(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),i.test(e)}},317:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let i=e[0];if(i.startsWith("[")&&i.endsWith("]")){let n=i.slice(1,-1),s=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),s=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function o(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===i.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(s){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');o(this.optionalRestSlugName,n),this.optionalRestSlugName=n,i="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');o(this.restSlugName,n),this.restSlugName=n,i="[...]"}}else{if(s)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');o(this.slugName,n),this.slugName=n,i="[]"}}this.children.has(i)||this.children.set(i,new n),this.children.get(i)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},73737:(e,t)=>{function n(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DEFAULT_SEGMENT_KEY:function(){return i},PAGE_SEGMENT_KEY:function(){return r},isGroupSegment:function(){return n}});let r="__PAGE__",i="__DEFAULT__"},45782:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return E},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return _},SP:function(){return f},ST:function(){return d},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return l},getLocationOrigin:function(){return s},getURL:function(){return a},isAbsoluteUrl:function(){return o},isResSent:function(){return u},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return y}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return n||(n=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>i.test(e);function s(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function a(){let{href:e}=window.location,t=s();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function p(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let f="undefined"!=typeof performance,d=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class _ extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class E extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},80676:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getProperError:function(){return o}});let r=n(58299);function i(e){return"object"==typeof e&&null!==e&&"name"in e&&"message"in e}function o(e){return i(e)?e:Error((0,r.isPlainObject)(e)?JSON.stringify(e):e+"")}},95955:(e,t)=>{Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return i}});let n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],r=(e,t)=>{let n=e;return"string"==typeof t?n=e.toLocaleString(t):!0===t&&(n=e.toLocaleString()),n};function i(e,t){if(!Number.isFinite(e))throw TypeError(`Expected a finite number, got ${typeof e}: ${e}`);if((t=Object.assign({},t)).signed&&0===e)return" 0 B";let i=e<0,o=i?"-":t.signed?"+":"";if(i&&(e=-e),e<1)return o+r(e,t.locale)+" B";let s=Math.min(Math.floor(Math.log10(e)/3),n.length-1);return o+r(e=Number((e/Math.pow(1e3,s)).toPrecision(3)),t.locale)+" "+n[s]}},92407:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return s},isInterceptionRouteAppPath:function(){return o}});let r=n(42340),i=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function s(e){let t,n,o;for(let r of e.split("/"))if(n=i.find(e=>r.startsWith(e))){[t,o]=e.split(n,2);break}if(!t||!n||!o)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,r.normalizeAppPath)(t),n){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":let s=t.split("/");if(s.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=s.slice(0,-2).concat(o).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},87093:(e,t,n)=>{e.exports=n(62785)},3112:(e,t,n)=>{e.exports=n(87093).vendored.contexts.HtmlContext},75778:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPageFiles",{enumerable:!0,get:function(){return o}});let r=n(75876),i=n(49431);function o(e,t){let n=(0,r.denormalizePagePath)((0,i.normalizePagePath)(t));return e.pages[n]||(console.warn(`Could not find files for ${n} in .next/build-manifest.json`),[])}},79630:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ESCAPE_REGEX:function(){return r},htmlEscapeJsonString:function(){return i}});let n={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},r=/[&><\u2028\u2029]/g;function i(e){return e.replace(r,e=>n[e])}},50733:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cleanAmpPath:function(){return o},debounce:function(){return s},isBlockedPage:function(){return i}});let r=n(45104);function i(e){return r.BLOCKED_PAGES.includes(e)}function o(e){return e.match(/\?amp=(y|yes|true|1)/)&&(e=e.replace(/\?amp=(y|yes|true|1)&?/,"?")),e.match(/&amp=(y|yes|true|1)/)&&(e=e.replace(/&amp=(y|yes|true|1)/,"")),e=e.replace(/\?$/,"")}function s(e,t,n=1/0){let r,i,o;let s=0,a=0;function l(){let u=Date.now(),c=a+t-u;c<=0||s+n>=u?(r=void 0,e.apply(o,i)):r=setTimeout(l,c)}return function(...e){i=e,o=this,a=Date.now(),void 0===r&&(s=a,r=setTimeout(l,t))}}},50167:(e,t)=>{t._=t._interop_require_default=function(e){return e&&e.__esModule?e:{default:e}}}};