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
    #get one user by id
    #get logged in user by context
    #get a single post
  }

#type Mutation {
    #Delete post
    #Edit user
    #Edit post
    #Add post to user
    #Delete User
#}

`;

module.exports = typeDefs;
