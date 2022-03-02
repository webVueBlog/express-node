## 错误处理

错误处理是指 Express 如何捕获和处理同步和异步发生的错误。Express 带有一个默认的错误处理程序，因此您无需编写自己的程序即可开始使用。

## 捕捉错误

确保 Express 捕获运行路由处理程序和中间件时发生的所有错误非常重要。

路由处理程序和中间件内的同步代码中发生的错误不需要额外的工作。如果同步代码抛出错误，Express 将捕获并处理它。例如：

```js
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
```

对于由路由处理程序和中间件调用的异步函数返回的错误，您必须将它们传递给next()函数，Express 将在该函数中捕获并处理它们。例如：

```js
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})
```

从 Express 5 开始，返回 Promise 的路由处理程序和中间件将next(value)在拒绝或抛出错误时自动调用。例如：

```js
app.get('/user/:id', async (req, res, next) => {
  const user = await getUserById(req.params.id)
  res.send(user)
})
```

如果getUserById抛出错误或拒绝，next将使用抛出的错误或拒绝的值调用。如果没有提供拒绝值，next 将使用 Express 路由器提供的默认错误对象调用。

如果您向next()函数传递任何内容（字符串除外'route'），Express 会将当前请求视为错误，并将跳过任何剩余的非错误处理路由和中间件函数。

如果序列中的回调不提供数据，只提供错误，您可以简化此代码，如下所示：

```js
app.get('/', [
  function (req, res, next) {
    fs.writeFile('/inaccessible-path', 'data', next)
  },
  function (req, res) {
    res.send('OK')
  }
])
```

在上面的示例next中，作为回调提供fs.writeFile，无论是否有错误都会调用它。如果没有错误，则执行第二个处理程序，否则 Express 会捕获并处理错误。

您必须捕获路由处理程序或中间件调用的异步代码中发生的错误，并将它们传递给 Express 进行处理。例如：

```js
app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
})
```

使用 Promise 来避免try...catch块的开销或在使用返回 Promise 的函数时。例如：

```js
app.get('/', (req, res, next) => {
  Promise.resolve().then(() => {
    throw new Error('BROKEN')
  }).catch(next) // Errors will be passed to Express.
})
```

由于 Promise 自动捕获同步错误和被拒绝的 Promise，您可以简单地提供next作为最终的 catch 处理程序，Express 将捕获错误，因为 catch 处理程序将错误作为第一个参数。

您还可以使用一系列处理程序来依赖同步错误捕获，方法是将异步代码减少到微不足道的程度。例如：

```js
app.get('/', [
  function (req, res, next) {
    fs.readFile('/maybe-valid-file', 'utf-8', (err, data) => {
      res.locals.data = data
      next(err)
    })
  },
  function (req, res) {
    res.locals.data = res.locals.data.split(',')[1]
    res.send(res.locals.data)
  }
])
```

## 默认错误处理程序

写入错误时，会在响应中添加以下信息：

- res.statusCode是从err.status（或）设置的err.statusCode。如果此值超出 4xx 或 5xx 范围，则将设置为 500。
- 根据res.statusMessage状态码设置。
- 在生产环境中，正文将是状态代码消息的 HTML，否则将为err.stack.
- err.headers对象中指定的任何标头。

## 编写错误处理程序

以与其他中间件函数相同的方式定义错误处理中间件函数，除了错误处理函数有四个参数而不是三个 (err, req, res, next)：例如：

```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

您最后定义错误处理中间件，在其他app.use()和路由调用之后；例如：

```js
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use((err, req, res, next) => {
  // logic
})
```

来自中间件函数的响应可以是任何格式，例如 HTML 错误页面、简单消息或 JSON 字符串。
