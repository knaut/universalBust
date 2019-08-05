'use strict'

require('dotenv').config()

const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './app'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    // wrap our .env file into globals we can use in webpack-built code
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'Universal Bust 🎇 SPA + SSR for static websites.',
      inject: true,
      template: './webpack.template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$|.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}