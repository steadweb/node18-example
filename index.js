var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello Luke!');
  res.end();
}).listen(3000);
