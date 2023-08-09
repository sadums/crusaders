exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 8937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_profile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711);
/* harmony import */ var _styles_profile_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _postModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6432);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ProfilePosts({ postInfo }) {
    const [showModalState, setShowModalState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            postInfo.preview ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "w-full h-[100%] object-cover z-10 profilePostImg ",
                src: postInfo.preview,
                alt: "Post",
                onClick: ()=>setShowModalState(true)
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: postInfo.title
                })
            }),
            showModalState && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_postModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                postId: postInfo._id,
                handleClose: function() {
                    setShowModalState(false);
                }
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePosts);


/***/ }),

/***/ 711:
/***/ (() => {



/***/ })

};
;