var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/invoices', function(req, res) {
  res.json([]);
});

app.post('/invoice', function(req, res) {
  res.send(200);
});

var port = process.env.PORT || 8080
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
