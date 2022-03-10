
Node.js 的 process 核心模块提供了 env 属性，该属性承载了在启动进程时设置的所有环境变量。

这是访问 NODE_ENV 环境变量的示例，该环境变量默认情况下被设置为 development。

注意：process 不需要 "require"，它是自动可用的。

```js
process.env.NODE_ENV // "development"
```

在脚本运行之前将其设置为 "production"，则可告诉 Node.js 这是生产环境。

可以用相同的方式访问设置的任何自定义的环境变量。
