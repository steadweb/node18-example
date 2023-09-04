var http = require('http');

http.createServer(function (req, res) {
  throw new Error('Oh no, a bug!');
  res.write('Hello World! This is a new test for 0.2.0-rc2');
  res.end();
}).listen(3000);
