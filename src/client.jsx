import React from 'react'
import { hydrate } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import Root from './Root'
import configureStore from './modules/configureStore'

const history = createHistory()
const middlewares = routerMiddleware(history)
const store = configureStore(window.PRELOADED_STATE, middlewares)

const root = (
    <Root 
        Router={ConnectedRouter}
        store = {store}
        history = {history}
    />
);

hydrate(root, document.getElementById('root'));