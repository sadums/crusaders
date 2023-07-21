const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");


const PORT = process.env.PORT || 5500;

const mockUserContext = {
  _id: "64b86fccf4d25ea89637ce4b",
  username: "johnDoe",
  email: "johnDoe@example.com",
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { user: mockUserContext }; 
  },
});
//This context is temporary, and you will have to change the _id
app.use(authMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is live at localhost:${PORT}`);
      console.log(
        `Make GraphQL requests to http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
