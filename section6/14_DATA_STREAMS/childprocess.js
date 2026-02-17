import {createReadStream,createWriteStream} from "fs";

// const writeStream=createWriteStream('output.txt');

// process.stdin.on("data",(chunk)=>{
//     writeStream.write(chunk);

// })


// console.log("Child APP");


const readStream=createReadStream("/Users/tanishtandon/Desktop/ALLSTARS.mp4")




readStream.pipe(process.stdout);



