var express = require('express');
var router = express.Router();
// var fs = require('fs');
// var http = require('http');
// var querystring = require('querystring');


// 阻塞代码实例
// var data = fs.readFileSync('./public/static/input.txt');
// console.log(data.toString());

// 非阻塞代码实例
// fs.readFile('./public/static/input.txt', function(err, data) {
// 	if (err) return console.error(err);
// 	console.log(data.toString());
// })

// console.log("程序执行结束!");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('Hello World!');
	// res.render('index', { title: 'Express', message: 'jeskson' });
});

module.exports = router;
