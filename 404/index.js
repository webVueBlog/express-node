const Koa = require('koa')

const app = new Koa();

app.use( async (ctx) => {
	ctx.status = 400;
	switch(ctx.accepts('html', 'json')) {
		case 'html':
		 ctx.type = 'html';
		 ctx.body = '<p>html Page Not Found</p>';
		 break;
		case 'json':
		 ctx.body = {
			 message: 'json Page Not Found'
		 };
		 break;
		default:
		 ctx.type = 'text';
		 ctx.body = 'text Page Not Found';
	}
});

app.listen(3000)

console.log('demo webVueBlog')