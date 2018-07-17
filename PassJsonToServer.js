var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var jsonObj = [{
        Name: 'Madhuri',
        Sirname: 'Patil',
        Age: 25
    },
    {
        Name : 'Ankita',
        Sirname : 'Unhalkar',
        Age : 23 
    },
    {
        Name : 'Rohini',
        Sirname : 'Deo',
        Age : 22 
    }
    ]
    res.end(JSON.stringify(jsonObj));
}).listen(4994);

console.log("Server Running on http://127.0.0.1:4994");
