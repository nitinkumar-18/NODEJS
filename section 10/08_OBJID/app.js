// ADD BASIC SCHEMA VALIDATION IN MONGO DB


// import { MongoClient } from "mongodb";


// const client=new MongoClient("mongodb://localhost:27017/")


// await client.connect();


// const db=client.db();

// const collection=db.collection("user");

// await collection.insertMany([
//     {name : "TANISH" , age: 50},
//     {name : "ADHYAN" , age:29},
// ]);


// client.close();













// sbse powerful json schema hota hai apna 




import { MongoClient } from "mongodb";


const client=new MongoClient("mongodb://localhost:27017/")


await client.connect();


const db=client.db();

const collection=db.collection('user')
/// collection modifier colMod

await db.command({collMod:'user',
     validator:{
    
  name: {
    $type: 'string'
  },
  age: {
    $type: 'int',
    $gte: 18,
    $lte: 80
  }

},
validationAction:'warn'
}
)






// const collections=await db.listCollections().toArray();

// console.log(collections[0].options);



// await  collection.insertOne({name : "tanish"});

// dekho niche humne test add kia hai isme hojaega thik lekin typescipt mai error dega
 
// try{
//    await  collection.insertOne({name : "tanish", age: 34,test:"HELLO "});
// }catch(err){
//     console.log(err);m
// }



client.close();

