var events = require('events');
var util = require('util');

var Student = function(name){
    this.name = name;
}

util.inherits(Student, events.EventEmitter);

var madhuri = new Student('Madhuri');

madhuri.on('scores', function(marks){
    console.log(madhuri.name ," Scores " +marks);   
})

madhuri.emit('scores',95);