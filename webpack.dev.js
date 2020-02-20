const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: './javascript/lesson_4/src/index2.js',
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: 'index2.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };