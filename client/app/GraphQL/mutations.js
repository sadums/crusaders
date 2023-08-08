import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
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

export const LOGIN_MUTATION = gql`
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

export const UPDATE_USER_MUTATION = gql`
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

export const FOLLOW_USER = gql`
  mutation AddFollower($userId: ID!, $followerId: ID!){
    addFollower(userId: $userId, followerId: $followerId){
      user{
        followers{
          _id
        }
      }
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation AddFollower($userId: ID!, $followerId: ID!){
    addFollower(userId: $userId, followerId: $followerId){
      followers{
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($userId: ID!, $input: newPostInput!) {
    addPost(userId: $userId, input: $input) {
      _id
      media
      title
      body
      createdAt
      hashtags {
        hashtagText
        category
      }
      user {
        _id
        username
        pfp
        firstName
        lastName
      }
    }
  }
`;


//Get rid of
export const ADD_COMMENT = gql`
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


export const ADD_COMMENT_TO_POST = gql`
  mutation AddCommentToPost($username: String!, $body: String!, $postId: String!) {
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

export const LIKE_POST = gql`
  mutation LikePost($input: likePostInput!, $postId: String!, $userId: String!) {
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

export const UNLIKE_POST = gql`
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
