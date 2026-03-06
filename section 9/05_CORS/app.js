// import express from "express";

// const app = express();
// const PORT = 4000;

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello, world get!" });
// });

// app.post("/api", (req, res) => {
//   res.json({ message: "Hello, world post!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





























import { all } from "axios";

import express from "express";
import cors from "cors";


const app=express();

const PORT=2400;

app.use(cors());

app.use(express.static("public"));

// app.use((req,res,next)=>{
  
  // const allowedOrigin=["http://127.0.0.1:5501","http://localhost:5501","http://127.0.0.1:5500"]

  // if(allowedOrigin.includes(req.headers.origin)){
  // res.set("Access-Control-Allow-Origin", "*")
  // }

  //OR
//   res.set("Access-Control-Allow-Origin","*");
//   next(); 
// })


app.get("/api",(req,res)=>{

  res.json({message : "GET THE SIDE TANISH HERE"});

});





app.post("/api",(req,res)=>{
  res.json({message :"POST THIS SIDE TANISH" });
});




app.put("/api",(req,res)=>{
  res.json({message :"PUT THIS SIDE TANISH" });

})



app.listen(PORT,()=>{
  console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
})



 // undefined means same origin par call hai
 // CORS policy browser par hoti hai yhe isliye hoti hai cors policy kyoki security reasons ki vajah sai









//  app.use(cors());


  // or

// app.use((req,res,next)=>{
  
  // const allowedOrigin=["http://127.0.0.1:5501","http://localhost:5501","http://127.0.0.1:5500"]

  // if(allowedOrigin.includes(req.headers.origin)){
  // res.set("Access-Control-Allow-Origin", "*")
  // }

  //OR
//   res.set("Access-Control-Allow-Origin","*");
//   next(); 
// })





// use of cors enable all the preflight features