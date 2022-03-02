var express = require('express');
var router = express.Router();
var db = require('../conf/db')

router.get('/', (req, res, next) => {
  // sql查询user表
  db.query('SELECT * FROM user', [], function (results, fields) {
    // 以json的形式返回
    res.json({ results })
  })
})

module.exports = router;
