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




// import { MongoClient,ObjectId } from "mongodb";


// const client=new MongoClient("mongodb://localhost:27017");

// await client.connect();

// const db=client.db();


// const collection=db.collection("users");


// const a=await collection.insertMany([
//     {name : "TASH"},
//      {_id:new ObjectId('69c8fe5e91a72a3bd8ee8175'),name : "NIN"},
//       {name : "AN"},
//        {name : "DHI"},

// ],{ordered:false})
// console.log(a);

// // const data=await collection.find().toArray();


// // console.log(data);

// client.close();















//upsert bolo toh insert aur update ko mila kar bana hai

// upsert lagate hi agar nhi hai toh insert karke update karega true karoge toh hogha vrna false par nhi hogha upsert



// upsert by default value false





// import { MongoClient } from "mongodb";


// const client=new MongoClient("mongodb://localhost:27017");


// await client.connect();

// const db=client.db();

// const collection=db.collection("users");

// const result=await collection.updateOne(
//     {name :"Ai"},
//     {$set:{age:90}},
//     {upsert : true}
// );


// console.log(result);

// client.close();









































// db.runCommand() in mongosh shell
//db.Command({ listDatabases: 1 }); work normally

// kuch command ke liye admin database ki permission chaiyeh hoti hai jo essse hi kahi sai bhi run hoghi








//  errmsg: 'listDatabases may only be run against the admin database.',
//const result=await db.command({listDatabases :1 });



// method sai bhi db.listCollections() thik issai bhi ho skta hai thik aur suno  method yeh command ka hi abstraction hai but command bhaut powerful hote hai




import { MongoClient } from "mongodb";


const client=new MongoClient("mongodb://localhost:27017/newDB");


await client.connect();

const db=client.db();


// const result=await db.command({listCommands :1 });





// const result=await db.command({listDatabases :1 });



// const result=await db.command({listCollections :1 });

// db.listCollections();


// console.log(result.cursor.firstBatch);



//OR 

// console.log(await db.listCollections().toArray());










// const collection=db.collection("fruits");
// await collection.insertOne({name : "MANGO"})










//yeh essa collection create karega jo completely khali hogha


//via method we create collection
// await db.createCollection("vegetables");
//OR

// const result=await db.command({create : "GRAINS"});

// console.log(result);





// empty database nhi bana skte hai essa koi command nhi hai







// const result=await db.command({drop : "GRAINS"});

// console.log(result);





// const result=await db.collection("vegetables").rename("veggies");

// console.log(result);



///db.runCommand({hostInfo:1})


// test> db.runCommand({hostInfo:1})
// {
//   system: {
//     currentTime: ISODate('2026-03-29T13:20:27.826Z'),
//     hostname: 'Tanishs-MacBook-Air.local',
//     cpuAddrSize: 64,
//     memSizeMB: Long('16384'),
//     memLimitMB: Long('16384'),
//     numCores: 10,
//     numCoresAvailableToProcess: 10,
//     numPhysicalCores: 10,
//     numCpuSockets: 1,
//     cpuArch: 'arm64',
//     numaEnabled: false,
//     numNumaNodes: 1
//   },
//   os: { type: 'Darwin', name: 'Mac OS X', version: '25.3.0' },
//   extra: {
//     versionString: 'Darwin Kernel Version 25.3.0: Wed Jan 28 20:49:24 PST 2026; root:xnu-12377.81.4~5/RELEASE_ARM64_T8132',
//     alwaysFullSync: 0,
//     nfsAsync: 0,
//     model: 'Mac16,12',
//     cpuString: 'Apple M4',
//     pageSize: 16384,
//     scheduler: 'edge'
//   },
//   ok: 1
// }
// test> 




await db.command({ dropDatabase: 1 });







client.close();