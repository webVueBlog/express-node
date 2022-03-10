
const fs = require('fs')
const path = require('path')

// 可能会使用的标志有：

// r+ 打开文件用于读写。
// w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
// a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。

const p = path.resolve('1.txt')
const p1 = path.resolve('2.txt')

const content = 'aaa'

// fs.writeFile(p, content, { flag: 'a+' },  err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //文件写入成功。
// })

// 清空覆盖？
fs.writeFile(p, content, { flag: 'r+' },  err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})

// 清空覆盖？
// fs.writeFile(p, content, { flag: 'w+' },  err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //文件写入成功。
// })

