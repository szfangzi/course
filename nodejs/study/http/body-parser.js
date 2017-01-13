var http = require('http');
var fs = require('fs');
var connect = require('connect');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var app = connect();
//处理静态资源
app.use(serveStatic(__dirname + '/'));

// 把请求实体转换成js对象，通过req.body可访问
//extended: true的话，请求实体传对象嵌套对象,这边可以拿到嵌套对象
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hi', function (req, res, next) {
  console.log(req.body);
  res.writeHead(200);
  res.end(JSON.stringify(req.body));
});

app.use(function (req, res, next) {
  res.end('not found');
});

http.createServer(app).listen(3000);
