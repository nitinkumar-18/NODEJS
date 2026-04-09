


import { MongoClient, ObjectId } from "mongodb";

const client=new MongoClient("mongodb://localhost:27017/");

await client.connect()




const db=client.db("school");

const studentsCollection=db.collection("students");

// console.log(studentsCollection);



// const a= await studentsCollection.updateOne({_id:new ObjectId("69bc77cd53959e8986737ca8")},

// {$set:{name:"MAH"}}
// )



// const a= await studentsCollection.updateOne({_id:new ObjectId("69bc77cd53959e8986737ca8")},

// {$set:{class:10,age:17}}
// )




const a= await studentsCollection.replaceOne({_id:new ObjectId("69bc77cd53959e8986737ca8")},

{test:"testing"}
)



console.log(a);

client.close();









