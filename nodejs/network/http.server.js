var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  var buffers = [];
  req.on('data', function (trunk) {
    buffers.push(trunk);
    console.log(trunk);
  }).on('end', function () {
    var buffer = Buffer.concat(buffers);
    res.end(buffer);
  })
  if(req.url == '/'){
    res.end('这是首页');
  }else if(req.url == '/list'){
    res.end('这是列表页');
  }

}).listen(1337);
console.log('Server runing at http://localhost:1337/');
