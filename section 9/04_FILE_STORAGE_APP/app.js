// import express from "express";
// import { readdir } from "fs/promises";

// const app = express();

// // Enabling CORS
// app.use((req, res, next) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   next();
// });

// // Serving File
// app.use((req, res, next) => {
//   if (req.query.action === "download") {
//     res.set("Content-Disposition", "attachment");
//   }
//   express.static("storage")(req, res, next);
// });

// // Serving Dir Content
// app.get("/", async (req, res) => {
//   const filesList = await readdir("./storage");
//   console.log(filesList);
//   res.json(filesList);
// });

// app.listen(4000, () => {
//   console.log(`Server Started`);
// });






























// START FROM HERE








// res.set("Access-Control-Allow-Origin","*"); CORS ERROR RESOLVE


import express from "express";
import {readdir} from "fs/promises"; 


const app=express();

// setting enable cors
app.use((req,res,next)=>{
  res.set("Access-Control-Allow-Origin","*");
  next();
});



// app.use(express.static("storage"));

// serving files
app.use((req,res,next)=>{



  if(req.query.action === "download"){
    res.set("Content-Disposition","attachment"); 
  }




express.static("storage")(req,res,next);

})


//serve directory content
app.get('/',async(req,res)=>{
  const filesList=await readdir("./storage")// this fileList is an array
  res.json(filesList);
});

//listen

app.listen(2200,()=>{
  console.log("SERVER STARTED"); 

})



















// app.use(express.static("storage"));
// OR yeh dono code equal hai 

// app.use((req,res,next)=>{
//   express.static("storage")(req,res,next);
// })
