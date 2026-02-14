import fs from "fs";

// readable stream ke andar hoti hai 64kb and write ke andar 16 kb =16 * 1024=16384bytes
const writeStream=fs.createWriteStream("file.txt");

// console.log(writeStream.writableHighWaterMark);

// below sare excecute hoghe append karte jaega file.txt mai 
writeStream.write('abc');
writeStream.write('123');
writeStream.write('ABC');
writeStream.write('TAN');
// writestream improve time take less time append file sai compare karo toh







// 🔥 Backpressure kya hota hai?

// 👉 Backpressure tab hota hai jab:

// Readable stream data fast bhej rahi ho
// lekin
// Writable stream utni fast process nahi kar pa rahi.

// ➡ result: data jam hone lagta hai ⚠

// 🔹 Ek line me:

// 👉 Backpressure = data producer fast, consumer slow



// Real Life Example 🚰

// Socho pipe se paani aa raha hai:

// pipe speed = fast

// bucket bharne ki speed = slow

// ➡ paani overflow ho jayega

// 👉 ye overflow situation = backpressure
 