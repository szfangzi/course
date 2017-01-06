var fs = require('fs');

//同步读取文件夹的文件名
var list = fs.readdirSync(__dirname);
console.log(__dirname);
console.log(list);

//异步读取文件夹的文件名
fs.readdir(__dirname, function (err, files) {
  console.log(files);
});
console.log(11);
