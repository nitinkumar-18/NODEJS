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




// import { MongoClient } from "mongodb";


// const client=new MongoClient("mongodb://localhost:27017/")


// await client.connect();


// const db=client.db();





// await db.createCollection("users",{
 
//        validator:{
    
//   name: {
//     $type: 'string'
//   },
//   age: {
//     $type: 'int',
   
//   }

// },
// })






// isme hum validation create karte time hi set kar dee rhe hai dekho   create karte time jo dena hai vo do baadh mai modify nahi kar skte ho aap like bich mai aap modify karo esaa kuch change karna hai toh collMod command dekho



// await db.command({
//   create:"users",
//        validator:{
    
//   name: {
//     $type: 'string'
//   },
//   age: {
//     $type: 'int',
   
//   }

// },

// });

// const collection=db.collection('user')//implicit
// db.createCollection//explicit
/// collection modifier colMod





// await db.createCollection("user")//explicit


// await db.command({create:'user'});//explicit




// await db.command({collMod:'user',
//      validator:{
    
//   name: {
//     $type: 'string'
//   },
//   age: {
//     $type: 'int',
//     $gte: 18,
//     $lte: 80
//   }

// },
// validationAction:'warn'
// }
// )






// const collections=await db.listCollections().toArray();

// console.log(collections[0].options);



// await  collection.insertOne({name : "tanish"});

// dekho niche humne test add kia hai isme hojaega thik lekin typescipt mai error dega
 
// try{
//    await  collection.insertOne({name : "tanish", age: 34,test:"HELLO "});
// }catch(err){
//     console.log(err);m
// }



// client.close();























import { MongoClient } from "mongodb";

const client=new MongoClient("mongodb://localhost:27017/")

await client.connect();

const db=client.db();





await db.command({
  collMod:"users",
  validator:{
    
  $jsonSchema: {
    required: [
      'name',
      'age'
    ],
    properties: {
      _id: {
        bsonType: 'objectId'
      },
      name: {
        bsonType: 'string',
        minLength: 7
      },
      age: {
        bsonType: 'int',
        minimum: 18,
        maximum: 80,
      
      }
    },
    additionalProperties: false
  }
}
  
})



