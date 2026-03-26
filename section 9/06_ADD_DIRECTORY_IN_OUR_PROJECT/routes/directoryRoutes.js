










import express from "express";
import { readFile, writeFile, rm } from "fs/promises";
import crypto from "crypto";
import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";
import { Db, ObjectId } from "mongodb";
import { dir } from "console";

const router = express.Router();



router.param("parentDirId", validateIdMiddleware);
router.param("id", validateIdMiddleware);





// =========================
// GET DIRECTORY
// =========================
router.get("/:id?", async (req, res) => {
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
    next(err);
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
  const { id } = req.params;

  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const filesData = JSON.parse(
      await readFile("./filesDB.json", "utf-8")
    );

    const dirIndex = directoriesData.findIndex(
      (dir) => dir.id === id
    );

    if (dirIndex === -1) {
      return res.status(404).json({ message: "Directory not found" });
    }

    const directoryData = directoriesData[dirIndex];

    // ❌ remove directory
    directoriesData.splice(dirIndex, 1);

    // 🧹 delete files inside
    for (const fileId of directoryData.files) {
      const fileIndex = filesData.findIndex((file) => file.id === fileId);

      if (fileIndex !== -1) {
        const fileData = filesData[fileIndex];

        await rm(`./storage/${fileId}${fileData.extension}`);
        filesData.splice(fileIndex, 1);
      }
    }

    // 🧹 delete child directories (simple version)
    for (const childId of directoryData.directories) {
      const childIndex = directoriesData.findIndex(
        (d) => d.id === childId
      );

      if (childIndex !== -1) {
        directoriesData.splice(childIndex, 1);
      }
    }

    // 🧹 remove from parent
    const parentDir = directoriesData.find(
      (dir) => dir.id === directoryData.parentDirId
    );

    if (parentDir) {
      parentDir.directories = parentDir.directories.filter(
        (dirId) => dirId !== id
      );
    }

    await writeFile(
      "./filesDB.json",
      JSON.stringify(filesData, null, 2)
    );

    await writeFile(
      "./directoriesDB.json",
      JSON.stringify(directoriesData, null, 2)
    );

    return res.status(200).json({ message: "Directory Deleted!" });

  } catch (err) {
    console.log("DELETE ERROR:", err);
    next(err);
  }
});



export default router;