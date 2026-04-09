
// import usersData from "../usersDB.json" with {type:"json"}
// export default function CheckAuth(req,res,next){
//      const {uid}=req.cookies

import { ObjectId } from "mongodb"

//   const user=usersData.find((user)=>user.id === uid)
//   if(!uid || !user){
//     return res.status(401).json({error :"NOT LOGGED IN"})
//   }
//   req.user=user
//   next();
// }







// import usersData from "../usersDB.json" with { type: "json" }

export default async function CheckAuth(req,res,next){
  const { uid } = req.cookies


  const db=req.db


if(!uid ){
    return res.status(401).json({error :"NOT LOGGED IN"})
  }



  

  const user = await db.collection("users").findOne({_id : new ObjectId(String(uid))});

  if( !user){
    return res.status(401).json({error :"NOT LOGGED IN"})
  }

  req.user = user
  next()
}