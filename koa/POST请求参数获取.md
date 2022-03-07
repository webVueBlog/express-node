原理

对于POST请求的处理，koa2没有封装获取参数的方法，需要通过解析上下文context中的原生node.js请求对象req，将POST表单数据解析成query string（例如：a=1&b=2&c=3），再将query string 解析成JSON格式（例如：{"a":"1", "b":"2", "c":"3"}）

注意：ctx.request是context经过封装的请求对象，ctx.req是context提供的node.js原生HTTP请求对象，同理ctx.response是context经过封装的响应对象，ctx.res是context提供的node.js原生HTTP响应对象。

## 解析出POST请求上下文中的表单数据

```js
// 解析上下文里node原生请求的POST参数

function parsePostData(ctx) {
	return new Promise((resolve, reject) => {
		try {
			let postdata = '';
			ctx.req.addListener('data', (data) => {
				postdata += data
			})
			ctx.req.addListener('end', function() {
				let parseData = parseQueryStr( postdata )
				resolve(parseData)
			})
		} catch (err) {
			reject(err)
		}
	})
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
	let queryData = {}
	let queryStrList = queryStr.sqlit('&')
	console.log( queryStrList )
	for (let [index, queryStr ] of queryStrList.entries()) {
		let itemList = queryStr.split('=')
		queryData[ itemList[0] ] = decodeURIComponent(itemList[i])
	}
}
```

