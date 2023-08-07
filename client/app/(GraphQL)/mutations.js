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


export const ADD_POST = gql`
  mutation AddPost($input: newPostInput!, $userId: ID!) {
    addPost(input: $input, userId: $userId) {
      _id
      username
      posts {
        _id
        preview
        media
        title
        body
        createdAt
        comments {
          _id
          body
        }
        hashtags {
          hashtagText
        }
      }
    }
  }
`;

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



export const LIKE_POST = gql`
  mutation LikePost($postId: String!, $userId: String!, $input: likePostInput!) {
    likePost(postId: $postId, userId: $userId, input: $input) {
      user {
        _id
        username
        likes {
          _id
          userId
          postId
          username
        }
      }
      post {
        _id
        title
        likes {
          _id
          userId
          postId
          username
          pfp
        }
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation UnlikePost($postId: String!, $userId: String!) {
    unlikePost(postId: $postId, userId: $userId) {
      user {
        _id
        username
        likes {
          _id
          userId
          postId
          username
        }
      }
      post {
        _id
        title
        likes {
          _id
          userId
          postId
          username
          pfp
        }
      }
    }
  }
`;
