
路由用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（或路径）和一个特定的 HTTP 请求方法（GET、POST 等）。

每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行。

路由定义采用以下结构：

```js
app.METHOD(PATH, HANDLER)
```

其中：

- app 是 express 的实例。
- METHOD 是 HTTP 请求方法。
- PATH 是服务器上的路径。
- HANDLER 是在路由匹配时执行的函数。



