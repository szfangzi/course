import {id} from 'module1.js';
//报错，id是只读的
id = 8000;
console.log('我从module1.js里面加载到id：'+id);
