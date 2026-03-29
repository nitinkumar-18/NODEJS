import { MongoClient, ObjectId } from "mongodb";







// const oid1=new ObjectId('69c173bbb89f53c6217fd59d')

// const oid2=new ObjectId('69c173bbb89f53c6217fd59d')

// console.log(oid1.toString() === oid2.toString());
//above console give true value




// network ke through hum transfer kar skte hai





// const oid=new ObjectId();
// console.log(oid);



// BSON mai save hai







console.log(ObjectId.isValid("69c173bbb89f53c6217fd59d"));



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


