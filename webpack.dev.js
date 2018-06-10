const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: false,
            VERSION: JSON.stringify("1.1.2.4"),
            BROWSER_SUPPORTS_HTML5: true
        })
    ]
});