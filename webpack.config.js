module.exports = {
  entry: './front/js/main.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
