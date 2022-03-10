
当尝试了解 Node.js 事件循环时，其中一个重要的部分就是 process.nextTick()。

每当事件循环进行一次完整的行程时，我们都将其称为一个滴答。

当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：

JS
process.nextTick(() => {
  //做些事情
})

事件循环正在忙于处理当前的函数代码。

当该操作结束时，JS 引擎会运行在该操作期间传给 nextTick 调用的所有函数。

这是可以告诉 JS 引擎异步地（在当前函数之后）处理函数的方式，但是尽快执行而不是将其排入队列。

调用 setTimeout(() => {}, 0) 会在下一个滴答结束时执行该函数，比使用 nextTick()（其会优先执行该调用并在下一个滴答开始之前执行该函数）晚得多。

当要确保在下一个事件循环迭代中代码已被执行，则使用 nextTick()。