const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'static': path.resolve(__dirname, '../src/static')
    }
  },
  module: {
    rules: [{
        test: /\.html$/,
        use: ['html-withimg-loader', 'raw-loader'],
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize', 'postcss-loader']
        })
      }
    ]
  },
}