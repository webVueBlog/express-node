var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 自定义
var testRouter = require('./routes/test');
var birds = require('./routes/birds');

var app = express();


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


app.use('/', indexRouter);
app.use('/users', usersRouter);
// 自定义
app.use('/test', testRouter);
app.use('/birds', birds);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	console.log('Time: ', Date.now());
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
