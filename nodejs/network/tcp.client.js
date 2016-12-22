var net = require('net');

//net模块建立客户端对tcp服务器进行会话
var socket = net.connect({port:8124}, function () {
  console.log('client connected');
  //服务端打印 客户端传输过来的数据
  socket.write('\nclient\n');
});
socket.on('data', function (data) {
  //客户端打印 服务端传输过去的数据
  console.log(data.toString());
  //client.end();
});
socket.on('error', function (e) {
  console.log(e.errno);
});
socket.on('timeout', function () {
  console.log('timeout');
});
socket.on('end', function () {
  console.log('client disconnected');
});
