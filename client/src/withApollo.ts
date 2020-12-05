import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo as createWithApollo } from 'next-apollo';

const apolloClient = new ApolloClient( {
    uri: 'http://localhost:5000/graphql',
    credentials: 'include',
    cache: new InMemoryCache()
} );

export const withApollo = createWithApollo( apolloClient );