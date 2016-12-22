var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hi\n');

}).listen(1337);
console.log('Server runing at http://localhost:1337/');
