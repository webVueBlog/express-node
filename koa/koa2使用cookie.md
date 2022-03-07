
使用方法

koa提供了从上下文直接读取、写入cookie的方法

ctx.cookies.get(name, [options]) 读取上下文请求中的cookie

ctx.cookies.set(name, value, [options]) 在上下文中写入cookie

koa2 中操作的cookies是使用了npm的cookies模块

可以在控制台的cookie列表中中看到写在页面上的cookie

在控制台的console中使用document.cookie可以打印出在页面的所有cookie（需要是httpOnly设置false才能显示）

