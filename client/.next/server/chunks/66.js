exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 2346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bv: () => (/* binding */ UNLIKE_POST),
/* harmony export */   IY: () => (/* binding */ UPDATE_USER_MUTATION),
/* harmony export */   OU: () => (/* binding */ FOLLOW_USER),
/* harmony export */   ns: () => (/* binding */ ADD_COMMENT_TO_POST),
/* harmony export */   os: () => (/* binding */ ADD_POST),
/* harmony export */   xR: () => (/* binding */ UNFOLLOW_USER),
/* harmony export */   xx: () => (/* binding */ LIKE_POST)
/* harmony export */ });
/* unused harmony exports CREATE_USER_MUTATION, LOGIN_MUTATION, ADD_COMMENT */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6174);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_USER_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
const LOGIN_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
const UPDATE_USER_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UpdateUser($input: UpdateUserInput!, $_id: ID!) {
    editUser(input: $input, _id: $_id) {
      token
      user {
        username
        email
        firstName
        lastName
        bio
        pfp
        followers {
          _id
        }
        following {
          _id
        }
      }
    }
  }
`;
const FOLLOW_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation Mutation($userId: ID!, $followerId: ID!) {
    addFollower(userId: $userId, followerId: $followerId) {
      _id
      followers {
        _id
      }
    }
  }
`;
const UNFOLLOW_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation RemoveFollower($userId: ID!, $followerId: ID!) {
    removeFollower(userId: $userId, followerId: $followerId) {
      user {
        followers {
          _id
        }
      }
    }
  }
`;
const ADD_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation AddPost($userId: ID!, $input: newPostInput!) {
    addPost(userId: $userId, input: $input) {
      _id
      preview
      title
      body
      createdAt
      comments {
        _id
        body
        createdAt
        username
      }
      user {
        _id
        username
        pfp
        firstName
        lastName
      }
      hashtags {
        hashtagText
        category
      }
      likes {
        _id
      }
    }
  }
`;
//Get rid of
const ADD_COMMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation AddComment($username: String!, $body: String!, $postId: String!) {
    addComment(username: $username, body: $body, postId: $postId) {
      _id
      title
      body
      comments {
        username
        body
      }
    }
  }
`;
const ADD_COMMENT_TO_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation AddCommentToPost(
    $username: String!
    $body: String!
    $postId: String!
  ) {
    addComment(username: $username, body: $body, postId: $postId) {
      _id
      body
      title
      createdAt
      comments {
        _id
        body
        createdAt
        username
      }
    }
  }
`;
// export const LIKE_POST = gql`
//   mutation LikePost($postId: String!, $userId: String!, $input: likePostInput!) {
//     likePost(postId: $postId, userId: $userId, input: $input) {
//       user {
//         _id
//         username
//         likes {
//           _id
//           userId
//           postId
//           username
//         }
//       }
//       post {
//         _id
//         title
//         likes {
//           _id
//           userId
//           postId
//           username
//           pfp
//         }
//       }
//     }
//   }
// `;
const LIKE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation LikePost($input: likePostInput, $postId: String!, $userId: String!) {
    likePost(input: $input, postId: $postId, userId: $userId) {
      _id
      user {
        _id
        username
      }
      post {
        _id
        title
        likes {
          _id
        }
      }
      username
      pfp
      firstName
      lastName
      preview
    }
  }
`;
// export const UNLIKE_POST = gql`
//   mutation UnlikePost($postId: String!, $userId: String!) {
//     unlikePost(postId: $postId, userId: $userId) {
//       user {
//         _id
//         username
//         likes {
//           _id
//           userId
//           postId
//           username
//         }
//       }
//       post {
//         _id
//         title
//         likes {
//           _id
//           userId
//           postId
//           username
//           pfp
//         }
//       }
//     }
//   }
// `;
const UNLIKE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UnlikePost($postId: String!, $userId: String!) {
    unlikePost(postId: $postId, userId: $userId) {
      _id
      user {
        _id
      }
      post {
        _id
      }
      username
      pfp
      firstName
      lastName
      preview
    }
  }
`;


/***/ }),

/***/ 7584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LikeFollowerModal = ({ handleClose, users })=>{
    //   const [closeModal, setCloseModal] = useState(false);
    console.log(users);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed z-10 inset-0 overflow-y-auto duration-200 ease-in-out flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 bg-black opacity-90 duration-200 transition-all ease-in-out",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "inline-block align-bottom bg-white dark:bg-coolGray rounded-lg overflow-hidden shadow-xl transform transition-all",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-[24vw]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between border-black pb-2 border-b-[2px] p-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-black text-center text-lg font-semibold dark:text-white",
                                    children: "Likes"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: handleClose,
                                    className: "ml-auto bg-transparent border-0 dark:text-white text-black",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Close"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "h-6 w-6",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M6 18L18 6M6 6l12 12"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-2 overflow-y-scroll max-h-[36vh]",
                            children: users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between border-gray-700 border-b-[1px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-10 w-10 rounded-full object-cover",
                                                    src: user.user.pfp,
                                                    alt: "Your Company"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                            className: "text-black text-md ml-1 dark:text-white",
                                                            children: [
                                                                user.user.firstName,
                                                                " ",
                                                                user.user.lastName
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: "#",
                                                            className: "text-gray-500 text-md ml-1",
                                                            "aria-current": "page",
                                                            children: [
                                                                "@",
                                                                user.user.username
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "my-auto",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: " font-semibold  text-neonBlue p-[1px] pl-2 pr-2 rounded-md",
                                                children: "Follow"
                                            })
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeFollowerModal);


/***/ }),

/***/ 6432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _likeFollowerFollowingModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7584);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GraphQL_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2346);
/* harmony import */ var _GraphQL_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6174);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4351);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const PostModal = ({ postId, handleClose })=>{
    const { loading: postLoading, error: postError, data: postData } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(_GraphQL_queries__WEBPACK_IMPORTED_MODULE_4__/* .GET_POST */ .QI, {
        variables: {
            postId: postId
        }
    });
    //I WILL NEED TO SOME SORT OF WAIT UNTIL THE POST DATA IS UP
    //MAYBE USEEFFECT
    console.log(postId);
    console.log(postData);
    //FIX HOW I SET THIS FOR TYPESCRIPT ECT
    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [likeArrayState, setLikeArrayState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [isPostLikedState, setIsPostLikedState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [commentState, setCommentState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [addComment, { data: commentData, loading: commentLoading, error: commentError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_GraphQL_mutations__WEBPACK_IMPORTED_MODULE_3__/* .ADD_COMMENT_TO_POST */ .ns);
    const [showLikeModalStateFeedPosts, setShowLikeModalStateFeedPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const likeClickHandlerFeedPosts = ()=>{
        if (likeArrayState.length) {
            setShowLikeModalStateFeedPosts(true);
        } else {
            alert(`Post doesn't have any likes`);
        }
    };
    // const [
    //   getUserById,
    //   {
    //     loading: singleUserLoading,
    //     error: singleUserError,
    //     data: singleUserData,
    //   },
    // ] = useLazyQuery(GET_USER_BY_ID, {
    //   variables: { id: "" }, // Initialize with an empty string
    // });
    const [likePost, { loading: likeLoading, error: likeError, data: likeData }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_GraphQL_mutations__WEBPACK_IMPORTED_MODULE_3__/* .LIKE_POST */ .xx);
    const [unlikePost, { data: unlikeData }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_GraphQL_mutations__WEBPACK_IMPORTED_MODULE_3__/* .UNLIKE_POST */ .Bv);
    const [followUser, { data: followData }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_GraphQL_mutations__WEBPACK_IMPORTED_MODULE_3__/* .FOLLOW_USER */ .OU);
    const [unfollowUser, { data: unfollowData }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_GraphQL_mutations__WEBPACK_IMPORTED_MODULE_3__/* .UNFOLLOW_USER */ .xR);
    let isVideo;
    function formatDate(timestamp) {
        let date = new Date(parseInt(timestamp));
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
        return `${month}/${day} ${hour}:${formattedMinute}`;
    }
    const likePostHandler = async ()=>{
        try {
            if (_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.loggedIn()) {
                if (isPostLikedState) {
                    console.log("is liked");
                    const response = await unlikePost({
                        variables: {
                            postId: postId,
                            userId: _utils_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getProfile().data._id
                        }
                    });
                    console.log(postData.getPost.likes);
                    console.log(response.data.unlikePost);
                    setLikeArrayState((prev)=>prev.filter((like)=>like._id !== response.data.unlikePost._id));
                } else {
                    console.log("isnt liked");
                    const response = await likePost({
                        variables: {
                            postId: postId,
                            userId: _utils_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getProfile().data._id
                        }
                    });
                    console.log(postData.getPost.likes);
                    console.log(response.data.likePost);
                    setLikeArrayState((prev)=>[
                            ...prev,
                            response.data.likePost
                        ]);
                }
                setIsPostLikedState((prev)=>!prev);
            } else {
                alert("Sign into like a post");
            }
        } catch (err) {
            console.error(err);
        }
    };
    const postCommentHandler = async (event)=>{
        event.preventDefault();
        try {
            if (_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.loggedIn()) {
                const target = event.target;
                const commentBody = target.form[0].value;
                if (commentBody) {
                    console.log(commentBody);
                    console.log(postId);
                    const response = await addComment({
                        variables: {
                            username: _utils_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getProfile().data.username,
                            body: commentBody,
                            postId: postId
                        }
                    });
                    console.log(response);
                //MAYBE TAKE OUT
                // const newComment = {
                //   username: Auth.getProfile().data.username,
                //   body: commentBody,
                //   createdAt: Date.now().toString(),
                // };
                // setCommentState((prev) => [...prev, newComment]);
                } else {
                    alert("The comment cant be blank");
                }
                target.form[0].value = "";
            } else {
                alert("Sign in to make a comment");
            }
        } catch (err) {
            console.error(err);
        }
    };
    // useEffect(() => {
    //   if (singleUserData) {
    //     console.log(singleUserData.getUserById.likes);
    //     const likedPosts = singleUserData.getUserById.likes.map(
    //       (like: { postId: any }) => {
    //         return like.postId;
    //       }
    //     );
    //     console.log(likedPosts);
    //     setIsPostLikedState(likedPosts.includes(postId));
    //   }
    // }, [singleUserData]);
    // useEffect(() => {
    //   if (Auth.loggedIn()) {
    //     const id = Auth.getProfile().data._id;
    //     getUserById({ variables: { id } }); // Call getUserById inside the useEffect with the correct variables
    //   }
    // }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const setTheState = async ()=>{
            try {
                isVideo = postData.getPost.media.endsWith(".mp4");
                console.log(postData);
                setCommentState(postData.getPost.comments);
                console.log(postData.getPost.likes);
                if (_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.loggedIn()) {
                    const isLiked = postData.getPost.likes.some((like)=>like.user._id === _utils_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getProfile().data._id);
                    console.log(isLiked);
                    setIsPostLikedState(isLiked);
                } else {
                    setIsPostLikedState(false);
                }
                setLikeArrayState(postData.getPost.likes);
            } catch (err) {
                console.error(err);
            }
        };
        if (postData) {
            setTheState();
        }
    }, [
        postData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: postData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed z-50 inset-0 overflow-y-auto duration-200 ease-in-out flex items-center justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-black opacity-90 duration-200 transition-all ease-in-out",
                    "aria-hidden": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "inline-block align-bottom bg-white dark:bg-coolGray rounded-lg overflow-hidden shadow-xl transform transition-all",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between border-gray-700 pb-2 border-b-[1px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                href: `/profile/${postData.getPost.user._id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-10 w-10 rounded-full object-cover",
                                                    src: postData.getPost.user.pfp,
                                                    alt: "Your Company"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "text-black text-lg ml-1 dark:text-white",
                                                        children: `${postData.getPost.user.firstName} ${postData.getPost.user.lastName}`
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#",
                                                        className: "text-gray-500 text-md ml-1",
                                                        "aria-current": "page",
                                                        children: [
                                                            "@",
                                                            postData.getPost.user.username
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: handleClose,
                                        className: "ml-auto bg-transparent border-0 dark:text-white text-black",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Close"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "h-6 w-6",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M6 18L18 6M6 6l12 12"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "border-gray-700 pb-2 border-b-[1px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-2xl mt-2 text-center text-black dark:text-white ",
                                        children: postData.getPost.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "mt-2 text-black dark:text-white",
                                        children: postData.getPost.body
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "",
                                        children: postData.getPost.hashtags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-gray-500",
                                                children: [
                                                    "#",
                                                    tag.hashtagText
                                                ]
                                            }, index))
                                    }),
                                    isVideo ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                        className: "w-[100%] max-h-[50vh] max-w-[55vw] mt-2 border-[1px] border-gray-600 rounded-xl",
                                        controls: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                src: postData.getPost.media,
                                                type: "video/mp4"
                                            }),
                                            "Your browser does not support the video tag."
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: postData.getPost.media,
                                        className: "w-auto max-h-[50vh] max-w-[55vw] object-contain mt-2 border-[1px] border-gray-600 rounded-xl"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${showComments ? "h-46 scale-100" : " h-0 scale-0"} transition-all duration-400 ease-in-out`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        className: `${showComments ? "scale-100" : "scale-0"} ease-in transition-all duration-200 border-black pb-2 border-b-[2px]`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    placeholder: "Leave a comment, (200 characters max)",
                                                    className: "bg-transparent border-solid border-customPurple text-black dark:text-white border-[1px] outline-none w-[75%] h-16 max-h-16"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "ml-2 mr-2 px-4 py-2 mt-2 border border-customPurple rounded-md h-10 self-end shadow-sm text-sm font-medium text-black dark:text-white bg-transparent hover:bg-indigo-700 transition duration-300 hover:scale-105",
                                                    onClick: (event)=>postCommentHandler(event),
                                                    children: "Comment"
                                                })
                                            ]
                                        })
                                    }),
                                    commentState && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mt-2 border-[2px] h-36 max-w-[40vw] rounded-xl overflow-y-scroll p-2 border-black",
                                        children: commentState.map((comment, commentIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between border-gray-700 pb-2 border-b-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "dark:text-white transition-all duration-500 ease-in-out w-[75%] text-black self-end",
                                                        children: comment.body
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: formatDate(comment.createdAt)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "dark:text-white transition-all duration-500 ease-in-out text-black cursor-pointer self-end",
                                                        children: [
                                                            "-",
                                                            comment.username
                                                        ]
                                                    })
                                                ]
                                            }, commentIndex))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                type: "button",
                                                className: "rounded-full p-1 text-customPurpleDark dark:text-white ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Like"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        onClick: ()=>likePostHandler(),
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: isPostLikedState ? "red" : "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: 1.5,
                                                        stroke: "currentColor",
                                                        className: "w-7 h-7",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "text-gray-700 text-sm dark:text-gray-500 cursor-pointer mr-2",
                                                onClick: likeClickHandlerFeedPosts,
                                                children: likeArrayState ? `${likeArrayState.length} Likes` : "0 Likes"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>setShowComments((prev)=>!prev),
                                                className: " text-blue-500 hover:text-blue-700",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Comment"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: 1.5,
                                                        stroke: "currentColor",
                                                        className: "w-7 h-7",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>setShowComments((prev)=>!prev),
                                                className: "text-gray-700 text-sm dark:text-gray-500 cursor-pointer mr-2",
                                                children: commentState ? commentState.length : "0"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                type: "button",
                                                className: "rounded-full mr-2 p-1 text-customPurpleDark dark:text-white",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Share"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: 1.5,
                                                        stroke: "currentColor",
                                                        className: "w-7 h-7",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "mt-1 text-black dark:text-white",
                                        children: [
                                            "Posted on: ",
                                            formatDate(postData.getPost.createdAt)
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                showLikeModalStateFeedPosts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_likeFollowerFollowingModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    handleClose: function() {
                        setShowLikeModalStateFeedPosts(false);
                    },
                    users: likeArrayState
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostModal);


/***/ }),

/***/ 6577:
/***/ (() => {



/***/ })

};
;