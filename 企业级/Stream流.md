Stream 流

流是用来比喻数据传输的一种形式，数据传输的起点就是流的源头，数据传输的终点就是流的终点。例如在网页发起一个 HTTP 请求，浏览器就是流的源头，服务器就是流的终点。等服务器处理完请求，返回响应时，服务器就变成了流的源头，浏览器变成了流的终点。

数据从一端连续不断地传输到另一端，就像水一样从一端流到另一端，所以用流来比喻数据的传输形式。只不过计算机中的流传输的是数据（字节），而不是水。

在 Node.js 中，stream 模块提供了用于实现流接口的 API。但是很多内置模块都提供了关于流的 API，所以通常不需要显式的调用 stream 模块来使用流。

在数据流从上游生产者向下游消费者传输的过程中，上游生产速度大于下游消费速度，导致下游的 Buffer 溢出，这种现象就叫做 Backpressure。这句话的重点不在于「上游生产速度大于下游消费速度」，而在于「Buffer 溢出」。

如果出现这个现象，解决方案是什么呢？我们可以在写入流缓冲区已经满载的情况下，暂停可读流读取数据的行为。这可以通过 write() 的返回值来判断。

每个流在创建时都可以设置 highWaterMark 属性的值（默认为16384，即 16 KB），这个值就是缓冲区阈值的大小。可写流的缓冲区如果超过了阈值，再调用 write() 写入数据时，会返回 false；如果缓冲区未超过阈值，则返回 true。

pipe() 将可写流绑定到可读流，使其自动切换到流动模式并将其所有数据推送到绑定的可写流。 数据流将被自动管理，以便目标可写流不会被更快的可读流漫过。也就是说，pipe() 将数据缓冲限制在可接受的水平，以便不同速度的来源和目标不会压倒可用内存。

流的类型

Node.js 中有四种基本的流类型：

Readable: 可读流，可以从中读取数据的流（例如，fs.createReadStream()）。

Writable: 可写流，可以写入数据的流（例如，fs.createWriteStream()）。

Duplex: 双工流，Readable 和 Writable 的流（例如，net.Socket）。

Transform: 可以在写入和读取数据时修改或转换数据的 Duplex 流（例如，zlib.createDeflate()）。

Readable

可读流是对被消费的数据的来源的抽象。

Readable 流的示例包括：

客户端上的 HTTP 响应

服务器上的 HTTP 请求

文件系统读取流

压缩流

加密流

TCP 套接字

子进程的标准输出和标准错误

process.stdin

所有的 Readable 流都实现了 stream.Readable 类定义的接口。

Readable 流以两种模式之一有效地运行：流动和暂停。在流动模式下，数据会自动从底层系统读取，并通过 EventEmitter 接口使用事件尽快提供给应用程序。在暂停模式下，必须显式调用 stream.read() 方法以从流中读取数据块。

所有的 Readable 流都以暂停模式开始，但可以通过以下方式之一切换到流动模式：

添加 data 事件句柄。

调用 stream.resume() 方法。

调用 stream.pipe() 方法将数据发送到 Writable。

Readable 可以使用以下方法之一切换回暂停模式：

如果没有管道目标，则通过调用 stream.pause() 方法。
如果有管道目标，则删除所有管道目标。 可以通过调用 stream.unpipe() 方法删除多个管道目标。


Writable

可写流是数据写入目标的抽象。

Writable 流的示例包括：

客户端上的 HTTP 请求

服务器上的 HTTP 响应

文件系统写入流

压缩流

加密流

TCP 套接字

子进程标准输入

process.stdout、process.stderr

其中一些示例实际上是实现 Writable 接口的 Duplex 流。

所有的 Writable 流都实现了 stream.Writable 类定义的接口。


drain 事件

如果对 stream.write(chunk) 的调用返回 false，则 drain 事件将在可以继续将数据写入流时触发。

Duplex 与 Transform

双工流是同时实现 Readable 和 Writable 接口的流。

Duplex 流的示例包括：

TCP 套接字

压缩流

加密流

转换流是可以在写入和读取数据时修改或转换数据的双工流。

Transform 流的示例包括：

压缩流

加密流
