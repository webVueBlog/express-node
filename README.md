# express-node

express-node

## [Express](https://expressjs.com/)

高度包容、快速而极简的Node.js Web框架

```js
npm install express --save
```

在 Windows 命令提示符上，使用以下命令：

```js
> set DEBUG=myapp:* & npm start
```

- 使用vscode 下载REST Client
- [加密，解密](https://github.com/travist/jsencrypt)

使用 npm init 命令为应用程序创建 package.json 文件。

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

## 常见问题及解答

## Q1:如何呈现纯 HTML？

您不必这么做！无需使用 res.render() 函数来“呈现”HTML。 如果您具有特定文件，请使用 res.sendFile() 函数。 如果您希望从目录提供许多资产，请使用 express.static() 中间件函数。

## 勘误及提问

如果有疑问或者发现错误，可以在相应的 issues 进行提问或勘误。

如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。

## License

所有文章采用知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议进行许可。

