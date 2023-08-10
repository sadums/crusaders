const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Like {
    _id: ID!
    user: User!
    post: Post!
    username: String
    pfp: String
    firstName: String
    lastName: String
    preview: String
  }

  type User {
    _id: ID
    username: String!
    firstName: String
    lastName: String
    bio: String
    pfp: String
    email: String!
    password: String!
    posts: [Post]
    followers: [User]
    following: [User]
    likes: [Like]
    chats: [Chat]
  }

  type Comment {
    _id: ID
    body: String!
    username: String
    createdAt: String
  }

  type Chat {
    _id: ID
    members: [User]
    messages: [Message]
    createdAt: String
  }

  type Message {
    _id: ID
    userId: ID!
    body: String!
    createdAt: String
  }

  type Post {
    _id: ID
    user: User
    preview: String
    media: String
    title: String
    body: String
    createdAt: String
    comments: [Comment]
    likes: [Like]
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
    getAllPosts: [Post]
    getAllUsers: [User]
    getUserById(userId: ID!): User
    getPost(postId: ID!): Post
    getChatById(chatId: ID!): Chat
    getUserChatsByUsername(username: String!): User
    getUserChats(userId: ID!): User
  }

  type Mutation {
    unlikePost(postId: String!, userId: String!): Like
    likePost(input: likePostInput, postId: String!, userId: String!): Like
    addComment(username: String!, body: String!, postId: String!): Post
    createUser(input: CreateUserInput!): AuthPayload
    addPost(input: newPostInput!, userId: ID!): Post
    login(email: String!, password: String!): AuthPayload
    deleteUser(userId: ID!): User
    editUser(input: UpdateUserInput!, _id: ID!): AuthPayload
    deletePost(postId: ID!): Post
    updatePost(postId: ID!, input: updatePostInput!): Post
    addFollower(userId: ID!, followerId: ID!): User
    removeFollower(userId: ID!, followerId: ID!): User
    createChat(members: [ID]): Chat
    createMessage(userId: ID!, chatId: ID!, body: String!): Chat
  }

  type Subscription {
    messages: Message
  }

  input updatePostInput {
    preview: String
    media: String
    title: String
    body: String
    createdAt: String
    hashtags: [hashtagInput]
  }

  input likePostInput {
    username: String
    pfp: String
    firstName: String
    lastName: String
    preview: String
  }

  type Subscription {
    messages(chatId: ID, userId: ID): Message
  }

  input CreateUserInput {
    username: String!
    email: String!
    firstName: String
    lastName: String
    password: String!
  }

  input UpdateUserInput {
    username: String
    email: String
    bio: String
    pfp: String
    firstName: String
    lastName: String
  }

  input newPostInput {
    preview: String
    media: String
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
