import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import configureStore from './modules/configureStore';

//import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux';

function renderHTML(html, preloadedState) {
    return ` 
    <!doctype html>
    <html>
        <head>
            <meta charset=utf-8>
            <title>React Server Side Rendering</title>
            ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/js/main.js"></script>
        </body>
    </html>
    `;
};

export default function serverRenderer() {
    return (req, res) => {

        //const history = createHistory()

        const store = configureStore();
        const context = {};

        const root = (
            <Root
                context = {context}
                location = {req.url}
                Router = {StaticRouter}
                store = {store}
                //history = {history}
            />
        );

        const htmlString = renderToString(root); 
        const preloadedState = store.getState();
        const html = renderHTML(htmlString, preloadedState);
        console.log(html);
        res.send(html);
    };
};