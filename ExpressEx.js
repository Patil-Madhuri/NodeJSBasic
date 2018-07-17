var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static('public'));

app.get('/home',function(req,res){
    var readStream = fs.createReadStream('index.html');
    readStream.pipe(res);
});

app.get('/about', function(req,res){
    var readStream = fs.createReadStream('about.html');
        readStream.pipe(res);
})

app.get('/api', function(req,res){
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
});

app.use(function(req,res){
    res.writeHead(404, { 'Content-Type': 'text/html' });
    var readStream = fs.createReadStream('PageNotFound.html');
    readStream.pipe(res);
});

app.listen(4994);
console.log("Server Running on http://127.0.0.1:4994");