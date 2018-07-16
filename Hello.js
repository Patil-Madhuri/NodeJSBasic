var http = require('http');
// Send the HTTP header 
    // HTTP Status: 200 : OK
http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello World \n');
}).listen(1234);
console.log("Server started");

