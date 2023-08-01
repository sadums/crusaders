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
  mutation UpdateUser($input: UpdateUserInput!) {
    editUser(input: $input) {
      token
      user {
        username
        email
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
  mutation AddPost($input: newPostInput!) {
    addPost(input: $input) {
      _id
      username
      posts {
        _id
        title
        body
        image
        video
        createdAt
        hashtags {
          _id
          tag
        }
      }
    }
  }
`;
