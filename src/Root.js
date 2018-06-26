import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import App from './app/App';

const Root = ({
  Router, location, store, history,
}) => (
    <Provider store={store}>
        <Router history={history} location={location}>
            <Route component={App}/>
        </Router>
    </Provider>);

export default hot(module)(Root);
