## http.Server事件

1. checkContinue事件
2. checkExpectation事件
3. clientError事件
4. close事件：服务器关闭时触发close事件。
5. connect事件：connect事件在每次客户端请求HTTP CONNECT方法时触发。
6. connection事件:建立新的TCP流时会发出connection事件。
7. request事件:每次有请求时都会发出request事件.
8. upgrade事件: 每次客户端请求HTTP升级时都发出upgrade事件.

http.ClientRequest 和 http.ServerResponse



