const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    bio: String
    pfp: String
    email: String!
    password: String!
    posts: [Post]
    followers: [User]
    following: [User]
  }

type Comment {
  _id: ID
  body: String!
  createdAt: String
}

type Post {
    _id: ID
    image: String
    video: String
    title: String!
    body: String
    createdAt: String
    comments: [Comment]
    hashtags: [Hashtag]
}

type Hashtag {
    hashtagText: String!
    category: String
}

type AuthPayload {
  token: String!
  user: User!
}

type Query {
    getAllUsers: [User]
    getUserById(input: ID) : User
    getLoggedInUser: User
    getPost(postId: ID!): Post
  }

type Mutation {
    createUser(input: CreateUserInput!) : AuthPayload
    addPost(input: newPostInput!): User
    login(email: String!, password: String!): AuthPayload
    deleteUser: User
    editUser(input: UpdateUserInput!) : AuthPayload
    deletePost(postId: ID!): User
    updatePost(postId: ID!, input: updatePostInput!): User
}

input updatePostInput {
  image: String
  video: String
  title: String
  body: String
  createdAt: String
  hashtags: [hashtagInput]
}

input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    username: String
    email: String
    bio: String
    pfp: String
  }

  input newPostInput {
    image: String
    video: String
    title: String
    body: String
    createdAt: String
    hashtags: [hashtagInput]
}

input hashtagInput {
    hashtagText: String
    category: String
}


`;

module.exports = typeDefs;
