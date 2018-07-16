// setTimeout(function(){
//     console.log("Hi Madhuri.....!!!!!!");    
// },3000)

var time=0;
var timer = setInterval(function(){
    time+=2;
    console.log(time, 'sec have passed');
    if(time > 99){
        clearInterval(timer);
    }
}, 100);

console.clear()