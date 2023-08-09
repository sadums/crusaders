"use strict";
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 3625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ profileSideInfo)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/(styles)/profile.css
var profile = __webpack_require__(711);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/components/pictureUploader.tsx
var pictureUploader = __webpack_require__(5105);
// EXTERNAL MODULE: ./node_modules/@apollo/client/main.cjs
var main = __webpack_require__(6174);
// EXTERNAL MODULE: ./app/GraphQL/mutations.js
var mutations = __webpack_require__(2346);
// EXTERNAL MODULE: ./app/(utils)/auth.js
var auth = __webpack_require__(4351);
;// CONCATENATED MODULE: ./app/components/profile/editProfile.tsx







//MAKE THE FORM CLEAR AUTO MATICALLY AND RESET THE PICTURE STATE
const EditProfile = ({ setUserData })=>{
    const [updateUserMutation, { loading, error, data }] = (0,main.useMutation)(mutations/* UPDATE_USER_MUTATION */.IY);
    const [pictureState, setPictureState] = (0,react_.useState)({
        cropped: "",
        original: ""
    });
    const handleSetPictureState = (url)=>{
        setPictureState(url);
    };
    const updateUserHandler = async (event)=>{
        event.preventDefault();
        try {
            const target = event.target;
            console.log([
                target.form
            ]);
            const updateUserData = {
                ...target.form[0].value ? {
                    username: target.form[0].value
                } : {},
                ...target.form[1].value ? {
                    firstName: target.form[1].value
                } : {},
                ...target.form[2].value ? {
                    lastName: target.form[2].value
                } : {},
                ...target.form[3].value ? {
                    bio: target.form[3].value
                } : {},
                ...pictureState.cropped ? {
                    pfp: pictureState.cropped
                } : {}
            };
            console.log(updateUserData);
            const id = auth/* default */.Z.getProfile().data._id;
            console.log(id);
            const response = await updateUserMutation({
                variables: {
                    input: updateUserData,
                    _id: id
                }
            });
            setUserData(response.data.editUser.user);
        } catch (err) {
            console.error(err);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center mt-16 pt-2 shadow-2xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: "bg-darkModeDarkGray rounded-lg shadow-md p-2 w-72 mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "username",
                            className: "block text-sm font-semibold dark:text-gray-400 text-gray-700",
                            children: "Change Username"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "username",
                            name: "username",
                            className: "mt-1 p-2 w-full border rounded-md text-black",
                            placeholder: "Username"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "block text-sm font-semibold dark:text-gray-400 text-gray-700",
                            children: "Change Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            name: "first-name",
                            className: "mt-1 p-2 w-full border rounded-md text-black",
                            placeholder: "Last Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            name: "last-name",
                            className: "mt-1 p-2 w-full border rounded-md text-black",
                            placeholder: "First Name"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "bio",
                            className: "block text-sm font-semibold dark:text-gray-400 text-gray-700",
                            children: "Change Bio"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "bio",
                            name: "bio",
                            className: "mt-1 p-2 w-full border rounded-md text-black",
                            placeholder: "Bio"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(pictureUploader/* default */.Z, {
                    pictureState: pictureState,
                    setPictureState: handleSetPictureState,
                    uploadText: "Upload a pfp"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: updateUserHandler,
                        type: "submit",
                        className: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",
                        children: "Submit"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const editProfile = (EditProfile);

;// CONCATENATED MODULE: ./app/components/profile/profileSideInfo.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ProfileSideInfo({ userInfo }) {
    const [userData, setUserData] = (0,react_.useState)(userInfo);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: auth/* default */.Z.loggedIn() && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: auth/* default */.Z.getProfile().data._id === userData._id && /*#__PURE__*/ jsx_runtime_.jsx(editProfile, {
                setUserData: setUserData
            })
        })
    });
}
/* harmony default export */ const profileSideInfo = (ProfileSideInfo);


/***/ })

};
;