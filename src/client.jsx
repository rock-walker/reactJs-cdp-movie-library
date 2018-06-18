import React from 'react';
import { hydrate } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './app/App'; 

const root = (
    <App 
        Router={ConnectedRouter}
    />
);

hydrate(root, document.getElementById('root'));