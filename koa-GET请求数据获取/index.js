const Koa = require('koa')

const app = new Koa()

app.use( async (ctx) => {
	let url = ctx.url
	// 从上下文的request对象中获取
	let request = ctx.request
	let req_query = request.query
	let req_querystring = request.querystring
	
	// 从上下文中直接获取
	let ctx_query = ctx.query
	let ctx_querystring = ctx.querystring
	
	ctx.body = {
		url,
		req_query,
		req_querystring,
		ctx_query,
		ctx_querystring
	}
})

app.listen(3000, () => {
	console.log('demo koa get')
})

// {
// "url": "/page/user?a=1&b=2",
// "req_query": {
// "a": "1",
// "b": "2"
// },
// "req_querystring": "a=1&b=2",
// "ctx_query": {
// "a": "1",
// "b": "2"
// },
// "ctx_querystring": "a=1&b=2"
// }