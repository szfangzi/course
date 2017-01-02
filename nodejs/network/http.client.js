var http = require('http');

var options = {
  hostname:'localhost',
  port:1337,
  path:'/',
  method:'GET',
  headers:{connection:'keep-alive'}
};
var req = http.request(options, function (res) {
  console.log('STATUS:'+res.statusCode);
  console.log('HEADERS:'+JSON.stringify(res.headers));
  res.setEncoding('utf-8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });
});

//req.end();


