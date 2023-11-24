import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
})
