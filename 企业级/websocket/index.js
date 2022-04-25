const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('open', function open() {
    console.log('connected');
})

server.on('close', function close() {
    console.log('disconnected');
})

server.on('connection', function connection(ws, req) {
    const ip = req.connection.remoteAddress;
    const port = req.connection.remotePort;
    const clientName = ip + port;

    console.log('it is connected', clientName)

    ws.send('welcome' + clientName);

    ws.on('message', function incoming(message) {
        server.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(clientName + ' -> ' + message);
            }
        })
    })
})