console.log(1);
//将一个函数的执行时间规划到下一个事件循环中
process.nextTick(function () {
  console.log(4);
});
console.log(2);
for (var i = 0; i < 1000000000; i++) {
  if(i==10000000){
    console.log(3);
  }
}
