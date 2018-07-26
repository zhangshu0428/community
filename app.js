//1.导包
const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');


//创建express实例
const app = express();



//统一处理静态资源
app.use('/public',express.static('./public'));
//配置模板引擎
app.engine('html', require('express-art-template'))
//配置第三方模块
app.use("/node_modules", express.static("./node_modules"));
//配置body-parser;
//// bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: false }));


//挂载路由
app.use(router);
//绑定端口
app.listen(12345,()=>{
	console.log('run it at 12345');
})