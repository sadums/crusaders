const { User, Chat } = require("../models");
const { signToken } = require("../utils/auth");
const { PubSub, withFilter } = require("graphql-subscriptions");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find({});
    },
    getUserById: async (parent, { input }, context) => {
      const user = await User.findById(input);
      if (!user) {
        throw new Error("Could not find this user");
      }
      return user;
    },
    getLoggedInUser: async (parent, { input }, context) => {
      try {
        const { user } = context;
        console.log("user");
        const selectedUser = await User.findById(user._id);
        console.log(selectedUser);
        return selectedUser;
      } catch (err) {
        console.error(err);
      }
    },
    getChatById: async (parent, { input }, context) => {
      const chat = await Chat.findById(input);
      if (!chat) {
        throw new Error("Could not find chat!");
      }
      return chat;
    },
    getPost: async (parent, { postId }, context) => {
      try {
        const users = await User.find({});
        for (let user of users) {
          for (let post of user.posts) {
            if (post._id.toString() === postId) {
              return post;
            }
          }
        }
        throw new Error("Post not found");
      } catch (err) {
        console.error(err);
      }
    },
  },
  Mutation: {
    createUser: async (parent, { input }, context) => {
      const user = await User.create(input);
      if (!user) {
        throw new Error("Error with making a user");
      }
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Can't find this user");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error("Wrong password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { input, userId }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $addToSet: { posts: input } },
          { new: true }
        );

        console.log(updatedUser);
        return updatedUser;
      } catch (err) {
        console.error(err);
        throw new Error("Failed to add post to user.");
      }
    },
    deletePost: async (parent, { postId }, context) => {
      try {
        const { user } = context;
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          { $pull: { posts: { _id: postId } } },
          { new: true }
        );
        if (!updatedUser) {
          throw new Error("Post not found");
        }
        return updatedUser;
      } catch (err) {
        console.error(err);
      }
    },
    updatePost: async (parent, { postId, input }, context) => {
      try {
        const { user } = context;
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id, "posts._id": postId },
          { "posts.$": input },
          { new: true }
        );
        if (!updatedUser) {
          throw new Error("Post not found");
        }
        return updatedUser;
      } catch (err) {
        console.error(err);
      }
    },
    deleteUser: async (parent, { input }, context) => {
      try {
        const { user } = context;
        console.log(user);
        const deletedUser = await User.findByIdAndDelete(user._id);
        return deletedUser;
      } catch (err) {
        console.error(err);
      }
    },
    editUser: async (parent, { input }, context) => {
      try {
        const selectedUser = context.user;
        console.log(input);
        console.log(selectedUser);
        const fieldsToUpdate = {};
        if (input.username) fieldsToUpdate.username = input.username;
        if (input.email) fieldsToUpdate.email = input.email;
        if (input.pfp) fieldsToUpdate.pfp = input.pfp;
        if (input.bio) fieldsToUpdate.bio = input.bio;

        const user = await User.findByIdAndUpdate(
          selectedUser._id,
          fieldsToUpdate,
          { new: true }
        );
        const token = signToken(user);
        return { token: token, user: user }; //This doesn't update in tests because the context is fixed, might update on the website
      } catch (err) {
        console.error(err);
        return err;
      }
    },
    createChat: async (parent, { members }, context) => {
      const chat = await Chat.create({
        members: members,
      });
      if (!chat) {
        throw new Error("Error with making a chat");
      }
      return chat;
    },
    createMessage: async (parent, { chatId, userId, body }, context) => {
      try {
        const updatedChat = await Chat.findByIdAndUpdate(
          chatId,
          {
            $addToSet: {
              messages: {
                body: body,
                userId: userId,
              },
            },
          },
          { new: true }
        );
        pubsub.publish(`NEW_MESSAGE`, {
          messages: {
            body: body,
            userId: userId,
          },
        });
        return updatedChat;
      } catch (e) {
        console.error(e);
        return e;
      }
    },
  },
  Subscription: {
    messages: {
      subscribe: () => pubsub.asyncIterator(["NEW_MESSAGE"]),
    },
  },
};

module.exports = resolvers;
