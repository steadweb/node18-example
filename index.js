var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World! This is a new test for 0.2.0');
  res.end();
}).listen(3000);
