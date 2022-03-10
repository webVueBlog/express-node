Promise 简介
创建 promise
消费 promise
链式 promise
处理错误
编排 promise
常见的错误

## Promise 简介

Promise 通常被定义为最终会变为可用值的代理。

Promise 是一种处理异步代码（而不会陷入回调地狱）的方式。

多年来，promise 已成为语言的一部分（在 ES2015 中进行了标准化和引入），并且最近变得更加集成，在 ES2017 中具有了 async 和 await。

异步函数 在底层使用了 promise，因此了解 promise 的工作方式是了解 async 和 await 的基础。

## Promise 如何运作

当 promise 被调用后，它会以处理中状态开始。 这意味着调用的函数会继续执行，而 promise 仍处于处理中直到解决为止，从而为调用的函数提供所请求的任何数据。

被创建的 promise 最终会以被解决状态或被拒绝状态结束，并在完成时调用相应的回调函数（传给 then 和 catch）。

## 哪些 JS API 使用了 promise？

除了自己的代码和库代码，标准的现代 Web API 也使用了 promise，例如：

	Battery API
	Fetch API
	Service Worker

在现代 JavaScript 中，不太可能没有使用 promise，因此让我们开始深入研究它们。

## 创建 promise

Promise API 公开了一个 Promise 构造函数，可以使用 new Promise() 对其进行初始化：

	JS
	let done = true

	const isItDoneYet = new Promise((resolve, reject) => {
	  if (done) {
		const workDone = '这是创建的东西'
		resolve(workDone)
	  } else {
		const why = '仍然在处理其他事情'
		reject(why)
	  }
	})

如你所见，promise 检查了 done 全局常量，如果为真，则 promise 进入被解决状态（因为调用了 resolve 回调）；否则，则执行 reject 回调（将 promise 置于被拒绝状态）。 如果在执行路径中从未调用过这些函数之一，则 promise 会保持处理中状态。

使用 resolve 和 reject，可以向调用者传达最终的 promise 状态以及该如何处理。 在上述示例中，只返回了一个字符串，但是它可以是一个对象，也可以为 null。 由于已经在上述的代码片段中创建了 promise，因此它已经开始执行。 这对了解下面的消费 promise 章节很重要。

一个更常见的示例是一种被称为 Promisifying 的技术。 这项技术能够使用经典的 JavaScript 函数来接受回调并使其返回 promise：

	JS
	const fs = require('fs')

	const getFile = (fileName) => {
	  return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, data) => {
		  if (err) {
			reject(err)  // 调用 `reject` 会导致 promise 失败，无论是否传入错误作为参数，
			return        // 且不再进行下去。
		  }
		  resolve(data)
		})
	  })
	}

	getFile('/etc/passwd')
	.then(data => console.log(data))
	.catch(err => console.error(err))

在最新版本的 Node.js 中，无需为大多数 API 进行手动地转换。如果需要 promisifying 的函数具有正确的签名，则 util 模块中有一个 promisifying 函数可以完成此操作。

## 消费 promise

在上一个章节中，介绍了如何创建 promise。

现在，看看如何消费或使用 promise。

	JS
	const isItDoneYet = new Promise(/* ... 如上所述 ... */)
	//...

	const checkIfItsDone = () => {
	  isItDoneYet
		.then(ok => {
		  console.log(ok)
		})
		.catch(err => {
		  console.error(err)
		})
	}

运行 checkIfItsDone() 会指定当 isItDoneYet promise 被解决（在 then 调用中）或被拒绝（在 catch 调用中）时执行的函数。

## 链式 promise

Promise 可以返回到另一个 promise，从而创建一个 promise 链。

链式 promise 的一个很好的示例是 Fetch API，可以用于获取资源，且当资源被获取时将 promise 链式排队进行执行。

Fetch API 是基于 promise 的机制，调用 fetch() 相当于使用 new Promise() 来定义 promsie。

## 链式 promise 的示例

	JS
	const status = response => {
	  if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	  }
	  return Promise.reject(new Error(response.statusText))
	}

	const json = response => response.json()

	fetch('/todos.json')
	  .then(status)    // 注意，`status` 函数实际上在这里被调用，并且同样返回 promise，
	  .then(json)      // 这里唯一的区别是的 `json` 函数会返回解决时传入 `data` 的 promise，
	  .then(data => {  // 这是 `data` 会在此处作为匿名函数的第一个参数的原因。
		console.log('请求成功获得 JSON 响应', data)
	  })
	  .catch(error => {
		console.log('请求失败', error)
	  })

在此示例中，调用 fetch() 从域根目录中的 todos.json 文件中获取 TODO 项目的列表，并创建一个 promise 链。

运行 fetch() 会返回一个响应，该响应具有许多属性，在属性中引用了：

status，表示 HTTP 状态码的数值。

statusText，状态消息，如果请求成功，则为 OK。

response 还有一个 json() 方法，该方法会返回一个 promise，该 promise 解决时会传入已处理并转换为 JSON 的响应体的内容。

因此，考虑到这些前提，发生的过程是：链中的第一个 promise 是我们定义的函数，即 status()，它会检查响应的状态，如果不是成功响应（介于 200 和 299 之间），则它会拒绝 promise。

此操作会导致 promise 链跳过列出的所有被链的 promise，且会直接跳到底部的 catch() 语句（记录请求失败的文本和错误消息）。

如果成功，则会调用定义的 json() 函数。 由于上一个 promise 成功后返回了 response 对象，因此将其作为第二个 promise 的输入。

在此示例中，返回处理后的 JSON 数据，因此第三个 promise 直接接收 JSON：

	JS
	.then((data) => {
	  console.log('请求成功获得 JSON 响应', data)
	})

只需将其记录到控制台即可。

## 处理错误

在上一章节的示例中，有个 catch 被附加到了 promise 链上。

当 promise 链中的任何内容失败并引发错误或拒绝 promise 时，则控制权会转到链中最近的 catch() 语句。

	JS
	new Promise((resolve, reject) => {
	  throw new Error('错误')
	}).catch(err => {
	  console.error(err)
	})

	// 或

	new Promise((resolve, reject) => {
	  reject('错误')
	}).catch(err => {
	  console.error(err)
	})

## 级联错误

如果在 catch() 内部引发错误，则可以附加第二个 catch()来处理，依此类推。

	JS
	new Promise((resolve, reject) => {
	  throw new Error('错误')
	})
	  .catch(err => {
		throw new Error('错误')
	  })
	  .catch(err => {
		console.error(err)
	  })

## 编排 promise

Promise.all()

如果需要同步不同的 promise，则 Promise.all() 可以帮助定义 promise 列表，并在所有 promise 都被解决后执行一些操作。

示例：

	JS
	const f1 = fetch('/something.json')
	const f2 = fetch('/something2.json')

	Promise.all([f1, f2])
	  .then(res => {
		console.log('结果的数组', res)
	  })
	  .catch(err => {
		console.error(err)
	  })

ES2015 解构赋值语法也可以执行：

	JS
	Promise.all([f1, f2]).then(([res1, res2]) => {
	  console.log('结果', res1, res2)
	})

当然，不限于使用 fetch，任何 promise 都可以以这种方式使用。

## Promise.race()

当传给其的首个 promise 被解决时，则 Promise.race() 开始运行，并且只运行一次附加的回调（传入第一个被解决的 promise 的结果）。

示例：

	JS
	const first = new Promise((resolve, reject) => {
	  setTimeout(resolve, 500, '第一个')
	})
	const second = new Promise((resolve, reject) => {
	  setTimeout(resolve, 100, '第二个')
	})

	Promise.race([first, second]).then(result => {
	  console.log(result) // 第二个
	})

## 常见的错误

Uncaught TypeError: undefined is not a promise

如果在控制台中收到 Uncaught TypeError: undefined is not a promise 错误，则请确保使用 new Promise() 而不是 Promise()。

UnhandledPromiseRejectionWarning

这意味着调用的 promise 被拒绝，但是没有用于处理错误的 catch。 在 then 之后添加 catch 则可以正确地处理。

