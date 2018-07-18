var fs = require('fs');

var readStream = fs.createReadStream('files/file.txt','utf8');
var writeStream = fs.createWriteStream('files/writefile1.txt');

/* Piping is a mechanism where output of one stream is used as input to another stream. 
 There is no limit on piping operation. */
readStream.pipe( writeStream);
console.log("-------Data written------");   
