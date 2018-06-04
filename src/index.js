import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import appReducers from './reducers'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import './index.css'
import App from './app/App'

const history = createHistory()
const middlewares = [ thunk, routerMiddleware(history)]
const store = createStore(
    combineReducers ({
        appReducers,
        routerReducer
    }),
    applyMiddleware(...middlewares)
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
)
