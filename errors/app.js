const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (err) {

    ctx.status = err.status || 500;
    ctx.type = 'html';
    ctx.body = '<p>Something <em>exploded</em>, please contact me.</p>';

    ctx.app.emit('error', err, ctx);
  }
});

// response

app.use(async function() {
  throw new Error('boom boom');
});

// error handler

app.on('error', function(err) {
  if (process.env.NODE_ENV != 'test') {
    console.log('sent error %s to the cloud', err.message);
    console.log(err);
  }
});

if (!module.parent) app.listen(3000);