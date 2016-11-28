import {id} from 'module1.js';
import {product} from 'module2.js';
//报错，id是只读的
//id = 8000;
//console.log('我从module1.js里面加载到id：'+id);

//不报错，允许修改对象里面的属性
product.id = 8000;
console.log('我从module2.js里面加载到id：'+product.id);
