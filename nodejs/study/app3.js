//不暴露api
require('./module1.js');
require('./module2.js');

//暴露api
var m3 = require('./module3.js');
var m4 = require('./module4.js');
console.log(m3);
console.log(m4);

