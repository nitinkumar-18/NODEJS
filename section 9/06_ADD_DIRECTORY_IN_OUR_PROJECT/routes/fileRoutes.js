


// import express from "express";
// import path from "path";
// import {  createWriteStream} from "fs";
// import {  rename, rm  } from "fs/promises";
// import router from "./directoryRoutes";
// // import cors from "cors";







// //create
// router.post('/*',(req,res)=>{
//   const filePath = req.params[0]; 
//   //  const writeStream=createWriteStream(`./storage/${req.params.filename}`);



//   const writeStream = createWriteStream(`./storage/${filePath}`);

//    req.pipe(writeStream);
//    req.on('end',()=>{
//     res.json({message:"file Uploaded"});

//    })
// })


// //app.get("/files/:filename".   or app.post('/files/:*' yeh star wala kitne takh bhi jaa skte ho file/file/file



// //app.get("/users", handler)

// // Sirf yeh match karega:

// // /users

// // Lekin agar wildcard use kare:

// // app.get("/users/*", handler)





// // PATH TRAVERSAL VULNERABILITY
// router.get("/*", (req, res) => {
//     // const filePath = path.join("/",req.params[0]); 
//   // const { 0:filePath } = req.params;

//   const filePath = req.params[0];
//   if (req.query.action === "download") {
//     res.set("Content-Disposition", "attachment");
//   }

//   // const readStream=createReadStream(
//   //   `${import.meta.dirname}/storage/${filePath}`
//   // );
//   // readStream.pipe(res);
  




//   const fullPath = path.join(process.cwd(),"storage",filePath);

//   res.sendFile(fullPath,(err)=>{

//     if(err){
//     res.json({err : "file not found"});
//     }
//   });
// });











// // Update
// router.patch("/*", async (req, res) => {
//     const filePath = req.params[0];
//   await rename(`./storage/${filePath}`, `./storage/${req.body.newFilename}`);
//   res.json({ message: "Renamed" });
// });










// // Delete
// router.delete("/*", async (req, res) => {
//   const filePath = req.params[0];

//   // const { filename } = req.params;
//   // const filePath = `./storage/${filename}`;
//   try {
//     await rm(`./storage/${filePath}`,{recursive:true});
//     res.json({ message: "File Deleted Successfully" });
//   } catch (err) {

//     res.status(404).json({ message: "File Not Found!" });
//   }
// });












// export default router;


















import express from "express";
import { createWriteStream } from "fs";
import { rename, rm } from "fs/promises";
import path from "path";

const router = express.Router();

// Create
router.post("/*", (req, res) => {
  const filePath = path.join("/", req.params[0]);
  const writeStream = createWriteStream(`./storage/${filePath}`);
  req.pipe(writeStream);
  req.on("end", () => {
    res.json({ message: "File Uploaded" });
  });
});

// Path Traversal Vulnerability
router.get("/*", (req, res) => {
  const filePath = path.join("/", req.params[0]);
  if (req.query.action === "download") {
    res.set("Content-Disposition", "attachment");
  }
  res.sendFile(`${process.cwd()}/storage/${filePath}`, (err) => {
    if (err) {
      res.json({ error: "File not found!" });
    }
  });
});

// Update
router.patch("/*", async (req, res) => {
  const { 0: filePath } = req.params;
  await rename(`./storage/${filePath}`, `./storage/${req.body.newFilename}`);
  res.json({ message: "Renamed" });
});

// Delete
router.delete("/*", async (req, res) => {
  const { 0: filePath } = req.params;
  try {
    await rm(`./storage/${filePath}`, { recursive: true });
    res.json({ message: "File Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
