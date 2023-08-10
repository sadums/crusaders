const { ApolloServer } = require("apollo-server");
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
  async context({ req }) {
    // If needed, you can pull the user from the request and pass it in the context
    return { req };
  },
  playground: process.env.NODE_ENV !== 'production', // Disable playground in production
});


const startServer = async () => {
  // Ensure MongoDB connection is established
  db.once("open", async () => {
    console.log("Connected to MongoDB");

    // Prepare the Next.js app
    await nextApp.prepare();

    // Start the ApolloServer
    const { server: httpServer, url } = await server.listen(PORT);
    console.log(`Server is live at ${url}`);
    console.log(`Make GraphQL requests to ${url}${server.graphqlPath}`);

    // Setup WebSocket for GraphQL Subscriptions
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql',
    });

    useServer({ schema }, wsServer);

    // Handle Next.js requests
    httpServer.on('request', (req, res) => {
      if (req.method === 'GET') {
        handle(req, res);
      }
    });    
  });
};

startServer();
