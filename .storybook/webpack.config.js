const path = require("path");

module.exports = {
  module: {
        rules: [
        {
            test: /\.css$/,
            loader: 'style-loader',
            include: path.resolve(__dirname, "../")
         },
        ],
    },
}