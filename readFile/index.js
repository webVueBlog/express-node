
const fs = require('fs')
const path = require('path')

// fs.readFile('C:/temp/express-node/readFile/1.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

const p = path.resolve('1.txt')

fs.readFile(p, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})