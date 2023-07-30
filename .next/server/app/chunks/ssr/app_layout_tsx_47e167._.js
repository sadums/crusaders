(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_layout_tsx_47e167._.js", {

"[project]/app/user/signup/page.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SignUpModal = ({ setIsSignUpModalOpen })=>{
    const handleSignUp = async (event)=>{
        event.preventDefault();
        const target = event.target;
        const usernameValue = target.form[0].value;
        const emailValue = target.form[1].value;
        const passwordValue = target.form[2].value;
        const confirmPasswordValue = target.form[3].value;
        try {
            if (usernameValue && emailValue && passwordValue && confirmPasswordValue) {
                console.log(usernameValue);
                console.log(emailValue);
                if (passwordValue === confirmPasswordValue) {
                    console.log(passwordValue);
                    console.log(confirmPasswordValue);
                } else {
                    alert("Passwords don't match");
                }
            } else {
                alert("Please fill out all fields");
            }
        } catch (err) {
            console.error(err);
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 sign-up-modal",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
            className: "bg-white rounded-lg p-8 w-96",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Sign Up"
                }, void 0, false, {
                    fileName: "<[project]/app/user/signup/page.tsx>",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                            htmlFor: "username",
                            className: "block font-medium mb-1",
                            children: "Username"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            type: "text",
                            id: "username",
                            className: "w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signup/page.tsx>",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                            htmlFor: "email",
                            className: "block font-medium mb-1",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            id: "email",
                            className: "w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signup/page.tsx>",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                            htmlFor: "password",
                            className: "block font-medium mb-1",
                            children: "Password"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            type: "password",
                            id: "password",
                            className: "w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signup/page.tsx>",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                            htmlFor: "password",
                            className: "block font-medium mb-1",
                            children: "Confirm Password"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            type: "password",
                            id: "password",
                            className: "w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signup/page.tsx>",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-end",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "mr-2 px-4 py-2 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100",
                            onClick: ()=>setIsSignUpModalOpen(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: "px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",
                            onClick: handleSignUp,
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signup/page.tsx>",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signup/page.tsx>",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/user/signup/page.tsx>",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/user/signup/page.tsx>",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SignUpModal;

})()),
"[project]/app/user/signin/page.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SignInModal = ({ setIsSignInModalOpen })=>{
    const handleSignIn = async (event)=>{
        event.preventDefault();
        const target = event.target;
        const usernameValue = target.form[0].value;
        const passwordValue = target.form[1].value;
        try {
            if (usernameValue && passwordValue) {
                console.log(usernameValue);
                console.log(passwordValue);
            } else {
                alert("Please fill out both fields");
            }
        } catch (err) {
            console.error(err);
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 sign-in-modal",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
            className: "bg-white rounded-lg p-8 w-96",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Sign In"
                }, void 0, false, {
                    fileName: "<[project]/app/user/signin/page.tsx>",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                            htmlFor: "username",
                            className: "block font-medium mb-1",
                            children: "Username"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signin/page.tsx>",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            type: "text",
                            id: "username",
                            className: "w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signin/page.tsx>",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signin/page.tsx>",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                            htmlFor: "password",
                            className: "block font-medium mb-1",
                            children: "Password"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signin/page.tsx>",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            type: "password",
                            id: "password",
                            className: "w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signin/page.tsx>",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signin/page.tsx>",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-end",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "mr-2 px-4 py-2 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100",
                            onClick: ()=>setIsSignInModalOpen(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signin/page.tsx>",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: "px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",
                            onClick: handleSignIn,
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "<[project]/app/user/signin/page.tsx>",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/user/signin/page.tsx>",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/user/signin/page.tsx>",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/user/signin/page.tsx>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SignInModal;

})()),
"[project]/app/(components)/footer.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Footer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function Footer() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("footer", {
        className: "w-full dark:bg-neutral-900 p-8",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 dark:bg-neutral-900 text-center md:justify-between",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                        src: "/logo.svg",
                        alt: "logo-ct",
                        className: "w-24"
                    }, void 0, false, {
                        fileName: "<[project]/app/(components)/footer.tsx>",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                        className: "flex flex-wrap items-center gap-y-2 gap-x-8",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                    href: "#",
                                    className: "font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/footer.tsx>",
                                    lineNumber: 9,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/footer.tsx>",
                                lineNumber: 8,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                    href: "#",
                                    className: "font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100",
                                    children: "License"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/footer.tsx>",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/footer.tsx>",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                    href: "#",
                                    className: "font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100",
                                    children: "Contribute"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/footer.tsx>",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/footer.tsx>",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                    href: "#",
                                    className: "font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/footer.tsx>",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/footer.tsx>",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/(components)/footer.tsx>",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/(components)/footer.tsx>",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("hr", {
                className: "my-8 border-blue-gray-50"
            }, void 0, false, {
                fileName: "<[project]/app/(components)/footer.tsx>",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: "font-normal transition-colors text-gray-500 hover:text-white dark:hover:text-white focus:text-gray-600 w-fit",
                children: "\xa9 2023 The Fellas"
            }, void 0, false, {
                fileName: "<[project]/app/(components)/footer.tsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/(components)/footer.tsx>",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/(components)/navbar.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const Navbar = ({ setIsSignInModalOpen, setIsSignUpModalOpen })=>{
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [flyer, setFlyer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [flyerTwo, setFlyerTwo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const signUpButtonHandler = ()=>{
        console.log("SIGN UP");
        setIsSignUpModalOpen(true);
    };
    const signInButtonHandler = ()=>{
        console.log("SIGN IN");
        setIsSignInModalOpen(true);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "relative dark:bg-neutral-900",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-between items-center border-b-2 dark:border-neutral-800 py-6 md:justify-start md:space-x-10",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-start items-center space-x-6 lg:w-0 lg:flex-1",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "#",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "sr-only",
                                                children: "Workflow"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                className: "h-10 w-auto sm:h-16 dark:hover:fill-white",
                                                src: "/logo.svg",
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "#",
                                        className: "font-lg text-gray-600 dark:text-gray-500 transition duration-500 text-3xl font-mono hover:text-gray-700 dark:hover:text-white",
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "-mr-2 -my-2 md:hidden",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    type: "button",
                                    className: "dark:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                                    onClick: ()=>setOpen(!open),
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "sr-only",
                                            children: "Open menu"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                            className: "h-6 w-6",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            "aria-hidden": "true",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
                                className: "hidden md:flex space-x-10",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "relative",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: "group dark:bg-neutral-900 rounded-md text-gray-500 inline-flex items-center text-base font-medium transition hover:scale-105 duration-500 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",
                                                onClick: ()=>(setFlyer(!flyer), setFlyerTwo(false)),
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: "Solutions"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                        className: flyer === true ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200" : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        "aria-hidden": "true",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                            fillRule: "evenodd",
                                                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onMouseLeave: ()=>setFlyer(false),
                                                className: flyer ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "relative grid gap-6 dark:bg-neutral-900 px-5 py-6 sm:gap-8 sm:p-8",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-start rounded-lg transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 142,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 134,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-900 dark:text-gray-500",
                                                                                    children: "Analytics"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 150,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Get a better understanding of where your traffic is coming from."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 153,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 149,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 129,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-start rounded-lg transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 172,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 164,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Engagement"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Speak directly to your customers in a more meaningful way."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 183,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 179,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 159,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-start rounded-lg transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 202,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 194,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Security"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 210,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Your customers' data will be safe and secure."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 213,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 209,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 189,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-start rounded-lg transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 231,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 223,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Integrations"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 239,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Connect with third-party tools that you're already using."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 242,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 238,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 218,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-start rounded-lg transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 261,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 253,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Automations"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 269,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Build strategic funnels that will drive your customers to convert"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 272,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 268,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 248,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 dark:bg-neutral-900",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "flow-root",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                        href: "#",
                                                                        className: "-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 dark:text-gray-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition hover:scale-105 duration-500",
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                                className: "flex-shrink-0 h-6 w-6 text-gray-400",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                "aria-hidden": "true",
                                                                                children: [
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                        lineNumber: 294,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                        lineNumber: 300,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 286,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                className: "ml-3",
                                                                                children: "Watch Demo"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 307,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                        lineNumber: 281,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 280,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "flow-root",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                        href: "#",
                                                                        className: "-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 dark:text-gray-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition hover:scale-105 duration-500",
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                                className: "flex-shrink-0 h-6 w-6 text-gray-400",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                "aria-hidden": "true",
                                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 324,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 316,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                className: "ml-3",
                                                                                children: "Contact Sales"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 331,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                        lineNumber: 311,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 310,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 279,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "#",
                                        className: "text-base font-medium text-gray-500 transition hover:scale-105 duration-500 hover:text-gray-900 dark:hover:text-white",
                                        children: "Pricing"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "#",
                                        className: "text-base font-medium text-gray-500 transition hover:scale-105 duration-500 hover:text-gray-900 dark:hover:text-white",
                                        children: "Docs"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "relative",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: "group dark:bg-neutral-900 rounded-md text-gray-500 inline-flex items-center text-base font-medium transition hover:scale-105 duration-500 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",
                                                onClick: ()=>(setFlyerTwo(!flyerTwo), setFlyer(false)),
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: "More"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                        className: flyerTwo === true ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200" : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        "aria-hidden": "true",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                            fillRule: "evenodd",
                                                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                        lineNumber: 364,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onMouseLeave: ()=>setFlyerTwo(false),
                                                className: flyerTwo ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "relative grid gap-6 dark:bg-neutral-900 px-5 py-6 sm:gap-8 sm:p-8",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 415,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 407,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Help Center"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 423,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Get all of your questions answered in our forums or contact support."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 426,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 422,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 402,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 445,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 437,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Guides"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 453,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Learn how to maximize our platform to get the most out of it."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 456,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 452,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 432,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 475,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 467,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Events"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 483,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "See what meet-ups and other events we might be planning near you."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 486,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 482,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 462,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                    href: "#",
                                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            "aria-hidden": "true",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 505,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 497,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "ml-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "text-base font-medium text-gray-500",
                                                                                    children: "Security"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 513,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "mt-1 text-sm text-gray-500",
                                                                                    children: "Understand how we take your privacy seriously."
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 516,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 512,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 492,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 401,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "px-5 py-5 bg-gray-50 sm:px-8 sm:py-8 dark:bg-neutral-900",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                                            className: "text-sm tracking-wide font-medium text-gray-500 uppercase",
                                                                            children: "Recent Posts"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 524,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                                            className: "mt-4 space-y-4",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                                    className: "text-base truncate",
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                                        href: "#",
                                                                                        className: "font-medium text-gray-500 hover:text-white transition duration-500 hover:scale-105",
                                                                                        children: "Boost your conversion rate"
                                                                                    }, void 0, false, {
                                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                        lineNumber: 529,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 528,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                                    className: "text-base truncate",
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                                        href: "#",
                                                                                        className: "font-medium text-gray-500 hover:text-white transition duration-500 hover:scale-105",
                                                                                        children: "How to use search engine optimization to drive traffic to your site"
                                                                                    }, void 0, false, {
                                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                        lineNumber: 537,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 536,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                                    className: "text-base truncate",
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                                        href: "#",
                                                                                        className: "font-medium text-gray-500 hover:text-white transition duration-500 hover:scale-105",
                                                                                        children: "Improve your customer experience"
                                                                                    }, void 0, false, {
                                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                        lineNumber: 546,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                    lineNumber: 545,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                            lineNumber: 527,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 523,
                                                                    columnNumber: 23
                                                                }, this),
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "mt-5 text-sm",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                        href: "#",
                                                                        className: "font-medium text-indigo-600 transition duration-500 hover:text-indigo-500 hover:scale-105",
                                                                        children: [
                                                                            " ",
                                                                            "View all posts ",
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                "aria-hidden": "true",
                                                                                children: "→"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                                lineNumber: 561,
                                                                                columnNumber: 42
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                        lineNumber: 556,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                    lineNumber: 555,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 522,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "hidden md:flex items-center justify-end md:flex-1 lg:w-0",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "whitespace-nowrap text-base font-medium text-gray-500 transition hover:scale-105 duration-500 hover:text-gray-900 dark:hover:text-white",
                                        onClick: signInButtonHandler,
                                        children: "Sign in"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105",
                                        onClick: signUpButtonHandler,
                                        children: "Sign up"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 576,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/(components)/navbar.tsx>",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/(components)/navbar.tsx>",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: open ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden" : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-900 divide-y-2 divide-gray-50 bg-neutral-100",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "pt-5 pb-6 px-5",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                        className: "h-8 w-auto",
                                                        src: "/logo.svg",
                                                        alt: "Workflow"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                        lineNumber: 607,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                        className: "font-lg text-gray-600 dark:text-gray-500 text-3xl font-mono",
                                                        children: "Title"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                        lineNumber: 608,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "-mr-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    type: "button",
                                                    className: "dark:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-300",
                                                    onClick: ()=>setOpen(!open),
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "sr-only",
                                                            children: "Close menu"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 618,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            className: "h-6 w-6",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            "aria-hidden": "true",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M6 18L18 6M6 6l12 12"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                lineNumber: 628,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 620,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 613,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mt-6",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
                                            className: "grid gap-y-8",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    href: "#",
                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            "aria-hidden": "true",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                lineNumber: 653,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 645,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "ml-3 text-base font-medium text-gray-500",
                                                            children: "Analytics"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 660,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    href: "#",
                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            "aria-hidden": "true",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                lineNumber: 677,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 669,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "ml-3 text-base font-medium text-gray-500",
                                                            children: "Engagement"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 684,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 664,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    href: "#",
                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            "aria-hidden": "true",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                lineNumber: 701,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 693,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "ml-3 text-base font-medium text-gray-500",
                                                            children: "Security"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 708,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    href: "#",
                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            "aria-hidden": "true",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                lineNumber: 725,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 717,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "ml-3 text-base font-medium text-gray-500",
                                                            children: "Integrations"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 732,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    href: "#",
                                                    className: "-m-3 p-3 flex items-center rounded-md transition hover:scale-105 duration-500 hover:bg-gray-50 dark:hover:bg-neutral-800",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            className: "flex-shrink-0 h-6 w-6 text-indigo-600",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            "aria-hidden": "true",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                                lineNumber: 749,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 741,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "ml-3 text-base font-medium text-gray-500",
                                                            children: "Automations"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                                            lineNumber: 756,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/(components)/navbar.tsx>",
                                                    lineNumber: 736,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/(components)/navbar.tsx>",
                                            lineNumber: 639,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                lineNumber: 604,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "py-6 px-5 space-y-6",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "grid grid-cols-2 gap-y-4 gap-x-8",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Pricing"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 765,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Docs"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 771,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Enterprise"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 777,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 783,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Help Center"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 789,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Guides"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 795,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 801,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: "#",
                                                className: "text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-white transition duration-300",
                                                children: "Events"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 764,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 transition duration-300 hover:bg-indigo-700",
                                                children: "Sign up"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 815,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "mt-6 text-center text-base font-medium text-gray-500",
                                                children: [
                                                    "Existing customer?\xa0",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        className: "text-indigo-600 hover:text-indigo-500 transition duration-300",
                                                        children: "Sign in"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                                        lineNumber: 820,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                                lineNumber: 818,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/(components)/navbar.tsx>",
                                        lineNumber: 814,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/(components)/navbar.tsx>",
                                lineNumber: 763,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/(components)/navbar.tsx>",
                        lineNumber: 603,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/(components)/navbar.tsx>",
                    lineNumber: 596,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/(components)/navbar.tsx>",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Navbar;

})()),
"[project]/app/layout.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_59dee874.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$navbar$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(components)/navbar.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$footer$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(components)/footer.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$signin$2f$page$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/user/signin/page.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$signup$2f$page$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/user/signup/page.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
"use client";
;
;
;
;
;
;
;
const metadata = {
    title: "Social Media",
    description: ""
};
function RootLayout({ children }) {
    const [isSignInModalOpen, setIsSignInModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("html", {
        lang: "en",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$28$ecmascript$29$__["default"].className,
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$navbar$2e$tsx__$28$ecmascript$29$__["default"], {
                    setIsSignInModalOpen: setIsSignInModalOpen,
                    setIsSignUpModalOpen: setIsSignUpModalOpen
                }, void 0, false, {
                    fileName: "<[project]/app/layout.tsx>",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                children,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    children: "HOME"
                }, void 0, false, {
                    fileName: "<[project]/app/layout.tsx>",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$footer$2e$tsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/app/layout.tsx>",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                isSignUpModalOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$signup$2f$page$2e$tsx__$28$ecmascript$29$__["default"], {
                    setIsSignUpModalOpen: setIsSignUpModalOpen
                }, void 0, false, {
                    fileName: "<[project]/app/layout.tsx>",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                isSignInModalOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$signin$2f$page$2e$tsx__$28$ecmascript$29$__["default"], {
                    setIsSignInModalOpen: setIsSignInModalOpen
                }, void 0, false, {
                    fileName: "<[project]/app/layout.tsx>",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/layout.tsx>",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/layout.tsx>",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_layout_tsx_47e167._.js.map