import { ApolloClient, HttpLink, from, InMemoryCache, gql } from '@apollo/client';
import { onError } from '@apollo/link-error';
import fetch from 'isomorphic-unfetch';

const httpLink = new HttpLink({
  uri: 'https://graphql-compose.herokuapp.com/northwind',
  fetch,
});

const errorCatch = onError((params) => {
  console.log(params);
});

const apolloClient = new ApolloClient({
  link: errorCatch.concat(from([httpLink])),
  cache: new InMemoryCache({
    typePolicies: {
      Order: {
        keyFields: ['orderID'],
      },
    },
  }).restore({}),
});

if (typeof window !== 'undefined') {
  (window as any).ac = apolloClient;
}

apolloClient
  .query({
    query: gql`
      query OrderListQuery {
        viewer {
          orderPagination {
            count
            items {
              orderID
              orderDate
              employee {
                firstName
                lastName
              }
            }
          }
        }
      }
    `,
  })
  .then((res) => {
    console.log(res);
  });

export default () => {
  return 'Please open console and type `ac.cache.data` to see ApolloCache internals';
};
