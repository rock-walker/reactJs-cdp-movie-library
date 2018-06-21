import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import {appReducers, moviesSaga} from '../reducers'

function* rootSaga() {
    yield all([
        moviesSaga(),
    ])
}

const rootReducer = combineReducers ({
        appReducers,
        routerReducer
    });

export default {
    rootReducer,
    rootSaga
}