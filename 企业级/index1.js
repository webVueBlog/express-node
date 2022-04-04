var fs = require('fs');
var rs = fs.createReadStream('Buffer缓冲区.md');
var data = '';
rs.on("data", function(chunk) {
    data += chunk;
});
rs.on("end", function() {
    console.log(data);
});