//不暴露api
require('./module1.js');
require('./module2.js');

//暴露api
var m3 = require('./module3.js');
m3.test();
console.log(m3.name);
