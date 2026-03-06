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


// import express from "express";
// import {readdir,rm,rename} from "fs/promises"; 



// const app=express();

// app.use(express.json());
















// setting enable cors
// app.use((req,res,next)=>{
  // res.set("Access-Control-Allow-Origin","*");
  // res.set("Access-Control-Allow-Method","*");
  // OR

  // res.set({
  //  "Access-Control-Allow-Origin" :"*",
  //  "Access-Control-Allow-Methods":"*",
  //   "Access-Control-Allow-Headers":"*",

  // })




//    if(req.method === "OPTIONS"){
//     return res.sendStatus(200);
//   }



//   next();
// });








// app.use((req,res,next)=>{

//   res.set({
//     "Access-Control-Allow-Origin":"*",
//     "Access-Control-Allow-Methods":"GET,POST,PATCH,DELETE,OPTIONS",
//     "Access-Control-Allow-Headers":"Content-Type"
//   });

//   if(req.method === "OPTIONS"){
//     return res.sendStatus(200);
//   }

//   next();
// });


// app.use(express.static("storage"));

// serving files
// app.use((req,res,next)=>{



//   if(req.query.action === "download"){
//     res.set("Content-Disposition","attachment"); 
//   }




// express.static("storage")(req,res,next);

// })







//READ






//serve directory content
// app.get('/',async(req,res)=>{
//   const filesList=await readdir("./storage")// this fileList is an array
//   res.json(filesList);
// });





// app.get("/:filename",(req,res)=>{
//   const {filename}=req.params;


//   if(req.query.action === "download"){
//     res.set("Content-Disposition","attachment");



//   }

//   res.sendFile(`${import.meta.dirname}/storage/${filename}`);
// })




















// rename ke liye

//  app.patch("/:filename",async(req,res)=>{
//   const {filename}=req.params;


//   await rename(
//     `./storage/${filename}`,
//     `./storage/${req.body.newFilename}`
//   )
// res.json({message:"RENAMED SUCCESSFULLY"});




//  })






 
// // for delete
// app.delete("/:filename",async(req,res)=>{
//   const {filename}=req.params;
//   const filePath=`./storage/${filename}`;

//   try{
//     await rm(filePath);

//     res.json({message:"FILE DELETED SUCCESSFULLY"})
//   }
//   catch(err){
//     res.status(404).json({message:"FILE NOT FOUND"});
//   }



// });









//listen

// app.listen(2200,()=>{
//   console.log("SERVER STARTED"); 

// })













// yaha rm mai humne delete kardia toh phir delete hojata hai permannet recycle bin aur trash wali facility alag sai lagani hoti hai





// app.use(express.static("storage"));
// OR yeh dono code equal hai 

// app.use((req,res,next)=>{
//   express.static("storage")(req,res,next);
// })
















































//REAL CODE IS HERE




import express from "express";
import { createWriteStream } from "fs";
import { readdir, rename, rm, stat } from "fs/promises";
import cors from "cors";

const app = express();

app.use(express.json());



app.use(cors());






// Enabling CORS
// app.use((req, res, next) => {
//   res.set({
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "*",
//     "Access-Control-Allow-Headers": "*",
//   });
//   next();
// });












// Read
app.get("/directory/:dirname?", async (req, res) => {
  const {dirname}=req.params;

  const fullDirPath=`./storage/${dirname ? dirname : ""}`;
  const filesList = await readdir(fullDirPath);
  const resData=[]
  
  for(const item of filesList){
    const stats=await stat(`${fullDirPath}/${item}`);
    resData.push({name : item,isDirectory:stats.isDirectory()});

  }
  res.json(resData);
});

//create
app.post('/files/:filename',(req,res)=>{
   const writeStream=createWriteStream(`./storage/${req.params.filename}`);

   req.pipe(writeStream);
   req.on('end',()=>{
    res.json({message:"file Uploaded"});

   })
})






app.get("/files/:filename", (req, res) => {
  const { filename } = req.params;
  if (req.query.action === "download") {
    res.set("Content-Disposition", "attachment");
  }
  res.sendFile(`${import.meta.dirname}/storage/${filename}`);
});

// Update
app.patch("/files/:filename", async (req, res) => {
  const { filename } = req.params;
  await rename(`./storage/${filename}`, `./storage/${req.body.newFilename}`);
  res.json({ message: "Renamed" });
});

// Delete
app.delete("/files/:filename", async (req, res) => {
  const { filename } = req.params;
  const filePath = `./storage/${filename}`;
  try {
    await rm(filePath);
    res.json({ message: "File Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: "File Not Found!" });
  }
});

app.listen(2200, () => {
  console.log(`Server Started`);
});
