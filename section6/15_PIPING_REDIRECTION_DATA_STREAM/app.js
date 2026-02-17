// by this below we get actual data  via utf-8

process.stdin.setEncoding('utf-8');

process.stdin.on('data',(chunk)=>{
    console.log('app2.js:',chunk);
});






// echo sai jo output ayaa vo hamara uske input sai connect hogaya node ke



// Tanishs-MacBook-Air:15_PIPING_REDIRECTION_DATA_STREAM tanishtandon$ echo "THE TANISH TANDON" | node app.js
// Debugger listening on ws://127.0.0.1:51266/1322d29e-2cb9-47ca-90b8-1ff5f2ba86e2
// For help, see: https://nodejs.org/en/docs/inspector
// Debugger attached.
// THE TANISH TANDON



// utf-8 nhi karoge toh yeh aega aur yeh jo last mai hai na vo next line ke liye ke hai

// <Buffer 54 41 4e 49 53 48 20 54 41 4e 44 4f 4e 0a>


// mac ke terminal ke andar piping chalega




