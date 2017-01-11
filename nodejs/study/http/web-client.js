var http = require('http');

http.request({
  host:'127.0.0.1',
  port:3000,
  path:'/api2',
  method:'GET'
}, function (res) {
  console.log(res);
  var body = '';
  res.setEncoding('utf8');
  //获取响应实体
  res.on('data', function (chunk) {
    body+=chunk;
  });
  res.on('end', function () {
    console.log('we got:'+body);
  })

}).end();
