import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Routes } from 'routes';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import './sass/app.scss';
import { ApolloProvider } from '../node_modules/react-apollo';

const cache = new InMemoryCache();

const link = new HttpLink({ uri: 'http://localhost:8705' });

const client = new ApolloClient({
  cache,
  link
});

ReactDom.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
);
