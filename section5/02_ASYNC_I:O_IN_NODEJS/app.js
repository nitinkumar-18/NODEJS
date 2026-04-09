// import fsPromises from "fs/promises";

// blocking code example below
// import fs from "fs";



// ASYNC I/O now is very common in NodeJS, and it is the default way to do I/O in NodeJS. It is also the recommended way to do I/O in NodeJS, as it allows for better performance and scalability.







// setTimeout(()=>{
//     console.log("THIS IS TANISH NODE");
// },0);





// THIS IS ASYNC IO
// const fileContent=await fsPromises.readFile("file.txt","utf-8");

// console.log(fileContent);


// today time we use most promises and async await to handle asynchronous code in NodeJS, as it makes the code more readable and easier to understand. It also allows us to write asynchronous code in a synchronous manner, which can be easier to debug and maintain.













// setTimeout(()=>{
//     console.log("THIS IS TANISH NODE");
// },0);


// const fileContent=fs.readFileSync("file.txt","utf-8");

// console.log(fileContent);




//readfileSync is a blocking code, it will block the event loop until the file is read, and then it will print the content of the file. This is not recommended in NodeJS, as it can lead to performance issues and scalability issues.














import fs from "fs";

setTimeout(()=>{
    console.log("THIS IS TANISH NODE");
},0);


const fileContent=fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
});

console.log(fileContent);



// async use in many language instead that is single threaded but create multiple threads to handle multiple requests at the same time, but in NodeJS, we use async I/O to handle multiple requests at the same time without blocking the event loop. This is one of the main reasons why NodeJS is so popular for building scalable and high-performance applications.






// NODE JS Not create new thread and never lack

// I/O ops are time consuming so mainthread ko block krna pdta hai, but in NodeJS, we use async I/O to handle multiple requests at the same time without blocking the event loop. This is one of the main reasons why NodeJS is so popular for building scalable and high-performance applications.