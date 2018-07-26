//导入mysql
const mysql = require('mysql');
//配置数据库
var connection = mysql.createConnection({
    host: 'localhost', // 要连接的主机名
    user: 'root', // 要连接的数据库的用户名
    password: 'root', // 数据库密码
    database: 'newssql' // 数据库
});
// connection.connect();
//导出connection
exports.connection = connection;