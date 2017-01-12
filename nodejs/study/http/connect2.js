var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static')
var time = require('./public/req-time');

var app = connect();
//处理静态资源
app.use(serveStatic(__dirname + '/'));

//Connect允许中间件挂载到某个URL上
// 此时URL和某个目录或者静态资源对应起来了
app.use('/img', serveStatic(__dirname + '/public/img-1.png'));

app.use(time({time:500}));

//通过next来做流控制，req和res通过流的next一直传递下去，指向同一个req和res
app.use(function (req, res, next) {
 if('/a'==req.url){
   res.writeHead(200);
   res.end('fast!');
 }else{
   next();
 }
});
app.use(function (req, res, next) {
  if('/b'==req.url){
    setTimeout(function () {
      res.writeHead(200);
      res.end('slow!');
    }, 1000);
  }else{
    next();
  }
});
app.use(function (req, res, next) {
  res.writeHead(404);
  res.end('not found');
});

http.createServer(app).listen(3000);

