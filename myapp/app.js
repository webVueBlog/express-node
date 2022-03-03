var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');
var util = require('util');
var fs = require("fs");
var multer = require('multer');
var url = require('url');

//添加的新用户数据
var user = {
	"user4": {
		"name": "mohit",
		"password": "password4",
		"profession": "teacher",
		"id": 4
	}
}

var app = express();

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})
app.use(multer({
	dest: '/tmp/'
}).array('image'));

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// 自定义
// var testRouter = require('./routes/test');
// var birds = require('./routes/birds');

// var server = require("./routes/server");
// var router = require("./routes/router");
// server.start(router.route);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.engine('.html', require('pug').__express);
// app.set('view engine', 'html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

// load the cookie-parsing middleware
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	console.log('Enter:', Date.now())
	next()
})

//  主页输出 "Hello World"
// app.get('/', function (req, res) {
//    console.log("主页 GET 请求");
//    console.log("Cookies: " + util.inspect(req.cookies));
//    var cookies = util.inspect(req.cookies)
//    res.send('Hello GET' + cookies);
// })

app.get('/', function(req, res) {
	// 解析请求，包括文件名
	var pathname = url.parse(req.url).pathname;
	// 输出请求的文件名
	console.log("Request for " + pathname + " received.");
	// http://localhost:3000/static/index.html
	// res.sendFile( __dirname + "/" + "index.html" );
	res.sendFile(__dirname + "/" + "public/static/index.html");
})

var id = 2;
// app.get('/deleteUser', function (req, res) {
//    fs.readFile( __dirname + "/" + "json/users.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        delete data["user" + id];

//        console.log( data );
//        res.end( JSON.stringify(data));
//    });
// })

app.get('/deleteUser', function(req, res) {
	// 读取已存在的数据
	fs.readFile(__dirname + "/" + "json/users.json", 'utf8', function(err, data) {
		data = JSON.parse(data);
		delete data["user" + id];
		console.log(data);
		var des_file = __dirname + "/" + "json/users.json"
		fs.writeFile(des_file, JSON.stringify(data), function(err) {
			if (err) {
				console.log(err);
			} else {
				res.end(JSON.stringify(data));
			}
		});

	});
})

app.get('/listUsers/:id', function(req, res) {
	// 首先我们读取已存在的用户
	fs.readFile(__dirname + "/" + "json/users.json", 'utf8', function(err, data) {
		data = JSON.parse(data);
		var user = data["user" + req.params.id]
		console.log(user);
		res.end(JSON.stringify(user));
	});
})

app.get('/addUser', function(req, res) {
	// 读取已存在的数据
	fs.readFile(__dirname + "/" + "json/users.json", 'utf8', function(err, data) {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		var des_file = __dirname + "/" + "json/users.json"
		fs.writeFile(des_file, JSON.stringify(data), function(err) {
			if (err) {
				console.log(err);
			} else {
				res.end(JSON.stringify(data));
			}
		});

	});
})

// app.get('/addUser', function (req, res) {
//    // 读取已存在的数据
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        data["user4"] = user["user4"];
//        console.log( data );
//        res.end( JSON.stringify(data));
//    });
// })

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + "/" + "json/users.json", 'utf8', function(err, data) {
		console.log(data);
		res.end(data);
	});
})

app.post('/file_upload', function(req, res) {

	console.log(req.files[0]); // 上传的文件信息

	var des_file = __dirname + "/" + req.files[0].originalname;
	fs.readFile(req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err) {
			if (err) {
				console.log(err);
			} else {
				response = {
					message: 'File uploaded successfully',
					filename: req.files[0].originalname
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
})


app.get('/process_get', function(req, res) {
	// 输出 JSON 格式
	var response = {
		"first_name": req.query.first_name,
		"last_name": req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function(req, res) {
	// 输出 JSON 格式
	var response = {
		"first_name": req.body.first_name,
		"last_name": req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

//  POST 请求
// app.post('/', function (req, res) {
//    console.log("主页 POST 请求");
//    res.send('Hello POST');
// })

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get('/ab*cd', function(req, res) {   
//    console.log("/ab*cd GET 请求");
//    res.send('正则匹配');
// })

// app.use('/index', indexRouter);
// app.use('/users', usersRouter);
// 自定义
// app.use('/test', testRouter);
// app.use('/birds', birds);

// var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	// console.log('Time: ', Date.now());
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	console.error(err.stack)
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
