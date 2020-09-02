import Vue from 'vue';
import VueApollo from 'vue-apollo';
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import {
  ApolloClient
} from 'apollo-client'
import {
  createHttpLink
} from 'apollo-link-http'

// TODO: Swap with apollo-upload-client for file uploads
const httpLink = createHttpLink({
  uri: `http://localhost:4001`,
})

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

// * Register the vue-apollo plugin
Vue.use(VueApollo);

// * Create vue apollo provider
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $query: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    }
  },
  errorHandler(error) {
    console.log(
      '%cAn error occurred',
      'background: red; color: white; padding: 4px; border-radius: 4px;font-weight: bold;'
    );
    console.log(error.message);
    if (error.graphQLErrors) {
      console.log(error.graphQLErrors);
    }
    if (error.networkError) {
      console.log(error.networkError);
    }
  }
});