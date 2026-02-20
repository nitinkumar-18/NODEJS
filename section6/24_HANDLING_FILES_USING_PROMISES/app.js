import fs from "fs/promises";


const fileHandle=await fs.open('text.txt','r+')// open promises return karega. // toh yeh filehandle kuch nahi bss fd ko use karke ek object banadia.  kahi sarre methods and properties hai 


const {buffer,bytesRead}=await fileHandle.read({buffer : Buffer.alloc(10)});









// 🔹 File Handle kya hota hai?

// 👉 File handle ek reference / ID hota hai jo OS deta hai jab tum file open karte ho.

// 💡 Matlab:

// File open → OS ek number deta hai → us number se file operate hoti hai.



const {buffer : writtenBuffer , bytesWritten}= await fileHandle.write(Buffer.from("TANISH TANDON"));

console.log({writtenBuffer});

console.log({bytesWritten});






await fileHandle.close();
// console.log(buffer);
// console.log(bytesRead);





// console.log(fileHandle.fd);





