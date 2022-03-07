const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

// ʹ��ctx.body�����м��
app.use(bodyParser())

app.use( async ( ctx ) => {

  if ( ctx.url === '/' && ctx.method === 'GET' ) {
    // ��GET����ʱ�򷵻ر�ҳ��
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
    // ��POST�����ʱ���м��koa-bodyparser����POST��������ݣ�����ʾ����
    let postData = ctx.request.body
    ctx.body = postData
  } else {
    // ����������ʾ404
    ctx.body = '<h1>404������ o(�s���t)o</h1>'
  }
})

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})