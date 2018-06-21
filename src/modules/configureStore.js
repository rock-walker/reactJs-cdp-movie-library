import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../modules'

export default (initialState, routerMiddleware) => {
    const middlewares = routerMiddleware ? [thunk, routerMiddleware] : [thunk]
    const store = createStore(
        rootReducer,
        initialState,
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middlewares)
    );
    return store;
}