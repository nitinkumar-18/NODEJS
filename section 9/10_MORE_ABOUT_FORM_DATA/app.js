




import express, { urlencoded } from "express"
const app=express();



app.use(express.static("public"));
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//decodeURIComponent 

app.post("/user",(req,res)=>{
  console.log(req.headers['content-type']);
  req.on("data",(chunk)=>{ 
    console.log("chunk")
    console.log(chunk.toString());

  })
  console.log({body :req.body});

  res.json({message : "GOT DATA"});
})



const PORT=3600;
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);

})