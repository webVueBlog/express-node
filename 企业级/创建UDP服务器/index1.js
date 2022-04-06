const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log('error 事件 服务器错误');
    server.close();
});

server.on('close', () => {
    console.log('服务器close事件')
})

server.on('message', (msg, rinfo) => {
    console.log(`服务器从${rinfo.address}:${rinfo.port}接收消息: ${msg}`);
    console.log(`地址类型是${rinfo.family},消息大小${rinfo.size}`);

    server.send(msg + " too!", rinfo.port, rinfo.address);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`服务器监听 ${address.address}:${address.port}`)
});

server.bind(9999)