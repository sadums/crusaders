const { User, Chat, Post, Like } = require("../models");
const { signToken } = require("../utils/auth");
const mongoose = require("mongoose");
const { PubSub, withFilter } = require("graphql-subscriptions");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find({}).populate({
        path: "posts",
        model: "Post",
        populate: {
          path: "user",
          model: "User",
        },
      });
    },
    getAllPosts: async () => {
      try {
        const posts = await Post.find({})
          .populate("user")
          .populate({
            path: "likes",
            populate: {
              path: "user",
              model: "User", // Assuming 'User' is the name of your user model
            },
          });

        return posts;
      } catch (error) {
        throw new Error("Error fetching all posts");
      }
    },
    getUserById: async (parent, { userId }, context) => {
      const user = await User.findById(userId)
        .populate({
          path: "posts",
          populate: {
            path: "user",
          },
        })
        .populate({
          path: "likes",
          populate: {
            path: "post",
          },
        });
      if (!user) {
        throw new Error("Could not find this user");
      }
      return user;
    },
    // getLoggedInUser: async (parent, { input }, context) => {
    //   try {
    //     const { user } = context;
    //     console.log("user");
    //     const selectedUser = await User.findById(user._id);
    //     console.log(selectedUser);
    //     return selectedUser;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    getChatById: async (parent, { input }, context) => {
      const chat = await Chat.findById(input);
      if (!chat) {
        throw new Error("Could not find chat!");
      }
      return chat;
    },
    getPost: async (parent, { postId }, context) => {
      try {
        const post = await Post.findById(postId)
          .populate("user")
          .populate({
            path: "likes",
            populate: {
              path: "user",
            },
          });
        if (!post) {
          throw new Error("Post not found");
        }
        return post;
      } catch (err) {
        console.error(err);
        throw new Error("Error fetching the post.");
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
    addComment: async (parent, { username, body, postId }) => {
      try {
        // Add the comment to the specified post
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId }, // find the post by its id
          {
            $push: {
              comments: {
                body: body,
                createdAt: new Date().toISOString(),
                username: username,
              },
            },
          },
          { new: true } // return the modified post
        );
        if (!updatedPost) {
          throw new Error("Post not found");
        }

        return updatedPost; // return the updated post with the new comment
      } catch (err) {
        console.error(err);
        throw new Error(err.message);
      }
    },
    addFollower: async (parent, { userId, followerId }, context) => {
      try {
        if(userId === followerId) return { message: "You cannot follow yourself" }
        const follower = await User.findByIdAndUpdate(
          followerId,
          {
            $addToSet: { following: userId },
          },
          { new: true }
        );
        const user = await User.findByIdAndUpdate(
          userId,
          {
            $addToSet: { followers: followerId },
          },
          { new: true }
        );
        return user;
      } catch (e) {
        console.error(e);
        return e;
      }
    },
    removeFollower: async (parent, { userId, followerId }, context) => {
      try {
        const follower = await User.findByIdAndUpdate(
          followerId,
          {
            $pull: { following: userId },
          },
          { new: true }
        );
        const user = await User.findByIdAndUpdate(
          userId,
          {
            $pull: { followers: followerId },
          },
          { new: true }
        );
        return user;
      } catch (e) {
        console.error(e);
        return e;
      }
    },
    likePost: async (parent, { input, postId, userId }, context, info) => {
      try {
        // const { username, pfp, firstName, lastName, preview } = input;

        console.log(postId)
        console.log(userId)
        // Check if the user has already liked the post
        const existingLike = await Like.findOne({ user: userId, post: postId });
        if (existingLike) {
          throw new Error("User has already liked this post.");
        }

        // 1. Create a new Like document
        const newLike = new Like({
          user: new mongoose.Types.ObjectId(userId),
          post: new mongoose.Types.ObjectId(postId),
          // username,
          // pfp,
          // firstName,
          // lastName,
          // preview,
        });
        await newLike.save();

        // 2. Update the post with the reference to the newly created Like
        const postToUpdate = await Post.findById(postId);
        if (!postToUpdate) {
          throw new Error("Post not found.");
        }
        //await userWithPost.save();
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          {
            $push: {
              likes: newLike._id,
            },
          },
          { new: true }
        );

        if (!updatedUser) {
          throw new Error("User who liked the post not found.");
        }
        postToUpdate.likes.push(newLike._id);
        await postToUpdate.save();

        // 3. Update the user who liked the post with the reference to the new Like
        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
          throw new Error("User not found.");
        }
        userToUpdate.likes.push(newLike._id);
        await userToUpdate.save();

        // 4. Populate the user and post fields in the newLike document before returning
        const populatedLike = await Like.findById(newLike._id)
          .populate("user")
          .populate("post");

        // 5. Return the newly created Like with populated user and post fields
        return populatedLike;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    unlikePost: async (parent, { postId, userId }, context, info) => {
      try {
        // 1. Find the Like document based on the postId and userId.
        console.log(postId)
        console.log(userId)
        const likeToRemove = await Like.findOne({ post: postId, user: userId });

        // If there's no such Like, throw an error.
        if (!likeToRemove) {
          throw new Error("Like not found.");
        }

        // 2. Update the post to remove the reference to the Like.
        const postToUpdate = await Post.findById(postId);
        if (!postToUpdate) {
          throw new Error("Post not found.");
        }
        postToUpdate.likes.pull(likeToRemove._id);
        await postToUpdate.save();

        // 3. Update the user to remove the reference to the Like.
        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
          throw new Error("User not found.");
        }
        userToUpdate.likes.pull(likeToRemove._id);
        await userToUpdate.save();

        // 4. Remove the found Like from the database.
        await Like.deleteOne({ _id: likeToRemove._id });

        // 5. Return the removed Like object
        return likeToRemove;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    addPost: async (parent, { input, userId }) => {
      try {
        // First create the Post
        const newPost = new Post({
          ...input,
          user: userId,
        });
        const savedPost = await newPost.save();

        // Then associate the Post with the User
        await User.findByIdAndUpdate(
          userId,
          { $addToSet: { posts: savedPost._id } },
          { new: true }
        );

        // Populate the user details before returning the saved post
        const postWithUser = await Post.findById(savedPost._id).populate(
          "user"
        );

        return postWithUser;
      } catch (err) {
        console.error(err);
        throw new Error("Failed to add post.");
      }
    },
    deletePost: async (parent, { postId }) => {
      try {
        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
          throw new Error("Post not found");
        }
        return post;
        // Returning the deleted post; if you prefer, you can also return
        // a success message or any other structure.
      } catch (err) {
        console.error(err);
        throw new Error(err.message);
      }
    },
    updatePost: async (parent, { postId, input }) => {
      try {
        // Find the post by its id and update it
        const post = await Post.findOneAndUpdate(
          { _id: postId }, // Only using post's id for finding the post
          input, // the fields you want to update
          { new: true } // return the updated document
        ).populate("user"); // populate the user associated with the post

        if (!post) {
          throw new Error("Post not found");
        }

        return post;
      } catch (err) {
        console.error(err);
        throw new Error(err.message);
      }
    },

    deleteUser: async (parent, { userId }, context) => {
      try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
          throw new Error("User not found");
        }
        return deletedUser;
      } catch (err) {
        console.error(err);
        throw new Error("Failed to delete user.");
      }
    },
    editUser: async (parent, { input, _id }, context) => {
      try {
        const user = await User.findByIdAndUpdate(_id, input, {
          new: true,
        }).populate({
          path: "posts",
          populate: {
            path: "user",
            model: "User",
          },
        });

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
