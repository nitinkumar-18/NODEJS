import express from "express";

import {  rm, writeFile } from "fs/promises";

import directoriesData from '../directoriesDB.json' with {type: "json"}

import usersData from "../usersDB.json" with {type :'json'};
import { error } from "console";


const router = express.Router();



router.post('/',async(req,res,next)=>{
    const {name,email,password}=req.body
    const dirId=crypto.randomUUID();
    const userId=crypto.randomUUID();


    const foundUser=usersData.find((user)=>user.email === email)

    if(foundUser){
       return res.status(409).json({
            error : "User already exists",
            message:"A user with this email address already exist.please try to login with different email"
         })
    }




directoriesData.push({
    id:dirId,
    name:`root-${email}`,
    userId,
    parentDirId:null,
    files:[],
    directories:[]
})

    const userid=crypto.randomUUID();
    usersData.push({
        id:userid,
        name,
        email,
        password,
        rootDirId:dirId

    })


    try{
          await writeFile('./directoriesDB.json', JSON.stringify(directoriesData));


            await writeFile('./usersDB.json', JSON.stringify(usersData));


            res.status(201).json({message:"User registered"})


    }
    catch(err){
        next(err)
    }

})








export default router;

















