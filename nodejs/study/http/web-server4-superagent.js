var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var request = require('superagent');

var server = http.createServer(function (req, res) {

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
  }else if('/api' == req.url){

    //superagent除了get，还支持put、post、head、del, 默认传的json格式
    request.get('http://localhost:3000/api2')
      .send({
      q:1
    }).set({//请求头字段
      'Date':new Date('2000-01-01').toDateString(),
      'Connection':'keep-alive'
    }).end(function (err, res2) {
      res.writeHead(200, {'Content-Type':'application/json'});
      //服务端设置响应类型为json格式，请求方用superagent请求，就能通过res2.body获取响应实体
      res.end(res2.body);
    });

  }else if('/api2' == req.url){
    console.log(req.headers);
    var body = '';
    req.on('data', function (chunk) {
      body+=chunk;
    }).on('end', function () {
      res.writeHead(200,{'Content-Type':'application/json'})
      res.end(JSON.stringify(body));
    });

  }else{
    res.writeHead(404);
    res.end('not found');
  }


}).listen(3000, function () {
  console.log('监听3000端口');
});

process.on('uncaughtException', function (err) {
  console.log(err);
});
