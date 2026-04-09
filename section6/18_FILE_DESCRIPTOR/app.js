
// import fs from "fs";


// fD is a non negative integer it is a positive number o zero


// yeh kya karega file open karega aur fd return karega 
// aur phele jo arguenment hota hai vo callback mai err hi hota hai


// fs.open('text.txt',(err,fd)=>{
//     console.log(fd);


// });
// iska fd 16 aya






// fs.open('tanish.txt',(err,fd)=>{
    // console.log(fd);


// });
// iska 17 hogha fd yeh continuous mai hota hai




// console.log(process.stdin.fd);//0
// console.log(process.stdout.fd);//1
// console.log(process.stderr.fd);//2


// har language mai stdin stdout hota hai

// esse karte hai toh fd miljata hai















// humko callback vagera hatana hai isme sai toh kya karo 
 import fs from "fs";

 const fd1=fs.openSync("text.txt");

const fd2=fs.openSync("tanish.txt");



const fd3=fs.openSync('output.txt');

console.log({fd1,fd2,fd3});




// { fd1: 16, fd2: 17, fd3: 18 }