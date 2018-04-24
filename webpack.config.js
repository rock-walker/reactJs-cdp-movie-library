const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

	context: path.resolve(__dirname, 'src'),

	entry: {
		bundle: './index',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'built'),
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
                    presets: ['react']
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

	//optimization: {
	//	minimizer: [
	//		new UglifyJSPlugin()
	//	]
	//},

    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: true,
			VERSION: JSON.stringify("1.1.2.3"),
			BROWSER_SUPPORTS_HTML5: false
		}),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'MovieLib',
            hash: true,
            template: './index.html'
        })
    ],

	watch: false
};