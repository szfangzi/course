var http = require('http');

var server = http.createServer(function (req, res) {
  //nodejs所有请求都是一个线程，如果抛出错误，整个http服务都会挂掉
  throw new Error('抛出一个错误');
}).listen(3000);
console.log('Server runing at http://localhost:3000/');

server.on('connection', function () {
  console.log('tcp建立连接');
});

//没有捕获错误的事件
process.on('uncaughtException', function (err) {
  console.error(1,err);
  //process.exit(1); 手动关闭进程
});
