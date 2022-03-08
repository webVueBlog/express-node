# express-node 

- 高度包容、快速而极简的Node.js Web框架
- [Node.js v9.11.2 Documentation](https://nodejs.org/dist/latest-v9.x/docs/api/esm.html)
- [Express](https://expressjs.com/)
- 所有过程已测试成功，放心使用哦！

0. "express": "~4.16.1",
1. node
2. "cookie-parser": "~1.4.4",
3. "body-parser": "^1.18.3",
4. "multer": "^1.4.4",

- body-parser 
	- node.js 中间件
	- 用于处理 JSON, Raw, Text 和 URL 编码的数据。
- cookie-parser 
	- 这就是一个解析Cookie的工具。
	- 通过req.cookies可以取到传过来的cookie，并把它们转成对象。
- multer 
	- node.js 中间件
	- 用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

在 Windows 命令提示符上，使用以下命令：

```js
> set DEBUG=myapp:* & npm start
```

- 使用vscode 下载REST Client
- [加密，解密](https://github.com/travist/jsencrypt)
- 插件nodemon - npm install nodemon
- [文件断点续传](./otherDoc/file.md)

```js
"start": "node ./bin/www" -> "start": "nodemon ./bin/www"
```

使用 npm init 命令为应用程序创建 package.json 文件。

## 阶段一

- [安装](./install.md)
- [hello world](./doc/hello.md)
- [Express 应用程序生成器](./doc/express-generator.md)
- [基本路由](./doc/basic-routing.md)
- [在 Express 中提供静态文件](./doc/static-files.md)
- [路由列表](./doc/route-separation.md)
- [路由图](./doc/route-map.md)
- [检查数据库](./doc/data.md)
- [路由](./doc/routing.md)
- [编写中间件](./doc/writing.md)
- [使用中间件](./doc/using.md)
- [使用模板引擎](./doc/using-template-engines.md)
- [错误处理](./doc/error-handing.md)
- [调试](./doc/debugging.md)
- [数据库](./doc/database.md)

## 阶段二

- [Node.js 连接 MySQL](./doc/nodejs-mysql.md)
- [Node.js 回调函数](./doc/nodejs-callback.md)
- [Node.js 事件循环](./doc/nodejs-event-loop.md)
- [Node.js EventEmitter](./doc/nodejs-event.md)
- [Node.js 函数](./doc/nodejs-function.md)
- [Node.js 路由](./doc/nodejs-router.md)
- [Node.js 工具模块](./doc/nodejs-utitlity-module.md)
- [Node.js GET/POST请求](./doc/nodejs-get-post.md)
- [Node.js Express 框架](./doc/nodejs-express-framework.md)
- [Node.js RESTful API](./doc/nodejs-restful-api.md)
- [Node.js Web 模块](./doc/nodejs-web-module.md)
- [Node.js 全局对象](./doc/nodejs-global-object.md)
- [Node.js 常用工具](./doc/nodejs-util.md)
- [Node.js 文件系统](./doc/nodejs-fs.md)
- [Node.js 多进程](./doc/nodejs-process.md)

## 阶段三

- [MySQL的基础知识](./MySQL/MySQL的基础知识.md)
- [MySQL的那些特性](./MySQL/MySQL的那些特性.md)
- [MySQL的数据类型](./MySQL/MySQL的数据类型.md)
- [MySQL如何编写和使用存储在服务器端的SQL对象](./MySQL/MySQL如何编写和使用存储在服务器端的SQL对象.md)
- [如何查询运行得更快](./MySQL/如何查询运行得更快.md)

## 阶段四

- [KOA基于Node.js平台的下一代web开发框架](./koa/开发文档.md)
- [koa2 快速开始](./koa/koa2快速开始.md)
	- 示例目录下 koa2helloworld 文件
- [async-await使用](./koa/async-await使用.md)
- [koa2简析结构](./koa/koa2简析结构.md)
- [koa中间件开发和使用](./koa/中间件开发和使用.md)
- [koa2原生路由实现](./koa/koa2原生路由实现.md)
	- 示例目录下 koa2原生路由实现 文件
- [koa-router中间件](./koa/koa-router中间件.md)
	- 示例目录下 koa-router中间件 文件
- [GET请求数据获取](./koa/GET请求数据获取.md)
	- 示例目录下 koa-GET请求数据获取 文件
- [POST请求参数获取](./koa/POST请求参数获取.md)
	- 示例目录下 koa-POST请求参数获取 文件
- [koa-bodyparser中间件](./koa/koa-bodyparser中间件.md)
	- 示例目录下 koa-bodyparser中间件 文件
- [原生koa2实现静态资源服务器](./koa/原生koa2实现静态资源服务器.md)
	- 示例目录下 原生koa2实现静态资源服务器 文件
- [koa-static中间件使用](./koa/koa-static中间件使用.md)
	- 示例目录下 koa-static中间件使用 文件
- [koa2使用cookie](./koa/koa2使用cookie.md)
	- 示例目录下 koa2使用cookie 文件
- [koa2实现session](./koa/koa2实现session.md)
	- 示例目录下 koa2实现session 文件
- [koa2加载模板引擎](./koa/koa2加载模板引擎.md)
	- 示例目录下 koa2加载模板引擎 文件
	- [ejs模板引擎官方文档](https://github.com/mde/ejs)
- [busboy模块](./koa/busboy模块.md)
- [上传文件简单实现](./koa/上传文件简单实现.md)
- [异步上传图片实现](./koa/异步上传图片实现.md)
- [mysql模块](./koa/mysql模块.md)
- [async-await封装使用mysql](./koa/async-await封装使用mysql.md)
- [建表初始化](./koa/建表初始化.md)
- [原生koa2实现jsonp](./koa/原生koa2实现jsonp.md)
- [koa-jsonp中间件](./koa/koa-jsonp中间件.md)
- [单元测试](./koa/单元测试.md)
- [开发debug](./koa/开发debug.md)
- [项目demo](./koa/项目demo.md)
- [框架设计](./koa/框架设计.md)
- [分层设计](./koa/分层设计.md)
- [数据库设计](./koa/数据库设计.md)
- [路由设计](./koa/路由设计.md)
- [webpack4 环境搭建](./koa/webpack4环境搭建.md)
- [使用react.js](./koa/使用react.md)
- [session登录态判断处理](./koa/session登录态判断处理.md)
- [import/export使用](./koa/import-export使用.md)

## 阶段五

包含的示例

- 404 - 404 处理
```js
yarn run v1.22.11
$ ./node_modules/.bin/mocha --harmony
  404
    when GET /
      √ should return the 404 page
  1 passing (39ms)
Done in 1.21s.
```
- body-parsing - 请求正文解析
```js
yarn run v1.22.11
$ ./node_modules/.bin/mocha --harmony
  Body Parsing
    POST /uppercase
      with JSON
        √ should work (46ms)
      with urlencoded
        √ should work
      when length > limit
        √ should 413
      when no name is sent
        √ should 400
  4 passing (80ms)
Done in 1.31s.
```
- compose - 撰写中间件示例
```js
yarn run v1.22.11
$ ./node_modules/.bin/mocha --harmony
  Compose
    when GET /
GET / - 4
      √ should say "Hello World" (43ms)
GET / - 0
      √ should set X-Response-Time
    when not GET /
GET /aklsjdf - 0
      √ should 404
  3 passing (82ms)
Done in 2.90s.
```
- 条件中间件- 显示如何有条件地应用中间件
- cookies - cookie 使用示例
- csrf - 中间件 csrf 示例
- 错误- 错误处理和传播
- flash-messages - flash 示例
- hello-world - 你好世界应用程序
- multipart - 使用 co-busboy 下载文件的多部分示例
- 协商- 协商使用示例
- stream-file - 简单的文件流
- 流对象- 对象流
- stream-server-side-events - 服务器端事件流
- 流视图- 查看流
- 模板- 简单的视图渲染
- 上传- 多文件上传
- vhost - 虚拟主机示例

## 常见问题及解答

## Q1:如何呈现纯 HTML？

您不必这么做！无需使用 res.render() 函数来“呈现”HTML。 如果您具有特定文件，请使用 res.sendFile() 函数。 如果您希望从目录提供许多资产，请使用 express.static() 中间件函数。

## 勘误及提问

如果有疑问或者发现错误，可以在相应的 issues 进行提问或勘误。

如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。

## License

所有文章采用知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议进行许可。

