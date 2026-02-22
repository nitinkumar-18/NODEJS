// import http from "http";// this http module in node js 
//create server is a function

// const server = http.createServer(async (req, res) => {
//   res.setHeader("access-control-allow-origin", "*");
//   res.setHeader("Content-Type", "text/txt");
// yaha text/txt mai text/plain hota hai

  // setInterval(()=>{
  //   res.write("THE TANISH TANDON");
  // },500);








// res.end nhi lagaoge tabh takh yeh chalta rhega
  // res.end("Hello World");
// });

// server.listen(4000, "localhost", () => {
//   console.log("Server Started");
// });


// request is readable stream and response is writable stream


// local host:4000 par server started hai
















// import http from "http";
// import fs from "fs/promises";
// import { read } from "fs";

// const server=http.createServer(async(req,res)=>{
//   res.setHeader("access-control-allow-origin","*");
//   res.setHeader("Content-Type","text/txt");



//   const fileHandle=await fs.open('abc.txt');// yaha koi bhi file le skte  ho package.json anything jo present ho 
//   const readStream= fileHandle.createReadStream({highWaterMark :1});







//   readStream.on("data",(chunk)=>{
//     res.write(chunk);

//     readStream.pause();

//     setTimeout(()=>{
//       readStream.resume();
//     },500);


//   });








// readStream.on("end",()=>{
//   res.end();
// });


// });












// server.listen(4000,"localhost",()=>{
//   console.log("Server Started");
// })






















import http from "http";
import fs from "fs/promises";
import { read } from "fs";

const server=http.createServer(async(req,res)=>{
  res.setHeader("access-control-allow-origin","*");








  // yaha image likha hai humne toh jo img hoghi vo load karege
  res.setHeader("Content-Type","image/webp");



  const fileHandle=await fs.open('river.webp');// yaha koi bhi file le skte  ho package.json anything jo present ho 








  const readStream= fileHandle.createReadStream({highWaterMark :5000 });







  readStream.on("data",(chunk)=>{
    res.write(chunk);

    readStream.pause();

    setTimeout(()=>{
      readStream.resume();
    },500);


  });








readStream.on("end",()=>{
  res.end();
});


});












server.listen(4000,"localhost",()=>{
  console.log("Server Started");
})