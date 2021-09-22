import {
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';

// initialize a GraphQL endpoint
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

// write a Apollo Query

export const GET_ALL_CONTINENTS = gql`
query {
  continents {
    code
    name
    countries {
      code
      name
      languages {
        code
        name
      }
    }
  }
}
`;
