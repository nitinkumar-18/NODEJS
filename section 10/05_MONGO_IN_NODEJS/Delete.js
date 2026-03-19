











import { MongoClient, ObjectId } from "mongodb";

const client=new MongoClient("mongodb://localhost:27017/");

await client.connect()

// const db=client.db('school');//school database create karna hai
const db=client.db('school2')

//crate operation

// const studentsCollection=db.collection("students");

// const teachersCollection=db.collection("teachers");




// await studentsCollection.drop();

// await teachersCollection.drop();

// console.log(await studentsCollection.drop());



// const a=await teachersCollection.deleteOne({_id:new ObjectId("69bc78b3ce653592659d81fe")});
// console.log(a);



//single property delete here
// const a=await teachersCollection.updateOne(
//     {
//         _id:new ObjectId("69bc78b3ce653592659d81ff"),
//     },

//     {$unset:{age:""}}
// );
// console.log(a);

console.log(await db.dropDatabase());

client.close();










