var fs = require('fs');
var files = fs.readdirSync(process.cwd());
files.forEach(function (file) {
  if(/\.txt/.test(file)){
    //监听文件修改
    fs.watchFile(process.cwd()+'/'+file, function () {
      console.log(' - '+file+' changed!');
    })
  }
});
