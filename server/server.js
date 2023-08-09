const express = require("express");
const app = express();
const path = require('path');
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

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req, user: req.user }),
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
  server: httpServer,
  path: '/graphql',
});

const serverCleanup = useServer({ schema }, wsServer);

// Serve static files generated by Next.js
app.use('/_next', express.static(path.join(__dirname, '.next')));

// Handle all other routes with Next.js
const handle = app.getRequestHandler();

app.all('*', (req, res) => {
    return handle(req, res);
});

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
