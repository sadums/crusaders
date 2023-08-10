const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const next = require('next');
const path = require('path');

const PORT = process.env.PORT || 5500;
const nextApp = next({ dev: process.env.NODE_ENV !== 'production', dir: path.resolve(__dirname, '../client') });
const handle = nextApp.getRequestHandler();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  playground: false,
  async context({ req }) {
    return { req };
  }
});

const startServer = async () => {
  await nextApp.prepare();

  db.once("open", async () => {
    console.log("Connected to MongoDB");

    const { server: httpServer, url } = await server.listen(PORT);
    console.log(`Server is live at ${url}`);
    console.log(`Make GraphQL requests to ${url}${server.graphqlPath}`);

    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql',
    });

    useServer({ schema }, wsServer);

    httpServer.on('request', (req, res) => {
      handle(req, res);
    });
  });
};

startServer();
