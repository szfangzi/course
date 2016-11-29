export let product2 = {
  id : 99
}
//函数也是可以导出的
export function showId() {
  console.log(product2.id);
}
//以下说明了base.js修改了这边的值
setTimeout(function () {
  //console.log(product2.id);
},0);
