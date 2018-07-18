var express = require('express');
var app = express();

app.get('/home', function(req,res){
    res.send('this is home page')
});
app.get('/student', function(req,res){
    res.send('students page');
});

var students = {
    1 : 'Madhuri',
    2 : 'Ankita',
    3 : 'Rohini',
    4 : 'Poonam'
}
app.get('/student/:name', function(req,res){
    res.send('You are requested for user student: ' +students[req.params.name]);
})
app.use(function(req,res){
    res.send('this is home page')
})
app.listen(4994, function(){
    console.log("Server Running on http://127.0.0.1:4994");
})
