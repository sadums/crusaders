const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');

const PORT = process.env.PORT || 5500;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  plugins: [
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

const wsServer = new WebSocketServer({
  server: server.httpServer,
  path: '/graphql',
});

const serverCleanup = useServer({ schema }, wsServer);

const startApolloServer = async () => {
  await server.listen(PORT).then(({ url }) => {
    console.log(`Server is live at ${url}`);
    console.log(`Make GraphQL requests to ${url}${server.graphqlPath}`);
  });

  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

startApolloServer();
