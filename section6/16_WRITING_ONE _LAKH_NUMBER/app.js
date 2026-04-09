// import fs from "fs";

// async hai isliye number aaage piche aaraege isme

// console.time();
// for(let i=1;i<=5000;i++){

//     if(i==1){
//         fs.writeFile("tanish.tx",`${i},`,(err)=>{
//             if(err)console.log(err);

//             if(i===5000){
//                 console.timeEnd();
//             }
//         });
//     }
//     else{
//         fs.appendFile("tanish.txt",`${i}, `,(err)=>{
//             if(err)console.log(err);

//             if(i===50000){
//                 console.timeEnd();
//             }
//         })
//     }
   
// }




// console.timeEnd();



















// USE SYNC TO MATCH THE ORDER





// import fs from "fs";



// console.time();
// for(let i=1;i<=5000;i++){

//     if(i===1){
//         fs.writeFileSync("tanish.tx",`${i},`,(err)=>{
//             if(err)console.log(err);

//             if(i===5000){
//                 console.timeEnd();
//             }
//         });
//     }
//     else{
//         fs.appendFileSync("tanish.txt",`${i}, `,(err)=>{
//             if(err)console.log(err);

//             if(i===50000){
//                 console.timeEnd();
//             }
//         })
//     }
   
// }




// console.timeEnd();

























































// stream ka use karna kitna jyada fast hai bhaiiii
/// jo kaam append file sync vagera use karke ho rha thaa vo abh hum kuch seconds mai bhi kara skte hai stream ka use karke




// import fs from "fs";

// console.time();


// const writeStream=fs.createWriteStream("streamNumbers.txt");

// for(let i=1;i<=5000;i++){
//     writeStream.write(`${i}, `);
// }
// writeStream.end();


// writeStream.on("finish",()=>{
//     console.timeEnd();
// })


// console.timeEnd();






























import fs from "fs";

console.time();


const writeStream=fs.createWriteStream("streamNumberss.txt");

for(let i=1;i<=100000;i++){
    writeStream.write(`${i}, `);
}
writeStream.end();


writeStream.on("finish",()=>{
    console.timeEnd();
})


console.timeEnd();


















// 🔹 1️⃣ Buffering (bar-bar disk access nahi)

// Traditional I/O:
// 👉 Har read/write par system call → slow

// Streams:
// 👉 Data buffer me store hota hai → ek saath process hota hai
// 👉 Disk access kam → speed fast

// Example:

// cin >> x;   // slow


// vs

// ios::sync_with_stdio(false);
// cin.tie(NULL);


// 👉 buffer optimize → faster input

// 🔹 2️⃣ Continuous Flow Processing

// Streams data ko pipeline ki tarah handle karte hain.

// Without stream:

// read → store → process → output


// With stream:

// read → process → output (simultaneously)


// 👉 Memory usage kam
// 👉 Waiting time kam
// 👉 Throughput high

// 🔹 3️⃣ Lazy Processing (jab zarurat tab process)

// Streams tab tak process nahi karte jab tak data needed na ho.

// Example (Java Streams concept):

// filter → map → collect


// Processing happens only when collect runs.

// 👉 unnecessary computation avoid
// 👉 faster execution

// 🔹 4️⃣ Parallel Processing Support

// Streams easily parallel ho sakte hain.

// Example:

// parallelStream()


// 👉 multiple CPU cores use
// 👉 faster processing for large data

// 🔹 5️⃣ Less Overhead vs Traditional Loops

// Streams optimized libraries use karte hain.

// 👉 low-level optimization
// 👉 CPU cache friendly
// 👉 better performance

// 🔹 6️⃣ Large Data Handling Efficiently

// Streams pura data memory me load nahi karte.

// 👉 chunk wise processing
// 👉 big data / file processing fast

// ✅ Simple Line:

// Streams fast hote hain kyunki wo buffering, continuous flow, lazy processing, aur parallel execution use karte hain.