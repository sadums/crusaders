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
    addFollower: async (parent, { userId, followerId }, context) => {
      try {
        const follower = await User.findByIdAndUpdate(
          followerId,
          {
            $addToSet: { following: userId }
          },
          { new: true }
        );
        console.log(follower);
        const user = await User.findByIdAndUpdate(
          userId,
          {
            $addToSet: { followers: followerId },
          },
          { new: true }
        );
        console.log(user);
        return user;
      } catch (e) {
        console.error(e);
        return e;
      }
    },
    addComment: async (parent, { username, body, postId }, context) => {
      console.log(username);
      console.log(body);
      console.log(postId);

      const users = await User.find({});
      for (let user of users) {
        for (let post of user.posts) {
          if (post._id.toString() === postId) {
            const newComment = {
              username: username,
              createdAt: new Date().toISOString(),
              body: body,
            };
            await User.updateOne(
              { "posts._id": post._id },
              { $push: { "posts.$.comments": newComment } }
            );

            // After updating the post, find the user that has the updated post
            const updatedUser = await User.findOne({ "posts._id": post._id });
            if (updatedUser) {
              const updatedPost = updatedUser.posts.find(
                (updatedPost) => updatedPost._id.toString() === postId
              );
              if (updatedPost) {
                console.log(updatedPost);
                return updatedPost; // return the updated post
              }
            }
          }
        }
      }
    },
    likePost: async (parent, { input, postId, userId }, context, info) => {
      try {
        console.log(input);
        console.log(postId);
        console.log(userId);
        const { username, pfp, firstName, lastName, preview } = input;

        const userWithPost = await User.findOne({ "posts._id": postId });

        if (!userWithPost) {
          throw new Error("User with the post not found.");
        }

        const post = userWithPost.posts.id(postId);
        if (!post) {
          throw new Error("Post not found.");
        }

        post.likes.push({
          userId,
          postId,
          username,
          pfp,
          firstName,
          lastName,
          preview,
        });

        await userWithPost.save();
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          {
            $push: {
              likes: {
                userId,
                postId,
                username,
                pfp,
                firstName,
                lastName,
                preview,
              },
            },
          },
          { new: true }
        );

        if (!updatedUser) {
          throw new Error("User who liked the post not found.");
        }

        console.log(updatedUser);
        return { user: updatedUser, post: post };
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    unlikePost: async (parent, { postId, userId }, context, info) => {
      try {
        const userWithPost = await User.findOne({ "posts._id": postId });

        if (!userWithPost) {
          throw new Error("User with the post not found.");
        }

        const post = userWithPost.posts.id(postId);
        if (!post) {
          throw new Error("Post not found.");
        } else {
          // remove the like from the post's likes array
          post.likes = post.likes.filter(
            (like) => like.userId.toString() !== userId
          );
          await userWithPost.save();
        }

        // find the user who liked the post and remove the post from their likes array
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $pull: { likes: { postId: postId } } },
          { new: true }
        );

        if (!updatedUser) {
          throw new Error("User who unliked the post not found.");
        }

        console.log(updatedUser);
        return { user: updatedUser, post: post };
      } catch (err) {
        console.error(err);
        throw err;
      }
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
    editUser: async (parent, { input, _id }, context) => {
      try {
        console.log(input);

        const fieldsToUpdate = {};
        if (input.username) fieldsToUpdate.username = input.username;
        if (input.email) fieldsToUpdate.email = input.email;
        if (input.pfp) fieldsToUpdate.pfp = input.pfp;
        if (input.bio) fieldsToUpdate.bio = input.bio;
        if (input.firstName) fieldsToUpdate.firstName = input.firstName;
        if (input.lastName) fieldsToUpdate.lastName = input.lastName;

        const user = await User.findByIdAndUpdate(
          _id, // Using the provided ID
          fieldsToUpdate,
          { new: true }
        );

        if (!user) {
          throw new Error("User not found");
        }

        const token = signToken(user);
        return { token: token, user: user };
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
      subscribe: withFilter(
        () => pubsub.asyncIterator(["NEW_MESSAGE"]),
        async (payload, variables) => {
          const user = await User.findById(variables.userId);
          console.log(user);
          console.log(payload, variables);
          return 1 === 1;
        }
      ),
    },
  },
};

module.exports = resolvers;
