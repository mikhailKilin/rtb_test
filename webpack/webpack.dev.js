'use strict'
let BrowserSyncPlugin = require('browser-sync-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
let loaders = require('./loaders')
let plugins = [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      hash: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: {
        baseDir: 'dist'
      },
      ui: false,
      online: false,
      notify: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ]
module.exports = {
  entry: ['./app/index.js'],
  output: {
    filename: 'build.js',
    path: 'dist'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "inline-eval-cheap-source-map",
  plugins: plugins,
  module: {
    loaders: loaders
  }
}
