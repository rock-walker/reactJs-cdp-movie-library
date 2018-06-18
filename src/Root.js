import 'isomorphic-fetch'
import 'babel-polyfill'
import React from 'react'
import { hot } from 'react-hot-loader';
import {Provider} from 'react-redux'
import { createLogger } from 'redux-logger'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import './index.css'
import App from './app/App'

const Root = ({ Router, location, context, store, history }) => (
    <Provider store={store}>
        <Router history={history} context={context} location={location}>
            <Route component={App}/>
        </Router>
    </Provider>)

export default hot(module)(Root)