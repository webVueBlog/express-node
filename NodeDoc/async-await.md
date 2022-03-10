

## 介绍

JavaScript 在很短的时间内从回调发展到了 promise（ES2015），且自 ES2017 以来，异步的 JavaScript 使用 async/await 语法甚至更加简单。

异步函数是 promise 和生成器的组合，基本上，它们是 promise 的更高级别的抽象。 而 async/await 建立在 promise 之上。

## 为什么引入 async/await

它们减少了 promises 的样板，且减少了 promise 链的“不破坏链条”的限制。

当 ES2015 中引入 Promise 时，它们旨在解决异步代码的问题，并且确实做到了，但是在 ES2015 和 ES2017 断开的两年中，很明显，promise 不可能成为最终的解决方案。

Promise 被引入了用于解决著名的回调地狱问题，但是它们自身引入了复杂性以及语法复杂性。

它们是很好的原语，可以向开发人员公开更好的语法，因此，当时机合适时，我们得到了异步函数。

它们使代码看起来像是同步的，但它是异步的并且在后台无阻塞。

## 工作原理

异步函数会返回 promise，例如以下示例：

	JS
	const doSomethingAsync = () => {
	  return new Promise(resolve => {
		setTimeout(() => resolve('做些事情'), 3000)
	  })
	}

当要调用此函数时，则在前面加上 await，然后调用的代码就会停止直到 promise 被解决或被拒绝。 注意：客户端函数必须被定义为 async。 这是一个示例：

	JS
	const doSomething = async () => {
	  console.log(await doSomethingAsync())
	}

## 一个简单的示例

这是一个 async/await 的简单示例，用于异步地运行函数：

	JS
	const doSomethingAsync = () => {
	  return new Promise(resolve => {
		setTimeout(() => resolve('做些事情'), 3000)
	  })
	}

	const doSomething = async () => {
	  console.log(await doSomethingAsync())
	}

	console.log('之前')
	doSomething()
	console.log('之后')

上面的代码会打印以下的内容到浏览器的控制台：

	SH
	之前
	之后
	做些事情 // 3 秒之后

## Promise 所有事情

在任何函数之前加上 async 关键字意味着该函数会返回 promise。

即使没有显式地这样做，它也会在内部使它返回 promise。

这就是为什么此代码有效的原因：

	JS
	const aFunction = async () => {
	  return '测试'
	}

	aFunction().then(alert) // 这会 alert '测试'

这与以下代码一样：

	JS
	const aFunction = () => {
	  return Promise.resolve('测试')
	}

	aFunction().then(alert) // 这会 alert '测试'

## 代码更容易阅读

如在上面的示例中所见，代码看起来非常简单（相对于使用普通的 promise、链式和回调函数的代码）。

这是一个非常简单的示例，主要的好处要当代码更复杂得多时才会看到。

例如，这是使用 promise 获取并解析 JSON 资源的方法：

	JS
	const getFirstUserData = () => {
	  return fetch('/users.json') // 获取用户列表
		.then(response => response.json()) // 解析 JSON
		.then(users => users[0]) // 选择第一个用户
		.then(user => fetch(`/users/${user.name}`)) // 获取用户数据
		.then(userResponse => userResponse.json()) // 解析 JSON
	}

## getFirstUserData()

这是使用 await/async 提供的相同功能：

	JS
	const getFirstUserData = async () => {
	  const response = await fetch('/users.json') // 获取用户列表
	  const users = await response.json() // 解析 JSON
	  const user = users[0] // 选择第一个用户
	  const userResponse = await fetch(`/users/${user.name}`) // 获取用户数据
	  const userData = await userResponse.json() // 解析 JSON
	  return userData
	}

	getFirstUserData()

## 多个异步函数串联

异步函数可以很容易地链接起来，并且语法比普通的 promise 更具可读性：

	JS
	const promiseToDoSomething = () => {
	  return new Promise(resolve => {
		setTimeout(() => resolve('做些事情'), 10000)
	  })
	}

	const watchOverSomeoneDoingSomething = async () => {
	  const something = await promiseToDoSomething()
	  return something + ' 查看'
	}

	const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
	  const something = await watchOverSomeoneDoingSomething()
	  return something + ' 再次查看'
	}

	watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
	  console.log(res)
	})

这会打印：

	SH
	做些事情 查看 再次查看

## 更容易调试

调试 promise 很难，因为调试器不会跳过异步的代码。

Async/await 使这非常容易，因为对于编译器而言，它就像同步代码一样。