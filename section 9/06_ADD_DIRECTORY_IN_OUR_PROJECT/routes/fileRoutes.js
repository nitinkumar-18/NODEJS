import express from "express";
import { createWriteStream } from "fs";
import {  rm, writeFile } from "fs/promises";
import path from "path";
import directoriesData from '../directoriesDB.json' with {type: "json"}
import filesData from '../filesDB.json' with {type: "json"}


const router = express.Router();





// res.json karo return laga do 


// Create
router.post("/:parentDirId?", (req, res,next) => {
  const parentDirId = req.params.parentDirId || directoriesData[0].id
  const filename = req.headers.filename || 'untitled';
  const id = crypto.randomUUID();
  const extension = path.extname(filename);
  const fullFileName = `${id}${extension}`;
  const writeStream = createWriteStream(`./storage/${fullFileName}`);
  req.pipe(writeStream);
  req.on("end", async () => {
    filesData.push({
      id,
      extension,
      name: filename,
      parentDirId,
    })
    const parentDirData = directoriesData.find((directoryData) => directoryData.id === parentDirId)
    parentDirData.files.push(id)


    try{
    await writeFile('./filesDB.json', JSON.stringify(filesData))
    await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
   return res.status(201).json({ message: "File Uploaded" });
    }
    catch(err){
      next(err);



 
    }





  });
});













// Read
router.get("/:id", (req, res) => {
  const {id} = req.params
  const fileData = filesData.find((file) => file.id === id)

  if(!fileData){
    return res.status(404).json({message : "FILE NOT FOUND!"});
  }





  if (req.query.action === "download") {
    res.set("Content-Disposition", `attachment; filename=${fileData.name}`);
  }
 return res.sendFile(`${process.cwd()}/storage/${id}${fileData.extension}`, (err) => {
    // console.log(err);
    if (!res.headersSent && err) {
      return res.status(404).json({ error: "File not found!" });
    }
  });
});
















// Update
router.patch("/:id", async (req, res,next) => {
  const {id} = req.params;
  const fileData = filesData.find((file) => file.id === id)
  fileData.name = req.body.newFilename

try{

 
  await writeFile('./filesDB.json', JSON.stringify(filesData))
 return res.status(200).json({ message: "Renamed" });
}
catch(err){
  err.status=510
  next(err)


}




});











// Ye 90% APIs me same rule hota hai:

// Operation	Code
// GET success	200
// POST create	201
// PUT/PATCH update	200
// DELETE success	204
// Data nahi mila	404
// Invalid input	400
// Server crash	500





// Delete
router.delete("/:id", async (req, res,next) => {
  const {id} = req.params
  const fileIndex = filesData.findIndex((file) => file.id === id)

  if(fileIndex === -1){
   return  res.status(404).json({message : "FILE NOT FOUND!"});
  }

  // if(!fileData){
  //   return res.status(404).json({message : "FILE NOT FOUND!"});
  // }










  const fileData = filesData[fileIndex]
  try {
    await rm(`./storage/${id}${fileData.extension}`, { recursive: true });
    filesData.splice(fileIndex, 1)
    const parentDirData = directoriesData.find((directoryData) => directoryData.id === fileData.parentDirId)
    parentDirData.files = parentDirData.files.filter((fileId) => fileId !== id)
    console.log(parentDirData.files);
    await writeFile('./filesDB.json', JSON.stringify(filesData))
    await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
   return res.status(200).json({ message: "File Deleted Successfully" });
  } catch (err) {
    // return res.status(404).json({ message: err.message });
    next(err);
  }
});

export default router;


















// Method	Typical Success Code
// GET	  200 OK
// POST	  201 Created
// PUT   	200 OK or 204 No Content
// PATCH	200 OK or 204 No Content
// DELETE	 204 No Content
// OPTIONS 200 OK




// Status Code	Meaning
// 200 OK	Data successfully mil gaya
// 404 Not Found	Resource exist nahi karta
// 401 Unauthorized	Authentication required
// 500 Internal Server Error	Server error