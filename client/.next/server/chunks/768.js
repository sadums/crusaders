exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 4904:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9908));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1116));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5091))

/***/ }),

/***/ 5091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ChatBox)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/messages/messagesComponents/theirTextComponent.tsx


function TheirText({ text, date }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-start mt-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[60%]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "border-0 rounded-tl-3xl rounded-tr-3xl leading-tight rounded-bl-none rounded-br-3xl pr-4 pl-4 p-2 bg-green-500 dark:bg-green-700 dark:text-white text-black text-md",
                    children: text
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-start mt-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-xs text-gray-500",
                        children: date ? `${date}` : ""
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const theirTextComponent = (TheirText);

;// CONCATENATED MODULE: ./app/messages/messagesComponents/yourTextComponent.tsx


function YourText({ text, date }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-end mt-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[60%]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "border-0 leading-tight rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-none p-2 pr-4 pl-4 bg-blue-400 dark:bg-blue-700 dark:text-white text-black text-md",
                    children: text
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-end mt-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-xs text-gray-500",
                        children: date ? `${date}` : ""
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const yourTextComponent = (YourText);

;// CONCATENATED MODULE: ./app/messages/messagesComponents/nobodyTextComponent.tsx



function NobodyChat({ firstInfoText, secondInfoText }) {
    const [nobodyChatWelcome, activateNobodyChatWelcome] = (0,react_.useState)(false);
    const [nobodyChatMessage, activateNobodyChatMessage] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        // Redundent if I need to tweak animations
        const timeoutWelcome = setTimeout(()=>{
            activateNobodyChatWelcome(true);
        }, 200);
        const timeoutMessage = setTimeout(()=>{
            activateNobodyChatMessage(true);
        }, 650);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${nobodyChatWelcome ? "w-100 opacity-1 translate-x-0" : "w-0 opacity-0 translate-x-[-20px]"} ease-in-out duration-200`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(theirTextComponent, {
                    date: "",
                    text: firstInfoText
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${nobodyChatMessage ? "w-100 opacity-1 translate-x-0" : "w-0 opacity-0 translate-x-[-20px]"} ease-in-out duration-200`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(theirTextComponent, {
                    date: "",
                    text: secondInfoText
                })
            })
        ]
    });
}
/* harmony default export */ const nobodyTextComponent = (NobodyChat);

;// CONCATENATED MODULE: ./app/messages/messagesComponents/chatHeader.tsx

function ChatHeader({ type, pfp, username, firstname, lastname }) {
    if (type === "none") {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-[full] h-16 bg-black"
        });
    }
    if (type === "user") {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "absolute align-center min-w-[192px] max-w-xs mt-4 ml-4 rounded-xl shadow-2xl dark:notificationShadowPink cursor-pointer dark:bg-opacity-90 bg-opacity-90 bg-darkestWhite dark:bg-darkModeDarkGray p-2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: pfp,
                            className: "h-12 w-12 rounded-full object-cover border-customPurple border-2"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "items-center  align-center h-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-md cursor-pointer text-black font-semibold dark:text-white ml-1",
                                children: `${firstname} ${lastname}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "text-gray-600 dark:text-gray-500 cursor-pointer text-md ml-1 py-2",
                                    "aria-current": "page",
                                    children: [
                                        "@",
                                        username
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const chatHeader = (ChatHeader);

;// CONCATENATED MODULE: ./app/messages/messagesComponents/conversation.tsx





function Conversations({ user, convo, date }) {
    const buildConversation = ()=>{
        const tempFillerData = {
            firstname: "John",
            lastname: "Doe"
        };
        if (!user) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[100%] p-2 overflow-y-scroll friendListMessages pt-20 pb-32 h-[97vh]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(nobodyTextComponent, {
                    firstInfoText: "Welcome to the messaging page!",
                    secondInfoText: "Looks like you aren't currently talking to anyone, select a user to chat with."
                })
            });
        }
        if (!convo[0]) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(chatHeader, {
                        type: "user",
                        pfp: user.pfp,
                        username: user.username,
                        firstname: user.firstName,
                        lastname: user.lastName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[100%] p-2 overflow-y-scroll friendListMessages pt-20 pb-32 h-[97vh]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(nobodyTextComponent, {
                            firstInfoText: "This chat is empty!",
                            secondInfoText: "Select a user to chat with, or send a message."
                        })
                    })
                ]
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(chatHeader, {
                        type: "user",
                        pfp: user.pfp,
                        username: user.username,
                        firstname: tempFillerData.firstname,
                        lastname: tempFillerData.lastname
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[100%] p-2 overflow-y-scroll friendListMessages pt-20 pb-40 h-[97vh]",
                        children: convo.map((text, index)=>{
                            if (text.speaker === true) {
                                return /*#__PURE__*/ jsx_runtime_.jsx(yourTextComponent, {
                                    date: text.date,
                                    text: text.message
                                }, index);
                            }
                            if (text.speaker === false) {
                                return /*#__PURE__*/ jsx_runtime_.jsx(theirTextComponent, {
                                    date: text.date,
                                    text: text.message
                                }, index);
                            }
                        })
                    })
                ]
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: buildConversation()
    });
}
/* harmony default export */ const conversation = (Conversations);

;// CONCATENATED MODULE: ./app/messages/messagesComponents/chatBox.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ChatBox() {
    const [textBox, setTextBox] = (0,react_.useState)(false);
    const [showTextarea, setShowTextarea] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        if (textBox) {
            const timeoutId = setTimeout(()=>{
                setShowTextarea(true);
            }, 200);
            return ()=>{
                clearTimeout(timeoutId);
                setShowTextarea(false);
            };
        }
    }, [
        textBox
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-span-5 border-mainDarkPurple dark:border-mainPurple border-l-2 border-r-2 h-[97vh]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative w-full flex flex-col ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(conversation, {
                        user: {
                            firstName: "",
                            lastName: "",
                            username: "",
                            pfp: ""
                        },
                        convo: [],
                        date: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${textBox ? "hidden" : "block"} absolute bottom-0 flex w-40 p-2 mb-6 ml-4 rounded-xl bg-opacity-90 dark:bg-opacity-90 bg-darkestWhite dark:bg-darkModeDarkGray ease-in-out duration-150 translate`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: ()=>setTextBox(!textBox),
                            className: "z-20 cursor-pointer flex justify-between items-center h-10 px-4 mt-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-lg mr-5 text-white",
                                    children: "Chat"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: " top-2 right-2 w-4 h-4 text-white",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `absolute bottom-0 transition-all duration-100 ease-in-out ${textBox ? "h-40 bg-darkestWhite bg-opacity-80 dark:bg-darkModeDarkGray dark:bg-opacity-80 w-full" : "h-16 bg-transparent dark:bg-opacity-70 bg-opacity-70 w-[80%]"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${textBox ? "block" : "hidden"} transition-all ease-in-out duration-300`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between p-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-black dark:text-white pl-2",
                                    children: "Your Message"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>setTextBox(!textBox),
                                    className: "text-black dark:text-white",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })
                            ]
                        }),
                        showTextarea && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-2 pr-2 pb-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                className: "w-full flex relative transition-all",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        placeholder: "Your Message, 280 max characters",
                                        className: "rounded-lg max-h-28 p-1 w-[80%] min-h-16 h-20 outline-none bg-white dark:bg-darkModeDarkGray text-black dark:text-white text-sm"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "rounded-full bottom-0 mb-0 ml-2 mt-10 h-10 w-10 bg-mainPurple dark:bg-mainPurple flex justify-center items-center hover:scale-110 hover:bg-blue-800 ease-in-out duration-100",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 1.5,
                                            stroke: "currentColor",
                                            className: "w-7 h-7 transform rotate-[-35deg]",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 1116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FriendsList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/friendListItem.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function FriendListItem({ username, firstname, lastname, pfp }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/Messages/${username}`,
        className: "align-center mt-1 shadow-2xl rounded-lg cursor-pointer bg-white dark:bg-darkModeDarkGray p-2 duration-150 ease-in-out scale-95 hover:scale-100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: pfp,
                        className: "h-12 w-12 rounded-full object-cover border-customPurple border-2"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "items-center  align-center h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-md cursor-pointer text-black font-semibold dark:text-white ml-1",
                            children: `${firstname} ${lastname}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                className: "text-gray-500 cursor-pointer text-md ml-1 py-2",
                                "aria-current": "page",
                                children: [
                                    "@",
                                    username
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const friendListItem = (FriendListItem);

// EXTERNAL MODULE: ./app/(utils)/auth.js
var auth = __webpack_require__(4351);
// EXTERNAL MODULE: ./app/GraphQL/queries.js
var queries = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@apollo/client/main.cjs
var main = __webpack_require__(6174);
;// CONCATENATED MODULE: ./app/messages/messagesComponents/friendsList.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function FriendsList() {
    const profile = auth/* default */.Z.getProfile();
    const userId = profile?.data?._id;
    if (!userId) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Error: No user ID found"
        });
    }
    const { error, loading, data } = (0,main.useQuery)(queries/* GET_USER_CHATS */.Rx, {
        variables: {
            userId: userId
        }
    });
    const chats = [];
    try {
        for(const chat in data.getUserChats.chats){
            for(const member in data.getUserChats.chats[chat].members){
                const currentMember = data.getUserChats.chats[chat].members[member];
                if (!(auth/* default */.Z.getProfile().data._id === currentMember._id)) {
                    chats.push({
                        username: currentMember.username,
                        firstname: currentMember.firstName,
                        lastname: currentMember.lastName,
                        id: currentMember._id,
                        pfp: currentMember.pfp
                    });
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: chats.map((friend, index)=>/*#__PURE__*/ jsx_runtime_.jsx(friendListItem, {
                username: friend.username,
                firstname: friend.firstname,
                lastname: friend.lastname,
                pfp: friend.pfp
            }, index))
    });
}


/***/ }),

/***/ 4540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Messages),
  dynamic: () => (/* binding */ dynamic),
  dynamicParams: () => (/* binding */ dynamicParams),
  fetchCache: () => (/* binding */ fetchCache),
  preferredRegion: () => (/* binding */ preferredRegion),
  revalidate: () => (/* binding */ revalidate),
  runtime: () => (/* binding */ runtime)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/(styles)/messages.css
var messages = __webpack_require__(7126);
// EXTERNAL MODULE: ./app/(styles)/homepage.css
var homepage = __webpack_require__(346);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(7814);
;// CONCATENATED MODULE: ./app/components/searchbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Jon\OneDrive\Desktop\Coding\Projects\crusaders\client\app\components\searchbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const searchbar = (__default__);
;// CONCATENATED MODULE: ./app/messages/messagesComponents/friendsList.tsx

const friendsList_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Jon\OneDrive\Desktop\Coding\Projects\crusaders\client\app\messages\messagesComponents\friendsList.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: friendsList_esModule, $$typeof: friendsList_$$typeof } = friendsList_proxy;
const friendsList_default_ = friendsList_proxy.default;


/* harmony default export */ const friendsList = (friendsList_default_);
;// CONCATENATED MODULE: ./app/messages/messagesComponents/chatBox.tsx

const chatBox_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Jon\OneDrive\Desktop\Coding\Projects\crusaders\client\app\messages\messagesComponents\chatBox.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: chatBox_esModule, $$typeof: chatBox_$$typeof } = chatBox_proxy;
const chatBox_default_ = chatBox_proxy.default;


/* harmony default export */ const chatBox = (chatBox_default_);
;// CONCATENATED MODULE: ./app/messages/layout.tsx






const dynamic = "auto", dynamicParams = true, revalidate = Infinity, fetchCache = "auto", runtime = "nodejs", preferredRegion = "auto";
function Messages({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "ml-20 bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-black dark:to-black",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-12 gap-4 h-[97vh]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-2 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark border-r-[2px] dark:border-0 ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-darkestWhite  dark:bg-darkModeDarkestGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-3 h-[97vh] flex-grow-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-col pl-40",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-72 pr-2 mt-16 pl-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "mb-1 font-semibold text-xl dark:text-white text-black",
                                        children: "Find Someone"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(searchbar, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-darkestWhite dark:bg-darkModeDarkestGray rounded-xl p-2 mt-4 flex-column bottom-0 flex-grow-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-2 font-semibold text-xl dark:text-white text-black",
                                        children: "Chats"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overflow-y-scroll h-[73.5vh] friendListMessages",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(friendsList, {})
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(chatBox, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-2"
                })
            ]
        })
    });
}


/***/ }),

/***/ 346:
/***/ (() => {



/***/ }),

/***/ 7126:
/***/ (() => {



/***/ })

};
;