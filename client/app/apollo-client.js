import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

// Define the URIs based on the environment
const HTTP_URI = process.env.NODE_ENV === 'production' ? 
    'https://crusaders-media-e9469ade02da.herokuapp.com/graphql' : 
    'http://localhost:5500/graphql';

const WS_URI = process.env.NODE_ENV === 'production' ? 
    'wws://crusaders-media-e9469ade02da.herokuapp.com/graphql' : 
    'ws://localhost:5500/graphql';

const httpLink = new HttpLink({
  uri: HTTP_URI,
});

const wsLink = new GraphQLWsLink(createClient({
  url: WS_URI,
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

export default client;
