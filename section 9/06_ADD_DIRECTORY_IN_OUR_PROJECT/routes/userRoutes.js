import express from "express";

import {  rm, writeFile } from "fs/promises";

import directoriesData from '../directoriesDB.json' with {type: "json"}

import usersData from "../usersDB.json" with {type :'json'};
import { dir, error } from "console";
import CheckAuth from "../middlewares/authMiddleware.js";
import crypto from "crypto";
import { Db } from "mongodb";


// status code 300 ka aur headers location agaya redirect hojaega http


const router = express.Router();



router.post('/register',async(req,res,next)=>{
    const {name,email,password}=req.body

    const db=req.db;


    // const dirId=crypto.randomUUID();
    // const userId=crypto.randomUUID();


    // const foundUser=usersData.find((user)=>user.email === email)

    const foundUser=await db.collection('users').findOne({email});


    if(foundUser){
       return res.status(409).json({
            error : "User already exists",
            message:"A user with this email address already exist.please try to login with different email"
         })
    }

    

// const dirCollection=db.collection("directories");



// // directoriesData.push({
// //     id:dirId,
// //     name:`root-${email}`,
// //     userId,
// //     parentDirId:null,
// //     files:[],
// //     directories:[]
// // })







// const userRootDir=await dirCollection.insertOne({
   
//     // id:dirId,
//     name:`root-${email}`,
//     // userId,
//     parentDirId:null,
//     files:[],
//     directories:[],
// });

// // const rootDirId=userRootDir.insertId;
// const rootDirId = userRootDir.insertedId.toString();
// console.log(rootDirId);




//     // const userid=crypto.randomUUID();
//     // usersData.push({
//     //     id:userid,
//     //     name,
//     //     email,
//     //     password,
//     //     rootDirId:dirId

//     // })



//     const createdUser=db.collection("users").insertOne({
//         name,
//         email,
//         password,
//         rootDirId,
//     }


//     )

//     const userId=createdUser.insertedId;
//     await db.collection("directories").updateOne({_id:rootDirId},
//         {$set:{userId}}
//     )

  const dirCollection=db.collection("directories");
    try{

      



// directoriesData.push({
//     id:dirId,
//     name:`root-${email}`,
//     userId,
//     parentDirId:null,
//     files:[],
//     directories:[]
// })







const userRootDir=await dirCollection.insertOne({
   
    // id:dirId,
    name:`root-${email}`,
    // userId,
    parentDirId:null,
    files:[],
    directories:[],
    
});

// const rootDirId=userRootDir.insertId;
const rootDirId = userRootDir.insertedId;
console.log(rootDirId);




    // const userid=crypto.randomUUID();
    // usersData.push({
    //     id:userid,
    //     name,
    //     email,
    //     password,
    //     rootDirId:dirId

    // })



    const createdUser=await db.collection("users").insertOne({
        name,
        email,
        password,
        rootDirId,
    }


    )

    const userId=createdUser.insertedId;
    await db.collection("directories").updateOne({_id:rootDirId},
        {$set:{userId}}
    )





        //   await
        //  writeFile('./directoriesDB.json', JSON.stringify(directoriesData));


        //     await writeFile('./usersDB.json', JSON.stringify(usersData));


            res.status(201).json({message:"User registered"})


    }
    catch(err){
        next(err)
    }

})




router.post('/login',async(req,res,next)=>{
    // console.log(req.body);
 
    const {email,password}=req.body;

    const db=req.db

    // const user=usersData.find((user)=>user.email === email)


    const user=await db.collection('users').findOne({email,password});

    console.log(user);

    if(!user ){
        return res.status(404).json({error : "INVALID CREDENTIALS"});
    }
    // const userOid=user._id;
    // console.log(user._id.toString());

    // return;


  res.cookie("uid", user._id.toString() , {
  httpOnly: true,
  sameSite: "lax",
    secure: false,
  maxAge: 1000 * 60 * 60 * 24 * 7

});


//     res.cookie("uid", user.id, {
//   httpOnly: true,
//   sameSite: "none",
//   secure: false
// });

    res.json({message : 'LOGGED IN'})
})













router.get('/',CheckAuth,(req,res)=>{
    res.status(200).json({
        name:req.user.name,
        email:req.user.email,

    })

})




router.post('/logout',(req,res)=>{
    // res.status(200).json({
    //     name:req.user.name,
    //     email:req.user.email,
    // })

    //OR


//   res.cookie('uid','',{
//     maxAge:0
//   })


//.  OR


res.clearCookie('uid');

  res.status(204).end();

})




export default router;

















