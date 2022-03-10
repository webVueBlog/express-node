
const fs = require('fs')
fs.open('C:/temp/express-node/nodefile/1.txt', 'r', (err, fd) => {
  //fd ÊÇÎÄ¼þÃèÊö·û¡£
  console.log('fd', fd)
})

fs.stat('C:/temp/express-node/nodefile/1.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('stats', stats)
  // stats.isFile() //true
  // stats.isDirectory() //false
  // stats.isSymbolicLink() //false
  stats.size //1024000 //= 1MB
  console.log('stats', stats.size)
})

// fd 3
// stats Stats {
//   dev: 339483942,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 3096224745677188,
//   size: 33,
//   blocks: 0,
//   atimeMs: 1646896619086.4546,
//   mtimeMs: 1646896615245.6987,
//   ctimeMs: 1646896615245.6987,
//   birthtimeMs: 1646896619085.4917,
//   atime: 
//   mtime: 
//   ctime: 
//   birthtime: 
// }
// stats 33
