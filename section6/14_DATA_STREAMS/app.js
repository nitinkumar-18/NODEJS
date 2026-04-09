// import fs from "fs";

// YEH EK READABLE STREAM HAI
// console.log(process.stdin);// ek tarah kai sai readble stream hai





// YEH EK WRITABLE STREAM HAI
// console.log(process.stdout);
// console.log(process.stderr);


// vaise toh yeh sabh duplex stream hai read and write both lekin by default personally thoda saa bss change atta hai jaise process.stdin isme readable stream hai




// process.stdin.write("TANISH");//ERROR DEGHA means 



// process.stdout.write("TANDON");// iss par hojaega same line mai aajata hai













// hum logh below data read kar rhe hai





// BELOW CODE WE GET DATA EVENT JO FIRE HO RHA HAI WAHI STRING DIKH RAHI HAI
// process.stdin.on("data",(chunk)=>{
//     console.log(chunk.toString());
// });

//


// WE CAN MODIFY IT ALSO

// process.stdin.on("data",(chunk)=>{
//     console.log('DATA RECEIVED:',chunk.toString());
// });









// const writeStream=fs.createWriteStream("output.txt");
// isme dekho output.txt file banegi uske baadh usme jo bhi hum likhege vo refresh karoge toh output miljaega uss file mai
// process.stdin.on("data",(chunk)=>{
//     writeStream.write(chunk);
// });





// HUMLOGH PIPE BHI KARA SKTE HAI ON DATA KI JARURAT NHI PADEGI

// process.stdin.pipe(writeStream);// TERMINAL SAI INPUT LEKAR HUMLOGH TERMINAL MAI INPUT AND OUTPUT KARA SKTE HAI



// process.stderr.write("HIII");// wrtite ka use karke kuch bhi likho dikhjaega  BSS ERROR SHOW KARNA HAI HUMKO




// stdin sai 0 connect hota hai
// stdout sai 1 connect hota hai
// stderr sai 2 connect hota hai
//aur inn sabhi numbers ko FD'S BOLTE HAI FILE DESCRIPTOR BOLTE HAI





// console.log(process.stdin.fd);//0// data listen read hogha
// console.log(process.stdout.fd);//1//data write termianl par dikega
// console.log(process.stderr.fd);//2//data write  terminal par dikega



// FD OS ASSIGN KARTA HAI














// HUMKO THODA ADVANCED CODE LIKHNA HOGHA JUST WRITE DISCUSS IN FUTURE

import fs, { createReadStream, createWriteStream } from "fs";

import { spawn } from "child_process";


// const childProcess=spawn('cat',['output.txt']);

// childProcess.stdout// yaha stdout ek readable ki tarah kaam karega





// hamara output stdout sai connected hai
// childProcess.stdout.on("data",(chunk)=>{
//     console.log(chunk.toString());
// });





// childProcess.stdin.write("TANISH") // KOI FARK NHI DIKEGA stdin sai kuch bhi write kara lekin nhi dikege kyoki humko sidha vo childprocess sai connect hai






// spawn method hai
const childProcess=spawn("node",["childprocess.js"]) // iss childprocess.js file ka output humko yheh pura code dega connected hai na isliye


// childProcess.stdout.on("data",(chunk)=>{
//     console.log(chunk.toString());
// })




// childProcess.stdin.write("TANISH IS BACK")








// const readStream=createReadStream()




const writeStream=createWriteStream("tanish.mp4");

childProcess.stdout.pipe(writeStream);


// we did task by read from stream to write in another stream 