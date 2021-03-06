
Node.js 的官方开发语言是JavaScript，它是浏览器能直接运行的脚本语言。

Chrome V8引擎（https://v8.dev/)，Chrome V8是JavaScript 渲染引擎，相比其他的JavaScript的引擎转换成字节码或解释执行，Chrome V8将其编译成原生机器码，并且使用了如内联缓存等方法来提高性能。

Chrome V8可以独立运行，也可以嵌入到C++应用程序中运行。

基于JavaScript 和 Chrome V8引擎的开源Web服务器项目： Node.js

Node.js采用事件驱动 和 非阻塞 I/O模型，使其变得轻微和高效，非常适合构建运行在分布式设备 的数据密集型实时应用。

JavaScript 成为从前端到后端再到数据库层能够支持全栈开发的语言。

## 异步I/O

异步是相对于同步而言的。

同步和异步描述的是用户线程 与 内核的交互方式。

同步 是 指用户线程 发起 I/O 请求后需要等待 或者轮询 内核 I/O 操作完成后 才能继续执行；

异步 是 指用户线程 发起 I/O 请求后仍继续执行，当内核I/O 操作完成后  会通知用户线程，或者调用用户线程注册的 回调函数。

## 事件驱动

用户在界面上单击一个按钮，就会触发一个“单击” 事件。在Node.js中，事件的应用也是无处不在。

在传统的高并发场景中，其解决方案往往是 使用 多线程模型，也就是为 每个业务逻辑提供一个 系统线程，通过 系统线程 切换来 你补 同步 I/O 调用时的时间开销。

Node.js 中使用的是单线程 模型，对于所有 I/O都采用异步式的请求方式， 避免了频繁的上下文切换。 Node.js 在执行 的过程中会维护一个事件队列，程序 在执行时 进入事件循环。

等待下一个事件到来，每个异步式 I/O 请求完成后会被推送到事件队列，等待程序进程处理。

Node.js的异步机制是基于事件的，所有的磁盘I/O，网络通信，数据库查询 都以非阻塞的方式请求，返回的结果由事件循环来处理。 Node.js 进程在同一时刻 只会处理一个事件，完成后立即进入 事件循环 检查并处理后面的事件。

Node.js的运行原理：

从左到右，从上到下，Node.js被分为了四层，分别是 应用层，V8引擎层，Node API 层，和 libuv 层。

- 应用层：JavaScript 交互层，常见的就是 Node.js的模块，如http, fs等.
- V8 引擎层： 利用V8引擎来解析 JavaScript 语法，进而 和 下层 API 交互。
- Node API 层：为上层模块 提供系统调用，一般是由C语言来实现，和操作系统进行交互。
- LIBUV层：跨平台的底层封装，实现了事件循环，文件操作等，是Node.js实现异步的核心。

好吃：CPU 和 内存 在同一时间 集中 处理 一件事，同时 尽可能 让耗时的 I/O 操作并行执行。

对于低速连接攻击，Node.js 只是在事件队列中 增加请求，等待操作系统的回应，因而不会有任何多线程开销，很大程度上可以提高 web 应用的健壮性，防止恶意攻击。

单线程

Node.js 只用了一个主线程来接收请求，但它接收请求以后并没有直接做处理，而是放到了事件队列中，然后又去接收其他请求了，空闲的时候，再通过事件循环来处理这些事件，从而实现了异步效果。当然对于I/O 任务还需要依赖于系统层面的线程池来处理。
 
 Node.js本身是一个多线程平台，而它对JavaScript层面的任务处理是单线程的。