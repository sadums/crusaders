const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const next = require('next');
const path = require('path');

const PORT = process.env.PORT || 5500;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.resolve(__dirname, '../client') });
const handle = nextApp.getRequestHandler();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req }),
  playground: dev, // Only enable playground in development
});

const app = express();

const startServer = async () => {
  // Ensure MongoDB connection is established
  db.once("open", async () => {
    console.log("Connected to MongoDB");

    // Prepare the Next.js app
    await nextApp.prepare();

    // Start Apollo Server before applying middleware
    await server.start();

    // Apply ApolloServer middleware to the Express server
    server.applyMiddleware({ app });

    // Handle Next.js requests using the custom express route
    app.all('*', (req, res) => handle(req, res));

    // Listen on the port
    const httpServer = app.listen(PORT, () => {
      console.log(`Server is live at http://localhost:${PORT}`);
      console.log(`GraphQL server is live at http://localhost:${PORT}${server.graphqlPath}`);
    });

    // Setup WebSocket for GraphQL Subscriptions
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql',
    });

    useServer({ schema }, wsServer);
  });
};

startServer();

