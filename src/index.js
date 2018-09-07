import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import reducers from './reducer'
import AuthRouter from './component/authroute/authroute'

import './index.css'

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
))
/* eslint-enable */
const Boss = () => (<h2>Boss</h2>)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRouter />
        <Route path="/boss" component={Boss} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root'))
