var dgram = require('dgram');

var socket = dgram.createSocket("udp4");

socket.on('message', function (msg, rinfo) {
  console.log('server got: '+msg+" from "+rinfo.address+":"+rinfo.port);
});

socket.on('listening', function () {
  var address = socket.address();
  console.log("server listening "+address.address+":"+address.port);
});

socket.on('close', function () {
  console.log('服务端调用了socket.close()');
});

socket.bind(41234);

