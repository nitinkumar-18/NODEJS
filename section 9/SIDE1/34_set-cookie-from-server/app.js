import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 2900;


app.use(cookieParser())
app.use(cors({
  origin:"http://127.0.0.1:3000",
  credentials:true
})
);

app.get("/", (req, res) => {
  console.log(req.cookies.email)

  // res.set({
  
  //   // "Access-Control-Allow-Credentials":true,
  //   // 'Set-Cookie' :[ `myTime=${new Date().toLocaleTimeString()};SameSite=None; Secure`,
  //   // ]
  //   'Set-Cookie' : [
  //     `name=TANISH;SameSite=None;secure`,
  //           `age=19;SameSite=None;secure`,
  //                `gmail=an@gmail.com;SameSite=None;secure`
  //   ]


    // maxAge prefernece very high 
  // })

  res.cookie("name","TANISH",{
    sameSite:"none",
    secure:true,
    maxAge:60*1000*60,
    
  }),
   res.cookie("age","29",{
    sameSite:"none",
    secure:true,
    maxAge:60*1000*60,
    
  }),
  res.cookie("email","t@gmail.com",{
    sameSite:"none",
    secure:true,
    maxAge:60*1000*60,
    
  })


  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
