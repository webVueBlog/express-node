# express-node 

- 高度包容、快速而极简的Node.js Web框架
- [Node.js v9.11.2 Documentation](https://nodejs.org/dist/latest-v9.x/docs/api/esm.html)
- [Express](https://expressjs.com/)
- 所有过程已测试成功，放心使用哦！
- [the-nodejs-os-module](http://nodejs.cn/learn/the-nodejs-os-module)
- [nodejs-streams](http://nodejs.cn/learn/nodejs-streams)
- [Mac电脑使用终端快速进入mysql命令行的方法](./doc/mac.md)
- [yarn安装](./doc/yarn安装.md)

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

## 阶段四

包含的示例

- 404 - 404 处理
- body-parsing - 请求正文解析
- compose - 撰写中间件示例
- 条件中间件 conditional-middleware - 显示如何有条件地应用中间件
- cookies - cookie 使用示例
- 错误 errors - 错误处理和传播
- 上传 upload - 多文件上传

## 阶段五

- [Node简介](./NodeDoc/Node简介.md)
- [如何从 Node.js 读取环境变量](./NodeDoc/如何从Node读取环境变量.md)
- [使用 exports 从 Node.js 文件中公开功能](./NodeDoc/使用exports从Node文件中公开功能.md)
- [npm包管理器简介](./NodeDoc/npm包管理器简介.md)
- [npm 将软件包安装到哪里](./NodeDoc/npm将软件包安装到哪里.md)
- [package-lock.json 文件](./NodeDoc/package-lock文件.md)
- [使用 npm 的语义版本控制](./NodeDoc/使用npm的语义版本控制.md)
- [Node.js 事件循环](./NodeDoc/Node事件循环.md)
- [了解 process.nextTick()](./NodeDoc/nextTick.md)
- [了解 setImmediate()](./NodeDoc/setImmediate.md)
- [JavaScript 定时器](./NodeDoc/定时器.md)
- [JavaScript 异步编程与回调](./NodeDoc/异步编程与回调.md)
- [了解 JavaScript Promise](./NodeDoc/Promise.md)
- [具有 Async 和 Await 的现代异步 JavaScript](./NodeDoc/async-await.md)
- [Node.js 事件触发器](./NodeDoc/事件触发器.md)
- [搭建 HTTP 服务器](./NodeDoc/搭建HTTP服务器.md)
- [使用 Node.js 发送 HTTP 请求](./NodeDoc/使用Node发送HTTP请求.md)
- [在 Node.js 中使用文件描述符](./NodeDoc/在Node中使用文件描述符.md)
- [Node.js 文件属性](./NodeDoc/Node文件属性.md)
- [Node.js 文件路径](./NodeDoc/Node文件路径.md)
- [使用 Node.js 读取文件](./NodeDoc/readFile.md)
- [使用 Node.js 写入文件](./NodeDoc/writeFile.md)
- [在 Node.js 中使用文件夹](./NodeDoc/使用文件夹.md)
- [Node.js 文件系统模块](./NodeDoc/文件系统模块.md)
- [Node.js 路径模块](./NodeDoc/路径模块.md)
- [Node.js 事件模块](./NodeDoc/事件模块.md)
- [Node.js 流](./NodeDoc/流.md)

## 阶段六

- [数据库校验](./Mysql/数据库校验.md)
- [MySQL 管理](./Mysql/MySQL管理.md)
- [创建数据库](./Mysql/创建数据库.md)
- [删除数据库](./Mysql/删除数据库.md)
- [选择数据库](./Mysql/选择数据库.md)
- [数据类型](./Mysql/数据类型.md)
- [创建数据表](./Mysql/创建数据表.md)
- [删除数据表](./Mysql/删除数据表.md)
- [插入数据](./Mysql/插入数据.md)
- [查询数据](./Mysql/查询数据.md)
- [where](./Mysql/where.md)
- [UPDATE](./Mysql/UPDATE.md)
- [DELETE](./Mysql/DELETE.md)
- [LIKE](./Mysql/LIKE.md)
- [UNION](./Mysql/UNION.md)
- [排序](./Mysql/排序.md)
- [GROUP BY](./Mysql/分组.md)

## 阶段七

- [连接的使用](./Mysql/连接的使用.md)
- [NULL值处理](./Mysql/NULL值处理.md)
- [正则表达式](./Mysql/正则表达式.md)
- [事务](./Mysql/事务.md)
- [ALTER](./Mysql/ALTER.md)
- [索引](./Mysql/索引.md)
- [临时表](./Mysql/临时表.md)
- [复制表](./Mysql/复制表.md)
- [元数据](./Mysql/元数据.md)
- [序列使用](./Mysql/序列使用.md)
- [处理重复数据](./Mysql/处理重复数据.md)
- [sql注入](./Mysql/注入.md)
- [导出数据](./Mysql/导出数据.md)
- [导入数据](./Mysql/导入数据.md)
- [函数](./Mysql/函数.md)
- [运算符](./Mysql/运算符.md)

## 阶段八

- [node概述](./企业级/node概述.md)
- [模块化](./企业级/模块化.md)
- [测试](./企业级/测试.md)
- [Buffer](./企业级/Buffer.md)
- [事件处理](./企业级/事件处理.md)
- [定时处理](./企业级/定时处理.md)
- [Node用户登录与注册功能总结](./企业级/Node用户登录与注册功能总结.md)
- [CORS](./企业级/CORS.md)
- [腾讯云短信服务](./企业级/腾讯云短信服务.md)
- [文件处理](./企业级/文件处理.md) - file文件夹示例
- [进程](./企业级/进程.md)
- [流](./企业级/流.md)
- [Stream 流](./企业级/Stream流.md)
- [Buffer 缓冲区](./企业级/Buffer缓冲区.md)
- [TCP](./企业级/TCP.md)
- [UDP](./企业级/UDP.md)
- [EventLoop 事件循环](./企业级/事件循环.js)
- [Vue 实现前进刷新，后退不刷新的效果](./企业级/实现前进刷新.js)
- [Vue 页面权限控制和登陆验证](./企业级/页面权限控制和登陆验证.js)

## 阶段九

- [基础数据库术语](./Mysql/基础数据库术语.md)
- [mysql教程](./Mysql/mysql.md)
- [HTTP](./企业级/HTTP.md)
- [WebSocket](./企业级/WebSocket.md)

## React技术全家桶

### 阶段一

- [react简介](./react/react简介.md)
- [hello-react](./react/hello-react.md)
- [第一个React Web应用程序](./react/Web应用程序.md)
- [React State(状态)](./react/State.md)
- [React Props](./react/Props.md)
- [React 事件处理](./react/事件处理.md)
- [React 组件 API](./react/API.md)
- [React 组件生命周期](./react/组件生命周期.md)
- [React Refs](./react/Refs.md)

### 阶段二

- [JSX到JavaScript的转换](./react/JSX到JavaScript的转换.md)
- [ReactElement](./react/ReactElement.md)
- [react-component](./react/react-component.md)
- [react-ref](./react/react-ref.md)
- [forward-ref](./react/forward-ref.md)
- [context](./react/context.md)
- [concurrent-mode](./react/concurrent-mode.md)
- [Hooks](./react/Hooks.md)
- [Others](./react/Others.md)
- [react-fiber-root](./react/react-fiber-root.md)
- [JSX](./react/JSX.md)
- [函数式组件](./react/函数式组件.md)
- [类式组件](./react/类式组件.md)
- [对state的理解](./react/对state的理解.md)
- [字符串形式的ref](./react/字符串形式的ref.md)
- [Update和UpdateQueue](./react/Update和UpdateQueue.md)
- [react脚手架](./react/react脚手架.md)
- [消息订阅与发布](./react/消息订阅与发布.md)

## 常见问题及解答

## Q1:如何呈现纯 HTML？

您不必这么做！无需使用 res.render() 函数来“呈现”HTML。 如果您具有特定文件，请使用 res.sendFile() 函数。 如果您希望从目录提供许多资产，请使用 express.static() 中间件函数。

## 勘误及提问

如果有疑问或者发现错误，可以在相应的 issues 进行提问或勘误。

如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。

## License

所有文章采用知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议进行许可。