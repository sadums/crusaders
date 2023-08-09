"use strict";
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 4351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9613);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

class AuthService {
    isClientSide() {
        return "undefined" !== "undefined";
    }
    getProfile() {
        const token = this.getToken();
        if (token) {
            try {
                return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
            } catch (error) {
                console.error("Error decoding the token:", error);
                return null;
            }
        }
        return null;
    }
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
    isTokenExpired(token) {
        try {
            const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }
    getToken() {
        if (this.isClientSide()) {
            return localStorage.getItem("id_token");
        }
        return null;
    }
    login(idToken) {
        if (this.isClientSide()) {
            localStorage.setItem("id_token", idToken);
            window.location.assign("/");
        }
    }
    logout() {
        if (this.isClientSide()) {
            localStorage.removeItem("id_token");
            window.location.assign("/");
        }
    }
}
const authService = new AuthService();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authService);


/***/ }),

/***/ 7462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L5: () => (/* binding */ GET_USER_BY_ID),
/* harmony export */   Nw: () => (/* binding */ GET_ALL_POSTS),
/* harmony export */   QI: () => (/* binding */ GET_POST),
/* harmony export */   Rx: () => (/* binding */ GET_USER_CHATS),
/* harmony export */   hl: () => (/* binding */ GET_ALL_FOLLOWERS)
/* harmony export */ });
/* unused harmony exports GET_CHAT_BY_ID, GET_ALL_USERS, GET_LOGGED_IN_USER */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6174);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

// export const GET_POST = gql`
//   query GetPost($postId: ID!) {
//     getPost(postId: $postId) {
//       _id
//       preview
//       media
//       title
//       body
//       createdAt
//       likes {
//         _id
//         userId
//         postId
//         username
//         pfp
//         firstName
//         lastName
//         preview
//       }
//       comments {
//         _id
//         body
//         username
//         createdAt
//       }
//       hashtags {
//         hashtagText
//         category
//       }
//     }
//   }
// `;
const GET_USER_CHATS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query Query($userId: ID!) {
    getUserChats(userId: $userId) {
      _id
      username
      chats {
        _id
        members {
          _id
          username
          pfp
          firstName
          lastName
        }
        messages {
          userId
          createdAt
          body
          _id
        }
      }
    }
  }
`;
const GET_CHAT_BY_ID = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query Query($chatId: ID!) {
    getChatById(chatId: $chatId) {
      members {
        _id
        username
      }
      createdAt
      messages {
        body
        createdAt
        userId
        _id
      }
    }
  }
`;
const GET_ALL_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetAllPosts {
    getAllPosts {
      _id
      preview
      title
      body
      createdAt
      comments {
        _id
        body
        username
        createdAt
      }
      user {
        _id
        pfp
        firstName
        lastName
        username
        email
        followers{
          _id
        }
      }
      likes {
        _id
        user {
          _id
          pfp
          firstName
          lastName
          username
        }
        post {
          _id
          preview
        }
      }
      hashtags {
        hashtagText
        category
      }
    }
  }
`;
const GET_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      _id
      preview
      media
      title
      body
      createdAt
      comments {
        _id
        body
        username
        createdAt
      }
      user {
        _id
        pfp
        firstName
        lastName
        username
        email
      }
      likes {
        _id
        user {
          _id
          pfp
          firstName
          lastName
          username
        }
        post {
          _id
          preview
        }
      }
      hashtags {
        hashtagText
        category
      }
    }
  }
`;
const GET_ALL_USERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetAllUsers {
    getAllUsers {
      _id
      username
      firstName
      lastName
      pfp
      posts {
        _id
        title
        preview
        body
        hashtags {
          hashtagText
          category
        }
        likes {
          _id
          username
          pfp
          firstName
          lastName
          preview
        }
        comments {
          _id
          body
          username
          createdAt
        }
        createdAt
      }
      followers {
        _id
      }
      following {
        _id
      }
    }
  }
`;
const GET_ALL_FOLLOWERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetAllUsers {
    getAllUsers {
      _id
      username
      pfp
    }
  }
`;
//MAYBE DELETE
const GET_LOGGED_IN_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetLoggedInUser {
    getLoggedInUser {
      _id
      username
      firstName
      lastName
      bio
      pfp
      email
      posts {
        _id
        title
        preview
      }
      followers {
        _id
      }
      following {
        _id
      }
    }
  }
`;
// export const GET_USER_BY_ID = gql`
//   query GetUserById($id: ID!) {
//     getUserById(input: $id) {
//       _id
//       username
//       firstName
//       lastName
//       bio
//       pfp
//       email
//       posts {
//         _id
//         title
//         preview
//       }
//       likes {
//         _id
//         userId
//         postId
//         username
//         pfp
//         firstName
//         lastName
//         preview
//       }
//       followers {
//         _id
//       }
//       following {
//         _id
//       }
//     }
//   }
// `;
const GET_USER_BY_ID = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetUserById($userId: ID!) {
    getUserById(userId: $userId) {
      _id
      username
      firstName
      lastName
      bio
      pfp
      email
      posts {
        _id
        title
        body
        preview
        user {
          _id
          username
          email
        }
      }
      likes {
        _id
        post {
          _id
          preview
        }
      }
      followers {
        _id
      }
      following {
        _id
      }
    }
  }
`;


/***/ })

};
;