import fs, { read } from "fs";

// hum logh yeh highwatermark ke baadh bhi encoding de skte hai
const readStream=fs.createReadStream("chars.txt",{highWaterMark:4,encoding:"utf-8"});
/// encoding set kardete sai hai toh hamara data string ke form mai ajata hai
// readStream.setEncoding("utf-8");// METHOD 1 setEncoding 

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     readStream.destroy(new Error('Err'));
// })


// readStream.on('data',(chunk)=>{
//     console.log(chunk);
// });


// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     readStream.destroy([]);
// })






// above code mai encoding set kardi hai toh string mai convert hojaega

// destroy mai hum error put kar skte hai
// readStream.on('error',(err)=>{
//     console.log({err});


// })

// readStream.on("open",(data)=>{
//     console.log("opened",data);
// });


// error close sai phele triger hogha
// hamesha end hi hogha run phele close sai phele
// readStream.on('close',()=>{
//     console.log("closed");
// })
// readStream.on("end",()=>{
//     console.log("End");


// })


// jabh destroy karte hai toh close event run hota hai

///destroy method. koi data nhi aega lekin ek event run hota hai uss time par 

// readStream.destroy(); // isme kewal close fire hogha end nhi






// below code ka yeh hai output
// /opened 16
// ready undefined

// readStream.on("open",(data)=>{
//     console.log("opened",data);
// })

// readStream.on("ready",(data)=>{
//     console.log("ready",data);
// })


// 🔥 1️⃣ open event kya hota hai?

// 👉 Ye event tab fire hota hai jab file successfully open ho jaati hai.
// ❓ Ye 16 kya hai?

// 👉 Ye file descriptor (fd) hai.
// File Descriptor kya hota hai?

// 👉 OS (Operating System) jab file open karta hai,
// toh usko ek unique number assign karta hai.

// 👉 isi number se system file ko track karta hai.
// tumhare system me fd number different ho sakta hai.

// 🔹 Real Life Analogy

// Socho bank token system:

// tum counter pe jaate ho

// token number milta hai

// jab tak kaam complete na ho, token se track hota hai

// 👉 file descriptor = token number


// 2️⃣ ready event kya hota hai?

// 👉 ready event tab fire hota hai jab:

// ✔ file open ho chuki
// ✔ stream read ke liye ready hai






// utf-8 upar lagao yaa niche both valid
// readStream.setEncoding("utf-8");








// aur yeh encoding hum tabhi lege jabh koi text ke sath kamm kar rhe ho mp4 files ke sath toh binary mai ho skti hai








readStream.on("data",(chunk)=>{
    console.log(chunk);
})