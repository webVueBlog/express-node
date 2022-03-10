const http = require('http')
const fs = require('fs')

// const server = http.createServer(function(req, res) {
//   fs.readFile(__dirname + '/ss.doc', (err, data) => {
// 	console.log(data, 'data')
//     res.end(data)
//   })
// })

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/ss.doc')
  console.log(stream, 'stream')
  stream.pipe(res)
})

server.listen(3000)
