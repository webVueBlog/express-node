
app.js

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
```

使用以下命令运行应用程序：

```js
$ node app.js
```
