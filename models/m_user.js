//导入数据库配置
const db = require('../tools/db_config.js');


function checkMail(email,callback) {

		//数据库操作
	
		const sqlstr = 'SELECT * FROM users WHERE email = ?';


		db.query(sqlstr,email,(err,results)=>{

			if(err) {

				return callback(err,null);
			}

			callback(null,results);
		
	})
}

//导出函数
exports.checkMail = checkMail;