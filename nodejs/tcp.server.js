var net = require('net');

//net模块建立tcp服务器
//方法1
var server = net.createServer(function (socket) {
  //客户端有输入数据就触发data事件
  socket.on('data', function (data) {
    //客户端打印 服务端传输过去的数据
    socket.write('\nhi\n');
    //服务端打印 客户端传输过来的数据
    console.log(data.toString());
  });

  //客户端断开连接就触发这个事件
  socket.on('end', function () {
    console.log('连接断开');
  });
  //客户端打印欢迎信息
  socket.write('welcome\n');
});

//方法2
//var server = net.createServer();
//server.on('connection', function (socket) {
//  //客户端有输入数据就触发data事件
//  socket.on('data', function (data) {
//    //客户端打印数据
//    socket.write('\nhi\n');
//    //服务端打印数据
//    console.log(data);
//  });
//
//  //客户端断开连接就触发这个事件
//  socket.on('end', function () {
//    console.log('连接断开');
//  });
//  //客户端打印欢迎信息
//  socket.write('welcome\n');
//});

//服务器监听8124端口
server.listen(8124, function () {
  console.log('server bound');
});

