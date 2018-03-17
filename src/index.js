import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import requireAuth from './components/require_auth'

import App from './components/app';
import Resources from './components/Resources'
import UserList from './components/user_list'
import reducers from './reducers';
import Async from './middlewares/async'

// @see: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

//const ComposedComponent = requireAuth(Resources)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
      <Route path="/users" component={UserList} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
