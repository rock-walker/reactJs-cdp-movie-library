const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,

    //context: path.resolve(__dirname, 'src'),
    /*
    entry: {
      bundle: './index.js'
    },
*/
    output: {
        filename: 'js/[name].js',
        path: path.resolve('./public'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
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
        isDevMod ? new webpack.NamedModulesPlugin() 
                 : new webpack.HashedModuleIdsPlugin(),
        /*new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            hash: true,
            template: './assets/index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })*/
    ],
};