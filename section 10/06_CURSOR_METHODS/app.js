import { MongoClient } from "mongodb";

const client=new MongoClient("mongodb://localhost:27017/");

await client.connect();
// yaha vo dekh rhe hai jo cursor return karte hai 

// const db=client.db("todoApp");

const db=client.db("expenseApp");

const collection=db.collection("expenses");

// const cursor=collection.find({}).limit(5).skip(1).sort({title:1});//ascending
// kuch bhi do title amount kuch bhi keyh


// const cursor=collection.find({}).limit(5).skip(1).sort({title:-1});//descending






// const cursor=collection.find().limit(0).skip(0).sort({amount:1})



//map hai jiski server takh nhi jaegi

const cursor=collection.find().limit(0).skip(0).sort({title:1}).filter({title:"Books"}).map(({title,amount})=>({title,amount}))



// filter sbse phele chalta chahe kucuh bhi order ho


// const cursor=collection.find().limit(0).skip(0).sort({amount:1,title:1}); // isme amount ko pheli priority hoghi jo aage usko special treatment

const data=await cursor.toArray();

// console.log(data.map(({title,amount})=>({title,amount})));

client.close();








