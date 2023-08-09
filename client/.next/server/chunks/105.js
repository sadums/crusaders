"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 5105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6992);
/* harmony import */ var uploader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uploader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6291);
/* harmony import */ var react_uploader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_uploader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function PictureUploader({ pictureState, setPictureState, uploadText }) {
    //We should move this to the process .env file
    //Change the styles for the button to typescript
    const uploader = (0,uploader__WEBPACK_IMPORTED_MODULE_1__.Uploader)({
        apiKey: "public_FW25bUsEgLaLmifCsyAEZMAxaX9j"
    });
    const [isUploaded, setIsUploaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_uploader__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {
        uploader: uploader,
        options: {
            multi: false,
            editor: {
                images: {
                    crop: true,
                    cropRatio: 1.2,
                    cropShape: "rect",
                    preview: true
                }
            }
        },
        onComplete: (files)=>{
            console.log(files[0].originalFile.fileUrl);
            console.log(files);
            setPictureState({
                cropped: files[0].fileUrl,
                original: files[0].originalFile.fileUrl
            });
            setIsUploaded(true);
        },
        children: ({ onClick })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: isUploaded ? "dark:bg-green-600 bg-green-500 hover:bg-green-700 text-black dark:text-white text-sm font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-3" : "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded focus:outline-none focus:shadow-outline mr-3",
                onClick: onClick,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        isUploaded ? "Image Uploaded" : uploadText,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: `${isUploaded ? "block" : "hidden"} h-8 w-8`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                        })
                    ]
                })
            })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PictureUploader);


/***/ })

};
;