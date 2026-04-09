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









































//MIDDLEWARE
// yeh ek function basically koi incoming request aur response ke bich mai bethega

//"/",(req,res)=>{
//     res.end("TANISH TANDON IS HERE");
// });

//yeh above jo function hai vo middleware hai 






// import express from "express";


// const app=express();

// const PORT =2700;



// infinite middleware de skte hai



// dekho response ek barr bhejdeia aur end kar dia phir bhejoge koi fayda nhi hogha

// next lagane sai jo next req res hai vo bhi use hogha







// app.get("/",(req,res,next)=>{
//     console.log("RUNNING MIDDLEWARE 1")
//     res.write("TANISH TANDON IS HERE 1\n");
//     next();
// },







// (req,res,next)=>{
//     console.log("RUNNING MIDDLEWARE 2")
//     res.write("TANISH TANDON IS HERE 2\n");
//     next();
//     // yaha next likhdo end mai koi error nhi agar iske agee kuch ho bhi na ho
// },






// (req,res,next)=>{
//     console.log("RUNNING MIDDLEWARE 3")
//     res.write("TANISH TANDON IS HERE 3\n");
//     next();
  
  
// },





// (req,res)=>{
//     console.log("RUNNING MIDDLEWARE 4")
//     res.end("TANISH TANDON IS HERE 4");
  
  
// },






// );







// app.listen(PORT,()=>{
//     console.log(`Server is listening on PORT ${PORT}`);
// })

























// this will give you an error kyoki phele next call ho chuka hai bhaii flow ko samjo



// import express from "express";

// const app=express();

// const PORT=2700;



// app.get("/",(req,res,next)=>{
//     console.log("RUNNING MIDDLEWARE 1");
//      next();
//     res.write("TANISH TANDON IS HERE 1\n");
   
// },

// (req,res)=>{
//     console.log("RUNNING MIDDLEWARE 2");
//     res.end("TANISH TANDON IS HERE 2\n")


// }
// );

// app.listen(PORT,()=>{
//     console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
// })












// middleare ek array ke andar store karte jata hai behind the scenes



// yeh erro nhi dega kyoki next ka flow dekho write end esse samjo flow uska bdia hai yeh

// import express from "express";

// const app=express();

// const PORT=2700;



// app.get("/",
    // (req,res,next)=>{
            // (req,res)=>{
    // console.log("RUNNING MIDDLEWARE 1");
    //  next('TANISH');
    // res.end("TANISH TANDON IS HERE 1\n");
    //   next('TANISH');


    // yeh try catch mai humne error handling kia hai

 
        // console.log("RUNNING MIDDLEWARE 1");

        // throw new Error("error Occured");

        // console.log(num);
        // res.end("hii");
 // nex() ke andar kuch bhi pass karo jo truthy value ho toh error middleware
   
// },

// (req,res)=>{
    //error ko handle karna
   
//     console.log("RUNNING MIDDLEWARE 2");
//     res.write("TANISH TANDON IS HERE 2\n")


// },


// agar yeh 4 params wala nhi likhoge toh crash hojaega server jaldi sai
//  (err,req,res,next)=>{
    //error ko handle karna
    // console.log({err : err.message});
    // console.log(" ERROR RUNNING MIDDLEWARE");
 
    // res.end("TANISH TANDON IS HERE ERROR\n");

    // res.end(err.message);
   
// },

// );

// app.listen(PORT,()=>{
//     console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
// })









/// middlewares are of two types
// request handler middleware isme 2 ya 3 params hoghe
//(req,res,next) and (req,res) bich yaa start mai 3 params hoghe last mai 2 hoghe params

// agar 2 yaa 3 params hai toh req aegi toh inke pass aegi






// 2.error handling middleware usme 4 params hoghe
// vo error bhi handle karega request and response ke sath sath


// dekho next() yeh likha hai matlab response hi handle hogha uske baadh agar uske andar kuch likha hai like next('tanish')tabh error ayega 





// jabh next ko call karo with truthy value





















































// import express from "express";

// const app=express();

// const PORT=2700;



//LOGGING REQUEST(LOG REQUEST) request ko hum likh rhe hai log ka means hai yeh



// yeh below mai humne custom middleware banaya hai jo body parse kar rha hai
// app.use((req,res,next)=>{
    // res.end("GLOBAL MIDDLEWARE");

    



    // req.on("data",(chunk)=>{
    //     const reqBody=JSON.parse(chunk.toString());
   


    //     req.body=reqBody;



    //       next();

    // })
    


   

  

// })





// upar humne apna kudh kaa middleware banaya hai custom middleware use that but use this app.use(express.json()) best hai yeh




// app.use(express.json());
// 

// yeh ek function hi return karta hai
// yeh bana banaya function hai express mai phele kya tha express mai yeh ek body-parser use karta thaa yeh yeh ek library hai




//app.use(express.json()).  app.use ek middle ware set karne ka tarika hai jo express.json return karega vo function middleware hai debug console mai debugger laghakar check karo

// app.get("/",(req,res)=>{



//     console.log(req.headers);

//     console.log(req.url);
   
//     res.end("Express HOME\n");
// });











//user
// app.get("/user",(req,res)=>{
//     console.log(req.url);
   
//     res.end("TANISH CODER\n");
// });








// app.post("/user",(req,res)=>{
//     console.log(req.url);
//     console.log(req.body);
   
//     res.end("post CODER\n");
// });









// //login
// app.get("/login",(req,res)=>{
//     console.log(req.url);
   
//     res.end("LOGIN  IS TANISH EXPRESS\n");
// });














// app.listen(PORT,()=>{
//     console.log(`TANISH app listen on port ${PORT}\n`);
// });












// jo url hota hai vo   http://192.168.1.7:2700/login yeh jo login hai vo hum isko req kar rhe hai login hoskta kuch bhi ho skta hai yeh url hai or req url bhi yehi hai
// console.log(req.url) sai access bhi kar skte hai







// abh route kya hota hai route hamara. app.delete("/",(req,res)
// yeh jo double comma mai likha hai vo hai yeh delete ka route  get ka route patch ka route esse hi 
// console.log(req.route) sai bhi access kar skte ho tum object milega
// agar console.log(req.route.path)toh humko same req.url ke equal milega output

// maximum mai same hota hai req.url hai req.route.path but kuch mai change bhi hota hai





// jo request url ki request ko handle karega vo route.path







































import express from "express";

const app=express();

const PORT=2700;

app.use(express.json());// body parse karega
// req.url is only trimmed in app.use


app.use("/admin",(req,res,next)=>{
 //   console.log(req.url) // issai tumhe sirf slash / milega kyoki app.use jo hota hai kuch part trim kartdeta hai
   // console.log(req.originalUrl)// issai correct /admin yeh url milega har ke liye sirf app.use ke liye trim karega

    if(req.body.password === "SECRET"){
        next();



    }

    else {
        res.end("INVALID CREDENTIALS");
    }
    


   
})




app.post("/admin",(req,res)=>{
    res.end("HELLO ADMIN");
})


// order ka bhaut dhyan do

// but in app.use we isme alaga trah sai comparision hota hai yeh level ke roop mai match karta hai /users/1 toh /users yeh first level,/1 second level hua yeh check karega match hua toh aage jaega atleast pura level toh match hona hi chaiyeh isme

// app.use("/users",(req,res,next)=>{


//     res.send("FIRST MIDDLEWARE");

    // res.end("MY MIDDLEWARE")
// })


// app.use("/user/1",(req,res,next)=>{

   

    // res.send("SECOND MIDDLEWARE ");

    // res.end("MY MIDDLEWARE")
// })





// app.get("/",(req,res)=>{



  

//     console.log(req.url);

//         console.log(req.route.path);


    

//     res.end("Express HOME\n");
// });











//user
// app.get("/user",(req,res)=>{
//     console.log(req.url);
   
//     res.end("TANISH CODER\n");
// });








// app.post("/user",(req,res)=>{
//     console.log(req.url);
//     console.log(req.body);
   
//     res.end("post CODER\n");
// });









//login
// app.get("/login",(req,res)=>{
//     console.log(req.url);
   
//     res.end("LOGIN  IS TANISH EXPRESS\n");
// });














app.listen(PORT,()=>{
    console.log(`TANISH app listen on port ${PORT}\n`);
});















//yeh post patch put delete mai hota hai 
// if req.url === routeName tabh hi chalega yeh yaad rakho tabhi vo login middleware mai jaega
// example "/login" === "/login"
















// app.use kaise run hota hai yeh hai ki yhe check js ka function like /users===/users/1 means startswith() agar start bhi horha hai toh wahi run hojaega    "/users/1".startsWith("/users");