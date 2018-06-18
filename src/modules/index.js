import {combineReducers} from 'redux';
import appReducers from '../reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers ({
        appReducers,
        routerReducer
    });

export default rootReducer;