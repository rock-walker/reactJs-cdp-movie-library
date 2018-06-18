import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../modules';
import thunk from 'redux-thunk'

//const middlewares = [ thunk , routerMiddleware(history)]

export default (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk) //(...middlewares)
    );
    return store;
};