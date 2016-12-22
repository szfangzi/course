var dgram = require('dgram');

var message = new Buffer('深入浅出Node.js');

var socket = dgram.createSocket("udp4");

socket.send(message, 0, message.length, 41234, 'localhost', function (err, bytes) {
  console.log(bytes);
  socket.close();
});
