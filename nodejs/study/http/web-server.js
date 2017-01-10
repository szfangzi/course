var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.write('hello');
  res.end('world');

}).listen(3000);
