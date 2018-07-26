//导包
const express = require('express');

//创建实例router

const router = express.Router();

//路由配置

router.get('/',(req,res)=>{
	res.send('aaa');
})

//导出router
module.exports = router;