const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
      bundle: './index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        },
        {
            test: /\.css/,
            //use: ['style-loader', 'css-loader']
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }) 
        },
        {
            test: /\.(svg|png|jpg|jpeg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]'
                }
            }]
        }]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            hash: true,
            template: './assets/index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ],
};