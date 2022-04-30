react ajax

前置说明

1. React本身只关注于界面，并不包含发送ajax请求的代码
2. 前端应用需要通过ajax请求与后台进行交互（json数据）
3. react应用中需要集成第三方ajax库(或自己封装)

axios:轻量级，建议使用

1. 封装XmlHttpRequest对象的ajax
2. promise风格
3. 可以用在浏览器和node服务器

```js
Access-Control-Allow-Origin 发是能发的，请求回不来 3000 发 5000 回

"proxy": "xxx:5000"

先用3000的，再用5000的 - 3000没有资源就找5000要
```

```js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
 app.use(
  proxy('/api1', { // 遇见api1前缀的请求，就会触发该代理配置
   target: 'http://localhost: 5000', // 请求转发给谁
   changeOrigin: true, // 控制服务器收到的请求头中Host的值， true 3000->代理了5000->有true，服务器是以为是5000，没有就会知道原来是3000
   pathRewrite: {'^/api1':''} // 没有这个，可以知道代理了5000，但是 404了
  }),
  proxy('/api2', {
   target: 'http://localhost: 5000',
   changeOrigin: true,
   pathRewrite: {'^/api2':''}
  })
 )
}
```