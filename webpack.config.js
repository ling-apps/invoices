var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './front/js/main.js'
  ],
  output: {
    path: require("path").resolve("./public"),
    publicPath: 'http://localhost:3001/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel-loader'
        ],
        include: path.join(__dirname, 'front'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loaders: [
          'url-loader?limit=8192'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    root: path.join(__dirname, 'front', 'js')
  }
};
