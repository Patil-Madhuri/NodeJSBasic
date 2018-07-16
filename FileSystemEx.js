var fs = require('fs');

// // Demo.txt is the file name
// //utf8 is the encoding code
// var content = fs.readFileSync('Demo.txt','utf8');

// console.log(content);

// fs.writeFileSync('Demo1.txt',content);

var fileData = fs.readFile('/home/bridgeit/MADHURI/NodeJs/Demo.txt', 'utf8', function(err,data){
    debugger;
    if(err)
        return console.error(err);
    debugger;
        console.log(data);
    
});

console.log("sucess");
fs.writeFile('Demo3.txt', fileData , function(err,data){
    debugger;
    if(err)
    console.error(err);
    console.log("Data written in file successfully.....!!!");
})