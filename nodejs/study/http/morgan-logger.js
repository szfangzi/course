var http = require('http');
var fs = require('fs');
var connect = require('connect');
var serveStatic = require('serve-static');
var morgan = require('morgan');

var app = connect();
//处理静态资源
app.use(serveStatic(__dirname + '/'));

//自定义打印的内容
//morgan.token('str', function(req) {
//  return JSON.stringify({a:1,b:2});
//});

//终端打印日志中间件
app.use(morgan('combined'));
//app.use(morgan(':str'));

//把日志写入本地文件
//var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
//app.use(morgan('combined', {stream: accessLogStream}));

app.use('/hi', function (req, res, next) {
  res.writeHead(200);
  res.end('hi');
});

app.use(function (req, res, next) {
  res.end('not found');
});

http.createServer(app).listen(3000);
