//1.导包
const express = require('express');
const router = require('./router.js');


//创建express实例
const app = express();


//挂载路由
app.use(router);


//绑定端口
app.listen(12345,()=>{
	console.log('run it at 12345');
})