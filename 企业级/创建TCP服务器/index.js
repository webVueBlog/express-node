const net = require('net');

const server = net.createServer((socket) => {
    socket.end('goodbye\n');
}).on('error', (err) => {
    // 处理错误
    throw err;
});

server.on('close', () => {
    console.log('服务器接收到close事件')
})

server.on('connection', (socket) => {
    console.log('服务器接收 connection 事件')
    socket.setEncoding('utf8');
    socket.write('welcome');

    socket.on('data', (data) => {
        console.log('服务器接收到的数据' + data);

        // 如果收到c字符，就终止连接
        if (data == 'c') {
            socket.write('bye');
            socket.end(); // 关闭socket, 方法用于终止 Socket 对象 ; 主要用于关闭客户端
            server.close(); // 关闭服务器; 为了 😩 关闭服务器
        } else {
            socket.write(data);
        }
    })
})

server.on('listening', () => {
    console.log('服务器接收到 listening 事件')
})

// 随机获取未绑定的端口
server.listen(8888, () => {
    console.log('服务器短裤, 占用短裤');
})