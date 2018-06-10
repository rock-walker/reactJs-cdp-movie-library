import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import appReducers from './reducers'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Route, Switch } from 'react-router'
import {NotFound} from './notFound/NotFound'
import './index.css'
import App from './app/App'

const history = createHistory()
const middlewares = [ thunk, routerMiddleware(history)]
const store = createStore(
    combineReducers ({
        appReducers,
        routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares),
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={App}/>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
)
