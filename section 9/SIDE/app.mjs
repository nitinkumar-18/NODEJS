import express from "express";
import multer from "multer";

import path from "path";

import cors from "cors";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const id=crypto.randomUUID();
    const extension=path.extname(file.originalname);
    file.id=id;
  
    cb(null, `${id}${extension}`);
  }
})

const upload = multer({  storage })

// const upload=multer({dest : 'uploads/'})

const app = express();
const PORT = 2800;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/upload",upload.fields([
  {name:"profilePic",maxCount:1},
   {name:"bg",maxCount:5},

]), (req, res) => {
  // req.on("data", (chunk) => {
  //   console.log(chunk.toString());
  // });

  console.log("UPLOAD")

  // console.log(req.body)
  // console.log(req.file)
  // res.json(req.files)
  res.json({files : req.files , body:req.body})
    // res.json({ message: "Data Sent!" });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
