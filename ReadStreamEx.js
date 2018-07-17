var fs = require('fs');

var readStream = fs.createReadStream('file.txt','utf8');
var data = '';
readStream.on('data', function(chunks){
    console.log('-------------------------------------------------------------------------');
    data += chunks;
    // console.log(chunks);
})

readStream.on('end', function(){
    console.log(data);
    console.log('--------------End--------------------');
})