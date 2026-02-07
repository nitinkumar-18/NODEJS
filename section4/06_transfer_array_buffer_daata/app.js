// const a=new ArrayBuffer(8);
//OR
// const uint8Array=new Uint8Array(8);
// const a=uint8Array.buffer;


// yeh abhi ram mai hai fs use karo toh disk mai ajaega

// const a=uint8Array.buffer;

import fs from 'fs/promises'; // permanently disk mai write hojae toh yeh use kroo
const uint8Array=new Uint8Array(8);
uint8Array[0]=0x50;
uint8Array[1]=0x72;
uint8Array[2]=0x6f;
uint8Array[3]=0x43;
uint8Array[4]=0x6f;
uint8Array[5]=0x64;
uint8Array[6]=0x72;
uint8Array[7]=0x72;

console.log(uint8Array);


// const decoder=new TextDecoder("utf-8");
// console.log(decoder.decode(uint8Array));




const view=new DataView(uint8Array.buffer);

console.log(view);
fs.writeFile("buffer.text.txt",view);

