var fs = require('fs');

// // Demo.txt is the file name
// //utf8 is the encoding code
// var content = fs.readFileSync('files/Demo.txt','utf8');

// console.log(content);

// fs.writeFileSync('files/Demo1.txt',content);


// readFile accept three params __filename,encode ConvolverNode, callback function
var fileData = fs.readFile('/home/bridgeit/MADHURI/NodeJs/files/Demo.txt', 'utf8', function (err, data) {
    if (err)
        return console.error(err);
    console.log(data);
    writeFileMethod(data);
});

function writeFileMethod(data){
    fs.writeFile('files/Demo2.txt', data, function (err, data) {
        debugger;
        if (err)
            console.error(err);
        console.log("Data written in file successfully.....!!!");
    });
}

