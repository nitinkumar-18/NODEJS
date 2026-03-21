// import express from "express";
// import { readFile } from "fs/promises"
// import { mkdir, readdir, rm, stat, writeFile } from "fs/promises";
// import path from "path";
// // import directoriesData from '../directoriesDB.json' with {type: "json"}
// // import filesData from '../filesDB.json' with {type: "json"}
// import usersData from '../usersDB.json' with {type : "json"}
// import crypto from "crypto";
// import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";


// const router = express.Router();





// router.param("parentDirId",validateIdMiddleware)
// router.param("id",validateIdMiddleware)

















// router.get("/:id?", async (req, res) => {

//   // const { uid } = req.cookies

//   const db=req.db;

//   console.log(db);


//   const collection=db.collection('expenses');

// const data=await collection.find().toArray();


// console.log(data);



//    const user = req.user

//   // const user = usersData.find((user) => user.id === uid)

//   // if (!user) {
//   //   return res.status(401).json({ message: "User not found" })
//   // }

//   const directoriesData = JSON.parse(
//     await readFile("./directoriesDB.json", "utf-8")
//   )

//   const filesData = JSON.parse(
//     await readFile("./filesDB.json", "utf-8")
//   )




//   const id = req.params.id || user.rootDirId

//   const directoryData = directoriesData.find(
//     (directory) => directory.id === id
//   )

//   if (!directoryData) {
//     return res.status(404).json({ message: "Directory not found" })
//   }

//   const files = directoryData.files.map((fileId) =>
//     filesData.find((file) => file.id === fileId)
//   )

//   const directories = directoryData.directories
//     .map((dirId) => directoriesData.find((dir) => dir.id === dirId))
//     .map(({ id, name }) => ({ id, name }))

//   return res.status(200).json({ ...directoryData, files, directories })

// })

































// router.post("/:parentDirId?", async (req,res,next)=>{
//   const user=req.user

// //  const {uid}=req.cookies
// //  const user = usersData.find((user)=>user.id === uid)

// //  if(!user){
// //    return res.status(401).json({message:"User not found"})
// //  }


//  const directoriesData = JSON.parse(
//    await readFile("./directoriesDB.json","utf-8")
//  )

//  const parentDirId = req.params.parentDirId || user.rootDirId
//  const dirname = req.headers.dirname || "NEW FOLDER"

//  const id = crypto.randomUUID()

//  const parentDir = directoriesData.find(dir => dir.id === parentDirId)

//  if(!parentDir){
//    return res.status(404).json({message:"Parent directory not found"})
//  }

//  const newDir = {
//    id,
//    name: dirname,
//    parentDirId,
//    userId: user.id,
//   // userId:req.cookies.uid,
//    files: [],
//    directories: []
//  }

//  directoriesData.push(newDir)
//  parentDir.directories.push(id)


//  try{
//  await writeFile(
//    "./directoriesDB.json",
//    JSON.stringify(directoriesData,null,2)
//  )

//  return res.status(201).json({message:"Directory Created!"})
// }
// catch(err){
//   next(err)
// }



// })














// router.patch('/:id', async (req, res,next) => {
//   const {id} = req.params
//   const {newDirName} = req.body
//   const dirData = directoriesData.find((dir) => dir.id === id)

//   if(!dirData){
//     return res.status(404).json({message : "DIRECTORY NOT FOUND"})
//   }

//   dirData.name = newDirName
//   try{
//   await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
//   res.status(200).json({message: "Directory Renamed!"})
//   }
//   catch(err){
//     next(err)
//   }
// })















// router.delete("/:id", async (req, res,next) => {
//   const {id} = req.params
//   try {
//     const dirIndex = directoriesData.findIndex((directory) => directory.id === id)

//         if (dirIndex === -1) {
//       return res.status(404).json({ message: "Directory not found" })
//     }


//     const directoryData = directoriesData[dirIndex]

// console.log(directoryData)
//     directoriesData.splice(dirIndex, 1)
//     for await (const fileId of directoryData.files) {
//       const fileIndex = filesData.findIndex((file) => file.id === fileId)
//       const fileData = filesData[fileIndex]
//       await rm(`./storage/${fileId}${fileData.extension}`);
//       filesData.splice(fileIndex, 1)
//     }
//     for await (const dirId of directoryData.directories) {
//       const dirIndex = directoriesData.findIndex(({id}) => id === dirId)
//       directoriesData.splice(dirIndex, 1)
//     }
//     const parentDirData = directoriesData.find((dirData) => dirData.id === directoryData.parentDirId)
//     parentDirData.directories = parentDirData.directories.filter((dirId) => dirId !== id)
//     await writeFile('./filesDB.json', JSON.stringify(filesData))
//     await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
//     res.status(200).json({ message: "Directory Deleted!" });
//   } catch (err) {
//     next(err)

//   }
// });






// export default router;






































import express from "express";
import { readFile, writeFile, rm } from "fs/promises";
import crypto from "crypto";
import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";

const router = express.Router();

router.param("parentDirId", validateIdMiddleware);
router.param("id", validateIdMiddleware);



// =========================
// GET DIRECTORY
// =========================
router.get("/:id?", async (req, res) => {
  const user = req.user;

  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const filesData = JSON.parse(
      await readFile("./filesDB.json", "utf-8")
    );

    const id = req.params.id || user.rootDirId;

    const directoryData = directoriesData.find((dir) => dir.id === id);

    if (!directoryData) {
      return res.status(404).json({ message: "Directory not found" });
    }

    const files = directoryData.files.map((fileId) =>
      filesData.find((file) => file.id === fileId)
    );

    const directories = directoryData.directories
      .map((dirId) => directoriesData.find((dir) => dir.id === dirId))
      .map(({ id, name }) => ({ id, name }));

    return res.status(200).json({
      ...directoryData,
      files,
      directories,
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

  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const parentDirId = req.params.parentDirId || user.rootDirId;
    const dirname = req.headers.dirname || "NEW FOLDER";

    const parentDir = directoriesData.find(
      (dir) => dir.id === parentDirId
    );

    if (!parentDir) {
      return res.status(404).json({ message: "Parent directory not found" });
    }

    const id = crypto.randomUUID();

    const newDir = {
      id,
      name: dirname,
      parentDirId,
      userId: user.id,
      files: [],
      directories: [],
    };

    directoriesData.push(newDir);
    parentDir.directories.push(id);

    await writeFile(
      "./directoriesDB.json",
      JSON.stringify(directoriesData, null, 2)
    );

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

  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const dirData = directoriesData.find((dir) => dir.id === id);

    if (!dirData) {
      return res.status(404).json({ message: "DIRECTORY NOT FOUND" });
    }

    dirData.name = newDirName;

    await writeFile(
      "./directoriesDB.json",
      JSON.stringify(directoriesData, null, 2)
    );

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