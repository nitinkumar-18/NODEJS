// import { createReadStream } from "fs";
// import { readFile } from "fs/promises";
// import http from "http";

// const server = http.createServer(async (req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     const readStream = createReadStream("./public/index.html");
//     readStream.pipe(res);
//   } else {
//     const readStream = createReadStream(`./public${req.url}`);
//     readStream.on("error", (err) => {
//       console.log(err.message);
//       res.end("Not Found!");
//     });
//     readStream.pipe(res);
//   }
// });

// server.listen(4000, "192.168.0.105", () => {
//   console.log("Server started");
// });



















// server large file very large file



import http from 'http';
import {createReadStream} from 'fs';
import {readFile} from "fs/promises";

const server=http.createServer(async(req,res)=>{
  // res.end("TANIHS TANDON");

  console.log(req.url);


  if(req.url==='/'){
    // const fileContent=await readFile("./index.html");
    // res.end(fileContent);


    const readStream=createReadStream("./public/index.html");

    readStream.pipe(res);



  }

  else{

       const readStream=createReadStream(`./public${req.url}`);


       console.log("file opened");

// error handle jo file exist nhi karti hai
       readStream.on("error",(err)=>{
        console.log(err.message)
        res.end("NOT FOUND");
       })
    readStream.pipe(res);
  }







  // const fileContent=await readFile("./index.html");

  // res.end(fileContent);
});


server.listen(4000,"192.168.1.7",()=>{
  console.log("SERVER STARTED");
})



// yeh choti file hai toh thik vrna humko file send ke liye stream ka use karo. 

