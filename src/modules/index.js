import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { routerReducer } from 'react-router-redux';
import appReducers from '../reducers';
import { moviesSaga } from '../actions';

function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}

const rootReducer = combineReducers({
  appReducers,
  routerReducer,
});

export {
  rootReducer,
  rootSaga,
};
