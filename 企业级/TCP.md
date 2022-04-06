Node.js 是面向网络而生的平台

TCP

TCP 是面向连接的，提供端到端可靠的数据流的协议。

TCP 提供超时重发，丢弃重复数据，检验数据，流量控制等功能，保证数据能从一端传到另一端。

“面向连接”就是指在正式通信前必须要与对方建立起连接。

TCP 是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。

socket 是双工流，因此它既可读也可写。

## net 模块

在Node.js中， net模块用于创建基于流的TCP 或 IPC的服务器与客户端。其中，在Windows上支持命名管道 IPC ，在其他操作系统上 支持 UNIX 域套接字。

net 模块的使用方法如下： 

const net = require('net');

## 创建TCP服务器

close 事件：当服务器关闭的时候触发。

connection 事件：当一个新的 connection 建立的时候触发。

error 事件。当错误出现的时候触发。

listening 事件：当服务被绑定后调用 server.listen() 方法后触发。

## 发送和接收数据

## 创建Socket对象

```js
server.on('connection', (socket) => {
 console.log('')
})
```