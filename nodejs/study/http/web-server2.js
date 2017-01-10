var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'image/png'});
  var stream = fs.createReadStream('img-1.png');


  //stream.on('data', function (data) {
  //  res.write(data);
  //});
  //stream.on('end', function (data) {
  //  res.end();
  //});

  //上述代码简写 - 文件流接到响应流
  stream.pipe(res);

}).listen(3000, function () {
  console.log('监听3000端口');
});
