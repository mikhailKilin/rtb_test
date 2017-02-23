const loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: 'style!css!sass'
  }, {
    test: /\.html$/,
    exclude: /node_modules/,
    loader: 'raw'
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  }, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file'
  }
]

module.exports = loaders