// import express from "express";




// const app=express();

// app.disable("x-powered-by"); // to hide the technology used in backend for security purpose


// const port=2700;








// app.get("/",(req,res)=>{
    // if we use  res.end() then 
    // res.end("TANISH TANDON EXPRESS JS"); // white text background will be black
    // res.send("TANISH TANDON EXPRESS JS");// white text background will be white








    // jo res.send hai vo two lines equal hota hai below 
    // yeh jo do lines hai yeh dono res.send ke barabar hai output bhi same hoga black background white text but agar hum res.send ke bad res.setHeader karenge to vo res.send se pehle hona chahiye warna error aayega

    // res.setHeader("Content-Type","text/html;charset=utf-8");

    // res.end("TANISH TANDON EXPRESS JS 😃😃");

    // res.send("TANISH TANDON EXPRESS JS 😃😃");

    // yeh emoji as it is print hoghi due to charset=utf-8 otherwise yeh question mark ke form me print hoti



// charset=utf-8 is used to display hindi text or emojis and all in browser otherwise it will show as question mark




// })

// app.listen(port,()=>{
//     console.log(`TANISH APP IS RUNNING ON PORT ${port}`);
// })



















// import express from "express";

// import http from "node:http";

// const app=express();

// const port=2700;

// app.disable("x-powered-by")

// app.get("/",(req,res)=>{
//     res.end("HELLO WORLD");
// });

// app.get("/test",(req,res)=>{
//     res.end("HELLO TANISH IS BACK NOW");
// })


// console.log(app);

// const server=http.createServer(app)
// server.listen(port);











// yeh jo server sai likho yaa app.listen ek hi kamm ho rha hai  yeh jo app hai this ko represent kar rha hai behind the scene


// req,res,next yeh 3 hote hai









// app.listen(port,()=>{
  
//     console.log(`TANISH APP IS RUNNING ON PORT ${port}`);
// })








// yeh jo app hai na ek function hai aur handler function hai
















// Express App kya manage karta hai?
// Feature.     	Kaam
// Routing.      	URL handle
// Middleware	    request modify
// Parsing	        JSON parse
// Error handling 	errors manage
// Static files	    images serve
















































