## 编写用于 Express 应用程序的中间件

概述

中间件函数是可以访问请求对象( req)、响应对象( res) 和next应用程序请求-响应周期中的函数的函数。该next函数是 Express 路由器中的一个函数，当被调用时，它会在当前中间件之后执行中间件。

中间件函数可以执行以下任务：

- 执行任何代码。
- 更改请求和响应对象。
- 结束请求-响应周期。
- 调用堆栈中的下一个中间件。

如果当前中间件函数没有结束请求-响应循环，它必须调用next()以将控制权传递给下一个中间件函数。否则，请求将被挂起。

```js
var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
	next();
})

app.listen(3000);
```

- 中间件功能适用的 HTTP 方法。
- 中间件功能适用的路径（路由）。
- 中间件功能。
- 中间件函数的回调参数，按照约定称为“next”。
- 中间件函数的HTTP响应参数，按照约定称为“res”。
- 中间件函数的HTTP请求参数，按照约定称为“req”。

从 Express 5 开始，返回 Promise 的中间件函数将next(value)在它们拒绝或抛出错误时调用。next将使用被拒绝的值或抛出的错误调用。

例子

这是一个简单的“Hello World”Express 应用程序示例。本文的其余部分将定义并向应用程序添加三个中间件函数：一个调用myLogger打印简单的日志消息，一个调用requestTime显示 HTTP 请求的时间戳，另一个调用validateCookies验证传入的 cookie。

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
```

## 中间件函数 myLogger

这是一个名为“myLogger”的中间件函数的简单示例。当对应用程序的请求通过它时，此函数只会打印“LOGGED”。
中间件函数被分配给一个名为 的变量myLogger。

```js
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
```

注意上面对 的调用next()。调用此函数会调用应用程序中的下一个中间件函数。

该next()函数不是 Node.js 或 Express API 的一部分，而是传递给中间件函数的第三个参数。

该next()函数可以命名为任何名称，但按照惯例，它始终命名为“next”。为避免混淆，请始终使用此约定。

要加载中间件函数，调用app.use()，指定中间件函数。例如，以下代码myLogger在路由到根路径 (/) 之前加载中间件函数。

```js
const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
```

每次应用程序收到请求时，它都会将消息“LOGGED”打印到终端。

中间件加载的顺序很重要：首先加载的中间件函数也会先执行。

如果myLogger在路由到根路径之后加载，则请求永远不会到达它并且应用程序不会打印“LOGGED”，因为根路径的路由处理程序终止了请求-响应循环。

中间件函数myLogger只是打印一条消息，然后通过调用该函数将请求传递给堆栈中的下一个中间件next()函数。

## 中间件函数 requestTime

接下来，我们将创建一个名为“requestTime”的中间件函数，并requestTime 为请求对象添加一个名为的属性。

```js
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
```

该应用程序现在使用requestTime中间件功能。

此外，根路径路由的回调函数使用中间件函数添加到的属性req（请求对象）。

```js
const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(3000)
```

当您向应用程序的根发出请求时，应用程序现在会在浏览器中显示您的请求的时间戳。

## 中间件函数 validateCookies

最后，我们将创建一个中间件函数来验证传入的 cookie 并在 cookie 无效时发送 400 响应。

这是一个使用外部异步服务验证 cookie 的示例函数。

```js
async function cookieValidator (cookies) {
  try {
    await externallyValidateCookie(cookies.testCookie)
  } catch {
    throw new Error('Invalid cookies')
  }
}
```

在这里，我们使用cookie-parser中间件从对象中解析传入的 cookiereq并将它们传递给我们的cookieValidator函数。中间件返回一个 Promise ，validateCookies在拒绝时会自动触发我们的错误处理程序。

```js
const express = require('express')
const cookieParser = require('cookie-parser')
const cookieValidator = require('./cookieValidator')

const app = express()

async function validateCookies (req, res, next) {
  await cookieValidator(req.cookies)
  next()
}

app.use(cookieParser())

app.use(validateCookies)

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

app.listen(3000)
```

请注意如何next()调用 after await cookieValidator(req.cookies)。

这确保了如果cookieValidator解决，堆栈中的下一个中间件将被调用。

如果您向next()函数传递任何内容（字符串'route'或除外'router'），Express 会将当前请求视为错误，并将跳过任何剩余的非错误处理路由和中间件函数。

因为您可以访问请求对象、响应对象、堆栈中的下一个中间件函数以及整个 Node.js API，所以中间件函数的可能性是无穷无尽的。

有关 Express 中间件的更多信息，请参阅：使用 Express 中间件。

## 可配置的中间件

如果您需要可配置中间件，请导出一个接受选项对象或其他参数的函数，然后根据输入参数返回中间件实现。

文件：my-middleware.js

```js
module.exports = function (options) {
  return function (req, res, next) {
    // Implement the middleware function based on the options object
    next()
  }
}
```

现在可以使用中间件，如下所示。

```js
const mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))
```
