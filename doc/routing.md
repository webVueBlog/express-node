## 路由

路由表示应用程序端点 (`URI`) 的定义以及端点响应客户机请求的方式。

`app.get()` 用于处理 `GET` 请求，而 `app.post` 则用于处理 `POST` 请求。

应用程序监听与指定路由和方法匹配的请求，当检测到匹配时，他会调用对应的回调函数。

以下代码是非常基本的路由示例。

```js
var express = require('express');
var app = express();

// 当对主页发出 GET 请求时，响应“hello world”
app.get('/', function(req, res) {
  res.send('hello world');
});
```

## 路由方法

```js
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
```

Express 支持对应于 HTTP 方法的以下路由方法：get、post、put、head、delete、options、trace、copy、lock、mkcol、move、purge、propfind、proppatch、unlock、report、mkactivity、checkout、merge、m-search、notify、subscribe、unsubscribe、patch、search 和 connect。

## 响应方法

方法：

- res.download(): 提示将要下载文件
- res.end(): 结束响应进程
- res.json(): 发送JSON响应
- res.jsonp(): 在JSONP的支持下发送JSON响应
- res.redirect(): 重定向请求
- res.render(): 呈现视图模板
- res.send(): 发送各种类型的响应
- res.sendFIle(): 以八位元流形式发送文件。
- res.sendStatus(): 设置响应状态码并以响应主体形式发送其字符串表示。

## express.Router

使用 express.Router 类来创建可安装的模块化路由处理程序。

Router 实例是完整的中间件和路由系统；因此，常常将其称为“微型应用程序”。

在应用程序目录中创建名为 birds.js 的路由器文件，其中包含以下内容：

```js
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```

在应用程序目录中创建名为 `birds.js` 的路由器文件，其中包含以下内容：

```js
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```

接着，在应用程序中装入路由器模块：

```js
var birds = require('./birds');
...
app.use('/birds', birds);
```

此应用程序现在可处理针对 `/birds` 和 `/birds/about` 的请求，调用特定于此路由的 `timeLog` 中间件函数。

