var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    var readStream = fs.createReadStream('Demo.txt', 'utf8');
    readStream.pipe(res);

}).listen(4994);

console.log("Server Running on http://127.0.0.1:4994");
