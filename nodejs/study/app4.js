var EventEmitter = require('events').EventEmitter;

//自定义事件
//var a = new EventEmitter();
//a.on('event', function () {
//  console.log('event called');
//});
//a.emit('event');

//继承EventEmitter
var Myclass = function () { }
Myclass.prototype.__proto__ = EventEmitter.prototype;

var a = new Myclass();
a.on('event', function () {
  console.log('event called');
});
//a.once('event', function () {
//  console.log('event called');
//});
a.emit('event');
a.emit('event');
a.emit('event');
