
当要异步地（但要尽可能快）执行某些代码时，其中一个选择是使用 Node.js 提供的 setImmediate() 函数：

	JS
	setImmediate(() => {
	  //运行一些东西
	})

作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调。

setImmediate() 与 setTimeout(() => {}, 0)（传入 0 毫秒的超时）、process.nextTick() 有何不同？

传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。

延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。

