const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: true,
            VERSION: JSON.stringify("1.1.2.3"),
            BROWSER_SUPPORTS_HTML5: false
        })
    ]
});