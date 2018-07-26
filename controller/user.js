//路由回调函数的处理

//导入数据库配置
const db = require('../tools/db_config.js');
//导入模型，方便调用验证的函数
const User = require('../models/m_user.js');

exports.showSignIn = (req,res)=>{
	res.render('signin.html');
}

exports.handleSignIn = (req,res)=>{
// console.log(req)
	//获取表单数据
	const body = req.body;

	// console.log(req.body);

	//数据库操作
	User.checkMail(body.email,(err,results)=>{

		if(err) {
			return res.send({
				code: 1,
				message:err.message
			})
		}
		// console.log(results);
		//是否为空
		if(results.length == 0) {

			return res.send({
				code: 404,
				message:'邮箱不存在'
			})

		} 
		//不为空的话，验证密码
		if(results[0].password != body.password) {

			return res.send({
				code: 2,
				message:'密码错误'
			})

		}
		req.session.user = results[0];
		console.log(req.session);

		//走到这里，说明密码正确//密码正确，进行跳转
		res.send({
			code:200,
			message:'可以登录'
		})

	})
	

}