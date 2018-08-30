// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import reducers from './reducer'

const store = createStore(reducers, compose(
  applyMiddleware(thunk), (window.devToolsExtention ? window.devToolsExtention() : f => f),
))

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root'))
