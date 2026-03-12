import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import directoryRoutes from "./routes/directoryRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import CheckAuth from "./auth.js";

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(cors({
  // origin :"http://localhost:5173",
  origin: true,
  credentials:true,
}));

;

app.use("/directory", CheckAuth,directoryRoutes);
app.use("/file",CheckAuth, fileRoutes);
app.use("/user",userRoutes);


app.use((err,req,res,next)=>{
  // console.log('ERROR Occurred');

  res.status(err.status || 500).json({message : "SOMETHING WENT WRONG!"});
})



app.listen(2200, () => {
  console.log(`Server Started`);
});
