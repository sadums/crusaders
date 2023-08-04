import { gql } from "@apollo/client";

export const GET_POST = gql`
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
        createdAt
      }
      hashtags {
        hashtagText
        category
      }
    }
  }
`;

export const GET_LOGGED_IN_USER = gql`
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

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(input: $id) {
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

