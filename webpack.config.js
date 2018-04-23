const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {

	context: path.resolve(__dirname, 'src'),

	entry: {
		bundle: './index',
		headerStyles: './App.css',
		componentStyles: './Components.css',
		rootStyles: './index.css'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'built'),
	},

	resolve: {
		extensions: ['.js']
	},

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
			}
		},
		{
            test: /\.css/,
            use: ['style-loader', 'css-loader']
			//use: ExtractTextPlugin.extract({
			//	fallback: '',
			//	use: ''
			//}) 
		}]
	},

	optimization: {
		minimizer: [
			new UglifyJSPlugin()
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: true,
			VERSION: JSON.stringify("1.1.2.3"),
			BROWSER_SUPPORTS_HTML5: false
		}),
        //new ExtractTextPlugin('[name].css')
    ],

	watch: false
};