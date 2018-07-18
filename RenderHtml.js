var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var readStream = fs.createReadStream('files/index.html');
    readStream.pipe(res);
}).listen(4994);

console.log("Server Running on http://127.0.0.1:4994");
