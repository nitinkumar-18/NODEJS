// import { MongoClient, ObjectId } from "mongodb";







// const oid1=new ObjectId('69c173bbb89f53c6217fd59d')

// const oid2=new ObjectId('69c173bbb89f53c6217fd59d')

// console.log(oid1.toString() === oid2.toString());
//above console give true value




// network ke through hum transfer kar skte hai





// const oid=new ObjectId();
// console.log(oid);



// BSON mai save hai







// console.log(ObjectId.isValid("69c173bbb89f53c6217fd59d"));



// yeh above code ek js object hai

// console.log(oid.buffer.toString());


// objid 12 bytes ka space leta hai

// string mai karo toh jyda hojaega





// time machine increment
// object id ko plain string mai nahi karte hai kyoki jabh hum kam byte mai kar skte hai















// const old=new ObjectId('69c173bbb89f53c6217fd59d');


// console.log(old.buffer.toString());

// console.log(old.buffer.toString());

//mongo db ka object id 

// yeh humko buffer mai bataega

// 12 byte leta hai haarr


// const client=new MongoClient("mongodb://localhost:27017/storageApp")



// await client.connect();

// const db=client.db();


// const collection=db.collection("users");

// const data=await collection.findOne();


// console.log(data);

// client.close();










// multiple document ordered insert

// bole toh agar ek fail hua toh agee bhi insert nhi hote hai thik na



//by default test banta hai thik na



// ordered by default value true hoti hai thik na aur suno agar tum vo bhi true karoge ordered true so means ki toh agar phir kuch galat hogha toh agee nhi jaega in case false karoge set toh galat bhi hua aur error bhi hua toh bhi insert ho skta hain




import { MongoClient,ObjectId } from "mongodb";


const client=new MongoClient("mongodb://localhost:27017");

await client.connect();

const db=client.db();


const collection=db.collection("users");


const a=await collection.insertMany([
    {name : "TASH"},
     {_id:new ObjectId('69c8fe5e91a72a3bd8ee8175'),name : "NIN"},
      {name : "AN"},
       {name : "DHI"},

],{ordered:false})
console.log(a);

// const data=await collection.find().toArray();


// console.log(data);

client.close();