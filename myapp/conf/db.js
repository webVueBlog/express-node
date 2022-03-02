// db.js 
var mysql = require('mysql')
var dbConfig = require('./db.config')

module.exports = {
  query: function (sql, params, callback) {
    //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
    var connection = mysql.createConnection(dbConfig)
    connection.connect(function (err) {
      if (err) {
        throw err
      }
      //开始数据操作
      connection.query(sql, params, function (err, results, fields) {
        if (err) {
          throw err
        }
        //将查询出来的数据返回给回调函数
        callback &&
          callback(
            JSON.parse(JSON.stringify(results)),
            JSON.parse(JSON.stringify(fields))
          )
        //停止链接数据库，必须在查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
        connection.end(function (err) {
          if (err) {
            console.log('关闭数据库连接失败！')
            throw err
          }
        })
      })
    })
  },
}

