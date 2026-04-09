// import fs from "fs";

// const fd =fs.openSync("text.txt");
// const readBuffer=Buffer.alloc(10); // abh 1- hi buffer print hoghe



// const fd =fs.openSync("app.js");// jo code app.js file mai hai vo print hojaega






// console.log(fd);
// yeh opensync isliye kar rhe hai kyoki callback avoid kar rhe hai lekin promises use karna best hai vaise 













// kitne bhi size ka buffer bana skte ho
// const readBuffer=Buffer.alloc(32 * 1024);






// const readBuffer=Buffer.alloc(4);// 4 read karega sirf starting ke





// yeh fs.read mai 16 hai waha 16 bhi likh do yaa phir fd dono thik hai

// position means vo vo iss position sai character read karega end takh read hogha

// length means vo sirf itna hi read karega itni hi length ka


// offset 2 byte ko leave kar kar write karega


// yeh sabh options hai usme

// fs.read(fd,{
//     buffer:readBuffer,
//     length:5,
//     position:2,
//     offset:2
// },(err,bytesRead,buffData)=>{
    // console.log(err);
    // console.log(buffData);
    // console.log(bytesRead);
    // console.log(buffData.byteLength);

    // console.log(buffData);
    // console.log(bytesRead);
    //  console.log(buffData.toString());





// });












// main yeh hai baki kuch yaad matt karo


import fs from 'fs'

const fd=fs.openSync("text.txt");


const readBuffer=Buffer.alloc(10);

fs.read(fd,(err,bytesRead,buffData)=>{
    console.log(bytesRead);
    console.log(buffData.toString());
    console.log(buffData);
})
