const express = require("express");
const app = express();
const path = require('path')
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.resolve(__dirname, '../client') });
const handle = nextApp.getRequestHandler();

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

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

const serverCleanup = useServer({ schema }, wsServer);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/.next")));
}

app.all('*', (req, res) => {
  return handle(req, res);
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  await nextApp.prepare();

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

// const express = require('express');
// const next = require('next');
// const path = require('path');

// const dev = process.env.NODE_ENV !== 'production';
// console.log("Resolved path:", path.resolve(__dirname, '../client/app'));
// const app = next({ dev, dir: path.resolve(__dirname, '../client') });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   });

//   const PORT = process.env.PORT || 5500;
  
//   server.listen(PORT, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${PORT}`);
//   });
// });

