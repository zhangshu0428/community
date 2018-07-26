//导包
const express = require('express');
const user = require('./controller/user.js');

//创建实例router

const router = express.Router();

//路由配置
	//显示登录页面
router.get('/signin',user.showSignIn);
	//校验表单
// router.post('/signin',user.handleSignIn);	
//导出router
module.exports = router;