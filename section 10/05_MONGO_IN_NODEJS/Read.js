

import { MongoClient } from "mongodb";

const client=new MongoClient("mongodb://localhost:27017/");

await client.connect()

const db=client.db('todoApp')

// console.log(db);



const collection=db.collection("todos");
// console.log(await db.listCollections().toArray());




// console.log(collection);



// collection.find();//cursor return karta hai jaha cursor dikhe waha toArray method lagha dena







//READ OPERATION BELOW LINES
// const todosData= await collection.find({completed:false}).toArray();//toArray lagate hi promise aega

// console.log(todosData);



















client.close();









