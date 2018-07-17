const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('stake ', (input1) => {
    if (input1) {
        rl.question('goal', (input2) => {
            if(input2){
                rl.question('play', (input3) =>{
                    console.log('hi........')
                })
            }
        });
    }
}
);