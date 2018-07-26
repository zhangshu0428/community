//路由回调函数的处理
//导入mysql
const mysql = require('mysql');

//配置数据库
var connection = mysql.createConnection({
    host: 'localhost', // 要连接的主机名
    user: 'root', // 要连接的数据库的用户名
    password: 'root', // 数据库密码
    database: 'newssql' // 数据库
});
connection.connect();


exports.showSignIn = (req,res)=>{
	res.render('signin.html');
}

exports.handleSignIn = (req,res)=>{
// console.log(req)
	//获取表单数据
	const body = req.body;

	// console.log(req.body);

	//数据库操作
	
	const sqlstr = 'SELECT * FROM users WHERE email = ?';

	connection.query(sqlstr,body.email,(err,results)=>{

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
		//走到这里，说明密码正确//密码正确，进行跳转
		res.send({
			code:200,
			message:'可以登录'
		})
		
	})



}