
要查看 Express 中使用的所有内部日志，请在启动应用程序时将DEBUG环境变量 设置为。express:*

```js
$ DEBUG=express:* node index.js
```

在 Windows 上，使用相应的命令。

```js
> set DEBUG=express:* & node index.js
```

## 生成的应用程序express

该命令生成的应用程序express也使用该debug模块，其调试命名空间的范围为应用程序的名称。

例如，如果您使用 生成应用程序$ express sample-app，则可以使用以下命令启用调试语句：

```js
$ DEBUG=sample-app:* node ./bin/www
```

您可以通过分配以逗号分隔的名称列表来指定多个调试命名空间：

```js
$ DEBUG=http,mail,express:* node index.js
```

## 选项

- `DEBUG`	启用/禁用特定的调试命名空间。
- `DEBUG_COLORS`	是否在调试输出中使用颜色。
- `DEBUG_DEPTH`	对象检查深度。
- `DEBUG_FD`	要将调试输出写入的文件描述符。
- `DEBUG_SHOW_HIDDEN`	显示检查对象的隐藏属性。

