// import fs from "fs/promises";
import fs from "fs";

// const fileBuff=await fs.readFile("chars.txt");



// this give error due to large file it is
// const fileBuff=await fs.readFile("/Users/tanishtandon/Downloads/Interstellar.2014.BluRay.IMAX.1080p.Hindi.English.DD.5.1.x264.ESub.Vegamovies.To.mkv");



// console.time();
// via buffer it take time default: 4.738ms this much
//MEMORY // 400MB
// CPU 3%
// isme memory bhaut kharabh sai handle ho rhi hai 
// kyoki itna kabhi kabar space hi nhi hota hai
// const fileBuff=await fs.readFile("/Users/tanishtandon/Downloads/Part 2 – Master JavaScript & Become a Real Developer _ Full Course - YouTube.html");


// await fs.writeFile("Part 2 – Master JavaScript & Become a Real Developer _ Full Course - YouTube.html",fileBuff);




//chunkBuffer by default is 64 bytes =64*1024=65536 size 64 kilobytes


//toh bhai never write and read on same time this is quite lagging the system very fast 
// const readStream= fs.createReadStream("/Users/tanishtandon/Downloads/COMPILER.pdf",{highWaterMark:1 * 1024 * 1024});



//on() = "agar ye event hua to kya karna hai"

// emit() = "event ho gaya"


// {highWaterMark:100 * 1024 * 1024}); iska matlab itna itna read karega read karega 


// readStream.on('data',(chunkBuffer)=>{
//     console.log(chunkBuffer);
//     console.log(chunkBuffer.byteLength);
// })

// large file

// readStream.on("data",(chunkBuffer)=>{
//     fs.appendFileSync("/Users/tanishtandon/Downloads/COMPILER.pdf",chunkBuffer)

//     if(chunkBuffer.byteLength < 1 * 1024 * 1024){
// console.timeEnd();
//     }
// });
// memory ka usage bhuat kam kar skte hai bss time thoda extra lagha  data ko chunks mai read karna




// readStream.on("data",(chunkBuffer)=>{
//     fs.appendFileSync("/Users/tanishtandon/Downloads/interstellar.mkv",chunkBuffer)

//     if(chunkBuffer.byteLength < 1 * 1024 * 1024){
// console.timeEnd();
//     }
// });







// readStream.on("data", (chunkBuffer) => {
//     fs.appendFileSync(
//         "/Users/tanishtandon/Downloads/output.mkv",
//         chunkBuffer
//     );
// });



// console.timeEnd();


// we can not do big video in vscode
// video play but not large video play by vs code have lots of ups and down in memory 

// so we want to make our applications like that it not dangerous for RAM SIZE
// SO IF WE PLAY SAME VIDEO IN VLC IT WILL RUN IN CHUNKS WHATEVER IT IS LARGE NO MATTER


// console.log(fileBuff.byteLength);

// console.log(fileBuff.toString);






// streams we can work with promises or not there is your choice only ek do steps baddh jaate hai bss






//highWaterMark:4 means size. 4 ka table

const readStream=fs.createReadStream("chars.txt",{
    highWaterMark:16,
});

let readCount=0;




readStream.on("data",(chunk)=>{
    console.log(chunk.byteLength);
    readCount++;
})



readStream.on("end",(chunk)=>{
    console.log({readCount});
    
})
