const path = require("path");

module.exports = {
  module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {
                                modules: false
                            }], 'react'
                        ],
                        plugins: ['transform-runtime'],
                        cacheDirectory: true,
                    },
                },
                include: path.resolve(__dirname, "../src")
            },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: path.resolve(__dirname, "../src")
         },
        ],
    },
}