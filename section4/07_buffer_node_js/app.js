
import {Buffer} from "buffer";

// const uint8Array=new Uint8Array(4);

// const a=new ArrayBuffer(4);

// const nodeBuffer= Buffer.alloc(4);

// const nodeBuffer= Buffer.from(a);


// const uint8Array=new Uint8Array(a);

const nodeBuffer=Buffer.alloc(4);// 4 size ka create hokar zero assign hojaega



const nodeBuffer2=Buffer.from([97,98,99,100]);// iski bhaut size aegaa bhuat jyada

// uint8Array[0]=97


const nodeBuffer3=Buffer.allocUnsafe(4);

// uint8Array[1]=98



// uint8Array[2]=99

// uint8Array[3]=100


// console.log(uint8Array.buffer)
// console.log(nodeBuffer.buffer);

// console.log(nodeBuffer);


// isme humne nodeBuffer and uint8array ko connect kardia hai


// console.log(nodeBuffer.buffer === uint8Array.buffer);

// console.log(uint8Array.toString());//97,98,99,100

// console.log(nodeBuffer.toString("utf-8"));//a,b,c,d
console.log(nodeBuffer.byteLength)// 4 size
console.log(nodeBuffer2.byteLength)// 4 size
console.log(nodeBuffer3.byteLength)// 4 size
console.log(nodeBuffer.buffer.byteLength);// 4 size
console.log(nodeBuffer2.buffer.byteLength);// size bhaut jyda[8192]
console.log(nodeBuffer3.buffer.byteLength);//size bhaut jyda[8192]



