











import { MongoClient, ObjectId } from "mongodb";

const client=new MongoClient("mongodb://localhost:27017/");

await client.connect()

// const db=client.db('school');//school database create karna hai
const db=client.db('school2')

//crate operation

// const studentsCollection=db.collection("students");

// const teachersCollection=db.collection("teachers");

// jabh bhi database call hojae await lagha do
// const result1=await studentsCollection.insertOne({name:"TANISH",age:20});

// const result2=await teachersCollection.insertMany([
//     {name:"MAHI",age:7},
//     {name:"VIRAT",age:40},
// ]);

// console.log(result1);
// console.log(result2);



// const tanishCollection=db.collection("tanish");
// const teacherCollection=db.collection("teacher")

// const result1=await tanishCollection.insertOne({name:"DHOn",age:200});

// const result2=await teacherCollection.insertMany([
//     {name : "shubh",age:8},

// ])



client.close();










