var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static')

var app = connect();
//处理静态资源
app.use(serveStatic(__dirname + '/'));

//通过next来做流控制
app.use(function (req, res, next) {
  console.log(1);
  next();
});
app.use(function (req, res, next) {
  console.log(2);
  next();
});
app.use(function (req, res, next) {
  console.log(3);
  res.writeHead(404);
  res.end('not found');
});

http.createServer(app).listen(3000);

