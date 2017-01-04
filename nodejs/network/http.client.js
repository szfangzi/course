var http = require('http');

var options = {
  hostname:'localhost',
  port:1337,
  path:'/',
  method:'GET',
  headers:{}
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

req.end();


