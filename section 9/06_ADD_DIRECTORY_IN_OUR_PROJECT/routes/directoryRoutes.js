// import express from "express";
// import path from "path";

// import { readdir, stat,mkdir  } from "fs/promises";
// // import cors from "cors";
// // import { error } from "console";





// const router=express.Router();




// // Read
// router.get("/?", async (req, res) => {
//   // const {0 :dirname}=req.params;

//   // const dirname=path.join("/",req.params[0]);

//   const dirname = req.params[0] || "";

//   const fullDirPath=`./storage/${dirname ? dirname : ""}`;

//   try{
//   const filesList = await readdir(fullDirPath);
//   const resData=[]
  
//   for(const item of filesList){
//     const stats=await stat(`${fullDirPath}/${item}`);
//     resData.push({name : item,isDirectory:stats.isDirectory()});

  



//   }
//   res.json(resData);



// } catch(err){
//   res.json({error : err.message});
// }
// });











// router.post("/*",async(req,res)=>{
//   // const dirname=path.join("/",req.params[0]);

//   const dirname = req.params[0] || "";

//   try{
//   await mkdir(`./storage/${dirname}`,{recursive:true})
//   res.json({message :"DIRECTORY CREATED"});
//   }
//   catch(err){
    
//     res.json({err: err.message});
//   }

// })



// export default router;






import express from "express";
import { mkdir, readdir, stat } from "fs/promises";
import path from "path";
import directoriesData from  "../directoriesDB.json" with {type:"json"};
import filesData from '../filesDB.json' with {type :"json"};

const router = express.Router();

// Read
router.get("/:id?", async (req, res) => {
  const {id}=req.params

  if(!id){
    const directoryData=directoriesData[0];
     const files=directoryData.files.map((fileId)=>
      filesData.find((file)=>file.id === fileId)
    )
    res.json({...directoryData,files});
  }

  else{
      const directoryData=directoriesData.find((directory)=>directory.id===id)

  res.json(directoryData)

  }


  
  
});

router.post ("/*", async (req, res) => {
  const dirname = path.join("/", req.params[0]);
  try {
    await mkdir(`./storage/${dirname}`);
    res.json({ message: "Directory Created!" });
  } catch (err) {
    res.json({ err: err.message });
  }
});

export default router;
