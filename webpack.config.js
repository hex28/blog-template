/*
    ./webpack.config.js
*/
const path = require('path');

module.exports = {
  entry: './components/jsx.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
