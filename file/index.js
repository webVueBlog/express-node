// 所有文件系统操作都具有同步和异步的形式

const fs = require('fs');
const path = require('path')
// 以下是一个异常操作文件系统的示例：
// fs.unlink('/temp', (err) => {
//  if (err) throw err;
//  console.log('已成功删除');
// });

// 使用同步的操作方法的异常会立即抛出，可以使用 try/catch 处理，也可以允许冒泡

// 同步操作文件系统的示例

// try {
//  fs.unlinkSync('/temp');
//  console.log('已成功删除 /temp');
// } catch (err) {
//  // 处理错误
//  console.log(err, 'err')
// }
// Error: ENOENT: no such file or directory, unlink '/temp'

// 使用异步的方法时无法保证顺序

// fs.stat() 操作可能在 fs.rename() 操作之前完成

// fs.rename('/temp', '/tmp', (err) => {
//  if (err) {
//   throw err;
//  }
//  console.log('重命名完成');
// })

// fs.stat('/tmp', (err, stats) => {
//  if (err) {
//   throw err;
//  }
//  console.log(`文件属性: ${JSON.stringify(stats)}`);
// })
// [Error: ENOENT: no such file or directory, rename '/temp' -> '/tmp'] {
//  errno: -2,
//   code: 'ENOENT',
//    syscall: 'rename',
//     path: '/temp',
//      dest: '/tmp'
// }

// fs.rename('/temp', '/tmp', (err) => {
//  if (err) {
//   throw err;
//  }
//  fs.stat('/tmp', (err, stats) => {
//   if (err) {
//    throw err;
//   }
//   console.log(`文件属性${JSON.stringify(stats)}`)
//  })
// })

// fs.open()方法用于分配新的文件描述符
// 一旦被分配，则文件描述符可用于从文件读取数据，向文件写入数据或请求关于文件的信息。
// fs.open('/temp/hello.txt', 'r', (err, fd) => {
//  if (err) {
//   throw err;
//  }

//  fs.stat(fd, (er, stats) => {
//   if (err) {
//    throw err;
//   }

//   fs.close(fd, (err) => {
//    if (err) {
//     throw err;
//    }
//   })
//  })
// })

// 文件路径

// 接受的文件路径：字符串，Buffer或使用 file:协议的URL对象
// 字符串形式的路径
// 字符串形式 的路径 被解析为标识 绝对 或相对文件名的URF8字符序列。相对路径将相对于process.cwd()指定的当前工作目录进行解析。

// fs.open('hello.txt', 'r', (err, fd) => {
//  if (err) {
//   throw err;
//  }

//  fs.fstat(fd, (err, stat) => {
//   if (err) {
//    throw err;
//   }
//   fs.close(fd, (err) => {
//    if (err) {
//     throw err;
//    }
//   })
//  })
// })

// 读取文件
// fs.read(fd, buffer, offset, length, position, callback)

// fs.open('hello.txt', 'r', (err, fd) => {
//  if (err) {
//   throw err;
//  }
//  var buffer = Buffer.alloc(255);

//  // 读取文件
//  fs.read(fd, buffer, 0, 255, 0, (err, bytesRead, buffer) => {
//   if (err) {
//    throw err;
//   }

//   // 打印buffer中存入的数据
//   console.log(bytesRead, buffer.slice(0, bytesRead).toString()); // 9 sss闪烁

//   // 始终关闭文件描述符
//   fs.close(fd, (err) => {
//    if (err) {
//     throw err;
//    }
//   });
//  })
// })


// fs.readdir
// fs.readdir(path[,options],callback)方法用于异步地读取目录中的内容
// fs.readdir('.', (err, files) => {
//  if (err) {
//   throw err;
//  }
//  // 列出文件名称
//  files.forEach(function (file) {
//   console.log(file);
//  })
// })
//  .DS_Store
// hello.txt
// index.js
// package.json
// temp

//fs.readFIle
//fs.readFile(path[,options],callback)方法用于异步地读取文件的全部内容
// fs.readFile('hello.txt', (err, data) => {
//  if (err) {
//   throw err;
//  }
//  console.log(data);
// })
 // < Buffer 73 73 73 e9 97 aa e7 83 81 >

// fs.readFile() 方法回调回传入两个参数 err 和 data ，其中data是文件的内容
// fs.readFile('hello.txt', 'utf8', (err, data) => {
//  if (err) {
//   throw err;
//  }
//  console.log(data);
// })

// sss闪烁

// 写入文件

// fs.open('write-data.txt', 'w', (err, fd) => {
//  if (err) {
//   throw err;
//  }

//  let buffer = Buffer.from('aaa'); // 覆盖

//  // 写入文件
//  fs.write(fd, buffer, 0, buffer.length, 0, (err, bytesWritten, buffer) => {
//   if (err) {
//    throw err;
//   }
//   // 打印出buffer 中存入的数据
//   console.log(bytesWritten, buffer.slice(0, bytesWritten).toString());

//   // 始终关闭文件描述符
//   fs.close(fd, (err) => {
//    if (err) {
//     throw err;
//    }
//   })
//  })
// })

// 将数据写入文件

// fs.writeFile(file, data[, options], callback)
// 方法用于将数据异步地写入到一个文件中，如果文件已存在则覆盖该文件。

// data 可以是字符串，或Buffer.  如果data 是一个Buffer，则 encoding  选项会被忽略，如果 options 是一个字符串，则它指定了字符编码.
// 将数据写入文件，如果文件不存在则创建文件
let data = 'node.js'; // 覆盖
fs.writeFile('write-data.txt', data, 'utf-8', (err) => {
 if (err) {
  throw err;
 }
})



