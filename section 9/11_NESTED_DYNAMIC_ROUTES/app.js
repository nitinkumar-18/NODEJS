// import express from "express";

// const app=express();

// app.get("/blogs/:blogId",(req,res)=>{
//     console.log(req.params);
//     res.json(req.params);



// });




// app.get("/blogs/:blogId/comments",(req,res)=>{
//     console.log('comments');
//     console.log(req.params);
//     res.json([1,3,4]);



// });




// app.get("/blogs/:blogId/comments/:commentId",(req,res)=>{
  
//     console.log(req.params);
//     res.json(req.params);



// });





// app.get("/blogs/:blogId/comments/:commentId/:pid",(req,res)=>{
  
//     console.log(req.params);
//     res.json(req.params);



// });


// const PORT=9000;
// app.listen(PORT,()=>{
//     console.log(`SERVER IS LISTENING on http://localhost:${PORT}`)
// })








import express from "express";

const app=express();

// app.get("/:number",(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// })





// except digit this below code of REGEX

// app.get("/\d/",(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// })









// this below code only exact one number 

// app.get(/^\/\d$/,(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// })











// ek sai jyada digit par bhi open hojaega
// app.get(/^\/\d+$/,(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// })


//regex object hai
// drawback it took time regex but flexible yrr


// app.get(/^\/(\d+$)/,(req,res)=>{
//     res.json({double: req.params[0]*2});

    // res.json({message : "TANISH IS HERE"});
// })









// app.get("/directory",(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// })




// app.get("/folder",(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// })



// use this line |
// app.get("/directory|folder",(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// });




// app.get("/user/:id([0-9])",(req,res)=>{
//     res.json({message : "TANISH IS HERE"});
// });



// app.get("/user/:id([0-9]+)",(req,res)=>{
//     res.json({id:req.params.id});
// });



//regex take more power 








app.get(["/directory","/folder","/test","/hi"],(req,res)=>{
    res.json({message : "TANISH IS HERE"});
});



const PORT=9000;
app.listen(PORT,()=>{
    console.log(`SERVER IS LISTENING on http://localhost:${PORT}`)
})