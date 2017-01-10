var http = require('http');
var fs = require('fs');
var qs = require('querystring');

http.createServer(function (req, res) {

  if('/' == req.url){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(
      '<form method="POST" action="/url">'+
      '<h1>My Form</h1>'+
      '<p>your name?</p>'+
      '<input type="text" name="name">'+
      '<input type="text" name="name1">'+
      '<p><button>submit</button></p>'+
      '</form>'
    );
  }else if('/url' == req.url && 'POST' == req.method){
    var body = '';
    //请求实体的数据获取
    req.on('data', function (chunk) {
      body+=chunk;
      console.log(body);
    });
    req.on('end', function () {
      res.writeHead(200, {'Content-Type':'text/html'});
      //qs.parse(body)把url编码的字符串解码并转化成一个对象
      res.end('<p>Content-Type:'+req.headers['content-type']+'</p><p>Data:</p><pre>'+qs.parse(body).name+'</pre>');
    });
  }else{
    res.writeHead(404);
    res.end('not found');
  }


}).listen(3000, function () {
  console.log('监听3000端口');
});
