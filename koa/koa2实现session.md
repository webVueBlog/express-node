## 前言

koa2原生功能只提供了cookie的操作，但是没有提供session操作。
session就只用自己实现或者通过第三方中间件实现。
在koa2中实现session的方案有一下几种

如果session数据量很小，可以直接存在内存中

如果session数据量很大，则需要存储介质存放session数据

## 数据库存储方案

将session存放在MySQL数据库中

需要用到中间件

koa-session-minimal 适用于koa2 的session中间件，
提供存储介质的读写接口 。

koa-mysql-session 为koa-session-minimal中间件
提供MySQL数据库的session数据读写操作。

将sessionId和对应的数据存到数据库

将数据库的存储的sessionId存到页面的cookie中

根据cookie的sessionId去获取对于的session信息
