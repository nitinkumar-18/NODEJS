




import express, { urlencoded } from "express"
const app=express();

//extended false means ek dum halka kardia ek dum halka lekin proper nhi deta like parse proper nhi karta 
// true mai kardet hai nested data ke liye extended true karo plain object ke liye extended false.  but use express.json always 
app.use(express.static("public"));
// app.use(express.text());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

//decodeURIComponent 

app.post("/user",(req,res)=>{
  // console.log(req.headers['content-type']);
  // req.on("data",(chunk)=>{ 
  //   console.log("chunk")
  //   console.log(chunk.toString());

  // })
  console.log({body :req.body});

  res.json({message : "GOT DATA"});
})



const PORT=3600;
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);

})