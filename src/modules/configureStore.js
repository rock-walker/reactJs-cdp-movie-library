import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import {rootReducer, rootSaga} from '../modules'

const sagaMiddleware = createSagaMiddleware()

export default (initialState, routerMiddleware) => {
    const middlewares = routerMiddleware ? [sagaMiddleware, routerMiddleware] : [sagaMiddleware]
    const store = createStore(
        rootReducer,
        initialState,
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middlewares)
    )

    sagaMiddleware.run(rootSaga)
    store.runSaga = () => sagaMiddleware.run(rootSaga)
    store.close = () => store.dispatch(END)

    return store
}