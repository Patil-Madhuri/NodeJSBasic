var express = require('express');
var app = express();

app.get('/home', function(req,res){
    res.sendFile(__dirname + '/files/index.html');
});
app.get('/about', function(req,res){
    res.sendFile(__dirname + '/files/about.html');
});
app.use(function(req,res){
    res.sendFile(__dirname + '/files/index.html');
})
app.listen(4994, function(){
    console.log("Server Running on http://127.0.0.1:4994");
    
})