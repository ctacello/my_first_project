const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: './src/index.js',
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
    ],
    output: {

        filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
  };