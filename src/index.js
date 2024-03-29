// Apollo Lessons from: https://www.howtographql.com/react-apollo/2-queries-loading-links/

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const graphQuery = `
    {
        links {
            id
            url
        }
    }
`;
client.query({
    query: gql`${graphQuery}`
}).then(res => console.log(res))

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)
serviceWorker.unregister();
