var net = require('net');

//net模块建立客户端对tcp服务器进行会话
var client = net.connect({port:8124}, function () {
  console.log('client connected');
  //服务端打印 客户端传输过来的数据
  client.write('world\r\n');
});
client.on('data', function (data) {
  //客户端打印 服务端传输过去的数据
  console.log(data.toString());
  client.end();
});
client.on('end', function () {
  console.log('client disconnected');
});
