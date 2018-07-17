var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('Requested Url : ', req.url);
    if (req.url === '/home' || req.url === '/') {
        var readStream = fs.createReadStream('index.html');
        readStream.pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var jsonObj = [{
            Name: 'Madhuri',
            Sirname: 'Patil',
            Age: 25
        },
        {
            Name: 'Ankita',
            Sirname: 'Unhalkar',
            Age: 23
        },
        {
            Name: 'Rohini',
            Sirname: 'Deo',
            Age: 22
        }
        ]
        res.end(JSON.stringify(jsonObj));
    }
    else if(req.url === '/about'){
        var readStream = fs.createReadStream('about.html');
        readStream.pipe(res);
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        var readStream = fs.createReadStream('PageNotFound.html');
        readStream.pipe(res);
    }
}).listen(4994);

console.log("Server Running on http://127.0.0.1:4994");