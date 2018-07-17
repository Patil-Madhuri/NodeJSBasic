var events = require('events');
var eventEmitter  = new events.EventEmitter();

eventEmitter.on('clicked', function(){
    console.log('some event has been clicked');
})

eventEmitter.emit('clicked');

