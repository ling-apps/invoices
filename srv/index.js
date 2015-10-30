var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

var app = express();

app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('/api/invoices', function(req, res) {
  res.send(200);
});

var port = process.env.PORT || 8080
var host = ""
var server = app.listen(port, function () {
  host = server.address().address;
  port = server.address().port;

  console.log('Express app listening at http://%s:%s', host, port);
});

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    "*": "http://localhost:" + port
  },
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Webpack Dev Server listening at localhost:3001');
});

