var http = require('http');

//server是EventEmitter的实例
var server = http.createServer(function (req, res) {
  //报文头可以先用setHeader设置
  //res.setHeader('Content-Type','text/html');
  //console.log(res.getHeader('Content-Type'));
  //res.writeHead(200);

  //报文头也可以在writeHead的时候再传对象
  //其中Connection如果是close，那么请求完毕会关闭连接，下次请求需要再次连接，浪费流量，一般默认的话是keep-alive，请求后一直保持连接
  //res.writeHead(200, {'Content-Type':'text/plain', 'Connection':'close'});
  res.writeHead(200, {'Content-Type':'text/plain'});

  var buffers = [];

  //请求发送的实体数据是通过分割成一小块trunk来发送的，收到一块我就添加到buffer数组
  req.on('data', function (trunk) {
    buffers.push(trunk);
    //数据接收完毕我就返回给客户端
  }).on('end', function () {
    var buffer = Buffer.concat(buffers);
    //把数据写入报文主体
    res.write('我写入了一段文字到报文主体。');
    //end会先调用write，然后把响应报文发送给客户端
    res.end(buffer);
  });

  //路由判断
  //if(req.url == '/'){
  //  res.end('这是首页');
  //}else if(req.url == '/list'){
  //  res.end('这是列表页');
  //}

}).listen(1337);

//TCP三次握手连接
server.on('connection', function (socket){
  console.log('TCP三次握手成功');
  //server.close();
});
server.on('request', function (incomingMessage){
  console.log('客户端来请求了');
});
server.on('close', function (incomingMessage){
  console.log('服务端没有启用长连接，当server.close()后并且TCP连接也关闭了，这个时候就触发了close事件');
});
//xhr.setRequestHeader('Expect','100-continue')的时候回触发，浏览器禁止修改Expect，所以暂无效果
server.on('checkContinue', function (){
  console.log('检查内容，与request事件互斥');
});
server.on('connect', function (socket){
  console.log(111);
  console.log('检查内容，与request事件互斥');
});

console.log('Server runing at http://localhost:1337/');
