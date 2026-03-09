import express from "express";
import cors from "cors";
import directoryRoutes from "./routes/directoryRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/directory", directoryRoutes);
app.use("/file", fileRoutes);


app.use((err,req,res,next)=>{
  // console.log('ERROR Occurred');

  res.status(err.status || 500).json({message : "SOMETHING WENT WRONG!"});
})



app.listen(2200, () => {
  console.log(`Server Started`);
});
