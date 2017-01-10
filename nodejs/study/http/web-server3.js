var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  if('/' == req.url){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(
      '<form method="POST" action="/url">'+
      '<h1>My Form</h1>'+
      '<p>your name?</p>'+
      '<input type="text" name="name">'+
      '<p><button>submit</button></p>'+
      '</form>'
    );
  }else if('/url' == req.url){
    res.writeHead(200, {'Content-Type':'text/html'});
    var body = '';
    req.on('data', function (chunk) {
      body+=chunk;
    });
    res.end(body);
  }


}).listen(3000, function () {
  console.log('监听3000端口');
});
