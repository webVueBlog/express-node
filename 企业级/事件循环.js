/**

当 Node.js 启动后，它会初始化事件循环，处理已提供的输入脚本，它可能会调用一些异步的 API、调度定时器，或者调用 process.nextTick()，然后开始处理事件循环。

注意：每个框被称为事件循环机制的一个阶段。

每个阶段都有一个 FIFO 队列来执行回调，当事件循环进入某个阶段时，会执行该阶段队列中的回调。当该队列都已执行完或达到回调限制，事件循环将进入到下一阶段。

阶段概述

定时器：本阶段执行已经被 setTimeout() 和 setInterval() 调度的回调函数。
待定回调：执行延迟到下一个循环迭代的 I/O 回调。
idle, prepare：仅系统内部使用。
轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（不包含关闭的回调函数、setTimeout()、setInterval()、setImmediate()），其余情况 node 将在适当的时候在此阻塞。
检测：setImmediate() 回调函数在这里执行。
关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)。

宏、微任务的区别
微任务优先级比宏任务高
执行完所有的微任务之后，才会执行宏任务
每执行一个宏任务之后都会去执行微任务

*/