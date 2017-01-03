var http = require('http');



//HTTP代理对象
var agent = new http.Agent({
  //网络请求并发数
  maxSockets:10
});
var options = {
  hostname:'localhost',
  port:1337,
  path:'/',
  method:'GET',
  //headers:{Expect:'100-continue'},
  agent:agent
};
var req = http.request(options, function (res) {
  console.log('STATUS:'+res.statusCode);
  console.log('HEADERS:'+JSON.stringify(res.headers));
  res.setEncoding('utf-8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });
});

req.on('response', function (incomingMessage) {
  console.log('获得响应了');
});
req.on('socket', function (socket) {
  console.log('TCP连接分配给请求了');
});
//客户端Expect:'100-continue' 服务端响应这个Expect:'100-continue' 后触发
req.on('continue', function (a,b) {
  console.log('Expect:100-continue响应了');
});

req.end();


