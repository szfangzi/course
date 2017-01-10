var fs = require('fs');

//整个文件读取完毕
//fs.readFile('txt.txt', function (err, contents) {
//  console.log(contents);
//});

//每次读取一块内容
var stream = fs.createReadStream('txt.txt');
stream.on('data', function (chunk) {
  console.log(chunk);
});
stream.on('end', function (chunk) {
  console.log('文件读取完毕');
});
//写入文字到文件
//var streamWrite = fs.createWriteStream('txt.txt');
//streamWrite.write('1111');
