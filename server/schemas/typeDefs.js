const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]
    friends: [User]
  }

type Post {
    _id: ID
    image: String
    video: String
    title: String!
    body: String
    createdAt: String
    hashtags: [Hashtag]
}

type Hashtag {
    hashtagText: String!
    category: String
}

type Query {
    getAllUsers: [User]
    getUserById(input: ID) : User
    getLoggedInUser: User
    #get a single post
  }

type Mutation {
    createUser(input: CreateUserInput!) : User
    addPost(input: newPostInput!): User
    #Delete post
    #Edit user
    #Edit post
    #Add post to user
    #Delete User
}

input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }


  input newPostInput {
    image: String
    video: String
    title: String!
    body: String
    createdAt: String
    hashtags: [hashtagInput]
}

input hashtagInput {
    hashtagText: String!
    category: String
}


`;

module.exports = typeDefs;
