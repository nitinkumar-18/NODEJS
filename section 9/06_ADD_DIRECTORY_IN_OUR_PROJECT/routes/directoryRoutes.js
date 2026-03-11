import express from "express";
import { mkdir, readdir, rm, stat, writeFile } from "fs/promises";
import path from "path";
import directoriesData from '../directoriesDB.json' with {type: "json"}
import filesData from '../filesDB.json' with {type: "json"}

const router = express.Router();





// Read
router.get("/:id?", async (req, res) => {
  const {uid}=req.cookies

  if(!uid){
    return res.status(401).json({error :"NOT LOGGED IN"})
  }
  console.log(uid)
  const id  = req.params.id || directoriesData[0].id
  const directoryData =  directoriesData.find((directory) => directory.id === id)

  if(!directoryData)return res.status(404).json({message:"Directory not found"})
  const files = directoryData.files.map((fileId) =>
    filesData.find((file) => file.id === fileId)
  )
  const directories = directoryData.directories.map((dirId) =>
    directoriesData.find((dir) => dir.id === dirId)
  ).map((({ id, name }) => ({ id, name })))
 return res.status(200).json({ ...directoryData, files, directories })
});












router.post("/:parentDirId?", async (req, res,next) => {
  const parentDirId = req.params.parentDirId || directoriesData[0].id
  // const dirname  = req.headers || 'NEW FOLDER'
  const  dirname = "NEW FOLDER" || req.headers.dirname;
  const id = crypto.randomUUID()
  const parentDir = directoriesData.find((dir) => dir.id === parentDirId)
  if(!parentDir)return res.status(404).json({message : "PARENT DIRECTORY DOES NOT EXIST"})
  parentDir.directories.push(id)
  directoriesData.push({
    id,
    name: dirname,
    parentDirId,
    files: [],
    directories: []
  })
  try {
    await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
    return res.json({ message: "Directory Created!" })
  } catch (err) {
  //  return res.status(404).json({ err: err.message });
  next(err)
  }
});











router.patch('/:id', async (req, res,next) => {
  const {id} = req.params
  const {newDirName} = req.body
  const dirData = directoriesData.find((dir) => dir.id === id)

  if(!dirData)res.status(404).json({message : "DIRECTORY NOT FOUND"})
  dirData.name = newDirName
  try{
  await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
  res.status(200).json({message: "Directory Renamed!"})
  }
  catch(err){
    next(err)
  }
})















router.delete("/:id", async (req, res,next) => {
  const {id} = req.params
  try {
    const dirIndex = directoriesData.findIndex((directory) => directory.id === id)

        if (dirIndex === -1) {
      return res.status(404).json({ message: "Directory not found" })
    }


    const directoryData = directoriesData[dirIndex]

console.log(directoryData)
    directoriesData.splice(dirIndex, 1)
    for await (const fileId of directoryData.files) {
      const fileIndex = filesData.findIndex((file) => file.id === fileId)
      const fileData = filesData[fileIndex]
      await rm(`./storage/${fileId}${fileData.extension}`);
      filesData.splice(fileIndex, 1)
    }
    for await (const dirId of directoryData.directories) {
      const dirIndex = directoriesData.findIndex(({id}) => id === dirId)
      directoriesData.splice(dirIndex, 1)
    }
    const parentDirData = directoriesData.find((dirData) => dirData.id === directoryData.parentDirId)
    parentDirData.directories = parentDirData.directories.filter((dirId) => dirId !== id)
    await writeFile('./filesDB.json', JSON.stringify(filesData))
    await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
    res.status(200).json({ message: "Directory Deleted!" });
  } catch (err) {
    next(err)

  }
});






export default router;






// import express from "express";
// import multer from "multer";
// import path from "path";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads')
//   },
//   filename: function (req, file, cb) {
//     const id=crypto.randomUUID();
//     const extension=path.extname(file.originalname);
//     file.id=id;
  
//     cb(null, `${id}${extension}`);
//   }
// })

// const upload = multer({  storage })

// // const upload=multer({dest : 'uploads/'})

// const app = express();
// const PORT = 2800;

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.post("/upload",upload.fields([
//   {name:"profilePic",maxCount:1},
//    {name:"bg",maxCount:5},

// ]), (req, res) => {
//   // req.on("data", (chunk) => {
//   //   console.log(chunk.toString());
//   // });


//   console.log(req.body)
//   console.log(req.file)
//   res.json(req.files)
  
//     res.json({ message: "Data Sent!" });
  
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
