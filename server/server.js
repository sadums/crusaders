const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const { createServer } = require('http');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');

const httpServer = createServer(app);

const PORT = process.env.PORT || 5500;
// Test context
const mockUserContext = {
  _id: "64b86fccf4d25ea89637ce4b",
  username: "johnDoe",
  email: "johnDoe@example.com",
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req, user: req.user }),
  // Test context
  context: () => {
    return { user: mockUserContext }; 
  },
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

app.use(authMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creating the WebSocket server
const wsServer = new WebSocketServer({
  // This is the `httpServer` we created in a previous step.
  server: httpServer,
  // Pass a different path here if app.use
  // serves expressMiddleware at a different path
  path: '/graphql',
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema }, wsServer);


//MAYBE THIS IS THE WAY HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/.next")));
}

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    httpServer.listen(PORT, () => {
      console.log(`Server is live at localhost:${PORT}`);
      console.log(
        `Make GraphQL requests to http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();