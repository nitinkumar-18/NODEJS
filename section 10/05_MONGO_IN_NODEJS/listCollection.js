// import { MongoClient } from "mongodb";

// const client = new MongoClient("mongodb://127.0.0.1:27017/");

// await client.connect();

// const db = client.db("expenseApp");
// // const collectionsList = await db.listCollections().toArray();
// // console.log(collectionsList);

// const collection = db.collection("expenses");
// const fruits = await collection.find().toArray();
// console.log(fruits);













































import { MongoClient } from "mongodb";





const client=new MongoClient("mongodb://localhost:27017/")

await client.connect();




// test naam ka database miljata hai node js mai below karte hi db wala

// const db=client.db();//by default yaha test database hai bracket mai kuch nhi doge toh


const db=client.db("expenseApp");

// console.log(db);
// console.log(db.databaseName);//test


// const collectionsList=await db.listCollections().toArray();//return promise
// console.log(collectionsList);


const collection=db.collection('expenses');

const fruits=await collection.find().toArray();
console.log(fruits);





