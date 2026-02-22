
import fs from "fs/promises";

// const fileHandle=await fs.open("text.txt","r+");  yeh shuruvatt ke bytes mai hi write karta hai



// const fileHandle=await fs.open("text.txt","w+"); // yeh empty karke tabh write karega

// const writeStream=fileHandle.createWriteStream();

// writeStream.write("TANISH TANDON");


// const readStream=fileHandle.createReadStream();

// readStream.setEncoding('utf-8');//abcd

// readStream.on('data',(chunk)=>{
//     console.log(chunk);// buffer
// })







// File handle ek reference / connection hota hai jo operating system tumhare program ko deta hai taaki program file ko access kar sake.

// 👉 Simple words me:
// File handle = file tak pahunchne ka ID / gate pass























// const readFileHandle=await fs.open("/Users/tanishtandon/Downloads/ALLSTARS.mp4");


// const writeHandle=await fs.open("ALLSTARS.mp4");

// const readStream=readFileHandle.createReadStream();
// const writeStream=writeHandle.createWriteStream();

// readStream.pipe(writeStream)