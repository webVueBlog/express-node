## 使用中间件

Express 是一个路由和中间件 Web 框架，其自身功能最少：Express 应用程序本质上是一系列中间件函数调用。

每次应用收到请求时都会执行该函数。

```js
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
```

此示例显示了安装在/user/:id路径上的中间件函数。该函数针对/user/:id路径上的任何类型的 HTTP 请求执行。

```js
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
```

这个例子展示了一个路由和它的处理函数（中间件系统）。/user/:id该函数处理对路径的 GET 请求。

```js
app.get('/user/:id', (req, res, next) => {
  res.send('USER')
})
```

这是一个在挂载点加载一系列中间件函数的示例，带有挂载路径。它说明了一个中间件子堆栈，它将任何类型的 HTTP 请求的请求信息打印到/user/:id路径。

```js
app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
```

路由处理程序使您能够为路径定义多个路由。

下面的示例为 GET 请求定义了两个路由到/user/:id路径。第二个路由不会引起任何问题，但它永远不会被调用，因为第一个路由结束了请求-响应周期。

/user/:id此示例显示了一个处理对路径的 GET 请求的中间件子堆栈。

```js
app.get('/user/:id', (req, res, next) => {
  console.log('ID:', req.params.id)
  next()
}, (req, res, next) => {
  res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', (req, res, next) => {
  res.send(req.params.id)
})
```

要从路由器中间件堆栈中跳过其余中间件功能，请调用next('route')以将控制权传递给下一个路由。 注意：next('route')仅适用于使用app.METHOD()or函数加载的中间件router.METHOD()函数。

/user/:id此示例显示了一个处理对路径的 GET 请求的中间件子堆栈。

```js
app.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
  res.send('special')
})
```

中间件也可以在数组中声明以实现可重用性。

/user/:id此示例显示了一个数组，其中包含处理对路径的 GET 请求的中间件子堆栈

```js
function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
  res.send('User Info')
})
```

## 路由器级中间件

路由器级中间件的工作方式与应用级中间件相同，只是它绑定到express.Router().

```js
const router = express.Router()
```

`router.use()`使用和`router.METHOD()`函数加载路由器级中间件。

以下示例代码通过使用路由器级中间件复制了上面显示的应用程序级中间件的中间件系统：

```js
const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router)
```

要跳过路由器的其余中间件功能，请调用next('router') 以将控制权从路由器实例传回。

/user/:id此示例显示了一个处理对路径的 GET 请求的中间件子堆栈。

```js
const express = require('express')
const app = express()
const router = express.Router()

// predicate the router with a check and bail out when needed
router.use((req, res, next) => {
  if (!req.headers['x-auth']) return next('router')
  next()
})

router.get('/user/:id', (req, res) => {
  res.send('hello, user!')
})

// use the router and 401 anything falling through
app.use('/admin', router, (req, res) => {
  res.sendStatus(401)
})
```

## 错误处理中间件

以与其他中间件函数相同的方式定义错误处理中间件函数，除了使用四个参数而不是三个参数，特别是使用签名(err, req, res, next))：

```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

## 内置中间件

- express.static提供静态资源，例如 HTML 文件、图像等。
- express.json使用 JSON 有效负载解析传入请求。注意：可用于 Express 4.16.0+
- express.urlencoded解析带有 URL 编码负载的传入请求。注意：可用于 Express 4.16.0+

## 第三方中间件

使用第三方中间件向 Express 应用程序添加功能。

以下示例说明了安装和加载 cookie 解析中间件功能cookie-parser。

```js
$ npm install cookie-parser
```

```js
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
```
