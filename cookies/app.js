const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  const n = ~~ctx.cookies.get('view') + 1;
  ctx.cookies.set('view', n);
  ctx.body = n + ' views';
});

if (!module.parent) app.listen(3000);
