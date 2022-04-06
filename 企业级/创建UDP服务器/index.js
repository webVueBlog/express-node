const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log('error 事件');
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log('服务器')
});

server.on('listening', () => {
    const address = server.address();
    console.log('address', address)
});

server.bind(8888)

// Node.js只要套接字开始监听数据报消息，就会发出 listening 事件，只要创建UDP套接字，就回发生这种情况。
// server.address() 方法用于获取 server 所使用的地址。

// msg
// rinfo