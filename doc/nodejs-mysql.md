
## 连接 MySQL

如何使用 Node.js 来连接 MySQL，并对数据库进行操作。

## 使用淘宝 NPM 镜像

大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

```js
$ npm install -g cnpm --registry=https://registry.npmmirror.com
```

这样就可以使用 cnpm 命令来安装模块了：

```js
$ cnpm install [name]
```

## 安装驱动

```js
$ cnpm install mysql
```

## 连接数据库

```js
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'xxxx',
	database: 'test'
});

connection.connect();

var sql = 'SELECT * from websites';
// 查
connection.query(sql, function(err, result) {
	if (err) {
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}
})
connection.end();
```
