const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './examples',
  output: {
    filename: 'index.js',
    publicPath: 'http://localhost:3000/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: 'source-map',
  devServer: {
    contentBase: 'assets',
    port: 3000,
    watchOptions: {
      ignore: /node_modules/
    }
  }
};
