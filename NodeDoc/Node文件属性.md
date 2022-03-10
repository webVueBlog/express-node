
每个文件都带有一组详细信息，可以使用 Node.js 进行检查。

具体地说，使用 fs 模块提供的 stat() 方法。

调用时传入文件的路径，一旦 Node.js 获得文件的详细信息，则会调用传入的回调函数，并带上两个参数：错误消息和文件属性：

	JS
	const fs = require('fs')
	fs.stat('/Users/joe/test.txt', (err, stats) => {
	  if (err) {
		console.error(err)
		return
	  }
	  //可以访问 `stats` 中的文件属性
	})

Node.js 也提供了同步的方法，该方法会阻塞线程，直到文件属性准备就绪为止：

	JS
	const fs = require('fs')
	try {
	  const stats = fs.statSync('/Users/joe/test.txt')
	} catch (err) {
	  console.error(err)
	}

文件的信息包含在属性变量中。 可以通过属性提取哪些信息？

很多，包括：

	使用 stats.isFile() 和 stats.isDirectory() 判断文件是否目录或文件。
	使用 stats.isSymbolicLink() 判断文件是否符号链接。
	使用 stats.size 获取文件的大小（以字节为单位）。

还有其他一些高级的方法，但是在日常编程中会使用的大部分是这些。

	JS
	const fs = require('fs')
	fs.stat('/Users/joe/test.txt', (err, stats) => {
	  if (err) {
		console.error(err)
		return
	  }

	  stats.isFile() //true
	  stats.isDirectory() //false
	  stats.isSymbolicLink() //false
	  stats.size //1024000 //= 1MB
	})


