import express from "express";
import {open} from "fs/promises";


const app = express();
const port = 2700;


/// yeh ek middleware hai
// behind the scene yhe bhi stream use kar rha hai
app.use(express.static("public"));




app.get("/", (req, res) => {
  res.end("Hello World!!");
});




// isme humko isko cursor sai forward nhi kar skte hai yeh dikaat hai aur code bhi jyada line ka hai yeh
app.get("/test",async(req,res)=>{


  // const fileHandle=await open("STARS.mp4");
  // const readStream=fileHandle.createReadStream();

  // const stats=await fileHandle.stat();
  // res.setHeader("Content-Length",stats.size);
  // res.setHeader("Content-Type","video/mp4");
  // readStream.pipe(res);



  // THIS sendFile method want absolute path thats why we use this give us the absolute path of any file


  res.sendFile(`${import.meta.dirname}/STARS.mp4`);
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
