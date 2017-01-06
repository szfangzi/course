var fs = require('fs');
var stdout =  process.stdout;
var stdin =  process.stdin;
var stats = [];

fs.readdir(__dirname, function (err, files) {
  console.log('');
  if(!files.length){
    return console.log('     \033[31m No files to show!\033[39m\n');
  }
  console.log('    Select which file or directory you want to see\n');

  file(0);

  function file(i) {
    var filename = files[i];
    fs.stat(__dirname+'/'+filename, function (err, stat) {
      stats.push(stat);
      if(stat.isDirectory()){
        console.log('      '+i+'        \033[36m'+filename+'/\033[39m');
      }else{
        //\033表示转义序列的开始 [表示开始颜色设置 90表示前景色为亮灰色
        console.log('      '+i+'        \033[90m'+filename+'/\033[39m');
      }

      i++;
      if(i==files.length){
        read();
      }else{
        file(i);
      }

    })

  }

  function read() {
    console.log('');
    stdin.setEncoding('utf8');

    stdin.on('data', function (data) {
      if(!files[Number(data)]){
        stdout.write('     \033[33mEnter your choice: \033[39m');
      }else{
        stdin.pause();
        if(stats[Number(data)].isDirectory()){
          fs.readdir(__dirname+'/'+files[Number(data)], 'utf8', function (err, files) {
            console.log('');
            console.log('   ('+files.length+' files)');
            files.forEach(function (file) {
              console.log('     -   '+file);
            })
          });
        }else{
          fs.readFile(__dirname+'/'+files[Number(data)], 'utf8', function (err, data) {
            console.log('');
            console.log('\033[90m'+data.toString().replace(/(.*)/g, '        $1')+'\033[39m');
          });
        }

      }
    });
  }

});
//打印控制台的参数
console.log(process.argv);

//获取该程序运行时的目录
console.log(__dirname);
//获取调用该程序的目录,比如在nodejs目录执行node study/app8.js
console.log(process.cwd());
//改变目录
console.log(process.chdir('/'));
console.log(process.cwd());

//打印环境变量
//console.log(process.env);

//退出程序 最好加上退出代码1

process.on('exit', function () {
  console.log('退出了');
});
//process.exit(1);
