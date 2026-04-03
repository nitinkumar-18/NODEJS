










import express from "express";
import { readFile, writeFile, rm } from "fs/promises";
import crypto from "crypto";
import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";
import { Db, ObjectId } from "mongodb";
import { dir, error } from "console";
import { get } from "https";
import { extension } from "mime-types";

const router = express.Router();



router.param("parentDirId", validateIdMiddleware);
router.param("id", validateIdMiddleware);





// =========================
// GET DIRECTORY
// =========================
router.get("/:id?", async (req, res) => {
  // const db=req.db;
  // const db=req.db;

  const db=req.db;


  const dirCollection=db.collection("directories");

  
  const user = req.user;

  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const filesData = JSON.parse(
      await readFile("./filesDB.json", "utf-8")
    );

    const _id = req.params.id ? new ObjectId(req.params.id): user.rootDirId;

    // const directoryData = directoriesData.find((dir) => dir.id === id);


// const directoryData=await db.collection("directories").findOne({_id:new ObjectId(id)})



const directoryData = await db.collection("directories").findOne({
  _id: _id,
    userId: user._id
});


// console.log(directoryData);
// return;


    if (!directoryData) {
      return res.status(404).json({ message: "Directory not found" });
    }

    // const files = directoryData.files.map((fileId) =>
    //   filesData.find((file) => file.id === fileId)
    // );



    // const files=await db.collection('files').find({parentDirId:directoryData._id}).toArray();

    // const directories=await dirCollection.find({parentDirId :_id}).toArray();



    const files = await db.collection('files')
  .find({ parentDirId: directoryData._id, userId: user._id })
  .toArray();

const directories = await dirCollection
  .find({ parentDirId: _id, userId: user._id })
  .toArray();


    // const directories = directoryData.directories
    //   .map((dirId) => directoriesData.find((dir) => dir.id === dirId))
    //   .map(({ id, name }) => ({ id, name }));

    return res.status(200).json({
      ...directoryData,
      files:files.map((dir)=>({...dir,id:dir._id})),
      directories:directories.map((dir)=>({...dir,id:dir._id})),
    });

  } catch (err) {
    console.log("GET ERROR:", err);
    res.status(500).json({ message: "Server Error" });
  }
});



// =========================
// CREATE DIRECTORY
// =========================
router.post("/:parentDirId?", async (req, res, next) => {
  const user = req.user;
  const db=req.db;
  const dirCollection=db.collection("directories");



  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const parentDirId = req.params.parentDirId || user.rootDirId;

    
    const dirname = req.headers.dirname || "NEW FOLDER";

    // const parentDir = directoriesData.find(
    //   (dir) => dir.id === parentDirId
    // );


  //   const parentDir=await dirCollection.findOne({_id:new ObjectId(parentDirId)});


  //   if (!parentDir) {
  //     return res.status(404).json({ message: "Parent directory not found" });
  //   }


  // const savedDir=  dirCollection.insertOne({
  //     name:dirname,
  //     parentDirId,

  //     userId:user._id,

  //   })
  //   console.log(savedDir);

    const id = crypto.randomUUID();

    // const newDir = {
    //   id,
    //   name: dirname,
    //   parentDirId,
    //   userId: user.id,
    //   files: [],
    //   directories: [],
    // };

    // directoriesData.push(newDir);
    // parentDir.directories.push(id);








    //  const parentDir=await dirCollection.findOne({_id:new ObjectId(parentDirId)});


    const parentDir = await dirCollection.findOne({
  _id: typeof parentDirId === "string"
    ? new ObjectId(parentDirId)
    : parentDirId
});


    if (!parentDir) {
      return res.status(404).json({ message: "Parent directory not found" });
    }


  const savedDir=  await dirCollection.insertOne({
      name:dirname,
      // parentDirId,
       parentDirId: parentDir._id,

      userId:user._id,

    })
    console.log(savedDir);
    // await writeFile(
    //   "./directoriesDB.json",
    //   JSON.stringify(directoriesData, null, 2)
    // );



    return res.status(201).json({ message: "Directory Created!" });

  } catch (err) {
    if(err.code===121){
      res.status(400).json({error:"Invalid fields,please enter valid details"});
  }  else{
      next(err);
    }
  }
});








// =========================
// RENAME DIRECTORY
// =========================
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { newDirName } = req.body;

  const db=req.db;

  const dirCollection=db.collection("directories");

  try {
    // const directoriesData = JSON.parse(
    //   await readFile("./directoriesDB.json", "utf-8")
    // );

    // const dirData = directoriesData.find((dir) => dir.id === id);

    // if (!dirData) {
    //   return res.status(404).json({ message: "DIRECTORY NOT FOUND" });
    // }




    const user = req.user;
 await dirCollection.updateOne({_id:new ObjectId(id),userId:user._id},{$set:{name:newDirName }})
  

    // dirData.name = newDirName;

    // await writeFile(
    //   "./directoriesDB.json",
    //   JSON.stringify(directoriesData, null, 2)
    // );

    return res.status(200).json({ message: "Directory Renamed!" });

  } catch (err) {
    next(err);
  }
});


































// =========================
// DELETE DIRECTORY
// =========================
router.delete("/:id", async (req, res, next) => {
  const user=req.user;
   
  const { id } = req.params;


  const db=req.db;



  const filesCollection=db.collection('files');

  const dirCollection=db.collection('directories');

  


  const dirObjId=new ObjectId(id);


 const directoryData= await dirCollection.findOne({_id:dirObjId,userId:req.user._id},
  {projection : {_id :1}}
 );


 if(!directoryData){
  return res.status(404).json({error : "DIRECTORY NOT FOUND"});
 }







  // const files=await filesCollection.find({parentDirId:parentDirObjId}, {projection : {name:1,_id:0}}).toArray();


  // const directories=await dirCollection.find({parentDirId:parentDirObjId},{projection:{name:1,_id:0}}).toArray();




  // console.log({files,directories});











  async function getDirectoryContents(id){


  let files=await filesCollection.find({parentDirId:id , userId:user._id}, {projection : {_id:1,extension:1}}).toArray();



  let directories=await dirCollection.find({parentDirId:id ,   userId: user._id},{projection:{_id:1}}).toArray();




  // for(const {_id,name} of files){

  //   console.log(name);
  //   // getDirectoryContents(_id);

  //   // await getDirectoryContents(
  //   //   _id
  //   // );
    


  // }


  for(const {_id,name} of directories){

    console.log(name);
    // getDirectoryContents(_id);

   const{files :childFiles,directories:childDirectories}= await getDirectoryContents(
      _id
      
    );



    files=[...files,...childFiles];

    

directories=[...directories,...childDirectories];

  }









  // for(const {_id,name} of files){

  //   console.log(name);
  //   // getDirectoryContents(_id);

  //   await getDirectoryContents(
  //     _id
  //   );
    


  // }




  return {files,directories};




  }


  // const data=await getDirectoryContents(dirObjId);
  // console.log(data);


  




  const {files,directories}=await getDirectoryContents(dirObjId);



// 🔍 DEBUG LOGS (YAHI LAGANA HAI)
// console.log("FILES IDS:", files.map(f => f._id));
// console.log("DIR IDS:", directories.map(d => d._id));






  console.log(files,directories);

  for(const {_id,extension} of files){

    await rm(`./storage/${_id.toString()}${extension}`);
 
  }





  // console.log(files);
  // console.log(files.map(({_id})=>_id));
  // console.log(directories);
  // console.log(directories.map(({_id})=>_id));






  




 await  filesCollection.deleteMany({_id : {$in :files.map(({_id})=>_id)}})



 await  dirCollection.deleteMany({_id : {$in :[...directories.map(({_id})=>_id),dirObjId]}})

//  const {old,new}=directo




  // return res.json({message : " FILES DELETED SUCCESSFULLY"})


  return res.json({message : "FILES DELETED SUCCESSFULLY"})
  


});



export default router;














































