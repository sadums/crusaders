exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 6268:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5352))

/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8262, 23))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ app_BodyContent)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@apollo/client/main.cjs
var main = __webpack_require__(6174);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/utilities.cjs
var utilities = __webpack_require__(9223);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/subscriptions/subscriptions.cjs
var subscriptions = __webpack_require__(2267);
// EXTERNAL MODULE: ./node_modules/graphql-ws/lib/client.mjs + 2 modules
var client = __webpack_require__(6915);
;// CONCATENATED MODULE: ./app/apollo-client.js
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { createClient } from 'graphql-ws';
// const wsLink = new GraphQLWsLink(createClient({
//   url: 'ws://localhost:5500/graphql',
// }));
// const client = new ApolloClient({
//     uri: "http://localhost:5500",
//     cache: new InMemoryCache(),
// });
// export default client;





const httpLink = new main.HttpLink({
    uri: "http://localhost:5500/graphql"
});
const wsLink = new subscriptions/* GraphQLWsLink */.g((0,client/* createClient */.eI)({
    url: "ws://localhost:5500/graphql"
}));
// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = (0,main.split)(({ query })=>{
    const definition = (0,utilities.getMainDefinition)(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
}, wsLink, httpLink);
const apollo_client_client = new main.ApolloClient({
    link: splitLink,
    cache: new main.InMemoryCache()
});
/* harmony default export */ const apollo_client = (apollo_client_client);

// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(7454);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/loading.tsx

const dynamic = "auto", dynamicParams = true, revalidate = (/* unused pure expression or super */ null && (Infinity)), fetchCache = "auto", runtime = "nodejs", preferredRegion = "auto";
function Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-[100%]"
    });
}

;// CONCATENATED MODULE: ./app/BodyContent.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Sidebar = app_dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "C:\\Users\\Jon\\OneDrive\\Desktop\\Coding\\Projects\\crusaders\\client\\app\\BodyContent.tsx -> " + "../app/components/sidebar"
        ]
    },
    ssr: false
});
function BodyContent({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(main.ApolloProvider, {
        client: apollo_client,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Suspense, {
                fallback: /*#__PURE__*/ jsx_runtime_.jsx(Loading, {}),
                children: children
            })
        ]
    });
}
/* harmony default export */ const app_BodyContent = (BodyContent);


/***/ }),

/***/ 5417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout),
  dynamicParams: () => (/* binding */ dynamicParams),
  fetchCache: () => (/* binding */ fetchCache),
  preferredRegion: () => (/* binding */ preferredRegion),
  revalidate: () => (/* binding */ revalidate),
  runtime: () => (/* binding */ runtime)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(7814);
;// CONCATENATED MODULE: ./app/BodyContent.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Jon\OneDrive\Desktop\Coding\Projects\crusaders\client\app\BodyContent.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const BodyContent = (__default__);
;// CONCATENATED MODULE: ./app/layout.tsx



const dynamicParams = true, revalidate = Infinity, fetchCache = "auto", runtime = "nodejs", preferredRegion = "auto";
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Manrope&family=Wallpoet&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: "border-coolGray",
                children: /*#__PURE__*/ jsx_runtime_.jsx(BodyContent, {
                    children: children
                })
            })
        ]
    });
}
/* harmony default export */ const layout = (RootLayout);


/***/ }),

/***/ 1802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading),
/* harmony export */   dynamic: () => (/* binding */ dynamic),
/* harmony export */   dynamicParams: () => (/* binding */ dynamicParams),
/* harmony export */   fetchCache: () => (/* binding */ fetchCache),
/* harmony export */   preferredRegion: () => (/* binding */ preferredRegion),
/* harmony export */   revalidate: () => (/* binding */ revalidate),
/* harmony export */   runtime: () => (/* binding */ runtime)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const dynamic = "auto", dynamicParams = true, revalidate = Infinity, fetchCache = "auto", runtime = "nodejs", preferredRegion = "auto";
function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[100%]"
    });
}


/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;