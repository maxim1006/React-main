import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { cache } from './cache';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
`;

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql',
    headers: {
        authorization: localStorage.getItem('token') || '',
        'client-name': 'Max',
        'client-version': '1.0.0',
    },
    typeDefs,
    resolvers: {},
});