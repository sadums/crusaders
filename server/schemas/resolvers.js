const { User } = require("../models");
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
        const selectedUser = await User.findById(user._id);
        return selectedUser;
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
      return user;
    },
    addPost: async (parent, { input }, context) => {
      try {
        console.log(input)
        const { user } = context;
        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            {$addToSet: {posts: input }},
            {new: true}
        )
        return updatedUser;

      } catch (err) {
        console.error(err);
      }
      
    },
  },
};

module.exports = resolvers;
