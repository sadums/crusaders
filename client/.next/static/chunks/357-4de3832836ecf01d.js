(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{5275:function(e){function t(e){this.message=e}t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,i=0,s=0,u="";o=r.charAt(s++);~o&&(n=i%4?64*n+o:o,i++%4)&&(u+=String.fromCharCode(255&n>>(-2*i&6))))o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return u}},3251:function(e,t,r){var n=r(5275);e.exports=function(e){var t,r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return t=r,decodeURIComponent(n(t).replace(/(.)/g,function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}catch(e){return n(r)}}},3535:function(e,t,r){"use strict";var n=r(3251);function o(e){this.message=e}o.prototype=Error(),o.prototype.name="InvalidTokenError",e.exports=function(e,t){if("string"!=typeof e)throw new o("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(n(e.split(".")[r]))}catch(e){throw new o("Invalid token specified: "+e.message)}},e.exports.InvalidTokenError=o},1383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(2158);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},528:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2158),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},879:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(4511);function o(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4896:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let n=r(6927),o=n._(r(6006)),i=r(4268),s=r(4490),u=r(2433),a=r(4750),l=r(1383),c=r(3645),f=r(3093),d=r(6566),p=r(528),h=r(5884),y=r(874),b=new Set;function g(e,t,r,n,o,i){if(!i&&!(0,s.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(b.has(i))return;b.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:b,children:m,prefetch:O=null,passHref:P,replace:_,shallow:R,scroll:k,locale:j,onClick:w,onMouseEnter:E,onTouchStart:C,legacyBehavior:S=!1,...x}=e;r=m,S&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let M=o.default.useContext(c.RouterContext),I=o.default.useContext(f.AppRouterContext),Q=null!=M?M:I,T=!M,U=!1!==O,A=null===O?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:D,as:L}=o.default.useMemo(()=>{if(!M){let e=v(u);return{href:e,as:b?v(b):e}}let[e,t]=(0,i.resolveHref)(M,u,!0);return{href:e,as:b?(0,i.resolveHref)(M,b):t||e}},[M,u,b]),N=o.default.useRef(D),q=o.default.useRef(L);S&&(n=o.default.Children.only(r));let H=S?n&&"object"==typeof n&&n.ref:t,[F,W,K]=(0,d.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(q.current!==L||N.current!==D)&&(K(),q.current=L,N.current=D),F(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[L,H,D,K,F]);o.default.useEffect(()=>{Q&&W&&U&&g(Q,D,L,{locale:j},{kind:A},T)},[L,D,W,j,U,null==M?void 0:M.locale,Q,T,A]);let V={ref:z,onClick(e){S||"function"!=typeof w||w(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),Q&&!e.defaultPrevented&&function(e,t,r,n,i,u,a,l,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:u,locale:l,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(h):h()}(e,Q,D,L,_,R,k,j,T,U)},onMouseEnter(e){S||"function"!=typeof E||E(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),Q&&(U||!T)&&g(Q,D,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)},onTouchStart(e){S||"function"!=typeof C||C(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),Q&&(U||!T)&&g(Q,D,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)}};if((0,a.isAbsoluteUrl)(L))V.href=L;else if(!S||P||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);V.href=t||(0,h.addBasePath)((0,l.addLocale)(L,e,null==M?void 0:M.defaultLocale))}return S?o.default.cloneElement(n,V):o.default.createElement("a",{...x,...V},r)}),O=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9995:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(6006),o=r(9995),i="function"==typeof IntersectionObserver,s=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,l=a||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(l||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=s.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},u.push(r),s.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7962:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},3645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let n=r(6927),o=n._(r(6006)),i=o.default.createContext(null)},2433:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return s},urlObjectKeys:function(){return u},formatWithValidation:function(){return a}});let n=r(5909),o=n._(r(8469)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",s=e.pathname||"",u=e.hash||"",a=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),a&&"object"==typeof a&&(a=String(o.urlQueryToSearchParams(a)));let c=e.search||a&&"?"+a||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==l?(l="//"+(l||""),s&&"/"!==s[0]&&(s="/"+s)):l||(l=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+n+l+(s=s.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return s(e)}},9300:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let n=r(6692),o=r(6167);function i(e,t,r){let i="",s=(0,o.getRouteRegex)(e),u=s.groups,a=(t!==e?(0,n.getRouteMatcher)(s)(t):"")||r;i=e;let l=Object.keys(u);return l.every(e=>{let t=a[e]||"",{repeat:r,optional:n}=u[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in a)&&(i=i.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:l,result:i}}},5726:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let r=/\/\[[^/]+?\](?=\/|$)/;function n(e){return r.test(e)}},4490:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=r(4750),o=r(879);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},7798:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},4511:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(8169);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},8469:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return i}})},4268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(8469),o=r(2433),i=r(7798),s=r(4750),u=r(2158),a=r(4490),l=r(5726),c=r(9300);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,s.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,a.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,l.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:s,params:u}=(0,c.interpolateAs)(e.pathname,e.pathname,r);s&&(t=(0,o.formatWithValidation)({pathname:s,hash:e.hash,query:(0,i.omit)(r,u)}))}let s=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[s,t||s]:s}catch(e){return r?[d]:d}}},6692:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(4750);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},s={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(s[e]=~n.indexOf("/")?n.split("/").map(e=>i(e)):t.repeat?[i(n)]:i(n))}),s}}},6167:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return a},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let n=r(7399),o=r(7962),i=r(9779);function s(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function u(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},u=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:n,repeat:a}=s(i[1]);return r[e]={pos:u++,repeat:a,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=s(i[1]);return r[e]={pos:u++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function a(e){let{parameterizedRoute:t,groups:r}=u(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function l(e){let t,r,{segment:n,routeKeys:o,keyPrefix:i}=e,u=(t=97,r=1,()=>{let e="";for(let n=0;n<r;n++)e+=String.fromCharCode(t),++t>122&&(r++,t=97);return e}),{key:a,optional:l,repeat:c}=s(n),f=a.replace(/\W/g,"");i&&(f=""+i+f);let d=!1;return(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=u()),i?o[f]=""+i+a:o[f]=""+a,c?l?"(?:/(?<"+f+">.+?))?":"/(?<"+f+">.+?)":"/(?<"+f+">[^/]+?)"}function c(e,t){let r=(0,i.removeTrailingSlash)(e).slice(1).split("/"),s={};return{namedParameterizedRoute:r.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);return r&&i?l({segment:i[1],routeKeys:s,keyPrefix:t?"nxtI":void 0}):i?l({segment:i[1],routeKeys:s,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:s}}function f(e,t){let r=c(e,t);return{...a(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=u(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},4750:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return s},getURL:function(){return u},getDisplayName:function(){return a},isResSent:function(){return l},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return y},PageNotFoundError:function(){return b},MissingStaticPage:function(){return g},MiddlewareNotFoundError:function(){return v},stringifyError:function(){return m}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=s();return e.substring(t.length)}function a(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n){let t='"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function m(e){return JSON.stringify({message:e.message,stack:e.stack})}},5846:function(e,t,r){e.exports=r(4896)},1051:function(e,t,r){"use strict";r.d(t,{a:function(){return _}});var n=r(8466),o=r(3393),i=r(6006),s=r.t(i,2),u=r(8547),a=!1,l=s.useSyncExternalStore||function(e,t,r){var n=t();__DEV__&&!a&&n!==t()&&(a=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=i.useState({inst:{value:n,getSnapshot:t}}),l=s[0].inst,f=s[1];return u.JC?i.useLayoutEffect(function(){Object.assign(l,{value:n,getSnapshot:t}),c(l)&&f({inst:l})},[e,n,t]):Object.assign(l,{value:n,getSnapshot:t}),i.useEffect(function(){return c(l)&&f({inst:l}),e(function(){c(l)&&f({inst:l})})},[e]),n};function c(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}var f=r(9551),d=r(4455),p=r(6110),h=r(9580),y=r(5086),b=r(3844),g=r(6776),v=r(8059),m=r(2190),O=r(5606),P=Object.prototype.hasOwnProperty;function _(e,t){var r,n,o,s,u;return void 0===t&&(t=Object.create(null)),(r=(0,g.x)(t.client),(n=(0,i.useRef)()).current&&r===n.current.client&&e===n.current.query||(n.current=new R(r,e,n.current)),o=n.current,(s=(0,i.useState)(0))[0],u=s[1],o.forceUpdate=function(){u(function(e){return e+1})},o).useQuery(t)}var R=function(){function e(e,t,r){this.client=e,this.query=t,this.ssrDisabledResult=(0,v.J)({loading:!0,data:void 0,error:void 0,networkStatus:y.I.loading}),this.skipStandbyResult=(0,v.J)({loading:!1,data:void 0,error:void 0,networkStatus:y.I.ready}),this.toQueryResultCache=new(u.mr?WeakMap:Map),(0,b.Vp)(t,b.n_.Query);var n=r&&r.result,o=n&&n.data;o&&(this.previousData=o)}return e.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.executeQuery=function(e){var t,r=this;e.query&&Object.assign(this,{query:e.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=e);var n=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(t=this.result)||void 0===t?void 0:t.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(e){var t;n.subscribe({next:function(e){t=e},error:function(){e(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){e(r.toQueryResult(t))}})})},e.prototype.useQuery=function(e){var t=this;this.renderPromises=(0,i.useContext)((0,p.K)()).renderPromises,this.useOptions(e);var r=this.useObservableQuery(),n=l((0,i.useCallback)(function(){if(t.renderPromises)return function(){};var e=function(){var e=t.result,n=r.getCurrentResult();e&&e.loading===n.loading&&e.networkStatus===n.networkStatus&&(0,f.D)(e.data,n.data)||t.setResult(n)},n=function(i){var s=r.last;o.unsubscribe();try{r.resetLastResults(),o=r.subscribe(e,n)}finally{r.last=s}if(!P.call(i,"graphQLErrors"))throw i;var u=t.result;(!u||u&&u.loading||!(0,f.D)(i,u.error))&&t.setResult({data:u&&u.data,error:i,loading:!1,networkStatus:y.I.error})},o=r.subscribe(e,n);return function(){return setTimeout(function(){return o.unsubscribe()})}},[r,this.renderPromises,this.client.disableNetworkFetches]),function(){return t.getCurrentResult()},function(){return t.getCurrentResult()});return this.unsafeHandlePartialRefetch(n),this.toQueryResult(n)},e.prototype.useOptions=function(t){var r,n=this.createWatchQueryOptions(this.queryHookOptions=t),o=this.watchQueryOptions;!(0,f.D)(n,o)&&(this.watchQueryOptions=n,o&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&!1===this.queryHookOptions.ssr&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var e=[],t=this.client.defaultOptions.watchQuery;return t&&e.push(t),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push((0,m.o)(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(d.J)},e.prototype.createWatchQueryOptions=function(e){void 0===e&&(e={});var t,r=e.skip,o=Object.assign((e.ssr,e.onCompleted,e.onError,e.defaultOptions,(0,n._T)(e,["skip","ssr","onCompleted","onError","defaultOptions"])),{query:this.query});if(this.renderPromises&&("network-only"===o.fetchPolicy||"cache-and-network"===o.fetchPolicy)&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),r){var i=o.fetchPolicy,s=void 0===i?this.getDefaultFetchPolicy():i,u=o.initialFetchPolicy;Object.assign(o,{initialFetchPolicy:void 0===u?s:u,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},e.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(e){},e.prototype.onError=function(e){},e.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,i.useMemo)(function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}},[e]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},e.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e)},e.prototype.handleErrorOrCompleted=function(e){var t=this;if(!e.loading){var r=this.toApolloError(e);Promise.resolve().then(function(){r?t.onError(r):e.data&&t.onCompleted(e.data)}).catch(function(e){__DEV__&&o.kG.warn(e)})}},e.prototype.toApolloError=function(e){return(0,O.O)(e.errors)?new h.cA({graphQLErrors:e.errors}):e.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var r=e.data,o=(e.partial,(0,n._T)(e,["data","partial"]));return this.toQueryResultCache.set(e,t=(0,n.pi)((0,n.pi)((0,n.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&(0,O.O)(e.errors)&&(t.error=new h.cA({graphQLErrors:e.errors})),t},e.prototype.unsafeHandlePartialRefetch=function(e){e.partial&&this.queryHookOptions.partialRefetch&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==this.observable.options.fetchPolicy&&(Object.assign(e,{loading:!0,networkStatus:y.I.refetch}),this.observable.refetch())},e}()}}]);