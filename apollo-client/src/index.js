import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, browserHistory } from 'react-router'

import TestComponent from './components/TestComponent'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/graphql'})
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
       <Route path='/' component={TestComponent} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
